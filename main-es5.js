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


    __webpack_exports__["default"] = "<canvas id=\"bg\"></canvas>\n<main>\n    <button id=\"ui-toggle-button\" (click)=\"showUI = !showUI\"></button>\n    <div id=\"container\" *ngIf=\"showUI\"> \n\n        <!-- System list -->\n        <div id=\"system-list-container\" class = \"list-container no-selec\">\n            <div class=\"system-list-item list-item button\" *ngFor=\"let system of systems\" (click)=\"switchToSystem(getSystemIndex(system.name))\">\n                {{system.name}}\n            </div>\n            <div class=\"new-button\" (click)=\"addNewSystem()\"> + </div>\n        </div>\n\n        <!-- Planet list -->\n        <div id=\"planet-list-container\" class = \"list-container no-selec\">\n            <div class=\"planet-list-item list-item button\" [ngStyle]=\"{'background-color': sun.color}\" (click)=\"flyToPlanet(sun.name)\">\n                {{sun.name}}\n            </div>\n            <div class=\"planet-list-item list-item button\" *ngFor=\"let planet of systems[currentSystem].planets\" [ngStyle]=\"{'background-color': planet.color}\" (click)=\"flyToPlanet(planet.name)\">\n                {{planet.name}}\n            </div>\n            <div class=\"new-button\" (click)=\"addRandomPlanet()\"> + </div>\n        </div>\n\n        <!-- Scale slider -->\n        <div id=\"scale-slider-container\" class=\"no-selec\">\n            <div class=\"scale-slider\">\n                <ngx-slider [(value)]=\"scaleSliderValue\" [options]=\"scaleOptions\"></ngx-slider>\n            </div>\n        </div>\n\n        <!-- Time slider -->\n        <div id=\"time-slider-container\" class=\"no-selec\">\n            <div class=\"time-slider\">\n                <ngx-slider [(value)]=\"sliderValue\" [options]=\"options\"></ngx-slider>\n            </div>\n        </div>\n\n        <!-- Toggle buttons -->\n        <button class= \"toggle-button button\" id=\"guidelines-toggle-button\" (click)=\"toggleGuideLines()\"> Guide lines </button>\n        <button class= \"toggle-button button\" id=\"contact-toggle-button\" (click)=\"toggleContactPage()\"> Contact Me </button>\n\n        <!-- Info -->\n        <span id= \"day-display\" class=\"info-display no-selec\"> Day: {{dayDisplay}} </span>\n        <span id= \"distance-display\" class=\"info-display no-selec\"> Distance to the sun: {{distanceDisplay}}km ({{distanceInAUDisplay}}AU) </span>\n        \n        <!-- Add planet menu -->\n        <!-- <div class=\"menu-container\" id=\"add-planet-menu-container\" *ngIf=\"showAddPlanetMenu\">\n\n        </div> -->\n\n        <!-- Info panel -->\n        <!-- <div class=\"menu-container\" id=\"info-panel-container\">\n            \n        </div> -->\n\n        <!-- Contact page -->\n        <div id=contact-container class=\"menu-container\" *ngIf=\"showContactPage\"> \n            <h1 class=\"no-selec\">Contact me</h1>\n            <p><span class=\"no-selec\">Email:</span>&nbsp; jorrit.schepers1@gmail.com</p>\n            <a href=\"https://github.com/JorritSchepers\" target=\"_blank\" style=\"width: 7%\">\n                <img class=\"no-selec\" src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png\" style=\"width: 100%\">\n            </a>\n        </div>\n    </div>\n</main>\n\n";
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


    __webpack_exports__["default"] = "  canvas {\n    position: fixed;\n    top: 0;\n    left: 0;\n  }\n  \n  main {\n    position: absolute;\n    display: flex;\n    top: 0;\n    left: 0;\n    font-family: Arial, Helvetica, sans-serif;\n\n    --border-color: #d3d3d3;\n    --border-width: 8px;\n    --ui-base-opacity: 0.7;\n    --ui-hover-opacity: 0.8;\n    --margin-list-item: 10px;\n  }\n  \n  #container {\n    position: absolute;\n    display: flex;\n    top: 0;\n    left: 0;\n  }\n  \n  #time-slider-container {\n    position: absolute;\n    top: 93vh;\n    left: 30vw;\n    width: 40vw;\n    height: 7vh;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    flex-wrap: wrap;\n    opacity: var(--ui-base-opacity);\n  }\n  \n  #time-slider-container:hover {\n    opacity: var(--ui-hover-opacity);\n    transition: opacity .5s;\n  }\n  \n  #time-slider-container:active {\n    opacity: 1;\n    transition: opacity .5s;\n  }\n  \n  #scale-slider-container {\n    position: absolute;\n    top: 87vh;\n    left: 30vw;\n    width: 40vw;\n    height: 7vh;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    flex-wrap: wrap;\n    opacity: var(--ui-base-opacity);\n  }\n  \n  #time-slider-container:hover {\n    opacity: var(--ui-hover-opacity);\n    transition: opacity .5s;\n  }\n  \n  #time-slider-container:active {\n    opacity: 1;\n    transition: opacity .5s;\n  }\n  \n  .no-selec {\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n  }\n  \n  #time-slider-output {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    margin: 1vh;\n  }\n  \n  #timeSliderOutput {\n    color: snow;\n    font-size: 3vh;\n    margin: 0;\n  }\n  \n  .time-slider-number {\n    width: 5%;\n    margin: 0;\n  }\n  \n  .time-slider {\n    width: 80%; \n    margin: 0;\n  }\n  \n  .scale-slider {\n    width: 80%; \n    margin: 0;\n  }\n  \n  #guidelines-toggle-button {\n    left: 70vw;\n  }\n  \n  #contact-toggle-button {\n    left: 94vw;\n  }\n  \n  #add-planet-button {\n    top: 90vh;\n    left: 77vw;\n  }\n  \n  .toggle-button {\n    position: absolute;\n    top: 90vh;\n    width: 8vh;\n    height: 8vh;\n    background-color: lightskyblue;\n  }\n  \n  #ui-toggle-button {\n    position: absolute;\n    width: 4vh;\n    height: 4vh;\n    border-radius: 4vh;\n    background-color: var(--border-color);\n    border: 0;\n    top: 2vh;\n    left: calc(100vw - 6vh);\n    transition: opacity .5s;\n    opacity: var(--ui-base-opacity);\n  }\n  \n  .toggle-button:hover {\n    transition: opacity .5s;\n    opacity: var(--ui-hover-opacity);\n  }\n  \n  .menu-container {\n    background-color: lightskyblue;\n    opacity: var(--ui-base-opacity);\n    border-radius: 40px;\n    border: var(--border-width) solid var(--border-color);\n    position: absolute;\n  }\n  \n  #add-planet-menu-container {\n    width: 30vw;\n    height: 70vh;\n    top: 15vh;\n    left: 66vw;\n    display: flex;\n  }\n  \n  #info-panel-container {\n    width: 30vw;\n    height: 70vh;\n    top: 15vh;\n    left: 4vw;\n    display: none;\n  }\n  \n  .list-container {\n    width: 94vw;\n    height: 4vh;\n    position: absolute;\n    left: calc(2vh - var(--margin-list-item));\n    display: flex;\n    align-items: center;\n  }\n  \n  .list-item {\n    width: 150px;\n    height: 100%;\n    margin: var(--margin-list-item);\n  }\n  \n  #system-list-container {\n    top : 2vh;\n  }\n  \n  .system-list-item {\n    background-color: rgb(119, 119, 119);\n  }\n  \n  #planet-list-container {\n    top: 10vh; \n  }\n  \n  .new-button {\n    margin: var(--margin-list-item);\n    background-color: var(--border-color);\n    height: calc(4vh + var(--border-width));\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: calc(4vh + var(--border-width));\n    border-radius: calc(4vh + var(--border-width) / 2);\n    opacity: var(--ui-base-opacity);\n    transition: opacity .5s;\n  }\n  \n  .new-button:hover {\n    transition: opacity .5s;\n    opacity: var(--ui-hover-opacity);\n  }\n  \n  .new-button:active {\n    opacity: 1;\n  }\n  \n  .button {\n    border-radius: 40px;\n    border: var(--border-width) solid var(--border-color);\n    transition: opacity .5s;\n    opacity: var(--ui-base-opacity);  \n    color: snow;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  \n  .button:hover {\n    transition: opacity .5s;\n    opacity: var(--ui-hover-opacity);\n  }\n  \n  .button:active {\n    opacity: 1;\n  }\n  \n  .info-display {\n    color: white;\n    position: fixed;\n    left: 3vh;\n    opacity: var(--ui-base-opacity);\n  }\n  \n  #day-display {\n    bottom: 4vh;\n  }\n  \n  #distance-display {\n    bottom: 2vh;\n  }\n  \n  #contact-container {\n    width: 50vw;\n    height: 50vh;\n    top: 25vh;\n    left: 25vw;\n    opacity: 1;\n    background-color: darkgray;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkVBQUU7SUFDRSxlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87RUFDVDs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsTUFBTTtJQUNOLE9BQU87SUFDUCx5Q0FBeUM7O0lBRXpDLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2Qix3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLE1BQU07SUFDTixPQUFPO0VBQ1Q7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0lBQ1gsV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZiwrQkFBK0I7RUFDakM7O0VBRUE7SUFDRSxnQ0FBZ0M7SUFDaEMsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7SUFDWCxXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLCtCQUErQjtFQUNqQzs7RUFFQTtJQUNFLGdDQUFnQztJQUNoQyx1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UseUJBQWlCO09BQWpCLHNCQUFpQjtRQUFqQixxQkFBaUI7WUFBakIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxTQUFTO0VBQ1g7O0VBRUE7SUFDRSxTQUFTO0lBQ1QsU0FBUztFQUNYOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFVBQVU7SUFDVixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxTQUFTO0lBQ1QsVUFBVTtFQUNaOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsV0FBVztJQUNYLDhCQUE4QjtFQUNoQzs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixxQ0FBcUM7SUFDckMsU0FBUztJQUNULFFBQVE7SUFDUix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLCtCQUErQjtFQUNqQzs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixnQ0FBZ0M7RUFDbEM7O0VBRUE7SUFDRSw4QkFBOEI7SUFDOUIsK0JBQStCO0lBQy9CLG1CQUFtQjtJQUNuQixxREFBcUQ7SUFDckQsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixTQUFTO0lBQ1QsVUFBVTtJQUNWLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osU0FBUztJQUNULFNBQVM7SUFDVCxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjtJQUNsQix5Q0FBeUM7SUFDekMsYUFBYTtJQUNiLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixZQUFZO0lBQ1osK0JBQStCO0VBQ2pDOztFQUVBO0lBQ0UsU0FBUztFQUNYOztFQUVBO0lBQ0Usb0NBQW9DO0VBQ3RDOztFQUVBO0lBQ0UsU0FBUztFQUNYOztFQUVBO0lBQ0UsK0JBQStCO0lBQy9CLHFDQUFxQztJQUNyQyx1Q0FBdUM7SUFDdkMsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsc0NBQXNDO0lBQ3RDLGtEQUFrRDtJQUNsRCwrQkFBK0I7SUFDL0IsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLGdDQUFnQztFQUNsQzs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixxREFBcUQ7SUFDckQsdUJBQXVCO0lBQ3ZCLCtCQUErQjtJQUMvQixXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsZ0NBQWdDO0VBQ2xDOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGVBQWU7SUFDZixTQUFTO0lBQ1QsK0JBQStCO0VBQ2pDOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixTQUFTO0lBQ1QsVUFBVTtJQUNWLFVBQVU7SUFDViwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0VBQ3hCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIGNhbnZhcyB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICB9XG4gIFxuICBtYWluIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcblxuICAgIC0tYm9yZGVyLWNvbG9yOiAjZDNkM2QzO1xuICAgIC0tYm9yZGVyLXdpZHRoOiA4cHg7XG4gICAgLS11aS1iYXNlLW9wYWNpdHk6IDAuNztcbiAgICAtLXVpLWhvdmVyLW9wYWNpdHk6IDAuODtcbiAgICAtLW1hcmdpbi1saXN0LWl0ZW06IDEwcHg7XG4gIH1cbiAgXG4gICNjb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICB9XG4gIFxuICAjdGltZS1zbGlkZXItY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA5M3ZoO1xuICAgIGxlZnQ6IDMwdnc7XG4gICAgd2lkdGg6IDQwdnc7XG4gICAgaGVpZ2h0OiA3dmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIG9wYWNpdHk6IHZhcigtLXVpLWJhc2Utb3BhY2l0eSk7XG4gIH1cbiAgXG4gICN0aW1lLXNsaWRlci1jb250YWluZXI6aG92ZXIge1xuICAgIG9wYWNpdHk6IHZhcigtLXVpLWhvdmVyLW9wYWNpdHkpO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjVzO1xuICB9XG4gIFxuICAjdGltZS1zbGlkZXItY29udGFpbmVyOmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC41cztcbiAgfVxuXG4gICNzY2FsZS1zbGlkZXItY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA4N3ZoO1xuICAgIGxlZnQ6IDMwdnc7XG4gICAgd2lkdGg6IDQwdnc7XG4gICAgaGVpZ2h0OiA3dmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIG9wYWNpdHk6IHZhcigtLXVpLWJhc2Utb3BhY2l0eSk7XG4gIH1cbiAgXG4gICN0aW1lLXNsaWRlci1jb250YWluZXI6aG92ZXIge1xuICAgIG9wYWNpdHk6IHZhcigtLXVpLWhvdmVyLW9wYWNpdHkpO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjVzO1xuICB9XG4gIFxuICAjdGltZS1zbGlkZXItY29udGFpbmVyOmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC41cztcbiAgfVxuICBcbiAgLm5vLXNlbGVjIHtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgfVxuICBcbiAgI3RpbWUtc2xpZGVyLW91dHB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDF2aDtcbiAgfVxuICBcbiAgI3RpbWVTbGlkZXJPdXRwdXQge1xuICAgIGNvbG9yOiBzbm93O1xuICAgIGZvbnQtc2l6ZTogM3ZoO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICBcbiAgLnRpbWUtc2xpZGVyLW51bWJlciB7XG4gICAgd2lkdGg6IDUlO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICBcbiAgLnRpbWUtc2xpZGVyIHtcbiAgICB3aWR0aDogODAlOyBcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAuc2NhbGUtc2xpZGVyIHtcbiAgICB3aWR0aDogODAlOyBcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgXG4gICNndWlkZWxpbmVzLXRvZ2dsZS1idXR0b24ge1xuICAgIGxlZnQ6IDcwdnc7XG4gIH1cblxuICAjY29udGFjdC10b2dnbGUtYnV0dG9uIHtcbiAgICBsZWZ0OiA5NHZ3O1xuICB9XG4gIFxuICAjYWRkLXBsYW5ldC1idXR0b24ge1xuICAgIHRvcDogOTB2aDtcbiAgICBsZWZ0OiA3N3Z3O1xuICB9XG4gIFxuICAudG9nZ2xlLWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogOTB2aDtcbiAgICB3aWR0aDogOHZoO1xuICAgIGhlaWdodDogOHZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcbiAgfVxuICBcbiAgI3VpLXRvZ2dsZS1idXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNHZoO1xuICAgIGhlaWdodDogNHZoO1xuICAgIGJvcmRlci1yYWRpdXM6IDR2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgIGJvcmRlcjogMDtcbiAgICB0b3A6IDJ2aDtcbiAgICBsZWZ0OiBjYWxjKDEwMHZ3IC0gNnZoKTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC41cztcbiAgICBvcGFjaXR5OiB2YXIoLS11aS1iYXNlLW9wYWNpdHkpO1xuICB9XG4gIFxuICAudG9nZ2xlLWJ1dHRvbjpob3ZlciB7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuNXM7XG4gICAgb3BhY2l0eTogdmFyKC0tdWktaG92ZXItb3BhY2l0eSk7XG4gIH1cbiAgXG4gIC5tZW51LWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xuICAgIG9wYWNpdHk6IHZhcigtLXVpLWJhc2Utb3BhY2l0eSk7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICBib3JkZXI6IHZhcigtLWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cbiAgXG4gICNhZGQtcGxhbmV0LW1lbnUtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMzB2dztcbiAgICBoZWlnaHQ6IDcwdmg7XG4gICAgdG9wOiAxNXZoO1xuICAgIGxlZnQ6IDY2dnc7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICBcbiAgI2luZm8tcGFuZWwtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMzB2dztcbiAgICBoZWlnaHQ6IDcwdmg7XG4gICAgdG9wOiAxNXZoO1xuICAgIGxlZnQ6IDR2dztcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIFxuICAubGlzdC1jb250YWluZXIge1xuICAgIHdpZHRoOiA5NHZ3O1xuICAgIGhlaWdodDogNHZoO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiBjYWxjKDJ2aCAtIHZhcigtLW1hcmdpbi1saXN0LWl0ZW0pKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5saXN0LWl0ZW0ge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luOiB2YXIoLS1tYXJnaW4tbGlzdC1pdGVtKTtcbiAgfVxuICBcbiAgI3N5c3RlbS1saXN0LWNvbnRhaW5lciB7XG4gICAgdG9wIDogMnZoO1xuICB9XG4gIFxuICAuc3lzdGVtLWxpc3QtaXRlbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExOSwgMTE5LCAxMTkpO1xuICB9XG4gIFxuICAjcGxhbmV0LWxpc3QtY29udGFpbmVyIHtcbiAgICB0b3A6IDEwdmg7IFxuICB9XG4gIFxuICAubmV3LWJ1dHRvbiB7XG4gICAgbWFyZ2luOiB2YXIoLS1tYXJnaW4tbGlzdC1pdGVtKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgIGhlaWdodDogY2FsYyg0dmggKyB2YXIoLS1ib3JkZXItd2lkdGgpKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IGNhbGMoNHZoICsgdmFyKC0tYm9yZGVyLXdpZHRoKSk7XG4gICAgYm9yZGVyLXJhZGl1czogY2FsYyg0dmggKyB2YXIoLS1ib3JkZXItd2lkdGgpIC8gMik7XG4gICAgb3BhY2l0eTogdmFyKC0tdWktYmFzZS1vcGFjaXR5KTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC41cztcbiAgfVxuICBcbiAgLm5ldy1idXR0b246aG92ZXIge1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjVzO1xuICAgIG9wYWNpdHk6IHZhcigtLXVpLWhvdmVyLW9wYWNpdHkpO1xuICB9XG4gIFxuICAubmV3LWJ1dHRvbjphY3RpdmUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgXG4gIC5idXR0b24ge1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgYm9yZGVyOiB2YXIoLS1ib3JkZXItd2lkdGgpIHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuNXM7XG4gICAgb3BhY2l0eTogdmFyKC0tdWktYmFzZS1vcGFjaXR5KTsgIFxuICAgIGNvbG9yOiBzbm93O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICBcbiAgLmJ1dHRvbjpob3ZlciB7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuNXM7XG4gICAgb3BhY2l0eTogdmFyKC0tdWktaG92ZXItb3BhY2l0eSk7XG4gIH1cbiAgXG4gIC5idXR0b246YWN0aXZlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgLmluZm8tZGlzcGxheSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAzdmg7XG4gICAgb3BhY2l0eTogdmFyKC0tdWktYmFzZS1vcGFjaXR5KTtcbiAgfVxuXG4gICNkYXktZGlzcGxheSB7XG4gICAgYm90dG9tOiA0dmg7XG4gIH1cblxuICAjZGlzdGFuY2UtZGlzcGxheSB7XG4gICAgYm90dG9tOiAydmg7XG4gIH1cblxuICAjY29udGFjdC1jb250YWluZXIge1xuICAgIHdpZHRoOiA1MHZ3O1xuICAgIGhlaWdodDogNTB2aDtcbiAgICB0b3A6IDI1dmg7XG4gICAgbGVmdDogMjV2dztcbiAgICBvcGFjaXR5OiAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9Il19 */";
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
        this.currentSystem = 0;
        this.systems = [new _model_system_model__WEBPACK_IMPORTED_MODULE_5__["Solarsystem"]("The Solar System")];
        this.planetCounter = 1;
        this.systemCounter = 1;
        this.startDay = Math.floor(Math.random() * 22000000);
        this.day = this.startDay;
        this.dayDisplay = 0;
        this.distanceDisplay = 0;
        this.distanceInAUDisplay = 0;
        this.sliderValue = this.timeRatio;
        this.options = {
          floor: 0,
          ceil: 100
        };
        this.scaleSliderValue = 1;
        this.scaleOptions = {
          floor: 0.015,
          ceil: 1,
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
          var lunaTextureMap = new three__WEBPACK_IMPORTED_MODULE_2__["TextureLoader"]().load('./assets/moon-map.jpg');
          this.sun = this.addPlanet('Sun', SUN_RADIUS / this.SUN_RADIUS_RATIO, 40, 0xAAAA00, 0, 0, 0, true, 0, null, new three__WEBPACK_IMPORTED_MODULE_2__["TextureLoader"]().load('./assets/sun-map.jpg'));
          this.addPlanet('Mercury', 2440, 20, 0x777777, 57910000, 3.38, 2, false, 88, false, new three__WEBPACK_IMPORTED_MODULE_2__["TextureLoader"]().load('./assets/mercury-map.jpg'));
          this.addPlanet('Venus', 6052, 20, 0x7A381C, 108200000, 3.86, 2.7, false, 225, true, new three__WEBPACK_IMPORTED_MODULE_2__["TextureLoader"]().load('./assets/venus-map.jpg'));
          var earth = this.addPlanet('Earth', 6371, 20, 0x243E49, 149600000, 7.155, 23.4, false, 365, false, new three__WEBPACK_IMPORTED_MODULE_2__["TextureLoader"]().load('./assets/earth-map2.jpg'));
          earth.addMoon('Luna', 1737, 20, 0x777777, 384400, 5.14, false, 27, true, lunaTextureMap);
          var mars = this.addPlanet('Mars', 3390, 20, 0xAC6349, 227900000, 5.65, 25, false, 687, false, new three__WEBPACK_IMPORTED_MODULE_2__["TextureLoader"]().load('./assets/mars-map.jpg'));
          mars.addMoon("Phobos", 11.1, 20, 0x777777, 9377, 1.093, false, 0.463, true, lunaTextureMap);
          mars.addMoon("Deimons", 6.3, 20, 0x777777, 23460, 0.93, false, 5.44, true, lunaTextureMap);
          var jupiter = this.addPlanet('Jupiter', 69911, 20, 0x9F8E7A, 778500000, 6.09, 3, false, 4332, false, new three__WEBPACK_IMPORTED_MODULE_2__["TextureLoader"]().load('./assets/jupiter-map.jpg'));
          jupiter.addMoon('Ganymede', 5268 / 2, 20, 0x999999, 1070412, 0.204, false, 7.1546, false, new three__WEBPACK_IMPORTED_MODULE_2__["TextureLoader"]().load('./assets/moon-map.jpg'));
          jupiter.addMoon('Callisto', 4820 / 2, 20, 0x555555, 1882709, 0.205, false, 16.689, false, new three__WEBPACK_IMPORTED_MODULE_2__["TextureLoader"]().load('./assets/moon-map.jpg'));
          jupiter.addMoon('Io', 3643 / 2, 20, 0xD0C757, 421700, 0.050, false, 1.7691, false, new three__WEBPACK_IMPORTED_MODULE_2__["TextureLoader"]().load('./assets/moon-map.jpg'));
          jupiter.addMoon('Europa', 3121 / 2, 20, 0x856033, 671034, 0.471, false, 3.5512, false, new three__WEBPACK_IMPORTED_MODULE_2__["TextureLoader"]().load('./assets/moon-map.jpg'));
          var saturn = this.addPlanet('Saturn', 58232, 20, 0xB2915F, 1434000000, 5.51, 26.73, false, 10757, false, new three__WEBPACK_IMPORTED_MODULE_2__["TextureLoader"]().load('./assets/saturn-map.jpg'));
          saturn.addMoon("Titan", 5149 / 2, 20, 0x777777, 1221870, 0.349, false, 16, true, lunaTextureMap);
          saturn.addMoon("Rhea", 1527 / 2, 20, 0x777777, 527108, 0.327, false, 4.5, true, lunaTextureMap);
          saturn.addMoon("Lapetus", 1470 / 2, 20, 0x777777, 3560820, 15.470, false, 79, true, lunaTextureMap);
          saturn.addMoon("Dione", 1123 / 2, 20, 0x777777, 377396, 0.002, false, 2.7, true, lunaTextureMap);
          saturn.addMoon("Tethys", 1062 / 2, 20, 0x777777, 294619, 0.168, false, 1.9, true, lunaTextureMap);
          saturn.addMoon("Enceladus", 504 / 2, 20, 0x777777, 237948, 0.010, false, 1.4, true, lunaTextureMap);
          saturn.addMoon("Mimas", 396 / 2, 20, 0x777777, 185539, 1.566, false, 0.9, true, lunaTextureMap);
          var uranus = this.addPlanet('Uranus', 25362, 20, 0x8EB2C4, 2871000000, 6.48, 97.77, false, 30687, false, new three__WEBPACK_IMPORTED_MODULE_2__["TextureLoader"]().load('./assets/uranus-map.jpg'));
          uranus.addMoon("Titania", 1576 / 2, 20, 0x777777, 435910, 0.340, false, 8.7, true, lunaTextureMap);
          uranus.addMoon("Oberon", 1522 / 2, 20, 0x777777, 583520, 0.058, false, 13.4, true, lunaTextureMap);
          uranus.addMoon("Umbriel", 1169 / 2, 20, 0x777777, 266300, 0.205, false, 4.1, true, lunaTextureMap);
          uranus.addMoon("Ariel", 1157 / 2, 20, 0x777777, 191020, 0.260, false, 2.5, true, lunaTextureMap);
          uranus.addMoon("Miranda", 471 / 2, 20, 0x777777, 129390, 4.232, false, 1.4, true, lunaTextureMap);
          var neptune = this.addPlanet('Neptune', 24622, 20, 0x4662F6, 4495000000, 6.43, 28, false, 60190, false, new three__WEBPACK_IMPORTED_MODULE_2__["TextureLoader"]().load('./assets/neptune-map.jpg'));
          neptune.addMoon("Triton", 2705 / 2, 20, 0x777777, 354759, 180 - 156.865, false, 5.8, true, lunaTextureMap);
        }
      }, {
        key: "applyScaleIfWanted",
        value: function applyScaleIfWanted(_boolean) {
          if (_boolean) {
            this.RADIUS_RATIO = 10; // 10

            this.DISTANCE_RATIO = 8000; // 8000

            this.SUN_RADIUS_RATIO = 20; // 20

            this.cameraPos = [0, 18000, 52000]; // X, Y, Z // 0, 18k, 52k
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
            app.day += app.timeRatio / 20;
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
            var lunaMap = new three__WEBPACK_IMPORTED_MODULE_2__["TextureLoader"]().load('./assets/moon-map.jpg');
            var randomRadius = 50000 + Math.random() * 100000;
            var planetName = 'New Planet ' + this.planetCounter;
            var planet = this.addPlanet(planetName, //name
            randomRadius, //radius
            20, //detail
            0xff00ff, // color
            10000000 + Math.random() * 20000000, // distance
            Math.random() * 30, // inclination
            Math.random() * 30, // Axis
            false, // isstar
            200 + Math.random() * 1000, // speed
            false, // clockwise
            map // texture map
            );
            var moonCounter = 1;

            for (var i = 0; i < Math.floor(Math.random() * 6); i++) {
              planet.addMoon('Moon ' + this.planetCounter + " of " + planetName, //name
              randomRadius / 20 + Math.random() * randomRadius / 8, //radius
              20, //detail
              0x777777, // color
              randomRadius * 6 + Math.random() * randomRadius * 20, // distance
              Math.random() * 20, // inclination
              false, // isstar
              20 + Math.random() * 40, // speed
              false, // clockwise
              lunaMap // texture map
              );
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
              planet.model.position.set(planet.moonOf.model.position.x + Math.sin(planet.angle / 180 * Math.PI) * ratio * planet.distance, planet.moonOf.model.position.y + Math.sin(planet.angle / 180 * Math.PI) * planet.distance * Math.sin(planet.inclination / 180 * Math.PI), planet.moonOf.model.position.z + Math.cos(planet.angle / 180 * Math.PI) * ratio * planet.distance);
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
          console.log(this.useGuideLines);
        }
      }, {
        key: "toggleContactPage",
        value: function toggleContactPage() {
          this.showContactPage = !this.showContactPage;
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

          this.followPlanetName = planetName;
          this.cameraMoving = true;
        }
      }, {
        key: "moveCameraToPlanet",
        value: function moveCameraToPlanet() {
          if (this.followPlanetName == null) return;
          var planet = this.getPlanet(this.followPlanetName);
          var distance = planet.radius * 5;
          var ratio = (planet.distance - distance) / planet.distance;
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
          this.controls.target.x = planet.model.position.x;
          this.controls.target.y = planet.model.position.y;
          this.controls.target.z = planet.model.position.z;
          this.camera.position.x += planet.model.position.x - planet.oldX;
          this.camera.position.y += planet.model.position.y - planet.oldY;
          this.camera.position.z += planet.model.position.z - planet.oldZ;
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
          var g = new three__WEBPACK_IMPORTED_MODULE_1__["TorusGeometry"](this.distance, this.radius / GUIDELINE_RATIO, 10, 2000);
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