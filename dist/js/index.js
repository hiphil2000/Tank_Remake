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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GameData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameData */ "./src/GameData.ts");
/* harmony import */ var _TankObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TankObject */ "./src/TankObject.ts");


var sprite = __webpack_require__(/*! ./images/sprite.png */ "./src/images/sprite.png");
var MAX_FPS = 60;
var DRAWABLES = {
    display_background: "#000000",
    display_border: "#3f3f3f"
};
var Game = /** @class */ (function () {
    function Game(canvas, options) {
        // init display
        this._cavnas = canvas;
        this._ctx = this._cavnas.getContext("2d");
        this._sprite = sprite;
        if (options != undefined) {
            this._options = options;
        }
        this.initializeCanvas();
        // init game data
        this._gameData = new _GameData__WEBPACK_IMPORTED_MODULE_0__["GameData"]();
        this._gameData.objects.push(new _TankObject__WEBPACK_IMPORTED_MODULE_1__["default"]("main", {
            spriteImage: this._sprite,
            spritePosition: {
                x: 0,
                y: 0,
                w: 16,
                h: 16
            }
        }, {
            x: 16,
            y: 23
        }));
        // init draw setting
        this._fpsInterval = 1000 / MAX_FPS;
        this._then = Date.now();
        this.draw();
    }
    Game.prototype.initializeCanvas = function () {
        var _this = this;
        this._cavnas.width = window.innerWidth;
        this._cavnas.height = window.innerHeight;
        document.addEventListener("keydown", function (ev) {
            _this._gameData.updateKeystate(ev.keyCode, true);
        });
        document.addEventListener("keyup", function (ev) {
            _this._gameData.updateKeystate(ev.keyCode, false);
        });
    };
    Game.prototype.draw = function () {
        var _this = this;
        // request another frame
        requestAnimationFrame(function () { _this.draw(); });
        this._now = Date.now();
        this._elapsed = this._now - this._then;
        // fpsInterval 이상의 시간이 지나면 프레임을 하나 받은 것으로 취급
        if (this._elapsed > this._fpsInterval) {
            this._then = this._now - (this._elapsed % this._fpsInterval);
            // 만약 화살표 키를 동시에 누르지 않은 상태라면 이동 처리함.
            if (!this._gameData.checkDuplicateArrow()) {
                var main = this._gameData.findObject("main");
                if (this._gameData.keyState.arrow_right) {
                    main.position.x++;
                }
                else if (this._gameData.keyState.arrow_left) {
                    main.position.x--;
                }
                else if (this._gameData.keyState.arrow_up) {
                    main.position.y--;
                }
                else if (this._gameData.keyState.arrow_down) {
                    main.position.y++;
                }
            }
            // clear screen
            this._ctx.clearRect(0, 0, this._ctx.canvas.clientWidth, this._ctx.canvas.clientHeight);
            this._gameData.objects.forEach(function (object) {
                _this._ctx.fillStyle = "black";
                _this._ctx.fillRect(object.position.x, object.position.y, object.position.w, object.position.h);
            });
            // draw debug counter
            this.drawDebugCounter();
        }
    };
    Game.prototype.drawDebugCounter = function () {
        var debugText = this._elapsed.toFixed(2) + "ms per frame";
        debugText += "right: " + this._gameData.keyState.arrow_right;
        var ctx = this._cavnas.getContext("2d");
        ctx.font = '12px san-serif';
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 2;
        ctx.strokeText(debugText, 0, 20);
        ctx.fillStyle = 'black';
        ctx.fillText(debugText, 0, 20);
    };
    return Game;
}());
/* harmony default export */ __webpack_exports__["default"] = (Game);


/***/ }),

/***/ "./src/GameData.ts":
/*!*************************!*\
  !*** ./src/GameData.ts ***!
  \*************************/
