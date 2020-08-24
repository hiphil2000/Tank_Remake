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

/***/ "./src/Game/Game.ts":
/*!**************************!*\
  !*** ./src/Game/Game.ts ***!
  \**************************/
/*! exports provided: MAIN_TANK_ID, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAIN_TANK_ID", function() { return MAIN_TANK_ID; });
/* harmony import */ var _Render_Renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Render/Renderer */ "./src/Render/Renderer.ts");
/* harmony import */ var _Object_TankObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Object/TankObject */ "./src/Game/Object/TankObject.ts");
/* harmony import */ var _InputManage_EKeys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InputManage/EKeys */ "./src/Game/InputManage/EKeys.ts");



var MAIN_TANK_ID = 'MAIN';
var Game = /** @class */ (function () {
    function Game(screen, spriteSrc) {
        this.newGame(0 /* PVE */, null, []);
        this._gameData.objects.push(new _Object_TankObject__WEBPACK_IMPORTED_MODULE_1__["default"](this, { x: 23, y: 56 }, "right" /* right */, "WHITE" /* WHITE */, 3, MAIN_TANK_ID));
        this._renderer = new _Render_Renderer__WEBPACK_IMPORTED_MODULE_0__["default"](this, screen, spriteSrc);
        this.initializeInputs();
        screen.focus();
        // this.showTitle();
    }
    Game.prototype.initializeInputs = function () {
        var _this = this;
        this._keyState = {};
        document.addEventListener('keydown', function (ev) {
            var mainTank = _this.mainTank;
            switch (ev.code) {
                case "ArrowUp" /* arrow_up */:
                case "ArrowRight" /* arrow_right */:
                case "ArrowDown" /* arrow_down */:
                case "ArrowLeft" /* arrow_left */:
                    if (mainTank) {
                        mainTank.direction = Object(_InputManage_EKeys__WEBPACK_IMPORTED_MODULE_2__["EKeysToEDirection"])(ev.code);
                    }
                    _this.resetArrowInput();
                    _this._keyState[ev.code] = true;
                    break;
                case "Space" /* spacebar */:
                    break;
                case "Escape" /* esc */:
                    break;
            }
        });
        document.addEventListener('keyup', function (ev) {
            var code = ev.code;
            _this._keyState[code] = false;
        });
    };
    Game.prototype.resetArrowInput = function () {
        this._keyState.ArrowUp = false;
        this._keyState.ArrowRight = false;
        this._keyState.ArrowDown = false;
        this._keyState.ArrowLeft = false;
    };
    Object.defineProperty(Game.prototype, "keyState", {
        get: function () {
            return this._keyState;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "mainTank", {
        get: function () {
            var found = this.findObjectById(MAIN_TANK_ID);
            if (found.length > 0) {
                return found[0];
            }
            else {
                return null;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "isTankMoveReady", {
        get: function () {
            var mainTank = this.mainTank;
            if (mainTank == null) {
                return false;
            }
            if ((this._keyState.ArrowUp === true && mainTank.direction == "up" /* up */) ||
                (this._keyState.ArrowRight === true && mainTank.direction == "right" /* right */) ||
                (this._keyState.ArrowDown === true && mainTank.direction == "down" /* down */) ||
                (this._keyState.ArrowLeft === true && mainTank.direction == "left" /* left */)) {
                return true;
            }
        },
        enumerable: false,
        configurable: true
    });
    Game.prototype.showTitle = function () {
    };
    Game.prototype.showMenu = function () {
    };
    Game.prototype.newGame = function (gameType, level, objects) {
        this._gameData = {
            gameType: gameType,
            levelData: level,
            objects: objects
        };
    };
    Game.prototype.getObjects = function () {
        if (this._gameData.objects == undefined) {
            return [];
        }
        else {
            return this._gameData.objects;
        }
    };
    Game.prototype.findObjectById = function (id) {
        if (this._gameData.objects != undefined) {
            return this._gameData.objects.filter(function (object) { return object.id === id; });
        }
        else {
            return [];
        }
    };
    return Game;
}());
/* harmony default export */ __webpack_exports__["default"] = (Game);


/***/ }),

/***/ "./src/Game/InputManage/EKeys.ts":
/*!***************************************!*\
  !*** ./src/Game/InputManage/EKeys.ts ***!
  \***************************************/
/*! exports provided: EKeysToEDirection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EKeysToEDirection", function() { return EKeysToEDirection; });
function EKeysToEDirection(keys) {
    switch (keys) {
        case "ArrowUp" /* arrow_up */:
            return "up" /* up */;
        case "ArrowRight" /* arrow_right */:
            return "right" /* right */;
        case "ArrowDown" /* arrow_down */:
            return "down" /* down */;
        case "ArrowLeft" /* arrow_left */:
            return "left" /* left */;
    }
}


/***/ }),

/***/ "./src/Game/Object/GameObject.ts":
/*!***************************************!*\
  !*** ./src/Game/Object/GameObject.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var GameObject = /** @class */ (function () {
    function GameObject(game, objectType, position, id) {
        this._game = game;
        this.objectType = objectType;
        if (position != undefined) {
            this._positon = position;
        }
        else {
            this._positon = {
                x: 0,
                y: 0
            };
        }
        if (id != undefined) {
            this.id = id;
        }
    }
    Object.defineProperty(GameObject.prototype, "position", {
        get: function () {
            return this._positon;
        },
        set: function (position) {
            if (position.x <= 0 || position.y <= 0) {
                throw 'position cannot be a negative value';
            }
            this._positon = position;
        },
        enumerable: false,
        configurable: true
    });
    return GameObject;
}());
/* harmony default export */ __webpack_exports__["default"] = (GameObject);


/***/ }),

/***/ "./src/Game/Object/MovingObject.ts":
/*!*****************************************!*\
  !*** ./src/Game/Object/MovingObject.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameObject */ "./src/Game/Object/GameObject.ts");
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

var MovingObject = /** @class */ (function (_super) {
    __extends(MovingObject, _super);
    function MovingObject(game, objectType, position, direction, speed, id) {
        var _this = _super.call(this, game, objectType, position, id) || this;
        if (direction != undefined) {
            _this._direction = direction;
        }
        else {
            _this._direction = "up" /* up */;
        }
        _this._speed = speed;
        return _this;
    }
    Object.defineProperty(MovingObject.prototype, "direction", {
        get: function () {
            return this._direction;
        },
        set: function (direction) {
            this._direction = direction;
        },
        enumerable: false,
        configurable: true
    });
    return MovingObject;
}(_GameObject__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (MovingObject);


/***/ }),

/***/ "./src/Game/Object/TankObject.ts":
/*!***************************************!*\
  !*** ./src/Game/Object/TankObject.ts ***!
  \***************************************/
/*! exports provided: TANK_SPEED, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TANK_SPEED", function() { return TANK_SPEED; });
/* harmony import */ var _MovingObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MovingObject */ "./src/Game/Object/MovingObject.ts");
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

