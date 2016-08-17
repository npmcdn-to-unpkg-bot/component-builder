/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/public/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!******************!*\
  !*** multi main ***!
  \******************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./src/index.jsx */1);


/***/ },
/* 1 */
/*!***********************!*\
  !*** ./src/index.jsx ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 3);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 4);
	
	var _redux = __webpack_require__(/*! redux */ 12);
	
	var _App = __webpack_require__(/*! ./App */ 28);
	
	var _App2 = _interopRequireDefault(_App);
	
	var _reducers = __webpack_require__(/*! ./reducers */ 42);
	
	var _reducers2 = _interopRequireDefault(_reducers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//const store = createStore(reducer);
	/*jshint esversion:6 */
	var store = (0, _redux.createStore)(_reducers2.default, window.devToolsExtension && window.devToolsExtension());
	
	_reactDom2.default.render(_react2.default.createElement(
	  _reactRedux.Provider,
	  { store: store },
	  _react2.default.createElement(_App2.default, null)
	), document.getElementById('root'));

/***/ },
/* 2 */
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 3 */
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 4 */
/*!************************************!*\
  !*** ./~/react-redux/lib/index.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.connect = exports.Provider = undefined;
	
	var _Provider = __webpack_require__(/*! ./components/Provider */ 5);
	
	var _Provider2 = _interopRequireDefault(_Provider);
	
	var _connect = __webpack_require__(/*! ./components/connect */ 9);
	
	var _connect2 = _interopRequireDefault(_connect);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports.Provider = _Provider2["default"];
	exports.connect = _connect2["default"];

/***/ },
/* 5 */
/*!**************************************************!*\
  !*** ./~/react-redux/lib/components/Provider.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports["default"] = undefined;
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _storeShape = __webpack_require__(/*! ../utils/storeShape */ 7);
	
	var _storeShape2 = _interopRequireDefault(_storeShape);
	
	var _warning = __webpack_require__(/*! ../utils/warning */ 8);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var didWarnAboutReceivingStore = false;
	function warnAboutReceivingStore() {
	  if (didWarnAboutReceivingStore) {
	    return;
	  }
	  didWarnAboutReceivingStore = true;
	
	  (0, _warning2["default"])('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
	}
	
	var Provider = function (_Component) {
	  _inherits(Provider, _Component);
	
	  Provider.prototype.getChildContext = function getChildContext() {
	    return { store: this.store };
	  };
	
	  function Provider(props, context) {
	    _classCallCheck(this, Provider);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
	
	    _this.store = props.store;
	    return _this;
	  }
	
	  Provider.prototype.render = function render() {
	    var children = this.props.children;
	
	    return _react.Children.only(children);
	  };
	
	  return Provider;
	}(_react.Component);
	
	exports["default"] = Provider;
	
	if (process.env.NODE_ENV !== 'production') {
	  Provider.prototype.componentWillReceiveProps = function (nextProps) {
	    var store = this.store;
	    var nextStore = nextProps.store;
	
	    if (store !== nextStore) {
	      warnAboutReceivingStore();
	    }
	  };
	}
	
	Provider.propTypes = {
	  store: _storeShape2["default"].isRequired,
	  children: _react.PropTypes.element.isRequired
	};
	Provider.childContextTypes = {
	  store: _storeShape2["default"].isRequired
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 6)))

