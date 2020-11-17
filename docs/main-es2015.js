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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _blog_blog_holder_blog_holder_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blog/blog-holder/blog-holder.component */ "./src/app/blog/blog-holder/blog-holder.component.ts");







const routes = [{ path: "blog/:id", component: _blog_blog_holder_blog_holder_component__WEBPACK_IMPORTED_MODULE_4__["BlogHolderComponent"] }, { path: "**", component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["APP_BASE_HREF"], useValue: "/" }], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
                providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["APP_BASE_HREF"], useValue: "/" }],
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    ngAfterViewInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "container-fluid", "p-0", 2, "position", "relative"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\n  background-color: #f4f4f4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXHByb2plY3RzXFxwb3J0Zm9saW8vc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xyXG59XHJcbiIsIjpob3N0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-root",
                templateUrl: "./app.component.html",
                styleUrls: ["./app.component.scss"],
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _home_projects_section_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/projects-section/projects.component */ "./src/app/home/projects-section/projects.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var ng_gallery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-gallery */ "./node_modules/ng-gallery/__ivy_ngcc__/fesm2015/ng-gallery.js");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/__ivy_ngcc__/fesm2015/ngx-markdown.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/buttons/fesm2015/ngx-bootstrap-buttons.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _home_hacks_section_hacks_section_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/hacks-section/hacks-section.component */ "./src/app/home/hacks-section/hacks-section.component.ts");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @scullyio/ng-lib */ "./node_modules/@scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _blog_blog_holder_blog_holder_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./blog/blog-holder/blog-holder.component */ "./src/app/blog/blog-holder/blog-holder.component.ts");





















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot(),
            ng_gallery__WEBPACK_IMPORTED_MODULE_7__["GalleryModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            ngx_markdown__WEBPACK_IMPORTED_MODULE_8__["MarkdownModule"].forRoot({ loader: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"] }),
            ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_10__["ButtonsModule"].forRoot(),
            _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_13__["ScullyLibModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _nav_nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"],
        _home_projects_section_projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"],
        _home_hacks_section_hacks_section_component__WEBPACK_IMPORTED_MODULE_12__["HacksSectionComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
        _blog_blog_holder_blog_holder_component__WEBPACK_IMPORTED_MODULE_16__["BlogHolderComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalModule"], ng_gallery__WEBPACK_IMPORTED_MODULE_7__["GalleryModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_8__["MarkdownModule"], ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_10__["ButtonsModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_13__["ScullyLibModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _nav_nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"],
                    _home_projects_section_projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"],
                    _home_hacks_section_hacks_section_component__WEBPACK_IMPORTED_MODULE_12__["HacksSectionComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
                    _blog_blog_holder_blog_holder_component__WEBPACK_IMPORTED_MODULE_16__["BlogHolderComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                    ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot(),
                    ng_gallery__WEBPACK_IMPORTED_MODULE_7__["GalleryModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                    ngx_markdown__WEBPACK_IMPORTED_MODULE_8__["MarkdownModule"].forRoot({ loader: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"] }),
                    ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_10__["ButtonsModule"].forRoot(),
                    _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_13__["ScullyLibModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/blog/blog-holder/blog-holder.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/blog/blog-holder/blog-holder.component.ts ***!
  \***********************************************************/
/*! exports provided: BlogHolderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogHolderComponent", function() { return BlogHolderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _assets_blogs_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/blogs.json */ "./src/assets/blogs.json");
var _assets_blogs_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/blogs.json */ "./src/assets/blogs.json", 1);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/__ivy_ngcc__/fesm2015/ngx-markdown.js");






class BlogHolderComponent {
    constructor(route, titleService, meta) {
        this.route = route;
        this.titleService = titleService;
        this.meta = meta;
        this.route.params.subscribe((params) => {
            const slug = params.id.toLowerCase();
            this.blog = _assets_blogs_json__WEBPACK_IMPORTED_MODULE_1__.find((b) => b.slug.toLowerCase() == slug);
            // Social
            this.titleService.setTitle(this.blog.title);
            this.meta.updateTag({ property: "og:title", content: this.blog.title });
            this.meta.updateTag({
                property: "og:description",
                content: this.blog.description,
            });
            this.meta.updateTag({
                property: "og:image",
                content: this.blog.image,
            });
            this.meta.updateTag({
                property: "og:type",
                content: "article",
            });
        });
    }
    ngOnInit() { }
}
BlogHolderComponent.ɵfac = function BlogHolderComponent_Factory(t) { return new (t || BlogHolderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"])); };
BlogHolderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogHolderComponent, selectors: [["app-blog-holder"]], decls: 2, vars: 1, consts: [["id", "blog"], [1, "markdown", 3, "src"]], template: function BlogHolderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "markdown", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.blog.markdownSrc);
    } }, directives: [ngx_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownComponent"]], styles: ["#blog[_ngcontent-%COMP%] {\n  padding: 50px;\n}\n\n@media (max-width: 540px) {\n  #blog[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9ibG9nLWhvbGRlci9EOlxccHJvamVjdHNcXHBvcnRmb2xpby9zcmNcXGFwcFxcYmxvZ1xcYmxvZy1ob2xkZXJcXGJsb2ctaG9sZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ibG9nL2Jsb2ctaG9sZGVyL2Jsb2ctaG9sZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKOztBREVBO0VBQ0k7SUFDSSxhQUFBO0VDQ047QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvYmxvZy1ob2xkZXIvYmxvZy1ob2xkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYmxvZyB7XHJcbiAgICBwYWRkaW5nOiA1MHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTQwcHgpIHtcclxuICAgICNibG9nIHtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgfVxyXG59IiwiI2Jsb2cge1xuICBwYWRkaW5nOiA1MHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTQwcHgpIHtcbiAgI2Jsb2cge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogHolderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-blog-holder",
                templateUrl: "./blog-holder.component.html",
                styleUrls: ["./blog-holder.component.scss"],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/hacks-section/hacks-section.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/home/hacks-section/hacks-section.component.ts ***!
  \***************************************************************/
/*! exports provided: HacksSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HacksSectionComponent", function() { return HacksSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _hacks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hacks */ "./src/app/home/hacks-section/hacks.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function HacksSectionComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HacksSectionComponent_div_6_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const hack_r22 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.openHack(hack_r22); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hack_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", hack_r22.thumbColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", hack_r22.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + hack_r22.thumb + ")", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"])("background-size", hack_r22.thumbSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hack_r22.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hack_r22.year);
} }
function HacksSectionComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HacksSectionComponent_span_8_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.toggleCollapsed(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A0View More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HacksSectionComponent_span_9_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HacksSectionComponent_span_9_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.toggleCollapsed(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A0View Less ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HacksSectionComponent {
    constructor() {
        this.hacks = _hacks__WEBPACK_IMPORTED_MODULE_1__["HACKS"];
        this.collapsed = true;
    }
    ngOnInit() { }
    toggleCollapsed() {
        this.collapsed = !this.collapsed;
        setTimeout(() => {
            if (this.collapsed) {
                document.querySelector('#Appathon').scrollIntoView();
            }
        }, 1);
    }
    openHack(hack) {
        window.open(hack.link, "_blank");
    }
    ngAfterViewInit() {
        const panel = $("#hacks > .resume-section-content");
        const width = panel[0].scrollWidth;
        const to = panel.scrollLeft() + ((panel.scrollLeft() >= width) ? (-width) : (width));
        console.log(to);
        // setTimeout(() => {
        //   $("#hacks > .resume-section-content").animate({
        //     scrollLeft: to
        //   }, 100000);
        // }, 10000);
    }
}
HacksSectionComponent.ɵfac = function HacksSectionComponent_Factory(t) { return new (t || HacksSectionComponent)(); };
HacksSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HacksSectionComponent, selectors: [["app-hacks-section"]], decls: 11, vars: 7, consts: [["id", "hacks", 1, "resume-section"], [1, "resume-section-content"], [1, "header"], [1, "mb-5"], [1, "hacks-list"], ["class", "card", 3, "backgroundColor", "id", "click", 4, "ngFor", "ngForOf"], ["href", "#", "class", "button", "id", "collapse", 3, "click", 4, "ngIf"], [1, "m-0"], [1, "card", 3, "id", "click"], [1, "thumb"], [1, "content"], [1, "title"], [1, "year"], ["href", "#", "id", "collapse", 1, "button", 3, "click"], [1, "fa", "fa-plus"], [1, "fa", "fa-minus"]], template: function HacksSectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Hackathons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HacksSectionComponent_div_6_Template, 7, 9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HacksSectionComponent_span_8_Template, 3, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HacksSectionComponent_span_9_Template, 3, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr", 7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.collapsed ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](7, 3, ctx.hacks, 0, 6) : ctx.hacks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.collapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.collapsed);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["SlicePipe"]], styles: [".hacks-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-left: -10px;\n  margin-bottom: 20px;\n}\n\n.card[_ngcontent-%COMP%] {\n  width: 250px;\n  min-height: 250px;\n  margin: 10px;\n  background-color: #00000012;\n  cursor: pointer;\n  transition: 200ms;\n  border-radius: 10px;\n  border: none;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n}\n\n.card[_ngcontent-%COMP%]:hover {\n  filter: brightness(50%);\n}\n\n.card[_ngcontent-%COMP%]:active {\n  filter: opacity(0.5);\n}\n\n.card[_ngcontent-%COMP%]   .thumb[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 200px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  transition: 0.5s;\n}\n\n.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n  align-items: center;\n  padding: 10px;\n  justify-content: space-between;\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0.48) 0%, rgba(0, 0, 0, 0.09) 60%, transparent 100%);\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  color: white;\n  height: 100px;\n  margin-top: -20px;\n  align-items: flex-end;\n}\n\n.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 100;\n}\n\n.button[_ngcontent-%COMP%] {\n  border: 2px solid;\n  padding: 7px 10px;\n  text-decoration: none;\n  color: #bd5d38;\n  background-color: transparent;\n  cursor: pointer;\n}\n\n.button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.button[_ngcontent-%COMP%]:hover {\n  background-color: #bd5d38;\n  color: white;\n}\n\n@media (max-width: 576px) {\n  .card[_ngcontent-%COMP%] {\n    width: 44%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9oYWNrcy1zZWN0aW9uL0Q6XFxwcm9qZWN0c1xccG9ydGZvbGlvL3NyY1xcYXBwXFxob21lXFxoYWNrcy1zZWN0aW9uXFxoYWNrcy1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hhY2tzLXNlY3Rpb24vaGFja3Mtc2VjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFFQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBRUEsMENBQUE7QUNERjs7QURHRTtFQUVJLHVCQUFBO0FDRk47O0FES0U7RUFDRSxvQkFBQTtBQ0hKOztBRE1FO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUNKSjs7QURNRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxvR0FBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUNKSjs7QURLSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0hOOztBRFFBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQ0xGOztBRE1FO0VBQ0UsZUFBQTtBQ0pKOztBRE9FO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FDTEo7O0FEU0E7RUFDRTtJQUNFLFVBQUE7RUNORjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9oYWNrcy1zZWN0aW9uL2hhY2tzLXNlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGFja3MtbGlzdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAvLyBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBtaW4taGVpZ2h0OiAyNTBweDtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDEyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiAyMDBtcztcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICAvLyBib3JkZXI6IDFweCBzb2xpZCByZ2IoMCwgMCwgMCk7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIC8vIC50aHVtYiB7XHJcbiAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg1MCUpO1xyXG4gICAgLy8gfVxyXG4gIH1cclxuICAmOmFjdGl2ZSB7XHJcbiAgICBmaWx0ZXI6IG9wYWNpdHkoMC41KTtcclxuICB9XHJcblxyXG4gIC50aHVtYiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgfVxyXG4gIC5jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2IoMCAwIDAgLyA0OCUpIDAlLCByZ2IoMCAwIDAgLyA5JSkgNjAlLCB0cmFuc3BhcmVudCAxMDAlKTtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIC50aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkO1xyXG4gIHBhZGRpbmc6IDdweCAxMHB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogI2JkNWQzODtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgc3ZnIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JkNWQzODtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gIC5jYXJkIHtcclxuICAgIHdpZHRoOiA0NCU7XHJcbiAgfVxyXG59XHJcbiIsIi5oYWNrcy1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5jYXJkIHtcbiAgd2lkdGg6IDI1MHB4O1xuICBtaW4taGVpZ2h0OiAyNTBweDtcbiAgbWFyZ2luOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMTI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMjAwbXM7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLmNhcmQ6aG92ZXIge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoNTAlKTtcbn1cbi5jYXJkOmFjdGl2ZSB7XG4gIGZpbHRlcjogb3BhY2l0eSgwLjUpO1xufVxuLmNhcmQgLnRodW1iIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cbi5jYXJkIC5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1ncm93OiAxO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDAsIDAsIDAsIDAuNDgpIDAlLCByZ2JhKDAsIDAsIDAsIDAuMDkpIDYwJSwgdHJhbnNwYXJlbnQgMTAwJSk7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG4uY2FyZCAuY29udGVudCAudGl0bGUge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG5cbi5idXR0b24ge1xuICBib3JkZXI6IDJweCBzb2xpZDtcbiAgcGFkZGluZzogN3B4IDEwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNiZDVkMzg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYnV0dG9uIHN2ZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmQ1ZDM4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuY2FyZCB7XG4gICAgd2lkdGg6IDQ0JTtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HacksSectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-hacks-section",
                templateUrl: "./hacks-section.component.html",
                styleUrls: ["./hacks-section.component.scss"],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/hacks-section/hacks.ts":
/*!*********************************************!*\
  !*** ./src/app/home/hacks-section/hacks.ts ***!
  \*********************************************/
/*! exports provided: Hack, HACKS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hack", function() { return Hack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HACKS", function() { return HACKS; });
class Hack {
}
const HACKS = [
    {
        thumb: "/assets/hacks/01_hackharvard.svg",
        thumbColor: "#EC1C24",
        title: "Hack Harvard",
        year: "2017",
        link: "https://hackharvard-2017.devpost.com/?ref_content=default&ref_feature=challenge&ref_medium=portfolio",
    },
    {
        thumb: "/assets/hacks/02_wehack2.jpg",
        thumbColor: "#1D1D1B",
        title: "WeHack 2.0",
        year: "2018",
        link: "https://www.thehindu.com/news/cities/chennai/vit-students-win-175-lakh-prize-money-in-hackathon/article25151930.ece",
    },
    {
        thumb: "/assets/hacks/03_wehack1.jpeg",
        thumbColor: "#383D40",
        title: "WeHack 1.0",
        year: "2015",
    },
    {
        thumb: "/assets/hacks/04_devspace.png",
        thumbColor: "#fff",
        title: "DevSpace",
        year: "2017",
    },
    {
        thumb: "/assets/hacks/codeplay.jpg",
        thumbColor: "#fff",
        title: "CodePlay",
        year: "2016",
        link: "https://csivit.com/",
    },
    {
        thumb: "/assets/hacks/adg.png",
        thumbColor: "#25396B",
        title: "Appathon",
        year: "2016",
        link: "https://adg-vit.github.io/premiumEvents.html"
    },
    {
        thumb: "/assets/hacks/c2c.png",
        thumbColor: "#1E1E1E",
        title: "Code2Create",
        year: "2018",
        link: "https://c2c.acmvit.in/"
    },
    {
        thumb: "/assets/hacks/kpit_smh.jpg",
        thumbColor: "#fff",
        title: "Dover Smart India Hackathon",
        year: "2018",
    },
    {
        thumb: "/assets/hacks/gdg.png",
        thumbColor: "#fff",
        title: "GDG Devfest",
        year: "2017",
        link: "https://dscvit.com/"
    },
    {
        thumb: "/assets/hacks/arcs.png",
        thumbColor: "#fff",
        title: "Arcs Hack Battle",
        year: "2017",
        link: "http://arcs.ieeecsvit.com/#hackbattle"
    },
    {
        thumb: "/assets/hacks/makeathon.png",
        thumbColor: "#000",
        title: "Select Makeathon",
        year: "2018",
        link: "https://www.facebook.com/Selectvit/"
    },
    {
        thumb: "/assets/hacks/makeathon.png",
        thumbColor: "#000",
        title: "Makeathon",
        year: "2016",
    },
    {
        thumb: "/assets/hacks/hackoverflow.png",
        thumbColor: "#00415D",
        title: "HackOverflow",
        year: "2017",
    },
    {
        thumb: "/assets/hacks/rajhack.png",
        thumbColor: "#fff",
        title: "Rajasthan Digifest Hackathon",
        year: "2018",
    },
    {
        thumb: "/assets/hacks/ieeessit.png",
        thumbColor: "#fff",
        title: "Hack4Cause IEEE SSIT",
        year: "",
        link: "https://hack4cause.ieeessitvit.co.in/"
    },
    {
        thumb: "/assets/hacks/jivox.png",
        thumbColor: "#fff",
        title: "Jivox hackathon",
        year: "2016",
    },
    {
        thumb: "/assets/hacks/jugaadathon.png",
        thumbColor: "#fff",
        title: "Jugadathon",
        year: "2017",
    },
    {
        thumb: "/assets/hacks/hasura.jpg",
        thumbColor: "#000",
        title: "Hasura HackDev Challenge",
        year: "2018",
        link: "https://www.hackerearth.com/challenges/hackathon/hasura-hackdev-challenge/"
    },
    {
        thumb: "/assets/hacks/ruralhack.png",
        thumbColor: "#313131",
        title: "Rural Development Hackathon",
        year: "2018",
        link: "https://www.hackerearth.com/challenges/hackathon/lets-hack-for-rural-development/"
    },
    {
        thumb: "/assets/hacks/devfest.png",
        thumbColor: "#fff",
        title: "DSC Devfest",
        year: "2018",
    },
    {
        thumb: "/assets/hacks/angelhack.jpg",
        thumbColor: "#fff",
        title: "Angel hack (WeWork)",
        year: "2018",
        link: "https://www.hackathon.io/wework"
    },
    {
        thumb: "/assets/hacks/siemensmakeit.jpg",
        thumbColor: "#000",
        title: "Siemens MakeIT Real",
        year: "2019",
        link: "https://www.hackerearth.com/challenges/hackathon/siemens-makeit-real-2019/"
    },
    {
        thumb: "/assets/hacks/agora.png",
        thumbColor: "#fff",
        title: "Agora hack",
        year: "2021",
        link: "https://agoraio.devpost.com/?utm_campaign=agora-io-rtchack-2018.2018-06-01"
    }
];


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _projects_section_projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects-section/projects.component */ "./src/app/home/projects-section/projects.component.ts");
/* harmony import */ var _hacks_section_hacks_section_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hacks-section/hacks-section.component */ "./src/app/home/hacks-section/hacks-section.component.ts");





