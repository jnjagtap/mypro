var uiCommon_lib =
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
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.platformInject = exports.platformConfig = exports.platformController = exports.platformDirective = exports.platformService = exports.commonInject = exports.commonConfig = exports.commonController = exports.commonDirective = exports.commonService = undefined;

	var _constants = __webpack_require__(20);

	var _headerTemplate = __webpack_require__(154);

	var _formatCell = __webpack_require__(69);

	var _formatCell2 = _interopRequireDefault(_formatCell);

	var _decorators = __webpack_require__(41);

	var d = _interopRequireWildcard(_decorators);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Common = angular.module('ui-common', ['ui.router', 'angularjs-dropdown-multiselect', 'ui.grid', 'ui.grid.pagination', 'ui.grid.resizeColumns', 'ui.grid.treeView', 'ui.grid.edit', 'ui.grid.pinning', 'ui.grid.moveColumns', 'ui.grid.selection', 'ui.grid.autoResize', 'ui.grid.saveState']);
	var Platform = angular.module('ui-platform', ['ui-common']);

	Common.constant(_constants.APP_TYPE, _constants.APPLICATION_MODULE);
	Platform.constant(_constants.APP_TYPE, _constants.PLATFORM_MODULE);

	Common.run(['$rootScope', '$state', 'CommonService', '$injector', function (rs, state, cs, ig) {
	  if (ig.has('APP_CONFIG')) {
	    var appconfig = ig.get('APP_CONFIG');
	    cs.getPlatformRS().$emit('app-loaded', {
	      appName: appconfig.ngId,
	      state: state,
	      rs: rs,
	      ig: ig,
	      initialApplicationView: appconfig.href.replace('#', '')
	    });
	  }
	}]);

	Common.directive('loader', function ($rootScope) {
	  return function ($scope, element, attrs) {
	    $scope.$on('loader_show', function () {
	      return element.show();
	    });
	    return $scope.$on('loader_hide', function () {
	      return element.hide();
	    });
	  };
	});

	Common.run(['$rootScope', '$state', '$templateCache', function (rs, $state, $tc) {
	  rs.model = {}; // eslint-disable-line no-param-reassign
	  rs.$state = $state; // eslint-disable-line no-param-reassign
	  $tc.put('grid-header-template.html', _headerTemplate.gridHeaderCache);
	}]);

	Common.filter('formatCell', _formatCell2.default);

	/**
	 *  Javascript Decorator to register ng specific functionality
	 * */
	var commonService = exports.commonService = d.serviceDecorator(Common);
	var commonDirective = exports.commonDirective = d.directiveDecorator(Common);
	var commonController = exports.commonController = d.controllerDecorator(Common);
	var commonConfig = exports.commonConfig = d.configDecorator(Common);
	var commonInject = exports.commonInject = d.injectDecorator(Common);
	/**
	 *  Javascript Decorator to register ng specific functionality
	 * */
	var platformService = exports.platformService = d.serviceDecorator(Platform);
	var platformDirective = exports.platformDirective = d.directiveDecorator(Platform);
	var platformController = exports.platformController = d.controllerDecorator(Platform);
	var platformConfig = exports.platformConfig = d.configDecorator(Platform);
	var platformInject = exports.platformInject = d.injectDecorator(Platform);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(81);

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
/* 4 */
/***/ (function(module, exports) {

	var core = module.exports = { version: '2.5.7' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(93), __esModule: true };

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self
	  // eslint-disable-next-line no-new-func
	  : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(13)(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(6);
	var core = __webpack_require__(4);
	var ctx = __webpack_require__(44);
	var hide = __webpack_require__(14);
	var has = __webpack_require__(9);
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

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(18);
	var IE8_DOM_DEFINE = __webpack_require__(46);
	var toPrimitive = __webpack_require__(38);
	var dP = Object.defineProperty;

	exports.f = __webpack_require__(7) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(47);
	var defined = __webpack_require__(27);
	module.exports = function (it) {
	  return IObject(defined(it));
	};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(90), __esModule: true };

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(10);
	var createDesc = __webpack_require__(23);
	module.exports = __webpack_require__(7) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	var store = __webpack_require__(36)('wks');
	var uid = __webpack_require__(25);
	var Symbol = __webpack_require__(6).Symbol;
	var USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(89), __esModule: true };

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(15);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys = __webpack_require__(51);
	var enumBugKeys = __webpack_require__(28);

	module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
	};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var APP_CONFIG = exports.APP_CONFIG = {
	  title: 'Flight Search Engine',
	  datePlaceHolder: 'Please Select Date',
	  maxPassengers: 10
	};

	var PLATFORM_MODULE = exports.PLATFORM_MODULE = 'PLATFORM_MODULE',
	    // eslint-disable-line one-var
	APPLICATION_MODULE = exports.APPLICATION_MODULE = 'APPLICATION_MODULE',
	    FILTER_SYNC_URI = exports.FILTER_SYNC_URI = 'FILTER_SYNC_URI',
	    APP_TYPE = exports.APP_TYPE = 'APP_TYPE';

	var APP_EVENTS = exports.APP_EVENTS = {
	  onLocalFilterChanges: 'onLocalFilterChanges'
	};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	module.exports = true;


