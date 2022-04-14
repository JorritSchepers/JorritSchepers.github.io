function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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


    __webpack_exports__["default"] = "<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/home/home.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/home/home.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">  \n    <!-- Start -->\n    <div class=\"start-container\" *ngIf=\"windowManager.showingStart\">\n        <div class=\"start-toprow\"> \n            <img src=\"../../../assets/avatar.jpg\" alt=\"Avater\"/>\n            <span> Jorrit Schepers </span>\n        </div>\n        <div class=\"start-midrow\">\n        </div> \n        <div class=\"start-bottomrow\">\n            <div class=\"start-logoff-container\">\n                <img src=\"../../../assets/icons/logoff-icon.jpg\" alt=\"Log off button\" (click)=\"logout()\">\n                <span> Log Off </span>\n            </div>\n        </div>\n    </div>\n\n    <!-- Picture -->\n    <div class=\"picture-container\" *ngIf=\"pictureId != 0\" (click)=\"pictureId = 0\">\n        <img src=\"../../../assets/my-photos/{{pictureId}}.jpg\" alt=\"picture of Jorrit Schepers\">\n        <div>\n            <img src=\"../../../assets/icons/close-icon-white.png\" alt=\"close button\">\n        </div>\n    </div>\n\n    <!-- Tic Tac Toe -->\n    <div [style.zIndex]=\"windowManager.tttZIndex\" class=\"tab-container\" id=\"ttt-container\"\n         *ngIf=\"windowManager.showingTicTacToe\" (click)=\"windowManager.moveTabToFront(windowManager.TTT_ID)\" cdkDrag>\n        <div class=\"tab-header\" id=\"ttt-header\" cdkDragHandle>\n            <img src=\"../../../assets/ttt/cross/mm.png\" alt=\"Tic Tac Toe Icon\">\n            <span>Tic Tac Toe</span>\n            <img src=\"../../../assets/icons/close-icon-white.png\" alt=\"close button\" (click)=\"windowManager.closeTab(windowManager.TTT_ID)\">\n        </div>\n        <div class=\"tab-body\" id=\"ttt-body\">\n            <div class=\"ttt-end-screen\" *ngIf=\"ttt.playerWon != null\" (click)=\"ttt.resetGame()\">\n                <span *ngIf=\"ttt.playerWon == 'cross'\" style=\"color: rgb(0, 200, 0)\">You won!</span>\n                <span *ngIf=\"ttt.playerWon == 'circle'\" style=\"color: red\">You lost</span>\n                <span *ngIf=\"ttt.playerWon == 'draw'\" style=\"color: grey\">Draw!</span>\n            </div>\n            <div class=\"ttt-row\" *ngFor=\"let row of ttt.fieldOfPaths; let y = index\">\n                <div class=\"ttt-column\" *ngFor=\"let tile of row; let x = index\">\n                    <img src=\"{{ttt.fieldOfPaths[y][x]}}\" (click)=\"ttt.clickedOn(x, y)\">\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- Word -->\n    <div [style.zIndex]=\"windowManager.wordZIndex\" class=\"tab-container\" id=\"word-container\" \n         *ngIf=\"windowManager.showingWord\" (click)=\"windowManager.moveTabToFront(windowManager.WORD_ID)\" cdkDrag >\n        <div class=\"tab-header\" id=\"word-header\" cdkDragHandle>\n            <img src=\"../../../assets/icons/save-icon-whitepng.png\" alt=\"Save icon\">\n            <span>Fancy wordpad</span>\n            <img src=\"../../../assets/icons/close-icon-white.png\" alt=\"close button\" (click)=\"windowManager.closeTab(windowManager.WORD_ID)\">\n        </div>\n        <div class=\"tab-body\" id=\"word-body\">\n            <div class=\"word-toolbar\"></div>\n            <div class=\"word-page\">\n                <div class=\"word-page-text\">\n                    <img src=\"../../../assets/my-photos/2.jpg\" alt=\"Photo is Jorrit Schepers\"><br>\n                    <!-- <p>\n                        Hoi, mijn naam is Jorrit Schepers en ik ben tweede jaars ICT student op <a href=\"https://www.han.nl/\">Hogeschool van Arnhem en Nijmegen</a>.\n                    </p> -->\n                    <textarea>{{inputValue}}</textarea>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- CMD -->\n    <div [style.zIndex]=\"windowManager.cmdZIndex\" class=\"tab-container\" id=\"cmd-container\" \n         *ngIf=\"windowManager.showingCmd\" (click)=\"windowManager.moveTabToFront(windowManager.CMD_ID)\" cdkDrag>\n        <div class=\"tab-header\" id=\"cmd-header\" cdkDragHandle>\n            <img src=\"../../../assets/icons/cmd-icon-white.png\" alt=\"cmd icon\">\n            <span>A great interface!</span>\n            <img src=\"../../../assets/icons/close-icon-white.png\" alt=\"close button\" (click)=\"windowManager.closeTab(windowManager.CMD_ID)\">\n        </div>\n        <div class=\"tab-body\" id=\"cmd-body\">\n            <div class=cmd-line>\n                <span>C:\\Users\\JorritSchepers>&nbsp;</span>\n                <form [formGroup]=\"cmdForm\" (ngSubmit)=\"enterCommand(cmdForm.value)\">\n                    <input id=\"cmd\" type=\"text\" formControlName=\"cmd\">\n                </form>\n            </div>\n            <div class=cmd-line *ngIf=\"currentCommand\">\n                {{currentCommand}}\n            </div>\n            <!-- <br> -->\n            <!-- <span>C:\\Users\\JorritSchepers>dir</span><br>\n            <br>\n            <span>Directory of C:\\Users\\JorritSchepers</span><br>\n            <br>\n            <a routerLink=\"/about-me\" routerLinkActive=\"active\"><span>07/01/2020 23:31 &nbsp; &lt;DIR&gt; &nbsp;&nbsp;&nbsp; about-me</span></a><br>\n            <a routerLink=\"/my-projects\" routerLinkActive=\"active\"><span>10/01/2020 19:01 &nbsp; &lt;DIR&gt; &nbsp;&nbsp;&nbsp; my-projects</span></a><br>\n            <a routerLink=\"/contact-me\" routerLinkActive=\"active\"><span>15/01/2020 03:54 &nbsp; &lt;DIR&gt; &nbsp;&nbsp;&nbsp; contact-me</span></a><br> -->\n        </div>\n    </div>\n    \n    <!-- Browser -->\n    <div [style.zIndex]=\"windowManager.browserZIndex\" class=\"tab-container\" id=\"browser-container\" \n         *ngIf=\"windowManager.showingBrowser\"(click)=\"windowManager.moveTabToFront(windowManager.BROWSER_ID)\" cdkDrag>\n        <div class=\"tab-header\" id=\"browser-header\" cdkDragHandle>\n            <img src=\"https://handiggoed.nl/ontwikkelsite/wp-content/uploads/2015/12/IETS-400x400.jpg\" alt=\"browser icon\">\n            <span>The little less dark web</span>\n            <img src=\"../../../assets/icons/close-icon-black.png\" alt=\"close button\" (click)=\"windowManager.closeTab(windowManager.BROWSER_ID)\">\n        </div>\n        <div class=\"tab-body\" id=\"browser-body\">\n            <div class=\"browser-jorrit\">\n                <span style=\"color: #4285F4;\">J</span>\n                <span style=\"color: #EA4335;\">o</span>\n                <span style=\"color: #FBBC06;\">r</span>\n                <span style=\"color: #4285F4;\">r</span>\n                <span style=\"color: #34A853;\">i</span>\n                <span style=\"color: #EA4335;\">t</span>\n            </div>\n            <div class=\"browser-search-box\">\n                <form [formGroup]=\"searchForm\" (ngSubmit)=\"searchWord(searchForm.value)\">\n                    <input id=\"word\" class=\"browser-search-input\" type=\"text\" formControlName=\"word\" placeholder=\"Try searching for 'Jorrit Schepers'!\" required>\n                </form>\n            </div>\n        </div>\n    </div>\n\n    <!-- Desktop Icons -->\n    <div class=\"desktop-icon\" (click)=\"openPicture(1)\">\n        <img src=\"../../../assets/my-photos/1.jpg\">\n        <span>Jorrit.jpg</span>\n    </div>\n\n    <div class=\"desktop-icon\" (click)=\"openPicture(2)\">\n        <img src=\"../../../assets/my-photos/2.jpg\">\n        <span>Jorrit in de bergen.jpg</span>\n    </div>\n\n    <div class=\"desktop-icon\" (click)=\"windowManager.openTab(windowManager.TTT_ID)\">\n        <img src=\"../../../assets/ttt/cross/mm.png\">\n        <span>tic-tac-toe.exe</span>\n    </div>\n\n    <div class=\"desktop-icon\" (click)=\"windowManager.openTab(windowManager.CMD_ID)\">\n        <img src=\"../../../assets/icons/cmd-icon-white.png\">\n        <span>cmd.exe</span>\n    </div>\n\n    <div class=\"desktop-icon\" (click)=\"windowManager.openTab(windowManager.WORD_ID)\">\n        <img src=\"../../../assets/icons/save-icon-whitepng.png\">\n        <span>about me.docx</span>\n    </div>\n\n    <div class=\"desktop-icon\" (click)=\"windowManager.openTab(windowManager.BROWSER_ID)\">\n        <img src=\"https://handiggoed.nl/ontwikkelsite/wp-content/uploads/2015/12/IETS-400x400.jpg\">\n        <span>Brow-<br>ser.exe</span>\n    </div>\n\n    <div class=\"desktop-icon\">\n        <a href=\"https://www.linkedin.com/in/jorrit-schepers-b9809317b/\" target=\"_blank\">\n            <img src=\"../../../assets/icons/linked-in-logo.png\">\n            <span>Linked-<br>In.url</span>\n        </a>\n    </div>\n\n    <div class=\"desktop-icon\">\n        <a href=\"https://github.com/JorritSchepers\" target=\"_blank\">\n            <img src=\"../../../assets/icons/github-logo.png\">\n            <span>GitHub.url</span>\n        </a>\n    </div>\n\n    <div class=\"desktop-icon\">\n        <a href=\"https://www.instagram.com/jorrit.schepers/\" target=\"_blank\">\n            <img src=\"../../../assets/icons/instagram-logo.png\">\n            <span>Insta-<br>gram.url</span>\n        </a>\n    </div>\n    \n\n    <!-- Taskbar -->\n    <div class=\"taskbar-container\">\n        <div class=\"taskbar-windows-logo\" (click)=\"windowManager.showingStart = !windowManager.showingStart\">\n            <img src=\"../../../assets/icons/windows-logo-icon.png\" alt=\"WindowsXP logo\">\n            <span><i><b>start</b></i></span>\n        </div>\n        <div class=\"taskbar\">\n            <div class=\"taskbar-time\"> {{currentTime | date: \"short\"}} </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/login/login.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/login/login.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"login-container\">\n        <div class=\"account-container\">\n            <div class=\"avatar\">\n                <a routerLink=\"/home\" routerLinkActive=\"active\">\n                    <img src=\"../../../assets/avatar.jpg\" alt=\"Photo of Jorrit Schepers\">\n                </a>\n            </div>\n            <span>Jorrit Schepers</span>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

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
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
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
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
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

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
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
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _component_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./component/home/home.component */
    "./src/app/component/home/home.component.ts");
    /* harmony import */


    var _component_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./component/login/login.component */
    "./src/app/component/login/login.component.ts");

    var routes = [{
      path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    }, {
      path: 'login',
      component: _component_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    }, {
      path: 'home',
      component: _component_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: '**',
      redirectTo: '/home',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
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


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
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

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Jorrit\'s Website!';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/esm2015/drag-drop.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _component_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./component/home/home.component */
    "./src/app/component/home/home.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _component_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./component/login/login.component */
    "./src/app/component/login/login.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _component_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _component_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/component/home/home.component.css":
  /*!***************************************************!*\
    !*** ./src/app/component/home/home.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    overflow: hidden;\n}\n\na {\n    text-decoration: none;\n}\n\na:visited {\n    color: white;\n}\n\n.container {\n    position: absolute;\n    top: 0%;\n    left: 0%;\n    width: 100vw;\n    height: 100vh;\n    background-color: black;\n    background-image: url('windows-xp-wallpaper.jpg');\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n.tab-container {\n    position: absolute;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n}\n\n.tab-header {\n    width: 100%;\n    height: 3vh;\n    display: flex;\n    align-items: center;\n    font-family: Segoe UI;\n    font-size: 1.6vh;\n}\n\n.tab-header span {\n    width: 100%;\n}\n\n.tab-header img {\n    height: 2vh;\n    width: 2vh;\n    margin-left: 0.4vh;\n    margin-right: 0.4vh;\n}\n\n.tab-body {\n    width: 100%;\n    height: 100%;\n    font-family: Segoe UI;\n}\n\n/*================================================================================================================   General   */\n\n.picture-container {\n    display: flex;\n    justify-content: center;\n    position: absolute;\n    flex-direction: row;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.70);\n    z-index: 10;\n}\n\n.picture-container img {\n    margin: auto;\n    opacity: 100%;\n    height: 100%;\n    z-index: 11;\n\n    /* No text or image selection */\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -o-user-select: none;\n}\n\n.picture-container div {\n    margin-top: 2.5vh;\n    margin-right: 2.5vh;    \n    width: 5vh;\n    height: 5vh;\n}\n\n/*=============================================================================================================   Picture   */\n\n#cmd-container {\n    width: 40%;\n    height: 40%;\n    margin-left: 6vw;\n    margin-top: 24vh;\n}\n\n#cmd-header {\n    background-color: #2B2B2B;\n    color: white;\n}\n\n#cmd-body {\n    background-color: #0C0C0C;\n    color: #cccccc;\n    font-family: Courier New;\n    font-size: 1.7vh;\n}\n\n#cmd-body a {\n    color: #cccccc;\n}\n\n#cmd-body a:hover {\n    font-size: 1.9vh;\n    color: white;\n}\n\n#cmd-body a:visited {\n    color: #cccccc;\n    text-decoration: none;\n}\n\n#cmd-body input {\n    background-color: #0C0C0C;\n    border: none;\n    height: 1.8vh;\n    width: 40vh;\n    color: #cccccc;\n    font-family: Courier New;\n    font-size: 1.8vh;\n}\n\n#cmd-body input:focus {\n    outline: 0;\n}\n\n.cmd-line {\n    display: flex;\n    flex-direction: row;\n}\n\n/*=============================================================================================================   CMD   */\n\n#browser-container {\n    width: 80%;\n    height: 80%;\n    margin-left: 10%;\n    margin-top: 5%;\n}\n\n#browser-header {\n    background-color: #CCCCCC;\n    font-size: 1.6vh;\n}\n\n#browser-body {\n    background-color: #EEEEEE;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n\n.browser-jorrit {\n    font-size: 14vh;\n    font-weight: bold;\n    font-family: Roboto;\n\n    /* No text or image selection */\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -o-user-select: none;\n}\n\n.browser-search-box {\n    width: 40%;\n    height: 8vh;\n}\n\n.browser-search-input {\n    background-color: white;\n    width: 100%;\n    height: 8vh;\n    border-radius: 4vh;\n    border: 0.3vh solid lightgrey;\n    font-size: 150%;\n    text-align: center;\n}\n\n.browser-search-input:focus {\n    outline: 0;\n}\n\n/*=============================================================================================================   Browser   */\n\n#word-container {\n    background-color: #2A579A;\n    width: 40%;\n    height: 80%;\n    margin-top: 14vh;\n    margin-left: 40vw;\n}\n\n#word-header {\n    width: 99.5%;\n    height: 3vh;\n    color: white;\n}\n\n#word-body {\n    background-color: #E6E6E6;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.word-toolbar {\n    width: 100%;\n    height: 8vh;\n    background-color: #EEEEEE;\n    border-bottom: 2px solid #DDDDDD;\n}\n\n.word-page {\n    width: 80%;\n    height: 100%;\n    margin-top: 6vh;\n    background-color: white;\n}\n\n.word-page-text {\n    width: 80%;\n    margin: auto;\n    margin-top: 4vh;\n    font-size: 14px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.word-page-text a {\n    color: blue;\n    text-decoration: underline;\n}\n\n.word-page-text a:hover {\n    font-size: 14px;\n}\n\n.word-page-text img {\n    width: 60%;\n}\n\n.word-page-text textarea {\n    width: 100%;\n    background-color: white;\n    border: none;\n    resize: none;\n    font-family: Segoe UI;\n    height: 100vh;\n}\n\n.word-page-text textarea:focus {\n    outline: 0;\n}\n\n/*=============================================================================================================   Word   */\n\n#ttt-container {\n    width: 30vh;\n    height: 30vh;\n    margin-top: 6vh;\n    background-color: dodgerblue;\n}\n\n#ttt-header {\n    background-color: dodgerblue;\n    color: white;\n}\n\n#ttt-body {\n    background-color: white;\n\n    /* No text or image selection */\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -o-user-select: none;\n}\n\n.ttt-row {\n    height: 33%;\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n}\n\n.ttt-column {\n    height: 100%;\n    width: 33%;\n    display: flex;\n    flex-direction: column;\n}\n\n.ttt-end-screen {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 350%;\n    font-family: Segoe UI;\n    font-weight: bold;\n    background-color: rgba(0, 0, 0, 0.20);\n}\n\n.ttt-column img {\n    height: 100%;\n    margin: 0;\n}\n\n/*============================================================================================================= Tic Tac Toe   */\n\n.desktop-icon {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 8vh;\n    color: white;\n    font-family: Segoe UI;\n    text-shadow: 1px 1px #000000;\n    text-align: center;\n    margin: 2vh;\n\n    /* No text or image selection */\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -o-user-select: none;\n}\n\n.desktop-icon img {\n    width: 60%;\n    margin-bottom: 1vh;\n}\n\n.desktop-icon a {\n    cursor: default;\n    font-size: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.desktop-icon span {\n    cursor: default;\n}\n\n/*=============================================================================================================   Desktop Icon   */\n\n.taskbar-container {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    height: 4%;\n    display: flex;\n    flex-direction: row;\n    background: linear-gradient(\n        to top, \n        #245DDC,\n        #3F81DA\n    );\n    z-index: 200;\n}\n\n.taskbar {\n    width: 100%;\n    height: 100%;\n}\n\n.taskbar-windows-logo {\n    width: 7%;    \n    display: flex;\n    align-items: center;\n    background: linear-gradient(\n        to bottom, \n        #1C961E, \n        #2C6129\n    );\n    height: 100%;\n    border-top: 2px solid #0B4126;\n    border-right: 2px solid #0B4126;\n    border-top-right-radius: 1.5vh;\n    border-bottom-right-radius: 1.5vh;\n\n    /* No text or image selection */\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -o-user-select: none;\n}\n\n.taskbar-windows-logo:hover {\n    background: linear-gradient(\n        to top, \n        #1C961E, \n        #2C6129\n    );;\n}\n\n.taskbar-windows-logo img {\n    height: 80%;\n    margin-left: 10%;\n}\n\n.taskbar-windows-logo span {\n    color: white;\n    font-family: Segoe UI;\n    font-size: 2vh;\n    margin-left: 5%;\n}\n\n.taskbar-time {\n    color: white;\n    font-family: Segoe UI;\n    display: flex;\n    align-items: center;\n    height: 100%;\n    justify-content: flex-end;\n    margin-right: 1vh;\n\n    /* No text or image selection */\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -o-user-select: none;\n}\n\n/*=============================================================================================================   Taskbar   */\n\n.start-container {\n    background-color: whitesmoke;\n    width: 18%;\n    height: 51.5vh;\n    position: absolute;\n    margin-left: 0;\n    margin-top: 45vh;\n    z-index: 100;\n    display: flex;\n    flex-direction: column;\n}\n\n.start-toprow {\n    height: 15%;\n    background: linear-gradient(\n        to bottom, \n        #245DDC,\n        #3F81DA\n    );\n    display: flex;\n    align-items: center;\n}\n\n.start-toprow img {\n    margin-left: 1vh;\n    margin-right: 1vh;\n}\n\n.start-toprow span {\n    color: white;\n    font-family: Segoe UI;\n    font-size: larger;\n}\n\n.start-midrow {\n    height: 70%;\n    background-color: whitesmoke;\n}\n\n.start-bottomrow {\n    height: 15%;\n    background: linear-gradient(\n        to top, \n        #245DDC,\n        #3F81DA\n    );\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n}\n\n.start-toprow img {\n    height: 80%;\n}\n\n.start-logoff-container {\n    height: 80%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-right: 2vh;\n    color: white;\n    font-family: Segoe UI;\n}\n\n.start-logoff-container img {\n    height: 60%;\n    margin-right: 1vh; \n}\n\n/*===============================================================================================================   Start   */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsUUFBUTtJQUNSLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGlEQUErRDtJQUMvRCw0QkFBNEI7SUFDNUIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHFCQUFxQjtBQUN6Qjs7QUFDQSxnSUFBZ0k7O0FBRWhJO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1oscUNBQXFDO0lBQ3JDLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLFdBQVc7O0lBRVgsK0JBQStCO0lBQy9CLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFDQSw2SEFBNkg7O0FBRTdIO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLHdCQUF3QjtJQUN4QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixhQUFhO0lBQ2IsV0FBVztJQUNYLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFDQSx5SEFBeUg7O0FBRXpIO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixtQkFBbUI7O0lBRW5CLCtCQUErQjtJQUMvQix5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUNBLDZIQUE2SDs7QUFFN0g7SUFDSSx5QkFBeUI7SUFDekIsVUFBVTtJQUNWLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixlQUFlO0lBQ2YsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTtJQUNmLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBQ0EsMEhBQTBIOztBQUUxSDtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUJBQXVCOztJQUV2QiwrQkFBK0I7SUFDL0IseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFNBQVM7QUFDYjs7QUFDQSwrSEFBK0g7O0FBRS9IO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixXQUFXOztJQUVYLCtCQUErQjtJQUMvQix5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7SUFDZixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBQ0Esa0lBQWtJOztBQUVsSTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLFVBQVU7SUFDVixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25COzs7O0tBSUM7SUFDRCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQjs7OztLQUlDO0lBQ0QsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QiwrQkFBK0I7SUFDL0IsOEJBQThCO0lBQzlCLGlDQUFpQzs7SUFFakMsK0JBQStCO0lBQy9CLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJOzs7O0tBSUM7QUFDTDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsaUJBQWlCOztJQUVqQiwrQkFBK0I7SUFDL0IseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIsb0JBQW9CO0FBQ3hCOztBQUNBLDZIQUE2SDs7QUFFN0g7SUFDSSw0QkFBNEI7SUFDNUIsVUFBVTtJQUNWLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVc7SUFDWDs7OztLQUlDO0lBQ0QsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1g7Ozs7S0FJQztJQUNELGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFDQSw2SEFBNkgiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYTp2aXNpdGVkIHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDAlO1xuICAgIGxlZnQ6IDAlO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvd2luZG93cy14cC13YWxscGFwZXIuanBnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi50YWItY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4udGFiLWhlYWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiBTZWdvZSBVSTtcbiAgICBmb250LXNpemU6IDEuNnZoO1xufVxuXG4udGFiLWhlYWRlciBzcGFuIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnRhYi1oZWFkZXIgaW1nIHtcbiAgICBoZWlnaHQ6IDJ2aDtcbiAgICB3aWR0aDogMnZoO1xuICAgIG1hcmdpbi1sZWZ0OiAwLjR2aDtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNHZoO1xufVxuXG4udGFiLWJvZHkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBmb250LWZhbWlseTogU2Vnb2UgVUk7XG59XG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gICBHZW5lcmFsICAgKi9cblxuLnBpY3R1cmUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzApO1xuICAgIHotaW5kZXg6IDEwO1xufVxuXG4ucGljdHVyZS1jb250YWluZXIgaW1nIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgb3BhY2l0eTogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgei1pbmRleDogMTE7XG5cbiAgICAvKiBObyB0ZXh0IG9yIGltYWdlIHNlbGVjdGlvbiAqL1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5waWN0dXJlLWNvbnRhaW5lciBkaXYge1xuICAgIG1hcmdpbi10b3A6IDIuNXZoO1xuICAgIG1hcmdpbi1yaWdodDogMi41dmg7ICAgIFxuICAgIHdpZHRoOiA1dmg7XG4gICAgaGVpZ2h0OiA1dmg7XG59XG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gICBQaWN0dXJlICAgKi9cblxuI2NtZC1jb250YWluZXIge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgaGVpZ2h0OiA0MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDZ2dztcbiAgICBtYXJnaW4tdG9wOiAyNHZoO1xufVxuXG4jY21kLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJCMkIyQjtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbiNjbWQtYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBDMEMwQztcbiAgICBjb2xvcjogI2NjY2NjYztcbiAgICBmb250LWZhbWlseTogQ291cmllciBOZXc7XG4gICAgZm9udC1zaXplOiAxLjd2aDtcbn1cblxuI2NtZC1ib2R5IGEge1xuICAgIGNvbG9yOiAjY2NjY2NjO1xufVxuXG4jY21kLWJvZHkgYTpob3ZlciB7XG4gICAgZm9udC1zaXplOiAxLjl2aDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbiNjbWQtYm9keSBhOnZpc2l0ZWQge1xuICAgIGNvbG9yOiAjY2NjY2NjO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuI2NtZC1ib2R5IGlucHV0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEMwQzBDO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBoZWlnaHQ6IDEuOHZoO1xuICAgIHdpZHRoOiA0MHZoO1xuICAgIGNvbG9yOiAjY2NjY2NjO1xuICAgIGZvbnQtZmFtaWx5OiBDb3VyaWVyIE5ldztcbiAgICBmb250LXNpemU6IDEuOHZoO1xufVxuXG4jY21kLWJvZHkgaW5wdXQ6Zm9jdXMge1xuICAgIG91dGxpbmU6IDA7XG59XG5cbi5jbWQtbGluZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICAgQ01EICAgKi9cblxuI2Jyb3dzZXItY29udGFpbmVyIHtcbiAgICB3aWR0aDogODAlO1xuICAgIGhlaWdodDogODAlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgbWFyZ2luLXRvcDogNSU7XG59XG5cbiNicm93c2VyLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NDQ0NDQztcbiAgICBmb250LXNpemU6IDEuNnZoO1xufVxuXG4jYnJvd3Nlci1ib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuICAgXG4uYnJvd3Nlci1qb3JyaXQge1xuICAgIGZvbnQtc2l6ZTogMTR2aDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xuXG4gICAgLyogTm8gdGV4dCBvciBpbWFnZSBzZWxlY3Rpb24gKi9cbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1vLXVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uYnJvd3Nlci1zZWFyY2gtYm94IHtcbiAgICB3aWR0aDogNDAlO1xuICAgIGhlaWdodDogOHZoO1xufVxuXG4uYnJvd3Nlci1zZWFyY2gtaW5wdXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogOHZoO1xuICAgIGJvcmRlci1yYWRpdXM6IDR2aDtcbiAgICBib3JkZXI6IDAuM3ZoIHNvbGlkIGxpZ2h0Z3JleTtcbiAgICBmb250LXNpemU6IDE1MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnJvd3Nlci1zZWFyY2gtaW5wdXQ6Zm9jdXMge1xuICAgIG91dGxpbmU6IDA7XG59XG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gICBCcm93c2VyICAgKi9cblxuI3dvcmQtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkE1NzlBO1xuICAgIHdpZHRoOiA0MCU7XG4gICAgaGVpZ2h0OiA4MCU7XG4gICAgbWFyZ2luLXRvcDogMTR2aDtcbiAgICBtYXJnaW4tbGVmdDogNDB2dztcbn1cblxuI3dvcmQtaGVhZGVyIHtcbiAgICB3aWR0aDogOTkuNSU7XG4gICAgaGVpZ2h0OiAzdmg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4jd29yZC1ib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTZFNkU2O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ud29yZC10b29sYmFyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDh2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjREREREREO1xufVxuXG4ud29yZC1wYWdlIHtcbiAgICB3aWR0aDogODAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiA2dmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi53b3JkLXBhZ2UtdGV4dCB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWFyZ2luLXRvcDogNHZoO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLndvcmQtcGFnZS10ZXh0IGEge1xuICAgIGNvbG9yOiBibHVlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4ud29yZC1wYWdlLXRleHQgYTpob3ZlciB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ud29yZC1wYWdlLXRleHQgaW1nIHtcbiAgICB3aWR0aDogNjAlO1xufVxuXG4ud29yZC1wYWdlLXRleHQgdGV4dGFyZWEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICByZXNpemU6IG5vbmU7XG4gICAgZm9udC1mYW1pbHk6IFNlZ29lIFVJO1xuICAgIGhlaWdodDogMTAwdmg7XG59XG5cbi53b3JkLXBhZ2UtdGV4dCB0ZXh0YXJlYTpmb2N1cyB7XG4gICAgb3V0bGluZTogMDtcbn1cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAgIFdvcmQgICAqL1xuXG4jdHR0LWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDMwdmg7XG4gICAgaGVpZ2h0OiAzMHZoO1xuICAgIG1hcmdpbi10b3A6IDZ2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkb2RnZXJibHVlO1xufVxuXG4jdHR0LWhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbiN0dHQtYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cbiAgICAvKiBObyB0ZXh0IG9yIGltYWdlIHNlbGVjdGlvbiAqL1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi50dHQtcm93IHtcbiAgICBoZWlnaHQ6IDMzJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi50dHQtY29sdW1uIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDMzJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi50dHQtZW5kLXNjcmVlbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAzNTAlO1xuICAgIGZvbnQtZmFtaWx5OiBTZWdvZSBVSTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjApO1xufVxuXG4udHR0LWNvbHVtbiBpbWcge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG59XG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gVGljIFRhYyBUb2UgICAqL1xuXG4uZGVza3RvcC1pY29uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogOHZoO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogU2Vnb2UgVUk7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggIzAwMDAwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAydmg7XG5cbiAgICAvKiBObyB0ZXh0IG9yIGltYWdlIHNlbGVjdGlvbiAqL1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5kZXNrdG9wLWljb24gaW1nIHtcbiAgICB3aWR0aDogNjAlO1xuICAgIG1hcmdpbi1ib3R0b206IDF2aDtcbn1cblxuLmRlc2t0b3AtaWNvbiBhIHtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgZm9udC1zaXplOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZGVza3RvcC1pY29uIHNwYW4ge1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbn1cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAgIERlc2t0b3AgSWNvbiAgICovXG5cbi50YXNrYmFyLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgIHRvIHRvcCwgXG4gICAgICAgICMyNDVEREMsXG4gICAgICAgICMzRjgxREFcbiAgICApO1xuICAgIHotaW5kZXg6IDIwMDtcbn1cblxuLnRhc2tiYXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLnRhc2tiYXItd2luZG93cy1sb2dvIHtcbiAgICB3aWR0aDogNyU7ICAgIFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgIHRvIGJvdHRvbSwgXG4gICAgICAgICMxQzk2MUUsIFxuICAgICAgICAjMkM2MTI5XG4gICAgKTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMwQjQxMjY7XG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzBCNDEyNjtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMS41dmg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEuNXZoO1xuXG4gICAgLyogTm8gdGV4dCBvciBpbWFnZSBzZWxlY3Rpb24gKi9cbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1vLXVzZXItc2VsZWN0OiBub25lO1xufVxuXG4udGFza2Jhci13aW5kb3dzLWxvZ286aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgdG8gdG9wLCBcbiAgICAgICAgIzFDOTYxRSwgXG4gICAgICAgICMyQzYxMjlcbiAgICApOztcbn1cblxuLnRhc2tiYXItd2luZG93cy1sb2dvIGltZyB7XG4gICAgaGVpZ2h0OiA4MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cblxuLnRhc2tiYXItd2luZG93cy1sb2dvIHNwYW4ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogU2Vnb2UgVUk7XG4gICAgZm9udC1zaXplOiAydmg7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuXG4udGFza2Jhci10aW1lIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IFNlZ29lIFVJO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBtYXJnaW4tcmlnaHQ6IDF2aDtcblxuICAgIC8qIE5vIHRleHQgb3IgaW1hZ2Ugc2VsZWN0aW9uICovXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtby11c2VyLXNlbGVjdDogbm9uZTtcbn1cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAgIFRhc2tiYXIgICAqL1xuXG4uc3RhcnQtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgIHdpZHRoOiAxOCU7XG4gICAgaGVpZ2h0OiA1MS41dmg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1hcmdpbi10b3A6IDQ1dmg7XG4gICAgei1pbmRleDogMTAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnN0YXJ0LXRvcHJvdyB7XG4gICAgaGVpZ2h0OiAxNSU7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICB0byBib3R0b20sIFxuICAgICAgICAjMjQ1RERDLFxuICAgICAgICAjM0Y4MURBXG4gICAgKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zdGFydC10b3Byb3cgaW1nIHtcbiAgICBtYXJnaW4tbGVmdDogMXZoO1xuICAgIG1hcmdpbi1yaWdodDogMXZoO1xufVxuXG4uc3RhcnQtdG9wcm93IHNwYW4ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogU2Vnb2UgVUk7XG4gICAgZm9udC1zaXplOiBsYXJnZXI7XG59XG5cbi5zdGFydC1taWRyb3cge1xuICAgIGhlaWdodDogNzAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG59XG5cbi5zdGFydC1ib3R0b21yb3cge1xuICAgIGhlaWdodDogMTUlO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgdG8gdG9wLCBcbiAgICAgICAgIzI0NUREQyxcbiAgICAgICAgIzNGODFEQVxuICAgICk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5zdGFydC10b3Byb3cgaW1nIHtcbiAgICBoZWlnaHQ6IDgwJTtcbn1cblxuLnN0YXJ0LWxvZ29mZi1jb250YWluZXIge1xuICAgIGhlaWdodDogODAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IDJ2aDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IFNlZ29lIFVJO1xufVxuXG4uc3RhcnQtbG9nb2ZmLWNvbnRhaW5lciBpbWcge1xuICAgIGhlaWdodDogNjAlO1xuICAgIG1hcmdpbi1yaWdodDogMXZoOyBcbn1cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICAgU3RhcnQgICAqLyJdfQ== */";
    /***/
  },

  /***/
  "./src/app/component/home/home.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/component/home/home.component.ts ***!
    \**************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
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


    var _model_ttt_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../model/ttt.model */
    "./src/app/model/ttt.model.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_model_window_manager_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/model/window-manager.model */
    "./src/app/model/window-manager.model.ts");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(titleService, formBuilder) {
        var _this = this;

        _classCallCheck(this, HomeComponent);

        this.titleService = titleService;
        this.formBuilder = formBuilder;
        this.pictureId = 0;
        this.windowManager = new src_app_model_window_manager_model__WEBPACK_IMPORTED_MODULE_5__["WindowManagerModel"]();
        this.ttt = new _model_ttt_model__WEBPACK_IMPORTED_MODULE_3__["TTTModel"]();
        this.currentTime = new Date();
        this.inputValue = "Hoi, mijn naam is Jorrit Schepers en ik ben tweede jaars ICT student op Hogeschool van Arnhem en Nijmegen.";
        this.titleService.setTitle("Jorrit's Website | Home");
        this.searchForm = this.formBuilder.group({
          word: ''
        });
        this.cmdForm = this.formBuilder.group({
          cmd: ''
        });
        setInterval(function () {
          _this.currentTime = new Date();
        }, 2);
      }

      _createClass(HomeComponent, [{
        key: "searchWord",
        value: function searchWord(formValue) {
          var url = "https://www.google.com/search?q=" + formValue.word;
          window.open(url);
        }
      }, {
        key: "logout",
        value: function logout() {
          window.location.pathname = '/login';
        }
      }, {
        key: "openPicture",
        value: function openPicture(id) {
          this.windowManager.showingStart = false;
          this.pictureId = id;
        }
      }, {
        key: "enterCommand",
        value: function enterCommand(formValue) {
          this.currentCommand = formValue.cmd;
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/component/home/home.component.css")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/component/login/login.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/component/login/login.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n.container {\n    position: absolute;\n    top: 0%;\n    left: 0%;\n    width: 100%;\n    height: 100vh;\n    background-color: #002E98;\n    display: flex;\n    align-items: center;\n}\n\n.login-container {\n    position: absolute;\n    left: 0%;\n    width: 100%;\n    height: 77vh;\n    background-color: #597CDA;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-image: radial-gradient(\n        farthest-corner at 40px 40px,\n        rgba(255, 255, 255, 0.5) 0%,\n        #597CDA 100%\n    );\n    \n    border-width: 0;\n    border-top-width: 0.4vh;\n    border-bottom-width: 0.4vh;\n    border-style: solid;\n    -o-border-image: linear-gradient(\n        to right, \n        white, \n        rgba(0, 0, 0, 0)\n    ) 1 30%;\n       border-image: linear-gradient(\n        to right, \n        white, \n        rgba(0, 0, 0, 0)\n    ) 1 30%;\n}\n\n.account-container {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    color: white;\n    font-size: 4vh;\n    font-family: Segoe UI;\n}\n\n.account-container span {\n    margin-left: 3vh;\n}\n\n.avatar {\n    height: 15vh;\n}\n\n.avatar img {\n    height: 100%;\n    border-radius: 10%;\n    border: 0.4vh solid lightgrey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsUUFBUTtJQUNSLFdBQVc7SUFDWCxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCOzs7O0tBSUM7O0lBRUQsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25COzs7O1dBSU87T0FKUDs7OztXQUlPO0FBQ1g7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osY0FBYztJQUNkLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDZCQUE2QjtBQUNqQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMCU7XG4gICAgbGVmdDogMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyRTk4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmxvZ2luLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNzd2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTk3Q0RBO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoXG4gICAgICAgIGZhcnRoZXN0LWNvcm5lciBhdCA0MHB4IDQwcHgsXG4gICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAwJSxcbiAgICAgICAgIzU5N0NEQSAxMDAlXG4gICAgKTtcbiAgICBcbiAgICBib3JkZXItd2lkdGg6IDA7XG4gICAgYm9yZGVyLXRvcC13aWR0aDogMC40dmg7XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMC40dmg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgdG8gcmlnaHQsIFxuICAgICAgICB3aGl0ZSwgXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMClcbiAgICApIDEgMzAlO1xufVxuXG4uYWNjb3VudC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiA0dmg7XG4gICAgZm9udC1mYW1pbHk6IFNlZ29lIFVJO1xufVxuXG4uYWNjb3VudC1jb250YWluZXIgc3BhbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDN2aDtcbn1cblxuLmF2YXRhciB7XG4gICAgaGVpZ2h0OiAxNXZoO1xufVxuXG4uYXZhdGFyIGltZyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcbiAgICBib3JkZXI6IDAuNHZoIHNvbGlkIGxpZ2h0Z3JleTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/component/login/login.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/component/login/login.component.ts ***!
    \****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
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

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(titleService) {
        _classCallCheck(this, LoginComponent);

        this.titleService = titleService;
        this.titleService.setTitle("Jorrit's Website | Login");
      }

      _createClass(LoginComponent, [{
        key: "changePath",
        value: function changePath(path) {
          window.location.pathname = path;
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/component/login/login.component.css")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/model/ttt.model.ts":
  /*!************************************!*\
    !*** ./src/app/model/ttt.model.ts ***!
    \************************************/

  /*! exports provided: TTTModel */

  /***/
  function srcAppModelTttModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TTTModel", function () {
      return TTTModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var EMPTY_PATH = "../../../assets/ttt/empty/";
    var CROSS_PATH = "../../../assets/ttt/cross/";
    var CIRCLE_PATH = "../../../assets/ttt/circle/";
    var EASY_DIF = 1;
    var HARD_DIF = 2;

    var TTTModel =
    /*#__PURE__*/
    function () {
      function TTTModel() {
        _classCallCheck(this, TTTModel);

        this.playerWon = null;
        this.movesMade = 0;
        this.difficulty = null; // difficulty: number = EASY_DIF;
        // difficulty: number = HARD_DIF;

        this.algoMoves = [[]];
        this.turn = "cross";
        this.initField();
      }

      _createClass(TTTModel, [{
        key: "initField",
        value: function initField() {
          this.fieldOfPaths = [[EMPTY_PATH + "tl.png", EMPTY_PATH + "tm.png", EMPTY_PATH + "tr.png"], [EMPTY_PATH + "ml.png", EMPTY_PATH + "mm.png", EMPTY_PATH + "mr.png"], [EMPTY_PATH + "bl.png", EMPTY_PATH + "bm.png", EMPTY_PATH + "br.png"]];
          this.field = [["empty", "empty", "empty"], ["empty", "empty", "empty"], ["empty", "empty", "empty"]];
        }
      }, {
        key: "clickedOn",
        value: function clickedOn(x, y) {
          if (this.field[y][x] != "empty") return;
          this.movesMade++;
          this.field[y][x] = this.turn;
          var imagePath = this.getImagePath(x, y);
          this.fieldOfPaths[y][x] = imagePath;
          this.checkWinCondition();

          if (this.movesMade == 9 && this.playerWon == null) {
            this.playerWon = "draw";
            return;
          }

          if (this.playerWon == null && this.difficulty != null) this.algo();
        }
      }, {
        key: "getImagePath",
        value: function getImagePath(x, y) {
          var firstChar = null;
          if (y == 0) firstChar = "t";
          if (y == 1) firstChar = "m";
          if (y == 2) firstChar = "b";
          var secondChar = null;
          if (x == 0) secondChar = "l";
          if (x == 1) secondChar = "m";
          if (x == 2) secondChar = "r";

          if (this.turn == "cross") {
            this.turn = "circle";
            return CROSS_PATH + firstChar + secondChar + ".png";
          }

          if (this.turn == "circle") {
            this.turn = "cross";
            return CIRCLE_PATH + firstChar + secondChar + ".png";
          }
        }
      }, {
        key: "checkWinCondition",
        value: function checkWinCondition() {
          var players = ["cross", "circle"];

          for (var p = 0; p < players.length; p++) {
            for (var i = 0; i < this.field[0].length; i++) {
              var n = 0; // Check if player won horizontally

              for (var j = 0; j < this.field.length; j++) {
                if (this.field[i][j] == players[p]) n++;
              }

              if (n == 3) {
                this.playerWon = players[p];
                return;
              }

              n = 0; // Check if player won vertically

              for (var _j = 0; _j < this.field.length; _j++) {
                if (this.field[_j][i] == players[p]) n++;
              }

              if (n == 3) {
                this.playerWon = players[p];
                return;
              }
            } // Check if player won diagonally


            if (this.field[1][1] == players[p]) {
              if (this.field[0][0] == players[p]) {
                if (this.field[2][2] == players[p]) {
                  this.playerWon = players[p];
                  return;
                }
              }

              if (this.field[0][2] == players[p]) {
                if (this.field[2][0] == players[p]) {
                  this.playerWon = players[p];
                  return;
                }
              }
            }
          }
        }
      }, {
        key: "resetGame",
        value: function resetGame() {
          this.playerWon = null;
          this.turn = "cross";
          this.movesMade = 0;
          this.algoMoves = [[]];
          this.initField();
        }
      }, {
        key: "algo",
        value: function algo() {
          while (this.turn == "circle") {
            switch (this.difficulty) {
              case EASY_DIF:
                this.easyAlgo();
                break;

              case HARD_DIF:
                this.hardAlgo();
                break;
            }
          }
        }
      }, {
        key: "easyAlgo",
        value: function easyAlgo() {
          var randomY = this.getRandomInt(this.field.length);
          var randomX = this.getRandomInt(this.field[0].length);
          if (this.field[randomY][randomX] != "empty") return;else this.clickedOn(randomX, randomY);
        }
      }, {
        key: "hardAlgo",
        value: function hardAlgo() {
          console.log(this.algoMoves);
          var firstMove = null;

          switch (this.movesMade) {
            case 1:
              if (this.field[1][1] == 'cross') {
                firstMove = 'mid';
              }

              if (firstMove == 'mid') {
                var randomInt = this.getRandomInt(4);

                switch (randomInt) {
                  case 0:
                    this.clickedOn(0, 0);
                    this.algoMoves[0] = [0, 0];
                    break;

                  case 1:
                    this.clickedOn(2, 0);
                    this.algoMoves[0] = [2, 0];
                    break;

                  case 2:
                    this.clickedOn(0, 2);
                    this.algoMoves[0] = [0, 2];
                    break;

                  case 3:
                    this.clickedOn(2, 2);
                    this.algoMoves[0] = [2, 2];
                    break;
                }

                return;
              }

              this.easyAlgo();

            case 3:
              if (firstMove = 'mid') {
                var oppositeMoveOfFirstMove = this.getOppositeCoordsOf(this.algoMoves[0]);

                if (this.field[oppositeMoveOfFirstMove[0]][oppositeMoveOfFirstMove[1]] == 'cross') {
                  var randomCornerMoves = this.getFreeMoves('corner');

                  var _randomInt = this.getRandomInt(randomCornerMoves.length);

                  var chosenRandomCornerMove = randomCornerMoves[_randomInt];
                  this.clickedOn(chosenRandomCornerMove[0], chosenRandomCornerMove[1]);
                }

                return;
              }

              this.easyAlgo();

            case 5:
              if (this.field[0][1] == 'empty') this.clickedOn(0, 1);
              this.easyAlgo();
          }

          return;
        }
      }, {
        key: "getOppositeCoordsOf",
        value: function getOppositeCoordsOf(list) {
          if (list[0] == 1 && list[1] == 1) {
            return;
          }

          var temp = [-1, -1];

          switch (list[0]) {
            case 0:
              temp[0] = 2;
              break;

            case 1:
              temp[0] = 1;
              break;

            case 2:
              temp[0] = 0;
              break;
          }

          switch (list[1]) {
            case 0:
              temp[1] = 2;
              break;

            case 1:
              temp[1] = 1;
              break;

            case 2:
              temp[1] = 0;
              break;
          }

          return temp;
        }
      }, {
        key: "getFreeMoves",
        value: function getFreeMoves(spot) {
          var temp = [[]];

          if (spot = 'corner') {
            if (this.field[0][0] == 'empty') temp.push([0, 0]);
            if (this.field[2][0] == 'empty') temp.push([2, 0]);
            if (this.field[0][2] == 'empty') temp.push([0, 2]);
            if (this.field[2][2] == 'empty') temp.push([2, 2]);
          }

          return temp;
        }
      }, {
        key: "getRandomInt",
        value: function getRandomInt(max) {
          return Math.floor(Math.random() * Math.floor(max));
        }
      }]);

      return TTTModel;
    }();
    /***/

  },

  /***/
  "./src/app/model/window-manager.model.ts":
  /*!***********************************************!*\
    !*** ./src/app/model/window-manager.model.ts ***!
    \***********************************************/

  /*! exports provided: WindowManagerModel */

  /***/
  function srcAppModelWindowManagerModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WindowManagerModel", function () {
      return WindowManagerModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var WindowManagerModel =
    /*#__PURE__*/
    function () {
      function WindowManagerModel() {
        _classCallCheck(this, WindowManagerModel);

        this.CMD_ID = 1;
        this.WORD_ID = 2;
        this.TTT_ID = 3;
        this.BROWSER_ID = 4;
        this.showingTicTacToe = false;
        this.showingWord = true;
        this.showingCmd = true;
        this.showingBrowser = false;
        this.showingStart = false;
        this.pageZIndexes = [this.TTT_ID, this.WORD_ID, this.CMD_ID, this.BROWSER_ID];
        this.wordZIndex = 1;
        this.cmdZIndex = 1;
        this.tttZIndex = 1;
        this.browserZIndex = 1;
      }

      _createClass(WindowManagerModel, [{
        key: "moveTabToFront",
        value: function moveTabToFront(id) {
          this.showingStart = false;
          this.pageZIndexes.splice(this.getCurrentIndex(id), 1);
          this.pageZIndexes.push(id);
          this.updateAllIndexes();
        }
      }, {
        key: "updateAllIndexes",
        value: function updateAllIndexes() {
          this.cmdZIndex = this.getCurrentIndex(this.CMD_ID) + 1;
          this.wordZIndex = this.getCurrentIndex(this.WORD_ID) + 1;
          this.tttZIndex = this.getCurrentIndex(this.TTT_ID) + 1;
          this.browserZIndex = this.getCurrentIndex(this.BROWSER_ID) + 1;
        }
      }, {
        key: "openTab",
        value: function openTab(id) {
          this.moveTabToFront(id);

          switch (id) {
            case this.CMD_ID:
              this.showingCmd = true;
              break;

            case this.WORD_ID:
              this.showingWord = true;
              break;

            case this.TTT_ID:
              this.showingTicTacToe = true;
              break;

            case this.BROWSER_ID:
              this.showingBrowser = true;
              break;
          }
        }
      }, {
        key: "closeTab",
        value: function closeTab(id) {
          switch (id) {
            case this.CMD_ID:
              this.showingCmd = false;
              break;

            case this.WORD_ID:
              this.showingWord = false;
              break;

            case this.TTT_ID:
              this.showingTicTacToe = false;
              break;

            case this.BROWSER_ID:
              this.showingBrowser = false;
              break;
          }
        }
      }, {
        key: "getCurrentIndex",
        value: function getCurrentIndex(id) {
          for (var i = 0; i < this.pageZIndexes.length; i++) {
            if (this.pageZIndexes[i] == id) return i;
          }

          return -1;
        }
      }]);

      return WindowManagerModel;
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

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
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
    /*! /Users/jorritschepers/Documents/Projects/MyWebsite/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map