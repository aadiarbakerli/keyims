(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _key_key_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./key/key.component */ "./src/app/key/key.component.ts");
/* harmony import */ var _createuser_createuser_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createuser/createuser.component */ "./src/app/createuser/createuser.component.ts");
/* harmony import */ var _msg_msg_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./msg/msg.component */ "./src/app/msg/msg.component.ts");







var routes = [
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'key',
        component: _key_key_component__WEBPACK_IMPORTED_MODULE_4__["KeyComponent"]
    },
    {
        path: 'msg',
        component: _msg_msg_component__WEBPACK_IMPORTED_MODULE_6__["MsgComponent"]
    },
    {
        path: 'createuser',
        component: _createuser_createuser_component__WEBPACK_IMPORTED_MODULE_5__["CreateuserComponent"]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button{\n\tcolor: \"red\";\n\tfont-weight: 400px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b257XG5cdGNvbG9yOiBcInJlZFwiO1xuXHRmb250LXdlaWdodDogNDAwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button routerLink=\"/createuser\" id = \"create\" routerLinkActive=\"active\">Create Account</button> \n<button routerLink=\"/msg\" routerLinkActive=\"active\">Inbox</button> \n<button routerLink=\"/key\" routerLinkActive=\"active\">Keys </button> \n<button>User</button>\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n<h2>\n\tThe IMS system for keys, by keys.\n</h2>\n</div>\n<div routerLink=\"/\" routerLinkActive=\"active\" ></div>\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'KeyIMS';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _key_key_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./key/key.component */ "./src/app/key/key.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _shared_url_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/url.service */ "./src/app/shared/url.service.ts");
/* harmony import */ var _shared_user_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/user/user.service */ "./src/app/shared/user/user.service.ts");
/* harmony import */ var _createuser_createuser_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./createuser/createuser.component */ "./src/app/createuser/createuser.component.ts");
/* harmony import */ var _key_service_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./key-service.service */ "./src/app/key-service.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _msg_msg_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./msg/msg.component */ "./src/app/msg/msg.component.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _key_key_component__WEBPACK_IMPORTED_MODULE_7__["KeyComponent"],
                _msg_msg_component__WEBPACK_IMPORTED_MODULE_14__["MsgComponent"],
                _createuser_createuser_component__WEBPACK_IMPORTED_MODULE_11__["CreateuserComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            providers: [
                _shared_url_service__WEBPACK_IMPORTED_MODULE_9__["UrlService"],
                _shared_user_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"],
                _key_service_service__WEBPACK_IMPORTED_MODULE_12__["KeyServiceService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/createuser/createuser.component.css":
/*!*****************************************************!*\
  !*** ./src/app/createuser/createuser.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZXVzZXIvY3JlYXRldXNlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/createuser/createuser.component.html":
/*!******************************************************!*\
  !*** ./src/app/createuser/createuser.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"!loggedUser\">\r\n<h3 class = \"h3 text-center\">KeyIMS Account Application Form</h3>\r\n<form #signupForm = \"ngForm\" (ngSubmit) = \"onSubmit()\" #createForm=\"ngForm\">\r\n  <div class=\"form-row\">\r\n    <div class=\"form-group col-md-6\">\r\n      <label for=\"inputEmail\">Email</label>\r\n      <input name = \"email\" type=\"text\" class=\"form-control\" id=\"inputEmail\" placeholder=\"Email\" [(ngModel)]='email' required>\r\n    </div>\r\n    <div class=\"form-group col-md-6\">\r\n      <label for=\"inputPassword\">Password</label>\r\n      <input name = \"password\" type=\"password\" class=\"form-control\" id=\"inputPassword\" placeholder=\"Password\" [(ngModel)]='pswd' required>\r\n\t\t\tScore: {{ checkPassword() }}/4\r\n    </div>\r\n  </div>\r\n  <div class=\"form-row\">\r\n  \t<div class=\"form-group col-md-6\">\r\n    \t<label for=\"inputFirstName\">First Name</label>\r\n    \t<input name = \"firstName\" type=\"text\" class=\"form-control\" id=\"inputFirstName\" placeholder=\"First Name\" [(ngModel)]='firstName' required>\r\n  \t</div>\r\n  \t<div class=\"form-group col-md-6\">\r\n    \t<label for=\"inputLastName\">Last Name</label>\r\n    \t<input name = \"lastName\" type=\"text\" clas\ts=\"form-control\" id=\"inputLastName\" placeholder=\"Last Name\" [(ngModel)]='lastName' required>\r\n  \t</div>\r\n  \r\n\t</div>\r\n\t<div class = text-center>\r\n\t\t<button id = \"submit\" type=\"submit\" [disabled]=\"buttonDisabled || !createForm.form.valid\"  class=\"btn btn-secondary\">Apply for Account</button>\r\n\t</div>\r\n\r\n</form>\r\n</ng-container>"

/***/ }),