class HomeComponent {
    constructor(titleService, meta) {
        this.titleService = titleService;
        this.meta = meta;
        this.title = "portfolio";
        this.lines = "";
        this.startWebsiteTimeout = null;
        this.counts = {
            awards: 12,
            hacks: 24,
            projects: 42,
        };
        this.startWebsite = this.startWebsite.bind(this);
    }
    startWebsite() {
        clearTimeout(this.startWebsiteTimeout);
        $(document).off("click", this.startWebsite);
        $(document).off("keypress", this.startWebsite);
        // $("body").addClass("slide-in-bottom");
        $(".console").fadeOut();
        setTimeout(() => {
            $("body").removeClass("hidden");
            // $("body").removeClass("slide-in-bottom");
        }, 500);
    }
    shouldShowTerminal() {
        return false;
        try {
            const v = localStorage.getItem("firstVisited");
            if (!v)
                return true;
            const timeDiff = new Date().getTime() - new Date(v).getTime();
            if (timeDiff > 60 * 60 * 1000)
                return true;
        }
        catch (err) { }
        return false;
    }
    ngAfterViewInit() {
        if (this.shouldShowTerminal()) {
            setTimeout(() => {
                this.startConsole(() => {
                    localStorage.setItem("firstVisited", new Date().toString());
                    $(document).on("keypress", this.startWebsite);
                    $(document).on("click", this.startWebsite);
                    this.startWebsiteTimeout = setTimeout(this.startWebsite, 10000);
                    console.log("Attached");
                });
            }, 1000);
        }
        else {
            $(".console").hide();
            $("body").toggleClass("hidden");
        }
        setInterval(() => {
            document
                .getElementById("scroll-icon")
                .classList.toggle("animate__fadeInDown");
        }, 5000);
        // this.titleService.setTitle("");
        // this.meta.updateTag({ name: "og:title", content: this.blog.title });
        // this.meta.updateTag({
        //   name: "og:description",
        //   content: this.blog.description,
        // });
        // this.meta.updateTag({
        //   name: "og:image",
        //   content: this.blog.image,
        // });
        // this.meta.updateTag({
        //   name: "og:type",
        //   content: "port",
        // });
    }
    startConsole(doneCallback) {
        let content = `^d050python portfolio.py
^w1000^d010
Welcome to Akram's Portfolio

AKRAM ANSARI
------------
Full Stack Developer | Blockchain Developer
^w1000
^d050"Talk is cheap. Show me the code."
- Linus Torvalds
^w1000

^d010`;
        if (this.isTouchDevice()) {
            content += "Touch anywhere on screen to continue ...";
        }
        else {
            content += "Press any key to continue ...";
        }
        let delay = 100;
        let cursor = 0;
        const printerFunc = () => {
            if (cursor >= content.length)
                return doneCallback();
            const c = content.charAt(cursor);
            if (c == "^") {
                const type = content.charAt(cursor + 1);
                switch (type) {
                    case "d":
                        delay = parseInt(content.substr(cursor + 2, cursor + 5));
                        cursor = cursor + 5;
                        setTimeout(printerFunc, delay);
                        break;
                    case "w":
                        const wait = parseInt(content.substr(cursor + 2, cursor + 6));
                        cursor = cursor + 6;
                        setTimeout(printerFunc, wait);
                        break;
                }
            }
            else {
                this.lines += c;
                cursor += 1;
                setTimeout(printerFunc, delay);
            }
        };
        $(".console").show();
        printerFunc();
    }
    isTouchDevice() {
        return "ontouchstart" in document.documentElement;
    }
    goto(id) {
        window.location.href = "#" + id;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 228, vars: 3, consts: [["id", "about", 1, "resume-section"], ["id", "about-bg", 1, ""], [1, "resume-section-content"], [1, "mb-0", "focus-in-contract-bck"], [1, "text-primary"], [1, "subheading", "mb-5"], [1, "lead", "mb-5"], ["href", "mailto:mdakram28@gmail.com"], [1, "metrics"], [1, "animate__animated", "animate__fadeInLeft", 2, "animation-delay", "1s", 3, "click"], [1, "fas", "fa-long-arrow-alt-right"], [1, "animate__animated", "animate__fadeInLeft", 2, "animation-delay", "1.2s", 3, "click"], [1, "animate__animated", "animate__fadeInLeft", 2, "animation-delay", "1.4s", 3, "click"], [1, "social-icons"], ["href", "https://www.linkedin.com/in/mdakram28/", 1, "social-icon", "animate__animated", "animate__bounceIn", 2, "animation-delay", "2.1s"], [1, "fab", "fa-linkedin-in"], ["href", "https://github.com/mdakram28/", 1, "social-icon", "animate__animated", "animate__bounceIn", 2, "animation-delay", "2.2s"], [1, "fab", "fa-github"], ["href", "https://github.com/mdakram28/", 1, "social-icon", "animate__animated", "animate__bounceIn", 2, "animation-delay", "2.3s"], [1, "fab", "fa-facebook-f"], ["id", "scroll-icon", "href", "#projects", 1, "scroll-icon", "animate__animated"], [1, "fas", "fa-chevron-down"], [1, "m-0"], ["id", "experience", 1, "resume-section"], [1, "mb-5"], [1, "d-flex", "flex-column", "flex-md-row", "justify-content-between", "mb-5"], [1, "flex-grow-1"], [1, "mb-0"], [1, "subheading", "mb-3"], [1, "flex-shrink-0"], ["id", "education", 1, "resume-section"], ["id", "skills", 1, "resume-section"], [1, "list-inline", "dev-icons"], [1, "list-inline-item"], [1, "fab", "fa-html5"], [1, "fab", "fa-css3-alt"], [1, "fab", "fa-js-square"], [1, "fab", "fa-angular"], [1, "fab", "fa-react"], [1, "fab", "fa-node-js"], [1, "fab", "fa-sass"], [1, "fab", "fa-less"], [1, "fab", "fa-wordpress"], [1, "fab", "fa-gulp"], [1, "fab", "fa-grunt"], [1, "fab", "fa-npm"], [1, "fa-ul", "mb-0"], [1, "fa-li"], [1, "fas", "fa-check"], ["id", "interests", 1, "resume-section"], ["id", "awards", 1, "resume-section"], [1, "mb-3"], [1, "fas", "fa-trophy", "text-warning"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Akram ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Ansari");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Full Stack Developer \u00B7 Blockchain Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Have a project or idea you'd like to discuss? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Let's chat ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "mdakram28@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_tr_click_17_listener() { return ctx.goto("hacks"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Hackathons ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_tr_click_24_listener() { return ctx.goto("projects"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Projects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_tr_click_31_listener() { return ctx.goto("awards"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Awards ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "hr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "app-projects-section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "app-hacks-section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "section", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h2", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h3", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Software Engineer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Schlumberger (Pune Tech Center)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Formalized the role of team Software Reliability Engineer by taking the responsibility to monitor and debug the cloud service in production environment.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Developed Data Processing applications in Microservice architecture for oil and gas industry in a team of 11 people.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Single-Handedly developed tool to assist debugging in a complex cloud environment.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "June 2019 - Present");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h3", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Software Development Intern");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Schlumberger (Pune Tech Center)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Developed scalable microservice based cloud solution for former standalone monolithic application.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "January 2019 - April 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h3", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Software Lead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "RoverX VIT, Vellore, Tamil Nadu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Lead the software team and Developed the software for the rover, Enigma 1.0, for competing in European Rover Challenge (2017) and University Rover Challenge (2018)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "March 2016 - March 2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "hr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "section", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "h2", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h3", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Vellore Institute of Technology");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Bachelor of Technology (B.Tech.)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Information Technology");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "CGPA: 9.07/10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "May 2015 - May 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "hr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "section", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "h2", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Programming Languages & Tools");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "ul", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Workflow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "ul", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, " Problem Solving ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, " Research and Analysis ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, " Event Coordination ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, " Agile Practitioner ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "hr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "section", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "h2", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Interests");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Distributed Computing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Blockchain");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Robotics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Guitar and Singing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "hr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "section", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "h2", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Awards & Certifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "ul", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "li", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "i", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "h5", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "VITAA Best project award (2018)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, " Blockchain project for a transparent farmers market ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "li", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "i", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "h5", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Hack Harvard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, " Developed an android app to match pets up for adoption to their potential owners (PetFinder). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "li", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "i", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "h5", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "li", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "i", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "h5", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "Special Achiever Award (2017)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, " For representing my university in various national and international hackathons. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "li", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "i", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "h5", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Special Achiever Award (2018)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, " For representing my university in European Rover Challenge and University Rover Challenge and meritorious academic performance. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "li", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "i", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "h5", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "European Rover Challenge (ERC 2017)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, " Achieved 1st in Asia, 6th global rank. Worked in a team of 9 people. Supervised the software department. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "li", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "i", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "h5", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "1st Prize - Honeywell WeHack (2018)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, " Developed a remote monitoring and debugging tool for software running in inaccessible locations. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "li", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "i", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "h5", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "2nd Prize - Google Developer Group Devfest (2017)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, " Blockchain media sharing platform. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.counts.hacks.toString().padStart(2, "0"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.counts.projects.toString().padStart(2, "0"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.counts.awards.toString().padStart(2, "0"));
    } }, directives: [_projects_section_projects_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsComponent"], _hacks_section_hacks_section_component__WEBPACK_IMPORTED_MODULE_3__["HacksSectionComponent"]], styles: ["#about[_ngcontent-%COMP%] {\n  max-width: none;\n  background: radial-gradient(ellipse at left top, #192633 0%, #000000 50%);\n  color: #ffffffc2;\n}\n#about[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #fff;\n}\n#about-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0px;\n  width: 100%;\n  height: 100vh;\n  background-image: url(/assets/img/silhouette.png);\n  background-position: right bottom;\n  background-repeat: no-repeat;\n  z-index: 0;\n}\n.metrics[_ngcontent-%COMP%] {\n  font-size: 20px;\n  vertical-align: middle;\n}\n.metrics[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);\n  background-size: 200% 100%;\n  background-image: linear-gradient(to right, transparent 50%, #33333373 50%);\n  background-position: 0% 0%;\n}\n.metrics[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-position: -100% 0%;\n}\n.metrics[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%]:first-child {\n  font-weight: bold;\n  font-size: 40px;\n  width: 60px;\n  color: #bd5d38;\n  cursor: pointer;\n}\n.metrics[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%]:last-child {\n  text-transform: uppercase;\n  font-weight: 500;\n  font-size: 1.5rem;\n  cursor: pointer;\n}\n.metrics[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%]:last-child   svg[_ngcontent-%COMP%] {\n  transition: 1s ease-out;\n}\n.metrics[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%]:last-child:hover {\n  color: white;\n}\n.metrics[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%]:last-child:hover   svg[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n#about[_ngcontent-%COMP%]   .resume-section-content[_ngcontent-%COMP%] {\n  position: relative;\n}\n#about[_ngcontent-%COMP%]   .resume-section-content[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n#about[_ngcontent-%COMP%]   .resume-section-content[_ngcontent-%COMP%]   .scroll-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  font-size: 40px;\n  color: #6c757df5;\n}\n#about[_ngcontent-%COMP%]   .resume-section-content[_ngcontent-%COMP%]   .scroll-icon[_ngcontent-%COMP%]:hover {\n  color: #e4e4e49c;\n}\n.console[_ngcontent-%COMP%] {\n  display: none;\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  color: white;\n  z-index: 2000;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  right: 0px;\n  left: 0px;\n  height: 100vh;\n}\n.console[_ngcontent-%COMP%]   .shell[_ngcontent-%COMP%] {\n  background-color: #292e39;\n  margin: 50px;\n  max-width: 1000px;\n  height: 600px;\n  flex: 1;\n  border-radius: 5px;\n  padding: 15px 20px;\n  overflow: auto;\n}\n.console[_ngcontent-%COMP%]   .shell[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.console[_ngcontent-%COMP%]   .shell[_ngcontent-%COMP%]   .commands[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-family: \"Lucida Console\", Monaco, monospace;\n  padding: 20px 10px;\n  white-space: pre;\n}\n.console[_ngcontent-%COMP%]   .shell[_ngcontent-%COMP%]   .commands[_ngcontent-%COMP%]   #cursor[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 12px;\n  height: 20px;\n  margin-bottom: -2px;\n  background-color: rgba(255, 255, 255, 0.774);\n}\n@media (max-width: 1000px) {\n  #about-bg[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 576px) {\n  .scroll-icon[_ngcontent-%COMP%] {\n    position: static !important;\n    float: right !important;\n  }\n\n  .shell[_ngcontent-%COMP%] {\n    margin: 20px !important;\n  }\n  .shell[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%] {\n    font-size: 15px !important;\n  }\n  .shell[_ngcontent-%COMP%]   .commands[_ngcontent-%COMP%] {\n    font-size: 15px !important;\n  }\n  .shell[_ngcontent-%COMP%]   .commands[_ngcontent-%COMP%]   #cursor[_ngcontent-%COMP%] {\n    width: 9px !important;\n    height: 15px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxccHJvamVjdHNcXHBvcnRmb2xpby9zcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZUFBQTtFQUNBLHlFQUFBO0VBQ0EsZ0JBQUE7QUNBSjtBRENJO0VBQ0UsV0FBQTtBQ0NOO0FER0U7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlEQUFBO0VBQ0EsaUNBQUE7RUFDQSw0QkFBQTtFQUNBLFVBQUE7QUNBSjtBREdFO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0FDQUo7QURLSTtFQUNFLGtEQUFBO0VBQ0EsMEJBQUE7RUFDQSwyRUFBQTtFQUNBLDBCQUFBO0FDSE47QURJTTtFQUNFLDZCQUFBO0FDRlI7QURLSTtFQUVFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0pOO0FETUk7RUFFRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDTE47QURPTTtFQUNFLHVCQUFBO0FDTFI7QURPTTtFQUNFLFlBQUE7QUNMUjtBRE1RO0VBQ0UsaUJBQUE7QUNKVjtBRFVFO0VBQ0Usa0JBQUE7QUNQSjtBRFFJO0VBQ0UscUJBQUE7QUNOTjtBRFFJO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBR0EsZUFBQTtFQUNBLGdCQUFBO0FDUk47QURTTTtFQUNFLGdCQUFBO0FDUFI7QURZRTtFQUNFLGFBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUNUSjtBRFdJO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDVE47QURXTTtFQUNFLGVBQUE7QUNUUjtBRFdNO0VBQ0UsZUFBQTtFQUNBLGdEQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ1RSO0FEV1E7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtBQ1RWO0FEbUJFO0VBQ0U7SUFDRSxhQUFBO0VDaEJKO0FBQ0Y7QURtQkU7RUFDRTtJQUNFLDJCQUFBO0lBRUEsdUJBQUE7RUNsQko7O0VEb0JFO0lBQ0UsdUJBQUE7RUNqQko7RURtQkk7SUFDRSwwQkFBQTtFQ2pCTjtFRG1CSTtJQUNFLDBCQUFBO0VDakJOO0VEa0JNO0lBQ0UscUJBQUE7SUFDQSx1QkFBQTtFQ2hCUjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiNhYm91dCB7XHJcbiAgICBtYXgtd2lkdGg6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCBsZWZ0IHRvcCwgIzE5MjYzMyAwJSwgIzAwMDAwMCA1MCUpO1xyXG4gICAgY29sb3I6ICNmZmZmZmZjMjtcclxuICAgIGgxIHtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gICNhYm91dC1iZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL3NpbGhvdWV0dGUucG5nKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGJvdHRvbTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICB6LWluZGV4OiAwO1xyXG4gIH1cclxuICBcclxuICAubWV0cmljcyB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgLy8gdHIgPiB0ZDpmaXJzdC1jaGlsZCB7XHJcbiAgICAvLyAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAvLyB9XHJcbiAgXHJcbiAgICB0ciB7XHJcbiAgICAgIHRyYW5zaXRpb246IDAuM3MgY3ViaWMtYmV6aWVyKDAuMjIsIDAuNjEsIDAuMzYsIDEpO1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgMTAwJTtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB0cmFuc3BhcmVudCA1MCUsICMzMzMzMzM3MyA1MCUpO1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSAwJTtcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEwMCUgMCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRyID4gdGQ6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAvLyB3aWR0aDogMTUwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICBjb2xvcjogI2JkNWQzODtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgdHIgPiB0ZDpsYXN0LWNoaWxkIHtcclxuICAgICAgLy8gdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgXHJcbiAgICAgIHN2ZyB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMXMgZWFzZS1vdXQ7XHJcbiAgICAgIH1cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgI2Fib3V0IC5yZXN1bWUtc2VjdGlvbi1jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC5zb2NpYWwtaWNvbnMge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbiAgICAuc2Nyb2xsLWljb24ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgLy8gcmlnaHQ6IDUwdnc7XHJcbiAgICAgIC8vIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgIGNvbG9yOiAjNmM3NTdkZjU7XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjZTRlNGU0OWM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmNvbnNvbGUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHotaW5kZXg6IDIwMDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgXHJcbiAgICAuc2hlbGwge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyZTM5O1xyXG4gICAgICBtYXJnaW46IDUwcHg7XHJcbiAgICAgIG1heC13aWR0aDogMTAwMHB4O1xyXG4gICAgICBoZWlnaHQ6IDYwMHB4O1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgXHJcbiAgICAgIC50b29sYmFyIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLmNvbW1hbmRzIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiTHVjaWRhIENvbnNvbGVcIiwgTW9uYWNvLCBtb25vc3BhY2U7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAxMHB4O1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBwcmU7XHJcbiAgXHJcbiAgICAgICAgI2N1cnNvciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICB3aWR0aDogMTJweDtcclxuICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0ycHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzc0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgOjpuZy1kZWVwIGJvZHkuaGlkZGVuIHtcclxuICAgIC8vICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gICAgI2Fib3V0LWJnIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgICAuc2Nyb2xsLWljb24ge1xyXG4gICAgICBwb3NpdGlvbjogc3RhdGljICFpbXBvcnRhbnQ7XHJcbiAgICAgIC8vIGxlZnQ6IHVuc2V0O1xyXG4gICAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5zaGVsbCB7XHJcbiAgICAgIG1hcmdpbjogMjBweCAhaW1wb3J0YW50O1xyXG4gIFxyXG4gICAgICAudG9vbGJhciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgICAgLmNvbW1hbmRzIHtcclxuICAgICAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgICAjY3Vyc29yIHtcclxuICAgICAgICAgIHdpZHRoOiA5cHggIWltcG9ydGFudDtcclxuICAgICAgICAgIGhlaWdodDogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAiLCIjYWJvdXQge1xuICBtYXgtd2lkdGg6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IGxlZnQgdG9wLCAjMTkyNjMzIDAlLCAjMDAwMDAwIDUwJSk7XG4gIGNvbG9yOiAjZmZmZmZmYzI7XG59XG4jYWJvdXQgaDEge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuI2Fib3V0LWJnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL3NpbGhvdWV0dGUucG5nKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgYm90dG9tO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB6LWluZGV4OiAwO1xufVxuXG4ubWV0cmljcyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5tZXRyaWNzIHRyIHtcbiAgdHJhbnNpdGlvbjogMC4zcyBjdWJpYy1iZXppZXIoMC4yMiwgMC42MSwgMC4zNiwgMSk7XG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJSAxMDAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHRyYW5zcGFyZW50IDUwJSwgIzMzMzMzMzczIDUwJSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDAlO1xufVxuLm1ldHJpY3MgdHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTAwJSAwJTtcbn1cbi5tZXRyaWNzIHRyID4gdGQ6Zmlyc3QtY2hpbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICB3aWR0aDogNjBweDtcbiAgY29sb3I6ICNiZDVkMzg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5tZXRyaWNzIHRyID4gdGQ6bGFzdC1jaGlsZCB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubWV0cmljcyB0ciA+IHRkOmxhc3QtY2hpbGQgc3ZnIHtcbiAgdHJhbnNpdGlvbjogMXMgZWFzZS1vdXQ7XG59XG4ubWV0cmljcyB0ciA+IHRkOmxhc3QtY2hpbGQ6aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWV0cmljcyB0ciA+IHRkOmxhc3QtY2hpbGQ6aG92ZXIgc3ZnIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbiNhYm91dCAucmVzdW1lLXNlY3Rpb24tY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiNhYm91dCAucmVzdW1lLXNlY3Rpb24tY29udGVudCAuc29jaWFsLWljb25zIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuI2Fib3V0IC5yZXN1bWUtc2VjdGlvbi1jb250ZW50IC5zY3JvbGwtaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiAjNmM3NTdkZjU7XG59XG4jYWJvdXQgLnJlc3VtZS1zZWN0aW9uLWNvbnRlbnQgLnNjcm9sbC1pY29uOmhvdmVyIHtcbiAgY29sb3I6ICNlNGU0ZTQ5Yztcbn1cblxuLmNvbnNvbGUge1xuICBkaXNwbGF5OiBub25lO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgei1pbmRleDogMjAwMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDBweDtcbiAgbGVmdDogMHB4O1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuLmNvbnNvbGUgLnNoZWxsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5MmUzOTtcbiAgbWFyZ2luOiA1MHB4O1xuICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgaGVpZ2h0OiA2MDBweDtcbiAgZmxleDogMTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuLmNvbnNvbGUgLnNoZWxsIC50b29sYmFyIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmNvbnNvbGUgLnNoZWxsIC5jb21tYW5kcyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiTHVjaWRhIENvbnNvbGVcIiwgTW9uYWNvLCBtb25vc3BhY2U7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgd2hpdGUtc3BhY2U6IHByZTtcbn1cbi5jb25zb2xlIC5zaGVsbCAuY29tbWFuZHMgI2N1cnNvciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogLTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc3NCk7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgI2Fib3V0LWJnIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLnNjcm9sbC1pY29uIHtcbiAgICBwb3NpdGlvbjogc3RhdGljICFpbXBvcnRhbnQ7XG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuc2hlbGwge1xuICAgIG1hcmdpbjogMjBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5zaGVsbCAudG9vbGJhciB7XG4gICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnNoZWxsIC5jb21tYW5kcyB7XG4gICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnNoZWxsIC5jb21tYW5kcyAjY3Vyc29yIHtcbiAgICB3aWR0aDogOXB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-home",
                templateUrl: "./home.component.html",
                styleUrls: ["./home.component.scss"],
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/projects-section/projects.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/home/projects-section/projects.component.ts ***!
  \*************************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _projects_devbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects/devbox */ "./src/app/home/projects-section/projects/devbox.ts");
/* harmony import */ var _projects_openart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects/openart */ "./src/app/home/projects-section/projects/openart.ts");
/* harmony import */ var _projects_ptcloud__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects/ptcloud */ "./src/app/home/projects-section/projects/ptcloud.ts");
/* harmony import */ var _projects_codeboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects/codeboard */ "./src/app/home/projects-section/projects/codeboard.ts");
/* harmony import */ var _projects_agroshare__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects/agroshare */ "./src/app/home/projects-section/projects/agroshare.ts");
/* harmony import */ var _projects_j3d__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects/j3d */ "./src/app/home/projects-section/projects/j3d.ts");
/* harmony import */ var ng_gallery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-gallery */ "./node_modules/ng-gallery/__ivy_ngcc__/fesm2015/ng-gallery.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/__ivy_ngcc__/fesm2015/ngx-markdown.js");













