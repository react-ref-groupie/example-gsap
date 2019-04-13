(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(258);


/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(1);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(111);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 2 modules
var possibleConstructorReturn = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/react-ref-groupie/index.js
var react_ref_groupie = __webpack_require__(2);
var react_ref_groupie_default = /*#__PURE__*/__webpack_require__.n(react_ref_groupie);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(63);

// EXTERNAL MODULE: ./node_modules/react-helmet/lib/Helmet.js
var Helmet = __webpack_require__(112);

// EXTERNAL MODULE: ./src/components/controls/controls.scss
var controls = __webpack_require__(132);

// CONCATENATED MODULE: ./src/components/controls/controls.js
var controls_Controls=function Controls(_ref){var _ref$refGroupsMethods=_ref.refGroupsMethods,circles=_ref$refGroupsMethods.circles,squares=_ref$refGroupsMethods.squares;return react_default.a.createElement("div",{className:"controls"},react_default.a.createElement("div",{className:"controls__button",onClick:circles.moveDown},"Circles down"),react_default.a.createElement("div",{className:"controls__button",onClick:circles.moveUp},"Circles up"),react_default.a.createElement("div",{className:"controls__button",onClick:squares.moveRight},"Squares right"),react_default.a.createElement("div",{className:"controls__button",onClick:squares.moveLeft},"Squares left"));};/* harmony default export */ var controls_controls = (react_ref_groupie_default()(controls_Controls));
// CONCATENATED MODULE: ./src/components/controls/index.js

// EXTERNAL MODULE: ./src/components/circles/circles.scss
var circles_circles = __webpack_require__(34);

// CONCATENATED MODULE: ./src/components/circles/class-circles.js
var class_circles_Circles=/*#__PURE__*/function(_React$Component){Object(inherits["a" /* default */])(Circles,_React$Component);function Circles(props){var _this;Object(classCallCheck["a" /* default */])(this,Circles);_this=Object(possibleConstructorReturn["a" /* default */])(this,Object(getPrototypeOf["a" /* default */])(Circles).call(this,props));_this.toggle=function(){var _this$props$refGroups=_this.props.refGroupsMethods,_this$props$refGroups2=_this$props$refGroups.circles,moveUp=_this$props$refGroups2.moveUp,moveDown=_this$props$refGroups2.moveDown,_this$props$refGroups3=_this$props$refGroups.squares,moveLeft=_this$props$refGroups3.moveLeft,moveRight=_this$props$refGroups3.moveRight;var _this$state=_this.state,toggled=_this$state.toggled,circlesConfig=_this$state.circlesConfig;if(toggled){if(circlesConfig){moveUp(_this.increment);}else{moveLeft(_this.increment);}}else{if(circlesConfig){moveDown(_this.increment);}else{moveRight(_this.increment);}}if(circlesConfig){_this.setState(function(_ref){var toggled=_ref.toggled;return{toggled:!toggled};});}};_this.increment=function(){return _this.setState(function(_ref2){var num=_ref2.num;return{num:num+1};});};_this.setCirclesConfig=function(){_this.setState({circlesConfig:true});};_this.setSquaresConfig=function(){_this.setState({circlesConfig:false});};_this.state={toggled:false,num:0,circlesConfig:true};return _this;}Object(createClass["a" /* default */])(Circles,[{key:"render",value:function render(){var _this$state2=this.state,num=_this$state2.num,circlesConfig=_this$state2.circlesConfig;var refGroup;if(circlesConfig){var _this$props$getRefGro=this.props.getRefGroups({circles:"\n          firstCircle\n          secondCircle\n          thirdCircle\n        "}),_this$props$getRefGro2=_this$props$getRefGro.circles,firstCircle=_this$props$getRefGro2.firstCircle,secondCircle=_this$props$getRefGro2.secondCircle,thirdCircle=_this$props$getRefGro2.thirdCircle;refGroup={firstRef:firstCircle,secondRef:secondCircle,thirdRef:thirdCircle};}else{var _this$props$getRefGro3=this.props.getRefGroups({squares:"\n          firstSquare\n          secondSquare\n          thirdSquare\n        "}),_this$props$getRefGro4=_this$props$getRefGro3.squares,firstSquare=_this$props$getRefGro4.firstSquare,secondSquare=_this$props$getRefGro4.secondSquare,thirdSquare=_this$props$getRefGro4.thirdSquare;refGroup={firstRef:firstSquare,secondRef:secondSquare,thirdRef:thirdSquare};}return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement("div",{className:"config config--".concat(circlesConfig?'circles':'squares')},react_default.a.createElement("div",{className:"config__toggle",onClick:this.setCirclesConfig},"Use circles config"),react_default.a.createElement("div",{className:"config__toggle",onClick:this.setSquaresConfig},"Use squares config")),react_default.a.createElement("div",{onClick:this.toggle,className:"circles"},react_default.a.createElement("div",{ref:refGroup.firstRef,className:"circles__first"}),react_default.a.createElement("div",{ref:refGroup.secondRef,className:"circles__second"},num),react_default.a.createElement("div",{ref:refGroup.thirdRef,className:"circles__third"})));}}]);return Circles;}(react_default.a.Component);/* harmony default export */ var class_circles = (react_ref_groupie_default()(class_circles_Circles));
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(15);

