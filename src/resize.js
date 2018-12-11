export default function ($element, layout) {
  const ext = this;
  const viz = ext.$scope.viz;

  this.$scope.navmode = this.$scope.qlik.navigation.getMode();
  console.log(this.$scope.navmode);

}