const _c0 = ["modelTemplate"];
function ProjectsComponent_div_4_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tag_r5);
} }
function ProjectsComponent_div_4_a_15_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 21);
} }
function ProjectsComponent_div_4_a_15_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00A0CODE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectsComponent_div_4_a_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectsComponent_div_4_a_15_i_1_Template, 1, 0, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProjectsComponent_div_4_a_15_span_2_Template, 2, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", link_r6.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", link_r6.type == "github");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", link_r6.type == "github");
} }
function ProjectsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_div_4_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const proj_r2 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.openProjectModal(proj_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_div_4_Template_h3_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const proj_r2 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.openProjectModal(proj_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProjectsComponent_div_4_span_9_Template, 3, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_div_4_Template_span_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const proj_r2 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.openProjectModal(proj_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Gallery \u00B7 More");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProjectsComponent_div_4_a_15_Template, 3, 3, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const proj_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", proj_r2.thumbnail_bg || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url('" + proj_r2.thumbnail + "')", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"])("background-size", proj_r2.thumbnail_size || "cover");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", proj_r2.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", proj_r2.subtitle, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", proj_r2.tags);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](proj_r2.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", proj_r2.links);
} }
function ProjectsComponent_6_ng_template_0_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tag_r16);
} }
function ProjectsComponent_6_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_6_ng_template_0_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProjectsComponent_6_ng_template_0_span_10_Template, 4, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "gallery", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "markdown", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r14.project.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r14.project.subtitle, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r14.project.tags);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r14.project.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r14.images)("thumb", false)("dots", true)("counter", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r14.project.readmeSrc);
} }
function ProjectsComponent_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProjectsComponent_6_ng_template_0_Template, 15, 9, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
} }
class ProjectsComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.projects = [
            _projects_j3d__WEBPACK_IMPORTED_MODULE_6__["ProjectJ3d"],
            _projects_agroshare__WEBPACK_IMPORTED_MODULE_5__["ProjectAgroshare"],
            _projects_codeboard__WEBPACK_IMPORTED_MODULE_4__["ProjectCodeboard"],
            _projects_ptcloud__WEBPACK_IMPORTED_MODULE_3__["ProjectPtcloud"],
            _projects_devbox__WEBPACK_IMPORTED_MODULE_1__["ProjectDevbox"],
            _projects_openart__WEBPACK_IMPORTED_MODULE_2__["ProjectOpenart"],
        ];
        this.viewType = "grid";
    }
    ngOnInit() { }
    openProjectModal(project) {
        this.project = project;
        this.images = project.gallery.map((src) => new ng_gallery__WEBPACK_IMPORTED_MODULE_7__["ImageItem"]({ src, thumb: src }));
        setTimeout(() => {
            this.modalRef = this.modalService.show(this.modelTemplate, {
                class: "modal-custom-lg",
            });
        }, 100);
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["BsModalService"])); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects-section"]], viewQuery: function ProjectsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.modelTemplate = _t.first);
    } }, decls: 7, vars: 2, consts: [["id", "projects", 1, "resume-section"], [1, "resume-section-content"], [1, "mb-5"], ["class", "project d-flex flex-column flex-md-row mb-5", 4, "ngFor", "ngForOf"], [1, "m-0"], [4, "ngIf"], [1, "project", "d-flex", "flex-column", "flex-md-row", "mb-5"], [1, "flex-shrink-0"], [1, "thumbnail", "contain", 3, "click"], [1, "flex-grow-1", "description"], [1, "heading", "mb-0", 3, "click"], [1, "subheading"], [1, "tags"], ["class", "tag", 4, "ngFor", "ngForOf"], [1, "button", 3, "click"], [1, "social-links", 2, "float", "right"], ["class", "button", "target", "blank", 3, "href", 4, "ngFor", "ngForOf"], [1, "tag"], [1, "badge", "badge-primary"], ["target", "blank", 1, "button", 3, "href"], ["class", "fab fa-github", 4, "ngIf"], [1, "fab", "fa-github"], ["modelTemplate", ""], ["id", "project-modal-body", 1, "modal-body"], [2, "float", "right"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true", 2, "font-size", "50px"], [1, "heading", "mb-0"], ["thumbPosition", "left", 3, "items", "thumb", "dots", "counter"], [1, "markdown", 3, "src"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProjectsComponent_div_4_Template, 16, 11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProjectsComponent_6_Template, 2, 0, undefined, 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.project);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], ng_gallery__WEBPACK_IMPORTED_MODULE_7__["GalleryComponent"], ngx_markdown__WEBPACK_IMPORTED_MODULE_10__["MarkdownComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.project[_ngcontent-%COMP%] {\n  background-color: white;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n  border-radius: 5px;\n}\n\n.project[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n}\n\n.project[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n  min-width: 250px;\n  height: 100%;\n  min-height: 250px;\n  background-position: center;\n  background-repeat: no-repeat;\n  cursor: pointer;\n  transition: 0.3s;\n}\n\n.project[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n\n.project[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.project[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]:hover {\n  color: #bd5d38;\n}\n\n.project[_ngcontent-%COMP%]   .subheading[_ngcontent-%COMP%] {\n  margin-bottom: 0px !important;\n}\n\n.project[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%] {\n  margin-bottom: 1rem !important;\n}\n\n.project[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%] {\n  margin-right: 6px;\n  font-size: 17px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  cursor: pointer;\n}\n\n.project[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.project[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]:hover {\n  filter: opacity(0.9);\n}\n\n.project[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.project[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  border: 2px solid;\n  padding: 7px 10px;\n  text-decoration: none;\n  color: #bd5d38;\n  background-color: transparent;\n  cursor: pointer;\n}\n\n.project[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.project[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:hover {\n  background-color: #bd5d38;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wcm9qZWN0cy1zZWN0aW9uL0Q6XFxwcm9qZWN0c1xccG9ydGZvbGlvL3NyY1xcYXBwXFxob21lXFxwcm9qZWN0cy1zZWN0aW9uXFxwcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9wcm9qZWN0cy1zZWN0aW9uL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQ0NGOztBREdBO0VBQ0UsdUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNBRjs7QURDRTtFQUNFLDJDQUFBO0FDQ0o7O0FERUU7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURDSTtFQUNFLFlBQUE7QUNDTjs7QURHRTtFQUNFLGVBQUE7QUNESjs7QURFSTtFQUNFLGNBQUE7QUNBTjs7QURJRTtFQUNFLDZCQUFBO0FDRko7O0FES0U7RUFDRSw4QkFBQTtBQ0hKOztBRElJO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtVQUFBLGlCQUFBO0VBQ0EsZUFBQTtBQ0ZOOztBREdNO0VBQ0UsWUFBQTtBQ0RSOztBREdNO0VBQ0Usb0JBQUE7QUNEUjs7QURNRTtFQUNFLGFBQUE7QUNKSjs7QURPRTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUNMSjs7QURNSTtFQUNFLGVBQUE7QUNKTjs7QURPSTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQ0xOIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9wcm9qZWN0cy1zZWN0aW9uL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNiZDVkMzg7XHJcbn1cclxuXHJcbi5wcm9qZWN0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIH1cclxuXHJcbiAgLnRodW1ibmFpbCB7XHJcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMjUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaGVhZGluZyB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY29sb3I6ICNiZDVkMzg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc3ViaGVhZGluZyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC50YWdzIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcclxuICAgIC50YWcge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcclxuICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAuYmFkZ2Uge1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgfVxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBmaWx0ZXI6IG9wYWNpdHkoMC45KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmRlc2NyaXB0aW9uIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuYnV0dG9uIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkO1xyXG4gICAgcGFkZGluZzogN3B4IDEwcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogI2JkNWQzODtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgc3ZnIHtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmQ1ZDM4O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5wcm9qZWN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLnByb2plY3Q6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLnByb2plY3QgLnRodW1ibmFpbCB7XG4gIG1pbi13aWR0aDogMjUwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLWhlaWdodDogMjUwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuLnByb2plY3QgLnRodW1ibmFpbDpob3ZlciB7XG4gIG9wYWNpdHk6IDAuNztcbn1cbi5wcm9qZWN0IC5oZWFkaW5nIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnByb2plY3QgLmhlYWRpbmc6aG92ZXIge1xuICBjb2xvcjogI2JkNWQzODtcbn1cbi5wcm9qZWN0IC5zdWJoZWFkaW5nIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG4ucHJvamVjdCAudGFncyB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcbn1cbi5wcm9qZWN0IC50YWdzIC50YWcge1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnByb2plY3QgLnRhZ3MgLnRhZyAuYmFkZ2Uge1xuICBwYWRkaW5nOiA1cHg7XG59XG4ucHJvamVjdCAudGFncyAudGFnOmhvdmVyIHtcbiAgZmlsdGVyOiBvcGFjaXR5KDAuOSk7XG59XG4ucHJvamVjdCAuZGVzY3JpcHRpb24ge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLnByb2plY3QgLmJ1dHRvbiB7XG4gIGJvcmRlcjogMnB4IHNvbGlkO1xuICBwYWRkaW5nOiA3cHggMTBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2JkNWQzODtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wcm9qZWN0IC5idXR0b24gc3ZnIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLnByb2plY3QgLmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZDVkMzg7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-projects-section",
                templateUrl: "./projects.component.html",
                styleUrls: ["./projects.component.scss"],
            }]
    }], function () { return [{ type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["BsModalService"] }]; }, { modelTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["modelTemplate"]
        }] }); })();


