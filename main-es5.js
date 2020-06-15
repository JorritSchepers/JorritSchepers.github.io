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


    __webpack_exports__["default"] = "<div class=\"container\">  \r\n    <!-- BSOD -->\r\n    <div id=\"bsod-container\" *ngIf=\"showBsod\"> \r\n        <div id=\"bsod-text-container\">\r\n            <div id=\"bsod-smiley\">:)</div>\r\n            <span>\r\n                Your PC is completely fine! Just wanted to say: Happy Birthday! From Jorrit, Sam and Luuk!\r\n            </span>\r\n            <br>\r\n            <br>\r\n            <br>\r\n            <span>\r\n                9000% complete\r\n            </span>\r\n            <div id=\"bsod-help-container\">\r\n                <div id=\"bsod-help-qr\">\r\n                    <img src=\"../../../assets/bsod/frame.png\">    \r\n                </div>\r\n                <div id=\"bsod-help-text\">\r\n                    <span>\r\n                        For more information about this celebration and possible parties, visit https://zoekeenleven.nl\r\n                    </span>\r\n                    <br>\r\n                    <br>\r\n                    <span>\r\n                        If you call a support person, give them this info:\r\n                    </span>\r\n                    <br>\r\n                    <span>\r\n                        Stop code: THANK_YOU\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    \r\n    <!-- Start -->\r\n    <div class=\"start-container\" *ngIf=\"windowManager.showingStart\">\r\n        <div class=\"start-toprow\"> \r\n            <img src=\"../../../assets/avatar.jpg\" alt=\"Avater\"/>\r\n            <span> Jorrit Schepers </span>\r\n        </div>\r\n        <div class=\"start-midrow\">\r\n        </div> \r\n        <div class=\"start-bottomrow\">\r\n            <div class=\"start-logoff-container\">\r\n                <img src=\"../../../assets/icons/logoff-icon.jpg\" alt=\"Log off button\" (click)=\"logout()\">\r\n                <span> Log Off </span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Picture -->\r\n    <div class=\"picture-container\" *ngIf=\"pictureId != 0\" (click)=\"pictureId = 0\">\r\n        <img src=\"../../../assets/my-photos/{{pictureId}}.jpg\" alt=\"picture of Jorrit Schepers\">\r\n        <div>\r\n            <img src=\"../../../assets/icons/close-icon-white.png\" alt=\"close button\">\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Tic Tac Toe -->\r\n    <div [style.zIndex]=\"windowManager.tttZIndex\" class=\"tab-container\" id=\"ttt-container\"\r\n         *ngIf=\"windowManager.showingTicTacToe\" (click)=\"windowManager.moveTabToFront(windowManager.TTT_ID)\" cdkDrag>\r\n        <div class=\"tab-header\" id=\"ttt-header\" cdkDragHandle>\r\n            <img src=\"../../../assets/ttt/cross/mm.png\" alt=\"Tic Tac Toe Icon\">\r\n            <span>Tic Tac Toe</span>\r\n            <img src=\"../../../assets/icons/close-icon-white.png\" alt=\"close button\" (click)=\"windowManager.closeTab(windowManager.TTT_ID)\">\r\n        </div>\r\n        <div class=\"tab-body\" id=\"ttt-body\">\r\n            <div class=\"ttt-end-screen\" *ngIf=\"ttt.playerWon != null\" (click)=\"ttt.resetGame()\">\r\n                <span *ngIf=\"ttt.playerWon == 'cross'\" style=\"color: rgb(0, 200, 0)\">You won!</span>\r\n                <span *ngIf=\"ttt.playerWon == 'circle'\" style=\"color: red\">You lost</span>\r\n                <span *ngIf=\"ttt.playerWon == 'draw'\" style=\"color: grey\">Draw!</span>\r\n            </div>\r\n            <div class=\"ttt-row\" *ngFor=\"let row of ttt.fieldOfPaths; let y = index\">\r\n                <div class=\"ttt-column\" *ngFor=\"let tile of row; let x = index\">\r\n                    <img src=\"{{ttt.fieldOfPaths[y][x]}}\" (click)=\"ttt.clickedOn(x, y)\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Word -->\r\n    <div [style.zIndex]=\"windowManager.wordZIndex\" class=\"tab-container\" id=\"word-container\" \r\n         *ngIf=\"windowManager.showingWord\" (click)=\"windowManager.moveTabToFront(windowManager.WORD_ID)\" cdkDrag >\r\n        <div class=\"tab-header\" id=\"word-header\" cdkDragHandle>\r\n            <img src=\"../../../assets/icons/save-icon-whitepng.png\" alt=\"Save icon\">\r\n            <span>Fancy wordpad</span>\r\n            <img src=\"../../../assets/icons/close-icon-white.png\" alt=\"close button\" (click)=\"windowManager.closeTab(windowManager.WORD_ID)\">\r\n        </div>\r\n        <div class=\"tab-body\" id=\"word-body\">\r\n            <div class=\"word-toolbar\"></div>\r\n            <div class=\"word-page\">\r\n                <div class=\"word-page-text\">\r\n                    <img src=\"../../../assets/my-photos/2.jpg\" alt=\"Photo is Jorrit Schepers\"><br>\r\n                    <!-- <p>\r\n                        Hoi, mijn naam is Jorrit Schepers en ik ben tweede jaars ICT student op <a href=\"https://www.han.nl/\">Hogeschool van Arnhem en Nijmegen</a>.\r\n                    </p> -->\r\n                    <textarea>{{inputValue}}</textarea>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- CMD -->\r\n    <div [style.zIndex]=\"windowManager.cmdZIndex\" class=\"tab-container\" id=\"cmd-container\" \r\n         *ngIf=\"windowManager.showingCmd\" (click)=\"windowManager.moveTabToFront(windowManager.CMD_ID)\" cdkDrag>\r\n        <div class=\"tab-header\" id=\"cmd-header\" cdkDragHandle>\r\n            <img src=\"../../../assets/icons/cmd-icon-white.png\" alt=\"cmd icon\">\r\n            <span>A great interface!</span>\r\n            <img src=\"../../../assets/icons/close-icon-white.png\" alt=\"close button\" (click)=\"windowManager.closeTab(windowManager.CMD_ID)\">\r\n        </div>\r\n        <div class=\"tab-body\" id=\"cmd-body\">\r\n            <div class=cmd-line>\r\n                <span>C:\\Users\\JorritSchepers>&nbsp;</span>\r\n                <form [formGroup]=\"cmdForm\" (ngSubmit)=\"enterCommand(cmdForm.value)\">\r\n                    <input id=\"cmd\" type=\"text\" formControlName=\"cmd\">\r\n                </form>\r\n            </div>\r\n            <div class=cmd-line *ngIf=\"currentCommand\">\r\n                {{currentCommand}}\r\n            </div>\r\n            <!-- <br> -->\r\n            <!-- <span>C:\\Users\\JorritSchepers>dir</span><br>\r\n            <br>\r\n            <span>Directory of C:\\Users\\JorritSchepers</span><br>\r\n            <br>\r\n            <a routerLink=\"/about-me\" routerLinkActive=\"active\"><span>07/01/2020 23:31 &nbsp; &lt;DIR&gt; &nbsp;&nbsp;&nbsp; about-me</span></a><br>\r\n            <a routerLink=\"/my-projects\" routerLinkActive=\"active\"><span>10/01/2020 19:01 &nbsp; &lt;DIR&gt; &nbsp;&nbsp;&nbsp; my-projects</span></a><br>\r\n            <a routerLink=\"/contact-me\" routerLinkActive=\"active\"><span>15/01/2020 03:54 &nbsp; &lt;DIR&gt; &nbsp;&nbsp;&nbsp; contact-me</span></a><br> -->\r\n        </div>\r\n    </div>\r\n    \r\n    <!-- Browser -->\r\n    <div [style.zIndex]=\"windowManager.browserZIndex\" class=\"tab-container\" id=\"browser-container\" \r\n         *ngIf=\"windowManager.showingBrowser\"(click)=\"windowManager.moveTabToFront(windowManager.BROWSER_ID)\" cdkDrag>\r\n        <div class=\"tab-header\" id=\"browser-header\" cdkDragHandle>\r\n            <img src=\"https://handiggoed.nl/ontwikkelsite/wp-content/uploads/2015/12/IETS-400x400.jpg\" alt=\"browser icon\">\r\n            <span>The little less dark web</span>\r\n            <img src=\"../../../assets/icons/close-icon-black.png\" alt=\"close button\" (click)=\"windowManager.closeTab(windowManager.BROWSER_ID)\">\r\n        </div>\r\n        <div class=\"tab-body\" id=\"browser-body\">\r\n            <div class=\"browser-jorrit\">\r\n                <span style=\"color: #4285F4;\">J</span>\r\n                <span style=\"color: #EA4335;\">o</span>\r\n                <span style=\"color: #FBBC06;\">r</span>\r\n                <span style=\"color: #4285F4;\">r</span>\r\n                <span style=\"color: #34A853;\">i</span>\r\n                <span style=\"color: #EA4335;\">t</span>\r\n            </div>\r\n            <div class=\"browser-search-box\">\r\n                <form [formGroup]=\"searchForm\" (ngSubmit)=\"searchWord(searchForm.value)\">\r\n                    <input id=\"word\" class=\"browser-search-input\" type=\"text\" formControlName=\"word\" placeholder=\"Try searching for 'Jorrit Schepers'!\" required>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Desktop Icons -->\r\n    <div class=\"desktop-icon\" (click)=\"openPicture(1)\">\r\n        <img src=\"../../../assets/my-photos/1.jpg\">\r\n        <span>Jorrit.jpg</span>\r\n    </div>\r\n\r\n    <div class=\"desktop-icon\" (click)=\"openPicture(2)\">\r\n        <img src=\"../../../assets/my-photos/2.jpg\">\r\n        <span>Jorrit in de bergen.jpg</span>\r\n    </div>\r\n\r\n    <div class=\"desktop-icon\" (click)=\"windowManager.openTab(windowManager.TTT_ID)\">\r\n        <img src=\"../../../assets/ttt/cross/mm.png\">\r\n        <span>tic-tac-toe.exe</span>\r\n    </div>\r\n\r\n    <div class=\"desktop-icon\" (click)=\"windowManager.openTab(windowManager.CMD_ID)\">\r\n        <img src=\"../../../assets/icons/cmd-icon-white.png\">\r\n        <span>cmd.exe</span>\r\n    </div>\r\n\r\n    <div class=\"desktop-icon\" (click)=\"windowManager.openTab(windowManager.WORD_ID)\">\r\n        <img src=\"../../../assets/icons/save-icon-whitepng.png\">\r\n        <span>about me.docx</span>\r\n    </div>\r\n\r\n    <div class=\"desktop-icon\" (click)=\"windowManager.openTab(windowManager.BROWSER_ID)\">\r\n        <img src=\"https://handiggoed.nl/ontwikkelsite/wp-content/uploads/2015/12/IETS-400x400.jpg\">\r\n        <span>Brow-<br>ser.exe</span>\r\n    </div>\r\n\r\n    <div class=\"desktop-icon\">\r\n        <a href=\"https://www.linkedin.com/in/jorrit-schepers-b9809317b/\" target=\"_blank\">\r\n            <img src=\"../../../assets/icons/linked-in-logo.png\">\r\n            <span>Linked-<br>In.url</span>\r\n        </a>\r\n    </div>\r\n\r\n    <div class=\"desktop-icon\">\r\n        <a href=\"https://github.com/JorritSchepers\" target=\"_blank\">\r\n            <img src=\"../../../assets/icons/github-logo.png\">\r\n            <span>GitHub.url</span>\r\n        </a>\r\n    </div>\r\n\r\n    <div class=\"desktop-icon\">\r\n        <a href=\"https://www.instagram.com/jorrit.schepers/\" target=\"_blank\">\r\n            <img src=\"../../../assets/icons/instagram-logo.png\">\r\n            <span>Insta-<br>gram.url</span>\r\n        </a>\r\n    </div>\r\n    \r\n\r\n    <!-- Taskbar -->\r\n    <div class=\"taskbar-container\">\r\n        <div class=\"taskbar-windows-logo\" (click)=\"windowManager.showingStart = !windowManager.showingStart\">\r\n            <img src=\"../../../assets/icons/windows-logo-icon.png\" alt=\"WindowsXP logo\">\r\n            <span><i><b>start</b></i></span>\r\n        </div>\r\n        <div class=\"taskbar\">\r\n            <div class=\"taskbar-time\"> {{currentTime | date: \"short\"}} </div>\r\n        </div>\r\n    </div>\r\n</div>";
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


    __webpack_exports__["default"] = "<div class=\"container\">\r\n    <div class=\"login-container\">\r\n        <div class=\"account-container\">\r\n            <div class=\"avatar\">\r\n                <a routerLink=\"/home\" routerLinkActive=\"active\">\r\n                    <img src=\"../../../assets/avatar.jpg\" alt=\"Photo of Jorrit Schepers\">\r\n                </a>\r\n            </div>\r\n            <span>Jorrit Schepers</span>\r\n        </div>\r\n    </div>\r\n</div>";
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


    __webpack_exports__["default"] = "* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    overflow: hidden;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\na:visited {\r\n    color: white;\r\n}\r\n\r\n.container {\r\n    position: absolute;\r\n    top: 0%;\r\n    left: 0%;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background-color: black;\r\n    background-image: url('windows-xp-wallpaper.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n.tab-container {\r\n    position: absolute;\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n}\r\n\r\n.tab-header {\r\n    width: 100%;\r\n    height: 3vh;\r\n    display: flex;\r\n    align-items: center;\r\n    font-family: Segoe UI;\r\n    font-size: 1.6vh;\r\n}\r\n\r\n.tab-header span {\r\n    width: 100%;\r\n}\r\n\r\n.tab-header img {\r\n    height: 2vh;\r\n    width: 2vh;\r\n    margin-left: 0.4vh;\r\n    margin-right: 0.4vh;\r\n}\r\n\r\n.tab-body {\r\n    width: 100%;\r\n    height: 100%;\r\n    font-family: Segoe UI;\r\n}\r\n\r\n/*================================================================================================================   General   */\r\n\r\n.picture-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    position: absolute;\r\n    flex-direction: row;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0, 0, 0, 0.70);\r\n    z-index: 10;\r\n}\r\n\r\n.picture-container img {\r\n    margin: auto;\r\n    opacity: 100%;\r\n    height: 100%;\r\n    z-index: 11;\r\n\r\n    /* No text or image selection */\r\n    -webkit-user-select: none;\r\n    -khtml-user-select: none;\r\n    -moz-user-select: none;\r\n    -o-user-select: none;\r\n}\r\n\r\n.picture-container div {\r\n    margin-top: 2.5vh;\r\n    margin-right: 2.5vh;    \r\n    width: 5vh;\r\n    height: 5vh;\r\n}\r\n\r\n/*=============================================================================================================   Picture   */\r\n\r\n#cmd-container {\r\n    width: 40%;\r\n    height: 40%;\r\n    margin-left: 6vw;\r\n    margin-top: 24vh;\r\n}\r\n\r\n#cmd-header {\r\n    background-color: #2B2B2B;\r\n    color: white;\r\n}\r\n\r\n#cmd-body {\r\n    background-color: #0C0C0C;\r\n    color: #cccccc;\r\n    font-family: Courier New;\r\n    font-size: 1.7vh;\r\n}\r\n\r\n#cmd-body a {\r\n    color: #cccccc;\r\n}\r\n\r\n#cmd-body a:hover {\r\n    font-size: 1.9vh;\r\n    color: white;\r\n}\r\n\r\n#cmd-body a:visited {\r\n    color: #cccccc;\r\n    text-decoration: none;\r\n}\r\n\r\n#cmd-body input {\r\n    background-color: #0C0C0C;\r\n    border: none;\r\n    height: 1.8vh;\r\n    width: 40vh;\r\n    color: #cccccc;\r\n    font-family: Courier New;\r\n    font-size: 1.8vh;\r\n}\r\n\r\n#cmd-body input:focus {\r\n    outline: 0;\r\n}\r\n\r\n.cmd-line {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n/*=============================================================================================================   CMD   */\r\n\r\n#browser-container {\r\n    width: 80%;\r\n    height: 80%;\r\n    margin-left: 10%;\r\n    margin-top: 5%;\r\n}\r\n\r\n#browser-header {\r\n    background-color: #CCCCCC;\r\n    font-size: 1.6vh;\r\n}\r\n\r\n#browser-body {\r\n    background-color: #EEEEEE;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n}\r\n\r\n.browser-jorrit {\r\n    font-size: 14vh;\r\n    font-weight: bold;\r\n    font-family: Roboto;\r\n\r\n    /* No text or image selection */\r\n    -webkit-user-select: none;\r\n    -khtml-user-select: none;\r\n    -moz-user-select: none;\r\n    -o-user-select: none;\r\n}\r\n\r\n.browser-search-box {\r\n    width: 40%;\r\n    height: 8vh;\r\n}\r\n\r\n.browser-search-input {\r\n    background-color: white;\r\n    width: 100%;\r\n    height: 8vh;\r\n    border-radius: 4vh;\r\n    border: 0.3vh solid lightgrey;\r\n    font-size: 150%;\r\n    text-align: center;\r\n}\r\n\r\n.browser-search-input:focus {\r\n    outline: 0;\r\n}\r\n\r\n/*=============================================================================================================   Browser   */\r\n\r\n#word-container {\r\n    background-color: #2A579A;\r\n    width: 40%;\r\n    height: 80%;\r\n    margin-top: 14vh;\r\n    margin-left: 40vw;\r\n}\r\n\r\n#word-header {\r\n    width: 99.5%;\r\n    height: 3vh;\r\n    color: white;\r\n}\r\n\r\n#word-body {\r\n    background-color: #E6E6E6;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.word-toolbar {\r\n    width: 100%;\r\n    height: 8vh;\r\n    background-color: #EEEEEE;\r\n    border-bottom: 2px solid #DDDDDD;\r\n}\r\n\r\n.word-page {\r\n    width: 80%;\r\n    height: 100%;\r\n    margin-top: 6vh;\r\n    background-color: white;\r\n}\r\n\r\n.word-page-text {\r\n    width: 80%;\r\n    margin: auto;\r\n    margin-top: 4vh;\r\n    font-size: 14px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.word-page-text a {\r\n    color: blue;\r\n    text-decoration: underline;\r\n}\r\n\r\n.word-page-text a:hover {\r\n    font-size: 14px;\r\n}\r\n\r\n.word-page-text img {\r\n    width: 60%;\r\n}\r\n\r\n.word-page-text textarea {\r\n    width: 100%;\r\n    background-color: white;\r\n    border: none;\r\n    resize: none;\r\n    font-family: Segoe UI;\r\n    height: 100vh;\r\n}\r\n\r\n.word-page-text textarea:focus {\r\n    outline: 0;\r\n}\r\n\r\n/*=============================================================================================================   Word   */\r\n\r\n#ttt-container {\r\n    width: 30vh;\r\n    height: 30vh;\r\n    margin-top: 6vh;\r\n    background-color: dodgerblue;\r\n}\r\n\r\n#ttt-header {\r\n    background-color: dodgerblue;\r\n    color: white;\r\n}\r\n\r\n#ttt-body {\r\n    background-color: white;\r\n\r\n    /* No text or image selection */\r\n    -webkit-user-select: none;\r\n    -khtml-user-select: none;\r\n    -moz-user-select: none;\r\n    -o-user-select: none;\r\n}\r\n\r\n.ttt-row {\r\n    height: 33%;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.ttt-column {\r\n    height: 100%;\r\n    width: 33%;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.ttt-end-screen {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 350%;\r\n    font-family: Segoe UI;\r\n    font-weight: bold;\r\n    background-color: rgba(0, 0, 0, 0.20);\r\n}\r\n\r\n.ttt-column img {\r\n    height: 100%;\r\n    margin: 0;\r\n}\r\n\r\n/*============================================================================================================= Tic Tac Toe   */\r\n\r\n.desktop-icon {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 8vh;\r\n    color: white;\r\n    font-family: Segoe UI;\r\n    text-shadow: 1px 1px #000000;\r\n    text-align: center;\r\n    margin: 2vh;\r\n\r\n    /* No text or image selection */\r\n    -webkit-user-select: none;\r\n    -khtml-user-select: none;\r\n    -moz-user-select: none;\r\n    -o-user-select: none;\r\n}\r\n\r\n.desktop-icon img {\r\n    width: 60%;\r\n    margin-bottom: 1vh;\r\n}\r\n\r\n.desktop-icon a {\r\n    cursor: default;\r\n    font-size: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.desktop-icon span {\r\n    cursor: default;\r\n}\r\n\r\n/*=============================================================================================================   Desktop Icon   */\r\n\r\n.taskbar-container {\r\n    position: absolute;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 4%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    background: linear-gradient(\r\n        to top, \r\n        #245DDC,\r\n        #3F81DA\r\n    );\r\n    z-index: 200;\r\n}\r\n\r\n.taskbar {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.taskbar-windows-logo {\r\n    width: 7%;    \r\n    display: flex;\r\n    align-items: center;\r\n    background: linear-gradient(\r\n        to bottom, \r\n        #1C961E, \r\n        #2C6129\r\n    );\r\n    height: 100%;\r\n    border-top: 2px solid #0B4126;\r\n    border-right: 2px solid #0B4126;\r\n    border-top-right-radius: 1.5vh;\r\n    border-bottom-right-radius: 1.5vh;\r\n\r\n    /* No text or image selection */\r\n    -webkit-user-select: none;\r\n    -khtml-user-select: none;\r\n    -moz-user-select: none;\r\n    -o-user-select: none;\r\n}\r\n\r\n.taskbar-windows-logo:hover {\r\n    background: linear-gradient(\r\n        to top, \r\n        #1C961E, \r\n        #2C6129\r\n    );;\r\n}\r\n\r\n.taskbar-windows-logo img {\r\n    height: 80%;\r\n    margin-left: 10%;\r\n}\r\n\r\n.taskbar-windows-logo span {\r\n    color: white;\r\n    font-family: Segoe UI;\r\n    font-size: 2vh;\r\n    margin-left: 5%;\r\n}\r\n\r\n.taskbar-time {\r\n    color: white;\r\n    font-family: Segoe UI;\r\n    display: flex;\r\n    align-items: center;\r\n    height: 100%;\r\n    justify-content: flex-end;\r\n    margin-right: 1vh;\r\n\r\n    /* No text or image selection */\r\n    -webkit-user-select: none;\r\n    -khtml-user-select: none;\r\n    -moz-user-select: none;\r\n    -o-user-select: none;\r\n}\r\n\r\n/*=============================================================================================================   Taskbar   */\r\n\r\n.start-container {\r\n    background-color: whitesmoke;\r\n    width: 18%;\r\n    height: 51.5vh;\r\n    position: absolute;\r\n    margin-left: 0;\r\n    margin-top: 45vh;\r\n    z-index: 100;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.start-toprow {\r\n    height: 15%;\r\n    background: linear-gradient(\r\n        to bottom, \r\n        #245DDC,\r\n        #3F81DA\r\n    );\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.start-toprow img {\r\n    margin-left: 1vh;\r\n    margin-right: 1vh;\r\n}\r\n\r\n.start-toprow span {\r\n    color: white;\r\n    font-family: Segoe UI;\r\n    font-size: larger;\r\n}\r\n\r\n.start-midrow {\r\n    height: 70%;\r\n    background-color: whitesmoke;\r\n}\r\n\r\n.start-bottomrow {\r\n    height: 15%;\r\n    background: linear-gradient(\r\n        to top, \r\n        #245DDC,\r\n        #3F81DA\r\n    );\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n}\r\n\r\n.start-toprow img {\r\n    height: 80%;\r\n}\r\n\r\n.start-logoff-container {\r\n    height: 80%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-right: 2vh;\r\n    color: white;\r\n    font-family: Segoe UI;\r\n}\r\n\r\n.start-logoff-container img {\r\n    height: 60%;\r\n    margin-right: 1vh; \r\n}\r\n\r\n/*===============================================================================================================   Start   */\r\n\r\n#bsod-container {\r\n    background-color: #0078D7;   \r\n    height: 100vh;\r\n    width: 100vw;\r\n    z-index: 1000; \r\n    position: absolute;\r\n    font-size: 4vh;\r\n    color: white;\r\n    font-family: Segoe UI;\r\n    font-weight: lighter;\r\n}\r\n\r\n#bsod-text-container {\r\n    width: 55%;\r\n    margin-left: 10%;\r\n    margin-top: 5.5%;\r\n}\r\n\r\n#bsod-smiley {\r\n    font-size: 19.5vh;\r\n}\r\n\r\n#test {\r\n    height: 100vh;\r\n    width: 100vw;\r\n    z-index: 1001; \r\n    position: absolute;\r\n    opacity: 0.3;\r\n}\r\n\r\n#bsod-help-container {\r\n    display: flex;\r\n    flex-direction: row;\r\n    width: 100%;\r\n    height: 11vh;\r\n    margin-top: 2vh;\r\n}\r\n\r\n#bsod-help-qr {\r\n    margin-left: 1vh;\r\n    width: 11vh;\r\n    height: 100%;\r\n}\r\n\r\n#bsod-help-qr img {\r\n    height: 100%;\r\n}\r\n\r\n#bsod-help-text {\r\n    font-size: 1.8vh;\r\n    margin-left: 2%;\r\n}\r\n\r\n/*================================================================================================================   BSOD   */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsUUFBUTtJQUNSLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGlEQUErRDtJQUMvRCw0QkFBNEI7SUFDNUIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHFCQUFxQjtBQUN6Qjs7QUFDQSxnSUFBZ0k7O0FBRWhJO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1oscUNBQXFDO0lBQ3JDLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLFdBQVc7O0lBRVgsK0JBQStCO0lBQy9CLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFDQSw2SEFBNkg7O0FBRTdIO0lBQ0ksVUFBVTtJQUNWLFdB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Q25COztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUNBLDZIQUE2SCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5hIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuYTp2aXNpdGVkIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDAlO1xyXG4gICAgbGVmdDogMCU7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL3dpbmRvd3MteHAtd2FsbHBhcGVyLmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLnRhYi1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnRhYi1oZWFkZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDN2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IFNlZ29lIFVJO1xyXG4gICAgZm9udC1zaXplOiAxLjZ2aDtcclxufVxyXG5cclxuLnRhYi1oZWFkZXIgc3BhbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRhYi1oZWFkZXIgaW1nIHtcclxuICAgIGhlaWdodDogMnZoO1xyXG4gICAgd2lkdGg6IDJ2aDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjR2aDtcclxuICAgIG1hcmdpbi1yaWdodDogMC40dmg7XHJcbn1cclxuXHJcbi50YWItYm9keSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZvbnQtZmFtaWx5OiBTZWdvZSBVSTtcclxufVxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gICBHZW5lcmFsICAgKi9cclxuXHJcbi5waWN0dXJlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzApO1xyXG4gICAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbi5waWN0dXJlLWNvbnRhaW5lciBpbWcge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgb3BhY2l0eTogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHotaW5kZXg6IDExO1xyXG5cclxuICAgIC8qIE5vIHRleHQgb3IgaW1hZ2Ugc2VsZWN0aW9uICovXHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1vLXVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4ucGljdHVyZS1jb250YWluZXIgZGl2IHtcclxuICAgIG1hcmdpbi10b3A6IDIuNXZoO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyLjV2aDsgICAgXHJcbiAgICB3aWR0aDogNXZoO1xyXG4gICAgaGVpZ2h0OiA1dmg7XHJcbn1cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICAgUGljdHVyZSAgICovXHJcblxyXG4jY21kLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgaGVpZ2h0OiA0MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogNnZ3O1xyXG4gICAgbWFyZ2luLXRvcDogMjR2aDtcclxufVxyXG5cclxuI2NtZC1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJCMkIyQjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI2NtZC1ib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwQzBDMEM7XHJcbiAgICBjb2xvcjogI2NjY2NjYztcclxuICAgIGZvbnQtZmFtaWx5OiBDb3VyaWVyIE5ldztcclxuICAgIGZvbnQtc2l6ZTogMS43dmg7XHJcbn1cclxuXHJcbiNjbWQtYm9keSBhIHtcclxuICAgIGNvbG9yOiAjY2NjY2NjO1xyXG59XHJcblxyXG4jY21kLWJvZHkgYTpob3ZlciB7XHJcbiAgICBmb250LXNpemU6IDEuOXZoO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jY21kLWJvZHkgYTp2aXNpdGVkIHtcclxuICAgIGNvbG9yOiAjY2NjY2NjO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4jY21kLWJvZHkgaW5wdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBDMEMwQztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGhlaWdodDogMS44dmg7XHJcbiAgICB3aWR0aDogNDB2aDtcclxuICAgIGNvbG9yOiAjY2NjY2NjO1xyXG4gICAgZm9udC1mYW1pbHk6IENvdXJpZXIgTmV3O1xyXG4gICAgZm9udC1zaXplOiAxLjh2aDtcclxufVxyXG5cclxuI2NtZC1ib2R5IGlucHV0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IDA7XHJcbn1cclxuXHJcbi5jbWQtbGluZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gICBDTUQgICAqL1xyXG5cclxuI2Jyb3dzZXItY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG5cclxuI2Jyb3dzZXItaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDQ0NDQ0M7XHJcbiAgICBmb250LXNpemU6IDEuNnZoO1xyXG59XHJcblxyXG4jYnJvd3Nlci1ib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUVFRUU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4gICBcclxuLmJyb3dzZXItam9ycml0IHtcclxuICAgIGZvbnQtc2l6ZTogMTR2aDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuXHJcbiAgICAvKiBObyB0ZXh0IG9yIGltYWdlIHNlbGVjdGlvbiAqL1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtby11c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLmJyb3dzZXItc2VhcmNoLWJveCB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgaGVpZ2h0OiA4dmg7XHJcbn1cclxuXHJcbi5icm93c2VyLXNlYXJjaC1pbnB1dCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4dmg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0dmg7XHJcbiAgICBib3JkZXI6IDAuM3ZoIHNvbGlkIGxpZ2h0Z3JleTtcclxuICAgIGZvbnQtc2l6ZTogMTUwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJyb3dzZXItc2VhcmNoLWlucHV0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IDA7XHJcbn1cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICAgQnJvd3NlciAgICovXHJcblxyXG4jd29yZC1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJBNTc5QTtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIG1hcmdpbi10b3A6IDE0dmg7XHJcbiAgICBtYXJnaW4tbGVmdDogNDB2dztcclxufVxyXG5cclxuI3dvcmQtaGVhZGVyIHtcclxuICAgIHdpZHRoOiA5OS41JTtcclxuICAgIGhlaWdodDogM3ZoO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jd29yZC1ib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNkU2RTY7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi53b3JkLXRvb2xiYXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDh2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUVFRUU7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0RERERERDtcclxufVxyXG5cclxuLndvcmQtcGFnZSB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogNnZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi53b3JkLXBhZ2UtdGV4dCB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogNHZoO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ud29yZC1wYWdlLXRleHQgYSB7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4ud29yZC1wYWdlLXRleHQgYTpob3ZlciB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi53b3JkLXBhZ2UtdGV4dCBpbWcge1xyXG4gICAgd2lkdGg6IDYwJTtcclxufVxyXG5cclxuLndvcmQtcGFnZS10ZXh0IHRleHRhcmVhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICByZXNpemU6IG5vbmU7XHJcbiAgICBmb250LWZhbWlseTogU2Vnb2UgVUk7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4ud29yZC1wYWdlLXRleHQgdGV4dGFyZWE6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogMDtcclxufVxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gICBXb3JkICAgKi9cclxuXHJcbiN0dHQtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAzMHZoO1xyXG4gICAgaGVpZ2h0OiAzMHZoO1xyXG4gICAgbWFyZ2luLXRvcDogNnZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcclxufVxyXG5cclxuI3R0dC1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI3R0dC1ib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxuICAgIC8qIE5vIHRleHQgb3IgaW1hZ2Ugc2VsZWN0aW9uICovXHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1vLXVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4udHR0LXJvdyB7XHJcbiAgICBoZWlnaHQ6IDMzJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbi50dHQtY29sdW1uIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAzMyU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnR0dC1lbmQtc2NyZWVuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMzUwJTtcclxuICAgIGZvbnQtZmFtaWx5OiBTZWdvZSBVSTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIwKTtcclxufVxyXG5cclxuLnR0dC1jb2x1bW4gaW1nIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gVGljIFRhYyBUb2UgICAqL1xyXG5cclxuLmRlc2t0b3AtaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogOHZoO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6IFNlZ29lIFVJO1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggIzAwMDAwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMnZoO1xyXG5cclxuICAgIC8qIE5vIHRleHQgb3IgaW1hZ2Ugc2VsZWN0aW9uICovXHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1vLXVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4uZGVza3RvcC1pY29uIGltZyB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXZoO1xyXG59XHJcblxyXG4uZGVza3RvcC1pY29uIGEge1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZGVza3RvcC1pY29uIHNwYW4ge1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAgIERlc2t0b3AgSWNvbiAgICovXHJcblxyXG4udGFza2Jhci1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgdG8gdG9wLCBcclxuICAgICAgICAjMjQ1RERDLFxyXG4gICAgICAgICMzRjgxREFcclxuICAgICk7XHJcbiAgICB6LWluZGV4OiAyMDA7XHJcbn1cclxuXHJcbi50YXNrYmFyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4udGFza2Jhci13aW5kb3dzLWxvZ28ge1xyXG4gICAgd2lkdGg6IDclOyAgICBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgIHRvIGJvdHRvbSwgXHJcbiAgICAgICAgIzFDOTYxRSwgXHJcbiAgICAgICAgIzJDNjEyOVxyXG4gICAgKTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMEI0MTI2O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzBCNDEyNjtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxLjV2aDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxLjV2aDtcclxuXHJcbiAgICAvKiBObyB0ZXh0IG9yIGltYWdlIHNlbGVjdGlvbiAqL1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtby11c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLnRhc2tiYXItd2luZG93cy1sb2dvOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICB0byB0b3AsIFxyXG4gICAgICAgICMxQzk2MUUsIFxyXG4gICAgICAgICMyQzYxMjlcclxuICAgICk7O1xyXG59XHJcblxyXG4udGFza2Jhci13aW5kb3dzLWxvZ28gaW1nIHtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxufVxyXG5cclxuLnRhc2tiYXItd2luZG93cy1sb2dvIHNwYW4ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6IFNlZ29lIFVJO1xyXG4gICAgZm9udC1zaXplOiAydmg7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbn1cclxuXHJcbi50YXNrYmFyLXRpbWUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6IFNlZ29lIFVJO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxdmg7XHJcblxyXG4gICAgLyogTm8gdGV4dCBvciBpbWFnZSBzZWxlY3Rpb24gKi9cclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICAgVGFza2JhciAgICovXHJcblxyXG4uc3RhcnQtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICB3aWR0aDogMTglO1xyXG4gICAgaGVpZ2h0OiA1MS41dmg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIG1hcmdpbi10b3A6IDQ1dmg7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnN0YXJ0LXRvcHJvdyB7XHJcbiAgICBoZWlnaHQ6IDE1JTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICB0byBib3R0b20sIFxyXG4gICAgICAgICMyNDVEREMsXHJcbiAgICAgICAgIzNGODFEQVxyXG4gICAgKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc3RhcnQtdG9wcm93IGltZyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMXZoO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxdmg7XHJcbn1cclxuXHJcbi5zdGFydC10b3Byb3cgc3BhbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogU2Vnb2UgVUk7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxufVxyXG5cclxuLnN0YXJ0LW1pZHJvdyB7XHJcbiAgICBoZWlnaHQ6IDcwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuXHJcbi5zdGFydC1ib3R0b21yb3cge1xyXG4gICAgaGVpZ2h0OiAxNSU7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgdG8gdG9wLCBcclxuICAgICAgICAjMjQ1RERDLFxyXG4gICAgICAgICMzRjgxREFcclxuICAgICk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5zdGFydC10b3Byb3cgaW1nIHtcclxuICAgIGhlaWdodDogODAlO1xyXG59XHJcblxyXG4uc3RhcnQtbG9nb2ZmLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJ2aDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiBTZWdvZSBVSTtcclxufVxyXG5cclxuLnN0YXJ0LWxvZ29mZi1jb250YWluZXIgaW1nIHtcclxuICAgIGhlaWdodDogNjAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxdmg7IFxyXG59XHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICAgU3RhcnQgICAqL1xyXG5cclxuI2Jzb2QtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDc4RDc7ICAgXHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgei1pbmRleDogMTAwMDsgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmb250LXNpemU6IDR2aDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiBTZWdvZSBVSTtcclxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG59XHJcblxyXG4jYnNvZC10ZXh0LWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNTUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIG1hcmdpbi10b3A6IDUuNSU7XHJcbn1cclxuXHJcbiNic29kLXNtaWxleSB7XHJcbiAgICBmb250LXNpemU6IDE5LjV2aDtcclxufVxyXG5cclxuI3Rlc3Qge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIHotaW5kZXg6IDEwMDE7IFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgb3BhY2l0eTogMC4zO1xyXG59XHJcblxyXG4jYnNvZC1oZWxwLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMXZoO1xyXG4gICAgbWFyZ2luLXRvcDogMnZoO1xyXG59XHJcbiNic29kLWhlbHAtcXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDF2aDtcclxuICAgIHdpZHRoOiAxMXZoO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4jYnNvZC1oZWxwLXFyIGltZyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbiNic29kLWhlbHAtdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDEuOHZoO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG59XHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAgIEJTT0QgICAqLyJdfQ== */";
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
        this.showBsod = false;
        this.currentTimeLeft = 10;
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
        this.startTimer();
      }

      _createClass(HomeComponent, [{
        key: "startTimer",
        value: function startTimer() {
          var _this2 = this;

          this.interval = setInterval(function () {
            if (_this2.currentTimeLeft > 0) {
              _this2.currentTimeLeft--;
            } else {
              _this2.showBsod = true;
            }
          }, 1000);
        }
      }, {
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


    __webpack_exports__["default"] = "* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.container {\r\n    position: absolute;\r\n    top: 0%;\r\n    left: 0%;\r\n    width: 100%;\r\n    height: 100vh;\r\n    background-color: #002E98;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.login-container {\r\n    position: absolute;\r\n    left: 0%;\r\n    width: 100%;\r\n    height: 77vh;\r\n    background-color: #597CDA;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-image: radial-gradient(\r\n        farthest-corner at 40px 40px,\r\n        rgba(255, 255, 255, 0.5) 0%,\r\n        #597CDA 100%\r\n    );\r\n    \r\n    border-width: 0;\r\n    border-top-width: 0.4vh;\r\n    border-bottom-width: 0.4vh;\r\n    border-style: solid;\r\n    -o-border-image: linear-gradient(\r\n        to right, \r\n        white, \r\n        rgba(0, 0, 0, 0)\r\n    ) 1 30%;\r\n       border-image: linear-gradient(\r\n        to right, \r\n        white, \r\n        rgba(0, 0, 0, 0)\r\n    ) 1 30%;\r\n}\r\n\r\n.account-container {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    color: white;\r\n    font-size: 4vh;\r\n    font-family: Segoe UI;\r\n}\r\n\r\n.account-container span {\r\n    margin-left: 3vh;\r\n}\r\n\r\n.avatar {\r\n    height: 15vh;\r\n}\r\n\r\n.avatar img {\r\n    height: 100%;\r\n    border-radius: 10%;\r\n    border: 0.4vh solid lightgrey;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsUUFBUTtJQUNSLFdBQVc7SUFDWCxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCOzs7O0tBSUM7O0lBRUQsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25COzs7O1dBSU87T0FKUDs7OztXQUlPO0FBQ1g7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osY0FBYztJQUNkLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDZCQUE2QjtBQUNqQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDAlO1xyXG4gICAgbGVmdDogMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyRTk4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2dpbi1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNzd2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1OTdDREE7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KFxyXG4gICAgICAgIGZhcnRoZXN0LWNvcm5lciBhdCA0MHB4IDQwcHgsXHJcbiAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDAlLFxyXG4gICAgICAgICM1OTdDREEgMTAwJVxyXG4gICAgKTtcclxuICAgIFxyXG4gICAgYm9yZGVyLXdpZHRoOiAwO1xyXG4gICAgYm9yZGVyLXRvcC13aWR0aDogMC40dmg7XHJcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwLjR2aDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICB0byByaWdodCwgXHJcbiAgICAgICAgd2hpdGUsIFxyXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMClcclxuICAgICkgMSAzMCU7XHJcbn1cclxuXHJcbi5hY2NvdW50LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiA0dmg7XHJcbiAgICBmb250LWZhbWlseTogU2Vnb2UgVUk7XHJcbn1cclxuXHJcbi5hY2NvdW50LWNvbnRhaW5lciBzcGFuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzdmg7XHJcbn1cclxuXHJcbi5hdmF0YXIge1xyXG4gICAgaGVpZ2h0OiAxNXZoO1xyXG59XHJcblxyXG4uYXZhdGFyIGltZyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbiAgICBib3JkZXI6IDAuNHZoIHNvbGlkIGxpZ2h0Z3JleTtcclxufSJdfQ== */";
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
        this.movesMade = 0; // difficulty: number = null;

        this.difficulty = EASY_DIF; // difficulty: number = HARD_DIF;

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
    /*! C:\Users\Jorrit\Documents\GitHub-projects\MyWebsite\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map