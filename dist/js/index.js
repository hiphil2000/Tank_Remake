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
/*! exports provided: MAIN_TANK_ID, MAXIMUM_TANKS, TANK_SPAWN_DELAY, TANK_SPAWN_POINT, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAIN_TANK_ID", function() { return MAIN_TANK_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAXIMUM_TANKS", function() { return MAXIMUM_TANKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TANK_SPAWN_DELAY", function() { return TANK_SPAWN_DELAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TANK_SPAWN_POINT", function() { return TANK_SPAWN_POINT; });
/* harmony import */ var _Render_Renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Render/Renderer */ "./src/Render/Renderer.ts");
/* harmony import */ var _Object_GameObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Object/GameObject */ "./src/Game/Object/GameObject.ts");
/* harmony import */ var _Object_TankObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Object/TankObject */ "./src/Game/Object/TankObject.ts");
/* harmony import */ var _Utils_CollisionTest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Utils/CollisionTest */ "./src/Utils/CollisionTest.ts");
/* harmony import */ var _Render_Sprite_SpriteDefinition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Render/Sprite/SpriteDefinition */ "./src/Render/Sprite/SpriteDefinition.ts");
/* harmony import */ var _Object_AnimationObject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Object/AnimationObject */ "./src/Game/Object/AnimationObject.ts");
/* harmony import */ var _Object_Enum_EAnimationType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Object/Enum/EAnimationType */ "./src/Game/Object/Enum/EAnimationType.ts");
/* harmony import */ var _Object_BlockObject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Object/BlockObject */ "./src/Game/Object/BlockObject.ts");
/* harmony import */ var _Render_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Render/Sprite/SpriteData */ "./src/Render/Sprite/SpriteData.ts");
/* harmony import */ var _Level_DefaultLevels__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Level/DefaultLevels */ "./src/Game/Level/DefaultLevels.ts");
/* harmony import */ var _InputManager_InputManager__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./InputManager/InputManager */ "./src/Game/InputManager/InputManager.ts");
/* harmony import */ var _Utils_Utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Utils/Utils */ "./src/Utils/Utils.ts");
/* harmony import */ var _Object_TankAIObject__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Object/TankAIObject */ "./src/Game/Object/TankAIObject.ts");













