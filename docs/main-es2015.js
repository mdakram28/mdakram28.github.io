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
    } }, directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\n  background-color: #f4f4f4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FrcmFtL3BlcnNvbmFsL3Byb2plY3RzL21kYWtyYW0yOC5naXRodWIuaW8vc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XG59IiwiOmhvc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xufSJdfQ== */"] });
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
/* harmony import */ var _home_blogs_section_blogs_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./home/blogs-section/blogs.component */ "./src/app/home/blogs-section/blogs.component.ts");






















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
        _home_blogs_section_blogs_component__WEBPACK_IMPORTED_MODULE_17__["BlogsComponent"],
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
                    _home_blogs_section_blogs_component__WEBPACK_IMPORTED_MODULE_17__["BlogsComponent"],
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
/* harmony import */ var _blogs_blogs_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../blogs/blogs.json */ "./src/blogs/blogs.json");
var _blogs_blogs_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../blogs/blogs.json */ "./src/blogs/blogs.json", 1);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @scullyio/ng-lib */ "./node_modules/@scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/__ivy_ngcc__/fesm2015/ngx-markdown.js");









function BlogHolderComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "markdown", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + ctx_r30.blog.cover + ")", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r30.blog.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r30.blog.updatedAt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r30.blog.markdownSrc);
} }
class BlogHolderComponent {
    constructor(route, titleService, meta, http, srs) {
        this.route = route;
        this.titleService = titleService;
        this.meta = meta;
        this.http = http;
        this.srs = srs;
        this.articles$ = this.srs.available$;
        this.liked = false;
        this.articles$.subscribe(console.log);
        this.route.params.subscribe((params) => {
            const slug = params.id.toLowerCase();
            this.blog = _blogs_blogs_json__WEBPACK_IMPORTED_MODULE_1__.find((b) => b.slug.toLowerCase() == slug) || {
                title: "Article not found",
            };
            this.setSocialTags();
        });
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this.linkGithubRepo();
    }
    setSocialTags() {
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
    }
    linkGithubRepo() {
        //Like Button
        // let script2 = document.createElement("script");
        // script2.src = "https://buttons.github.io/buttons.js";
        // script2.setAttribute("async", "");
        // script2.setAttribute("defer", "");
        // document.getElementById("blog").appendChild(script2);
        //Comments
        let script = document.createElement("script");
        script.type = `application/javascript`;
        script.src = "https://utteranc.es/client.js";
        script.setAttribute("repo", this.blog.repo);
        script.setAttribute("issue-term", "pathname");
        script.setAttribute("theme", "github-light");
        script.setAttribute("crossorigin", "anonymous");
        script.setAttribute("async", "");
        document.getElementById("blog").appendChild(script);
    }
}
BlogHolderComponent.ɵfac = function BlogHolderComponent_Factory(t) { return new (t || BlogHolderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_5__["ScullyRoutesService"])); };
BlogHolderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogHolderComponent, selectors: [["app-blog-holder"]], decls: 3, vars: 2, consts: [[1, "bg"], [3, "src"], ["id", "blog", 4, "ngIf"], ["id", "blog"], [1, "cover"], [1, "content"], [1, "title"], [2, "width", "100px", "height", "1px", "background-color", "rgba(255, 255, 255, 0.753)", "margin", "15px 0px"], [1, "actions"], [1, "date"], [1, "markdown", 3, "src"]], template: function BlogHolderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BlogHolderComponent_div_2_Template, 11, 5, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.blog.cover, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.blog);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ngx_markdown__WEBPACK_IMPORTED_MODULE_7__["MarkdownComponent"]], styles: ["#blog[_ngcontent-%COMP%] {\n  padding: 50px;\n  max-width: 60rem;\n}\n\n.bg[_ngcontent-%COMP%] {\n  background-repeat: none;\n  background-size: cover;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  z-index: -100;\n  transform: scale(1.5);\n  filter: brightness(20%);\n}\n\n.bg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  filter: blur(50px);\n}\n\n.cover[_ngcontent-%COMP%] {\n  border-radius: 25px;\n  height: 300px;\n  width: 100%;\n  background-size: cover;\n  background-position: center;\n  margin-bottom: 10px;\n}\n\n.title[_ngcontent-%COMP%] {\n  color: white;\n  text-transform: none;\n  font-size: 80px;\n  margin-top: 50px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.actions[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n\n.markdown[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.markdown[_ngcontent-%COMP%]     h1, .markdown[_ngcontent-%COMP%]     h2, .markdown[_ngcontent-%COMP%]     h3, .markdown[_ngcontent-%COMP%]     h4 {\n  color: rgba(255, 255, 255, 0.8) !important;\n}\n\n@media (max-width: 992px) {\n  #blog[_ngcontent-%COMP%] {\n    padding: 0px;\n    max-width: 100vw;\n    overflow: hidden;\n  }\n  #blog[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%] {\n    border-radius: 0px;\n    height: 200px;\n  }\n  #blog[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 50px;\n  }\n  #blog[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    margin: 10px;\n  }\n  #blog[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .markdown[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n\n@media (min-width: 992px) {\n    #sideNav {\n    background: none !important;\n  }\n    #sideNav .navbar-brand {\n    margin-top: 50px;\n    filter: opacity(0.5);\n    transition: 0.5s ease-in-out;\n  }\n    #sideNav .navbar-brand .img-profile {\n    transition: 0.5s ease-in-out;\n    max-width: 7rem;\n    max-height: 7rem;\n  }\n    #sideNav #navbarSupportedContent {\n    filter: opacity(0);\n    transition: 0.5s ease-in-out;\n  }\n    #sideNav:hover .navbar-brand {\n    filter: opacity(1);\n  }\n    #sideNav:hover .navbar-brand .img-profile {\n    max-width: 10rem;\n    max-height: 10rem;\n  }\n    #sideNav:hover #navbarSupportedContent {\n    filter: opacity(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FrcmFtL3BlcnNvbmFsL3Byb2plY3RzL21kYWtyYW0yOC5naXRodWIuaW8vc3JjL2FwcC9ibG9nL2Jsb2ctaG9sZGVyL2Jsb2ctaG9sZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ibG9nL2Jsb2ctaG9sZGVyL2Jsb2ctaG9sZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFFQSx1QkFBQTtBQ0FGOztBRENFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREdBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQ0FGOztBREVBO0VBQ0UsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUNFRjs7QURERTtFQUNFLGVBQUE7QUNHSjs7QURDQTtFQUNFLGVBQUE7RUFDQSwrQkFBQTtBQ0VGOztBREFJOzs7O0VBSUUsMENBQUE7QUNFTjs7QURHQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7RUNBRjtFRENFO0lBQ0Usa0JBQUE7SUFDQSxhQUFBO0VDQ0o7RURDRTtJQUNFLGVBQUE7RUNDSjtFRENFO0lBQ0UsWUFBQTtFQ0NKO0VEQUk7SUFDRSxlQUFBO0VDRU47QUFDRjs7QURJRTtFQUNFO0lBQ0UsMkJBQUE7RUNGSjtFREdJO0lBQ0UsZ0JBQUE7SUFDQSxvQkFBQTtJQUNBLDRCQUFBO0VDRE47RURFTTtJQUNFLDRCQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0VDQVI7RURHSTtJQUNFLGtCQUFBO0lBQ0EsNEJBQUE7RUNETjtFRElNO0lBQ0Usa0JBQUE7RUNGUjtFREdRO0lBQ0UsZ0JBQUE7SUFDQSxpQkFBQTtFQ0RWO0VESU07SUFDRSxrQkFBQTtFQ0ZSO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ibG9nL2Jsb2ctaG9sZGVyL2Jsb2ctaG9sZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Jsb2cge1xuICBwYWRkaW5nOiA1MHB4O1xuICBtYXgtd2lkdGg6IDYwcmVtO1xufVxuXG4uYmcge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm9uZTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICByaWdodDogMHB4O1xuICBib3R0b206IDBweDtcbiAgei1pbmRleDogLTEwMDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xuICAvLyBmaWx0ZXI6IGJsdXIoNTBweCk7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygyMCUpO1xuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBmaWx0ZXI6IGJsdXIoNTBweCk7XG4gIH1cbn1cblxuLmNvdmVyIHtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi50aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZvbnQtc2l6ZTogODBweDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbi5hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBzdmcge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxufVxuXG4ubWFya2Rvd24ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gIDo6bmctZGVlcCB7XG4gICAgaDEsXG4gICAgaDIsXG4gICAgaDMsXG4gICAgaDQge1xuICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgI2Jsb2cge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLmNvdmVyIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgfVxuICAgIC50aXRsZSB7XG4gICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgfVxuICAgIC5jb250ZW50IHtcbiAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgIC5tYXJrZG93biB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuOjpuZy1kZWVwIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgI3NpZGVOYXYge1xuICAgICAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgLm5hdmJhci1icmFuZCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgIGZpbHRlcjogb3BhY2l0eSgwLjUpO1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xuICAgICAgICAuaW1nLXByb2ZpbGUge1xuICAgICAgICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgbWF4LXdpZHRoOiA3cmVtO1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDdyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICNuYXZiYXJTdXBwb3J0ZWRDb250ZW50IHtcbiAgICAgICAgZmlsdGVyOiBvcGFjaXR5KDApO1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xuICAgICAgfVxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIC5uYXZiYXItYnJhbmQge1xuICAgICAgICAgIGZpbHRlcjogb3BhY2l0eSgxKTtcbiAgICAgICAgICAuaW1nLXByb2ZpbGUge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMHJlbTtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwcmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAjbmF2YmFyU3VwcG9ydGVkQ29udGVudCB7XG4gICAgICAgICAgZmlsdGVyOiBvcGFjaXR5KDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIjYmxvZyB7XG4gIHBhZGRpbmc6IDUwcHg7XG4gIG1heC13aWR0aDogNjByZW07XG59XG5cbi5iZyB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBub25lO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIGJvdHRvbTogMHB4O1xuICB6LWluZGV4OiAtMTAwO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygyMCUpO1xufVxuLmJnIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZpbHRlcjogYmx1cig1MHB4KTtcbn1cblxuLmNvdmVyIHtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZm9udC1zaXplOiA4MHB4O1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4uYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5hY3Rpb25zIHN2ZyB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLm1hcmtkb3duIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xufVxuLm1hcmtkb3duIDo6bmctZGVlcCBoMSxcbi5tYXJrZG93biA6Om5nLWRlZXAgaDIsXG4ubWFya2Rvd24gOjpuZy1kZWVwIGgzLFxuLm1hcmtkb3duIDo6bmctZGVlcCBoNCB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCkgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICNibG9nIHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWF4LXdpZHRoOiAxMDB2dztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gICNibG9nIC5jb3ZlciB7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gIH1cbiAgI2Jsb2cgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gIH1cbiAgI2Jsb2cgLmNvbnRlbnQge1xuICAgIG1hcmdpbjogMTBweDtcbiAgfVxuICAjYmxvZyAuY29udGVudCAubWFya2Rvd24ge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIDo6bmctZGVlcCAjc2lkZU5hdiB7XG4gICAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICB9XG4gIDo6bmctZGVlcCAjc2lkZU5hdiAubmF2YmFyLWJyYW5kIHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIGZpbHRlcjogb3BhY2l0eSgwLjUpO1xuICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgOjpuZy1kZWVwICNzaWRlTmF2IC5uYXZiYXItYnJhbmQgLmltZy1wcm9maWxlIHtcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xuICAgIG1heC13aWR0aDogN3JlbTtcbiAgICBtYXgtaGVpZ2h0OiA3cmVtO1xuICB9XG4gIDo6bmctZGVlcCAjc2lkZU5hdiAjbmF2YmFyU3VwcG9ydGVkQ29udGVudCB7XG4gICAgZmlsdGVyOiBvcGFjaXR5KDApO1xuICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgOjpuZy1kZWVwICNzaWRlTmF2OmhvdmVyIC5uYXZiYXItYnJhbmQge1xuICAgIGZpbHRlcjogb3BhY2l0eSgxKTtcbiAgfVxuICA6Om5nLWRlZXAgI3NpZGVOYXY6aG92ZXIgLm5hdmJhci1icmFuZCAuaW1nLXByb2ZpbGUge1xuICAgIG1heC13aWR0aDogMTByZW07XG4gICAgbWF4LWhlaWdodDogMTByZW07XG4gIH1cbiAgOjpuZy1kZWVwICNzaWRlTmF2OmhvdmVyICNuYXZiYXJTdXBwb3J0ZWRDb250ZW50IHtcbiAgICBmaWx0ZXI6IG9wYWNpdHkoMSk7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogHolderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-blog-holder",
                templateUrl: "./blog-holder.component.html",
                styleUrls: ["./blog-holder.component.scss"],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_5__["ScullyRoutesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/blogs-section/blogs.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/home/blogs-section/blogs.component.ts ***!
  \*******************************************************/
/*! exports provided: BlogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogsComponent", function() { return BlogsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _blogs_blogs_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../blogs/blogs.json */ "./src/blogs/blogs.json");
var _blogs_blogs_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../blogs/blogs.json */ "./src/blogs/blogs.json", 1);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = ["modelTemplate"];
function BlogsComponent_div_4_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tag_r35);
} }
function BlogsComponent_div_4_a_16_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 22);
} }
function BlogsComponent_div_4_a_16_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00A0Github Repo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BlogsComponent_div_4_a_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BlogsComponent_div_4_a_16_i_1_Template, 1, 0, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BlogsComponent_div_4_a_16_span_2_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", link_r36.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", link_r36.type == "github");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", link_r36.type == "github");
} }
function BlogsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BlogsComponent_div_4_span_10_Template, 3, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Read More");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, BlogsComponent_div_4_a_16_Template, 3, 3, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", post_r32.cover || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", "/blog/" + post_r32.slug, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url('" + post_r32.cover + "')", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"])("background-size", "cover");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", "/blog/" + post_r32.slug, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", post_r32.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", post_r32.updatedAt, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", post_r32.tags);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r32.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", "/blog/" + post_r32.slug, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", post_r32.links);
} }
class BlogsComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.viewType = "grid";
        this.blogPosts = _blogs_blogs_json__WEBPACK_IMPORTED_MODULE_1__;
    }
    ngOnInit() { }
}
BlogsComponent.ɵfac = function BlogsComponent_Factory(t) { return new (t || BlogsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"])); };
BlogsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogsComponent, selectors: [["app-blogs-section"]], viewQuery: function BlogsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.modelTemplate = _t.first);
    } }, decls: 6, vars: 1, consts: [["id", "blog", 1, "resume-section"], [1, "resume-section-content"], [1, "mb-5"], ["class", "blogpost d-flex flex-column flex-md-row mb-5", 4, "ngFor", "ngForOf"], [1, "m-0"], [1, "blogpost", "d-flex", "flex-column", "flex-md-row", "mb-5"], [1, "flex-shrink-0", 3, "href"], [1, "thumbnail", "contain"], [1, "flex-grow-1", "description"], [3, "href"], [1, "heading", "mb-0"], [1, "subheading"], [1, "tags"], ["class", "tag", 4, "ngFor", "ngForOf"], [1, "button", 3, "href"], [1, "social-links", 2, "float", "right"], ["class", "button", "target", "blank", 3, "href", 4, "ngFor", "ngForOf"], [1, "tag"], [1, "badge", "badge-primary"], ["target", "blank", 1, "button", 3, "href"], ["class", "fab fa-github", 4, "ngIf"], [4, "ngIf"], [1, "fab", "fa-github"]], template: function BlogsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Blog Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BlogsComponent_div_4_Template, 17, 14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.blogPosts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.blogpost[_ngcontent-%COMP%] {\n  background-color: white;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n  border-radius: 5px;\n}\n\n.blogpost[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n}\n\n.blogpost[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n  min-width: 250px;\n  height: 100%;\n  min-height: 250px;\n  background-position: center;\n  background-repeat: no-repeat;\n  cursor: pointer;\n  transition: 0.3s;\n}\n\n.blogpost[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n\n.blogpost[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.blogpost[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]:hover {\n  color: #bd5d38;\n}\n\n.blogpost[_ngcontent-%COMP%]   .subheading[_ngcontent-%COMP%] {\n  margin-bottom: 0px !important;\n}\n\n.blogpost[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%] {\n  margin-bottom: 1rem !important;\n}\n\n.blogpost[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%] {\n  margin-right: 6px;\n  font-size: 17px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  cursor: pointer;\n}\n\n.blogpost[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.blogpost[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]:hover {\n  filter: opacity(0.9);\n}\n\n.blogpost[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.blogpost[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  border: 2px solid;\n  padding: 7px 10px;\n  text-decoration: none;\n  color: #bd5d38;\n  background-color: transparent;\n  cursor: pointer;\n}\n\n.blogpost[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.blogpost[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:hover {\n  background-color: #bd5d38;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FrcmFtL3BlcnNvbmFsL3Byb2plY3RzL21kYWtyYW0yOC5naXRodWIuaW8vc3JjL2FwcC9ob21lL2Jsb2dzLXNlY3Rpb24vYmxvZ3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvYmxvZ3Mtc2VjdGlvbi9ibG9ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUNDRjs7QURHQTtFQUNFLHVCQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQUY7O0FEQ0U7RUFDRSwyQ0FBQTtBQ0NKOztBREVFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQUo7O0FEQ0k7RUFDRSxZQUFBO0FDQ047O0FER0U7RUFDRSxlQUFBO0FDREo7O0FERUk7RUFDRSxjQUFBO0FDQU47O0FESUU7RUFDRSw2QkFBQTtBQ0ZKOztBREtFO0VBQ0UsOEJBQUE7QUNISjs7QURJSTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtFQUNBLGVBQUE7QUNGTjs7QURHTTtFQUNFLFlBQUE7QUNEUjs7QURHTTtFQUNFLG9CQUFBO0FDRFI7O0FETUU7RUFDRSxhQUFBO0FDSko7O0FET0U7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FDTEo7O0FETUk7RUFDRSxlQUFBO0FDSk47O0FET0k7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUNMTiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYmxvZ3Mtc2VjdGlvbi9ibG9ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNiZDVkMzg7XG59XG5cbi5ibG9ncG9zdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgJjpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgfVxuXG4gIC50aHVtYm5haWwge1xuICAgIG1pbi13aWR0aDogMjUwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDI1MHB4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgICY6aG92ZXIge1xuICAgICAgb3BhY2l0eTogMC43O1xuICAgIH1cbiAgfVxuXG4gIC5oZWFkaW5nIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogI2JkNWQzODtcbiAgICB9XG4gIH1cblxuICAuc3ViaGVhZGluZyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAudGFncyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xuICAgIC50YWcge1xuICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIC5iYWRnZSB7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgIH1cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBmaWx0ZXI6IG9wYWNpdHkoMC45KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuZGVzY3JpcHRpb24ge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cblxuICAuYnV0dG9uIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZDtcbiAgICBwYWRkaW5nOiA3cHggMTBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICNiZDVkMzg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHN2ZyB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmQ1ZDM4O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgfVxufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmJsb2dwb3N0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmJsb2dwb3N0OmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbi5ibG9ncG9zdCAudGh1bWJuYWlsIHtcbiAgbWluLXdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4taGVpZ2h0OiAyNTBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG4uYmxvZ3Bvc3QgLnRodW1ibmFpbDpob3ZlciB7XG4gIG9wYWNpdHk6IDAuNztcbn1cbi5ibG9ncG9zdCAuaGVhZGluZyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5ibG9ncG9zdCAuaGVhZGluZzpob3ZlciB7XG4gIGNvbG9yOiAjYmQ1ZDM4O1xufVxuLmJsb2dwb3N0IC5zdWJoZWFkaW5nIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG4uYmxvZ3Bvc3QgLnRhZ3Mge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XG59XG4uYmxvZ3Bvc3QgLnRhZ3MgLnRhZyB7XG4gIG1hcmdpbi1yaWdodDogNnB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYmxvZ3Bvc3QgLnRhZ3MgLnRhZyAuYmFkZ2Uge1xuICBwYWRkaW5nOiA1cHg7XG59XG4uYmxvZ3Bvc3QgLnRhZ3MgLnRhZzpob3ZlciB7XG4gIGZpbHRlcjogb3BhY2l0eSgwLjkpO1xufVxuLmJsb2dwb3N0IC5kZXNjcmlwdGlvbiB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4uYmxvZ3Bvc3QgLmJ1dHRvbiB7XG4gIGJvcmRlcjogMnB4IHNvbGlkO1xuICBwYWRkaW5nOiA3cHggMTBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2JkNWQzODtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5ibG9ncG9zdCAuYnV0dG9uIHN2ZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5ibG9ncG9zdCAuYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JkNWQzODtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-blogs-section",
                templateUrl: "./blogs.component.html",
                styleUrls: ["./blogs.component.scss"],
            }]
    }], function () { return [{ type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] }]; }, { modelTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["modelTemplate"]
        }] }); })();


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