var TANK_SPEED = 2;
var TankObject = /** @class */ (function (_super) {
    __extends(TankObject, _super);
    //#region constructor
    function TankObject(game, position, direction, tankColor, tankLevel, id) {
        if (tankLevel === void 0) { tankLevel = 1; }
        var _this = _super.call(this, game, 0 /* TANK */, position, direction, TANK_SPEED, id) || this;
        _this._tankColor = tankColor;
        _this._tankLevel = tankLevel;
        _this._spritePosition = 0;
        return _this;
    }
    Object.defineProperty(TankObject.prototype, "tankColor", {
        //#endregion
        //#region getter, setter
        get: function () {
            return this._tankColor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TankObject.prototype, "tankLevel", {
        get: function () {
            return this._tankLevel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TankObject.prototype, "spritePosition", {
        get: function () {
            return this._spritePosition;
        },
        enumerable: false,
        configurable: true
    });
    //#endregion
    TankObject.prototype.nextSpritePosition = function () {
        this._spritePosition = this._spritePosition + 1 <= 1 ? this._spritePosition + 1 : 0;
        return this._spritePosition;
    };
    //#region implements of MovingObject	
    TankObject.prototype.move = function () {
        // let changed = deepClone(this.position) as Point;
        var changed = this.position;
        switch (this.direction) {
            case "up" /* up */:
                changed.y -= this._speed;
                break;
            case "right" /* right */:
                changed.x += this._speed;
                break;
            case "down" /* down */:
                changed.y += this._speed;
                break;
            case "left" /* left */:
                changed.x -= this._speed;
                break;
        }
        this.nextSpritePosition();
    };
    return TankObject;
}(_MovingObject__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (TankObject);


/***/ }),

/***/ "./src/Render/Renderer.ts":
/*!********************************!*\
  !*** ./src/Render/Renderer.ts ***!
  \********************************/
/*! exports provided: MAX_FPS, DRAWING_CONST, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_FPS", function() { return MAX_FPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DRAWING_CONST", function() { return DRAWING_CONST; });
/* harmony import */ var _Sprite_SpriteDefinition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite/SpriteDefinition */ "./src/Render/Sprite/SpriteDefinition.ts");

var MAX_FPS = 60;
var DRAWING_CONST = {
    colors: {
        background: "#000000",
        background_frame: "#949494",
    },
    sizes: {
        frame: {
            left: 16,
            top: 10,
            bottom: 10,
            right: 32
        }
    }
};
var Renderer = /** @class */ (function () {
    function Renderer(game, canvas, spriteSrc) {
        this._fps = {
            fpsInterval: 1000 / MAX_FPS,
            now: performance.now(),
            then: performance.now(),
            elapsed: 0
        };
        if (canvas == undefined) {
            throw 'canvas is null or undefined';
        }
        this._canvas = canvas;
        if (game == undefined) {
            throw 'game is null or undefined';
        }
        this._game = game;
        this.initScreen();
        this.loadSprite(spriteSrc);
    }
    Renderer.prototype.loadSprite = function (src) {
        var _this = this;
        this._sprite = new Image();
        this._sprite.onload = function () {
            _this.render();
        };
        this._sprite.src = src;
    };
    Renderer.prototype.initScreen = function () {
        this._canvas.width = 600;
        this._canvas.height = 600;
    };
    Renderer.prototype.render = function () {
        var _this = this;
        requestAnimationFrame(function () { _this.render(); });
        var fps = this._fps;
        fps.now = performance.now();
        fps.elapsed = fps.now - fps.then;
        if (fps.elapsed > fps.fpsInterval) {
            fps.then = fps.now - (fps.elapsed % fps.fpsInterval);
            // process move action
            var mainTank = this._game.mainTank;
            if (this._game.isTankMoveReady) {
                mainTank.move();
            }
            // start drawing
            // get context
            var ctx = this._canvas.getContext('2d');
            ctx.save();
            // clear screen
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            // draw backgrounds
            this.drawBackground(ctx);
            // draw objects
            this.drawObjects(ctx, this._game.getObjects());
            // draw debug counter
            this.drawDebugCounter(ctx);
        }
    };
    Renderer.prototype.drawBackground = function (ctx) {
        ctx.save();
        ctx.fillStyle = DRAWING_CONST.colors.background_frame;
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.restore();
        ctx.fillStyle = DRAWING_CONST.colors.background;
        ctx.fillRect(DRAWING_CONST.sizes.frame.left, DRAWING_CONST.sizes.frame.top, ctx.canvas.width - (DRAWING_CONST.sizes.frame.left + DRAWING_CONST.sizes.frame.right), ctx.canvas.height - (DRAWING_CONST.sizes.frame.top + DRAWING_CONST.sizes.frame.bottom));
        ctx.restore();
    };
    Renderer.prototype.drawObjects = function (ctx, objects) {
        ctx.save();
        for (var i = 0; i < objects.length; i++) {
            var object = objects[i];
            switch (object.objectType) {
                case 0 /* TANK */:
                    var tank = object;
                    var sprite = _Sprite_SpriteDefinition__WEBPACK_IMPORTED_MODULE_0__["default"].TANK[tank.tankColor][tank.tankLevel][tank.direction][tank.spritePosition];
                    ctx.drawImage(this._sprite, sprite.position.x, sprite.position.y, sprite.size.width, sprite.size.height, DRAWING_CONST.sizes.frame.left + object.position.x, DRAWING_CONST.sizes.frame.top + object.position.y, sprite.size.width, sprite.size.height);
                    break;
            }
            ctx.restore();
        }
    };
    Renderer.prototype.drawDebugCounter = function (ctx) {
        var keyState = this._game.keyState;
        this.drawText(ctx, (1000 / this._fps.elapsed).toFixed(2) + "fps ", { x: 0, y: ctx.canvas.height });
        this.drawText(ctx, "ArrowLeft: " + (keyState.ArrowLeft ? 'T' : 'F'), { x: 0, y: ctx.canvas.height - 20 });
        this.drawText(ctx, "ArrowDown: " + (keyState.ArrowDown ? 'T' : 'F'), { x: 0, y: ctx.canvas.height - 40 });
        this.drawText(ctx, "ArrowRight: " + (keyState.ArrowRight ? 'T' : 'F'), { x: 0, y: ctx.canvas.height - 60 });
        this.drawText(ctx, "ArrowUp: " + (keyState.ArrowUp ? 'T' : 'F'), { x: 0, y: ctx.canvas.height - 80 });
    };
    Renderer.prototype.drawText = function (ctx, text, position) {
        ctx.save();
        ctx.font = '20px san-serif';
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 2;
        ctx.strokeText(text, position.x, position.y);
        ctx.fillStyle = 'black';
        ctx.fillText(text, position.x, position.y);
        ctx.restore();
    };
    return Renderer;
}());
/* harmony default export */ __webpack_exports__["default"] = (Renderer);


/***/ }),

/***/ "./src/Render/Sprite/SpriteDefinition.ts":
/*!***********************************************!*\
  !*** ./src/Render/Sprite/SpriteDefinition.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
;
var SPRTIE_DEF = {
    TANK: {
        YELLOW: [
            {
                up: [
                    { position: { x: 0, y: 0 }, size: { width: 32, height: 32 } },
                    { position: { x: 32, y: 0 }, size: { width: 32, height: 32 } },
                ],
                left: [
                    { position: { x: 64, y: 0 }, size: { width: 32, height: 32 } },
                    { position: { x: 96, y: 0 }, size: { width: 32, height: 32 } },
                ],
                down: [
                    { position: { x: 128, y: 0 }, size: { width: 32, height: 32 } },
                    { position: { x: 160, y: 0 }, size: { width: 32, height: 32 } },
                ],
                right: [
                    { position: { x: 192, y: 0 }, size: { width: 32, height: 32 } },
                    { position: { x: 224, y: 0 }, size: { width: 32, height: 32 } },
                ]
            },
            {
                up: [
                    { position: { x: 0, y: 32 }, size: { width: 32, height: 32 } },
                    { position: { x: 32, y: 32 }, size: { width: 32, height: 32 } },
                ],
                left: [
                    { position: { x: 64, y: 32 }, size: { width: 32, height: 32 } },
                    { position: { x: 96, y: 32 }, size: { width: 32, height: 32 } },
                ],
                down: [
                    { position: { x: 128, y: 32 }, size: { width: 32, height: 32 } },
                    { position: { x: 160, y: 32 }, size: { width: 32, height: 32 } },
                ],
                right: [
                    { position: { x: 192, y: 32 }, size: { width: 32, height: 32 } },
                    { position: { x: 224, y: 32 }, size: { width: 32, height: 32 } },
                ]
            },
            {
                up: [
                    { position: { x: 0, y: 64 }, size: { width: 32, height: 32 } },
                    { position: { x: 32, y: 64 }, size: { width: 32, height: 32 } },
                ],
                left: [
                    { position: { x: 64, y: 64 }, size: { width: 32, height: 32 } },
                    { position: { x: 96, y: 64 }, size: { width: 32, height: 32 } },
                ],
                down: [
                    { position: { x: 128, y: 64 }, size: { width: 32, height: 32 } },
                    { position: { x: 160, y: 64 }, size: { width: 32, height: 32 } },
                ],
                right: [
                    { position: { x: 192, y: 64 }, size: { width: 32, height: 32 } },
                    { position: { x: 224, y: 64 }, size: { width: 32, height: 32 } },
                ]
            },
            {
                up: [
                    { position: { x: 0, y: 96 }, size: { width: 32, height: 32 } },
                    { position: { x: 32, y: 96 }, size: { width: 32, height: 32 } },
                ],
                left: [
                    { position: { x: 64, y: 96 }, size: { width: 32, height: 32 } },
                    { position: { x: 96, y: 96 }, size: { width: 32, height: 32 } },
                ],
                down: [
                    { position: { x: 128, y: 96 }, size: { width: 32, height: 32 } },
                    { position: { x: 160, y: 96 }, size: { width: 32, height: 32 } },
                ],
                right: [
                    { position: { x: 192, y: 96 }, size: { width: 32, height: 32 } },
                    { position: { x: 224, y: 96 }, size: { width: 32, height: 32 } },
                ]
            }
        ],
        GREEN: [
            {
                up: [
                    { position: { x: 0, y: 256 }, size: { width: 32, height: 32 } },
                    { position: { x: 32, y: 256 }, size: { width: 32, height: 32 } },
                ],
                left: [
                    { position: { x: 64, y: 256 }, size: { width: 32, height: 32 } },
                    { position: { x: 96, y: 256 }, size: { width: 32, height: 32 } },
                ],
                down: [
                    { position: { x: 128, y: 256 }, size: { width: 32, height: 32 } },
                    { position: { x: 160, y: 256 }, size: { width: 32, height: 32 } },
                ],
                right: [
                    { position: { x: 192, y: 256 }, size: { width: 32, height: 32 } },
                    { position: { x: 224, y: 256 }, size: { width: 32, height: 32 } },
                ]
            },
            {
                up: [
                    { position: { x: 0, y: 288 }, size: { width: 32, height: 32 } },
                    { position: { x: 32, y: 288 }, size: { width: 32, height: 32 } },
                ],
                left: [
                    { position: { x: 64, y: 288 }, size: { width: 32, height: 32 } },
                    { position: { x: 96, y: 288 }, size: { width: 32, height: 32 } },
                ],
                down: [
                    { position: { x: 128, y: 288 }, size: { width: 32, height: 32 } },
                    { position: { x: 160, y: 288 }, size: { width: 32, height: 32 } },
                ],
                right: [
                    { position: { x: 192, y: 288 }, size: { width: 32, height: 32 } },
                    { position: { x: 224, y: 288 }, size: { width: 32, height: 32 } },
                ]
            },
            {
                up: [
                    { position: { x: 0, y: 320 }, size: { width: 32, height: 32 } },
                    { position: { x: 32, y: 320 }, size: { width: 32, height: 32 } },
                ],
                left: [
                    { position: { x: 64, y: 320 }, size: { width: 32, height: 32 } },
                    { position: { x: 96, y: 320 }, size: { width: 32, height: 32 } },
                ],
                down: [
                    { position: { x: 128, y: 320 }, size: { width: 32, height: 32 } },
                    { position: { x: 160, y: 320 }, size: { width: 32, height: 32 } },
                ],
                right: [
                    { position: { x: 192, y: 320 }, size: { width: 32, height: 32 } },
                    { position: { x: 224, y: 320 }, size: { width: 32, height: 32 } },
                ]
            },
            {
                up: [
                    { position: { x: 0, y: 352 }, size: { width: 32, height: 32 } },
                    { position: { x: 32, y: 352 }, size: { width: 32, height: 32 } },
                ],
                left: [
                    { position: { x: 64, y: 352 }, size: { width: 32, height: 32 } },
                    { position: { x: 96, y: 352 }, size: { width: 32, height: 32 } },
                ],
                down: [
                    { position: { x: 128, y: 352 }, size: { width: 32, height: 32 } },
                    { position: { x: 160, y: 352 }, size: { width: 32, height: 32 } },
                ],
                right: [
                    { position: { x: 192, y: 352 }, size: { width: 32, height: 32 } },
                    { position: { x: 224, y: 352 }, size: { width: 32, height: 32 } },
                ]
            }
        ],
        WHITE: [
            {
                up: [
                    { position: { x: 256, y: 0 }, size: { width: 32, height: 32 } },
                    { position: { x: 288, y: 0 }, size: { width: 32, height: 32 } },
                ],
                left: [
                    { position: { x: 320, y: 0 }, size: { width: 32, height: 32 } },
                    { position: { x: 352, y: 0 }, size: { width: 32, height: 32 } },
                ],
                down: [
                    { position: { x: 384, y: 0 }, size: { width: 32, height: 32 } },
                    { position: { x: 416, y: 0 }, size: { width: 32, height: 32 } },
                ],
                right: [
                    { position: { x: 448, y: 0 }, size: { width: 32, height: 32 } },
                    { position: { x: 480, y: 0 }, size: { width: 32, height: 32 } },
                ]
            },
            {
                up: [
                    { position: { x: 256, y: 32 }, size: { width: 32, height: 32 } },
                    { position: { x: 288, y: 32 }, size: { width: 32, height: 32 } },
                ],
                left: [
                    { position: { x: 320, y: 32 }, size: { width: 32, height: 32 } },
                    { position: { x: 352, y: 32 }, size: { width: 32, height: 32 } },
                ],
                down: [
                    { position: { x: 384, y: 32 }, size: { width: 32, height: 32 } },
                    { position: { x: 416, y: 32 }, size: { width: 32, height: 32 } },
                ],
                right: [
                    { position: { x: 448, y: 32 }, size: { width: 32, height: 32 } },
                    { position: { x: 480, y: 32 }, size: { width: 32, height: 32 } },
                ]
            },
            {
                up: [
                    { position: { x: 256, y: 64 }, size: { width: 32, height: 32 } },
                    { position: { x: 288, y: 64 }, size: { width: 32, height: 32 } },
                ],
                left: [
                    { position: { x: 320, y: 64 }, size: { width: 32, height: 32 } },
                    { position: { x: 352, y: 64 }, size: { width: 32, height: 32 } },
                ],
                down: [
                    { position: { x: 384, y: 64 }, size: { width: 32, height: 32 } },
                    { position: { x: 416, y: 64 }, size: { width: 32, height: 32 } },
                ],
                right: [
                    { position: { x: 448, y: 64 }, size: { width: 32, height: 32 } },
                    { position: { x: 480, y: 64 }, size: { width: 32, height: 32 } },
                ]
            },
            {
                up: [
                    { position: { x: 256, y: 96 }, size: { width: 32, height: 32 } },
                    { position: { x: 288, y: 96 }, size: { width: 32, height: 32 } },
                ],
                left: [
                    { position: { x: 320, y: 96 }, size: { width: 32, height: 32 } },
                    { position: { x: 352, y: 96 }, size: { width: 32, height: 32 } },
                ],
                down: [
                    { position: { x: 384, y: 96 }, size: { width: 32, height: 32 } },
                    { position: { x: 416, y: 96 }, size: { width: 32, height: 32 } },
                ],
                right: [
                    { position: { x: 448, y: 96 }, size: { width: 32, height: 32 } },
                    { position: { x: 480, y: 96 }, size: { width: 32, height: 32 } },
                ]
            }
        ],
        MAGENTA: [
            {
                up: [
                    { position: { x: 256, y: 256 }, size: { width: 32, height: 32 } },
                    { position: { x: 288, y: 256 }, size: { width: 32, height: 32 } },
                ],
                left: [
                    { position: { x: 320, y: 256 }, size: { width: 32, height: 32 } },
                    { position: { x: 352, y: 256 }, size: { width: 32, height: 32 } },
                ],
                down: [
                    { position: { x: 384, y: 256 }, size: { width: 32, height: 32 } },
                    { position: { x: 416, y: 256 }, size: { width: 32, height: 32 } },
                ],
                right: [
                    { position: { x: 448, y: 256 }, size: { width: 32, height: 32 } },
                    { position: { x: 480, y: 256 }, size: { width: 32, height: 32 } },
                ]
            },
            {
                up: [
                    { position: { x: 256, y: 288 }, size: { width: 32, height: 32 } },
                    { position: { x: 288, y: 288 }, size: { width: 32, height: 32 } },
                ],
                left: [
                    { position: { x: 320, y: 288 }, size: { width: 32, height: 32 } },
                    { position: { x: 352, y: 288 }, size: { width: 32, height: 32 } },
                ],
                down: [
                    { position: { x: 384, y: 288 }, size: { width: 32, height: 32 } },
                    { position: { x: 416, y: 288 }, size: { width: 32, height: 32 } },
                ],
                right: [
                    { position: { x: 448, y: 288 }, size: { width: 32, height: 32 } },
                    { position: { x: 480, y: 288 }, size: { width: 32, height: 32 } },
                ]
            },
            {
                up: [
                    { position: { x: 256, y: 320 }, size: { width: 32, height: 32 } },
                    { position: { x: 288, y: 320 }, size: { width: 32, height: 32 } },
                ],
                left: [
                    { position: { x: 320, y: 320 }, size: { width: 32, height: 32 } },
                    { position: { x: 352, y: 320 }, size: { width: 32, height: 32 } },
                ],
                down: [
                    { position: { x: 384, y: 320 }, size: { width: 32, height: 32 } },
                    { position: { x: 416, y: 320 }, size: { width: 32, height: 32 } },
                ],
                right: [
                    { position: { x: 448, y: 320 }, size: { width: 32, height: 32 } },
                    { position: { x: 480, y: 320 }, size: { width: 32, height: 32 } },
                ]
            },
            {
                up: [
                    { position: { x: 256, y: 352 }, size: { width: 32, height: 32 } },
                    { position: { x: 288, y: 352 }, size: { width: 32, height: 32 } },
                ],
                left: [
                    { position: { x: 320, y: 352 }, size: { width: 32, height: 32 } },
                    { position: { x: 352, y: 352 }, size: { width: 32, height: 32 } },
                ],
                down: [
                    { position: { x: 384, y: 352 }, size: { width: 32, height: 32 } },
                    { position: { x: 416, y: 352 }, size: { width: 32, height: 32 } },
                ],
                right: [
                    { position: { x: 448, y: 352 }, size: { width: 32, height: 32 } },
                    { position: { x: 480, y: 352 }, size: { width: 32, height: 32 } },
                ]
            }
        ]
    }
};
/* harmony default export */ __webpack_exports__["default"] = (SPRTIE_DEF);


/***/ }),

