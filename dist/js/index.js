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
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameObject */ "./src/GameObject.ts");
/* harmony import */ var _GameData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameData */ "./src/GameData.ts");
/* harmony import */ var _TankObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TankObject */ "./src/TankObject.ts");



var SPRITE_IMAGE_SRC = './js/sprite.png';
var MAX_FPS = 60;
var DRAWABLES = {
    display_background: "#000000",
    display_border: "#3f3f3f"
};
var Game = /** @class */ (function () {
    function Game(canvas, options) {
        var _this = this;
        // init display
        this._cavnas = canvas;
        this._ctx = this._cavnas.getContext("2d");
        if (options != undefined) {
            this._options = options;
        }
        this.initializeCanvas();
        // init game data
        this._gameData = new _GameData__WEBPACK_IMPORTED_MODULE_1__["GameData"]();
        // init draw setting
        this._fpsInterval = 1000 / MAX_FPS;
        this._then = performance.now();
        // load sprite
        this._sprite = new Image();
        this._sprite.onload = function () {
            _this._gameData.objects.push(new _TankObject__WEBPACK_IMPORTED_MODULE_2__["default"]("main", _this._sprite, {
                color: _TankObject__WEBPACK_IMPORTED_MODULE_2__["TankColor"].yellow,
                level: 0
            }, {
                x: 16,
                y: 23,
                width: 16,
                height: 16,
                heading: _GameObject__WEBPACK_IMPORTED_MODULE_0__["Heading"].up
            }));
            _this.draw();
        };
        this._sprite.src = SPRITE_IMAGE_SRC;
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
        this._now = performance.now();
        this._elapsed = this._now - this._then;
        // fpsInterval 이상의 시간이 지나면 프레임을 하나 받은 것으로 취급
        if (this._elapsed > this._fpsInterval) {
            this._then = this._now - (this._elapsed % this._fpsInterval);
            // 만약 화살표 키를 동시에 누르지 않은 상태라면 이동 처리함.
            if (!this._gameData.checkDuplicateArrow()) {
                var main = this._gameData.findObject("main");
                main.move(this._gameData.keyState);
            }
            // clear screen
            this._ctx.clearRect(0, 0, this._ctx.canvas.clientWidth, this._ctx.canvas.clientHeight);
            this._gameData.objects.forEach(function (object) {
                object.draw(_this._ctx);
            });
            // draw debug counter
            this.drawDebugCounter();
        }
    };
    Game.prototype.drawDebugCounter = function () {
        var debugText = (1000 / this._elapsed).toFixed(2) + "fps ";
        debugText += "right: " + this._gameData.keyState.arrow_right;
        var ctx = this._ctx;
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
/*! exports provided: default, Heading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Heading", function() { return Heading; });
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
        if (this.spriteData.spritePosition instanceof Array) {
            var position = this.spriteData.spritePosition;
            if (position.length > 0) {
                this.position.width = position[0].width;
                this.position.height = position[0].height;
            }
        }
        else {
            var position = this.spriteData.spritePosition;
            this.position.width = position.width;
            this.position.height = position.height;
        }
    }
    GameObject.prototype.move = function (keyState) {
        if (keyState.arrow_right) {
            this.position.x++;
            this.position.heading = Heading.right;
            return true;
        }
        else if (keyState.arrow_left) {
            this.position.x--;
            this.position.heading = Heading.left;
            return true;
        }
        else if (keyState.arrow_up) {
            this.position.y--;
            this.position.heading = Heading.up;
            return true;
        }
        else if (keyState.arrow_down) {
            this.position.y++;
            this.position.heading = Heading.down;
            return true;
        }
        return false;
    };
    return GameObject;
}());
/* harmony default export */ __webpack_exports__["default"] = (GameObject);
var Heading;
(function (Heading) {
    Heading["up"] = "up";
    Heading["right"] = "right";
    Heading["down"] = "down";
    Heading["left"] = "left";
})(Heading || (Heading = {}));
;


/***/ }),

/***/ "./src/Sprite.ts":
/*!***********************!*\
  !*** ./src/Sprite.ts ***!
  \***********************/
/*! exports provided: SPRITE_DEFINITION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPRITE_DEFINITION", function() { return SPRITE_DEFINITION; });
var SPRITE_DEFINITION = {
    tank: [
        {
            yellow: {
                up: [{ x: 0, y: 0, width: 16, height: 16 }, { x: 16, y: 0, width: 16, height: 16 }],
                left: [{ x: 32, y: 0, width: 16, height: 16 }, { x: 48, y: 0, width: 16, height: 16 }],
                down: [{ x: 64, y: 0, width: 16, height: 16 }, { x: 80, y: 0, width: 16, height: 16 }],
                right: [{ x: 96, y: 0, width: 16, height: 16 }, { x: 112, y: 0, width: 16, height: 16 }]
            },
            white: {
                up: [{ x: 0, y: 0, width: 16, height: 16 }, { x: 16, y: 0, width: 16, height: 16 }],
                left: [{ x: 32, y: 0, width: 16, height: 16 }, { x: 48, y: 0, width: 16, height: 16 }],
                down: [{ x: 64, y: 0, width: 16, height: 16 }, { x: 80, y: 0, width: 16, height: 16 }],
                right: [{ x: 96, y: 0, width: 16, height: 16 }, { x: 112, y: 0, width: 16, height: 16 }]
            },
            green: {
                up: [{ x: 0, y: 0, width: 16, height: 16 }, { x: 16, y: 0, width: 16, height: 16 }],
                left: [{ x: 32, y: 0, width: 16, height: 16 }, { x: 48, y: 0, width: 16, height: 16 }],
                down: [{ x: 64, y: 0, width: 16, height: 16 }, { x: 80, y: 0, width: 16, height: 16 }],
                right: [{ x: 96, y: 0, width: 16, height: 16 }, { x: 112, y: 0, width: 16, height: 16 }]
            },
            red: {
                up: [{ x: 0, y: 0, width: 16, height: 16 }, { x: 16, y: 0, width: 16, height: 16 }],
                left: [{ x: 32, y: 0, width: 16, height: 16 }, { x: 48, y: 0, width: 16, height: 16 }],
                down: [{ x: 64, y: 0, width: 16, height: 16 }, { x: 80, y: 0, width: 16, height: 16 }],
                right: [{ x: 96, y: 0, width: 16, height: 16 }, { x: 112, y: 0, width: 16, height: 16 }]
            }
        }
    ]
};


/***/ }),

