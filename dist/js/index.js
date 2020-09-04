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
/* harmony import */ var _Utils_EDirection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Utils/EDirection */ "./src/Utils/EDirection.ts");
/* harmony import */ var _Utils_CollisionTest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Utils/CollisionTest */ "./src/Utils/CollisionTest.ts");
/* harmony import */ var _Render_Sprite_SpriteDefinition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Render/Sprite/SpriteDefinition */ "./src/Render/Sprite/SpriteDefinition.ts");
/* harmony import */ var _Object_AnimationObject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Object/AnimationObject */ "./src/Game/Object/AnimationObject.ts");
/* harmony import */ var _Object_Enum_EAnimationType__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Object/Enum/EAnimationType */ "./src/Game/Object/Enum/EAnimationType.ts");
/* harmony import */ var _Object_BlockObject__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Object/BlockObject */ "./src/Game/Object/BlockObject.ts");
/* harmony import */ var _Object_Enum_ETankType__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Object/Enum/ETankType */ "./src/Game/Object/Enum/ETankType.ts");
/* harmony import */ var _Render_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Render/Sprite/SpriteData */ "./src/Render/Sprite/SpriteData.ts");
/* harmony import */ var _Level_DefaultLevels_DefaultLevels__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Level/DefaultLevels/DefaultLevels */ "./src/Game/Level/DefaultLevels/DefaultLevels.ts");
/* harmony import */ var _InputManager_InputManager__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./InputManager/InputManager */ "./src/Game/InputManager/InputManager.ts");
/* harmony import */ var _Utils_Utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Utils/Utils */ "./src/Utils/Utils.ts");
/* harmony import */ var _Object_TankAIObject__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Object/TankAIObject */ "./src/Game/Object/TankAIObject.ts");
/* harmony import */ var _Object_Enum_EItemType__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Object/Enum/EItemType */ "./src/Game/Object/Enum/EItemType.ts");
/* harmony import */ var _Object_ItemObject__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Object/ItemObject */ "./src/Game/Object/ItemObject.ts");


















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
        this._enemyPause = {
            expireTime: 0,
            pause: false
        };
        this._renderer = new _Render_Renderer__WEBPACK_IMPORTED_MODULE_0__["default"](this, screen, sprite_main_src, sprite_title_src);
        this._inputManager = new _InputManager_InputManager__WEBPACK_IMPORTED_MODULE_13__["default"](this);
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
    Object.defineProperty(Game.prototype, "enemyPause", {
        get: function () {
            return this._enemyPause.pause;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "enemyPauseExpire", {
        get: function () {
            return this._enemyPause.expireTime;
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
                test = Object(_Utils_CollisionTest__WEBPACK_IMPORTED_MODULE_5__["BlockCollisionTest"])(item, object).length > 0;
            }
            else {
                test = Object(_Utils_CollisionTest__WEBPACK_IMPORTED_MODULE_5__["ObjectCollisionTest"])(object, item);
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
            var size = Object(_Render_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_11__["getSpriteData"])(object).size;
            animationPoint = {
                x: object.position.x + size.width / 2,
                y: object.position.y + size.height / 2
            };
        }
        else {
            animationPoint = target;
        }
        if (animationValue == undefined) {
            animationValue = _Object_Enum_EAnimationType__WEBPACK_IMPORTED_MODULE_8__["AnimationDefaults"][animationType];
        }
        var animation = new _Object_AnimationObject__WEBPACK_IMPORTED_MODULE_7__["default"](this, null, animationType, animationPoint, animationValue.duration, animationValue.frameRate, animationValue.loop, callback);
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
        this._gameData.levelData = Object(_Utils_Utils__WEBPACK_IMPORTED_MODULE_14__["deepClone"])(_Level_DefaultLevels_DefaultLevels__WEBPACK_IMPORTED_MODULE_12__["default"].find(function (level) {
            return level.levelId === levelId;
        }));
        this.showCurtain();
        this.spawnTank("PLAYER_TANK" /* PLAYER_TANK */, true, 0);
        if (this.gameData.playerData.length > 1) {
            this.spawnTank("PLAYER_TANK" /* PLAYER_TANK */, true, 1);
        }
        this._gameData.levelData.blocks.forEach(function (block) {
            _this.insertObject(new _Object_BlockObject__WEBPACK_IMPORTED_MODULE_9__["default"](_this, block.type, {
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
            y: (FRAME.top + FRAME.bottom + SCREEN.height) / 2 + _Render_Sprite_SpriteDefinition__WEBPACK_IMPORTED_MODULE_6__["default"].ANIMATION.PAUSE[0].size.height / 2
        }, "PAUSE" /* PAUSE */);
    };
    Game.prototype.setEnemyPause = function (pause) {
        this._enemyPause.pause = pause;
        if (pause) {
            this._enemyPause.expireTime = performance.now() + _Object_ItemObject__WEBPACK_IMPORTED_MODULE_17__["ITEM_WATCH_TIME"];
        }
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
        this._currentMenu = "RESULT" /* RESULT */;
        this._objects = [];
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
                x: _Render_Renderer__WEBPACK_IMPORTED_MODULE_0__["DRAWING_CONST"].sizes.frame.left + position.x * Object(_Render_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_11__["getObjectSize"])("TANK" /* TANK */).width,
                y: _Render_Renderer__WEBPACK_IMPORTED_MODULE_0__["DRAWING_CONST"].sizes.frame.top + position.y * Object(_Render_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_11__["getObjectSize"])("TANK" /* TANK */).height,
            }, _Utils_EDirection__WEBPACK_IMPORTED_MODULE_4__["default"].up, tankColor, 0);
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
            itemType = Object(_Utils_Utils__WEBPACK_IMPORTED_MODULE_14__["getRandomEnum"])(_Object_Enum_EItemType__WEBPACK_IMPORTED_MODULE_16__["default"]);
        }
        if (position == undefined) {
            position = this._renderer.randomPoint(Object(_Render_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_11__["getObjectSize"])("ITEM" /* ITEM */));
        }
        this.insertObject(new _Object_ItemObject__WEBPACK_IMPORTED_MODULE_17__["default"](this, itemType, position));
    };
    Game.prototype.createPlayerTank = function (position, direction, tankColor, tankLevel) {
        if (this.mainTank) {
            this.removeObject(this.mainTank);
        }
        this.insertObject(new _Object_TankObject__WEBPACK_IMPORTED_MODULE_2__["default"](this, "PLAYER_TANK" /* PLAYER_TANK */, position, direction, tankColor, tankLevel, MAIN_TANK_ID));
    };
    Game.prototype.createEnemyTank = function () {
        var tankSize = Object(_Render_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_11__["getObjectSize"])("TANK" /* TANK */);
        var spawnPoints = TANK_SPAWN_POINT.ENEMY_TANK;
        var availablePoints = [];
        var objects = this.objects.filter(function (object) { return object.objectType === "TANK" /* TANK */; });
        for (var i = 0; i < spawnPoints.length; i++) {
            var success = true;
            for (var j = 0; j < objects.length; j++) {
                if (Object(_Utils_CollisionTest__WEBPACK_IMPORTED_MODULE_5__["RectangleCollisionTest"])(this.translateBlockPosition(spawnPoints[i]), tankSize, objects[j].position, tankSize) == true) {
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
        var idx = Object(_Utils_Utils__WEBPACK_IMPORTED_MODULE_14__["getRandomRange"])(0, availablePoints.length - 1);
        var position = this.translateBlockPosition(availablePoints[idx]);
        var next = this.nextTank();
        if (next == undefined) {
            return;
        }
        this.insertObject(new _Object_TankAIObject__WEBPACK_IMPORTED_MODULE_15__["default"](this, next.type, next.item, position, _Utils_EDirection__WEBPACK_IMPORTED_MODULE_4__["default"].down));
    };
    Game.prototype.translateBlockPosition = function (point) {
        var blockSize = Object(_Render_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_11__["getObjectSize"])("BLOCK" /* BLOCK */);
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
                Object.values(_Object_Enum_ETankType__WEBPACK_IMPORTED_MODULE_10__["EnemyType"]).forEach(function (type) {
                    if (_this._gameData.levelData.tanks[i][type] > 0) {
                        availableTypes_1.push(type);
                    }
                });
                type = availableTypes_1[Object(_Utils_Utils__WEBPACK_IMPORTED_MODULE_14__["getRandomRange"])(0, availableTypes_1.length - 1)];
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
/* harmony import */ var _Utils_EDirection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utils/EDirection */ "./src/Utils/EDirection.ts");

function EKeysToEDirection(keys) {
    switch (keys) {
        case "ArrowUp" /* arrow_up */:
            return _Utils_EDirection__WEBPACK_IMPORTED_MODULE_0__["default"].up;
        case "ArrowRight" /* arrow_right */:
            return _Utils_EDirection__WEBPACK_IMPORTED_MODULE_0__["default"].right;
        case "ArrowDown" /* arrow_down */:
            return _Utils_EDirection__WEBPACK_IMPORTED_MODULE_0__["default"].down;
        case "ArrowLeft" /* arrow_left */:
            return _Utils_EDirection__WEBPACK_IMPORTED_MODULE_0__["default"].left;
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

/***/ "./src/Game/Level/DefaultLevels/DefaultLevels.ts":
/*!*******************************************************!*\
  !*** ./src/Game/Level/DefaultLevels/DefaultLevels.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Level1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Level1 */ "./src/Game/Level/DefaultLevels/Level1.ts");
/* harmony import */ var _Level2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Level2 */ "./src/Game/Level/DefaultLevels/Level2.ts");


var DefaultLevels = [
    _Level1__WEBPACK_IMPORTED_MODULE_0__["default"], _Level2__WEBPACK_IMPORTED_MODULE_1__["default"]
];
/* harmony default export */ __webpack_exports__["default"] = (DefaultLevels);


/***/ }),

/***/ "./src/Game/Level/DefaultLevels/Level1.ts":
/*!************************************************!*\
  !*** ./src/Game/Level/DefaultLevels/Level1.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LevelUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LevelUtils */ "./src/Game/Level/DefaultLevels/LevelUtils.ts");

var Level1 = {
    levelId: 1,
    levelName: 'LEVEL 1',
    blocks: [
        {
            position: { x: 1, y: 1 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 3, y: 1 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 5, y: 1 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 7, y: 1 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 9, y: 1 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 11, y: 1 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 1, y: 2 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 3, y: 2 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 5, y: 2 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 7, y: 2 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 9, y: 2 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 11, y: 2 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 1, y: 3 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 3, y: 3 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 5, y: 3 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 6, y: 3 },
            type: "IRON" /* IRON */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 7, y: 3 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 9, y: 3 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 11, y: 3 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 1, y: 4 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 3, y: 4 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 5, y: 4 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_HALF_HT"],
        },
        {
            position: { x: 7, y: 4 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_HALF_HT"],
        },
        {
            position: { x: 9, y: 4 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 11, y: 4 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 1, y: 5 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_HALF_HT"],
        },
        {
            position: { x: 3, y: 5 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_HALF_HT"],
        },
        {
            position: { x: 5, y: 5 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_HALF_HB"],
        },
        {
            position: { x: 7, y: 5 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_HALF_HB"],
        },
        {
            position: { x: 9, y: 5 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_HALF_HT"],
        },
        {
            position: { x: 11, y: 5 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_HALF_HT"],
        },
        {
            position: { x: 0, y: 6 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_HALF_HB"],
        },
        {
            position: { x: 2, y: 6 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_HALF_HB"],
        },
        {
            position: { x: 3, y: 6 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_HALF_HB"],
        },
        {
            position: { x: 5, y: 6 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_HALF_HT"],
        },
        {
            position: { x: 7, y: 6 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_HALF_HT"],
        },
        {
            position: { x: 9, y: 6 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_HALF_HB"],
        },
        {
            position: { x: 10, y: 6 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_HALF_HB"],
        },
        {
            position: { x: 12, y: 6 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_HALF_HB"],
        },
        {
            position: { x: 0, y: 7 },
            type: "IRON" /* IRON */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_HALF_HT"],
        },
        {
            position: { x: 2, y: 7 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_HALF_HT"],
        },
        {
            position: { x: 3, y: 7 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_HALF_HT"],
        },
        {
            position: { x: 5, y: 7 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_HALF_HB"],
        },
        {
            position: { x: 7, y: 7 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_HALF_HB"],
        },
        {
            position: { x: 9, y: 7 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_HALF_HT"],
        },
        {
            position: { x: 10, y: 7 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_HALF_HT"],
        },
        {
            position: { x: 12, y: 7 },
            type: "IRON" /* IRON */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_HALF_HT"],
        },
        {
            position: { x: 1, y: 8 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_HALF_HB"],
        },
        {
            position: { x: 3, y: 8 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_HALF_HB"],
        },
        {
            position: { x: 5, y: 8 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 6, y: 8 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 7, y: 8 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 9, y: 8 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_HALF_HB"],
        },
        {
            position: { x: 11, y: 8 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_HALF_HB"],
        },
        {
            position: { x: 1, y: 9 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 3, y: 9 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 5, y: 9 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 7, y: 9 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 9, y: 9 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 11, y: 9 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 1, y: 10 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 3, y: 10 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 5, y: 10 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_HALF_HT"],
        },
        {
            position: { x: 7, y: 10 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_HALF_HT"],
        },
        {
            position: { x: 9, y: 10 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 11, y: 10 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 1, y: 11 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 3, y: 11 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
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
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_HALF_HB"],
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
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 11, y: 11 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 5, y: 12 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_HALF_VR"],
        },
        {
            position: { x: 6, y: 12 },
            type: "EAGLE" /* EAGLE */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 7, y: 12 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_HALF_VL"],
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
};
/* harmony default export */ __webpack_exports__["default"] = (Level1);


/***/ }),

/***/ "./src/Game/Level/DefaultLevels/Level2.ts":
/*!************************************************!*\
  !*** ./src/Game/Level/DefaultLevels/Level2.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LevelUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LevelUtils */ "./src/Game/Level/DefaultLevels/LevelUtils.ts");

var Level2 = {
    levelId: 2,
    levelName: 'LEVEL 2',
    blocks: [
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
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_HALF_HB"],
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
            position: { x: 5, y: 12 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_HALF_VR"],
        },
        {
            position: { x: 6, y: 12 },
            type: "EAGLE" /* EAGLE */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 7, y: 12 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_HALF_VL"],
        },
        {
            position: { x: 3, y: 0 },
            type: "IRON" /* IRON */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 7, y: 0 },
            type: "IRON" /* IRON */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 1, y: 1 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 3, y: 1 },
            type: "IRON" /* IRON */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 7, y: 1 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 9, y: 1 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 11, y: 1 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 1, y: 2 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 6, y: 2 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 7, y: 2 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 9, y: 2 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 10, y: 2 },
            type: "IRON" /* IRON */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 11, y: 2 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 3, y: 3 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 9, y: 3 },
            type: "IRON" /* IRON */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 0, y: 4 },
            type: "BUSH" /* BUSH */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 3, y: 4 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 6, y: 4 },
            type: "IRON" /* IRON */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 9, y: 4 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 10, y: 4 },
            type: "BUSH" /* BUSH */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 11, y: 4 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 12, y: 4 },
            type: "IRON" /* IRON */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 0, y: 5 },
            type: "BUSH" /* BUSH */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 1, y: 5 },
            type: "BUSH" /* BUSH */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 5, y: 5 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 8, y: 5 },
            type: "IRON" /* IRON */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 10, y: 5 },
            type: "BUSH" /* BUSH */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 1, y: 6 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 2, y: 6 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 3, y: 6 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 4, y: 6 },
            type: "BUSH" /* BUSH */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 5, y: 6 },
            type: "BUSH" /* BUSH */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 6, y: 6 },
            type: "BUSH" /* BUSH */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 7, y: 6 },
            type: "IRON" /* IRON */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 10, y: 6 },
            type: "BUSH" /* BUSH */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 11, y: 6 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 3, y: 7 },
            type: "IRON" /* IRON */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 4, y: 7 },
            type: "BUSH" /* BUSH */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 5, y: 7 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 7, y: 7 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 9, y: 7 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 11, y: 7 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 0, y: 8 },
            type: "IRON" /* IRON */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 1, y: 8 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 3, y: 8 },
            type: "IRON" /* IRON */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 5, y: 8 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 7, y: 8 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 11, y: 8 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 1, y: 9 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 3, y: 9 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 5, y: 9 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 6, y: 9 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 7, y: 9 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 9, y: 9 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 10, y: 9 },
            type: "IRON" /* IRON */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 11, y: 9 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 1, y: 10 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 9, y: 10 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 11, y: 10 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 1, y: 11 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 3, y: 11 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 9, y: 11 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 10, y: 11 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
        },
        {
            position: { x: 11, y: 11 },
            type: "BRICK" /* BRICK */,
            blockState: _LevelUtils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_FULL"],
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
};
/* harmony default export */ __webpack_exports__["default"] = (Level2);


/***/ }),

/***/ "./src/Game/Level/DefaultLevels/LevelUtils.ts":
/*!****************************************************!*\
  !*** ./src/Game/Level/DefaultLevels/LevelUtils.ts ***!
  \****************************************************/
/*! exports provided: BLOCK_FULL, BLOCK_HALF_HT, BLOCK_HALF_HB, BLOCK_HALF_VL, BLOCK_HALF_VR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOCK_FULL", function() { return BLOCK_FULL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOCK_HALF_HT", function() { return BLOCK_HALF_HT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOCK_HALF_HB", function() { return BLOCK_HALF_HB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOCK_HALF_VL", function() { return BLOCK_HALF_VL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOCK_HALF_VR", function() { return BLOCK_HALF_VR; });
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
/* harmony import */ var _Utils_EDirection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utils/EDirection */ "./src/Utils/EDirection.ts");
/* harmony import */ var _Render_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Render/Sprite/SpriteData */ "./src/Render/Sprite/SpriteData.ts");
/* harmony import */ var _Utils_CollisionTest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Utils/CollisionTest */ "./src/Utils/CollisionTest.ts");
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
        var blockSize = Object(_Render_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_4__["getSpriteSize"])(this);
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
        var blockSize = Object(_Render_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_4__["getSpriteSize"])(this);
        var collisionCells = Object(_Utils_CollisionTest__WEBPACK_IMPORTED_MODULE_5__["BlockCollisionTest"])(this, bullet);
        var xPos = Object(_Utils_Utils__WEBPACK_IMPORTED_MODULE_1__["removeDuplicate"])(collisionCells.map(function (point) {
            return (point.x - _this.position.x) / (blockSize.width / 4);
        }));
        var yPos = Object(_Utils_Utils__WEBPACK_IMPORTED_MODULE_1__["removeDuplicate"])(collisionCells.map(function (point) {
            return (point.y - _this.position.y) / (blockSize.height / 4);
        }));
        var b44 = this.blockState4x4;
        if (bullet.direction === _Utils_EDirection__WEBPACK_IMPORTED_MODULE_3__["default"].up || bullet.direction === _Utils_EDirection__WEBPACK_IMPORTED_MODULE_3__["default"].down) {
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
        else if (bullet.direction === _Utils_EDirection__WEBPACK_IMPORTED_MODULE_3__["default"].left || bullet.direction === _Utils_EDirection__WEBPACK_IMPORTED_MODULE_3__["default"].right) {
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
/* harmony import */ var _Utils_EDirection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utils/EDirection */ "./src/Utils/EDirection.ts");
/* harmony import */ var _Render_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Render/Sprite/SpriteData */ "./src/Render/Sprite/SpriteData.ts");
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
        this.remove();
        var animationPosition;
        var size = Object(_Render_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_2__["getSpriteSize"])(this);
        if (this.direction === _Utils_EDirection__WEBPACK_IMPORTED_MODULE_1__["default"].up || this.direction === _Utils_EDirection__WEBPACK_IMPORTED_MODULE_1__["default"].down) {
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
    EItemType["SHOVEL"] = "SHOVEL";
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
/*! exports provided: ITEM_WATCH_TIME, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ITEM_WATCH_TIME", function() { return ITEM_WATCH_TIME; });
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



var ITEM_WATCH_TIME = 3000;
var ItemObject = /** @class */ (function (_super) {
    __extends(ItemObject, _super);
    function ItemObject(game, itemType, position) {
        var _this = _super.call(this, game, "ITEM" /* ITEM */, position, _Utils_Utils__WEBPACK_IMPORTED_MODULE_2__["Guid"].newGuid()) || this;
        _this.itemType = itemType;
        return _this;
    }
    ItemObject.prototype.hit = function (eventOrigin) {
        var origin = eventOrigin;
        if (origin.tankType === "ENEMY_TANK" /* ENEMY_TANK */) {
            return;
        }
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
                this._game.setEnemyPause(true);
                break;
            case _Enum_EItemType__WEBPACK_IMPORTED_MODULE_1__["default"].SHOVEL:
                // change all bricks into iron
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
/* harmony import */ var _Utils_EDirection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utils/EDirection */ "./src/Utils/EDirection.ts");
/* harmony import */ var _Render_Renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Render/Renderer */ "./src/Render/Renderer.ts");
/* harmony import */ var _Render_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Render/Sprite/SpriteData */ "./src/Render/Sprite/SpriteData.ts");
/* harmony import */ var _Utils_CollisionTest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Utils/CollisionTest */ "./src/Utils/CollisionTest.ts");
/* harmony import */ var _Utils_Utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Utils/Utils */ "./src/Utils/Utils.ts");
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
            _this._direction = _Utils_EDirection__WEBPACK_IMPORTED_MODULE_1__["default"].up;
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
        var frame = _Render_Renderer__WEBPACK_IMPORTED_MODULE_2__["DRAWING_CONST"].sizes.frame;
        var screen = _Render_Renderer__WEBPACK_IMPORTED_MODULE_2__["DRAWING_CONST"].sizes.screen;
        var size = Object(_Render_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_3__["getSpriteSize"])(this);
        switch (this.direction) {
            case _Utils_EDirection__WEBPACK_IMPORTED_MODULE_1__["default"].left:
                this.position.x = frame.left;
                break;
            case _Utils_EDirection__WEBPACK_IMPORTED_MODULE_1__["default"].up:
                this.position.y = frame.top;
                break;
            case _Utils_EDirection__WEBPACK_IMPORTED_MODULE_1__["default"].down:
                this.position.y = screen.height + frame.top - size.height;
                break;
            case _Utils_EDirection__WEBPACK_IMPORTED_MODULE_1__["default"].right:
                this.position.x = screen.width + frame.left - size.width;
                break;
        }
    };
    MovingObject.prototype.fitToObject = function (object, gap) {
        if (gap === void 0) { gap = 0; }
        var size = Object(_Render_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_3__["getSpriteSize"])(this);
        var tankSize = Object(_Render_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_3__["getObjectSize"])(this.objectType);
        var objectSize = Object(_Render_Sprite_SpriteData__WEBPACK_IMPORTED_MODULE_3__["getSpriteSize"])(object);
        if (object.objectType === "BLOCK" /* BLOCK */) {
            var block = object;
            var cellSize = {
                width: objectSize.width / 4,
                height: objectSize.height / 4
            };
            var adjustGap = cellSize.width * .8;
            var collision_cells = Object(_Utils_CollisionTest__WEBPACK_IMPORTED_MODULE_4__["BlockCollisionTest"])(block, this);
            var xPos = collision_cells.map(function (point) { return point.x; });
            var yPos = collision_cells.map(function (point) { return point.y; });
            switch (this.direction) {
                case _Utils_EDirection__WEBPACK_IMPORTED_MODULE_1__["default"].left:
                    if (xPos.length > 0) {
                        if (yPos.length > 0) {
                            if (this.position.y + tankSize.height - Object(_Utils_Utils__WEBPACK_IMPORTED_MODULE_5__["min"])(yPos) <= adjustGap) {
                                this.position.y = Object(_Utils_Utils__WEBPACK_IMPORTED_MODULE_5__["min"])(yPos) - tankSize.height;
                            }
                            else if (Object(_Utils_Utils__WEBPACK_IMPORTED_MODULE_5__["max"])(yPos) + cellSize.height - this.position.y <= adjustGap) {
                                this.position.y = Object(_Utils_Utils__WEBPACK_IMPORTED_MODULE_5__["max"])(yPos) + cellSize.height;
                            }
                        }
                        this.position.x = Object(_Utils_Utils__WEBPACK_IMPORTED_MODULE_5__["max"])(xPos) + objectSize.width / 4 + gap;
                    }
                    break;
                case _Utils_EDirection__WEBPACK_IMPORTED_MODULE_1__["default"].up:
                    if (yPos.length > 0) {
                        if (xPos.length > 0) {
                            if (this.position.x + tankSize.width - Object(_Utils_Utils__WEBPACK_IMPORTED_MODULE_5__["min"])(xPos) <= adjustGap) {
                                this.position.x = object.position.x - tankSize.width;
                            }
                            else if (Object(_Utils_Utils__WEBPACK_IMPORTED_MODULE_5__["max"])(xPos) + cellSize.width - this.position.x <= adjustGap) {
                                this.position.x = Object(_Utils_Utils__WEBPACK_IMPORTED_MODULE_5__["max"])(xPos) + cellSize.width;
                            }
                        }
                        this.position.y = Object(_Utils_Utils__WEBPACK_IMPORTED_MODULE_5__["max"])(yPos) + cellSize.height + gap;
                    }
                    break;
                case _Utils_EDirection__WEBPACK_IMPORTED_MODULE_1__["default"].down:
                    if (yPos.length > 0) {
                        if (xPos.length > 0) {
                            if (this.position.x + tankSize.width - Object(_Utils_Utils__WEBPACK_IMPORTED_MODULE_5__["min"])(xPos) <= adjustGap) {
                                this.position.x = Object(_Utils_Utils__WEBPACK_IMPORTED_MODULE_5__["min"])(xPos) - tankSize.width;
                            }
                            else if (Object(_Utils_Utils__WEBPACK_IMPORTED_MODULE_5__["max"])(xPos) + cellSize.width - this.position.x <= adjustGap) {
                                this.position.x = Object(_Utils_Utils__WEBPACK_IMPORTED_MODULE_5__["max"])(xPos) + cellSize.width;
                            }
                        }
                        this.position.y = Object(_Utils_Utils__WEBPACK_IMPORTED_MODULE_5__["min"])(yPos) - size.height - gap;
                    }
                    break;
                case _Utils_EDirection__WEBPACK_IMPORTED_MODULE_1__["default"].right:
                    if (xPos.length > 0) {
                        if (yPos.length > 0) {
                            if (this.position.y + tankSize.height - Object(_Utils_Utils__WEBPACK_IMPORTED_MODULE_5__["min"])(yPos) <= adjustGap) {
                                this.position.y = Object(_Utils_Utils__WEBPACK_IMPORTED_MODULE_5__["min"])(yPos) - tankSize.height;
                            }
                            else if (Object(_Utils_Utils__WEBPACK_IMPORTED_MODULE_5__["max"])(yPos) + cellSize.height - this.position.y <= adjustGap) {
                                this.position.y = Object(_Utils_Utils__WEBPACK_IMPORTED_MODULE_5__["max"])(yPos) + cellSize.height;
                            }
                        }
                        this.position.x = Object(_Utils_Utils__WEBPACK_IMPORTED_MODULE_5__["min"])(xPos) - size.width - gap;
                    }
                    break;
            }
        }
        else {
            switch (this.direction) {
                case _Utils_EDirection__WEBPACK_IMPORTED_MODULE_1__["default"].left:
                    this.position.x = object.position.x + objectSize.width;
                    break;
                case _Utils_EDirection__WEBPACK_IMPORTED_MODULE_1__["default"].up:
                    this.position.y = object.position.y + objectSize.height;
                    break;
                case _Utils_EDirection__WEBPACK_IMPORTED_MODULE_1__["default"].down:
                    this.position.y = object.position.y - size.height;
                    break;
                case _Utils_EDirection__WEBPACK_IMPORTED_MODULE_1__["default"].right:
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
        case _Utils_EDirection__WEBPACK_IMPORTED_MODULE_1__["default"].up:
            position.y -= speed;
            break;
        case _Utils_EDirection__WEBPACK_IMPORTED_MODULE_1__["default"].right:
            position.x += speed;
            break;
        case _Utils_EDirection__WEBPACK_IMPORTED_MODULE_1__["default"].down:
            position.y += speed;
            break;
        case _Utils_EDirection__WEBPACK_IMPORTED_MODULE_1__["default"].left:
            position.x -= speed;
            break;
    }
}


/***/ }),

/***/ "./src/Game/Object/TankAIObject.ts":
/*!*****************************************!*\
  !*** ./src/Game/Object/TankAIObject.ts ***!
  \*****************************************/
/*! exports provided: ColorSequenceDefinitions, AI_ACTION_DELAY, AI_FIRE_DELAY, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorSequenceDefinitions", function() { return ColorSequenceDefinitions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AI_ACTION_DELAY", function() { return AI_ACTION_DELAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AI_FIRE_DELAY", function() { return AI_FIRE_DELAY; });
/* harmony import */ var _TankObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TankObject */ "./src/Game/Object/TankObject.ts");
/* harmony import */ var _Enum_ETankType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enum/ETankType */ "./src/Game/Object/Enum/ETankType.ts");
/* harmony import */ var _Utils_EDirection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utils/EDirection */ "./src/Utils/EDirection.ts");
/* harmony import */ var _Enum_EAnimationType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Enum/EAnimationType */ "./src/Game/Object/Enum/EAnimationType.ts");
/* harmony import */ var _Utils_Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Utils/Utils */ "./src/Utils/Utils.ts");
/* harmony import */ var _BulletObject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BulletObject */ "./src/Game/Object/BulletObject.ts");
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
var AI_ACTION_DELAY = 500;
var AI_FIRE_DELAY = 1000;
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
        if (_this._enemyType === _Enum_ETankType__WEBPACK_IMPORTED_MODULE_1__["EnemyType"].SPEED) {
            _this._speed = 3;
        }
        _this._hasItem = hasItem;
        _this._colorIndex = 0;
        _this._hp = hp;
        _this._lastTurned = 0;
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
    TankAIOBject.prototype.action = function () {
        var now = performance.now();
        if (now - this._lastFired > AI_FIRE_DELAY) {
            this.fire();
            this._lastFired = now;
        }
        if (now - this._lastTurned > AI_ACTION_DELAY) {
            var random = Math.random();
            var direction = void 0;
            if (random < .5) {
                direction = this.findEagle();
            }
            else if (random < .8) {
                direction = this.findPlayer();
            }
            else {
                direction = Object(_Utils_Utils__WEBPACK_IMPORTED_MODULE_4__["getRandomEnum"])(_Utils_EDirection__WEBPACK_IMPORTED_MODULE_2__["default"]);
            }
            if (direction) {
                this._direction = direction;
                this._lastTurned = now;
            }
        }
        this.move();
    };
    TankAIOBject.prototype.findEagle = function () {
        var eagle = this._game.objects.find(function (object) {
            if (object.objectType === "BLOCK" /* BLOCK */) {
                return object.blockType === "EAGLE" /* EAGLE */;
            }
        });
        var xDiff = this.position.x - eagle.position.x;
        var yDiff = this.position.y - eagle.position.y;
        if (xDiff < yDiff) {
            if (this.position.x > eagle.position.x) {
                return _Utils_EDirection__WEBPACK_IMPORTED_MODULE_2__["default"].left;
            }
            else {
                return _Utils_EDirection__WEBPACK_IMPORTED_MODULE_2__["default"].right;
            }
        }
        else {
            if (this.position.y > eagle.position.y) {
                return _Utils_EDirection__WEBPACK_IMPORTED_MODULE_2__["default"].up;
            }
            else {
                return _Utils_EDirection__WEBPACK_IMPORTED_MODULE_2__["default"].down;
            }
        }
    };
    TankAIOBject.prototype.findPlayer = function () {
        var players = this._game.objects.filter(function (object) {
            if (object.objectType === "TANK" /* TANK */) {
                return object.tankType === "PLAYER_TANK" /* PLAYER_TANK */;
            }
        });
        var player = players[Object(_Utils_Utils__WEBPACK_IMPORTED_MODULE_4__["getRandomRange"])(0, players.length - 1)];
        if (player == undefined) {
            return;
        }
        var xDiff = this.position.x - player.position.x;
        var yDiff = this.position.y - player.position.y;
        if (xDiff > yDiff) {
            if (this.position.x > player.position.x) {
                return _Utils_EDirection__WEBPACK_IMPORTED_MODULE_2__["default"].left;
            }
            else {
                return _Utils_EDirection__WEBPACK_IMPORTED_MODULE_2__["default"].right;
            }
        }
        else {
            if (this.position.y > player.position.y) {
                return _Utils_EDirection__WEBPACK_IMPORTED_MODULE_2__["default"].up;
            }
            else {
                return _Utils_EDirection__WEBPACK_IMPORTED_MODULE_2__["default"].down;
            }
        }
    };
    TankAIOBject.prototype.hit = function (eventOrigin) {
        if (eventOrigin.objectType === "BULLET" /* BULLET */) {
            var bullet = eventOrigin;
            if (bullet.parent.tankType === "ENEMY_TANK" /* ENEMY_TANK */) {
                return;
            }
        }
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
        if (eventOrigin && eventOrigin instanceof _BulletObject__WEBPACK_IMPORTED_MODULE_5__["default"]) {
            var player = eventOrigin.parent;
            var playerIndex = player === this._game.mainTank ? 0 : 1;
            this._game.gameData.playerData[playerIndex].destroyedTank[this._enemyType]++;
            this._game.gameData.playerData[playerIndex].score += this.getTankScore();
            // TODO player 
        }
        this._game.startAnimation(this, "EXPLOSION_SMALL" /* EXPLOSION_SMALL */, null, function (animation) {
            _this._game.startAnimation(animation.animationPoint, "EXPLOSION_LARGE" /* EXPLOSION_LARGE */, null, function () {
                var scoreAnimation = Object(_Enum_EAnimationType__WEBPACK_IMPORTED_MODULE_3__["ScoreToAnimation"])(_Enum_ETankType__WEBPACK_IMPORTED_MODULE_1__["EnemyScoreMap"].get(_this._enemyType));
                _this._game.startAnimation(animation.animationPoint, scoreAnimation, null, function () {
                    _this._game.spawnTank(_this.tankType);
                });
            });
        });
    };
    TankAIOBject.prototype.getTankScore = function () {
        switch (this._enemyType) {
            case _Enum_ETankType__WEBPACK_IMPORTED_MODULE_1__["EnemyType"].DEFAULT:
                return 100;
            case _Enum_ETankType__WEBPACK_IMPORTED_MODULE_1__["EnemyType"].SPEED:
                return 200;
            case _Enum_ETankType__WEBPACK_IMPORTED_MODULE_1__["EnemyType"].POWER:
                return 300;
            case _Enum_ETankType__WEBPACK_IMPORTED_MODULE_1__["EnemyType"].ARMOURED:
                return 400;
        }
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
/* harmony import */ var _Utils_EDirection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utils/EDirection */ "./src/Utils/EDirection.ts");
/* harmony import */ var _BulletObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BulletObject */ "./src/Game/Object/BulletObject.ts");
/* harmony import */ var _Render_Sprite_SpriteDefinition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Render/Sprite/SpriteDefinition */ "./src/Render/Sprite/SpriteDefinition.ts");
/* harmony import */ var _Utils_Utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Utils/Utils */ "./src/Utils/Utils.ts");
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
        var _this = _super.call(this, game, "TANK" /* TANK */, position, direction, TANK_SPEED, id != null ? id : _Utils_Utils__WEBPACK_IMPORTED_MODULE_5__["Guid"].newGuid()) || this;
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
        var tankSprite = _Render_Sprite_SpriteDefinition__WEBPACK_IMPORTED_MODULE_4__["default"].TANK[this.tankColor][this.tankLevel][this.direction][this.spritePosition];
        var bulletSprite = _Render_Sprite_SpriteDefinition__WEBPACK_IMPORTED_MODULE_4__["default"].BULLET[this.direction];
        switch (this.direction) {
            case _Utils_EDirection__WEBPACK_IMPORTED_MODULE_2__["default"].up:
                position = {
                    x: this.position.x + this.getMiddle(tankSprite, bulletSprite, this.direction),
                    y: this.position.y
                };
                break;
            case _Utils_EDirection__WEBPACK_IMPORTED_MODULE_2__["default"].right:
                position = {
                    x: this.position.x + tankSprite.size.width,
                    y: this.position.y + this.getMiddle(tankSprite, bulletSprite, this.direction)
                };
                break;
            case _Utils_EDirection__WEBPACK_IMPORTED_MODULE_2__["default"].down:
                position = {
                    x: this.position.x + this.getMiddle(tankSprite, bulletSprite, this.direction),
                    y: this.position.y + tankSprite.size.height
                };
                break;
            case _Utils_EDirection__WEBPACK_IMPORTED_MODULE_2__["default"].left:
                position = {
                    x: this.position.x,
                    y: this.position.y + this.getMiddle(tankSprite, bulletSprite, this.direction)
                };
                break;
        }
        var bulletSpeed;
        if (this.tankLevel == 0) {
            bulletSpeed = _BulletObject__WEBPACK_IMPORTED_MODULE_3__["BULLET_SLOW"];
        }
        else if (this.tankLevel < 4) {
            bulletSpeed = _BulletObject__WEBPACK_IMPORTED_MODULE_3__["BULLET_FAST"];
        }
        var bullet = new _BulletObject__WEBPACK_IMPORTED_MODULE_3__["default"](this._game, this, position, this.direction, bulletSpeed, _Utils_Utils__WEBPACK_IMPORTED_MODULE_5__["Guid"].newGuid());
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
        if (direction === _Utils_EDirection__WEBPACK_IMPORTED_MODULE_2__["default"].up || direction === _Utils_EDirection__WEBPACK_IMPORTED_MODULE_2__["default"].down) {
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
/* harmony import */ var _Utils_EDirection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Utils/EDirection */ "./src/Utils/EDirection.ts");
/* harmony import */ var _Utils_Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Utils/Utils */ "./src/Utils/Utils.ts");
/* harmony import */ var _Game_Object_TankAIObject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Game/Object/TankAIObject */ "./src/Game/Object/TankAIObject.ts");
/* harmony import */ var _Resources_PixelEmulator_xq08_ttf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Resources/PixelEmulator-xq08.ttf */ "./src/Resources/PixelEmulator-xq08.ttf");







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
        if (this._game.enemyPauseExpire < this._fps.now) {
            this._game.setEnemyPause(false);
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
                        if (tank instanceof _Game_Object_TankAIObject__WEBPACK_IMPORTED_MODULE_5__["default"]) {
                            var enemy = tank;
                            var definition = enemy.getColorDefinition();
                            if (_this._fps.now - enemy.lastChanged > definition.delay) {
                                enemy.nextColorIndex();
                                enemy.lastChanged = _this._fps.now;
                            }
                            if (tank.visible && _this._game.enemyPause == false) {
                                tank.action();
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
        if ((keyState.ArrowUp === true && mainTank.direction == _Utils_EDirection__WEBPACK_IMPORTED_MODULE_3__["default"].up) ||
            (keyState.ArrowRight === true && mainTank.direction == _Utils_EDirection__WEBPACK_IMPORTED_MODULE_3__["default"].right) ||
            (keyState.ArrowDown === true && mainTank.direction == _Utils_EDirection__WEBPACK_IMPORTED_MODULE_3__["default"].down) ||
            (keyState.ArrowLeft === true && mainTank.direction == _Utils_EDirection__WEBPACK_IMPORTED_MODULE_3__["default"].left)) {
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
            x: Object(_Utils_Utils__WEBPACK_IMPORTED_MODULE_4__["getRandomRange"])(DRAWING_CONST.sizes.frame.left, this._canvas.width - DRAWING_CONST.sizes.frame.right - size.width),
            y: Object(_Utils_Utils__WEBPACK_IMPORTED_MODULE_4__["getRandomRange"])(DRAWING_CONST.sizes.frame.top, this._canvas.height - DRAWING_CONST.sizes.frame.bottom - size.height),
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
/* harmony import */ var _Utils_EDirection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utils/EDirection */ "./src/Utils/EDirection.ts");
/* harmony import */ var _Game_Object_TankAIObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Game/Object/TankAIObject */ "./src/Game/Object/TankAIObject.ts");



/**
 * Find sprite data for given object
 * @param object found sprite definition
 */
function getSpriteData(object) {
    switch (object.objectType) {
        case "TANK" /* TANK */:
            var tank = object;
            if (tank instanceof _Game_Object_TankAIObject__WEBPACK_IMPORTED_MODULE_2__["default"] && tank.colorIndex != undefined) {
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
        direction = _Utils_EDirection__WEBPACK_IMPORTED_MODULE_1__["default"].up;
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

/***/ "./src/Resources/PixelEmulator-xq08.ttf":
/*!**********************************************!*\
  !*** ./src/Resources/PixelEmulator-xq08.ttf ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../dist/js/PixelEmulator-xq08.ttf");

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

/***/ "./src/Utils/EDirection.ts":
/*!*********************************!*\
  !*** ./src/Utils/EDirection.ts ***!
  \*********************************/
/*! exports provided: EDirectionToEKeys, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDirectionToEKeys", function() { return EDirectionToEKeys; });
var EDirection;
(function (EDirection) {
    EDirection["up"] = "up";
    EDirection["right"] = "right";
    EDirection["down"] = "down";
    EDirection["left"] = "left";
})(EDirection || (EDirection = {}));
;
function EDirectionToEKeys(direction) {
    switch (direction) {
        case EDirection.up:
            return "ArrowUp" /* arrow_up */;
        case EDirection.right:
            return "ArrowRight" /* arrow_right */;
        case EDirection.down:
            return "ArrowDown" /* arrow_down */;
        case EDirection.left:
            return "ArrowLeft" /* arrow_left */;
    }
}
/* harmony default export */ __webpack_exports__["default"] = (EDirection);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvR2FtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9JbnB1dE1hbmFnZXIvRUtleXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvSW5wdXRNYW5hZ2VyL0lucHV0TWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9MZXZlbC9EZWZhdWx0TGV2ZWxzL0RlZmF1bHRMZXZlbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvTGV2ZWwvRGVmYXVsdExldmVscy9MZXZlbDEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvTGV2ZWwvRGVmYXVsdExldmVscy9MZXZlbDIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvTGV2ZWwvRGVmYXVsdExldmVscy9MZXZlbFV0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL0xldmVsL0lMZXZlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9PYmplY3QvQW5pbWF0aW9uT2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL09iamVjdC9CbG9ja09iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9PYmplY3QvQnVsbGV0T2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL09iamVjdC9FbnVtL0VBbmltYXRpb25UeXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL09iamVjdC9FbnVtL0VJdGVtVHlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9PYmplY3QvRW51bS9FVGFua1R5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvT2JqZWN0L0dhbWVPYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvT2JqZWN0L0l0ZW1PYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvT2JqZWN0L01vdmluZ09iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9PYmplY3QvVGFua0FJT2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL09iamVjdC9UYW5rT2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9SZW5kZXIvUmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlbmRlci9TcHJpdGUvU3ByaXRlRGF0YS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVuZGVyL1Nwcml0ZS9TcHJpdGVEZWZpbml0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9SZW5kZXIvU3ByaXRlL3Nwcml0ZV9tYWluLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVuZGVyL1Nwcml0ZS9zcHJpdGVfdGl0bGUucG5nIiwid2VicGFjazovLy8uL3NyYy9SZXNvdXJjZXMvUGl4ZWxFbXVsYXRvci14cTA4LnR0ZiIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbHMvQ29sbGlzaW9uVGVzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbHMvRURpcmVjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbHMvVXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtR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QUNBLG1CQUFtQix5REFBVTtBQUM3QjtBQUNBLG1CQUFtQix5REFBVTtBQUM3QjtBQUNBLG1CQUFtQix5REFBVTtBQUM3QjtBQUNBLG1CQUFtQix5REFBVTtBQUM3QjtBQUNBOzs7Ozs7Ozs7Ozs7O0FDWkE7QUFBQTtBQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxnRUFBaUI7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDYywyRUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDdEk1QjtBQUFBO0FBQUE7QUFBOEI7QUFDQTtBQUM5QjtBQUNBLElBQUksK0NBQU0sRUFBRSwrQ0FBTTtBQUNsQjtBQUNlLDRFQUFhLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNMN0I7QUFBQTtBQUFzRztBQUN0RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGNBQWM7QUFDckM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGNBQWM7QUFDckM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGNBQWM7QUFDckM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0IseURBQWE7QUFDckMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0IseURBQWE7QUFDckMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGNBQWM7QUFDckM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0IseURBQWE7QUFDckMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0IseURBQWE7QUFDckMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0IseURBQWE7QUFDckMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0IseURBQWE7QUFDckMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0IseURBQWE7QUFDckMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGNBQWM7QUFDckM7QUFDQSx3QkFBd0IseURBQWE7QUFDckMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0IseURBQWE7QUFDckMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0IseURBQWE7QUFDckMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0IseURBQWE7QUFDckMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0IseURBQWE7QUFDckMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0IseURBQWE7QUFDckMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0IseURBQWE7QUFDckMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGNBQWM7QUFDckM7QUFDQSx3QkFBd0IseURBQWE7QUFDckMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGNBQWM7QUFDckM7QUFDQSx3QkFBd0IseURBQWE7QUFDckMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0IseURBQWE7QUFDckMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0IseURBQWE7QUFDckMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0IseURBQWE7QUFDckMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0IseURBQWE7QUFDckMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0IseURBQWE7QUFDckMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0IseURBQWE7QUFDckMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGNBQWM7QUFDckM7QUFDQSx3QkFBd0IseURBQWE7QUFDckMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGNBQWM7QUFDckM7QUFDQSx3QkFBd0IseURBQWE7QUFDckMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0IseURBQWE7QUFDckMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0IseURBQWE7QUFDckMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0IseURBQWE7QUFDckMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGNBQWM7QUFDckM7QUFDQSx3QkFBd0IseURBQWE7QUFDckMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGNBQWM7QUFDckM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGNBQWM7QUFDckM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGNBQWM7QUFDckM7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LGFBQWE7QUFDcEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGNBQWM7QUFDckM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGNBQWM7QUFDckM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGNBQWM7QUFDckM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGNBQWM7QUFDckM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGNBQWM7QUFDckM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGNBQWM7QUFDckM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGNBQWM7QUFDckM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGNBQWM7QUFDckM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGNBQWM7QUFDckM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGNBQWM7QUFDckM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGNBQWM7QUFDckM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGNBQWM7QUFDckM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGNBQWM7QUFDckM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGNBQWM7QUFDckM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGVBQWU7QUFDdEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGNBQWM7QUFDckM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGNBQWM7QUFDckM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGNBQWM7QUFDckM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGVBQWU7QUFDdEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLGVBQWU7QUFDdEM7QUFDQSx3QkFBd0Isc0RBQVU7QUFDbEMsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZSxxRUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDN1h0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLGdCQUFnQixFQUFFO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsMkVBQWdCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLDJFQUFnQjtBQUM1RDtBQUNBO0FBQ0EsK0NBQStDLHdFQUFhO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLGlFQUFZO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QXdCLEVBQUU7QUFDcEYscUJBQXFCLFlBQVksZ0JBQWdCLFNBQVMsd0JBQXdCLEVBQUU7QUFDcEY7QUFDQTtBQUNBLHFCQUFxQixZQUFZLGdCQUFnQixTQUFTLHdCQUF3QixFQUFFO0FBQ3BGLHFCQUFxQixZQUFZLGdCQUFnQixTQUFTLHdCQUF3QixFQUFFO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGO0FBQ0E7QUFDQSxxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRixxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRjtBQUNBO0FBQ0EscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckYscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckY7QUFDQTtBQUNBLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRixxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRjtBQUNBO0FBQ0EscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckYscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckY7QUFDQTtBQUNBLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGO0FBQ0E7QUFDQSxxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRixxQkFB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d0IsRUFBRTtBQUNyRixxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRjtBQUNBO0FBQ0EscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckYscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckY7QUFDQTtBQUNBLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRixxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRjtBQUNBO0FBQ0EscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckYscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckY7QUFDQTtBQUNBLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGO0FBQ0E7QUFDQSxxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRixxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckYscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckY7QUFDQTtBQUNBLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGO0FBQ0E7QUFDQSxxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRixxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRjtBQUNBO0FBQ0EscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckYscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckYscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckY7QUFDQTtBQUNBLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGO0FBQ0E7QUFDQSxxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRixxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRjtBQUNBO0FBQ0EscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckYscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckY7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGO0FBQ0E7QUFDQSxxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRixxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRjtBQUNBO0FBQ0EscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckYscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckY7QUFDQTtBQUNBLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRixxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRjtBQUNBO0FBQ0EscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckYscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckY7QUFDQTtBQUNBLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGO0FBQ0E7QUFDQSxxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRixxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckYscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckY7QUFDQTtBQUNBLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGO0FBQ0E7QUFDQSxxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRixxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRjtBQUNBO0FBQ0EscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckYscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckY7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsYUFBYSxZQUFZLGlCQUFpQixTQUFTLHNCQUFzQixFQUFFO0FBQzNFLGVBQWUsWUFBWSxpQkFBaUIsU0FBUyxzQkFBc0IsRUFBRTtBQUM3RSxlQUFlLFlBQVksaUJBQWlCLFNBQVMsc0JBQXNCLEVBQUU7QUFDN0UsZ0JBQWdCLFlBQVksaUJBQWlCLFNBQVMsc0JBQXNCO0FBQzVFLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsZUFBZTtBQUMxQyx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsZ0JBQWdCO0FBQzNDLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixnQkFBZ0I7QUFDM0MsdUJBQXVCO0FBQ3ZCLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixnQkFBZ0I7QUFDM0MsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGdCQUFnQjtBQUMzQyx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsZ0JBQWdCO0FBQzNDLHVCQUF1QjtBQUN2QixhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsZ0JBQWdCO0FBQzNDLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUMsdUJBQXVCO0FBQ3ZCLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUMsdUJBQXVCO0FBQ3ZCLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUMsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGlCQUFpQjtBQUM1Qyx1QkFBdUI7QUFDdkIsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGlCQUFpQjtBQUM1Qyx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsaUJBQWlCO0FBQzVDLHVCQUF1QjtBQUN2QixhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsaUJBQWlCO0FBQzVDLHVCQUF1QjtBQUN2QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGlCQUFpQjtBQUM1Qyx1QkFBdUI7QUFDdkIsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGlCQUFpQjtBQUM1Qyx1QkFBdUI7QUFDdkIsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGlCQUFpQjtBQUM1Qyx1QkFBdUI7QUFDdkIsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGlCQUFpQjtBQUM1Qyx1QkFBdUI7QUFDdkIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUMsdUJBQXVCO0FBQ3ZCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsaUJBQWlCO0FBQzVDLHVCQUF1QjtBQUN2QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGlCQUFpQjtBQUM1Qyx1QkFBdUI7QUFDdkIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUMsdUJBQXVCO0FBQ3ZCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsaUJBQWlCO0FBQzVDLHVCQUF1QjtBQUN2QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGlCQUFpQjtBQUM1Qyx1QkFBdUI7QUFDdkIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUMsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEMsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLGFBQWEsWUFBWSxlQUFlLFNBQVMsd0JBQXdCLEVBQUU7QUFDM0UsYUFBYSxZQUFZLGVBQWUsU0FBUyx3QkFBd0IsRUFBRTtBQUMzRTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsYUFBYSxTQUFTO0FBQ2pEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHVCQUF1QixpQkFBaUI7QUFDeEMsbUJBQW1CO0FBQ25CLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixpQkFBaUI7QUFDeEMsbUJBQW1CO0FBQ25CLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixpQkFBaUI7QUFDeEMsbUJBQW1CO0FBQ25CLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixpQkFBaUI7QUFDeEMsbUJBQW1CO0FBQ25CLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixpQkFBaUI7QUFDeEMsbUJBQW1CO0FBQ25CLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixpQkFBaUI7QUFDeEMsbUJBQW1CO0FBQ25CLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixpQkFBaUI7QUFDeEMsbUJBQW1CO0FBQ25CLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDLG1CQUFtQjtBQUNuQixTQUFTO0FBQ1Q7QUFDQSx1QkFBdUIsaUJBQWlCO0FBQ3hDLG1CQUFtQjtBQUNuQixTQUFTO0FBQ1Q7QUFDQSx1QkFBdUIsaUJBQWlCO0FBQ3hDLG1CQUFtQjtBQUNuQixTQUFTO0FBQ1Q7QUFDQTtBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUMsdUJBQXVCO0FBQ3ZCLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUMsdUJBQXVCO0FBQ3ZCLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUMsdUJBQXVCO0FBQ3ZCLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUMsdUJBQXVCO0FBQ3ZCLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUMsdUJBQXVCO0FBQ3ZCLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUMsdUJBQXVCO0FBQ3ZCLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUMsdUJBQXVCO0FBQ3ZCLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUMsdUJBQXVCO0FBQ3ZCLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUMsdUJBQXVCO0FBQ3ZCLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUMsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixlQUFlO0FBQ3RDLG1CQUFtQjtBQUNuQjtBQUNBLEtBQUs7QUFDTDtBQUNlLHlFQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUM5MEIxQjtBQUFlLDJGQUE0QixFOzs7Ozs7Ozs7Ozs7QUNBM0M7QUFBZSw0RkFBNkIsRTs7Ozs7Ozs7Ozs7O0FDQTVDO0FBQWUsa0dBQW1DLEU7Ozs7Ozs7Ozs7OztBQ0FsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTREO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxnQkFBZ0IsK0VBQWE7QUFDN0IsZ0JBQWdCLCtFQUFhO0FBQzdCO0FBQ0E7QUFDTztBQUNQO0FBQ0Esb0JBQW9CLCtFQUFhO0FBQ2pDLHFCQUFxQiwrRUFBYTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGdDQUFnQztBQUNuRCx1QkFBdUIsbUNBQW1DO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDaERBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGdDQUFnQztBQUNqQztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlLHlFQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNwQjFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBZ0IsU0FBSSxJQUFJLFNBQUk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsU0FBSSxJQUFJLFNBQUk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE1BQU0sZ0JBQWdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsU0FBSSxJQUFJLFNBQUk7QUFDNUIsNEJBQTRCLHNCQUFzQjtBQUNsRDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUUsVUFBVTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixRQUFRLGdCQUFnQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwwQkFBMEI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLENBQUM7QUFDZTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDL0ZBO0FBQUE7QUFBQTtBQUErQjtBQUNVO0FBQ3pDLHNCQUFzQixtQkFBTyxDQUFDLDRFQUFpQztBQUMvRCx1QkFBdUIsbUJBQU8sQ0FBQyw4RUFBa0M7QUFDakU7QUFDQTtBQUNBLGVBQWUsa0RBQUk7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELHVEQUF1RCxjQUFjLEVBQUU7QUFDdkUsdURBQXVELGNBQWMsRUFBRTtBQUN2RSwyREFBMkQsNEJBQTRCLEVBQUU7QUFDekYsb0RBQW9ELHlCQUF5QixFQUFFO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0Msd0RBQVE7QUFDaEQsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgUmVuZGVyZXIsIHsgRFJBV0lOR19DT05TVCB9IGZyb20gXCIuLi9SZW5kZXIvUmVuZGVyZXJcIjtcclxuaW1wb3J0IEdhbWVPYmplY3QgZnJvbSBcIi4vT2JqZWN0L0dhbWVPYmplY3RcIjtcclxuaW1wb3J0IFRhbmtPYmplY3QgZnJvbSBcIi4vT2JqZWN0L1RhbmtPYmplY3RcIjtcclxuaW1wb3J0IHsgZ2V0VG90YWxPZlRhbmtHcm91cCB9IGZyb20gXCIuL0xldmVsL0lMZXZlbFwiO1xyXG5pbXBvcnQgRURpcmVjdGlvbiBmcm9tIFwiLi4vVXRpbHMvRURpcmVjdGlvblwiO1xyXG5pbXBvcnQgeyBCbG9ja0NvbGxpc2lvblRlc3QsIE9iamVjdENvbGxpc2lvblRlc3QsIFJlY3RhbmdsZUNvbGxpc2lvblRlc3QgfSBmcm9tIFwiLi4vVXRpbHMvQ29sbGlzaW9uVGVzdFwiO1xyXG5pbXBvcnQgU1BSVElFX0RFRiBmcm9tIFwiLi4vUmVuZGVyL1Nwcml0ZS9TcHJpdGVEZWZpbml0aW9uXCI7XHJcbmltcG9ydCBBbmltYXRpb25PYmplY3QgZnJvbSBcIi4vT2JqZWN0L0FuaW1hdGlvbk9iamVjdFwiO1xyXG5pbXBvcnQgeyBBbmltYXRpb25EZWZhdWx0cyB9IGZyb20gXCIuL09iamVjdC9FbnVtL0VBbmltYXRpb25UeXBlXCI7XHJcbmltcG9ydCBCbG9ja09iamVjdCBmcm9tIFwiLi9PYmplY3QvQmxvY2tPYmplY3RcIjtcclxuaW1wb3J0IHsgRW5lbXlUeXBlIH0gZnJvbSBcIi4vT2JqZWN0L0VudW0vRVRhbmtUeXBlXCI7XHJcbmltcG9ydCB7IGdldFNwcml0ZURhdGEsIGdldE9iamVjdFNpemUgfSBmcm9tIFwiLi4vUmVuZGVyL1Nwcml0ZS9TcHJpdGVEYXRhXCI7XHJcbmltcG9ydCBEZWZhdWx0TGV2ZWxzIGZyb20gXCIuL0xldmVsL0RlZmF1bHRMZXZlbHMvRGVmYXVsdExldmVsc1wiO1xyXG5pbXBvcnQgSW5wdXRNYW5hZ2VyIGZyb20gXCIuL0lucHV0TWFuYWdlci9JbnB1dE1hbmFnZXJcIjtcclxuaW1wb3J0IHsgZ2V0UmFuZG9tUmFuZ2UsIGdldFJhbmRvbUVudW0sIGRlZXBDbG9uZSB9IGZyb20gXCIuLi9VdGlscy9VdGlsc1wiO1xyXG5pbXBvcnQgVGFua0FJT0JqZWN0IGZyb20gXCIuL09iamVjdC9UYW5rQUlPYmplY3RcIjtcclxuaW1wb3J0IEVJdGVtVHlwZSBmcm9tIFwiLi9PYmplY3QvRW51bS9FSXRlbVR5cGVcIjtcclxuaW1wb3J0IEl0ZW1PYmplY3QsIHsgSVRFTV9XQVRDSF9USU1FIH0gZnJvbSBcIi4vT2JqZWN0L0l0ZW1PYmplY3RcIjtcclxuZXhwb3J0IHZhciBNQUlOX1RBTktfSUQgPSAnTUFJTic7XHJcbmV4cG9ydCB2YXIgTUFYSU1VTV9UQU5LUyA9IDQ7XHJcbmV4cG9ydCB2YXIgVEFOS19TUEFXTl9ERUxBWSA9IDI1MDA7XHJcbmV4cG9ydCB2YXIgVEFOS19TUEFXTl9QT0lOVCA9IHtcclxuICAgIFBMQVlFUl9UQU5LOiBbXHJcbiAgICAgICAgeyB4OiA0LCB5OiAxMiB9LFxyXG4gICAgICAgIHsgeDogOCwgeTogMTIgfVxyXG4gICAgXSxcclxuICAgIEVORU1ZX1RBTks6IFtcclxuICAgICAgICB7IHg6IDAsIHk6IDAgfSxcclxuICAgICAgICB7IHg6IDYsIHk6IDAgfSxcclxuICAgICAgICB7IHg6IDEyLCB5OiAwIH1cclxuICAgIF1cclxufTtcclxudmFyIEdhbWUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBHYW1lKHNjcmVlbiwgc3ByaXRlX21haW5fc3JjLCBzcHJpdGVfdGl0bGVfc3JjLCBkZWJ1Zykge1xyXG4gICAgICAgIHRoaXMuZGVidWcgPSBkZWJ1ZztcclxuICAgICAgICB0aGlzLl9vYmplY3RzID0gW107XHJcbiAgICAgICAgdGhpcy5fbGFzdFNwYXduID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgdGhpcy5fcGF1c2UgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9lbmVteVBhdXNlID0ge1xyXG4gICAgICAgICAgICBleHBpcmVUaW1lOiAwLFxyXG4gICAgICAgICAgICBwYXVzZTogZmFsc2VcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyID0gbmV3IFJlbmRlcmVyKHRoaXMsIHNjcmVlbiwgc3ByaXRlX21haW5fc3JjLCBzcHJpdGVfdGl0bGVfc3JjKTtcclxuICAgICAgICB0aGlzLl9pbnB1dE1hbmFnZXIgPSBuZXcgSW5wdXRNYW5hZ2VyKHRoaXMpO1xyXG4gICAgICAgIHNjcmVlbi5mb2N1cygpO1xyXG4gICAgICAgIHRoaXMuc2hvd1RpdGxlKCk7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoR2FtZS5wcm90b3R5cGUsIFwibWFpblRhbmtcIiwge1xyXG4gICAgICAgIC8vI3JlZ2lvbiBnZXR0ZXIgYW5kIHNldHRlclxyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgZm91bmQgPSB0aGlzLmZpbmRPYmplY3RCeUlkKE1BSU5fVEFOS19JRCk7XHJcbiAgICAgICAgICAgIGlmIChmb3VuZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZm91bmRbMF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHYW1lLnByb3RvdHlwZSwgXCJvYmplY3RzXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX29iamVjdHM7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEdhbWUucHJvdG90eXBlLCBcInBhdXNlXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3BhdXNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAocGF1c2UpIHtcclxuICAgICAgICAgICAgdGhpcy5fcGF1c2UgPSBwYXVzZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoR2FtZS5wcm90b3R5cGUsIFwiZW5lbXlQYXVzZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9lbmVteVBhdXNlLnBhdXNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHYW1lLnByb3RvdHlwZSwgXCJlbmVteVBhdXNlRXhwaXJlXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2VuZW15UGF1c2UuZXhwaXJlVGltZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoR2FtZS5wcm90b3R5cGUsIFwia2V5U3RhdGVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW5wdXRNYW5hZ2VyLmtleVN0YXRlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHYW1lLnByb3RvdHlwZSwgXCJnYW1lRGF0YVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9nYW1lRGF0YTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoR2FtZS5wcm90b3R5cGUsIFwiY3VycmVudE1lbnVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudE1lbnU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEdhbWUucHJvdG90eXBlLCBcImN1cnNvckluZGV4XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lucHV0TWFuYWdlci5jdXJzb3JJbmRleDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICAvLyNlbmRyZWdpb25cclxuICAgIC8vI3JlZ2lvbiBwdWJsaWMgbWV0aG9kc1xyXG4gICAgLy8jcmVnaW9uIGRlYnVnIG1ldGhvZHNcclxuICAgIEdhbWUucHJvdG90eXBlLmxvZyA9IGZ1bmN0aW9uIChtc2cpIHtcclxuICAgICAgICBpZiAodGhpcy5kZWJ1Zykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIltcIiArIHBlcmZvcm1hbmNlLm5vdygpICsgXCJdIFwiICsgbXNnKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLy8jZW5kcmVnaW9uXHJcbiAgICAvLyNyZWdpb24gZ2FtZSBvYmplY3QgbWV0aG9kc1xyXG4gICAgR2FtZS5wcm90b3R5cGUuaW5zZXJ0T2JqZWN0ID0gZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgICAgIHRoaXMuX29iamVjdHMucHVzaChvYmplY3QpO1xyXG4gICAgICAgIHRoaXMuc29ydE9iamVjdCgpO1xyXG4gICAgfTtcclxuICAgIEdhbWUucHJvdG90eXBlLnJlbW92ZU9iamVjdCA9IGZ1bmN0aW9uIChvYmplY3QpIHtcclxuICAgICAgICB2YXIgaWR4ID0gdGhpcy5fb2JqZWN0cy5pbmRleE9mKG9iamVjdCk7XHJcbiAgICAgICAgdGhpcy5fb2JqZWN0cy5zcGxpY2UoaWR4LCAxKTtcclxuICAgICAgICB0aGlzLnNvcnRPYmplY3QoKTtcclxuICAgIH07XHJcbiAgICBHYW1lLnByb3RvdHlwZS5zb3J0T2JqZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9nYW1lRGF0YSA9PSBudWxsIHx8IHRoaXMuX29iamVjdHMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX29iamVjdHMuc29ydChmdW5jdGlvbiAob2JqMSwgb2JqMikge1xyXG4gICAgICAgICAgICB2YXIgemluZGV4MSA9IFJlbmRlcmVyLmdldE9iamVjdFpJbmRleChvYmoxKTtcclxuICAgICAgICAgICAgdmFyIHppbmRleDIgPSBSZW5kZXJlci5nZXRPYmplY3RaSW5kZXgob2JqMik7XHJcbiAgICAgICAgICAgIHJldHVybiB6aW5kZXgxIC0gemluZGV4MjtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBHYW1lLnByb3RvdHlwZS5maW5kT2JqZWN0QnlJZCA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9vYmplY3RzLmZpbHRlcihmdW5jdGlvbiAob2JqZWN0KSB7IHJldHVybiBvYmplY3QuaWQgPT09IGlkOyB9KTtcclxuICAgIH07XHJcbiAgICBHYW1lLnByb3RvdHlwZS5jb2xsaXNpb25UZXN0ID0gZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgICAgIHZhciBmb3VuZCA9IFtdO1xyXG4gICAgICAgIGlmICh0aGlzLl9nYW1lRGF0YSA9PSBudWxsIHx8IHRoaXMuX29iamVjdHMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZm91bmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX29iamVjdHMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICBpZiAoaXRlbSA9PSBvYmplY3QpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXRlbS5vYmplY3RUeXBlID09PSBcIkFOSU1BVElPTlwiIC8qIEFOSU1BVElPTiAqLykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGl0ZW0ub2JqZWN0VHlwZSA9PT0gXCJCTE9DS1wiIC8qIEJMT0NLICovKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYmxvY2tUeXBlID0gaXRlbS5ibG9ja1R5cGU7XHJcbiAgICAgICAgICAgICAgICBpZiAoKG9iamVjdC5vYmplY3RUeXBlID09PSBcIlRBTktcIiAvKiBUQU5LICovIHx8IG9iamVjdC5vYmplY3RUeXBlID09PSBcIkJVTExFVFwiIC8qIEJVTExFVCAqLykgJiYgYmxvY2tUeXBlID09PSBcIkJVU0hcIiAvKiBCVVNIICovKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC5vYmplY3RUeXBlID09PSBcIkJVTExFVFwiIC8qIEJVTExFVCAqLyAmJiBibG9ja1R5cGUgPT09IFwiV0FURVJcIiAvKiBXQVRFUiAqLykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChpdGVtLm9iamVjdFR5cGUgPT09IFwiVEFOS1wiIC8qIFRBTksgKi8pIHtcclxuICAgICAgICAgICAgICAgIGlmIChvYmplY3Qub2JqZWN0VHlwZSA9PT0gXCJCVUxMRVRcIiAvKiBCVUxMRVQgKi8pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5pZCA9PT0gb2JqZWN0LnBhcmVudElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0udmlzaWJsZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChpdGVtLm9iamVjdFR5cGUgPT09IFwiQlVMTEVUXCIgLyogQlVMTEVUICovKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0Lm9iamVjdFR5cGUgPT09IFwiVEFOS1wiIC8qIFRBTksgKi8pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoaXRlbS5vYmplY3RUeXBlID09PSBcIklURU1cIiAvKiBJVEVNICovKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0Lm9iamVjdFR5cGUgPT09IFwiQlVMTEVUXCIgLyogQlVMTEVUICovKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciB0ZXN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLm9iamVjdFR5cGUgPT09IFwiQkxPQ0tcIiAvKiBCTE9DSyAqLykge1xyXG4gICAgICAgICAgICAgICAgdGVzdCA9IEJsb2NrQ29sbGlzaW9uVGVzdChpdGVtLCBvYmplY3QpLmxlbmd0aCA+IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0ZXN0ID0gT2JqZWN0Q29sbGlzaW9uVGVzdChvYmplY3QsIGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0ZXN0ID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBmb3VuZC5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGZvdW5kO1xyXG4gICAgfTtcclxuICAgIEdhbWUucHJvdG90eXBlLnN0YXJ0QW5pbWF0aW9uID0gZnVuY3Rpb24gKHRhcmdldCwgYW5pbWF0aW9uVHlwZSwgYW5pbWF0aW9uVmFsdWUsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdmFyIGFuaW1hdGlvblBvaW50O1xyXG4gICAgICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBHYW1lT2JqZWN0KSB7XHJcbiAgICAgICAgICAgIHZhciBvYmplY3QgPSB0YXJnZXQ7XHJcbiAgICAgICAgICAgIHZhciBzaXplID0gZ2V0U3ByaXRlRGF0YShvYmplY3QpLnNpemU7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvblBvaW50ID0ge1xyXG4gICAgICAgICAgICAgICAgeDogb2JqZWN0LnBvc2l0aW9uLnggKyBzaXplLndpZHRoIC8gMixcclxuICAgICAgICAgICAgICAgIHk6IG9iamVjdC5wb3NpdGlvbi55ICsgc2l6ZS5oZWlnaHQgLyAyXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBhbmltYXRpb25Qb2ludCA9IHRhcmdldDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFuaW1hdGlvblZhbHVlID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBhbmltYXRpb25WYWx1ZSA9IEFuaW1hdGlvbkRlZmF1bHRzW2FuaW1hdGlvblR5cGVdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYW5pbWF0aW9uID0gbmV3IEFuaW1hdGlvbk9iamVjdCh0aGlzLCBudWxsLCBhbmltYXRpb25UeXBlLCBhbmltYXRpb25Qb2ludCwgYW5pbWF0aW9uVmFsdWUuZHVyYXRpb24sIGFuaW1hdGlvblZhbHVlLmZyYW1lUmF0ZSwgYW5pbWF0aW9uVmFsdWUubG9vcCwgY2FsbGJhY2spO1xyXG4gICAgICAgIHRoaXMuaW5zZXJ0T2JqZWN0KGFuaW1hdGlvbik7XHJcbiAgICB9O1xyXG4gICAgLy8jcmVnaW9uIHJlbmRlcmVyIHBvcnRpbmcgbWV0aG9kc1xyXG4gICAgLyoqXHJcbiAgICAgKiBUZXN0IG9iamVjdCBpcyB2aXNpYmxlIChQb3J0IG9mIFJlbmRlcmVyLnRlc3RWaXNpYmlsaXR5KVxyXG4gICAgICogQHBhcmFtIG9iamVjdCBvYmplY3QgZm9yIHRlc3RcclxuICAgICAqIEBwYXJhbSBzcHJpdGUgb2JqZWN0J3Mgc3ByaXRlIGRhdGEgZm9yIHNpemVcclxuICAgICAqL1xyXG4gICAgR2FtZS5wcm90b3R5cGUudGVzdFZpc2liaWxpdHkgPSBmdW5jdGlvbiAob2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlcmVyLm9iamVjdFZpc2libGVUZXN0KG9iamVjdCk7XHJcbiAgICB9O1xyXG4gICAgLy8jZW5kcmVnaW9uXHJcbiAgICAvLyNlbmRyZWdpb25cclxuICAgIEdhbWUucHJvdG90eXBlLm5ld0dhbWUgPSBmdW5jdGlvbiAocGxheWVyQ291bnQsIGxldmVsSWQpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudE1lbnUgPSBcIkdBTUVcIiAvKiBHQU1FICovO1xyXG4gICAgICAgIHRoaXMuX29iamVjdHMgPSBbXTtcclxuICAgICAgICB0aGlzLl9nYW1lRGF0YSA9IHt9O1xyXG4gICAgICAgIHZhciBnYW1lZGF0YSA9IHRoaXMuX2dhbWVEYXRhO1xyXG4gICAgICAgIHZhciBwbGF5ZXJEYXRhID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwbGF5ZXJDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHBsYXllckRhdGEucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBsaWZlOiA1LFxyXG4gICAgICAgICAgICAgICAgc2NvcmU6IDAsXHJcbiAgICAgICAgICAgICAgICBkZXN0cm95ZWRUYW5rOiB7fVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2FtZWRhdGEuZ2FtZVR5cGUgPSAwIC8qIFBWRSAqLztcclxuICAgICAgICBnYW1lZGF0YS5wbGF5ZXJEYXRhID0gcGxheWVyRGF0YTtcclxuICAgICAgICBnYW1lZGF0YS5nYW1lT3ZlciA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChsZXZlbElkICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLm5ld0xldmVsKGxldmVsSWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiAoKF9hID0gZ2FtZWRhdGEubGV2ZWxEYXRhKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubGV2ZWxJZCkgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV3TGV2ZWwoZ2FtZWRhdGEubGV2ZWxEYXRhLmxldmVsSWQgKyAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV3TGV2ZWwoMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgR2FtZS5wcm90b3R5cGUubmV3TGV2ZWwgPSBmdW5jdGlvbiAobGV2ZWxJZCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudE1lbnUgPSBcIlNUQUdFXCIgLyogU1RBR0UgKi87XHJcbiAgICAgICAgdGhpcy5fb2JqZWN0cyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2dhbWVEYXRhLmxldmVsRGF0YSA9IGRlZXBDbG9uZShEZWZhdWx0TGV2ZWxzLmZpbmQoZnVuY3Rpb24gKGxldmVsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBsZXZlbC5sZXZlbElkID09PSBsZXZlbElkO1xyXG4gICAgICAgIH0pKTtcclxuICAgICAgICB0aGlzLnNob3dDdXJ0YWluKCk7XHJcbiAgICAgICAgdGhpcy5zcGF3blRhbmsoXCJQTEFZRVJfVEFOS1wiIC8qIFBMQVlFUl9UQU5LICovLCB0cnVlLCAwKTtcclxuICAgICAgICBpZiAodGhpcy5nYW1lRGF0YS5wbGF5ZXJEYXRhLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5zcGF3blRhbmsoXCJQTEFZRVJfVEFOS1wiIC8qIFBMQVlFUl9UQU5LICovLCB0cnVlLCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZ2FtZURhdGEubGV2ZWxEYXRhLmJsb2Nrcy5mb3JFYWNoKGZ1bmN0aW9uIChibG9jaykge1xyXG4gICAgICAgICAgICBfdGhpcy5pbnNlcnRPYmplY3QobmV3IEJsb2NrT2JqZWN0KF90aGlzLCBibG9jay50eXBlLCB7XHJcbiAgICAgICAgICAgICAgICB4OiBEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lLmxlZnQgKyBibG9jay5wb3NpdGlvbi54ICogMzIsXHJcbiAgICAgICAgICAgICAgICB5OiBEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lLnRvcCArIGJsb2NrLnBvc2l0aW9uLnkgKiAzMlxyXG4gICAgICAgICAgICB9LCBibG9jay5ibG9ja1N0YXRlKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgR2FtZS5wcm90b3R5cGUuc2hvd0N1cnRhaW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLl9jdXJyZW50TWVudSA9IFwiU1RBR0VcIiAvKiBTVEFHRSAqLztcclxuICAgICAgICB0aGlzLl9vYmplY3RzID0gW107XHJcbiAgICAgICAgdGhpcy5zdGFydEFuaW1hdGlvbih7IHg6IDAsIHk6IDAgfSwgXCJDVVJUQUlOXCIgLyogQ1VSVEFJTiAqLywgbnVsbCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBfdGhpcy5fY3VycmVudE1lbnUgPSBcIkdBTUVcIiAvKiBHQU1FICovO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEdhbWUucHJvdG90eXBlLnNldFBhdXNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuX3BhdXNlID0gdHJ1ZTtcclxuICAgICAgICB2YXIgRlJBTUUgPSBEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lO1xyXG4gICAgICAgIHZhciBTQ1JFRU4gPSBEUkFXSU5HX0NPTlNULnNpemVzLnNjcmVlbjtcclxuICAgICAgICB0aGlzLnN0YXJ0QW5pbWF0aW9uKHtcclxuICAgICAgICAgICAgeDogRlJBTUUubGVmdCArIFNDUkVFTi53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgIHk6IChGUkFNRS50b3AgKyBGUkFNRS5ib3R0b20gKyBTQ1JFRU4uaGVpZ2h0KSAvIDIgKyBTUFJUSUVfREVGLkFOSU1BVElPTi5QQVVTRVswXS5zaXplLmhlaWdodCAvIDJcclxuICAgICAgICB9LCBcIlBBVVNFXCIgLyogUEFVU0UgKi8pO1xyXG4gICAgfTtcclxuICAgIEdhbWUucHJvdG90eXBlLnNldEVuZW15UGF1c2UgPSBmdW5jdGlvbiAocGF1c2UpIHtcclxuICAgICAgICB0aGlzLl9lbmVteVBhdXNlLnBhdXNlID0gcGF1c2U7XHJcbiAgICAgICAgaWYgKHBhdXNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VuZW15UGF1c2UuZXhwaXJlVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpICsgSVRFTV9XQVRDSF9USU1FO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBHYW1lLnByb3RvdHlwZS5nYW1lb3ZlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmICh0aGlzLmdhbWVEYXRhLmdhbWVPdmVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5nYW1lRGF0YS5nYW1lT3ZlciA9IHRydWU7XHJcbiAgICAgICAgdmFyIEZSQU1FID0gRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZTtcclxuICAgICAgICB2YXIgU0NSRUVOID0gRFJBV0lOR19DT05TVC5zaXplcy5zY3JlZW47XHJcbiAgICAgICAgdGhpcy5zdGFydEFuaW1hdGlvbih7XHJcbiAgICAgICAgICAgIHg6IEZSQU1FLmxlZnQgKyBTQ1JFRU4ud2lkdGggLyAyLFxyXG4gICAgICAgICAgICB5OiBGUkFNRS50b3AgKyBGUkFNRS5ib3R0b20gKyBTQ1JFRU4uaGVpZ2h0XHJcbiAgICAgICAgfSwgXCJHQU1FT1ZFUlwiIC8qIEdBTUVPVkVSICovLCBudWxsLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIF90aGlzLnNob3dSZXN1bHRTY3JlZW4oKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBHYW1lLnByb3RvdHlwZS5zaG93UmVzdWx0U2NyZWVuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRNZW51ID0gXCJSRVNVTFRcIiAvKiBSRVNVTFQgKi87XHJcbiAgICAgICAgdGhpcy5fb2JqZWN0cyA9IFtdO1xyXG4gICAgfTtcclxuICAgIEdhbWUucHJvdG90eXBlLnNob3dUaXRsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRNZW51ID0gXCJNQUlOXCIgLyogTUFJTiAqLztcclxuICAgICAgICB0aGlzLl9vYmplY3RzID0gW107XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIudGl0bGVTaG93biA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2lucHV0TWFuYWdlci5pbml0aWFsaXplKCk7XHJcbiAgICAgICAgdmFyIEZSQU1FID0gRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZTtcclxuICAgICAgICB2YXIgU0NSRUVOID0gRFJBV0lOR19DT05TVC5zaXplcy5zY3JlZW47XHJcbiAgICAgICAgdGhpcy5zdGFydEFuaW1hdGlvbih7XHJcbiAgICAgICAgICAgIHg6IChGUkFNRS5sZWZ0ICsgU0NSRUVOLndpZHRoICsgRlJBTUUucmlnaHQpIC8gMixcclxuICAgICAgICAgICAgeTogKEZSQU1FLnRvcCArIFNDUkVFTi53aWR0aCArIEZSQU1FLmJvdHRvbSkgKiAxLjVcclxuICAgICAgICB9LCBcIlRJVExFXCIgLyogVElUTEUgKi8sIG51bGwsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgX3RoaXMuc3RhcnRBbmltYXRpb24oe1xyXG4gICAgICAgICAgICAgICAgeDogMTI5ICsgMTYsXHJcbiAgICAgICAgICAgICAgICB5OiAyNjUgKyBfdGhpcy5jdXJzb3JJbmRleCAqIDMyICsgMTZcclxuICAgICAgICAgICAgfSwgXCJDVVJTT1JcIiAvKiBDVVJTT1IgKi8pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8vI2VuZHJlZ2lvblxyXG4gICAgLy8jcmVnaW9uIHByaXZhdGUgbWV0aG9kc1xyXG4gICAgR2FtZS5wcm90b3R5cGUuc3Bhd25UYW5rID0gZnVuY3Rpb24gKHRhbmtUeXBlLCBmcmVlU3Bhd24sIHBsYXllckluZGV4KSB7XHJcbiAgICAgICAgaWYgKGZyZWVTcGF3biA9PT0gdm9pZCAwKSB7IGZyZWVTcGF3biA9IGZhbHNlOyB9XHJcbiAgICAgICAgaWYgKHRhbmtUeXBlID09PSBcIlBMQVlFUl9UQU5LXCIgLyogUExBWUVSX1RBTksgKi8pIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2dhbWVEYXRhLnBsYXllckRhdGFbcGxheWVySW5kZXhdLmxpZmUgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciB0YW5rQ29sb3IgPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIGlmIChwbGF5ZXJJbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGFua0NvbG9yID0gXCJZRUxMT1dcIiAvKiBZRUxMT1cgKi87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0YW5rQ29sb3IgPSBcIkdSRUVOXCIgLyogR1JFRU4gKi87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0gVEFOS19TUEFXTl9QT0lOVFt0YW5rVHlwZV1bcGxheWVySW5kZXhdO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVBsYXllclRhbmsoe1xyXG4gICAgICAgICAgICAgICAgeDogRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS5sZWZ0ICsgcG9zaXRpb24ueCAqIGdldE9iamVjdFNpemUoXCJUQU5LXCIgLyogVEFOSyAqLykud2lkdGgsXHJcbiAgICAgICAgICAgICAgICB5OiBEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lLnRvcCArIHBvc2l0aW9uLnkgKiBnZXRPYmplY3RTaXplKFwiVEFOS1wiIC8qIFRBTksgKi8pLmhlaWdodCxcclxuICAgICAgICAgICAgfSwgRURpcmVjdGlvbi51cCwgdGFua0NvbG9yLCAwKTtcclxuICAgICAgICAgICAgaWYgKGZyZWVTcGF3biA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2dhbWVEYXRhLnBsYXllckRhdGFbcGxheWVySW5kZXhdLmxpZmUtLTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0YW5rVHlwZSA9PT0gXCJFTkVNWV9UQU5LXCIgLyogRU5FTVlfVEFOSyAqLykge1xyXG4gICAgICAgICAgICB2YXIgbm93ID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgICAgIGlmIChub3cgLSB0aGlzLl9sYXN0U3Bhd24gPiBUQU5LX1NQQVdOX0RFTEFZKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sYXN0U3Bhd24gPSBub3c7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGFua3MgPSB0aGlzLl9vYmplY3RzLmZpbHRlcihmdW5jdGlvbiAoeCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB4Lm9iamVjdFR5cGUgPT09IFwiVEFOS1wiIC8qIFRBTksgKi8gJiYgeC50YW5rVHlwZSA9PT0gXCJFTkVNWV9UQU5LXCIgLyogRU5FTVlfVEFOSyAqLztcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRhbmtzLmxlbmd0aCA+PSBNQVhJTVVNX1RBTktTKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVFbmVteVRhbmsoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBHYW1lLnByb3RvdHlwZS5zcGF3bkl0ZW0gPSBmdW5jdGlvbiAoaXRlbVR5cGUsIHBvc2l0aW9uKSB7XHJcbiAgICAgICAgaWYgKGl0ZW1UeXBlID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBpdGVtVHlwZSA9IGdldFJhbmRvbUVudW0oRUl0ZW1UeXBlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBvc2l0aW9uID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBwb3NpdGlvbiA9IHRoaXMuX3JlbmRlcmVyLnJhbmRvbVBvaW50KGdldE9iamVjdFNpemUoXCJJVEVNXCIgLyogSVRFTSAqLykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmluc2VydE9iamVjdChuZXcgSXRlbU9iamVjdCh0aGlzLCBpdGVtVHlwZSwgcG9zaXRpb24pKTtcclxuICAgIH07XHJcbiAgICBHYW1lLnByb3RvdHlwZS5jcmVhdGVQbGF5ZXJUYW5rID0gZnVuY3Rpb24gKHBvc2l0aW9uLCBkaXJlY3Rpb24sIHRhbmtDb2xvciwgdGFua0xldmVsKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubWFpblRhbmspIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVPYmplY3QodGhpcy5tYWluVGFuayk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW5zZXJ0T2JqZWN0KG5ldyBUYW5rT2JqZWN0KHRoaXMsIFwiUExBWUVSX1RBTktcIiAvKiBQTEFZRVJfVEFOSyAqLywgcG9zaXRpb24sIGRpcmVjdGlvbiwgdGFua0NvbG9yLCB0YW5rTGV2ZWwsIE1BSU5fVEFOS19JRCkpO1xyXG4gICAgfTtcclxuICAgIEdhbWUucHJvdG90eXBlLmNyZWF0ZUVuZW15VGFuayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdGFua1NpemUgPSBnZXRPYmplY3RTaXplKFwiVEFOS1wiIC8qIFRBTksgKi8pO1xyXG4gICAgICAgIHZhciBzcGF3blBvaW50cyA9IFRBTktfU1BBV05fUE9JTlQuRU5FTVlfVEFOSztcclxuICAgICAgICB2YXIgYXZhaWxhYmxlUG9pbnRzID0gW107XHJcbiAgICAgICAgdmFyIG9iamVjdHMgPSB0aGlzLm9iamVjdHMuZmlsdGVyKGZ1bmN0aW9uIChvYmplY3QpIHsgcmV0dXJuIG9iamVjdC5vYmplY3RUeXBlID09PSBcIlRBTktcIiAvKiBUQU5LICovOyB9KTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNwYXduUG9pbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBzdWNjZXNzID0gdHJ1ZTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBvYmplY3RzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoUmVjdGFuZ2xlQ29sbGlzaW9uVGVzdCh0aGlzLnRyYW5zbGF0ZUJsb2NrUG9zaXRpb24oc3Bhd25Qb2ludHNbaV0pLCB0YW5rU2l6ZSwgb2JqZWN0c1tqXS5wb3NpdGlvbiwgdGFua1NpemUpID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgIGF2YWlsYWJsZVBvaW50cy5wdXNoKHNwYXduUG9pbnRzW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYXZhaWxhYmxlUG9pbnRzLmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xhc3RTcGF3biA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBpZHggPSBnZXRSYW5kb21SYW5nZSgwLCBhdmFpbGFibGVQb2ludHMubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gdGhpcy50cmFuc2xhdGVCbG9ja1Bvc2l0aW9uKGF2YWlsYWJsZVBvaW50c1tpZHhdKTtcclxuICAgICAgICB2YXIgbmV4dCA9IHRoaXMubmV4dFRhbmsoKTtcclxuICAgICAgICBpZiAobmV4dCA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmluc2VydE9iamVjdChuZXcgVGFua0FJT0JqZWN0KHRoaXMsIG5leHQudHlwZSwgbmV4dC5pdGVtLCBwb3NpdGlvbiwgRURpcmVjdGlvbi5kb3duKSk7XHJcbiAgICB9O1xyXG4gICAgR2FtZS5wcm90b3R5cGUudHJhbnNsYXRlQmxvY2tQb3NpdGlvbiA9IGZ1bmN0aW9uIChwb2ludCkge1xyXG4gICAgICAgIHZhciBibG9ja1NpemUgPSBnZXRPYmplY3RTaXplKFwiQkxPQ0tcIiAvKiBCTE9DSyAqLyk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgeDogRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS5sZWZ0ICsgcG9pbnQueCAqIGJsb2NrU2l6ZS53aWR0aCxcclxuICAgICAgICAgICAgeTogRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS50b3AgKyBwb2ludC55ICogYmxvY2tTaXplLmhlaWdodFxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgR2FtZS5wcm90b3R5cGUubmV4dFRhbmsgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgdGFua0dyb3VwcyA9IHRoaXMuX2dhbWVEYXRhLmxldmVsRGF0YS50YW5rcztcclxuICAgICAgICB2YXIgdHlwZTtcclxuICAgICAgICB2YXIgc3VtID0gMDtcclxuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XHJcbiAgICAgICAgICAgIHZhciB0b3RhbCA9IGdldFRvdGFsT2ZUYW5rR3JvdXAodGFua0dyb3Vwc1tpXSk7XHJcbiAgICAgICAgICAgIGlmICh0b3RhbCA+IDAgJiYgdHlwZSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBhdmFpbGFibGVUeXBlc18xID0gW107XHJcbiAgICAgICAgICAgICAgICBPYmplY3QudmFsdWVzKEVuZW15VHlwZSkuZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5fZ2FtZURhdGEubGV2ZWxEYXRhLnRhbmtzW2ldW3R5cGVdID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdmFpbGFibGVUeXBlc18xLnB1c2godHlwZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0eXBlID0gYXZhaWxhYmxlVHlwZXNfMVtnZXRSYW5kb21SYW5nZSgwLCBhdmFpbGFibGVUeXBlc18xLmxlbmd0aCAtIDEpXTtcclxuICAgICAgICAgICAgICAgIHRoaXNfMS5fZ2FtZURhdGEubGV2ZWxEYXRhLnRhbmtzW2ldW3R5cGVdLS07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3VtICs9IHRvdGFsO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIHRoaXNfMSA9IHRoaXM7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YW5rR3JvdXBzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIF9sb29wXzEoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdW0gPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiB0eXBlLFxyXG4gICAgICAgICAgICAgICAgaXRlbTogKDIwIC0gc3VtKSAlIDUgPT09IDAgJiYgMjAgLSBzdW0gPiAwXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBHYW1lO1xyXG59KCkpO1xyXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xyXG4iLCJpbXBvcnQgRURpcmVjdGlvbiBmcm9tIFwiLi4vLi4vVXRpbHMvRURpcmVjdGlvblwiO1xyXG5leHBvcnQgZnVuY3Rpb24gRUtleXNUb0VEaXJlY3Rpb24oa2V5cykge1xyXG4gICAgc3dpdGNoIChrZXlzKSB7XHJcbiAgICAgICAgY2FzZSBcIkFycm93VXBcIiAvKiBhcnJvd191cCAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIEVEaXJlY3Rpb24udXA7XHJcbiAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIiAvKiBhcnJvd19yaWdodCAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIEVEaXJlY3Rpb24ucmlnaHQ7XHJcbiAgICAgICAgY2FzZSBcIkFycm93RG93blwiIC8qIGFycm93X2Rvd24gKi86XHJcbiAgICAgICAgICAgIHJldHVybiBFRGlyZWN0aW9uLmRvd247XHJcbiAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiIC8qIGFycm93X2xlZnQgKi86XHJcbiAgICAgICAgICAgIHJldHVybiBFRGlyZWN0aW9uLmxlZnQ7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRUtleXNUb0VEaXJlY3Rpb24gfSBmcm9tIFwiLi9FS2V5c1wiO1xyXG52YXIgSW5wdXRNYW5hZ2VyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gSW5wdXRNYW5hZ2VyKGdhbWUpIHtcclxuICAgICAgICB0aGlzLl9nYW1lID0gZ2FtZTtcclxuICAgICAgICB0aGlzLl9rZXlFdmVudHMgPSB7fTtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcclxuICAgIH1cclxuICAgIElucHV0TWFuYWdlci5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLl9rZXlTdGF0ZSA9IHtcclxuICAgICAgICAgICAgQXJyb3dEb3duOiBmYWxzZSxcclxuICAgICAgICAgICAgQXJyb3dVcDogZmFsc2UsXHJcbiAgICAgICAgICAgIEFycm93UmlnaHQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBBcnJvd0xlZnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBFc2NhcGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBTcGFjZTogZmFsc2VcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX2N1cnNvckluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLnNldEV2ZW50cygpO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShJbnB1dE1hbmFnZXIucHJvdG90eXBlLCBcImtleVN0YXRlXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2tleVN0YXRlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShJbnB1dE1hbmFnZXIucHJvdG90eXBlLCBcImN1cnNvckluZGV4XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnNvckluZGV4O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIElucHV0TWFuYWdlci5wcm90b3R5cGUuc2V0RXZlbnRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHRoaXMuX2tleUV2ZW50cy5rZXlkb3duICE9IG51bGwpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX2tleUV2ZW50cy5rZXlkb3duKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2tleUV2ZW50cy5rZXl1cCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5fa2V5RXZlbnRzLmtleXVwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fa2V5RXZlbnRzLmtleWRvd24gPSBmdW5jdGlvbiAoZXYpIHtcclxuICAgICAgICAgICAgX3RoaXMua2V5RG93bkV2ZW50KGV2KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX2tleUV2ZW50cy5rZXl1cCA9IGZ1bmN0aW9uIChldikge1xyXG4gICAgICAgICAgICBfdGhpcy5rZXlVcEV2ZW50KGV2KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9rZXlFdmVudHMua2V5ZG93bik7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLl9rZXlFdmVudHMua2V5dXApO1xyXG4gICAgfTtcclxuICAgIElucHV0TWFuYWdlci5wcm90b3R5cGUucmVzZXRBcnJvd0lucHV0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuX2tleVN0YXRlLkFycm93VXAgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9rZXlTdGF0ZS5BcnJvd1JpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fa2V5U3RhdGUuQXJyb3dEb3duID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fa2V5U3RhdGUuQXJyb3dMZWZ0ID0gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgSW5wdXRNYW5hZ2VyLnByb3RvdHlwZS5rZXlEb3duRXZlbnQgPSBmdW5jdGlvbiAoZXYpIHtcclxuICAgICAgICB2YXIgbWFpblRhbmsgPSB0aGlzLl9nYW1lLm1haW5UYW5rO1xyXG4gICAgICAgIHZhciBtZW51ID0gdGhpcy5fZ2FtZS5jdXJyZW50TWVudTtcclxuICAgICAgICBpZiAobWVudSA9PT0gXCJHQU1FXCIgLyogR0FNRSAqLykge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGV2LmNvZGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJBcnJvd1VwXCIgLyogYXJyb3dfdXAgKi86XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dSaWdodFwiIC8qIGFycm93X3JpZ2h0ICovOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkFycm93RG93blwiIC8qIGFycm93X2Rvd24gKi86XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dMZWZ0XCIgLyogYXJyb3dfbGVmdCAqLzpcclxuICAgICAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYWluVGFuaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluVGFuay5kaXJlY3Rpb24gPSBFS2V5c1RvRURpcmVjdGlvbihldi5jb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldEFycm93SW5wdXQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9rZXlTdGF0ZVtldi5jb2RlXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiU3BhY2VcIiAvKiBzcGFjZWJhciAqLzpcclxuICAgICAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYWluVGFuayAmJiBtYWluVGFuay52aXNpYmxlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haW5UYW5rLmZpcmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5U3RhdGVbZXYuY29kZV0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkVzY2FwZVwiIC8qIGVzYyAqLzpcclxuICAgICAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2tleVN0YXRlW2V2LmNvZGVdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2dhbWUuZ2FtZURhdGEuZ2FtZU92ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2dhbWUucGF1c2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2dhbWUucGF1c2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2dhbWUucGF1c2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG1lbnUgPT09IFwiTUFJTlwiIC8qIE1BSU4gKi8pIHtcclxuICAgICAgICAgICAgc3dpdGNoIChldi5jb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dVcFwiIC8qIGFycm93X3VwICovOlxyXG4gICAgICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2dhbWUub2JqZWN0cy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jdXJzb3JJbmRleCAtIDEgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJzb3JJbmRleCA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJzb3JJbmRleC0tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkFycm93RG93blwiIC8qIGFycm93X2Rvd24gKi86XHJcbiAgICAgICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fZ2FtZS5vYmplY3RzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2N1cnNvckluZGV4ICsgMSA+IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2N1cnNvckluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2N1cnNvckluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiU3BhY2VcIiAvKiBzcGFjZWJhciAqLzpcclxuICAgICAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5fY3Vyc29ySW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ2FtZS5uZXdHYW1lKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIElucHV0TWFuYWdlci5wcm90b3R5cGUua2V5VXBFdmVudCA9IGZ1bmN0aW9uIChldikge1xyXG4gICAgICAgIHZhciBjb2RlID0gZXYuY29kZTtcclxuICAgICAgICB0aGlzLl9rZXlTdGF0ZVtjb2RlXSA9IGZhbHNlO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBJbnB1dE1hbmFnZXI7XHJcbn0oKSk7XHJcbmV4cG9ydCBkZWZhdWx0IElucHV0TWFuYWdlcjtcclxuIiwiaW1wb3J0IExldmVsMSBmcm9tIFwiLi9MZXZlbDFcIjtcclxuaW1wb3J0IExldmVsMiBmcm9tIFwiLi9MZXZlbDJcIjtcclxudmFyIERlZmF1bHRMZXZlbHMgPSBbXHJcbiAgICBMZXZlbDEsIExldmVsMlxyXG5dO1xyXG5leHBvcnQgZGVmYXVsdCBEZWZhdWx0TGV2ZWxzO1xyXG4iLCJpbXBvcnQgeyBCTE9DS19GVUxMLCBCTE9DS19IQUxGX0hULCBCTE9DS19IQUxGX0hCLCBCTE9DS19IQUxGX1ZSLCBCTE9DS19IQUxGX1ZMIH0gZnJvbSBcIi4vTGV2ZWxVdGlsc1wiO1xyXG52YXIgTGV2ZWwxID0ge1xyXG4gICAgbGV2ZWxJZDogMSxcclxuICAgIGxldmVsTmFtZTogJ0xFVkVMIDEnLFxyXG4gICAgYmxvY2tzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAxLCB5OiAxIH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMywgeTogMSB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDUsIHk6IDEgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA3LCB5OiAxIH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogOSwgeTogMSB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDExLCB5OiAxIH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMSwgeTogMiB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDMsIHk6IDIgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA1LCB5OiAyIH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNywgeTogMiB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDksIHk6IDIgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAxMSwgeTogMiB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDEsIHk6IDMgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAzLCB5OiAzIH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNSwgeTogMyB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDYsIHk6IDMgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJJUk9OXCIgLyogSVJPTiAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNywgeTogMyB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDksIHk6IDMgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAxMSwgeTogMyB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDEsIHk6IDQgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAzLCB5OiA0IH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNSwgeTogNCB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0hBTEZfSFQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDcsIHk6IDQgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19IQUxGX0hULFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA5LCB5OiA0IH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMTEsIHk6IDQgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAxLCB5OiA1IH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IVCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMywgeTogNSB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0hBTEZfSFQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDUsIHk6IDUgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19IQUxGX0hCLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA3LCB5OiA1IH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IQixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogOSwgeTogNSB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0hBTEZfSFQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDExLCB5OiA1IH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IVCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMCwgeTogNiB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0hBTEZfSEIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDIsIHk6IDYgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19IQUxGX0hCLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAzLCB5OiA2IH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IQixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNSwgeTogNiB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0hBTEZfSFQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDcsIHk6IDYgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19IQUxGX0hULFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA5LCB5OiA2IH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IQixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMTAsIHk6IDYgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19IQUxGX0hCLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAxMiwgeTogNiB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0hBTEZfSEIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDAsIHk6IDcgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJJUk9OXCIgLyogSVJPTiAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IVCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMiwgeTogNyB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0hBTEZfSFQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDMsIHk6IDcgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19IQUxGX0hULFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA1LCB5OiA3IH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IQixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNywgeTogNyB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0hBTEZfSEIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDksIHk6IDcgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19IQUxGX0hULFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAxMCwgeTogNyB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0hBTEZfSFQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDEyLCB5OiA3IH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiSVJPTlwiIC8qIElST04gKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0hBTEZfSFQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDEsIHk6IDggfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19IQUxGX0hCLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAzLCB5OiA4IH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IQixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNSwgeTogOCB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDYsIHk6IDggfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA3LCB5OiA4IH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogOSwgeTogOCB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0hBTEZfSEIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDExLCB5OiA4IH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IQixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMSwgeTogOSB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDMsIHk6IDkgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA1LCB5OiA5IH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNywgeTogOSB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDksIHk6IDkgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAxMSwgeTogOSB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDEsIHk6IDEwIH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMywgeTogMTAgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA1LCB5OiAxMCB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0hBTEZfSFQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDcsIHk6IDEwIH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IVCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogOSwgeTogMTAgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAxMSwgeTogMTAgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAxLCB5OiAxMSB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDMsIHk6IDExIH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNSwgeTogMTEgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiB7XHJcbiAgICAgICAgICAgICAgICBib3R0b21MZWZ0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGJvdHRvbVJpZ2h0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdG9wTGVmdDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB0b3BSaWdodDogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNiwgeTogMTEgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19IQUxGX0hCLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA3LCB5OiAxMSB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IHtcclxuICAgICAgICAgICAgICAgIGJvdHRvbUxlZnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBib3R0b21SaWdodDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB0b3BMZWZ0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHRvcFJpZ2h0OiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA5LCB5OiAxMSB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDExLCB5OiAxMSB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDUsIHk6IDEyIH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9WUixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNiwgeTogMTIgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJFQUdMRVwiIC8qIEVBR0xFICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA3LCB5OiAxMiB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0hBTEZfVkwsXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbiAgICB0YW5rczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQVJNT1VSRUQ6IDAsXHJcbiAgICAgICAgICAgIERFRkFVTFQ6IDE4LFxyXG4gICAgICAgICAgICBTUEVFRDogMCxcclxuICAgICAgICAgICAgUE9XRVI6IDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQVJNT1VSRUQ6IDAsXHJcbiAgICAgICAgICAgIERFRkFVTFQ6IDAsXHJcbiAgICAgICAgICAgIFNQRUVEOiAyLFxyXG4gICAgICAgICAgICBQT1dFUjogMFxyXG4gICAgICAgIH1cclxuICAgIF1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgTGV2ZWwxO1xyXG4iLCJpbXBvcnQgeyBCTE9DS19GVUxMLCBCTE9DS19IQUxGX0hCLCBCTE9DS19IQUxGX1ZSLCBCTE9DS19IQUxGX1ZMIH0gZnJvbSBcIi4vTGV2ZWxVdGlsc1wiO1xyXG52YXIgTGV2ZWwyID0ge1xyXG4gICAgbGV2ZWxJZDogMixcclxuICAgIGxldmVsTmFtZTogJ0xFVkVMIDInLFxyXG4gICAgYmxvY2tzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA1LCB5OiAxMSB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IHtcclxuICAgICAgICAgICAgICAgIGJvdHRvbUxlZnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYm90dG9tUmlnaHQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB0b3BMZWZ0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHRvcFJpZ2h0OiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA2LCB5OiAxMSB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0hBTEZfSEIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDcsIHk6IDExIH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZToge1xyXG4gICAgICAgICAgICAgICAgYm90dG9tTGVmdDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGJvdHRvbVJpZ2h0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHRvcExlZnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdG9wUmlnaHQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDUsIHk6IDEyIH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9WUixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNiwgeTogMTIgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJFQUdMRVwiIC8qIEVBR0xFICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA3LCB5OiAxMiB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0hBTEZfVkwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDMsIHk6IDAgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJJUk9OXCIgLyogSVJPTiAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNywgeTogMCB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIklST05cIiAvKiBJUk9OICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAxLCB5OiAxIH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMywgeTogMSB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIklST05cIiAvKiBJUk9OICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA3LCB5OiAxIH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogOSwgeTogMSB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDExLCB5OiAxIH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMSwgeTogMiB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDYsIHk6IDIgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA3LCB5OiAyIH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogOSwgeTogMiB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDEwLCB5OiAyIH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiSVJPTlwiIC8qIElST04gKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDExLCB5OiAyIH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMywgeTogMyB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDksIHk6IDMgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJJUk9OXCIgLyogSVJPTiAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMCwgeTogNCB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJVU0hcIiAvKiBCVVNIICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAzLCB5OiA0IH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNiwgeTogNCB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIklST05cIiAvKiBJUk9OICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA5LCB5OiA0IH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMTAsIHk6IDQgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCVVNIXCIgLyogQlVTSCAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMTEsIHk6IDQgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAxMiwgeTogNCB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIklST05cIiAvKiBJUk9OICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAwLCB5OiA1IH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlVTSFwiIC8qIEJVU0ggKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDEsIHk6IDUgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCVVNIXCIgLyogQlVTSCAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNSwgeTogNSB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDgsIHk6IDUgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJJUk9OXCIgLyogSVJPTiAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMTAsIHk6IDUgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCVVNIXCIgLyogQlVTSCAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMSwgeTogNiB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDIsIHk6IDYgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAzLCB5OiA2IH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNCwgeTogNiB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJVU0hcIiAvKiBCVVNIICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA1LCB5OiA2IH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlVTSFwiIC8qIEJVU0ggKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDYsIHk6IDYgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCVVNIXCIgLyogQlVTSCAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNywgeTogNiB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIklST05cIiAvKiBJUk9OICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAxMCwgeTogNiB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJVU0hcIiAvKiBCVVNIICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAxMSwgeTogNiB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDMsIHk6IDcgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJJUk9OXCIgLyogSVJPTiAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNCwgeTogNyB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJVU0hcIiAvKiBCVVNIICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA1LCB5OiA3IH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNywgeTogNyB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDksIHk6IDcgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAxMSwgeTogNyB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDAsIHk6IDggfSxcclxuICAgICAgICAgICAgdHlwZTogXCJJUk9OXCIgLyogSVJPTiAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMSwgeTogOCB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDMsIHk6IDggfSxcclxuICAgICAgICAgICAgdHlwZTogXCJJUk9OXCIgLyogSVJPTiAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNSwgeTogOCB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDcsIHk6IDggfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAxMSwgeTogOCB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDEsIHk6IDkgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAzLCB5OiA5IH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNSwgeTogOSB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDYsIHk6IDkgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA3LCB5OiA5IH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogOSwgeTogOSB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDEwLCB5OiA5IH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiSVJPTlwiIC8qIElST04gKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDExLCB5OiA5IH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMSwgeTogMTAgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA5LCB5OiAxMCB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDExLCB5OiAxMCB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDEsIHk6IDExIH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMywgeTogMTEgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA5LCB5OiAxMSB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDEwLCB5OiAxMSB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDExLCB5OiAxMSB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbiAgICB0YW5rczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQVJNT1VSRUQ6IDAsXHJcbiAgICAgICAgICAgIERFRkFVTFQ6IDE4LFxyXG4gICAgICAgICAgICBTUEVFRDogMCxcclxuICAgICAgICAgICAgUE9XRVI6IDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQVJNT1VSRUQ6IDAsXHJcbiAgICAgICAgICAgIERFRkFVTFQ6IDAsXHJcbiAgICAgICAgICAgIFNQRUVEOiAyLFxyXG4gICAgICAgICAgICBQT1dFUjogMFxyXG4gICAgICAgIH1cclxuICAgIF1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgTGV2ZWwyO1xyXG4iLCJleHBvcnQgdmFyIEJMT0NLX0ZVTEwgPSB7XHJcbiAgICBib3R0b21MZWZ0OiB0cnVlLFxyXG4gICAgYm90dG9tUmlnaHQ6IHRydWUsXHJcbiAgICB0b3BMZWZ0OiB0cnVlLFxyXG4gICAgdG9wUmlnaHQ6IHRydWVcclxufTtcclxuZXhwb3J0IHZhciBCTE9DS19IQUxGX0hUID0ge1xyXG4gICAgYm90dG9tTGVmdDogZmFsc2UsXHJcbiAgICBib3R0b21SaWdodDogZmFsc2UsXHJcbiAgICB0b3BMZWZ0OiB0cnVlLFxyXG4gICAgdG9wUmlnaHQ6IHRydWVcclxufTtcclxuZXhwb3J0IHZhciBCTE9DS19IQUxGX0hCID0ge1xyXG4gICAgYm90dG9tTGVmdDogdHJ1ZSxcclxuICAgIGJvdHRvbVJpZ2h0OiB0cnVlLFxyXG4gICAgdG9wTGVmdDogZmFsc2UsXHJcbiAgICB0b3BSaWdodDogZmFsc2VcclxufTtcclxuZXhwb3J0IHZhciBCTE9DS19IQUxGX1ZMID0ge1xyXG4gICAgYm90dG9tTGVmdDogdHJ1ZSxcclxuICAgIGJvdHRvbVJpZ2h0OiBmYWxzZSxcclxuICAgIHRvcExlZnQ6IHRydWUsXHJcbiAgICB0b3BSaWdodDogZmFsc2VcclxufTtcclxuZXhwb3J0IHZhciBCTE9DS19IQUxGX1ZSID0ge1xyXG4gICAgYm90dG9tTGVmdDogZmFsc2UsXHJcbiAgICBib3R0b21SaWdodDogdHJ1ZSxcclxuICAgIHRvcExlZnQ6IGZhbHNlLFxyXG4gICAgdG9wUmlnaHQ6IHRydWVcclxufTtcclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldFRvdGFsT2ZUYW5rR3JvdXAoZ3JvdXApIHtcclxuICAgIGlmIChpc05hTihncm91cC5ERUZBVUxUKSkge1xyXG4gICAgICAgIGdyb3VwLkRFRkFVTFQgPSAwO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzTmFOKGdyb3VwLlNQRUVEKSkge1xyXG4gICAgICAgIGdyb3VwLlNQRUVEID0gMDtcclxuICAgIH1cclxuICAgIGlmIChpc05hTihncm91cC5QT1dFUikpIHtcclxuICAgICAgICBncm91cC5QT1dFUiA9IDA7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNOYU4oZ3JvdXAuQVJNT1VSRUQpKSB7XHJcbiAgICAgICAgZ3JvdXAuQVJNT1VSRUQgPSAwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGdyb3VwLkRFRkFVTFQgKyBncm91cC5TUEVFRCArIGdyb3VwLlBPV0VSICsgZ3JvdXAuQVJNT1VSRUQ7XHJcbn1cclxuIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbmltcG9ydCBHYW1lT2JqZWN0IGZyb20gXCIuL0dhbWVPYmplY3RcIjtcclxuaW1wb3J0IHsgR3VpZCB9IGZyb20gXCIuLi8uLi9VdGlscy9VdGlsc1wiO1xyXG5pbXBvcnQgU1BSVElFX0RFRiBmcm9tIFwiLi4vLi4vUmVuZGVyL1Nwcml0ZS9TcHJpdGVEZWZpbml0aW9uXCI7XHJcbmltcG9ydCB7IGdldFNwcml0ZVNpemUgfSBmcm9tIFwiLi4vLi4vUmVuZGVyL1Nwcml0ZS9TcHJpdGVEYXRhXCI7XHJcbnZhciBBbmltYXRpb25PYmplY3QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoQW5pbWF0aW9uT2JqZWN0LCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gQW5pbWF0aW9uT2JqZWN0KGdhbWUsIGlkLCBhbmltYXRpb25UeXBlLCBhbmltYXRpb25Qb2ludCwgZHVyYXRpb24sIGZyYW1lUmF0ZSwgbG9vcCwgY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAobG9vcCA9PT0gdm9pZCAwKSB7IGxvb3AgPSBmYWxzZTsgfVxyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKGlkID09IG51bGwpIHtcclxuICAgICAgICAgICAgaWQgPSBHdWlkLm5ld0d1aWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBnYW1lLCBcIkFOSU1BVElPTlwiIC8qIEFOSU1BVElPTiAqLywgYW5pbWF0aW9uUG9pbnQsIGlkKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLmFuaW1hdGlvblR5cGUgPSBhbmltYXRpb25UeXBlO1xyXG4gICAgICAgIF90aGlzLl9hbmltYXRpb25Qb2ludCA9IGFuaW1hdGlvblBvaW50O1xyXG4gICAgICAgIF90aGlzLl9zcHJpdGVQb3NpdGlvbiA9IDA7XHJcbiAgICAgICAgX3RoaXMuX2N1cnJlbnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgX3RoaXMuX2V4cGlyZVRpbWUgPSBfdGhpcy5fY3VycmVudFRpbWUgKyBkdXJhdGlvbjtcclxuICAgICAgICBfdGhpcy5fZnJhbWVDb3VudCA9IFNQUlRJRV9ERUYuQU5JTUFUSU9OW190aGlzLmFuaW1hdGlvblR5cGVdLmxlbmd0aDtcclxuICAgICAgICBfdGhpcy5fZnJhbWVSYXRlID0gZnJhbWVSYXRlO1xyXG4gICAgICAgIF90aGlzLl9sb29wID0gbG9vcDtcclxuICAgICAgICBfdGhpcy5fY2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgICAgICBfdGhpcy51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBbmltYXRpb25PYmplY3QucHJvdG90eXBlLCBcImFuaW1hdGlvblBvaW50XCIsIHtcclxuICAgICAgICAvLyNyZWdpb24gZ2V0dGVyLCBzZXR0ZXJcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FuaW1hdGlvblBvaW50O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoYW5pbWF0aW9uUG9pbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5fYW5pbWF0aW9uUG9pbnQgPSBhbmltYXRpb25Qb2ludDtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBbmltYXRpb25PYmplY3QucHJvdG90eXBlLCBcImV4cGlyZVRpbWVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZXhwaXJlVGltZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICAvLyNlbmRyZWdpb25cclxuICAgIC8vI3JlZ2lvbiBwdWJsaWMgbWV0aG9kc1xyXG4gICAgLy8gaWdub3JlIGhpdCBldmVudFxyXG4gICAgQW5pbWF0aW9uT2JqZWN0LnByb3RvdHlwZS5oaXQgPSBmdW5jdGlvbiAoKSB7IH07XHJcbiAgICBBbmltYXRpb25PYmplY3QucHJvdG90eXBlLm5leHRTcHJpdGVQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5fZnJhbWVDb3VudCA8IDIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9nYW1lLmxvZyhcIltcIiArIHRoaXMuc3ByaXRlUG9zaXRpb24gKyBcIiAvIFwiICsgKHRoaXMuX2ZyYW1lQ291bnQgLSAxKSArIFwiXVwiICsgKHBlcmZvcm1hbmNlLm5vdygpIC0gdGhpcy5fY3VycmVudFRpbWUpICsgXCIgPj0gXCIgKyB0aGlzLl9mcmFtZVJhdGUpO1xyXG4gICAgICAgIGlmIChwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMuX2N1cnJlbnRUaW1lID49IHRoaXMuX2ZyYW1lUmF0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fc3ByaXRlUG9zaXRpb24gKyAxIDwgdGhpcy5fZnJhbWVDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3ByaXRlUG9zaXRpb24rKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9sb29wKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zcHJpdGVQb3NpdGlvbiA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fc3ByaXRlUG9zaXRpb247XHJcbiAgICB9O1xyXG4gICAgQW5pbWF0aW9uT2JqZWN0LnByb3RvdHlwZS5leHBpcmUgPSBmdW5jdGlvbiAocmVtb3ZlKSB7XHJcbiAgICAgICAgaWYgKHJlbW92ZSA9PT0gdm9pZCAwKSB7IHJlbW92ZSA9IHRydWU7IH1cclxuICAgICAgICB0aGlzLl9nYW1lLmxvZyhcIkFOSU1BVElPTiBcIiArIHRoaXMuaWQgKyBcIiBIQVMgQkVFTiBFWFBJUkVELiAoXCIgKyBwZXJmb3JtYW5jZS5ub3cgKyBcIilcIik7XHJcbiAgICAgICAgaWYgKHJlbW92ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdGhpcy5fY2FsbGJhY2sodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8vI2VuZHJlZ2lvblxyXG4gICAgQW5pbWF0aW9uT2JqZWN0LnByb3RvdHlwZS51cGRhdGVQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgc3ByaXRlRGF0YSA9IGdldFNwcml0ZVNpemUodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fcG9zaXRvbiA9IHtcclxuICAgICAgICAgICAgeDogdGhpcy5fYW5pbWF0aW9uUG9pbnQueCAtIHNwcml0ZURhdGEud2lkdGggLyAyLFxyXG4gICAgICAgICAgICB5OiB0aGlzLl9hbmltYXRpb25Qb2ludC55IC0gc3ByaXRlRGF0YS5oZWlnaHQgLyAyXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQW5pbWF0aW9uT2JqZWN0O1xyXG59KEdhbWVPYmplY3QpKTtcclxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0aW9uT2JqZWN0O1xyXG4iLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuaW1wb3J0IEdhbWVPYmplY3QgZnJvbSBcIi4vR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBHdWlkLCByZW1vdmVEdXBsaWNhdGUgfSBmcm9tIFwiLi4vLi4vVXRpbHMvVXRpbHNcIjtcclxuaW1wb3J0IEJ1bGxldE9iamVjdCBmcm9tIFwiLi9CdWxsZXRPYmplY3RcIjtcclxuaW1wb3J0IEVEaXJlY3Rpb24gZnJvbSBcIi4uLy4uL1V0aWxzL0VEaXJlY3Rpb25cIjtcclxuaW1wb3J0IHsgZ2V0U3ByaXRlU2l6ZSB9IGZyb20gXCIuLi8uLi9SZW5kZXIvU3ByaXRlL1Nwcml0ZURhdGFcIjtcclxuaW1wb3J0IHsgQmxvY2tDb2xsaXNpb25UZXN0IH0gZnJvbSBcIi4uLy4uL1V0aWxzL0NvbGxpc2lvblRlc3RcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIEJsb2NrU3RhdGUyeDJUbzR4NCh4Mikge1xyXG4gICAgdmFyIHg0ID0gW1xyXG4gICAgICAgIFtmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZV0sXHJcbiAgICAgICAgW2ZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlXSxcclxuICAgICAgICBbZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2VdLFxyXG4gICAgICAgIFtmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZV1cclxuICAgIF07XHJcbiAgICB4NFswXVswXSA9IHgyLnRvcExlZnQ7XHJcbiAgICB4NFswXVsxXSA9IHgyLnRvcExlZnQ7XHJcbiAgICB4NFsxXVswXSA9IHgyLnRvcExlZnQ7XHJcbiAgICB4NFsxXVsxXSA9IHgyLnRvcExlZnQ7XHJcbiAgICB4NFswXVsyXSA9IHgyLnRvcFJpZ2h0O1xyXG4gICAgeDRbMF1bM10gPSB4Mi50b3BSaWdodDtcclxuICAgIHg0WzFdWzJdID0geDIudG9wUmlnaHQ7XHJcbiAgICB4NFsxXVszXSA9IHgyLnRvcFJpZ2h0O1xyXG4gICAgeDRbMl1bMF0gPSB4Mi5ib3R0b21MZWZ0O1xyXG4gICAgeDRbMl1bMV0gPSB4Mi5ib3R0b21MZWZ0O1xyXG4gICAgeDRbM11bMF0gPSB4Mi5ib3R0b21MZWZ0O1xyXG4gICAgeDRbM11bMV0gPSB4Mi5ib3R0b21MZWZ0O1xyXG4gICAgeDRbMl1bMl0gPSB4Mi5ib3R0b21SaWdodDtcclxuICAgIHg0WzJdWzNdID0geDIuYm90dG9tUmlnaHQ7XHJcbiAgICB4NFszXVsyXSA9IHgyLmJvdHRvbVJpZ2h0O1xyXG4gICAgeDRbM11bM10gPSB4Mi5ib3R0b21SaWdodDtcclxuICAgIHJldHVybiB4NDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gQmxvY2tTdGF0ZTR4NFRvMngyKHg0KSB7XHJcbiAgICB2YXIgeDIgPSB7XHJcbiAgICAgICAgdG9wTGVmdDogZmFsc2UsXHJcbiAgICAgICAgdG9wUmlnaHQ6IGZhbHNlLFxyXG4gICAgICAgIGJvdHRvbUxlZnQ6IGZhbHNlLFxyXG4gICAgICAgIGJvdHRvbVJpZ2h0OiBmYWxzZVxyXG4gICAgfTtcclxuICAgIGlmICh4NFswXVswXSB8fCB4NFswXVsxXSB8fCB4NFsxXVswXSB8fCB4NFsxXVsxXSkge1xyXG4gICAgICAgIHgyLnRvcExlZnQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKHg0WzBdWzJdIHx8IHg0WzBdWzNdIHx8IHg0WzFdWzJdIHx8IHg0WzFdWzNdKSB7XHJcbiAgICAgICAgeDIudG9wUmlnaHQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKHg0WzJdWzBdIHx8IHg0WzJdWzFdIHx8IHg0WzNdWzBdIHx8IHg0WzNdWzFdKSB7XHJcbiAgICAgICAgeDIuYm90dG9tTGVmdCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAoeDRbMl1bMl0gfHwgeDRbMl1bM10gfHwgeDRbM11bMl0gfHwgeDRbM11bM10pIHtcclxuICAgICAgICB4Mi5ib3R0b21SaWdodCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4geDI7XHJcbn1cclxudmFyIEJsb2NrT2JqZWN0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEJsb2NrT2JqZWN0LCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gQmxvY2tPYmplY3QoZ2FtZSwgYmxvY2tUeXBlLCBwb3NpdGlvbiwgYmxvY2tTdGF0ZTJ4Mikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGdhbWUsIFwiQkxPQ0tcIiAvKiBCTE9DSyAqLywgcG9zaXRpb24sIEd1aWQubmV3R3VpZCgpKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLmJsb2NrVHlwZSA9IGJsb2NrVHlwZTtcclxuICAgICAgICBfdGhpcy5fYmxvY2tTdGF0ZSA9IEJsb2NrU3RhdGUyeDJUbzR4NChibG9ja1N0YXRlMngyKTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQmxvY2tPYmplY3QucHJvdG90eXBlLCBcImJsb2NrU3RhdGU0eDRcIiwge1xyXG4gICAgICAgIC8vI3JlZ2lvbiBnZXR0ZXIgc2V0dGVyXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ibG9ja1N0YXRlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCbG9ja09iamVjdC5wcm90b3R5cGUsIFwiYmxvY2tTdGF0ZTJ4MlwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBCbG9ja1N0YXRlNHg0VG8yeDIodGhpcy5fYmxvY2tTdGF0ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgLy8jZW5kcmVnaW9uXHJcbiAgICBCbG9ja09iamVjdC5wcm90b3R5cGUuZmluZENlbGxQb3NpdGlvbiA9IGZ1bmN0aW9uIChyb3csIGNvbHVtbikge1xyXG4gICAgICAgIHZhciBibG9ja1NpemUgPSBnZXRTcHJpdGVTaXplKHRoaXMpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHg6IHRoaXMucG9zaXRpb24ueCArIChibG9ja1NpemUud2lkdGggLyA0KSAqIGNvbHVtbixcclxuICAgICAgICAgICAgeTogdGhpcy5wb3NpdGlvbi55ICsgKGJsb2NrU2l6ZS53aWR0aCAvIDQpICogcm93XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICBCbG9ja09iamVjdC5wcm90b3R5cGUuaGl0ID0gZnVuY3Rpb24gKGV2ZW50T3JpZ2luKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBpZiAoIShldmVudE9yaWdpbiBpbnN0YW5jZW9mIEJ1bGxldE9iamVjdCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5ibG9ja1R5cGUgPT09IFwiRUFHTEVcIiAvKiBFQUdMRSAqLykge1xyXG4gICAgICAgICAgICB0aGlzLl9zcHJpdGVQb3NpdGlvbiA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuX2dhbWUuZ2FtZW92ZXIoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYnVsbGV0ID0gZXZlbnRPcmlnaW47XHJcbiAgICAgICAgaWYgKGJ1bGxldC5wYXJlbnQudGFua0xldmVsIDwgMyAmJiB0aGlzLmJsb2NrVHlwZSA9PT0gXCJJUk9OXCIgLyogSVJPTiAqLykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBibG9ja1NpemUgPSBnZXRTcHJpdGVTaXplKHRoaXMpO1xyXG4gICAgICAgIHZhciBjb2xsaXNpb25DZWxscyA9IEJsb2NrQ29sbGlzaW9uVGVzdCh0aGlzLCBidWxsZXQpO1xyXG4gICAgICAgIHZhciB4UG9zID0gcmVtb3ZlRHVwbGljYXRlKGNvbGxpc2lvbkNlbGxzLm1hcChmdW5jdGlvbiAocG9pbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChwb2ludC54IC0gX3RoaXMucG9zaXRpb24ueCkgLyAoYmxvY2tTaXplLndpZHRoIC8gNCk7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIHZhciB5UG9zID0gcmVtb3ZlRHVwbGljYXRlKGNvbGxpc2lvbkNlbGxzLm1hcChmdW5jdGlvbiAocG9pbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChwb2ludC55IC0gX3RoaXMucG9zaXRpb24ueSkgLyAoYmxvY2tTaXplLmhlaWdodCAvIDQpO1xyXG4gICAgICAgIH0pKTtcclxuICAgICAgICB2YXIgYjQ0ID0gdGhpcy5ibG9ja1N0YXRlNHg0O1xyXG4gICAgICAgIGlmIChidWxsZXQuZGlyZWN0aW9uID09PSBFRGlyZWN0aW9uLnVwIHx8IGJ1bGxldC5kaXJlY3Rpb24gPT09IEVEaXJlY3Rpb24uZG93bikge1xyXG4gICAgICAgICAgICBpZiAoeFBvcy5pbmNsdWRlcygwKSB8fCB4UG9zLmluY2x1ZGVzKDEpKSB7XHJcbiAgICAgICAgICAgICAgICBiNDRbeVBvc1swXV1bMF0gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGI0NFt5UG9zWzBdXVsxXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHlQb3NbMF0gKyAxIDwgNCAmJiBidWxsZXQucGFyZW50LnRhbmtMZXZlbCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBiNDRbeVBvc1swXSArIDFdWzBdID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgYjQ0W3lQb3NbMF0gKyAxXVsxXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh4UG9zLmluY2x1ZGVzKDIpIHx8IHhQb3MuaW5jbHVkZXMoMykpIHtcclxuICAgICAgICAgICAgICAgIGI0NFt5UG9zWzBdXVsyXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYjQ0W3lQb3NbMF1dWzNdID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAoeVBvc1swXSArIDEgPCA0ICYmIGJ1bGxldC5wYXJlbnQudGFua0xldmVsID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGI0NFt5UG9zWzBdICsgMV1bMl0gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBiNDRbeVBvc1swXSArIDFdWzNdID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYnVsbGV0LmRpcmVjdGlvbiA9PT0gRURpcmVjdGlvbi5sZWZ0IHx8IGJ1bGxldC5kaXJlY3Rpb24gPT09IEVEaXJlY3Rpb24ucmlnaHQpIHtcclxuICAgICAgICAgICAgaWYgKHlQb3MuaW5jbHVkZXMoMCkgfHwgeVBvcy5pbmNsdWRlcygxKSkge1xyXG4gICAgICAgICAgICAgICAgYjQ0WzBdW3hQb3NbMF1dID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBiNDRbMV1beFBvc1swXV0gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmICh4UG9zWzBdICsgMSA8IDQgJiYgYnVsbGV0LnBhcmVudC50YW5rTGV2ZWwgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYjQ0WzBdW3hQb3NbMF0gKyAxXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGI0NFsxXVt4UG9zWzBdICsgMV0gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoeVBvcy5pbmNsdWRlcygyKSB8fCB5UG9zLmluY2x1ZGVzKDMpKSB7XHJcbiAgICAgICAgICAgICAgICBiNDRbMl1beFBvc1swXV0gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGI0NFszXVt4UG9zWzBdXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHhQb3NbMF0gKyAxIDwgNCAmJiBidWxsZXQucGFyZW50LnRhbmtMZXZlbCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBiNDRbMl1beFBvc1swXSArIDFdID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgYjQ0WzNdW3hQb3NbMF0gKyAxXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBhdmFpbGFibGUgPSBmYWxzZTtcclxuICAgICAgICBiNDQuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7XHJcbiAgICAgICAgICAgIHJvdy5mb3JFYWNoKGZ1bmN0aW9uIChjZWxsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2VsbCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGF2YWlsYWJsZSA9IGNlbGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChhdmFpbGFibGUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBCbG9ja09iamVjdDtcclxufShHYW1lT2JqZWN0KSk7XHJcbmV4cG9ydCBkZWZhdWx0IEJsb2NrT2JqZWN0O1xyXG4iLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuaW1wb3J0IE1vdmluZ09iamVjdCwgeyBjYWxjdWxhdGVNb3ZlIH0gZnJvbSBcIi4vTW92aW5nT2JqZWN0XCI7XHJcbmltcG9ydCBFRGlyZWN0aW9uIGZyb20gXCIuLi8uLi9VdGlscy9FRGlyZWN0aW9uXCI7XHJcbmltcG9ydCB7IGdldFNwcml0ZVNpemUgfSBmcm9tIFwiLi4vLi4vUmVuZGVyL1Nwcml0ZS9TcHJpdGVEYXRhXCI7XHJcbmV4cG9ydCB2YXIgQlVMTEVUX1NMT1cgPSA0O1xyXG5leHBvcnQgdmFyIEJVTExFVF9GQVNUID0gNjtcclxudmFyIEJ1bGxldE9iamVjdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhCdWxsZXRPYmplY3QsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBCdWxsZXRPYmplY3QoZ2FtZSwgcGFyZW50LCBwb3NpdGlvbiwgZGlyZWN0aW9uLCBzcGVlZCwgaWQpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBnYW1lLCBcIkJVTExFVFwiIC8qIEJVTExFVCAqLywgcG9zaXRpb24sIGRpcmVjdGlvbiwgc3BlZWQsIGlkKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1bGxldE9iamVjdC5wcm90b3R5cGUsIFwicGFyZW50XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3BhcmVudDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQnVsbGV0T2JqZWN0LnByb3RvdHlwZSwgXCJwYXJlbnRJZFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9wYXJlbnQuaWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgQnVsbGV0T2JqZWN0LnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgLy8gbGV0IG9yaWdpbmFsID0gZGVlcENsb25lKHRoaXMucG9zaXRpb24pIGFzIFBvaW50O1xyXG4gICAgICAgIGNhbGN1bGF0ZU1vdmUodGhpcy5wb3NpdGlvbiwgdGhpcy5fZGlyZWN0aW9uLCB0aGlzLl9zcGVlZCk7XHJcbiAgICAgICAgdGhpcy5fZ2FtZS5sb2coXCJCVUxMRVQgW1wiICsgdGhpcy5pZCArIFwiXSBNT1ZFRCAtPiBbeDpcIiArIHRoaXMucG9zaXRpb24ueCArIFwiXSwgeTpbXCIgKyB0aGlzLnBvc2l0aW9uLnkgKyBcIl1cIik7XHJcbiAgICAgICAgdmFyIHRlc3RfdmlzaWJsZSA9IHRoaXMuX2dhbWUudGVzdFZpc2liaWxpdHkodGhpcyk7XHJcbiAgICAgICAgdmFyIHRlc3RfY29sbGlzaW9uID0gdGhpcy5fZ2FtZS5jb2xsaXNpb25UZXN0KHRoaXMpO1xyXG4gICAgICAgIGlmICh0ZXN0X3Zpc2libGUgPT0gZmFsc2UgJiYgdGVzdF9jb2xsaXNpb24ubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5maXRUb0JvcmRlcigpO1xyXG4gICAgICAgICAgICB0aGlzLmV4cGxvZGUodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRlc3RfY29sbGlzaW9uLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdmFyIGV4cGxvZGVkXzEgPSB0cnVlO1xyXG4gICAgICAgICAgICB0ZXN0X2NvbGxpc2lvbi5mb3JFYWNoKGZ1bmN0aW9uIChvYmplY3QpIHtcclxuICAgICAgICAgICAgICAgIGlmIChvYmplY3Qub2JqZWN0VHlwZSA9PT0gXCJCVUxMRVRcIiAvKiBCVUxMRVQgKi8pIHtcclxuICAgICAgICAgICAgICAgICAgICBleHBsb2RlZF8xID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0Lm9iamVjdFR5cGUgPT09IFwiVEFOS1wiIC8qIFRBTksgKi8pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob2JqZWN0LmlzSW52aW5jaWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBsb2RlZF8xID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgX3RoaXMuZml0VG9PYmplY3Qob2JqZWN0LCAtMSk7XHJcbiAgICAgICAgICAgICAgICBvYmplY3QuaGl0KF90aGlzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuZXhwbG9kZShleHBsb2RlZF8xKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgQnVsbGV0T2JqZWN0LnByb3RvdHlwZS5oaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5leHBsb2RlKGZhbHNlKTtcclxuICAgIH07XHJcbiAgICBCdWxsZXRPYmplY3QucHJvdG90eXBlLmV4cGxvZGUgPSBmdW5jdGlvbiAoYW5pbWF0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgICAgICB2YXIgYW5pbWF0aW9uUG9zaXRpb247XHJcbiAgICAgICAgdmFyIHNpemUgPSBnZXRTcHJpdGVTaXplKHRoaXMpO1xyXG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gRURpcmVjdGlvbi51cCB8fCB0aGlzLmRpcmVjdGlvbiA9PT0gRURpcmVjdGlvbi5kb3duKSB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvblBvc2l0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgeDogdGhpcy5wb3NpdGlvbi54ICsgc2l6ZS53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgICAgICB5OiB0aGlzLnBvc2l0aW9uLnlcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvblBvc2l0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgeDogdGhpcy5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgICAgICAgeTogdGhpcy5wb3NpdGlvbi55ICsgc2l6ZS5oZWlnaHQgLyAyXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhbmltYXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5fZ2FtZS5zdGFydEFuaW1hdGlvbih0aGlzLCBcIkVYUExPU0lPTl9TTUFMTFwiIC8qIEVYUExPU0lPTl9TTUFMTCAqLyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2dhbWUubG9nKFwiQlVMTEVUIFtcIiArIHRoaXMuaWQgKyBcIl0gRVhQTE9ERUQuXCIpO1xyXG4gICAgfTtcclxuICAgIEJ1bGxldE9iamVjdC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUucmVtb3ZlLmNhbGwodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fcGFyZW50LnJlbW92ZUJ1bGxldCh0aGlzLmlkKTtcclxuICAgICAgICB0aGlzLl9nYW1lLmxvZyhcIkJVTExFVCBbXCIgKyB0aGlzLmlkICsgXCJdIEhBUyBCRUVOIFJFTU9WRUQuXCIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBCdWxsZXRPYmplY3Q7XHJcbn0oTW92aW5nT2JqZWN0KSk7XHJcbmV4cG9ydCBkZWZhdWx0IEJ1bGxldE9iamVjdDtcclxuIiwiZXhwb3J0IGZ1bmN0aW9uIFNjb3JlVG9BbmltYXRpb24oc2NvcmUpIHtcclxuICAgIHN3aXRjaCAoTWF0aC5mbG9vcihzY29yZSAvIDEwMCkpIHtcclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgIHJldHVybiBcIlNDT1JFXzEwMFwiIC8qIFNDT1JFXzEwMCAqLztcclxuICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgIHJldHVybiBcIlNDT1JFXzIwMFwiIC8qIFNDT1JFXzIwMCAqLztcclxuICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgIHJldHVybiBcIlNDT1JFXzMwMFwiIC8qIFNDT1JFXzMwMCAqLztcclxuICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgIHJldHVybiBcIlNDT1JFXzQwMFwiIC8qIFNDT1JFXzQwMCAqLztcclxuICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgIHJldHVybiBcIlNDT1JFXzUwMFwiIC8qIFNDT1JFXzUwMCAqLztcclxuICAgIH1cclxufVxyXG47XHJcbi8vIFRPRE8gVXBkYXRlIGRlZmF1bHRzXHJcbmV4cG9ydCB2YXIgQW5pbWF0aW9uRGVmYXVsdHMgPSB7XHJcbiAgICBFWFBMT1NJT05fU01BTEw6IHtcclxuICAgICAgICBkdXJhdGlvbjogMjAwLFxyXG4gICAgICAgIGZyYW1lUmF0ZTogMjAwIC8gNCxcclxuICAgICAgICBsb29wOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIEVYUExPU0lPTl9MQVJHRToge1xyXG4gICAgICAgIGR1cmF0aW9uOiAxNTAsXHJcbiAgICAgICAgZnJhbWVSYXRlOiAxNTAgLyAzLFxyXG4gICAgICAgIGxvb3A6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgSU5WSU5DSUJMRToge1xyXG4gICAgICAgIGR1cmF0aW9uOiAzMDAwLFxyXG4gICAgICAgIGZyYW1lUmF0ZTogMjUsXHJcbiAgICAgICAgbG9vcDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIFNQQVdOOiB7XHJcbiAgICAgICAgZHVyYXRpb246IDEwMDAsXHJcbiAgICAgICAgZnJhbWVSYXRlOiAxMDAwIC8gMTMsXHJcbiAgICAgICAgbG9vcDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIFNDT1JFXzEwMDoge1xyXG4gICAgICAgIGR1cmF0aW9uOiAxMDAwLFxyXG4gICAgICAgIGZyYW1lUmF0ZTogMCxcclxuICAgICAgICBsb29wOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIFNDT1JFXzIwMDoge1xyXG4gICAgICAgIGR1cmF0aW9uOiAxMDAwLFxyXG4gICAgICAgIGZyYW1lUmF0ZTogMCxcclxuICAgICAgICBsb29wOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIFNDT1JFXzMwMDoge1xyXG4gICAgICAgIGR1cmF0aW9uOiAxMDAwLFxyXG4gICAgICAgIGZyYW1lUmF0ZTogMCxcclxuICAgICAgICBsb29wOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIFNDT1JFXzQwMDoge1xyXG4gICAgICAgIGR1cmF0aW9uOiAxMDAwLFxyXG4gICAgICAgIGZyYW1lUmF0ZTogMCxcclxuICAgICAgICBsb29wOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIFNDT1JFXzUwMDoge1xyXG4gICAgICAgIGR1cmF0aW9uOiAxMDAwLFxyXG4gICAgICAgIGZyYW1lUmF0ZTogMCxcclxuICAgICAgICBsb29wOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIEdBTUVPVkVSOiB7XHJcbiAgICAgICAgZHVyYXRpb246IDQwMDAsXHJcbiAgICAgICAgZnJhbWVSYXRlOiAxMDAsXHJcbiAgICAgICAgbG9vcDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIFBBVVNFOiB7XHJcbiAgICAgICAgZHVyYXRpb246IC0xLFxyXG4gICAgICAgIGZyYW1lUmF0ZTogMTAwLFxyXG4gICAgICAgIGxvb3A6IHRydWVcclxuICAgIH0sXHJcbiAgICBUSVRMRToge1xyXG4gICAgICAgIGR1cmF0aW9uOiA0MDAwLFxyXG4gICAgICAgIGZyYW1lUmF0ZTogMTAwLFxyXG4gICAgICAgIGxvb3A6IHRydWVcclxuICAgIH0sXHJcbiAgICBDVVJTT1I6IHtcclxuICAgICAgICBkdXJhdGlvbjogNTAsXHJcbiAgICAgICAgZnJhbWVSYXRlOiAyNSxcclxuICAgICAgICBsb29wOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgQ1VSVEFJTjoge1xyXG4gICAgICAgIGR1cmF0aW9uOiAzMDAwLFxyXG4gICAgICAgIGZyYW1lUmF0ZTogMjUsXHJcbiAgICAgICAgbG9vcDogdHJ1ZVxyXG4gICAgfVxyXG59O1xyXG4iLCJ2YXIgRUl0ZW1UeXBlO1xyXG4oZnVuY3Rpb24gKEVJdGVtVHlwZSkge1xyXG4gICAgRUl0ZW1UeXBlW1wiSEVMTUVUXCJdID0gXCJIRUxNRVRcIjtcclxuICAgIEVJdGVtVHlwZVtcIldBVENIXCJdID0gXCJXQVRDSFwiO1xyXG4gICAgRUl0ZW1UeXBlW1wiU1RBUlwiXSA9IFwiU1RBUlwiO1xyXG4gICAgRUl0ZW1UeXBlW1wiQk9NQlwiXSA9IFwiQk9NQlwiO1xyXG4gICAgRUl0ZW1UeXBlW1wiVEFOS1wiXSA9IFwiVEFOS1wiO1xyXG4gICAgRUl0ZW1UeXBlW1wiUElTVE9MXCJdID0gXCJQSVNUT0xcIjtcclxuICAgIEVJdGVtVHlwZVtcIlNIT1ZFTFwiXSA9IFwiU0hPVkVMXCI7XHJcbn0pKEVJdGVtVHlwZSB8fCAoRUl0ZW1UeXBlID0ge30pKTtcclxuZXhwb3J0IGRlZmF1bHQgRUl0ZW1UeXBlO1xyXG4iLCJ2YXIgRW5lbXlUeXBlO1xyXG4oZnVuY3Rpb24gKEVuZW15VHlwZSkge1xyXG4gICAgRW5lbXlUeXBlW1wiREVGQVVMVFwiXSA9IFwiREVGQVVMVFwiO1xyXG4gICAgRW5lbXlUeXBlW1wiU1BFRURcIl0gPSBcIlNQRUVEXCI7XHJcbiAgICBFbmVteVR5cGVbXCJQT1dFUlwiXSA9IFwiUE9XRVJcIjtcclxuICAgIEVuZW15VHlwZVtcIkFSTU9VUkVEXCJdID0gXCJBUk1PVVJFRFwiO1xyXG59KShFbmVteVR5cGUgfHwgKEVuZW15VHlwZSA9IHt9KSk7XHJcbnZhciBFbmVteVNjb3JlTWFwID0gbmV3IE1hcCgpO1xyXG5FbmVteVNjb3JlTWFwLnNldChFbmVteVR5cGUuREVGQVVMVCwgMTAwKTtcclxuRW5lbXlTY29yZU1hcC5zZXQoRW5lbXlUeXBlLlNQRUVELCAyMDApO1xyXG5FbmVteVNjb3JlTWFwLnNldChFbmVteVR5cGUuUE9XRVIsIDMwMCk7XHJcbkVuZW15U2NvcmVNYXAuc2V0KEVuZW15VHlwZS5BUk1PVVJFRCwgNDAwKTtcclxuZXhwb3J0IHsgRW5lbXlUeXBlLCBFbmVteVNjb3JlTWFwIH07XHJcbiIsInZhciBHYW1lT2JqZWN0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gR2FtZU9iamVjdChnYW1lLCBvYmplY3RUeXBlLCBwb3NpdGlvbiwgaWQsIHZpc2libGUpIHtcclxuICAgICAgICBpZiAodmlzaWJsZSA9PT0gdm9pZCAwKSB7IHZpc2libGUgPSB0cnVlOyB9XHJcbiAgICAgICAgdGhpcy5fZ2FtZSA9IGdhbWU7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdmlzaWJsZTtcclxuICAgICAgICB0aGlzLm9iamVjdFR5cGUgPSBvYmplY3RUeXBlO1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZVBvc2l0aW9uID0gMDtcclxuICAgICAgICBpZiAocG9zaXRpb24gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Bvc2l0b24gPSBwb3NpdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Bvc2l0b24gPSB7XHJcbiAgICAgICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICAgICAgeTogMFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaWQgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoR2FtZU9iamVjdC5wcm90b3R5cGUsIFwicG9zaXRpb25cIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcG9zaXRvbjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbi54IDw9IDAgfHwgcG9zaXRpb24ueSA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyAncG9zaXRpb24gY2Fubm90IGJlIGEgbmVnYXRpdmUgdmFsdWUnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX3Bvc2l0b24gPSBwb3NpdGlvbjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoR2FtZU9iamVjdC5wcm90b3R5cGUsIFwic3ByaXRlUG9zaXRpb25cIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3ByaXRlUG9zaXRpb247XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgR2FtZU9iamVjdC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuX2dhbWUucmVtb3ZlT2JqZWN0KHRoaXMpO1xyXG4gICAgfTtcclxuICAgIEdhbWVPYmplY3QucHJvdG90eXBlLm5leHRTcHJpdGVQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLl9zcHJpdGVQb3NpdGlvbiA9IHRoaXMuX3Nwcml0ZVBvc2l0aW9uICsgMSA8PSAxID8gdGhpcy5fc3ByaXRlUG9zaXRpb24gKyAxIDogMDtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3ByaXRlUG9zaXRpb247XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEdhbWVPYmplY3Q7XHJcbn0oKSk7XHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVPYmplY3Q7XHJcbiIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5pbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiLi9HYW1lT2JqZWN0XCI7XHJcbmltcG9ydCBFSXRlbVR5cGUgZnJvbSBcIi4vRW51bS9FSXRlbVR5cGVcIjtcclxuaW1wb3J0IHsgR3VpZCB9IGZyb20gXCIuLi8uLi9VdGlscy9VdGlsc1wiO1xyXG5leHBvcnQgdmFyIElURU1fV0FUQ0hfVElNRSA9IDMwMDA7XHJcbnZhciBJdGVtT2JqZWN0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEl0ZW1PYmplY3QsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBJdGVtT2JqZWN0KGdhbWUsIGl0ZW1UeXBlLCBwb3NpdGlvbikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGdhbWUsIFwiSVRFTVwiIC8qIElURU0gKi8sIHBvc2l0aW9uLCBHdWlkLm5ld0d1aWQoKSkgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5pdGVtVHlwZSA9IGl0ZW1UeXBlO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIEl0ZW1PYmplY3QucHJvdG90eXBlLmhpdCA9IGZ1bmN0aW9uIChldmVudE9yaWdpbikge1xyXG4gICAgICAgIHZhciBvcmlnaW4gPSBldmVudE9yaWdpbjtcclxuICAgICAgICBpZiAob3JpZ2luLnRhbmtUeXBlID09PSBcIkVORU1ZX1RBTktcIiAvKiBFTkVNWV9UQU5LICovKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG90aGVyVGFua3MgPSB0aGlzLl9nYW1lLm9iamVjdHMuZmlsdGVyKGZ1bmN0aW9uICh4KSB7XHJcbiAgICAgICAgICAgIHZhciB0YW5rID0geDtcclxuICAgICAgICAgICAgcmV0dXJuIHRhbmsudGFua1R5cGUgPT09IFwiRU5FTVlfVEFOS1wiIC8qIEVORU1ZX1RBTksgKi87XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLml0ZW1UeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgRUl0ZW1UeXBlLkJPTUI6XHJcbiAgICAgICAgICAgICAgICBvdGhlclRhbmtzLmZvckVhY2goZnVuY3Rpb24gKHRhbmspIHtcclxuICAgICAgICAgICAgICAgICAgICB0YW5rLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRUl0ZW1UeXBlLkhFTE1FVDpcclxuICAgICAgICAgICAgICAgIG9yaWdpbi5pbnZpbmNpYmxlKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBFSXRlbVR5cGUuUElTVE9MOlxyXG4gICAgICAgICAgICAgICAgLy8gcG9pbnQgdXBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEVJdGVtVHlwZS5TVEFSOlxyXG4gICAgICAgICAgICAgICAgb3JpZ2luLmxldmVsdXAoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEVJdGVtVHlwZS5UQU5LOlxyXG4gICAgICAgICAgICAgICAgLy8gbGlmZSAxIHVwXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBFSXRlbVR5cGUuV0FUQ0g6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9nYW1lLnNldEVuZW15UGF1c2UodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBFSXRlbVR5cGUuU0hPVkVMOlxyXG4gICAgICAgICAgICAgICAgLy8gY2hhbmdlIGFsbCBicmlja3MgaW50byBpcm9uXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZ2FtZS5zdGFydEFuaW1hdGlvbih0aGlzLCBcIlNDT1JFXzUwMFwiIC8qIFNDT1JFXzUwMCAqLywgbnVsbCk7XHJcbiAgICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gSXRlbU9iamVjdDtcclxufShHYW1lT2JqZWN0KSk7XHJcbmV4cG9ydCBkZWZhdWx0IEl0ZW1PYmplY3Q7XHJcbiIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5pbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiLi9HYW1lT2JqZWN0XCI7XHJcbmltcG9ydCBFRGlyZWN0aW9uIGZyb20gXCIuLi8uLi9VdGlscy9FRGlyZWN0aW9uXCI7XHJcbmltcG9ydCB7IERSQVdJTkdfQ09OU1QgfSBmcm9tIFwiLi4vLi4vUmVuZGVyL1JlbmRlcmVyXCI7XHJcbmltcG9ydCB7IGdldFNwcml0ZVNpemUsIGdldE9iamVjdFNpemUgfSBmcm9tIFwiLi4vLi4vUmVuZGVyL1Nwcml0ZS9TcHJpdGVEYXRhXCI7XHJcbmltcG9ydCB7IEJsb2NrQ29sbGlzaW9uVGVzdCB9IGZyb20gXCIuLi8uLi9VdGlscy9Db2xsaXNpb25UZXN0XCI7XHJcbmltcG9ydCB7IG1heCwgbWluIH0gZnJvbSBcIi4uLy4uL1V0aWxzL1V0aWxzXCI7XHJcbnZhciBNb3ZpbmdPYmplY3QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoTW92aW5nT2JqZWN0LCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gTW92aW5nT2JqZWN0KGdhbWUsIG9iamVjdFR5cGUsIHBvc2l0aW9uLCBkaXJlY3Rpb24sIHNwZWVkLCBpZCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGdhbWUsIG9iamVjdFR5cGUsIHBvc2l0aW9uLCBpZCkgfHwgdGhpcztcclxuICAgICAgICBpZiAoZGlyZWN0aW9uICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBfdGhpcy5fZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgX3RoaXMuX2RpcmVjdGlvbiA9IEVEaXJlY3Rpb24udXA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF90aGlzLl9zcGVlZCA9IHNwZWVkO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNb3ZpbmdPYmplY3QucHJvdG90eXBlLCBcImRpcmVjdGlvblwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9kaXJlY3Rpb247XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChkaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5fZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE1vdmluZ09iamVjdC5wcm90b3R5cGUuZml0VG9Cb3JkZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGZyYW1lID0gRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZTtcclxuICAgICAgICB2YXIgc2NyZWVuID0gRFJBV0lOR19DT05TVC5zaXplcy5zY3JlZW47XHJcbiAgICAgICAgdmFyIHNpemUgPSBnZXRTcHJpdGVTaXplKHRoaXMpO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5kaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgY2FzZSBFRGlyZWN0aW9uLmxlZnQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSBmcmFtZS5sZWZ0O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRURpcmVjdGlvbi51cDpcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSA9IGZyYW1lLnRvcDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEVEaXJlY3Rpb24uZG93bjpcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSA9IHNjcmVlbi5oZWlnaHQgKyBmcmFtZS50b3AgLSBzaXplLmhlaWdodDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEVEaXJlY3Rpb24ucmlnaHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSBzY3JlZW4ud2lkdGggKyBmcmFtZS5sZWZ0IC0gc2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBNb3ZpbmdPYmplY3QucHJvdG90eXBlLmZpdFRvT2JqZWN0ID0gZnVuY3Rpb24gKG9iamVjdCwgZ2FwKSB7XHJcbiAgICAgICAgaWYgKGdhcCA9PT0gdm9pZCAwKSB7IGdhcCA9IDA7IH1cclxuICAgICAgICB2YXIgc2l6ZSA9IGdldFNwcml0ZVNpemUodGhpcyk7XHJcbiAgICAgICAgdmFyIHRhbmtTaXplID0gZ2V0T2JqZWN0U2l6ZSh0aGlzLm9iamVjdFR5cGUpO1xyXG4gICAgICAgIHZhciBvYmplY3RTaXplID0gZ2V0U3ByaXRlU2l6ZShvYmplY3QpO1xyXG4gICAgICAgIGlmIChvYmplY3Qub2JqZWN0VHlwZSA9PT0gXCJCTE9DS1wiIC8qIEJMT0NLICovKSB7XHJcbiAgICAgICAgICAgIHZhciBibG9jayA9IG9iamVjdDtcclxuICAgICAgICAgICAgdmFyIGNlbGxTaXplID0ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IG9iamVjdFNpemUud2lkdGggLyA0LFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBvYmplY3RTaXplLmhlaWdodCAvIDRcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdmFyIGFkanVzdEdhcCA9IGNlbGxTaXplLndpZHRoICogLjg7XHJcbiAgICAgICAgICAgIHZhciBjb2xsaXNpb25fY2VsbHMgPSBCbG9ja0NvbGxpc2lvblRlc3QoYmxvY2ssIHRoaXMpO1xyXG4gICAgICAgICAgICB2YXIgeFBvcyA9IGNvbGxpc2lvbl9jZWxscy5tYXAoZnVuY3Rpb24gKHBvaW50KSB7IHJldHVybiBwb2ludC54OyB9KTtcclxuICAgICAgICAgICAgdmFyIHlQb3MgPSBjb2xsaXNpb25fY2VsbHMubWFwKGZ1bmN0aW9uIChwb2ludCkgeyByZXR1cm4gcG9pbnQueTsgfSk7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5kaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgRURpcmVjdGlvbi5sZWZ0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh4UG9zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHlQb3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueSArIHRhbmtTaXplLmhlaWdodCAtIG1pbih5UG9zKSA8PSBhZGp1c3RHYXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSBtaW4oeVBvcykgLSB0YW5rU2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChtYXgoeVBvcykgKyBjZWxsU2l6ZS5oZWlnaHQgLSB0aGlzLnBvc2l0aW9uLnkgPD0gYWRqdXN0R2FwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gbWF4KHlQb3MpICsgY2VsbFNpemUuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IG1heCh4UG9zKSArIG9iamVjdFNpemUud2lkdGggLyA0ICsgZ2FwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgRURpcmVjdGlvbi51cDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoeVBvcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4UG9zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggKyB0YW5rU2l6ZS53aWR0aCAtIG1pbih4UG9zKSA8PSBhZGp1c3RHYXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSBvYmplY3QucG9zaXRpb24ueCAtIHRhbmtTaXplLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobWF4KHhQb3MpICsgY2VsbFNpemUud2lkdGggLSB0aGlzLnBvc2l0aW9uLnggPD0gYWRqdXN0R2FwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gbWF4KHhQb3MpICsgY2VsbFNpemUud2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gbWF4KHlQb3MpICsgY2VsbFNpemUuaGVpZ2h0ICsgZ2FwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgRURpcmVjdGlvbi5kb3duOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh5UG9zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHhQb3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueCArIHRhbmtTaXplLndpZHRoIC0gbWluKHhQb3MpIDw9IGFkanVzdEdhcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IG1pbih4UG9zKSAtIHRhbmtTaXplLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobWF4KHhQb3MpICsgY2VsbFNpemUud2lkdGggLSB0aGlzLnBvc2l0aW9uLnggPD0gYWRqdXN0R2FwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gbWF4KHhQb3MpICsgY2VsbFNpemUud2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gbWluKHlQb3MpIC0gc2l6ZS5oZWlnaHQgLSBnYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBFRGlyZWN0aW9uLnJpZ2h0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh4UG9zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHlQb3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueSArIHRhbmtTaXplLmhlaWdodCAtIG1pbih5UG9zKSA8PSBhZGp1c3RHYXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSBtaW4oeVBvcykgLSB0YW5rU2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChtYXgoeVBvcykgKyBjZWxsU2l6ZS5oZWlnaHQgLSB0aGlzLnBvc2l0aW9uLnkgPD0gYWRqdXN0R2FwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gbWF4KHlQb3MpICsgY2VsbFNpemUuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IG1pbih4UG9zKSAtIHNpemUud2lkdGggLSBnYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEVEaXJlY3Rpb24ubGVmdDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSBvYmplY3QucG9zaXRpb24ueCArIG9iamVjdFNpemUud2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEVEaXJlY3Rpb24udXA6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gb2JqZWN0LnBvc2l0aW9uLnkgKyBvYmplY3RTaXplLmhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgRURpcmVjdGlvbi5kb3duOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSA9IG9iamVjdC5wb3NpdGlvbi55IC0gc2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEVEaXJlY3Rpb24ucmlnaHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gb2JqZWN0LnBvc2l0aW9uLnggLSBzaXplLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBNb3ZpbmdPYmplY3Q7XHJcbn0oR2FtZU9iamVjdCkpO1xyXG5leHBvcnQgZGVmYXVsdCBNb3ZpbmdPYmplY3Q7XHJcbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVNb3ZlKHBvc2l0aW9uLCBkaXJlY3Rpb24sIHNwZWVkKSB7XHJcbiAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xyXG4gICAgICAgIGNhc2UgRURpcmVjdGlvbi51cDpcclxuICAgICAgICAgICAgcG9zaXRpb24ueSAtPSBzcGVlZDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBFRGlyZWN0aW9uLnJpZ2h0OlxyXG4gICAgICAgICAgICBwb3NpdGlvbi54ICs9IHNwZWVkO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEVEaXJlY3Rpb24uZG93bjpcclxuICAgICAgICAgICAgcG9zaXRpb24ueSArPSBzcGVlZDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBFRGlyZWN0aW9uLmxlZnQ6XHJcbiAgICAgICAgICAgIHBvc2l0aW9uLnggLT0gc3BlZWQ7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59XHJcbiIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5pbXBvcnQgVGFua09iamVjdCBmcm9tIFwiLi9UYW5rT2JqZWN0XCI7XHJcbmltcG9ydCB7IEVuZW15VHlwZSwgRW5lbXlTY29yZU1hcCB9IGZyb20gXCIuL0VudW0vRVRhbmtUeXBlXCI7XHJcbmltcG9ydCBFRGlyZWN0aW9uIGZyb20gXCIuLi8uLi9VdGlscy9FRGlyZWN0aW9uXCI7XHJcbmltcG9ydCB7IFNjb3JlVG9BbmltYXRpb24gfSBmcm9tIFwiLi9FbnVtL0VBbmltYXRpb25UeXBlXCI7XHJcbmltcG9ydCB7IGdldFJhbmRvbUVudW0sIGdldFJhbmRvbVJhbmdlIH0gZnJvbSBcIi4uLy4uL1V0aWxzL1V0aWxzXCI7XHJcbmltcG9ydCBCdWxsZXRPYmplY3QgZnJvbSBcIi4vQnVsbGV0T2JqZWN0XCI7XHJcbmV4cG9ydCB2YXIgQ29sb3JTZXF1ZW5jZURlZmluaXRpb25zID0ge1xyXG4gICAgREVGQVVMVDogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2VxdWVuY2U6IFtcIldISVRFXCIgLyogV0hJVEUgKi9dLFxyXG4gICAgICAgICAgICBkZWxheTogLTEsXHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuICAgIEFSTU9VUkVEOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzZXF1ZW5jZTogW1wiV0hJVEVcIiAvKiBXSElURSAqL10sXHJcbiAgICAgICAgICAgIGRlbGF5OiAyNSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2VxdWVuY2U6IFtcIkdSRUVOXCIgLyogR1JFRU4gKi8sIFwiWUVMTE9XXCIgLyogWUVMTE9XICovXSxcclxuICAgICAgICAgICAgZGVsYXk6IDI1LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzZXF1ZW5jZTogW1wiR1JFRU5cIiAvKiBHUkVFTiAqLywgXCJXSElURVwiIC8qIFdISVRFICovXSxcclxuICAgICAgICAgICAgZGVsYXk6IDI1LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzZXF1ZW5jZTogW1wiWUVMTE9XXCIgLyogWUVMTE9XICovLCBcIldISVRFXCIgLyogV0hJVEUgKi9dLFxyXG4gICAgICAgICAgICBkZWxheTogMjUsXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBJVEVNOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzZXF1ZW5jZTogW1wiV0hJVEVcIiAvKiBXSElURSAqLywgXCJNQUdFTlRBXCIgLyogTUFHRU5UQSAqL10sXHJcbiAgICAgICAgICAgIGRlbGF5OiAxMDAsXHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG59O1xyXG5leHBvcnQgdmFyIEFJX0FDVElPTl9ERUxBWSA9IDUwMDtcclxuZXhwb3J0IHZhciBBSV9GSVJFX0RFTEFZID0gMTAwMDtcclxudmFyIFRhbmtBSU9CamVjdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhUYW5rQUlPQmplY3QsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBUYW5rQUlPQmplY3QoZ2FtZSwgZW5lbXlUeXBlLCBoYXNJdGVtLCBwb3NpdGlvbiwgZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgbGV2ZWw7XHJcbiAgICAgICAgdmFyIGhwID0gMTtcclxuICAgICAgICBzd2l0Y2ggKGVuZW15VHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIEVuZW15VHlwZS5ERUZBVUxUOlxyXG4gICAgICAgICAgICAgICAgbGV2ZWwgPSAwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRW5lbXlUeXBlLlNQRUVEOlxyXG4gICAgICAgICAgICAgICAgbGV2ZWwgPSAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRW5lbXlUeXBlLlBPV0VSOlxyXG4gICAgICAgICAgICAgICAgbGV2ZWwgPSAyO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRW5lbXlUeXBlLkFSTU9VUkVEOlxyXG4gICAgICAgICAgICAgICAgbGV2ZWwgPSAzO1xyXG4gICAgICAgICAgICAgICAgaHAgPSA0O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZ2FtZSwgXCJFTkVNWV9UQU5LXCIgLyogRU5FTVlfVEFOSyAqLywgcG9zaXRpb24sIGRpcmVjdGlvbiwgXCJXSElURVwiIC8qIFdISVRFICovLCBsZXZlbCkgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5sYXN0Q2hhbmdlZCA9IDA7XHJcbiAgICAgICAgX3RoaXMuX2VuZW15VHlwZSA9IGVuZW15VHlwZTtcclxuICAgICAgICBpZiAoX3RoaXMuX2VuZW15VHlwZSA9PT0gRW5lbXlUeXBlLlNQRUVEKSB7XHJcbiAgICAgICAgICAgIF90aGlzLl9zcGVlZCA9IDM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF90aGlzLl9oYXNJdGVtID0gaGFzSXRlbTtcclxuICAgICAgICBfdGhpcy5fY29sb3JJbmRleCA9IDA7XHJcbiAgICAgICAgX3RoaXMuX2hwID0gaHA7XHJcbiAgICAgICAgX3RoaXMuX2xhc3RUdXJuZWQgPSAwO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUYW5rQUlPQmplY3QucHJvdG90eXBlLCBcImNvbG9ySW5kZXhcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY29sb3JJbmRleDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBUYW5rQUlPQmplY3QucHJvdG90eXBlLm5leHRDb2xvckluZGV4ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBkZWZpbml0aW9uID0gdGhpcy5nZXRDb2xvckRlZmluaXRpb24oKTtcclxuICAgICAgICB2YXIgbWF4SW5kZXggPSBkZWZpbml0aW9uLnNlcXVlbmNlLmxlbmd0aDtcclxuICAgICAgICBpZiAodGhpcy5fY29sb3JJbmRleCArIDEgPj0gbWF4SW5kZXgpIHtcclxuICAgICAgICAgICAgdGhpcy5fY29sb3JJbmRleCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9jb2xvckluZGV4Kys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb2xvckluZGV4O1xyXG4gICAgfTtcclxuICAgIFRhbmtBSU9CamVjdC5wcm90b3R5cGUuZ2V0Q29sb3JEZWZpbml0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBrZXk7XHJcbiAgICAgICAgdmFyIGluZGV4O1xyXG4gICAgICAgIGlmICh0aGlzLl9oYXNJdGVtID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGtleSA9ICdJVEVNJztcclxuICAgICAgICAgICAgaW5kZXggPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLl9lbmVteVR5cGUgPT09IEVuZW15VHlwZS5BUk1PVVJFRCkge1xyXG4gICAgICAgICAgICBrZXkgPSB0aGlzLl9lbmVteVR5cGUudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgaW5kZXggPSB0aGlzLl9ocCAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBrZXkgPSAnREVGQVVMVCc7XHJcbiAgICAgICAgICAgIGluZGV4ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIENvbG9yU2VxdWVuY2VEZWZpbml0aW9uc1trZXldW2luZGV4XTtcclxuICAgIH07XHJcbiAgICBUYW5rQUlPQmplY3QucHJvdG90eXBlLmFjdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbm93ID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgaWYgKG5vdyAtIHRoaXMuX2xhc3RGaXJlZCA+IEFJX0ZJUkVfREVMQVkpIHtcclxuICAgICAgICAgICAgdGhpcy5maXJlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2xhc3RGaXJlZCA9IG5vdztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5vdyAtIHRoaXMuX2xhc3RUdXJuZWQgPiBBSV9BQ1RJT05fREVMQVkpIHtcclxuICAgICAgICAgICAgdmFyIHJhbmRvbSA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgIHZhciBkaXJlY3Rpb24gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIGlmIChyYW5kb20gPCAuNSkge1xyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uID0gdGhpcy5maW5kRWFnbGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChyYW5kb20gPCAuOCkge1xyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uID0gdGhpcy5maW5kUGxheWVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPSBnZXRSYW5kb21FbnVtKEVEaXJlY3Rpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RpcmVjdGlvbiA9IGRpcmVjdGlvbjtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xhc3RUdXJuZWQgPSBub3c7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tb3ZlKCk7XHJcbiAgICB9O1xyXG4gICAgVGFua0FJT0JqZWN0LnByb3RvdHlwZS5maW5kRWFnbGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGVhZ2xlID0gdGhpcy5fZ2FtZS5vYmplY3RzLmZpbmQoZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgICAgICAgICBpZiAob2JqZWN0Lm9iamVjdFR5cGUgPT09IFwiQkxPQ0tcIiAvKiBCTE9DSyAqLykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdC5ibG9ja1R5cGUgPT09IFwiRUFHTEVcIiAvKiBFQUdMRSAqLztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciB4RGlmZiA9IHRoaXMucG9zaXRpb24ueCAtIGVhZ2xlLnBvc2l0aW9uLng7XHJcbiAgICAgICAgdmFyIHlEaWZmID0gdGhpcy5wb3NpdGlvbi55IC0gZWFnbGUucG9zaXRpb24ueTtcclxuICAgICAgICBpZiAoeERpZmYgPCB5RGlmZikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi54ID4gZWFnbGUucG9zaXRpb24ueCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEVEaXJlY3Rpb24ubGVmdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBFRGlyZWN0aW9uLnJpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi55ID4gZWFnbGUucG9zaXRpb24ueSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEVEaXJlY3Rpb24udXA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gRURpcmVjdGlvbi5kb3duO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFRhbmtBSU9CamVjdC5wcm90b3R5cGUuZmluZFBsYXllciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcGxheWVycyA9IHRoaXMuX2dhbWUub2JqZWN0cy5maWx0ZXIoZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgICAgICAgICBpZiAob2JqZWN0Lm9iamVjdFR5cGUgPT09IFwiVEFOS1wiIC8qIFRBTksgKi8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvYmplY3QudGFua1R5cGUgPT09IFwiUExBWUVSX1RBTktcIiAvKiBQTEFZRVJfVEFOSyAqLztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciBwbGF5ZXIgPSBwbGF5ZXJzW2dldFJhbmRvbVJhbmdlKDAsIHBsYXllcnMubGVuZ3RoIC0gMSldO1xyXG4gICAgICAgIGlmIChwbGF5ZXIgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHhEaWZmID0gdGhpcy5wb3NpdGlvbi54IC0gcGxheWVyLnBvc2l0aW9uLng7XHJcbiAgICAgICAgdmFyIHlEaWZmID0gdGhpcy5wb3NpdGlvbi55IC0gcGxheWVyLnBvc2l0aW9uLnk7XHJcbiAgICAgICAgaWYgKHhEaWZmID4geURpZmYpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueCA+IHBsYXllci5wb3NpdGlvbi54KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gRURpcmVjdGlvbi5sZWZ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEVEaXJlY3Rpb24ucmlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgPiBwbGF5ZXIucG9zaXRpb24ueSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEVEaXJlY3Rpb24udXA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gRURpcmVjdGlvbi5kb3duO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFRhbmtBSU9CamVjdC5wcm90b3R5cGUuaGl0ID0gZnVuY3Rpb24gKGV2ZW50T3JpZ2luKSB7XHJcbiAgICAgICAgaWYgKGV2ZW50T3JpZ2luLm9iamVjdFR5cGUgPT09IFwiQlVMTEVUXCIgLyogQlVMTEVUICovKSB7XHJcbiAgICAgICAgICAgIHZhciBidWxsZXQgPSBldmVudE9yaWdpbjtcclxuICAgICAgICAgICAgaWYgKGJ1bGxldC5wYXJlbnQudGFua1R5cGUgPT09IFwiRU5FTVlfVEFOS1wiIC8qIEVORU1ZX1RBTksgKi8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9ocCAtPSAxO1xyXG4gICAgICAgIGlmICh0aGlzLl9ocCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveShldmVudE9yaWdpbik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFRhbmtBSU9CamVjdC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uIChldmVudE9yaWdpbikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgICAgICBpZiAodGhpcy5faGFzSXRlbSkge1xyXG4gICAgICAgICAgICB0aGlzLl9nYW1lLnNwYXduSXRlbSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXZlbnRPcmlnaW4gJiYgZXZlbnRPcmlnaW4gaW5zdGFuY2VvZiBCdWxsZXRPYmplY3QpIHtcclxuICAgICAgICAgICAgdmFyIHBsYXllciA9IGV2ZW50T3JpZ2luLnBhcmVudDtcclxuICAgICAgICAgICAgdmFyIHBsYXllckluZGV4ID0gcGxheWVyID09PSB0aGlzLl9nYW1lLm1haW5UYW5rID8gMCA6IDE7XHJcbiAgICAgICAgICAgIHRoaXMuX2dhbWUuZ2FtZURhdGEucGxheWVyRGF0YVtwbGF5ZXJJbmRleF0uZGVzdHJveWVkVGFua1t0aGlzLl9lbmVteVR5cGVdKys7XHJcbiAgICAgICAgICAgIHRoaXMuX2dhbWUuZ2FtZURhdGEucGxheWVyRGF0YVtwbGF5ZXJJbmRleF0uc2NvcmUgKz0gdGhpcy5nZXRUYW5rU2NvcmUoKTtcclxuICAgICAgICAgICAgLy8gVE9ETyBwbGF5ZXIgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2dhbWUuc3RhcnRBbmltYXRpb24odGhpcywgXCJFWFBMT1NJT05fU01BTExcIiAvKiBFWFBMT1NJT05fU01BTEwgKi8sIG51bGwsIGZ1bmN0aW9uIChhbmltYXRpb24pIHtcclxuICAgICAgICAgICAgX3RoaXMuX2dhbWUuc3RhcnRBbmltYXRpb24oYW5pbWF0aW9uLmFuaW1hdGlvblBvaW50LCBcIkVYUExPU0lPTl9MQVJHRVwiIC8qIEVYUExPU0lPTl9MQVJHRSAqLywgbnVsbCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNjb3JlQW5pbWF0aW9uID0gU2NvcmVUb0FuaW1hdGlvbihFbmVteVNjb3JlTWFwLmdldChfdGhpcy5fZW5lbXlUeXBlKSk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5fZ2FtZS5zdGFydEFuaW1hdGlvbihhbmltYXRpb24uYW5pbWF0aW9uUG9pbnQsIHNjb3JlQW5pbWF0aW9uLCBudWxsLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuX2dhbWUuc3Bhd25UYW5rKF90aGlzLnRhbmtUeXBlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBUYW5rQUlPQmplY3QucHJvdG90eXBlLmdldFRhbmtTY29yZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuX2VuZW15VHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIEVuZW15VHlwZS5ERUZBVUxUOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDEwMDtcclxuICAgICAgICAgICAgY2FzZSBFbmVteVR5cGUuU1BFRUQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMjAwO1xyXG4gICAgICAgICAgICBjYXNlIEVuZW15VHlwZS5QT1dFUjpcclxuICAgICAgICAgICAgICAgIHJldHVybiAzMDA7XHJcbiAgICAgICAgICAgIGNhc2UgRW5lbXlUeXBlLkFSTU9VUkVEOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDQwMDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFRhbmtBSU9CamVjdDtcclxufShUYW5rT2JqZWN0KSk7XHJcbmV4cG9ydCBkZWZhdWx0IFRhbmtBSU9CamVjdDtcclxuIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbmltcG9ydCB7IE1BSU5fVEFOS19JRCB9IGZyb20gXCIuLi9HYW1lXCI7XHJcbmltcG9ydCBNb3ZpbmdPYmplY3QsIHsgY2FsY3VsYXRlTW92ZSB9IGZyb20gXCIuL01vdmluZ09iamVjdFwiO1xyXG5pbXBvcnQgRURpcmVjdGlvbiBmcm9tIFwiLi4vLi4vVXRpbHMvRURpcmVjdGlvblwiO1xyXG5pbXBvcnQgQnVsbGV0T2JqZWN0LCB7IEJVTExFVF9TTE9XLCBCVUxMRVRfRkFTVCB9IGZyb20gXCIuL0J1bGxldE9iamVjdFwiO1xyXG5pbXBvcnQgU1BSVElFX0RFRiBmcm9tIFwiLi4vLi4vUmVuZGVyL1Nwcml0ZS9TcHJpdGVEZWZpbml0aW9uXCI7XHJcbmltcG9ydCB7IEd1aWQgfSBmcm9tIFwiLi4vLi4vVXRpbHMvVXRpbHNcIjtcclxuZXhwb3J0IHZhciBUQU5LX1NQRUVEID0gMjtcclxuZXhwb3J0IHZhciBUQU5LX0ZJUkVfREVMQVkgPSAxMDA7XHJcbnZhciBUYW5rT2JqZWN0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFRhbmtPYmplY3QsIF9zdXBlcik7XHJcbiAgICAvLyNyZWdpb24gY29uc3RydWN0b3JcclxuICAgIGZ1bmN0aW9uIFRhbmtPYmplY3QoZ2FtZSwgdGFua1R5cGUsIHBvc2l0aW9uLCBkaXJlY3Rpb24sIHRhbmtDb2xvciwgdGFua0xldmVsLCBpZCkge1xyXG4gICAgICAgIGlmICh0YW5rTGV2ZWwgPT09IHZvaWQgMCkgeyB0YW5rTGV2ZWwgPSAxOyB9XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZ2FtZSwgXCJUQU5LXCIgLyogVEFOSyAqLywgcG9zaXRpb24sIGRpcmVjdGlvbiwgVEFOS19TUEVFRCwgaWQgIT0gbnVsbCA/IGlkIDogR3VpZC5uZXdHdWlkKCkpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuX2lzSW52aW5jaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIF90aGlzLl90YW5rVHlwZSA9IHRhbmtUeXBlO1xyXG4gICAgICAgIF90aGlzLl90YW5rQ29sb3IgPSB0YW5rQ29sb3I7XHJcbiAgICAgICAgX3RoaXMuX3RhbmtMZXZlbCA9IHRhbmtMZXZlbDtcclxuICAgICAgICBfdGhpcy5fYnVsbGV0cyA9IFtdO1xyXG4gICAgICAgIF90aGlzLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICBfdGhpcy5fbGFzdEZpcmVkID0gMDtcclxuICAgICAgICBfdGhpcy5zcGF3bigpO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUYW5rT2JqZWN0LnByb3RvdHlwZSwgXCJ0YW5rQ29sb3JcIiwge1xyXG4gICAgICAgIC8vI2VuZHJlZ2lvblxyXG4gICAgICAgIC8vI3JlZ2lvbiBnZXR0ZXIsIHNldHRlclxyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdGFua0NvbG9yO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gVE9ETzogUkVNT1ZFIFdIRU4gREVQTE9ZXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoY29sb3IpIHtcclxuICAgICAgICAgICAgdGhpcy5fdGFua0NvbG9yID0gY29sb3I7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRhbmtPYmplY3QucHJvdG90eXBlLCBcInRhbmtUeXBlXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RhbmtUeXBlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUYW5rT2JqZWN0LnByb3RvdHlwZSwgXCJpc0ludmluY2libGVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faXNJbnZpbmNpYmxlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUYW5rT2JqZWN0LnByb3RvdHlwZSwgXCJ0YW5rTGV2ZWxcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdGFua0xldmVsO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gVE9ETzogUkVNT1ZFIFdIRU4gREVQTE9ZXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobGV2ZWwpIHtcclxuICAgICAgICAgICAgdGhpcy5fdGFua0xldmVsID0gbGV2ZWw7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgLy8jZW5kcmVnaW9uXHJcbiAgICAvLyNyZWdpb24gaW1wbGVtZW50cyBvZiBNb3ZpbmdPYmplY3RcdFxyXG4gICAgVGFua09iamVjdC5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGNhbGN1bGF0ZU1vdmUodGhpcy5wb3NpdGlvbiwgdGhpcy5fZGlyZWN0aW9uLCB0aGlzLl9zcGVlZCk7XHJcbiAgICAgICAgdGhpcy5fZ2FtZS5sb2coXCJUQU5LIFtcIiArIHRoaXMuaWQgKyBcIl0gTU9WRUQgLT4gWyB4OiBcIiArIHRoaXMucG9zaXRpb24ueCArIFwiLCB5OiBcIiArIHRoaXMucG9zaXRpb24ueSArIFwiIF1cIik7XHJcbiAgICAgICAgLy8gdGVzdCBtb3ZlbWVudCBpcyB2YWxpZFxyXG4gICAgICAgIHZhciB0ZXN0X3Zpc2libGUgPSB0aGlzLl9nYW1lLnRlc3RWaXNpYmlsaXR5KHRoaXMpO1xyXG4gICAgICAgIHZhciB0ZXN0X2NvbGxpc2lvbiA9IHRoaXMuX2dhbWUuY29sbGlzaW9uVGVzdCh0aGlzKTtcclxuICAgICAgICBpZiAodGVzdF92aXNpYmxlID09IGZhbHNlICYmIHRlc3RfY29sbGlzaW9uLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZml0VG9Cb3JkZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGVzdF9jb2xsaXNpb24ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0ZXN0X2NvbGxpc2lvbi5mb3JFYWNoKGZ1bmN0aW9uIChvYmplY3QpIHtcclxuICAgICAgICAgICAgICAgIGlmIChvYmplY3Qub2JqZWN0VHlwZSA9PT0gXCJJVEVNXCIgLyogSVRFTSAqLykge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5oaXQoX3RoaXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZml0VG9PYmplY3Qob2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5fZ2FtZS5sb2coXCJUQU5LIFtcIiArIF90aGlzLmlkICsgXCJdIE1PVkVTIC0+IEJMT0NLRUQhISBbIHg6IFwiICsgX3RoaXMucG9zaXRpb24ueCArIFwiLCB5OiBcIiArIF90aGlzLnBvc2l0aW9uLnkgKyBcIiBdXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5uZXh0U3ByaXRlUG9zaXRpb24oKTtcclxuICAgIH07XHJcbiAgICBUYW5rT2JqZWN0LnByb3RvdHlwZS5oaXQgPSBmdW5jdGlvbiAoZXZlbnRPcmlnaW4pIHtcclxuICAgICAgICBpZiAodGhpcy5faXNJbnZpbmNpYmxlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgICB9O1xyXG4gICAgLy8jZW5kcmVnaW9uXHJcbiAgICAvLyNyZWdpb24gcHVibGljIG1ldGhvZHNcclxuICAgIFRhbmtPYmplY3QucHJvdG90eXBlLmZpcmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG5vdyA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIGlmIChub3cgLSB0aGlzLl9sYXN0RmlyZWQgPj0gVEFOS19GSVJFX0RFTEFZKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xhc3RGaXJlZCA9IG5vdztcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVCdWxsZXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgVGFua09iamVjdC5wcm90b3R5cGUuc3Bhd24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLl9nYW1lLnN0YXJ0QW5pbWF0aW9uKHRoaXMsIFwiU1BBV05cIiAvKiBTUEFXTiAqLywgbnVsbCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBfdGhpcy52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKF90aGlzID09IF90aGlzLl9nYW1lLm1haW5UYW5rKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5pbnZpbmNpYmxlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBUYW5rT2JqZWN0LnByb3RvdHlwZS5pbnZpbmNpYmxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5faXNJbnZpbmNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9nYW1lLnN0YXJ0QW5pbWF0aW9uKHRoaXMsIFwiSU5WSU5DSUJMRVwiIC8qIElOVklOQ0lCTEUgKi8sIG51bGwsIGZ1bmN0aW9uIChhbmltKSB7XHJcbiAgICAgICAgICAgIF90aGlzLl9pc0ludmluY2libGUgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBUYW5rT2JqZWN0LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgICAgICB0aGlzLl9nYW1lLnN0YXJ0QW5pbWF0aW9uKHRoaXMsIFwiRVhQTE9TSU9OX1NNQUxMXCIgLyogRVhQTE9TSU9OX1NNQUxMICovLCBudWxsLCBmdW5jdGlvbiAoYW5pbWF0aW9uKSB7XHJcbiAgICAgICAgICAgIF90aGlzLl9nYW1lLnN0YXJ0QW5pbWF0aW9uKGFuaW1hdGlvbi5hbmltYXRpb25Qb2ludCwgXCJFWFBMT1NJT05fTEFSR0VcIiAvKiBFWFBMT1NJT05fTEFSR0UgKi8sIG51bGwsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5pZCA9PT0gTUFJTl9UQU5LX0lEKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuX2dhbWUuc3Bhd25UYW5rKF90aGlzLnRhbmtUeXBlLCBmYWxzZSwgMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5fZ2FtZS5zcGF3blRhbmsoX3RoaXMudGFua1R5cGUsIGZhbHNlLCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgVGFua09iamVjdC5wcm90b3R5cGUubGV2ZWx1cCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy50YW5rTGV2ZWwgPCAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFua0xldmVsKys7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFRhbmtPYmplY3QucHJvdG90eXBlLmNyZWF0ZUJ1bGxldCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy50YW5rTGV2ZWwgPCAyICYmIHRoaXMuX2J1bGxldHMubGVuZ3RoID49IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnRhbmtMZXZlbCA8IDQgJiYgdGhpcy5fYnVsbGV0cy5sZW5ndGggPj0gMikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBwb3NpdGlvbjtcclxuICAgICAgICB2YXIgdGFua1Nwcml0ZSA9IFNQUlRJRV9ERUYuVEFOS1t0aGlzLnRhbmtDb2xvcl1bdGhpcy50YW5rTGV2ZWxdW3RoaXMuZGlyZWN0aW9uXVt0aGlzLnNwcml0ZVBvc2l0aW9uXTtcclxuICAgICAgICB2YXIgYnVsbGV0U3ByaXRlID0gU1BSVElFX0RFRi5CVUxMRVRbdGhpcy5kaXJlY3Rpb25dO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5kaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgY2FzZSBFRGlyZWN0aW9uLnVwOlxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeDogdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5nZXRNaWRkbGUodGFua1Nwcml0ZSwgYnVsbGV0U3ByaXRlLCB0aGlzLmRpcmVjdGlvbiksXHJcbiAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5wb3NpdGlvbi55XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRURpcmVjdGlvbi5yaWdodDpcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IHRoaXMucG9zaXRpb24ueCArIHRhbmtTcHJpdGUuc2l6ZS53aWR0aCxcclxuICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmdldE1pZGRsZSh0YW5rU3ByaXRlLCBidWxsZXRTcHJpdGUsIHRoaXMuZGlyZWN0aW9uKVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEVEaXJlY3Rpb24uZG93bjpcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IHRoaXMucG9zaXRpb24ueCArIHRoaXMuZ2V0TWlkZGxlKHRhbmtTcHJpdGUsIGJ1bGxldFNwcml0ZSwgdGhpcy5kaXJlY3Rpb24pLFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IHRoaXMucG9zaXRpb24ueSArIHRhbmtTcHJpdGUuc2l6ZS5oZWlnaHRcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBFRGlyZWN0aW9uLmxlZnQ6XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICB4OiB0aGlzLnBvc2l0aW9uLngsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5nZXRNaWRkbGUodGFua1Nwcml0ZSwgYnVsbGV0U3ByaXRlLCB0aGlzLmRpcmVjdGlvbilcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGJ1bGxldFNwZWVkO1xyXG4gICAgICAgIGlmICh0aGlzLnRhbmtMZXZlbCA9PSAwKSB7XHJcbiAgICAgICAgICAgIGJ1bGxldFNwZWVkID0gQlVMTEVUX1NMT1c7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMudGFua0xldmVsIDwgNCkge1xyXG4gICAgICAgICAgICBidWxsZXRTcGVlZCA9IEJVTExFVF9GQVNUO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYnVsbGV0ID0gbmV3IEJ1bGxldE9iamVjdCh0aGlzLl9nYW1lLCB0aGlzLCBwb3NpdGlvbiwgdGhpcy5kaXJlY3Rpb24sIGJ1bGxldFNwZWVkLCBHdWlkLm5ld0d1aWQoKSk7XHJcbiAgICAgICAgdGhpcy5fZ2FtZS5pbnNlcnRPYmplY3QoYnVsbGV0KTtcclxuICAgICAgICB0aGlzLl9idWxsZXRzLnB1c2goYnVsbGV0LmlkKTtcclxuICAgIH07XHJcbiAgICBUYW5rT2JqZWN0LnByb3RvdHlwZS5yZW1vdmVCdWxsZXQgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICB2YXIgZm91bmQgPSB0aGlzLl9idWxsZXRzLmZpbmQoZnVuY3Rpb24gKGJ1bGxldCkgeyByZXR1cm4gYnVsbGV0ID09PSBpZDsgfSk7XHJcbiAgICAgICAgdmFyIGlkeCA9IHRoaXMuX2J1bGxldHMuaW5kZXhPZihmb3VuZCk7XHJcbiAgICAgICAgaWYgKGlkeCA+IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2J1bGxldHMuc3BsaWNlKGlkeCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8vI2VuZHJlZ2lvblxyXG4gICAgVGFua09iamVjdC5wcm90b3R5cGUuZ2V0TWlkZGxlID0gZnVuY3Rpb24gKHBhcmVudCwgY2hpbGQsIGRpcmVjdGlvbikge1xyXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09IEVEaXJlY3Rpb24udXAgfHwgZGlyZWN0aW9uID09PSBFRGlyZWN0aW9uLmRvd24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcmVudC5zaXplLndpZHRoIC8gMiAtIGNoaWxkLnNpemUud2lkdGggLyAyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcmVudC5zaXplLmhlaWdodCAvIDIgLSBjaGlsZC5zaXplLmhlaWdodCAvIDI7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBUYW5rT2JqZWN0O1xyXG59KE1vdmluZ09iamVjdCkpO1xyXG5leHBvcnQgZGVmYXVsdCBUYW5rT2JqZWN0O1xyXG4iLCJpbXBvcnQgU1BSVElFX0RFRiBmcm9tIFwiLi9TcHJpdGUvU3ByaXRlRGVmaW5pdGlvblwiO1xyXG5pbXBvcnQgeyBBbmltYXRpb25EZWZhdWx0cyB9IGZyb20gXCIuLi9HYW1lL09iamVjdC9FbnVtL0VBbmltYXRpb25UeXBlXCI7XHJcbmltcG9ydCB7IGdldFNwcml0ZURhdGEsIGdldFN5c3RlbVNwcml0ZSwgZ2V0T2JqZWN0U2l6ZSwgZ2V0QW5pbWF0aW9uU2l6ZSB9IGZyb20gXCIuL1Nwcml0ZS9TcHJpdGVEYXRhXCI7XHJcbmltcG9ydCBFRGlyZWN0aW9uIGZyb20gXCIuLi9VdGlscy9FRGlyZWN0aW9uXCI7XHJcbmltcG9ydCB7IGdldFJhbmRvbVJhbmdlIH0gZnJvbSBcIi4uL1V0aWxzL1V0aWxzXCI7XHJcbmltcG9ydCBUYW5rQUlPQmplY3QgZnJvbSBcIi4uL0dhbWUvT2JqZWN0L1RhbmtBSU9iamVjdFwiO1xyXG5pbXBvcnQgXCIuLi9SZXNvdXJjZXMvUGl4ZWxFbXVsYXRvci14cTA4LnR0ZlwiO1xyXG5leHBvcnQgdmFyIE1BWF9GUFMgPSA2MDtcclxuZXhwb3J0IHZhciBNRU5VX01BWF9GUFMgPSAzMDtcclxuZXhwb3J0IHZhciBEUkFXSU5HX0NPTlNUID0ge1xyXG4gICAgY29sb3JzOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogXCIjMDAwMDAwXCIsXHJcbiAgICAgICAgYmFja2dyb3VuZF9mcmFtZTogXCIjNjM2MzYyXCIsXHJcbiAgICB9LFxyXG4gICAgc2l6ZXM6IHtcclxuICAgICAgICBmcmFtZToge1xyXG4gICAgICAgICAgICBsZWZ0OiAzMixcclxuICAgICAgICAgICAgdG9wOiAzMixcclxuICAgICAgICAgICAgYm90dG9tOiAzMixcclxuICAgICAgICAgICAgcmlnaHQ6IFNQUlRJRV9ERUYuU1lTVEVNLkZSQU1FLnNpemUud2lkdGhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNjcmVlbjoge1xyXG4gICAgICAgICAgICB3aWR0aDogMzIgKiAxMyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMiAqIDEzXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHBvc2l0aW9uczoge1xyXG4gICAgICAgIG1haW46IHtcclxuICAgICAgICAgICAgY3Vyc29yX3N0YXJ0OiAyNjVcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZGVidWc6IHtcclxuICAgICAgICBmb250OiB7XHJcbiAgICAgICAgICAgIHNpemU6IDEyLFxyXG4gICAgICAgICAgICBmb250OiAnc2FuLXNlcmlmJ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxudmFyIFJlbmRlcmVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUmVuZGVyZXIoZ2FtZSwgY2FudmFzLCBzcHJpdGVfbWFpbl9zcmMsIHNwcml0ZV90aXRsZV9zcmMpIHtcclxuICAgICAgICB0aGlzLl9mcHMgPSB7XHJcbiAgICAgICAgICAgIGZwc0ludGVydmFsOiAxMDAwIC8gTUFYX0ZQUyxcclxuICAgICAgICAgICAgbm93OiBwZXJmb3JtYW5jZS5ub3coKSxcclxuICAgICAgICAgICAgdGhlbjogcGVyZm9ybWFuY2Uubm93KCksXHJcbiAgICAgICAgICAgIGVsYXBzZWQ6IDBcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChjYW52YXMgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93ICdjYW52YXMgaXMgbnVsbCBvciB1bmRlZmluZWQnO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9jYW52YXMgPSBjYW52YXM7XHJcbiAgICAgICAgaWYgKGdhbWUgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93ICdnYW1lIGlzIG51bGwgb3IgdW5kZWZpbmVkJztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZ2FtZSA9IGdhbWU7XHJcbiAgICAgICAgdGhpcy5pbml0U2NyZWVuKCk7XHJcbiAgICAgICAgdGhpcy5sb2FkU3ByaXRlKHNwcml0ZV9tYWluX3NyYywgc3ByaXRlX3RpdGxlX3NyYyk7XHJcbiAgICB9XHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUubG9hZFNwcml0ZSA9IGZ1bmN0aW9uIChtYWluU3JjLCB0aXRsZVNyYykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5fbWFpblNwcml0ZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRoaXMuX3RpdGxlU3ByaXRlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgdGhpcy5fbWFpblNwcml0ZS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIF90aGlzLl90aXRsZVNwcml0ZS5zcmMgPSB0aXRsZVNyYztcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX3RpdGxlU3ByaXRlLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgX3RoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9tYWluU3ByaXRlLnNyYyA9IG1haW5TcmM7XHJcbiAgICB9O1xyXG4gICAgUmVuZGVyZXIucHJvdG90eXBlLmluaXRTY3JlZW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHNpemVzID0gRFJBV0lOR19DT05TVC5zaXplcztcclxuICAgICAgICB0aGlzLl9jYW52YXMud2lkdGggPSBzaXplcy5mcmFtZS5sZWZ0ICsgc2l6ZXMuZnJhbWUucmlnaHQgKyBzaXplcy5zY3JlZW4ud2lkdGg7XHJcbiAgICAgICAgdGhpcy5fY2FudmFzLmhlaWdodCA9IHNpemVzLmZyYW1lLnRvcCArIHNpemVzLmZyYW1lLmJvdHRvbSArIHNpemVzLnNjcmVlbi5oZWlnaHQ7XHJcbiAgICB9O1xyXG4gICAgUmVuZGVyZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7IF90aGlzLnJlbmRlcigpOyB9KTtcclxuICAgICAgICB2YXIgZnBzID0gdGhpcy5fZnBzO1xyXG4gICAgICAgIGZwcy5ub3cgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICBmcHMuZWxhcHNlZCA9IGZwcy5ub3cgLSBmcHMudGhlbjtcclxuICAgICAgICBpZiAoZnBzLmVsYXBzZWQgPiBmcHMuZnBzSW50ZXJ2YWwpIHtcclxuICAgICAgICAgICAgZnBzLnRoZW4gPSBmcHMubm93IC0gKGZwcy5lbGFwc2VkICUgZnBzLmZwc0ludGVydmFsKTtcclxuICAgICAgICAgICAgLy8gc3RhcnQgZHJhd2luZ1xyXG4gICAgICAgICAgICAvLyBnZXQgY29udGV4dFxyXG4gICAgICAgICAgICB2YXIgY3R4ID0gdGhpcy5fY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgICAgIC8vIGNsZWFyIHNjcmVlblxyXG4gICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGN0eC5jYW52YXMud2lkdGgsIGN0eC5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICAgICAgLy8gZHJhdyBiYWNrZ3JvdW5kc1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kKGN0eCk7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5fZ2FtZS5jdXJyZW50TWVudSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIk1BSU5cIiAvKiBNQUlOICovOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyTWFpbihjdHgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkdBTUVcIiAvKiBHQU1FICovOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyR2FtZShjdHgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIlNUQUdFXCIgLyogU1RBR0UgKi86XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJTdGFnZShjdHgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkNPTlNUUlVDVFwiIC8qIENPTlNUUlVDVCAqLzpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBkcmF3IGRlYnVnIGNvdW50ZXJcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2dhbWUuZGVidWcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd0RlYnVnQ291bnRlcihjdHgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogcmVuZGVyIG1haW4gc2NyZWVuXHJcbiAgICAgKiBAcGFyYW0gY3R4IGNvbnRleHRcclxuICAgICAqL1xyXG4gICAgUmVuZGVyZXIucHJvdG90eXBlLnJlbmRlck1haW4gPSBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgICAgdGhpcy5wcm9jZXNzTWFpbigpO1xyXG4gICAgICAgIHRoaXMuZHJhd09iamVjdHMoY3R4LCB0aGlzLl9nYW1lLm9iamVjdHMpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogcHJvY2VzcyBtYWluIHNjcmVlbiBhY3Rpb25zXHJcbiAgICAgKi9cclxuICAgIFJlbmRlcmVyLnByb3RvdHlwZS5wcm9jZXNzTWFpbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBvYmplY3RzID0gdGhpcy5fZ2FtZS5vYmplY3RzO1xyXG4gICAgICAgIGlmIChvYmplY3RzICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBvYmplY3RzLmZvckVhY2goZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0gb2JqZWN0LnBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChvYmplY3Qub2JqZWN0VHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJBTklNQVRJT05cIiAvKiBBTklNQVRJT04gKi86XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhbmltYXRpb24gPSBvYmplY3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhbmltYXRpb25Qb2ludCA9IGFuaW1hdGlvbi5hbmltYXRpb25Qb2ludDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFuaW1hdGlvblNpemUgPSBnZXRBbmltYXRpb25TaXplKGFuaW1hdGlvbi5hbmltYXRpb25UeXBlLCBhbmltYXRpb24uc3ByaXRlUG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGFuaW1hdGlvbi5hbmltYXRpb25UeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiVElUTEVcIiAvKiBUSVRMRSAqLzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9zaXRpb24ueSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24ueSA9IHBvc2l0aW9uLnkgLSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25Qb2ludC55ID0gcG9zaXRpb24ueSArIGFuaW1hdGlvblNpemUuaGVpZ2h0IC8gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoX3RoaXMudGl0bGVTaG93biA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24ueSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvblBvaW50LnkgPSBwb3NpdGlvbi55ICsgYW5pbWF0aW9uU2l6ZS5oZWlnaHQgLyAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24uZXhwaXJlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMudGl0bGVTaG93biA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkNVUlNPUlwiIC8qIENVUlNPUiAqLzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3Vyc29ySW5kZXggPSBfdGhpcy5fZ2FtZS5jdXJzb3JJbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3Vyc29yU3RhcnQgPSBEUkFXSU5HX0NPTlNULnBvc2l0aW9ucy5tYWluLmN1cnNvcl9zdGFydDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25Qb2ludC55ID0gY3Vyc29yU3RhcnQgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3JJbmRleCAqIGFuaW1hdGlvblNpemUuaGVpZ2h0ICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uU2l6ZS5oZWlnaHQgLyAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5uZXh0U3ByaXRlUG9zaXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIHJlbmRlciBnYW1lIHNjcmVlblxyXG4gICAgICogQHBhcmFtIGN0eCBjb250ZXh0XHJcbiAgICAgKi9cclxuICAgIFJlbmRlcmVyLnByb3RvdHlwZS5yZW5kZXJHYW1lID0gZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgICAgIC8vIHByb2Nlc3MgYWN0aW9uc1xyXG4gICAgICAgIHRoaXMucHJvY2Vzc0dhbWUoKTtcclxuICAgICAgICAvLyBkcmF3IGZyYW1lXHJcbiAgICAgICAgdGhpcy5kcmF3RnJhbWUoY3R4KTtcclxuICAgICAgICAvLyBkcmF3IG9iamVjdHNcclxuICAgICAgICB0aGlzLmRyYXdPYmplY3RzKGN0eCwgdGhpcy5fZ2FtZS5vYmplY3RzKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIHByb2Nlc3MgYWxsIGdhbWUgYWN0aW9uc1xyXG4gICAgICovXHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUucHJvY2Vzc0dhbWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBpZiAodGhpcy5fZ2FtZS5wYXVzZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG1haW5UYW5rID0gdGhpcy5fZ2FtZS5tYWluVGFuaztcclxuICAgICAgICBpZiAobWFpblRhbmsgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZiAobWFpblRhbmsudmlzaWJsZSA9PT0gdHJ1ZSAmJiB0aGlzLmNoZWNrS2V5U3RhdGVTeW5jKCkpIHtcclxuICAgICAgICAgICAgICAgIG1haW5UYW5rLm1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fZ2FtZS5lbmVteVBhdXNlRXhwaXJlIDwgdGhpcy5fZnBzLm5vdykge1xyXG4gICAgICAgICAgICB0aGlzLl9nYW1lLnNldEVuZW15UGF1c2UoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgb2JqZWN0cyA9IHRoaXMuX2dhbWUub2JqZWN0cztcclxuICAgICAgICBpZiAob2JqZWN0cyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgb2JqZWN0cy5mb3JFYWNoKGZ1bmN0aW9uIChvYmplY3QpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAob2JqZWN0Lm9iamVjdFR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQlVMTEVUXCIgLyogQlVMTEVUICovOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QubW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQU5JTUFUSU9OXCIgLyogQU5JTUFUSU9OICovOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYW5pbWF0aW9uID0gb2JqZWN0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYW5pbWF0aW9uLmV4cGlyZVRpbWUgPCBfdGhpcy5fZnBzLm5vdykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLmV4cGlyZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhbmltYXRpb25Qb2ludCA9IGFuaW1hdGlvbi5hbmltYXRpb25Qb2ludDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFuaW1hdGlvblNpemUgPSBnZXRBbmltYXRpb25TaXplKGFuaW1hdGlvbi5hbmltYXRpb25UeXBlLCBhbmltYXRpb24uc3ByaXRlUG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGFuaW1hdGlvbi5hbmltYXRpb25UeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiSU5WSU5DSUJMRVwiIC8qIElOVklOQ0lCTEUgKi86XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRhbmtTaXplID0gZ2V0T2JqZWN0U2l6ZShcIlRBTktcIiAvKiBUQU5LICovKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25Qb2ludC54ID0gbWFpblRhbmsucG9zaXRpb24ueCArIHRhbmtTaXplLndpZHRoIC8gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25Qb2ludC55ID0gbWFpblRhbmsucG9zaXRpb24ueSArIHRhbmtTaXplLmhlaWdodCAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiR0FNRU9WRVJcIiAvKiBHQU1FT1ZFUiAqLzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYW5pbWF0aW9uUG9pbnQueSA+PSBfdGhpcy5fY2FudmFzLmNsaWVudEhlaWdodCAvIDIgKyBhbmltYXRpb25TaXplLmhlaWdodCAvIDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uUG9pbnQueSA9IGFuaW1hdGlvblBvaW50LnkgLSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24ubmV4dFNwcml0ZVBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJUQU5LXCIgLyogVEFOSyAqLzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRhbmsgPSBvYmplY3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YW5rIGluc3RhbmNlb2YgVGFua0FJT0JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZW5lbXkgPSB0YW5rO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRlZmluaXRpb24gPSBlbmVteS5nZXRDb2xvckRlZmluaXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5fZnBzLm5vdyAtIGVuZW15Lmxhc3RDaGFuZ2VkID4gZGVmaW5pdGlvbi5kZWxheSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZW15Lm5leHRDb2xvckluZGV4KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5lbXkubGFzdENoYW5nZWQgPSBfdGhpcy5fZnBzLm5vdztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YW5rLnZpc2libGUgJiYgX3RoaXMuX2dhbWUuZW5lbXlQYXVzZSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhbmsuYWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9nYW1lLnNwYXduVGFuayhcIkVORU1ZX1RBTktcIiAvKiBFTkVNWV9UQU5LICovKTtcclxuICAgIH07XHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUucmVuZGVyU3RhZ2UgPSBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgICAgdGhpcy5kcmF3Q3VydGFpbihjdHgpO1xyXG4gICAgfTtcclxuICAgIFJlbmRlcmVyLnByb3RvdHlwZS5kcmF3Q3VydGFpbiA9IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgdmFyIG9iamVjdHMgPSB0aGlzLl9nYW1lLm9iamVjdHM7XHJcbiAgICAgICAgb2JqZWN0cy5mb3JFYWNoKGZ1bmN0aW9uIChvYmplY3QpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChvYmplY3Qub2JqZWN0VHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkFOSU1BVElPTlwiIC8qIEFOSU1BVElPTiAqLzpcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYW5pbWF0aW9uID0gb2JqZWN0O1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoYW5pbWF0aW9uLmFuaW1hdGlvblR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkNVUlRBSU5cIiAvKiBDVVJUQUlOICovOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRlZmF1bHRzID0gQW5pbWF0aW9uRGVmYXVsdHMuQ1VSVEFJTjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvcmlnaW5hbF9zdGFydCA9IGFuaW1hdGlvbi5leHBpcmVUaW1lIC0gZGVmYXVsdHMuZHVyYXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWxhcHNlZCA9IF90aGlzLl9mcHMubm93IC0gb3JpZ2luYWxfc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvZ3Jlc3MgPSBlbGFwc2VkIC8gZGVmYXVsdHMuZHVyYXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2NyZWVuXzEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGN0eC5jYW52YXMuY2xpZW50V2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBjdHguY2FudmFzLmNsaWVudEhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBEUkFXSU5HX0NPTlNULmNvbG9ycy5iYWNrZ3JvdW5kX2ZyYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2dyZXNzIDwgLjI1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIHNjcmVlbl8xLndpZHRoLCBzY3JlZW5fMS5oZWlnaHQgKiBwcm9ncmVzcyAqIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5maWxsUmVjdCgwLCBzY3JlZW5fMS5oZWlnaHQgLyAyICsgc2NyZWVuXzEuaGVpZ2h0IC8gMiAtIHNjcmVlbl8xLmhlaWdodCAqIHByb2dyZXNzICogMiwgc2NyZWVuXzEud2lkdGgsIHNjcmVlbl8xLmhlaWdodCAqIHByb2dyZXNzICogMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwcm9ncmVzcyA8IC43NSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBzY3JlZW5fMS53aWR0aCwgc2NyZWVuXzEuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5kcmF3U3RhZ2VOdW1iZXIoY3R4LCBfdGhpcy5fZ2FtZS5nYW1lRGF0YS5sZXZlbERhdGEubGV2ZWxJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwcm9ncmVzcyA8IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2xvc2luZ1Byb2dyZXNzID0gcHJvZ3Jlc3MgLSAuNzU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IERSQVdJTkdfQ09OU1QuY29sb3JzLmJhY2tncm91bmRfZnJhbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIHNjcmVlbl8xLndpZHRoLCBzY3JlZW5fMS5oZWlnaHQgLyAyIC0gKHNjcmVlbl8xLmhlaWdodCAqIChjbG9zaW5nUHJvZ3Jlc3MgKiAyKSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5maWxsUmVjdCgwLCBzY3JlZW5fMS5oZWlnaHQgLyAyICsgKHNjcmVlbl8xLmhlaWdodCAqIChjbG9zaW5nUHJvZ3Jlc3MgKiAyKSksIHNjcmVlbl8xLndpZHRoLCBzY3JlZW5fMS5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLmV4cGlyZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFJlbmRlcmVyLnByb3RvdHlwZS5kcmF3U3RhZ2VOdW1iZXIgPSBmdW5jdGlvbiAoY3R4LCBudW1iZXIpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBzdGFnZSA9IFNQUlRJRV9ERUYuU1lTVEVNLlNUQUdFO1xyXG4gICAgICAgIHZhciBudW1iZXJzID0gW107XHJcbiAgICAgICAgdmFyIG51bWJlcl9zdHIgPSBudW1iZXIudG9TdHJpbmcoKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gbnVtYmVyX3N0ci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBudW1iZXJzLnB1c2goU1BSVElFX0RFRi5TWVNURU0uTlVNQkVSW3BhcnNlSW50KG51bWJlcl9zdHIuY2hhckF0KGkpKV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuX21haW5TcHJpdGUsIHN0YWdlLnBvc2l0aW9uLngsIHN0YWdlLnBvc2l0aW9uLnksIHN0YWdlLnNpemUud2lkdGgsIHN0YWdlLnNpemUuaGVpZ2h0LCBjdHguY2FudmFzLmNsaWVudFdpZHRoIC8gMiAtIHN0YWdlLnNpemUud2lkdGggKiAoNCAvIDUpLCBjdHguY2FudmFzLmNsaWVudEhlaWdodCAvIDIgLSBzdGFnZS5zaXplLmhlaWdodCwgc3RhZ2Uuc2l6ZS53aWR0aCwgc3RhZ2Uuc2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgIG51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAobnVtYmVyLCBpbmRleCkge1xyXG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKF90aGlzLl9tYWluU3ByaXRlLCBudW1iZXIucG9zaXRpb24ueCwgbnVtYmVyLnBvc2l0aW9uLnksIG51bWJlci5zaXplLndpZHRoLCBudW1iZXIuc2l6ZS5oZWlnaHQsIGN0eC5jYW52YXMuY2xpZW50V2lkdGggLyAyICsgbnVtYmVyLnNpemUud2lkdGggKiAoNCAtIGluZGV4IC0gMSksIGN0eC5jYW52YXMuY2xpZW50SGVpZ2h0IC8gMiAtIG51bWJlci5zaXplLmhlaWdodCwgbnVtYmVyLnNpemUud2lkdGgsIG51bWJlci5zaXplLmhlaWdodCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgUmVuZGVyZXIucHJvdG90eXBlLmNoZWNrS2V5U3RhdGVTeW5jID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBtYWluVGFuayA9IHRoaXMuX2dhbWUubWFpblRhbms7XHJcbiAgICAgICAgdmFyIGtleVN0YXRlID0gdGhpcy5fZ2FtZS5rZXlTdGF0ZTtcclxuICAgICAgICBpZiAoKGtleVN0YXRlLkFycm93VXAgPT09IHRydWUgJiYgbWFpblRhbmsuZGlyZWN0aW9uID09IEVEaXJlY3Rpb24udXApIHx8XHJcbiAgICAgICAgICAgIChrZXlTdGF0ZS5BcnJvd1JpZ2h0ID09PSB0cnVlICYmIG1haW5UYW5rLmRpcmVjdGlvbiA9PSBFRGlyZWN0aW9uLnJpZ2h0KSB8fFxyXG4gICAgICAgICAgICAoa2V5U3RhdGUuQXJyb3dEb3duID09PSB0cnVlICYmIG1haW5UYW5rLmRpcmVjdGlvbiA9PSBFRGlyZWN0aW9uLmRvd24pIHx8XHJcbiAgICAgICAgICAgIChrZXlTdGF0ZS5BcnJvd0xlZnQgPT09IHRydWUgJiYgbWFpblRhbmsuZGlyZWN0aW9uID09IEVEaXJlY3Rpb24ubGVmdCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8vI3JlZ2lvbiBkcmF3aW5nIG1ldGhvZHNcclxuICAgIFJlbmRlcmVyLnByb3RvdHlwZS5kcmF3QmFja2dyb3VuZCA9IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBEUkFXSU5HX0NPTlNULmNvbG9ycy5iYWNrZ3JvdW5kO1xyXG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjdHguY2FudmFzLmNsaWVudFdpZHRoLCBjdHguY2FudmFzLmNsaWVudEhlaWdodCk7XHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH07XHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUuZHJhd0ZyYW1lID0gZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgICAgIHZhciBGUkFNRSA9IERSQVdJTkdfQ09OU1Quc2l6ZXMuZnJhbWU7XHJcbiAgICAgICAgdmFyIFNQUklURV9GUkFNRSA9IGdldFN5c3RlbVNwcml0ZShcIkZSQU1FXCIgLyogRlJBTUUgKi8pO1xyXG4gICAgICAgIHZhciBTUFJJVEVfVEFOS19JQ09OID0gZ2V0U3lzdGVtU3ByaXRlKFwiVEFOS19JQ09OXCIgLyogVEFOS19JQ09OICovKTtcclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBEUkFXSU5HX0NPTlNULmNvbG9ycy5iYWNrZ3JvdW5kX2ZyYW1lO1xyXG4gICAgICAgIC8vIHRvcFxyXG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjdHguY2FudmFzLmNsaWVudFdpZHRoLCBGUkFNRS50b3ApO1xyXG4gICAgICAgIC8vIGxlZnRcclxuICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgRlJBTUUubGVmdCwgY3R4LmNhbnZhcy5jbGllbnRIZWlnaHQpO1xyXG4gICAgICAgIC8vIGJvdHRvbVxyXG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCBjdHguY2FudmFzLmNsaWVudEhlaWdodCAtIEZSQU1FLmJvdHRvbSwgY3R4LmNhbnZhcy5jbGllbnRXaWR0aCwgRlJBTUUuYm90dG9tKTtcclxuICAgICAgICAvLyByaWdodFxyXG4gICAgICAgIGN0eC5maWxsUmVjdChjdHguY2FudmFzLmNsaWVudFdpZHRoIC0gRlJBTUUucmlnaHQsIDAsIEZSQU1FLnJpZ2h0LCBjdHguY2FudmFzLmNsaWVudEhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5kcmF3U3ByaXRlKGN0eCwgU1BSSVRFX0ZSQU1FLCB7IHg6IGN0eC5jYW52YXMuY2xpZW50V2lkdGggLSBGUkFNRS5yaWdodCwgeTogMCB9KTtcclxuICAgICAgICAvLyBlbmVteSB0YW5rIGxlZnRcclxuICAgICAgICB2YXIgZ3JvdXBzID0gdGhpcy5fZ2FtZS5nYW1lRGF0YS5sZXZlbERhdGEudGFua3M7XHJcbiAgICAgICAgdmFyIHRhbmtDb3VudCA9IDA7XHJcbiAgICAgICAgZ3JvdXBzLmZvckVhY2goZnVuY3Rpb24gKGdyb3VwKSB7XHJcbiAgICAgICAgICAgIHRhbmtDb3VudCArPSBncm91cC5ERUZBVUxUICsgZ3JvdXAuU1BFRUQgKyBncm91cC5QT1dFUiArIGdyb3VwLkFSTU9VUkVEO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IDI7IGorKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRhbmtDb3VudCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdTcHJpdGUoY3R4LCBTUFJJVEVfVEFOS19JQ09OLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IGN0eC5jYW52YXMuY2xpZW50V2lkdGggLSBGUkFNRS5yaWdodCArIDE2ICogKGogKyAxKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTogNDggKyAxNiAqIGlcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5maWxsUmVjdChjdHguY2FudmFzLmNsaWVudFdpZHRoIC0gRlJBTUUucmlnaHQgKyAxNiAqIChqICsgMSksIDQ4ICsgMTYgKiBpLCAxNiwgMTYpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGFua0NvdW50LS07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gUDEgbGlmZVxyXG4gICAgICAgIHRoaXMuZHJhd1Nwcml0ZShjdHgsIGdldFN5c3RlbVNwcml0ZShcIk5VTUJFUlwiIC8qIE5VTUJFUiAqLywgdGhpcy5fZ2FtZS5nYW1lRGF0YS5wbGF5ZXJEYXRhWzBdLmxpZmUpLCB7IHg6IGN0eC5jYW52YXMuY2xpZW50V2lkdGggLSBGUkFNRS5yaWdodCArIDMyLCB5OiAyODggfSk7XHJcbiAgICAgICAgLy8gUDIgbGlmZVxyXG4gICAgICAgIGlmICh0aGlzLl9nYW1lLmdhbWVEYXRhLnBsYXllckRhdGEubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdTcHJpdGUoY3R4LCBnZXRTeXN0ZW1TcHJpdGUoXCJOVU1CRVJcIiAvKiBOVU1CRVIgKi8sIHRoaXMuX2dhbWUuZ2FtZURhdGEucGxheWVyRGF0YVsxXS5saWZlKSwgeyB4OiBjdHguY2FudmFzLmNsaWVudFdpZHRoIC0gRlJBTUUucmlnaHQgKyAzMiwgeTogMzM2IH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY3R4LmZpbGxSZWN0KGN0eC5jYW52YXMuY2xpZW50V2lkdGggLSBGUkFNRS5yaWdodCArIDE2LCAzMjAsIDMyLCAzMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBsZXZlbElkID0gdGhpcy5fZ2FtZS5nYW1lRGF0YS5sZXZlbERhdGEubGV2ZWxJZDtcclxuICAgICAgICB2YXIgbGV2ZWxUeXBlID0gdHlwZW9mIChsZXZlbElkKTtcclxuICAgICAgICBpZiAobGV2ZWxUeXBlID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICBpZiAoTWF0aC5mbG9vcihsZXZlbElkIC8gMTApID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbFJlY3QoY3R4LmNhbnZhcy5jbGllbnRXaWR0aCAtIEZSQU1FLnJpZ2h0ICsgMTYsIDQwMCwgMTYsIDE2KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd1Nwcml0ZShjdHgsIGdldFN5c3RlbVNwcml0ZShcIk5VTUJFUlwiIC8qIE5VTUJFUiAqLywgTWF0aC5mbG9vcihsZXZlbElkIC8gMTApKSwgeyB4OiBjdHguY2FudmFzLmNsaWVudFdpZHRoIC0gRlJBTUUucmlnaHQgKyAxNiwgeTogNDAwIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd1Nwcml0ZShjdHgsIGdldFN5c3RlbVNwcml0ZShcIk5VTUJFUlwiIC8qIE5VTUJFUiAqLywgbGV2ZWxJZCAlIDEwKSwgeyB4OiBjdHguY2FudmFzLmNsaWVudFdpZHRoIC0gRlJBTUUucmlnaHQgKyAzMiwgeTogNDAwIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChsZXZlbFR5cGUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBEUkFXSU5HX0NPTlNULmNvbG9ycy5iYWNrZ3JvdW5kX2ZyYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfTtcclxuICAgIFJlbmRlcmVyLnByb3RvdHlwZS5kcmF3T2JqZWN0cyA9IGZ1bmN0aW9uIChjdHgsIG9iamVjdHMpIHtcclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgb2JqZWN0ID0gb2JqZWN0c1tpXTtcclxuICAgICAgICAgICAgdmFyIHNwcml0ZSA9IGdldFNwcml0ZURhdGEob2JqZWN0KTtcclxuICAgICAgICAgICAgdGhpcy5kcmF3T2JqZWN0KGN0eCwgb2JqZWN0LCBzcHJpdGUpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fZ2FtZS5kZWJ1Zykge1xyXG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJyNGRjAwMDAnO1xyXG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZVJlY3Qob2JqZWN0LnBvc2l0aW9uLnggKyAxLCBvYmplY3QucG9zaXRpb24ueSArIDEsIHNwcml0ZS5zaXplLndpZHRoIC0gMiwgc3ByaXRlLnNpemUuaGVpZ2h0IC0gMik7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmRyYXdUZXh0KGN0eCwgYCR7b2JqZWN0LmlkfWAsIHtcclxuICAgICAgICAgICAgICAgIC8vIFx0eDogRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS5sZWZ0ICsgb2JqZWN0LnBvc2l0aW9uLngsXHJcbiAgICAgICAgICAgICAgICAvLyBcdHk6IERSQVdJTkdfQ09OU1Quc2l6ZXMuZnJhbWUudG9wICsgb2JqZWN0LnBvc2l0aW9uLnkgLSAxLFxyXG4gICAgICAgICAgICAgICAgLy8gfSwgc3ByaXRlLnNpemUud2lkdGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFJlbmRlcmVyLnByb3RvdHlwZS5kcmF3T2JqZWN0ID0gZnVuY3Rpb24gKGN0eCwgb2JqZWN0LCBzcHJpdGUpIHtcclxuICAgICAgICB2YXIgc3ByaXRlX3NyYyA9IHRoaXMuX21haW5TcHJpdGU7XHJcbiAgICAgICAgaWYgKG9iamVjdC52aXNpYmxlID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9iamVjdC5vYmplY3RUeXBlID09PSBcIkFOSU1BVElPTlwiIC8qIEFOSU1BVElPTiAqLykge1xyXG4gICAgICAgICAgICB2YXIgYW5pbWF0aW9uID0gb2JqZWN0O1xyXG4gICAgICAgICAgICBpZiAoYW5pbWF0aW9uLmFuaW1hdGlvblR5cGUgPT09IFwiVElUTEVcIiAvKiBUSVRMRSAqLykge1xyXG4gICAgICAgICAgICAgICAgc3ByaXRlX3NyYyA9IHRoaXMuX3RpdGxlU3ByaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzcHJpdGUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZiAob2JqZWN0Lm9iamVjdFR5cGUgPT09IFwiQkxPQ0tcIiAvKiBCTE9DSyAqLykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGJsb2NrID0gb2JqZWN0O1xyXG4gICAgICAgICAgICAgICAgdmFyIGJsb2NrU3RhdGUgPSBibG9jay5ibG9ja1N0YXRlNHg0O1xyXG4gICAgICAgICAgICAgICAgdmFyIGNlbGxTaXplID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBzcHJpdGUuc2l6ZS53aWR0aCAvIDQsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBzcHJpdGUuc2l6ZS53aWR0aCAvIDRcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJsb2NrU3RhdGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGJsb2NrU3RhdGVbaV0ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJsb2NrU3RhdGVbaV1bal0gPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2Uoc3ByaXRlX3NyYywgc3ByaXRlLnBvc2l0aW9uLnggKyBjZWxsU2l6ZS53aWR0aCAqIGosIHNwcml0ZS5wb3NpdGlvbi55ICsgY2VsbFNpemUuaGVpZ2h0ICogaSwgY2VsbFNpemUud2lkdGgsIGNlbGxTaXplLmhlaWdodCwgb2JqZWN0LnBvc2l0aW9uLnggKyBjZWxsU2l6ZS53aWR0aCAqIGosIG9iamVjdC5wb3NpdGlvbi55ICsgY2VsbFNpemUuaGVpZ2h0ICogaSwgY2VsbFNpemUud2lkdGgsIGNlbGxTaXplLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKHNwcml0ZV9zcmMsIHNwcml0ZS5wb3NpdGlvbi54LCBzcHJpdGUucG9zaXRpb24ueSwgc3ByaXRlLnNpemUud2lkdGgsIHNwcml0ZS5zaXplLmhlaWdodCwgb2JqZWN0LnBvc2l0aW9uLngsIG9iamVjdC5wb3NpdGlvbi55LCBzcHJpdGUuc2l6ZS53aWR0aCwgc3ByaXRlLnNpemUuaGVpZ2h0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUuZHJhd0RlYnVnQ291bnRlciA9IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICB2YXIgdGFuayA9IHRoaXMuX2dhbWUubWFpblRhbms7XHJcbiAgICAgICAgaWYgKHRhbmsgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdUZXh0KGN0eCwgXCJNQUlOIFRBTks6IFRBTktfXCIgKyB0YW5rLnRhbmtDb2xvciArIFwiX1wiICsgdGFuay50YW5rTGV2ZWwgKyBcIihcIiArIHRhbmsucG9zaXRpb24ueCArIFwiLCBcIiArIHRhbmsucG9zaXRpb24ueSArIFwiLCBcIiArIHRhbmsuZGlyZWN0aW9uLnRvU3RyaW5nKCkgKyBcIilcIiwgeyB4OiAwLCB5OiAxNSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd1RleHQoY3R4LCBcIk1BSU4gVEFOSzogTk9UIEZPVU5EXCIsIHsgeDogMCwgeTogMTUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBmcHMgPSAoMTAwMCAvIHRoaXMuX2Zwcy5lbGFwc2VkKS50b0ZpeGVkKDIpICsgXCJmcHMgXCI7XHJcbiAgICAgICAgdGhpcy5kcmF3VGV4dChjdHgsIGZwcywgeyB4OiBjdHguY2FudmFzLndpZHRoIC0gKGN0eC5tZWFzdXJlVGV4dChmcHMpLndpZHRoICogMS4zNSksIHk6IDE1IH0pO1xyXG4gICAgICAgIHZhciBrZXlTdGF0ZSA9IHRoaXMuX2dhbWUua2V5U3RhdGU7XHJcbiAgICAgICAgdGhpcy5kcmF3VGV4dChjdHgsIFwiU3BhY2U6IFwiICsgKGtleVN0YXRlLlNwYWNlID8gJ1QnIDogJ0YnKSwgeyB4OiAwLCB5OiBjdHguY2FudmFzLmhlaWdodCB9KTtcclxuICAgICAgICB0aGlzLmRyYXdUZXh0KGN0eCwgXCJBcnJvd0xlZnQ6IFwiICsgKGtleVN0YXRlLkFycm93TGVmdCA/ICdUJyA6ICdGJyksIHsgeDogMCwgeTogY3R4LmNhbnZhcy5oZWlnaHQgLSAxNSB9KTtcclxuICAgICAgICB0aGlzLmRyYXdUZXh0KGN0eCwgXCJBcnJvd0Rvd246IFwiICsgKGtleVN0YXRlLkFycm93RG93biA/ICdUJyA6ICdGJyksIHsgeDogMCwgeTogY3R4LmNhbnZhcy5oZWlnaHQgLSAzMCB9KTtcclxuICAgICAgICB0aGlzLmRyYXdUZXh0KGN0eCwgXCJBcnJvd1JpZ2h0OiBcIiArIChrZXlTdGF0ZS5BcnJvd1JpZ2h0ID8gJ1QnIDogJ0YnKSwgeyB4OiAwLCB5OiBjdHguY2FudmFzLmhlaWdodCAtIDQ1IH0pO1xyXG4gICAgICAgIHRoaXMuZHJhd1RleHQoY3R4LCBcIkFycm93VXA6IFwiICsgKGtleVN0YXRlLkFycm93VXAgPyAnVCcgOiAnRicpLCB7IHg6IDAsIHk6IGN0eC5jYW52YXMuaGVpZ2h0IC0gNjAgfSk7XHJcbiAgICAgICAgdGhpcy5kcmF3VGV4dChjdHgsIFwiW0lLZXlTdGF0ZV1cIiwgeyB4OiAwLCB5OiBjdHguY2FudmFzLmhlaWdodCAtIDc1IH0pO1xyXG4gICAgfTtcclxuICAgIFJlbmRlcmVyLnByb3RvdHlwZS5kcmF3VGV4dCA9IGZ1bmN0aW9uIChjdHgsIHRleHQsIHBvc2l0aW9uLCBtYXhXaWR0aCkge1xyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgY3R4LmZvbnQgPSBEUkFXSU5HX0NPTlNULmRlYnVnLmZvbnQuc2l6ZSArIFwicHggXCIgKyBEUkFXSU5HX0NPTlNULmRlYnVnLmZvbnQuZm9udDtcclxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnd2hpdGUnO1xyXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAyO1xyXG4gICAgICAgIGN0eC5zdHJva2VUZXh0KHRleHQsIHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIG1heFdpZHRoKTtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcclxuICAgICAgICBjdHguZmlsbFRleHQodGV4dCwgcG9zaXRpb24ueCwgcG9zaXRpb24ueSwgbWF4V2lkdGgpO1xyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9O1xyXG4gICAgUmVuZGVyZXIucHJvdG90eXBlLmRyYXdTcHJpdGUgPSBmdW5jdGlvbiAoY3R4LCBzcHJpdGUsIHBvc2l0aW9uLCBzaXplKSB7XHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuX21haW5TcHJpdGUsIHNwcml0ZS5wb3NpdGlvbi54LCBzcHJpdGUucG9zaXRpb24ueSwgc3ByaXRlLnNpemUud2lkdGgsIHNwcml0ZS5zaXplLmhlaWdodCwgcG9zaXRpb24ueCwgcG9zaXRpb24ueSwgc2l6ZSAhPSB1bmRlZmluZWQgPyBzaXplLndpZHRoIDogc3ByaXRlLnNpemUud2lkdGgsIHNpemUgIT0gdW5kZWZpbmVkID8gc2l6ZS5oZWlnaHQgOiBzcHJpdGUuc2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9O1xyXG4gICAgLy8jZW5kcmVnaW9uXHJcbiAgICAvLyNyZWdpb24gcHVibGljIG1ldGhvZHNcclxuICAgIC8qKlxyXG4gICAgICogVGVzdCBvYmplY3QgaXMgdmlzaWJsZVxyXG4gICAgICogQHBhcmFtIG9iamVjdCBvYmplY3QgZm9yIHRlc3RcclxuICAgICAqIEBwYXJhbSBzcHJpdGUgb2JqZWN0J3Mgc3ByaXRlIGRhdGEgZm9yIHNpemVcclxuICAgICAqL1xyXG4gICAgUmVuZGVyZXIucHJvdG90eXBlLm9iamVjdFZpc2libGVUZXN0ID0gZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgICAgIHZhciBwb3NpdGlvbiA9IG9iamVjdC5wb3NpdGlvbjtcclxuICAgICAgICB2YXIgc2l6ZSA9IGdldFNwcml0ZURhdGEob2JqZWN0KS5zaXplO1xyXG4gICAgICAgIHZhciBjdHggPSB0aGlzLl9jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICBpZiAocG9zaXRpb24ueCA+PSBEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lLmxlZnQgJiZcclxuICAgICAgICAgICAgcG9zaXRpb24ueCArIHNpemUud2lkdGggPD0gY3R4LmNhbnZhcy5jbGllbnRXaWR0aCAtIERSQVdJTkdfQ09OU1Quc2l6ZXMuZnJhbWUucmlnaHQgJiZcclxuICAgICAgICAgICAgcG9zaXRpb24ueSA+PSBEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lLnRvcCAmJlxyXG4gICAgICAgICAgICBwb3NpdGlvbi55ICsgc2l6ZS5oZWlnaHQgPD0gY3R4LmNhbnZhcy5jbGllbnRIZWlnaHQgLSBEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lLmJvdHRvbSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgUmVuZGVyZXIucHJvdG90eXBlLnJhbmRvbVBvaW50ID0gZnVuY3Rpb24gKHNpemUpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB4OiBnZXRSYW5kb21SYW5nZShEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lLmxlZnQsIHRoaXMuX2NhbnZhcy53aWR0aCAtIERSQVdJTkdfQ09OU1Quc2l6ZXMuZnJhbWUucmlnaHQgLSBzaXplLndpZHRoKSxcclxuICAgICAgICAgICAgeTogZ2V0UmFuZG9tUmFuZ2UoRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS50b3AsIHRoaXMuX2NhbnZhcy5oZWlnaHQgLSBEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lLmJvdHRvbSAtIHNpemUuaGVpZ2h0KSxcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQ2FsY3VsYXRlIGFuZCByZXR1cm4gWi1JbmRleCBmb3IgcmVuZGVyXHJcbiAgICAgKiAwOiBXYXRlciBCbG9ja1xyXG4gICAgICogMTogVGFua3MsIEJyZWFrYWJsZSBCbG9ja3NcclxuICAgICAqIDI6IEludmluY2libGUgQW5pbWF0aW9uLCBCdWxsZXRzXHJcbiAgICAgKiAzOiBCdXNoXHJcbiAgICAgKiA0OiBFeHBsb2RlIEFuaW1hdGlvbnMsIFNjb3JlIEFuaW1hdGlvbnMsIFNwYXduaW5nIEFuaW1hdGlvblxyXG4gICAgICogNTogSXRlbXNcclxuICAgICAqIDY6IFN5c3RlbSBTcHJpdGVzKEdhbWUgT3Zlci4uLiBldGMpXHJcbiAgICAgKiBAcGFyYW0gb2JqZWN0IG9iamVjdCBmb3IgY2FsY3VsYXRlXHJcbiAgICAgKi9cclxuICAgIFJlbmRlcmVyLmdldE9iamVjdFpJbmRleCA9IGZ1bmN0aW9uIChvYmplY3QpIHtcclxuICAgICAgICBzd2l0Y2ggKG9iamVjdC5vYmplY3RUeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJCTE9DS1wiIC8qIEJMT0NLICovOlxyXG4gICAgICAgICAgICAgICAgdmFyIGJsb2NrID0gb2JqZWN0O1xyXG4gICAgICAgICAgICAgICAgaWYgKGJsb2NrLmJsb2NrVHlwZSA9PT0gXCJXQVRFUlwiIC8qIFdBVEVSICovKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChibG9jay5ibG9ja1R5cGUgPT09IFwiQlVTSFwiIC8qIEJVU0ggKi8pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwiVEFOS1wiIC8qIFRBTksgKi86XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICAgICAgY2FzZSBcIkFOSU1BVElPTlwiIC8qIEFOSU1BVElPTiAqLzpcclxuICAgICAgICAgICAgICAgIHZhciBhbmltYXRpb24gPSBvYmplY3Q7XHJcbiAgICAgICAgICAgICAgICBpZiAoYW5pbWF0aW9uLmFuaW1hdGlvblR5cGUgPT09IFwiSU5WSU5DSUJMRVwiIC8qIElOVklOQ0lCTEUgKi8pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwiQlVMTEVUXCIgLyogQlVMTEVUICovOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDI7XHJcbiAgICAgICAgICAgIGNhc2UgXCJJVEVNXCIgLyogSVRFTSAqLzpcclxuICAgICAgICAgICAgICAgIHJldHVybiA1O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gUmVuZGVyZXI7XHJcbn0oKSk7XHJcbmV4cG9ydCBkZWZhdWx0IFJlbmRlcmVyO1xyXG4iLCJpbXBvcnQgU1BSVElFX0RFRiBmcm9tIFwiLi9TcHJpdGVEZWZpbml0aW9uXCI7XHJcbmltcG9ydCBFRGlyZWN0aW9uIGZyb20gXCIuLi8uLi9VdGlscy9FRGlyZWN0aW9uXCI7XHJcbmltcG9ydCBUYW5rQUlPQmplY3QgZnJvbSBcIi4uLy4uL0dhbWUvT2JqZWN0L1RhbmtBSU9iamVjdFwiO1xyXG4vKipcclxuICogRmluZCBzcHJpdGUgZGF0YSBmb3IgZ2l2ZW4gb2JqZWN0XHJcbiAqIEBwYXJhbSBvYmplY3QgZm91bmQgc3ByaXRlIGRlZmluaXRpb25cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTcHJpdGVEYXRhKG9iamVjdCkge1xyXG4gICAgc3dpdGNoIChvYmplY3Qub2JqZWN0VHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCJUQU5LXCIgLyogVEFOSyAqLzpcclxuICAgICAgICAgICAgdmFyIHRhbmsgPSBvYmplY3Q7XHJcbiAgICAgICAgICAgIGlmICh0YW5rIGluc3RhbmNlb2YgVGFua0FJT0JqZWN0ICYmIHRhbmsuY29sb3JJbmRleCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBlbmVteSA9IG9iamVjdDtcclxuICAgICAgICAgICAgICAgIHZhciBzZXF1ZW5jZSA9IGVuZW15LmdldENvbG9yRGVmaW5pdGlvbigpLnNlcXVlbmNlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFNQUlRJRV9ERUYuRU5FTVlbc2VxdWVuY2VbZW5lbXkuY29sb3JJbmRleF1dW2VuZW15LnRhbmtMZXZlbF1bZW5lbXkuZGlyZWN0aW9uXVtlbmVteS5zcHJpdGVQb3NpdGlvbl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gU1BSVElFX0RFRi5UQU5LW3RhbmsudGFua0NvbG9yXVt0YW5rLnRhbmtMZXZlbF1bdGFuay5kaXJlY3Rpb25dW3Rhbmsuc3ByaXRlUG9zaXRpb25dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBcIkJVTExFVFwiIC8qIEJVTExFVCAqLzpcclxuICAgICAgICAgICAgdmFyIGJ1bGxldCA9IG9iamVjdDtcclxuICAgICAgICAgICAgcmV0dXJuIFNQUlRJRV9ERUYuQlVMTEVUW2J1bGxldC5kaXJlY3Rpb25dO1xyXG4gICAgICAgIGNhc2UgXCJBTklNQVRJT05cIiAvKiBBTklNQVRJT04gKi86XHJcbiAgICAgICAgICAgIHZhciBhbmltYXRpb24gPSBvYmplY3Q7XHJcbiAgICAgICAgICAgIHJldHVybiBTUFJUSUVfREVGLkFOSU1BVElPTlthbmltYXRpb24uYW5pbWF0aW9uVHlwZV1bYW5pbWF0aW9uLnNwcml0ZVBvc2l0aW9uXTtcclxuICAgICAgICBjYXNlIFwiQkxPQ0tcIiAvKiBCTE9DSyAqLzpcclxuICAgICAgICAgICAgdmFyIGJsb2NrID0gb2JqZWN0O1xyXG4gICAgICAgICAgICByZXR1cm4gU1BSVElFX0RFRi5CTE9DS1tibG9jay5ibG9ja1R5cGVdW2Jsb2NrLnNwcml0ZVBvc2l0aW9uXTtcclxuICAgICAgICBjYXNlIFwiSVRFTVwiIC8qIElURU0gKi86XHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gb2JqZWN0O1xyXG4gICAgICAgICAgICByZXR1cm4gU1BSVElFX0RFRi5JVEVNW2l0ZW0uaXRlbVR5cGVdO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTeXN0ZW1TcHJpdGUoc3ByaXRlVHlwZSwgbnVtYmVyKSB7XHJcbiAgICBpZiAobnVtYmVyID09PSB2b2lkIDApIHsgbnVtYmVyID0gMDsgfVxyXG4gICAgc3dpdGNoIChzcHJpdGVUeXBlKSB7XHJcbiAgICAgICAgY2FzZSBcIk5VTExcIiAvKiBOVUxMICovOlxyXG4gICAgICAgIGNhc2UgXCJUQU5LX0lDT05cIiAvKiBUQU5LX0lDT04gKi86XHJcbiAgICAgICAgY2FzZSBcIlNUQUdFXCIgLyogU1RBR0UgKi86XHJcbiAgICAgICAgY2FzZSBcIkZSQU1FXCIgLyogRlJBTUUgKi86XHJcbiAgICAgICAgICAgIHJldHVybiBTUFJUSUVfREVGLlNZU1RFTVtzcHJpdGVUeXBlXTtcclxuICAgICAgICBjYXNlIFwiTlVNQkVSXCIgLyogTlVNQkVSICovOlxyXG4gICAgICAgICAgICByZXR1cm4gU1BSVElFX0RFRi5TWVNURU0uTlVNQkVSW251bWJlcl07XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNwcml0ZVNpemUob2JqZWN0KSB7XHJcbiAgICByZXR1cm4gZ2V0U3ByaXRlRGF0YShvYmplY3QpLnNpemU7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE9iamVjdFNpemUodHlwZSwgZGlyZWN0aW9uKSB7XHJcbiAgICBpZiAoZGlyZWN0aW9uID09IG51bGwpIHtcclxuICAgICAgICBkaXJlY3Rpb24gPSBFRGlyZWN0aW9uLnVwO1xyXG4gICAgfVxyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSBcIkJMT0NLXCIgLyogQkxPQ0sgKi86XHJcbiAgICAgICAgICAgIHJldHVybiBTUFJUSUVfREVGLkJMT0NLLkJSSUNLWzBdLnNpemU7XHJcbiAgICAgICAgY2FzZSBcIlRBTktcIiAvKiBUQU5LICovOlxyXG4gICAgICAgICAgICByZXR1cm4gU1BSVElFX0RFRi5UQU5LLllFTExPV1swXVtkaXJlY3Rpb25dWzBdLnNpemU7XHJcbiAgICAgICAgY2FzZSBcIkJVTExFVFwiIC8qIEJVTExFVCAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIFNQUlRJRV9ERUYuQlVMTEVUW2RpcmVjdGlvbl0uc2l6ZTtcclxuICAgICAgICBjYXNlIFwiSVRFTVwiIC8qIElURU0gKi86XHJcbiAgICAgICAgICAgIHJldHVybiBTUFJUSUVfREVGLklURU0uQk9NQi5zaXplO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBbmltYXRpb25TaXplKHR5cGUsIGZyYW1lKSB7XHJcbiAgICByZXR1cm4gU1BSVElFX0RFRi5BTklNQVRJT05bdHlwZV1bZnJhbWVdLnNpemU7XHJcbn1cclxuIiwiO1xyXG52YXIgU1BSVElFX0RFRiA9IHtcclxuICAgIFRBTks6IHtcclxuICAgICAgICBZRUxMT1c6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDAsIHk6IDAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIsIHk6IDAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDY0LCB5OiAwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDk2LCB5OiAwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxMjgsIHk6IDAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTYwLCB5OiAwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTkyLCB5OiAwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDIyNCwgeTogMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAwLCB5OiAzMiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMiwgeTogMzIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDY0LCB5OiAzMiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA5NiwgeTogMzIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDEyOCwgeTogMzIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTYwLCB5OiAzMiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE5MiwgeTogMzIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjI0LCB5OiAzMiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAwLCB5OiA2NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMiwgeTogNjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDY0LCB5OiA2NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA5NiwgeTogNjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDEyOCwgeTogNjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTYwLCB5OiA2NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE5MiwgeTogNjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjI0LCB5OiA2NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAwLCB5OiA5NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMiwgeTogOTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDY0LCB5OiA5NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA5NiwgeTogOTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDEyOCwgeTogOTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTYwLCB5OiA5NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE5MiwgeTogOTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjI0LCB5OiA5NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIEdSRUVOOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAwLCB5OiAyNTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIsIHk6IDI1NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNjQsIHk6IDI1NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA5NiwgeTogMjU2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxMjgsIHk6IDI1NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxNjAsIHk6IDI1NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE5MiwgeTogMjU2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDIyNCwgeTogMjU2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDAsIHk6IDI4OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMiwgeTogMjg4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA2NCwgeTogMjg4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDk2LCB5OiAyODggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDEyOCwgeTogMjg4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE2MCwgeTogMjg4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTkyLCB5OiAyODggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjI0LCB5OiAyODggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMCwgeTogMzIwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyLCB5OiAzMjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDY0LCB5OiAzMjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogOTYsIHk6IDMyMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTI4LCB5OiAzMjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTYwLCB5OiAzMjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxOTIsIHk6IDMyMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyMjQsIHk6IDMyMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAwLCB5OiAzNTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIsIHk6IDM1MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNjQsIHk6IDM1MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA5NiwgeTogMzUyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxMjgsIHk6IDM1MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxNjAsIHk6IDM1MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE5MiwgeTogMzUyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDIyNCwgeTogMzUyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgV0hJVEU6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI1NiwgeTogMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyODgsIHk6IDAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyMCwgeTogMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzNTIsIHk6IDAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM4NCwgeTogMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0MTYsIHk6IDAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0NDgsIHk6IDAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDgwLCB5OiAwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI1NiwgeTogMzIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjg4LCB5OiAzMiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIwLCB5OiAzMiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzNTIsIHk6IDMyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzODQsIHk6IDMyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQxNiwgeTogMzIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0NDgsIHk6IDMyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ4MCwgeTogMzIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjU2LCB5OiA2NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyODgsIHk6IDY0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMjAsIHk6IDY0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM1MiwgeTogNjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM4NCwgeTogNjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDE2LCB5OiA2NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ0OCwgeTogNjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDgwLCB5OiA2NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyNTYsIHk6IDk2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI4OCwgeTogOTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyMCwgeTogOTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzUyLCB5OiA5NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzg0LCB5OiA5NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0MTYsIHk6IDk2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDQ4LCB5OiA5NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0ODAsIHk6IDk2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgTUFHRU5UQTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjU2LCB5OiAyNTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjg4LCB5OiAyNTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyMCwgeTogMjU2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM1MiwgeTogMjU2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzODQsIHk6IDI1NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0MTYsIHk6IDI1NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ0OCwgeTogMjU2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ4MCwgeTogMjU2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI1NiwgeTogMjg4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI4OCwgeTogMjg4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMjAsIHk6IDI4OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzNTIsIHk6IDI4OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzg0LCB5OiAyODggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDE2LCB5OiAyODggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0NDgsIHk6IDI4OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0ODAsIHk6IDI4OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyNTYsIHk6IDMyMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyODgsIHk6IDMyMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIwLCB5OiAzMjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzUyLCB5OiAzMjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM4NCwgeTogMzIwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQxNiwgeTogMzIwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDQ4LCB5OiAzMjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDgwLCB5OiAzMjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjU2LCB5OiAzNTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjg4LCB5OiAzNTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyMCwgeTogMzUyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM1MiwgeTogMzUyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzODQsIHk6IDM1MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0MTYsIHk6IDM1MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ0OCwgeTogMzUyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ4MCwgeTogMzUyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAgRU5FTVk6IHtcclxuICAgICAgICBZRUxMT1c6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDAsIHk6IDEyOCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMiwgeTogMTI4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA2NCwgeTogMTI4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDk2LCB5OiAxMjggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDEyOCwgeTogMTI4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE2MCwgeTogMTI4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTkyLCB5OiAxMjggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjI0LCB5OiAxMjggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMCwgeTogMTYwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyLCB5OiAxNjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDY0LCB5OiAxNjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogOTYsIHk6IDE2MCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTI4LCB5OiAxNjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTYwLCB5OiAxNjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxOTIsIHk6IDE2MCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyMjQsIHk6IDE2MCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAwLCB5OiAxOTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIsIHk6IDE5MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNjQsIHk6IDE5MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA5NiwgeTogMTkyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxMjgsIHk6IDE5MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxNjAsIHk6IDE5MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE5MiwgeTogMTkyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDIyNCwgeTogMTkyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDAsIHk6IDIyNCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMiwgeTogMjI0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA2NCwgeTogMjI0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDk2LCB5OiAyMjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDEyOCwgeTogMjI0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE2MCwgeTogMjI0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTkyLCB5OiAyMjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjI0LCB5OiAyMjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBHUkVFTjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMCwgeTogMzg0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyLCB5OiAzODQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDY0LCB5OiAzODQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogOTYsIHk6IDM4NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTI4LCB5OiAzODQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTYwLCB5OiAzODQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxOTIsIHk6IDM4NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyMjQsIHk6IDM4NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAwLCB5OiA0MTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIsIHk6IDQxNiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNjQsIHk6IDQxNiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA5NiwgeTogNDE2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxMjgsIHk6IDQxNiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxNjAsIHk6IDQxNiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE5MiwgeTogNDE2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDIyNCwgeTogNDE2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDAsIHk6IDQ0OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMiwgeTogNDQ4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA2NCwgeTogNDQ4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDk2LCB5OiA0NDggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDEyOCwgeTogNDQ4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE2MCwgeTogNDQ4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTkyLCB5OiA0NDggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjI0LCB5OiA0NDggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMCwgeTogNDgwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyLCB5OiA0ODAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDY0LCB5OiA0ODAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogOTYsIHk6IDQ4MCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTI4LCB5OiA0ODAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTYwLCB5OiA0ODAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxOTIsIHk6IDQ4MCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyMjQsIHk6IDQ4MCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFdISVRFOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyNTYsIHk6IDEyOCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyODgsIHk6IDEyOCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIwLCB5OiAxMjggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzUyLCB5OiAxMjggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM4NCwgeTogMTI4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQxNiwgeTogMTI4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDQ4LCB5OiAxMjggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDgwLCB5OiAxMjggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjU2LCB5OiAxNjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjg4LCB5OiAxNjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyMCwgeTogMTYwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM1MiwgeTogMTYwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzODQsIHk6IDE2MCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0MTYsIHk6IDE2MCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ0OCwgeTogMTYwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ4MCwgeTogMTYwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI1NiwgeTogMTkyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI4OCwgeTogMTkyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMjAsIHk6IDE5MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzNTIsIHk6IDE5MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzg0LCB5OiAxOTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDE2LCB5OiAxOTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0NDgsIHk6IDE5MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0ODAsIHk6IDE5MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyNTYsIHk6IDIyNCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyODgsIHk6IDIyNCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIwLCB5OiAyMjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzUyLCB5OiAyMjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM4NCwgeTogMjI0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQxNiwgeTogMjI0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDQ4LCB5OiAyMjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDgwLCB5OiAyMjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBNQUdFTlRBOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyNTYsIHk6IDM4NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyODgsIHk6IDM4NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIwLCB5OiAzODQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzUyLCB5OiAzODQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM4NCwgeTogMzg0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQxNiwgeTogMzg0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDQ4LCB5OiAzODQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDgwLCB5OiAzODQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjU2LCB5OiA0MTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjg4LCB5OiA0MTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyMCwgeTogNDE2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM1MiwgeTogNDE2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzODQsIHk6IDQxNiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0MTYsIHk6IDQxNiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ0OCwgeTogNDE2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ4MCwgeTogNDE2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI1NiwgeTogNDQ4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI4OCwgeTogNDQ4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMjAsIHk6IDQ0OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzNTIsIHk6IDQ0OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzg0LCB5OiA0NDggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDE2LCB5OiA0NDggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0NDgsIHk6IDQ0OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0ODAsIHk6IDQ0OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyNTYsIHk6IDQ4MCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyODgsIHk6IDQ4MCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIwLCB5OiA0ODAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzUyLCB5OiA0ODAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM4NCwgeTogNDgwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQxNiwgeTogNDgwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDQ4LCB5OiA0ODAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDgwLCB5OiA0ODAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbiAgICBCVUxMRVQ6IHtcclxuICAgICAgICB1cDogeyBwb3NpdGlvbjogeyB4OiA2NDYsIHk6IDIwNCB9LCBzaXplOiB7IHdpZHRoOiA2LCBoZWlnaHQ6IDggfSB9LFxyXG4gICAgICAgIGxlZnQ6IHsgcG9zaXRpb246IHsgeDogNjYwLCB5OiAyMDQgfSwgc2l6ZTogeyB3aWR0aDogOCwgaGVpZ2h0OiA2IH0gfSxcclxuICAgICAgICBkb3duOiB7IHBvc2l0aW9uOiB7IHg6IDY3OCwgeTogMjA0IH0sIHNpemU6IHsgd2lkdGg6IDYsIGhlaWdodDogOCB9IH0sXHJcbiAgICAgICAgcmlnaHQ6IHsgcG9zaXRpb246IHsgeDogNjkyLCB5OiAyMDQgfSwgc2l6ZTogeyB3aWR0aDogOCwgaGVpZ2h0OiA2IH0gfVxyXG4gICAgfSxcclxuICAgIEJMT0NLOiB7XHJcbiAgICAgICAgQlJJQ0s6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNTEyLCB5OiAwIH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIElST046IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNTEyLCB5OiAzMiB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBXQVRFUjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA1MTIsIHk6IDk2IH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDU0NCwgeTogOTYgfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgQlVTSDogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA1NDQsIHk6IDY0IH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIEVBR0xFOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDYwOCwgeTogNjQgfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNjQwLCB5OiA2NCB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIEFOSU1BVElPTjoge1xyXG4gICAgICAgIEVYUExPU0lPTl9TTUFMTDogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA1MTgsIHk6IDI2MCB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMjIsIGhlaWdodDogMjIgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA1NDQsIHk6IDI1OCB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMzAsIGhlaWdodDogMjggfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA1NzYsIHk6IDI1NiB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBFWFBMT1NJT05fTEFSR0U6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNjEwLCB5OiAyNTggfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDU4LCBoZWlnaHQ6IDU4IH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNjY4LCB5OiAyNTYgfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDY4LCBoZWlnaHQ6IDY0IH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgSU5WSU5DSUJMRTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA1MTIsIHk6IDI4OCB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA1NDQsIHk6IDI4OCB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgU1BBV046IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNTE4LCB5OiAxOTggfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDE4LCBoZWlnaHQ6IDE4IH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNTQ4LCB5OiAxOTYgfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDIyLCBoZWlnaHQ6IDIyIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNTc4LCB5OiAxOTQgfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDI2LCBoZWlnaHQ6IDI2IH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNjA4LCB5OiAxOTIgfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDMwLCBoZWlnaHQ6IDMwIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIFNDT1JFXzEwMDogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA1ODAsIHk6IDMyOCB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMjYsIGhlaWdodDogMTQgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgU0NPUkVfMjAwOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDYxMCwgeTogMzI4IH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAyOCwgaGVpZ2h0OiAxNCB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBTQ09SRV8zMDA6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNjQyLCB5OiAzMjggfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDI4LCBoZWlnaHQ6IDE0IH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIFNDT1JFXzQwMDogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA2NzQsIHk6IDMyOCB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMjgsIGhlaWdodDogMTQgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgU0NPUkVfNTAwOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDcwNiwgeTogMzI4IH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAyOCwgaGVpZ2h0OiAxNCB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBHQU1FT1ZFUjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA1NzgsIHk6IDM2OCB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogNjIsIGhlaWdodDogMzAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgUEFVU0U6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNTc4LCB5OiAzNTIgfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDc4LCBoZWlnaHQ6IDE0IH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgVElUTEU6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMCwgeTogMCB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogNTEyLCBoZWlnaHQ6IDQ4MCB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIENVUlNPUjogW1xyXG4gICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE5MiwgeTogMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjI0LCB5OiAwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIENVUlRBSU46IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMCwgeTogMCB9LCBzaXplOiB7IHdpZHRoOiAwLCBoZWlnaHQ6IDAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIElURU06IHtcclxuICAgICAgICBIRUxNRVQ6IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNTEyLCB5OiAyMjQgfSxcclxuICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgV0FUQ0g6IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNTQ0LCB5OiAyMjQgfSxcclxuICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgU0hPVkVMOiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDU3NiwgeTogMjI0IH0sXHJcbiAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMwIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFNUQVI6IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNjA4LCB5OiAyMjQgfSxcclxuICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgQk9NQjoge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA2NDAsIHk6IDIyNCB9LFxyXG4gICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMCB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBUQU5LOiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDY3MiwgeTogMjI0IH0sXHJcbiAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMwIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFBJU1RPTDoge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA3MDQsIHk6IDIyNCB9LFxyXG4gICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMCB9XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBTWVNURU06IHtcclxuICAgICAgICBOVUxMOiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDAsIHk6IDAgfSxcclxuICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMCwgaGVpZ2h0OiAwIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFRBTktfSUNPTjoge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA2NDAsIHk6IDM4NCB9LFxyXG4gICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAxNiwgaGVpZ2h0OiAxNiB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBTVEFHRToge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA2NTgsIHk6IDM1MSB9LFxyXG4gICAgICAgICAgICBzaXplOiB7IHdpZHRoOiA3OCwgaGVpZ2h0OiAxNiB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBOVU1CRVI6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNjU3LCB5OiAzNjcgfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDE2LCBoZWlnaHQ6IDE2IH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNjc0LCB5OiAzNjcgfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDE2LCBoZWlnaHQ6IDE2IH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNjg5LCB5OiAzNjcgfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDE2LCBoZWlnaHQ6IDE2IH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNzA1LCB5OiAzNjcgfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDE2LCBoZWlnaHQ6IDE2IH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNzIxLCB5OiAzNjcgfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDE2LCBoZWlnaHQ6IDE2IH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNjU3LCB5OiAzODMgfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDE2LCBoZWlnaHQ6IDE2IH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNjc0LCB5OiAzODMgfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDE2LCBoZWlnaHQ6IDE2IH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNjg5LCB5OiAzODMgfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDE2LCBoZWlnaHQ6IDE2IH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNzA1LCB5OiAzODMgfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDE2LCBoZWlnaHQ6IDE2IH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNzIxLCB5OiAzODMgfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDE2LCBoZWlnaHQ6IDE2IH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgRlJBTUU6IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNzM2LCB5OiAwIH0sXHJcbiAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDY0LCBoZWlnaHQ6IDQ4MCB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgU1BSVElFX0RFRjtcclxuIiwiZXhwb3J0IGRlZmF1bHQgXCIuLi9kaXN0L2pzL3Nwcml0ZV9tYWluLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiLi4vZGlzdC9qcy9zcHJpdGVfdGl0bGUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIuLi9kaXN0L2pzL1BpeGVsRW11bGF0b3IteHEwOC50dGZcIjsiLCJpbXBvcnQgeyBnZXRTcHJpdGVEYXRhIH0gZnJvbSBcIi4uL1JlbmRlci9TcHJpdGUvU3ByaXRlRGF0YVwiO1xyXG4vKipcclxuKiBUZXN0cyB0d28gb2JqZWN0cyBhcmUgY29sbGlzaW9ucyAocmVjdGFuZ2xlIGJvdW5kaW5nIGJveCBjb2xsaXNpb24gdGVzdClcclxuKiBAcGFyYW0gb2JqZWN0MSBmaXJzdCBvYmplY3RcclxuKiBAcGFyYW0gc3ByaXRlMSBmaXJzdCBvYmplY3QncyBzcHJpdGUgZGF0YSBmb3Igc2l6ZVxyXG4qIEBwYXJhbSBvYmplY3QyIHNlY29uZCBvYmplY3RcclxuKiBAcGFyYW0gc3ByaXRlMiBzZWNvbmQgb2JqZWN0J3Mgc3ByaXRlIGRhdGEgZm9yIHNpemVcclxuKi9cclxuZXhwb3J0IGZ1bmN0aW9uIE9iamVjdENvbGxpc2lvblRlc3Qob2JqZWN0MSwgb2JqZWN0Mikge1xyXG4gICAgdmFyIHNpemUxID0gZ2V0U3ByaXRlRGF0YShvYmplY3QxKS5zaXplO1xyXG4gICAgdmFyIHNpemUyID0gZ2V0U3ByaXRlRGF0YShvYmplY3QyKS5zaXplO1xyXG4gICAgcmV0dXJuIFJlY3RhbmdsZUNvbGxpc2lvblRlc3Qob2JqZWN0MS5wb3NpdGlvbiwgc2l6ZTEsIG9iamVjdDIucG9zaXRpb24sIHNpemUyKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gQmxvY2tDb2xsaXNpb25UZXN0KGJsb2NrLCBvYmplY3QpIHtcclxuICAgIHZhciBjZWxscyA9IFtdO1xyXG4gICAgdmFyIGJsb2NrU2l6ZSA9IGdldFNwcml0ZURhdGEoYmxvY2spLnNpemU7XHJcbiAgICB2YXIgb2JqZWN0U2l6ZSA9IGdldFNwcml0ZURhdGEob2JqZWN0KS5zaXplO1xyXG4gICAgdmFyIGNlbGxQb3NpdGlvbjtcclxuICAgIHZhciBjZWxsU2l6ZSA9IHtcclxuICAgICAgICB3aWR0aDogYmxvY2tTaXplLndpZHRoIC8gNCxcclxuICAgICAgICBoZWlnaHQ6IGJsb2NrU2l6ZS5oZWlnaHQgLyA0XHJcbiAgICB9O1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBibG9jay5ibG9ja1N0YXRlNHg0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBibG9jay5ibG9ja1N0YXRlNHg0W2ldLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmIChibG9jay5ibG9ja1N0YXRlNHg0W2ldW2pdID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjZWxsUG9zaXRpb24gPSB7XHJcbiAgICAgICAgICAgICAgICB4OiBibG9jay5wb3NpdGlvbi54ICsgKGJsb2NrU2l6ZS53aWR0aCAvIDQpICogaixcclxuICAgICAgICAgICAgICAgIHk6IGJsb2NrLnBvc2l0aW9uLnkgKyAoYmxvY2tTaXplLmhlaWdodCAvIDQpICogaVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZiAoUmVjdGFuZ2xlQ29sbGlzaW9uVGVzdChjZWxsUG9zaXRpb24sIGNlbGxTaXplLCBvYmplY3QucG9zaXRpb24sIG9iamVjdFNpemUpKSB7XHJcbiAgICAgICAgICAgICAgICBjZWxscy5wdXNoKGNlbGxQb3NpdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2VsbHM7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIFJlY3RhbmdsZUNvbGxpc2lvblRlc3QocG9zMSwgc2l6ZTEsIHBvczIsIHNpemUyKSB7XHJcbiAgICBpZiAocG9zMS54ICsgc2l6ZTEud2lkdGggPiBwb3MyLnggJiZcclxuICAgICAgICBwb3MxLnggPCBwb3MyLnggKyBzaXplMi53aWR0aCAmJlxyXG4gICAgICAgIHBvczEueSArIHNpemUxLmhlaWdodCA+IHBvczIueSAmJlxyXG4gICAgICAgIHBvczEueSA8IHBvczIueSArIHNpemUyLmhlaWdodCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbiIsInZhciBFRGlyZWN0aW9uO1xyXG4oZnVuY3Rpb24gKEVEaXJlY3Rpb24pIHtcclxuICAgIEVEaXJlY3Rpb25bXCJ1cFwiXSA9IFwidXBcIjtcclxuICAgIEVEaXJlY3Rpb25bXCJyaWdodFwiXSA9IFwicmlnaHRcIjtcclxuICAgIEVEaXJlY3Rpb25bXCJkb3duXCJdID0gXCJkb3duXCI7XHJcbiAgICBFRGlyZWN0aW9uW1wibGVmdFwiXSA9IFwibGVmdFwiO1xyXG59KShFRGlyZWN0aW9uIHx8IChFRGlyZWN0aW9uID0ge30pKTtcclxuO1xyXG5leHBvcnQgZnVuY3Rpb24gRURpcmVjdGlvblRvRUtleXMoZGlyZWN0aW9uKSB7XHJcbiAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xyXG4gICAgICAgIGNhc2UgRURpcmVjdGlvbi51cDpcclxuICAgICAgICAgICAgcmV0dXJuIFwiQXJyb3dVcFwiIC8qIGFycm93X3VwICovO1xyXG4gICAgICAgIGNhc2UgRURpcmVjdGlvbi5yaWdodDpcclxuICAgICAgICAgICAgcmV0dXJuIFwiQXJyb3dSaWdodFwiIC8qIGFycm93X3JpZ2h0ICovO1xyXG4gICAgICAgIGNhc2UgRURpcmVjdGlvbi5kb3duOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJBcnJvd0Rvd25cIiAvKiBhcnJvd19kb3duICovO1xyXG4gICAgICAgIGNhc2UgRURpcmVjdGlvbi5sZWZ0OlxyXG4gICAgICAgICAgICByZXR1cm4gXCJBcnJvd0xlZnRcIiAvKiBhcnJvd19sZWZ0ICovO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEVEaXJlY3Rpb247XHJcbiIsInZhciBfX3ZhbHVlcyA9ICh0aGlzICYmIHRoaXMuX192YWx1ZXMpIHx8IGZ1bmN0aW9uKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59O1xyXG52YXIgX19yZWFkID0gKHRoaXMgJiYgdGhpcy5fX3JlYWQpIHx8IGZ1bmN0aW9uIChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn07XHJcbnZhciBfX3NwcmVhZCA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWQpIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn07XHJcbmV4cG9ydCBmdW5jdGlvbiBkZWVwQ2xvbmUob2JqKSB7XHJcbiAgICB2YXIgZV8xLCBfYTtcclxuICAgIGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG4gICAgdmFyIHJlc3VsdCA9IEFycmF5LmlzQXJyYXkob2JqKSA/IFtdIDoge307XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGZvciAodmFyIF9iID0gX192YWx1ZXMoT2JqZWN0LmtleXMob2JqKSksIF9jID0gX2IubmV4dCgpOyAhX2MuZG9uZTsgX2MgPSBfYi5uZXh0KCkpIHtcclxuICAgICAgICAgICAgdmFyIGtleSA9IF9jLnZhbHVlO1xyXG4gICAgICAgICAgICByZXN1bHRba2V5XSA9IGRlZXBDbG9uZShvYmpba2V5XSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChfYyAmJiAhX2MuZG9uZSAmJiAoX2EgPSBfYi5yZXR1cm4pKSBfYS5jYWxsKF9iKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG52YXIgR3VpZCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEd1aWQoKSB7XHJcbiAgICB9XHJcbiAgICBHdWlkLm5ld0d1aWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuICd4eHh4eHh4eC14eHh4LXh4eHgteHh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24gKGMpIHtcclxuICAgICAgICAgICAgdmFyIHIgPSBNYXRoLnJhbmRvbSgpICogMTYgfCAwLCB2ID0gYyA9PSAneCcgPyByIDogKHIgJiAweDMgfCAweDgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdi50b1N0cmluZygxNik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEd1aWQ7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IEd1aWQgfTtcclxuLyoqXHJcbiAqIGZpbmQgbWF4aW11bSBudW1iZXIgZnJvbSBudW1iZXIgYXJyYXlcclxuICogQHBhcmFtIG51bWJlcnMgZ2l2ZW4gbnVtYmVyc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1heChudW1iZXJzKSB7XHJcbiAgICByZXR1cm4gTWF0aC5tYXguYXBwbHkobnVsbCwgbnVtYmVycyk7XHJcbn1cclxuLyoqXHJcbiAqIGZpbmQgbWluaW11bSBudW1iZXIgZnJvbSBudW1iZXIgYXJyYXlcclxuICogQHBhcmFtIG51bWJlcnMgZ2l2ZW4gbnVtYmVyc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1pbihudW1iZXJzKSB7XHJcbiAgICByZXR1cm4gTWF0aC5taW4uYXBwbHkobnVsbCwgbnVtYmVycyk7XHJcbn1cclxuLyoqXHJcbiAqIGdldCBhIHJhbmRvbSB2YWx1ZSBiZXR3ZWVuIHJhbmdlXHJcbiAqIEBwYXJhbSBtaW4gcmFuZ2VfbWluXHJcbiAqIEBwYXJhbSBtYXggcmFuZ2VfbWF4XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tUmFuZ2UobWluLCBtYXgpIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbik7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUR1cGxpY2F0ZShhcnJheSkge1xyXG4gICAgdmFyIHNldCA9IG5ldyBTZXQoYXJyYXkpO1xyXG4gICAgcmV0dXJuIF9fc3ByZWFkKHNldCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbUVudW0oYW5FbnVtKSB7XHJcbiAgICB2YXIgZW51bVZhbHVlcyA9IE9iamVjdC52YWx1ZXMoYW5FbnVtKTtcclxuICAgIHZhciByYW5kb21JbmRleCA9IGdldFJhbmRvbVJhbmdlKDAsIGVudW1WYWx1ZXMubGVuZ3RoIC0gMSk7XHJcbiAgICB2YXIgcmFuZG9tRW51bVZhbHVlID0gZW51bVZhbHVlc1tyYW5kb21JbmRleF07XHJcbiAgICByZXR1cm4gcmFuZG9tRW51bVZhbHVlO1xyXG59XHJcbiIsImltcG9ydCBHYW1lIGZyb20gXCIuL0dhbWUvR2FtZVwiO1xyXG5pbXBvcnQgUmVuZGVyZXIgZnJvbSBcIi4vUmVuZGVyL1JlbmRlcmVyXCI7XHJcbnZhciBzcHJpdGVNYWluSW1hZ2UgPSByZXF1aXJlKCcuL1JlbmRlci9TcHJpdGUvc3ByaXRlX21haW4ucG5nJyk7XHJcbnZhciBzcHJpdGVUSXRsZUltYWdlID0gcmVxdWlyZSgnLi9SZW5kZXIvU3ByaXRlL3Nwcml0ZV90aXRsZS5wbmcnKTtcclxudmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xyXG4vLyBpbml0IGdhbWVcclxudmFyIGdhbWUgPSBuZXcgR2FtZShjYW52YXMsICcuL2pzL3Nwcml0ZV9tYWluLnBuZycsICcuL2pzL3Nwcml0ZV90aXRsZS5wbmcnKTtcclxuLy8jcmVnaW9uIERFQlVHXHJcbnZhciBkZWJ1Z19idG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlYnVnXCIpO1xyXG52YXIgbWFpblRhbmtfbGV2ZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5UYW5rX2xldmVsXCIpO1xyXG52YXIgbWFpblRhbmtfY29sb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5UYW5rX2NvbG9yXCIpO1xyXG52YXIgbWFpblRhbmtfaW52aW5jaWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblRhbmtfaW52aW5jaWJsZVwiKTtcclxudmFyIG1haW5UYW5rX2hpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblRhbmtfaGl0XCIpO1xyXG52YXIgdHJhY2tzID0ge1xyXG4gICAgYmxvY2s6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlfYmxvY2tcIiksXHJcbiAgICB0YW5rOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpX3RhbmtcIiksXHJcbiAgICBidWxsZXQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlfYnVsbGV0XCIpLFxyXG4gICAgYW5pbWF0aW9uOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpX2FuaW1hdGlvblwiKSxcclxufTtcclxudmFyIG9iamVjdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9iamVjdHNcIik7XHJcbnZhciBnYW1lZGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZWRhdGFcIik7XHJcbmRlYnVnX2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldikge1xyXG4gICAgaWYgKGRlYnVnX2J0bi5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykgPT0gJ3RydWUnKSB7XHJcbiAgICAgICAgZ2FtZS5kZWJ1ZyA9IGZhbHNlO1xyXG4gICAgICAgIGRlYnVnX2J0bi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2ZhbHNlJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChkZWJ1Z19idG4uZ2V0QXR0cmlidXRlKCd2YWx1ZScpID09ICdmYWxzZScpIHtcclxuICAgICAgICBnYW1lLmRlYnVnID0gdHJ1ZTtcclxuICAgICAgICBkZWJ1Z19idG4uc2V0QXR0cmlidXRlKCd2YWx1ZScsICd0cnVlJyk7XHJcbiAgICB9XHJcbiAgICBkZWJ1Z19idG4uaW5uZXJUZXh0ID0gXCJkZWJ1ZyA9IFwiICsgZGVidWdfYnRuLmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcclxufSk7XHJcbm1haW5UYW5rX2xldmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkgeyB1cGRhdGVUYW5rKCk7IH0pO1xyXG5tYWluVGFua19jb2xvci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHsgdXBkYXRlVGFuaygpOyB9KTtcclxubWFpblRhbmtfaW52aW5jaWJsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkgeyBnYW1lLm1haW5UYW5rLmludmluY2libGUoKTsgfSk7XHJcbm1haW5UYW5rX2hpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkgeyBnYW1lLm1haW5UYW5rLmRlc3Ryb3koKTsgfSk7XHJcbnZhciBvYmplY3RGaW5kZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgX2EsIF9iO1xyXG4gICAgb2JqZWN0cy5pbm5lckhUTUwgPVxyXG4gICAgICAgIFwiXFxuXFx0PHRyPlxcblxcdFxcdDx0ZD56SW5kZXg8L3RkPlxcblxcdFxcdDx0ZD5pZDwvdGQ+XFxuXFx0XFx0PHRkPnR5cGU8L3RkPlxcblxcdFxcdDx0ZD5wb3NpdGlvbjwvdGQ+XFxuXFx0PC90cj5cXG5cXHRcIjtcclxuICAgIGdhbWVkYXRhLmlubmVySFRNTCA9XHJcbiAgICAgICAgXCJcXG5cXHQ8dHI+XFxuXFx0XFx0PHRkPnR5cGU8L3RkPlxcblxcdFxcdDx0ZD52YWx1ZTwvdGQ+XFxuXFx0PC90cj5cXG5cXHRcIjtcclxuICAgIGlmICghZ2FtZS5kZWJ1Zykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChnYW1lLm1haW5UYW5rKSB7XHJcbiAgICAgICAgbWFpblRhbmtfY29sb3IudmFsdWUgPSBnYW1lLm1haW5UYW5rLnRhbmtDb2xvci50b1N0cmluZygpO1xyXG4gICAgICAgIG1haW5UYW5rX2xldmVsLnZhbHVlID0gZ2FtZS5tYWluVGFuay50YW5rTGV2ZWwudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIGlmIChnYW1lLmdhbWVEYXRhKSB7XHJcbiAgICAgICAgZ2FtZWRhdGEuaW5uZXJIVE1MID0gZ2FtZWRhdGEuaW5uZXJIVE1MICtcclxuICAgICAgICAgICAgKFwiXFxuXFx0XFx0PHRyPlxcblxcdFxcdFxcdDx0ZD5nYW1lb3ZlcjwvdGQ+XFxuXFx0XFx0XFx0PHRkPlwiICsgZ2FtZS5nYW1lRGF0YS5nYW1lT3ZlciArIFwiPC90ZD5cXG5cXHRcXHQ8L3RyPlxcblxcdFxcdDx0cj5cXG5cXHRcXHRcXHQ8dGQ+bGV2ZWxJZDwvdGQ+XFxuXFx0XFx0XFx0PHRkPlwiICsgKChfYSA9IGdhbWUuZ2FtZURhdGEubGV2ZWxEYXRhKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubGV2ZWxJZCkgKyBcIjwvdGQ+XFxuXFx0XFx0PC90cj5cXG5cXHRcXHQ8dHI+XFxuXFx0XFx0XFx0PHRkPnAxIHNjb3JlPC90ZD5cXG5cXHRcXHRcXHQ8dGQ+XCIgKyAoKF9iID0gZ2FtZS5nYW1lRGF0YS5wbGF5ZXJEYXRhWzBdKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Iuc2NvcmUpICsgXCI8L3RkPlxcblxcdFxcdDwvdHI+XFxuXFx0XFx0XCIpO1xyXG4gICAgfVxyXG4gICAgZ2FtZS5vYmplY3RzLmZvckVhY2goZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgICAgIHN3aXRjaCAob2JqZWN0Lm9iamVjdFR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIkJMT0NLXCIgLyogQkxPQ0sgKi86XHJcbiAgICAgICAgICAgICAgICBpZiAodHJhY2tzLmJsb2NrLmNoZWNrZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJUQU5LXCIgLyogVEFOSyAqLzpcclxuICAgICAgICAgICAgICAgIGlmICh0cmFja3MudGFuay5jaGVja2VkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiQlVMTEVUXCIgLyogQlVMTEVUICovOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRyYWNrcy5idWxsZXQuY2hlY2tlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkFOSU1BVElPTlwiIC8qIEFOSU1BVElPTiAqLzpcclxuICAgICAgICAgICAgICAgIGlmICh0cmFja3MuYW5pbWF0aW9uLmNoZWNrZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9iamVjdHMuaW5uZXJIVE1MID0gb2JqZWN0cy5pbm5lckhUTUwgK1xyXG4gICAgICAgICAgICAoXCJcXG5cXHRcXHQ8dHI+XFxuXFx0XFx0XFx0PHRkPlwiICsgUmVuZGVyZXIuZ2V0T2JqZWN0WkluZGV4KG9iamVjdCkgKyBcIjwvdGQ+XFxuXFx0XFx0XFx0PHRkPlwiICsgb2JqZWN0LmlkICsgXCI8L3RkPlxcblxcdFxcdFxcdDx0ZD5cIiArIG9iamVjdC5vYmplY3RUeXBlICsgXCI8L3RkPlxcblxcdFxcdFxcdDx0ZD5beDogXCIgKyBvYmplY3QucG9zaXRpb24ueCArIFwiLCB5OiBcIiArIG9iamVjdC5wb3NpdGlvbi55ICsgXCJdPC90ZD5cXG5cXHRcXHQ8L3RyPlxcblxcdFxcdFwiKTtcclxuICAgIH0pO1xyXG59LCAxMDApO1xyXG5mdW5jdGlvbiB1cGRhdGVUYW5rKCkge1xyXG4gICAgZ2FtZS5tYWluVGFuay50YW5rQ29sb3IgPSBtYWluVGFua19jb2xvci52YWx1ZTtcclxuICAgIGdhbWUubWFpblRhbmsudGFua0xldmVsID0gcGFyc2VJbnQobWFpblRhbmtfbGV2ZWwudmFsdWUpO1xyXG59XHJcbi8vI2VuZHJlZ2lvblxyXG4iXSwic291cmNlUm9vdCI6IiJ9