/***/ },
/* 6 */
/*!******************************!*\
  !*** ./~/process/browser.js ***!
  \******************************/
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	(function () {
	    try {
	        cachedSetTimeout = setTimeout;
	    } catch (e) {
	        cachedSetTimeout = function () {
	            throw new Error('setTimeout is not defined');
	        }
	    }
	    try {
	        cachedClearTimeout = clearTimeout;
	    } catch (e) {
	        cachedClearTimeout = function () {
	            throw new Error('clearTimeout is not defined');
	        }
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 7 */
/*!***********************************************!*\
  !*** ./~/react-redux/lib/utils/storeShape.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(/*! react */ 2);
	
	exports["default"] = _react.PropTypes.shape({
	  subscribe: _react.PropTypes.func.isRequired,
	  dispatch: _react.PropTypes.func.isRequired,
	  getState: _react.PropTypes.func.isRequired
	});

/***/ },
/* 8 */
/*!********************************************!*\
  !*** ./~/react-redux/lib/utils/warning.js ***!
  \********************************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports["default"] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that you can use this stack
	    // to find the callsite that caused this warning to fire.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 9 */
/*!*************************************************!*\
  !*** ./~/react-redux/lib/components/connect.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	exports["default"] = connect;
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _storeShape = __webpack_require__(/*! ../utils/storeShape */ 7);
	
	var _storeShape2 = _interopRequireDefault(_storeShape);
	
	var _shallowEqual = __webpack_require__(/*! ../utils/shallowEqual */ 10);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	var _wrapActionCreators = __webpack_require__(/*! ../utils/wrapActionCreators */ 11);
	
	var _wrapActionCreators2 = _interopRequireDefault(_wrapActionCreators);
	
	var _warning = __webpack_require__(/*! ../utils/warning */ 8);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _isPlainObject = __webpack_require__(/*! lodash/isPlainObject */ 14);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _hoistNonReactStatics = __webpack_require__(/*! hoist-non-react-statics */ 26);
	
	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);
	
	var _invariant = __webpack_require__(/*! invariant */ 27);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var defaultMapStateToProps = function defaultMapStateToProps(state) {
	  return {};
	}; // eslint-disable-line no-unused-vars
	var defaultMapDispatchToProps = function defaultMapDispatchToProps(dispatch) {
	  return { dispatch: dispatch };
	};
	var defaultMergeProps = function defaultMergeProps(stateProps, dispatchProps, parentProps) {
	  return _extends({}, parentProps, stateProps, dispatchProps);
	};
	
	function getDisplayName(WrappedComponent) {
	  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	}
	
	var errorObject = { value: null };
	function tryCatch(fn, ctx) {
	  try {
	    return fn.apply(ctx);
	  } catch (e) {
	    errorObject.value = e;
	    return errorObject;
	  }
	}
	
	// Helps track hot reloading.
	var nextVersion = 0;
	
	function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
	  var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
	
	  var shouldSubscribe = Boolean(mapStateToProps);
	  var mapState = mapStateToProps || defaultMapStateToProps;
	
	  var mapDispatch = undefined;
	  if (typeof mapDispatchToProps === 'function') {
	    mapDispatch = mapDispatchToProps;
	  } else if (!mapDispatchToProps) {
	    mapDispatch = defaultMapDispatchToProps;
	  } else {
	    mapDispatch = (0, _wrapActionCreators2["default"])(mapDispatchToProps);
	  }
	
	  var finalMergeProps = mergeProps || defaultMergeProps;
	  var _options$pure = options.pure;
	  var pure = _options$pure === undefined ? true : _options$pure;
	  var _options$withRef = options.withRef;
	  var withRef = _options$withRef === undefined ? false : _options$withRef;
	
	  var checkMergedEquals = pure && finalMergeProps !== defaultMergeProps;
	
	  // Helps track hot reloading.
	  var version = nextVersion++;
	
	  return function wrapWithConnect(WrappedComponent) {
	    var connectDisplayName = 'Connect(' + getDisplayName(WrappedComponent) + ')';
	
	    function checkStateShape(props, methodName) {
	      if (!(0, _isPlainObject2["default"])(props)) {
	        (0, _warning2["default"])(methodName + '() in ' + connectDisplayName + ' must return a plain object. ' + ('Instead received ' + props + '.'));
	      }
	    }
	
	    function computeMergedProps(stateProps, dispatchProps, parentProps) {
	      var mergedProps = finalMergeProps(stateProps, dispatchProps, parentProps);
	      if (process.env.NODE_ENV !== 'production') {
	        checkStateShape(mergedProps, 'mergeProps');
	      }
	      return mergedProps;
	    }
	
	    var Connect = function (_Component) {
	      _inherits(Connect, _Component);
	
	      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
	        return !pure || this.haveOwnPropsChanged || this.hasStoreStateChanged;
	      };
	
	      function Connect(props, context) {
	        _classCallCheck(this, Connect);
	
	        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
	
	        _this.version = version;
	        _this.store = props.store || context.store;
	
	        (0, _invariant2["default"])(_this.store, 'Could not find "store" in either the context or ' + ('props of "' + connectDisplayName + '". ') + 'Either wrap the root component in a <Provider>, ' + ('or explicitly pass "store" as a prop to "' + connectDisplayName + '".'));
	
	        var storeState = _this.store.getState();
	        _this.state = { storeState: storeState };
	        _this.clearCache();
	        return _this;
	      }
	
	      Connect.prototype.computeStateProps = function computeStateProps(store, props) {
	        if (!this.finalMapStateToProps) {
	          return this.configureFinalMapState(store, props);
	        }
	
	        var state = store.getState();
	        var stateProps = this.doStatePropsDependOnOwnProps ? this.finalMapStateToProps(state, props) : this.finalMapStateToProps(state);
	
	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(stateProps, 'mapStateToProps');
	        }
	        return stateProps;
	      };
	
	      Connect.prototype.configureFinalMapState = function configureFinalMapState(store, props) {
	        var mappedState = mapState(store.getState(), props);
	        var isFactory = typeof mappedState === 'function';
	
	        this.finalMapStateToProps = isFactory ? mappedState : mapState;
	        this.doStatePropsDependOnOwnProps = this.finalMapStateToProps.length !== 1;
	
	        if (isFactory) {
	          return this.computeStateProps(store, props);
	        }
	
	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(mappedState, 'mapStateToProps');
	        }
	        return mappedState;
	      };
	
	      Connect.prototype.computeDispatchProps = function computeDispatchProps(store, props) {
	        if (!this.finalMapDispatchToProps) {
	          return this.configureFinalMapDispatch(store, props);
	        }
	
	        var dispatch = store.dispatch;
	
	        var dispatchProps = this.doDispatchPropsDependOnOwnProps ? this.finalMapDispatchToProps(dispatch, props) : this.finalMapDispatchToProps(dispatch);
	
	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(dispatchProps, 'mapDispatchToProps');
	        }
	        return dispatchProps;
	      };
	
	      Connect.prototype.configureFinalMapDispatch = function configureFinalMapDispatch(store, props) {
	        var mappedDispatch = mapDispatch(store.dispatch, props);
	        var isFactory = typeof mappedDispatch === 'function';
	
	        this.finalMapDispatchToProps = isFactory ? mappedDispatch : mapDispatch;
	        this.doDispatchPropsDependOnOwnProps = this.finalMapDispatchToProps.length !== 1;
	
	        if (isFactory) {
	          return this.computeDispatchProps(store, props);
	        }
	
	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(mappedDispatch, 'mapDispatchToProps');
	        }
	        return mappedDispatch;
	      };
	
	      Connect.prototype.updateStatePropsIfNeeded = function updateStatePropsIfNeeded() {
	        var nextStateProps = this.computeStateProps(this.store, this.props);
	        if (this.stateProps && (0, _shallowEqual2["default"])(nextStateProps, this.stateProps)) {
	          return false;
	        }
	
	        this.stateProps = nextStateProps;
	        return true;
	      };
	
	      Connect.prototype.updateDispatchPropsIfNeeded = function updateDispatchPropsIfNeeded() {
	        var nextDispatchProps = this.computeDispatchProps(this.store, this.props);
	        if (this.dispatchProps && (0, _shallowEqual2["default"])(nextDispatchProps, this.dispatchProps)) {
	          return false;
	        }
	
	        this.dispatchProps = nextDispatchProps;
	        return true;
	      };
	
	      Connect.prototype.updateMergedPropsIfNeeded = function updateMergedPropsIfNeeded() {
	        var nextMergedProps = computeMergedProps(this.stateProps, this.dispatchProps, this.props);
	        if (this.mergedProps && checkMergedEquals && (0, _shallowEqual2["default"])(nextMergedProps, this.mergedProps)) {
	          return false;
	        }
	
	        this.mergedProps = nextMergedProps;
	        return true;
	      };
	
	      Connect.prototype.isSubscribed = function isSubscribed() {
	        return typeof this.unsubscribe === 'function';
	      };
	
	      Connect.prototype.trySubscribe = function trySubscribe() {
	        if (shouldSubscribe && !this.unsubscribe) {
	          this.unsubscribe = this.store.subscribe(this.handleChange.bind(this));
	          this.handleChange();
	        }
	      };
	
	      Connect.prototype.tryUnsubscribe = function tryUnsubscribe() {
	        if (this.unsubscribe) {
	          this.unsubscribe();
	          this.unsubscribe = null;
	        }
	      };
	
	      Connect.prototype.componentDidMount = function componentDidMount() {
	        this.trySubscribe();
	      };
	
	      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        if (!pure || !(0, _shallowEqual2["default"])(nextProps, this.props)) {
	          this.haveOwnPropsChanged = true;
	        }
	      };
	
	      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
	        this.tryUnsubscribe();
	        this.clearCache();
	      };
	
	      Connect.prototype.clearCache = function clearCache() {
	        this.dispatchProps = null;
	        this.stateProps = null;
	        this.mergedProps = null;
	        this.haveOwnPropsChanged = true;
	        this.hasStoreStateChanged = true;
	        this.haveStatePropsBeenPrecalculated = false;
	        this.statePropsPrecalculationError = null;
	        this.renderedElement = null;
	        this.finalMapDispatchToProps = null;
	        this.finalMapStateToProps = null;
	      };
	
	      Connect.prototype.handleChange = function handleChange() {
	        if (!this.unsubscribe) {
	          return;
	        }
	
	        var storeState = this.store.getState();
	        var prevStoreState = this.state.storeState;
	        if (pure && prevStoreState === storeState) {
	          return;
	        }
	
	        if (pure && !this.doStatePropsDependOnOwnProps) {
	          var haveStatePropsChanged = tryCatch(this.updateStatePropsIfNeeded, this);
	          if (!haveStatePropsChanged) {
	            return;
	          }
	          if (haveStatePropsChanged === errorObject) {
	            this.statePropsPrecalculationError = errorObject.value;
	          }
	          this.haveStatePropsBeenPrecalculated = true;
	        }
	
	        this.hasStoreStateChanged = true;
	        this.setState({ storeState: storeState });
	      };
	
	      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
	        (0, _invariant2["default"])(withRef, 'To access the wrapped instance, you need to specify ' + '{ withRef: true } as the fourth argument of the connect() call.');
	
	        return this.refs.wrappedInstance;
	      };
	
	      Connect.prototype.render = function render() {
	        var haveOwnPropsChanged = this.haveOwnPropsChanged;
	        var hasStoreStateChanged = this.hasStoreStateChanged;
	        var haveStatePropsBeenPrecalculated = this.haveStatePropsBeenPrecalculated;
	        var statePropsPrecalculationError = this.statePropsPrecalculationError;
	        var renderedElement = this.renderedElement;
	
	        this.haveOwnPropsChanged = false;
	        this.hasStoreStateChanged = false;
	        this.haveStatePropsBeenPrecalculated = false;
	        this.statePropsPrecalculationError = null;
	
	        if (statePropsPrecalculationError) {
	          throw statePropsPrecalculationError;
	        }
	
	        var shouldUpdateStateProps = true;
	        var shouldUpdateDispatchProps = true;
	        if (pure && renderedElement) {
	          shouldUpdateStateProps = hasStoreStateChanged || haveOwnPropsChanged && this.doStatePropsDependOnOwnProps;
	          shouldUpdateDispatchProps = haveOwnPropsChanged && this.doDispatchPropsDependOnOwnProps;
	        }
	
	        var haveStatePropsChanged = false;
	        var haveDispatchPropsChanged = false;
	        if (haveStatePropsBeenPrecalculated) {
	          haveStatePropsChanged = true;
	        } else if (shouldUpdateStateProps) {
	          haveStatePropsChanged = this.updateStatePropsIfNeeded();
	        }
	        if (shouldUpdateDispatchProps) {
	          haveDispatchPropsChanged = this.updateDispatchPropsIfNeeded();
	        }
	
	        var haveMergedPropsChanged = true;
	        if (haveStatePropsChanged || haveDispatchPropsChanged || haveOwnPropsChanged) {
	          haveMergedPropsChanged = this.updateMergedPropsIfNeeded();
	        } else {
	          haveMergedPropsChanged = false;
	        }
	
	        if (!haveMergedPropsChanged && renderedElement) {
	          return renderedElement;
	        }
	
	        if (withRef) {
	          this.renderedElement = (0, _react.createElement)(WrappedComponent, _extends({}, this.mergedProps, {
	            ref: 'wrappedInstance'
	          }));
	        } else {
	          this.renderedElement = (0, _react.createElement)(WrappedComponent, this.mergedProps);
	        }
	
	        return this.renderedElement;
	      };
	
	      return Connect;
	    }(_react.Component);
	
	    Connect.displayName = connectDisplayName;
	    Connect.WrappedComponent = WrappedComponent;
	    Connect.contextTypes = {
	      store: _storeShape2["default"]
	    };
	    Connect.propTypes = {
	      store: _storeShape2["default"]
	    };
	
	    if (process.env.NODE_ENV !== 'production') {
	      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
	        if (this.version === version) {
	          return;
	        }
	
	        // We are hot reloading!
	        this.version = version;
	        this.trySubscribe();
	        this.clearCache();
	      };
	    }
	
	    return (0, _hoistNonReactStatics2["default"])(Connect, WrappedComponent);
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 6)))