/***/ }),
/* 22 */
/***/ (function(module, exports) {

	exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 23 */
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(27);
	module.exports = function (it) {
	  return Object(defined(it));
	};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

	var id = 0;
	var px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(95), __esModule: true };

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
/***/ (function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');


/***/ }),
/* 29 */
/***/ (function(module, exports) {

	module.exports = {};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject = __webpack_require__(18);
	var dPs = __webpack_require__(109);
	var enumBugKeys = __webpack_require__(28);
	var IE_PROTO = __webpack_require__(35)('IE_PROTO');
	var Empty = function () { /* empty */ };
	var PROTOTYPE = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(45)('iframe');
	  var i = enumBugKeys.length;
	  var lt = '<';
	  var gt = '>';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(103).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	var pIE = __webpack_require__(22);
	var createDesc = __webpack_require__(23);
	var toIObject = __webpack_require__(11);
	var toPrimitive = __webpack_require__(38);
	var has = __webpack_require__(9);
	var IE8_DOM_DEFINE = __webpack_require__(46);
	var gOPD = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(7) ? gOPD : function getOwnPropertyDescriptor(O, P) {
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

	exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(8);
	var core = __webpack_require__(4);
	var fails = __webpack_require__(13);
	module.exports = function (KEY, exec) {
	  var fn = (core.Object || {})[KEY] || Object[KEY];
	  var exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
	};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	var def = __webpack_require__(10).f;
	var has = __webpack_require__(9);
	var TAG = __webpack_require__(16)('toStringTag');

	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(36)('keys');
	var uid = __webpack_require__(25);
	module.exports = function (key) {
	  return shared[key] || (shared[key] = uid(key));
	};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	var core = __webpack_require__(4);
	var global = __webpack_require__(6);
	var SHARED = '__core-js_shared__';
	var store = global[SHARED] || (global[SHARED] = {});

	(module.exports = function (key, value) {
	  return store[key] || (store[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: core.version,
	  mode: __webpack_require__(21) ? 'pure' : 'global',
	  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
	});


/***/ }),
/* 37 */
/***/ (function(module, exports) {

	// 7.1.4 ToInteger
	var ceil = Math.ceil;
	var floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(15);
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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(6);
	var core = __webpack_require__(4);
	var LIBRARY = __webpack_require__(21);
	var wksExt = __webpack_require__(40);
	var defineProperty = __webpack_require__(10).f;
	module.exports = function (name) {
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
	};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(16);


/***/ }),
/* 41 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 *  Javascript Decorator to register ng specific functionality
	 * */
	var serviceDecorator = exports.serviceDecorator = function serviceDecorator(App) {
	  return function service(options) {
	    return function decorator(target) {
	      options = options ? options : {};
	      if (!options.name) {
	        throw new Error('@Service() must contains serviceName property!');
	      }
	      App.service(options.name, target);
	    };
	  };
	};

	var directiveDecorator = exports.directiveDecorator = function directiveDecorator(App) {
	  return function directive(options) {
	    return function decorator(target) {
	      var directiveName = dashCaseToCamelCase(options.selector);
	      App.directive(directiveName, target.directiveFactory);
	    };
	  };
	};

	var controllerDecorator = exports.controllerDecorator = function controllerDecorator(App) {
	  return function controller() {

	    return function (target) {
	      App.controller(target.name, target);
	    };
	  };
	};

	var configDecorator = exports.configDecorator = function configDecorator(App) {
	  return function config() {
	    return function decorator(target, key, descriptor) {
	      App.config(descriptor.value);
	    };
	  };
	};

	var injectDecorator = exports.injectDecorator = function injectDecorator(App) {
	  return function inject() {
	    for (var _len = arguments.length, dependencies = Array(_len), _key = 0; _key < _len; _key++) {
	      dependencies[_key] = arguments[_key];
	    }

	    return function decorator(target, key, descriptor) {
	      if (descriptor) {
	        var fn = descriptor.value;
	        fn.$inject = dependencies;
	      } else {
	        target.$inject = dependencies;
	      }
	    };
	  };
	};

	// Utils functions
	function pascalCaseToCamelCase(str) {
	  return str.charAt(0).toLowerCase() + str.substring(1);
	}

	function dashCaseToCamelCase(string) {
	  return string.replace(/-([a-z])/ig, function (all, letter) {
	    return letter.toUpperCase();
	  });
	}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(85);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(84);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ }),
/* 43 */
/***/ (function(module, exports) {

	var toString = {}.toString;

	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(99);
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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(15);
	var document = __webpack_require__(6).document;
	// typeof document.createElement is 'object' in old IE
	var is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(7) && !__webpack_require__(13)(function () {
	  return Object.defineProperty(__webpack_require__(45)('div'), 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(43);
	// eslint-disable-next-line no-prototype-builtins
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY = __webpack_require__(21);
	var $export = __webpack_require__(8);
	var redefine = __webpack_require__(52);
	var hide = __webpack_require__(14);
	var Iterators = __webpack_require__(29);
	var $iterCreate = __webpack_require__(105);
	var setToStringTag = __webpack_require__(34);
	var getPrototypeOf = __webpack_require__(50);
	var ITERATOR = __webpack_require__(16)('iterator');
	var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
	var FF_ITERATOR = '@@iterator';
	var KEYS = 'keys';
	var VALUES = 'values';

	var returnThis = function () { return this; };

	module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function (kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS: return function keys() { return new Constructor(this, kind); };
	      case VALUES: return function values() { return new Constructor(this, kind); };
	    } return function entries() { return new Constructor(this, kind); };
	  };
	  var TAG = NAME + ' Iterator';
	  var DEF_VALUES = DEFAULT == VALUES;
	  var VALUES_BUG = false;
	  var proto = Base.prototype;
	  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
	  var $default = $native || getMethod(DEFAULT);
	  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
	  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
	  var methods, key, IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() { return $native.call(this); };
	  }
	  // Define iterator
	  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys = __webpack_require__(51);
	var hiddenKeys = __webpack_require__(28).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return $keys(O, hiddenKeys);
	};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has = __webpack_require__(9);
	var toObject = __webpack_require__(24);
	var IE_PROTO = __webpack_require__(35)('IE_PROTO');
	var ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	var has = __webpack_require__(9);
	var toIObject = __webpack_require__(11);
	var arrayIndexOf = __webpack_require__(101)(false);
	var IE_PROTO = __webpack_require__(35)('IE_PROTO');

	module.exports = function (object, names) {
	  var O = toIObject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (has(O, key = names[i++])) {
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(14);


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.InvalidJSONException = exports.LocalStorageNotSupportedException = exports.InvalidEndpointsException = exports.InvalidArgumentTypeException = exports.DependenciesMissMatchException = undefined;

	var _getPrototypeOf = __webpack_require__(82);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(88);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(87);

	var _inherits3 = _interopRequireDefault(_inherits2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var DependenciesMissMatchException = exports.DependenciesMissMatchException = function (_Error) {
	  (0, _inherits3.default)(DependenciesMissMatchException, _Error);

	  function DependenciesMissMatchException() {
	    (0, _classCallCheck3.default)(this, DependenciesMissMatchException);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (DependenciesMissMatchException.__proto__ || (0, _getPrototypeOf2.default)(DependenciesMissMatchException)).call(this));

	    _this.message = ' Dependencies lengths not per param length ';
	    return _this;
	  }

	  return DependenciesMissMatchException;
	}(Error);

	var InvalidArgumentTypeException = exports.InvalidArgumentTypeException = function (_Error2) {
	  (0, _inherits3.default)(InvalidArgumentTypeException, _Error2);

	  function InvalidArgumentTypeException() {
	    (0, _classCallCheck3.default)(this, InvalidArgumentTypeException);

	    var _this2 = (0, _possibleConstructorReturn3.default)(this, (InvalidArgumentTypeException.__proto__ || (0, _getPrototypeOf2.default)(InvalidArgumentTypeException)).call(this));

	    _this2.message = ' Dependencies lengths not per param length ';
	    return _this2;
	  }

	  return InvalidArgumentTypeException;
	}(Error);

	var InvalidEndpointsException = exports.InvalidEndpointsException = function (_Error3) {
	  (0, _inherits3.default)(InvalidEndpointsException, _Error3);

	  function InvalidEndpointsException() {
	    (0, _classCallCheck3.default)(this, InvalidEndpointsException);

	    var _this3 = (0, _possibleConstructorReturn3.default)(this, (InvalidEndpointsException.__proto__ || (0, _getPrototypeOf2.default)(InvalidEndpointsException)).call(this));

	    _this3.message = 'Endpoints not defined';
	    return _this3;
	  }

	  return InvalidEndpointsException;
	}(Error);

	var LocalStorageNotSupportedException = exports.LocalStorageNotSupportedException = function (_Error4) {
	  (0, _inherits3.default)(LocalStorageNotSupportedException, _Error4);

	  function LocalStorageNotSupportedException() {
	    (0, _classCallCheck3.default)(this, LocalStorageNotSupportedException);

	    var _this4 = (0, _possibleConstructorReturn3.default)(this, (LocalStorageNotSupportedException.__proto__ || (0, _getPrototypeOf2.default)(LocalStorageNotSupportedException)).call(this));

	    _this4.message = 'Local Storage is not supported';
	    return _this4;
	  }

	  return LocalStorageNotSupportedException;
	}(Error);

	var InvalidJSONException = exports.InvalidJSONException = function (_Error5) {
	  (0, _inherits3.default)(InvalidJSONException, _Error5);

	  function InvalidJSONException() {
	    (0, _classCallCheck3.default)(this, InvalidJSONException);

	    var _this5 = (0, _possibleConstructorReturn3.default)(this, (InvalidJSONException.__proto__ || (0, _getPrototypeOf2.default)(InvalidJSONException)).call(this));

	    _this5.message = 'JSON format is not supported';
	    return _this5;
	  }

	  return InvalidJSONException;
	}(Error);

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _dec, _dec2, _class;

	var _view = __webpack_require__(142);

	var _view2 = _interopRequireDefault(_view);

	var _ngApp = __webpack_require__(1);

	__webpack_require__(129);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/** Class representing a Accordion Directive. */
	var Accordion = (_dec = (0, _ngApp.commonInject)(), _dec2 = (0, _ngApp.commonDirective)({ selector: 'yk-accordion' }), _dec(_class = _dec2(_class = function () {
	  // eslint-disable-line no-unused-vars

	  function Accordion() {
	    (0, _classCallCheck3.default)(this, Accordion);

	    this.replace = true;
	    this.template = _view2.default;
	    this.scope = {
	      list: '='
	    };
	  }

	  (0, _createClass3.default)(Accordion, null, [{
	    key: 'directiveFactory',
	    value: function directiveFactory() {
	      return new Accordion();
	    }
	  }]);
	  return Accordion;
	}()) || _class) || _class);

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _dec, _dec2, _class;

	var _view = __webpack_require__(143);

	var _view2 = _interopRequireDefault(_view);

	var _ngApp = __webpack_require__(1);

	__webpack_require__(130);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AppFooter = (_dec = (0, _ngApp.commonInject)(), _dec2 = (0, _ngApp.commonDirective)({ selector: 'app-footer' }), _dec(_class = _dec2(_class = function () {
	  // eslint-disable-line no-unused-vars

	  function AppFooter() {
	    (0, _classCallCheck3.default)(this, AppFooter);

	    this.replace = true;
	    this.template = _view2.default;
	  }

	  (0, _createClass3.default)(AppFooter, null, [{
	    key: 'directiveFactory',
	    value: function directiveFactory() {
	      return new AppFooter();
	    }
	  }]);
	  return AppFooter;
	}()) || _class) || _class);

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _dec, _dec2, _class;

	var _view = __webpack_require__(144);

	var _view2 = _interopRequireDefault(_view);

	var _ngApp = __webpack_require__(1);

	var _constants = __webpack_require__(20);

	__webpack_require__(131);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AppHeader = (_dec = (0, _ngApp.commonInject)(), _dec2 = (0, _ngApp.commonDirective)({ selector: 'app-header' }), _dec(_class = _dec2(_class = function () {
	  // eslint-disable-line no-unused-vars
	  function AppHeader() {
	    (0, _classCallCheck3.default)(this, AppHeader);

	    this.replace = true;
	    this.template = _view2.default;
	    this.link = this.link.bind(this);
	  }

	  (0, _createClass3.default)(AppHeader, [{
	    key: 'link',
	    value: function link(scope) {
	      scope.appTitle = _constants.APP_CONFIG.title; // eslint-disable-line no-param-reassign
	    }
	  }], [{
	    key: 'directiveFactory',
	    value: function directiveFactory() {
	      return new AppHeader();
	    }
	  }]);
	  return AppHeader;
	}()) || _class) || _class);

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(55);

	__webpack_require__(56);

	__webpack_require__(54);

	__webpack_require__(58);

	__webpack_require__(63);

	__webpack_require__(60);

	__webpack_require__(61);

	__webpack_require__(67);

	__webpack_require__(62);

	__webpack_require__(64);

	__webpack_require__(65);

	__webpack_require__(66);

	__webpack_require__(59);

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _getOwnPropertyDescriptor = __webpack_require__(5);

	var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

	var _stringify = __webpack_require__(17);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _dec, _dec2, _class, _desc, _value, _class2; // import template from '!html!./view.html';

	// import { APP_CONFIG } from 'constants';


	var _ngApp = __webpack_require__(1);

	__webpack_require__(132);

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

	var PFAppLoader = (_dec = (0, _ngApp.commonDirective)({ selector: 'pf-app-loader' }), _dec2 = (0, _ngApp.commonInject)('CommonService', '$log', '$injector'), _dec(_class = (_class2 = function () {
	  // eslint-disable-line no-unused-vars
	  function PFAppLoader(cs, logger, $ig) {
	    (0, _classCallCheck3.default)(this, PFAppLoader);

	    this.restrict = 'A';
	    this.cs = cs;
	    this.logger = logger;
	    this.$location = $ig.get('$location');
	    this.$rs = $ig.get('$rootScope');
	    this.link = this.link.bind(this);
	  }

	  (0, _createClass3.default)(PFAppLoader, [{
	    key: 'link',
	    value: function link(scope, el, attr) {
	      var me = this;
	      var logger = this.logger,
	          cs = this.cs; // eslint-disable-line

	      var appConfig = scope[attr.pfAppLoader];

	      $(el).click(function (event) {
	        $('.app-menu-item').each(function (idx, el) {
	          $(el).removeClass('active');
	        });
	        if (!me.isExistsNGModule(appConfig.ngId)) {
	          logger.debug(appConfig.ngId, ' not found');
	          me.loadNBootStrap(appConfig);
	        }
	        $(event.target).parents('.app-menu-item').addClass('active');
	      });

	      var cleanup = this.$rs.$on(appConfig.ngId + '-loaded', function () {
	        // this.$location.href(appConfig.href);
	        cleanup();
	      });
	    }
	  }, {
	    key: 'loadNBootStrap',
	    value: function loadNBootStrap(appConfig) {
	      var _this = this;

	      $.getScript(appConfig.libURL).done(function () {
	        // bootStrap ngModule
	        // get container
	        var $wa = angular.element(document.getElementById('yk-workarea'));
	        // create template/
	        var templte = '<div class="container-fluid" id="' + appConfig.ngId + '">  <ui-view /> </div>';
	        $wa.append(templte);
	        // load ngModule
	        _this.buildDynamicModule(appConfig);
	        setTimeout(function () {
	          return angular.bootstrap(document.getElementById(appConfig.ngId), [appConfig.ngId, appConfig.ngId + '_appConfig']);
	        }, 0);
	      }).fail(function () {
	        throw new Error('failed to load script');
	      });
	    }
	  }, {
	    key: 'buildDynamicModule',
	    value: function buildDynamicModule(appConfig) {
	      var json = '\n      angular.module(\'' + appConfig.ngId + '_appConfig\',[])\n        .constant(\'APP_CONFIG\',' + (0, _stringify2.default)(appConfig) + ')\n        .run([\'$rootScope\',function($rs){\n          $rs.$emit(\'' + appConfig.ngId + '-loaded\');\n        }])\n    ';
	      var x = new Function('angular', json); // eslint-disable-line no-new-func
	      x(angular);
	    }
	  }, {
	    key: 'isExistsNGModule',
	    value: function isExistsNGModule(modeName) {
	      var returnVal = false;
	      try {
	        angular.module(modeName);
	        returnVal = true;
	      } catch (e) {// eslint-disable-line no-empty
	      }
	      return returnVal;
	    }
	  }], [{
	    key: 'directiveFactory',
	    value: function directiveFactory(cs, logger, $ig) {
	      return new PFAppLoader(cs, logger, $ig);
	    }
	  }]);
	  return PFAppLoader;
	}(), (_applyDecoratedDescriptor(_class2, 'directiveFactory', [_dec2], (0, _getOwnPropertyDescriptor2.default)(_class2, 'directiveFactory'), _class2)), _class2)) || _class);

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _getOwnPropertyDescriptor = __webpack_require__(5);

	var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _dec, _dec2, _class, _desc, _value, _class2;
	// import {APP_CONFIG} from 'constants';


	var _view = __webpack_require__(145);

	var _view2 = _interopRequireDefault(_view);

	var _ngApp = __webpack_require__(1);

	__webpack_require__(133);

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

	var PFDatePicker = (_dec = (0, _ngApp.commonDirective)({ selector: 'pf-datepicker' }), _dec2 = (0, _ngApp.commonInject)(), _dec(_class = (_class2 = function () {
	  // eslint-disable-line no-unused-vars

	  function PFDatePicker() {
	    (0, _classCallCheck3.default)(this, PFDatePicker);

	    this.replace = true;
	    this.link = this.link.bind(this);
	    this.template = _view2.default;
	    this.controller = ['$scope', '$element', '$attrs', this.controller];
	  }

	  (0, _createClass3.default)(PFDatePicker, [{
	    key: 'controller',
	    value: function controller($scope, $element, $attrs) {// eslint-disable-line
	    }
	  }, {
	    key: 'link',
	    value: function link($scope, el, attr, controllers) {
	      var defaStartDate = moment().subtract(7, 'days');
	      var defaEndDate = moment(new Date());
	      var $parentScope = $scope.$parent;
	      var picker = void 0;
	      var $input = $('input', el);
	      var dtPickerOptions = {};
	      if ($scope.filter.filtertype[0].type === 'single') {
	        $scope.placeholderText = 'select a date';
	        dtPickerOptions = {
	          separator: ' - ',
	          format: 'YYYY-MM-DD',
	          singleDatePicker: true,
	          showDropdowns: true,
	          parentEl: el,
	          startDate: defaEndDate,
	          endDate: defaEndDate
	        };
	      } else {
	        $scope.placeholderText = 'select a date range';
	        dtPickerOptions = {
	          separator: ' - ',
	          format: 'YYYY-MM-DD',
	          showDropdowns: true,
	          alwaysShowCalendars: true,
	          ranges: {
	            Yesterday: [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
	            'Last 7 Days': [moment().subtract(7, 'days'), moment().subtract(1, 'days')],
	            'Last 30 Days': [moment().subtract(30, 'days'), moment().subtract(1, 'days')],
	            'This Month': [moment().startOf('month'), moment().endOf('month')],
	            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
	            'This Year': [moment().startOf('year'), moment().subtract(1, 'days')]
	          },
	          parentEl: el,
	          startDate: defaStartDate,
	          endDate: defaEndDate
	        };
	      }

	      var init = function init() {
	        if (picker) picker.remove();
	        $input.daterangepicker(dtPickerOptions, function (startDt, endDt, lbl) {
	          var selectedModel = void 0;
	          if ($parentScope.filter.filtertype[0].type === 'single') {
	            selectedModel = [{ key: moment(startDt).format('YYYYMMDD') }];
	          } else {
	            selectedModel = [{ key: moment(startDt).format('YYYYMMDD') }, { key: moment(endDt).format('YYYYMMDD') }];
	          }
	          $parentScope.$apply(function () {
	            $parentScope[attr.selectedModel] = selectedModel;
	          });
	        });
	        picker = $input.data('daterangepicker');
	      };

	      // $parentScope.$watchCollection(attr.options, (nv, ov) => {
	      //   if (!nv) return;
	      //   if (JSON.stringify(nv) === JSON.stringify(ov)) return;

	      //   if (nv[0]) {
	      //     dtPickerOptions['minDate'] = moment('' + nv[0].key);
	      //   } else {
	      //     dtPickerOptions['minDate'] = false;
	      //   }

	      //   if (nv[1]) {
	      //     dtPickerOptions['maxDate'] = moment('' + nv[nv.length - 1].key);
	      //     dtPickerOptions['startDate'] = dtPickerOptions['maxDate'];
	      //     $parentScope[attr.selectedModel] =[{key: nv[nv.length - 1].key}];
	      //   } else {
	      //     dtPickerOptions['maxDate'] = false;
	      //   }

	      //   init();
	      // });

	      // $scope.$watch('date', (nv, ov) => {
	      //   console.log(nv, ov);
	      // }, true);

	      // $parentScope.$watchCollection(attr.selectedModel, (nv, ov) => {
	      //   let updateRequired = false;
	      //   if (!picker) return;
	      //   if (JSON.stringify(nv) === JSON.stringify(ov)) return;


	      //   if (nv.length == 0) {
	      //     updateRequired = false;
	      //     dtPickerOptions['startDate'] = dtPickerOptions['maxDate'];
	      //     dtPickerOptions['endDate'] = dtPickerOptions['maxDate'];
	      //     return;
	      //   }

	      //   if (dtPickerOptions['startDate'] !== moment('' + nv[0].key)) {
	      //     dtPickerOptions['startDate'] = moment('' + nv[0].key);
	      //     updateRequired = true;
	      //   }

	      //   if (nv[1] && dtPickerOptions['endDate'] != moment('' + nv[1].key)) {
	      //     dtPickerOptions['endDate'] = moment('' + nv[1].key);
	      //     updateRequired = true;
	      //   }
	      //   console.log('date attr change', updateRequired, nv);

	      //   if (updateRequired) init();
	      // });

	      init();
	      $input.val('');

	      $scope.$on('$destroy', function () {
	        if (picker) picker.remove();
	      });
	    }
	  }], [{
	    key: 'directiveFactory',
	    value: function directiveFactory() {
	      return new PFDatePicker();
	    }
	  }]);
	  return PFDatePicker;
	}(), (_applyDecoratedDescriptor(_class2, 'directiveFactory', [_dec2], (0, _getOwnPropertyDescriptor2.default)(_class2, 'directiveFactory'), _class2)), _class2)) || _class);

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _getOwnPropertyDescriptor = __webpack_require__(5);

	var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _dec, _dec2, _class, _desc, _value, _class2;
	// import {APP_CONFIG} from 'constants';


	var _view = __webpack_require__(147);

	var _view2 = _interopRequireDefault(_view);

	var _viewAddFilter = __webpack_require__(146);

	var _viewAddFilter2 = _interopRequireDefault(_viewAddFilter);

	var _ngApp = __webpack_require__(1);

	__webpack_require__(134);

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

	var PFFilterAdd = (_dec = (0, _ngApp.commonDirective)({ selector: 'pf-filter-add' }), _dec2 = (0, _ngApp.commonInject)('$templateCache'), _dec(_class = (_class2 = function () {
	  // eslint-disable-line no-unused-vars

	  function PFFilterAdd() {
	    (0, _classCallCheck3.default)(this, PFFilterAdd);

	    this.replace = true;
	    this.link = this.link.bind(this);
	    this.require = ['^^pfFilterContainer'];
	    this.template = function () {
	      return '<div class="filter-component" ng-include="templateURL"></div>';
	    };
	    this.controller = ['$scope', '$element', '$attrs', this.controller];
	  }

	  (0, _createClass3.default)(PFFilterAdd, [{
	    key: 'controller',
	    value: function controller($scope, $element, $attrs) {
	      // eslint-disable-line
	      $scope.selectedFilterToAdd = {};
	      $scope.templateURL = 'add-filter.html';
	      $scope.dropdownSettngs = { // eslint-disable-line no-param-reassign
	        displayProp: 'label',
	        idProp: 'key',
	        smartButtonMaxItems: 1,
	        selectionLimit: 1
	      };
	      $scope.deleteMe = function () {
	        alert('deleted');
	      };

	      $scope.showHideTemplate = function () {
	        $scope.templateURL = $scope.templateURL === 'add-filter.html' ? 'update-filter.html' : 'add-filter.html';
	      };
	    }
	  }, {
	    key: 'link',
	    value: function link($scope, el, attr, controllers) {
	      var pfFilterContainer = controllers[0];
	      $scope.addDefaultFilter = function () {
	        pfFilterContainer.addDefaultFilter($scope.selectedFilterToAdd);
	        $scope.selectedFilterToAdd = {};
	      };
	    }
	  }], [{
	    key: 'directiveFactory',
	    value: function directiveFactory(tc) {
	      tc.put('add-filter.html', _view2.default);
	      tc.put('update-filter.html', _viewAddFilter2.default);
	      return new PFFilterAdd();
	    }
	  }]);
	  return PFFilterAdd;
	}(), (_applyDecoratedDescriptor(_class2, 'directiveFactory', [_dec2], (0, _getOwnPropertyDescriptor2.default)(_class2, 'directiveFactory'), _class2)), _class2)) || _class);

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _getOwnPropertyDescriptor = __webpack_require__(5);

	var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

	var _keys = __webpack_require__(26);

	var _keys2 = _interopRequireDefault(_keys);

	var _stringify = __webpack_require__(17);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _assign = __webpack_require__(12);

	var _assign2 = _interopRequireDefault(_assign);

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _dec, _dec2, _class, _desc, _value, _class2;
	// import {APP_CONFIG} from 'constants';


	var _view = __webpack_require__(148);

	var _view2 = _interopRequireDefault(_view);

	var _ngApp = __webpack_require__(1);

	__webpack_require__(135);

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

	var PFFilterContainer = (_dec = (0, _ngApp.commonDirective)({ selector: 'pf-filter-container' }), _dec2 = (0, _ngApp.commonInject)('LocalStorage'), _dec(_class = (_class2 = function () {
	  // eslint-disable-line    no-unused-vars
	  function PFFilterContainer(localStorage) {
	    (0, _classCallCheck3.default)(this, PFFilterContainer);

	    this.replace = true;
	    this.template = _view2.default;
	    this.localStorage = localStorage;
	    this.link = this.link.bind(this);
	    this.scope = {
	      filterOption: '=?'
	    };
	    this.restrict = 'E';
	    this.controller = ['$scope', '$attrs', 'APP_CONFIG', '$http', 'CommonService', 'NotificationService', this.controller];
	  }

	  (0, _createClass3.default)(PFFilterContainer, [{
	    key: 'controller',
	    value: function controller($scope, attrs, appConfig, $http, cs, ns) {
	      var _this = this;

	      var defaultOptions = {
	        enableExpandCollapse: true,
	        enableSaveFilter: false,
	        enableSaveState: false,
	        enableFilters: true,
	        enableDeleteFilter: true,
	        enableAddFilter: true,
	        enableGroupBy: true,
	        showExpandedFilter: true,
	        singleSelectOption: {},
	        multiselectOption: {}
	      };
	      $scope.filterOptions = (0, _assign2.default)({}, defaultOptions, $scope.filterOption);
	      $scope.filterModified = false;
	      $scope._filters = angular.copy(appConfig[attrs.filterKey || 'filters']);
	      $scope.filterPrams = [];
	      $scope.grpByLevel = parseInt(appConfig.groupByLvl, 10);

	      var updateFilterKey = function updateFilterKey(filterList) {
	        return filterList.map(function (e) {
	          e.key = e.key || e.key;
	          return e;
	        });
	      };

	      if ($scope._filters.available) {
	        $scope._filters.available = updateFilterKey($scope._filters.available);
	      }
	      if ($scope._filters.defaults) {
	        $scope._filters.defaults = updateFilterKey($scope._filters.defaults);
	      }

	      var filterPrams = $scope.filterPrams; // [];
	      var URL = $scope._filters.url;
	      this.getFilterConfig = function () {
	        return $scope._filters;
	      };

	      // $scope.$watchCollection(['filterPrams', 'groupbyQuery', 'dateData'], () => {
	      //   $scope.filterModified = true;
	      // });

	      this.reLoadFiltersFromConfig = function () {
	        // alert('');
	        var filter = appConfig[attrs.filterKey || 'filters'];
	        $scope._filters.defaults = updateFilterKey(angular.copy(filter.defaults));
	        $scope._filters.available = updateFilterKey(angular.copy(filter.available));
	      };

	      this.removeFilter = function (filterKey) {
	        delete filterPrams[filter.key];
	        return _this.getFilterData();
	      };

	      this.removeDefaultFilter = function (param) {
	        var defaFltrs = $scope._filters.defaults;
	        var avbFltrIdx = defaFltrs.findIndex(function (p) {
	          return param.key === p.key;
	        });
	        if (avbFltrIdx > -1) {
	          var filterItm = defaFltrs.splice(avbFltrIdx, 1);
	          if (filterItm.length !== 1) {
	            throw Error('Invalid length found');
	          }
	          $scope._filters.available.push(filterItm[0]);
	          $scope._filters.available.sort(function (a, b) {
	            if (a.label < b.label) return -1;
	            if (a.label > b.label) return 1;
	            return 0;
	          });
	          $scope.filterModified = true;
	          setTimeout(function () {
	            var fParam = _this.getFilterParam();
	            if (avbFltrIdx - 1 !== -1) {
	              $scope.$emit('filter-changed', {
	                index: avbFltrIdx - 1,
	                key: defaFltrs[avbFltrIdx - 1].key,
	                // id: defaFltrs[avbFltrIdx - 1].key,
	                value: [fParam[defaFltrs[avbFltrIdx - 1].key]]
	              });
	            }
	          }, 0);
	        }
	        if (defaFltrs.length === 0) {
	          $scope.filterModified = false;
	        }
	      };

	      this.setLastModel = function (param) {
	        $scope.lastModel = param;
	      };

	      this.getLastModel = function () {
	        return $scope.lastModel;
	      };

	      this.addDefaultFilter = function (param) {
	        var availableFltrs = $scope._filters.available;
	        var avbFltrIdx = availableFltrs.findIndex(function (p) {
	          return param.key === p.key;
	        });
	        if (avbFltrIdx > -1) {
	          var filterItm = availableFltrs.splice(avbFltrIdx, 1);
	          if (filterItm.length !== 1) {
	            throw Error('Invalid length found');
	          }
	          filterItm[0].newlyAdded = true;
	          $scope._filters.defaults.push(filterItm[0]);
	        }
	      };

	      this.addFilter = function (param) {
	        // $scope.filterModified = true;
	        var xObj = {};
	        filterPrams.splice(param.index); // remove older entries
	        if (param.value.length > 0) {
	          xObj[param.key] = param.value;
	          filterPrams.push(xObj);
	        }
	      };

	      this.getFilterParam = function () {
	        var filterData = {};
	        filterPrams.forEach(function (item) {
	          _.each(item, function (value, key) {
	            filterData[key] = value.toString();
	          });
	        });
	        (0, _assign2.default)(filterData, { _token: $('.token').val() });
	        return filterData;
	      };

	      this.getGroupByParams = function () {
	        return $scope.groupbyQuery || '';
	      };

	      this.getFilterData = function (filterKey) {
	        // $scope.filterModified = true;
	        var filterData = _this.getFilterParam();
	        return $http({ method: 'POST', url: URL + '/' + filterKey, data: filterData }).then(function (response) {
	          return response;
	        }, function (error) {
	          if (error.status === 401) {
	            ns.notify('error', 'Your session has expired', 'Session Expired');
	            setTimeout(function () {
	              window.location = '/login';
	            }, 100);
	          } else {
	            ns.notify('error', 'Something went wrong, Please refresh your page', 'Server Error');
	          }
	        });
	      };

	      this.getFilterDataSync = function (filterKey) {
	        var filterData = _this.getFilterParam();
	        var rText = $.ajax({
	          type: 'POST', url: URL + '/' + filterKey,
	          contentType: 'application/json',
	          dataType: 'json',
	          data: (0, _stringify2.default)(filterData), async: false,
	          headers: { 'X-CSRF-TOKEN': $('.token').val() }, xhrFields: { withCredentials: true }
	        }).responseText;
	        var returnVal = [];
	        try {
	          returnVal = JSON.parse(rText);
	        } catch (e) {
	          console.error(e);
	        }
	        $scope.filterModified = true;
	        return returnVal;
	      };

	      $scope.trackingFn = function (x, idx) {
	        return '' + x.key + idx;
	      };

	      // $scope.trackingFn = (x, idx) => `${x.key}-${Date.now()}`;
	      this.fireApplyGridFilterEvent = function () {
	        return $scope.fireEvent();
	      };
	      $scope.fireEvent = function () {
	        var filterData = {};
	        filterPrams.forEach(function (item) {
	          _.each(item, function (value, key) {
	            filterData[key] = value.toString();
	          });
	        });
	        if ($scope.grpByLevel !== 0) {
	          filterData.grpby = $scope.groupbyQuery || '';
	        }
	        if ($scope.dateData) {
	          (0, _assign2.default)(filterData, $scope.dateData);
	        }
	        $scope.$emit('apply-filter', { filters: filterData });
	        cs.getPlatformRS().$emit('apply-filter', { filters: filterData });
	        $scope.filterModified = false;
	      };

	      $scope.$on('filter-changed', function (e, data) {
	        $scope.filterModified = true;
	      });

	      $scope.$on('indvi-groupby-changed', function () {
	        $scope.filterModified = false;
	      });

	      $scope.$on('groupby-changed', function ($e, param) {
	        var queryKeys = (0, _keys2.default)(param);
	        var queryLength = queryKeys.length;
	        var grpby = [];
	        for (var counter = 0; counter < queryLength; counter++) {
	          grpby.push(param[queryKeys[counter]].key);
	        }
	        $scope.groupbyQuery = grpby.toString();
	        if (queryLength === $scope.grpByLevel) {
	          $scope.filterModified = true;
	        } else {
	          $scope.filterModified = false;
	        }
	      });
	      $scope.$on('date-changed', function ($e, param) {
	        if (param) {
	          $scope.dateData = param;
	        }
	      });
	    }
	  }, {
	    key: 'link',
	    value: function link($scope, el) {//eslint-disable-line

	    }
	  }], [{
	    key: 'directiveFactory',
	    value: function directiveFactory(ls) {
	      return new PFFilterContainer(ls);
	    }
	  }]);
	  return PFFilterContainer;
	}(), (_applyDecoratedDescriptor(_class2, 'directiveFactory', [_dec2], (0, _getOwnPropertyDescriptor2.default)(_class2, 'directiveFactory'), _class2)), _class2)) || _class);

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _getOwnPropertyDescriptor = __webpack_require__(5);

	var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

	var _keys = __webpack_require__(26);

	var _keys2 = _interopRequireDefault(_keys);

	var _extends2 = __webpack_require__(86);

	var _extends3 = _interopRequireDefault(_extends2);

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _dec, _dec2, _class, _desc, _value, _class2;

	var _view = __webpack_require__(149);

	var _view2 = _interopRequireDefault(_view);

	var _ngApp = __webpack_require__(1);

	__webpack_require__(136);

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

	var PFFilterSave = (_dec = (0, _ngApp.commonDirective)({ selector: 'pf-filter-save' }), _dec2 = (0, _ngApp.commonInject)('$http', 'NotificationService'), _dec(_class = (_class2 = function () {
	  // eslint-disable-line no-unused-vars

	  function PFFilterSave($http, ns) {
	    (0, _classCallCheck3.default)(this, PFFilterSave);

	    this.replace = true;
	    this.link = this.link.bind(this);
	    this.require = ['^^pfFilterContainer'];
	    this.template = _view2.default;
	    this.$http = $http;
	    this.ns = ns;

	    this.controller = ['$scope', '$element', '$attrs', this.controller];
	  }

	  (0, _createClass3.default)(PFFilterSave, [{
	    key: 'controller',
	    value: function controller($scope, $element, $attrs, ns) {
	      // eslint-disable-line
	      $scope.singleSelectSetting = {
	        selectionLimit: 1,
	        smartButtonMaxItems: 1,
	        idProp: 'id',
	        displayProp: 'label'
	      };
	      $scope.selectedFilterSet = {};
	      $scope.selectedFilterSet = $scope._filters.savedFilters.find(function (itm) {
	        return itm.isDefault;
	      }) || {};
	      $scope.filterSetChanged = function () {
	        var selFilter = $scope._filters.savedFilters.find(function (i) {
	          return i.id === $scope.selectedFilterSet.key;
	        });
	        $scope.resetFilter(selFilter);
	        var grpBy = typeof selFilter.grpby == 'string' ? selFilter.grpby.split(',') : selFilter.grpby;
	        $scope.$emit('reload-saved-group', { groupBy: grpBy || [] });
	      };
	      $scope.showBox = $scope.filterOptions.showExpandedFilter;
	      $scope.angleDown = $scope.filterOptions.showExpandedFilter;
	      $scope.hideFilterBox = function (angleDown) {
	        if ($scope.filterOptions.enableExpandCollapse) {
	          $scope.showBox = angleDown;
	        } else {
	          $scope.angleDown = true;
	        }
	      };
	    }
	  }, {
	    key: 'link',
	    value: function link($scope, el, attr, controllers) {
	      // debugger;
	      var filterContainer = controllers[0];
	      var filterConfig = filterContainer.getFilterConfig();
	      var $http = this.$http;
	      var ns = this.ns;

	      var URLS = {
	        save: filterConfig.url + '/save',
	        create: filterConfig.url + '/create',
	        delete: filterConfig.url + '/delete',
	        default: filterConfig.url + '/default'
	      };

	      $scope.disableFilterWatcher = function () {
	        $scope.$root.skipOnFilterChanged = true;
	      };
	      $scope.enableFilterWatcher = function () {
	        $scope.$root.skipOnFilterChanged = false;
	      };
	      $scope.saveFilterSet = function () {
	        alert('saveFilterSet');
	      };

	      setTimeout(function () {
	        $scope.$apply(function () {
	          var selFilter = $scope._filters.savedFilters.find(function (itm) {
	            return itm.isDefault === 'true';
	          }) || null;
	          if (selFilter) {
	            var grpby = selFilter.grpby;
	            var filters = selFilter.filters;
	            $scope.selectedFilterSet = { id: selFilter.id }; // angular.copy(selFilter);
	            // $scope.selectedFilterSet = selFilter;
	            $scope.filterSetChanged();
	            $scope.$emit('apply-filter', { filters: (0, _extends3.default)({}, filters, { grpby: grpby }) });
	          }
	        });
	      }, 0);

	      $scope.resetFilter = function (filterKey) {
	        var fCollection = $scope._filters.defaults.concat($scope._filters.available);
	        var newDefaults = (0, _keys2.default)(filterKey.filters).reduce(function (all, m) {
	          var found = fCollection.find(function (fc) {
	            return fc.key === m;
	          });
	          if (found) {
	            found.newDefault = true;
	            all.push(found);
	          }
	          return all;
	        }, []);

	        if (newDefaults.length === 0) {
	          throw Error('Unable to match postBody filters with default/available filters ');
	        }
	        // console.dir(newDefaults);
	        var newAvailableFilters = fCollection.reduce(function (all, current) {
	          if (typeof filterKey.filters[current.key] == 'undefined') {
	            all.push(current);
	          }
	          return all;
	        }, []);
	        $scope._filters.defaults = newDefaults;
	        $scope._filters.available = newAvailableFilters;
	        setTimeout(function () {
	          var postBody = filterKey.filters;
	          newDefaults.forEach(function (p, i) {
	            var selectedData = typeof postBody[p.key] == 'string' ? postBody[p.key].split(',') : postBody[p.key];
	            var eventParam = {
	              key: p.key,
	              selectedData: selectedData || [],
	              index: i,
	              value: i === 0 ? [] : postBody[newDefaults[i - 1].key],
	              valueKey: i === 0 ? 'NA' : newDefaults[i - 1].key,
	              newDefault: true
	            };
	            $scope.$root.$emit('filter-model-changed' + p.key, eventParam);
	          });

	          var defaFilterLength = newDefaults.length;
	          var lastFlterKey = newDefaults[defaFilterLength - 1].key;

	          filterContainer.addFilter({ index: defaFilterLength,
	            value: postBody[lastFlterKey],
	            key: lastFlterKey });
	          filterContainer.fireApplyGridFilterEvent();
	        }, 0);
	      };

	      $scope.setAsDefaultFilterSet = function () {
	        if (!$scope.selectedFilterSet) {
	          ns.notify('warning', 'Please select filter');
	          return;
	        }

	        $http.post(URLS.default, { id: $scope.selectedFilterSet.id, idDefault: true, _token: $('.token').val() }).then(function (success) {
	          console.log(success);
	          ns.notify('success', 'This filterset is set as default successfully', 'success');
	        }, function (error) {
	          if (error.status === 401) {
	            ns.notify('error', 'Your session has expired', 'Session Expired');
	            setTimeout(function () {
	              window.location = '/login';
	            }, 1000);
	          } else {
	            ns.notify('error', 'Something went wrong, Please refresh your page', 'Server Error');
	            console.log(error);
	          }
	        });
	      };

	      $scope.deleteFilterSet = function () {
	        var selectedFilter = $scope.selectedFilterSet;
	        if (!selectedFilter || typeof selectedFilter.id === 'undefined') {
	          ns.notify('warning', 'Please select filter');
	          return;
	        }

	        $http.post(URLS.delete, { id: selectedFilter.id, _token: $('.token').val() }).then(function (success) {
	          ns.notify('success', 'Filter Deleted', 'Success');
	          var index = filterConfig.savedFilters.findIndex(function (itm) {
	            return itm.id === selectedFilter.id;
	          });
	          if (index > -1) filterConfig.savedFilters.splice(index, 1);
	          if (filterConfig.savedFilters.length > 0) {
	            $scope.selectedFilterSet = {};
	            filterContainer.reLoadFiltersFromConfig();
	            // });
	          }
	        }, function (error) {
	          if (error.status === 401) {
	            ns.notify('error', 'Your session has expired', 'Session Expired');
	            setTimeout(function () {
	              window.location = '/login';
	            }, 1000);
	          } else {
	            ns.notify('error', 'Something went wrong, Please refresh your page', 'Server Error');
	            console.log(error);
	          }
	        });
	      };

	      $scope.editFilterSet = function () {
	        alert('editFilterSet');
	      };

	      $scope.toggleFilterSetForm = function () {
	        if ($scope.filterSetCreateView) {
	          /* Cancel button click*/
	        } else {
	          /* Add button click*/
	          var activeFilters = filterContainer.getFilterParam();
	          if ((0, _keys2.default)(activeFilters).length === 1) {
	            // alert(' please select filters to create new');
	            ns.notify('warning', 'Please select filters to create new filterset');
	            return;
	          }
	          setTimeout(function () {
	            return $('input[type="text"]', el).focus();
	          }, 700);
	          // $scope.filterSetCreateView = true;
	        }

	        $scope.filterSetCreateView = !$scope.filterSetCreateView;
	      };
	      $scope.createFilterSet = function (filterName, isDefault, slectedFilter, action) {
	        if (!filterName && !slectedFilter) {
	          ns.notify('warning', 'Please enter filter name');
	          throw new Error('please enter name');
	        }
	        filterContainer.fireApplyGridFilterEvent(); // fire apply filter event, it will update the filterparam as well as grid data
	        var url = URLS.create;
	        var savedFilter = null;
	        var filterParam = filterContainer.getFilterParam();
	        if ((0, _keys2.default)(filterParam).length === 1) {
	          // alert('please select filters');
	          ns.notify('warning', 'Please select filter');
	          return;
	        }
	        if (action === 'edit' && !slectedFilter) {
	          // alert('please select filters to  update');
	          ns.notify('warning', 'Please select filters to update');
	          return;
	        }
	        var postBody = {
	          label: filterName,
	          isDefault: isDefault,
	          filters: filterParam,
	          grpby: filterContainer.getGroupByParams(),
	          _token: $('.token').val()
	        };

	        delete postBody.filters._token; // remove the key;

	        if (slectedFilter) {
	          savedFilter = filterConfig.savedFilters.find(function (itm) {
	            return itm.id === slectedFilter.id;
	          }) || {};
	          postBody.id = savedFilter.id;
	          postBody.isDefault = savedFilter.isDefault;
	          postBody.label = savedFilter.label;
	          url = URLS.save;
	        }

	        $http.post(url, postBody).then(function (success) {
	          // console.log(success);
	          if (!slectedFilter) {
	            postBody.id = success.data.id || 100000;
	            filterConfig.savedFilters.push(postBody);
	            // alert('new filter saved');
	            ns.notify('success', 'Filterset added successfully', 'Success');
	            $scope.selectedFilterSet = { id: success.data.id };
	          } else {
	            savedFilter.filters = postBody.filters;
	            savedFilter.grpby = postBody.grpby;
	            savedFilter.isDefault = postBody.isDefault;
	            savedFilter.label = postBody.label;
	            // alert('filter updated');
	            ns.notify('success', 'Filterset updated successfully', 'Success');
	          }
	          $scope.filterSetCreateView = false;
	        }, function (error) {
	          // alert('server error found');
	          if (error.status === 401) {
	            ns.notify('error', 'Your session has expired', 'Session Expired');
	            setTimeout(function () {
	              window.location = '/login';
	            }, 1000);
	          } else {
	            ns.notify('error', 'Something went wrong, Please refresh your page', 'Server Error');
	            console.log(error);
	          }
	          $scope.filterSetCreateView = true;
	        });
	      };
	    }
	  }], [{
	    key: 'directiveFactory',
	    value: function directiveFactory($http, ns) {
	      return new PFFilterSave($http, ns);
	    }
	  }]);
	  return PFFilterSave;
	}(), (_applyDecoratedDescriptor(_class2, 'directiveFactory', [_dec2], (0, _getOwnPropertyDescriptor2.default)(_class2, 'directiveFactory'), _class2)), _class2)) || _class);

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _getOwnPropertyDescriptor = __webpack_require__(5);

	var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

	var _stringify = __webpack_require__(17);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _assign = __webpack_require__(12);

	var _assign2 = _interopRequireDefault(_assign);

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _dec, _dec2, _class, _desc, _value, _class2;
	// import {APP_CONFIG} from 'constants';


	var _view = __webpack_require__(150);

	var _view2 = _interopRequireDefault(_view);

	var _ngApp = __webpack_require__(1);

	__webpack_require__(137);

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

	var PFFilter = (_dec = (0, _ngApp.commonDirective)({ selector: 'pf-filter' }), _dec2 = (0, _ngApp.commonInject)(), _dec(_class = (_class2 = function () {
	  // eslint-disable-line no-unused-vars

	  function PFFilter() {
	    (0, _classCallCheck3.default)(this, PFFilter);

	    this.replace = true;
	    this.link = this.link.bind(this);
	    this.require = ['^^pfFilterContainer'];
	    this.template = _view2.default;
	    this.scope = {
	      options: '=',
	      selectedModel: '=name',
	      filter: '=',
	      filterOptions: '=',
	      index: '@'
	    };
	    this.controller = ['$scope', '$element', '$attrs', this.controller];
	  }

	  (0, _createClass3.default)(PFFilter, [{
	    key: 'controller',
	    value: function controller($scope, $element, $attrs) {
	      // eslint-disable-line
	      if ($scope.filter.filtertype[0].type === 'single') {
	        $scope.multiSelectSetting = (0, _assign2.default)({ // eslint-disable-line no-param-reassign
	          smartButtonMaxItems: 1,
	          selectionLimit: 1,
	          displayProp: 'label',
	          idProp: 'key'
	        }, $scope.filterOptions.singleSelectOption);
	        $scope.selectedOptions = {};
	      } else {
	        $scope.multiSelectSetting = (0, _assign2.default)({ // eslint-disable-line no-param-reassign
	          enableSearch: true,
	          showApplyCancel: true,
	          showCheckAll: true,
	          showUncheckAll: true,
	          displayProp: 'label',
	          idProp: 'key'
	        }, $scope.filterOptions.multiSelectOption);
	      }
	    }
	  }, {
	    key: 'link',
	    value: function link($scope, el, attr, controllers) {
	      var fltrContainer = controllers[0];
	      var currentAttrIndex = parseInt(attr.index, 10);

	      if (!$scope.filter) return;

	      $scope.deleteMe = function (param) {
	        fltrContainer.removeDefaultFilter(param);
	      };

	      attr.$observe('index', function (nv) {
	        if ($scope.$root.skipOnFilterChanged || $scope.filter.newDefault) return;
	        nv = parseInt(nv, 10);
	        if (nv === 0) {
	          if ($scope.filter.items) {
	            $scope.multiSelectOptions = $scope.filter.items;
	            $scope.selectedOptions = [];
	          } else {
	            fltrContainer.getFilterData($scope.filter.key).then(function (data) {
	              $scope.multiSelectOptions = data.data;
	              $scope.selectedOptions = [];
	            });
	          }
	        }
	      });

	      $scope.onItemSelect = function (filter) {
	        if ($scope.filter.filtertype[0].type === 'single') {
	          if ($scope.filter.newDefault) {
	            $scope.filter.newDefault = false;
	            return;
	          }
	          if ($scope.$root.skipOnFilterChanged) return;
	          $scope.$emit('filter-changed', {
	            index: currentAttrIndex,
	            key: $scope.filter.key,
	            // id: $scope.filter.id,
	            value: [filter.key]
	          });
	        }
	      };
	      $scope.$watchCollection('selectedOptions', function (nv, ov) {
	        if (!nv) return;
	        if ($scope.$root.skipOnFilterChanged) return;
	        if ((0, _stringify2.default)(nv) == (0, _stringify2.default)(ov)) return;
	        if ($scope.filter.newDefault) {
	          $scope.filter.newDefault = false;
	          return;
	        }

	        $scope.$emit('filter-changed', {
	          index: currentAttrIndex,
	          key: $scope.filter.key,
	          // id: $scope.filter.id,
	          value: _.pluck(nv, 'key')
	        });
	      });

	      var filterModelChangedEvnt = $scope.$root.$on('filter-model-changed' + $scope.filter.key, function (e, param) {
	        $scope.$apply(function () {
	          fltrContainer.addFilter({ index: param.index, value: param.value, key: param.valueKey });
	          var retnData = fltrContainer.getFilterDataSync(param.key);
	          $scope.selectedOptions = param.selectedData.reduce(function (all, p) {
	            var index = retnData.findIndex(function (c) {
	              return c.id == p;
	            });
	            if (index >= 0) {
	              all.push(angular.copy(retnData[index]));
	            }
	            return all;
	          }, []);
	          if (param.newDefault) $scope.filter.newDefault = true;
	          if ($scope.selectedOptions.length !== param.selectedData.length) {
	            // if the selection is not matched then expecting it is a date
	            $scope.selectedOptions = [{ key: param.selectedData[0] }];
	            $scope.itemsToSelect = [{ key: param.selectedData[0] }];
	          }
	          $scope.multiSelectOptions = angular.copy(retnData);
	          $scope.$broadcast('updateSelectedItem', { itemsToSelect: $scope.selectedOptions });
	        });
	      });

	      var cleanup = $scope.$root.$on('filter-changed', function (e, param) {
	        if ($scope.filter.newDefault) {
	          $scope.filter.newDefault = false;
	          return;
	        }
	        if ($scope.filter.newlyAdded) {
	          delete $scope.filter.newlyAdded;
	          fltrContainer.addFilter(fltrContainer.getLastModel());
	          if (currentAttrIndex > 0) {
	            if ($scope.filter.items) {
	              $scope.multiSelectOptions = $scope.filter.items;
	            } else {
	              fltrContainer.getFilterData($scope.filter.key).then(function (result) {
	                $scope.multiSelectOptions = result.data;
	                $scope.filter.filtertype[0].name !== 'datepicker' ? $scope.selectedOptions = [] : '';
	              });
	            }
	          }
	        } else if (currentAttrIndex - param.index === 1) {
	          fltrContainer.addFilter(param);
	          $scope.selectedOptions = [];

	          if ($scope.filter.items) {
	            // update current filter id previous one has been changes
	            $scope.multiSelectOptions = $scope.filter.items;
	          } else {
	            fltrContainer.getFilterData($scope.filter.key).then(function (result) {
	              $scope.multiSelectOptions = result.data;
	              $scope.selectedOptions = [];
	            });
	          }
	        } else if (currentAttrIndex > param.index) {
	          $scope.multiSelectOptions = []; // clean next filters
	          $scope.selectedOptions = [];
	        }

	        if (currentAttrIndex === fltrContainer.getFilterConfig().defaults.length - 1) {
	          fltrContainer.setLastModel(param);
	          fltrContainer.addFilter(param);
	        }
	        e.stopPropagation();
	      });

	      $scope.$on('$destroy', function () {
	        cleanup();
	        filterModelChangedEvnt();
	      });
	    }
	  }], [{
	    key: 'directiveFactory',
	    value: function directiveFactory() {
	      return new PFFilter();
	    }
	  }]);
	  return PFFilter;
	}(), (_applyDecoratedDescriptor(_class2, 'directiveFactory', [_dec2], (0, _getOwnPropertyDescriptor2.default)(_class2, 'directiveFactory'), _class2)), _class2)) || _class);

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _getOwnPropertyDescriptor = __webpack_require__(5);

	var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

	var _stringify = __webpack_require__(17);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _dec, _dec2, _class, _desc, _value, _class2;

	var _view = __webpack_require__(152);

	var _view2 = _interopRequireDefault(_view);

	var _ngApp = __webpack_require__(1);

	var _confirmDeleteModel = __webpack_require__(151);

	var _confirmDeleteModel2 = _interopRequireDefault(_confirmDeleteModel);

	__webpack_require__(138);

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

	var PFGridSaveState = (_dec = (0, _ngApp.commonDirective)({ selector: 'pf-grid-save-state' }), _dec2 = (0, _ngApp.commonInject)(), _dec(_class = (_class2 = function () {
	  // eslint-disable-line no-unused-vars

	  function PFGridSaveState() {
	    (0, _classCallCheck3.default)(this, PFGridSaveState);

	    this.replace = true;
	    this.scope = {
	      filterOptions: '='
	    };
	    this.link = this.link.bind(this);
	    this.template = _view2.default;
	    this.controller = ['$scope', '$element', '$attrs', '$http', 'NotificationService', 'DialogService', 'APP_CONFIG', this.controller];
	  }

	  (0, _createClass3.default)(PFGridSaveState, [{
	    key: 'controller',
	    value: function controller($scope, $element, $attrs, $http, ns, ds, appConfig) {
	      // eslint-disable-line
	      $scope.stateSingleSelectSetting = {
	        selectionLimit: 1,
	        smartButtonMaxItems: 1,
	        externalIdProp: 'id',
	        idProp: 'id',
	        displayProp: 'state_name',
	        boldPropName: 'is_default',
	        boldPropValue: 'true'
	      };
	      $scope.savedStates = angular.copy(appConfig.states.savedStates);
	      $scope.newStateModel = {};
	      $scope.selectedStateFilter = {};
	      var baseUrl = appConfig.states.statefilter_url;

	      var URLS = {
	        update: baseUrl + '/update',
	        create: baseUrl + '/create',
	        delete: baseUrl + '/delete',
	        default: baseUrl + '/default'
	      };

	      $scope.stateChanged = function () {
	        var selectedStateId = $scope.selectedStateFilter.id;
	        if (typeof selectedStateId != 'undefined') {
	          var itm = $scope.savedStates.find(function (itm) {
	            return itm.id == selectedStateId;
	          });
	          $scope.isDefaultStateSelected = itm.is_default == 'true' ? true : false;
	          setTimeout(function () {
	            $scope.$emit('grid-filter-state-changed', itm); // restore view
	          });
	        }
	      };

	      $scope.deleteStateFilter = function () {
	        if (typeof $scope.selectedStateFilter.id == 'undefined') {
	          ns.notify('warning', 'Please select filter');
	          return;
	        }
	        var selectedStateId = $scope.selectedStateFilter.id;
	        $http.post(URLS.delete, { id: selectedStateId, _token: $('.token').val() }).then(function (success) {
	          var idx = $scope.savedStates.findIndex(function (itm) {
	            return itm.id === selectedStateId;
	          });
	          $scope.savedStates.splice(idx, 1);
	          var itm = $scope.savedStates.find(function (itm) {
	            return itm.is_default == 'true';
	          });
	          $scope.selectedStateFilter = { id: itm.id };
	          $scope.isDefaultStateSelected = true;
	          setTimeout(function () {
	            $scope.$emit('grid-filter-state-changed', itm); // restore view
	          });
	          ns.notify('success', 'State Deleted', 'Success');
	        }, function (error) {
	          if (error.status === 401) {
	            ns.notify('error', 'Your session has expired', 'Session Expired');
	            setTimeout(function () {
	              window.location = '/login';
	            }, 1000);
	          } else {
	            ns.notify('error', 'Something went wrong, Please refresh your page', 'Server Error');
	            console.log(error);
	          }
	        });
	      };

	      $scope.createNewStateFilter = function () {
	        $scope.newStateModel = {};
	        $scope.update_or_create = 'create';
	        $scope.stateEditorFlag = true;
	        $scope.isDefaultStateSelected = false;
	      };

	      $scope.editViewFunction = function () {
	        $scope.toggleStateEditor();
	        /* Edit view button click from filter view*/
	        var selectedStateId = $scope.selectedStateFilter.id;
	        var itm = $scope.savedStates.find(function (itm) {
	          return itm.id == selectedStateId;
	        });
	        $scope.newStateModel.setStateDefault = itm.is_default === 'true';
	        $scope.newStateModel.NewStateName = itm.state_name;
	        $scope.update_or_create = 'update';
	      };

	      $scope.createOrUpdateNewState = function () {
	        if ($scope.newStateModel.NewStateName.length == 0) {
	          ns.notify('warning', 'Please enter state name');
	          return;
	        }
	        if (typeof _.findWhere($scope.savedStates, { state_name: $scope.newStateModel.NewStateName }) != 'undefined' && $scope.update_or_create == 'create') {
	          ns.notify('warning', 'Please enter unique state name');
	          return;
	        }
	        if (typeof $scope.newStateModel.setStateDefault == 'undefined') {
	          $scope.newStateModel.setStateDefault = false;
	        }
	        /* Call to pf-grid for getting state details in next event get-grid-view*/
	        setTimeout(function () {
	          $scope.$emit('ask-grid-view'); // save view
	        });
	      };

	      if ($scope.savedStates.length == 0) {
	        //create default if no state exist
	        $scope.newStateModel = {
	          NewStateName: 'Default View',
	          setStateDefault: true
	        };
	        $scope.update_or_create = 'create';
	        $scope.createOrUpdateNewState();
	      } else {
	        $scope.selectedStateFilter = {};
	        var viewToLoad = {};
	        $scope.savedStates.find(function (itm) {
	          if (itm.is_default == 'true') {
	            $scope.selectedStateFilter = { id: itm.id };
	            $scope.isDefaultStateSelected = true;
	            viewToLoad = itm;
	          }
	        });
	        setTimeout(function () {
	          // restore view
	          $scope.$emit('grid-filter-state-changed', viewToLoad);
	        });
	      }

	      /* Catch grid_state from pf-grid and save to database*/
	      $scope.$root.$on('get-grid-view', function (e, gridState, gridID) {
	        /*Save grid in database*/
	        var selectedStateId = 0;
	        if ($scope.selectedStateFilter && typeof $scope.selectedStateFilter.id !== 'undefined') {
	          selectedStateId = $scope.selectedStateFilter.id;
	        }

	        var params = {
	          state_name: $scope.newStateModel.NewStateName,
	          grid_state: gridState,
	          is_default: $scope.newStateModel.setStateDefault.toString(),
	          _token: $('.token').val()
	        };
	        var api = URLS.create;
	        if ($scope.update_or_create == 'update') {
	          params['id'] = selectedStateId;
	          api = URLS.update;
	        }

	        $http.post(api, params).then(function (success) {
	          $scope.stateEditorFlag = false;

	          if ($scope.update_or_create == 'create') {
	            var obj = {
	              id: success.data.id,
	              state_name: params.state_name,
	              user_id: appConfig.states['user_id'],
	              app_id: appConfig.id,
	              grid_state: (0, _stringify2.default)(params.grid_state),
	              is_default: params.is_default
	            };
	            if (params.is_default === 'true') {
	              var itm = $scope.savedStates.find(function (itm) {
	                return itm.is_default == 'true';
	              });
	              if (typeof itm !== 'undefined') {
	                itm.is_default = 'false';
	              }
	              $scope.isDefaultStateSelected = true;
	            }
	            $scope.savedStates.splice(0, 0, obj);
	            $scope.selectedStateFilter = { id: success.data.id };
	            ns.notify('success', 'New state is created successfully', 'success');
	          } else {
	            var _itm = $scope.savedStates.find(function (itm) {
	              return itm.id == selectedStateId;
	            });
	            _itm.state_name = params.state_name;
	            _itm.grid_state = (0, _stringify2.default)(params.grid_state);
	            ns.notify('success', 'State has been updated successfully', 'success');
	          }
	        }, function (error) {
	          if (error.status === 401) {
	            ns.notify('error', 'Your session has expired', 'Session Expired');
	            setTimeout(function () {
	              window.location = '/login';
	            }, 1000);
	          } else {
	            ns.notify('error', 'Something went wrong, Please refresh your page', 'Server Error');
	            console.log(error);
	          }
	        });
	      });

	      $scope.setAsDefault = function () {
	        if (typeof $scope.selectedStateFilter.id == 'undefined') {
	          ns.notify('warning', 'Please select state');
	          return;
	        }
	        var selectedStateId = $scope.selectedStateFilter.id;
	        $http.post(URLS.default, { id: selectedStateId, _token: $('.token').val() }).then(function (success) {
	          var itm = $scope.savedStates.find(function (itm) {
	            return itm.is_default == 'true';
	          });
	          itm.is_default = 'false';
	          var selectedItm = $scope.savedStates.find(function (itm) {
	            return itm.id == selectedStateId;
	          });
	          selectedItm.is_default = 'true';
	          $scope.isDefaultStateSelected = true;
	          ns.notify('success', 'This state is set as default successfully', 'success');
	        }, function (error) {
	          if (error.status === 401) {
	            ns.notify('error', 'Your session has expired', 'Session Expired');
	            setTimeout(function () {
	              window.location = '/login';
	            }, 1000);
	          } else {
	            ns.notify('error', 'Something went wrong, Please refresh your page', 'Server Error');
	            console.log(error);
	          }
	        });
	      };

	      $scope.confirmDelete = function () {
	        ds.getModal({ html: _confirmDeleteModel2.default, scope: $scope, option: { windowTopClass: 'status-modal' } });
	      };

	      $scope.closeModal = function () {
	        ds.closeModal();
	      };

	      $scope.toggleStateEditor = function () {
	        $scope.stateEditorFlag = !$scope.stateEditorFlag;
	      };
	    }
	  }, {
	    key: 'link',
	    value: function link($scope, el, attr) {}
	  }], [{
	    key: 'directiveFactory',
	    value: function directiveFactory() {
	      return new PFGridSaveState();
	    }
	  }]);
	  return PFGridSaveState;
	}(), (_applyDecoratedDescriptor(_class2, 'directiveFactory', [_dec2], (0, _getOwnPropertyDescriptor2.default)(_class2, 'directiveFactory'), _class2)), _class2)) || _class);

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _getOwnPropertyDescriptor = __webpack_require__(5);

	var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

	var _assign = __webpack_require__(12);

	var _assign2 = _interopRequireDefault(_assign);

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _dec, _dec2, _class, _desc, _value, _class2;

	var _view = __webpack_require__(153);

	var _view2 = _interopRequireDefault(_view);

	var _ngApp = __webpack_require__(1);

	__webpack_require__(139);

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

	var PFGridUtils = (_dec = (0, _ngApp.commonDirective)({ selector: 'pf-grid-utils' }), _dec2 = (0, _ngApp.commonInject)(), _dec(_class = (_class2 = function () {
	  // eslint-disable-line  no-unused-vars

	  function PFGridUtils() {
	    (0, _classCallCheck3.default)(this, PFGridUtils);

	    this.replace = true;
	    this.link = this.link.bind(this);
	    this.require = ['^^pfGrid'];
	    this.template = _view2.default;
	    this.controller = ['$scope', '$element', '$attrs', '$http', this.controller];
	  }

	  (0, _createClass3.default)(PFGridUtils, [{
	    key: 'controller',
	    value: function controller($scope, el, attr, $http) {
	      // eslint-disable-line no-unused-vars
	      $scope.multiSelectSetting = { // eslint-disable-line no-param-reassign
	        enableSearch: true,
	        showApplyCancel: true,
	        showCheckAll: true,
	        showUncheckAll: true,
	        displayProp: 'label',
	        idProp: 'key'
	      };

	      $scope.showThis = function () {
	        // eslint-disable-line no-param-reassign
	        var coldef = $scope.pfGrid.options.columnDefs;
	        if ($scope.showThisOptions.length) {
	          $scope.optionsToShow.forEach(function (element) {
	            var def = coldef.find(function (item) {
	              return item.field === element.key;
	            });
	            if (def) {
	              def.visible = false;
	            }
	          });

	          $scope.showThisOptions.forEach(function (element) {
	            var def = coldef.find(function (item) {
	              return item.field === element.key;
	            });
	            if (def) {
	              def.visible = true;
	            }
	          });
	        } else {
	          coldef.forEach(function (item, index) {
	            if (index > 2) {
	              item.visible = false; // eslint-disable-line no-param-reassign
	            }
	          });
	        }
	        $scope.pfGrid.gridApi.core.notifyDataChange('all');
	      };

	      $scope.recallGridData = function () {
	        $scope.$emit('refresh-grid-data-view', $scope.pfGrid.options.gridId);
	      };
	    }
	  }, {
	    key: 'link',
	    value: function link($scope, el, attr, controllers) {
	      // eslint-disable-line
	      $scope.pfGrid = controllers[0]; // eslint-disable-line no-param-reassign
	      var coldef = $scope.pfGrid.options.columnDefs;
	      $scope.optionsToShow = []; // eslint-disable-line no-param-reassign
	      $scope.showThisOptions = []; // eslint-disable-line no-param-reassign

	      $scope.showOptions = (0, _assign2.default)( // eslint-disable-line no-param-reassign
	      { searchBox: true, columnHideShow: true, export: true, refreshBtn: false }, $scope.pfGrid.options.gridUtilsOption);
	      coldef.forEach(function (item, index) {
	        if (item.pinnedLeft !== true) {
	          $scope.optionsToShow.push({ key: item.field, label: item.displayName });
	          $scope.showThisOptions.push({ key: item.field });
	        }
	      });

	      $scope.downloadReport = function (format) {
	        // eslint-disable-line no-param-reassign
	        $scope.$emit('export-data-app', format, $scope.pfGrid.options.gridId);
	      };

	      $scope.refresh = function (term) {
	        // eslint-disable-line no-param-reassign
	        $scope.pfGrid.options.searchTerm = term; // eslint-disable-line no-param-reassign
	        $scope.pfGrid.gridApi.grid.refresh();
	      };
	    }
	  }], [{
	    key: 'directiveFactory',
	    value: function directiveFactory() {
	      return new PFGridUtils();
	    }
	  }]);
	  return PFGridUtils;
	}(), (_applyDecoratedDescriptor(_class2, 'directiveFactory', [_dec2], (0, _getOwnPropertyDescriptor2.default)(_class2, 'directiveFactory'), _class2)), _class2)) || _class);

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _getOwnPropertyDescriptor = __webpack_require__(5);

	var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

	var _assign = __webpack_require__(12);

	var _assign2 = _interopRequireDefault(_assign);

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _dec, _dec2, _class, _desc, _value, _class2;

	var _view = __webpack_require__(155);

	var _view2 = _interopRequireDefault(_view);

	var _ngApp = __webpack_require__(1);

	__webpack_require__(140);

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

	// import headerTmpl from '!html!./header-template.html';

	var PFGrid = (_dec = (0, _ngApp.commonDirective)({ selector: 'pf-grid' }), _dec2 = (0, _ngApp.commonInject)('uiGridConstants', 'LocalStorage'), _dec(_class = (_class2 = function () {
	  // eslint-disable-line  no-unused-vars
	  function PFGrid(uiGridConstants, localStorage) {
	    (0, _classCallCheck3.default)(this, PFGrid);

	    this.replace = true;
	    this.template = _view2.default;
	    this.uiGridConstants = uiGridConstants;
	    this.localStorage = localStorage;
	    this.link = this.link.bind(this);
	    this.scope = {
	      gridOptions: '=',
	      gridLoadData: '&'
	    };
	    this.restrict = 'E';
	    this.controller = ['$scope', '$element', '$attrs', '$http', 'uiGridConstants', 'CommonService', 'uiGridPinningConstants', '$timeout', this.controller];
	  }

	  (0, _createClass3.default)(PFGrid, [{
	    key: 'controller',
	    value: function controller($scope, el, attr, $http, uiGridConstants, cs, uiGridPinningConstants, $timeout) {
	      var _this = this;

	      var defaultOptions = {
	        gridId: undefined,
	        gridUtilsOption: {
	          searchBox: false,
	          columnHideShow: false,
	          export: false,
	          refreshBtn: false
	        },
	        enableColumnReorderAttr: true,
	        enablePaginationAttr: true,
	        enableRowSelectionAttr: false,
	        enableColumnTreeViewAttr: true,
	        enableColumnResizeAttr: true,
	        enableColumnMenus: false,
	        enableFiltering: false,
	        enableRowSelection: false,
	        useExternalFiltering: false,
	        enableCellEdit: false,
	        useExternalSorting: true,
	        useExternalPagination: true,
	        enablePinning: true,
	        rowHeight: 30,
	        headerRowHeight: 30,
	        paginationPageSizes: [10, 25, 50, 75, 100],
	        paginationPageSize: 10
	      };
	      $scope.gridOptions = (0, _assign2.default)({}, defaultOptions, $scope.gridOptions);
	      this.options = $scope.gridOptions;

	      var sortChanged = function sortChanged(grid, sortColumns) {
	        var sort = sortColumns.reduce(function (sortg, col) {
	          if (col.sort) {
	            sortg.push(col.field + ' ' + col.sort.direction);
	          } else {
	            sortg.push(col.field + ' asc');
	          }
	          return sortg;
	        }, []);
	        var sortBy = {};
	        sortColumns.forEach(function (col) {
	          if (col.sort) {
	            sortBy[col.field] = col.sort.direction;
	          }
	        });
	        var loadOption = {};
	        loadOption.sortby = sort.toString();
	        $scope.$emit('grid-load-data', loadOption, _this.options.gridId, sortBy);
	      };

	      $scope.$root.$on('refresh-grid', function () {
	        _this.gridApi.grid.refresh();
	        _this.gridApi.core.notifyDataChange(uiGridConstants.dataChange.ALL);
	      });

	      $scope.$root.$on('grid-filter-state-changed', function (e, stateItm) {
	        $timeout(function () {
	          _this.gridApi.saveState.restore(_this, JSON.parse(stateItm.grid_state));
	        });
	      });

	      $scope.$root.$on('ask-grid-view', function (e) {
	        $scope.$emit('get-grid-view', _this.gridApi.saveState.save(), _this.options.gridId);
	      });

	      $scope.$root.$on('notifyGridUpdate', function () {
	        var container = uiGridPinningConstants.container;
	        var columns = _this.gridApi.grid.columns;

	        columns.forEach(function (col, idx) {
	          if (idx < 4) {
	            _this.gridApi.pinning.pinColumn(col, container.LEFT);
	          } else {
	            _this.gridApi.pinning.pinColumn(col, container.NONE);
	          }
	        });
	        _this.gridApi.core.notifyDataChange(uiGridConstants.dataChange.ALL);
	      });

	      $scope.$root.$on('grid-clear-all-selection', function () {
	        if (_this.options.enableRowSelectionAttr) {
	          _this.gridApi.selection.clearSelectedRows();
	        }
	      });

	      this.options.onRegisterApi = function (gridApi) {
	        _this.gridApi = gridApi; // eslint-disable-line no-param-reassign
	        gridApi.core.on.sortChanged($scope, sortChanged);

	        if (_this.options.enablePaginationAttr) {
	          gridApi.pagination.on.paginationChanged($scope, function (newPage, pageSize) {
	            $scope.$emit('grid-load-data', { page_num: newPage, page_size: pageSize }, _this.options.gridId);
	          });
	        }

	        if (_this.options.enableColumnTreeViewAttr) {
	          gridApi.treeBase.on.rowExpanded($scope, function (row) {
	            // eslint-disable-line
	            $scope.$emit('grid-expand-load-data', row);
	          });
	        }

	        if (_this.options.enableRowSelectionAttr) {
	          gridApi.selection.on.rowSelectionChanged($scope, function (row) {
	            $scope.$emit('grid-single-row-selected', row, _this.options.gridId);
	          });

	          gridApi.selection.on.rowSelectionChangedBatch($scope, function (rows) {
	            $scope.$emit('grid-batch-rows-selected', rows, _this.options.gridId);
	          });
	        }

	        gridApi.edit.on.afterCellEdit($scope, function (rowEntity, colDef, newValue, oldValue) {
	          if (newValue !== oldValue) {
	            $scope.$emit('grid-afterEdit-cell-data', { row: rowEntity, rowColDef: colDef, editedValue: newValue, prevValue: oldValue }, _this.options.gridId);
	          }
	        });

	        gridApi.core.on.filterChanged($scope, function () {
	          var _this2 = this;

	          if (angular.isDefined($scope.filterTimeout)) {
	            clearTimeout($scope.filterTimeout);
	          }
	          $scope.filterTimeout = setTimeout(function () {
	            var grid = _this2.grid;
	            var searchBy = {};
	            angular.forEach(grid.columns, function (value) {
	              if (value.filters[0].term) {
	                searchBy[value.colDef.name] = value.filters[0].term;
	              }
	            });
	            $scope.$emit('grid-cell-filter-data', searchBy);
	          }, 3000);
	        });

	        gridApi.grid.registerRowsProcessor(function (renderedColumnsToProcess) {
	          if (typeof _this.options.searchTerm !== 'undefined') {
	            var matcher = new RegExp(_this.options.searchTerm.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'), 'i');
	            renderedColumnsToProcess.forEach(function (row) {
	              var match = false;
	              _this.options.columnDefs.forEach(function (cell) {
	                var term = row.entity[cell.field] || '';
	                term.toString();
	                if (matcher.test(term)) {
	                  match = true;
	                  return;
	                }
	              });
	              if (!match) {
	                row.visible = false;
	              }
	            });
	          }
	          return renderedColumnsToProcess;
	        }, 200);
	      };
	    }
	  }, {
	    key: 'link',
	    value: function link($scope, el, attr) {// eslint-disable-line

	    }
	  }], [{
	    key: 'directiveFactory',
	    value: function directiveFactory(uiGridConstants, ls) {
	      return new PFGrid(uiGridConstants, ls);
	    }
	  }]);
	  return PFGrid;
	}(), (_applyDecoratedDescriptor(_class2, 'directiveFactory', [_dec2], (0, _getOwnPropertyDescriptor2.default)(_class2, 'directiveFactory'), _class2)), _class2)) || _class);

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _getOwnPropertyDescriptor = __webpack_require__(5);

	var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

	var _keys = __webpack_require__(26);

	var _keys2 = _interopRequireDefault(_keys);

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _dec, _dec2, _class, _desc, _value, _class2;

	var _view = __webpack_require__(156);

	var _view2 = _interopRequireDefault(_view);

	var _ngApp = __webpack_require__(1);

	__webpack_require__(141);

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

	var PFGropBy = (_dec = (0, _ngApp.commonDirective)({ selector: 'pf-groupby' }), _dec2 = (0, _ngApp.commonInject)('LocalStorage'), _dec(_class = (_class2 = function () {
	  // eslint-disable-line    no-unused-vars
	  function PFGropBy(localStorage) {
	    (0, _classCallCheck3.default)(this, PFGropBy);

	    this.replace = true;
	    this.template = _view2.default;
	    this.localStorage = localStorage;
	    this.link = this.link.bind(this);
	    this.scope = {};
	    this.restrict = 'E';
	    this.controller = ['$scope', '$attrs', 'APP_CONFIG', '$http', 'CommonService', this.controller];
	  }

	  (0, _createClass3.default)(PFGropBy, [{
	    key: 'controller',
	    value: function controller($scope, attrs, appConfig, $http, cs) {
	      var _this = this;

	      var groupByLvl = appConfig.groupByLvl || 0;
	      $scope._groupByLvl = new Array(groupByLvl);
	      $scope.$index = 0;
	      $scope.groupOptions = $scope.groupBy;
	      $scope._options = _.times(groupByLvl, function (i) {
	        return appConfig.groupBy.slice(i);
	      }); // $scope._groupByLvl.map(()=>);
	      $scope._selModel = _.times(groupByLvl, function (i) {
	        return { key: appConfig.groupBy[i].key };
	      });
	      $scope.groupByQuery = $scope._selModel.reduce(function (all, itm, idx) {
	        all['K' + idx] = itm;
	        return all;
	      }, {});

	      $scope.$emit('groupby-changed', $scope.groupByQuery);

	      $scope.singleSelectSetting = { // eslint-disable-line no-param-reassign
	        smartButtonMaxItems: 1,
	        selectionLimit: 1,
	        displayProp: 'label',
	        idProp: 'key',
	        idxName: 'groupByselect'
	      };

	      $scope.groupItemChanged = function (itm, $element, $attrs) {
	        $scope.$emit('indvi-groupby-changed');
	        var currentElIndex = $attrs.idx;
	        _this.groupItemChangedFN($scope, currentElIndex, itm, appConfig, groupByLvl);

	        _.times(groupByLvl, function (i) {
	          if (i > currentElIndex) {
	            delete $scope.groupByQuery['K' + i];
	            return $scope._selModel[i] = {};
	          }
	        });

	        if ((0, _keys2.default)($scope.groupByQuery).length >= groupByLvl) {
	          $scope.$emit('groupby-changed', $scope.groupByQuery);
	        }
	      };

	      function handelRloadSavedGroup(e, param) {
	        var _this2 = this;

	        var gSel = param.groupBy.reduce(function (all, itm, idx) {
	          all.selection.push({ key: itm });
	          _this2.groupItemChangedFN($scope, idx, { key: itm }, appConfig, groupByLvl);
	          return all;
	        }, { selection: [], query: {} });
	        /**/
	        $scope._selModel = gSel.selection;
	        $scope.$emit('groupby-changed', $scope.groupByQuery);
	        // $scope.$apply();
	      }

	      $scope.$parent.$on('reload-saved-group', handelRloadSavedGroup.bind(this));

	      this.groupItemChangedFN = function ($scope, currentElIndex, itm, appConfig, groupByLvl) {
	        $scope.groupByQuery['K' + currentElIndex] = itm;

	        var queryKeys = (0, _keys2.default)($scope.groupByQuery);
	        var queryLength = queryKeys.length;

	        var options = $scope._options.reduce(function (aggArr, optArr, indx) {
	          if (indx > parseInt(currentElIndex, 10)) {
	            var itms = appConfig.groupBy.filter(function (el, i) {
	              for (var counter = 0; counter < queryLength; counter++) {
	                if ($scope.groupByQuery[queryKeys[counter]].key === el.key && counter < indx) {
	                  return false;
	                }
	              }
	              return true;
	            });
	            aggArr.push(itms);
	          } else {
	            aggArr.push(optArr);
	          }
	          return aggArr;
	        }, []);

	        $scope._options = options;
	      };
	    }
	  }, {
	    key: 'link',
	    value: function link($scope, $element, $attrs, cnt) {//eslint-disable-line

	    }
	  }], [{
	    key: 'directiveFactory',
	    value: function directiveFactory(ls) {
	      return new PFGropBy(ls);
	    }
	  }]);
	  return PFGropBy;
	}(), (_applyDecoratedDescriptor(_class2, 'directiveFactory', [_dec2], (0, _getOwnPropertyDescriptor2.default)(_class2, 'directiveFactory'), _class2)), _class2)) || _class);

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _getOwnPropertyDescriptor = __webpack_require__(5);

	var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _dec, _dec2, _desc, _value, _class;

	var _ngApp = __webpack_require__(1);

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

	//
	// import header from 'views/header';
	var ApplicationConfig = (_dec = (0, _ngApp.commonInject)('$httpProvider'), _dec2 = (0, _ngApp.commonConfig)(), (_class = function () {
	  function ApplicationConfig() {
	    (0, _classCallCheck3.default)(this, ApplicationConfig);
	  }

	  (0, _createClass3.default)(ApplicationConfig, [{
	    key: 'Routing',
	    value: function Routing(hp) {
	      hp.interceptors.push(['$q', '$rootScope', function ($q, $rootScope) {
	        var activeRequests = 0;
	        var started = function started() {
	          if (activeRequests === 0) {
	            $rootScope.$broadcast('loader_show');
	          }
	          activeRequests++;
	        };
	        var ended = function ended() {
	          activeRequests--;
	          if (activeRequests === 0) {
	            $rootScope.$broadcast('loader_hide');
	          }
	        };
	        return {
	          request: function request(config) {
	            started();
	            return config || $q.when(config);
	          },
	          response: function response(_response) {
	            ended();
	            return _response || $q.when(_response);
	          },
	          responseError: function responseError(rejection) {
	            ended();
	            return $q.reject(rejection);
	          }
	        };
	      }]);
	    }
	  }]);
	  return ApplicationConfig;
	}(), (_applyDecoratedDescriptor(_class.prototype, 'Routing', [_dec, _dec2], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'Routing'), _class.prototype)), _class));

	// ({
	// request: (httpConfig) => {
	// same as above
	// httpConfig.headers['X-CSRF-TOKEN'] = $('.token').val();
	// delete httpConfig.headers['X-XSRF-TOKEN'];
	// console.log(httpConfig);
	//  debugger;
	// return httpConfig;
	// },
	// response: (httpResponse) => {
	// same as above
	// return httpResponse;
	// }
	// })

/***/ }),
/* 69 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  return function (number, currencyCode) {
	    if (number === null || number === '' || number === 'N/A' || typeof number === 'undefined') {
	      return 'N/A';
	    }
	    var currency = { $: '$', USD: '$', RUB: '', INR: '₹' };
	    var regexp = /^[0-9]+(.[0-9]{1,9})?$/;
	    var thousand = void 0;
	    var decimal = void 0;
	    var format = void 0;
	    if ($.inArray(currencyCode, ['USD', 'RUB', '$', '₹', 'INR']) >= 0) {
	      thousand = ',';
	      decimal = '.';
	      format = '%s%v';
	      return accounting.formatMoney(number, currency[currencyCode], 2, thousand, decimal, format);
	    } else if (currencyCode === '%') {
	      thousand = ',';
	      decimal = '.';
	      format = '%v%s';
	      return accounting.formatMoney(number, '%', 2, thousand, decimal, format);
	    } else if (currencyCode === 'date') {
	      if (moment(number).format('YYYY-MM-DD') === "Invalid date") {
	        return '-';
	      }
	      return moment(number).format('YYYY-MM-DD');
	    } else if (currencyCode === ',') {
	      thousand = ',';
	      decimal = '.';
	      format = '%s%v';
	      return accounting.formatMoney(number, '', 0, thousand, decimal, format);
	    } else if (currencyCode === 'mixed') {
	      if (regexp.test(number)) {
	        return accounting.formatMoney(number, '', 2, thousand, decimal, format) + '%';
	      }
	      return number;
	    } else if (currencyCode === 'hi-IN') {
	      var num = parseInt(number, 10);
	      num = num.toLocaleString("hi-IN");
	      return num;
	    } else if (currencyCode === 'hi-INR') {
	      number = parseFloat(number);
	      var v = number.toFixed(2);
	      v = parseFloat(v);
	      return '\u20B9 ' + v.toLocaleString("hi-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
	    }
	    thousand = ',';
	    decimal = '.';
	    format = '%s%v';
	    return accounting.formatMoney(number, '', 2, thousand, decimal, format);
	  };
	};

	module.exports = exports['default'];

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(20);

	__webpack_require__(75);

	__webpack_require__(78);

	__webpack_require__(1);

	__webpack_require__(68);

	__webpack_require__(57);

/***/ }),
/* 71 */
/***/ (function(module, exports) {

	/**
	 * Created by Akhil on 23-09-2016.
	 */
	"use strict";

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _dec, _dec2, _class;

	var _ngApp = __webpack_require__(1);

	var _constants = __webpack_require__(20);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CommonService = (_dec = (0, _ngApp.commonInject)('$injector'), _dec2 = (0, _ngApp.commonService)({ name: 'CommonService' }), _dec(_class = _dec2(_class = function () {
	  // eslint-disable-line  no-unused-vars

	  function CommonService(ig, appType) {
	    (0, _classCallCheck3.default)(this, CommonService);

	    this.ig = ig;
	    this.appType = appType;
	    this.dataArray = {};
	  }

	  (0, _createClass3.default)(CommonService, [{
	    key: 'getPlatformInjector',
	    value: function getPlatformInjector() {
	      if (!this.appIg) {
	        this.appIg = window.ykConfig && window.ykConfig.ig;
	      }
	      return this.appIg;
	    }
	  }, {
	    key: 'getPlatformRS',
	    value: function getPlatformRS() {
	      if (!this.appRS) {
	        this.appRS = this.getPlatformInjector().get('$rootScope');
	      }
	      return this.appRS;
	    }
	  }, {
	    key: 'updateLocalFilters',
	    value: function updateLocalFilters() {
	      var url = this.ig.get('FILTER_SYNC_URI');
	      var $http = this.ig.get('$http');
	      var $rs = this.ig.get('$rootScope');
	      var ls = this.ig.get('LocalStorage');
	      $http.get(url).then(function (result) {
	        ls.set('filter', result.data);
	        $rs.$emit(_constants.APP_EVENTS.onLocalFilterChanges, result.data);
	      });
	    }
	  }, {
	    key: 'setData',
	    value: function setData(key, value) {
	      this.dataArray[key] = value;
	    }
	  }, {
	    key: 'getData',
	    value: function getData(key) {
	      return this.dataArray[key];
	    }
	  }, {
	    key: 'removeData',
	    value: function removeData(key) {
	      delete this.dataArray[key];
	    }
	  }]);
	  return CommonService;
	}()) || _class) || _class);

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _stringify = __webpack_require__(17);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _dec, _dec2, _class; /**
	                          * Created by Akhil on 06-10-2016.
	                          */


	var _appErrors = __webpack_require__(53);

	var _ngApp = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var LocalStorage = (_dec = (0, _ngApp.commonInject)(), _dec2 = (0, _ngApp.commonService)({ name: 'LocalStorage' }), _dec(_class = _dec2(_class = function () {
	  // eslint-disable-line  no-unused-vars
	  function LocalStorage() {
	    (0, _classCallCheck3.default)(this, LocalStorage);

	    if (!window || !window.localStorage) {
	      throw new _appErrors.LocalStorageNotSupportedException();
	    }
	  }

	  (0, _createClass3.default)(LocalStorage, [{
	    key: 'get',
	    value: function get(key) {
	      return JSON.parse(this.storage.getItem(key));
	    }
	  }, {
	    key: 'set',
	    value: function set(key, data) {
	      this.storage.setItem(key, (0, _stringify2.default)(data));
	    }
	  }, {
	    key: 'storage',
	    get: function get() {
	      // eslint-disable-line  class-method-use-this
	      return window.localStorage;
	    }
	  }]);
	  return LocalStorage;
	}()) || _class) || _class);

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _dec, _dec2, _class;

	var _ngApp = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var DialogService = (_dec = (0, _ngApp.commonInject)('$injector', '$document'), _dec2 = (0, _ngApp.commonService)({ name: 'DialogService' }), _dec(_class = _dec2(_class = function () {
	  // eslint-disable-line  no-unused-vars
	  function DialogService(ig, $document) {
	    var _this = this;

	    (0, _classCallCheck3.default)(this, DialogService);

	    this.ig = ig;
	    this.$body = angular.element(document.getElementsByTagName('body')[0]);
	    $document.on('keydown', function (e) {
	      if (e.keyCode === 27 && _this.$body.find('div.modal').length) {
	        _this.closeModal();
	      }
	    });
	  }

	  (0, _createClass3.default)(DialogService, [{
	    key: 'getModal',
	    value: function getModal(_ref) {
	      var html = _ref.html,
	          scope = _ref.scope,
	          option = _ref.option;

	      this.$scope = scope.$new();
	      var angularDomEl = angular.element('<div class="modal fade in" index="0" role="dialog" aria-labelledby="modal-title" aria-labelledby="modal-title" style="z-index: 1050; display: block" tabindex="-1"></div>');
	      var content = angular.element('<div class="modal-dialog ' + option.windowTopClass + '"><div class="modal-content">' + html + '</div></div>');
	      angularDomEl.append(content);
	      var backdropDomEl = angular.element('<div class="modal-backdrop fade in" style="z-index: 1040"></div>');
	      var compiler = this.ig.get('$compile');
	      var template = compiler(angularDomEl)(this.$scope);
	      this.$body.append(template).append(backdropDomEl);
	    }
	  }, {
	    key: 'closeModal',
	    value: function closeModal() {
	      this.$scope.$destroy();
	      this.$body.find('div.modal').eq(-1).remove();
	      this.$body.find('div.modal-backdrop').eq(-1).remove();
	    }
	  }]);
	  return DialogService;
	}()) || _class) || _class);

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(71);

	__webpack_require__(72);

	__webpack_require__(76);

	__webpack_require__(73);

	__webpack_require__(74);

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _assign = __webpack_require__(12);

	var _assign2 = _interopRequireDefault(_assign);

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _dec, _dec2, _class;

	var _ngApp = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var NotificationService = (_dec = (0, _ngApp.commonInject)('$injector'), _dec2 = (0, _ngApp.commonService)({ name: 'NotificationService' }), _dec(_class = _dec2(_class = function () {
	  // eslint-disable-line no-unused-vars
	  function NotificationService() {
	    (0, _classCallCheck3.default)(this, NotificationService);

	    this.toastr = {};
	    this.toastr.options = {
	      closeButton: true,
	      debug: false,
	      newestOnTop: true,
	      progressBar: false,
	      positionClass: 'toast-bottom-left',
	      preventDuplicates: false,
	      onclick: null,
	      showDuration: '300',
	      hideDuration: '1000',
	      timeOut: '5000',
	      extendedTimeOut: '1000',
	      showEasing: 'swing',
	      hideEasing: 'linear',
	      showMethod: 'fadeIn',
	      hideMethod: 'fadeOut'
	    };
	  }

	  (0, _createClass3.default)(NotificationService, [{
	    key: 'notify',
	    value: function notify(type, msg, title, options) {
	      // debugger;
	      toastr.options = (0, _assign2.default)({}, this.toastr.options, options);
	      switch (type) {
	        case 'error':
	          toastr.error(msg, title);
	          break;
	        case 'success':
	          toastr.success(msg, title);
	          break;
	        case 'info':
	          toastr.info(msg, title);
	          break;
	        case 'warning':
	          toastr.warning(msg, title);
	          break;
	        default:
	          toastr.warning(msg, title);
	          break;
	      }
	    }
	  }]);
	  return NotificationService;
	}()) || _class) || _class);

/***/ }),
/* 77 */
/***/ (function(module, exports) {

	'use strict';

	var directiveModule = angular.module('angularjs-dropdown-multiselect', []);

	directiveModule.directive('ngDropdownMultiselect', ['$filter', '$document', '$compile', '$parse', function ($filter, $document, $compile, $parse) {
	  return {
	    restrict: 'AE',
	    scope: {
	      selectedModel: '=',
	      options: '=',
	      extraSettings: '=',
	      isDisabled: '=?',
	      events: '=',
	      searchFilter: '=?',
	      translationTexts: '=',
	      groupBy: '@'
	    },
	    template: function template(element, attrs) {
	      var boldDiplayValue = attrs.boldDiplayValue ? true : false;
	      var checkboxes = attrs.checkboxes ? true : false;
	      var checkboxicons = attrs.checkboxicons ? true : false;
	      var radioicons = attrs.radioicons ? true : false;
	      var checkicons = attrs.checkicons ? true : false;
	      var groups = attrs.groupBy ? true : false;

	      var template = '<div class="multiselect-parent btn-group dropdown-multiselect">';
	      template += '<button ng-disabled="isDisabled" type="button" class="btn btn-filter-component dropdown-toggle" ng-class="settings.buttonClasses" ng-click="toggleDropdown()">';
	      template += '<span class="button-text">{{getButtonText()}}</span>';
	      template += '</button>';
	      template += '<div class="dropdown-menu" ng-style="{display: open ? \'block\' : \'none\', height : settings.scrollable ? settings.scrollableHeight : \'auto\' }">';
	      template += '<div ng-show="settings.enableSearch" class="dropdown-header"><input type="text" class="form-control form-control-round" ng-model="searchFilter" placeholder="{{texts.searchPlaceholder}}" /></div>';
	      template += '<div ng-show="settings.enableSearch" class="dropdown-divider"></div>';
	      template += '<div class="col-md-12 col-xs-12 check-container">';
	      template += '<a tabindex="-1" ng-hide="!settings.showCheckAll || settings.selectionLimit > 0" data-ng-click="selectAll()"><span class="glyphicon glyphicon-ok"></span>  {{texts.checkAll}}</a>';
	      template += '<a tabindex="-1" ng-show="settings.showUncheckAll" data-ng-click="deselectAll();"><span class="glyphicon glyphicon-remove"></span>   {{texts.uncheckAll}}</a>';
	      template += '</div>';
	      template += '<div ng-hide="(!settings.showCheckAll || settings.selectionLimit > 0) && !settings.showUncheckAll" class="dropdown-divider"></div>';
	      template += '<div class="innerList">';
	      template += '<ul>';
	      if (groups) {
	        template += '<li ng-repeat-start="option in orderedItems | filter: searchFilter" ng-show="getPropertyForObject(option, settings.groupBy) !== getPropertyForObject(orderedItems[$index - 1], settings.groupBy)" role="presentation" class="dropdown-header">{{ getGroupTitle(getPropertyForObject(option, settings.groupBy)) }}</li>';
	        template += '<li ng-repeat-end role="presentation">';
	      } else {
	        template += '<li role="presentation" ng-repeat="option in options | filter: searchFilter" ng-class="{active : isChecked(getPropertyForObject(option,settings.idProp), $event)}">';
	      }
	      if (checkboxes) {
	        template += '<a class="dropdown-item" role="menuitem" tabindex="-1" ng-disabled="option.disabled">';
	      }
	      if (checkboxicons || radioicons || checkicons) {
	        template += '<a class="dropdown-item" role="menuitem" tabindex="-1" ng-disabled="option.disabled" ng-click="checkboxIconClick($event, getPropertyForObject(option,settings.idProp))">';
	      }
	      if (boldDiplayValue) {
	        template += '<a class="dropdown-item" ng-class="{\'text-bold\': isBold(getPropertyForObject(option,settings.boldPropName))}" role="menuitem" tabindex="-1" ng-disabled="option.disabled" ng-click="checkboxIconClick($event, getPropertyForObject(option,settings.idProp))">';
	      }
	      if (!checkboxes && !checkboxicons && !radioicons && !checkicons && !boldDiplayValue) {
	        template += '<a class="dropdown-item" role="menuitem" tabindex="-1" ng-disabled="option.disabled" ng-click="checkboxIconClick($event, getPropertyForObject(option,settings.idProp))">';
	      }

	      if (checkboxes) {
	        template += '<div class="checkbox"><label><input class="checkboxInput" type="checkbox" ng-click="checkboxClick($event, getPropertyForObject(option,settings.idProp))" ng-checked="isChecked(getPropertyForObject(option,settings.idProp), $event)" /> {{getPropertyForObject(option, settings.displayProp)}}</label></div></a>';
	      } else if (checkboxicons) {
	        template += '<div class="checkbox"><span data-ng-show="isChecked(getPropertyForObject(option,settings.idProp), $event)" class="icon-custom icon-checkbox-checked menu-item-icon" aria-hidden="true"></span><span data-ng-hide="isChecked(getPropertyForObject(option,settings.idProp), $event)" class="icon-custom icon-checkbox-unchecked menu-item-icon" aria-hidden="true"></span> <span class="menu-item-text">{{getPropertyForObject(option, settings.displayProp)}}</span></div></a>';
	      } else if (radioicons) {
	        template += '<div class="checkbox"><span data-ng-show="isChecked(getPropertyForObject(option,settings.idProp), $event)" class="fa fa-dot-circle-o select-icon" aria-hidden="true"></span><span data-ng-hide="isChecked(getPropertyForObject(option,settings.idProp), $event)" class="fa fa-circle-o select-icon" aria-hidden="true"></span> <span class="selectItems">{{getPropertyForObject(option, settings.displayProp)}}</span></div></a>';
	      } else if (checkicons) {
	        template += '<span data-ng-class="{\'fa fa-check\': isChecked(getPropertyForObject(option,settings.idProp), $event)}"></span> {{getPropertyForObject(option, settings.displayProp)}}</a>';
	      } else {
	        template += ' {{getPropertyForObject(option, settings.displayProp)}}</a>';
	      }
	      template += '</li>';
	      template += '</ul>';
	      template += '</div>';
	      template += '<div class="dropdown-divider" ng-show="settings.selectionLimit > 1"></div>';
	      template += '<div role="presentation" ng-show="settings.selectionLimit > 1"><a class="dropdown-item" role="menuitem">{{itemsToSelect.length}} {{texts.selectionOf}} {{settings.selectionLimit}} {{texts.selectionCount}}</a></div>';
	      template += '<div role="presentation" ng-show="settings.showApplyCancel" class="btn-class"><button class="btn btn-outline-primary apply" ng-click="updateSelectedItem()">Ok</button><button class="btn btn-outline-secondary cancel" ng-click="onCancelClickFunction()">Cancel</button></div>';
	      template += '</div>';
	      template += '</div>';

	      element.html(template);
	    },
	    controller: ['$scope', function ($scope) {
	      $scope.selectedModel = $scope.selectedModel || [];
	      $scope.options = $scope.options || [];
	    }],
	    link: function link($scope, $element, $attrs) {
	      var $dropdownTrigger = $element.children()[0];
	      $scope.toggleDropdown = function () {
	        if ($scope.isDisabled == false) {
	          $scope.open = !$scope.open;
	        }
	      };

	      $scope.checkboxClick = function ($event, id) {
	        $scope.setSelectedItem(id);
	        $event.stopImmediatePropagation();
	      };

	      $scope.checkboxIconClick = function ($event, id) {
	        if ($scope.settings.showApplyCancel) {
	          $scope.setItemToSelect(id);
	        } else {
	          $scope.setSelectedItem(id);
	        }
	        $event.stopImmediatePropagation();
	      };

	      $scope.externalEvents = {
	        onItemSelect: angular.noop,
	        onItemDeselect: angular.noop,
	        onSelectAll: angular.noop,
	        onDeselectAll: angular.noop,
	        onInitDone: angular.noop,
	        onMaxSelectionReached: angular.noop
	      };

	      $scope.settings = {
	        dynamicTitle: true,
	        scrollable: false,
	        scrollableHeight: '300px',
	        closeOnBlur: true,
	        displayProp: 'label',
	        idProp: 'key',
	        externalIdProp: 'key',
	        enableSearch: false,
	        selectionLimit: 0,
	        showCheckAll: false,
	        showUncheckAll: false,
	        enableSelectDeselectAll: false,
	        closeOnSelect: true,
	        boldPropName: 'isBold',
	        boldPropValue: true,
	        buttonClasses: 'btn btn-default',
	        closeOnDeselect: true,
	        groupBy: $attrs.groupBy || undefined,
	        groupByTextProvider: null,
	        smartButtonMaxItems: 0,
	        showApplyCancel: false,
	        isDisabled: false,
	        smartButtonTextConverter: angular.noop
	      };

	      $scope.allSelected = false;
	      $scope.itemsToSelect = [];

	      $scope.texts = {
	        checkAll: 'Check All',
	        uncheckAll: 'Uncheck All',
	        selectionCount: 'checked',
	        selectionOf: '/',
	        searchPlaceholder: 'Search...',
	        buttonDefaultText: 'Select',
	        dynamicButtonTextSuffix: 'checked'
	      };

	      if (angular.isUndefined($scope.isDisabled)) $scope.isDisabled = false;

	      $scope.searchFilter = $scope.searchFilter || '';

	      if (angular.isDefined($scope.settings.groupBy)) {
	        $scope.$watch('options', function (newValue) {
	          if (angular.isDefined(newValue)) {
	            $scope.orderedItems = $filter('orderBy')(newValue, $scope.settings.groupBy);
	          }
	        });
	      }

	      angular.extend($scope.settings, $scope.extraSettings || []);
	      angular.extend($scope.externalEvents, $scope.events || []);
	      angular.extend($scope.texts, $scope.translationTexts);

	      $scope.singleSelection = $scope.settings.selectionLimit === 1;

	      $scope.$watch('options', function (newValue, oldValue) {
	        if (angular.isDefined(newValue) && newValue !== oldValue) {
	          $scope.itemsToSelect = [];
	          for (var i = $scope.selectedModel.length - 1; i >= 0; i--) {
	            $scope.itemsToSelect.push($scope.selectedModel[i]);
	          }
	        }
	      }, true);

	      function getFindObj(id) {
	        var findObj = {};
	        if ($scope.settings.externalIdProp === '') {
	          findObj[$scope.settings.idProp] = id;
	        } else {
	          findObj[$scope.settings.externalIdProp] = id;
	        }
	        return findObj;
	      }

	      function clearObject(object) {
	        for (var prop in object) {
	          delete object[prop];
	        }
	      }

	      if ($scope.singleSelection) {
	        if (angular.isArray($scope.selectedModel) && $scope.selectedModel.length === 0) {
	          clearObject($scope.selectedModel);
	        }
	      }

	      $scope.allSelected = $scope.selectedModel.length === $scope.options.length;

	      $scope.closeOnSelectFunction = function () {
	        if ($scope.settings.closeOnSelect) {
	          $scope.open = false;
	        }
	      };

	      $scope.onCancelClickFunction = function () {
	        for (var i = $scope.selectedModel.length - 1; i >= 0; i--) {
	          var existsModel = _.findIndex($scope.itemsToSelect, $scope.selectedModel[i]) !== -1;
	          if (!existsModel) {
	            $scope.itemsToSelect.push($scope.selectedModel[i]);
	          }
	        }
	        for (var _i = $scope.itemsToSelect.length - 1; _i >= 0; _i--) {
	          var _existsModel = _.findIndex($scope.selectedModel, $scope.itemsToSelect[_i]) !== -1;
	          if (!_existsModel) {
	            $scope.itemsToSelect.splice(_i, 1);
	          }
	        }
	        $scope.closeOnSelectFunction();
	      };

	      if ($scope.settings.closeOnBlur) {
	        $document.on('click', function (e) {
	          var target = e.target.parentElement;
	          var parentFound = false;

	          while (angular.isDefined(target) && target !== null && !parentFound) {
	            if (!!target.className.split && _.contains(target.className.split(' '), 'multiselect-parent') && !parentFound) {
	              if (target === $dropdownTrigger) {
	                parentFound = true;
	              }
	            }
	            target = target.parentElement;
	          }

	          if (!parentFound) {
	            for (var i = $scope.selectedModel.length - 1; i >= 0; i--) {
	              var existsModel = _.findIndex($scope.itemsToSelect, $scope.selectedModel[i]) !== -1;
	              if (!existsModel) {
	                $scope.itemsToSelect.push($scope.selectedModel[i]);
	              }
	            }
	            for (var _i2 = $scope.itemsToSelect.length - 1; _i2 >= 0; _i2--) {
	              var existsModelItem = _.findIndex($scope.selectedModel, $scope.itemsToSelect[_i2]) !== -1;
	              if (!existsModelItem) {
	                $scope.itemsToSelect.splice(_i2, 1);
	              }
	            }
	            $scope.$apply(function () {
	              $scope.open = false;
	            });
	          }
	        });
	      }

	      $scope.getGroupTitle = function (groupValue) {
	        if ($scope.settings.groupByTextProvider !== null) {
	          return $scope.settings.groupByTextProvider(groupValue);
	        }
	        return groupValue;
	      };

	      $scope.getButtonText = function () {
	        if ($scope.settings.dynamicTitle && ($scope.selectedModel.length > 0 || angular.isObject($scope.selectedModel) && _.keys($scope.selectedModel).length > 0)) {
	          if ($scope.settings.smartButtonMaxItems > 0) {
	            var itemsText = [];

	            angular.forEach($scope.options, function (optionItem) {
	              if ($scope.isChecked($scope.getPropertyForObject(optionItem, $scope.settings.idProp))) {
	                var displayText = $scope.getPropertyForObject(optionItem, $scope.settings.displayProp);
	                var converterResponse = $scope.settings.smartButtonTextConverter(displayText, optionItem);

	                itemsText.push(converterResponse ? converterResponse : displayText);
	              }
	            });

	            if ($scope.selectedModel.length > $scope.settings.smartButtonMaxItems) {
	              itemsText = itemsText.slice(0, $scope.settings.smartButtonMaxItems);
	              itemsText.push('...');
	            }
	            if ($scope.settings.smartButtonMaxItems === 1) {
	              return itemsText.toString();
	            }
	            return itemsText.join(', ');
	          } else {
	            var totalSelected = void 0;

	            if ($scope.singleSelection) {
	              totalSelected = $scope.selectedModel !== null && angular.isDefined($scope.selectedModel[$scope.settings.idProp]) ? 1 : 0;
	            } else {
	              totalSelected = angular.isDefined($scope.selectedModel) ? $scope.selectedModel.length : 0;
	            }

	            if (totalSelected === 0) {
	              return $scope.texts.buttonDefaultText;
	            } else if (totalSelected === $scope.options.length) {
	              return 'All ' + $scope.texts.dynamicButtonTextSuffix;
	            } else {
	              return totalSelected + ' ' + $scope.texts.dynamicButtonTextSuffix;
	            }
	          }
	        } else {
	          return $scope.texts.buttonDefaultText;
	        }
	      };

	      $scope.getPropertyForObject = function (object, property) {
	        if (angular.isDefined(object) && object.hasOwnProperty(property)) {
	          return object[property];
	        }

	        return '';
	      };

	      $scope.selectAllOrDeselect = function () {
	        $scope.allSelected = !$scope.allSelected;
	        if ($scope.allSelected) {
	          $scope.selectAll();
	        } else {
	          $scope.deselectAll();
	        }
	      };

	      $scope.selectAll = function () {
	        var idProp = $scope.settings.idProp;
	        var displayProp = $scope.settings.displayProp;
	        var sFilter = $scope.searchFilter.toLowerCase();
	        var options = $scope.searchFilter.length === 0 ? $scope.options : _.filter($scope.options, function (itm) {
	          return itm[displayProp].toLowerCase().indexOf(sFilter) >= 0;
	        });
	        if ($scope.settings.showApplyCancel) {
	          angular.forEach(options, function (value) {
	            var objCT = {};
	            objCT[idProp] = value[idProp];
	            var existsModel = _.findIndex($scope.itemsToSelect, objCT) !== -1;
	            if (!existsModel && ($scope.settings.selectionLimit === 0 || $scope.itemsToSelect.length < $scope.settings.selectionLimit)) {
	              $scope.itemsToSelect.push(objCT);
	            }
	          });
	        } else {
	          $scope.deselectAll(false);
	          $scope.externalEvents.onSelectAll();
	          angular.forEach(options, function (value) {
	            $scope.setSelectedItem(value[$scope.settings.idProp], true);
	          });
	          $scope.closeOnSelectFunction();
	        }
	      };

	      $scope.deselectAll = function (sendEvent) {
	        sendEvent = sendEvent || true;
	        if ($scope.settings.showApplyCancel) {
	          if (sendEvent) {
	            $scope.externalEvents.onDeselectAll();
	          }
	          if ($scope.singleSelection) {
	            clearObject($scope.selectedModel);
	          } else {
	            $scope.itemsToSelect.splice(0, $scope.itemsToSelect.length);
	          }
	        } else {
	          if (sendEvent) {
	            $scope.externalEvents.onDeselectAll();
	          }
	          if ($scope.singleSelection) {
	            clearObject($scope.selectedModel);
	          } else {
	            $scope.selectedModel.splice(0, $scope.selectedModel.length);
	          }
	          $scope.closeOnSelectFunction();
	        }
	      };

	      $scope.setItemToSelect = function (id, dontRemove) {
	        if ($scope.singleSelection) {
	          $scope.setSelectedItem(id, dontRemove);
	        } else {
	          var findObj = getFindObj(id);
	          var finalObj = null;
	          if ($scope.settings.externalIdProp === '') {
	            finalObj = _.find($scope.options, findObj);
	          } else {
	            finalObj = findObj;
	          }
	          dontRemove = dontRemove || false;
	          var exists = _.findIndex($scope.itemsToSelect, findObj) !== -1;
	          if (!dontRemove && exists) {
	            $scope.itemsToSelect.splice(_.findIndex($scope.itemsToSelect, findObj), 1);
	          } else if (!exists && ($scope.settings.selectionLimit === 0 || $scope.itemsToSelect.length < $scope.settings.selectionLimit)) {
	            $scope.itemsToSelect.push(finalObj);
	          }

	          if ($scope.itemsToSelect.length === $scope.options.length) {
	            $scope.allSelected = true;
	          } else {
	            $scope.allSelected = false;
	          }
	        }
	      };

	      $scope.$on('updateSelectedItem', function (e, param) {
	        $scope.itemsToSelect = param.itemsToSelect;
	        $scope.updateSelectedItem();
	      });
	      $scope.updateSelectedItem = function () {
	        if ($scope.itemsToSelect.length > 0) {
	          for (var i = $scope.itemsToSelect.length - 1; i >= 0; i--) {
	            var index = _.findIndex($scope.selectedModel, $scope.itemsToSelect[i]);
	            var existsItem = index !== -1;
	            if (!existsItem) {
	              $scope.selectedModel.push($scope.itemsToSelect[i]);
	            }
	          }

	          for (var _i3 = $scope.selectedModel.length - 1; _i3 >= 0; _i3--) {
	            var existsModel = _.findIndex($scope.itemsToSelect, $scope.selectedModel[_i3]) !== -1;
	            if (!existsModel) {
	              $scope.selectedModel.splice(_.findIndex($scope.selectedModel, $scope.selectedModel[_i3]), 1);
	            }
	          }

	          if ($scope.selectedModel.length) {
	            for (var _i4 = $scope.selectedModel.length - 1; _i4 >= 0; _i4--) {
	              var existsModell = _.findIndex($scope.itemsToSelect, $scope.selectedModel[_i4]) !== -1;
	              if (!existsModell) {
	                $scope.itemsToSelect.push($scope.selectedModel[_i4]);
	              }
	            }
	          }
	        } else {
	          $scope.selectedModel.splice(0, $scope.selectedModel.length);
	        }
	        $scope.searchFilter = '';
	        $scope.externalEvents.onItemSelect();
	        $scope.closeOnSelectFunction();
	      };

	      $scope.setSelectedItem = function (id, dontRemove) {
	        var findObj = getFindObj(id);
	        var finalObj = null;
	        if ($scope.settings.externalIdProp === '') {
	          finalObj = _.find($scope.options, findObj);
	        } else {
	          finalObj = findObj;
	        }
	        if ($scope.singleSelection) {
	          clearObject($scope.selectedModel);
	          angular.extend($scope.selectedModel, finalObj);
	          $scope.externalEvents.onItemSelect(finalObj, $element, $attrs);
	          $scope.closeOnSelectFunction();
	          return;
	        }
	        dontRemove = dontRemove || false;
	        var exists = _.findIndex($scope.selectedModel, findObj) !== -1;
	        if (!dontRemove && exists) {
	          $scope.selectedModel.splice(_.findIndex($scope.selectedModel, findObj), 1);
	          $scope.externalEvents.onItemDeselect(findObj);
	        } else if (!exists && ($scope.settings.selectionLimit === 0 || $scope.selectedModel.length < $scope.settings.selectionLimit)) {
	          $scope.selectedModel.push(finalObj);
	          $scope.externalEvents.onItemSelect(finalObj);
	        }
	        $scope.closeOnSelectFunction();
	      };

	      $scope.isBold = function (boldPropValue) {
	        if ($scope.settings.boldPropValue === boldPropValue) {
	          return true;
	        } else {
	          return false;
	        }
	      };

	      $scope.isChecked = function (id, $event) {
	        if ($scope.singleSelection) {
	          return $scope.selectedModel !== null && angular.isDefined($scope.selectedModel[$scope.settings.idProp]) && $scope.selectedModel[$scope.settings.idProp] === getFindObj(id)[$scope.settings.idProp];
	        }

	        if ($scope.settings.showApplyCancel) {
	          return _.findIndex($scope.itemsToSelect, getFindObj(id)) !== -1;
	        } else {
	          return _.findIndex($scope.selectedModel, getFindObj(id)) !== -1;
	        }
	        $event.stopImmediatePropagation();
	      };

	      $scope.externalEvents.onInitDone();
	    }
	  };
	}]);

/***/ }),
/* 78 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * Created by Akhil on 23-09-2016.
	 */
	var ngModule = angular.module;
	var counter = 0;
	// console.log('patching angular module');
	//
	// angular.module = function(){
	//   console.log(++counter, arguments);
	//     return ngModule(arguments);
	// };

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(77);

	__webpack_require__(70);

	__webpack_require__(41);

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(91), __esModule: true };

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(92), __esModule: true };

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(94), __esModule: true };

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(96), __esModule: true };

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(97), __esModule: true };

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(98), __esModule: true };

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _assign = __webpack_require__(12);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _setPrototypeOf = __webpack_require__(83);

	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

	var _create = __webpack_require__(80);

	var _create2 = _interopRequireDefault(_create);

	var _typeof2 = __webpack_require__(42);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }

	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(42);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	var core = __webpack_require__(4);
	var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
	module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(116);
	module.exports = __webpack_require__(4).Object.assign;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(117);
	var $Object = __webpack_require__(4).Object;
	module.exports = function create(P, D) {
	  return $Object.create(P, D);
	};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(118);
	var $Object = __webpack_require__(4).Object;
	module.exports = function defineProperty(it, key, desc) {
	  return $Object.defineProperty(it, key, desc);
	};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(119);
	var $Object = __webpack_require__(4).Object;
	module.exports = function getOwnPropertyDescriptor(it, key) {
	  return $Object.getOwnPropertyDescriptor(it, key);
	};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(120);
	module.exports = __webpack_require__(4).Object.getPrototypeOf;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(121);
	module.exports = __webpack_require__(4).Object.keys;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(122);
	module.exports = __webpack_require__(4).Object.setPrototypeOf;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(125);
	__webpack_require__(123);
	__webpack_require__(126);
	__webpack_require__(127);
	module.exports = __webpack_require__(4).Symbol;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(124);
	__webpack_require__(128);
	module.exports = __webpack_require__(40).f('iterator');


