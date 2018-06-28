/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/static/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(17);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(4)(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 2 */
/***/ (function(module, exports) {

	var core = module.exports = { version: '2.5.7' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.appInject = exports.appConfig = exports.appController = exports.appDirective = exports.appService = undefined;

	var _decorators = __webpack_require__(38);

	var d = _interopRequireWildcard(_decorators);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var App = angular.module('csr', ['ui-app', 'ngHandsontable']);

	/**
	 *  Javascript Decorator to register ng specific functionality
	 * */
	var appService = exports.appService = d.serviceDecorator(App);
	var appDirective = exports.appDirective = d.directiveDecorator(App);
	var appController = exports.appController = d.controllerDecorator(App);
	var appConfig = exports.appConfig = d.configDecorator(App);
	var appInject = exports.appInject = d.injectDecorator(App);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(19);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(9);
	var core = __webpack_require__(2);
	var ctx = __webpack_require__(26);
	var hide = __webpack_require__(29);
	var has = __webpack_require__(10);
	var PROTOTYPE = 'prototype';

	var $export = function (type, name, source) {
	  var IS_FORCED = type & $export.F;
	  var IS_GLOBAL = type & $export.G;
	  var IS_STATIC = type & $export.S;
	  var IS_PROTO = type & $export.P;
	  var IS_BIND = type & $export.B;
	  var IS_WRAP = type & $export.W;
	  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
	  var expProto = exports[PROTOTYPE];
	  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
	  var key, own, out;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if (own && has(exports, key)) continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function (C) {
	      var F = function (a, b, c) {
	        if (this instanceof C) {
	          switch (arguments.length) {
	            case 0: return new C();
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if (IS_PROTO) {
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library`
	module.exports = $export;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self
	  // eslint-disable-next-line no-new-func
	  : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 10 */
/***/ (function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(1) && !__webpack_require__(4)(function () {
	  return Object.defineProperty(__webpack_require__(28)('div'), 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(24);
	var IE8_DOM_DEFINE = __webpack_require__(11);
	var toPrimitive = __webpack_require__(15);
	var dP = Object.defineProperty;

	exports.f = __webpack_require__(1) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return dP(O, P, Attributes);
	  } catch (e) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(30);
	var defined = __webpack_require__(27);
	module.exports = function (it) {
	  return IObject(defined(it));
	};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(5);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function (it, S) {
	  if (!isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _getOwnPropertyDescriptor = __webpack_require__(20);

	var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

	var _classCallCheck2 = __webpack_require__(6);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(7);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _dec, _dec2, _desc, _value, _class;

	var _ngApp = __webpack_require__(3);

	var _csr = __webpack_require__(18);

	var _csr2 = _interopRequireDefault(_csr);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	  var desc = {};
	  Object['ke' + 'ys'](descriptor).forEach(function (key) {
	    desc[key] = descriptor[key];
	  });
	  desc.enumerable = !!desc.enumerable;
	  desc.configurable = !!desc.configurable;

	  if ('value' in desc || desc.initializer) {
	    desc.writable = true;
	  }

	  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	    return decorator(target, property, desc) || desc;
	  }, desc);

	  if (context && desc.initializer !== void 0) {
	    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	    desc.initializer = undefined;
	  }

	  if (desc.initializer === void 0) {
	    Object['define' + 'Property'](target, property, desc);
	    desc = null;
	  }

	  return desc;
	}

	var ApplicationConfig = (_dec = (0, _ngApp.appInject)('$stateProvider', '$urlRouterProvider'), _dec2 = (0, _ngApp.appConfig)(), (_class = function () {
	  function ApplicationConfig() {
	    (0, _classCallCheck3.default)(this, ApplicationConfig);
	  }

	  (0, _createClass3.default)(ApplicationConfig, [{
	    key: 'Routing',
	    value: function Routing(sp, urp) {
	      sp.state('data', _csr2.default);
	      urp.deferIntercept();
	      // urp.otherwise('/');
	    }
	  }]);
	  return ApplicationConfig;
	}(), (_applyDecoratedDescriptor(_class.prototype, 'Routing', [_dec, _dec2], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'Routing'), _class.prototype)), _class));

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(3);

	__webpack_require__(16);

	__webpack_require__(36);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _classCallCheck2 = __webpack_require__(6);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(7);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _dec, _dec2, _class;

	var _ngApp = __webpack_require__(3);

	var _view = __webpack_require__(37);

	var _view2 = _interopRequireDefault(_view);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import { DESTRUCTION } from 'dns';
	// import BaseController from '../common/BaseController';

	var ViewController = (_dec = (0, _ngApp.appInject)('$scope', '$injector', '$rootScope', 'APP_CONFIG', 'NotificationService', 'DialogService'), _dec2 = (0, _ngApp.appController)(), _dec(_class = _dec2(_class = function () {
	  function ViewController($scope, $ig, $rs, appConfig, ns, ds) {
	    (0, _classCallCheck3.default)(this, ViewController);

	    this.dataService = $ig.get('$http');
	    this.appConfig = appConfig;
	    this.ns = ns;
	    this.ds = ds;
	    this.$scope = $scope;
	    this.getdata();
	    this.tblData = [{ "report_date": "2018-05-07", "delivery_status": "DELIVERING", "advertiser": "Allure Bridal", "placement": "AV", "io_number": "#1249", "package_product_name": "Allure Bridal IO#1249 | AV - Q2 2018 (1 Apr - 30 Jun) (300x250)", "start_date": "2018-04-01", "end_date": "2018-06-30", "platform": "DFP", "booked_impressions": 120000, "trafficking_goals": 120000, "billable_impressions_delivered": 50928, "billable_clicks": 120, "billable_ctr": "0.2356", "first_party_impressions_delivered": 50928, "first_party_clicks": 120, "first_party_ctr": "0.2356", "remaining_impressions": 69072, "overserved_impressions": 3455, "impression_discrepancy": "0.00", "length_of_flight": 91, "days_served": 36, "optimal_impressions": 47473, "current_frequency_cap": 0, "pacing": "107.28" }, { "report_date": "2018-05-07", "delivery_status": "DELIVERING", "advertiser": "Allure Bridal", "placement": "AV", "io_number": "#1249", "package_product_name": "Allure Bridal IO#1249 | AV - Q2 2018 (1 Apr - 30 Jun) (728x90)", "start_date": "2018-04-01", "end_date": "2018-06-30", "platform": "DFP", "booked_impressions": 29994, "trafficking_goals": 29994, "billable_impressions_delivered": 12631, "billable_clicks": 14, "billable_ctr": "0.1108", "first_party_impressions_delivered": 12631, "first_party_clicks": 14, "first_party_ctr": "0.1108", "remaining_impressions": 17363, "overserved_impressions": 765, "impression_discrepancy": "0.00", "length_of_flight": 91, "days_served": 36, "optimal_impressions": 11866, "current_frequency_cap": 0, "pacing": "106.45" }, { "report_date": "2018-05-07", "delivery_status": "DELIVERING", "advertiser": "Allure Bridal", "placement": "Mobile", "io_number": "#1249", "package_product_name": "Allure Bridal IO#1249 | Mobile - Q2 2018 (1 Apr - 30 Jun)_Catfish", "start_date": "2018-04-01", "end_date": "2018-06-30", "platform": "DFP", "booked_impressions": 520995, "trafficking_goals": 520995, "billable_impressions_delivered": 218514, "billable_clicks": 696, "billable_ctr": "0.3185", "first_party_impressions_delivered": 218514, "first_party_clicks": 696, "first_party_ctr": "0.3185", "remaining_impressions": 302481, "overserved_impressions": 12406, "impression_discrepancy": "0.00", "length_of_flight": 91, "days_served": 36, "optimal_impressions": 206108, "current_frequency_cap": 0, "pacing": "106.02" }, { "report_date": "2018-05-07", "delivery_status": "DELIVERING", "advertiser": "Allure Bridal", "placement": "Mobile Scroller", "io_number": "#1249", "package_product_name": "Allure Bridal IO#1249 | Mobile Scroller - Q2 2018 (1 Apr - 30 Jun)_Mobile", "start_date": "2018-04-01", "end_date": "2018-06-30", "platform": "DFP", "booked_impressions": 1280266, "trafficking_goals": 1280266, "billable_impressions_delivered": 611827, "billable_clicks": 3621, "billable_ctr": "0.5918", "first_party_impressions_delivered": 611827, "first_party_clicks": 3621, "first_party_ctr": "0.5918", "remaining_impressions": 668439, "overserved_impressions": 105348, "impression_discrepancy": "0.00", "length_of_flight": 91, "days_served": 36, "optimal_impressions": 506479, "current_frequency_cap": 0, "pacing": "120.80" }, { "report_date": "2018-05-07", "delivery_status": "DELIVERING", "advertiser": "Allure Bridal", "placement": "Native Ad", "io_number": "#1249", "package_product_name": "Allure Bridal IO#1249 | Native - Q2 2018 (1 Apr - 30 Jun) Fluid", "start_date": "2018-04-01", "end_date": "2018-06-30", "platform": "DFP", "booked_impressions": 2065, "trafficking_goals": 1569, "billable_impressions_delivered": 1062405, "billable_clicks": 838, "billable_ctr": "0.0937", "first_party_impressions_delivered": 1062405, "first_party_clicks": 838, "first_party_ctr": "0.0937", "remaining_impressions": 1729, "overserved_impressions": 21, "impression_discrepancy": "0.00", "length_of_flight": 91, "days_served": 36, "optimal_impressions": 817, "current_frequency_cap": 0, "pacing": "102.57" }, {}, {}, {}, { "report_date": "2018-05-07", "delivery_status": "Teads", "advertiser": "Allure Bridal", "placement": "Teads", "io_number": "#1249", "package_product_name": "Allure Bridal IO#1249 | Q2 2018 May Teads InBlog Video", "start_date": "2018-05-01", "end_date": "2018-05-31", "platform": "Teads", "booked_impressions": 126000, "trafficking_goals": 126000, "billable_impressions_delivered": 33155, "billable_clicks": 98, "billable_ctr": "0.2956", "first_party_impressions_delivered": 33155, "first_party_clicks": 98, "first_party_ctr": "0.2956", "remaining_impressions": 92845, "overserved_impressions": 8768, "impression_discrepancy": "0.00", "length_of_flight": 31, "days_served": 6, "optimal_impressions": 24387, "current_frequency_cap": 0, "pacing": "135.95" }, { "report_date": "2018-05-07", "delivery_status": "DELIVERING", "advertiser": "Allure Bridal", "placement": "RON", "io_number": "#1249", "package_product_name": "Allure Bridal IO#1249 | RON - Q2 2018 (1 Apr - 30 Jun) (300x250)", "start_date": "2018-04-01", "end_date": "2018-06-30", "platform": "DFP", "booked_impressions": 365040, "trafficking_goals": 365040, "billable_impressions_delivered": 155134, "billable_clicks": 297, "billable_ctr": "0.1914", "first_party_impressions_delivered": 155134, "first_party_clicks": 297, "first_party_ctr": "0.1914", "remaining_impressions": 209906, "overserved_impressions": 10723, "impression_discrepancy": "0.00", "length_of_flight": 91, "days_served": 36, "optimal_impressions": 144411, "current_frequency_cap": 0, "pacing": "107.43" }, { "report_date": "2018-05-07", "delivery_status": "DELIVERING", "advertiser": "Allure Bridal", "placement": "RON", "io_number": "#1249", "package_product_name": "Allure Bridal IO#1249 | RON - Q2 2018 (1 Apr - 30 Jun) (728x90)", "start_date": "2018-04-01", "end_date": "2018-06-30", "platform": "DFP", "booked_impressions": 182500, "trafficking_goals": 182500, "billable_impressions_delivered": 76683, "billable_clicks": 79, "billable_ctr": "0.1030", "first_party_impressions_delivered": 76683, "first_party_clicks": 79, "first_party_ctr": "0.1030", "remaining_impressions": 105817, "overserved_impressions": 4485, "impression_discrepancy": "0.00", "length_of_flight": 91, "days_served": 36, "optimal_impressions": 72198, "current_frequency_cap": 0, "pacing": "106.21" }, { "report_date": "2018-05-07", "delivery_status": "DELIVERING", "advertiser": "Allure Bridal", "placement": "RON", "io_number": "#1249", "package_product_name": "Allure Bridal IO#1249 | RON-(Follow Banner) - Q2 2018 (1 Apr - 30 Jun) (300x600)", "start_date": "2018-04-01", "end_date": "2018-06-30", "platform": "DFP", "booked_impressions": 365040, "trafficking_goals": 365040, "billable_impressions_delivered": 154571, "billable_clicks": 595, "billable_ctr": "0.3849", "first_party_impressions_delivered": 154571, "first_party_clicks": 595, "first_party_ctr": "0.3849", "remaining_impressions": 210469, "overserved_impressions": 10160, "impression_discrepancy": "0.00", "length_of_flight": 91, "days_served": 36, "optimal_impressions": 144411, "current_frequency_cap": 0, "pacing": "107.04" }, { "report_date": "2018-05-07", "delivery_status": "DELIVERING", "advertiser": "Apple Vacations", "placement": "Mobile", "io_number": "#1267", "package_product_name": "Apple Vacations IO#1267 | Mobile - Q2 2018 (1 May - 31 May)_Catfish_RIU", "start_date": "2018-05-01", "end_date": "2018-05-31", "platform": "DFP", "booked_impressions": 455000, "trafficking_goals": 455000, "billable_impressions_delivered": 73636, "billable_clicks": 118, "billable_ctr": "0.1602", "first_party_impressions_delivered": 73725, "first_party_clicks": 119, "first_party_ctr": "0.1614", "remaining_impressions": 381364, "overserved_impressions": -14429, "impression_discrepancy": "0.12", "length_of_flight": 31, "days_served": 6, "optimal_impressions": 88065, "current_frequency_cap": 0, "pacing": "83.62" }, { "report_date": "2018-05-07", "delivery_status": "DELIVERING", "advertiser": "Apple Vacations", "placement": "Mobile Scroller", "io_number": "#1267", "package_product_name": "Apple Vacations IO#1267 | Mobile Scroller - Q2 2018 (1 May - 31 May)_Mobile_RIU", "start_date": "2018-05-01", "end_date": "2018-05-31", "platform": "DFP", "booked_impressions": 50000, "trafficking_goals": 50000, "billable_impressions_delivered": 11838, "billable_clicks": 30, "billable_ctr": "0.2534", "first_party_impressions_delivered": 11231, "first_party_clicks": 30, "first_party_ctr": "0.2671", "remaining_impressions": 38162, "overserved_impressions": 2161, "impression_discrepancy": "-5.40", "length_of_flight": 31, "days_served": 6, "optimal_impressions": 9677, "current_frequency_cap": 0, "pacing": "122.33" }, { "report_date": "2018-05-07", "delivery_status": "DELIVERING", "advertiser": "Apple Vacations", "placement": "RON", "io_number": "#1267", "package_product_name": "Apple Vacations IO#1267 | RON - Q2 2018 (1 May - 31 May) (300x250)_RIU", "start_date": "2018-05-01", "end_date": "2018-05-31", "platform": "DFP", "booked_impressions": 140000, "trafficking_goals": 140000, "billable_impressions_delivered": 31405, "billable_clicks": 17, "billable_ctr": "0.0541", "first_party_impressions_delivered": 31442, "first_party_clicks": 17, "first_party_ctr": "0.0541", "remaining_impressions": 108595, "overserved_impressions": 4308, "impression_discrepancy": "0.12", "length_of_flight": 31, "days_served": 6, "optimal_impressions": 27097, "current_frequency_cap": 0, "pacing": "115.90" }, { "report_date": "2018-05-07", "delivery_status": "DELIVERING", "advertiser": "Apple Vacations", "placement": "RON", "io_number": "#1267", "package_product_name": "Apple Vacations IO#1267 | RON - Q2 2018 (1 May - 31 May) (728x90)_RIU", "start_date": "2018-05-01", "end_date": "2018-05-31", "platform": "DFP", "booked_impressions": 70000, "trafficking_goals": 70000, "billable_impressions_delivered": 14464, "billable_clicks": 3, "billable_ctr": "0.0207", "first_party_impressions_delivered": 14477, "first_party_clicks": 3, "first_party_ctr": "0.0207", "remaining_impressions": 55536, "overserved_impressions": 916, "impression_discrepancy": "0.09", "length_of_flight": 31, "days_served": 6, "optimal_impressions": 13548, "current_frequency_cap": 0, "pacing": "106.76" }, { "report_date": "2018-05-07", "delivery_status": "DELIVERING", "advertiser": "Apple Vacations", "placement": "RON", "io_number": "#1267", "package_product_name": "Apple Vacations IO#1267 | RON-(Follow Banner) Q2 2018 (1 May - 31 May) (300x600)_RIU", "start_date": "2018-05-01", "end_date": "2018-05-31", "platform": "DFP", "booked_impressions": 140000, "trafficking_goals": 140000, "billable_impressions_delivered": 31306, "billable_clicks": 8, "billable_ctr": "0.0256", "first_party_impressions_delivered": 31362, "first_party_clicks": 8, "first_party_ctr": "0.0255", "remaining_impressions": 108694, "overserved_impressions": 4209, "impression_discrepancy": "0.18", "length_of_flight": 31, "days_served": 6, "optimal_impressions": 27097, "current_frequency_cap": 0, "pacing": "115.53" }, { "report_date": "2018-05-07", "delivery_status": "DELIVERING", "advertiser": "Bel Aire", "placement": "AV", "io_number": "#1230", "package_product_name": "Bel Aire IO#1230 | AV - Q2 2018 (1 Apr - 30 May) (300x250)", "start_date": "2018-04-01", "end_date": "2018-05-30", "platform": "DFP", "booked_impressions": 14295, "trafficking_goals": 14295, "billable_impressions_delivered": 9455, "billable_clicks": 7, "billable_ctr": "0.0740", "first_party_impressions_delivered": 9455, "first_party_clicks": 7, "first_party_ctr": "0.0740", "remaining_impressions": 4840, "overserved_impressions": 878, "impression_discrepancy": "0.00", "length_of_flight": 60, "days_served": 36, "optimal_impressions": 8577, "current_frequency_cap": 0, "pacing": "110.24" }, { "report_date": "2018-05-07", "delivery_status": "DELIVERING", "advertiser": "Bel Aire", "placement": "AV", "io_number": "#1230", "package_product_name": "Bel Aire IO#1230 | AV - Q2 2018 (1 Apr - 30 May) (728x90)", "start_date": "2018-04-01", "end_date": "2018-05-30", "platform": "DFP", "booked_impressions": 3573, "trafficking_goals": 3573, "billable_impressions_delivered": 1833, "billable_clicks": 0, "billable_ctr": "0.0000", "first_party_impressions_delivered": 1833, "first_party_clicks": 0, "first_party_ctr": "0.0000", "remaining_impressions": 1740, "overserved_impressions": -311, "impression_discrepancy": "0.00", "length_of_flight": 60, "days_served": 36, "optimal_impressions": 2144, "current_frequency_cap": 0, "pacing": "85.49" }, { "report_date": "2018-05-07", "delivery_status": "DELIVERING", "advertiser": "Bel Aire", "placement": "Mobile", "io_number": "#1230", "package_product_name": "Bel Aire IO#1230 | Mobile - Q2 2018 (1 Apr - 30 May)_Catfish", "start_date": "2018-04-01", "end_date": "2018-05-30", "platform": "DFP", "booked_impressions": 207313, "trafficking_goals": 207313, "billable_impressions_delivered": 134411, "billable_clicks": 181, "billable_ctr": "0.1347", "first_party_impressions_delivered": 134411, "first_party_clicks": 181, "first_party_ctr": "0.1347", "remaining_impressions": 72902, "overserved_impressions": 10023, "impression_discrepancy": "0.00", "length_of_flight": 60, "days_served": 36, "optimal_impressions": 124388, "current_frequency_cap": 0, "pacing": "108.06" }, { "report_date": "2018-05-07", "delivery_status": "DELIVERING", "advertiser": "Bel Aire", "placement": "Mobile Scroller", "io_number": "#1230", "package_product_name": "Bel Aire IO#1230 | Mobile Scroller - Q2 2018 (1 Apr - 30 May)_Mobile", "start_date": "2018-04-01", "end_date": "2018-05-30", "platform": "DFP", "booked_impressions": 152104, "trafficking_goals": 152104, "billable_impressions_delivered": 98793, "billable_clicks": 717, "billable_ctr": "0.7258", "first_party_impressions_delivered": 98793, "first_party_clicks": 717, "first_party_ctr": "0.7258", "remaining_impressions": 53311, "overserved_impressions": 7531, "impression_discrepancy": "0.00", "length_of_flight": 60, "days_served": 36, "optimal_impressions": 91262, "current_frequency_cap": 0, "pacing": "108.25" }, { "report_date": "2018-05-07", "delivery_status": "DELIVERING", "advertiser": "Bel Aire", "placement": "RON", "io_number": "#1230", "package_product_name": "Bel Aire IO#1230 | RON - Q2 2018 (1 Apr - 30 May) (300x250)", "start_date": "2018-04-01", "end_date": "2018-05-30", "platform": "DFP", "booked_impressions": 54032, "trafficking_goals": 54032, "billable_impressions_delivered": 35134, "billable_clicks": 46, "billable_ctr": "0.1309", "first_party_impressions_delivered": 35134, "first_party_clicks": 46, "first_party_ctr": "0.1309", "remaining_impressions": 18898, "overserved_impressions": 2715, "impression_discrepancy": "0.00", "length_of_flight": 60, "days_served": 36, "optimal_impressions": 32419, "current_frequency_cap": 0, "pacing": "108.37" }, { "report_date": "2018-05-07", "delivery_status": "DELIVERING", "advertiser": "Bel Aire", "placement": "RON", "io_number": "#1230", "package_product_name": "Bel Aire IO#1230 | RON - Q2 2018 (1 Apr - 30 May) (728x90)", "start_date": "2018-04-01", "end_date": "2018-05-30", "platform": "DFP", "booked_impressions": 32001, "trafficking_goals": 32001, "billable_impressions_delivered": 20689, "billable_clicks": 25, "billable_ctr": "0.1208", "first_party_impressions_delivered": 20689, "first_party_clicks": 25, "first_party_ctr": "0.1208", "remaining_impressions": 11312, "overserved_impressions": 1488, "impression_discrepancy": "0.00", "length_of_flight": 60, "days_served": 36, "optimal_impressions": 19201, "current_frequency_cap": 0, "pacing": "107.75" }, { "report_date": "2018-05-07", "delivery_status": "DELIVERING", "advertiser": "Bel Aire", "placement": "RON", "io_number": "#1230", "package_product_name": "Bel Aire IO#1230 | RON-(Follow Banner) - Q2 2018 (1 Apr - 30 May) (300x600)", "start_date": "2018-04-01", "end_date": "2018-05-30", "platform": "DFP", "booked_impressions": 74032, "trafficking_goals": 74032, "billable_impressions_delivered": 48131, "billable_clicks": 77, "billable_ctr": "0.1600", "first_party_impressions_delivered": 48131, "first_party_clicks": 77, "first_party_ctr": "0.1600", "remaining_impressions": 25901, "overserved_impressions": 3712, "impression_discrepancy": "0.00", "length_of_flight": 60, "days_served": 36, "optimal_impressions": 44419, "current_frequency_cap": 0, "pacing": "108.36" }, { "report_date": "2018-05-07", "delivery_status": "DELIVERING", "advertiser": "Casablanca Bridal", "placement": "AV", "io_number": "#1246", "package_product_name": "Casablanca IO#1246 | AV - Q2 2018 (1 Apr - 30 Jun) (300x250)", "start_date": "2018-04-01", "end_date": "2018-06-30", "platform": "DFP", "booked_impressions": 18000, "trafficking_goals": 18000, "billable_impressions_delivered": 7667, "billable_clicks": 12, "billable_ctr": "0.1565", "first_party_impressions_delivered": 7667, "first_party_clicks": 12, "first_party_ctr": "0.1565", "remaining_impressions": 10333, "overserved_impressions": 546, "impression_discrepancy": "0.00", "length_of_flight": 91, "days_served": 36, "optimal_impressions": 7121, "current_frequency_cap": 0, "pacing": "107.67" }, { "report_date": "2018-05-07", "delivery_status": "DELIVERING", "advertiser": "Casablanca Bridal", "placement": "AV", "io_number": "#1246", "package_product_name": "Casablanca IO#1246 | AV - Q2 2018 (1 Apr - 30 Jun) (728x90)", "start_date": "2018-04-01", "end_date": "2018-06-30", "platform": "DFP", "booked_impressions": 4500, "trafficking_goals": 4500, "billable_impressions_delivered": 1483, "billable_clicks": 0, "billable_ctr": "0.0000", "first_party_impressions_delivered": 1483, "first_party_clicks": 0, "first_party_ctr": "0.0000", "remaining_impressions": 3017, "overserved_impressions": -297, "impression_discrepancy": "0.00", "length_of_flight": 91, "days_served": 36, "optimal_impressions": 1780, "current_frequency_cap": 0, "pacing": "83.31" }, { "report_date": "2018-05-07", "delivery_status": "DELIVERING", "advertiser": "Casablanca Bridal", "placement": "Mobile", "io_number": "#1246", "package_product_name": "Casablanca IO#1246 | Mobile - Q2 2018 (1 Apr - 30 Jun)_Catfish", "start_date": "2018-04-01", "end_date": "2018-06-30", "platform": "DFP", "booked_impressions": 235142, "trafficking_goals": 235142, "billable_impressions_delivered": 98533, "billable_clicks": 254, "billable_ctr": "0.2578", "first_party_impressions_delivered": 98533, "first_party_clicks": 254, "first_party_ctr": "0.2578", "remaining_impressions": 136609, "overserved_impressions": 5510, "impression_discrepancy": "0.00", "length_of_flight": 91, "days_served": 36, "optimal_impressions": 93023, "current_frequency_cap": 0, "pacing": "105.92" }, { "report_date": "2018-05-07", "delivery_status": "DELIVERING", "advertiser": "Casablanca Bridal", "placement": "Mobile Scroller", "io_number": "#1246", "package_product_name": "Casablanca IO#1246 | Mobile Scroller - Q2 2018 (1 Apr - 30 Jun)_Mobile", "start_date": "2018-04-01", "end_date": "2018-06-30", "platform": "DFP", "booked_impressions": 112696, "trafficking_goals": 112696, "billable_impressions_delivered": 47877, "billable_clicks": 569, "billable_ctr": "1.1885", "first_party_impressions_delivered": 47877, "first_party_clicks": 569, "first_party_ctr": "1.1885", "remaining_impressions": 64819, "overserved_impressions": 3294, "impression_discrepancy": "0.00", "length_of_flight": 91, "days_served": 36, "optimal_impressions": 44583, "current_frequency_cap": 0, "pacing": "107.39" }];
	    this.settings = {
	      width: 600,
	      height: 400,
	      colWidths: 100,
	      rowHeights: 15,
	      contextMenu: true,
	      manualColumnResize: true,
	      colHeaders: true,
	      fixedRowsTop: 2,
	      minSpareRows: 1,
	      manualRowMove: true,
	      manualColumnMove: true,
	      filters: true,
	      dropdownMenu: true,
	      fixedColumnsLeft: 3,
	      stretchH: 'all',
	      className: "htCenter",
	      cell: [{ row: 0, col: 0, className: "htRight" }, { row: 1, col: 1, className: "htLeft htMiddle" }, { row: 3, col: 4, className: "htLeft htBottom" }],
	      afterSetCellMeta: function afterSetCellMeta(row, col, key, val) {
	        console.log("cell meta changed", row, col, key, val);
	      },
	      notEmpty: function notEmpty(value, callback) {
	        if (!value || String(value).length === 0) {
	          callback(false);
	        } else {
	          callback(true);
	        }
	      }
	    };
	  }

	  (0, _createClass3.default)(ViewController, [{
	    key: 'getdata',
	    value: function getdata() {
	      var _this = this;

	      var req = {
	        method: 'GET',
	        url: '/api/csr'
	      };
	      this.dataService(req).then(function (success) {
	        console.log(success);
	        // this.tblData = angular.copy(success.data);
	        //console.log(this.tblData)
	        _this.data = success.data;
	      }, function (err) {
	        if (error.status === 401) {
	          _this.ns.notify('error', 'Your session has expired', 'Session Expired');
	          setTimeout(function () {
	            window.location = '/login';
	          }, 1000);
	        } else {
	          _this.ns.notify('error', 'Something went wrong, Please refresh your page', 'Server Error');
	          console.log(error);
	        }
	      });
	    }
	  }]);
	  return ViewController;
	}()) || _class) || _class);
	exports.default = {
	  url: '/',
	  template: _view2.default,
	  controller: ViewController,
	  controllerAs: 'vm'
	};
	module.exports = exports['default'];

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(21), __esModule: true };

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(22), __esModule: true };

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(34);
	var $Object = __webpack_require__(2).Object;
	module.exports = function defineProperty(it, key, desc) {
	  return $Object.defineProperty(it, key, desc);
	};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(35);
	var $Object = __webpack_require__(2).Object;
	module.exports = function getOwnPropertyDescriptor(it, key) {
	  return $Object.getOwnPropertyDescriptor(it, key);
	};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(5);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

	var toString = {}.toString;

	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(23);
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(5);
	var document = __webpack_require__(9).document;
	// typeof document.createElement is 'object' in old IE
	var is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(12);
	var createDesc = __webpack_require__(13);
	module.exports = __webpack_require__(1) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(25);
	// eslint-disable-next-line no-prototype-builtins
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	var pIE = __webpack_require__(32);
	var createDesc = __webpack_require__(13);
	var toIObject = __webpack_require__(14);
	var toPrimitive = __webpack_require__(15);
	var has = __webpack_require__(10);
	var IE8_DOM_DEFINE = __webpack_require__(11);
	var gOPD = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(1) ? gOPD : function getOwnPropertyDescriptor(O, P) {
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if (IE8_DOM_DEFINE) try {
	    return gOPD(O, P);
	  } catch (e) { /* empty */ }
	  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
	};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

	exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(8);
	var core = __webpack_require__(2);
	var fails = __webpack_require__(4);
	module.exports = function (KEY, exec) {
	  var fn = (core.Object || {})[KEY] || Object[KEY];
	  var exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
	};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(1), 'Object', { defineProperty: __webpack_require__(12).f });


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(14);
	var $getOwnPropertyDescriptor = __webpack_require__(31).f;

	__webpack_require__(33)('getOwnPropertyDescriptor', function () {
	  return function getOwnPropertyDescriptor(it, key) {
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});


/***/ }),
/* 36 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	module.exports = "<!DOCTYPE html>\n<html >\n    <div class=\"app-container campaign-fulfilment\">\n        <div id=\"top-container\">\n            <p class=\"page-title\">{{vm.appConfig.name}} <span class=\"report-updated\">Last Updated: {{vm.updatedAt}}</span></p>\n        </div>\n    </div>\n    <div id=\"loaderDiv\" loader>\n        <img src=\"/images/default.gif\" class=\"ajax-loader\" />\n    </div>\n    <div id=\"example1\" class=\"hot handsontable\" ></div>\n    \n    <hot-table\n\n    settings=\"vm.settings\"\n    row-headers=\"true\" \n    datarows=\"vm.tblData\"\n    manual-row-move scroll-v=\"true\"\n    manual-column-move scroll-h= \"true\",\n    formula=\"true\"\n    manualColumnResize: \"true\"\n  >\n\n    <hot-column data=\"report_date\" title=\"'report_date'\" read-only></hot-column>\n    <hot-column data=\"delivery_status\" title=\"'delivery_status'\"></hot-column>\n    <hot-column data=\"placement\" title=\"'placement'\" ></hot-column>\n   \n    <hot-column data=\"package_product_name\" title=\"'package_product_name'\"></hot-column>\n    <hot-column data=\"pacing\" title=\"'pacing'\" ></hot-column>\n    <hot-column data=\"start_date\" title=\"'start_date'\" read-only></hot-column>\n    <hot-column data=\"end_date\" title=\"'end_date'\" read-only></hot-column>\n    \n   \n  </hot-table>\n \n</html>\n";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(39))(41);

/***/ }),
/* 39 */
/***/ (function(module, exports) {

	module.exports = uiCommon_lib;

/***/ })
/******/ ]);