/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'__esModule',{value:!0});var _initialProperties=__webpack_require__(2),_initialProperties2=_interopRequireDefault(_initialProperties),_template=__webpack_require__(3),_template2=_interopRequireDefault(_template),_definition=__webpack_require__(4),_definition2=_interopRequireDefault(_definition),_controller=__webpack_require__(5),_controller2=_interopRequireDefault(_controller),_paint=__webpack_require__(6),_paint2=_interopRequireDefault(_paint),_resize=__webpack_require__(7),_resize2=_interopRequireDefault(_resize),_style=__webpack_require__(8),_style2=_interopRequireDefault(_style);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}exports.default=window.define([],function(){return{initialProperties:_initialProperties2.default,support:{snapshot:!1,export:!1,exportData:!1,viewData:!1},template:_template2.default,definition:_definition2.default,controller:_controller2.default,paint:_paint2.default,resize:_resize2.default}});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0}),exports.default={qHyperCubeDef:{qDimensions:[],qMeasures:[],qInitialDataFetch:[{qWidth:3,qHeight:1e3}]}};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = "<div class=\"chart-container\">\r\n  <div class=\"disableoverlay\" ng-show=\"navmode == 'edit'\"></div>\r\n  <div class=\"leftpanel\">\r\n    <div class=\"logoimage connected\"></div>\r\n    <div class=\"sectionblock sectionblockerror\" ng-show=\"projecterror == 'ERROR'\">\r\n      <div class=\"sectionheader sectionblockerror\">Error</div>\r\n      <div class=\"sectionbody sectionblockerror\">There was an error with your request, please check the settings and try again. If issues continue, check with your administrator.</div>\r\n    </div>\r\n    <div class=\"sectionblock\">\r\n      <div class=\"sectionheader\">Step 1: Select the fields to explore in DataRobot</div>\r\n      <div class=\"sectionbody\">You have selected {{countSelected()}} fields, include all those you need in DataRobot</div>\r\n    </div>\r\n\r\n    <div class=\"sectionblock\" ng-show=\"countSelected() > 1\">\r\n      <div class=\"sectionheader\">Step 2: Send the data to DataRobot and create a new project</div>\r\n      <div ng-show=\"projectstatus == 'NOT_CREATED'\">\r\n        <div class=\"sectionbody\">\r\n          <label class=\"lui-label\">Project Name</label>\r\n          <input class=\"lui-input  lui-input--large\" ng-model=\"projectname\" ng-value=\"projectname\" />\r\n          <div ng-show=\"layout.props.apitoken == ''\">\r\n            <label class=\"lui-label\">API Token</label>\r\n            <input class=\"lui-input  lui-input--large\" ng-model=\"apitoken\" ng-value=\"apitoken\" />\r\n          </div>\r\n        </div>\r\n        <div class=\"sectionbody\">\r\n          <button class=\"lui-button lui-button--block lui-button--large lui-button--info\" ng-click=\"connectDataRobot()\" ng-disabled=\"!(projectname.length > 5 && (layout.props.apitoken.length > 1 || apitoken.length > 1))\">Create DataRobot Project</button>\r\n        </div>\r\n      </div>\r\n      <div ng-show=\"projectstatus == 'CREATING'\">\r\n        <div class=\"sectionbody\">\r\n          <div class=\"sk-circle\">\r\n            <div class=\"sk-circle1 sk-child\"></div>\r\n            <div class=\"sk-circle2 sk-child\"></div>\r\n            <div class=\"sk-circle3 sk-child\"></div>\r\n            <div class=\"sk-circle4 sk-child\"></div>\r\n            <div class=\"sk-circle5 sk-child\"></div>\r\n            <div class=\"sk-circle6 sk-child\"></div>\r\n            <div class=\"sk-circle7 sk-child\"></div>\r\n            <div class=\"sk-circle8 sk-child\"></div>\r\n            <div class=\"sk-circle9 sk-child\"></div>\r\n            <div class=\"sk-circle10 sk-child\"></div>\r\n            <div class=\"sk-circle11 sk-child\"></div>\r\n            <div class=\"sk-circle12 sk-child\"></div>\r\n          </div>\r\n          <br />\r\n          Your data is being securely transfered to DataRobot from the Qlik Associative Engine\r\n        </div>\r\n      </div>\r\n      <div ng-show=\"projectstatus == 'CREATED'\">\r\n        <div class=\"sectionbody\">\r\n          The data has been securely transfered to DataRobot\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"sectionblock\" ng-show=\"projectstatus == 'CREATED'\">\r\n      <div class=\"sectionheader\">Step 3: Explore in DataRobot\r\n        <div class=\"right\">\r\n          <button class=\"lui-button\" ng-click=\"restart()\">\r\n            <span class=\"lui-button__icon  lui-icon  lui-icon--reload\"></span>\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <div class=\"sectionbody\">\r\n        <button class=\"lui-button lui-button--block lui-button--large lui-button--info\" ng-click=\"linkToDataRobot()\">Open DataRobot Project</button>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"rightpanel\">\r\n    <div class=\"fieldlist\">\r\n      <div class=\"fieldlistheader\">\r\n        <div class=\"fieldlisttitle\">Field List ({{countSelected()}})</div>\r\n        <div class=\"fieldlistsearch\">\r\n\r\n          <div class=\"lui-search\">\r\n            <span class=\"lui-icon  lui-icon--search  lui-search__search-icon\"></span>\r\n            <input class=\"lui-search__input\" maxlength=\"255\" spellcheck=\"false\" type=\"text\" ng-model=\"searchtext\" ng-value=\"searchtext\" ng-change=\"searchFields(searchtext)\" placeholder=\"Search\" />\r\n            <button class=\"lui-search__clear-button\" ng-click=\"clearSearch()\">\r\n              <span class=\"lui-icon  lui-icon--small  lui-icon--close\"></span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div>\r\n        <span class=\"lui-list__text titleselectall\">\r\n          <label class=\"lui-checkbox\">\r\n            <input class=\"lui-checkbox__input\" type=\"checkbox\" aria-label=\"Label\" ng-change=\"selectAll()\" ng-model=\"selectallvalue\" ng-value=\"selectallvalue\" />\r\n            <div class=\"lui-checkbox__check-wrap\">\r\n              <span class=\"lui-checkbox__check\"></span>\r\n            </div>\r\n          </label>\r\n        </span>\r\n        <div class=\"titleleft\">Field Name</div>\r\n        <div class=\"titleright\">Unique Values</div>\r\n      </div>\r\n      <div class=\"fieldlistscroll\">\r\n        <ul class=\"lui-list\">\r\n          <li class=\"lui-list__item\" ng-repeat=\"f in fieldlistsearch\">\r\n            <span class=\"lui-list__text\">\r\n              <label class=\"lui-checkbox\">\r\n                <input class=\"lui-checkbox__input\" type=\"checkbox\" aria-label=\"Label\" ng-model=\"selectedfields[f.qName].enabled\" ng-value=\"selectedfields[f.qName].enabled\" />\r\n                <div class=\"lui-checkbox__check-wrap\">\r\n                  <span class=\"lui-checkbox__check\"></span>\r\n                  <span class=\"lui-checkbox__check-text\">{{f.qName}}</span>\r\n                </div>\r\n                <div class=\"cardinality\">{{f.qCardinal}}</div>\r\n              </label>\r\n\r\n            </span>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0});var about={type:"items",label:"About",items:{about1:{type:"string",component:"text",label:"Steven Pressland, Qlik Solution Architect, 2018"},about1a:{type:"string",component:"text",label:"Version: 1.0.0"},about2:{type:"string",component:"text",label:"GitHub: www.github.com/analyticsearth"},about3:{type:"string",component:"text",label:"Qlik2DataRobot is a client extension to send data directly from your Qlik Sense application to DataRobot."},about4:{type:"string",component:"text",label:"The accompanying Qlik2DataRobot analytic connector is required to be setup and configured on your Qlik Sense environment."},about5:{type:"string",component:"text",label:"See documentation for details."}}};exports.default={type:"items",component:"accordion",items:{datarobot:{type:"items",label:"Qlik 2 DataRobot",items:{apiendpoint:{type:"string",ref:"props.endpoint",label:"API Endpoint",defaultValue:"https://app.datarobot.com"},webendpoint:{type:"string",ref:"props.webendpoint",label:"Web Endpoint",defaultValue:"https://app.datarobot.com"},apitoken:{type:"string",ref:"props.apitoken",label:"API Token"},ssename:{type:"string",ref:"props.ssename",label:"Analytic Connector",defaultValue:"DataRobot"}}},settings:{uses:"settings"},about:about}};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'__esModule',{value:!0});var qlik=window.require('qlik');exports.default=['$scope','$element',function(a){a.app=qlik.currApp(this),a.qlik=qlik,a.selectedfields={},a.projectname='',a.projectstatus='NOT_CREATED',a.projectid='',a.selectallvalue=!1,void 0,a.connectDataRobot=function(){var b=a.layout.props.apitoken;''==b&&(b=a.apitoken),void 0,'undefined'!=typeof b&&''!=b?a.createProject(b):alert('Please enter an API Token in the properties panel to authenticate with DataRobot')},a.selectAll=function(){void 0,a.selectallvalue?a.fieldlistsearch.forEach(function(b){b.qName in a.selectedfields?a.selectedfields[b.qName].enabled=!0:a.selectedfields[b.qName]={enabled:!0}}):Object.keys(a.selectedfields).forEach(function(b){a.selectedfields[b].enabled=!1})},a.clearSearch=function(){a.searchFields(''),a.searchtext=''},a.searchFields=function(b){a.fieldlistsearch=''==b?a.fieldlist:a.fieldlist.filter(function(a){return a.qName.toUpperCase().includes(b.toUpperCase())})},a.countSelected=function(){return a.selectedFieldsList().length},a.selectedFieldsList=function(){return Object.keys(a.selectedfields).filter(function(b){return!0==a.selectedfields[b].enabled})},a.createProject=function(b){a.projectstatus='CREATING';var c=a.selectedFieldsList().map(function(a){return'['+a+']'}).join(',');void 0,void 0;var d={request_type:'createproject',auth_config:{api_token:b,endpoint:a.layout.props.endpoint+'/api/v2'},project_name:a.projectname,project_name_inc_ts:'true'},e=a.layout.props.ssename+'.ScriptAggrStr(\''+JSON.stringify(d)+'\','+c+')';a.app.createCube({qMeasures:[{qDef:{qDef:e,qAggrFunc:'None'}}],qInitialDataFetch:[{qTop:0,qLeft:0,qHeight:1,qWidth:1}]}).then(function(b){var c=!1;'undefined'==typeof b.layout.qHyperCube.qError?a.projectid=b.layout.qHyperCube.qDataPages[0].qMatrix[0][0].qText:(a.projecterror='ERROR',a.projectstatus='NOT_CREATED',c=!0),a.app.destroySessionObject(b.layout.qInfo.qId).then(function(){a.projectstatus=c?'NOT_CREATED':'CREATED'})})},a.restart=function(){a.projectname='',a.projectstatus='NOT_CREATED',a.projectid=''},a.linkToDataRobot=function(){var b=a.layout.props.webendpoint+'/projects/'+a.projectid,c=window.open(b,'_blank');c.focus()}}];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(){var a=this,b=this.$scope.app;//console.log("Paint");
void 0,void 0,this.$scope.navmode=this.$scope.qlik.navigation.getMode(),void 0,b.getList("FieldList").then(function(b){//console.log(list.layout.qFieldList.qItems);
a.$scope.fieldlist=b.layout.qFieldList.qItems,a.$scope.fieldlistsearch=a.$scope.fieldlist})};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(){var a=this,b=a.$scope.viz;this.$scope.navmode=this.$scope.qlik.navigation.getMode(),void 0};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(9);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(11)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./style.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./style.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".qv-object-qlik2datarobotext .chart-container {\n  width: 100%;\n  height: 100%;\n  overflow: hidden; }\n\n.qv-object-qlik2datarobotext .disableoverlay {\n  z-index: 1001;\n  position: absolute;\n  top: 0%;\n  left: 0%;\n  width: 100%;\n  height: 100%;\n  background-color: white;\n  opacity: .5;\n  filter: alpha(opacity=50); }\n\n.qv-object-qlik2datarobotext .leftpanel {\n  float: left;\n  width: 60%;\n  height: 100%;\n  overflow: hidden; }\n\n.qv-object-qlik2datarobotext .rightpanel {\n  float: right;\n  width: 40%;\n  height: 100%;\n  overflow: hidden; }\n\n.qv-object-qlik2datarobotext .fieldlist {\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-flow: column;\n  border-radius: 5px;\n  border: 1px solid #aaa; }\n\n.qv-object-qlik2datarobotext .fieldlistheader {\n  flex: 0 1 40px;\n  padding: 5px;\n  font-weight: bold;\n  margin-bottom: 10px; }\n\n.qv-object-qlik2datarobotext .fieldlistscroll {\n  flex: 1 1 auto;\n  overflow-y: scroll; }\n\n.qv-object-qlik2datarobotext .cardinality {\n  float: right;\n  font-style: italic; }\n\n.qv-object-qlik2datarobotext .titleselectall {\n  float: left;\n  padding-bottom: 10px;\n  padding-left: 10px;\n  padding-right: 8px;\n  box-sizing: border-box;\n  font-weight: bold; }\n\n.qv-object-qlik2datarobotext .titleleft {\n  float: left;\n  padding-bottom: 10px;\n  padding-top: 2px;\n  padding-left: 0px;\n  box-sizing: border-box;\n  font-weight: bold; }\n\n.qv-object-qlik2datarobotext .titleright {\n  float: right;\n  padding-bottom: 10px;\n  padding-top: 2px;\n  padding-right: 20px;\n  box-sizing: border-box;\n  font-weight: bold; }\n\n.qv-object-qlik2datarobotext .logoimage {\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 60%;\n  padding-top: 13%;\n  background-image: url(\"data:image/png;base64,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\");\n  background-size: 100%;\n  background-repeat: no-repeat;\n  margin-left: auto;\n  margin-right: auto; }\n\n.qv-object-qlik2datarobotext .sectionblock {\n  border-radius: 5px;\n  border: 1px solid #aaa;\n  margin: 5px;\n  margin-bottom: 10px; }\n\n.qv-object-qlik2datarobotext .sectionheader {\n  font-size: 1.5em;\n  font-weight: bold;\n  border-bottom: 1px solid #aaa;\n  padding: 10px; }\n\n.qv-object-qlik2datarobotext .sectionbody {\n  font-size: 1.2em;\n  font-weight: normal;\n  padding: 10px; }\n\n.qv-object-qlik2datarobotext .right {\n  float: right; }\n\n.qv-object-qlik2datarobotext .sectionblockerror {\n  border-radius: 5px;\n  background-color: #f05555;\n  border: 0px solid #aaa;\n  color: #fff; }\n\n.qv-object-qlik2datarobotext .fieldlisttitle {\n  float: left;\n  width: 40%;\n  padding-top: 10px;\n  padding-left: 5px;\n  box-sizing: border-box; }\n\n.qv-object-qlik2datarobotext .fieldlistsearch {\n  float: right;\n  width: 60%;\n  border-radius: 5px;\n  border: 1px solid #aaa;\n  box-sizing: border-box; }\n\n.qv-object-qlik2datarobotext .fieldlistsearch .lui-search {\n  background-color: transparent; }\n\n.sk-circle {\n  margin: 50px auto;\n  width: 80px;\n  height: 80px;\n  position: relative; }\n\n.sk-circle .sk-child {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0; }\n\n.sk-circle .sk-child:before {\n  content: '';\n  display: block;\n  margin: 0 auto;\n  width: 15%;\n  height: 15%;\n  background-color: #333;\n  border-radius: 100%;\n  -webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;\n  animation: sk-circleBounceDelay 1.2s infinite ease-in-out both; }\n\n.sk-circle .sk-circle2 {\n  -webkit-transform: rotate(30deg);\n  -ms-transform: rotate(30deg);\n  transform: rotate(30deg); }\n\n.sk-circle .sk-circle3 {\n  -webkit-transform: rotate(60deg);\n  -ms-transform: rotate(60deg);\n  transform: rotate(60deg); }\n\n.sk-circle .sk-circle4 {\n  -webkit-transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  transform: rotate(90deg); }\n\n.sk-circle .sk-circle5 {\n  -webkit-transform: rotate(120deg);\n  -ms-transform: rotate(120deg);\n  transform: rotate(120deg); }\n\n.sk-circle .sk-circle6 {\n  -webkit-transform: rotate(150deg);\n  -ms-transform: rotate(150deg);\n  transform: rotate(150deg); }\n\n.sk-circle .sk-circle7 {\n  -webkit-transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  transform: rotate(180deg); }\n\n.sk-circle .sk-circle8 {\n  -webkit-transform: rotate(210deg);\n  -ms-transform: rotate(210deg);\n  transform: rotate(210deg); }\n\n.sk-circle .sk-circle9 {\n  -webkit-transform: rotate(240deg);\n  -ms-transform: rotate(240deg);\n  transform: rotate(240deg); }\n\n.sk-circle .sk-circle10 {\n  -webkit-transform: rotate(270deg);\n  -ms-transform: rotate(270deg);\n  transform: rotate(270deg); }\n\n.sk-circle .sk-circle11 {\n  -webkit-transform: rotate(300deg);\n  -ms-transform: rotate(300deg);\n  transform: rotate(300deg); }\n\n.sk-circle .sk-circle12 {\n  -webkit-transform: rotate(330deg);\n  -ms-transform: rotate(330deg);\n  transform: rotate(330deg); }\n\n.sk-circle .sk-circle2:before {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s; }\n\n.sk-circle .sk-circle3:before {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s; }\n\n.sk-circle .sk-circle4:before {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s; }\n\n.sk-circle .sk-circle5:before {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s; }\n\n.sk-circle .sk-circle6:before {\n  -webkit-animation-delay: -0.7s;\n  animation-delay: -0.7s; }\n\n.sk-circle .sk-circle7:before {\n  -webkit-animation-delay: -0.6s;\n  animation-delay: -0.6s; }\n\n.sk-circle .sk-circle8:before {\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s; }\n\n.sk-circle .sk-circle9:before {\n  -webkit-animation-delay: -0.4s;\n  animation-delay: -0.4s; }\n\n.sk-circle .sk-circle10:before {\n  -webkit-animation-delay: -0.3s;\n  animation-delay: -0.3s; }\n\n.sk-circle .sk-circle11:before {\n  -webkit-animation-delay: -0.2s;\n  animation-delay: -0.2s; }\n\n.sk-circle .sk-circle12:before {\n  -webkit-animation-delay: -0.1s;\n  animation-delay: -0.1s; }\n\n@-webkit-keyframes sk-circleBounceDelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n    transform: scale(0); }\n  40% {\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n\n@keyframes sk-circleBounceDelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n    transform: scale(0); }\n  40% {\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n", ""]);

// exports


/***/ }),
/* 10 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(12);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 12 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);