/***/ }),

/***/ "./src/app/home/projects-section/projects/agroshare.ts":
/*!*************************************************************!*\
  !*** ./src/app/home/projects-section/projects/agroshare.ts ***!
  \*************************************************************/
/*! exports provided: ProjectAgroshare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectAgroshare", function() { return ProjectAgroshare; });
const ProjectAgroshare = {
    title: "AgroShare",
    thumbnail: "/assets/img/proj_agroshare_1.jpg",
    tags: ["Ethereum", "Angular", "Solidity", "Truffle Framework", "Docker", "Web3"],
    subtitle: "Ethereum | Angular | Docker | Web3 | Truffle Solidity",
    description: "Keep the cash flow in Indian Agriculture so that the farmers can earn " +
        "money in a hassle-free manner without load from the bank and allow " +
        "every individual to contribute in the farming community using " +
        "blockchain which guarantees transparency,security and openness.",
    gallery: [
        "/assets/projects/agroshare/image12.png",
        "/assets/projects/agroshare/image10.png",
        "/assets/projects/agroshare/image11.png",
        "/assets/projects/agroshare/image13.png",
        "/assets/projects/agroshare/image5.jpg",
        "/assets/projects/agroshare/image7.png",
        "/assets/projects/agroshare/image1.png",
        "/assets/projects/agroshare/image2.png",
    ],
    readmeSrc: "https://raw.githubusercontent.com/mdakram28/dagro/master/README.md",
    links: [
        {
            type: "github",
            url: "https://github.com/mdakram28/dagro",
        },
    ],
};


/***/ }),

