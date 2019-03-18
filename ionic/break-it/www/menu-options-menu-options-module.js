(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-options-menu-options-module"],{

/***/ "./src/app/menu-options/menu-options.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/menu-options/menu-options.module.ts ***!
  \*****************************************************/
/*! exports provided: MenuOptionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuOptionsPageModule", function() { return MenuOptionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _menu_options_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu-options.page */ "./src/app/menu-options/menu-options.page.ts");







var routes = [
    {
        path: '',
        component: _menu_options_page__WEBPACK_IMPORTED_MODULE_6__["MenuOptionsPage"]
    }
];
var MenuOptionsPageModule = /** @class */ (function () {
    function MenuOptionsPageModule() {
    }
    MenuOptionsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_menu_options_page__WEBPACK_IMPORTED_MODULE_6__["MenuOptionsPage"]]
        })
    ], MenuOptionsPageModule);
    return MenuOptionsPageModule;
}());



/***/ }),

/***/ "./src/app/menu-options/menu-options.page.html":
/*!*****************************************************!*\
  !*** ./src/app/menu-options/menu-options.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding>\r\n\t<ion-grid text-center>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col>\r\n\t\t\t\t<h1>OPTIONS</h1>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col>\r\n\t\t\t\t<h2>Volume</h2>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col>\r\n\t\t\t\t<h3>Général</h3>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col size=2 offset=5>\r\n\t\t\t\t<ion-item>\r\n\t\t\t\t\t<ion-range min=\"0\" max=\"10\" step=\"1\">\r\n\t\t\t\t\t\t<ion-icon size=\"small\" slot=\"start\" name=\"volume-mute\"></ion-icon>\r\n\t\t\t\t\t\t<ion-icon slot=\"end\" name=\"volume-high\"></ion-icon>\r\n\t\t\t\t\t</ion-range>\r\n\t\t\t\t</ion-item>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col>\r\n\t\t\t\t<h3>Musique</h3>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col size=2 offset=5>\r\n\t\t\t\t<ion-item>\r\n\t\t\t\t\t<ion-range min=\"0\" max=\"10\" step=\"1\">\r\n\t\t\t\t\t\t<ion-icon size=\"small\" slot=\"start\" name=\"musical-note\"></ion-icon>\r\n\t\t\t\t\t\t<ion-icon slot=\"end\" name=\"musical-notes\"></ion-icon>\r\n\t\t\t\t\t</ion-range>\r\n\t\t\t\t</ion-item>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col>\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<ion-button href=\"/home\" color=\"primary\">ANNULER</ion-button>\r\n\t\t\t\t\t<ion-button class=\"appliquer\" href=\"/home\" color=\"primary\">APPLIQUER</ion-button>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t</ion-grid>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/menu-options/menu-options.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/menu-options/menu-options.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUtb3B0aW9ucy9tZW51LW9wdGlvbnMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/menu-options/menu-options.page.ts":
/*!***************************************************!*\
  !*** ./src/app/menu-options/menu-options.page.ts ***!
  \***************************************************/
/*! exports provided: MenuOptionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuOptionsPage", function() { return MenuOptionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuOptionsPage = /** @class */ (function () {
    function MenuOptionsPage() {
    }
    MenuOptionsPage.prototype.ngOnInit = function () {
    };
    MenuOptionsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu-options',
            template: __webpack_require__(/*! ./menu-options.page.html */ "./src/app/menu-options/menu-options.page.html"),
            styles: [__webpack_require__(/*! ./menu-options.page.scss */ "./src/app/menu-options/menu-options.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuOptionsPage);
    return MenuOptionsPage;
}());



/***/ })

}]);
//# sourceMappingURL=menu-options-menu-options-module.js.map