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
/* harmony import */ var _Level_ILevel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Level/ILevel */ "./src/Game/Level/ILevel.ts");
/* harmony import */ var _Utils_CollisionTest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Utils/CollisionTest */ "./src/Utils/CollisionTest.ts");
/* harmony import */ var _Render_Sprite_SpriteDefinition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Render/Sprite/SpriteDefinition */ "./src/Render/Sprite/SpriteDefinition.ts");
/* harmony import */ var _Object_AnimationObject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Object/AnimationObject */ "./src/Game/Object/AnimationObject.ts");
/* harmony import */ var _Object_Enum_EAnimationType__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Object/Enum/EAnimationType */ "./src/Game/Object/Enum/EAnimationType.ts");
/* harmony import */ var _Object_BlockObject__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Object/BlockObject */ "./src/Game/Object/BlockObject.ts");
/* harmony import */ var _Object_Enum_ETankType__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Object/Enum/ETankType */ "./src/Game/Object/Enum/ETankType.ts");
/* harmony import */ var _Render_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Render/Sprite/SpriteData */ "./src/Render/Sprite/SpriteData.ts");
/* harmony import */ var _Level_DefaultLevels__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Level/DefaultLevels */ "./src/Game/Level/DefaultLevels.ts");
/* harmony import */ var _InputManager_InputManager__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./InputManager/InputManager */ "./src/Game/InputManager/InputManager.ts");
/* harmony import */ var _Utils_Utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Utils/Utils */ "./src/Utils/Utils.ts");
/* harmony import */ var _Object_TankAIObject__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Object/TankAIObject */ "./src/Game/Object/TankAIObject.ts");
/* harmony import */ var _Object_Enum_EItemType__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Object/Enum/EItemType */ "./src/Game/Object/Enum/EItemType.ts");
/* harmony import */ var _Object_ItemObject__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Object/ItemObject */ "./src/Game/Object/ItemObject.ts");

















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
        this._inputManager = new _InputManager_InputManager__WEBPACK_IMPORTED_MODULE_12__["default"](this);
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
                test = Object(_Utils_CollisionTest__WEBPACK_IMPORTED_MODULE_4__["BlockCollisionTest"])(item, object).length > 0;
            }
            else {
                test = Object(_Utils_CollisionTest__WEBPACK_IMPORTED_MODULE_4__["ObjectCollisionTest"])(object, item);
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
            var size = Object(_Render_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_10__["getSpriteData"])(object).size;
            animationPoint = {
                x: object.position.x + size.width / 2,
                y: object.position.y + size.height / 2
            };
        }
        else {
            animationPoint = target;
        }
        if (animationValue == undefined) {
            animationValue = _Object_Enum_EAnimationType__WEBPACK_IMPORTED_MODULE_7__["AnimationDefaults"][animationType];
        }
        var animation = new _Object_AnimationObject__WEBPACK_IMPORTED_MODULE_6__["default"](this, null, animationType, animationPoint, animationValue.duration, animationValue.frameRate, animationValue.loop, callback);
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
    Game.prototype.newGame = function (playerCount, levelId) {
        var _a;
        this._currentMenu = "GAME" /* GAME */;
        this._objects = [];
        this._gameData = {};
        var gamedata = this._gameData;
        var playerData = new Array();
        for (var i = 0; i < playerCount; i++) {
            playerData.push({
                life: 5,
                score: 0,
                destroyedTank: {}
            });
        }
        gamedata.gameType = 0 /* PVE */;
        gamedata.playerData = playerData;
        gamedata.gameOver = false;
        if (levelId != undefined) {
            this.newLevel(levelId);
        }
        else {
            if (typeof ((_a = gamedata.levelData) === null || _a === void 0 ? void 0 : _a.levelId) === "number") {
                this.newLevel(gamedata.levelData.levelId + 1);
            }
            else {
                this.newLevel(1);
            }
        }
    };
    Game.prototype.newLevel = function (levelId) {
        var _this = this;
        this._currentMenu = "STAGE" /* STAGE */;
        this._objects = [];
        this._gameData.levelData = Object(_Utils_Utils__WEBPACK_IMPORTED_MODULE_13__["deepClone"])(_Level_DefaultLevels__WEBPACK_IMPORTED_MODULE_11__["default"].find(function (level) {
            return level.levelId === levelId;
        }));
        this.showCurtain();
        this.spawnTank("PLAYER_TANK" /* PLAYER_TANK */, true, 0);
        if (this.gameData.playerData.length > 1) {
            this.spawnTank("PLAYER_TANK" /* PLAYER_TANK */, true, 1);
        }
        this._gameData.levelData.blocks.forEach(function (block) {
            _this.insertObject(new _Object_BlockObject__WEBPACK_IMPORTED_MODULE_8__["default"](_this, block.type, {
                x: _Render_Renderer__WEBPACK_IMPORTED_MODULE_0__["DRAWING_CONST"].sizes.frame.left + block.position.x * 32,
                y: _Render_Renderer__WEBPACK_IMPORTED_MODULE_0__["DRAWING_CONST"].sizes.frame.top + block.position.y * 32
            }, block.blockState));
        });
    };
    Game.prototype.showCurtain = function () {
        var _this = this;
        this._currentMenu = "STAGE" /* STAGE */;
        this._objects = [];
        this.startAnimation({ x: 0, y: 0 }, "CURTAIN" /* CURTAIN */, null, function () {
            _this._currentMenu = "GAME" /* GAME */;
        });
    };
    Game.prototype.setPause = function () {
        this._pause = true;
        var FRAME = _Render_Renderer__WEBPACK_IMPORTED_MODULE_0__["DRAWING_CONST"].sizes.frame;
        var SCREEN = _Render_Renderer__WEBPACK_IMPORTED_MODULE_0__["DRAWING_CONST"].sizes.screen;
        this.startAnimation({
            x: FRAME.left + SCREEN.width / 2,
            y: (FRAME.top + FRAME.bottom + SCREEN.height) / 2 + _Render_Sprite_SpriteDefinition__WEBPACK_IMPORTED_MODULE_5__["default"].ANIMATION.PAUSE[0].size.height / 2
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
                x: _Render_Renderer__WEBPACK_IMPORTED_MODULE_0__["DRAWING_CONST"].sizes.frame.left + position.x * Object(_Render_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_10__["getObjectSize"])("TANK" /* TANK */).width,
                y: _Render_Renderer__WEBPACK_IMPORTED_MODULE_0__["DRAWING_CONST"].sizes.frame.top + position.y * Object(_Render_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_10__["getObjectSize"])("TANK" /* TANK */).height,
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
                this.createEnemyTank();
            }
        }
    };
    Game.prototype.spawnItem = function (itemType, position) {
        if (itemType == undefined) {
            itemType = Object(_Utils_Utils__WEBPACK_IMPORTED_MODULE_13__["getRandomEnum"])(_Object_Enum_EItemType__WEBPACK_IMPORTED_MODULE_15__["default"]);
        }
        if (position == undefined) {
            position = this._renderer.randomPoint(Object(_Render_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_10__["getObjectSize"])("ITEM" /* ITEM */));
        }
        this.insertObject(new _Object_ItemObject__WEBPACK_IMPORTED_MODULE_16__["default"](this, itemType, position));
    };
    Game.prototype.createPlayerTank = function (position, direction, tankColor, tankLevel) {
        if (this.mainTank) {
            this.removeObject(this.mainTank);
        }
        this.insertObject(new _Object_TankObject__WEBPACK_IMPORTED_MODULE_2__["default"](this, "PLAYER_TANK" /* PLAYER_TANK */, position, direction, tankColor, tankLevel, MAIN_TANK_ID));
        console.log(this.mainTank instanceof _Object_TankAIObject__WEBPACK_IMPORTED_MODULE_14__["default"]);
    };
    Game.prototype.createEnemyTank = function () {
        var tankSize = Object(_Render_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_10__["getObjectSize"])("TANK" /* TANK */);
        var spawnPoints = TANK_SPAWN_POINT.ENEMY_TANK;
        var availablePoints = [];
        var objects = this.objects.filter(function (object) { return object.objectType === "TANK" /* TANK */; });
        for (var i = 0; i < spawnPoints.length; i++) {
            var success = true;
            for (var j = 0; j < objects.length; j++) {
                if (Object(_Utils_CollisionTest__WEBPACK_IMPORTED_MODULE_4__["RectangleCollisionTest"])(this.translateBlockPosition(spawnPoints[i]), tankSize, objects[j].position, tankSize) == true) {
                    success = false;
                }
            }
            if (success) {
                availablePoints.push(spawnPoints[i]);
            }
        }
        if (availablePoints.length <= 0) {
            this._lastSpawn = performance.now();
            return;
        }
        var idx = Object(_Utils_Utils__WEBPACK_IMPORTED_MODULE_13__["getRandomRange"])(0, availablePoints.length - 1);
        var position = this.translateBlockPosition(availablePoints[idx]);
        var next = this.nextTank();
        if (next == undefined) {
            return;
        }
        this.insertObject(new _Object_TankAIObject__WEBPACK_IMPORTED_MODULE_14__["default"](this, next.type, next.item, position, "down" /* down */));
    };
    Game.prototype.translateBlockPosition = function (point) {
        var blockSize = Object(_Render_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_10__["getObjectSize"])("BLOCK" /* BLOCK */);
        return {
            x: _Render_Renderer__WEBPACK_IMPORTED_MODULE_0__["DRAWING_CONST"].sizes.frame.left + point.x * blockSize.width,
            y: _Render_Renderer__WEBPACK_IMPORTED_MODULE_0__["DRAWING_CONST"].sizes.frame.top + point.y * blockSize.height
        };
    };
    Game.prototype.nextTank = function () {
        var _this = this;
        var tankGroups = this._gameData.levelData.tanks;
        var type;
        var sum = 0;
        var _loop_1 = function (i) {
            var total = Object(_Level_ILevel__WEBPACK_IMPORTED_MODULE_3__["getTotalOfTankGroup"])(tankGroups[i]);
            if (total > 0 && type == undefined) {
                var availableTypes_1 = [];
                Object.values(_Object_Enum_ETankType__WEBPACK_IMPORTED_MODULE_9__["EnemyType"]).forEach(function (type) {
                    if (_this._gameData.levelData.tanks[i][type] > 0) {
                        availableTypes_1.push(type);
                    }
                });
                type = availableTypes_1[Object(_Utils_Utils__WEBPACK_IMPORTED_MODULE_13__["getRandomRange"])(0, availableTypes_1.length - 1)];
                this_1._gameData.levelData.tanks[i][type]--;
            }
            sum += total;
        };
        var this_1 = this;
        for (var i = 0; i < tankGroups.length; i++) {
            _loop_1(i);
        }
        if (sum > 0) {
            return {
                type: type,
                item: (20 - sum) % 5 === 0 && 20 - sum > 0
            };
        }
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

/***/ "./src/Game/Level/ILevel.ts":
/*!**********************************!*\
  !*** ./src/Game/Level/ILevel.ts ***!
  \**********************************/
/*! exports provided: getTotalOfTankGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalOfTankGroup", function() { return getTotalOfTankGroup; });
function getTotalOfTankGroup(group) {
    if (isNaN(group.DEFAULT)) {
        group.DEFAULT = 0;
    }
    if (isNaN(group.SPEED)) {
        group.SPEED = 0;
    }
    if (isNaN(group.POWER)) {
        group.POWER = 0;
    }
    if (isNaN(group.ARMOURED)) {
        group.ARMOURED = 0;
    }
    return group.DEFAULT + group.SPEED + group.POWER + group.ARMOURED;
}


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
    },
    CURTAIN: {
        duration: 3000,
        frameRate: 25,
        loop: true
    }
};


/***/ }),

/***/ "./src/Game/Object/Enum/EItemType.ts":
/*!*******************************************!*\
  !*** ./src/Game/Object/Enum/EItemType.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var EItemType;
(function (EItemType) {
    EItemType["HELMET"] = "HELMET";
    EItemType["WATCH"] = "WATCH";
    EItemType["STAR"] = "STAR";
    EItemType["BOMB"] = "BOMB";
    EItemType["TANK"] = "TANK";
    EItemType["PISTOL"] = "PISTOL";
})(EItemType || (EItemType = {}));
/* harmony default export */ __webpack_exports__["default"] = (EItemType);


/***/ }),

/***/ "./src/Game/Object/Enum/ETankType.ts":
/*!*******************************************!*\
  !*** ./src/Game/Object/Enum/ETankType.ts ***!
  \*******************************************/
/*! exports provided: EnemyType, EnemyScoreMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnemyType", function() { return EnemyType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnemyScoreMap", function() { return EnemyScoreMap; });
var EnemyType;
(function (EnemyType) {
    EnemyType["DEFAULT"] = "DEFAULT";
    EnemyType["SPEED"] = "SPEED";
    EnemyType["POWER"] = "POWER";
    EnemyType["ARMOURED"] = "ARMOURED";
})(EnemyType || (EnemyType = {}));
var EnemyScoreMap = new Map();
EnemyScoreMap.set(EnemyType.DEFAULT, 100);
EnemyScoreMap.set(EnemyType.SPEED, 200);
EnemyScoreMap.set(EnemyType.POWER, 300);
EnemyScoreMap.set(EnemyType.ARMOURED, 400);



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

/***/ "./src/Game/Object/ItemObject.ts":
/*!***************************************!*\
  !*** ./src/Game/Object/ItemObject.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameObject */ "./src/Game/Object/GameObject.ts");
/* harmony import */ var _Enum_EItemType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enum/EItemType */ "./src/Game/Object/Enum/EItemType.ts");
/* harmony import */ var _Utils_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utils/Utils */ "./src/Utils/Utils.ts");
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