/***/ "./src/app/home/projects-section/projects/codeboard.ts":
/*!*************************************************************!*\
  !*** ./src/app/home/projects-section/projects/codeboard.ts ***!
  \*************************************************************/
/*! exports provided: ProjectCodeboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectCodeboard", function() { return ProjectCodeboard; });
const ProjectCodeboard = {
    title: "CodeBoard",
    thumbnail: "/assets/img/proj_codeboard_1.png",
    tags: ["MongoDB", "NodeJS", "Angular", "ExpressJS"],
    subtitle: "NodeJS | Angular | MongoDB",
    description: "An interactive platform for hosting coding competitions. " +
        "Create and maintain their coding profiles. " +
        "Signup and get to the admin panel to create challenges, define test cases and prizes. " +
        "Competers can test the accuracy and performance of their codes which runs in a sandbox on the nodeJS server. " +
        "Leaderboard provides live updates of scores in real time",
    gallery: [],
    links: [{
            type: "github",
            url: "https://raw.githubusercontent.com/mdakram28/codeboard/master/readme.md"
        }],
    readmeSrc: "https://github.com/mdakram28/codeboard"
};


/***/ }),

/***/ "./src/app/home/projects-section/projects/devbox.ts":
/*!**********************************************************!*\
  !*** ./src/app/home/projects-section/projects/devbox.ts ***!
  \**********************************************************/