/*! exports provided: GameData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameData", function() { return GameData; });
var GameData = /** @class */ (function () {
    function GameData() {
        this.keyState = {};
        this.objects = [];
    }
    GameData.prototype.updateKeystate = function (keyCode, state) {
        switch (keyCode) {
            case 37:
                this.keyState.arrow_left = state;
                break;
            case 38:
                this.keyState.arrow_up = state;
                break;
            case 39:
                this.keyState.arrow_right = state;
                break;
            case 40:
                this.keyState.arrow_down = state;
                break;
            case 13:
                // enter
                break;
        }
    };
    GameData.prototype.checkDuplicateArrow = function () {
        var arrowDownCount = 0;
        [
            this.keyState.arrow_down,
            this.keyState.arrow_left,
            this.keyState.arrow_up,
            this.keyState.arrow_right
        ].forEach(function (arrow) {
            if (arrow) {
                arrowDownCount++;
            }
        });
        return arrowDownCount > 1;
    };
    GameData.prototype.findObject = function (id) {
        for (var i = 0; i < this.objects.length; i++) {
            if (this.objects[i].id === id) {
                return this.objects[i];
            }
        }
        return null;
    };
    return GameData;
}());



/***/ }),

/***/ "./src/GameObject.ts":
/*!***************************!*\
  !*** ./src/GameObject.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var GameObject = /** @class */ (function () {
    function GameObject(id, spriteData, initialPosition) {
        this.id = id;
        this.spriteData = spriteData;
        if (initialPosition != undefined) {
            this.position = initialPosition;
        }
        else {
            this.position.x = 0;
            this.position.y = 0;
        }
        this.position.w = this.spriteData.spritePosition.w;
        this.position.h = this.spriteData.spritePosition.h;
    }
    return GameObject;
}());
/* harmony default export */ __webpack_exports__["default"] = (GameObject);


/***/ }),

/***/ "./src/TankObject.ts":
/*!***************************!*\
  !*** ./src/TankObject.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameObject */ "./src/GameObject.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TankObject = /** @class */ (function (_super) {
    __extends(TankObject, _super);
    function TankObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TankObject.prototype.draw = function () {
        throw new Error("Method not implemented.");
    };
    return TankObject;
}(_GameObject__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (TankObject);


/***/ }),