/***/ "./src/app/createuser/createuser.component.ts":
/*!****************************************************!*\
  !*** ./src/app/createuser/createuser.component.ts ***!
  \****************************************************/
/*! exports provided: CreateuserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateuserComponent", function() { return CreateuserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/user/user.service */ "./src/app/shared/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var zxcvbn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! zxcvbn */ "../../../../node_modules/zxcvbn/lib/main.js");
/* harmony import */ var zxcvbn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(zxcvbn__WEBPACK_IMPORTED_MODULE_4__);





var CreateuserComponent = /** @class */ (function () {
    function CreateuserComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    CreateuserComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('ngOnInit');
        this.passwordDOM = document.getElementById('passwordfield');
        this.buttonDisabled = true;
        console.log("init of pw checker");
        this.userService.login(null, null).subscribe(function (user) {
            _this.loggedUser = user;
            console.log(user);
        });
    };
    CreateuserComponent.prototype.addEvent = function () {
        this.passwordDOM.addEventListener('onchange', this.checkPassword);
        console.log("added event listener to pw");
    };
    CreateuserComponent.prototype.checkPassword = function () {
        // && this.pswd.length >= 8
        if (this.pswd != null) {
            var result = zxcvbn__WEBPACK_IMPORTED_MODULE_4__(this.pswd).score;
            console.log("pw score: " + result);
            if (result >= 2) {
                this.buttonDisabled = false;
            }
            else {
                this.buttonDisabled = true;
            }
            console.log(this.buttonDisabled);
            return result;
        }
        return 0;
    };
    //todo test if actually logs in later
    CreateuserComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log("Posting...");
        var name = this.firstName + ' ' + this.lastName;
        this.userService.createUser(name, this.pswd, this.email).subscribe(function (user) {
            _this.loggedUser = user;
            console.log("logged user: " + _this.loggedUser);
            console.log('createUser');
            console.log(user);
            document.getElementById("create").hidden = true;
            _this.router.navigate(['/key']);
        });
    };
    CreateuserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-createuser',
            template: __webpack_require__(/*! ./createuser.component.html */ "./src/app/createuser/createuser.component.html"),
            styles: [__webpack_require__(/*! ./createuser.component.css */ "./src/app/createuser/createuser.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CreateuserComponent);
    return CreateuserComponent;
}());



/***/ }),

/***/ "./src/app/key-service.service.ts":
/*!****************************************!*\
  !*** ./src/app/key-service.service.ts ***!
  \****************************************/
/*! exports provided: KeyServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyServiceService", function() { return KeyServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var KeyServiceService = /** @class */ (function () {
    function KeyServiceService() {
    }
    KeyServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], KeyServiceService);
    return KeyServiceService;
}());



/***/ }),

