import QlikDataModel from './QlikDataModel'

var qlik = window.require('qlik');


export default ['$scope', '$element', function($scope, $element) {
  $scope.app = qlik.currApp(this);
  $scope.qlik = qlik;
  $scope.projectname = "";
  $scope.projectstatus = "NOT_CREATED";
  $scope.projectid = "";
  $scope.infoSelectedTable = "";
  $scope.infoSelectedField = "";
  $scope.infoSelectedTab = "DM";
  $scope.Math = Math;
  $scope.currentChartInfo = "";
  $scope.infoCurrentVis;


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
    console.log(fields);
    console.log($scope.projectname);

    var request = {
      request_type: "createproject",
      auth_config: {
        api_token: apitoken,
        endpoint: $scope.layout.props.endpoint+"/api/v2"
      },
      project_name: $scope.projectname
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

  $scope.showField = ((t,f) =>{
    return $scope.tableModel.showField(t,f);
  });

  $scope.showFieldInfo = ((t,f) =>{
    return (t.qName === $scope.infoSelectedTable && f.qName === $scope.infoSelectedField)
  });

  $scope.selectFieldInfo = ((t,f) =>{
    if(t.qName === $scope.infoSelectedTable && f.qName === $scope.infoSelectedField){
      $scope.infoSelectedTable = "";
      $scope.infoSelectedField = "";
    }else{
      $scope.infoSelectedTable = t.qName;
      $scope.infoSelectedField = f.qName;
    }
    $scope.selectTab($scope.infoSelectedTab, f);
  });

  $scope.selectTab = ((tab, field) => {
    //console.log(tab);
    $scope.infoSelectedTab = tab;
    if(tab === "D"){
      $scope.createVisualization(field, 'distviz'+field.uid);
    }
  });

  $scope.classForSelectedTab = ((tab) => {
    //console.log(tab);
    if($scope.infoSelectedTab === tab) return "lui-active";
  });

  $scope.createVisualization = ((field, domid) => {
    console.log("Create Visualization");

    let charttype = 'barchart';
    let fieldname = field.qName;
    let columns = [];

    //Pick the chart type
    if(field.qTags.includes('$text')){
      charttype = 'barchart';
      $scope.currentChartInfo = "Categorical Field: Frequency Distribution";
    }
    if(field.qTags.includes('$numeric')){
      charttype = 'histogram';
      $scope.currentChartInfo = "Numeric Field: Histogram Distribution";
    }

    //Set the columns for the chosen chart type
    if(charttype === "barchart"){
      if(field.qnPresentDistinctValues === field.qnNonNulls){
        //Unique value per row
        charttype = 'kpi';
        columns.push({qDef:{
          qLabel:"Count of " + fieldname,
          qDef:"=Count(["+ fieldname +"])"
        }});
        $scope.currentChartInfo = " All Unique Values - This field is not likely to be useful for predictive analysis";
      }else{
        columns.push({qDef:{
          qFieldLabels:[fieldname],
          qFieldDefs:["[" + fieldname + "]"]
        }});
        columns.push({qDef:{
          qLabel:"Count of " + fieldname,
          qDef:"=Count(["+ fieldname +"])"
        }});
      }


    }

    if(charttype === "histogram"){
      columns.push({qDef:{
        qFieldLabels:[fieldname],
        qFieldDefs:["[" + fieldname + "]"]
      }});
    }

    console.log(charttype);
    console.log(columns);

    $scope.app.visualization.create(
  charttype,
  columns,
  {

    showTitles: false,
    gridLine:{
      auto:false,
      spacing:0
    },
    legend:{
      show:false
    },
    dimensionAxis:{
      show:"labels",
      continuousAuto:true
    },
    measureAxis:{
      show:"labels"
    },
    preferContinuousAxis:true,
    showMiniChartForContinuousAxis:false
  }
).then(function(vis){
  console.log("Show Visualization");
  if(typeof $scope.infoCurrentVis != 'undefined'){
    console.log("Remove Vis");
    $scope.infoCurrentVis.close();
  }
  $scope.infoCurrentVis = vis;
  vis.show(domid);
});
  });

}]