/***/ },
/* 10 */
/*!*************************************************!*\
  !*** ./~/react-redux/lib/utils/shallowEqual.js ***!
  \*************************************************/
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = shallowEqual;
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }
	
	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);
	
	  if (keysA.length !== keysB.length) {
	    return false;
	  }
	
	  // Test for A's keys different from B.
	  var hasOwn = Object.prototype.hasOwnProperty;
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }
	
	  return true;
	}

/***/ },
/* 11 */
/*!*******************************************************!*\
  !*** ./~/react-redux/lib/utils/wrapActionCreators.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports["default"] = wrapActionCreators;
	
	var _redux = __webpack_require__(/*! redux */ 12);
	
	function wrapActionCreators(actionCreators) {
	  return function (dispatch) {
	    return (0, _redux.bindActionCreators)(actionCreators, dispatch);
	  };
	}

/***/ },
/* 12 */
/*!******************************!*\
  !*** ./~/redux/lib/index.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;
	
	var _createStore = __webpack_require__(/*! ./createStore */ 13);
	
	var _createStore2 = _interopRequireDefault(_createStore);
	
	var _combineReducers = __webpack_require__(/*! ./combineReducers */ 21);
	
	var _combineReducers2 = _interopRequireDefault(_combineReducers);
	
	var _bindActionCreators = __webpack_require__(/*! ./bindActionCreators */ 23);
	
	var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);
	
	var _applyMiddleware = __webpack_require__(/*! ./applyMiddleware */ 24);
	
	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);
	
	var _compose = __webpack_require__(/*! ./compose */ 25);
	
	var _compose2 = _interopRequireDefault(_compose);
	
	var _warning = __webpack_require__(/*! ./utils/warning */ 22);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	/*
	* This is a dummy function to check if the function name has been altered by minification.
	* If the function has been minified and NODE_ENV !== 'production', warn the user.
	*/
	function isCrushed() {}
	
	if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
	  (0, _warning2["default"])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
	}
	
	exports.createStore = _createStore2["default"];
	exports.combineReducers = _combineReducers2["default"];
	exports.bindActionCreators = _bindActionCreators2["default"];
	exports.applyMiddleware = _applyMiddleware2["default"];
	exports.compose = _compose2["default"];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 6)))

/***/ },
/* 13 */
/*!************************************!*\
  !*** ./~/redux/lib/createStore.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports["default"] = createStore;
	
	var _isPlainObject = __webpack_require__(/*! lodash/isPlainObject */ 14);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _symbolObservable = __webpack_require__(/*! symbol-observable */ 19);
	
	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = exports.ActionTypes = {
	  INIT: '@@redux/INIT'
	};
	
	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [initialState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @param {Function} enhancer The store enhancer. You may optionally specify it
	 * to enhance the store with third-party capabilities such as middleware,
	 * time travel, persistence, etc. The only store enhancer that ships with Redux
	 * is `applyMiddleware()`.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */
	function createStore(reducer, initialState, enhancer) {
	  var _ref2;
	
	  if (typeof initialState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = initialState;
	    initialState = undefined;
	  }
	
	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }
	
	    return enhancer(createStore)(reducer, initialState);
	  }
	
	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }
	
	  var currentReducer = reducer;
	  var currentState = initialState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;
	
	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }
	
	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }
	
	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }
	
	    var isSubscribed = true;
	
	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);
	
	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }
	
	      isSubscribed = false;
	
	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }
	
	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!(0, _isPlainObject2["default"])(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }
	
	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }
	
	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }
	
	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }
	
	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      listeners[i]();
	    }
	
	    return action;
	  }
	
	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }
	
	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }
	
	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/zenparsing/es-observable
	   */
	  function observable() {
	    var _ref;
	
	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */
	
	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object') {
	          throw new TypeError('Expected the observer to be an object.');
	        }
	
	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }
	
	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return { unsubscribe: unsubscribe };
	      }
	    }, _ref[_symbolObservable2["default"]] = function () {
	      return this;
	    }, _ref;
	  }
	
	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });
	
	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[_symbolObservable2["default"]] = observable, _ref2;
	}

/***/ },
/* 14 */
/*!***********************************!*\
  !*** ./~/lodash/isPlainObject.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	var getPrototype = __webpack_require__(/*! ./_getPrototype */ 15),
	    isHostObject = __webpack_require__(/*! ./_isHostObject */ 17),
	    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 18);
	
	/** `Object#toString` result references. */
	var objectTag = '[object Object]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) ||
	      objectToString.call(value) != objectTag || isHostObject(value)) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return (typeof Ctor == 'function' &&
	    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
	}
	
	module.exports = isPlainObject;


/***/ },
/* 15 */
/*!***********************************!*\
  !*** ./~/lodash/_getPrototype.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(/*! ./_overArg */ 16);
	
	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);
	
	module.exports = getPrototype;


/***/ },
/* 16 */
/*!******************************!*\
  !*** ./~/lodash/_overArg.js ***!
  \******************************/
/***/ function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}
	
	module.exports = overArg;


/***/ },
/* 17 */
/*!***********************************!*\
  !*** ./~/lodash/_isHostObject.js ***!
  \***********************************/
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}
	
	module.exports = isHostObject;


/***/ },
/* 18 */
/*!**********************************!*\
  !*** ./~/lodash/isObjectLike.js ***!
  \**********************************/
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },
/* 19 */
/*!**************************************!*\
  !*** ./~/symbol-observable/index.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/* global window */
	'use strict';
	
	module.exports = __webpack_require__(/*! ./ponyfill */ 20)(global || window || this);
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 20 */
/*!*****************************************!*\
  !*** ./~/symbol-observable/ponyfill.js ***!
  \*****************************************/
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function symbolObservablePonyfill(root) {
		var result;
		var Symbol = root.Symbol;
	
		if (typeof Symbol === 'function') {
			if (Symbol.observable) {
				result = Symbol.observable;
			} else {
				result = Symbol('observable');
				Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}
	
		return result;
	};


/***/ },
/* 21 */
/*!****************************************!*\
  !*** ./~/redux/lib/combineReducers.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports["default"] = combineReducers;
	
	var _createStore = __webpack_require__(/*! ./createStore */ 13);
	
	var _isPlainObject = __webpack_require__(/*! lodash/isPlainObject */ 14);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _warning = __webpack_require__(/*! ./utils/warning */ 22);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';
	
	  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
	}
	
	function getUnexpectedStateShapeWarningMessage(inputState, reducers, action) {
	  var reducerKeys = Object.keys(reducers);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'initialState argument passed to createStore' : 'previous state received by the reducer';
	
	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }
	
	  if (!(0, _isPlainObject2["default"])(inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }
	
	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return !reducers.hasOwnProperty(key);
	  });
	
	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}
	
	function assertReducerSanity(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });
	
	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
	    }
	
	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
	    }
	  });
	}
	
	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];
	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  var finalReducerKeys = Object.keys(finalReducers);
	
	  var sanityError;
	  try {
	    assertReducerSanity(finalReducers);
	  } catch (e) {
	    sanityError = e;
	  }
	
	  return function combination() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];
	
	    if (sanityError) {
	      throw sanityError;
	    }
	
	    if (process.env.NODE_ENV !== 'production') {
	      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action);
	      if (warningMessage) {
	        (0, _warning2["default"])(warningMessage);
	      }
	    }
	
	    var hasChanged = false;
	    var nextState = {};
	    for (var i = 0; i < finalReducerKeys.length; i++) {
	      var key = finalReducerKeys[i];
	      var reducer = finalReducers[key];
	      var previousStateForKey = state[key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(key, action);
	        throw new Error(errorMessage);
	      }
	      nextState[key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    return hasChanged ? nextState : state;
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 6)))