function HacksSectionComponent_div_6_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HacksSectionComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HacksSectionComponent_div_6_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const hack_r22 = ctx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.openHack(hack_r22); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HacksSectionComponent_div_6_span_1_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hack_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", hack_r22.thumbColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", hack_r22.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", hack_r22.winner);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + hack_r22.thumb + ")", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"])("background-size", hack_r22.thumbSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hack_r22.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hack_r22.year);
} }
function HacksSectionComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HacksSectionComponent_span_8_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.toggleCollapsed(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A0View More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HacksSectionComponent_span_9_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HacksSectionComponent_span_9_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.toggleCollapsed(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 18);
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
HacksSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HacksSectionComponent, selectors: [["app-hacks-section"]], decls: 11, vars: 7, consts: [["id", "hacks", 1, "resume-section"], [1, "resume-section-content"], [1, "header"], [1, "mb-5"], [1, "hacks-list"], ["class", "card", 3, "backgroundColor", "id", "click", 4, "ngFor", "ngForOf"], ["href", "#", "class", "button", "id", "collapse", 3, "click", 4, "ngIf"], [1, "m-0"], [1, "card", 3, "id", "click"], ["class", "ribbon", 4, "ngIf"], [1, "thumb"], [1, "content"], [1, "title"], [1, "year"], [1, "ribbon"], [1, "fas", "fa-trophy", "winner"], ["href", "#", "id", "collapse", 1, "button", 3, "click"], [1, "fa", "fa-plus"], [1, "fa", "fa-minus"]], template: function HacksSectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Hackathons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HacksSectionComponent_div_6_Template, 8, 10, "div", 5);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["SlicePipe"]], styles: [".hacks-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-left: -10px;\n  margin-bottom: 20px;\n}\n\n.card[_ngcontent-%COMP%] {\n  width: 250px;\n  min-height: 250px;\n  margin: 10px;\n  background-color: #00000012;\n  cursor: pointer;\n  transition: 100ms ease-out;\n  border-radius: 10px;\n  border: none;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n}\n\n.card[_ngcontent-%COMP%]:hover {\n  filter: brightness(120%);\n  transform: scale(1.1);\n  z-index: 10000;\n  box-shadow: 0 4px 15px 10px rgba(0, 0, 0, 0.2);\n}\n\n.card[_ngcontent-%COMP%]:active {\n  filter: opacity(0.5);\n}\n\n.card[_ngcontent-%COMP%]   .ribbon[_ngcontent-%COMP%] {\n  background-color: #bd5d38;\n  display: block;\n  position: absolute;\n  top: 0px;\n  left: 10px;\n  font-size: 20px;\n  padding: 15px 10px;\n  color: wheat;\n  clip: rect(0px, 60px, 200px, 0px);\n  animation: unfold 1s ease-in;\n}\n\n.card[_ngcontent-%COMP%]   .thumb[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 200px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  transition: 0.5s;\n}\n\n.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n  align-items: center;\n  padding: 10px;\n  justify-content: space-between;\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0.48) 0%, rgba(0, 0, 0, 0.09) 60%, transparent 100%);\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  color: white;\n  height: 100px;\n  margin-top: -20px;\n  align-items: flex-end;\n}\n\n.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 100;\n}\n\n.button[_ngcontent-%COMP%] {\n  border: 2px solid;\n  padding: 7px 10px;\n  text-decoration: none;\n  color: #bd5d38;\n  background-color: transparent;\n  cursor: pointer;\n}\n\n.button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.button[_ngcontent-%COMP%]:hover {\n  background-color: #bd5d38;\n  color: white;\n}\n\n@media (max-width: 576px) {\n  .card[_ngcontent-%COMP%] {\n    width: 44%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FrcmFtL3BlcnNvbmFsL3Byb2plY3RzL21kYWtyYW0yOC5naXRodWIuaW8vc3JjL2FwcC9ob21lL2hhY2tzLXNlY3Rpb24vaGFja3Mtc2VjdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9oYWNrcy1zZWN0aW9uL2hhY2tzLXNlY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBRUEsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUVBLDBDQUFBO0FDREY7O0FER0U7RUFFRSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLDhDQUFBO0FDRko7O0FES0U7RUFDRSxvQkFBQTtBQ0hKOztBRE1FO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUVBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLDRCQUFBO0FDTEo7O0FEMEJFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUN4Qko7O0FEMEJFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG9HQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQ3hCSjs7QUR5Qkk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUN2Qk47O0FENEJBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQ3pCRjs7QUQwQkU7RUFDRSxlQUFBO0FDeEJKOztBRDJCRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQ3pCSjs7QUQ2QkE7RUFDRTtJQUNFLFVBQUE7RUMxQkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaGFja3Mtc2VjdGlvbi9oYWNrcy1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhhY2tzLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICAvLyBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmNhcmQge1xuICB3aWR0aDogMjUwcHg7XG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xuICBtYXJnaW46IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAxMjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAxMDBtcyBlYXNlLW91dDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiBub25lO1xuICAvLyBib3JkZXI6IDFweCBzb2xpZCByZ2IoMCwgMCwgMCk7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcblxuICAmOmhvdmVyIHtcbiAgICAvLyAudGh1bWIge1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMjAlKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgei1pbmRleDogMTAwMDA7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAvLyB9XG4gIH1cbiAgJjphY3RpdmUge1xuICAgIGZpbHRlcjogb3BhY2l0eSgwLjUpO1xuICB9XG5cbiAgLnJpYmJvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JkNWQzODtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwcHg7XG4gICAgbGVmdDogMTBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcGFkZGluZzogMTVweCAxMHB4O1xuICAgIC8vIGZpbHRlcjogZHJvcC1zaGFkb3coMnB4IDJweCAxcHggIzExMSk7XG4gICAgY29sb3I6IHdoZWF0O1xuICAgIGNsaXA6IHJlY3QoMHB4LCA2MHB4LCAyMDBweCwgMHB4KTtcbiAgICBhbmltYXRpb246IHVuZm9sZCAxcyBlYXNlLWluO1xuICAgIC8vICY6YmVmb3JlIHtcbiAgICAvLyAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLy8gICB6LWluZGV4OiAyO1xuICAgIC8vICAgbGVmdDogMDtcbiAgICAvLyAgIGJvdHRvbTogLTIxLjFweDtcbiAgICAvLyAgIGJvcmRlci1sZWZ0OiAyMS4ycHggc29saWQgI2JkNWQzODtcbiAgICAvLyAgIGJvcmRlci1yaWdodDogMjEuMnB4IHNvbGlkICNiZDVkMzg7XG4gICAgLy8gICBib3JkZXItYm90dG9tOiAyMS4ycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgLy8gfVxuICB9XG4gIC53aW5uZXIge1xuICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvLyBmb250LXNpemU6IDMwcHg7XG4gICAgLy8gdG9wOiAxMHB4O1xuICAgIC8vIGxlZnQ6IDEwcHg7XG4gICAgLy8gY29sb3I6ICNkZDdjNTU7XG4gICAgLy8gZmlsdGVyOiBkcm9wLXNoYWRvdygxcHggMXB4IDJweCAjMTExKTtcbiAgfVxuXG4gIC50aHVtYiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMjAwcHg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG4gIH1cbiAgLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYigwIDAgMCAvIDQ4JSkgMCUsIHJnYigwIDAgMCAvIDklKSA2MCUsIHRyYW5zcGFyZW50IDEwMCUpO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIC50aXRsZSB7XG4gICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICBmb250LXdlaWdodDogMTAwO1xuICAgIH1cbiAgfVxufVxuXG4uYnV0dG9uIHtcbiAgYm9yZGVyOiAycHggc29saWQ7XG4gIHBhZGRpbmc6IDdweCAxMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjYmQ1ZDM4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBzdmcge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZDVkMzg7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuY2FyZCB7XG4gICAgd2lkdGg6IDQ0JTtcbiAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgdW5mb2xkIHtcbiAgZnJvbSB7XG4gICAgY2xpcDogcmVjdCgwcHgsIDYwcHgsIDBweCwgMHB4KTtcbiAgfVxuICB0byB7XG4gICAgY2xpcDogcmVjdCgwcHgsIDYwcHgsIDIwMHB4LCAwcHgpO1xuICB9XG59XG4iLCIuaGFja3MtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uY2FyZCB7XG4gIHdpZHRoOiAyNTBweDtcbiAgbWluLWhlaWdodDogMjUwcHg7XG4gIG1hcmdpbjogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDEyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDEwMG1zIGVhc2Utb3V0O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbi5jYXJkOmhvdmVyIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEyMCUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIHotaW5kZXg6IDEwMDAwO1xuICBib3gtc2hhZG93OiAwIDRweCAxNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLmNhcmQ6YWN0aXZlIHtcbiAgZmlsdGVyOiBvcGFjaXR5KDAuNSk7XG59XG4uY2FyZCAucmliYm9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JkNWQzODtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogMTVweCAxMHB4O1xuICBjb2xvcjogd2hlYXQ7XG4gIGNsaXA6IHJlY3QoMHB4LCA2MHB4LCAyMDBweCwgMHB4KTtcbiAgYW5pbWF0aW9uOiB1bmZvbGQgMXMgZWFzZS1pbjtcbn1cbi5jYXJkIC50aHVtYiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG4uY2FyZCAuY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZ3JvdzogMTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgwLCAwLCAwLCAwLjQ4KSAwJSwgcmdiYSgwLCAwLCAwLCAwLjA5KSA2MCUsIHRyYW5zcGFyZW50IDEwMCUpO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuLmNhcmQgLmNvbnRlbnQgLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogMTAwO1xufVxuXG4uYnV0dG9uIHtcbiAgYm9yZGVyOiAycHggc29saWQ7XG4gIHBhZGRpbmc6IDdweCAxMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjYmQ1ZDM4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmJ1dHRvbiBzdmcge1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JkNWQzODtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmNhcmQge1xuICAgIHdpZHRoOiA0NCU7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyB1bmZvbGQge1xuICBmcm9tIHtcbiAgICBjbGlwOiByZWN0KDBweCwgNjBweCwgMHB4LCAwcHgpO1xuICB9XG4gIHRvIHtcbiAgICBjbGlwOiByZWN0KDBweCwgNjBweCwgMjAwcHgsIDBweCk7XG4gIH1cbn0iXX0= */"] });
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
        winner: true,
    },
    {
        thumb: "/assets/hacks/03_wehack1.jpeg",
        thumbColor: "#383D40",
        title: "WeHack 1.0",
        year: "2015",
        winner: true,
    },
    {
        thumb: "/assets/hacks/04_devspace.png",
        thumbColor: "#fff",
        title: "DevSpace",
        year: "2017",
        winner: true,
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
        link: "https://adg-vit.github.io/premiumEvents.html",
        winner: true,
    },
    {
        thumb: "/assets/hacks/c2c.png",
        thumbColor: "#1E1E1E",
        title: "Code2Create",
        year: "2018",
        link: "https://c2c.acmvit.in/",
        winner: true,
    },
    {
        thumb: "/assets/hacks/kpit_smh.jpg",
        thumbColor: "#fff",
        title: "Dover Smart India Hackathon",
        year: "2018",
        winner: true,
    },
    {
        thumb: "/assets/hacks/gdg.png",
        thumbColor: "#fff",
        title: "GDG Devfest",
        year: "2017",
        link: "https://dscvit.com/",
        winner: true,
    },
    {
        thumb: "/assets/hacks/arcs.png",
        thumbColor: "#fff",
        title: "Arcs Hack Battle",
        year: "2017",
        link: "http://arcs.ieeecsvit.com/#hackbattle",
        winner: true,
    },
    {
        thumb: "/assets/hacks/makeathon.png",
        thumbColor: "#000",
        title: "Select Makeathon",
        year: "2018",
        link: "https://www.facebook.com/Selectvit/",
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
        link: "https://hack4cause.ieeessitvit.co.in/",
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
        link: "https://www.hackerearth.com/challenges/hackathon/hasura-hackdev-challenge/",
    },
    {
        thumb: "/assets/hacks/ruralhack.png",
        thumbColor: "#313131",
        title: "Rural Development Hackathon",
        year: "2018",
        link: "https://www.hackerearth.com/challenges/hackathon/lets-hack-for-rural-development/",
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
        link: "https://www.hackathon.io/wework",
    },
    {
        thumb: "/assets/hacks/siemensmakeit.jpg",
        thumbColor: "#000",
        title: "Siemens MakeIT Real",
        year: "2019",
        link: "https://www.hackerearth.com/challenges/hackathon/siemens-makeit-real-2019/",
    },
    {
        thumb: "/assets/hacks/agora.png",
        thumbColor: "#fff",
        title: "Agora hack",
        year: "2021",
        link: "https://agoraio.devpost.com/?utm_campaign=agora-io-rtchack-2018.2018-06-01",
    },
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
/* harmony import */ var _blogs_section_blogs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blogs-section/blogs.component */ "./src/app/home/blogs-section/blogs.component.ts");
/* harmony import */ var _projects_section_projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects-section/projects.component */ "./src/app/home/projects-section/projects.component.ts");
/* harmony import */ var _hacks_section_hacks_section_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hacks-section/hacks-section.component */ "./src/app/home/hacks-section/hacks-section.component.ts");






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
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 46, vars: 0, consts: [["id", "about", 1, "resume-section"], ["id", "about-bg", 1, ""], [1, "resume-section-content"], [1, "mb-0", "focus-in-contract-bck"], [1, "text-primary"], [1, "subheading", "mb-5"], [1, "metrics"], [1, "animate__animated", "animate__fadeInLeft", 2, "animation-delay", "1s", 3, "click"], [1, "fas", "fa-long-arrow-alt-right"], [1, "animate__animated", "animate__fadeInLeft", 2, "animation-delay", "1.2s", 3, "click"], [1, "animate__animated", "animate__fadeInLeft", 2, "animation-delay", "1.4s", 3, "click"], [1, "social-icons"], ["href", "https://www.linkedin.com/in/mdakram28/", 1, "social-icon", "animate__animated", "animate__bounceIn", 2, "animation-delay", "2.1s"], [1, "fab", "fa-linkedin-in"], ["href", "https://github.com/mdakram28/", 1, "social-icon", "animate__animated", "animate__bounceIn", 2, "animation-delay", "2.2s"], [1, "fab", "fa-github"], ["href", "https://github.com/mdakram28/", 1, "social-icon", "animate__animated", "animate__bounceIn", 2, "animation-delay", "2.3s"], [1, "fab", "fa-facebook-f"], ["id", "scroll-icon", "href", "#projects", 1, "scroll-icon", "animate__animated"], [1, "fas", "fa-chevron-down"], [1, "m-0"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_tr_click_11_listener() { return ctx.goto("hacks"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "xx");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Hackathons ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_tr_click_18_listener() { return ctx.goto("projects"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "xx");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Projects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_tr_click_25_listener() { return ctx.goto("awards"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "xx");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Awards ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "hr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "app-blogs-section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "app-projects-section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "app-hacks-section");
    } }, directives: [_blogs_section_blogs_component__WEBPACK_IMPORTED_MODULE_2__["BlogsComponent"], _projects_section_projects_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsComponent"], _hacks_section_hacks_section_component__WEBPACK_IMPORTED_MODULE_4__["HacksSectionComponent"]], styles: ["#about[_ngcontent-%COMP%] {\n  max-width: none;\n  background: radial-gradient(ellipse at left top, #213c58 0%, #000000 50%);\n  color: #ffffffc2;\n  min-height: 100vh;\n  transition: 200ms;\n}\n#about[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #fff;\n}\n#about-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0px;\n  width: 100%;\n  height: 100vh;\n  background-image: url(/assets/img/silhouette.png);\n  background-position: right bottom;\n  background-repeat: no-repeat;\n  z-index: 0;\n}\n.metrics[_ngcontent-%COMP%] {\n  font-size: 20px;\n  vertical-align: middle;\n}\n.metrics[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);\n  background-size: 200% 100%;\n  background-image: linear-gradient(to right, transparent 50%, #33333373 50%);\n  background-position: 0% 0%;\n}\n.metrics[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-position: -100% 0%;\n}\n.metrics[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%]:first-child {\n  font-weight: bold;\n  font-size: 40px;\n  width: 60px;\n  color: #bd5d38;\n  cursor: pointer;\n}\n.metrics[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%]:last-child {\n  text-transform: uppercase;\n  font-weight: 500;\n  font-size: 1.5rem;\n  cursor: pointer;\n}\n.metrics[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%]:last-child   svg[_ngcontent-%COMP%] {\n  transition: 1s ease-out;\n}\n.metrics[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%]:last-child:hover {\n  color: white;\n}\n.metrics[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%]:last-child:hover   svg[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n#about[_ngcontent-%COMP%]   .resume-section-content[_ngcontent-%COMP%] {\n  position: relative;\n}\n#about[_ngcontent-%COMP%]   .resume-section-content[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n#about[_ngcontent-%COMP%]   .resume-section-content[_ngcontent-%COMP%]   .scroll-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  font-size: 40px;\n  color: #6c757df5;\n}\n#about[_ngcontent-%COMP%]   .resume-section-content[_ngcontent-%COMP%]   .scroll-icon[_ngcontent-%COMP%]:hover {\n  color: #e4e4e49c;\n}\n.console[_ngcontent-%COMP%] {\n  display: none;\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  color: white;\n  z-index: 2000;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  right: 0px;\n  left: 0px;\n  height: 100vh;\n}\n.console[_ngcontent-%COMP%]   .shell[_ngcontent-%COMP%] {\n  background-color: #292e39;\n  margin: 50px;\n  max-width: 1000px;\n  height: 600px;\n  flex: 1;\n  border-radius: 5px;\n  padding: 15px 20px;\n  overflow: auto;\n}\n.console[_ngcontent-%COMP%]   .shell[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.console[_ngcontent-%COMP%]   .shell[_ngcontent-%COMP%]   .commands[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-family: \"Lucida Console\", Monaco, monospace;\n  padding: 20px 10px;\n  white-space: pre;\n}\n.console[_ngcontent-%COMP%]   .shell[_ngcontent-%COMP%]   .commands[_ngcontent-%COMP%]   #cursor[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 12px;\n  height: 20px;\n  margin-bottom: -2px;\n  background-color: rgba(255, 255, 255, 0.774);\n}\n@media (max-width: 1000px) {\n  #about-bg[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 576px) {\n  #about[_ngcontent-%COMP%] {\n    padding-top: 2rem;\n  }\n\n  .scroll-icon[_ngcontent-%COMP%] {\n    position: static !important;\n    float: right !important;\n  }\n\n  .shell[_ngcontent-%COMP%] {\n    margin: 20px !important;\n  }\n  .shell[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%] {\n    font-size: 15px !important;\n  }\n  .shell[_ngcontent-%COMP%]   .commands[_ngcontent-%COMP%] {\n    font-size: 15px !important;\n  }\n  .shell[_ngcontent-%COMP%]   .commands[_ngcontent-%COMP%]   #cursor[_ngcontent-%COMP%] {\n    width: 9px !important;\n    height: 15px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FrcmFtL3BlcnNvbmFsL3Byb2plY3RzL21kYWtyYW0yOC5naXRodWIuaW8vc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSx5RUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFJQSxpQkFBQTtBQ0ZGO0FEREU7RUFDRSxXQUFBO0FDR0o7QURFQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaURBQUE7RUFDQSxpQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsVUFBQTtBQ0NGO0FERUE7RUFDRSxlQUFBO0VBQ0Esc0JBQUE7QUNDRjtBRElFO0VBQ0Usa0RBQUE7RUFDQSwwQkFBQTtFQUNBLDJFQUFBO0VBQ0EsMEJBQUE7QUNGSjtBREdJO0VBQ0UsNkJBQUE7QUNETjtBRElFO0VBRUUsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDSEo7QURLRTtFQUVFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNKSjtBRE1JO0VBQ0UsdUJBQUE7QUNKTjtBRE1JO0VBQ0UsWUFBQTtBQ0pOO0FES007RUFDRSxpQkFBQTtBQ0hSO0FEU0E7RUFDRSxrQkFBQTtBQ05GO0FET0U7RUFDRSxxQkFBQTtBQ0xKO0FET0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFHQSxlQUFBO0VBQ0EsZ0JBQUE7QUNQSjtBRFFJO0VBQ0UsZ0JBQUE7QUNOTjtBRFdBO0VBQ0UsYUFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtBQ1JGO0FEVUU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNSSjtBRFVJO0VBQ0UsZUFBQTtBQ1JOO0FEVUk7RUFDRSxlQUFBO0VBQ0EsZ0RBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDUk47QURVTTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDRDQUFBO0FDUlI7QURrQkE7RUFDRTtJQUNFLGFBQUE7RUNmRjtBQUNGO0FEa0JBO0VBQ0U7SUFDRSxpQkFBQTtFQ2hCRjs7RURrQkE7SUFDRSwyQkFBQTtJQUVBLHVCQUFBO0VDaEJGOztFRGtCQTtJQUNFLHVCQUFBO0VDZkY7RURpQkU7SUFDRSwwQkFBQTtFQ2ZKO0VEaUJFO0lBQ0UsMEJBQUE7RUNmSjtFRGdCSTtJQUNFLHFCQUFBO0lBQ0EsdUJBQUE7RUNkTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Fib3V0IHtcbiAgbWF4LXdpZHRoOiBub25lO1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCBsZWZ0IHRvcCwgIzIxM2M1OCAwJSwgIzAwMDAwMCA1MCUpO1xuICBjb2xvcjogI2ZmZmZmZmMyO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgaDEge1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIHRyYW5zaXRpb246IDIwMG1zO1xufVxuXG4jYWJvdXQtYmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWcvc2lsaG91ZXR0ZS5wbmcpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBib3R0b207XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHotaW5kZXg6IDA7XG59XG5cbi5tZXRyaWNzIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAvLyB0ciA+IHRkOmZpcnN0LWNoaWxkIHtcbiAgLy8gICAgIHdpZHRoOiA1MHB4O1xuICAvLyB9XG5cbiAgdHIge1xuICAgIHRyYW5zaXRpb246IDAuM3MgY3ViaWMtYmV6aWVyKDAuMjIsIDAuNjEsIDAuMzYsIDEpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMjAwJSAxMDAlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdHJhbnNwYXJlbnQgNTAlLCAjMzMzMzMzNzMgNTAlKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSAwJTtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMDAlIDAlO1xuICAgIH1cbiAgfVxuICB0ciA+IHRkOmZpcnN0LWNoaWxkIHtcbiAgICAvLyB3aWR0aDogMTUwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGNvbG9yOiAjYmQ1ZDM4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICB0ciA+IHRkOmxhc3QtY2hpbGQge1xuICAgIC8vIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICBzdmcge1xuICAgICAgdHJhbnNpdGlvbjogMXMgZWFzZS1vdXQ7XG4gICAgfVxuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgc3ZnIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbiNhYm91dCAucmVzdW1lLXNlY3Rpb24tY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLnNvY2lhbC1pY29ucyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIC5zY3JvbGwtaWNvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICAvLyByaWdodDogNTB2dztcbiAgICAvLyBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgY29sb3I6ICM2Yzc1N2RmNTtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAjZTRlNGU0OWM7XG4gICAgfVxuICB9XG59XG5cbi5jb25zb2xlIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICBjb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDIwMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgaGVpZ2h0OiAxMDB2aDtcblxuICAuc2hlbGwge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTJlMzk7XG4gICAgbWFyZ2luOiA1MHB4O1xuICAgIG1heC13aWR0aDogMTAwMHB4O1xuICAgIGhlaWdodDogNjAwcHg7XG4gICAgZmxleDogMTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogMTVweCAyMHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuXG4gICAgLnRvb2xiYXIge1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgICAuY29tbWFuZHMge1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgZm9udC1mYW1pbHk6IFwiTHVjaWRhIENvbnNvbGVcIiwgTW9uYWNvLCBtb25vc3BhY2U7XG4gICAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gICAgICB3aGl0ZS1zcGFjZTogcHJlO1xuXG4gICAgICAjY3Vyc29yIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogMTJweDtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAtMnB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzc0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuOjpuZy1kZWVwIGJvZHkuaGlkZGVuIHtcbiAgLy8gICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gICNhYm91dC1iZyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgI2Fib3V0IHtcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgfVxuICAuc2Nyb2xsLWljb24ge1xuICAgIHBvc2l0aW9uOiBzdGF0aWMgIWltcG9ydGFudDtcbiAgICAvLyBsZWZ0OiB1bnNldDtcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuICAuc2hlbGwge1xuICAgIG1hcmdpbjogMjBweCAhaW1wb3J0YW50O1xuXG4gICAgLnRvb2xiYXIge1xuICAgICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5jb21tYW5kcyB7XG4gICAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbiAgICAgICNjdXJzb3Ige1xuICAgICAgICB3aWR0aDogOXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDogMTVweCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiI2Fib3V0IHtcbiAgbWF4LXdpZHRoOiBub25lO1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCBsZWZ0IHRvcCwgIzIxM2M1OCAwJSwgIzAwMDAwMCA1MCUpO1xuICBjb2xvcjogI2ZmZmZmZmMyO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgdHJhbnNpdGlvbjogMjAwbXM7XG59XG4jYWJvdXQgaDEge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuI2Fib3V0LWJnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL3NpbGhvdWV0dGUucG5nKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgYm90dG9tO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB6LWluZGV4OiAwO1xufVxuXG4ubWV0cmljcyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5tZXRyaWNzIHRyIHtcbiAgdHJhbnNpdGlvbjogMC4zcyBjdWJpYy1iZXppZXIoMC4yMiwgMC42MSwgMC4zNiwgMSk7XG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJSAxMDAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHRyYW5zcGFyZW50IDUwJSwgIzMzMzMzMzczIDUwJSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDAlO1xufVxuLm1ldHJpY3MgdHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTAwJSAwJTtcbn1cbi5tZXRyaWNzIHRyID4gdGQ6Zmlyc3QtY2hpbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICB3aWR0aDogNjBweDtcbiAgY29sb3I6ICNiZDVkMzg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5tZXRyaWNzIHRyID4gdGQ6bGFzdC1jaGlsZCB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubWV0cmljcyB0ciA+IHRkOmxhc3QtY2hpbGQgc3ZnIHtcbiAgdHJhbnNpdGlvbjogMXMgZWFzZS1vdXQ7XG59XG4ubWV0cmljcyB0ciA+IHRkOmxhc3QtY2hpbGQ6aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWV0cmljcyB0ciA+IHRkOmxhc3QtY2hpbGQ6aG92ZXIgc3ZnIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbiNhYm91dCAucmVzdW1lLXNlY3Rpb24tY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiNhYm91dCAucmVzdW1lLXNlY3Rpb24tY29udGVudCAuc29jaWFsLWljb25zIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuI2Fib3V0IC5yZXN1bWUtc2VjdGlvbi1jb250ZW50IC5zY3JvbGwtaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiAjNmM3NTdkZjU7XG59XG4jYWJvdXQgLnJlc3VtZS1zZWN0aW9uLWNvbnRlbnQgLnNjcm9sbC1pY29uOmhvdmVyIHtcbiAgY29sb3I6ICNlNGU0ZTQ5Yztcbn1cblxuLmNvbnNvbGUge1xuICBkaXNwbGF5OiBub25lO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgei1pbmRleDogMjAwMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDBweDtcbiAgbGVmdDogMHB4O1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuLmNvbnNvbGUgLnNoZWxsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5MmUzOTtcbiAgbWFyZ2luOiA1MHB4O1xuICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgaGVpZ2h0OiA2MDBweDtcbiAgZmxleDogMTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuLmNvbnNvbGUgLnNoZWxsIC50b29sYmFyIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmNvbnNvbGUgLnNoZWxsIC5jb21tYW5kcyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiTHVjaWRhIENvbnNvbGVcIiwgTW9uYWNvLCBtb25vc3BhY2U7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgd2hpdGUtc3BhY2U6IHByZTtcbn1cbi5jb25zb2xlIC5zaGVsbCAuY29tbWFuZHMgI2N1cnNvciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogLTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc3NCk7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgI2Fib3V0LWJnIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgI2Fib3V0IHtcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgfVxuXG4gIC5zY3JvbGwtaWNvbiB7XG4gICAgcG9zaXRpb246IHN0YXRpYyAhaW1wb3J0YW50O1xuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnNoZWxsIHtcbiAgICBtYXJnaW46IDIwcHggIWltcG9ydGFudDtcbiAgfVxuICAuc2hlbGwgLnRvb2xiYXIge1xuICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xuICB9XG4gIC5zaGVsbCAuY29tbWFuZHMge1xuICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xuICB9XG4gIC5zaGVsbCAuY29tbWFuZHMgI2N1cnNvciB7XG4gICAgd2lkdGg6IDlweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMTVweCAhaW1wb3J0YW50O1xuICB9XG59Il19 */"] });
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], ng_gallery__WEBPACK_IMPORTED_MODULE_7__["GalleryComponent"], ngx_markdown__WEBPACK_IMPORTED_MODULE_10__["MarkdownComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.project[_ngcontent-%COMP%] {\n  background-color: white;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n  border-radius: 5px;\n}\n\n.project[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n}\n\n.project[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n  min-width: 250px;\n  height: 100%;\n  min-height: 250px;\n  background-position: center;\n  background-repeat: no-repeat;\n  cursor: pointer;\n  transition: 0.3s;\n}\n\n.project[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n\n.project[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.project[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]:hover {\n  color: #bd5d38;\n}\n\n.project[_ngcontent-%COMP%]   .subheading[_ngcontent-%COMP%] {\n  margin-bottom: 0px !important;\n}\n\n.project[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%] {\n  margin-bottom: 1rem !important;\n}\n\n.project[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%] {\n  margin-right: 6px;\n  font-size: 17px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  cursor: pointer;\n}\n\n.project[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.project[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]:hover {\n  filter: opacity(0.9);\n}\n\n.project[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.project[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  border: 2px solid;\n  padding: 7px 10px;\n  text-decoration: none;\n  color: #bd5d38;\n  background-color: transparent;\n  cursor: pointer;\n}\n\n.project[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.project[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:hover {\n  background-color: #bd5d38;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FrcmFtL3BlcnNvbmFsL3Byb2plY3RzL21kYWtyYW0yOC5naXRodWIuaW8vc3JjL2FwcC9ob21lL3Byb2plY3RzLXNlY3Rpb24vcHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvcHJvamVjdHMtc2VjdGlvbi9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUNDRjs7QURHQTtFQUNFLHVCQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQUY7O0FEQ0U7RUFDRSwyQ0FBQTtBQ0NKOztBREVFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQUo7O0FEQ0k7RUFDRSxZQUFBO0FDQ047O0FER0U7RUFDRSxlQUFBO0FDREo7O0FERUk7RUFDRSxjQUFBO0FDQU47O0FESUU7RUFDRSw2QkFBQTtBQ0ZKOztBREtFO0VBQ0UsOEJBQUE7QUNISjs7QURJSTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtFQUNBLGVBQUE7QUNGTjs7QURHTTtFQUNFLFlBQUE7QUNEUjs7QURHTTtFQUNFLG9CQUFBO0FDRFI7O0FETUU7RUFDRSxhQUFBO0FDSko7O0FET0U7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FDTEo7O0FETUk7RUFDRSxlQUFBO0FDSk47O0FET0k7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUNMTiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcHJvamVjdHMtc2VjdGlvbi9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNiZDVkMzg7XG59XG5cbi5wcm9qZWN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAmOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB9XG5cbiAgLnRodW1ibmFpbCB7XG4gICAgbWluLXdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMjUwcHg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgJjpob3ZlciB7XG4gICAgICBvcGFjaXR5OiAwLjc7XG4gICAgfVxuICB9XG5cbiAgLmhlYWRpbmcge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAjYmQ1ZDM4O1xuICAgIH1cbiAgfVxuXG4gIC5zdWJoZWFkaW5nIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC50YWdzIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XG4gICAgLnRhZyB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgLmJhZGdlIHtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgfVxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGZpbHRlcjogb3BhY2l0eSgwLjkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5kZXNjcmlwdGlvbiB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuXG4gIC5idXR0b24ge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkO1xuICAgIHBhZGRpbmc6IDdweCAxMHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogI2JkNWQzODtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgc3ZnIHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiZDVkMzg7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucHJvamVjdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5wcm9qZWN0OmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbi5wcm9qZWN0IC50aHVtYm5haWwge1xuICBtaW4td2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cbi5wcm9qZWN0IC50aHVtYm5haWw6aG92ZXIge1xuICBvcGFjaXR5OiAwLjc7XG59XG4ucHJvamVjdCAuaGVhZGluZyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wcm9qZWN0IC5oZWFkaW5nOmhvdmVyIHtcbiAgY29sb3I6ICNiZDVkMzg7XG59XG4ucHJvamVjdCAuc3ViaGVhZGluZyB7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuLnByb2plY3QgLnRhZ3Mge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XG59XG4ucHJvamVjdCAudGFncyAudGFnIHtcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wcm9qZWN0IC50YWdzIC50YWcgLmJhZGdlIHtcbiAgcGFkZGluZzogNXB4O1xufVxuLnByb2plY3QgLnRhZ3MgLnRhZzpob3ZlciB7XG4gIGZpbHRlcjogb3BhY2l0eSgwLjkpO1xufVxuLnByb2plY3QgLmRlc2NyaXB0aW9uIHtcbiAgcGFkZGluZzogMjBweDtcbn1cbi5wcm9qZWN0IC5idXR0b24ge1xuICBib3JkZXI6IDJweCBzb2xpZDtcbiAgcGFkZGluZzogN3B4IDEwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNiZDVkMzg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucHJvamVjdCAuYnV0dG9uIHN2ZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5wcm9qZWN0IC5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmQ1ZDM4O1xuICBjb2xvcjogd2hpdGU7XG59Il19 */"] });
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
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], decls: 22, vars: 0, consts: [["id", "sideNav", 1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-primary", "fixed-top"], ["href", "#page-top", 1, "navbar-brand", "js-scroll-trigger"], [1, "d-block", "d-lg-none"], [1, "d-none", "d-lg-block"], ["src", "assets/img/profile.jpg", "alt", "Profile Image", 1, "img-fluid", "img-profile", "rounded-circle", "mx-auto", "mb-2"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item"], [1, "nav-link", "js-scroll-trigger", "animate__animated", "animate__fadeInUp", 2, "animation-delay", "2.1s", 3, "click"], [1, "nav-link", "js-scroll-trigger", "animate__animated", "animate__fadeInUp", 2, "animation-delay", "2.2s", 3, "click"], [1, "nav-link", "js-scroll-trigger", "animate__animated", "animate__fadeInUp", 2, "animation-delay", "2.3s", 3, "click"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_14_listener() { return ctx.goto("blog"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_17_listener() { return ctx.goto("projects"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_20_listener() { return ctx.goto("hacks"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Hackathons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".nav-link[_ngcontent-%COMP%] {\n  animation: none;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FrcmFtL3BlcnNvbmFsL3Byb2plY3RzL21kYWtyYW0yOC5naXRodWIuaW8vc3JjL2FwcC9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAbWVkaWEgKG1heC13aWR0aDogOTkwcHgpIHtcbiAgICAubmF2LWxpbmsge1xuICAgICAgICBhbmltYXRpb246IG5vbmU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4vLyB9IiwiLm5hdi1saW5rIHtcbiAgYW5pbWF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-nav",
                templateUrl: "./nav.component.html",
                styleUrls: ["./nav.component.scss"],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/blogs/blogs.json":
/*!******************************!*\
  !*** ./src/blogs/blogs.json ***!
  \******************************/
/*! exports provided: 0, 1, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"title\":\"Python - Full Course for beginners\",\"slug\":\"python\",\"markdownSrc\":\"https://raw.githubusercontent.com/mdakram28/CPSC217-W22/master/full_course.md\",\"repo\":\"mdakram28/CPSC217-W22\",\"updatedAt\":\"December 28, 2022\",\"cover\":\"/blogs/img/cover-python.png\",\"description\":\"I teach Python to university students. This article is meant to teach the basics to programming using python to an absolute beginner with no programming experience. After following this article you will be able to understand and write your own intermediate level python code.\",\"links\":[{\"type\":\"github\",\"url\":\"https://github.com/mdakram28/CPSC217-W22\"}]},{\"title\":\"ARM Assembly - Zero to Hero in 22 Days\",\"slug\":\"arm-assembly\",\"markdownSrc\":\"https://raw.githubusercontent.com/mdakram28/cpsc355/main/all_material.md\",\"repo\":\"mdakram28/cpsc355\",\"updatedAt\":\"December 27, 2022\",\"cover\":\"/blogs/img/cover-rpi.jpg\",\"description\":\"I have been teaching ARM assembly to university students. This article is adapted from the tutorial material for a Computer Science Course - CPSC355 that I taught in 2022 and is meant to teach the basics of assembly, c and the inner working of a computer application. The article will focus on understanding how a computer program is written and how that program is understood and executed by the processor. We will write assemble for the 64-bit ARMv8 architecture CPU. We will also understand what the binary code of a program written in C looks like. We will run the program in a Linux OS.\",\"links\":[{\"type\":\"github\",\"url\":\"https://github.com/mdakram28/cpsc355\"}]}]");

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

module.exports = __webpack_require__(/*! /home/akram/personal/projects/mdakram28.github.io/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map