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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_directives/alert.component.html":
/*!**************************************************!*\
  !*** ./src/app/_directives/alert.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>"

/***/ }),

/***/ "./src/app/_directives/alert.component.ts":
/*!************************************************!*\
  !*** ./src/app/_directives/alert.component.ts ***!
  \************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.alertService.getMessage().subscribe(function (message) {
            _this.message = message;
        });
    };
    AlertComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/_directives/alert.component.html")
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/_directives/index.ts":
/*!**************************************!*\
  !*** ./src/app/_directives/index.ts ***!
  \**************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.component */ "./src/app/_directives/alert.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return _alert_component__WEBPACK_IMPORTED_MODULE_0__["AlertComponent"]; });




/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_guards/index.ts":
/*!**********************************!*\
  !*** ./src/app/_guards/index.ts ***!
  \**********************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });




/***/ }),

/***/ "./src/app/_helpers/error.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/_helpers/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this.authenticationService.logout();
                location.reload(true);
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/_helpers/fake-backend.ts":
/*!******************************************!*\
  !*** ./src/app/_helpers/fake-backend.ts ***!
  \******************************************/
/*! exports provided: FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return FakeBackendInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return fakeBackendProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FakeBackendInterceptor = /** @class */ (function () {
    function FakeBackendInterceptor() {
    }
    FakeBackendInterceptor.prototype.intercept = function (request, next) {
        // array in local storage for registered users
        var users = JSON.parse(localStorage.getItem('users')) || [];
        // wrap in delayed observable to simulate server api call
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function () {
            // authenticate
            if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
                // find if any user matches login credentials
                var filteredUsers = users.filter(function (user) {
                    return user.username === request.body.username && user.password === request.body.password;
                });
                if (filteredUsers.length) {
                    // if login details are valid return 200 OK with user details and fake jwt token
                    var user = filteredUsers[0];
                    var body = {
                        id: user.id,
                        username: user.username,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        token: 'fake-jwt-token'
                    };
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: body }));
                }
                else {
                    // else return 400 bad request
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ error: { message: 'Username or password is incorrect' } });
                }
            }
            // get users
            if (request.url.endsWith('/users') && request.method === 'GET') {
                // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: users }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ error: { message: 'Unauthorised' } });
                }
            }
            // get user by id
            if (request.url.match(/\/users\/\d+$/) && request.method === 'GET') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    var urlParts = request.url.split('/');
                    var id_1 = parseInt(urlParts[urlParts.length - 1]);
                    var matchedUsers = users.filter(function (user) { return user.id === id_1; });
                    var user = matchedUsers.length ? matchedUsers[0] : null;
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: user }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ error: { message: 'Unauthorised' } });
                }
            }
            // register user
            if (request.url.endsWith('/users/register') && request.method === 'POST') {
                // get new user object from post body
                var newUser_1 = request.body;
                // validation
                var duplicateUser = users.filter(function (user) { return user.username === newUser_1.username; }).length;
                if (duplicateUser) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ error: { message: 'Username "' + newUser_1.username + '" is already taken' } });
                }
                // save new user
                newUser_1.id = users.length + 1;
                users.push(newUser_1);
                localStorage.setItem('users', JSON.stringify(users));
                // respond 200 OK
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200 }));
            }
            // delete user
            if (request.url.match(/\/users\/\d+$/) && request.method === 'DELETE') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    var urlParts = request.url.split('/');
                    var id = parseInt(urlParts[urlParts.length - 1]);
                    for (var i = 0; i < users.length; i++) {
                        var user = users[i];
                        if (user.id === id) {
                            // delete user
                            users.splice(i, 1);
                            localStorage.setItem('users', JSON.stringify(users));
                            break;
                        }
                    }
                    // respond 200 OK
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200 }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ error: { message: 'Unauthorised' } });
                }
            }
            // pass through any requests not handled above
            return next.handle(request);
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["materialize"])())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(500))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["dematerialize"])());
    };
    FakeBackendInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], FakeBackendInterceptor);
    return FakeBackendInterceptor;
}());

var fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
    useClass: FakeBackendInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/_helpers/index.ts":
/*!***********************************!*\
  !*** ./src/app/_helpers/index.ts ***!
  \***********************************/
/*! exports provided: ErrorInterceptor, JwtInterceptor, FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error.interceptor */ "./src/app/_helpers/error.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return _error_interceptor__WEBPACK_IMPORTED_MODULE_0__["ErrorInterceptor"]; });

/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jwt.interceptor */ "./src/app/_helpers/jwt.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__["JwtInterceptor"]; });

/* harmony import */ var _fake_backend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fake-backend */ "./src/app/_helpers/fake-backend.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_2__["FakeBackendInterceptor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_2__["fakeBackendProvider"]; });






/***/ }),

/***/ "./src/app/_helpers/jwt.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/_helpers/jwt.interceptor.ts ***!
  \*********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor() {
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + currentUser.token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/_models/action.ts":
/*!***********************************!*\
  !*** ./src/app/_models/action.ts ***!
  \***********************************/
/*! exports provided: Action */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
var Action = /** @class */ (function () {
    function Action() {
        this.parameters = [];
    }
    return Action;
}());



/***/ }),

/***/ "./src/app/_models/bot.ts":
/*!********************************!*\
  !*** ./src/app/_models/bot.ts ***!
  \********************************/
/*! exports provided: Bot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bot", function() { return Bot; });
var Bot = /** @class */ (function () {
    function Bot() {
        this.Commands = [];
        // local variables
        this.isChangingStatus = false;
    }
    return Bot;
}());



/***/ }),

/***/ "./src/app/_models/command.ts":
/*!************************************!*\
  !*** ./src/app/_models/command.ts ***!
  \************************************/
/*! exports provided: Command */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Command", function() { return Command; });
var Command = /** @class */ (function () {
    function Command() {
        this.Actions = [];
        //Local variables
        this.nameEditing = false;
    }
    return Command;
}());



/***/ }),

/***/ "./src/app/_models/discordEmoji.ts":
/*!*****************************************!*\
  !*** ./src/app/_models/discordEmoji.ts ***!
  \*****************************************/
/*! exports provided: DiscordEmoji */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscordEmoji", function() { return DiscordEmoji; });
var DiscordEmoji = /** @class */ (function () {
    function DiscordEmoji() {
    }
    return DiscordEmoji;
}());



/***/ }),

/***/ "./src/app/_models/discordGuild.ts":
/*!*****************************************!*\
  !*** ./src/app/_models/discordGuild.ts ***!
  \*****************************************/
/*! exports provided: DiscordGuild */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscordGuild", function() { return DiscordGuild; });
var DiscordGuild = /** @class */ (function () {
    function DiscordGuild() {
        this.members = []; // List of members in the guild
        this.emojis = []; // List of emojis the guild has
    }
    return DiscordGuild;
}());



/***/ }),

/***/ "./src/app/_models/discordMember.ts":
/*!******************************************!*\
  !*** ./src/app/_models/discordMember.ts ***!
  \******************************************/
/*! exports provided: DiscordMember */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscordMember", function() { return DiscordMember; });
var DiscordMember = /** @class */ (function () {
    function DiscordMember() {
    }
    return DiscordMember;
}());



/***/ }),

/***/ "./src/app/_models/discordUser.ts":
/*!****************************************!*\
  !*** ./src/app/_models/discordUser.ts ***!
  \****************************************/
/*! exports provided: DiscordUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscordUser", function() { return DiscordUser; });
var DiscordUser = /** @class */ (function () {
    function DiscordUser() {
    }
    return DiscordUser;
}());



/***/ }),

/***/ "./src/app/_models/index.ts":
/*!**********************************!*\
  !*** ./src/app/_models/index.ts ***!
  \**********************************/
/*! exports provided: User, Bot, Command, Action, DiscordUser, DiscordGuild, DiscordMember, DiscordEmoji */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ "./src/app/_models/user.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _user__WEBPACK_IMPORTED_MODULE_0__["User"]; });

/* harmony import */ var _bot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bot */ "./src/app/_models/bot.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bot", function() { return _bot__WEBPACK_IMPORTED_MODULE_1__["Bot"]; });

/* harmony import */ var _command__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./command */ "./src/app/_models/command.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Command", function() { return _command__WEBPACK_IMPORTED_MODULE_2__["Command"]; });

/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action */ "./src/app/_models/action.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["Action"]; });

/* harmony import */ var _discordUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./discordUser */ "./src/app/_models/discordUser.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DiscordUser", function() { return _discordUser__WEBPACK_IMPORTED_MODULE_4__["DiscordUser"]; });

/* harmony import */ var _discordGuild__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./discordGuild */ "./src/app/_models/discordGuild.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DiscordGuild", function() { return _discordGuild__WEBPACK_IMPORTED_MODULE_5__["DiscordGuild"]; });

/* harmony import */ var _discordMember__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./discordMember */ "./src/app/_models/discordMember.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DiscordMember", function() { return _discordMember__WEBPACK_IMPORTED_MODULE_6__["DiscordMember"]; });

/* harmony import */ var _discordEmoji__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./discordEmoji */ "./src/app/_models/discordEmoji.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DiscordEmoji", function() { return _discordEmoji__WEBPACK_IMPORTED_MODULE_7__["DiscordEmoji"]; });











/***/ }),

/***/ "./src/app/_models/user.ts":
/*!*********************************!*\
  !*** ./src/app/_models/user.ts ***!
  \*********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/_services/action.service.ts":
/*!*********************************************!*\
  !*** ./src/app/_services/action.service.ts ***!
  \*********************************************/
/*! exports provided: ActionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionService", function() { return ActionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActionService = /** @class */ (function () {
    function ActionService(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:4000/api';
        this.actionUrl = '';
    }
    ActionService.prototype.setIds = function (botId, commandId) {
        this.actionUrl = this.apiUrl + '/bots/' + botId + '/commands/' + commandId + '/actions';
        //console.log("ActionURL: " + this.actionUrl);
    };
    ActionService.prototype.getAll = function () {
        return this.http.get("" + this.actionUrl);
    };
    ActionService.prototype.getById = function (id) {
        return this.http.get(this.actionUrl + "/" + id);
    };
    ActionService.prototype.add = function (action) {
        return this.http.post(this.actionUrl + "/add", action);
    };
    ActionService.prototype.update = function (action, id) {
        return this.http.put(this.actionUrl + "/" + id, action);
    };
    ActionService.prototype.delete = function (id) {
        return this.http.delete(this.actionUrl + "/" + id);
    };
    ActionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ActionService);
    return ActionService;
}());



/***/ }),

/***/ "./src/app/_services/alert.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/alert.service.ts ***!
  \********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/_services/authentication.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_services/authentication.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, data) {
        this.http = http;
        this.data = data;
        // work around for now until we can figure how to get a global config obj
        this.apiUrl = 'http://localhost:4000/api';
    }
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post(this.apiUrl + "/users/authenticate", { username: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                _this.data.changeCurrentUser(user);
            }
            return user;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        this.data.changeCurrentUser(null);
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _services__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/_services/bot.service.ts":
/*!******************************************!*\
  !*** ./src/app/_services/bot.service.ts ***!
  \******************************************/
/*! exports provided: BotService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotService", function() { return BotService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BotService = /** @class */ (function () {
    function BotService(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:4000/api';
        this.botUrl = this.apiUrl + '/bots';
    }
    BotService.prototype.getAll = function () {
        return this.http.get("" + this.botUrl);
    };
    BotService.prototype.getById = function (id) {
        return this.http.get(this.botUrl + "/" + id);
    };
    BotService.prototype.add = function (bot) {
        return this.http.post(this.botUrl + "/add", bot);
    };
    BotService.prototype.update = function (bot, id) {
        return this.http.put(this.botUrl + "/" + id, bot);
    };
    BotService.prototype.start = function (id) {
        return this.http.put(this.botUrl + "/" + id + "/discord/start", "");
    };
    BotService.prototype.stop = function (id) {
        return this.http.put(this.botUrl + "/" + id + "/discord/stop", "");
    };
    BotService.prototype.delete = function (id) {
        return this.http.delete(this.botUrl + "/" + id);
    };
    BotService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BotService);
    return BotService;
}());



/***/ }),

/***/ "./src/app/_services/command.service.ts":
/*!**********************************************!*\
  !*** ./src/app/_services/command.service.ts ***!
  \**********************************************/
/*! exports provided: CommandService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandService", function() { return CommandService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommandService = /** @class */ (function () {
    function CommandService(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:4000/api';
        this.commandUrl = '';
    }
    CommandService.prototype.getAllByBot = function (botId) {
        return this.http.get(this.createBaseURL(botId) + "/");
    };
    CommandService.prototype.getById = function (botId, cmdId) {
        return this.http.get(this.createBaseURL(botId) + "/" + cmdId);
    };
    CommandService.prototype.add = function (botId, cmd) {
        return this.http.post(this.createBaseURL(botId) + "/add", cmd);
    };
    CommandService.prototype.update = function (botId, cmdId, cmd) {
        return this.http.put(this.createBaseURL(botId) + "/" + cmdId, cmd);
    };
    CommandService.prototype.updateAll = function (botId, cmds) {
        console.log('Sending commands', cmds);
        return this.http.put(this.createBaseURL(botId) + "/", { commands: cmds });
    };
    CommandService.prototype.delete = function (botId, cmdId) {
        return this.http.delete(this.createBaseURL(botId) + "/" + cmdId);
    };
    CommandService.prototype.createBaseURL = function (botId) {
        return this.apiUrl + '/bots/' + botId + '/commands';
    };
    CommandService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CommandService);
    return CommandService;
}());



/***/ }),

/***/ "./src/app/_services/data.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/data.service.ts ***!
  \*******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService() {
        this.userSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.defaultUser);
        this.currentUser = this.userSource.asObservable();
        this.defaultUser = JSON.parse(localStorage.getItem('currentUser'));
        this.userSource.next(this.defaultUser);
    }
    DataService.prototype.changeCurrentUser = function (user) {
        this.userSource.next(user);
        if (user)
            localStorage.setItem('currentUser', JSON.stringify(user));
        else
            localStorage.removeItem('currentUser');
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/_services/guild.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/guild.service.ts ***!
  \********************************************/
/*! exports provided: GuildService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuildService", function() { return GuildService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GuildService = /** @class */ (function () {
    function GuildService(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:4000/api';
    }
    GuildService.prototype.getAll = function (bid) {
        return this.http.get(this.apiUrl + '/bots/' + bid + '/discord/guilds/');
    };
    GuildService.prototype.getById = function (bid, gid) {
        return this.http.get(this.apiUrl + '/bots/' + bid + '/discord/guilds/' + gid);
    };
    GuildService.prototype.getMembers = function (bid, gid) {
        return this.http.get(this.apiUrl + '/bots/' + bid + '/discord/guilds/' + gid + '/members');
    };
    GuildService.prototype.getEmojis = function (bid, gid) {
        return this.http.get(this.apiUrl + '/bots/' + bid + '/discord/guilds/' + gid + '/emojis');
    };
    GuildService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GuildService);
    return GuildService;
}());



/***/ }),

/***/ "./src/app/_services/index.ts":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: CommandService, AlertService, DataService, AuthenticationService, UserService, BotService, GuildService, ActionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.service */ "./src/app/_services/alert.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_service__WEBPACK_IMPORTED_MODULE_0__["AlertService"]; });

/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.service */ "./src/app/_services/data.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]; });

/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/_services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]; });

/* harmony import */ var _bot_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bot.service */ "./src/app/_services/bot.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BotService", function() { return _bot_service__WEBPACK_IMPORTED_MODULE_4__["BotService"]; });

/* harmony import */ var _guild_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guild.service */ "./src/app/_services/guild.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GuildService", function() { return _guild_service__WEBPACK_IMPORTED_MODULE_5__["GuildService"]; });

/* harmony import */ var _action_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./action.service */ "./src/app/_services/action.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionService", function() { return _action_service__WEBPACK_IMPORTED_MODULE_6__["ActionService"]; });

/* harmony import */ var _command_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./command.service */ "./src/app/_services/command.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommandService", function() { return _command_service__WEBPACK_IMPORTED_MODULE_7__["CommandService"]; });











/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        // work around for now until we can figure how to get a global config obj
        this.apiUrl = 'http://localhost:4000/api';
    }
    UserService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/users");
    };
    UserService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/users/" + id);
    };
    UserService.prototype.register = function (user) {
        return this.http.post(this.apiUrl + "/users/register", user);
    };
    UserService.prototype.update = function (user) {
        return this.http.put(this.apiUrl + "/users/" + user.id, user);
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/users/" + id);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/actions-edit/actions-edit.component.css":
/*!*********************************************************!*\
  !*** ./src/app/actions-edit/actions-edit.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/actions-edit/actions-edit.component.html":
/*!**********************************************************!*\
  !*** ./src/app/actions-edit/actions-edit.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<small class=\"d-block text-right mt-1\">-->\n    <!--<button type=\"button\" class=\"btn btn-link\" (click)='resetActions()'>Reset</button>-->\n<!--</small>-->\n\n<div class=\"container bg-light text-center\" *ngIf=\"editedActions.length === 0\" >\n  <div>This command has no actions</div>\n  <button type=\"button\" class=\"btn btn-link\" (click)='createAction()'>Add Action</button>\n</div>\n\n<div *ngIf=\"editedActions.length > 0\">\n  <table class=\"table table-sm table-hover\" *ngIf=\"editedActions.length > 0\">\n    <tbody>\n    <tr *ngFor=\"let action of editedActions; index as i\">\n      <td scope=\"row\">\n        <select class=\"custom-select\" type=\"number\" [(ngModel)]=\"action.type\" (change)=\"removeActionParameters(action)\">\n          <option *ngFor=\"let type of possibleActionTypes\" [ngValue]=\"type.id\">{{type.display}}</option>\n        </select>\n      </td>\n      <td scope=\"row\">\n        <div *ngFor=\"let possibleType of possibleActionTypes\">\n          <div *ngIf=\"possibleType.id === action.type\">\n            <div class=\"d-flex\" *ngFor=\"let param of possibleType.params; index as j; first as isFirst\" [ngClass]=\"{'mt-2':!isFirst}\">\n              <div class=\"input-group\" *ngIf=\"param.type==='input-text'\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\">{{param.display}}</span>\n                </div>\n                <textarea class=\"form-control\" [(ngModel)]=\"action.parameters[j]\" aria-label=\"With textarea\"></textarea>\n              </div>\n              <div class=\"input-group\" *ngIf=\"param.type==='input'\">\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"action.parameters[j]\" placeholder=\"{{param.display}}\" aria-label=\"input\">\n              </div>\n              <div class=\"input-group\" *ngIf=\"param.type==='selector'\">\n                <div class=\"input-group-prepend\">\n                  <label class=\"input-group-text\">{{param.display}}</label>\n                </div>\n                <select class=\"custom-select\" type=\"number\" [(ngModel)]=\"action.parameters[j]\">\n                  <option *ngFor=\"let choice of param.choices\" [ngValue]=\"choice.id\">{{choice.display}}</option>\n                </select>\n              </div>\n            </div>\n          </div>\n        </div>\n      </td>\n      <td scope=\"row\">\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"deleteAction(i)\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n\n  <small class=\"d-block text-right mt-1\">\n    <button type=\"button\" class=\"btn btn-link\" (click)='createAction()'>Add Action</button>\n  </small>\n</div>\n"

/***/ }),

/***/ "./src/app/actions-edit/actions-edit.component.ts":
/*!********************************************************!*\
  !*** ./src/app/actions-edit/actions-edit.component.ts ***!
  \********************************************************/
/*! exports provided: ActionsEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsEditComponent", function() { return ActionsEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_models */ "./src/app/_models/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import * as ActionTypes from "./ActionTypes.json";
var ActionsEditComponent = /** @class */ (function () {
    function ActionsEditComponent() {
        this.editedActions = [];
        this.possibleActionTypes = [{
                "id": "msgDirect",
                "display": "Message Direct",
                "params": [
                    { "type": "input-text", "display": "Message" }
                ]
            },
            {
                "id": "msgChannel",
                "display": "Message Channel",
                "params": [
                    { "type": "input-text", "display": "Message" }
                ]
            },
            {
                "id": "playAudio",
                "display": "Play Audio VoiceChannel",
                "params": [
                    { "type": "input", "display": "URL" }
                ]
            },
            {
                "id": "slots",
                "display": "Slots Game",
                "params": [
                    { "type": "selector", "display": "Number of Slots",
                        "choices": [
                            { "display": "1", "id": "1" },
                            { "display": "2", "id": "2" },
                            { "display": "3", "id": "3" },
                            { "display": "4", "id": "4" },
                            { "display": "5", "id": "5" },
                            { "display": "6", "id": "6" },
                            { "display": "7", "id": "7" },
                            { "display": "8", "id": "8" },
                            { "display": "9", "id": "9" },
                            { "display": "10", "id": "10" }
                        ]
                    },
                    { "type": "selector", "display": "Emoji Type",
                        "choices": [
                            { "display": "Nature", "id": "nature" },
                            { "display": "Number", "id": "server" },
                            { "display": "Server", "id": "number" }
                        ]
                    }
                ]
            }
        ];
    }
    ActionsEditComponent.prototype.ngOnInit = function () {
        // Make a deep copy of the actions to edit
        this.editedActions = this.actions.map(function (x) { return Object.assign({}, x); });
        this.resetActions();
    };
    ActionsEditComponent.prototype.createAction = function () {
        this.editedActions.push(new _models__WEBPACK_IMPORTED_MODULE_1__["Action"]());
    };
    ActionsEditComponent.prototype.deleteAction = function (index) {
        this.editedActions.splice(index, 1);
    };
    // Stores a deep copy of the actions passed in
    ActionsEditComponent.prototype.resetActions = function () {
        this.editedActions = this.actions.map(function (x) { return Object.assign({}, x); });
    };
    ActionsEditComponent.prototype.removeActionParameters = function (action) {
        action.parameters = [];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ActionsEditComponent.prototype, "actions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ActionsEditComponent.prototype, "commandEditId", void 0);
    ActionsEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-actions-edit',
            template: __webpack_require__(/*! ./actions-edit.component.html */ "./src/app/actions-edit/actions-edit.component.html"),
            styles: [__webpack_require__(/*! ./actions-edit.component.css */ "./src/app/actions-edit/actions-edit.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ActionsEditComponent);
    return ActionsEditComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*img#background-logo{*/\n  /*position: absolute;*/\n  /*left: 180px;*/\n  /*top: 160px;*/\n  /*width: 18%;*/\n  /*height: auto;*/\n  /*filter: brightness(0.5);*/\n  /*}*/\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- main app container -->\n<nav-bar></nav-bar>\n\n<div class=\"jumbotron\" >\n    <alert></alert>\n    <router-outlet></router-outlet>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app',
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_directives */ "./src/app/_directives/index.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_guards */ "./src/app/_guards/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_helpers */ "./src/app/_helpers/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_services */ "./src/app/_services/index.ts");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home */ "./src/app/home/index.ts");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./nav */ "./src/app/nav/index.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login */ "./src/app/login/index.ts");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./register */ "./src/app/register/index.ts");
/* harmony import */ var _bots_bots_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./bots/bots.component */ "./src/app/bots/bots.component.ts");
/* harmony import */ var _bots_edit_bots_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./bots-edit/bots-edit.component */ "./src/app/bots-edit/bots-edit.component.ts");
/* harmony import */ var _bots_details_bots_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./bots-details/bots-details.component */ "./src/app/bots-details/bots-details.component.ts");
/* harmony import */ var _guilds_guilds_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./guilds/guilds.component */ "./src/app/guilds/guilds.component.ts");
/* harmony import */ var _guilds_details_guilds_details_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./guilds-details/guilds-details.component */ "./src/app/guilds-details/guilds-details.component.ts");
/* harmony import */ var _services_command_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./_services/command.service */ "./src/app/_services/command.service.ts");
/* harmony import */ var _actions_edit_actions_edit_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./actions-edit/actions-edit.component */ "./src/app/actions-edit/actions-edit.component.ts");
/* harmony import */ var _commands_edit_commands_edit_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./commands-edit/commands-edit.component */ "./src/app/commands-edit/commands-edit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// used to create fake backend
// import { fakeBackendProvider } from './_helpers';













;





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["routing"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _directives__WEBPACK_IMPORTED_MODULE_6__["AlertComponent"],
                _home__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _nav__WEBPACK_IMPORTED_MODULE_11__["NavComponent"],
                _login__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _register__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"],
                _bots_bots_component__WEBPACK_IMPORTED_MODULE_14__["BotsComponent"],
                _bots_edit_bots_edit_component__WEBPACK_IMPORTED_MODULE_15__["BotsEditComponent"],
                _bots_details_bots_details_component__WEBPACK_IMPORTED_MODULE_16__["BotsDetailsComponent"],
                _guilds_guilds_component__WEBPACK_IMPORTED_MODULE_17__["GuildsComponent"],
                _guilds_details_guilds_details_component__WEBPACK_IMPORTED_MODULE_18__["GuildsDetailsComponent"],
                _actions_edit_actions_edit_component__WEBPACK_IMPORTED_MODULE_20__["ActionsEditComponent"],
                _commands_edit_commands_edit_component__WEBPACK_IMPORTED_MODULE_21__["CommandsEditComponent"]
            ],
            providers: [
                _guards__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"],
                _services__WEBPACK_IMPORTED_MODULE_9__["AlertService"],
                _services__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"],
                _services__WEBPACK_IMPORTED_MODULE_9__["DataService"],
                _services__WEBPACK_IMPORTED_MODULE_9__["UserService"],
                _services__WEBPACK_IMPORTED_MODULE_9__["BotService"],
                _services__WEBPACK_IMPORTED_MODULE_9__["GuildService"],
                _services_command_service__WEBPACK_IMPORTED_MODULE_19__["CommandService"],
                _services__WEBPACK_IMPORTED_MODULE_9__["ActionService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_8__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_8__["ErrorInterceptor"], multi: true },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/app/home/index.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login */ "./src/app/login/index.ts");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register */ "./src/app/register/index.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_guards */ "./src/app/_guards/index.ts");
/* harmony import */ var _bots_details_bots_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bots-details/bots-details.component */ "./src/app/bots-details/bots-details.component.ts");
/* harmony import */ var _bots_edit_bots_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bots-edit/bots-edit.component */ "./src/app/bots-edit/bots-edit.component.ts");
/* harmony import */ var _guilds_details_guilds_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guilds-details/guilds-details.component */ "./src/app/guilds-details/guilds-details.component.ts");








var appRoutes = [
    { path: '', component: _home__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'login', component: _login__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'register', component: _register__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    //{ path: 'forgetpw', component: ForgetpwComponent },
    { path: 'bots/add', component: _bots_edit_bots_edit_component__WEBPACK_IMPORTED_MODULE_6__["BotsEditComponent"] },
    { path: 'bots/:bid', component: _bots_details_bots_details_component__WEBPACK_IMPORTED_MODULE_5__["BotsDetailsComponent"],
    },
    { path: 'bots/edit/:bid', component: _bots_edit_bots_edit_component__WEBPACK_IMPORTED_MODULE_6__["BotsEditComponent"] },
    { path: 'bots/:bid/guilds/:gid', component: _guilds_details_guilds_details_component__WEBPACK_IMPORTED_MODULE_7__["GuildsDetailsComponent"] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/bots-details/bots-details.component.css":
/*!*********************************************************!*\
  !*** ./src/app/bots-details/bots-details.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.jumbotron {\n  background: snow ;\n  background-image: url(\"/assets/images/bgrd.gif\");\n  font-weight: 500;\n  font-family: \"Gill Sans\", sans-serif;\n  background-size: 100% 100%;\n}\n"

/***/ }),

/***/ "./src/app/bots-details/bots-details.component.html":
/*!**********************************************************!*\
  !*** ./src/app/bots-details/bots-details.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n<font color=\"white\"><h2> Bot Status Page</h2></font>\n<div class=\"container\">\n  <div class=\"my-3 p-3 bg-white rounded box-shadow\">\n    <div class=\"container\" *ngIf=\"bot\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-sm-1.5\">\n            <img src=\"http://via.placeholder.com/64x64\" width=\"100\" height=\"100\">\n\n          </div>\n          <div class=\"col-sm-4\">\n            <h3>{{bot.name}}\n                <img *ngIf=\"bot.isChangingStatus\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n                  <button *ngIf=\"bot.status == 'ONLINE'\" class=\"btn btn-light\" type=\"button\" [disabled]=\"bot.isChangingStatus\" (click)=\"startStop()\">STOP</button>\n                  <button *ngIf=\"bot.status == 'OFFLINE'\" class=\"btn btn-secondary\" type=\"button\" [disabled]=\"bot.isChangingStatus\" (click)=\"startStop()\">START</button>\n            </h3>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm\">\n            <strong>Discord Token:</strong>\n          </div>\n          <div class=\"col-sm\">\n            {{bot.discordToken}}\n          </div>\n        </div>\n\n        <hr>\n\n        <div class=\"row\">\n          <div class=\"col-sm\">\n            <strong>Status:</strong>\n          </div>\n          <div class=\"col-sm\">\n            {{bot.status|titlecase}}\n          </div>\n        </div>\n\n        <hr>\n\n        <div class=\"row\">\n          <div class=\"col-sm\">\n            <strong>Command Prefix:</strong>\n          </div>\n          <div class=\"col-sm\">\n            {{bot.commandPrefix}}\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<hr>\n\n<div class=\"container\">\n    <div class=\"my-3 p-3 bg-white rounded box-shadow\">\n      <!-- list of guilds -->\n      <app-guilds ></app-guilds>\n      <br>\n      <!-- <app-guilds-details></app-guilds-details> -->\n    </div>\n\n</div>\n</div>\n\n<a [routerLink]=\"['/']\" class=\"btn btn-link\">Back</a>\n<a *ngIf=\"bot\" [routerLink]=\"['/bots/edit', bot.id ]\" class=\"btn btn-link\">Edit</a>\n"

/***/ }),

/***/ "./src/app/bots-details/bots-details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/bots-details/bots-details.component.ts ***!
  \********************************************************/
/*! exports provided: BotsDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotsDetailsComponent", function() { return BotsDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guilds_guilds_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../guilds/guilds.component */ "./src/app/guilds/guilds.component.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BotsDetailsComponent = /** @class */ (function () {
    function BotsDetailsComponent(activatedRouter, botService, alertService) {
        this.activatedRouter = activatedRouter;
        this.botService = botService;
        this.alertService = alertService;
    }
    BotsDetailsComponent.prototype.ngAfterViewInit = function () {
        // this.loadGuilds();
    };
    BotsDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.activatedRouter.params.subscribe(function (params) {
            _this.id = params['bid']; // (+) converts string 'id' to a number
            // In a real app: dispatch action to load the details here.
            _this.loadBot();
        });
    };
    BotsDetailsComponent.prototype.startStop = function () {
        var _this = this;
        var botToStartStop = this.bot;
        //console.log(this.bot.status);
        botToStartStop.isChangingStatus = true;
        // this.loading = true;
        if (this.bot.status == "ONLINE") {
            // this.guildComponent.closeGuilds();
            this.botService.stop(this.bot.id)
                .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                .subscribe(function (data) {
                _this.bot = data['bot'];
                _this.guildComponent.guildList = data['guilds'];
                _this.alertService.success('Bot stopped', true);
            }, function (error) {
                botToStartStop.isChangingStatus = false;
                _this.alertService.error(error);
            });
        }
        else {
            this.botService.start(this.bot.id)
                .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                .subscribe(function (data) {
                _this.bot = data['bot'];
                _this.guildComponent.guildList = data['guilds'];
                _this.alertService.success('Bot started', true);
            }, function (error) {
                botToStartStop.isChangingStatus = false;
                _this.alertService.error(error);
            });
        }
    };
    BotsDetailsComponent.prototype.loadBot = function () {
        var _this = this;
        this.botService.getById(this.id).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (rcvdBot) {
            _this.bot = rcvdBot;
        });
    };
    BotsDetailsComponent.prototype.loadGuilds = function () {
        // if ( this.bot.status == "ONLINE") {
        this.guildComponent.loadGuilds();
        console.log(this.guildComponent.guildList);
        // }
    };
    BotsDetailsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_guilds_guilds_component__WEBPACK_IMPORTED_MODULE_2__["GuildsComponent"]),
        __metadata("design:type", _guilds_guilds_component__WEBPACK_IMPORTED_MODULE_2__["GuildsComponent"])
    ], BotsDetailsComponent.prototype, "guildComponent", void 0);
    BotsDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bots-details',
            template: __webpack_require__(/*! ./bots-details.component.html */ "./src/app/bots-details/bots-details.component.html"),
            styles: [__webpack_require__(/*! ./bots-details.component.css */ "./src/app/bots-details/bots-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services__WEBPACK_IMPORTED_MODULE_3__["BotService"],
            _services__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])
    ], BotsDetailsComponent);
    return BotsDetailsComponent;
}());



/***/ }),

/***/ "./src/app/bots-edit/bots-edit.component.css":
/*!***************************************************!*\
  !*** ./src/app/bots-edit/bots-edit.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/bots-edit/bots-edit.component.html":
/*!****************************************************!*\
  !*** ./src/app/bots-edit/bots-edit.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"pageAction == PAGE_ACTIONS.Add\"><h2>Add Bot</h2></div>\n<div *ngIf=\"pageAction == PAGE_ACTIONS.Edit\"><h2>Edit Bot</h2></div>\n<div *ngIf=\"pageAction == PAGE_ACTIONS.Add || bot\">\n  <form [formGroup]=\"editBotForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n      <label >Name</label>\n      <input type=\"text\" formControlName=\"name\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\" />\n      <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.name.errors.required\">Name is required</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label >Discord Token</label>\n      <input type=\"text\" formControlName=\"discordToken\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.discordToken.errors }\" />\n      <div *ngIf=\"submitted && f.discordToken.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.discordToken.errors.required\">Discord token is required</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label >Command Prefix</label>\n      <input type=\"text\" formControlName=\"commandPrefix\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.commandPrefix.errors }\" />\n      <div *ngIf=\"submitted && f.commandPrefix.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.commandPrefix.errors.required\">Command prefix is required</div>\n      </div>\n    </div>\n    <hr>\n    <app-commands-edit #commandsEditor [botId]=\"bot ? bot.id : 0\">\n    </app-commands-edit>\n    <!-- <div *ngIf=\"pageAction == PAGE_ACTIONS.Edit\">\n      <app-commands-edit #commandsEditor [botId]=\"bot.id\">\n      </app-commands-edit>\n    </div> -->\n    <hr>\n    <div class=\"form-group\">\n      <div class=\"d-flex justify-content-around\">\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">\n          <a *ngIf=\"pageAction == PAGE_ACTIONS.Add\">Add Bot</a>\n          <a *ngIf=\"pageAction == PAGE_ACTIONS.Edit\">Save</a>\n        </button>\n        <!-- <button *ngIf=\"pageAction == PAGE_ACTIONS.Edit\"\n                [disabled]=\"loading\" type=\"button\" (click)=\"commandsEditor.resetCommands()\"\n                class=\"btn btn-secondary\">\n          Reset\n        </button> -->\n        <button *ngIf=\"pageAction == PAGE_ACTIONS.Edit\" [disabled]=\"loading\" class=\"btn btn-danger\" type=\"button\" (click)=\"onDelete()\">Delete Bot</button>\n      </div>\n      <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n      <a *ngIf=\"pageAction == PAGE_ACTIONS.Add\" [routerLink]=\"['/bots/']\" class=\"btn btn-link\">Cancel</a>\n      <a *ngIf=\"pageAction == PAGE_ACTIONS.Edit\" [routerLink]=\"['/bots', bot.id]\" class=\"btn btn-link\">Cancel</a>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/bots-edit/bots-edit.component.ts":
/*!**************************************************!*\
  !*** ./src/app/bots-edit/bots-edit.component.ts ***!
  \**************************************************/
/*! exports provided: BotsEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotsEditComponent", function() { return BotsEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _commands_edit_commands_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../commands-edit/commands-edit.component */ "./src/app/commands-edit/commands-edit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PageAction;
(function (PageAction) {
    PageAction[PageAction["Add"] = 0] = "Add";
    PageAction[PageAction["Edit"] = 1] = "Edit";
})(PageAction || (PageAction = {}));
var BotsEditComponent = /** @class */ (function () {
    function BotsEditComponent(formBuilder, router, activatedRouter, botService, alertService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.activatedRouter = activatedRouter;
        this.botService = botService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
        this.PAGE_ACTIONS = PageAction;
        this.pageAction = PageAction.Add;
    }
    BotsEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.activatedRouter.params.subscribe(function (params) {
            if (params['bid']) {
                _this.pageAction = PageAction.Edit;
                _this.id = params['bid']; // (+) converts string 'id' to a number
                // In a real app: dispatch action to load the details here.
                _this.botService.getById(_this.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (rcvdBot) {
                    _this.bot = rcvdBot;
                    _this.editBotForm = _this.formBuilder.group({
                        name: ["" + _this.bot.name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        discordToken: ["" + _this.bot.discordToken, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        commandPrefix: ["" + _this.bot.commandPrefix, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
                    });
                });
            }
            else {
                _this.editBotForm = _this.formBuilder.group({
                    name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    discordToken: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    commandPrefix: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
                });
            }
        });
    };
    Object.defineProperty(BotsEditComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.editBotForm.controls; },
        enumerable: true,
        configurable: true
    });
    BotsEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.editBotForm.invalid) {
            return;
        }
        // Attach command list
        if (this.commandListEditor)
            this.editBotForm.value.Commands = this.commandListEditor.getValidCommandListForSubmission();
        this.loading = true;
        if (this.pageAction === PageAction.Add) {
            this.botService.add(this.editBotForm.value)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                .subscribe(function (bot) {
                console.log("ADDED BOT RETURNED", bot);
                _this.alertService.success('Bot added successfully', true);
                _this.router.navigate(['/']);
            }, function (error) {
                _this.alertService.error(error);
                _this.loading = false;
            });
        }
        else {
            this.botService.update(this.editBotForm.value, this.bot.id)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                .subscribe(function (bot) {
                console.log("EDITED BOT RETURNED", bot);
                _this.alertService.success('Bot edited successfully', true);
                _this.router.navigate(['/bots/', _this.bot.id]);
            }, function (error) {
                _this.alertService.error(error);
                _this.loading = false;
            });
        }
    };
    BotsEditComponent.prototype.onDelete = function () {
        var _this = this;
        this.loading = true;
        this.botService.delete(this.bot.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            _this.alertService.success('Bot Deleted', true);
            _this.router.navigate(['/']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_commands_edit_commands_edit_component__WEBPACK_IMPORTED_MODULE_5__["CommandsEditComponent"]),
        __metadata("design:type", _commands_edit_commands_edit_component__WEBPACK_IMPORTED_MODULE_5__["CommandsEditComponent"])
    ], BotsEditComponent.prototype, "commandListEditor", void 0);
    BotsEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bots-edit',
            template: __webpack_require__(/*! ./bots-edit.component.html */ "./src/app/bots-edit/bots-edit.component.html"),
            styles: [__webpack_require__(/*! ./bots-edit.component.css */ "./src/app/bots-edit/bots-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services__WEBPACK_IMPORTED_MODULE_1__["BotService"],
            _services__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
    ], BotsEditComponent);
    return BotsEditComponent;
}());



/***/ }),

/***/ "./src/app/bots/bots.component.css":
/*!*****************************************!*\
  !*** ./src/app/bots/bots.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nimg.avatar {\n    height: 40px;\n}\n\ndiv.jumbotron {\n  background: snow ;\n  background-image: url(\"/assets/images/bgrd.gif\");\n  font-weight: 500;\n  font-family: \"Gill Sans\", sans-serif;\n  background-size: 100% 100%;\n}\n"

/***/ }),

/***/ "./src/app/bots/bots.component.html":
/*!******************************************!*\
  !*** ./src/app/bots/bots.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n<font color=\"white\"><h2>Home</h2></font>\n<div class=\"my-3 p-3 bg-white rounded box-shadow\">\n    <h6 class=\"border-bottom border-gray pb-2 mb-0\">Bots</h6>\n    <div class=\"jumbotron text-center\" *ngIf=\"!botList || botList.length === 0\">\n        <h5>You have no bots right now</h5>\n        <a [routerLink]=\"['/bots/add']\">Create New Bot</a>\n    </div>\n    <div id=\"onlineBots\" *ngFor=\"let bot of onlineBots\">\n            <div class=\"media pt-3\">\n                <img src=\"http://via.placeholder.com/64x64\" alt=\"\"\n                class=\"mr-2 rounded-circle avatar border border-success\">\n                <div class=\"media-body pb-2 mb-0 small lh-125 border-bottom border-gray\">\n                    <div class=\"d-flex\">\n                        <div class=\"d-flex flex-column w-100\">\n                            <div>\n                                {{ bot.name }}<span class=\"badge badge-pill badge-success ml-1\" *ngIf=\"bot.status == 'ONLINE'\">Online</span>\n                            </div>\n                            <div><a [routerLink]=\"['/bots', bot.id]\">Details</a></div>\n                        </div>\n                      <div class=\"flex-shrink-1 d-flex\">\n                          <div class=\"align-self-center mr-1\">\n                            <img *ngIf=\"bot.isChangingStatus\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n                          </div>\n                          <button class=\"btn btn-light\" [disabled]=\"bot.isChangingStatus\" (click)=\"startStop(bot.id)\">STOP</button>\n                      </div>\n                    </div>\n                </div>\n            </div>\n    </div>\n    <div id=\"offlineBots\" *ngFor=\"let bot of offlineBots\">\n        <div class=\"media pt-3\">\n            <img src=\"http://via.placeholder.com/64x64\" alt=\"\"\n            class=\"mr-2 rounded-circle avatar border border-secondary\">\n            <div class=\"media-body pb-2 mb-0 small lh-125 border-bottom border-gray\">\n                <div class=\"d-flex\">\n                    <div class=\"d-flex flex-column w-100\">\n                        <div>\n                            {{ bot.name }}<span class=\"badge badge-pill badge-secondary ml-1\" *ngIf=\"bot.status == 'OFFLINE'\">Offline</span>\n                        </div>\n                        <div><a [routerLink]=\"['/bots', bot.id]\">Details</a></div>\n                    </div>\n                  <div class=\"flex-shrink-1 d-flex\">\n                      <div class=\"align-self-center mr-1\">\n                        <img *ngIf=\"bot.isChangingStatus\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n                      </div>\n                      <button class=\"btn btn-secondary\" [disabled]=\"bot.isChangingStatus\" (click)=\"startStop(bot.id)\">START</button>\n                  </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <small class=\"d-block text-right mt-3\">\n        <a [routerLink]=\"['/bots/add']\">Create New Bot</a>\n    </small>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/bots/bots.component.ts":
/*!****************************************!*\
  !*** ./src/app/bots/bots.component.ts ***!
  \****************************************/
/*! exports provided: BotsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotsComponent", function() { return BotsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BotsComponent = /** @class */ (function () {
    // bot: Bot;
    // selectedBot: Bot;
    // id: number;
    function BotsComponent(activatedRouter, botService, alertService) {
        this.activatedRouter = activatedRouter;
        this.botService = botService;
        this.alertService = alertService;
        this.botList = [];
        this.onlineBots = [];
        this.offlineBots = [];
    }
    BotsComponent.prototype.ngOnInit = function () {
        this.loadBots();
    };
    // Function to sort bots, goes by createdAt, if same then sorts by id
    BotsComponent.prototype.botSort = function (botA, botB) {
        var timeA = new Date(botA.createdAt).getTime();
        var timeB = new Date(botB.createdAt).getTime();
        if (timeA !== timeB)
            return timeA - timeB;
        else
            return botA.id - botB.id;
    };
    BotsComponent.prototype.loadBots = function () {
        var _this = this;
        this.botService.getAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(function (bots) {
            bots.sort(_this.botSort);
            _this.botList = bots;
            _this.onlineBots = bots.filter(function (bot) { return bot.status === 'ONLINE'; });
            _this.offlineBots = bots.filter(function (bot) { return bot.status === 'OFFLINE'; });
        });
    };
    BotsComponent.prototype.startStop = function (i) {
        var _this = this;
        var botToStartStop = this.botList.find(function (bot) { return bot.id === i; });
        this.botService.getById(i).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(function (rcvdBot) {
            var bot = rcvdBot;
            // TODO add a finally block to set isChangingStatus back to false
            botToStartStop.isChangingStatus = true;
            if (bot.status == "ONLINE") {
                _this.botService.stop(bot.id)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                    .subscribe(function (bot) {
                    _this.loadBots();
                }, function (error) {
                    _this.alertService.error(error);
                    botToStartStop.isChangingStatus = false;
                }, function () {
                    botToStartStop.isChangingStatus = false;
                });
            }
            else {
                _this.botService.start(bot.id)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                    .subscribe(function (data) {
                    _this.loadBots();
                }, function (error) {
                    _this.alertService.error(error);
                    botToStartStop.isChangingStatus = false;
                }, function () {
                    botToStartStop.isChangingStatus = false;
                });
            }
        });
    };
    BotsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bots',
            template: __webpack_require__(/*! ./bots.component.html */ "./src/app/bots/bots.component.html"),
            styles: [__webpack_require__(/*! ./bots.component.css */ "./src/app/bots/bots.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services__WEBPACK_IMPORTED_MODULE_2__["BotService"],
            _services__WEBPACK_IMPORTED_MODULE_2__["AlertService"]])
    ], BotsComponent);
    return BotsComponent;
}());



/***/ }),

/***/ "./src/app/commands-edit/commands-edit.component.css":
/*!***********************************************************!*\
  !*** ./src/app/commands-edit/commands-edit.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/commands-edit/commands-edit.component.html":
/*!************************************************************!*\
  !*** ./src/app/commands-edit/commands-edit.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h4>Commands</h4>\n  <!-- Display for no commands -->\n  <div *ngIf=\"editedCommandList.length == 0\">\n    <div class=\"jumbotron text-center bg-light\" *ngIf=\"!editedCommandList || editedCommandList.length === 0\">\n      <h5>Add commands for your Bot!</h5>\n      <button type=\"button\" class=\"btn btn-link\" (click)=\"createCommand()\">Add Command</button>\n    </div>\n  </div>\n  <div *ngFor=\"let command of editedCommandList; index as i\">\n    <div class=\"card\">\n        <div class=\"card-header p-0\">\n            <div class=\"d-flex align-items-center justify-content-between\">\n              <div class=\"p-2\">\n                <button type=\"button\" class=\"btn btn-primary btn-sm\" data-toggle=\"collapse\" [attr.data-target]=\"'#ActionsFor'+ i\">\n                  Actions <span class=\"badge badge-light\">{{actionsEditor.editedActions.length}}</span>\n                </button>\n              </div>\n              <div class=\"p-2 d-flex justify-content-center\">\n                <h5 *ngIf='!command.nameEditing' class=\"m-0 align-self-center\">\n                    {{command.name}}\n                  </h5>\n                <div class=\"input-group input-group-sm\" *ngIf='command.nameEditing'>\n                  <input type=\"text\" class=\"form-control\"\n                           [(ngModel)]=\"command.name\" placeholder=\"Name\"\n                  aria-label=\"Command Name\" aria-describedby=\"delete-command\">\n                  <div class=\"input-group-append\">\n                    <button class=\"btn btn-outline-danger\" type=\"button\"\n                              id=\"delete-command\" (click)='deleteCommand(i)'>Delete</button>\n                  </div>\n                </div>\n              </div>\n              <div class=\"p-2\">\n                <button *ngIf='!command.nameEditing' type=\"button\"\n                        class=\"btn btn-outline-secondary btn-sm ml-1\"\n                        (click)='command.nameEditing=true;'>Edit</button>\n                <button type=\"button\" *ngIf='command.nameEditing'\n                        class=\"btn btn-outline-secondary btn-sm\"\n                        (click)='command.nameEditing=false;'>Done</button>\n              </div>\n            </div>\n        </div>\n        <div class=\"collapse\" id=\"ActionsFor{{i}}\">\n            <div class=\"card-body\">\n                <app-actions-edit #actionsEditor [actions]=\"command.Actions\" [commandEditId]=\"i\">\n                </app-actions-edit>\n            </div>\n        </div>\n    </div>\n  </div>\n  <small class=\"d-block text-right mt-1\" *ngIf=\"editedCommandList.length > 0\">\n      <button type=\"button\" class=\"btn btn-link\" (click)=\"createCommand()\">Add Command</button>\n  </small>\n  <!--<button type=\"button\" (click)=\"resetEditedCommands()\"-->\n          <!--class=\"btn btn-secondary\">-->\n    <!--Reset-->\n  <!--</button>-->\n  <!--<button type=\"button\" (click)=\"sendEditedCommandListToServer()\"-->\n          <!--class=\"btn btn-primary\">-->\n    <!--Save Commands-->\n  <!--</button>-->\n</div>\n\n"

/***/ }),

/***/ "./src/app/commands-edit/commands-edit.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/commands-edit/commands-edit.component.ts ***!
  \**********************************************************/
/*! exports provided: CommandsEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandsEditComponent", function() { return CommandsEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _actions_edit_actions_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions-edit/actions-edit.component */ "./src/app/actions-edit/actions-edit.component.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_models */ "./src/app/_models/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CommandsEditComponent = /** @class */ (function () {
    function CommandsEditComponent(commandService, alertService) {
        this.commandService = commandService;
        this.alertService = alertService;
        this.commandList = [];
        this.editedCommandList = [];
    }
    CommandsEditComponent.prototype.ngOnInit = function () {
        this.loadCommandsFromServer();
    };
    CommandsEditComponent.prototype.createCommand = function () {
        var cmd = new _models__WEBPACK_IMPORTED_MODULE_3__["Command"]();
        cmd.nameEditing = true;
        this.editedCommandList.push(cmd);
    };
    CommandsEditComponent.prototype.deleteCommand = function (index) {
        this.editedCommandList.splice(index, 1);
    };
    // Stores a deep copy of the actions passed in
    CommandsEditComponent.prototype.resetEditedCommands = function () {
        this.editedCommandList = this.commandList.map(function (x) { return Object.assign({}, x); });
    };
    CommandsEditComponent.prototype.loadCommandsFromServer = function () {
        var _this = this;
        console.log(this.botId);
        if (this.botId) {
            this.commandService.getAllByBot(this.botId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (cmds) {
                _this.storeCommandList(cmds);
            });
        }
        else {
            this.storeCommandList([]);
        }
    };
    // Stores the commands into local list in sorted order, then resets
    //  the edited list to this stored list
    CommandsEditComponent.prototype.storeCommandList = function (cmds) {
        this.commandList = cmds.sort(this.createdAtSort);
        this.resetEditedCommands();
    };
    CommandsEditComponent.prototype.getValidCommandListForSubmission = function () {
        var _this = this;
        // Filter out invalid Commands (ie, ones without names)
        var submissionCommandList = this.editedCommandList.filter(function (cmd) {
            return cmd.name && cmd.name !== '';
        });
        // Sync the edited actions from the editedCommandList
        submissionCommandList.forEach(function (command, index) {
            // console.log('Adding edited Action!', command);
            var aleForCommand = _this.actionListEditors.find(function (actLE) { return actLE.commandEditId === index; });
            // Filter out invalid Actions
            command.Actions = aleForCommand.editedActions.filter(function (act) {
                return !!act.type;
            });
        });
        return submissionCommandList;
    };
    // Updates server with the new command list
    CommandsEditComponent.prototype.sendEditedCommandListToServer = function () {
        var _this = this;
        // Filter out invalid Commands (ie, ones without names)
        this.editedCommandList = this.getValidCommandListForSubmission();
        this.commandService.updateAll(this.botId, this.editedCommandList)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (cmds) {
            console.log(cmds);
            _this.alertService.success('Commands saved!', true);
            _this.storeCommandList(cmds);
        }, function (error) {
            _this.alertService.error(error);
        });
    };
    CommandsEditComponent.prototype.createdAtSort = function (objA, objB) {
        var timeA = new Date(objA['createdAt']).getTime();
        var timeB = new Date(objB['createdAt']).getTime();
        if (timeA !== timeB || !(objA.id && objB.id))
            return timeA - timeB;
        else
            return objA.id - objB.id;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(_actions_edit_actions_edit_component__WEBPACK_IMPORTED_MODULE_1__["ActionsEditComponent"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], CommandsEditComponent.prototype, "actionListEditors", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CommandsEditComponent.prototype, "botId", void 0);
    CommandsEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-commands-edit',
            template: __webpack_require__(/*! ./commands-edit.component.html */ "./src/app/commands-edit/commands-edit.component.html"),
            styles: [__webpack_require__(/*! ./commands-edit.component.css */ "./src/app/commands-edit/commands-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["CommandService"],
            _services__WEBPACK_IMPORTED_MODULE_2__["AlertService"]])
    ], CommandsEditComponent);
    return CommandsEditComponent;
}());



/***/ }),

/***/ "./src/app/guilds-details/guilds-details.component.css":
/*!*************************************************************!*\
  !*** ./src/app/guilds-details/guilds-details.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/guilds-details/guilds-details.component.html":
/*!**************************************************************!*\
  !*** ./src/app/guilds-details/guilds-details.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 *ngIf=\"guild\">{{guild.name}}</h1>\n<div class=\"container\">\n  <div class=\"my-3 p-3 bg-white rounded box-shadow\">\n    <div class=\"container\" *ngIf=\"guild\" >\n      <!--<h4>{{guild.name}}</h4>\n        <!-- <div class=\"list-group\"  *ngFor=\"let member of guild.member\"> -->\n          <!-- <p *ngIf=\"guild.id == gid\" class=\"text-center\">{{ member }}</p> -->\n    <!-- <router-outlet></router-outlet> -->\n\n    <h6>Guild Info</h6>\n      <img src={{guild.iconURL}} alt=\"\" width=\"100\" height=\"100\">\n      <p> Number of Members: {{guild.memberCount}} </p>\n      <p> Owner of guild: {{guild.owner.username}} </p>\n      <p> Region: {{guild.region|titlecase}} </p>\n      <p> Availability: {{guild.available}} </p>\n        <!-- </div> -->\n\n    </div>\n  </div>\n</div>\n<!--         // id: guild.id,                               // string - discord id\n        // name: guild.name,                           // string - name of the guild\n        // iconURL: guild.iconURL,                     // string - url to guild's icon\n        // ownerUsername: guild.owner.user.username,   // string - Username of the owner user\n        // ownerID: guild.ownerID,                     // string - ID of the owner user\n        // memberCount: guild.memberCount,             // number - Number of members in the guild\n        // region: guild.region,                       // string - Region where guild is hosted\n        // available: guild.available  -->\n<hr>\n\n<!--\n<div class=\"container\" *ngIf=\"memberList || memberList.length !== 0\">\n  <h4>Member:</h4>\n  <div class=\"list-group\" *ngFor=\"let member of memberList\" >\n    <img src={{member.avatarURL}} width=\"40\" height=\"40\" >\n    <p> {{member.username}} </p>\n  </div>\n</div>\n-->\n<div class=\"container\">\n  <div class=\"row\">\n    <div class =\"col\">\n      <div class=\"my-3 p-3 bg-white rounded box-shadow\">\n          <h4 class=\"border-bottom border-gray pb-2 mb-0\">Members:</h4>\n          <div class=\"jumbotron text-center\" *ngIf=\"!memberList|| memberList.length === 0\">\n              <h5>You have no members right now</h5>\n          </div>\n          <div id=\"membersOnline\" *ngFor=\"let member of memberList\">\n\n            <div *ngIf=\"member.user.status == 'online'\">\n                  <div class=\"media pt-3\">\n                      <img src={{member.user.avatarURL}} alt=\"\" width=\"45\" height=\"45\"\n                      class=\"mr-2 rounded-circle avatar border\">\n                      <div class=\"media-body pb-2 mb-0 small lh-125 border-bottom border-gray\">\n                          <div class=\"d-flex\">\n                              <div class=\"d-flex flex-column w-100\">\n                                  <div>\n                                      {{ member.user.username}}\n                                      <span class=\"badge badge-pill badge-success ml-1\">Online</span>\n\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div id=\"membersDND\" *ngFor=\"let member of memberList\">\n              <div *ngIf=\"member.user.status == 'dnd'\">\n                    <div class=\"media pt-3\">\n                        <img src={{member.user.avatarURL}} alt=\"\" width=\"45\" height=\"45\"\n                        class=\"mr-2 rounded-circle avatar border\">\n                        <div class=\"media-body pb-2 mb-0 small lh-125 border-bottom border-gray\">\n                            <div class=\"d-flex\">\n                                <div class=\"d-flex flex-column w-100\">\n                                    <div>\n                                        {{ member.user.username}}\n                                        <span class=\"badge badge-pill badge-danger ml-1\">Do Not Disturb</span>\n\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n          </div>\n          <div id=\"membersIdle\" *ngFor=\"let member of memberList\">\n                <div *ngIf=\"member.user.status == 'idle'\">\n                      <div class=\"media pt-3\">\n                          <img src={{member.user.avatarURL}} alt=\"\" width=\"45\" height=\"45\"\n                          class=\"mr-2 rounded-circle avatar border\">\n                          <div class=\"media-body pb-2 mb-0 small lh-125 border-bottom border-gray\">\n                              <div class=\"d-flex\">\n                                  <div class=\"d-flex flex-column w-100\">\n                                      <div>\n                                          {{ member.user.username}}\n                                          <span class=\"badge badge-pill badge-warning ml-1\">Idle</span>\n\n                                      </div>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n          </div>\n          <div id=\"membersOffline\" *ngFor=\"let member of memberList\">\n                  <div *ngIf=\"member.user.status == 'offline'\">\n                        <div class=\"media pt-3\">\n                            <img src={{member.user.avatarURL}} alt=\"\" width=\"45\" height=\"45\"\n                            class=\"mr-2 rounded-circle avatar border\">\n                            <div class=\"media-body pb-2 mb-0 small lh-125 border-bottom border-gray\">\n                                <div class=\"d-flex\">\n                                    <div class=\"d-flex flex-column w-100\">\n                                        <div>\n                                            {{ member.user.username}}\n                                            <span class=\"badge badge-pill badge-secondary ml-1\">Offline</span>\n\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n          </div>\n        </div>\n    </div>\n\n    <div class=\"col\">\n      <div class=\"my-3 p-3 bg-white rounded box-shadow\">\n          <h4 class=\"border-bottom border-gray pb-2 mb-0\">Emojis:</h4>\n            <div class=\"container\" *ngIf=\"emojiList || emojiList.length !== 0\">\n\n              <span class=\"col-md-\" *ngFor=\"let emoji of emojiList\" >\n                <!--<p> name: {{emoji.name}}</p>-->\n                 <img src={{emoji.url}} data-toggle=\"tooltip\" title={{emoji.name}}\n                 width=\"50\" height=\"50\" class=\"mr-4 rounded-circle avatar border\">\n              </span>\n            </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n<!--\n<span class=\"badge badge-pill badge-secondary ml-1\" *ngIf=\"member.status == 'offline'\">Offline</span>\n<span class=\"badge badge-pill badge-warning ml-1\" *ngIf=\"member.status == 'idle'\">Idle</span>\n<span class=\"badge badge-pill badge-danger ml-1\" *ngIf=\"member.status == 'dnd'\">Do Not Disturb</span>\n-->\n<!--         // id: member.id,                              // string - discord id\n        // username: member.user.username,             // string - username of the user\n        // nickname: member.nickname,                  // string - nickname in the guild\n        // displayName: member.displayName,            // string - nickname, if null then username\n        // tag: member.user.tag,                       // string - discord tag of the user\n        // avatarURL: member.user.displayAvatarURL,    // string - url to the avatar pic/gif\n        // status: member.user.presence.status,        // string - 'online', 'offline', 'idle', 'dnd' - DoNotDisturb\n        // joinedAt: member.joinedAt,                  // date - when user became a member of the guild\n        // createdAt: member.user.createdAt,           // date - when the user was created\n        // bot: member.user.bot   -->\n\n<hr>\n\n\n<!--         // id: emoji.id,                               // string - discord id\n        // name: emoji.name,                           // string - name of the emoji\n        // url: emoji.url,                             // string - url where emoji is found\n        // requiresColons: emoji.requiresColons,       // bool -  true if emoji requires colons surrounding name\n        // createdAt: emoji.createdAt   -->\n\n<a [routerLink]=\"['/bots', bid]\" class=\"btn btn-link\">Back</a>\n"

/***/ }),

/***/ "./src/app/guilds-details/guilds-details.component.ts":
/*!************************************************************!*\
  !*** ./src/app/guilds-details/guilds-details.component.ts ***!
  \************************************************************/
/*! exports provided: GuildsDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuildsDetailsComponent", function() { return GuildsDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GuildsDetailsComponent = /** @class */ (function () {
    function GuildsDetailsComponent(activatedRouter, guildService, botService, alertService) {
        this.activatedRouter = activatedRouter;
        this.guildService = guildService;
        this.botService = botService;
        this.alertService = alertService;
        this.memberList = [];
        this.emojiList = [];
    }
    GuildsDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.activatedRouter.params.subscribe(function (params) {
            _this.bid = params['bid']; // (+) converts string 'id' to a number
            _this.gid = params['gid']; // (+) converts string 'id' to a number
            _this.botService.getById(_this.bid).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(function (rcvdBot) {
                if (rcvdBot.status == "ONLINE")
                    _this.loadMembersAndEmojis();
            });
        });
    };
    GuildsDetailsComponent.prototype.loadMembersAndEmojis = function () {
        var _this = this;
        this.guildService.getById(this.bid, this.gid).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(function (guild) {
            _this.guild = guild;
        });
        this.guildService.getMembers(this.bid, this.gid).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(function (member) {
            _this.memberList = member;
        });
        this.guildService.getEmojis(this.bid, this.gid).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(function (emoji) {
            _this.emojiList = emoji;
        });
    };
    GuildsDetailsComponent.prototype.ngOnDestroy = function () {
        // this.sub.unsubscribe();
    };
    GuildsDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-guilds-details',
            template: __webpack_require__(/*! ./guilds-details.component.html */ "./src/app/guilds-details/guilds-details.component.html"),
            styles: [__webpack_require__(/*! ./guilds-details.component.css */ "./src/app/guilds-details/guilds-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services__WEBPACK_IMPORTED_MODULE_2__["GuildService"],
            _services__WEBPACK_IMPORTED_MODULE_2__["BotService"],
            _services__WEBPACK_IMPORTED_MODULE_2__["AlertService"]])
    ], GuildsDetailsComponent);
    return GuildsDetailsComponent;
}());



/***/ }),

/***/ "./src/app/guilds/guilds.component.css":
/*!*********************************************!*\
  !*** ./src/app/guilds/guilds.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/guilds/guilds.component.html":
/*!**********************************************!*\
  !*** ./src/app/guilds/guilds.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"my-3 p-3 bg-white rounded box-shadow\">\n    <h4 class=\"border-bottom border-gray pb-2 mb-0\">Guilds the bot belongs to:</h4>\n    <div class=\"jumbotron text-center\" *ngIf=\"!guildList|| guildList.length === 0\">\n        <h5>You have no guilds that belong to the bot</h5>\n    </div>\n\n    <div class=\"d-flex justify-content-around flex-wrap\">\n      <div *ngFor=\"let guild of guildList\">\n\n        <div class=\"mr-3\">\n          <div class=\"media pt-3\">\n            <a [routerLink]=\"['/bots', bid, 'guilds', guild.id]\">\n              <img src=\"http://via.placeholder.com/64x64\" alt=\"\" width=\"150\" height=\"150\"\n              class=\"rounded-circle\">\n            </a>\n\n          </div>\n          <div class=\"media-body pb-2 mb-0 lh-125 border-bottom border-gray\">\n\n                <a [routerLink]=\"['/bots', bid, 'guilds', guild.id]\">\n                  <div class=\"text-truncate\" align=\"center\">{{ guild.name }}</div>\n                </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/guilds/guilds.component.ts":
/*!********************************************!*\
  !*** ./src/app/guilds/guilds.component.ts ***!
  \********************************************/
/*! exports provided: GuildsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuildsComponent", function() { return GuildsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GuildsComponent = /** @class */ (function () {
    function GuildsComponent(activatedRouter, guildService, botService, alertService) {
        this.activatedRouter = activatedRouter;
        this.guildService = guildService;
        this.botService = botService;
        this.alertService = alertService;
        this.guildList = [];
    }
    GuildsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.activatedRouter.params.subscribe(function (params) {
            _this.bid = params['bid']; // (+) converts string 'id' to a number
            _this.gid = params['gid']; // (+) converts string 'id' to a number
            _this.botService.getById(_this.bid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(function (rcvdBot) {
                var bot = rcvdBot;
                _this.loadGuilds();
            });
            // console.log(this.gid);
            //     // In a real app: dispatch action to load the details here.
        });
        //   this.loadGuilds();
    };
    GuildsComponent.prototype.loadGuilds = function () {
        var _this = this;
        this.guildService.getAll(this.bid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(function (guilds) {
            _this.guildList = guilds;
        });
    };
    GuildsComponent.prototype.closeGuilds = function () {
        this.guildList = [];
    };
    GuildsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-guilds',
            template: __webpack_require__(/*! ./guilds.component.html */ "./src/app/guilds/guilds.component.html"),
            styles: [__webpack_require__(/*! ./guilds.component.css */ "./src/app/guilds/guilds.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services__WEBPACK_IMPORTED_MODULE_2__["GuildService"],
            _services__WEBPACK_IMPORTED_MODULE_2__["BotService"],
            _services__WEBPACK_IMPORTED_MODULE_2__["AlertService"]])
    ], GuildsComponent);
    return GuildsComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-bots></app-bots>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = /** @class */ (function () {
    function HomeComponent(userService, data, formBuilder, alertService) {
        var _this = this;
        this.userService = userService;
        this.data = data;
        this.formBuilder = formBuilder;
        this.alertService = alertService;
        this.data.currentUser.subscribe(function (user) { return _this.currentUser = user; });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html") }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _services__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services__WEBPACK_IMPORTED_MODULE_2__["AlertService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/index.ts":
/*!*******************************!*\
  !*** ./src/app/home/index.ts ***!
  \*******************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]; });




/***/ }),

/***/ "./src/app/login/index.ts":
/*!********************************!*\
  !*** ./src/app/login/index.ts ***!
  \********************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]; });




/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.jumbotron {\n  background: snow ;\n  background-image: url(\"/assets/images/bgrd.gif\");\n  font-weight: 500;\n  font-family: \"Gill Sans\", sans-serif;\n  background-size: 100% 100%;\n}\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <div class=\"container\">\n      <div class=\"row align-items-center\">\n        <div class=\"col-sm-6\" >\n            <div class=\"text-center\">\n              <font size =50 color=\"white\"><p> Welcome to DisBotCito </p></font>\n              <img  src=\"/assets/images/white bot gif.gif\" alt=\"\" class = \"rounded mx-auto d-block\">\n                <!--<img  src=\"/assets/images/bot gif.gif\" alt=\"\" class = \"rounded mx-auto d-block\">-->\n            </div>\n        </div>\n          <div class=\"col-sm-6\" >\n              ﻿<font color=\"white\"><h2 class=\"text-center\">Login</h2></font>\n              <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n                  <div class=\"form-group\">\n                      <font color=\"white\"><label for=\"username\">Username</label></font>\n                      <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n                      <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"f.username.errors.required\">Username is required</div>\n                      </div>\n                  </div>\n                  <div class=\"form-group\">\n                      <font color=\"white\"><label for=\"password\">Password</label></font>\n                      <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                      <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                      </div>\n                  </div>\n                  <div class=\"form-group\">\n                      <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\n                      <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n                      <!--<a [routerLink]=\"['/forgetpw']\" class=\"btn btn-link\">Forget password</a>-->\n                      <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Register</a>\n                  </div>\n              </form>\n          </div>\n      </div>\n  </div>\n</div>\n\n\n<!-- Experimental Modal implementation\n<button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#loginModal\">\n  Login/Register\n</button>\n\n<div class=\"modal fade\" id=\"loginModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Modal title</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"form-group\">\n                <label for=\"username\">Username</label>\n                <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n                <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.username.errors.required\">Username is required</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"password\">Password</label>\n                <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\n                <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n                <a [routerLink]=\"['/forgetpw']\" class=\"btn btn-link\">Forget password</a>\n                <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Register</a>\n            </div>\n          </form>\n      </div>\n    </div>\n  </div>\n</div>\n-->\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, route, router, authenticationService, alertService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        // reset login status
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"), styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")] }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _services__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/nav/index.ts":
/*!******************************!*\
  !*** ./src/app/nav/index.ts ***!
  \******************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav.component */ "./src/app/nav/nav.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return _nav_component__WEBPACK_IMPORTED_MODULE_0__["NavComponent"]; });




/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Example taken from bootstrap -->\n<div class=\"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow\">\n  <h5 class=\"my-0 mr-md-auto font-weight-normal\" [routerLink]=\"['/']\">DisBotCito</h5>\n  <nav class=\"my-2 my-md-0 mr-md-3\" *ngIf=\"currentUser\">\n    <a class=\"p-2 text-dark\" [routerLink]=\"['/login']\">Logout</a>\n  </nav>\n</div>\n"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavComponent = /** @class */ (function () {
    function NavComponent(data) {
        this.data = data;
    }
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentUser.subscribe(function (user) { return _this.currentUser = user; });
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'nav-bar',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html")
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/register/confirmpassword.ts":
/*!*********************************************!*\
  !*** ./src/app/register/confirmpassword.ts ***!
  \*********************************************/
/*! exports provided: confirmPasswordValidation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confirmPasswordValidation", function() { return confirmPasswordValidation; });
var confirmPasswordValidation = /** @class */ (function () {
    function confirmPasswordValidation() {
    }
    confirmPasswordValidation.MatchPassword = function (AC) {
        var password = AC.get('password').value; // to get value in input tag
        var confirmPassword = AC.get('confirmpassword').value; // to get value in input tag
        if (password != confirmPassword) {
            console.log('false');
            AC.get('confirmpassword').setErrors({ MatchPassword: true });
        }
        else {
            console.log('true');
            return null;
        }
    };
    return confirmPasswordValidation;
}());



/***/ }),

/***/ "./src/app/register/index.ts":
/*!***********************************!*\
  !*** ./src/app/register/index.ts ***!
  \***********************************/
/*! exports provided: RegisterComponent, confirmPasswordValidation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.component */ "./src/app/register/register.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return _register_component__WEBPACK_IMPORTED_MODULE_0__["RegisterComponent"]; });

/* harmony import */ var _confirmpassword__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirmpassword */ "./src/app/register/confirmpassword.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "confirmPasswordValidation", function() { return _confirmpassword__WEBPACK_IMPORTED_MODULE_1__["confirmPasswordValidation"]; });





/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.jumbotron {\n  background: snow ;\n  background-image: url(\"/assets/images/bgrd.gif\");\n  font-weight: 500;\n  font-family: \"Gill Sans\", sans-serif;\n  background-size: 100% 100%;\n}\n"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <div  class=\"container\">\n    <div class=\"row align-items-center\">\n      <div class=\"col-sm-6\" >\n          <div class=\"text-center\">\n              <font size =50 color=\"white\"><p> Please register with us </p></font>\n              <!--<img  src=\"/assets/images/bot gif.gif\" alt=\"\" class = \"rounded mx-auto d-block\">-->\n              <img  src=\"/assets/images/white bot gif.gif\" alt=\"\" class = \"rounded mx-auto d-block\">\n          </div>\n      </div>\n      <div class=\"row\">\n          <div class=\"col\">\n              <font color=\"white\">﻿<h2>Register</h2></font>\n              <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n                  <div class=\"form-group\">\n                    <font color=\"white\"><label for=\"username\">Username</label></font>\n                    <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n                    <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                        <div class=\"alert alert-danger\" *ngIf=\"f.username.errors.required\">Username is required</div>\n                    </div>\n                  </div><!--Username end here-->\n                  <div class=\"form-group\">\n                      <font color=\"white\"><label for=\"email\">Email</label></font>\n                      <input type=\"email\" formControlName=\"email\" ngModel [email] class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\n                      <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                          <div class=\"alert alert-danger\" *ngIf=\"f.email.errors.required\">Email is required</div>\n                          <div class=\"alert alert-danger\" *ngIf=\"f.email.errors.email\">This is an invalid email address</div>\n                      </div>\n                  </div><!--Email end here-->\n                  <div class=\"form-group\">\n                      <font color=\"white\"><label for=\"password\">Password</label></font>\n                      <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                      <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                          <div class=\"alert alert-danger\" *ngIf=\"f.password.errors.required\">Password is required</div>\n                          <div class=\"alert alert-danger\" *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n                      </div>\n                  </div><!-- Password end here-->\n                  <div class=\"form-group\">\n                      <font color=\"white\"><label for=\"confirmpassword\">Confirm Password</label></font>\n                      <input type=\"password\" formControlName=\"confirmpassword\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.confirmpassword.errors }\" />\n                      <div *ngIf=\"submitted && f.confirmpassword.errors\" class=\"invalid-feedback\">\n                          <div class=\"alert alert-danger\" *ngIf=\"f.confirmpassword.errors.required\">Confirm Password is required</div>\n                          <div class=\"alert alert-danger\" *ngIf=\"f.confirmpassword.errors?.MatchPassword\">Password does not match</div>\n                          <!-- <div *ngIf=\"f.confirmpassword.errors.minlength\">Please enter confirm password with at least 6 characters</div> -->\n                      </div>\n                  </div><!-- Confirm Password end here-->\n                  <div class=\"form-group\">\n                      <button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>\n                      <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n                      <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Cancel</a>\n                  </div>\n              </form><!-- Form end here-->\n          </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _confirmpassword__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./confirmpassword */ "./src/app/register/confirmpassword.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, router, userService, alertService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            confirmpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }, {
            validator: _confirmpassword__WEBPACK_IMPORTED_MODULE_4__["confirmPasswordValidation"].MatchPassword
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.loading = true;
        this.userService.register(this.registerForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            _this.alertService.success('Registration successful', true);
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"), styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")] }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _services__WEBPACK_IMPORTED_MODULE_5__["AlertService"]])
    ], RegisterComponent);
    return RegisterComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Documents\School\CMPT 470\disbotcito\ng-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map