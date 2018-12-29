import QlikDataModel from './QlikDataModel'

var qlik = window.require('qlik');


export default ['$scope', '$element', function($scope, $element) {
  $scope.app = qlik.currApp(this);
  $scope.qlik = qlik;
  $scope.projectname = "";
  $scope.projectstatus = "NOT_CREATED";
  $scope.projectid = "";


  $scope.tableModel = new QlikDataModel();

  console.log($scope);

  $scope.connectDataRobot = function() {

    var apitoken = $scope.layout.props.apitoken;
    if(apitoken == ""){
      apitoken = $scope.apitoken;
    }
    console.log(apitoken);

    if(typeof apitoken != "undefined" && apitoken != ""){
      $scope.createProject(apitoken);
    }else{
      alert("Please enter an API Token in the properties panel to authenticate with DataRobot");

    }

  }

  $scope.selectAll = (() => {
    return $scope.tableModel.selectAll($scope.selectallvalue);
  });

  $scope.clearSearch = (() => {
    $scope.searchtext = '';
    return $scope.tableModel.clearSearch();
  });

  $scope.searchFields = ((searchvalue) => {
    return $scope.tableModel.searchFields(searchvalue);
  });

  $scope.countSelected = (() => {
    return $scope.tableModel.countSelected();
  });

  $scope.fieldSelectionChange = (() => {
    $scope.tableModel.tablesEnabledForSelectedFields();
  });

  $scope.createProject = ((apitoken) => {
    $scope.projectstatus = "CREATING";
    var fields = $scope.tableModel.selectedFields().map(f => "[" + f + "]").join(",");

    var request = {
      request_type: "createproject",
      auth_config: {
        api_token: apitoken,
        endpoint: $scope.layout.props.endpoint+"/api/v2"
      },
      project_name: $scope.projectname
    };

    var qlikcall = `${$scope.layout.props.ssename}.ScriptAggrStr('${JSON.stringify(request)}',${fields})`;

    $scope.app.model.engineApp.checkExpression(qlikcall).then(check => {
      if(check.qErrorMsg !== ""){
        $scope.projecterror = "ERROR";
        $scope.projectstatus = "NOT_CREATED";
        error = true;
      }else{
        var cubedef = {
          qMeasures: [{
            qDef: {
              qDef: qlikcall,
              qAggrFunc: "None",
            }
          }],
          qInitialDataFetch: [{
            qTop: 0,
            qLeft: 0,
            qHeight: 1,
            qWidth: 1
          }]
        };
        $scope.app.createCube(cubedef).then((cube) => {
          var error = false;
          if(typeof cube.layout.qHyperCube.qError != 'undefined'){
            $scope.projecterror = "ERROR";
            $scope.projectstatus = "NOT_CREATED";
            error = true;
          }else{
            $scope.projectid = cube.layout.qHyperCube.qDataPages[0].qMatrix[0][0].qText;
          }
          $scope.app.destroySessionObject(cube.layout.qInfo.qId).then((obj) => {
            if(error){
              $scope.projectstatus = "NOT_CREATED";
            }else{
              $scope.projectstatus = "CREATED";
            }

          })
        })
      }
    })
  });

  $scope.restart = (() => {
    $scope.projectname = "";
    $scope.projectstatus = "NOT_CREATED";
    $scope.projectid = "";
  });

  $scope.linkToDataRobot = (() => {
    var link = $scope.layout.props.webendpoint+'/projects/'+$scope.projectid
    var win = window.open(link, '_blank');
    win.focus();
  });

  $scope.showField = ((t,f) =>{
    return $scope.tableModel.showField(t,f);
  });

}]
