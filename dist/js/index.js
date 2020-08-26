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
    };
    Game.prototype.removeObject = function (object) {
        if (this._gameData == null && this._gameData.objects == null) {
            return;
        }
        var idx = this._gameData.objects.indexOf(object);
        this._gameData.objects.splice(idx, 1);
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
            if (object.objectType === "BULLET" /* BULLET */) {
                if (item.id === object.parentId) {
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
     * Find sprite data for given object (Port of Renderer.testVisibility)
     * @param object found sprite definition
     */
    Game.prototype.getSprite = function (object) {
        return this._renderer.getSpriteData(object);
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
    BlockObject.prototype.hit = function (eventPoint) {
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
                object.hit(_this.position);
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
function updateTank() {
    game.mainTank.tankColor = mainTank_color.value;
    game.mainTank.tankLevel = parseInt(mainTank_level.value);
}
//#endregion


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvR2FtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9JbnB1dE1hbmFnZS9FS2V5cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9PYmplY3QvQW5pbWF0aW9uT2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL09iamVjdC9CbG9ja09iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9PYmplY3QvQnVsbGV0T2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL09iamVjdC9FQW5pbWF0aW9uVHlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9PYmplY3QvR2FtZU9iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9PYmplY3QvTW92aW5nT2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL09iamVjdC9UYW5rT2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9SZW5kZXIvUmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlbmRlci9TcHJpdGUvU3ByaXRlRGVmaW5pdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVuZGVyL1Nwcml0ZS9zcHJpdGUucG5nIiwid2VicGFjazovLy8uL3NyYy9VdGlscy9VdGlscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEM7QUFDRztBQUNBO0FBQ1c7QUFDRDtBQUNLO0FBQ2I7QUFDeEM7QUFDUDtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsd0RBQVE7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9FQUFvRSx5QkFBeUIsRUFBRTtBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDBEQUFVO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsd0VBQWlCO0FBQzlDO0FBQ0EsNEJBQTRCLCtEQUFlO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0Qsd0JBQXdCO0FBQ2hGLDhCQUE4QiwyREFBVyw2QkFBNkIsdUJBQXVCO0FBQzdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULDhCQUE4QiwyREFBVywyQkFBMkIsdUJBQXVCO0FBQzNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULDhCQUE4QiwyREFBVyw2QkFBNkIsdUJBQXVCO0FBQzdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULDhCQUE4QiwyREFBVywyQkFBMkIsdUJBQXVCO0FBQzNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsNEVBQWlCO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsMERBQVU7QUFD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RjtBQUNBO0FBQ0EscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckYscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckY7QUFDQTtBQUNBLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRixxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRjtBQUNBO0FBQ0EscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckYscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckY7QUFDQTtBQUNBLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGO0FBQ0E7QUFDQSxxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRixxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckYscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckY7QUFDQTtBQUNBLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGLHFCQUFxQixZQUFZLGlCQUFpQixTQUFTLHdCQUF3QixFQUFFO0FBQ3JGO0FBQ0E7QUFDQSxxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRixxQkFBcUIsWUFBWSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRjtBQUNBO0FBQ0EscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckYscUJBQXFCLFlBQVksaUJBQWlCLFNBQVMsd0JBQXdCLEVBQUU7QUFDckY7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsYUFBYSxZQUFZLGlCQUFpQixTQUFTLHNCQUFzQixFQUFFO0FBQzNFLGVBQWUsWUFBWSxpQkFBaUIsU0FBUyxzQkFBc0IsRUFBRTtBQUM3RSxlQUFlLFlBQVksaUJBQWlCLFNBQVMsc0JBQXNCLEVBQUU7QUFDN0UsZ0JBQWdCLFlBQVksaUJBQWlCLFNBQVMsc0JBQXNCO0FBQzVFLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsZUFBZTtBQUMxQyx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsZ0JBQWdCO0FBQzNDLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixnQkFBZ0I7QUFDM0MsdUJBQXVCO0FBQ3ZCLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixnQkFBZ0I7QUFDM0MsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGdCQUFnQjtBQUMzQyx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsaUJBQWlCO0FBQzVDLHVCQUF1QjtBQUN2QixhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsaUJBQWlCO0FBQzVDLHVCQUF1QjtBQUN2QixhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsaUJBQWlCO0FBQzVDLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUMsdUJBQXVCO0FBQ3ZCLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUMsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGlCQUFpQjtBQUM1Qyx1QkFBdUI7QUFDdkIsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLGlCQUFpQjtBQUM1Qyx1QkFBdUI7QUFDdkIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUMsdUJBQXVCO0FBQ3ZCLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUMsdUJBQXVCO0FBQ3ZCLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUMsdUJBQXVCO0FBQ3ZCLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUMsdUJBQXVCO0FBQ3ZCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsaUJBQWlCO0FBQzVDLHVCQUF1QjtBQUN2QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGlCQUFpQjtBQUM1Qyx1QkFBdUI7QUFDdkIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUMsdUJBQXVCO0FBQ3ZCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsaUJBQWlCO0FBQzVDLHVCQUF1QjtBQUN2QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGlCQUFpQjtBQUM1Qyx1QkFBdUI7QUFDdkIsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDZSx5RUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDdGExQjtBQUFlLHNGQUF1QixFOzs7Ozs7Ozs7Ozs7QUNBdEM7QUFBQTtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxnQkFBZ0I7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDO0FBQ2U7Ozs7Ozs7Ozs7Ozs7QUN0QmhCO0FBQUE7QUFBK0I7QUFDL0Isa0JBQWtCLG1CQUFPLENBQUMsa0VBQTRCO0FBQ3REO0FBQ0E7QUFDQSxlQUFlLGtEQUFJO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSx1REFBdUQsY0FBYyxFQUFFO0FBQ3ZFLHVEQUF1RCxjQUFjLEVBQUU7QUFDdkUsMkRBQTJELDRCQUE0QixFQUFFO0FBQ3pGLG9EQUFvRCxxQkFBcUIsRUFBRTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSBcIi4uL1JlbmRlci9SZW5kZXJlclwiO1xyXG5pbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiLi9PYmplY3QvR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgVGFua09iamVjdCBmcm9tIFwiLi9PYmplY3QvVGFua09iamVjdFwiO1xyXG5pbXBvcnQgeyBFS2V5c1RvRURpcmVjdGlvbiB9IGZyb20gXCIuL0lucHV0TWFuYWdlL0VLZXlzXCI7XHJcbmltcG9ydCBBbmltYXRpb25PYmplY3QgZnJvbSBcIi4vT2JqZWN0L0FuaW1hdGlvbk9iamVjdFwiO1xyXG5pbXBvcnQgeyBBbmltYXRpb25EZWZhdWx0cyB9IGZyb20gXCIuL09iamVjdC9FQW5pbWF0aW9uVHlwZVwiO1xyXG5pbXBvcnQgQmxvY2tPYmplY3QgZnJvbSBcIi4vT2JqZWN0L0Jsb2NrT2JqZWN0XCI7XHJcbmV4cG9ydCB2YXIgTUFJTl9UQU5LX0lEID0gJ01BSU4nO1xyXG52YXIgR2FtZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEdhbWUoc2NyZWVuLCBzcHJpdGVTcmMsIGRlYnVnKSB7XHJcbiAgICAgICAgdGhpcy5kZWJ1ZyA9IGRlYnVnO1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyID0gbmV3IFJlbmRlcmVyKHRoaXMsIHNjcmVlbiwgc3ByaXRlU3JjKTtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemVJbnB1dHMoKTtcclxuICAgICAgICBzY3JlZW4uZm9jdXMoKTtcclxuICAgICAgICB0aGlzLm5ld0dhbWUoMCAvKiBQVkUgKi8sIG51bGwsIFtdKTtcclxuICAgICAgICAvLyB0aGlzLnNob3dUaXRsZSgpO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEdhbWUucHJvdG90eXBlLCBcImtleVN0YXRlXCIsIHtcclxuICAgICAgICAvLyNyZWdpb24gZ2V0dGVyIGFuZCBzZXR0ZXJcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2tleVN0YXRlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHYW1lLnByb3RvdHlwZSwgXCJtYWluVGFua1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBmb3VuZCA9IHRoaXMuZmluZE9iamVjdEJ5SWQoTUFJTl9UQU5LX0lEKTtcclxuICAgICAgICAgICAgaWYgKGZvdW5kLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmb3VuZFswXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEdhbWUucHJvdG90eXBlLCBcImlzVGFua01vdmVSZWFkeVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBtYWluVGFuayA9IHRoaXMubWFpblRhbms7XHJcbiAgICAgICAgICAgIGlmIChtYWluVGFuayA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCh0aGlzLl9rZXlTdGF0ZS5BcnJvd1VwID09PSB0cnVlICYmIG1haW5UYW5rLmRpcmVjdGlvbiA9PSBcInVwXCIgLyogdXAgKi8pIHx8XHJcbiAgICAgICAgICAgICAgICAodGhpcy5fa2V5U3RhdGUuQXJyb3dSaWdodCA9PT0gdHJ1ZSAmJiBtYWluVGFuay5kaXJlY3Rpb24gPT0gXCJyaWdodFwiIC8qIHJpZ2h0ICovKSB8fFxyXG4gICAgICAgICAgICAgICAgKHRoaXMuX2tleVN0YXRlLkFycm93RG93biA9PT0gdHJ1ZSAmJiBtYWluVGFuay5kaXJlY3Rpb24gPT0gXCJkb3duXCIgLyogZG93biAqLykgfHxcclxuICAgICAgICAgICAgICAgICh0aGlzLl9rZXlTdGF0ZS5BcnJvd0xlZnQgPT09IHRydWUgJiYgbWFpblRhbmsuZGlyZWN0aW9uID09IFwibGVmdFwiIC8qIGxlZnQgKi8pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIC8vI2VuZHJlZ2lvblxyXG4gICAgLy8jcmVnaW9uIHB1YmxpYyBtZXRob2RzXHJcbiAgICAvLyNyZWdpb24gbWVudSBtZXRob2RzXHJcbiAgICBHYW1lLnByb3RvdHlwZS5zaG93VGl0bGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgR2FtZS5wcm90b3R5cGUuc2hvd01lbnUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgLy8jZW5kcmVnaW9uXHJcbiAgICBHYW1lLnByb3RvdHlwZS5sb2cgPSBmdW5jdGlvbiAobXNnKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGVidWcpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJbXCIgKyBwZXJmb3JtYW5jZS5ub3coKSArIFwiXSBcIiArIG1zZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8vI3JlZ2lvbiBnYW1lIG9iamVjdCBtZXRob2RzXHJcbiAgICBHYW1lLnByb3RvdHlwZS5pbnNlcnRPYmplY3QgPSBmdW5jdGlvbiAob2JqZWN0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2dhbWVEYXRhID09IG51bGwgfHwgdGhpcy5fZ2FtZURhdGEub2JqZWN0cyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZ2FtZURhdGEub2JqZWN0cy5wdXNoKG9iamVjdCk7XHJcbiAgICB9O1xyXG4gICAgR2FtZS5wcm90b3R5cGUucmVtb3ZlT2JqZWN0ID0gZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9nYW1lRGF0YSA9PSBudWxsICYmIHRoaXMuX2dhbWVEYXRhLm9iamVjdHMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBpZHggPSB0aGlzLl9nYW1lRGF0YS5vYmplY3RzLmluZGV4T2Yob2JqZWN0KTtcclxuICAgICAgICB0aGlzLl9nYW1lRGF0YS5vYmplY3RzLnNwbGljZShpZHgsIDEpO1xyXG4gICAgfTtcclxuICAgIEdhbWUucHJvdG90eXBlLmdldE9iamVjdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIGlmICgoKF9hID0gdGhpcy5fZ2FtZURhdGEpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5vYmplY3RzKSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2FtZURhdGEub2JqZWN0cztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgR2FtZS5wcm90b3R5cGUuZmluZE9iamVjdEJ5SWQgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICBpZiAodGhpcy5fZ2FtZURhdGEub2JqZWN0cyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dhbWVEYXRhLm9iamVjdHMuZmlsdGVyKGZ1bmN0aW9uIChvYmplY3QpIHsgcmV0dXJuIG9iamVjdC5pZCA9PT0gaWQ7IH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBHYW1lLnByb3RvdHlwZS5jb2xsaXNpb25UZXN0ID0gZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGZvdW5kID0gW107XHJcbiAgICAgICAgaWYgKHRoaXMuX2dhbWVEYXRhID09IG51bGwgfHwgdGhpcy5fZ2FtZURhdGEub2JqZWN0cyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmb3VuZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG9iamVjdFNwcml0ZSA9IHRoaXMuX3JlbmRlcmVyLmdldFNwcml0ZURhdGEob2JqZWN0KTtcclxuICAgICAgICB0aGlzLl9nYW1lRGF0YS5vYmplY3RzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0ub2JqZWN0VHlwZSA9PT0gXCJBTklNQVRJT05cIiAvKiBBTklNQVRJT04gKi8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAob2JqZWN0Lm9iamVjdFR5cGUgPT09IFwiQlVMTEVUXCIgLyogQlVMTEVUICovKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5pZCA9PT0gb2JqZWN0LnBhcmVudElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBzcHJpdGVEYXRhID0gX3RoaXMuX3JlbmRlcmVyLmdldFNwcml0ZURhdGEoaXRlbSk7XHJcbiAgICAgICAgICAgIHZhciB0ZXN0ID0gX3RoaXMuX3JlbmRlcmVyLnJlY3RhbmdsZUNvbGxpc2lvblRlc3Qob2JqZWN0LCBvYmplY3RTcHJpdGUsIGl0ZW0sIHNwcml0ZURhdGEpO1xyXG4gICAgICAgICAgICBpZiAoaXRlbSAhPSBvYmplY3QgJiYgdGVzdCkge1xyXG4gICAgICAgICAgICAgICAgZm91bmQucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBmb3VuZDtcclxuICAgIH07XHJcbiAgICBHYW1lLnByb3RvdHlwZS5zdGFydEFuaW1hdGlvbiA9IGZ1bmN0aW9uICh0YXJnZXQsIGFuaW1hdGlvblR5cGUsIGFuaW1hdGlvblZhbHVlLCBjYWxsYmFjaykge1xyXG4gICAgICAgIHZhciBhbmltYXRpb25Qb2ludDtcclxuICAgICAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgR2FtZU9iamVjdCkge1xyXG4gICAgICAgICAgICB2YXIgb2JqZWN0ID0gdGFyZ2V0O1xyXG4gICAgICAgICAgICB2YXIgc2l6ZSA9IHRoaXMuZ2V0U3ByaXRlKG9iamVjdCkuc2l6ZTtcclxuICAgICAgICAgICAgYW5pbWF0aW9uUG9pbnQgPSB7XHJcbiAgICAgICAgICAgICAgICB4OiBvYmplY3QucG9zaXRpb24ueCArIHNpemUud2lkdGggLyAyLFxyXG4gICAgICAgICAgICAgICAgeTogb2JqZWN0LnBvc2l0aW9uLnkgKyBzaXplLmhlaWdodCAvIDJcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvblBvaW50ID0gdGFyZ2V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYW5pbWF0aW9uVmFsdWUgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvblZhbHVlID0gQW5pbWF0aW9uRGVmYXVsdHNbYW5pbWF0aW9uVHlwZV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBhbmltYXRpb24gPSBuZXcgQW5pbWF0aW9uT2JqZWN0KHRoaXMsIGFuaW1hdGlvblR5cGUsIGFuaW1hdGlvblBvaW50LCBhbmltYXRpb25WYWx1ZS5kdXJhdGlvbiwgYW5pbWF0aW9uVmFsdWUuZnJhbWVSYXRlLCBhbmltYXRpb25WYWx1ZS5sb29wLCBjYWxsYmFjayk7XHJcbiAgICAgICAgdGhpcy5pbnNlcnRPYmplY3QoYW5pbWF0aW9uKTtcclxuICAgIH07XHJcbiAgICAvLyNyZWdpb24gcmVuZGVyZXIgcG9ydGluZyBtZXRob2RzXHJcbiAgICAvKipcclxuICAgICAqIFRlc3Qgb2JqZWN0IGlzIHZpc2libGUgKFBvcnQgb2YgUmVuZGVyZXIudGVzdFZpc2liaWxpdHkpXHJcbiAgICAgKiBAcGFyYW0gb2JqZWN0IG9iamVjdCBmb3IgdGVzdFxyXG4gICAgICogQHBhcmFtIHNwcml0ZSBvYmplY3QncyBzcHJpdGUgZGF0YSBmb3Igc2l6ZVxyXG4gICAgICovXHJcbiAgICBHYW1lLnByb3RvdHlwZS50ZXN0VmlzaWJpbGl0eSA9IGZ1bmN0aW9uIChvYmplY3QsIHNwcml0ZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXJlci50ZXN0VmlzaWJpbGl0eShvYmplY3QsIHNwcml0ZSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBGaW5kIHNwcml0ZSBkYXRhIGZvciBnaXZlbiBvYmplY3QgKFBvcnQgb2YgUmVuZGVyZXIudGVzdFZpc2liaWxpdHkpXHJcbiAgICAgKiBAcGFyYW0gb2JqZWN0IGZvdW5kIHNwcml0ZSBkZWZpbml0aW9uXHJcbiAgICAgKi9cclxuICAgIEdhbWUucHJvdG90eXBlLmdldFNwcml0ZSA9IGZ1bmN0aW9uIChvYmplY3QpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVyZXIuZ2V0U3ByaXRlRGF0YShvYmplY3QpO1xyXG4gICAgfTtcclxuICAgIC8vI2VuZHJlZ2lvblxyXG4gICAgLy8jZW5kcmVnaW9uXHJcbiAgICBHYW1lLnByb3RvdHlwZS5uZXdHYW1lID0gZnVuY3Rpb24gKGdhbWVUeXBlLCBsZXZlbCwgb2JqZWN0cykge1xyXG4gICAgICAgIHRoaXMuX2dhbWVEYXRhID0ge1xyXG4gICAgICAgICAgICBnYW1lVHlwZTogZ2FtZVR5cGUsXHJcbiAgICAgICAgICAgIGxldmVsRGF0YTogbGV2ZWwsXHJcbiAgICAgICAgICAgIG9iamVjdHM6IG9iamVjdHNcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY3JlYXRlTWFpblRhbmsodGhpcy5fcmVuZGVyZXIucmFuZG9tUG9pbnQoeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSksIFwidXBcIiAvKiB1cCAqLywgXCJZRUxMT1dcIiAvKiBZRUxMT1cgKi8sIDApO1xyXG4gICAgICAgIHRoaXMuaW5zZXJ0T2JqZWN0KG5ldyBCbG9ja09iamVjdCh0aGlzLCBcIkJSSUNLXCIgLyogQlJJQ0sgKi8sIHsgeDogMyAqIDMyLCB5OiA1ICogMzIgfSwge1xyXG4gICAgICAgICAgICBib3R0b21MZWZ0OiB0cnVlLFxyXG4gICAgICAgICAgICBib3R0b21SaWdodDogdHJ1ZSxcclxuICAgICAgICAgICAgdG9wTGVmdDogdHJ1ZSxcclxuICAgICAgICAgICAgdG9wUmlnaHQ6IHRydWVcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgdGhpcy5pbnNlcnRPYmplY3QobmV3IEJsb2NrT2JqZWN0KHRoaXMsIFwiSVJPTlwiIC8qIElST04gKi8sIHsgeDogMyAqIDMyLCB5OiA2ICogMzIgfSwge1xyXG4gICAgICAgICAgICBib3R0b21MZWZ0OiB0cnVlLFxyXG4gICAgICAgICAgICBib3R0b21SaWdodDogdHJ1ZSxcclxuICAgICAgICAgICAgdG9wTGVmdDogdHJ1ZSxcclxuICAgICAgICAgICAgdG9wUmlnaHQ6IHRydWVcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgdGhpcy5pbnNlcnRPYmplY3QobmV3IEJsb2NrT2JqZWN0KHRoaXMsIFwiV0FURVJcIiAvKiBXQVRFUiAqLywgeyB4OiAzICogMzIsIHk6IDcgKiAzMiB9LCB7XHJcbiAgICAgICAgICAgIGJvdHRvbUxlZnQ6IHRydWUsXHJcbiAgICAgICAgICAgIGJvdHRvbVJpZ2h0OiB0cnVlLFxyXG4gICAgICAgICAgICB0b3BMZWZ0OiB0cnVlLFxyXG4gICAgICAgICAgICB0b3BSaWdodDogdHJ1ZVxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICB0aGlzLmluc2VydE9iamVjdChuZXcgQmxvY2tPYmplY3QodGhpcywgXCJCVVNIXCIgLyogQlVTSCAqLywgeyB4OiAzICogMzIsIHk6IDggKiAzMiB9LCB7XHJcbiAgICAgICAgICAgIGJvdHRvbUxlZnQ6IHRydWUsXHJcbiAgICAgICAgICAgIGJvdHRvbVJpZ2h0OiB0cnVlLFxyXG4gICAgICAgICAgICB0b3BMZWZ0OiB0cnVlLFxyXG4gICAgICAgICAgICB0b3BSaWdodDogdHJ1ZVxyXG4gICAgICAgIH0pKTtcclxuICAgIH07XHJcbiAgICAvLyNlbmRyZWdpb25cclxuICAgIC8vI3JlZ2lvbiBwcml2YXRlIG1ldGhvZHNcclxuICAgIEdhbWUucHJvdG90eXBlLmluaXRpYWxpemVJbnB1dHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLl9rZXlTdGF0ZSA9IHt9O1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbiAoZXYpIHtcclxuICAgICAgICAgICAgdmFyIG1haW5UYW5rID0gX3RoaXMubWFpblRhbms7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZXYuY29kZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkFycm93VXBcIiAvKiBhcnJvd191cCAqLzpcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCIgLyogYXJyb3dfcmlnaHQgKi86XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dEb3duXCIgLyogYXJyb3dfZG93biAqLzpcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJBcnJvd0xlZnRcIiAvKiBhcnJvd19sZWZ0ICovOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYWluVGFuaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluVGFuay5kaXJlY3Rpb24gPSBFS2V5c1RvRURpcmVjdGlvbihldi5jb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMucmVzZXRBcnJvd0lucHV0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuX2tleVN0YXRlW2V2LmNvZGVdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJTcGFjZVwiIC8qIHNwYWNlYmFyICovOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYWluVGFuaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluVGFuay5maXJlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9rZXlTdGF0ZVtldi5jb2RlXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiRXNjYXBlXCIgLyogZXNjICovOlxyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9rZXlTdGF0ZVtldi5jb2RlXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uIChldikge1xyXG4gICAgICAgICAgICB2YXIgY29kZSA9IGV2LmNvZGU7XHJcbiAgICAgICAgICAgIF90aGlzLl9rZXlTdGF0ZVtjb2RlXSA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEdhbWUucHJvdG90eXBlLnJlc2V0QXJyb3dJbnB1dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLl9rZXlTdGF0ZS5BcnJvd1VwID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fa2V5U3RhdGUuQXJyb3dSaWdodCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2tleVN0YXRlLkFycm93RG93biA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2tleVN0YXRlLkFycm93TGVmdCA9IGZhbHNlO1xyXG4gICAgfTtcclxuICAgIEdhbWUucHJvdG90eXBlLmNyZWF0ZU1haW5UYW5rID0gZnVuY3Rpb24gKHBvc2l0aW9uLCBkaXJlY3Rpb24sIHRhbmtDb2xvciwgdGFua0xldmVsKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubWFpblRhbmspIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVPYmplY3QodGhpcy5tYWluVGFuayk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW5zZXJ0T2JqZWN0KG5ldyBUYW5rT2JqZWN0KHRoaXMsIHBvc2l0aW9uLCBkaXJlY3Rpb24sIHRhbmtDb2xvciwgdGFua0xldmVsLCBNQUlOX1RBTktfSUQpKTtcclxuICAgICAgICB0aGlzLm1haW5UYW5rLmludmluY2libGUoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gR2FtZTtcclxufSgpKTtcclxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcclxuIiwiZXhwb3J0IGZ1bmN0aW9uIEVLZXlzVG9FRGlyZWN0aW9uKGtleXMpIHtcclxuICAgIHN3aXRjaCAoa2V5cykge1xyXG4gICAgICAgIGNhc2UgXCJBcnJvd1VwXCIgLyogYXJyb3dfdXAgKi86XHJcbiAgICAgICAgICAgIHJldHVybiBcInVwXCIgLyogdXAgKi87XHJcbiAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIiAvKiBhcnJvd19yaWdodCAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIFwicmlnaHRcIiAvKiByaWdodCAqLztcclxuICAgICAgICBjYXNlIFwiQXJyb3dEb3duXCIgLyogYXJyb3dfZG93biAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIFwiZG93blwiIC8qIGRvd24gKi87XHJcbiAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiIC8qIGFycm93X2xlZnQgKi86XHJcbiAgICAgICAgICAgIHJldHVybiBcImxlZnRcIiAvKiBsZWZ0ICovO1xyXG4gICAgfVxyXG59XHJcbiIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5pbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiLi9HYW1lT2JqZWN0XCI7XHJcbmltcG9ydCB7IEd1aWQgfSBmcm9tIFwiLi4vLi4vVXRpbHMvVXRpbHNcIjtcclxuaW1wb3J0IFNQUlRJRV9ERUYgZnJvbSBcIi4uLy4uL1JlbmRlci9TcHJpdGUvU3ByaXRlRGVmaW5pdGlvblwiO1xyXG52YXIgQW5pbWF0aW9uT2JqZWN0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEFuaW1hdGlvbk9iamVjdCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEFuaW1hdGlvbk9iamVjdChnYW1lLCBhbmltYXRpb25UeXBlLCBhbmltYXRpb25Qb2ludCwgZHVyYXRpb24sIGZyYW1lUmF0ZSwgbG9vcCwgY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAobG9vcCA9PT0gdm9pZCAwKSB7IGxvb3AgPSBmYWxzZTsgfVxyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGdhbWUsIFwiQU5JTUFUSU9OXCIgLyogQU5JTUFUSU9OICovLCBhbmltYXRpb25Qb2ludCwgR3VpZC5uZXdHdWlkKCkpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuYW5pbWF0aW9uVHlwZSA9IGFuaW1hdGlvblR5cGU7XHJcbiAgICAgICAgX3RoaXMuX2FuaW1hdGlvblBvaW50ID0gYW5pbWF0aW9uUG9pbnQ7XHJcbiAgICAgICAgX3RoaXMuX3Nwcml0ZVBvc2l0aW9uID0gMDtcclxuICAgICAgICBfdGhpcy5fY3VycmVudFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICBfdGhpcy5fZXhwaXJlVGltZSA9IF90aGlzLl9jdXJyZW50VGltZSArIGR1cmF0aW9uO1xyXG4gICAgICAgIF90aGlzLl9mcmFtZUNvdW50ID0gU1BSVElFX0RFRi5BTklNQVRJT05bX3RoaXMuYW5pbWF0aW9uVHlwZV0ubGVuZ3RoO1xyXG4gICAgICAgIF90aGlzLl9mcmFtZVJhdGUgPSBmcmFtZVJhdGU7XHJcbiAgICAgICAgX3RoaXMuX2xvb3AgPSBsb29wO1xyXG4gICAgICAgIF90aGlzLl9jYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgICAgIF90aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFuaW1hdGlvbk9iamVjdC5wcm90b3R5cGUsIFwiYW5pbWF0aW9uUG9pbnRcIiwge1xyXG4gICAgICAgIC8vI3JlZ2lvbiBnZXR0ZXIsIHNldHRlclxyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYW5pbWF0aW9uUG9pbnQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChhbmltYXRpb25Qb2ludCkge1xyXG4gICAgICAgICAgICB0aGlzLl9hbmltYXRpb25Qb2ludCA9IGFuaW1hdGlvblBvaW50O1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFuaW1hdGlvbk9iamVjdC5wcm90b3R5cGUsIFwiZXhwaXJlVGltZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9leHBpcmVUaW1lO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIC8vI2VuZHJlZ2lvblxyXG4gICAgLy8jcmVnaW9uIHB1YmxpYyBtZXRob2RzXHJcbiAgICAvLyBpZ25vcmUgaGl0IGV2ZW50XHJcbiAgICBBbmltYXRpb25PYmplY3QucHJvdG90eXBlLmhpdCA9IGZ1bmN0aW9uICgpIHsgfTtcclxuICAgIEFuaW1hdGlvbk9iamVjdC5wcm90b3R5cGUubmV4dFNwcml0ZVBvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuX2dhbWUubG9nKFwiW1wiICsgdGhpcy5zcHJpdGVQb3NpdGlvbiArIFwiIC8gXCIgKyAodGhpcy5fZnJhbWVDb3VudCAtIDEpICsgXCJdXCIgKyAocGVyZm9ybWFuY2Uubm93KCkgLSB0aGlzLl9jdXJyZW50VGltZSkgKyBcIiA+PSBcIiArIHRoaXMuX2ZyYW1lUmF0ZSk7XHJcbiAgICAgICAgaWYgKHBlcmZvcm1hbmNlLm5vdygpIC0gdGhpcy5fY3VycmVudFRpbWUgPj0gdGhpcy5fZnJhbWVSYXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9zcHJpdGVQb3NpdGlvbiArIDEgPCB0aGlzLl9mcmFtZUNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zcHJpdGVQb3NpdGlvbisrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX2xvb3ApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Nwcml0ZVBvc2l0aW9uID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9zcHJpdGVQb3NpdGlvbjtcclxuICAgIH07XHJcbiAgICBBbmltYXRpb25PYmplY3QucHJvdG90eXBlLmV4cGlyZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLl9nYW1lLmxvZyhcIkFOSU1BVElPTiBcIiArIHRoaXMuaWQgKyBcIiBIQVMgQkVFTiBFWFBJUkVELiAoXCIgKyBwZXJmb3JtYW5jZS5ub3cgKyBcIilcIik7XHJcbiAgICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgICAgICBpZiAodGhpcy5fY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdGhpcy5fY2FsbGJhY2sodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8vI2VuZHJlZ2lvblxyXG4gICAgQW5pbWF0aW9uT2JqZWN0LnByb3RvdHlwZS51cGRhdGVQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgc3ByaXRlRGF0YSA9IHRoaXMuX2dhbWUuZ2V0U3ByaXRlKHRoaXMpLnNpemU7XHJcbiAgICAgICAgdGhpcy5fcG9zaXRvbiA9IHtcclxuICAgICAgICAgICAgeDogdGhpcy5fYW5pbWF0aW9uUG9pbnQueCAtIHNwcml0ZURhdGEud2lkdGggLyAyLFxyXG4gICAgICAgICAgICB5OiB0aGlzLl9hbmltYXRpb25Qb2ludC55IC0gc3ByaXRlRGF0YS5oZWlnaHQgLyAyXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQW5pbWF0aW9uT2JqZWN0O1xyXG59KEdhbWVPYmplY3QpKTtcclxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0aW9uT2JqZWN0O1xyXG4iLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuaW1wb3J0IEdhbWVPYmplY3QgZnJvbSBcIi4vR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBHdWlkIH0gZnJvbSBcIi4uLy4uL1V0aWxzL1V0aWxzXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBCbG9ja1N0YXRlMngyVG80eDQoeDIpIHtcclxuICAgIHZhciB4NCA9IFtcclxuICAgICAgICBbZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2VdLFxyXG4gICAgICAgIFtmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZV0sXHJcbiAgICAgICAgW2ZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlXSxcclxuICAgICAgICBbZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2VdXHJcbiAgICBdO1xyXG4gICAgeDRbMF1bMF0gPSB4Mi50b3BMZWZ0O1xyXG4gICAgeDRbMF1bMV0gPSB4Mi50b3BMZWZ0O1xyXG4gICAgeDRbMV1bMF0gPSB4Mi50b3BMZWZ0O1xyXG4gICAgeDRbMV1bMV0gPSB4Mi50b3BMZWZ0O1xyXG4gICAgeDRbMF1bMl0gPSB4Mi50b3BSaWdodDtcclxuICAgIHg0WzBdWzNdID0geDIudG9wUmlnaHQ7XHJcbiAgICB4NFsxXVsyXSA9IHgyLnRvcFJpZ2h0O1xyXG4gICAgeDRbMV1bM10gPSB4Mi50b3BSaWdodDtcclxuICAgIHg0WzJdWzBdID0geDIuYm90dG9tTGVmdDtcclxuICAgIHg0WzJdWzFdID0geDIuYm90dG9tTGVmdDtcclxuICAgIHg0WzNdWzBdID0geDIuYm90dG9tTGVmdDtcclxuICAgIHg0WzNdWzFdID0geDIuYm90dG9tTGVmdDtcclxuICAgIHg0WzJdWzJdID0geDIuYm90dG9tUmlnaHQ7XHJcbiAgICB4NFsyXVszXSA9IHgyLmJvdHRvbVJpZ2h0O1xyXG4gICAgeDRbM11bMl0gPSB4Mi5ib3R0b21SaWdodDtcclxuICAgIHg0WzNdWzNdID0geDIuYm90dG9tUmlnaHQ7XHJcbiAgICByZXR1cm4geDQ7XHJcbn1cclxudmFyIEJsb2NrT2JqZWN0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEJsb2NrT2JqZWN0LCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gQmxvY2tPYmplY3QoZ2FtZSwgYmxvY2tUeXBlLCBwb3NpdGlvbiwgYmxvY2tTdGF0ZTJ4Mikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGdhbWUsIFwiQkxPQ0tcIiAvKiBCTE9DSyAqLywgcG9zaXRpb24sIEd1aWQubmV3R3VpZCgpKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLmJsb2NrVHlwZSA9IGJsb2NrVHlwZTtcclxuICAgICAgICBfdGhpcy5fYmxvY2tTdGF0ZSA9IEJsb2NrU3RhdGUyeDJUbzR4NChibG9ja1N0YXRlMngyKTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBCbG9ja09iamVjdC5wcm90b3R5cGUuaGl0ID0gZnVuY3Rpb24gKGV2ZW50UG9pbnQpIHtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQmxvY2tPYmplY3Q7XHJcbn0oR2FtZU9iamVjdCkpO1xyXG5leHBvcnQgZGVmYXVsdCBCbG9ja09iamVjdDtcclxuIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbmltcG9ydCBNb3ZpbmdPYmplY3QsIHsgY2FsY3VsYXRlTW92ZSB9IGZyb20gXCIuL01vdmluZ09iamVjdFwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uT2JqZWN0IGZyb20gXCIuL0FuaW1hdGlvbk9iamVjdFwiO1xyXG5leHBvcnQgdmFyIEJVTExFVF9TTE9XID0gNDtcclxuZXhwb3J0IHZhciBCVUxMRVRfRkFTVCA9IDY7XHJcbnZhciBCdWxsZXRPYmplY3QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoQnVsbGV0T2JqZWN0LCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gQnVsbGV0T2JqZWN0KGdhbWUsIHBhcmVudCwgcG9zaXRpb24sIGRpcmVjdGlvbiwgc3BlZWQsIGlkKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZ2FtZSwgXCJCVUxMRVRcIiAvKiBCVUxMRVQgKi8sIHBvc2l0aW9uLCBkaXJlY3Rpb24sIHNwZWVkLCBpZCkgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5fcGFyZW50ID0gcGFyZW50O1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdWxsZXRPYmplY3QucHJvdG90eXBlLCBcInBhcmVudElkXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3BhcmVudC5pZDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBCdWxsZXRPYmplY3QucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgY2hhbmdlZCA9IHRoaXMucG9zaXRpb247XHJcbiAgICAgICAgY2FsY3VsYXRlTW92ZShjaGFuZ2VkLCB0aGlzLl9kaXJlY3Rpb24sIHRoaXMuX3NwZWVkKTtcclxuICAgICAgICB0aGlzLl9nYW1lLmxvZyhcIkJVTExFVCBbXCIgKyB0aGlzLmlkICsgXCJdIE1PVkVEIC0+IFt4OlwiICsgdGhpcy5wb3NpdGlvbi54ICsgXCJdLCB5OltcIiArIHRoaXMucG9zaXRpb24ueSArIFwiXVwiKTtcclxuICAgICAgICB2YXIgdGVzdF92aXNpYmxlID0gdGhpcy5fZ2FtZS50ZXN0VmlzaWJpbGl0eSh0aGlzLCB0aGlzLl9nYW1lLmdldFNwcml0ZSh0aGlzKSk7XHJcbiAgICAgICAgdmFyIHRlc3RfY29sbGlzaW9uID0gdGhpcy5fZ2FtZS5jb2xsaXNpb25UZXN0KHRoaXMpO1xyXG4gICAgICAgIGlmICh0ZXN0X3Zpc2libGUgPT0gZmFsc2UgfHwgdGVzdF9jb2xsaXNpb24ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9nYW1lLmxvZyhcIkJVTExFVCBbXCIgKyB0aGlzLmlkICsgXCJdIEVYUExPREVELlwiKTtcclxuICAgICAgICAgICAgdGhpcy5leHBsb2RlKCk7XHJcbiAgICAgICAgICAgIHRlc3RfY29sbGlzaW9uLmZvckVhY2goZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0LmhpdChfdGhpcy5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBCdWxsZXRPYmplY3QucHJvdG90eXBlLmhpdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmV4cGxvZGUoKTtcclxuICAgIH07XHJcbiAgICBCdWxsZXRPYmplY3QucHJvdG90eXBlLmV4cGxvZGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGFuaW1hdGlvblBvc2l0aW9uO1xyXG4gICAgICAgIHZhciBzaXplID0gdGhpcy5fZ2FtZS5nZXRTcHJpdGUodGhpcykuc2l6ZTtcclxuICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IFwidXBcIiAvKiB1cCAqLyB8fCB0aGlzLmRpcmVjdGlvbiA9PT0gXCJkb3duXCIgLyogZG93biAqLykge1xyXG4gICAgICAgICAgICBhbmltYXRpb25Qb3NpdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgIHg6IHRoaXMucG9zaXRpb24ueCArIHNpemUud2lkdGggLyAyLFxyXG4gICAgICAgICAgICAgICAgeTogdGhpcy5wb3NpdGlvbi55XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBhbmltYXRpb25Qb3NpdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgIHg6IHRoaXMucG9zaXRpb24ueCxcclxuICAgICAgICAgICAgICAgIHk6IHRoaXMucG9zaXRpb24ueSArIHNpemUuaGVpZ2h0IC8gMlxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9nYW1lLmluc2VydE9iamVjdChuZXcgQW5pbWF0aW9uT2JqZWN0KHRoaXMuX2dhbWUsIFwiRVhQTE9TSU9OX1NNQUxMXCIgLyogRVhQTE9TSU9OX1NNQUxMICovLCB0aGlzLnBvc2l0aW9uLCAyMDAsIDIwMCAvIDQpKTtcclxuICAgICAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgfTtcclxuICAgIEJ1bGxldE9iamVjdC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUucmVtb3ZlLmNhbGwodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fcGFyZW50LnJlbW92ZUJ1bGxldCh0aGlzLmlkKTtcclxuICAgICAgICB0aGlzLl9nYW1lLmxvZyhcIkJVTExFVCBbXCIgKyB0aGlzLmlkICsgXCJdIEhBUyBCRUVOIFJFTU9WRUQuXCIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBCdWxsZXRPYmplY3Q7XHJcbn0oTW92aW5nT2JqZWN0KSk7XHJcbmV4cG9ydCBkZWZhdWx0IEJ1bGxldE9iamVjdDtcclxuIiwiO1xyXG4vLyBUT0RPIFVwZGF0ZSBkZWZhdWx0c1xyXG5leHBvcnQgdmFyIEFuaW1hdGlvbkRlZmF1bHRzID0ge1xyXG4gICAgRVhQTE9TSU9OX1NNQUxMOiB7XHJcbiAgICAgICAgZHVyYXRpb246IDIwMCxcclxuICAgICAgICBmcmFtZVJhdGU6IDIwMCAvIDQsXHJcbiAgICAgICAgbG9vcDogZmFsc2VcclxuICAgIH0sXHJcbiAgICBFWFBMT1NJT05fTEFSR0U6IHtcclxuICAgICAgICBkdXJhdGlvbjogMTUwLFxyXG4gICAgICAgIGZyYW1lUmF0ZTogMTUwIC8gMyxcclxuICAgICAgICBsb29wOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIElOVklOQ0lCTEU6IHtcclxuICAgICAgICBkdXJhdGlvbjogMzAwMCxcclxuICAgICAgICBmcmFtZVJhdGU6IDI1LFxyXG4gICAgICAgIGxvb3A6IHRydWVcclxuICAgIH0sXHJcbiAgICBTUEFXTjoge1xyXG4gICAgICAgIGR1cmF0aW9uOiAwLFxyXG4gICAgICAgIGZyYW1lUmF0ZTogMCxcclxuICAgICAgICBsb29wOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIFNDT1JFXzEwMDoge1xyXG4gICAgICAgIGR1cmF0aW9uOiAwLFxyXG4gICAgICAgIGZyYW1lUmF0ZTogMCxcclxuICAgICAgICBsb29wOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIFNDT1JFXzIwMDoge1xyXG4gICAgICAgIGR1cmF0aW9uOiAwLFxyXG4gICAgICAgIGZyYW1lUmF0ZTogMCxcclxuICAgICAgICBsb29wOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIFNDT1JFXzMwMDoge1xyXG4gICAgICAgIGR1cmF0aW9uOiAwLFxyXG4gICAgICAgIGZyYW1lUmF0ZTogMCxcclxuICAgICAgICBsb29wOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIFNDT1JFXzQwMDoge1xyXG4gICAgICAgIGR1cmF0aW9uOiAwLFxyXG4gICAgICAgIGZyYW1lUmF0ZTogMCxcclxuICAgICAgICBsb29wOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIFNDT1JFXzUwMDoge1xyXG4gICAgICAgIGR1cmF0aW9uOiAwLFxyXG4gICAgICAgIGZyYW1lUmF0ZTogMCxcclxuICAgICAgICBsb29wOiBmYWxzZVxyXG4gICAgfVxyXG59O1xyXG4iLCJ2YXIgR2FtZU9iamVjdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEdhbWVPYmplY3QoZ2FtZSwgb2JqZWN0VHlwZSwgcG9zaXRpb24sIGlkLCB2aXNpYmxlKSB7XHJcbiAgICAgICAgaWYgKHZpc2libGUgPT09IHZvaWQgMCkgeyB2aXNpYmxlID0gdHJ1ZTsgfVxyXG4gICAgICAgIHRoaXMuX2dhbWUgPSBnYW1lO1xyXG4gICAgICAgIHRoaXMuX3Zpc2libGUgPSB2aXNpYmxlO1xyXG4gICAgICAgIHRoaXMub2JqZWN0VHlwZSA9IG9iamVjdFR5cGU7XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlUG9zaXRpb24gPSAwO1xyXG4gICAgICAgIGlmIChwb3NpdGlvbiAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fcG9zaXRvbiA9IHBvc2l0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fcG9zaXRvbiA9IHtcclxuICAgICAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgICAgICB5OiAwXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpZCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHYW1lT2JqZWN0LnByb3RvdHlwZSwgXCJwb3NpdGlvblwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9wb3NpdG9uO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAocG9zaXRpb24pIHtcclxuICAgICAgICAgICAgaWYgKHBvc2l0aW9uLnggPD0gMCB8fCBwb3NpdGlvbi55IDw9IDApIHtcclxuICAgICAgICAgICAgICAgIHRocm93ICdwb3NpdGlvbiBjYW5ub3QgYmUgYSBuZWdhdGl2ZSB2YWx1ZSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fcG9zaXRvbiA9IHBvc2l0aW9uO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHYW1lT2JqZWN0LnByb3RvdHlwZSwgXCJzcHJpdGVQb3NpdGlvblwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zcHJpdGVQb3NpdGlvbjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBHYW1lT2JqZWN0LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5fZ2FtZS5yZW1vdmVPYmplY3QodGhpcyk7XHJcbiAgICB9O1xyXG4gICAgR2FtZU9iamVjdC5wcm90b3R5cGUubmV4dFNwcml0ZVBvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZVBvc2l0aW9uID0gdGhpcy5fc3ByaXRlUG9zaXRpb24gKyAxIDw9IDEgPyB0aGlzLl9zcHJpdGVQb3NpdGlvbiArIDEgOiAwO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zcHJpdGVQb3NpdGlvbjtcclxuICAgIH07XHJcbiAgICByZXR1cm4gR2FtZU9iamVjdDtcclxufSgpKTtcclxuZXhwb3J0IGRlZmF1bHQgR2FtZU9iamVjdDtcclxuIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbmltcG9ydCBHYW1lT2JqZWN0IGZyb20gXCIuL0dhbWVPYmplY3RcIjtcclxudmFyIE1vdmluZ09iamVjdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhNb3ZpbmdPYmplY3QsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBNb3ZpbmdPYmplY3QoZ2FtZSwgb2JqZWN0VHlwZSwgcG9zaXRpb24sIGRpcmVjdGlvbiwgc3BlZWQsIGlkKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZ2FtZSwgb2JqZWN0VHlwZSwgcG9zaXRpb24sIGlkKSB8fCB0aGlzO1xyXG4gICAgICAgIGlmIChkaXJlY3Rpb24gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIF90aGlzLl9kaXJlY3Rpb24gPSBkaXJlY3Rpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBfdGhpcy5fZGlyZWN0aW9uID0gXCJ1cFwiIC8qIHVwICovO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfdGhpcy5fc3BlZWQgPSBzcGVlZDtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTW92aW5nT2JqZWN0LnByb3RvdHlwZSwgXCJkaXJlY3Rpb25cIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZGlyZWN0aW9uO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2RpcmVjdGlvbiA9IGRpcmVjdGlvbjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gTW92aW5nT2JqZWN0O1xyXG59KEdhbWVPYmplY3QpKTtcclxuZXhwb3J0IGRlZmF1bHQgTW92aW5nT2JqZWN0O1xyXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlTW92ZShwb3NpdGlvbiwgZGlyZWN0aW9uLCBzcGVlZCkge1xyXG4gICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcclxuICAgICAgICBjYXNlIFwidXBcIiAvKiB1cCAqLzpcclxuICAgICAgICAgICAgcG9zaXRpb24ueSAtPSBzcGVlZDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInJpZ2h0XCIgLyogcmlnaHQgKi86XHJcbiAgICAgICAgICAgIHBvc2l0aW9uLnggKz0gc3BlZWQ7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJkb3duXCIgLyogZG93biAqLzpcclxuICAgICAgICAgICAgcG9zaXRpb24ueSArPSBzcGVlZDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImxlZnRcIiAvKiBsZWZ0ICovOlxyXG4gICAgICAgICAgICBwb3NpdGlvbi54IC09IHNwZWVkO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufVxyXG4iLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuaW1wb3J0IE1vdmluZ09iamVjdCwgeyBjYWxjdWxhdGVNb3ZlIH0gZnJvbSBcIi4vTW92aW5nT2JqZWN0XCI7XHJcbmltcG9ydCBCdWxsZXRPYmplY3QsIHsgQlVMTEVUX1NMT1csIEJVTExFVF9GQVNUIH0gZnJvbSBcIi4vQnVsbGV0T2JqZWN0XCI7XHJcbmltcG9ydCBTUFJUSUVfREVGIGZyb20gXCIuLi8uLi9SZW5kZXIvU3ByaXRlL1Nwcml0ZURlZmluaXRpb25cIjtcclxuaW1wb3J0IHsgR3VpZCwgZGVlcENsb25lIH0gZnJvbSBcIi4uLy4uL1V0aWxzL1V0aWxzXCI7XHJcbmV4cG9ydCB2YXIgVEFOS19TUEVFRCA9IDI7XHJcbnZhciBUYW5rT2JqZWN0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFRhbmtPYmplY3QsIF9zdXBlcik7XHJcbiAgICAvLyNyZWdpb24gY29uc3RydWN0b3JcclxuICAgIGZ1bmN0aW9uIFRhbmtPYmplY3QoZ2FtZSwgcG9zaXRpb24sIGRpcmVjdGlvbiwgdGFua0NvbG9yLCB0YW5rTGV2ZWwsIGlkKSB7XHJcbiAgICAgICAgaWYgKHRhbmtMZXZlbCA9PT0gdm9pZCAwKSB7IHRhbmtMZXZlbCA9IDE7IH1cclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBnYW1lLCBcIlRBTktcIiAvKiBUQU5LICovLCBwb3NpdGlvbiwgZGlyZWN0aW9uLCBUQU5LX1NQRUVELCBpZCkgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5faXNJbnZpbmNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgX3RoaXMuX3RhbmtDb2xvciA9IHRhbmtDb2xvcjtcclxuICAgICAgICBfdGhpcy5fdGFua0xldmVsID0gdGFua0xldmVsO1xyXG4gICAgICAgIF90aGlzLl9idWxsZXRzID0gW107XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRhbmtPYmplY3QucHJvdG90eXBlLCBcInRhbmtDb2xvclwiLCB7XHJcbiAgICAgICAgLy8jZW5kcmVnaW9uXHJcbiAgICAgICAgLy8jcmVnaW9uIGdldHRlciwgc2V0dGVyXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90YW5rQ29sb3I7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyBUT0RPOiBSRU1PVkUgV0hFTiBERVBMT1lcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChjb2xvcikge1xyXG4gICAgICAgICAgICB0aGlzLl90YW5rQ29sb3IgPSBjb2xvcjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVGFua09iamVjdC5wcm90b3R5cGUsIFwidGFua0xldmVsXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RhbmtMZXZlbDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIFRPRE86IFJFTU9WRSBXSEVOIERFUExPWVxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGxldmVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RhbmtMZXZlbCA9IGxldmVsO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIC8vI2VuZHJlZ2lvblxyXG4gICAgLy8jcmVnaW9uIGltcGxlbWVudHMgb2YgTW92aW5nT2JqZWN0XHRcclxuICAgIFRhbmtPYmplY3QucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG9yaWdpbmFsID0gZGVlcENsb25lKHRoaXMucG9zaXRpb24pO1xyXG4gICAgICAgIGNhbGN1bGF0ZU1vdmUodGhpcy5wb3NpdGlvbiwgdGhpcy5fZGlyZWN0aW9uLCB0aGlzLl9zcGVlZCk7XHJcbiAgICAgICAgLy8gdGVzdCBtb3ZlbWVudCBpcyB2YWxpZFxyXG4gICAgICAgIHRoaXMuX2dhbWUubG9nKFwiVEFOSyBbXCIgKyB0aGlzLmlkICsgXCJdIE1PVkVEIC0+IFsgeDogXCIgKyB0aGlzLnBvc2l0aW9uLnggKyBcIiwgeTogXCIgKyB0aGlzLnBvc2l0aW9uLnkgKyBcIiBdXCIpO1xyXG4gICAgICAgIHZhciB0ZXN0X3Zpc2libGUgPSB0aGlzLl9nYW1lLnRlc3RWaXNpYmlsaXR5KHRoaXMsIHRoaXMuX2dhbWUuZ2V0U3ByaXRlKHRoaXMpKTtcclxuICAgICAgICB2YXIgdGVzdF9jb2xsaXNpb24gPSB0aGlzLl9nYW1lLmNvbGxpc2lvblRlc3QodGhpcyk7XHJcbiAgICAgICAgaWYgKCF0ZXN0X3Zpc2libGUgfHwgdGVzdF9jb2xsaXNpb24ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAvLyBpZiBub3QsIHJvbGxiYWNrIG1vdmVtZW50XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24gPSBvcmlnaW5hbDtcclxuICAgICAgICAgICAgdGhpcy5fZ2FtZS5sb2coXCJUQU5LIFtcIiArIHRoaXMuaWQgKyBcIl0gTU9WRVMgLT4gQkxPQ0tFRCEhIFsgeDogXCIgKyB0aGlzLnBvc2l0aW9uLnggKyBcIiwgeTogXCIgKyB0aGlzLnBvc2l0aW9uLnkgKyBcIiBdXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5leHRTcHJpdGVQb3NpdGlvbigpO1xyXG4gICAgfTtcclxuICAgIFRhbmtPYmplY3QucHJvdG90eXBlLmhpdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmICh0aGlzLl9pc0ludmluY2libGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9nYW1lLnN0YXJ0QW5pbWF0aW9uKHRoaXMsIFwiRVhQTE9TSU9OX1NNQUxMXCIgLyogRVhQTE9TSU9OX1NNQUxMICovLCBudWxsLCBmdW5jdGlvbiAoYW5pbWF0aW9uKSB7XHJcbiAgICAgICAgICAgIF90aGlzLl9nYW1lLnN0YXJ0QW5pbWF0aW9uKGFuaW1hdGlvbi5hbmltYXRpb25Qb2ludCwgXCJFWFBMT1NJT05fTEFSR0VcIiAvKiBFWFBMT1NJT05fTEFSR0UgKi8sIG51bGwsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvLyNlbmRyZWdpb25cclxuICAgIC8vI3JlZ2lvbiBwdWJsaWMgbWV0aG9kc1xyXG4gICAgVGFua09iamVjdC5wcm90b3R5cGUuZmlyZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmNyZWF0ZUJ1bGxldCgpO1xyXG4gICAgfTtcclxuICAgIFRhbmtPYmplY3QucHJvdG90eXBlLmludmluY2libGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLl9pc0ludmluY2libGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX2dhbWUuc3RhcnRBbmltYXRpb24odGhpcywgXCJJTlZJTkNJQkxFXCIgLyogSU5WSU5DSUJMRSAqLywgbnVsbCwgZnVuY3Rpb24gKGFuaW0pIHtcclxuICAgICAgICAgICAgX3RoaXMuX2lzSW52aW5jaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFRhbmtPYmplY3QucHJvdG90eXBlLmNyZWF0ZUJ1bGxldCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy50YW5rTGV2ZWwgPCAyICYmIHRoaXMuX2J1bGxldHMubGVuZ3RoID49IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnRhbmtMZXZlbCA8IDQgJiYgdGhpcy5fYnVsbGV0cy5sZW5ndGggPj0gMikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBwb3NpdGlvbjtcclxuICAgICAgICB2YXIgdGFua1Nwcml0ZSA9IFNQUlRJRV9ERUYuVEFOS1t0aGlzLnRhbmtDb2xvcl1bdGhpcy50YW5rTGV2ZWxdW3RoaXMuZGlyZWN0aW9uXVt0aGlzLnNwcml0ZVBvc2l0aW9uXTtcclxuICAgICAgICB2YXIgYnVsbGV0U3ByaXRlID0gU1BSVElFX0RFRi5CVUxMRVRbdGhpcy5kaXJlY3Rpb25dO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5kaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgY2FzZSBcInVwXCIgLyogdXAgKi86XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICB4OiB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLmdldE1pZGRsZSh0YW5rU3ByaXRlLCBidWxsZXRTcHJpdGUsIHRoaXMuZGlyZWN0aW9uKSxcclxuICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLnBvc2l0aW9uLnlcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInJpZ2h0XCIgLyogcmlnaHQgKi86XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICB4OiB0aGlzLnBvc2l0aW9uLnggKyB0YW5rU3ByaXRlLnNpemUud2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5nZXRNaWRkbGUodGFua1Nwcml0ZSwgYnVsbGV0U3ByaXRlLCB0aGlzLmRpcmVjdGlvbilcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImRvd25cIiAvKiBkb3duICovOlxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeDogdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5nZXRNaWRkbGUodGFua1Nwcml0ZSwgYnVsbGV0U3ByaXRlLCB0aGlzLmRpcmVjdGlvbiksXHJcbiAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5wb3NpdGlvbi55ICsgdGFua1Nwcml0ZS5zaXplLmhlaWdodFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwibGVmdFwiIC8qIGxlZnQgKi86XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICB4OiB0aGlzLnBvc2l0aW9uLngsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5nZXRNaWRkbGUodGFua1Nwcml0ZSwgYnVsbGV0U3ByaXRlLCB0aGlzLmRpcmVjdGlvbilcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGJ1bGxldFNwZWVkO1xyXG4gICAgICAgIGlmICh0aGlzLnRhbmtMZXZlbCA9PSAwKSB7XHJcbiAgICAgICAgICAgIGJ1bGxldFNwZWVkID0gQlVMTEVUX1NMT1c7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMudGFua0xldmVsIDwgNCkge1xyXG4gICAgICAgICAgICBidWxsZXRTcGVlZCA9IEJVTExFVF9GQVNUO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYnVsbGV0ID0gbmV3IEJ1bGxldE9iamVjdCh0aGlzLl9nYW1lLCB0aGlzLCBwb3NpdGlvbiwgdGhpcy5kaXJlY3Rpb24sIGJ1bGxldFNwZWVkLCBHdWlkLm5ld0d1aWQoKSk7XHJcbiAgICAgICAgdGhpcy5fZ2FtZS5pbnNlcnRPYmplY3QoYnVsbGV0KTtcclxuICAgICAgICB0aGlzLl9idWxsZXRzLnB1c2goYnVsbGV0LmlkKTtcclxuICAgIH07XHJcbiAgICBUYW5rT2JqZWN0LnByb3RvdHlwZS5yZW1vdmVCdWxsZXQgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICB2YXIgZm91bmQgPSB0aGlzLl9idWxsZXRzLmZpbmQoZnVuY3Rpb24gKGJ1bGxldCkgeyByZXR1cm4gYnVsbGV0ID09PSBpZDsgfSk7XHJcbiAgICAgICAgdmFyIGlkeCA9IHRoaXMuX2J1bGxldHMuaW5kZXhPZihmb3VuZCk7XHJcbiAgICAgICAgaWYgKGlkeCA+IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2J1bGxldHMuc3BsaWNlKGlkeCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8vI2VuZHJlZ2lvblxyXG4gICAgVGFua09iamVjdC5wcm90b3R5cGUuZ2V0TWlkZGxlID0gZnVuY3Rpb24gKHBhcmVudCwgY2hpbGQsIGRpcmVjdGlvbikge1xyXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwidXBcIiAvKiB1cCAqLyB8fCBkaXJlY3Rpb24gPT09IFwiZG93blwiIC8qIGRvd24gKi8pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcmVudC5zaXplLndpZHRoIC8gMiAtIGNoaWxkLnNpemUud2lkdGggLyAyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcmVudC5zaXplLmhlaWdodCAvIDIgLSBjaGlsZC5zaXplLmhlaWdodCAvIDI7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBUYW5rT2JqZWN0O1xyXG59KE1vdmluZ09iamVjdCkpO1xyXG5leHBvcnQgZGVmYXVsdCBUYW5rT2JqZWN0O1xyXG4iLCJpbXBvcnQgU1BSVElFX0RFRiBmcm9tIFwiLi9TcHJpdGUvU3ByaXRlRGVmaW5pdGlvblwiO1xyXG5leHBvcnQgdmFyIE1BWF9GUFMgPSA2MDtcclxuZXhwb3J0IHZhciBEUkFXSU5HX0NPTlNUID0ge1xyXG4gICAgY29sb3JzOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogXCIjMDAwMDAwXCIsXHJcbiAgICAgICAgYmFja2dyb3VuZF9mcmFtZTogXCIjOTQ5NDk0XCIsXHJcbiAgICB9LFxyXG4gICAgc2l6ZXM6IHtcclxuICAgICAgICBmcmFtZToge1xyXG4gICAgICAgICAgICBsZWZ0OiAxNixcclxuICAgICAgICAgICAgdG9wOiAxMCxcclxuICAgICAgICAgICAgYm90dG9tOiAxMCxcclxuICAgICAgICAgICAgcmlnaHQ6IDMyXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRlYnVnOiB7XHJcbiAgICAgICAgZm9udDoge1xyXG4gICAgICAgICAgICBzaXplOiAxMixcclxuICAgICAgICAgICAgZm9udDogJ3Nhbi1zZXJpZidcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcbnZhciBSZW5kZXJlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFJlbmRlcmVyKGdhbWUsIGNhbnZhcywgc3ByaXRlU3JjKSB7XHJcbiAgICAgICAgdGhpcy5fZnBzID0ge1xyXG4gICAgICAgICAgICBmcHNJbnRlcnZhbDogMTAwMCAvIE1BWF9GUFMsXHJcbiAgICAgICAgICAgIG5vdzogcGVyZm9ybWFuY2Uubm93KCksXHJcbiAgICAgICAgICAgIHRoZW46IHBlcmZvcm1hbmNlLm5vdygpLFxyXG4gICAgICAgICAgICBlbGFwc2VkOiAwXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoY2FudmFzID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyAnY2FudmFzIGlzIG51bGwgb3IgdW5kZWZpbmVkJztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fY2FudmFzID0gY2FudmFzO1xyXG4gICAgICAgIGlmIChnYW1lID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyAnZ2FtZSBpcyBudWxsIG9yIHVuZGVmaW5lZCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2dhbWUgPSBnYW1lO1xyXG4gICAgICAgIHRoaXMuaW5pdFNjcmVlbigpO1xyXG4gICAgICAgIHRoaXMubG9hZFNwcml0ZShzcHJpdGVTcmMpO1xyXG4gICAgfVxyXG4gICAgUmVuZGVyZXIucHJvdG90eXBlLmxvYWRTcHJpdGUgPSBmdW5jdGlvbiAoc3JjKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLl9zcHJpdGUgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICB0aGlzLl9zcHJpdGUub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBfdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZS5zcmMgPSBzcmM7XHJcbiAgICB9O1xyXG4gICAgUmVuZGVyZXIucHJvdG90eXBlLmluaXRTY3JlZW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5fY2FudmFzLndpZHRoID0gNjAwO1xyXG4gICAgICAgIHRoaXMuX2NhbnZhcy5oZWlnaHQgPSA2MDA7XHJcbiAgICB9O1xyXG4gICAgUmVuZGVyZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7IF90aGlzLnJlbmRlcigpOyB9KTtcclxuICAgICAgICB2YXIgZnBzID0gdGhpcy5fZnBzO1xyXG4gICAgICAgIGZwcy5ub3cgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICBmcHMuZWxhcHNlZCA9IGZwcy5ub3cgLSBmcHMudGhlbjtcclxuICAgICAgICBpZiAoZnBzLmVsYXBzZWQgPiBmcHMuZnBzSW50ZXJ2YWwpIHtcclxuICAgICAgICAgICAgZnBzLnRoZW4gPSBmcHMubm93IC0gKGZwcy5lbGFwc2VkICUgZnBzLmZwc0ludGVydmFsKTtcclxuICAgICAgICAgICAgLy8gcHJvY2VzcyBtb3ZlIGFjdGlvblxyXG4gICAgICAgICAgICAvLyBtYWluIHRhbmsgbW92ZXNcclxuICAgICAgICAgICAgdmFyIG1haW5UYW5rXzEgPSB0aGlzLl9nYW1lLm1haW5UYW5rO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fZ2FtZS5pc1RhbmtNb3ZlUmVhZHkpIHtcclxuICAgICAgICAgICAgICAgIG1haW5UYW5rXzEubW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIG90aGVyIG9iamVjdHNcclxuICAgICAgICAgICAgdmFyIG9iamVjdHMgPSB0aGlzLl9nYW1lLmdldE9iamVjdHMoKTtcclxuICAgICAgICAgICAgaWYgKG9iamVjdHMpIHtcclxuICAgICAgICAgICAgICAgIG9iamVjdHMuZm9yRWFjaChmdW5jdGlvbiAob2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChvYmplY3Qub2JqZWN0VHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQlVMTEVUXCIgLyogQlVMTEVUICovOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Lm1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQU5JTUFUSU9OXCIgLyogQU5JTUFUSU9OICovOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFuaW1hdGlvbiA9IG9iamVjdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbmltYXRpb24uZXhwaXJlVGltZSA8IF90aGlzLl9mcHMubm93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLmV4cGlyZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFuaW1hdGlvbi5hbmltYXRpb25UeXBlID09PSBcIklOVklOQ0lCTEVcIiAvKiBJTlZJTkNJQkxFICovKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRhbmtTaXplID0gX3RoaXMuZ2V0U3ByaXRlRGF0YShfdGhpcy5fZ2FtZS5tYWluVGFuaykuc2l6ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24uYW5pbWF0aW9uUG9pbnQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IG1haW5UYW5rXzEucG9zaXRpb24ueCArIHRhbmtTaXplLndpZHRoIC8gMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogbWFpblRhbmtfMS5wb3NpdGlvbi55ICsgdGFua1NpemUuaGVpZ2h0IC8gMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24ubmV4dFNwcml0ZVBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBzdGFydCBkcmF3aW5nXHJcbiAgICAgICAgICAgIC8vIGdldCBjb250ZXh0XHJcbiAgICAgICAgICAgIHZhciBjdHggPSB0aGlzLl9jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICAgICAgLy8gY2xlYXIgc2NyZWVuXHJcbiAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY3R4LmNhbnZhcy53aWR0aCwgY3R4LmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgICAgICAvLyBkcmF3IGJhY2tncm91bmRzXHJcbiAgICAgICAgICAgIHRoaXMuZHJhd0JhY2tncm91bmQoY3R4KTtcclxuICAgICAgICAgICAgLy8gZHJhdyBmcmFtZVxyXG4gICAgICAgICAgICB0aGlzLmRyYXdGcmFtZShjdHgpO1xyXG4gICAgICAgICAgICAvLyBkcmF3IG9iamVjdHNcclxuICAgICAgICAgICAgdGhpcy5kcmF3T2JqZWN0cyhjdHgsIHRoaXMuX2dhbWUuZ2V0T2JqZWN0cygpKTtcclxuICAgICAgICAgICAgLy8gZHJhdyBkZWJ1ZyBjb3VudGVyXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9nYW1lLmRlYnVnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdEZWJ1Z0NvdW50ZXIoY3R4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUuZHJhd0JhY2tncm91bmQgPSBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gRFJBV0lOR19DT05TVC5jb2xvcnMuYmFja2dyb3VuZDtcclxuICAgICAgICBjdHguZmlsbFJlY3QoRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS5sZWZ0LCBEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lLnRvcCwgY3R4LmNhbnZhcy53aWR0aCAtIChEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lLmxlZnQgKyBEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lLnJpZ2h0KSwgY3R4LmNhbnZhcy5oZWlnaHQgLSAoRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS50b3AgKyBEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lLmJvdHRvbSkpO1xyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9O1xyXG4gICAgUmVuZGVyZXIucHJvdG90eXBlLmRyYXdGcmFtZSA9IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBEUkFXSU5HX0NPTlNULmNvbG9ycy5iYWNrZ3JvdW5kX2ZyYW1lO1xyXG4gICAgICAgIC8vIHRvcFxyXG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjdHguY2FudmFzLndpZHRoLCBEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lLnRvcCk7XHJcbiAgICAgICAgLy8gbGVmdFxyXG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lLmxlZnQsIGN0eC5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICAvLyBib3R0b21cclxuICAgICAgICBjdHguZmlsbFJlY3QoMCwgY3R4LmNhbnZhcy5oZWlnaHQgLSBEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lLmJvdHRvbSwgY3R4LmNhbnZhcy53aWR0aCwgRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS5ib3R0b20pO1xyXG4gICAgICAgIC8vIHJpZ2h0XHJcbiAgICAgICAgY3R4LmZpbGxSZWN0KGN0eC5jYW52YXMud2lkdGggLSBEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lLnJpZ2h0LCAwLCBEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lLnJpZ2h0LCBjdHguY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH07XHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUuZHJhd09iamVjdHMgPSBmdW5jdGlvbiAoY3R4LCBvYmplY3RzKSB7XHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iamVjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIG9iamVjdCA9IG9iamVjdHNbaV07XHJcbiAgICAgICAgICAgIHZhciBzcHJpdGUgPSB0aGlzLmdldFNwcml0ZURhdGEob2JqZWN0KTtcclxuICAgICAgICAgICAgaWYgKHNwcml0ZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuX3Nwcml0ZSwgc3ByaXRlLnBvc2l0aW9uLngsIHNwcml0ZS5wb3NpdGlvbi55LCBzcHJpdGUuc2l6ZS53aWR0aCwgc3ByaXRlLnNpemUuaGVpZ2h0LCBEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lLmxlZnQgKyBvYmplY3QucG9zaXRpb24ueCwgRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS50b3AgKyBvYmplY3QucG9zaXRpb24ueSwgc3ByaXRlLnNpemUud2lkdGgsIHNwcml0ZS5zaXplLmhlaWdodCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2dhbWUuZGVidWcpIHtcclxuICAgICAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjRkYwMDAwJztcclxuICAgICAgICAgICAgICAgIGN0eC5zdHJva2VSZWN0KERSQVdJTkdfQ09OU1Quc2l6ZXMuZnJhbWUubGVmdCArIG9iamVjdC5wb3NpdGlvbi54LCBEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lLnRvcCArIG9iamVjdC5wb3NpdGlvbi55LCBzcHJpdGUuc2l6ZS53aWR0aCwgc3ByaXRlLnNpemUuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd1RleHQoY3R4LCBcIlwiICsgb2JqZWN0LmlkLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgeDogRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS5sZWZ0ICsgb2JqZWN0LnBvc2l0aW9uLngsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS50b3AgKyBvYmplY3QucG9zaXRpb24ueSAtIDEsXHJcbiAgICAgICAgICAgICAgICB9LCBzcHJpdGUuc2l6ZS53aWR0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgUmVuZGVyZXIucHJvdG90eXBlLmRyYXdEZWJ1Z0NvdW50ZXIgPSBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgICAgdmFyIHRhbmsgPSB0aGlzLl9nYW1lLm1haW5UYW5rO1xyXG4gICAgICAgIGlmICh0YW5rICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5kcmF3VGV4dChjdHgsIFwiTUFJTiBUQU5LOiBUQU5LX1wiICsgdGFuay50YW5rQ29sb3IgKyBcIl9cIiArIHRhbmsudGFua0xldmVsICsgXCIoXCIgKyB0YW5rLnBvc2l0aW9uLnggKyBcIiwgXCIgKyB0YW5rLnBvc2l0aW9uLnkgKyBcIiwgXCIgKyB0YW5rLmRpcmVjdGlvbi50b1N0cmluZygpICsgXCIpXCIsIHsgeDogMCwgeTogMTUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdUZXh0KGN0eCwgXCJNQUlOIFRBTks6IE5PVCBGT1VORFwiLCB7IHg6IDAsIHk6IDE1IH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZnBzID0gKDEwMDAgLyB0aGlzLl9mcHMuZWxhcHNlZCkudG9GaXhlZCgyKSArIFwiZnBzIFwiO1xyXG4gICAgICAgIHRoaXMuZHJhd1RleHQoY3R4LCBmcHMsIHsgeDogY3R4LmNhbnZhcy53aWR0aCAtIChjdHgubWVhc3VyZVRleHQoZnBzKS53aWR0aCAqIDEuMzUpLCB5OiAxNSB9KTtcclxuICAgICAgICB2YXIga2V5U3RhdGUgPSB0aGlzLl9nYW1lLmtleVN0YXRlO1xyXG4gICAgICAgIHRoaXMuZHJhd1RleHQoY3R4LCBcIlNwYWNlOiBcIiArIChrZXlTdGF0ZS5TcGFjZSA/ICdUJyA6ICdGJyksIHsgeDogMCwgeTogY3R4LmNhbnZhcy5oZWlnaHQgfSk7XHJcbiAgICAgICAgdGhpcy5kcmF3VGV4dChjdHgsIFwiQXJyb3dMZWZ0OiBcIiArIChrZXlTdGF0ZS5BcnJvd0xlZnQgPyAnVCcgOiAnRicpLCB7IHg6IDAsIHk6IGN0eC5jYW52YXMuaGVpZ2h0IC0gMTUgfSk7XHJcbiAgICAgICAgdGhpcy5kcmF3VGV4dChjdHgsIFwiQXJyb3dEb3duOiBcIiArIChrZXlTdGF0ZS5BcnJvd0Rvd24gPyAnVCcgOiAnRicpLCB7IHg6IDAsIHk6IGN0eC5jYW52YXMuaGVpZ2h0IC0gMzAgfSk7XHJcbiAgICAgICAgdGhpcy5kcmF3VGV4dChjdHgsIFwiQXJyb3dSaWdodDogXCIgKyAoa2V5U3RhdGUuQXJyb3dSaWdodCA/ICdUJyA6ICdGJyksIHsgeDogMCwgeTogY3R4LmNhbnZhcy5oZWlnaHQgLSA0NSB9KTtcclxuICAgICAgICB0aGlzLmRyYXdUZXh0KGN0eCwgXCJBcnJvd1VwOiBcIiArIChrZXlTdGF0ZS5BcnJvd1VwID8gJ1QnIDogJ0YnKSwgeyB4OiAwLCB5OiBjdHguY2FudmFzLmhlaWdodCAtIDYwIH0pO1xyXG4gICAgICAgIHRoaXMuZHJhd1RleHQoY3R4LCBcIltJS2V5U3RhdGVdXCIsIHsgeDogMCwgeTogY3R4LmNhbnZhcy5oZWlnaHQgLSA3NSB9KTtcclxuICAgIH07XHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUuZHJhd1RleHQgPSBmdW5jdGlvbiAoY3R4LCB0ZXh0LCBwb3NpdGlvbiwgbWF4V2lkdGgpIHtcclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgIGN0eC5mb250ID0gRFJBV0lOR19DT05TVC5kZWJ1Zy5mb250LnNpemUgKyBcInB4IFwiICsgRFJBV0lOR19DT05TVC5kZWJ1Zy5mb250LmZvbnQ7XHJcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ3doaXRlJztcclxuICAgICAgICBjdHgubGluZVdpZHRoID0gMjtcclxuICAgICAgICBjdHguc3Ryb2tlVGV4dCh0ZXh0LCBwb3NpdGlvbi54LCBwb3NpdGlvbi55LCBtYXhXaWR0aCk7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdibGFjayc7XHJcbiAgICAgICAgY3R4LmZpbGxUZXh0KHRleHQsIHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIG1heFdpZHRoKTtcclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfTtcclxuICAgIC8vI3JlZ2lvbiBwdWJsaWMgbWV0aG9kc1xyXG4gICAgLyoqXHJcbiAgICAgKiBGaW5kIHNwcml0ZSBkYXRhIGZvciBnaXZlbiBvYmplY3RcclxuICAgICAqIEBwYXJhbSBvYmplY3QgZm91bmQgc3ByaXRlIGRlZmluaXRpb25cclxuICAgICAqL1xyXG4gICAgUmVuZGVyZXIucHJvdG90eXBlLmdldFNwcml0ZURhdGEgPSBmdW5jdGlvbiAob2JqZWN0KSB7XHJcbiAgICAgICAgc3dpdGNoIChvYmplY3Qub2JqZWN0VHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiVEFOS1wiIC8qIFRBTksgKi86XHJcbiAgICAgICAgICAgICAgICB2YXIgdGFuayA9IG9iamVjdDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBTUFJUSUVfREVGLlRBTktbdGFuay50YW5rQ29sb3JdW3RhbmsudGFua0xldmVsXVt0YW5rLmRpcmVjdGlvbl1bdGFuay5zcHJpdGVQb3NpdGlvbl07XHJcbiAgICAgICAgICAgIGNhc2UgXCJCVUxMRVRcIiAvKiBCVUxMRVQgKi86XHJcbiAgICAgICAgICAgICAgICB2YXIgYnVsbGV0ID0gb2JqZWN0O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFNQUlRJRV9ERUYuQlVMTEVUW2J1bGxldC5kaXJlY3Rpb25dO1xyXG4gICAgICAgICAgICBjYXNlIFwiQU5JTUFUSU9OXCIgLyogQU5JTUFUSU9OICovOlxyXG4gICAgICAgICAgICAgICAgdmFyIGFuaW1hdGlvbiA9IG9iamVjdDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBTUFJUSUVfREVGLkFOSU1BVElPTlthbmltYXRpb24uYW5pbWF0aW9uVHlwZV1bYW5pbWF0aW9uLnNwcml0ZVBvc2l0aW9uXTtcclxuICAgICAgICAgICAgY2FzZSBcIkJMT0NLXCIgLyogQkxPQ0sgKi86XHJcbiAgICAgICAgICAgICAgICB2YXIgYmxvY2sgPSBvYmplY3Q7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gU1BSVElFX0RFRi5CTE9DS1tibG9jay5ibG9ja1R5cGVdW2Jsb2NrLnNwcml0ZVBvc2l0aW9uXTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBUZXN0cyB0d28gb2JqZWN0cyBhcmUgY29sbGlzaW9ucyAocmVjdGFuZ2xlIGNvbGxpc2lvbiB0ZXN0KVxyXG4gICAgICogQHBhcmFtIG9iamVjdDEgZmlyc3Qgb2JqZWN0XHJcbiAgICAgKiBAcGFyYW0gc3ByaXRlMSBmaXJzdCBvYmplY3QncyBzcHJpdGUgZGF0YSBmb3Igc2l6ZVxyXG4gICAgICogQHBhcmFtIG9iamVjdDIgc2Vjb25kIG9iamVjdFxyXG4gICAgICogQHBhcmFtIHNwcml0ZTIgc2Vjb25kIG9iamVjdCdzIHNwcml0ZSBkYXRhIGZvciBzaXplXHJcbiAgICAgKi9cclxuICAgIFJlbmRlcmVyLnByb3RvdHlwZS5yZWN0YW5nbGVDb2xsaXNpb25UZXN0ID0gZnVuY3Rpb24gKG9iamVjdDEsIHNwcml0ZTEsIG9iamVjdDIsIHNwcml0ZTIpIHtcclxuICAgICAgICBpZiAob2JqZWN0MS5wb3NpdGlvbi54ICsgc3ByaXRlMS5zaXplLndpZHRoID49IG9iamVjdDIucG9zaXRpb24ueCAmJlxyXG4gICAgICAgICAgICBvYmplY3QxLnBvc2l0aW9uLnggPD0gb2JqZWN0Mi5wb3NpdGlvbi54ICsgc3ByaXRlMi5zaXplLndpZHRoICYmXHJcbiAgICAgICAgICAgIG9iamVjdDEucG9zaXRpb24ueSArIHNwcml0ZTEuc2l6ZS5oZWlnaHQgPj0gb2JqZWN0Mi5wb3NpdGlvbi55ICYmXHJcbiAgICAgICAgICAgIG9iamVjdDEucG9zaXRpb24ueSA8PSBvYmplY3QyLnBvc2l0aW9uLnkgKyBzcHJpdGUyLnNpemUuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFRlc3Qgb2JqZWN0IGlzIHZpc2libGVcclxuICAgICAqIEBwYXJhbSBvYmplY3Qgb2JqZWN0IGZvciB0ZXN0XHJcbiAgICAgKiBAcGFyYW0gc3ByaXRlIG9iamVjdCdzIHNwcml0ZSBkYXRhIGZvciBzaXplXHJcbiAgICAgKi9cclxuICAgIFJlbmRlcmVyLnByb3RvdHlwZS50ZXN0VmlzaWJpbGl0eSA9IGZ1bmN0aW9uIChvYmplY3QsIHNwcml0ZSkge1xyXG4gICAgICAgIHZhciBjdHggPSB0aGlzLl9jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICBpZiAob2JqZWN0LnBvc2l0aW9uLnggKyBzcHJpdGUuc2l6ZS53aWR0aCA8PSBjdHguY2FudmFzLndpZHRoIC0gRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS5yaWdodCAmJlxyXG4gICAgICAgICAgICBvYmplY3QucG9zaXRpb24ueCA+PSBEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lLmxlZnQgJiZcclxuICAgICAgICAgICAgb2JqZWN0LnBvc2l0aW9uLnkgKyBzcHJpdGUuc2l6ZS5oZWlnaHQgPD0gY3R4LmNhbnZhcy5oZWlnaHQgLSBEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lLmJvdHRvbSAmJlxyXG4gICAgICAgICAgICBvYmplY3QucG9zaXRpb24ueSA+PSBEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lLnRvcCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgUmVuZGVyZXIucHJvdG90eXBlLnJhbmRvbVBvaW50ID0gZnVuY3Rpb24gKHNpemUpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB4OiB0aGlzLmdldFJhbmRvbVJhbmdlKERSQVdJTkdfQ09OU1Quc2l6ZXMuZnJhbWUubGVmdCwgdGhpcy5fY2FudmFzLndpZHRoIC0gRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS5yaWdodCAtIHNpemUud2lkdGgpLFxyXG4gICAgICAgICAgICB5OiB0aGlzLmdldFJhbmRvbVJhbmdlKERSQVdJTkdfQ09OU1Quc2l6ZXMuZnJhbWUudG9wLCB0aGlzLl9jYW52YXMuaGVpZ2h0IC0gRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS5ib3R0b20gLSBzaXplLmhlaWdodCksXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUuZ2V0UmFuZG9tUmFuZ2UgPSBmdW5jdGlvbiAobWluLCBtYXgpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBSZW5kZXJlcjtcclxufSgpKTtcclxuZXhwb3J0IGRlZmF1bHQgUmVuZGVyZXI7XHJcbiIsIjtcclxudmFyIFNQUlRJRV9ERUYgPSB7XHJcbiAgICBUQU5LOiB7XHJcbiAgICAgICAgWUVMTE9XOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAwLCB5OiAwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyLCB5OiAwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA2NCwgeTogMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA5NiwgeTogMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTI4LCB5OiAwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE2MCwgeTogMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE5MiwgeTogMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyMjQsIHk6IDAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMCwgeTogMzIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIsIHk6IDMyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA2NCwgeTogMzIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogOTYsIHk6IDMyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxMjgsIHk6IDMyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE2MCwgeTogMzIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxOTIsIHk6IDMyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDIyNCwgeTogMzIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMCwgeTogNjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIsIHk6IDY0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA2NCwgeTogNjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogOTYsIHk6IDY0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxMjgsIHk6IDY0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE2MCwgeTogNjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxOTIsIHk6IDY0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDIyNCwgeTogNjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMCwgeTogOTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIsIHk6IDk2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA2NCwgeTogOTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogOTYsIHk6IDk2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxMjgsIHk6IDk2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE2MCwgeTogOTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxOTIsIHk6IDk2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDIyNCwgeTogOTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBHUkVFTjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMCwgeTogMjU2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyLCB5OiAyNTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDY0LCB5OiAyNTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogOTYsIHk6IDI1NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTI4LCB5OiAyNTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTYwLCB5OiAyNTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxOTIsIHk6IDI1NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyMjQsIHk6IDI1NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAwLCB5OiAyODggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIsIHk6IDI4OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNjQsIHk6IDI4OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA5NiwgeTogMjg4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxMjgsIHk6IDI4OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxNjAsIHk6IDI4OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE5MiwgeTogMjg4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDIyNCwgeTogMjg4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDAsIHk6IDMyMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMiwgeTogMzIwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA2NCwgeTogMzIwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDk2LCB5OiAzMjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDEyOCwgeTogMzIwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE2MCwgeTogMzIwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTkyLCB5OiAzMjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjI0LCB5OiAzMjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMCwgeTogMzUyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyLCB5OiAzNTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDY0LCB5OiAzNTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogOTYsIHk6IDM1MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTI4LCB5OiAzNTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTYwLCB5OiAzNTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxOTIsIHk6IDM1MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyMjQsIHk6IDM1MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFdISVRFOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyNTYsIHk6IDAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjg4LCB5OiAwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMjAsIHk6IDAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzUyLCB5OiAwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzODQsIHk6IDAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDE2LCB5OiAwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDQ4LCB5OiAwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ4MCwgeTogMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyNTYsIHk6IDMyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI4OCwgeTogMzIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyMCwgeTogMzIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzUyLCB5OiAzMiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzg0LCB5OiAzMiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0MTYsIHk6IDMyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDQ4LCB5OiAzMiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0ODAsIHk6IDMyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI1NiwgeTogNjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjg4LCB5OiA2NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIwLCB5OiA2NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzNTIsIHk6IDY0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzODQsIHk6IDY0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQxNiwgeTogNjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0NDgsIHk6IDY0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ4MCwgeTogNjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjU2LCB5OiA5NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyODgsIHk6IDk2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMjAsIHk6IDk2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM1MiwgeTogOTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM4NCwgeTogOTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDE2LCB5OiA5NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ0OCwgeTogOTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDgwLCB5OiA5NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIE1BR0VOVEE6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI1NiwgeTogMjU2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI4OCwgeTogMjU2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMjAsIHk6IDI1NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzNTIsIHk6IDI1NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzg0LCB5OiAyNTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDE2LCB5OiAyNTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0NDgsIHk6IDI1NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0ODAsIHk6IDI1NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyNTYsIHk6IDI4OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyODgsIHk6IDI4OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIwLCB5OiAyODggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzUyLCB5OiAyODggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM4NCwgeTogMjg4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQxNiwgeTogMjg4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDQ4LCB5OiAyODggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDgwLCB5OiAyODggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjU2LCB5OiAzMjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjg4LCB5OiAzMjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyMCwgeTogMzIwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM1MiwgeTogMzIwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzODQsIHk6IDMyMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0MTYsIHk6IDMyMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ0OCwgeTogMzIwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ4MCwgeTogMzIwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI1NiwgeTogMzUyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI4OCwgeTogMzUyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMjAsIHk6IDM1MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzNTIsIHk6IDM1MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzg0LCB5OiAzNTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDE2LCB5OiAzNTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0NDgsIHk6IDM1MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0ODAsIHk6IDM1MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9LFxyXG4gICAgQlVMTEVUOiB7XHJcbiAgICAgICAgdXA6IHsgcG9zaXRpb246IHsgeDogNjQ2LCB5OiAyMDQgfSwgc2l6ZTogeyB3aWR0aDogNiwgaGVpZ2h0OiA4IH0gfSxcclxuICAgICAgICBsZWZ0OiB7IHBvc2l0aW9uOiB7IHg6IDY2MCwgeTogMjA0IH0sIHNpemU6IHsgd2lkdGg6IDgsIGhlaWdodDogNiB9IH0sXHJcbiAgICAgICAgZG93bjogeyBwb3NpdGlvbjogeyB4OiA2NzgsIHk6IDIwNCB9LCBzaXplOiB7IHdpZHRoOiA2LCBoZWlnaHQ6IDggfSB9LFxyXG4gICAgICAgIHJpZ2h0OiB7IHBvc2l0aW9uOiB7IHg6IDY5MiwgeTogMjA0IH0sIHNpemU6IHsgd2lkdGg6IDgsIGhlaWdodDogNiB9IH1cclxuICAgIH0sXHJcbiAgICBCTE9DSzoge1xyXG4gICAgICAgIEJSSUNLOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDUxMiwgeTogMCB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBJUk9OOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDUxMiwgeTogMzIgfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgV0FURVI6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNTEyLCB5OiA5NiB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA1NDQsIHk6IDk2IH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIEJVU0g6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNTQ0LCB5OiA2NCB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIEFOSU1BVElPTjoge1xyXG4gICAgICAgIEVYUExPU0lPTl9TTUFMTDogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA1MTgsIHk6IDI2MCB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMjIsIGhlaWdodDogMjIgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA1NDQsIHk6IDI1OCB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMzAsIGhlaWdodDogMjggfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA1NzYsIHk6IDI1NiB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBFWFBMT1NJT05fTEFSR0U6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNjEwLCB5OiAyNTggfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDU4LCBoZWlnaHQ6IDU4IH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNjY4LCB5OiAyNTYgfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDY4LCBoZWlnaHQ6IDY0IH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgSU5WSU5DSUJMRTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA1MTIsIHk6IDI4OCB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA1NDQsIHk6IDI4OCB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgU1BBV046IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNTE4LCB5OiAxOTggfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDE4LCBoZWlnaHQ6IDE4IH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNTQ4LCB5OiAxOTYgfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDIyLCBoZWlnaHQ6IDIyIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNTc4LCB5OiAxOTQgfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDI2LCBoZWlnaHQ6IDI2IH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNjA4LCB5OiAxOTIgfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDMwLCBoZWlnaHQ6IDMwIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIFNDT1JFXzEwMDogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA1ODAsIHk6IDMyOCB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMjYsIGhlaWdodDogMTQgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgU0NPUkVfMjAwOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDYxMCwgeTogMzI4IH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAyNiwgaGVpZ2h0OiAxNCB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBTQ09SRV8zMDA6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNjQyLCB5OiAzMjggfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDI2LCBoZWlnaHQ6IDE0IH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIFNDT1JFXzQwMDogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA2NzQsIHk6IDMyOCB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMjYsIGhlaWdodDogMTQgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgU0NPUkVfNTAwOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDcwNiwgeTogMzI4IH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAyNiwgaGVpZ2h0OiAxNCB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIElURU06IHt9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFNQUlRJRV9ERUY7XHJcbiIsImV4cG9ydCBkZWZhdWx0IFwiLi4vZGlzdC9qcy9zcHJpdGUucG5nXCI7IiwiZXhwb3J0IGZ1bmN0aW9uIGRlZXBDbG9uZShvYmopIHtcclxuICAgIGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG4gICAgdmFyIHJlc3VsdCA9IEFycmF5LmlzQXJyYXkob2JqKSA/IFtdIDoge307XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gT2JqZWN0LmtleXMob2JqKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIga2V5ID0gX2FbX2ldO1xyXG4gICAgICAgIHJlc3VsdFtrZXldID0gZGVlcENsb25lKG9ialtrZXldKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxudmFyIEd1aWQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBHdWlkKCkge1xyXG4gICAgfVxyXG4gICAgR3VpZC5uZXdHdWlkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAneHh4eHh4eHgteHh4eC14eHh4LXh4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uIChjKSB7XHJcbiAgICAgICAgICAgIHZhciByID0gTWF0aC5yYW5kb20oKSAqIDE2IHwgMCwgdiA9IGMgPT0gJ3gnID8gciA6IChyICYgMHgzIHwgMHg4KTtcclxuICAgICAgICAgICAgcmV0dXJuIHYudG9TdHJpbmcoMTYpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBHdWlkO1xyXG59KCkpO1xyXG5leHBvcnQgeyBHdWlkIH07XHJcbiIsImltcG9ydCBHYW1lIGZyb20gXCIuL0dhbWUvR2FtZVwiO1xyXG52YXIgc3ByaXRlSW1hZ2UgPSByZXF1aXJlKCcuL1JlbmRlci9TcHJpdGUvc3ByaXRlLnBuZycpO1xyXG52YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XHJcbi8vIGluaXQgZ2FtZVxyXG52YXIgZ2FtZSA9IG5ldyBHYW1lKGNhbnZhcywgJy4vanMvc3ByaXRlLnBuZycpO1xyXG4vLyNyZWdpb24gREVCVUdcclxudmFyIGRlYnVnX2J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVidWdcIik7XHJcbnZhciBtYWluVGFua19sZXZlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblRhbmtfbGV2ZWxcIik7XHJcbnZhciBtYWluVGFua19jb2xvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblRhbmtfY29sb3JcIik7XHJcbnZhciBtYWluVGFua19pbnZpbmNpYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluVGFua19pbnZpbmNpYmxlXCIpO1xyXG52YXIgbWFpblRhbmtfaGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluVGFua19oaXRcIik7XHJcbmRlYnVnX2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldikge1xyXG4gICAgaWYgKGRlYnVnX2J0bi5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykgPT0gJ3RydWUnKSB7XHJcbiAgICAgICAgZ2FtZS5kZWJ1ZyA9IGZhbHNlO1xyXG4gICAgICAgIGRlYnVnX2J0bi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2ZhbHNlJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChkZWJ1Z19idG4uZ2V0QXR0cmlidXRlKCd2YWx1ZScpID09ICdmYWxzZScpIHtcclxuICAgICAgICBnYW1lLmRlYnVnID0gdHJ1ZTtcclxuICAgICAgICBkZWJ1Z19idG4uc2V0QXR0cmlidXRlKCd2YWx1ZScsICd0cnVlJyk7XHJcbiAgICB9XHJcbiAgICBkZWJ1Z19idG4uaW5uZXJUZXh0ID0gXCJkZWJ1ZyA9IFwiICsgZGVidWdfYnRuLmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcclxufSk7XHJcbm1haW5UYW5rX2NvbG9yLnZhbHVlID0gZ2FtZS5tYWluVGFuay50YW5rQ29sb3IudG9TdHJpbmcoKTtcclxubWFpblRhbmtfbGV2ZWwudmFsdWUgPSBnYW1lLm1haW5UYW5rLnRhbmtMZXZlbC50b1N0cmluZygpO1xyXG5tYWluVGFua19sZXZlbC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHsgdXBkYXRlVGFuaygpOyB9KTtcclxubWFpblRhbmtfY29sb3IuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7IHVwZGF0ZVRhbmsoKTsgfSk7XHJcbm1haW5UYW5rX2ludmluY2libGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHsgZ2FtZS5tYWluVGFuay5pbnZpbmNpYmxlKCk7IH0pO1xyXG5tYWluVGFua19oaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHsgZ2FtZS5tYWluVGFuay5oaXQoKTsgfSk7XHJcbmZ1bmN0aW9uIHVwZGF0ZVRhbmsoKSB7XHJcbiAgICBnYW1lLm1haW5UYW5rLnRhbmtDb2xvciA9IG1haW5UYW5rX2NvbG9yLnZhbHVlO1xyXG4gICAgZ2FtZS5tYWluVGFuay50YW5rTGV2ZWwgPSBwYXJzZUludChtYWluVGFua19sZXZlbC52YWx1ZSk7XHJcbn1cclxuLy8jZW5kcmVnaW9uXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=