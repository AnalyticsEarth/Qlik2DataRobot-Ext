export default function($element, layout) {
  //console.log("Paint");
  const app = this.$scope.app;

  console.log("Paint");
  console.log(layout);
  this.$scope.navmode = this.$scope.qlik.navigation.getMode();
  console.log(this.$scope.navmode);
  console.log(this.$scope);

  this.$scope.app.model.engineApp.getTablesAndKeys({qcx:1000,qcy:1000},{qcx:1000,qcy:1000},20,true,false).then(res => {
    console.log(res);
    //this.$scope.keymodel = res;
    this.$scope.tableModel.setModel(res);
  });

}