/*! exports provided: ProjectDevbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDevbox", function() { return ProjectDevbox; });
const ProjectDevbox = {
    title: "DevBox",
    thumbnail: "/assets/img/proj_devbox_1.png",
    thumbnail_bg: "#363636",
    thumbnail_size: "contain",
    tags: ["Kubernetes", "Angular", "MongoDB", "GCP", "Python", "Flask"],
    subtitle: "A tool to automate bug classification in large microservices environment",
    description: "A tool that can detect, cluster and predict faults in microservices based" +
        " distributed cloud service using trace logs and system resource metrics from individual nodes at the time of failure.",
    gallery: [],
    links: [],
    readmeSrc: "",
};


/***/ }),

/***/ "./src/app/home/projects-section/projects/j3d.ts":
/*!*******************************************************!*\
  !*** ./src/app/home/projects-section/projects/j3d.ts ***!
  \*******************************************************/
/*! exports provided: ProjectJ3d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectJ3d", function() { return ProjectJ3d; });
const ProjectJ3d = {
    title: "3D Engine",
    thumbnail: "/assets/img/proj_j3d_1.jpg",
    thumbnail_size: "contain",
    thumbnail_bg: "#ededed",
    tags: ["Java", "Mathematics"],
    subtitle: "Some subtitle for J3D",
    description: "Efficient and Extendible 3d Engine written from scratch in java." +
        "Used perspective projection technique to translate 3D to 2D.",
    gallery: [
        "/assets/projects/j3d/screenshot_1.jpg",
        "/assets/projects/j3d/screenshot_2.jpg",
        "/assets/projects/j3d/screenshot_3.jpg",
        "/assets/projects/j3d/screenshot_4.jpg",
        "/assets/projects/j3d/screenshot_5.jpg",
        "/assets/projects/j3d/screenshot_6.jpg",
    ],
    readmeSrc: "https://raw.githubusercontent.com/mdakram28/J3D/master/readme.md",
    links: [{
            type: "github",
            url: "https://github.com/mdakram28/J3D"
        }]
};


/***/ }),

