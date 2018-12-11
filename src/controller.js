var qlik = window.require('qlik');


export default ['$scope', '$element', function($scope, $element) {
  $scope.app = qlik.currApp(this);
  $scope.qlik = qlik;
  $scope.selectedfields = {};
  $scope.projectname = "";
  $scope.projectstatus = "NOT_CREATED";
  $scope.projectid = "";
  $scope.selectallvalue = false;

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
    console.log($scope.selectallvalue);
    if($scope.selectallvalue){
      //Select All Values
      $scope.fieldlistsearch.forEach((obj) => {
        if(!(obj.qName in $scope.selectedfields)){
          $scope.selectedfields[obj.qName] = {enabled:true};
        }else{
          $scope.selectedfields[obj.qName].enabled = true;
        }
      });
    }else{
      //Unselect All Values
      Object.keys($scope.selectedfields).forEach((obj) => {
          $scope.selectedfields[obj].enabled = false;
      });
    }
  });

  $scope.clearSearch = (() => {
    $scope.searchFields('');
    $scope.searchtext = '';
  });

  $scope.searchFields = ((searchvalue) => {
    if(searchvalue == ''){
      $scope.fieldlistsearch = $scope.fieldlist;
    }else{
      $scope.fieldlistsearch = $scope.fieldlist.filter(item => item.qName.toUpperCase().includes(searchvalue.toUpperCase()));
    }
  });

  $scope.countSelected = (() => {
    return $scope.selectedFieldsList().length;
  });

  $scope.selectedFieldsList = (() => {
    return Object.keys($scope.selectedfields).filter((obj) => $scope.selectedfields[obj].enabled == true);
  });

  $scope.createProject = ((apitoken) => {
    $scope.projectstatus = "CREATING";

    var fields = $scope.selectedFieldsList().map(f => "[" + f + "]").join(",");
    console.log(fields);
    console.log($scope.projectname);

    var request = {
      request_type: "createproject",
      auth_config: {
        api_token: apitoken,
        endpoint: $scope.layout.props.endpoint+"/api/v2"
      },
      project_name: $scope.projectname,
      project_name_inc_ts: "true",
    };

    var qlikcall = `${$scope.layout.props.ssename}.ScriptAggrStr('${JSON.stringify(request)}',${fields})`;

    console.log(qlikcall);

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

}]
