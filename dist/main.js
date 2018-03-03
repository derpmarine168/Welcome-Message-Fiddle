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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _server_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server.html */ \"./src/server.html\");\n/* harmony import */ var _server_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_server_html__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _user_input_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user_input.html */ \"./src/user_input.html\");\n/* harmony import */ var _user_input_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_user_input_html__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\nconst input = document.querySelector('textarea')\r\nconst iframe = document.querySelector('iframe')\r\n\r\n// http://stackoverflow.com/questions/11076975/insert-text-into-textarea-at-cursor-position-javascript\r\n\r\nfunction insertAtCursor(myField, myValue) {\r\n    //IE support\r\n    if (document.selection) {\r\n        myField.focus();\r\n        sel = document.selection.createRange();\r\n        sel.text = myValue;\r\n    }\r\n    //MOZILLA and others\r\n    else if (myField.selectionStart || myField.selectionStart == '0') {\r\n        var startPos = myField.selectionStart;\r\n        var endPos = myField.selectionEnd;\r\n        myField.value = myField.value.substring(0, startPos)\r\n            + myValue\r\n            + myField.value.substring(endPos, myField.value.length);\r\n        myField.selectionStart = startPos + myValue.length;\r\n        myField.selectionEnd = startPos + myValue.length;\r\n    } else {\r\n        myField.value += myValue;\r\n    }\r\n}\r\n\r\nfunction debounce (ms, fn) {\r\n    let timeout = null\r\n    let savedArgs\r\n\r\n    return function(...args) {\r\n        savedArgs = args\r\n\r\n        clearTimeout(timeout)\r\n        timeout = setTimeout(() => {\r\n            timeout = null\r\n            fn(...savedArgs)\r\n        }, ms)\r\n    }\r\n}\r\n\r\ninput.addEventListener('input', debounce(1000, function () {\r\n    iframe.srcdoc = _server_html__WEBPACK_IMPORTED_MODULE_0___default.a\r\n        .replace('[CONTENT]', input.value)\r\n\r\n    localStorage.setItem('userInput', input.value)\r\n}))\r\n\r\ninput.addEventListener('keydown', function (event) {\r\n    if (event.key != \"Tab\") return\r\n\r\n    event.preventDefault()\r\n    insertAtCursor(input, '  ')\r\n})\r\n\r\nconst starterInput = localStorage.getItem('userInput') || _user_input_html__WEBPACK_IMPORTED_MODULE_1___default.a\r\ninput.value = starterInput\r\niframe.srcdoc = _server_html__WEBPACK_IMPORTED_MODULE_0___default.a\r\n    .replace('[CONTENT]', starterInput)\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/server.html":
/*!*************************!*\
  !*** ./src/server.html ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<html lang=\\\"en\\\">\\r\\n\\r\\n<head>\\r\\n  <link rel=\\\"stylesheet\\\" href=\\\"style.css\\\">\\r\\n  <title>WORLDNAME</title>\\r\\n</head>\\r\\n\\r\\n<body>\\r\\n  <p>\\r\\n    <center>\\r\\n      <b>WELCOME TO WORLDNAME!</b>\\r\\n      <br>\\r\\n      <div style=\\\"font-size:80%\\\">\\r\\n        RULES: CUSTOM\\r\\n        <br>\\r\\n        <button title=\\\"Click to show/hide content\\\" type=\\\"button\\\" id=\\\"spoilerButton\\\" onclick=\\\"if(document.getElementById('spoiler').style.display=='none'){document.getElementById('spoiler').style.display='';document.getElementById('spoilerButton').innerText='Hide';}else{document.getElementById('spoiler').style.display='none';document.getElementById('spoilerButton').innerText='Show More Info'}\\\">\\r\\n          Show More Info\\r\\n        </button>\\r\\n        <div id=\\\"spoiler\\\" style=\\\"display:none;\\\">\\r\\n          PVP: DISABLED\\r\\n          <br> SEED: 1231231\\r\\n          <br> more rules...\\r\\n          <br>\\r\\n        </div>\\r\\n      </div>\\r\\n    </center>\\r\\n    <div id=\\\"messageContent\\\">\\r\\n      [CONTENT]\\r\\n    </div>\\r\\n    <hr />\\r\\n    <center style=\\\"font-size:80%;\\\">\\r\\n      While playing on any server, please be courteous to other players, listen to mods and admins, and behave yourself. You may\\r\\n      be muted or banned for any reason, and the in-game chat may be monitored.\\r\\n      <br>\\r\\n      <a href=\\\"http://theblockheads.net\\\" style=\\\"padding-right:5px;color:#FFF\\\">TheBlockheads.net</a>\\r\\n      <a href=\\\"http://theblockheads.net/forum\\\" style=\\\"padding-left:5px;color:#FFF;\\\">Blockheads Forums</a>\\r\\n      <br>\\r\\n      <hr>\\r\\n    </center>\\r\\n  </p>\\r\\n</body>\\r\\n\\r\\n</html>\"\n\n//# sourceURL=webpack:///./src/server.html?");

/***/ }),

/***/ "./src/user_input.html":
/*!*****************************!*\
  !*** ./src/user_input.html ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<style>\\r\\n  .navPage:not(.visible) {\\r\\n    display: none;\\r\\n  }\\r\\n\\r\\n  .navWrapper {\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n  }\\r\\n  \\r\\n  .navButton {\\r\\n    margin: 5px 10px;\\r\\n    padding: 10px;\\r\\n    background: #2976f2;\\r\\n  }\\r\\n\\r\\n  [to-page] {\\r\\n    cursor: pointer;\\r\\n  }\\r\\n</style>\\r\\n\\r\\n<nav class=\\\"navWrapper\\\">\\r\\n  <div class=\\\"navButton\\\" to-page=\\\"home\\\">Home</div>\\r\\n  <div class=\\\"navButton\\\" to-page=\\\"test\\\">Test</div>\\r\\n</nav>\\r\\n\\r\\n<hr>\\r\\n\\r\\n<div class=\\\"navPage visible\\\" page=\\\"home\\\">\\r\\n  Home\\r\\n  <a to-page=\\\"test\\\">Go to test page</a>\\r\\n</div>\\r\\n\\r\\n<div class=\\\"navPage\\\" page=\\\"test\\\">\\r\\n  Test\\r\\n</div>\\r\\n\\r\\n<script>\\r\\n  function showPage(pageName) {\\r\\n    var oldPages = Array.from(document.querySelectorAll('div.navPage.visible'))\\r\\n    oldPages.forEach(function (page) { page.classList.remove('visible') })\\r\\n\\r\\n    var page = document.querySelector('[page=\\\"' + pageName + `\\\"]`)\\r\\n    if (!page) return\\r\\n\\r\\n    page.classList.add('visible')\\r\\n  }\\r\\n\\r\\n  document.addEventListener('click', function (event) {\\r\\n    if (!event.target) return;\\r\\n    if (event.target.getAttribute('to-page')) {\\r\\n      showPage(event.target.getAttribute('to-page'))\\r\\n    }\\r\\n  })\\r\\n</script>\"\n\n//# sourceURL=webpack:///./src/user_input.html?");

/***/ })

/******/ });