/***/ },
/* 22 */
/*!**************************************!*\
  !*** ./~/redux/lib/utils/warning.js ***!
  \**************************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports["default"] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 23 */
/*!*******************************************!*\
  !*** ./~/redux/lib/bindActionCreators.js ***!
  \*******************************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports["default"] = bindActionCreators;
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}
	
	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }
	
	  if (typeof actionCreators !== 'object' || actionCreators === null) {
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }
	
	  var keys = Object.keys(actionCreators);
	  var boundActionCreators = {};
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var actionCreator = actionCreators[key];
	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }
	  return boundActionCreators;
	}

/***/ },
/* 24 */
/*!****************************************!*\
  !*** ./~/redux/lib/applyMiddleware.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports["default"] = applyMiddleware;
	
	var _compose = __webpack_require__(/*! ./compose */ 25);
	
	var _compose2 = _interopRequireDefault(_compose);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }
	
	  return function (createStore) {
	    return function (reducer, initialState, enhancer) {
	      var store = createStore(reducer, initialState, enhancer);
	      var _dispatch = store.dispatch;
	      var chain = [];
	
	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2["default"].apply(undefined, chain)(store.dispatch);
	
	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

/***/ },
/* 25 */
/*!********************************!*\
  !*** ./~/redux/lib/compose.js ***!
  \********************************/
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = compose;
	/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */
	
	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }
	
	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  } else {
	    var _ret = function () {
	      var last = funcs[funcs.length - 1];
	      var rest = funcs.slice(0, -1);
	      return {
	        v: function v() {
	          return rest.reduceRight(function (composed, f) {
	            return f(composed);
	          }, last.apply(undefined, arguments));
	        }
	      };
	    }();
	
	    if (typeof _ret === "object") return _ret.v;
	  }
	}

/***/ },
/* 26 */
/*!********************************************!*\
  !*** ./~/hoist-non-react-statics/index.js ***!
  \********************************************/
/***/ function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';
	
	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};
	
	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};
	
	var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';
	
	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	        var keys = Object.getOwnPropertyNames(sourceComponent);
	
	        /* istanbul ignore else */
	        if (isGetOwnPropertySymbolsAvailable) {
	            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
	        }
	
	        for (var i = 0; i < keys.length; ++i) {
	            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
	                try {
	                    targetComponent[keys[i]] = sourceComponent[keys[i]];
	                } catch (error) {
	
	                }
	            }
	        }
	    }
	
	    return targetComponent;
	};


/***/ },
/* 27 */
/*!********************************!*\
  !*** ./~/invariant/browser.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};
	
	module.exports = invariant;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 6)))

/***/ },
/* 28 */
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _compmenutree = __webpack_require__(/*! ./components/compmenutree */ 29);
	
	var _compmenutree2 = _interopRequireDefault(_compmenutree);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*jshint esversion:6 */
	
	
	var App = function (_Component) {
	  _inherits(App, _Component);
	
	  function App(props) {
	    _classCallCheck(this, App);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));
	  }
	
	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_compmenutree2.default, null);
	    }
	  }]);
	
	  return App;
	}(_react.Component);
	
	exports.default = App;

