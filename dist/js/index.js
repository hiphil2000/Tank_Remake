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
/* harmony import */ var _Object_GameObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Object/GameObject */ "./src/Game/Object/GameObject.ts");
/* harmony import */ var _Object_TankObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Object/TankObject */ "./src/Game/Object/TankObject.ts");
/* harmony import */ var _InputManage_EKeys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InputManage/EKeys */ "./src/Game/InputManage/EKeys.ts");
/* harmony import */ var _Object_AnimationObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Object/AnimationObject */ "./src/Game/Object/AnimationObject.ts");
/* harmony import */ var _Object_EAnimationType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Object/EAnimationType */ "./src/Game/Object/EAnimationType.ts");
/* harmony import */ var _Object_BlockObject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Object/BlockObject */ "./src/Game/Object/BlockObject.ts");







var MAIN_TANK_ID = 'MAIN';
var Game = /** @class */ (function () {
    function Game(screen, spriteSrc, debug) {
        this.debug = debug;
        this._renderer = new _Render_Renderer__WEBPACK_IMPORTED_MODULE_0__["default"](this, screen, spriteSrc);
        this.initializeInputs();
        screen.focus();
        this.newGame(0 /* PVE */, null, []);
        // this.showTitle();
    }
    Object.defineProperty(Game.prototype, "keyState", {
        //#region getter and setter
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
    //#endregion
    //#region public methods
    //#region menu methods
    Game.prototype.showTitle = function () {
    };
    Game.prototype.showMenu = function () {
    };
    //#endregion
    Game.prototype.log = function (msg) {
        if (this.debug) {
            console.log("[" + performance.now() + "] " + msg);
        }
    };
    //#region game object methods
    Game.prototype.insertObject = function (object) {
        if (this._gameData == null || this._gameData.objects == null) {
            return;
        }
        this._gameData.objects.push(object);
        this.sortObject();
    };
    Game.prototype.removeObject = function (object) {
        if (this._gameData == null && this._gameData.objects == null) {
            return;
        }
        var idx = this._gameData.objects.indexOf(object);
        this._gameData.objects.splice(idx, 1);
        this.sortObject();
    };
    Game.prototype.sortObject = function () {
        var _this = this;
        if (this._gameData == null || this._gameData.objects == null) {
            return;
        }
        this._gameData.objects.sort(function (obj1, obj2) {
            var zindex1 = _this.getObjectZIndex(obj1);
            var zindex2 = _this.getObjectZIndex(obj2);
            return zindex1 - zindex2;
        });
    };
    Game.prototype.getObjects = function () {
        var _a;
        if (((_a = this._gameData) === null || _a === void 0 ? void 0 : _a.objects) == undefined) {
            return null;
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
    Game.prototype.collisionTest = function (object) {
        var _this = this;
        var found = [];
        if (this._gameData == null || this._gameData.objects == null) {
            return found;
        }
        var objectSprite = this._renderer.getSpriteData(object);
        this._gameData.objects.forEach(function (item) {
            if (item.objectType === "ANIMATION" /* ANIMATION */) {
                return;
            }
            if (item.objectType === "BLOCK" /* BLOCK */) {
                var blockType = item.blockType;
                if ((object.objectType === "TANK" /* TANK */ || object.objectType === "BULLET" /* BULLET */) && blockType === "BUSH" /* BUSH */) {
                    return;
                }
                if (object.objectType === "BULLET" /* BULLET */ && blockType === "WATER" /* WATER */) {
                    return;
                }
            }
            if (item.objectType === "TANK" /* TANK */) {
                if (object.objectType === "BULLET" /* BULLET */) {
                    if (item.id === object.parentId) {
                        return;
                    }
                }
            }
            if (item.objectType === "BULLET" /* BULLET */) {
                if (object.objectType === "TANK" /* TANK */) {
                    return;
                }
            }
            var spriteData = _this._renderer.getSpriteData(item);
            var test = _this._renderer.rectangleCollisionTest(object, objectSprite, item, spriteData);
            if (item != object && test) {
                found.push(item);
            }
        });
        return found;
    };
    Game.prototype.startAnimation = function (target, animationType, animationValue, callback) {
        var animationPoint;
        if (target instanceof _Object_GameObject__WEBPACK_IMPORTED_MODULE_1__["default"]) {
            var object = target;
            var size = this.getSprite(object).size;
            animationPoint = {
                x: object.position.x + size.width / 2,
                y: object.position.y + size.height / 2
            };
        }
        else {
            animationPoint = target;
        }
        if (animationValue == undefined) {
            animationValue = _Object_EAnimationType__WEBPACK_IMPORTED_MODULE_5__["AnimationDefaults"][animationType];
        }
        var animation = new _Object_AnimationObject__WEBPACK_IMPORTED_MODULE_4__["default"](this, animationType, animationPoint, animationValue.duration, animationValue.frameRate, animationValue.loop, callback);
        this.insertObject(animation);
    };
    //#region renderer porting methods
    /**
     * Test object is visible (Port of Renderer.testVisibility)
     * @param object object for test
     * @param sprite object's sprite data for size
     */
    Game.prototype.testVisibility = function (object, sprite) {
        return this._renderer.testVisibility(object, sprite);
    };
    /**
     * Find sprite data for given object (Port of Renderer.getSprite)
     * @param object found sprite definition
     */
    Game.prototype.getSprite = function (object) {
        return this._renderer.getSpriteData(object);
    };
    /**
     * Calculate and return Z-Index for render (Port of Renderer.getObjectZIndex)
     * @param object sprite for calculate
     */
    Game.prototype.getObjectZIndex = function (object) {
        return this._renderer.getObjectZIndex(object);
    };
    //#endregion
    //#endregion
    Game.prototype.newGame = function (gameType, level, objects) {
        this._gameData = {
            gameType: gameType,
            levelData: level,
            objects: objects
        };
        this.createMainTank(this._renderer.randomPoint({ width: 32, height: 32 }), "up" /* up */, "YELLOW" /* YELLOW */, 0);
        this.insertObject(new _Object_BlockObject__WEBPACK_IMPORTED_MODULE_6__["default"](this, "BRICK" /* BRICK */, { x: 3 * 32, y: 5 * 32 }, {
            bottomLeft: true,
            bottomRight: true,
            topLeft: true,
            topRight: true
        }));
        this.insertObject(new _Object_BlockObject__WEBPACK_IMPORTED_MODULE_6__["default"](this, "IRON" /* IRON */, { x: 3 * 32, y: 6 * 32 }, {
            bottomLeft: true,
            bottomRight: true,
            topLeft: true,
            topRight: true
        }));
        this.insertObject(new _Object_BlockObject__WEBPACK_IMPORTED_MODULE_6__["default"](this, "WATER" /* WATER */, { x: 3 * 32, y: 7 * 32 }, {
            bottomLeft: true,
            bottomRight: true,
            topLeft: true,
            topRight: true
        }));
        this.insertObject(new _Object_BlockObject__WEBPACK_IMPORTED_MODULE_6__["default"](this, "BUSH" /* BUSH */, { x: 3 * 32, y: 8 * 32 }, {
            bottomLeft: true,
            bottomRight: true,
            topLeft: true,
            topRight: true
        }));
    };
    //#endregion
    //#region private methods
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
                        mainTank.direction = Object(_InputManage_EKeys__WEBPACK_IMPORTED_MODULE_3__["EKeysToEDirection"])(ev.code);
                    }
                    _this.resetArrowInput();
                    _this._keyState[ev.code] = true;
                    break;
                case "Space" /* spacebar */:
                    if (mainTank) {
                        mainTank.fire();
                    }
                    _this._keyState[ev.code] = true;
                    break;
                case "Escape" /* esc */:
                    _this._keyState[ev.code] = true;
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
    Game.prototype.createMainTank = function (position, direction, tankColor, tankLevel) {
        if (this.mainTank) {
            this.removeObject(this.mainTank);
        }
        this.insertObject(new _Object_TankObject__WEBPACK_IMPORTED_MODULE_2__["default"](this, position, direction, tankColor, tankLevel, MAIN_TANK_ID));
        this.mainTank.invincible();
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
    function AnimationObject(game, animationType, animationPoint, duration, frameRate, loop, callback) {
        if (loop === void 0) { loop = false; }
        var _this = _super.call(this, game, "ANIMATION" /* ANIMATION */, animationPoint, _Utils_Utils__WEBPACK_IMPORTED_MODULE_1__["Guid"].newGuid()) || this;
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
    AnimationObject.prototype.expire = function () {
        this._game.log("ANIMATION " + this.id + " HAS BEEN EXPIRED. (" + performance.now + ")");
        this.remove();
        if (this._callback) {
            this._callback(this);
        }
    };
    //#endregion
    AnimationObject.prototype.updatePosition = function () {
        var spriteData = this._game.getSprite(this).size;
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
/*! exports provided: BlockState2x2To4x4, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockState2x2To4x4", function() { return BlockState2x2To4x4; });
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameObject */ "./src/Game/Object/GameObject.ts");
/* harmony import */ var _Utils_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utils/Utils */ "./src/Utils/Utils.ts");
/* harmony import */ var _BulletObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BulletObject */ "./src/Game/Object/BulletObject.ts");
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
var BlockObject = /** @class */ (function (_super) {
    __extends(BlockObject, _super);
    function BlockObject(game, blockType, position, blockState2x2) {
        var _this = _super.call(this, game, "BLOCK" /* BLOCK */, position, _Utils_Utils__WEBPACK_IMPORTED_MODULE_1__["Guid"].newGuid()) || this;
        _this.blockType = blockType;
        _this._blockState = BlockState2x2To4x4(blockState2x2);
        return _this;
    }
    BlockObject.prototype.hit = function (eventOrigin) {
        if (!(eventOrigin instanceof _BulletObject__WEBPACK_IMPORTED_MODULE_2__["default"])) {
            return;
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
/* harmony import */ var _AnimationObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnimationObject */ "./src/Game/Object/AnimationObject.ts");
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
    Object.defineProperty(BulletObject.prototype, "parentId", {
        get: function () {
            return this._parent.id;
        },
        enumerable: false,
        configurable: true
    });
    BulletObject.prototype.move = function () {
        var _this = this;
        var changed = this.position;
        Object(_MovingObject__WEBPACK_IMPORTED_MODULE_0__["calculateMove"])(changed, this._direction, this._speed);
        this._game.log("BULLET [" + this.id + "] MOVED -> [x:" + this.position.x + "], y:[" + this.position.y + "]");
        var test_visible = this._game.testVisibility(this, this._game.getSprite(this));
        var test_collision = this._game.collisionTest(this);
        if (test_visible == false || test_collision.length > 0) {
            this._game.log("BULLET [" + this.id + "] EXPLODED.");
            this.explode();
            test_collision.forEach(function (object) {
                object.hit(_this);
            });
        }
    };
    BulletObject.prototype.hit = function () {
        this.explode();
    };
    BulletObject.prototype.explode = function () {
        var animationPosition;
        var size = this._game.getSprite(this).size;
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
        this._game.insertObject(new _AnimationObject__WEBPACK_IMPORTED_MODULE_1__["default"](this._game, "EXPLOSION_SMALL" /* EXPLOSION_SMALL */, this.position, 200, 200 / 4));
        this.remove();
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

/***/ "./src/Game/Object/EAnimationType.ts":
/*!*******************************************!*\
  !*** ./src/Game/Object/EAnimationType.ts ***!
  \*******************************************/
/*! exports provided: AnimationDefaults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationDefaults", function() { return AnimationDefaults; });
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
        duration: 0,
        frameRate: 0,
        loop: false
    },
    SCORE_100: {
        duration: 0,
        frameRate: 0,
        loop: false
    },
    SCORE_200: {
        duration: 0,
        frameRate: 0,
        loop: false
    },
    SCORE_300: {
        duration: 0,
        frameRate: 0,
        loop: false
    },
    SCORE_400: {
        duration: 0,
        frameRate: 0,
        loop: false
    },
    SCORE_500: {
        duration: 0,
        frameRate: 0,
        loop: false
    }
};


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
        this._visible = visible;
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
/* harmony import */ var _BulletObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BulletObject */ "./src/Game/Object/BulletObject.ts");
/* harmony import */ var _Render_Sprite_SpriteDefinition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Render/Sprite/SpriteDefinition */ "./src/Render/Sprite/SpriteDefinition.ts");
/* harmony import */ var _Utils_Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utils/Utils */ "./src/Utils/Utils.ts");
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
        var _this = _super.call(this, game, "TANK" /* TANK */, position, direction, TANK_SPEED, id) || this;
        _this._isInvincible = false;
        _this._tankColor = tankColor;
        _this._tankLevel = tankLevel;
        _this._bullets = [];
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
        var original = Object(_Utils_Utils__WEBPACK_IMPORTED_MODULE_3__["deepClone"])(this.position);
        Object(_MovingObject__WEBPACK_IMPORTED_MODULE_0__["calculateMove"])(this.position, this._direction, this._speed);
        // test movement is valid
        this._game.log("TANK [" + this.id + "] MOVED -> [ x: " + this.position.x + ", y: " + this.position.y + " ]");
        var test_visible = this._game.testVisibility(this, this._game.getSprite(this));
        var test_collision = this._game.collisionTest(this);
        if (!test_visible || test_collision.length > 0) {
            // if not, rollback movement
            this.position = original;
            this._game.log("TANK [" + this.id + "] MOVES -> BLOCKED!! [ x: " + this.position.x + ", y: " + this.position.y + " ]");
        }
        this.nextSpritePosition();
    };
    TankObject.prototype.hit = function () {
        var _this = this;
        if (this._isInvincible) {
            return;
        }
        this._game.startAnimation(this, "EXPLOSION_SMALL" /* EXPLOSION_SMALL */, null, function (animation) {
            _this._game.startAnimation(animation.animationPoint, "EXPLOSION_LARGE" /* EXPLOSION_LARGE */, null, function () {
                _this.remove();
            });
        });
    };
    //#endregion
    //#region public methods
    TankObject.prototype.fire = function () {
        this.createBullet();
    };
    TankObject.prototype.invincible = function () {
        var _this = this;
        this._isInvincible = true;
        this._game.startAnimation(this, "INVINCIBLE" /* INVINCIBLE */, null, function (anim) {
            _this._isInvincible = false;
        });
    };
    TankObject.prototype.createBullet = function () {
        if (this.tankLevel < 2 && this._bullets.length >= 1) {
            return;
        }
        else if (this.tankLevel < 4 && this._bullets.length >= 2) {
            return;
        }
        var position;
        var tankSprite = _Render_Sprite_SpriteDefinition__WEBPACK_IMPORTED_MODULE_2__["default"].TANK[this.tankColor][this.tankLevel][this.direction][this.spritePosition];
        var bulletSprite = _Render_Sprite_SpriteDefinition__WEBPACK_IMPORTED_MODULE_2__["default"].BULLET[this.direction];
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
            bulletSpeed = _BulletObject__WEBPACK_IMPORTED_MODULE_1__["BULLET_SLOW"];
        }
        else if (this.tankLevel < 4) {
            bulletSpeed = _BulletObject__WEBPACK_IMPORTED_MODULE_1__["BULLET_FAST"];
        }
        var bullet = new _BulletObject__WEBPACK_IMPORTED_MODULE_1__["default"](this._game, this, position, this.direction, bulletSpeed, _Utils_Utils__WEBPACK_IMPORTED_MODULE_3__["Guid"].newGuid());
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
    },
    debug: {
        font: {
            size: 12,
            font: 'san-serif'
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
            // main tank moves
            var mainTank_1 = this._game.mainTank;
            if (this._game.isTankMoveReady) {
                mainTank_1.move();
            }
            // other objects
            var objects = this._game.getObjects();
            if (objects) {
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
                            if (animation.animationType === "INVINCIBLE" /* INVINCIBLE */) {
                                var tankSize = _this.getSpriteData(_this._game.mainTank).size;
                                animation.animationPoint = {
                                    x: mainTank_1.position.x + tankSize.width / 2,
                                    y: mainTank_1.position.y + tankSize.height / 2
                                };
                            }
                            animation.nextSpritePosition();
                            break;
                    }
                });
            }
            // start drawing
            // get context
            var ctx = this._canvas.getContext('2d');
            ctx.save();
            // clear screen
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            // draw backgrounds
            this.drawBackground(ctx);
            // draw frame
            this.drawFrame(ctx);
            // draw objects
            this.drawObjects(ctx, this._game.getObjects());
            // draw debug counter
            if (this._game.debug) {
                this.drawDebugCounter(ctx);
            }
        }
    };
    Renderer.prototype.drawBackground = function (ctx) {
        ctx.save();
        ctx.fillStyle = DRAWING_CONST.colors.background;
        ctx.fillRect(DRAWING_CONST.sizes.frame.left, DRAWING_CONST.sizes.frame.top, ctx.canvas.width - (DRAWING_CONST.sizes.frame.left + DRAWING_CONST.sizes.frame.right), ctx.canvas.height - (DRAWING_CONST.sizes.frame.top + DRAWING_CONST.sizes.frame.bottom));
        ctx.restore();
    };
    Renderer.prototype.drawFrame = function (ctx) {
        ctx.save();
        ctx.fillStyle = DRAWING_CONST.colors.background_frame;
        // top
        ctx.fillRect(0, 0, ctx.canvas.width, DRAWING_CONST.sizes.frame.top);
        // left
        ctx.fillRect(0, 0, DRAWING_CONST.sizes.frame.left, ctx.canvas.height);
        // bottom
        ctx.fillRect(0, ctx.canvas.height - DRAWING_CONST.sizes.frame.bottom, ctx.canvas.width, DRAWING_CONST.sizes.frame.bottom);
        // right
        ctx.fillRect(ctx.canvas.width - DRAWING_CONST.sizes.frame.right, 0, DRAWING_CONST.sizes.frame.right, ctx.canvas.height);
        ctx.restore();
    };
    Renderer.prototype.drawObjects = function (ctx, objects) {
        ctx.save();
        for (var i = 0; i < objects.length; i++) {
            var object = objects[i];
            var sprite = this.getSpriteData(object);
            if (sprite != null) {
                ctx.drawImage(this._sprite, sprite.position.x, sprite.position.y, sprite.size.width, sprite.size.height, DRAWING_CONST.sizes.frame.left + object.position.x, DRAWING_CONST.sizes.frame.top + object.position.y, sprite.size.width, sprite.size.height);
            }
            if (this._game.debug) {
                ctx.strokeStyle = '#FF0000';
                ctx.strokeRect(DRAWING_CONST.sizes.frame.left + object.position.x, DRAWING_CONST.sizes.frame.top + object.position.y, sprite.size.width, sprite.size.height);
                this.drawText(ctx, "" + object.id, {
                    x: DRAWING_CONST.sizes.frame.left + object.position.x,
                    y: DRAWING_CONST.sizes.frame.top + object.position.y - 1,
                }, sprite.size.width);
            }
            ctx.restore();
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
    //#region public methods
    /**
     * Find sprite data for given object
     * @param object found sprite definition
     */
    Renderer.prototype.getSpriteData = function (object) {
        switch (object.objectType) {
            case "TANK" /* TANK */:
                var tank = object;
                return _Sprite_SpriteDefinition__WEBPACK_IMPORTED_MODULE_0__["default"].TANK[tank.tankColor][tank.tankLevel][tank.direction][tank.spritePosition];
            case "BULLET" /* BULLET */:
                var bullet = object;
                return _Sprite_SpriteDefinition__WEBPACK_IMPORTED_MODULE_0__["default"].BULLET[bullet.direction];
            case "ANIMATION" /* ANIMATION */:
                var animation = object;
                return _Sprite_SpriteDefinition__WEBPACK_IMPORTED_MODULE_0__["default"].ANIMATION[animation.animationType][animation.spritePosition];
            case "BLOCK" /* BLOCK */:
                var block = object;
                return _Sprite_SpriteDefinition__WEBPACK_IMPORTED_MODULE_0__["default"].BLOCK[block.blockType][block.spritePosition];
        }
    };
    /**
     * Tests two objects are collisions (rectangle collision test)
     * @param object1 first object
     * @param sprite1 first object's sprite data for size
     * @param object2 second object
     * @param sprite2 second object's sprite data for size
     */
    Renderer.prototype.rectangleCollisionTest = function (object1, sprite1, object2, sprite2) {
        if (object1.position.x + sprite1.size.width >= object2.position.x &&
            object1.position.x <= object2.position.x + sprite2.size.width &&
            object1.position.y + sprite1.size.height >= object2.position.y &&
            object1.position.y <= object2.position.y + sprite2.size.height) {
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * Test object is visible
     * @param object object for test
     * @param sprite object's sprite data for size
     */
    Renderer.prototype.testVisibility = function (object, sprite) {
        var ctx = this._canvas.getContext('2d');
        if (object.position.x + sprite.size.width <= ctx.canvas.width - DRAWING_CONST.sizes.frame.right &&
            object.position.x >= DRAWING_CONST.sizes.frame.left &&
            object.position.y + sprite.size.height <= ctx.canvas.height - DRAWING_CONST.sizes.frame.bottom &&
            object.position.y >= DRAWING_CONST.sizes.frame.top) {
            return true;
        }
        else {
            return false;
        }
    };
    Renderer.prototype.randomPoint = function (size) {
        return {
            x: this.getRandomRange(DRAWING_CONST.sizes.frame.left, this._canvas.width - DRAWING_CONST.sizes.frame.right - size.width),
            y: this.getRandomRange(DRAWING_CONST.sizes.frame.top, this._canvas.height - DRAWING_CONST.sizes.frame.bottom - size.height),
        };
    };
    Renderer.prototype.getRandomRange = function (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    };
    /**
     * Calculate and return Z-Index for render
     * 0: Water Block
     * 1: Tanks, Breakable Blocks
     * 2: Invincible Animation, Bullets
     * 3: Bush
     * 4: Explode Animations, Score Animations, Spawning Animation
     * 5: System Sprites(Game Over... etc)
     * @param object object for calculate
     */
    Renderer.prototype.getObjectZIndex = function (object) {
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
        }
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
                size: { width: 26, height: 14 }
            },
        ],
        SCORE_300: [
            {
                position: { x: 642, y: 328 },
                size: { width: 26, height: 14 }
            },
        ],
        SCORE_400: [
            {
                position: { x: 674, y: 328 },
                size: { width: 26, height: 14 }
            },
        ],
        SCORE_500: [
            {
                position: { x: 706, y: 328 },
                size: { width: 26, height: 14 }
            },
        ]
    },
    ITEM: {}
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

/***/ "./src/Utils/Utils.ts":
/*!****************************!*\
  !*** ./src/Utils/Utils.ts ***!
  \****************************/
/*! exports provided: deepClone, Guid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepClone", function() { return deepClone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Guid", function() { return Guid; });
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    var result = Array.isArray(obj) ? [] : {};
    for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
        var key = _a[_i];
        result[key] = deepClone(obj[key]);
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
//#region DEBUG
var debug_btn = document.getElementById("debug");
var mainTank_level = document.getElementById("mainTank_level");
var mainTank_color = document.getElementById("mainTank_color");
var mainTank_invincible = document.getElementById("mainTank_invincible");
var mainTank_hit = document.getElementById("mainTank_hit");
var objects = document.getElementById("objects");
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
mainTank_color.value = game.mainTank.tankColor.toString();
mainTank_level.value = game.mainTank.tankLevel.toString();
mainTank_level.addEventListener("change", function () { updateTank(); });
mainTank_color.addEventListener("change", function () { updateTank(); });
mainTank_invincible.addEventListener("click", function () { game.mainTank.invincible(); });
mainTank_hit.addEventListener("click", function () { game.mainTank.hit(); });
var objectFinder = setInterval(function () {
    console.log("!");
    objects.innerHTML =
        "\n\t<tr>\n\t\t<td>zIndex</td>\n\t\t<td>id</td>\n\t\t<td>type</td>\n\t\t<td>position</td>\n\t</tr>\n\t";
    game.getObjects().forEach(function (object) {
        objects.innerHTML = objects.innerHTML +
            ("\n\t\t<tr>\n\t\t\t<td>" + game.getObjectZIndex(object) + "</td>\n\t\t\t<td>" + object.id + "</td>\n\t\t\t<td>" + object.objectType + "</td>\n\t\t\t<td>[x: " + object.position.x + ", y: " + object.position.y + "]</td>\n\t\t</tr>\n\t\t");
    });
}, 100);
function updateTank() {
    game.mainTank.tankColor = mainTank_color.value;
    game.mainTank.tankLevel = parseInt(mainTank_level.value);
}
//#endregion


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvR2FtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9JbnB1dE1hbmFnZS9FS2V5cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9PYmplY3QvQW5pbWF0aW9uT2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL09iamVjdC9CbG9ja09iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9PYmplY3QvQnVsbGV0T2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL09iamVjdC9FQW5pbWF0aW9uVHlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9PYmplY3QvR2FtZU9iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9PYmplY3QvTW92aW5nT2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL09iamVjdC9UYW5rT2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9SZW5kZXIvUmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlbmRlci9TcHJpdGUvU3ByaXRlRGVmaW5pdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVuZGVyL1Nwcml0ZS9zcHJpdGUucG5nIiwid2VicGFjazovLy8uL3NyYy9VdGlscy9VdGlscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFD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Uyx3QkFBd0IsRUFBRTtBQUNyRjtBQUNBO0FBQ0EscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckYscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckY7QUFDQTtBQUNBLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRixxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRjtBQUNBO0FBQ0EscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckYscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckY7QUFDQTtBQUNBLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGO0FBQ0E7QUFDQSxxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRixxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckYscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckY7QUFDQTtBQUNBLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGO0FBQ0E7QUFDQSxxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRixxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRjtBQUNBO0FBQ0EscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckYscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckY7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGO0FBQ0E7QUFDQSxxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRixxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRjtBQUNBO0FBQ0EscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckYscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckY7QUFDQTtBQUNBLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGFBQWEsWUFBWSxpQkFBaUIsU0FBUyxzQkFBc0IsRUFBRTtBQUMzRSxlQUFlLFlBQVksaUJBQWlCLFNBQVMsc0JBQXNCLEVBQUU7QUFDN0UsZUFBZSxZQUFZLGlCQUFpQixTQUFTLHNCQUFzQixFQUFFO0FBQzdFLGdCQUFnQixZQUFZLGlCQUFpQixTQUFTLHNCQUFzQjtBQUM1RSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGVBQWU7QUFDMUMsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGdCQUFnQjtBQUMzQyx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsZ0JBQWdCO0FBQzNDLHVCQUF1QjtBQUN2QixhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsZ0JBQWdCO0FBQzNDLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixnQkFBZ0I7QUFDM0MsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGlCQUFpQjtBQUM1Qyx1QkFBdUI7QUFDdkIsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGlCQUFpQjtBQUM1Qyx1QkFBdUI7QUFDdkIsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGlCQUFpQjtBQUM1Qyx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsaUJBQWlCO0FBQzVDLHVCQUF1QjtBQUN2QixhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsaUJBQWlCO0FBQzVDLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUMsdUJBQXVCO0FBQ3ZCLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUMsdUJBQXVCO0FBQ3ZCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsaUJBQWlCO0FBQzVDLHVCQUF1QjtBQUN2QixhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsaUJBQWlCO0FBQzVDLHVCQUF1QjtBQUN2QixhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsaUJBQWlCO0FBQzVDLHVCQUF1QjtBQUN2QixhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsaUJBQWlCO0FBQzVDLHVCQUF1QjtBQUN2QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGlCQUFpQjtBQUM1Qyx1QkFBdUI7QUFDdkIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUMsdUJBQXVCO0FBQ3ZCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsaUJBQWlCO0FBQzVDLHVCQUF1QjtBQUN2QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGlCQUFpQjtBQUM1Qyx1QkFBdUI7QUFDdkIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUMsdUJBQXVCO0FBQ3ZCLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ2UseUVBQVUsRUFBQzs7Ozs7Ozs7Ozs7OztBQ3RhMUI7QUFBZSxzRkFBdUIsRTs7Ozs7Ozs7Ozs7O0FDQXRDO0FBQUE7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsZ0JBQWdCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQztBQUNlOzs7Ozs7Ozs7Ozs7O0FDdEJoQjtBQUFBO0FBQStCO0FBQy9CLGtCQUFrQixtQkFBTyxDQUFDLGtFQUE0QjtBQUN0RDtBQUNBO0FBQ0EsZUFBZSxrREFBSTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSx1REFBdUQsY0FBYyxFQUFFO0FBQ3ZFLHVEQUF1RCxjQUFjLEVBQUU7QUFDdkUsMkRBQTJELDRCQUE0QixFQUFFO0FBQ3pGLG9EQUFvRCxxQkFBcUIsRUFBRTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gXCIuLi9SZW5kZXIvUmVuZGVyZXJcIjtcclxuaW1wb3J0IEdhbWVPYmplY3QgZnJvbSBcIi4vT2JqZWN0L0dhbWVPYmplY3RcIjtcclxuaW1wb3J0IFRhbmtPYmplY3QgZnJvbSBcIi4vT2JqZWN0L1RhbmtPYmplY3RcIjtcclxuaW1wb3J0IHsgRUtleXNUb0VEaXJlY3Rpb24gfSBmcm9tIFwiLi9JbnB1dE1hbmFnZS9FS2V5c1wiO1xyXG5pbXBvcnQgQW5pbWF0aW9uT2JqZWN0IGZyb20gXCIuL09iamVjdC9BbmltYXRpb25PYmplY3RcIjtcclxuaW1wb3J0IHsgQW5pbWF0aW9uRGVmYXVsdHMgfSBmcm9tIFwiLi9PYmplY3QvRUFuaW1hdGlvblR5cGVcIjtcclxuaW1wb3J0IEJsb2NrT2JqZWN0IGZyb20gXCIuL09iamVjdC9CbG9ja09iamVjdFwiO1xyXG5leHBvcnQgdmFyIE1BSU5fVEFOS19JRCA9ICdNQUlOJztcclxudmFyIEdhbWUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBHYW1lKHNjcmVlbiwgc3ByaXRlU3JjLCBkZWJ1Zykge1xyXG4gICAgICAgIHRoaXMuZGVidWcgPSBkZWJ1ZztcclxuICAgICAgICB0aGlzLl9yZW5kZXJlciA9IG5ldyBSZW5kZXJlcih0aGlzLCBzY3JlZW4sIHNwcml0ZVNyYyk7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplSW5wdXRzKCk7XHJcbiAgICAgICAgc2NyZWVuLmZvY3VzKCk7XHJcbiAgICAgICAgdGhpcy5uZXdHYW1lKDAgLyogUFZFICovLCBudWxsLCBbXSk7XHJcbiAgICAgICAgLy8gdGhpcy5zaG93VGl0bGUoKTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHYW1lLnByb3RvdHlwZSwgXCJrZXlTdGF0ZVwiLCB7XHJcbiAgICAgICAgLy8jcmVnaW9uIGdldHRlciBhbmQgc2V0dGVyXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9rZXlTdGF0ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoR2FtZS5wcm90b3R5cGUsIFwibWFpblRhbmtcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgZm91bmQgPSB0aGlzLmZpbmRPYmplY3RCeUlkKE1BSU5fVEFOS19JRCk7XHJcbiAgICAgICAgICAgIGlmIChmb3VuZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZm91bmRbMF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHYW1lLnByb3RvdHlwZSwgXCJpc1RhbmtNb3ZlUmVhZHlcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgbWFpblRhbmsgPSB0aGlzLm1haW5UYW5rO1xyXG4gICAgICAgICAgICBpZiAobWFpblRhbmsgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICgodGhpcy5fa2V5U3RhdGUuQXJyb3dVcCA9PT0gdHJ1ZSAmJiBtYWluVGFuay5kaXJlY3Rpb24gPT0gXCJ1cFwiIC8qIHVwICovKSB8fFxyXG4gICAgICAgICAgICAgICAgKHRoaXMuX2tleVN0YXRlLkFycm93UmlnaHQgPT09IHRydWUgJiYgbWFpblRhbmsuZGlyZWN0aW9uID09IFwicmlnaHRcIiAvKiByaWdodCAqLykgfHxcclxuICAgICAgICAgICAgICAgICh0aGlzLl9rZXlTdGF0ZS5BcnJvd0Rvd24gPT09IHRydWUgJiYgbWFpblRhbmsuZGlyZWN0aW9uID09IFwiZG93blwiIC8qIGRvd24gKi8pIHx8XHJcbiAgICAgICAgICAgICAgICAodGhpcy5fa2V5U3RhdGUuQXJyb3dMZWZ0ID09PSB0cnVlICYmIG1haW5UYW5rLmRpcmVjdGlvbiA9PSBcImxlZnRcIiAvKiBsZWZ0ICovKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICAvLyNlbmRyZWdpb25cclxuICAgIC8vI3JlZ2lvbiBwdWJsaWMgbWV0aG9kc1xyXG4gICAgLy8jcmVnaW9uIG1lbnUgbWV0aG9kc1xyXG4gICAgR2FtZS5wcm90b3R5cGUuc2hvd1RpdGxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIEdhbWUucHJvdG90eXBlLnNob3dNZW51ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIC8vI2VuZHJlZ2lvblxyXG4gICAgR2FtZS5wcm90b3R5cGUubG9nID0gZnVuY3Rpb24gKG1zZykge1xyXG4gICAgICAgIGlmICh0aGlzLmRlYnVnKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW1wiICsgcGVyZm9ybWFuY2Uubm93KCkgKyBcIl0gXCIgKyBtc2cpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvLyNyZWdpb24gZ2FtZSBvYmplY3QgbWV0aG9kc1xyXG4gICAgR2FtZS5wcm90b3R5cGUuaW5zZXJ0T2JqZWN0ID0gZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9nYW1lRGF0YSA9PSBudWxsIHx8IHRoaXMuX2dhbWVEYXRhLm9iamVjdHMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2dhbWVEYXRhLm9iamVjdHMucHVzaChvYmplY3QpO1xyXG4gICAgICAgIHRoaXMuc29ydE9iamVjdCgpO1xyXG4gICAgfTtcclxuICAgIEdhbWUucHJvdG90eXBlLnJlbW92ZU9iamVjdCA9IGZ1bmN0aW9uIChvYmplY3QpIHtcclxuICAgICAgICBpZiAodGhpcy5fZ2FtZURhdGEgPT0gbnVsbCAmJiB0aGlzLl9nYW1lRGF0YS5vYmplY3RzID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaWR4ID0gdGhpcy5fZ2FtZURhdGEub2JqZWN0cy5pbmRleE9mKG9iamVjdCk7XHJcbiAgICAgICAgdGhpcy5fZ2FtZURhdGEub2JqZWN0cy5zcGxpY2UoaWR4LCAxKTtcclxuICAgICAgICB0aGlzLnNvcnRPYmplY3QoKTtcclxuICAgIH07XHJcbiAgICBHYW1lLnByb3RvdHlwZS5zb3J0T2JqZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHRoaXMuX2dhbWVEYXRhID09IG51bGwgfHwgdGhpcy5fZ2FtZURhdGEub2JqZWN0cyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZ2FtZURhdGEub2JqZWN0cy5zb3J0KGZ1bmN0aW9uIChvYmoxLCBvYmoyKSB7XHJcbiAgICAgICAgICAgIHZhciB6aW5kZXgxID0gX3RoaXMuZ2V0T2JqZWN0WkluZGV4KG9iajEpO1xyXG4gICAgICAgICAgICB2YXIgemluZGV4MiA9IF90aGlzLmdldE9iamVjdFpJbmRleChvYmoyKTtcclxuICAgICAgICAgICAgcmV0dXJuIHppbmRleDEgLSB6aW5kZXgyO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEdhbWUucHJvdG90eXBlLmdldE9iamVjdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIGlmICgoKF9hID0gdGhpcy5fZ2FtZURhdGEpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5vYmplY3RzKSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2FtZURhdGEub2JqZWN0cztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgR2FtZS5wcm90b3R5cGUuZmluZE9iamVjdEJ5SWQgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICBpZiAodGhpcy5fZ2FtZURhdGEub2JqZWN0cyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dhbWVEYXRhLm9iamVjdHMuZmlsdGVyKGZ1bmN0aW9uIChvYmplY3QpIHsgcmV0dXJuIG9iamVjdC5pZCA9PT0gaWQ7IH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBHYW1lLnByb3RvdHlwZS5jb2xsaXNpb25UZXN0ID0gZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGZvdW5kID0gW107XHJcbiAgICAgICAgaWYgKHRoaXMuX2dhbWVEYXRhID09IG51bGwgfHwgdGhpcy5fZ2FtZURhdGEub2JqZWN0cyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmb3VuZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG9iamVjdFNwcml0ZSA9IHRoaXMuX3JlbmRlcmVyLmdldFNwcml0ZURhdGEob2JqZWN0KTtcclxuICAgICAgICB0aGlzLl9nYW1lRGF0YS5vYmplY3RzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0ub2JqZWN0VHlwZSA9PT0gXCJBTklNQVRJT05cIiAvKiBBTklNQVRJT04gKi8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXRlbS5vYmplY3RUeXBlID09PSBcIkJMT0NLXCIgLyogQkxPQ0sgKi8pIHtcclxuICAgICAgICAgICAgICAgIHZhciBibG9ja1R5cGUgPSBpdGVtLmJsb2NrVHlwZTtcclxuICAgICAgICAgICAgICAgIGlmICgob2JqZWN0Lm9iamVjdFR5cGUgPT09IFwiVEFOS1wiIC8qIFRBTksgKi8gfHwgb2JqZWN0Lm9iamVjdFR5cGUgPT09IFwiQlVMTEVUXCIgLyogQlVMTEVUICovKSAmJiBibG9ja1R5cGUgPT09IFwiQlVTSFwiIC8qIEJVU0ggKi8pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0Lm9iamVjdFR5cGUgPT09IFwiQlVMTEVUXCIgLyogQlVMTEVUICovICYmIGJsb2NrVHlwZSA9PT0gXCJXQVRFUlwiIC8qIFdBVEVSICovKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpdGVtLm9iamVjdFR5cGUgPT09IFwiVEFOS1wiIC8qIFRBTksgKi8pIHtcclxuICAgICAgICAgICAgICAgIGlmIChvYmplY3Qub2JqZWN0VHlwZSA9PT0gXCJCVUxMRVRcIiAvKiBCVUxMRVQgKi8pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5pZCA9PT0gb2JqZWN0LnBhcmVudElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGl0ZW0ub2JqZWN0VHlwZSA9PT0gXCJCVUxMRVRcIiAvKiBCVUxMRVQgKi8pIHtcclxuICAgICAgICAgICAgICAgIGlmIChvYmplY3Qub2JqZWN0VHlwZSA9PT0gXCJUQU5LXCIgLyogVEFOSyAqLykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgc3ByaXRlRGF0YSA9IF90aGlzLl9yZW5kZXJlci5nZXRTcHJpdGVEYXRhKGl0ZW0pO1xyXG4gICAgICAgICAgICB2YXIgdGVzdCA9IF90aGlzLl9yZW5kZXJlci5yZWN0YW5nbGVDb2xsaXNpb25UZXN0KG9iamVjdCwgb2JqZWN0U3ByaXRlLCBpdGVtLCBzcHJpdGVEYXRhKTtcclxuICAgICAgICAgICAgaWYgKGl0ZW0gIT0gb2JqZWN0ICYmIHRlc3QpIHtcclxuICAgICAgICAgICAgICAgIGZvdW5kLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gZm91bmQ7XHJcbiAgICB9O1xyXG4gICAgR2FtZS5wcm90b3R5cGUuc3RhcnRBbmltYXRpb24gPSBmdW5jdGlvbiAodGFyZ2V0LCBhbmltYXRpb25UeXBlLCBhbmltYXRpb25WYWx1ZSwgY2FsbGJhY2spIHtcclxuICAgICAgICB2YXIgYW5pbWF0aW9uUG9pbnQ7XHJcbiAgICAgICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEdhbWVPYmplY3QpIHtcclxuICAgICAgICAgICAgdmFyIG9iamVjdCA9IHRhcmdldDtcclxuICAgICAgICAgICAgdmFyIHNpemUgPSB0aGlzLmdldFNwcml0ZShvYmplY3QpLnNpemU7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvblBvaW50ID0ge1xyXG4gICAgICAgICAgICAgICAgeDogb2JqZWN0LnBvc2l0aW9uLnggKyBzaXplLndpZHRoIC8gMixcclxuICAgICAgICAgICAgICAgIHk6IG9iamVjdC5wb3NpdGlvbi55ICsgc2l6ZS5oZWlnaHQgLyAyXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBhbmltYXRpb25Qb2ludCA9IHRhcmdldDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFuaW1hdGlvblZhbHVlID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBhbmltYXRpb25WYWx1ZSA9IEFuaW1hdGlvbkRlZmF1bHRzW2FuaW1hdGlvblR5cGVdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYW5pbWF0aW9uID0gbmV3IEFuaW1hdGlvbk9iamVjdCh0aGlzLCBhbmltYXRpb25UeXBlLCBhbmltYXRpb25Qb2ludCwgYW5pbWF0aW9uVmFsdWUuZHVyYXRpb24sIGFuaW1hdGlvblZhbHVlLmZyYW1lUmF0ZSwgYW5pbWF0aW9uVmFsdWUubG9vcCwgY2FsbGJhY2spO1xyXG4gICAgICAgIHRoaXMuaW5zZXJ0T2JqZWN0KGFuaW1hdGlvbik7XHJcbiAgICB9O1xyXG4gICAgLy8jcmVnaW9uIHJlbmRlcmVyIHBvcnRpbmcgbWV0aG9kc1xyXG4gICAgLyoqXHJcbiAgICAgKiBUZXN0IG9iamVjdCBpcyB2aXNpYmxlIChQb3J0IG9mIFJlbmRlcmVyLnRlc3RWaXNpYmlsaXR5KVxyXG4gICAgICogQHBhcmFtIG9iamVjdCBvYmplY3QgZm9yIHRlc3RcclxuICAgICAqIEBwYXJhbSBzcHJpdGUgb2JqZWN0J3Mgc3ByaXRlIGRhdGEgZm9yIHNpemVcclxuICAgICAqL1xyXG4gICAgR2FtZS5wcm90b3R5cGUudGVzdFZpc2liaWxpdHkgPSBmdW5jdGlvbiAob2JqZWN0LCBzcHJpdGUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVyZXIudGVzdFZpc2liaWxpdHkob2JqZWN0LCBzcHJpdGUpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogRmluZCBzcHJpdGUgZGF0YSBmb3IgZ2l2ZW4gb2JqZWN0IChQb3J0IG9mIFJlbmRlcmVyLmdldFNwcml0ZSlcclxuICAgICAqIEBwYXJhbSBvYmplY3QgZm91bmQgc3ByaXRlIGRlZmluaXRpb25cclxuICAgICAqL1xyXG4gICAgR2FtZS5wcm90b3R5cGUuZ2V0U3ByaXRlID0gZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXJlci5nZXRTcHJpdGVEYXRhKG9iamVjdCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxjdWxhdGUgYW5kIHJldHVybiBaLUluZGV4IGZvciByZW5kZXIgKFBvcnQgb2YgUmVuZGVyZXIuZ2V0T2JqZWN0WkluZGV4KVxyXG4gICAgICogQHBhcmFtIG9iamVjdCBzcHJpdGUgZm9yIGNhbGN1bGF0ZVxyXG4gICAgICovXHJcbiAgICBHYW1lLnByb3RvdHlwZS5nZXRPYmplY3RaSW5kZXggPSBmdW5jdGlvbiAob2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlcmVyLmdldE9iamVjdFpJbmRleChvYmplY3QpO1xyXG4gICAgfTtcclxuICAgIC8vI2VuZHJlZ2lvblxyXG4gICAgLy8jZW5kcmVnaW9uXHJcbiAgICBHYW1lLnByb3RvdHlwZS5uZXdHYW1lID0gZnVuY3Rpb24gKGdhbWVUeXBlLCBsZXZlbCwgb2JqZWN0cykge1xyXG4gICAgICAgIHRoaXMuX2dhbWVEYXRhID0ge1xyXG4gICAgICAgICAgICBnYW1lVHlwZTogZ2FtZVR5cGUsXHJcbiAgICAgICAgICAgIGxldmVsRGF0YTogbGV2ZWwsXHJcbiAgICAgICAgICAgIG9iamVjdHM6IG9iamVjdHNcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY3JlYXRlTWFpblRhbmsodGhpcy5fcmVuZGVyZXIucmFuZG9tUG9pbnQoeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSksIFwidXBcIiAvKiB1cCAqLywgXCJZRUxMT1dcIiAvKiBZRUxMT1cgKi8sIDApO1xyXG4gICAgICAgIHRoaXMuaW5zZXJ0T2JqZWN0KG5ldyBCbG9ja09iamVjdCh0aGlzLCBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sIHsgeDogMyAqIDMyLCB5OiA1ICogMzIgfSwge1xyXG4gICAgICAgICAgICBib3R0b21MZWZ0OiB0cnVlLFxyXG4gICAgICAgICAgICBib3R0b21SaWdodDogdHJ1ZSxcclxuICAgICAgICAgICAgdG9wTGVmdDogdHJ1ZSxcclxuICAgICAgICAgICAgdG9wUmlnaHQ6IHRydWVcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgdGhpcy5pbnNlcnRPYmplY3QobmV3IEJsb2NrT2JqZWN0KHRoaXMsIFwiSVJPTlwiIC8qIElST04gKi8sIHsgeDogMyAqIDMyLCB5OiA2ICogMzIgfSwge1xyXG4gICAgICAgICAgICBib3R0b21MZWZ0OiB0cnVlLFxyXG4gICAgICAgICAgICBib3R0b21SaWdodDogdHJ1ZSxcclxuICAgICAgICAgICAgdG9wTGVmdDogdHJ1ZSxcclxuICAgICAgICAgICAgdG9wUmlnaHQ6IHRydWVcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgdGhpcy5pbnNlcnRPYmplY3QobmV3IEJsb2NrT2JqZWN0KHRoaXMsIFwiV0FURVJcIiAvKiBXQVRFUiAqLywgeyB4OiAzICogMzIsIHk6IDcgKiAzMiB9LCB7XHJcbiAgICAgICAgICAgIGJvdHRvbUxlZnQ6IHRydWUsXHJcbiAgICAgICAgICAgIGJvdHRvbVJpZ2h0OiB0cnVlLFxyXG4gICAgICAgICAgICB0b3BMZWZ0OiB0cnVlLFxyXG4gICAgICAgICAgICB0b3BSaWdodDogdHJ1ZVxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICB0aGlzLmluc2VydE9iamVjdChuZXcgQmxvY2tPYmplY3QodGhpcywgXCJCVVNIXCIgLyogQlVTSCAqLywgeyB4OiAzICogMzIsIHk6IDggKiAzMiB9LCB7XHJcbiAgICAgICAgICAgIGJvdHRvbUxlZnQ6IHRydWUsXHJcbiAgICAgICAgICAgIGJvdHRvbVJpZ2h0OiB0cnVlLFxyXG4gICAgICAgICAgICB0b3BMZWZ0OiB0cnVlLFxyXG4gICAgICAgICAgICB0b3BSaWdodDogdHJ1ZVxyXG4gICAgICAgIH0pKTtcclxuICAgIH07XHJcbiAgICAvLyNlbmRyZWdpb25cclxuICAgIC8vI3JlZ2lvbiBwcml2YXRlIG1ldGhvZHNcclxuICAgIEdhbWUucHJvdG90eXBlLmluaXRpYWxpemVJbnB1dHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLl9rZXlTdGF0ZSA9IHt9O1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbiAoZXYpIHtcclxuICAgICAgICAgICAgdmFyIG1haW5UYW5rID0gX3RoaXMubWFpblRhbms7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZXYuY29kZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkFycm93VXBcIiAvKiBhcnJvd191cCAqLzpcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCIgLyogYXJyb3dfcmlnaHQgKi86XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dEb3duXCIgLyogYXJyb3dfZG93biAqLzpcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJBcnJvd0xlZnRcIiAvKiBhcnJvd19sZWZ0ICovOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYWluVGFuaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluVGFuay5kaXJlY3Rpb24gPSBFS2V5c1RvRURpcmVjdGlvbihldi5jb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMucmVzZXRBcnJvd0lucHV0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuX2tleVN0YXRlW2V2LmNvZGVdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJTcGFjZVwiIC8qIHNwYWNlYmFyICovOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYWluVGFuaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluVGFuay5maXJlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9rZXlTdGF0ZVtldi5jb2RlXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiRXNjYXBlXCIgLyogZXNjICovOlxyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9rZXlTdGF0ZVtldi5jb2RlXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uIChldikge1xyXG4gICAgICAgICAgICB2YXIgY29kZSA9IGV2LmNvZGU7XHJcbiAgICAgICAgICAgIF90aGlzLl9rZXlTdGF0ZVtjb2RlXSA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEdhbWUucHJvdG90eXBlLnJlc2V0QXJyb3dJbnB1dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLl9rZXlTdGF0ZS5BcnJvd1VwID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fa2V5U3RhdGUuQXJyb3dSaWdodCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2tleVN0YXRlLkFycm93RG93biA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2tleVN0YXRlLkFycm93TGVmdCA9IGZhbHNlO1xyXG4gICAgfTtcclxuICAgIEdhbWUucHJvdG90eXBlLmNyZWF0ZU1haW5UYW5rID0gZnVuY3Rpb24gKHBvc2l0aW9uLCBkaXJlY3Rpb24sIHRhbmtDb2xvciwgdGFua0xldmVsKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubWFpblRhbmspIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVPYmplY3QodGhpcy5tYWluVGFuayk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW5zZXJ0T2JqZWN0KG5ldyBUYW5rT2JqZWN0KHRoaXMsIHBvc2l0aW9uLCBkaXJlY3Rpb24sIHRhbmtDb2xvciwgdGFua0xldmVsLCBNQUlOX1RBTktfSUQpKTtcclxuICAgICAgICB0aGlzLm1haW5UYW5rLmludmluY2libGUoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gR2FtZTtcclxufSgpKTtcclxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcclxuIiwiZXhwb3J0IGZ1bmN0aW9uIEVLZXlzVG9FRGlyZWN0aW9uKGtleXMpIHtcclxuICAgIHN3aXRjaCAoa2V5cykge1xyXG4gICAgICAgIGNhc2UgXCJBcnJvd1VwXCIgLyogYXJyb3dfdXAgKi86XHJcbiAgICAgICAgICAgIHJldHVybiBcInVwXCIgLyogdXAgKi87XHJcbiAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIiAvKiBhcnJvd19yaWdodCAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIFwicmlnaHRcIiAvKiByaWdodCAqLztcclxuICAgICAgICBjYXNlIFwiQXJyb3dEb3duXCIgLyogYXJyb3dfZG93biAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIFwiZG93blwiIC8qIGRvd24gKi87XHJcbiAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiIC8qIGFycm93X2xlZnQgKi86XHJcbiAgICAgICAgICAgIHJldHVybiBcImxlZnRcIiAvKiBsZWZ0ICovO1xyXG4gICAgfVxyXG59XHJcbiIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5pbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiLi9HYW1lT2JqZWN0XCI7XHJcbmltcG9ydCB7IEd1aWQgfSBmcm9tIFwiLi4vLi4vVXRpbHMvVXRpbHNcIjtcclxuaW1wb3J0IFNQUlRJRV9ERUYgZnJvbSBcIi4uLy4uL1JlbmRlci9TcHJpdGUvU3ByaXRlRGVmaW5pdGlvblwiO1xyXG52YXIgQW5pbWF0aW9uT2JqZWN0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEFuaW1hdGlvbk9iamVjdCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEFuaW1hdGlvbk9iamVjdChnYW1lLCBhbmltYXRpb25UeXBlLCBhbmltYXRpb25Qb2ludCwgZHVyYXRpb24sIGZyYW1lUmF0ZSwgbG9vcCwgY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAobG9vcCA9PT0gdm9pZCAwKSB7IGxvb3AgPSBmYWxzZTsgfVxyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGdhbWUsIFwiQU5JTUFUSU9OXCIgLyogQU5JTUFUSU9OICovLCBhbmltYXRpb25Qb2ludCwgR3VpZC5uZXdHdWlkKCkpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuYW5pbWF0aW9uVHlwZSA9IGFuaW1hdGlvblR5cGU7XHJcbiAgICAgICAgX3RoaXMuX2FuaW1hdGlvblBvaW50ID0gYW5pbWF0aW9uUG9pbnQ7XHJcbiAgICAgICAgX3RoaXMuX3Nwcml0ZVBvc2l0aW9uID0gMDtcclxuICAgICAgICBfdGhpcy5fY3VycmVudFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICBfdGhpcy5fZXhwaXJlVGltZSA9IF90aGlzLl9jdXJyZW50VGltZSArIGR1cmF0aW9uO1xyXG4gICAgICAgIF90aGlzLl9mcmFtZUNvdW50ID0gU1BSVElFX0RFRi5BTklNQVRJT05bX3RoaXMuYW5pbWF0aW9uVHlwZV0ubGVuZ3RoO1xyXG4gICAgICAgIF90aGlzLl9mcmFtZVJhdGUgPSBmcmFtZVJhdGU7XHJcbiAgICAgICAgX3RoaXMuX2xvb3AgPSBsb29wO1xyXG4gICAgICAgIF90aGlzLl9jYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgICAgIF90aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFuaW1hdGlvbk9iamVjdC5wcm90b3R5cGUsIFwiYW5pbWF0aW9uUG9pbnRcIiwge1xyXG4gICAgICAgIC8vI3JlZ2lvbiBnZXR0ZXIsIHNldHRlclxyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYW5pbWF0aW9uUG9pbnQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChhbmltYXRpb25Qb2ludCkge1xyXG4gICAgICAgICAgICB0aGlzLl9hbmltYXRpb25Qb2ludCA9IGFuaW1hdGlvblBvaW50O1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFuaW1hdGlvbk9iamVjdC5wcm90b3R5cGUsIFwiZXhwaXJlVGltZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9leHBpcmVUaW1lO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIC8vI2VuZHJlZ2lvblxyXG4gICAgLy8jcmVnaW9uIHB1YmxpYyBtZXRob2RzXHJcbiAgICAvLyBpZ25vcmUgaGl0IGV2ZW50XHJcbiAgICBBbmltYXRpb25PYmplY3QucHJvdG90eXBlLmhpdCA9IGZ1bmN0aW9uICgpIHsgfTtcclxuICAgIEFuaW1hdGlvbk9iamVjdC5wcm90b3R5cGUubmV4dFNwcml0ZVBvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuX2dhbWUubG9nKFwiW1wiICsgdGhpcy5zcHJpdGVQb3NpdGlvbiArIFwiIC8gXCIgKyAodGhpcy5fZnJhbWVDb3VudCAtIDEpICsgXCJdXCIgKyAocGVyZm9ybWFuY2Uubm93KCkgLSB0aGlzLl9jdXJyZW50VGltZSkgKyBcIiA+PSBcIiArIHRoaXMuX2ZyYW1lUmF0ZSk7XHJcbiAgICAgICAgaWYgKHBlcmZvcm1hbmNlLm5vdygpIC0gdGhpcy5fY3VycmVudFRpbWUgPj0gdGhpcy5fZnJhbWVSYXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9zcHJpdGVQb3NpdGlvbiArIDEgPCB0aGlzLl9mcmFtZUNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zcHJpdGVQb3NpdGlvbisrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX2xvb3ApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Nwcml0ZVBvc2l0aW9uID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9zcHJpdGVQb3NpdGlvbjtcclxuICAgIH07XHJcbiAgICBBbmltYXRpb25PYmplY3QucHJvdG90eXBlLmV4cGlyZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLl9nYW1lLmxvZyhcIkFOSU1BVElPTiBcIiArIHRoaXMuaWQgKyBcIiBIQVMgQkVFTiBFWFBJUkVELiAoXCIgKyBwZXJmb3JtYW5jZS5ub3cgKyBcIilcIik7XHJcbiAgICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgICAgICBpZiAodGhpcy5fY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdGhpcy5fY2FsbGJhY2sodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8vI2VuZHJlZ2lvblxyXG4gICAgQW5pbWF0aW9uT2JqZWN0LnByb3RvdHlwZS51cGRhdGVQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgc3ByaXRlRGF0YSA9IHRoaXMuX2dhbWUuZ2V0U3ByaXRlKHRoaXMpLnNpemU7XHJcbiAgICAgICAgdGhpcy5fcG9zaXRvbiA9IHtcclxuICAgICAgICAgICAgeDogdGhpcy5fYW5pbWF0aW9uUG9pbnQueCAtIHNwcml0ZURhdGEud2lkdGggLyAyLFxyXG4gICAgICAgICAgICB5OiB0aGlzLl9hbmltYXRpb25Qb2ludC55IC0gc3ByaXRlRGF0YS5oZWlnaHQgLyAyXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQW5pbWF0aW9uT2JqZWN0O1xyXG59KEdhbWVPYmplY3QpKTtcclxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0aW9uT2JqZWN0O1xyXG4iLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuaW1wb3J0IEdhbWVPYmplY3QgZnJvbSBcIi4vR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBHdWlkIH0gZnJvbSBcIi4uLy4uL1V0aWxzL1V0aWxzXCI7XHJcbmltcG9ydCBCdWxsZXRPYmplY3QgZnJvbSBcIi4vQnVsbGV0T2JqZWN0XCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBCbG9ja1N0YXRlMngyVG80eDQoeDIpIHtcclxuICAgIHZhciB4NCA9IFtcclxuICAgICAgICBbZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2VdLFxyXG4gICAgICAgIFtmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZV0sXHJcbiAgICAgICAgW2ZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlXSxcclxuICAgICAgICBbZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2VdXHJcbiAgICBdO1xyXG4gICAgeDRbMF1bMF0gPSB4Mi50b3BMZWZ0O1xyXG4gICAgeDRbMF1bMV0gPSB4Mi50b3BMZWZ0O1xyXG4gICAgeDRbMV1bMF0gPSB4Mi50b3BMZWZ0O1xyXG4gICAgeDRbMV1bMV0gPSB4Mi50b3BMZWZ0O1xyXG4gICAgeDRbMF1bMl0gPSB4Mi50b3BSaWdodDtcclxuICAgIHg0WzBdWzNdID0geDIudG9wUmlnaHQ7XHJcbiAgICB4NFsxXVsyXSA9IHgyLnRvcFJpZ2h0O1xyXG4gICAgeDRbMV1bM10gPSB4Mi50b3BSaWdodDtcclxuICAgIHg0WzJdWzBdID0geDIuYm90dG9tTGVmdDtcclxuICAgIHg0WzJdWzFdID0geDIuYm90dG9tTGVmdDtcclxuICAgIHg0WzNdWzBdID0geDIuYm90dG9tTGVmdDtcclxuICAgIHg0WzNdWzFdID0geDIuYm90dG9tTGVmdDtcclxuICAgIHg0WzJdWzJdID0geDIuYm90dG9tUmlnaHQ7XHJcbiAgICB4NFsyXVszXSA9IHgyLmJvdHRvbVJpZ2h0O1xyXG4gICAgeDRbM11bMl0gPSB4Mi5ib3R0b21SaWdodDtcclxuICAgIHg0WzNdWzNdID0geDIuYm90dG9tUmlnaHQ7XHJcbiAgICByZXR1cm4geDQ7XHJcbn1cclxudmFyIEJsb2NrT2JqZWN0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEJsb2NrT2JqZWN0LCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gQmxvY2tPYmplY3QoZ2FtZSwgYmxvY2tUeXBlLCBwb3NpdGlvbiwgYmxvY2tTdGF0ZTJ4Mikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGdhbWUsIFwiQkxPQ0tcIiAvKiBCTE9DSyAqLywgcG9zaXRpb24sIEd1aWQubmV3R3VpZCgpKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLmJsb2NrVHlwZSA9IGJsb2NrVHlwZTtcclxuICAgICAgICBfdGhpcy5fYmxvY2tTdGF0ZSA9IEJsb2NrU3RhdGUyeDJUbzR4NChibG9ja1N0YXRlMngyKTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBCbG9ja09iamVjdC5wcm90b3R5cGUuaGl0ID0gZnVuY3Rpb24gKGV2ZW50T3JpZ2luKSB7XHJcbiAgICAgICAgaWYgKCEoZXZlbnRPcmlnaW4gaW5zdGFuY2VvZiBCdWxsZXRPYmplY3QpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEJsb2NrT2JqZWN0O1xyXG59KEdhbWVPYmplY3QpKTtcclxuZXhwb3J0IGRlZmF1bHQgQmxvY2tPYmplY3Q7XHJcbiIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5pbXBvcnQgTW92aW5nT2JqZWN0LCB7IGNhbGN1bGF0ZU1vdmUgfSBmcm9tIFwiLi9Nb3ZpbmdPYmplY3RcIjtcclxuaW1wb3J0IEFuaW1hdGlvbk9iamVjdCBmcm9tIFwiLi9BbmltYXRpb25PYmplY3RcIjtcclxuZXhwb3J0IHZhciBCVUxMRVRfU0xPVyA9IDQ7XHJcbmV4cG9ydCB2YXIgQlVMTEVUX0ZBU1QgPSA2O1xyXG52YXIgQnVsbGV0T2JqZWN0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEJ1bGxldE9iamVjdCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEJ1bGxldE9iamVjdChnYW1lLCBwYXJlbnQsIHBvc2l0aW9uLCBkaXJlY3Rpb24sIHNwZWVkLCBpZCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGdhbWUsIFwiQlVMTEVUXCIgLyogQlVMTEVUICovLCBwb3NpdGlvbiwgZGlyZWN0aW9uLCBzcGVlZCwgaWQpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuX3BhcmVudCA9IHBhcmVudDtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQnVsbGV0T2JqZWN0LnByb3RvdHlwZSwgXCJwYXJlbnRJZFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9wYXJlbnQuaWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgQnVsbGV0T2JqZWN0LnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGNoYW5nZWQgPSB0aGlzLnBvc2l0aW9uO1xyXG4gICAgICAgIGNhbGN1bGF0ZU1vdmUoY2hhbmdlZCwgdGhpcy5fZGlyZWN0aW9uLCB0aGlzLl9zcGVlZCk7XHJcbiAgICAgICAgdGhpcy5fZ2FtZS5sb2coXCJCVUxMRVQgW1wiICsgdGhpcy5pZCArIFwiXSBNT1ZFRCAtPiBbeDpcIiArIHRoaXMucG9zaXRpb24ueCArIFwiXSwgeTpbXCIgKyB0aGlzLnBvc2l0aW9uLnkgKyBcIl1cIik7XHJcbiAgICAgICAgdmFyIHRlc3RfdmlzaWJsZSA9IHRoaXMuX2dhbWUudGVzdFZpc2liaWxpdHkodGhpcywgdGhpcy5fZ2FtZS5nZXRTcHJpdGUodGhpcykpO1xyXG4gICAgICAgIHZhciB0ZXN0X2NvbGxpc2lvbiA9IHRoaXMuX2dhbWUuY29sbGlzaW9uVGVzdCh0aGlzKTtcclxuICAgICAgICBpZiAodGVzdF92aXNpYmxlID09IGZhbHNlIHx8IHRlc3RfY29sbGlzaW9uLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fZ2FtZS5sb2coXCJCVUxMRVQgW1wiICsgdGhpcy5pZCArIFwiXSBFWFBMT0RFRC5cIik7XHJcbiAgICAgICAgICAgIHRoaXMuZXhwbG9kZSgpO1xyXG4gICAgICAgICAgICB0ZXN0X2NvbGxpc2lvbi5mb3JFYWNoKGZ1bmN0aW9uIChvYmplY3QpIHtcclxuICAgICAgICAgICAgICAgIG9iamVjdC5oaXQoX3RoaXMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgQnVsbGV0T2JqZWN0LnByb3RvdHlwZS5oaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5leHBsb2RlKCk7XHJcbiAgICB9O1xyXG4gICAgQnVsbGV0T2JqZWN0LnByb3RvdHlwZS5leHBsb2RlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBhbmltYXRpb25Qb3NpdGlvbjtcclxuICAgICAgICB2YXIgc2l6ZSA9IHRoaXMuX2dhbWUuZ2V0U3ByaXRlKHRoaXMpLnNpemU7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBcInVwXCIgLyogdXAgKi8gfHwgdGhpcy5kaXJlY3Rpb24gPT09IFwiZG93blwiIC8qIGRvd24gKi8pIHtcclxuICAgICAgICAgICAgYW5pbWF0aW9uUG9zaXRpb24gPSB7XHJcbiAgICAgICAgICAgICAgICB4OiB0aGlzLnBvc2l0aW9uLnggKyBzaXplLndpZHRoIC8gMixcclxuICAgICAgICAgICAgICAgIHk6IHRoaXMucG9zaXRpb24ueVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgYW5pbWF0aW9uUG9zaXRpb24gPSB7XHJcbiAgICAgICAgICAgICAgICB4OiB0aGlzLnBvc2l0aW9uLngsXHJcbiAgICAgICAgICAgICAgICB5OiB0aGlzLnBvc2l0aW9uLnkgKyBzaXplLmhlaWdodCAvIDJcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZ2FtZS5pbnNlcnRPYmplY3QobmV3IEFuaW1hdGlvbk9iamVjdCh0aGlzLl9nYW1lLCBcIkVYUExPU0lPTl9TTUFMTFwiIC8qIEVYUExPU0lPTl9TTUFMTCAqLywgdGhpcy5wb3NpdGlvbiwgMjAwLCAyMDAgLyA0KSk7XHJcbiAgICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgIH07XHJcbiAgICBCdWxsZXRPYmplY3QucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnJlbW92ZS5jYWxsKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX3BhcmVudC5yZW1vdmVCdWxsZXQodGhpcy5pZCk7XHJcbiAgICAgICAgdGhpcy5fZ2FtZS5sb2coXCJCVUxMRVQgW1wiICsgdGhpcy5pZCArIFwiXSBIQVMgQkVFTiBSRU1PVkVELlwiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQnVsbGV0T2JqZWN0O1xyXG59KE1vdmluZ09iamVjdCkpO1xyXG5leHBvcnQgZGVmYXVsdCBCdWxsZXRPYmplY3Q7XHJcbiIsIjtcclxuLy8gVE9ETyBVcGRhdGUgZGVmYXVsdHNcclxuZXhwb3J0IHZhciBBbmltYXRpb25EZWZhdWx0cyA9IHtcclxuICAgIEVYUExPU0lPTl9TTUFMTDoge1xyXG4gICAgICAgIGR1cmF0aW9uOiAyMDAsXHJcbiAgICAgICAgZnJhbWVSYXRlOiAyMDAgLyA0LFxyXG4gICAgICAgIGxvb3A6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgRVhQTE9TSU9OX0xBUkdFOiB7XHJcbiAgICAgICAgZHVyYXRpb246IDE1MCxcclxuICAgICAgICBmcmFtZVJhdGU6IDE1MCAvIDMsXHJcbiAgICAgICAgbG9vcDogZmFsc2VcclxuICAgIH0sXHJcbiAgICBJTlZJTkNJQkxFOiB7XHJcbiAgICAgICAgZHVyYXRpb246IDMwMDAsXHJcbiAgICAgICAgZnJhbWVSYXRlOiAyNSxcclxuICAgICAgICBsb29wOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgU1BBV046IHtcclxuICAgICAgICBkdXJhdGlvbjogMCxcclxuICAgICAgICBmcmFtZVJhdGU6IDAsXHJcbiAgICAgICAgbG9vcDogZmFsc2VcclxuICAgIH0sXHJcbiAgICBTQ09SRV8xMDA6IHtcclxuICAgICAgICBkdXJhdGlvbjogMCxcclxuICAgICAgICBmcmFtZVJhdGU6IDAsXHJcbiAgICAgICAgbG9vcDogZmFsc2VcclxuICAgIH0sXHJcbiAgICBTQ09SRV8yMDA6IHtcclxuICAgICAgICBkdXJhdGlvbjogMCxcclxuICAgICAgICBmcmFtZVJhdGU6IDAsXHJcbiAgICAgICAgbG9vcDogZmFsc2VcclxuICAgIH0sXHJcbiAgICBTQ09SRV8zMDA6IHtcclxuICAgICAgICBkdXJhdGlvbjogMCxcclxuICAgICAgICBmcmFtZVJhdGU6IDAsXHJcbiAgICAgICAgbG9vcDogZmFsc2VcclxuICAgIH0sXHJcbiAgICBTQ09SRV80MDA6IHtcclxuICAgICAgICBkdXJhdGlvbjogMCxcclxuICAgICAgICBmcmFtZVJhdGU6IDAsXHJcbiAgICAgICAgbG9vcDogZmFsc2VcclxuICAgIH0sXHJcbiAgICBTQ09SRV81MDA6IHtcclxuICAgICAgICBkdXJhdGlvbjogMCxcclxuICAgICAgICBmcmFtZVJhdGU6IDAsXHJcbiAgICAgICAgbG9vcDogZmFsc2VcclxuICAgIH1cclxufTtcclxuIiwidmFyIEdhbWVPYmplY3QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBHYW1lT2JqZWN0KGdhbWUsIG9iamVjdFR5cGUsIHBvc2l0aW9uLCBpZCwgdmlzaWJsZSkge1xyXG4gICAgICAgIGlmICh2aXNpYmxlID09PSB2b2lkIDApIHsgdmlzaWJsZSA9IHRydWU7IH1cclxuICAgICAgICB0aGlzLl9nYW1lID0gZ2FtZTtcclxuICAgICAgICB0aGlzLl92aXNpYmxlID0gdmlzaWJsZTtcclxuICAgICAgICB0aGlzLm9iamVjdFR5cGUgPSBvYmplY3RUeXBlO1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZVBvc2l0aW9uID0gMDtcclxuICAgICAgICBpZiAocG9zaXRpb24gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Bvc2l0b24gPSBwb3NpdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Bvc2l0b24gPSB7XHJcbiAgICAgICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICAgICAgeTogMFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaWQgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoR2FtZU9iamVjdC5wcm90b3R5cGUsIFwicG9zaXRpb25cIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcG9zaXRvbjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbi54IDw9IDAgfHwgcG9zaXRpb24ueSA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyAncG9zaXRpb24gY2Fubm90IGJlIGEgbmVnYXRpdmUgdmFsdWUnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX3Bvc2l0b24gPSBwb3NpdGlvbjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoR2FtZU9iamVjdC5wcm90b3R5cGUsIFwic3ByaXRlUG9zaXRpb25cIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3ByaXRlUG9zaXRpb247XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgR2FtZU9iamVjdC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuX2dhbWUucmVtb3ZlT2JqZWN0KHRoaXMpO1xyXG4gICAgfTtcclxuICAgIEdhbWVPYmplY3QucHJvdG90eXBlLm5leHRTcHJpdGVQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLl9zcHJpdGVQb3NpdGlvbiA9IHRoaXMuX3Nwcml0ZVBvc2l0aW9uICsgMSA8PSAxID8gdGhpcy5fc3ByaXRlUG9zaXRpb24gKyAxIDogMDtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3ByaXRlUG9zaXRpb247XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEdhbWVPYmplY3Q7XHJcbn0oKSk7XHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVPYmplY3Q7XHJcbiIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5pbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiLi9HYW1lT2JqZWN0XCI7XHJcbnZhciBNb3ZpbmdPYmplY3QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoTW92aW5nT2JqZWN0LCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gTW92aW5nT2JqZWN0KGdhbWUsIG9iamVjdFR5cGUsIHBvc2l0aW9uLCBkaXJlY3Rpb24sIHNwZWVkLCBpZCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGdhbWUsIG9iamVjdFR5cGUsIHBvc2l0aW9uLCBpZCkgfHwgdGhpcztcclxuICAgICAgICBpZiAoZGlyZWN0aW9uICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBfdGhpcy5fZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgX3RoaXMuX2RpcmVjdGlvbiA9IFwidXBcIiAvKiB1cCAqLztcclxuICAgICAgICB9XHJcbiAgICAgICAgX3RoaXMuX3NwZWVkID0gc3BlZWQ7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1vdmluZ09iamVjdC5wcm90b3R5cGUsIFwiZGlyZWN0aW9uXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RpcmVjdGlvbjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLl9kaXJlY3Rpb24gPSBkaXJlY3Rpb247XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIE1vdmluZ09iamVjdDtcclxufShHYW1lT2JqZWN0KSk7XHJcbmV4cG9ydCBkZWZhdWx0IE1vdmluZ09iamVjdDtcclxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZU1vdmUocG9zaXRpb24sIGRpcmVjdGlvbiwgc3BlZWQpIHtcclxuICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgY2FzZSBcInVwXCIgLyogdXAgKi86XHJcbiAgICAgICAgICAgIHBvc2l0aW9uLnkgLT0gc3BlZWQ7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJyaWdodFwiIC8qIHJpZ2h0ICovOlxyXG4gICAgICAgICAgICBwb3NpdGlvbi54ICs9IHNwZWVkO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiZG93blwiIC8qIGRvd24gKi86XHJcbiAgICAgICAgICAgIHBvc2l0aW9uLnkgKz0gc3BlZWQ7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJsZWZ0XCIgLyogbGVmdCAqLzpcclxuICAgICAgICAgICAgcG9zaXRpb24ueCAtPSBzcGVlZDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn1cclxuIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbmltcG9ydCBNb3ZpbmdPYmplY3QsIHsgY2FsY3VsYXRlTW92ZSB9IGZyb20gXCIuL01vdmluZ09iamVjdFwiO1xyXG5pbXBvcnQgQnVsbGV0T2JqZWN0LCB7IEJVTExFVF9TTE9XLCBCVUxMRVRfRkFTVCB9IGZyb20gXCIuL0J1bGxldE9iamVjdFwiO1xyXG5pbXBvcnQgU1BSVElFX0RFRiBmcm9tIFwiLi4vLi4vUmVuZGVyL1Nwcml0ZS9TcHJpdGVEZWZpbml0aW9uXCI7XHJcbmltcG9ydCB7IEd1aWQsIGRlZXBDbG9uZSB9IGZyb20gXCIuLi8uLi9VdGlscy9VdGlsc1wiO1xyXG5leHBvcnQgdmFyIFRBTktfU1BFRUQgPSAyO1xyXG52YXIgVGFua09iamVjdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhUYW5rT2JqZWN0LCBfc3VwZXIpO1xyXG4gICAgLy8jcmVnaW9uIGNvbnN0cnVjdG9yXHJcbiAgICBmdW5jdGlvbiBUYW5rT2JqZWN0KGdhbWUsIHBvc2l0aW9uLCBkaXJlY3Rpb24sIHRhbmtDb2xvciwgdGFua0xldmVsLCBpZCkge1xyXG4gICAgICAgIGlmICh0YW5rTGV2ZWwgPT09IHZvaWQgMCkgeyB0YW5rTGV2ZWwgPSAxOyB9XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZ2FtZSwgXCJUQU5LXCIgLyogVEFOSyAqLywgcG9zaXRpb24sIGRpcmVjdGlvbiwgVEFOS19TUEVFRCwgaWQpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuX2lzSW52aW5jaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIF90aGlzLl90YW5rQ29sb3IgPSB0YW5rQ29sb3I7XHJcbiAgICAgICAgX3RoaXMuX3RhbmtMZXZlbCA9IHRhbmtMZXZlbDtcclxuICAgICAgICBfdGhpcy5fYnVsbGV0cyA9IFtdO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUYW5rT2JqZWN0LnByb3RvdHlwZSwgXCJ0YW5rQ29sb3JcIiwge1xyXG4gICAgICAgIC8vI2VuZHJlZ2lvblxyXG4gICAgICAgIC8vI3JlZ2lvbiBnZXR0ZXIsIHNldHRlclxyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdGFua0NvbG9yO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gVE9ETzogUkVNT1ZFIFdIRU4gREVQTE9ZXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoY29sb3IpIHtcclxuICAgICAgICAgICAgdGhpcy5fdGFua0NvbG9yID0gY29sb3I7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRhbmtPYmplY3QucHJvdG90eXBlLCBcInRhbmtMZXZlbFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90YW5rTGV2ZWw7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyBUT0RPOiBSRU1PVkUgV0hFTiBERVBMT1lcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChsZXZlbCkge1xyXG4gICAgICAgICAgICB0aGlzLl90YW5rTGV2ZWwgPSBsZXZlbDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICAvLyNlbmRyZWdpb25cclxuICAgIC8vI3JlZ2lvbiBpbXBsZW1lbnRzIG9mIE1vdmluZ09iamVjdFx0XHJcbiAgICBUYW5rT2JqZWN0LnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBvcmlnaW5hbCA9IGRlZXBDbG9uZSh0aGlzLnBvc2l0aW9uKTtcclxuICAgICAgICBjYWxjdWxhdGVNb3ZlKHRoaXMucG9zaXRpb24sIHRoaXMuX2RpcmVjdGlvbiwgdGhpcy5fc3BlZWQpO1xyXG4gICAgICAgIC8vIHRlc3QgbW92ZW1lbnQgaXMgdmFsaWRcclxuICAgICAgICB0aGlzLl9nYW1lLmxvZyhcIlRBTksgW1wiICsgdGhpcy5pZCArIFwiXSBNT1ZFRCAtPiBbIHg6IFwiICsgdGhpcy5wb3NpdGlvbi54ICsgXCIsIHk6IFwiICsgdGhpcy5wb3NpdGlvbi55ICsgXCIgXVwiKTtcclxuICAgICAgICB2YXIgdGVzdF92aXNpYmxlID0gdGhpcy5fZ2FtZS50ZXN0VmlzaWJpbGl0eSh0aGlzLCB0aGlzLl9nYW1lLmdldFNwcml0ZSh0aGlzKSk7XHJcbiAgICAgICAgdmFyIHRlc3RfY29sbGlzaW9uID0gdGhpcy5fZ2FtZS5jb2xsaXNpb25UZXN0KHRoaXMpO1xyXG4gICAgICAgIGlmICghdGVzdF92aXNpYmxlIHx8IHRlc3RfY29sbGlzaW9uLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgLy8gaWYgbm90LCByb2xsYmFjayBtb3ZlbWVudFxyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gb3JpZ2luYWw7XHJcbiAgICAgICAgICAgIHRoaXMuX2dhbWUubG9nKFwiVEFOSyBbXCIgKyB0aGlzLmlkICsgXCJdIE1PVkVTIC0+IEJMT0NLRUQhISBbIHg6IFwiICsgdGhpcy5wb3NpdGlvbi54ICsgXCIsIHk6IFwiICsgdGhpcy5wb3NpdGlvbi55ICsgXCIgXVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5uZXh0U3ByaXRlUG9zaXRpb24oKTtcclxuICAgIH07XHJcbiAgICBUYW5rT2JqZWN0LnByb3RvdHlwZS5oaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBpZiAodGhpcy5faXNJbnZpbmNpYmxlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZ2FtZS5zdGFydEFuaW1hdGlvbih0aGlzLCBcIkVYUExPU0lPTl9TTUFMTFwiIC8qIEVYUExPU0lPTl9TTUFMTCAqLywgbnVsbCwgZnVuY3Rpb24gKGFuaW1hdGlvbikge1xyXG4gICAgICAgICAgICBfdGhpcy5fZ2FtZS5zdGFydEFuaW1hdGlvbihhbmltYXRpb24uYW5pbWF0aW9uUG9pbnQsIFwiRVhQTE9TSU9OX0xBUkdFXCIgLyogRVhQTE9TSU9OX0xBUkdFICovLCBudWxsLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLy8jZW5kcmVnaW9uXHJcbiAgICAvLyNyZWdpb24gcHVibGljIG1ldGhvZHNcclxuICAgIFRhbmtPYmplY3QucHJvdG90eXBlLmZpcmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVCdWxsZXQoKTtcclxuICAgIH07XHJcbiAgICBUYW5rT2JqZWN0LnByb3RvdHlwZS5pbnZpbmNpYmxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5faXNJbnZpbmNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9nYW1lLnN0YXJ0QW5pbWF0aW9uKHRoaXMsIFwiSU5WSU5DSUJMRVwiIC8qIElOVklOQ0lCTEUgKi8sIG51bGwsIGZ1bmN0aW9uIChhbmltKSB7XHJcbiAgICAgICAgICAgIF90aGlzLl9pc0ludmluY2libGUgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBUYW5rT2JqZWN0LnByb3RvdHlwZS5jcmVhdGVCdWxsZXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGFua0xldmVsIDwgMiAmJiB0aGlzLl9idWxsZXRzLmxlbmd0aCA+PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy50YW5rTGV2ZWwgPCA0ICYmIHRoaXMuX2J1bGxldHMubGVuZ3RoID49IDIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcG9zaXRpb247XHJcbiAgICAgICAgdmFyIHRhbmtTcHJpdGUgPSBTUFJUSUVfREVGLlRBTktbdGhpcy50YW5rQ29sb3JdW3RoaXMudGFua0xldmVsXVt0aGlzLmRpcmVjdGlvbl1bdGhpcy5zcHJpdGVQb3NpdGlvbl07XHJcbiAgICAgICAgdmFyIGJ1bGxldFNwcml0ZSA9IFNQUlRJRV9ERUYuQlVMTEVUW3RoaXMuZGlyZWN0aW9uXTtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ1cFwiIC8qIHVwICovOlxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeDogdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5nZXRNaWRkbGUodGFua1Nwcml0ZSwgYnVsbGV0U3ByaXRlLCB0aGlzLmRpcmVjdGlvbiksXHJcbiAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5wb3NpdGlvbi55XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJyaWdodFwiIC8qIHJpZ2h0ICovOlxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeDogdGhpcy5wb3NpdGlvbi54ICsgdGFua1Nwcml0ZS5zaXplLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IHRoaXMucG9zaXRpb24ueSArIHRoaXMuZ2V0TWlkZGxlKHRhbmtTcHJpdGUsIGJ1bGxldFNwcml0ZSwgdGhpcy5kaXJlY3Rpb24pXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJkb3duXCIgLyogZG93biAqLzpcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IHRoaXMucG9zaXRpb24ueCArIHRoaXMuZ2V0TWlkZGxlKHRhbmtTcHJpdGUsIGJ1bGxldFNwcml0ZSwgdGhpcy5kaXJlY3Rpb24pLFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IHRoaXMucG9zaXRpb24ueSArIHRhbmtTcHJpdGUuc2l6ZS5oZWlnaHRcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImxlZnRcIiAvKiBsZWZ0ICovOlxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeDogdGhpcy5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IHRoaXMucG9zaXRpb24ueSArIHRoaXMuZ2V0TWlkZGxlKHRhbmtTcHJpdGUsIGJ1bGxldFNwcml0ZSwgdGhpcy5kaXJlY3Rpb24pXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBidWxsZXRTcGVlZDtcclxuICAgICAgICBpZiAodGhpcy50YW5rTGV2ZWwgPT0gMCkge1xyXG4gICAgICAgICAgICBidWxsZXRTcGVlZCA9IEJVTExFVF9TTE9XO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnRhbmtMZXZlbCA8IDQpIHtcclxuICAgICAgICAgICAgYnVsbGV0U3BlZWQgPSBCVUxMRVRfRkFTVDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGJ1bGxldCA9IG5ldyBCdWxsZXRPYmplY3QodGhpcy5fZ2FtZSwgdGhpcywgcG9zaXRpb24sIHRoaXMuZGlyZWN0aW9uLCBidWxsZXRTcGVlZCwgR3VpZC5uZXdHdWlkKCkpO1xyXG4gICAgICAgIHRoaXMuX2dhbWUuaW5zZXJ0T2JqZWN0KGJ1bGxldCk7XHJcbiAgICAgICAgdGhpcy5fYnVsbGV0cy5wdXNoKGJ1bGxldC5pZCk7XHJcbiAgICB9O1xyXG4gICAgVGFua09iamVjdC5wcm90b3R5cGUucmVtb3ZlQnVsbGV0ID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgdmFyIGZvdW5kID0gdGhpcy5fYnVsbGV0cy5maW5kKGZ1bmN0aW9uIChidWxsZXQpIHsgcmV0dXJuIGJ1bGxldCA9PT0gaWQ7IH0pO1xyXG4gICAgICAgIHZhciBpZHggPSB0aGlzLl9idWxsZXRzLmluZGV4T2YoZm91bmQpO1xyXG4gICAgICAgIGlmIChpZHggPiAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLl9idWxsZXRzLnNwbGljZShpZHgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvLyNlbmRyZWdpb25cclxuICAgIFRhbmtPYmplY3QucHJvdG90eXBlLmdldE1pZGRsZSA9IGZ1bmN0aW9uIChwYXJlbnQsIGNoaWxkLCBkaXJlY3Rpb24pIHtcclxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBcInVwXCIgLyogdXAgKi8gfHwgZGlyZWN0aW9uID09PSBcImRvd25cIiAvKiBkb3duICovKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnQuc2l6ZS53aWR0aCAvIDIgLSBjaGlsZC5zaXplLndpZHRoIC8gMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnQuc2l6ZS5oZWlnaHQgLyAyIC0gY2hpbGQuc2l6ZS5oZWlnaHQgLyAyO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gVGFua09iamVjdDtcclxufShNb3ZpbmdPYmplY3QpKTtcclxuZXhwb3J0IGRlZmF1bHQgVGFua09iamVjdDtcclxuIiwiaW1wb3J0IFNQUlRJRV9ERUYgZnJvbSBcIi4vU3ByaXRlL1Nwcml0ZURlZmluaXRpb25cIjtcclxuZXhwb3J0IHZhciBNQVhfRlBTID0gNjA7XHJcbmV4cG9ydCB2YXIgRFJBV0lOR19DT05TVCA9IHtcclxuICAgIGNvbG9yczoge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IFwiIzAwMDAwMFwiLFxyXG4gICAgICAgIGJhY2tncm91bmRfZnJhbWU6IFwiIzk0OTQ5NFwiLFxyXG4gICAgfSxcclxuICAgIHNpemVzOiB7XHJcbiAgICAgICAgZnJhbWU6IHtcclxuICAgICAgICAgICAgbGVmdDogMTYsXHJcbiAgICAgICAgICAgIHRvcDogMTAsXHJcbiAgICAgICAgICAgIGJvdHRvbTogMTAsXHJcbiAgICAgICAgICAgIHJpZ2h0OiAzMlxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkZWJ1Zzoge1xyXG4gICAgICAgIGZvbnQ6IHtcclxuICAgICAgICAgICAgc2l6ZTogMTIsXHJcbiAgICAgICAgICAgIGZvbnQ6ICdzYW4tc2VyaWYnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG52YXIgUmVuZGVyZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBSZW5kZXJlcihnYW1lLCBjYW52YXMsIHNwcml0ZVNyYykge1xyXG4gICAgICAgIHRoaXMuX2ZwcyA9IHtcclxuICAgICAgICAgICAgZnBzSW50ZXJ2YWw6IDEwMDAgLyBNQVhfRlBTLFxyXG4gICAgICAgICAgICBub3c6IHBlcmZvcm1hbmNlLm5vdygpLFxyXG4gICAgICAgICAgICB0aGVuOiBwZXJmb3JtYW5jZS5ub3coKSxcclxuICAgICAgICAgICAgZWxhcHNlZDogMFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGNhbnZhcyA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgJ2NhbnZhcyBpcyBudWxsIG9yIHVuZGVmaW5lZCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2NhbnZhcyA9IGNhbnZhcztcclxuICAgICAgICBpZiAoZ2FtZSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgJ2dhbWUgaXMgbnVsbCBvciB1bmRlZmluZWQnO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9nYW1lID0gZ2FtZTtcclxuICAgICAgICB0aGlzLmluaXRTY3JlZW4oKTtcclxuICAgICAgICB0aGlzLmxvYWRTcHJpdGUoc3ByaXRlU3JjKTtcclxuICAgIH1cclxuICAgIFJlbmRlcmVyLnByb3RvdHlwZS5sb2FkU3ByaXRlID0gZnVuY3Rpb24gKHNyYykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgX3RoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9zcHJpdGUuc3JjID0gc3JjO1xyXG4gICAgfTtcclxuICAgIFJlbmRlcmVyLnByb3RvdHlwZS5pbml0U2NyZWVuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuX2NhbnZhcy53aWR0aCA9IDYwMDtcclxuICAgICAgICB0aGlzLl9jYW52YXMuaGVpZ2h0ID0gNjAwO1xyXG4gICAgfTtcclxuICAgIFJlbmRlcmVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkgeyBfdGhpcy5yZW5kZXIoKTsgfSk7XHJcbiAgICAgICAgdmFyIGZwcyA9IHRoaXMuX2ZwcztcclxuICAgICAgICBmcHMubm93ID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgZnBzLmVsYXBzZWQgPSBmcHMubm93IC0gZnBzLnRoZW47XHJcbiAgICAgICAgaWYgKGZwcy5lbGFwc2VkID4gZnBzLmZwc0ludGVydmFsKSB7XHJcbiAgICAgICAgICAgIGZwcy50aGVuID0gZnBzLm5vdyAtIChmcHMuZWxhcHNlZCAlIGZwcy5mcHNJbnRlcnZhbCk7XHJcbiAgICAgICAgICAgIC8vIHByb2Nlc3MgbW92ZSBhY3Rpb25cclxuICAgICAgICAgICAgLy8gbWFpbiB0YW5rIG1vdmVzXHJcbiAgICAgICAgICAgIHZhciBtYWluVGFua18xID0gdGhpcy5fZ2FtZS5tYWluVGFuaztcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2dhbWUuaXNUYW5rTW92ZVJlYWR5KSB7XHJcbiAgICAgICAgICAgICAgICBtYWluVGFua18xLm1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBvdGhlciBvYmplY3RzXHJcbiAgICAgICAgICAgIHZhciBvYmplY3RzID0gdGhpcy5fZ2FtZS5nZXRPYmplY3RzKCk7XHJcbiAgICAgICAgICAgIGlmIChvYmplY3RzKSB7XHJcbiAgICAgICAgICAgICAgICBvYmplY3RzLmZvckVhY2goZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAob2JqZWN0Lm9iamVjdFR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkJVTExFVFwiIC8qIEJVTExFVCAqLzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC5tb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkFOSU1BVElPTlwiIC8qIEFOSU1BVElPTiAqLzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhbmltYXRpb24gPSBvYmplY3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYW5pbWF0aW9uLmV4cGlyZVRpbWUgPCBfdGhpcy5fZnBzLm5vdykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5leHBpcmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbmltYXRpb24uYW5pbWF0aW9uVHlwZSA9PT0gXCJJTlZJTkNJQkxFXCIgLyogSU5WSU5DSUJMRSAqLykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0YW5rU2l6ZSA9IF90aGlzLmdldFNwcml0ZURhdGEoX3RoaXMuX2dhbWUubWFpblRhbmspLnNpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLmFuaW1hdGlvblBvaW50ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBtYWluVGFua18xLnBvc2l0aW9uLnggKyB0YW5rU2l6ZS53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IG1haW5UYW5rXzEucG9zaXRpb24ueSArIHRhbmtTaXplLmhlaWdodCAvIDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLm5leHRTcHJpdGVQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gc3RhcnQgZHJhd2luZ1xyXG4gICAgICAgICAgICAvLyBnZXQgY29udGV4dFxyXG4gICAgICAgICAgICB2YXIgY3R4ID0gdGhpcy5fY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgICAgIC8vIGNsZWFyIHNjcmVlblxyXG4gICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGN0eC5jYW52YXMud2lkdGgsIGN0eC5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICAgICAgLy8gZHJhdyBiYWNrZ3JvdW5kc1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kKGN0eCk7XHJcbiAgICAgICAgICAgIC8vIGRyYXcgZnJhbWVcclxuICAgICAgICAgICAgdGhpcy5kcmF3RnJhbWUoY3R4KTtcclxuICAgICAgICAgICAgLy8gZHJhdyBvYmplY3RzXHJcbiAgICAgICAgICAgIHRoaXMuZHJhd09iamVjdHMoY3R4LCB0aGlzLl9nYW1lLmdldE9iamVjdHMoKSk7XHJcbiAgICAgICAgICAgIC8vIGRyYXcgZGVidWcgY291bnRlclxyXG4gICAgICAgICAgICBpZiAodGhpcy5fZ2FtZS5kZWJ1Zykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3RGVidWdDb3VudGVyKGN0eCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgUmVuZGVyZXIucHJvdG90eXBlLmRyYXdCYWNrZ3JvdW5kID0gZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IERSQVdJTkdfQ09OU1QuY29sb3JzLmJhY2tncm91bmQ7XHJcbiAgICAgICAgY3R4LmZpbGxSZWN0KERSQVdJTkdfQ09OU1Quc2l6ZXMuZnJhbWUubGVmdCwgRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS50b3AsIGN0eC5jYW52YXMud2lkdGggLSAoRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS5sZWZ0ICsgRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS5yaWdodCksIGN0eC5jYW52YXMuaGVpZ2h0IC0gKERSQVdJTkdfQ09OU1Quc2l6ZXMuZnJhbWUudG9wICsgRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS5ib3R0b20pKTtcclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfTtcclxuICAgIFJlbmRlcmVyLnByb3RvdHlwZS5kcmF3RnJhbWUgPSBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gRFJBV0lOR19DT05TVC5jb2xvcnMuYmFja2dyb3VuZF9mcmFtZTtcclxuICAgICAgICAvLyB0b3BcclxuICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgY3R4LmNhbnZhcy53aWR0aCwgRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS50b3ApO1xyXG4gICAgICAgIC8vIGxlZnRcclxuICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS5sZWZ0LCBjdHguY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgLy8gYm90dG9tXHJcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIGN0eC5jYW52YXMuaGVpZ2h0IC0gRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS5ib3R0b20sIGN0eC5jYW52YXMud2lkdGgsIERSQVdJTkdfQ09OU1Quc2l6ZXMuZnJhbWUuYm90dG9tKTtcclxuICAgICAgICAvLyByaWdodFxyXG4gICAgICAgIGN0eC5maWxsUmVjdChjdHguY2FudmFzLndpZHRoIC0gRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS5yaWdodCwgMCwgRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS5yaWdodCwgY3R4LmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9O1xyXG4gICAgUmVuZGVyZXIucHJvdG90eXBlLmRyYXdPYmplY3RzID0gZnVuY3Rpb24gKGN0eCwgb2JqZWN0cykge1xyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYmplY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBvYmplY3QgPSBvYmplY3RzW2ldO1xyXG4gICAgICAgICAgICB2YXIgc3ByaXRlID0gdGhpcy5nZXRTcHJpdGVEYXRhKG9iamVjdCk7XHJcbiAgICAgICAgICAgIGlmIChzcHJpdGUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLl9zcHJpdGUsIHNwcml0ZS5wb3NpdGlvbi54LCBzcHJpdGUucG9zaXRpb24ueSwgc3ByaXRlLnNpemUud2lkdGgsIHNwcml0ZS5zaXplLmhlaWdodCwgRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS5sZWZ0ICsgb2JqZWN0LnBvc2l0aW9uLngsIERSQVdJTkdfQ09OU1Quc2l6ZXMuZnJhbWUudG9wICsgb2JqZWN0LnBvc2l0aW9uLnksIHNwcml0ZS5zaXplLndpZHRoLCBzcHJpdGUuc2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9nYW1lLmRlYnVnKSB7XHJcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnI0ZGMDAwMCc7XHJcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlUmVjdChEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lLmxlZnQgKyBvYmplY3QucG9zaXRpb24ueCwgRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS50b3AgKyBvYmplY3QucG9zaXRpb24ueSwgc3ByaXRlLnNpemUud2lkdGgsIHNwcml0ZS5zaXplLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdUZXh0KGN0eCwgXCJcIiArIG9iamVjdC5pZCwge1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IERSQVdJTkdfQ09OU1Quc2l6ZXMuZnJhbWUubGVmdCArIG9iamVjdC5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IERSQVdJTkdfQ09OU1Quc2l6ZXMuZnJhbWUudG9wICsgb2JqZWN0LnBvc2l0aW9uLnkgLSAxLFxyXG4gICAgICAgICAgICAgICAgfSwgc3ByaXRlLnNpemUud2lkdGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFJlbmRlcmVyLnByb3RvdHlwZS5kcmF3RGVidWdDb3VudGVyID0gZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgICAgIHZhciB0YW5rID0gdGhpcy5fZ2FtZS5tYWluVGFuaztcclxuICAgICAgICBpZiAodGFuayAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd1RleHQoY3R4LCBcIk1BSU4gVEFOSzogVEFOS19cIiArIHRhbmsudGFua0NvbG9yICsgXCJfXCIgKyB0YW5rLnRhbmtMZXZlbCArIFwiKFwiICsgdGFuay5wb3NpdGlvbi54ICsgXCIsIFwiICsgdGFuay5wb3NpdGlvbi55ICsgXCIsIFwiICsgdGFuay5kaXJlY3Rpb24udG9TdHJpbmcoKSArIFwiKVwiLCB7IHg6IDAsIHk6IDE1IH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kcmF3VGV4dChjdHgsIFwiTUFJTiBUQU5LOiBOT1QgRk9VTkRcIiwgeyB4OiAwLCB5OiAxNSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGZwcyA9ICgxMDAwIC8gdGhpcy5fZnBzLmVsYXBzZWQpLnRvRml4ZWQoMikgKyBcImZwcyBcIjtcclxuICAgICAgICB0aGlzLmRyYXdUZXh0KGN0eCwgZnBzLCB7IHg6IGN0eC5jYW52YXMud2lkdGggLSAoY3R4Lm1lYXN1cmVUZXh0KGZwcykud2lkdGggKiAxLjM1KSwgeTogMTUgfSk7XHJcbiAgICAgICAgdmFyIGtleVN0YXRlID0gdGhpcy5fZ2FtZS5rZXlTdGF0ZTtcclxuICAgICAgICB0aGlzLmRyYXdUZXh0KGN0eCwgXCJTcGFjZTogXCIgKyAoa2V5U3RhdGUuU3BhY2UgPyAnVCcgOiAnRicpLCB7IHg6IDAsIHk6IGN0eC5jYW52YXMuaGVpZ2h0IH0pO1xyXG4gICAgICAgIHRoaXMuZHJhd1RleHQoY3R4LCBcIkFycm93TGVmdDogXCIgKyAoa2V5U3RhdGUuQXJyb3dMZWZ0ID8gJ1QnIDogJ0YnKSwgeyB4OiAwLCB5OiBjdHguY2FudmFzLmhlaWdodCAtIDE1IH0pO1xyXG4gICAgICAgIHRoaXMuZHJhd1RleHQoY3R4LCBcIkFycm93RG93bjogXCIgKyAoa2V5U3RhdGUuQXJyb3dEb3duID8gJ1QnIDogJ0YnKSwgeyB4OiAwLCB5OiBjdHguY2FudmFzLmhlaWdodCAtIDMwIH0pO1xyXG4gICAgICAgIHRoaXMuZHJhd1RleHQoY3R4LCBcIkFycm93UmlnaHQ6IFwiICsgKGtleVN0YXRlLkFycm93UmlnaHQgPyAnVCcgOiAnRicpLCB7IHg6IDAsIHk6IGN0eC5jYW52YXMuaGVpZ2h0IC0gNDUgfSk7XHJcbiAgICAgICAgdGhpcy5kcmF3VGV4dChjdHgsIFwiQXJyb3dVcDogXCIgKyAoa2V5U3RhdGUuQXJyb3dVcCA/ICdUJyA6ICdGJyksIHsgeDogMCwgeTogY3R4LmNhbnZhcy5oZWlnaHQgLSA2MCB9KTtcclxuICAgICAgICB0aGlzLmRyYXdUZXh0KGN0eCwgXCJbSUtleVN0YXRlXVwiLCB7IHg6IDAsIHk6IGN0eC5jYW52YXMuaGVpZ2h0IC0gNzUgfSk7XHJcbiAgICB9O1xyXG4gICAgUmVuZGVyZXIucHJvdG90eXBlLmRyYXdUZXh0ID0gZnVuY3Rpb24gKGN0eCwgdGV4dCwgcG9zaXRpb24sIG1heFdpZHRoKSB7XHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICBjdHguZm9udCA9IERSQVdJTkdfQ09OU1QuZGVidWcuZm9udC5zaXplICsgXCJweCBcIiArIERSQVdJTkdfQ09OU1QuZGVidWcuZm9udC5mb250O1xyXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICd3aGl0ZSc7XHJcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDI7XHJcbiAgICAgICAgY3R4LnN0cm9rZVRleHQodGV4dCwgcG9zaXRpb24ueCwgcG9zaXRpb24ueSwgbWF4V2lkdGgpO1xyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAnYmxhY2snO1xyXG4gICAgICAgIGN0eC5maWxsVGV4dCh0ZXh0LCBwb3NpdGlvbi54LCBwb3NpdGlvbi55LCBtYXhXaWR0aCk7XHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH07XHJcbiAgICAvLyNyZWdpb24gcHVibGljIG1ldGhvZHNcclxuICAgIC8qKlxyXG4gICAgICogRmluZCBzcHJpdGUgZGF0YSBmb3IgZ2l2ZW4gb2JqZWN0XHJcbiAgICAgKiBAcGFyYW0gb2JqZWN0IGZvdW5kIHNwcml0ZSBkZWZpbml0aW9uXHJcbiAgICAgKi9cclxuICAgIFJlbmRlcmVyLnByb3RvdHlwZS5nZXRTcHJpdGVEYXRhID0gZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgICAgIHN3aXRjaCAob2JqZWN0Lm9iamVjdFR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIlRBTktcIiAvKiBUQU5LICovOlxyXG4gICAgICAgICAgICAgICAgdmFyIHRhbmsgPSBvYmplY3Q7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gU1BSVElFX0RFRi5UQU5LW3RhbmsudGFua0NvbG9yXVt0YW5rLnRhbmtMZXZlbF1bdGFuay5kaXJlY3Rpb25dW3Rhbmsuc3ByaXRlUG9zaXRpb25dO1xyXG4gICAgICAgICAgICBjYXNlIFwiQlVMTEVUXCIgLyogQlVMTEVUICovOlxyXG4gICAgICAgICAgICAgICAgdmFyIGJ1bGxldCA9IG9iamVjdDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBTUFJUSUVfREVGLkJVTExFVFtidWxsZXQuZGlyZWN0aW9uXTtcclxuICAgICAgICAgICAgY2FzZSBcIkFOSU1BVElPTlwiIC8qIEFOSU1BVElPTiAqLzpcclxuICAgICAgICAgICAgICAgIHZhciBhbmltYXRpb24gPSBvYmplY3Q7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gU1BSVElFX0RFRi5BTklNQVRJT05bYW5pbWF0aW9uLmFuaW1hdGlvblR5cGVdW2FuaW1hdGlvbi5zcHJpdGVQb3NpdGlvbl07XHJcbiAgICAgICAgICAgIGNhc2UgXCJCTE9DS1wiIC8qIEJMT0NLICovOlxyXG4gICAgICAgICAgICAgICAgdmFyIGJsb2NrID0gb2JqZWN0O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFNQUlRJRV9ERUYuQkxPQ0tbYmxvY2suYmxvY2tUeXBlXVtibG9jay5zcHJpdGVQb3NpdGlvbl07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogVGVzdHMgdHdvIG9iamVjdHMgYXJlIGNvbGxpc2lvbnMgKHJlY3RhbmdsZSBjb2xsaXNpb24gdGVzdClcclxuICAgICAqIEBwYXJhbSBvYmplY3QxIGZpcnN0IG9iamVjdFxyXG4gICAgICogQHBhcmFtIHNwcml0ZTEgZmlyc3Qgb2JqZWN0J3Mgc3ByaXRlIGRhdGEgZm9yIHNpemVcclxuICAgICAqIEBwYXJhbSBvYmplY3QyIHNlY29uZCBvYmplY3RcclxuICAgICAqIEBwYXJhbSBzcHJpdGUyIHNlY29uZCBvYmplY3QncyBzcHJpdGUgZGF0YSBmb3Igc2l6ZVxyXG4gICAgICovXHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUucmVjdGFuZ2xlQ29sbGlzaW9uVGVzdCA9IGZ1bmN0aW9uIChvYmplY3QxLCBzcHJpdGUxLCBvYmplY3QyLCBzcHJpdGUyKSB7XHJcbiAgICAgICAgaWYgKG9iamVjdDEucG9zaXRpb24ueCArIHNwcml0ZTEuc2l6ZS53aWR0aCA+PSBvYmplY3QyLnBvc2l0aW9uLnggJiZcclxuICAgICAgICAgICAgb2JqZWN0MS5wb3NpdGlvbi54IDw9IG9iamVjdDIucG9zaXRpb24ueCArIHNwcml0ZTIuc2l6ZS53aWR0aCAmJlxyXG4gICAgICAgICAgICBvYmplY3QxLnBvc2l0aW9uLnkgKyBzcHJpdGUxLnNpemUuaGVpZ2h0ID49IG9iamVjdDIucG9zaXRpb24ueSAmJlxyXG4gICAgICAgICAgICBvYmplY3QxLnBvc2l0aW9uLnkgPD0gb2JqZWN0Mi5wb3NpdGlvbi55ICsgc3ByaXRlMi5zaXplLmhlaWdodCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBUZXN0IG9iamVjdCBpcyB2aXNpYmxlXHJcbiAgICAgKiBAcGFyYW0gb2JqZWN0IG9iamVjdCBmb3IgdGVzdFxyXG4gICAgICogQHBhcmFtIHNwcml0ZSBvYmplY3QncyBzcHJpdGUgZGF0YSBmb3Igc2l6ZVxyXG4gICAgICovXHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUudGVzdFZpc2liaWxpdHkgPSBmdW5jdGlvbiAob2JqZWN0LCBzcHJpdGUpIHtcclxuICAgICAgICB2YXIgY3R4ID0gdGhpcy5fY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgaWYgKG9iamVjdC5wb3NpdGlvbi54ICsgc3ByaXRlLnNpemUud2lkdGggPD0gY3R4LmNhbnZhcy53aWR0aCAtIERSQVdJTkdfQ09OU1Quc2l6ZXMuZnJhbWUucmlnaHQgJiZcclxuICAgICAgICAgICAgb2JqZWN0LnBvc2l0aW9uLnggPj0gRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS5sZWZ0ICYmXHJcbiAgICAgICAgICAgIG9iamVjdC5wb3NpdGlvbi55ICsgc3ByaXRlLnNpemUuaGVpZ2h0IDw9IGN0eC5jYW52YXMuaGVpZ2h0IC0gRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS5ib3R0b20gJiZcclxuICAgICAgICAgICAgb2JqZWN0LnBvc2l0aW9uLnkgPj0gRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS50b3ApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFJlbmRlcmVyLnByb3RvdHlwZS5yYW5kb21Qb2ludCA9IGZ1bmN0aW9uIChzaXplKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgeDogdGhpcy5nZXRSYW5kb21SYW5nZShEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lLmxlZnQsIHRoaXMuX2NhbnZhcy53aWR0aCAtIERSQVdJTkdfQ09OU1Quc2l6ZXMuZnJhbWUucmlnaHQgLSBzaXplLndpZHRoKSxcclxuICAgICAgICAgICAgeTogdGhpcy5nZXRSYW5kb21SYW5nZShEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lLnRvcCwgdGhpcy5fY2FudmFzLmhlaWdodCAtIERSQVdJTkdfQ09OU1Quc2l6ZXMuZnJhbWUuYm90dG9tIC0gc2l6ZS5oZWlnaHQpLFxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgUmVuZGVyZXIucHJvdG90eXBlLmdldFJhbmRvbVJhbmdlID0gZnVuY3Rpb24gKG1pbiwgbWF4KSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIENhbGN1bGF0ZSBhbmQgcmV0dXJuIFotSW5kZXggZm9yIHJlbmRlclxyXG4gICAgICogMDogV2F0ZXIgQmxvY2tcclxuICAgICAqIDE6IFRhbmtzLCBCcmVha2FibGUgQmxvY2tzXHJcbiAgICAgKiAyOiBJbnZpbmNpYmxlIEFuaW1hdGlvbiwgQnVsbGV0c1xyXG4gICAgICogMzogQnVzaFxyXG4gICAgICogNDogRXhwbG9kZSBBbmltYXRpb25zLCBTY29yZSBBbmltYXRpb25zLCBTcGF3bmluZyBBbmltYXRpb25cclxuICAgICAqIDU6IFN5c3RlbSBTcHJpdGVzKEdhbWUgT3Zlci4uLiBldGMpXHJcbiAgICAgKiBAcGFyYW0gb2JqZWN0IG9iamVjdCBmb3IgY2FsY3VsYXRlXHJcbiAgICAgKi9cclxuICAgIFJlbmRlcmVyLnByb3RvdHlwZS5nZXRPYmplY3RaSW5kZXggPSBmdW5jdGlvbiAob2JqZWN0KSB7XHJcbiAgICAgICAgc3dpdGNoIChvYmplY3Qub2JqZWN0VHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiQkxPQ0tcIiAvKiBCTE9DSyAqLzpcclxuICAgICAgICAgICAgICAgIHZhciBibG9jayA9IG9iamVjdDtcclxuICAgICAgICAgICAgICAgIGlmIChibG9jay5ibG9ja1R5cGUgPT09IFwiV0FURVJcIiAvKiBXQVRFUiAqLykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoYmxvY2suYmxvY2tUeXBlID09PSBcIkJVU0hcIiAvKiBCVVNIICovKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcIlRBTktcIiAvKiBUQU5LICovOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgIGNhc2UgXCJBTklNQVRJT05cIiAvKiBBTklNQVRJT04gKi86XHJcbiAgICAgICAgICAgICAgICB2YXIgYW5pbWF0aW9uID0gb2JqZWN0O1xyXG4gICAgICAgICAgICAgICAgaWYgKGFuaW1hdGlvbi5hbmltYXRpb25UeXBlID09PSBcIklOVklOQ0lCTEVcIiAvKiBJTlZJTkNJQkxFICovKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gNDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcIkJVTExFVFwiIC8qIEJVTExFVCAqLzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAyO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gUmVuZGVyZXI7XHJcbn0oKSk7XHJcbmV4cG9ydCBkZWZhdWx0IFJlbmRlcmVyO1xyXG4iLCI7XHJcbnZhciBTUFJUSUVfREVGID0ge1xyXG4gICAgVEFOSzoge1xyXG4gICAgICAgIFlFTExPVzogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMCwgeTogMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMiwgeTogMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNjQsIHk6IDAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogOTYsIHk6IDAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDEyOCwgeTogMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxNjAsIHk6IDAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxOTIsIHk6IDAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjI0LCB5OiAwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDAsIHk6IDMyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyLCB5OiAzMiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNjQsIHk6IDMyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDk2LCB5OiAzMiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTI4LCB5OiAzMiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxNjAsIHk6IDMyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTkyLCB5OiAzMiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyMjQsIHk6IDMyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDAsIHk6IDY0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyLCB5OiA2NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNjQsIHk6IDY0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDk2LCB5OiA2NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTI4LCB5OiA2NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxNjAsIHk6IDY0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTkyLCB5OiA2NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyMjQsIHk6IDY0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDAsIHk6IDk2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyLCB5OiA5NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNjQsIHk6IDk2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDk2LCB5OiA5NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTI4LCB5OiA5NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxNjAsIHk6IDk2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTkyLCB5OiA5NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyMjQsIHk6IDk2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgR1JFRU46IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDAsIHk6IDI1NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMiwgeTogMjU2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA2NCwgeTogMjU2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDk2LCB5OiAyNTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDEyOCwgeTogMjU2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE2MCwgeTogMjU2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTkyLCB5OiAyNTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjI0LCB5OiAyNTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMCwgeTogMjg4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyLCB5OiAyODggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDY0LCB5OiAyODggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogOTYsIHk6IDI4OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTI4LCB5OiAyODggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTYwLCB5OiAyODggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxOTIsIHk6IDI4OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyMjQsIHk6IDI4OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAwLCB5OiAzMjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIsIHk6IDMyMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNjQsIHk6IDMyMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA5NiwgeTogMzIwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxMjgsIHk6IDMyMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxNjAsIHk6IDMyMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE5MiwgeTogMzIwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDIyNCwgeTogMzIwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDAsIHk6IDM1MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMiwgeTogMzUyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA2NCwgeTogMzUyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDk2LCB5OiAzNTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDEyOCwgeTogMzUyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE2MCwgeTogMzUyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTkyLCB5OiAzNTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjI0LCB5OiAzNTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBXSElURTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjU2LCB5OiAwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI4OCwgeTogMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIwLCB5OiAwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM1MiwgeTogMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzg0LCB5OiAwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQxNiwgeTogMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ0OCwgeTogMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0ODAsIHk6IDAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjU2LCB5OiAzMiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyODgsIHk6IDMyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMjAsIHk6IDMyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM1MiwgeTogMzIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM4NCwgeTogMzIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDE2LCB5OiAzMiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ0OCwgeTogMzIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDgwLCB5OiAzMiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyNTYsIHk6IDY0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI4OCwgeTogNjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyMCwgeTogNjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzUyLCB5OiA2NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzg0LCB5OiA2NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0MTYsIHk6IDY0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDQ4LCB5OiA2NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0ODAsIHk6IDY0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI1NiwgeTogOTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjg4LCB5OiA5NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIwLCB5OiA5NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzNTIsIHk6IDk2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzODQsIHk6IDk2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQxNiwgeTogOTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0NDgsIHk6IDk2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ4MCwgeTogOTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBNQUdFTlRBOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyNTYsIHk6IDI1NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyODgsIHk6IDI1NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIwLCB5OiAyNTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzUyLCB5OiAyNTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM4NCwgeTogMjU2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQxNiwgeTogMjU2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDQ4LCB5OiAyNTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDgwLCB5OiAyNTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjU2LCB5OiAyODggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjg4LCB5OiAyODggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyMCwgeTogMjg4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM1MiwgeTogMjg4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzODQsIHk6IDI4OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0MTYsIHk6IDI4OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ0OCwgeTogMjg4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ4MCwgeTogMjg4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI1NiwgeTogMzIwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI4OCwgeTogMzIwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMjAsIHk6IDMyMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzNTIsIHk6IDMyMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzg0LCB5OiAzMjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDE2LCB5OiAzMjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0NDgsIHk6IDMyMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0ODAsIHk6IDMyMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyNTYsIHk6IDM1MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyODgsIHk6IDM1MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIwLCB5OiAzNTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzUyLCB5OiAzNTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM4NCwgeTogMzUyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQxNiwgeTogMzUyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDQ4LCB5OiAzNTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDgwLCB5OiAzNTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIEJVTExFVDoge1xyXG4gICAgICAgIHVwOiB7IHBvc2l0aW9uOiB7IHg6IDY0NiwgeTogMjA0IH0sIHNpemU6IHsgd2lkdGg6IDYsIGhlaWdodDogOCB9IH0sXHJcbiAgICAgICAgbGVmdDogeyBwb3NpdGlvbjogeyB4OiA2NjAsIHk6IDIwNCB9LCBzaXplOiB7IHdpZHRoOiA4LCBoZWlnaHQ6IDYgfSB9LFxyXG4gICAgICAgIGRvd246IHsgcG9zaXRpb246IHsgeDogNjc4LCB5OiAyMDQgfSwgc2l6ZTogeyB3aWR0aDogNiwgaGVpZ2h0OiA4IH0gfSxcclxuICAgICAgICByaWdodDogeyBwb3NpdGlvbjogeyB4OiA2OTIsIHk6IDIwNCB9LCBzaXplOiB7IHdpZHRoOiA4LCBoZWlnaHQ6IDYgfSB9XHJcbiAgICB9LFxyXG4gICAgQkxPQ0s6IHtcclxuICAgICAgICBCUklDSzogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA1MTIsIHk6IDAgfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgSVJPTjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA1MTIsIHk6IDMyIH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFdBVEVSOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDUxMiwgeTogOTYgfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNTQ0LCB5OiA5NiB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBCVVNIOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDU0NCwgeTogNjQgfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICBBTklNQVRJT046IHtcclxuICAgICAgICBFWFBMT1NJT05fU01BTEw6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNTE4LCB5OiAyNjAgfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDIyLCBoZWlnaHQ6IDIyIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNTQ0LCB5OiAyNTggfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDMwLCBoZWlnaHQ6IDI4IH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNTc2LCB5OiAyNTYgfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgRVhQTE9TSU9OX0xBUkdFOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDYxMCwgeTogMjU4IH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiA1OCwgaGVpZ2h0OiA1OCB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDY2OCwgeTogMjU2IH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiA2OCwgaGVpZ2h0OiA2NCB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIElOVklOQ0lCTEU6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNTEyLCB5OiAyODggfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNTQ0LCB5OiAyODggfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIFNQQVdOOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDUxOCwgeTogMTk4IH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAxOCwgaGVpZ2h0OiAxOCB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDU0OCwgeTogMTk2IH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAyMiwgaGVpZ2h0OiAyMiB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDU3OCwgeTogMTk0IH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAyNiwgaGVpZ2h0OiAyNiB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDYwOCwgeTogMTkyIH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAzMCwgaGVpZ2h0OiAzMCB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBTQ09SRV8xMDA6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNTgwLCB5OiAzMjggfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDI2LCBoZWlnaHQ6IDE0IH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIFNDT1JFXzIwMDogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA2MTAsIHk6IDMyOCB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMjYsIGhlaWdodDogMTQgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgU0NPUkVfMzAwOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDY0MiwgeTogMzI4IH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAyNiwgaGVpZ2h0OiAxNCB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBTQ09SRV80MDA6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNjc0LCB5OiAzMjggfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDI2LCBoZWlnaHQ6IDE0IH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIFNDT1JFXzUwMDogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA3MDYsIHk6IDMyOCB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMjYsIGhlaWdodDogMTQgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICBJVEVNOiB7fVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTUFJUSUVfREVGO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBcIi4uL2Rpc3QvanMvc3ByaXRlLnBuZ1wiOyIsImV4cG9ydCBmdW5jdGlvbiBkZWVwQ2xvbmUob2JqKSB7XHJcbiAgICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH1cclxuICAgIHZhciByZXN1bHQgPSBBcnJheS5pc0FycmF5KG9iaikgPyBbXSA6IHt9O1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IE9iamVjdC5rZXlzKG9iaik7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIGtleSA9IF9hW19pXTtcclxuICAgICAgICByZXN1bHRba2V5XSA9IGRlZXBDbG9uZShvYmpba2V5XSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbnZhciBHdWlkID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gR3VpZCgpIHtcclxuICAgIH1cclxuICAgIEd1aWQubmV3R3VpZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gJ3h4eHh4eHh4LXh4eHgteHh4eC14eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbiAoYykge1xyXG4gICAgICAgICAgICB2YXIgciA9IE1hdGgucmFuZG9tKCkgKiAxNiB8IDAsIHYgPSBjID09ICd4JyA/IHIgOiAociAmIDB4MyB8IDB4OCk7XHJcbiAgICAgICAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gR3VpZDtcclxufSgpKTtcclxuZXhwb3J0IHsgR3VpZCB9O1xyXG4iLCJpbXBvcnQgR2FtZSBmcm9tIFwiLi9HYW1lL0dhbWVcIjtcclxudmFyIHNwcml0ZUltYWdlID0gcmVxdWlyZSgnLi9SZW5kZXIvU3ByaXRlL3Nwcml0ZS5wbmcnKTtcclxudmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xyXG4vLyBpbml0IGdhbWVcclxudmFyIGdhbWUgPSBuZXcgR2FtZShjYW52YXMsICcuL2pzL3Nwcml0ZS5wbmcnKTtcclxuLy8jcmVnaW9uIERFQlVHXHJcbnZhciBkZWJ1Z19idG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlYnVnXCIpO1xyXG52YXIgbWFpblRhbmtfbGV2ZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5UYW5rX2xldmVsXCIpO1xyXG52YXIgbWFpblRhbmtfY29sb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5UYW5rX2NvbG9yXCIpO1xyXG52YXIgbWFpblRhbmtfaW52aW5jaWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblRhbmtfaW52aW5jaWJsZVwiKTtcclxudmFyIG1haW5UYW5rX2hpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblRhbmtfaGl0XCIpO1xyXG52YXIgb2JqZWN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib2JqZWN0c1wiKTtcclxuZGVidWdfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2KSB7XHJcbiAgICBpZiAoZGVidWdfYnRuLmdldEF0dHJpYnV0ZSgndmFsdWUnKSA9PSAndHJ1ZScpIHtcclxuICAgICAgICBnYW1lLmRlYnVnID0gZmFsc2U7XHJcbiAgICAgICAgZGVidWdfYnRuLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnZmFsc2UnKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGRlYnVnX2J0bi5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykgPT0gJ2ZhbHNlJykge1xyXG4gICAgICAgIGdhbWUuZGVidWcgPSB0cnVlO1xyXG4gICAgICAgIGRlYnVnX2J0bi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ3RydWUnKTtcclxuICAgIH1cclxuICAgIGRlYnVnX2J0bi5pbm5lclRleHQgPSBcImRlYnVnID0gXCIgKyBkZWJ1Z19idG4uZ2V0QXR0cmlidXRlKCd2YWx1ZScpO1xyXG59KTtcclxubWFpblRhbmtfY29sb3IudmFsdWUgPSBnYW1lLm1haW5UYW5rLnRhbmtDb2xvci50b1N0cmluZygpO1xyXG5tYWluVGFua19sZXZlbC52YWx1ZSA9IGdhbWUubWFpblRhbmsudGFua0xldmVsLnRvU3RyaW5nKCk7XHJcbm1haW5UYW5rX2xldmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkgeyB1cGRhdGVUYW5rKCk7IH0pO1xyXG5tYWluVGFua19jb2xvci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHsgdXBkYXRlVGFuaygpOyB9KTtcclxubWFpblRhbmtfaW52aW5jaWJsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkgeyBnYW1lLm1haW5UYW5rLmludmluY2libGUoKTsgfSk7XHJcbm1haW5UYW5rX2hpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkgeyBnYW1lLm1haW5UYW5rLmhpdCgpOyB9KTtcclxudmFyIG9iamVjdEZpbmRlciA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiIVwiKTtcclxuICAgIG9iamVjdHMuaW5uZXJIVE1MID1cclxuICAgICAgICBcIlxcblxcdDx0cj5cXG5cXHRcXHQ8dGQ+ekluZGV4PC90ZD5cXG5cXHRcXHQ8dGQ+aWQ8L3RkPlxcblxcdFxcdDx0ZD50eXBlPC90ZD5cXG5cXHRcXHQ8dGQ+cG9zaXRpb248L3RkPlxcblxcdDwvdHI+XFxuXFx0XCI7XHJcbiAgICBnYW1lLmdldE9iamVjdHMoKS5mb3JFYWNoKGZ1bmN0aW9uIChvYmplY3QpIHtcclxuICAgICAgICBvYmplY3RzLmlubmVySFRNTCA9IG9iamVjdHMuaW5uZXJIVE1MICtcclxuICAgICAgICAgICAgKFwiXFxuXFx0XFx0PHRyPlxcblxcdFxcdFxcdDx0ZD5cIiArIGdhbWUuZ2V0T2JqZWN0WkluZGV4KG9iamVjdCkgKyBcIjwvdGQ+XFxuXFx0XFx0XFx0PHRkPlwiICsgb2JqZWN0LmlkICsgXCI8L3RkPlxcblxcdFxcdFxcdDx0ZD5cIiArIG9iamVjdC5vYmplY3RUeXBlICsgXCI8L3RkPlxcblxcdFxcdFxcdDx0ZD5beDogXCIgKyBvYmplY3QucG9zaXRpb24ueCArIFwiLCB5OiBcIiArIG9iamVjdC5wb3NpdGlvbi55ICsgXCJdPC90ZD5cXG5cXHRcXHQ8L3RyPlxcblxcdFxcdFwiKTtcclxuICAgIH0pO1xyXG59LCAxMDApO1xyXG5mdW5jdGlvbiB1cGRhdGVUYW5rKCkge1xyXG4gICAgZ2FtZS5tYWluVGFuay50YW5rQ29sb3IgPSBtYWluVGFua19jb2xvci52YWx1ZTtcclxuICAgIGdhbWUubWFpblRhbmsudGFua0xldmVsID0gcGFyc2VJbnQobWFpblRhbmtfbGV2ZWwudmFsdWUpO1xyXG59XHJcbi8vI2VuZHJlZ2lvblxyXG4iXSwic291cmNlUm9vdCI6IiJ9