/***/ "./src/images/sprite.png":
/*!*******************************!*\
  !*** ./src/images/sprite.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../dist/js/sprite.png");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ "./src/Game.ts");

var canvas = document.getElementById("canvas");
// init game
var game = new _Game__WEBPACK_IMPORTED_MODULE_0__["default"](canvas);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWVEYXRhLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lT2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9UYW5rT2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvc3ByaXRlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBc0M7QUFDQTtBQUN0QyxhQUFhLG1CQUFPLENBQUMsb0RBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGtEQUFRO0FBQ3JDLHdDQUF3QyxtREFBVTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxjQUFjLEVBQUU7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDYyxtRUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDaEdwQjtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIseUJBQXlCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNtQjs7Ozs7Ozs7Ozs7OztBQ2hEcEI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ2MseUVBQVUsRUFBQzs7Ozs7Ozs7Ozs7OztBQ2hCMUI7QUFBQTtBQUFBLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3QjtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ3ZGLDZCQUE2Qix1REFBdUQ7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDO0FBQ3FDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsQ0FBQyxtREFBVTtBQUNHLHlFQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUN4QjFCO0FBQWUsc0ZBQXVCLEU7Ozs7Ozs7Ozs7OztBQ0F0QztBQUFBO0FBQTBCO0FBQzFCO0FBQ0E7QUFDQSxlQUFlLDZDQUFJIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgeyBHYW1lRGF0YSB9IGZyb20gXCIuL0dhbWVEYXRhXCI7XHJcbmltcG9ydCBUYW5rT2JqZWN0IGZyb20gXCIuL1RhbmtPYmplY3RcIjtcclxudmFyIHNwcml0ZSA9IHJlcXVpcmUoJy4vaW1hZ2VzL3Nwcml0ZS5wbmcnKTtcclxudmFyIE1BWF9GUFMgPSA2MDtcclxudmFyIERSQVdBQkxFUyA9IHtcclxuICAgIGRpc3BsYXlfYmFja2dyb3VuZDogXCIjMDAwMDAwXCIsXHJcbiAgICBkaXNwbGF5X2JvcmRlcjogXCIjM2YzZjNmXCJcclxufTtcclxudmFyIEdhbWUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBHYW1lKGNhbnZhcywgb3B0aW9ucykge1xyXG4gICAgICAgIC8vIGluaXQgZGlzcGxheVxyXG4gICAgICAgIHRoaXMuX2Nhdm5hcyA9IGNhbnZhcztcclxuICAgICAgICB0aGlzLl9jdHggPSB0aGlzLl9jYXZuYXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZSA9IHNwcml0ZTtcclxuICAgICAgICBpZiAob3B0aW9ucyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZUNhbnZhcygpO1xyXG4gICAgICAgIC8vIGluaXQgZ2FtZSBkYXRhXHJcbiAgICAgICAgdGhpcy5fZ2FtZURhdGEgPSBuZXcgR2FtZURhdGEoKTtcclxuICAgICAgICB0aGlzLl9nYW1lRGF0YS5vYmplY3RzLnB1c2gobmV3IFRhbmtPYmplY3QoXCJtYWluXCIsIHtcclxuICAgICAgICAgICAgc3ByaXRlSW1hZ2U6IHRoaXMuX3Nwcml0ZSxcclxuICAgICAgICAgICAgc3ByaXRlUG9zaXRpb246IHtcclxuICAgICAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgICAgICB5OiAwLFxyXG4gICAgICAgICAgICAgICAgdzogMTYsXHJcbiAgICAgICAgICAgICAgICBoOiAxNlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICB4OiAxNixcclxuICAgICAgICAgICAgeTogMjNcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgLy8gaW5pdCBkcmF3IHNldHRpbmdcclxuICAgICAgICB0aGlzLl9mcHNJbnRlcnZhbCA9IDEwMDAgLyBNQVhfRlBTO1xyXG4gICAgICAgIHRoaXMuX3RoZW4gPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIHRoaXMuZHJhdygpO1xyXG4gICAgfVxyXG4gICAgR2FtZS5wcm90b3R5cGUuaW5pdGlhbGl6ZUNhbnZhcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX2Nhdm5hcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIHRoaXMuX2Nhdm5hcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgICAgIF90aGlzLl9nYW1lRGF0YS51cGRhdGVLZXlzdGF0ZShldi5rZXlDb2RlLCB0cnVlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgICAgIF90aGlzLl9nYW1lRGF0YS51cGRhdGVLZXlzdGF0ZShldi5rZXlDb2RlLCBmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgR2FtZS5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIC8vIHJlcXVlc3QgYW5vdGhlciBmcmFtZVxyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7IF90aGlzLmRyYXcoKTsgfSk7XHJcbiAgICAgICAgdGhpcy5fbm93ID0gRGF0ZS5ub3coKTtcclxuICAgICAgICB0aGlzLl9lbGFwc2VkID0gdGhpcy5fbm93IC0gdGhpcy5fdGhlbjtcclxuICAgICAgICAvLyBmcHNJbnRlcnZhbCDsnbTsg4HsnZgg7Iuc6rCE7J20IOyngOuCmOuptCDtlITroIjsnoTsnYQg7ZWY64KYIOuwm+ydgCDqsoPsnLzroZwg7Leo6riJXHJcbiAgICAgICAgaWYgKHRoaXMuX2VsYXBzZWQgPiB0aGlzLl9mcHNJbnRlcnZhbCkge1xyXG4gICAgICAgICAgICB0aGlzLl90aGVuID0gdGhpcy5fbm93IC0gKHRoaXMuX2VsYXBzZWQgJSB0aGlzLl9mcHNJbnRlcnZhbCk7XHJcbiAgICAgICAgICAgIC8vIOunjOyVvSDtmZTsgrTtkZwg7YKk66W8IOuPmeyLnOyXkCDriITrpbTsp4Ag7JWK7J2AIOyDge2DnOudvOuptCDsnbTrj5kg7LKY66as7ZWoLlxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2dhbWVEYXRhLmNoZWNrRHVwbGljYXRlQXJyb3coKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1haW4gPSB0aGlzLl9nYW1lRGF0YS5maW5kT2JqZWN0KFwibWFpblwiKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9nYW1lRGF0YS5rZXlTdGF0ZS5hcnJvd19yaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1haW4ucG9zaXRpb24ueCsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fZ2FtZURhdGEua2V5U3RhdGUuYXJyb3dfbGVmdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1haW4ucG9zaXRpb24ueC0tO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fZ2FtZURhdGEua2V5U3RhdGUuYXJyb3dfdXApIHtcclxuICAgICAgICAgICAgICAgICAgICBtYWluLnBvc2l0aW9uLnktLTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX2dhbWVEYXRhLmtleVN0YXRlLmFycm93X2Rvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICBtYWluLnBvc2l0aW9uLnkrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjbGVhciBzY3JlZW5cclxuICAgICAgICAgICAgdGhpcy5fY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLl9jdHguY2FudmFzLmNsaWVudFdpZHRoLCB0aGlzLl9jdHguY2FudmFzLmNsaWVudEhlaWdodCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2dhbWVEYXRhLm9iamVjdHMuZm9yRWFjaChmdW5jdGlvbiAob2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5fY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcclxuICAgICAgICAgICAgICAgIF90aGlzLl9jdHguZmlsbFJlY3Qob2JqZWN0LnBvc2l0aW9uLngsIG9iamVjdC5wb3NpdGlvbi55LCBvYmplY3QucG9zaXRpb24udywgb2JqZWN0LnBvc2l0aW9uLmgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gZHJhdyBkZWJ1ZyBjb3VudGVyXHJcbiAgICAgICAgICAgIHRoaXMuZHJhd0RlYnVnQ291bnRlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBHYW1lLnByb3RvdHlwZS5kcmF3RGVidWdDb3VudGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBkZWJ1Z1RleHQgPSB0aGlzLl9lbGFwc2VkLnRvRml4ZWQoMikgKyBcIm1zIHBlciBmcmFtZVwiO1xyXG4gICAgICAgIGRlYnVnVGV4dCArPSBcInJpZ2h0OiBcIiArIHRoaXMuX2dhbWVEYXRhLmtleVN0YXRlLmFycm93X3JpZ2h0O1xyXG4gICAgICAgIHZhciBjdHggPSB0aGlzLl9jYXZuYXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgIGN0eC5mb250ID0gJzEycHggc2FuLXNlcmlmJztcclxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnd2hpdGUnO1xyXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAyO1xyXG4gICAgICAgIGN0eC5zdHJva2VUZXh0KGRlYnVnVGV4dCwgMCwgMjApO1xyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAnYmxhY2snO1xyXG4gICAgICAgIGN0eC5maWxsVGV4dChkZWJ1Z1RleHQsIDAsIDIwKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gR2FtZTtcclxufSgpKTtcclxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcclxuIiwidmFyIEdhbWVEYXRhID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gR2FtZURhdGEoKSB7XHJcbiAgICAgICAgdGhpcy5rZXlTdGF0ZSA9IHt9O1xyXG4gICAgICAgIHRoaXMub2JqZWN0cyA9IFtdO1xyXG4gICAgfVxyXG4gICAgR2FtZURhdGEucHJvdG90eXBlLnVwZGF0ZUtleXN0YXRlID0gZnVuY3Rpb24gKGtleUNvZGUsIHN0YXRlKSB7XHJcbiAgICAgICAgc3dpdGNoIChrZXlDb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMzc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtleVN0YXRlLmFycm93X2xlZnQgPSBzdGF0ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM4OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5rZXlTdGF0ZS5hcnJvd191cCA9IHN0YXRlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzk6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtleVN0YXRlLmFycm93X3JpZ2h0ID0gc3RhdGU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA0MDpcclxuICAgICAgICAgICAgICAgIHRoaXMua2V5U3RhdGUuYXJyb3dfZG93biA9IHN0YXRlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTM6XHJcbiAgICAgICAgICAgICAgICAvLyBlbnRlclxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEdhbWVEYXRhLnByb3RvdHlwZS5jaGVja0R1cGxpY2F0ZUFycm93ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBhcnJvd0Rvd25Db3VudCA9IDA7XHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICB0aGlzLmtleVN0YXRlLmFycm93X2Rvd24sXHJcbiAgICAgICAgICAgIHRoaXMua2V5U3RhdGUuYXJyb3dfbGVmdCxcclxuICAgICAgICAgICAgdGhpcy5rZXlTdGF0ZS5hcnJvd191cCxcclxuICAgICAgICAgICAgdGhpcy5rZXlTdGF0ZS5hcnJvd19yaWdodFxyXG4gICAgICAgIF0uZm9yRWFjaChmdW5jdGlvbiAoYXJyb3cpIHtcclxuICAgICAgICAgICAgaWYgKGFycm93KSB7XHJcbiAgICAgICAgICAgICAgICBhcnJvd0Rvd25Db3VudCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGFycm93RG93bkNvdW50ID4gMTtcclxuICAgIH07XHJcbiAgICBHYW1lRGF0YS5wcm90b3R5cGUuZmluZE9iamVjdCA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vYmplY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9iamVjdHNbaV0uaWQgPT09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5vYmplY3RzW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBHYW1lRGF0YTtcclxufSgpKTtcclxuZXhwb3J0IHsgR2FtZURhdGEgfTtcclxuIiwidmFyIEdhbWVPYmplY3QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBHYW1lT2JqZWN0KGlkLCBzcHJpdGVEYXRhLCBpbml0aWFsUG9zaXRpb24pIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5zcHJpdGVEYXRhID0gc3ByaXRlRGF0YTtcclxuICAgICAgICBpZiAoaW5pdGlhbFBvc2l0aW9uICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gaW5pdGlhbFBvc2l0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi53ID0gdGhpcy5zcHJpdGVEYXRhLnNwcml0ZVBvc2l0aW9uLnc7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5oID0gdGhpcy5zcHJpdGVEYXRhLnNwcml0ZVBvc2l0aW9uLmg7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gR2FtZU9iamVjdDtcclxufSgpKTtcclxuZXhwb3J0IGRlZmF1bHQgR2FtZU9iamVjdDtcclxuIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbmltcG9ydCBHYW1lT2JqZWN0IGZyb20gXCIuL0dhbWVPYmplY3RcIjtcclxudmFyIFRhbmtPYmplY3QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoVGFua09iamVjdCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFRhbmtPYmplY3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgVGFua09iamVjdC5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gVGFua09iamVjdDtcclxufShHYW1lT2JqZWN0KSk7XHJcbmV4cG9ydCBkZWZhdWx0IFRhbmtPYmplY3Q7XHJcbiIsImV4cG9ydCBkZWZhdWx0IFwiLi4vZGlzdC9qcy9zcHJpdGUucG5nXCI7IiwiaW1wb3J0IEdhbWUgZnJvbSBcIi4vR2FtZVwiO1xyXG52YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XHJcbi8vIGluaXQgZ2FtZVxyXG52YXIgZ2FtZSA9IG5ldyBHYW1lKGNhbnZhcyk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=