/***/ "./src/app/key/key.component.css":
/*!***************************************!*\
  !*** ./src/app/key/key.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#keydet{\n\tposition: static;\n\tright: 20px;\n\ttop: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva2V5L2tleS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsaUJBQWlCO0NBQ2pCLFlBQVk7Q0FDWixVQUFVO0NBQ1YiLCJmaWxlIjoic3JjL2FwcC9rZXkva2V5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIja2V5ZGV0e1xuXHRwb3NpdGlvbjogc3RhdGljO1xuXHRyaWdodDogMjBweDtcblx0dG9wOiAyMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/key/key.component.html":
/*!****************************************!*\
  !*** ./src/app/key/key.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "Public Keys: <br>\n<ul id=\"keylst\">\n\n</ul>\n\nYour Keys: <br>\n<ul id=\"keylstp\">\n\n</ul>\n\n<button id=\"getKey\" (click)=\"getKey()\">Get Keys</button><br><br>\nCreate Key:\n<div id=\"keydet\">\n<img src=\"\" alt=\"Key Image\" id=\"imgdisp\" height=\"250\" width=\"250\"><br>\nID: <span id=\"keyid\"></span><br>\nDescription: <input type=\"text\" id=\"keydesc\"><br>\n<span id=\"matpass\">Material: </span><input type=\"text\" id=\"keymat\"><br>\nType: <input type=\"text\" id=\"keytype\"><br>\nQty: <input type=\"number\" id=\"keyqty\"><br> \nPublic: <select id=\"keypub\">\n<option value=\"true\">True</option>\n<option value=\"false\">False</option>\n</select><br>\nImage: <input type=\"file\" id=\"keyimg\"><br>\n<button id=\"sub\" (click)=\"submit()\">Submit</button>\n<button id=\"clr\" (click)=\"clear()\">Clear</button>\n<button disabled=\"true\" id=\"del\" (click)=\"delete()\">Delete</button>\n</div>"

/***/ }),

/***/ "./src/app/key/key.component.ts":
/*!**************************************!*\
  !*** ./src/app/key/key.component.ts ***!
  \**************************************/
/*! exports provided: KeyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyComponent", function() { return KeyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_shared_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/user/user.service */ "./src/app/shared/user/user.service.ts");