var MAIN_TANK_ID = 'MAIN';
var MAXIMUM_TANKS = 4;
var TANK_SPAWN_DELAY = 2500;
var TANK_SPAWN_POINT = {
    PLAYER_TANK: [
        { x: 4, y: 12 },
        { x: 8, y: 12 }
    ],
    ENEMY_TANK: [
        { x: 0, y: 0 },
        { x: 6, y: 0 },
        { x: 12, y: 0 }
    ]
};
var Game = /** @class */ (function () {
    function Game(screen, sprite_main_src, sprite_title_src, debug) {
        this.debug = debug;
        this._objects = [];
        this._lastSpawn = performance.now();
        this._pause = false;
        this._renderer = new _Render_Renderer__WEBPACK_IMPORTED_MODULE_0__["default"](this, screen, sprite_main_src, sprite_title_src);
        this._inputManager = new _InputManager_InputManager__WEBPACK_IMPORTED_MODULE_10__["default"](this);
        screen.focus();
        this.showTitle();
    }
    Object.defineProperty(Game.prototype, "mainTank", {
        //#region getter and setter
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
    Object.defineProperty(Game.prototype, "objects", {
        get: function () {
            return this._objects;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "pause", {
        get: function () {
            return this._pause;
        },
        set: function (pause) {
            this._pause = pause;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "keyState", {
        get: function () {
            return this._inputManager.keyState;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "gameData", {
        get: function () {
            return this._gameData;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "currentMenu", {
        get: function () {
            return this._currentMenu;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "cursorIndex", {
        get: function () {
            return this._inputManager.cursorIndex;
        },
        enumerable: false,
        configurable: true
    });
    //#endregion
    //#region public methods
    //#region debug methods
    Game.prototype.log = function (msg) {
        if (this.debug) {
            console.log("[" + performance.now() + "] " + msg);
        }
    };
    //#endregion
    //#region game object methods
    Game.prototype.insertObject = function (object) {
        this._objects.push(object);
        this.sortObject();
    };
    Game.prototype.removeObject = function (object) {
        var idx = this._objects.indexOf(object);
        this._objects.splice(idx, 1);
        this.sortObject();
    };
    Game.prototype.sortObject = function () {
        if (this._gameData == null || this._objects == null) {
            return;
        }
        this._objects.sort(function (obj1, obj2) {
            var zindex1 = _Render_Renderer__WEBPACK_IMPORTED_MODULE_0__["default"].getObjectZIndex(obj1);
            var zindex2 = _Render_Renderer__WEBPACK_IMPORTED_MODULE_0__["default"].getObjectZIndex(obj2);
            return zindex1 - zindex2;
        });
    };
    Game.prototype.findObjectById = function (id) {
        return this._objects.filter(function (object) { return object.id === id; });
    };
    Game.prototype.collisionTest = function (object) {
        var found = [];
        if (this._gameData == null || this._objects == null) {
            return found;
        }
        this._objects.forEach(function (item) {
            if (item == object) {
                return;
            }
            if (item.objectType === "ANIMATION" /* ANIMATION */) {
                return;
            }
            else if (item.objectType === "BLOCK" /* BLOCK */) {
                var blockType = item.blockType;
                if ((object.objectType === "TANK" /* TANK */ || object.objectType === "BULLET" /* BULLET */) && blockType === "BUSH" /* BUSH */) {
                    return;
                }
                if (object.objectType === "BULLET" /* BULLET */ && blockType === "WATER" /* WATER */) {
                    return;
                }
            }
            else if (item.objectType === "TANK" /* TANK */) {
                if (object.objectType === "BULLET" /* BULLET */) {
                    if (item.id === object.parentId) {
                        return;
                    }
                }
            }
            else if (item.objectType === "BULLET" /* BULLET */) {
                if (object.objectType === "TANK" /* TANK */) {
                    return;
                }
            }
            else if (item.objectType === "ITEM" /* ITEM */) {
                if (object.objectType === "BULLET" /* BULLET */) {
                    return;
                }
            }
            var test = false;
            if (item.objectType === "BLOCK" /* BLOCK */) {
                test = Object(_Utils_CollisionTest__WEBPACK_IMPORTED_MODULE_3__["BlockCollisionTest"])(item, object).length > 0;
            }
            else {
                test = Object(_Utils_CollisionTest__WEBPACK_IMPORTED_MODULE_3__["ObjectCollisionTest"])(object, item);
            }
            if (test === true) {
                found.push(item);
            }
        });
        return found;
    };
    Game.prototype.startAnimation = function (target, animationType, animationValue, callback) {
        var animationPoint;
        if (target instanceof _Object_GameObject__WEBPACK_IMPORTED_MODULE_1__["default"]) {
            var object = target;
            var size = Object(_Render_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_8__["getSpriteData"])(object).size;
            animationPoint = {
                x: object.position.x + size.width / 2,
                y: object.position.y + size.height / 2
            };
        }
        else {
            animationPoint = target;
        }
        if (animationValue == undefined) {
            animationValue = _Object_Enum_EAnimationType__WEBPACK_IMPORTED_MODULE_6__["AnimationDefaults"][animationType];
        }
        var animation = new _Object_AnimationObject__WEBPACK_IMPORTED_MODULE_5__["default"](this, null, animationType, animationPoint, animationValue.duration, animationValue.frameRate, animationValue.loop, callback);
        this.insertObject(animation);
    };
    //#region renderer porting methods
    /**
     * Test object is visible (Port of Renderer.testVisibility)
     * @param object object for test
     * @param sprite object's sprite data for size
     */
    Game.prototype.testVisibility = function (object) {
        return this._renderer.objectVisibleTest(object);
    };
    //#endregion
    //#endregion
    Game.prototype.newGame = function (playerCount, gameType, level) {
        var _this = this;
        this._currentMenu = "GAME" /* GAME */;
        this._objects = [];
        if (gameType == undefined) {
            gameType = 0 /* PVE */;
        }
        if (level == undefined) {
            level = _Level_DefaultLevels__WEBPACK_IMPORTED_MODULE_9__["default"][0];
        }
        var playerData = new Array();
        for (var i = 0; i < playerCount; i++) {
            playerData.push({
                life: 5,
                score: 0,
                destroedTank: {}
            });
        }
        this._gameData = {
            gameType: gameType,
            playerData: playerData,
            levelData: level,
            gameOver: false
        };
        this.spawnTank("PLAYER_TANK" /* PLAYER_TANK */, true, 0);
        if (playerCount > 1) {
            this.spawnTank("PLAYER_TANK" /* PLAYER_TANK */, true, 1);
        }
        level.blocks.forEach(function (block) {
            _this.insertObject(new _Object_BlockObject__WEBPACK_IMPORTED_MODULE_7__["default"](_this, block.type, {
                x: _Render_Renderer__WEBPACK_IMPORTED_MODULE_0__["DRAWING_CONST"].sizes.frame.left + block.position.x * 32,
                y: _Render_Renderer__WEBPACK_IMPORTED_MODULE_0__["DRAWING_CONST"].sizes.frame.top + block.position.y * 32
            }, block.blockState));
        });
    };
    Game.prototype.setPause = function () {
        this._pause = true;
        var FRAME = _Render_Renderer__WEBPACK_IMPORTED_MODULE_0__["DRAWING_CONST"].sizes.frame;
        var SCREEN = _Render_Renderer__WEBPACK_IMPORTED_MODULE_0__["DRAWING_CONST"].sizes.screen;
        this.startAnimation({
            x: FRAME.left + SCREEN.width / 2,
            y: (FRAME.top + FRAME.bottom + SCREEN.height) / 2 + _Render_Sprite_SpriteDefinition__WEBPACK_IMPORTED_MODULE_4__["default"].ANIMATION.PAUSE[0].size.height / 2
        }, "PAUSE" /* PAUSE */);
    };
    Game.prototype.gameover = function () {
        var _this = this;
        if (this.gameData.gameOver) {
            return;
        }
        this.gameData.gameOver = true;
        var FRAME = _Render_Renderer__WEBPACK_IMPORTED_MODULE_0__["DRAWING_CONST"].sizes.frame;
        var SCREEN = _Render_Renderer__WEBPACK_IMPORTED_MODULE_0__["DRAWING_CONST"].sizes.screen;
        this.startAnimation({
            x: FRAME.left + SCREEN.width / 2,
            y: FRAME.top + FRAME.bottom + SCREEN.height
        }, "GAMEOVER" /* GAMEOVER */, null, function () {
            _this.showResultScreen();
        });
    };
    Game.prototype.showResultScreen = function () {
    };
    Game.prototype.showTitle = function () {
        var _this = this;
        this._currentMenu = "MAIN" /* MAIN */;
        this._objects = [];
        this._renderer.titleShown = false;
        this._inputManager.initialize();
        var FRAME = _Render_Renderer__WEBPACK_IMPORTED_MODULE_0__["DRAWING_CONST"].sizes.frame;
        var SCREEN = _Render_Renderer__WEBPACK_IMPORTED_MODULE_0__["DRAWING_CONST"].sizes.screen;
        this.startAnimation({
            x: (FRAME.left + SCREEN.width + FRAME.right) / 2,
            y: (FRAME.top + SCREEN.width + FRAME.bottom) * 1.5
        }, "TITLE" /* TITLE */, null, function () {
            _this.startAnimation({
                x: 129 + 16,
                y: 265 + _this.cursorIndex * 32 + 16
            }, "CURSOR" /* CURSOR */);
        });
    };
    //#endregion
    //#region private methods
    Game.prototype.spawnTank = function (tankType, freeSpawn, playerIndex) {
        if (freeSpawn === void 0) { freeSpawn = false; }
        if (tankType === "PLAYER_TANK" /* PLAYER_TANK */) {
            if (this._gameData.playerData[playerIndex].life <= 0) {
                return;
            }
            var tankColor = void 0;
            if (playerIndex === 0) {
                tankColor = "YELLOW" /* YELLOW */;
            }
            else {
                tankColor = "GREEN" /* GREEN */;
            }
            var position = TANK_SPAWN_POINT[tankType][playerIndex];
            this.createPlayerTank({
                x: _Render_Renderer__WEBPACK_IMPORTED_MODULE_0__["DRAWING_CONST"].sizes.frame.left + position.x * Object(_Render_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_8__["getObjectSize"])("TANK" /* TANK */).width,
                y: _Render_Renderer__WEBPACK_IMPORTED_MODULE_0__["DRAWING_CONST"].sizes.frame.top + position.y * Object(_Render_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_8__["getObjectSize"])("TANK" /* TANK */).height,
            }, "up" /* up */, tankColor, 0);
            if (freeSpawn === false) {
                this._gameData.playerData[playerIndex].life--;
            }
        }
        else if (tankType === "ENEMY_TANK" /* ENEMY_TANK */) {
            var now = performance.now();
            if (now - this._lastSpawn > TANK_SPAWN_DELAY) {
                this._lastSpawn = now;
                var tanks = this._objects.filter(function (x) {
                    return x.objectType === "TANK" /* TANK */ && x.tankType === "ENEMY_TANK" /* ENEMY_TANK */;
                });
                if (tanks.length >= MAXIMUM_TANKS) {
                    return;
                }
                this.createEnemyTank({
                    type: "DEFAULT" /* DEFAULT */,
                    item: true
                });
            }
        }
    };
    Game.prototype.createPlayerTank = function (position, direction, tankColor, tankLevel) {
        if (this.mainTank) {
            this.removeObject(this.mainTank);
        }
        this.insertObject(new _Object_TankObject__WEBPACK_IMPORTED_MODULE_2__["default"](this, "PLAYER_TANK" /* PLAYER_TANK */, position, direction, tankColor, tankLevel, MAIN_TANK_ID));
    };
    Game.prototype.createEnemyTank = function (tankDefinition) {
        var tankSize = Object(_Render_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_8__["getObjectSize"])("TANK" /* TANK */);
        var spawnPoints = TANK_SPAWN_POINT.ENEMY_TANK;
        var idx = Object(_Utils_Utils__WEBPACK_IMPORTED_MODULE_11__["getRandomRange"])(0, 2);
        var position = {
            x: _Render_Renderer__WEBPACK_IMPORTED_MODULE_0__["DRAWING_CONST"].sizes.frame.left + spawnPoints[idx].x * tankSize.width,
            y: _Render_Renderer__WEBPACK_IMPORTED_MODULE_0__["DRAWING_CONST"].sizes.frame.top + spawnPoints[idx].y * tankSize.height
        };
        this.insertObject(new _Object_TankAIObject__WEBPACK_IMPORTED_MODULE_12__["default"](this, tankDefinition.type, tankDefinition.item ? tankDefinition.item : false, position, "down" /* down */));
    };
    return Game;
}());
/* harmony default export */ __webpack_exports__["default"] = (Game);


/***/ }),

/***/ "./src/Game/InputManager/EKeys.ts":
/*!****************************************!*\
  !*** ./src/Game/InputManager/EKeys.ts ***!
  \****************************************/
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

/***/ "./src/Game/InputManager/InputManager.ts":
/*!***********************************************!*\
  !*** ./src/Game/InputManager/InputManager.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EKeys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EKeys */ "./src/Game/InputManager/EKeys.ts");

var InputManager = /** @class */ (function () {
    function InputManager(game) {
        this._game = game;
        this._keyEvents = {};
        this.initialize();
    }
    InputManager.prototype.initialize = function () {
        this._keyState = {
            ArrowDown: false,
            ArrowUp: false,
            ArrowRight: false,
            ArrowLeft: false,
            Escape: false,
            Space: false
        };
        this._cursorIndex = 0;
        this.setEvents();
    };
    Object.defineProperty(InputManager.prototype, "keyState", {
        get: function () {
            return this._keyState;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputManager.prototype, "cursorIndex", {
        get: function () {
            return this._cursorIndex;
        },
        enumerable: false,
        configurable: true
    });
    InputManager.prototype.setEvents = function () {
        var _this = this;
        if (this._keyEvents.keydown != null) {
            document.removeEventListener('keydown', this._keyEvents.keydown);
        }
        if (this._keyEvents.keyup != null) {
            document.removeEventListener('keyup', this._keyEvents.keyup);
        }
        this._keyEvents.keydown = function (ev) {
            _this.keyDownEvent(ev);
        };
        this._keyEvents.keyup = function (ev) {
            _this.keyUpEvent(ev);
        };
        document.addEventListener('keydown', this._keyEvents.keydown);
        document.addEventListener('keyup', this._keyEvents.keyup);
    };
    InputManager.prototype.resetArrowInput = function () {
        this._keyState.ArrowUp = false;
        this._keyState.ArrowRight = false;
        this._keyState.ArrowDown = false;
        this._keyState.ArrowLeft = false;
    };
    InputManager.prototype.keyDownEvent = function (ev) {
        var mainTank = this._game.mainTank;
        var menu = this._game.currentMenu;
        if (menu === "GAME" /* GAME */) {
            switch (ev.code) {
                case "ArrowUp" /* arrow_up */:
                case "ArrowRight" /* arrow_right */:
                case "ArrowDown" /* arrow_down */:
                case "ArrowLeft" /* arrow_left */:
                    ev.preventDefault();
                    if (mainTank) {
                        mainTank.direction = Object(_EKeys__WEBPACK_IMPORTED_MODULE_0__["EKeysToEDirection"])(ev.code);
                    }
                    this.resetArrowInput();
                    this._keyState[ev.code] = true;
                    break;
                case "Space" /* spacebar */:
                    ev.preventDefault();
                    if (mainTank && mainTank.visible === true) {
                        mainTank.fire();
                    }
                    this._keyState[ev.code] = true;
                    break;
                case "Escape" /* esc */:
                    ev.preventDefault();
                    this._keyState[ev.code] = true;
                    if (!this._game.gameData.gameOver) {
                        if (this._game.pause) {
                            this._game.pause = false;
                        }
                        else {
                            this._game.pause = true;
                        }
                    }
                    break;
            }
        }
        else if (menu === "MAIN" /* MAIN */) {
            switch (ev.code) {
                case "ArrowUp" /* arrow_up */:
                    ev.preventDefault();
                    if (this._game.objects.length > 1) {
                        if (this._cursorIndex - 1 < 0) {
                            this._cursorIndex = 2;
                        }
                        else {
                            this._cursorIndex--;
                        }
                    }
                    console.log(this.cursorIndex);
                    break;
                case "ArrowDown" /* arrow_down */:
                    ev.preventDefault();
                    if (this._game.objects.length > 1) {
                        if (this._cursorIndex + 1 > 2) {
                            this._cursorIndex = 0;
                        }
                        else {
                            this._cursorIndex++;
                        }
                    }
                    break;
                case "Space" /* spacebar */:
                    ev.preventDefault();
                    switch (this._cursorIndex) {
                        case 0:
                            this._game.newGame(1);
                            break;
                    }
                    break;
            }
        }
    };
    InputManager.prototype.keyUpEvent = function (ev) {
        var code = ev.code;
        this._keyState[code] = false;
    };
    return InputManager;
}());
/* harmony default export */ __webpack_exports__["default"] = (InputManager);


/***/ }),

/***/ "./src/Game/Level/DefaultLevels.ts":
/*!*****************************************!*\
  !*** ./src/Game/Level/DefaultLevels.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var BLOCK_FULL = {
    bottomLeft: true,
    bottomRight: true,
    topLeft: true,
    topRight: true
};
var BLOCK_HALF_HT = {
    bottomLeft: false,
    bottomRight: false,
    topLeft: true,
    topRight: true
};
var BLOCK_HALF_HB = {
    bottomLeft: true,
    bottomRight: true,
    topLeft: false,
    topRight: false
};
var BLOCK_HALF_VL = {
    bottomLeft: true,
    bottomRight: false,
    topLeft: true,
    topRight: false
};
var BLOCK_HALF_VR = {
    bottomLeft: false,
    bottomRight: true,
    topLeft: false,
    topRight: true
};
var DefaultLevels = [
    {
        levelId: 1,
        levelName: 'LEVEL 1',
        blocks: [
            {
                position: { x: 1, y: 1 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_FULL,
            },
            {
                position: { x: 3, y: 1 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_FULL,
            },
            {
                position: { x: 5, y: 1 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_FULL,
            },
            {
                position: { x: 7, y: 1 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_FULL,
            },
            {
                position: { x: 9, y: 1 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_FULL,
            },
            {
                position: { x: 11, y: 1 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_FULL,
            },
            {
                position: { x: 1, y: 2 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_FULL,
            },
            {
                position: { x: 3, y: 2 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_FULL,
            },
            {
                position: { x: 5, y: 2 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_FULL,
            },
            {
                position: { x: 7, y: 2 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_FULL,
            },
            {
                position: { x: 9, y: 2 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_FULL,
            },
            {
                position: { x: 11, y: 2 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_FULL,
            },
            {
                position: { x: 1, y: 3 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_FULL,
            },
            {
                position: { x: 3, y: 3 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_FULL,
            },
            {
                position: { x: 5, y: 3 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_FULL,
            },
            {
                position: { x: 6, y: 3 },
                type: "IRON" /* IRON */,
                blockState: BLOCK_FULL,
            },
            {
                position: { x: 7, y: 3 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_FULL,
            },
            {
                position: { x: 9, y: 3 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_FULL,
            },
            {
                position: { x: 11, y: 3 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_FULL,
            },
            {
                position: { x: 1, y: 4 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_FULL,
            },
            {
                position: { x: 3, y: 4 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_FULL,
            },
            {
                position: { x: 5, y: 4 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_HALF_HT,
            },
            {
                position: { x: 7, y: 4 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_HALF_HT,
            },
            {
                position: { x: 9, y: 4 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_FULL,
            },
            {
                position: { x: 11, y: 4 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_FULL,
            },
            {
                position: { x: 1, y: 5 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_HALF_HT,
            },
            {
                position: { x: 3, y: 5 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_HALF_HT,
            },
            {
                position: { x: 5, y: 5 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_HALF_HB,
            },
            {
                position: { x: 7, y: 5 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_HALF_HB,
            },
            {
                position: { x: 9, y: 5 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_HALF_HT,
            },
            {
                position: { x: 11, y: 5 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_HALF_HT,
            },
            {
                position: { x: 0, y: 6 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_HALF_HB,
            },
            {
                position: { x: 2, y: 6 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_HALF_HB,
            },
            {
                position: { x: 3, y: 6 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_HALF_HB,
            },
            {
                position: { x: 5, y: 6 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_HALF_HT,
            },
            {
                position: { x: 7, y: 6 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_HALF_HT,
            },
            {
                position: { x: 9, y: 6 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_HALF_HB,
            },
            {
                position: { x: 10, y: 6 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_HALF_HB,
            },
            {
                position: { x: 12, y: 6 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_HALF_HB,
            },
            {
                position: { x: 0, y: 7 },
                type: "IRON" /* IRON */,
                blockState: BLOCK_HALF_HT,
            },
            {
                position: { x: 2, y: 7 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_HALF_HT,
            },
            {
                position: { x: 3, y: 7 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_HALF_HT,
            },
            {
                position: { x: 5, y: 7 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_HALF_HB,
            },
            {
                position: { x: 7, y: 7 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_HALF_HB,
            },
            {
                position: { x: 9, y: 7 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_HALF_HT,
            },
            {
                position: { x: 10, y: 7 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_HALF_HT,
            },
            {
                position: { x: 12, y: 7 },
                type: "IRON" /* IRON */,
                blockState: BLOCK_HALF_HT,
            },
            {
                position: { x: 1, y: 8 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_HALF_HB,
            },
            {
                position: { x: 3, y: 8 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_HALF_HB,
            },
            {
                position: { x: 5, y: 8 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_FULL,
            },
            {
                position: { x: 6, y: 8 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_FULL,
            },
            {
                position: { x: 7, y: 8 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_FULL,
            },
            {
                position: { x: 9, y: 8 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_HALF_HB,
            },
            {
                position: { x: 11, y: 8 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_HALF_HB,
            },
            {
                position: { x: 1, y: 9 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_FULL,
            },
            {
                position: { x: 3, y: 9 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_FULL,
            },
            {
                position: { x: 5, y: 9 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_FULL,
            },
            {
                position: { x: 7, y: 9 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_FULL,
            },
            {
                position: { x: 9, y: 9 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_FULL,
            },
            {
                position: { x: 11, y: 9 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_FULL,
            },
            {
                position: { x: 1, y: 10 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_FULL,
            },
            {
                position: { x: 3, y: 10 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_FULL,
            },
            {
                position: { x: 5, y: 10 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_HALF_HT,
            },
            {
                position: { x: 7, y: 10 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_HALF_HT,
            },
            {
                position: { x: 9, y: 10 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_FULL,
            },
            {
                position: { x: 11, y: 10 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_FULL,
            },
            {
                position: { x: 1, y: 11 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_FULL,
            },
            {
                position: { x: 3, y: 11 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_FULL,
            },
            {
                position: { x: 5, y: 11 },
                type: "BRICK" /* BRICK */,
                blockState: {
                    bottomLeft: false,
                    bottomRight: true,
                    topLeft: false,
                    topRight: false
                },
            },
            {
                position: { x: 6, y: 11 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_HALF_HB,
            },
            {
                position: { x: 7, y: 11 },
                type: "BRICK" /* BRICK */,
                blockState: {
                    bottomLeft: true,
                    bottomRight: false,
                    topLeft: false,
                    topRight: false
                },
            },
            {
                position: { x: 9, y: 11 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_FULL,
            },
            {
                position: { x: 11, y: 11 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_FULL,
            },
            {
                position: { x: 5, y: 12 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_HALF_VR,
            },
            {
                position: { x: 6, y: 12 },
                type: "EAGLE" /* EAGLE */,
                blockState: BLOCK_FULL,
            },
            {
                position: { x: 7, y: 12 },
                type: "BRICK" /* BRICK */,
                blockState: BLOCK_HALF_VL,
            },
        ],
        tanks: [
            {
                ARMOURED: 0,
                DEFAULT: 18,
                SPEED: 0,
                POWER: 0
            },
            {
                ARMOURED: 0,
                DEFAULT: 0,
                SPEED: 2,
                POWER: 0
            }
        ]
    }
];
/* harmony default export */ __webpack_exports__["default"] = (DefaultLevels);


/***/ }),

/***/ "./src/Game/Object/AnimationObject.ts":
/*!********************************************!*\
  !*** ./src/Game/Object/AnimationObject.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameObject */ "./src/Game/Object/GameObject.ts");
/* harmony import */ var _Utils_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utils/Utils */ "./src/Utils/Utils.ts");
/* harmony import */ var _Render_Sprite_SpriteDefinition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Render/Sprite/SpriteDefinition */ "./src/Render/Sprite/SpriteDefinition.ts");
/* harmony import */ var _Render_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Render/Sprite/SpriteData */ "./src/Render/Sprite/SpriteData.ts");
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




var AnimationObject = /** @class */ (function (_super) {
    __extends(AnimationObject, _super);
    function AnimationObject(game, id, animationType, animationPoint, duration, frameRate, loop, callback) {
        if (loop === void 0) { loop = false; }
        var _this = this;
        if (id == null) {
            id = _Utils_Utils__WEBPACK_IMPORTED_MODULE_1__["Guid"].newGuid();
        }
        _this = _super.call(this, game, "ANIMATION" /* ANIMATION */, animationPoint, id) || this;
        _this.animationType = animationType;
        _this._animationPoint = animationPoint;
        _this._spritePosition = 0;
        _this._currentTime = performance.now();
        _this._expireTime = _this._currentTime + duration;
        _this._frameCount = _Render_Sprite_SpriteDefinition__WEBPACK_IMPORTED_MODULE_2__["default"].ANIMATION[_this.animationType].length;
        _this._frameRate = frameRate;
        _this._loop = loop;
        _this._callback = callback;
        _this.updatePosition();
        return _this;
    }
    Object.defineProperty(AnimationObject.prototype, "animationPoint", {
        //#region getter, setter
        get: function () {
            return this._animationPoint;
        },
        set: function (animationPoint) {
            this._animationPoint = animationPoint;
            this.updatePosition();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AnimationObject.prototype, "expireTime", {
        get: function () {
            return this._expireTime;
        },
        enumerable: false,
        configurable: true
    });
    //#endregion
    //#region public methods
    // ignore hit event
    AnimationObject.prototype.hit = function () { };
    AnimationObject.prototype.nextSpritePosition = function () {
        if (this._frameCount < 2) {
            return;
        }
        this._game.log("[" + this.spritePosition + " / " + (this._frameCount - 1) + "]" + (performance.now() - this._currentTime) + " >= " + this._frameRate);
        if (performance.now() - this._currentTime >= this._frameRate) {
            this._currentTime = performance.now();
            if (this._spritePosition + 1 < this._frameCount) {
                this._spritePosition++;
            }
            else if (this._loop) {
                this._spritePosition = 0;
            }
            this.updatePosition();
        }
        return this._spritePosition;
    };
    AnimationObject.prototype.expire = function (remove) {
        if (remove === void 0) { remove = true; }
        this._game.log("ANIMATION " + this.id + " HAS BEEN EXPIRED. (" + performance.now + ")");
        if (remove) {
            this.remove();
        }
        if (this._callback) {
            this._callback(this);
        }
    };
    //#endregion
    AnimationObject.prototype.updatePosition = function () {
        var spriteData = Object(_Render_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_3__["getSpriteSize"])(this);
        this._positon = {
            x: this._animationPoint.x - spriteData.width / 2,
            y: this._animationPoint.y - spriteData.height / 2
        };
    };
    return AnimationObject;
}(_GameObject__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (AnimationObject);


/***/ }),

/***/ "./src/Game/Object/BlockObject.ts":
/*!****************************************!*\
  !*** ./src/Game/Object/BlockObject.ts ***!
  \****************************************/
/*! exports provided: BlockState2x2To4x4, BlockState4x4To2x2, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockState2x2To4x4", function() { return BlockState2x2To4x4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockState4x4To2x2", function() { return BlockState4x4To2x2; });
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameObject */ "./src/Game/Object/GameObject.ts");
/* harmony import */ var _Utils_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utils/Utils */ "./src/Utils/Utils.ts");
/* harmony import */ var _BulletObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BulletObject */ "./src/Game/Object/BulletObject.ts");
/* harmony import */ var _Render_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Render/Sprite/SpriteData */ "./src/Render/Sprite/SpriteData.ts");
/* harmony import */ var _Utils_CollisionTest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Utils/CollisionTest */ "./src/Utils/CollisionTest.ts");
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





function BlockState2x2To4x4(x2) {
    var x4 = [
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false]
    ];
    x4[0][0] = x2.topLeft;
    x4[0][1] = x2.topLeft;
    x4[1][0] = x2.topLeft;
    x4[1][1] = x2.topLeft;
    x4[0][2] = x2.topRight;
    x4[0][3] = x2.topRight;
    x4[1][2] = x2.topRight;
    x4[1][3] = x2.topRight;
    x4[2][0] = x2.bottomLeft;
    x4[2][1] = x2.bottomLeft;
    x4[3][0] = x2.bottomLeft;
    x4[3][1] = x2.bottomLeft;
    x4[2][2] = x2.bottomRight;
    x4[2][3] = x2.bottomRight;
    x4[3][2] = x2.bottomRight;
    x4[3][3] = x2.bottomRight;
    return x4;
}
function BlockState4x4To2x2(x4) {
    var x2 = {
        topLeft: false,
        topRight: false,
        bottomLeft: false,
        bottomRight: false
    };
    if (x4[0][0] || x4[0][1] || x4[1][0] || x4[1][1]) {
        x2.topLeft = true;
    }
    if (x4[0][2] || x4[0][3] || x4[1][2] || x4[1][3]) {
        x2.topRight = true;
    }
    if (x4[2][0] || x4[2][1] || x4[3][0] || x4[3][1]) {
        x2.bottomLeft = true;
    }
    if (x4[2][2] || x4[2][3] || x4[3][2] || x4[3][3]) {
        x2.bottomRight = true;
    }
    return x2;
}
var BlockObject = /** @class */ (function (_super) {
    __extends(BlockObject, _super);
    function BlockObject(game, blockType, position, blockState2x2) {
        var _this = _super.call(this, game, "BLOCK" /* BLOCK */, position, _Utils_Utils__WEBPACK_IMPORTED_MODULE_1__["Guid"].newGuid()) || this;
        _this.blockType = blockType;
        _this._blockState = BlockState2x2To4x4(blockState2x2);
        return _this;
    }
    Object.defineProperty(BlockObject.prototype, "blockState4x4", {
        //#region getter setter
        get: function () {
            return this._blockState;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlockObject.prototype, "blockState2x2", {
        get: function () {
            return BlockState4x4To2x2(this._blockState);
        },
        enumerable: false,
        configurable: true
    });
    //#endregion
    BlockObject.prototype.findCellPosition = function (row, column) {
        var blockSize = Object(_Render_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_3__["getSpriteSize"])(this);
        return {
            x: this.position.x + (blockSize.width / 4) * column,
            y: this.position.y + (blockSize.width / 4) * row
        };
    };
    BlockObject.prototype.hit = function (eventOrigin) {
        var _this = this;
        if (!(eventOrigin instanceof _BulletObject__WEBPACK_IMPORTED_MODULE_2__["default"])) {
            return;
        }
        if (this.blockType === "EAGLE" /* EAGLE */) {
            this._spritePosition = 1;
            this._game.gameover();
            return;
        }
        var bullet = eventOrigin;
        if (bullet.parent.tankLevel < 3 && this.blockType === "IRON" /* IRON */) {
            return;
        }
        var blockSize = Object(_Render_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_3__["getSpriteSize"])(this);
        var collisionCells = Object(_Utils_CollisionTest__WEBPACK_IMPORTED_MODULE_4__["BlockCollisionTest"])(this, bullet);
        var xPos = Object(_Utils_Utils__WEBPACK_IMPORTED_MODULE_1__["removeDuplicate"])(collisionCells.map(function (point) {
            return (point.x - _this.position.x) / (blockSize.width / 4);
        }));
        var yPos = Object(_Utils_Utils__WEBPACK_IMPORTED_MODULE_1__["removeDuplicate"])(collisionCells.map(function (point) {
            return (point.y - _this.position.y) / (blockSize.height / 4);
        }));
        var b44 = this.blockState4x4;
        if (bullet.direction === "up" /* up */ || bullet.direction === "down" /* down */) {
            if (xPos.includes(0) || xPos.includes(1)) {
                b44[yPos[0]][0] = false;
                b44[yPos[0]][1] = false;
                if (yPos[0] + 1 < 4 && bullet.parent.tankLevel > 1) {
                    b44[yPos[0] + 1][0] = false;
                    b44[yPos[0] + 1][1] = false;
                }
            }
            if (xPos.includes(2) || xPos.includes(3)) {
                b44[yPos[0]][2] = false;
                b44[yPos[0]][3] = false;
                if (yPos[0] + 1 < 4 && bullet.parent.tankLevel > 1) {
                    b44[yPos[0] + 1][2] = false;
                    b44[yPos[0] + 1][3] = false;
                }
            }
        }
        else if (bullet.direction === "left" /* left */ || bullet.direction === "right" /* right */) {
            if (yPos.includes(0) || yPos.includes(1)) {
                b44[0][xPos[0]] = false;
                b44[1][xPos[0]] = false;
                if (xPos[0] + 1 < 4 && bullet.parent.tankLevel > 1) {
                    b44[0][xPos[0] + 1] = false;
                    b44[1][xPos[0] + 1] = false;
                }
            }
            if (yPos.includes(2) || yPos.includes(3)) {
                b44[2][xPos[0]] = false;
                b44[3][xPos[0]] = false;
                if (xPos[0] + 1 < 4 && bullet.parent.tankLevel > 1) {
                    b44[2][xPos[0] + 1] = false;
                    b44[3][xPos[0] + 1] = false;
                }
            }
        }
        var available = false;
        b44.forEach(function (row) {
            row.forEach(function (cell) {
                if (cell === true) {
                    available = cell;
                }
            });
        });
        if (available === false) {
            this.remove();
        }
    };
    return BlockObject;
}(_GameObject__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (BlockObject);


/***/ }),

/***/ "./src/Game/Object/BulletObject.ts":
/*!*****************************************!*\
  !*** ./src/Game/Object/BulletObject.ts ***!
  \*****************************************/
/*! exports provided: BULLET_SLOW, BULLET_FAST, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BULLET_SLOW", function() { return BULLET_SLOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BULLET_FAST", function() { return BULLET_FAST; });
/* harmony import */ var _MovingObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MovingObject */ "./src/Game/Object/MovingObject.ts");
/* harmony import */ var _Render_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Render/Sprite/SpriteData */ "./src/Render/Sprite/SpriteData.ts");
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


var BULLET_SLOW = 4;
var BULLET_FAST = 6;
var BulletObject = /** @class */ (function (_super) {
    __extends(BulletObject, _super);
    function BulletObject(game, parent, position, direction, speed, id) {
        var _this = _super.call(this, game, "BULLET" /* BULLET */, position, direction, speed, id) || this;
        _this._parent = parent;
        return _this;
    }
    Object.defineProperty(BulletObject.prototype, "parent", {
        get: function () {
            return this._parent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BulletObject.prototype, "parentId", {
        get: function () {
            return this._parent.id;
        },
        enumerable: false,
        configurable: true
    });
    BulletObject.prototype.move = function () {
        var _this = this;
        // let original = deepClone(this.position) as Point;
        Object(_MovingObject__WEBPACK_IMPORTED_MODULE_0__["calculateMove"])(this.position, this._direction, this._speed);
        this._game.log("BULLET [" + this.id + "] MOVED -> [x:" + this.position.x + "], y:[" + this.position.y + "]");
        var test_visible = this._game.testVisibility(this);
        var test_collision = this._game.collisionTest(this);
        if (test_visible == false && test_collision.length == 0) {
            this.fitToBorder();
            this.explode(true);
        }
        else if (test_collision.length > 0) {
            var exploded_1 = true;
            test_collision.forEach(function (object) {
                if (object.objectType === "BULLET" /* BULLET */) {
                    exploded_1 = false;
                }
                if (object.objectType === "TANK" /* TANK */ && object.isInvincible) {
                    exploded_1 = false;
                }
                _this.fitToObject(object, -1);
                object.hit(_this);
            });
            this.explode(exploded_1);
        }
    };
    BulletObject.prototype.hit = function () {
        this.explode(false);
    };
    BulletObject.prototype.explode = function (animation) {
        var animationPosition;
        var size = Object(_Render_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_1__["getSpriteSize"])(this);
        if (this.direction === "up" /* up */ || this.direction === "down" /* down */) {
            animationPosition = {
                x: this.position.x + size.width / 2,
                y: this.position.y
            };
        }
        else {
            animationPosition = {
                x: this.position.x,
                y: this.position.y + size.height / 2
            };
        }
        if (animation) {
            this._game.startAnimation(this, "EXPLOSION_SMALL" /* EXPLOSION_SMALL */);
            this.remove();
        }
        this._game.log("BULLET [" + this.id + "] EXPLODED.");
    };
    BulletObject.prototype.remove = function () {
        _super.prototype.remove.call(this);
        this._parent.removeBullet(this.id);
        this._game.log("BULLET [" + this.id + "] HAS BEEN REMOVED.");
    };
    return BulletObject;
}(_MovingObject__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (BulletObject);


/***/ }),

/***/ "./src/Game/Object/Enum/EAnimationType.ts":
/*!************************************************!*\
  !*** ./src/Game/Object/Enum/EAnimationType.ts ***!
  \************************************************/
/*! exports provided: ScoreToAnimation, AnimationDefaults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreToAnimation", function() { return ScoreToAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationDefaults", function() { return AnimationDefaults; });
function ScoreToAnimation(score) {
    switch (Math.floor(score / 100)) {
        case 1:
            return "SCORE_100" /* SCORE_100 */;
        case 2:
            return "SCORE_200" /* SCORE_200 */;
        case 3:
            return "SCORE_300" /* SCORE_300 */;
        case 4:
            return "SCORE_400" /* SCORE_400 */;
        case 5:
            return "SCORE_500" /* SCORE_500 */;
    }
}
;
// TODO Update defaults
var AnimationDefaults = {
    EXPLOSION_SMALL: {
        duration: 200,
        frameRate: 200 / 4,
        loop: false
    },
    EXPLOSION_LARGE: {
        duration: 150,
        frameRate: 150 / 3,
        loop: false
    },
    INVINCIBLE: {
        duration: 3000,
        frameRate: 25,
        loop: true
    },
    SPAWN: {
        duration: 1000,
        frameRate: 1000 / 13,
        loop: true
    },
    SCORE_100: {
        duration: 1000,
        frameRate: 0,
        loop: false
    },
    SCORE_200: {
        duration: 1000,
        frameRate: 0,
        loop: false
    },
    SCORE_300: {
        duration: 1000,
        frameRate: 0,
        loop: false
    },
    SCORE_400: {
        duration: 1000,
        frameRate: 0,
        loop: false
    },
    SCORE_500: {
        duration: 1000,
        frameRate: 0,
        loop: false
    },
    GAMEOVER: {
        duration: 4000,
        frameRate: 100,
        loop: true
    },
    PAUSE: {
        duration: -1,
        frameRate: 100,
        loop: true
    },
    TITLE: {
        duration: 4000,
        frameRate: 100,
        loop: true
    },
    CURSOR: {
        duration: 50,
        frameRate: 25,
        loop: true
    }
};


/***/ }),

/***/ "./src/Game/Object/Enum/ETankType.ts":
/*!*******************************************!*\
  !*** ./src/Game/Object/Enum/ETankType.ts ***!
  \*******************************************/
/*! exports provided: EnemyScoreMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnemyScoreMap", function() { return EnemyScoreMap; });
var EnemyScoreMap = new Map();
EnemyScoreMap.set("DEFAULT" /* DEFAULT */, 100);
EnemyScoreMap.set("SPEED" /* SPEED */, 200);
EnemyScoreMap.set("POWER" /* POWER */, 300);
EnemyScoreMap.set("ARMOURED" /* ARMOURED */, 400);



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
    function GameObject(game, objectType, position, id, visible) {
        if (visible === void 0) { visible = true; }
        this._game = game;
        this.visible = visible;
        this.objectType = objectType;
        this._spritePosition = 0;
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
    Object.defineProperty(GameObject.prototype, "spritePosition", {
        get: function () {
            return this._spritePosition;
        },
        enumerable: false,
        configurable: true
    });
    GameObject.prototype.remove = function () {
        this._game.removeObject(this);
    };
    GameObject.prototype.nextSpritePosition = function () {
        this._spritePosition = this._spritePosition + 1 <= 1 ? this._spritePosition + 1 : 0;
        return this._spritePosition;
    };
    return GameObject;
}());
/* harmony default export */ __webpack_exports__["default"] = (GameObject);


/***/ }),

/***/ "./src/Game/Object/MovingObject.ts":
/*!*****************************************!*\
  !*** ./src/Game/Object/MovingObject.ts ***!
  \*****************************************/
/*! exports provided: default, calculateMove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateMove", function() { return calculateMove; });
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameObject */ "./src/Game/Object/GameObject.ts");
/* harmony import */ var _Render_Renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Render/Renderer */ "./src/Render/Renderer.ts");
/* harmony import */ var _Render_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Render/Sprite/SpriteData */ "./src/Render/Sprite/SpriteData.ts");
/* harmony import */ var _Utils_CollisionTest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utils/CollisionTest */ "./src/Utils/CollisionTest.ts");
/* harmony import */ var _Utils_Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Utils/Utils */ "./src/Utils/Utils.ts");
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
    MovingObject.prototype.fitToBorder = function () {
        var frame = _Render_Renderer__WEBPACK_IMPORTED_MODULE_1__["DRAWING_CONST"].sizes.frame;
        var screen = _Render_Renderer__WEBPACK_IMPORTED_MODULE_1__["DRAWING_CONST"].sizes.screen;
        var size = Object(_Render_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_2__["getSpriteSize"])(this);
        switch (this.direction) {
            case "left" /* left */:
                this.position.x = frame.left;
                break;
            case "up" /* up */:
                this.position.y = frame.top;
                break;
            case "down" /* down */:
                this.position.y = screen.height + frame.top - size.height;
                break;
            case "right" /* right */:
                this.position.x = screen.width + frame.left - size.width;
                break;
        }
    };
    MovingObject.prototype.fitToObject = function (object, gap) {
        if (gap === void 0) { gap = 0; }
        var size = Object(_Render_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_2__["getSpriteSize"])(this);
        var tankSize = Object(_Render_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_2__["getObjectSize"])(this.objectType);
        var objectSize = Object(_Render_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_2__["getSpriteSize"])(object);
        if (object.objectType === "BLOCK" /* BLOCK */) {
            var block = object;
            var cellSize = {
                width: objectSize.width / 4,
                height: objectSize.height / 4
            };
            var adjustGap = cellSize.width * .8;
            var collision_cells = Object(_Utils_CollisionTest__WEBPACK_IMPORTED_MODULE_3__["BlockCollisionTest"])(block, this);
            var xPos = collision_cells.map(function (point) { return point.x; });
            var yPos = collision_cells.map(function (point) { return point.y; });
            switch (this.direction) {
                case "left" /* left */:
                    if (xPos.length > 0) {
                        if (yPos.length > 0) {
                            if (this.position.y + tankSize.height - Object(_Utils_Utils__WEBPACK_IMPORTED_MODULE_4__["min"])(yPos) <= adjustGap) {
                                this.position.y = Object(_Utils_Utils__WEBPACK_IMPORTED_MODULE_4__["min"])(yPos) - tankSize.height;
                            }
                            else if (Object(_Utils_Utils__WEBPACK_IMPORTED_MODULE_4__["max"])(yPos) + cellSize.height - this.position.y <= adjustGap) {
                                this.position.y = Object(_Utils_Utils__WEBPACK_IMPORTED_MODULE_4__["max"])(yPos) + cellSize.height;
                            }
                        }
                        this.position.x = Object(_Utils_Utils__WEBPACK_IMPORTED_MODULE_4__["max"])(xPos) + objectSize.width / 4 + gap;
                    }
                    break;
                case "up" /* up */:
                    if (yPos.length > 0) {
                        if (xPos.length > 0) {
                            if (this.position.x + tankSize.width - Object(_Utils_Utils__WEBPACK_IMPORTED_MODULE_4__["min"])(xPos) <= adjustGap) {
                                this.position.x = object.position.x - tankSize.width;
                            }
                            else if (Object(_Utils_Utils__WEBPACK_IMPORTED_MODULE_4__["max"])(xPos) + cellSize.width - this.position.x <= adjustGap) {
                                this.position.x = Object(_Utils_Utils__WEBPACK_IMPORTED_MODULE_4__["max"])(xPos) + cellSize.width;
                            }
                        }
                        this.position.y = Object(_Utils_Utils__WEBPACK_IMPORTED_MODULE_4__["max"])(yPos) + cellSize.height + gap;
                    }
                    break;
                case "down" /* down */:
                    if (yPos.length > 0) {
                        if (xPos.length > 0) {
                            if (this.position.x + tankSize.width - Object(_Utils_Utils__WEBPACK_IMPORTED_MODULE_4__["min"])(xPos) <= adjustGap) {
                                this.position.x = Object(_Utils_Utils__WEBPACK_IMPORTED_MODULE_4__["min"])(xPos) - tankSize.width;
                            }
                            else if (Object(_Utils_Utils__WEBPACK_IMPORTED_MODULE_4__["max"])(xPos) + cellSize.width - this.position.x <= adjustGap) {
                                this.position.x = Object(_Utils_Utils__WEBPACK_IMPORTED_MODULE_4__["max"])(xPos) + cellSize.width;
                            }
                        }
                        this.position.y = Object(_Utils_Utils__WEBPACK_IMPORTED_MODULE_4__["min"])(yPos) - size.height - gap;
                    }
                    break;
                case "right" /* right */:
                    if (xPos.length > 0) {
                        if (yPos.length > 0) {
                            if (this.position.y + tankSize.height - Object(_Utils_Utils__WEBPACK_IMPORTED_MODULE_4__["min"])(yPos) <= adjustGap) {
                                this.position.y = Object(_Utils_Utils__WEBPACK_IMPORTED_MODULE_4__["min"])(yPos) - tankSize.height;
                            }
                            else if (Object(_Utils_Utils__WEBPACK_IMPORTED_MODULE_4__["max"])(yPos) + cellSize.height - this.position.y <= adjustGap) {
                                this.position.y = Object(_Utils_Utils__WEBPACK_IMPORTED_MODULE_4__["max"])(yPos) + cellSize.height;
                            }
                        }
                        this.position.x = Object(_Utils_Utils__WEBPACK_IMPORTED_MODULE_4__["min"])(xPos) - size.width - gap;
                    }
                    break;
            }
        }
        else {
            switch (this.direction) {
                case "left" /* left */:
                    this.position.x = object.position.x + objectSize.width;
                    break;
                case "up" /* up */:
                    this.position.y = object.position.y + objectSize.height;
                    break;
                case "down" /* down */:
                    this.position.y = object.position.y - size.height;
                    break;
                case "right" /* right */:
                    this.position.x = object.position.x - size.width;
                    break;
            }
        }
    };
    return MovingObject;
}(_GameObject__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (MovingObject);
function calculateMove(position, direction, speed) {
    switch (direction) {
        case "up" /* up */:
            position.y -= speed;
            break;
        case "right" /* right */:
            position.x += speed;
            break;
        case "down" /* down */:
            position.y += speed;
            break;
        case "left" /* left */:
            position.x -= speed;
            break;
    }
}


/***/ }),

/***/ "./src/Game/Object/TankAIObject.ts":
/*!*****************************************!*\
  !*** ./src/Game/Object/TankAIObject.ts ***!
  \*****************************************/
/*! exports provided: ColorSequenceDefinitions, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorSequenceDefinitions", function() { return ColorSequenceDefinitions; });
/* harmony import */ var _TankObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TankObject */ "./src/Game/Object/TankObject.ts");
/* harmony import */ var _Enum_ETankType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enum/ETankType */ "./src/Game/Object/Enum/ETankType.ts");
/* harmony import */ var _Enum_EAnimationType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Enum/EAnimationType */ "./src/Game/Object/Enum/EAnimationType.ts");
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



var ColorSequenceDefinitions = {
    ARMOURED: [
        {
            sequence: ["WHITE" /* WHITE */],
            delay: 25,
        },
        {
            sequence: ["GREEN" /* GREEN */, "YELLOW" /* YELLOW */],
            delay: 25,
        },
        {
            sequence: ["GREEN" /* GREEN */, "WHITE" /* WHITE */],
            delay: 25,
        },
        {
            sequence: ["YELLOW" /* YELLOW */, "WHITE" /* WHITE */],
            delay: 25,
        },
    ],
    ITEM: [
        {
            sequence: ["WHITE" /* WHITE */, "MAGENTA" /* MAGENTA */],
            delay: 100,
        }
    ]
};
var TankAIOBject = /** @class */ (function (_super) {
    __extends(TankAIOBject, _super);
    function TankAIOBject(game, enemyType, hasItem, position, direction) {
        var _this = this;
        var level;
        var hp = 1;
        switch (enemyType) {
            case "DEFAULT" /* DEFAULT */:
                level = 0;
                break;
            case "SPEED" /* SPEED */:
                level = 1;
                break;
            case "POWER" /* POWER */:
                level = 2;
                break;
            case "ARMOURED" /* ARMOURED */:
                level = 3;
                hp = 4;
                break;
        }
        _this = _super.call(this, game, "ENEMY_TANK" /* ENEMY_TANK */, position, direction, "WHITE" /* WHITE */, level) || this;
        _this._enemyType = enemyType;
        _this._hasItem = hasItem;
        _this._colorIndex = 0;
        _this._hp = hp;
        return _this;
    }
    TankAIOBject.prototype.nextColorIndex = function () {
        var definition = this.getColorDefinition();
        var maxIndex = definition.sequence.length;
        if (this._colorIndex + 1 > maxIndex) {
            this._colorIndex = 0;
        }
        else {
            this._colorIndex++;
        }
        return this._colorIndex;
    };
    TankAIOBject.prototype.getColorDefinition = function () {
        var key;
        var index;
        if (this._hasItem === true) {
            key = 'ITEM';
            index = 0;
        }
        else if (this._enemyType === "ARMOURED" /* ARMOURED */) {
            key = this._enemyType.toString();
            index = this._hp - 1;
        }
        return ColorSequenceDefinitions[key][0];
    };
    TankAIOBject.prototype.hit = function () {
        this._hp -= 1;
        if (this._hp <= 0) {
            this.destroy();
        }
    };
    TankAIOBject.prototype.destroy = function () {
        var _this = this;
        this.remove();
        this._game.startAnimation(this, "EXPLOSION_SMALL" /* EXPLOSION_SMALL */, null, function (animation) {
            _this._game.startAnimation(animation.animationPoint, "EXPLOSION_LARGE" /* EXPLOSION_LARGE */, null, function () {
                var scoreAnimation = Object(_Enum_EAnimationType__WEBPACK_IMPORTED_MODULE_2__["ScoreToAnimation"])(_Enum_ETankType__WEBPACK_IMPORTED_MODULE_1__["EnemyScoreMap"].get(_this._enemyType));
                _this._game.startAnimation(animation.animationPoint, scoreAnimation, null, function () {
                    _this._game.spawnTank(_this.tankType);
                });
            });
        });
    };
    return TankAIOBject;
}(_TankObject__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (TankAIOBject);


/***/ }),

/***/ "./src/Game/Object/TankObject.ts":
/*!***************************************!*\
  !*** ./src/Game/Object/TankObject.ts ***!
  \***************************************/
/*! exports provided: TANK_SPEED, TANK_FIRE_DELAY, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TANK_SPEED", function() { return TANK_SPEED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TANK_FIRE_DELAY", function() { return TANK_FIRE_DELAY; });
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Game */ "./src/Game/Game.ts");
/* harmony import */ var _MovingObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MovingObject */ "./src/Game/Object/MovingObject.ts");
/* harmony import */ var _BulletObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BulletObject */ "./src/Game/Object/BulletObject.ts");
/* harmony import */ var _Render_Sprite_SpriteDefinition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Render/Sprite/SpriteDefinition */ "./src/Render/Sprite/SpriteDefinition.ts");
/* harmony import */ var _Utils_Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Utils/Utils */ "./src/Utils/Utils.ts");
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
var TANK_FIRE_DELAY = 100;
var TankObject = /** @class */ (function (_super) {
    __extends(TankObject, _super);
    //#region constructor
    function TankObject(game, tankType, position, direction, tankColor, tankLevel, id) {
        if (tankLevel === void 0) { tankLevel = 1; }
        var _this = _super.call(this, game, "TANK" /* TANK */, position, direction, TANK_SPEED, id != null ? id : _Utils_Utils__WEBPACK_IMPORTED_MODULE_4__["Guid"].newGuid()) || this;
        _this._isInvincible = false;
        _this._tankType = tankType;
        _this._tankColor = tankColor;
        _this._tankLevel = tankLevel;
        _this._bullets = [];
        _this.visible = false;
        _this._lastFired = 0;
        _this.spawn();
        return _this;
    }
    Object.defineProperty(TankObject.prototype, "tankColor", {
        //#endregion
        //#region getter, setter
        get: function () {
            return this._tankColor;
        },
        // TODO: REMOVE WHEN DEPLOY
        set: function (color) {
            this._tankColor = color;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TankObject.prototype, "tankType", {
        get: function () {
            return this._tankType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TankObject.prototype, "isInvincible", {
        get: function () {
            return this._isInvincible;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TankObject.prototype, "tankLevel", {
        get: function () {
            return this._tankLevel;
        },
        // TODO: REMOVE WHEN DEPLOY
        set: function (level) {
            this._tankLevel = level;
        },
        enumerable: false,
        configurable: true
    });
    //#endregion
    //#region implements of MovingObject	
    TankObject.prototype.move = function () {
        var _this = this;
        Object(_MovingObject__WEBPACK_IMPORTED_MODULE_1__["calculateMove"])(this.position, this._direction, this._speed);
        this._game.log("TANK [" + this.id + "] MOVED -> [ x: " + this.position.x + ", y: " + this.position.y + " ]");
        // test movement is valid
        var test_visible = this._game.testVisibility(this);
        var test_collision = this._game.collisionTest(this);
        if (test_visible == false && test_collision.length == 0) {
            this.fitToBorder();
        }
        else if (test_collision.length > 0) {
            test_collision.forEach(function (object) {
                if (object.objectType === "ITEM" /* ITEM */) {
                    object.hit(_this);
                }
                else {
                    _this.fitToObject(object);
                    _this._game.log("TANK [" + _this.id + "] MOVES -> BLOCKED!! [ x: " + _this.position.x + ", y: " + _this.position.y + " ]");
                }
            });
        }
        this.nextSpritePosition();
    };
    TankObject.prototype.hit = function () {
        if (this._isInvincible) {
            return;
        }
        this.destroy();
    };
    //#endregion
    //#region public methods
    TankObject.prototype.fire = function () {
        var now = performance.now();
        if (now - this._lastFired >= TANK_FIRE_DELAY) {
            this._lastFired = now;
            this.createBullet();
        }
    };
    TankObject.prototype.spawn = function () {
        var _this = this;
        this._game.startAnimation(this, "SPAWN" /* SPAWN */, null, function () {
            _this.visible = true;
            if (_this == _this._game.mainTank) {
                _this.invincible();
            }
        });
    };
    TankObject.prototype.invincible = function () {
        var _this = this;
        this._isInvincible = true;
        this._game.startAnimation(this, "INVINCIBLE" /* INVINCIBLE */, null, function (anim) {
            _this._isInvincible = false;
        });
    };
    TankObject.prototype.destroy = function () {
        var _this = this;
        this.remove();
        this._game.startAnimation(this, "EXPLOSION_SMALL" /* EXPLOSION_SMALL */, null, function (animation) {
            _this._game.startAnimation(animation.animationPoint, "EXPLOSION_LARGE" /* EXPLOSION_LARGE */, null, function () {
                if (_this.id === _Game__WEBPACK_IMPORTED_MODULE_0__["MAIN_TANK_ID"]) {
                    _this._game.spawnTank(_this.tankType, false, 0);
                }
                else {
                    _this._game.spawnTank(_this.tankType, false, 1);
                }
            });
        });
    };
    TankObject.prototype.levelup = function () {
        if (this.tankLevel < 3) {
            this.tankLevel++;
        }
    };
    TankObject.prototype.createBullet = function () {
        if (this.tankLevel < 2 && this._bullets.length >= 1) {
            return;
        }
        else if (this.tankLevel < 4 && this._bullets.length >= 2) {
            return;
        }
        var position;
        var tankSprite = _Render_Sprite_SpriteDefinition__WEBPACK_IMPORTED_MODULE_3__["default"].TANK[this.tankColor][this.tankLevel][this.direction][this.spritePosition];
        var bulletSprite = _Render_Sprite_SpriteDefinition__WEBPACK_IMPORTED_MODULE_3__["default"].BULLET[this.direction];
        switch (this.direction) {
            case "up" /* up */:
                position = {
                    x: this.position.x + this.getMiddle(tankSprite, bulletSprite, this.direction),
                    y: this.position.y
                };
                break;
            case "right" /* right */:
                position = {
                    x: this.position.x + tankSprite.size.width,
                    y: this.position.y + this.getMiddle(tankSprite, bulletSprite, this.direction)
                };
                break;
            case "down" /* down */:
                position = {
                    x: this.position.x + this.getMiddle(tankSprite, bulletSprite, this.direction),
                    y: this.position.y + tankSprite.size.height
                };
                break;
            case "left" /* left */:
                position = {
                    x: this.position.x,
                    y: this.position.y + this.getMiddle(tankSprite, bulletSprite, this.direction)
                };
                break;
        }
        var bulletSpeed;
        if (this.tankLevel == 0) {
            bulletSpeed = _BulletObject__WEBPACK_IMPORTED_MODULE_2__["BULLET_SLOW"];
        }
        else if (this.tankLevel < 4) {
            bulletSpeed = _BulletObject__WEBPACK_IMPORTED_MODULE_2__["BULLET_FAST"];
        }
        var bullet = new _BulletObject__WEBPACK_IMPORTED_MODULE_2__["default"](this._game, this, position, this.direction, bulletSpeed, _Utils_Utils__WEBPACK_IMPORTED_MODULE_4__["Guid"].newGuid());
        this._game.insertObject(bullet);
        this._bullets.push(bullet.id);
    };
    TankObject.prototype.removeBullet = function (id) {
        var found = this._bullets.find(function (bullet) { return bullet === id; });
        var idx = this._bullets.indexOf(found);
        if (idx > -1) {
            this._bullets.splice(idx, 1);
        }
    };
    //#endregion
    TankObject.prototype.getMiddle = function (parent, child, direction) {
        if (direction === "up" /* up */ || direction === "down" /* down */) {
            return parent.size.width / 2 - child.size.width / 2;
        }
        else {
            return parent.size.height / 2 - child.size.height / 2;
        }
    };
    return TankObject;
}(_MovingObject__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (TankObject);


/***/ }),

/***/ "./src/Render/Renderer.ts":
/*!********************************!*\
  !*** ./src/Render/Renderer.ts ***!
  \********************************/
/*! exports provided: MAX_FPS, MENU_MAX_FPS, DRAWING_CONST, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_FPS", function() { return MAX_FPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_MAX_FPS", function() { return MENU_MAX_FPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DRAWING_CONST", function() { return DRAWING_CONST; });
/* harmony import */ var _Sprite_SpriteDefinition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite/SpriteDefinition */ "./src/Render/Sprite/SpriteDefinition.ts");
/* harmony import */ var _Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sprite/SpriteData */ "./src/Render/Sprite/SpriteData.ts");
/* harmony import */ var _Utils_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utils/Utils */ "./src/Utils/Utils.ts");



var MAX_FPS = 60;
var MENU_MAX_FPS = 30;
var DRAWING_CONST = {
    colors: {
        background: "#000000",
        background_frame: "#636362",
    },
    sizes: {
        frame: {
            left: 32,
            top: 32,
            bottom: 32,
            right: _Sprite_SpriteDefinition__WEBPACK_IMPORTED_MODULE_0__["default"].SYSTEM.FRAME.size.width
        },
        screen: {
            width: 32 * 13,
            height: 32 * 13
        }
    },
    positions: {
        main: {
            cursor_start: 265
        }
    },
    debug: {
        font: {
            size: 12,
            font: 'san-serif'
        }
    }
};
var Renderer = /** @class */ (function () {
    function Renderer(game, canvas, sprite_main_src, sprite_title_src) {
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
        this.loadSprite(sprite_main_src, sprite_title_src);
    }
    Renderer.prototype.loadSprite = function (mainSrc, titleSrc) {
        var _this = this;
        this._mainSprite = new Image();
        this._titleSprite = new Image();
        this._mainSprite.onload = function () {
            _this._titleSprite.src = titleSrc;
        };
        this._titleSprite.onload = function () {
            _this.render();
        };
        this._mainSprite.src = mainSrc;
    };
    Renderer.prototype.initScreen = function () {
        var sizes = DRAWING_CONST.sizes;
        this._canvas.width = sizes.frame.left + sizes.frame.right + sizes.screen.width;
        this._canvas.height = sizes.frame.top + sizes.frame.bottom + sizes.screen.height;
    };
    Renderer.prototype.render = function () {
        var _this = this;
        requestAnimationFrame(function () { _this.render(); });
        var fps = this._fps;
        fps.now = performance.now();
        fps.elapsed = fps.now - fps.then;
        if (fps.elapsed > fps.fpsInterval) {
            fps.then = fps.now - (fps.elapsed % fps.fpsInterval);
            // start drawing
            // get context
            var ctx = this._canvas.getContext('2d');
            ctx.save();
            // clear screen
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            // draw backgrounds
            this.drawBackground(ctx);
            switch (this._game.currentMenu) {
                case "MAIN" /* MAIN */:
                    this.renderMain(ctx);
                    break;
                case "GAME" /* GAME */:
                    this.renderGame(ctx);
                    break;
                case "CONSTRUCT" /* CONSTRUCT */:
                    break;
            }
            // draw debug counter
            if (this._game.debug) {
                this.drawDebugCounter(ctx);
            }
        }
    };
    /**
     * render main screen
     * @param ctx context
     */
    Renderer.prototype.renderMain = function (ctx) {
        this.processMain();
        this.drawObjects(ctx, this._game.objects);
    };
    /**
     * process main screen actions
     */
    Renderer.prototype.processMain = function () {
        var _this = this;
        var objects = this._game.objects;
        if (objects != undefined) {
            objects.forEach(function (object) {
                var position = object.position;
                switch (object.objectType) {
                    case "ANIMATION" /* ANIMATION */:
                        var animation = object;
                        var animationPoint = animation.animationPoint;
                        var animationSize = Object(_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_1__["getAnimationSize"])(animation.animationType, animation.spritePosition);
                        switch (animation.animationType) {
                            case "TITLE" /* TITLE */:
                                if (position.y > 0) {
                                    position.y = position.y - 2;
                                    animationPoint.y = position.y + animationSize.height / 2;
                                }
                                else if (_this.titleShown === false) {
                                    position.y = 0;
                                    animationPoint.y = position.y + animationSize.height / 2;
                                    animation.expire(false);
                                    _this.titleShown = true;
                                }
                                break;
                            case "CURSOR" /* CURSOR */:
                                var cursorIndex = _this._game.cursorIndex;
                                var cursorStart = DRAWING_CONST.positions.main.cursor_start;
                                animationPoint.y = cursorStart +
                                    cursorIndex * animationSize.height +
                                    animationSize.height / 2;
                                break;
                        }
                        animation.nextSpritePosition();
                        break;
                }
            });
        }
    };
    /**
     * render game screen
     * @param ctx context
     */
    Renderer.prototype.renderGame = function (ctx) {
        // process actions
        this.processGame();
        // draw frame
        this.drawFrame(ctx);
        // draw objects
        this.drawObjects(ctx, this._game.objects);
    };
    /**
     * process all game actions
     */
    Renderer.prototype.processGame = function () {
        var _this = this;
        if (this._game.pause == true) {
            return;
        }
        var mainTank = this._game.mainTank;
        if (mainTank != null) {
            if (mainTank.visible === true && this.checkKeyStateSync()) {
                mainTank.move();
            }
        }
        var objects = this._game.objects;
        if (objects != undefined) {
            objects.forEach(function (object) {
                switch (object.objectType) {
                    case "BULLET" /* BULLET */:
                        object.move();
                        break;
                    case "ANIMATION" /* ANIMATION */:
                        var animation = object;
                        if (animation.expireTime < _this._fps.now) {
                            animation.expire();
                        }
                        var animationPoint = animation.animationPoint;
                        var animationSize = Object(_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_1__["getAnimationSize"])(animation.animationType, animation.spritePosition);
                        switch (animation.animationType) {
                            case "INVINCIBLE" /* INVINCIBLE */:
                                var tankSize = Object(_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_1__["getObjectSize"])("TANK" /* TANK */);
                                animationPoint.x = mainTank.position.x + tankSize.width / 2;
                                animationPoint.y = mainTank.position.y + tankSize.height / 2;
                                break;
                            case "GAMEOVER" /* GAMEOVER */:
                                if (animationPoint.y >= _this._canvas.clientHeight / 2 + animationSize.height / 2) {
                                    animationPoint.y = animationPoint.y - 2;
                                }
                                break;
                        }
                        animation.nextSpritePosition();
                        break;
                }
            });
        }
        this._game.spawnTank("ENEMY_TANK" /* ENEMY_TANK */);
    };
    Renderer.prototype.checkKeyStateSync = function () {
        var mainTank = this._game.mainTank;
        var keyState = this._game.keyState;
        if ((keyState.ArrowUp === true && mainTank.direction == "up" /* up */) ||
            (keyState.ArrowRight === true && mainTank.direction == "right" /* right */) ||
            (keyState.ArrowDown === true && mainTank.direction == "down" /* down */) ||
            (keyState.ArrowLeft === true && mainTank.direction == "left" /* left */)) {
            return true;
        }
        else {
            return false;
        }
    };
    //#region drawing methods
    Renderer.prototype.drawBackground = function (ctx) {
        ctx.save();
        ctx.fillStyle = DRAWING_CONST.colors.background;
        ctx.fillRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);
        ctx.restore();
    };
    Renderer.prototype.drawFrame = function (ctx) {
        var FRAME = DRAWING_CONST.sizes.frame;
        var SPRITE_FRAME = Object(_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_1__["getSystemSprite"])("FRAME" /* FRAME */);
        var SPRITE_TANK_ICON = Object(_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_1__["getSystemSprite"])("TANK_ICON" /* TANK_ICON */);
        ctx.save();
        ctx.fillStyle = DRAWING_CONST.colors.background_frame;
        // top
        ctx.fillRect(0, 0, ctx.canvas.clientWidth, FRAME.top);
        // left
        ctx.fillRect(0, 0, FRAME.left, ctx.canvas.clientHeight);
        // bottom
        ctx.fillRect(0, ctx.canvas.clientHeight - FRAME.bottom, ctx.canvas.clientWidth, FRAME.bottom);
        // right
        ctx.fillRect(ctx.canvas.clientWidth - FRAME.right, 0, FRAME.right, ctx.canvas.clientHeight);
        this.drawSprite(ctx, SPRITE_FRAME, { x: ctx.canvas.clientWidth - FRAME.right, y: 0 });
        // enemy tank left
        var groups = this._game.gameData.levelData.tanks;
        var tankCount = 0;
        groups.forEach(function (group) {
            tankCount += group.DEFAULT + group.SPEED + group.POWER + group.ARMOURED;
        });
        for (var i = 0; i < 10; i++) {
            for (var j = 0; j < 2; j++) {
                if (tankCount > 0) {
                    this.drawSprite(ctx, SPRITE_TANK_ICON, {
                        x: ctx.canvas.clientWidth - FRAME.right + 16 * (j + 1),
                        y: 48 + 16 * i
                    });
                }
                else {
                    ctx.fillRect(ctx.canvas.clientWidth - FRAME.right + 16 * (j + 1), 48 + 16 * i, 16, 16);
                }
                tankCount--;
            }
        }
        // P1 life
        this.drawSprite(ctx, Object(_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_1__["getSystemSprite"])("NUMBER" /* NUMBER */, this._game.gameData.playerData[0].life), { x: ctx.canvas.clientWidth - FRAME.right + 32, y: 288 });
        // P2 life
        if (this._game.gameData.playerData.length > 1) {
            this.drawSprite(ctx, Object(_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_1__["getSystemSprite"])("NUMBER" /* NUMBER */, this._game.gameData.playerData[1].life), { x: ctx.canvas.clientWidth - FRAME.right + 32, y: 336 });
        }
        else {
            ctx.fillRect(ctx.canvas.clientWidth - FRAME.right + 16, 320, 32, 32);
        }
        var levelId = this._game.gameData.levelData.levelId;
        var levelType = typeof (levelId);
        if (levelType === 'number') {
            if (Math.floor(levelId / 10) === 0) {
                ctx.fillRect(ctx.canvas.clientWidth - FRAME.right + 16, 400, 16, 16);
            }
            else {
                this.drawSprite(ctx, Object(_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_1__["getSystemSprite"])("NUMBER" /* NUMBER */, Math.floor(levelId / 10)), { x: ctx.canvas.clientWidth - FRAME.right + 16, y: 400 });
            }
            this.drawSprite(ctx, Object(_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_1__["getSystemSprite"])("NUMBER" /* NUMBER */, levelId % 10), { x: ctx.canvas.clientWidth - FRAME.right + 32, y: 400 });
        }
        else if (levelType === 'string') {
            ctx.fillStyle = DRAWING_CONST.colors.background_frame;
        }
        ctx.restore();
    };
    Renderer.prototype.drawObjects = function (ctx, objects) {
        ctx.save();
        for (var i = 0; i < objects.length; i++) {
            var object = objects[i];
            var sprite = Object(_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_1__["getSpriteData"])(object);
            this.drawObject(ctx, object, sprite);
            if (this._game.debug) {
                ctx.strokeStyle = '#FF0000';
                ctx.strokeRect(object.position.x + 1, object.position.y + 1, sprite.size.width - 2, sprite.size.height - 2);
                // this.drawText(ctx, `${object.id}`, {
                // 	x: DRAWING_CONST.sizes.frame.left + object.position.x,
                // 	y: DRAWING_CONST.sizes.frame.top + object.position.y - 1,
                // }, sprite.size.width);
            }
            ctx.restore();
        }
    };
    Renderer.prototype.drawObject = function (ctx, object, sprite) {
        var sprite_src = this._mainSprite;
        if (object.visible == false) {
            return;
        }
        if (object.objectType === "ANIMATION" /* ANIMATION */) {
            var animation = object;
            if (animation.animationType === "TITLE" /* TITLE */) {
                sprite_src = this._titleSprite;
            }
        }
        if (sprite != null) {
            if (object.objectType === "BLOCK" /* BLOCK */) {
                var block = object;
                var blockState = block.blockState4x4;
                var cellSize = {
                    width: sprite.size.width / 4,
                    height: sprite.size.width / 4
                };
                for (var i = 0; i < blockState.length; i++) {
                    for (var j = 0; j < blockState[i].length; j++) {
                        if (blockState[i][j] === true) {
                            ctx.drawImage(sprite_src, sprite.position.x + cellSize.width * j, sprite.position.y + cellSize.height * i, cellSize.width, cellSize.height, object.position.x + cellSize.width * j, object.position.y + cellSize.height * i, cellSize.width, cellSize.height);
                        }
                    }
                }
            }
            else {
                ctx.drawImage(sprite_src, sprite.position.x, sprite.position.y, sprite.size.width, sprite.size.height, object.position.x, object.position.y, sprite.size.width, sprite.size.height);
            }
        }
    };
    Renderer.prototype.drawDebugCounter = function (ctx) {
        var tank = this._game.mainTank;
        if (tank != null) {
            this.drawText(ctx, "MAIN TANK: TANK_" + tank.tankColor + "_" + tank.tankLevel + "(" + tank.position.x + ", " + tank.position.y + ", " + tank.direction.toString() + ")", { x: 0, y: 15 });
        }
        else {
            this.drawText(ctx, "MAIN TANK: NOT FOUND", { x: 0, y: 15 });
        }
        var fps = (1000 / this._fps.elapsed).toFixed(2) + "fps ";
        this.drawText(ctx, fps, { x: ctx.canvas.width - (ctx.measureText(fps).width * 1.35), y: 15 });
        var keyState = this._game.keyState;
        this.drawText(ctx, "Space: " + (keyState.Space ? 'T' : 'F'), { x: 0, y: ctx.canvas.height });
        this.drawText(ctx, "ArrowLeft: " + (keyState.ArrowLeft ? 'T' : 'F'), { x: 0, y: ctx.canvas.height - 15 });
        this.drawText(ctx, "ArrowDown: " + (keyState.ArrowDown ? 'T' : 'F'), { x: 0, y: ctx.canvas.height - 30 });
        this.drawText(ctx, "ArrowRight: " + (keyState.ArrowRight ? 'T' : 'F'), { x: 0, y: ctx.canvas.height - 45 });
        this.drawText(ctx, "ArrowUp: " + (keyState.ArrowUp ? 'T' : 'F'), { x: 0, y: ctx.canvas.height - 60 });
        this.drawText(ctx, "[IKeyState]", { x: 0, y: ctx.canvas.height - 75 });
    };
    Renderer.prototype.drawText = function (ctx, text, position, maxWidth) {
        ctx.save();
        ctx.font = DRAWING_CONST.debug.font.size + "px " + DRAWING_CONST.debug.font.font;
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 2;
        ctx.strokeText(text, position.x, position.y, maxWidth);
        ctx.fillStyle = 'black';
        ctx.fillText(text, position.x, position.y, maxWidth);
        ctx.restore();
    };
    Renderer.prototype.drawSprite = function (ctx, sprite, position, size) {
        ctx.save();
        ctx.drawImage(this._mainSprite, sprite.position.x, sprite.position.y, sprite.size.width, sprite.size.height, position.x, position.y, size != undefined ? size.width : sprite.size.width, size != undefined ? size.height : sprite.size.height);
        ctx.restore();
    };
    //#endregion
    //#region public methods
    /**
     * Test object is visible
     * @param object object for test
     * @param sprite object's sprite data for size
     */
    Renderer.prototype.objectVisibleTest = function (object) {
        var position = object.position;
        var size = Object(_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_1__["getSpriteData"])(object).size;
        var ctx = this._canvas.getContext('2d');
        if (position.x >= DRAWING_CONST.sizes.frame.left &&
            position.x + size.width <= ctx.canvas.clientWidth - DRAWING_CONST.sizes.frame.right &&
            position.y >= DRAWING_CONST.sizes.frame.top &&
            position.y + size.height <= ctx.canvas.clientHeight - DRAWING_CONST.sizes.frame.bottom) {
            return true;
        }
        else {
            return false;
        }
    };
    Renderer.prototype.randomPoint = function (size) {
        return {
            x: Object(_Utils_Utils__WEBPACK_IMPORTED_MODULE_2__["getRandomRange"])(DRAWING_CONST.sizes.frame.left, this._canvas.width - DRAWING_CONST.sizes.frame.right - size.width),
            y: Object(_Utils_Utils__WEBPACK_IMPORTED_MODULE_2__["getRandomRange"])(DRAWING_CONST.sizes.frame.top, this._canvas.height - DRAWING_CONST.sizes.frame.bottom - size.height),
        };
    };
    /**
     * Calculate and return Z-Index for render
     * 0: Water Block
     * 1: Tanks, Breakable Blocks
     * 2: Invincible Animation, Bullets
     * 3: Bush
     * 4: Explode Animations, Score Animations, Spawning Animation
     * 5: Items
     * 6: System Sprites(Game Over... etc)
     * @param object object for calculate
     */
    Renderer.getObjectZIndex = function (object) {
        switch (object.objectType) {
            case "BLOCK" /* BLOCK */:
                var block = object;
                if (block.blockType === "WATER" /* WATER */) {
                    return 0;
                }
                else if (block.blockType === "BUSH" /* BUSH */) {
                    return 3;
                }
                else {
                    return 1;
                }
            case "TANK" /* TANK */:
                return 1;
            case "ANIMATION" /* ANIMATION */:
                var animation = object;
                if (animation.animationType === "INVINCIBLE" /* INVINCIBLE */) {
                    return 2;
                }
                else {
                    return 4;
                }
            case "BULLET" /* BULLET */:
                return 2;
            case "ITEM" /* ITEM */:
                return 5;
        }
    };
    return Renderer;
}());
/* harmony default export */ __webpack_exports__["default"] = (Renderer);


/***/ }),

/***/ "./src/Render/Sprite/SpriteData.ts":
/*!*****************************************!*\
  !*** ./src/Render/Sprite/SpriteData.ts ***!
  \*****************************************/
/*! exports provided: getSpriteData, getSystemSprite, getSpriteSize, getObjectSize, getAnimationSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSpriteData", function() { return getSpriteData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSystemSprite", function() { return getSystemSprite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSpriteSize", function() { return getSpriteSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getObjectSize", function() { return getObjectSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAnimationSize", function() { return getAnimationSize; });
/* harmony import */ var _SpriteDefinition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SpriteDefinition */ "./src/Render/Sprite/SpriteDefinition.ts");
/* harmony import */ var _Game_Object_TankAIObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Game/Object/TankAIObject */ "./src/Game/Object/TankAIObject.ts");


/**
 * Find sprite data for given object
 * @param object found sprite definition
 */
function getSpriteData(object) {
    switch (object.objectType) {
        case "TANK" /* TANK */:
            var tank = object;
            if (tank instanceof _Game_Object_TankAIObject__WEBPACK_IMPORTED_MODULE_1__["default"]) {
                return _SpriteDefinition__WEBPACK_IMPORTED_MODULE_0__["default"].ENEMY[tank.tankColor][tank.tankLevel][tank.direction][tank.spritePosition];
            }
            else {
                return _SpriteDefinition__WEBPACK_IMPORTED_MODULE_0__["default"].TANK[tank.tankColor][tank.tankLevel][tank.direction][tank.spritePosition];
            }
        case "BULLET" /* BULLET */:
            var bullet = object;
            return _SpriteDefinition__WEBPACK_IMPORTED_MODULE_0__["default"].BULLET[bullet.direction];
        case "ANIMATION" /* ANIMATION */:
            var animation = object;
            return _SpriteDefinition__WEBPACK_IMPORTED_MODULE_0__["default"].ANIMATION[animation.animationType][animation.spritePosition];
        case "BLOCK" /* BLOCK */:
            var block = object;
            return _SpriteDefinition__WEBPACK_IMPORTED_MODULE_0__["default"].BLOCK[block.blockType][block.spritePosition];
        case "ITEM" /* ITEM */:
            var item = object;
            return _SpriteDefinition__WEBPACK_IMPORTED_MODULE_0__["default"].ITEM[item.itemType];
    }
}
function getSystemSprite(spriteType, number) {
    if (number === void 0) { number = 0; }
    switch (spriteType) {
        case "NULL" /* NULL */:
        case "TANK_ICON" /* TANK_ICON */:
        case "STAGE" /* STAGE */:
        case "FRAME" /* FRAME */:
            return _SpriteDefinition__WEBPACK_IMPORTED_MODULE_0__["default"].SYSTEM[spriteType];
        case "NUMBER" /* NUMBER */:
            return _SpriteDefinition__WEBPACK_IMPORTED_MODULE_0__["default"].SYSTEM.NUMBER[number];
    }
}
function getSpriteSize(object) {
    return getSpriteData(object).size;
}
function getObjectSize(type, direction) {
    if (direction == null) {
        direction = "up" /* up */;
    }
    switch (type) {
        case "BLOCK" /* BLOCK */:
            return _SpriteDefinition__WEBPACK_IMPORTED_MODULE_0__["default"].BLOCK.BRICK[0].size;
        case "TANK" /* TANK */:
            return _SpriteDefinition__WEBPACK_IMPORTED_MODULE_0__["default"].TANK.YELLOW[0][direction][0].size;
        case "BULLET" /* BULLET */:
            return _SpriteDefinition__WEBPACK_IMPORTED_MODULE_0__["default"].BULLET[direction].size;
        case "ITEM" /* ITEM */:
            return _SpriteDefinition__WEBPACK_IMPORTED_MODULE_0__["default"].ITEM.BOMB.size;
    }
}
function getAnimationSize(type, frame) {
    return _SpriteDefinition__WEBPACK_IMPORTED_MODULE_0__["default"].ANIMATION[type][frame].size;
}


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
        ],
    },
    ENEMY: {
        YELLOW: [
            {
                up: [
                    { position: { x: 0, y: 128 }, size: { width: 32, height: 32 } },
                    { position: { x: 32, y: 128 }, size: { width: 32, height: 32 } },
                ],
                left: [
                    { position: { x: 64, y: 128 }, size: { width: 32, height: 32 } },
                    { position: { x: 96, y: 128 }, size: { width: 32, height: 32 } },
                ],
                down: [
                    { position: { x: 128, y: 128 }, size: { width: 32, height: 32 } },
                    { position: { x: 160, y: 128 }, size: { width: 32, height: 32 } },
                ],
                right: [
                    { position: { x: 192, y: 128 }, size: { width: 32, height: 32 } },
                    { position: { x: 224, y: 128 }, size: { width: 32, height: 32 } },
                ]
            },
            {
                up: [
                    { position: { x: 0, y: 160 }, size: { width: 32, height: 32 } },
                    { position: { x: 32, y: 160 }, size: { width: 32, height: 32 } },
                ],
                left: [
                    { position: { x: 64, y: 160 }, size: { width: 32, height: 32 } },
                    { position: { x: 96, y: 160 }, size: { width: 32, height: 32 } },
                ],
                down: [
                    { position: { x: 128, y: 160 }, size: { width: 32, height: 32 } },
                    { position: { x: 160, y: 160 }, size: { width: 32, height: 32 } },
                ],
                right: [
                    { position: { x: 192, y: 160 }, size: { width: 32, height: 32 } },
                    { position: { x: 224, y: 160 }, size: { width: 32, height: 32 } },
                ]
            },
            {
                up: [
                    { position: { x: 0, y: 192 }, size: { width: 32, height: 32 } },
                    { position: { x: 32, y: 192 }, size: { width: 32, height: 32 } },
                ],
                left: [
                    { position: { x: 64, y: 192 }, size: { width: 32, height: 32 } },
                    { position: { x: 96, y: 192 }, size: { width: 32, height: 32 } },
                ],
                down: [
                    { position: { x: 128, y: 192 }, size: { width: 32, height: 32 } },
                    { position: { x: 160, y: 192 }, size: { width: 32, height: 32 } },
                ],
                right: [
                    { position: { x: 192, y: 192 }, size: { width: 32, height: 32 } },
                    { position: { x: 224, y: 192 }, size: { width: 32, height: 32 } },
                ]
            },
            {
                up: [
                    { position: { x: 0, y: 224 }, size: { width: 32, height: 32 } },
                    { position: { x: 32, y: 224 }, size: { width: 32, height: 32 } },
                ],
                left: [
                    { position: { x: 64, y: 224 }, size: { width: 32, height: 32 } },
                    { position: { x: 96, y: 224 }, size: { width: 32, height: 32 } },
                ],
                down: [
                    { position: { x: 128, y: 224 }, size: { width: 32, height: 32 } },
                    { position: { x: 160, y: 224 }, size: { width: 32, height: 32 } },
                ],
                right: [
                    { position: { x: 192, y: 224 }, size: { width: 32, height: 32 } },
                    { position: { x: 224, y: 224 }, size: { width: 32, height: 32 } },
                ]
            }
        ],
        GREEN: [
            {
                up: [
                    { position: { x: 0, y: 384 }, size: { width: 32, height: 32 } },
                    { position: { x: 32, y: 384 }, size: { width: 32, height: 32 } },
                ],
                left: [
                    { position: { x: 64, y: 384 }, size: { width: 32, height: 32 } },
                    { position: { x: 96, y: 384 }, size: { width: 32, height: 32 } },
                ],
                down: [
                    { position: { x: 128, y: 384 }, size: { width: 32, height: 32 } },
                    { position: { x: 160, y: 384 }, size: { width: 32, height: 32 } },
                ],
                right: [
                    { position: { x: 192, y: 384 }, size: { width: 32, height: 32 } },
                    { position: { x: 224, y: 384 }, size: { width: 32, height: 32 } },
                ]
            },
            {
                up: [
                    { position: { x: 0, y: 416 }, size: { width: 32, height: 32 } },
                    { position: { x: 32, y: 416 }, size: { width: 32, height: 32 } },
                ],
                left: [
                    { position: { x: 64, y: 416 }, size: { width: 32, height: 32 } },
                    { position: { x: 96, y: 416 }, size: { width: 32, height: 32 } },
                ],
                down: [
                    { position: { x: 128, y: 416 }, size: { width: 32, height: 32 } },
                    { position: { x: 160, y: 416 }, size: { width: 32, height: 32 } },
                ],
                right: [
                    { position: { x: 192, y: 416 }, size: { width: 32, height: 32 } },
                    { position: { x: 224, y: 416 }, size: { width: 32, height: 32 } },
                ]
            },
            {
                up: [
                    { position: { x: 0, y: 448 }, size: { width: 32, height: 32 } },
                    { position: { x: 32, y: 448 }, size: { width: 32, height: 32 } },
                ],
                left: [
                    { position: { x: 64, y: 448 }, size: { width: 32, height: 32 } },
                    { position: { x: 96, y: 448 }, size: { width: 32, height: 32 } },
                ],
                down: [
                    { position: { x: 128, y: 448 }, size: { width: 32, height: 32 } },
                    { position: { x: 160, y: 448 }, size: { width: 32, height: 32 } },
                ],
                right: [
                    { position: { x: 192, y: 448 }, size: { width: 32, height: 32 } },
                    { position: { x: 224, y: 448 }, size: { width: 32, height: 32 } },
                ]
            },
            {
                up: [
                    { position: { x: 0, y: 480 }, size: { width: 32, height: 32 } },
                    { position: { x: 32, y: 480 }, size: { width: 32, height: 32 } },
                ],
                left: [
                    { position: { x: 64, y: 480 }, size: { width: 32, height: 32 } },
                    { position: { x: 96, y: 480 }, size: { width: 32, height: 32 } },
                ],
                down: [
                    { position: { x: 128, y: 480 }, size: { width: 32, height: 32 } },
                    { position: { x: 160, y: 480 }, size: { width: 32, height: 32 } },
                ],
                right: [
                    { position: { x: 192, y: 480 }, size: { width: 32, height: 32 } },
                    { position: { x: 224, y: 480 }, size: { width: 32, height: 32 } },
                ]
            }
        ],
        WHITE: [
            {
                up: [
                    { position: { x: 256, y: 128 }, size: { width: 32, height: 32 } },
                    { position: { x: 288, y: 128 }, size: { width: 32, height: 32 } },
                ],
                left: [
                    { position: { x: 320, y: 128 }, size: { width: 32, height: 32 } },
                    { position: { x: 352, y: 128 }, size: { width: 32, height: 32 } },
                ],
                down: [
                    { position: { x: 384, y: 128 }, size: { width: 32, height: 32 } },
                    { position: { x: 416, y: 128 }, size: { width: 32, height: 32 } },
                ],
                right: [
                    { position: { x: 448, y: 128 }, size: { width: 32, height: 32 } },
                    { position: { x: 480, y: 128 }, size: { width: 32, height: 32 } },
                ]
            },
            {
                up: [
                    { position: { x: 256, y: 160 }, size: { width: 32, height: 32 } },
                    { position: { x: 288, y: 160 }, size: { width: 32, height: 32 } },
                ],
                left: [
                    { position: { x: 320, y: 160 }, size: { width: 32, height: 32 } },
                    { position: { x: 352, y: 160 }, size: { width: 32, height: 32 } },
                ],
                down: [
                    { position: { x: 384, y: 160 }, size: { width: 32, height: 32 } },
                    { position: { x: 416, y: 160 }, size: { width: 32, height: 32 } },
                ],
                right: [
                    { position: { x: 448, y: 160 }, size: { width: 32, height: 32 } },
                    { position: { x: 480, y: 160 }, size: { width: 32, height: 32 } },
                ]
            },
            {
                up: [
                    { position: { x: 256, y: 192 }, size: { width: 32, height: 32 } },
                    { position: { x: 288, y: 192 }, size: { width: 32, height: 32 } },
                ],
                left: [
                    { position: { x: 320, y: 192 }, size: { width: 32, height: 32 } },
                    { position: { x: 352, y: 192 }, size: { width: 32, height: 32 } },
                ],
                down: [
                    { position: { x: 384, y: 192 }, size: { width: 32, height: 32 } },
                    { position: { x: 416, y: 192 }, size: { width: 32, height: 32 } },
                ],
                right: [
                    { position: { x: 448, y: 192 }, size: { width: 32, height: 32 } },
                    { position: { x: 480, y: 192 }, size: { width: 32, height: 32 } },
                ]
            },
            {
                up: [
                    { position: { x: 256, y: 224 }, size: { width: 32, height: 32 } },
                    { position: { x: 288, y: 224 }, size: { width: 32, height: 32 } },
                ],
                left: [
                    { position: { x: 320, y: 224 }, size: { width: 32, height: 32 } },
                    { position: { x: 352, y: 224 }, size: { width: 32, height: 32 } },
                ],
                down: [
                    { position: { x: 384, y: 224 }, size: { width: 32, height: 32 } },
                    { position: { x: 416, y: 224 }, size: { width: 32, height: 32 } },
                ],
                right: [
                    { position: { x: 448, y: 224 }, size: { width: 32, height: 32 } },
                    { position: { x: 480, y: 224 }, size: { width: 32, height: 32 } },
                ]
            }
        ],
        MAGENTA: [
            {
                up: [
                    { position: { x: 256, y: 384 }, size: { width: 32, height: 32 } },
                    { position: { x: 288, y: 384 }, size: { width: 32, height: 32 } },
                ],
                left: [
                    { position: { x: 320, y: 384 }, size: { width: 32, height: 32 } },
                    { position: { x: 352, y: 384 }, size: { width: 32, height: 32 } },
                ],
                down: [
                    { position: { x: 384, y: 384 }, size: { width: 32, height: 32 } },
                    { position: { x: 416, y: 384 }, size: { width: 32, height: 32 } },
                ],
                right: [
                    { position: { x: 448, y: 384 }, size: { width: 32, height: 32 } },
                    { position: { x: 480, y: 384 }, size: { width: 32, height: 32 } },
                ]
            },
            {
                up: [
                    { position: { x: 256, y: 416 }, size: { width: 32, height: 32 } },
                    { position: { x: 288, y: 416 }, size: { width: 32, height: 32 } },
                ],
                left: [
                    { position: { x: 320, y: 416 }, size: { width: 32, height: 32 } },
                    { position: { x: 352, y: 416 }, size: { width: 32, height: 32 } },
                ],
                down: [
                    { position: { x: 384, y: 416 }, size: { width: 32, height: 32 } },
                    { position: { x: 416, y: 416 }, size: { width: 32, height: 32 } },
                ],
                right: [
                    { position: { x: 448, y: 416 }, size: { width: 32, height: 32 } },
                    { position: { x: 480, y: 416 }, size: { width: 32, height: 32 } },
                ]
            },
            {
                up: [
                    { position: { x: 256, y: 448 }, size: { width: 32, height: 32 } },
                    { position: { x: 288, y: 448 }, size: { width: 32, height: 32 } },
                ],
                left: [
                    { position: { x: 320, y: 448 }, size: { width: 32, height: 32 } },
                    { position: { x: 352, y: 448 }, size: { width: 32, height: 32 } },
                ],
                down: [
                    { position: { x: 384, y: 448 }, size: { width: 32, height: 32 } },
                    { position: { x: 416, y: 448 }, size: { width: 32, height: 32 } },
                ],
                right: [
                    { position: { x: 448, y: 448 }, size: { width: 32, height: 32 } },
                    { position: { x: 480, y: 448 }, size: { width: 32, height: 32 } },
                ]
            },
            {
                up: [
                    { position: { x: 256, y: 480 }, size: { width: 32, height: 32 } },
                    { position: { x: 288, y: 480 }, size: { width: 32, height: 32 } },
                ],
                left: [
                    { position: { x: 320, y: 480 }, size: { width: 32, height: 32 } },
                    { position: { x: 352, y: 480 }, size: { width: 32, height: 32 } },
                ],
                down: [
                    { position: { x: 384, y: 480 }, size: { width: 32, height: 32 } },
                    { position: { x: 416, y: 480 }, size: { width: 32, height: 32 } },
                ],
                right: [
                    { position: { x: 448, y: 480 }, size: { width: 32, height: 32 } },
                    { position: { x: 480, y: 480 }, size: { width: 32, height: 32 } },
                ]
            }
        ],
    },
    BULLET: {
        up: { position: { x: 646, y: 204 }, size: { width: 6, height: 8 } },
        left: { position: { x: 660, y: 204 }, size: { width: 8, height: 6 } },
        down: { position: { x: 678, y: 204 }, size: { width: 6, height: 8 } },
        right: { position: { x: 692, y: 204 }, size: { width: 8, height: 6 } }
    },
    BLOCK: {
        BRICK: [
            {
                position: { x: 512, y: 0 },
                size: { width: 32, height: 32 }
            }
        ],
        IRON: [
            {
                position: { x: 512, y: 32 },
                size: { width: 32, height: 32 }
            }
        ],
        WATER: [
            {
                position: { x: 512, y: 96 },
                size: { width: 32, height: 32 }
            },
            {
                position: { x: 544, y: 96 },
                size: { width: 32, height: 32 }
            }
        ],
        BUSH: [
            {
                position: { x: 544, y: 64 },
                size: { width: 32, height: 32 }
            }
        ],
        EAGLE: [
            {
                position: { x: 608, y: 64 },
                size: { width: 32, height: 32 }
            },
            {
                position: { x: 640, y: 64 },
                size: { width: 32, height: 32 }
            }
        ]
    },
    ANIMATION: {
        EXPLOSION_SMALL: [
            {
                position: { x: 518, y: 260 },
                size: { width: 22, height: 22 }
            },
            {
                position: { x: 544, y: 258 },
                size: { width: 30, height: 28 }
            },
            {
                position: { x: 576, y: 256 },
                size: { width: 32, height: 32 }
            }
        ],
        EXPLOSION_LARGE: [
            {
                position: { x: 610, y: 258 },
                size: { width: 58, height: 58 }
            },
            {
                position: { x: 668, y: 256 },
                size: { width: 68, height: 64 }
            }
        ],
        INVINCIBLE: [
            {
                position: { x: 512, y: 288 },
                size: { width: 32, height: 32 }
            },
            {
                position: { x: 544, y: 288 },
                size: { width: 32, height: 32 }
            },
        ],
        SPAWN: [
            {
                position: { x: 518, y: 198 },
                size: { width: 18, height: 18 }
            },
            {
                position: { x: 548, y: 196 },
                size: { width: 22, height: 22 }
            },
            {
                position: { x: 578, y: 194 },
                size: { width: 26, height: 26 }
            },
            {
                position: { x: 608, y: 192 },
                size: { width: 30, height: 30 }
            },
        ],
        SCORE_100: [
            {
                position: { x: 580, y: 328 },
                size: { width: 26, height: 14 }
            },
        ],
        SCORE_200: [
            {
                position: { x: 610, y: 328 },
                size: { width: 28, height: 14 }
            },
        ],
        SCORE_300: [
            {
                position: { x: 642, y: 328 },
                size: { width: 28, height: 14 }
            },
        ],
        SCORE_400: [
            {
                position: { x: 674, y: 328 },
                size: { width: 28, height: 14 }
            },
        ],
        SCORE_500: [
            {
                position: { x: 706, y: 328 },
                size: { width: 28, height: 14 }
            },
        ],
        GAMEOVER: [
            {
                position: { x: 578, y: 368 },
                size: { width: 62, height: 30 }
            },
        ],
        PAUSE: [
            {
                position: { x: 578, y: 352 },
                size: { width: 78, height: 14 }
            }
        ],
        TITLE: [
            {
                position: { x: 0, y: 0 },
                size: { width: 512, height: 480 }
            }
        ],
        CURSOR: [
            { position: { x: 192, y: 0 }, size: { width: 32, height: 32 } },
            { position: { x: 224, y: 0 }, size: { width: 32, height: 32 } },
        ]
    },
    ITEM: {
        HELMET: {
            position: { x: 512, y: 224 },
            size: { width: 32, height: 30 }
        },
        WATCH: {
            position: { x: 544, y: 224 },
            size: { width: 32, height: 30 }
        },
        SHOVEL: {
            position: { x: 576, y: 224 },
            size: { width: 32, height: 30 }
        },
        STAR: {
            position: { x: 608, y: 224 },
            size: { width: 32, height: 30 }
        },
        BOMB: {
            position: { x: 640, y: 224 },
            size: { width: 32, height: 30 }
        },
        TANK: {
            position: { x: 672, y: 224 },
            size: { width: 32, height: 30 }
        },
        PISTOL: {
            position: { x: 704, y: 224 },
            size: { width: 32, height: 30 }
        },
    },
    SYSTEM: {
        NULL: {
            position: { x: 0, y: 0 },
            size: { width: 0, height: 0 }
        },
        TANK_ICON: {
            position: { x: 640, y: 384 },
            size: { width: 16, height: 16 }
        },
        STAGE: {
            position: { x: 658, y: 351 },
            size: { width: 78, height: 16 }
        },
        NUMBER: [
            {
                position: { x: 657, y: 367 },
                size: { width: 16, height: 16 }
            },
            {
                position: { x: 674, y: 367 },
                size: { width: 16, height: 16 }
            },
            {
                position: { x: 689, y: 367 },
                size: { width: 16, height: 16 }
            },
            {
                position: { x: 705, y: 367 },
                size: { width: 16, height: 16 }
            },
            {
                position: { x: 721, y: 367 },
                size: { width: 16, height: 16 }
            },
            {
                position: { x: 657, y: 383 },
                size: { width: 16, height: 16 }
            },
            {
                position: { x: 674, y: 383 },
                size: { width: 16, height: 16 }
            },
            {
                position: { x: 689, y: 383 },
                size: { width: 16, height: 16 }
            },
            {
                position: { x: 705, y: 383 },
                size: { width: 16, height: 16 }
            },
            {
                position: { x: 721, y: 383 },
                size: { width: 16, height: 16 }
            }
        ],
        FRAME: {
            position: { x: 736, y: 0 },
            size: { width: 64, height: 480 }
        }
    },
};
/* harmony default export */ __webpack_exports__["default"] = (SPRTIE_DEF);


/***/ }),

/***/ "./src/Render/Sprite/sprite_main.png":
/*!*******************************************!*\
  !*** ./src/Render/Sprite/sprite_main.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../dist/js/sprite_main.png");

/***/ }),

/***/ "./src/Render/Sprite/sprite_title.png":
/*!********************************************!*\
  !*** ./src/Render/Sprite/sprite_title.png ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../dist/js/sprite_title.png");

/***/ }),

/***/ "./src/Utils/CollisionTest.ts":
/*!************************************!*\
  !*** ./src/Utils/CollisionTest.ts ***!
  \************************************/
/*! exports provided: ObjectCollisionTest, BlockCollisionTest, RectangleCollisionTest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectCollisionTest", function() { return ObjectCollisionTest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockCollisionTest", function() { return BlockCollisionTest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RectangleCollisionTest", function() { return RectangleCollisionTest; });
/* harmony import */ var _Render_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Render/Sprite/SpriteData */ "./src/Render/Sprite/SpriteData.ts");

/**
* Tests two objects are collisions (rectangle bounding box collision test)
* @param object1 first object
* @param sprite1 first object's sprite data for size
* @param object2 second object
* @param sprite2 second object's sprite data for size
*/
function ObjectCollisionTest(object1, object2) {
    var size1 = Object(_Render_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_0__["getSpriteData"])(object1).size;
    var size2 = Object(_Render_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_0__["getSpriteData"])(object2).size;
    return RectangleCollisionTest(object1.position, size1, object2.position, size2);
}
function BlockCollisionTest(block, object) {
    var cells = [];
    var blockSize = Object(_Render_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_0__["getSpriteData"])(block).size;
    var objectSize = Object(_Render_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_0__["getSpriteData"])(object).size;
    var cellPosition;
    var cellSize = {
        width: blockSize.width / 4,
        height: blockSize.height / 4
    };
    for (var i = 0; i < block.blockState4x4.length; i++) {
        for (var j = 0; j < block.blockState4x4[i].length; j++) {
            if (block.blockState4x4[i][j] == false) {
                continue;
            }
            cellPosition = {
                x: block.position.x + (blockSize.width / 4) * j,
                y: block.position.y + (blockSize.height / 4) * i
            };
            if (RectangleCollisionTest(cellPosition, cellSize, object.position, objectSize)) {
                cells.push(cellPosition);
            }
        }
    }
    return cells;
}
function RectangleCollisionTest(pos1, size1, pos2, size2) {
    if (pos1.x + size1.width > pos2.x &&
        pos1.x < pos2.x + size2.width &&
        pos1.y + size1.height > pos2.y &&
        pos1.y < pos2.y + size2.height) {
        return true;
    }
    else {
        return false;
    }
}


/***/ }),

/***/ "./src/Utils/Utils.ts":
/*!****************************!*\
  !*** ./src/Utils/Utils.ts ***!
  \****************************/
/*! exports provided: deepClone, Guid, max, min, getRandomRange, removeDuplicate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepClone", function() { return deepClone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Guid", function() { return Guid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomRange", function() { return getRandomRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeDuplicate", function() { return removeDuplicate; });
var __values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
function deepClone(obj) {
    var e_1, _a;
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    var result = Array.isArray(obj) ? [] : {};
    try {
        for (var _b = __values(Object.keys(obj)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var key = _c.value;
            result[key] = deepClone(obj[key]);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return result;
}
var Guid = /** @class */ (function () {
    function Guid() {
    }
    Guid.newGuid = function () {
        return 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    return Guid;
}());

/**
 * find maximum number from number array
 * @param numbers given numbers
 */
function max(numbers) {
    return Math.max.apply(null, numbers);
}
/**
 * find minimum number from number array
 * @param numbers given numbers
 */
function min(numbers) {
    return Math.min.apply(null, numbers);
}
/**
 * get a random value between range
 * @param min range_min
 * @param max range_max
 */
function getRandomRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function removeDuplicate(array) {
    var set = new Set(array);
    return __spread(set);
}


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
/* harmony import */ var _Render_Renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Render/Renderer */ "./src/Render/Renderer.ts");


var spriteMainImage = __webpack_require__(/*! ./Render/Sprite/sprite_main.png */ "./src/Render/Sprite/sprite_main.png");
var spriteTItleImage = __webpack_require__(/*! ./Render/Sprite/sprite_title.png */ "./src/Render/Sprite/sprite_title.png");
var canvas = document.getElementById("canvas");
// init game
var game = new _Game_Game__WEBPACK_IMPORTED_MODULE_0__["default"](canvas, './js/sprite_main.png', './js/sprite_title.png');
//#region DEBUG
var debug_btn = document.getElementById("debug");
var mainTank_level = document.getElementById("mainTank_level");
var mainTank_color = document.getElementById("mainTank_color");
var mainTank_invincible = document.getElementById("mainTank_invincible");
var mainTank_hit = document.getElementById("mainTank_hit");
var tracks = {
    block: document.getElementById("li_block"),
    tank: document.getElementById("li_tank"),
    bullet: document.getElementById("li_bullet"),
    animation: document.getElementById("li_animation"),
};
var objects = document.getElementById("objects");
var gamedata = document.getElementById("gamedata");
debug_btn.addEventListener('click', function (ev) {
    if (debug_btn.getAttribute('value') == 'true') {
        game.debug = false;
        debug_btn.setAttribute('value', 'false');
    }
    else if (debug_btn.getAttribute('value') == 'false') {
        game.debug = true;
        debug_btn.setAttribute('value', 'true');
    }
    debug_btn.innerText = "debug = " + debug_btn.getAttribute('value');
});
mainTank_level.addEventListener("change", function () { updateTank(); });
mainTank_color.addEventListener("change", function () { updateTank(); });
mainTank_invincible.addEventListener("click", function () { game.mainTank.invincible(); });
mainTank_hit.addEventListener("click", function () { game.mainTank.hit(); });
var objectFinder = setInterval(function () {
    var _a, _b;
    objects.innerHTML =
        "\n\t<tr>\n\t\t<td>zIndex</td>\n\t\t<td>id</td>\n\t\t<td>type</td>\n\t\t<td>position</td>\n\t</tr>\n\t";
    gamedata.innerHTML =
        "\n\t<tr>\n\t\t<td>type</td>\n\t\t<td>value</td>\n\t</tr>\n\t";
    if (!game.debug) {
        return;
    }
    if (game.mainTank) {
        mainTank_color.value = game.mainTank.tankColor.toString();
        mainTank_level.value = game.mainTank.tankLevel.toString();
    }
    if (game.gameData) {
        gamedata.innerHTML = gamedata.innerHTML +
            ("\n\t\t<tr>\n\t\t\t<td>gameover</td>\n\t\t\t<td>" + game.gameData.gameOver + "</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>levelId</td>\n\t\t\t<td>" + ((_a = game.gameData.levelData) === null || _a === void 0 ? void 0 : _a.levelId) + "</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>p1 score</td>\n\t\t\t<td>" + ((_b = game.gameData.playerData[0]) === null || _b === void 0 ? void 0 : _b.score) + "</td>\n\t\t</tr>\n\t\t");
    }
    game.objects.forEach(function (object) {
        switch (object.objectType) {
            case "BLOCK" /* BLOCK */:
                if (tracks.block.checked === false) {
                    return;
                }
                break;
            case "TANK" /* TANK */:
                if (tracks.tank.checked === false) {
                    return;
                }
                break;
            case "BULLET" /* BULLET */:
                if (tracks.bullet.checked === false) {
                    return;
                }
                break;
            case "ANIMATION" /* ANIMATION */:
                if (tracks.animation.checked === false) {
                    return;
                }
                break;
        }
        objects.innerHTML = objects.innerHTML +
            ("\n\t\t<tr>\n\t\t\t<td>" + _Render_Renderer__WEBPACK_IMPORTED_MODULE_1__["default"].getObjectZIndex(object) + "</td>\n\t\t\t<td>" + object.id + "</td>\n\t\t\t<td>" + object.objectType + "</td>\n\t\t\t<td>[x: " + object.position.x + ", y: " + object.position.y + "]</td>\n\t\t</tr>\n\t\t");
    });
}, 100);
function updateTank() {
    game.mainTank.tankColor = mainTank_color.value;
    game.mainTank.tankLevel = parseInt(mainTank_level.value);
}
//#endregion


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvR2FtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9JbnB1dE1hbmFnZXIvRUtleXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvSW5wdXRNYW5hZ2VyL0lucHV0TWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9MZXZlbC9EZWZhdWx0TGV2ZWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL09iamVjdC9BbmltYXRpb25PYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvT2JqZWN0L0Jsb2NrT2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL09iamVjdC9CdWxsZXRPYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvT2JqZWN0L0VudW0vRUFuaW1hdGlvblR5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvT2JqZWN0L0VudW0vRVRhbmtUeXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL09iamVjdC9HYW1lT2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL09iamVjdC9Nb3ZpbmdPYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvT2JqZWN0L1RhbmtBSU9iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9PYmplY3QvVGFua09iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVuZGVyL1JlbmRlcmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9SZW5kZXIvU3ByaXRlL1Nwcml0ZURhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlbmRlci9TcHJpdGUvU3ByaXRlRGVmaW5pdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVuZGVyL1Nwcml0ZS9zcHJpdGVfbWFpbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlbmRlci9TcHJpdGUvc3ByaXRlX3RpdGxlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbHMvQ29sbGlzaW9uVGVzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbHMvVXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZEO0FBQ2hCO0FBQ0E7QUFDb0M7QUFDdEI7QUFDSjtBQUNVO0FBQ2xCO0FBQzRCO0FBQ3pCO0FBQ0s7QUFDUDtBQUNDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ1A7QUFDQSxTQUFTLGNBQWM7QUFDdkIsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTLGFBQWE7QUFDdEIsU0FBUyxhQUFhO0FBQ3RCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7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QTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixjQUFjO0FBQ3pDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsY0FBYztBQUN6QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsY0FBYztBQUN6QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsY0FBYztBQUN6QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGNBQWM7QUFDekM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixjQUFjO0FBQ3pDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsY0FBYztBQUN6QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGNBQWM7QUFDekM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixjQUFjO0FBQ3pDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixjQUFjO0FBQ3pDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsY0FBYztBQUN6QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGNBQWM7QUFDekM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixjQUFjO0FBQ3pDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsY0FBYztBQUN6QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGNBQWM7QUFDekM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixlQUFlO0FBQzFDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsY0FBYztBQUN6QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGNBQWM7QUFDekM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixjQUFjO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQSwyQkFB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsMkVBQWdCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLDJFQUFnQjtBQUM1RDtBQUNBO0FBQ0EsK0NBQStDLHdFQUFhO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiwwRUFBZTtBQUMxQywrQkFBK0IsMEVBQWU7QUFDOUM7QUFDQTtBQUNBO0FB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QTtBQUNBLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGO0FBQ0E7QUFDQSxxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRixxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRjtBQUNBO0FBQ0EscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckYscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckY7QUFDQTtBQUNBLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGO0FBQ0E7QUFDQSxxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRixxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRjtBQUNBO0FBQ0EscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckYscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckY7QUFDQTtBQUNBLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRixxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRjtBQUNBO0FBQ0EscUJBQXFCLFlBQVks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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0Msd0RBQVE7QUFDaEQsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgUmVuZGVyZXIsIHsgRFJBV0lOR19DT05TVCB9IGZyb20gXCIuLi9SZW5kZXIvUmVuZGVyZXJcIjtcclxuaW1wb3J0IEdhbWVPYmplY3QgZnJvbSBcIi4vT2JqZWN0L0dhbWVPYmplY3RcIjtcclxuaW1wb3J0IFRhbmtPYmplY3QgZnJvbSBcIi4vT2JqZWN0L1RhbmtPYmplY3RcIjtcclxuaW1wb3J0IHsgQmxvY2tDb2xsaXNpb25UZXN0LCBPYmplY3RDb2xsaXNpb25UZXN0IH0gZnJvbSBcIi4uL1V0aWxzL0NvbGxpc2lvblRlc3RcIjtcclxuaW1wb3J0IFNQUlRJRV9ERUYgZnJvbSBcIi4uL1JlbmRlci9TcHJpdGUvU3ByaXRlRGVmaW5pdGlvblwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uT2JqZWN0IGZyb20gXCIuL09iamVjdC9BbmltYXRpb25PYmplY3RcIjtcclxuaW1wb3J0IHsgQW5pbWF0aW9uRGVmYXVsdHMgfSBmcm9tIFwiLi9PYmplY3QvRW51bS9FQW5pbWF0aW9uVHlwZVwiO1xyXG5pbXBvcnQgQmxvY2tPYmplY3QgZnJvbSBcIi4vT2JqZWN0L0Jsb2NrT2JqZWN0XCI7XHJcbmltcG9ydCB7IGdldFNwcml0ZURhdGEsIGdldE9iamVjdFNpemUgfSBmcm9tIFwiLi4vUmVuZGVyL1Nwcml0ZS9TcHJpdGVEYXRhXCI7XHJcbmltcG9ydCBEZWZhdWx0TGV2ZWxzIGZyb20gXCIuL0xldmVsL0RlZmF1bHRMZXZlbHNcIjtcclxuaW1wb3J0IElucHV0TWFuYWdlciBmcm9tIFwiLi9JbnB1dE1hbmFnZXIvSW5wdXRNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IGdldFJhbmRvbVJhbmdlIH0gZnJvbSBcIi4uL1V0aWxzL1V0aWxzXCI7XHJcbmltcG9ydCBUYW5rQUlPQmplY3QgZnJvbSBcIi4vT2JqZWN0L1RhbmtBSU9iamVjdFwiO1xyXG5leHBvcnQgdmFyIE1BSU5fVEFOS19JRCA9ICdNQUlOJztcclxuZXhwb3J0IHZhciBNQVhJTVVNX1RBTktTID0gNDtcclxuZXhwb3J0IHZhciBUQU5LX1NQQVdOX0RFTEFZID0gMjUwMDtcclxuZXhwb3J0IHZhciBUQU5LX1NQQVdOX1BPSU5UID0ge1xyXG4gICAgUExBWUVSX1RBTks6IFtcclxuICAgICAgICB7IHg6IDQsIHk6IDEyIH0sXHJcbiAgICAgICAgeyB4OiA4LCB5OiAxMiB9XHJcbiAgICBdLFxyXG4gICAgRU5FTVlfVEFOSzogW1xyXG4gICAgICAgIHsgeDogMCwgeTogMCB9LFxyXG4gICAgICAgIHsgeDogNiwgeTogMCB9LFxyXG4gICAgICAgIHsgeDogMTIsIHk6IDAgfVxyXG4gICAgXVxyXG59O1xyXG52YXIgR2FtZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEdhbWUoc2NyZWVuLCBzcHJpdGVfbWFpbl9zcmMsIHNwcml0ZV90aXRsZV9zcmMsIGRlYnVnKSB7XHJcbiAgICAgICAgdGhpcy5kZWJ1ZyA9IGRlYnVnO1xyXG4gICAgICAgIHRoaXMuX29iamVjdHMgPSBbXTtcclxuICAgICAgICB0aGlzLl9sYXN0U3Bhd24gPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICB0aGlzLl9wYXVzZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyID0gbmV3IFJlbmRlcmVyKHRoaXMsIHNjcmVlbiwgc3ByaXRlX21haW5fc3JjLCBzcHJpdGVfdGl0bGVfc3JjKTtcclxuICAgICAgICB0aGlzLl9pbnB1dE1hbmFnZXIgPSBuZXcgSW5wdXRNYW5hZ2VyKHRoaXMpO1xyXG4gICAgICAgIHNjcmVlbi5mb2N1cygpO1xyXG4gICAgICAgIHRoaXMuc2hvd1RpdGxlKCk7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoR2FtZS5wcm90b3R5cGUsIFwibWFpblRhbmtcIiwge1xyXG4gICAgICAgIC8vI3JlZ2lvbiBnZXR0ZXIgYW5kIHNldHRlclxyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgZm91bmQgPSB0aGlzLmZpbmRPYmplY3RCeUlkKE1BSU5fVEFOS19JRCk7XHJcbiAgICAgICAgICAgIGlmIChmb3VuZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZm91bmRbMF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHYW1lLnByb3RvdHlwZSwgXCJvYmplY3RzXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX29iamVjdHM7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEdhbWUucHJvdG90eXBlLCBcInBhdXNlXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3BhdXNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAocGF1c2UpIHtcclxuICAgICAgICAgICAgdGhpcy5fcGF1c2UgPSBwYXVzZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoR2FtZS5wcm90b3R5cGUsIFwia2V5U3RhdGVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW5wdXRNYW5hZ2VyLmtleVN0YXRlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHYW1lLnByb3RvdHlwZSwgXCJnYW1lRGF0YVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9nYW1lRGF0YTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoR2FtZS5wcm90b3R5cGUsIFwiY3VycmVudE1lbnVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudE1lbnU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEdhbWUucHJvdG90eXBlLCBcImN1cnNvckluZGV4XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lucHV0TWFuYWdlci5jdXJzb3JJbmRleDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICAvLyNlbmRyZWdpb25cclxuICAgIC8vI3JlZ2lvbiBwdWJsaWMgbWV0aG9kc1xyXG4gICAgLy8jcmVnaW9uIGRlYnVnIG1ldGhvZHNcclxuICAgIEdhbWUucHJvdG90eXBlLmxvZyA9IGZ1bmN0aW9uIChtc2cpIHtcclxuICAgICAgICBpZiAodGhpcy5kZWJ1Zykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIltcIiArIHBlcmZvcm1hbmNlLm5vdygpICsgXCJdIFwiICsgbXNnKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLy8jZW5kcmVnaW9uXHJcbiAgICAvLyNyZWdpb24gZ2FtZSBvYmplY3QgbWV0aG9kc1xyXG4gICAgR2FtZS5wcm90b3R5cGUuaW5zZXJ0T2JqZWN0ID0gZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgICAgIHRoaXMuX29iamVjdHMucHVzaChvYmplY3QpO1xyXG4gICAgICAgIHRoaXMuc29ydE9iamVjdCgpO1xyXG4gICAgfTtcclxuICAgIEdhbWUucHJvdG90eXBlLnJlbW92ZU9iamVjdCA9IGZ1bmN0aW9uIChvYmplY3QpIHtcclxuICAgICAgICB2YXIgaWR4ID0gdGhpcy5fb2JqZWN0cy5pbmRleE9mKG9iamVjdCk7XHJcbiAgICAgICAgdGhpcy5fb2JqZWN0cy5zcGxpY2UoaWR4LCAxKTtcclxuICAgICAgICB0aGlzLnNvcnRPYmplY3QoKTtcclxuICAgIH07XHJcbiAgICBHYW1lLnByb3RvdHlwZS5zb3J0T2JqZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9nYW1lRGF0YSA9PSBudWxsIHx8IHRoaXMuX29iamVjdHMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX29iamVjdHMuc29ydChmdW5jdGlvbiAob2JqMSwgb2JqMikge1xyXG4gICAgICAgICAgICB2YXIgemluZGV4MSA9IFJlbmRlcmVyLmdldE9iamVjdFpJbmRleChvYmoxKTtcclxuICAgICAgICAgICAgdmFyIHppbmRleDIgPSBSZW5kZXJlci5nZXRPYmplY3RaSW5kZXgob2JqMik7XHJcbiAgICAgICAgICAgIHJldHVybiB6aW5kZXgxIC0gemluZGV4MjtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBHYW1lLnByb3RvdHlwZS5maW5kT2JqZWN0QnlJZCA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9vYmplY3RzLmZpbHRlcihmdW5jdGlvbiAob2JqZWN0KSB7IHJldHVybiBvYmplY3QuaWQgPT09IGlkOyB9KTtcclxuICAgIH07XHJcbiAgICBHYW1lLnByb3RvdHlwZS5jb2xsaXNpb25UZXN0ID0gZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgICAgIHZhciBmb3VuZCA9IFtdO1xyXG4gICAgICAgIGlmICh0aGlzLl9nYW1lRGF0YSA9PSBudWxsIHx8IHRoaXMuX29iamVjdHMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZm91bmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX29iamVjdHMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICBpZiAoaXRlbSA9PSBvYmplY3QpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXRlbS5vYmplY3RUeXBlID09PSBcIkFOSU1BVElPTlwiIC8qIEFOSU1BVElPTiAqLykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGl0ZW0ub2JqZWN0VHlwZSA9PT0gXCJCTE9DS1wiIC8qIEJMT0NLICovKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYmxvY2tUeXBlID0gaXRlbS5ibG9ja1R5cGU7XHJcbiAgICAgICAgICAgICAgICBpZiAoKG9iamVjdC5vYmplY3RUeXBlID09PSBcIlRBTktcIiAvKiBUQU5LICovIHx8IG9iamVjdC5vYmplY3RUeXBlID09PSBcIkJVTExFVFwiIC8qIEJVTExFVCAqLykgJiYgYmxvY2tUeXBlID09PSBcIkJVU0hcIiAvKiBCVVNIICovKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC5vYmplY3RUeXBlID09PSBcIkJVTExFVFwiIC8qIEJVTExFVCAqLyAmJiBibG9ja1R5cGUgPT09IFwiV0FURVJcIiAvKiBXQVRFUiAqLykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChpdGVtLm9iamVjdFR5cGUgPT09IFwiVEFOS1wiIC8qIFRBTksgKi8pIHtcclxuICAgICAgICAgICAgICAgIGlmIChvYmplY3Qub2JqZWN0VHlwZSA9PT0gXCJCVUxMRVRcIiAvKiBCVUxMRVQgKi8pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5pZCA9PT0gb2JqZWN0LnBhcmVudElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoaXRlbS5vYmplY3RUeXBlID09PSBcIkJVTExFVFwiIC8qIEJVTExFVCAqLykge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC5vYmplY3RUeXBlID09PSBcIlRBTktcIiAvKiBUQU5LICovKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGl0ZW0ub2JqZWN0VHlwZSA9PT0gXCJJVEVNXCIgLyogSVRFTSAqLykge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC5vYmplY3RUeXBlID09PSBcIkJVTExFVFwiIC8qIEJVTExFVCAqLykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgdGVzdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoaXRlbS5vYmplY3RUeXBlID09PSBcIkJMT0NLXCIgLyogQkxPQ0sgKi8pIHtcclxuICAgICAgICAgICAgICAgIHRlc3QgPSBCbG9ja0NvbGxpc2lvblRlc3QoaXRlbSwgb2JqZWN0KS5sZW5ndGggPiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGVzdCA9IE9iamVjdENvbGxpc2lvblRlc3Qob2JqZWN0LCBpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGVzdCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgZm91bmQucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBmb3VuZDtcclxuICAgIH07XHJcbiAgICBHYW1lLnByb3RvdHlwZS5zdGFydEFuaW1hdGlvbiA9IGZ1bmN0aW9uICh0YXJnZXQsIGFuaW1hdGlvblR5cGUsIGFuaW1hdGlvblZhbHVlLCBjYWxsYmFjaykge1xyXG4gICAgICAgIHZhciBhbmltYXRpb25Qb2ludDtcclxuICAgICAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgR2FtZU9iamVjdCkge1xyXG4gICAgICAgICAgICB2YXIgb2JqZWN0ID0gdGFyZ2V0O1xyXG4gICAgICAgICAgICB2YXIgc2l6ZSA9IGdldFNwcml0ZURhdGEob2JqZWN0KS5zaXplO1xyXG4gICAgICAgICAgICBhbmltYXRpb25Qb2ludCA9IHtcclxuICAgICAgICAgICAgICAgIHg6IG9iamVjdC5wb3NpdGlvbi54ICsgc2l6ZS53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgICAgICB5OiBvYmplY3QucG9zaXRpb24ueSArIHNpemUuaGVpZ2h0IC8gMlxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgYW5pbWF0aW9uUG9pbnQgPSB0YXJnZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhbmltYXRpb25WYWx1ZSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgYW5pbWF0aW9uVmFsdWUgPSBBbmltYXRpb25EZWZhdWx0c1thbmltYXRpb25UeXBlXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGFuaW1hdGlvbiA9IG5ldyBBbmltYXRpb25PYmplY3QodGhpcywgbnVsbCwgYW5pbWF0aW9uVHlwZSwgYW5pbWF0aW9uUG9pbnQsIGFuaW1hdGlvblZhbHVlLmR1cmF0aW9uLCBhbmltYXRpb25WYWx1ZS5mcmFtZVJhdGUsIGFuaW1hdGlvblZhbHVlLmxvb3AsIGNhbGxiYWNrKTtcclxuICAgICAgICB0aGlzLmluc2VydE9iamVjdChhbmltYXRpb24pO1xyXG4gICAgfTtcclxuICAgIC8vI3JlZ2lvbiByZW5kZXJlciBwb3J0aW5nIG1ldGhvZHNcclxuICAgIC8qKlxyXG4gICAgICogVGVzdCBvYmplY3QgaXMgdmlzaWJsZSAoUG9ydCBvZiBSZW5kZXJlci50ZXN0VmlzaWJpbGl0eSlcclxuICAgICAqIEBwYXJhbSBvYmplY3Qgb2JqZWN0IGZvciB0ZXN0XHJcbiAgICAgKiBAcGFyYW0gc3ByaXRlIG9iamVjdCdzIHNwcml0ZSBkYXRhIGZvciBzaXplXHJcbiAgICAgKi9cclxuICAgIEdhbWUucHJvdG90eXBlLnRlc3RWaXNpYmlsaXR5ID0gZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXJlci5vYmplY3RWaXNpYmxlVGVzdChvYmplY3QpO1xyXG4gICAgfTtcclxuICAgIC8vI2VuZHJlZ2lvblxyXG4gICAgLy8jZW5kcmVnaW9uXHJcbiAgICBHYW1lLnByb3RvdHlwZS5uZXdHYW1lID0gZnVuY3Rpb24gKHBsYXllckNvdW50LCBnYW1lVHlwZSwgbGV2ZWwpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRNZW51ID0gXCJHQU1FXCIgLyogR0FNRSAqLztcclxuICAgICAgICB0aGlzLl9vYmplY3RzID0gW107XHJcbiAgICAgICAgaWYgKGdhbWVUeXBlID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBnYW1lVHlwZSA9IDAgLyogUFZFICovO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGV2ZWwgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGxldmVsID0gRGVmYXVsdExldmVsc1swXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHBsYXllckRhdGEgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBsYXllckNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgcGxheWVyRGF0YS5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGxpZmU6IDUsXHJcbiAgICAgICAgICAgICAgICBzY29yZTogMCxcclxuICAgICAgICAgICAgICAgIGRlc3Ryb2VkVGFuazoge31cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2dhbWVEYXRhID0ge1xyXG4gICAgICAgICAgICBnYW1lVHlwZTogZ2FtZVR5cGUsXHJcbiAgICAgICAgICAgIHBsYXllckRhdGE6IHBsYXllckRhdGEsXHJcbiAgICAgICAgICAgIGxldmVsRGF0YTogbGV2ZWwsXHJcbiAgICAgICAgICAgIGdhbWVPdmVyOiBmYWxzZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zcGF3blRhbmsoXCJQTEFZRVJfVEFOS1wiIC8qIFBMQVlFUl9UQU5LICovLCB0cnVlLCAwKTtcclxuICAgICAgICBpZiAocGxheWVyQ291bnQgPiAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3Bhd25UYW5rKFwiUExBWUVSX1RBTktcIiAvKiBQTEFZRVJfVEFOSyAqLywgdHJ1ZSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldmVsLmJsb2Nrcy5mb3JFYWNoKGZ1bmN0aW9uIChibG9jaykge1xyXG4gICAgICAgICAgICBfdGhpcy5pbnNlcnRPYmplY3QobmV3IEJsb2NrT2JqZWN0KF90aGlzLCBibG9jay50eXBlLCB7XHJcbiAgICAgICAgICAgICAgICB4OiBEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lLmxlZnQgKyBibG9jay5wb3NpdGlvbi54ICogMzIsXHJcbiAgICAgICAgICAgICAgICB5OiBEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lLnRvcCArIGJsb2NrLnBvc2l0aW9uLnkgKiAzMlxyXG4gICAgICAgICAgICB9LCBibG9jay5ibG9ja1N0YXRlKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgR2FtZS5wcm90b3R5cGUuc2V0UGF1c2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5fcGF1c2UgPSB0cnVlO1xyXG4gICAgICAgIHZhciBGUkFNRSA9IERSQVdJTkdfQ09OU1Quc2l6ZXMuZnJhbWU7XHJcbiAgICAgICAgdmFyIFNDUkVFTiA9IERSQVdJTkdfQ09OU1Quc2l6ZXMuc2NyZWVuO1xyXG4gICAgICAgIHRoaXMuc3RhcnRBbmltYXRpb24oe1xyXG4gICAgICAgICAgICB4OiBGUkFNRS5sZWZ0ICsgU0NSRUVOLndpZHRoIC8gMixcclxuICAgICAgICAgICAgeTogKEZSQU1FLnRvcCArIEZSQU1FLmJvdHRvbSArIFNDUkVFTi5oZWlnaHQpIC8gMiArIFNQUlRJRV9ERUYuQU5JTUFUSU9OLlBBVVNFWzBdLnNpemUuaGVpZ2h0IC8gMlxyXG4gICAgICAgIH0sIFwiUEFVU0VcIiAvKiBQQVVTRSAqLyk7XHJcbiAgICB9O1xyXG4gICAgR2FtZS5wcm90b3R5cGUuZ2FtZW92ZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBpZiAodGhpcy5nYW1lRGF0YS5nYW1lT3Zlcikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2FtZURhdGEuZ2FtZU92ZXIgPSB0cnVlO1xyXG4gICAgICAgIHZhciBGUkFNRSA9IERSQVdJTkdfQ09OU1Quc2l6ZXMuZnJhbWU7XHJcbiAgICAgICAgdmFyIFNDUkVFTiA9IERSQVdJTkdfQ09OU1Quc2l6ZXMuc2NyZWVuO1xyXG4gICAgICAgIHRoaXMuc3RhcnRBbmltYXRpb24oe1xyXG4gICAgICAgICAgICB4OiBGUkFNRS5sZWZ0ICsgU0NSRUVOLndpZHRoIC8gMixcclxuICAgICAgICAgICAgeTogRlJBTUUudG9wICsgRlJBTUUuYm90dG9tICsgU0NSRUVOLmhlaWdodFxyXG4gICAgICAgIH0sIFwiR0FNRU9WRVJcIiAvKiBHQU1FT1ZFUiAqLywgbnVsbCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBfdGhpcy5zaG93UmVzdWx0U2NyZWVuKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgR2FtZS5wcm90b3R5cGUuc2hvd1Jlc3VsdFNjcmVlbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICBHYW1lLnByb3RvdHlwZS5zaG93VGl0bGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLl9jdXJyZW50TWVudSA9IFwiTUFJTlwiIC8qIE1BSU4gKi87XHJcbiAgICAgICAgdGhpcy5fb2JqZWN0cyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnRpdGxlU2hvd24gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9pbnB1dE1hbmFnZXIuaW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIHZhciBGUkFNRSA9IERSQVdJTkdfQ09OU1Quc2l6ZXMuZnJhbWU7XHJcbiAgICAgICAgdmFyIFNDUkVFTiA9IERSQVdJTkdfQ09OU1Quc2l6ZXMuc2NyZWVuO1xyXG4gICAgICAgIHRoaXMuc3RhcnRBbmltYXRpb24oe1xyXG4gICAgICAgICAgICB4OiAoRlJBTUUubGVmdCArIFNDUkVFTi53aWR0aCArIEZSQU1FLnJpZ2h0KSAvIDIsXHJcbiAgICAgICAgICAgIHk6IChGUkFNRS50b3AgKyBTQ1JFRU4ud2lkdGggKyBGUkFNRS5ib3R0b20pICogMS41XHJcbiAgICAgICAgfSwgXCJUSVRMRVwiIC8qIFRJVExFICovLCBudWxsLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIF90aGlzLnN0YXJ0QW5pbWF0aW9uKHtcclxuICAgICAgICAgICAgICAgIHg6IDEyOSArIDE2LFxyXG4gICAgICAgICAgICAgICAgeTogMjY1ICsgX3RoaXMuY3Vyc29ySW5kZXggKiAzMiArIDE2XHJcbiAgICAgICAgICAgIH0sIFwiQ1VSU09SXCIgLyogQ1VSU09SICovKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvLyNlbmRyZWdpb25cclxuICAgIC8vI3JlZ2lvbiBwcml2YXRlIG1ldGhvZHNcclxuICAgIEdhbWUucHJvdG90eXBlLnNwYXduVGFuayA9IGZ1bmN0aW9uICh0YW5rVHlwZSwgZnJlZVNwYXduLCBwbGF5ZXJJbmRleCkge1xyXG4gICAgICAgIGlmIChmcmVlU3Bhd24gPT09IHZvaWQgMCkgeyBmcmVlU3Bhd24gPSBmYWxzZTsgfVxyXG4gICAgICAgIGlmICh0YW5rVHlwZSA9PT0gXCJQTEFZRVJfVEFOS1wiIC8qIFBMQVlFUl9UQU5LICovKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9nYW1lRGF0YS5wbGF5ZXJEYXRhW3BsYXllckluZGV4XS5saWZlIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgdGFua0NvbG9yID0gdm9pZCAwO1xyXG4gICAgICAgICAgICBpZiAocGxheWVySW5kZXggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRhbmtDb2xvciA9IFwiWUVMTE9XXCIgLyogWUVMTE9XICovO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGFua0NvbG9yID0gXCJHUkVFTlwiIC8qIEdSRUVOICovO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBwb3NpdGlvbiA9IFRBTktfU1BBV05fUE9JTlRbdGFua1R5cGVdW3BsYXllckluZGV4XTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVQbGF5ZXJUYW5rKHtcclxuICAgICAgICAgICAgICAgIHg6IERSQVdJTkdfQ09OU1Quc2l6ZXMuZnJhbWUubGVmdCArIHBvc2l0aW9uLnggKiBnZXRPYmplY3RTaXplKFwiVEFOS1wiIC8qIFRBTksgKi8pLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgeTogRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS50b3AgKyBwb3NpdGlvbi55ICogZ2V0T2JqZWN0U2l6ZShcIlRBTktcIiAvKiBUQU5LICovKS5oZWlnaHQsXHJcbiAgICAgICAgICAgIH0sIFwidXBcIiAvKiB1cCAqLywgdGFua0NvbG9yLCAwKTtcclxuICAgICAgICAgICAgaWYgKGZyZWVTcGF3biA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2dhbWVEYXRhLnBsYXllckRhdGFbcGxheWVySW5kZXhdLmxpZmUtLTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0YW5rVHlwZSA9PT0gXCJFTkVNWV9UQU5LXCIgLyogRU5FTVlfVEFOSyAqLykge1xyXG4gICAgICAgICAgICB2YXIgbm93ID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgICAgIGlmIChub3cgLSB0aGlzLl9sYXN0U3Bhd24gPiBUQU5LX1NQQVdOX0RFTEFZKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sYXN0U3Bhd24gPSBub3c7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGFua3MgPSB0aGlzLl9vYmplY3RzLmZpbHRlcihmdW5jdGlvbiAoeCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB4Lm9iamVjdFR5cGUgPT09IFwiVEFOS1wiIC8qIFRBTksgKi8gJiYgeC50YW5rVHlwZSA9PT0gXCJFTkVNWV9UQU5LXCIgLyogRU5FTVlfVEFOSyAqLztcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRhbmtzLmxlbmd0aCA+PSBNQVhJTVVNX1RBTktTKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVFbmVteVRhbmsoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiREVGQVVMVFwiIC8qIERFRkFVTFQgKi8sXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgR2FtZS5wcm90b3R5cGUuY3JlYXRlUGxheWVyVGFuayA9IGZ1bmN0aW9uIChwb3NpdGlvbiwgZGlyZWN0aW9uLCB0YW5rQ29sb3IsIHRhbmtMZXZlbCkge1xyXG4gICAgICAgIGlmICh0aGlzLm1haW5UYW5rKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlT2JqZWN0KHRoaXMubWFpblRhbmspO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmluc2VydE9iamVjdChuZXcgVGFua09iamVjdCh0aGlzLCBcIlBMQVlFUl9UQU5LXCIgLyogUExBWUVSX1RBTksgKi8sIHBvc2l0aW9uLCBkaXJlY3Rpb24sIHRhbmtDb2xvciwgdGFua0xldmVsLCBNQUlOX1RBTktfSUQpKTtcclxuICAgIH07XHJcbiAgICBHYW1lLnByb3RvdHlwZS5jcmVhdGVFbmVteVRhbmsgPSBmdW5jdGlvbiAodGFua0RlZmluaXRpb24pIHtcclxuICAgICAgICB2YXIgdGFua1NpemUgPSBnZXRPYmplY3RTaXplKFwiVEFOS1wiIC8qIFRBTksgKi8pO1xyXG4gICAgICAgIHZhciBzcGF3blBvaW50cyA9IFRBTktfU1BBV05fUE9JTlQuRU5FTVlfVEFOSztcclxuICAgICAgICB2YXIgaWR4ID0gZ2V0UmFuZG9tUmFuZ2UoMCwgMik7XHJcbiAgICAgICAgdmFyIHBvc2l0aW9uID0ge1xyXG4gICAgICAgICAgICB4OiBEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lLmxlZnQgKyBzcGF3blBvaW50c1tpZHhdLnggKiB0YW5rU2l6ZS53aWR0aCxcclxuICAgICAgICAgICAgeTogRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS50b3AgKyBzcGF3blBvaW50c1tpZHhdLnkgKiB0YW5rU2l6ZS5oZWlnaHRcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaW5zZXJ0T2JqZWN0KG5ldyBUYW5rQUlPQmplY3QodGhpcywgdGFua0RlZmluaXRpb24udHlwZSwgdGFua0RlZmluaXRpb24uaXRlbSA/IHRhbmtEZWZpbml0aW9uLml0ZW0gOiBmYWxzZSwgcG9zaXRpb24sIFwiZG93blwiIC8qIGRvd24gKi8pKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gR2FtZTtcclxufSgpKTtcclxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcclxuIiwiZXhwb3J0IGZ1bmN0aW9uIEVLZXlzVG9FRGlyZWN0aW9uKGtleXMpIHtcclxuICAgIHN3aXRjaCAoa2V5cykge1xyXG4gICAgICAgIGNhc2UgXCJBcnJvd1VwXCIgLyogYXJyb3dfdXAgKi86XHJcbiAgICAgICAgICAgIHJldHVybiBcInVwXCIgLyogdXAgKi87XHJcbiAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIiAvKiBhcnJvd19yaWdodCAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIFwicmlnaHRcIiAvKiByaWdodCAqLztcclxuICAgICAgICBjYXNlIFwiQXJyb3dEb3duXCIgLyogYXJyb3dfZG93biAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIFwiZG93blwiIC8qIGRvd24gKi87XHJcbiAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiIC8qIGFycm93X2xlZnQgKi86XHJcbiAgICAgICAgICAgIHJldHVybiBcImxlZnRcIiAvKiBsZWZ0ICovO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEVLZXlzVG9FRGlyZWN0aW9uIH0gZnJvbSBcIi4vRUtleXNcIjtcclxudmFyIElucHV0TWFuYWdlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIElucHV0TWFuYWdlcihnYW1lKSB7XHJcbiAgICAgICAgdGhpcy5fZ2FtZSA9IGdhbWU7XHJcbiAgICAgICAgdGhpcy5fa2V5RXZlbnRzID0ge307XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XHJcbiAgICB9XHJcbiAgICBJbnB1dE1hbmFnZXIucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5fa2V5U3RhdGUgPSB7XHJcbiAgICAgICAgICAgIEFycm93RG93bjogZmFsc2UsXHJcbiAgICAgICAgICAgIEFycm93VXA6IGZhbHNlLFxyXG4gICAgICAgICAgICBBcnJvd1JpZ2h0OiBmYWxzZSxcclxuICAgICAgICAgICAgQXJyb3dMZWZ0OiBmYWxzZSxcclxuICAgICAgICAgICAgRXNjYXBlOiBmYWxzZSxcclxuICAgICAgICAgICAgU3BhY2U6IGZhbHNlXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9jdXJzb3JJbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5zZXRFdmVudHMoKTtcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSW5wdXRNYW5hZ2VyLnByb3RvdHlwZSwgXCJrZXlTdGF0ZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9rZXlTdGF0ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSW5wdXRNYW5hZ2VyLnByb3RvdHlwZSwgXCJjdXJzb3JJbmRleFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jdXJzb3JJbmRleDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBJbnB1dE1hbmFnZXIucHJvdG90eXBlLnNldEV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmICh0aGlzLl9rZXlFdmVudHMua2V5ZG93biAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9rZXlFdmVudHMua2V5ZG93bik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9rZXlFdmVudHMua2V5dXAgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuX2tleUV2ZW50cy5rZXl1cCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2tleUV2ZW50cy5rZXlkb3duID0gZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgICAgIF90aGlzLmtleURvd25FdmVudChldik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9rZXlFdmVudHMua2V5dXAgPSBmdW5jdGlvbiAoZXYpIHtcclxuICAgICAgICAgICAgX3RoaXMua2V5VXBFdmVudChldik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fa2V5RXZlbnRzLmtleWRvd24pO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5fa2V5RXZlbnRzLmtleXVwKTtcclxuICAgIH07XHJcbiAgICBJbnB1dE1hbmFnZXIucHJvdG90eXBlLnJlc2V0QXJyb3dJbnB1dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLl9rZXlTdGF0ZS5BcnJvd1VwID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fa2V5U3RhdGUuQXJyb3dSaWdodCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2tleVN0YXRlLkFycm93RG93biA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2tleVN0YXRlLkFycm93TGVmdCA9IGZhbHNlO1xyXG4gICAgfTtcclxuICAgIElucHV0TWFuYWdlci5wcm90b3R5cGUua2V5RG93bkV2ZW50ID0gZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgdmFyIG1haW5UYW5rID0gdGhpcy5fZ2FtZS5tYWluVGFuaztcclxuICAgICAgICB2YXIgbWVudSA9IHRoaXMuX2dhbWUuY3VycmVudE1lbnU7XHJcbiAgICAgICAgaWYgKG1lbnUgPT09IFwiR0FNRVwiIC8qIEdBTUUgKi8pIHtcclxuICAgICAgICAgICAgc3dpdGNoIChldi5jb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dVcFwiIC8qIGFycm93X3VwICovOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIiAvKiBhcnJvd19yaWdodCAqLzpcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIiAvKiBhcnJvd19kb3duICovOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiIC8qIGFycm93X2xlZnQgKi86XHJcbiAgICAgICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobWFpblRhbmspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFpblRhbmsuZGlyZWN0aW9uID0gRUtleXNUb0VEaXJlY3Rpb24oZXYuY29kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRBcnJvd0lucHV0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5U3RhdGVbZXYuY29kZV0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIlNwYWNlXCIgLyogc3BhY2ViYXIgKi86XHJcbiAgICAgICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobWFpblRhbmsgJiYgbWFpblRhbmsudmlzaWJsZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluVGFuay5maXJlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2tleVN0YXRlW2V2LmNvZGVdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJFc2NhcGVcIiAvKiBlc2MgKi86XHJcbiAgICAgICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9rZXlTdGF0ZVtldi5jb2RlXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9nYW1lLmdhbWVEYXRhLmdhbWVPdmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9nYW1lLnBhdXNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9nYW1lLnBhdXNlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9nYW1lLnBhdXNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChtZW51ID09PSBcIk1BSU5cIiAvKiBNQUlOICovKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZXYuY29kZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkFycm93VXBcIiAvKiBhcnJvd191cCAqLzpcclxuICAgICAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9nYW1lLm9iamVjdHMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fY3Vyc29ySW5kZXggLSAxIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3Vyc29ySW5kZXggPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3Vyc29ySW5kZXgtLTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmN1cnNvckluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIiAvKiBhcnJvd19kb3duICovOlxyXG4gICAgICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2dhbWUub2JqZWN0cy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jdXJzb3JJbmRleCArIDEgPiAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJzb3JJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJzb3JJbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIlNwYWNlXCIgLyogc3BhY2ViYXIgKi86XHJcbiAgICAgICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX2N1cnNvckluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2dhbWUubmV3R2FtZSgxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBJbnB1dE1hbmFnZXIucHJvdG90eXBlLmtleVVwRXZlbnQgPSBmdW5jdGlvbiAoZXYpIHtcclxuICAgICAgICB2YXIgY29kZSA9IGV2LmNvZGU7XHJcbiAgICAgICAgdGhpcy5fa2V5U3RhdGVbY29kZV0gPSBmYWxzZTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gSW5wdXRNYW5hZ2VyO1xyXG59KCkpO1xyXG5leHBvcnQgZGVmYXVsdCBJbnB1dE1hbmFnZXI7XHJcbiIsInZhciBCTE9DS19GVUxMID0ge1xyXG4gICAgYm90dG9tTGVmdDogdHJ1ZSxcclxuICAgIGJvdHRvbVJpZ2h0OiB0cnVlLFxyXG4gICAgdG9wTGVmdDogdHJ1ZSxcclxuICAgIHRvcFJpZ2h0OiB0cnVlXHJcbn07XHJcbnZhciBCTE9DS19IQUxGX0hUID0ge1xyXG4gICAgYm90dG9tTGVmdDogZmFsc2UsXHJcbiAgICBib3R0b21SaWdodDogZmFsc2UsXHJcbiAgICB0b3BMZWZ0OiB0cnVlLFxyXG4gICAgdG9wUmlnaHQ6IHRydWVcclxufTtcclxudmFyIEJMT0NLX0hBTEZfSEIgPSB7XHJcbiAgICBib3R0b21MZWZ0OiB0cnVlLFxyXG4gICAgYm90dG9tUmlnaHQ6IHRydWUsXHJcbiAgICB0b3BMZWZ0OiBmYWxzZSxcclxuICAgIHRvcFJpZ2h0OiBmYWxzZVxyXG59O1xyXG52YXIgQkxPQ0tfSEFMRl9WTCA9IHtcclxuICAgIGJvdHRvbUxlZnQ6IHRydWUsXHJcbiAgICBib3R0b21SaWdodDogZmFsc2UsXHJcbiAgICB0b3BMZWZ0OiB0cnVlLFxyXG4gICAgdG9wUmlnaHQ6IGZhbHNlXHJcbn07XHJcbnZhciBCTE9DS19IQUxGX1ZSID0ge1xyXG4gICAgYm90dG9tTGVmdDogZmFsc2UsXHJcbiAgICBib3R0b21SaWdodDogdHJ1ZSxcclxuICAgIHRvcExlZnQ6IGZhbHNlLFxyXG4gICAgdG9wUmlnaHQ6IHRydWVcclxufTtcclxudmFyIERlZmF1bHRMZXZlbHMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbGV2ZWxJZDogMSxcclxuICAgICAgICBsZXZlbE5hbWU6ICdMRVZFTCAxJyxcclxuICAgICAgICBibG9ja3M6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMSwgeTogMSB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMywgeTogMSB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNSwgeTogMSB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNywgeTogMSB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogOSwgeTogMSB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMTEsIHk6IDEgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDEsIHk6IDIgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDMsIHk6IDIgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDUsIHk6IDIgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDcsIHk6IDIgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDksIHk6IDIgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDExLCB5OiAyIH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAxLCB5OiAzIH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAzLCB5OiAzIH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA1LCB5OiAzIH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA2LCB5OiAzIH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIklST05cIiAvKiBJUk9OICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNywgeTogMyB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogOSwgeTogMyB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMTEsIHk6IDMgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDEsIHk6IDQgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDMsIHk6IDQgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDUsIHk6IDQgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0hBTEZfSFQsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDcsIHk6IDQgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0hBTEZfSFQsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDksIHk6IDQgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDExLCB5OiA0IH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAxLCB5OiA1IH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19IQUxGX0hULFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAzLCB5OiA1IH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19IQUxGX0hULFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA1LCB5OiA1IH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19IQUxGX0hCLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA3LCB5OiA1IH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19IQUxGX0hCLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA5LCB5OiA1IH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19IQUxGX0hULFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAxMSwgeTogNSB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IVCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMCwgeTogNiB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IQixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMiwgeTogNiB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IQixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMywgeTogNiB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IQixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNSwgeTogNiB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IVCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNywgeTogNiB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IVCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogOSwgeTogNiB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IQixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMTAsIHk6IDYgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0hBTEZfSEIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDEyLCB5OiA2IH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19IQUxGX0hCLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAwLCB5OiA3IH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIklST05cIiAvKiBJUk9OICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IVCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMiwgeTogNyB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IVCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMywgeTogNyB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IVCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNSwgeTogNyB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IQixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNywgeTogNyB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IQixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogOSwgeTogNyB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IVCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMTAsIHk6IDcgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0hBTEZfSFQsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDEyLCB5OiA3IH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIklST05cIiAvKiBJUk9OICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IVCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMSwgeTogOCB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IQixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMywgeTogOCB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IQixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNSwgeTogOCB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNiwgeTogOCB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNywgeTogOCB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogOSwgeTogOCB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IQixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMTEsIHk6IDggfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0hBTEZfSEIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDEsIHk6IDkgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDMsIHk6IDkgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDUsIHk6IDkgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDcsIHk6IDkgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDksIHk6IDkgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDExLCB5OiA5IH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAxLCB5OiAxMCB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMywgeTogMTAgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDUsIHk6IDEwIH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19IQUxGX0hULFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA3LCB5OiAxMCB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IVCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogOSwgeTogMTAgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDExLCB5OiAxMCB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMSwgeTogMTEgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDMsIHk6IDExIH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA1LCB5OiAxMSB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbUxlZnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbVJpZ2h0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcExlZnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcFJpZ2h0OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNiwgeTogMTEgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0hBTEZfSEIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDcsIHk6IDExIH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgICAgICBibG9ja1N0YXRlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tTGVmdDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBib3R0b21SaWdodDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wTGVmdDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wUmlnaHQ6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA5LCB5OiAxMSB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMTEsIHk6IDExIH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA1LCB5OiAxMiB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9WUixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNiwgeTogMTIgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiRUFHTEVcIiAvKiBFQUdMRSAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDcsIHk6IDEyIH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19IQUxGX1ZMLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdGFua3M6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQVJNT1VSRUQ6IDAsXHJcbiAgICAgICAgICAgICAgICBERUZBVUxUOiAxOCxcclxuICAgICAgICAgICAgICAgIFNQRUVEOiAwLFxyXG4gICAgICAgICAgICAgICAgUE9XRVI6IDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQVJNT1VSRUQ6IDAsXHJcbiAgICAgICAgICAgICAgICBERUZBVUxUOiAwLFxyXG4gICAgICAgICAgICAgICAgU1BFRUQ6IDIsXHJcbiAgICAgICAgICAgICAgICBQT1dFUjogMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG5dO1xyXG5leHBvcnQgZGVmYXVsdCBEZWZhdWx0TGV2ZWxzO1xyXG4iLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuaW1wb3J0IEdhbWVPYmplY3QgZnJvbSBcIi4vR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBHdWlkIH0gZnJvbSBcIi4uLy4uL1V0aWxzL1V0aWxzXCI7XHJcbmltcG9ydCBTUFJUSUVfREVGIGZyb20gXCIuLi8uLi9SZW5kZXIvU3ByaXRlL1Nwcml0ZURlZmluaXRpb25cIjtcclxuaW1wb3J0IHsgZ2V0U3ByaXRlU2l6ZSB9IGZyb20gXCIuLi8uLi9SZW5kZXIvU3ByaXRlL1Nwcml0ZURhdGFcIjtcclxudmFyIEFuaW1hdGlvbk9iamVjdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhBbmltYXRpb25PYmplY3QsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBBbmltYXRpb25PYmplY3QoZ2FtZSwgaWQsIGFuaW1hdGlvblR5cGUsIGFuaW1hdGlvblBvaW50LCBkdXJhdGlvbiwgZnJhbWVSYXRlLCBsb29wLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGlmIChsb29wID09PSB2b2lkIDApIHsgbG9vcCA9IGZhbHNlOyB9XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBpZiAoaWQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZCA9IEd1aWQubmV3R3VpZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGdhbWUsIFwiQU5JTUFUSU9OXCIgLyogQU5JTUFUSU9OICovLCBhbmltYXRpb25Qb2ludCwgaWQpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuYW5pbWF0aW9uVHlwZSA9IGFuaW1hdGlvblR5cGU7XHJcbiAgICAgICAgX3RoaXMuX2FuaW1hdGlvblBvaW50ID0gYW5pbWF0aW9uUG9pbnQ7XHJcbiAgICAgICAgX3RoaXMuX3Nwcml0ZVBvc2l0aW9uID0gMDtcclxuICAgICAgICBfdGhpcy5fY3VycmVudFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICBfdGhpcy5fZXhwaXJlVGltZSA9IF90aGlzLl9jdXJyZW50VGltZSArIGR1cmF0aW9uO1xyXG4gICAgICAgIF90aGlzLl9mcmFtZUNvdW50ID0gU1BSVElFX0RFRi5BTklNQVRJT05bX3RoaXMuYW5pbWF0aW9uVHlwZV0ubGVuZ3RoO1xyXG4gICAgICAgIF90aGlzLl9mcmFtZVJhdGUgPSBmcmFtZVJhdGU7XHJcbiAgICAgICAgX3RoaXMuX2xvb3AgPSBsb29wO1xyXG4gICAgICAgIF90aGlzLl9jYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgICAgIF90aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFuaW1hdGlvbk9iamVjdC5wcm90b3R5cGUsIFwiYW5pbWF0aW9uUG9pbnRcIiwge1xyXG4gICAgICAgIC8vI3JlZ2lvbiBnZXR0ZXIsIHNldHRlclxyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYW5pbWF0aW9uUG9pbnQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChhbmltYXRpb25Qb2ludCkge1xyXG4gICAgICAgICAgICB0aGlzLl9hbmltYXRpb25Qb2ludCA9IGFuaW1hdGlvblBvaW50O1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFuaW1hdGlvbk9iamVjdC5wcm90b3R5cGUsIFwiZXhwaXJlVGltZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9leHBpcmVUaW1lO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIC8vI2VuZHJlZ2lvblxyXG4gICAgLy8jcmVnaW9uIHB1YmxpYyBtZXRob2RzXHJcbiAgICAvLyBpZ25vcmUgaGl0IGV2ZW50XHJcbiAgICBBbmltYXRpb25PYmplY3QucHJvdG90eXBlLmhpdCA9IGZ1bmN0aW9uICgpIHsgfTtcclxuICAgIEFuaW1hdGlvbk9iamVjdC5wcm90b3R5cGUubmV4dFNwcml0ZVBvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9mcmFtZUNvdW50IDwgMikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2dhbWUubG9nKFwiW1wiICsgdGhpcy5zcHJpdGVQb3NpdGlvbiArIFwiIC8gXCIgKyAodGhpcy5fZnJhbWVDb3VudCAtIDEpICsgXCJdXCIgKyAocGVyZm9ybWFuY2Uubm93KCkgLSB0aGlzLl9jdXJyZW50VGltZSkgKyBcIiA+PSBcIiArIHRoaXMuX2ZyYW1lUmF0ZSk7XHJcbiAgICAgICAgaWYgKHBlcmZvcm1hbmNlLm5vdygpIC0gdGhpcy5fY3VycmVudFRpbWUgPj0gdGhpcy5fZnJhbWVSYXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9zcHJpdGVQb3NpdGlvbiArIDEgPCB0aGlzLl9mcmFtZUNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zcHJpdGVQb3NpdGlvbisrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX2xvb3ApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Nwcml0ZVBvc2l0aW9uID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9zcHJpdGVQb3NpdGlvbjtcclxuICAgIH07XHJcbiAgICBBbmltYXRpb25PYmplY3QucHJvdG90eXBlLmV4cGlyZSA9IGZ1bmN0aW9uIChyZW1vdmUpIHtcclxuICAgICAgICBpZiAocmVtb3ZlID09PSB2b2lkIDApIHsgcmVtb3ZlID0gdHJ1ZTsgfVxyXG4gICAgICAgIHRoaXMuX2dhbWUubG9nKFwiQU5JTUFUSU9OIFwiICsgdGhpcy5pZCArIFwiIEhBUyBCRUVOIEVYUElSRUQuIChcIiArIHBlcmZvcm1hbmNlLm5vdyArIFwiKVwiKTtcclxuICAgICAgICBpZiAocmVtb3ZlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9jYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLl9jYWxsYmFjayh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLy8jZW5kcmVnaW9uXHJcbiAgICBBbmltYXRpb25PYmplY3QucHJvdG90eXBlLnVwZGF0ZVBvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBzcHJpdGVEYXRhID0gZ2V0U3ByaXRlU2l6ZSh0aGlzKTtcclxuICAgICAgICB0aGlzLl9wb3NpdG9uID0ge1xyXG4gICAgICAgICAgICB4OiB0aGlzLl9hbmltYXRpb25Qb2ludC54IC0gc3ByaXRlRGF0YS53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgIHk6IHRoaXMuX2FuaW1hdGlvblBvaW50LnkgLSBzcHJpdGVEYXRhLmhlaWdodCAvIDJcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBBbmltYXRpb25PYmplY3Q7XHJcbn0oR2FtZU9iamVjdCkpO1xyXG5leHBvcnQgZGVmYXVsdCBBbmltYXRpb25PYmplY3Q7XHJcbiIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5pbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiLi9HYW1lT2JqZWN0XCI7XHJcbmltcG9ydCB7IEd1aWQsIHJlbW92ZUR1cGxpY2F0ZSB9IGZyb20gXCIuLi8uLi9VdGlscy9VdGlsc1wiO1xyXG5pbXBvcnQgQnVsbGV0T2JqZWN0IGZyb20gXCIuL0J1bGxldE9iamVjdFwiO1xyXG5pbXBvcnQgeyBnZXRTcHJpdGVTaXplIH0gZnJvbSBcIi4uLy4uL1JlbmRlci9TcHJpdGUvU3ByaXRlRGF0YVwiO1xyXG5pbXBvcnQgeyBCbG9ja0NvbGxpc2lvblRlc3QgfSBmcm9tIFwiLi4vLi4vVXRpbHMvQ29sbGlzaW9uVGVzdFwiO1xyXG5leHBvcnQgZnVuY3Rpb24gQmxvY2tTdGF0ZTJ4MlRvNHg0KHgyKSB7XHJcbiAgICB2YXIgeDQgPSBbXHJcbiAgICAgICAgW2ZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlXSxcclxuICAgICAgICBbZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2VdLFxyXG4gICAgICAgIFtmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZV0sXHJcbiAgICAgICAgW2ZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlXVxyXG4gICAgXTtcclxuICAgIHg0WzBdWzBdID0geDIudG9wTGVmdDtcclxuICAgIHg0WzBdWzFdID0geDIudG9wTGVmdDtcclxuICAgIHg0WzFdWzBdID0geDIudG9wTGVmdDtcclxuICAgIHg0WzFdWzFdID0geDIudG9wTGVmdDtcclxuICAgIHg0WzBdWzJdID0geDIudG9wUmlnaHQ7XHJcbiAgICB4NFswXVszXSA9IHgyLnRvcFJpZ2h0O1xyXG4gICAgeDRbMV1bMl0gPSB4Mi50b3BSaWdodDtcclxuICAgIHg0WzFdWzNdID0geDIudG9wUmlnaHQ7XHJcbiAgICB4NFsyXVswXSA9IHgyLmJvdHRvbUxlZnQ7XHJcbiAgICB4NFsyXVsxXSA9IHgyLmJvdHRvbUxlZnQ7XHJcbiAgICB4NFszXVswXSA9IHgyLmJvdHRvbUxlZnQ7XHJcbiAgICB4NFszXVsxXSA9IHgyLmJvdHRvbUxlZnQ7XHJcbiAgICB4NFsyXVsyXSA9IHgyLmJvdHRvbVJpZ2h0O1xyXG4gICAgeDRbMl1bM10gPSB4Mi5ib3R0b21SaWdodDtcclxuICAgIHg0WzNdWzJdID0geDIuYm90dG9tUmlnaHQ7XHJcbiAgICB4NFszXVszXSA9IHgyLmJvdHRvbVJpZ2h0O1xyXG4gICAgcmV0dXJuIHg0O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBCbG9ja1N0YXRlNHg0VG8yeDIoeDQpIHtcclxuICAgIHZhciB4MiA9IHtcclxuICAgICAgICB0b3BMZWZ0OiBmYWxzZSxcclxuICAgICAgICB0b3BSaWdodDogZmFsc2UsXHJcbiAgICAgICAgYm90dG9tTGVmdDogZmFsc2UsXHJcbiAgICAgICAgYm90dG9tUmlnaHQ6IGZhbHNlXHJcbiAgICB9O1xyXG4gICAgaWYgKHg0WzBdWzBdIHx8IHg0WzBdWzFdIHx8IHg0WzFdWzBdIHx8IHg0WzFdWzFdKSB7XHJcbiAgICAgICAgeDIudG9wTGVmdCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAoeDRbMF1bMl0gfHwgeDRbMF1bM10gfHwgeDRbMV1bMl0gfHwgeDRbMV1bM10pIHtcclxuICAgICAgICB4Mi50b3BSaWdodCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAoeDRbMl1bMF0gfHwgeDRbMl1bMV0gfHwgeDRbM11bMF0gfHwgeDRbM11bMV0pIHtcclxuICAgICAgICB4Mi5ib3R0b21MZWZ0ID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmICh4NFsyXVsyXSB8fCB4NFsyXVszXSB8fCB4NFszXVsyXSB8fCB4NFszXVszXSkge1xyXG4gICAgICAgIHgyLmJvdHRvbVJpZ2h0ID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiB4MjtcclxufVxyXG52YXIgQmxvY2tPYmplY3QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoQmxvY2tPYmplY3QsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBCbG9ja09iamVjdChnYW1lLCBibG9ja1R5cGUsIHBvc2l0aW9uLCBibG9ja1N0YXRlMngyKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZ2FtZSwgXCJCTE9DS1wiIC8qIEJMT0NLICovLCBwb3NpdGlvbiwgR3VpZC5uZXdHdWlkKCkpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuYmxvY2tUeXBlID0gYmxvY2tUeXBlO1xyXG4gICAgICAgIF90aGlzLl9ibG9ja1N0YXRlID0gQmxvY2tTdGF0ZTJ4MlRvNHg0KGJsb2NrU3RhdGUyeDIpO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCbG9ja09iamVjdC5wcm90b3R5cGUsIFwiYmxvY2tTdGF0ZTR4NFwiLCB7XHJcbiAgICAgICAgLy8jcmVnaW9uIGdldHRlciBzZXR0ZXJcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Jsb2NrU3RhdGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJsb2NrT2JqZWN0LnByb3RvdHlwZSwgXCJibG9ja1N0YXRlMngyXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIEJsb2NrU3RhdGU0eDRUbzJ4Mih0aGlzLl9ibG9ja1N0YXRlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICAvLyNlbmRyZWdpb25cclxuICAgIEJsb2NrT2JqZWN0LnByb3RvdHlwZS5maW5kQ2VsbFBvc2l0aW9uID0gZnVuY3Rpb24gKHJvdywgY29sdW1uKSB7XHJcbiAgICAgICAgdmFyIGJsb2NrU2l6ZSA9IGdldFNwcml0ZVNpemUodGhpcyk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgeDogdGhpcy5wb3NpdGlvbi54ICsgKGJsb2NrU2l6ZS53aWR0aCAvIDQpICogY29sdW1uLFxyXG4gICAgICAgICAgICB5OiB0aGlzLnBvc2l0aW9uLnkgKyAoYmxvY2tTaXplLndpZHRoIC8gNCkgKiByb3dcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIEJsb2NrT2JqZWN0LnByb3RvdHlwZS5oaXQgPSBmdW5jdGlvbiAoZXZlbnRPcmlnaW4pIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmICghKGV2ZW50T3JpZ2luIGluc3RhbmNlb2YgQnVsbGV0T2JqZWN0KSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmJsb2NrVHlwZSA9PT0gXCJFQUdMRVwiIC8qIEVBR0xFICovKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Nwcml0ZVBvc2l0aW9uID0gMTtcclxuICAgICAgICAgICAgdGhpcy5fZ2FtZS5nYW1lb3ZlcigpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBidWxsZXQgPSBldmVudE9yaWdpbjtcclxuICAgICAgICBpZiAoYnVsbGV0LnBhcmVudC50YW5rTGV2ZWwgPCAzICYmIHRoaXMuYmxvY2tUeXBlID09PSBcIklST05cIiAvKiBJUk9OICovKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGJsb2NrU2l6ZSA9IGdldFNwcml0ZVNpemUodGhpcyk7XHJcbiAgICAgICAgdmFyIGNvbGxpc2lvbkNlbGxzID0gQmxvY2tDb2xsaXNpb25UZXN0KHRoaXMsIGJ1bGxldCk7XHJcbiAgICAgICAgdmFyIHhQb3MgPSByZW1vdmVEdXBsaWNhdGUoY29sbGlzaW9uQ2VsbHMubWFwKGZ1bmN0aW9uIChwb2ludCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKHBvaW50LnggLSBfdGhpcy5wb3NpdGlvbi54KSAvIChibG9ja1NpemUud2lkdGggLyA0KTtcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgdmFyIHlQb3MgPSByZW1vdmVEdXBsaWNhdGUoY29sbGlzaW9uQ2VsbHMubWFwKGZ1bmN0aW9uIChwb2ludCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKHBvaW50LnkgLSBfdGhpcy5wb3NpdGlvbi55KSAvIChibG9ja1NpemUuaGVpZ2h0IC8gNCk7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIHZhciBiNDQgPSB0aGlzLmJsb2NrU3RhdGU0eDQ7XHJcbiAgICAgICAgaWYgKGJ1bGxldC5kaXJlY3Rpb24gPT09IFwidXBcIiAvKiB1cCAqLyB8fCBidWxsZXQuZGlyZWN0aW9uID09PSBcImRvd25cIiAvKiBkb3duICovKSB7XHJcbiAgICAgICAgICAgIGlmICh4UG9zLmluY2x1ZGVzKDApIHx8IHhQb3MuaW5jbHVkZXMoMSkpIHtcclxuICAgICAgICAgICAgICAgIGI0NFt5UG9zWzBdXVswXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYjQ0W3lQb3NbMF1dWzFdID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAoeVBvc1swXSArIDEgPCA0ICYmIGJ1bGxldC5wYXJlbnQudGFua0xldmVsID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGI0NFt5UG9zWzBdICsgMV1bMF0gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBiNDRbeVBvc1swXSArIDFdWzFdID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHhQb3MuaW5jbHVkZXMoMikgfHwgeFBvcy5pbmNsdWRlcygzKSkge1xyXG4gICAgICAgICAgICAgICAgYjQ0W3lQb3NbMF1dWzJdID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBiNDRbeVBvc1swXV1bM10gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmICh5UG9zWzBdICsgMSA8IDQgJiYgYnVsbGV0LnBhcmVudC50YW5rTGV2ZWwgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYjQ0W3lQb3NbMF0gKyAxXVsyXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGI0NFt5UG9zWzBdICsgMV1bM10gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChidWxsZXQuZGlyZWN0aW9uID09PSBcImxlZnRcIiAvKiBsZWZ0ICovIHx8IGJ1bGxldC5kaXJlY3Rpb24gPT09IFwicmlnaHRcIiAvKiByaWdodCAqLykge1xyXG4gICAgICAgICAgICBpZiAoeVBvcy5pbmNsdWRlcygwKSB8fCB5UG9zLmluY2x1ZGVzKDEpKSB7XHJcbiAgICAgICAgICAgICAgICBiNDRbMF1beFBvc1swXV0gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGI0NFsxXVt4UG9zWzBdXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHhQb3NbMF0gKyAxIDwgNCAmJiBidWxsZXQucGFyZW50LnRhbmtMZXZlbCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBiNDRbMF1beFBvc1swXSArIDFdID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgYjQ0WzFdW3hQb3NbMF0gKyAxXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh5UG9zLmluY2x1ZGVzKDIpIHx8IHlQb3MuaW5jbHVkZXMoMykpIHtcclxuICAgICAgICAgICAgICAgIGI0NFsyXVt4UG9zWzBdXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYjQ0WzNdW3hQb3NbMF1dID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAoeFBvc1swXSArIDEgPCA0ICYmIGJ1bGxldC5wYXJlbnQudGFua0xldmVsID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGI0NFsyXVt4UG9zWzBdICsgMV0gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBiNDRbM11beFBvc1swXSArIDFdID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGF2YWlsYWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIGI0NC5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcclxuICAgICAgICAgICAgcm93LmZvckVhY2goZnVuY3Rpb24gKGNlbGwpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjZWxsID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXZhaWxhYmxlID0gY2VsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKGF2YWlsYWJsZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEJsb2NrT2JqZWN0O1xyXG59KEdhbWVPYmplY3QpKTtcclxuZXhwb3J0IGRlZmF1bHQgQmxvY2tPYmplY3Q7XHJcbiIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5pbXBvcnQgTW92aW5nT2JqZWN0LCB7IGNhbGN1bGF0ZU1vdmUgfSBmcm9tIFwiLi9Nb3ZpbmdPYmplY3RcIjtcclxuaW1wb3J0IHsgZ2V0U3ByaXRlU2l6ZSB9IGZyb20gXCIuLi8uLi9SZW5kZXIvU3ByaXRlL1Nwcml0ZURhdGFcIjtcclxuZXhwb3J0IHZhciBCVUxMRVRfU0xPVyA9IDQ7XHJcbmV4cG9ydCB2YXIgQlVMTEVUX0ZBU1QgPSA2O1xyXG52YXIgQnVsbGV0T2JqZWN0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEJ1bGxldE9iamVjdCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEJ1bGxldE9iamVjdChnYW1lLCBwYXJlbnQsIHBvc2l0aW9uLCBkaXJlY3Rpb24sIHNwZWVkLCBpZCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGdhbWUsIFwiQlVMTEVUXCIgLyogQlVMTEVUICovLCBwb3NpdGlvbiwgZGlyZWN0aW9uLCBzcGVlZCwgaWQpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuX3BhcmVudCA9IHBhcmVudDtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQnVsbGV0T2JqZWN0LnByb3RvdHlwZSwgXCJwYXJlbnRcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdWxsZXRPYmplY3QucHJvdG90eXBlLCBcInBhcmVudElkXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3BhcmVudC5pZDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBCdWxsZXRPYmplY3QucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAvLyBsZXQgb3JpZ2luYWwgPSBkZWVwQ2xvbmUodGhpcy5wb3NpdGlvbikgYXMgUG9pbnQ7XHJcbiAgICAgICAgY2FsY3VsYXRlTW92ZSh0aGlzLnBvc2l0aW9uLCB0aGlzLl9kaXJlY3Rpb24sIHRoaXMuX3NwZWVkKTtcclxuICAgICAgICB0aGlzLl9nYW1lLmxvZyhcIkJVTExFVCBbXCIgKyB0aGlzLmlkICsgXCJdIE1PVkVEIC0+IFt4OlwiICsgdGhpcy5wb3NpdGlvbi54ICsgXCJdLCB5OltcIiArIHRoaXMucG9zaXRpb24ueSArIFwiXVwiKTtcclxuICAgICAgICB2YXIgdGVzdF92aXNpYmxlID0gdGhpcy5fZ2FtZS50ZXN0VmlzaWJpbGl0eSh0aGlzKTtcclxuICAgICAgICB2YXIgdGVzdF9jb2xsaXNpb24gPSB0aGlzLl9nYW1lLmNvbGxpc2lvblRlc3QodGhpcyk7XHJcbiAgICAgICAgaWYgKHRlc3RfdmlzaWJsZSA9PSBmYWxzZSAmJiB0ZXN0X2NvbGxpc2lvbi5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmZpdFRvQm9yZGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZXhwbG9kZSh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGVzdF9jb2xsaXNpb24ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB2YXIgZXhwbG9kZWRfMSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRlc3RfY29sbGlzaW9uLmZvckVhY2goZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC5vYmplY3RUeXBlID09PSBcIkJVTExFVFwiIC8qIEJVTExFVCAqLykge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cGxvZGVkXzEgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChvYmplY3Qub2JqZWN0VHlwZSA9PT0gXCJUQU5LXCIgLyogVEFOSyAqLyAmJiBvYmplY3QuaXNJbnZpbmNpYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXhwbG9kZWRfMSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgX3RoaXMuZml0VG9PYmplY3Qob2JqZWN0LCAtMSk7XHJcbiAgICAgICAgICAgICAgICBvYmplY3QuaGl0KF90aGlzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuZXhwbG9kZShleHBsb2RlZF8xKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgQnVsbGV0T2JqZWN0LnByb3RvdHlwZS5oaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5leHBsb2RlKGZhbHNlKTtcclxuICAgIH07XHJcbiAgICBCdWxsZXRPYmplY3QucHJvdG90eXBlLmV4cGxvZGUgPSBmdW5jdGlvbiAoYW5pbWF0aW9uKSB7XHJcbiAgICAgICAgdmFyIGFuaW1hdGlvblBvc2l0aW9uO1xyXG4gICAgICAgIHZhciBzaXplID0gZ2V0U3ByaXRlU2l6ZSh0aGlzKTtcclxuICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IFwidXBcIiAvKiB1cCAqLyB8fCB0aGlzLmRpcmVjdGlvbiA9PT0gXCJkb3duXCIgLyogZG93biAqLykge1xyXG4gICAgICAgICAgICBhbmltYXRpb25Qb3NpdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgIHg6IHRoaXMucG9zaXRpb24ueCArIHNpemUud2lkdGggLyAyLFxyXG4gICAgICAgICAgICAgICAgeTogdGhpcy5wb3NpdGlvbi55XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBhbmltYXRpb25Qb3NpdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgIHg6IHRoaXMucG9zaXRpb24ueCxcclxuICAgICAgICAgICAgICAgIHk6IHRoaXMucG9zaXRpb24ueSArIHNpemUuaGVpZ2h0IC8gMlxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYW5pbWF0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2dhbWUuc3RhcnRBbmltYXRpb24odGhpcywgXCJFWFBMT1NJT05fU01BTExcIiAvKiBFWFBMT1NJT05fU01BTEwgKi8pO1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9nYW1lLmxvZyhcIkJVTExFVCBbXCIgKyB0aGlzLmlkICsgXCJdIEVYUExPREVELlwiKTtcclxuICAgIH07XHJcbiAgICBCdWxsZXRPYmplY3QucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnJlbW92ZS5jYWxsKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX3BhcmVudC5yZW1vdmVCdWxsZXQodGhpcy5pZCk7XHJcbiAgICAgICAgdGhpcy5fZ2FtZS5sb2coXCJCVUxMRVQgW1wiICsgdGhpcy5pZCArIFwiXSBIQVMgQkVFTiBSRU1PVkVELlwiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQnVsbGV0T2JqZWN0O1xyXG59KE1vdmluZ09iamVjdCkpO1xyXG5leHBvcnQgZGVmYXVsdCBCdWxsZXRPYmplY3Q7XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBTY29yZVRvQW5pbWF0aW9uKHNjb3JlKSB7XHJcbiAgICBzd2l0Y2ggKE1hdGguZmxvb3Ioc2NvcmUgLyAxMDApKSB7XHJcbiAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJTQ09SRV8xMDBcIiAvKiBTQ09SRV8xMDAgKi87XHJcbiAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJTQ09SRV8yMDBcIiAvKiBTQ09SRV8yMDAgKi87XHJcbiAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJTQ09SRV8zMDBcIiAvKiBTQ09SRV8zMDAgKi87XHJcbiAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICByZXR1cm4gXCJTQ09SRV80MDBcIiAvKiBTQ09SRV80MDAgKi87XHJcbiAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICByZXR1cm4gXCJTQ09SRV81MDBcIiAvKiBTQ09SRV81MDAgKi87XHJcbiAgICB9XHJcbn1cclxuO1xyXG4vLyBUT0RPIFVwZGF0ZSBkZWZhdWx0c1xyXG5leHBvcnQgdmFyIEFuaW1hdGlvbkRlZmF1bHRzID0ge1xyXG4gICAgRVhQTE9TSU9OX1NNQUxMOiB7XHJcbiAgICAgICAgZHVyYXRpb246IDIwMCxcclxuICAgICAgICBmcmFtZVJhdGU6IDIwMCAvIDQsXHJcbiAgICAgICAgbG9vcDogZmFsc2VcclxuICAgIH0sXHJcbiAgICBFWFBMT1NJT05fTEFSR0U6IHtcclxuICAgICAgICBkdXJhdGlvbjogMTUwLFxyXG4gICAgICAgIGZyYW1lUmF0ZTogMTUwIC8gMyxcclxuICAgICAgICBsb29wOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIElOVklOQ0lCTEU6IHtcclxuICAgICAgICBkdXJhdGlvbjogMzAwMCxcclxuICAgICAgICBmcmFtZVJhdGU6IDI1LFxyXG4gICAgICAgIGxvb3A6IHRydWVcclxuICAgIH0sXHJcbiAgICBTUEFXTjoge1xyXG4gICAgICAgIGR1cmF0aW9uOiAxMDAwLFxyXG4gICAgICAgIGZyYW1lUmF0ZTogMTAwMCAvIDEzLFxyXG4gICAgICAgIGxvb3A6IHRydWVcclxuICAgIH0sXHJcbiAgICBTQ09SRV8xMDA6IHtcclxuICAgICAgICBkdXJhdGlvbjogMTAwMCxcclxuICAgICAgICBmcmFtZVJhdGU6IDAsXHJcbiAgICAgICAgbG9vcDogZmFsc2VcclxuICAgIH0sXHJcbiAgICBTQ09SRV8yMDA6IHtcclxuICAgICAgICBkdXJhdGlvbjogMTAwMCxcclxuICAgICAgICBmcmFtZVJhdGU6IDAsXHJcbiAgICAgICAgbG9vcDogZmFsc2VcclxuICAgIH0sXHJcbiAgICBTQ09SRV8zMDA6IHtcclxuICAgICAgICBkdXJhdGlvbjogMTAwMCxcclxuICAgICAgICBmcmFtZVJhdGU6IDAsXHJcbiAgICAgICAgbG9vcDogZmFsc2VcclxuICAgIH0sXHJcbiAgICBTQ09SRV80MDA6IHtcclxuICAgICAgICBkdXJhdGlvbjogMTAwMCxcclxuICAgICAgICBmcmFtZVJhdGU6IDAsXHJcbiAgICAgICAgbG9vcDogZmFsc2VcclxuICAgIH0sXHJcbiAgICBTQ09SRV81MDA6IHtcclxuICAgICAgICBkdXJhdGlvbjogMTAwMCxcclxuICAgICAgICBmcmFtZVJhdGU6IDAsXHJcbiAgICAgICAgbG9vcDogZmFsc2VcclxuICAgIH0sXHJcbiAgICBHQU1FT1ZFUjoge1xyXG4gICAgICAgIGR1cmF0aW9uOiA0MDAwLFxyXG4gICAgICAgIGZyYW1lUmF0ZTogMTAwLFxyXG4gICAgICAgIGxvb3A6IHRydWVcclxuICAgIH0sXHJcbiAgICBQQVVTRToge1xyXG4gICAgICAgIGR1cmF0aW9uOiAtMSxcclxuICAgICAgICBmcmFtZVJhdGU6IDEwMCxcclxuICAgICAgICBsb29wOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgVElUTEU6IHtcclxuICAgICAgICBkdXJhdGlvbjogNDAwMCxcclxuICAgICAgICBmcmFtZVJhdGU6IDEwMCxcclxuICAgICAgICBsb29wOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgQ1VSU09SOiB7XHJcbiAgICAgICAgZHVyYXRpb246IDUwLFxyXG4gICAgICAgIGZyYW1lUmF0ZTogMjUsXHJcbiAgICAgICAgbG9vcDogdHJ1ZVxyXG4gICAgfVxyXG59O1xyXG4iLCJ2YXIgRW5lbXlTY29yZU1hcCA9IG5ldyBNYXAoKTtcclxuRW5lbXlTY29yZU1hcC5zZXQoXCJERUZBVUxUXCIgLyogREVGQVVMVCAqLywgMTAwKTtcclxuRW5lbXlTY29yZU1hcC5zZXQoXCJTUEVFRFwiIC8qIFNQRUVEICovLCAyMDApO1xyXG5FbmVteVNjb3JlTWFwLnNldChcIlBPV0VSXCIgLyogUE9XRVIgKi8sIDMwMCk7XHJcbkVuZW15U2NvcmVNYXAuc2V0KFwiQVJNT1VSRURcIiAvKiBBUk1PVVJFRCAqLywgNDAwKTtcclxuZXhwb3J0IHsgRW5lbXlTY29yZU1hcCB9O1xyXG4iLCJ2YXIgR2FtZU9iamVjdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEdhbWVPYmplY3QoZ2FtZSwgb2JqZWN0VHlwZSwgcG9zaXRpb24sIGlkLCB2aXNpYmxlKSB7XHJcbiAgICAgICAgaWYgKHZpc2libGUgPT09IHZvaWQgMCkgeyB2aXNpYmxlID0gdHJ1ZTsgfVxyXG4gICAgICAgIHRoaXMuX2dhbWUgPSBnYW1lO1xyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHZpc2libGU7XHJcbiAgICAgICAgdGhpcy5vYmplY3RUeXBlID0gb2JqZWN0VHlwZTtcclxuICAgICAgICB0aGlzLl9zcHJpdGVQb3NpdGlvbiA9IDA7XHJcbiAgICAgICAgaWYgKHBvc2l0aW9uICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9wb3NpdG9uID0gcG9zaXRpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9wb3NpdG9uID0ge1xyXG4gICAgICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgICAgIHk6IDBcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlkICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEdhbWVPYmplY3QucHJvdG90eXBlLCBcInBvc2l0aW9uXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Bvc2l0b247XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChwb3NpdGlvbikge1xyXG4gICAgICAgICAgICBpZiAocG9zaXRpb24ueCA8PSAwIHx8IHBvc2l0aW9uLnkgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgJ3Bvc2l0aW9uIGNhbm5vdCBiZSBhIG5lZ2F0aXZlIHZhbHVlJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9wb3NpdG9uID0gcG9zaXRpb247XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEdhbWVPYmplY3QucHJvdG90eXBlLCBcInNwcml0ZVBvc2l0aW9uXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Nwcml0ZVBvc2l0aW9uO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIEdhbWVPYmplY3QucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLl9nYW1lLnJlbW92ZU9iamVjdCh0aGlzKTtcclxuICAgIH07XHJcbiAgICBHYW1lT2JqZWN0LnByb3RvdHlwZS5uZXh0U3ByaXRlUG9zaXRpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlUG9zaXRpb24gPSB0aGlzLl9zcHJpdGVQb3NpdGlvbiArIDEgPD0gMSA/IHRoaXMuX3Nwcml0ZVBvc2l0aW9uICsgMSA6IDA7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nwcml0ZVBvc2l0aW9uO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBHYW1lT2JqZWN0O1xyXG59KCkpO1xyXG5leHBvcnQgZGVmYXVsdCBHYW1lT2JqZWN0O1xyXG4iLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuaW1wb3J0IEdhbWVPYmplY3QgZnJvbSBcIi4vR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBEUkFXSU5HX0NPTlNUIH0gZnJvbSBcIi4uLy4uL1JlbmRlci9SZW5kZXJlclwiO1xyXG5pbXBvcnQgeyBnZXRTcHJpdGVTaXplLCBnZXRPYmplY3RTaXplIH0gZnJvbSBcIi4uLy4uL1JlbmRlci9TcHJpdGUvU3ByaXRlRGF0YVwiO1xyXG5pbXBvcnQgeyBCbG9ja0NvbGxpc2lvblRlc3QgfSBmcm9tIFwiLi4vLi4vVXRpbHMvQ29sbGlzaW9uVGVzdFwiO1xyXG5pbXBvcnQgeyBtYXgsIG1pbiB9IGZyb20gXCIuLi8uLi9VdGlscy9VdGlsc1wiO1xyXG52YXIgTW92aW5nT2JqZWN0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKE1vdmluZ09iamVjdCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIE1vdmluZ09iamVjdChnYW1lLCBvYmplY3RUeXBlLCBwb3NpdGlvbiwgZGlyZWN0aW9uLCBzcGVlZCwgaWQpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBnYW1lLCBvYmplY3RUeXBlLCBwb3NpdGlvbiwgaWQpIHx8IHRoaXM7XHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbiAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgX3RoaXMuX2RpcmVjdGlvbiA9IGRpcmVjdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIF90aGlzLl9kaXJlY3Rpb24gPSBcInVwXCIgLyogdXAgKi87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF90aGlzLl9zcGVlZCA9IHNwZWVkO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNb3ZpbmdPYmplY3QucHJvdG90eXBlLCBcImRpcmVjdGlvblwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9kaXJlY3Rpb247XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChkaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5fZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE1vdmluZ09iamVjdC5wcm90b3R5cGUuZml0VG9Cb3JkZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGZyYW1lID0gRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZTtcclxuICAgICAgICB2YXIgc2NyZWVuID0gRFJBV0lOR19DT05TVC5zaXplcy5zY3JlZW47XHJcbiAgICAgICAgdmFyIHNpemUgPSBnZXRTcHJpdGVTaXplKHRoaXMpO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5kaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgY2FzZSBcImxlZnRcIiAvKiBsZWZ0ICovOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gZnJhbWUubGVmdDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwidXBcIiAvKiB1cCAqLzpcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSA9IGZyYW1lLnRvcDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZG93blwiIC8qIGRvd24gKi86XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSBzY3JlZW4uaGVpZ2h0ICsgZnJhbWUudG9wIC0gc2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInJpZ2h0XCIgLyogcmlnaHQgKi86XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSBzY3JlZW4ud2lkdGggKyBmcmFtZS5sZWZ0IC0gc2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBNb3ZpbmdPYmplY3QucHJvdG90eXBlLmZpdFRvT2JqZWN0ID0gZnVuY3Rpb24gKG9iamVjdCwgZ2FwKSB7XHJcbiAgICAgICAgaWYgKGdhcCA9PT0gdm9pZCAwKSB7IGdhcCA9IDA7IH1cclxuICAgICAgICB2YXIgc2l6ZSA9IGdldFNwcml0ZVNpemUodGhpcyk7XHJcbiAgICAgICAgdmFyIHRhbmtTaXplID0gZ2V0T2JqZWN0U2l6ZSh0aGlzLm9iamVjdFR5cGUpO1xyXG4gICAgICAgIHZhciBvYmplY3RTaXplID0gZ2V0U3ByaXRlU2l6ZShvYmplY3QpO1xyXG4gICAgICAgIGlmIChvYmplY3Qub2JqZWN0VHlwZSA9PT0gXCJCTE9DS1wiIC8qIEJMT0NLICovKSB7XHJcbiAgICAgICAgICAgIHZhciBibG9jayA9IG9iamVjdDtcclxuICAgICAgICAgICAgdmFyIGNlbGxTaXplID0ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IG9iamVjdFNpemUud2lkdGggLyA0LFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBvYmplY3RTaXplLmhlaWdodCAvIDRcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdmFyIGFkanVzdEdhcCA9IGNlbGxTaXplLndpZHRoICogLjg7XHJcbiAgICAgICAgICAgIHZhciBjb2xsaXNpb25fY2VsbHMgPSBCbG9ja0NvbGxpc2lvblRlc3QoYmxvY2ssIHRoaXMpO1xyXG4gICAgICAgICAgICB2YXIgeFBvcyA9IGNvbGxpc2lvbl9jZWxscy5tYXAoZnVuY3Rpb24gKHBvaW50KSB7IHJldHVybiBwb2ludC54OyB9KTtcclxuICAgICAgICAgICAgdmFyIHlQb3MgPSBjb2xsaXNpb25fY2VsbHMubWFwKGZ1bmN0aW9uIChwb2ludCkgeyByZXR1cm4gcG9pbnQueTsgfSk7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5kaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJsZWZ0XCIgLyogbGVmdCAqLzpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoeFBvcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh5UG9zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgKyB0YW5rU2l6ZS5oZWlnaHQgLSBtaW4oeVBvcykgPD0gYWRqdXN0R2FwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gbWluKHlQb3MpIC0gdGFua1NpemUuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobWF4KHlQb3MpICsgY2VsbFNpemUuaGVpZ2h0IC0gdGhpcy5wb3NpdGlvbi55IDw9IGFkanVzdEdhcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSA9IG1heCh5UG9zKSArIGNlbGxTaXplLmhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSBtYXgoeFBvcykgKyBvYmplY3RTaXplLndpZHRoIC8gNCArIGdhcDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwidXBcIiAvKiB1cCAqLzpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoeVBvcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4UG9zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggKyB0YW5rU2l6ZS53aWR0aCAtIG1pbih4UG9zKSA8PSBhZGp1c3RHYXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSBvYmplY3QucG9zaXRpb24ueCAtIHRhbmtTaXplLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobWF4KHhQb3MpICsgY2VsbFNpemUud2lkdGggLSB0aGlzLnBvc2l0aW9uLnggPD0gYWRqdXN0R2FwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gbWF4KHhQb3MpICsgY2VsbFNpemUud2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gbWF4KHlQb3MpICsgY2VsbFNpemUuaGVpZ2h0ICsgZ2FwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJkb3duXCIgLyogZG93biAqLzpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoeVBvcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4UG9zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggKyB0YW5rU2l6ZS53aWR0aCAtIG1pbih4UG9zKSA8PSBhZGp1c3RHYXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSBtaW4oeFBvcykgLSB0YW5rU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG1heCh4UG9zKSArIGNlbGxTaXplLndpZHRoIC0gdGhpcy5wb3NpdGlvbi54IDw9IGFkanVzdEdhcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IG1heCh4UG9zKSArIGNlbGxTaXplLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSA9IG1pbih5UG9zKSAtIHNpemUuaGVpZ2h0IC0gZ2FwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJyaWdodFwiIC8qIHJpZ2h0ICovOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh4UG9zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHlQb3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueSArIHRhbmtTaXplLmhlaWdodCAtIG1pbih5UG9zKSA8PSBhZGp1c3RHYXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSBtaW4oeVBvcykgLSB0YW5rU2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChtYXgoeVBvcykgKyBjZWxsU2l6ZS5oZWlnaHQgLSB0aGlzLnBvc2l0aW9uLnkgPD0gYWRqdXN0R2FwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gbWF4KHlQb3MpICsgY2VsbFNpemUuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IG1pbih4UG9zKSAtIHNpemUud2lkdGggLSBnYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwibGVmdFwiIC8qIGxlZnQgKi86XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gb2JqZWN0LnBvc2l0aW9uLnggKyBvYmplY3RTaXplLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInVwXCIgLyogdXAgKi86XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gb2JqZWN0LnBvc2l0aW9uLnkgKyBvYmplY3RTaXplLmhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJkb3duXCIgLyogZG93biAqLzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSBvYmplY3QucG9zaXRpb24ueSAtIHNpemUuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInJpZ2h0XCIgLyogcmlnaHQgKi86XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gb2JqZWN0LnBvc2l0aW9uLnggLSBzaXplLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBNb3ZpbmdPYmplY3Q7XHJcbn0oR2FtZU9iamVjdCkpO1xyXG5leHBvcnQgZGVmYXVsdCBNb3ZpbmdPYmplY3Q7XHJcbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVNb3ZlKHBvc2l0aW9uLCBkaXJlY3Rpb24sIHNwZWVkKSB7XHJcbiAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xyXG4gICAgICAgIGNhc2UgXCJ1cFwiIC8qIHVwICovOlxyXG4gICAgICAgICAgICBwb3NpdGlvbi55IC09IHNwZWVkO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwicmlnaHRcIiAvKiByaWdodCAqLzpcclxuICAgICAgICAgICAgcG9zaXRpb24ueCArPSBzcGVlZDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImRvd25cIiAvKiBkb3duICovOlxyXG4gICAgICAgICAgICBwb3NpdGlvbi55ICs9IHNwZWVkO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwibGVmdFwiIC8qIGxlZnQgKi86XHJcbiAgICAgICAgICAgIHBvc2l0aW9uLnggLT0gc3BlZWQ7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59XHJcbiIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5pbXBvcnQgVGFua09iamVjdCBmcm9tIFwiLi9UYW5rT2JqZWN0XCI7XHJcbmltcG9ydCB7IEVuZW15U2NvcmVNYXAgfSBmcm9tIFwiLi9FbnVtL0VUYW5rVHlwZVwiO1xyXG5pbXBvcnQgeyBTY29yZVRvQW5pbWF0aW9uIH0gZnJvbSBcIi4vRW51bS9FQW5pbWF0aW9uVHlwZVwiO1xyXG5leHBvcnQgdmFyIENvbG9yU2VxdWVuY2VEZWZpbml0aW9ucyA9IHtcclxuICAgIEFSTU9VUkVEOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzZXF1ZW5jZTogW1wiV0hJVEVcIiAvKiBXSElURSAqL10sXHJcbiAgICAgICAgICAgIGRlbGF5OiAyNSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2VxdWVuY2U6IFtcIkdSRUVOXCIgLyogR1JFRU4gKi8sIFwiWUVMTE9XXCIgLyogWUVMTE9XICovXSxcclxuICAgICAgICAgICAgZGVsYXk6IDI1LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzZXF1ZW5jZTogW1wiR1JFRU5cIiAvKiBHUkVFTiAqLywgXCJXSElURVwiIC8qIFdISVRFICovXSxcclxuICAgICAgICAgICAgZGVsYXk6IDI1LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzZXF1ZW5jZTogW1wiWUVMTE9XXCIgLyogWUVMTE9XICovLCBcIldISVRFXCIgLyogV0hJVEUgKi9dLFxyXG4gICAgICAgICAgICBkZWxheTogMjUsXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBJVEVNOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzZXF1ZW5jZTogW1wiV0hJVEVcIiAvKiBXSElURSAqLywgXCJNQUdFTlRBXCIgLyogTUFHRU5UQSAqL10sXHJcbiAgICAgICAgICAgIGRlbGF5OiAxMDAsXHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG59O1xyXG52YXIgVGFua0FJT0JqZWN0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFRhbmtBSU9CamVjdCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFRhbmtBSU9CamVjdChnYW1lLCBlbmVteVR5cGUsIGhhc0l0ZW0sIHBvc2l0aW9uLCBkaXJlY3Rpb24pIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBsZXZlbDtcclxuICAgICAgICB2YXIgaHAgPSAxO1xyXG4gICAgICAgIHN3aXRjaCAoZW5lbXlUeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJERUZBVUxUXCIgLyogREVGQVVMVCAqLzpcclxuICAgICAgICAgICAgICAgIGxldmVsID0gMDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiU1BFRURcIiAvKiBTUEVFRCAqLzpcclxuICAgICAgICAgICAgICAgIGxldmVsID0gMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiUE9XRVJcIiAvKiBQT1dFUiAqLzpcclxuICAgICAgICAgICAgICAgIGxldmVsID0gMjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiQVJNT1VSRURcIiAvKiBBUk1PVVJFRCAqLzpcclxuICAgICAgICAgICAgICAgIGxldmVsID0gMztcclxuICAgICAgICAgICAgICAgIGhwID0gNDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGdhbWUsIFwiRU5FTVlfVEFOS1wiIC8qIEVORU1ZX1RBTksgKi8sIHBvc2l0aW9uLCBkaXJlY3Rpb24sIFwiV0hJVEVcIiAvKiBXSElURSAqLywgbGV2ZWwpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuX2VuZW15VHlwZSA9IGVuZW15VHlwZTtcclxuICAgICAgICBfdGhpcy5faGFzSXRlbSA9IGhhc0l0ZW07XHJcbiAgICAgICAgX3RoaXMuX2NvbG9ySW5kZXggPSAwO1xyXG4gICAgICAgIF90aGlzLl9ocCA9IGhwO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIFRhbmtBSU9CamVjdC5wcm90b3R5cGUubmV4dENvbG9ySW5kZXggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGRlZmluaXRpb24gPSB0aGlzLmdldENvbG9yRGVmaW5pdGlvbigpO1xyXG4gICAgICAgIHZhciBtYXhJbmRleCA9IGRlZmluaXRpb24uc2VxdWVuY2UubGVuZ3RoO1xyXG4gICAgICAgIGlmICh0aGlzLl9jb2xvckluZGV4ICsgMSA+IG1heEluZGV4KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbG9ySW5kZXggPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fY29sb3JJbmRleCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fY29sb3JJbmRleDtcclxuICAgIH07XHJcbiAgICBUYW5rQUlPQmplY3QucHJvdG90eXBlLmdldENvbG9yRGVmaW5pdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIga2V5O1xyXG4gICAgICAgIHZhciBpbmRleDtcclxuICAgICAgICBpZiAodGhpcy5faGFzSXRlbSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBrZXkgPSAnSVRFTSc7XHJcbiAgICAgICAgICAgIGluZGV4ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fZW5lbXlUeXBlID09PSBcIkFSTU9VUkVEXCIgLyogQVJNT1VSRUQgKi8pIHtcclxuICAgICAgICAgICAga2V5ID0gdGhpcy5fZW5lbXlUeXBlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGluZGV4ID0gdGhpcy5faHAgLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gQ29sb3JTZXF1ZW5jZURlZmluaXRpb25zW2tleV1bMF07XHJcbiAgICB9O1xyXG4gICAgVGFua0FJT0JqZWN0LnByb3RvdHlwZS5oaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5faHAgLT0gMTtcclxuICAgICAgICBpZiAodGhpcy5faHAgPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgVGFua0FJT0JqZWN0LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgICAgICB0aGlzLl9nYW1lLnN0YXJ0QW5pbWF0aW9uKHRoaXMsIFwiRVhQTE9TSU9OX1NNQUxMXCIgLyogRVhQTE9TSU9OX1NNQUxMICovLCBudWxsLCBmdW5jdGlvbiAoYW5pbWF0aW9uKSB7XHJcbiAgICAgICAgICAgIF90aGlzLl9nYW1lLnN0YXJ0QW5pbWF0aW9uKGFuaW1hdGlvbi5hbmltYXRpb25Qb2ludCwgXCJFWFBMT1NJT05fTEFSR0VcIiAvKiBFWFBMT1NJT05fTEFSR0UgKi8sIG51bGwsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzY29yZUFuaW1hdGlvbiA9IFNjb3JlVG9BbmltYXRpb24oRW5lbXlTY29yZU1hcC5nZXQoX3RoaXMuX2VuZW15VHlwZSkpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuX2dhbWUuc3RhcnRBbmltYXRpb24oYW5pbWF0aW9uLmFuaW1hdGlvblBvaW50LCBzY29yZUFuaW1hdGlvbiwgbnVsbCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9nYW1lLnNwYXduVGFuayhfdGhpcy50YW5rVHlwZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFRhbmtBSU9CamVjdDtcclxufShUYW5rT2JqZWN0KSk7XHJcbmV4cG9ydCBkZWZhdWx0IFRhbmtBSU9CamVjdDtcclxuIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbmltcG9ydCB7IE1BSU5fVEFOS19JRCB9IGZyb20gXCIuLi9HYW1lXCI7XHJcbmltcG9ydCBNb3ZpbmdPYmplY3QsIHsgY2FsY3VsYXRlTW92ZSB9IGZyb20gXCIuL01vdmluZ09iamVjdFwiO1xyXG5pbXBvcnQgQnVsbGV0T2JqZWN0LCB7IEJVTExFVF9TTE9XLCBCVUxMRVRfRkFTVCB9IGZyb20gXCIuL0J1bGxldE9iamVjdFwiO1xyXG5pbXBvcnQgU1BSVElFX0RFRiBmcm9tIFwiLi4vLi4vUmVuZGVyL1Nwcml0ZS9TcHJpdGVEZWZpbml0aW9uXCI7XHJcbmltcG9ydCB7IEd1aWQgfSBmcm9tIFwiLi4vLi4vVXRpbHMvVXRpbHNcIjtcclxuZXhwb3J0IHZhciBUQU5LX1NQRUVEID0gMjtcclxuZXhwb3J0IHZhciBUQU5LX0ZJUkVfREVMQVkgPSAxMDA7XHJcbnZhciBUYW5rT2JqZWN0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFRhbmtPYmplY3QsIF9zdXBlcik7XHJcbiAgICAvLyNyZWdpb24gY29uc3RydWN0b3JcclxuICAgIGZ1bmN0aW9uIFRhbmtPYmplY3QoZ2FtZSwgdGFua1R5cGUsIHBvc2l0aW9uLCBkaXJlY3Rpb24sIHRhbmtDb2xvciwgdGFua0xldmVsLCBpZCkge1xyXG4gICAgICAgIGlmICh0YW5rTGV2ZWwgPT09IHZvaWQgMCkgeyB0YW5rTGV2ZWwgPSAxOyB9XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZ2FtZSwgXCJUQU5LXCIgLyogVEFOSyAqLywgcG9zaXRpb24sIGRpcmVjdGlvbiwgVEFOS19TUEVFRCwgaWQgIT0gbnVsbCA/IGlkIDogR3VpZC5uZXdHdWlkKCkpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuX2lzSW52aW5jaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIF90aGlzLl90YW5rVHlwZSA9IHRhbmtUeXBlO1xyXG4gICAgICAgIF90aGlzLl90YW5rQ29sb3IgPSB0YW5rQ29sb3I7XHJcbiAgICAgICAgX3RoaXMuX3RhbmtMZXZlbCA9IHRhbmtMZXZlbDtcclxuICAgICAgICBfdGhpcy5fYnVsbGV0cyA9IFtdO1xyXG4gICAgICAgIF90aGlzLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICBfdGhpcy5fbGFzdEZpcmVkID0gMDtcclxuICAgICAgICBfdGhpcy5zcGF3bigpO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUYW5rT2JqZWN0LnByb3RvdHlwZSwgXCJ0YW5rQ29sb3JcIiwge1xyXG4gICAgICAgIC8vI2VuZHJlZ2lvblxyXG4gICAgICAgIC8vI3JlZ2lvbiBnZXR0ZXIsIHNldHRlclxyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdGFua0NvbG9yO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gVE9ETzogUkVNT1ZFIFdIRU4gREVQTE9ZXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoY29sb3IpIHtcclxuICAgICAgICAgICAgdGhpcy5fdGFua0NvbG9yID0gY29sb3I7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRhbmtPYmplY3QucHJvdG90eXBlLCBcInRhbmtUeXBlXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RhbmtUeXBlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUYW5rT2JqZWN0LnByb3RvdHlwZSwgXCJpc0ludmluY2libGVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faXNJbnZpbmNpYmxlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUYW5rT2JqZWN0LnByb3RvdHlwZSwgXCJ0YW5rTGV2ZWxcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdGFua0xldmVsO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gVE9ETzogUkVNT1ZFIFdIRU4gREVQTE9ZXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobGV2ZWwpIHtcclxuICAgICAgICAgICAgdGhpcy5fdGFua0xldmVsID0gbGV2ZWw7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgLy8jZW5kcmVnaW9uXHJcbiAgICAvLyNyZWdpb24gaW1wbGVtZW50cyBvZiBNb3ZpbmdPYmplY3RcdFxyXG4gICAgVGFua09iamVjdC5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGNhbGN1bGF0ZU1vdmUodGhpcy5wb3NpdGlvbiwgdGhpcy5fZGlyZWN0aW9uLCB0aGlzLl9zcGVlZCk7XHJcbiAgICAgICAgdGhpcy5fZ2FtZS5sb2coXCJUQU5LIFtcIiArIHRoaXMuaWQgKyBcIl0gTU9WRUQgLT4gWyB4OiBcIiArIHRoaXMucG9zaXRpb24ueCArIFwiLCB5OiBcIiArIHRoaXMucG9zaXRpb24ueSArIFwiIF1cIik7XHJcbiAgICAgICAgLy8gdGVzdCBtb3ZlbWVudCBpcyB2YWxpZFxyXG4gICAgICAgIHZhciB0ZXN0X3Zpc2libGUgPSB0aGlzLl9nYW1lLnRlc3RWaXNpYmlsaXR5KHRoaXMpO1xyXG4gICAgICAgIHZhciB0ZXN0X2NvbGxpc2lvbiA9IHRoaXMuX2dhbWUuY29sbGlzaW9uVGVzdCh0aGlzKTtcclxuICAgICAgICBpZiAodGVzdF92aXNpYmxlID09IGZhbHNlICYmIHRlc3RfY29sbGlzaW9uLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZml0VG9Cb3JkZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGVzdF9jb2xsaXNpb24ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0ZXN0X2NvbGxpc2lvbi5mb3JFYWNoKGZ1bmN0aW9uIChvYmplY3QpIHtcclxuICAgICAgICAgICAgICAgIGlmIChvYmplY3Qub2JqZWN0VHlwZSA9PT0gXCJJVEVNXCIgLyogSVRFTSAqLykge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5oaXQoX3RoaXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZml0VG9PYmplY3Qob2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5fZ2FtZS5sb2coXCJUQU5LIFtcIiArIF90aGlzLmlkICsgXCJdIE1PVkVTIC0+IEJMT0NLRUQhISBbIHg6IFwiICsgX3RoaXMucG9zaXRpb24ueCArIFwiLCB5OiBcIiArIF90aGlzLnBvc2l0aW9uLnkgKyBcIiBdXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5uZXh0U3ByaXRlUG9zaXRpb24oKTtcclxuICAgIH07XHJcbiAgICBUYW5rT2JqZWN0LnByb3RvdHlwZS5oaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzSW52aW5jaWJsZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgfTtcclxuICAgIC8vI2VuZHJlZ2lvblxyXG4gICAgLy8jcmVnaW9uIHB1YmxpYyBtZXRob2RzXHJcbiAgICBUYW5rT2JqZWN0LnByb3RvdHlwZS5maXJlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBub3cgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICBpZiAobm93IC0gdGhpcy5fbGFzdEZpcmVkID49IFRBTktfRklSRV9ERUxBWSkge1xyXG4gICAgICAgICAgICB0aGlzLl9sYXN0RmlyZWQgPSBub3c7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQnVsbGV0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFRhbmtPYmplY3QucHJvdG90eXBlLnNwYXduID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5fZ2FtZS5zdGFydEFuaW1hdGlvbih0aGlzLCBcIlNQQVdOXCIgLyogU1BBV04gKi8sIG51bGwsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgX3RoaXMudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmIChfdGhpcyA9PSBfdGhpcy5fZ2FtZS5tYWluVGFuaykge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuaW52aW5jaWJsZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgVGFua09iamVjdC5wcm90b3R5cGUuaW52aW5jaWJsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX2lzSW52aW5jaWJsZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fZ2FtZS5zdGFydEFuaW1hdGlvbih0aGlzLCBcIklOVklOQ0lCTEVcIiAvKiBJTlZJTkNJQkxFICovLCBudWxsLCBmdW5jdGlvbiAoYW5pbSkge1xyXG4gICAgICAgICAgICBfdGhpcy5faXNJbnZpbmNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgVGFua09iamVjdC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5fZ2FtZS5zdGFydEFuaW1hdGlvbih0aGlzLCBcIkVYUExPU0lPTl9TTUFMTFwiIC8qIEVYUExPU0lPTl9TTUFMTCAqLywgbnVsbCwgZnVuY3Rpb24gKGFuaW1hdGlvbikge1xyXG4gICAgICAgICAgICBfdGhpcy5fZ2FtZS5zdGFydEFuaW1hdGlvbihhbmltYXRpb24uYW5pbWF0aW9uUG9pbnQsIFwiRVhQTE9TSU9OX0xBUkdFXCIgLyogRVhQTE9TSU9OX0xBUkdFICovLCBudWxsLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMuaWQgPT09IE1BSU5fVEFOS19JRCkge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9nYW1lLnNwYXduVGFuayhfdGhpcy50YW5rVHlwZSwgZmFsc2UsIDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuX2dhbWUuc3Bhd25UYW5rKF90aGlzLnRhbmtUeXBlLCBmYWxzZSwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFRhbmtPYmplY3QucHJvdG90eXBlLmxldmVsdXAgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGFua0xldmVsIDwgMykge1xyXG4gICAgICAgICAgICB0aGlzLnRhbmtMZXZlbCsrO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBUYW5rT2JqZWN0LnByb3RvdHlwZS5jcmVhdGVCdWxsZXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGFua0xldmVsIDwgMiAmJiB0aGlzLl9idWxsZXRzLmxlbmd0aCA+PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy50YW5rTGV2ZWwgPCA0ICYmIHRoaXMuX2J1bGxldHMubGVuZ3RoID49IDIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcG9zaXRpb247XHJcbiAgICAgICAgdmFyIHRhbmtTcHJpdGUgPSBTUFJUSUVfREVGLlRBTktbdGhpcy50YW5rQ29sb3JdW3RoaXMudGFua0xldmVsXVt0aGlzLmRpcmVjdGlvbl1bdGhpcy5zcHJpdGVQb3NpdGlvbl07XHJcbiAgICAgICAgdmFyIGJ1bGxldFNwcml0ZSA9IFNQUlRJRV9ERUYuQlVMTEVUW3RoaXMuZGlyZWN0aW9uXTtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ1cFwiIC8qIHVwICovOlxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeDogdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5nZXRNaWRkbGUodGFua1Nwcml0ZSwgYnVsbGV0U3ByaXRlLCB0aGlzLmRpcmVjdGlvbiksXHJcbiAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5wb3NpdGlvbi55XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJyaWdodFwiIC8qIHJpZ2h0ICovOlxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeDogdGhpcy5wb3NpdGlvbi54ICsgdGFua1Nwcml0ZS5zaXplLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IHRoaXMucG9zaXRpb24ueSArIHRoaXMuZ2V0TWlkZGxlKHRhbmtTcHJpdGUsIGJ1bGxldFNwcml0ZSwgdGhpcy5kaXJlY3Rpb24pXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJkb3duXCIgLyogZG93biAqLzpcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IHRoaXMucG9zaXRpb24ueCArIHRoaXMuZ2V0TWlkZGxlKHRhbmtTcHJpdGUsIGJ1bGxldFNwcml0ZSwgdGhpcy5kaXJlY3Rpb24pLFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IHRoaXMucG9zaXRpb24ueSArIHRhbmtTcHJpdGUuc2l6ZS5oZWlnaHRcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImxlZnRcIiAvKiBsZWZ0ICovOlxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeDogdGhpcy5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IHRoaXMucG9zaXRpb24ueSArIHRoaXMuZ2V0TWlkZGxlKHRhbmtTcHJpdGUsIGJ1bGxldFNwcml0ZSwgdGhpcy5kaXJlY3Rpb24pXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBidWxsZXRTcGVlZDtcclxuICAgICAgICBpZiAodGhpcy50YW5rTGV2ZWwgPT0gMCkge1xyXG4gICAgICAgICAgICBidWxsZXRTcGVlZCA9IEJVTExFVF9TTE9XO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnRhbmtMZXZlbCA8IDQpIHtcclxuICAgICAgICAgICAgYnVsbGV0U3BlZWQgPSBCVUxMRVRfRkFTVDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGJ1bGxldCA9IG5ldyBCdWxsZXRPYmplY3QodGhpcy5fZ2FtZSwgdGhpcywgcG9zaXRpb24sIHRoaXMuZGlyZWN0aW9uLCBidWxsZXRTcGVlZCwgR3VpZC5uZXdHdWlkKCkpO1xyXG4gICAgICAgIHRoaXMuX2dhbWUuaW5zZXJ0T2JqZWN0KGJ1bGxldCk7XHJcbiAgICAgICAgdGhpcy5fYnVsbGV0cy5wdXNoKGJ1bGxldC5pZCk7XHJcbiAgICB9O1xyXG4gICAgVGFua09iamVjdC5wcm90b3R5cGUucmVtb3ZlQnVsbGV0ID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgdmFyIGZvdW5kID0gdGhpcy5fYnVsbGV0cy5maW5kKGZ1bmN0aW9uIChidWxsZXQpIHsgcmV0dXJuIGJ1bGxldCA9PT0gaWQ7IH0pO1xyXG4gICAgICAgIHZhciBpZHggPSB0aGlzLl9idWxsZXRzLmluZGV4T2YoZm91bmQpO1xyXG4gICAgICAgIGlmIChpZHggPiAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLl9idWxsZXRzLnNwbGljZShpZHgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvLyNlbmRyZWdpb25cclxuICAgIFRhbmtPYmplY3QucHJvdG90eXBlLmdldE1pZGRsZSA9IGZ1bmN0aW9uIChwYXJlbnQsIGNoaWxkLCBkaXJlY3Rpb24pIHtcclxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBcInVwXCIgLyogdXAgKi8gfHwgZGlyZWN0aW9uID09PSBcImRvd25cIiAvKiBkb3duICovKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnQuc2l6ZS53aWR0aCAvIDIgLSBjaGlsZC5zaXplLndpZHRoIC8gMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnQuc2l6ZS5oZWlnaHQgLyAyIC0gY2hpbGQuc2l6ZS5oZWlnaHQgLyAyO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gVGFua09iamVjdDtcclxufShNb3ZpbmdPYmplY3QpKTtcclxuZXhwb3J0IGRlZmF1bHQgVGFua09iamVjdDtcclxuIiwiaW1wb3J0IFNQUlRJRV9ERUYgZnJvbSBcIi4vU3ByaXRlL1Nwcml0ZURlZmluaXRpb25cIjtcclxuaW1wb3J0IHsgZ2V0U3ByaXRlRGF0YSwgZ2V0U3lzdGVtU3ByaXRlLCBnZXRPYmplY3RTaXplLCBnZXRBbmltYXRpb25TaXplIH0gZnJvbSBcIi4vU3ByaXRlL1Nwcml0ZURhdGFcIjtcclxuaW1wb3J0IHsgZ2V0UmFuZG9tUmFuZ2UgfSBmcm9tIFwiLi4vVXRpbHMvVXRpbHNcIjtcclxuZXhwb3J0IHZhciBNQVhfRlBTID0gNjA7XHJcbmV4cG9ydCB2YXIgTUVOVV9NQVhfRlBTID0gMzA7XHJcbmV4cG9ydCB2YXIgRFJBV0lOR19DT05TVCA9IHtcclxuICAgIGNvbG9yczoge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IFwiIzAwMDAwMFwiLFxyXG4gICAgICAgIGJhY2tncm91bmRfZnJhbWU6IFwiIzYzNjM2MlwiLFxyXG4gICAgfSxcclxuICAgIHNpemVzOiB7XHJcbiAgICAgICAgZnJhbWU6IHtcclxuICAgICAgICAgICAgbGVmdDogMzIsXHJcbiAgICAgICAgICAgIHRvcDogMzIsXHJcbiAgICAgICAgICAgIGJvdHRvbTogMzIsXHJcbiAgICAgICAgICAgIHJpZ2h0OiBTUFJUSUVfREVGLlNZU1RFTS5GUkFNRS5zaXplLndpZHRoXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzY3JlZW46IHtcclxuICAgICAgICAgICAgd2lkdGg6IDMyICogMTMsXHJcbiAgICAgICAgICAgIGhlaWdodDogMzIgKiAxM1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBwb3NpdGlvbnM6IHtcclxuICAgICAgICBtYWluOiB7XHJcbiAgICAgICAgICAgIGN1cnNvcl9zdGFydDogMjY1XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRlYnVnOiB7XHJcbiAgICAgICAgZm9udDoge1xyXG4gICAgICAgICAgICBzaXplOiAxMixcclxuICAgICAgICAgICAgZm9udDogJ3Nhbi1zZXJpZidcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcbnZhciBSZW5kZXJlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFJlbmRlcmVyKGdhbWUsIGNhbnZhcywgc3ByaXRlX21haW5fc3JjLCBzcHJpdGVfdGl0bGVfc3JjKSB7XHJcbiAgICAgICAgdGhpcy5fZnBzID0ge1xyXG4gICAgICAgICAgICBmcHNJbnRlcnZhbDogMTAwMCAvIE1BWF9GUFMsXHJcbiAgICAgICAgICAgIG5vdzogcGVyZm9ybWFuY2Uubm93KCksXHJcbiAgICAgICAgICAgIHRoZW46IHBlcmZvcm1hbmNlLm5vdygpLFxyXG4gICAgICAgICAgICBlbGFwc2VkOiAwXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoY2FudmFzID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyAnY2FudmFzIGlzIG51bGwgb3IgdW5kZWZpbmVkJztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fY2FudmFzID0gY2FudmFzO1xyXG4gICAgICAgIGlmIChnYW1lID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyAnZ2FtZSBpcyBudWxsIG9yIHVuZGVmaW5lZCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2dhbWUgPSBnYW1lO1xyXG4gICAgICAgIHRoaXMuaW5pdFNjcmVlbigpO1xyXG4gICAgICAgIHRoaXMubG9hZFNwcml0ZShzcHJpdGVfbWFpbl9zcmMsIHNwcml0ZV90aXRsZV9zcmMpO1xyXG4gICAgfVxyXG4gICAgUmVuZGVyZXIucHJvdG90eXBlLmxvYWRTcHJpdGUgPSBmdW5jdGlvbiAobWFpblNyYywgdGl0bGVTcmMpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX21haW5TcHJpdGUgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICB0aGlzLl90aXRsZVNwcml0ZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRoaXMuX21haW5TcHJpdGUub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBfdGhpcy5fdGl0bGVTcHJpdGUuc3JjID0gdGl0bGVTcmM7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl90aXRsZVNwcml0ZS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIF90aGlzLnJlbmRlcigpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5fbWFpblNwcml0ZS5zcmMgPSBtYWluU3JjO1xyXG4gICAgfTtcclxuICAgIFJlbmRlcmVyLnByb3RvdHlwZS5pbml0U2NyZWVuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBzaXplcyA9IERSQVdJTkdfQ09OU1Quc2l6ZXM7XHJcbiAgICAgICAgdGhpcy5fY2FudmFzLndpZHRoID0gc2l6ZXMuZnJhbWUubGVmdCArIHNpemVzLmZyYW1lLnJpZ2h0ICsgc2l6ZXMuc2NyZWVuLndpZHRoO1xyXG4gICAgICAgIHRoaXMuX2NhbnZhcy5oZWlnaHQgPSBzaXplcy5mcmFtZS50b3AgKyBzaXplcy5mcmFtZS5ib3R0b20gKyBzaXplcy5zY3JlZW4uaGVpZ2h0O1xyXG4gICAgfTtcclxuICAgIFJlbmRlcmVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkgeyBfdGhpcy5yZW5kZXIoKTsgfSk7XHJcbiAgICAgICAgdmFyIGZwcyA9IHRoaXMuX2ZwcztcclxuICAgICAgICBmcHMubm93ID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgZnBzLmVsYXBzZWQgPSBmcHMubm93IC0gZnBzLnRoZW47XHJcbiAgICAgICAgaWYgKGZwcy5lbGFwc2VkID4gZnBzLmZwc0ludGVydmFsKSB7XHJcbiAgICAgICAgICAgIGZwcy50aGVuID0gZnBzLm5vdyAtIChmcHMuZWxhcHNlZCAlIGZwcy5mcHNJbnRlcnZhbCk7XHJcbiAgICAgICAgICAgIC8vIHN0YXJ0IGRyYXdpbmdcclxuICAgICAgICAgICAgLy8gZ2V0IGNvbnRleHRcclxuICAgICAgICAgICAgdmFyIGN0eCA9IHRoaXMuX2NhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgICAgICAvLyBjbGVhciBzY3JlZW5cclxuICAgICAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjdHguY2FudmFzLndpZHRoLCBjdHguY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgICAgIC8vIGRyYXcgYmFja2dyb3VuZHNcclxuICAgICAgICAgICAgdGhpcy5kcmF3QmFja2dyb3VuZChjdHgpO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX2dhbWUuY3VycmVudE1lbnUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJNQUlOXCIgLyogTUFJTiAqLzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlck1haW4oY3R4KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJHQU1FXCIgLyogR0FNRSAqLzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckdhbWUoY3R4KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJDT05TVFJVQ1RcIiAvKiBDT05TVFJVQ1QgKi86XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gZHJhdyBkZWJ1ZyBjb3VudGVyXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9nYW1lLmRlYnVnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdEZWJ1Z0NvdW50ZXIoY3R4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIHJlbmRlciBtYWluIHNjcmVlblxyXG4gICAgICogQHBhcmFtIGN0eCBjb250ZXh0XHJcbiAgICAgKi9cclxuICAgIFJlbmRlcmVyLnByb3RvdHlwZS5yZW5kZXJNYWluID0gZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgICAgIHRoaXMucHJvY2Vzc01haW4oKTtcclxuICAgICAgICB0aGlzLmRyYXdPYmplY3RzKGN0eCwgdGhpcy5fZ2FtZS5vYmplY3RzKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIHByb2Nlc3MgbWFpbiBzY3JlZW4gYWN0aW9uc1xyXG4gICAgICovXHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUucHJvY2Vzc01haW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgb2JqZWN0cyA9IHRoaXMuX2dhbWUub2JqZWN0cztcclxuICAgICAgICBpZiAob2JqZWN0cyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgb2JqZWN0cy5mb3JFYWNoKGZ1bmN0aW9uIChvYmplY3QpIHtcclxuICAgICAgICAgICAgICAgIHZhciBwb3NpdGlvbiA9IG9iamVjdC5wb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAob2JqZWN0Lm9iamVjdFR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQU5JTUFUSU9OXCIgLyogQU5JTUFUSU9OICovOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYW5pbWF0aW9uID0gb2JqZWN0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYW5pbWF0aW9uUG9pbnQgPSBhbmltYXRpb24uYW5pbWF0aW9uUG9pbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhbmltYXRpb25TaXplID0gZ2V0QW5pbWF0aW9uU2l6ZShhbmltYXRpb24uYW5pbWF0aW9uVHlwZSwgYW5pbWF0aW9uLnNwcml0ZVBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChhbmltYXRpb24uYW5pbWF0aW9uVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIlRJVExFXCIgLyogVElUTEUgKi86XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uLnkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLnkgPSBwb3NpdGlvbi55IC0gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uUG9pbnQueSA9IHBvc2l0aW9uLnkgKyBhbmltYXRpb25TaXplLmhlaWdodCAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKF90aGlzLnRpdGxlU2hvd24gPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLnkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25Qb2ludC55ID0gcG9zaXRpb24ueSArIGFuaW1hdGlvblNpemUuaGVpZ2h0IC8gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLmV4cGlyZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnRpdGxlU2hvd24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJDVVJTT1JcIiAvKiBDVVJTT1IgKi86XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnNvckluZGV4ID0gX3RoaXMuX2dhbWUuY3Vyc29ySW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnNvclN0YXJ0ID0gRFJBV0lOR19DT05TVC5wb3NpdGlvbnMubWFpbi5jdXJzb3Jfc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uUG9pbnQueSA9IGN1cnNvclN0YXJ0ICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29ySW5kZXggKiBhbmltYXRpb25TaXplLmhlaWdodCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvblNpemUuaGVpZ2h0IC8gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24ubmV4dFNwcml0ZVBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiByZW5kZXIgZ2FtZSBzY3JlZW5cclxuICAgICAqIEBwYXJhbSBjdHggY29udGV4dFxyXG4gICAgICovXHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUucmVuZGVyR2FtZSA9IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICAvLyBwcm9jZXNzIGFjdGlvbnNcclxuICAgICAgICB0aGlzLnByb2Nlc3NHYW1lKCk7XHJcbiAgICAgICAgLy8gZHJhdyBmcmFtZVxyXG4gICAgICAgIHRoaXMuZHJhd0ZyYW1lKGN0eCk7XHJcbiAgICAgICAgLy8gZHJhdyBvYmplY3RzXHJcbiAgICAgICAgdGhpcy5kcmF3T2JqZWN0cyhjdHgsIHRoaXMuX2dhbWUub2JqZWN0cyk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBwcm9jZXNzIGFsbCBnYW1lIGFjdGlvbnNcclxuICAgICAqL1xyXG4gICAgUmVuZGVyZXIucHJvdG90eXBlLnByb2Nlc3NHYW1lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHRoaXMuX2dhbWUucGF1c2UgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBtYWluVGFuayA9IHRoaXMuX2dhbWUubWFpblRhbms7XHJcbiAgICAgICAgaWYgKG1haW5UYW5rICE9IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKG1haW5UYW5rLnZpc2libGUgPT09IHRydWUgJiYgdGhpcy5jaGVja0tleVN0YXRlU3luYygpKSB7XHJcbiAgICAgICAgICAgICAgICBtYWluVGFuay5tb3ZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG9iamVjdHMgPSB0aGlzLl9nYW1lLm9iamVjdHM7XHJcbiAgICAgICAgaWYgKG9iamVjdHMgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIG9iamVjdHMuZm9yRWFjaChmdW5jdGlvbiAob2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG9iamVjdC5vYmplY3RUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkJVTExFVFwiIC8qIEJVTExFVCAqLzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Lm1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkFOSU1BVElPTlwiIC8qIEFOSU1BVElPTiAqLzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFuaW1hdGlvbiA9IG9iamVjdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFuaW1hdGlvbi5leHBpcmVUaW1lIDwgX3RoaXMuX2Zwcy5ub3cpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5leHBpcmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYW5pbWF0aW9uUG9pbnQgPSBhbmltYXRpb24uYW5pbWF0aW9uUG9pbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhbmltYXRpb25TaXplID0gZ2V0QW5pbWF0aW9uU2l6ZShhbmltYXRpb24uYW5pbWF0aW9uVHlwZSwgYW5pbWF0aW9uLnNwcml0ZVBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChhbmltYXRpb24uYW5pbWF0aW9uVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIklOVklOQ0lCTEVcIiAvKiBJTlZJTkNJQkxFICovOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0YW5rU2l6ZSA9IGdldE9iamVjdFNpemUoXCJUQU5LXCIgLyogVEFOSyAqLyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uUG9pbnQueCA9IG1haW5UYW5rLnBvc2l0aW9uLnggKyB0YW5rU2l6ZS53aWR0aCAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uUG9pbnQueSA9IG1haW5UYW5rLnBvc2l0aW9uLnkgKyB0YW5rU2l6ZS5oZWlnaHQgLyAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkdBTUVPVkVSXCIgLyogR0FNRU9WRVIgKi86XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFuaW1hdGlvblBvaW50LnkgPj0gX3RoaXMuX2NhbnZhcy5jbGllbnRIZWlnaHQgLyAyICsgYW5pbWF0aW9uU2l6ZS5oZWlnaHQgLyAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvblBvaW50LnkgPSBhbmltYXRpb25Qb2ludC55IC0gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLm5leHRTcHJpdGVQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2dhbWUuc3Bhd25UYW5rKFwiRU5FTVlfVEFOS1wiIC8qIEVORU1ZX1RBTksgKi8pO1xyXG4gICAgfTtcclxuICAgIFJlbmRlcmVyLnByb3RvdHlwZS5jaGVja0tleVN0YXRlU3luYyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbWFpblRhbmsgPSB0aGlzLl9nYW1lLm1haW5UYW5rO1xyXG4gICAgICAgIHZhciBrZXlTdGF0ZSA9IHRoaXMuX2dhbWUua2V5U3RhdGU7XHJcbiAgICAgICAgaWYgKChrZXlTdGF0ZS5BcnJvd1VwID09PSB0cnVlICYmIG1haW5UYW5rLmRpcmVjdGlvbiA9PSBcInVwXCIgLyogdXAgKi8pIHx8XHJcbiAgICAgICAgICAgIChrZXlTdGF0ZS5BcnJvd1JpZ2h0ID09PSB0cnVlICYmIG1haW5UYW5rLmRpcmVjdGlvbiA9PSBcInJpZ2h0XCIgLyogcmlnaHQgKi8pIHx8XHJcbiAgICAgICAgICAgIChrZXlTdGF0ZS5BcnJvd0Rvd24gPT09IHRydWUgJiYgbWFpblRhbmsuZGlyZWN0aW9uID09IFwiZG93blwiIC8qIGRvd24gKi8pIHx8XHJcbiAgICAgICAgICAgIChrZXlTdGF0ZS5BcnJvd0xlZnQgPT09IHRydWUgJiYgbWFpblRhbmsuZGlyZWN0aW9uID09IFwibGVmdFwiIC8qIGxlZnQgKi8pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvLyNyZWdpb24gZHJhd2luZyBtZXRob2RzXHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUuZHJhd0JhY2tncm91bmQgPSBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gRFJBV0lOR19DT05TVC5jb2xvcnMuYmFja2dyb3VuZDtcclxuICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgY3R4LmNhbnZhcy5jbGllbnRXaWR0aCwgY3R4LmNhbnZhcy5jbGllbnRIZWlnaHQpO1xyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9O1xyXG4gICAgUmVuZGVyZXIucHJvdG90eXBlLmRyYXdGcmFtZSA9IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICB2YXIgRlJBTUUgPSBEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lO1xyXG4gICAgICAgIHZhciBTUFJJVEVfRlJBTUUgPSBnZXRTeXN0ZW1TcHJpdGUoXCJGUkFNRVwiIC8qIEZSQU1FICovKTtcclxuICAgICAgICB2YXIgU1BSSVRFX1RBTktfSUNPTiA9IGdldFN5c3RlbVNwcml0ZShcIlRBTktfSUNPTlwiIC8qIFRBTktfSUNPTiAqLyk7XHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gRFJBV0lOR19DT05TVC5jb2xvcnMuYmFja2dyb3VuZF9mcmFtZTtcclxuICAgICAgICAvLyB0b3BcclxuICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgY3R4LmNhbnZhcy5jbGllbnRXaWR0aCwgRlJBTUUudG9wKTtcclxuICAgICAgICAvLyBsZWZ0XHJcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIEZSQU1FLmxlZnQsIGN0eC5jYW52YXMuY2xpZW50SGVpZ2h0KTtcclxuICAgICAgICAvLyBib3R0b21cclxuICAgICAgICBjdHguZmlsbFJlY3QoMCwgY3R4LmNhbnZhcy5jbGllbnRIZWlnaHQgLSBGUkFNRS5ib3R0b20sIGN0eC5jYW52YXMuY2xpZW50V2lkdGgsIEZSQU1FLmJvdHRvbSk7XHJcbiAgICAgICAgLy8gcmlnaHRcclxuICAgICAgICBjdHguZmlsbFJlY3QoY3R4LmNhbnZhcy5jbGllbnRXaWR0aCAtIEZSQU1FLnJpZ2h0LCAwLCBGUkFNRS5yaWdodCwgY3R4LmNhbnZhcy5jbGllbnRIZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuZHJhd1Nwcml0ZShjdHgsIFNQUklURV9GUkFNRSwgeyB4OiBjdHguY2FudmFzLmNsaWVudFdpZHRoIC0gRlJBTUUucmlnaHQsIHk6IDAgfSk7XHJcbiAgICAgICAgLy8gZW5lbXkgdGFuayBsZWZ0XHJcbiAgICAgICAgdmFyIGdyb3VwcyA9IHRoaXMuX2dhbWUuZ2FtZURhdGEubGV2ZWxEYXRhLnRhbmtzO1xyXG4gICAgICAgIHZhciB0YW5rQ291bnQgPSAwO1xyXG4gICAgICAgIGdyb3Vwcy5mb3JFYWNoKGZ1bmN0aW9uIChncm91cCkge1xyXG4gICAgICAgICAgICB0YW5rQ291bnQgKz0gZ3JvdXAuREVGQVVMVCArIGdyb3VwLlNQRUVEICsgZ3JvdXAuUE9XRVIgKyBncm91cC5BUk1PVVJFRDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCAyOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0YW5rQ291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3U3ByaXRlKGN0eCwgU1BSSVRFX1RBTktfSUNPTiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBjdHguY2FudmFzLmNsaWVudFdpZHRoIC0gRlJBTUUucmlnaHQgKyAxNiAqIChqICsgMSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IDQ4ICsgMTYgKiBpXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjdHguZmlsbFJlY3QoY3R4LmNhbnZhcy5jbGllbnRXaWR0aCAtIEZSQU1FLnJpZ2h0ICsgMTYgKiAoaiArIDEpLCA0OCArIDE2ICogaSwgMTYsIDE2KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRhbmtDb3VudC0tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFAxIGxpZmVcclxuICAgICAgICB0aGlzLmRyYXdTcHJpdGUoY3R4LCBnZXRTeXN0ZW1TcHJpdGUoXCJOVU1CRVJcIiAvKiBOVU1CRVIgKi8sIHRoaXMuX2dhbWUuZ2FtZURhdGEucGxheWVyRGF0YVswXS5saWZlKSwgeyB4OiBjdHguY2FudmFzLmNsaWVudFdpZHRoIC0gRlJBTUUucmlnaHQgKyAzMiwgeTogMjg4IH0pO1xyXG4gICAgICAgIC8vIFAyIGxpZmVcclxuICAgICAgICBpZiAodGhpcy5fZ2FtZS5nYW1lRGF0YS5wbGF5ZXJEYXRhLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5kcmF3U3ByaXRlKGN0eCwgZ2V0U3lzdGVtU3ByaXRlKFwiTlVNQkVSXCIgLyogTlVNQkVSICovLCB0aGlzLl9nYW1lLmdhbWVEYXRhLnBsYXllckRhdGFbMV0ubGlmZSksIHsgeDogY3R4LmNhbnZhcy5jbGllbnRXaWR0aCAtIEZSQU1FLnJpZ2h0ICsgMzIsIHk6IDMzNiB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdChjdHguY2FudmFzLmNsaWVudFdpZHRoIC0gRlJBTUUucmlnaHQgKyAxNiwgMzIwLCAzMiwgMzIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbGV2ZWxJZCA9IHRoaXMuX2dhbWUuZ2FtZURhdGEubGV2ZWxEYXRhLmxldmVsSWQ7XHJcbiAgICAgICAgdmFyIGxldmVsVHlwZSA9IHR5cGVvZiAobGV2ZWxJZCk7XHJcbiAgICAgICAgaWYgKGxldmVsVHlwZSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgaWYgKE1hdGguZmxvb3IobGV2ZWxJZCAvIDEwKSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY3R4LmZpbGxSZWN0KGN0eC5jYW52YXMuY2xpZW50V2lkdGggLSBGUkFNRS5yaWdodCArIDE2LCA0MDAsIDE2LCAxNik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdTcHJpdGUoY3R4LCBnZXRTeXN0ZW1TcHJpdGUoXCJOVU1CRVJcIiAvKiBOVU1CRVIgKi8sIE1hdGguZmxvb3IobGV2ZWxJZCAvIDEwKSksIHsgeDogY3R4LmNhbnZhcy5jbGllbnRXaWR0aCAtIEZSQU1FLnJpZ2h0ICsgMTYsIHk6IDQwMCB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmRyYXdTcHJpdGUoY3R4LCBnZXRTeXN0ZW1TcHJpdGUoXCJOVU1CRVJcIiAvKiBOVU1CRVIgKi8sIGxldmVsSWQgJSAxMCksIHsgeDogY3R4LmNhbnZhcy5jbGllbnRXaWR0aCAtIEZSQU1FLnJpZ2h0ICsgMzIsIHk6IDQwMCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobGV2ZWxUeXBlID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gRFJBV0lOR19DT05TVC5jb2xvcnMuYmFja2dyb3VuZF9mcmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH07XHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUuZHJhd09iamVjdHMgPSBmdW5jdGlvbiAoY3R4LCBvYmplY3RzKSB7XHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iamVjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIG9iamVjdCA9IG9iamVjdHNbaV07XHJcbiAgICAgICAgICAgIHZhciBzcHJpdGUgPSBnZXRTcHJpdGVEYXRhKG9iamVjdCk7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd09iamVjdChjdHgsIG9iamVjdCwgc3ByaXRlKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2dhbWUuZGVidWcpIHtcclxuICAgICAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjRkYwMDAwJztcclxuICAgICAgICAgICAgICAgIGN0eC5zdHJva2VSZWN0KG9iamVjdC5wb3NpdGlvbi54ICsgMSwgb2JqZWN0LnBvc2l0aW9uLnkgKyAxLCBzcHJpdGUuc2l6ZS53aWR0aCAtIDIsIHNwcml0ZS5zaXplLmhlaWdodCAtIDIpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5kcmF3VGV4dChjdHgsIGAke29iamVjdC5pZH1gLCB7XHJcbiAgICAgICAgICAgICAgICAvLyBcdHg6IERSQVdJTkdfQ09OU1Quc2l6ZXMuZnJhbWUubGVmdCArIG9iamVjdC5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgICAgICAgLy8gXHR5OiBEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lLnRvcCArIG9iamVjdC5wb3NpdGlvbi55IC0gMSxcclxuICAgICAgICAgICAgICAgIC8vIH0sIHNwcml0ZS5zaXplLndpZHRoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUuZHJhd09iamVjdCA9IGZ1bmN0aW9uIChjdHgsIG9iamVjdCwgc3ByaXRlKSB7XHJcbiAgICAgICAgdmFyIHNwcml0ZV9zcmMgPSB0aGlzLl9tYWluU3ByaXRlO1xyXG4gICAgICAgIGlmIChvYmplY3QudmlzaWJsZSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvYmplY3Qub2JqZWN0VHlwZSA9PT0gXCJBTklNQVRJT05cIiAvKiBBTklNQVRJT04gKi8pIHtcclxuICAgICAgICAgICAgdmFyIGFuaW1hdGlvbiA9IG9iamVjdDtcclxuICAgICAgICAgICAgaWYgKGFuaW1hdGlvbi5hbmltYXRpb25UeXBlID09PSBcIlRJVExFXCIgLyogVElUTEUgKi8pIHtcclxuICAgICAgICAgICAgICAgIHNwcml0ZV9zcmMgPSB0aGlzLl90aXRsZVNwcml0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3ByaXRlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKG9iamVjdC5vYmplY3RUeXBlID09PSBcIkJMT0NLXCIgLyogQkxPQ0sgKi8pIHtcclxuICAgICAgICAgICAgICAgIHZhciBibG9jayA9IG9iamVjdDtcclxuICAgICAgICAgICAgICAgIHZhciBibG9ja1N0YXRlID0gYmxvY2suYmxvY2tTdGF0ZTR4NDtcclxuICAgICAgICAgICAgICAgIHZhciBjZWxsU2l6ZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogc3ByaXRlLnNpemUud2lkdGggLyA0LFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogc3ByaXRlLnNpemUud2lkdGggLyA0XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBibG9ja1N0YXRlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBibG9ja1N0YXRlW2ldLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChibG9ja1N0YXRlW2ldW2pdID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKHNwcml0ZV9zcmMsIHNwcml0ZS5wb3NpdGlvbi54ICsgY2VsbFNpemUud2lkdGggKiBqLCBzcHJpdGUucG9zaXRpb24ueSArIGNlbGxTaXplLmhlaWdodCAqIGksIGNlbGxTaXplLndpZHRoLCBjZWxsU2l6ZS5oZWlnaHQsIG9iamVjdC5wb3NpdGlvbi54ICsgY2VsbFNpemUud2lkdGggKiBqLCBvYmplY3QucG9zaXRpb24ueSArIGNlbGxTaXplLmhlaWdodCAqIGksIGNlbGxTaXplLndpZHRoLCBjZWxsU2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShzcHJpdGVfc3JjLCBzcHJpdGUucG9zaXRpb24ueCwgc3ByaXRlLnBvc2l0aW9uLnksIHNwcml0ZS5zaXplLndpZHRoLCBzcHJpdGUuc2l6ZS5oZWlnaHQsIG9iamVjdC5wb3NpdGlvbi54LCBvYmplY3QucG9zaXRpb24ueSwgc3ByaXRlLnNpemUud2lkdGgsIHNwcml0ZS5zaXplLmhlaWdodCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgUmVuZGVyZXIucHJvdG90eXBlLmRyYXdEZWJ1Z0NvdW50ZXIgPSBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgICAgdmFyIHRhbmsgPSB0aGlzLl9nYW1lLm1haW5UYW5rO1xyXG4gICAgICAgIGlmICh0YW5rICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5kcmF3VGV4dChjdHgsIFwiTUFJTiBUQU5LOiBUQU5LX1wiICsgdGFuay50YW5rQ29sb3IgKyBcIl9cIiArIHRhbmsudGFua0xldmVsICsgXCIoXCIgKyB0YW5rLnBvc2l0aW9uLnggKyBcIiwgXCIgKyB0YW5rLnBvc2l0aW9uLnkgKyBcIiwgXCIgKyB0YW5rLmRpcmVjdGlvbi50b1N0cmluZygpICsgXCIpXCIsIHsgeDogMCwgeTogMTUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdUZXh0KGN0eCwgXCJNQUlOIFRBTks6IE5PVCBGT1VORFwiLCB7IHg6IDAsIHk6IDE1IH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZnBzID0gKDEwMDAgLyB0aGlzLl9mcHMuZWxhcHNlZCkudG9GaXhlZCgyKSArIFwiZnBzIFwiO1xyXG4gICAgICAgIHRoaXMuZHJhd1RleHQoY3R4LCBmcHMsIHsgeDogY3R4LmNhbnZhcy53aWR0aCAtIChjdHgubWVhc3VyZVRleHQoZnBzKS53aWR0aCAqIDEuMzUpLCB5OiAxNSB9KTtcclxuICAgICAgICB2YXIga2V5U3RhdGUgPSB0aGlzLl9nYW1lLmtleVN0YXRlO1xyXG4gICAgICAgIHRoaXMuZHJhd1RleHQoY3R4LCBcIlNwYWNlOiBcIiArIChrZXlTdGF0ZS5TcGFjZSA/ICdUJyA6ICdGJyksIHsgeDogMCwgeTogY3R4LmNhbnZhcy5oZWlnaHQgfSk7XHJcbiAgICAgICAgdGhpcy5kcmF3VGV4dChjdHgsIFwiQXJyb3dMZWZ0OiBcIiArIChrZXlTdGF0ZS5BcnJvd0xlZnQgPyAnVCcgOiAnRicpLCB7IHg6IDAsIHk6IGN0eC5jYW52YXMuaGVpZ2h0IC0gMTUgfSk7XHJcbiAgICAgICAgdGhpcy5kcmF3VGV4dChjdHgsIFwiQXJyb3dEb3duOiBcIiArIChrZXlTdGF0ZS5BcnJvd0Rvd24gPyAnVCcgOiAnRicpLCB7IHg6IDAsIHk6IGN0eC5jYW52YXMuaGVpZ2h0IC0gMzAgfSk7XHJcbiAgICAgICAgdGhpcy5kcmF3VGV4dChjdHgsIFwiQXJyb3dSaWdodDogXCIgKyAoa2V5U3RhdGUuQXJyb3dSaWdodCA/ICdUJyA6ICdGJyksIHsgeDogMCwgeTogY3R4LmNhbnZhcy5oZWlnaHQgLSA0NSB9KTtcclxuICAgICAgICB0aGlzLmRyYXdUZXh0KGN0eCwgXCJBcnJvd1VwOiBcIiArIChrZXlTdGF0ZS5BcnJvd1VwID8gJ1QnIDogJ0YnKSwgeyB4OiAwLCB5OiBjdHguY2FudmFzLmhlaWdodCAtIDYwIH0pO1xyXG4gICAgICAgIHRoaXMuZHJhd1RleHQoY3R4LCBcIltJS2V5U3RhdGVdXCIsIHsgeDogMCwgeTogY3R4LmNhbnZhcy5oZWlnaHQgLSA3NSB9KTtcclxuICAgIH07XHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUuZHJhd1RleHQgPSBmdW5jdGlvbiAoY3R4LCB0ZXh0LCBwb3NpdGlvbiwgbWF4V2lkdGgpIHtcclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgIGN0eC5mb250ID0gRFJBV0lOR19DT05TVC5kZWJ1Zy5mb250LnNpemUgKyBcInB4IFwiICsgRFJBV0lOR19DT05TVC5kZWJ1Zy5mb250LmZvbnQ7XHJcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ3doaXRlJztcclxuICAgICAgICBjdHgubGluZVdpZHRoID0gMjtcclxuICAgICAgICBjdHguc3Ryb2tlVGV4dCh0ZXh0LCBwb3NpdGlvbi54LCBwb3NpdGlvbi55LCBtYXhXaWR0aCk7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdibGFjayc7XHJcbiAgICAgICAgY3R4LmZpbGxUZXh0KHRleHQsIHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIG1heFdpZHRoKTtcclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfTtcclxuICAgIFJlbmRlcmVyLnByb3RvdHlwZS5kcmF3U3ByaXRlID0gZnVuY3Rpb24gKGN0eCwgc3ByaXRlLCBwb3NpdGlvbiwgc2l6ZSkge1xyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLl9tYWluU3ByaXRlLCBzcHJpdGUucG9zaXRpb24ueCwgc3ByaXRlLnBvc2l0aW9uLnksIHNwcml0ZS5zaXplLndpZHRoLCBzcHJpdGUuc2l6ZS5oZWlnaHQsIHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIHNpemUgIT0gdW5kZWZpbmVkID8gc2l6ZS53aWR0aCA6IHNwcml0ZS5zaXplLndpZHRoLCBzaXplICE9IHVuZGVmaW5lZCA/IHNpemUuaGVpZ2h0IDogc3ByaXRlLnNpemUuaGVpZ2h0KTtcclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfTtcclxuICAgIC8vI2VuZHJlZ2lvblxyXG4gICAgLy8jcmVnaW9uIHB1YmxpYyBtZXRob2RzXHJcbiAgICAvKipcclxuICAgICAqIFRlc3Qgb2JqZWN0IGlzIHZpc2libGVcclxuICAgICAqIEBwYXJhbSBvYmplY3Qgb2JqZWN0IGZvciB0ZXN0XHJcbiAgICAgKiBAcGFyYW0gc3ByaXRlIG9iamVjdCdzIHNwcml0ZSBkYXRhIGZvciBzaXplXHJcbiAgICAgKi9cclxuICAgIFJlbmRlcmVyLnByb3RvdHlwZS5vYmplY3RWaXNpYmxlVGVzdCA9IGZ1bmN0aW9uIChvYmplY3QpIHtcclxuICAgICAgICB2YXIgcG9zaXRpb24gPSBvYmplY3QucG9zaXRpb247XHJcbiAgICAgICAgdmFyIHNpemUgPSBnZXRTcHJpdGVEYXRhKG9iamVjdCkuc2l6ZTtcclxuICAgICAgICB2YXIgY3R4ID0gdGhpcy5fY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgaWYgKHBvc2l0aW9uLnggPj0gRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS5sZWZ0ICYmXHJcbiAgICAgICAgICAgIHBvc2l0aW9uLnggKyBzaXplLndpZHRoIDw9IGN0eC5jYW52YXMuY2xpZW50V2lkdGggLSBEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lLnJpZ2h0ICYmXHJcbiAgICAgICAgICAgIHBvc2l0aW9uLnkgPj0gRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS50b3AgJiZcclxuICAgICAgICAgICAgcG9zaXRpb24ueSArIHNpemUuaGVpZ2h0IDw9IGN0eC5jYW52YXMuY2xpZW50SGVpZ2h0IC0gRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS5ib3R0b20pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFJlbmRlcmVyLnByb3RvdHlwZS5yYW5kb21Qb2ludCA9IGZ1bmN0aW9uIChzaXplKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgeDogZ2V0UmFuZG9tUmFuZ2UoRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS5sZWZ0LCB0aGlzLl9jYW52YXMud2lkdGggLSBEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lLnJpZ2h0IC0gc2l6ZS53aWR0aCksXHJcbiAgICAgICAgICAgIHk6IGdldFJhbmRvbVJhbmdlKERSQVdJTkdfQ09OU1Quc2l6ZXMuZnJhbWUudG9wLCB0aGlzLl9jYW52YXMuaGVpZ2h0IC0gRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS5ib3R0b20gLSBzaXplLmhlaWdodCksXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIENhbGN1bGF0ZSBhbmQgcmV0dXJuIFotSW5kZXggZm9yIHJlbmRlclxyXG4gICAgICogMDogV2F0ZXIgQmxvY2tcclxuICAgICAqIDE6IFRhbmtzLCBCcmVha2FibGUgQmxvY2tzXHJcbiAgICAgKiAyOiBJbnZpbmNpYmxlIEFuaW1hdGlvbiwgQnVsbGV0c1xyXG4gICAgICogMzogQnVzaFxyXG4gICAgICogNDogRXhwbG9kZSBBbmltYXRpb25zLCBTY29yZSBBbmltYXRpb25zLCBTcGF3bmluZyBBbmltYXRpb25cclxuICAgICAqIDU6IEl0ZW1zXHJcbiAgICAgKiA2OiBTeXN0ZW0gU3ByaXRlcyhHYW1lIE92ZXIuLi4gZXRjKVxyXG4gICAgICogQHBhcmFtIG9iamVjdCBvYmplY3QgZm9yIGNhbGN1bGF0ZVxyXG4gICAgICovXHJcbiAgICBSZW5kZXJlci5nZXRPYmplY3RaSW5kZXggPSBmdW5jdGlvbiAob2JqZWN0KSB7XHJcbiAgICAgICAgc3dpdGNoIChvYmplY3Qub2JqZWN0VHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiQkxPQ0tcIiAvKiBCTE9DSyAqLzpcclxuICAgICAgICAgICAgICAgIHZhciBibG9jayA9IG9iamVjdDtcclxuICAgICAgICAgICAgICAgIGlmIChibG9jay5ibG9ja1R5cGUgPT09IFwiV0FURVJcIiAvKiBXQVRFUiAqLykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoYmxvY2suYmxvY2tUeXBlID09PSBcIkJVU0hcIiAvKiBCVVNIICovKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcIlRBTktcIiAvKiBUQU5LICovOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgIGNhc2UgXCJBTklNQVRJT05cIiAvKiBBTklNQVRJT04gKi86XHJcbiAgICAgICAgICAgICAgICB2YXIgYW5pbWF0aW9uID0gb2JqZWN0O1xyXG4gICAgICAgICAgICAgICAgaWYgKGFuaW1hdGlvbi5hbmltYXRpb25UeXBlID09PSBcIklOVklOQ0lCTEVcIiAvKiBJTlZJTkNJQkxFICovKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gNDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcIkJVTExFVFwiIC8qIEJVTExFVCAqLzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAyO1xyXG4gICAgICAgICAgICBjYXNlIFwiSVRFTVwiIC8qIElURU0gKi86XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gNTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFJlbmRlcmVyO1xyXG59KCkpO1xyXG5leHBvcnQgZGVmYXVsdCBSZW5kZXJlcjtcclxuIiwiaW1wb3J0IFNQUlRJRV9ERUYgZnJvbSBcIi4vU3ByaXRlRGVmaW5pdGlvblwiO1xyXG5pbXBvcnQgVGFua0FJT0JqZWN0IGZyb20gXCIuLi8uLi9HYW1lL09iamVjdC9UYW5rQUlPYmplY3RcIjtcclxuLyoqXHJcbiAqIEZpbmQgc3ByaXRlIGRhdGEgZm9yIGdpdmVuIG9iamVjdFxyXG4gKiBAcGFyYW0gb2JqZWN0IGZvdW5kIHNwcml0ZSBkZWZpbml0aW9uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3ByaXRlRGF0YShvYmplY3QpIHtcclxuICAgIHN3aXRjaCAob2JqZWN0Lm9iamVjdFR5cGUpIHtcclxuICAgICAgICBjYXNlIFwiVEFOS1wiIC8qIFRBTksgKi86XHJcbiAgICAgICAgICAgIHZhciB0YW5rID0gb2JqZWN0O1xyXG4gICAgICAgICAgICBpZiAodGFuayBpbnN0YW5jZW9mIFRhbmtBSU9CamVjdCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFNQUlRJRV9ERUYuRU5FTVlbdGFuay50YW5rQ29sb3JdW3RhbmsudGFua0xldmVsXVt0YW5rLmRpcmVjdGlvbl1bdGFuay5zcHJpdGVQb3NpdGlvbl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gU1BSVElFX0RFRi5UQU5LW3RhbmsudGFua0NvbG9yXVt0YW5rLnRhbmtMZXZlbF1bdGFuay5kaXJlY3Rpb25dW3Rhbmsuc3ByaXRlUG9zaXRpb25dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBcIkJVTExFVFwiIC8qIEJVTExFVCAqLzpcclxuICAgICAgICAgICAgdmFyIGJ1bGxldCA9IG9iamVjdDtcclxuICAgICAgICAgICAgcmV0dXJuIFNQUlRJRV9ERUYuQlVMTEVUW2J1bGxldC5kaXJlY3Rpb25dO1xyXG4gICAgICAgIGNhc2UgXCJBTklNQVRJT05cIiAvKiBBTklNQVRJT04gKi86XHJcbiAgICAgICAgICAgIHZhciBhbmltYXRpb24gPSBvYmplY3Q7XHJcbiAgICAgICAgICAgIHJldHVybiBTUFJUSUVfREVGLkFOSU1BVElPTlthbmltYXRpb24uYW5pbWF0aW9uVHlwZV1bYW5pbWF0aW9uLnNwcml0ZVBvc2l0aW9uXTtcclxuICAgICAgICBjYXNlIFwiQkxPQ0tcIiAvKiBCTE9DSyAqLzpcclxuICAgICAgICAgICAgdmFyIGJsb2NrID0gb2JqZWN0O1xyXG4gICAgICAgICAgICByZXR1cm4gU1BSVElFX0RFRi5CTE9DS1tibG9jay5ibG9ja1R5cGVdW2Jsb2NrLnNwcml0ZVBvc2l0aW9uXTtcclxuICAgICAgICBjYXNlIFwiSVRFTVwiIC8qIElURU0gKi86XHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gb2JqZWN0O1xyXG4gICAgICAgICAgICByZXR1cm4gU1BSVElFX0RFRi5JVEVNW2l0ZW0uaXRlbVR5cGVdO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTeXN0ZW1TcHJpdGUoc3ByaXRlVHlwZSwgbnVtYmVyKSB7XHJcbiAgICBpZiAobnVtYmVyID09PSB2b2lkIDApIHsgbnVtYmVyID0gMDsgfVxyXG4gICAgc3dpdGNoIChzcHJpdGVUeXBlKSB7XHJcbiAgICAgICAgY2FzZSBcIk5VTExcIiAvKiBOVUxMICovOlxyXG4gICAgICAgIGNhc2UgXCJUQU5LX0lDT05cIiAvKiBUQU5LX0lDT04gKi86XHJcbiAgICAgICAgY2FzZSBcIlNUQUdFXCIgLyogU1RBR0UgKi86XHJcbiAgICAgICAgY2FzZSBcIkZSQU1FXCIgLyogRlJBTUUgKi86XHJcbiAgICAgICAgICAgIHJldHVybiBTUFJUSUVfREVGLlNZU1RFTVtzcHJpdGVUeXBlXTtcclxuICAgICAgICBjYXNlIFwiTlVNQkVSXCIgLyogTlVNQkVSICovOlxyXG4gICAgICAgICAgICByZXR1cm4gU1BSVElFX0RFRi5TWVNURU0uTlVNQkVSW251bWJlcl07XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNwcml0ZVNpemUob2JqZWN0KSB7XHJcbiAgICByZXR1cm4gZ2V0U3ByaXRlRGF0YShvYmplY3QpLnNpemU7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE9iamVjdFNpemUodHlwZSwgZGlyZWN0aW9uKSB7XHJcbiAgICBpZiAoZGlyZWN0aW9uID09IG51bGwpIHtcclxuICAgICAgICBkaXJlY3Rpb24gPSBcInVwXCIgLyogdXAgKi87XHJcbiAgICB9XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlIFwiQkxPQ0tcIiAvKiBCTE9DSyAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIFNQUlRJRV9ERUYuQkxPQ0suQlJJQ0tbMF0uc2l6ZTtcclxuICAgICAgICBjYXNlIFwiVEFOS1wiIC8qIFRBTksgKi86XHJcbiAgICAgICAgICAgIHJldHVybiBTUFJUSUVfREVGLlRBTksuWUVMTE9XWzBdW2RpcmVjdGlvbl1bMF0uc2l6ZTtcclxuICAgICAgICBjYXNlIFwiQlVMTEVUXCIgLyogQlVMTEVUICovOlxyXG4gICAgICAgICAgICByZXR1cm4gU1BSVElFX0RFRi5CVUxMRVRbZGlyZWN0aW9uXS5zaXplO1xyXG4gICAgICAgIGNhc2UgXCJJVEVNXCIgLyogSVRFTSAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIFNQUlRJRV9ERUYuSVRFTS5CT01CLnNpemU7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFuaW1hdGlvblNpemUodHlwZSwgZnJhbWUpIHtcclxuICAgIHJldHVybiBTUFJUSUVfREVGLkFOSU1BVElPTlt0eXBlXVtmcmFtZV0uc2l6ZTtcclxufVxyXG4iLCI7XHJcbnZhciBTUFJUSUVfREVGID0ge1xyXG4gICAgVEFOSzoge1xyXG4gICAgICAgIFlFTExPVzogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMCwgeTogMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMiwgeTogMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNjQsIHk6IDAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogOTYsIHk6IDAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDEyOCwgeTogMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxNjAsIHk6IDAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxOTIsIHk6IDAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjI0LCB5OiAwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDAsIHk6IDMyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyLCB5OiAzMiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNjQsIHk6IDMyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDk2LCB5OiAzMiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTI4LCB5OiAzMiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxNjAsIHk6IDMyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTkyLCB5OiAzMiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyMjQsIHk6IDMyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDAsIHk6IDY0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyLCB5OiA2NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNjQsIHk6IDY0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDk2LCB5OiA2NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTI4LCB5OiA2NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxNjAsIHk6IDY0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTkyLCB5OiA2NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyMjQsIHk6IDY0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDAsIHk6IDk2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyLCB5OiA5NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNjQsIHk6IDk2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDk2LCB5OiA5NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTI4LCB5OiA5NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxNjAsIHk6IDk2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTkyLCB5OiA5NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyMjQsIHk6IDk2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgR1JFRU46IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDAsIHk6IDI1NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMiwgeTogMjU2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA2NCwgeTogMjU2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDk2LCB5OiAyNTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDEyOCwgeTogMjU2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE2MCwgeTogMjU2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTkyLCB5OiAyNTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjI0LCB5OiAyNTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMCwgeTogMjg4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyLCB5OiAyODggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDY0LCB5OiAyODggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogOTYsIHk6IDI4OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTI4LCB5OiAyODggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTYwLCB5OiAyODggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxOTIsIHk6IDI4OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyMjQsIHk6IDI4OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAwLCB5OiAzMjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIsIHk6IDMyMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNjQsIHk6IDMyMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA5NiwgeTogMzIwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxMjgsIHk6IDMyMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxNjAsIHk6IDMyMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE5MiwgeTogMzIwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDIyNCwgeTogMzIwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDAsIHk6IDM1MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMiwgeTogMzUyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA2NCwgeTogMzUyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDk2LCB5OiAzNTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDEyOCwgeTogMzUyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE2MCwgeTogMzUyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTkyLCB5OiAzNTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjI0LCB5OiAzNTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBXSElURTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjU2LCB5OiAwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI4OCwgeTogMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIwLCB5OiAwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM1MiwgeTogMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzg0LCB5OiAwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQxNiwgeTogMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ0OCwgeTogMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0ODAsIHk6IDAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjU2LCB5OiAzMiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyODgsIHk6IDMyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMjAsIHk6IDMyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM1MiwgeTogMzIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM4NCwgeTogMzIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDE2LCB5OiAzMiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ0OCwgeTogMzIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDgwLCB5OiAzMiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyNTYsIHk6IDY0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI4OCwgeTogNjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyMCwgeTogNjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzUyLCB5OiA2NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzg0LCB5OiA2NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0MTYsIHk6IDY0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDQ4LCB5OiA2NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0ODAsIHk6IDY0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI1NiwgeTogOTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjg4LCB5OiA5NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIwLCB5OiA5NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzNTIsIHk6IDk2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzODQsIHk6IDk2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQxNiwgeTogOTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0NDgsIHk6IDk2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ4MCwgeTogOTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBNQUdFTlRBOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyNTYsIHk6IDI1NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyODgsIHk6IDI1NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIwLCB5OiAyNTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzUyLCB5OiAyNTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM4NCwgeTogMjU2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQxNiwgeTogMjU2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDQ4LCB5OiAyNTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDgwLCB5OiAyNTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjU2LCB5OiAyODggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjg4LCB5OiAyODggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyMCwgeTogMjg4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM1MiwgeTogMjg4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzODQsIHk6IDI4OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0MTYsIHk6IDI4OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ0OCwgeTogMjg4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ4MCwgeTogMjg4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI1NiwgeTogMzIwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI4OCwgeTogMzIwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMjAsIHk6IDMyMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzNTIsIHk6IDMyMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzg0LCB5OiAzMjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDE2LCB5OiAzMjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0NDgsIHk6IDMyMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0ODAsIHk6IDMyMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyNTYsIHk6IDM1MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyODgsIHk6IDM1MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIwLCB5OiAzNTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzUyLCB5OiAzNTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM4NCwgeTogMzUyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQxNiwgeTogMzUyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDQ4LCB5OiAzNTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDgwLCB5OiAzNTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbiAgICBFTkVNWToge1xyXG4gICAgICAgIFlFTExPVzogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMCwgeTogMTI4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyLCB5OiAxMjggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDY0LCB5OiAxMjggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogOTYsIHk6IDEyOCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTI4LCB5OiAxMjggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTYwLCB5OiAxMjggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxOTIsIHk6IDEyOCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyMjQsIHk6IDEyOCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAwLCB5OiAxNjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIsIHk6IDE2MCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNjQsIHk6IDE2MCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA5NiwgeTogMTYwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxMjgsIHk6IDE2MCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxNjAsIHk6IDE2MCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE5MiwgeTogMTYwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDIyNCwgeTogMTYwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDAsIHk6IDE5MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMiwgeTogMTkyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA2NCwgeTogMTkyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDk2LCB5OiAxOTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDEyOCwgeTogMTkyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE2MCwgeTogMTkyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTkyLCB5OiAxOTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjI0LCB5OiAxOTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMCwgeTogMjI0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyLCB5OiAyMjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDY0LCB5OiAyMjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogOTYsIHk6IDIyNCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTI4LCB5OiAyMjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTYwLCB5OiAyMjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxOTIsIHk6IDIyNCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyMjQsIHk6IDIyNCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIEdSRUVOOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAwLCB5OiAzODQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIsIHk6IDM4NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNjQsIHk6IDM4NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA5NiwgeTogMzg0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxMjgsIHk6IDM4NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxNjAsIHk6IDM4NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE5MiwgeTogMzg0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDIyNCwgeTogMzg0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDAsIHk6IDQxNiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMiwgeTogNDE2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA2NCwgeTogNDE2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDk2LCB5OiA0MTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDEyOCwgeTogNDE2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE2MCwgeTogNDE2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTkyLCB5OiA0MTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjI0LCB5OiA0MTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMCwgeTogNDQ4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyLCB5OiA0NDggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDY0LCB5OiA0NDggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogOTYsIHk6IDQ0OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTI4LCB5OiA0NDggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTYwLCB5OiA0NDggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxOTIsIHk6IDQ0OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyMjQsIHk6IDQ0OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAwLCB5OiA0ODAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIsIHk6IDQ4MCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNjQsIHk6IDQ4MCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA5NiwgeTogNDgwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxMjgsIHk6IDQ4MCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxNjAsIHk6IDQ4MCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE5MiwgeTogNDgwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDIyNCwgeTogNDgwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgV0hJVEU6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI1NiwgeTogMTI4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI4OCwgeTogMTI4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMjAsIHk6IDEyOCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzNTIsIHk6IDEyOCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzg0LCB5OiAxMjggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDE2LCB5OiAxMjggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0NDgsIHk6IDEyOCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0ODAsIHk6IDEyOCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyNTYsIHk6IDE2MCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyODgsIHk6IDE2MCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIwLCB5OiAxNjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzUyLCB5OiAxNjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM4NCwgeTogMTYwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQxNiwgeTogMTYwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDQ4LCB5OiAxNjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDgwLCB5OiAxNjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjU2LCB5OiAxOTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjg4LCB5OiAxOTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyMCwgeTogMTkyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM1MiwgeTogMTkyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzODQsIHk6IDE5MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0MTYsIHk6IDE5MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ0OCwgeTogMTkyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ4MCwgeTogMTkyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI1NiwgeTogMjI0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI4OCwgeTogMjI0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMjAsIHk6IDIyNCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzNTIsIHk6IDIyNCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzg0LCB5OiAyMjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDE2LCB5OiAyMjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0NDgsIHk6IDIyNCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0ODAsIHk6IDIyNCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIE1BR0VOVEE6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI1NiwgeTogMzg0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI4OCwgeTogMzg0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMjAsIHk6IDM4NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzNTIsIHk6IDM4NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzg0LCB5OiAzODQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDE2LCB5OiAzODQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0NDgsIHk6IDM4NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0ODAsIHk6IDM4NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyNTYsIHk6IDQxNiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyODgsIHk6IDQxNiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIwLCB5OiA0MTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzUyLCB5OiA0MTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM4NCwgeTogNDE2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQxNiwgeTogNDE2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDQ4LCB5OiA0MTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDgwLCB5OiA0MTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjU2LCB5OiA0NDggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjg4LCB5OiA0NDggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyMCwgeTogNDQ4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM1MiwgeTogNDQ4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzODQsIHk6IDQ0OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0MTYsIHk6IDQ0OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ0OCwgeTogNDQ4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ4MCwgeTogNDQ4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI1NiwgeTogNDgwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI4OCwgeTogNDgwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMjAsIHk6IDQ4MCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzNTIsIHk6IDQ4MCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzg0LCB5OiA0ODAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDE2LCB5OiA0ODAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0NDgsIHk6IDQ4MCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0ODAsIHk6IDQ4MCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIEJVTExFVDoge1xyXG4gICAgICAgIHVwOiB7IHBvc2l0aW9uOiB7IHg6IDY0NiwgeTogMjA0IH0sIHNpemU6IHsgd2lkdGg6IDYsIGhlaWdodDogOCB9IH0sXHJcbiAgICAgICAgbGVmdDogeyBwb3NpdGlvbjogeyB4OiA2NjAsIHk6IDIwNCB9LCBzaXplOiB7IHdpZHRoOiA4LCBoZWlnaHQ6IDYgfSB9LFxyXG4gICAgICAgIGRvd246IHsgcG9zaXRpb246IHsgeDogNjc4LCB5OiAyMDQgfSwgc2l6ZTogeyB3aWR0aDogNiwgaGVpZ2h0OiA4IH0gfSxcclxuICAgICAgICByaWdodDogeyBwb3NpdGlvbjogeyB4OiA2OTIsIHk6IDIwNCB9LCBzaXplOiB7IHdpZHRoOiA4LCBoZWlnaHQ6IDYgfSB9XHJcbiAgICB9LFxyXG4gICAgQkxPQ0s6IHtcclxuICAgICAgICBCUklDSzogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA1MTIsIHk6IDAgfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgSVJPTjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA1MTIsIHk6IDMyIH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFdBVEVSOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDUxMiwgeTogOTYgfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNTQ0LCB5OiA5NiB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBCVVNIOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDU0NCwgeTogNjQgfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgRUFHTEU6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNjA4LCB5OiA2NCB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA2NDAsIHk6IDY0IH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9LFxyXG4gICAgQU5JTUFUSU9OOiB7XHJcbiAgICAgICAgRVhQTE9TSU9OX1NNQUxMOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDUxOCwgeTogMjYwIH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAyMiwgaGVpZ2h0OiAyMiB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDU0NCwgeTogMjU4IH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAzMCwgaGVpZ2h0OiAyOCB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDU3NiwgeTogMjU2IH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIEVYUExPU0lPTl9MQVJHRTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA2MTAsIHk6IDI1OCB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogNTgsIGhlaWdodDogNTggfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA2NjgsIHk6IDI1NiB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogNjgsIGhlaWdodDogNjQgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBJTlZJTkNJQkxFOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDUxMiwgeTogMjg4IH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDU0NCwgeTogMjg4IH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBTUEFXTjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA1MTgsIHk6IDE5OCB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMTgsIGhlaWdodDogMTggfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA1NDgsIHk6IDE5NiB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMjIsIGhlaWdodDogMjIgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA1NzgsIHk6IDE5NCB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMjYsIGhlaWdodDogMjYgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA2MDgsIHk6IDE5MiB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMzAsIGhlaWdodDogMzAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgU0NPUkVfMTAwOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDU4MCwgeTogMzI4IH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAyNiwgaGVpZ2h0OiAxNCB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBTQ09SRV8yMDA6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNjEwLCB5OiAzMjggfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDI4LCBoZWlnaHQ6IDE0IH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIFNDT1JFXzMwMDogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA2NDIsIHk6IDMyOCB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMjgsIGhlaWdodDogMTQgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgU0NPUkVfNDAwOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDY3NCwgeTogMzI4IH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAyOCwgaGVpZ2h0OiAxNCB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBTQ09SRV81MDA6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNzA2LCB5OiAzMjggfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDI4LCBoZWlnaHQ6IDE0IH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIEdBTUVPVkVSOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDU3OCwgeTogMzY4IH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiA2MiwgaGVpZ2h0OiAzMCB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBQQVVTRTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA1NzgsIHk6IDM1MiB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogNzgsIGhlaWdodDogMTQgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBUSVRMRTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAwLCB5OiAwIH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiA1MTIsIGhlaWdodDogNDgwIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgQ1VSU09SOiBbXHJcbiAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTkyLCB5OiAwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyMjQsIHk6IDAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICBJVEVNOiB7XHJcbiAgICAgICAgSEVMTUVUOiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDUxMiwgeTogMjI0IH0sXHJcbiAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMwIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFdBVENIOiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDU0NCwgeTogMjI0IH0sXHJcbiAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMwIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFNIT1ZFTDoge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA1NzYsIHk6IDIyNCB9LFxyXG4gICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMCB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBTVEFSOiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDYwOCwgeTogMjI0IH0sXHJcbiAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMwIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIEJPTUI6IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNjQwLCB5OiAyMjQgfSxcclxuICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgVEFOSzoge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA2NzIsIHk6IDIyNCB9LFxyXG4gICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMCB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBQSVNUT0w6IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNzA0LCB5OiAyMjQgfSxcclxuICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzAgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgU1lTVEVNOiB7XHJcbiAgICAgICAgTlVMTDoge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAwLCB5OiAwIH0sXHJcbiAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDAsIGhlaWdodDogMCB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBUQU5LX0lDT046IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNjQwLCB5OiAzODQgfSxcclxuICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMTYsIGhlaWdodDogMTYgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgU1RBR0U6IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNjU4LCB5OiAzNTEgfSxcclxuICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogNzgsIGhlaWdodDogMTYgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgTlVNQkVSOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDY1NywgeTogMzY3IH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAxNiwgaGVpZ2h0OiAxNiB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDY3NCwgeTogMzY3IH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAxNiwgaGVpZ2h0OiAxNiB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDY4OSwgeTogMzY3IH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAxNiwgaGVpZ2h0OiAxNiB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDcwNSwgeTogMzY3IH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAxNiwgaGVpZ2h0OiAxNiB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDcyMSwgeTogMzY3IH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAxNiwgaGVpZ2h0OiAxNiB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDY1NywgeTogMzgzIH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAxNiwgaGVpZ2h0OiAxNiB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDY3NCwgeTogMzgzIH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAxNiwgaGVpZ2h0OiAxNiB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDY4OSwgeTogMzgzIH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAxNiwgaGVpZ2h0OiAxNiB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDcwNSwgeTogMzgzIH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAxNiwgaGVpZ2h0OiAxNiB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDcyMSwgeTogMzgzIH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAxNiwgaGVpZ2h0OiAxNiB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIEZSQU1FOiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDczNiwgeTogMCB9LFxyXG4gICAgICAgICAgICBzaXplOiB7IHdpZHRoOiA2NCwgaGVpZ2h0OiA0ODAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFNQUlRJRV9ERUY7XHJcbiIsImV4cG9ydCBkZWZhdWx0IFwiLi4vZGlzdC9qcy9zcHJpdGVfbWFpbi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi4uL2Rpc3QvanMvc3ByaXRlX3RpdGxlLnBuZ1wiOyIsImltcG9ydCB7IGdldFNwcml0ZURhdGEgfSBmcm9tIFwiLi4vUmVuZGVyL1Nwcml0ZS9TcHJpdGVEYXRhXCI7XHJcbi8qKlxyXG4qIFRlc3RzIHR3byBvYmplY3RzIGFyZSBjb2xsaXNpb25zIChyZWN0YW5nbGUgYm91bmRpbmcgYm94IGNvbGxpc2lvbiB0ZXN0KVxyXG4qIEBwYXJhbSBvYmplY3QxIGZpcnN0IG9iamVjdFxyXG4qIEBwYXJhbSBzcHJpdGUxIGZpcnN0IG9iamVjdCdzIHNwcml0ZSBkYXRhIGZvciBzaXplXHJcbiogQHBhcmFtIG9iamVjdDIgc2Vjb25kIG9iamVjdFxyXG4qIEBwYXJhbSBzcHJpdGUyIHNlY29uZCBvYmplY3QncyBzcHJpdGUgZGF0YSBmb3Igc2l6ZVxyXG4qL1xyXG5leHBvcnQgZnVuY3Rpb24gT2JqZWN0Q29sbGlzaW9uVGVzdChvYmplY3QxLCBvYmplY3QyKSB7XHJcbiAgICB2YXIgc2l6ZTEgPSBnZXRTcHJpdGVEYXRhKG9iamVjdDEpLnNpemU7XHJcbiAgICB2YXIgc2l6ZTIgPSBnZXRTcHJpdGVEYXRhKG9iamVjdDIpLnNpemU7XHJcbiAgICByZXR1cm4gUmVjdGFuZ2xlQ29sbGlzaW9uVGVzdChvYmplY3QxLnBvc2l0aW9uLCBzaXplMSwgb2JqZWN0Mi5wb3NpdGlvbiwgc2l6ZTIpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBCbG9ja0NvbGxpc2lvblRlc3QoYmxvY2ssIG9iamVjdCkge1xyXG4gICAgdmFyIGNlbGxzID0gW107XHJcbiAgICB2YXIgYmxvY2tTaXplID0gZ2V0U3ByaXRlRGF0YShibG9jaykuc2l6ZTtcclxuICAgIHZhciBvYmplY3RTaXplID0gZ2V0U3ByaXRlRGF0YShvYmplY3QpLnNpemU7XHJcbiAgICB2YXIgY2VsbFBvc2l0aW9uO1xyXG4gICAgdmFyIGNlbGxTaXplID0ge1xyXG4gICAgICAgIHdpZHRoOiBibG9ja1NpemUud2lkdGggLyA0LFxyXG4gICAgICAgIGhlaWdodDogYmxvY2tTaXplLmhlaWdodCAvIDRcclxuICAgIH07XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJsb2NrLmJsb2NrU3RhdGU0eDQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGJsb2NrLmJsb2NrU3RhdGU0eDRbaV0ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgaWYgKGJsb2NrLmJsb2NrU3RhdGU0eDRbaV1bal0gPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNlbGxQb3NpdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgIHg6IGJsb2NrLnBvc2l0aW9uLnggKyAoYmxvY2tTaXplLndpZHRoIC8gNCkgKiBqLFxyXG4gICAgICAgICAgICAgICAgeTogYmxvY2sucG9zaXRpb24ueSArIChibG9ja1NpemUuaGVpZ2h0IC8gNCkgKiBpXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGlmIChSZWN0YW5nbGVDb2xsaXNpb25UZXN0KGNlbGxQb3NpdGlvbiwgY2VsbFNpemUsIG9iamVjdC5wb3NpdGlvbiwgb2JqZWN0U2l6ZSkpIHtcclxuICAgICAgICAgICAgICAgIGNlbGxzLnB1c2goY2VsbFBvc2l0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjZWxscztcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gUmVjdGFuZ2xlQ29sbGlzaW9uVGVzdChwb3MxLCBzaXplMSwgcG9zMiwgc2l6ZTIpIHtcclxuICAgIGlmIChwb3MxLnggKyBzaXplMS53aWR0aCA+IHBvczIueCAmJlxyXG4gICAgICAgIHBvczEueCA8IHBvczIueCArIHNpemUyLndpZHRoICYmXHJcbiAgICAgICAgcG9zMS55ICsgc2l6ZTEuaGVpZ2h0ID4gcG9zMi55ICYmXHJcbiAgICAgICAgcG9zMS55IDwgcG9zMi55ICsgc2l6ZTIuaGVpZ2h0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuIiwidmFyIF9fdmFsdWVzID0gKHRoaXMgJiYgdGhpcy5fX3ZhbHVlcykgfHwgZnVuY3Rpb24obykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn07XHJcbnZhciBfX3JlYWQgPSAodGhpcyAmJiB0aGlzLl9fcmVhZCkgfHwgZnVuY3Rpb24gKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufTtcclxudmFyIF9fc3ByZWFkID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZCkgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufTtcclxuZXhwb3J0IGZ1bmN0aW9uIGRlZXBDbG9uZShvYmopIHtcclxuICAgIHZhciBlXzEsIF9hO1xyXG4gICAgaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9XHJcbiAgICB2YXIgcmVzdWx0ID0gQXJyYXkuaXNBcnJheShvYmopID8gW10gOiB7fTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgZm9yICh2YXIgX2IgPSBfX3ZhbHVlcyhPYmplY3Qua2V5cyhvYmopKSwgX2MgPSBfYi5uZXh0KCk7ICFfYy5kb25lOyBfYyA9IF9iLm5leHQoKSkge1xyXG4gICAgICAgICAgICB2YXIga2V5ID0gX2MudmFsdWU7XHJcbiAgICAgICAgICAgIHJlc3VsdFtrZXldID0gZGVlcENsb25lKG9ialtrZXldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZV8xXzEpIHsgZV8xID0geyBlcnJvcjogZV8xXzEgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKF9jICYmICFfYy5kb25lICYmIChfYSA9IF9iLnJldHVybikpIF9hLmNhbGwoX2IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbnZhciBHdWlkID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gR3VpZCgpIHtcclxuICAgIH1cclxuICAgIEd1aWQubmV3R3VpZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gJ3h4eHh4eHh4LXh4eHgteHh4eC14eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbiAoYykge1xyXG4gICAgICAgICAgICB2YXIgciA9IE1hdGgucmFuZG9tKCkgKiAxNiB8IDAsIHYgPSBjID09ICd4JyA/IHIgOiAociAmIDB4MyB8IDB4OCk7XHJcbiAgICAgICAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gR3VpZDtcclxufSgpKTtcclxuZXhwb3J0IHsgR3VpZCB9O1xyXG4vKipcclxuICogZmluZCBtYXhpbXVtIG51bWJlciBmcm9tIG51bWJlciBhcnJheVxyXG4gKiBAcGFyYW0gbnVtYmVycyBnaXZlbiBudW1iZXJzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWF4KG51bWJlcnMpIHtcclxuICAgIHJldHVybiBNYXRoLm1heC5hcHBseShudWxsLCBudW1iZXJzKTtcclxufVxyXG4vKipcclxuICogZmluZCBtaW5pbXVtIG51bWJlciBmcm9tIG51bWJlciBhcnJheVxyXG4gKiBAcGFyYW0gbnVtYmVycyBnaXZlbiBudW1iZXJzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWluKG51bWJlcnMpIHtcclxuICAgIHJldHVybiBNYXRoLm1pbi5hcHBseShudWxsLCBudW1iZXJzKTtcclxufVxyXG4vKipcclxuICogZ2V0IGEgcmFuZG9tIHZhbHVlIGJldHdlZW4gcmFuZ2VcclxuICogQHBhcmFtIG1pbiByYW5nZV9taW5cclxuICogQHBhcmFtIG1heCByYW5nZV9tYXhcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21SYW5nZShtaW4sIG1heCkge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRHVwbGljYXRlKGFycmF5KSB7XHJcbiAgICB2YXIgc2V0ID0gbmV3IFNldChhcnJheSk7XHJcbiAgICByZXR1cm4gX19zcHJlYWQoc2V0KTtcclxufVxyXG4iLCJpbXBvcnQgR2FtZSBmcm9tIFwiLi9HYW1lL0dhbWVcIjtcclxuaW1wb3J0IFJlbmRlcmVyIGZyb20gXCIuL1JlbmRlci9SZW5kZXJlclwiO1xyXG52YXIgc3ByaXRlTWFpbkltYWdlID0gcmVxdWlyZSgnLi9SZW5kZXIvU3ByaXRlL3Nwcml0ZV9tYWluLnBuZycpO1xyXG52YXIgc3ByaXRlVEl0bGVJbWFnZSA9IHJlcXVpcmUoJy4vUmVuZGVyL1Nwcml0ZS9zcHJpdGVfdGl0bGUucG5nJyk7XHJcbnZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcclxuLy8gaW5pdCBnYW1lXHJcbnZhciBnYW1lID0gbmV3IEdhbWUoY2FudmFzLCAnLi9qcy9zcHJpdGVfbWFpbi5wbmcnLCAnLi9qcy9zcHJpdGVfdGl0bGUucG5nJyk7XHJcbi8vI3JlZ2lvbiBERUJVR1xyXG52YXIgZGVidWdfYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWJ1Z1wiKTtcclxudmFyIG1haW5UYW5rX2xldmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluVGFua19sZXZlbFwiKTtcclxudmFyIG1haW5UYW5rX2NvbG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluVGFua19jb2xvclwiKTtcclxudmFyIG1haW5UYW5rX2ludmluY2libGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5UYW5rX2ludmluY2libGVcIik7XHJcbnZhciBtYWluVGFua19oaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5UYW5rX2hpdFwiKTtcclxudmFyIHRyYWNrcyA9IHtcclxuICAgIGJsb2NrOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpX2Jsb2NrXCIpLFxyXG4gICAgdGFuazogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaV90YW5rXCIpLFxyXG4gICAgYnVsbGV0OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpX2J1bGxldFwiKSxcclxuICAgIGFuaW1hdGlvbjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaV9hbmltYXRpb25cIiksXHJcbn07XHJcbnZhciBvYmplY3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvYmplY3RzXCIpO1xyXG52YXIgZ2FtZWRhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVkYXRhXCIpO1xyXG5kZWJ1Z19idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXYpIHtcclxuICAgIGlmIChkZWJ1Z19idG4uZ2V0QXR0cmlidXRlKCd2YWx1ZScpID09ICd0cnVlJykge1xyXG4gICAgICAgIGdhbWUuZGVidWcgPSBmYWxzZTtcclxuICAgICAgICBkZWJ1Z19idG4uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdmYWxzZScpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZGVidWdfYnRuLmdldEF0dHJpYnV0ZSgndmFsdWUnKSA9PSAnZmFsc2UnKSB7XHJcbiAgICAgICAgZ2FtZS5kZWJ1ZyA9IHRydWU7XHJcbiAgICAgICAgZGVidWdfYnRuLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAndHJ1ZScpO1xyXG4gICAgfVxyXG4gICAgZGVidWdfYnRuLmlubmVyVGV4dCA9IFwiZGVidWcgPSBcIiArIGRlYnVnX2J0bi5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7XHJcbn0pO1xyXG5tYWluVGFua19sZXZlbC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHsgdXBkYXRlVGFuaygpOyB9KTtcclxubWFpblRhbmtfY29sb3IuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7IHVwZGF0ZVRhbmsoKTsgfSk7XHJcbm1haW5UYW5rX2ludmluY2libGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHsgZ2FtZS5tYWluVGFuay5pbnZpbmNpYmxlKCk7IH0pO1xyXG5tYWluVGFua19oaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHsgZ2FtZS5tYWluVGFuay5oaXQoKTsgfSk7XHJcbnZhciBvYmplY3RGaW5kZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgX2EsIF9iO1xyXG4gICAgb2JqZWN0cy5pbm5lckhUTUwgPVxyXG4gICAgICAgIFwiXFxuXFx0PHRyPlxcblxcdFxcdDx0ZD56SW5kZXg8L3RkPlxcblxcdFxcdDx0ZD5pZDwvdGQ+XFxuXFx0XFx0PHRkPnR5cGU8L3RkPlxcblxcdFxcdDx0ZD5wb3NpdGlvbjwvdGQ+XFxuXFx0PC90cj5cXG5cXHRcIjtcclxuICAgIGdhbWVkYXRhLmlubmVySFRNTCA9XHJcbiAgICAgICAgXCJcXG5cXHQ8dHI+XFxuXFx0XFx0PHRkPnR5cGU8L3RkPlxcblxcdFxcdDx0ZD52YWx1ZTwvdGQ+XFxuXFx0PC90cj5cXG5cXHRcIjtcclxuICAgIGlmICghZ2FtZS5kZWJ1Zykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChnYW1lLm1haW5UYW5rKSB7XHJcbiAgICAgICAgbWFpblRhbmtfY29sb3IudmFsdWUgPSBnYW1lLm1haW5UYW5rLnRhbmtDb2xvci50b1N0cmluZygpO1xyXG4gICAgICAgIG1haW5UYW5rX2xldmVsLnZhbHVlID0gZ2FtZS5tYWluVGFuay50YW5rTGV2ZWwudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIGlmIChnYW1lLmdhbWVEYXRhKSB7XHJcbiAgICAgICAgZ2FtZWRhdGEuaW5uZXJIVE1MID0gZ2FtZWRhdGEuaW5uZXJIVE1MICtcclxuICAgICAgICAgICAgKFwiXFxuXFx0XFx0PHRyPlxcblxcdFxcdFxcdDx0ZD5nYW1lb3ZlcjwvdGQ+XFxuXFx0XFx0XFx0PHRkPlwiICsgZ2FtZS5nYW1lRGF0YS5nYW1lT3ZlciArIFwiPC90ZD5cXG5cXHRcXHQ8L3RyPlxcblxcdFxcdDx0cj5cXG5cXHRcXHRcXHQ8dGQ+bGV2ZWxJZDwvdGQ+XFxuXFx0XFx0XFx0PHRkPlwiICsgKChfYSA9IGdhbWUuZ2FtZURhdGEubGV2ZWxEYXRhKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubGV2ZWxJZCkgKyBcIjwvdGQ+XFxuXFx0XFx0PC90cj5cXG5cXHRcXHQ8dHI+XFxuXFx0XFx0XFx0PHRkPnAxIHNjb3JlPC90ZD5cXG5cXHRcXHRcXHQ8dGQ+XCIgKyAoKF9iID0gZ2FtZS5nYW1lRGF0YS5wbGF5ZXJEYXRhWzBdKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Iuc2NvcmUpICsgXCI8L3RkPlxcblxcdFxcdDwvdHI+XFxuXFx0XFx0XCIpO1xyXG4gICAgfVxyXG4gICAgZ2FtZS5vYmplY3RzLmZvckVhY2goZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgICAgIHN3aXRjaCAob2JqZWN0Lm9iamVjdFR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIkJMT0NLXCIgLyogQkxPQ0sgKi86XHJcbiAgICAgICAgICAgICAgICBpZiAodHJhY2tzLmJsb2NrLmNoZWNrZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJUQU5LXCIgLyogVEFOSyAqLzpcclxuICAgICAgICAgICAgICAgIGlmICh0cmFja3MudGFuay5jaGVja2VkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiQlVMTEVUXCIgLyogQlVMTEVUICovOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRyYWNrcy5idWxsZXQuY2hlY2tlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkFOSU1BVElPTlwiIC8qIEFOSU1BVElPTiAqLzpcclxuICAgICAgICAgICAgICAgIGlmICh0cmFja3MuYW5pbWF0aW9uLmNoZWNrZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9iamVjdHMuaW5uZXJIVE1MID0gb2JqZWN0cy5pbm5lckhUTUwgK1xyXG4gICAgICAgICAgICAoXCJcXG5cXHRcXHQ8dHI+XFxuXFx0XFx0XFx0PHRkPlwiICsgUmVuZGVyZXIuZ2V0T2JqZWN0WkluZGV4KG9iamVjdCkgKyBcIjwvdGQ+XFxuXFx0XFx0XFx0PHRkPlwiICsgb2JqZWN0LmlkICsgXCI8L3RkPlxcblxcdFxcdFxcdDx0ZD5cIiArIG9iamVjdC5vYmplY3RUeXBlICsgXCI8L3RkPlxcblxcdFxcdFxcdDx0ZD5beDogXCIgKyBvYmplY3QucG9zaXRpb24ueCArIFwiLCB5OiBcIiArIG9iamVjdC5wb3NpdGlvbi55ICsgXCJdPC90ZD5cXG5cXHRcXHQ8L3RyPlxcblxcdFxcdFwiKTtcclxuICAgIH0pO1xyXG59LCAxMDApO1xyXG5mdW5jdGlvbiB1cGRhdGVUYW5rKCkge1xyXG4gICAgZ2FtZS5tYWluVGFuay50YW5rQ29sb3IgPSBtYWluVGFua19jb2xvci52YWx1ZTtcclxuICAgIGdhbWUubWFpblRhbmsudGFua0xldmVsID0gcGFyc2VJbnQobWFpblRhbmtfbGV2ZWwudmFsdWUpO1xyXG59XHJcbi8vI2VuZHJlZ2lvblxyXG4iXSwic291cmNlUm9vdCI6IiJ9