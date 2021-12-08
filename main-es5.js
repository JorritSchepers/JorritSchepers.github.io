function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<canvas id=\"bg\"></canvas>\n<main>\n    <button id=\"ui-toggle-button\" class=\"button\" *ngIf=\"!showUI\" (click)=\"showUI = !showUI\"> Show UI </button>\n    <div id=\"container\" *ngIf=\"showUI\"> \n        <!-- Header -->\n        <div id=\"header\" class=\"panel no-selec\">\n            <span id= \"distance-display\"> Distance to the sun: {{distanceDisplay}}km ({{distanceInAUDisplay}}AU) </span>\n            <span id= \"day-display\"> Day: {{dayDisplay}} </span>\n        </div>\n\n        <!-- Navigator -->\n        <div id=\"nav-container\" class=\"panel no-selec\">\n            <div class=\"panel-title\">\n                <div *ngIf=\"navCurrentPage != 0\" (click)=\"navCurrentPage = navCurrentPage - 1\"> &lt; </div>\n                <div *ngIf=\"navCurrentPage == 0\"> &nbsp; </div>\n                <span *ngIf=\"navCurrentPage == 0\">Systems</span>\n                <span *ngIf=\"navCurrentPage == 1\">Planets</span>\n                <span *ngIf=\"navCurrentPage == 2 && getPlanet(followPlanetName).moonOf == null\" style=\"font-size: large\" (click)=\"showInfoPanel = true\">Moons ({{followPlanetName}})</span>\n                <span *ngIf=\"navCurrentPage == 2 && getPlanet(followPlanetName).moonOf != null\" style=\"font-size: large\">Moons ({{getPlanet(followPlanetName).moonOf.name}})</span>\n                <div *ngIf=\"navCurrentPage == 0\" (click)=\"addNewSystem()\"> + </div>\n                <div *ngIf=\"navCurrentPage == 1\" (click)=\"addRandomPlanet()\"> + </div>\n                <div *ngIf=\"navCurrentPage == 2\"> &nbsp; </div>\n            </div>\n            <div class=\"panel-body\" style=\"flex-direction: column;\">\n                <!-- Systems list -->\n                <div style=\"width: 100%; height: 100%;\" *ngIf=\"navCurrentPage == 0\">\n                    <div class=\"nav-list-item\" *ngFor=\"let system of systems\" (click)=\"switchToSystem(getSystemIndex(system.name))\">\n                        <span>{{system.name}}</span>\n                    </div>\n                </div>\n\n                <!-- Planets list -->\n                <div style=\"width: 100%; height: 100%;\" *ngIf=\"navCurrentPage == 1\">\n                    <div class=\"nav-list-item\" (click)=\"flyToPlanet(sun.name)\">\n                        <span>{{sun.name}}</span>\n                    </div>\n                    <div class=\"nav-list-item\" *ngFor=\"let planet of systems[currentSystem].planets\" (click)=\"flyToPlanet(planet.name)\">\n                        <span>{{planet.name}}</span>\n                    </div>\n                </div>\n\n                <!-- Moons list -->\n                <div style=\"width: 100%; height: 100%;\" *ngIf=\"navCurrentPage == 2\">\n                    <div style=\"width: 100%; height: 100%;\" *ngIf=\"getPlanet(followPlanetName).moonOf == null\">\n                        <div class=\"nav-list-item\" *ngFor=\"let moon of getPlanet(followPlanetName).moons\" (click)=\"flyToPlanet(moon.name)\">\n                            <span>{{moon.name}}</span>\n                        </div>\n                    </div>\n                    <div style=\"width: 100%; height: 100%;\" *ngIf=\"getPlanet(followPlanetName).moonOf != null\">\n                        <div class=\"nav-list-item\" *ngFor=\"let moon of getPlanet(followPlanetName).moonOf.moons\" (click)=\"flyToPlanet(moon.name)\">\n                            <span>{{moon.name}}</span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>    \n\n        <!-- Info panel -->\n        <div id=\"info-container\" class=\"panel no-selec\" *ngIf=\"followPlanetName != null && showInfoPanel\">\n            <div class=\"panel-title\">\n                <div> &nbsp; </div>\n                <span> {{followPlanetName}} </span>\n                <div (click)=\"showInfoPanel = false\"> x </div>\n            </div>\n            <div class=\"panel-body\">\n                <div class=\"info-column\" style=\"width: 40%;\">\n                    <span> Diameter: </span>\n                    <span> Distance: </span>\n                    <span> Inclination: </span>\n                    <span> Axis: </span>\n                    <span> Orbital period: </span>\n                    <span> Direction: </span>\n                    <span *ngIf=\"getPlanet(followPlanetName).moonOf == null\"> Moons: </span>\n                    <span *ngIf=\"getPlanet(followPlanetName).moonOf != null\"> Is a moon of: </span>\n                </div>\n                <div class=\"info-column\" style=\"width: 60%;\">\n                    <span> {{getPlanet(followPlanetName).radius*2}}km </span>\n                    <span> {{getPlanet(followPlanetName).distance}}km </span>\n                    <span> {{getPlanet(followPlanetName).getInclination()}}&deg; </span>\n                    <span> {{getPlanet(followPlanetName).axis}}&deg; </span>\n                    <span> {{getPlanet(followPlanetName).speed}} days </span>\n                    <span *ngIf=\"getPlanet(followPlanetName).clockwise\"> Clockwise </span>\n                    <span *ngIf=\"!getPlanet(followPlanetName).clockwise\"> Counter clockwise </span>\n                    <span *ngIf=\"getPlanet(followPlanetName).moonOf == null\"> {{getPlanet(followPlanetName).moons.length}} </span>\n                    <span *ngIf=\"getPlanet(followPlanetName).moonOf != null\"> {{getPlanet(followPlanetName).moonOf.name}} </span>\n                </div>\n            </div>\n        </div>\n\n        <!-- Button panel -->\n        <div class=\"panel no-selec\" id=\"button-container\">\n            <button class= \"button\" (click)=\"toggleGuideLines()\" style=\"border-top-left-radius: var(--border-radius);\"> Orbit path </button>\n            <button class= \"button\" *ngIf=\"!railedCam\" (click)=\"railedCam = true\"> Turn off free cam </button>\n            <button class= \"button\" *ngIf=\"railedCam\" (click)=\"railedCam = false\"> Turn on free cam </button>\n            <button class= \"button\">  </button>\n            <button class= \"button\">  </button>\n            <button class= \"button\">  </button>\n            <button class= \"button\">  </button>\n            <button class= \"button\" (click)=\"showContactPage = !showContactPage\"> Contact </button>\n            <button class= \"button\" (click)=\"showUI = !showUI\"> Hide UI </button>\n        </div>\n\n        <!-- Slider panel -->\n        <div id=\"slider-panel\" class=\"panel no-selec\">\n            <div id=\"slider-header\" class=\"panel-title\">\n                <span class=\"button\" style=\"border-top-left-radius: var(--border-radius);\" (click)=\"currentSlider = 'Time'\"> Time </span>\n                <span class=\"button\" style=\"border-top-right-radius: var(--border-radius);\" (click)=\"currentSlider = 'Distance'\"> Distance </span>\n            </div>\n            <div id=\"slider-body\" class=\"panel-body\">\n                <span> {{currentSlider}} </span>\n                <div id=\"slider\">\n                    <ngx-slider class=\"asd\" *ngIf=\"currentSlider == 'Time'\" [(value)]=\"sliderValue\" [options]=\"options\"></ngx-slider>\n                    <ngx-slider *ngIf=\"currentSlider == 'Distance'\" [(value)]=\"scaleSliderValue\" [options]=\"scaleOptions\"></ngx-slider>\n                </div>\n            </div>\n        </div>\n\n        <!-- Contact page -->\n        <div id=contact-container class=\"panel\" *ngIf=\"showContactPage\"> \n            <h1 class=\"no-selec\">Contact me</h1>\n            <p><span class=\"no-selec\">Email:</span>&nbsp; jorrit.schepers1@gmail.com</p>\n            <a href=\"https://github.com/JorritSchepers\" target=\"_blank\" style=\"width: 7%\">\n                <img class=\"no-selec\" src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png\" style=\"width: 100%\">\n            </a>\n        </div>\n    </div>\n</main>\n\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "canvas {\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n\nmain {\n  position: absolute;\n  display: flex;\n  top: 0;\n  left: 0;\n  font-family: Arial, Helvetica, sans-serif;\n\n  --border-color: #d3d3d3;\n  --border-width: 8px;\n  \n  --ui-hover-opacity: 0.8;\n  --margin-list-item: 10px;\n\n  --border-radius: 20px;\n  --ui-base-opacity: 0.9;\n  --bg-color: #333333;\n  --hl-color: #aaffff;\n}\n\n#container {\n  position: absolute;\n  display: flex;\n  top: 0;\n  left: 0;\n  opacity: var(--ui-base-opacity);\n}\n\n.no-selec {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n/*============================================================================================================== General */\n\n#contact-container {\n  width: 56vw;\n  height: 72vh;\n  top: 14vh;\n  left: 22vw;\n  justify-content: center;\n  opacity: 1;\n  border-radius: var(--border-radius);\n}\n\n/*========================================================================================================= Contact Page */\n\n.panel {\n  position: absolute;\n  background-color: var(--bg-color);\n  color: snow;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  box-shadow: 0px 5px 7px #151515;\n}\n\n.panel-title {\n  width: 100%;\n  height: 10%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: x-large;\n  border-bottom: 2px solid snow;\n}\n\n.panel-body {\n  width: 100%;\n  height: 90%;\n  display: flex;\n  overflow: auto;\n}\n\n.panel-title span {\n  width: 66%;\n  display: flex;\n  justify-content: center;\n}\n\n.panel-title div {\n  width: 17%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.panel-title div:hover {\n  font-size: larger;\n}\n\n/*================================================================================================================ Panel */\n\n#nav-container {\n  width: 20vw;\n  height: 60vh;\n  top: 20vh;\n  border-top-right-radius: var(--border-radius);\n  border-bottom-right-radius: var(--border-radius);\n}\n\n.nav-list-item {\n  width: calc(20vw - 4px);\n  height: 8%;\n  display: flex;\n  align-items: center;\n}\n\n.nav-list-item span {\n  margin-left: 1vw;\n}\n\n.nav-list-item:hover {\n  color: var(--hl-color);\n  border: 2px solid cyan;\n  text-shadow: 1px 1px 1px darkcyan;\n  font-size: large;\n}\n\n/*============================================================================================================ Navigator */\n\n#info-container {\n  width: 20vw;\n  height: 60vh;\n  top: 20vh;\n  left: 80vw;\n  border-top-left-radius: var(--border-radius);\n  border-bottom-left-radius: var(--border-radius);\n}\n\n.info-column {\n  width: 50%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.info-column span {\n  margin-left: 10%;\n  height: 6%;\n  display: flex;\n  align-items: center;\n}\n\n/*=========================================================================================================== Info Panel */\n\n#button-container {\n  width: 20vw;\n  height: 18vh;\n  top: 82vh;\n  left: 80vw;\n  border-top-left-radius: var(--border-radius);\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-content: center;\n}\n\n.button {\n  --button-size: 4.5vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: var(--button-size);\n  height: calc(calc(18vh - 2vw) / 2);\n  background-color: #222222;\n  color: snow;\n  border: none;\n}\n\n.button:hover {\n  color: var(--hl-color);\n  border: 2px solid cyan;\n  text-shadow: 1px 1px 2px darkcyan;\n}\n\n#ui-toggle-button {\n  position: absolute;\n  background-color: var(--bg-color);\n  width: 6vw;\n  height: 4vh;\n  border-radius: 2vh;\n  top: 94vh;\n  left: calc(100vw - 2vh - 6vw);\n  opacity: var(--ui-base-opacity);\n}\n\n/*========================================================================================================= Button Panel */\n\n#header {\n  left: 38vw;\n  width: 24vw;\n  border-bottom-left-radius: var(--border-radius);\n  border-bottom-right-radius: var(--border-radius);\n  display: flex;\n}\n\n#header span {\n  /* margin-top: 3px; */\n  padding: 3px;\n}\n\n/*=============================================================================================================== Header */\n\n#slider-panel {\n  width: 30vw;\n  height: 13vh;\n  left: 35vw;\n  top: 87vh;\n  border-top-left-radius: var(--border-radius);\n  border-top-right-radius: var(--border-radius);\n}\n\n#slider-header {\n  height: 30%;\n  font-size: medium;\n  border: none;\n}\n\n#slider-header span {\n  height: 100%;\n}\n\n#slider-body {\n  flex-direction: column;\n  align-items: center;\n}\n\n#slider-body span {\n  margin-top: 7px;\n}\n\n#slider {\n  width: 90%;\n}\n\n/*========================================================================================================= Slider Panel */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87QUFDVDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsTUFBTTtFQUNOLE9BQU87RUFDUCx5Q0FBeUM7O0VBRXpDLHVCQUF1QjtFQUN2QixtQkFBbUI7O0VBRW5CLHVCQUF1QjtFQUN2Qix3QkFBd0I7O0VBRXhCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsTUFBTTtFQUNOLE9BQU87RUFDUCwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSx5QkFBaUI7S0FBakIsc0JBQWlCO01BQWpCLHFCQUFpQjtVQUFqQixpQkFBaUI7QUFDbkI7O0FBQ0EsMEhBQTBIOztBQUUxSDtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osU0FBUztFQUNULFVBQVU7RUFDVix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLG1DQUFtQztBQUNyQzs7QUFDQSwwSEFBMEg7O0FBRTFIO0VBQ0Usa0JBQWtCO0VBQ2xCLGlDQUFpQztFQUNqQyxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxhQUFhO0VBQ2IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBLDBIQUEwSDs7QUFFMUg7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFNBQVM7RUFDVCw2Q0FBNkM7RUFDN0MsZ0RBQWdEO0FBQ2xEOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixpQ0FBaUM7RUFDakMsZ0JBQWdCO0FBQ2xCOztBQUNBLDBIQUEwSDs7QUFFMUg7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFNBQVM7RUFDVCxVQUFVO0VBQ1YsNENBQTRDO0VBQzVDLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFDQSwwSEFBMEg7O0FBRTFIO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixTQUFTO0VBQ1QsVUFBVTtFQUNWLDRDQUE0QztFQUM1QyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixrQ0FBa0M7RUFDbEMseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQ0FBaUM7RUFDakMsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULDZCQUE2QjtFQUM3QiwrQkFBK0I7QUFDakM7O0FBQ0EsMEhBQTBIOztBQUUxSDtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsK0NBQStDO0VBQy9DLGdEQUFnRDtFQUNoRCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUNBLDBIQUEwSDs7QUFFMUg7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7RUFDVixTQUFTO0VBQ1QsNENBQTRDO0VBQzVDLDZDQUE2QztBQUMvQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBQ0EsMEhBQTBIIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJjYW52YXMge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cblxubWFpbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcblxuICAtLWJvcmRlci1jb2xvcjogI2QzZDNkMztcbiAgLS1ib3JkZXItd2lkdGg6IDhweDtcbiAgXG4gIC0tdWktaG92ZXItb3BhY2l0eTogMC44O1xuICAtLW1hcmdpbi1saXN0LWl0ZW06IDEwcHg7XG5cbiAgLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAtLXVpLWJhc2Utb3BhY2l0eTogMC45O1xuICAtLWJnLWNvbG9yOiAjMzMzMzMzO1xuICAtLWhsLWNvbG9yOiAjYWFmZmZmO1xufVxuXG4jY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIG9wYWNpdHk6IHZhcigtLXVpLWJhc2Utb3BhY2l0eSk7XG59XG5cbi5uby1zZWxlYyB7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBHZW5lcmFsICovXG5cbiNjb250YWN0LWNvbnRhaW5lciB7XG4gIHdpZHRoOiA1NnZ3O1xuICBoZWlnaHQ6IDcydmg7XG4gIHRvcDogMTR2aDtcbiAgbGVmdDogMjJ2dztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG9wYWNpdHk6IDE7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xufVxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gQ29udGFjdCBQYWdlICovXG5cbi5wYW5lbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xuICBjb2xvcjogc25vdztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMHB4IDVweCA3cHggIzE1MTUxNTtcbn1cblxuLnBhbmVsLXRpdGxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgc25vdztcbn1cblxuLnBhbmVsLWJvZHkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ucGFuZWwtdGl0bGUgc3BhbiB7XG4gIHdpZHRoOiA2NiU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucGFuZWwtdGl0bGUgZGl2IHtcbiAgd2lkdGg6IDE3JTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wYW5lbC10aXRsZSBkaXY6aG92ZXIge1xuICBmb250LXNpemU6IGxhcmdlcjtcbn1cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBQYW5lbCAqL1xuXG4jbmF2LWNvbnRhaW5lciB7XG4gIHdpZHRoOiAyMHZ3O1xuICBoZWlnaHQ6IDYwdmg7XG4gIHRvcDogMjB2aDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG59XG5cbi5uYXYtbGlzdC1pdGVtIHtcbiAgd2lkdGg6IGNhbGMoMjB2dyAtIDRweCk7XG4gIGhlaWdodDogOCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5uYXYtbGlzdC1pdGVtIHNwYW4ge1xuICBtYXJnaW4tbGVmdDogMXZ3O1xufVxuXG4ubmF2LWxpc3QtaXRlbTpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1obC1jb2xvcik7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGN5YW47XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCBkYXJrY3lhbjtcbiAgZm9udC1zaXplOiBsYXJnZTtcbn1cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IE5hdmlnYXRvciAqL1xuXG4jaW5mby1jb250YWluZXIge1xuICB3aWR0aDogMjB2dztcbiAgaGVpZ2h0OiA2MHZoO1xuICB0b3A6IDIwdmg7XG4gIGxlZnQ6IDgwdnc7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbn1cblxuLmluZm8tY29sdW1uIHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uaW5mby1jb2x1bW4gc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIGhlaWdodDogNiU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IEluZm8gUGFuZWwgKi9cblxuI2J1dHRvbi1jb250YWluZXIge1xuICB3aWR0aDogMjB2dztcbiAgaGVpZ2h0OiAxOHZoO1xuICB0b3A6IDgydmg7XG4gIGxlZnQ6IDgwdnc7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5idXR0b24ge1xuICAtLWJ1dHRvbi1zaXplOiA0LjV2dztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiB2YXIoLS1idXR0b24tc2l6ZSk7XG4gIGhlaWdodDogY2FsYyhjYWxjKDE4dmggLSAydncpIC8gMik7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjI7XG4gIGNvbG9yOiBzbm93O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5idXR0b246aG92ZXIge1xuICBjb2xvcjogdmFyKC0taGwtY29sb3IpO1xuICBib3JkZXI6IDJweCBzb2xpZCBjeWFuO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggZGFya2N5YW47XG59XG5cbiN1aS10b2dnbGUtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XG4gIHdpZHRoOiA2dnc7XG4gIGhlaWdodDogNHZoO1xuICBib3JkZXItcmFkaXVzOiAydmg7XG4gIHRvcDogOTR2aDtcbiAgbGVmdDogY2FsYygxMDB2dyAtIDJ2aCAtIDZ2dyk7XG4gIG9wYWNpdHk6IHZhcigtLXVpLWJhc2Utb3BhY2l0eSk7XG59XG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBCdXR0b24gUGFuZWwgKi9cblxuI2hlYWRlciB7XG4gIGxlZnQ6IDM4dnc7XG4gIHdpZHRoOiAyNHZ3O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4jaGVhZGVyIHNwYW4ge1xuICAvKiBtYXJnaW4tdG9wOiAzcHg7ICovXG4gIHBhZGRpbmc6IDNweDtcbn1cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IEhlYWRlciAqL1xuXG4jc2xpZGVyLXBhbmVsIHtcbiAgd2lkdGg6IDMwdnc7XG4gIGhlaWdodDogMTN2aDtcbiAgbGVmdDogMzV2dztcbiAgdG9wOiA4N3ZoO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xufVxuXG4jc2xpZGVyLWhlYWRlciB7XG4gIGhlaWdodDogMzAlO1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4jc2xpZGVyLWhlYWRlciBzcGFuIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4jc2xpZGVyLWJvZHkge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jc2xpZGVyLWJvZHkgc3BhbiB7XG4gIG1hcmdpbi10b3A6IDdweDtcbn1cblxuI3NsaWRlciB7XG4gIHdpZHRoOiA5MCU7XG59XG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBTbGlkZXIgUGFuZWwgKi9cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! three */
    "./node_modules/three/build/three.module.js");
    /* harmony import */


    var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! three/examples/jsm/controls/OrbitControls */
    "./node_modules/three/examples/jsm/controls/OrbitControls.js");
    /* harmony import */


    var _model_planet_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./model/planet.model */
    "./src/app/model/planet.model.ts");
    /* harmony import */


    var _model_system_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./model/system.model */
    "./src/app/model/system.model.ts");

    var FOV = 40;
    var SUN_RADIUS = 696000;
    var spaceBackground = 8; // 8

    var SCALE_RATIOS = false;
    var PLANET_MAPS = ["mercury-map.jpg", "venus-map.jpg", "earth-map.jpeg", "earth-map2.jpg", "mars-map.jpg", "jupiter-map.jpg", "saturn-map.jpg", "uranus-map.jpg", "neptune-map.jpg", "moon-map.jpg"];

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.followPlanetName = null;
        this.timeRatio = 1;
        this.cameraMoveSpeed = 20; // Higher is slower 20

        this.targetMoveSpeed = this.cameraMoveSpeed;
        this.RADIUS_RATIO = 1;
        this.DISTANCE_RATIO = 1;
        this.SUN_RADIUS_RATIO = 1;
        this.cameraPos = [0, 250 * 10000, 800 * 10000]; // X, Y, Z

        this.cameraMoving = false;
        this.useGuideLines = true;
        this.showUI = true;
        this.showAddPlanetMenu = false;
        this.showContactPage = false;
        this.showInfoPanel = true;
        this.currentSystem = 0;
        this.systems = [new _model_system_model__WEBPACK_IMPORTED_MODULE_5__["Solarsystem"]("The Solar System")];
        this.planetCounter = 1;
        this.systemCounter = 1;
        this.startDay = Math.floor(Math.random() * 22000000);
        this.day = this.startDay;
        this.dayDisplay = 0;
        this.distanceDisplay = 0;
        this.distanceInAUDisplay = 0;
        this.navCurrentPage = 1; // 0=Systems, 1=Planets, 2=Moons

        this.currentSlider = "Time";
        this.railedCam = false;
        this.sliderValue = this.timeRatio;
        this.options = {
          floor: 0,
          ceil: 100
        };
        this.scaleSliderValue = 1;
        this.scaleOptions = {
          floor: 0.015,
          ceil: 2,
          step: 0.001
        };
        this.setup();
      }

      _createClass(AppComponent, [{
        key: "setup",
        value: function setup() {
          this.applyScaleIfWanted(SCALE_RATIOS);
          this.initThree();
          this.initTheSolarSystem();
        }
      }, {
        key: "initTheSolarSystem",
        value: function initTheSolarSystem() {
          var moonTextureMap = new three__WEBPACK_IMPORTED_MODULE_2__["TextureLoader"]().load('./assets/moon-map.jpg');
          this.sun = this.addPlanet('Sun', SUN_RADIUS / this.SUN_RADIUS_RATIO, 40, 0xAAAA00, 0, 0, 0, true, 0, null, new three__WEBPACK_IMPORTED_MODULE_2__["TextureLoader"]().load('./assets/sun-map.jpg'));
          this.addPlanet('Mercury', 2440, 20, 0x777777, 57910000, 3.38, 2, false, 88, false, new three__WEBPACK_IMPORTED_MODULE_2__["TextureLoader"]().load('./assets/mercury-map.jpg'));
          this.addPlanet('Venus', 6052, 20, 0x7A381C, 108200000, 3.86, 2.7, false, 225, true, new three__WEBPACK_IMPORTED_MODULE_2__["TextureLoader"]().load('./assets/venus-map.jpg'));
          var earth = this.addPlanet('Earth', 6371, 20, 0x243E49, 149600000, 7.155, 23.4, false, 365, false, new three__WEBPACK_IMPORTED_MODULE_2__["TextureLoader"]().load('./assets/earth-map2.jpg'));
          earth.addMoon('Moon', 1737, 20, 0x777777, 384400, 5.14, false, 27, true, moonTextureMap);
          var mars = this.addPlanet('Mars', 3390, 20, 0xAC6349, 227900000, 5.65, 25, false, 687, false, new three__WEBPACK_IMPORTED_MODULE_2__["TextureLoader"]().load('./assets/mars-map.jpg'));
          mars.addMoon("Phobos", 11.1, 20, 0x777777, 9377, 1.093, false, 0.463, true, moonTextureMap);
          mars.addMoon("Deimons", 6.3, 20, 0x777777, 23460, 0.93, false, 5.44, true, moonTextureMap);
          var jupiter = this.addPlanet('Jupiter', 69911, 20, 0x9F8E7A, 778500000, 6.09, 3, false, 4332, false, new three__WEBPACK_IMPORTED_MODULE_2__["TextureLoader"]().load('./assets/jupiter-map.jpg'));
          jupiter.addMoon('Ganymede', 5268 / 2, 20, 0x999999, 1070412, 0.204, false, 7.1546, false, new three__WEBPACK_IMPORTED_MODULE_2__["TextureLoader"]().load('./assets/moon-map.jpg'));
          jupiter.addMoon('Callisto', 4820 / 2, 20, 0x555555, 1882709, 0.205, false, 16.689, false, new three__WEBPACK_IMPORTED_MODULE_2__["TextureLoader"]().load('./assets/moon-map.jpg'));
          jupiter.addMoon('Io', 3643 / 2, 20, 0xD0C757, 421700, 0.050, false, 1.7691, false, new three__WEBPACK_IMPORTED_MODULE_2__["TextureLoader"]().load('./assets/moon-map.jpg'));
          jupiter.addMoon('Europa', 3121 / 2, 20, 0x856033, 671034, 0.471, false, 3.5512, false, new three__WEBPACK_IMPORTED_MODULE_2__["TextureLoader"]().load('./assets/moon-map.jpg'));
          var saturn = this.addPlanet('Saturn', 58232, 20, 0xB2915F, 1434000000, 5.51, 26.73, false, 10757, false, new three__WEBPACK_IMPORTED_MODULE_2__["TextureLoader"]().load('./assets/saturn-map.jpg'));
          saturn.addMoon("Titan", 5149 / 2, 20, 0x777777, 1221870, 0.349, false, 16, true, moonTextureMap);
          saturn.addMoon("Rhea", 1527 / 2, 20, 0x777777, 527108, 0.327, false, 4.5, true, moonTextureMap);
          saturn.addMoon("Lapetus", 1470 / 2, 20, 0x777777, 3560820, 15.470, false, 79, true, moonTextureMap);
          saturn.addMoon("Dione", 1123 / 2, 20, 0x777777, 377396, 0.002, false, 2.7, true, moonTextureMap);
          saturn.addMoon("Tethys", 1062 / 2, 20, 0x777777, 294619, 0.168, false, 1.9, true, moonTextureMap);
          saturn.addMoon("Enceladus", 504 / 2, 20, 0x777777, 237948, 0.010, false, 1.4, true, moonTextureMap);
          saturn.addMoon("Mimas", 396 / 2, 20, 0x777777, 185539, 1.566, false, 0.9, true, moonTextureMap);
          var uranus = this.addPlanet('Uranus', 25362, 20, 0x8EB2C4, 2871000000, 6.48, 97.77, false, 30687, false, new three__WEBPACK_IMPORTED_MODULE_2__["TextureLoader"]().load('./assets/uranus-map.jpg'));
          uranus.addMoon("Titania", 1576 / 2, 20, 0x777777, 435910, 0.340, false, 8.7, true, moonTextureMap);
          uranus.addMoon("Oberon", 1522 / 2, 20, 0x777777, 583520, 0.058, false, 13.4, true, moonTextureMap);
          uranus.addMoon("Umbriel", 1169 / 2, 20, 0x777777, 266300, 0.205, false, 4.1, true, moonTextureMap);
          uranus.addMoon("Ariel", 1157 / 2, 20, 0x777777, 191020, 0.260, false, 2.5, true, moonTextureMap);
          uranus.addMoon("Miranda", 471 / 2, 20, 0x777777, 129390, 4.232, false, 1.4, true, moonTextureMap);
          var neptune = this.addPlanet('Neptune', 24622, 20, 0x4662F6, 4495000000, 6.43, 28, false, 60190, false, new three__WEBPACK_IMPORTED_MODULE_2__["TextureLoader"]().load('./assets/neptune-map.jpg'));
          neptune.addMoon("Triton", 2705 / 2, 20, 0x777777, 354759, 180 - 156.865, false, 5.8, true, moonTextureMap);
        }
      }, {
        key: "applyScaleIfWanted",
        value: function applyScaleIfWanted(_boolean) {
          if (_boolean) {
            this.RADIUS_RATIO = 10; // 10

            this.DISTANCE_RATIO = 8000; // 8000

            this.SUN_RADIUS_RATIO = 20; // 20

            this.cameraPos = [0, 18000, 52000]; // 0, 18k, 52k
          }
        }
      }, {
        key: "initThree",
        value: function initThree() {
          var scene = new three__WEBPACK_IMPORTED_MODULE_2__["Scene"]();
          var camera = new three__WEBPACK_IMPORTED_MODULE_2__["PerspectiveCamera"](FOV, window.innerWidth / window.innerHeight, 0.1, 5000000000000);
          camera.position.set(this.cameraPos[0], this.cameraPos[1], this.cameraPos[2]);
          var renderer = renderer = new three__WEBPACK_IMPORTED_MODULE_2__["WebGLRenderer"]({
            antialias: true,
            logarithmicDepthBuffer: true
          });
          renderer.setPixelRatio(window.devicePixelRatio);
          renderer.setSize(window.innerWidth, window.innerHeight);
          var controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_3__["OrbitControls"](camera, renderer.domElement);
          this.controls = controls;
          var texture = new three__WEBPACK_IMPORTED_MODULE_2__["TextureLoader"]().load('./assets/space-background' + spaceBackground + '.jpg', function () {
            var rt = new three__WEBPACK_IMPORTED_MODULE_2__["WebGLCubeRenderTarget"](texture.image.height);
            rt.fromEquirectangularTexture(renderer, texture);
            scene.background = rt.texture;
          });
          this.scene = scene;
          this.camera = camera;
          this.renderer = renderer;
          document.body.appendChild(renderer.domElement); //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

          var app = this;

          var animate = function animate() {
            app.day += app.timeRatio / 120;
            app.dayDisplay = Math.floor(app.day - app.startDay);
            app.distanceInAUDisplay = Math.round(app.distanceDisplay / 149600) / 1000;
            app.distanceDisplay = app.getCameraDistance();
            requestAnimationFrame(animate);
            controls.update();
            app.onWindowResize();
            app.updatePlanetDistances();
            app.movePlanets(app.systems[app.currentSystem].planets);
            if (app.cameraMoving) app.moveCameraToPlanet();else {
              app.timeRatio = app.sliderValue;
              if (app.followPlanetName != null) app.followPlanet(app.followPlanetName);
            }
            if (app.sun != null) app.sun.model.rotation.y += app.timeRatio / 1000;
            renderer.render(scene, camera);
          };

          animate();
        }
      }, {
        key: "getCameraDistance",
        value: function getCameraDistance() {
          var target = this.controls.target;
          var distance = Math.sqrt(Math.abs(Math.pow(target.x, 2)) + Math.abs(Math.pow(target.z, 2)));
          distance = Math.sqrt(Math.abs(Math.pow(distance, 2)) + Math.abs(Math.pow(target.y, 2)));
          return Math.round(distance);
        }
      }, {
        key: "updatePlanetDistances",
        value: function updatePlanetDistances() {
          for (var i = 0; i < this.systems[this.currentSystem].planets.length; i++) {
            var planet = this.systems[this.currentSystem].planets[i];
            planet.distance = planet.ORIGINAL_DISTANCE * this.scaleSliderValue;
          }
        }
      }, {
        key: "addPlanet",
        value: function addPlanet(name, radius, detail, color, distance, inclination, axis, isStar, speed, clockwise, textureMap, moonOf) {
          var planet = new _model_planet_model__WEBPACK_IMPORTED_MODULE_4__["Planet"](this, name, radius / this.RADIUS_RATIO, detail, color, distance / this.DISTANCE_RATIO, inclination, axis, isStar, speed, clockwise, textureMap, moonOf);
          if (!isStar) this.systems[this.currentSystem].addPlanet(planet);
          console.log("Created planet: " + planet.name);
          return planet;
        }
      }, {
        key: "addRandomPlanet",
        value: function addRandomPlanet() {
          for (var index = 0; index < 1; index++) {
            var map = new three__WEBPACK_IMPORTED_MODULE_2__["TextureLoader"]().load('./assets/' + PLANET_MAPS[Math.floor(Math.random() * PLANET_MAPS.length)]);
            var moonMap = new three__WEBPACK_IMPORTED_MODULE_2__["TextureLoader"]().load('./assets/moon-map.jpg');
            var randomRadius = Math.round(50000 + Math.random() * 100000);
            var planetName = 'New Planet ' + this.planetCounter;
            var planet = this.addPlanet(planetName, //name
            randomRadius, //radius
            20, //detail
            0xff00ff, // color
            Math.round(10000000 + Math.random() * 20000000), // distance
            Math.round(Math.random() * 30 * 100) / 100, // inclination
            Math.round(Math.random() * 30 * 100) / 100, // Axis
            false, // isstar
            Math.round(200 + Math.random() * 1000), // speed
            false, // clockwise
            map // texture map
            );
            var moonCounter = 1;

            for (var i = 0; i < Math.floor(Math.random() * 6); i++) {
              planet.addMoon('Moon ' + moonCounter + " of " + planetName, //name
              Math.round(randomRadius / 20 + Math.random() * randomRadius / 8), //radius
              20, //detail
              0x777777, // color
              Math.round(randomRadius * 6 + Math.random() * randomRadius * 20), // distance
              Math.round(Math.random() * 20 * 100) / 100, // inclination
              false, // isstar
              Math.round(20 + Math.random() * 40), // speed
              false, // clockwise
              moonMap // texture map
              );
              moonCounter++;
            }

            this.planetCounter++;
            this.flyToPlanet(planetName);
          }
        }
      }, {
        key: "addNewSystem",
        value: function addNewSystem() {
          this.addSystem("New Solarsystem " + this.systemCounter);
          this.systemCounter++;
        }
      }, {
        key: "addSystem",
        value: function addSystem(systemName) {
          this.systems.push(new _model_system_model__WEBPACK_IMPORTED_MODULE_5__["Solarsystem"](systemName));
          this.flyToPlanet(this.sun.name);
          this.switchToSystem(this.systems.length - 1);
        }
      }, {
        key: "switchToSystem",
        value: function switchToSystem(systemIndex) {
          this.navCurrentPage = 1;
          this.removeAllPlanetsFromScene();
          this.flyToPlanet(this.sun.name);
          this.currentSystem = systemIndex;
          this.addAllPlanetsToScene();
        }
      }, {
        key: "getSystemIndex",
        value: function getSystemIndex(name) {
          for (var i = 0; i < this.systems.length; i++) {
            if (this.systems[i].name == name) return i;
          }

          return 0;
        }
      }, {
        key: "removeAllPlanetsFromScene",
        value: function removeAllPlanetsFromScene() {
          for (var i = 0; i < this.systems[this.currentSystem].planets.length; i++) {
            var planet = this.systems[this.currentSystem].planets[i];
            this.scene.remove(planet.model);
            this.scene.remove(planet.guideLine);

            for (var j = 0; j < planet.moons.length; j++) {
              var moon = planet.moons[j];
              this.scene.remove(moon.model);
              this.scene.remove(moon.guideLine);
            }
          }
        }
      }, {
        key: "addAllPlanetsToScene",
        value: function addAllPlanetsToScene() {
          for (var i = 0; i < this.systems[this.currentSystem].planets.length; i++) {
            var planet = this.systems[this.currentSystem].planets[i];
            this.scene.add(planet.model);
            if (this.useGuideLines) this.scene.add(planet.guideLine);

            for (var j = 0; j < planet.moons.length; j++) {
              var moon = planet.moons[j];
              this.scene.add(moon.model);
              if (this.useGuideLines) this.scene.add(moon.guideLine);
            }
          }
        }
      }, {
        key: "createPlanet",
        value: function createPlanet(radius, detail, color, distance, axis, isStar, textureMap) {
          var geometry = new three__WEBPACK_IMPORTED_MODULE_2__["SphereGeometry"](radius, detail, detail);
          var material = new three__WEBPACK_IMPORTED_MODULE_2__["MeshStandardMaterial"]({
            color: color,
            map: textureMap
          });

          if (isStar) {
            material = new three__WEBPACK_IMPORTED_MODULE_2__["MeshBasicMaterial"]({
              color: color,
              map: textureMap
            });
          }

          var planet = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](geometry, material);
          planet.position.set(distance, 0, 0);

          if (isStar) {
            var pointLight = new three__WEBPACK_IMPORTED_MODULE_2__["PointLight"](isStar);
            pointLight.position.set(distance, 0, 0);
            this.scene.add(pointLight);
          }

          planet.rotation.z = axis / 180 * Math.PI;
          this.scene.add(planet);
          return planet;
        }
      }, {
        key: "movePlanets",
        value: function movePlanets(planets) {
          for (var i = 0; i < planets.length; i++) {
            var planet = planets[i];
            planet.oldX = planet.model.position.x;
            planet.oldY = planet.model.position.y;
            planet.oldZ = planet.model.position.z;
            planet.angle = this.day / planet.speed * 360 % 360;
            var ratio = Math.cos(planet.inclination / 180 * Math.PI);

            if (planet.moonOf != null) {
              planet.guideLine.position.set(planet.moonOf.model.position.x, planet.moonOf.model.position.y, planet.moonOf.model.position.z);
              planet.model.position.set(planet.moonOf.model.position.x + Math.sin(planet.angle / 180 * Math.PI) * ratio * planet.distance, planet.moonOf.model.position.y + Math.sin(planet.angle / 180 * Math.PI) * planet.distance * Math.sin(planet.inclination / 180 * Math.PI), planet.moonOf.model.position.z + Math.cos(planet.angle / 180 * Math.PI) * planet.distance);
            } else {
              planet.model.position.set(Math.sin(planet.angle / 180 * Math.PI) * ratio * planet.distance, Math.sin(planet.angle / 180 * Math.PI) * planet.distance * Math.sin(planet.inclination / 180 * Math.PI), Math.cos(planet.angle / 180 * Math.PI) * planet.distance);
            }

            this.movePlanets(planet.moons);
          }
        }
      }, {
        key: "onWindowResize",
        value: function onWindowResize() {
          this.camera.aspect = window.innerWidth / window.innerHeight;
          this.camera.updateProjectionMatrix();
          this.renderer.setSize(window.innerWidth, window.innerHeight);
        }
      }, {
        key: "toggleGuideLines",
        value: function toggleGuideLines() {
          for (var i = 0; i < this.systems[this.currentSystem].planets.length; i++) {
            var planet = this.systems[this.currentSystem].planets[i];

            if (this.useGuideLines) {
              this.scene.remove(planet.guideLine);

              for (var j = 0; j < planet.moons.length; j++) {
                this.scene.remove(planet.moons[j].guideLine);
              }
            } else {
              planet.createGuideLine();
              planet.showGuideLine();

              for (var _j = 0; _j < planet.moons.length; _j++) {
                planet.moons[_j].createGuideLine();

                planet.moons[_j].showGuideLine();
              }
            }
          }

          this.useGuideLines = !this.useGuideLines;
        }
      }, {
        key: "flyToPlanet",
        value: function flyToPlanet(planetName) {
          if (planetName == this.sun.name) {
            this.followPlanetName = null;
            this.cameraMoving = false;
            this.controls.target.x = this.sun.model.position.x;
            this.controls.target.y = this.sun.model.position.y;
            this.controls.target.z = this.sun.model.position.z;
            this.camera.position.set(this.cameraPos[0], this.cameraPos[1], this.cameraPos[2]);
            return;
          }

          this.showInfoPanel = true;
          if (this.followPlanetName == planetName) return;
          this.followPlanetName = planetName;
          this.cameraMoving = true;
          var planet = this.getPlanet(planetName);

          if (planet.moons.length > 0) {
            this.navCurrentPage = 2;
          }
        }
      }, {
        key: "moveCameraToPlanet",
        value: function moveCameraToPlanet() {
          if (this.followPlanetName == null) return;
          var planet = this.getPlanet(this.followPlanetName);
          var distance = planet.radius * 5;
          var ratio = (planet.distance - distance) / planet.distance;

          if (planet.moonOf != null) {
            ratio = (planet.moonOf.distance - distance) / planet.moonOf.distance;
          }

          var destination = [planet.model.position.x * ratio, planet.model.position.y, planet.model.position.z * ratio];
          this.timeRatio = 0;
          this.camera.position.x += (destination[0] - this.camera.position.x) / this.cameraMoveSpeed;
          this.camera.position.y += (destination[1] - this.camera.position.y) / this.cameraMoveSpeed;
          this.camera.position.z += (destination[2] - this.camera.position.z) / this.cameraMoveSpeed;
          this.controls.target.x += (planet.model.position.x - this.controls.target.x) / this.targetMoveSpeed;
          this.controls.target.y += (planet.model.position.y - this.controls.target.y) / this.targetMoveSpeed;
          this.controls.target.z += (planet.model.position.z - this.controls.target.z) / this.targetMoveSpeed;

          if (destination[0] - this.camera.position.x <= 100 && destination[0] - this.camera.position.x >= -100) {
            this.cameraMoving = false;
          }
        }
      }, {
        key: "followPlanet",
        value: function followPlanet(name) {
          var planet = this.getPlanet(name);
          var ratio = (planet.distance - planet.radius * 5) / planet.distance;

          if (planet.moonOf != null) {
            ratio = (planet.moonOf.distance - planet.radius * 5) / planet.moonOf.distance;
          }

          this.controls.target.set(planet.model.position.x, planet.model.position.y, planet.model.position.z);

          if (this.railedCam) {
            this.camera.position.set(planet.model.position.x * ratio, planet.model.position.y * ratio, planet.model.position.z * ratio);
          } else {
            this.camera.position.x += planet.model.position.x - planet.oldX;
            this.camera.position.y += planet.model.position.y - planet.oldY;
            this.camera.position.z += planet.model.position.z - planet.oldZ;
          }
        }
      }, {
        key: "getPlanet",
        value: function getPlanet(name) {
          for (var i = 0; i < this.systems[this.currentSystem].planets.length; i++) {
            var planet = this.systems[this.currentSystem].planets[i];
            if (planet.name == name) return this.systems[this.currentSystem].planets[i];

            for (var j = 0; j < planet.moons.length; j++) {
              if (planet.moons[j].name == name) return planet.moons[j];
            }
          }
        }
      }, {
        key: "setInfoPanel",
        value: function setInfoPanel(state) {
          this.showInfoPanel = state;
        }
      }]);

      return AppComponent;
    }();

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'my-app',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular-slider/ngx-slider */
    "./node_modules/@angular-slider/ngx-slider/fesm2015/angular-slider-ngx-slider.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_5__["NgxSliderModule"]],
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/model/planet.model.ts":
  /*!***************************************!*\
    !*** ./src/app/model/planet.model.ts ***!
    \***************************************/

  /*! exports provided: Planet */

  /***/
  function srcAppModelPlanetModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Planet", function () {
      return Planet;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! three */
    "./node_modules/three/build/three.module.js");

    var GUIDELINE_RATIO = 10;

    var Planet = /*#__PURE__*/function () {
      function Planet(app, name, radius, detail, color, distance, inclination, axis, isStar, speed, clockwise, textureMap, moonOf) {
        _classCallCheck(this, Planet);

        this.app = app;
        this.name = name;
        this.radius = radius;
        this.detail = detail;
        this.color = "#" + color.toString(16);
        this.distance = distance;
        this.inclination = inclination;
        if (moonOf != null) this.inclination += moonOf.inclination;
        if (!clockwise) this.inclination += 180;
        this.axis = axis;
        this.ORIGINAL_DISTANCE = distance;
        this.isStar = isStar;
        this.speed = speed;
        this.clockwise = clockwise;
        this.textureMap = textureMap;

        if (textureMap == null) {
          this.model = app.createPlanet(radius, detail, color, distance, axis, isStar);
        } else {
          this.model = app.createPlanet(radius, detail, null, distance, axis, isStar, textureMap);
        }

        if (!isStar) this.createGuideLine();
        this.moons = [];
        this.moonOf = moonOf;
      }

      _createClass(Planet, [{
        key: "createGuideLine",
        value: function createGuideLine() {
          var g = new three__WEBPACK_IMPORTED_MODULE_1__["TorusGeometry"](this.distance, this.radius / GUIDELINE_RATIO, 20, 2000);
          var m = new three__WEBPACK_IMPORTED_MODULE_1__["MeshBasicMaterial"]({
            color: this.color
          });
          var t = new three__WEBPACK_IMPORTED_MODULE_1__["Mesh"](g, m);
          t.rotation.x = 90 / 180 * Math.PI;
          t.rotation.y = this.inclination / 180 * Math.PI;
          t.position.set(0, 0, 0);
          this.guideLine = t;
          if (this.app.useGuideLines) this.showGuideLine();
        }
      }, {
        key: "showGuideLine",
        value: function showGuideLine() {
          this.app.scene.add(this.guideLine);
        }
      }, {
        key: "removeGuideLine",
        value: function removeGuideLine() {
          this.app.scene.remove(this.guideLine);
        }
      }, {
        key: "addMoon",
        value: function addMoon(name, radius, detail, color, distance, inclination, isStar, speed, clockwise, textureMap) {
          var moon = new Planet(this.app, name, radius / this.app.RADIUS_RATIO, detail, color, distance / this.app.DISTANCE_RATIO, inclination, 0, isStar, speed, clockwise, textureMap, this);
          this.moons.push(moon);
          this.app.scene.add(moon.model);
        }
      }, {
        key: "getInclination",
        value: function getInclination() {
          if (this.moonOf != null) return Math.round((this.inclination - this.moonOf.inclination) * 1000) / 1000;
          if (this.inclination > 180) return Math.round((this.inclination - 180) * 1000) / 1000;
          return this.inclination;
        }
      }]);

      return Planet;
    }();
    /***/

  },

  /***/
  "./src/app/model/system.model.ts":
  /*!***************************************!*\
    !*** ./src/app/model/system.model.ts ***!
    \***************************************/

  /*! exports provided: Solarsystem */

  /***/
  function srcAppModelSystemModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Solarsystem", function () {
      return Solarsystem;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Solarsystem = /*#__PURE__*/function () {
      function Solarsystem(name, planets) {
        _classCallCheck(this, Solarsystem);

        this.name = name;
        if (planets != null) this.planets = planets;else this.planets = [];
      }

      _createClass(Solarsystem, [{
        key: "addPlanet",
        value: function addPlanet(planet) {
          this.planets.push(planet);
        }
      }]);

      return Solarsystem;
    }();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/jorritschepers/Documents/Projects/SolarSim/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map