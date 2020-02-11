(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/home/home.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/home/home.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">  \r\n    <!-- Start -->\r\n    <div class=\"start-container\" *ngIf=\"showingStart\">\r\n        <div class=\"start-toprow\"> \r\n            <img src=\"../../../assets/avatar.jpg\" alt=\"Avater\"/>\r\n            <span> Jorrit Schepers </span>\r\n        </div>\r\n        <div class=\"start-midrow\">\r\n        </div> \r\n        <div class=\"start-bottomrow\">\r\n            <div class=\"start-logoff-container\">\r\n                <img src=\"../../../assets/icons/logoff-icon.jpg\" alt=\"Log off button\" (click)=\"logout()\">\r\n                <span> Log Off </span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Picture -->\r\n    <div class=\"picture-container\" *ngIf=\"pictureId != 0\" (click)=\"pictureId = 0\">\r\n        <img src=\"../../../assets/my-photos/{{pictureId}}.jpg\" alt=\"picture of Jorrit Schepers\">\r\n    </div>\r\n\r\n    <!-- Tic Tac Toe -->\r\n    <div [style.zIndex]=\"tttZIndex\" class=\"tab-container\" id=\"ttt-container\" (click)=\"moveTabToFront(TTT_ID)\" *ngIf=\"showingTicTacToe\" cdkDrag>\r\n        <div class=\"tab-header\" id=\"ttt-header\" cdkDragHandle>\r\n            <img src=\"../../../assets/ttt/cross/mm.png\" alt=\"Tic Tac Toe Icon\">\r\n            <span>Tic Tac Toe</span>\r\n            <img src=\"../../../assets/icons/close-icon-white.png\" alt=\"close button\" (click)=\"closeTab(TTT_ID)\">\r\n        </div>\r\n        <div class=\"tab-body\" id=\"ttt-body\">\r\n            <div class=\"ttt-end-screen\" *ngIf=\"ttt.playerWon != null\" (click)=\"ttt.resetGame()\">\r\n                <span *ngIf=\"ttt.playerWon == 'cross'\" style=\"color: rgb(0, 200, 0)\">You won!</span>\r\n                <span *ngIf=\"ttt.playerWon == 'circle'\" style=\"color: red\">You lost</span>\r\n                <span *ngIf=\"ttt.playerWon == 'draw'\" style=\"color: grey\">Draw!</span>\r\n            </div>\r\n            <div class=\"ttt-row\" *ngFor=\"let row of ttt.fieldOfPaths; let y = index\">\r\n                <div class=\"ttt-column\" *ngFor=\"let tile of row; let x = index\">\r\n                    <img src=\"{{ttt.fieldOfPaths[y][x]}}\" (click)=\"ttt.clickedOn(x, y)\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Word -->\r\n    <div [style.zIndex]=\"wordZIndex\" class=\"tab-container\" id=\"word-container\" *ngIf=\"showingWord\" (click)=\"moveTabToFront(WORD_ID)\" cdkDrag>\r\n        <div class=\"tab-header\" id=\"word-header\" cdkDragHandle>\r\n            <img src=\"../../../assets/icons/save-icon-whitepng.png\" alt=\"Save icon\">\r\n            <span>Fancy wordpad</span>\r\n            <img src=\"../../../assets/icons/close-icon-white.png\" alt=\"close button\" (click)=\"closeTab(WORD_ID)\">\r\n        </div>\r\n        <div class=\"tab-body\" id=\"word-body\">\r\n            <div class=\"word-toolbar\"></div>\r\n            <div class=\"word-page\">\r\n                <div class=\"word-page-text\">\r\n                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nihil in repellat cupiditate nostrum beatae quis enim? Ipsum temporibus quo reprehenderit non sunt perspiciatis exercitationem ut et assumenda numquam! Natus dolorem excepturi aliquid tenetur dolores, autem, eligendi minima vitae mollitia a eveniet enim quidem iure incidunt fugiat aut qui molestias neque quas sit, reiciendis veniam impedit. Tenetur laboriosam expedita ipsam?\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- CMD -->\r\n    <div [style.zIndex]=\"cmdZIndex\" class=\"tab-container\" id=\"cmd-container\" (click)=\"moveTabToFront(CMD_ID)\" *ngIf=\"showingCmd\" cdkDrag>\r\n        <div class=\"tab-header\" id=\"cmd-header\" cdkDragHandle>\r\n            <img src=\"../../../assets/icons/cmd-icon-white.png\" alt=\"cmd icon\">\r\n            <span>A great interface!</span>\r\n            <img src=\"../../../assets/icons/close-icon-white.png\" alt=\"close button\" (click)=\"closeTab(CMD_ID)\">\r\n        </div>\r\n        <div class=\"tab-body\" id=\"cmd-body\">\r\n            <span>C:\\Users\\JorritSchepers>_</span><br>\r\n            <br>\r\n            <span>C:\\Users\\JorritSchepers>dir</span><br>\r\n            <br>\r\n            <span>Directory of C:\\Users\\JorritSchepers</span><br>\r\n            <br>\r\n            <a routerLink=\"/about-me\" routerLinkActive=\"active\"><span>07/01/2020 23:31 &nbsp; &lt;DIR&gt; &nbsp;&nbsp;&nbsp; about-me</span></a><br>\r\n            <a routerLink=\"/my-projects\" routerLinkActive=\"active\"><span>10/01/2020 19:01 &nbsp; &lt;DIR&gt; &nbsp;&nbsp;&nbsp; my-projects</span></a><br>\r\n            <a routerLink=\"/contact-me\" routerLinkActive=\"active\"><span>15/01/2020 03:54 &nbsp; &lt;DIR&gt; &nbsp;&nbsp;&nbsp; contact-me</span></a><br>\r\n        </div>\r\n    </div>\r\n    \r\n    <!-- Browser -->\r\n    <div [style.zIndex]=\"browserZIndex\" class=\"tab-container\" id=\"browser-container\" (click)=\"moveTabToFront(BROWSER_ID)\" *ngIf=\"showingBrowser\" cdkDrag>\r\n        <div class=\"tab-header\" id=\"browser-header\" cdkDragHandle>\r\n            <img src=\"https://handiggoed.nl/ontwikkelsite/wp-content/uploads/2015/12/IETS-400x400.jpg\" alt=\"browser icon\">\r\n            <span>The little less dark web</span>\r\n            <img src=\"../../../assets/icons/close-icon-white.png\" alt=\"close button\" (click)=\"closeTab(BROWSER_ID)\">\r\n        </div>\r\n        <div class=\"tab-body\" id=\"browser-body\">\r\n            <div class=\"browser-search-box\">\r\n                <form [formGroup]=\"searchForm\" (ngSubmit)=\"searchWord(searchForm.value)\">\r\n                    <input id=\"word\" class=\"browser-search-input\" type=\"text\" formControlName=\"word\" placeholder=\"Search for anything!\" required>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Desktop Icons -->\r\n    <div class=\"desktop-icon\" (click)=\"openPicture(1)\">\r\n        <img src=\"../../../assets/my-photos/1.jpg\">\r\n        <span>Jorrit.jpg</span>\r\n    </div>\r\n\r\n    <div class=\"desktop-icon\" (click)=\"openPicture(2)\">\r\n        <img src=\"../../../assets/my-photos/2.jpg\">\r\n        <span>Jorrit in de bergen.jpg</span>\r\n    </div>\r\n\r\n    <div class=\"desktop-icon\" (click)=\"openTab(TTT_ID)\">\r\n        <img src=\"../../../assets/ttt/cross/mm.png\">\r\n        <span>tic-tac-toe.exe</span>\r\n    </div>\r\n\r\n    <div class=\"desktop-icon\" (click)=\"openTab(CMD_ID)\">\r\n        <img src=\"../../../assets/icons/cmd-icon-white.png\">\r\n        <span>cmd.exe</span>\r\n    </div>\r\n\r\n    <div class=\"desktop-icon\" (click)=\"openTab(WORD_ID)\">\r\n        <img src=\"../../../assets/icons/save-icon-whitepng.png\">\r\n        <span>fancy word pad.exe</span>\r\n    </div>\r\n\r\n    <div class=\"desktop-icon\" (click)=\"openTab(BROWSER_ID)\">\r\n        <img src=\"https://handiggoed.nl/ontwikkelsite/wp-content/uploads/2015/12/IETS-400x400.jpg\">\r\n        <span>Browser.exe</span>\r\n    </div>\r\n\r\n    <!-- Taskbar -->\r\n    <div class=\"taskbar-container\">\r\n        <div class=\"taskbar-windows-logo\" (click)=\"showingStart = !showingStart\">\r\n            <img src=\"../../../assets/icons/windows-logo-icon.png\" alt=\"WindowsXP logo\">\r\n            <span><i><b>start</b></i></span>\r\n        </div>\r\n        <div class=\"taskbar\"></div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/login/login.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/login/login.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"login-container\">\r\n        <div class=\"account-container\">\r\n            <div class=\"avatar\">\r\n                <a routerLink=\"/home\" routerLinkActive=\"active\">\r\n                    <img src=\"../../../assets/avatar.jpg\" alt=\"Photo of Jorrit Schepers\">\r\n                </a>\r\n            </div>\r\n            <span>Jorrit Schepers</span>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
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

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
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
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/home/home.component */ "./src/app/component/home/home.component.ts");
/* harmony import */ var _component_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/login/login.component */ "./src/app/component/login/login.component.ts");





const routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: _component_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'home', component: _component_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Jorrit\'s Website!';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/home/home.component */ "./src/app/component/home/home.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _component_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/login/login.component */ "./src/app/component/login/login.component.ts");









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _component_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
            _component_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ],
        providers: [],
        bootstrap: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
        ]
    })
], AppModule);



/***/ }),

/***/ "./src/app/component/home/home.component.css":
/*!***************************************************!*\
  !*** ./src/app/component/home/home.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    overflow: hidden;\r\n}\r\n\r\n::-moz-selection {\r\n    background-color: white;\r\n    color: black\r\n}\r\n\r\n::selection {\r\n    background-color: white;\r\n    color: black\r\n}\r\n\r\na {\r\n    color: #cccccc;\r\n    text-decoration: none;\r\n}\r\n\r\na:hover {\r\n    font-size: 1.9vh;\r\n    color: white;\r\n}\r\n\r\na:visited {\r\n    color: white;\r\n    text-decoration: none;\r\n}\r\n\r\n.container {\r\n    position: absolute;\r\n    top: 0%;\r\n    left: 0%;\r\n    width: 100%;\r\n    height: 100vh;\r\n    background-color: black;\r\n    background-image: url('windows-xp-wallpaper.jpg');\r\n}\r\n\r\n.tab-container {\r\n    position: absolute;\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n}\r\n\r\n.tab-header {\r\n    width: 100%;\r\n    height: 3vh;\r\n    display: flex;\r\n    align-items: center;\r\n    font-family: Segoe UI;\r\n    font-size: 1.6vh;\r\n}\r\n\r\n.tab-header span {\r\n    width: 100%;\r\n}\r\n\r\n.tab-header img {\r\n    height: 2vh;\r\n    width: 2vh;\r\n    margin-left: 0.4vh;\r\n    margin-right: 0.4vh;\r\n}\r\n\r\n.tab-body {\r\n    width: 100%;\r\n    height: 100%;\r\n    font-family: Segoe UI;\r\n}\r\n\r\n/*================================================================================================================   General   */\r\n\r\n.picture-container {\r\n    display: flex;\r\n    align-items: center;\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0, 0, 0, 0.70);\r\n    z-index: 10;\r\n}\r\n\r\n.picture-container img {\r\n    margin: auto;\r\n    opacity: 100%;\r\n    height: 100%;\r\n    z-index: 11;\r\n\r\n    /* No text or image selection */\r\n    -webkit-user-select: none;\r\n    -khtml-user-select: none;\r\n    -moz-user-select: none;\r\n    -o-user-select: none;\r\n}\r\n\r\n/*=============================================================================================================   Picture   */\r\n\r\n#cmd-container {\r\n    width: 40%;\r\n    height: 40%;\r\n    margin-left: 6vw;\r\n    margin-top: 24vh;\r\n}\r\n\r\n#cmd-header {\r\n    background-color: #2B2B2B;\r\n    color: white;\r\n}\r\n\r\n#cmd-body {\r\n    background-color: #0C0C0C;\r\n    color: #cccccc;\r\n    font-family: Courier New;\r\n}\r\n\r\n/*=============================================================================================================   CMD   */\r\n\r\n#browser-container {\r\n    width: 80%;\r\n    height: 80%;\r\n    margin-left: 10%;\r\n    margin-top: 5%;\r\n}\r\n\r\n#browser-header {\r\n    background-color: #CCCCCC;\r\n    font-size: 1.6vh;\r\n}\r\n\r\n#browser-body {\r\n    background-color: #EEEEEE;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.browser-search-box {\r\n    width: 40%;\r\n    height: 8vh;\r\n}\r\n\r\n.browser-search-input {\r\n    background-color: white;\r\n    width: 100%;\r\n    height: 8vh;\r\n    border-radius: 4vh;\r\n    border: 0.3vh solid lightgrey;\r\n    font-size: 150%;\r\n    text-align: center;\r\n}\r\n\r\n.browser-search-input:focus {\r\n    outline: 0;\r\n}\r\n\r\n/*=============================================================================================================   Browser   */\r\n\r\n#word-container {\r\n    background-color: #2A579A;\r\n    width: 40%;\r\n    height: 80%;\r\n    margin-top: 14vh;\r\n    margin-left: 40vw;\r\n}\r\n\r\n#word-header {\r\n    width: 99.5%;\r\n    height: 3vh;\r\n    color: white;\r\n}\r\n\r\n#word-body {\r\n    background-color: #E6E6E6;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.word-toolbar {\r\n    width: 100%;\r\n    height: 8vh;\r\n    background-color: #EEEEEE;\r\n    border-bottom: 2px solid #DDDDDD;\r\n}\r\n\r\n.word-page {\r\n    width: 80%;\r\n    height: 100%;\r\n    margin-top: 6vh;\r\n    background-color: whitesmoke;\r\n}\r\n\r\n.word-page-text {\r\n    width: 80%;\r\n    margin: auto;\r\n    margin-top: 4vh;\r\n}\r\n\r\n/*=============================================================================================================   Word   */\r\n\r\n#ttt-container {\r\n    width: 30vh;\r\n    height: 30vh;\r\n    margin-top: 6vh;\r\n    background-color: dodgerblue;\r\n}\r\n\r\n#ttt-header {\r\n    background-color: dodgerblue;\r\n    color: white;\r\n}\r\n\r\n#ttt-body {\r\n    background-color: white;\r\n\r\n    /* No text or image selection */\r\n    -webkit-user-select: none;\r\n    -khtml-user-select: none;\r\n    -moz-user-select: none;\r\n    -o-user-select: none;\r\n}\r\n\r\n.ttt-row {\r\n    height: 33%;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.ttt-column {\r\n    height: 100%;\r\n    width: 33%;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.ttt-end-screen {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 350%;\r\n    font-family: Segoe UI;\r\n    font-weight: bold;\r\n    background-color: rgba(0, 0, 0, 0.20);\r\n}\r\n\r\n.ttt-column img {\r\n    height: 100%;\r\n    margin: 0;\r\n}\r\n\r\n/*============================================================================================================= Tic Tac Toe   */\r\n\r\n.desktop-icon {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 8vh;\r\n    color: white;\r\n    font-family: Segoe UI;\r\n    text-shadow: 1px 1px #000000;\r\n    text-align: center;\r\n    margin: 2vh;\r\n\r\n    /* No text or image selection */\r\n    -webkit-user-select: none;\r\n    -khtml-user-select: none;\r\n    -moz-user-select: none;\r\n    -o-user-select: none;\r\n}\r\n\r\n.desktop-icon img {\r\n    width: 60%;\r\n    margin-bottom: 1vh;\r\n}\r\n\r\n/*=============================================================================================================   Desktop Icon   */\r\n\r\n.taskbar-container {\r\n    position: absolute;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 4%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    background: linear-gradient(\r\n        to top, \r\n        #245DDC,\r\n        #3F81DA\r\n    );\r\n    z-index: 200;\r\n}\r\n\r\n.taskbar {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.taskbar-windows-logo {\r\n    width: 7%;    \r\n    display: flex;\r\n    align-items: center;\r\n    background: linear-gradient(\r\n        to bottom, \r\n        #1C961E, \r\n        #2C6129\r\n    );\r\n    height: 100%;\r\n    border-top: 2px solid #0B4126;\r\n    border-right: 2px solid #0B4126;\r\n    border-top-right-radius: 1.5vh;\r\n    border-bottom-right-radius: 1.5vh;\r\n\r\n    /* No text or image selection */\r\n    -webkit-user-select: none;\r\n    -khtml-user-select: none;\r\n    -moz-user-select: none;\r\n    -o-user-select: none;\r\n}\r\n\r\n.taskbar-windows-logo:hover {\r\n    background: linear-gradient(\r\n        to top, \r\n        #1C961E, \r\n        #2C6129\r\n    );;\r\n}\r\n\r\n.taskbar-windows-logo img {\r\n    height: 80%;\r\n    margin-left: 10%;\r\n}\r\n\r\n.taskbar-windows-logo span {\r\n    color: white;\r\n    font-family: Segoe UI;\r\n    font-size: 2vh;\r\n    margin-left: 5%;\r\n}\r\n\r\n/*=============================================================================================================   Taskbar   */\r\n\r\n.start-container {\r\n    background-color: whitesmoke;\r\n    width: 18%;\r\n    height: 51.5vh;\r\n    position: absolute;\r\n    margin-left: 0;\r\n    margin-top: 45vh;\r\n    z-index: 100;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.start-toprow {\r\n    height: 15%;\r\n    background: linear-gradient(\r\n        to bottom, \r\n        #245DDC,\r\n        #3F81DA\r\n    );\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.start-toprow img {\r\n    margin-left: 1vh;\r\n    margin-right: 1vh;\r\n}\r\n\r\n.start-toprow span {\r\n    color: white;\r\n    font-family: Segoe UI;\r\n    font-size: larger;\r\n}\r\n\r\n.start-midrow {\r\n    height: 70%;\r\n    background-color: whitesmoke;\r\n}\r\n\r\n.start-bottomrow {\r\n    height: 15%;\r\n    background: linear-gradient(\r\n        to top, \r\n        #245DDC,\r\n        #3F81DA\r\n    );\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n}\r\n\r\n.start-toprow img {\r\n    height: 80%;\r\n}\r\n\r\n.start-logoff-container {\r\n    height: 80%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-right: 2vh;\r\n    color: white;\r\n    font-family: Segoe UI;\r\n}\r\n\r\n.start-logoff-container img {\r\n    height: 60%;\r\n    margin-right: 1vh; \r\n}\r\n\r\n/*===============================================================================================================   Start   */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCO0FBQ0o7O0FBSEE7SUFDSSx1QkFBdUI7SUFDdkI7QUFDSjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFFBQVE7SUFDUixXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixpREFBK0Q7QUFDbkU7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCOztBQUNBLGdJQUFnSTs7QUFFaEk7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHFDQUFxQztJQUNyQyxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWixXQUFXOztJQUVYLCtCQUErQjtJQUMvQix5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0QixvQkFBb0I7QUFDeEI7O0FBQ0EsNkhBQTZIOztBQUU3SDtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCx3QkFBd0I7QUFDNUI7O0FBQ0EseUhBQXlIOztBQUV6SDtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFDQSw2SEFBNkg7O0FBRTdIO0lBQ0kseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osZUFBZTtJQUNmLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFDQSwwSEFBMEg7O0FBRTFIO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx1QkFBdUI7O0lBRXZCLCtCQUErQjtJQUMvQix5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osU0FBUztBQUNiOztBQUNBLCtIQUErSDs7QUFFL0g7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQiw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLFdBQVc7O0lBRVgsK0JBQStCO0lBQy9CLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBQ0Esa0lBQWtJOztBQUVsSTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLFVBQVU7SUFDVixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25COzs7O0tBQXdGO0lBQ3hGLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25COzs7O0tBQTRGO0lBQzVGLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsK0JBQStCO0lBQy9CLDhCQUE4QjtJQUM5QixpQ0FBaUM7O0lBRWpDLCtCQUErQjtJQUMvQix5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSTs7OztLQUF5RjtBQUM3Rjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUNBLDZIQUE2SDs7QUFFN0g7SUFDSSw0QkFBNEI7SUFDNUIsVUFBVTtJQUNWLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVc7SUFDWDs7OztLQUEyRjtJQUMzRixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLFdBQVc7SUFDWDs7OztLQUF3RjtJQUN4RixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBQ0EsNkhBQTZIIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbjo6c2VsZWN0aW9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6IGJsYWNrXHJcbn1cclxuXHJcbmEge1xyXG4gICAgY29sb3I6ICNjY2NjY2M7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmE6aG92ZXIge1xyXG4gICAgZm9udC1zaXplOiAxLjl2aDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuYTp2aXNpdGVkIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDAlO1xyXG4gICAgbGVmdDogMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvd2luZG93cy14cC13YWxscGFwZXIuanBnKTtcclxufVxyXG5cclxuLnRhYi1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnRhYi1oZWFkZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDN2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IFNlZ29lIFVJO1xyXG4gICAgZm9udC1zaXplOiAxLjZ2aDtcclxufVxyXG5cclxuLnRhYi1oZWFkZXIgc3BhbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRhYi1oZWFkZXIgaW1nIHtcclxuICAgIGhlaWdodDogMnZoO1xyXG4gICAgd2lkdGg6IDJ2aDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjR2aDtcclxuICAgIG1hcmdpbi1yaWdodDogMC40dmg7XHJcbn1cclxuXHJcbi50YWItYm9keSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZvbnQtZmFtaWx5OiBTZWdvZSBVSTtcclxufVxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gICBHZW5lcmFsICAgKi9cclxuXHJcbi5waWN0dXJlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcwKTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG4ucGljdHVyZS1jb250YWluZXIgaW1nIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG9wYWNpdHk6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAxMTtcclxuXHJcbiAgICAvKiBObyB0ZXh0IG9yIGltYWdlIHNlbGVjdGlvbiAqL1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtby11c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gICBQaWN0dXJlICAgKi9cclxuXHJcbiNjbWQtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBoZWlnaHQ6IDQwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA2dnc7XHJcbiAgICBtYXJnaW4tdG9wOiAyNHZoO1xyXG59XHJcblxyXG4jY21kLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkIyQjJCO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jY21kLWJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBDMEMwQztcclxuICAgIGNvbG9yOiAjY2NjY2NjO1xyXG4gICAgZm9udC1mYW1pbHk6IENvdXJpZXIgTmV3O1xyXG59XHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAgIENNRCAgICovXHJcblxyXG4jYnJvd3Nlci1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcblxyXG4jYnJvd3Nlci1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NDQ0NDQztcclxuICAgIGZvbnQtc2l6ZTogMS42dmg7XHJcbn1cclxuXHJcbiNicm93c2VyLWJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5icm93c2VyLXNlYXJjaC1ib3gge1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGhlaWdodDogOHZoO1xyXG59XHJcblxyXG4uYnJvd3Nlci1zZWFyY2gtaW5wdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogOHZoO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHZoO1xyXG4gICAgYm9yZGVyOiAwLjN2aCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgICBmb250LXNpemU6IDE1MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5icm93c2VyLXNlYXJjaC1pbnB1dDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG59XHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAgIEJyb3dzZXIgICAqL1xyXG5cclxuI3dvcmQtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyQTU3OUE7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxNHZoO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwdnc7XHJcbn1cclxuXHJcbiN3b3JkLWhlYWRlciB7XHJcbiAgICB3aWR0aDogOTkuNSU7XHJcbiAgICBoZWlnaHQ6IDN2aDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI3dvcmQtYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTZFNkU2O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ud29yZC10b29sYmFyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4dmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNEREREREQ7XHJcbn1cclxuXHJcbi53b3JkLXBhZ2Uge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDZ2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuXHJcbi53b3JkLXBhZ2UtdGV4dCB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogNHZoO1xyXG59XHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAgIFdvcmQgICAqL1xyXG5cclxuI3R0dC1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDMwdmg7XHJcbiAgICBoZWlnaHQ6IDMwdmg7XHJcbiAgICBtYXJnaW4tdG9wOiA2dmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkb2RnZXJibHVlO1xyXG59XHJcblxyXG4jdHR0LWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkb2RnZXJibHVlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jdHR0LWJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblxyXG4gICAgLyogTm8gdGV4dCBvciBpbWFnZSBzZWxlY3Rpb24gKi9cclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi50dHQtcm93IHtcclxuICAgIGhlaWdodDogMzMlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLnR0dC1jb2x1bW4ge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDMzJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4udHR0LWVuZC1zY3JlZW4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAzNTAlO1xyXG4gICAgZm9udC1mYW1pbHk6IFNlZ29lIFVJO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjApO1xyXG59XHJcblxyXG4udHR0LWNvbHVtbiBpbWcge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBUaWMgVGFjIFRvZSAgICovXHJcblxyXG4uZGVza3RvcC1pY29uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA4dmg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogU2Vnb2UgVUk7XHJcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAjMDAwMDAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAydmg7XHJcblxyXG4gICAgLyogTm8gdGV4dCBvciBpbWFnZSBzZWxlY3Rpb24gKi9cclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi5kZXNrdG9wLWljb24gaW1nIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxdmg7XHJcbn1cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICAgRGVza3RvcCBJY29uICAgKi9cclxuXHJcbi50YXNrYmFyLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICB0byB0b3AsIFxyXG4gICAgICAgICMyNDVEREMsXHJcbiAgICAgICAgIzNGODFEQVxyXG4gICAgKTtcclxuICAgIHotaW5kZXg6IDIwMDtcclxufVxyXG5cclxuLnRhc2tiYXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi50YXNrYmFyLXdpbmRvd3MtbG9nbyB7XHJcbiAgICB3aWR0aDogNyU7ICAgIFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgdG8gYm90dG9tLCBcclxuICAgICAgICAjMUM5NjFFLCBcclxuICAgICAgICAjMkM2MTI5XHJcbiAgICApO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMwQjQxMjY7XHJcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjMEI0MTI2O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEuNXZoO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEuNXZoO1xyXG5cclxuICAgIC8qIE5vIHRleHQgb3IgaW1hZ2Ugc2VsZWN0aW9uICovXHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1vLXVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4udGFza2Jhci13aW5kb3dzLWxvZ286aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgIHRvIHRvcCwgXHJcbiAgICAgICAgIzFDOTYxRSwgXHJcbiAgICAgICAgIzJDNjEyOVxyXG4gICAgKTs7XHJcbn1cclxuXHJcbi50YXNrYmFyLXdpbmRvd3MtbG9nbyBpbWcge1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG59XHJcblxyXG4udGFza2Jhci13aW5kb3dzLWxvZ28gc3BhbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogU2Vnb2UgVUk7XHJcbiAgICBmb250LXNpemU6IDJ2aDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxufVxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gICBUYXNrYmFyICAgKi9cclxuXHJcbi5zdGFydC1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIHdpZHRoOiAxOCU7XHJcbiAgICBoZWlnaHQ6IDUxLjV2aDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgbWFyZ2luLXRvcDogNDV2aDtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uc3RhcnQtdG9wcm93IHtcclxuICAgIGhlaWdodDogMTUlO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgIHRvIGJvdHRvbSwgXHJcbiAgICAgICAgIzI0NUREQyxcclxuICAgICAgICAjM0Y4MURBXHJcbiAgICApO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zdGFydC10b3Byb3cgaW1nIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxdmg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDF2aDtcclxufVxyXG5cclxuLnN0YXJ0LXRvcHJvdyBzcGFuIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiBTZWdvZSBVSTtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG59XHJcblxyXG4uc3RhcnQtbWlkcm93IHtcclxuICAgIGhlaWdodDogNzAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG5cclxuLnN0YXJ0LWJvdHRvbXJvdyB7XHJcbiAgICBoZWlnaHQ6IDE1JTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICB0byB0b3AsIFxyXG4gICAgICAgICMyNDVEREMsXHJcbiAgICAgICAgIzNGODFEQVxyXG4gICAgKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuLnN0YXJ0LXRvcHJvdyBpbWcge1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbn1cclxuXHJcbi5zdGFydC1sb2dvZmYtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogMnZoO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6IFNlZ29lIFVJO1xyXG59XHJcblxyXG4uc3RhcnQtbG9nb2ZmLWNvbnRhaW5lciBpbWcge1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDF2aDsgXHJcbn1cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gICBTdGFydCAgICovIl19 */");

