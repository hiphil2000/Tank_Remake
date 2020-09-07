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
            var enemy = objects.find(function (x) { return x.tankType === "ENEMY_TANK" /* ENEMY_TANK */; });
            if (enemy == undefined) {
                this.newLevel(this.gameData.levelData.levelId + 1);
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvR2FtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9JbnB1dE1hbmFnZXIvRUtleXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvSW5wdXRNYW5hZ2VyL0lucHV0TWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9MZXZlbC9EZWZhdWx0TGV2ZWxzL0RlZmF1bHRMZXZlbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvTGV2ZWwvRGVmYXVsdExldmVscy9MZXZlbDEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvTGV2ZWwvRGVmYXVsdExldmVscy9MZXZlbDIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvTGV2ZWwvRGVmYXVsdExldmVscy9MZXZlbFV0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL0xldmVsL0lMZXZlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9PYmplY3QvQW5pbWF0aW9uT2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL09iamVjdC9CbG9ja09iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9PYmplY3QvQnVsbGV0T2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL09iamVjdC9FbnVtL0VBbmltYXRpb25UeXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL09iamVjdC9FbnVtL0VJdGVtVHlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9PYmplY3QvRW51bS9FVGFua1R5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvT2JqZWN0L0dhbWVPYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvT2JqZWN0L0l0ZW1PYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvT2JqZWN0L01vdmluZ09iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9PYmplY3QvVGFua0FJT2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL09iamVjdC9UYW5rT2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9SZW5kZXIvUmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlbmRlci9TcHJpdGUvU3ByaXRlRGF0YS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVuZGVyL1Nwcml0ZS9TcHJpdGVEZWZpbml0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9SZW5kZXIvU3ByaXRlL3Nwcml0ZV9tYWluLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVuZGVyL1Nwcml0ZS9zcHJpdGVfdGl0bGUucG5nIiwid2VicGFjazovLy8uL3NyYy9SZXNvdXJjZXMvUGl4ZWxFbXVsYXRvci14cTA4LnR0ZiIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbHMvQ29sbGlzaW9uVGVzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbHMvRURpcmVjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbHMvVXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtR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QUNwZHBCO0FBQUE7QUFBQTtBQUFnRDtBQUN6QztBQUNQO0FBQ0E7QUFDQSxtQkFBbUIseURBQVU7QUFDN0I7QUFDQSxtQkFBbUIseURBQVU7QUFDN0I7QUFDQSxtQkFBbUIseURBQVU7QUFDN0I7QUFDQSxtQkFBbUIseURBQVU7QUFDN0I7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQUE7QUFBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsZ0VBQWlCO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ2MsMkVBQVksRUFBQzs7Ozs7Ozs7Ozs7OztBQ3RJNUI7QUFBQTtBQUFBO0FBQThCO0FBQ0E7QUFDOUI7QUFDQSxJQUFJLCtDQUFNLEVBQUUsK0NBQU07QUFDbEI7QUFDZSw0RUFBYSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDTDdCO0FBQUE7QUFBc0c7QUFDdEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixjQUFjO0FBQ3JDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixjQUFjO0FBQ3JDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixjQUFjO0FBQ3JDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHlEQUFhO0FBQ3JDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHlEQUFhO0FBQ3JDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixjQUFjO0FBQ3JDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHlEQUFhO0FBQ3JDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHlEQUFhO0FBQ3JDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHlEQUFhO0FBQ3JDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHlEQUFhO0FBQ3JDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHlEQUFhO0FBQ3JDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixjQUFjO0FBQ3JDO0FBQ0Esd0JBQXdCLHlEQUFhO0FBQ3JDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHlEQUFhO0FBQ3JDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHlEQUFhO0FBQ3JDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHlEQUFhO0FBQ3JDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHlEQUFhO0FBQ3JDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHlEQUFhO0FBQ3JDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHlEQUFhO0FBQ3JDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixjQUFjO0FBQ3JDO0FBQ0Esd0JBQXdCLHlEQUFhO0FBQ3JDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixjQUFjO0FBQ3JDO0FBQ0Esd0JBQXdCLHlEQUFhO0FBQ3JDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHlEQUFhO0FBQ3JDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHlEQUFhO0FBQ3JDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHlEQUFhO0FBQ3JDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHlEQUFhO0FBQ3JDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHlEQUFhO0FBQ3JDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHlEQUFhO0FBQ3JDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixjQUFjO0FBQ3JDO0FBQ0Esd0JBQXdCLHlEQUFhO0FBQ3JDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixjQUFjO0FBQ3JDO0FBQ0Esd0JBQXdCLHlEQUFhO0FBQ3JDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHlEQUFhO0FBQ3JDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHlEQUFhO0FBQ3JDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHlEQUFhO0FBQ3JDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixjQUFjO0FBQ3JDO0FBQ0Esd0JBQXdCLHlEQUFhO0FBQ3JDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixjQUFjO0FBQ3JDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixjQUFjO0FBQ3JDO0FBQ0Esd0JBQXdCLHNEQUFV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d0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixjQUFjO0FBQ3JDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixjQUFjO0FBQ3JDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixjQUFjO0FBQ3JDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixjQUFjO0FBQ3JDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixjQUFjO0FBQ3JDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixjQUFjO0FBQ3JDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixjQUFjO0FBQ3JDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixjQUFjO0FBQ3JDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixjQUFjO0FBQ3JDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixjQUFjO0FBQ3JDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixjQUFjO0FBQ3JDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixjQUFjO0FBQ3JDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixjQUFjO0FBQ3JDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixjQUFjO0FBQ3JDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixlQUFlO0FBQ3RDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixjQUFjO0FBQ3JDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixjQUFjO0FBQ3JDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixjQUFjO0FBQ3JDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixlQUFlO0FBQ3RDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixlQUFlO0FBQ3RDO0FBQ0Esd0JBQXdCLHNEQUFVO0FBQ2xDLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UscUVBQU0sRUFBQzs7Ozs7Ozs7Ozs7OztBQzdYdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDdkYsNkJBQTZCLHVEQUF1RDtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDcUM7QUFDRztBQUNxQjtBQUNDO0FBQy9EO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixjQUFjO0FBQzVDO0FBQ0E7QUFDQSxpQkFBaUIsaURBQUk7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsdUVBQVU7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxlQUFlO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLCtFQUFhO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsQ0FBQyxtREFBVTtBQUNHLDhFQUFlLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNsRy9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3QjtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ3ZGLDZCQUE2Qix1REFBdUQ7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDO0FBQ3FDO0FBQ29CO0FBQ2hCO0FBQ007QUFDZTtBQUNBO0FBQ3hEO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFLGlEQUFJO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esd0JBQXdCLCtFQUFhO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLHFEQUFZO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsK0VBQWE7QUFDckMsNkJBQTZCLCtFQUFrQjtBQUMvQyxtQkFBbUIsb0VBQWU7QUFDbEM7QUFDQSxTQUFTO0FBQ1QsbUJBQW1CLG9FQUFlO0FBQ2xDO0FBQ0EsU0FBUztBQUNUO0FBQ0EsaUNBQWlDLHlEQUFVLDRCQUE0Qix5REFBVTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLHlEQUFVLDhCQUE4Qix5REFBVTtBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxDQUFDLG1EQUFVO0FBQ0csMEVBQVcsRUFBQzs7Ozs7Ozs7Ozs7OztBQ3pLM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDdkYsNkJBQTZCLHVEQUF1RDtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDNEQ7QUFDYjtBQUNlO0FBQ3hEO0FBQ0E7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFFBQVEsbUVBQWE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsK0VBQWE7QUFDaEMsK0JBQStCLHlEQUFVLDBCQUEwQix5REFBVTtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsQ0FBQyxxREFBWTtBQUNDLDJFQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNsRzVCO0FBQUE7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN2RkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDhCQUE4QjtBQUNoQix3RUFBUyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDVnpCO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsOEJBQThCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDb0M7Ozs7Ozs7Ozs7Ozs7QUNacEM7QUFBQTtBQUNBO0FBQ0EsaUNBQWlDLGdCQUFnQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNjLHlFQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNqRDFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0I7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN2Riw2QkFBNkIsdURBQXVEO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQztBQUNxQztBQUNHO0FBQ0E7QUFDbEM7QUFDUDtBQUNBO0FBQ0E7QUFDQSx5RUFBeUUsaURBQUk7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLGlCQUFpQix1REFBUztBQUMxQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsaUJBQWlCLHVEQUFTO0FBQzFCO0FBQ0E7QUFDQSxpQkFBaUIsdURBQVM7QUFDMUI7QUFDQTtBQUNBLGlCQUFpQix1REFBUztBQUMxQjtBQUNBO0FBQ0EsaUJBQWlCLHVEQUFTO0FBQzFCO0FBQ0E7QUFDQSxpQkFBaUIsdURBQVM7QUFDMUI7QUFDQTtBQUNBLGlCQUFpQix1REFBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsQ0FBQyxtREFBVTtBQUNHLHlFQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUMvRDFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0I7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN2Riw2QkFBNkIsdURBQXVEO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQztBQUNxQztBQUNVO0FBQ007QUFDd0I7QUFDZjtBQUNsQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHlEQUFVO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLG9CQUFvQiw4REFBYTtBQUNqQyxxQkFBcUIsOERBQWE7QUFDbEMsbUJBQW1CLCtFQUFhO0FBQ2hDO0FBQ0EsaUJBQWlCLHlEQUFVO0FBQzNCO0FBQ0E7QUFDQSxpQkFBaUIseURBQVU7QUFDM0I7QUFDQTtBQUNBLGlCQUFpQix5REFBVTtBQUMzQjtBQUNBO0FBQ0EsaUJBQWlCLHlEQUFVO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsU0FBUztBQUN0QyxtQkFBbUIsK0VBQWE7QUFDaEMsdUJBQXVCLCtFQUFhO0FBQ3BDLHlCQUF5QiwrRUFBYTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQywrRUFBa0I7QUFDcEQsNkRBQTZELGdCQUFnQixFQUFFO0FBQy9FLDZEQUE2RCxnQkFBZ0IsRUFBRTtBQUMvRTtBQUNBLHFCQUFxQix5REFBVTtBQUMvQjtBQUNBO0FBQ0Esb0VBQW9FLHdEQUFHO0FBQ3ZFLGtEQUFrRCx3REFBRztBQUNyRDtBQUNBLHFDQUFxQyx3REFBRztBQUN4QyxrREFBa0Qsd0RBQUc7QUFDckQ7QUFDQTtBQUNBLDBDQUEwQyx3REFBRztBQUM3QztBQUNBO0FBQ0EscUJBQXFCLHlEQUFVO0FBQy9CO0FBQ0E7QUFDQSxtRUFBbUUsd0RBQUc7QUFDdEU7QUFDQTtBQUNBLHFDQUFxQyx3REFBRztBQUN4QyxrREFBa0Qsd0RBQUc7QUFDckQ7QUFDQTtBQUNBLDBDQUEwQyx3REFBRztBQUM3QztBQUNBO0FBQ0EscUJBQXFCLHlEQUFVO0FBQy9CO0FBQ0E7QUFDQSxtRUFBbUUsd0RBQUc7QUFDdEUsa0RBQWtELHdEQUFHO0FBQ3JEO0FBQ0EscUNBQXFDLHdEQUFHO0FBQ3hDLGtEQUFrRCx3REFBRztBQUNyRDtBQUNBO0FBQ0EsMENBQTBDLHdEQUFHO0FBQzdDO0FBQ0E7QUFDQSxxQkFBcUIseURBQVU7QUFDL0I7QUFDQTtBQUNBLG9FQUFvRSx3REFBRztBQUN2RSxrREFBa0Qsd0RBQUc7QUFDckQ7QUFDQSxxQ0FBcUMsd0RBQUc7QUFDeEMsa0RBQWtELHdEQUFHO0FBQ3JEO0FBQ0E7QUFDQSwwQ0FBMEMsd0RBQUc7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHlEQUFVO0FBQy9CO0FBQ0E7QUFDQSxxQkFBcUIseURBQVU7QUFDL0I7QUFDQTtBQUNBLHFCQUFxQix5REFBVTtBQUMvQjtBQUNBO0FBQ0EscUJBQXFCLHlEQUFVO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsQ0FBQyxtREFBVTtBQUNHLDJFQUFZLEVBQUM7QUFDckI7QUFDUDtBQUNBLGFBQWEseURBQVU7QUFDdkI7QUFDQTtBQUNBLGFBQWEseURBQVU7QUFDdkI7QUFDQTtBQUNBLGFBQWEseURBQVU7QUFDdkI7QUFDQTtBQUNBLGFBQWEseURBQVU7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0S0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0I7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN2Riw2QkFBNkIsdURBQXVEO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQztBQUNxQztBQUNzQjtBQUNaO0FBQ1M7QUFDUztBQUN4QjtBQUNuQztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNBO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIseURBQVM7QUFDMUI7QUFDQTtBQUNBLGlCQUFpQix5REFBUztBQUMxQjtBQUNBO0FBQ0EsaUJBQWlCLHlEQUFTO0FBQzFCO0FBQ0E7QUFDQSxpQkFBaUIseURBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMseURBQVM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyx5REFBUztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixrRUFBYSxDQUFDLHlEQUFVO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHlEQUFVO0FBQ2pDO0FBQ0E7QUFDQSx1QkFBdUIseURBQVU7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIseURBQVU7QUFDakM7QUFDQTtBQUNBLHVCQUF1Qix5REFBVTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULDZCQUE2QixtRUFBYztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix5REFBVTtBQUNqQztBQUNBO0FBQ0EsdUJBQXVCLHlEQUFVO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHlEQUFVO0FBQ2pDO0FBQ0E7QUFDQSx1QkFBdUIseURBQVU7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELHFEQUFZO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsNkVBQWdCLENBQUMsNkRBQWE7QUFDbkU7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix5REFBUztBQUMxQjtBQUNBLGlCQUFpQix5REFBUztBQUMxQjtBQUNBLGlCQUFpQix5REFBUztBQUMxQjtBQUNBLGlCQUFpQix5REFBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsQ0FBQyxtREFBVTtBQUNHLDJFQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUN4UDVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3QjtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ3ZGLDZCQUE2Qix1REFBdUQ7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDO0FBQ3NDO0FBQ3NCO0FBQ2I7QUFDd0I7QUFDVjtBQUNyQjtBQUNsQztBQUNBO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsZUFBZTtBQUNsRCxrSEFBa0gsaURBQUk7QUFDdEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsbUVBQWE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxrREFBWTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHVFQUFVO0FBQ25DLDJCQUEyQix1RUFBVTtBQUNyQztBQUNBLGlCQUFpQix5REFBVTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHlEQUFVO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIseURBQVU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix5REFBVTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHlEQUFXO0FBQ3JDO0FBQ0E7QUFDQSwwQkFBMEIseURBQVc7QUFDckM7QUFDQSx5QkFBeUIscURBQVksMERBQTBELGlEQUFJO0FBQ25HO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELHNCQUFzQixFQUFFO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHlEQUFVLHFCQUFxQix5REFBVTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsQ0FBQyxxREFBWTtBQUNDLHlFQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUN2TjFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUQ7QUFDb0I7QUFDK0I7QUFDekQ7QUFDRztBQUNPO0FBQ1Y7QUFDdEM7QUFDQTtBQUNBO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0VBQVU7QUFDN0IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxnQkFBZ0IsRUFBRTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLDJFQUFnQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QywyRUFBZ0I7QUFDNUQ7QUFDQTtBQUNBLCtDQUErQyx3RUFBYTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxpRUFBWTtBQUN4RDtBQUNB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aUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckYscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckY7QUFDQTtBQUNBLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGO0FBQ0E7QUFDQSxxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRixxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRjtBQUNBO0FBQ0EscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckYscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckY7QUFDQTtBQUNBLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRixxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRjtBQUNBO0FBQ0EscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckYscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckY7QUFDQTtBQUNBLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGO0FBQ0E7QUFDQSxxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0Is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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLHdEQUFRO0FBQ2hELEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IFJlbmRlcmVyLCB7IERSQVdJTkdfQ09OU1QgfSBmcm9tIFwiLi4vUmVuZGVyL1JlbmRlcmVyXCI7XHJcbmltcG9ydCBHYW1lT2JqZWN0IGZyb20gXCIuL09iamVjdC9HYW1lT2JqZWN0XCI7XHJcbmltcG9ydCBUYW5rT2JqZWN0IGZyb20gXCIuL09iamVjdC9UYW5rT2JqZWN0XCI7XHJcbmltcG9ydCB7IGdldFRvdGFsT2ZUYW5rR3JvdXAgfSBmcm9tIFwiLi9MZXZlbC9JTGV2ZWxcIjtcclxuaW1wb3J0IEVEaXJlY3Rpb24gZnJvbSBcIi4uL1V0aWxzL0VEaXJlY3Rpb25cIjtcclxuaW1wb3J0IHsgQmxvY2tDb2xsaXNpb25UZXN0LCBPYmplY3RDb2xsaXNpb25UZXN0LCBSZWN0YW5nbGVDb2xsaXNpb25UZXN0IH0gZnJvbSBcIi4uL1V0aWxzL0NvbGxpc2lvblRlc3RcIjtcclxuaW1wb3J0IFNQUlRJRV9ERUYgZnJvbSBcIi4uL1JlbmRlci9TcHJpdGUvU3ByaXRlRGVmaW5pdGlvblwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uT2JqZWN0IGZyb20gXCIuL09iamVjdC9BbmltYXRpb25PYmplY3RcIjtcclxuaW1wb3J0IHsgQW5pbWF0aW9uRGVmYXVsdHMgfSBmcm9tIFwiLi9PYmplY3QvRW51bS9FQW5pbWF0aW9uVHlwZVwiO1xyXG5pbXBvcnQgQmxvY2tPYmplY3QgZnJvbSBcIi4vT2JqZWN0L0Jsb2NrT2JqZWN0XCI7XHJcbmltcG9ydCB7IEVuZW15VHlwZSB9IGZyb20gXCIuL09iamVjdC9FbnVtL0VUYW5rVHlwZVwiO1xyXG5pbXBvcnQgeyBnZXRTcHJpdGVEYXRhLCBnZXRPYmplY3RTaXplIH0gZnJvbSBcIi4uL1JlbmRlci9TcHJpdGUvU3ByaXRlRGF0YVwiO1xyXG5pbXBvcnQgRGVmYXVsdExldmVscyBmcm9tIFwiLi9MZXZlbC9EZWZhdWx0TGV2ZWxzL0RlZmF1bHRMZXZlbHNcIjtcclxuaW1wb3J0IElucHV0TWFuYWdlciBmcm9tIFwiLi9JbnB1dE1hbmFnZXIvSW5wdXRNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IGdldFJhbmRvbVJhbmdlLCBnZXRSYW5kb21FbnVtLCBkZWVwQ2xvbmUgfSBmcm9tIFwiLi4vVXRpbHMvVXRpbHNcIjtcclxuaW1wb3J0IFRhbmtBSU9CamVjdCBmcm9tIFwiLi9PYmplY3QvVGFua0FJT2JqZWN0XCI7XHJcbmltcG9ydCBFSXRlbVR5cGUgZnJvbSBcIi4vT2JqZWN0L0VudW0vRUl0ZW1UeXBlXCI7XHJcbmltcG9ydCBJdGVtT2JqZWN0LCB7IElURU1fV0FUQ0hfVElNRSB9IGZyb20gXCIuL09iamVjdC9JdGVtT2JqZWN0XCI7XHJcbmV4cG9ydCB2YXIgTUFJTl9UQU5LX0lEID0gJ01BSU4nO1xyXG5leHBvcnQgdmFyIE1BWElNVU1fVEFOS1MgPSA0O1xyXG5leHBvcnQgdmFyIFRBTktfU1BBV05fREVMQVkgPSAyNTAwO1xyXG5leHBvcnQgdmFyIFRBTktfU1BBV05fUE9JTlQgPSB7XHJcbiAgICBQTEFZRVJfVEFOSzogW1xyXG4gICAgICAgIHsgeDogNCwgeTogMTIgfSxcclxuICAgICAgICB7IHg6IDgsIHk6IDEyIH1cclxuICAgIF0sXHJcbiAgICBFTkVNWV9UQU5LOiBbXHJcbiAgICAgICAgeyB4OiAwLCB5OiAwIH0sXHJcbiAgICAgICAgeyB4OiA2LCB5OiAwIH0sXHJcbiAgICAgICAgeyB4OiAxMiwgeTogMCB9XHJcbiAgICBdXHJcbn07XHJcbnZhciBHYW1lID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gR2FtZShzY3JlZW4sIHNwcml0ZV9tYWluX3NyYywgc3ByaXRlX3RpdGxlX3NyYywgZGVidWcpIHtcclxuICAgICAgICB0aGlzLmRlYnVnID0gZGVidWc7XHJcbiAgICAgICAgdGhpcy5fb2JqZWN0cyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2xhc3RTcGF3biA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIHRoaXMuX3BhdXNlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fZW5lbXlQYXVzZSA9IHtcclxuICAgICAgICAgICAgZXhwaXJlVGltZTogMCxcclxuICAgICAgICAgICAgcGF1c2U6IGZhbHNlXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9yZW5kZXJlciA9IG5ldyBSZW5kZXJlcih0aGlzLCBzY3JlZW4sIHNwcml0ZV9tYWluX3NyYywgc3ByaXRlX3RpdGxlX3NyYyk7XHJcbiAgICAgICAgdGhpcy5faW5wdXRNYW5hZ2VyID0gbmV3IElucHV0TWFuYWdlcih0aGlzKTtcclxuICAgICAgICBzY3JlZW4uZm9jdXMoKTtcclxuICAgICAgICB0aGlzLnNob3dUaXRsZSgpO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEdhbWUucHJvdG90eXBlLCBcIm1haW5UYW5rXCIsIHtcclxuICAgICAgICAvLyNyZWdpb24gZ2V0dGVyIGFuZCBzZXR0ZXJcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGZvdW5kID0gdGhpcy5maW5kT2JqZWN0QnlJZChNQUlOX1RBTktfSUQpO1xyXG4gICAgICAgICAgICBpZiAoZm91bmQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvdW5kWzBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoR2FtZS5wcm90b3R5cGUsIFwib2JqZWN0c1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9vYmplY3RzO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHYW1lLnByb3RvdHlwZSwgXCJwYXVzZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9wYXVzZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHBhdXNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3BhdXNlID0gcGF1c2U7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEdhbWUucHJvdG90eXBlLCBcImVuZW15UGF1c2VcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZW5lbXlQYXVzZS5wYXVzZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoR2FtZS5wcm90b3R5cGUsIFwiZW5lbXlQYXVzZUV4cGlyZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9lbmVteVBhdXNlLmV4cGlyZVRpbWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEdhbWUucHJvdG90eXBlLCBcImtleVN0YXRlXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lucHV0TWFuYWdlci5rZXlTdGF0ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoR2FtZS5wcm90b3R5cGUsIFwiZ2FtZURhdGFcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2FtZURhdGE7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEdhbWUucHJvdG90eXBlLCBcImN1cnJlbnRNZW51XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRNZW51O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHYW1lLnByb3RvdHlwZSwgXCJjdXJzb3JJbmRleFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbnB1dE1hbmFnZXIuY3Vyc29ySW5kZXg7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgLy8jZW5kcmVnaW9uXHJcbiAgICAvLyNyZWdpb24gcHVibGljIG1ldGhvZHNcclxuICAgIC8vI3JlZ2lvbiBkZWJ1ZyBtZXRob2RzXHJcbiAgICBHYW1lLnByb3RvdHlwZS5sb2cgPSBmdW5jdGlvbiAobXNnKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGVidWcpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJbXCIgKyBwZXJmb3JtYW5jZS5ub3coKSArIFwiXSBcIiArIG1zZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8vI2VuZHJlZ2lvblxyXG4gICAgLy8jcmVnaW9uIGdhbWUgb2JqZWN0IG1ldGhvZHNcclxuICAgIEdhbWUucHJvdG90eXBlLmluc2VydE9iamVjdCA9IGZ1bmN0aW9uIChvYmplY3QpIHtcclxuICAgICAgICB0aGlzLl9vYmplY3RzLnB1c2gob2JqZWN0KTtcclxuICAgICAgICB0aGlzLnNvcnRPYmplY3QoKTtcclxuICAgIH07XHJcbiAgICBHYW1lLnByb3RvdHlwZS5yZW1vdmVPYmplY3QgPSBmdW5jdGlvbiAob2JqZWN0KSB7XHJcbiAgICAgICAgdmFyIGlkeCA9IHRoaXMuX29iamVjdHMuaW5kZXhPZihvYmplY3QpO1xyXG4gICAgICAgIHRoaXMuX29iamVjdHMuc3BsaWNlKGlkeCwgMSk7XHJcbiAgICAgICAgdGhpcy5zb3J0T2JqZWN0KCk7XHJcbiAgICB9O1xyXG4gICAgR2FtZS5wcm90b3R5cGUuc29ydE9iamVjdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5fZ2FtZURhdGEgPT0gbnVsbCB8fCB0aGlzLl9vYmplY3RzID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9vYmplY3RzLnNvcnQoZnVuY3Rpb24gKG9iajEsIG9iajIpIHtcclxuICAgICAgICAgICAgdmFyIHppbmRleDEgPSBSZW5kZXJlci5nZXRPYmplY3RaSW5kZXgob2JqMSk7XHJcbiAgICAgICAgICAgIHZhciB6aW5kZXgyID0gUmVuZGVyZXIuZ2V0T2JqZWN0WkluZGV4KG9iajIpO1xyXG4gICAgICAgICAgICByZXR1cm4gemluZGV4MSAtIHppbmRleDI7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgR2FtZS5wcm90b3R5cGUuZmluZE9iamVjdEJ5SWQgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fb2JqZWN0cy5maWx0ZXIoZnVuY3Rpb24gKG9iamVjdCkgeyByZXR1cm4gb2JqZWN0LmlkID09PSBpZDsgfSk7XHJcbiAgICB9O1xyXG4gICAgR2FtZS5wcm90b3R5cGUuY29sbGlzaW9uVGVzdCA9IGZ1bmN0aW9uIChvYmplY3QpIHtcclxuICAgICAgICB2YXIgZm91bmQgPSBbXTtcclxuICAgICAgICBpZiAodGhpcy5fZ2FtZURhdGEgPT0gbnVsbCB8fCB0aGlzLl9vYmplY3RzID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZvdW5kO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9vYmplY3RzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0gPT0gb2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGl0ZW0ub2JqZWN0VHlwZSA9PT0gXCJBTklNQVRJT05cIiAvKiBBTklNQVRJT04gKi8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChpdGVtLm9iamVjdFR5cGUgPT09IFwiQkxPQ0tcIiAvKiBCTE9DSyAqLykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGJsb2NrVHlwZSA9IGl0ZW0uYmxvY2tUeXBlO1xyXG4gICAgICAgICAgICAgICAgaWYgKChvYmplY3Qub2JqZWN0VHlwZSA9PT0gXCJUQU5LXCIgLyogVEFOSyAqLyB8fCBvYmplY3Qub2JqZWN0VHlwZSA9PT0gXCJCVUxMRVRcIiAvKiBCVUxMRVQgKi8pICYmIGJsb2NrVHlwZSA9PT0gXCJCVVNIXCIgLyogQlVTSCAqLykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChvYmplY3Qub2JqZWN0VHlwZSA9PT0gXCJCVUxMRVRcIiAvKiBCVUxMRVQgKi8gJiYgYmxvY2tUeXBlID09PSBcIldBVEVSXCIgLyogV0FURVIgKi8pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoaXRlbS5vYmplY3RUeXBlID09PSBcIlRBTktcIiAvKiBUQU5LICovKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0Lm9iamVjdFR5cGUgPT09IFwiQlVMTEVUXCIgLyogQlVMTEVUICovKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uaWQgPT09IG9iamVjdC5wYXJlbnRJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnZpc2libGUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoaXRlbS5vYmplY3RUeXBlID09PSBcIkJVTExFVFwiIC8qIEJVTExFVCAqLykge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC5vYmplY3RUeXBlID09PSBcIlRBTktcIiAvKiBUQU5LICovKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGl0ZW0ub2JqZWN0VHlwZSA9PT0gXCJJVEVNXCIgLyogSVRFTSAqLykge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC5vYmplY3RUeXBlID09PSBcIkJVTExFVFwiIC8qIEJVTExFVCAqLykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgdGVzdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoaXRlbS5vYmplY3RUeXBlID09PSBcIkJMT0NLXCIgLyogQkxPQ0sgKi8pIHtcclxuICAgICAgICAgICAgICAgIHRlc3QgPSBCbG9ja0NvbGxpc2lvblRlc3QoaXRlbSwgb2JqZWN0KS5sZW5ndGggPiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGVzdCA9IE9iamVjdENvbGxpc2lvblRlc3Qob2JqZWN0LCBpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGVzdCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgZm91bmQucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBmb3VuZDtcclxuICAgIH07XHJcbiAgICBHYW1lLnByb3RvdHlwZS5zdGFydEFuaW1hdGlvbiA9IGZ1bmN0aW9uICh0YXJnZXQsIGFuaW1hdGlvblR5cGUsIGFuaW1hdGlvblZhbHVlLCBjYWxsYmFjaykge1xyXG4gICAgICAgIHZhciBhbmltYXRpb25Qb2ludDtcclxuICAgICAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgR2FtZU9iamVjdCkge1xyXG4gICAgICAgICAgICB2YXIgb2JqZWN0ID0gdGFyZ2V0O1xyXG4gICAgICAgICAgICB2YXIgc2l6ZSA9IGdldFNwcml0ZURhdGEob2JqZWN0KS5zaXplO1xyXG4gICAgICAgICAgICBhbmltYXRpb25Qb2ludCA9IHtcclxuICAgICAgICAgICAgICAgIHg6IG9iamVjdC5wb3NpdGlvbi54ICsgc2l6ZS53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgICAgICB5OiBvYmplY3QucG9zaXRpb24ueSArIHNpemUuaGVpZ2h0IC8gMlxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgYW5pbWF0aW9uUG9pbnQgPSB0YXJnZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhbmltYXRpb25WYWx1ZSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgYW5pbWF0aW9uVmFsdWUgPSBBbmltYXRpb25EZWZhdWx0c1thbmltYXRpb25UeXBlXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGFuaW1hdGlvbiA9IG5ldyBBbmltYXRpb25PYmplY3QodGhpcywgbnVsbCwgYW5pbWF0aW9uVHlwZSwgYW5pbWF0aW9uUG9pbnQsIGFuaW1hdGlvblZhbHVlLmR1cmF0aW9uLCBhbmltYXRpb25WYWx1ZS5mcmFtZVJhdGUsIGFuaW1hdGlvblZhbHVlLmxvb3AsIGNhbGxiYWNrKTtcclxuICAgICAgICB0aGlzLmluc2VydE9iamVjdChhbmltYXRpb24pO1xyXG4gICAgfTtcclxuICAgIC8vI3JlZ2lvbiByZW5kZXJlciBwb3J0aW5nIG1ldGhvZHNcclxuICAgIC8qKlxyXG4gICAgICogVGVzdCBvYmplY3QgaXMgdmlzaWJsZSAoUG9ydCBvZiBSZW5kZXJlci50ZXN0VmlzaWJpbGl0eSlcclxuICAgICAqIEBwYXJhbSBvYmplY3Qgb2JqZWN0IGZvciB0ZXN0XHJcbiAgICAgKiBAcGFyYW0gc3ByaXRlIG9iamVjdCdzIHNwcml0ZSBkYXRhIGZvciBzaXplXHJcbiAgICAgKi9cclxuICAgIEdhbWUucHJvdG90eXBlLnRlc3RWaXNpYmlsaXR5ID0gZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXJlci5vYmplY3RWaXNpYmxlVGVzdChvYmplY3QpO1xyXG4gICAgfTtcclxuICAgIC8vI2VuZHJlZ2lvblxyXG4gICAgLy8jZW5kcmVnaW9uXHJcbiAgICBHYW1lLnByb3RvdHlwZS5uZXdHYW1lID0gZnVuY3Rpb24gKHBsYXllckNvdW50LCBsZXZlbElkKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRNZW51ID0gXCJHQU1FXCIgLyogR0FNRSAqLztcclxuICAgICAgICB0aGlzLl9vYmplY3RzID0gW107XHJcbiAgICAgICAgdGhpcy5fZ2FtZURhdGEgPSB7fTtcclxuICAgICAgICB2YXIgZ2FtZWRhdGEgPSB0aGlzLl9nYW1lRGF0YTtcclxuICAgICAgICB2YXIgcGxheWVyRGF0YSA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGxheWVyQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBwbGF5ZXJEYXRhLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgbGlmZTogNSxcclxuICAgICAgICAgICAgICAgIHNjb3JlOiAwLFxyXG4gICAgICAgICAgICAgICAgZGVzdHJveWVkVGFuazoge31cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdhbWVkYXRhLmdhbWVUeXBlID0gMCAvKiBQVkUgKi87XHJcbiAgICAgICAgZ2FtZWRhdGEucGxheWVyRGF0YSA9IHBsYXllckRhdGE7XHJcbiAgICAgICAgZ2FtZWRhdGEuZ2FtZU92ZXIgPSBmYWxzZTtcclxuICAgICAgICBpZiAobGV2ZWxJZCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5uZXdMZXZlbChsZXZlbElkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgKChfYSA9IGdhbWVkYXRhLmxldmVsRGF0YSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmxldmVsSWQpID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5ld0xldmVsKGdhbWVkYXRhLmxldmVsRGF0YS5sZXZlbElkICsgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5ld0xldmVsKDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEdhbWUucHJvdG90eXBlLm5ld0xldmVsID0gZnVuY3Rpb24gKGxldmVsSWQpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRNZW51ID0gXCJTVEFHRVwiIC8qIFNUQUdFICovO1xyXG4gICAgICAgIHRoaXMuX29iamVjdHMgPSBbXTtcclxuICAgICAgICB0aGlzLl9nYW1lRGF0YS5sZXZlbERhdGEgPSBkZWVwQ2xvbmUoRGVmYXVsdExldmVscy5maW5kKGZ1bmN0aW9uIChsZXZlbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbGV2ZWwubGV2ZWxJZCA9PT0gbGV2ZWxJZDtcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgdGhpcy5zaG93Q3VydGFpbigpO1xyXG4gICAgICAgIHRoaXMuc3Bhd25UYW5rKFwiUExBWUVSX1RBTktcIiAvKiBQTEFZRVJfVEFOSyAqLywgdHJ1ZSwgMCk7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZURhdGEucGxheWVyRGF0YS5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3Bhd25UYW5rKFwiUExBWUVSX1RBTktcIiAvKiBQTEFZRVJfVEFOSyAqLywgdHJ1ZSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2dhbWVEYXRhLmxldmVsRGF0YS5ibG9ja3MuZm9yRWFjaChmdW5jdGlvbiAoYmxvY2spIHtcclxuICAgICAgICAgICAgX3RoaXMuaW5zZXJ0T2JqZWN0KG5ldyBCbG9ja09iamVjdChfdGhpcywgYmxvY2sudHlwZSwge1xyXG4gICAgICAgICAgICAgICAgeDogRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS5sZWZ0ICsgYmxvY2sucG9zaXRpb24ueCAqIDMyLFxyXG4gICAgICAgICAgICAgICAgeTogRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS50b3AgKyBibG9jay5wb3NpdGlvbi55ICogMzJcclxuICAgICAgICAgICAgfSwgYmxvY2suYmxvY2tTdGF0ZSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEdhbWUucHJvdG90eXBlLnNob3dDdXJ0YWluID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudE1lbnUgPSBcIlNUQUdFXCIgLyogU1RBR0UgKi87XHJcbiAgICAgICAgdGhpcy5fb2JqZWN0cyA9IFtdO1xyXG4gICAgICAgIHRoaXMuc3RhcnRBbmltYXRpb24oeyB4OiAwLCB5OiAwIH0sIFwiQ1VSVEFJTlwiIC8qIENVUlRBSU4gKi8sIG51bGwsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgX3RoaXMuX2N1cnJlbnRNZW51ID0gXCJHQU1FXCIgLyogR0FNRSAqLztcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBHYW1lLnByb3RvdHlwZS5zZXRQYXVzZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLl9wYXVzZSA9IHRydWU7XHJcbiAgICAgICAgdmFyIEZSQU1FID0gRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZTtcclxuICAgICAgICB2YXIgU0NSRUVOID0gRFJBV0lOR19DT05TVC5zaXplcy5zY3JlZW47XHJcbiAgICAgICAgdGhpcy5zdGFydEFuaW1hdGlvbih7XHJcbiAgICAgICAgICAgIHg6IEZSQU1FLmxlZnQgKyBTQ1JFRU4ud2lkdGggLyAyLFxyXG4gICAgICAgICAgICB5OiAoRlJBTUUudG9wICsgRlJBTUUuYm90dG9tICsgU0NSRUVOLmhlaWdodCkgLyAyICsgU1BSVElFX0RFRi5BTklNQVRJT04uUEFVU0VbMF0uc2l6ZS5oZWlnaHQgLyAyXHJcbiAgICAgICAgfSwgXCJQQVVTRVwiIC8qIFBBVVNFICovKTtcclxuICAgIH07XHJcbiAgICBHYW1lLnByb3RvdHlwZS5zZXRFbmVteVBhdXNlID0gZnVuY3Rpb24gKHBhdXNlKSB7XHJcbiAgICAgICAgdGhpcy5fZW5lbXlQYXVzZS5wYXVzZSA9IHBhdXNlO1xyXG4gICAgICAgIGlmIChwYXVzZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9lbmVteVBhdXNlLmV4cGlyZVRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKSArIElURU1fV0FUQ0hfVElNRTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgR2FtZS5wcm90b3R5cGUuZ2FtZW92ZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBpZiAodGhpcy5nYW1lRGF0YS5nYW1lT3Zlcikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2FtZURhdGEuZ2FtZU92ZXIgPSB0cnVlO1xyXG4gICAgICAgIHZhciBGUkFNRSA9IERSQVdJTkdfQ09OU1Quc2l6ZXMuZnJhbWU7XHJcbiAgICAgICAgdmFyIFNDUkVFTiA9IERSQVdJTkdfQ09OU1Quc2l6ZXMuc2NyZWVuO1xyXG4gICAgICAgIHRoaXMuc3RhcnRBbmltYXRpb24oe1xyXG4gICAgICAgICAgICB4OiBGUkFNRS5sZWZ0ICsgU0NSRUVOLndpZHRoIC8gMixcclxuICAgICAgICAgICAgeTogRlJBTUUudG9wICsgRlJBTUUuYm90dG9tICsgU0NSRUVOLmhlaWdodFxyXG4gICAgICAgIH0sIFwiR0FNRU9WRVJcIiAvKiBHQU1FT1ZFUiAqLywgbnVsbCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBfdGhpcy5zaG93UmVzdWx0U2NyZWVuKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgR2FtZS5wcm90b3R5cGUuc2hvd1Jlc3VsdFNjcmVlbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLl9jdXJyZW50TWVudSA9IFwiUkVTVUxUXCIgLyogUkVTVUxUICovO1xyXG4gICAgICAgIHRoaXMuX29iamVjdHMgPSBbXTtcclxuICAgIH07XHJcbiAgICBHYW1lLnByb3RvdHlwZS5zaG93VGl0bGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLl9jdXJyZW50TWVudSA9IFwiTUFJTlwiIC8qIE1BSU4gKi87XHJcbiAgICAgICAgdGhpcy5fb2JqZWN0cyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnRpdGxlU2hvd24gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9pbnB1dE1hbmFnZXIuaW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIHZhciBGUkFNRSA9IERSQVdJTkdfQ09OU1Quc2l6ZXMuZnJhbWU7XHJcbiAgICAgICAgdmFyIFNDUkVFTiA9IERSQVdJTkdfQ09OU1Quc2l6ZXMuc2NyZWVuO1xyXG4gICAgICAgIHRoaXMuc3RhcnRBbmltYXRpb24oe1xyXG4gICAgICAgICAgICB4OiAoRlJBTUUubGVmdCArIFNDUkVFTi53aWR0aCArIEZSQU1FLnJpZ2h0KSAvIDIsXHJcbiAgICAgICAgICAgIHk6IChGUkFNRS50b3AgKyBTQ1JFRU4ud2lkdGggKyBGUkFNRS5ib3R0b20pICogMS41XHJcbiAgICAgICAgfSwgXCJUSVRMRVwiIC8qIFRJVExFICovLCBudWxsLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIF90aGlzLnN0YXJ0QW5pbWF0aW9uKHtcclxuICAgICAgICAgICAgICAgIHg6IDEyOSArIDE2LFxyXG4gICAgICAgICAgICAgICAgeTogMjY1ICsgX3RoaXMuY3Vyc29ySW5kZXggKiAzMiArIDE2XHJcbiAgICAgICAgICAgIH0sIFwiQ1VSU09SXCIgLyogQ1VSU09SICovKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvLyNlbmRyZWdpb25cclxuICAgIC8vI3JlZ2lvbiBwcml2YXRlIG1ldGhvZHNcclxuICAgIEdhbWUucHJvdG90eXBlLnNwYXduVGFuayA9IGZ1bmN0aW9uICh0YW5rVHlwZSwgZnJlZVNwYXduLCBwbGF5ZXJJbmRleCkge1xyXG4gICAgICAgIGlmIChmcmVlU3Bhd24gPT09IHZvaWQgMCkgeyBmcmVlU3Bhd24gPSBmYWxzZTsgfVxyXG4gICAgICAgIGlmICh0YW5rVHlwZSA9PT0gXCJQTEFZRVJfVEFOS1wiIC8qIFBMQVlFUl9UQU5LICovKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9nYW1lRGF0YS5wbGF5ZXJEYXRhW3BsYXllckluZGV4XS5saWZlIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgdGFua0NvbG9yID0gdm9pZCAwO1xyXG4gICAgICAgICAgICBpZiAocGxheWVySW5kZXggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRhbmtDb2xvciA9IFwiWUVMTE9XXCIgLyogWUVMTE9XICovO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGFua0NvbG9yID0gXCJHUkVFTlwiIC8qIEdSRUVOICovO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBwb3NpdGlvbiA9IFRBTktfU1BBV05fUE9JTlRbdGFua1R5cGVdW3BsYXllckluZGV4XTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVQbGF5ZXJUYW5rKHtcclxuICAgICAgICAgICAgICAgIHg6IERSQVdJTkdfQ09OU1Quc2l6ZXMuZnJhbWUubGVmdCArIHBvc2l0aW9uLnggKiBnZXRPYmplY3RTaXplKFwiVEFOS1wiIC8qIFRBTksgKi8pLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgeTogRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS50b3AgKyBwb3NpdGlvbi55ICogZ2V0T2JqZWN0U2l6ZShcIlRBTktcIiAvKiBUQU5LICovKS5oZWlnaHQsXHJcbiAgICAgICAgICAgIH0sIEVEaXJlY3Rpb24udXAsIHRhbmtDb2xvciwgMCk7XHJcbiAgICAgICAgICAgIGlmIChmcmVlU3Bhd24gPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9nYW1lRGF0YS5wbGF5ZXJEYXRhW3BsYXllckluZGV4XS5saWZlLS07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGFua1R5cGUgPT09IFwiRU5FTVlfVEFOS1wiIC8qIEVORU1ZX1RBTksgKi8pIHtcclxuICAgICAgICAgICAgdmFyIG5vdyA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgICAgICBpZiAobm93IC0gdGhpcy5fbGFzdFNwYXduID4gVEFOS19TUEFXTl9ERUxBWSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbGFzdFNwYXduID0gbm93O1xyXG4gICAgICAgICAgICAgICAgdmFyIHRhbmtzID0gdGhpcy5fb2JqZWN0cy5maWx0ZXIoZnVuY3Rpb24gKHgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geC5vYmplY3RUeXBlID09PSBcIlRBTktcIiAvKiBUQU5LICovICYmIHgudGFua1R5cGUgPT09IFwiRU5FTVlfVEFOS1wiIC8qIEVORU1ZX1RBTksgKi87XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmICh0YW5rcy5sZW5ndGggPj0gTUFYSU1VTV9UQU5LUykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlRW5lbXlUYW5rKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgR2FtZS5wcm90b3R5cGUuc3Bhd25JdGVtID0gZnVuY3Rpb24gKGl0ZW1UeXBlLCBwb3NpdGlvbikge1xyXG4gICAgICAgIGlmIChpdGVtVHlwZSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaXRlbVR5cGUgPSBnZXRSYW5kb21FbnVtKEVJdGVtVHlwZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcG9zaXRpb24gPSB0aGlzLl9yZW5kZXJlci5yYW5kb21Qb2ludChnZXRPYmplY3RTaXplKFwiSVRFTVwiIC8qIElURU0gKi8pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbnNlcnRPYmplY3QobmV3IEl0ZW1PYmplY3QodGhpcywgaXRlbVR5cGUsIHBvc2l0aW9uKSk7XHJcbiAgICB9O1xyXG4gICAgR2FtZS5wcm90b3R5cGUuY3JlYXRlUGxheWVyVGFuayA9IGZ1bmN0aW9uIChwb3NpdGlvbiwgZGlyZWN0aW9uLCB0YW5rQ29sb3IsIHRhbmtMZXZlbCkge1xyXG4gICAgICAgIGlmICh0aGlzLm1haW5UYW5rKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlT2JqZWN0KHRoaXMubWFpblRhbmspO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmluc2VydE9iamVjdChuZXcgVGFua09iamVjdCh0aGlzLCBcIlBMQVlFUl9UQU5LXCIgLyogUExBWUVSX1RBTksgKi8sIHBvc2l0aW9uLCBkaXJlY3Rpb24sIHRhbmtDb2xvciwgdGFua0xldmVsLCBNQUlOX1RBTktfSUQpKTtcclxuICAgIH07XHJcbiAgICBHYW1lLnByb3RvdHlwZS5jcmVhdGVFbmVteVRhbmsgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHRhbmtTaXplID0gZ2V0T2JqZWN0U2l6ZShcIlRBTktcIiAvKiBUQU5LICovKTtcclxuICAgICAgICB2YXIgc3Bhd25Qb2ludHMgPSBUQU5LX1NQQVdOX1BPSU5ULkVORU1ZX1RBTks7XHJcbiAgICAgICAgdmFyIGF2YWlsYWJsZVBvaW50cyA9IFtdO1xyXG4gICAgICAgIHZhciBvYmplY3RzID0gdGhpcy5vYmplY3RzLmZpbHRlcihmdW5jdGlvbiAob2JqZWN0KSB7IHJldHVybiBvYmplY3Qub2JqZWN0VHlwZSA9PT0gXCJUQU5LXCIgLyogVEFOSyAqLzsgfSk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzcGF3blBvaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgc3VjY2VzcyA9IHRydWU7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgb2JqZWN0cy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKFJlY3RhbmdsZUNvbGxpc2lvblRlc3QodGhpcy50cmFuc2xhdGVCbG9ja1Bvc2l0aW9uKHNwYXduUG9pbnRzW2ldKSwgdGFua1NpemUsIG9iamVjdHNbal0ucG9zaXRpb24sIHRhbmtTaXplKSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICBhdmFpbGFibGVQb2ludHMucHVzaChzcGF3blBvaW50c1tpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGF2YWlsYWJsZVBvaW50cy5sZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9sYXN0U3Bhd24gPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaWR4ID0gZ2V0UmFuZG9tUmFuZ2UoMCwgYXZhaWxhYmxlUG9pbnRzLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgIHZhciBwb3NpdGlvbiA9IHRoaXMudHJhbnNsYXRlQmxvY2tQb3NpdGlvbihhdmFpbGFibGVQb2ludHNbaWR4XSk7XHJcbiAgICAgICAgdmFyIG5leHQgPSB0aGlzLm5leHRUYW5rKCk7XHJcbiAgICAgICAgaWYgKG5leHQgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHZhciBlbmVteSA9IG9iamVjdHMuZmluZChmdW5jdGlvbiAoeCkgeyByZXR1cm4geC50YW5rVHlwZSA9PT0gXCJFTkVNWV9UQU5LXCIgLyogRU5FTVlfVEFOSyAqLzsgfSk7XHJcbiAgICAgICAgICAgIGlmIChlbmVteSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV3TGV2ZWwodGhpcy5nYW1lRGF0YS5sZXZlbERhdGEubGV2ZWxJZCArIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbnNlcnRPYmplY3QobmV3IFRhbmtBSU9CamVjdCh0aGlzLCBuZXh0LnR5cGUsIG5leHQuaXRlbSwgcG9zaXRpb24sIEVEaXJlY3Rpb24uZG93bikpO1xyXG4gICAgfTtcclxuICAgIEdhbWUucHJvdG90eXBlLnRyYW5zbGF0ZUJsb2NrUG9zaXRpb24gPSBmdW5jdGlvbiAocG9pbnQpIHtcclxuICAgICAgICB2YXIgYmxvY2tTaXplID0gZ2V0T2JqZWN0U2l6ZShcIkJMT0NLXCIgLyogQkxPQ0sgKi8pO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHg6IERSQVdJTkdfQ09OU1Quc2l6ZXMuZnJhbWUubGVmdCArIHBvaW50LnggKiBibG9ja1NpemUud2lkdGgsXHJcbiAgICAgICAgICAgIHk6IERSQVdJTkdfQ09OU1Quc2l6ZXMuZnJhbWUudG9wICsgcG9pbnQueSAqIGJsb2NrU2l6ZS5oZWlnaHRcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIEdhbWUucHJvdG90eXBlLm5leHRUYW5rID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHRhbmtHcm91cHMgPSB0aGlzLl9nYW1lRGF0YS5sZXZlbERhdGEudGFua3M7XHJcbiAgICAgICAgdmFyIHR5cGU7XHJcbiAgICAgICAgdmFyIHN1bSA9IDA7XHJcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgICAgICB2YXIgdG90YWwgPSBnZXRUb3RhbE9mVGFua0dyb3VwKHRhbmtHcm91cHNbaV0pO1xyXG4gICAgICAgICAgICBpZiAodG90YWwgPiAwICYmIHR5cGUgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYXZhaWxhYmxlVHlwZXNfMSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhFbmVteVR5cGUpLmZvckVhY2goZnVuY3Rpb24gKHR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuX2dhbWVEYXRhLmxldmVsRGF0YS50YW5rc1tpXVt0eXBlXSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXZhaWxhYmxlVHlwZXNfMS5wdXNoKHR5cGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdHlwZSA9IGF2YWlsYWJsZVR5cGVzXzFbZ2V0UmFuZG9tUmFuZ2UoMCwgYXZhaWxhYmxlVHlwZXNfMS5sZW5ndGggLSAxKV07XHJcbiAgICAgICAgICAgICAgICB0aGlzXzEuX2dhbWVEYXRhLmxldmVsRGF0YS50YW5rc1tpXVt0eXBlXS0tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN1bSArPSB0b3RhbDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciB0aGlzXzEgPSB0aGlzO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFua0dyb3Vwcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBfbG9vcF8xKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3VtID4gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogdHlwZSxcclxuICAgICAgICAgICAgICAgIGl0ZW06ICgyMCAtIHN1bSkgJSA1ID09PSAwICYmIDIwIC0gc3VtID4gMFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gR2FtZTtcclxufSgpKTtcclxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcclxuIiwiaW1wb3J0IEVEaXJlY3Rpb24gZnJvbSBcIi4uLy4uL1V0aWxzL0VEaXJlY3Rpb25cIjtcclxuZXhwb3J0IGZ1bmN0aW9uIEVLZXlzVG9FRGlyZWN0aW9uKGtleXMpIHtcclxuICAgIHN3aXRjaCAoa2V5cykge1xyXG4gICAgICAgIGNhc2UgXCJBcnJvd1VwXCIgLyogYXJyb3dfdXAgKi86XHJcbiAgICAgICAgICAgIHJldHVybiBFRGlyZWN0aW9uLnVwO1xyXG4gICAgICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCIgLyogYXJyb3dfcmlnaHQgKi86XHJcbiAgICAgICAgICAgIHJldHVybiBFRGlyZWN0aW9uLnJpZ2h0O1xyXG4gICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIiAvKiBhcnJvd19kb3duICovOlxyXG4gICAgICAgICAgICByZXR1cm4gRURpcmVjdGlvbi5kb3duO1xyXG4gICAgICAgIGNhc2UgXCJBcnJvd0xlZnRcIiAvKiBhcnJvd19sZWZ0ICovOlxyXG4gICAgICAgICAgICByZXR1cm4gRURpcmVjdGlvbi5sZWZ0O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEVLZXlzVG9FRGlyZWN0aW9uIH0gZnJvbSBcIi4vRUtleXNcIjtcclxudmFyIElucHV0TWFuYWdlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIElucHV0TWFuYWdlcihnYW1lKSB7XHJcbiAgICAgICAgdGhpcy5fZ2FtZSA9IGdhbWU7XHJcbiAgICAgICAgdGhpcy5fa2V5RXZlbnRzID0ge307XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XHJcbiAgICB9XHJcbiAgICBJbnB1dE1hbmFnZXIucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5fa2V5U3RhdGUgPSB7XHJcbiAgICAgICAgICAgIEFycm93RG93bjogZmFsc2UsXHJcbiAgICAgICAgICAgIEFycm93VXA6IGZhbHNlLFxyXG4gICAgICAgICAgICBBcnJvd1JpZ2h0OiBmYWxzZSxcclxuICAgICAgICAgICAgQXJyb3dMZWZ0OiBmYWxzZSxcclxuICAgICAgICAgICAgRXNjYXBlOiBmYWxzZSxcclxuICAgICAgICAgICAgU3BhY2U6IGZhbHNlXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9jdXJzb3JJbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5zZXRFdmVudHMoKTtcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSW5wdXRNYW5hZ2VyLnByb3RvdHlwZSwgXCJrZXlTdGF0ZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9rZXlTdGF0ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSW5wdXRNYW5hZ2VyLnByb3RvdHlwZSwgXCJjdXJzb3JJbmRleFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jdXJzb3JJbmRleDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBJbnB1dE1hbmFnZXIucHJvdG90eXBlLnNldEV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmICh0aGlzLl9rZXlFdmVudHMua2V5ZG93biAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9rZXlFdmVudHMua2V5ZG93bik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9rZXlFdmVudHMua2V5dXAgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuX2tleUV2ZW50cy5rZXl1cCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2tleUV2ZW50cy5rZXlkb3duID0gZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgICAgIF90aGlzLmtleURvd25FdmVudChldik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9rZXlFdmVudHMua2V5dXAgPSBmdW5jdGlvbiAoZXYpIHtcclxuICAgICAgICAgICAgX3RoaXMua2V5VXBFdmVudChldik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fa2V5RXZlbnRzLmtleWRvd24pO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5fa2V5RXZlbnRzLmtleXVwKTtcclxuICAgIH07XHJcbiAgICBJbnB1dE1hbmFnZXIucHJvdG90eXBlLnJlc2V0QXJyb3dJbnB1dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLl9rZXlTdGF0ZS5BcnJvd1VwID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fa2V5U3RhdGUuQXJyb3dSaWdodCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2tleVN0YXRlLkFycm93RG93biA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2tleVN0YXRlLkFycm93TGVmdCA9IGZhbHNlO1xyXG4gICAgfTtcclxuICAgIElucHV0TWFuYWdlci5wcm90b3R5cGUua2V5RG93bkV2ZW50ID0gZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgdmFyIG1haW5UYW5rID0gdGhpcy5fZ2FtZS5tYWluVGFuaztcclxuICAgICAgICB2YXIgbWVudSA9IHRoaXMuX2dhbWUuY3VycmVudE1lbnU7XHJcbiAgICAgICAgaWYgKG1lbnUgPT09IFwiR0FNRVwiIC8qIEdBTUUgKi8pIHtcclxuICAgICAgICAgICAgc3dpdGNoIChldi5jb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dVcFwiIC8qIGFycm93X3VwICovOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIiAvKiBhcnJvd19yaWdodCAqLzpcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIiAvKiBhcnJvd19kb3duICovOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiIC8qIGFycm93X2xlZnQgKi86XHJcbiAgICAgICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobWFpblRhbmspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFpblRhbmsuZGlyZWN0aW9uID0gRUtleXNUb0VEaXJlY3Rpb24oZXYuY29kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRBcnJvd0lucHV0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5U3RhdGVbZXYuY29kZV0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIlNwYWNlXCIgLyogc3BhY2ViYXIgKi86XHJcbiAgICAgICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobWFpblRhbmsgJiYgbWFpblRhbmsudmlzaWJsZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluVGFuay5maXJlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2tleVN0YXRlW2V2LmNvZGVdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJFc2NhcGVcIiAvKiBlc2MgKi86XHJcbiAgICAgICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9rZXlTdGF0ZVtldi5jb2RlXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9nYW1lLmdhbWVEYXRhLmdhbWVPdmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9nYW1lLnBhdXNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9nYW1lLnBhdXNlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9nYW1lLnBhdXNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChtZW51ID09PSBcIk1BSU5cIiAvKiBNQUlOICovKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZXYuY29kZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkFycm93VXBcIiAvKiBhcnJvd191cCAqLzpcclxuICAgICAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9nYW1lLm9iamVjdHMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fY3Vyc29ySW5kZXggLSAxIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3Vyc29ySW5kZXggPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3Vyc29ySW5kZXgtLTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIiAvKiBhcnJvd19kb3duICovOlxyXG4gICAgICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2dhbWUub2JqZWN0cy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jdXJzb3JJbmRleCArIDEgPiAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJzb3JJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJzb3JJbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIlNwYWNlXCIgLyogc3BhY2ViYXIgKi86XHJcbiAgICAgICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX2N1cnNvckluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2dhbWUubmV3R2FtZSgxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBJbnB1dE1hbmFnZXIucHJvdG90eXBlLmtleVVwRXZlbnQgPSBmdW5jdGlvbiAoZXYpIHtcclxuICAgICAgICB2YXIgY29kZSA9IGV2LmNvZGU7XHJcbiAgICAgICAgdGhpcy5fa2V5U3RhdGVbY29kZV0gPSBmYWxzZTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gSW5wdXRNYW5hZ2VyO1xyXG59KCkpO1xyXG5leHBvcnQgZGVmYXVsdCBJbnB1dE1hbmFnZXI7XHJcbiIsImltcG9ydCBMZXZlbDEgZnJvbSBcIi4vTGV2ZWwxXCI7XHJcbmltcG9ydCBMZXZlbDIgZnJvbSBcIi4vTGV2ZWwyXCI7XHJcbnZhciBEZWZhdWx0TGV2ZWxzID0gW1xyXG4gICAgTGV2ZWwxLCBMZXZlbDJcclxuXTtcclxuZXhwb3J0IGRlZmF1bHQgRGVmYXVsdExldmVscztcclxuIiwiaW1wb3J0IHsgQkxPQ0tfRlVMTCwgQkxPQ0tfSEFMRl9IVCwgQkxPQ0tfSEFMRl9IQiwgQkxPQ0tfSEFMRl9WUiwgQkxPQ0tfSEFMRl9WTCB9IGZyb20gXCIuL0xldmVsVXRpbHNcIjtcclxudmFyIExldmVsMSA9IHtcclxuICAgIGxldmVsSWQ6IDEsXHJcbiAgICBsZXZlbE5hbWU6ICdMRVZFTCAxJyxcclxuICAgIGJsb2NrczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMSwgeTogMSB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDMsIHk6IDEgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA1LCB5OiAxIH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNywgeTogMSB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDksIHk6IDEgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAxMSwgeTogMSB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDEsIHk6IDIgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAzLCB5OiAyIH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNSwgeTogMiB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDcsIHk6IDIgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA5LCB5OiAyIH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMTEsIHk6IDIgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAxLCB5OiAzIH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMywgeTogMyB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDUsIHk6IDMgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA2LCB5OiAzIH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiSVJPTlwiIC8qIElST04gKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDcsIHk6IDMgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA5LCB5OiAzIH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMTEsIHk6IDMgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAxLCB5OiA0IH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMywgeTogNCB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDUsIHk6IDQgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19IQUxGX0hULFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA3LCB5OiA0IH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IVCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogOSwgeTogNCB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDExLCB5OiA0IH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMSwgeTogNSB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0hBTEZfSFQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDMsIHk6IDUgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19IQUxGX0hULFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA1LCB5OiA1IH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IQixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNywgeTogNSB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0hBTEZfSEIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDksIHk6IDUgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19IQUxGX0hULFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAxMSwgeTogNSB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0hBTEZfSFQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDAsIHk6IDYgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19IQUxGX0hCLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAyLCB5OiA2IH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IQixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMywgeTogNiB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0hBTEZfSEIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDUsIHk6IDYgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19IQUxGX0hULFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA3LCB5OiA2IH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IVCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogOSwgeTogNiB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0hBTEZfSEIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDEwLCB5OiA2IH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IQixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMTIsIHk6IDYgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19IQUxGX0hCLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAwLCB5OiA3IH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiSVJPTlwiIC8qIElST04gKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0hBTEZfSFQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDIsIHk6IDcgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19IQUxGX0hULFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAzLCB5OiA3IH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IVCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNSwgeTogNyB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0hBTEZfSEIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDcsIHk6IDcgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19IQUxGX0hCLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA5LCB5OiA3IH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IVCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMTAsIHk6IDcgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19IQUxGX0hULFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAxMiwgeTogNyB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIklST05cIiAvKiBJUk9OICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19IQUxGX0hULFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAxLCB5OiA4IH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IQixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMywgeTogOCB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0hBTEZfSEIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDUsIHk6IDggfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA2LCB5OiA4IH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNywgeTogOCB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDksIHk6IDggfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19IQUxGX0hCLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAxMSwgeTogOCB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0hBTEZfSEIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDEsIHk6IDkgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAzLCB5OiA5IH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNSwgeTogOSB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDcsIHk6IDkgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA5LCB5OiA5IH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMTEsIHk6IDkgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAxLCB5OiAxMCB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDMsIHk6IDEwIH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNSwgeTogMTAgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19IQUxGX0hULFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA3LCB5OiAxMCB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0hBTEZfSFQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDksIHk6IDEwIH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMTEsIHk6IDEwIH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMSwgeTogMTEgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAzLCB5OiAxMSB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDUsIHk6IDExIH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZToge1xyXG4gICAgICAgICAgICAgICAgYm90dG9tTGVmdDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBib3R0b21SaWdodDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHRvcExlZnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdG9wUmlnaHQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDYsIHk6IDExIH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfSEFMRl9IQixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNywgeTogMTEgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiB7XHJcbiAgICAgICAgICAgICAgICBib3R0b21MZWZ0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYm90dG9tUmlnaHQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdG9wTGVmdDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB0b3BSaWdodDogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogOSwgeTogMTEgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAxMSwgeTogMTEgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA1LCB5OiAxMiB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0hBTEZfVlIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDYsIHk6IDEyIH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiRUFHTEVcIiAvKiBFQUdMRSAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNywgeTogMTIgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19IQUxGX1ZMLFxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgdGFua3M6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEFSTU9VUkVEOiAwLFxyXG4gICAgICAgICAgICBERUZBVUxUOiAxOCxcclxuICAgICAgICAgICAgU1BFRUQ6IDAsXHJcbiAgICAgICAgICAgIFBPV0VSOiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEFSTU9VUkVEOiAwLFxyXG4gICAgICAgICAgICBERUZBVUxUOiAwLFxyXG4gICAgICAgICAgICBTUEVFRDogMixcclxuICAgICAgICAgICAgUE9XRVI6IDBcclxuICAgICAgICB9XHJcbiAgICBdXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IExldmVsMTtcclxuIiwiaW1wb3J0IHsgQkxPQ0tfRlVMTCwgQkxPQ0tfSEFMRl9IQiwgQkxPQ0tfSEFMRl9WUiwgQkxPQ0tfSEFMRl9WTCB9IGZyb20gXCIuL0xldmVsVXRpbHNcIjtcclxudmFyIExldmVsMiA9IHtcclxuICAgIGxldmVsSWQ6IDIsXHJcbiAgICBsZXZlbE5hbWU6ICdMRVZFTCAyJyxcclxuICAgIGJsb2NrczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNSwgeTogMTEgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiB7XHJcbiAgICAgICAgICAgICAgICBib3R0b21MZWZ0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGJvdHRvbVJpZ2h0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdG9wTGVmdDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB0b3BSaWdodDogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNiwgeTogMTEgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19IQUxGX0hCLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA3LCB5OiAxMSB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IHtcclxuICAgICAgICAgICAgICAgIGJvdHRvbUxlZnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBib3R0b21SaWdodDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB0b3BMZWZ0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHRvcFJpZ2h0OiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA1LCB5OiAxMiB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0hBTEZfVlIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDYsIHk6IDEyIH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiRUFHTEVcIiAvKiBFQUdMRSAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNywgeTogMTIgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19IQUxGX1ZMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAzLCB5OiAwIH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiSVJPTlwiIC8qIElST04gKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDcsIHk6IDAgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJJUk9OXCIgLyogSVJPTiAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMSwgeTogMSB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDMsIHk6IDEgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJJUk9OXCIgLyogSVJPTiAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNywgeTogMSB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDksIHk6IDEgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAxMSwgeTogMSB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDEsIHk6IDIgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA2LCB5OiAyIH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNywgeTogMiB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDksIHk6IDIgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAxMCwgeTogMiB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIklST05cIiAvKiBJUk9OICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAxMSwgeTogMiB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDMsIHk6IDMgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA5LCB5OiAzIH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiSVJPTlwiIC8qIElST04gKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDAsIHk6IDQgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCVVNIXCIgLyogQlVTSCAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMywgeTogNCB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDYsIHk6IDQgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJJUk9OXCIgLyogSVJPTiAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogOSwgeTogNCB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDEwLCB5OiA0IH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlVTSFwiIC8qIEJVU0ggKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDExLCB5OiA0IH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMTIsIHk6IDQgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJJUk9OXCIgLyogSVJPTiAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMCwgeTogNSB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJVU0hcIiAvKiBCVVNIICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAxLCB5OiA1IH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlVTSFwiIC8qIEJVU0ggKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDUsIHk6IDUgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA4LCB5OiA1IH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiSVJPTlwiIC8qIElST04gKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDEwLCB5OiA1IH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlVTSFwiIC8qIEJVU0ggKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDEsIHk6IDYgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAyLCB5OiA2IH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMywgeTogNiB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDQsIHk6IDYgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCVVNIXCIgLyogQlVTSCAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNSwgeTogNiB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJVU0hcIiAvKiBCVVNIICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA2LCB5OiA2IH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlVTSFwiIC8qIEJVU0ggKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDcsIHk6IDYgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJJUk9OXCIgLyogSVJPTiAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMTAsIHk6IDYgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCVVNIXCIgLyogQlVTSCAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMTEsIHk6IDYgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAzLCB5OiA3IH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiSVJPTlwiIC8qIElST04gKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDQsIHk6IDcgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCVVNIXCIgLyogQlVTSCAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNSwgeTogNyB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDcsIHk6IDcgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA5LCB5OiA3IH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMTEsIHk6IDcgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAwLCB5OiA4IH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiSVJPTlwiIC8qIElST04gKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDEsIHk6IDggfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAzLCB5OiA4IH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiSVJPTlwiIC8qIElST04gKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDUsIHk6IDggfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA3LCB5OiA4IH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMTEsIHk6IDggfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAxLCB5OiA5IH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMywgeTogOSB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDUsIHk6IDkgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA2LCB5OiA5IH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNywgeTogOSB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDksIHk6IDkgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAxMCwgeTogOSB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIklST05cIiAvKiBJUk9OICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAxMSwgeTogOSB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDEsIHk6IDEwIH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogOSwgeTogMTAgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAxMSwgeTogMTAgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAxLCB5OiAxMSB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sXHJcbiAgICAgICAgICAgIGJsb2NrU3RhdGU6IEJMT0NLX0ZVTEwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDMsIHk6IDExIH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQlJJQ0tcIiAvKiBCUklDSyAqLyxcclxuICAgICAgICAgICAgYmxvY2tTdGF0ZTogQkxPQ0tfRlVMTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogOSwgeTogMTEgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAxMCwgeTogMTEgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAxMSwgeTogMTEgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJCUklDS1wiIC8qIEJSSUNLICovLFxyXG4gICAgICAgICAgICBibG9ja1N0YXRlOiBCTE9DS19GVUxMLFxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgdGFua3M6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEFSTU9VUkVEOiAwLFxyXG4gICAgICAgICAgICBERUZBVUxUOiAxOCxcclxuICAgICAgICAgICAgU1BFRUQ6IDAsXHJcbiAgICAgICAgICAgIFBPV0VSOiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEFSTU9VUkVEOiAwLFxyXG4gICAgICAgICAgICBERUZBVUxUOiAwLFxyXG4gICAgICAgICAgICBTUEVFRDogMixcclxuICAgICAgICAgICAgUE9XRVI6IDBcclxuICAgICAgICB9XHJcbiAgICBdXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IExldmVsMjtcclxuIiwiZXhwb3J0IHZhciBCTE9DS19GVUxMID0ge1xyXG4gICAgYm90dG9tTGVmdDogdHJ1ZSxcclxuICAgIGJvdHRvbVJpZ2h0OiB0cnVlLFxyXG4gICAgdG9wTGVmdDogdHJ1ZSxcclxuICAgIHRvcFJpZ2h0OiB0cnVlXHJcbn07XHJcbmV4cG9ydCB2YXIgQkxPQ0tfSEFMRl9IVCA9IHtcclxuICAgIGJvdHRvbUxlZnQ6IGZhbHNlLFxyXG4gICAgYm90dG9tUmlnaHQ6IGZhbHNlLFxyXG4gICAgdG9wTGVmdDogdHJ1ZSxcclxuICAgIHRvcFJpZ2h0OiB0cnVlXHJcbn07XHJcbmV4cG9ydCB2YXIgQkxPQ0tfSEFMRl9IQiA9IHtcclxuICAgIGJvdHRvbUxlZnQ6IHRydWUsXHJcbiAgICBib3R0b21SaWdodDogdHJ1ZSxcclxuICAgIHRvcExlZnQ6IGZhbHNlLFxyXG4gICAgdG9wUmlnaHQ6IGZhbHNlXHJcbn07XHJcbmV4cG9ydCB2YXIgQkxPQ0tfSEFMRl9WTCA9IHtcclxuICAgIGJvdHRvbUxlZnQ6IHRydWUsXHJcbiAgICBib3R0b21SaWdodDogZmFsc2UsXHJcbiAgICB0b3BMZWZ0OiB0cnVlLFxyXG4gICAgdG9wUmlnaHQ6IGZhbHNlXHJcbn07XHJcbmV4cG9ydCB2YXIgQkxPQ0tfSEFMRl9WUiA9IHtcclxuICAgIGJvdHRvbUxlZnQ6IGZhbHNlLFxyXG4gICAgYm90dG9tUmlnaHQ6IHRydWUsXHJcbiAgICB0b3BMZWZ0OiBmYWxzZSxcclxuICAgIHRvcFJpZ2h0OiB0cnVlXHJcbn07XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRUb3RhbE9mVGFua0dyb3VwKGdyb3VwKSB7XHJcbiAgICBpZiAoaXNOYU4oZ3JvdXAuREVGQVVMVCkpIHtcclxuICAgICAgICBncm91cC5ERUZBVUxUID0gMDtcclxuICAgIH1cclxuICAgIGlmIChpc05hTihncm91cC5TUEVFRCkpIHtcclxuICAgICAgICBncm91cC5TUEVFRCA9IDA7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNOYU4oZ3JvdXAuUE9XRVIpKSB7XHJcbiAgICAgICAgZ3JvdXAuUE9XRVIgPSAwO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzTmFOKGdyb3VwLkFSTU9VUkVEKSkge1xyXG4gICAgICAgIGdyb3VwLkFSTU9VUkVEID0gMDtcclxuICAgIH1cclxuICAgIHJldHVybiBncm91cC5ERUZBVUxUICsgZ3JvdXAuU1BFRUQgKyBncm91cC5QT1dFUiArIGdyb3VwLkFSTU9VUkVEO1xyXG59XHJcbiIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5pbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiLi9HYW1lT2JqZWN0XCI7XHJcbmltcG9ydCB7IEd1aWQgfSBmcm9tIFwiLi4vLi4vVXRpbHMvVXRpbHNcIjtcclxuaW1wb3J0IFNQUlRJRV9ERUYgZnJvbSBcIi4uLy4uL1JlbmRlci9TcHJpdGUvU3ByaXRlRGVmaW5pdGlvblwiO1xyXG5pbXBvcnQgeyBnZXRTcHJpdGVTaXplIH0gZnJvbSBcIi4uLy4uL1JlbmRlci9TcHJpdGUvU3ByaXRlRGF0YVwiO1xyXG52YXIgQW5pbWF0aW9uT2JqZWN0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEFuaW1hdGlvbk9iamVjdCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEFuaW1hdGlvbk9iamVjdChnYW1lLCBpZCwgYW5pbWF0aW9uVHlwZSwgYW5pbWF0aW9uUG9pbnQsIGR1cmF0aW9uLCBmcmFtZVJhdGUsIGxvb3AsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKGxvb3AgPT09IHZvaWQgMCkgeyBsb29wID0gZmFsc2U7IH1cclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmIChpZCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlkID0gR3VpZC5uZXdHdWlkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZ2FtZSwgXCJBTklNQVRJT05cIiAvKiBBTklNQVRJT04gKi8sIGFuaW1hdGlvblBvaW50LCBpZCkgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5hbmltYXRpb25UeXBlID0gYW5pbWF0aW9uVHlwZTtcclxuICAgICAgICBfdGhpcy5fYW5pbWF0aW9uUG9pbnQgPSBhbmltYXRpb25Qb2ludDtcclxuICAgICAgICBfdGhpcy5fc3ByaXRlUG9zaXRpb24gPSAwO1xyXG4gICAgICAgIF90aGlzLl9jdXJyZW50VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIF90aGlzLl9leHBpcmVUaW1lID0gX3RoaXMuX2N1cnJlbnRUaW1lICsgZHVyYXRpb247XHJcbiAgICAgICAgX3RoaXMuX2ZyYW1lQ291bnQgPSBTUFJUSUVfREVGLkFOSU1BVElPTltfdGhpcy5hbmltYXRpb25UeXBlXS5sZW5ndGg7XHJcbiAgICAgICAgX3RoaXMuX2ZyYW1lUmF0ZSA9IGZyYW1lUmF0ZTtcclxuICAgICAgICBfdGhpcy5fbG9vcCA9IGxvb3A7XHJcbiAgICAgICAgX3RoaXMuX2NhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICAgICAgX3RoaXMudXBkYXRlUG9zaXRpb24oKTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQW5pbWF0aW9uT2JqZWN0LnByb3RvdHlwZSwgXCJhbmltYXRpb25Qb2ludFwiLCB7XHJcbiAgICAgICAgLy8jcmVnaW9uIGdldHRlciwgc2V0dGVyXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hbmltYXRpb25Qb2ludDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGFuaW1hdGlvblBvaW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2FuaW1hdGlvblBvaW50ID0gYW5pbWF0aW9uUG9pbnQ7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQW5pbWF0aW9uT2JqZWN0LnByb3RvdHlwZSwgXCJleHBpcmVUaW1lXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2V4cGlyZVRpbWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgLy8jZW5kcmVnaW9uXHJcbiAgICAvLyNyZWdpb24gcHVibGljIG1ldGhvZHNcclxuICAgIC8vIGlnbm9yZSBoaXQgZXZlbnRcclxuICAgIEFuaW1hdGlvbk9iamVjdC5wcm90b3R5cGUuaGl0ID0gZnVuY3Rpb24gKCkgeyB9O1xyXG4gICAgQW5pbWF0aW9uT2JqZWN0LnByb3RvdHlwZS5uZXh0U3ByaXRlUG9zaXRpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2ZyYW1lQ291bnQgPCAyKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZ2FtZS5sb2coXCJbXCIgKyB0aGlzLnNwcml0ZVBvc2l0aW9uICsgXCIgLyBcIiArICh0aGlzLl9mcmFtZUNvdW50IC0gMSkgKyBcIl1cIiArIChwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMuX2N1cnJlbnRUaW1lKSArIFwiID49IFwiICsgdGhpcy5fZnJhbWVSYXRlKTtcclxuICAgICAgICBpZiAocGVyZm9ybWFuY2Uubm93KCkgLSB0aGlzLl9jdXJyZW50VGltZSA+PSB0aGlzLl9mcmFtZVJhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5fY3VycmVudFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3Nwcml0ZVBvc2l0aW9uICsgMSA8IHRoaXMuX2ZyYW1lQ291bnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Nwcml0ZVBvc2l0aW9uKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fbG9vcCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3ByaXRlUG9zaXRpb24gPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nwcml0ZVBvc2l0aW9uO1xyXG4gICAgfTtcclxuICAgIEFuaW1hdGlvbk9iamVjdC5wcm90b3R5cGUuZXhwaXJlID0gZnVuY3Rpb24gKHJlbW92ZSkge1xyXG4gICAgICAgIGlmIChyZW1vdmUgPT09IHZvaWQgMCkgeyByZW1vdmUgPSB0cnVlOyB9XHJcbiAgICAgICAgdGhpcy5fZ2FtZS5sb2coXCJBTklNQVRJT04gXCIgKyB0aGlzLmlkICsgXCIgSEFTIEJFRU4gRVhQSVJFRC4gKFwiICsgcGVyZm9ybWFuY2Uubm93ICsgXCIpXCIpO1xyXG4gICAgICAgIGlmIChyZW1vdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NhbGxiYWNrKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvLyNlbmRyZWdpb25cclxuICAgIEFuaW1hdGlvbk9iamVjdC5wcm90b3R5cGUudXBkYXRlUG9zaXRpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHNwcml0ZURhdGEgPSBnZXRTcHJpdGVTaXplKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX3Bvc2l0b24gPSB7XHJcbiAgICAgICAgICAgIHg6IHRoaXMuX2FuaW1hdGlvblBvaW50LnggLSBzcHJpdGVEYXRhLndpZHRoIC8gMixcclxuICAgICAgICAgICAgeTogdGhpcy5fYW5pbWF0aW9uUG9pbnQueSAtIHNwcml0ZURhdGEuaGVpZ2h0IC8gMlxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEFuaW1hdGlvbk9iamVjdDtcclxufShHYW1lT2JqZWN0KSk7XHJcbmV4cG9ydCBkZWZhdWx0IEFuaW1hdGlvbk9iamVjdDtcclxuIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbmltcG9ydCBHYW1lT2JqZWN0IGZyb20gXCIuL0dhbWVPYmplY3RcIjtcclxuaW1wb3J0IHsgR3VpZCwgcmVtb3ZlRHVwbGljYXRlIH0gZnJvbSBcIi4uLy4uL1V0aWxzL1V0aWxzXCI7XHJcbmltcG9ydCBCdWxsZXRPYmplY3QgZnJvbSBcIi4vQnVsbGV0T2JqZWN0XCI7XHJcbmltcG9ydCBFRGlyZWN0aW9uIGZyb20gXCIuLi8uLi9VdGlscy9FRGlyZWN0aW9uXCI7XHJcbmltcG9ydCB7IGdldFNwcml0ZVNpemUgfSBmcm9tIFwiLi4vLi4vUmVuZGVyL1Nwcml0ZS9TcHJpdGVEYXRhXCI7XHJcbmltcG9ydCB7IEJsb2NrQ29sbGlzaW9uVGVzdCB9IGZyb20gXCIuLi8uLi9VdGlscy9Db2xsaXNpb25UZXN0XCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBCbG9ja1N0YXRlMngyVG80eDQoeDIpIHtcclxuICAgIHZhciB4NCA9IFtcclxuICAgICAgICBbZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2VdLFxyXG4gICAgICAgIFtmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZV0sXHJcbiAgICAgICAgW2ZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlXSxcclxuICAgICAgICBbZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2VdXHJcbiAgICBdO1xyXG4gICAgeDRbMF1bMF0gPSB4Mi50b3BMZWZ0O1xyXG4gICAgeDRbMF1bMV0gPSB4Mi50b3BMZWZ0O1xyXG4gICAgeDRbMV1bMF0gPSB4Mi50b3BMZWZ0O1xyXG4gICAgeDRbMV1bMV0gPSB4Mi50b3BMZWZ0O1xyXG4gICAgeDRbMF1bMl0gPSB4Mi50b3BSaWdodDtcclxuICAgIHg0WzBdWzNdID0geDIudG9wUmlnaHQ7XHJcbiAgICB4NFsxXVsyXSA9IHgyLnRvcFJpZ2h0O1xyXG4gICAgeDRbMV1bM10gPSB4Mi50b3BSaWdodDtcclxuICAgIHg0WzJdWzBdID0geDIuYm90dG9tTGVmdDtcclxuICAgIHg0WzJdWzFdID0geDIuYm90dG9tTGVmdDtcclxuICAgIHg0WzNdWzBdID0geDIuYm90dG9tTGVmdDtcclxuICAgIHg0WzNdWzFdID0geDIuYm90dG9tTGVmdDtcclxuICAgIHg0WzJdWzJdID0geDIuYm90dG9tUmlnaHQ7XHJcbiAgICB4NFsyXVszXSA9IHgyLmJvdHRvbVJpZ2h0O1xyXG4gICAgeDRbM11bMl0gPSB4Mi5ib3R0b21SaWdodDtcclxuICAgIHg0WzNdWzNdID0geDIuYm90dG9tUmlnaHQ7XHJcbiAgICByZXR1cm4geDQ7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIEJsb2NrU3RhdGU0eDRUbzJ4Mih4NCkge1xyXG4gICAgdmFyIHgyID0ge1xyXG4gICAgICAgIHRvcExlZnQ6IGZhbHNlLFxyXG4gICAgICAgIHRvcFJpZ2h0OiBmYWxzZSxcclxuICAgICAgICBib3R0b21MZWZ0OiBmYWxzZSxcclxuICAgICAgICBib3R0b21SaWdodDogZmFsc2VcclxuICAgIH07XHJcbiAgICBpZiAoeDRbMF1bMF0gfHwgeDRbMF1bMV0gfHwgeDRbMV1bMF0gfHwgeDRbMV1bMV0pIHtcclxuICAgICAgICB4Mi50b3BMZWZ0ID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmICh4NFswXVsyXSB8fCB4NFswXVszXSB8fCB4NFsxXVsyXSB8fCB4NFsxXVszXSkge1xyXG4gICAgICAgIHgyLnRvcFJpZ2h0ID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmICh4NFsyXVswXSB8fCB4NFsyXVsxXSB8fCB4NFszXVswXSB8fCB4NFszXVsxXSkge1xyXG4gICAgICAgIHgyLmJvdHRvbUxlZnQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKHg0WzJdWzJdIHx8IHg0WzJdWzNdIHx8IHg0WzNdWzJdIHx8IHg0WzNdWzNdKSB7XHJcbiAgICAgICAgeDIuYm90dG9tUmlnaHQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHgyO1xyXG59XHJcbnZhciBCbG9ja09iamVjdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhCbG9ja09iamVjdCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEJsb2NrT2JqZWN0KGdhbWUsIGJsb2NrVHlwZSwgcG9zaXRpb24sIGJsb2NrU3RhdGUyeDIpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBnYW1lLCBcIkJMT0NLXCIgLyogQkxPQ0sgKi8sIHBvc2l0aW9uLCBHdWlkLm5ld0d1aWQoKSkgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5ibG9ja1R5cGUgPSBibG9ja1R5cGU7XHJcbiAgICAgICAgX3RoaXMuX2Jsb2NrU3RhdGUgPSBCbG9ja1N0YXRlMngyVG80eDQoYmxvY2tTdGF0ZTJ4Mik7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJsb2NrT2JqZWN0LnByb3RvdHlwZSwgXCJibG9ja1N0YXRlNHg0XCIsIHtcclxuICAgICAgICAvLyNyZWdpb24gZ2V0dGVyIHNldHRlclxyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYmxvY2tTdGF0ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQmxvY2tPYmplY3QucHJvdG90eXBlLCBcImJsb2NrU3RhdGUyeDJcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gQmxvY2tTdGF0ZTR4NFRvMngyKHRoaXMuX2Jsb2NrU3RhdGUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIC8vI2VuZHJlZ2lvblxyXG4gICAgQmxvY2tPYmplY3QucHJvdG90eXBlLmZpbmRDZWxsUG9zaXRpb24gPSBmdW5jdGlvbiAocm93LCBjb2x1bW4pIHtcclxuICAgICAgICB2YXIgYmxvY2tTaXplID0gZ2V0U3ByaXRlU2l6ZSh0aGlzKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB4OiB0aGlzLnBvc2l0aW9uLnggKyAoYmxvY2tTaXplLndpZHRoIC8gNCkgKiBjb2x1bW4sXHJcbiAgICAgICAgICAgIHk6IHRoaXMucG9zaXRpb24ueSArIChibG9ja1NpemUud2lkdGggLyA0KSAqIHJvd1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgQmxvY2tPYmplY3QucHJvdG90eXBlLmhpdCA9IGZ1bmN0aW9uIChldmVudE9yaWdpbikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKCEoZXZlbnRPcmlnaW4gaW5zdGFuY2VvZiBCdWxsZXRPYmplY3QpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuYmxvY2tUeXBlID09PSBcIkVBR0xFXCIgLyogRUFHTEUgKi8pIHtcclxuICAgICAgICAgICAgdGhpcy5fc3ByaXRlUG9zaXRpb24gPSAxO1xyXG4gICAgICAgICAgICB0aGlzLl9nYW1lLmdhbWVvdmVyKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGJ1bGxldCA9IGV2ZW50T3JpZ2luO1xyXG4gICAgICAgIGlmIChidWxsZXQucGFyZW50LnRhbmtMZXZlbCA8IDMgJiYgdGhpcy5ibG9ja1R5cGUgPT09IFwiSVJPTlwiIC8qIElST04gKi8pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYmxvY2tTaXplID0gZ2V0U3ByaXRlU2l6ZSh0aGlzKTtcclxuICAgICAgICB2YXIgY29sbGlzaW9uQ2VsbHMgPSBCbG9ja0NvbGxpc2lvblRlc3QodGhpcywgYnVsbGV0KTtcclxuICAgICAgICB2YXIgeFBvcyA9IHJlbW92ZUR1cGxpY2F0ZShjb2xsaXNpb25DZWxscy5tYXAoZnVuY3Rpb24gKHBvaW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAocG9pbnQueCAtIF90aGlzLnBvc2l0aW9uLngpIC8gKGJsb2NrU2l6ZS53aWR0aCAvIDQpO1xyXG4gICAgICAgIH0pKTtcclxuICAgICAgICB2YXIgeVBvcyA9IHJlbW92ZUR1cGxpY2F0ZShjb2xsaXNpb25DZWxscy5tYXAoZnVuY3Rpb24gKHBvaW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAocG9pbnQueSAtIF90aGlzLnBvc2l0aW9uLnkpIC8gKGJsb2NrU2l6ZS5oZWlnaHQgLyA0KTtcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgdmFyIGI0NCA9IHRoaXMuYmxvY2tTdGF0ZTR4NDtcclxuICAgICAgICBpZiAoYnVsbGV0LmRpcmVjdGlvbiA9PT0gRURpcmVjdGlvbi51cCB8fCBidWxsZXQuZGlyZWN0aW9uID09PSBFRGlyZWN0aW9uLmRvd24pIHtcclxuICAgICAgICAgICAgaWYgKHhQb3MuaW5jbHVkZXMoMCkgfHwgeFBvcy5pbmNsdWRlcygxKSkge1xyXG4gICAgICAgICAgICAgICAgYjQ0W3lQb3NbMF1dWzBdID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBiNDRbeVBvc1swXV1bMV0gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmICh5UG9zWzBdICsgMSA8IDQgJiYgYnVsbGV0LnBhcmVudC50YW5rTGV2ZWwgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYjQ0W3lQb3NbMF0gKyAxXVswXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGI0NFt5UG9zWzBdICsgMV1bMV0gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoeFBvcy5pbmNsdWRlcygyKSB8fCB4UG9zLmluY2x1ZGVzKDMpKSB7XHJcbiAgICAgICAgICAgICAgICBiNDRbeVBvc1swXV1bMl0gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGI0NFt5UG9zWzBdXVszXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHlQb3NbMF0gKyAxIDwgNCAmJiBidWxsZXQucGFyZW50LnRhbmtMZXZlbCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBiNDRbeVBvc1swXSArIDFdWzJdID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgYjQ0W3lQb3NbMF0gKyAxXVszXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGJ1bGxldC5kaXJlY3Rpb24gPT09IEVEaXJlY3Rpb24ubGVmdCB8fCBidWxsZXQuZGlyZWN0aW9uID09PSBFRGlyZWN0aW9uLnJpZ2h0KSB7XHJcbiAgICAgICAgICAgIGlmICh5UG9zLmluY2x1ZGVzKDApIHx8IHlQb3MuaW5jbHVkZXMoMSkpIHtcclxuICAgICAgICAgICAgICAgIGI0NFswXVt4UG9zWzBdXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYjQ0WzFdW3hQb3NbMF1dID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAoeFBvc1swXSArIDEgPCA0ICYmIGJ1bGxldC5wYXJlbnQudGFua0xldmVsID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGI0NFswXVt4UG9zWzBdICsgMV0gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBiNDRbMV1beFBvc1swXSArIDFdID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHlQb3MuaW5jbHVkZXMoMikgfHwgeVBvcy5pbmNsdWRlcygzKSkge1xyXG4gICAgICAgICAgICAgICAgYjQ0WzJdW3hQb3NbMF1dID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBiNDRbM11beFBvc1swXV0gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmICh4UG9zWzBdICsgMSA8IDQgJiYgYnVsbGV0LnBhcmVudC50YW5rTGV2ZWwgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYjQ0WzJdW3hQb3NbMF0gKyAxXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGI0NFszXVt4UG9zWzBdICsgMV0gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYXZhaWxhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgYjQ0LmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xyXG4gICAgICAgICAgICByb3cuZm9yRWFjaChmdW5jdGlvbiAoY2VsbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNlbGwgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBhdmFpbGFibGUgPSBjZWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoYXZhaWxhYmxlID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gQmxvY2tPYmplY3Q7XHJcbn0oR2FtZU9iamVjdCkpO1xyXG5leHBvcnQgZGVmYXVsdCBCbG9ja09iamVjdDtcclxuIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbmltcG9ydCBNb3ZpbmdPYmplY3QsIHsgY2FsY3VsYXRlTW92ZSB9IGZyb20gXCIuL01vdmluZ09iamVjdFwiO1xyXG5pbXBvcnQgRURpcmVjdGlvbiBmcm9tIFwiLi4vLi4vVXRpbHMvRURpcmVjdGlvblwiO1xyXG5pbXBvcnQgeyBnZXRTcHJpdGVTaXplIH0gZnJvbSBcIi4uLy4uL1JlbmRlci9TcHJpdGUvU3ByaXRlRGF0YVwiO1xyXG5leHBvcnQgdmFyIEJVTExFVF9TTE9XID0gNDtcclxuZXhwb3J0IHZhciBCVUxMRVRfRkFTVCA9IDY7XHJcbnZhciBCdWxsZXRPYmplY3QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoQnVsbGV0T2JqZWN0LCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gQnVsbGV0T2JqZWN0KGdhbWUsIHBhcmVudCwgcG9zaXRpb24sIGRpcmVjdGlvbiwgc3BlZWQsIGlkKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZ2FtZSwgXCJCVUxMRVRcIiAvKiBCVUxMRVQgKi8sIHBvc2l0aW9uLCBkaXJlY3Rpb24sIHNwZWVkLCBpZCkgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5fcGFyZW50ID0gcGFyZW50O1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdWxsZXRPYmplY3QucHJvdG90eXBlLCBcInBhcmVudFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9wYXJlbnQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1bGxldE9iamVjdC5wcm90b3R5cGUsIFwicGFyZW50SWRcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcGFyZW50LmlkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIEJ1bGxldE9iamVjdC5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIC8vIGxldCBvcmlnaW5hbCA9IGRlZXBDbG9uZSh0aGlzLnBvc2l0aW9uKSBhcyBQb2ludDtcclxuICAgICAgICBjYWxjdWxhdGVNb3ZlKHRoaXMucG9zaXRpb24sIHRoaXMuX2RpcmVjdGlvbiwgdGhpcy5fc3BlZWQpO1xyXG4gICAgICAgIHRoaXMuX2dhbWUubG9nKFwiQlVMTEVUIFtcIiArIHRoaXMuaWQgKyBcIl0gTU9WRUQgLT4gW3g6XCIgKyB0aGlzLnBvc2l0aW9uLnggKyBcIl0sIHk6W1wiICsgdGhpcy5wb3NpdGlvbi55ICsgXCJdXCIpO1xyXG4gICAgICAgIHZhciB0ZXN0X3Zpc2libGUgPSB0aGlzLl9nYW1lLnRlc3RWaXNpYmlsaXR5KHRoaXMpO1xyXG4gICAgICAgIHZhciB0ZXN0X2NvbGxpc2lvbiA9IHRoaXMuX2dhbWUuY29sbGlzaW9uVGVzdCh0aGlzKTtcclxuICAgICAgICBpZiAodGVzdF92aXNpYmxlID09IGZhbHNlICYmIHRlc3RfY29sbGlzaW9uLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZml0VG9Cb3JkZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5leHBsb2RlKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0ZXN0X2NvbGxpc2lvbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHZhciBleHBsb2RlZF8xID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGVzdF9jb2xsaXNpb24uZm9yRWFjaChmdW5jdGlvbiAob2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0Lm9iamVjdFR5cGUgPT09IFwiQlVMTEVUXCIgLyogQlVMTEVUICovKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXhwbG9kZWRfMSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC5vYmplY3RUeXBlID09PSBcIlRBTktcIiAvKiBUQU5LICovKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iamVjdC5pc0ludmluY2libGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwbG9kZWRfMSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF90aGlzLmZpdFRvT2JqZWN0KG9iamVjdCwgLTEpO1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0LmhpdChfdGhpcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmV4cGxvZGUoZXhwbG9kZWRfMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEJ1bGxldE9iamVjdC5wcm90b3R5cGUuaGl0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZXhwbG9kZShmYWxzZSk7XHJcbiAgICB9O1xyXG4gICAgQnVsbGV0T2JqZWN0LnByb3RvdHlwZS5leHBsb2RlID0gZnVuY3Rpb24gKGFuaW1hdGlvbikge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICAgICAgdmFyIGFuaW1hdGlvblBvc2l0aW9uO1xyXG4gICAgICAgIHZhciBzaXplID0gZ2V0U3ByaXRlU2l6ZSh0aGlzKTtcclxuICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IEVEaXJlY3Rpb24udXAgfHwgdGhpcy5kaXJlY3Rpb24gPT09IEVEaXJlY3Rpb24uZG93bikge1xyXG4gICAgICAgICAgICBhbmltYXRpb25Qb3NpdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgIHg6IHRoaXMucG9zaXRpb24ueCArIHNpemUud2lkdGggLyAyLFxyXG4gICAgICAgICAgICAgICAgeTogdGhpcy5wb3NpdGlvbi55XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBhbmltYXRpb25Qb3NpdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgIHg6IHRoaXMucG9zaXRpb24ueCxcclxuICAgICAgICAgICAgICAgIHk6IHRoaXMucG9zaXRpb24ueSArIHNpemUuaGVpZ2h0IC8gMlxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYW5pbWF0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2dhbWUuc3RhcnRBbmltYXRpb24odGhpcywgXCJFWFBMT1NJT05fU01BTExcIiAvKiBFWFBMT1NJT05fU01BTEwgKi8pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9nYW1lLmxvZyhcIkJVTExFVCBbXCIgKyB0aGlzLmlkICsgXCJdIEVYUExPREVELlwiKTtcclxuICAgIH07XHJcbiAgICBCdWxsZXRPYmplY3QucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnJlbW92ZS5jYWxsKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX3BhcmVudC5yZW1vdmVCdWxsZXQodGhpcy5pZCk7XHJcbiAgICAgICAgdGhpcy5fZ2FtZS5sb2coXCJCVUxMRVQgW1wiICsgdGhpcy5pZCArIFwiXSBIQVMgQkVFTiBSRU1PVkVELlwiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQnVsbGV0T2JqZWN0O1xyXG59KE1vdmluZ09iamVjdCkpO1xyXG5leHBvcnQgZGVmYXVsdCBCdWxsZXRPYmplY3Q7XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBTY29yZVRvQW5pbWF0aW9uKHNjb3JlKSB7XHJcbiAgICBzd2l0Y2ggKE1hdGguZmxvb3Ioc2NvcmUgLyAxMDApKSB7XHJcbiAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJTQ09SRV8xMDBcIiAvKiBTQ09SRV8xMDAgKi87XHJcbiAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJTQ09SRV8yMDBcIiAvKiBTQ09SRV8yMDAgKi87XHJcbiAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJTQ09SRV8zMDBcIiAvKiBTQ09SRV8zMDAgKi87XHJcbiAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICByZXR1cm4gXCJTQ09SRV80MDBcIiAvKiBTQ09SRV80MDAgKi87XHJcbiAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICByZXR1cm4gXCJTQ09SRV81MDBcIiAvKiBTQ09SRV81MDAgKi87XHJcbiAgICB9XHJcbn1cclxuO1xyXG4vLyBUT0RPIFVwZGF0ZSBkZWZhdWx0c1xyXG5leHBvcnQgdmFyIEFuaW1hdGlvbkRlZmF1bHRzID0ge1xyXG4gICAgRVhQTE9TSU9OX1NNQUxMOiB7XHJcbiAgICAgICAgZHVyYXRpb246IDIwMCxcclxuICAgICAgICBmcmFtZVJhdGU6IDIwMCAvIDQsXHJcbiAgICAgICAgbG9vcDogZmFsc2VcclxuICAgIH0sXHJcbiAgICBFWFBMT1NJT05fTEFSR0U6IHtcclxuICAgICAgICBkdXJhdGlvbjogMTUwLFxyXG4gICAgICAgIGZyYW1lUmF0ZTogMTUwIC8gMyxcclxuICAgICAgICBsb29wOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIElOVklOQ0lCTEU6IHtcclxuICAgICAgICBkdXJhdGlvbjogMzAwMCxcclxuICAgICAgICBmcmFtZVJhdGU6IDI1LFxyXG4gICAgICAgIGxvb3A6IHRydWVcclxuICAgIH0sXHJcbiAgICBTUEFXTjoge1xyXG4gICAgICAgIGR1cmF0aW9uOiAxMDAwLFxyXG4gICAgICAgIGZyYW1lUmF0ZTogMTAwMCAvIDEzLFxyXG4gICAgICAgIGxvb3A6IHRydWVcclxuICAgIH0sXHJcbiAgICBTQ09SRV8xMDA6IHtcclxuICAgICAgICBkdXJhdGlvbjogMTAwMCxcclxuICAgICAgICBmcmFtZVJhdGU6IDAsXHJcbiAgICAgICAgbG9vcDogZmFsc2VcclxuICAgIH0sXHJcbiAgICBTQ09SRV8yMDA6IHtcclxuICAgICAgICBkdXJhdGlvbjogMTAwMCxcclxuICAgICAgICBmcmFtZVJhdGU6IDAsXHJcbiAgICAgICAgbG9vcDogZmFsc2VcclxuICAgIH0sXHJcbiAgICBTQ09SRV8zMDA6IHtcclxuICAgICAgICBkdXJhdGlvbjogMTAwMCxcclxuICAgICAgICBmcmFtZVJhdGU6IDAsXHJcbiAgICAgICAgbG9vcDogZmFsc2VcclxuICAgIH0sXHJcbiAgICBTQ09SRV80MDA6IHtcclxuICAgICAgICBkdXJhdGlvbjogMTAwMCxcclxuICAgICAgICBmcmFtZVJhdGU6IDAsXHJcbiAgICAgICAgbG9vcDogZmFsc2VcclxuICAgIH0sXHJcbiAgICBTQ09SRV81MDA6IHtcclxuICAgICAgICBkdXJhdGlvbjogMTAwMCxcclxuICAgICAgICBmcmFtZVJhdGU6IDAsXHJcbiAgICAgICAgbG9vcDogZmFsc2VcclxuICAgIH0sXHJcbiAgICBHQU1FT1ZFUjoge1xyXG4gICAgICAgIGR1cmF0aW9uOiA0MDAwLFxyXG4gICAgICAgIGZyYW1lUmF0ZTogMTAwLFxyXG4gICAgICAgIGxvb3A6IHRydWVcclxuICAgIH0sXHJcbiAgICBQQVVTRToge1xyXG4gICAgICAgIGR1cmF0aW9uOiAtMSxcclxuICAgICAgICBmcmFtZVJhdGU6IDEwMCxcclxuICAgICAgICBsb29wOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgVElUTEU6IHtcclxuICAgICAgICBkdXJhdGlvbjogNDAwMCxcclxuICAgICAgICBmcmFtZVJhdGU6IDEwMCxcclxuICAgICAgICBsb29wOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgQ1VSU09SOiB7XHJcbiAgICAgICAgZHVyYXRpb246IDUwLFxyXG4gICAgICAgIGZyYW1lUmF0ZTogMjUsXHJcbiAgICAgICAgbG9vcDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIENVUlRBSU46IHtcclxuICAgICAgICBkdXJhdGlvbjogMzAwMCxcclxuICAgICAgICBmcmFtZVJhdGU6IDI1LFxyXG4gICAgICAgIGxvb3A6IHRydWVcclxuICAgIH1cclxufTtcclxuIiwidmFyIEVJdGVtVHlwZTtcclxuKGZ1bmN0aW9uIChFSXRlbVR5cGUpIHtcclxuICAgIEVJdGVtVHlwZVtcIkhFTE1FVFwiXSA9IFwiSEVMTUVUXCI7XHJcbiAgICBFSXRlbVR5cGVbXCJXQVRDSFwiXSA9IFwiV0FUQ0hcIjtcclxuICAgIEVJdGVtVHlwZVtcIlNUQVJcIl0gPSBcIlNUQVJcIjtcclxuICAgIEVJdGVtVHlwZVtcIkJPTUJcIl0gPSBcIkJPTUJcIjtcclxuICAgIEVJdGVtVHlwZVtcIlRBTktcIl0gPSBcIlRBTktcIjtcclxuICAgIEVJdGVtVHlwZVtcIlBJU1RPTFwiXSA9IFwiUElTVE9MXCI7XHJcbiAgICBFSXRlbVR5cGVbXCJTSE9WRUxcIl0gPSBcIlNIT1ZFTFwiO1xyXG59KShFSXRlbVR5cGUgfHwgKEVJdGVtVHlwZSA9IHt9KSk7XHJcbmV4cG9ydCBkZWZhdWx0IEVJdGVtVHlwZTtcclxuIiwidmFyIEVuZW15VHlwZTtcclxuKGZ1bmN0aW9uIChFbmVteVR5cGUpIHtcclxuICAgIEVuZW15VHlwZVtcIkRFRkFVTFRcIl0gPSBcIkRFRkFVTFRcIjtcclxuICAgIEVuZW15VHlwZVtcIlNQRUVEXCJdID0gXCJTUEVFRFwiO1xyXG4gICAgRW5lbXlUeXBlW1wiUE9XRVJcIl0gPSBcIlBPV0VSXCI7XHJcbiAgICBFbmVteVR5cGVbXCJBUk1PVVJFRFwiXSA9IFwiQVJNT1VSRURcIjtcclxufSkoRW5lbXlUeXBlIHx8IChFbmVteVR5cGUgPSB7fSkpO1xyXG52YXIgRW5lbXlTY29yZU1hcCA9IG5ldyBNYXAoKTtcclxuRW5lbXlTY29yZU1hcC5zZXQoRW5lbXlUeXBlLkRFRkFVTFQsIDEwMCk7XHJcbkVuZW15U2NvcmVNYXAuc2V0KEVuZW15VHlwZS5TUEVFRCwgMjAwKTtcclxuRW5lbXlTY29yZU1hcC5zZXQoRW5lbXlUeXBlLlBPV0VSLCAzMDApO1xyXG5FbmVteVNjb3JlTWFwLnNldChFbmVteVR5cGUuQVJNT1VSRUQsIDQwMCk7XHJcbmV4cG9ydCB7IEVuZW15VHlwZSwgRW5lbXlTY29yZU1hcCB9O1xyXG4iLCJ2YXIgR2FtZU9iamVjdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEdhbWVPYmplY3QoZ2FtZSwgb2JqZWN0VHlwZSwgcG9zaXRpb24sIGlkLCB2aXNpYmxlKSB7XHJcbiAgICAgICAgaWYgKHZpc2libGUgPT09IHZvaWQgMCkgeyB2aXNpYmxlID0gdHJ1ZTsgfVxyXG4gICAgICAgIHRoaXMuX2dhbWUgPSBnYW1lO1xyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHZpc2libGU7XHJcbiAgICAgICAgdGhpcy5vYmplY3RUeXBlID0gb2JqZWN0VHlwZTtcclxuICAgICAgICB0aGlzLl9zcHJpdGVQb3NpdGlvbiA9IDA7XHJcbiAgICAgICAgaWYgKHBvc2l0aW9uICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9wb3NpdG9uID0gcG9zaXRpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9wb3NpdG9uID0ge1xyXG4gICAgICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgICAgIHk6IDBcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlkICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEdhbWVPYmplY3QucHJvdG90eXBlLCBcInBvc2l0aW9uXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Bvc2l0b247XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChwb3NpdGlvbikge1xyXG4gICAgICAgICAgICBpZiAocG9zaXRpb24ueCA8PSAwIHx8IHBvc2l0aW9uLnkgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgJ3Bvc2l0aW9uIGNhbm5vdCBiZSBhIG5lZ2F0aXZlIHZhbHVlJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9wb3NpdG9uID0gcG9zaXRpb247XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEdhbWVPYmplY3QucHJvdG90eXBlLCBcInNwcml0ZVBvc2l0aW9uXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Nwcml0ZVBvc2l0aW9uO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIEdhbWVPYmplY3QucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLl9nYW1lLnJlbW92ZU9iamVjdCh0aGlzKTtcclxuICAgIH07XHJcbiAgICBHYW1lT2JqZWN0LnByb3RvdHlwZS5uZXh0U3ByaXRlUG9zaXRpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlUG9zaXRpb24gPSB0aGlzLl9zcHJpdGVQb3NpdGlvbiArIDEgPD0gMSA/IHRoaXMuX3Nwcml0ZVBvc2l0aW9uICsgMSA6IDA7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nwcml0ZVBvc2l0aW9uO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBHYW1lT2JqZWN0O1xyXG59KCkpO1xyXG5leHBvcnQgZGVmYXVsdCBHYW1lT2JqZWN0O1xyXG4iLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuaW1wb3J0IEdhbWVPYmplY3QgZnJvbSBcIi4vR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgRUl0ZW1UeXBlIGZyb20gXCIuL0VudW0vRUl0ZW1UeXBlXCI7XHJcbmltcG9ydCB7IEd1aWQgfSBmcm9tIFwiLi4vLi4vVXRpbHMvVXRpbHNcIjtcclxuZXhwb3J0IHZhciBJVEVNX1dBVENIX1RJTUUgPSAzMDAwO1xyXG52YXIgSXRlbU9iamVjdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhJdGVtT2JqZWN0LCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gSXRlbU9iamVjdChnYW1lLCBpdGVtVHlwZSwgcG9zaXRpb24pIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBnYW1lLCBcIklURU1cIiAvKiBJVEVNICovLCBwb3NpdGlvbiwgR3VpZC5uZXdHdWlkKCkpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuaXRlbVR5cGUgPSBpdGVtVHlwZTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBJdGVtT2JqZWN0LnByb3RvdHlwZS5oaXQgPSBmdW5jdGlvbiAoZXZlbnRPcmlnaW4pIHtcclxuICAgICAgICB2YXIgb3JpZ2luID0gZXZlbnRPcmlnaW47XHJcbiAgICAgICAgaWYgKG9yaWdpbi50YW5rVHlwZSA9PT0gXCJFTkVNWV9UQU5LXCIgLyogRU5FTVlfVEFOSyAqLykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBvdGhlclRhbmtzID0gdGhpcy5fZ2FtZS5vYmplY3RzLmZpbHRlcihmdW5jdGlvbiAoeCkge1xyXG4gICAgICAgICAgICB2YXIgdGFuayA9IHg7XHJcbiAgICAgICAgICAgIHJldHVybiB0YW5rLnRhbmtUeXBlID09PSBcIkVORU1ZX1RBTktcIiAvKiBFTkVNWV9UQU5LICovO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5pdGVtVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIEVJdGVtVHlwZS5CT01COlxyXG4gICAgICAgICAgICAgICAgb3RoZXJUYW5rcy5mb3JFYWNoKGZ1bmN0aW9uICh0YW5rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFuay5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEVJdGVtVHlwZS5IRUxNRVQ6XHJcbiAgICAgICAgICAgICAgICBvcmlnaW4uaW52aW5jaWJsZSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRUl0ZW1UeXBlLlBJU1RPTDpcclxuICAgICAgICAgICAgICAgIC8vIHBvaW50IHVwXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBFSXRlbVR5cGUuU1RBUjpcclxuICAgICAgICAgICAgICAgIG9yaWdpbi5sZXZlbHVwKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBFSXRlbVR5cGUuVEFOSzpcclxuICAgICAgICAgICAgICAgIC8vIGxpZmUgMSB1cFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRUl0ZW1UeXBlLldBVENIOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fZ2FtZS5zZXRFbmVteVBhdXNlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRUl0ZW1UeXBlLlNIT1ZFTDpcclxuICAgICAgICAgICAgICAgIC8vIGNoYW5nZSBhbGwgYnJpY2tzIGludG8gaXJvblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2dhbWUuc3RhcnRBbmltYXRpb24odGhpcywgXCJTQ09SRV81MDBcIiAvKiBTQ09SRV81MDAgKi8sIG51bGwpO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEl0ZW1PYmplY3Q7XHJcbn0oR2FtZU9iamVjdCkpO1xyXG5leHBvcnQgZGVmYXVsdCBJdGVtT2JqZWN0O1xyXG4iLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuaW1wb3J0IEdhbWVPYmplY3QgZnJvbSBcIi4vR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgRURpcmVjdGlvbiBmcm9tIFwiLi4vLi4vVXRpbHMvRURpcmVjdGlvblwiO1xyXG5pbXBvcnQgeyBEUkFXSU5HX0NPTlNUIH0gZnJvbSBcIi4uLy4uL1JlbmRlci9SZW5kZXJlclwiO1xyXG5pbXBvcnQgeyBnZXRTcHJpdGVTaXplLCBnZXRPYmplY3RTaXplIH0gZnJvbSBcIi4uLy4uL1JlbmRlci9TcHJpdGUvU3ByaXRlRGF0YVwiO1xyXG5pbXBvcnQgeyBCbG9ja0NvbGxpc2lvblRlc3QgfSBmcm9tIFwiLi4vLi4vVXRpbHMvQ29sbGlzaW9uVGVzdFwiO1xyXG5pbXBvcnQgeyBtYXgsIG1pbiB9IGZyb20gXCIuLi8uLi9VdGlscy9VdGlsc1wiO1xyXG52YXIgTW92aW5nT2JqZWN0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKE1vdmluZ09iamVjdCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIE1vdmluZ09iamVjdChnYW1lLCBvYmplY3RUeXBlLCBwb3NpdGlvbiwgZGlyZWN0aW9uLCBzcGVlZCwgaWQpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBnYW1lLCBvYmplY3RUeXBlLCBwb3NpdGlvbiwgaWQpIHx8IHRoaXM7XHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbiAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgX3RoaXMuX2RpcmVjdGlvbiA9IGRpcmVjdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIF90aGlzLl9kaXJlY3Rpb24gPSBFRGlyZWN0aW9uLnVwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfdGhpcy5fc3BlZWQgPSBzcGVlZDtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTW92aW5nT2JqZWN0LnByb3RvdHlwZSwgXCJkaXJlY3Rpb25cIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZGlyZWN0aW9uO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2RpcmVjdGlvbiA9IGRpcmVjdGlvbjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBNb3ZpbmdPYmplY3QucHJvdG90eXBlLmZpdFRvQm9yZGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBmcmFtZSA9IERSQVdJTkdfQ09OU1Quc2l6ZXMuZnJhbWU7XHJcbiAgICAgICAgdmFyIHNjcmVlbiA9IERSQVdJTkdfQ09OU1Quc2l6ZXMuc2NyZWVuO1xyXG4gICAgICAgIHZhciBzaXplID0gZ2V0U3ByaXRlU2l6ZSh0aGlzKTtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgRURpcmVjdGlvbi5sZWZ0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gZnJhbWUubGVmdDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEVEaXJlY3Rpb24udXA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSBmcmFtZS50b3A7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBFRGlyZWN0aW9uLmRvd246XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSBzY3JlZW4uaGVpZ2h0ICsgZnJhbWUudG9wIC0gc2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBFRGlyZWN0aW9uLnJpZ2h0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gc2NyZWVuLndpZHRoICsgZnJhbWUubGVmdCAtIHNpemUud2lkdGg7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgTW92aW5nT2JqZWN0LnByb3RvdHlwZS5maXRUb09iamVjdCA9IGZ1bmN0aW9uIChvYmplY3QsIGdhcCkge1xyXG4gICAgICAgIGlmIChnYXAgPT09IHZvaWQgMCkgeyBnYXAgPSAwOyB9XHJcbiAgICAgICAgdmFyIHNpemUgPSBnZXRTcHJpdGVTaXplKHRoaXMpO1xyXG4gICAgICAgIHZhciB0YW5rU2l6ZSA9IGdldE9iamVjdFNpemUodGhpcy5vYmplY3RUeXBlKTtcclxuICAgICAgICB2YXIgb2JqZWN0U2l6ZSA9IGdldFNwcml0ZVNpemUob2JqZWN0KTtcclxuICAgICAgICBpZiAob2JqZWN0Lm9iamVjdFR5cGUgPT09IFwiQkxPQ0tcIiAvKiBCTE9DSyAqLykge1xyXG4gICAgICAgICAgICB2YXIgYmxvY2sgPSBvYmplY3Q7XHJcbiAgICAgICAgICAgIHZhciBjZWxsU2l6ZSA9IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBvYmplY3RTaXplLndpZHRoIC8gNCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogb2JqZWN0U2l6ZS5oZWlnaHQgLyA0XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHZhciBhZGp1c3RHYXAgPSBjZWxsU2l6ZS53aWR0aCAqIC44O1xyXG4gICAgICAgICAgICB2YXIgY29sbGlzaW9uX2NlbGxzID0gQmxvY2tDb2xsaXNpb25UZXN0KGJsb2NrLCB0aGlzKTtcclxuICAgICAgICAgICAgdmFyIHhQb3MgPSBjb2xsaXNpb25fY2VsbHMubWFwKGZ1bmN0aW9uIChwb2ludCkgeyByZXR1cm4gcG9pbnQueDsgfSk7XHJcbiAgICAgICAgICAgIHZhciB5UG9zID0gY29sbGlzaW9uX2NlbGxzLm1hcChmdW5jdGlvbiAocG9pbnQpIHsgcmV0dXJuIHBvaW50Lnk7IH0pO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEVEaXJlY3Rpb24ubGVmdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoeFBvcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh5UG9zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgKyB0YW5rU2l6ZS5oZWlnaHQgLSBtaW4oeVBvcykgPD0gYWRqdXN0R2FwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gbWluKHlQb3MpIC0gdGFua1NpemUuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobWF4KHlQb3MpICsgY2VsbFNpemUuaGVpZ2h0IC0gdGhpcy5wb3NpdGlvbi55IDw9IGFkanVzdEdhcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSA9IG1heCh5UG9zKSArIGNlbGxTaXplLmhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSBtYXgoeFBvcykgKyBvYmplY3RTaXplLndpZHRoIC8gNCArIGdhcDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEVEaXJlY3Rpb24udXA6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHlQb3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoeFBvcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi54ICsgdGFua1NpemUud2lkdGggLSBtaW4oeFBvcykgPD0gYWRqdXN0R2FwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gb2JqZWN0LnBvc2l0aW9uLnggLSB0YW5rU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG1heCh4UG9zKSArIGNlbGxTaXplLndpZHRoIC0gdGhpcy5wb3NpdGlvbi54IDw9IGFkanVzdEdhcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IG1heCh4UG9zKSArIGNlbGxTaXplLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSA9IG1heCh5UG9zKSArIGNlbGxTaXplLmhlaWdodCArIGdhcDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEVEaXJlY3Rpb24uZG93bjpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoeVBvcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4UG9zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggKyB0YW5rU2l6ZS53aWR0aCAtIG1pbih4UG9zKSA8PSBhZGp1c3RHYXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSBtaW4oeFBvcykgLSB0YW5rU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG1heCh4UG9zKSArIGNlbGxTaXplLndpZHRoIC0gdGhpcy5wb3NpdGlvbi54IDw9IGFkanVzdEdhcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IG1heCh4UG9zKSArIGNlbGxTaXplLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSA9IG1pbih5UG9zKSAtIHNpemUuaGVpZ2h0IC0gZ2FwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgRURpcmVjdGlvbi5yaWdodDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoeFBvcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh5UG9zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgKyB0YW5rU2l6ZS5oZWlnaHQgLSBtaW4oeVBvcykgPD0gYWRqdXN0R2FwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gbWluKHlQb3MpIC0gdGFua1NpemUuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobWF4KHlQb3MpICsgY2VsbFNpemUuaGVpZ2h0IC0gdGhpcy5wb3NpdGlvbi55IDw9IGFkanVzdEdhcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSA9IG1heCh5UG9zKSArIGNlbGxTaXplLmhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSBtaW4oeFBvcykgLSBzaXplLndpZHRoIC0gZ2FwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBFRGlyZWN0aW9uLmxlZnQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gb2JqZWN0LnBvc2l0aW9uLnggKyBvYmplY3RTaXplLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBFRGlyZWN0aW9uLnVwOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSA9IG9iamVjdC5wb3NpdGlvbi55ICsgb2JqZWN0U2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEVEaXJlY3Rpb24uZG93bjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSBvYmplY3QucG9zaXRpb24ueSAtIHNpemUuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBFRGlyZWN0aW9uLnJpZ2h0OlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IG9iamVjdC5wb3NpdGlvbi54IC0gc2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gTW92aW5nT2JqZWN0O1xyXG59KEdhbWVPYmplY3QpKTtcclxuZXhwb3J0IGRlZmF1bHQgTW92aW5nT2JqZWN0O1xyXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlTW92ZShwb3NpdGlvbiwgZGlyZWN0aW9uLCBzcGVlZCkge1xyXG4gICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcclxuICAgICAgICBjYXNlIEVEaXJlY3Rpb24udXA6XHJcbiAgICAgICAgICAgIHBvc2l0aW9uLnkgLT0gc3BlZWQ7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgRURpcmVjdGlvbi5yaWdodDpcclxuICAgICAgICAgICAgcG9zaXRpb24ueCArPSBzcGVlZDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBFRGlyZWN0aW9uLmRvd246XHJcbiAgICAgICAgICAgIHBvc2l0aW9uLnkgKz0gc3BlZWQ7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgRURpcmVjdGlvbi5sZWZ0OlxyXG4gICAgICAgICAgICBwb3NpdGlvbi54IC09IHNwZWVkO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufVxyXG4iLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuaW1wb3J0IFRhbmtPYmplY3QgZnJvbSBcIi4vVGFua09iamVjdFwiO1xyXG5pbXBvcnQgeyBFbmVteVR5cGUsIEVuZW15U2NvcmVNYXAgfSBmcm9tIFwiLi9FbnVtL0VUYW5rVHlwZVwiO1xyXG5pbXBvcnQgRURpcmVjdGlvbiBmcm9tIFwiLi4vLi4vVXRpbHMvRURpcmVjdGlvblwiO1xyXG5pbXBvcnQgeyBTY29yZVRvQW5pbWF0aW9uIH0gZnJvbSBcIi4vRW51bS9FQW5pbWF0aW9uVHlwZVwiO1xyXG5pbXBvcnQgeyBnZXRSYW5kb21FbnVtLCBnZXRSYW5kb21SYW5nZSB9IGZyb20gXCIuLi8uLi9VdGlscy9VdGlsc1wiO1xyXG5pbXBvcnQgQnVsbGV0T2JqZWN0IGZyb20gXCIuL0J1bGxldE9iamVjdFwiO1xyXG5leHBvcnQgdmFyIENvbG9yU2VxdWVuY2VEZWZpbml0aW9ucyA9IHtcclxuICAgIERFRkFVTFQ6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNlcXVlbmNlOiBbXCJXSElURVwiIC8qIFdISVRFICovXSxcclxuICAgICAgICAgICAgZGVsYXk6IC0xLFxyXG4gICAgICAgIH1cclxuICAgIF0sXHJcbiAgICBBUk1PVVJFRDogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2VxdWVuY2U6IFtcIldISVRFXCIgLyogV0hJVEUgKi9dLFxyXG4gICAgICAgICAgICBkZWxheTogMjUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNlcXVlbmNlOiBbXCJHUkVFTlwiIC8qIEdSRUVOICovLCBcIllFTExPV1wiIC8qIFlFTExPVyAqL10sXHJcbiAgICAgICAgICAgIGRlbGF5OiAyNSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2VxdWVuY2U6IFtcIkdSRUVOXCIgLyogR1JFRU4gKi8sIFwiV0hJVEVcIiAvKiBXSElURSAqL10sXHJcbiAgICAgICAgICAgIGRlbGF5OiAyNSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2VxdWVuY2U6IFtcIllFTExPV1wiIC8qIFlFTExPVyAqLywgXCJXSElURVwiIC8qIFdISVRFICovXSxcclxuICAgICAgICAgICAgZGVsYXk6IDI1LFxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgSVRFTTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2VxdWVuY2U6IFtcIldISVRFXCIgLyogV0hJVEUgKi8sIFwiTUFHRU5UQVwiIC8qIE1BR0VOVEEgKi9dLFxyXG4gICAgICAgICAgICBkZWxheTogMTAwLFxyXG4gICAgICAgIH1cclxuICAgIF1cclxufTtcclxuZXhwb3J0IHZhciBBSV9BQ1RJT05fREVMQVkgPSA1MDA7XHJcbmV4cG9ydCB2YXIgQUlfRklSRV9ERUxBWSA9IDEwMDA7XHJcbnZhciBUYW5rQUlPQmplY3QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoVGFua0FJT0JqZWN0LCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gVGFua0FJT0JqZWN0KGdhbWUsIGVuZW15VHlwZSwgaGFzSXRlbSwgcG9zaXRpb24sIGRpcmVjdGlvbikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGxldmVsO1xyXG4gICAgICAgIHZhciBocCA9IDE7XHJcbiAgICAgICAgc3dpdGNoIChlbmVteVR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBFbmVteVR5cGUuREVGQVVMVDpcclxuICAgICAgICAgICAgICAgIGxldmVsID0gMDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEVuZW15VHlwZS5TUEVFRDpcclxuICAgICAgICAgICAgICAgIGxldmVsID0gMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEVuZW15VHlwZS5QT1dFUjpcclxuICAgICAgICAgICAgICAgIGxldmVsID0gMjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEVuZW15VHlwZS5BUk1PVVJFRDpcclxuICAgICAgICAgICAgICAgIGxldmVsID0gMztcclxuICAgICAgICAgICAgICAgIGhwID0gNDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGdhbWUsIFwiRU5FTVlfVEFOS1wiIC8qIEVORU1ZX1RBTksgKi8sIHBvc2l0aW9uLCBkaXJlY3Rpb24sIFwiV0hJVEVcIiAvKiBXSElURSAqLywgbGV2ZWwpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMubGFzdENoYW5nZWQgPSAwO1xyXG4gICAgICAgIF90aGlzLl9lbmVteVR5cGUgPSBlbmVteVR5cGU7XHJcbiAgICAgICAgaWYgKF90aGlzLl9lbmVteVR5cGUgPT09IEVuZW15VHlwZS5TUEVFRCkge1xyXG4gICAgICAgICAgICBfdGhpcy5fc3BlZWQgPSAzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfdGhpcy5faGFzSXRlbSA9IGhhc0l0ZW07XHJcbiAgICAgICAgX3RoaXMuX2NvbG9ySW5kZXggPSAwO1xyXG4gICAgICAgIF90aGlzLl9ocCA9IGhwO1xyXG4gICAgICAgIF90aGlzLl9sYXN0VHVybmVkID0gMDtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVGFua0FJT0JqZWN0LnByb3RvdHlwZSwgXCJjb2xvckluZGV4XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbG9ySW5kZXg7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgVGFua0FJT0JqZWN0LnByb3RvdHlwZS5uZXh0Q29sb3JJbmRleCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZGVmaW5pdGlvbiA9IHRoaXMuZ2V0Q29sb3JEZWZpbml0aW9uKCk7XHJcbiAgICAgICAgdmFyIG1heEluZGV4ID0gZGVmaW5pdGlvbi5zZXF1ZW5jZS5sZW5ndGg7XHJcbiAgICAgICAgaWYgKHRoaXMuX2NvbG9ySW5kZXggKyAxID49IG1heEluZGV4KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbG9ySW5kZXggPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fY29sb3JJbmRleCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fY29sb3JJbmRleDtcclxuICAgIH07XHJcbiAgICBUYW5rQUlPQmplY3QucHJvdG90eXBlLmdldENvbG9yRGVmaW5pdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIga2V5O1xyXG4gICAgICAgIHZhciBpbmRleDtcclxuICAgICAgICBpZiAodGhpcy5faGFzSXRlbSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBrZXkgPSAnSVRFTSc7XHJcbiAgICAgICAgICAgIGluZGV4ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fZW5lbXlUeXBlID09PSBFbmVteVR5cGUuQVJNT1VSRUQpIHtcclxuICAgICAgICAgICAga2V5ID0gdGhpcy5fZW5lbXlUeXBlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGluZGV4ID0gdGhpcy5faHAgLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAga2V5ID0gJ0RFRkFVTFQnO1xyXG4gICAgICAgICAgICBpbmRleCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBDb2xvclNlcXVlbmNlRGVmaW5pdGlvbnNba2V5XVtpbmRleF07XHJcbiAgICB9O1xyXG4gICAgVGFua0FJT0JqZWN0LnByb3RvdHlwZS5hY3Rpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG5vdyA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIGlmIChub3cgLSB0aGlzLl9sYXN0RmlyZWQgPiBBSV9GSVJFX0RFTEFZKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyZSgpO1xyXG4gICAgICAgICAgICB0aGlzLl9sYXN0RmlyZWQgPSBub3c7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChub3cgLSB0aGlzLl9sYXN0VHVybmVkID4gQUlfQUNUSU9OX0RFTEFZKSB7XHJcbiAgICAgICAgICAgIHZhciByYW5kb20gPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICB2YXIgZGlyZWN0aW9uID0gdm9pZCAwO1xyXG4gICAgICAgICAgICBpZiAocmFuZG9tIDwgLjUpIHtcclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9IHRoaXMuZmluZEVhZ2xlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAocmFuZG9tIDwgLjgpIHtcclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9IHRoaXMuZmluZFBsYXllcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uID0gZ2V0UmFuZG9tRW51bShFRGlyZWN0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kaXJlY3Rpb24gPSBkaXJlY3Rpb247XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sYXN0VHVybmVkID0gbm93O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubW92ZSgpO1xyXG4gICAgfTtcclxuICAgIFRhbmtBSU9CamVjdC5wcm90b3R5cGUuZmluZEVhZ2xlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBlYWdsZSA9IHRoaXMuX2dhbWUub2JqZWN0cy5maW5kKGZ1bmN0aW9uIChvYmplY3QpIHtcclxuICAgICAgICAgICAgaWYgKG9iamVjdC5vYmplY3RUeXBlID09PSBcIkJMT0NLXCIgLyogQkxPQ0sgKi8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvYmplY3QuYmxvY2tUeXBlID09PSBcIkVBR0xFXCIgLyogRUFHTEUgKi87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgeERpZmYgPSB0aGlzLnBvc2l0aW9uLnggLSBlYWdsZS5wb3NpdGlvbi54O1xyXG4gICAgICAgIHZhciB5RGlmZiA9IHRoaXMucG9zaXRpb24ueSAtIGVhZ2xlLnBvc2l0aW9uLnk7XHJcbiAgICAgICAgaWYgKHhEaWZmIDwgeURpZmYpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueCA+IGVhZ2xlLnBvc2l0aW9uLngpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBFRGlyZWN0aW9uLmxlZnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gRURpcmVjdGlvbi5yaWdodDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueSA+IGVhZ2xlLnBvc2l0aW9uLnkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBFRGlyZWN0aW9uLnVwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEVEaXJlY3Rpb24uZG93bjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBUYW5rQUlPQmplY3QucHJvdG90eXBlLmZpbmRQbGF5ZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHBsYXllcnMgPSB0aGlzLl9nYW1lLm9iamVjdHMuZmlsdGVyKGZ1bmN0aW9uIChvYmplY3QpIHtcclxuICAgICAgICAgICAgaWYgKG9iamVjdC5vYmplY3RUeXBlID09PSBcIlRBTktcIiAvKiBUQU5LICovKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqZWN0LnRhbmtUeXBlID09PSBcIlBMQVlFUl9UQU5LXCIgLyogUExBWUVSX1RBTksgKi87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgcGxheWVyID0gcGxheWVyc1tnZXRSYW5kb21SYW5nZSgwLCBwbGF5ZXJzLmxlbmd0aCAtIDEpXTtcclxuICAgICAgICBpZiAocGxheWVyID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB4RGlmZiA9IHRoaXMucG9zaXRpb24ueCAtIHBsYXllci5wb3NpdGlvbi54O1xyXG4gICAgICAgIHZhciB5RGlmZiA9IHRoaXMucG9zaXRpb24ueSAtIHBsYXllci5wb3NpdGlvbi55O1xyXG4gICAgICAgIGlmICh4RGlmZiA+IHlEaWZmKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggPiBwbGF5ZXIucG9zaXRpb24ueCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEVEaXJlY3Rpb24ubGVmdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBFRGlyZWN0aW9uLnJpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi55ID4gcGxheWVyLnBvc2l0aW9uLnkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBFRGlyZWN0aW9uLnVwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEVEaXJlY3Rpb24uZG93bjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBUYW5rQUlPQmplY3QucHJvdG90eXBlLmhpdCA9IGZ1bmN0aW9uIChldmVudE9yaWdpbikge1xyXG4gICAgICAgIGlmIChldmVudE9yaWdpbi5vYmplY3RUeXBlID09PSBcIkJVTExFVFwiIC8qIEJVTExFVCAqLykge1xyXG4gICAgICAgICAgICB2YXIgYnVsbGV0ID0gZXZlbnRPcmlnaW47XHJcbiAgICAgICAgICAgIGlmIChidWxsZXQucGFyZW50LnRhbmtUeXBlID09PSBcIkVORU1ZX1RBTktcIiAvKiBFTkVNWV9UQU5LICovKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5faHAgLT0gMTtcclxuICAgICAgICBpZiAodGhpcy5faHAgPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3koZXZlbnRPcmlnaW4pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBUYW5rQUlPQmplY3QucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoZXZlbnRPcmlnaW4pIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX2hhc0l0ZW0pIHtcclxuICAgICAgICAgICAgdGhpcy5fZ2FtZS5zcGF3bkl0ZW0oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV2ZW50T3JpZ2luICYmIGV2ZW50T3JpZ2luIGluc3RhbmNlb2YgQnVsbGV0T2JqZWN0KSB7XHJcbiAgICAgICAgICAgIHZhciBwbGF5ZXIgPSBldmVudE9yaWdpbi5wYXJlbnQ7XHJcbiAgICAgICAgICAgIHZhciBwbGF5ZXJJbmRleCA9IHBsYXllciA9PT0gdGhpcy5fZ2FtZS5tYWluVGFuayA/IDAgOiAxO1xyXG4gICAgICAgICAgICB0aGlzLl9nYW1lLmdhbWVEYXRhLnBsYXllckRhdGFbcGxheWVySW5kZXhdLmRlc3Ryb3llZFRhbmtbdGhpcy5fZW5lbXlUeXBlXSsrO1xyXG4gICAgICAgICAgICB0aGlzLl9nYW1lLmdhbWVEYXRhLnBsYXllckRhdGFbcGxheWVySW5kZXhdLnNjb3JlICs9IHRoaXMuZ2V0VGFua1Njb3JlKCk7XHJcbiAgICAgICAgICAgIC8vIFRPRE8gcGxheWVyIFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9nYW1lLnN0YXJ0QW5pbWF0aW9uKHRoaXMsIFwiRVhQTE9TSU9OX1NNQUxMXCIgLyogRVhQTE9TSU9OX1NNQUxMICovLCBudWxsLCBmdW5jdGlvbiAoYW5pbWF0aW9uKSB7XHJcbiAgICAgICAgICAgIF90aGlzLl9nYW1lLnN0YXJ0QW5pbWF0aW9uKGFuaW1hdGlvbi5hbmltYXRpb25Qb2ludCwgXCJFWFBMT1NJT05fTEFSR0VcIiAvKiBFWFBMT1NJT05fTEFSR0UgKi8sIG51bGwsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzY29yZUFuaW1hdGlvbiA9IFNjb3JlVG9BbmltYXRpb24oRW5lbXlTY29yZU1hcC5nZXQoX3RoaXMuX2VuZW15VHlwZSkpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuX2dhbWUuc3RhcnRBbmltYXRpb24oYW5pbWF0aW9uLmFuaW1hdGlvblBvaW50LCBzY29yZUFuaW1hdGlvbiwgbnVsbCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9nYW1lLnNwYXduVGFuayhfdGhpcy50YW5rVHlwZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgVGFua0FJT0JqZWN0LnByb3RvdHlwZS5nZXRUYW5rU2NvcmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLl9lbmVteVR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBFbmVteVR5cGUuREVGQVVMVDpcclxuICAgICAgICAgICAgICAgIHJldHVybiAxMDA7XHJcbiAgICAgICAgICAgIGNhc2UgRW5lbXlUeXBlLlNQRUVEOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDIwMDtcclxuICAgICAgICAgICAgY2FzZSBFbmVteVR5cGUuUE9XRVI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMzAwO1xyXG4gICAgICAgICAgICBjYXNlIEVuZW15VHlwZS5BUk1PVVJFRDpcclxuICAgICAgICAgICAgICAgIHJldHVybiA0MDA7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBUYW5rQUlPQmplY3Q7XHJcbn0oVGFua09iamVjdCkpO1xyXG5leHBvcnQgZGVmYXVsdCBUYW5rQUlPQmplY3Q7XHJcbiIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5pbXBvcnQgeyBNQUlOX1RBTktfSUQgfSBmcm9tIFwiLi4vR2FtZVwiO1xyXG5pbXBvcnQgTW92aW5nT2JqZWN0LCB7IGNhbGN1bGF0ZU1vdmUgfSBmcm9tIFwiLi9Nb3ZpbmdPYmplY3RcIjtcclxuaW1wb3J0IEVEaXJlY3Rpb24gZnJvbSBcIi4uLy4uL1V0aWxzL0VEaXJlY3Rpb25cIjtcclxuaW1wb3J0IEJ1bGxldE9iamVjdCwgeyBCVUxMRVRfU0xPVywgQlVMTEVUX0ZBU1QgfSBmcm9tIFwiLi9CdWxsZXRPYmplY3RcIjtcclxuaW1wb3J0IFNQUlRJRV9ERUYgZnJvbSBcIi4uLy4uL1JlbmRlci9TcHJpdGUvU3ByaXRlRGVmaW5pdGlvblwiO1xyXG5pbXBvcnQgeyBHdWlkIH0gZnJvbSBcIi4uLy4uL1V0aWxzL1V0aWxzXCI7XHJcbmV4cG9ydCB2YXIgVEFOS19TUEVFRCA9IDI7XHJcbmV4cG9ydCB2YXIgVEFOS19GSVJFX0RFTEFZID0gMTAwO1xyXG52YXIgVGFua09iamVjdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhUYW5rT2JqZWN0LCBfc3VwZXIpO1xyXG4gICAgLy8jcmVnaW9uIGNvbnN0cnVjdG9yXHJcbiAgICBmdW5jdGlvbiBUYW5rT2JqZWN0KGdhbWUsIHRhbmtUeXBlLCBwb3NpdGlvbiwgZGlyZWN0aW9uLCB0YW5rQ29sb3IsIHRhbmtMZXZlbCwgaWQpIHtcclxuICAgICAgICBpZiAodGFua0xldmVsID09PSB2b2lkIDApIHsgdGFua0xldmVsID0gMTsgfVxyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGdhbWUsIFwiVEFOS1wiIC8qIFRBTksgKi8sIHBvc2l0aW9uLCBkaXJlY3Rpb24sIFRBTktfU1BFRUQsIGlkICE9IG51bGwgPyBpZCA6IEd1aWQubmV3R3VpZCgpKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLl9pc0ludmluY2libGUgPSBmYWxzZTtcclxuICAgICAgICBfdGhpcy5fdGFua1R5cGUgPSB0YW5rVHlwZTtcclxuICAgICAgICBfdGhpcy5fdGFua0NvbG9yID0gdGFua0NvbG9yO1xyXG4gICAgICAgIF90aGlzLl90YW5rTGV2ZWwgPSB0YW5rTGV2ZWw7XHJcbiAgICAgICAgX3RoaXMuX2J1bGxldHMgPSBbXTtcclxuICAgICAgICBfdGhpcy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgX3RoaXMuX2xhc3RGaXJlZCA9IDA7XHJcbiAgICAgICAgX3RoaXMuc3Bhd24oKTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVGFua09iamVjdC5wcm90b3R5cGUsIFwidGFua0NvbG9yXCIsIHtcclxuICAgICAgICAvLyNlbmRyZWdpb25cclxuICAgICAgICAvLyNyZWdpb24gZ2V0dGVyLCBzZXR0ZXJcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RhbmtDb2xvcjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIFRPRE86IFJFTU9WRSBXSEVOIERFUExPWVxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGNvbG9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RhbmtDb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUYW5rT2JqZWN0LnByb3RvdHlwZSwgXCJ0YW5rVHlwZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90YW5rVHlwZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVGFua09iamVjdC5wcm90b3R5cGUsIFwiaXNJbnZpbmNpYmxlXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lzSW52aW5jaWJsZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVGFua09iamVjdC5wcm90b3R5cGUsIFwidGFua0xldmVsXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RhbmtMZXZlbDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIFRPRE86IFJFTU9WRSBXSEVOIERFUExPWVxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGxldmVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RhbmtMZXZlbCA9IGxldmVsO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIC8vI2VuZHJlZ2lvblxyXG4gICAgLy8jcmVnaW9uIGltcGxlbWVudHMgb2YgTW92aW5nT2JqZWN0XHRcclxuICAgIFRhbmtPYmplY3QucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBjYWxjdWxhdGVNb3ZlKHRoaXMucG9zaXRpb24sIHRoaXMuX2RpcmVjdGlvbiwgdGhpcy5fc3BlZWQpO1xyXG4gICAgICAgIHRoaXMuX2dhbWUubG9nKFwiVEFOSyBbXCIgKyB0aGlzLmlkICsgXCJdIE1PVkVEIC0+IFsgeDogXCIgKyB0aGlzLnBvc2l0aW9uLnggKyBcIiwgeTogXCIgKyB0aGlzLnBvc2l0aW9uLnkgKyBcIiBdXCIpO1xyXG4gICAgICAgIC8vIHRlc3QgbW92ZW1lbnQgaXMgdmFsaWRcclxuICAgICAgICB2YXIgdGVzdF92aXNpYmxlID0gdGhpcy5fZ2FtZS50ZXN0VmlzaWJpbGl0eSh0aGlzKTtcclxuICAgICAgICB2YXIgdGVzdF9jb2xsaXNpb24gPSB0aGlzLl9nYW1lLmNvbGxpc2lvblRlc3QodGhpcyk7XHJcbiAgICAgICAgaWYgKHRlc3RfdmlzaWJsZSA9PSBmYWxzZSAmJiB0ZXN0X2NvbGxpc2lvbi5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmZpdFRvQm9yZGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRlc3RfY29sbGlzaW9uLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGVzdF9jb2xsaXNpb24uZm9yRWFjaChmdW5jdGlvbiAob2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0Lm9iamVjdFR5cGUgPT09IFwiSVRFTVwiIC8qIElURU0gKi8pIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QuaGl0KF90aGlzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmZpdFRvT2JqZWN0KG9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuX2dhbWUubG9nKFwiVEFOSyBbXCIgKyBfdGhpcy5pZCArIFwiXSBNT1ZFUyAtPiBCTE9DS0VEISEgWyB4OiBcIiArIF90aGlzLnBvc2l0aW9uLnggKyBcIiwgeTogXCIgKyBfdGhpcy5wb3NpdGlvbi55ICsgXCIgXVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubmV4dFNwcml0ZVBvc2l0aW9uKCk7XHJcbiAgICB9O1xyXG4gICAgVGFua09iamVjdC5wcm90b3R5cGUuaGl0ID0gZnVuY3Rpb24gKGV2ZW50T3JpZ2luKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzSW52aW5jaWJsZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgfTtcclxuICAgIC8vI2VuZHJlZ2lvblxyXG4gICAgLy8jcmVnaW9uIHB1YmxpYyBtZXRob2RzXHJcbiAgICBUYW5rT2JqZWN0LnByb3RvdHlwZS5maXJlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBub3cgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICBpZiAobm93IC0gdGhpcy5fbGFzdEZpcmVkID49IFRBTktfRklSRV9ERUxBWSkge1xyXG4gICAgICAgICAgICB0aGlzLl9sYXN0RmlyZWQgPSBub3c7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQnVsbGV0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFRhbmtPYmplY3QucHJvdG90eXBlLnNwYXduID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5fZ2FtZS5zdGFydEFuaW1hdGlvbih0aGlzLCBcIlNQQVdOXCIgLyogU1BBV04gKi8sIG51bGwsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgX3RoaXMudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmIChfdGhpcyA9PSBfdGhpcy5fZ2FtZS5tYWluVGFuaykge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuaW52aW5jaWJsZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgVGFua09iamVjdC5wcm90b3R5cGUuaW52aW5jaWJsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX2lzSW52aW5jaWJsZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fZ2FtZS5zdGFydEFuaW1hdGlvbih0aGlzLCBcIklOVklOQ0lCTEVcIiAvKiBJTlZJTkNJQkxFICovLCBudWxsLCBmdW5jdGlvbiAoYW5pbSkge1xyXG4gICAgICAgICAgICBfdGhpcy5faXNJbnZpbmNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgVGFua09iamVjdC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5fZ2FtZS5zdGFydEFuaW1hdGlvbih0aGlzLCBcIkVYUExPU0lPTl9TTUFMTFwiIC8qIEVYUExPU0lPTl9TTUFMTCAqLywgbnVsbCwgZnVuY3Rpb24gKGFuaW1hdGlvbikge1xyXG4gICAgICAgICAgICBfdGhpcy5fZ2FtZS5zdGFydEFuaW1hdGlvbihhbmltYXRpb24uYW5pbWF0aW9uUG9pbnQsIFwiRVhQTE9TSU9OX0xBUkdFXCIgLyogRVhQTE9TSU9OX0xBUkdFICovLCBudWxsLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMuaWQgPT09IE1BSU5fVEFOS19JRCkge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9nYW1lLnNwYXduVGFuayhfdGhpcy50YW5rVHlwZSwgZmFsc2UsIDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuX2dhbWUuc3Bhd25UYW5rKF90aGlzLnRhbmtUeXBlLCBmYWxzZSwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFRhbmtPYmplY3QucHJvdG90eXBlLmxldmVsdXAgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGFua0xldmVsIDwgMykge1xyXG4gICAgICAgICAgICB0aGlzLnRhbmtMZXZlbCsrO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBUYW5rT2JqZWN0LnByb3RvdHlwZS5jcmVhdGVCdWxsZXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGFua0xldmVsIDwgMiAmJiB0aGlzLl9idWxsZXRzLmxlbmd0aCA+PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy50YW5rTGV2ZWwgPCA0ICYmIHRoaXMuX2J1bGxldHMubGVuZ3RoID49IDIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcG9zaXRpb247XHJcbiAgICAgICAgdmFyIHRhbmtTcHJpdGUgPSBTUFJUSUVfREVGLlRBTktbdGhpcy50YW5rQ29sb3JdW3RoaXMudGFua0xldmVsXVt0aGlzLmRpcmVjdGlvbl1bdGhpcy5zcHJpdGVQb3NpdGlvbl07XHJcbiAgICAgICAgdmFyIGJ1bGxldFNwcml0ZSA9IFNQUlRJRV9ERUYuQlVMTEVUW3RoaXMuZGlyZWN0aW9uXTtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgRURpcmVjdGlvbi51cDpcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IHRoaXMucG9zaXRpb24ueCArIHRoaXMuZ2V0TWlkZGxlKHRhbmtTcHJpdGUsIGJ1bGxldFNwcml0ZSwgdGhpcy5kaXJlY3Rpb24pLFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IHRoaXMucG9zaXRpb24ueVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEVEaXJlY3Rpb24ucmlnaHQ6XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICB4OiB0aGlzLnBvc2l0aW9uLnggKyB0YW5rU3ByaXRlLnNpemUud2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5nZXRNaWRkbGUodGFua1Nwcml0ZSwgYnVsbGV0U3ByaXRlLCB0aGlzLmRpcmVjdGlvbilcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBFRGlyZWN0aW9uLmRvd246XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICB4OiB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLmdldE1pZGRsZSh0YW5rU3ByaXRlLCBidWxsZXRTcHJpdGUsIHRoaXMuZGlyZWN0aW9uKSxcclxuICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLnBvc2l0aW9uLnkgKyB0YW5rU3ByaXRlLnNpemUuaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRURpcmVjdGlvbi5sZWZ0OlxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeDogdGhpcy5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IHRoaXMucG9zaXRpb24ueSArIHRoaXMuZ2V0TWlkZGxlKHRhbmtTcHJpdGUsIGJ1bGxldFNwcml0ZSwgdGhpcy5kaXJlY3Rpb24pXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBidWxsZXRTcGVlZDtcclxuICAgICAgICBpZiAodGhpcy50YW5rTGV2ZWwgPT0gMCkge1xyXG4gICAgICAgICAgICBidWxsZXRTcGVlZCA9IEJVTExFVF9TTE9XO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnRhbmtMZXZlbCA8IDQpIHtcclxuICAgICAgICAgICAgYnVsbGV0U3BlZWQgPSBCVUxMRVRfRkFTVDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGJ1bGxldCA9IG5ldyBCdWxsZXRPYmplY3QodGhpcy5fZ2FtZSwgdGhpcywgcG9zaXRpb24sIHRoaXMuZGlyZWN0aW9uLCBidWxsZXRTcGVlZCwgR3VpZC5uZXdHdWlkKCkpO1xyXG4gICAgICAgIHRoaXMuX2dhbWUuaW5zZXJ0T2JqZWN0KGJ1bGxldCk7XHJcbiAgICAgICAgdGhpcy5fYnVsbGV0cy5wdXNoKGJ1bGxldC5pZCk7XHJcbiAgICB9O1xyXG4gICAgVGFua09iamVjdC5wcm90b3R5cGUucmVtb3ZlQnVsbGV0ID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgdmFyIGZvdW5kID0gdGhpcy5fYnVsbGV0cy5maW5kKGZ1bmN0aW9uIChidWxsZXQpIHsgcmV0dXJuIGJ1bGxldCA9PT0gaWQ7IH0pO1xyXG4gICAgICAgIHZhciBpZHggPSB0aGlzLl9idWxsZXRzLmluZGV4T2YoZm91bmQpO1xyXG4gICAgICAgIGlmIChpZHggPiAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLl9idWxsZXRzLnNwbGljZShpZHgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvLyNlbmRyZWdpb25cclxuICAgIFRhbmtPYmplY3QucHJvdG90eXBlLmdldE1pZGRsZSA9IGZ1bmN0aW9uIChwYXJlbnQsIGNoaWxkLCBkaXJlY3Rpb24pIHtcclxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBFRGlyZWN0aW9uLnVwIHx8IGRpcmVjdGlvbiA9PT0gRURpcmVjdGlvbi5kb3duKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnQuc2l6ZS53aWR0aCAvIDIgLSBjaGlsZC5zaXplLndpZHRoIC8gMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnQuc2l6ZS5oZWlnaHQgLyAyIC0gY2hpbGQuc2l6ZS5oZWlnaHQgLyAyO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gVGFua09iamVjdDtcclxufShNb3ZpbmdPYmplY3QpKTtcclxuZXhwb3J0IGRlZmF1bHQgVGFua09iamVjdDtcclxuIiwiaW1wb3J0IFNQUlRJRV9ERUYgZnJvbSBcIi4vU3ByaXRlL1Nwcml0ZURlZmluaXRpb25cIjtcclxuaW1wb3J0IHsgQW5pbWF0aW9uRGVmYXVsdHMgfSBmcm9tIFwiLi4vR2FtZS9PYmplY3QvRW51bS9FQW5pbWF0aW9uVHlwZVwiO1xyXG5pbXBvcnQgeyBnZXRTcHJpdGVEYXRhLCBnZXRTeXN0ZW1TcHJpdGUsIGdldE9iamVjdFNpemUsIGdldEFuaW1hdGlvblNpemUgfSBmcm9tIFwiLi9TcHJpdGUvU3ByaXRlRGF0YVwiO1xyXG5pbXBvcnQgRURpcmVjdGlvbiBmcm9tIFwiLi4vVXRpbHMvRURpcmVjdGlvblwiO1xyXG5pbXBvcnQgeyBnZXRSYW5kb21SYW5nZSB9IGZyb20gXCIuLi9VdGlscy9VdGlsc1wiO1xyXG5pbXBvcnQgVGFua0FJT0JqZWN0IGZyb20gXCIuLi9HYW1lL09iamVjdC9UYW5rQUlPYmplY3RcIjtcclxuaW1wb3J0IFwiLi4vUmVzb3VyY2VzL1BpeGVsRW11bGF0b3IteHEwOC50dGZcIjtcclxuZXhwb3J0IHZhciBNQVhfRlBTID0gNjA7XHJcbmV4cG9ydCB2YXIgTUVOVV9NQVhfRlBTID0gMzA7XHJcbmV4cG9ydCB2YXIgRFJBV0lOR19DT05TVCA9IHtcclxuICAgIGNvbG9yczoge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IFwiIzAwMDAwMFwiLFxyXG4gICAgICAgIGJhY2tncm91bmRfZnJhbWU6IFwiIzYzNjM2MlwiLFxyXG4gICAgfSxcclxuICAgIHNpemVzOiB7XHJcbiAgICAgICAgZnJhbWU6IHtcclxuICAgICAgICAgICAgbGVmdDogMzIsXHJcbiAgICAgICAgICAgIHRvcDogMzIsXHJcbiAgICAgICAgICAgIGJvdHRvbTogMzIsXHJcbiAgICAgICAgICAgIHJpZ2h0OiBTUFJUSUVfREVGLlNZU1RFTS5GUkFNRS5zaXplLndpZHRoXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzY3JlZW46IHtcclxuICAgICAgICAgICAgd2lkdGg6IDMyICogMTMsXHJcbiAgICAgICAgICAgIGhlaWdodDogMzIgKiAxM1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBwb3NpdGlvbnM6IHtcclxuICAgICAgICBtYWluOiB7XHJcbiAgICAgICAgICAgIGN1cnNvcl9zdGFydDogMjY1XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRlYnVnOiB7XHJcbiAgICAgICAgZm9udDoge1xyXG4gICAgICAgICAgICBzaXplOiAxMixcclxuICAgICAgICAgICAgZm9udDogJ3Nhbi1zZXJpZidcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcbnZhciBSZW5kZXJlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFJlbmRlcmVyKGdhbWUsIGNhbnZhcywgc3ByaXRlX21haW5fc3JjLCBzcHJpdGVfdGl0bGVfc3JjKSB7XHJcbiAgICAgICAgdGhpcy5fZnBzID0ge1xyXG4gICAgICAgICAgICBmcHNJbnRlcnZhbDogMTAwMCAvIE1BWF9GUFMsXHJcbiAgICAgICAgICAgIG5vdzogcGVyZm9ybWFuY2Uubm93KCksXHJcbiAgICAgICAgICAgIHRoZW46IHBlcmZvcm1hbmNlLm5vdygpLFxyXG4gICAgICAgICAgICBlbGFwc2VkOiAwXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoY2FudmFzID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyAnY2FudmFzIGlzIG51bGwgb3IgdW5kZWZpbmVkJztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fY2FudmFzID0gY2FudmFzO1xyXG4gICAgICAgIGlmIChnYW1lID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyAnZ2FtZSBpcyBudWxsIG9yIHVuZGVmaW5lZCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2dhbWUgPSBnYW1lO1xyXG4gICAgICAgIHRoaXMuaW5pdFNjcmVlbigpO1xyXG4gICAgICAgIHRoaXMubG9hZFNwcml0ZShzcHJpdGVfbWFpbl9zcmMsIHNwcml0ZV90aXRsZV9zcmMpO1xyXG4gICAgfVxyXG4gICAgUmVuZGVyZXIucHJvdG90eXBlLmxvYWRTcHJpdGUgPSBmdW5jdGlvbiAobWFpblNyYywgdGl0bGVTcmMpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX21haW5TcHJpdGUgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICB0aGlzLl90aXRsZVNwcml0ZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRoaXMuX21haW5TcHJpdGUub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBfdGhpcy5fdGl0bGVTcHJpdGUuc3JjID0gdGl0bGVTcmM7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl90aXRsZVNwcml0ZS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIF90aGlzLnJlbmRlcigpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5fbWFpblNwcml0ZS5zcmMgPSBtYWluU3JjO1xyXG4gICAgfTtcclxuICAgIFJlbmRlcmVyLnByb3RvdHlwZS5pbml0U2NyZWVuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBzaXplcyA9IERSQVdJTkdfQ09OU1Quc2l6ZXM7XHJcbiAgICAgICAgdGhpcy5fY2FudmFzLndpZHRoID0gc2l6ZXMuZnJhbWUubGVmdCArIHNpemVzLmZyYW1lLnJpZ2h0ICsgc2l6ZXMuc2NyZWVuLndpZHRoO1xyXG4gICAgICAgIHRoaXMuX2NhbnZhcy5oZWlnaHQgPSBzaXplcy5mcmFtZS50b3AgKyBzaXplcy5mcmFtZS5ib3R0b20gKyBzaXplcy5zY3JlZW4uaGVpZ2h0O1xyXG4gICAgfTtcclxuICAgIFJlbmRlcmVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkgeyBfdGhpcy5yZW5kZXIoKTsgfSk7XHJcbiAgICAgICAgdmFyIGZwcyA9IHRoaXMuX2ZwcztcclxuICAgICAgICBmcHMubm93ID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgZnBzLmVsYXBzZWQgPSBmcHMubm93IC0gZnBzLnRoZW47XHJcbiAgICAgICAgaWYgKGZwcy5lbGFwc2VkID4gZnBzLmZwc0ludGVydmFsKSB7XHJcbiAgICAgICAgICAgIGZwcy50aGVuID0gZnBzLm5vdyAtIChmcHMuZWxhcHNlZCAlIGZwcy5mcHNJbnRlcnZhbCk7XHJcbiAgICAgICAgICAgIC8vIHN0YXJ0IGRyYXdpbmdcclxuICAgICAgICAgICAgLy8gZ2V0IGNvbnRleHRcclxuICAgICAgICAgICAgdmFyIGN0eCA9IHRoaXMuX2NhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgICAgICAvLyBjbGVhciBzY3JlZW5cclxuICAgICAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjdHguY2FudmFzLndpZHRoLCBjdHguY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgICAgIC8vIGRyYXcgYmFja2dyb3VuZHNcclxuICAgICAgICAgICAgdGhpcy5kcmF3QmFja2dyb3VuZChjdHgpO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX2dhbWUuY3VycmVudE1lbnUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJNQUlOXCIgLyogTUFJTiAqLzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlck1haW4oY3R4KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJHQU1FXCIgLyogR0FNRSAqLzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckdhbWUoY3R4KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJTVEFHRVwiIC8qIFNUQUdFICovOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyU3RhZ2UoY3R4KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJDT05TVFJVQ1RcIiAvKiBDT05TVFJVQ1QgKi86XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gZHJhdyBkZWJ1ZyBjb3VudGVyXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9nYW1lLmRlYnVnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdEZWJ1Z0NvdW50ZXIoY3R4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIHJlbmRlciBtYWluIHNjcmVlblxyXG4gICAgICogQHBhcmFtIGN0eCBjb250ZXh0XHJcbiAgICAgKi9cclxuICAgIFJlbmRlcmVyLnByb3RvdHlwZS5yZW5kZXJNYWluID0gZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgICAgIHRoaXMucHJvY2Vzc01haW4oKTtcclxuICAgICAgICB0aGlzLmRyYXdPYmplY3RzKGN0eCwgdGhpcy5fZ2FtZS5vYmplY3RzKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIHByb2Nlc3MgbWFpbiBzY3JlZW4gYWN0aW9uc1xyXG4gICAgICovXHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUucHJvY2Vzc01haW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgb2JqZWN0cyA9IHRoaXMuX2dhbWUub2JqZWN0cztcclxuICAgICAgICBpZiAob2JqZWN0cyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgb2JqZWN0cy5mb3JFYWNoKGZ1bmN0aW9uIChvYmplY3QpIHtcclxuICAgICAgICAgICAgICAgIHZhciBwb3NpdGlvbiA9IG9iamVjdC5wb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAob2JqZWN0Lm9iamVjdFR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQU5JTUFUSU9OXCIgLyogQU5JTUFUSU9OICovOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYW5pbWF0aW9uID0gb2JqZWN0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYW5pbWF0aW9uUG9pbnQgPSBhbmltYXRpb24uYW5pbWF0aW9uUG9pbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhbmltYXRpb25TaXplID0gZ2V0QW5pbWF0aW9uU2l6ZShhbmltYXRpb24uYW5pbWF0aW9uVHlwZSwgYW5pbWF0aW9uLnNwcml0ZVBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChhbmltYXRpb24uYW5pbWF0aW9uVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIlRJVExFXCIgLyogVElUTEUgKi86XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uLnkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLnkgPSBwb3NpdGlvbi55IC0gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uUG9pbnQueSA9IHBvc2l0aW9uLnkgKyBhbmltYXRpb25TaXplLmhlaWdodCAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKF90aGlzLnRpdGxlU2hvd24gPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLnkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25Qb2ludC55ID0gcG9zaXRpb24ueSArIGFuaW1hdGlvblNpemUuaGVpZ2h0IC8gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLmV4cGlyZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnRpdGxlU2hvd24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJDVVJTT1JcIiAvKiBDVVJTT1IgKi86XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnNvckluZGV4ID0gX3RoaXMuX2dhbWUuY3Vyc29ySW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnNvclN0YXJ0ID0gRFJBV0lOR19DT05TVC5wb3NpdGlvbnMubWFpbi5jdXJzb3Jfc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uUG9pbnQueSA9IGN1cnNvclN0YXJ0ICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29ySW5kZXggKiBhbmltYXRpb25TaXplLmhlaWdodCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvblNpemUuaGVpZ2h0IC8gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24ubmV4dFNwcml0ZVBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiByZW5kZXIgZ2FtZSBzY3JlZW5cclxuICAgICAqIEBwYXJhbSBjdHggY29udGV4dFxyXG4gICAgICovXHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUucmVuZGVyR2FtZSA9IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICAvLyBwcm9jZXNzIGFjdGlvbnNcclxuICAgICAgICB0aGlzLnByb2Nlc3NHYW1lKCk7XHJcbiAgICAgICAgLy8gZHJhdyBmcmFtZVxyXG4gICAgICAgIHRoaXMuZHJhd0ZyYW1lKGN0eCk7XHJcbiAgICAgICAgLy8gZHJhdyBvYmplY3RzXHJcbiAgICAgICAgdGhpcy5kcmF3T2JqZWN0cyhjdHgsIHRoaXMuX2dhbWUub2JqZWN0cyk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBwcm9jZXNzIGFsbCBnYW1lIGFjdGlvbnNcclxuICAgICAqL1xyXG4gICAgUmVuZGVyZXIucHJvdG90eXBlLnByb2Nlc3NHYW1lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHRoaXMuX2dhbWUucGF1c2UgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBtYWluVGFuayA9IHRoaXMuX2dhbWUubWFpblRhbms7XHJcbiAgICAgICAgaWYgKG1haW5UYW5rICE9IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKG1haW5UYW5rLnZpc2libGUgPT09IHRydWUgJiYgdGhpcy5jaGVja0tleVN0YXRlU3luYygpKSB7XHJcbiAgICAgICAgICAgICAgICBtYWluVGFuay5tb3ZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2dhbWUuZW5lbXlQYXVzZUV4cGlyZSA8IHRoaXMuX2Zwcy5ub3cpIHtcclxuICAgICAgICAgICAgdGhpcy5fZ2FtZS5zZXRFbmVteVBhdXNlKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG9iamVjdHMgPSB0aGlzLl9nYW1lLm9iamVjdHM7XHJcbiAgICAgICAgaWYgKG9iamVjdHMgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIG9iamVjdHMuZm9yRWFjaChmdW5jdGlvbiAob2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG9iamVjdC5vYmplY3RUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkJVTExFVFwiIC8qIEJVTExFVCAqLzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Lm1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkFOSU1BVElPTlwiIC8qIEFOSU1BVElPTiAqLzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFuaW1hdGlvbiA9IG9iamVjdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFuaW1hdGlvbi5leHBpcmVUaW1lIDwgX3RoaXMuX2Zwcy5ub3cpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5leHBpcmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYW5pbWF0aW9uUG9pbnQgPSBhbmltYXRpb24uYW5pbWF0aW9uUG9pbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhbmltYXRpb25TaXplID0gZ2V0QW5pbWF0aW9uU2l6ZShhbmltYXRpb24uYW5pbWF0aW9uVHlwZSwgYW5pbWF0aW9uLnNwcml0ZVBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChhbmltYXRpb24uYW5pbWF0aW9uVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIklOVklOQ0lCTEVcIiAvKiBJTlZJTkNJQkxFICovOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0YW5rU2l6ZSA9IGdldE9iamVjdFNpemUoXCJUQU5LXCIgLyogVEFOSyAqLyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uUG9pbnQueCA9IG1haW5UYW5rLnBvc2l0aW9uLnggKyB0YW5rU2l6ZS53aWR0aCAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uUG9pbnQueSA9IG1haW5UYW5rLnBvc2l0aW9uLnkgKyB0YW5rU2l6ZS5oZWlnaHQgLyAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkdBTUVPVkVSXCIgLyogR0FNRU9WRVIgKi86XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFuaW1hdGlvblBvaW50LnkgPj0gX3RoaXMuX2NhbnZhcy5jbGllbnRIZWlnaHQgLyAyICsgYW5pbWF0aW9uU2l6ZS5oZWlnaHQgLyAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvblBvaW50LnkgPSBhbmltYXRpb25Qb2ludC55IC0gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLm5leHRTcHJpdGVQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiVEFOS1wiIC8qIFRBTksgKi86XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0YW5rID0gb2JqZWN0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFuayBpbnN0YW5jZW9mIFRhbmtBSU9CamVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVuZW15ID0gdGFuaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkZWZpbml0aW9uID0gZW5lbXkuZ2V0Q29sb3JEZWZpbml0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuX2Zwcy5ub3cgLSBlbmVteS5sYXN0Q2hhbmdlZCA+IGRlZmluaXRpb24uZGVsYXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmVteS5uZXh0Q29sb3JJbmRleCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZW15Lmxhc3RDaGFuZ2VkID0gX3RoaXMuX2Zwcy5ub3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFuay52aXNpYmxlICYmIF90aGlzLl9nYW1lLmVuZW15UGF1c2UgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YW5rLmFjdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZ2FtZS5zcGF3blRhbmsoXCJFTkVNWV9UQU5LXCIgLyogRU5FTVlfVEFOSyAqLyk7XHJcbiAgICB9O1xyXG4gICAgUmVuZGVyZXIucHJvdG90eXBlLnJlbmRlclN0YWdlID0gZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgICAgIHRoaXMuZHJhd0N1cnRhaW4oY3R4KTtcclxuICAgIH07XHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUuZHJhd0N1cnRhaW4gPSBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgIHZhciBvYmplY3RzID0gdGhpcy5fZ2FtZS5vYmplY3RzO1xyXG4gICAgICAgIG9iamVjdHMuZm9yRWFjaChmdW5jdGlvbiAob2JqZWN0KSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAob2JqZWN0Lm9iamVjdFR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJBTklNQVRJT05cIiAvKiBBTklNQVRJT04gKi86XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFuaW1hdGlvbiA9IG9iamVjdDtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGFuaW1hdGlvbi5hbmltYXRpb25UeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJDVVJUQUlOXCIgLyogQ1VSVEFJTiAqLzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkZWZhdWx0cyA9IEFuaW1hdGlvbkRlZmF1bHRzLkNVUlRBSU47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3JpZ2luYWxfc3RhcnQgPSBhbmltYXRpb24uZXhwaXJlVGltZSAtIGRlZmF1bHRzLmR1cmF0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsYXBzZWQgPSBfdGhpcy5fZnBzLm5vdyAtIG9yaWdpbmFsX3N0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb2dyZXNzID0gZWxhcHNlZCAvIGRlZmF1bHRzLmR1cmF0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNjcmVlbl8xID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjdHguY2FudmFzLmNsaWVudFdpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogY3R4LmNhbnZhcy5jbGllbnRIZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gRFJBV0lOR19DT05TVC5jb2xvcnMuYmFja2dyb3VuZF9mcmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9ncmVzcyA8IC4yNSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBzY3JlZW5fMS53aWR0aCwgc2NyZWVuXzEuaGVpZ2h0ICogcHJvZ3Jlc3MgKiAyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHguZmlsbFJlY3QoMCwgc2NyZWVuXzEuaGVpZ2h0IC8gMiArIHNjcmVlbl8xLmhlaWdodCAvIDIgLSBzY3JlZW5fMS5oZWlnaHQgKiBwcm9ncmVzcyAqIDIsIHNjcmVlbl8xLndpZHRoLCBzY3JlZW5fMS5oZWlnaHQgKiBwcm9ncmVzcyAqIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocHJvZ3Jlc3MgPCAuNzUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgc2NyZWVuXzEud2lkdGgsIHNjcmVlbl8xLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZHJhd1N0YWdlTnVtYmVyKGN0eCwgX3RoaXMuX2dhbWUuZ2FtZURhdGEubGV2ZWxEYXRhLmxldmVsSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocHJvZ3Jlc3MgPCAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNsb3NpbmdQcm9ncmVzcyA9IHByb2dyZXNzIC0gLjc1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBEUkFXSU5HX0NPTlNULmNvbG9ycy5iYWNrZ3JvdW5kX2ZyYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBzY3JlZW5fMS53aWR0aCwgc2NyZWVuXzEuaGVpZ2h0IC8gMiAtIChzY3JlZW5fMS5oZWlnaHQgKiAoY2xvc2luZ1Byb2dyZXNzICogMikpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHguZmlsbFJlY3QoMCwgc2NyZWVuXzEuaGVpZ2h0IC8gMiArIChzY3JlZW5fMS5oZWlnaHQgKiAoY2xvc2luZ1Byb2dyZXNzICogMikpLCBzY3JlZW5fMS53aWR0aCwgc2NyZWVuXzEuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5leHBpcmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUuZHJhd1N0YWdlTnVtYmVyID0gZnVuY3Rpb24gKGN0eCwgbnVtYmVyKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgc3RhZ2UgPSBTUFJUSUVfREVGLlNZU1RFTS5TVEFHRTtcclxuICAgICAgICB2YXIgbnVtYmVycyA9IFtdO1xyXG4gICAgICAgIHZhciBudW1iZXJfc3RyID0gbnVtYmVyLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IG51bWJlcl9zdHIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgbnVtYmVycy5wdXNoKFNQUlRJRV9ERUYuU1lTVEVNLk5VTUJFUltwYXJzZUludChudW1iZXJfc3RyLmNoYXJBdChpKSldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLl9tYWluU3ByaXRlLCBzdGFnZS5wb3NpdGlvbi54LCBzdGFnZS5wb3NpdGlvbi55LCBzdGFnZS5zaXplLndpZHRoLCBzdGFnZS5zaXplLmhlaWdodCwgY3R4LmNhbnZhcy5jbGllbnRXaWR0aCAvIDIgLSBzdGFnZS5zaXplLndpZHRoICogKDQgLyA1KSwgY3R4LmNhbnZhcy5jbGllbnRIZWlnaHQgLyAyIC0gc3RhZ2Uuc2l6ZS5oZWlnaHQsIHN0YWdlLnNpemUud2lkdGgsIHN0YWdlLnNpemUuaGVpZ2h0KTtcclxuICAgICAgICBudW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKG51bWJlciwgaW5kZXgpIHtcclxuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShfdGhpcy5fbWFpblNwcml0ZSwgbnVtYmVyLnBvc2l0aW9uLngsIG51bWJlci5wb3NpdGlvbi55LCBudW1iZXIuc2l6ZS53aWR0aCwgbnVtYmVyLnNpemUuaGVpZ2h0LCBjdHguY2FudmFzLmNsaWVudFdpZHRoIC8gMiArIG51bWJlci5zaXplLndpZHRoICogKDQgLSBpbmRleCAtIDEpLCBjdHguY2FudmFzLmNsaWVudEhlaWdodCAvIDIgLSBudW1iZXIuc2l6ZS5oZWlnaHQsIG51bWJlci5zaXplLndpZHRoLCBudW1iZXIuc2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFJlbmRlcmVyLnByb3RvdHlwZS5jaGVja0tleVN0YXRlU3luYyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbWFpblRhbmsgPSB0aGlzLl9nYW1lLm1haW5UYW5rO1xyXG4gICAgICAgIHZhciBrZXlTdGF0ZSA9IHRoaXMuX2dhbWUua2V5U3RhdGU7XHJcbiAgICAgICAgaWYgKChrZXlTdGF0ZS5BcnJvd1VwID09PSB0cnVlICYmIG1haW5UYW5rLmRpcmVjdGlvbiA9PSBFRGlyZWN0aW9uLnVwKSB8fFxyXG4gICAgICAgICAgICAoa2V5U3RhdGUuQXJyb3dSaWdodCA9PT0gdHJ1ZSAmJiBtYWluVGFuay5kaXJlY3Rpb24gPT0gRURpcmVjdGlvbi5yaWdodCkgfHxcclxuICAgICAgICAgICAgKGtleVN0YXRlLkFycm93RG93biA9PT0gdHJ1ZSAmJiBtYWluVGFuay5kaXJlY3Rpb24gPT0gRURpcmVjdGlvbi5kb3duKSB8fFxyXG4gICAgICAgICAgICAoa2V5U3RhdGUuQXJyb3dMZWZ0ID09PSB0cnVlICYmIG1haW5UYW5rLmRpcmVjdGlvbiA9PSBFRGlyZWN0aW9uLmxlZnQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvLyNyZWdpb24gZHJhd2luZyBtZXRob2RzXHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUuZHJhd0JhY2tncm91bmQgPSBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gRFJBV0lOR19DT05TVC5jb2xvcnMuYmFja2dyb3VuZDtcclxuICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgY3R4LmNhbnZhcy5jbGllbnRXaWR0aCwgY3R4LmNhbnZhcy5jbGllbnRIZWlnaHQpO1xyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9O1xyXG4gICAgUmVuZGVyZXIucHJvdG90eXBlLmRyYXdGcmFtZSA9IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICB2YXIgRlJBTUUgPSBEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lO1xyXG4gICAgICAgIHZhciBTUFJJVEVfRlJBTUUgPSBnZXRTeXN0ZW1TcHJpdGUoXCJGUkFNRVwiIC8qIEZSQU1FICovKTtcclxuICAgICAgICB2YXIgU1BSSVRFX1RBTktfSUNPTiA9IGdldFN5c3RlbVNwcml0ZShcIlRBTktfSUNPTlwiIC8qIFRBTktfSUNPTiAqLyk7XHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gRFJBV0lOR19DT05TVC5jb2xvcnMuYmFja2dyb3VuZF9mcmFtZTtcclxuICAgICAgICAvLyB0b3BcclxuICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgY3R4LmNhbnZhcy5jbGllbnRXaWR0aCwgRlJBTUUudG9wKTtcclxuICAgICAgICAvLyBsZWZ0XHJcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIEZSQU1FLmxlZnQsIGN0eC5jYW52YXMuY2xpZW50SGVpZ2h0KTtcclxuICAgICAgICAvLyBib3R0b21cclxuICAgICAgICBjdHguZmlsbFJlY3QoMCwgY3R4LmNhbnZhcy5jbGllbnRIZWlnaHQgLSBGUkFNRS5ib3R0b20sIGN0eC5jYW52YXMuY2xpZW50V2lkdGgsIEZSQU1FLmJvdHRvbSk7XHJcbiAgICAgICAgLy8gcmlnaHRcclxuICAgICAgICBjdHguZmlsbFJlY3QoY3R4LmNhbnZhcy5jbGllbnRXaWR0aCAtIEZSQU1FLnJpZ2h0LCAwLCBGUkFNRS5yaWdodCwgY3R4LmNhbnZhcy5jbGllbnRIZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuZHJhd1Nwcml0ZShjdHgsIFNQUklURV9GUkFNRSwgeyB4OiBjdHguY2FudmFzLmNsaWVudFdpZHRoIC0gRlJBTUUucmlnaHQsIHk6IDAgfSk7XHJcbiAgICAgICAgLy8gZW5lbXkgdGFuayBsZWZ0XHJcbiAgICAgICAgdmFyIGdyb3VwcyA9IHRoaXMuX2dhbWUuZ2FtZURhdGEubGV2ZWxEYXRhLnRhbmtzO1xyXG4gICAgICAgIHZhciB0YW5rQ291bnQgPSAwO1xyXG4gICAgICAgIGdyb3Vwcy5mb3JFYWNoKGZ1bmN0aW9uIChncm91cCkge1xyXG4gICAgICAgICAgICB0YW5rQ291bnQgKz0gZ3JvdXAuREVGQVVMVCArIGdyb3VwLlNQRUVEICsgZ3JvdXAuUE9XRVIgKyBncm91cC5BUk1PVVJFRDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCAyOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0YW5rQ291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3U3ByaXRlKGN0eCwgU1BSSVRFX1RBTktfSUNPTiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBjdHguY2FudmFzLmNsaWVudFdpZHRoIC0gRlJBTUUucmlnaHQgKyAxNiAqIChqICsgMSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IDQ4ICsgMTYgKiBpXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjdHguZmlsbFJlY3QoY3R4LmNhbnZhcy5jbGllbnRXaWR0aCAtIEZSQU1FLnJpZ2h0ICsgMTYgKiAoaiArIDEpLCA0OCArIDE2ICogaSwgMTYsIDE2KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRhbmtDb3VudC0tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFAxIGxpZmVcclxuICAgICAgICB0aGlzLmRyYXdTcHJpdGUoY3R4LCBnZXRTeXN0ZW1TcHJpdGUoXCJOVU1CRVJcIiAvKiBOVU1CRVIgKi8sIHRoaXMuX2dhbWUuZ2FtZURhdGEucGxheWVyRGF0YVswXS5saWZlKSwgeyB4OiBjdHguY2FudmFzLmNsaWVudFdpZHRoIC0gRlJBTUUucmlnaHQgKyAzMiwgeTogMjg4IH0pO1xyXG4gICAgICAgIC8vIFAyIGxpZmVcclxuICAgICAgICBpZiAodGhpcy5fZ2FtZS5nYW1lRGF0YS5wbGF5ZXJEYXRhLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5kcmF3U3ByaXRlKGN0eCwgZ2V0U3lzdGVtU3ByaXRlKFwiTlVNQkVSXCIgLyogTlVNQkVSICovLCB0aGlzLl9nYW1lLmdhbWVEYXRhLnBsYXllckRhdGFbMV0ubGlmZSksIHsgeDogY3R4LmNhbnZhcy5jbGllbnRXaWR0aCAtIEZSQU1FLnJpZ2h0ICsgMzIsIHk6IDMzNiB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdChjdHguY2FudmFzLmNsaWVudFdpZHRoIC0gRlJBTUUucmlnaHQgKyAxNiwgMzIwLCAzMiwgMzIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbGV2ZWxJZCA9IHRoaXMuX2dhbWUuZ2FtZURhdGEubGV2ZWxEYXRhLmxldmVsSWQ7XHJcbiAgICAgICAgdmFyIGxldmVsVHlwZSA9IHR5cGVvZiAobGV2ZWxJZCk7XHJcbiAgICAgICAgaWYgKGxldmVsVHlwZSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgaWYgKE1hdGguZmxvb3IobGV2ZWxJZCAvIDEwKSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY3R4LmZpbGxSZWN0KGN0eC5jYW52YXMuY2xpZW50V2lkdGggLSBGUkFNRS5yaWdodCArIDE2LCA0MDAsIDE2LCAxNik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdTcHJpdGUoY3R4LCBnZXRTeXN0ZW1TcHJpdGUoXCJOVU1CRVJcIiAvKiBOVU1CRVIgKi8sIE1hdGguZmxvb3IobGV2ZWxJZCAvIDEwKSksIHsgeDogY3R4LmNhbnZhcy5jbGllbnRXaWR0aCAtIEZSQU1FLnJpZ2h0ICsgMTYsIHk6IDQwMCB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmRyYXdTcHJpdGUoY3R4LCBnZXRTeXN0ZW1TcHJpdGUoXCJOVU1CRVJcIiAvKiBOVU1CRVIgKi8sIGxldmVsSWQgJSAxMCksIHsgeDogY3R4LmNhbnZhcy5jbGllbnRXaWR0aCAtIEZSQU1FLnJpZ2h0ICsgMzIsIHk6IDQwMCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobGV2ZWxUeXBlID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gRFJBV0lOR19DT05TVC5jb2xvcnMuYmFja2dyb3VuZF9mcmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH07XHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUuZHJhd09iamVjdHMgPSBmdW5jdGlvbiAoY3R4LCBvYmplY3RzKSB7XHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iamVjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIG9iamVjdCA9IG9iamVjdHNbaV07XHJcbiAgICAgICAgICAgIHZhciBzcHJpdGUgPSBnZXRTcHJpdGVEYXRhKG9iamVjdCk7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd09iamVjdChjdHgsIG9iamVjdCwgc3ByaXRlKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2dhbWUuZGVidWcpIHtcclxuICAgICAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjRkYwMDAwJztcclxuICAgICAgICAgICAgICAgIGN0eC5zdHJva2VSZWN0KG9iamVjdC5wb3NpdGlvbi54ICsgMSwgb2JqZWN0LnBvc2l0aW9uLnkgKyAxLCBzcHJpdGUuc2l6ZS53aWR0aCAtIDIsIHNwcml0ZS5zaXplLmhlaWdodCAtIDIpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5kcmF3VGV4dChjdHgsIGAke29iamVjdC5pZH1gLCB7XHJcbiAgICAgICAgICAgICAgICAvLyBcdHg6IERSQVdJTkdfQ09OU1Quc2l6ZXMuZnJhbWUubGVmdCArIG9iamVjdC5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgICAgICAgLy8gXHR5OiBEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lLnRvcCArIG9iamVjdC5wb3NpdGlvbi55IC0gMSxcclxuICAgICAgICAgICAgICAgIC8vIH0sIHNwcml0ZS5zaXplLndpZHRoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUuZHJhd09iamVjdCA9IGZ1bmN0aW9uIChjdHgsIG9iamVjdCwgc3ByaXRlKSB7XHJcbiAgICAgICAgdmFyIHNwcml0ZV9zcmMgPSB0aGlzLl9tYWluU3ByaXRlO1xyXG4gICAgICAgIGlmIChvYmplY3QudmlzaWJsZSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvYmplY3Qub2JqZWN0VHlwZSA9PT0gXCJBTklNQVRJT05cIiAvKiBBTklNQVRJT04gKi8pIHtcclxuICAgICAgICAgICAgdmFyIGFuaW1hdGlvbiA9IG9iamVjdDtcclxuICAgICAgICAgICAgaWYgKGFuaW1hdGlvbi5hbmltYXRpb25UeXBlID09PSBcIlRJVExFXCIgLyogVElUTEUgKi8pIHtcclxuICAgICAgICAgICAgICAgIHNwcml0ZV9zcmMgPSB0aGlzLl90aXRsZVNwcml0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3ByaXRlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKG9iamVjdC5vYmplY3RUeXBlID09PSBcIkJMT0NLXCIgLyogQkxPQ0sgKi8pIHtcclxuICAgICAgICAgICAgICAgIHZhciBibG9jayA9IG9iamVjdDtcclxuICAgICAgICAgICAgICAgIHZhciBibG9ja1N0YXRlID0gYmxvY2suYmxvY2tTdGF0ZTR4NDtcclxuICAgICAgICAgICAgICAgIHZhciBjZWxsU2l6ZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogc3ByaXRlLnNpemUud2lkdGggLyA0LFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogc3ByaXRlLnNpemUud2lkdGggLyA0XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBibG9ja1N0YXRlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBibG9ja1N0YXRlW2ldLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChibG9ja1N0YXRlW2ldW2pdID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKHNwcml0ZV9zcmMsIHNwcml0ZS5wb3NpdGlvbi54ICsgY2VsbFNpemUud2lkdGggKiBqLCBzcHJpdGUucG9zaXRpb24ueSArIGNlbGxTaXplLmhlaWdodCAqIGksIGNlbGxTaXplLndpZHRoLCBjZWxsU2l6ZS5oZWlnaHQsIG9iamVjdC5wb3NpdGlvbi54ICsgY2VsbFNpemUud2lkdGggKiBqLCBvYmplY3QucG9zaXRpb24ueSArIGNlbGxTaXplLmhlaWdodCAqIGksIGNlbGxTaXplLndpZHRoLCBjZWxsU2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShzcHJpdGVfc3JjLCBzcHJpdGUucG9zaXRpb24ueCwgc3ByaXRlLnBvc2l0aW9uLnksIHNwcml0ZS5zaXplLndpZHRoLCBzcHJpdGUuc2l6ZS5oZWlnaHQsIG9iamVjdC5wb3NpdGlvbi54LCBvYmplY3QucG9zaXRpb24ueSwgc3ByaXRlLnNpemUud2lkdGgsIHNwcml0ZS5zaXplLmhlaWdodCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgUmVuZGVyZXIucHJvdG90eXBlLmRyYXdEZWJ1Z0NvdW50ZXIgPSBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgICAgdmFyIHRhbmsgPSB0aGlzLl9nYW1lLm1haW5UYW5rO1xyXG4gICAgICAgIGlmICh0YW5rICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5kcmF3VGV4dChjdHgsIFwiTUFJTiBUQU5LOiBUQU5LX1wiICsgdGFuay50YW5rQ29sb3IgKyBcIl9cIiArIHRhbmsudGFua0xldmVsICsgXCIoXCIgKyB0YW5rLnBvc2l0aW9uLnggKyBcIiwgXCIgKyB0YW5rLnBvc2l0aW9uLnkgKyBcIiwgXCIgKyB0YW5rLmRpcmVjdGlvbi50b1N0cmluZygpICsgXCIpXCIsIHsgeDogMCwgeTogMTUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdUZXh0KGN0eCwgXCJNQUlOIFRBTks6IE5PVCBGT1VORFwiLCB7IHg6IDAsIHk6IDE1IH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZnBzID0gKDEwMDAgLyB0aGlzLl9mcHMuZWxhcHNlZCkudG9GaXhlZCgyKSArIFwiZnBzIFwiO1xyXG4gICAgICAgIHRoaXMuZHJhd1RleHQoY3R4LCBmcHMsIHsgeDogY3R4LmNhbnZhcy53aWR0aCAtIChjdHgubWVhc3VyZVRleHQoZnBzKS53aWR0aCAqIDEuMzUpLCB5OiAxNSB9KTtcclxuICAgICAgICB2YXIga2V5U3RhdGUgPSB0aGlzLl9nYW1lLmtleVN0YXRlO1xyXG4gICAgICAgIHRoaXMuZHJhd1RleHQoY3R4LCBcIlNwYWNlOiBcIiArIChrZXlTdGF0ZS5TcGFjZSA/ICdUJyA6ICdGJyksIHsgeDogMCwgeTogY3R4LmNhbnZhcy5oZWlnaHQgfSk7XHJcbiAgICAgICAgdGhpcy5kcmF3VGV4dChjdHgsIFwiQXJyb3dMZWZ0OiBcIiArIChrZXlTdGF0ZS5BcnJvd0xlZnQgPyAnVCcgOiAnRicpLCB7IHg6IDAsIHk6IGN0eC5jYW52YXMuaGVpZ2h0IC0gMTUgfSk7XHJcbiAgICAgICAgdGhpcy5kcmF3VGV4dChjdHgsIFwiQXJyb3dEb3duOiBcIiArIChrZXlTdGF0ZS5BcnJvd0Rvd24gPyAnVCcgOiAnRicpLCB7IHg6IDAsIHk6IGN0eC5jYW52YXMuaGVpZ2h0IC0gMzAgfSk7XHJcbiAgICAgICAgdGhpcy5kcmF3VGV4dChjdHgsIFwiQXJyb3dSaWdodDogXCIgKyAoa2V5U3RhdGUuQXJyb3dSaWdodCA/ICdUJyA6ICdGJyksIHsgeDogMCwgeTogY3R4LmNhbnZhcy5oZWlnaHQgLSA0NSB9KTtcclxuICAgICAgICB0aGlzLmRyYXdUZXh0KGN0eCwgXCJBcnJvd1VwOiBcIiArIChrZXlTdGF0ZS5BcnJvd1VwID8gJ1QnIDogJ0YnKSwgeyB4OiAwLCB5OiBjdHguY2FudmFzLmhlaWdodCAtIDYwIH0pO1xyXG4gICAgICAgIHRoaXMuZHJhd1RleHQoY3R4LCBcIltJS2V5U3RhdGVdXCIsIHsgeDogMCwgeTogY3R4LmNhbnZhcy5oZWlnaHQgLSA3NSB9KTtcclxuICAgIH07XHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUuZHJhd1RleHQgPSBmdW5jdGlvbiAoY3R4LCB0ZXh0LCBwb3NpdGlvbiwgbWF4V2lkdGgpIHtcclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgIGN0eC5mb250ID0gRFJBV0lOR19DT05TVC5kZWJ1Zy5mb250LnNpemUgKyBcInB4IFwiICsgRFJBV0lOR19DT05TVC5kZWJ1Zy5mb250LmZvbnQ7XHJcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ3doaXRlJztcclxuICAgICAgICBjdHgubGluZVdpZHRoID0gMjtcclxuICAgICAgICBjdHguc3Ryb2tlVGV4dCh0ZXh0LCBwb3NpdGlvbi54LCBwb3NpdGlvbi55LCBtYXhXaWR0aCk7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdibGFjayc7XHJcbiAgICAgICAgY3R4LmZpbGxUZXh0KHRleHQsIHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIG1heFdpZHRoKTtcclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfTtcclxuICAgIFJlbmRlcmVyLnByb3RvdHlwZS5kcmF3U3ByaXRlID0gZnVuY3Rpb24gKGN0eCwgc3ByaXRlLCBwb3NpdGlvbiwgc2l6ZSkge1xyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLl9tYWluU3ByaXRlLCBzcHJpdGUucG9zaXRpb24ueCwgc3ByaXRlLnBvc2l0aW9uLnksIHNwcml0ZS5zaXplLndpZHRoLCBzcHJpdGUuc2l6ZS5oZWlnaHQsIHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIHNpemUgIT0gdW5kZWZpbmVkID8gc2l6ZS53aWR0aCA6IHNwcml0ZS5zaXplLndpZHRoLCBzaXplICE9IHVuZGVmaW5lZCA/IHNpemUuaGVpZ2h0IDogc3ByaXRlLnNpemUuaGVpZ2h0KTtcclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfTtcclxuICAgIC8vI2VuZHJlZ2lvblxyXG4gICAgLy8jcmVnaW9uIHB1YmxpYyBtZXRob2RzXHJcbiAgICAvKipcclxuICAgICAqIFRlc3Qgb2JqZWN0IGlzIHZpc2libGVcclxuICAgICAqIEBwYXJhbSBvYmplY3Qgb2JqZWN0IGZvciB0ZXN0XHJcbiAgICAgKiBAcGFyYW0gc3ByaXRlIG9iamVjdCdzIHNwcml0ZSBkYXRhIGZvciBzaXplXHJcbiAgICAgKi9cclxuICAgIFJlbmRlcmVyLnByb3RvdHlwZS5vYmplY3RWaXNpYmxlVGVzdCA9IGZ1bmN0aW9uIChvYmplY3QpIHtcclxuICAgICAgICB2YXIgcG9zaXRpb24gPSBvYmplY3QucG9zaXRpb247XHJcbiAgICAgICAgdmFyIHNpemUgPSBnZXRTcHJpdGVEYXRhKG9iamVjdCkuc2l6ZTtcclxuICAgICAgICB2YXIgY3R4ID0gdGhpcy5fY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgaWYgKHBvc2l0aW9uLnggPj0gRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS5sZWZ0ICYmXHJcbiAgICAgICAgICAgIHBvc2l0aW9uLnggKyBzaXplLndpZHRoIDw9IGN0eC5jYW52YXMuY2xpZW50V2lkdGggLSBEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lLnJpZ2h0ICYmXHJcbiAgICAgICAgICAgIHBvc2l0aW9uLnkgPj0gRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS50b3AgJiZcclxuICAgICAgICAgICAgcG9zaXRpb24ueSArIHNpemUuaGVpZ2h0IDw9IGN0eC5jYW52YXMuY2xpZW50SGVpZ2h0IC0gRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS5ib3R0b20pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFJlbmRlcmVyLnByb3RvdHlwZS5yYW5kb21Qb2ludCA9IGZ1bmN0aW9uIChzaXplKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgeDogZ2V0UmFuZG9tUmFuZ2UoRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS5sZWZ0LCB0aGlzLl9jYW52YXMud2lkdGggLSBEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lLnJpZ2h0IC0gc2l6ZS53aWR0aCksXHJcbiAgICAgICAgICAgIHk6IGdldFJhbmRvbVJhbmdlKERSQVdJTkdfQ09OU1Quc2l6ZXMuZnJhbWUudG9wLCB0aGlzLl9jYW52YXMuaGVpZ2h0IC0gRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS5ib3R0b20gLSBzaXplLmhlaWdodCksXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIENhbGN1bGF0ZSBhbmQgcmV0dXJuIFotSW5kZXggZm9yIHJlbmRlclxyXG4gICAgICogMDogV2F0ZXIgQmxvY2tcclxuICAgICAqIDE6IFRhbmtzLCBCcmVha2FibGUgQmxvY2tzXHJcbiAgICAgKiAyOiBJbnZpbmNpYmxlIEFuaW1hdGlvbiwgQnVsbGV0c1xyXG4gICAgICogMzogQnVzaFxyXG4gICAgICogNDogRXhwbG9kZSBBbmltYXRpb25zLCBTY29yZSBBbmltYXRpb25zLCBTcGF3bmluZyBBbmltYXRpb25cclxuICAgICAqIDU6IEl0ZW1zXHJcbiAgICAgKiA2OiBTeXN0ZW0gU3ByaXRlcyhHYW1lIE92ZXIuLi4gZXRjKVxyXG4gICAgICogQHBhcmFtIG9iamVjdCBvYmplY3QgZm9yIGNhbGN1bGF0ZVxyXG4gICAgICovXHJcbiAgICBSZW5kZXJlci5nZXRPYmplY3RaSW5kZXggPSBmdW5jdGlvbiAob2JqZWN0KSB7XHJcbiAgICAgICAgc3dpdGNoIChvYmplY3Qub2JqZWN0VHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiQkxPQ0tcIiAvKiBCTE9DSyAqLzpcclxuICAgICAgICAgICAgICAgIHZhciBibG9jayA9IG9iamVjdDtcclxuICAgICAgICAgICAgICAgIGlmIChibG9jay5ibG9ja1R5cGUgPT09IFwiV0FURVJcIiAvKiBXQVRFUiAqLykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoYmxvY2suYmxvY2tUeXBlID09PSBcIkJVU0hcIiAvKiBCVVNIICovKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcIlRBTktcIiAvKiBUQU5LICovOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgIGNhc2UgXCJBTklNQVRJT05cIiAvKiBBTklNQVRJT04gKi86XHJcbiAgICAgICAgICAgICAgICB2YXIgYW5pbWF0aW9uID0gb2JqZWN0O1xyXG4gICAgICAgICAgICAgICAgaWYgKGFuaW1hdGlvbi5hbmltYXRpb25UeXBlID09PSBcIklOVklOQ0lCTEVcIiAvKiBJTlZJTkNJQkxFICovKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gNDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcIkJVTExFVFwiIC8qIEJVTExFVCAqLzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAyO1xyXG4gICAgICAgICAgICBjYXNlIFwiSVRFTVwiIC8qIElURU0gKi86XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gNTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFJlbmRlcmVyO1xyXG59KCkpO1xyXG5leHBvcnQgZGVmYXVsdCBSZW5kZXJlcjtcclxuIiwiaW1wb3J0IFNQUlRJRV9ERUYgZnJvbSBcIi4vU3ByaXRlRGVmaW5pdGlvblwiO1xyXG5pbXBvcnQgRURpcmVjdGlvbiBmcm9tIFwiLi4vLi4vVXRpbHMvRURpcmVjdGlvblwiO1xyXG5pbXBvcnQgVGFua0FJT0JqZWN0IGZyb20gXCIuLi8uLi9HYW1lL09iamVjdC9UYW5rQUlPYmplY3RcIjtcclxuLyoqXHJcbiAqIEZpbmQgc3ByaXRlIGRhdGEgZm9yIGdpdmVuIG9iamVjdFxyXG4gKiBAcGFyYW0gb2JqZWN0IGZvdW5kIHNwcml0ZSBkZWZpbml0aW9uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3ByaXRlRGF0YShvYmplY3QpIHtcclxuICAgIHN3aXRjaCAob2JqZWN0Lm9iamVjdFR5cGUpIHtcclxuICAgICAgICBjYXNlIFwiVEFOS1wiIC8qIFRBTksgKi86XHJcbiAgICAgICAgICAgIHZhciB0YW5rID0gb2JqZWN0O1xyXG4gICAgICAgICAgICBpZiAodGFuayBpbnN0YW5jZW9mIFRhbmtBSU9CamVjdCAmJiB0YW5rLmNvbG9ySW5kZXggIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZW5lbXkgPSBvYmplY3Q7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VxdWVuY2UgPSBlbmVteS5nZXRDb2xvckRlZmluaXRpb24oKS5zZXF1ZW5jZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBTUFJUSUVfREVGLkVORU1ZW3NlcXVlbmNlW2VuZW15LmNvbG9ySW5kZXhdXVtlbmVteS50YW5rTGV2ZWxdW2VuZW15LmRpcmVjdGlvbl1bZW5lbXkuc3ByaXRlUG9zaXRpb25dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFNQUlRJRV9ERUYuVEFOS1t0YW5rLnRhbmtDb2xvcl1bdGFuay50YW5rTGV2ZWxdW3RhbmsuZGlyZWN0aW9uXVt0YW5rLnNwcml0ZVBvc2l0aW9uXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgXCJCVUxMRVRcIiAvKiBCVUxMRVQgKi86XHJcbiAgICAgICAgICAgIHZhciBidWxsZXQgPSBvYmplY3Q7XHJcbiAgICAgICAgICAgIHJldHVybiBTUFJUSUVfREVGLkJVTExFVFtidWxsZXQuZGlyZWN0aW9uXTtcclxuICAgICAgICBjYXNlIFwiQU5JTUFUSU9OXCIgLyogQU5JTUFUSU9OICovOlxyXG4gICAgICAgICAgICB2YXIgYW5pbWF0aW9uID0gb2JqZWN0O1xyXG4gICAgICAgICAgICByZXR1cm4gU1BSVElFX0RFRi5BTklNQVRJT05bYW5pbWF0aW9uLmFuaW1hdGlvblR5cGVdW2FuaW1hdGlvbi5zcHJpdGVQb3NpdGlvbl07XHJcbiAgICAgICAgY2FzZSBcIkJMT0NLXCIgLyogQkxPQ0sgKi86XHJcbiAgICAgICAgICAgIHZhciBibG9jayA9IG9iamVjdDtcclxuICAgICAgICAgICAgcmV0dXJuIFNQUlRJRV9ERUYuQkxPQ0tbYmxvY2suYmxvY2tUeXBlXVtibG9jay5zcHJpdGVQb3NpdGlvbl07XHJcbiAgICAgICAgY2FzZSBcIklURU1cIiAvKiBJVEVNICovOlxyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IG9iamVjdDtcclxuICAgICAgICAgICAgcmV0dXJuIFNQUlRJRV9ERUYuSVRFTVtpdGVtLml0ZW1UeXBlXTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3lzdGVtU3ByaXRlKHNwcml0ZVR5cGUsIG51bWJlcikge1xyXG4gICAgaWYgKG51bWJlciA9PT0gdm9pZCAwKSB7IG51bWJlciA9IDA7IH1cclxuICAgIHN3aXRjaCAoc3ByaXRlVHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCJOVUxMXCIgLyogTlVMTCAqLzpcclxuICAgICAgICBjYXNlIFwiVEFOS19JQ09OXCIgLyogVEFOS19JQ09OICovOlxyXG4gICAgICAgIGNhc2UgXCJTVEFHRVwiIC8qIFNUQUdFICovOlxyXG4gICAgICAgIGNhc2UgXCJGUkFNRVwiIC8qIEZSQU1FICovOlxyXG4gICAgICAgICAgICByZXR1cm4gU1BSVElFX0RFRi5TWVNURU1bc3ByaXRlVHlwZV07XHJcbiAgICAgICAgY2FzZSBcIk5VTUJFUlwiIC8qIE5VTUJFUiAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIFNQUlRJRV9ERUYuU1lTVEVNLk5VTUJFUltudW1iZXJdO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTcHJpdGVTaXplKG9iamVjdCkge1xyXG4gICAgcmV0dXJuIGdldFNwcml0ZURhdGEob2JqZWN0KS5zaXplO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRPYmplY3RTaXplKHR5cGUsIGRpcmVjdGlvbikge1xyXG4gICAgaWYgKGRpcmVjdGlvbiA9PSBudWxsKSB7XHJcbiAgICAgICAgZGlyZWN0aW9uID0gRURpcmVjdGlvbi51cDtcclxuICAgIH1cclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCJCTE9DS1wiIC8qIEJMT0NLICovOlxyXG4gICAgICAgICAgICByZXR1cm4gU1BSVElFX0RFRi5CTE9DSy5CUklDS1swXS5zaXplO1xyXG4gICAgICAgIGNhc2UgXCJUQU5LXCIgLyogVEFOSyAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIFNQUlRJRV9ERUYuVEFOSy5ZRUxMT1dbMF1bZGlyZWN0aW9uXVswXS5zaXplO1xyXG4gICAgICAgIGNhc2UgXCJCVUxMRVRcIiAvKiBCVUxMRVQgKi86XHJcbiAgICAgICAgICAgIHJldHVybiBTUFJUSUVfREVGLkJVTExFVFtkaXJlY3Rpb25dLnNpemU7XHJcbiAgICAgICAgY2FzZSBcIklURU1cIiAvKiBJVEVNICovOlxyXG4gICAgICAgICAgICByZXR1cm4gU1BSVElFX0RFRi5JVEVNLkJPTUIuc2l6ZTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QW5pbWF0aW9uU2l6ZSh0eXBlLCBmcmFtZSkge1xyXG4gICAgcmV0dXJuIFNQUlRJRV9ERUYuQU5JTUFUSU9OW3R5cGVdW2ZyYW1lXS5zaXplO1xyXG59XHJcbiIsIjtcclxudmFyIFNQUlRJRV9ERUYgPSB7XHJcbiAgICBUQU5LOiB7XHJcbiAgICAgICAgWUVMTE9XOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAwLCB5OiAwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyLCB5OiAwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA2NCwgeTogMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA5NiwgeTogMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTI4LCB5OiAwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE2MCwgeTogMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE5MiwgeTogMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyMjQsIHk6IDAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMCwgeTogMzIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIsIHk6IDMyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA2NCwgeTogMzIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogOTYsIHk6IDMyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxMjgsIHk6IDMyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE2MCwgeTogMzIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxOTIsIHk6IDMyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDIyNCwgeTogMzIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMCwgeTogNjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIsIHk6IDY0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA2NCwgeTogNjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogOTYsIHk6IDY0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxMjgsIHk6IDY0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE2MCwgeTogNjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxOTIsIHk6IDY0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDIyNCwgeTogNjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMCwgeTogOTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIsIHk6IDk2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA2NCwgeTogOTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogOTYsIHk6IDk2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxMjgsIHk6IDk2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE2MCwgeTogOTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxOTIsIHk6IDk2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDIyNCwgeTogOTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBHUkVFTjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMCwgeTogMjU2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyLCB5OiAyNTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDY0LCB5OiAyNTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogOTYsIHk6IDI1NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTI4LCB5OiAyNTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTYwLCB5OiAyNTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxOTIsIHk6IDI1NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyMjQsIHk6IDI1NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAwLCB5OiAyODggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIsIHk6IDI4OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNjQsIHk6IDI4OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA5NiwgeTogMjg4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxMjgsIHk6IDI4OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxNjAsIHk6IDI4OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE5MiwgeTogMjg4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDIyNCwgeTogMjg4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDAsIHk6IDMyMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMiwgeTogMzIwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA2NCwgeTogMzIwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDk2LCB5OiAzMjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDEyOCwgeTogMzIwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE2MCwgeTogMzIwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTkyLCB5OiAzMjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjI0LCB5OiAzMjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMCwgeTogMzUyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyLCB5OiAzNTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDY0LCB5OiAzNTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogOTYsIHk6IDM1MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTI4LCB5OiAzNTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTYwLCB5OiAzNTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxOTIsIHk6IDM1MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyMjQsIHk6IDM1MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFdISVRFOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyNTYsIHk6IDAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjg4LCB5OiAwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMjAsIHk6IDAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzUyLCB5OiAwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzODQsIHk6IDAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDE2LCB5OiAwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDQ4LCB5OiAwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ4MCwgeTogMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyNTYsIHk6IDMyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI4OCwgeTogMzIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyMCwgeTogMzIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzUyLCB5OiAzMiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzg0LCB5OiAzMiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0MTYsIHk6IDMyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDQ4LCB5OiAzMiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0ODAsIHk6IDMyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI1NiwgeTogNjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjg4LCB5OiA2NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIwLCB5OiA2NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzNTIsIHk6IDY0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzODQsIHk6IDY0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQxNiwgeTogNjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0NDgsIHk6IDY0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ4MCwgeTogNjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjU2LCB5OiA5NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyODgsIHk6IDk2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMjAsIHk6IDk2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM1MiwgeTogOTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM4NCwgeTogOTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDE2LCB5OiA5NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ0OCwgeTogOTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDgwLCB5OiA5NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIE1BR0VOVEE6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI1NiwgeTogMjU2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI4OCwgeTogMjU2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMjAsIHk6IDI1NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzNTIsIHk6IDI1NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzg0LCB5OiAyNTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDE2LCB5OiAyNTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0NDgsIHk6IDI1NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0ODAsIHk6IDI1NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyNTYsIHk6IDI4OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyODgsIHk6IDI4OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIwLCB5OiAyODggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzUyLCB5OiAyODggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM4NCwgeTogMjg4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQxNiwgeTogMjg4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDQ4LCB5OiAyODggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDgwLCB5OiAyODggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjU2LCB5OiAzMjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjg4LCB5OiAzMjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyMCwgeTogMzIwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM1MiwgeTogMzIwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzODQsIHk6IDMyMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0MTYsIHk6IDMyMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ0OCwgeTogMzIwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ4MCwgeTogMzIwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI1NiwgeTogMzUyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI4OCwgeTogMzUyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMjAsIHk6IDM1MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzNTIsIHk6IDM1MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzg0LCB5OiAzNTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDE2LCB5OiAzNTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0NDgsIHk6IDM1MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0ODAsIHk6IDM1MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIEVORU1ZOiB7XHJcbiAgICAgICAgWUVMTE9XOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAwLCB5OiAxMjggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIsIHk6IDEyOCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNjQsIHk6IDEyOCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA5NiwgeTogMTI4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxMjgsIHk6IDEyOCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxNjAsIHk6IDEyOCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE5MiwgeTogMTI4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDIyNCwgeTogMTI4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDAsIHk6IDE2MCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMiwgeTogMTYwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA2NCwgeTogMTYwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDk2LCB5OiAxNjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDEyOCwgeTogMTYwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE2MCwgeTogMTYwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTkyLCB5OiAxNjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjI0LCB5OiAxNjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMCwgeTogMTkyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyLCB5OiAxOTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDY0LCB5OiAxOTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogOTYsIHk6IDE5MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTI4LCB5OiAxOTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTYwLCB5OiAxOTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxOTIsIHk6IDE5MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyMjQsIHk6IDE5MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAwLCB5OiAyMjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIsIHk6IDIyNCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNjQsIHk6IDIyNCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA5NiwgeTogMjI0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxMjgsIHk6IDIyNCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxNjAsIHk6IDIyNCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE5MiwgeTogMjI0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDIyNCwgeTogMjI0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgR1JFRU46IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDAsIHk6IDM4NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMiwgeTogMzg0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA2NCwgeTogMzg0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDk2LCB5OiAzODQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDEyOCwgeTogMzg0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE2MCwgeTogMzg0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTkyLCB5OiAzODQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjI0LCB5OiAzODQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMCwgeTogNDE2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyLCB5OiA0MTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDY0LCB5OiA0MTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogOTYsIHk6IDQxNiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTI4LCB5OiA0MTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTYwLCB5OiA0MTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxOTIsIHk6IDQxNiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyMjQsIHk6IDQxNiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAwLCB5OiA0NDggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIsIHk6IDQ0OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNjQsIHk6IDQ0OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA5NiwgeTogNDQ4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxMjgsIHk6IDQ0OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxNjAsIHk6IDQ0OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE5MiwgeTogNDQ4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDIyNCwgeTogNDQ4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDAsIHk6IDQ4MCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMiwgeTogNDgwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA2NCwgeTogNDgwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDk2LCB5OiA0ODAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDEyOCwgeTogNDgwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE2MCwgeTogNDgwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTkyLCB5OiA0ODAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjI0LCB5OiA0ODAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBXSElURTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjU2LCB5OiAxMjggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjg4LCB5OiAxMjggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyMCwgeTogMTI4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM1MiwgeTogMTI4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzODQsIHk6IDEyOCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0MTYsIHk6IDEyOCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ0OCwgeTogMTI4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ4MCwgeTogMTI4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI1NiwgeTogMTYwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI4OCwgeTogMTYwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMjAsIHk6IDE2MCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzNTIsIHk6IDE2MCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzg0LCB5OiAxNjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDE2LCB5OiAxNjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0NDgsIHk6IDE2MCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0ODAsIHk6IDE2MCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyNTYsIHk6IDE5MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyODgsIHk6IDE5MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIwLCB5OiAxOTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzUyLCB5OiAxOTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM4NCwgeTogMTkyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQxNiwgeTogMTkyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDQ4LCB5OiAxOTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDgwLCB5OiAxOTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjU2LCB5OiAyMjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjg4LCB5OiAyMjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyMCwgeTogMjI0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM1MiwgeTogMjI0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzODQsIHk6IDIyNCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0MTYsIHk6IDIyNCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ0OCwgeTogMjI0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ4MCwgeTogMjI0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgTUFHRU5UQTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjU2LCB5OiAzODQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjg4LCB5OiAzODQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyMCwgeTogMzg0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM1MiwgeTogMzg0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzODQsIHk6IDM4NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0MTYsIHk6IDM4NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ0OCwgeTogMzg0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ4MCwgeTogMzg0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI1NiwgeTogNDE2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI4OCwgeTogNDE2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMjAsIHk6IDQxNiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzNTIsIHk6IDQxNiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzg0LCB5OiA0MTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDE2LCB5OiA0MTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0NDgsIHk6IDQxNiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0ODAsIHk6IDQxNiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyNTYsIHk6IDQ0OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyODgsIHk6IDQ0OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIwLCB5OiA0NDggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzUyLCB5OiA0NDggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM4NCwgeTogNDQ4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQxNiwgeTogNDQ4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDQ4LCB5OiA0NDggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDgwLCB5OiA0NDggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjU2LCB5OiA0ODAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjg4LCB5OiA0ODAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyMCwgeTogNDgwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM1MiwgeTogNDgwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzODQsIHk6IDQ4MCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0MTYsIHk6IDQ4MCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ0OCwgeTogNDgwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ4MCwgeTogNDgwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAgQlVMTEVUOiB7XHJcbiAgICAgICAgdXA6IHsgcG9zaXRpb246IHsgeDogNjQ2LCB5OiAyMDQgfSwgc2l6ZTogeyB3aWR0aDogNiwgaGVpZ2h0OiA4IH0gfSxcclxuICAgICAgICBsZWZ0OiB7IHBvc2l0aW9uOiB7IHg6IDY2MCwgeTogMjA0IH0sIHNpemU6IHsgd2lkdGg6IDgsIGhlaWdodDogNiB9IH0sXHJcbiAgICAgICAgZG93bjogeyBwb3NpdGlvbjogeyB4OiA2NzgsIHk6IDIwNCB9LCBzaXplOiB7IHdpZHRoOiA2LCBoZWlnaHQ6IDggfSB9LFxyXG4gICAgICAgIHJpZ2h0OiB7IHBvc2l0aW9uOiB7IHg6IDY5MiwgeTogMjA0IH0sIHNpemU6IHsgd2lkdGg6IDgsIGhlaWdodDogNiB9IH1cclxuICAgIH0sXHJcbiAgICBCTE9DSzoge1xyXG4gICAgICAgIEJSSUNLOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDUxMiwgeTogMCB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBJUk9OOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDUxMiwgeTogMzIgfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgV0FURVI6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNTEyLCB5OiA5NiB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA1NDQsIHk6IDk2IH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIEJVU0g6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNTQ0LCB5OiA2NCB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBFQUdMRTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA2MDgsIHk6IDY0IH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDY0MCwgeTogNjQgfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICBBTklNQVRJT046IHtcclxuICAgICAgICBFWFBMT1NJT05fU01BTEw6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNTE4LCB5OiAyNjAgfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDIyLCBoZWlnaHQ6IDIyIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNTQ0LCB5OiAyNTggfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDMwLCBoZWlnaHQ6IDI4IH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNTc2LCB5OiAyNTYgfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgRVhQTE9TSU9OX0xBUkdFOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDYxMCwgeTogMjU4IH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiA1OCwgaGVpZ2h0OiA1OCB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDY2OCwgeTogMjU2IH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiA2OCwgaGVpZ2h0OiA2NCB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIElOVklOQ0lCTEU6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNTEyLCB5OiAyODggfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNTQ0LCB5OiAyODggfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIFNQQVdOOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDUxOCwgeTogMTk4IH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAxOCwgaGVpZ2h0OiAxOCB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDU0OCwgeTogMTk2IH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAyMiwgaGVpZ2h0OiAyMiB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDU3OCwgeTogMTk0IH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAyNiwgaGVpZ2h0OiAyNiB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDYwOCwgeTogMTkyIH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAzMCwgaGVpZ2h0OiAzMCB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBTQ09SRV8xMDA6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNTgwLCB5OiAzMjggfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDI2LCBoZWlnaHQ6IDE0IH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIFNDT1JFXzIwMDogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA2MTAsIHk6IDMyOCB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMjgsIGhlaWdodDogMTQgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgU0NPUkVfMzAwOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDY0MiwgeTogMzI4IH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAyOCwgaGVpZ2h0OiAxNCB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBTQ09SRV80MDA6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNjc0LCB5OiAzMjggfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDI4LCBoZWlnaHQ6IDE0IH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIFNDT1JFXzUwMDogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA3MDYsIHk6IDMyOCB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMjgsIGhlaWdodDogMTQgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgR0FNRU9WRVI6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNTc4LCB5OiAzNjggfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDYyLCBoZWlnaHQ6IDMwIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIFBBVVNFOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDU3OCwgeTogMzUyIH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiA3OCwgaGVpZ2h0OiAxNCB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFRJVExFOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDAsIHk6IDAgfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDUxMiwgaGVpZ2h0OiA0ODAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBDVVJTT1I6IFtcclxuICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxOTIsIHk6IDAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDIyNCwgeTogMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBDVVJUQUlOOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDAsIHk6IDAgfSwgc2l6ZTogeyB3aWR0aDogMCwgaGVpZ2h0OiAwIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICBJVEVNOiB7XHJcbiAgICAgICAgSEVMTUVUOiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDUxMiwgeTogMjI0IH0sXHJcbiAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMwIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFdBVENIOiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDU0NCwgeTogMjI0IH0sXHJcbiAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMwIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFNIT1ZFTDoge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA1NzYsIHk6IDIyNCB9LFxyXG4gICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMCB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBTVEFSOiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDYwOCwgeTogMjI0IH0sXHJcbiAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMwIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIEJPTUI6IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNjQwLCB5OiAyMjQgfSxcclxuICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgVEFOSzoge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA2NzIsIHk6IDIyNCB9LFxyXG4gICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMCB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBQSVNUT0w6IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNzA0LCB5OiAyMjQgfSxcclxuICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzAgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgU1lTVEVNOiB7XHJcbiAgICAgICAgTlVMTDoge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAwLCB5OiAwIH0sXHJcbiAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDAsIGhlaWdodDogMCB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBUQU5LX0lDT046IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNjQwLCB5OiAzODQgfSxcclxuICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMTYsIGhlaWdodDogMTYgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgU1RBR0U6IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNjU4LCB5OiAzNTEgfSxcclxuICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogNzgsIGhlaWdodDogMTYgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgTlVNQkVSOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDY1NywgeTogMzY3IH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAxNiwgaGVpZ2h0OiAxNiB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDY3NCwgeTogMzY3IH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAxNiwgaGVpZ2h0OiAxNiB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDY4OSwgeTogMzY3IH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAxNiwgaGVpZ2h0OiAxNiB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDcwNSwgeTogMzY3IH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAxNiwgaGVpZ2h0OiAxNiB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDcyMSwgeTogMzY3IH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAxNiwgaGVpZ2h0OiAxNiB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDY1NywgeTogMzgzIH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAxNiwgaGVpZ2h0OiAxNiB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDY3NCwgeTogMzgzIH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAxNiwgaGVpZ2h0OiAxNiB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDY4OSwgeTogMzgzIH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAxNiwgaGVpZ2h0OiAxNiB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDcwNSwgeTogMzgzIH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAxNiwgaGVpZ2h0OiAxNiB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDcyMSwgeTogMzgzIH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAxNiwgaGVpZ2h0OiAxNiB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIEZSQU1FOiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDczNiwgeTogMCB9LFxyXG4gICAgICAgICAgICBzaXplOiB7IHdpZHRoOiA2NCwgaGVpZ2h0OiA0ODAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFNQUlRJRV9ERUY7XHJcbiIsImV4cG9ydCBkZWZhdWx0IFwiLi4vZGlzdC9qcy9zcHJpdGVfbWFpbi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi4uL2Rpc3QvanMvc3ByaXRlX3RpdGxlLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiLi4vZGlzdC9qcy9QaXhlbEVtdWxhdG9yLXhxMDgudHRmXCI7IiwiaW1wb3J0IHsgZ2V0U3ByaXRlRGF0YSB9IGZyb20gXCIuLi9SZW5kZXIvU3ByaXRlL1Nwcml0ZURhdGFcIjtcclxuLyoqXHJcbiogVGVzdHMgdHdvIG9iamVjdHMgYXJlIGNvbGxpc2lvbnMgKHJlY3RhbmdsZSBib3VuZGluZyBib3ggY29sbGlzaW9uIHRlc3QpXHJcbiogQHBhcmFtIG9iamVjdDEgZmlyc3Qgb2JqZWN0XHJcbiogQHBhcmFtIHNwcml0ZTEgZmlyc3Qgb2JqZWN0J3Mgc3ByaXRlIGRhdGEgZm9yIHNpemVcclxuKiBAcGFyYW0gb2JqZWN0MiBzZWNvbmQgb2JqZWN0XHJcbiogQHBhcmFtIHNwcml0ZTIgc2Vjb25kIG9iamVjdCdzIHNwcml0ZSBkYXRhIGZvciBzaXplXHJcbiovXHJcbmV4cG9ydCBmdW5jdGlvbiBPYmplY3RDb2xsaXNpb25UZXN0KG9iamVjdDEsIG9iamVjdDIpIHtcclxuICAgIHZhciBzaXplMSA9IGdldFNwcml0ZURhdGEob2JqZWN0MSkuc2l6ZTtcclxuICAgIHZhciBzaXplMiA9IGdldFNwcml0ZURhdGEob2JqZWN0Mikuc2l6ZTtcclxuICAgIHJldHVybiBSZWN0YW5nbGVDb2xsaXNpb25UZXN0KG9iamVjdDEucG9zaXRpb24sIHNpemUxLCBvYmplY3QyLnBvc2l0aW9uLCBzaXplMik7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIEJsb2NrQ29sbGlzaW9uVGVzdChibG9jaywgb2JqZWN0KSB7XHJcbiAgICB2YXIgY2VsbHMgPSBbXTtcclxuICAgIHZhciBibG9ja1NpemUgPSBnZXRTcHJpdGVEYXRhKGJsb2NrKS5zaXplO1xyXG4gICAgdmFyIG9iamVjdFNpemUgPSBnZXRTcHJpdGVEYXRhKG9iamVjdCkuc2l6ZTtcclxuICAgIHZhciBjZWxsUG9zaXRpb247XHJcbiAgICB2YXIgY2VsbFNpemUgPSB7XHJcbiAgICAgICAgd2lkdGg6IGJsb2NrU2l6ZS53aWR0aCAvIDQsXHJcbiAgICAgICAgaGVpZ2h0OiBibG9ja1NpemUuaGVpZ2h0IC8gNFxyXG4gICAgfTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmxvY2suYmxvY2tTdGF0ZTR4NC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgYmxvY2suYmxvY2tTdGF0ZTR4NFtpXS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBpZiAoYmxvY2suYmxvY2tTdGF0ZTR4NFtpXVtqXSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2VsbFBvc2l0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgeDogYmxvY2sucG9zaXRpb24ueCArIChibG9ja1NpemUud2lkdGggLyA0KSAqIGosXHJcbiAgICAgICAgICAgICAgICB5OiBibG9jay5wb3NpdGlvbi55ICsgKGJsb2NrU2l6ZS5oZWlnaHQgLyA0KSAqIGlcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaWYgKFJlY3RhbmdsZUNvbGxpc2lvblRlc3QoY2VsbFBvc2l0aW9uLCBjZWxsU2l6ZSwgb2JqZWN0LnBvc2l0aW9uLCBvYmplY3RTaXplKSkge1xyXG4gICAgICAgICAgICAgICAgY2VsbHMucHVzaChjZWxsUG9zaXRpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNlbGxzO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBSZWN0YW5nbGVDb2xsaXNpb25UZXN0KHBvczEsIHNpemUxLCBwb3MyLCBzaXplMikge1xyXG4gICAgaWYgKHBvczEueCArIHNpemUxLndpZHRoID4gcG9zMi54ICYmXHJcbiAgICAgICAgcG9zMS54IDwgcG9zMi54ICsgc2l6ZTIud2lkdGggJiZcclxuICAgICAgICBwb3MxLnkgKyBzaXplMS5oZWlnaHQgPiBwb3MyLnkgJiZcclxuICAgICAgICBwb3MxLnkgPCBwb3MyLnkgKyBzaXplMi5oZWlnaHQpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG4iLCJ2YXIgRURpcmVjdGlvbjtcclxuKGZ1bmN0aW9uIChFRGlyZWN0aW9uKSB7XHJcbiAgICBFRGlyZWN0aW9uW1widXBcIl0gPSBcInVwXCI7XHJcbiAgICBFRGlyZWN0aW9uW1wicmlnaHRcIl0gPSBcInJpZ2h0XCI7XHJcbiAgICBFRGlyZWN0aW9uW1wiZG93blwiXSA9IFwiZG93blwiO1xyXG4gICAgRURpcmVjdGlvbltcImxlZnRcIl0gPSBcImxlZnRcIjtcclxufSkoRURpcmVjdGlvbiB8fCAoRURpcmVjdGlvbiA9IHt9KSk7XHJcbjtcclxuZXhwb3J0IGZ1bmN0aW9uIEVEaXJlY3Rpb25Ub0VLZXlzKGRpcmVjdGlvbikge1xyXG4gICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcclxuICAgICAgICBjYXNlIEVEaXJlY3Rpb24udXA6XHJcbiAgICAgICAgICAgIHJldHVybiBcIkFycm93VXBcIiAvKiBhcnJvd191cCAqLztcclxuICAgICAgICBjYXNlIEVEaXJlY3Rpb24ucmlnaHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBcIkFycm93UmlnaHRcIiAvKiBhcnJvd19yaWdodCAqLztcclxuICAgICAgICBjYXNlIEVEaXJlY3Rpb24uZG93bjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiQXJyb3dEb3duXCIgLyogYXJyb3dfZG93biAqLztcclxuICAgICAgICBjYXNlIEVEaXJlY3Rpb24ubGVmdDpcclxuICAgICAgICAgICAgcmV0dXJuIFwiQXJyb3dMZWZ0XCIgLyogYXJyb3dfbGVmdCAqLztcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBFRGlyZWN0aW9uO1xyXG4iLCJ2YXIgX192YWx1ZXMgPSAodGhpcyAmJiB0aGlzLl9fdmFsdWVzKSB8fCBmdW5jdGlvbihvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufTtcclxudmFyIF9fcmVhZCA9ICh0aGlzICYmIHRoaXMuX19yZWFkKSB8fCBmdW5jdGlvbiAobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59O1xyXG52YXIgX19zcHJlYWQgPSAodGhpcyAmJiB0aGlzLl9fc3ByZWFkKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59O1xyXG5leHBvcnQgZnVuY3Rpb24gZGVlcENsb25lKG9iaikge1xyXG4gICAgdmFyIGVfMSwgX2E7XHJcbiAgICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH1cclxuICAgIHZhciByZXN1bHQgPSBBcnJheS5pc0FycmF5KG9iaikgPyBbXSA6IHt9O1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBmb3IgKHZhciBfYiA9IF9fdmFsdWVzKE9iamVjdC5rZXlzKG9iaikpLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XHJcbiAgICAgICAgICAgIHZhciBrZXkgPSBfYy52YWx1ZTtcclxuICAgICAgICAgICAgcmVzdWx0W2tleV0gPSBkZWVwQ2xvbmUob2JqW2tleV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoX2MgJiYgIV9jLmRvbmUgJiYgKF9hID0gX2IucmV0dXJuKSkgX2EuY2FsbChfYik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxudmFyIEd1aWQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBHdWlkKCkge1xyXG4gICAgfVxyXG4gICAgR3VpZC5uZXdHdWlkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAneHh4eHh4eHgteHh4eC14eHh4LXh4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uIChjKSB7XHJcbiAgICAgICAgICAgIHZhciByID0gTWF0aC5yYW5kb20oKSAqIDE2IHwgMCwgdiA9IGMgPT0gJ3gnID8gciA6IChyICYgMHgzIHwgMHg4KTtcclxuICAgICAgICAgICAgcmV0dXJuIHYudG9TdHJpbmcoMTYpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBHdWlkO1xyXG59KCkpO1xyXG5leHBvcnQgeyBHdWlkIH07XHJcbi8qKlxyXG4gKiBmaW5kIG1heGltdW0gbnVtYmVyIGZyb20gbnVtYmVyIGFycmF5XHJcbiAqIEBwYXJhbSBudW1iZXJzIGdpdmVuIG51bWJlcnNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXgobnVtYmVycykge1xyXG4gICAgcmV0dXJuIE1hdGgubWF4LmFwcGx5KG51bGwsIG51bWJlcnMpO1xyXG59XHJcbi8qKlxyXG4gKiBmaW5kIG1pbmltdW0gbnVtYmVyIGZyb20gbnVtYmVyIGFycmF5XHJcbiAqIEBwYXJhbSBudW1iZXJzIGdpdmVuIG51bWJlcnNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtaW4obnVtYmVycykge1xyXG4gICAgcmV0dXJuIE1hdGgubWluLmFwcGx5KG51bGwsIG51bWJlcnMpO1xyXG59XHJcbi8qKlxyXG4gKiBnZXQgYSByYW5kb20gdmFsdWUgYmV0d2VlbiByYW5nZVxyXG4gKiBAcGFyYW0gbWluIHJhbmdlX21pblxyXG4gKiBAcGFyYW0gbWF4IHJhbmdlX21heFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbVJhbmdlKG1pbiwgbWF4KSB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVEdXBsaWNhdGUoYXJyYXkpIHtcclxuICAgIHZhciBzZXQgPSBuZXcgU2V0KGFycmF5KTtcclxuICAgIHJldHVybiBfX3NwcmVhZChzZXQpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21FbnVtKGFuRW51bSkge1xyXG4gICAgdmFyIGVudW1WYWx1ZXMgPSBPYmplY3QudmFsdWVzKGFuRW51bSk7XHJcbiAgICB2YXIgcmFuZG9tSW5kZXggPSBnZXRSYW5kb21SYW5nZSgwLCBlbnVtVmFsdWVzLmxlbmd0aCAtIDEpO1xyXG4gICAgdmFyIHJhbmRvbUVudW1WYWx1ZSA9IGVudW1WYWx1ZXNbcmFuZG9tSW5kZXhdO1xyXG4gICAgcmV0dXJuIHJhbmRvbUVudW1WYWx1ZTtcclxufVxyXG4iLCJpbXBvcnQgR2FtZSBmcm9tIFwiLi9HYW1lL0dhbWVcIjtcclxuaW1wb3J0IFJlbmRlcmVyIGZyb20gXCIuL1JlbmRlci9SZW5kZXJlclwiO1xyXG52YXIgc3ByaXRlTWFpbkltYWdlID0gcmVxdWlyZSgnLi9SZW5kZXIvU3ByaXRlL3Nwcml0ZV9tYWluLnBuZycpO1xyXG52YXIgc3ByaXRlVEl0bGVJbWFnZSA9IHJlcXVpcmUoJy4vUmVuZGVyL1Nwcml0ZS9zcHJpdGVfdGl0bGUucG5nJyk7XHJcbnZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcclxuLy8gaW5pdCBnYW1lXHJcbnZhciBnYW1lID0gbmV3IEdhbWUoY2FudmFzLCAnLi9qcy9zcHJpdGVfbWFpbi5wbmcnLCAnLi9qcy9zcHJpdGVfdGl0bGUucG5nJyk7XHJcbi8vI3JlZ2lvbiBERUJVR1xyXG52YXIgZGVidWdfYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWJ1Z1wiKTtcclxudmFyIG1haW5UYW5rX2xldmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluVGFua19sZXZlbFwiKTtcclxudmFyIG1haW5UYW5rX2NvbG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluVGFua19jb2xvclwiKTtcclxudmFyIG1haW5UYW5rX2ludmluY2libGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5UYW5rX2ludmluY2libGVcIik7XHJcbnZhciBtYWluVGFua19oaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5UYW5rX2hpdFwiKTtcclxudmFyIHRyYWNrcyA9IHtcclxuICAgIGJsb2NrOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpX2Jsb2NrXCIpLFxyXG4gICAgdGFuazogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaV90YW5rXCIpLFxyXG4gICAgYnVsbGV0OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpX2J1bGxldFwiKSxcclxuICAgIGFuaW1hdGlvbjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaV9hbmltYXRpb25cIiksXHJcbn07XHJcbnZhciBvYmplY3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvYmplY3RzXCIpO1xyXG52YXIgZ2FtZWRhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVkYXRhXCIpO1xyXG5kZWJ1Z19idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXYpIHtcclxuICAgIGlmIChkZWJ1Z19idG4uZ2V0QXR0cmlidXRlKCd2YWx1ZScpID09ICd0cnVlJykge1xyXG4gICAgICAgIGdhbWUuZGVidWcgPSBmYWxzZTtcclxuICAgICAgICBkZWJ1Z19idG4uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdmYWxzZScpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZGVidWdfYnRuLmdldEF0dHJpYnV0ZSgndmFsdWUnKSA9PSAnZmFsc2UnKSB7XHJcbiAgICAgICAgZ2FtZS5kZWJ1ZyA9IHRydWU7XHJcbiAgICAgICAgZGVidWdfYnRuLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAndHJ1ZScpO1xyXG4gICAgfVxyXG4gICAgZGVidWdfYnRuLmlubmVyVGV4dCA9IFwiZGVidWcgPSBcIiArIGRlYnVnX2J0bi5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7XHJcbn0pO1xyXG5tYWluVGFua19sZXZlbC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHsgdXBkYXRlVGFuaygpOyB9KTtcclxubWFpblRhbmtfY29sb3IuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7IHVwZGF0ZVRhbmsoKTsgfSk7XHJcbm1haW5UYW5rX2ludmluY2libGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHsgZ2FtZS5tYWluVGFuay5pbnZpbmNpYmxlKCk7IH0pO1xyXG5tYWluVGFua19oaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHsgZ2FtZS5tYWluVGFuay5kZXN0cm95KCk7IH0pO1xyXG52YXIgb2JqZWN0RmluZGVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIF9hLCBfYjtcclxuICAgIG9iamVjdHMuaW5uZXJIVE1MID1cclxuICAgICAgICBcIlxcblxcdDx0cj5cXG5cXHRcXHQ8dGQ+ekluZGV4PC90ZD5cXG5cXHRcXHQ8dGQ+aWQ8L3RkPlxcblxcdFxcdDx0ZD50eXBlPC90ZD5cXG5cXHRcXHQ8dGQ+cG9zaXRpb248L3RkPlxcblxcdDwvdHI+XFxuXFx0XCI7XHJcbiAgICBnYW1lZGF0YS5pbm5lckhUTUwgPVxyXG4gICAgICAgIFwiXFxuXFx0PHRyPlxcblxcdFxcdDx0ZD50eXBlPC90ZD5cXG5cXHRcXHQ8dGQ+dmFsdWU8L3RkPlxcblxcdDwvdHI+XFxuXFx0XCI7XHJcbiAgICBpZiAoIWdhbWUuZGVidWcpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoZ2FtZS5tYWluVGFuaykge1xyXG4gICAgICAgIG1haW5UYW5rX2NvbG9yLnZhbHVlID0gZ2FtZS5tYWluVGFuay50YW5rQ29sb3IudG9TdHJpbmcoKTtcclxuICAgICAgICBtYWluVGFua19sZXZlbC52YWx1ZSA9IGdhbWUubWFpblRhbmsudGFua0xldmVsLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoZ2FtZS5nYW1lRGF0YSkge1xyXG4gICAgICAgIGdhbWVkYXRhLmlubmVySFRNTCA9IGdhbWVkYXRhLmlubmVySFRNTCArXHJcbiAgICAgICAgICAgIChcIlxcblxcdFxcdDx0cj5cXG5cXHRcXHRcXHQ8dGQ+Z2FtZW92ZXI8L3RkPlxcblxcdFxcdFxcdDx0ZD5cIiArIGdhbWUuZ2FtZURhdGEuZ2FtZU92ZXIgKyBcIjwvdGQ+XFxuXFx0XFx0PC90cj5cXG5cXHRcXHQ8dHI+XFxuXFx0XFx0XFx0PHRkPmxldmVsSWQ8L3RkPlxcblxcdFxcdFxcdDx0ZD5cIiArICgoX2EgPSBnYW1lLmdhbWVEYXRhLmxldmVsRGF0YSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmxldmVsSWQpICsgXCI8L3RkPlxcblxcdFxcdDwvdHI+XFxuXFx0XFx0PHRyPlxcblxcdFxcdFxcdDx0ZD5wMSBzY29yZTwvdGQ+XFxuXFx0XFx0XFx0PHRkPlwiICsgKChfYiA9IGdhbWUuZ2FtZURhdGEucGxheWVyRGF0YVswXSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnNjb3JlKSArIFwiPC90ZD5cXG5cXHRcXHQ8L3RyPlxcblxcdFxcdFwiKTtcclxuICAgIH1cclxuICAgIGdhbWUub2JqZWN0cy5mb3JFYWNoKGZ1bmN0aW9uIChvYmplY3QpIHtcclxuICAgICAgICBzd2l0Y2ggKG9iamVjdC5vYmplY3RUeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJCTE9DS1wiIC8qIEJMT0NLICovOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRyYWNrcy5ibG9jay5jaGVja2VkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiVEFOS1wiIC8qIFRBTksgKi86XHJcbiAgICAgICAgICAgICAgICBpZiAodHJhY2tzLnRhbmsuY2hlY2tlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkJVTExFVFwiIC8qIEJVTExFVCAqLzpcclxuICAgICAgICAgICAgICAgIGlmICh0cmFja3MuYnVsbGV0LmNoZWNrZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJBTklNQVRJT05cIiAvKiBBTklNQVRJT04gKi86XHJcbiAgICAgICAgICAgICAgICBpZiAodHJhY2tzLmFuaW1hdGlvbi5jaGVja2VkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvYmplY3RzLmlubmVySFRNTCA9IG9iamVjdHMuaW5uZXJIVE1MICtcclxuICAgICAgICAgICAgKFwiXFxuXFx0XFx0PHRyPlxcblxcdFxcdFxcdDx0ZD5cIiArIFJlbmRlcmVyLmdldE9iamVjdFpJbmRleChvYmplY3QpICsgXCI8L3RkPlxcblxcdFxcdFxcdDx0ZD5cIiArIG9iamVjdC5pZCArIFwiPC90ZD5cXG5cXHRcXHRcXHQ8dGQ+XCIgKyBvYmplY3Qub2JqZWN0VHlwZSArIFwiPC90ZD5cXG5cXHRcXHRcXHQ8dGQ+W3g6IFwiICsgb2JqZWN0LnBvc2l0aW9uLnggKyBcIiwgeTogXCIgKyBvYmplY3QucG9zaXRpb24ueSArIFwiXTwvdGQ+XFxuXFx0XFx0PC90cj5cXG5cXHRcXHRcIik7XHJcbiAgICB9KTtcclxufSwgMTAwKTtcclxuZnVuY3Rpb24gdXBkYXRlVGFuaygpIHtcclxuICAgIGdhbWUubWFpblRhbmsudGFua0NvbG9yID0gbWFpblRhbmtfY29sb3IudmFsdWU7XHJcbiAgICBnYW1lLm1haW5UYW5rLnRhbmtMZXZlbCA9IHBhcnNlSW50KG1haW5UYW5rX2xldmVsLnZhbHVlKTtcclxufVxyXG4vLyNlbmRyZWdpb25cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==