// CONCATENATED MODULE: ./src/components/with-iterate-state.js
var with_iterate_state_withIterateState=function withIterateState(WrappedComponent){var StatefullWrapper=/*#__PURE__*/function(_React$Component){Object(inherits["a" /* default */])(StatefullWrapper,_React$Component);function StatefullWrapper(){var _getPrototypeOf2;var _this;Object(classCallCheck["a" /* default */])(this,StatefullWrapper);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=Object(possibleConstructorReturn["a" /* default */])(this,(_getPrototypeOf2=Object(getPrototypeOf["a" /* default */])(StatefullWrapper)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.state={num:0,toggled:false};_this.iterate=function(caller1,caller2){return function(){var toggled=_this.state.toggled;if(toggled){caller2(_this.increment);}else{caller1(_this.increment);}_this.setState(function(_ref){var toggled=_ref.toggled;return{toggled:!toggled};});};};_this.increment=function(){return _this.setState(function(_ref2){var num=_ref2.num;return{num:++num};});};return _this;}Object(createClass["a" /* default */])(StatefullWrapper,[{key:"render",value:function render(){return react_default.a.createElement(WrappedComponent,Object.assign({},this.props,{num:this.state.num,iterate:this.iterate}));}}]);return StatefullWrapper;}(react_default.a.Component);;StatefullWrapper.displayName="withIterateState(".concat(WrappedComponent.name,")");return StatefullWrapper;};/* harmony default export */ var with_iterate_state = (with_iterate_state_withIterateState);
// CONCATENATED MODULE: ./src/components/circles/stateless-circles-hook.js
var stateless_circles_hook_StatelessCircles=function StatelessCircles(_ref){var num=_ref.num,iterate=_ref.iterate;var _useRefGroups=Object(react_ref_groupie["useRefGroups"])({circles:"\n      firstCircle\n      secondCircle\n      thirdCircle\n    "}),_useRefGroups2=Object(slicedToArray["a" /* default */])(_useRefGroups,2),_useRefGroups2$0$circ=_useRefGroups2[0].circles,firstCircle=_useRefGroups2$0$circ.firstCircle,secondCircle=_useRefGroups2$0$circ.secondCircle,thirdCircle=_useRefGroups2$0$circ.thirdCircle,_useRefGroups2$1$circ=_useRefGroups2[1].circles,moveUp=_useRefGroups2$1$circ.moveUp,moveDown=_useRefGroups2$1$circ.moveDown;return react_default.a.createElement("div",{onClick:iterate(moveDown,moveUp),className:"circles"},react_default.a.createElement("div",{ref:firstCircle,className:"circles__first"}),react_default.a.createElement("div",{ref:secondCircle,className:"circles__second"},num),react_default.a.createElement("div",{ref:thirdCircle,className:"circles__third"}));};/* harmony default export */ var stateless_circles_hook = (with_iterate_state(stateless_circles_hook_StatelessCircles));
// EXTERNAL MODULE: ./node_modules/lodash/fp/compose.js
var compose = __webpack_require__(31);
var compose_default = /*#__PURE__*/__webpack_require__.n(compose);

// CONCATENATED MODULE: ./src/components/circles/stateless-circles-hoc.js
var stateless_circles_hoc_StatelessCircles=function StatelessCircles(_ref){var num=_ref.num,iterate=_ref.iterate,getRefGroups=_ref.getRefGroups,_ref$refGroupsMethods=_ref.refGroupsMethods.circles,moveUp=_ref$refGroupsMethods.moveUp,moveDown=_ref$refGroupsMethods.moveDown;var _getRefGroups=getRefGroups({circles:"\n      firstCircle\n      secondCircle\n      thirdCircle\n    "}),_getRefGroups$circles=_getRefGroups.circles,firstCircle=_getRefGroups$circles.firstCircle,secondCircle=_getRefGroups$circles.secondCircle,thirdCircle=_getRefGroups$circles.thirdCircle;return react_default.a.createElement("div",{onClick:iterate(moveDown,moveUp),className:"circles"},react_default.a.createElement("div",{ref:firstCircle,className:"circles__first"}),react_default.a.createElement("div",{ref:secondCircle,className:"circles__second"},num),react_default.a.createElement("div",{ref:thirdCircle,className:"circles__third"}));};/* harmony default export */ var stateless_circles_hoc = (compose_default()(with_iterate_state,react_ref_groupie_default.a)(stateless_circles_hoc_StatelessCircles));
// CONCATENATED MODULE: ./src/components/circles/index.js

// EXTERNAL MODULE: ./src/components/squares/squares.scss
var squares_squares = __webpack_require__(62);

// CONCATENATED MODULE: ./src/components/squares/class-squares.js
var class_squares_Squares=/*#__PURE__*/function(_React$Component){Object(inherits["a" /* default */])(Squares,_React$Component);function Squares(props){var _this;Object(classCallCheck["a" /* default */])(this,Squares);_this=Object(possibleConstructorReturn["a" /* default */])(this,Object(getPrototypeOf["a" /* default */])(Squares).call(this,props));_this.toggle=function(){var _this$props$refGroups=_this.props.refGroupsMethods.squares,moveLeft=_this$props$refGroups.moveLeft,moveRight=_this$props$refGroups.moveRight;if(_this.state.toggled){moveLeft(_this.increment);}else{moveRight(_this.increment);}_this.setState(function(_ref){var toggled=_ref.toggled;return{toggled:!toggled};});};_this.increment=function(){return _this.setState(function(_ref2){var num=_ref2.num;return{num:num+1};});};_this.state={toggled:false,num:0};return _this;}Object(createClass["a" /* default */])(Squares,[{key:"render",value:function render(){var num=this.state.num;var _this$props$getRefGro=this.props.getRefGroups({squares:"\n        firstSquare\n        secondSquare\n        thirdSquare\n      "}),_this$props$getRefGro2=_this$props$getRefGro.squares,firstSquare=_this$props$getRefGro2.firstSquare,secondSquare=_this$props$getRefGro2.secondSquare,thirdSquare=_this$props$getRefGro2.thirdSquare;return react_default.a.createElement("div",{onClick:this.toggle,className:"squares"},react_default.a.createElement("div",{ref:firstSquare,className:"squares__first"}),react_default.a.createElement("div",{ref:secondSquare,className:"squares__second"},num),react_default.a.createElement("div",{ref:thirdSquare,className:"squares__third"}));}}]);return Squares;}(react_default.a.Component);/* harmony default export */ var class_squares = (react_ref_groupie_default()(class_squares_Squares));
// CONCATENATED MODULE: ./src/components/squares/stateless-squares-hook.js
var stateless_squares_hook_StatelessSquares=function StatelessSquares(_ref){var num=_ref.num,iterate=_ref.iterate;var _useRefGroups=Object(react_ref_groupie["useRefGroups"])({squares:"\n      firstSquare\n      secondSquare\n      thirdSquare\n    "}),_useRefGroups2=Object(slicedToArray["a" /* default */])(_useRefGroups,2),_useRefGroups2$0$squa=_useRefGroups2[0].squares,firstSquare=_useRefGroups2$0$squa.firstSquare,secondSquare=_useRefGroups2$0$squa.secondSquare,thirdSquare=_useRefGroups2$0$squa.thirdSquare,_useRefGroups2$1$squa=_useRefGroups2[1].squares,moveLeft=_useRefGroups2$1$squa.moveLeft,moveRight=_useRefGroups2$1$squa.moveRight;return react_default.a.createElement("div",{onClick:iterate(moveRight,moveLeft),className:"squares"},react_default.a.createElement("div",{ref:firstSquare,className:"squares__first"}),react_default.a.createElement("div",{ref:secondSquare,className:"squares__second"},num),react_default.a.createElement("div",{ref:thirdSquare,className:"squares__third"}));};/* harmony default export */ var stateless_squares_hook = (with_iterate_state(stateless_squares_hook_StatelessSquares));
// CONCATENATED MODULE: ./src/components/squares/stateless-squares-hoc.js
var stateless_squares_hoc_StatelessSquares=function StatelessSquares(_ref){var num=_ref.num,iterate=_ref.iterate,getRefGroups=_ref.getRefGroups,_ref$refGroupsMethods=_ref.refGroupsMethods.squares,moveLeft=_ref$refGroupsMethods.moveLeft,moveRight=_ref$refGroupsMethods.moveRight;var _getRefGroups=getRefGroups({squares:"\n      firstSquare\n      secondSquare\n      thirdSquare\n    "}),_getRefGroups$squares=_getRefGroups.squares,firstSquare=_getRefGroups$squares.firstSquare,secondSquare=_getRefGroups$squares.secondSquare,thirdSquare=_getRefGroups$squares.thirdSquare;return react_default.a.createElement("div",{onClick:iterate(moveRight,moveLeft),className:"squares"},react_default.a.createElement("div",{ref:firstSquare,className:"squares__first"}),react_default.a.createElement("div",{ref:secondSquare,className:"squares__second"},num),react_default.a.createElement("div",{ref:thirdSquare,className:"squares__third"}));};/* harmony default export */ var stateless_squares_hoc = (compose_default()(with_iterate_state,react_ref_groupie_default.a)(stateless_squares_hoc_StatelessSquares));
// CONCATENATED MODULE: ./src/components/squares/index.js

// EXTERNAL MODULE: ./src/components/halo/halo.scss
var halo_halo = __webpack_require__(110);

// CONCATENATED MODULE: ./src/components/halo/halo-hoc.js
var halo_hoc_HaloHOC=function HaloHOC(_ref){var getRefGroups=_ref.getRefGroups;var _getRefGroups=getRefGroups({circles:'halo'}),halo=_getRefGroups.circles.halo;return react_default.a.createElement("div",{ref:halo,className:"halo"});};/* harmony default export */ var halo_hoc = (react_ref_groupie_default()(halo_hoc_HaloHOC));
// CONCATENATED MODULE: ./src/components/halo/halo-hook.js
var halo_hook_HaloHook=function HaloHook(){var _useRefGroups=Object(react_ref_groupie["useRefGroups"])({circles:'halo'}),_useRefGroups2=Object(slicedToArray["a" /* default */])(_useRefGroups,1),halo=_useRefGroups2[0].circles.halo;return react_default.a.createElement("div",{ref:halo,className:"halo"});};/* harmony default export */ var halo_hook = (halo_hook_HaloHook);
// CONCATENATED MODULE: ./src/components/halo/index.js

// CONCATENATED MODULE: ./src/components/usage-variants/class-components.js
var class_components_ClassComponents=function ClassComponents(){return react_default.a.createElement("div",{className:"app app__class-usage"},react_default.a.createElement(halo_hoc,null),react_default.a.createElement(controls_controls,null),react_default.a.createElement(class_circles,null),react_default.a.createElement(class_squares,null));};/* harmony default export */ var class_components = (class_components_ClassComponents);
// CONCATENATED MODULE: ./src/components/usage-variants/stateless-hoc.js
var stateless_hoc_StatelessHOC=function StatelessHOC(){return react_default.a.createElement("div",{className:"app"},react_default.a.createElement(halo_hoc,null),react_default.a.createElement(controls_controls,null),react_default.a.createElement(stateless_circles_hoc,null),react_default.a.createElement(stateless_squares_hoc,null));};/* harmony default export */ var stateless_hoc = (stateless_hoc_StatelessHOC);
// CONCATENATED MODULE: ./src/components/usage-variants/stateless-hooks.js
var stateless_hooks_StatelessHooks=function StatelessHooks(){return react_default.a.createElement("div",{className:"app"},react_default.a.createElement(halo_hook,null),react_default.a.createElement(controls_controls,null),react_default.a.createElement(stateless_circles_hook,null),react_default.a.createElement(stateless_squares_hook,null));};/* harmony default export */ var stateless_hooks = (stateless_hooks_StatelessHooks);
// EXTERNAL MODULE: ./src/components/usage-variants/usage-variants.scss
var usage_variants = __webpack_require__(255);

// CONCATENATED MODULE: ./src/components/helpers/bem-class.js
var bemClass=function bemClass(config){return function(param){var resultConfig=config(param);return Object.keys(resultConfig).reduce(function(accum,key){var useKey=!!resultConfig[key];if(useKey){return"".concat(accum," ").concat(key);}return accum;},'');};};/* harmony default export */ var bem_class = (bemClass);
// CONCATENATED MODULE: ./src/components/usage-variants/index.js
var baseClass='usage-variants';var usage_variants_button=bem_class(function(tab){var _ref;return _ref={},Object(defineProperty["a" /* default */])(_ref,"".concat(baseClass,"__button"),true),Object(defineProperty["a" /* default */])(_ref,"".concat(baseClass,"__button--active"),tab),_ref;});var getClasses=function getClasses(tab){return{base:baseClass,firstButton:usage_variants_button(tab===0),secondButton:usage_variants_button(tab===1),thirdButton:usage_variants_button(tab===2)};};var colors=['blue','pink','green'];var usage_variants_UsageVariants=/*#__PURE__*/function(_React$Component){Object(inherits["a" /* default */])(UsageVariants,_React$Component);function UsageVariants(){var _getPrototypeOf2;var _this;Object(classCallCheck["a" /* default */])(this,UsageVariants);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=Object(possibleConstructorReturn["a" /* default */])(this,(_getPrototypeOf2=Object(getPrototypeOf["a" /* default */])(UsageVariants)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.state={tab:0};_this.changeTab=function(tabNum){return function(){return _this.setState({tab:tabNum});};};return _this;}Object(createClass["a" /* default */])(UsageVariants,[{key:"render",value:function render(){var tab=this.state.tab;var bc=getClasses(tab);return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(Helmet["Helmet"],null,react_default.a.createElement("body",{className:"page--".concat(colors[tab])})),react_default.a.createElement("ul",{className:bc.base},react_default.a.createElement("li",{className:bc.firstButton,onClick:this.changeTab(0)},"Class components usage"),react_default.a.createElement("li",{className:bc.secondButton,onClick:this.changeTab(1)},"Stateless hook usage"),react_default.a.createElement("li",{className:bc.thirdButton,onClick:this.changeTab(2)},"Stateless HOC usage")),tab===0&&react_default.a.createElement(class_components,null),tab===1&&react_default.a.createElement(stateless_hooks,null),tab===2&&react_default.a.createElement(stateless_hoc,null));}}]);return UsageVariants;}(react_default.a.Component);/* harmony default export */ var components_usage_variants = (usage_variants_UsageVariants);
// EXTERNAL MODULE: ./node_modules/gsap/index.js + 10 modules
var gsap = __webpack_require__(16);

// CONCATENATED MODULE: ./src/ref-config/circles.js
/* harmony default export */ var ref_config_circles = ({refs:"\n    firstCircle\n    secondCircle\n    thirdCircle\n  ",globals:"\n    halo\n  ",moveDown:function moveDown(_ref,callback// it can be any args you want
){var firstCircle=_ref.firstCircle,secondCircle=_ref.secondCircle,thirdCircle=_ref.thirdCircle,halo=_ref.halo;var animationExample=new gsap["a" /* TimelineLite */]({paused:true});animationExample.to(halo,0.5,{y:0,backgroundColor:'#8b0000'}).to(firstCircle,0.5,{y:140}).to(secondCircle,0.5,{y:140}).to(thirdCircle,0.5,{y:140});if(typeof callback==="function"){animationExample.eventCallback('onComplete',callback);}animationExample.play();},moveUp:function moveUp(_ref2,callback){var firstCircle=_ref2.firstCircle,secondCircle=_ref2.secondCircle,thirdCircle=_ref2.thirdCircle,halo=_ref2.halo;var animationExample=new gsap["a" /* TimelineLite */]({paused:true});animationExample.to(halo,0.5,{y:0,backgroundColor:'#8b0000'}).to(firstCircle,0.5,{y:0}).to(secondCircle,0.5,{y:0}).to(thirdCircle,0.5,{y:0});if(typeof callback==="function"){animationExample.eventCallback("onComplete",callback);}animationExample.play();}});
// CONCATENATED MODULE: ./src/ref-config/squares.js
/* harmony default export */ var ref_config_squares = ({refs:"\n    firstSquare\n    secondSquare\n    thirdSquare\n  ",globals:"\n    halo\n  ",moveRight:function moveRight(_ref,callback){var firstSquare=_ref.firstSquare,secondSquare=_ref.secondSquare,thirdSquare=_ref.thirdSquare,halo=_ref.halo;var animationExample=new gsap["a" /* TimelineLite */]({paused:true});animationExample.to(halo,0.5,{y:240,backgroundColor:"#030669"}).to(firstSquare,0.5,{x:140}).to(secondSquare,0.5,{x:140}).to(thirdSquare,0.5,{x:140});if(typeof callback==="function"){animationExample.eventCallback('onComplete',callback);}animationExample.play();},moveLeft:function moveLeft(_ref2,callback){var firstSquare=_ref2.firstSquare,secondSquare=_ref2.secondSquare,thirdSquare=_ref2.thirdSquare,halo=_ref2.halo;var animationExample=new gsap["a" /* TimelineLite */]({paused:true});animationExample.to(halo,0.5,{y:240,backgroundColor:"#030669"}).to(firstSquare,0.5,{x:0}).to(secondSquare,0.5,{x:0}).to(thirdSquare,0.5,{x:0});if(typeof callback==="function"){animationExample.eventCallback('onComplete',callback);}animationExample.play();}});
// CONCATENATED MODULE: ./src/ref-config/index.js
/* harmony default export */ var ref_config = ({circles:ref_config_circles,squares:ref_config_squares});
// EXTERNAL MODULE: ./src/components/index.scss
var components = __webpack_require__(257);

// CONCATENATED MODULE: ./src/components/index.js
var components_App=/*#__PURE__*/function(_Component){Object(inherits["a" /* default */])(App,_Component);function App(){Object(classCallCheck["a" /* default */])(this,App);return Object(possibleConstructorReturn["a" /* default */])(this,Object(getPrototypeOf["a" /* default */])(App).apply(this,arguments));}Object(createClass["a" /* default */])(App,[{key:"render",value:function render(){return react_default.a.createElement(react_ref_groupie["RefProvider"],{config:ref_config},react_default.a.createElement(components_usage_variants,null));}}]);return App;}(react["Component"]);/* harmony default export */ var src_components = (components_App);
// CONCATENATED MODULE: ./src/index.js
react_dom_default.a.render(react_default.a.createElement(src_components,null),document.getElementById('root'));

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[113,1,2]]]);
//# sourceMappingURL=main.d205f539.chunk.js.map