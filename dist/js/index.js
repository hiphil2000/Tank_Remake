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
/* harmony import */ var _Object_AnimationObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Object/AnimationObject */ "./src/Game/Object/AnimationObject.ts");




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
            var spriteData = _this._renderer.getSpriteData(item);
            var test = _this._renderer.rectangleCollisionTest(object, objectSprite, item, spriteData);
            if (test) {
                found.push(item);
            }
        });
        return found;
    };
    //#region renderer porting method
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
                        mainTank.direction = Object(_InputManage_EKeys__WEBPACK_IMPORTED_MODULE_2__["EKeysToEDirection"])(ev.code);
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
        this.insertObject(new _Object_TankObject__WEBPACK_IMPORTED_MODULE_1__["default"](this, position, direction, tankColor, tankLevel, MAIN_TANK_ID));
        var mainTank = this.mainTank;
        var tankSize = this.getSprite(this.mainTank).size;
        this.insertObject(new _Object_AnimationObject__WEBPACK_IMPORTED_MODULE_3__["default"](this, "INVINCIBLE" /* INVINCIBLE */, {
            x: mainTank.position.x - tankSize.width / 2,
            y: mainTank.position.y - tankSize.height / 2
        }, 3000, 25, true));
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
    function AnimationObject(game, animationType, animationPoint, duration, frameRate, loop) {
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
    Object.defineProperty(AnimationObject.prototype, "spritePosition", {
        get: function () {
            return this._spritePosition;
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
    AnimationObject.prototype.nextSpritePosition = function () {
        console.log("[" + this.spritePosition + " / " + (this._frameCount - 1) + "]" + (performance.now() - this._currentTime) + " >= " + this._frameRate);
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
    BulletObject.prototype.move = function () {
        var changed = this.position;
        Object(_MovingObject__WEBPACK_IMPORTED_MODULE_0__["calculateMove"])(changed, this._direction, this._speed);
        console.log(this.position);
        if (this._game.testVisibility(this, this._game.getSprite(this)) === false) {
            console.log("BULLET [" + this.id + "] EXPLODED.");
            this.explode();
        }
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
        console.log("BULLET [" + this.id + "] HAS BEEN REMOVED.");
    };
    return BulletObject;
}(_MovingObject__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (BulletObject);


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
    GameObject.prototype.remove = function () {
        this._game.removeObject(this);
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
        _this._tankColor = tankColor;
        _this._tankLevel = tankLevel;
        _this._spritePosition = 0;
        _this._bullets = [];
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
    //#region implements of MovingObject	
    TankObject.prototype.move = function () {
        var original = Object(_Utils_Utils__WEBPACK_IMPORTED_MODULE_3__["deepClone"])(this.position);
        Object(_MovingObject__WEBPACK_IMPORTED_MODULE_0__["calculateMove"])(this.position, this._direction, this._speed);
        // test movement is valid
        console.log("TANK [" + this.id + "] MOVES -> [ x: " + this.position.x + ", y: " + this.position.y + " ]");
        if (!this._game.testVisibility(this, this._game.getSprite(this))) {
            // if not, rollback movement
            this.position = original;
            console.log("TANK [" + this.id + "] MOVES -> BLOCKED!! [ x: " + this.position.x + ", y: " + this.position.y + " ]");
        }
        this.nextSpritePosition();
    };
    //#endregion
    //#region public methods
    TankObject.prototype.nextSpritePosition = function () {
        this._spritePosition = this._spritePosition + 1 <= 1 ? this._spritePosition + 1 : 0;
        return this._spritePosition;
    };
    TankObject.prototype.fire = function () {
        this.createBullet();
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
            // bullet moves
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
                                console.log("ANIMATION " + animation.id + " HAS BEEN EXPIRED. (exp: " + animation.expireTime + ", now: " + _this._fps.now + ")");
                                animation.remove();
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
    BLOCK: {},
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
var debug_btn = document.getElementById("debug");
// init game
var game = new _Game_Game__WEBPACK_IMPORTED_MODULE_0__["default"](canvas, './js/sprite.png');
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


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvR2FtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9JbnB1dE1hbmFnZS9FS2V5cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9PYmplY3QvQW5pbWF0aW9uT2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL09iamVjdC9CdWxsZXRPYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvT2JqZWN0L0dhbWVPYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUvT2JqZWN0L01vdmluZ09iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9PYmplY3QvVGFua09iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVuZGVyL1JlbmRlcmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9SZW5kZXIvU3ByaXRlL1Nwcml0ZURlZmluaXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlbmRlci9TcHJpdGUvc3ByaXRlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbHMvVXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5Qyxp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QixpQkFBaUI7QUFDNUMsdUJBQXVCO0FBQ3ZCLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUMsdUJBQXVCO0FBQ3ZCLGFBQWE7QUFDYjtBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUMsdUJBQXVCO0FBQ3ZCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsaUJBQWlCO0FBQzVDLHVCQUF1QjtBQUN2QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGlCQUFpQjtBQUM1Qyx1QkFBdUI7QUFDdkIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUMsdUJBQXVCO0FBQ3ZCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsaUJBQWlCO0FBQzVDLHVCQUF1QjtBQUN2QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGlCQUFpQjtBQUM1Qyx1QkFBdUI7QUFDdkIsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDZSx5RUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDelkxQjtBQUFlLHNGQUF1QixFOzs7Ozs7Ozs7Ozs7QUNBdEM7QUFBQTtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxnQkFBZ0I7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDO0FBQ2U7Ozs7Ozs7Ozs7Ozs7QUN0QmhCO0FBQUE7QUFBK0I7QUFDL0Isa0JBQWtCLG1CQUFPLENBQUMsa0VBQTRCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLGVBQWUsa0RBQUk7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSBcIi4uL1JlbmRlci9SZW5kZXJlclwiO1xyXG5pbXBvcnQgVGFua09iamVjdCBmcm9tIFwiLi9PYmplY3QvVGFua09iamVjdFwiO1xyXG5pbXBvcnQgeyBFS2V5c1RvRURpcmVjdGlvbiB9IGZyb20gXCIuL0lucHV0TWFuYWdlL0VLZXlzXCI7XHJcbmltcG9ydCBBbmltYXRpb25PYmplY3QgZnJvbSBcIi4vT2JqZWN0L0FuaW1hdGlvbk9iamVjdFwiO1xyXG5leHBvcnQgdmFyIE1BSU5fVEFOS19JRCA9ICdNQUlOJztcclxudmFyIEdhbWUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBHYW1lKHNjcmVlbiwgc3ByaXRlU3JjLCBkZWJ1Zykge1xyXG4gICAgICAgIHRoaXMuZGVidWcgPSBkZWJ1ZztcclxuICAgICAgICB0aGlzLl9yZW5kZXJlciA9IG5ldyBSZW5kZXJlcih0aGlzLCBzY3JlZW4sIHNwcml0ZVNyYyk7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplSW5wdXRzKCk7XHJcbiAgICAgICAgc2NyZWVuLmZvY3VzKCk7XHJcbiAgICAgICAgdGhpcy5uZXdHYW1lKDAgLyogUFZFICovLCBudWxsLCBbXSk7XHJcbiAgICAgICAgLy8gdGhpcy5zaG93VGl0bGUoKTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHYW1lLnByb3RvdHlwZSwgXCJrZXlTdGF0ZVwiLCB7XHJcbiAgICAgICAgLy8jcmVnaW9uIGdldHRlciBhbmQgc2V0dGVyXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9rZXlTdGF0ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoR2FtZS5wcm90b3R5cGUsIFwibWFpblRhbmtcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgZm91bmQgPSB0aGlzLmZpbmRPYmplY3RCeUlkKE1BSU5fVEFOS19JRCk7XHJcbiAgICAgICAgICAgIGlmIChmb3VuZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZm91bmRbMF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHYW1lLnByb3RvdHlwZSwgXCJpc1RhbmtNb3ZlUmVhZHlcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgbWFpblRhbmsgPSB0aGlzLm1haW5UYW5rO1xyXG4gICAgICAgICAgICBpZiAobWFpblRhbmsgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICgodGhpcy5fa2V5U3RhdGUuQXJyb3dVcCA9PT0gdHJ1ZSAmJiBtYWluVGFuay5kaXJlY3Rpb24gPT0gXCJ1cFwiIC8qIHVwICovKSB8fFxyXG4gICAgICAgICAgICAgICAgKHRoaXMuX2tleVN0YXRlLkFycm93UmlnaHQgPT09IHRydWUgJiYgbWFpblRhbmsuZGlyZWN0aW9uID09IFwicmlnaHRcIiAvKiByaWdodCAqLykgfHxcclxuICAgICAgICAgICAgICAgICh0aGlzLl9rZXlTdGF0ZS5BcnJvd0Rvd24gPT09IHRydWUgJiYgbWFpblRhbmsuZGlyZWN0aW9uID09IFwiZG93blwiIC8qIGRvd24gKi8pIHx8XHJcbiAgICAgICAgICAgICAgICAodGhpcy5fa2V5U3RhdGUuQXJyb3dMZWZ0ID09PSB0cnVlICYmIG1haW5UYW5rLmRpcmVjdGlvbiA9PSBcImxlZnRcIiAvKiBsZWZ0ICovKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICAvLyNlbmRyZWdpb25cclxuICAgIC8vI3JlZ2lvbiBwdWJsaWMgbWV0aG9kc1xyXG4gICAgLy8jcmVnaW9uIG1lbnUgbWV0aG9kc1xyXG4gICAgR2FtZS5wcm90b3R5cGUuc2hvd1RpdGxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIEdhbWUucHJvdG90eXBlLnNob3dNZW51ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIC8vI2VuZHJlZ2lvblxyXG4gICAgLy8jcmVnaW9uIGdhbWUgb2JqZWN0IG1ldGhvZHNcclxuICAgIEdhbWUucHJvdG90eXBlLmluc2VydE9iamVjdCA9IGZ1bmN0aW9uIChvYmplY3QpIHtcclxuICAgICAgICBpZiAodGhpcy5fZ2FtZURhdGEgPT0gbnVsbCB8fCB0aGlzLl9nYW1lRGF0YS5vYmplY3RzID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9nYW1lRGF0YS5vYmplY3RzLnB1c2gob2JqZWN0KTtcclxuICAgIH07XHJcbiAgICBHYW1lLnByb3RvdHlwZS5yZW1vdmVPYmplY3QgPSBmdW5jdGlvbiAob2JqZWN0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2dhbWVEYXRhID09IG51bGwgJiYgdGhpcy5fZ2FtZURhdGEub2JqZWN0cyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGlkeCA9IHRoaXMuX2dhbWVEYXRhLm9iamVjdHMuaW5kZXhPZihvYmplY3QpO1xyXG4gICAgICAgIHRoaXMuX2dhbWVEYXRhLm9iamVjdHMuc3BsaWNlKGlkeCwgMSk7XHJcbiAgICB9O1xyXG4gICAgR2FtZS5wcm90b3R5cGUuZ2V0T2JqZWN0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgaWYgKCgoX2EgPSB0aGlzLl9nYW1lRGF0YSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm9iamVjdHMpID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9nYW1lRGF0YS5vYmplY3RzO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBHYW1lLnByb3RvdHlwZS5maW5kT2JqZWN0QnlJZCA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9nYW1lRGF0YS5vYmplY3RzICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2FtZURhdGEub2JqZWN0cy5maWx0ZXIoZnVuY3Rpb24gKG9iamVjdCkgeyByZXR1cm4gb2JqZWN0LmlkID09PSBpZDsgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEdhbWUucHJvdG90eXBlLmNvbGxpc2lvblRlc3QgPSBmdW5jdGlvbiAob2JqZWN0KSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgZm91bmQgPSBbXTtcclxuICAgICAgICBpZiAodGhpcy5fZ2FtZURhdGEgPT0gbnVsbCB8fCB0aGlzLl9nYW1lRGF0YS5vYmplY3RzID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZvdW5kO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgb2JqZWN0U3ByaXRlID0gdGhpcy5fcmVuZGVyZXIuZ2V0U3ByaXRlRGF0YShvYmplY3QpO1xyXG4gICAgICAgIHRoaXMuX2dhbWVEYXRhLm9iamVjdHMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICB2YXIgc3ByaXRlRGF0YSA9IF90aGlzLl9yZW5kZXJlci5nZXRTcHJpdGVEYXRhKGl0ZW0pO1xyXG4gICAgICAgICAgICB2YXIgdGVzdCA9IF90aGlzLl9yZW5kZXJlci5yZWN0YW5nbGVDb2xsaXNpb25UZXN0KG9iamVjdCwgb2JqZWN0U3ByaXRlLCBpdGVtLCBzcHJpdGVEYXRhKTtcclxuICAgICAgICAgICAgaWYgKHRlc3QpIHtcclxuICAgICAgICAgICAgICAgIGZvdW5kLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gZm91bmQ7XHJcbiAgICB9O1xyXG4gICAgLy8jcmVnaW9uIHJlbmRlcmVyIHBvcnRpbmcgbWV0aG9kXHJcbiAgICAvKipcclxuICAgICAqIFRlc3Qgb2JqZWN0IGlzIHZpc2libGUgKFBvcnQgb2YgUmVuZGVyZXIudGVzdFZpc2liaWxpdHkpXHJcbiAgICAgKiBAcGFyYW0gb2JqZWN0IG9iamVjdCBmb3IgdGVzdFxyXG4gICAgICogQHBhcmFtIHNwcml0ZSBvYmplY3QncyBzcHJpdGUgZGF0YSBmb3Igc2l6ZVxyXG4gICAgICovXHJcbiAgICBHYW1lLnByb3RvdHlwZS50ZXN0VmlzaWJpbGl0eSA9IGZ1bmN0aW9uIChvYmplY3QsIHNwcml0ZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXJlci50ZXN0VmlzaWJpbGl0eShvYmplY3QsIHNwcml0ZSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBGaW5kIHNwcml0ZSBkYXRhIGZvciBnaXZlbiBvYmplY3QgKFBvcnQgb2YgUmVuZGVyZXIudGVzdFZpc2liaWxpdHkpXHJcbiAgICAgKiBAcGFyYW0gb2JqZWN0IGZvdW5kIHNwcml0ZSBkZWZpbml0aW9uXHJcbiAgICAgKi9cclxuICAgIEdhbWUucHJvdG90eXBlLmdldFNwcml0ZSA9IGZ1bmN0aW9uIChvYmplY3QpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVyZXIuZ2V0U3ByaXRlRGF0YShvYmplY3QpO1xyXG4gICAgfTtcclxuICAgIC8vI2VuZHJlZ2lvblxyXG4gICAgLy8jZW5kcmVnaW9uXHJcbiAgICBHYW1lLnByb3RvdHlwZS5uZXdHYW1lID0gZnVuY3Rpb24gKGdhbWVUeXBlLCBsZXZlbCwgb2JqZWN0cykge1xyXG4gICAgICAgIHRoaXMuX2dhbWVEYXRhID0ge1xyXG4gICAgICAgICAgICBnYW1lVHlwZTogZ2FtZVR5cGUsXHJcbiAgICAgICAgICAgIGxldmVsRGF0YTogbGV2ZWwsXHJcbiAgICAgICAgICAgIG9iamVjdHM6IG9iamVjdHNcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY3JlYXRlTWFpblRhbmsodGhpcy5fcmVuZGVyZXIucmFuZG9tUG9pbnQoeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSksIFwidXBcIiAvKiB1cCAqLywgXCJZRUxMT1dcIiAvKiBZRUxMT1cgKi8sIDApO1xyXG4gICAgfTtcclxuICAgIC8vI2VuZHJlZ2lvblxyXG4gICAgLy8jcmVnaW9uIHByaXZhdGUgbWV0aG9kc1xyXG4gICAgR2FtZS5wcm90b3R5cGUuaW5pdGlhbGl6ZUlucHV0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX2tleVN0YXRlID0ge307XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uIChldikge1xyXG4gICAgICAgICAgICB2YXIgbWFpblRhbmsgPSBfdGhpcy5tYWluVGFuaztcclxuICAgICAgICAgICAgc3dpdGNoIChldi5jb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dVcFwiIC8qIGFycm93X3VwICovOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIiAvKiBhcnJvd19yaWdodCAqLzpcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIiAvKiBhcnJvd19kb3duICovOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiIC8qIGFycm93X2xlZnQgKi86XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1haW5UYW5rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haW5UYW5rLmRpcmVjdGlvbiA9IEVLZXlzVG9FRGlyZWN0aW9uKGV2LmNvZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5yZXNldEFycm93SW5wdXQoKTtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5fa2V5U3RhdGVbZXYuY29kZV0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIlNwYWNlXCIgLyogc3BhY2ViYXIgKi86XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1haW5UYW5rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haW5UYW5rLmZpcmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuX2tleVN0YXRlW2V2LmNvZGVdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJFc2NhcGVcIiAvKiBlc2MgKi86XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuX2tleVN0YXRlW2V2LmNvZGVdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgICAgIHZhciBjb2RlID0gZXYuY29kZTtcclxuICAgICAgICAgICAgX3RoaXMuX2tleVN0YXRlW2NvZGVdID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgR2FtZS5wcm90b3R5cGUucmVzZXRBcnJvd0lucHV0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuX2tleVN0YXRlLkFycm93VXAgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9rZXlTdGF0ZS5BcnJvd1JpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fa2V5U3RhdGUuQXJyb3dEb3duID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fa2V5U3RhdGUuQXJyb3dMZWZ0ID0gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgR2FtZS5wcm90b3R5cGUuY3JlYXRlTWFpblRhbmsgPSBmdW5jdGlvbiAocG9zaXRpb24sIGRpcmVjdGlvbiwgdGFua0NvbG9yLCB0YW5rTGV2ZWwpIHtcclxuICAgICAgICBpZiAodGhpcy5tYWluVGFuaykge1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZU9iamVjdCh0aGlzLm1haW5UYW5rKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbnNlcnRPYmplY3QobmV3IFRhbmtPYmplY3QodGhpcywgcG9zaXRpb24sIGRpcmVjdGlvbiwgdGFua0NvbG9yLCB0YW5rTGV2ZWwsIE1BSU5fVEFOS19JRCkpO1xyXG4gICAgICAgIHZhciBtYWluVGFuayA9IHRoaXMubWFpblRhbms7XHJcbiAgICAgICAgdmFyIHRhbmtTaXplID0gdGhpcy5nZXRTcHJpdGUodGhpcy5tYWluVGFuaykuc2l6ZTtcclxuICAgICAgICB0aGlzLmluc2VydE9iamVjdChuZXcgQW5pbWF0aW9uT2JqZWN0KHRoaXMsIFwiSU5WSU5DSUJMRVwiIC8qIElOVklOQ0lCTEUgKi8sIHtcclxuICAgICAgICAgICAgeDogbWFpblRhbmsucG9zaXRpb24ueCAtIHRhbmtTaXplLndpZHRoIC8gMixcclxuICAgICAgICAgICAgeTogbWFpblRhbmsucG9zaXRpb24ueSAtIHRhbmtTaXplLmhlaWdodCAvIDJcclxuICAgICAgICB9LCAzMDAwLCAyNSwgdHJ1ZSkpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBHYW1lO1xyXG59KCkpO1xyXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xyXG4iLCJleHBvcnQgZnVuY3Rpb24gRUtleXNUb0VEaXJlY3Rpb24oa2V5cykge1xyXG4gICAgc3dpdGNoIChrZXlzKSB7XHJcbiAgICAgICAgY2FzZSBcIkFycm93VXBcIiAvKiBhcnJvd191cCAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIFwidXBcIiAvKiB1cCAqLztcclxuICAgICAgICBjYXNlIFwiQXJyb3dSaWdodFwiIC8qIGFycm93X3JpZ2h0ICovOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJyaWdodFwiIC8qIHJpZ2h0ICovO1xyXG4gICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIiAvKiBhcnJvd19kb3duICovOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJkb3duXCIgLyogZG93biAqLztcclxuICAgICAgICBjYXNlIFwiQXJyb3dMZWZ0XCIgLyogYXJyb3dfbGVmdCAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIFwibGVmdFwiIC8qIGxlZnQgKi87XHJcbiAgICB9XHJcbn1cclxuIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbmltcG9ydCBHYW1lT2JqZWN0IGZyb20gXCIuL0dhbWVPYmplY3RcIjtcclxuaW1wb3J0IHsgR3VpZCB9IGZyb20gXCIuLi8uLi9VdGlscy9VdGlsc1wiO1xyXG5pbXBvcnQgU1BSVElFX0RFRiBmcm9tIFwiLi4vLi4vUmVuZGVyL1Nwcml0ZS9TcHJpdGVEZWZpbml0aW9uXCI7XHJcbnZhciBBbmltYXRpb25PYmplY3QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoQW5pbWF0aW9uT2JqZWN0LCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gQW5pbWF0aW9uT2JqZWN0KGdhbWUsIGFuaW1hdGlvblR5cGUsIGFuaW1hdGlvblBvaW50LCBkdXJhdGlvbiwgZnJhbWVSYXRlLCBsb29wKSB7XHJcbiAgICAgICAgaWYgKGxvb3AgPT09IHZvaWQgMCkgeyBsb29wID0gZmFsc2U7IH1cclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBnYW1lLCBcIkFOSU1BVElPTlwiIC8qIEFOSU1BVElPTiAqLywgYW5pbWF0aW9uUG9pbnQsIEd1aWQubmV3R3VpZCgpKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLmFuaW1hdGlvblR5cGUgPSBhbmltYXRpb25UeXBlO1xyXG4gICAgICAgIF90aGlzLl9hbmltYXRpb25Qb2ludCA9IGFuaW1hdGlvblBvaW50O1xyXG4gICAgICAgIF90aGlzLl9zcHJpdGVQb3NpdGlvbiA9IDA7XHJcbiAgICAgICAgX3RoaXMuX2N1cnJlbnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgX3RoaXMuX2V4cGlyZVRpbWUgPSBfdGhpcy5fY3VycmVudFRpbWUgKyBkdXJhdGlvbjtcclxuICAgICAgICBfdGhpcy5fZnJhbWVDb3VudCA9IFNQUlRJRV9ERUYuQU5JTUFUSU9OW190aGlzLmFuaW1hdGlvblR5cGVdLmxlbmd0aDtcclxuICAgICAgICBfdGhpcy5fZnJhbWVSYXRlID0gZnJhbWVSYXRlO1xyXG4gICAgICAgIF90aGlzLl9sb29wID0gbG9vcDtcclxuICAgICAgICBfdGhpcy51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBbmltYXRpb25PYmplY3QucHJvdG90eXBlLCBcImFuaW1hdGlvblBvaW50XCIsIHtcclxuICAgICAgICAvLyNyZWdpb24gZ2V0dGVyLCBzZXR0ZXJcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FuaW1hdGlvblBvaW50O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoYW5pbWF0aW9uUG9pbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5fYW5pbWF0aW9uUG9pbnQgPSBhbmltYXRpb25Qb2ludDtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBbmltYXRpb25PYmplY3QucHJvdG90eXBlLCBcInNwcml0ZVBvc2l0aW9uXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Nwcml0ZVBvc2l0aW9uO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBbmltYXRpb25PYmplY3QucHJvdG90eXBlLCBcImV4cGlyZVRpbWVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZXhwaXJlVGltZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICAvLyNlbmRyZWdpb25cclxuICAgIC8vI3JlZ2lvbiBwdWJsaWMgbWV0aG9kc1xyXG4gICAgQW5pbWF0aW9uT2JqZWN0LnByb3RvdHlwZS5uZXh0U3ByaXRlUG9zaXRpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJbXCIgKyB0aGlzLnNwcml0ZVBvc2l0aW9uICsgXCIgLyBcIiArICh0aGlzLl9mcmFtZUNvdW50IC0gMSkgKyBcIl1cIiArIChwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMuX2N1cnJlbnRUaW1lKSArIFwiID49IFwiICsgdGhpcy5fZnJhbWVSYXRlKTtcclxuICAgICAgICBpZiAocGVyZm9ybWFuY2Uubm93KCkgLSB0aGlzLl9jdXJyZW50VGltZSA+PSB0aGlzLl9mcmFtZVJhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5fY3VycmVudFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3Nwcml0ZVBvc2l0aW9uICsgMSA8IHRoaXMuX2ZyYW1lQ291bnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Nwcml0ZVBvc2l0aW9uKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fbG9vcCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3ByaXRlUG9zaXRpb24gPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nwcml0ZVBvc2l0aW9uO1xyXG4gICAgfTtcclxuICAgIC8vI2VuZHJlZ2lvblxyXG4gICAgQW5pbWF0aW9uT2JqZWN0LnByb3RvdHlwZS51cGRhdGVQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgc3ByaXRlRGF0YSA9IHRoaXMuX2dhbWUuZ2V0U3ByaXRlKHRoaXMpLnNpemU7XHJcbiAgICAgICAgdGhpcy5fcG9zaXRvbiA9IHtcclxuICAgICAgICAgICAgeDogdGhpcy5fYW5pbWF0aW9uUG9pbnQueCAtIHNwcml0ZURhdGEud2lkdGggLyAyLFxyXG4gICAgICAgICAgICB5OiB0aGlzLl9hbmltYXRpb25Qb2ludC55IC0gc3ByaXRlRGF0YS5oZWlnaHQgLyAyXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQW5pbWF0aW9uT2JqZWN0O1xyXG59KEdhbWVPYmplY3QpKTtcclxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0aW9uT2JqZWN0O1xyXG4iLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuaW1wb3J0IE1vdmluZ09iamVjdCwgeyBjYWxjdWxhdGVNb3ZlIH0gZnJvbSBcIi4vTW92aW5nT2JqZWN0XCI7XHJcbmltcG9ydCBBbmltYXRpb25PYmplY3QgZnJvbSBcIi4vQW5pbWF0aW9uT2JqZWN0XCI7XHJcbmV4cG9ydCB2YXIgQlVMTEVUX1NMT1cgPSA0O1xyXG5leHBvcnQgdmFyIEJVTExFVF9GQVNUID0gNjtcclxudmFyIEJ1bGxldE9iamVjdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhCdWxsZXRPYmplY3QsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBCdWxsZXRPYmplY3QoZ2FtZSwgcGFyZW50LCBwb3NpdGlvbiwgZGlyZWN0aW9uLCBzcGVlZCwgaWQpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBnYW1lLCBcIkJVTExFVFwiIC8qIEJVTExFVCAqLywgcG9zaXRpb24sIGRpcmVjdGlvbiwgc3BlZWQsIGlkKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgQnVsbGV0T2JqZWN0LnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBjaGFuZ2VkID0gdGhpcy5wb3NpdGlvbjtcclxuICAgICAgICBjYWxjdWxhdGVNb3ZlKGNoYW5nZWQsIHRoaXMuX2RpcmVjdGlvbiwgdGhpcy5fc3BlZWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucG9zaXRpb24pO1xyXG4gICAgICAgIGlmICh0aGlzLl9nYW1lLnRlc3RWaXNpYmlsaXR5KHRoaXMsIHRoaXMuX2dhbWUuZ2V0U3ByaXRlKHRoaXMpKSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJCVUxMRVQgW1wiICsgdGhpcy5pZCArIFwiXSBFWFBMT0RFRC5cIik7XHJcbiAgICAgICAgICAgIHRoaXMuZXhwbG9kZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBCdWxsZXRPYmplY3QucHJvdG90eXBlLmV4cGxvZGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGFuaW1hdGlvblBvc2l0aW9uO1xyXG4gICAgICAgIHZhciBzaXplID0gdGhpcy5fZ2FtZS5nZXRTcHJpdGUodGhpcykuc2l6ZTtcclxuICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IFwidXBcIiAvKiB1cCAqLyB8fCB0aGlzLmRpcmVjdGlvbiA9PT0gXCJkb3duXCIgLyogZG93biAqLykge1xyXG4gICAgICAgICAgICBhbmltYXRpb25Qb3NpdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgIHg6IHRoaXMucG9zaXRpb24ueCArIHNpemUud2lkdGggLyAyLFxyXG4gICAgICAgICAgICAgICAgeTogdGhpcy5wb3NpdGlvbi55XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBhbmltYXRpb25Qb3NpdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgIHg6IHRoaXMucG9zaXRpb24ueCxcclxuICAgICAgICAgICAgICAgIHk6IHRoaXMucG9zaXRpb24ueSArIHNpemUuaGVpZ2h0IC8gMlxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9nYW1lLmluc2VydE9iamVjdChuZXcgQW5pbWF0aW9uT2JqZWN0KHRoaXMuX2dhbWUsIFwiRVhQTE9TSU9OX1NNQUxMXCIgLyogRVhQTE9TSU9OX1NNQUxMICovLCB0aGlzLnBvc2l0aW9uLCAyMDAsIDIwMCAvIDQpKTtcclxuICAgICAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgfTtcclxuICAgIEJ1bGxldE9iamVjdC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUucmVtb3ZlLmNhbGwodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fcGFyZW50LnJlbW92ZUJ1bGxldCh0aGlzLmlkKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkJVTExFVCBbXCIgKyB0aGlzLmlkICsgXCJdIEhBUyBCRUVOIFJFTU9WRUQuXCIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBCdWxsZXRPYmplY3Q7XHJcbn0oTW92aW5nT2JqZWN0KSk7XHJcbmV4cG9ydCBkZWZhdWx0IEJ1bGxldE9iamVjdDtcclxuIiwidmFyIEdhbWVPYmplY3QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBHYW1lT2JqZWN0KGdhbWUsIG9iamVjdFR5cGUsIHBvc2l0aW9uLCBpZCkge1xyXG4gICAgICAgIHRoaXMuX2dhbWUgPSBnYW1lO1xyXG4gICAgICAgIHRoaXMub2JqZWN0VHlwZSA9IG9iamVjdFR5cGU7XHJcbiAgICAgICAgaWYgKHBvc2l0aW9uICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9wb3NpdG9uID0gcG9zaXRpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9wb3NpdG9uID0ge1xyXG4gICAgICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgICAgIHk6IDBcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlkICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEdhbWVPYmplY3QucHJvdG90eXBlLCBcInBvc2l0aW9uXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Bvc2l0b247XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChwb3NpdGlvbikge1xyXG4gICAgICAgICAgICBpZiAocG9zaXRpb24ueCA8PSAwIHx8IHBvc2l0aW9uLnkgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgJ3Bvc2l0aW9uIGNhbm5vdCBiZSBhIG5lZ2F0aXZlIHZhbHVlJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9wb3NpdG9uID0gcG9zaXRpb247XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgR2FtZU9iamVjdC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuX2dhbWUucmVtb3ZlT2JqZWN0KHRoaXMpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBHYW1lT2JqZWN0O1xyXG59KCkpO1xyXG5leHBvcnQgZGVmYXVsdCBHYW1lT2JqZWN0O1xyXG4iLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuaW1wb3J0IEdhbWVPYmplY3QgZnJvbSBcIi4vR2FtZU9iamVjdFwiO1xyXG52YXIgTW92aW5nT2JqZWN0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKE1vdmluZ09iamVjdCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIE1vdmluZ09iamVjdChnYW1lLCBvYmplY3RUeXBlLCBwb3NpdGlvbiwgZGlyZWN0aW9uLCBzcGVlZCwgaWQpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBnYW1lLCBvYmplY3RUeXBlLCBwb3NpdGlvbiwgaWQpIHx8IHRoaXM7XHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbiAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgX3RoaXMuX2RpcmVjdGlvbiA9IGRpcmVjdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIF90aGlzLl9kaXJlY3Rpb24gPSBcInVwXCIgLyogdXAgKi87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF90aGlzLl9zcGVlZCA9IHNwZWVkO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNb3ZpbmdPYmplY3QucHJvdG90eXBlLCBcImRpcmVjdGlvblwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9kaXJlY3Rpb247XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChkaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5fZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBNb3ZpbmdPYmplY3Q7XHJcbn0oR2FtZU9iamVjdCkpO1xyXG5leHBvcnQgZGVmYXVsdCBNb3ZpbmdPYmplY3Q7XHJcbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVNb3ZlKHBvc2l0aW9uLCBkaXJlY3Rpb24sIHNwZWVkKSB7XHJcbiAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xyXG4gICAgICAgIGNhc2UgXCJ1cFwiIC8qIHVwICovOlxyXG4gICAgICAgICAgICBwb3NpdGlvbi55IC09IHNwZWVkO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwicmlnaHRcIiAvKiByaWdodCAqLzpcclxuICAgICAgICAgICAgcG9zaXRpb24ueCArPSBzcGVlZDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImRvd25cIiAvKiBkb3duICovOlxyXG4gICAgICAgICAgICBwb3NpdGlvbi55ICs9IHNwZWVkO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwibGVmdFwiIC8qIGxlZnQgKi86XHJcbiAgICAgICAgICAgIHBvc2l0aW9uLnggLT0gc3BlZWQ7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59XHJcbiIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5pbXBvcnQgTW92aW5nT2JqZWN0LCB7IGNhbGN1bGF0ZU1vdmUgfSBmcm9tIFwiLi9Nb3ZpbmdPYmplY3RcIjtcclxuaW1wb3J0IEJ1bGxldE9iamVjdCwgeyBCVUxMRVRfU0xPVywgQlVMTEVUX0ZBU1QgfSBmcm9tIFwiLi9CdWxsZXRPYmplY3RcIjtcclxuaW1wb3J0IFNQUlRJRV9ERUYgZnJvbSBcIi4uLy4uL1JlbmRlci9TcHJpdGUvU3ByaXRlRGVmaW5pdGlvblwiO1xyXG5pbXBvcnQgeyBHdWlkLCBkZWVwQ2xvbmUgfSBmcm9tIFwiLi4vLi4vVXRpbHMvVXRpbHNcIjtcclxuZXhwb3J0IHZhciBUQU5LX1NQRUVEID0gMjtcclxudmFyIFRhbmtPYmplY3QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoVGFua09iamVjdCwgX3N1cGVyKTtcclxuICAgIC8vI3JlZ2lvbiBjb25zdHJ1Y3RvclxyXG4gICAgZnVuY3Rpb24gVGFua09iamVjdChnYW1lLCBwb3NpdGlvbiwgZGlyZWN0aW9uLCB0YW5rQ29sb3IsIHRhbmtMZXZlbCwgaWQpIHtcclxuICAgICAgICBpZiAodGFua0xldmVsID09PSB2b2lkIDApIHsgdGFua0xldmVsID0gMTsgfVxyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGdhbWUsIFwiVEFOS1wiIC8qIFRBTksgKi8sIHBvc2l0aW9uLCBkaXJlY3Rpb24sIFRBTktfU1BFRUQsIGlkKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLl90YW5rQ29sb3IgPSB0YW5rQ29sb3I7XHJcbiAgICAgICAgX3RoaXMuX3RhbmtMZXZlbCA9IHRhbmtMZXZlbDtcclxuICAgICAgICBfdGhpcy5fc3ByaXRlUG9zaXRpb24gPSAwO1xyXG4gICAgICAgIF90aGlzLl9idWxsZXRzID0gW107XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRhbmtPYmplY3QucHJvdG90eXBlLCBcInRhbmtDb2xvclwiLCB7XHJcbiAgICAgICAgLy8jZW5kcmVnaW9uXHJcbiAgICAgICAgLy8jcmVnaW9uIGdldHRlciwgc2V0dGVyXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90YW5rQ29sb3I7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRhbmtPYmplY3QucHJvdG90eXBlLCBcInRhbmtMZXZlbFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90YW5rTGV2ZWw7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRhbmtPYmplY3QucHJvdG90eXBlLCBcInNwcml0ZVBvc2l0aW9uXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Nwcml0ZVBvc2l0aW9uO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIC8vI2VuZHJlZ2lvblxyXG4gICAgLy8jcmVnaW9uIGltcGxlbWVudHMgb2YgTW92aW5nT2JqZWN0XHRcclxuICAgIFRhbmtPYmplY3QucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG9yaWdpbmFsID0gZGVlcENsb25lKHRoaXMucG9zaXRpb24pO1xyXG4gICAgICAgIGNhbGN1bGF0ZU1vdmUodGhpcy5wb3NpdGlvbiwgdGhpcy5fZGlyZWN0aW9uLCB0aGlzLl9zcGVlZCk7XHJcbiAgICAgICAgLy8gdGVzdCBtb3ZlbWVudCBpcyB2YWxpZFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVEFOSyBbXCIgKyB0aGlzLmlkICsgXCJdIE1PVkVTIC0+IFsgeDogXCIgKyB0aGlzLnBvc2l0aW9uLnggKyBcIiwgeTogXCIgKyB0aGlzLnBvc2l0aW9uLnkgKyBcIiBdXCIpO1xyXG4gICAgICAgIGlmICghdGhpcy5fZ2FtZS50ZXN0VmlzaWJpbGl0eSh0aGlzLCB0aGlzLl9nYW1lLmdldFNwcml0ZSh0aGlzKSkpIHtcclxuICAgICAgICAgICAgLy8gaWYgbm90LCByb2xsYmFjayBtb3ZlbWVudFxyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gb3JpZ2luYWw7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVEFOSyBbXCIgKyB0aGlzLmlkICsgXCJdIE1PVkVTIC0+IEJMT0NLRUQhISBbIHg6IFwiICsgdGhpcy5wb3NpdGlvbi54ICsgXCIsIHk6IFwiICsgdGhpcy5wb3NpdGlvbi55ICsgXCIgXVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5uZXh0U3ByaXRlUG9zaXRpb24oKTtcclxuICAgIH07XHJcbiAgICAvLyNlbmRyZWdpb25cclxuICAgIC8vI3JlZ2lvbiBwdWJsaWMgbWV0aG9kc1xyXG4gICAgVGFua09iamVjdC5wcm90b3R5cGUubmV4dFNwcml0ZVBvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZVBvc2l0aW9uID0gdGhpcy5fc3ByaXRlUG9zaXRpb24gKyAxIDw9IDEgPyB0aGlzLl9zcHJpdGVQb3NpdGlvbiArIDEgOiAwO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zcHJpdGVQb3NpdGlvbjtcclxuICAgIH07XHJcbiAgICBUYW5rT2JqZWN0LnByb3RvdHlwZS5maXJlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlQnVsbGV0KCk7XHJcbiAgICB9O1xyXG4gICAgVGFua09iamVjdC5wcm90b3R5cGUuY3JlYXRlQnVsbGV0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRhbmtMZXZlbCA8IDIgJiYgdGhpcy5fYnVsbGV0cy5sZW5ndGggPj0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMudGFua0xldmVsIDwgNCAmJiB0aGlzLl9idWxsZXRzLmxlbmd0aCA+PSAyKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHBvc2l0aW9uO1xyXG4gICAgICAgIHZhciB0YW5rU3ByaXRlID0gU1BSVElFX0RFRi5UQU5LW3RoaXMudGFua0NvbG9yXVt0aGlzLnRhbmtMZXZlbF1bdGhpcy5kaXJlY3Rpb25dW3RoaXMuc3ByaXRlUG9zaXRpb25dO1xyXG4gICAgICAgIHZhciBidWxsZXRTcHJpdGUgPSBTUFJUSUVfREVGLkJVTExFVFt0aGlzLmRpcmVjdGlvbl07XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICBjYXNlIFwidXBcIiAvKiB1cCAqLzpcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IHRoaXMucG9zaXRpb24ueCArIHRoaXMuZ2V0TWlkZGxlKHRhbmtTcHJpdGUsIGJ1bGxldFNwcml0ZSwgdGhpcy5kaXJlY3Rpb24pLFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IHRoaXMucG9zaXRpb24ueVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicmlnaHRcIiAvKiByaWdodCAqLzpcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IHRoaXMucG9zaXRpb24ueCArIHRhbmtTcHJpdGUuc2l6ZS53aWR0aCxcclxuICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmdldE1pZGRsZSh0YW5rU3ByaXRlLCBidWxsZXRTcHJpdGUsIHRoaXMuZGlyZWN0aW9uKVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZG93blwiIC8qIGRvd24gKi86XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICB4OiB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLmdldE1pZGRsZSh0YW5rU3ByaXRlLCBidWxsZXRTcHJpdGUsIHRoaXMuZGlyZWN0aW9uKSxcclxuICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLnBvc2l0aW9uLnkgKyB0YW5rU3ByaXRlLnNpemUuaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJsZWZ0XCIgLyogbGVmdCAqLzpcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IHRoaXMucG9zaXRpb24ueCxcclxuICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmdldE1pZGRsZSh0YW5rU3ByaXRlLCBidWxsZXRTcHJpdGUsIHRoaXMuZGlyZWN0aW9uKVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYnVsbGV0U3BlZWQ7XHJcbiAgICAgICAgaWYgKHRoaXMudGFua0xldmVsID09IDApIHtcclxuICAgICAgICAgICAgYnVsbGV0U3BlZWQgPSBCVUxMRVRfU0xPVztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy50YW5rTGV2ZWwgPCA0KSB7XHJcbiAgICAgICAgICAgIGJ1bGxldFNwZWVkID0gQlVMTEVUX0ZBU1Q7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBidWxsZXQgPSBuZXcgQnVsbGV0T2JqZWN0KHRoaXMuX2dhbWUsIHRoaXMsIHBvc2l0aW9uLCB0aGlzLmRpcmVjdGlvbiwgYnVsbGV0U3BlZWQsIEd1aWQubmV3R3VpZCgpKTtcclxuICAgICAgICB0aGlzLl9nYW1lLmluc2VydE9iamVjdChidWxsZXQpO1xyXG4gICAgICAgIHRoaXMuX2J1bGxldHMucHVzaChidWxsZXQuaWQpO1xyXG4gICAgfTtcclxuICAgIFRhbmtPYmplY3QucHJvdG90eXBlLnJlbW92ZUJ1bGxldCA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgIHZhciBmb3VuZCA9IHRoaXMuX2J1bGxldHMuZmluZChmdW5jdGlvbiAoYnVsbGV0KSB7IHJldHVybiBidWxsZXQgPT09IGlkOyB9KTtcclxuICAgICAgICB2YXIgaWR4ID0gdGhpcy5fYnVsbGV0cy5pbmRleE9mKGZvdW5kKTtcclxuICAgICAgICBpZiAoaWR4ID4gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5fYnVsbGV0cy5zcGxpY2UoaWR4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLy8jZW5kcmVnaW9uXHJcbiAgICBUYW5rT2JqZWN0LnByb3RvdHlwZS5nZXRNaWRkbGUgPSBmdW5jdGlvbiAocGFyZW50LCBjaGlsZCwgZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJ1cFwiIC8qIHVwICovIHx8IGRpcmVjdGlvbiA9PT0gXCJkb3duXCIgLyogZG93biAqLykge1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyZW50LnNpemUud2lkdGggLyAyIC0gY2hpbGQuc2l6ZS53aWR0aCAvIDI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyZW50LnNpemUuaGVpZ2h0IC8gMiAtIGNoaWxkLnNpemUuaGVpZ2h0IC8gMjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFRhbmtPYmplY3Q7XHJcbn0oTW92aW5nT2JqZWN0KSk7XHJcbmV4cG9ydCBkZWZhdWx0IFRhbmtPYmplY3Q7XHJcbiIsImltcG9ydCBTUFJUSUVfREVGIGZyb20gXCIuL1Nwcml0ZS9TcHJpdGVEZWZpbml0aW9uXCI7XHJcbmV4cG9ydCB2YXIgTUFYX0ZQUyA9IDYwO1xyXG5leHBvcnQgdmFyIERSQVdJTkdfQ09OU1QgPSB7XHJcbiAgICBjb2xvcnM6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBcIiMwMDAwMDBcIixcclxuICAgICAgICBiYWNrZ3JvdW5kX2ZyYW1lOiBcIiM5NDk0OTRcIixcclxuICAgIH0sXHJcbiAgICBzaXplczoge1xyXG4gICAgICAgIGZyYW1lOiB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDE2LFxyXG4gICAgICAgICAgICB0b3A6IDEwLFxyXG4gICAgICAgICAgICBib3R0b206IDEwLFxyXG4gICAgICAgICAgICByaWdodDogMzJcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZGVidWc6IHtcclxuICAgICAgICBmb250OiB7XHJcbiAgICAgICAgICAgIHNpemU6IDEyLFxyXG4gICAgICAgICAgICBmb250OiAnc2FuLXNlcmlmJ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxudmFyIFJlbmRlcmVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUmVuZGVyZXIoZ2FtZSwgY2FudmFzLCBzcHJpdGVTcmMpIHtcclxuICAgICAgICB0aGlzLl9mcHMgPSB7XHJcbiAgICAgICAgICAgIGZwc0ludGVydmFsOiAxMDAwIC8gTUFYX0ZQUyxcclxuICAgICAgICAgICAgbm93OiBwZXJmb3JtYW5jZS5ub3coKSxcclxuICAgICAgICAgICAgdGhlbjogcGVyZm9ybWFuY2Uubm93KCksXHJcbiAgICAgICAgICAgIGVsYXBzZWQ6IDBcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChjYW52YXMgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93ICdjYW52YXMgaXMgbnVsbCBvciB1bmRlZmluZWQnO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9jYW52YXMgPSBjYW52YXM7XHJcbiAgICAgICAgaWYgKGdhbWUgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93ICdnYW1lIGlzIG51bGwgb3IgdW5kZWZpbmVkJztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZ2FtZSA9IGdhbWU7XHJcbiAgICAgICAgdGhpcy5pbml0U2NyZWVuKCk7XHJcbiAgICAgICAgdGhpcy5sb2FkU3ByaXRlKHNwcml0ZVNyYyk7XHJcbiAgICB9XHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUubG9hZFNwcml0ZSA9IGZ1bmN0aW9uIChzcmMpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIF90aGlzLnJlbmRlcigpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlLnNyYyA9IHNyYztcclxuICAgIH07XHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUuaW5pdFNjcmVlbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLl9jYW52YXMud2lkdGggPSA2MDA7XHJcbiAgICAgICAgdGhpcy5fY2FudmFzLmhlaWdodCA9IDYwMDtcclxuICAgIH07XHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHsgX3RoaXMucmVuZGVyKCk7IH0pO1xyXG4gICAgICAgIHZhciBmcHMgPSB0aGlzLl9mcHM7XHJcbiAgICAgICAgZnBzLm5vdyA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIGZwcy5lbGFwc2VkID0gZnBzLm5vdyAtIGZwcy50aGVuO1xyXG4gICAgICAgIGlmIChmcHMuZWxhcHNlZCA+IGZwcy5mcHNJbnRlcnZhbCkge1xyXG4gICAgICAgICAgICBmcHMudGhlbiA9IGZwcy5ub3cgLSAoZnBzLmVsYXBzZWQgJSBmcHMuZnBzSW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICAvLyBwcm9jZXNzIG1vdmUgYWN0aW9uXHJcbiAgICAgICAgICAgIC8vIG1haW4gdGFuayBtb3Zlc1xyXG4gICAgICAgICAgICB2YXIgbWFpblRhbmtfMSA9IHRoaXMuX2dhbWUubWFpblRhbms7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9nYW1lLmlzVGFua01vdmVSZWFkeSkge1xyXG4gICAgICAgICAgICAgICAgbWFpblRhbmtfMS5tb3ZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gYnVsbGV0IG1vdmVzXHJcbiAgICAgICAgICAgIHZhciBvYmplY3RzID0gdGhpcy5fZ2FtZS5nZXRPYmplY3RzKCk7XHJcbiAgICAgICAgICAgIGlmIChvYmplY3RzKSB7XHJcbiAgICAgICAgICAgICAgICBvYmplY3RzLmZvckVhY2goZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAob2JqZWN0Lm9iamVjdFR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkJVTExFVFwiIC8qIEJVTExFVCAqLzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC5tb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkFOSU1BVElPTlwiIC8qIEFOSU1BVElPTiAqLzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhbmltYXRpb24gPSBvYmplY3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYW5pbWF0aW9uLmV4cGlyZVRpbWUgPCBfdGhpcy5fZnBzLm5vdykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQU5JTUFUSU9OIFwiICsgYW5pbWF0aW9uLmlkICsgXCIgSEFTIEJFRU4gRVhQSVJFRC4gKGV4cDogXCIgKyBhbmltYXRpb24uZXhwaXJlVGltZSArIFwiLCBub3c6IFwiICsgX3RoaXMuX2Zwcy5ub3cgKyBcIilcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFuaW1hdGlvbi5hbmltYXRpb25UeXBlID09PSBcIklOVklOQ0lCTEVcIiAvKiBJTlZJTkNJQkxFICovKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRhbmtTaXplID0gX3RoaXMuZ2V0U3ByaXRlRGF0YShfdGhpcy5fZ2FtZS5tYWluVGFuaykuc2l6ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24uYW5pbWF0aW9uUG9pbnQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IG1haW5UYW5rXzEucG9zaXRpb24ueCArIHRhbmtTaXplLndpZHRoIC8gMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogbWFpblRhbmtfMS5wb3NpdGlvbi55ICsgdGFua1NpemUuaGVpZ2h0IC8gMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24ubmV4dFNwcml0ZVBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBzdGFydCBkcmF3aW5nXHJcbiAgICAgICAgICAgIC8vIGdldCBjb250ZXh0XHJcbiAgICAgICAgICAgIHZhciBjdHggPSB0aGlzLl9jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICAgICAgLy8gY2xlYXIgc2NyZWVuXHJcbiAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY3R4LmNhbnZhcy53aWR0aCwgY3R4LmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgICAgICAvLyBkcmF3IGJhY2tncm91bmRzXHJcbiAgICAgICAgICAgIHRoaXMuZHJhd0JhY2tncm91bmQoY3R4KTtcclxuICAgICAgICAgICAgLy8gZHJhdyBmcmFtZVxyXG4gICAgICAgICAgICB0aGlzLmRyYXdGcmFtZShjdHgpO1xyXG4gICAgICAgICAgICAvLyBkcmF3IG9iamVjdHNcclxuICAgICAgICAgICAgdGhpcy5kcmF3T2JqZWN0cyhjdHgsIHRoaXMuX2dhbWUuZ2V0T2JqZWN0cygpKTtcclxuICAgICAgICAgICAgLy8gZHJhdyBkZWJ1ZyBjb3VudGVyXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9nYW1lLmRlYnVnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdEZWJ1Z0NvdW50ZXIoY3R4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUuZHJhd0JhY2tncm91bmQgPSBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gRFJBV0lOR19DT05TVC5jb2xvcnMuYmFja2dyb3VuZDtcclxuICAgICAgICBjdHguZmlsbFJlY3QoRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS5sZWZ0LCBEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lLnRvcCwgY3R4LmNhbnZhcy53aWR0aCAtIChEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lLmxlZnQgKyBEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lLnJpZ2h0KSwgY3R4LmNhbnZhcy5oZWlnaHQgLSAoRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS50b3AgKyBEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lLmJvdHRvbSkpO1xyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9O1xyXG4gICAgUmVuZGVyZXIucHJvdG90eXBlLmRyYXdGcmFtZSA9IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBEUkFXSU5HX0NPTlNULmNvbG9ycy5iYWNrZ3JvdW5kX2ZyYW1lO1xyXG4gICAgICAgIC8vIHRvcFxyXG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjdHguY2FudmFzLndpZHRoLCBEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lLnRvcCk7XHJcbiAgICAgICAgLy8gbGVmdFxyXG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lLmxlZnQsIGN0eC5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICAvLyBib3R0b21cclxuICAgICAgICBjdHguZmlsbFJlY3QoMCwgY3R4LmNhbnZhcy5oZWlnaHQgLSBEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lLmJvdHRvbSwgY3R4LmNhbnZhcy53aWR0aCwgRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS5ib3R0b20pO1xyXG4gICAgICAgIC8vIHJpZ2h0XHJcbiAgICAgICAgY3R4LmZpbGxSZWN0KGN0eC5jYW52YXMud2lkdGggLSBEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lLnJpZ2h0LCAwLCBEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lLnJpZ2h0LCBjdHguY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH07XHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUuZHJhd09iamVjdHMgPSBmdW5jdGlvbiAoY3R4LCBvYmplY3RzKSB7XHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iamVjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIG9iamVjdCA9IG9iamVjdHNbaV07XHJcbiAgICAgICAgICAgIHZhciBzcHJpdGUgPSB0aGlzLmdldFNwcml0ZURhdGEob2JqZWN0KTtcclxuICAgICAgICAgICAgaWYgKHNwcml0ZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuX3Nwcml0ZSwgc3ByaXRlLnBvc2l0aW9uLngsIHNwcml0ZS5wb3NpdGlvbi55LCBzcHJpdGUuc2l6ZS53aWR0aCwgc3ByaXRlLnNpemUuaGVpZ2h0LCBEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lLmxlZnQgKyBvYmplY3QucG9zaXRpb24ueCwgRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS50b3AgKyBvYmplY3QucG9zaXRpb24ueSwgc3ByaXRlLnNpemUud2lkdGgsIHNwcml0ZS5zaXplLmhlaWdodCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2dhbWUuZGVidWcpIHtcclxuICAgICAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjRkYwMDAwJztcclxuICAgICAgICAgICAgICAgIGN0eC5zdHJva2VSZWN0KERSQVdJTkdfQ09OU1Quc2l6ZXMuZnJhbWUubGVmdCArIG9iamVjdC5wb3NpdGlvbi54LCBEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lLnRvcCArIG9iamVjdC5wb3NpdGlvbi55LCBzcHJpdGUuc2l6ZS53aWR0aCwgc3ByaXRlLnNpemUuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd1RleHQoY3R4LCBcIlwiICsgb2JqZWN0LmlkLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgeDogRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS5sZWZ0ICsgb2JqZWN0LnBvc2l0aW9uLngsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS50b3AgKyBvYmplY3QucG9zaXRpb24ueSAtIDEsXHJcbiAgICAgICAgICAgICAgICB9LCBzcHJpdGUuc2l6ZS53aWR0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgUmVuZGVyZXIucHJvdG90eXBlLmRyYXdEZWJ1Z0NvdW50ZXIgPSBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgICAgdmFyIHRhbmsgPSB0aGlzLl9nYW1lLm1haW5UYW5rO1xyXG4gICAgICAgIGlmICh0YW5rICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5kcmF3VGV4dChjdHgsIFwiTUFJTiBUQU5LOiBUQU5LX1wiICsgdGFuay50YW5rQ29sb3IgKyBcIl9cIiArIHRhbmsudGFua0xldmVsICsgXCIoXCIgKyB0YW5rLnBvc2l0aW9uLnggKyBcIiwgXCIgKyB0YW5rLnBvc2l0aW9uLnkgKyBcIiwgXCIgKyB0YW5rLmRpcmVjdGlvbi50b1N0cmluZygpICsgXCIpXCIsIHsgeDogMCwgeTogMTUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdUZXh0KGN0eCwgXCJNQUlOIFRBTks6IE5PVCBGT1VORFwiLCB7IHg6IDAsIHk6IDE1IH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZnBzID0gKDEwMDAgLyB0aGlzLl9mcHMuZWxhcHNlZCkudG9GaXhlZCgyKSArIFwiZnBzIFwiO1xyXG4gICAgICAgIHRoaXMuZHJhd1RleHQoY3R4LCBmcHMsIHsgeDogY3R4LmNhbnZhcy53aWR0aCAtIChjdHgubWVhc3VyZVRleHQoZnBzKS53aWR0aCAqIDEuMzUpLCB5OiAxNSB9KTtcclxuICAgICAgICB2YXIga2V5U3RhdGUgPSB0aGlzLl9nYW1lLmtleVN0YXRlO1xyXG4gICAgICAgIHRoaXMuZHJhd1RleHQoY3R4LCBcIlNwYWNlOiBcIiArIChrZXlTdGF0ZS5TcGFjZSA/ICdUJyA6ICdGJyksIHsgeDogMCwgeTogY3R4LmNhbnZhcy5oZWlnaHQgfSk7XHJcbiAgICAgICAgdGhpcy5kcmF3VGV4dChjdHgsIFwiQXJyb3dMZWZ0OiBcIiArIChrZXlTdGF0ZS5BcnJvd0xlZnQgPyAnVCcgOiAnRicpLCB7IHg6IDAsIHk6IGN0eC5jYW52YXMuaGVpZ2h0IC0gMTUgfSk7XHJcbiAgICAgICAgdGhpcy5kcmF3VGV4dChjdHgsIFwiQXJyb3dEb3duOiBcIiArIChrZXlTdGF0ZS5BcnJvd0Rvd24gPyAnVCcgOiAnRicpLCB7IHg6IDAsIHk6IGN0eC5jYW52YXMuaGVpZ2h0IC0gMzAgfSk7XHJcbiAgICAgICAgdGhpcy5kcmF3VGV4dChjdHgsIFwiQXJyb3dSaWdodDogXCIgKyAoa2V5U3RhdGUuQXJyb3dSaWdodCA/ICdUJyA6ICdGJyksIHsgeDogMCwgeTogY3R4LmNhbnZhcy5oZWlnaHQgLSA0NSB9KTtcclxuICAgICAgICB0aGlzLmRyYXdUZXh0KGN0eCwgXCJBcnJvd1VwOiBcIiArIChrZXlTdGF0ZS5BcnJvd1VwID8gJ1QnIDogJ0YnKSwgeyB4OiAwLCB5OiBjdHguY2FudmFzLmhlaWdodCAtIDYwIH0pO1xyXG4gICAgICAgIHRoaXMuZHJhd1RleHQoY3R4LCBcIltJS2V5U3RhdGVdXCIsIHsgeDogMCwgeTogY3R4LmNhbnZhcy5oZWlnaHQgLSA3NSB9KTtcclxuICAgIH07XHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUuZHJhd1RleHQgPSBmdW5jdGlvbiAoY3R4LCB0ZXh0LCBwb3NpdGlvbiwgbWF4V2lkdGgpIHtcclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgIGN0eC5mb250ID0gRFJBV0lOR19DT05TVC5kZWJ1Zy5mb250LnNpemUgKyBcInB4IFwiICsgRFJBV0lOR19DT05TVC5kZWJ1Zy5mb250LmZvbnQ7XHJcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ3doaXRlJztcclxuICAgICAgICBjdHgubGluZVdpZHRoID0gMjtcclxuICAgICAgICBjdHguc3Ryb2tlVGV4dCh0ZXh0LCBwb3NpdGlvbi54LCBwb3NpdGlvbi55LCBtYXhXaWR0aCk7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdibGFjayc7XHJcbiAgICAgICAgY3R4LmZpbGxUZXh0KHRleHQsIHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIG1heFdpZHRoKTtcclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfTtcclxuICAgIC8vI3JlZ2lvbiBwdWJsaWMgbWV0aG9kc1xyXG4gICAgLyoqXHJcbiAgICAgKiBGaW5kIHNwcml0ZSBkYXRhIGZvciBnaXZlbiBvYmplY3RcclxuICAgICAqIEBwYXJhbSBvYmplY3QgZm91bmQgc3ByaXRlIGRlZmluaXRpb25cclxuICAgICAqL1xyXG4gICAgUmVuZGVyZXIucHJvdG90eXBlLmdldFNwcml0ZURhdGEgPSBmdW5jdGlvbiAob2JqZWN0KSB7XHJcbiAgICAgICAgc3dpdGNoIChvYmplY3Qub2JqZWN0VHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiVEFOS1wiIC8qIFRBTksgKi86XHJcbiAgICAgICAgICAgICAgICB2YXIgdGFuayA9IG9iamVjdDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBTUFJUSUVfREVGLlRBTktbdGFuay50YW5rQ29sb3JdW3RhbmsudGFua0xldmVsXVt0YW5rLmRpcmVjdGlvbl1bdGFuay5zcHJpdGVQb3NpdGlvbl07XHJcbiAgICAgICAgICAgIGNhc2UgXCJCVUxMRVRcIiAvKiBCVUxMRVQgKi86XHJcbiAgICAgICAgICAgICAgICB2YXIgYnVsbGV0ID0gb2JqZWN0O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFNQUlRJRV9ERUYuQlVMTEVUW2J1bGxldC5kaXJlY3Rpb25dO1xyXG4gICAgICAgICAgICBjYXNlIFwiQU5JTUFUSU9OXCIgLyogQU5JTUFUSU9OICovOlxyXG4gICAgICAgICAgICAgICAgdmFyIGFuaW1hdGlvbiA9IG9iamVjdDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBTUFJUSUVfREVGLkFOSU1BVElPTlthbmltYXRpb24uYW5pbWF0aW9uVHlwZV1bYW5pbWF0aW9uLnNwcml0ZVBvc2l0aW9uXTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBUZXN0cyB0d28gb2JqZWN0cyBhcmUgY29sbGlzaW9ucyAocmVjdGFuZ2xlIGNvbGxpc2lvbiB0ZXN0KVxyXG4gICAgICogQHBhcmFtIG9iamVjdDEgZmlyc3Qgb2JqZWN0XHJcbiAgICAgKiBAcGFyYW0gc3ByaXRlMSBmaXJzdCBvYmplY3QncyBzcHJpdGUgZGF0YSBmb3Igc2l6ZVxyXG4gICAgICogQHBhcmFtIG9iamVjdDIgc2Vjb25kIG9iamVjdFxyXG4gICAgICogQHBhcmFtIHNwcml0ZTIgc2Vjb25kIG9iamVjdCdzIHNwcml0ZSBkYXRhIGZvciBzaXplXHJcbiAgICAgKi9cclxuICAgIFJlbmRlcmVyLnByb3RvdHlwZS5yZWN0YW5nbGVDb2xsaXNpb25UZXN0ID0gZnVuY3Rpb24gKG9iamVjdDEsIHNwcml0ZTEsIG9iamVjdDIsIHNwcml0ZTIpIHtcclxuICAgICAgICBpZiAob2JqZWN0MS5wb3NpdGlvbi54ICsgc3ByaXRlMS5zaXplLndpZHRoID49IG9iamVjdDIucG9zaXRpb24ueCAmJlxyXG4gICAgICAgICAgICBvYmplY3QxLnBvc2l0aW9uLnggPD0gb2JqZWN0Mi5wb3NpdGlvbi54ICsgc3ByaXRlMi5zaXplLndpZHRoICYmXHJcbiAgICAgICAgICAgIG9iamVjdDEucG9zaXRpb24ueSArIHNwcml0ZTEuc2l6ZS5oZWlnaHQgPj0gb2JqZWN0Mi5wb3NpdGlvbi55ICYmXHJcbiAgICAgICAgICAgIG9iamVjdDEucG9zaXRpb24ueSA8PSBvYmplY3QyLnBvc2l0aW9uLnkgKyBzcHJpdGUyLnNpemUuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFRlc3Qgb2JqZWN0IGlzIHZpc2libGVcclxuICAgICAqIEBwYXJhbSBvYmplY3Qgb2JqZWN0IGZvciB0ZXN0XHJcbiAgICAgKiBAcGFyYW0gc3ByaXRlIG9iamVjdCdzIHNwcml0ZSBkYXRhIGZvciBzaXplXHJcbiAgICAgKi9cclxuICAgIFJlbmRlcmVyLnByb3RvdHlwZS50ZXN0VmlzaWJpbGl0eSA9IGZ1bmN0aW9uIChvYmplY3QsIHNwcml0ZSkge1xyXG4gICAgICAgIHZhciBjdHggPSB0aGlzLl9jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICBpZiAob2JqZWN0LnBvc2l0aW9uLnggKyBzcHJpdGUuc2l6ZS53aWR0aCA8PSBjdHguY2FudmFzLndpZHRoIC0gRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS5yaWdodCAmJlxyXG4gICAgICAgICAgICBvYmplY3QucG9zaXRpb24ueCA+PSBEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lLmxlZnQgJiZcclxuICAgICAgICAgICAgb2JqZWN0LnBvc2l0aW9uLnkgKyBzcHJpdGUuc2l6ZS5oZWlnaHQgPD0gY3R4LmNhbnZhcy5oZWlnaHQgLSBEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lLmJvdHRvbSAmJlxyXG4gICAgICAgICAgICBvYmplY3QucG9zaXRpb24ueSA+PSBEUkFXSU5HX0NPTlNULnNpemVzLmZyYW1lLnRvcCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgUmVuZGVyZXIucHJvdG90eXBlLnJhbmRvbVBvaW50ID0gZnVuY3Rpb24gKHNpemUpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB4OiB0aGlzLmdldFJhbmRvbVJhbmdlKERSQVdJTkdfQ09OU1Quc2l6ZXMuZnJhbWUubGVmdCwgdGhpcy5fY2FudmFzLndpZHRoIC0gRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS5yaWdodCAtIHNpemUud2lkdGgpLFxyXG4gICAgICAgICAgICB5OiB0aGlzLmdldFJhbmRvbVJhbmdlKERSQVdJTkdfQ09OU1Quc2l6ZXMuZnJhbWUudG9wLCB0aGlzLl9jYW52YXMuaGVpZ2h0IC0gRFJBV0lOR19DT05TVC5zaXplcy5mcmFtZS5ib3R0b20gLSBzaXplLmhlaWdodCksXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUuZ2V0UmFuZG9tUmFuZ2UgPSBmdW5jdGlvbiAobWluLCBtYXgpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBSZW5kZXJlcjtcclxufSgpKTtcclxuZXhwb3J0IGRlZmF1bHQgUmVuZGVyZXI7XHJcbiIsIjtcclxudmFyIFNQUlRJRV9ERUYgPSB7XHJcbiAgICBUQU5LOiB7XHJcbiAgICAgICAgWUVMTE9XOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAwLCB5OiAwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyLCB5OiAwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA2NCwgeTogMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA5NiwgeTogMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTI4LCB5OiAwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE2MCwgeTogMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE5MiwgeTogMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyMjQsIHk6IDAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMCwgeTogMzIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIsIHk6IDMyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA2NCwgeTogMzIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogOTYsIHk6IDMyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxMjgsIHk6IDMyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE2MCwgeTogMzIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxOTIsIHk6IDMyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDIyNCwgeTogMzIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMCwgeTogNjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIsIHk6IDY0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA2NCwgeTogNjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogOTYsIHk6IDY0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxMjgsIHk6IDY0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE2MCwgeTogNjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxOTIsIHk6IDY0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDIyNCwgeTogNjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMCwgeTogOTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIsIHk6IDk2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA2NCwgeTogOTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogOTYsIHk6IDk2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxMjgsIHk6IDk2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE2MCwgeTogOTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxOTIsIHk6IDk2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDIyNCwgeTogOTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBHUkVFTjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMCwgeTogMjU2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyLCB5OiAyNTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDY0LCB5OiAyNTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogOTYsIHk6IDI1NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTI4LCB5OiAyNTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTYwLCB5OiAyNTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxOTIsIHk6IDI1NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyMjQsIHk6IDI1NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAwLCB5OiAyODggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIsIHk6IDI4OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNjQsIHk6IDI4OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA5NiwgeTogMjg4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxMjgsIHk6IDI4OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxNjAsIHk6IDI4OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE5MiwgeTogMjg4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDIyNCwgeTogMjg4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDAsIHk6IDMyMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMiwgeTogMzIwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA2NCwgeTogMzIwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDk2LCB5OiAzMjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDEyOCwgeTogMzIwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDE2MCwgeTogMzIwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTkyLCB5OiAzMjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjI0LCB5OiAzMjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMCwgeTogMzUyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyLCB5OiAzNTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDY0LCB5OiAzNTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogOTYsIHk6IDM1MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTI4LCB5OiAzNTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMTYwLCB5OiAzNTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAxOTIsIHk6IDM1MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyMjQsIHk6IDM1MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFdISVRFOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyNTYsIHk6IDAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjg4LCB5OiAwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMjAsIHk6IDAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzUyLCB5OiAwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzODQsIHk6IDAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDE2LCB5OiAwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDQ4LCB5OiAwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ4MCwgeTogMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyNTYsIHk6IDMyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI4OCwgeTogMzIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyMCwgeTogMzIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzUyLCB5OiAzMiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzg0LCB5OiAzMiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0MTYsIHk6IDMyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDQ4LCB5OiAzMiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0ODAsIHk6IDMyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI1NiwgeTogNjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjg4LCB5OiA2NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIwLCB5OiA2NCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzNTIsIHk6IDY0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzODQsIHk6IDY0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQxNiwgeTogNjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0NDgsIHk6IDY0IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ4MCwgeTogNjQgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjU2LCB5OiA5NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyODgsIHk6IDk2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMjAsIHk6IDk2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM1MiwgeTogOTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM4NCwgeTogOTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDE2LCB5OiA5NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ0OCwgeTogOTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDgwLCB5OiA5NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIE1BR0VOVEE6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI1NiwgeTogMjU2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI4OCwgeTogMjU2IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMjAsIHk6IDI1NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzNTIsIHk6IDI1NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzg0LCB5OiAyNTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDE2LCB5OiAyNTYgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0NDgsIHk6IDI1NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0ODAsIHk6IDI1NiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyNTYsIHk6IDI4OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAyODgsIHk6IDI4OCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzIwLCB5OiAyODggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzUyLCB5OiAyODggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRvd246IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM4NCwgeTogMjg4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQxNiwgeTogMjg4IH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDQ4LCB5OiAyODggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDgwLCB5OiAyODggfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjU2LCB5OiAzMjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMjg4LCB5OiAzMjAgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDMyMCwgeTogMzIwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDM1MiwgeTogMzIwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkb3duOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzODQsIHk6IDMyMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0MTYsIHk6IDMyMCB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ0OCwgeTogMzIwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDQ4MCwgeTogMzIwIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI1NiwgeTogMzUyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBvc2l0aW9uOiB7IHg6IDI4OCwgeTogMzUyIH0sIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzMjAsIHk6IDM1MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiAzNTIsIHk6IDM1MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZG93bjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogMzg0LCB5OiAzNTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zaXRpb246IHsgeDogNDE2LCB5OiAzNTIgfSwgc2l6ZTogeyB3aWR0aDogMzIsIGhlaWdodDogMzIgfSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0NDgsIHk6IDM1MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogeyB4OiA0ODAsIHk6IDM1MiB9LCBzaXplOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9IH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9LFxyXG4gICAgQlVMTEVUOiB7XHJcbiAgICAgICAgdXA6IHsgcG9zaXRpb246IHsgeDogNjQ2LCB5OiAyMDQgfSwgc2l6ZTogeyB3aWR0aDogNiwgaGVpZ2h0OiA4IH0gfSxcclxuICAgICAgICBsZWZ0OiB7IHBvc2l0aW9uOiB7IHg6IDY2MCwgeTogMjA0IH0sIHNpemU6IHsgd2lkdGg6IDgsIGhlaWdodDogNiB9IH0sXHJcbiAgICAgICAgZG93bjogeyBwb3NpdGlvbjogeyB4OiA2NzgsIHk6IDIwNCB9LCBzaXplOiB7IHdpZHRoOiA2LCBoZWlnaHQ6IDggfSB9LFxyXG4gICAgICAgIHJpZ2h0OiB7IHBvc2l0aW9uOiB7IHg6IDY5MiwgeTogMjA0IH0sIHNpemU6IHsgd2lkdGg6IDgsIGhlaWdodDogNiB9IH1cclxuICAgIH0sXHJcbiAgICBCTE9DSzoge30sXHJcbiAgICBBTklNQVRJT046IHtcclxuICAgICAgICBFWFBMT1NJT05fU01BTEw6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNTE4LCB5OiAyNjAgfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDIyLCBoZWlnaHQ6IDIyIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNTQ0LCB5OiAyNTggfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDMwLCBoZWlnaHQ6IDI4IH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNTc2LCB5OiAyNTYgfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgRVhQTE9TSU9OX0xBUkdFOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDYxMCwgeTogMjU4IH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiA1OCwgaGVpZ2h0OiA1OCB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDY2OCwgeTogMjU2IH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiA2OCwgaGVpZ2h0OiA2NCB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIElOVklOQ0lCTEU6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNTEyLCB5OiAyODggfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNTQ0LCB5OiAyODggfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIFNQQVdOOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDUxOCwgeTogMTk4IH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAxOCwgaGVpZ2h0OiAxOCB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDU0OCwgeTogMTk2IH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAyMiwgaGVpZ2h0OiAyMiB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDU3OCwgeTogMTk0IH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAyNiwgaGVpZ2h0OiAyNiB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDYwOCwgeTogMTkyIH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAzMCwgaGVpZ2h0OiAzMCB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBTQ09SRV8xMDA6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNTgwLCB5OiAzMjggfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDI2LCBoZWlnaHQ6IDE0IH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIFNDT1JFXzIwMDogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA2MTAsIHk6IDMyOCB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMjYsIGhlaWdodDogMTQgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgU0NPUkVfMzAwOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDY0MiwgeTogMzI4IH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAyNiwgaGVpZ2h0OiAxNCB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBTQ09SRV80MDA6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogNjc0LCB5OiAzMjggfSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDI2LCBoZWlnaHQ6IDE0IH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIFNDT1JFXzUwMDogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA3MDYsIHk6IDMyOCB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMjYsIGhlaWdodDogMTQgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICBJVEVNOiB7fVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTUFJUSUVfREVGO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBcIi4uL2Rpc3QvanMvc3ByaXRlLnBuZ1wiOyIsImV4cG9ydCBmdW5jdGlvbiBkZWVwQ2xvbmUob2JqKSB7XHJcbiAgICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH1cclxuICAgIHZhciByZXN1bHQgPSBBcnJheS5pc0FycmF5KG9iaikgPyBbXSA6IHt9O1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IE9iamVjdC5rZXlzKG9iaik7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIGtleSA9IF9hW19pXTtcclxuICAgICAgICByZXN1bHRba2V5XSA9IGRlZXBDbG9uZShvYmpba2V5XSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbnZhciBHdWlkID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gR3VpZCgpIHtcclxuICAgIH1cclxuICAgIEd1aWQubmV3R3VpZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gJ3h4eHh4eHh4LXh4eHgteHh4eC14eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbiAoYykge1xyXG4gICAgICAgICAgICB2YXIgciA9IE1hdGgucmFuZG9tKCkgKiAxNiB8IDAsIHYgPSBjID09ICd4JyA/IHIgOiAociAmIDB4MyB8IDB4OCk7XHJcbiAgICAgICAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gR3VpZDtcclxufSgpKTtcclxuZXhwb3J0IHsgR3VpZCB9O1xyXG4iLCJpbXBvcnQgR2FtZSBmcm9tIFwiLi9HYW1lL0dhbWVcIjtcclxudmFyIHNwcml0ZUltYWdlID0gcmVxdWlyZSgnLi9SZW5kZXIvU3ByaXRlL3Nwcml0ZS5wbmcnKTtcclxudmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xyXG52YXIgZGVidWdfYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWJ1Z1wiKTtcclxuLy8gaW5pdCBnYW1lXHJcbnZhciBnYW1lID0gbmV3IEdhbWUoY2FudmFzLCAnLi9qcy9zcHJpdGUucG5nJyk7XHJcbmRlYnVnX2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldikge1xyXG4gICAgaWYgKGRlYnVnX2J0bi5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykgPT0gJ3RydWUnKSB7XHJcbiAgICAgICAgZ2FtZS5kZWJ1ZyA9IGZhbHNlO1xyXG4gICAgICAgIGRlYnVnX2J0bi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2ZhbHNlJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChkZWJ1Z19idG4uZ2V0QXR0cmlidXRlKCd2YWx1ZScpID09ICdmYWxzZScpIHtcclxuICAgICAgICBnYW1lLmRlYnVnID0gdHJ1ZTtcclxuICAgICAgICBkZWJ1Z19idG4uc2V0QXR0cmlidXRlKCd2YWx1ZScsICd0cnVlJyk7XHJcbiAgICB9XHJcbiAgICBkZWJ1Z19idG4uaW5uZXJUZXh0ID0gXCJkZWJ1ZyA9IFwiICsgZGVidWdfYnRuLmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=