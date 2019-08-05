import initialProperties from './initial-properties.js';
import template from './template.html';
import definition from './definition.js';
import controller from './controller.js';
import paint from './paint.js';
import resize from './resize.js';
import localCSS from './style.css';

export default window.define([], function() {

  //console.log(controller);
  var qlik = window.require('qlik');
  console.log(qlik);

  return {
    initialProperties: initialProperties,
    support:{
      snapshot: false,
      export: false,
      exportData: false,
      viewData: false
    },
    template: template,
    definition: definition,
    controller: controller,
    paint: paint,
    resize: resize
  }
})