var KeyComponent = /** @class */ (function () {
    function KeyComponent(http, eventManager, userService) {
        this.http = http;
        this.eventManager = eventManager;
        this.userService = userService;
    }
    KeyComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (document.getElementById('logout').innerHTML != null) {
            console.log(document.getElementById('logout'));
            this.curruser = JSON.parse(document.getElementById('logout').innerHTML);
            console.log(this.curruser);
        }
        else {
            this.userService.login(null, null).subscribe(function (user) {
                _this.curruser = user;
                console.log(_this.curruser);
            });
        }
    };
    KeyComponent.prototype.getKey = function () {
        var _this = this;
        document.getElementById('getKey').disabled = true;
        this.keylist = document.getElementById('keylst');
        while (this.keylist.hasChildNodes()) {
            this.keylist.removeChild(this.keylist.childNodes[0]);
        }
        if (document.getElementById('logout').innerHTML.length > 10) {
            this.curruser = JSON.parse(document.getElementById('logout').innerHTML);
        }
        if (this.curruser != null && this.curruser.keys != null) {
            var keylistp = document.getElementById('keylstp');
            while (keylistp.hasChildNodes()) {
                keylistp.removeChild(keylistp.childNodes[0]);
            }
            var keysp = this.curruser.keys;
            var _loop_1 = function (i) {
                var list = document.createElement('li');
                list.innerHTML = keysp[i].id + ': ' + keysp[i].desc + '<br> Type: ' + keysp[i].type +
                    '<br> Material: ' + keysp[i].material + '<br> Qty: ' + keysp[i].quantity +
                    '<br> Public: ' + keysp[i].pub;
                list.value = keysp[i].id;
                this_1.eventManager.addEventListener(list, 'click', this_1.showInfop);
                this_1.eventManager.addEventListener(list, 'mouseenter', function () { return list.style.backgroundColor = 'red'; });
                this_1.eventManager.addEventListener(list, 'mouseleave', function () { return list.style.backgroundColor = 'pink'; });
                keylistp.appendChild(list);
            };
            var this_1 = this;
            for (var i = 0; i < keysp.length; i++) {
                _loop_1(i);
            }
        }
        this.http.get('/keyims/keyserv')
            .subscribe(function (data) {
            _this.keys = data;
            var cheat = document.createElement('p');
            cheat.id = 'cheat';
            cheat.style.display = 'none';
            cheat.innerHTML = JSON.stringify(_this.keys);
            _this.keylist.appendChild(cheat);
            var _loop_2 = function (i) {
                var list = document.createElement('li');
                list.innerHTML = _this.keys[i].id + ': ' + _this.keys[i].desc + '<br> Type: ' +
                    _this.keys[i].type + '<br> Material: ' + _this.keys[i].material + '<br> Qty: ' +
                    _this.keys[i].quantity + '<br> Public: ' + _this.keys[i].pub;
                list.value = _this.keys[i].id;
                _this.eventManager.addEventListener(list, 'click', _this.showInfo);
                _this.eventManager.addEventListener(list, 'mouseenter', function () { return list.style.backgroundColor = 'blue'; });
                _this.eventManager.addEventListener(list, 'mouseleave', function () { return list.style.backgroundColor = 'lightblue'; });
                _this.keylist.appendChild(list);
            };
            for (var i = 0; i < _this.keys.length; i++) {
                _loop_2(i);
            }
            console.log('complete');
            document.getElementById('getKey').disabled = false;
        });
    };
    KeyComponent.prototype.delete = function () {
        var _this = this;
        document.getElementById('sub').disabled = true;
        document.getElementById('del').disabled = true;
        var keyid = document.getElementById('keyid').innerHTML;
        console.log('Deleting..');
        this.http.delete('/keyims/keyserv/' + keyid).
            subscribe(function (data) { }, function () {
            console.log('complete');
            _this.clear();
            _this.getKey();
            document.getElementById('sub').disabled = false;
        });
    };
    KeyComponent.prototype.clear = function () {
        document.getElementById('keyid').innerHTML = '';
        document.getElementById('keymat').value = '';
        document.getElementById('keydesc').value = '';
        document.getElementById('keyqty').value = '';
        document.getElementById('keypub').value = '';
        document.getElementById('keytype').value = '';
        document.getElementById('del').disabled = true;
        var keyimg = document.getElementById('imgdisp').src = '';
    };
    KeyComponent.prototype.showInfo = function (e) {
        this.curruser = JSON.parse(document.getElementById('logout').innerHTML);
        console.log(this.curruser.lvl);
        if (this.curruser != null && this.curruser.lvl >= 1) {
            document.getElementById('del').disabled = false;
        }
        var cheat = document.getElementById('cheat');
        this.keys = JSON.parse(cheat.innerHTML);
        console.log(cheat);
        console.log(this.keys);
        var keyid = document.getElementById('keyid');
        var matpass = document.getElementById('matpass');
        var keymat = document.getElementById('keymat');
        var keydesc = document.getElementById('keydesc');
        var keyqty = document.getElementById('keyqty');
        var keypub = document.getElementById('keypub');
        var keytype = document.getElementById('keytype');
        var keyimg = document.getElementById('imgdisp');
        var key = this.keys[0];
        for (var x = 0; x < this.keys.length; x++) {
            if (this.keys[x].id === e.target.value) {
                key = this.keys[x];
            }
        }
        console.log(key);
        if (key.type.toLowerCase() === 'password') {
            matpass.innerHTML = 'Password: ';
        }
        else {
            matpass.innerHTML = 'Material: ';
        }
        keyid.innerHTML = e.target.value;
        keymat.value = key.material;
        keydesc.value = key.desc;
        keyqty.value = key.quantity;
        keytype.value = key.type;
        keyimg.src = key.image;
        if (String(key.pub) === 'true' || String(key.pub) === 'on') {
            keypub.selectedIndex = 0;
        }
        else {
            keypub.selectedIndex = 1;
        }
    };
    KeyComponent.prototype.submit = function () {
        var _this = this;
        document.getElementById('sub').disabled = true;
        document.getElementById('del').disabled = true;
        var keyid = document.getElementById('keyid').innerHTML;
        var keymat = document.getElementById('keymat').value;
        var keydesc = document.getElementById('keydesc').value;
        var keyqty = document.getElementById('keyqty').value;
        var keypub = document.getElementById('keypub')
            .options[document.getElementById('keypub').selectedIndex].value;
        var keytype = document.getElementById('keytype').value;
        var keyimg = document.getElementById('keyimg').files[0];
        var imgurl = document.getElementById('imgdisp').src;
        if (keyid !== '') {
            console.log('Posting...');
            this.http.post('/keyims/keyserv', '{ "id": "' + keyid + '", "type": "' + keytype + '", "desc": "'
                + keydesc + '", "material": "' + keymat + '", "pub": "' + keypub + '", "image": "'
                + imgurl + '", "quantity": "' + keyqty + '" }').
                subscribe(function (data) { console.log(data); }, function () {
                console.log('complete');
                if (keyimg != null) {
                    var f = new FormData();
                    f.append('file', keyimg);
                    f.append('keyid', keyid);
                    _this.http.post('/keyims/file', f).subscribe(function (response) { return (document.getElementById('sub').disabled = false); }, function () {
                        document.getElementById('sub').disabled = false;
                    });
                    _this.clear();
                    _this.getKey();
                }
                else {
                    document.getElementById('sub').disabled = false;
                    if (_this.curruser != null && _this.curruser.lvl >= 1) {
                        document.getElementById('del').disabled = false;
                    }
                    _this.clear();
                    _this.getKey();
                }
            });
        }
        else {
            console.log('Pootis...');
            this.http.put('/keyims/keyserv', '{ "id": "' + 0 + '", "type": "' + keytype + '", "desc": "'
                + keydesc + '", "material": "' + keymat + '", "pub": "' + keypub + '", "image": "'
                + imgurl + '", "quantity": "' + keyqty + '" }').
                subscribe(function (data) { console.log(data); }, function () {
                console.log('complete');
                if (keyimg != null) {
                    var f = new FormData();
                    f.append('file', keyimg);
                    f.append('keyid', keyid);
                    _this.http.post('/keyims/file', f).subscribe(function (response) { return (document.getElementById('sub').disabled = false); }, function () {
                        document.getElementById('sub').disabled = false;
                    });
                    _this.clear();
                    _this.getKey();
                }
                else {
                    document.getElementById('sub').disabled = false;
                }
                if (_this.curruser != null && _this.curruser.lvl >= 1) {
                    document.getElementById('del').disabled = false;
                }
                _this.clear();
                _this.getKey();
            });
        }
    };
    KeyComponent.prototype.showInfop = function (e) {
        this.curruser = JSON.parse(document.getElementById('logout').innerHTML);
        document.getElementById('del').disabled = false;
        var keyid = document.getElementById('keyid');
        var matpass = document.getElementById('matpass');
        var keymat = document.getElementById('keymat');
        var keydesc = document.getElementById('keydesc');
        var keyqty = document.getElementById('keyqty');
        var keypub = document.getElementById('keypub');
        var keytype = document.getElementById('keytype');
        var keyimg = document.getElementById('imgdisp');
        var key = this.curruser.keys[0];
        for (var x = 0; x < this.curruser.keys.length; x++) {
            if (this.curruser.keys[x].id === e.target.value) {
                key = this.curruser.keys[x];
            }
        }
        console.log(key);
        if (key.type.toLowerCase() === 'password') {
            matpass.innerHTML = 'Password: ';
        }
        else {
            matpass.innerHTML = 'Material: ';
        }
        keyid.innerHTML = e.target.value;
        keymat.value = key.material;
        keydesc.value = key.desc;
        keyqty.value = key.quantity;
        keytype.value = key.type;
        keyimg.src = key.image;
        if (String(key.pub) === 'true' || String(key.pub) === 'on') {
            keypub.selectedIndex = 0;
        }
        else {
            keypub.selectedIndex = 1;
        }
    };
    KeyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-key',
            template: __webpack_require__(/*! ./key.component.html */ "./src/app/key/key.component.html"),
            styles: [__webpack_require__(/*! ./key.component.css */ "./src/app/key/key.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["EventManager"], src_app_shared_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], KeyComponent);
    return KeyComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"!loggedUser; else display\">\n<div>\n    <h1>Login</h1>\n    <label>Email: </label> <input type=\"text\" [(ngModel)]=\"username\"><br>\n    <label>Password: </label> <input type=\"password\" [(ngModel)]=\"password\" (keyup.enter)=\"login()\"><br>\n    <button class=\"btn btn-primary\" (click)=\"login()\">Login</button>\n</div>\n</ng-container>\n\n<ng-template #display>\n<div>\n    <span id=\"welcome\">Welcome {{getUser().name}}</span> <br>\n    <br>\n    <!-- Edit button to route to key component? logout function works so was just test-->\n    <button class=\"btn btn-dasnger\" (click)=\"logout()\">Logout</button>\n</div>\n\n</ng-template>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/user/user.service */ "./src/app/shared/user/user.service.ts");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService) {
        this.userService = userService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.login(null, null).subscribe(function (user) {
            _this.loggedUser = user;
            console.log('ngOnInit');
            console.log(user);
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        console.log(this.username + ' ' + this.password);
        this.userService.login(this.username, this.password).subscribe(function (user) {
            _this.loggedUser = user;
            console.log(_this.loggedUser);
            console.log('login');
            console.log(user);
        });
    };
    LoginComponent.prototype.logout = function () {
        this.userService.logout().subscribe();
        this.loggedUser = null;
        this.username = null;
        this.password = null;
    };
    LoginComponent.prototype.getUser = function () {
        return this.userService.getUser();
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/msg/msg.component.css":
/*!***************************************!*\
  !*** ./src/app/msg/msg.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#msg {\n    border: 2px solid black;\n    background-color: white;\n    width: 275px;\n    padding: 20px;\n}\n\n#inbox {\n    background-color: white;\n}\n\n#message {\n    width: 250px;\n    height: 200px;\n}\n\n#msgList {\n    background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXNnL21zZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsY0FBYztDQUNqQjs7QUFFRDtJQUNJLHdCQUF3QjtDQUMzQjs7QUFFRDtJQUNJLGFBQWE7SUFDYixjQUFjO0NBQ2pCOztBQUVEO0lBQ0ksd0JBQXdCO0NBQzNCIiwiZmlsZSI6InNyYy9hcHAvbXNnL21zZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21zZyB7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDI3NXB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbiNpbmJveCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbiNtZXNzYWdlIHtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbn1cblxuI21zZ0xpc3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/msg/msg.component.html":
/*!****************************************!*\
  !*** ./src/app/msg/msg.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Inbox</h2>\n<br>\n<div>\n    <table id = \"inbox\" class=\"table\">\n        <tr>\n            <th>From</th>\n            <th>Message</th>\n        </tr>\n    </table>\n</div>\n<br>\n<button id = \"getMsg\" (click) = \"getMsg()\">check inbox</button>\n<br>\n\n<br>\n<button id = \"Compose\" (click) = \"newMsg()\">Send a Message</button>\n<br>\n<dialog id = \"msg\">\n    Sending to: <select id=\"uList\">\n\t</select><br>\n    <!-- <input type = \"text\" id = \"send\" [(ngModel)] = \"sendTo\"> --><br><br>\n    Message:<br>\n    <input type = \"text\" id = \"message\" [(ngModel)] = \"detail\" (keyup.enter)=\"sendMsg()\"> <br><br>\n    <button id = \"send\" (click)=\"sendMsg()\">Send</button>\n    <button id = \"cancel\" (click)=\"cancel()\">Cancel</button>\n</dialog>\n\n<dialog id = \"reply\">\n    Message:<br>\n    <input type = \"text\" id = \"message\" [(ngModel)] = \"detail\" (keyup.enter)=\"replyMsg()\"> <br><br>\n    <button id = \"send\" (click)=\"replyMsg()\">Send</button>\n    <button id = \"cancel\" (click)=\"cancel()\">Cancel</button>\n</dialog>"

/***/ }),

/***/ "./src/app/msg/msg.component.ts":
/*!**************************************!*\
  !*** ./src/app/msg/msg.component.ts ***!
  \**************************************/
/*! exports provided: MsgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsgComponent", function() { return MsgComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_shared_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/user/user.service */ "./src/app/shared/user/user.service.ts");




var MsgComponent = /** @class */ (function () {
    function MsgComponent(userService, http) {
        this.userService = userService;
        this.http = http;
    }
    MsgComponent.prototype.ngOnInit = function () {
    };
    MsgComponent.prototype.cancel = function () {
        var dial = document.getElementById('msg');
        dial.style.display = 'none';
        dial = document.getElementById('reply');
        dial.style.display = 'none';
    };
    MsgComponent.prototype.newMsg = function () {
        var _this = this;
        var dial = document.getElementById('msg');
        dial.style.display = 'block';
        var usersL = document.getElementById('uList');
        this.http.get('/keyims/userserv').subscribe(function (users) {
            _this.uList = users;
            for (var i = 0; i < _this.uList.length; i++) {
                var opt = document.createElement('option');
                opt.innerHTML = _this.uList[i].id + ': ' + _this.uList[i].name;
                opt.value = _this.uList[i].id;
                usersL.appendChild(opt);
            }
        });
    };
    MsgComponent.prototype.getMsg = function () {
        var _this = this;
        document.getElementById('getMsg').disabled = true;
        this.msglist = document.getElementById('inbox');
        this.http.get('/keyims/msg').subscribe(function (data) {
            _this.msgs = data;
            if (data) {
                var tr_1;
                var td_1;
                console.log('msgs length: ' + _this.msgs.length);
                var _loop_1 = function (i) {
                    // console.log("refreshing?");
                    console.log('i: ' + i);
                    console.log(_this.msgs);
                    if (_this.userService.getUser().id === _this.msgs[i].receiver) {
                        console.log(_this.msgs[i]);
                        _this.http.get('/keyims/userserv').subscribe(function (users) {
                            _this.uList = users;
                            for (var j = 0; j < _this.uList.length; j++) {
                                if (_this.uList[j].id === _this.msgs[i].sender) {
                                    tr_1 = document.createElement('tr');
                                    console.log("testing tr log" + tr_1);
                                    var name_1 = _this.uList[j].name;
                                    td_1 = document.createElement('td');
                                    td_1.innerHTML = name_1;
                                    tr_1.appendChild(td_1);
                                    td_1 = document.createElement('td');
                                    td_1.innerHTML = _this.msgs[i].content;
                                    tr_1.appendChild(td_1);
                                    td_1 = document.createElement('td');
                                    var btn = document.createElement('button');
                                    tr_1.appendChild(td_1);
                                    td_1.appendChild(btn);
                                    btn.innerHTML = 'Reply';
                                    btn.id = 'view' + _this.msgs[i].sender;
                                    btn.addEventListener('click', _this.replyMsg);
                                    console.log("testing tr log 2" + tr_1);
                                    _this.msglist.appendChild(tr_1);
                                    _this.msglist.appendChild(document.createTextNode("test"));
                                }
                            }
                        });
                    }
                };
                for (var i = 0; i < _this.msgs.length; i++) {
                    _loop_1(i);
                }
            }
        });
    };
    MsgComponent.prototype.sendMsg = function () {
        // send msg
        console.log('sendMsg');
        this.sendFrom = this.userService.getUser();
        var usersL = document.getElementById('uList');
        var uid = usersL.options[usersL.selectedIndex].value;
        console.log('sendFrom: ' + this.sendFrom.id + ' sendTo: ' + uid + ' detail: ' + this.detail);
        this.http.post('/keyims/msg', this.sendFrom.id + '&' + uid + '&' + this.detail).subscribe(function (msg) {
        });
        var dial = document.getElementById('msg');
        dial.style.display = 'none';
    };
    MsgComponent.prototype.replyMsg = function () {
        // reply msg
        console.log('replyMsg');
        var dial = document.getElementById('reply');
        dial.style.display = 'block';
        var btn = event.target;
        console.log(btn);
    };
    MsgComponent.prototype.getUser = function () {
        // Get current user
        return this.userService.getUser();
    };
    MsgComponent.prototype.logout = function () {
        this.userService.logout().subscribe();
    };
    MsgComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-msg',
            template: __webpack_require__(/*! ./msg.component.html */ "./src/app/msg/msg.component.html"),
            styles: [__webpack_require__(/*! ./msg.component.css */ "./src/app/msg/msg.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MsgComponent);
    return MsgComponent;
}());



/***/ }),

/***/ "./src/app/shared/url.service.ts":
/*!***************************************!*\
  !*** ./src/app/shared/url.service.ts ***!
  \***************************************/
/*! exports provided: UrlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlService", function() { return UrlService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UrlService = /** @class */ (function () {
    function UrlService() {
    }
    UrlService_1 = UrlService;
    UrlService.prototype.getURL = function () {
        return UrlService_1.MONOLITH_URL;
    };
    var UrlService_1;
    UrlService.MONOLITH_URL = 'http://localhost:8080/keyims';
    UrlService = UrlService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UrlService);
    return UrlService;
}());



/***/ }),