/***/ }),
/* 99 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};


/***/ }),
/* 100 */
/***/ (function(module, exports) {

	module.exports = function () { /* empty */ };


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(11);
	var toLength = __webpack_require__(114);
	var toAbsoluteIndex = __webpack_require__(113);
	module.exports = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIObject($this);
	    var length = toLength(O.length);
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
	      if (O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(19);
	var gOPS = __webpack_require__(32);
	var pIE = __webpack_require__(22);
	module.exports = function (it) {
	  var result = getKeys(it);
	  var getSymbols = gOPS.f;
	  if (getSymbols) {
	    var symbols = getSymbols(it);
	    var isEnum = pIE.f;
	    var i = 0;
	    var key;
	    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
	  } return result;
	};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

	var document = __webpack_require__(6).document;
	module.exports = document && document.documentElement;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(43);
	module.exports = Array.isArray || function isArray(arg) {
	  return cof(arg) == 'Array';
	};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var create = __webpack_require__(30);
	var descriptor = __webpack_require__(23);
	var setToStringTag = __webpack_require__(34);
	var IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(14)(IteratorPrototype, __webpack_require__(16)('iterator'), function () { return this; });

	module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
	};


/***/ }),
/* 106 */
/***/ (function(module, exports) {

	module.exports = function (done, value) {
	  return { value: value, done: !!done };
	};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

	var META = __webpack_require__(25)('meta');
	var isObject = __webpack_require__(15);
	var has = __webpack_require__(9);
	var setDesc = __webpack_require__(10).f;
	var id = 0;
	var isExtensible = Object.isExtensible || function () {
	  return true;
	};
	var FREEZE = !__webpack_require__(13)(function () {
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function (it) {
	  setDesc(it, META, { value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  } });
	};
	var fastKey = function (it, create) {
	  // return primitive with prefix
	  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function (it, create) {
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function (it) {
	  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY: META,
	  NEED: false,
	  fastKey: fastKey,
	  getWeak: getWeak,
	  onFreeze: onFreeze
	};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys = __webpack_require__(19);
	var gOPS = __webpack_require__(32);
	var pIE = __webpack_require__(22);
	var toObject = __webpack_require__(24);
	var IObject = __webpack_require__(47);
	var $assign = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(13)(function () {
	  var A = {};
	  var B = {};
	  // eslint-disable-next-line no-undef
	  var S = Symbol();
	  var K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function (k) { B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
	  var T = toObject(target);
	  var aLen = arguments.length;
	  var index = 1;
	  var getSymbols = gOPS.f;
	  var isEnum = pIE.f;
	  while (aLen > index) {
	    var S = IObject(arguments[index++]);
	    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
	    var length = keys.length;
	    var j = 0;
	    var key;
	    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
	  } return T;
	} : $assign;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(10);
	var anObject = __webpack_require__(18);
	var getKeys = __webpack_require__(19);

	module.exports = __webpack_require__(7) ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = getKeys(Properties);
	  var length = keys.length;
	  var i = 0;
	  var P;
	  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(11);
	var gOPN = __webpack_require__(49).f;
	var toString = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function (it) {
	  try {
	    return gOPN(it);
	  } catch (e) {
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it) {
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(15);
	var anObject = __webpack_require__(18);
	var check = function (O, proto) {
	  anObject(O);
	  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function (test, buggy, set) {
	      try {
	        set = __webpack_require__(44)(Function.call, __webpack_require__(31).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch (e) { buggy = true; }
	      return function setPrototypeOf(O, proto) {
	        check(O, proto);
	        if (buggy) O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(37);
	var defined = __webpack_require__(27);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(defined(that));
	    var i = toInteger(pos);
	    var l = s.length;
	    var a, b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(37);
	var max = Math.max;
	var min = Math.min;
	module.exports = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(37);
	var min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(100);
	var step = __webpack_require__(106);
	var Iterators = __webpack_require__(29);
	var toIObject = __webpack_require__(11);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(48)(Array, 'Array', function (iterated, kind) {
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var kind = this._k;
	  var index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return step(1);
	  }
	  if (kind == 'keys') return step(0, index);
	  if (kind == 'values') return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(8);

	$export($export.S + $export.F, 'Object', { assign: __webpack_require__(108) });


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', { create: __webpack_require__(30) });


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(7), 'Object', { defineProperty: __webpack_require__(10).f });


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(11);
	var $getOwnPropertyDescriptor = __webpack_require__(31).f;

	__webpack_require__(33)('getOwnPropertyDescriptor', function () {
	  return function getOwnPropertyDescriptor(it, key) {
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject = __webpack_require__(24);
	var $getPrototypeOf = __webpack_require__(50);

	__webpack_require__(33)('getPrototypeOf', function () {
	  return function getPrototypeOf(it) {
	    return $getPrototypeOf(toObject(it));
	  };
	});


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(24);
	var $keys = __webpack_require__(19);

	__webpack_require__(33)('keys', function () {
	  return function keys(it) {
	    return $keys(toObject(it));
	  };
	});


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(8);
	$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(111).set });


/***/ }),
/* 123 */
/***/ (function(module, exports) {

	

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $at = __webpack_require__(112)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(48)(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var index = this._i;
	  var point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global = __webpack_require__(6);
	var has = __webpack_require__(9);
	var DESCRIPTORS = __webpack_require__(7);
	var $export = __webpack_require__(8);
	var redefine = __webpack_require__(52);
	var META = __webpack_require__(107).KEY;
	var $fails = __webpack_require__(13);
	var shared = __webpack_require__(36);
	var setToStringTag = __webpack_require__(34);
	var uid = __webpack_require__(25);
	var wks = __webpack_require__(16);
	var wksExt = __webpack_require__(40);
	var wksDefine = __webpack_require__(39);
	var enumKeys = __webpack_require__(102);
	var isArray = __webpack_require__(104);
	var anObject = __webpack_require__(18);
	var isObject = __webpack_require__(15);
	var toIObject = __webpack_require__(11);
	var toPrimitive = __webpack_require__(38);
	var createDesc = __webpack_require__(23);
	var _create = __webpack_require__(30);
	var gOPNExt = __webpack_require__(110);
	var $GOPD = __webpack_require__(31);
	var $DP = __webpack_require__(10);
	var $keys = __webpack_require__(19);
	var gOPD = $GOPD.f;
	var dP = $DP.f;
	var gOPN = gOPNExt.f;
	var $Symbol = global.Symbol;
	var $JSON = global.JSON;
	var _stringify = $JSON && $JSON.stringify;
	var PROTOTYPE = 'prototype';
	var HIDDEN = wks('_hidden');
	var TO_PRIMITIVE = wks('toPrimitive');
	var isEnum = {}.propertyIsEnumerable;
	var SymbolRegistry = shared('symbol-registry');
	var AllSymbols = shared('symbols');
	var OPSymbols = shared('op-symbols');
	var ObjectProto = Object[PROTOTYPE];
	var USE_NATIVE = typeof $Symbol == 'function';
	var QObject = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function () {
	  return _create(dP({}, 'a', {
	    get: function () { return dP(this, 'a', { value: 7 }).a; }
	  })).a != 7;
	}) ? function (it, key, D) {
	  var protoDesc = gOPD(ObjectProto, key);
	  if (protoDesc) delete ObjectProto[key];
	  dP(it, key, D);
	  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function (tag) {
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D) {
	  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if (has(AllSymbols, key)) {
	    if (!D.enumerable) {
	      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
	      D = _create(D, { enumerable: createDesc(0, false) });
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P) {
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P));
	  var i = 0;
	  var l = keys.length;
	  var key;
	  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P) {
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key) {
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
	  it = toIObject(it);
	  key = toPrimitive(key, true);
	  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
	  var D = gOPD(it, key);
	  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it) {
	  var names = gOPN(toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
	  var IS_OP = it === ObjectProto;
	  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if (!USE_NATIVE) {
	  $Symbol = function Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function (value) {
	      if (this === ObjectProto) $set.call(OPSymbols, value);
	      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f = $defineProperty;
	  __webpack_require__(49).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(22).f = $propertyIsEnumerable;
	  __webpack_require__(32).f = $getOwnPropertySymbols;

	  if (DESCRIPTORS && !__webpack_require__(21)) {
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function (name) {
	    return wrap(wks(name));
	  };
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

	for (var es6Symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

	for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function (key) {
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(sym) {
	    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
	    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
	  },
	  useSetter: function () { setter = true; },
	  useSimple: function () { setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it) {
	    var args = [it];
	    var i = 1;
	    var replacer, $replacer;
	    while (arguments.length > i) args.push(arguments[i++]);
	    $replacer = replacer = args[1];
	    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	    if (!isArray(replacer)) replacer = function (key, value) {
	      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
	      if (!isSymbol(value)) return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(14)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(39)('asyncIterator');


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(39)('observable');


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(115);
	var global = __webpack_require__(6);
	var hide = __webpack_require__(14);
	var Iterators = __webpack_require__(29);
	var TO_STRING_TAG = __webpack_require__(16)('toStringTag');

	var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
	  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
	  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
	  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
	  'TextTrackList,TouchList').split(',');

	for (var i = 0; i < DOMIterables.length; i++) {
	  var NAME = DOMIterables[i];
	  var Collection = global[NAME];
	  var proto = Collection && Collection.prototype;
	  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}


/***/ }),
/* 129 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 130 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 131 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 132 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 133 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 134 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 135 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 136 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 137 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 138 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 139 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 140 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 141 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 142 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"yk-navigation sidebar-container\">\n    <div class=\"app-group-block\" ng-repeat=\"app in list  track by $index\">\n        <span class=\"heading-text\" ng-if=\"app.groupName\">\n            <span class=\"heading-text-icon\"><i class=\"fa fa-angle-up\" aria-hidden=\"true\"></i></span>\n            <span class=\"heading-text-label\">{{app.groupName}}</span>\n        </span>\n        <ul class=\"nav nav-sidebar\">\n            <li class=\"app-menu-item\" ng-repeat=\"item in app.items  track by $index\">\n                <a class=\"menu-link\" href=\"{{item.href}}\" pf-app-loader=\"item\" id=\"a-{{item.ngId}}\">\n                    <i class=\"icon-custom icon-cog icon {{item.iconClass}}\" aria-hidden=\"true\"></i>\n                    <span class=\"link-text\">{{item.name}}</span>\n                </a>\n            </li>\n        </ul>\n    </div>\n    <div class=\"user-info\">\n        <ul class=\"nav nav-sidebar\">\n            <li class=\"app-menu-item\">\n                <a class=\"menu-link\" href=\"/logout\">\n                    <i class=\"icon-custom icon-logout icon\" aria-hidden=\"true\"></i>\n                    <span class=\"link-text\">Logout</span>\n                </a>\n            </li>\n        </ul>\n    </div>\n</div>\n";

/***/ }),
/* 143 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"row around-xs footer\">\n    <div class=\"col-xs-2\">\n        <div class=\"box\">\n            footer\n        </div>\n    </div>\n</div>\n";

/***/ }),
/* 144 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"column \">\n    <div class=\"notification is-primary \">\n        <h3 class=\"title is-3\">\n            {{appTitle}}\n        </h3>\n    </div>\n</div>";

/***/ }),
/* 145 */
/***/ (function(module, exports) {

	module.exports = "<div>\n  <input class=\"form-control form-control-block date-picker\" type=\"text\" placeholder=\"{{placeholderText}}\" ng-model=\"date\"/>\n</div>\n";

/***/ }),
/* 146 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"col-filter\">\n    <label class=\"filter-label\">Add Filter</label>\n    <div ng-dropdown-multiselect=\"\"\n        options=\"_filters.available\"\n        selected-model=\"selectedFilterToAdd\"\n        extra-settings=\"dropdownSettngs\"\n        translation-texts=\"{ buttonDefaultText: 'Select Filter', dynamicButtonTextSuffix: 'Selected'}\"\n        class=\"multiselect filter-meta ng-isolate-scope\">\n    </div>\n    <div class=\"pull-left\">\n        <button type=\"button\" class=\"btn btn-primary btn-filter\" ng-click=\"addDefaultFilter();showHideTemplate();\">\n            <i class=\"fa fa-check\" aria-hidden=\"true\"></i>\n        </button>\n        <button type=\"button\" class=\"btn btn-outline-secondary btn-filter\" ng-click=\"showHideTemplate()\">\n            Cancel\n        </button>\n    </div>\n<div>\n";

/***/ }),
/* 147 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"col-filter\">\n    <label class=\"filter-label\">&nbsp;</label>\n    <div class=\"pull-left\">\n        <button type=\"button\" class=\"btn btn-outline-primary\" ng-disabled=\"_filters.available.length < 1\" ng-click=\"showHideTemplate()\">\n            Add Filter\n        </button>\n    </div>\n</div>";

/***/ }),
/* 148 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"filter-box-container\" ng-class=\"{'expanded': showBox}\">\n  <div class=\"col-lg-12 col-md-12 col sm-12 col-xs-12 border-bottom\">\n    <pf-filter-save></pf-filter-save>\n  </div>\n\n  <div class=\"col-lg-12 col-md-12 col sm-12 col-xs-12 border-bottom\" ng-show=\"showBox\" ng-if=\"filterOptions.enableFilters\">\n    <div class=\"filter-component-container\">\n      <div class=\"filter-component\" ng-repeat=\"x in _filters.defaults track by trackingFn(x,$index)\">\n        <pf-filter filter=\"x\" index=\"{{$index}}\" filter-options=\"filterOptions\"></pf-filter>\n      </div>\n      <pf-filter-add ng-if=\"filterOptions.enableAddFilter\"></pf-filter-add>\n    </div>\n  </div>\n\n  <div class=\"col-lg-12 col-md-12 col sm-12 col-xs-12 border-bottom\" ng-show=\"showBox\" ng-if=\"grpByLevel !== 0 && filterOptions.enableGroupBy\">\n    <div class=\"filter-component-container\">\n      <pf-groupby></pf-groupby>\n    </div>\n  </div>\n\n  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\" ng-show=\"showBox\" ng-if=\"filterModified\">\n    <div class=\"apply-btn-container\">\n      <button class=\"btn btn-primary\" ng-click=\"fireEvent(); filterModified = false;\">Apply</button>\n    </div>\n  </div>\n</div>\n";

/***/ }),
/* 149 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"save-filterset-container\">\n  <div class=\"col-filter\">\n    <div class=\"box-col\" ng-click=\"angleDown = !angleDown;hideFilterBox(angleDown)\">\n      <span class=\"fa fa-angle-up fa-2\" aria-hidden=\"true\" ng-show=\"angleDown\"></span>\n      <span class=\"fa fa-angle-down fa-2\" aria-hidden=\"true\" ng-hide=\"angleDown\"></span>\n    </div>\n  </div>\n  <div class=\"col-filter\">\n    <div class=\"box-col\">\n      <i class=\"icon-custom icon-filter fa-2\" aria-hidden=\"true\"></i>\n    </div>\n  </div>\n  <div class=\"col-filter\" ng-if=\"filterOptions.enableSaveFilter\">\n    <div class=\"box-col\">\n      <div class=\"filter-name-multiselect\" ng-if=\"!filterSetCreateView\">\n        <div ng-dropdown-multiselect=\"\"\n             ng-focus=\"disableFilterWatcher()\"\n             ng-blur=\"enableFilterWatcher()\"\n             options=\"_filters.savedFilters\"\n             selected-model=\"selectedFilterSet\"\n             extra-settings=\"singleSelectSetting\"\n             translation-texts=\"{ buttonDefaultText: 'Select or Add New'}\"\n             events=\"{onItemSelect: filterSetChanged}\"\n             class=\"multiselect\"\n             ng-disabled=\"savedFilterSet.length == 0\">\n        </div>\n        <button class=\"btn btn-primary\"\n                ng-if=\"filterSetModified\"\n                ng-click=\"saveFilterSet()\">\n          Save\n        </button>\n        <button class=\"btn btn-outline-primary\"\n                ng-if=\"!isDefault\"\n                ng-click=\"setAsDefaultFilterSet()\">\n          Set as Default\n        </button>\n        <button class=\"btn btn-primary\"\n                ng-click=\"toggleFilterSetForm()\">\n          Save As\n        </button>\n      </div>\n      <div class=\"new-filter-saveform\" ng-if=\"filterSetCreateView\">\n        <form ng-submit=\"createFilterSet(NewSaveFilterName, newSetDefault)\">\n          <div class=\"new-filter-input-holder\">\n            <input type=\"text\"\n              class=\"form-control form-control-block\"\n              ng-model=\"NewSaveFilterName\"\n              placeholder=\"New Filter Set\"\n              ng-required=\"true\"\n              minlength=\"1\">\n          </div>\n          <div class=\"checkbox\">\n            <input id=\"box1\" type=\"checkbox\" name=\"name\" ng-model=\"newSetDefault\">\n            <label for=\"box1\">Set as Default</label>\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary horizantal-margin\">\n            Save\n          </button>\n          <button type=\"button\" class=\"btn btn-outline-secondary\" ng-click=\"toggleFilterSetForm()\">\n            Cancel\n          </button>\n        </form>\n      </div>\n    </div>\n  </div>\n\n  <pf-grid-save-state ng-if=\"filterOptions.enableSaveState\" filter-options=\"filterOptions\"></pf-grid-save-state>\n\n  <div class=\"col-filter edit-delete-filterset\" ng-if=\"!filterSetCreateView && filterOptions.enableSaveFilter\">\n    <div class=\"box-col\">\n      <span class=\"edit-filterset horizantal-margin\" ng-click=\"createFilterSet(undefined,undefined,selectedFilterSet,'edit')\">\n        <i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i>\n      </span>\n      <span class=\"delete-filterset\" ng-click=\"deleteFilterSet()\">\n        <i class=\"icon-custom icon-delete\" aria-hidden=\"true\"></i>\n      </span>\n    </div>\n  </div>\n</div>\n";

/***/ }),
/* 150 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"col-filter\">\n    <label class=\"filter-label\">{{filter.label}} <span class=\"delete-filter\" ng-if=\"filterOptions.enableDeleteFilter\" ng-click=\"deleteMe(filter)\"><i class=\"icon-custom icon-delete\" aria-hidden=\"true\"></i></span></label>\n\n    <pf-datepicker ng-if=\"filter.filtertype[0].name=='datepicker'\"\n                    options=\"multiSelectOptions\"\n                    selected-model=\"selectedOptions\"\n                    filtertype = \"filter.filtertype[0]\">\n    </pf-datepicker>\n\n    <div ng-dropdown-multiselect ng-if=\"filter.filtertype[0].name=='valueselect' && filter.filtertype[0].type=='multi'\"\n\n            options=\"$parent.multiSelectOptions\"\n            selected-model=\"$parent.selectedOptions\"\n            extra-settings=\"multiSelectSetting\"\n            events=\"{onItemSelect: onItemSelect}\"\n            translation-texts=\"{ buttonDefaultText: 'Filter By ' + filter.label + '', dynamicButtonTextSuffix: filter.label + '(s)'}\"\n            checkboxicons=\"true\" class=\"multiselect\">\n    </div>\n    <div ng-dropdown-multiselect ng-if=\"filter.filtertype[0].name=='valueselect' && filter.filtertype[0].type=='single'\"\n\n            options=\"$parent.multiSelectOptions\"\n            selected-model=\"$parent.selectedOptions\"\n            extra-settings=\"multiSelectSetting\"\n            events=\"{onItemSelect: onItemSelect}\"\n            translation-texts=\"{ buttonDefaultText: 'Filter By ' + filter.label + '', dynamicButtonTextSuffix: filter.label + '(s)'}\"\n            class=\"multiselect\">\n\n    </div>\n</div>\n";

/***/ }),
/* 151 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"modal-header\">\n    <h3 class=\"modal-title\" id=\"modal-title\">\n        Delete view\n        <i class=\"fa fa-times pull-right\" ng-click=\"closeModal()\" aria-hidden=\"true\" style=\"cursor: pointer; color: #8da1b4; margin: 0.3em; font-size:1.25rem;\"></i>\n    </h3>\n</div>\n<div class=\"modal-body\" id=\"modal-body\">\n    <div class=\"row\">\n        <div class=\"col-md-12 col-sm-12\">\n            <h6 class=\"status-text\">\n                Do you want to delete state ?\n            </h6>\n        </div>\n    </div>\n</div>\n<div class=\"modal-footer\">\n    <button class=\"btn btn-primary\" type=\"button\" ng-click=\"deleteStateFilter(); closeModal()\">Yes</button>\n    <button class=\"btn btn-secondary\" type=\"button\" ng-click=\"closeModal()\">No</button>\n</div>\n";

/***/ }),
/* 152 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"col-filter\">\n  <div class=\"box-col\">\n    <div class=\"filter-name-multiselect\" ng-if=\"!stateEditorFlag\">\n      <div ng-dropdown-multiselect=\"\"\n          options=\"savedStates\"\n          selected-model=\"selectedStateFilter\"\n          extra-settings=\"stateSingleSelectSetting\"\n          translation-texts=\"{ buttonDefaultText: 'Select or Add New'}\"\n          events=\"{onItemSelect: stateChanged}\"\n          class=\"multiselect\"\n          bold-diplay-value=\"true\">\n      </div>\n      <button class=\"btn btn-primary\"\n              ng-click=\"createNewStateFilter()\">\n        Create new view\n      </button>\n      <button class=\"btn btn-outline-primary\"\n              ng-if=\"isDefaultStateSelected === false\"\n              ng-click=\"setAsDefault()\">\n        Set as Default\n      </button>\n      <button class=\"btn btn-primary\"\n              ng-click=\"editViewFunction()\">\n        Edit View\n      </button>\n    </div>\n    <!-- createNewState() -->\n    <div class=\"new-filter-saveform\" ng-if=\"stateEditorFlag\">\n      <form ng-submit=\"createOrUpdateNewState()\">\n        <div class=\"new-filter-input-holder\">\n          <input type=\"text\"\n            class=\"form-control form-control-block\"\n            ng-model=\"newStateModel.NewStateName\"\n            placeholder=\"New State\"\n            ng-required=\"true\"\n            minlength=\"1\">\n        </div>\n        <div class=\"checkbox\">\n          <input id=\"box1\" type=\"checkbox\" name=\"name\" ng-model=\"newStateModel.setStateDefault\" ng-disabled=\"isDefaultStateSelected==true\">\n          <label for=\"box1\">Set as Default</label>\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary horizantal-margin\">\n          Save\n        </button>\n        <button type=\"button\" class=\"btn btn-outline-secondary\" ng-click=\"toggleStateEditor()\">\n          Cancel\n        </button>\n      </form>\n    </div>\n    <div class=\"delete-form\" ng-if=\"!stateEditorFlag\">\n      <span class=\"delete-filterset\" ng-if=\"isDefaultStateSelected==false\" ng-click=\"confirmDelete()\">\n        <i class=\"icon-custom icon-delete\" aria-hidden=\"true\"></i>\n      </span>\n    </div>\n  </div>\n\n</div>\n\n";

/***/ }),
/* 153 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"tblutil-container\" ng-if=\"showOptions.columnHideShow == true || showOptions.searchBox == true || showOptions.export == true\">\n    <div class=\"form-group txt-search\" ng-if=\"showOptions.searchBox\">\n        <input type=\"text\" ng-model=\"osi.filterValue\" ng-model-options=\"{debounce:1000}\" ng-change=\"refresh(osi.filterValue)\" class=\"form-control form-control-round\" placeholder=\"Search\">\n    </div>\n    <div class=\"btn-export\" ng-if=\"showOptions.export\">\n        <div class=\"dropdown export-dropdown\">\n            <button class=\"btn btn-outline-primary dropdown-toggle\" title=\"Export Data\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                Export\n            </button>\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n                <a class=\"dropdown-item\" ng-click=\"downloadReport('Excel')\" href=\"\">Excel</a>\n                <a class=\"dropdown-item\" ng-click=\"downloadReport('CSV')\" href=\"\">CSV</a>\n                <a class=\"dropdown-item\" ng-click=\"downloadReport('JSON')\" href=\"\">JSON</a>\n            </div>\n        </div>\n    </div>\n    <div ng-dropdown-multiselect\n            options=\"optionsToShow\"\n            selected-model=\"showThisOptions\"\n            extra-settings=\"multiSelectSetting\"\n            events=\"{onItemSelect: showThis}\"\n            checkboxicons=\"true\"\n            class=\"multiselect show-hide-btn\"\n            ng-if=\"showOptions.columnHideShow\"\n            title=\"Column Show or Hide\">\n    </div>\n    <div class=\"btn-refresh\" ng-if=\"showOptions.refreshBtn\">\n        <button class=\"btn btn-outline-primary\" title=\"Refresh Data\" ng-click=\"recallGridData()\">\n            <i class=\"icon-custom  icon-spinner\"></i>\n        </button>\n    </div>\n</div>";

/***/ }),
/* 154 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"ui-grid-top-panel\" style=\"text-align: center\">I am a Custom Grid Header</div>";

/***/ }),
/* 155 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"gridStyle\" >\n    <pf-grid-utils></pf-grid-utils>\n    <div ng-if=\"gridOptions.enableColumnReorderAttr && gridOptions.enableRowSelectionAttr && gridOptions.enableColumnResizeAttr && gridOptions.enableColumnTreeViewAttr && gridOptions.enablePaginationAttr === true\"\n         ui-grid=\"gridOptions\"\n         ui-grid-pagination\n         ui-grid-pinning\n         ui-grid-tree-view\n         ui-grid-edit\n         ui-grid-selection\n         ui-grid-move-columns\n         ui-grid-resize-columns\n         ui-grid-save-state\n         ui-grid-auto-resize>\n    </div>\n     <div ng-if=\"gridOptions.enableColumnReorderAttr && gridOptions.enableRowSelectionAttr === false && gridOptions.enableColumnTreeViewAttr && gridOptions.enableColumnResizeAttr && gridOptions.enablePaginationAttr === true\"\n         ui-grid=\"gridOptions\"\n         ui-grid-pagination\n         ui-grid-pinning\n         ui-grid-tree-view\n         ui-grid-edit\n         ui-grid-move-columns\n         ui-grid-resize-columns\n         ui-grid-save-state\n         ui-grid-auto-resize>\n    </div>\n    <div ng-if=\"gridOptions.enableColumnReorderAttr && gridOptions.enableRowSelectionAttr && gridOptions.enableColumnTreeViewAttr === false && gridOptions.enableColumnResizeAttr && gridOptions.enablePaginationAttr === true\"\n         ui-grid=\"gridOptions\"\n         ui-grid-pagination\n         ui-grid-pinning\n         ui-grid-edit\n         ui-grid-selection\n         ui-grid-move-columns\n         ui-grid-resize-columns\n         ui-grid-save-state\n         ui-grid-auto-resize>\n    </div>\n    <div ng-if=\"gridOptions.enableColumnReorderAttr && gridOptions.enableRowSelectionAttr === false && gridOptions.enableColumnTreeViewAttr === false && gridOptions.enableColumnResizeAttr && gridOptions.enablePaginationAttr === true\"\n         ui-grid=\"gridOptions\"\n         ui-grid-pagination\n         ui-grid-pinning\n         ui-grid-edit\n         ui-grid-move-columns\n         ui-grid-resize-columns\n         ui-grid-save-state\n         ui-grid-auto-resize>\n    </div>\n    <div ng-if=\"gridOptions.enableColumnReorderAttr === false && gridOptions.enableRowSelectionAttr === false && gridOptions.enableColumnTreeViewAttr === false && gridOptions.enableColumnResizeAttr && gridOptions.enablePaginationAttr === true\"\n         ui-grid=\"gridOptions\"\n         ui-grid-pagination\n         ui-grid-pinning\n         ui-grid-edit\n         ui-grid-resize-columns\n         ui-grid-save-state\n         ui-grid-auto-resize>\n    </div>\n    <div ng-if=\"gridOptions.enableColumnReorderAttr === false && gridOptions.enableRowSelectionAttr === false && gridOptions.enableColumnResizeAttr === false && gridOptions.enableColumnTreeViewAttr === false && gridOptions.enablePaginationAttr === true\"\n         ui-grid=\"gridOptions\"\n         ui-grid-pagination\n         ui-grid-pinning\n         ui-grid-edit\n         ui-grid-save-state\n         ui-grid-auto-resize>\n    </div>\n    <div ng-if=\"gridOptions.enableColumnReorderAttr === false && gridOptions.enableRowSelectionAttr === false && gridOptions.enableColumnResizeAttr === false && gridOptions.enableColumnTreeViewAttr === false && gridOptions.enablePaginationAttr === false\"\n        ui-grid=\"gridOptions\" ui-grid-pinning ui-grid-edit ui-grid-auto-resize>\n    </div>\n</div>\n";

/***/ }),
/* 156 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"col-filter\">\n    <p class=\"lbl-groupby\">Group By</p>\n    <div class=\"col-filter\" ng-repeat=\"x in _groupByLvl track by $index\">\n        <div ng-dropdown-multiselect\n            options=\"_options[$index]\"\n            selected-model=\"_selModel[$index]\"\n            extra-settings=\"singleSelectSetting\"\n            translation-texts=\"{ buttonDefaultText: 'Group By'}\"\n            class=\"multiselect\"\n            events=\"{onItemSelect: groupItemChanged}\"\n            idx=\"{{$index}}\">\n        </div>\n    </div>\n<div>\n";

/***/ })
/******/ ]);