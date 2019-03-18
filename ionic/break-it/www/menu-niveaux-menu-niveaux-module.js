(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-niveaux-menu-niveaux-module"],{

/***/ "./src/app/menu-niveaux/menu-niveaux.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/menu-niveaux/menu-niveaux.module.ts ***!
  \*****************************************************/
/*! exports provided: MenuNiveauxPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuNiveauxPageModule", function() { return MenuNiveauxPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _menu_niveaux_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu-niveaux.page */ "./src/app/menu-niveaux/menu-niveaux.page.ts");







var routes = [
    {
        path: '',
        component: _menu_niveaux_page__WEBPACK_IMPORTED_MODULE_6__["MenuNiveauxPage"]
    }
];
var MenuNiveauxPageModule = /** @class */ (function () {
    function MenuNiveauxPageModule() {
    }
    MenuNiveauxPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_menu_niveaux_page__WEBPACK_IMPORTED_MODULE_6__["MenuNiveauxPage"]]
        })
    ], MenuNiveauxPageModule);
    return MenuNiveauxPageModule;
}());



/***/ }),

/***/ "./src/app/menu-niveaux/menu-niveaux.page.html":
/*!*****************************************************!*\
  !*** ./src/app/menu-niveaux/menu-niveaux.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding>\r\n  <ion-grid>\r\n  <ion-row>\r\n    <ion-col>\r\n      <div text-center>\r\n        <h1>Sélectionnez un niveau</h1>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row justify-content-center>\r\n    <ion-col size=\"auto\">\r\n      <div text-center>\r\n        <ion-button href=\"/game\" color=\"primary\">1</ion-button>\r\n      </div>\r\n    </ion-col>\r\n\t<ion-col size=\"auto\">\r\n      <div text-center>\r\n        <ion-button href=\"/game\" color=\"primary\">2</ion-button>\r\n      </div>\r\n    </ion-col>\r\n\t<ion-col size=\"auto\">\r\n      <div text-center>\r\n        <ion-button href=\"/game\" color=\"primary\">3</ion-button>\r\n      </div>\r\n    </ion-col>\r\n\t<ion-col size=\"auto\">\r\n      <div text-center>\r\n        <ion-button href=\"/game\" color=\"primary\">4</ion-button>\r\n      </div>\r\n    </ion-col>\r\n\t<ion-col size=\"auto\">\r\n      <div text-center>\r\n        <ion-button href=\"/game\" color=\"medium\">5</ion-button>\r\n      </div>\r\n    </ion-col>\r\n\t<ion-col size=\"auto\">\r\n      <div text-center>\r\n        <ion-button href=\"/game\" color=\"medium\">6</ion-button>\r\n      </div>\r\n    </ion-col>\r\n\t<ion-col size=\"auto\">\r\n      <div text-center>\r\n        <ion-button href=\"/game\" color=\"medium\">7</ion-button>\r\n      </div>\r\n    </ion-col>\r\n\t<ion-col size=\"auto\">\r\n      <div text-center>\r\n        <ion-button href=\"/game\" color=\"medium\">8</ion-button>\r\n      </div>\r\n    </ion-col>\r\n\t<ion-col size=\"auto\">\r\n      <div text-center>\r\n        <ion-button href=\"/game\" color=\"medium\">9</ion-button>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row justify-content-center>\r\n    <ion-col size=\"auto\">\r\n      <div text-center>\r\n        <ion-button href=\"/game\" color=\"medium\">10</ion-button>\r\n      </div>\r\n    </ion-col>\r\n\t<ion-col size=\"auto\">\r\n      <div text-center>\r\n        <ion-button href=\"/game\" color=\"medium\">11</ion-button>\r\n      </div>\r\n    </ion-col>\r\n\t<ion-col size=\"auto\">\r\n      <div text-center>\r\n        <ion-button href=\"/game\" color=\"medium\">12</ion-button>\r\n      </div>\r\n    </ion-col>\r\n\t<ion-col size=\"auto\">\r\n      <div text-center>\r\n        <ion-button href=\"/game\" color=\"medium\">13</ion-button>\r\n      </div>\r\n    </ion-col>\r\n\t<ion-col size=\"auto\">\r\n      <div text-center>\r\n        <ion-button href=\"/game\" color=\"medium\">14</ion-button>\r\n      </div>\r\n    </ion-col>\r\n\t<ion-col size=\"auto\">\r\n      <div text-center>\r\n        <ion-button href=\"/game\" color=\"medium\">15</ion-button>\r\n      </div>\r\n    </ion-col>\r\n\t<ion-col size=\"auto\">\r\n      <div text-center>\r\n        <ion-button href=\"/game\" color=\"medium\">16</ion-button>\r\n      </div>\r\n    </ion-col>\r\n\t<ion-col size=\"auto\">\r\n      <div text-center>\r\n        <ion-button href=\"/game\" color=\"medium\">17</ion-button>\r\n      </div>\r\n    </ion-col>\r\n\t<ion-col size=\"auto\">\r\n      <div text-center>\r\n        <ion-button href=\"/game\" color=\"medium\">18</ion-button>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col>\r\n      <div text-center>\r\n        <ion-button class=\"back\" href=\"/home\" color=\"primary\">MENU PRINCIPAL</ion-button>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/menu-niveaux/menu-niveaux.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/menu-niveaux/menu-niveaux.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-button {\n  min-width: 100px;\n  height: 100px; }\n\n.back {\n  height: 50px;\n  width: 200px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS1uaXZlYXV4L0U6XFxyZWN1cHJlcG9cXGxwX2Nyb3NzcGxhdGZvcm1fYnJlYWstaXRcXGlvbmljXFxicmVhay1pdC9zcmNcXGFwcFxcbWVudS1uaXZlYXV4XFxtZW51LW5pdmVhdXgucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZ0JBQWdCO0VBQ2hCLGFBQWEsRUFBQTs7QUFFZDtFQUNDLFlBQVk7RUFDWixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tZW51LW5pdmVhdXgvbWVudS1uaXZlYXV4LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1idXR0b24ge1xyXG5cdG1pbi13aWR0aDogMTAwcHg7XHJcblx0aGVpZ2h0OiAxMDBweDtcclxufVxyXG4uYmFjayB7XHJcblx0aGVpZ2h0OiA1MHB4O1xyXG5cdHdpZHRoOiAyMDBweDsgLy9hIG1vZGlmaWVyXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/menu-niveaux/menu-niveaux.page.ts":
/*!***************************************************!*\
  !*** ./src/app/menu-niveaux/menu-niveaux.page.ts ***!
  \***************************************************/
/*! exports provided: MenuNiveauxPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuNiveauxPage", function() { return MenuNiveauxPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuNiveauxPage = /** @class */ (function () {
    function MenuNiveauxPage() {
    }
    MenuNiveauxPage.prototype.ngOnInit = function () {
    };
    MenuNiveauxPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu-niveaux',
            template: __webpack_require__(/*! ./menu-niveaux.page.html */ "./src/app/menu-niveaux/menu-niveaux.page.html"),
            styles: [__webpack_require__(/*! ./menu-niveaux.page.scss */ "./src/app/menu-niveaux/menu-niveaux.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuNiveauxPage);
    return MenuNiveauxPage;
}());



/***/ })

}]);
//# sourceMappingURL=menu-niveaux-menu-niveaux-module.js.map