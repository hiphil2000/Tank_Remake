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
            _this._gameData.objects.push(new _TankObject__WEBPACK_IMPORTED_MODULE_2__["default"]("main", _this, _this._sprite, {
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
    Game.prototype.impactTest = function (target) {
        var impactList = [];
        var others = this._gameData.objects.filter(function (object) { return object.id !== target.id; });
        others.forEach(function (object) {
            var tPos = target.position;
            var oPos = object.position;
            if (tPos.x + tPos.width >= oPos.x &&
                tPos.x <= oPos.x + oPos.width &&
                tPos.y + tPos.height >= oPos.y &&
                tPos.y <= oPos.y + oPos.height) {
                impactList.push(object);
            }
        });
        return impactList;
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
    function GameObject(id, game, spriteData, initialPosition) {
        this.id = id;
        this.spriteData = spriteData;
        this.game = game;
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
    function TankObject(id, game, spriteImage, tankType, initialPosition) {
        var _this = this;
        console.log(tankType.color);
        var tankSprites = _Sprite__WEBPACK_IMPORTED_MODULE_1__["SPRITE_DEFINITION"].tank[tankType.level][tankType.color];
        var spriteData = {
            spriteImage: spriteImage,
            spritePosition: tankSprites.up
        };
        _this = _super.call(this, id, game, spriteData, initialPosition) || this;
        _this._tankSprites = tankSprites;
        _this._spritePosition = 0;
        return _this;
    }
    TankObject.prototype.move = function (keyState) {
        var original = Object.assign({}, this.position);
        var moved = false;
        if (keyState.arrow_right) {
            this.position.x++;
            this.position.heading = _GameObject__WEBPACK_IMPORTED_MODULE_0__["Heading"].right;
            moved = true;
        }
        else if (keyState.arrow_left) {
            this.position.x--;
            this.position.heading = _GameObject__WEBPACK_IMPORTED_MODULE_0__["Heading"].left;
            moved = true;
        }
        else if (keyState.arrow_up) {
            this.position.y--;
            this.position.heading = _GameObject__WEBPACK_IMPORTED_MODULE_0__["Heading"].up;
            moved = true;
        }
        else if (keyState.arrow_down) {
            this.position.y++;
            this.position.heading = _GameObject__WEBPACK_IMPORTED_MODULE_0__["Heading"].down;
            moved = true;
        }
        var impact = this.game.impactTest(this);
        if (moved && impact.length <= 0) {
            // free to move
            this._spritePosition = this._spritePosition + 1 > 1 ? 0 : this._spritePosition + 1;
        }
        else if (moved == false || (moved && impact.length > 0)) {
            // not moved or blocked by other object
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWVEYXRhLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lT2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9TcHJpdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RhbmtPYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBdUM7QUFDRDtBQUNlO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsa0RBQVE7QUFDckM7QUFD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Qix1REFBdUQ7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDO0FBQ2tEO0FBQ047QUFDN0M7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDhCQUE4QjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIseURBQWlCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxtREFBTztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxtREFBTztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxtREFBTztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxtREFBTztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLENBQUMsbURBQVU7QUFDRyx5RUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDL0UxQjtBQUFBO0FBQTBCO0FBQzFCO0FBQ0E7QUFDQSxlQUFlLDZDQUFJIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgeyBIZWFkaW5nIH0gZnJvbSBcIi4vR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBHYW1lRGF0YSB9IGZyb20gXCIuL0dhbWVEYXRhXCI7XHJcbmltcG9ydCBUYW5rT2JqZWN0LCB7IFRhbmtDb2xvciB9IGZyb20gXCIuL1RhbmtPYmplY3RcIjtcclxudmFyIFNQUklURV9JTUFHRV9TUkMgPSAnLi9qcy9zcHJpdGUucG5nJztcclxudmFyIE1BWF9GUFMgPSA2MDtcclxudmFyIERSQVdBQkxFUyA9IHtcclxuICAgIGRpc3BsYXlfYmFja2dyb3VuZDogXCIjMDAwMDAwXCIsXHJcbiAgICBkaXNwbGF5X2JvcmRlcjogXCIjM2YzZjNmXCJcclxufTtcclxudmFyIEdhbWUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBHYW1lKGNhbnZhcywgb3B0aW9ucykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgLy8gaW5pdCBkaXNwbGF5XHJcbiAgICAgICAgdGhpcy5fY2F2bmFzID0gY2FudmFzO1xyXG4gICAgICAgIHRoaXMuX2N0eCA9IHRoaXMuX2Nhdm5hcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmluaXRpYWxpemVDYW52YXMoKTtcclxuICAgICAgICAvLyBpbml0IGdhbWUgZGF0YVxyXG4gICAgICAgIHRoaXMuX2dhbWVEYXRhID0gbmV3IEdhbWVEYXRhKCk7XHJcbiAgICAgICAgLy8gaW5pdCBkcmF3IHNldHRpbmdcclxuICAgICAgICB0aGlzLl9mcHNJbnRlcnZhbCA9IDEwMDAgLyBNQVhfRlBTO1xyXG4gICAgICAgIHRoaXMuX3RoZW4gPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICAvLyBsb2FkIHNwcml0ZVxyXG4gICAgICAgIHRoaXMuX3Nwcml0ZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIF90aGlzLl9nYW1lRGF0YS5vYmplY3RzLnB1c2gobmV3IFRhbmtPYmplY3QoXCJtYWluXCIsIF90aGlzLCBfdGhpcy5fc3ByaXRlLCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogVGFua0NvbG9yLnllbGxvdyxcclxuICAgICAgICAgICAgICAgIGxldmVsOiAwXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHg6IDE2LFxyXG4gICAgICAgICAgICAgICAgeTogMjMsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTYsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE2LFxyXG4gICAgICAgICAgICAgICAgaGVhZGluZzogSGVhZGluZy51cFxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIF90aGlzLmRyYXcoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZS5zcmMgPSBTUFJJVEVfSU1BR0VfU1JDO1xyXG4gICAgfVxyXG4gICAgR2FtZS5wcm90b3R5cGUuaW5pdGlhbGl6ZUNhbnZhcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX2Nhdm5hcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIHRoaXMuX2Nhdm5hcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgICAgIF90aGlzLl9nYW1lRGF0YS51cGRhdGVLZXlzdGF0ZShldi5rZXlDb2RlLCB0cnVlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgICAgIF90aGlzLl9nYW1lRGF0YS51cGRhdGVLZXlzdGF0ZShldi5rZXlDb2RlLCBmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgR2FtZS5wcm90b3R5cGUuaW1wYWN0VGVzdCA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgICAgICB2YXIgaW1wYWN0TGlzdCA9IFtdO1xyXG4gICAgICAgIHZhciBvdGhlcnMgPSB0aGlzLl9nYW1lRGF0YS5vYmplY3RzLmZpbHRlcihmdW5jdGlvbiAob2JqZWN0KSB7IHJldHVybiBvYmplY3QuaWQgIT09IHRhcmdldC5pZDsgfSk7XHJcbiAgICAgICAgb3RoZXJzLmZvckVhY2goZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgICAgICAgICB2YXIgdFBvcyA9IHRhcmdldC5wb3NpdGlvbjtcclxuICAgICAgICAgICAgdmFyIG9Qb3MgPSBvYmplY3QucG9zaXRpb247XHJcbiAgICAgICAgICAgIGlmICh0UG9zLnggKyB0UG9zLndpZHRoID49IG9Qb3MueCAmJlxyXG4gICAgICAgICAgICAgICAgdFBvcy54IDw9IG9Qb3MueCArIG9Qb3Mud2lkdGggJiZcclxuICAgICAgICAgICAgICAgIHRQb3MueSArIHRQb3MuaGVpZ2h0ID49IG9Qb3MueSAmJlxyXG4gICAgICAgICAgICAgICAgdFBvcy55IDw9IG9Qb3MueSArIG9Qb3MuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICBpbXBhY3RMaXN0LnB1c2gob2JqZWN0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBpbXBhY3RMaXN0O1xyXG4gICAgfTtcclxuICAgIEdhbWUucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAvLyByZXF1ZXN0IGFub3RoZXIgZnJhbWVcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkgeyBfdGhpcy5kcmF3KCk7IH0pO1xyXG4gICAgICAgIHRoaXMuX25vdyA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIHRoaXMuX2VsYXBzZWQgPSB0aGlzLl9ub3cgLSB0aGlzLl90aGVuO1xyXG4gICAgICAgIC8vIGZwc0ludGVydmFsIOydtOyDgeydmCDsi5zqsITsnbQg7KeA64KY66m0IO2UhOugiOyehOydhCDtlZjrgpgg67Cb7J2AIOqyg+ycvOuhnCDst6jquIlcclxuICAgICAgICBpZiAodGhpcy5fZWxhcHNlZCA+IHRoaXMuX2Zwc0ludGVydmFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RoZW4gPSB0aGlzLl9ub3cgLSAodGhpcy5fZWxhcHNlZCAlIHRoaXMuX2Zwc0ludGVydmFsKTtcclxuICAgICAgICAgICAgLy8g66eM7JW9IO2ZlOyCtO2RnCDtgqTrpbwg64+Z7Iuc7JeQIOuIhOultOyngCDslYrsnYAg7IOB7YOc652866m0IOydtOuPmSDsspjrpqztlaguXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fZ2FtZURhdGEuY2hlY2tEdXBsaWNhdGVBcnJvdygpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWFpbiA9IHRoaXMuX2dhbWVEYXRhLmZpbmRPYmplY3QoXCJtYWluXCIpO1xyXG4gICAgICAgICAgICAgICAgbWFpbi5tb3ZlKHRoaXMuX2dhbWVEYXRhLmtleVN0YXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjbGVhciBzY3JlZW5cclxuICAgICAgICAgICAgdGhpcy5fY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLl9jdHguY2FudmFzLmNsaWVudFdpZHRoLCB0aGlzLl9jdHguY2FudmFzLmNsaWVudEhlaWdodCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2dhbWVEYXRhLm9iamVjdHMuZm9yRWFjaChmdW5jdGlvbiAob2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBvYmplY3QuZHJhdyhfdGhpcy5fY3R4KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIGRyYXcgZGVidWcgY291bnRlclxyXG4gICAgICAgICAgICB0aGlzLmRyYXdEZWJ1Z0NvdW50ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgR2FtZS5wcm90b3R5cGUuZHJhd0RlYnVnQ291bnRlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZGVidWdUZXh0ID0gKDEwMDAgLyB0aGlzLl9lbGFwc2VkKS50b0ZpeGVkKDIpICsgXCJmcHMgXCI7XHJcbiAgICAgICAgZGVidWdUZXh0ICs9IFwicmlnaHQ6IFwiICsgdGhpcy5fZ2FtZURhdGEua2V5U3RhdGUuYXJyb3dfcmlnaHQ7XHJcbiAgICAgICAgdmFyIGN0eCA9IHRoaXMuX2N0eDtcclxuICAgICAgICBjdHguZm9udCA9ICcxMnB4IHNhbi1zZXJpZic7XHJcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ3doaXRlJztcclxuICAgICAgICBjdHgubGluZVdpZHRoID0gMjtcclxuICAgICAgICBjdHguc3Ryb2tlVGV4dChkZWJ1Z1RleHQsIDAsIDIwKTtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcclxuICAgICAgICBjdHguZmlsbFRleHQoZGVidWdUZXh0LCAwLCAyMCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEdhbWU7XHJcbn0oKSk7XHJcbmV4cG9ydCBkZWZhdWx0IEdhbWU7XHJcbiIsInZhciBHYW1lRGF0YSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEdhbWVEYXRhKCkge1xyXG4gICAgICAgIHRoaXMua2V5U3RhdGUgPSB7fTtcclxuICAgICAgICB0aGlzLm9iamVjdHMgPSBbXTtcclxuICAgIH1cclxuICAgIEdhbWVEYXRhLnByb3RvdHlwZS51cGRhdGVLZXlzdGF0ZSA9IGZ1bmN0aW9uIChrZXlDb2RlLCBzdGF0ZSkge1xyXG4gICAgICAgIHN3aXRjaCAoa2V5Q29kZSkge1xyXG4gICAgICAgICAgICBjYXNlIDM3OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5rZXlTdGF0ZS5hcnJvd19sZWZ0ID0gc3RhdGU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzODpcclxuICAgICAgICAgICAgICAgIHRoaXMua2V5U3RhdGUuYXJyb3dfdXAgPSBzdGF0ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM5OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5rZXlTdGF0ZS5hcnJvd19yaWdodCA9IHN0YXRlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNDA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtleVN0YXRlLmFycm93X2Rvd24gPSBzdGF0ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDEzOlxyXG4gICAgICAgICAgICAgICAgLy8gZW50ZXJcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBHYW1lRGF0YS5wcm90b3R5cGUuY2hlY2tEdXBsaWNhdGVBcnJvdyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYXJyb3dEb3duQ291bnQgPSAwO1xyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgdGhpcy5rZXlTdGF0ZS5hcnJvd19kb3duLFxyXG4gICAgICAgICAgICB0aGlzLmtleVN0YXRlLmFycm93X2xlZnQsXHJcbiAgICAgICAgICAgIHRoaXMua2V5U3RhdGUuYXJyb3dfdXAsXHJcbiAgICAgICAgICAgIHRoaXMua2V5U3RhdGUuYXJyb3dfcmlnaHRcclxuICAgICAgICBdLmZvckVhY2goZnVuY3Rpb24gKGFycm93KSB7XHJcbiAgICAgICAgICAgIGlmIChhcnJvdykge1xyXG4gICAgICAgICAgICAgICAgYXJyb3dEb3duQ291bnQrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBhcnJvd0Rvd25Db3VudCA+IDE7XHJcbiAgICB9O1xyXG4gICAgR2FtZURhdGEucHJvdG90eXBlLmZpbmRPYmplY3QgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2JqZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5vYmplY3RzW2ldLmlkID09PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMub2JqZWN0c1tpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gR2FtZURhdGE7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IEdhbWVEYXRhIH07XHJcbiIsInZhciBHYW1lT2JqZWN0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gR2FtZU9iamVjdChpZCwgZ2FtZSwgc3ByaXRlRGF0YSwgaW5pdGlhbFBvc2l0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlRGF0YSA9IHNwcml0ZURhdGE7XHJcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgICAgICBpZiAoaW5pdGlhbFBvc2l0aW9uICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gaW5pdGlhbFBvc2l0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc3ByaXRlRGF0YS5zcHJpdGVQb3NpdGlvbiBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgIHZhciBwb3NpdGlvbiA9IHRoaXMuc3ByaXRlRGF0YS5zcHJpdGVQb3NpdGlvbjtcclxuICAgICAgICAgICAgaWYgKHBvc2l0aW9uLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ud2lkdGggPSBwb3NpdGlvblswXS53aWR0aDtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24uaGVpZ2h0ID0gcG9zaXRpb25bMF0uaGVpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgcG9zaXRpb24gPSB0aGlzLnNwcml0ZURhdGEuc3ByaXRlUG9zaXRpb247XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ud2lkdGggPSBwb3NpdGlvbi53aWR0aDtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5oZWlnaHQgPSBwb3NpdGlvbi5oZWlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIEdhbWVPYmplY3Q7XHJcbn0oKSk7XHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVPYmplY3Q7XHJcbmV4cG9ydCB2YXIgSGVhZGluZztcclxuKGZ1bmN0aW9uIChIZWFkaW5nKSB7XHJcbiAgICBIZWFkaW5nW1widXBcIl0gPSBcInVwXCI7XHJcbiAgICBIZWFkaW5nW1wicmlnaHRcIl0gPSBcInJpZ2h0XCI7XHJcbiAgICBIZWFkaW5nW1wiZG93blwiXSA9IFwiZG93blwiO1xyXG4gICAgSGVhZGluZ1tcImxlZnRcIl0gPSBcImxlZnRcIjtcclxufSkoSGVhZGluZyB8fCAoSGVhZGluZyA9IHt9KSk7XHJcbjtcclxuIiwiZXhwb3J0IHZhciBTUFJJVEVfREVGSU5JVElPTiA9IHtcclxuICAgIHRhbms6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHllbGxvdzoge1xyXG4gICAgICAgICAgICAgICAgdXA6IFt7IHg6IDAsIHk6IDAsIHdpZHRoOiAxNiwgaGVpZ2h0OiAxNiB9LCB7IHg6IDE2LCB5OiAwLCB3aWR0aDogMTYsIGhlaWdodDogMTYgfV0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbeyB4OiAzMiwgeTogMCwgd2lkdGg6IDE2LCBoZWlnaHQ6IDE2IH0sIHsgeDogNDgsIHk6IDAsIHdpZHRoOiAxNiwgaGVpZ2h0OiAxNiB9XSxcclxuICAgICAgICAgICAgICAgIGRvd246IFt7IHg6IDY0LCB5OiAwLCB3aWR0aDogMTYsIGhlaWdodDogMTYgfSwgeyB4OiA4MCwgeTogMCwgd2lkdGg6IDE2LCBoZWlnaHQ6IDE2IH1dLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFt7IHg6IDk2LCB5OiAwLCB3aWR0aDogMTYsIGhlaWdodDogMTYgfSwgeyB4OiAxMTIsIHk6IDAsIHdpZHRoOiAxNiwgaGVpZ2h0OiAxNiB9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB3aGl0ZToge1xyXG4gICAgICAgICAgICAgICAgdXA6IFt7IHg6IDAsIHk6IDAsIHdpZHRoOiAxNiwgaGVpZ2h0OiAxNiB9LCB7IHg6IDE2LCB5OiAwLCB3aWR0aDogMTYsIGhlaWdodDogMTYgfV0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbeyB4OiAzMiwgeTogMCwgd2lkdGg6IDE2LCBoZWlnaHQ6IDE2IH0sIHsgeDogNDgsIHk6IDAsIHdpZHRoOiAxNiwgaGVpZ2h0OiAxNiB9XSxcclxuICAgICAgICAgICAgICAgIGRvd246IFt7IHg6IDY0LCB5OiAwLCB3aWR0aDogMTYsIGhlaWdodDogMTYgfSwgeyB4OiA4MCwgeTogMCwgd2lkdGg6IDE2LCBoZWlnaHQ6IDE2IH1dLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFt7IHg6IDk2LCB5OiAwLCB3aWR0aDogMTYsIGhlaWdodDogMTYgfSwgeyB4OiAxMTIsIHk6IDAsIHdpZHRoOiAxNiwgaGVpZ2h0OiAxNiB9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBncmVlbjoge1xyXG4gICAgICAgICAgICAgICAgdXA6IFt7IHg6IDAsIHk6IDAsIHdpZHRoOiAxNiwgaGVpZ2h0OiAxNiB9LCB7IHg6IDE2LCB5OiAwLCB3aWR0aDogMTYsIGhlaWdodDogMTYgfV0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbeyB4OiAzMiwgeTogMCwgd2lkdGg6IDE2LCBoZWlnaHQ6IDE2IH0sIHsgeDogNDgsIHk6IDAsIHdpZHRoOiAxNiwgaGVpZ2h0OiAxNiB9XSxcclxuICAgICAgICAgICAgICAgIGRvd246IFt7IHg6IDY0LCB5OiAwLCB3aWR0aDogMTYsIGhlaWdodDogMTYgfSwgeyB4OiA4MCwgeTogMCwgd2lkdGg6IDE2LCBoZWlnaHQ6IDE2IH1dLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFt7IHg6IDk2LCB5OiAwLCB3aWR0aDogMTYsIGhlaWdodDogMTYgfSwgeyB4OiAxMTIsIHk6IDAsIHdpZHRoOiAxNiwgaGVpZ2h0OiAxNiB9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByZWQ6IHtcclxuICAgICAgICAgICAgICAgIHVwOiBbeyB4OiAwLCB5OiAwLCB3aWR0aDogMTYsIGhlaWdodDogMTYgfSwgeyB4OiAxNiwgeTogMCwgd2lkdGg6IDE2LCBoZWlnaHQ6IDE2IH1dLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW3sgeDogMzIsIHk6IDAsIHdpZHRoOiAxNiwgaGVpZ2h0OiAxNiB9LCB7IHg6IDQ4LCB5OiAwLCB3aWR0aDogMTYsIGhlaWdodDogMTYgfV0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbeyB4OiA2NCwgeTogMCwgd2lkdGg6IDE2LCBoZWlnaHQ6IDE2IH0sIHsgeDogODAsIHk6IDAsIHdpZHRoOiAxNiwgaGVpZ2h0OiAxNiB9XSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbeyB4OiA5NiwgeTogMCwgd2lkdGg6IDE2LCBoZWlnaHQ6IDE2IH0sIHsgeDogMTEyLCB5OiAwLCB3aWR0aDogMTYsIGhlaWdodDogMTYgfV1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIF1cclxufTtcclxuIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbmltcG9ydCBHYW1lT2JqZWN0LCB7IEhlYWRpbmcgfSBmcm9tIFwiLi9HYW1lT2JqZWN0XCI7XHJcbmltcG9ydCB7IFNQUklURV9ERUZJTklUSU9OIH0gZnJvbSBcIi4vU3ByaXRlXCI7XHJcbjtcclxuZXhwb3J0IHZhciBUYW5rQ29sb3I7XHJcbihmdW5jdGlvbiAoVGFua0NvbG9yKSB7XHJcbiAgICBUYW5rQ29sb3JbXCJ5ZWxsb3dcIl0gPSBcInllbGxvd1wiO1xyXG4gICAgVGFua0NvbG9yW1wid2hpdGVcIl0gPSBcIndoaXRlXCI7XHJcbiAgICBUYW5rQ29sb3JbXCJncmVlblwiXSA9IFwiZ3JlZW5cIjtcclxuICAgIFRhbmtDb2xvcltcInJlZFwiXSA9IFwicmVkXCI7XHJcbn0pKFRhbmtDb2xvciB8fCAoVGFua0NvbG9yID0ge30pKTtcclxuO1xyXG52YXIgVGFua09iamVjdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhUYW5rT2JqZWN0LCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gVGFua09iamVjdChpZCwgZ2FtZSwgc3ByaXRlSW1hZ2UsIHRhbmtUeXBlLCBpbml0aWFsUG9zaXRpb24pIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRhbmtUeXBlLmNvbG9yKTtcclxuICAgICAgICB2YXIgdGFua1Nwcml0ZXMgPSBTUFJJVEVfREVGSU5JVElPTi50YW5rW3RhbmtUeXBlLmxldmVsXVt0YW5rVHlwZS5jb2xvcl07XHJcbiAgICAgICAgdmFyIHNwcml0ZURhdGEgPSB7XHJcbiAgICAgICAgICAgIHNwcml0ZUltYWdlOiBzcHJpdGVJbWFnZSxcclxuICAgICAgICAgICAgc3ByaXRlUG9zaXRpb246IHRhbmtTcHJpdGVzLnVwXHJcbiAgICAgICAgfTtcclxuICAgICAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGlkLCBnYW1lLCBzcHJpdGVEYXRhLCBpbml0aWFsUG9zaXRpb24pIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuX3RhbmtTcHJpdGVzID0gdGFua1Nwcml0ZXM7XHJcbiAgICAgICAgX3RoaXMuX3Nwcml0ZVBvc2l0aW9uID0gMDtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBUYW5rT2JqZWN0LnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24gKGtleVN0YXRlKSB7XHJcbiAgICAgICAgdmFyIG9yaWdpbmFsID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wb3NpdGlvbik7XHJcbiAgICAgICAgdmFyIG1vdmVkID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKGtleVN0YXRlLmFycm93X3JpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCsrO1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLmhlYWRpbmcgPSBIZWFkaW5nLnJpZ2h0O1xyXG4gICAgICAgICAgICBtb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGtleVN0YXRlLmFycm93X2xlZnQpIHtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54LS07XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24uaGVhZGluZyA9IEhlYWRpbmcubGVmdDtcclxuICAgICAgICAgICAgbW92ZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChrZXlTdGF0ZS5hcnJvd191cCkge1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnktLTtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5oZWFkaW5nID0gSGVhZGluZy51cDtcclxuICAgICAgICAgICAgbW92ZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChrZXlTdGF0ZS5hcnJvd19kb3duKSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSsrO1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLmhlYWRpbmcgPSBIZWFkaW5nLmRvd247XHJcbiAgICAgICAgICAgIG1vdmVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGltcGFjdCA9IHRoaXMuZ2FtZS5pbXBhY3RUZXN0KHRoaXMpO1xyXG4gICAgICAgIGlmIChtb3ZlZCAmJiBpbXBhY3QubGVuZ3RoIDw9IDApIHtcclxuICAgICAgICAgICAgLy8gZnJlZSB0byBtb3ZlXHJcbiAgICAgICAgICAgIHRoaXMuX3Nwcml0ZVBvc2l0aW9uID0gdGhpcy5fc3ByaXRlUG9zaXRpb24gKyAxID4gMSA/IDAgOiB0aGlzLl9zcHJpdGVQb3NpdGlvbiArIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG1vdmVkID09IGZhbHNlIHx8IChtb3ZlZCAmJiBpbXBhY3QubGVuZ3RoID4gMCkpIHtcclxuICAgICAgICAgICAgLy8gbm90IG1vdmVkIG9yIGJsb2NrZWQgYnkgb3RoZXIgb2JqZWN0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtb3ZlZDtcclxuICAgIH07XHJcbiAgICBUYW5rT2JqZWN0LnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcclxuICAgICAgICB2YXIgc3ByaXRlRGF0YSA9IHRoaXMuX3RhbmtTcHJpdGVzW3RoaXMucG9zaXRpb24uaGVhZGluZ11bdGhpcy5fc3ByaXRlUG9zaXRpb25dO1xyXG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gXCJibGFja1wiO1xyXG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHRoaXMuc3ByaXRlRGF0YS5zcHJpdGVJbWFnZSwgc3ByaXRlRGF0YS54LCBzcHJpdGVEYXRhLnksIHNwcml0ZURhdGEud2lkdGgsIHNwcml0ZURhdGEuaGVpZ2h0LCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy5wb3NpdGlvbi53aWR0aCwgdGhpcy5wb3NpdGlvbi5oZWlnaHQpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBUYW5rT2JqZWN0O1xyXG59KEdhbWVPYmplY3QpKTtcclxuZXhwb3J0IGRlZmF1bHQgVGFua09iamVjdDtcclxuIiwiaW1wb3J0IEdhbWUgZnJvbSBcIi4vR2FtZVwiO1xyXG52YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XHJcbi8vIGluaXQgZ2FtZVxyXG52YXIgZ2FtZSA9IG5ldyBHYW1lKGNhbnZhcyk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=