/***/ },
/* 29 */
/*!*****************************************!*\
  !*** ./src/components/compmenutree.jsx ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 4);
	
	var _dirfiles = __webpack_require__(/*! ../actions/dirfiles */ 30);
	
	var dirFileActionCreators = _interopRequireWildcard(_dirfiles);
	
	var _componentswitch = __webpack_require__(/*! ../actions/componentswitch */ 31);
	
	var compoActionCreators = _interopRequireWildcard(_componentswitch);
	
	var _redux = __webpack_require__(/*! redux */ 12);
	
	var _getfilejsx = __webpack_require__(/*! ./getfilejsx */ 32);
	
	var _getfilejsx2 = _interopRequireDefault(_getfilejsx);
	
	var _getsymjsx = __webpack_require__(/*! ./getsymjsx */ 33);
	
	var _getsymjsx2 = _interopRequireDefault(_getsymjsx);
	
	var _getdirclosedjsx = __webpack_require__(/*! ./getdirclosedjsx */ 34);
	
	var _getdirclosedjsx2 = _interopRequireDefault(_getdirclosedjsx);
	
	var _getdiropenJSX = __webpack_require__(/*! ./getdiropenJSX */ 35);
	
	var _getdiropenJSX2 = _interopRequireDefault(_getdiropenJSX);
	
	var _menutree = __webpack_require__(/*! ../wombles/menutree */ 36);
	
	var _menutree2 = _interopRequireDefault(_menutree);
	
	var _drivemenu = __webpack_require__(/*! ./drivemenu */ 38);
	
	var _drivemenu2 = _interopRequireDefault(_drivemenu);
	
	var _componentswitch2 = __webpack_require__(/*! ./componentswitch */ 40);
	
	var _componentswitch3 = _interopRequireDefault(_componentswitch2);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*jshint esversion:6 */
	
	
	var CompMenuTree = function (_Component) {
	  _inherits(CompMenuTree, _Component);
	
	  function CompMenuTree(props) {
	    _classCallCheck(this, CompMenuTree);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CompMenuTree).call(this, props));
	
	    _this.url = 'files';
	
	    _this.doChangeDir = function (e) {
	      return _this._doChangeDir(e);
	    };
	    _this.getDir = function (obj, index) {
	      return _this._getDir(obj, index);
	    };
	    _this.getFile = function (obj, index) {
	      return _this._getFile(obj, index);
	    };
	    _this.getJSFile = function (obj, index) {
	      return _this._getJSFile(obj, index);
	    };
	    _this.handleMenuClick = function (event) {
	      return _this._handleMenuClick(event);
	    };
	    _this.handleChecked = function (event) {
	      return _this._handleChecked(event);
	    };
	    _this.handleDirPath = function (e) {
	      return _this._handleDirPath(e);
	    };
	    _this.getDirList = function (s) {
	      return _this._getDirList(s);
	    };
	    _this.getLines = function (p) {
	      return _this._getLines(p);
	    };
	    _this.reqServer = function (i) {
	      return _this._reqServer(i);
	    };
	    _this.resServer = function (p) {
	      return _this._resServer(p);
	    };
	    _this.setDirLoc = function () {
	      return _this._setDirLoc();
	    };
	    return _this;
	  }
	
	  _createClass(CompMenuTree, [{
	    key: 'render',
	    value: function render() {
	      var dir = this.props.files.startDir;
	      //<DriveMenu />
	      if (this.props.files.filedir.length === 0) {
	        return _react2.default.createElement(
	          'div',
	          { className: 'menutree clearfix' },
	          'Loading...'
	        );
	      } else {
	        return _react2.default.createElement(
	          'div',
	          { id: 'wrapper', className: 'clearfix' },
	          _react2.default.createElement(
	            'div',
	            { id: 'leftcol' },
	            _react2.default.createElement('input', { type: 'text', id: 'dirLoc', name: 'dirLoc', value: this.props.files.startDirPath, size: '60', onChange: this.handleDirPath }),
	            _react2.default.createElement('input', { type: 'button', id: 'chgDir', name: 'chgDir', value: 'Change Directory', onClick: this.doChangeDir }),
	            _react2.default.createElement(
	              'ul',
	              { className: 'menutree' },
	              this.getLines([0])
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { id: 'rightcol' },
	            _react2.default.createElement(_componentswitch3.default, null)
	          )
	        );
	      }
	    }
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      //this.setDirLoc();
	      //this.props.dirfilesActions.changeOS(menuTree.getSlash(this.props.files.filesys));
	      //console.dir(this.props);
	      this.props.dirfilesActions.setFileDir(_menutree2.default.getRoot(this.props.files.startDirPath, this.props.files.startDir));
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      //this.props.dirfilesActions.setFileDir(menuTree.getRoot(this.props.files.startDirPath,this.props.files.startDir));
	
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps, prevState) {
	      if (prevProps.files.filedir.length === 0 && this.props.files.filedir.length === 1) {
	        this.reqServer('0');
	      }
	
	      if (prevProps.files.startDir !== this.props.files.startDir) {
	        this.props.dirfilesActions.setFileDir(_menutree2.default.getRoot(this.props.files.startDirPath, this.props.files.startDir));
	      }
	    }
	  }, {
	    key: '_setDirLoc',
	    value: function _setDirLoc() {
	      var p = this.props.files;
	      var dir = p.startDirPath.split(p.slash);
	      dir = dir[dir.length - 1];
	      this.props.dirfilesActions.changeDir(dir);
	    }
	  }, {
	    key: '_handleMenuClick',
	    value: function _handleMenuClick(event) {
	      event.preventDefault();
	      var str, id, compo, arr, name;
	      var filedir = this.props.files.filedir;
	      str = _menutree2.default.stripPrefix(event.target.id, this.props.files.idPrefix);
	      arr = str.split('_');
	      compo = arr[0];
	      id = arr[1];
	      name = filedir[id].path + this.props.files.slash + filedir[id].name;
	      //console.log('compo: ' +compo);
	      //console.log('name: ' +name);
	      this.props.compoActions.setComponent(compo, name);
	
	      /*
	      return {
	      name: o['n'],
	      level: getLevel(parent.level),
	      parent: o['p'],
	      type: 'F',
	      path: getPath(parent,os),
	      extension: o['e']
	      };
	      */
	      /*
	      var filedir = this.props.files.filedir;
	      filedir[id].open = !filedir[id].open;
	      this.props.dirfilesActions.setFileDir(filedir);
	      if(filedir[id].open && !filedir[id].loaded){
	        this.reqServer(id);
	      }
	      */
	    }
	  }, {
	    key: '_handleChecked',
	    value: function _handleChecked(event) {
	      event.preventDefault();
	      var id = _menutree2.default.stripPrefix(event.target.id, this.props.files.idPrefix);
	      var filedir = this.props.files.filedir;
	      filedir[id].open = !filedir[id].open;
	      this.props.dirfilesActions.setFileDir(filedir);
	      if (filedir[id].open && !filedir[id].loaded) {
	        this.reqServer(id);
	      }
	    }
	  }, {
	    key: '_handleDirPath',
	    value: function _handleDirPath(e) {
	      e.preventDefault();
	      this.props.dirfilesActions.changePath(e.target.value);
	    }
	  }, {
	    key: '_doChangeDir',
	    value: function _doChangeDir(e) {
	      e.preventDefault();
	      this.setDirLoc();
	    }
	  }, {
	    key: '_reqServer',
	    value: function _reqServer(i) {
	      var p = this.props.files;
	      var sReq = this.url;
	      sReq += '?dir=' + _menutree2.default.getPath(p.filedir[i], p.slash);
	      sReq += '&index=' + i;
	      Cruyff.getReq(sReq, this.resServer);
	    }
	  }, {
	    key: '_resServer',
	    value: function _resServer(p) {
	      //console.log('_resServer p: ' +p);
	      //var that = this;
	      //console.log('_resServer p.length: ' +p.length);
	      if (p === '[]') {
	        //Directory is empty array []
	        return;
	      }
	      var s = JSON.parse(p);
	      var lFileDir = this.props.files.filedir;
	      var lArr = [];
	      var startCnt = lFileDir.length,
	          endCnt = 0;
	      var children = [];
	
	      if (s.length > 1) {
	        s = _menutree2.default.sortDirFiles(s);
	      }
	      lArr = this.getDirList(s);
	      lFileDir.push.apply(lFileDir, lArr);
	      endCnt = lFileDir.length;
	      lFileDir[s[0].p].children = _menutree2.default.makeEmptyArray(startCnt, endCnt);
	      lFileDir[s[0].p].loaded = true;
	      this.props.dirfilesActions.setFileDir(lFileDir);
	    }
	  }, {
	    key: '_getDirList',
	    value: function _getDirList(s) {
	      var that = this;
	      var lArr = [];
	      s.map(function (obj, index) {
	        var os = that.props.files.slash;
	        var parent = that.props.files.filedir[obj['p']];
	        if (obj['D']) {
	          lArr.push(_menutree2.default.getDir(obj, parent, os));
	        }
	        if (obj['S']) {
	          lArr.push(_menutree2.default.getSym(obj, parent, os));
	        }
	        if (obj['F']) {
	          lArr.push(_menutree2.default.getFile(obj, parent, os));
	        }
	      });
	      return lArr;
	    }
	  }, {
	    key: '_getFile',
	    value: function _getFile(obj, index) {
	      switch (obj.extension) {
	        case '.js':
	        case '.jsx':
	        case '.json':
	          return this.getJSFile(obj, index);
	        default:
	          return _react2.default.createElement(_getfilejsx2.default, { key: index, obj: obj, index: index });
	      }
	    }
	  }, {
	    key: '_getJSFile',
	    value: function _getJSFile(obj, index) {
	
	      //<i className="ionicons ion-map"></i>
	      return _react2.default.createElement(
	        'li',
	        { key: index, className: 'file' },
	        _react2.default.createElement(
	          'ul',
	          { className: 'clicklinks' },
	          _react2.default.createElement(
	            'li',
	            { key: 'a_' + index },
	            _react2.default.createElement(
	              'a',
	              { className: 'file', id: 'mt_' + index, href: 'javascript:void(0);' },
	              obj.name
	            )
	          ),
	          _react2.default.createElement(
	            'li',
	            { key: 't_' + index },
	            _react2.default.createElement('a', { id: 'mt_map_' + index,
	              onClick: this.handleMenuClick,
	              href: 'javascript:void(0);',
	              className: 'ionicons ion-map' })
	          )
	        )
	      );
	    }
	  }, {
	    key: '_getDir',
	    value: function _getDir(obj, index) {
	      if (!obj.open || obj.open && obj.children.length === 0) {
	        return _react2.default.createElement(_getdirclosedjsx2.default, { key: index, obj: obj,
	          index: index, idval: this.props.files.idPrefix + index,
	          handleChecked: this.handleChecked });
	      }
	
	      return _react2.default.createElement(_getdiropenJSX2.default, { key: index, obj: obj,
	        index: index, idval: this.props.files.idPrefix + index,
	        handleChecked: this.handleChecked,
	        getLines: this.getLines });
	    }
	  }, {
	    key: '_getLines',
	    value: function _getLines(p) {
	      var that = this;
	      return p.map(function (index) {
	        var obj = that.props.files.filedir[index];
	        switch (obj.type) {
	          case 'D':
	            return that.getDir(obj, index);
	          case 'S':
	            return _react2.default.createElement(_getsymjsx2.default, { key: index, obj: obj, index: index });
	          default:
	            //return <GetFileJSX key={index} obj={obj} index={index} />;
	            return that.getFile(obj, index);
	        }
	      });
	    }
	  }]);
	
	  return CompMenuTree;
	}(_react.Component);
	
	function mapStateToProps(state) {
	  return {
	    files: state.files,
	    opencomp: state.opencomp
	  };
	}
	
	function mapDispatchToProps(dispatch) {
	  return {
	    dirfilesActions: (0, _redux.bindActionCreators)(dirFileActionCreators, dispatch),
	    compoActions: (0, _redux.bindActionCreators)(compoActionCreators, dispatch)
	  };
	}
	
	//export default connect(mapStateToProps, [actions, setComponent])(CompMenuTree);
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CompMenuTree);