var ItemObject = /** @class */ (function (_super) {
    __extends(ItemObject, _super);
    function ItemObject(game, itemType, position) {
        var _this = _super.call(this, game, "ITEM" /* ITEM */, position, _Utils_Utils__WEBPACK_IMPORTED_MODULE_2__["Guid"].newGuid()) || this;
        _this.itemType = itemType;
        return _this;
    }
    ItemObject.prototype.hit = function (eventOrigin) {
        var origin = eventOrigin;
        var otherTanks = this._game.objects.filter(function (x) {
            var tank = x;
            return tank.tankType === "ENEMY_TANK" /* ENEMY_TANK */;
        });
        switch (this.itemType) {
            case _Enum_EItemType__WEBPACK_IMPORTED_MODULE_1__["default"].BOMB:
                otherTanks.forEach(function (tank) {
                    tank.destroy();
                });
                break;
            case _Enum_EItemType__WEBPACK_IMPORTED_MODULE_1__["default"].HELMET:
                origin.invincible();
                break;
            case _Enum_EItemType__WEBPACK_IMPORTED_MODULE_1__["default"].PISTOL:
                // point up
                break;
            case _Enum_EItemType__WEBPACK_IMPORTED_MODULE_1__["default"].STAR:
                origin.levelup();
                break;
            case _Enum_EItemType__WEBPACK_IMPORTED_MODULE_1__["default"].TANK:
                // life 1 up
                break;
            case _Enum_EItemType__WEBPACK_IMPORTED_MODULE_1__["default"].WATCH:
                // stop enemy tanks
                break;
        }
        this._game.startAnimation(this, "SCORE_500" /* SCORE_500 */, null);
        this.remove();
    };
    return ItemObject;
}(_GameObject__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (ItemObject);


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
            case _Enum_ETankType__WEBPACK_IMPORTED_MODULE_1__["EnemyType"].DEFAULT:
                level = 0;
                break;
            case _Enum_ETankType__WEBPACK_IMPORTED_MODULE_1__["EnemyType"].SPEED:
                level = 1;
                break;
            case _Enum_ETankType__WEBPACK_IMPORTED_MODULE_1__["EnemyType"].POWER:
                level = 2;
                break;
            case _Enum_ETankType__WEBPACK_IMPORTED_MODULE_1__["EnemyType"].ARMOURED:
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
        else if (this._enemyType === _Enum_ETankType__WEBPACK_IMPORTED_MODULE_1__["EnemyType"].ARMOURED) {
            key = this._enemyType.toString();
            index = this._hp - 1;
        }
        else {
            key = 'DEFAULT';
            index = 0;
        }
        return ColorSequenceDefinitions[key][index];
    };
    TankAIOBject.prototype.hit = function (eventOrigin) {
        this._hp -= 1;
        if (this._hp <= 0) {
            this.destroy(eventOrigin);
        }
    };
    TankAIOBject.prototype.destroy = function (eventOrigin) {
        var _this = this;
        this.remove();
        if (this._hasItem) {
            this._game.spawnItem();
        }
        if (eventOrigin && eventOrigin instanceof _TankObject__WEBPACK_IMPORTED_MODULE_0__["default"]) {
            var player = eventOrigin;
            // TODO player 
        }
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
    TankObject.prototype.hit = function (eventOrigin) {
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
/* harmony import */ var _Game_Object_Enum_EAnimationType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Game/Object/Enum/EAnimationType */ "./src/Game/Object/Enum/EAnimationType.ts");
/* harmony import */ var _Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sprite/SpriteData */ "./src/Render/Sprite/SpriteData.ts");
/* harmony import */ var _Utils_Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Utils/Utils */ "./src/Utils/Utils.ts");
/* harmony import */ var _Game_Object_TankAIObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Game/Object/TankAIObject */ "./src/Game/Object/TankAIObject.ts");





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
                case "STAGE" /* STAGE */:
                    this.renderStage(ctx);
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
                        var animationSize = Object(_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_2__["getAnimationSize"])(animation.animationType, animation.spritePosition);
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
                        var animationSize = Object(_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_2__["getAnimationSize"])(animation.animationType, animation.spritePosition);
                        switch (animation.animationType) {
                            case "INVINCIBLE" /* INVINCIBLE */:
                                var tankSize = Object(_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_2__["getObjectSize"])("TANK" /* TANK */);
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
                        if (tank instanceof _Game_Object_TankAIObject__WEBPACK_IMPORTED_MODULE_4__["default"]) {
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
    Renderer.prototype.renderStage = function (ctx) {
        this.drawCurtain(ctx);
    };
    Renderer.prototype.drawCurtain = function (ctx) {
        var _this = this;
        ctx.save();
        var objects = this._game.objects;
        objects.forEach(function (object) {
            switch (object.objectType) {
                case "ANIMATION" /* ANIMATION */:
                    var animation = object;
                    switch (animation.animationType) {
                        case "CURTAIN" /* CURTAIN */:
                            var defaults = _Game_Object_Enum_EAnimationType__WEBPACK_IMPORTED_MODULE_1__["AnimationDefaults"].CURTAIN;
                            var original_start = animation.expireTime - defaults.duration;
                            var elapsed = _this._fps.now - original_start;
                            var progress = elapsed / defaults.duration;
                            var screen_1 = {
                                width: ctx.canvas.clientWidth,
                                height: ctx.canvas.clientHeight
                            };
                            ctx.fillStyle = DRAWING_CONST.colors.background_frame;
                            if (progress < .25) {
                                ctx.fillRect(0, 0, screen_1.width, screen_1.height * progress * 2);
                                ctx.fillRect(0, screen_1.height / 2 + screen_1.height / 2 - screen_1.height * progress * 2, screen_1.width, screen_1.height * progress * 2);
                            }
                            else if (progress < .75) {
                                ctx.fillRect(0, 0, screen_1.width, screen_1.height);
                                _this.drawStageNumber(ctx, _this._game.gameData.levelData.levelId);
                            }
                            else if (progress < 1) {
                                var closingProgress = progress - .75;
                                console.log();
                                ctx.fillStyle = DRAWING_CONST.colors.background_frame;
                                ctx.fillRect(0, 0, screen_1.width, screen_1.height / 2 - (screen_1.height * (closingProgress * 2)));
                                ctx.fillRect(0, screen_1.height / 2 + (screen_1.height * (closingProgress * 2)), screen_1.width, screen_1.height);
                            }
                            else {
                                animation.expire();
                            }
                            ctx.restore();
                            break;
                    }
                    break;
            }
        });
    };
    Renderer.prototype.drawStageNumber = function (ctx, number) {
        var _this = this;
        var stage = _Sprite_SpriteDefinition__WEBPACK_IMPORTED_MODULE_0__["default"].SYSTEM.STAGE;
        var numbers = [];
        var number_str = number.toString();
        for (var i = number_str.length - 1; i >= 0; i--) {
            numbers.push(_Sprite_SpriteDefinition__WEBPACK_IMPORTED_MODULE_0__["default"].SYSTEM.NUMBER[parseInt(number_str.charAt(i))]);
        }
        ctx.drawImage(this._mainSprite, stage.position.x, stage.position.y, stage.size.width, stage.size.height, ctx.canvas.clientWidth / 2 - stage.size.width * (4 / 5), ctx.canvas.clientHeight / 2 - stage.size.height, stage.size.width, stage.size.height);
        numbers.forEach(function (number, index) {
            ctx.drawImage(_this._mainSprite, number.position.x, number.position.y, number.size.width, number.size.height, ctx.canvas.clientWidth / 2 + number.size.width * (4 - index - 1), ctx.canvas.clientHeight / 2 - number.size.height, number.size.width, number.size.height);
        });
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
        var SPRITE_FRAME = Object(_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_2__["getSystemSprite"])("FRAME" /* FRAME */);
        var SPRITE_TANK_ICON = Object(_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_2__["getSystemSprite"])("TANK_ICON" /* TANK_ICON */);
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
        this.drawSprite(ctx, Object(_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_2__["getSystemSprite"])("NUMBER" /* NUMBER */, this._game.gameData.playerData[0].life), { x: ctx.canvas.clientWidth - FRAME.right + 32, y: 288 });
        // P2 life
        if (this._game.gameData.playerData.length > 1) {
            this.drawSprite(ctx, Object(_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_2__["getSystemSprite"])("NUMBER" /* NUMBER */, this._game.gameData.playerData[1].life), { x: ctx.canvas.clientWidth - FRAME.right + 32, y: 336 });
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
                this.drawSprite(ctx, Object(_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_2__["getSystemSprite"])("NUMBER" /* NUMBER */, Math.floor(levelId / 10)), { x: ctx.canvas.clientWidth - FRAME.right + 16, y: 400 });
            }
            this.drawSprite(ctx, Object(_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_2__["getSystemSprite"])("NUMBER" /* NUMBER */, levelId % 10), { x: ctx.canvas.clientWidth - FRAME.right + 32, y: 400 });
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
            var sprite = Object(_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_2__["getSpriteData"])(object);
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
        var size = Object(_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_2__["getSpriteData"])(object).size;
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
            x: Object(_Utils_Utils__WEBPACK_IMPORTED_MODULE_3__["getRandomRange"])(DRAWING_CONST.sizes.frame.left, this._canvas.width - DRAWING_CONST.sizes.frame.right - size.width),
            y: Object(_Utils_Utils__WEBPACK_IMPORTED_MODULE_3__["getRandomRange"])(DRAWING_CONST.sizes.frame.top, this._canvas.height - DRAWING_CONST.sizes.frame.bottom - size.height),
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
        ],
        CURTAIN: [
            {
                position: { x: 0, y: 0 }, size: { width: 0, height: 0 }
            }
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
/*! exports provided: deepClone, Guid, max, min, getRandomRange, removeDuplicate, getRandomEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepClone", function() { return deepClone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Guid", function() { return Guid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomRange", function() { return getRandomRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeDuplicate", function() { return removeDuplicate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomEnum", function() { return getRandomEnum; });
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
function getRandomEnum(anEnum) {
    var enumValues = Object.values(anEnum);
    var randomIndex = getRandomRange(0, enumValues.length - 1);
    var randomEnumValue = enumValues[randomIndex];
    return randomEnumValue;
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
mainTank_hit.addEventListener("click", function () { game.mainTank.destroy(); });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvR2FtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9JbnB1dE1hbmFnZXIvRUtleXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvSW5wdXRNYW5hZ2VyL0lucHV0TWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9MZXZlbC9EZWZhdWx0TGV2ZWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL0xldmVsL0lMZXZlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9PYmplY3QvQW5pbWF0aW9uT2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL09iamVjdC9CbG9ja09iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9PYmplY3QvQnVsbGV0T2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL09iamVjdC9FbnVtL0VBbmltYXRpb25UeXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL09iamVjdC9FbnVtL0VJdGVtVHlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9PYmplY3QvRW51bS9FVGFua1R5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvT2JqZWN0L0dhbWVPYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvT2JqZWN0L0l0ZW1PYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvT2JqZWN0L01vdmluZ09iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9PYmplY3QvVGFua0FJT2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL09iamVjdC9UYW5rT2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9SZW5kZXIvUmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlbmRlci9TcHJpdGUvU3ByaXRlRGF0YS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVuZGVyL1Nwcml0ZS9TcHJpdGVEZWZpbml0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9SZW5kZXIvU3ByaXRlL3Nwcml0ZV9tYWluLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVuZGVyL1Nwcml0ZS9zcHJpdGVfdGl0bGUucG5nIiwid2VicGFjazovLy8uL3NyYy9VdGlscy9Db2xsaXNpb25UZXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9VdGlscy9VdGlscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE2RDtBQUNoQjtBQUNBO0FBQ1E7QUFDb0Q7QUFDOUM7QUFD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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNjLDJFQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUN2STVCO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsY0FBYztBQUN6QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsY0FBYztBQUN6QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGNBQWM7QUFDekM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGNBQWM7QUFDekM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGNBQWM7QUFDekM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixjQUFjO0FBQ3pDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsY0FBYztBQUN6QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGNBQWM7QUFDekM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixjQUFjO0FBQ3pDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsY0FBYztBQUN6QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsY0FBYztBQUN6QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGNBQWM7QUFDekM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixjQUFjO0FBQ3pDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsY0FBYztBQUN6QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGNBQWM7QUFDekM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixjQUFjO0FBQ3pDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsZUFBZTtBQUMxQztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGNBQWM7QUFDekM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixjQUFjO0FBQ3pDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsY0FBYztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGNBQWM7QUFDekM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixjQUFjO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsY0FBYztBQUN6QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGVBQWU7QUFDMUM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixjQUFjO0FBQ3pDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsY0FBYztBQUN6QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGNBQWM7QUFDekM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZSw0RUFBYSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDMWI3QjtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDZEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3QjtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ3ZGLDZCQUE2Qix1REFBdUQ7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDO0FBQ3FDO0FBQ0c7QUFDcUI7QUFDQztBQUMvRDtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsY0FBYztBQUM1QztBQUNBO0FBQ0EsaUJBQWlCLGlEQUFJO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHVFQUFVO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsZUFBZTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwrRUFBYTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLENBQUMsbURBQVU7QUFDRyw4RUFBZSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDbEcvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDdkYsNkJBQTZCLHVEQUF1RDtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDcUM7QUFDb0I7QUFDaEI7QUFDcUI7QUFDQTtBQUN4RDtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRSxpREFBSTtBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHdCQUF3QiwrRUFBYTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxxREFBWTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLCtFQUFhO0FBQ3JDLDZCQUE2QiwrRUFBa0I7QUFDL0MsbUJBQW1CLG9FQUFlO0FBQ2xDO0FBQ0EsU0FBUztBQUNULG1CQUFtQixvRUFBZTtBQUNsQztBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsQ0FBQyxtREFBVTtBQUNHLDBFQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUN4SzNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0I7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN2Riw2QkFBNkIsdURBQXVEO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQztBQUM0RDtBQUNFO0FBQ3hEO0FBQ0E7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFFBQVEsbUVBQWE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLCtFQUFhO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsQ0FBQyxxREFBWTtBQUNDLDJFQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNqRzVCO0FBQUE7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxnQkFBZ0IsRUFBRTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLDJFQUFnQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QywyRUFBZ0I7QUFDNUQ7QUFDQTtBQUNBLCtDQUErQyx3RUFBYTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxpRUFBWTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QixFQUFFO0FBQ3JGLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGO0FBQ0E7QUFDQSxxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRixxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRjtBQUNBO0FBQ0EscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckYscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckY7QUFDQTtBQUNBLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRixxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRjtBQUNBO0FBQ0EscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckYscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckY7QUFDQTtBQUNBLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGO0FBQ0E7QUFDQSxxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRixxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVB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O0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDL0ZBO0FBQUE7QUFBQTtBQUErQjtBQUNVO0FBQ3pDLHNCQUFzQixtQkFBTyxDQUFDLDRFQUFpQztBQUMvRCx1QkFBdUIsbUJBQU8sQ0FBQyw4RUFBa0M7QUFDakU7QUFDQTtBQUNBLGVBQWUsa0RBQUk7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELHVEQUF1RCxjQUFjLEVBQUU7QUFDdkUsdURBQXVELGNBQWMsRUFBRTtBQUN2RSwyREFBMkQsNEJBQTRCLEVBQUU7QUFDekYsb0RBQW9ELHlCQUF5QixFQUFFO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0Msd0RBQVE7QUFDaEQsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgUmVuZGVyZXIsIHsgRFJBV0lOR19DT05TVCB9IGZyb20gXCIuLi9SZW5kZXIvUmVuZGVyZXJcIjtcclxuaW1wb3J0IEdhbWVPYmplY3QgZnJvbSBcIi4vT2JqZWN0L0dhbWVPYmplY3RcIjtcclxuaW1wb3J0IFRhbmtPYmplY3QgZnJvbSBcIi4vT2JqZWN0L1RhbmtPYmplY3RcIjtcclxuaW1wb3J0IHsgZ2V0VG90YWxPZlRhbmtHcm91cCB9IGZyb20gXCIuL0xldmVsL0lMZXZlbFwiO1xyXG5pbXBvcnQgeyBCbG9ja0NvbGxpc2lvblRlc3QsIE9iamVjdENvbGxpc2lvblRlc3QsIFJlY3RhbmdsZUNvbGxpc2lvblRlc3QgfSBmcm9tIFwiLi4vVXRpbHMvQ29sbGlzaW9uVGVzdFwiO1xyXG5pbXBvcnQgU1BSVElFX0RFRiBmcm9tIFwiLi4vUmVuZGVyL1Nwcml0ZS9TcHJpdGVEZWZpbml0aW9uXCI7XHJcbmltcG9ydCBBbmltYXRpb25PYmplY3QgZnJvbSBcIi4vT2JqZWN0L0FuaW1hdGlvbk9iamVjdFwiO1xyXG5pbXBvcnQgeyBBbmltYXRpb25EZWZhdWx0cyB9IGZyb20gXCIuL09iamVjdC9FbnVtL0VBbmltYXRpb25UeXBlXCI7XHJcbmltcG9ydCBCbG9ja09iamVjdCBmcm9tIFwiLi9PYmplY3QvQmxvY2tPYmplY3RcIjtcclxuaW1wb3J0IHsgRW5lbXlUeXBlIH0gZnJvbSBcIi4vT2JqZWN0L0VudW0vRVRhbmtUeXBlXCI7XHJcbmltcG9ydCB7IGdldFNwcml0ZURhdGEsIGdldE9iamVjdFNpemUgfSBmcm9tIFwiLi4vUmVuZGVyL1Nwcml0ZS9TcHJpdGVEYXRhXCI7XHJcbmltcG9ydCBEZWZhdWx0TGV2ZWxzIGZyb20gXCIuL0xldmVsL0RlZmF1bHRMZXZlbHNcIjtcclxuaW1wb3J0IElucHV0TWFuYWdlciBmcm9tIFwiLi9JbnB1dE1hbmFnZXIvSW5wdXRNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IGdldFJhbmRvbVJhbmdlLCBnZXRSYW5kb21FbnVtLCBkZWVwQ2xvbmUgfSBmcm9tIFwiLi4vVXRpbHMvVXRpbHNcIjtcclxuaW1wb3J0IFRhbmtBSU9CamVjdCBmcm9tIFwiLi9PYmplY3QvVGFua0FJT2JqZWN0XCI7XHJcbmltcG9ydCBFSXRlbVR5cGUgZnJvbSBcIi4vT2JqZWN0L0VudW0vRUl0ZW1UeXBlXCI7XHJcbmltcG9ydCBJdGVtT2JqZWN0IGZyb20gXCIuL09iamVjdC9JdGVtT2JqZWN0XCI7XHJcbmV4cG9ydCB2YXIgTUFJTl9UQU5LX0lEID0gJ01BSU4nO1xyXG5leHBvcnQgdmFyIE1BWElNVU1fVEFOS1MgPSA0O1xyXG5leHBvcnQgdmFyIFRBTktfU1BBV05fREVMQVkgPSAyNTAwO1xyXG5leHBvcnQgdmFyIFRBTktfU1BBV05fUE9JTlQgPSB7XHJcbiAgICBQTEFZRVJfVEFOSzogW1xyXG4gICAgICAgIHsgeDogNCwgeTogMTIgfSxcclxuICAgICAgICB7IHg6IDgsIHk6IDEyIH1cclxuICAgIF0sXHJcbiAgICBFTkVNWV9UQU5LOiBbXHJcbiAgICAgICAgeyB4OiAwLCB5OiAwIH0sXHJcbiAgICAgICAgeyB4OiA2LCB5OiAwIH0sXHJcbiAgICAgICAgeyB4OiAxMiwgeTogMCB9XHJcbiAgICBdXHJcbn07XHJcbnZhciBHYW1lID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gR2FtZShzY3JlZW4sIHNwcml0ZV9tYWluX3NyYywgc3ByaXRlX3RpdGxlX3NyYywgZGVidWcpIHtcclxuICAgICAgICB0aGlzLmRlYnVnID0gZGVidWc7XHJcbiAgICAgICAgdGhpcy5fb2JqZWN0cyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2xhc3RTcGF3biA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIHRoaXMuX3BhdXNlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIodGhpcywgc2NyZWVuLCBzcHJpdGVfbWFpbl9zcmMsIHNwcml0ZV90aXRsZV9zcmMpO1xyXG4gICAgICAgIHRoaXMuX2lucHV0TWFuYWdlciA9IG5ldyBJbnB1dE1hbmFnZXIodGhpcyk7XHJcbiAgICAgICAgc2NyZWVuLmZvY3VzKCk7XHJcbiAgICAgICAgdGhpcy5zaG93VGl0bGUoKTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHYW1lLnByb3RvdHlwZSwgXCJtYWluVGFua1wiLCB7XHJcbiAgICAgICAgLy8jcmVnaW9uIGdldHRlciBhbmQgc2V0dGVyXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBmb3VuZCA9IHRoaXMuZmluZE9iamVjdEJ5SWQoTUFJTl9UQU5LX0lEKTtcclxuICAgICAgICAgICAgaWYgKGZvdW5kLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmb3VuZFswXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEdhbWUucHJvdG90eXBlLCBcIm9iamVjdHNcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fb2JqZWN0cztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoR2FtZS5wcm90b3R5cGUsIFwicGF1c2VcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcGF1c2U7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChwYXVzZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9wYXVzZSA9IHBhdXNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHYW1lLnByb3RvdHlwZSwgXCJrZXlTdGF0ZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbnB1dE1hbmFnZXIua2V5U3RhdGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEdhbWUucHJvdG90eXBlLCBcImdhbWVEYXRhXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dhbWVEYXRhO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHYW1lLnByb3RvdHlwZSwgXCJjdXJyZW50TWVudVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50TWVudTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoR2FtZS5wcm90b3R5cGUsIFwiY3Vyc29ySW5kZXhcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW5wdXRNYW5hZ2VyLmN1cnNvckluZGV4O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIC8vI2VuZHJlZ2lvblxyXG4gICAgLy8jcmVnaW9uIHB1YmxpYyBtZXRob2RzXHJcbiAgICAvLyNyZWdpb24gZGVidWcgbWV0aG9kc1xyXG4gICAgR2FtZS5wcm90b3R5cGUubG9nID0gZnVuY3Rpb24gKG1zZykge1xyXG4gICAgICAgIGlmICh0aGlzLmRlYnVnKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW1wiICsgcGVyZm9ybWFuY2Uubm93KCkgKyBcIl0gXCIgKyBtc2cpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvLyNlbmRyZWdpb25cclxuICAgIC8vI3JlZ2lvbiBnYW1lIG9iamVjdCBtZXRob2RzXHJcbiAgICBHYW1lLnByb3RvdHlwZS5pbnNlcnRPYmplY3QgPSBmdW5jdGlvbiAob2JqZWN0KSB7XHJcbiAgICAgICAgdGhpcy5fb2JqZWN0cy5wdXNoKG9iamVjdCk7XHJcbiAgICAgICAgdGhpcy5zb3J0T2JqZWN0KCk7XHJcbiAgICB9O1xyXG4gICAgR2FtZS5wcm90b3R5cGUucmVtb3ZlT2JqZWN0ID0gZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgICAgIHZhciBpZHggPSB0aGlzLl9vYmplY3RzLmluZGV4T2Yob2JqZWN0KTtcclxuICAgICAgICB0aGlzLl9vYmplY3RzLnNwbGljZShpZHgsIDEpO1xyXG4gICAgICAgIHRoaXMuc29ydE9iamVjdCgpO1xyXG4gICAgfTtcclxuICAgIEdhbWUucHJvdG90eXBlLnNvcnRPYmplY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2dhbWVEYXRhID09IG51bGwgfHwgdGhpcy5fb2JqZWN0cyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fb2JqZWN0cy5zb3J0KGZ1bmN0aW9uIChvYmoxLCBvYmoyKSB7XHJcbiAgICAgICAgICAgIHZhciB6aW5kZXgxID0gUmVuZGVyZXIuZ2V0T2JqZWN0WkluZGV4KG9iajEpO1xyXG4gICAgICAgICAgICB2YXIgemluZGV4MiA9IFJlbmRlcmVyLmdldE9iamVjdFpJbmRleChvYmoyKTtcclxuICAgICAgICAgICAgcmV0dXJuIHppbmRleDEgLSB6aW5kZXgyO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEdhbWUucHJvdG90eXBlLmZpbmRPYmplY3RCeUlkID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX29iamVjdHMuZmlsdGVyKGZ1bmN0aW9uIChvYmplY3QpIHsgcmV0dXJuIG9iamVjdC5pZCA9PT0gaWQ7IH0pO1xyXG4gICAgfTtcclxuICAgIEdhbWUucHJvdG90eXBlLmNvbGxpc2lvblRlc3QgPSBmdW5jdGlvbiAob2JqZWN0KSB7XHJcbiAgICAgICAgdmFyIGZvdW5kID0gW107XHJcbiAgICAgICAgaWYgKHRoaXMuX2dhbWVEYXRhID09IG51bGwgfHwgdGhpcy5fb2JqZWN0cyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmb3VuZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fb2JqZWN0cy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtID09IG9iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpdGVtLm9iamVjdFR5cGUgPT09IFwiQU5JTUFUSU9OXCIgLyogQU5JTUFUSU9OICovKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoaXRlbS5vYmplY3RUeXBlID09PSBcIkJMT0NLXCIgLyogQkxPQ0sgKi8pIHtcclxuICAgICAgICAgICAgICAgIHZhciBibG9ja1R5cGUgPSBpdGVtLmJsb2NrVHlwZTtcclxuICAgICAgICAgICAgICAgIGlmICgob2JqZWN0Lm9iamVjdFR5cGUgPT09IFwiVEFOS1wiIC8qIFRBTksgKi8gfHwgb2JqZWN0Lm9iamVjdFR5cGUgPT09IFwiQlVMTEVUXCIgLyogQlVMTEVUICovKSAmJiBibG9ja1R5cGUgPT09IFwiQlVTSFwiIC8qIEJVU0ggKi8pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0Lm9iamVjdFR5cGUgPT09IFwiQlVMTEVUXCIgLyogQlVMTEVUICovICYmIGJsb2NrVHlwZSA9PT0gXCJXQVRFUlwiIC8qIFdBVEVSICovKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGl0ZW0ub2JqZWN0VHlwZSA9PT0gXCJUQU5LXCIgLyogVEFOSyAqLykge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC5vYmplY3RUeXBlID09PSBcIkJVTExFVFwiIC8qIEJVTExFVCAqLykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmlkID09PSBvYmplY3QucGFyZW50SWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS52aXNpYmxlID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGl0ZW0ub2JqZWN0VHlwZSA9PT0gXCJCVUxMRVRcIiAvKiBCVUxMRVQgKi8pIHtcclxuICAgICAgICAgICAgICAgIGlmIChvYmplY3Qub2JqZWN0VHlwZSA9PT0gXCJUQU5LXCIgLyogVEFOSyAqLykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChpdGVtLm9iamVjdFR5cGUgPT09IFwiSVRFTVwiIC8qIElURU0gKi8pIHtcclxuICAgICAgICAgICAgICAgIGlmIChvYmplY3Qub2JqZWN0VHlwZSA9PT0gXCJCVUxMRVRcIiAvKiBCVUxMRVQgKi8pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHRlc3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKGl0ZW0ub2JqZWN0VHlwZSA9PT0gXCJCTE9DS1wiIC8qIEJMT0NLICovKSB7XHJcbiAgICAgICAgICAgICAgICB0ZXN0ID0gQmxvY2tDb2xsaXNpb25UZXN0KGl0ZW0sIG9iamVjdCkubGVuZ3RoID4gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRlc3QgPSBPYmplY3RDb2xsaXNpb25UZXN0KG9iamVjdCwgaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRlc3QgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGZvdW5kLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gZm91bmQ7XHJcbiAgICB9O1xyXG4gICAgR2FtZS5wcm90b3R5cGUuc3RhcnRBbmltYXRpb24gPSBmdW5jdGlvbiAodGFyZ2V0LCBhbmltYXRpb25UeXBlLCBhbmltYXRpb25WYWx1ZSwgY2FsbGJhY2spIHtcclxuICAgICAgICB2YXIgYW5pbWF0aW9uUG9pbnQ7XHJcbiAgICAgICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEdhbWVPYmplY3QpIHtcclxuICAgICAgICAgICAgdmFyIG9iamVjdCA9IHRhcmdldDtcclxuICAgICAgICAgICAgdmFyIHNpemUgPSBnZXRTcHJpdGVEYXRhKG9iamVjdCkuc2l6ZTtcclxuICAgICAgICAgICAgYW5pbWF0aW9uUG9pbnQgPSB7XHJcbiAgICAgICAgICAgICAgICB4OiBvYmplY3QucG9zaXRpb24ueCArIHNpemUud2lkdGggLyAyLFxyXG4gICAgICAgICAgICAgICAgeTogb2JqZWN0LnBvc2l0aW9uLnkgKyBzaXplLmhlaWdodCAvIDJcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvblBvaW50ID0gdGFyZ2V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYW5pbWF0aW9uVmFsdWUgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvblZhbHVlID0gQW5pbWF0aW9uRGVmYXVsdHNbYW5pbWF0aW9uVHlwZV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBhbmltYXRpb24gPSBuZXcgQW5pbWF0aW9uT2JqZWN0KHRoaXMsIG51bGwsIGFuaW1hdGlvblR5cGUsIGFuaW1hdGlvblBvaW50LCBhbmltYXRpb25WYWx1ZS5kdXJhdGlvbiwgYW5pbWF0aW9uVmFsdWUuZnJhbWVSYXRlLCBhbmltYXRpb25WYWx1ZS5sb29wLCBjYWxsYmFjayk7XHJcbiAgICAgICAgdGhpcy5pbnNlcnRPYmplY3QoYW5pbWF0aW9uKTtcclxuICAgIH07XHJcbiAgICAvLyNyZWdpb24gcmVuZGVyZXIgcG9ydGluZyBtZXRob2RzXHJcbiAgICAvKipcclxuICAgICAqIFRlc3Qgb2JqZWN0IGlzIHZpc2libGUgKFBvcnQgb2YgUmVuZGVyZXIudGVzdFZpc2liaWxpdHkpXHJcbiAgICAgKiBAcGFyYW0gb2JqZWN0IG9iamVjdCBmb3IgdGVzdFxyXG4gICAgICogQHBhcmFtIHNwcml0ZSBvYmplY3QncyBzcHJpdGUgZGF0YSBmb3Igc2l6ZVxyXG4gICAgICovXHJcbiAgICBHYW1lLnByb3RvdHlwZS50ZXN0VmlzaWJpbGl0eSA9IGZ1bmN0aW9uIChvYmplY3QpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVyZXIub2JqZWN0VmlzaWJsZVRlc3Qob2JqZWN0KTtcclxuICAgIH07XHJcbiAgICAvLyNlbmRyZWdpb25cclxuICAgIC8vI2VuZHJlZ2lvblxyXG4gICAgR2FtZS5wcm90b3R5cGUubmV3R2FtZSA9IGZ1bmN0aW9uIChwbGF5ZXJDb3VudCwgbGV2ZWxJZCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICB0aGlzLl9jdXJyZW50TWVudSA9IFwiR0FNRVwiIC8qIEdBTUUgKi87XHJcbiAgICAgICAgdGhpcy5fb2JqZWN0cyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2dhbWVEYXRhID0ge307XHJcbiAgICAgICAgdmFyIGdhbWVkYXRhID0gdGhpcy5fZ2FtZURhdGE7XHJcbiAgICAgICAgdmFyIHBsYXllckRhdGEgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBsYXllckNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgcGxheWVyRGF0YS5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGxpZmU6IDUsXHJcbiAgICAgICAgICAgICAgICBzY29yZTogMCxcclxuICAgICAgICAgICAgICAgIGRlc3Ryb3llZFRhbms6IHt9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnYW1lZGF0YS5nYW1lVHlwZSA9IDAgLyogUFZFICovO1xyXG4gICAgICAgIGdhbWVkYXRhLnBsYXllckRhdGEgPSBwbGF5ZXJEYXRhO1xyXG4gICAgICAgIGdhbWVkYXRhLmdhbWVPdmVyID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKGxldmVsSWQgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmV3TGV2ZWwobGV2ZWxJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mICgoX2EgPSBnYW1lZGF0YS5sZXZlbERhdGEpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5sZXZlbElkKSA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXdMZXZlbChnYW1lZGF0YS5sZXZlbERhdGEubGV2ZWxJZCArIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXdMZXZlbCgxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBHYW1lLnByb3RvdHlwZS5uZXdMZXZlbCA9IGZ1bmN0aW9uIChsZXZlbElkKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLl9jdXJyZW50TWVudSA9IFwiU1RBR0VcIiAvKiBTVEFHRSAqLztcclxuICAgICAgICB0aGlzLl9vYmplY3RzID0gW107XHJcbiAgICAgICAgdGhpcy5fZ2FtZURhdGEubGV2ZWxEYXRhID0gZGVlcENsb25lKERlZmF1bHRMZXZlbHMuZmluZChmdW5jdGlvbiAobGV2ZWwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGxldmVsLmxldmVsSWQgPT09IGxldmVsSWQ7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIHRoaXMuc2hvd0N1cnRhaW4oKTtcclxuICAgICAgICB0aGlzLnNwYXduVGFuayhcIlBMQVlFUl9UQU5LXCIgLyogUExBWUVSX1RBTksgKi8sIHRydWUsIDApO1xyXG4gICAgICAgIGlmICh0aGlzLmdhbWVEYXRhLnBsYXllckRhdGEubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnNwYXduVGFuayhcIlBMQVlFUl9UQU5LXCIgLyogUExBWUVSX1RBTksgKi8sIHRydWUsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9nYW1lRGF0YS5sZXZlbERhdGEuYmxvY2tzLmZvckVhY2goZnVuY3Rpb24gKGJsb2NrKSB7XHJcbiAgICAgICAgICAgIF90aGlzLmluc2VydE9iamVjdChuZXcgQmxvY2tPYmplY3QoX3RoaXMsIGJsb2NrLnR5cGUsIHtcclxuICAgICAgICAgICAgICAgIHg6IERSQVdJTkdfQ09OU1Quc2l6ZXMuZnJhbWUubGVmdCArIGJsb2NrLnBvc2l0aW9uLnggKiAzMixcclxuICAgICAgICAgICAgICAgIHk6IERSQVdJTkdfQ09OU1Quc2l6ZXMuZnJhbWUudG9wICsgYmxvY2sucG9zaXRpb24ueSAqIDMyXHJcbiAgICAgICAgICAgIH0sIGJsb2NrLmJsb2NrU3RhdGUpKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBHYW1lLnByb3RvdHlwZS5zaG93Q3VydGFpbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRNZW51ID0gXCJTVEFHRVwiIC8qIFNUQUdFICovO1xyXG4gICAgICAgIHRoaXMuX29iamVjdHMgPSBbXTtcclxuICAgICAgICB0aGlzLnN0YXJ0QW5pbWF0aW9uKHsgeDogMCwgeTogMCB9LCBcIkNVUlRBSU5cIiAvKiBDVVJUQUlOICovLCBudWxsLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIF90aGlzLl9jdXJyZW50TWVudSA9IFwiR0FNRVwiIC8qIEdBTUUgKi87XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgR2FtZS5wcm90b3R5cGUuc2V0UGF1c2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5fcGF1c2UgPSB0cnVlO1xyXG4gICAgICAgIHZhciBGUkFNRSA9IERSQVdJTkdfQ09OU1Quc2l6ZXMuZnJhbWU7XHJcbiAgICAgICAgdmFyIFNDUkVFTiA9IERSQVdJTkdfQ09OU1Quc2l6ZXMuc2NyZWVuO1xyXG4gICAgICAgIHRoaXMuc3RhcnRBbmltYXRpb24oe1xyXG4gICAgICAgICAgICB4OiBGUkFNRS5sZWZ0ICsgU0NSRUVOLndpZHRoIC8gMixcclxuICAgICAgICAgICAgeTogKEZSQU1FLnRvcCArIEZSQU1FLmJvdHRvbSArIFNDUkVFTi5oZWlnaHQpIC8gMiArIFNQUlRJRV9ERUYuQU5JTUFUSU9OLlBBVVNFWzBdLnNpemUuaGVpZ2h0IC8gMlxyXG4gICAgICAgIH0sIFwiUEFVU0VcIiAvKiBQQVVTRSAqLyk7XHJcbiAgICB9O1xyXG4gICAgR2FtZS5wcm90b3R5cGUuZ2FtZW92ZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBpZiAodGhpcy5nYW1lRGF0YS5nYW1lT3Zlcikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2FtZURhdGEuZ2FtZU92ZXIgPSB0cnVlO1xyXG4gICAgICAgIHZhciBGUkFNRSA9IERSQVdJTkdfQ09OU1Quc2l6ZXMuZnJhbWU7XHJcbiAgICAgICAgdmFyIFNDUkVFTiA9IERSQVdJTkdfQ09OU1Quc2l6ZXMuc2NyZWVuO1xyXG4gICAgICAgIHRoaXMuc3RhcnRBbmltYXRpb24oe1xyXG4gICAgICAgICAgICB4OiBGUkFNRS5sZWZ0ICsgU0NSRUVOLndpZHRoIC8gMixcclxuICAgICAgICAgICAgeTogRlJBTUUudG9wICsgRlJBTUUuYm90dG9tICsgU0NSRUVOLmhlaWdodFxyXG4gICAgICAgIH0sIFwiR0FNRU9WRVJcIiAvKiBHQU1FT1ZFUiAqLywgbnVsbCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBfdGhpcy5zaG93UmVzdWx0U2NyZWVuKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgR2FtZS5wcm90b3R5cGUuc2hvd1Jlc3VsdFNjcmVlbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICBHYW1lLnByb3RvdHlwZS5zaG93VGl0bGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLl9jdXJyZW50TWVudSA9IFwiTUFJTlwiIC8qIE1BSU4gKi87XHJcbiAgICAgICAgdGhpcy5fb2JqZWN0cyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnRpdGxlU2hvd24gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9pbnB1dE1hbmFnZXIuaW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIHZhciBGUkFNRSA9IERSQVdJTkdfQ09OU1Quc2l6ZXMuZnJhbWU7XHJcbiAgICAgICAgdmFyIFNDUkVFTiA9IERSQVdJTkdfQ09OU1Quc2l6ZXMuc2NyZWVuO1xyXG4gICAgICAgIHRoaXMuc3RhcnRBbmltYXRpb24oe1xyXG4gICAgICAgICAgICB4OiAoRlJBTUUubGVmdCArIFNDUkVFTi53aWR0aCArIEZSQU1FLnJpZ2h0KSAvIDIsXHJcbiAgICAgICAgICAgIHk6IChGUkFNRS50b3AgKyBTQ1JFRU4ud2lkdGggKyBGUkFNRS5ib3R0b20pICogMS41XHJcbiAgICAgICAgfSwgXCJUSVRMRVwiIC8qIFRJVExFICovLCBudWxsLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIF90aGlzLnN0YXJ0QW5pbWF0aW9uKHtcclxuICAgICAgICAgICAgICAgIHg6IDEyOSArIDE2LFxyXG4gICAgICAgICAgICAgICAgeTogMjY1ICsgX3RoaXMuY3Vyc29ySW5kZXggKiAzMiArIDE2XHJcbiAgICAgICAgICAgIH0sIFwiQ1VSU09SXCIgLyogQ1VSU09SICovKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvLyNlbmRyZWdpb25cclxuICAgIC8vI3JlZ2lvbiBwcml2YXRlIG1ldGhvZHNcclxuICAgIEdhbWUucHJvdG90eXBlLnNwYXduVGFuayA9IGZ1bmN0aW9uICh0YW5rVHlwZSwgZnJlZVNwYXduLCBwbGF5ZXJJbmRleCkge1xyXG4gICAgICAgIGlmIChmcmVlU3Bhd24gPT09IHZvaWQgMCkgeyBmcmVlU3Bhd24gPSBmYWxzZTsgfVxyXG4gICAgICAgIGlmICh0YW5rVHlwZSA9PT0gXCJQTEFZRVJfVEFOS1wiIC8qIFBMQVlFUl9UQU5LICovKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9nYW1lRGF0YS5wbGF5ZXJEYXRhW3BsYXllckluZGV4XS5saWZlIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgdGFua0NvbG9yID0gdm9pZCAwO1xyXG4gICAgICAgICAgICBpZiAocGxheWVySW5kZXggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRhbmtDb2xvciA9IFwiWUVMTE9XXCIgLyogWUVMTE9XICovO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGFua0NvbG9yID0gXCJHUkVFTlwiIC8qIEdSRUVOICovO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBwb3NpdGlvbiA9IFRBTktfU1BBV05fUE9JTlRbdGFua1R5cGVdW3BsYXllckluZGV4XTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVQbGF5ZXJUYW5rKHtcclxuICAgICAgICAgICAgICAgIHg6IERSQVdJTkdfQ09OU1Quc2l6ZXMuZnJhbWUubGVmdCArIHBvc2l0aW9uLnggKiBnZXRPYmplY3RTaXplKFwiVEFOS1wiIC8qIFRBTksgKi8pLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgeTogRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS50b3AgKyBwb3NpdGlvbi55ICogZ2V0T2JqZWN0U2l6ZShcIlRBTktcIiAvKiBUQU5LICovKS5oZWlnaHQsXHJcbiAgICAgICAgICAgIH0sIFwidXBcIiAvKiB1cCAqLywgdGFua0NvbG9yLCAwKTtcclxuICAgICAgICAgICAgaWYgKGZyZWVTcGF3biA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2dhbWVEYXRhLnBsYXllckRhdGFbcGxheWVySW5kZXhdLmxpZmUtLTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0YW5rVHlwZSA9PT0gXCJFTkVNWV9UQU5LXCIgLyogRU5FTVlfVEFOSyAqLykge1xyXG4gICAgICAgICAgICB2YXIgbm93ID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgICAgIGlmIChub3cgLSB0aGlzLl9sYXN0U3Bhd24gPiBUQU5LX1NQQVdOX0RFTEFZKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sYXN0U3Bhd24gPSBub3c7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGFua3MgPSB0aGlzLl9vYmplY3RzLmZpbHRlcihmdW5jdGlvbiAoeCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB4Lm9iamVjdFR5cGUgPT09IFwiVEFOS1wiIC8qIFRBTksgKi8gJiYgeC50YW5rVHlwZSA9PT0gXCJFTkVNWV9UQU5LXCIgLyogRU5FTVlfVEFOSyAqLztcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRhbmtzLmxlbmd0aCA+PSBNQVhJTVVNX1RBTktTKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVFbmVteVRhbmsoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBHYW1lLnByb3RvdHlwZS5zcGF3bkl0ZW0gPSBmdW5jdGlvbiAoaXRlbVR5cGUsIHBvc2l0aW9uKSB7XHJcbiAgICAgICAgaWYgKGl0ZW1UeXBlID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBpdGVtVHlwZSA9IGdldFJhbmRvbUVudW0oRUl0ZW1UeXBlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBvc2l0aW9uID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBwb3NpdGlvbiA9IHRoaXMuX3JlbmRlcmVyLnJhbmRvbVBvaW50KGdldE9iamVjdFNpemUoXCJJVEVNXCIgLyogSVRFTSAqLykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmluc2VydE9iamVjdChuZXcgSXRlbU9iamVjdCh0aGlzLCBpdGVtVHlwZSwgcG9zaXRpb24pKTtcclxuICAgIH07XHJcbiAgICBHYW1lLnByb3RvdHlwZS5jcmVhdGVQbGF5ZXJUYW5rID0gZnVuY3Rpb24gKHBvc2l0aW9uLCBkaXJlY3Rpb24sIHRhbmtDb2xvciwgdGFua0xldmVsKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubWFpblRhbmspIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVPYmplY3QodGhpcy5tYWluVGFuayk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW5zZXJ0T2JqZWN0KG5ldyBUYW5rT2JqZWN0KHRoaXMsIFwiUExBWUVSX1RBTktcIiAvKiBQTEFZRVJfVEFOSyAqLywgcG9zaXRpb24sIGRpcmVjdGlvbiwgdGFua0NvbG9yLCB0YW5rTGV2ZWwsIE1BSU5fVEFOS19JRCkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubWFpblRhbmsgaW5zdGFuY2VvZiBUYW5rQUlPQmplY3QpO1xyXG4gICAgfTtcclxuICAgIEdhbWUucHJvdG90eXBlLmNyZWF0ZUVuZW15VGFuayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdGFua1NpemUgPSBnZXRPYmplY3RTaXplKFwiVEFOS1wiIC8qIFRBTksgKi8pO1xyXG4gICAgICAgIHZhciBzcGF3blBvaW50cyA9IFRBTktfU1BBV05fUE9JTlQuRU5FTVlfVEFOSztcclxuICAgICAgICB2YXIgYXZhaWxhYmxlUG9pbnRzID0gW107XHJcbiAgICAgICAgdmFyIG9iamVjdHMgPSB0aGlzLm9iamVjdHMuZmlsdGVyKGZ1bmN0aW9uIChvYmplY3QpIHsgcmV0dXJuIG9iamVjdC5vYmplY3RUeXBlID09PSBcIlRBTktcIiAvKiBUQU5LICovOyB9KTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNwYXduUG9pbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBzdWNjZXNzID0gdHJ1ZTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBvYmplY3RzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoUmVjdGFuZ2xlQ29sbGlzaW9uVGVzdCh0aGlzLnRyYW5zbGF0ZUJsb2NrUG9zaXRpb24oc3Bhd25Qb2ludHNbaV0pLCB0YW5rU2l6ZSwgb2JqZWN0c1tqXS5wb3NpdGlvbiwgdGFua1NpemUpID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgIGF2YWlsYWJsZVBvaW50cy5wdXNoKHNwYXduUG9pbnRzW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYXZhaWxhYmxlUG9pbnRzLmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xhc3RTcGF3biA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBpZHggPSBnZXRSYW5kb21SYW5nZSgwLCBhdmFpbGFibGVQb2ludHMubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gdGhpcy50cmFuc2xhdGVCbG9ja1Bvc2l0aW9uKGF2YWlsYWJsZVBvaW50c1tpZHhdKTtcclxuICAgICAgICB2YXIgbmV4dCA9IHRoaXMubmV4dFRhbmsoKTtcclxuICAgICAgICBpZiAobmV4dCA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmluc2VydE9iamVjdChuZXcgVGFua0FJT0JqZWN0KHRoaXMsIG5leHQudHlwZSwgbmV4dC5pdGVtLCBwb3NpdGlvbiwgXCJkb3duXCIgLyogZG93biAqLykpO1xyXG4gICAgfTtcclxuICAgIEdhbWUucHJvdG90eXBlLnRyYW5zbGF0ZUJsb2NrUG9zaXRpb24gPSBmdW5jdGlvbiAocG9pbnQpIHtcclxuICAgICAgICB2YXIgYmxvY2tTaXplID0gZ2V0T2JqZWN0U2l6ZShcIkJMT0NLXCIgLyogQkxPQ0sgKi8pO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHg6IERSQVdJTkdfQ09OU1Quc2l6ZXMuZnJhbWUubGVmdCArIHBvaW50LnggKiBibG9ja1NpemUud2lkdGgsXHJcbiAgICAgICAgICAgIHk6IERSQVdJTkdfQ09OU1Quc2l6ZXMuZnJhbWUudG9wICsgcG9pbnQueSAqIGJsb2NrU2l6ZS5oZWlnaHRcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIEdhbWUucHJvdG90eXBlLm5leHRUYW5rID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHRhbmtHcm91cHMgPSB0aGlzLl9nYW1lRGF0YS5sZXZlbERhdGEudGFua3M7XHJcbiAgICAgICAgdmFyIHR5cGU7XHJcbiAgICAgICAgdmFyIHN1bSA9IDA7XHJcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgICAgICB2YXIgdG90YWwgPSBnZXRUb3RhbE9mVGFua0dyb3VwKHRhbmtHcm91cHNbaV0pO1xyXG4gICAgICAgICAgICBpZiAodG90YWwgPiAwICYmIHR5cGUgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYXZhaWxhYmxlVHlwZXNfMSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhFbmVteVR5cGUpLmZvckVhY2goZnVuY3Rpb24gKHR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuX2dhbWVEYXRhLmxldmVsRGF0YS50YW5rc1tpXVt0eXBlXSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXZhaWxhYmxlVHlwZXNfMS5wdXNoKHR5cGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdHlwZSA9IGF2YWlsYWJsZVR5cGVzXzFbZ2V0UmFuZG9tUmFuZ2UoMCwgYXZhaWxhYmxlVHlwZXNfMS5sZW5ndGggLSAxKV07XHJcbiAgICAgICAgICAgICAgICB0aGlzXzEuX2dhbWVEYXRhLmxldmVsRGF0YS50YW5rc1tpXVt0eXBlXS0tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN1bSArPSB0b3RhbDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciB0aGlzXzEgPSB0aGlzO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFua0dyb3Vwcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBfbG9vcF8xKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3VtID4gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogdHlwZSxcclxuICAgICAgICAgICAgICAgIGl0ZW06ICgyMCAtIHN1bSkgJSA1ID09PSAwICYmIDIwIC0gc3VtID4gMFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gR2FtZTtcclxufSgpKTtcclxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcclxuIiwiZXhwb3J0IGZ1bmN0aW9uIEVLZXlzVG9FRGlyZWN0aW9uKGtleXMpIHtcclxuICAgIHN3aXRjaCAoa2V5cykge1xyXG4gICAgICAgIGNhc2UgXCJBcnJvd1VwXCIgLyogYXJyb3dfdXAgKi86XHJcbiAgICAgICAgICAgIHJldHVybiBcInVwXCIgLyogdXAgKi87XHJcbiAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIiAvKiBhcnJvd19yaWdodCAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIFwicmlnaHRcIiAvKiByaWdodCAqLztcclxuICAgICAgICBjYXNlIFwiQXJyb3dEb3duXCIgLyogYXJyb3dfZG93biAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIFwiZG93blwiIC8qIGRvd24gKi87XHJcbiAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiIC8qIGFycm93X2xlZnQgKi86XHJcbiAgICAgICAgICAgIHJldHVybiBcImxlZnRcIiAvKiBsZWZ0ICovO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEVLZXlzVG9FRGlyZWN0aW9uIH0gZnJvbSBcIi4vRUtleXNcIjtcclxudmFyIElucHV0TWFuYWdlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIElucHV0TWFuYWdlcihnYW1lKSB7XHJcbiAgICAgICAgdGhpcy5fZ2FtZSA9IGdhbWU7XHJcbiAgICAgICAgdGhpcy5fa2V5RXZlbnRzID0ge307XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XHJcbiAgICB9XHJcbiAgICBJbnB1dE1hbmFnZXIucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5fa2V5U3RhdGUgPSB7XHJcbiAgICAgICAgICAgIEFycm93RG93bjogZmFsc2UsXHJcbiAgICAgICAgICAgIEFycm93VXA6IGZhbHNlLFxyXG4gICAgICAgICAgICBBcnJvd1JpZ2h0OiBmYWxzZSxcclxuICAgICAgICAgICAgQXJyb3dMZWZ0OiBmYWxzZSxcclxuICAgICAgICAgICAgRXNjYXBlOiBmYWxzZSxcclxuICAgICAgICAgICAgU3BhY2U6IGZhbHNlXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9jdXJzb3JJbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5zZXRFdmVudHMoKTtcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSW5wdXRNYW5hZ2VyLnByb3RvdHlwZSwgXCJrZXlTdGF0ZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9rZXlTdGF0ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSW5wdXRNYW5hZ2VyLnByb3RvdHlwZSwgXCJjdXJzb3JJbmRleFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jdXJzb3JJbmRleDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBJbnB1dE1hbmFnZXIucHJvdG90eXBlLnNldEV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmICh0aGlzLl9rZXlFdmVudHMua2V5ZG93biAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9rZXlFdmVudHMua2V5ZG93bik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9rZXlFdmVudHMua2V5dXAgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuX2tleUV2ZW50cy5rZXl1cCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2tleUV2ZW50cy5rZXlkb3duID0gZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgICAgIF90aGlzLmtleURvd25FdmVudChldik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9rZXlFdmVudHMua2V5dXAgPSBmdW5jdGlvbiAoZXYpIHtcclxuICAgICAgICAgICAgX3RoaXMua2V5VXBFdmVudChldik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fa2V5RXZlbnRzLmtleWRvd24pO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5fa2V5RXZlbnRzLmtleXVwKTtcclxuICAgIH07XHJcbiAgICBJbnB1dE1hbmFnZXIucHJvdG90eXBlLnJlc2V0QXJyb3dJbnB1dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLl9rZXlTdGF0ZS5BcnJvd1VwID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fa2V5U3RhdGUuQXJyb3dSaWdodCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2tleVN0YXRlLkFycm93RG93biA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2tleVN0YXRlLkFycm93TGVmdCA9IGZhbHNlO1xyXG4gICAgfTtcclxuICAgIElucHV0TWFuYWdlci5wcm90b3R5cGUua2V5RG93bkV2ZW50ID0gZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgdmFyIG1haW5UYW5rID0gdGhpcy5fZ2FtZS5tYWluVGFuaztcclxuICAgICAgICB2YXIgbWVudSA9IHRoaXMuX2dhbWUuY3VycmVudE1lbnU7XHJcbiAgICAgICAgaWYgKG1lbnUgPT09IFwiR0FNRVwiIC8qIEdBTUUgKi8pIHtcclxuICAgICAgICAgICAgc3dpdGNoIChldi5jb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dVcFwiIC8qIGFycm93X3VwICovOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIiAvKiBhcnJvd19yaWdodCAqLzpcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIiAvKiBhcnJvd19kb3duICovOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiIC8qIGFycm93X2xlZnQgKi86XHJcbiAgICAgICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobWFpblRhbmspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFpblRhbmsuZGlyZWN0aW9uID0gRUtleXNUb0VEaXJlY3Rpb24oZXYuY29kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRBcnJvd0lucHV0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5U3RhdGVbZXYuY29kZV0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIlNwYWNlXCIgLyogc3BhY2ViYXIgKi86XHJcbiAgICAgICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobWFpblRhbmsgJiYgbWFpblRhbmsudmlzaWJsZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluVGFuay5maXJlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2tleVN0YXRlW2V2LmNvZGVdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJFc2NhcGVcIiAvKiBlc2MgKi86XHJcbiAgICAgICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9rZXlTdGF0ZVtldi5jb2RlXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9nYW1lLmdhbWVEYXRhLmdhbWVPdmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9nYW1lLnBhdXNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9nYW1lLnBhdXNlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9nYW1lLnBhdXNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChtZW51ID09PSBcIk1BSU5cIiAvKiBNQUlOICovKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZXYuY29kZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkFycm93VXBcIiAvKiBhcnJvd191cCAqLzpcclxuICAgICAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9nYW1lLm9iamVjdHMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fY3Vyc29ySW5kZXggLSAxIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3Vyc29ySW5kZXggPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3Vyc29ySW5kZXgtLTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmN1cnNvckluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIiAvKiBhcnJvd19kb3duICovOlxyXG4gICAgICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2dhbWUub2JqZWN0cy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jdXJzb3JJbmRleCArIDEgPiAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJzb3JJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJzb3JJbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIlNwYWNlXCIgLyogc3BhY2ViYXIgKi86XHJcbiAgICAgICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX2N1cnNvckluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2dhbWUubmV3R2FtZSgxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBJbnB1dE1hbmFnZXIucHJvdG90eXBlLmtleVVwRXZlbnQgPSBmdW5jdGlvbiAoZXYpIHtcclxuICAgICAgICB2YXIgY29kZSA9IGV2LmNvZGU7XHJcbiAgICAgICAgdGhpcy5fa2V5U3RhdGVbY29kZV0gPSBmYWxzZTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gSW5wdXRNYW5hZ2VyO1xyXG59KCkpO1xyXG5leHBvcnQgZGVmYXVsdCBJbnB1dE1hbmFnZXI7XHJcbiIsInZhciBCTE9DS19GVUxMID0ge1xyXG4gICAgYm90dG9tTGVmdDogdHJ1ZSxcclxuICAgIGJvdHRvbVJpZ2h0OiB0cnVlLFxyXG4gICAgdG9wTGVmdDogdHJ1ZSxcclxuICAgIHRvcFJpZ2h0OiB0cnVlXHJcbn07XHJcbnZhciBCTE9DS19IQUxGX0hUID0ge1xyXG4gICAgYm90dG9tTGVmdDogZmFsc2UsXHJcbiAgICBib3R0b21SaWdodDogZmFsc2UsXHJcbiAgICB0b3BMZWZ0OiB0cnVlLFxyXG4gICAgdG9wUmlnaHQ6IHRydWVcclxufTtcclxudmFyIEJMT0NLX0hBTEZfSEIgPSB7XHJcbiAgICBib3R0b21MZWZ0OiB0cnVlLFxyXG4gICAgYm90dG9tUmlnaHQ6IHRydWUsXHJcbiAgICB0b3BMZWZ0OiBmYWxzZSxcclxuICAgIHRvcFJpZ2h0OiBmYWxzZVxyXG59O1xyXG52YXIgQkxPQ0tfSEFMRl9WTCA9IHtcclxuICAgIGJvdHRvbUxlZnQ6IHRydWUsXHJcbiAgICBib3R0b21SaWdodDogZmFsc2UsXHJcbiAgICB0b3BMZWZ0OiB0cnVlLFxyXG4gICAgdG9wUmlnaHQ6IGZhbHNlXHJcbn07XHJcbnZhciBCTE9DS19IQUxGX1ZSID0ge1xyXG4gICAgYm90dG9tTGVmdDogZmFsc2UsXHJcbiAgICBib3R0b21SaWdodDogdHJ1ZSxcclxuICAgIHRvcExlZnQ6IGZhbHNlLFxyXG4gICAgdG9wUmlnaHQ6IHRydWVcclxufTtcclxudmFyIERlZmF1bHRMZXZlbHMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbGV2ZWxJZDogMSxcclxuICAgICAgICBsZXZlbE5hbWU6ICdMRVZFTCAxJyxcclxuICAgICAgICBibG9ja3M6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMSwgeTogMSB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMywgeTogMSB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNSwgeTogMSB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNywgeTogMSB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogOSwgeTogMSB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMTEsIHk6IDEgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDEsIHk6IDIgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDMsIHk6IDIgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDUsIHk6IDIgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDcsIHk6IDIgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDksIHk6IDIgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDExLCB5OiAyIH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAxLCB5OiAzIH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAzLCB5OiAzIH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA1LCB5OiAzIH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA2LCB5OiAzIH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIklST05cIiAvKiBJUk9OICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNywgeTogMyB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogOSwgeTogMyB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMTEsIHk6IDMgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDEsIHk6IDQgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDMsIHk6IDQgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDUsIHk6IDQgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0hBTEZfSFQsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDcsIHk6IDQgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0hBTEZfSFQsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDksIHk6IDQgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDExLCB5OiA0IH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAxLCB5OiA1IH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19IQUxGX0hULFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAzLCB5OiA1IH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19IQUxGX0hULFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA1LCB5OiA1IH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19IQUxGX0hCLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA3LCB5OiA1IH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19IQUxGX0hCLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA5LCB5OiA1IH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19IQUxGX0hULFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAxMSwgeTogNSB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IVCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMCwgeTogNiB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IQixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMiwgeTogNiB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IQixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMywgeTogNiB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IQixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNSwgeTogNiB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IVCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNywgeTogNiB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IVCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogOSwgeTogNiB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IQixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMTAsIHk6IDYgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0hBTEZfSEIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDEyLCB5OiA2IH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19IQUxGX0hCLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAwLCB5OiA3IH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIklST05cIiAvKiBJUk9OICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IVCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMiwgeTogNyB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IVCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMywgeTogNyB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IVCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNSwgeTogNyB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IQixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNywgeTogNyB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IQixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogOSwgeTogNyB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IVCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMTAsIHk6IDcgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0hBTEZfSFQsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDEyLCB5OiA3IH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIklST05cIiAvKiBJUk9OICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IVCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMSwgeTogOCB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IQixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMywgeTogOCB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IQixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNSwgeTogOCB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNiwgeTogOCB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNywgeTogOCB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogOSwgeTogOCB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IQixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMTEsIHk6IDggfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0hBTEZfSEIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDEsIHk6IDkgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDMsIHk6IDkgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDUsIHk6IDkgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDcsIHk6IDkgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDksIHk6IDkgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDExLCB5OiA5IH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAxLCB5OiAxMCB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMywgeTogMTAgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDUsIHk6IDEwIH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19IQUxGX0hULFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA3LCB5OiAxMCB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IVCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogOSwgeTogMTAgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDExLCB5OiAxMCB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMSwgeTogMTEgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDMsIHk6IDExIH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA1LCB5OiAxMSB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbUxlZnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbVJpZ2h0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcExlZnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcFJpZ2h0OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNiwgeTogMTEgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0hBTEZfSEIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDcsIHk6IDExIH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgICAgICBibG9ja1N0YXRlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tTGVmdDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBib3R0b21SaWdodDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wTGVmdDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wUmlnaHQ6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA5LCB5OiAxMSB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMTEsIHk6IDExIH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA1LCB5OiAxMiB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9WUixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNiwgeTogMTIgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiRUFHTEVcIiAvKiBFQUdMRSAqLyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDcsIHk6IDEyIH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19IQUxGX1ZMLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdGFua3M6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQVJNT1VSRUQ6IDAsXHJcbiAgICAgICAgICAgICAgICBERUZBVUxUOiAxOCxcclxuICAgICAgICAgICAgICAgIFNQRUVEOiAwLFxyXG4gICAgICAgICAgICAgICAgUE9XRVI6IDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQVJNT1VSRUQ6IDAsXHJcbiAgICAgICAgICAgICAgICBERUZBVUxUOiAwLFxyXG4gICAgICAgICAgICAgICAgU1BFRUQ6IDIsXHJcbiAgICAgICAgICAgICAgICBQT1dFUjogMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG5dO1xyXG5leHBvcnQgZGVmYXVsdCBEZWZhdWx0TGV2ZWxzO1xyXG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0VG90YWxPZlRhbmtHcm91cChncm91cCkge1xyXG4gICAgaWYgKGlzTmFOKGdyb3VwLkRFRkFVTFQpKSB7XHJcbiAgICAgICAgZ3JvdXAuREVGQVVMVCA9IDA7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNOYU4oZ3JvdXAuU1BFRUQpKSB7XHJcbiAgICAgICAgZ3JvdXAuU1BFRUQgPSAwO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzTmFOKGdyb3VwLlBPV0VSKSkge1xyXG4gICAgICAgIGdyb3VwLlBPV0VSID0gMDtcclxuICAgIH1cclxuICAgIGlmIChpc05hTihncm91cC5BUk1PVVJFRCkpIHtcclxuICAgICAgICBncm91cC5BUk1PVVJFRCA9IDA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZ3JvdXAuREVGQVVMVCArIGdyb3VwLlNQRUVEICsgZ3JvdXAuUE9XRVIgKyBncm91cC5BUk1PVVJFRDtcclxufVxyXG4iLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuaW1wb3J0IEdhbWVPYmplY3QgZnJvbSBcIi4vR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBHdWlkIH0gZnJvbSBcIi4uLy4uL1V0aWxzL1V0aWxzXCI7XHJcbmltcG9ydCBTUFJUSUVfREVGIGZyb20gXCIuLi8uLi9SZW5kZXIvU3ByaXRlL1Nwcml0ZURlZmluaXRpb25cIjtcclxuaW1wb3J0IHsgZ2V0U3ByaXRlU2l6ZSB9IGZyb20gXCIuLi8uLi9SZW5kZXIvU3ByaXRlL1Nwcml0ZURhdGFcIjtcclxudmFyIEFuaW1hdGlvbk9iamVjdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhBbmltYXRpb25PYmplY3QsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBBbmltYXRpb25PYmplY3QoZ2FtZSwgaWQsIGFuaW1hdGlvblR5cGUsIGFuaW1hdGlvblBvaW50LCBkdXJhdGlvbiwgZnJhbWVSYXRlLCBsb29wLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGlmIChsb29wID09PSB2b2lkIDApIHsgbG9vcCA9IGZhbHNlOyB9XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBpZiAoaWQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZCA9IEd1aWQubmV3R3VpZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGdhbWUsIFwiQU5JTUFUSU9OXCIgLyogQU5JTUFUSU9OICovLCBhbmltYXRpb25Qb2ludCwgaWQpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuYW5pbWF0aW9uVHlwZSA9IGFuaW1hdGlvblR5cGU7XHJcbiAgICAgICAgX3RoaXMuX2FuaW1hdGlvblBvaW50ID0gYW5pbWF0aW9uUG9pbnQ7XHJcbiAgICAgICAgX3RoaXMuX3Nwcml0ZVBvc2l0aW9uID0gMDtcclxuICAgICAgICBfdGhpcy5fY3VycmVudFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICBfdGhpcy5fZXhwaXJlVGltZSA9IF90aGlzLl9jdXJyZW50VGltZSArIGR1cmF0aW9uO1xyXG4gICAgICAgIF90aGlzLl9mcmFtZUNvdW50ID0gU1BSVElFX0RFRi5BTklNQVRJT05bX3RoaXMuYW5pbWF0aW9uVHlwZV0ubGVuZ3RoO1xyXG4gICAgICAgIF90aGlzLl9mcmFtZVJhdGUgPSBmcmFtZVJhdGU7XHJcbiAgICAgICAgX3RoaXMuX2xvb3AgPSBsb29wO1xyXG4gICAgICAgIF90aGlzLl9jYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgICAgIF90aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFuaW1hdGlvbk9iamVjdC5wcm90b3R5cGUsIFwiYW5pbWF0aW9uUG9pbnRcIiwge1xyXG4gICAgICAgIC8vI3JlZ2lvbiBnZXR0ZXIsIHNldHRlclxyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYW5pbWF0aW9uUG9pbnQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChhbmltYXRpb25Qb2ludCkge1xyXG4gICAgICAgICAgICB0aGlzLl9hbmltYXRpb25Qb2ludCA9IGFuaW1hdGlvblBvaW50O1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFuaW1hdGlvbk9iamVjdC5wcm90b3R5cGUsIFwiZXhwaXJlVGltZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9leHBpcmVUaW1lO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIC8vI2VuZHJlZ2lvblxyXG4gICAgLy8jcmVnaW9uIHB1YmxpYyBtZXRob2RzXHJcbiAgICAvLyBpZ25vcmUgaGl0IGV2ZW50XHJcbiAgICBBbmltYXRpb25PYmplY3QucHJvdG90eXBlLmhpdCA9IGZ1bmN0aW9uICgpIHsgfTtcclxuICAgIEFuaW1hdGlvbk9iamVjdC5wcm90b3R5cGUubmV4dFNwcml0ZVBvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9mcmFtZUNvdW50IDwgMikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2dhbWUubG9nKFwiW1wiICsgdGhpcy5zcHJpdGVQb3NpdGlvbiArIFwiIC8gXCIgKyAodGhpcy5fZnJhbWVDb3VudCAtIDEpICsgXCJdXCIgKyAocGVyZm9ybWFuY2Uubm93KCkgLSB0aGlzLl9jdXJyZW50VGltZSkgKyBcIiA+PSBcIiArIHRoaXMuX2ZyYW1lUmF0ZSk7XHJcbiAgICAgICAgaWYgKHBlcmZvcm1hbmNlLm5vdygpIC0gdGhpcy5fY3VycmVudFRpbWUgPj0gdGhpcy5fZnJhbWVSYXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9zcHJpdGVQb3NpdGlvbiArIDEgPCB0aGlzLl9mcmFtZUNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zcHJpdGVQb3NpdGlvbisrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX2xvb3ApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Nwcml0ZVBvc2l0aW9uID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9zcHJpdGVQb3NpdGlvbjtcclxuICAgIH07XHJcbiAgICBBbmltYXRpb25PYmplY3QucHJvdG90eXBlLmV4cGlyZSA9IGZ1bmN0aW9uIChyZW1vdmUpIHtcclxuICAgICAgICBpZiAocmVtb3ZlID09PSB2b2lkIDApIHsgcmVtb3ZlID0gdHJ1ZTsgfVxyXG4gICAgICAgIHRoaXMuX2dhbWUubG9nKFwiQU5JTUFUSU9OIFwiICsgdGhpcy5pZCArIFwiIEhBUyBCRUVOIEVYUElSRUQuIChcIiArIHBlcmZvcm1hbmNlLm5vdyArIFwiKVwiKTtcclxuICAgICAgICBpZiAocmVtb3ZlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9jYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLl9jYWxsYmFjayh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLy8jZW5kcmVnaW9uXHJcbiAgICBBbmltYXRpb25PYmplY3QucHJvdG90eXBlLnVwZGF0ZVBvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBzcHJpdGVEYXRhID0gZ2V0U3ByaXRlU2l6ZSh0aGlzKTtcclxuICAgICAgICB0aGlzLl9wb3NpdG9uID0ge1xyXG4gICAgICAgICAgICB4OiB0aGlzLl9hbmltYXRpb25Qb2ludC54IC0gc3ByaXRlRGF0YS53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgIHk6IHRoaXMuX2FuaW1hdGlvblBvaW50LnkgLSBzcHJpdGVEYXRhLmhlaWdodCAvIDJcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBBbmltYXRpb25PYmplY3Q7XHJcbn0oR2FtZU9iamVjdCkpO1xyXG5leHBvcnQgZGVmYXVsdCBBbmltYXRpb25PYmplY3Q7XHJcbiIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5pbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiLi9HYW1lT2JqZWN0XCI7XHJcbmltcG9ydCB7IEd1aWQsIHJlbW92ZUR1cGxpY2F0ZSB9IGZyb20gXCIuLi8uLi9VdGlscy9VdGlsc1wiO1xyXG5pbXBvcnQgQnVsbGV0T2JqZWN0IGZyb20gXCIuL0J1bGxldE9iamVjdFwiO1xyXG5pbXBvcnQgeyBnZXRTcHJpdGVTaXplIH0gZnJvbSBcIi4uLy4uL1JlbmRlci9TcHJpdGUvU3ByaXRlRGF0YVwiO1xyXG5pbXBvcnQgeyBCbG9ja0NvbGxpc2lvblRlc3QgfSBmcm9tIFwiLi4vLi4vVXRpbHMvQ29sbGlzaW9uVGVzdFwiO1xyXG5leHBvcnQgZnVuY3Rpb24gQmxvY2tTdGF0ZTJ4MlRvNHg0KHgyKSB7XHJcbiAgICB2YXIgeDQgPSBbXHJcbiAgICAgICAgW2ZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlXSxcclxuICAgICAgICBbZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2VdLFxyXG4gICAgICAgIFtmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZV0sXHJcbiAgICAgICAgW2ZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlXVxyXG4gICAgXTtcclxuICAgIHg0WzBdWzBdID0geDIudG9wTGVmdDtcclxuICAgIHg0WzBdWzFdID0geDIudG9wTGVmdDtcclxuICAgIHg0WzFdWzBdID0geDIudG9wTGVmdDtcclxuICAgIHg0WzFdWzFdID0geDIudG9wTGVmdDtcclxuICAgIHg0WzBdWzJdID0geDIudG9wUmlnaHQ7XHJcbiAgICB4NFswXVszXSA9IHgyLnRvcFJpZ2h0O1xyXG4gICAgeDRbMV1bMl0gPSB4Mi50b3BSaWdodDtcclxuICAgIHg0WzFdWzNdID0geDIudG9wUmlnaHQ7XHJcbiAgICB4NFsyXVswXSA9IHgyLmJvdHRvbUxlZnQ7XHJcbiAgICB4NFsyXVsxXSA9IHgyLmJvdHRvbUxlZnQ7XHJcbiAgICB4NFszXVswXSA9IHgyLmJvdHRvbUxlZnQ7XHJcbiAgICB4NFszXVsxXSA9IHgyLmJvdHRvbUxlZnQ7XHJcbiAgICB4NFsyXVsyXSA9IHgyLmJvdHRvbVJpZ2h0O1xyXG4gICAgeDRbMl1bM10gPSB4Mi5ib3R0b21SaWdodDtcclxuICAgIHg0WzNdWzJdID0geDIuYm90dG9tUmlnaHQ7XHJcbiAgICB4NFszXVszXSA9IHgyLmJvdHRvbVJpZ2h0O1xyXG4gICAgcmV0dXJuIHg0O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBCbG9ja1N0YXRlNHg0VG8yeDIoeDQpIHtcclxuICAgIHZhciB4MiA9IHtcclxuICAgICAgICB0b3BMZWZ0OiBmYWxzZSxcclxuICAgICAgICB0b3BSaWdodDogZmFsc2UsXHJcbiAgICAgICAgYm90dG9tTGVmdDogZmFsc2UsXHJcbiAgICAgICAgYm90dG9tUmlnaHQ6IGZhbHNlXHJcbiAgICB9O1xyXG4gICAgaWYgKHg0WzBdWzBdIHx8IHg0WzBdWzFdIHx8IHg0WzFdWzBdIHx8IHg0WzFdWzFdKSB7XHJcbiAgICAgICAgeDIudG9wTGVmdCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAoeDRbMF1bMl0gfHwgeDRbMF1bM10gfHwgeDRbMV1bMl0gfHwgeDRbMV1bM10pIHtcclxuICAgICAgICB4Mi50b3BSaWdodCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAoeDRbMl1bMF0gfHwgeDRbMl1bMV0gfHwgeDRbM11bMF0gfHwgeDRbM11bMV0pIHtcclxuICAgICAgICB4Mi5ib3R0b21MZWZ0ID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmICh4NFsyXVsyXSB8fCB4NFsyXVszXSB8fCB4NFszXVsyXSB8fCB4NFszXVszXSkge1xyXG4gICAgICAgIHgyLmJvdHRvbVJpZ2h0ID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiB4MjtcclxufVxyXG52YXIgQmxvY2tPYmplY3QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoQmxvY2tPYmplY3QsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBCbG9ja09iamVjdChnYW1lLCBibG9ja1R5cGUsIHBvc2l0aW9uLCBibG9ja1N0YXRlMngyKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZ2FtZSwgXCJCTE9DS1wiIC8qIEJMT0NLICovLCBwb3NpdGlvbiwgR3VpZC5uZXdHdWlkKCkpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuYmxvY2tUeXBlID0gYmxvY2tUeXBlO1xyXG4gICAgICAgIF90aGlzLl9ibG9ja1N0YXRlID0gQmxvY2tTdGF0ZTJ4MlRvNHg0KGJsb2NrU3RhdGUyeDIpO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCbG9ja09iamVjdC5wcm90b3R5cGUsIFwiYmxvY2tTdGF0ZTR4NFwiLCB7XHJcbiAgICAgICAgLy8jcmVnaW9uIGdldHRlciBzZXR0ZXJcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Jsb2NrU3RhdGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJsb2NrT2JqZWN0LnByb3RvdHlwZSwgXCJibG9ja1N0YXRlMngyXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIEJsb2NrU3RhdGU0eDRUbzJ4Mih0aGlzLl9ibG9ja1N0YXRlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICAvLyNlbmRyZWdpb25cclxuICAgIEJsb2NrT2JqZWN0LnByb3RvdHlwZS5maW5kQ2VsbFBvc2l0aW9uID0gZnVuY3Rpb24gKHJvdywgY29sdW1uKSB7XHJcbiAgICAgICAgdmFyIGJsb2NrU2l6ZSA9IGdldFNwcml0ZVNpemUodGhpcyk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgeDogdGhpcy5wb3NpdGlvbi54ICsgKGJsb2NrU2l6ZS53aWR0aCAvIDQpICogY29sdW1uLFxyXG4gICAgICAgICAgICB5OiB0aGlzLnBvc2l0aW9uLnkgKyAoYmxvY2tTaXplLndpZHRoIC8gNCkgKiByb3dcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIEJsb2NrT2JqZWN0LnByb3RvdHlwZS5oaXQgPSBmdW5jdGlvbiAoZXZlbnRPcmlnaW4pIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmICghKGV2ZW50T3JpZ2luIGluc3RhbmNlb2YgQnVsbGV0T2JqZWN0KSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmJsb2NrVHlwZSA9PT0gXCJFQUdMRVwiIC8qIEVBR0xFICovKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Nwcml0ZVBvc2l0aW9uID0gMTtcclxuICAgICAgICAgICAgdGhpcy5fZ2FtZS5nYW1lb3ZlcigpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBidWxsZXQgPSBldmVudE9yaWdpbjtcclxuICAgICAgICBpZiAoYnVsbGV0LnBhcmVudC50YW5rTGV2ZWwgPCAzICYmIHRoaXMuYmxvY2tUeXBlID09PSBcIklST05cIiAvKiBJUk9OICovKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGJsb2NrU2l6ZSA9IGdldFNwcml0ZVNpemUodGhpcyk7XHJcbiAgICAgICAgdmFyIGNvbGxpc2lvbkNlbGxzID0gQmxvY2tDb2xsaXNpb25UZXN0KHRoaXMsIGJ1bGxldCk7XHJcbiAgICAgICAgdmFyIHhQb3MgPSByZW1vdmVEdXBsaWNhdGUoY29sbGlzaW9uQ2VsbHMubWFwKGZ1bmN0aW9uIChwb2ludCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKHBvaW50LnggLSBfdGhpcy5wb3NpdGlvbi54KSAvIChibG9ja1NpemUud2lkdGggLyA0KTtcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgdmFyIHlQb3MgPSByZW1vdmVEdXBsaWNhdGUoY29sbGlzaW9uQ2VsbHMubWFwKGZ1bmN0aW9uIChwb2ludCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKHBvaW50LnkgLSBfdGhpcy5wb3NpdGlvbi55KSAvIChibG9ja1NpemUuaGVpZ2h0IC8gNCk7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIHZhciBiNDQgPSB0aGlzLmJsb2NrU3RhdGU0eDQ7XHJcbiAgICAgICAgaWYgKGJ1bGxldC5kaXJlY3Rpb24gPT09IFwidXBcIiAvKiB1cCAqLyB8fCBidWxsZXQuZGlyZWN0aW9uID09PSBcImRvd25cIiAvKiBkb3duICovKSB7XHJcbiAgICAgICAgICAgIGlmICh4UG9zLmluY2x1ZGVzKDApIHx8IHhQb3MuaW5jbHVkZXMoMSkpIHtcclxuICAgICAgICAgICAgICAgIGI0NFt5UG9zWzBdXVswXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYjQ0W3lQb3NbMF1dWzFdID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAoeVBvc1swXSArIDEgPCA0ICYmIGJ1bGxldC5wYXJlbnQudGFua0xldmVsID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGI0NFt5UG9zWzBdICsgMV1bMF0gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBiNDRbeVBvc1swXSArIDFdWzFdID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHhQb3MuaW5jbHVkZXMoMikgfHwgeFBvcy5pbmNsdWRlcygzKSkge1xyXG4gICAgICAgICAgICAgICAgYjQ0W3lQb3NbMF1dWzJdID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBiNDRbeVBvc1swXV1bM10gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmICh5UG9zWzBdICsgMSA8IDQgJiYgYnVsbGV0LnBhcmVudC50YW5rTGV2ZWwgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYjQ0W3lQb3NbMF0gKyAxXVsyXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGI0NFt5UG9zWzBdICsgMV1bM10gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChidWxsZXQuZGlyZWN0aW9uID09PSBcImxlZnRcIiAvKiBsZWZ0ICovIHx8IGJ1bGxldC5kaXJlY3Rpb24gPT09IFwicmlnaHRcIiAvKiByaWdodCAqLykge1xyXG4gICAgICAgICAgICBpZiAoeVBvcy5pbmNsdWRlcygwKSB8fCB5UG9zLmluY2x1ZGVzKDEpKSB7XHJcbiAgICAgICAgICAgICAgICBiNDRbMF1beFBvc1swXV0gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGI0NFsxXVt4UG9zWzBdXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHhQb3NbMF0gKyAxIDwgNCAmJiBidWxsZXQucGFyZW50LnRhbmtMZXZlbCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBiNDRbMF1beFBvc1swXSArIDFdID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgYjQ0WzFdW3hQb3NbMF0gKyAxXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh5UG9zLmluY2x1ZGVzKDIpIHx8IHlQb3MuaW5jbHVkZXMoMykpIHtcclxuICAgICAgICAgICAgICAgIGI0NFsyXVt4UG9zWzBdXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYjQ0WzNdW3hQb3NbMF1dID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAoeFBvc1swXSArIDEgPCA0ICYmIGJ1bGxldC5wYXJlbnQudGFua0xldmVsID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGI0NFsyXVt4UG9zWzBdICsgMV0gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBiNDRbM11beFBvc1swXSArIDFdID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGF2YWlsYWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIGI0NC5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcclxuICAgICAgICAgICAgcm93LmZvckVhY2goZnVuY3Rpb24gKGNlbGwpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjZWxsID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXZhaWxhYmxlID0gY2VsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKGF2YWlsYWJsZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEJsb2NrT2JqZWN0O1xyXG59KEdhbWVPYmplY3QpKTtcclxuZXhwb3J0IGRlZmF1bHQgQmxvY2tPYmplY3Q7XHJcbiIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5pbXBvcnQgTW92aW5nT2JqZWN0LCB7IGNhbGN1bGF0ZU1vdmUgfSBmcm9tIFwiLi9Nb3ZpbmdPYmplY3RcIjtcclxuaW1wb3J0IHsgZ2V0U3ByaXRlU2l6ZSB9IGZyb20gXCIuLi8uLi9SZW5kZXIvU3ByaXRlL1Nwcml0ZURhdGFcIjtcclxuZXhwb3J0IHZhciBCVUxMRVRfU0xPVyA9IDQ7XHJcbmV4cG9ydCB2YXIgQlVMTEVUX0ZBU1QgPSA2O1xyXG52YXIgQnVsbGV0T2JqZWN0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEJ1bGxldE9iamVjdCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEJ1bGxldE9iamVjdChnYW1lLCBwYXJlbnQsIHBvc2l0aW9uLCBkaXJlY3Rpb24sIHNwZWVkLCBpZCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGdhbWUsIFwiQlVMTEVUXCIgLyogQlVMTEVUICovLCBwb3NpdGlvbiwgZGlyZWN0aW9uLCBzcGVlZCwgaWQpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuX3BhcmVudCA9IHBhcmVudDtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQnVsbGV0T2JqZWN0LnByb3RvdHlwZSwgXCJwYXJlbnRcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdWxsZXRPYmplY3QucHJvdG90eXBlLCBcInBhcmVudElkXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3BhcmVudC5pZDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBCdWxsZXRPYmplY3QucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAvLyBsZXQgb3JpZ2luYWwgPSBkZWVwQ2xvbmUodGhpcy5wb3NpdGlvbikgYXMgUG9pbnQ7XHJcbiAgICAgICAgY2FsY3VsYXRlTW92ZSh0aGlzLnBvc2l0aW9uLCB0aGlzLl9kaXJlY3Rpb24sIHRoaXMuX3NwZWVkKTtcclxuICAgICAgICB0aGlzLl9nYW1lLmxvZyhcIkJVTExFVCBbXCIgKyB0aGlzLmlkICsgXCJdIE1PVkVEIC0+IFt4OlwiICsgdGhpcy5wb3NpdGlvbi54ICsgXCJdLCB5OltcIiArIHRoaXMucG9zaXRpb24ueSArIFwiXVwiKTtcclxuICAgICAgICB2YXIgdGVzdF92aXNpYmxlID0gdGhpcy5fZ2FtZS50ZXN0VmlzaWJpbGl0eSh0aGlzKTtcclxuICAgICAgICB2YXIgdGVzdF9jb2xsaXNpb24gPSB0aGlzLl9nYW1lLmNvbGxpc2lvblRlc3QodGhpcyk7XHJcbiAgICAgICAgaWYgKHRlc3RfdmlzaWJsZSA9PSBmYWxzZSAmJiB0ZXN0X2NvbGxpc2lvbi5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmZpdFRvQm9yZGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZXhwbG9kZSh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGVzdF9jb2xsaXNpb24ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB2YXIgZXhwbG9kZWRfMSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRlc3RfY29sbGlzaW9uLmZvckVhY2goZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC5vYmplY3RUeXBlID09PSBcIkJVTExFVFwiIC8qIEJVTExFVCAqLykge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cGxvZGVkXzEgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChvYmplY3Qub2JqZWN0VHlwZSA9PT0gXCJUQU5LXCIgLyogVEFOSyAqLykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmplY3QuaXNJbnZpbmNpYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGxvZGVkXzEgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5maXRUb09iamVjdChvYmplY3QsIC0xKTtcclxuICAgICAgICAgICAgICAgIG9iamVjdC5oaXQoX3RoaXMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5leHBsb2RlKGV4cGxvZGVkXzEpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBCdWxsZXRPYmplY3QucHJvdG90eXBlLmhpdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmV4cGxvZGUoZmFsc2UpO1xyXG4gICAgfTtcclxuICAgIEJ1bGxldE9iamVjdC5wcm90b3R5cGUuZXhwbG9kZSA9IGZ1bmN0aW9uIChhbmltYXRpb24pIHtcclxuICAgICAgICB2YXIgYW5pbWF0aW9uUG9zaXRpb247XHJcbiAgICAgICAgdmFyIHNpemUgPSBnZXRTcHJpdGVTaXplKHRoaXMpO1xyXG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gXCJ1cFwiIC8qIHVwICovIHx8IHRoaXMuZGlyZWN0aW9uID09PSBcImRvd25cIiAvKiBkb3duICovKSB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvblBvc2l0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgeDogdGhpcy5wb3NpdGlvbi54ICsgc2l6ZS53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgICAgICB5OiB0aGlzLnBvc2l0aW9uLnlcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvblBvc2l0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgeDogdGhpcy5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgICAgICAgeTogdGhpcy5wb3NpdGlvbi55ICsgc2l6ZS5oZWlnaHQgLyAyXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhbmltYXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5fZ2FtZS5zdGFydEFuaW1hdGlvbih0aGlzLCBcIkVYUExPU0lPTl9TTUFMTFwiIC8qIEVYUExPU0lPTl9TTUFMTCAqLyk7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2dhbWUubG9nKFwiQlVMTEVUIFtcIiArIHRoaXMuaWQgKyBcIl0gRVhQTE9ERUQuXCIpO1xyXG4gICAgfTtcclxuICAgIEJ1bGxldE9iamVjdC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUucmVtb3ZlLmNhbGwodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fcGFyZW50LnJlbW92ZUJ1bGxldCh0aGlzLmlkKTtcclxuICAgICAgICB0aGlzLl9nYW1lLmxvZyhcIkJVTExFVCBbXCIgKyB0aGlzLmlkICsgXCJdIEhBUyBCRUVOIFJFTU9WRUQuXCIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBCdWxsZXRPYmplY3Q7XHJcbn0oTW92aW5nT2JqZWN0KSk7XHJcbmV4cG9ydCBkZWZhdWx0IEJ1bGxldE9iamVjdDtcclxuIiwiZXhwb3J0IGZ1bmN0aW9uIFNjb3JlVG9BbmltYXRpb24oc2NvcmUpIHtcclxuICAgIHN3aXRjaCAoTWF0aC5mbG9vcihzY29yZSAvIDEwMCkpIHtcclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgIHJldHVybiBcIlNDT1JFXzEwMFwiIC8qIFNDT1JFXzEwMCAqLztcclxuICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgIHJldHVybiBcIlNDT1JFXzIwMFwiIC8qIFNDT1JFXzIwMCAqLztcclxuICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgIHJldHVybiBcIlNDT1JFXzMwMFwiIC8qIFNDT1JFXzMwMCAqLztcclxuICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgIHJldHVybiBcIlNDT1JFXzQwMFwiIC8qIFNDT1JFXzQwMCAqLztcclxuICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgIHJldHVybiBcIlNDT1JFXzUwMFwiIC8qIFNDT1JFXzUwMCAqLztcclxuICAgIH1cclxufVxyXG47XHJcbi8vIFRPRE8gVXBkYXRlIGRlZmF1bHRzXHJcbmV4cG9ydCB2YXIgQW5pbWF0aW9uRGVmYXVsdHMgPSB7XHJcbiAgICBFWFBMT1NJT05fU01BTEw6IHtcclxuICAgICAgICBkdXJhdGlvbjogMjAwLFxyXG4gICAgICAgIGZyYW1lUmF0ZTogMjAwIC8gNCxcclxuICAgICAgICBsb29wOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIEVYUExPU0lPTl9MQVJHRToge1xyXG4gICAgICAgIGR1cmF0aW9uOiAxNTAsXHJcbiAgICAgICAgZnJhbWVSYXRlOiAxNTAgLyAzLFxyXG4gICAgICAgIGxvb3A6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgSU5WSU5DSUJMRToge1xyXG4gICAgICAgIGR1cmF0aW9uOiAzMDAwLFxyXG4gICAgICAgIGZyYW1lUmF0ZTogMjUsXHJcbiAgICAgICAgbG9vcDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIFNQQVdOOiB7XHJcbiAgICAgICAgZHVyYXRpb246IDEwMDAsXHJcbiAgICAgICAgZnJhbWVSYXRlOiAxMDAwIC8gMTMsXHJcbiAgICAgICAgbG9vcDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIFNDT1JFXzEwMDoge1xyXG4gICAgICAgIGR1cmF0aW9uOiAxMDAwLFxyXG4gICAgICAgIGZyYW1lUmF0ZTogMCxcclxuICAgICAgICBsb29wOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIFNDT1JFXzIwMDoge1xyXG4gICAgICAgIGR1cmF0aW9uOiAxMDAwLFxyXG4gICAgICAgIGZyYW1lUmF0ZTogMCxcclxuICAgICAgICBsb29wOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIFNDT1JFXzMwMDoge1xyXG4gICAgICAgIGR1cmF0aW9uOiAxMDAwLFxyXG4gICAgICAgIGZyYW1lUmF0ZTogMCxcclxuICAgICAgICBsb29wOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIFNDT1JFXzQwMDoge1xyXG4gICAgICAgIGR1cmF0aW9uOiAxMDAwLFxyXG4gICAgICAgIGZyYW1lUmF0ZTogMCxcclxuICAgICAgICBsb29wOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIFNDT1JFXzUwMDoge1xyXG4gICAgICAgIGR1cmF0aW9uOiAxMDAwLFxyXG4gICAgICAgIGZyYW1lUmF0ZTogMCxcclxuICAgICAgICBsb29wOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIEdBTUVPVkVSOiB7XHJcbiAgICAgICAgZHVyYXRpb246IDQwMDAsXHJcbiAgICAgICAgZnJhbWVSYXRlOiAxMDAsXHJcbiAgICAgICAgbG9vcDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIFBBVVNFOiB7XHJcbiAgICAgICAgZHVyYXRpb246IC0xLFxyXG4gICAgICAgIGZyYW1lUmF0ZTogMTAwLFxyXG4gICAgICAgIGxvb3A6IHRydWVcclxuICAgIH0sXHJcbiAgICBUSVRMRToge1xyXG4gICAgICAgIGR1cmF0aW9uOiA0MDAwLFxyXG4gICAgICAgIGZyYW1lUmF0ZTogMTAwLFxyXG4gICAgICAgIGxvb3A6IHRydWVcclxuICAgIH0sXHJcbiAgICBDVVJTT1I6IHtcclxuICAgICAgICBkdXJhdGlvbjogNTAsXHJcbiAgICAgICAgZnJhbWVSYXRlOiAyNSxcclxuICAgICAgICBsb29wOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgQ1VSVEFJTjoge1xyXG4gICAgICAgIGR1cmF0aW9uOiAzMDAwLFxyXG4gICAgICAgIGZyYW1lUmF0ZTogMjUsXHJcbiAgICAgICAgbG9vcDogdHJ1ZVxyXG4gICAgfVxyXG59O1xyXG4iLCJ2YXIgRUl0ZW1UeXBlO1xyXG4oZnVuY3Rpb24gKEVJdGVtVHlwZSkge1xyXG4gICAgRUl0ZW1UeXBlW1wiSEVMTUVUXCJdID0gXCJIRUxNRVRcIjtcclxuICAgIEVJdGVtVHlwZVtcIldBVENIXCJdID0gXCJXQVRDSFwiO1xyXG4gICAgRUl0ZW1UeXBlW1wiU1RBUlwiXSA9IFwiU1RBUlwiO1xyXG4gICAgRUl0ZW1UeXBlW1wiQk9NQlwiXSA9IFwiQk9NQlwiO1xyXG4gICAgRUl0ZW1UeXBlW1wiVEFOS1wiXSA9IFwiVEFOS1wiO1xyXG4gICAgRUl0ZW1UeXBlW1wiUElTVE9MXCJdID0gXCJQSVNUT0xcIjtcclxufSkoRUl0ZW1UeXBlIHx8IChFSXRlbVR5cGUgPSB7fSkpO1xyXG5leHBvcnQgZGVmYXVsdCBFSXRlbVR5cGU7XHJcbiIsInZhciBFbmVteVR5cGU7XHJcbihmdW5jdGlvbiAoRW5lbXlUeXBlKSB7XHJcbiAgICBFbmVteVR5cGVbXCJERUZBVUxUXCJdID0gXCJERUZBVUxUXCI7XHJcbiAgICBFbmVteVR5cGVbXCJTUEVFRFwiXSA9IFwiU1BFRURcIjtcclxuICAgIEVuZW15VHlwZVtcIlBPV0VSXCJdID0gXCJQT1dFUlwiO1xyXG4gICAgRW5lbXlUeXBlW1wiQVJNT1VSRURcIl0gPSBcIkFSTU9VUkVEXCI7XHJcbn0pKEVuZW15VHlwZSB8fCAoRW5lbXlUeXBlID0ge30pKTtcclxudmFyIEVuZW15U2NvcmVNYXAgPSBuZXcgTWFwKCk7XHJcbkVuZW15U2NvcmVNYXAuc2V0KEVuZW15VHlwZS5ERUZBVUxULCAxMDApO1xyXG5FbmVteVNjb3JlTWFwLnNldChFbmVteVR5cGUuU1BFRUQsIDIwMCk7XHJcbkVuZW15U2NvcmVNYXAuc2V0KEVuZW15VHlwZS5QT1dFUiwgMzAwKTtcclxuRW5lbXlTY29yZU1hcC5zZXQoRW5lbXlUeXBlLkFSTU9VUkVELCA0MDApO1xyXG5leHBvcnQgeyBFbmVteVR5cGUsIEVuZW15U2NvcmVNYXAgfTtcclxuIiwidmFyIEdhbWVPYmplY3QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBHYW1lT2JqZWN0KGdhbWUsIG9iamVjdFR5cGUsIHBvc2l0aW9uLCBpZCwgdmlzaWJsZSkge1xyXG4gICAgICAgIGlmICh2aXNpYmxlID09PSB2b2lkIDApIHsgdmlzaWJsZSA9IHRydWU7IH1cclxuICAgICAgICB0aGlzLl9nYW1lID0gZ2FtZTtcclxuICAgICAgICB0aGlzLnZpc2libGUgPSB2aXNpYmxlO1xyXG4gICAgICAgIHRoaXMub2JqZWN0VHlwZSA9IG9iamVjdFR5cGU7XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlUG9zaXRpb24gPSAwO1xyXG4gICAgICAgIGlmIChwb3NpdGlvbiAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fcG9zaXRvbiA9IHBvc2l0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fcG9zaXRvbiA9IHtcclxuICAgICAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgICAgICB5OiAwXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpZCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHYW1lT2JqZWN0LnByb3RvdHlwZSwgXCJwb3NpdGlvblwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9wb3NpdG9uO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAocG9zaXRpb24pIHtcclxuICAgICAgICAgICAgaWYgKHBvc2l0aW9uLnggPD0gMCB8fCBwb3NpdGlvbi55IDw9IDApIHtcclxuICAgICAgICAgICAgICAgIHRocm93ICdwb3NpdGlvbiBjYW5ub3QgYmUgYSBuZWdhdGl2ZSB2YWx1ZSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fcG9zaXRvbiA9IHBvc2l0aW9uO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHYW1lT2JqZWN0LnByb3RvdHlwZSwgXCJzcHJpdGVQb3NpdGlvblwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zcHJpdGVQb3NpdGlvbjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBHYW1lT2JqZWN0LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5fZ2FtZS5yZW1vdmVPYmplY3QodGhpcyk7XHJcbiAgICB9O1xyXG4gICAgR2FtZU9iamVjdC5wcm90b3R5cGUubmV4dFNwcml0ZVBvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZVBvc2l0aW9uID0gdGhpcy5fc3ByaXRlUG9zaXRpb24gKyAxIDw9IDEgPyB0aGlzLl9zcHJpdGVQb3NpdGlvbiArIDEgOiAwO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zcHJpdGVQb3NpdGlvbjtcclxuICAgIH07XHJcbiAgICByZXR1cm4gR2FtZU9iamVjdDtcclxufSgpKTtcclxuZXhwb3J0IGRlZmF1bHQgR2FtZU9iamVjdDtcclxuIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbmltcG9ydCBHYW1lT2JqZWN0IGZyb20gXCIuL0dhbWVPYmplY3RcIjtcclxuaW1wb3J0IEVJdGVtVHlwZSBmcm9tIFwiLi9FbnVtL0VJdGVtVHlwZVwiO1xyXG5pbXBvcnQgeyBHdWlkIH0gZnJvbSBcIi4uLy4uL1V0aWxzL1V0aWxzXCI7XHJcbnZhciBJdGVtT2JqZWN0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEl0ZW1PYmplY3QsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBJdGVtT2JqZWN0KGdhbWUsIGl0ZW1UeXBlLCBwb3NpdGlvbikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGdhbWUsIFwiSVRFTVwiIC8qIElURU0gKi8sIHBvc2l0aW9uLCBHdWlkLm5ld0d1aWQoKSkgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5pdGVtVHlwZSA9IGl0ZW1UeXBlO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIEl0ZW1PYmplY3QucHJvdG90eXBlLmhpdCA9IGZ1bmN0aW9uIChldmVudE9yaWdpbikge1xyXG4gICAgICAgIHZhciBvcmlnaW4gPSBldmVudE9yaWdpbjtcclxuICAgICAgICB2YXIgb3RoZXJUYW5rcyA9IHRoaXMuX2dhbWUub2JqZWN0cy5maWx0ZXIoZnVuY3Rpb24gKHgpIHtcclxuICAgICAgICAgICAgdmFyIHRhbmsgPSB4O1xyXG4gICAgICAgICAgICByZXR1cm4gdGFuay50YW5rVHlwZSA9PT0gXCJFTkVNWV9UQU5LXCIgLyogRU5FTVlfVEFOSyAqLztcclxuICAgICAgICB9KTtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuaXRlbVR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBFSXRlbVR5cGUuQk9NQjpcclxuICAgICAgICAgICAgICAgIG90aGVyVGFua3MuZm9yRWFjaChmdW5jdGlvbiAodGFuaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhbmsuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBFSXRlbVR5cGUuSEVMTUVUOlxyXG4gICAgICAgICAgICAgICAgb3JpZ2luLmludmluY2libGUoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEVJdGVtVHlwZS5QSVNUT0w6XHJcbiAgICAgICAgICAgICAgICAvLyBwb2ludCB1cFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRUl0ZW1UeXBlLlNUQVI6XHJcbiAgICAgICAgICAgICAgICBvcmlnaW4ubGV2ZWx1cCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRUl0ZW1UeXBlLlRBTks6XHJcbiAgICAgICAgICAgICAgICAvLyBsaWZlIDEgdXBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEVJdGVtVHlwZS5XQVRDSDpcclxuICAgICAgICAgICAgICAgIC8vIHN0b3AgZW5lbXkgdGFua3NcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9nYW1lLnN0YXJ0QW5pbWF0aW9uKHRoaXMsIFwiU0NPUkVfNTAwXCIgLyogU0NPUkVfNTAwICovLCBudWxsKTtcclxuICAgICAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBJdGVtT2JqZWN0O1xyXG59KEdhbWVPYmplY3QpKTtcclxuZXhwb3J0IGRlZmF1bHQgSXRlbU9iamVjdDtcclxuIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbmltcG9ydCBHYW1lT2JqZWN0IGZyb20gXCIuL0dhbWVPYmplY3RcIjtcclxuaW1wb3J0IHsgRFJBV0lOR19DT05TVCB9IGZyb20gXCIuLi8uLi9SZW5kZXIvUmVuZGVyZXJcIjtcclxuaW1wb3J0IHsgZ2V0U3ByaXRlU2l6ZSwgZ2V0T2JqZWN0U2l6ZSB9IGZyb20gXCIuLi8uLi9SZW5kZXIvU3ByaXRlL1Nwcml0ZURhdGFcIjtcclxuaW1wb3J0IHsgQmxvY2tDb2xsaXNpb25UZXN0IH0gZnJvbSBcIi4uLy4uL1V0aWxzL0NvbGxpc2lvblRlc3RcIjtcclxuaW1wb3J0IHsgbWF4LCBtaW4gfSBmcm9tIFwiLi4vLi4vVXRpbHMvVXRpbHNcIjtcclxudmFyIE1vdmluZ09iamVjdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhNb3ZpbmdPYmplY3QsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBNb3ZpbmdPYmplY3QoZ2FtZSwgb2JqZWN0VHlwZSwgcG9zaXRpb24sIGRpcmVjdGlvbiwgc3BlZWQsIGlkKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZ2FtZSwgb2JqZWN0VHlwZSwgcG9zaXRpb24sIGlkKSB8fCB0aGlzO1xyXG4gICAgICAgIGlmIChkaXJlY3Rpb24gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIF90aGlzLl9kaXJlY3Rpb24gPSBkaXJlY3Rpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBfdGhpcy5fZGlyZWN0aW9uID0gXCJ1cFwiIC8qIHVwICovO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfdGhpcy5fc3BlZWQgPSBzcGVlZDtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTW92aW5nT2JqZWN0LnByb3RvdHlwZSwgXCJkaXJlY3Rpb25cIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZGlyZWN0aW9uO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2RpcmVjdGlvbiA9IGRpcmVjdGlvbjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBNb3ZpbmdPYmplY3QucHJvdG90eXBlLmZpdFRvQm9yZGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBmcmFtZSA9IERSQVdJTkdfQ09OU1Quc2l6ZXMuZnJhbWU7XHJcbiAgICAgICAgdmFyIHNjcmVlbiA9IERSQVdJTkdfQ09OU1Quc2l6ZXMuc2NyZWVuO1xyXG4gICAgICAgIHZhciBzaXplID0gZ2V0U3ByaXRlU2l6ZSh0aGlzKTtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJsZWZ0XCIgLyogbGVmdCAqLzpcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IGZyYW1lLmxlZnQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInVwXCIgLyogdXAgKi86XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSBmcmFtZS50b3A7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImRvd25cIiAvKiBkb3duICovOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gc2NyZWVuLmhlaWdodCArIGZyYW1lLnRvcCAtIHNpemUuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJyaWdodFwiIC8qIHJpZ2h0ICovOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gc2NyZWVuLndpZHRoICsgZnJhbWUubGVmdCAtIHNpemUud2lkdGg7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgTW92aW5nT2JqZWN0LnByb3RvdHlwZS5maXRUb09iamVjdCA9IGZ1bmN0aW9uIChvYmplY3QsIGdhcCkge1xyXG4gICAgICAgIGlmIChnYXAgPT09IHZvaWQgMCkgeyBnYXAgPSAwOyB9XHJcbiAgICAgICAgdmFyIHNpemUgPSBnZXRTcHJpdGVTaXplKHRoaXMpO1xyXG4gICAgICAgIHZhciB0YW5rU2l6ZSA9IGdldE9iamVjdFNpemUodGhpcy5vYmplY3RUeXBlKTtcclxuICAgICAgICB2YXIgb2JqZWN0U2l6ZSA9IGdldFNwcml0ZVNpemUob2JqZWN0KTtcclxuICAgICAgICBpZiAob2JqZWN0Lm9iamVjdFR5cGUgPT09IFwiQkxPQ0tcIiAvKiBCTE9DSyAqLykge1xyXG4gICAgICAgICAgICB2YXIgYmxvY2sgPSBvYmplY3Q7XHJcbiAgICAgICAgICAgIHZhciBjZWxsU2l6ZSA9IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBvYmplY3RTaXplLndpZHRoIC8gNCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogb2JqZWN0U2l6ZS5oZWlnaHQgLyA0XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHZhciBhZGp1c3RHYXAgPSBjZWxsU2l6ZS53aWR0aCAqIC44O1xyXG4gICAgICAgICAgICB2YXIgY29sbGlzaW9uX2NlbGxzID0gQmxvY2tDb2xsaXNpb25UZXN0KGJsb2NrLCB0aGlzKTtcclxuICAgICAgICAgICAgdmFyIHhQb3MgPSBjb2xsaXNpb25fY2VsbHMubWFwKGZ1bmN0aW9uIChwb2ludCkgeyByZXR1cm4gcG9pbnQueDsgfSk7XHJcbiAgICAgICAgICAgIHZhciB5UG9zID0gY29sbGlzaW9uX2NlbGxzLm1hcChmdW5jdGlvbiAocG9pbnQpIHsgcmV0dXJuIHBvaW50Lnk7IH0pO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwibGVmdFwiIC8qIGxlZnQgKi86XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHhQb3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoeVBvcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi55ICsgdGFua1NpemUuaGVpZ2h0IC0gbWluKHlQb3MpIDw9IGFkanVzdEdhcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSA9IG1pbih5UG9zKSAtIHRhbmtTaXplLmhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG1heCh5UG9zKSArIGNlbGxTaXplLmhlaWdodCAtIHRoaXMucG9zaXRpb24ueSA8PSBhZGp1c3RHYXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSBtYXgoeVBvcykgKyBjZWxsU2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gbWF4KHhQb3MpICsgb2JqZWN0U2l6ZS53aWR0aCAvIDQgKyBnYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInVwXCIgLyogdXAgKi86XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHlQb3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoeFBvcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi54ICsgdGFua1NpemUud2lkdGggLSBtaW4oeFBvcykgPD0gYWRqdXN0R2FwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gb2JqZWN0LnBvc2l0aW9uLnggLSB0YW5rU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG1heCh4UG9zKSArIGNlbGxTaXplLndpZHRoIC0gdGhpcy5wb3NpdGlvbi54IDw9IGFkanVzdEdhcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IG1heCh4UG9zKSArIGNlbGxTaXplLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSA9IG1heCh5UG9zKSArIGNlbGxTaXplLmhlaWdodCArIGdhcDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiZG93blwiIC8qIGRvd24gKi86XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHlQb3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoeFBvcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi54ICsgdGFua1NpemUud2lkdGggLSBtaW4oeFBvcykgPD0gYWRqdXN0R2FwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gbWluKHhQb3MpIC0gdGFua1NpemUud2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChtYXgoeFBvcykgKyBjZWxsU2l6ZS53aWR0aCAtIHRoaXMucG9zaXRpb24ueCA8PSBhZGp1c3RHYXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSBtYXgoeFBvcykgKyBjZWxsU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSBtaW4oeVBvcykgLSBzaXplLmhlaWdodCAtIGdhcDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwicmlnaHRcIiAvKiByaWdodCAqLzpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoeFBvcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh5UG9zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgKyB0YW5rU2l6ZS5oZWlnaHQgLSBtaW4oeVBvcykgPD0gYWRqdXN0R2FwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gbWluKHlQb3MpIC0gdGFua1NpemUuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobWF4KHlQb3MpICsgY2VsbFNpemUuaGVpZ2h0IC0gdGhpcy5wb3NpdGlvbi55IDw9IGFkanVzdEdhcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSA9IG1heCh5UG9zKSArIGNlbGxTaXplLmhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSBtaW4oeFBvcykgLSBzaXplLndpZHRoIC0gZ2FwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImxlZnRcIiAvKiBsZWZ0ICovOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IG9iamVjdC5wb3NpdGlvbi54ICsgb2JqZWN0U2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJ1cFwiIC8qIHVwICovOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSA9IG9iamVjdC5wb3NpdGlvbi55ICsgb2JqZWN0U2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiZG93blwiIC8qIGRvd24gKi86XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gb2JqZWN0LnBvc2l0aW9uLnkgLSBzaXplLmhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJyaWdodFwiIC8qIHJpZ2h0ICovOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IG9iamVjdC5wb3NpdGlvbi54IC0gc2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gTW92aW5nT2JqZWN0O1xyXG59KEdhbWVPYmplY3QpKTtcclxuZXhwb3J0IGRlZmF1bHQgTW92aW5nT2JqZWN0O1xyXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlTW92ZShwb3NpdGlvbiwgZGlyZWN0aW9uLCBzcGVlZCkge1xyXG4gICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcclxuICAgICAgICBjYXNlIFwidXBcIiAvKiB1cCAqLzpcclxuICAgICAgICAgICAgcG9zaXRpb24ueSAtPSBzcGVlZDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInJpZ2h0XCIgLyogcmlnaHQgKi86XHJcbiAgICAgICAgICAgIHBvc2l0aW9uLnggKz0gc3BlZWQ7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJkb3duXCIgLyogZG93biAqLzpcclxuICAgICAgICAgICAgcG9zaXRpb24ueSArPSBzcGVlZDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImxlZnRcIiAvKiBsZWZ0ICovOlxyXG4gICAgICAgICAgICBwb3NpdGlvbi54IC09IHNwZWVkO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufVxyXG4iLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuaW1wb3J0IFRhbmtPYmplY3QgZnJvbSBcIi4vVGFua09iamVjdFwiO1xyXG5pbXBvcnQgeyBFbmVteVR5cGUsIEVuZW15U2NvcmVNYXAgfSBmcm9tIFwiLi9FbnVtL0VUYW5rVHlwZVwiO1xyXG5pbXBvcnQgeyBTY29yZVRvQW5pbWF0aW9uIH0gZnJvbSBcIi4vRW51bS9FQW5pbWF0aW9uVHlwZVwiO1xyXG5leHBvcnQgdmFyIENvbG9yU2VxdWVuY2VEZWZpbml0aW9ucyA9IHtcclxuICAgIERFRkFVTFQ6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNlcXVlbmNlOiBbXCJXSElURVwiIC8qIFdISVRFICovXSxcclxuICAgICAgICAgICAgZGVsYXk6IC0xLFxyXG4gICAgICAgIH1cclxuICAgIF0sXHJcbiAgICBBUk1PVVJFRDogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2VxdWVuY2U6IFtcIldISVRFXCIgLyogV0hJVEUgKi9dLFxyXG4gICAgICAgICAgICBkZWxheTogMjUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNlcXVlbmNlOiBbXCJHUkVFTlwiIC8qIEdSRUVOICovLCBcIllFTExPV1wiIC8qIFlFTExPVyAqL10sXHJcbiAgICAgICAgICAgIGRlbGF5OiAyNSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2VxdWVuY2U6IFtcIkdSRUVOXCIgLyogR1JFRU4gKi8sIFwiV0hJVEVcIiAvKiBXSElURSAqL10sXHJcbiAgICAgICAgICAgIGRlbGF5OiAyNSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2VxdWVuY2U6IFtcIllFTExPV1wiIC8qIFlFTExPVyAqLywgXCJXSElURVwiIC8qIFdISVRFICovXSxcclxuICAgICAgICAgICAgZGVsYXk6IDI1LFxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgSVRFTTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2VxdWVuY2U6IFtcIldISVRFXCIgLyogV0hJVEUgKi8sIFwiTUFHRU5UQVwiIC8qIE1BR0VOVEEgKi9dLFxyXG4gICAgICAgICAgICBkZWxheTogMTAwLFxyXG4gICAgICAgIH1cclxuICAgIF1cclxufTtcclxudmFyIFRhbmtBSU9CamVjdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhUYW5rQUlPQmplY3QsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBUYW5rQUlPQmplY3QoZ2FtZSwgZW5lbXlUeXBlLCBoYXNJdGVtLCBwb3NpdGlvbiwgZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgbGV2ZWw7XHJcbiAgICAgICAgdmFyIGhwID0gMTtcclxuICAgICAgICBzd2l0Y2ggKGVuZW15VHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIEVuZW15VHlwZS5ERUZBVUxUOlxyXG4gICAgICAgICAgICAgICAgbGV2ZWwgPSAwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRW5lbXlUeXBlLlNQRUVEOlxyXG4gICAgICAgICAgICAgICAgbGV2ZWwgPSAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRW5lbXlUeXBlLlBPV0VSOlxyXG4gICAgICAgICAgICAgICAgbGV2ZWwgPSAyO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRW5lbXlUeXBlLkFSTU9VUkVEOlxyXG4gICAgICAgICAgICAgICAgbGV2ZWwgPSAzO1xyXG4gICAgICAgICAgICAgICAgaHAgPSA0O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZ2FtZSwgXCJFTkVNWV9UQU5LXCIgLyogRU5FTVlfVEFOSyAqLywgcG9zaXRpb24sIGRpcmVjdGlvbiwgXCJXSElURVwiIC8qIFdISVRFICovLCBsZXZlbCkgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5sYXN0Q2hhbmdlZCA9IDA7XHJcbiAgICAgICAgX3RoaXMuX2VuZW15VHlwZSA9IGVuZW15VHlwZTtcclxuICAgICAgICBfdGhpcy5faGFzSXRlbSA9IGhhc0l0ZW07XHJcbiAgICAgICAgX3RoaXMuX2NvbG9ySW5kZXggPSAwO1xyXG4gICAgICAgIF90aGlzLl9ocCA9IGhwO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKF90aGlzLmdldENvbG9yRGVmaW5pdGlvbigpKTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVGFua0FJT0JqZWN0LnByb3RvdHlwZSwgXCJjb2xvckluZGV4XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbG9ySW5kZXg7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgVGFua0FJT0JqZWN0LnByb3RvdHlwZS5uZXh0Q29sb3JJbmRleCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZGVmaW5pdGlvbiA9IHRoaXMuZ2V0Q29sb3JEZWZpbml0aW9uKCk7XHJcbiAgICAgICAgdmFyIG1heEluZGV4ID0gZGVmaW5pdGlvbi5zZXF1ZW5jZS5sZW5ndGg7XHJcbiAgICAgICAgaWYgKHRoaXMuX2NvbG9ySW5kZXggKyAxID49IG1heEluZGV4KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbG9ySW5kZXggPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fY29sb3JJbmRleCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fY29sb3JJbmRleDtcclxuICAgIH07XHJcbiAgICBUYW5rQUlPQmplY3QucHJvdG90eXBlLmdldENvbG9yRGVmaW5pdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIga2V5O1xyXG4gICAgICAgIHZhciBpbmRleDtcclxuICAgICAgICBpZiAodGhpcy5faGFzSXRlbSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBrZXkgPSAnSVRFTSc7XHJcbiAgICAgICAgICAgIGluZGV4ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fZW5lbXlUeXBlID09PSBFbmVteVR5cGUuQVJNT1VSRUQpIHtcclxuICAgICAgICAgICAga2V5ID0gdGhpcy5fZW5lbXlUeXBlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGluZGV4ID0gdGhpcy5faHAgLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAga2V5ID0gJ0RFRkFVTFQnO1xyXG4gICAgICAgICAgICBpbmRleCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBDb2xvclNlcXVlbmNlRGVmaW5pdGlvbnNba2V5XVtpbmRleF07XHJcbiAgICB9O1xyXG4gICAgVGFua0FJT0JqZWN0LnByb3RvdHlwZS5oaXQgPSBmdW5jdGlvbiAoZXZlbnRPcmlnaW4pIHtcclxuICAgICAgICB0aGlzLl9ocCAtPSAxO1xyXG4gICAgICAgIGlmICh0aGlzLl9ocCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveShldmVudE9yaWdpbik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFRhbmtBSU9CamVjdC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uIChldmVudE9yaWdpbikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgICAgICBpZiAodGhpcy5faGFzSXRlbSkge1xyXG4gICAgICAgICAgICB0aGlzLl9nYW1lLnNwYXduSXRlbSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXZlbnRPcmlnaW4gJiYgZXZlbnRPcmlnaW4gaW5zdGFuY2VvZiBUYW5rT2JqZWN0KSB7XHJcbiAgICAgICAgICAgIHZhciBwbGF5ZXIgPSBldmVudE9yaWdpbjtcclxuICAgICAgICAgICAgLy8gVE9ETyBwbGF5ZXIgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2dhbWUuc3RhcnRBbmltYXRpb24odGhpcywgXCJFWFBMT1NJT05fU01BTExcIiAvKiBFWFBMT1NJT05fU01BTEwgKi8sIG51bGwsIGZ1bmN0aW9uIChhbmltYXRpb24pIHtcclxuICAgICAgICAgICAgX3RoaXMuX2dhbWUuc3RhcnRBbmltYXRpb24oYW5pbWF0aW9uLmFuaW1hdGlvblBvaW50LCBcIkVYUExPU0lPTl9MQVJHRVwiIC8qIEVYUExPU0lPTl9MQVJHRSAqLywgbnVsbCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNjb3JlQW5pbWF0aW9uID0gU2NvcmVUb0FuaW1hdGlvbihFbmVteVNjb3JlTWFwLmdldChfdGhpcy5fZW5lbXlUeXBlKSk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5fZ2FtZS5zdGFydEFuaW1hdGlvbihhbmltYXRpb24uYW5pbWF0aW9uUG9pbnQsIHNjb3JlQW5pbWF0aW9uLCBudWxsLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuX2dhbWUuc3Bhd25UYW5rKF90aGlzLnRhbmtUeXBlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gVGFua0FJT0JqZWN0O1xyXG59KFRhbmtPYmplY3QpKTtcclxuZXhwb3J0IGRlZmF1bHQgVGFua0FJT0JqZWN0O1xyXG4iLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuaW1wb3J0IHsgTUFJTl9UQU5LX0lEIH0gZnJvbSBcIi4uL0dhbWVcIjtcclxuaW1wb3J0IE1vdmluZ09iamVjdCwgeyBjYWxjdWxhdGVNb3ZlIH0gZnJvbSBcIi4vTW92aW5nT2JqZWN0XCI7XHJcbmltcG9ydCBCdWxsZXRPYmplY3QsIHsgQlVMTEVUX1NMT1csIEJVTExFVF9GQVNUIH0gZnJvbSBcIi4vQnVsbGV0T2JqZWN0XCI7XHJcbmltcG9ydCBTUFJUSUVfREVGIGZyb20gXCIuLi8uLi9SZW5kZXIvU3ByaXRlL1Nwcml0ZURlZmluaXRpb25cIjtcclxuaW1wb3J0IHsgR3VpZCB9IGZyb20gXCIuLi8uLi9VdGlscy9VdGlsc1wiO1xyXG5leHBvcnQgdmFyIFRBTktfU1BFRUQgPSAyO1xyXG5leHBvcnQgdmFyIFRBTktfRklSRV9ERUxBWSA9IDEwMDtcclxudmFyIFRhbmtPYmplY3QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoVGFua09iamVjdCwgX3N1cGVyKTtcclxuICAgIC8vI3JlZ2lvbiBjb25zdHJ1Y3RvclxyXG4gICAgZnVuY3Rpb24gVGFua09iamVjdChnYW1lLCB0YW5rVHlwZSwgcG9zaXRpb24sIGRpcmVjdGlvbiwgdGFua0NvbG9yLCB0YW5rTGV2ZWwsIGlkKSB7XHJcbiAgICAgICAgaWYgKHRhbmtMZXZlbCA9PT0gdm9pZCAwKSB7IHRhbmtMZXZlbCA9IDE7IH1cclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBnYW1lLCBcIlRBTktcIiAvKiBUQU5LICovLCBwb3NpdGlvbiwgZGlyZWN0aW9uLCBUQU5LX1NQRUVELCBpZCAhPSBudWxsID8gaWQgOiBHdWlkLm5ld0d1aWQoKSkgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5faXNJbnZpbmNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgX3RoaXMuX3RhbmtUeXBlID0gdGFua1R5cGU7XHJcbiAgICAgICAgX3RoaXMuX3RhbmtDb2xvciA9IHRhbmtDb2xvcjtcclxuICAgICAgICBfdGhpcy5fdGFua0xldmVsID0gdGFua0xldmVsO1xyXG4gICAgICAgIF90aGlzLl9idWxsZXRzID0gW107XHJcbiAgICAgICAgX3RoaXMudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIF90aGlzLl9sYXN0RmlyZWQgPSAwO1xyXG4gICAgICAgIF90aGlzLnNwYXduKCk7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRhbmtPYmplY3QucHJvdG90eXBlLCBcInRhbmtDb2xvclwiLCB7XHJcbiAgICAgICAgLy8jZW5kcmVnaW9uXHJcbiAgICAgICAgLy8jcmVnaW9uIGdldHRlciwgc2V0dGVyXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90YW5rQ29sb3I7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyBUT0RPOiBSRU1PVkUgV0hFTiBERVBMT1lcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChjb2xvcikge1xyXG4gICAgICAgICAgICB0aGlzLl90YW5rQ29sb3IgPSBjb2xvcjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVGFua09iamVjdC5wcm90b3R5cGUsIFwidGFua1R5cGVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdGFua1R5cGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRhbmtPYmplY3QucHJvdG90eXBlLCBcImlzSW52aW5jaWJsZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pc0ludmluY2libGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRhbmtPYmplY3QucHJvdG90eXBlLCBcInRhbmtMZXZlbFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90YW5rTGV2ZWw7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyBUT0RPOiBSRU1PVkUgV0hFTiBERVBMT1lcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChsZXZlbCkge1xyXG4gICAgICAgICAgICB0aGlzLl90YW5rTGV2ZWwgPSBsZXZlbDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICAvLyNlbmRyZWdpb25cclxuICAgIC8vI3JlZ2lvbiBpbXBsZW1lbnRzIG9mIE1vdmluZ09iamVjdFx0XHJcbiAgICBUYW5rT2JqZWN0LnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgY2FsY3VsYXRlTW92ZSh0aGlzLnBvc2l0aW9uLCB0aGlzLl9kaXJlY3Rpb24sIHRoaXMuX3NwZWVkKTtcclxuICAgICAgICB0aGlzLl9nYW1lLmxvZyhcIlRBTksgW1wiICsgdGhpcy5pZCArIFwiXSBNT1ZFRCAtPiBbIHg6IFwiICsgdGhpcy5wb3NpdGlvbi54ICsgXCIsIHk6IFwiICsgdGhpcy5wb3NpdGlvbi55ICsgXCIgXVwiKTtcclxuICAgICAgICAvLyB0ZXN0IG1vdmVtZW50IGlzIHZhbGlkXHJcbiAgICAgICAgdmFyIHRlc3RfdmlzaWJsZSA9IHRoaXMuX2dhbWUudGVzdFZpc2liaWxpdHkodGhpcyk7XHJcbiAgICAgICAgdmFyIHRlc3RfY29sbGlzaW9uID0gdGhpcy5fZ2FtZS5jb2xsaXNpb25UZXN0KHRoaXMpO1xyXG4gICAgICAgIGlmICh0ZXN0X3Zpc2libGUgPT0gZmFsc2UgJiYgdGVzdF9jb2xsaXNpb24ubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5maXRUb0JvcmRlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0ZXN0X2NvbGxpc2lvbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRlc3RfY29sbGlzaW9uLmZvckVhY2goZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC5vYmplY3RUeXBlID09PSBcIklURU1cIiAvKiBJVEVNICovKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LmhpdChfdGhpcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5maXRUb09iamVjdChvYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9nYW1lLmxvZyhcIlRBTksgW1wiICsgX3RoaXMuaWQgKyBcIl0gTU9WRVMgLT4gQkxPQ0tFRCEhIFsgeDogXCIgKyBfdGhpcy5wb3NpdGlvbi54ICsgXCIsIHk6IFwiICsgX3RoaXMucG9zaXRpb24ueSArIFwiIF1cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5leHRTcHJpdGVQb3NpdGlvbigpO1xyXG4gICAgfTtcclxuICAgIFRhbmtPYmplY3QucHJvdG90eXBlLmhpdCA9IGZ1bmN0aW9uIChldmVudE9yaWdpbikge1xyXG4gICAgICAgIGlmICh0aGlzLl9pc0ludmluY2libGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgIH07XHJcbiAgICAvLyNlbmRyZWdpb25cclxuICAgIC8vI3JlZ2lvbiBwdWJsaWMgbWV0aG9kc1xyXG4gICAgVGFua09iamVjdC5wcm90b3R5cGUuZmlyZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbm93ID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgaWYgKG5vdyAtIHRoaXMuX2xhc3RGaXJlZCA+PSBUQU5LX0ZJUkVfREVMQVkpIHtcclxuICAgICAgICAgICAgdGhpcy5fbGFzdEZpcmVkID0gbm93O1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUJ1bGxldCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBUYW5rT2JqZWN0LnByb3RvdHlwZS5zcGF3biA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX2dhbWUuc3RhcnRBbmltYXRpb24odGhpcywgXCJTUEFXTlwiIC8qIFNQQVdOICovLCBudWxsLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIF90aGlzLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMgPT0gX3RoaXMuX2dhbWUubWFpblRhbmspIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmludmluY2libGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFRhbmtPYmplY3QucHJvdG90eXBlLmludmluY2libGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLl9pc0ludmluY2libGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX2dhbWUuc3RhcnRBbmltYXRpb24odGhpcywgXCJJTlZJTkNJQkxFXCIgLyogSU5WSU5DSUJMRSAqLywgbnVsbCwgZnVuY3Rpb24gKGFuaW0pIHtcclxuICAgICAgICAgICAgX3RoaXMuX2lzSW52aW5jaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFRhbmtPYmplY3QucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgICAgIHRoaXMuX2dhbWUuc3RhcnRBbmltYXRpb24odGhpcywgXCJFWFBMT1NJT05fU01BTExcIiAvKiBFWFBMT1NJT05fU01BTEwgKi8sIG51bGwsIGZ1bmN0aW9uIChhbmltYXRpb24pIHtcclxuICAgICAgICAgICAgX3RoaXMuX2dhbWUuc3RhcnRBbmltYXRpb24oYW5pbWF0aW9uLmFuaW1hdGlvblBvaW50LCBcIkVYUExPU0lPTl9MQVJHRVwiIC8qIEVYUExPU0lPTl9MQVJHRSAqLywgbnVsbCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLmlkID09PSBNQUlOX1RBTktfSUQpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5fZ2FtZS5zcGF3blRhbmsoX3RoaXMudGFua1R5cGUsIGZhbHNlLCAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9nYW1lLnNwYXduVGFuayhfdGhpcy50YW5rVHlwZSwgZmFsc2UsIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBUYW5rT2JqZWN0LnByb3RvdHlwZS5sZXZlbHVwID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRhbmtMZXZlbCA8IDMpIHtcclxuICAgICAgICAgICAgdGhpcy50YW5rTGV2ZWwrKztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgVGFua09iamVjdC5wcm90b3R5cGUuY3JlYXRlQnVsbGV0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRhbmtMZXZlbCA8IDIgJiYgdGhpcy5fYnVsbGV0cy5sZW5ndGggPj0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMudGFua0xldmVsIDwgNCAmJiB0aGlzLl9idWxsZXRzLmxlbmd0aCA+PSAyKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHBvc2l0aW9uO1xyXG4gICAgICAgIHZhciB0YW5rU3ByaXRlID0gU1BSVElFX0RFRi5UQU5LW3RoaXMudGFua0NvbG9yXVt0aGlzLnRhbmtMZXZlbF1bdGhpcy5kaXJlY3Rpb25dW3RoaXMuc3ByaXRlUG9zaXRpb25dO1xyXG4gICAgICAgIHZhciBidWxsZXRTcHJpdGUgPSBTUFJUSUVfREVGLkJVTExFVFt0aGlzLmRpcmVjdGlvbl07XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICBjYXNlIFwidXBcIiAvKiB1cCAqLzpcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IHRoaXMucG9zaXRpb24ueCArIHRoaXMuZ2V0TWlkZGxlKHRhbmtTcHJpdGUsIGJ1bGxldFNwcml0ZSwgdGhpcy5kaXJlY3Rpb24pLFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IHRoaXMucG9zaXRpb24ueVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicmlnaHRcIiAvKiByaWdodCAqLzpcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IHRoaXMucG9zaXRpb24ueCArIHRhbmtTcHJpdGUuc2l6ZS53aWR0aCxcclxuICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmdldE1pZGRsZSh0YW5rU3ByaXRlLCBidWxsZXRTcHJpdGUsIHRoaXMuZGlyZWN0aW9uKVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZG93blwiIC8qIGRvd24gKi86XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICB4OiB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLmdldE1pZGRsZSh0YW5rU3ByaXRlLCBidWxsZXRTcHJpdGUsIHRoaXMuZGlyZWN0aW9uKSxcclxuICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLnBvc2l0aW9uLnkgKyB0YW5rU3ByaXRlLnNpemUuaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJsZWZ0XCIgLyogbGVmdCAqLzpcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IHRoaXMucG9zaXRpb24ueCxcclxuICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmdldE1pZGRsZSh0YW5rU3ByaXRlLCBidWxsZXRTcHJpdGUsIHRoaXMuZGlyZWN0aW9uKVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYnVsbGV0U3BlZWQ7XHJcbiAgICAgICAgaWYgKHRoaXMudGFua0xldmVsID09IDApIHtcclxuICAgICAgICAgICAgYnVsbGV0U3BlZWQgPSBCVUxMRVRfU0xPVztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy50YW5rTGV2ZWwgPCA0KSB7XHJcbiAgICAgICAgICAgIGJ1bGxldFNwZWVkID0gQlVMTEVUX0ZBU1Q7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBidWxsZXQgPSBuZXcgQnVsbGV0T2JqZWN0KHRoaXMuX2dhbWUsIHRoaXMsIHBvc2l0aW9uLCB0aGlzLmRpcmVjdGlvbiwgYnVsbGV0U3BlZWQsIEd1aWQubmV3R3VpZCgpKTtcclxuICAgICAgICB0aGlzLl9nYW1lLmluc2VydE9iamVjdChidWxsZXQpO1xyXG4gICAgICAgIHRoaXMuX2J1bGxldHMucHVzaChidWxsZXQuaWQpO1xyXG4gICAgfTtcclxuICAgIFRhbmtPYmplY3QucHJvdG90eXBlLnJlbW92ZUJ1bGxldCA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgIHZhciBmb3VuZCA9IHRoaXMuX2J1bGxldHMuZmluZChmdW5jdGlvbiAoYnVsbGV0KSB7IHJldHVybiBidWxsZXQgPT09IGlkOyB9KTtcclxuICAgICAgICB2YXIgaWR4ID0gdGhpcy5fYnVsbGV0cy5pbmRleE9mKGZvdW5kKTtcclxuICAgICAgICBpZiAoaWR4ID4gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5fYnVsbGV0cy5zcGxpY2UoaWR4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLy8jZW5kcmVnaW9uXHJcbiAgICBUYW5rT2JqZWN0LnByb3RvdHlwZS5nZXRNaWRkbGUgPSBmdW5jdGlvbiAocGFyZW50LCBjaGlsZCwgZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJ1cFwiIC8qIHVwICovIHx8IGRpcmVjdGlvbiA9PT0gXCJkb3duXCIgLyogZG93biAqLykge1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyZW50LnNpemUud2lkdGggLyAyIC0gY2hpbGQuc2l6ZS53aWR0aCAvIDI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyZW50LnNpemUuaGVpZ2h0IC8gMiAtIGNoaWxkLnNpemUuaGVpZ2h0IC8gMjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFRhbmtPYmplY3Q7XHJcbn0oTW92aW5nT2JqZWN0KSk7XHJcbmV4cG9ydCBkZWZhdWx0IFRhbmtPYmplY3Q7XHJcbiIsImltcG9ydCBTUFJUSUVfREVGIGZyb20gXCIuL1Nwcml0ZS9TcHJpdGVEZWZpbml0aW9uXCI7XHJcbmltcG9ydCB7IEFuaW1hdGlvbkRlZmF1bHRzIH0gZnJvbSBcIi4uL0dhbWUvT2JqZWN0L0VudW0vRUFuaW1hdGlvblR5cGVcIjtcclxuaW1wb3J0IHsgZ2V0U3ByaXRlRGF0YSwgZ2V0U3lzdGVtU3ByaXRlLCBnZXRPYmplY3RTaXplLCBnZXRBbmltYXRpb25TaXplIH0gZnJvbSBcIi4vU3ByaXRlL1Nwcml0ZURhdGFcIjtcclxuaW1wb3J0IHsgZ2V0UmFuZG9tUmFuZ2UgfSBmcm9tIFwiLi4vVXRpbHMvVXRpbHNcIjtcclxuaW1wb3J0IFRhbmtBSU9CamVjdCBmcm9tIFwiLi4vR2FtZS9PYmplY3QvVGFua0FJT2JqZWN0XCI7XHJcbmV4cG9ydCB2YXIgTUFYX0ZQUyA9IDYwO1xyXG5leHBvcnQgdmFyIE1FTlVfTUFYX0ZQUyA9IDMwO1xyXG5leHBvcnQgdmFyIERSQVdJTkdfQ09OU1QgPSB7XHJcbiAgICBjb2xvcnM6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBcIiMwMDAwMDBcIixcclxuICAgICAgICBiYWNrZ3JvdW5kX2ZyYW1lOiBcIiM2MzYzNjJcIixcclxuICAgIH0sXHJcbiAgICBzaXplczoge1xyXG4gICAgICAgIGZyYW1lOiB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDMyLFxyXG4gICAgICAgICAgICB0b3A6IDMyLFxyXG4gICAgICAgICAgICBib3R0b206IDMyLFxyXG4gICAgICAgICAgICByaWdodDogU1BSVElFX0RFRi5TWVNURU0uRlJBTUUuc2l6ZS53aWR0aFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2NyZWVuOiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMiAqIDEzLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDMyICogMTNcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgcG9zaXRpb25zOiB7XHJcbiAgICAgICAgbWFpbjoge1xyXG4gICAgICAgICAgICBjdXJzb3Jfc3RhcnQ6IDI2NVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkZWJ1Zzoge1xyXG4gICAgICAgIGZvbnQ6IHtcclxuICAgICAgICAgICAgc2l6ZTogMTIsXHJcbiAgICAgICAgICAgIGZvbnQ6ICdzYW4tc2VyaWYnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG52YXIgUmVuZGVyZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBSZW5kZXJlcihnYW1lLCBjYW52YXMsIHNwcml0ZV9tYWluX3NyYywgc3ByaXRlX3RpdGxlX3NyYykge1xyXG4gICAgICAgIHRoaXMuX2ZwcyA9IHtcclxuICAgICAgICAgICAgZnBzSW50ZXJ2YWw6IDEwMDAgLyBNQVhfRlBTLFxyXG4gICAgICAgICAgICBub3c6IHBlcmZvcm1hbmNlLm5vdygpLFxyXG4gICAgICAgICAgICB0aGVuOiBwZXJmb3JtYW5jZS5ub3coKSxcclxuICAgICAgICAgICAgZWxhcHNlZDogMFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGNhbnZhcyA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgJ2NhbnZhcyBpcyBudWxsIG9yIHVuZGVmaW5lZCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2NhbnZhcyA9IGNhbnZhcztcclxuICAgICAgICBpZiAoZ2FtZSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgJ2dhbWUgaXMgbnVsbCBvciB1bmRlZmluZWQnO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9nYW1lID0gZ2FtZTtcclxuICAgICAgICB0aGlzLmluaXRTY3JlZW4oKTtcclxuICAgICAgICB0aGlzLmxvYWRTcHJpdGUoc3ByaXRlX21haW5fc3JjLCBzcHJpdGVfdGl0bGVfc3JjKTtcclxuICAgIH1cclxuICAgIFJlbmRlcmVyLnByb3RvdHlwZS5sb2FkU3ByaXRlID0gZnVuY3Rpb24gKG1haW5TcmMsIHRpdGxlU3JjKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLl9tYWluU3ByaXRlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgdGhpcy5fdGl0bGVTcHJpdGUgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICB0aGlzLl9tYWluU3ByaXRlLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgX3RoaXMuX3RpdGxlU3ByaXRlLnNyYyA9IHRpdGxlU3JjO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5fdGl0bGVTcHJpdGUub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBfdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX21haW5TcHJpdGUuc3JjID0gbWFpblNyYztcclxuICAgIH07XHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUuaW5pdFNjcmVlbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgc2l6ZXMgPSBEUkFXSU5HX0NPTlNULnNpemVzO1xyXG4gICAgICAgIHRoaXMuX2NhbnZhcy53aWR0aCA9IHNpemVzLmZyYW1lLmxlZnQgKyBzaXplcy5mcmFtZS5yaWdodCArIHNpemVzLnNjcmVlbi53aWR0aDtcclxuICAgICAgICB0aGlzLl9jYW52YXMuaGVpZ2h0ID0gc2l6ZXMuZnJhbWUudG9wICsgc2l6ZXMuZnJhbWUuYm90dG9tICsgc2l6ZXMuc2NyZWVuLmhlaWdodDtcclxuICAgIH07XHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHsgX3RoaXMucmVuZGVyKCk7IH0pO1xyXG4gICAgICAgIHZhciBmcHMgPSB0aGlzLl9mcHM7XHJcbiAgICAgICAgZnBzLm5vdyA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIGZwcy5lbGFwc2VkID0gZnBzLm5vdyAtIGZwcy50aGVuO1xyXG4gICAgICAgIGlmIChmcHMuZWxhcHNlZCA+IGZwcy5mcHNJbnRlcnZhbCkge1xyXG4gICAgICAgICAgICBmcHMudGhlbiA9IGZwcy5ub3cgLSAoZnBzLmVsYXBzZWQgJSBmcHMuZnBzSW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICAvLyBzdGFydCBkcmF3aW5nXHJcbiAgICAgICAgICAgIC8vIGdldCBjb250ZXh0XHJcbiAgICAgICAgICAgIHZhciBjdHggPSB0aGlzLl9jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICAgICAgLy8gY2xlYXIgc2NyZWVuXHJcbiAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY3R4LmNhbnZhcy53aWR0aCwgY3R4LmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgICAgICAvLyBkcmF3IGJhY2tncm91bmRzXHJcbiAgICAgICAgICAgIHRoaXMuZHJhd0JhY2tncm91bmQoY3R4KTtcclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLl9nYW1lLmN1cnJlbnRNZW51KSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiTUFJTlwiIC8qIE1BSU4gKi86XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJNYWluKGN0eCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiR0FNRVwiIC8qIEdBTUUgKi86XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJHYW1lKGN0eCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiU1RBR0VcIiAvKiBTVEFHRSAqLzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclN0YWdlKGN0eCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiQ09OU1RSVUNUXCIgLyogQ09OU1RSVUNUICovOlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGRyYXcgZGVidWcgY291bnRlclxyXG4gICAgICAgICAgICBpZiAodGhpcy5fZ2FtZS5kZWJ1Zykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3RGVidWdDb3VudGVyKGN0eCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiByZW5kZXIgbWFpbiBzY3JlZW5cclxuICAgICAqIEBwYXJhbSBjdHggY29udGV4dFxyXG4gICAgICovXHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUucmVuZGVyTWFpbiA9IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICB0aGlzLnByb2Nlc3NNYWluKCk7XHJcbiAgICAgICAgdGhpcy5kcmF3T2JqZWN0cyhjdHgsIHRoaXMuX2dhbWUub2JqZWN0cyk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBwcm9jZXNzIG1haW4gc2NyZWVuIGFjdGlvbnNcclxuICAgICAqL1xyXG4gICAgUmVuZGVyZXIucHJvdG90eXBlLnByb2Nlc3NNYWluID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIG9iamVjdHMgPSB0aGlzLl9nYW1lLm9iamVjdHM7XHJcbiAgICAgICAgaWYgKG9iamVjdHMgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIG9iamVjdHMuZm9yRWFjaChmdW5jdGlvbiAob2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcG9zaXRpb24gPSBvYmplY3QucG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG9iamVjdC5vYmplY3RUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkFOSU1BVElPTlwiIC8qIEFOSU1BVElPTiAqLzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFuaW1hdGlvbiA9IG9iamVjdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFuaW1hdGlvblBvaW50ID0gYW5pbWF0aW9uLmFuaW1hdGlvblBvaW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYW5pbWF0aW9uU2l6ZSA9IGdldEFuaW1hdGlvblNpemUoYW5pbWF0aW9uLmFuaW1hdGlvblR5cGUsIGFuaW1hdGlvbi5zcHJpdGVQb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoYW5pbWF0aW9uLmFuaW1hdGlvblR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJUSVRMRVwiIC8qIFRJVExFICovOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbi55ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi55ID0gcG9zaXRpb24ueSAtIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvblBvaW50LnkgPSBwb3NpdGlvbi55ICsgYW5pbWF0aW9uU2l6ZS5oZWlnaHQgLyAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChfdGhpcy50aXRsZVNob3duID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi55ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uUG9pbnQueSA9IHBvc2l0aW9uLnkgKyBhbmltYXRpb25TaXplLmhlaWdodCAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5leHBpcmUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy50aXRsZVNob3duID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQ1VSU09SXCIgLyogQ1VSU09SICovOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjdXJzb3JJbmRleCA9IF90aGlzLl9nYW1lLmN1cnNvckluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjdXJzb3JTdGFydCA9IERSQVdJTkdfQ09OU1QucG9zaXRpb25zLm1haW4uY3Vyc29yX3N0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvblBvaW50LnkgPSBjdXJzb3JTdGFydCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvckluZGV4ICogYW5pbWF0aW9uU2l6ZS5oZWlnaHQgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25TaXplLmhlaWdodCAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLm5leHRTcHJpdGVQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogcmVuZGVyIGdhbWUgc2NyZWVuXHJcbiAgICAgKiBAcGFyYW0gY3R4IGNvbnRleHRcclxuICAgICAqL1xyXG4gICAgUmVuZGVyZXIucHJvdG90eXBlLnJlbmRlckdhbWUgPSBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgICAgLy8gcHJvY2VzcyBhY3Rpb25zXHJcbiAgICAgICAgdGhpcy5wcm9jZXNzR2FtZSgpO1xyXG4gICAgICAgIC8vIGRyYXcgZnJhbWVcclxuICAgICAgICB0aGlzLmRyYXdGcmFtZShjdHgpO1xyXG4gICAgICAgIC8vIGRyYXcgb2JqZWN0c1xyXG4gICAgICAgIHRoaXMuZHJhd09iamVjdHMoY3R4LCB0aGlzLl9nYW1lLm9iamVjdHMpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogcHJvY2VzcyBhbGwgZ2FtZSBhY3Rpb25zXHJcbiAgICAgKi9cclxuICAgIFJlbmRlcmVyLnByb3RvdHlwZS5wcm9jZXNzR2FtZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmICh0aGlzLl9nYW1lLnBhdXNlID09IHRydWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbWFpblRhbmsgPSB0aGlzLl9nYW1lLm1haW5UYW5rO1xyXG4gICAgICAgIGlmIChtYWluVGFuayAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChtYWluVGFuay52aXNpYmxlID09PSB0cnVlICYmIHRoaXMuY2hlY2tLZXlTdGF0ZVN5bmMoKSkge1xyXG4gICAgICAgICAgICAgICAgbWFpblRhbmsubW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBvYmplY3RzID0gdGhpcy5fZ2FtZS5vYmplY3RzO1xyXG4gICAgICAgIGlmIChvYmplY3RzICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBvYmplY3RzLmZvckVhY2goZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChvYmplY3Qub2JqZWN0VHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJCVUxMRVRcIiAvKiBCVUxMRVQgKi86XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC5tb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJBTklNQVRJT05cIiAvKiBBTklNQVRJT04gKi86XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhbmltYXRpb24gPSBvYmplY3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbmltYXRpb24uZXhwaXJlVGltZSA8IF90aGlzLl9mcHMubm93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24uZXhwaXJlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFuaW1hdGlvblBvaW50ID0gYW5pbWF0aW9uLmFuaW1hdGlvblBvaW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYW5pbWF0aW9uU2l6ZSA9IGdldEFuaW1hdGlvblNpemUoYW5pbWF0aW9uLmFuaW1hdGlvblR5cGUsIGFuaW1hdGlvbi5zcHJpdGVQb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoYW5pbWF0aW9uLmFuaW1hdGlvblR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJJTlZJTkNJQkxFXCIgLyogSU5WSU5DSUJMRSAqLzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGFua1NpemUgPSBnZXRPYmplY3RTaXplKFwiVEFOS1wiIC8qIFRBTksgKi8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvblBvaW50LnggPSBtYWluVGFuay5wb3NpdGlvbi54ICsgdGFua1NpemUud2lkdGggLyAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvblBvaW50LnkgPSBtYWluVGFuay5wb3NpdGlvbi55ICsgdGFua1NpemUuaGVpZ2h0IC8gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJHQU1FT1ZFUlwiIC8qIEdBTUVPVkVSICovOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbmltYXRpb25Qb2ludC55ID49IF90aGlzLl9jYW52YXMuY2xpZW50SGVpZ2h0IC8gMiArIGFuaW1hdGlvblNpemUuaGVpZ2h0IC8gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25Qb2ludC55ID0gYW5pbWF0aW9uUG9pbnQueSAtIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5uZXh0U3ByaXRlUG9zaXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIlRBTktcIiAvKiBUQU5LICovOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGFuayA9IG9iamVjdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhbmsgaW5zdGFuY2VvZiBUYW5rQUlPQmplY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbmVteSA9IHRhbms7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGVmaW5pdGlvbiA9IGVuZW15LmdldENvbG9yRGVmaW5pdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLl9mcHMubm93IC0gZW5lbXkubGFzdENoYW5nZWQgPiBkZWZpbml0aW9uLmRlbGF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5lbXkubmV4dENvbG9ySW5kZXgoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmVteS5sYXN0Q2hhbmdlZCA9IF90aGlzLl9mcHMubm93O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZ2FtZS5zcGF3blRhbmsoXCJFTkVNWV9UQU5LXCIgLyogRU5FTVlfVEFOSyAqLyk7XHJcbiAgICB9O1xyXG4gICAgUmVuZGVyZXIucHJvdG90eXBlLnJlbmRlclN0YWdlID0gZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgICAgIHRoaXMuZHJhd0N1cnRhaW4oY3R4KTtcclxuICAgIH07XHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUuZHJhd0N1cnRhaW4gPSBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgIHZhciBvYmplY3RzID0gdGhpcy5fZ2FtZS5vYmplY3RzO1xyXG4gICAgICAgIG9iamVjdHMuZm9yRWFjaChmdW5jdGlvbiAob2JqZWN0KSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAob2JqZWN0Lm9iamVjdFR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJBTklNQVRJT05cIiAvKiBBTklNQVRJT04gKi86XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFuaW1hdGlvbiA9IG9iamVjdDtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGFuaW1hdGlvbi5hbmltYXRpb25UeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJDVVJUQUlOXCIgLyogQ1VSVEFJTiAqLzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkZWZhdWx0cyA9IEFuaW1hdGlvbkRlZmF1bHRzLkNVUlRBSU47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3JpZ2luYWxfc3RhcnQgPSBhbmltYXRpb24uZXhwaXJlVGltZSAtIGRlZmF1bHRzLmR1cmF0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsYXBzZWQgPSBfdGhpcy5fZnBzLm5vdyAtIG9yaWdpbmFsX3N0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb2dyZXNzID0gZWxhcHNlZCAvIGRlZmF1bHRzLmR1cmF0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNjcmVlbl8xID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjdHguY2FudmFzLmNsaWVudFdpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogY3R4LmNhbnZhcy5jbGllbnRIZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gRFJBV0lOR19DT05TVC5jb2xvcnMuYmFja2dyb3VuZF9mcmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9ncmVzcyA8IC4yNSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBzY3JlZW5fMS53aWR0aCwgc2NyZWVuXzEuaGVpZ2h0ICogcHJvZ3Jlc3MgKiAyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHguZmlsbFJlY3QoMCwgc2NyZWVuXzEuaGVpZ2h0IC8gMiArIHNjcmVlbl8xLmhlaWdodCAvIDIgLSBzY3JlZW5fMS5oZWlnaHQgKiBwcm9ncmVzcyAqIDIsIHNjcmVlbl8xLndpZHRoLCBzY3JlZW5fMS5oZWlnaHQgKiBwcm9ncmVzcyAqIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocHJvZ3Jlc3MgPCAuNzUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgc2NyZWVuXzEud2lkdGgsIHNjcmVlbl8xLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZHJhd1N0YWdlTnVtYmVyKGN0eCwgX3RoaXMuX2dhbWUuZ2FtZURhdGEubGV2ZWxEYXRhLmxldmVsSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocHJvZ3Jlc3MgPCAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNsb3NpbmdQcm9ncmVzcyA9IHByb2dyZXNzIC0gLjc1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IERSQVdJTkdfQ09OU1QuY29sb3JzLmJhY2tncm91bmRfZnJhbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIHNjcmVlbl8xLndpZHRoLCBzY3JlZW5fMS5oZWlnaHQgLyAyIC0gKHNjcmVlbl8xLmhlaWdodCAqIChjbG9zaW5nUHJvZ3Jlc3MgKiAyKSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5maWxsUmVjdCgwLCBzY3JlZW5fMS5oZWlnaHQgLyAyICsgKHNjcmVlbl8xLmhlaWdodCAqIChjbG9zaW5nUHJvZ3Jlc3MgKiAyKSksIHNjcmVlbl8xLndpZHRoLCBzY3JlZW5fMS5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLmV4cGlyZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFJlbmRlcmVyLnByb3RvdHlwZS5kcmF3U3RhZ2VOdW1iZXIgPSBmdW5jdGlvbiAoY3R4LCBudW1iZXIpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBzdGFnZSA9IFNQUlRJRV9ERUYuU1lTVEVNLlNUQUdFO1xyXG4gICAgICAgIHZhciBudW1iZXJzID0gW107XHJcbiAgICAgICAgdmFyIG51bWJlcl9zdHIgPSBudW1iZXIudG9TdHJpbmcoKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gbnVtYmVyX3N0ci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBudW1iZXJzLnB1c2goU1BSVElFX0RFRi5TWVNURU0uTlVNQkVSW3BhcnNlSW50KG51bWJlcl9zdHIuY2hhckF0KGkpKV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuX21haW5TcHJpdGUsIHN0YWdlLnBvc2l0aW9uLngsIHN0YWdlLnBvc2l0aW9uLnksIHN0YWdlLnNpemUud2lkdGgsIHN0YWdlLnNpemUuaGVpZ2h0LCBjdHguY2FudmFzLmNsaWVudFdpZHRoIC8gMiAtIHN0YWdlLnNpemUud2lkdGggKiAoNCAvIDUpLCBjdHguY2FudmFzLmNsaWVudEhlaWdodCAvIDIgLSBzdGFnZS5zaXplLmhlaWdodCwgc3RhZ2Uuc2l6ZS53aWR0aCwgc3RhZ2Uuc2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgIG51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAobnVtYmVyLCBpbmRleCkge1xyXG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKF90aGlzLl9tYWluU3ByaXRlLCBudW1iZXIucG9zaXRpb24ueCwgbnVtYmVyLnBvc2l0aW9uLnksIG51bWJlci5zaXplLndpZHRoLCBudW1iZXIuc2l6ZS5oZWlnaHQsIGN0eC5jYW52YXMuY2xpZW50V2lkdGggLyAyICsgbnVtYmVyLnNpemUud2lkdGggKiAoNCAtIGluZGV4IC0gMSksIGN0eC5jYW52YXMuY2xpZW50SGVpZ2h0IC8gMiAtIG51bWJlci5zaXplLmhlaWdodCwgbnVtYmVyLnNpemUud2lkdGgsIG51bWJlci5zaXplLmhlaWdodCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgUmVuZGVyZXIucHJvdG90eXBlLmNoZWNrS2V5U3RhdGVTeW5jID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBtYWluVGFuayA9IHRoaXMuX2dhbWUubWFpblRhbms7XHJcbiAgICAgICAgdmFyIGtleVN0YXRlID0gdGhpcy5fZ2FtZS5rZXlTdGF0ZTtcclxuICAgICAgICBpZiAoKGtleVN0YXRlLkFycm93VXAgPT09IHRydWUgJiYgbWFpblRhbmsuZGlyZWN0aW9uID09IFwidXBcIiAvKiB1cCAqLykgfHxcclxuICAgICAgICAgICAgKGtleVN0YXRlLkFycm93UmlnaHQgPT09IHRydWUgJiYgbWFpblRhbmsuZGlyZWN0aW9uID09IFwicmlnaHRcIiAvKiByaWdodCAqLykgfHxcclxuICAgICAgICAgICAgKGtleVN0YXRlLkFycm93RG93biA9PT0gdHJ1ZSAmJiBtYWluVGFuay5kaXJlY3Rpb24gPT0gXCJkb3duXCIgLyogZG93biAqLykgfHxcclxuICAgICAgICAgICAgKGtleVN0YXRlLkFycm93TGVmdCA9PT0gdHJ1ZSAmJiBtYWluVGFuay5kaXJlY3Rpb24gPT0gXCJsZWZ0XCIgLyogbGVmdCAqLykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8vI3JlZ2lvbiBkcmF3aW5nIG1ldGhvZHNcclxuICAgIFJlbmRlcmVyLnByb3RvdHlwZS5kcmF3QmFja2dyb3VuZCA9IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBEUkFXSU5HX0NPTlNULmNvbG9ycy5iYWNrZ3JvdW5kO1xyXG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjdHguY2FudmFzLmNsaWVudFdpZHRoLCBjdHguY2FudmFzLmNsaWVudEhlaWdodCk7XHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH07XHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUuZHJhd0ZyYW1lID0gZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgICAgIHZhciBGUkFNRSA9IERSQVdJTkdfQ09OU1Quc2l6ZXMuZnJhbWU7XHJcbiAgICAgICAgdmFyIFNQUklURV9GUkFNRSA9IGdldFN5c3RlbVNwcml0ZShcIkZSQU1FXCIgLyogRlJBTUUgKi8pO1xyXG4gICAgICAgIHZhciBTUFJJVEVfVEFOS19JQ09OID0gZ2V0U3lzdGVtU3ByaXRlKFwiVEFOS19JQ09OXCIgLyogVEFOS19JQ09OICovKTtcclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBEUkFXSU5HX0NPTlNULmNvbG9ycy5iYWNrZ3JvdW5kX2ZyYW1lO1xyXG4gICAgICAgIC8vIHRvcFxyXG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjdHguY2FudmFzLmNsaWVudFdpZHRoLCBGUkFNRS50b3ApO1xyXG4gICAgICAgIC8vIGxlZnRcclxuICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgRlJBTUUubGVmdCwgY3R4LmNhbnZhcy5jbGllbnRIZWlnaHQpO1xyXG4gICAgICAgIC8vIGJvdHRvbVxyXG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCBjdHguY2FudmFzLmNsaWVudEhlaWdodCAtIEZSQU1FLmJvdHRvbSwgY3R4LmNhbnZhcy5jbGllbnRXaWR0aCwgRlJBTUUuYm90dG9tKTtcclxuICAgICAgICAvLyByaWdodFxyXG4gICAgICAgIGN0eC5maWxsUmVjdChjdHguY2FudmFzLmNsaWVudFdpZHRoIC0gRlJBTUUucmlnaHQsIDAsIEZSQU1FLnJpZ2h0LCBjdHguY2FudmFzLmNsaWVudEhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5kcmF3U3ByaXRlKGN0eCwgU1BSSVRFX0ZSQU1FLCB7IHg6IGN0eC5jYW52YXMuY2xpZW50V2lkdGggLSBGUkFNRS5yaWdodCwgeTogMCB9KTtcclxuICAgICAgICAvLyBlbmVteSB0YW5rIGxlZnRcclxuICAgICAgICB2YXIgZ3JvdXBzID0gdGhpcy5fZ2FtZS5nYW1lRGF0YS5sZXZlbERhdGEudGFua3M7XHJcbiAgICAgICAgdmFyIHRhbmtDb3VudCA9IDA7XHJcbiAgICAgICAgZ3JvdXBzLmZvckVhY2goZnVuY3Rpb24gKGdyb3VwKSB7XHJcbiAgICAgICAgICAgIHRhbmtDb3VudCArPSBncm91cC5ERUZBVUxUICsgZ3JvdXAuU1BFRUQgKyBncm91cC5QT1dFUiArIGdyb3VwLkFSTU9VUkVEO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IDI7IGorKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRhbmtDb3VudCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdTcHJpdGUoY3R4LCBTUFJJVEVfVEFOS19JQ09OLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IGN0eC5jYW52YXMuY2xpZW50V2lkdGggLSBGUkFNRS5yaWdodCArIDE2ICogKGogKyAxKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTogNDggKyAxNiAqIGlcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5maWxsUmVjdChjdHguY2FudmFzLmNsaWVudFdpZHRoIC0gRlJBTUUucmlnaHQgKyAxNiAqIChqICsgMSksIDQ4ICsgMTYgKiBpLCAxNiwgMTYpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGFua0NvdW50LS07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gUDEgbGlmZVxyXG4gICAgICAgIHRoaXMuZHJhd1Nwcml0ZShjdHgsIGdldFN5c3RlbVNwcml0ZShcIk5VTUJFUlwiIC8qIE5VTUJFUiAqLywgdGhpcy5fZ2FtZS5nYW1lRGF0YS5wbGF5ZXJEYXRhWzBdLmxpZmUpLCB7IHg6IGN0eC5jYW52YXMuY2xpZW50V2lkdGggLSBGUkFNRS5yaWdodCArIDMyLCB5OiAyODggfSk7XHJcbiAgICAgICAgLy8gUDIgbGlmZVxyXG4gICAgICAgIGlmICh0aGlzLl9nYW1lLmdhbWVEYXRhLnBsYXllckRhdGEubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdTcHJpdGUoY3R4LCBnZXRTeXN0ZW1TcHJpdGUoXCJOVU1CRVJcIiAvKiBOVU1CRVIgKi8sIHRoaXMuX2dhbWUuZ2FtZURhdGEucGxheWVyRGF0YVsxXS5saWZlKSwgeyB4OiBjdHguY2FudmFzLmNsaWVudFdpZHRoIC0gRlJBTUUucmlnaHQgKyAzMiwgeTogMzM2IH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY3R4LmZpbGxSZWN0KGN0eC5jYW52YXMuY2xpZW50V2lkdGggLSBGUkFNRS5yaWdodCArIDE2LCAzMjAsIDMyLCAzMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBsZXZlbElkID0gdGhpcy5fZ2FtZS5nYW1lRGF0YS5sZXZlbERhdGEubGV2ZWxJZDtcclxuICAgICAgICB2YXIgbGV2ZWxUeXBlID0gdHlwZW9mIChsZXZlbElkKTtcclxuICAgICAgICBpZiAobGV2ZWxUeXBlID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICBpZiAoTWF0aC5mbG9vcihsZXZlbElkIC8gMTApID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbFJlY3QoY3R4LmNhbnZhcy5jbGllbnRXaWR0aCAtIEZSQU1FLnJpZ2h0ICsgMTYsIDQwMCwgMTYsIDE2KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd1Nwcml0ZShjdHgsIGdldFN5c3RlbVNwcml0ZShcIk5VTUJFUlwiIC8qIE5VTUJFUiAqLywgTWF0aC5mbG9vcihsZXZlbElkIC8gMTApKSwgeyB4OiBjdHguY2FudmFzLmNsaWVudFdpZHRoIC0gRlJBTUUucmlnaHQgKyAxNiwgeTogNDAwIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd1Nwcml0ZShjdHgsIGdldFN5c3RlbVNwcml0ZShcIk5VTUJFUlwiIC8qIE5VTUJFUiAqLywgbGV2ZWxJZCAlIDEwKSwgeyB4OiBjdHguY2FudmFzLmNsaWVudFdpZHRoIC0gRlJBTUUucmlnaHQgKyAzMiwgeTogNDAwIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChsZXZlbFR5cGUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBEUkFXSU5HX0NPTlNULmNvbG9ycy5iYWNrZ3JvdW5kX2ZyYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfTtcclxuICAgIFJlbmRlcmVyLnByb3RvdHlwZS5kcmF3T2JqZWN0cyA9IGZ1bmN0aW9uIChjdHgsIG9iamVjdHMpIHtcclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgb2JqZWN0ID0gb2JqZWN0c1tpXTtcclxuICAgICAgICAgICAgdmFyIHNwcml0ZSA9IGdldFNwcml0ZURhdGEob2JqZWN0KTtcclxuICAgICAgICAgICAgdGhpcy5kcmF3T2JqZWN0KGN0eCwgb2JqZWN0LCBzcHJpdGUpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fZ2FtZS5kZWJ1Zykge1xyXG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJyNGRjAwMDAnO1xyXG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZVJlY3Qob2JqZWN0LnBvc2l0aW9uLnggKyAxLCBvYmplY3QucG9zaXRpb24ueSArIDEsIHNwcml0ZS5zaXplLndpZHRoIC0gMiwgc3ByaXRlLnNpemUuaGVpZ2h0IC0gMik7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmRyYXdUZXh0KGN0eCwgYCR7b2JqZWN0LmlkfWAsIHtcclxuICAgICAgICAgICAgICAgIC8vIFx0eDogRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS5sZWZ0ICsgb2JqZWN0LnBvc2l0aW9uLngsXHJcbiAgICAgICAgICAgICAgICAvLyBcdHk6IERSQVdJTkdfQ09OU1Quc2l6ZXMuZnJhbWUudG9wICsgb2JqZWN0LnBvc2l0aW9uLnkgLSAxLFxyXG4gICAgICAgICAgICAgICAgLy8gfSwgc3ByaXRlLnNpemUud2lkdGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFJlbmRlcmVyLnByb3RvdHlwZS5kcmF3T2JqZWN0ID0gZnVuY3Rpb24gKGN0eCwgb2JqZWN0LCBzcHJpdGUpIHtcclxuICAgICAgICB2YXIgc3ByaXRlX3NyYyA9IHRoaXMuX21haW5TcHJpdGU7XHJcbiAgICAgICAgaWYgKG9iamVjdC52aXNpYmxlID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9iamVjdC5vYmplY3RUeXBlID09PSBcIkFOSU1BVElPTlwiIC8qIEFOSU1BVElPTiAqLykge1xyXG4gICAgICAgICAgICB2YXIgYW5pbWF0aW9uID0gb2JqZWN0O1xyXG4gICAgICAgICAgICBpZiAoYW5pbWF0aW9uLmFuaW1hdGlvblR5cGUgPT09IFwiVElUTEVcIiAvKiBUSVRMRSAqLykge1xyXG4gICAgICAgICAgICAgICAgc3ByaXRlX3NyYyA9IHRoaXMuX3RpdGxlU3ByaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzcHJpdGUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZiAob2JqZWN0Lm9iamVjdFR5cGUgPT09IFwiQkxPQ0tcIiAvKiBCTE9DSyAqLykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGJsb2NrID0gb2JqZWN0O1xyXG4gICAgICAgICAgICAgICAgdmFyIGJsb2NrU3RhdGUgPSBibG9jay5ibG9ja1N0YXRlNHg0O1xyXG4gICAgICAgICAgICAgICAgdmFyIGNlbGxTaXplID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBzcHJpdGUuc2l6ZS53aWR0aCAvIDQsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBzcHJpdGUuc2l6ZS53aWR0aCAvIDRcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJsb2NrU3RhdGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGJsb2NrU3RhdGVbaV0ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJsb2NrU3RhdGVbaV1bal0gPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2Uoc3ByaXRlX3NyYywgc3ByaXRlLnBvc2l0aW9uLnggKyBjZWxsU2l6ZS53aWR0aCAqIGosIHNwcml0ZS5wb3NpdGlvbi55ICsgY2VsbFNpemUuaGVpZ2h0ICogaSwgY2VsbFNpemUud2lkdGgsIGNlbGxTaXplLmhlaWdodCwgb2JqZWN0LnBvc2l0aW9uLnggKyBjZWxsU2l6ZS53aWR0aCAqIGosIG9iamVjdC5wb3NpdGlvbi55ICsgY2VsbFNpemUuaGVpZ2h0ICogaSwgY2VsbFNpemUud2lkdGgsIGNlbGxTaXplLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKHNwcml0ZV9zcmMsIHNwcml0ZS5wb3NpdGlvbi54LCBzcHJpdGUucG9zaXRpb24ueSwgc3ByaXRlLnNpemUud2lkdGgsIHNwcml0ZS5zaXplLmhlaWdodCwgb2JqZWN0LnBvc2l0aW9uLngsIG9iamVjdC5wb3NpdGlvbi55LCBzcHJpdGUuc2l6ZS53aWR0aCwgc3ByaXRlLnNpemUuaGVpZ2h0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUuZHJhd0RlYnVnQ291bnRlciA9IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICB2YXIgdGFuayA9IHRoaXMuX2dhbWUubWFpblRhbms7XHJcbiAgICAgICAgaWYgKHRhbmsgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdUZXh0KGN0eCwgXCJNQUlOIFRBTks6IFRBTktfXCIgKyB0YW5rLnRhbmtDb2xvciArIFwiX1wiICsgdGFuay50YW5rTGV2ZWwgKyBcIihcIiArIHRhbmsucG9zaXRpb24ueCArIFwiLCBcIiArIHRhbmsucG9zaXRpb24ueSArIFwiLCBcIiArIHRhbmsuZGlyZWN0aW9uLnRvU3RyaW5nKCkgKyBcIilcIiwgeyB4OiAwLCB5OiAxNSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd1RleHQoY3R4LCBcIk1BSU4gVEFOSzogTk9UIEZPVU5EXCIsIHsgeDogMCwgeTogMTUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBmcHMgPSAoMTAwMCAvIHRoaXMuX2Zwcy5lbGFwc2VkKS50b0ZpeGVkKDIpICsgXCJmcHMgXCI7XHJcbiAgICAgICAgdGhpcy5kcmF3VGV4dChjdHgsIGZwcywgeyB4OiBjdHguY2FudmFzLndpZHRoIC0gKGN0eC5tZWFzdXJlVGV4dChmcHMpLndpZHRoICogMS4zNSksIHk6IDE1IH0pO1xyXG4gICAgICAgIHZhciBrZXlTdGF0ZSA9IHRoaXMuX2dhbWUua2V5U3RhdGU7XHJcbiAgICAgICAgdGhpcy5kcmF3VGV4dChjdHgsIFwiU3BhY2U6IFwiICsgKGtleVN0YXRlLlNwYWNlID8gJ1QnIDogJ0YnKSwgeyB4OiAwLCB5OiBjdHguY2FudmFzLmhlaWdodCB9KTtcclxuICAgICAgICB0aGlzLmRyYXdUZXh0KGN0eCwgXCJBcnJvd0xlZnQ6IFwiICsgKGtleVN0YXRlLkFycm93TGVmdCA/ICdUJyA6ICdGJyksIHsgeDogMCwgeTogY3R4LmNhbnZhcy5oZWlnaHQgLSAxNSB9KTtcclxuICAgICAgICB0aGlzLmRyYXdUZXh0KGN0eCwgXCJBcnJvd0Rvd246IFwiICsgKGtleVN0YXRlLkFycm93RG93biA/ICdUJyA6ICdGJyksIHsgeDogMCwgeTogY3R4LmNhbnZhcy5oZWlnaHQgLSAzMCB9KTtcclxuICAgICAgICB0aGlzLmRyYXdUZXh0KGN0eCwgXCJBcnJvd1JpZ2h0OiBcIiArIChrZXlTdGF0ZS5BcnJvd1JpZ2h0ID8gJ1QnIDogJ0YnKSwgeyB4OiAwLCB5OiBjdHguY2FudmFzLmhlaWdodCAtIDQ1IH0pO1xyXG4gICAgICAgIHRoaXMuZHJhd1RleHQoY3R4LCBcIkFycm93VXA6IFwiICsgKGtleVN0YXRlLkFycm93VXAgPyAnVCcgOiAnRicpLCB7IHg6IDAsIHk6IGN0eC5jYW52YXMuaGVpZ2h0IC0gNjAgfSk7XHJcbiAgICAgICAgdGhpcy5kcmF3VGV4dChjdHgsIFwiW0lLZXlTdGF0ZV1cIiwgeyB4OiAwLCB5OiBjdHguY2FudmFzLmhlaWdodCAtIDc1IH0pO1xyXG4gICAgfTtcclxuICAgIFJlbmRlcmVyLnByb3RvdHlwZS5kcmF3VGV4dCA9IGZ1bmN0aW9uIChjdHgsIHRleHQsIHBvc2l0aW9uLCBtYXhXaWR0aCkge1xyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgY3R4LmZvbnQgPSBEUkFXSU5HX0NPTlNULmRlYnVnLmZvbnQuc2l6ZSArIFwicHggXCIgKyBEUkFXSU5HX0NPTlNULmRlYnVnLmZvbnQuZm9udDtcclxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnd2hpdGUnO1xyXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAyO1xyXG4gICAgICAgIGN0eC5zdHJva2VUZXh0KHRleHQsIHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIG1heFdpZHRoKTtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcclxuICAgICAgICBjdHguZmlsbFRleHQodGV4dCwgcG9zaXRpb24ueCwgcG9zaXRpb24ueSwgbWF4V2lkdGgpO1xyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9O1xyXG4gICAgUmVuZGVyZXIucHJvdG90eXBlLmRyYXdTcHJpdGUgPSBmdW5jdGlvbiAoY3R4LCBzcHJpdGUsIHBvc2l0aW9uLCBzaXplKSB7XHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuX21haW5TcHJpdGUsIHNwcml0ZS5wb3NpdGlvbi54LCBzcHJpdGUucG9zaXRpb24ueSwgc3ByaXRlLnNpemUud2lkdGgsIHNwcml0ZS5zaXplLmhlaWdodCwgcG9zaXRpb24ueCwgcG9zaXRpb24ueSwgc2l6ZSAhPSB1bmRlZmluZWQgPyBzaXplLndpZHRoIDogc3ByaXRlLnNpemUud2lkdGgsIHNpemUgIT0gdW5kZWZpbmVkID8gc2l6ZS5oZWlnaHQgOiBzcHJpdGUuc2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9O1xyXG4gICAgLy8jZW5kcmVnaW9uXHJcbiAgICAvLyNyZWdpb24gcHVibGljIG1ldGhvZHNcclxuICAgIC8qKlxyXG4gICAgICogVGVzdCBvYmplY3QgaXMgdmlzaWJsZVxyXG4gICAgICogQHBhcmFtIG9iamVjdCBvYmplY3QgZm9yIHRlc3RcclxuICAgICAqIEBwYXJhbSBzcHJpdGUgb2JqZWN0J3Mgc3ByaXRlIGRhdGEgZm9yIHNpemVcclxuICAgICAqL1xyXG4gICAgUmVuZGVyZXIucHJvdG90eXBlLm9iamVjdFZpc2libGVUZXN0ID0gZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgICAgIHZhciBwb3NpdGlvbiA9IG9iamVjdC5wb3NpdGlvbjtcclxuICAgICAgICB2YXIgc2l6ZSA9IGdldFNwcml0ZURhdGEob2JqZWN0KS5zaXplO1xyXG4gICAgICAgIHZhciBjdHggPSB0aGlzLl9jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICBpZiAocG9zaXRpb24ueCA+PSBEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lLmxlZnQgJiZcclxuICAgICAgICAgICAgcG9zaXRpb24ueCArIHNpemUud2lkdGggPD0gY3R4LmNhbnZhcy5jbGllbnRXaWR0aCAtIERSQVdJTkdfQ09OU1Quc2l6ZXMuZnJhbWUucmlnaHQgJiZcclxuICAgICAgICAgICAgcG9zaXRpb24ueSA+PSBEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lLnRvcCAmJlxyXG4gICAgICAgICAgICBwb3NpdGlvbi55ICsgc2l6ZS5oZWlnaHQgPD0gY3R4LmNhbnZhcy5jbGllbnRIZWlnaHQgLSBEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lLmJvdHRvbSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgUmVuZGVyZXIucHJvdG90eXBlLnJhbmRvbVBvaW50ID0gZnVuY3Rpb24gKHNpemUpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB4OiBnZXRSYW5kb21SYW5nZShEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lLmxlZnQsIHRoaXMuX2NhbnZhcy53aWR0aCAtIERSQVdJTkdfQ09OU1Quc2l6ZXMuZnJhbWUucmlnaHQgLSBzaXplLndpZHRoKSxcclxuICAgICAgICAgICAgeTogZ2V0UmFuZG9tUmFuZ2UoRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS50b3AsIHRoaXMuX2NhbnZhcy5oZWlnaHQgLSBEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lLmJvdHRvbSAtIHNpemUuaGVpZ2h0KSxcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQ2FsY3VsYXRlIGFuZCByZXR1cm4gWi1JbmRleCBmb3IgcmVuZGVyXHJcbiAgICAgKiAwOiBXYXRlciBCbG9ja1xyXG4gICAgICogMTogVGFua3MsIEJyZWFrYWJsZSBCbG9ja3NcclxuICAgICAqIDI6IEludmluY2libGUgQW5pbWF0aW9uLCBCdWxsZXRzXHJcbiAgICAgKiAzOiBCdXNoXHJcbiAgICAgKiA0OiBFeHBsb2RlIEFuaW1hdGlvbnMsIFNjb3JlIEFuaW1hdGlvbnMsIFNwYXduaW5nIEFuaW1hdGlvblxyXG4gICAgICogNTogSXRlbXNcclxuICAgICAqIDY6IFN5c3RlbSBTcHJpdGVzKEdhbWUgT3Zlci4uLiBldGMpXHJcbiAgICAgKiBAcGFyYW0gb2JqZWN0IG9iamVjdCBmb3IgY2FsY3VsYXRlXHJcbiAgICAgKi9cclxuICAgIFJlbmRlcmVyLmdldE9iamVjdFpJbmRleCA9IGZ1bmN0aW9uIChvYmplY3QpIHtcclxuICAgICAgICBzd2l0Y2ggKG9iamVjdC5vYmplY3RUeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJCTE9DS1wiIC8qIEJMT0NLICovOlxyXG4gICAgICAgICAgICAgICAgdmFyIGJsb2NrID0gb2JqZWN0O1xyXG4gICAgICAgICAgICAgICAgaWYgKGJsb2NrLmJsb2NrVHlwZSA9PT0gXCJXQVRFUlwiIC8qIFdBVEVSICovKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChibG9jay5ibG9ja1R5cGUgPT09IFwiQlVTSFwiIC8qIEJVU0ggKi8pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwiVEFOS1wiIC8qIFRBTksgKi86XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICAgICAgY2FzZSBcIkFOSU1BVElPTlwiIC8qIEFOSU1BVElPTiAqLzpcclxuICAgICAgICAgICAgICAgIHZhciBhbmltYXRpb24gPSBvYmplY3Q7XHJcbiAgICAgICAgICAgICAgICBpZiAoYW5pbWF0aW9uLmFuaW1hdGlvblR5cGUgPT09IFwiSU5WSU5DSUJMRVwiIC8qIElOVklOQ0lCTEUgKi8pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwiQlVMTEVUXCIgLyogQlVMTEVUICovOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDI7XHJcbiAgICAgICAgICAgIGNhc2UgXCJJVEVNXCIgLyogSVRFTSAqLzpcclxuICAgICAgICAgICAgICAgIHJldHVybiA1O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gUmVuZGVyZXI7XHJcbn0oKSk7XHJcbmV4cG9ydCBkZWZhdWx0IFJlbmRlcmVyO1xyXG4iLCJpbXBvcnQgU1BSVElFX0RFRiBmcm9tIFwiLi9TcHJpdGVEZWZpbml0aW9uXCI7XHJcbmltcG9ydCBUYW5rQUlPQmplY3QgZnJvbSBcIi4uLy4uL0dhbWUvT2JqZWN0L1RhbmtBSU9iamVjdFwiO1xyXG4vKipcclxuICogRmluZCBzcHJpdGUgZGF0YSBmb3IgZ2l2ZW4gb2JqZWN0XHJcbiAqIEBwYXJhbSBvYmplY3QgZm91bmQgc3ByaXRlIGRlZmluaXRpb25cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTcHJpdGVEYXRhKG9iamVjdCkge1xyXG4gICAgc3dpdGNoIChvYmplY3Qub2JqZWN0VHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCJUQU5LXCIgLyogVEFOSyAqLzpcclxuICAgICAgICAgICAgdmFyIHRhbmsgPSBvYmplY3Q7XHJcbiAgICAgICAgICAgIGlmICh0YW5rIGluc3RhbmNlb2YgVGFua0FJT0JqZWN0ICYmIHRhbmsuY29sb3JJbmRleCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBlbmVteSA9IG9iamVjdDtcclxuICAgICAgICAgICAgICAgIHZhciBzZXF1ZW5jZSA9IGVuZW15LmdldENvbG9yRGVmaW5pdGlvbigpLnNlcXVlbmNlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFNQUlRJRV9ERUYuRU5FTVlbc2VxdWVuY2VbZW5lbXkuY29sb3JJbmRleF1dW2VuZW15LnRhbmtMZXZlbF1bZW5lbXkuZGlyZWN0aW9uXVtlbmVteS5zcHJpdGVQb3NpdGlvbl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gU1BSVElFX0RFRi5UQU5LW3RhbmsudGFua0NvbG9yXVt0YW5rLnRhbmtMZXZlbF1bdGFuay5kaXJlY3Rpb25dW3Rhbmsuc3ByaXRlUG9zaXRpb25dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBcIkJVTExFVFwiIC8qIEJVTExFVCAqLzpcclxuICAgICAgICAgICAgdmFyIGJ1bGxldCA9IG9iamVjdDtcclxuICAgICAgICAgICAgcmV0dXJuIFNQUlRJRV9ERUYuQlVMTEVUW2J1bGxldC5kaXJlY3Rpb25dO1xyXG4gICAgICAgIGNhc2UgXCJBTklNQVRJT05cIiAvKiBBTklNQVRJT04gKi86XHJcbiAgICAgICAgICAgIHZhciBhbmltYXRpb24gPSBvYmplY3Q7XHJcbiAgICAgICAgICAgIHJldHVybiBTUFJUSUVfREVGLkFOSU1BVElPTlthbmltYXRpb24uYW5pbWF0aW9uVHlwZV1bYW5pbWF0aW9uLnNwcml0ZVBvc2l0aW9uXTtcclxuICAgICAgICBjYXNlIFwiQkxPQ0tcIiAvKiBCTE9DSyAqLzpcclxuICAgICAgICAgICAgdmFyIGJsb2NrID0gb2JqZWN0O1xyXG4gICAgICAgICAgICByZXR1cm4gU1BSVElFX0RFRi5CTE9DS1tibG9jay5ibG9ja1R5cGVdW2Jsb2NrLnNwcml0ZVBvc2l0aW9uXTtcclxuICAgICAgICBjYXNlIFwiSVRFTVwiIC8qIElURU0gKi86XHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gb2JqZWN0O1xyXG4gICAgICAgICAgICByZXR1cm4gU1BSVElFX0RFRi5JVEVNW2l0ZW0uaXRlbVR5cGVdO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTeXN0ZW1TcHJpdGUoc3ByaXRlVHlwZSwgbnVtYmVyKSB7XHJcbiAgICBpZiAobnVtYmVyID09PSB2b2lkIDApIHsgbnVtYmVyID0gMDsgfVxyXG4gICAgc3dpdGNoIChzcHJpdGVUeXBlKSB7XHJcbiAgICAgICAgY2FzZSBcIk5VTExcIiAvKiBOVUxMICovOlxyXG4gICAgICAgIGNhc2UgXCJUQU5LX0lDT05cIiAvKiBUQU5LX0lDT04gKi86XHJcbiAgICAgICAgY2FzZSBcIlNUQUdFXCIgLyogU1RBR0UgKi86XHJcbiAgICAgICAgY2FzZSBcIkZSQU1FXCIgLyogRlJBTUUgKi86XHJcbiAgICAgICAgICAgIHJldHVybiBTUFJUSUVfREVGLlNZU1RFTVtzcHJpdGVUeXBlXTtcclxuICAgICAgICBjYXNlIFwiTlVNQkVSXCIgLyogTlVNQkVSICovOlxyXG4gICAgICAgICAgICByZXR1cm4gU1BSVElFX0RFRi5TWVNURU0uTlVNQkVSW251bWJlcl07XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNwcml0ZVNpemUob2JqZWN0KSB7XHJcbiAgICByZXR1cm4gZ2V0U3ByaXRlRGF0YShvYmplY3QpLnNpemU7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE9iamVjdFNpemUodHlwZSwgZGlyZWN0aW9uKSB7XHJcbiAgICBpZiAoZGlyZWN0aW9uID09IG51bGwpIHtcclxuICAgICAgICBkaXJlY3Rpb24gPSBcInVwXCIgLyogdXAgKi87XHJcbiAgICB9XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlIFwiQkxPQ0tcIiAvKiBCTE9DSyAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIFNQUlRJRV9ERUYuQkxPQ0suQlJJQ0tbMF0uc2l6ZTtcclxuICAgICAgICBjYXNlIFwiVEFOS1wiIC8qIFRBTksgKi86XHJcbiAgICAgICAgICAgIHJldHVybiBTUFJUSUVfREVGLlRBTksuWUVMTE9XWzBdW2RpcmVjdGlvbl1bMF0uc2l6ZTtcclxuICAgICAgICBjYXNlIFwiQlVMTEVUXCIgLyogQlVMTEVUICovOlxyXG4gICAgICAgICAgICByZXR1cm4gU1BSVElFX0RFRi5CVUxMRVRbZGlyZWN0aW9uXS5zaXplO1xyXG4gICAgICAgIGNhc2UgXCJJVEVNXCIgLyogSVRFTSAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIFNQUlRJRV9ERUYuSVRFTS5CT01CLnNpemU7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFuaW1hdGlvblNpemUodHlwZSwgZnJhbWUpIHtcclxuICAgIHJldHVybiBTUFJUSUVfREVGLkFOSU1BVElPTlt0eXBlXVtmcmFtZV0uc2l6ZTtcclxufVxyXG4iLCI7XHJcbnZhciBTUFJUSUVfREVGID0ge1xyXG4gICAgVEFOSzoge1xyXG4gICAgICAgIFlFTExPVzogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMCwgeTogMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMiwgeTogMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNjQsIHk6IDAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogOTYsIHk6IDAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDEyOCwgeTogMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxNjAsIHk6IDAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxOTIsIHk6IDAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjI0LCB5OiAwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDAsIHk6IDMyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyLCB5OiAzMiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNjQsIHk6IDMyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDk2LCB5OiAzMiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTI4LCB5OiAzMiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxNjAsIHk6IDMyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTkyLCB5OiAzMiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyMjQsIHk6IDMyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDAsIHk6IDY0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyLCB5OiA2NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNjQsIHk6IDY0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDk2LCB5OiA2NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTI4LCB5OiA2NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxNjAsIHk6IDY0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTkyLCB5OiA2NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyMjQsIHk6IDY0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDAsIHk6IDk2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyLCB5OiA5NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNjQsIHk6IDk2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDk2LCB5OiA5NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTI4LCB5OiA5NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxNjAsIHk6IDk2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTkyLCB5OiA5NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyMjQsIHk6IDk2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgR1JFRU46IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDAsIHk6IDI1NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMiwgeTogMjU2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA2NCwgeTogMjU2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDk2LCB5OiAyNTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDEyOCwgeTogMjU2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE2MCwgeTogMjU2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTkyLCB5OiAyNTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjI0LCB5OiAyNTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMCwgeTogMjg4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyLCB5OiAyODggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDY0LCB5OiAyODggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogOTYsIHk6IDI4OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTI4LCB5OiAyODggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTYwLCB5OiAyODggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxOTIsIHk6IDI4OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyMjQsIHk6IDI4OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAwLCB5OiAzMjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIsIHk6IDMyMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNjQsIHk6IDMyMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA5NiwgeTogMzIwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxMjgsIHk6IDMyMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxNjAsIHk6IDMyMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE5MiwgeTogMzIwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDIyNCwgeTogMzIwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDAsIHk6IDM1MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMiwgeTogMzUyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA2NCwgeTogMzUyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDk2LCB5OiAzNTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDEyOCwgeTogMzUyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE2MCwgeTogMzUyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTkyLCB5OiAzNTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjI0LCB5OiAzNTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBXSElURTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjU2LCB5OiAwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI4OCwgeTogMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIwLCB5OiAwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM1MiwgeTogMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzg0LCB5OiAwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQxNiwgeTogMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ0OCwgeTogMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0ODAsIHk6IDAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjU2LCB5OiAzMiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyODgsIHk6IDMyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMjAsIHk6IDMyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM1MiwgeTogMzIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM4NCwgeTogMzIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDE2LCB5OiAzMiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ0OCwgeTogMzIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDgwLCB5OiAzMiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyNTYsIHk6IDY0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI4OCwgeTogNjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyMCwgeTogNjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzUyLCB5OiA2NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzg0LCB5OiA2NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0MTYsIHk6IDY0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDQ4LCB5OiA2NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0ODAsIHk6IDY0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI1NiwgeTogOTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjg4LCB5OiA5NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIwLCB5OiA5NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzNTIsIHk6IDk2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzODQsIHk6IDk2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQxNiwgeTogOTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0NDgsIHk6IDk2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ4MCwgeTogOTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBNQUdFTlRBOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyNTYsIHk6IDI1NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyODgsIHk6IDI1NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIwLCB5OiAyNTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzUyLCB5OiAyNTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM4NCwgeTogMjU2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQxNiwgeTogMjU2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDQ4LCB5OiAyNTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDgwLCB5OiAyNTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjU2LCB5OiAyODggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjg4LCB5OiAyODggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyMCwgeTogMjg4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM1MiwgeTogMjg4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzODQsIHk6IDI4OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0MTYsIHk6IDI4OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ0OCwgeTogMjg4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ4MCwgeTogMjg4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI1NiwgeTogMzIwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI4OCwgeTogMzIwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMjAsIHk6IDMyMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzNTIsIHk6IDMyMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzg0LCB5OiAzMjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDE2LCB5OiAzMjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0NDgsIHk6IDMyMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0ODAsIHk6IDMyMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyNTYsIHk6IDM1MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyODgsIHk6IDM1MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIwLCB5OiAzNTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzUyLCB5OiAzNTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM4NCwgeTogMzUyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQxNiwgeTogMzUyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDQ4LCB5OiAzNTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDgwLCB5OiAzNTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbiAgICBFTkVNWToge1xyXG4gICAgICAgIFlFTExPVzogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMCwgeTogMTI4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyLCB5OiAxMjggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDY0LCB5OiAxMjggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogOTYsIHk6IDEyOCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTI4LCB5OiAxMjggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTYwLCB5OiAxMjggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxOTIsIHk6IDEyOCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyMjQsIHk6IDEyOCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAwLCB5OiAxNjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIsIHk6IDE2MCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNjQsIHk6IDE2MCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA5NiwgeTogMTYwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxMjgsIHk6IDE2MCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxNjAsIHk6IDE2MCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE5MiwgeTogMTYwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDIyNCwgeTogMTYwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDAsIHk6IDE5MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMiwgeTogMTkyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA2NCwgeTogMTkyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDk2LCB5OiAxOTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDEyOCwgeTogMTkyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE2MCwgeTogMTkyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTkyLCB5OiAxOTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjI0LCB5OiAxOTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMCwgeTogMjI0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyLCB5OiAyMjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDY0LCB5OiAyMjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogOTYsIHk6IDIyNCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTI4LCB5OiAyMjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTYwLCB5OiAyMjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxOTIsIHk6IDIyNCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyMjQsIHk6IDIyNCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIEdSRUVOOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAwLCB5OiAzODQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIsIHk6IDM4NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNjQsIHk6IDM4NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA5NiwgeTogMzg0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxMjgsIHk6IDM4NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxNjAsIHk6IDM4NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE5MiwgeTogMzg0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDIyNCwgeTogMzg0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDAsIHk6IDQxNiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMiwgeTogNDE2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA2NCwgeTogNDE2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDk2LCB5OiA0MTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDEyOCwgeTogNDE2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE2MCwgeTogNDE2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTkyLCB5OiA0MTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjI0LCB5OiA0MTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMCwgeTogNDQ4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyLCB5OiA0NDggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDY0LCB5OiA0NDggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogOTYsIHk6IDQ0OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTI4LCB5OiA0NDggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTYwLCB5OiA0NDggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxOTIsIHk6IDQ0OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyMjQsIHk6IDQ0OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAwLCB5OiA0ODAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIsIHk6IDQ4MCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNjQsIHk6IDQ4MCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA5NiwgeTogNDgwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxMjgsIHk6IDQ4MCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxNjAsIHk6IDQ4MCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE5MiwgeTogNDgwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDIyNCwgeTogNDgwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgV0hJVEU6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI1NiwgeTogMTI4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI4OCwgeTogMTI4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMjAsIHk6IDEyOCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzNTIsIHk6IDEyOCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzg0LCB5OiAxMjggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDE2LCB5OiAxMjggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0NDgsIHk6IDEyOCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0ODAsIHk6IDEyOCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyNTYsIHk6IDE2MCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyODgsIHk6IDE2MCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIwLCB5OiAxNjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzUyLCB5OiAxNjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM4NCwgeTogMTYwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQxNiwgeTogMTYwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDQ4LCB5OiAxNjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDgwLCB5OiAxNjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjU2LCB5OiAxOTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjg4LCB5OiAxOTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyMCwgeTogMTkyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM1MiwgeTogMTkyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzODQsIHk6IDE5MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0MTYsIHk6IDE5MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ0OCwgeTogMTkyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ4MCwgeTogMTkyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI1NiwgeTogMjI0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI4OCwgeTogMjI0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMjAsIHk6IDIyNCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzNTIsIHk6IDIyNCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzg0LCB5OiAyMjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDE2LCB5OiAyMjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0NDgsIHk6IDIyNCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0ODAsIHk6IDIyNCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIE1BR0VOVEE6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI1NiwgeTogMzg0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI4OCwgeTogMzg0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMjAsIHk6IDM4NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzNTIsIHk6IDM4NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzg0LCB5OiAzODQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDE2LCB5OiAzODQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0NDgsIHk6IDM4NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0ODAsIHk6IDM4NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyNTYsIHk6IDQxNiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyODgsIHk6IDQxNiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIwLCB5OiA0MTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzUyLCB5OiA0MTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM4NCwgeTogNDE2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQxNiwgeTogNDE2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDQ4LCB5OiA0MTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDgwLCB5OiA0MTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjU2LCB5OiA0NDggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjg4LCB5OiA0NDggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyMCwgeTogNDQ4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM1MiwgeTogNDQ4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzODQsIHk6IDQ0OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0MTYsIHk6IDQ0OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ0OCwgeTogNDQ4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ4MCwgeTogNDQ4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI1NiwgeTogNDgwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI4OCwgeTogNDgwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMjAsIHk6IDQ4MCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzNTIsIHk6IDQ4MCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzg0LCB5OiA0ODAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDE2LCB5OiA0ODAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0NDgsIHk6IDQ4MCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0ODAsIHk6IDQ4MCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIEJVTExFVDoge1xyXG4gICAgICAgIHVwOiB7IHBvc2l0aW9uOiB7IHg6IDY0NiwgeTogMjA0IH0sIHNpemU6IHsgd2lkdGg6IDYsIGhlaWdodDogOCB9IH0sXHJcbiAgICAgICAgbGVmdDogeyBwb3NpdGlvbjogeyB4OiA2NjAsIHk6IDIwNCB9LCBzaXplOiB7IHdpZHRoOiA4LCBoZWlnaHQ6IDYgfSB9LFxyXG4gICAgICAgIGRvd246IHsgcG9zaXRpb246IHsgeDogNjc4LCB5OiAyMDQgfSwgc2l6ZTogeyB3aWR0aDogNiwgaGVpZ2h0OiA4IH0gfSxcclxuICAgICAgICByaWdodDogeyBwb3NpdGlvbjogeyB4OiA2OTIsIHk6IDIwNCB9LCBzaXplOiB7IHdpZHRoOiA4LCBoZWlnaHQ6IDYgfSB9XHJcbiAgICB9LFxyXG4gICAgQkxPQ0s6IHtcclxuICAgICAgICBCUklDSzogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA1MTIsIHk6IDAgfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgSVJPTjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA1MTIsIHk6IDMyIH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFdBVEVSOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDUxMiwgeTogOTYgfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNTQ0LCB5OiA5NiB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBCVVNIOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDU0NCwgeTogNjQgfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgRUFHTEU6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNjA4LCB5OiA2NCB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA2NDAsIHk6IDY0IH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9LFxyXG4gICAgQU5JTUFUSU9OOiB7XHJcbiAgICAgICAgRVhQTE9TSU9OX1NNQUxMOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDUxOCwgeTogMjYwIH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAyMiwgaGVpZ2h0OiAyMiB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDU0NCwgeTogMjU4IH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAzMCwgaGVpZ2h0OiAyOCB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDU3NiwgeTogMjU2IH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIEVYUExPU0lPTl9MQVJHRTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA2MTAsIHk6IDI1OCB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogNTgsIGhlaWdodDogNTggfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA2NjgsIHk6IDI1NiB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogNjgsIGhlaWdodDogNjQgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBJTlZJTkNJQkxFOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDUxMiwgeTogMjg4IH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDU0NCwgeTogMjg4IH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBTUEFXTjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA1MTgsIHk6IDE5OCB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMTgsIGhlaWdodDogMTggfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA1NDgsIHk6IDE5NiB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMjIsIGhlaWdodDogMjIgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA1NzgsIHk6IDE5NCB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMjYsIGhlaWdodDogMjYgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA2MDgsIHk6IDE5MiB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMzAsIGhlaWdodDogMzAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgU0NPUkVfMTAwOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDU4MCwgeTogMzI4IH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAyNiwgaGVpZ2h0OiAxNCB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBTQ09SRV8yMDA6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNjEwLCB5OiAzMjggfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDI4LCBoZWlnaHQ6IDE0IH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIFNDT1JFXzMwMDogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA2NDIsIHk6IDMyOCB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMjgsIGhlaWdodDogMTQgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgU0NPUkVfNDAwOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDY3NCwgeTogMzI4IH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAyOCwgaGVpZ2h0OiAxNCB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBTQ09SRV81MDA6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNzA2LCB5OiAzMjggfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDI4LCBoZWlnaHQ6IDE0IH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIEdBTUVPVkVSOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDU3OCwgeTogMzY4IH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiA2MiwgaGVpZ2h0OiAzMCB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBQQVVTRTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA1NzgsIHk6IDM1MiB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogNzgsIGhlaWdodDogMTQgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBUSVRMRTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAwLCB5OiAwIH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiA1MTIsIGhlaWdodDogNDgwIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgQ1VSU09SOiBbXHJcbiAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTkyLCB5OiAwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyMjQsIHk6IDAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgQ1VSVEFJTjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAwLCB5OiAwIH0sIHNpemU6IHsgd2lkdGg6IDAsIGhlaWdodDogMCB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9LFxyXG4gICAgSVRFTToge1xyXG4gICAgICAgIEhFTE1FVDoge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA1MTIsIHk6IDIyNCB9LFxyXG4gICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMCB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBXQVRDSDoge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA1NDQsIHk6IDIyNCB9LFxyXG4gICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMCB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBTSE9WRUw6IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNTc2LCB5OiAyMjQgfSxcclxuICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgU1RBUjoge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA2MDgsIHk6IDIyNCB9LFxyXG4gICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMCB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBCT01COiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDY0MCwgeTogMjI0IH0sXHJcbiAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMwIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFRBTks6IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNjcyLCB5OiAyMjQgfSxcclxuICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgUElTVE9MOiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDcwNCwgeTogMjI0IH0sXHJcbiAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMwIH1cclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIFNZU1RFTToge1xyXG4gICAgICAgIE5VTEw6IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMCwgeTogMCB9LFxyXG4gICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAwLCBoZWlnaHQ6IDAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgVEFOS19JQ09OOiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDY0MCwgeTogMzg0IH0sXHJcbiAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDE2LCBoZWlnaHQ6IDE2IH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFNUQUdFOiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDY1OCwgeTogMzUxIH0sXHJcbiAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDc4LCBoZWlnaHQ6IDE2IH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIE5VTUJFUjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA2NTcsIHk6IDM2NyB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMTYsIGhlaWdodDogMTYgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA2NzQsIHk6IDM2NyB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMTYsIGhlaWdodDogMTYgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA2ODksIHk6IDM2NyB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMTYsIGhlaWdodDogMTYgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA3MDUsIHk6IDM2NyB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMTYsIGhlaWdodDogMTYgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA3MjEsIHk6IDM2NyB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMTYsIGhlaWdodDogMTYgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA2NTcsIHk6IDM4MyB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMTYsIGhlaWdodDogMTYgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA2NzQsIHk6IDM4MyB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMTYsIGhlaWdodDogMTYgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA2ODksIHk6IDM4MyB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMTYsIGhlaWdodDogMTYgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA3MDUsIHk6IDM4MyB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMTYsIGhlaWdodDogMTYgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA3MjEsIHk6IDM4MyB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMTYsIGhlaWdodDogMTYgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBGUkFNRToge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA3MzYsIHk6IDAgfSxcclxuICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogNjQsIGhlaWdodDogNDgwIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTUFJUSUVfREVGO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBcIi4uL2Rpc3QvanMvc3ByaXRlX21haW4ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIuLi9kaXN0L2pzL3Nwcml0ZV90aXRsZS5wbmdcIjsiLCJpbXBvcnQgeyBnZXRTcHJpdGVEYXRhIH0gZnJvbSBcIi4uL1JlbmRlci9TcHJpdGUvU3ByaXRlRGF0YVwiO1xyXG4vKipcclxuKiBUZXN0cyB0d28gb2JqZWN0cyBhcmUgY29sbGlzaW9ucyAocmVjdGFuZ2xlIGJvdW5kaW5nIGJveCBjb2xsaXNpb24gdGVzdClcclxuKiBAcGFyYW0gb2JqZWN0MSBmaXJzdCBvYmplY3RcclxuKiBAcGFyYW0gc3ByaXRlMSBmaXJzdCBvYmplY3QncyBzcHJpdGUgZGF0YSBmb3Igc2l6ZVxyXG4qIEBwYXJhbSBvYmplY3QyIHNlY29uZCBvYmplY3RcclxuKiBAcGFyYW0gc3ByaXRlMiBzZWNvbmQgb2JqZWN0J3Mgc3ByaXRlIGRhdGEgZm9yIHNpemVcclxuKi9cclxuZXhwb3J0IGZ1bmN0aW9uIE9iamVjdENvbGxpc2lvblRlc3Qob2JqZWN0MSwgb2JqZWN0Mikge1xyXG4gICAgdmFyIHNpemUxID0gZ2V0U3ByaXRlRGF0YShvYmplY3QxKS5zaXplO1xyXG4gICAgdmFyIHNpemUyID0gZ2V0U3ByaXRlRGF0YShvYmplY3QyKS5zaXplO1xyXG4gICAgcmV0dXJuIFJlY3RhbmdsZUNvbGxpc2lvblRlc3Qob2JqZWN0MS5wb3NpdGlvbiwgc2l6ZTEsIG9iamVjdDIucG9zaXRpb24sIHNpemUyKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gQmxvY2tDb2xsaXNpb25UZXN0KGJsb2NrLCBvYmplY3QpIHtcclxuICAgIHZhciBjZWxscyA9IFtdO1xyXG4gICAgdmFyIGJsb2NrU2l6ZSA9IGdldFNwcml0ZURhdGEoYmxvY2spLnNpemU7XHJcbiAgICB2YXIgb2JqZWN0U2l6ZSA9IGdldFNwcml0ZURhdGEob2JqZWN0KS5zaXplO1xyXG4gICAgdmFyIGNlbGxQb3NpdGlvbjtcclxuICAgIHZhciBjZWxsU2l6ZSA9IHtcclxuICAgICAgICB3aWR0aDogYmxvY2tTaXplLndpZHRoIC8gNCxcclxuICAgICAgICBoZWlnaHQ6IGJsb2NrU2l6ZS5oZWlnaHQgLyA0XHJcbiAgICB9O1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBibG9jay5ibG9ja1N0YXRlNHg0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBibG9jay5ibG9ja1N0YXRlNHg0W2ldLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmIChibG9jay5ibG9ja1N0YXRlNHg0W2ldW2pdID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjZWxsUG9zaXRpb24gPSB7XHJcbiAgICAgICAgICAgICAgICB4OiBibG9jay5wb3NpdGlvbi54ICsgKGJsb2NrU2l6ZS53aWR0aCAvIDQpICogaixcclxuICAgICAgICAgICAgICAgIHk6IGJsb2NrLnBvc2l0aW9uLnkgKyAoYmxvY2tTaXplLmhlaWdodCAvIDQpICogaVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZiAoUmVjdGFuZ2xlQ29sbGlzaW9uVGVzdChjZWxsUG9zaXRpb24sIGNlbGxTaXplLCBvYmplY3QucG9zaXRpb24sIG9iamVjdFNpemUpKSB7XHJcbiAgICAgICAgICAgICAgICBjZWxscy5wdXNoKGNlbGxQb3NpdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2VsbHM7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIFJlY3RhbmdsZUNvbGxpc2lvblRlc3QocG9zMSwgc2l6ZTEsIHBvczIsIHNpemUyKSB7XHJcbiAgICBpZiAocG9zMS54ICsgc2l6ZTEud2lkdGggPiBwb3MyLnggJiZcclxuICAgICAgICBwb3MxLnggPCBwb3MyLnggKyBzaXplMi53aWR0aCAmJlxyXG4gICAgICAgIHBvczEueSArIHNpemUxLmhlaWdodCA+IHBvczIueSAmJlxyXG4gICAgICAgIHBvczEueSA8IHBvczIueSArIHNpemUyLmhlaWdodCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbiIsInZhciBfX3ZhbHVlcyA9ICh0aGlzICYmIHRoaXMuX192YWx1ZXMpIHx8IGZ1bmN0aW9uKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59O1xyXG52YXIgX19yZWFkID0gKHRoaXMgJiYgdGhpcy5fX3JlYWQpIHx8IGZ1bmN0aW9uIChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn07XHJcbnZhciBfX3NwcmVhZCA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWQpIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn07XHJcbmV4cG9ydCBmdW5jdGlvbiBkZWVwQ2xvbmUob2JqKSB7XHJcbiAgICB2YXIgZV8xLCBfYTtcclxuICAgIGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG4gICAgdmFyIHJlc3VsdCA9IEFycmF5LmlzQXJyYXkob2JqKSA/IFtdIDoge307XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGZvciAodmFyIF9iID0gX192YWx1ZXMoT2JqZWN0LmtleXMob2JqKSksIF9jID0gX2IubmV4dCgpOyAhX2MuZG9uZTsgX2MgPSBfYi5uZXh0KCkpIHtcclxuICAgICAgICAgICAgdmFyIGtleSA9IF9jLnZhbHVlO1xyXG4gICAgICAgICAgICByZXN1bHRba2V5XSA9IGRlZXBDbG9uZShvYmpba2V5XSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChfYyAmJiAhX2MuZG9uZSAmJiAoX2EgPSBfYi5yZXR1cm4pKSBfYS5jYWxsKF9iKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG52YXIgR3VpZCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEd1aWQoKSB7XHJcbiAgICB9XHJcbiAgICBHdWlkLm5ld0d1aWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuICd4eHh4eHh4eC14eHh4LXh4eHgteHh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24gKGMpIHtcclxuICAgICAgICAgICAgdmFyIHIgPSBNYXRoLnJhbmRvbSgpICogMTYgfCAwLCB2ID0gYyA9PSAneCcgPyByIDogKHIgJiAweDMgfCAweDgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdi50b1N0cmluZygxNik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEd1aWQ7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IEd1aWQgfTtcclxuLyoqXHJcbiAqIGZpbmQgbWF4aW11bSBudW1iZXIgZnJvbSBudW1iZXIgYXJyYXlcclxuICogQHBhcmFtIG51bWJlcnMgZ2l2ZW4gbnVtYmVyc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1heChudW1iZXJzKSB7XHJcbiAgICByZXR1cm4gTWF0aC5tYXguYXBwbHkobnVsbCwgbnVtYmVycyk7XHJcbn1cclxuLyoqXHJcbiAqIGZpbmQgbWluaW11bSBudW1iZXIgZnJvbSBudW1iZXIgYXJyYXlcclxuICogQHBhcmFtIG51bWJlcnMgZ2l2ZW4gbnVtYmVyc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1pbihudW1iZXJzKSB7XHJcbiAgICByZXR1cm4gTWF0aC5taW4uYXBwbHkobnVsbCwgbnVtYmVycyk7XHJcbn1cclxuLyoqXHJcbiAqIGdldCBhIHJhbmRvbSB2YWx1ZSBiZXR3ZWVuIHJhbmdlXHJcbiAqIEBwYXJhbSBtaW4gcmFuZ2VfbWluXHJcbiAqIEBwYXJhbSBtYXggcmFuZ2VfbWF4XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tUmFuZ2UobWluLCBtYXgpIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbik7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUR1cGxpY2F0ZShhcnJheSkge1xyXG4gICAgdmFyIHNldCA9IG5ldyBTZXQoYXJyYXkpO1xyXG4gICAgcmV0dXJuIF9fc3ByZWFkKHNldCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbUVudW0oYW5FbnVtKSB7XHJcbiAgICB2YXIgZW51bVZhbHVlcyA9IE9iamVjdC52YWx1ZXMoYW5FbnVtKTtcclxuICAgIHZhciByYW5kb21JbmRleCA9IGdldFJhbmRvbVJhbmdlKDAsIGVudW1WYWx1ZXMubGVuZ3RoIC0gMSk7XHJcbiAgICB2YXIgcmFuZG9tRW51bVZhbHVlID0gZW51bVZhbHVlc1tyYW5kb21JbmRleF07XHJcbiAgICByZXR1cm4gcmFuZG9tRW51bVZhbHVlO1xyXG59XHJcbiIsImltcG9ydCBHYW1lIGZyb20gXCIuL0dhbWUvR2FtZVwiO1xyXG5pbXBvcnQgUmVuZGVyZXIgZnJvbSBcIi4vUmVuZGVyL1JlbmRlcmVyXCI7XHJcbnZhciBzcHJpdGVNYWluSW1hZ2UgPSByZXF1aXJlKCcuL1JlbmRlci9TcHJpdGUvc3ByaXRlX21haW4ucG5nJyk7XHJcbnZhciBzcHJpdGVUSXRsZUltYWdlID0gcmVxdWlyZSgnLi9SZW5kZXIvU3ByaXRlL3Nwcml0ZV90aXRsZS5wbmcnKTtcclxudmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xyXG4vLyBpbml0IGdhbWVcclxudmFyIGdhbWUgPSBuZXcgR2FtZShjYW52YXMsICcuL2pzL3Nwcml0ZV9tYWluLnBuZycsICcuL2pzL3Nwcml0ZV90aXRsZS5wbmcnKTtcclxuLy8jcmVnaW9uIERFQlVHXHJcbnZhciBkZWJ1Z19idG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlYnVnXCIpO1xyXG52YXIgbWFpblRhbmtfbGV2ZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5UYW5rX2xldmVsXCIpO1xyXG52YXIgbWFpblRhbmtfY29sb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5UYW5rX2NvbG9yXCIpO1xyXG52YXIgbWFpblRhbmtfaW52aW5jaWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblRhbmtfaW52aW5jaWJsZVwiKTtcclxudmFyIG1haW5UYW5rX2hpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblRhbmtfaGl0XCIpO1xyXG52YXIgdHJhY2tzID0ge1xyXG4gICAgYmxvY2s6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlfYmxvY2tcIiksXHJcbiAgICB0YW5rOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpX3RhbmtcIiksXHJcbiAgICBidWxsZXQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlfYnVsbGV0XCIpLFxyXG4gICAgYW5pbWF0aW9uOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpX2FuaW1hdGlvblwiKSxcclxufTtcclxudmFyIG9iamVjdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9iamVjdHNcIik7XHJcbnZhciBnYW1lZGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZWRhdGFcIik7XHJcbmRlYnVnX2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldikge1xyXG4gICAgaWYgKGRlYnVnX2J0bi5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykgPT0gJ3RydWUnKSB7XHJcbiAgICAgICAgZ2FtZS5kZWJ1ZyA9IGZhbHNlO1xyXG4gICAgICAgIGRlYnVnX2J0bi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2ZhbHNlJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChkZWJ1Z19idG4uZ2V0QXR0cmlidXRlKCd2YWx1ZScpID09ICdmYWxzZScpIHtcclxuICAgICAgICBnYW1lLmRlYnVnID0gdHJ1ZTtcclxuICAgICAgICBkZWJ1Z19idG4uc2V0QXR0cmlidXRlKCd2YWx1ZScsICd0cnVlJyk7XHJcbiAgICB9XHJcbiAgICBkZWJ1Z19idG4uaW5uZXJUZXh0ID0gXCJkZWJ1ZyA9IFwiICsgZGVidWdfYnRuLmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcclxufSk7XHJcbm1haW5UYW5rX2xldmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkgeyB1cGRhdGVUYW5rKCk7IH0pO1xyXG5tYWluVGFua19jb2xvci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHsgdXBkYXRlVGFuaygpOyB9KTtcclxubWFpblRhbmtfaW52aW5jaWJsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkgeyBnYW1lLm1haW5UYW5rLmludmluY2libGUoKTsgfSk7XHJcbm1haW5UYW5rX2hpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkgeyBnYW1lLm1haW5UYW5rLmRlc3Ryb3koKTsgfSk7XHJcbnZhciBvYmplY3RGaW5kZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgX2EsIF9iO1xyXG4gICAgb2JqZWN0cy5pbm5lckhUTUwgPVxyXG4gICAgICAgIFwiXFxuXFx0PHRyPlxcblxcdFxcdDx0ZD56SW5kZXg8L3RkPlxcblxcdFxcdDx0ZD5pZDwvdGQ+XFxuXFx0XFx0PHRkPnR5cGU8L3RkPlxcblxcdFxcdDx0ZD5wb3NpdGlvbjwvdGQ+XFxuXFx0PC90cj5cXG5cXHRcIjtcclxuICAgIGdhbWVkYXRhLmlubmVySFRNTCA9XHJcbiAgICAgICAgXCJcXG5cXHQ8dHI+XFxuXFx0XFx0PHRkPnR5cGU8L3RkPlxcblxcdFxcdDx0ZD52YWx1ZTwvdGQ+XFxuXFx0PC90cj5cXG5cXHRcIjtcclxuICAgIGlmICghZ2FtZS5kZWJ1Zykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChnYW1lLm1haW5UYW5rKSB7XHJcbiAgICAgICAgbWFpblRhbmtfY29sb3IudmFsdWUgPSBnYW1lLm1haW5UYW5rLnRhbmtDb2xvci50b1N0cmluZygpO1xyXG4gICAgICAgIG1haW5UYW5rX2xldmVsLnZhbHVlID0gZ2FtZS5tYWluVGFuay50YW5rTGV2ZWwudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIGlmIChnYW1lLmdhbWVEYXRhKSB7XHJcbiAgICAgICAgZ2FtZWRhdGEuaW5uZXJIVE1MID0gZ2FtZWRhdGEuaW5uZXJIVE1MICtcclxuICAgICAgICAgICAgKFwiXFxuXFx0XFx0PHRyPlxcblxcdFxcdFxcdDx0ZD5nYW1lb3ZlcjwvdGQ+XFxuXFx0XFx0XFx0PHRkPlwiICsgZ2FtZS5nYW1lRGF0YS5nYW1lT3ZlciArIFwiPC90ZD5cXG5cXHRcXHQ8L3RyPlxcblxcdFxcdDx0cj5cXG5cXHRcXHRcXHQ8dGQ+bGV2ZWxJZDwvdGQ+XFxuXFx0XFx0XFx0PHRkPlwiICsgKChfYSA9IGdhbWUuZ2FtZURhdGEubGV2ZWxEYXRhKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubGV2ZWxJZCkgKyBcIjwvdGQ+XFxuXFx0XFx0PC90cj5cXG5cXHRcXHQ8dHI+XFxuXFx0XFx0XFx0PHRkPnAxIHNjb3JlPC90ZD5cXG5cXHRcXHRcXHQ8dGQ+XCIgKyAoKF9iID0gZ2FtZS5nYW1lRGF0YS5wbGF5ZXJEYXRhWzBdKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Iuc2NvcmUpICsgXCI8L3RkPlxcblxcdFxcdDwvdHI+XFxuXFx0XFx0XCIpO1xyXG4gICAgfVxyXG4gICAgZ2FtZS5vYmplY3RzLmZvckVhY2goZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgICAgIHN3aXRjaCAob2JqZWN0Lm9iamVjdFR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIkJMT0NLXCIgLyogQkxPQ0sgKi86XHJcbiAgICAgICAgICAgICAgICBpZiAodHJhY2tzLmJsb2NrLmNoZWNrZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJUQU5LXCIgLyogVEFOSyAqLzpcclxuICAgICAgICAgICAgICAgIGlmICh0cmFja3MudGFuay5jaGVja2VkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiQlVMTEVUXCIgLyogQlVMTEVUICovOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRyYWNrcy5idWxsZXQuY2hlY2tlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkFOSU1BVElPTlwiIC8qIEFOSU1BVElPTiAqLzpcclxuICAgICAgICAgICAgICAgIGlmICh0cmFja3MuYW5pbWF0aW9uLmNoZWNrZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9iamVjdHMuaW5uZXJIVE1MID0gb2JqZWN0cy5pbm5lckhUTUwgK1xyXG4gICAgICAgICAgICAoXCJcXG5cXHRcXHQ8dHI+XFxuXFx0XFx0XFx0PHRkPlwiICsgUmVuZGVyZXIuZ2V0T2JqZWN0WkluZGV4KG9iamVjdCkgKyBcIjwvdGQ+XFxuXFx0XFx0XFx0PHRkPlwiICsgb2JqZWN0LmlkICsgXCI8L3RkPlxcblxcdFxcdFxcdDx0ZD5cIiArIG9iamVjdC5vYmplY3RUeXBlICsgXCI8L3RkPlxcblxcdFxcdFxcdDx0ZD5beDogXCIgKyBvYmplY3QucG9zaXRpb24ueCArIFwiLCB5OiBcIiArIG9iamVjdC5wb3NpdGlvbi55ICsgXCJdPC90ZD5cXG5cXHRcXHQ8L3RyPlxcblxcdFxcdFwiKTtcclxuICAgIH0pO1xyXG59LCAxMDApO1xyXG5mdW5jdGlvbiB1cGRhdGVUYW5rKCkge1xyXG4gICAgZ2FtZS5tYWluVGFuay50YW5rQ29sb3IgPSBtYWluVGFua19jb2xvci52YWx1ZTtcclxuICAgIGdhbWUubWFpblRhbmsudGFua0xldmVsID0gcGFyc2VJbnQobWFpblRhbmtfbGV2ZWwudmFsdWUpO1xyXG59XHJcbi8vI2VuZHJlZ2lvblxyXG4iXSwic291cmNlUm9vdCI6IiJ9