/***/ "./src/Render/Sprite/sprite.png":
/*!**************************************!*\
  !*** ./src/Render/Sprite/sprite.png ***!
  \**************************************/
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
/* harmony import */ var _Game_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game/Game */ "./src/Game/Game.ts");

var spriteImage = __webpack_require__(/*! ./Render/Sprite/sprite.png */ "./src/Render/Sprite/sprite.png");
var canvas = document.getElementById("canvas");
// init game
var game = new _Game_Game__WEBPACK_IMPORTED_MODULE_0__["default"](canvas, './js/sprite.png');


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvR2FtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9JbnB1dE1hbmFnZS9FS2V5cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9PYmplY3QvR2FtZU9iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9PYmplY3QvTW92aW5nT2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL09iamVjdC9UYW5rT2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9SZW5kZXIvUmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlbmRlci9TcHJpdGUvU3ByaXRlRGVmaW5pdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVuZGVyL1Nwcml0ZS9zcHJpdGUucG5nIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZSx5RUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDN1MxQjtBQUFlLHNGQUF1QixFOzs7Ozs7Ozs7Ozs7QUNBdEM7QUFBQTtBQUErQjtBQUMvQixrQkFBa0IsbUJBQU8sQ0FBQyxrRUFBNEI7QUFDdEQ7QUFDQTtBQUNBLGVBQWUsa0RBQUkiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImltcG9ydCBSZW5kZXJlciBmcm9tIFwiLi4vUmVuZGVyL1JlbmRlcmVyXCI7XHJcbmltcG9ydCBUYW5rT2JqZWN0IGZyb20gXCIuL09iamVjdC9UYW5rT2JqZWN0XCI7XHJcbmltcG9ydCB7IEVLZXlzVG9FRGlyZWN0aW9uIH0gZnJvbSBcIi4vSW5wdXRNYW5hZ2UvRUtleXNcIjtcclxuZXhwb3J0IHZhciBNQUlOX1RBTktfSUQgPSAnTUFJTic7XHJcbnZhciBHYW1lID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gR2FtZShzY3JlZW4sIHNwcml0ZVNyYykge1xyXG4gICAgICAgIHRoaXMubmV3R2FtZSgwIC8qIFBWRSAqLywgbnVsbCwgW10pO1xyXG4gICAgICAgIHRoaXMuX2dhbWVEYXRhLm9iamVjdHMucHVzaChuZXcgVGFua09iamVjdCh0aGlzLCB7IHg6IDIzLCB5OiA1NiB9LCBcInJpZ2h0XCIgLyogcmlnaHQgKi8sIFwiV0hJVEVcIiAvKiBXSElURSAqLywgMywgTUFJTl9UQU5LX0lEKSk7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIodGhpcywgc2NyZWVuLCBzcHJpdGVTcmMpO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZUlucHV0cygpO1xyXG4gICAgICAgIHNjcmVlbi5mb2N1cygpO1xyXG4gICAgICAgIC8vIHRoaXMuc2hvd1RpdGxlKCk7XHJcbiAgICB9XHJcbiAgICBHYW1lLnByb3RvdHlwZS5pbml0aWFsaXplSW5wdXRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5fa2V5U3RhdGUgPSB7fTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgICAgIHZhciBtYWluVGFuayA9IF90aGlzLm1haW5UYW5rO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGV2LmNvZGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJBcnJvd1VwXCIgLyogYXJyb3dfdXAgKi86XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dSaWdodFwiIC8qIGFycm93X3JpZ2h0ICovOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkFycm93RG93blwiIC8qIGFycm93X2Rvd24gKi86XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dMZWZ0XCIgLyogYXJyb3dfbGVmdCAqLzpcclxuICAgICAgICAgICAgICAgICAgICBpZiAobWFpblRhbmspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFpblRhbmsuZGlyZWN0aW9uID0gRUtleXNUb0VEaXJlY3Rpb24oZXYuY29kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnJlc2V0QXJyb3dJbnB1dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9rZXlTdGF0ZVtldi5jb2RlXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiU3BhY2VcIiAvKiBzcGFjZWJhciAqLzpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJFc2NhcGVcIiAvKiBlc2MgKi86XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uIChldikge1xyXG4gICAgICAgICAgICB2YXIgY29kZSA9IGV2LmNvZGU7XHJcbiAgICAgICAgICAgIF90aGlzLl9rZXlTdGF0ZVtjb2RlXSA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEdhbWUucHJvdG90eXBlLnJlc2V0QXJyb3dJbnB1dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLl9rZXlTdGF0ZS5BcnJvd1VwID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fa2V5U3RhdGUuQXJyb3dSaWdodCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2tleVN0YXRlLkFycm93RG93biA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2tleVN0YXRlLkFycm93TGVmdCA9IGZhbHNlO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHYW1lLnByb3RvdHlwZSwgXCJrZXlTdGF0ZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9rZXlTdGF0ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoR2FtZS5wcm90b3R5cGUsIFwibWFpblRhbmtcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgZm91bmQgPSB0aGlzLmZpbmRPYmplY3RCeUlkKE1BSU5fVEFOS19JRCk7XHJcbiAgICAgICAgICAgIGlmIChmb3VuZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZm91bmRbMF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHYW1lLnByb3RvdHlwZSwgXCJpc1RhbmtNb3ZlUmVhZHlcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgbWFpblRhbmsgPSB0aGlzLm1haW5UYW5rO1xyXG4gICAgICAgICAgICBpZiAobWFpblRhbmsgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICgodGhpcy5fa2V5U3RhdGUuQXJyb3dVcCA9PT0gdHJ1ZSAmJiBtYWluVGFuay5kaXJlY3Rpb24gPT0gXCJ1cFwiIC8qIHVwICovKSB8fFxyXG4gICAgICAgICAgICAgICAgKHRoaXMuX2tleVN0YXRlLkFycm93UmlnaHQgPT09IHRydWUgJiYgbWFpblRhbmsuZGlyZWN0aW9uID09IFwicmlnaHRcIiAvKiByaWdodCAqLykgfHxcclxuICAgICAgICAgICAgICAgICh0aGlzLl9rZXlTdGF0ZS5BcnJvd0Rvd24gPT09IHRydWUgJiYgbWFpblRhbmsuZGlyZWN0aW9uID09IFwiZG93blwiIC8qIGRvd24gKi8pIHx8XHJcbiAgICAgICAgICAgICAgICAodGhpcy5fa2V5U3RhdGUuQXJyb3dMZWZ0ID09PSB0cnVlICYmIG1haW5UYW5rLmRpcmVjdGlvbiA9PSBcImxlZnRcIiAvKiBsZWZ0ICovKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBHYW1lLnByb3RvdHlwZS5zaG93VGl0bGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgR2FtZS5wcm90b3R5cGUuc2hvd01lbnUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgR2FtZS5wcm90b3R5cGUubmV3R2FtZSA9IGZ1bmN0aW9uIChnYW1lVHlwZSwgbGV2ZWwsIG9iamVjdHMpIHtcclxuICAgICAgICB0aGlzLl9nYW1lRGF0YSA9IHtcclxuICAgICAgICAgICAgZ2FtZVR5cGU6IGdhbWVUeXBlLFxyXG4gICAgICAgICAgICBsZXZlbERhdGE6IGxldmVsLFxyXG4gICAgICAgICAgICBvYmplY3RzOiBvYmplY3RzXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICBHYW1lLnByb3RvdHlwZS5nZXRPYmplY3RzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9nYW1lRGF0YS5vYmplY3RzID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2FtZURhdGEub2JqZWN0cztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgR2FtZS5wcm90b3R5cGUuZmluZE9iamVjdEJ5SWQgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICBpZiAodGhpcy5fZ2FtZURhdGEub2JqZWN0cyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dhbWVEYXRhLm9iamVjdHMuZmlsdGVyKGZ1bmN0aW9uIChvYmplY3QpIHsgcmV0dXJuIG9iamVjdC5pZCA9PT0gaWQ7IH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gR2FtZTtcclxufSgpKTtcclxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcclxuIiwiZXhwb3J0IGZ1bmN0aW9uIEVLZXlzVG9FRGlyZWN0aW9uKGtleXMpIHtcclxuICAgIHN3aXRjaCAoa2V5cykge1xyXG4gICAgICAgIGNhc2UgXCJBcnJvd1VwXCIgLyogYXJyb3dfdXAgKi86XHJcbiAgICAgICAgICAgIHJldHVybiBcInVwXCIgLyogdXAgKi87XHJcbiAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIiAvKiBhcnJvd19yaWdodCAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIFwicmlnaHRcIiAvKiByaWdodCAqLztcclxuICAgICAgICBjYXNlIFwiQXJyb3dEb3duXCIgLyogYXJyb3dfZG93biAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIFwiZG93blwiIC8qIGRvd24gKi87XHJcbiAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiIC8qIGFycm93X2xlZnQgKi86XHJcbiAgICAgICAgICAgIHJldHVybiBcImxlZnRcIiAvKiBsZWZ0ICovO1xyXG4gICAgfVxyXG59XHJcbiIsInZhciBHYW1lT2JqZWN0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gR2FtZU9iamVjdChnYW1lLCBvYmplY3RUeXBlLCBwb3NpdGlvbiwgaWQpIHtcclxuICAgICAgICB0aGlzLl9nYW1lID0gZ2FtZTtcclxuICAgICAgICB0aGlzLm9iamVjdFR5cGUgPSBvYmplY3RUeXBlO1xyXG4gICAgICAgIGlmIChwb3NpdGlvbiAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fcG9zaXRvbiA9IHBvc2l0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fcG9zaXRvbiA9IHtcclxuICAgICAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgICAgICB5OiAwXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpZCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHYW1lT2JqZWN0LnByb3RvdHlwZSwgXCJwb3NpdGlvblwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9wb3NpdG9uO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAocG9zaXRpb24pIHtcclxuICAgICAgICAgICAgaWYgKHBvc2l0aW9uLnggPD0gMCB8fCBwb3NpdGlvbi55IDw9IDApIHtcclxuICAgICAgICAgICAgICAgIHRocm93ICdwb3NpdGlvbiBjYW5ub3QgYmUgYSBuZWdhdGl2ZSB2YWx1ZSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fcG9zaXRvbiA9IHBvc2l0aW9uO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBHYW1lT2JqZWN0O1xyXG59KCkpO1xyXG5leHBvcnQgZGVmYXVsdCBHYW1lT2JqZWN0O1xyXG4iLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuaW1wb3J0IEdhbWVPYmplY3QgZnJvbSBcIi4vR2FtZU9iamVjdFwiO1xyXG52YXIgTW92aW5nT2JqZWN0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKE1vdmluZ09iamVjdCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIE1vdmluZ09iamVjdChnYW1lLCBvYmplY3RUeXBlLCBwb3NpdGlvbiwgZGlyZWN0aW9uLCBzcGVlZCwgaWQpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBnYW1lLCBvYmplY3RUeXBlLCBwb3NpdGlvbiwgaWQpIHx8IHRoaXM7XHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbiAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgX3RoaXMuX2RpcmVjdGlvbiA9IGRpcmVjdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIF90aGlzLl9kaXJlY3Rpb24gPSBcInVwXCIgLyogdXAgKi87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF90aGlzLl9zcGVlZCA9IHNwZWVkO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNb3ZpbmdPYmplY3QucHJvdG90eXBlLCBcImRpcmVjdGlvblwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9kaXJlY3Rpb247XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChkaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5fZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBNb3ZpbmdPYmplY3Q7XHJcbn0oR2FtZU9iamVjdCkpO1xyXG5leHBvcnQgZGVmYXVsdCBNb3ZpbmdPYmplY3Q7XHJcbiIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5pbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gXCIuL01vdmluZ09iamVjdFwiO1xyXG5leHBvcnQgdmFyIFRBTktfU1BFRUQgPSAyO1xyXG52YXIgVGFua09iamVjdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhUYW5rT2JqZWN0LCBfc3VwZXIpO1xyXG4gICAgLy8jcmVnaW9uIGNvbnN0cnVjdG9yXHJcbiAgICBmdW5jdGlvbiBUYW5rT2JqZWN0KGdhbWUsIHBvc2l0aW9uLCBkaXJlY3Rpb24sIHRhbmtDb2xvciwgdGFua0xldmVsLCBpZCkge1xyXG4gICAgICAgIGlmICh0YW5rTGV2ZWwgPT09IHZvaWQgMCkgeyB0YW5rTGV2ZWwgPSAxOyB9XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZ2FtZSwgMCAvKiBUQU5LICovLCBwb3NpdGlvbiwgZGlyZWN0aW9uLCBUQU5LX1NQRUVELCBpZCkgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5fdGFua0NvbG9yID0gdGFua0NvbG9yO1xyXG4gICAgICAgIF90aGlzLl90YW5rTGV2ZWwgPSB0YW5rTGV2ZWw7XHJcbiAgICAgICAgX3RoaXMuX3Nwcml0ZVBvc2l0aW9uID0gMDtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVGFua09iamVjdC5wcm90b3R5cGUsIFwidGFua0NvbG9yXCIsIHtcclxuICAgICAgICAvLyNlbmRyZWdpb25cclxuICAgICAgICAvLyNyZWdpb24gZ2V0dGVyLCBzZXR0ZXJcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RhbmtDb2xvcjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVGFua09iamVjdC5wcm90b3R5cGUsIFwidGFua0xldmVsXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RhbmtMZXZlbDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVGFua09iamVjdC5wcm90b3R5cGUsIFwic3ByaXRlUG9zaXRpb25cIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3ByaXRlUG9zaXRpb247XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgLy8jZW5kcmVnaW9uXHJcbiAgICBUYW5rT2JqZWN0LnByb3RvdHlwZS5uZXh0U3ByaXRlUG9zaXRpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlUG9zaXRpb24gPSB0aGlzLl9zcHJpdGVQb3NpdGlvbiArIDEgPD0gMSA/IHRoaXMuX3Nwcml0ZVBvc2l0aW9uICsgMSA6IDA7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nwcml0ZVBvc2l0aW9uO1xyXG4gICAgfTtcclxuICAgIC8vI3JlZ2lvbiBpbXBsZW1lbnRzIG9mIE1vdmluZ09iamVjdFx0XHJcbiAgICBUYW5rT2JqZWN0LnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIGxldCBjaGFuZ2VkID0gZGVlcENsb25lKHRoaXMucG9zaXRpb24pIGFzIFBvaW50O1xyXG4gICAgICAgIHZhciBjaGFuZ2VkID0gdGhpcy5wb3NpdGlvbjtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ1cFwiIC8qIHVwICovOlxyXG4gICAgICAgICAgICAgICAgY2hhbmdlZC55IC09IHRoaXMuX3NwZWVkO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJyaWdodFwiIC8qIHJpZ2h0ICovOlxyXG4gICAgICAgICAgICAgICAgY2hhbmdlZC54ICs9IHRoaXMuX3NwZWVkO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJkb3duXCIgLyogZG93biAqLzpcclxuICAgICAgICAgICAgICAgIGNoYW5nZWQueSArPSB0aGlzLl9zcGVlZDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwibGVmdFwiIC8qIGxlZnQgKi86XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VkLnggLT0gdGhpcy5fc3BlZWQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5uZXh0U3ByaXRlUG9zaXRpb24oKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gVGFua09iamVjdDtcclxufShNb3ZpbmdPYmplY3QpKTtcclxuZXhwb3J0IGRlZmF1bHQgVGFua09iamVjdDtcclxuIiwiaW1wb3J0IFNQUlRJRV9ERUYgZnJvbSBcIi4vU3ByaXRlL1Nwcml0ZURlZmluaXRpb25cIjtcclxuZXhwb3J0IHZhciBNQVhfRlBTID0gNjA7XHJcbmV4cG9ydCB2YXIgRFJBV0lOR19DT05TVCA9IHtcclxuICAgIGNvbG9yczoge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IFwiIzAwMDAwMFwiLFxyXG4gICAgICAgIGJhY2tncm91bmRfZnJhbWU6IFwiIzk0OTQ5NFwiLFxyXG4gICAgfSxcclxuICAgIHNpemVzOiB7XHJcbiAgICAgICAgZnJhbWU6IHtcclxuICAgICAgICAgICAgbGVmdDogMTYsXHJcbiAgICAgICAgICAgIHRvcDogMTAsXHJcbiAgICAgICAgICAgIGJvdHRvbTogMTAsXHJcbiAgICAgICAgICAgIHJpZ2h0OiAzMlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxudmFyIFJlbmRlcmVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUmVuZGVyZXIoZ2FtZSwgY2FudmFzLCBzcHJpdGVTcmMpIHtcclxuICAgICAgICB0aGlzLl9mcHMgPSB7XHJcbiAgICAgICAgICAgIGZwc0ludGVydmFsOiAxMDAwIC8gTUFYX0ZQUyxcclxuICAgICAgICAgICAgbm93OiBwZXJmb3JtYW5jZS5ub3coKSxcclxuICAgICAgICAgICAgdGhlbjogcGVyZm9ybWFuY2Uubm93KCksXHJcbiAgICAgICAgICAgIGVsYXBzZWQ6IDBcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChjYW52YXMgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93ICdjYW52YXMgaXMgbnVsbCBvciB1bmRlZmluZWQnO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9jYW52YXMgPSBjYW52YXM7XHJcbiAgICAgICAgaWYgKGdhbWUgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93ICdnYW1lIGlzIG51bGwgb3IgdW5kZWZpbmVkJztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZ2FtZSA9IGdhbWU7XHJcbiAgICAgICAgdGhpcy5pbml0U2NyZWVuKCk7XHJcbiAgICAgICAgdGhpcy5sb2FkU3ByaXRlKHNwcml0ZVNyYyk7XHJcbiAgICB9XHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUubG9hZFNwcml0ZSA9IGZ1bmN0aW9uIChzcmMpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIF90aGlzLnJlbmRlcigpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlLnNyYyA9IHNyYztcclxuICAgIH07XHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUuaW5pdFNjcmVlbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLl9jYW52YXMud2lkdGggPSA2MDA7XHJcbiAgICAgICAgdGhpcy5fY2FudmFzLmhlaWdodCA9IDYwMDtcclxuICAgIH07XHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHsgX3RoaXMucmVuZGVyKCk7IH0pO1xyXG4gICAgICAgIHZhciBmcHMgPSB0aGlzLl9mcHM7XHJcbiAgICAgICAgZnBzLm5vdyA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIGZwcy5lbGFwc2VkID0gZnBzLm5vdyAtIGZwcy50aGVuO1xyXG4gICAgICAgIGlmIChmcHMuZWxhcHNlZCA+IGZwcy5mcHNJbnRlcnZhbCkge1xyXG4gICAgICAgICAgICBmcHMudGhlbiA9IGZwcy5ub3cgLSAoZnBzLmVsYXBzZWQgJSBmcHMuZnBzSW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICAvLyBwcm9jZXNzIG1vdmUgYWN0aW9uXHJcbiAgICAgICAgICAgIHZhciBtYWluVGFuayA9IHRoaXMuX2dhbWUubWFpblRhbms7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9nYW1lLmlzVGFua01vdmVSZWFkeSkge1xyXG4gICAgICAgICAgICAgICAgbWFpblRhbmsubW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHN0YXJ0IGRyYXdpbmdcclxuICAgICAgICAgICAgLy8gZ2V0IGNvbnRleHRcclxuICAgICAgICAgICAgdmFyIGN0eCA9IHRoaXMuX2NhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgICAgICAvLyBjbGVhciBzY3JlZW5cclxuICAgICAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjdHguY2FudmFzLndpZHRoLCBjdHguY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgICAgIC8vIGRyYXcgYmFja2dyb3VuZHNcclxuICAgICAgICAgICAgdGhpcy5kcmF3QmFja2dyb3VuZChjdHgpO1xyXG4gICAgICAgICAgICAvLyBkcmF3IG9iamVjdHNcclxuICAgICAgICAgICAgdGhpcy5kcmF3T2JqZWN0cyhjdHgsIHRoaXMuX2dhbWUuZ2V0T2JqZWN0cygpKTtcclxuICAgICAgICAgICAgLy8gZHJhdyBkZWJ1ZyBjb3VudGVyXHJcbiAgICAgICAgICAgIHRoaXMuZHJhd0RlYnVnQ291bnRlcihjdHgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUuZHJhd0JhY2tncm91bmQgPSBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gRFJBV0lOR19DT05TVC5jb2xvcnMuYmFja2dyb3VuZF9mcmFtZTtcclxuICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgY3R4LmNhbnZhcy53aWR0aCwgY3R4LmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IERSQVdJTkdfQ09OU1QuY29sb3JzLmJhY2tncm91bmQ7XHJcbiAgICAgICAgY3R4LmZpbGxSZWN0KERSQVdJTkdfQ09OU1Quc2l6ZXMuZnJhbWUubGVmdCwgRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS50b3AsIGN0eC5jYW52YXMud2lkdGggLSAoRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS5sZWZ0ICsgRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS5yaWdodCksIGN0eC5jYW52YXMuaGVpZ2h0IC0gKERSQVdJTkdfQ09OU1Quc2l6ZXMuZnJhbWUudG9wICsgRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS5ib3R0b20pKTtcclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfTtcclxuICAgIFJlbmRlcmVyLnByb3RvdHlwZS5kcmF3T2JqZWN0cyA9IGZ1bmN0aW9uIChjdHgsIG9iamVjdHMpIHtcclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgb2JqZWN0ID0gb2JqZWN0c1tpXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvYmplY3Qub2JqZWN0VHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwIC8qIFRBTksgKi86XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhbmsgPSBvYmplY3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNwcml0ZSA9IFNQUlRJRV9ERUYuVEFOS1t0YW5rLnRhbmtDb2xvcl1bdGFuay50YW5rTGV2ZWxdW3RhbmsuZGlyZWN0aW9uXVt0YW5rLnNwcml0ZVBvc2l0aW9uXTtcclxuICAgICAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuX3Nwcml0ZSwgc3ByaXRlLnBvc2l0aW9uLngsIHNwcml0ZS5wb3NpdGlvbi55LCBzcHJpdGUuc2l6ZS53aWR0aCwgc3ByaXRlLnNpemUuaGVpZ2h0LCBEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lLmxlZnQgKyBvYmplY3QucG9zaXRpb24ueCwgRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS50b3AgKyBvYmplY3QucG9zaXRpb24ueSwgc3ByaXRlLnNpemUud2lkdGgsIHNwcml0ZS5zaXplLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgUmVuZGVyZXIucHJvdG90eXBlLmRyYXdEZWJ1Z0NvdW50ZXIgPSBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgICAgdmFyIGtleVN0YXRlID0gdGhpcy5fZ2FtZS5rZXlTdGF0ZTtcclxuICAgICAgICB0aGlzLmRyYXdUZXh0KGN0eCwgKDEwMDAgLyB0aGlzLl9mcHMuZWxhcHNlZCkudG9GaXhlZCgyKSArIFwiZnBzIFwiLCB7IHg6IDAsIHk6IGN0eC5jYW52YXMuaGVpZ2h0IH0pO1xyXG4gICAgICAgIHRoaXMuZHJhd1RleHQoY3R4LCBcIkFycm93TGVmdDogXCIgKyAoa2V5U3RhdGUuQXJyb3dMZWZ0ID8gJ1QnIDogJ0YnKSwgeyB4OiAwLCB5OiBjdHguY2FudmFzLmhlaWdodCAtIDIwIH0pO1xyXG4gICAgICAgIHRoaXMuZHJhd1RleHQoY3R4LCBcIkFycm93RG93bjogXCIgKyAoa2V5U3RhdGUuQXJyb3dEb3duID8gJ1QnIDogJ0YnKSwgeyB4OiAwLCB5OiBjdHguY2FudmFzLmhlaWdodCAtIDQwIH0pO1xyXG4gICAgICAgIHRoaXMuZHJhd1RleHQoY3R4LCBcIkFycm93UmlnaHQ6IFwiICsgKGtleVN0YXRlLkFycm93UmlnaHQgPyAnVCcgOiAnRicpLCB7IHg6IDAsIHk6IGN0eC5jYW52YXMuaGVpZ2h0IC0gNjAgfSk7XHJcbiAgICAgICAgdGhpcy5kcmF3VGV4dChjdHgsIFwiQXJyb3dVcDogXCIgKyAoa2V5U3RhdGUuQXJyb3dVcCA/ICdUJyA6ICdGJyksIHsgeDogMCwgeTogY3R4LmNhbnZhcy5oZWlnaHQgLSA4MCB9KTtcclxuICAgIH07XHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUuZHJhd1RleHQgPSBmdW5jdGlvbiAoY3R4LCB0ZXh0LCBwb3NpdGlvbikge1xyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgY3R4LmZvbnQgPSAnMjBweCBzYW4tc2VyaWYnO1xyXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICd3aGl0ZSc7XHJcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDI7XHJcbiAgICAgICAgY3R4LnN0cm9rZVRleHQodGV4dCwgcG9zaXRpb24ueCwgcG9zaXRpb24ueSk7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdibGFjayc7XHJcbiAgICAgICAgY3R4LmZpbGxUZXh0KHRleHQsIHBvc2l0aW9uLngsIHBvc2l0aW9uLnkpO1xyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFJlbmRlcmVyO1xyXG59KCkpO1xyXG5leHBvcnQgZGVmYXVsdCBSZW5kZXJlcjtcclxuIiwiO1xyXG52YXIgU1BSVElFX0RFRiA9IHtcclxuICAgIFRBTks6IHtcclxuICAgICAgICBZRUxMT1c6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDAsIHk6IDAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIsIHk6IDAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDY0LCB5OiAwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDk2LCB5OiAwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxMjgsIHk6IDAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTYwLCB5OiAwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTkyLCB5OiAwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDIyNCwgeTogMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAwLCB5OiAzMiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMiwgeTogMzIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDY0LCB5OiAzMiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA5NiwgeTogMzIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDEyOCwgeTogMzIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTYwLCB5OiAzMiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE5MiwgeTogMzIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjI0LCB5OiAzMiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAwLCB5OiA2NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMiwgeTogNjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDY0LCB5OiA2NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA5NiwgeTogNjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDEyOCwgeTogNjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTYwLCB5OiA2NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE5MiwgeTogNjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjI0LCB5OiA2NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAwLCB5OiA5NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMiwgeTogOTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDY0LCB5OiA5NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA5NiwgeTogOTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDEyOCwgeTogOTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTYwLCB5OiA5NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE5MiwgeTogOTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjI0LCB5OiA5NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIEdSRUVOOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAwLCB5OiAyNTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIsIHk6IDI1NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNjQsIHk6IDI1NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA5NiwgeTogMjU2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxMjgsIHk6IDI1NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxNjAsIHk6IDI1NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE5MiwgeTogMjU2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDIyNCwgeTogMjU2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDAsIHk6IDI4OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMiwgeTogMjg4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA2NCwgeTogMjg4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDk2LCB5OiAyODggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDEyOCwgeTogMjg4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE2MCwgeTogMjg4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTkyLCB5OiAyODggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjI0LCB5OiAyODggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMCwgeTogMzIwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyLCB5OiAzMjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDY0LCB5OiAzMjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogOTYsIHk6IDMyMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTI4LCB5OiAzMjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTYwLCB5OiAzMjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxOTIsIHk6IDMyMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyMjQsIHk6IDMyMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAwLCB5OiAzNTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIsIHk6IDM1MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNjQsIHk6IDM1MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA5NiwgeTogMzUyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxMjgsIHk6IDM1MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxNjAsIHk6IDM1MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE5MiwgeTogMzUyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDIyNCwgeTogMzUyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgV0hJVEU6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI1NiwgeTogMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyODgsIHk6IDAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyMCwgeTogMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzNTIsIHk6IDAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM4NCwgeTogMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0MTYsIHk6IDAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0NDgsIHk6IDAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDgwLCB5OiAwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI1NiwgeTogMzIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjg4LCB5OiAzMiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIwLCB5OiAzMiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzNTIsIHk6IDMyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzODQsIHk6IDMyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQxNiwgeTogMzIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0NDgsIHk6IDMyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ4MCwgeTogMzIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjU2LCB5OiA2NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyODgsIHk6IDY0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMjAsIHk6IDY0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM1MiwgeTogNjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM4NCwgeTogNjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDE2LCB5OiA2NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ0OCwgeTogNjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDgwLCB5OiA2NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyNTYsIHk6IDk2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI4OCwgeTogOTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyMCwgeTogOTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzUyLCB5OiA5NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzg0LCB5OiA5NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0MTYsIHk6IDk2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDQ4LCB5OiA5NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0ODAsIHk6IDk2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgTUFHRU5UQTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjU2LCB5OiAyNTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjg4LCB5OiAyNTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyMCwgeTogMjU2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM1MiwgeTogMjU2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzODQsIHk6IDI1NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0MTYsIHk6IDI1NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ0OCwgeTogMjU2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ4MCwgeTogMjU2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI1NiwgeTogMjg4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI4OCwgeTogMjg4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMjAsIHk6IDI4OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzNTIsIHk6IDI4OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzg0LCB5OiAyODggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDE2LCB5OiAyODggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0NDgsIHk6IDI4OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0ODAsIHk6IDI4OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyNTYsIHk6IDMyMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyODgsIHk6IDMyMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIwLCB5OiAzMjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzUyLCB5OiAzMjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM4NCwgeTogMzIwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQxNiwgeTogMzIwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDQ4LCB5OiAzMjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDgwLCB5OiAzMjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjU2LCB5OiAzNTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjg4LCB5OiAzNTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyMCwgeTogMzUyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM1MiwgeTogMzUyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzODQsIHk6IDM1MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0MTYsIHk6IDM1MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ0OCwgeTogMzUyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ4MCwgeTogMzUyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgU1BSVElFX0RFRjtcclxuIiwiZXhwb3J0IGRlZmF1bHQgXCIuLi9kaXN0L2pzL3Nwcml0ZS5wbmdcIjsiLCJpbXBvcnQgR2FtZSBmcm9tIFwiLi9HYW1lL0dhbWVcIjtcclxudmFyIHNwcml0ZUltYWdlID0gcmVxdWlyZSgnLi9SZW5kZXIvU3ByaXRlL3Nwcml0ZS5wbmcnKTtcclxudmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xyXG4vLyBpbml0IGdhbWVcclxudmFyIGdhbWUgPSBuZXcgR2FtZShjYW52YXMsICcuL2pzL3Nwcml0ZS5wbmcnKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==