/***/ },
/* 30 */
/*!*********************************!*\
  !*** ./src/actions/dirfiles.js ***!
  \*********************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.changePath = changePath;
	exports.changeDir = changeDir;
	exports.changeOS = changeOS;
	exports.setFileDir = setFileDir;
	var CHANGE_DIRPATH = exports.CHANGE_DIRPATH = 'CHANGE_DIRPATH';
	var CHANGE_DIR = exports.CHANGE_DIR = 'CHANGE_DIR';
	var CHANGE_OS = exports.CHANGE_OS = 'CHANGE_OS';
	var SET_FILEDIR = exports.SET_FILEDIR = 'SET_FILEDIR';
	
	function changePath(val) {
	    return {
	        type: CHANGE_DIRPATH,
	        cargo: val
	    };
	}
	
	function changeDir(dir) {
	    return {
	        type: CHANGE_DIR,
	        cargo: dir
	    };
	}
	
	function changeOS(s) {
	    return {
	        type: CHANGE_OS,
	        cargo: s
	    };
	}
	
	function setFileDir(a) {
	    return {
	        type: SET_FILEDIR,
	        cargo: a
	    };
	}

/***/ },
/* 31 */
/*!****************************************!*\
  !*** ./src/actions/componentswitch.js ***!
  \****************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.setComponent = setComponent;
	exports.setMap = setMap;
	var SET_COMPO = exports.SET_COMPO = 'SET_COMPO';
	var SET_MAP = exports.SET_MAP = 'SET_MAP';
	
	function setComponent(pCompo, pFile) {
	    //console.log('setComponent pCompo: ' +pCompo +' | pFile: ' +pFile);
	    return {
	        type: SET_COMPO,
	        cargo: {
	            compo: pCompo,
	            file: pFile
	        }
	    };
	}
	
	function setMap(p) {
	    //console.log('setComponent pCompo: ' +pCompo +' | pFile: ' +pFile);
	    return {
	        type: SET_MAP,
	        cargo: p
	    };
	}

/***/ },
/* 32 */
/*!***************************************!*\
  !*** ./src/components/getfilejsx.jsx ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var GetFileJSX = function GetFileJSX(_ref) {
	  var obj = _ref.obj;
	  var index = _ref.index;
	  return _react2.default.createElement(
	    'li',
	    { className: 'file' },
	    _react2.default.createElement(
	      'a',
	      { className: 'file', id: 'mt_' + index, href: 'javascript:void(0);' },
	      obj.name
	    )
	  );
	};
	
	exports.default = GetFileJSX;

/***/ },
/* 33 */
/*!**************************************!*\
  !*** ./src/components/getsymjsx.jsx ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var GetSymJSX = function GetSymJSX(_ref) {
	  var obj = _ref.obj;
	  var index = _ref.index;
	  return _react2.default.createElement(
	    'li',
	    { className: 'symbolic' },
	    _react2.default.createElement(
	      'a',
	      { id: 'mt_' + index, href: 'javascript:void(0);' },
	      obj.name
	    )
	  );
	};
	
	exports.default = GetSymJSX;

/***/ },
/* 34 */
/*!********************************************!*\
  !*** ./src/components/getdirclosedjsx.jsx ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var GetDirClosedJSX = function GetDirClosedJSX(_ref) {
	  var obj = _ref.obj;
	  var index = _ref.index;
	  var idval = _ref.idval;
	  var handleChecked = _ref.handleChecked;
	  return _react2.default.createElement(
	    "li",
	    null,
	    _react2.default.createElement(
	      "label",
	      { htmlFor: obj.name },
	      obj.name
	    ),
	    _react2.default.createElement("input", { id: idval, type: "checkbox", checked: obj.open, onChange: handleChecked }),
	    _react2.default.createElement("ul", null)
	  );
	};
	
	exports.default = GetDirClosedJSX;

/***/ },
/* 35 */
/*!******************************************!*\
  !*** ./src/components/getdiropenJSX.jsx ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var GetDirOpenJSX = function GetDirOpenJSX(_ref) {
	  var obj = _ref.obj;
	  var index = _ref.index;
	  var idval = _ref.idval;
	  var handleChecked = _ref.handleChecked;
	  var getLines = _ref.getLines;
	  return _react2.default.createElement(
	    "li",
	    null,
	    _react2.default.createElement(
	      "label",
	      { htmlFor: obj.name },
	      obj.name
	    ),
	    _react2.default.createElement("input", { id: idval, type: "checkbox", checked: obj.open, onChange: handleChecked }),
	    _react2.default.createElement(
	      "ul",
	      null,
	      getLines(obj.children)
	    )
	  );
	};
	
	exports.default = GetDirOpenJSX;

/***/ },
/* 36 */
/*!*********************************!*\
  !*** ./src/wombles/menutree.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var ApiMod = __webpack_require__(/*! ../../apimods/apimod */ 37);
	
	var menuTree = new ApiMod('menuTree', function (Get, Set, Data, DataExists, ExposeFns) {
	
	  function sortDirFiles(s) {
	    s.sort(function (a, b) {
	      if (a['D'] && !b['D']) {
	        return -1;
	      }
	      if (!a['D'] && b['D']) {
	        return 1;
	      }
	      return a['n'].toString().localeCompare(b['n']);
	    });
	    return s;
	  }
	
	  function makeEmptyArray(a, b) {
	    var arr = [];
	    var i;
	    for (i = a; i < b; i++) {
	      arr.push(i);
	    }
	    return arr;
	  }
	
	  function getPath(pDir, pSlash) {
	    return pDir.path + pSlash + pDir.name;
	  }
	
	  function getSlash(pOS) {
	    if (pOS === 'u') {
	      return '/';
	    }
	    return '\\';
	  }
	
	  function getLevel(i) {
	    return i * 1 + 1;
	  }
	
	  function getDir(o, parent, os) {
	    return {
	      name: o['n'],
	      level: getLevel(parent.level),
	      parent: o['p'],
	      type: 'D',
	      path: getPath(parent, os),
	      open: false,
	      children: [],
	      loaded: false
	    };
	  }
	
	  function getSym(o, parent, os) {
	    return {
	      name: o['n'],
	      level: getLevel(parent.level),
	      parent: o['p'],
	      type: 'S',
	      path: getPath(parent, os)
	    };
	  }
	
	  function getFile(o, parent, os) {
	    return {
	      name: o['n'],
	      level: getLevel(parent.level),
	      parent: o['p'],
	      type: 'F',
	      path: getPath(parent, os),
	      extension: o['e']
	    };
	  }
	
	  function getRoot(path, dir) {
	    return [{
	      name: dir,
	      level: 0,
	      parent: 0,
	      type: 'D',
	      path: path.substring(0, path.length - (dir.length + 1)),
	      open: true,
	      children: [],
	      loaded: false
	    }];
	  }
	
	  function stripPrefix(a, b) {
	    return a.substring(b.length, a.length);
	  }
	
	  ExposeFns({
	    sortDirFiles: sortDirFiles,
	    makeEmptyArray: makeEmptyArray,
	    getPath: getPath,
	    getSlash: getSlash,
	    getLevel: getLevel,
	    getDir: getDir,
	    getSym: getSym,
	    getFile: getFile,
	    getRoot: getRoot,
	    stripPrefix: stripPrefix
	  });
	});
	
	module.exports = menuTree;
	//var eh = require('../../apimods/herrorford');

/***/ },
/* 37 */
/*!***************************!*\
  !*** ./apimods/apimod.js ***!
  \***************************/
/***/ function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	/*jshint esversion:6 */
	// ApiMod : Define simple API JS Modules.
	//
	
	/*
	* Parameters
	* n : name of the module
	* f : the actual module function
	*
	* Purpose
	* This function ApiMod has a function passed in as a parameter.
	* The parameter function is called at the end,
	* and has the functions below passed in as parameters.
	*
	* Important to all of this is the data variable.
	* It is a plain JS object and is used as a store to store other name value pairs.
	* Where the value can be any valid JSON, such as strings, numbers, array, objects.
	*
	* _GetVal : A getter function which returns the saught value.
	* _SetVal : A setter function which sets the value.
	* _Data : An function that adds the name value pair to the data object.
	* _DataExists : Checks the name is already in the data object.
	* _ExposeFns : A function which takes the passed in JS obect and makes those functions publicly available.
	*
	* This acts as a simple API, allowing the ApiMod to act as a module wrapper.
	* Which allows for gettters, setters and exposing of functions to be available.
	* All the data, if any is defined, is stored in the data object.
	*
	* f(_GetVal, _SetVal, _Data, _DataExists, _ExposeFns);
	*
	*
	* This is the base API Module.
	* It cannot have Multilingual or Error handling
	* as it will cause a circular reference to itself
	* ApiMod calls Herroford but Herroford calls ApiMod
	* Only way around it is to merge ApiMod with Error handling.
	* But this takes a simple elegant Api Module interface and mucks it up.
	*/
	function ApiMod(n, f) {
		//console.log('n: ' +n);
		//console.log('f: ' +f);
		var self = this;
		var name = n;
		var data = {};
	
		function _DataExists(n) {
			return typeof data[n] != 'undefined';
		}
	
		function _GetVal(n) {
			if (!_DataExists(n)) {
				console.log(name + '.Get; Value "' + n + '" not defined');
				return '';
			}
			return data[n].val;
		}
	
		function _SetVal(n, v) {
			if (!_DataExists(n)) {
				console.log(name + '.Set; Value "' + n + '" not defined');
				return '';
			}
			if (data[n].def && (typeof v === 'undefined' ? 'undefined' : _typeof(v)) !== data[n].type) {
				console.log(name + '.Set; Value "' + n + '" new value is diff type to defined type');
				return '';
			}
			if ((typeof v === 'undefined' ? 'undefined' : _typeof(v)) !== _typeof(data[n].val)) {
				console.log(name + '.Set; Value "' + n + '" warning new value is diff type ');
			}
			data[n].val = v;
			return data[n].val;
		}
	
		function _GetObjType(p) {
			switch (p.toLowerCase()) {
				case 'string':
					t = 'string';
					break;
				case 'number':
					t = 'number';
					break;
				case 'func':
				case 'function':
					t = 'function';
					break;
				case 'bool':
				case 'boolean':
					t = 'boolean';
					break;
				case 'symbol':
					t = 'symbol';
					break;
				default:
					t = 'object';
			}
			return t;
		}
	
		function _Data(n, v, d) {
			if (_DataExists(n)) {
				console.log(name + '.Data; Value "' + n + '" already defined');
				return '';
			}
	
			var t, z;
			if (typeof d !== 'string') {
				d = 'notDefined';
			}
			if (d === 'notDefined') {
				z = false;
			} else {
				z = true;
			}
	
			t = _GetObjType(d);
			data[n] = { val: v, type: t, def: z };
			return data[n].val;
		}
	
		function _ExposeFns(d) {
			var i;
			for (i in d) {
				if (typeof self[i] == 'undefined') {
					self[i] = d[i];
				} else {
					console.log(name + '.ExposeFns; identifier "' + name + '.' + i + '" already exists.');
				}
			}
		}
	
		f(_GetVal, _SetVal, _Data, _DataExists, _ExposeFns);
	}
	
	//module.exports = new ApiMod();
	module.exports = ApiMod;

/***/ },
/* 38 */
/*!**************************************!*\
  !*** ./src/components/drivemenu.jsx ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 4);
	
	var _drivemenu = __webpack_require__(/*! ../actions/drivemenu */ 39);
	
	var actions = _interopRequireWildcard(_drivemenu);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*jshint esversion:6 */
	
	
	var DriveMenu = function (_Component) {
	  _inherits(DriveMenu, _Component);
	
	  function DriveMenu(props) {
	    _classCallCheck(this, DriveMenu);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DriveMenu).call(this, props));
	
	    _this.getDriveMenu = function () {
	      return _this._getDriveMenu();
	    };
	    _this.reqServer = function () {
	      return _this._reqServer();
	    };
	    _this.resServer = function (p) {
	      return _this._resServer(p);
	    };
	    return _this;
	  }
	
	  _createClass(DriveMenu, [{
	    key: 'render',
	    value: function render() {
	      if (this.props.drives.info.length === 0) {
	        return _react2.default.createElement(
	          'select',
	          { id: 'drivemenu', name: 'drivemenu' },
	          _react2.default.createElement(
	            'option',
	            { value: 'loading' },
	            'Loading...'
	          )
	        );
	      } else {
	        return _react2.default.createElement(
	          'div',
	          null,
	          this.getDriveMenu()
	        );
	      }
	    }
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.reqServer();
	    }
	  }, {
	    key: '_reqServer',
	    value: function _reqServer() {
	      var p = this.props.drives;
	      var sReq = p.url;
	      Cruyff.getReq(sReq, this.resServer);
	    }
	  }, {
	    key: '_resServer',
	    value: function _resServer(p) {
	      var s = JSON.parse(p);
	      this.props.changePath(s[0]);
	    }
	  }, {
	    key: '_getDriveMenu',
	    value: function _getDriveMenu() {
	      return _react2.default.createElement(
	        'select',
	        { id: 'drivemenu', name: 'drivemenu' },
	        _react2.default.createElement(
	          'option',
	          { value: 'cwd' },
	          this.props.drives.info.cwd
	        ),
	        _react2.default.createElement(
	          'option',
	          { value: 'homedir' },
	          this.props.drives.info.homedir
	        )
	      );
	    }
	  }]);
	
	  return DriveMenu;
	}(_react.Component);
	
	function mapStateToProps(state) {
	  return { drives: state.drives };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)(DriveMenu);

/***/ },
/* 39 */
/*!**********************************!*\
  !*** ./src/actions/drivemenu.js ***!
  \**********************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.changePath = changePath;
	var SET_DRIVES = exports.SET_DRIVES = 'SET_DRIVES';
	
	function changePath(val) {
	    return {
	        type: SET_DRIVES,
	        cargo: val
	    };
	}

/***/ },
/* 40 */
/*!********************************************!*\
  !*** ./src/components/componentswitch.jsx ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 4);
	
	var _componentswitch = __webpack_require__(/*! ../actions/componentswitch */ 31);
	
	var actions = _interopRequireWildcard(_componentswitch);
	
	var _componentmap = __webpack_require__(/*! ./componentmap */ 41);
	
	var _componentmap2 = _interopRequireDefault(_componentmap);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*jshint esversion:6 */
	
	
	var ComponentSwitch = function (_Component) {
	  _inherits(ComponentSwitch, _Component);
	
	  function ComponentSwitch(props) {
	    _classCallCheck(this, ComponentSwitch);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ComponentSwitch).call(this, props));
	  }
	
	  _createClass(ComponentSwitch, [{
	    key: 'render',
	    value: function render() {
	      //console.log('componentswitch render');
	      //console.log('compo: ' +this.props.opencomp.compo);
	      //console.log('file: ' +this.props.opencomp.file);
	      //console.log('url: ' +this.props.opencomp.url);
	      var rc;
	      switch (this.props.opencomp.compo) {
	        case 'map':
	          rc = _react2.default.createElement(_componentmap2.default, null);
	          break;
	        default:
	          rc = 'No Component set.';
	
	      }
	      return _react2.default.createElement(
	        'div',
	        null,
	        rc
	      );
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps, prevState) {
	      //console.log('componentswitch componentDidUpdate');
	      /*
	      switch statment based on action.
	       */
	    }
	  }]);
	
	  return ComponentSwitch;
	}(_react.Component);
	
	function mapStateToProps(state) {
	  return { opencomp: state.opencomp };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)(ComponentSwitch);