/***/ "./src/TankObject.ts":
/*!***************************!*\
  !*** ./src/TankObject.ts ***!
  \***************************/
/*! exports provided: TankColor, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TankColor", function() { return TankColor; });
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameObject */ "./src/GameObject.ts");
/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sprite */ "./src/Sprite.ts");
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


;
var TankColor;
(function (TankColor) {
    TankColor["yellow"] = "yellow";
    TankColor["white"] = "white";
    TankColor["green"] = "green";
    TankColor["red"] = "red";
})(TankColor || (TankColor = {}));
;
var TankObject = /** @class */ (function (_super) {
    __extends(TankObject, _super);
    function TankObject(id, spriteImage, tankType, initialPosition) {
        var _this = this;
        console.log(tankType.color);
        var tankSprites = _Sprite__WEBPACK_IMPORTED_MODULE_1__["SPRITE_DEFINITION"].tank[tankType.level][tankType.color];
        var spriteData = {
            spriteImage: spriteImage,
            spritePosition: tankSprites.up
        };
        _this = _super.call(this, id, spriteData, initialPosition) || this;
        _this._tankSprites = tankSprites;
        _this._spritePosition = 0;
        return _this;
    }
    TankObject.prototype.move = function (keyState) {
        var moved = _super.prototype.move.call(this, keyState);
        if (moved) {
            this._spritePosition = this._spritePosition + 1 > 1 ? 0 : this._spritePosition + 1;
            console.log('move');
        }
        return moved;
    };
    TankObject.prototype.draw = function (context) {
        var spriteData = this._tankSprites[this.position.heading][this._spritePosition];
        context.fillStyle = "black";
        context.drawImage(this.spriteData.spriteImage, spriteData.x, spriteData.y, spriteData.width, spriteData.height, this.position.x, this.position.y, this.position.width, this.position.height);
    };
    return TankObject;
}(_GameObject__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (TankObject);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWVEYXRhLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lT2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9TcHJpdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RhbmtPYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBdUM7QUFDRDtBQUNlO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsa0RBQVE7QUFDckM7QUFD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QUN2Riw2QkFBNkIsdURBQXVEO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQztBQUNxQztBQUNPO0FBQzdDO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyw4QkFBOEI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHlEQUFpQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxDQUFDLG1EQUFVO0FBQ0cseUVBQVUsRUFBQzs7Ozs7Ozs7Ozs7OztBQ3REMUI7QUFBQTtBQUEwQjtBQUMxQjtBQUNBO0FBQ0EsZUFBZSw2Q0FBSSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IHsgSGVhZGluZyB9IGZyb20gXCIuL0dhbWVPYmplY3RcIjtcclxuaW1wb3J0IHsgR2FtZURhdGEgfSBmcm9tIFwiLi9HYW1lRGF0YVwiO1xyXG5pbXBvcnQgVGFua09iamVjdCwgeyBUYW5rQ29sb3IgfSBmcm9tIFwiLi9UYW5rT2JqZWN0XCI7XHJcbnZhciBTUFJJVEVfSU1BR0VfU1JDID0gJy4vanMvc3ByaXRlLnBuZyc7XHJcbnZhciBNQVhfRlBTID0gNjA7XHJcbnZhciBEUkFXQUJMRVMgPSB7XHJcbiAgICBkaXNwbGF5X2JhY2tncm91bmQ6IFwiIzAwMDAwMFwiLFxyXG4gICAgZGlzcGxheV9ib3JkZXI6IFwiIzNmM2YzZlwiXHJcbn07XHJcbnZhciBHYW1lID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gR2FtZShjYW52YXMsIG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIC8vIGluaXQgZGlzcGxheVxyXG4gICAgICAgIHRoaXMuX2Nhdm5hcyA9IGNhbnZhcztcclxuICAgICAgICB0aGlzLl9jdHggPSB0aGlzLl9jYXZuYXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgIGlmIChvcHRpb25zICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplQ2FudmFzKCk7XHJcbiAgICAgICAgLy8gaW5pdCBnYW1lIGRhdGFcclxuICAgICAgICB0aGlzLl9nYW1lRGF0YSA9IG5ldyBHYW1lRGF0YSgpO1xyXG4gICAgICAgIC8vIGluaXQgZHJhdyBzZXR0aW5nXHJcbiAgICAgICAgdGhpcy5fZnBzSW50ZXJ2YWwgPSAxMDAwIC8gTUFYX0ZQUztcclxuICAgICAgICB0aGlzLl90aGVuID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgLy8gbG9hZCBzcHJpdGVcclxuICAgICAgICB0aGlzLl9zcHJpdGUgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICB0aGlzLl9zcHJpdGUub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBfdGhpcy5fZ2FtZURhdGEub2JqZWN0cy5wdXNoKG5ldyBUYW5rT2JqZWN0KFwibWFpblwiLCBfdGhpcy5fc3ByaXRlLCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogVGFua0NvbG9yLnllbGxvdyxcclxuICAgICAgICAgICAgICAgIGxldmVsOiAwXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHg6IDE2LFxyXG4gICAgICAgICAgICAgICAgeTogMjMsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTYsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE2LFxyXG4gICAgICAgICAgICAgICAgaGVhZGluZzogSGVhZGluZy51cFxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIF90aGlzLmRyYXcoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZS5zcmMgPSBTUFJJVEVfSU1BR0VfU1JDO1xyXG4gICAgfVxyXG4gICAgR2FtZS5wcm90b3R5cGUuaW5pdGlhbGl6ZUNhbnZhcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX2Nhdm5hcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIHRoaXMuX2Nhdm5hcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgICAgIF90aGlzLl9nYW1lRGF0YS51cGRhdGVLZXlzdGF0ZShldi5rZXlDb2RlLCB0cnVlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgICAgIF90aGlzLl9nYW1lRGF0YS51cGRhdGVLZXlzdGF0ZShldi5rZXlDb2RlLCBmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgR2FtZS5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIC8vIHJlcXVlc3QgYW5vdGhlciBmcmFtZVxyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7IF90aGlzLmRyYXcoKTsgfSk7XHJcbiAgICAgICAgdGhpcy5fbm93ID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgdGhpcy5fZWxhcHNlZCA9IHRoaXMuX25vdyAtIHRoaXMuX3RoZW47XHJcbiAgICAgICAgLy8gZnBzSW50ZXJ2YWwg7J207IOB7J2YIOyLnOqwhOydtCDsp4DrgpjrqbQg7ZSE66CI7J6E7J2EIO2VmOuCmCDrsJvsnYAg6rKD7Jy866GcIOy3qOq4iVxyXG4gICAgICAgIGlmICh0aGlzLl9lbGFwc2VkID4gdGhpcy5fZnBzSW50ZXJ2YWwpIHtcclxuICAgICAgICAgICAgdGhpcy5fdGhlbiA9IHRoaXMuX25vdyAtICh0aGlzLl9lbGFwc2VkICUgdGhpcy5fZnBzSW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICAvLyDrp4zslb0g7ZmU7IK07ZGcIO2CpOulvCDrj5nsi5zsl5Ag64iE66W07KeAIOyViuydgCDsg4Htg5zrnbzrqbQg7J2064+ZIOyymOumrO2VqC5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9nYW1lRGF0YS5jaGVja0R1cGxpY2F0ZUFycm93KCkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBtYWluID0gdGhpcy5fZ2FtZURhdGEuZmluZE9iamVjdChcIm1haW5cIik7XHJcbiAgICAgICAgICAgICAgICBtYWluLm1vdmUodGhpcy5fZ2FtZURhdGEua2V5U3RhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNsZWFyIHNjcmVlblxyXG4gICAgICAgICAgICB0aGlzLl9jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuX2N0eC5jYW52YXMuY2xpZW50V2lkdGgsIHRoaXMuX2N0eC5jYW52YXMuY2xpZW50SGVpZ2h0KTtcclxuICAgICAgICAgICAgdGhpcy5fZ2FtZURhdGEub2JqZWN0cy5mb3JFYWNoKGZ1bmN0aW9uIChvYmplY3QpIHtcclxuICAgICAgICAgICAgICAgIG9iamVjdC5kcmF3KF90aGlzLl9jdHgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gZHJhdyBkZWJ1ZyBjb3VudGVyXHJcbiAgICAgICAgICAgIHRoaXMuZHJhd0RlYnVnQ291bnRlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBHYW1lLnByb3RvdHlwZS5kcmF3RGVidWdDb3VudGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBkZWJ1Z1RleHQgPSAoMTAwMCAvIHRoaXMuX2VsYXBzZWQpLnRvRml4ZWQoMikgKyBcImZwcyBcIjtcclxuICAgICAgICBkZWJ1Z1RleHQgKz0gXCJyaWdodDogXCIgKyB0aGlzLl9nYW1lRGF0YS5rZXlTdGF0ZS5hcnJvd19yaWdodDtcclxuICAgICAgICB2YXIgY3R4ID0gdGhpcy5fY3R4O1xyXG4gICAgICAgIGN0eC5mb250ID0gJzEycHggc2FuLXNlcmlmJztcclxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnd2hpdGUnO1xyXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAyO1xyXG4gICAgICAgIGN0eC5zdHJva2VUZXh0KGRlYnVnVGV4dCwgMCwgMjApO1xyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAnYmxhY2snO1xyXG4gICAgICAgIGN0eC5maWxsVGV4dChkZWJ1Z1RleHQsIDAsIDIwKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gR2FtZTtcclxufSgpKTtcclxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcclxuIiwidmFyIEdhbWVEYXRhID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gR2FtZURhdGEoKSB7XHJcbiAgICAgICAgdGhpcy5rZXlTdGF0ZSA9IHt9O1xyXG4gICAgICAgIHRoaXMub2JqZWN0cyA9IFtdO1xyXG4gICAgfVxyXG4gICAgR2FtZURhdGEucHJvdG90eXBlLnVwZGF0ZUtleXN0YXRlID0gZnVuY3Rpb24gKGtleUNvZGUsIHN0YXRlKSB7XHJcbiAgICAgICAgc3dpdGNoIChrZXlDb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMzc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtleVN0YXRlLmFycm93X2xlZnQgPSBzdGF0ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM4OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5rZXlTdGF0ZS5hcnJvd191cCA9IHN0YXRlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzk6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtleVN0YXRlLmFycm93X3JpZ2h0ID0gc3RhdGU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA0MDpcclxuICAgICAgICAgICAgICAgIHRoaXMua2V5U3RhdGUuYXJyb3dfZG93biA9IHN0YXRlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTM6XHJcbiAgICAgICAgICAgICAgICAvLyBlbnRlclxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEdhbWVEYXRhLnByb3RvdHlwZS5jaGVja0R1cGxpY2F0ZUFycm93ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBhcnJvd0Rvd25Db3VudCA9IDA7XHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICB0aGlzLmtleVN0YXRlLmFycm93X2Rvd24sXHJcbiAgICAgICAgICAgIHRoaXMua2V5U3RhdGUuYXJyb3dfbGVmdCxcclxuICAgICAgICAgICAgdGhpcy5rZXlTdGF0ZS5hcnJvd191cCxcclxuICAgICAgICAgICAgdGhpcy5rZXlTdGF0ZS5hcnJvd19yaWdodFxyXG4gICAgICAgIF0uZm9yRWFjaChmdW5jdGlvbiAoYXJyb3cpIHtcclxuICAgICAgICAgICAgaWYgKGFycm93KSB7XHJcbiAgICAgICAgICAgICAgICBhcnJvd0Rvd25Db3VudCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGFycm93RG93bkNvdW50ID4gMTtcclxuICAgIH07XHJcbiAgICBHYW1lRGF0YS5wcm90b3R5cGUuZmluZE9iamVjdCA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vYmplY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9iamVjdHNbaV0uaWQgPT09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5vYmplY3RzW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBHYW1lRGF0YTtcclxufSgpKTtcclxuZXhwb3J0IHsgR2FtZURhdGEgfTtcclxuIiwidmFyIEdhbWVPYmplY3QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBHYW1lT2JqZWN0KGlkLCBzcHJpdGVEYXRhLCBpbml0aWFsUG9zaXRpb24pIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5zcHJpdGVEYXRhID0gc3ByaXRlRGF0YTtcclxuICAgICAgICBpZiAoaW5pdGlhbFBvc2l0aW9uICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gaW5pdGlhbFBvc2l0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc3ByaXRlRGF0YS5zcHJpdGVQb3NpdGlvbiBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgIHZhciBwb3NpdGlvbiA9IHRoaXMuc3ByaXRlRGF0YS5zcHJpdGVQb3NpdGlvbjtcclxuICAgICAgICAgICAgaWYgKHBvc2l0aW9uLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ud2lkdGggPSBwb3NpdGlvblswXS53aWR0aDtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24uaGVpZ2h0ID0gcG9zaXRpb25bMF0uaGVpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgcG9zaXRpb24gPSB0aGlzLnNwcml0ZURhdGEuc3ByaXRlUG9zaXRpb247XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ud2lkdGggPSBwb3NpdGlvbi53aWR0aDtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5oZWlnaHQgPSBwb3NpdGlvbi5oZWlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgR2FtZU9iamVjdC5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uIChrZXlTdGF0ZSkge1xyXG4gICAgICAgIGlmIChrZXlTdGF0ZS5hcnJvd19yaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLngrKztcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5oZWFkaW5nID0gSGVhZGluZy5yaWdodDtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGtleVN0YXRlLmFycm93X2xlZnQpIHtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54LS07XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24uaGVhZGluZyA9IEhlYWRpbmcubGVmdDtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGtleVN0YXRlLmFycm93X3VwKSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueS0tO1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLmhlYWRpbmcgPSBIZWFkaW5nLnVwO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoa2V5U3RhdGUuYXJyb3dfZG93bikge1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkrKztcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5oZWFkaW5nID0gSGVhZGluZy5kb3duO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBHYW1lT2JqZWN0O1xyXG59KCkpO1xyXG5leHBvcnQgZGVmYXVsdCBHYW1lT2JqZWN0O1xyXG5leHBvcnQgdmFyIEhlYWRpbmc7XHJcbihmdW5jdGlvbiAoSGVhZGluZykge1xyXG4gICAgSGVhZGluZ1tcInVwXCJdID0gXCJ1cFwiO1xyXG4gICAgSGVhZGluZ1tcInJpZ2h0XCJdID0gXCJyaWdodFwiO1xyXG4gICAgSGVhZGluZ1tcImRvd25cIl0gPSBcImRvd25cIjtcclxuICAgIEhlYWRpbmdbXCJsZWZ0XCJdID0gXCJsZWZ0XCI7XHJcbn0pKEhlYWRpbmcgfHwgKEhlYWRpbmcgPSB7fSkpO1xyXG47XHJcbiIsImV4cG9ydCB2YXIgU1BSSVRFX0RFRklOSVRJT04gPSB7XHJcbiAgICB0YW5rOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB5ZWxsb3c6IHtcclxuICAgICAgICAgICAgICAgIHVwOiBbeyB4OiAwLCB5OiAwLCB3aWR0aDogMTYsIGhlaWdodDogMTYgfSwgeyB4OiAxNiwgeTogMCwgd2lkdGg6IDE2LCBoZWlnaHQ6IDE2IH1dLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW3sgeDogMzIsIHk6IDAsIHdpZHRoOiAxNiwgaGVpZ2h0OiAxNiB9LCB7IHg6IDQ4LCB5OiAwLCB3aWR0aDogMTYsIGhlaWdodDogMTYgfV0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbeyB4OiA2NCwgeTogMCwgd2lkdGg6IDE2LCBoZWlnaHQ6IDE2IH0sIHsgeDogODAsIHk6IDAsIHdpZHRoOiAxNiwgaGVpZ2h0OiAxNiB9XSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbeyB4OiA5NiwgeTogMCwgd2lkdGg6IDE2LCBoZWlnaHQ6IDE2IH0sIHsgeDogMTEyLCB5OiAwLCB3aWR0aDogMTYsIGhlaWdodDogMTYgfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgd2hpdGU6IHtcclxuICAgICAgICAgICAgICAgIHVwOiBbeyB4OiAwLCB5OiAwLCB3aWR0aDogMTYsIGhlaWdodDogMTYgfSwgeyB4OiAxNiwgeTogMCwgd2lkdGg6IDE2LCBoZWlnaHQ6IDE2IH1dLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW3sgeDogMzIsIHk6IDAsIHdpZHRoOiAxNiwgaGVpZ2h0OiAxNiB9LCB7IHg6IDQ4LCB5OiAwLCB3aWR0aDogMTYsIGhlaWdodDogMTYgfV0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbeyB4OiA2NCwgeTogMCwgd2lkdGg6IDE2LCBoZWlnaHQ6IDE2IH0sIHsgeDogODAsIHk6IDAsIHdpZHRoOiAxNiwgaGVpZ2h0OiAxNiB9XSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbeyB4OiA5NiwgeTogMCwgd2lkdGg6IDE2LCBoZWlnaHQ6IDE2IH0sIHsgeDogMTEyLCB5OiAwLCB3aWR0aDogMTYsIGhlaWdodDogMTYgfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ3JlZW46IHtcclxuICAgICAgICAgICAgICAgIHVwOiBbeyB4OiAwLCB5OiAwLCB3aWR0aDogMTYsIGhlaWdodDogMTYgfSwgeyB4OiAxNiwgeTogMCwgd2lkdGg6IDE2LCBoZWlnaHQ6IDE2IH1dLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW3sgeDogMzIsIHk6IDAsIHdpZHRoOiAxNiwgaGVpZ2h0OiAxNiB9LCB7IHg6IDQ4LCB5OiAwLCB3aWR0aDogMTYsIGhlaWdodDogMTYgfV0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbeyB4OiA2NCwgeTogMCwgd2lkdGg6IDE2LCBoZWlnaHQ6IDE2IH0sIHsgeDogODAsIHk6IDAsIHdpZHRoOiAxNiwgaGVpZ2h0OiAxNiB9XSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbeyB4OiA5NiwgeTogMCwgd2lkdGg6IDE2LCBoZWlnaHQ6IDE2IH0sIHsgeDogMTEyLCB5OiAwLCB3aWR0aDogMTYsIGhlaWdodDogMTYgfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmVkOiB7XHJcbiAgICAgICAgICAgICAgICB1cDogW3sgeDogMCwgeTogMCwgd2lkdGg6IDE2LCBoZWlnaHQ6IDE2IH0sIHsgeDogMTYsIHk6IDAsIHdpZHRoOiAxNiwgaGVpZ2h0OiAxNiB9XSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFt7IHg6IDMyLCB5OiAwLCB3aWR0aDogMTYsIGhlaWdodDogMTYgfSwgeyB4OiA0OCwgeTogMCwgd2lkdGg6IDE2LCBoZWlnaHQ6IDE2IH1dLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW3sgeDogNjQsIHk6IDAsIHdpZHRoOiAxNiwgaGVpZ2h0OiAxNiB9LCB7IHg6IDgwLCB5OiAwLCB3aWR0aDogMTYsIGhlaWdodDogMTYgfV0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW3sgeDogOTYsIHk6IDAsIHdpZHRoOiAxNiwgaGVpZ2h0OiAxNiB9LCB7IHg6IDExMiwgeTogMCwgd2lkdGg6IDE2LCBoZWlnaHQ6IDE2IH1dXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBdXHJcbn07XHJcbiIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5pbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiLi9HYW1lT2JqZWN0XCI7XHJcbmltcG9ydCB7IFNQUklURV9ERUZJTklUSU9OIH0gZnJvbSBcIi4vU3ByaXRlXCI7XHJcbjtcclxuZXhwb3J0IHZhciBUYW5rQ29sb3I7XHJcbihmdW5jdGlvbiAoVGFua0NvbG9yKSB7XHJcbiAgICBUYW5rQ29sb3JbXCJ5ZWxsb3dcIl0gPSBcInllbGxvd1wiO1xyXG4gICAgVGFua0NvbG9yW1wid2hpdGVcIl0gPSBcIndoaXRlXCI7XHJcbiAgICBUYW5rQ29sb3JbXCJncmVlblwiXSA9IFwiZ3JlZW5cIjtcclxuICAgIFRhbmtDb2xvcltcInJlZFwiXSA9IFwicmVkXCI7XHJcbn0pKFRhbmtDb2xvciB8fCAoVGFua0NvbG9yID0ge30pKTtcclxuO1xyXG52YXIgVGFua09iamVjdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhUYW5rT2JqZWN0LCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gVGFua09iamVjdChpZCwgc3ByaXRlSW1hZ2UsIHRhbmtUeXBlLCBpbml0aWFsUG9zaXRpb24pIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRhbmtUeXBlLmNvbG9yKTtcclxuICAgICAgICB2YXIgdGFua1Nwcml0ZXMgPSBTUFJJVEVfREVGSU5JVElPTi50YW5rW3RhbmtUeXBlLmxldmVsXVt0YW5rVHlwZS5jb2xvcl07XHJcbiAgICAgICAgdmFyIHNwcml0ZURhdGEgPSB7XHJcbiAgICAgICAgICAgIHNwcml0ZUltYWdlOiBzcHJpdGVJbWFnZSxcclxuICAgICAgICAgICAgc3ByaXRlUG9zaXRpb246IHRhbmtTcHJpdGVzLnVwXHJcbiAgICAgICAgfTtcclxuICAgICAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGlkLCBzcHJpdGVEYXRhLCBpbml0aWFsUG9zaXRpb24pIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuX3RhbmtTcHJpdGVzID0gdGFua1Nwcml0ZXM7XHJcbiAgICAgICAgX3RoaXMuX3Nwcml0ZVBvc2l0aW9uID0gMDtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBUYW5rT2JqZWN0LnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24gKGtleVN0YXRlKSB7XHJcbiAgICAgICAgdmFyIG1vdmVkID0gX3N1cGVyLnByb3RvdHlwZS5tb3ZlLmNhbGwodGhpcywga2V5U3RhdGUpO1xyXG4gICAgICAgIGlmIChtb3ZlZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9zcHJpdGVQb3NpdGlvbiA9IHRoaXMuX3Nwcml0ZVBvc2l0aW9uICsgMSA+IDEgPyAwIDogdGhpcy5fc3ByaXRlUG9zaXRpb24gKyAxO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbW92ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbW92ZWQ7XHJcbiAgICB9O1xyXG4gICAgVGFua09iamVjdC5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XHJcbiAgICAgICAgdmFyIHNwcml0ZURhdGEgPSB0aGlzLl90YW5rU3ByaXRlc1t0aGlzLnBvc2l0aW9uLmhlYWRpbmddW3RoaXMuX3Nwcml0ZVBvc2l0aW9uXTtcclxuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcclxuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZSh0aGlzLnNwcml0ZURhdGEuc3ByaXRlSW1hZ2UsIHNwcml0ZURhdGEueCwgc3ByaXRlRGF0YS55LCBzcHJpdGVEYXRhLndpZHRoLCBzcHJpdGVEYXRhLmhlaWdodCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMucG9zaXRpb24ud2lkdGgsIHRoaXMucG9zaXRpb24uaGVpZ2h0KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gVGFua09iamVjdDtcclxufShHYW1lT2JqZWN0KSk7XHJcbmV4cG9ydCBkZWZhdWx0IFRhbmtPYmplY3Q7XHJcbiIsImltcG9ydCBHYW1lIGZyb20gXCIuL0dhbWVcIjtcclxudmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xyXG4vLyBpbml0IGdhbWVcclxudmFyIGdhbWUgPSBuZXcgR2FtZShjYW52YXMpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9