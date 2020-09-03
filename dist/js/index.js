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
                    if (item.visible === false) {
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
                    type: "SPEED" /* SPEED */,
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
        console.log(this.mainTank instanceof _Object_TankAIObject__WEBPACK_IMPORTED_MODULE_12__["default"]);
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
                if (object.objectType === "TANK" /* TANK */) {
                    if (object.isInvincible) {
                        exploded_1 = false;
                    }
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
    DEFAULT: [
        {
            sequence: ["WHITE" /* WHITE */],
            delay: -1,
        }
    ],
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
        _this.lastChanged = 0;
        _this._enemyType = enemyType;
        _this._hasItem = hasItem;
        _this._colorIndex = 0;
        _this._hp = hp;
        console.log(_this.getColorDefinition());
        return _this;
    }
    Object.defineProperty(TankAIOBject.prototype, "colorIndex", {
        get: function () {
            return this._colorIndex;
        },
        enumerable: false,
        configurable: true
    });
    TankAIOBject.prototype.nextColorIndex = function () {
        var definition = this.getColorDefinition();
        var maxIndex = definition.sequence.length;
        if (this._colorIndex + 1 >= maxIndex) {
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
        return ColorSequenceDefinitions[key][index];
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
/* harmony import */ var _Game_Object_TankAIObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Game/Object/TankAIObject */ "./src/Game/Object/TankAIObject.ts");




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
                    case "TANK" /* TANK */:
                        var tank = object;
                        if (tank instanceof _Game_Object_TankAIObject__WEBPACK_IMPORTED_MODULE_3__["default"]) {
                            var enemy = tank;
                            var definition = enemy.getColorDefinition();
                            if (_this._fps.now - enemy.lastChanged > definition.delay) {
                                enemy.nextColorIndex();
                                enemy.lastChanged = _this._fps.now;
                            }
                        }
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
            if (tank instanceof _Game_Object_TankAIObject__WEBPACK_IMPORTED_MODULE_1__["default"] && tank.colorIndex != undefined) {
                var enemy = object;
                var sequence = enemy.getColorDefinition().sequence;
                return _SpriteDefinition__WEBPACK_IMPORTED_MODULE_0__["default"].ENEMY[sequence[enemy.colorIndex]][enemy.tankLevel][enemy.direction][enemy.spritePosition];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvR2FtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9JbnB1dE1hbmFnZXIvRUtleXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvSW5wdXRNYW5hZ2VyL0lucHV0TWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9MZXZlbC9EZWZhdWx0TGV2ZWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL09iamVjdC9BbmltYXRpb25PYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvT2JqZWN0L0Jsb2NrT2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL09iamVjdC9CdWxsZXRPYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvT2JqZWN0L0VudW0vRUFuaW1hdGlvblR5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvT2JqZWN0L0VudW0vRVRhbmtUeXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL09iamVjdC9HYW1lT2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL09iamVjdC9Nb3ZpbmdPYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvT2JqZWN0L1RhbmtBSU9iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9PYmplY3QvVGFua09iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVuZGVyL1JlbmRlcmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9SZW5kZXIvU3ByaXRlL1Nwcml0ZURhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlbmRlci9TcHJpdGUvU3ByaXRlRGVmaW5pdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVuZGVyL1Nwcml0ZS9zcHJpdGVfbWFpbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlbmRlci9TcHJpdGUvc3ByaXRlX3RpdGxlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbHMvQ29sbGlzaW9uVGVzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbHMvVXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZEO0FBQ2hCO0FBQ0E7QUFDb0M7QUFDdEI7QUFDSjtBQUNVO0FBQ2xCO0FBQzRCO0FBQ3pCO0FBQ0s7QUFDUDtBQUNDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ1A7QUFDQSxTQUFTLGNBQWM7QUFDdkIsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTLGFBQWE7QUFDdEIsU0FBUyxhQUFhO0FBQ3RCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7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QUFDeEM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsY0FBYztBQUN6QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGNBQWM7QUFDekM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGNBQWM7QUFDekM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGNBQWM7QUFDekM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixjQUFjO0FBQ3pDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsY0FBYztBQUN6QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGNBQWM7QUFDekM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixjQUFjO0FBQ3pDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsY0FBYztBQUN6QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsY0FBYztBQUN6QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGNBQWM7QUFDekM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixjQUFjO0FBQ3pDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsY0FBYztBQUN6QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGNBQWM7QUFDekM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixjQUFjO0FBQ3pDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsZUFBZTtBQUMxQztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGNBQWM7QUFDekM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixjQUFjO0FBQ3pDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsY0FBYztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsUUFBUSxtRUFBYTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsK0VBQWE7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxDQUFDLHFEQUFZO0FBQ0MsMkVBQVksRUFBQzs7Ozs7Ozs7Ozs7OztBQ2pHNUI7QUFBQTtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxnQkFBZ0IsRUFBRTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLDJFQUFnQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QywyRUFBZ0I7QUFDNUQ7QUFDQTtBQUNBLCtDQUErQyx3RUFBYTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxpRUFBWTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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d0JBQXdCLEVBQUU7QUFDckY7QUFDQTtBQUNBLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRixxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRjtBQUNBO0FBQ0EscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckYscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckY7QUFDQTtBQUNBLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGO0FBQ0E7QUFDQSxxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRixxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckYscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckY7QUFDQTtBQUNBLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGO0FBQ0E7QUFDQSxxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRixxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRjtBQUNBO0FBQ0EscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckYscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckY7QUFDQSxh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LEVBQUU7QUFDckY7QUFDQTtBQUNBLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGO0FBQ0E7QUFDQSxxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRixxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckYscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckY7QUFDQTtBQUNBLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGO0FBQ0E7QUFDQSxxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRixxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRjtBQUNBO0FBQ0EscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckYscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckYscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckY7QUFDQTtBQUNBLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGO0FBQ0E7QUFDQSxxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRixxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRjtBQUNBO0FB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dUQsY0FBYyxFQUFFO0FBQ3ZFLDJEQUEyRCw0QkFBNEIsRUFBRTtBQUN6RixvREFBb0QscUJBQXFCLEVBQUU7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3Qyx3REFBUTtBQUNoRCxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImltcG9ydCBSZW5kZXJlciwgeyBEUkFXSU5HX0NPTlNUIH0gZnJvbSBcIi4uL1JlbmRlci9SZW5kZXJlclwiO1xyXG5pbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiLi9PYmplY3QvR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgVGFua09iamVjdCBmcm9tIFwiLi9PYmplY3QvVGFua09iamVjdFwiO1xyXG5pbXBvcnQgeyBCbG9ja0NvbGxpc2lvblRlc3QsIE9iamVjdENvbGxpc2lvblRlc3QgfSBmcm9tIFwiLi4vVXRpbHMvQ29sbGlzaW9uVGVzdFwiO1xyXG5pbXBvcnQgU1BSVElFX0RFRiBmcm9tIFwiLi4vUmVuZGVyL1Nwcml0ZS9TcHJpdGVEZWZpbml0aW9uXCI7XHJcbmltcG9ydCBBbmltYXRpb25PYmplY3QgZnJvbSBcIi4vT2JqZWN0L0FuaW1hdGlvbk9iamVjdFwiO1xyXG5pbXBvcnQgeyBBbmltYXRpb25EZWZhdWx0cyB9IGZyb20gXCIuL09iamVjdC9FbnVtL0VBbmltYXRpb25UeXBlXCI7XHJcbmltcG9ydCBCbG9ja09iamVjdCBmcm9tIFwiLi9PYmplY3QvQmxvY2tPYmplY3RcIjtcclxuaW1wb3J0IHsgZ2V0U3ByaXRlRGF0YSwgZ2V0T2JqZWN0U2l6ZSB9IGZyb20gXCIuLi9SZW5kZXIvU3ByaXRlL1Nwcml0ZURhdGFcIjtcclxuaW1wb3J0IERlZmF1bHRMZXZlbHMgZnJvbSBcIi4vTGV2ZWwvRGVmYXVsdExldmVsc1wiO1xyXG5pbXBvcnQgSW5wdXRNYW5hZ2VyIGZyb20gXCIuL0lucHV0TWFuYWdlci9JbnB1dE1hbmFnZXJcIjtcclxuaW1wb3J0IHsgZ2V0UmFuZG9tUmFuZ2UgfSBmcm9tIFwiLi4vVXRpbHMvVXRpbHNcIjtcclxuaW1wb3J0IFRhbmtBSU9CamVjdCBmcm9tIFwiLi9PYmplY3QvVGFua0FJT2JqZWN0XCI7XHJcbmV4cG9ydCB2YXIgTUFJTl9UQU5LX0lEID0gJ01BSU4nO1xyXG5leHBvcnQgdmFyIE1BWElNVU1fVEFOS1MgPSA0O1xyXG5leHBvcnQgdmFyIFRBTktfU1BBV05fREVMQVkgPSAyNTAwO1xyXG5leHBvcnQgdmFyIFRBTktfU1BBV05fUE9JTlQgPSB7XHJcbiAgICBQTEFZRVJfVEFOSzogW1xyXG4gICAgICAgIHsgeDogNCwgeTogMTIgfSxcclxuICAgICAgICB7IHg6IDgsIHk6IDEyIH1cclxuICAgIF0sXHJcbiAgICBFTkVNWV9UQU5LOiBbXHJcbiAgICAgICAgeyB4OiAwLCB5OiAwIH0sXHJcbiAgICAgICAgeyB4OiA2LCB5OiAwIH0sXHJcbiAgICAgICAgeyB4OiAxMiwgeTogMCB9XHJcbiAgICBdXHJcbn07XHJcbnZhciBHYW1lID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gR2FtZShzY3JlZW4sIHNwcml0ZV9tYWluX3NyYywgc3ByaXRlX3RpdGxlX3NyYywgZGVidWcpIHtcclxuICAgICAgICB0aGlzLmRlYnVnID0gZGVidWc7XHJcbiAgICAgICAgdGhpcy5fb2JqZWN0cyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2xhc3RTcGF3biA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIHRoaXMuX3BhdXNlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIodGhpcywgc2NyZWVuLCBzcHJpdGVfbWFpbl9zcmMsIHNwcml0ZV90aXRsZV9zcmMpO1xyXG4gICAgICAgIHRoaXMuX2lucHV0TWFuYWdlciA9IG5ldyBJbnB1dE1hbmFnZXIodGhpcyk7XHJcbiAgICAgICAgc2NyZWVuLmZvY3VzKCk7XHJcbiAgICAgICAgdGhpcy5zaG93VGl0bGUoKTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHYW1lLnByb3RvdHlwZSwgXCJtYWluVGFua1wiLCB7XHJcbiAgICAgICAgLy8jcmVnaW9uIGdldHRlciBhbmQgc2V0dGVyXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBmb3VuZCA9IHRoaXMuZmluZE9iamVjdEJ5SWQoTUFJTl9UQU5LX0lEKTtcclxuICAgICAgICAgICAgaWYgKGZvdW5kLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmb3VuZFswXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEdhbWUucHJvdG90eXBlLCBcIm9iamVjdHNcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fb2JqZWN0cztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoR2FtZS5wcm90b3R5cGUsIFwicGF1c2VcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcGF1c2U7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChwYXVzZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9wYXVzZSA9IHBhdXNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHYW1lLnByb3RvdHlwZSwgXCJrZXlTdGF0ZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbnB1dE1hbmFnZXIua2V5U3RhdGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEdhbWUucHJvdG90eXBlLCBcImdhbWVEYXRhXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dhbWVEYXRhO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHYW1lLnByb3RvdHlwZSwgXCJjdXJyZW50TWVudVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50TWVudTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoR2FtZS5wcm90b3R5cGUsIFwiY3Vyc29ySW5kZXhcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW5wdXRNYW5hZ2VyLmN1cnNvckluZGV4O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIC8vI2VuZHJlZ2lvblxyXG4gICAgLy8jcmVnaW9uIHB1YmxpYyBtZXRob2RzXHJcbiAgICAvLyNyZWdpb24gZGVidWcgbWV0aG9kc1xyXG4gICAgR2FtZS5wcm90b3R5cGUubG9nID0gZnVuY3Rpb24gKG1zZykge1xyXG4gICAgICAgIGlmICh0aGlzLmRlYnVnKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW1wiICsgcGVyZm9ybWFuY2Uubm93KCkgKyBcIl0gXCIgKyBtc2cpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvLyNlbmRyZWdpb25cclxuICAgIC8vI3JlZ2lvbiBnYW1lIG9iamVjdCBtZXRob2RzXHJcbiAgICBHYW1lLnByb3RvdHlwZS5pbnNlcnRPYmplY3QgPSBmdW5jdGlvbiAob2JqZWN0KSB7XHJcbiAgICAgICAgdGhpcy5fb2JqZWN0cy5wdXNoKG9iamVjdCk7XHJcbiAgICAgICAgdGhpcy5zb3J0T2JqZWN0KCk7XHJcbiAgICB9O1xyXG4gICAgR2FtZS5wcm90b3R5cGUucmVtb3ZlT2JqZWN0ID0gZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgICAgIHZhciBpZHggPSB0aGlzLl9vYmplY3RzLmluZGV4T2Yob2JqZWN0KTtcclxuICAgICAgICB0aGlzLl9vYmplY3RzLnNwbGljZShpZHgsIDEpO1xyXG4gICAgICAgIHRoaXMuc29ydE9iamVjdCgpO1xyXG4gICAgfTtcclxuICAgIEdhbWUucHJvdG90eXBlLnNvcnRPYmplY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2dhbWVEYXRhID09IG51bGwgfHwgdGhpcy5fb2JqZWN0cyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fb2JqZWN0cy5zb3J0KGZ1bmN0aW9uIChvYmoxLCBvYmoyKSB7XHJcbiAgICAgICAgICAgIHZhciB6aW5kZXgxID0gUmVuZGVyZXIuZ2V0T2JqZWN0WkluZGV4KG9iajEpO1xyXG4gICAgICAgICAgICB2YXIgemluZGV4MiA9IFJlbmRlcmVyLmdldE9iamVjdFpJbmRleChvYmoyKTtcclxuICAgICAgICAgICAgcmV0dXJuIHppbmRleDEgLSB6aW5kZXgyO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEdhbWUucHJvdG90eXBlLmZpbmRPYmplY3RCeUlkID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX29iamVjdHMuZmlsdGVyKGZ1bmN0aW9uIChvYmplY3QpIHsgcmV0dXJuIG9iamVjdC5pZCA9PT0gaWQ7IH0pO1xyXG4gICAgfTtcclxuICAgIEdhbWUucHJvdG90eXBlLmNvbGxpc2lvblRlc3QgPSBmdW5jdGlvbiAob2JqZWN0KSB7XHJcbiAgICAgICAgdmFyIGZvdW5kID0gW107XHJcbiAgICAgICAgaWYgKHRoaXMuX2dhbWVEYXRhID09IG51bGwgfHwgdGhpcy5fb2JqZWN0cyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmb3VuZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fb2JqZWN0cy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtID09IG9iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpdGVtLm9iamVjdFR5cGUgPT09IFwiQU5JTUFUSU9OXCIgLyogQU5JTUFUSU9OICovKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoaXRlbS5vYmplY3RUeXBlID09PSBcIkJMT0NLXCIgLyogQkxPQ0sgKi8pIHtcclxuICAgICAgICAgICAgICAgIHZhciBibG9ja1R5cGUgPSBpdGVtLmJsb2NrVHlwZTtcclxuICAgICAgICAgICAgICAgIGlmICgob2JqZWN0Lm9iamVjdFR5cGUgPT09IFwiVEFOS1wiIC8qIFRBTksgKi8gfHwgb2JqZWN0Lm9iamVjdFR5cGUgPT09IFwiQlVMTEVUXCIgLyogQlVMTEVUICovKSAmJiBibG9ja1R5cGUgPT09IFwiQlVTSFwiIC8qIEJVU0ggKi8pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0Lm9iamVjdFR5cGUgPT09IFwiQlVMTEVUXCIgLyogQlVMTEVUICovICYmIGJsb2NrVHlwZSA9PT0gXCJXQVRFUlwiIC8qIFdBVEVSICovKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGl0ZW0ub2JqZWN0VHlwZSA9PT0gXCJUQU5LXCIgLyogVEFOSyAqLykge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC5vYmplY3RUeXBlID09PSBcIkJVTExFVFwiIC8qIEJVTExFVCAqLykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmlkID09PSBvYmplY3QucGFyZW50SWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS52aXNpYmxlID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGl0ZW0ub2JqZWN0VHlwZSA9PT0gXCJCVUxMRVRcIiAvKiBCVUxMRVQgKi8pIHtcclxuICAgICAgICAgICAgICAgIGlmIChvYmplY3Qub2JqZWN0VHlwZSA9PT0gXCJUQU5LXCIgLyogVEFOSyAqLykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChpdGVtLm9iamVjdFR5cGUgPT09IFwiSVRFTVwiIC8qIElURU0gKi8pIHtcclxuICAgICAgICAgICAgICAgIGlmIChvYmplY3Qub2JqZWN0VHlwZSA9PT0gXCJCVUxMRVRcIiAvKiBCVUxMRVQgKi8pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHRlc3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKGl0ZW0ub2JqZWN0VHlwZSA9PT0gXCJCTE9DS1wiIC8qIEJMT0NLICovKSB7XHJcbiAgICAgICAgICAgICAgICB0ZXN0ID0gQmxvY2tDb2xsaXNpb25UZXN0KGl0ZW0sIG9iamVjdCkubGVuZ3RoID4gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRlc3QgPSBPYmplY3RDb2xsaXNpb25UZXN0KG9iamVjdCwgaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRlc3QgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGZvdW5kLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gZm91bmQ7XHJcbiAgICB9O1xyXG4gICAgR2FtZS5wcm90b3R5cGUuc3RhcnRBbmltYXRpb24gPSBmdW5jdGlvbiAodGFyZ2V0LCBhbmltYXRpb25UeXBlLCBhbmltYXRpb25WYWx1ZSwgY2FsbGJhY2spIHtcclxuICAgICAgICB2YXIgYW5pbWF0aW9uUG9pbnQ7XHJcbiAgICAgICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEdhbWVPYmplY3QpIHtcclxuICAgICAgICAgICAgdmFyIG9iamVjdCA9IHRhcmdldDtcclxuICAgICAgICAgICAgdmFyIHNpemUgPSBnZXRTcHJpdGVEYXRhKG9iamVjdCkuc2l6ZTtcclxuICAgICAgICAgICAgYW5pbWF0aW9uUG9pbnQgPSB7XHJcbiAgICAgICAgICAgICAgICB4OiBvYmplY3QucG9zaXRpb24ueCArIHNpemUud2lkdGggLyAyLFxyXG4gICAgICAgICAgICAgICAgeTogb2JqZWN0LnBvc2l0aW9uLnkgKyBzaXplLmhlaWdodCAvIDJcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvblBvaW50ID0gdGFyZ2V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYW5pbWF0aW9uVmFsdWUgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvblZhbHVlID0gQW5pbWF0aW9uRGVmYXVsdHNbYW5pbWF0aW9uVHlwZV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBhbmltYXRpb24gPSBuZXcgQW5pbWF0aW9uT2JqZWN0KHRoaXMsIG51bGwsIGFuaW1hdGlvblR5cGUsIGFuaW1hdGlvblBvaW50LCBhbmltYXRpb25WYWx1ZS5kdXJhdGlvbiwgYW5pbWF0aW9uVmFsdWUuZnJhbWVSYXRlLCBhbmltYXRpb25WYWx1ZS5sb29wLCBjYWxsYmFjayk7XHJcbiAgICAgICAgdGhpcy5pbnNlcnRPYmplY3QoYW5pbWF0aW9uKTtcclxuICAgIH07XHJcbiAgICAvLyNyZWdpb24gcmVuZGVyZXIgcG9ydGluZyBtZXRob2RzXHJcbiAgICAvKipcclxuICAgICAqIFRlc3Qgb2JqZWN0IGlzIHZpc2libGUgKFBvcnQgb2YgUmVuZGVyZXIudGVzdFZpc2liaWxpdHkpXHJcbiAgICAgKiBAcGFyYW0gb2JqZWN0IG9iamVjdCBmb3IgdGVzdFxyXG4gICAgICogQHBhcmFtIHNwcml0ZSBvYmplY3QncyBzcHJpdGUgZGF0YSBmb3Igc2l6ZVxyXG4gICAgICovXHJcbiAgICBHYW1lLnByb3RvdHlwZS50ZXN0VmlzaWJpbGl0eSA9IGZ1bmN0aW9uIChvYmplY3QpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVyZXIub2JqZWN0VmlzaWJsZVRlc3Qob2JqZWN0KTtcclxuICAgIH07XHJcbiAgICAvLyNlbmRyZWdpb25cclxuICAgIC8vI2VuZHJlZ2lvblxyXG4gICAgR2FtZS5wcm90b3R5cGUubmV3R2FtZSA9IGZ1bmN0aW9uIChwbGF5ZXJDb3VudCwgZ2FtZVR5cGUsIGxldmVsKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLl9jdXJyZW50TWVudSA9IFwiR0FNRVwiIC8qIEdBTUUgKi87XHJcbiAgICAgICAgdGhpcy5fb2JqZWN0cyA9IFtdO1xyXG4gICAgICAgIGlmIChnYW1lVHlwZSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgZ2FtZVR5cGUgPSAwIC8qIFBWRSAqLztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxldmVsID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBsZXZlbCA9IERlZmF1bHRMZXZlbHNbMF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBwbGF5ZXJEYXRhID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwbGF5ZXJDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHBsYXllckRhdGEucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBsaWZlOiA1LFxyXG4gICAgICAgICAgICAgICAgc2NvcmU6IDAsXHJcbiAgICAgICAgICAgICAgICBkZXN0cm9lZFRhbms6IHt9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9nYW1lRGF0YSA9IHtcclxuICAgICAgICAgICAgZ2FtZVR5cGU6IGdhbWVUeXBlLFxyXG4gICAgICAgICAgICBwbGF5ZXJEYXRhOiBwbGF5ZXJEYXRhLFxyXG4gICAgICAgICAgICBsZXZlbERhdGE6IGxldmVsLFxyXG4gICAgICAgICAgICBnYW1lT3ZlcjogZmFsc2VcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc3Bhd25UYW5rKFwiUExBWUVSX1RBTktcIiAvKiBQTEFZRVJfVEFOSyAqLywgdHJ1ZSwgMCk7XHJcbiAgICAgICAgaWYgKHBsYXllckNvdW50ID4gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnNwYXduVGFuayhcIlBMQVlFUl9UQU5LXCIgLyogUExBWUVSX1RBTksgKi8sIHRydWUsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXZlbC5ibG9ja3MuZm9yRWFjaChmdW5jdGlvbiAoYmxvY2spIHtcclxuICAgICAgICAgICAgX3RoaXMuaW5zZXJ0T2JqZWN0KG5ldyBCbG9ja09iamVjdChfdGhpcywgYmxvY2sudHlwZSwge1xyXG4gICAgICAgICAgICAgICAgeDogRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS5sZWZ0ICsgYmxvY2sucG9zaXRpb24ueCAqIDMyLFxyXG4gICAgICAgICAgICAgICAgeTogRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS50b3AgKyBibG9jay5wb3NpdGlvbi55ICogMzJcclxuICAgICAgICAgICAgfSwgYmxvY2suYmxvY2tTdGF0ZSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEdhbWUucHJvdG90eXBlLnNldFBhdXNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuX3BhdXNlID0gdHJ1ZTtcclxuICAgICAgICB2YXIgRlJBTUUgPSBEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lO1xyXG4gICAgICAgIHZhciBTQ1JFRU4gPSBEUkFXSU5HX0NPTlNULnNpemVzLnNjcmVlbjtcclxuICAgICAgICB0aGlzLnN0YXJ0QW5pbWF0aW9uKHtcclxuICAgICAgICAgICAgeDogRlJBTUUubGVmdCArIFNDUkVFTi53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgIHk6IChGUkFNRS50b3AgKyBGUkFNRS5ib3R0b20gKyBTQ1JFRU4uaGVpZ2h0KSAvIDIgKyBTUFJUSUVfREVGLkFOSU1BVElPTi5QQVVTRVswXS5zaXplLmhlaWdodCAvIDJcclxuICAgICAgICB9LCBcIlBBVVNFXCIgLyogUEFVU0UgKi8pO1xyXG4gICAgfTtcclxuICAgIEdhbWUucHJvdG90eXBlLmdhbWVvdmVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZURhdGEuZ2FtZU92ZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdhbWVEYXRhLmdhbWVPdmVyID0gdHJ1ZTtcclxuICAgICAgICB2YXIgRlJBTUUgPSBEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lO1xyXG4gICAgICAgIHZhciBTQ1JFRU4gPSBEUkFXSU5HX0NPTlNULnNpemVzLnNjcmVlbjtcclxuICAgICAgICB0aGlzLnN0YXJ0QW5pbWF0aW9uKHtcclxuICAgICAgICAgICAgeDogRlJBTUUubGVmdCArIFNDUkVFTi53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgIHk6IEZSQU1FLnRvcCArIEZSQU1FLmJvdHRvbSArIFNDUkVFTi5oZWlnaHRcclxuICAgICAgICB9LCBcIkdBTUVPVkVSXCIgLyogR0FNRU9WRVIgKi8sIG51bGwsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgX3RoaXMuc2hvd1Jlc3VsdFNjcmVlbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEdhbWUucHJvdG90eXBlLnNob3dSZXN1bHRTY3JlZW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgR2FtZS5wcm90b3R5cGUuc2hvd1RpdGxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudE1lbnUgPSBcIk1BSU5cIiAvKiBNQUlOICovO1xyXG4gICAgICAgIHRoaXMuX29iamVjdHMgPSBbXTtcclxuICAgICAgICB0aGlzLl9yZW5kZXJlci50aXRsZVNob3duID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5faW5wdXRNYW5hZ2VyLmluaXRpYWxpemUoKTtcclxuICAgICAgICB2YXIgRlJBTUUgPSBEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lO1xyXG4gICAgICAgIHZhciBTQ1JFRU4gPSBEUkFXSU5HX0NPTlNULnNpemVzLnNjcmVlbjtcclxuICAgICAgICB0aGlzLnN0YXJ0QW5pbWF0aW9uKHtcclxuICAgICAgICAgICAgeDogKEZSQU1FLmxlZnQgKyBTQ1JFRU4ud2lkdGggKyBGUkFNRS5yaWdodCkgLyAyLFxyXG4gICAgICAgICAgICB5OiAoRlJBTUUudG9wICsgU0NSRUVOLndpZHRoICsgRlJBTUUuYm90dG9tKSAqIDEuNVxyXG4gICAgICAgIH0sIFwiVElUTEVcIiAvKiBUSVRMRSAqLywgbnVsbCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBfdGhpcy5zdGFydEFuaW1hdGlvbih7XHJcbiAgICAgICAgICAgICAgICB4OiAxMjkgKyAxNixcclxuICAgICAgICAgICAgICAgIHk6IDI2NSArIF90aGlzLmN1cnNvckluZGV4ICogMzIgKyAxNlxyXG4gICAgICAgICAgICB9LCBcIkNVUlNPUlwiIC8qIENVUlNPUiAqLyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLy8jZW5kcmVnaW9uXHJcbiAgICAvLyNyZWdpb24gcHJpdmF0ZSBtZXRob2RzXHJcbiAgICBHYW1lLnByb3RvdHlwZS5zcGF3blRhbmsgPSBmdW5jdGlvbiAodGFua1R5cGUsIGZyZWVTcGF3biwgcGxheWVySW5kZXgpIHtcclxuICAgICAgICBpZiAoZnJlZVNwYXduID09PSB2b2lkIDApIHsgZnJlZVNwYXduID0gZmFsc2U7IH1cclxuICAgICAgICBpZiAodGFua1R5cGUgPT09IFwiUExBWUVSX1RBTktcIiAvKiBQTEFZRVJfVEFOSyAqLykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fZ2FtZURhdGEucGxheWVyRGF0YVtwbGF5ZXJJbmRleF0ubGlmZSA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHRhbmtDb2xvciA9IHZvaWQgMDtcclxuICAgICAgICAgICAgaWYgKHBsYXllckluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0YW5rQ29sb3IgPSBcIllFTExPV1wiIC8qIFlFTExPVyAqLztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRhbmtDb2xvciA9IFwiR1JFRU5cIiAvKiBHUkVFTiAqLztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgcG9zaXRpb24gPSBUQU5LX1NQQVdOX1BPSU5UW3RhbmtUeXBlXVtwbGF5ZXJJbmRleF07XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlUGxheWVyVGFuayh7XHJcbiAgICAgICAgICAgICAgICB4OiBEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lLmxlZnQgKyBwb3NpdGlvbi54ICogZ2V0T2JqZWN0U2l6ZShcIlRBTktcIiAvKiBUQU5LICovKS53aWR0aCxcclxuICAgICAgICAgICAgICAgIHk6IERSQVdJTkdfQ09OU1Quc2l6ZXMuZnJhbWUudG9wICsgcG9zaXRpb24ueSAqIGdldE9iamVjdFNpemUoXCJUQU5LXCIgLyogVEFOSyAqLykuaGVpZ2h0LFxyXG4gICAgICAgICAgICB9LCBcInVwXCIgLyogdXAgKi8sIHRhbmtDb2xvciwgMCk7XHJcbiAgICAgICAgICAgIGlmIChmcmVlU3Bhd24gPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9nYW1lRGF0YS5wbGF5ZXJEYXRhW3BsYXllckluZGV4XS5saWZlLS07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGFua1R5cGUgPT09IFwiRU5FTVlfVEFOS1wiIC8qIEVORU1ZX1RBTksgKi8pIHtcclxuICAgICAgICAgICAgdmFyIG5vdyA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgICAgICBpZiAobm93IC0gdGhpcy5fbGFzdFNwYXduID4gVEFOS19TUEFXTl9ERUxBWSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbGFzdFNwYXduID0gbm93O1xyXG4gICAgICAgICAgICAgICAgdmFyIHRhbmtzID0gdGhpcy5fb2JqZWN0cy5maWx0ZXIoZnVuY3Rpb24gKHgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geC5vYmplY3RUeXBlID09PSBcIlRBTktcIiAvKiBUQU5LICovICYmIHgudGFua1R5cGUgPT09IFwiRU5FTVlfVEFOS1wiIC8qIEVORU1ZX1RBTksgKi87XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmICh0YW5rcy5sZW5ndGggPj0gTUFYSU1VTV9UQU5LUykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlRW5lbXlUYW5rKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlNQRUVEXCIgLyogU1BFRUQgKi8sXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgR2FtZS5wcm90b3R5cGUuY3JlYXRlUGxheWVyVGFuayA9IGZ1bmN0aW9uIChwb3NpdGlvbiwgZGlyZWN0aW9uLCB0YW5rQ29sb3IsIHRhbmtMZXZlbCkge1xyXG4gICAgICAgIGlmICh0aGlzLm1haW5UYW5rKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlT2JqZWN0KHRoaXMubWFpblRhbmspO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmluc2VydE9iamVjdChuZXcgVGFua09iamVjdCh0aGlzLCBcIlBMQVlFUl9UQU5LXCIgLyogUExBWUVSX1RBTksgKi8sIHBvc2l0aW9uLCBkaXJlY3Rpb24sIHRhbmtDb2xvciwgdGFua0xldmVsLCBNQUlOX1RBTktfSUQpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm1haW5UYW5rIGluc3RhbmNlb2YgVGFua0FJT0JqZWN0KTtcclxuICAgIH07XHJcbiAgICBHYW1lLnByb3RvdHlwZS5jcmVhdGVFbmVteVRhbmsgPSBmdW5jdGlvbiAodGFua0RlZmluaXRpb24pIHtcclxuICAgICAgICB2YXIgdGFua1NpemUgPSBnZXRPYmplY3RTaXplKFwiVEFOS1wiIC8qIFRBTksgKi8pO1xyXG4gICAgICAgIHZhciBzcGF3blBvaW50cyA9IFRBTktfU1BBV05fUE9JTlQuRU5FTVlfVEFOSztcclxuICAgICAgICB2YXIgaWR4ID0gZ2V0UmFuZG9tUmFuZ2UoMCwgMik7XHJcbiAgICAgICAgdmFyIHBvc2l0aW9uID0ge1xyXG4gICAgICAgICAgICB4OiBEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lLmxlZnQgKyBzcGF3blBvaW50c1tpZHhdLnggKiB0YW5rU2l6ZS53aWR0aCxcclxuICAgICAgICAgICAgeTogRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS50b3AgKyBzcGF3blBvaW50c1tpZHhdLnkgKiB0YW5rU2l6ZS5oZWlnaHRcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaW5zZXJ0T2JqZWN0KG5ldyBUYW5rQUlPQmplY3QodGhpcywgdGFua0RlZmluaXRpb24udHlwZSwgdGFua0RlZmluaXRpb24uaXRlbSA/IHRhbmtEZWZpbml0aW9uLml0ZW0gOiBmYWxzZSwgcG9zaXRpb24sIFwiZG93blwiIC8qIGRvd24gKi8pKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gR2FtZTtcclxufSgpKTtcclxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcclxuIiwiZXhwb3J0IGZ1bmN0aW9uIEVLZXlzVG9FRGlyZWN0aW9uKGtleXMpIHtcclxuICAgIHN3aXRjaCAoa2V5cykge1xyXG4gICAgICAgIGNhc2UgXCJBcnJvd1VwXCIgLyogYXJyb3dfdXAgKi86XHJcbiAgICAgICAgICAgIHJldHVybiBcInVwXCIgLyogdXAgKi87XHJcbiAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIiAvKiBhcnJvd19yaWdodCAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIFwicmlnaHRcIiAvKiByaWdodCAqLztcclxuICAgICAgICBjYXNlIFwiQXJyb3dEb3duXCIgLyogYXJyb3dfZG93biAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIFwiZG93blwiIC8qIGRvd24gKi87XHJcbiAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiIC8qIGFycm93X2xlZnQgKi86XHJcbiAgICAgICAgICAgIHJldHVybiBcImxlZnRcIiAvKiBsZWZ0ICovO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEVLZXlzVG9FRGlyZWN0aW9uIH0gZnJvbSBcIi4vRUtleXNcIjtcclxudmFyIElucHV0TWFuYWdlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIElucHV0TWFuYWdlcihnYW1lKSB7XHJcbiAgICAgICAgdGhpcy5fZ2FtZSA9IGdhbWU7XHJcbiAgICAgICAgdGhpcy5fa2V5RXZlbnRzID0ge307XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XHJcbiAgICB9XHJcbiAgICBJbnB1dE1hbmFnZXIucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5fa2V5U3RhdGUgPSB7XHJcbiAgICAgICAgICAgIEFycm93RG93bjogZmFsc2UsXHJcbiAgICAgICAgICAgIEFycm93VXA6IGZhbHNlLFxyXG4gICAgICAgICAgICBBcnJvd1JpZ2h0OiBmYWxzZSxcclxuICAgICAgICAgICAgQXJyb3dMZWZ0OiBmYWxzZSxcclxuICAgICAgICAgICAgRXNjYXBlOiBmYWxzZSxcclxuICAgICAgICAgICAgU3BhY2U6IGZhbHNlXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9jdXJzb3JJbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5zZXRFdmVudHMoKTtcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSW5wdXRNYW5hZ2VyLnByb3RvdHlwZSwgXCJrZXlTdGF0ZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9rZXlTdGF0ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSW5wdXRNYW5hZ2VyLnByb3RvdHlwZSwgXCJjdXJzb3JJbmRleFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jdXJzb3JJbmRleDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBJbnB1dE1hbmFnZXIucHJvdG90eXBlLnNldEV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmICh0aGlzLl9rZXlFdmVudHMua2V5ZG93biAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9rZXlFdmVudHMua2V5ZG93bik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9rZXlFdmVudHMua2V5dXAgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuX2tleUV2ZW50cy5rZXl1cCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2tleUV2ZW50cy5rZXlkb3duID0gZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgICAgIF90aGlzLmtleURvd25FdmVudChldik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9rZXlFdmVudHMua2V5dXAgPSBmdW5jdGlvbiAoZXYpIHtcclxuICAgICAgICAgICAgX3RoaXMua2V5VXBFdmVudChldik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fa2V5RXZlbnRzLmtleWRvd24pO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5fa2V5RXZlbnRzLmtleXVwKTtcclxuICAgIH07XHJcbiAgICBJbnB1dE1hbmFnZXIucHJvdG90eXBlLnJlc2V0QXJyb3dJbnB1dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLl9rZXlTdGF0ZS5BcnJvd1VwID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fa2V5U3RhdGUuQXJyb3dSaWdodCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2tleVN0YXRlLkFycm93RG93biA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2tleVN0YXRlLkFycm93TGVmdCA9IGZhbHNlO1xyXG4gICAgfTtcclxuICAgIElucHV0TWFuYWdlci5wcm90b3R5cGUua2V5RG93bkV2ZW50ID0gZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgdmFyIG1haW5UYW5rID0gdGhpcy5fZ2FtZS5tYWluVGFuaztcclxuICAgICAgICB2YXIgbWVudSA9IHRoaXMuX2dhbWUuY3VycmVudE1lbnU7XHJcbiAgICAgICAgaWYgKG1lbnUgPT09IFwiR0FNRVwiIC8qIEdBTUUgKi8pIHtcclxuICAgICAgICAgICAgc3dpdGNoIChldi5jb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dVcFwiIC8qIGFycm93X3VwICovOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIiAvKiBhcnJvd19yaWdodCAqLzpcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIiAvKiBhcnJvd19kb3duICovOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiIC8qIGFycm93X2xlZnQgKi86XHJcbiAgICAgICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobWFpblRhbmspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFpblRhbmsuZGlyZWN0aW9uID0gRUtleXNUb0VEaXJlY3Rpb24oZXYuY29kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRBcnJvd0lucHV0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5U3RhdGVbZXYuY29kZV0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIlNwYWNlXCIgLyogc3BhY2ViYXIgKi86XHJcbiAgICAgICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobWFpblRhbmsgJiYgbWFpblRhbmsudmlzaWJsZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluVGFuay5maXJlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2tleVN0YXRlW2V2LmNvZGVdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJFc2NhcGVcIiAvKiBlc2MgKi86XHJcbiAgICAgICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9rZXlTdGF0ZVtldi5jb2RlXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9nYW1lLmdhbWVEYXRhLmdhbWVPdmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9nYW1lLnBhdXNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9nYW1lLnBhdXNlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9nYW1lLnBhdXNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChtZW51ID09PSBcIk1BSU5cIiAvKiBNQUlOICovKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZXYuY29kZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkFycm93VXBcIiAvKiBhcnJvd191cCAqLzpcclxuICAgICAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9nYW1lLm9iamVjdHMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fY3Vyc29ySW5kZXggLSAxIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3Vyc29ySW5kZXggPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3Vyc29ySW5kZXgtLTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmN1cnNvckluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIiAvKiBhcnJvd19kb3duICovOlxyXG4gICAgICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2dhbWUub2JqZWN0cy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jdXJzb3JJbmRleCArIDEgPiAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJzb3JJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJzb3JJbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIlNwYWNlXCIgLyogc3BhY2ViYXIgKi86XHJcbiAgICAgICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX2N1cnNvckluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2dhbWUubmV3R2FtZSgxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBJbnB1dE1hbmFnZXIucHJvdG90eXBlLmtleVVwRXZlbnQgPSBmdW5jdGlvbiAoZXYpIHtcclxuICAgICAgICB2YXIgY29kZSA9IGV2LmNvZGU7XHJcbiAgICAgICAgdGhpcy5fa2V5U3RhdGVbY29kZV0gPSBmYWxzZTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gSW5wdXRNYW5hZ2VyO1xyXG59KCkpO1xyXG5leHBvcnQgZGVmYXVsdCBJbnB1dE1hbmFnZXI7XHJcbiIsInZhciBCTE9DS19GVUxMID0ge1xyXG4gICAgYm90dG9tTGVmdDogdHJ1ZSxcclxuICAgIGJvdHRvbVJpZ2h0OiB0cnVlLFxyXG4gICAgdG9wTGVmdDogdHJ1ZSxcclxuICAgIHRvcFJpZ2h0OiB0cnVlXHJcbn07XHJcbnZhciBCTE9DS19IQUxGX0hUID0ge1xyXG4gICAgYm90dG9tTGVmdDogZmFsc2UsXHJcbiAgICBib3R0b21SaWdodDogZmFsc2UsXHJcbiAgICB0b3BMZWZ0OiB0cnVlLFxyXG4gICAgdG9wUmlnaHQ6IHRydWVcclxufTtcclxudmFyIEJMT0NLX0hBTEZfSEIgPSB7XHJcbiAgICBib3R0b21MZWZ0OiB0cnVlLFxyXG4gICAgYm90dG9tUmlnaHQ6IHRydWUsXHJcbiAgICB0b3BMZWZ0OiBmYWxzZSxcclxuICAgIHRvcFJpZ2h0OiBmYWxzZVxyXG59O1xyXG52YXIgQkxPQ0tfSEFMRl9WTCA9IHtcclxuICAgIGJvdHRvbUxlZnQ6IHRydWUsXHJcbiAgICBib3R0b21SaWdodDogZmFsc2UsXHJcbiAgICB0b3BMZWZ0OiB0cnVlLFxyXG4gICAgdG9wUmlnaHQ6IGZhbHNlXHJcbn07XHJcbnZhciBCTE9DS19IQUxGX1ZSID0ge1xyXG4gICAgYm90dG9tTGVmdDogZmFsc2UsXHJcbiAgICBib3R0b21SaWdodDogdHJ1ZSxcclxuICAgIHRvcExlZnQ6IGZhbHNlLFxyXG4gICAgdG9wUmlnaHQ6IHRydWVcclxufTtcclxudmFyIERlZmF1bHRMZXZlbHMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbGV2ZWxJZDogMSxcclxuICAgICAgICBsZXZlbE5hbWU6ICdMRVZFTCAxJyxcclxuICAgICAgICBibG9ja3M6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMSwgeTogMSB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMywgeTogMSB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNSwgeTogMSB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNywgeTogMSB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogOSwgeTogMSB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMTEsIHk6IDEgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDEsIHk6IDIgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDMsIHk6IDIgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDUsIHk6IDIgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDcsIHk6IDIgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDksIHk6IDIgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDExLCB5OiAyIH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAxLCB5OiAzIH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAzLCB5OiAzIH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA1LCB5OiAzIH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA2LCB5OiAzIH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIklST05cIiAvKiBJUk9OICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNywgeTogMyB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogOSwgeTogMyB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMTEsIHk6IDMgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDEsIHk6IDQgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDMsIHk6IDQgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDUsIHk6IDQgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0hBTEZfSFQsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDcsIHk6IDQgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0hBTEZfSFQsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDksIHk6IDQgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDExLCB5OiA0IH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAxLCB5OiA1IH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19IQUxGX0hULFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAzLCB5OiA1IH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19IQUxGX0hULFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA1LCB5OiA1IH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19IQUxGX0hCLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA3LCB5OiA1IH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19IQUxGX0hCLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA5LCB5OiA1IH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19IQUxGX0hULFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAxMSwgeTogNSB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IVCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMCwgeTogNiB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IQixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMiwgeTogNiB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IQixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMywgeTogNiB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IQixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNSwgeTogNiB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IVCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNywgeTogNiB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IVCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogOSwgeTogNiB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IQixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMTAsIHk6IDYgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0hBTEZfSEIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDEyLCB5OiA2IH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19IQUxGX0hCLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAwLCB5OiA3IH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIklST05cIiAvKiBJUk9OICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IVCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMiwgeTogNyB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IVCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMywgeTogNyB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IVCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNSwgeTogNyB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IQixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNywgeTogNyB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IQixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogOSwgeTogNyB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IVCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMTAsIHk6IDcgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0hBTEZfSFQsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDEyLCB5OiA3IH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIklST05cIiAvKiBJUk9OICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IVCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMSwgeTogOCB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IQixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMywgeTogOCB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IQixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNSwgeTogOCB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNiwgeTogOCB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNywgeTogOCB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogOSwgeTogOCB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IQixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMTEsIHk6IDggfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0hBTEZfSEIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDEsIHk6IDkgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDMsIHk6IDkgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDUsIHk6IDkgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDcsIHk6IDkgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDksIHk6IDkgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDExLCB5OiA5IH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAxLCB5OiAxMCB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMywgeTogMTAgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDUsIHk6IDEwIH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19IQUxGX0hULFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA3LCB5OiAxMCB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IVCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogOSwgeTogMTAgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDExLCB5OiAxMCB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMSwgeTogMTEgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDMsIHk6IDExIH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA1LCB5OiAxMSB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbUxlZnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbVJpZ2h0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcExlZnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcFJpZ2h0OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNiwgeTogMTEgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0hBTEZfSEIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDcsIHk6IDExIH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgICAgICBibG9ja1N0YXRlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tTGVmdDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBib3R0b21SaWdodDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wTGVmdDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wUmlnaHQ6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA5LCB5OiAxMSB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMTEsIHk6IDExIH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA1LCB5OiAxMiB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9WUixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNiwgeTogMTIgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiRUFHTEVcIiAvKiBFQUdMRSAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDcsIHk6IDEyIH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19IQUxGX1ZMLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdGFua3M6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQVJNT1VSRUQ6IDAsXHJcbiAgICAgICAgICAgICAgICBERUZBVUxUOiAxOCxcclxuICAgICAgICAgICAgICAgIFNQRUVEOiAwLFxyXG4gICAgICAgICAgICAgICAgUE9XRVI6IDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQVJNT1VSRUQ6IDAsXHJcbiAgICAgICAgICAgICAgICBERUZBVUxUOiAwLFxyXG4gICAgICAgICAgICAgICAgU1BFRUQ6IDIsXHJcbiAgICAgICAgICAgICAgICBQT1dFUjogMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG5dO1xyXG5leHBvcnQgZGVmYXVsdCBEZWZhdWx0TGV2ZWxzO1xyXG4iLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuaW1wb3J0IEdhbWVPYmplY3QgZnJvbSBcIi4vR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBHdWlkIH0gZnJvbSBcIi4uLy4uL1V0aWxzL1V0aWxzXCI7XHJcbmltcG9ydCBTUFJUSUVfREVGIGZyb20gXCIuLi8uLi9SZW5kZXIvU3ByaXRlL1Nwcml0ZURlZmluaXRpb25cIjtcclxuaW1wb3J0IHsgZ2V0U3ByaXRlU2l6ZSB9IGZyb20gXCIuLi8uLi9SZW5kZXIvU3ByaXRlL1Nwcml0ZURhdGFcIjtcclxudmFyIEFuaW1hdGlvbk9iamVjdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhBbmltYXRpb25PYmplY3QsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBBbmltYXRpb25PYmplY3QoZ2FtZSwgaWQsIGFuaW1hdGlvblR5cGUsIGFuaW1hdGlvblBvaW50LCBkdXJhdGlvbiwgZnJhbWVSYXRlLCBsb29wLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGlmIChsb29wID09PSB2b2lkIDApIHsgbG9vcCA9IGZhbHNlOyB9XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBpZiAoaWQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZCA9IEd1aWQubmV3R3VpZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGdhbWUsIFwiQU5JTUFUSU9OXCIgLyogQU5JTUFUSU9OICovLCBhbmltYXRpb25Qb2ludCwgaWQpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuYW5pbWF0aW9uVHlwZSA9IGFuaW1hdGlvblR5cGU7XHJcbiAgICAgICAgX3RoaXMuX2FuaW1hdGlvblBvaW50ID0gYW5pbWF0aW9uUG9pbnQ7XHJcbiAgICAgICAgX3RoaXMuX3Nwcml0ZVBvc2l0aW9uID0gMDtcclxuICAgICAgICBfdGhpcy5fY3VycmVudFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICBfdGhpcy5fZXhwaXJlVGltZSA9IF90aGlzLl9jdXJyZW50VGltZSArIGR1cmF0aW9uO1xyXG4gICAgICAgIF90aGlzLl9mcmFtZUNvdW50ID0gU1BSVElFX0RFRi5BTklNQVRJT05bX3RoaXMuYW5pbWF0aW9uVHlwZV0ubGVuZ3RoO1xyXG4gICAgICAgIF90aGlzLl9mcmFtZVJhdGUgPSBmcmFtZVJhdGU7XHJcbiAgICAgICAgX3RoaXMuX2xvb3AgPSBsb29wO1xyXG4gICAgICAgIF90aGlzLl9jYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgICAgIF90aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFuaW1hdGlvbk9iamVjdC5wcm90b3R5cGUsIFwiYW5pbWF0aW9uUG9pbnRcIiwge1xyXG4gICAgICAgIC8vI3JlZ2lvbiBnZXR0ZXIsIHNldHRlclxyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYW5pbWF0aW9uUG9pbnQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChhbmltYXRpb25Qb2ludCkge1xyXG4gICAgICAgICAgICB0aGlzLl9hbmltYXRpb25Qb2ludCA9IGFuaW1hdGlvblBvaW50O1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFuaW1hdGlvbk9iamVjdC5wcm90b3R5cGUsIFwiZXhwaXJlVGltZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9leHBpcmVUaW1lO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIC8vI2VuZHJlZ2lvblxyXG4gICAgLy8jcmVnaW9uIHB1YmxpYyBtZXRob2RzXHJcbiAgICAvLyBpZ25vcmUgaGl0IGV2ZW50XHJcbiAgICBBbmltYXRpb25PYmplY3QucHJvdG90eXBlLmhpdCA9IGZ1bmN0aW9uICgpIHsgfTtcclxuICAgIEFuaW1hdGlvbk9iamVjdC5wcm90b3R5cGUubmV4dFNwcml0ZVBvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9mcmFtZUNvdW50IDwgMikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2dhbWUubG9nKFwiW1wiICsgdGhpcy5zcHJpdGVQb3NpdGlvbiArIFwiIC8gXCIgKyAodGhpcy5fZnJhbWVDb3VudCAtIDEpICsgXCJdXCIgKyAocGVyZm9ybWFuY2Uubm93KCkgLSB0aGlzLl9jdXJyZW50VGltZSkgKyBcIiA+PSBcIiArIHRoaXMuX2ZyYW1lUmF0ZSk7XHJcbiAgICAgICAgaWYgKHBlcmZvcm1hbmNlLm5vdygpIC0gdGhpcy5fY3VycmVudFRpbWUgPj0gdGhpcy5fZnJhbWVSYXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9zcHJpdGVQb3NpdGlvbiArIDEgPCB0aGlzLl9mcmFtZUNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zcHJpdGVQb3NpdGlvbisrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX2xvb3ApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Nwcml0ZVBvc2l0aW9uID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9zcHJpdGVQb3NpdGlvbjtcclxuICAgIH07XHJcbiAgICBBbmltYXRpb25PYmplY3QucHJvdG90eXBlLmV4cGlyZSA9IGZ1bmN0aW9uIChyZW1vdmUpIHtcclxuICAgICAgICBpZiAocmVtb3ZlID09PSB2b2lkIDApIHsgcmVtb3ZlID0gdHJ1ZTsgfVxyXG4gICAgICAgIHRoaXMuX2dhbWUubG9nKFwiQU5JTUFUSU9OIFwiICsgdGhpcy5pZCArIFwiIEhBUyBCRUVOIEVYUElSRUQuIChcIiArIHBlcmZvcm1hbmNlLm5vdyArIFwiKVwiKTtcclxuICAgICAgICBpZiAocmVtb3ZlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9jYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLl9jYWxsYmFjayh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLy8jZW5kcmVnaW9uXHJcbiAgICBBbmltYXRpb25PYmplY3QucHJvdG90eXBlLnVwZGF0ZVBvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBzcHJpdGVEYXRhID0gZ2V0U3ByaXRlU2l6ZSh0aGlzKTtcclxuICAgICAgICB0aGlzLl9wb3NpdG9uID0ge1xyXG4gICAgICAgICAgICB4OiB0aGlzLl9hbmltYXRpb25Qb2ludC54IC0gc3ByaXRlRGF0YS53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgIHk6IHRoaXMuX2FuaW1hdGlvblBvaW50LnkgLSBzcHJpdGVEYXRhLmhlaWdodCAvIDJcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBBbmltYXRpb25PYmplY3Q7XHJcbn0oR2FtZU9iamVjdCkpO1xyXG5leHBvcnQgZGVmYXVsdCBBbmltYXRpb25PYmplY3Q7XHJcbiIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5pbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiLi9HYW1lT2JqZWN0XCI7XHJcbmltcG9ydCB7IEd1aWQsIHJlbW92ZUR1cGxpY2F0ZSB9IGZyb20gXCIuLi8uLi9VdGlscy9VdGlsc1wiO1xyXG5pbXBvcnQgQnVsbGV0T2JqZWN0IGZyb20gXCIuL0J1bGxldE9iamVjdFwiO1xyXG5pbXBvcnQgeyBnZXRTcHJpdGVTaXplIH0gZnJvbSBcIi4uLy4uL1JlbmRlci9TcHJpdGUvU3ByaXRlRGF0YVwiO1xyXG5pbXBvcnQgeyBCbG9ja0NvbGxpc2lvblRlc3QgfSBmcm9tIFwiLi4vLi4vVXRpbHMvQ29sbGlzaW9uVGVzdFwiO1xyXG5leHBvcnQgZnVuY3Rpb24gQmxvY2tTdGF0ZTJ4MlRvNHg0KHgyKSB7XHJcbiAgICB2YXIgeDQgPSBbXHJcbiAgICAgICAgW2ZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlXSxcclxuICAgICAgICBbZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2VdLFxyXG4gICAgICAgIFtmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZV0sXHJcbiAgICAgICAgW2ZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlXVxyXG4gICAgXTtcclxuICAgIHg0WzBdWzBdID0geDIudG9wTGVmdDtcclxuICAgIHg0WzBdWzFdID0geDIudG9wTGVmdDtcclxuICAgIHg0WzFdWzBdID0geDIudG9wTGVmdDtcclxuICAgIHg0WzFdWzFdID0geDIudG9wTGVmdDtcclxuICAgIHg0WzBdWzJdID0geDIudG9wUmlnaHQ7XHJcbiAgICB4NFswXVszXSA9IHgyLnRvcFJpZ2h0O1xyXG4gICAgeDRbMV1bMl0gPSB4Mi50b3BSaWdodDtcclxuICAgIHg0WzFdWzNdID0geDIudG9wUmlnaHQ7XHJcbiAgICB4NFsyXVswXSA9IHgyLmJvdHRvbUxlZnQ7XHJcbiAgICB4NFsyXVsxXSA9IHgyLmJvdHRvbUxlZnQ7XHJcbiAgICB4NFszXVswXSA9IHgyLmJvdHRvbUxlZnQ7XHJcbiAgICB4NFszXVsxXSA9IHgyLmJvdHRvbUxlZnQ7XHJcbiAgICB4NFsyXVsyXSA9IHgyLmJvdHRvbVJpZ2h0O1xyXG4gICAgeDRbMl1bM10gPSB4Mi5ib3R0b21SaWdodDtcclxuICAgIHg0WzNdWzJdID0geDIuYm90dG9tUmlnaHQ7XHJcbiAgICB4NFszXVszXSA9IHgyLmJvdHRvbVJpZ2h0O1xyXG4gICAgcmV0dXJuIHg0O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBCbG9ja1N0YXRlNHg0VG8yeDIoeDQpIHtcclxuICAgIHZhciB4MiA9IHtcclxuICAgICAgICB0b3BMZWZ0OiBmYWxzZSxcclxuICAgICAgICB0b3BSaWdodDogZmFsc2UsXHJcbiAgICAgICAgYm90dG9tTGVmdDogZmFsc2UsXHJcbiAgICAgICAgYm90dG9tUmlnaHQ6IGZhbHNlXHJcbiAgICB9O1xyXG4gICAgaWYgKHg0WzBdWzBdIHx8IHg0WzBdWzFdIHx8IHg0WzFdWzBdIHx8IHg0WzFdWzFdKSB7XHJcbiAgICAgICAgeDIudG9wTGVmdCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAoeDRbMF1bMl0gfHwgeDRbMF1bM10gfHwgeDRbMV1bMl0gfHwgeDRbMV1bM10pIHtcclxuICAgICAgICB4Mi50b3BSaWdodCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAoeDRbMl1bMF0gfHwgeDRbMl1bMV0gfHwgeDRbM11bMF0gfHwgeDRbM11bMV0pIHtcclxuICAgICAgICB4Mi5ib3R0b21MZWZ0ID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmICh4NFsyXVsyXSB8fCB4NFsyXVszXSB8fCB4NFszXVsyXSB8fCB4NFszXVszXSkge1xyXG4gICAgICAgIHgyLmJvdHRvbVJpZ2h0ID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiB4MjtcclxufVxyXG52YXIgQmxvY2tPYmplY3QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoQmxvY2tPYmplY3QsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBCbG9ja09iamVjdChnYW1lLCBibG9ja1R5cGUsIHBvc2l0aW9uLCBibG9ja1N0YXRlMngyKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZ2FtZSwgXCJCTE9DS1wiIC8qIEJMT0NLICovLCBwb3NpdGlvbiwgR3VpZC5uZXdHdWlkKCkpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuYmxvY2tUeXBlID0gYmxvY2tUeXBlO1xyXG4gICAgICAgIF90aGlzLl9ibG9ja1N0YXRlID0gQmxvY2tTdGF0ZTJ4MlRvNHg0KGJsb2NrU3RhdGUyeDIpO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCbG9ja09iamVjdC5wcm90b3R5cGUsIFwiYmxvY2tTdGF0ZTR4NFwiLCB7XHJcbiAgICAgICAgLy8jcmVnaW9uIGdldHRlciBzZXR0ZXJcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Jsb2NrU3RhdGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJsb2NrT2JqZWN0LnByb3RvdHlwZSwgXCJibG9ja1N0YXRlMngyXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIEJsb2NrU3RhdGU0eDRUbzJ4Mih0aGlzLl9ibG9ja1N0YXRlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICAvLyNlbmRyZWdpb25cclxuICAgIEJsb2NrT2JqZWN0LnByb3RvdHlwZS5maW5kQ2VsbFBvc2l0aW9uID0gZnVuY3Rpb24gKHJvdywgY29sdW1uKSB7XHJcbiAgICAgICAgdmFyIGJsb2NrU2l6ZSA9IGdldFNwcml0ZVNpemUodGhpcyk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgeDogdGhpcy5wb3NpdGlvbi54ICsgKGJsb2NrU2l6ZS53aWR0aCAvIDQpICogY29sdW1uLFxyXG4gICAgICAgICAgICB5OiB0aGlzLnBvc2l0aW9uLnkgKyAoYmxvY2tTaXplLndpZHRoIC8gNCkgKiByb3dcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIEJsb2NrT2JqZWN0LnByb3RvdHlwZS5oaXQgPSBmdW5jdGlvbiAoZXZlbnRPcmlnaW4pIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmICghKGV2ZW50T3JpZ2luIGluc3RhbmNlb2YgQnVsbGV0T2JqZWN0KSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmJsb2NrVHlwZSA9PT0gXCJFQUdMRVwiIC8qIEVBR0xFICovKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Nwcml0ZVBvc2l0aW9uID0gMTtcclxuICAgICAgICAgICAgdGhpcy5fZ2FtZS5nYW1lb3ZlcigpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBidWxsZXQgPSBldmVudE9yaWdpbjtcclxuICAgICAgICBpZiAoYnVsbGV0LnBhcmVudC50YW5rTGV2ZWwgPCAzICYmIHRoaXMuYmxvY2tUeXBlID09PSBcIklST05cIiAvKiBJUk9OICovKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGJsb2NrU2l6ZSA9IGdldFNwcml0ZVNpemUodGhpcyk7XHJcbiAgICAgICAgdmFyIGNvbGxpc2lvbkNlbGxzID0gQmxvY2tDb2xsaXNpb25UZXN0KHRoaXMsIGJ1bGxldCk7XHJcbiAgICAgICAgdmFyIHhQb3MgPSByZW1vdmVEdXBsaWNhdGUoY29sbGlzaW9uQ2VsbHMubWFwKGZ1bmN0aW9uIChwb2ludCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKHBvaW50LnggLSBfdGhpcy5wb3NpdGlvbi54KSAvIChibG9ja1NpemUud2lkdGggLyA0KTtcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgdmFyIHlQb3MgPSByZW1vdmVEdXBsaWNhdGUoY29sbGlzaW9uQ2VsbHMubWFwKGZ1bmN0aW9uIChwb2ludCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKHBvaW50LnkgLSBfdGhpcy5wb3NpdGlvbi55KSAvIChibG9ja1NpemUuaGVpZ2h0IC8gNCk7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIHZhciBiNDQgPSB0aGlzLmJsb2NrU3RhdGU0eDQ7XHJcbiAgICAgICAgaWYgKGJ1bGxldC5kaXJlY3Rpb24gPT09IFwidXBcIiAvKiB1cCAqLyB8fCBidWxsZXQuZGlyZWN0aW9uID09PSBcImRvd25cIiAvKiBkb3duICovKSB7XHJcbiAgICAgICAgICAgIGlmICh4UG9zLmluY2x1ZGVzKDApIHx8IHhQb3MuaW5jbHVkZXMoMSkpIHtcclxuICAgICAgICAgICAgICAgIGI0NFt5UG9zWzBdXVswXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYjQ0W3lQb3NbMF1dWzFdID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAoeVBvc1swXSArIDEgPCA0ICYmIGJ1bGxldC5wYXJlbnQudGFua0xldmVsID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGI0NFt5UG9zWzBdICsgMV1bMF0gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBiNDRbeVBvc1swXSArIDFdWzFdID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHhQb3MuaW5jbHVkZXMoMikgfHwgeFBvcy5pbmNsdWRlcygzKSkge1xyXG4gICAgICAgICAgICAgICAgYjQ0W3lQb3NbMF1dWzJdID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBiNDRbeVBvc1swXV1bM10gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmICh5UG9zWzBdICsgMSA8IDQgJiYgYnVsbGV0LnBhcmVudC50YW5rTGV2ZWwgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYjQ0W3lQb3NbMF0gKyAxXVsyXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGI0NFt5UG9zWzBdICsgMV1bM10gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChidWxsZXQuZGlyZWN0aW9uID09PSBcImxlZnRcIiAvKiBsZWZ0ICovIHx8IGJ1bGxldC5kaXJlY3Rpb24gPT09IFwicmlnaHRcIiAvKiByaWdodCAqLykge1xyXG4gICAgICAgICAgICBpZiAoeVBvcy5pbmNsdWRlcygwKSB8fCB5UG9zLmluY2x1ZGVzKDEpKSB7XHJcbiAgICAgICAgICAgICAgICBiNDRbMF1beFBvc1swXV0gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGI0NFsxXVt4UG9zWzBdXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHhQb3NbMF0gKyAxIDwgNCAmJiBidWxsZXQucGFyZW50LnRhbmtMZXZlbCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBiNDRbMF1beFBvc1swXSArIDFdID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgYjQ0WzFdW3hQb3NbMF0gKyAxXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh5UG9zLmluY2x1ZGVzKDIpIHx8IHlQb3MuaW5jbHVkZXMoMykpIHtcclxuICAgICAgICAgICAgICAgIGI0NFsyXVt4UG9zWzBdXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYjQ0WzNdW3hQb3NbMF1dID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAoeFBvc1swXSArIDEgPCA0ICYmIGJ1bGxldC5wYXJlbnQudGFua0xldmVsID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGI0NFsyXVt4UG9zWzBdICsgMV0gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBiNDRbM11beFBvc1swXSArIDFdID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGF2YWlsYWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIGI0NC5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcclxuICAgICAgICAgICAgcm93LmZvckVhY2goZnVuY3Rpb24gKGNlbGwpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjZWxsID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXZhaWxhYmxlID0gY2VsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKGF2YWlsYWJsZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEJsb2NrT2JqZWN0O1xyXG59KEdhbWVPYmplY3QpKTtcclxuZXhwb3J0IGRlZmF1bHQgQmxvY2tPYmplY3Q7XHJcbiIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5pbXBvcnQgTW92aW5nT2JqZWN0LCB7IGNhbGN1bGF0ZU1vdmUgfSBmcm9tIFwiLi9Nb3ZpbmdPYmplY3RcIjtcclxuaW1wb3J0IHsgZ2V0U3ByaXRlU2l6ZSB9IGZyb20gXCIuLi8uLi9SZW5kZXIvU3ByaXRlL1Nwcml0ZURhdGFcIjtcclxuZXhwb3J0IHZhciBCVUxMRVRfU0xPVyA9IDQ7XHJcbmV4cG9ydCB2YXIgQlVMTEVUX0ZBU1QgPSA2O1xyXG52YXIgQnVsbGV0T2JqZWN0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEJ1bGxldE9iamVjdCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEJ1bGxldE9iamVjdChnYW1lLCBwYXJlbnQsIHBvc2l0aW9uLCBkaXJlY3Rpb24sIHNwZWVkLCBpZCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGdhbWUsIFwiQlVMTEVUXCIgLyogQlVMTEVUICovLCBwb3NpdGlvbiwgZGlyZWN0aW9uLCBzcGVlZCwgaWQpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuX3BhcmVudCA9IHBhcmVudDtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQnVsbGV0T2JqZWN0LnByb3RvdHlwZSwgXCJwYXJlbnRcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdWxsZXRPYmplY3QucHJvdG90eXBlLCBcInBhcmVudElkXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3BhcmVudC5pZDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBCdWxsZXRPYmplY3QucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAvLyBsZXQgb3JpZ2luYWwgPSBkZWVwQ2xvbmUodGhpcy5wb3NpdGlvbikgYXMgUG9pbnQ7XHJcbiAgICAgICAgY2FsY3VsYXRlTW92ZSh0aGlzLnBvc2l0aW9uLCB0aGlzLl9kaXJlY3Rpb24sIHRoaXMuX3NwZWVkKTtcclxuICAgICAgICB0aGlzLl9nYW1lLmxvZyhcIkJVTExFVCBbXCIgKyB0aGlzLmlkICsgXCJdIE1PVkVEIC0+IFt4OlwiICsgdGhpcy5wb3NpdGlvbi54ICsgXCJdLCB5OltcIiArIHRoaXMucG9zaXRpb24ueSArIFwiXVwiKTtcclxuICAgICAgICB2YXIgdGVzdF92aXNpYmxlID0gdGhpcy5fZ2FtZS50ZXN0VmlzaWJpbGl0eSh0aGlzKTtcclxuICAgICAgICB2YXIgdGVzdF9jb2xsaXNpb24gPSB0aGlzLl9nYW1lLmNvbGxpc2lvblRlc3QodGhpcyk7XHJcbiAgICAgICAgaWYgKHRlc3RfdmlzaWJsZSA9PSBmYWxzZSAmJiB0ZXN0X2NvbGxpc2lvbi5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmZpdFRvQm9yZGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZXhwbG9kZSh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGVzdF9jb2xsaXNpb24ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB2YXIgZXhwbG9kZWRfMSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRlc3RfY29sbGlzaW9uLmZvckVhY2goZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC5vYmplY3RUeXBlID09PSBcIkJVTExFVFwiIC8qIEJVTExFVCAqLykge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cGxvZGVkXzEgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChvYmplY3Qub2JqZWN0VHlwZSA9PT0gXCJUQU5LXCIgLyogVEFOSyAqLykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmplY3QuaXNJbnZpbmNpYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGxvZGVkXzEgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5maXRUb09iamVjdChvYmplY3QsIC0xKTtcclxuICAgICAgICAgICAgICAgIG9iamVjdC5oaXQoX3RoaXMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5leHBsb2RlKGV4cGxvZGVkXzEpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBCdWxsZXRPYmplY3QucHJvdG90eXBlLmhpdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmV4cGxvZGUoZmFsc2UpO1xyXG4gICAgfTtcclxuICAgIEJ1bGxldE9iamVjdC5wcm90b3R5cGUuZXhwbG9kZSA9IGZ1bmN0aW9uIChhbmltYXRpb24pIHtcclxuICAgICAgICB2YXIgYW5pbWF0aW9uUG9zaXRpb247XHJcbiAgICAgICAgdmFyIHNpemUgPSBnZXRTcHJpdGVTaXplKHRoaXMpO1xyXG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gXCJ1cFwiIC8qIHVwICovIHx8IHRoaXMuZGlyZWN0aW9uID09PSBcImRvd25cIiAvKiBkb3duICovKSB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvblBvc2l0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgeDogdGhpcy5wb3NpdGlvbi54ICsgc2l6ZS53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgICAgICB5OiB0aGlzLnBvc2l0aW9uLnlcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvblBvc2l0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgeDogdGhpcy5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgICAgICAgeTogdGhpcy5wb3NpdGlvbi55ICsgc2l6ZS5oZWlnaHQgLyAyXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhbmltYXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5fZ2FtZS5zdGFydEFuaW1hdGlvbih0aGlzLCBcIkVYUExPU0lPTl9TTUFMTFwiIC8qIEVYUExPU0lPTl9TTUFMTCAqLyk7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2dhbWUubG9nKFwiQlVMTEVUIFtcIiArIHRoaXMuaWQgKyBcIl0gRVhQTE9ERUQuXCIpO1xyXG4gICAgfTtcclxuICAgIEJ1bGxldE9iamVjdC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUucmVtb3ZlLmNhbGwodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fcGFyZW50LnJlbW92ZUJ1bGxldCh0aGlzLmlkKTtcclxuICAgICAgICB0aGlzLl9nYW1lLmxvZyhcIkJVTExFVCBbXCIgKyB0aGlzLmlkICsgXCJdIEhBUyBCRUVOIFJFTU9WRUQuXCIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBCdWxsZXRPYmplY3Q7XHJcbn0oTW92aW5nT2JqZWN0KSk7XHJcbmV4cG9ydCBkZWZhdWx0IEJ1bGxldE9iamVjdDtcclxuIiwiZXhwb3J0IGZ1bmN0aW9uIFNjb3JlVG9BbmltYXRpb24oc2NvcmUpIHtcclxuICAgIHN3aXRjaCAoTWF0aC5mbG9vcihzY29yZSAvIDEwMCkpIHtcclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgIHJldHVybiBcIlNDT1JFXzEwMFwiIC8qIFNDT1JFXzEwMCAqLztcclxuICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgIHJldHVybiBcIlNDT1JFXzIwMFwiIC8qIFNDT1JFXzIwMCAqLztcclxuICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgIHJldHVybiBcIlNDT1JFXzMwMFwiIC8qIFNDT1JFXzMwMCAqLztcclxuICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgIHJldHVybiBcIlNDT1JFXzQwMFwiIC8qIFNDT1JFXzQwMCAqLztcclxuICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgIHJldHVybiBcIlNDT1JFXzUwMFwiIC8qIFNDT1JFXzUwMCAqLztcclxuICAgIH1cclxufVxyXG47XHJcbi8vIFRPRE8gVXBkYXRlIGRlZmF1bHRzXHJcbmV4cG9ydCB2YXIgQW5pbWF0aW9uRGVmYXVsdHMgPSB7XHJcbiAgICBFWFBMT1NJT05fU01BTEw6IHtcclxuICAgICAgICBkdXJhdGlvbjogMjAwLFxyXG4gICAgICAgIGZyYW1lUmF0ZTogMjAwIC8gNCxcclxuICAgICAgICBsb29wOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIEVYUExPU0lPTl9MQVJHRToge1xyXG4gICAgICAgIGR1cmF0aW9uOiAxNTAsXHJcbiAgICAgICAgZnJhbWVSYXRlOiAxNTAgLyAzLFxyXG4gICAgICAgIGxvb3A6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgSU5WSU5DSUJMRToge1xyXG4gICAgICAgIGR1cmF0aW9uOiAzMDAwLFxyXG4gICAgICAgIGZyYW1lUmF0ZTogMjUsXHJcbiAgICAgICAgbG9vcDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIFNQQVdOOiB7XHJcbiAgICAgICAgZHVyYXRpb246IDEwMDAsXHJcbiAgICAgICAgZnJhbWVSYXRlOiAxMDAwIC8gMTMsXHJcbiAgICAgICAgbG9vcDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIFNDT1JFXzEwMDoge1xyXG4gICAgICAgIGR1cmF0aW9uOiAxMDAwLFxyXG4gICAgICAgIGZyYW1lUmF0ZTogMCxcclxuICAgICAgICBsb29wOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIFNDT1JFXzIwMDoge1xyXG4gICAgICAgIGR1cmF0aW9uOiAxMDAwLFxyXG4gICAgICAgIGZyYW1lUmF0ZTogMCxcclxuICAgICAgICBsb29wOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIFNDT1JFXzMwMDoge1xyXG4gICAgICAgIGR1cmF0aW9uOiAxMDAwLFxyXG4gICAgICAgIGZyYW1lUmF0ZTogMCxcclxuICAgICAgICBsb29wOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIFNDT1JFXzQwMDoge1xyXG4gICAgICAgIGR1cmF0aW9uOiAxMDAwLFxyXG4gICAgICAgIGZyYW1lUmF0ZTogMCxcclxuICAgICAgICBsb29wOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIFNDT1JFXzUwMDoge1xyXG4gICAgICAgIGR1cmF0aW9uOiAxMDAwLFxyXG4gICAgICAgIGZyYW1lUmF0ZTogMCxcclxuICAgICAgICBsb29wOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIEdBTUVPVkVSOiB7XHJcbiAgICAgICAgZHVyYXRpb246IDQwMDAsXHJcbiAgICAgICAgZnJhbWVSYXRlOiAxMDAsXHJcbiAgICAgICAgbG9vcDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIFBBVVNFOiB7XHJcbiAgICAgICAgZHVyYXRpb246IC0xLFxyXG4gICAgICAgIGZyYW1lUmF0ZTogMTAwLFxyXG4gICAgICAgIGxvb3A6IHRydWVcclxuICAgIH0sXHJcbiAgICBUSVRMRToge1xyXG4gICAgICAgIGR1cmF0aW9uOiA0MDAwLFxyXG4gICAgICAgIGZyYW1lUmF0ZTogMTAwLFxyXG4gICAgICAgIGxvb3A6IHRydWVcclxuICAgIH0sXHJcbiAgICBDVVJTT1I6IHtcclxuICAgICAgICBkdXJhdGlvbjogNTAsXHJcbiAgICAgICAgZnJhbWVSYXRlOiAyNSxcclxuICAgICAgICBsb29wOiB0cnVlXHJcbiAgICB9XHJcbn07XHJcbiIsInZhciBFbmVteVNjb3JlTWFwID0gbmV3IE1hcCgpO1xyXG5FbmVteVNjb3JlTWFwLnNldChcIkRFRkFVTFRcIiAvKiBERUZBVUxUICovLCAxMDApO1xyXG5FbmVteVNjb3JlTWFwLnNldChcIlNQRUVEXCIgLyogU1BFRUQgKi8sIDIwMCk7XHJcbkVuZW15U2NvcmVNYXAuc2V0KFwiUE9XRVJcIiAvKiBQT1dFUiAqLywgMzAwKTtcclxuRW5lbXlTY29yZU1hcC5zZXQoXCJBUk1PVVJFRFwiIC8qIEFSTU9VUkVEICovLCA0MDApO1xyXG5leHBvcnQgeyBFbmVteVNjb3JlTWFwIH07XHJcbiIsInZhciBHYW1lT2JqZWN0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gR2FtZU9iamVjdChnYW1lLCBvYmplY3RUeXBlLCBwb3NpdGlvbiwgaWQsIHZpc2libGUpIHtcclxuICAgICAgICBpZiAodmlzaWJsZSA9PT0gdm9pZCAwKSB7IHZpc2libGUgPSB0cnVlOyB9XHJcbiAgICAgICAgdGhpcy5fZ2FtZSA9IGdhbWU7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdmlzaWJsZTtcclxuICAgICAgICB0aGlzLm9iamVjdFR5cGUgPSBvYmplY3RUeXBlO1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZVBvc2l0aW9uID0gMDtcclxuICAgICAgICBpZiAocG9zaXRpb24gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Bvc2l0b24gPSBwb3NpdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Bvc2l0b24gPSB7XHJcbiAgICAgICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICAgICAgeTogMFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaWQgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoR2FtZU9iamVjdC5wcm90b3R5cGUsIFwicG9zaXRpb25cIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcG9zaXRvbjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbi54IDw9IDAgfHwgcG9zaXRpb24ueSA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyAncG9zaXRpb24gY2Fubm90IGJlIGEgbmVnYXRpdmUgdmFsdWUnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX3Bvc2l0b24gPSBwb3NpdGlvbjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoR2FtZU9iamVjdC5wcm90b3R5cGUsIFwic3ByaXRlUG9zaXRpb25cIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3ByaXRlUG9zaXRpb247XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgR2FtZU9iamVjdC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuX2dhbWUucmVtb3ZlT2JqZWN0KHRoaXMpO1xyXG4gICAgfTtcclxuICAgIEdhbWVPYmplY3QucHJvdG90eXBlLm5leHRTcHJpdGVQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLl9zcHJpdGVQb3NpdGlvbiA9IHRoaXMuX3Nwcml0ZVBvc2l0aW9uICsgMSA8PSAxID8gdGhpcy5fc3ByaXRlUG9zaXRpb24gKyAxIDogMDtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3ByaXRlUG9zaXRpb247XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEdhbWVPYmplY3Q7XHJcbn0oKSk7XHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVPYmplY3Q7XHJcbiIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5pbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiLi9HYW1lT2JqZWN0XCI7XHJcbmltcG9ydCB7IERSQVdJTkdfQ09OU1QgfSBmcm9tIFwiLi4vLi4vUmVuZGVyL1JlbmRlcmVyXCI7XHJcbmltcG9ydCB7IGdldFNwcml0ZVNpemUsIGdldE9iamVjdFNpemUgfSBmcm9tIFwiLi4vLi4vUmVuZGVyL1Nwcml0ZS9TcHJpdGVEYXRhXCI7XHJcbmltcG9ydCB7IEJsb2NrQ29sbGlzaW9uVGVzdCB9IGZyb20gXCIuLi8uLi9VdGlscy9Db2xsaXNpb25UZXN0XCI7XHJcbmltcG9ydCB7IG1heCwgbWluIH0gZnJvbSBcIi4uLy4uL1V0aWxzL1V0aWxzXCI7XHJcbnZhciBNb3ZpbmdPYmplY3QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoTW92aW5nT2JqZWN0LCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gTW92aW5nT2JqZWN0KGdhbWUsIG9iamVjdFR5cGUsIHBvc2l0aW9uLCBkaXJlY3Rpb24sIHNwZWVkLCBpZCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGdhbWUsIG9iamVjdFR5cGUsIHBvc2l0aW9uLCBpZCkgfHwgdGhpcztcclxuICAgICAgICBpZiAoZGlyZWN0aW9uICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBfdGhpcy5fZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgX3RoaXMuX2RpcmVjdGlvbiA9IFwidXBcIiAvKiB1cCAqLztcclxuICAgICAgICB9XHJcbiAgICAgICAgX3RoaXMuX3NwZWVkID0gc3BlZWQ7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1vdmluZ09iamVjdC5wcm90b3R5cGUsIFwiZGlyZWN0aW9uXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RpcmVjdGlvbjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLl9kaXJlY3Rpb24gPSBkaXJlY3Rpb247XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgTW92aW5nT2JqZWN0LnByb3RvdHlwZS5maXRUb0JvcmRlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZnJhbWUgPSBEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lO1xyXG4gICAgICAgIHZhciBzY3JlZW4gPSBEUkFXSU5HX0NPTlNULnNpemVzLnNjcmVlbjtcclxuICAgICAgICB2YXIgc2l6ZSA9IGdldFNwcml0ZVNpemUodGhpcyk7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICBjYXNlIFwibGVmdFwiIC8qIGxlZnQgKi86XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSBmcmFtZS5sZWZ0O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ1cFwiIC8qIHVwICovOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gZnJhbWUudG9wO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJkb3duXCIgLyogZG93biAqLzpcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSA9IHNjcmVlbi5oZWlnaHQgKyBmcmFtZS50b3AgLSBzaXplLmhlaWdodDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicmlnaHRcIiAvKiByaWdodCAqLzpcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IHNjcmVlbi53aWR0aCArIGZyYW1lLmxlZnQgLSBzaXplLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIE1vdmluZ09iamVjdC5wcm90b3R5cGUuZml0VG9PYmplY3QgPSBmdW5jdGlvbiAob2JqZWN0LCBnYXApIHtcclxuICAgICAgICBpZiAoZ2FwID09PSB2b2lkIDApIHsgZ2FwID0gMDsgfVxyXG4gICAgICAgIHZhciBzaXplID0gZ2V0U3ByaXRlU2l6ZSh0aGlzKTtcclxuICAgICAgICB2YXIgdGFua1NpemUgPSBnZXRPYmplY3RTaXplKHRoaXMub2JqZWN0VHlwZSk7XHJcbiAgICAgICAgdmFyIG9iamVjdFNpemUgPSBnZXRTcHJpdGVTaXplKG9iamVjdCk7XHJcbiAgICAgICAgaWYgKG9iamVjdC5vYmplY3RUeXBlID09PSBcIkJMT0NLXCIgLyogQkxPQ0sgKi8pIHtcclxuICAgICAgICAgICAgdmFyIGJsb2NrID0gb2JqZWN0O1xyXG4gICAgICAgICAgICB2YXIgY2VsbFNpemUgPSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogb2JqZWN0U2l6ZS53aWR0aCAvIDQsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IG9iamVjdFNpemUuaGVpZ2h0IC8gNFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB2YXIgYWRqdXN0R2FwID0gY2VsbFNpemUud2lkdGggKiAuODtcclxuICAgICAgICAgICAgdmFyIGNvbGxpc2lvbl9jZWxscyA9IEJsb2NrQ29sbGlzaW9uVGVzdChibG9jaywgdGhpcyk7XHJcbiAgICAgICAgICAgIHZhciB4UG9zID0gY29sbGlzaW9uX2NlbGxzLm1hcChmdW5jdGlvbiAocG9pbnQpIHsgcmV0dXJuIHBvaW50Lng7IH0pO1xyXG4gICAgICAgICAgICB2YXIgeVBvcyA9IGNvbGxpc2lvbl9jZWxscy5tYXAoZnVuY3Rpb24gKHBvaW50KSB7IHJldHVybiBwb2ludC55OyB9KTtcclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImxlZnRcIiAvKiBsZWZ0ICovOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh4UG9zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHlQb3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueSArIHRhbmtTaXplLmhlaWdodCAtIG1pbih5UG9zKSA8PSBhZGp1c3RHYXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSBtaW4oeVBvcykgLSB0YW5rU2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChtYXgoeVBvcykgKyBjZWxsU2l6ZS5oZWlnaHQgLSB0aGlzLnBvc2l0aW9uLnkgPD0gYWRqdXN0R2FwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gbWF4KHlQb3MpICsgY2VsbFNpemUuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IG1heCh4UG9zKSArIG9iamVjdFNpemUud2lkdGggLyA0ICsgZ2FwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJ1cFwiIC8qIHVwICovOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh5UG9zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHhQb3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueCArIHRhbmtTaXplLndpZHRoIC0gbWluKHhQb3MpIDw9IGFkanVzdEdhcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IG9iamVjdC5wb3NpdGlvbi54IC0gdGFua1NpemUud2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChtYXgoeFBvcykgKyBjZWxsU2l6ZS53aWR0aCAtIHRoaXMucG9zaXRpb24ueCA8PSBhZGp1c3RHYXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSBtYXgoeFBvcykgKyBjZWxsU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSBtYXgoeVBvcykgKyBjZWxsU2l6ZS5oZWlnaHQgKyBnYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImRvd25cIiAvKiBkb3duICovOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh5UG9zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHhQb3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueCArIHRhbmtTaXplLndpZHRoIC0gbWluKHhQb3MpIDw9IGFkanVzdEdhcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IG1pbih4UG9zKSAtIHRhbmtTaXplLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobWF4KHhQb3MpICsgY2VsbFNpemUud2lkdGggLSB0aGlzLnBvc2l0aW9uLnggPD0gYWRqdXN0R2FwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gbWF4KHhQb3MpICsgY2VsbFNpemUud2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gbWluKHlQb3MpIC0gc2l6ZS5oZWlnaHQgLSBnYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInJpZ2h0XCIgLyogcmlnaHQgKi86XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHhQb3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoeVBvcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi55ICsgdGFua1NpemUuaGVpZ2h0IC0gbWluKHlQb3MpIDw9IGFkanVzdEdhcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSA9IG1pbih5UG9zKSAtIHRhbmtTaXplLmhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG1heCh5UG9zKSArIGNlbGxTaXplLmhlaWdodCAtIHRoaXMucG9zaXRpb24ueSA8PSBhZGp1c3RHYXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSBtYXgoeVBvcykgKyBjZWxsU2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gbWluKHhQb3MpIC0gc2l6ZS53aWR0aCAtIGdhcDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5kaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJsZWZ0XCIgLyogbGVmdCAqLzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSBvYmplY3QucG9zaXRpb24ueCArIG9iamVjdFNpemUud2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwidXBcIiAvKiB1cCAqLzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSBvYmplY3QucG9zaXRpb24ueSArIG9iamVjdFNpemUuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImRvd25cIiAvKiBkb3duICovOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSA9IG9iamVjdC5wb3NpdGlvbi55IC0gc2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwicmlnaHRcIiAvKiByaWdodCAqLzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSBvYmplY3QucG9zaXRpb24ueCAtIHNpemUud2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE1vdmluZ09iamVjdDtcclxufShHYW1lT2JqZWN0KSk7XHJcbmV4cG9ydCBkZWZhdWx0IE1vdmluZ09iamVjdDtcclxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZU1vdmUocG9zaXRpb24sIGRpcmVjdGlvbiwgc3BlZWQpIHtcclxuICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgY2FzZSBcInVwXCIgLyogdXAgKi86XHJcbiAgICAgICAgICAgIHBvc2l0aW9uLnkgLT0gc3BlZWQ7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJyaWdodFwiIC8qIHJpZ2h0ICovOlxyXG4gICAgICAgICAgICBwb3NpdGlvbi54ICs9IHNwZWVkO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiZG93blwiIC8qIGRvd24gKi86XHJcbiAgICAgICAgICAgIHBvc2l0aW9uLnkgKz0gc3BlZWQ7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJsZWZ0XCIgLyogbGVmdCAqLzpcclxuICAgICAgICAgICAgcG9zaXRpb24ueCAtPSBzcGVlZDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn1cclxuIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbmltcG9ydCBUYW5rT2JqZWN0IGZyb20gXCIuL1RhbmtPYmplY3RcIjtcclxuaW1wb3J0IHsgRW5lbXlTY29yZU1hcCB9IGZyb20gXCIuL0VudW0vRVRhbmtUeXBlXCI7XHJcbmltcG9ydCB7IFNjb3JlVG9BbmltYXRpb24gfSBmcm9tIFwiLi9FbnVtL0VBbmltYXRpb25UeXBlXCI7XHJcbmV4cG9ydCB2YXIgQ29sb3JTZXF1ZW5jZURlZmluaXRpb25zID0ge1xyXG4gICAgREVGQVVMVDogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2VxdWVuY2U6IFtcIldISVRFXCIgLyogV0hJVEUgKi9dLFxyXG4gICAgICAgICAgICBkZWxheTogLTEsXHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuICAgIEFSTU9VUkVEOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzZXF1ZW5jZTogW1wiV0hJVEVcIiAvKiBXSElURSAqL10sXHJcbiAgICAgICAgICAgIGRlbGF5OiAyNSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2VxdWVuY2U6IFtcIkdSRUVOXCIgLyogR1JFRU4gKi8sIFwiWUVMTE9XXCIgLyogWUVMTE9XICovXSxcclxuICAgICAgICAgICAgZGVsYXk6IDI1LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzZXF1ZW5jZTogW1wiR1JFRU5cIiAvKiBHUkVFTiAqLywgXCJXSElURVwiIC8qIFdISVRFICovXSxcclxuICAgICAgICAgICAgZGVsYXk6IDI1LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzZXF1ZW5jZTogW1wiWUVMTE9XXCIgLyogWUVMTE9XICovLCBcIldISVRFXCIgLyogV0hJVEUgKi9dLFxyXG4gICAgICAgICAgICBkZWxheTogMjUsXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBJVEVNOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzZXF1ZW5jZTogW1wiV0hJVEVcIiAvKiBXSElURSAqLywgXCJNQUdFTlRBXCIgLyogTUFHRU5UQSAqL10sXHJcbiAgICAgICAgICAgIGRlbGF5OiAxMDAsXHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG59O1xyXG52YXIgVGFua0FJT0JqZWN0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFRhbmtBSU9CamVjdCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFRhbmtBSU9CamVjdChnYW1lLCBlbmVteVR5cGUsIGhhc0l0ZW0sIHBvc2l0aW9uLCBkaXJlY3Rpb24pIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBsZXZlbDtcclxuICAgICAgICB2YXIgaHAgPSAxO1xyXG4gICAgICAgIHN3aXRjaCAoZW5lbXlUeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJERUZBVUxUXCIgLyogREVGQVVMVCAqLzpcclxuICAgICAgICAgICAgICAgIGxldmVsID0gMDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiU1BFRURcIiAvKiBTUEVFRCAqLzpcclxuICAgICAgICAgICAgICAgIGxldmVsID0gMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiUE9XRVJcIiAvKiBQT1dFUiAqLzpcclxuICAgICAgICAgICAgICAgIGxldmVsID0gMjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiQVJNT1VSRURcIiAvKiBBUk1PVVJFRCAqLzpcclxuICAgICAgICAgICAgICAgIGxldmVsID0gMztcclxuICAgICAgICAgICAgICAgIGhwID0gNDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGdhbWUsIFwiRU5FTVlfVEFOS1wiIC8qIEVORU1ZX1RBTksgKi8sIHBvc2l0aW9uLCBkaXJlY3Rpb24sIFwiV0hJVEVcIiAvKiBXSElURSAqLywgbGV2ZWwpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMubGFzdENoYW5nZWQgPSAwO1xyXG4gICAgICAgIF90aGlzLl9lbmVteVR5cGUgPSBlbmVteVR5cGU7XHJcbiAgICAgICAgX3RoaXMuX2hhc0l0ZW0gPSBoYXNJdGVtO1xyXG4gICAgICAgIF90aGlzLl9jb2xvckluZGV4ID0gMDtcclxuICAgICAgICBfdGhpcy5faHAgPSBocDtcclxuICAgICAgICBjb25zb2xlLmxvZyhfdGhpcy5nZXRDb2xvckRlZmluaXRpb24oKSk7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRhbmtBSU9CamVjdC5wcm90b3R5cGUsIFwiY29sb3JJbmRleFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jb2xvckluZGV4O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIFRhbmtBSU9CamVjdC5wcm90b3R5cGUubmV4dENvbG9ySW5kZXggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGRlZmluaXRpb24gPSB0aGlzLmdldENvbG9yRGVmaW5pdGlvbigpO1xyXG4gICAgICAgIHZhciBtYXhJbmRleCA9IGRlZmluaXRpb24uc2VxdWVuY2UubGVuZ3RoO1xyXG4gICAgICAgIGlmICh0aGlzLl9jb2xvckluZGV4ICsgMSA+PSBtYXhJbmRleCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jb2xvckluZGV4ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbG9ySW5kZXgrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbG9ySW5kZXg7XHJcbiAgICB9O1xyXG4gICAgVGFua0FJT0JqZWN0LnByb3RvdHlwZS5nZXRDb2xvckRlZmluaXRpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGtleTtcclxuICAgICAgICB2YXIgaW5kZXg7XHJcbiAgICAgICAgaWYgKHRoaXMuX2hhc0l0ZW0gPT09IHRydWUpIHtcclxuICAgICAgICAgICAga2V5ID0gJ0lURU0nO1xyXG4gICAgICAgICAgICBpbmRleCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX2VuZW15VHlwZSA9PT0gXCJBUk1PVVJFRFwiIC8qIEFSTU9VUkVEICovKSB7XHJcbiAgICAgICAgICAgIGtleSA9IHRoaXMuX2VuZW15VHlwZS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBpbmRleCA9IHRoaXMuX2hwIC0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIENvbG9yU2VxdWVuY2VEZWZpbml0aW9uc1trZXldW2luZGV4XTtcclxuICAgIH07XHJcbiAgICBUYW5rQUlPQmplY3QucHJvdG90eXBlLmhpdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLl9ocCAtPSAxO1xyXG4gICAgICAgIGlmICh0aGlzLl9ocCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBUYW5rQUlPQmplY3QucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgICAgIHRoaXMuX2dhbWUuc3RhcnRBbmltYXRpb24odGhpcywgXCJFWFBMT1NJT05fU01BTExcIiAvKiBFWFBMT1NJT05fU01BTEwgKi8sIG51bGwsIGZ1bmN0aW9uIChhbmltYXRpb24pIHtcclxuICAgICAgICAgICAgX3RoaXMuX2dhbWUuc3RhcnRBbmltYXRpb24oYW5pbWF0aW9uLmFuaW1hdGlvblBvaW50LCBcIkVYUExPU0lPTl9MQVJHRVwiIC8qIEVYUExPU0lPTl9MQVJHRSAqLywgbnVsbCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNjb3JlQW5pbWF0aW9uID0gU2NvcmVUb0FuaW1hdGlvbihFbmVteVNjb3JlTWFwLmdldChfdGhpcy5fZW5lbXlUeXBlKSk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5fZ2FtZS5zdGFydEFuaW1hdGlvbihhbmltYXRpb24uYW5pbWF0aW9uUG9pbnQsIHNjb3JlQW5pbWF0aW9uLCBudWxsLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuX2dhbWUuc3Bhd25UYW5rKF90aGlzLnRhbmtUeXBlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gVGFua0FJT0JqZWN0O1xyXG59KFRhbmtPYmplY3QpKTtcclxuZXhwb3J0IGRlZmF1bHQgVGFua0FJT0JqZWN0O1xyXG4iLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuaW1wb3J0IHsgTUFJTl9UQU5LX0lEIH0gZnJvbSBcIi4uL0dhbWVcIjtcclxuaW1wb3J0IE1vdmluZ09iamVjdCwgeyBjYWxjdWxhdGVNb3ZlIH0gZnJvbSBcIi4vTW92aW5nT2JqZWN0XCI7XHJcbmltcG9ydCBCdWxsZXRPYmplY3QsIHsgQlVMTEVUX1NMT1csIEJVTExFVF9GQVNUIH0gZnJvbSBcIi4vQnVsbGV0T2JqZWN0XCI7XHJcbmltcG9ydCBTUFJUSUVfREVGIGZyb20gXCIuLi8uLi9SZW5kZXIvU3ByaXRlL1Nwcml0ZURlZmluaXRpb25cIjtcclxuaW1wb3J0IHsgR3VpZCB9IGZyb20gXCIuLi8uLi9VdGlscy9VdGlsc1wiO1xyXG5leHBvcnQgdmFyIFRBTktfU1BFRUQgPSAyO1xyXG5leHBvcnQgdmFyIFRBTktfRklSRV9ERUxBWSA9IDEwMDtcclxudmFyIFRhbmtPYmplY3QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoVGFua09iamVjdCwgX3N1cGVyKTtcclxuICAgIC8vI3JlZ2lvbiBjb25zdHJ1Y3RvclxyXG4gICAgZnVuY3Rpb24gVGFua09iamVjdChnYW1lLCB0YW5rVHlwZSwgcG9zaXRpb24sIGRpcmVjdGlvbiwgdGFua0NvbG9yLCB0YW5rTGV2ZWwsIGlkKSB7XHJcbiAgICAgICAgaWYgKHRhbmtMZXZlbCA9PT0gdm9pZCAwKSB7IHRhbmtMZXZlbCA9IDE7IH1cclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBnYW1lLCBcIlRBTktcIiAvKiBUQU5LICovLCBwb3NpdGlvbiwgZGlyZWN0aW9uLCBUQU5LX1NQRUVELCBpZCAhPSBudWxsID8gaWQgOiBHdWlkLm5ld0d1aWQoKSkgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5faXNJbnZpbmNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgX3RoaXMuX3RhbmtUeXBlID0gdGFua1R5cGU7XHJcbiAgICAgICAgX3RoaXMuX3RhbmtDb2xvciA9IHRhbmtDb2xvcjtcclxuICAgICAgICBfdGhpcy5fdGFua0xldmVsID0gdGFua0xldmVsO1xyXG4gICAgICAgIF90aGlzLl9idWxsZXRzID0gW107XHJcbiAgICAgICAgX3RoaXMudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIF90aGlzLl9sYXN0RmlyZWQgPSAwO1xyXG4gICAgICAgIF90aGlzLnNwYXduKCk7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRhbmtPYmplY3QucHJvdG90eXBlLCBcInRhbmtDb2xvclwiLCB7XHJcbiAgICAgICAgLy8jZW5kcmVnaW9uXHJcbiAgICAgICAgLy8jcmVnaW9uIGdldHRlciwgc2V0dGVyXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90YW5rQ29sb3I7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyBUT0RPOiBSRU1PVkUgV0hFTiBERVBMT1lcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChjb2xvcikge1xyXG4gICAgICAgICAgICB0aGlzLl90YW5rQ29sb3IgPSBjb2xvcjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVGFua09iamVjdC5wcm90b3R5cGUsIFwidGFua1R5cGVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdGFua1R5cGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRhbmtPYmplY3QucHJvdG90eXBlLCBcImlzSW52aW5jaWJsZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pc0ludmluY2libGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRhbmtPYmplY3QucHJvdG90eXBlLCBcInRhbmtMZXZlbFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90YW5rTGV2ZWw7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyBUT0RPOiBSRU1PVkUgV0hFTiBERVBMT1lcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChsZXZlbCkge1xyXG4gICAgICAgICAgICB0aGlzLl90YW5rTGV2ZWwgPSBsZXZlbDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICAvLyNlbmRyZWdpb25cclxuICAgIC8vI3JlZ2lvbiBpbXBsZW1lbnRzIG9mIE1vdmluZ09iamVjdFx0XHJcbiAgICBUYW5rT2JqZWN0LnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgY2FsY3VsYXRlTW92ZSh0aGlzLnBvc2l0aW9uLCB0aGlzLl9kaXJlY3Rpb24sIHRoaXMuX3NwZWVkKTtcclxuICAgICAgICB0aGlzLl9nYW1lLmxvZyhcIlRBTksgW1wiICsgdGhpcy5pZCArIFwiXSBNT1ZFRCAtPiBbIHg6IFwiICsgdGhpcy5wb3NpdGlvbi54ICsgXCIsIHk6IFwiICsgdGhpcy5wb3NpdGlvbi55ICsgXCIgXVwiKTtcclxuICAgICAgICAvLyB0ZXN0IG1vdmVtZW50IGlzIHZhbGlkXHJcbiAgICAgICAgdmFyIHRlc3RfdmlzaWJsZSA9IHRoaXMuX2dhbWUudGVzdFZpc2liaWxpdHkodGhpcyk7XHJcbiAgICAgICAgdmFyIHRlc3RfY29sbGlzaW9uID0gdGhpcy5fZ2FtZS5jb2xsaXNpb25UZXN0KHRoaXMpO1xyXG4gICAgICAgIGlmICh0ZXN0X3Zpc2libGUgPT0gZmFsc2UgJiYgdGVzdF9jb2xsaXNpb24ubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5maXRUb0JvcmRlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0ZXN0X2NvbGxpc2lvbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRlc3RfY29sbGlzaW9uLmZvckVhY2goZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC5vYmplY3RUeXBlID09PSBcIklURU1cIiAvKiBJVEVNICovKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LmhpdChfdGhpcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5maXRUb09iamVjdChvYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9nYW1lLmxvZyhcIlRBTksgW1wiICsgX3RoaXMuaWQgKyBcIl0gTU9WRVMgLT4gQkxPQ0tFRCEhIFsgeDogXCIgKyBfdGhpcy5wb3NpdGlvbi54ICsgXCIsIHk6IFwiICsgX3RoaXMucG9zaXRpb24ueSArIFwiIF1cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5leHRTcHJpdGVQb3NpdGlvbigpO1xyXG4gICAgfTtcclxuICAgIFRhbmtPYmplY3QucHJvdG90eXBlLmhpdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5faXNJbnZpbmNpYmxlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgICB9O1xyXG4gICAgLy8jZW5kcmVnaW9uXHJcbiAgICAvLyNyZWdpb24gcHVibGljIG1ldGhvZHNcclxuICAgIFRhbmtPYmplY3QucHJvdG90eXBlLmZpcmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG5vdyA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIGlmIChub3cgLSB0aGlzLl9sYXN0RmlyZWQgPj0gVEFOS19GSVJFX0RFTEFZKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xhc3RGaXJlZCA9IG5vdztcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVCdWxsZXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgVGFua09iamVjdC5wcm90b3R5cGUuc3Bhd24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLl9nYW1lLnN0YXJ0QW5pbWF0aW9uKHRoaXMsIFwiU1BBV05cIiAvKiBTUEFXTiAqLywgbnVsbCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBfdGhpcy52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKF90aGlzID09IF90aGlzLl9nYW1lLm1haW5UYW5rKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5pbnZpbmNpYmxlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBUYW5rT2JqZWN0LnByb3RvdHlwZS5pbnZpbmNpYmxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5faXNJbnZpbmNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9nYW1lLnN0YXJ0QW5pbWF0aW9uKHRoaXMsIFwiSU5WSU5DSUJMRVwiIC8qIElOVklOQ0lCTEUgKi8sIG51bGwsIGZ1bmN0aW9uIChhbmltKSB7XHJcbiAgICAgICAgICAgIF90aGlzLl9pc0ludmluY2libGUgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBUYW5rT2JqZWN0LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgICAgICB0aGlzLl9nYW1lLnN0YXJ0QW5pbWF0aW9uKHRoaXMsIFwiRVhQTE9TSU9OX1NNQUxMXCIgLyogRVhQTE9TSU9OX1NNQUxMICovLCBudWxsLCBmdW5jdGlvbiAoYW5pbWF0aW9uKSB7XHJcbiAgICAgICAgICAgIF90aGlzLl9nYW1lLnN0YXJ0QW5pbWF0aW9uKGFuaW1hdGlvbi5hbmltYXRpb25Qb2ludCwgXCJFWFBMT1NJT05fTEFSR0VcIiAvKiBFWFBMT1NJT05fTEFSR0UgKi8sIG51bGwsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5pZCA9PT0gTUFJTl9UQU5LX0lEKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuX2dhbWUuc3Bhd25UYW5rKF90aGlzLnRhbmtUeXBlLCBmYWxzZSwgMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5fZ2FtZS5zcGF3blRhbmsoX3RoaXMudGFua1R5cGUsIGZhbHNlLCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgVGFua09iamVjdC5wcm90b3R5cGUubGV2ZWx1cCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy50YW5rTGV2ZWwgPCAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFua0xldmVsKys7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFRhbmtPYmplY3QucHJvdG90eXBlLmNyZWF0ZUJ1bGxldCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy50YW5rTGV2ZWwgPCAyICYmIHRoaXMuX2J1bGxldHMubGVuZ3RoID49IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnRhbmtMZXZlbCA8IDQgJiYgdGhpcy5fYnVsbGV0cy5sZW5ndGggPj0gMikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBwb3NpdGlvbjtcclxuICAgICAgICB2YXIgdGFua1Nwcml0ZSA9IFNQUlRJRV9ERUYuVEFOS1t0aGlzLnRhbmtDb2xvcl1bdGhpcy50YW5rTGV2ZWxdW3RoaXMuZGlyZWN0aW9uXVt0aGlzLnNwcml0ZVBvc2l0aW9uXTtcclxuICAgICAgICB2YXIgYnVsbGV0U3ByaXRlID0gU1BSVElFX0RFRi5CVUxMRVRbdGhpcy5kaXJlY3Rpb25dO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5kaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgY2FzZSBcInVwXCIgLyogdXAgKi86XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICB4OiB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLmdldE1pZGRsZSh0YW5rU3ByaXRlLCBidWxsZXRTcHJpdGUsIHRoaXMuZGlyZWN0aW9uKSxcclxuICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLnBvc2l0aW9uLnlcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInJpZ2h0XCIgLyogcmlnaHQgKi86XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICB4OiB0aGlzLnBvc2l0aW9uLnggKyB0YW5rU3ByaXRlLnNpemUud2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5nZXRNaWRkbGUodGFua1Nwcml0ZSwgYnVsbGV0U3ByaXRlLCB0aGlzLmRpcmVjdGlvbilcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImRvd25cIiAvKiBkb3duICovOlxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeDogdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5nZXRNaWRkbGUodGFua1Nwcml0ZSwgYnVsbGV0U3ByaXRlLCB0aGlzLmRpcmVjdGlvbiksXHJcbiAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5wb3NpdGlvbi55ICsgdGFua1Nwcml0ZS5zaXplLmhlaWdodFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwibGVmdFwiIC8qIGxlZnQgKi86XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICB4OiB0aGlzLnBvc2l0aW9uLngsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5nZXRNaWRkbGUodGFua1Nwcml0ZSwgYnVsbGV0U3ByaXRlLCB0aGlzLmRpcmVjdGlvbilcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGJ1bGxldFNwZWVkO1xyXG4gICAgICAgIGlmICh0aGlzLnRhbmtMZXZlbCA9PSAwKSB7XHJcbiAgICAgICAgICAgIGJ1bGxldFNwZWVkID0gQlVMTEVUX1NMT1c7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMudGFua0xldmVsIDwgNCkge1xyXG4gICAgICAgICAgICBidWxsZXRTcGVlZCA9IEJVTExFVF9GQVNUO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYnVsbGV0ID0gbmV3IEJ1bGxldE9iamVjdCh0aGlzLl9nYW1lLCB0aGlzLCBwb3NpdGlvbiwgdGhpcy5kaXJlY3Rpb24sIGJ1bGxldFNwZWVkLCBHdWlkLm5ld0d1aWQoKSk7XHJcbiAgICAgICAgdGhpcy5fZ2FtZS5pbnNlcnRPYmplY3QoYnVsbGV0KTtcclxuICAgICAgICB0aGlzLl9idWxsZXRzLnB1c2goYnVsbGV0LmlkKTtcclxuICAgIH07XHJcbiAgICBUYW5rT2JqZWN0LnByb3RvdHlwZS5yZW1vdmVCdWxsZXQgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICB2YXIgZm91bmQgPSB0aGlzLl9idWxsZXRzLmZpbmQoZnVuY3Rpb24gKGJ1bGxldCkgeyByZXR1cm4gYnVsbGV0ID09PSBpZDsgfSk7XHJcbiAgICAgICAgdmFyIGlkeCA9IHRoaXMuX2J1bGxldHMuaW5kZXhPZihmb3VuZCk7XHJcbiAgICAgICAgaWYgKGlkeCA+IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2J1bGxldHMuc3BsaWNlKGlkeCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8vI2VuZHJlZ2lvblxyXG4gICAgVGFua09iamVjdC5wcm90b3R5cGUuZ2V0TWlkZGxlID0gZnVuY3Rpb24gKHBhcmVudCwgY2hpbGQsIGRpcmVjdGlvbikge1xyXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwidXBcIiAvKiB1cCAqLyB8fCBkaXJlY3Rpb24gPT09IFwiZG93blwiIC8qIGRvd24gKi8pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcmVudC5zaXplLndpZHRoIC8gMiAtIGNoaWxkLnNpemUud2lkdGggLyAyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcmVudC5zaXplLmhlaWdodCAvIDIgLSBjaGlsZC5zaXplLmhlaWdodCAvIDI7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBUYW5rT2JqZWN0O1xyXG59KE1vdmluZ09iamVjdCkpO1xyXG5leHBvcnQgZGVmYXVsdCBUYW5rT2JqZWN0O1xyXG4iLCJpbXBvcnQgU1BSVElFX0RFRiBmcm9tIFwiLi9TcHJpdGUvU3ByaXRlRGVmaW5pdGlvblwiO1xyXG5pbXBvcnQgeyBnZXRTcHJpdGVEYXRhLCBnZXRTeXN0ZW1TcHJpdGUsIGdldE9iamVjdFNpemUsIGdldEFuaW1hdGlvblNpemUgfSBmcm9tIFwiLi9TcHJpdGUvU3ByaXRlRGF0YVwiO1xyXG5pbXBvcnQgeyBnZXRSYW5kb21SYW5nZSB9IGZyb20gXCIuLi9VdGlscy9VdGlsc1wiO1xyXG5pbXBvcnQgVGFua0FJT0JqZWN0IGZyb20gXCIuLi9HYW1lL09iamVjdC9UYW5rQUlPYmplY3RcIjtcclxuZXhwb3J0IHZhciBNQVhfRlBTID0gNjA7XHJcbmV4cG9ydCB2YXIgTUVOVV9NQVhfRlBTID0gMzA7XHJcbmV4cG9ydCB2YXIgRFJBV0lOR19DT05TVCA9IHtcclxuICAgIGNvbG9yczoge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IFwiIzAwMDAwMFwiLFxyXG4gICAgICAgIGJhY2tncm91bmRfZnJhbWU6IFwiIzYzNjM2MlwiLFxyXG4gICAgfSxcclxuICAgIHNpemVzOiB7XHJcbiAgICAgICAgZnJhbWU6IHtcclxuICAgICAgICAgICAgbGVmdDogMzIsXHJcbiAgICAgICAgICAgIHRvcDogMzIsXHJcbiAgICAgICAgICAgIGJvdHRvbTogMzIsXHJcbiAgICAgICAgICAgIHJpZ2h0OiBTUFJUSUVfREVGLlNZU1RFTS5GUkFNRS5zaXplLndpZHRoXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzY3JlZW46IHtcclxuICAgICAgICAgICAgd2lkdGg6IDMyICogMTMsXHJcbiAgICAgICAgICAgIGhlaWdodDogMzIgKiAxM1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBwb3NpdGlvbnM6IHtcclxuICAgICAgICBtYWluOiB7XHJcbiAgICAgICAgICAgIGN1cnNvcl9zdGFydDogMjY1XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRlYnVnOiB7XHJcbiAgICAgICAgZm9udDoge1xyXG4gICAgICAgICAgICBzaXplOiAxMixcclxuICAgICAgICAgICAgZm9udDogJ3Nhbi1zZXJpZidcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcbnZhciBSZW5kZXJlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFJlbmRlcmVyKGdhbWUsIGNhbnZhcywgc3ByaXRlX21haW5fc3JjLCBzcHJpdGVfdGl0bGVfc3JjKSB7XHJcbiAgICAgICAgdGhpcy5fZnBzID0ge1xyXG4gICAgICAgICAgICBmcHNJbnRlcnZhbDogMTAwMCAvIE1BWF9GUFMsXHJcbiAgICAgICAgICAgIG5vdzogcGVyZm9ybWFuY2Uubm93KCksXHJcbiAgICAgICAgICAgIHRoZW46IHBlcmZvcm1hbmNlLm5vdygpLFxyXG4gICAgICAgICAgICBlbGFwc2VkOiAwXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoY2FudmFzID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyAnY2FudmFzIGlzIG51bGwgb3IgdW5kZWZpbmVkJztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fY2FudmFzID0gY2FudmFzO1xyXG4gICAgICAgIGlmIChnYW1lID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyAnZ2FtZSBpcyBudWxsIG9yIHVuZGVmaW5lZCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2dhbWUgPSBnYW1lO1xyXG4gICAgICAgIHRoaXMuaW5pdFNjcmVlbigpO1xyXG4gICAgICAgIHRoaXMubG9hZFNwcml0ZShzcHJpdGVfbWFpbl9zcmMsIHNwcml0ZV90aXRsZV9zcmMpO1xyXG4gICAgfVxyXG4gICAgUmVuZGVyZXIucHJvdG90eXBlLmxvYWRTcHJpdGUgPSBmdW5jdGlvbiAobWFpblNyYywgdGl0bGVTcmMpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX21haW5TcHJpdGUgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICB0aGlzLl90aXRsZVNwcml0ZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRoaXMuX21haW5TcHJpdGUub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBfdGhpcy5fdGl0bGVTcHJpdGUuc3JjID0gdGl0bGVTcmM7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl90aXRsZVNwcml0ZS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIF90aGlzLnJlbmRlcigpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5fbWFpblNwcml0ZS5zcmMgPSBtYWluU3JjO1xyXG4gICAgfTtcclxuICAgIFJlbmRlcmVyLnByb3RvdHlwZS5pbml0U2NyZWVuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBzaXplcyA9IERSQVdJTkdfQ09OU1Quc2l6ZXM7XHJcbiAgICAgICAgdGhpcy5fY2FudmFzLndpZHRoID0gc2l6ZXMuZnJhbWUubGVmdCArIHNpemVzLmZyYW1lLnJpZ2h0ICsgc2l6ZXMuc2NyZWVuLndpZHRoO1xyXG4gICAgICAgIHRoaXMuX2NhbnZhcy5oZWlnaHQgPSBzaXplcy5mcmFtZS50b3AgKyBzaXplcy5mcmFtZS5ib3R0b20gKyBzaXplcy5zY3JlZW4uaGVpZ2h0O1xyXG4gICAgfTtcclxuICAgIFJlbmRlcmVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkgeyBfdGhpcy5yZW5kZXIoKTsgfSk7XHJcbiAgICAgICAgdmFyIGZwcyA9IHRoaXMuX2ZwcztcclxuICAgICAgICBmcHMubm93ID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgZnBzLmVsYXBzZWQgPSBmcHMubm93IC0gZnBzLnRoZW47XHJcbiAgICAgICAgaWYgKGZwcy5lbGFwc2VkID4gZnBzLmZwc0ludGVydmFsKSB7XHJcbiAgICAgICAgICAgIGZwcy50aGVuID0gZnBzLm5vdyAtIChmcHMuZWxhcHNlZCAlIGZwcy5mcHNJbnRlcnZhbCk7XHJcbiAgICAgICAgICAgIC8vIHN0YXJ0IGRyYXdpbmdcclxuICAgICAgICAgICAgLy8gZ2V0IGNvbnRleHRcclxuICAgICAgICAgICAgdmFyIGN0eCA9IHRoaXMuX2NhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgICAgICAvLyBjbGVhciBzY3JlZW5cclxuICAgICAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjdHguY2FudmFzLndpZHRoLCBjdHguY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgICAgIC8vIGRyYXcgYmFja2dyb3VuZHNcclxuICAgICAgICAgICAgdGhpcy5kcmF3QmFja2dyb3VuZChjdHgpO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX2dhbWUuY3VycmVudE1lbnUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJNQUlOXCIgLyogTUFJTiAqLzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlck1haW4oY3R4KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJHQU1FXCIgLyogR0FNRSAqLzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckdhbWUoY3R4KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJDT05TVFJVQ1RcIiAvKiBDT05TVFJVQ1QgKi86XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gZHJhdyBkZWJ1ZyBjb3VudGVyXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9nYW1lLmRlYnVnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdEZWJ1Z0NvdW50ZXIoY3R4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIHJlbmRlciBtYWluIHNjcmVlblxyXG4gICAgICogQHBhcmFtIGN0eCBjb250ZXh0XHJcbiAgICAgKi9cclxuICAgIFJlbmRlcmVyLnByb3RvdHlwZS5yZW5kZXJNYWluID0gZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgICAgIHRoaXMucHJvY2Vzc01haW4oKTtcclxuICAgICAgICB0aGlzLmRyYXdPYmplY3RzKGN0eCwgdGhpcy5fZ2FtZS5vYmplY3RzKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIHByb2Nlc3MgbWFpbiBzY3JlZW4gYWN0aW9uc1xyXG4gICAgICovXHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUucHJvY2Vzc01haW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgb2JqZWN0cyA9IHRoaXMuX2dhbWUub2JqZWN0cztcclxuICAgICAgICBpZiAob2JqZWN0cyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgb2JqZWN0cy5mb3JFYWNoKGZ1bmN0aW9uIChvYmplY3QpIHtcclxuICAgICAgICAgICAgICAgIHZhciBwb3NpdGlvbiA9IG9iamVjdC5wb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAob2JqZWN0Lm9iamVjdFR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQU5JTUFUSU9OXCIgLyogQU5JTUFUSU9OICovOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYW5pbWF0aW9uID0gb2JqZWN0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYW5pbWF0aW9uUG9pbnQgPSBhbmltYXRpb24uYW5pbWF0aW9uUG9pbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhbmltYXRpb25TaXplID0gZ2V0QW5pbWF0aW9uU2l6ZShhbmltYXRpb24uYW5pbWF0aW9uVHlwZSwgYW5pbWF0aW9uLnNwcml0ZVBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChhbmltYXRpb24uYW5pbWF0aW9uVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIlRJVExFXCIgLyogVElUTEUgKi86XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uLnkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLnkgPSBwb3NpdGlvbi55IC0gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uUG9pbnQueSA9IHBvc2l0aW9uLnkgKyBhbmltYXRpb25TaXplLmhlaWdodCAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKF90aGlzLnRpdGxlU2hvd24gPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLnkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25Qb2ludC55ID0gcG9zaXRpb24ueSArIGFuaW1hdGlvblNpemUuaGVpZ2h0IC8gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLmV4cGlyZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnRpdGxlU2hvd24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJDVVJTT1JcIiAvKiBDVVJTT1IgKi86XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnNvckluZGV4ID0gX3RoaXMuX2dhbWUuY3Vyc29ySW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnNvclN0YXJ0ID0gRFJBV0lOR19DT05TVC5wb3NpdGlvbnMubWFpbi5jdXJzb3Jfc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uUG9pbnQueSA9IGN1cnNvclN0YXJ0ICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29ySW5kZXggKiBhbmltYXRpb25TaXplLmhlaWdodCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvblNpemUuaGVpZ2h0IC8gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24ubmV4dFNwcml0ZVBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiByZW5kZXIgZ2FtZSBzY3JlZW5cclxuICAgICAqIEBwYXJhbSBjdHggY29udGV4dFxyXG4gICAgICovXHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUucmVuZGVyR2FtZSA9IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICAvLyBwcm9jZXNzIGFjdGlvbnNcclxuICAgICAgICB0aGlzLnByb2Nlc3NHYW1lKCk7XHJcbiAgICAgICAgLy8gZHJhdyBmcmFtZVxyXG4gICAgICAgIHRoaXMuZHJhd0ZyYW1lKGN0eCk7XHJcbiAgICAgICAgLy8gZHJhdyBvYmplY3RzXHJcbiAgICAgICAgdGhpcy5kcmF3T2JqZWN0cyhjdHgsIHRoaXMuX2dhbWUub2JqZWN0cyk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBwcm9jZXNzIGFsbCBnYW1lIGFjdGlvbnNcclxuICAgICAqL1xyXG4gICAgUmVuZGVyZXIucHJvdG90eXBlLnByb2Nlc3NHYW1lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHRoaXMuX2dhbWUucGF1c2UgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBtYWluVGFuayA9IHRoaXMuX2dhbWUubWFpblRhbms7XHJcbiAgICAgICAgaWYgKG1haW5UYW5rICE9IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKG1haW5UYW5rLnZpc2libGUgPT09IHRydWUgJiYgdGhpcy5jaGVja0tleVN0YXRlU3luYygpKSB7XHJcbiAgICAgICAgICAgICAgICBtYWluVGFuay5tb3ZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG9iamVjdHMgPSB0aGlzLl9nYW1lLm9iamVjdHM7XHJcbiAgICAgICAgaWYgKG9iamVjdHMgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIG9iamVjdHMuZm9yRWFjaChmdW5jdGlvbiAob2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG9iamVjdC5vYmplY3RUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkJVTExFVFwiIC8qIEJVTExFVCAqLzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Lm1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkFOSU1BVElPTlwiIC8qIEFOSU1BVElPTiAqLzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFuaW1hdGlvbiA9IG9iamVjdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFuaW1hdGlvbi5leHBpcmVUaW1lIDwgX3RoaXMuX2Zwcy5ub3cpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5leHBpcmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYW5pbWF0aW9uUG9pbnQgPSBhbmltYXRpb24uYW5pbWF0aW9uUG9pbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhbmltYXRpb25TaXplID0gZ2V0QW5pbWF0aW9uU2l6ZShhbmltYXRpb24uYW5pbWF0aW9uVHlwZSwgYW5pbWF0aW9uLnNwcml0ZVBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChhbmltYXRpb24uYW5pbWF0aW9uVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIklOVklOQ0lCTEVcIiAvKiBJTlZJTkNJQkxFICovOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0YW5rU2l6ZSA9IGdldE9iamVjdFNpemUoXCJUQU5LXCIgLyogVEFOSyAqLyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uUG9pbnQueCA9IG1haW5UYW5rLnBvc2l0aW9uLnggKyB0YW5rU2l6ZS53aWR0aCAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uUG9pbnQueSA9IG1haW5UYW5rLnBvc2l0aW9uLnkgKyB0YW5rU2l6ZS5oZWlnaHQgLyAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkdBTUVPVkVSXCIgLyogR0FNRU9WRVIgKi86XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFuaW1hdGlvblBvaW50LnkgPj0gX3RoaXMuX2NhbnZhcy5jbGllbnRIZWlnaHQgLyAyICsgYW5pbWF0aW9uU2l6ZS5oZWlnaHQgLyAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvblBvaW50LnkgPSBhbmltYXRpb25Qb2ludC55IC0gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLm5leHRTcHJpdGVQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiVEFOS1wiIC8qIFRBTksgKi86XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0YW5rID0gb2JqZWN0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFuayBpbnN0YW5jZW9mIFRhbmtBSU9CamVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVuZW15ID0gdGFuaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkZWZpbml0aW9uID0gZW5lbXkuZ2V0Q29sb3JEZWZpbml0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuX2Zwcy5ub3cgLSBlbmVteS5sYXN0Q2hhbmdlZCA+IGRlZmluaXRpb24uZGVsYXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmVteS5uZXh0Q29sb3JJbmRleCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZW15Lmxhc3RDaGFuZ2VkID0gX3RoaXMuX2Zwcy5ub3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9nYW1lLnNwYXduVGFuayhcIkVORU1ZX1RBTktcIiAvKiBFTkVNWV9UQU5LICovKTtcclxuICAgIH07XHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUuY2hlY2tLZXlTdGF0ZVN5bmMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG1haW5UYW5rID0gdGhpcy5fZ2FtZS5tYWluVGFuaztcclxuICAgICAgICB2YXIga2V5U3RhdGUgPSB0aGlzLl9nYW1lLmtleVN0YXRlO1xyXG4gICAgICAgIGlmICgoa2V5U3RhdGUuQXJyb3dVcCA9PT0gdHJ1ZSAmJiBtYWluVGFuay5kaXJlY3Rpb24gPT0gXCJ1cFwiIC8qIHVwICovKSB8fFxyXG4gICAgICAgICAgICAoa2V5U3RhdGUuQXJyb3dSaWdodCA9PT0gdHJ1ZSAmJiBtYWluVGFuay5kaXJlY3Rpb24gPT0gXCJyaWdodFwiIC8qIHJpZ2h0ICovKSB8fFxyXG4gICAgICAgICAgICAoa2V5U3RhdGUuQXJyb3dEb3duID09PSB0cnVlICYmIG1haW5UYW5rLmRpcmVjdGlvbiA9PSBcImRvd25cIiAvKiBkb3duICovKSB8fFxyXG4gICAgICAgICAgICAoa2V5U3RhdGUuQXJyb3dMZWZ0ID09PSB0cnVlICYmIG1haW5UYW5rLmRpcmVjdGlvbiA9PSBcImxlZnRcIiAvKiBsZWZ0ICovKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLy8jcmVnaW9uIGRyYXdpbmcgbWV0aG9kc1xyXG4gICAgUmVuZGVyZXIucHJvdG90eXBlLmRyYXdCYWNrZ3JvdW5kID0gZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IERSQVdJTkdfQ09OU1QuY29sb3JzLmJhY2tncm91bmQ7XHJcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIGN0eC5jYW52YXMuY2xpZW50V2lkdGgsIGN0eC5jYW52YXMuY2xpZW50SGVpZ2h0KTtcclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfTtcclxuICAgIFJlbmRlcmVyLnByb3RvdHlwZS5kcmF3RnJhbWUgPSBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgICAgdmFyIEZSQU1FID0gRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZTtcclxuICAgICAgICB2YXIgU1BSSVRFX0ZSQU1FID0gZ2V0U3lzdGVtU3ByaXRlKFwiRlJBTUVcIiAvKiBGUkFNRSAqLyk7XHJcbiAgICAgICAgdmFyIFNQUklURV9UQU5LX0lDT04gPSBnZXRTeXN0ZW1TcHJpdGUoXCJUQU5LX0lDT05cIiAvKiBUQU5LX0lDT04gKi8pO1xyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IERSQVdJTkdfQ09OU1QuY29sb3JzLmJhY2tncm91bmRfZnJhbWU7XHJcbiAgICAgICAgLy8gdG9wXHJcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIGN0eC5jYW52YXMuY2xpZW50V2lkdGgsIEZSQU1FLnRvcCk7XHJcbiAgICAgICAgLy8gbGVmdFxyXG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBGUkFNRS5sZWZ0LCBjdHguY2FudmFzLmNsaWVudEhlaWdodCk7XHJcbiAgICAgICAgLy8gYm90dG9tXHJcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIGN0eC5jYW52YXMuY2xpZW50SGVpZ2h0IC0gRlJBTUUuYm90dG9tLCBjdHguY2FudmFzLmNsaWVudFdpZHRoLCBGUkFNRS5ib3R0b20pO1xyXG4gICAgICAgIC8vIHJpZ2h0XHJcbiAgICAgICAgY3R4LmZpbGxSZWN0KGN0eC5jYW52YXMuY2xpZW50V2lkdGggLSBGUkFNRS5yaWdodCwgMCwgRlJBTUUucmlnaHQsIGN0eC5jYW52YXMuY2xpZW50SGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmRyYXdTcHJpdGUoY3R4LCBTUFJJVEVfRlJBTUUsIHsgeDogY3R4LmNhbnZhcy5jbGllbnRXaWR0aCAtIEZSQU1FLnJpZ2h0LCB5OiAwIH0pO1xyXG4gICAgICAgIC8vIGVuZW15IHRhbmsgbGVmdFxyXG4gICAgICAgIHZhciBncm91cHMgPSB0aGlzLl9nYW1lLmdhbWVEYXRhLmxldmVsRGF0YS50YW5rcztcclxuICAgICAgICB2YXIgdGFua0NvdW50ID0gMDtcclxuICAgICAgICBncm91cHMuZm9yRWFjaChmdW5jdGlvbiAoZ3JvdXApIHtcclxuICAgICAgICAgICAgdGFua0NvdW50ICs9IGdyb3VwLkRFRkFVTFQgKyBncm91cC5TUEVFRCArIGdyb3VwLlBPV0VSICsgZ3JvdXAuQVJNT1VSRUQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgMjsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGFua0NvdW50ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd1Nwcml0ZShjdHgsIFNQUklURV9UQU5LX0lDT04sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDogY3R4LmNhbnZhcy5jbGllbnRXaWR0aCAtIEZSQU1FLnJpZ2h0ICsgMTYgKiAoaiArIDEpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiA0OCArIDE2ICogaVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxSZWN0KGN0eC5jYW52YXMuY2xpZW50V2lkdGggLSBGUkFNRS5yaWdodCArIDE2ICogKGogKyAxKSwgNDggKyAxNiAqIGksIDE2LCAxNik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0YW5rQ291bnQtLTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBQMSBsaWZlXHJcbiAgICAgICAgdGhpcy5kcmF3U3ByaXRlKGN0eCwgZ2V0U3lzdGVtU3ByaXRlKFwiTlVNQkVSXCIgLyogTlVNQkVSICovLCB0aGlzLl9nYW1lLmdhbWVEYXRhLnBsYXllckRhdGFbMF0ubGlmZSksIHsgeDogY3R4LmNhbnZhcy5jbGllbnRXaWR0aCAtIEZSQU1FLnJpZ2h0ICsgMzIsIHk6IDI4OCB9KTtcclxuICAgICAgICAvLyBQMiBsaWZlXHJcbiAgICAgICAgaWYgKHRoaXMuX2dhbWUuZ2FtZURhdGEucGxheWVyRGF0YS5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd1Nwcml0ZShjdHgsIGdldFN5c3RlbVNwcml0ZShcIk5VTUJFUlwiIC8qIE5VTUJFUiAqLywgdGhpcy5fZ2FtZS5nYW1lRGF0YS5wbGF5ZXJEYXRhWzFdLmxpZmUpLCB7IHg6IGN0eC5jYW52YXMuY2xpZW50V2lkdGggLSBGUkFNRS5yaWdodCArIDMyLCB5OiAzMzYgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjdHguZmlsbFJlY3QoY3R4LmNhbnZhcy5jbGllbnRXaWR0aCAtIEZSQU1FLnJpZ2h0ICsgMTYsIDMyMCwgMzIsIDMyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGxldmVsSWQgPSB0aGlzLl9nYW1lLmdhbWVEYXRhLmxldmVsRGF0YS5sZXZlbElkO1xyXG4gICAgICAgIHZhciBsZXZlbFR5cGUgPSB0eXBlb2YgKGxldmVsSWQpO1xyXG4gICAgICAgIGlmIChsZXZlbFR5cGUgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgIGlmIChNYXRoLmZsb29yKGxldmVsSWQgLyAxMCkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGN0eC5maWxsUmVjdChjdHguY2FudmFzLmNsaWVudFdpZHRoIC0gRlJBTUUucmlnaHQgKyAxNiwgNDAwLCAxNiwgMTYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3U3ByaXRlKGN0eCwgZ2V0U3lzdGVtU3ByaXRlKFwiTlVNQkVSXCIgLyogTlVNQkVSICovLCBNYXRoLmZsb29yKGxldmVsSWQgLyAxMCkpLCB7IHg6IGN0eC5jYW52YXMuY2xpZW50V2lkdGggLSBGUkFNRS5yaWdodCArIDE2LCB5OiA0MDAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5kcmF3U3ByaXRlKGN0eCwgZ2V0U3lzdGVtU3ByaXRlKFwiTlVNQkVSXCIgLyogTlVNQkVSICovLCBsZXZlbElkICUgMTApLCB7IHg6IGN0eC5jYW52YXMuY2xpZW50V2lkdGggLSBGUkFNRS5yaWdodCArIDMyLCB5OiA0MDAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGxldmVsVHlwZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IERSQVdJTkdfQ09OU1QuY29sb3JzLmJhY2tncm91bmRfZnJhbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9O1xyXG4gICAgUmVuZGVyZXIucHJvdG90eXBlLmRyYXdPYmplY3RzID0gZnVuY3Rpb24gKGN0eCwgb2JqZWN0cykge1xyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYmplY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBvYmplY3QgPSBvYmplY3RzW2ldO1xyXG4gICAgICAgICAgICB2YXIgc3ByaXRlID0gZ2V0U3ByaXRlRGF0YShvYmplY3QpO1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdPYmplY3QoY3R4LCBvYmplY3QsIHNwcml0ZSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9nYW1lLmRlYnVnKSB7XHJcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnI0ZGMDAwMCc7XHJcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlUmVjdChvYmplY3QucG9zaXRpb24ueCArIDEsIG9iamVjdC5wb3NpdGlvbi55ICsgMSwgc3ByaXRlLnNpemUud2lkdGggLSAyLCBzcHJpdGUuc2l6ZS5oZWlnaHQgLSAyKTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuZHJhd1RleHQoY3R4LCBgJHtvYmplY3QuaWR9YCwge1xyXG4gICAgICAgICAgICAgICAgLy8gXHR4OiBEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lLmxlZnQgKyBvYmplY3QucG9zaXRpb24ueCxcclxuICAgICAgICAgICAgICAgIC8vIFx0eTogRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS50b3AgKyBvYmplY3QucG9zaXRpb24ueSAtIDEsXHJcbiAgICAgICAgICAgICAgICAvLyB9LCBzcHJpdGUuc2l6ZS53aWR0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgUmVuZGVyZXIucHJvdG90eXBlLmRyYXdPYmplY3QgPSBmdW5jdGlvbiAoY3R4LCBvYmplY3QsIHNwcml0ZSkge1xyXG4gICAgICAgIHZhciBzcHJpdGVfc3JjID0gdGhpcy5fbWFpblNwcml0ZTtcclxuICAgICAgICBpZiAob2JqZWN0LnZpc2libGUgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob2JqZWN0Lm9iamVjdFR5cGUgPT09IFwiQU5JTUFUSU9OXCIgLyogQU5JTUFUSU9OICovKSB7XHJcbiAgICAgICAgICAgIHZhciBhbmltYXRpb24gPSBvYmplY3Q7XHJcbiAgICAgICAgICAgIGlmIChhbmltYXRpb24uYW5pbWF0aW9uVHlwZSA9PT0gXCJUSVRMRVwiIC8qIFRJVExFICovKSB7XHJcbiAgICAgICAgICAgICAgICBzcHJpdGVfc3JjID0gdGhpcy5fdGl0bGVTcHJpdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNwcml0ZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChvYmplY3Qub2JqZWN0VHlwZSA9PT0gXCJCTE9DS1wiIC8qIEJMT0NLICovKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYmxvY2sgPSBvYmplY3Q7XHJcbiAgICAgICAgICAgICAgICB2YXIgYmxvY2tTdGF0ZSA9IGJsb2NrLmJsb2NrU3RhdGU0eDQ7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2VsbFNpemUgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHNwcml0ZS5zaXplLndpZHRoIC8gNCxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHNwcml0ZS5zaXplLndpZHRoIC8gNFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmxvY2tTdGF0ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgYmxvY2tTdGF0ZVtpXS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmxvY2tTdGF0ZVtpXVtqXSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShzcHJpdGVfc3JjLCBzcHJpdGUucG9zaXRpb24ueCArIGNlbGxTaXplLndpZHRoICogaiwgc3ByaXRlLnBvc2l0aW9uLnkgKyBjZWxsU2l6ZS5oZWlnaHQgKiBpLCBjZWxsU2l6ZS53aWR0aCwgY2VsbFNpemUuaGVpZ2h0LCBvYmplY3QucG9zaXRpb24ueCArIGNlbGxTaXplLndpZHRoICogaiwgb2JqZWN0LnBvc2l0aW9uLnkgKyBjZWxsU2l6ZS5oZWlnaHQgKiBpLCBjZWxsU2l6ZS53aWR0aCwgY2VsbFNpemUuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2Uoc3ByaXRlX3NyYywgc3ByaXRlLnBvc2l0aW9uLngsIHNwcml0ZS5wb3NpdGlvbi55LCBzcHJpdGUuc2l6ZS53aWR0aCwgc3ByaXRlLnNpemUuaGVpZ2h0LCBvYmplY3QucG9zaXRpb24ueCwgb2JqZWN0LnBvc2l0aW9uLnksIHNwcml0ZS5zaXplLndpZHRoLCBzcHJpdGUuc2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFJlbmRlcmVyLnByb3RvdHlwZS5kcmF3RGVidWdDb3VudGVyID0gZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgICAgIHZhciB0YW5rID0gdGhpcy5fZ2FtZS5tYWluVGFuaztcclxuICAgICAgICBpZiAodGFuayAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd1RleHQoY3R4LCBcIk1BSU4gVEFOSzogVEFOS19cIiArIHRhbmsudGFua0NvbG9yICsgXCJfXCIgKyB0YW5rLnRhbmtMZXZlbCArIFwiKFwiICsgdGFuay5wb3NpdGlvbi54ICsgXCIsIFwiICsgdGFuay5wb3NpdGlvbi55ICsgXCIsIFwiICsgdGFuay5kaXJlY3Rpb24udG9TdHJpbmcoKSArIFwiKVwiLCB7IHg6IDAsIHk6IDE1IH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kcmF3VGV4dChjdHgsIFwiTUFJTiBUQU5LOiBOT1QgRk9VTkRcIiwgeyB4OiAwLCB5OiAxNSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGZwcyA9ICgxMDAwIC8gdGhpcy5fZnBzLmVsYXBzZWQpLnRvRml4ZWQoMikgKyBcImZwcyBcIjtcclxuICAgICAgICB0aGlzLmRyYXdUZXh0KGN0eCwgZnBzLCB7IHg6IGN0eC5jYW52YXMud2lkdGggLSAoY3R4Lm1lYXN1cmVUZXh0KGZwcykud2lkdGggKiAxLjM1KSwgeTogMTUgfSk7XHJcbiAgICAgICAgdmFyIGtleVN0YXRlID0gdGhpcy5fZ2FtZS5rZXlTdGF0ZTtcclxuICAgICAgICB0aGlzLmRyYXdUZXh0KGN0eCwgXCJTcGFjZTogXCIgKyAoa2V5U3RhdGUuU3BhY2UgPyAnVCcgOiAnRicpLCB7IHg6IDAsIHk6IGN0eC5jYW52YXMuaGVpZ2h0IH0pO1xyXG4gICAgICAgIHRoaXMuZHJhd1RleHQoY3R4LCBcIkFycm93TGVmdDogXCIgKyAoa2V5U3RhdGUuQXJyb3dMZWZ0ID8gJ1QnIDogJ0YnKSwgeyB4OiAwLCB5OiBjdHguY2FudmFzLmhlaWdodCAtIDE1IH0pO1xyXG4gICAgICAgIHRoaXMuZHJhd1RleHQoY3R4LCBcIkFycm93RG93bjogXCIgKyAoa2V5U3RhdGUuQXJyb3dEb3duID8gJ1QnIDogJ0YnKSwgeyB4OiAwLCB5OiBjdHguY2FudmFzLmhlaWdodCAtIDMwIH0pO1xyXG4gICAgICAgIHRoaXMuZHJhd1RleHQoY3R4LCBcIkFycm93UmlnaHQ6IFwiICsgKGtleVN0YXRlLkFycm93UmlnaHQgPyAnVCcgOiAnRicpLCB7IHg6IDAsIHk6IGN0eC5jYW52YXMuaGVpZ2h0IC0gNDUgfSk7XHJcbiAgICAgICAgdGhpcy5kcmF3VGV4dChjdHgsIFwiQXJyb3dVcDogXCIgKyAoa2V5U3RhdGUuQXJyb3dVcCA/ICdUJyA6ICdGJyksIHsgeDogMCwgeTogY3R4LmNhbnZhcy5oZWlnaHQgLSA2MCB9KTtcclxuICAgICAgICB0aGlzLmRyYXdUZXh0KGN0eCwgXCJbSUtleVN0YXRlXVwiLCB7IHg6IDAsIHk6IGN0eC5jYW52YXMuaGVpZ2h0IC0gNzUgfSk7XHJcbiAgICB9O1xyXG4gICAgUmVuZGVyZXIucHJvdG90eXBlLmRyYXdUZXh0ID0gZnVuY3Rpb24gKGN0eCwgdGV4dCwgcG9zaXRpb24sIG1heFdpZHRoKSB7XHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICBjdHguZm9udCA9IERSQVdJTkdfQ09OU1QuZGVidWcuZm9udC5zaXplICsgXCJweCBcIiArIERSQVdJTkdfQ09OU1QuZGVidWcuZm9udC5mb250O1xyXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICd3aGl0ZSc7XHJcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDI7XHJcbiAgICAgICAgY3R4LnN0cm9rZVRleHQodGV4dCwgcG9zaXRpb24ueCwgcG9zaXRpb24ueSwgbWF4V2lkdGgpO1xyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAnYmxhY2snO1xyXG4gICAgICAgIGN0eC5maWxsVGV4dCh0ZXh0LCBwb3NpdGlvbi54LCBwb3NpdGlvbi55LCBtYXhXaWR0aCk7XHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH07XHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUuZHJhd1Nwcml0ZSA9IGZ1bmN0aW9uIChjdHgsIHNwcml0ZSwgcG9zaXRpb24sIHNpemUpIHtcclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5fbWFpblNwcml0ZSwgc3ByaXRlLnBvc2l0aW9uLngsIHNwcml0ZS5wb3NpdGlvbi55LCBzcHJpdGUuc2l6ZS53aWR0aCwgc3ByaXRlLnNpemUuaGVpZ2h0LCBwb3NpdGlvbi54LCBwb3NpdGlvbi55LCBzaXplICE9IHVuZGVmaW5lZCA/IHNpemUud2lkdGggOiBzcHJpdGUuc2l6ZS53aWR0aCwgc2l6ZSAhPSB1bmRlZmluZWQgPyBzaXplLmhlaWdodCA6IHNwcml0ZS5zaXplLmhlaWdodCk7XHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH07XHJcbiAgICAvLyNlbmRyZWdpb25cclxuICAgIC8vI3JlZ2lvbiBwdWJsaWMgbWV0aG9kc1xyXG4gICAgLyoqXHJcbiAgICAgKiBUZXN0IG9iamVjdCBpcyB2aXNpYmxlXHJcbiAgICAgKiBAcGFyYW0gb2JqZWN0IG9iamVjdCBmb3IgdGVzdFxyXG4gICAgICogQHBhcmFtIHNwcml0ZSBvYmplY3QncyBzcHJpdGUgZGF0YSBmb3Igc2l6ZVxyXG4gICAgICovXHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUub2JqZWN0VmlzaWJsZVRlc3QgPSBmdW5jdGlvbiAob2JqZWN0KSB7XHJcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gb2JqZWN0LnBvc2l0aW9uO1xyXG4gICAgICAgIHZhciBzaXplID0gZ2V0U3ByaXRlRGF0YShvYmplY3QpLnNpemU7XHJcbiAgICAgICAgdmFyIGN0eCA9IHRoaXMuX2NhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIGlmIChwb3NpdGlvbi54ID49IERSQVdJTkdfQ09OU1Quc2l6ZXMuZnJhbWUubGVmdCAmJlxyXG4gICAgICAgICAgICBwb3NpdGlvbi54ICsgc2l6ZS53aWR0aCA8PSBjdHguY2FudmFzLmNsaWVudFdpZHRoIC0gRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS5yaWdodCAmJlxyXG4gICAgICAgICAgICBwb3NpdGlvbi55ID49IERSQVdJTkdfQ09OU1Quc2l6ZXMuZnJhbWUudG9wICYmXHJcbiAgICAgICAgICAgIHBvc2l0aW9uLnkgKyBzaXplLmhlaWdodCA8PSBjdHguY2FudmFzLmNsaWVudEhlaWdodCAtIERSQVdJTkdfQ09OU1Quc2l6ZXMuZnJhbWUuYm90dG9tKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUucmFuZG9tUG9pbnQgPSBmdW5jdGlvbiAoc2l6ZSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHg6IGdldFJhbmRvbVJhbmdlKERSQVdJTkdfQ09OU1Quc2l6ZXMuZnJhbWUubGVmdCwgdGhpcy5fY2FudmFzLndpZHRoIC0gRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS5yaWdodCAtIHNpemUud2lkdGgpLFxyXG4gICAgICAgICAgICB5OiBnZXRSYW5kb21SYW5nZShEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lLnRvcCwgdGhpcy5fY2FudmFzLmhlaWdodCAtIERSQVdJTkdfQ09OU1Quc2l6ZXMuZnJhbWUuYm90dG9tIC0gc2l6ZS5oZWlnaHQpLFxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxjdWxhdGUgYW5kIHJldHVybiBaLUluZGV4IGZvciByZW5kZXJcclxuICAgICAqIDA6IFdhdGVyIEJsb2NrXHJcbiAgICAgKiAxOiBUYW5rcywgQnJlYWthYmxlIEJsb2Nrc1xyXG4gICAgICogMjogSW52aW5jaWJsZSBBbmltYXRpb24sIEJ1bGxldHNcclxuICAgICAqIDM6IEJ1c2hcclxuICAgICAqIDQ6IEV4cGxvZGUgQW5pbWF0aW9ucywgU2NvcmUgQW5pbWF0aW9ucywgU3Bhd25pbmcgQW5pbWF0aW9uXHJcbiAgICAgKiA1OiBJdGVtc1xyXG4gICAgICogNjogU3lzdGVtIFNwcml0ZXMoR2FtZSBPdmVyLi4uIGV0YylcclxuICAgICAqIEBwYXJhbSBvYmplY3Qgb2JqZWN0IGZvciBjYWxjdWxhdGVcclxuICAgICAqL1xyXG4gICAgUmVuZGVyZXIuZ2V0T2JqZWN0WkluZGV4ID0gZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgICAgIHN3aXRjaCAob2JqZWN0Lm9iamVjdFR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIkJMT0NLXCIgLyogQkxPQ0sgKi86XHJcbiAgICAgICAgICAgICAgICB2YXIgYmxvY2sgPSBvYmplY3Q7XHJcbiAgICAgICAgICAgICAgICBpZiAoYmxvY2suYmxvY2tUeXBlID09PSBcIldBVEVSXCIgLyogV0FURVIgKi8pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGJsb2NrLmJsb2NrVHlwZSA9PT0gXCJCVVNIXCIgLyogQlVTSCAqLykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJUQU5LXCIgLyogVEFOSyAqLzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgICBjYXNlIFwiQU5JTUFUSU9OXCIgLyogQU5JTUFUSU9OICovOlxyXG4gICAgICAgICAgICAgICAgdmFyIGFuaW1hdGlvbiA9IG9iamVjdDtcclxuICAgICAgICAgICAgICAgIGlmIChhbmltYXRpb24uYW5pbWF0aW9uVHlwZSA9PT0gXCJJTlZJTkNJQkxFXCIgLyogSU5WSU5DSUJMRSAqLykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJCVUxMRVRcIiAvKiBCVUxMRVQgKi86XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMjtcclxuICAgICAgICAgICAgY2FzZSBcIklURU1cIiAvKiBJVEVNICovOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDU7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBSZW5kZXJlcjtcclxufSgpKTtcclxuZXhwb3J0IGRlZmF1bHQgUmVuZGVyZXI7XHJcbiIsImltcG9ydCBTUFJUSUVfREVGIGZyb20gXCIuL1Nwcml0ZURlZmluaXRpb25cIjtcclxuaW1wb3J0IFRhbmtBSU9CamVjdCBmcm9tIFwiLi4vLi4vR2FtZS9PYmplY3QvVGFua0FJT2JqZWN0XCI7XHJcbi8qKlxyXG4gKiBGaW5kIHNwcml0ZSBkYXRhIGZvciBnaXZlbiBvYmplY3RcclxuICogQHBhcmFtIG9iamVjdCBmb3VuZCBzcHJpdGUgZGVmaW5pdGlvblxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNwcml0ZURhdGEob2JqZWN0KSB7XHJcbiAgICBzd2l0Y2ggKG9iamVjdC5vYmplY3RUeXBlKSB7XHJcbiAgICAgICAgY2FzZSBcIlRBTktcIiAvKiBUQU5LICovOlxyXG4gICAgICAgICAgICB2YXIgdGFuayA9IG9iamVjdDtcclxuICAgICAgICAgICAgaWYgKHRhbmsgaW5zdGFuY2VvZiBUYW5rQUlPQmplY3QgJiYgdGFuay5jb2xvckluZGV4ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGVuZW15ID0gb2JqZWN0O1xyXG4gICAgICAgICAgICAgICAgdmFyIHNlcXVlbmNlID0gZW5lbXkuZ2V0Q29sb3JEZWZpbml0aW9uKCkuc2VxdWVuY2U7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gU1BSVElFX0RFRi5FTkVNWVtzZXF1ZW5jZVtlbmVteS5jb2xvckluZGV4XV1bZW5lbXkudGFua0xldmVsXVtlbmVteS5kaXJlY3Rpb25dW2VuZW15LnNwcml0ZVBvc2l0aW9uXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBTUFJUSUVfREVGLlRBTktbdGFuay50YW5rQ29sb3JdW3RhbmsudGFua0xldmVsXVt0YW5rLmRpcmVjdGlvbl1bdGFuay5zcHJpdGVQb3NpdGlvbl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIFwiQlVMTEVUXCIgLyogQlVMTEVUICovOlxyXG4gICAgICAgICAgICB2YXIgYnVsbGV0ID0gb2JqZWN0O1xyXG4gICAgICAgICAgICByZXR1cm4gU1BSVElFX0RFRi5CVUxMRVRbYnVsbGV0LmRpcmVjdGlvbl07XHJcbiAgICAgICAgY2FzZSBcIkFOSU1BVElPTlwiIC8qIEFOSU1BVElPTiAqLzpcclxuICAgICAgICAgICAgdmFyIGFuaW1hdGlvbiA9IG9iamVjdDtcclxuICAgICAgICAgICAgcmV0dXJuIFNQUlRJRV9ERUYuQU5JTUFUSU9OW2FuaW1hdGlvbi5hbmltYXRpb25UeXBlXVthbmltYXRpb24uc3ByaXRlUG9zaXRpb25dO1xyXG4gICAgICAgIGNhc2UgXCJCTE9DS1wiIC8qIEJMT0NLICovOlxyXG4gICAgICAgICAgICB2YXIgYmxvY2sgPSBvYmplY3Q7XHJcbiAgICAgICAgICAgIHJldHVybiBTUFJUSUVfREVGLkJMT0NLW2Jsb2NrLmJsb2NrVHlwZV1bYmxvY2suc3ByaXRlUG9zaXRpb25dO1xyXG4gICAgICAgIGNhc2UgXCJJVEVNXCIgLyogSVRFTSAqLzpcclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBvYmplY3Q7XHJcbiAgICAgICAgICAgIHJldHVybiBTUFJUSUVfREVGLklURU1baXRlbS5pdGVtVHlwZV07XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFN5c3RlbVNwcml0ZShzcHJpdGVUeXBlLCBudW1iZXIpIHtcclxuICAgIGlmIChudW1iZXIgPT09IHZvaWQgMCkgeyBudW1iZXIgPSAwOyB9XHJcbiAgICBzd2l0Y2ggKHNwcml0ZVR5cGUpIHtcclxuICAgICAgICBjYXNlIFwiTlVMTFwiIC8qIE5VTEwgKi86XHJcbiAgICAgICAgY2FzZSBcIlRBTktfSUNPTlwiIC8qIFRBTktfSUNPTiAqLzpcclxuICAgICAgICBjYXNlIFwiU1RBR0VcIiAvKiBTVEFHRSAqLzpcclxuICAgICAgICBjYXNlIFwiRlJBTUVcIiAvKiBGUkFNRSAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIFNQUlRJRV9ERUYuU1lTVEVNW3Nwcml0ZVR5cGVdO1xyXG4gICAgICAgIGNhc2UgXCJOVU1CRVJcIiAvKiBOVU1CRVIgKi86XHJcbiAgICAgICAgICAgIHJldHVybiBTUFJUSUVfREVGLlNZU1RFTS5OVU1CRVJbbnVtYmVyXTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3ByaXRlU2l6ZShvYmplY3QpIHtcclxuICAgIHJldHVybiBnZXRTcHJpdGVEYXRhKG9iamVjdCkuc2l6ZTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0T2JqZWN0U2l6ZSh0eXBlLCBkaXJlY3Rpb24pIHtcclxuICAgIGlmIChkaXJlY3Rpb24gPT0gbnVsbCkge1xyXG4gICAgICAgIGRpcmVjdGlvbiA9IFwidXBcIiAvKiB1cCAqLztcclxuICAgIH1cclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCJCTE9DS1wiIC8qIEJMT0NLICovOlxyXG4gICAgICAgICAgICByZXR1cm4gU1BSVElFX0RFRi5CTE9DSy5CUklDS1swXS5zaXplO1xyXG4gICAgICAgIGNhc2UgXCJUQU5LXCIgLyogVEFOSyAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIFNQUlRJRV9ERUYuVEFOSy5ZRUxMT1dbMF1bZGlyZWN0aW9uXVswXS5zaXplO1xyXG4gICAgICAgIGNhc2UgXCJCVUxMRVRcIiAvKiBCVUxMRVQgKi86XHJcbiAgICAgICAgICAgIHJldHVybiBTUFJUSUVfREVGLkJVTExFVFtkaXJlY3Rpb25dLnNpemU7XHJcbiAgICAgICAgY2FzZSBcIklURU1cIiAvKiBJVEVNICovOlxyXG4gICAgICAgICAgICByZXR1cm4gU1BSVElFX0RFRi5JVEVNLkJPTUIuc2l6ZTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QW5pbWF0aW9uU2l6ZSh0eXBlLCBmcmFtZSkge1xyXG4gICAgcmV0dXJuIFNQUlRJRV9ERUYuQU5JTUFUSU9OW3R5cGVdW2ZyYW1lXS5zaXplO1xyXG59XHJcbiIsIjtcclxudmFyIFNQUlRJRV9ERUYgPSB7XHJcbiAgICBUQU5LOiB7XHJcbiAgICAgICAgWUVMTE9XOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAwLCB5OiAwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyLCB5OiAwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA2NCwgeTogMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA5NiwgeTogMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTI4LCB5OiAwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE2MCwgeTogMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE5MiwgeTogMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyMjQsIHk6IDAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMCwgeTogMzIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIsIHk6IDMyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA2NCwgeTogMzIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogOTYsIHk6IDMyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxMjgsIHk6IDMyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE2MCwgeTogMzIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxOTIsIHk6IDMyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDIyNCwgeTogMzIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMCwgeTogNjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIsIHk6IDY0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA2NCwgeTogNjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogOTYsIHk6IDY0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxMjgsIHk6IDY0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE2MCwgeTogNjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxOTIsIHk6IDY0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDIyNCwgeTogNjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMCwgeTogOTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIsIHk6IDk2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA2NCwgeTogOTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogOTYsIHk6IDk2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxMjgsIHk6IDk2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE2MCwgeTogOTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxOTIsIHk6IDk2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDIyNCwgeTogOTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBHUkVFTjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMCwgeTogMjU2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyLCB5OiAyNTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDY0LCB5OiAyNTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogOTYsIHk6IDI1NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTI4LCB5OiAyNTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTYwLCB5OiAyNTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxOTIsIHk6IDI1NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyMjQsIHk6IDI1NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAwLCB5OiAyODggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIsIHk6IDI4OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNjQsIHk6IDI4OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA5NiwgeTogMjg4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxMjgsIHk6IDI4OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxNjAsIHk6IDI4OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE5MiwgeTogMjg4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDIyNCwgeTogMjg4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDAsIHk6IDMyMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMiwgeTogMzIwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA2NCwgeTogMzIwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDk2LCB5OiAzMjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDEyOCwgeTogMzIwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE2MCwgeTogMzIwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTkyLCB5OiAzMjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjI0LCB5OiAzMjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMCwgeTogMzUyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyLCB5OiAzNTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDY0LCB5OiAzNTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogOTYsIHk6IDM1MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTI4LCB5OiAzNTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTYwLCB5OiAzNTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxOTIsIHk6IDM1MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyMjQsIHk6IDM1MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFdISVRFOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyNTYsIHk6IDAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjg4LCB5OiAwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMjAsIHk6IDAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzUyLCB5OiAwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzODQsIHk6IDAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDE2LCB5OiAwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDQ4LCB5OiAwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ4MCwgeTogMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyNTYsIHk6IDMyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI4OCwgeTogMzIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyMCwgeTogMzIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzUyLCB5OiAzMiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzg0LCB5OiAzMiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0MTYsIHk6IDMyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDQ4LCB5OiAzMiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0ODAsIHk6IDMyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI1NiwgeTogNjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjg4LCB5OiA2NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIwLCB5OiA2NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzNTIsIHk6IDY0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzODQsIHk6IDY0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQxNiwgeTogNjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0NDgsIHk6IDY0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ4MCwgeTogNjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjU2LCB5OiA5NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyODgsIHk6IDk2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMjAsIHk6IDk2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM1MiwgeTogOTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM4NCwgeTogOTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDE2LCB5OiA5NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ0OCwgeTogOTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDgwLCB5OiA5NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIE1BR0VOVEE6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI1NiwgeTogMjU2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI4OCwgeTogMjU2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMjAsIHk6IDI1NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzNTIsIHk6IDI1NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzg0LCB5OiAyNTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDE2LCB5OiAyNTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0NDgsIHk6IDI1NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0ODAsIHk6IDI1NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyNTYsIHk6IDI4OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyODgsIHk6IDI4OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIwLCB5OiAyODggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzUyLCB5OiAyODggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM4NCwgeTogMjg4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQxNiwgeTogMjg4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDQ4LCB5OiAyODggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDgwLCB5OiAyODggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjU2LCB5OiAzMjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjg4LCB5OiAzMjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyMCwgeTogMzIwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM1MiwgeTogMzIwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzODQsIHk6IDMyMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0MTYsIHk6IDMyMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ0OCwgeTogMzIwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ4MCwgeTogMzIwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI1NiwgeTogMzUyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI4OCwgeTogMzUyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMjAsIHk6IDM1MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzNTIsIHk6IDM1MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzg0LCB5OiAzNTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDE2LCB5OiAzNTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0NDgsIHk6IDM1MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0ODAsIHk6IDM1MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIEVORU1ZOiB7XHJcbiAgICAgICAgWUVMTE9XOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAwLCB5OiAxMjggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIsIHk6IDEyOCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNjQsIHk6IDEyOCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA5NiwgeTogMTI4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxMjgsIHk6IDEyOCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxNjAsIHk6IDEyOCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE5MiwgeTogMTI4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDIyNCwgeTogMTI4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDAsIHk6IDE2MCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMiwgeTogMTYwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA2NCwgeTogMTYwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDk2LCB5OiAxNjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDEyOCwgeTogMTYwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE2MCwgeTogMTYwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTkyLCB5OiAxNjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjI0LCB5OiAxNjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMCwgeTogMTkyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyLCB5OiAxOTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDY0LCB5OiAxOTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogOTYsIHk6IDE5MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTI4LCB5OiAxOTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTYwLCB5OiAxOTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxOTIsIHk6IDE5MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyMjQsIHk6IDE5MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAwLCB5OiAyMjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIsIHk6IDIyNCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNjQsIHk6IDIyNCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA5NiwgeTogMjI0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxMjgsIHk6IDIyNCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxNjAsIHk6IDIyNCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE5MiwgeTogMjI0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDIyNCwgeTogMjI0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgR1JFRU46IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDAsIHk6IDM4NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMiwgeTogMzg0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA2NCwgeTogMzg0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDk2LCB5OiAzODQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDEyOCwgeTogMzg0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE2MCwgeTogMzg0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTkyLCB5OiAzODQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjI0LCB5OiAzODQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMCwgeTogNDE2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyLCB5OiA0MTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDY0LCB5OiA0MTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogOTYsIHk6IDQxNiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTI4LCB5OiA0MTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTYwLCB5OiA0MTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxOTIsIHk6IDQxNiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyMjQsIHk6IDQxNiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAwLCB5OiA0NDggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIsIHk6IDQ0OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNjQsIHk6IDQ0OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA5NiwgeTogNDQ4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxMjgsIHk6IDQ0OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxNjAsIHk6IDQ0OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE5MiwgeTogNDQ4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDIyNCwgeTogNDQ4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDAsIHk6IDQ4MCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMiwgeTogNDgwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA2NCwgeTogNDgwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDk2LCB5OiA0ODAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDEyOCwgeTogNDgwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE2MCwgeTogNDgwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTkyLCB5OiA0ODAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjI0LCB5OiA0ODAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBXSElURTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjU2LCB5OiAxMjggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjg4LCB5OiAxMjggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyMCwgeTogMTI4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM1MiwgeTogMTI4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzODQsIHk6IDEyOCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0MTYsIHk6IDEyOCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ0OCwgeTogMTI4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ4MCwgeTogMTI4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI1NiwgeTogMTYwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI4OCwgeTogMTYwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMjAsIHk6IDE2MCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzNTIsIHk6IDE2MCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzg0LCB5OiAxNjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDE2LCB5OiAxNjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0NDgsIHk6IDE2MCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0ODAsIHk6IDE2MCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyNTYsIHk6IDE5MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyODgsIHk6IDE5MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIwLCB5OiAxOTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzUyLCB5OiAxOTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM4NCwgeTogMTkyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQxNiwgeTogMTkyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDQ4LCB5OiAxOTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDgwLCB5OiAxOTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjU2LCB5OiAyMjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjg4LCB5OiAyMjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyMCwgeTogMjI0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM1MiwgeTogMjI0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzODQsIHk6IDIyNCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0MTYsIHk6IDIyNCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ0OCwgeTogMjI0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ4MCwgeTogMjI0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgTUFHRU5UQTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjU2LCB5OiAzODQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjg4LCB5OiAzODQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyMCwgeTogMzg0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM1MiwgeTogMzg0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzODQsIHk6IDM4NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0MTYsIHk6IDM4NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ0OCwgeTogMzg0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ4MCwgeTogMzg0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI1NiwgeTogNDE2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI4OCwgeTogNDE2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMjAsIHk6IDQxNiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzNTIsIHk6IDQxNiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzg0LCB5OiA0MTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDE2LCB5OiA0MTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0NDgsIHk6IDQxNiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0ODAsIHk6IDQxNiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyNTYsIHk6IDQ0OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyODgsIHk6IDQ0OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIwLCB5OiA0NDggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzUyLCB5OiA0NDggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM4NCwgeTogNDQ4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQxNiwgeTogNDQ4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDQ4LCB5OiA0NDggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDgwLCB5OiA0NDggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjU2LCB5OiA0ODAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjg4LCB5OiA0ODAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyMCwgeTogNDgwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM1MiwgeTogNDgwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzODQsIHk6IDQ4MCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0MTYsIHk6IDQ4MCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ0OCwgeTogNDgwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ4MCwgeTogNDgwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAgQlVMTEVUOiB7XHJcbiAgICAgICAgdXA6IHsgcG9zaXRpb246IHsgeDogNjQ2LCB5OiAyMDQgfSwgc2l6ZTogeyB3aWR0aDogNiwgaGVpZ2h0OiA4IH0gfSxcclxuICAgICAgICBsZWZ0OiB7IHBvc2l0aW9uOiB7IHg6IDY2MCwgeTogMjA0IH0sIHNpemU6IHsgd2lkdGg6IDgsIGhlaWdodDogNiB9IH0sXHJcbiAgICAgICAgZG93bjogeyBwb3NpdGlvbjogeyB4OiA2NzgsIHk6IDIwNCB9LCBzaXplOiB7IHdpZHRoOiA2LCBoZWlnaHQ6IDggfSB9LFxyXG4gICAgICAgIHJpZ2h0OiB7IHBvc2l0aW9uOiB7IHg6IDY5MiwgeTogMjA0IH0sIHNpemU6IHsgd2lkdGg6IDgsIGhlaWdodDogNiB9IH1cclxuICAgIH0sXHJcbiAgICBCTE9DSzoge1xyXG4gICAgICAgIEJSSUNLOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDUxMiwgeTogMCB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBJUk9OOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDUxMiwgeTogMzIgfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgV0FURVI6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNTEyLCB5OiA5NiB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA1NDQsIHk6IDk2IH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIEJVU0g6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNTQ0LCB5OiA2NCB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBFQUdMRTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA2MDgsIHk6IDY0IH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDY0MCwgeTogNjQgfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICBBTklNQVRJT046IHtcclxuICAgICAgICBFWFBMT1NJT05fU01BTEw6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNTE4LCB5OiAyNjAgfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDIyLCBoZWlnaHQ6IDIyIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNTQ0LCB5OiAyNTggfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDMwLCBoZWlnaHQ6IDI4IH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNTc2LCB5OiAyNTYgfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgRVhQTE9TSU9OX0xBUkdFOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDYxMCwgeTogMjU4IH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiA1OCwgaGVpZ2h0OiA1OCB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDY2OCwgeTogMjU2IH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiA2OCwgaGVpZ2h0OiA2NCB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIElOVklOQ0lCTEU6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNTEyLCB5OiAyODggfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNTQ0LCB5OiAyODggfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIFNQQVdOOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDUxOCwgeTogMTk4IH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAxOCwgaGVpZ2h0OiAxOCB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDU0OCwgeTogMTk2IH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAyMiwgaGVpZ2h0OiAyMiB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDU3OCwgeTogMTk0IH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAyNiwgaGVpZ2h0OiAyNiB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDYwOCwgeTogMTkyIH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAzMCwgaGVpZ2h0OiAzMCB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBTQ09SRV8xMDA6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNTgwLCB5OiAzMjggfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDI2LCBoZWlnaHQ6IDE0IH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIFNDT1JFXzIwMDogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA2MTAsIHk6IDMyOCB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMjgsIGhlaWdodDogMTQgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgU0NPUkVfMzAwOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDY0MiwgeTogMzI4IH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAyOCwgaGVpZ2h0OiAxNCB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBTQ09SRV80MDA6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNjc0LCB5OiAzMjggfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDI4LCBoZWlnaHQ6IDE0IH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIFNDT1JFXzUwMDogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA3MDYsIHk6IDMyOCB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMjgsIGhlaWdodDogMTQgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgR0FNRU9WRVI6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNTc4LCB5OiAzNjggfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDYyLCBoZWlnaHQ6IDMwIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIFBBVVNFOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDU3OCwgeTogMzUyIH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiA3OCwgaGVpZ2h0OiAxNCB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFRJVExFOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDAsIHk6IDAgfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDUxMiwgaGVpZ2h0OiA0ODAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBDVVJTT1I6IFtcclxuICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxOTIsIHk6IDAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDIyNCwgeTogMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIElURU06IHtcclxuICAgICAgICBIRUxNRVQ6IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNTEyLCB5OiAyMjQgfSxcclxuICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgV0FUQ0g6IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNTQ0LCB5OiAyMjQgfSxcclxuICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgU0hPVkVMOiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDU3NiwgeTogMjI0IH0sXHJcbiAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMwIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFNUQVI6IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNjA4LCB5OiAyMjQgfSxcclxuICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgQk9NQjoge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA2NDAsIHk6IDIyNCB9LFxyXG4gICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMCB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBUQU5LOiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDY3MiwgeTogMjI0IH0sXHJcbiAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMwIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFBJU1RPTDoge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA3MDQsIHk6IDIyNCB9LFxyXG4gICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMCB9XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBTWVNURU06IHtcclxuICAgICAgICBOVUxMOiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDAsIHk6IDAgfSxcclxuICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMCwgaGVpZ2h0OiAwIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFRBTktfSUNPTjoge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA2NDAsIHk6IDM4NCB9LFxyXG4gICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAxNiwgaGVpZ2h0OiAxNiB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBTVEFHRToge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA2NTgsIHk6IDM1MSB9LFxyXG4gICAgICAgICAgICBzaXplOiB7IHdpZHRoOiA3OCwgaGVpZ2h0OiAxNiB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBOVU1CRVI6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNjU3LCB5OiAzNjcgfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDE2LCBoZWlnaHQ6IDE2IH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNjc0LCB5OiAzNjcgfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDE2LCBoZWlnaHQ6IDE2IH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNjg5LCB5OiAzNjcgfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDE2LCBoZWlnaHQ6IDE2IH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNzA1LCB5OiAzNjcgfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDE2LCBoZWlnaHQ6IDE2IH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNzIxLCB5OiAzNjcgfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDE2LCBoZWlnaHQ6IDE2IH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNjU3LCB5OiAzODMgfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDE2LCBoZWlnaHQ6IDE2IH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNjc0LCB5OiAzODMgfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDE2LCBoZWlnaHQ6IDE2IH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNjg5LCB5OiAzODMgfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDE2LCBoZWlnaHQ6IDE2IH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNzA1LCB5OiAzODMgfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDE2LCBoZWlnaHQ6IDE2IH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNzIxLCB5OiAzODMgfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDE2LCBoZWlnaHQ6IDE2IH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgRlJBTUU6IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNzM2LCB5OiAwIH0sXHJcbiAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDY0LCBoZWlnaHQ6IDQ4MCB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgU1BSVElFX0RFRjtcclxuIiwiZXhwb3J0IGRlZmF1bHQgXCIuLi9kaXN0L2pzL3Nwcml0ZV9tYWluLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiLi4vZGlzdC9qcy9zcHJpdGVfdGl0bGUucG5nXCI7IiwiaW1wb3J0IHsgZ2V0U3ByaXRlRGF0YSB9IGZyb20gXCIuLi9SZW5kZXIvU3ByaXRlL1Nwcml0ZURhdGFcIjtcclxuLyoqXHJcbiogVGVzdHMgdHdvIG9iamVjdHMgYXJlIGNvbGxpc2lvbnMgKHJlY3RhbmdsZSBib3VuZGluZyBib3ggY29sbGlzaW9uIHRlc3QpXHJcbiogQHBhcmFtIG9iamVjdDEgZmlyc3Qgb2JqZWN0XHJcbiogQHBhcmFtIHNwcml0ZTEgZmlyc3Qgb2JqZWN0J3Mgc3ByaXRlIGRhdGEgZm9yIHNpemVcclxuKiBAcGFyYW0gb2JqZWN0MiBzZWNvbmQgb2JqZWN0XHJcbiogQHBhcmFtIHNwcml0ZTIgc2Vjb25kIG9iamVjdCdzIHNwcml0ZSBkYXRhIGZvciBzaXplXHJcbiovXHJcbmV4cG9ydCBmdW5jdGlvbiBPYmplY3RDb2xsaXNpb25UZXN0KG9iamVjdDEsIG9iamVjdDIpIHtcclxuICAgIHZhciBzaXplMSA9IGdldFNwcml0ZURhdGEob2JqZWN0MSkuc2l6ZTtcclxuICAgIHZhciBzaXplMiA9IGdldFNwcml0ZURhdGEob2JqZWN0Mikuc2l6ZTtcclxuICAgIHJldHVybiBSZWN0YW5nbGVDb2xsaXNpb25UZXN0KG9iamVjdDEucG9zaXRpb24sIHNpemUxLCBvYmplY3QyLnBvc2l0aW9uLCBzaXplMik7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIEJsb2NrQ29sbGlzaW9uVGVzdChibG9jaywgb2JqZWN0KSB7XHJcbiAgICB2YXIgY2VsbHMgPSBbXTtcclxuICAgIHZhciBibG9ja1NpemUgPSBnZXRTcHJpdGVEYXRhKGJsb2NrKS5zaXplO1xyXG4gICAgdmFyIG9iamVjdFNpemUgPSBnZXRTcHJpdGVEYXRhKG9iamVjdCkuc2l6ZTtcclxuICAgIHZhciBjZWxsUG9zaXRpb247XHJcbiAgICB2YXIgY2VsbFNpemUgPSB7XHJcbiAgICAgICAgd2lkdGg6IGJsb2NrU2l6ZS53aWR0aCAvIDQsXHJcbiAgICAgICAgaGVpZ2h0OiBibG9ja1NpemUuaGVpZ2h0IC8gNFxyXG4gICAgfTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmxvY2suYmxvY2tTdGF0ZTR4NC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgYmxvY2suYmxvY2tTdGF0ZTR4NFtpXS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBpZiAoYmxvY2suYmxvY2tTdGF0ZTR4NFtpXVtqXSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2VsbFBvc2l0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgeDogYmxvY2sucG9zaXRpb24ueCArIChibG9ja1NpemUud2lkdGggLyA0KSAqIGosXHJcbiAgICAgICAgICAgICAgICB5OiBibG9jay5wb3NpdGlvbi55ICsgKGJsb2NrU2l6ZS5oZWlnaHQgLyA0KSAqIGlcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaWYgKFJlY3RhbmdsZUNvbGxpc2lvblRlc3QoY2VsbFBvc2l0aW9uLCBjZWxsU2l6ZSwgb2JqZWN0LnBvc2l0aW9uLCBvYmplY3RTaXplKSkge1xyXG4gICAgICAgICAgICAgICAgY2VsbHMucHVzaChjZWxsUG9zaXRpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNlbGxzO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBSZWN0YW5nbGVDb2xsaXNpb25UZXN0KHBvczEsIHNpemUxLCBwb3MyLCBzaXplMikge1xyXG4gICAgaWYgKHBvczEueCArIHNpemUxLndpZHRoID4gcG9zMi54ICYmXHJcbiAgICAgICAgcG9zMS54IDwgcG9zMi54ICsgc2l6ZTIud2lkdGggJiZcclxuICAgICAgICBwb3MxLnkgKyBzaXplMS5oZWlnaHQgPiBwb3MyLnkgJiZcclxuICAgICAgICBwb3MxLnkgPCBwb3MyLnkgKyBzaXplMi5oZWlnaHQpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG4iLCJ2YXIgX192YWx1ZXMgPSAodGhpcyAmJiB0aGlzLl9fdmFsdWVzKSB8fCBmdW5jdGlvbihvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufTtcclxudmFyIF9fcmVhZCA9ICh0aGlzICYmIHRoaXMuX19yZWFkKSB8fCBmdW5jdGlvbiAobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59O1xyXG52YXIgX19zcHJlYWQgPSAodGhpcyAmJiB0aGlzLl9fc3ByZWFkKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59O1xyXG5leHBvcnQgZnVuY3Rpb24gZGVlcENsb25lKG9iaikge1xyXG4gICAgdmFyIGVfMSwgX2E7XHJcbiAgICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH1cclxuICAgIHZhciByZXN1bHQgPSBBcnJheS5pc0FycmF5KG9iaikgPyBbXSA6IHt9O1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBmb3IgKHZhciBfYiA9IF9fdmFsdWVzKE9iamVjdC5rZXlzKG9iaikpLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XHJcbiAgICAgICAgICAgIHZhciBrZXkgPSBfYy52YWx1ZTtcclxuICAgICAgICAgICAgcmVzdWx0W2tleV0gPSBkZWVwQ2xvbmUob2JqW2tleV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoX2MgJiYgIV9jLmRvbmUgJiYgKF9hID0gX2IucmV0dXJuKSkgX2EuY2FsbChfYik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxudmFyIEd1aWQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBHdWlkKCkge1xyXG4gICAgfVxyXG4gICAgR3VpZC5uZXdHdWlkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAneHh4eHh4eHgteHh4eC14eHh4LXh4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uIChjKSB7XHJcbiAgICAgICAgICAgIHZhciByID0gTWF0aC5yYW5kb20oKSAqIDE2IHwgMCwgdiA9IGMgPT0gJ3gnID8gciA6IChyICYgMHgzIHwgMHg4KTtcclxuICAgICAgICAgICAgcmV0dXJuIHYudG9TdHJpbmcoMTYpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBHdWlkO1xyXG59KCkpO1xyXG5leHBvcnQgeyBHdWlkIH07XHJcbi8qKlxyXG4gKiBmaW5kIG1heGltdW0gbnVtYmVyIGZyb20gbnVtYmVyIGFycmF5XHJcbiAqIEBwYXJhbSBudW1iZXJzIGdpdmVuIG51bWJlcnNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXgobnVtYmVycykge1xyXG4gICAgcmV0dXJuIE1hdGgubWF4LmFwcGx5KG51bGwsIG51bWJlcnMpO1xyXG59XHJcbi8qKlxyXG4gKiBmaW5kIG1pbmltdW0gbnVtYmVyIGZyb20gbnVtYmVyIGFycmF5XHJcbiAqIEBwYXJhbSBudW1iZXJzIGdpdmVuIG51bWJlcnNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtaW4obnVtYmVycykge1xyXG4gICAgcmV0dXJuIE1hdGgubWluLmFwcGx5KG51bGwsIG51bWJlcnMpO1xyXG59XHJcbi8qKlxyXG4gKiBnZXQgYSByYW5kb20gdmFsdWUgYmV0d2VlbiByYW5nZVxyXG4gKiBAcGFyYW0gbWluIHJhbmdlX21pblxyXG4gKiBAcGFyYW0gbWF4IHJhbmdlX21heFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbVJhbmdlKG1pbiwgbWF4KSB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVEdXBsaWNhdGUoYXJyYXkpIHtcclxuICAgIHZhciBzZXQgPSBuZXcgU2V0KGFycmF5KTtcclxuICAgIHJldHVybiBfX3NwcmVhZChzZXQpO1xyXG59XHJcbiIsImltcG9ydCBHYW1lIGZyb20gXCIuL0dhbWUvR2FtZVwiO1xyXG5pbXBvcnQgUmVuZGVyZXIgZnJvbSBcIi4vUmVuZGVyL1JlbmRlcmVyXCI7XHJcbnZhciBzcHJpdGVNYWluSW1hZ2UgPSByZXF1aXJlKCcuL1JlbmRlci9TcHJpdGUvc3ByaXRlX21haW4ucG5nJyk7XHJcbnZhciBzcHJpdGVUSXRsZUltYWdlID0gcmVxdWlyZSgnLi9SZW5kZXIvU3ByaXRlL3Nwcml0ZV90aXRsZS5wbmcnKTtcclxudmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xyXG4vLyBpbml0IGdhbWVcclxudmFyIGdhbWUgPSBuZXcgR2FtZShjYW52YXMsICcuL2pzL3Nwcml0ZV9tYWluLnBuZycsICcuL2pzL3Nwcml0ZV90aXRsZS5wbmcnKTtcclxuLy8jcmVnaW9uIERFQlVHXHJcbnZhciBkZWJ1Z19idG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlYnVnXCIpO1xyXG52YXIgbWFpblRhbmtfbGV2ZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5UYW5rX2xldmVsXCIpO1xyXG52YXIgbWFpblRhbmtfY29sb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5UYW5rX2NvbG9yXCIpO1xyXG52YXIgbWFpblRhbmtfaW52aW5jaWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblRhbmtfaW52aW5jaWJsZVwiKTtcclxudmFyIG1haW5UYW5rX2hpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblRhbmtfaGl0XCIpO1xyXG52YXIgdHJhY2tzID0ge1xyXG4gICAgYmxvY2s6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlfYmxvY2tcIiksXHJcbiAgICB0YW5rOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpX3RhbmtcIiksXHJcbiAgICBidWxsZXQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlfYnVsbGV0XCIpLFxyXG4gICAgYW5pbWF0aW9uOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpX2FuaW1hdGlvblwiKSxcclxufTtcclxudmFyIG9iamVjdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9iamVjdHNcIik7XHJcbnZhciBnYW1lZGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZWRhdGFcIik7XHJcbmRlYnVnX2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldikge1xyXG4gICAgaWYgKGRlYnVnX2J0bi5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykgPT0gJ3RydWUnKSB7XHJcbiAgICAgICAgZ2FtZS5kZWJ1ZyA9IGZhbHNlO1xyXG4gICAgICAgIGRlYnVnX2J0bi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2ZhbHNlJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChkZWJ1Z19idG4uZ2V0QXR0cmlidXRlKCd2YWx1ZScpID09ICdmYWxzZScpIHtcclxuICAgICAgICBnYW1lLmRlYnVnID0gdHJ1ZTtcclxuICAgICAgICBkZWJ1Z19idG4uc2V0QXR0cmlidXRlKCd2YWx1ZScsICd0cnVlJyk7XHJcbiAgICB9XHJcbiAgICBkZWJ1Z19idG4uaW5uZXJUZXh0ID0gXCJkZWJ1ZyA9IFwiICsgZGVidWdfYnRuLmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcclxufSk7XHJcbm1haW5UYW5rX2xldmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkgeyB1cGRhdGVUYW5rKCk7IH0pO1xyXG5tYWluVGFua19jb2xvci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHsgdXBkYXRlVGFuaygpOyB9KTtcclxubWFpblRhbmtfaW52aW5jaWJsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkgeyBnYW1lLm1haW5UYW5rLmludmluY2libGUoKTsgfSk7XHJcbm1haW5UYW5rX2hpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkgeyBnYW1lLm1haW5UYW5rLmhpdCgpOyB9KTtcclxudmFyIG9iamVjdEZpbmRlciA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBfYSwgX2I7XHJcbiAgICBvYmplY3RzLmlubmVySFRNTCA9XHJcbiAgICAgICAgXCJcXG5cXHQ8dHI+XFxuXFx0XFx0PHRkPnpJbmRleDwvdGQ+XFxuXFx0XFx0PHRkPmlkPC90ZD5cXG5cXHRcXHQ8dGQ+dHlwZTwvdGQ+XFxuXFx0XFx0PHRkPnBvc2l0aW9uPC90ZD5cXG5cXHQ8L3RyPlxcblxcdFwiO1xyXG4gICAgZ2FtZWRhdGEuaW5uZXJIVE1MID1cclxuICAgICAgICBcIlxcblxcdDx0cj5cXG5cXHRcXHQ8dGQ+dHlwZTwvdGQ+XFxuXFx0XFx0PHRkPnZhbHVlPC90ZD5cXG5cXHQ8L3RyPlxcblxcdFwiO1xyXG4gICAgaWYgKCFnYW1lLmRlYnVnKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGdhbWUubWFpblRhbmspIHtcclxuICAgICAgICBtYWluVGFua19jb2xvci52YWx1ZSA9IGdhbWUubWFpblRhbmsudGFua0NvbG9yLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgbWFpblRhbmtfbGV2ZWwudmFsdWUgPSBnYW1lLm1haW5UYW5rLnRhbmtMZXZlbC50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgaWYgKGdhbWUuZ2FtZURhdGEpIHtcclxuICAgICAgICBnYW1lZGF0YS5pbm5lckhUTUwgPSBnYW1lZGF0YS5pbm5lckhUTUwgK1xyXG4gICAgICAgICAgICAoXCJcXG5cXHRcXHQ8dHI+XFxuXFx0XFx0XFx0PHRkPmdhbWVvdmVyPC90ZD5cXG5cXHRcXHRcXHQ8dGQ+XCIgKyBnYW1lLmdhbWVEYXRhLmdhbWVPdmVyICsgXCI8L3RkPlxcblxcdFxcdDwvdHI+XFxuXFx0XFx0PHRyPlxcblxcdFxcdFxcdDx0ZD5sZXZlbElkPC90ZD5cXG5cXHRcXHRcXHQ8dGQ+XCIgKyAoKF9hID0gZ2FtZS5nYW1lRGF0YS5sZXZlbERhdGEpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5sZXZlbElkKSArIFwiPC90ZD5cXG5cXHRcXHQ8L3RyPlxcblxcdFxcdDx0cj5cXG5cXHRcXHRcXHQ8dGQ+cDEgc2NvcmU8L3RkPlxcblxcdFxcdFxcdDx0ZD5cIiArICgoX2IgPSBnYW1lLmdhbWVEYXRhLnBsYXllckRhdGFbMF0pID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5zY29yZSkgKyBcIjwvdGQ+XFxuXFx0XFx0PC90cj5cXG5cXHRcXHRcIik7XHJcbiAgICB9XHJcbiAgICBnYW1lLm9iamVjdHMuZm9yRWFjaChmdW5jdGlvbiAob2JqZWN0KSB7XHJcbiAgICAgICAgc3dpdGNoIChvYmplY3Qub2JqZWN0VHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiQkxPQ0tcIiAvKiBCTE9DSyAqLzpcclxuICAgICAgICAgICAgICAgIGlmICh0cmFja3MuYmxvY2suY2hlY2tlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIlRBTktcIiAvKiBUQU5LICovOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRyYWNrcy50YW5rLmNoZWNrZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJCVUxMRVRcIiAvKiBCVUxMRVQgKi86XHJcbiAgICAgICAgICAgICAgICBpZiAodHJhY2tzLmJ1bGxldC5jaGVja2VkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiQU5JTUFUSU9OXCIgLyogQU5JTUFUSU9OICovOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRyYWNrcy5hbmltYXRpb24uY2hlY2tlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgb2JqZWN0cy5pbm5lckhUTUwgPSBvYmplY3RzLmlubmVySFRNTCArXHJcbiAgICAgICAgICAgIChcIlxcblxcdFxcdDx0cj5cXG5cXHRcXHRcXHQ8dGQ+XCIgKyBSZW5kZXJlci5nZXRPYmplY3RaSW5kZXgob2JqZWN0KSArIFwiPC90ZD5cXG5cXHRcXHRcXHQ8dGQ+XCIgKyBvYmplY3QuaWQgKyBcIjwvdGQ+XFxuXFx0XFx0XFx0PHRkPlwiICsgb2JqZWN0Lm9iamVjdFR5cGUgKyBcIjwvdGQ+XFxuXFx0XFx0XFx0PHRkPlt4OiBcIiArIG9iamVjdC5wb3NpdGlvbi54ICsgXCIsIHk6IFwiICsgb2JqZWN0LnBvc2l0aW9uLnkgKyBcIl08L3RkPlxcblxcdFxcdDwvdHI+XFxuXFx0XFx0XCIpO1xyXG4gICAgfSk7XHJcbn0sIDEwMCk7XHJcbmZ1bmN0aW9uIHVwZGF0ZVRhbmsoKSB7XHJcbiAgICBnYW1lLm1haW5UYW5rLnRhbmtDb2xvciA9IG1haW5UYW5rX2NvbG9yLnZhbHVlO1xyXG4gICAgZ2FtZS5tYWluVGFuay50YW5rTGV2ZWwgPSBwYXJzZUludChtYWluVGFua19sZXZlbC52YWx1ZSk7XHJcbn1cclxuLy8jZW5kcmVnaW9uXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=