/***/ },
/* 41 */
/*!*****************************************!*\
  !*** ./src/components/componentmap.jsx ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 4);
	
	var _componentswitch = __webpack_require__(/*! ../actions/componentswitch */ 31);
	
	var actions = _interopRequireWildcard(_componentswitch);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*jshint esversion:6 */
	
	
	var ComponentMap = function (_Component) {
	  _inherits(ComponentMap, _Component);
	
	  function ComponentMap(props) {
	    _classCallCheck(this, ComponentMap);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ComponentMap).call(this, props));
	
	    _this.url = 'appmap';
	
	    _this.getDriveMenu = function () {
	      return _this._getDriveMenu();
	    };
	    _this.reqServer = function () {
	      return _this._reqServer();
	    };
	    _this.resServer = function (p) {
	      return _this._resServer(p);
	    };
	
	    return _this;
	  }
	
	  _createClass(ComponentMap, [{
	    key: 'render',
	    value: function render() {
	      //console.log('componentmap render');
	      //console.dir(this.props)
	      //console.log('compo: ' +this.props.opencomp.compo);
	      //console.log('file: ' +this.props.opencomp.file);
	      //console.log('url: ' +this.props.opencomp.url);
	      if (this.props.opencomp.unit.length === 0) {
	        return _react2.default.createElement(
	          'div',
	          null,
	          'Loading...'
	        );
	      } else {
	        //{JSON.stringify(rc, null, 2) }
	        var rc;
	        switch (this.props.opencomp.compo) {
	          case 'map':
	            rc = JSON.stringify(this.props.opencomp.unit, null, 2);
	            break;
	          default:
	            rc = 'No Component set.';
	
	        }
	        return _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'pre',
	            null,
	            rc
	          )
	        );
	      }
	    }
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      //console.log('componentmap componentWillMount');
	      this.reqServer();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps, prevState) {
	      //console.log('componentmap componentDidUpdate');
	      //console.log('compo prev: ' +prevProps.opencomp.compo + ' | props ' +this.props.opencomp.compo);
	      //console.log('file prev: ' +prevProps.opencomp.file + ' | props ' +this.props.opencomp.file);
	
	      if (prevProps.opencomp.compo !== this.props.opencomp.compo || prevProps.opencomp.file !== this.props.opencomp.file) {
	        console.log('inside if ');
	        this.reqServer();
	      }
	    }
	  }, {
	    key: '_reqServer',
	    value: function _reqServer() {
	      var p = this.props.opencomp;
	      var sReq = this.url;
	      sReq += '?file=' + p.file;
	      Cruyff.getReq(sReq, this.resServer);
	    }
	  }, {
	    key: '_resServer',
	    value: function _resServer(p) {
	      var s = JSON.parse(p);
	      this.props.setMap(s);
	      console.log('s: ' + s);
	      //console.dir(s);
	    }
	  }, {
	    key: '_getDriveMenu',
	    value: function _getDriveMenu() {
	      return _react2.default.createElement(
	        'select',
	        { id: 'drivemenu', name: 'drivemenu' },
	        _react2.default.createElement(
	          'option',
	          { value: 'cwd' },
	          this.props.drives.info.cwd
	        ),
	        _react2.default.createElement(
	          'option',
	          { value: 'homedir' },
	          this.props.drives.info.homedir
	        )
	      );
	    }
	  }]);
	
	  return ComponentMap;
	}(_react.Component);
	
	function mapStateToProps(state) {
	  return { opencomp: state.opencomp };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)(ComponentMap);

/***/ },
/* 42 */
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _redux = __webpack_require__(/*! redux */ 12);
	
	var _reducer_dirfiles = __webpack_require__(/*! ./reducer_dirfiles */ 43);
	
	var _reducer_dirfiles2 = _interopRequireDefault(_reducer_dirfiles);
	
	var _reducer_drivemenu = __webpack_require__(/*! ./reducer_drivemenu */ 45);
	
	var _reducer_drivemenu2 = _interopRequireDefault(_reducer_drivemenu);
	
	var _reducer_componentswitch = __webpack_require__(/*! ./reducer_componentswitch */ 46);
	
	var _reducer_componentswitch2 = _interopRequireDefault(_reducer_componentswitch);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var rootReducer = (0, _redux.combineReducers)({
	  files: _reducer_dirfiles2.default,
	  drives: _reducer_drivemenu2.default,
	  opencomp: _reducer_componentswitch2.default
	
	});
	
	exports.default = rootReducer;

/***/ },
/* 43 */
/*!******************************************!*\
  !*** ./src/reducers/reducer_dirfiles.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; /*jshint esversion:6 */
	
	
	exports.default = function () {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? INITIAL_STATE : arguments[0];
	    var action = arguments[1];
	
	    if ((typeof state === 'undefined' ? 'undefined' : _typeof(state)) === undefined) {
	        return INITIAL_STATE;
	    }
	
	    switch (action.type) {
	        case _dirfiles.CHANGE_DIRPATH:
	            return Object.assign({}, state, {
	                startDirPath: action.cargo
	            });
	        case _dirfiles.CHANGE_DIR:
	            return Object.assign({}, state, {
	                startDir: action.cargo
	            });
	        case _dirfiles.CHANGE_OS:
	            return Object.assign({}, state, {
	                slash: action.cargo
	            });
	        case _dirfiles.SET_FILEDIR:
	            return Object.assign({}, state, {
	                filedir: action.cargo
	            });
	        //return { ...state, startDirPath: action.cargo };
	        /*case FETCH_POSTS:
	            return { ...state, all: action.payload.data };
	            */
	        default:
	            return state;
	    }
	    return state;
	};
	
	var _dirfiles = __webpack_require__(/*! ../actions/dirfiles */ 30);
	
	var _jim = __webpack_require__(/*! ../../configs/jim.config */ 44);
	
	var INITIAL_STATE = {
	    action: '',
	    idPrefix: 'mt_',
	    filedir: [],
	    startDirPath: _jim.entryPath,
	    startDir: _jim.entryDir,
	    filesys: _jim.thisOS,
	    slash: _jim.thisSlash,
	    tlc: _jim.TLC
	};

/***/ },
/* 44 */
/*!*******************************!*\
  !*** ./configs/jim.config.js ***!
  \*******************************/
/***/ function(module, exports) {

	'use strict';
	
	module.exports = {
	  entryPath: '/Users/christopherscoular/Dropbox/ReactJS/servers/compo_tree',
	  entryDir: 'compo_tree',
	  thisOS: 'u',
	  thisSlash: '/',
	  jsxDir: ['/src/components'],
	  jsxFiles: ['/src/index.jsx', '/src/App.jsx'],
	  TLC: ['/Users/christopherscoular/Dropbox/ReactJS/servers/compo_tree/src/index.jsx']
	};

/***/ },
/* 45 */
/*!*******************************************!*\
  !*** ./src/reducers/reducer_drivemenu.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; /*jshint esversion:6 */
	
	
	exports.default = function () {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? INITIAL_STATE : arguments[0];
	    var action = arguments[1];
	
	    if ((typeof state === 'undefined' ? 'undefined' : _typeof(state)) === undefined) {
	        return INITIAL_STATE;
	    }
	
	    switch (action.type) {
	        case _drivemenu.SET_DRIVES:
	            return Object.assign({}, state, {
	                info: action.cargo
	            });
	        default:
	            return state;
	    }
	    return state;
	};
	
	var _drivemenu = __webpack_require__(/*! ../actions/drivemenu */ 39);
	
	var INITIAL_STATE = {
	    info: {},
	    url: 'drivemenu'
	};

/***/ },
/* 46 */
/*!*************************************************!*\
  !*** ./src/reducers/reducer_componentswitch.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; /*jshint esversion:6 */
	
	
	exports.default = function () {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? INITIAL_STATE : arguments[0];
	    var action = arguments[1];
	
	    if ((typeof state === 'undefined' ? 'undefined' : _typeof(state)) === undefined) {
	        return INITIAL_STATE;
	    }
	
	    switch (action.type) {
	        case _componentswitch.SET_COMPO:
	            return Object.assign({}, state, {
	                action: action.type,
	                compo: action.cargo.compo,
	                file: action.cargo.file
	            });
	        case _componentswitch.SET_MAP:
	            return Object.assign({}, state, {
	                action: action.type,
	                unit: action.cargo
	            });
	        default:
	            return state;
	    }
	    return state;
	};
	
	var _componentswitch = __webpack_require__(/*! ../actions/componentswitch */ 31);
	
	var INITIAL_STATE = {
	    action: '',
	    compo: '',
	    file: '',
	    unit: {}
	};

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map