

class QlikDataModel {
  constructor(){
    this.setup = false;
  }

  setModel(tablesAndKeys){
    this.model = tablesAndKeys;
    this.setup = true;
    this.setTablesEnabled();
    this.selections = {};
    this.resetSearch();

  }

  setTablesEnabled()
  {
    if(!this.setup) return;
    this.model.qtr.forEach((val) => val.enabled = true)
  }

  getFieldList()
  {
    if(!this.setup) return;
    let list = {
      tables:this.model.qtr,
      selections:this.selections
    }
    return list;
  }

  tablesEnabledForSelectedFields()
  {
    if(!this.setup) return;
    let tables = Object.keys(this.selections).filter(s => this.selections[s].enabled === true).map(field => this.getTableListForField(field));
    tables = [ ...new Set([].concat.apply([], tables))];
    console.log(tables);
    if(tables.length === 0){
      this.setTablesEnabled();
    }else{
      let t2 = this.getTablesAssociatedToTable(this.model.qk, tables, [], 1);
      console.log(t2);
      this.model.qtr.forEach(item => {
        item.enabled = t2.includes(item.qName);
      });
    }

  }

  getTablesAssociatedToTable(array,tables, ignore, level){
    if(!this.setup) return;
    let t1 = tables.map(table => {
      return array.filter(key => key.qTables.includes(table));
    }).map(item => item.map(key => key.qTables));

    let t2 = [ ...new Set([].concat.apply([], t1))];
    let t2a = [ ...new Set([].concat.apply([], t2))];
    let t3 = t2a.filter(table => !tables.includes(table));
    let t3a = t3.filter(table => !ignore.includes(table));
    if(t3a.length > 0 || level > 5){
      let ignore2 = ignore.concat(t3a);
      let t4 = this.getTablesAssociatedToTable(array,t3, ignore2, level + 1);
      return t4;
    }else{
      return t2a;
    }
  }

  getTableListForField(fieldname)
  {
    if(!this.setup) return;
    return this.model.qtr.filter((table) => {
      return (table.qFields.filter(field => field.qName === fieldname).length > 0)
    }).map(tablelist => tablelist.qName);
  }

  selectAll(selectallvalue) {
    if(!this.setup) return;
    if(selectallvalue){
      //Select All Values
      this.model.qtr.forEach((table) => {
        if(table.enabled){
          table.qFields.forEach(field => {
            if(!(field.qName in this.selections)){
              this.selections[field.qName] = {enabled:true};
            }else{
              this.selections[field.qName].enabled = true;
            }
          })
        }
      });
    }else{
      //Unselect All Values
      Object.keys(this.selections).forEach((obj) => {
         this.selections[obj].enabled = false;

      });
      this.tablesEnabledForSelectedFields();
    }
  }

  clearSearch(){
    if(!this.setup) return;
    this.searchFields('');
  }

  searchFields(searchvalue){
    if(!this.setup) return;
    if(searchvalue == ''){
      this.resetSearch();
    }else{
      this.model.qtr.forEach((table) => {
        table.qFields.forEach(field => {
          if(!(field.qName.toUpperCase().includes(searchvalue.toUpperCase()))){
            field.show = false;
          }else{
            field.show = true;
          }
        })
      });
    }
  }

  resetSearch() {
    if(!this.setup) return;
    this.model.qtr.forEach((table) => {
      table.qFields.forEach(field => {
        field.show = true;
      })
    });
  }

  countSelected() {
    if(!this.setup) return;
    return this.selectedFields().length;
  }

  selectedFields() {
    if(!this.setup) return;
    return Object.keys(this.selections).filter((obj) => {
       return (this.selections[obj].enabled === true);
    }).sort();
  }

}

export default QlikDataModel;