/***/ "./src/app/shared/user/user.service.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/user/user.service.ts ***!
  \*********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _url_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../url.service */ "./src/app/shared/url.service.ts");





var UserService = /** @class */ (function () {
    function UserService(urlSource, http) {
        this.urlSource = urlSource;
        this.http = http;
        this.appUrl = this.urlSource.getURL();
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
    }
    UserService.prototype.login = function (username, password) {
        var _this = this;
        if (username && password) {
            var body = "{\"email\": \"" + username + "\", \"pswd\": \"" + password + "\"}";
            console.log(body);
            return this.http.post(this.appUrl + '/login', body, { headers: this.headers, withCredentials: true })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resp) {
                var user = resp;
                if (user) {
                    _this.current = user;
                    console.log('userservice login');
                    console.log(_this.current);
                }
                return user;
            }));
        }
        else { // check if logged in
            return this.http.get(this.appUrl + '/login', { withCredentials: true })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resp) {
                var user = resp;
                if (user) {
                    _this.current = user;
                }
                return user;
            }));
        }
    };
    UserService.prototype.logout = function () {
        var _this = this;
        return this.http.delete(this.appUrl + '/login', { withCredentials: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (success) {
            _this.current = null;
            return success;
        }));
    };
    UserService.prototype.createUser = function (name, pswd, email) {
        var _this = this;
        var body = "{\"name\": \"" + name + "\", \"email\": \"" + email + "\", \"pswd\": \"" + pswd + "\"}";
        console.log("log body" + body);
        return this.http.post(this.appUrl + '/createuser', body, { headers: this.headers, withCredentials: false }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resp) {
            var user = resp;
            console.log("piped user: " + user);
            if (user) {
                _this.current = user;
                console.log('userservice createuser');
                console.log(_this.current);
            }
            console.log("user: " + user);
            return user;
        }));
    };
    UserService.prototype.getUser = function () {
        return this.current;
    };
    UserService.prototype.isUser = function () {
        return (this.current !== undefined && this.current !== null);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_url_service__WEBPACK_IMPORTED_MODULE_4__["UrlService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Colin\Downloads\keyims-warren.chan (1)\keyims-warren.chan\src\main\webapp\keyims\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map