export default function($element, layout) {
  //console.log("Paint");
  const app = this.$scope.app;

  console.log("Paint");
  console.log(layout);
  this.$scope.navmode = this.$scope.qlik.navigation.getMode();
  console.log(this.$scope.navmode);

  app.getList("FieldList").then((list) => {
    //console.log(list.layout.qFieldList.qItems);
    this.$scope.fieldlist = list.layout.qFieldList.qItems;
    this.$scope.fieldlistsearch = this.$scope.fieldlist;
  })

}