/***/ "./src/app/home/projects-section/projects/openart.ts":
/*!***********************************************************!*\
  !*** ./src/app/home/projects-section/projects/openart.ts ***!
  \***********************************************************/
/*! exports provided: ProjectOpenart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectOpenart", function() { return ProjectOpenart; });
const ProjectOpenart = {
    title: "Open Art",
    thumbnail: "/assets/img/proj_openart_1.png",
    thumbnail_bg: "#b22017",
    thumbnail_size: "contain",
    tags: ["Ethereum", "Interplanetary File System", "Blockchain", "Solidity"],
    subtitle: "Media Sharing Platform on Blockchain",
    description: "Project description",
    gallery: [],
    links: [{
            type: "github",
            url: "https://github.com/mdakram28/openart"
        }],
    readmeSrc: "https://raw.githubusercontent.com/mdakram28/openart/master/README.md"
};


/***/ }),

/***/ "./src/app/home/projects-section/projects/ptcloud.ts":
/*!***********************************************************!*\
  !*** ./src/app/home/projects-section/projects/ptcloud.ts ***!
  \***********************************************************/
/*! exports provided: ProjectPtcloud */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectPtcloud", function() { return ProjectPtcloud; });
const ProjectPtcloud = {
    title: "Pentest Cloud",
    thumbnail: "/assets/img/proj_ptcloud_2.png",
    thumbnail_bg: "white",
    thumbnail_size: "contain",
    tags: ["NodeJS", "Express", "MongoDB", "Angular", "Web Security"],
    subtitle: "Peneteration Testing on the Cloud",
    description: "Highly scalable cloud based penetration-testing tool for a security startup using microservices and job queues.",
    gallery: [],
    links: [],
    readmeSrc: "",
};


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NavComponent {
    constructor() {
    }
    ngOnInit() { }
    goto(id) {
        window.location.href = "#" + id;
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], decls: 34, vars: 0, consts: [["id", "sideNav", 1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-primary", "fixed-top"], ["href", "#page-top", 1, "navbar-brand", "js-scroll-trigger"], [1, "d-block", "d-lg-none"], [1, "d-none", "d-lg-block"], ["src", "assets/img/profile.jpg", "alt", "Profile Image", 1, "img-fluid", "img-profile", "rounded-circle", "mx-auto", "mb-2"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item"], [1, "nav-link", "js-scroll-trigger", "animate__animated", "animate__fadeInUp", 2, "animation-delay", "2.1s", 3, "click"], [1, "nav-link", "js-scroll-trigger", "animate__animated", "animate__fadeInUp", 2, "animation-delay", "2.2s", 3, "click"], [1, "nav-link", "js-scroll-trigger", "animate__animated", "animate__fadeInUp", 2, "animation-delay", "2.3s", 3, "click"], [1, "nav-link", "js-scroll-trigger", "animate__animated", "animate__fadeInUp", 2, "animation-delay", "2.4s", 3, "click"], [1, "nav-link", "js-scroll-trigger", "animate__animated", "animate__fadeInUp", 2, "animation-delay", "2.5s", 3, "click"], [1, "nav-link", "js-scroll-trigger", "animate__animated", "animate__fadeInUp", 2, "animation-delay", "2.6s", 3, "click"], [1, "nav-link", "js-scroll-trigger", "animate__animated", "animate__fadeInUp", 2, "animation-delay", "2.7s", 3, "click"], [1, "nav-link", "js-scroll-trigger", "animate__animated", "animate__fadeInUp", 2, "animation-delay", "2.8s", 3, "click"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Akram Ansari");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_11_listener() { return ctx.goto("about"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_14_listener() { return ctx.goto("projects"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_17_listener() { return ctx.goto("hacks"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Hackathons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_20_listener() { return ctx.goto("experience"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_23_listener() { return ctx.goto("education"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_26_listener() { return ctx.goto("skills"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_29_listener() { return ctx.goto("interests"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Interests");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_32_listener() { return ctx.goto("awards"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Awards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".nav-link[_ngcontent-%COMP%] {\n  -webkit-animation: none;\n          animation: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L0Q6XFxwcm9qZWN0c1xccG9ydGZvbGlvL3NyY1xcYXBwXFxuYXZcXG5hdi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHVCQUFBO1VBQUEsZUFBQTtBQ0FSIiwiZmlsZSI6InNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBtZWRpYSAobWF4LXdpZHRoOiA5OTBweCkge1xyXG4gICAgLm5hdi1saW5rIHtcclxuICAgICAgICBhbmltYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbi8vIH0iLCIubmF2LWxpbmsge1xuICBhbmltYXRpb246IG5vbmU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-nav",
                templateUrl: "./nav.component.html",
                styleUrls: ["./nav.component.scss"],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/assets/blogs.json":
/*!*******************************!*\
  !*** ./src/assets/blogs.json ***!
  \*******************************/
/*! exports provided: 0, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"title\":\"Creating your first Portfolio Website\",\"slug\":\"creating-portfolio\",\"markdownSrc\":\"https://gist.githubusercontent.com/mdakram28/f197903cfea7cf6ee40501bf621582aa/raw/c087532a3525d2d23d3a6e8bb52c1666b95fd4d3/Blog_creating-portfolio.md\"}]");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\projects\portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map