/***/ }),

/***/ "./src/app/component/home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/component/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _model_ttt_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/ttt.model */ "./src/app/model/ttt.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let HomeComponent = class HomeComponent {
    constructor(titleService, formBuilder) {
        this.titleService = titleService;
        this.formBuilder = formBuilder;
        this.CMD_ID = 1;
        this.WORD_ID = 2;
        this.TTT_ID = 3;
        this.BROWSER_ID = 4;
        this.pictureId = 0;
        this.showingTicTacToe = false;
        this.showingWord = false;
        this.showingCmd = false;
        this.showingBrowser = false;
        this.showingStart = false;
        this.pageZIndexes = [this.TTT_ID, this.WORD_ID, this.CMD_ID, this.BROWSER_ID];
        this.wordZIndex = 1;
        this.cmdZIndex = 1;
        this.tttZIndex = 1;
        this.browserZIndex = 1;
        this.ttt = new _model_ttt_model__WEBPACK_IMPORTED_MODULE_3__["TTTModel"]();
        this.titleService.setTitle("Jorrit's Website | Home");
        this.searchForm = this.formBuilder.group({
            word: ''
        });
    }
    moveTabToFront(id) {
        this.showingStart = false;
        this.pageZIndexes.splice(this.getCurrentIndex(id), 1);
        this.pageZIndexes.push(id);
        this.updateAllIndexes();
    }
    updateAllIndexes() {
        this.cmdZIndex = this.getCurrentIndex(this.CMD_ID) + 1;
        this.wordZIndex = this.getCurrentIndex(this.WORD_ID) + 1;
        this.tttZIndex = this.getCurrentIndex(this.TTT_ID) + 1;
        this.browserZIndex = this.getCurrentIndex(this.BROWSER_ID) + 1;
    }
    openTab(id) {
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
    closeTab(id) {
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
    getCurrentIndex(id) {
        for (let i = 0; i < this.pageZIndexes.length; i++) {
            if (this.pageZIndexes[i] == id)
                return i;
        }
        return -1;
    }
    searchWord(formValue) {
        this.currentSearchWordUrl = "https://www.google.com/search?q=" + formValue.word;
        window.open(this.currentSearchWordUrl);
    }
    logout() {
        window.location.pathname = '/login';
    }
    openPicture(id) {
        this.showingStart = false;
        this.pictureId = id;
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/component/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/component/login/login.component.css":
/*!*****************************************************!*\
  !*** ./src/app/component/login/login.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.container {\r\n    position: absolute;\r\n    top: 0%;\r\n    left: 0%;\r\n    width: 100%;\r\n    height: 100vh;\r\n    background-color: #002E98;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.login-container {\r\n    position: absolute;\r\n    left: 0%;\r\n    width: 100%;\r\n    height: 77vh;\r\n    background-color: #597CDA;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-image: radial-gradient(\r\n        farthest-corner at 40px 40px,\r\n        rgba(255, 255, 255, 0.5) 0%,\r\n        #597CDA 100%\r\n    );\r\n    \r\n    border-width: 0;\r\n    border-top-width: 0.4vh;\r\n    border-bottom-width: 0.4vh;\r\n    border-style: solid;\r\n    -o-border-image: linear-gradient(\r\n        to right, \r\n        white, \r\n        rgba(0, 0, 0, 0)\r\n    ) 1 30%;\r\n       border-image: linear-gradient(\r\n        to right, \r\n        white, \r\n        rgba(0, 0, 0, 0)\r\n    ) 1 30%;\r\n}\r\n\r\n.account-container {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    color: white;\r\n    font-size: 4vh;\r\n    font-family: Segoe UI;\r\n}\r\n\r\n.account-container span {\r\n    margin-left: 3vh;\r\n}\r\n\r\n.avatar {\r\n    height: 15vh;\r\n}\r\n\r\n.avatar img {\r\n    height: 100%;\r\n    border-radius: 10%;\r\n    border: 0.4vh solid lightgrey;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsUUFBUTtJQUNSLFdBQVc7SUFDWCxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCOzs7O0tBSUM7O0lBRUQsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25COzs7O1dBSU87T0FKUDs7OztXQUlPO0FBQ1g7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osY0FBYztJQUNkLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDZCQUE2QjtBQUNqQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDAlO1xyXG4gICAgbGVmdDogMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyRTk4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2dpbi1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNzd2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1OTdDREE7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KFxyXG4gICAgICAgIGZhcnRoZXN0LWNvcm5lciBhdCA0MHB4IDQwcHgsXHJcbiAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDAlLFxyXG4gICAgICAgICM1OTdDREEgMTAwJVxyXG4gICAgKTtcclxuICAgIFxyXG4gICAgYm9yZGVyLXdpZHRoOiAwO1xyXG4gICAgYm9yZGVyLXRvcC13aWR0aDogMC40dmg7XHJcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwLjR2aDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICB0byByaWdodCwgXHJcbiAgICAgICAgd2hpdGUsIFxyXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMClcclxuICAgICkgMSAzMCU7XHJcbn1cclxuXHJcbi5hY2NvdW50LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiA0dmg7XHJcbiAgICBmb250LWZhbWlseTogU2Vnb2UgVUk7XHJcbn1cclxuXHJcbi5hY2NvdW50LWNvbnRhaW5lciBzcGFuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzdmg7XHJcbn1cclxuXHJcbi5hdmF0YXIge1xyXG4gICAgaGVpZ2h0OiAxNXZoO1xyXG59XHJcblxyXG4uYXZhdGFyIGltZyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbiAgICBib3JkZXI6IDAuNHZoIHNvbGlkIGxpZ2h0Z3JleTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/component/login/login.component.ts":
/*!****************************************************!*\
  !*** ./src/app/component/login/login.component.ts ***!
  \****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let LoginComponent = class LoginComponent {
    constructor(titleService) {
        this.titleService = titleService;
        this.titleService.setTitle("Jorrit's Website | Login");
    }
    changePath(path) {
        window.location.pathname = path;
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/component/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/model/ttt.model.ts":
/*!************************************!*\
  !*** ./src/app/model/ttt.model.ts ***!
  \************************************/
/*! exports provided: TTTModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TTTModel", function() { return TTTModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const EMPTY_PATH = "../../../assets/ttt/empty/";
const CROSS_PATH = "../../../assets/ttt/cross/";
const CIRCLE_PATH = "../../../assets/ttt/circle/";
class TTTModel {
    constructor() {
        this.playerWon = null;
        this.movesMade = 0;
        this.turn = "cross";
        this.initField();
    }
    initField() {
        this.fieldOfPaths = [
            [EMPTY_PATH + "tl.png", EMPTY_PATH + "tm.png", EMPTY_PATH + "tr.png"],
            [EMPTY_PATH + "ml.png", EMPTY_PATH + "mm.png", EMPTY_PATH + "mr.png"],
            [EMPTY_PATH + "bl.png", EMPTY_PATH + "bm.png", EMPTY_PATH + "br.png"]
        ];
        this.field = [
            ["empty", "empty", "empty"],
            ["empty", "empty", "empty"],
            ["empty", "empty", "empty"]
        ];
    }
    clickedOn(x, y) {
        if (this.field[y][x] != "empty")
            return;
        this.movesMade++;
        this.field[y][x] = this.turn;
        let imagePath = this.getImagePath(x, y);
        this.fieldOfPaths[y][x] = imagePath;
        this.checkWinCondition();
        if (this.movesMade == 9 && this.playerWon == null) {
            this.playerWon = "draw";
            return;
        }
        if (this.playerWon == null)
            this.algo();
    }
    getImagePath(x, y) {
        let firstChar = null;
        if (y == 0)
            firstChar = "t";
        if (y == 1)
            firstChar = "m";
        if (y == 2)
            firstChar = "b";
        let secondChar = null;
        if (x == 0)
            secondChar = "l";
        if (x == 1)
            secondChar = "m";
        if (x == 2)
            secondChar = "r";
        if (this.turn == "cross") {
            this.turn = "circle";
            return CROSS_PATH + firstChar + secondChar + ".png";
        }
        if (this.turn == "circle") {
            this.turn = "cross";
            return CIRCLE_PATH + firstChar + secondChar + ".png";
        }
    }
    checkWinCondition() {
        let players = ["cross", "circle"];
        for (let p = 0; p < players.length; p++) {
            for (let i = 0; i < this.field[0].length; i++) {
                let n = 0;
                // Check if player won horizontally
                for (let j = 0; j < this.field.length; j++) {
                    if (this.field[i][j] == players[p])
                        n++;
                }
                if (n == 3) {
                    this.playerWon = players[p];
                    return;
                }
                n = 0;
                // Check if player won vertically
                for (let j = 0; j < this.field.length; j++) {
                    if (this.field[j][i] == players[p])
                        n++;
                }
                if (n == 3) {
                    this.playerWon = players[p];
                    return;
                }
            }
            // Check if player won diagonally
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
    resetGame() {
        this.playerWon = null;
        this.turn = "cross";
        this.movesMade = 0;
        this.initField();
    }
    algo() {
        while (this.turn == "circle")
            this.AlgoChooseRandom();
    }
    AlgoChooseRandom() {
        let randomY = this.getRandomInt(this.field.length);
        let randomX = this.getRandomInt(this.field[0].length);
        if (this.field[randomY][randomX] != "empty")
            return;
        else
            this.clickedOn(randomX, randomY);
    }
    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jorri\Documents\GitHub\MyWebsite\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);