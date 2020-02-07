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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nError: Something that got detected as your top-level application (because it doesn't seem to belong to any package) tried to access a package that is not declared in your dependencies\\n\\nRequired package: mkdirp (via \\\"mkdirp\\\")\\nRequired by: /C:/wamp64/www/app-node/node_modules/babel-loader/lib/\\n\\nRequire stack:\\n- C:\\\\wamp64\\\\www\\\\app-node\\\\node_modules\\\\babel-loader\\\\lib\\\\cache.js\\n- C:\\\\wamp64\\\\www\\\\app-node\\\\node_modules\\\\babel-loader\\\\lib\\\\index.js\\n- C:\\\\wamp64\\\\www\\\\app-node\\\\.yarn\\\\cache\\\\loader-runner-npm-2.4.0-c414104c2f-1.zip\\\\node_modules\\\\loader-runner\\\\lib\\\\loadLoader.js\\n- C:\\\\wamp64\\\\www\\\\app-node\\\\.yarn\\\\cache\\\\loader-runner-npm-2.4.0-c414104c2f-1.zip\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js\\n- C:\\\\wamp64\\\\www\\\\app-node\\\\.yarn\\\\cache\\\\webpack-npm-4.41.5-ec6f53e9d3-1.zip\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js\\n- C:\\\\wamp64\\\\www\\\\app-node\\\\.yarn\\\\cache\\\\webpack-npm-4.41.5-ec6f53e9d3-1.zip\\\\node_modules\\\\webpack\\\\lib\\\\NormalModuleFactory.js\\n- C:\\\\wamp64\\\\www\\\\app-node\\\\.yarn\\\\cache\\\\webpack-npm-4.41.5-ec6f53e9d3-1.zip\\\\node_modules\\\\webpack\\\\lib\\\\Compiler.js\\n- C:\\\\wamp64\\\\www\\\\app-node\\\\.yarn\\\\cache\\\\webpack-npm-4.41.5-ec6f53e9d3-1.zip\\\\node_modules\\\\webpack\\\\lib\\\\webpack.js\\n- C:\\\\wamp64\\\\www\\\\app-node\\\\.yarn\\\\$$virtual\\\\webpack-cli-virtual-e3eedc6cf2\\\\0\\\\cache\\\\webpack-cli-npm-3.3.10-3487cce4fe-1.zip\\\\node_modules\\\\webpack-cli\\\\bin\\\\utils\\\\validate-options.js\\n- C:\\\\wamp64\\\\www\\\\app-node\\\\.yarn\\\\$$virtual\\\\webpack-cli-virtual-e3eedc6cf2\\\\0\\\\cache\\\\webpack-cli-npm-3.3.10-3487cce4fe-1.zip\\\\node_modules\\\\webpack-cli\\\\bin\\\\utils\\\\convert-argv.js\\n- C:\\\\wamp64\\\\www\\\\app-node\\\\.yarn\\\\$$virtual\\\\webpack-cli-virtual-e3eedc6cf2\\\\0\\\\cache\\\\webpack-cli-npm-3.3.10-3487cce4fe-1.zip\\\\node_modules\\\\webpack-cli\\\\bin\\\\cli.js\\n- C:\\\\wamp64\\\\www\\\\app-node\\\\.yarn\\\\cache\\\\webpack-npm-4.41.5-ec6f53e9d3-1.zip\\\\node_modules\\\\webpack\\\\bin\\\\webpack.js\\n    at Object.makeError (C:\\\\wamp64\\\\www\\\\app-node\\\\.pnp.js:12543:24)\\n    at resolveToUnqualified (C:\\\\wamp64\\\\www\\\\app-node\\\\.pnp.js:21399:35)\\n    at resolveRequest (C:\\\\wamp64\\\\www\\\\app-node\\\\.pnp.js:21483:27)\\n    at Object.resolveRequest (C:\\\\wamp64\\\\www\\\\app-node\\\\.pnp.js:21551:26)\\n    at Function.module_1.Module._resolveFilename (C:\\\\wamp64\\\\www\\\\app-node\\\\.pnp.js:20781:34)\\n    at Function.module_1.Module._load (C:\\\\wamp64\\\\www\\\\app-node\\\\.pnp.js:20666:40)\\n    at Module.require (internal/modules/cjs/loader.js:848:19)\\n    at require (C:\\\\wamp64\\\\www\\\\app-node\\\\.yarn\\\\cache\\\\v8-compile-cache-npm-2.0.3-e099861e3e-1.zip\\\\node_modules\\\\v8-compile-cache\\\\v8-compile-cache.js:161:20)\\n    at Object.<anonymous> (C:\\\\wamp64\\\\www\\\\app-node\\\\node_modules\\\\babel-loader\\\\lib\\\\cache.js:26:20)\\n    at Module._compile (C:\\\\wamp64\\\\www\\\\app-node\\\\.yarn\\\\cache\\\\v8-compile-cache-npm-2.0.3-e099861e3e-1.zip\\\\node_modules\\\\v8-compile-cache\\\\v8-compile-cache.js:192:30)\\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:991:10)\\n    at Module.load (internal/modules/cjs/loader.js:811:32)\\n    at Function.module_1.Module._load (C:\\\\wamp64\\\\www\\\\app-node\\\\.pnp.js:20696:14)\\n    at Module.require (internal/modules/cjs/loader.js:848:19)\\n    at require (C:\\\\wamp64\\\\www\\\\app-node\\\\.yarn\\\\cache\\\\v8-compile-cache-npm-2.0.3-e099861e3e-1.zip\\\\node_modules\\\\v8-compile-cache\\\\v8-compile-cache.js:161:20)\\n    at Object.<anonymous> (C:\\\\wamp64\\\\www\\\\app-node\\\\node_modules\\\\babel-loader\\\\lib\\\\index.js:29:15)\\n    at Module._compile (C:\\\\wamp64\\\\www\\\\app-node\\\\.yarn\\\\cache\\\\v8-compile-cache-npm-2.0.3-e099861e3e-1.zip\\\\node_modules\\\\v8-compile-cache\\\\v8-compile-cache.js:192:30)\\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:991:10)\\n    at Module.load (internal/modules/cjs/loader.js:811:32)\\n    at Function.module_1.Module._load (C:\\\\wamp64\\\\www\\\\app-node\\\\.pnp.js:20696:14)\\n    at Module.require (internal/modules/cjs/loader.js:848:19)\\n    at require (C:\\\\wamp64\\\\www\\\\app-node\\\\.yarn\\\\cache\\\\v8-compile-cache-npm-2.0.3-e099861e3e-1.zip\\\\node_modules\\\\v8-compile-cache\\\\v8-compile-cache.js:161:20)\\n    at loadLoader (C:\\\\wamp64\\\\www\\\\app-node\\\\.yarn\\\\cache\\\\loader-runner-npm-2.4.0-c414104c2f-1.zip\\\\node_modules\\\\loader-runner\\\\lib\\\\loadLoader.js:18:17)\\n    at iteratePitchingLoaders (C:\\\\wamp64\\\\www\\\\app-node\\\\.yarn\\\\cache\\\\loader-runner-npm-2.4.0-c414104c2f-1.zip\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:169:2)\\n    at runLoaders (C:\\\\wamp64\\\\www\\\\app-node\\\\.yarn\\\\cache\\\\loader-runner-npm-2.4.0-c414104c2f-1.zip\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:365:2)\\n    at NormalModule.doBuild (C:\\\\wamp64\\\\www\\\\app-node\\\\.yarn\\\\cache\\\\webpack-npm-4.41.5-ec6f53e9d3-1.zip\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:295:3)\\n    at NormalModule.build (C:\\\\wamp64\\\\www\\\\app-node\\\\.yarn\\\\cache\\\\webpack-npm-4.41.5-ec6f53e9d3-1.zip\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:446:15)\\n    at Compilation.buildModule (C:\\\\wamp64\\\\www\\\\app-node\\\\.yarn\\\\cache\\\\webpack-npm-4.41.5-ec6f53e9d3-1.zip\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:739:10)\\n    at C:\\\\wamp64\\\\www\\\\app-node\\\\.yarn\\\\cache\\\\webpack-npm-4.41.5-ec6f53e9d3-1.zip\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:1111:12\\n    at C:\\\\wamp64\\\\www\\\\app-node\\\\.yarn\\\\cache\\\\webpack-npm-4.41.5-ec6f53e9d3-1.zip\\\\node_modules\\\\webpack\\\\lib\\\\NormalModuleFactory.js:409:6\");\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });