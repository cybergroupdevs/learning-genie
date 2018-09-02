webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__questionsadmin_questionsadmin_component__ = __webpack_require__("../../../../../src/app/questionsadmin/questionsadmin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users_users_component__ = __webpack_require__("../../../../../src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_1__users_users_component__["a" /* UsersComponent */] },
    { path: 'questions', component: __WEBPACK_IMPORTED_MODULE_0__questionsadmin_questionsadmin_component__["a" /* QuestionsadminComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav-bar></nav-bar>\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'QizMaster';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_service__ = __webpack_require__("../../../../../src/app/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_fusioncharts__ = __webpack_require__("../../../../fusioncharts/fusioncharts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_fusioncharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_fusioncharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_fusioncharts_fusioncharts_charts__ = __webpack_require__("../../../../fusioncharts/fusioncharts.charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_fusioncharts_fusioncharts_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_fusioncharts_fusioncharts_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_fusioncharts_themes_fusioncharts_theme_fint__ = __webpack_require__("../../../../fusioncharts/themes/fusioncharts.theme.fint.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_fusioncharts_themes_fusioncharts_theme_fint___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_fusioncharts_themes_fusioncharts_theme_fint__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular4_fusioncharts__ = __webpack_require__("../../../../angular4-fusioncharts/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__nav_bar_nav_bar_component__ = __webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__users_users_component__ = __webpack_require__("../../../../../src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__users_service__ = __webpack_require__("../../../../../src/app/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__questionsadmin_questionsadmin_component__ = __webpack_require__("../../../../../src/app/questionsadmin/questionsadmin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__questions_service__ = __webpack_require__("../../../../../src/app/questions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















__WEBPACK_IMPORTED_MODULE_11_angular4_fusioncharts__["a" /* FusionChartsModule */].fcRoot(__WEBPACK_IMPORTED_MODULE_8_fusioncharts__, __WEBPACK_IMPORTED_MODULE_9_fusioncharts_fusioncharts_charts__, __WEBPACK_IMPORTED_MODULE_10_fusioncharts_themes_fusioncharts_theme_fint__);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_13__nav_bar_nav_bar_component__["a" /* NavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_14__users_users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_16__questionsadmin_questionsadmin_component__["a" /* QuestionsadminComponent */],
                __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_18__dashboard_dashboard_component__["a" /* DashboardComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_11_angular4_fusioncharts__["a" /* FusionChartsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_12__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */].forRoot(),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_15__users_service__["a" /* UsersService */], __WEBPACK_IMPORTED_MODULE_17__questions_service__["a" /* QuestionsService */], __WEBPACK_IMPORTED_MODULE_13__nav_bar_nav_bar_component__["a" /* NavBarComponent */], __WEBPACK_IMPORTED_MODULE_0__dashboard_service__["a" /* DashboardService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment_prod__ = __webpack_require__("../../../../../src/environments/environment.prod.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var url = (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production === false ? __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].url : __WEBPACK_IMPORTED_MODULE_4__environments_environment_prod__["a" /* environment */].url);
var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json',
        'x-auth': localStorage.getItem('id_token')
    })
};
var DashboardService = /** @class */ (function () {
    function DashboardService(http) {
        this.http = http;
    }
    DashboardService.prototype.getGraphData = function () {
        return this.http.get(url + 'dashdata', httpOptions).map(function (resp) { return resp; });
    };
    DashboardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DashboardService);
    return DashboardService;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"glass\">\n    <fusioncharts [id]=\"id\" [width]=\"width\" [height]=\"height\" [type]=\"type\" [dataFormat]=\"dataFormat\" [dataSource]=\"dataSource\"></fusioncharts>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_service__ = __webpack_require__("../../../../../src/app/dashboard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(dashboardServices) {
        this.dashboardServices = dashboardServices;
        this.id = 'chart1';
        this.width = 600;
        this.height = 400;
        this.type = 'pie3d';
        this.dataFormat = 'json';
        this.title = 'Learning Genie';
    }
    DashboardComponent.prototype.makegraph = function () {
        var _this = this;
        this.dashboardServices.getGraphData().subscribe(function (data) {
            _this.dataSource = {
                'chart': {
                    'caption': 'Learning Genie',
                    'subCaption': 'Answers',
                    'showlegend': '1',
                    'showpercentvalues': '1',
                    'showpercentintooltip': '0',
                    'theme': 'fint'
                },
                'data': [
                    {
                        'label': 'Incorrect',
                        'value': data.inCorrect
                    },
                    {
                        'label': 'Correct',
                        'value': data.correct
                    },
                    {
                        'label': 'Not Answered',
                        'value': data.notAnswered
                    }
                ]
            };
        });
    };
    DashboardComponent.prototype.ngOnInit = function () {
        this.makegraph();
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__dashboard_service__["a" /* DashboardService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-signin{\n    height: 70%;\n    width: 60%;\n    margin-left:20%; \n    margin-top: 10%;\n    background-color:#fff;\n    padding: 1%;\n    border-radius: 10px;\n    color: darkslategray;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <form class=\"form-signin glass\" #f=\"ngForm\">\n    <h2 class=\"form-signin-heading\">Please sign in</h2>\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" (click)=\"loginSubmit(f)\" *ngIf=\"isLoginVisible\">\n      <span class=\"fa fa-sign-in\"></span> Log In</button>\n      <iframe name=\"theFrame\" id=\"theFrame\" height=\"400\" width=\"650\" hidden>\n        <script type=\"text/javascript\">\n          function readCookie(name) {\n              var nameEQ = name + \"=\";\n              var ca = document.cookie.split(';');\n              for (var i = 0; i < ca.length; i++) {\n                  var c = ca[i];\n                  while (c.charAt(0) == ' ') c = c.substring(1, c.length);\n                  if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);\n              }\n              return null;\n          }\n          parent.postMessage(readCookie('connect.sid'), \"http://localhost:4200/login\");\n      </script>\n      </iframe>\n      <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" (click)=\"continue(f)\" *ngIf=\"isContinueVisible\">\n        <span class=\"fa fa-sign-in\"></span> Continue</button>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nav_bar_nav_bar_component__ = __webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__("../../../../axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment_prod__ = __webpack_require__("../../../../../src/environments/environment.prod.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, navbar, http) {
        this.router = router;
        this.navbar = navbar;
        this.http = http;
        this.url = (__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].production === false ? __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].url : __WEBPACK_IMPORTED_MODULE_6__environments_environment_prod__["a" /* environment */].url);
        this.isLoginVisible = true;
        this.isContinueVisible = false;
    }
    LoginComponent.prototype.loginSubmit = function (f) {
        this.win = window.open(this.url + 'login', 'theFrame');
        this.authwin = document.getElementById('theFrame');
        this.authwin.hidden = false;
        this.isLoginVisible = false;
        this.isContinueVisible = true;
    };
    LoginComponent.prototype.continue = function (f) {
        window.addEventListener('message', function (e) {
            alert(e.data);
        }, false);
        __WEBPACK_IMPORTED_MODULE_4_axios___default.a.get(this.url + 'getuser').then(function (resp) {
            console.log(JSON.stringify(resp, null, 2));
        });
        localStorage.setItem('id_token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IkZTaW11RnJGTm9DMHNKWEdtdjEzbk5aY2VEYyIsImtpZCI6IkZTaW11RnJGTm9DMHNKWEdtdjEzbk5aY2VEYyJ9.eyJhdWQiOiIwMDQ2NjQxNC03OGNiLTQ2ZjktYThmNy0zYTM2NmI1MjI5M2UiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC85NGE3NmJiMS02MTFiLTRlYjUtYWVlNS1lMzEyMzgxYzMyY2IvIiwiaWF0IjoxNTI0MTI5OTM5LCJuYmYiOjE1MjQxMjk5MzksImV4cCI6MTUyNDEzMzgzOSwiYWlvIjoiWTJkZ1lGQVQ0NTJhdHVWMDMybWZDTkVyTEFiN1hHMTJ1bk1hYnVQVmJ6L1BZL3N1VUJvQSIsImFtciI6WyJwd2QiXSwiZmFtaWx5X25hbWUiOiJjaGF3bGEiLCJnaXZlbl9uYW1lIjoiQW5raXQiLCJpcGFkZHIiOiIxODIuNzUuMTI5LjE5NCIsIm5hbWUiOiJBbmtpdCBjaGF3bGEiLCJvaWQiOiI0ZDM5ZjdhMy04ZjZhLTRiYTItYmU0My1jMDEwZmJmZTJmMDkiLCJzdWIiOiJFdnJFMkEzRk5NTl9aS1REanNWdl9URGU1dzhsN1Bpc3NtMWRRQnFLZWNBIiwidGlkIjoiOTRhNzZiYjEtNjExYi00ZWI1LWFlZTUtZTMxMjM4MWMzMmNiIiwidW5pcXVlX25hbWUiOiJhbmtpdC5jaGF3bGFAY3lncnAuY29tIiwidXBuIjoiYW5raXQuY2hhd2xhQGN5Z3JwLmNvbSIsInV0aSI6Inpaa3lRdm9MN1VHMi16dFpPQjF0QUEiLCJ2ZXIiOiIxLjAifQ.FUNH-OlROEwqc3NqAsQBzs8X8oFZQizxGzBdQE9sgFI17gafUp6NE-R-UQCtkpy8fFy_S9lShbC5QNmKuDo3fyUiNE73LXYem_zkm8gof9rDgcsDLFEVgNHdBaR-DjnAADew3xkB2tpU4qzvZdXW6ki_POzMeJZwdqnRW4rWgGuxeu0dsmyuyJnQMTNRX_bkO-4rP3daMMHOIL_SxVHh3q823adH5FlUqr1LiJN08alSg6Z40i81M2E-m9PQIb_uYyGi5XBcGL9RBHt64X9j29iDl5mmM9LS4vp8K-PKcRaZFOehY2jv5lkDD02MHH-gSEMa8VhHNmbDL6RMzdMIYQ');
        localStorage.setItem('isAdmin', 'true');
        // this.checkLogin();
    };
    LoginComponent.prototype.checkLogin = function () {
        if (localStorage.getItem('isAdmin')) {
            this.router.navigate(['dashboard']);
        }
        else {
            alert('Login With an Admin Account');
            this.isLoginVisible = true;
            this.isContinueVisible = false;
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.checkLogin();
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_0__nav_bar_nav_bar_component__["a" /* NavBarComponent */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light navbar-expand-sm bg-primary\">\n  <a class=\"navbar-brand\" routerLink=\"\">\n    Learning Genie</a>\n  <ul class=\"navbar-nav mr-auto\" *ngIf=\"myStorage.isAdmin\">\n    <li class=\"nav-item\">\n      <a routerLink=\"dashboard\" class=\"nav-link\">\n        Dashboard\n        <span class=\"fa fa-dashboard\"></span>\n      </a>\n    </li>\n    <li class=\"nav-item\">\n      <a routerLink=\"questions\" class=\"nav-link\">\n        Questions\n        <span class=\"fa fa-question-circle\"></span>\n      </a>\n    </li>\n    <li class=\"nav-item\">\n      <a routerLink=\"users\" class=\"nav-link\">\n        Users\n        <span class=\"fa fa-users\"></span>\n      </a>\n    </li>\n\n  </ul>\n  <ul class=\"navbar-nav navbar-right\" *ngIf=\"myStorage.isAdmin\">\n    <li class=\"nav-item\">\n      <a (click)=\"logOut()\" class=\"nav-link\">\n        <span class=\"fa fa-sign-out\"></span> Log Out</a>\n    </li>\n  </ul>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(router) {
        this.router = router;
        this.myStorage = localStorage;
    }
    NavBarComponent.prototype.logOut = function () {
        localStorage.clear();
        this.router.navigate(['login']);
    };
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'nav-bar',
            template: __webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.css")]
        }),
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/questions.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment_prod__ = __webpack_require__("../../../../../src/environments/environment.prod.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var url = (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production === false ? __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].url : __WEBPACK_IMPORTED_MODULE_4__environments_environment_prod__["a" /* environment */].url);
var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json',
        'x-auth': localStorage.getItem('id_token')
    })
};
var QuestionsService = /** @class */ (function () {
    function QuestionsService(http) {
        this.http = http;
    }
    QuestionsService.prototype.getQuestions = function () {
        return this.http.get(url + 'questions', httpOptions).map(function (resp) { return resp; });
    };
    QuestionsService.prototype.getAnswers = function (id) {
        return this.http.get(url + 'questions/' + id, httpOptions).map(function (resp) { return resp; });
    };
    QuestionsService.prototype.postQuestion = function (data) {
        return this.http.post(url + 'question', data, httpOptions).map(function (resp) { return resp = resp['message']; });
    };
    QuestionsService.prototype.getQuestionsData = function (id) {
        return this.http.get(url + 'questionsdata/' + id, httpOptions).map(function (resp) { return resp; });
    };
    QuestionsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], QuestionsService);
    return QuestionsService;
}());



/***/ }),

/***/ "../../../../../src/app/questionsadmin/questionsadmin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/questionsadmin/questionsadmin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"glass\">\n  <h1>Questions</h1>\n  <button class=\"btn btn-lg btn-primary\" (click)=\"addQuesBtn()\">\n    <span class=\"fa fa-plus\"></span> Add Question\n  </button>\n  <div *ngIf=\"isQuesVisible\"></div>\n  <div *ngIf=\"isQuesAdd\">\n    <br>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"add_Ques.ques\" placeholder=\"Question\">\n    <br>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"add_Ques.team\" placeholder=\"Team\">\n    <br>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"add_Ques.keys\" placeholder=\"Keys (Seperate Keys with ',')\">\n    <br>\n    <button class=\"btn btn-lg btn-primary\" (click)=\"addQues()\">\n      <span class=\"fa fa-user-plus\"></span> Add\n    </button>\n  </div>\n</div>\n<div class=\"table-responsive glass\">\n  <table class=\"table\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th>Question</th>\n        <th>Team</th>\n        <th>Time</th>\n        <th>Options</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let question of questions;index as i\">\n        <td>{{question.ques}}</td>\n        <td>{{question.team}}</td>\n        <td>{{question.atTime | date: 'MM-dd-yyyy HH:mm:ss Z' }}</td>\n        <td>\n          <button class=\"btn btn-primary\" (click)=\"ansQuesBtn(i,content)\">\n            View Answers\n          </button>\n          <button (click)=\"makegraph(i,graphs)\" class=\"btn btn-primary\">\n            View Graphs\n          </button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Answers</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">×</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"table-responsive\">\n      <table class=\"table\">\n        <thead class=\"thead-dark\">\n          <tr>\n            <th>User</th>\n            <th>Answer</th>\n            <th>Correct</th>\n            <th>Answered At</th>\n          </tr>\n        </thead>\n        <tbody *ngFor=\"let ans of ansOfQues\">\n          <tr>\n            <td>{{ ans.u_id.email }}</td>\n            <td>{{ ans.ans }}</td>\n            <td>{{ ans.correct }}</td>\n            <td>{{ ans.atTime | date: 'MM-dd-yyyy HH:mm:ss Z' }}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Close click')\">Close</button>\n  </div>\n</ng-template>\n<ng-template #graphs let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Answers</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">×</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <fusioncharts [id]=\"id\" [width]=\"width\" [height]=\"height\" [type]=\"type\" [dataFormat]=\"dataFormat\" [dataSource]=\"dataSource\"></fusioncharts>\n  </div>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/questionsadmin/questionsadmin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionsadminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__questions_service__ = __webpack_require__("../../../../../src/app/questions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuestionsadminComponent = /** @class */ (function () {
    function QuestionsadminComponent(questionsService, modalService) {
        this.questionsService = questionsService;
        this.modalService = modalService;
        this.isQuesAdd = false;
        this.isQuesVisible = false;
        this.id = 'chart1';
        this.width = 600;
        this.height = 400;
        this.type = 'pie3d';
        this.dataFormat = 'json';
        this.title = 'Learning Genie';
    }
    QuestionsadminComponent.prototype.addQuesBtn = function () {
        this.isQuesAdd = !this.isQuesAdd;
        this.isQuesVisible = true;
        this.add_Ques = {
            ques: null,
            team: null,
            keys: null
        };
    };
    QuestionsadminComponent.prototype.ansQuesBtn = function (index, content) {
        var _this = this;
        this.questionsService.getAnswers(this.questions[index]._id).subscribe(function (data) {
            _this.ansOfQues = data;
            _this.modalService.open(content, { size: 'lg' });
        });
    };
    QuestionsadminComponent.prototype.quesInit = function () {
        var _this = this;
        this.questionsService.getQuestions().subscribe(function (data) {
            _this.questions = data.questions;
        });
    };
    QuestionsadminComponent.prototype.addQues = function () {
        var _this = this;
        var data = {
            'ques': this.add_Ques.ques,
            'team': this.add_Ques.team,
            'keys': this.add_Ques.keys,
        };
        this.questionsService.postQuestion(data).subscribe(function (resp) {
            alert(JSON.stringify(resp));
            _this.quesInit();
            _this.isQuesAdd = false;
            _this.isQuesVisible = false;
        });
    };
    QuestionsadminComponent.prototype.makegraph = function (index, graphs) {
        var _this = this;
        this.questionsService.getQuestionsData(this.questions[index]._id).subscribe(function (data) {
            _this.dataSource = {
                'chart': {
                    'caption': 'Learning Genie',
                    'subCaption': 'Answers',
                    'showlegend': '1',
                    'showpercentvalues': '1',
                    'showpercentintooltip': '0',
                    'theme': 'fint'
                },
                'data': [
                    {
                        'label': 'Incorrect',
                        'value': data.inCorrect
                    },
                    {
                        'label': 'Correct',
                        'value': data.correct
                    },
                    {
                        'label': 'Not Answered',
                        'value': data.notAnswered
                    }
                ]
            };
            _this.modalService.open(graphs, { size: 'lg' });
        });
    };
    QuestionsadminComponent.prototype.ngOnInit = function () {
        this.quesInit();
    };
    QuestionsadminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-questionsadmin',
            template: __webpack_require__("../../../../../src/app/questionsadmin/questionsadmin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/questionsadmin/questionsadmin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__questions_service__["a" /* QuestionsService */], __WEBPACK_IMPORTED_MODULE_0__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */]])
    ], QuestionsadminComponent);
    return QuestionsadminComponent;
}());



/***/ }),

/***/ "../../../../../src/app/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment_prod__ = __webpack_require__("../../../../../src/environments/environment.prod.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var url = (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production === false ? __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].url : __WEBPACK_IMPORTED_MODULE_4__environments_environment_prod__["a" /* environment */].url);
var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json',
        'x-auth': localStorage.getItem('id_token')
    })
};
var UsersService = /** @class */ (function () {
    function UsersService(http) {
        this.http = http;
    }
    UsersService.prototype.getUsers = function () {
        return this.http.get(url + 'users', httpOptions).map(function (resp) { return resp; });
    };
    UsersService.prototype.getAnswers = function (id) {
        return this.http.get(url + 'users/' + id, httpOptions).map(function (resp) { return resp; });
    };
    UsersService.prototype.getUsersData = function (id) {
        return this.http.get(url + 'usersdata/' + id, httpOptions).map(function (resp) { return resp; });
    };
    UsersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "../../../../../src/app/users/users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"glass\">\n  <div>\n    <div class=\"table-responsive\">\n      <table class=\"table\">\n        <thead class=\"thead-dark\">\n          <tr>\n            <th>E-Mail</th>\n            <th>Team</th>\n            <th>IsAdmin</th>\n            <th>Options</th>\n          </tr>\n        </thead>\n        <tbody *ngFor=\"let user of users;index as i\">\n          <tr>\n            <td>{{ user.email }}</td>\n            <td>{{ user.team }}</td>\n            <td>{{ user.isAdmin }}</td>\n            <td>\n              <button (click)=\"ansUsers(i,content)\" class=\"btn btn-primary\">\n                View Answers\n              </button>\n              <button (click)=\"makegraph(i,graphs)\" class=\"btn btn-primary\">\n                View Graphs\n              </button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Answers By User</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">×</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"table-responsive\">\n      <table class=\"table\">\n        <thead class=\"thead-dark\">\n          <tr>\n            <th>Question</th>\n            <th>Answer</th>\n            <th>Correct</th>\n            <th>Answered At</th>\n          </tr>\n        </thead>\n        <tbody *ngFor=\"let ans of ansOfUser\">\n          <tr>\n            <td>{{ ans.q_id.ques }}</td>\n            <td>{{ ans.ans }}</td>\n            <td>{{ ans.correct }}</td>\n            <td>{{ ans.atTime | date: 'MM-dd-yyyy HH:mm:ss Z' }}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Close click')\">Close</button>\n  </div>\n</ng-template>\n<ng-template #graphs let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Answers</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">×</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <fusioncharts [id]=\"id\" [width]=\"width\" [height]=\"height\" [type]=\"type\" [dataFormat]=\"dataFormat\" [dataSource]=\"dataSource\"></fusioncharts>\n  </div>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users_service__ = __webpack_require__("../../../../../src/app/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersComponent = /** @class */ (function () {
    function UsersComponent(usersService, modalService) {
        this.usersService = usersService;
        this.modalService = modalService;
        this.id = 'chart1';
        this.width = 600;
        this.height = 400;
        this.type = 'pie3d';
        this.dataFormat = 'json';
        this.title = 'Learning Genie';
    }
    UsersComponent.prototype.initUsers = function () {
        var _this = this;
        this.usersService.getUsers().subscribe(function (data) {
            _this.users = data.users;
        });
    };
    UsersComponent.prototype.ansUsers = function (index, content) {
        var _this = this;
        this.usersService.getAnswers(this.users[index]._id).subscribe(function (data) {
            _this.ansOfUser = data;
            _this.modalService.open(content, { size: 'lg' });
        });
    };
    UsersComponent.prototype.makegraph = function (index, graphs) {
        var _this = this;
        this.usersService.getUsersData(this.users[index]._id).subscribe(function (data) {
            _this.dataSource = {
                'chart': {
                    'caption': 'Learning Genie',
                    'subCaption': 'Answers',
                    'showlegend': '1',
                    'showpercentvalues': '1',
                    'showpercentintooltip': '0',
                    'theme': 'fint'
                },
                'data': [
                    {
                        'label': 'Incorrect',
                        'value': data.inCorrect
                    },
                    {
                        'label': 'Correct',
                        'value': data.correct
                    },
                    {
                        'label': 'Not Answered',
                        'value': data.notAnswered
                    }
                ]
            };
            _this.modalService.open(graphs, { size: 'lg' });
        });
    };
    UsersComponent.prototype.ngOnInit = function () {
        this.initUsers();
    };
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-users',
            template: __webpack_require__("../../../../../src/app/users/users.component.html"),
            styles: [__webpack_require__("../../../../../src/app/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__users_service__["a" /* UsersService */], __WEBPACK_IMPORTED_MODULE_0__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.prod.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    url: 'https://learning-genie777.herokuapp.com/'
};


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    url: 'https://learning-genie777.herokuapp.com/'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map