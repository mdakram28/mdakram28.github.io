function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/"./$$_lazy_route_resource lazy recursive": (
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/
  /*! no static exports found */
  /***/
  function _$$_lazy_route_resource_lazy_recursive(module, exports) {
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
  }),
  /***/"./src/app/app-routing.module.ts": (
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/
  /*! exports provided: AppRoutingModule */
  /***/
  function _src_app_appRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */"./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */
    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */"./src/app/home/home.component.ts");
    /* harmony import */
    var _blog_blog_holder_blog_holder_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blog/blog-holder/blog-holder.component */"./src/app/blog/blog-holder/blog-holder.component.ts");
    var routes = [{
      path: "blog/:id",
      component: _blog_blog_holder_blog_holder_component__WEBPACK_IMPORTED_MODULE_4__["BlogHolderComponent"]
    }, {
      path: "**",
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }];
    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });
    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      providers: [{
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["APP_BASE_HREF"],
        useValue: "/"
      }],
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });
    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/
    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          providers: [{
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["APP_BASE_HREF"],
            useValue: "/"
          }]
        }]
      }], null, null);
    })();

    /***/
  }),
  /***/"./src/app/app.component.ts": (
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/
  /*! exports provided: AppComponent */
  /***/
  function _src_app_appComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */
    var _nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav/nav.component */"./src/app/nav/nav.component.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);
      }
      return _createClass(AppComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }]);
    }();
    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      consts: [[1, "container-fluid", "p-0", 2, "position", "relative"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["[_nghost-%COMP%] {\n  background-color: #f4f4f4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FrcmFtL3dvcmtzcGFjZS9tZGFrcmFtMjguZ2l0aHViLmlvL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xufSIsIjpob3N0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcbn0iXX0= */"]
    });
    /*@__PURE__*/
    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-root",
          templateUrl: "./app.component.html",
          styleUrls: ["./app.component.scss"]
        }]
      }], null, null);
    })();

    /***/
  }),
  /***/"./src/app/app.module.ts": (
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/
  /*! exports provided: AppModule */
  /***/
  function _src_app_appModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */
    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */"./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */
    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */"./src/app/app.component.ts");
    /* harmony import */
    var _nav_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav/nav.component */"./src/app/nav/nav.component.ts");
    /* harmony import */
    var _home_projects_section_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/projects-section/projects.component */"./src/app/home/projects-section/projects.component.ts");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */"./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */
    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */"./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */
    var ng_gallery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-gallery */"./node_modules/ng-gallery/__ivy_ngcc__/fesm2015/ng-gallery.js");
    /* harmony import */
    var ngx_markdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-markdown */"./node_modules/ngx-markdown/__ivy_ngcc__/fesm2015/ngx-markdown.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */"./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */
    var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/buttons */"./node_modules/ngx-bootstrap/__ivy_ngcc__/buttons/fesm2015/ngx-bootstrap-buttons.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */"./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */
    var _home_hacks_section_hacks_section_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/hacks-section/hacks-section.component */"./src/app/home/hacks-section/hacks-section.component.ts");
    /* harmony import */
    var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @scullyio/ng-lib */"./node_modules/@scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js");
    /* harmony import */
    var _app_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app-routing.module */"./src/app/app-routing.module.ts");
    /* harmony import */
    var _home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/home.component */"./src/app/home/home.component.ts");
    /* harmony import */
    var _blog_blog_holder_blog_holder_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./blog/blog-holder/blog-holder.component */"./src/app/blog/blog-holder/blog-holder.component.ts");
    /* harmony import */
    var _home_blogs_section_blogs_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./home/blogs-section/blogs.component */"./src/app/home/blogs-section/blogs.component.ts");
    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot(), ng_gallery__WEBPACK_IMPORTED_MODULE_7__["GalleryModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_8__["MarkdownModule"].forRoot({
        loader: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]
      }), ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_10__["ButtonsModule"].forRoot(), _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_13__["ScullyLibModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"]]]
    });
    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"], _home_projects_section_projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"], _home_hacks_section_hacks_section_component__WEBPACK_IMPORTED_MODULE_12__["HacksSectionComponent"], _home_blogs_section_blogs_component__WEBPACK_IMPORTED_MODULE_17__["BlogsComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"], _blog_blog_holder_blog_holder_component__WEBPACK_IMPORTED_MODULE_16__["BlogHolderComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalModule"], ng_gallery__WEBPACK_IMPORTED_MODULE_7__["GalleryModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_8__["MarkdownModule"], ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_10__["ButtonsModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_13__["ScullyLibModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/
    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"], _home_projects_section_projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"], _home_hacks_section_hacks_section_component__WEBPACK_IMPORTED_MODULE_12__["HacksSectionComponent"], _home_blogs_section_blogs_component__WEBPACK_IMPORTED_MODULE_17__["BlogsComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"], _blog_blog_holder_blog_holder_component__WEBPACK_IMPORTED_MODULE_16__["BlogHolderComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot(), ng_gallery__WEBPACK_IMPORTED_MODULE_7__["GalleryModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_8__["MarkdownModule"].forRoot({
            loader: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]
          }), ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_10__["ButtonsModule"].forRoot(), _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_13__["ScullyLibModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();

    /***/
  }),
  /***/"./src/app/blog/blog-holder/blog-holder.component.ts": (
  /*!***********************************************************!*\
    !*** ./src/app/blog/blog-holder/blog-holder.component.ts ***!
    \***********************************************************/
  /*! exports provided: BlogHolderComponent */
  /***/
  function _src_app_blog_blogHolder_blogHolderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "BlogHolderComponent", function () {
      return BlogHolderComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */
    var _blogs_blogs_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../blogs/blogs.json */"./src/blogs/blogs.json");
    var _blogs_blogs_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../blogs/blogs.json */"./src/blogs/blogs.json", 1);
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */
    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */"./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */"./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */
    var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @scullyio/ng-lib */"./node_modules/@scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */"./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */
    var ngx_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-markdown */"./node_modules/ngx-markdown/__ivy_ngcc__/fesm2015/ngx-markdown.js");
    function BlogHolderComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
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
      }
      if (rf & 2) {
        var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + ctx_r59.blog.cover + ")", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r59.blog.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r59.blog.updatedAt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r59.blog.markdownSrc);
      }
    }
    var BlogHolderComponent = /*#__PURE__*/function () {
      function BlogHolderComponent(route, titleService, meta, http, srs) {
        var _this = this;
        _classCallCheck(this, BlogHolderComponent);
        this.route = route;
        this.titleService = titleService;
        this.meta = meta;
        this.http = http;
        this.srs = srs;
        this.articles$ = this.srs.available$;
        this.liked = false;
        this.articles$.subscribe(console.log);
        this.route.params.subscribe(function (params) {
          var slug = params.id.toLowerCase();
          _this.blog = _blogs_blogs_json__WEBPACK_IMPORTED_MODULE_1__.find(function (b) {
            return b.slug.toLowerCase() == slug;
          }) || {
            title: "Article not found"
          };
          _this.setSocialTags();
        });
      }
      return _createClass(BlogHolderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.linkGithubRepo();
        }
      }, {
        key: "setSocialTags",
        value: function setSocialTags() {
          this.titleService.setTitle(this.blog.title);
          this.meta.updateTag({
            property: "og:title",
            content: this.blog.title
          });
          this.meta.updateTag({
            property: "og:description",
            content: this.blog.description
          });
          this.meta.updateTag({
            property: "og:image",
            content: this.blog.image
          });
          this.meta.updateTag({
            property: "og:type",
            content: "article"
          });
        }
      }, {
        key: "linkGithubRepo",
        value: function linkGithubRepo() {
          //Like Button
          // let script2 = document.createElement("script");
          // script2.src = "https://buttons.github.io/buttons.js";
          // script2.setAttribute("async", "");
          // script2.setAttribute("defer", "");
          // document.getElementById("blog").appendChild(script2);
          //Comments
          var script = document.createElement("script");
          script.type = "application/javascript";
          script.src = "https://utteranc.es/client.js";
          script.setAttribute("repo", this.blog.repo);
          script.setAttribute("issue-term", "pathname");
          script.setAttribute("theme", "github-light");
          script.setAttribute("crossorigin", "anonymous");
          script.setAttribute("async", "");
          document.getElementById("blog").appendChild(script);
        }
      }]);
    }();
    BlogHolderComponent.ɵfac = function BlogHolderComponent_Factory(t) {
      return new (t || BlogHolderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_5__["ScullyRoutesService"]));
    };
    BlogHolderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BlogHolderComponent,
      selectors: [["app-blog-holder"]],
      decls: 3,
      vars: 2,
      consts: [[1, "bg"], [3, "src"], ["id", "blog", 4, "ngIf"], ["id", "blog"], [1, "cover"], [1, "content"], [1, "title"], [2, "width", "100px", "height", "1px", "background-color", "rgba(255, 255, 255, 0.753)", "margin", "15px 0px"], [1, "actions"], [1, "date"], [1, "markdown", 3, "src"]],
      template: function BlogHolderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BlogHolderComponent_div_2_Template, 11, 5, "div", 2);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.blog.cover, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.blog);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ngx_markdown__WEBPACK_IMPORTED_MODULE_7__["MarkdownComponent"]],
      styles: ["#blog[_ngcontent-%COMP%] {\n  padding: 50px;\n  max-width: 60rem;\n}\n\n.bg[_ngcontent-%COMP%] {\n  background-repeat: none;\n  background-size: cover;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  z-index: -100;\n  transform: scale(1.5);\n  filter: brightness(20%);\n}\n\n.bg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  filter: blur(50px);\n}\n\n.cover[_ngcontent-%COMP%] {\n  border-radius: 25px;\n  height: 300px;\n  width: 100%;\n  background-size: cover;\n  background-position: center;\n  margin-bottom: 10px;\n}\n\n.title[_ngcontent-%COMP%] {\n  color: white;\n  text-transform: none;\n  font-size: 80px;\n  margin-top: 50px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.actions[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n\n.markdown[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.markdown[_ngcontent-%COMP%]     h1, .markdown[_ngcontent-%COMP%]     h2, .markdown[_ngcontent-%COMP%]     h3, .markdown[_ngcontent-%COMP%]     h4 {\n  color: rgba(255, 255, 255, 0.8) !important;\n}\n\n@media (max-width: 992px) {\n  #blog[_ngcontent-%COMP%] {\n    padding: 0px;\n    max-width: 100vw;\n    overflow: hidden;\n  }\n  #blog[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%] {\n    border-radius: 0px;\n    height: 200px;\n  }\n  #blog[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 50px;\n  }\n  #blog[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    margin: 10px;\n  }\n  #blog[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .markdown[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n\n@media (min-width: 992px) {\n    #sideNav {\n    background: none !important;\n  }\n    #sideNav .navbar-brand {\n    margin-top: 50px;\n    filter: opacity(0.5);\n    transition: 0.5s ease-in-out;\n  }\n    #sideNav .navbar-brand .img-profile {\n    transition: 0.5s ease-in-out;\n    max-width: 7rem;\n    max-height: 7rem;\n  }\n    #sideNav #navbarSupportedContent {\n    filter: opacity(0);\n    transition: 0.5s ease-in-out;\n  }\n    #sideNav:hover .navbar-brand {\n    filter: opacity(1);\n  }\n    #sideNav:hover .navbar-brand .img-profile {\n    max-width: 10rem;\n    max-height: 10rem;\n  }\n    #sideNav:hover #navbarSupportedContent {\n    filter: opacity(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FrcmFtL3dvcmtzcGFjZS9tZGFrcmFtMjguZ2l0aHViLmlvL3NyYy9hcHAvYmxvZy9ibG9nLWhvbGRlci9ibG9nLWhvbGRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYmxvZy9ibG9nLWhvbGRlci9ibG9nLWhvbGRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBRUEsdUJBQUE7QUNBRjs7QURDRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURHQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUNBRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0NGOztBRENBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FDRUY7O0FEREU7RUFDRSxlQUFBO0FDR0o7O0FEQ0E7RUFDRSxlQUFBO0VBQ0EsK0JBQUE7QUNFRjs7QURBSTs7OztFQUlFLDBDQUFBO0FDRU47O0FER0E7RUFDRTtJQUNFLFlBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0VDQUY7RURDRTtJQUNFLGtCQUFBO0lBQ0EsYUFBQTtFQ0NKO0VEQ0U7SUFDRSxlQUFBO0VDQ0o7RURDRTtJQUNFLFlBQUE7RUNDSjtFREFJO0lBQ0UsZUFBQTtFQ0VOO0FBQ0Y7O0FESUU7RUFDRTtJQUNFLDJCQUFBO0VDRko7RURHSTtJQUNFLGdCQUFBO0lBQ0Esb0JBQUE7SUFDQSw0QkFBQTtFQ0ROO0VERU07SUFDRSw0QkFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtFQ0FSO0VER0k7SUFDRSxrQkFBQTtJQUNBLDRCQUFBO0VDRE47RURJTTtJQUNFLGtCQUFBO0VDRlI7RURHUTtJQUNFLGdCQUFBO0lBQ0EsaUJBQUE7RUNEVjtFRElNO0lBQ0Usa0JBQUE7RUNGUjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYmxvZy9ibG9nLWhvbGRlci9ibG9nLWhvbGRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNibG9nIHtcbiAgcGFkZGluZzogNTBweDtcbiAgbWF4LXdpZHRoOiA2MHJlbTtcbn1cblxuLmJnIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vbmU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgYm90dG9tOiAwcHg7XG4gIHotaW5kZXg6IC0xMDA7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcbiAgLy8gZmlsdGVyOiBibHVyKDUwcHgpO1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMjAlKTtcbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZmlsdGVyOiBibHVyKDUwcHgpO1xuICB9XG59XG5cbi5jb3ZlciB7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4udGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LXNpemU6IDgwcHg7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG4uYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgc3ZnIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gIH1cbn1cblxuLm1hcmtkb3duIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICA6Om5nLWRlZXAge1xuICAgIGgxLFxuICAgIGgyLFxuICAgIGgzLFxuICAgIGg0IHtcbiAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCkgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICNibG9nIHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWF4LXdpZHRoOiAxMDB2dztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIC5jb3ZlciB7XG4gICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIH1cbiAgICAudGl0bGUge1xuICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgIH1cbiAgICAuY29udGVudCB7XG4gICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAubWFya2Rvd24ge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbjo6bmctZGVlcCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICNzaWRlTmF2IHtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIC5uYXZiYXItYnJhbmQge1xuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgICBmaWx0ZXI6IG9wYWNpdHkoMC41KTtcbiAgICAgICAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcbiAgICAgICAgLmltZy1wcm9maWxlIHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgIG1heC13aWR0aDogN3JlbTtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiA3cmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAjbmF2YmFyU3VwcG9ydGVkQ29udGVudCB7XG4gICAgICAgIGZpbHRlcjogb3BhY2l0eSgwKTtcbiAgICAgICAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcbiAgICAgIH1cbiAgICAgICY6aG92ZXIge1xuICAgICAgICAubmF2YmFyLWJyYW5kIHtcbiAgICAgICAgICBmaWx0ZXI6IG9wYWNpdHkoMSk7XG4gICAgICAgICAgLmltZy1wcm9maWxlIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogMTByZW07XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMHJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgI25hdmJhclN1cHBvcnRlZENvbnRlbnQge1xuICAgICAgICAgIGZpbHRlcjogb3BhY2l0eSgxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiI2Jsb2cge1xuICBwYWRkaW5nOiA1MHB4O1xuICBtYXgtd2lkdGg6IDYwcmVtO1xufVxuXG4uYmcge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm9uZTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICByaWdodDogMHB4O1xuICBib3R0b206IDBweDtcbiAgei1pbmRleDogLTEwMDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMjAlKTtcbn1cbi5iZyBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmaWx0ZXI6IGJsdXIoNTBweCk7XG59XG5cbi5jb3ZlciB7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi50aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZvbnQtc2l6ZTogODBweDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLmFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uYWN0aW9ucyBzdmcge1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5tYXJrZG93biB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbn1cbi5tYXJrZG93biA6Om5nLWRlZXAgaDEsXG4ubWFya2Rvd24gOjpuZy1kZWVwIGgyLFxuLm1hcmtkb3duIDo6bmctZGVlcCBoMyxcbi5tYXJrZG93biA6Om5nLWRlZXAgaDQge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAjYmxvZyB7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1heC13aWR0aDogMTAwdnc7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICAjYmxvZyAuY292ZXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICB9XG4gICNibG9nIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICB9XG4gICNibG9nIC5jb250ZW50IHtcbiAgICBtYXJnaW46IDEwcHg7XG4gIH1cbiAgI2Jsb2cgLmNvbnRlbnQgLm1hcmtkb3duIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICA6Om5nLWRlZXAgI3NpZGVOYXYge1xuICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuICA6Om5nLWRlZXAgI3NpZGVOYXYgLm5hdmJhci1icmFuZCB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBmaWx0ZXI6IG9wYWNpdHkoMC41KTtcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xuICB9XG4gIDo6bmctZGVlcCAjc2lkZU5hdiAubmF2YmFyLWJyYW5kIC5pbWctcHJvZmlsZSB7XG4gICAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcbiAgICBtYXgtd2lkdGg6IDdyZW07XG4gICAgbWF4LWhlaWdodDogN3JlbTtcbiAgfVxuICA6Om5nLWRlZXAgI3NpZGVOYXYgI25hdmJhclN1cHBvcnRlZENvbnRlbnQge1xuICAgIGZpbHRlcjogb3BhY2l0eSgwKTtcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xuICB9XG4gIDo6bmctZGVlcCAjc2lkZU5hdjpob3ZlciAubmF2YmFyLWJyYW5kIHtcbiAgICBmaWx0ZXI6IG9wYWNpdHkoMSk7XG4gIH1cbiAgOjpuZy1kZWVwICNzaWRlTmF2OmhvdmVyIC5uYXZiYXItYnJhbmQgLmltZy1wcm9maWxlIHtcbiAgICBtYXgtd2lkdGg6IDEwcmVtO1xuICAgIG1heC1oZWlnaHQ6IDEwcmVtO1xuICB9XG4gIDo6bmctZGVlcCAjc2lkZU5hdjpob3ZlciAjbmF2YmFyU3VwcG9ydGVkQ29udGVudCB7XG4gICAgZmlsdGVyOiBvcGFjaXR5KDEpO1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/
    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogHolderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-blog-holder",
          templateUrl: "./blog-holder.component.html",
          styleUrls: ["./blog-holder.component.scss"]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_5__["ScullyRoutesService"]
        }];
      }, null);
    })();

    /***/
  }),
  /***/"./src/app/home/blogs-section/blogs.component.ts": (
  /*!*******************************************************!*\
    !*** ./src/app/home/blogs-section/blogs.component.ts ***!
    \*******************************************************/
  /*! exports provided: BlogsComponent */
  /***/
  function _src_app_home_blogsSection_blogsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "BlogsComponent", function () {
      return BlogsComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */
    var _blogs_blogs_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../blogs/blogs.json */"./src/blogs/blogs.json");
    var _blogs_blogs_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../blogs/blogs.json */"./src/blogs/blogs.json", 1);
    /* harmony import */
    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */"./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */"./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    var _c0 = ["modelTemplate"];
    function BlogsComponent_div_5_span_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        var tag_r64 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tag_r64);
      }
    }
    function BlogsComponent_div_5_a_16_i_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 22);
      }
    }
    function BlogsComponent_div_5_a_16_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\xA0Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }
    function BlogsComponent_div_5_a_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BlogsComponent_div_5_a_16_i_1_Template, 1, 0, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BlogsComponent_div_5_a_16_span_2_Template, 2, 0, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        var link_r65 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", link_r65.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", link_r65.type == "github");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", link_r65.type == "github");
      }
    }
    function BlogsComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BlogsComponent_div_5_span_10_Template, 2, 1, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, BlogsComponent_div_5_a_16_Template, 3, 3, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        var post_r61 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", "/blog/" + post_r61.slug, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url('" + post_r61.cover + "')", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", "/blog/" + post_r61.slug, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r61.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r61.updatedAt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", post_r61.tags);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r61.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", "/blog/" + post_r61.slug, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", post_r61.links);
      }
    }
    var BlogsComponent = /*#__PURE__*/function () {
      function BlogsComponent(modalService) {
        _classCallCheck(this, BlogsComponent);
        this.modalService = modalService;
        this.viewType = "grid";
        this.blogPosts = _blogs_blogs_json__WEBPACK_IMPORTED_MODULE_1__;
      }
      return _createClass(BlogsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
    }();
    BlogsComponent.ɵfac = function BlogsComponent_Factory(t) {
      return new (t || BlogsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]));
    };
    BlogsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BlogsComponent,
      selectors: [["app-blogs-section"]],
      viewQuery: function BlogsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }
        if (rf & 2) {
          var _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.modelTemplate = _t.first);
        }
      },
      decls: 6,
      vars: 1,
      consts: [["id", "blog", 1, "resume-section"], [1, "resume-section-content"], [1, "section-title"], [1, "card-list"], ["class", "content-card d-flex flex-column flex-md-row", 4, "ngFor", "ngForOf"], [1, "content-card", "d-flex", "flex-column", "flex-md-row"], [1, "card-thumbnail-wrapper", 3, "href"], [1, "card-thumbnail"], [1, "card-body-content"], [1, "card-link", 3, "href"], [1, "card-title"], [1, "card-date"], [1, "card-tags"], ["class", "badge badge-primary", 4, "ngFor", "ngForOf"], [1, "card-description"], [1, "card-actions"], [1, "btn-outline", 3, "href"], ["class", "btn-outline", "target", "_blank", 3, "href", 4, "ngFor", "ngForOf"], [1, "badge", "badge-primary"], ["target", "_blank", 1, "btn-outline", 3, "href"], ["class", "fab fa-github", 4, "ngIf"], [4, "ngIf"], [1, "fab", "fa-github"]],
      template: function BlogsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Blog Posts");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BlogsComponent_div_5_Template, 17, 10, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.blogPosts);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.section-title[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n  position: relative;\n  display: inline-block;\n}\n\n.section-title[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: -8px;\n  left: 0;\n  width: 40px;\n  height: 3px;\n  background: var(--accent-gradient);\n  border-radius: 2px;\n}\n\n.card-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n\n.content-card[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border: 1px solid var(--border-subtle);\n  border-radius: 16px;\n  overflow: hidden;\n  transition: all 0.3s ease;\n}\n\n.content-card[_ngcontent-%COMP%]:hover {\n  background: var(--bg-card-hover);\n  border-color: rgba(0, 212, 255, 0.12);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);\n}\n\n.card-thumbnail-wrapper[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n\n.card-thumbnail[_ngcontent-%COMP%] {\n  min-width: 280px;\n  height: 100%;\n  min-height: 220px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  transition: transform 0.5s ease;\n}\n\n.content-card[_ngcontent-%COMP%]:hover   .card-thumbnail[_ngcontent-%COMP%] {\n  transform: scale(1.03);\n}\n\n.card-body-content[_ngcontent-%COMP%] {\n  padding: 1.75rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.card-link[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n  color: inherit;\n}\n\n.card-link[_ngcontent-%COMP%]:hover {\n  text-decoration: none !important;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-size: 1.35rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 0.5rem;\n  transition: color 0.2s ease;\n}\n\n.content-card[_ngcontent-%COMP%]:hover   .card-title[_ngcontent-%COMP%] {\n  color: var(--accent);\n}\n\n.card-date[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--text-secondary);\n  margin-bottom: 0.75rem;\n}\n\n.card-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n}\n\n.card-description[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 0.95rem;\n  line-height: 1.6;\n  margin-bottom: 1.25rem;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n.card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n\n.btn-outline[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.5rem 1.25rem;\n  border: 1px solid rgba(0, 212, 255, 0.25);\n  border-radius: 8px;\n  color: var(--accent);\n  background: transparent;\n  font-size: 0.875rem;\n  font-weight: 500;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.btn-outline[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 212, 255, 0.08);\n  border-color: rgba(0, 212, 255, 0.4);\n  color: var(--accent);\n  text-decoration: none;\n}\n\n.btn-outline[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .btn-outline[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n\n@media (max-width: 768px) {\n  .card-thumbnail[_ngcontent-%COMP%] {\n    min-width: 100%;\n    min-height: 180px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FrcmFtL3dvcmtzcGFjZS9tZGFrcmFtMjguZ2l0aHViLmlvL3NyYy9hcHAvaG9tZS9ibG9ncy1zZWN0aW9uL2Jsb2dzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2Jsb2dzLXNlY3Rpb24vYmxvZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURDRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0FDQ0o7O0FER0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FDQUY7O0FER0E7RUFDRSwwQkFBQTtFQUNBLHNDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FDQUY7O0FERUU7RUFDRSxnQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsMkJBQUE7RUFDQSx5Q0FBQTtBQ0FKOztBRElBO0VBQ0UsY0FBQTtBQ0RGOztBRElBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSwrQkFBQTtBQ0RGOztBREdFO0VBQ0Usc0JBQUE7QUNESjs7QURLQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUNGRjs7QURLQTtFQUNFLGdDQUFBO0VBQ0EsY0FBQTtBQ0ZGOztBRElFO0VBQ0UsZ0NBQUE7QUNGSjs7QURNQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7QUNIRjs7QURLRTtFQUNFLG9CQUFBO0FDSEo7O0FET0E7RUFDRSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUNKRjs7QURPQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDSkY7O0FET0E7RUFDRSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0FDSkY7O0FET0E7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNKRjs7QURPQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSx5Q0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ0pGOztBRE1FO0VBQ0UsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUNKSjs7QURPRTs7RUFFRSxlQUFBO0FDTEo7O0FEU0E7RUFDRTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtFQ05GO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2Jsb2dzLXNlY3Rpb24vYmxvZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc2VjdGlvbi10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gICY6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAtOHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiAzcHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWdyYWRpZW50KTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gIH1cbn1cblxuLmNhcmQtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMS41cmVtO1xufVxuXG4uY29udGVudC1jYXJkIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctY2FyZCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1zdWJ0bGUpO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWNhcmQtaG92ZXIpO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAyMTIsIDI1NSwgMC4xMik7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB9XG59XG5cbi5jYXJkLXRodW1ibmFpbC13cmFwcGVyIHtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5jYXJkLXRodW1ibmFpbCB7XG4gIG1pbi13aWR0aDogMjgwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLWhlaWdodDogMjIwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZTtcblxuICAuY29udGVudC1jYXJkOmhvdmVyICYge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XG4gIH1cbn1cblxuLmNhcmQtYm9keS1jb250ZW50IHtcbiAgcGFkZGluZzogMS43NXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jYXJkLWxpbmsge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgY29sb3I6IGluaGVyaXQ7XG5cbiAgJjpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLmNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDEuMzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZTtcblxuICAuY29udGVudC1jYXJkOmhvdmVyICYge1xuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xuICB9XG59XG5cbi5jYXJkLWRhdGUge1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG59XG5cbi5jYXJkLXRhZ3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMC41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uY2FyZC1kZXNjcmlwdGlvbiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMztcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNhcmQtYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMC43NXJlbTtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uYnRuLW91dGxpbmUge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjRyZW07XG4gIHBhZGRpbmc6IDAuNXJlbSAxLjI1cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDIxMiwgMjU1LCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBjb2xvcjogdmFyKC0tYWNjZW50KTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMjEyLCAyNTUsIDAuMDgpO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAyMTIsIDI1NSwgMC40KTtcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50KTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cblxuICBzdmcsXG4gIGkge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNhcmQtdGh1bWJuYWlsIHtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMTgwcHg7XG4gIH1cbn0iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc2VjdGlvbi10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLnNlY3Rpb24tdGl0bGU6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC04cHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDNweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWdyYWRpZW50KTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4uY2FyZC1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxLjVyZW07XG59XG5cbi5jb250ZW50LWNhcmQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jYXJkKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXN1YnRsZSk7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG4uY29udGVudC1jYXJkOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctY2FyZC1ob3Zlcik7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAyMTIsIDI1NSwgMC4xMik7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgYm94LXNoYWRvdzogMCA4cHggMzJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbi5jYXJkLXRodW1ibmFpbC13cmFwcGVyIHtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5jYXJkLXRodW1ibmFpbCB7XG4gIG1pbi13aWR0aDogMjgwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLWhlaWdodDogMjIwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZTtcbn1cbi5jb250ZW50LWNhcmQ6aG92ZXIgLmNhcmQtdGh1bWJuYWlsIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcbn1cblxuLmNhcmQtYm9keS1jb250ZW50IHtcbiAgcGFkZGluZzogMS43NXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jYXJkLWxpbmsge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG4uY2FyZC1saW5rOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjM1cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2U7XG59XG4uY29udGVudC1jYXJkOmhvdmVyIC5jYXJkLXRpdGxlIHtcbiAgY29sb3I6IHZhcigtLWFjY2VudCk7XG59XG5cbi5jYXJkLWRhdGUge1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG59XG5cbi5jYXJkLXRhZ3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMC41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uY2FyZC1kZXNjcmlwdGlvbiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMztcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNhcmQtYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMC43NXJlbTtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uYnRuLW91dGxpbmUge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjRyZW07XG4gIHBhZGRpbmc6IDAuNXJlbSAxLjI1cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDIxMiwgMjU1LCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBjb2xvcjogdmFyKC0tYWNjZW50KTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xufVxuLmJ0bi1vdXRsaW5lOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAyMTIsIDI1NSwgMC4wOCk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAyMTIsIDI1NSwgMC40KTtcbiAgY29sb3I6IHZhcigtLWFjY2VudCk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5idG4tb3V0bGluZSBzdmcsXG4uYnRuLW91dGxpbmUgaSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jYXJkLXRodW1ibmFpbCB7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDE4MHB4O1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/
    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-blogs-section",
          templateUrl: "./blogs.component.html",
          styleUrls: ["./blogs.component.scss"]
        }]
      }], function () {
        return [{
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]
        }];
      }, {
        modelTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ["modelTemplate"]
        }]
      });
    })();

    /***/
  }),
  /***/"./src/app/home/hacks-section/hacks-section.component.ts": (
  /*!***************************************************************!*\
    !*** ./src/app/home/hacks-section/hacks-section.component.ts ***!
    \***************************************************************/
  /*! exports provided: HacksSectionComponent */
  /***/
  function _src_app_home_hacksSection_hacksSectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "HacksSectionComponent", function () {
      return HacksSectionComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */
    var _hacks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hacks */"./src/app/home/hacks-section/hacks.ts");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */"./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    function HacksSectionComponent_div_5_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }
    function HacksSectionComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HacksSectionComponent_div_5_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);
          var hack_r26 = ctx.$implicit;
          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
          return ctx_r28.openHack(hack_r26);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HacksSectionComponent_div_5_span_1_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        var hack_r26 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", hack_r26.thumbColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", hack_r26.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "View details for " + hack_r26.title + " hackathon " + hack_r26.year);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", hack_r26.winner);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + hack_r26.thumb + ")", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"])("background-size", hack_r26.thumbSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hack_r26.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hack_r26.year);
      }
    }
    function HacksSectionComponent_button_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HacksSectionComponent_button_7_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);
          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
          return ctx_r30.toggleCollapsed();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\xA0View More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }
    function HacksSectionComponent_button_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HacksSectionComponent_button_8_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);
          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
          return ctx_r32.toggleCollapsed();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\xA0View Less ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }
    var HacksSectionComponent = /*#__PURE__*/function () {
      function HacksSectionComponent() {
        _classCallCheck(this, HacksSectionComponent);
        this.hacks = _hacks__WEBPACK_IMPORTED_MODULE_1__["HACKS"];
        this.collapsed = true;
      }
      return _createClass(HacksSectionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toggleCollapsed",
        value: function toggleCollapsed() {
          var _this2 = this;
          this.collapsed = !this.collapsed;
          setTimeout(function () {
            if (_this2.collapsed) {
              document.querySelector('#Appathon').scrollIntoView();
            }
          }, 1);
        }
      }, {
        key: "openHack",
        value: function openHack(hack) {
          window.open(hack.link, "_blank");
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var panel = $("#hacks > .resume-section-content");
          var width = panel[0].scrollWidth;
          var to = panel.scrollLeft() + (panel.scrollLeft() >= width ? -width : width);
          console.log(to);
          // setTimeout(() => {
          //   $("#hacks > .resume-section-content").animate({
          //     scrollLeft: to
          //   }, 100000);
          // }, 10000);
        }
      }]);
    }();
    HacksSectionComponent.ɵfac = function HacksSectionComponent_Factory(t) {
      return new (t || HacksSectionComponent)();
    };
    HacksSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HacksSectionComponent,
      selectors: [["app-hacks-section"]],
      decls: 9,
      vars: 7,
      consts: [["id", "hacks", 1, "resume-section"], [1, "resume-section-content"], [1, "section-title"], [1, "hacks-grid"], ["class", "hack-card", 3, "backgroundColor", "id", "click", 4, "ngFor", "ngForOf"], ["class", "btn-outline toggle-btn", 3, "click", 4, "ngIf"], [1, "hack-card", 3, "id", "click"], ["class", "trophy-badge", 4, "ngIf"], [1, "hack-thumb"], [1, "hack-info"], [1, "hack-title"], [1, "hack-year"], [1, "trophy-badge"], [1, "fas", "fa-trophy"], [1, "btn-outline", "toggle-btn", 3, "click"], [1, "fa", "fa-plus"], [1, "fa", "fa-minus"]],
      template: function HacksSectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Hackathons");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HacksSectionComponent_div_5_Template, 8, 11, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "slice");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HacksSectionComponent_button_7_Template, 3, 0, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HacksSectionComponent_button_8_Template, 3, 0, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.collapsed ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](6, 3, ctx.hacks, 0, 6) : ctx.hacks);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.collapsed);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.collapsed);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["SlicePipe"]],
      styles: [".section-title[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n  position: relative;\n  display: inline-block;\n}\n.section-title[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: -8px;\n  left: 0;\n  width: 40px;\n  height: 3px;\n  background: var(--accent-gradient);\n  border-radius: 2px;\n}\n.hacks-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 1.25rem;\n  margin-bottom: 2rem;\n}\n.hack-card[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 14px;\n  overflow: hidden;\n  cursor: pointer;\n  aspect-ratio: 1;\n  border: 1px solid var(--border-subtle);\n  transition: all 0.3s ease;\n}\n.hack-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px) scale(1.02);\n  border-color: rgba(0, 212, 255, 0.2);\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);\n}\n.hack-card[_ngcontent-%COMP%]:active {\n  transform: translateY(-2px) scale(1.01);\n}\n.trophy-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n  z-index: 2;\n  background: rgba(0, 212, 255, 0.15);\n  border: 1px solid rgba(0, 212, 255, 0.3);\n  color: var(--accent);\n  font-size: 0.85rem;\n  padding: 0.4rem 0.5rem;\n  border-radius: 8px;\n  backdrop-filter: blur(8px);\n  -webkit-backdrop-filter: blur(8px);\n}\n.hack-thumb[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  transition: transform 0.5s ease;\n}\n.hack-card[_ngcontent-%COMP%]:hover   .hack-thumb[_ngcontent-%COMP%] {\n  transform: scale(1.08);\n}\n.hack-info[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  padding: 1rem;\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 60%, transparent 100%);\n}\n.hack-title[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: #fff;\n  line-height: 1.3;\n  flex: 1;\n  margin-right: 0.5rem;\n}\n.hack-year[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: rgba(255, 255, 255, 0.6);\n  font-variant-numeric: tabular-nums;\n  flex-shrink: 0;\n}\n.toggle-btn[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.btn-outline[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.5rem 1.25rem;\n  border: 1px solid rgba(0, 212, 255, 0.25);\n  border-radius: 8px;\n  color: var(--accent);\n  background: transparent;\n  font-size: 0.875rem;\n  font-weight: 500;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 212, 255, 0.08);\n  border-color: rgba(0, 212, 255, 0.4);\n  color: var(--accent);\n}\n@media (max-width: 576px) {\n  .hacks-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FrcmFtL3dvcmtzcGFjZS9tZGFrcmFtMjguZ2l0aHViLmlvL3NyYy9hcHAvaG9tZS9oYWNrcy1zZWN0aW9uL2hhY2tzLXNlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaGFja3Mtc2VjdGlvbi9oYWNrcy1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDQ0Y7QURDRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0FDQ0o7QURHQTtFQUNFLGFBQUE7RUFDQSw0REFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0FGO0FER0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHNDQUFBO0VBQ0EseUJBQUE7QUNBRjtBREVFO0VBQ0UsdUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDBDQUFBO0FDQUo7QURHRTtFQUNFLHVDQUFBO0FDREo7QURLQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsbUNBQUE7RUFDQSx3Q0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQ0FBQTtBQ0ZGO0FES0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLCtCQUFBO0FDRkY7QURJRTtFQUNFLHNCQUFBO0FDRko7QURNQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0dBQUE7QUNIRjtBRE1BO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLE9BQUE7RUFDQSxvQkFBQTtBQ0hGO0FETUE7RUFDRSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxjQUFBO0FDSEY7QURNQTtFQUNFLGtCQUFBO0FDSEY7QURNQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSx5Q0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ0hGO0FES0U7RUFDRSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esb0JBQUE7QUNISjtBRE9BO0VBQ0U7SUFDRSxxQ0FBQTtJQUNBLFNBQUE7RUNKRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9oYWNrcy1zZWN0aW9uL2hhY2tzLXNlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbi10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gICY6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAtOHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiAzcHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWdyYWRpZW50KTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gIH1cbn1cblxuLmhhY2tzLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyMjBweCwgMWZyKSk7XG4gIGdhcDogMS4yNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuLmhhY2stY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBhc3BlY3QtcmF0aW86IDE7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1zdWJ0bGUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KSBzY2FsZSgxLjAyKTtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMjEyLCAyNTUsIDAuMik7XG4gICAgYm94LXNoYWRvdzogMCAxMnB4IDQwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICB9XG5cbiAgJjphY3RpdmUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KSBzY2FsZSgxLjAxKTtcbiAgfVxufVxuXG4udHJvcGh5LWJhZGdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEycHg7XG4gIGxlZnQ6IDEycHg7XG4gIHotaW5kZXg6IDI7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMjEyLCAyNTUsIDAuMTUpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDIxMiwgMjU1LCAwLjMpO1xuICBjb2xvcjogdmFyKC0tYWNjZW50KTtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBwYWRkaW5nOiAwLjRyZW0gMC41cmVtO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xufVxuXG4uaGFjay10aHVtYiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlO1xuXG4gIC5oYWNrLWNhcmQ6aG92ZXIgJiB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA4KTtcbiAgfVxufVxuXG4uaGFjay1pbmZvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgcGFkZGluZzogMXJlbTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMCwgMCwgMCwgMC43KSAwJSwgcmdiYSgwLCAwLCAwLCAwLjMpIDYwJSwgdHJhbnNwYXJlbnQgMTAwJSk7XG59XG5cbi5oYWNrLXRpdGxlIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjZmZmO1xuICBsaW5lLWhlaWdodDogMS4zO1xuICBmbGV4OiAxO1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbn1cblxuLmhhY2steWVhciB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICBmb250LXZhcmlhbnQtbnVtZXJpYzogdGFidWxhci1udW1zO1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLnRvZ2dsZS1idG4ge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG59XG5cbi5idG4tb3V0bGluZSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNHJlbTtcbiAgcGFkZGluZzogMC41cmVtIDEuMjVyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMjEyLCAyNTUsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAyMTIsIDI1NSwgMC4wOCk7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDIxMiwgMjU1LCAwLjQpO1xuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuaGFja3MtZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICBnYXA6IDFyZW07XG4gIH1cbn0iLCIuc2VjdGlvbi10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLnNlY3Rpb24tdGl0bGU6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC04cHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDNweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWdyYWRpZW50KTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4uaGFja3MtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDIyMHB4LCAxZnIpKTtcbiAgZ2FwOiAxLjI1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4uaGFjay1jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGFzcGVjdC1yYXRpbzogMTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXN1YnRsZSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG4uaGFjay1jYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpIHNjYWxlKDEuMDIpO1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMjEyLCAyNTUsIDAuMik7XG4gIGJveC1zaGFkb3c6IDAgMTJweCA0MHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cbi5oYWNrLWNhcmQ6YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpIHNjYWxlKDEuMDEpO1xufVxuXG4udHJvcGh5LWJhZGdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEycHg7XG4gIGxlZnQ6IDEycHg7XG4gIHotaW5kZXg6IDI7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMjEyLCAyNTUsIDAuMTUpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDIxMiwgMjU1LCAwLjMpO1xuICBjb2xvcjogdmFyKC0tYWNjZW50KTtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBwYWRkaW5nOiAwLjRyZW0gMC41cmVtO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xufVxuXG4uaGFjay10aHVtYiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlO1xufVxuLmhhY2stY2FyZDpob3ZlciAuaGFjay10aHVtYiB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wOCk7XG59XG5cbi5oYWNrLWluZm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBwYWRkaW5nOiAxcmVtO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgwLCAwLCAwLCAwLjcpIDAlLCByZ2JhKDAsIDAsIDAsIDAuMykgNjAlLCB0cmFuc3BhcmVudCAxMDAlKTtcbn1cblxuLmhhY2stdGl0bGUge1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICNmZmY7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIGZsZXg6IDE7XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xufVxuXG4uaGFjay15ZWFyIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gIGZvbnQtdmFyaWFudC1udW1lcmljOiB0YWJ1bGFyLW51bXM7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4udG9nZ2xlLWJ0biB7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cblxuLmJ0bi1vdXRsaW5lIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC40cmVtO1xuICBwYWRkaW5nOiAwLjVyZW0gMS4yNXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAyMTIsIDI1NSwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgY29sb3I6IHZhcigtLWFjY2VudCk7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbn1cbi5idG4tb3V0bGluZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMjEyLCAyNTUsIDAuMDgpO1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMjEyLCAyNTUsIDAuNCk7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmhhY2tzLWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgZ2FwOiAxcmVtO1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/
    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HacksSectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-hacks-section",
          templateUrl: "./hacks-section.component.html",
          styleUrls: ["./hacks-section.component.scss"]
        }]
      }], function () {
        return [];
      }, null);
    })();

    /***/
  }),
  /***/"./src/app/home/hacks-section/hacks.ts": (
  /*!*********************************************!*\
    !*** ./src/app/home/hacks-section/hacks.ts ***!
    \*********************************************/
  /*! exports provided: Hack, HACKS */
  /***/
  function _src_app_home_hacksSection_hacksTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "Hack", function () {
      return Hack;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "HACKS", function () {
      return HACKS;
    });
    var Hack = /*#__PURE__*/_createClass(function Hack() {
      _classCallCheck(this, Hack);
    });
    var HACKS = [{
      thumb: "/assets/hacks/01_hackharvard.svg",
      thumbColor: "#EC1C24",
      title: "Hack Harvard",
      year: "2017",
      link: "https://hackharvard-2017.devpost.com/?ref_content=default&ref_feature=challenge&ref_medium=portfolio"
    }, {
      thumb: "/assets/hacks/02_wehack2.jpg",
      thumbColor: "#1D1D1B",
      title: "WeHack 2.0",
      year: "2018",
      link: "https://www.thehindu.com/news/cities/chennai/vit-students-win-175-lakh-prize-money-in-hackathon/article25151930.ece",
      winner: true
    }, {
      thumb: "/assets/hacks/03_wehack1.jpeg",
      thumbColor: "#383D40",
      title: "WeHack 1.0",
      year: "2015",
      winner: true
    }, {
      thumb: "/assets/hacks/04_devspace.png",
      thumbColor: "#fff",
      title: "DevSpace",
      year: "2017",
      winner: true
    }, {
      thumb: "/assets/hacks/codeplay.jpg",
      thumbColor: "#fff",
      title: "CodePlay",
      year: "2016",
      link: "https://csivit.com/"
    }, {
      thumb: "/assets/hacks/adg.png",
      thumbColor: "#25396B",
      title: "Appathon",
      year: "2016",
      link: "https://adg-vit.github.io/premiumEvents.html",
      winner: true
    }, {
      thumb: "/assets/hacks/c2c.png",
      thumbColor: "#1E1E1E",
      title: "Code2Create",
      year: "2018",
      link: "https://c2c.acmvit.in/",
      winner: true
    }, {
      thumb: "/assets/hacks/kpit_smh.jpg",
      thumbColor: "#fff",
      title: "Dover Smart India Hackathon",
      year: "2018",
      winner: true
    }, {
      thumb: "/assets/hacks/gdg.png",
      thumbColor: "#fff",
      title: "GDG Devfest",
      year: "2017",
      link: "https://dscvit.com/",
      winner: true
    }, {
      thumb: "/assets/hacks/arcs.png",
      thumbColor: "#fff",
      title: "Arcs Hack Battle",
      year: "2017",
      link: "http://arcs.ieeecsvit.com/#hackbattle",
      winner: true
    }, {
      thumb: "/assets/hacks/makeathon.png",
      thumbColor: "#000",
      title: "Select Makeathon",
      year: "2018",
      link: "https://www.facebook.com/Selectvit/"
    }, {
      thumb: "/assets/hacks/makeathon.png",
      thumbColor: "#000",
      title: "Makeathon",
      year: "2016"
    }, {
      thumb: "/assets/hacks/hackoverflow.png",
      thumbColor: "#00415D",
      title: "HackOverflow",
      year: "2017"
    }, {
      thumb: "/assets/hacks/rajhack.png",
      thumbColor: "#fff",
      title: "Rajasthan Digifest Hackathon",
      year: "2018"
    }, {
      thumb: "/assets/hacks/ieeessit.png",
      thumbColor: "#fff",
      title: "Hack4Cause IEEE SSIT",
      year: "",
      link: "https://hack4cause.ieeessitvit.co.in/"
    }, {
      thumb: "/assets/hacks/jivox.png",
      thumbColor: "#fff",
      title: "Jivox hackathon",
      year: "2016"
    }, {
      thumb: "/assets/hacks/jugaadathon.png",
      thumbColor: "#fff",
      title: "Jugadathon",
      year: "2017"
    }, {
      thumb: "/assets/hacks/hasura.jpg",
      thumbColor: "#000",
      title: "Hasura HackDev Challenge",
      year: "2018",
      link: "https://www.hackerearth.com/challenges/hackathon/hasura-hackdev-challenge/"
    }, {
      thumb: "/assets/hacks/ruralhack.png",
      thumbColor: "#313131",
      title: "Rural Development Hackathon",
      year: "2018",
      link: "https://www.hackerearth.com/challenges/hackathon/lets-hack-for-rural-development/"
    }, {
      thumb: "/assets/hacks/devfest.png",
      thumbColor: "#fff",
      title: "DSC Devfest",
      year: "2018"
    }, {
      thumb: "/assets/hacks/angelhack.jpg",
      thumbColor: "#fff",
      title: "Angel hack (WeWork)",
      year: "2018",
      link: "https://www.hackathon.io/wework"
    }, {
      thumb: "/assets/hacks/siemensmakeit.jpg",
      thumbColor: "#000",
      title: "Siemens MakeIT Real",
      year: "2019",
      link: "https://www.hackerearth.com/challenges/hackathon/siemens-makeit-real-2019/"
    }, {
      thumb: "/assets/hacks/agora.png",
      thumbColor: "#fff",
      title: "Agora hack",
      year: "2021",
      link: "https://agoraio.devpost.com/?utm_campaign=agora-io-rtchack-2018.2018-06-01"
    }];

    /***/
  }),
  /***/"./src/app/home/home.component.ts": (
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/
  /*! exports provided: HomeComponent */
  /***/
  function _src_app_home_homeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */
    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */"./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */"./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */
    var _blogs_section_blogs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blogs-section/blogs.component */"./src/app/home/blogs-section/blogs.component.ts");
    /* harmony import */
    var _projects_section_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects-section/projects.component */"./src/app/home/projects-section/projects.component.ts");
    /* harmony import */
    var _hacks_section_hacks_section_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hacks-section/hacks-section.component */"./src/app/home/hacks-section/hacks-section.component.ts");
    function HomeComponent_ng_container_55_article_1_span_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        var job_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \xB7 ", job_r38.location, "");
      }
    }
    function HomeComponent_ng_container_55_article_1_div_15_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        var tag_r47 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tag_r47);
      }
    }
    function HomeComponent_ng_container_55_article_1_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_ng_container_55_article_1_div_15_span_1_Template, 2, 1, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        var job_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", job_r38.tags);
      }
    }
    function HomeComponent_ng_container_55_article_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HomeComponent_ng_container_55_article_1_span_10_Template, 2, 1, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HomeComponent_ng_container_55_article_1_div_15_Template, 2, 1, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        var job_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](job_r38.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](job_r38.company);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", job_r38.location);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](job_r38.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](job_r38.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", job_r38.tags);
      }
    }
    function HomeComponent_ng_container_55_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_ng_container_55_div_2_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);
          var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
          return ctx_r50.showHiddenExperience = true;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " (Masters education + part time experience) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }
    function HomeComponent_ng_container_55_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_ng_container_55_div_3_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53);
          var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
          return ctx_r52.showHiddenExperience = false;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " (Collapse) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }
    function HomeComponent_ng_container_55_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_ng_container_55_article_1_Template, 16, 6, "article", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_ng_container_55_div_2_Template, 4, 0, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_ng_container_55_div_3_Template, 4, 0, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
      if (rf & 2) {
        var i_r39 = ctx.index;
        var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r39 < 2 || i_r39 > 4 || ctx_r34.showHiddenExperience);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r39 === 2 && !ctx_r34.showHiddenExperience);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r39 === 4 && ctx_r34.showHiddenExperience);
      }
    }
    function HomeComponent_div_61_span_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        var skill_r56 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r56);
      }
    }
    function HomeComponent_div_61_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_div_61_span_4_Template, 2, 1, "span", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        var cat_r54 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cat_r54.category);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", cat_r54.tags);
      }
    }
    function HomeComponent_article_67_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        var edu_r57 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](edu_r57.degree);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](edu_r57.school);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](edu_r57.date);
      }
    }
    function HomeComponent_article_75_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        var pub_r58 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", pub_r58.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", pub_r58.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pub_r58.venue);
      }
    }
    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(titleService, meta) {
        _classCallCheck(this, HomeComponent);
        this.titleService = titleService;
        this.meta = meta;
        this.title = "portfolio";
        this.counts = {
          awards: 12,
          hacks: 24,
          publications: 6
        };
        this.experience = [{
          role: "Senior Software Engineer",
          company: "Confluent",
          location: "Remote, Canada",
          date: "Dec 2024 — Present",
          description: "Building enterprise Kafka capabilities in Confluent Cloud with a focus on high-throughput, low-latency distributed storage paths and production reliability.",
          tags: ["Kafka", "Distributed Systems", "Java", "Storage"]
        }, {
          role: "Software Engineer",
          company: "Huawei",
          location: "Toronto, Canada",
          date: "Apr 2024 — Dec 2024",
          description: "Designed high-throughput (~600 Mbps/node) CDC for cloud-native GaussDB in C++. Extended PostgreSQL internals for columnar storage optimized for analytical query execution.",
          tags: ["C++", "Distributed Database", "PostgreSQL", "CDC"]
        }, {
          role: "Research Assistant & Teaching Assistant",
          company: "University of Calgary",
          location: "Calgary, Canada",
          date: "Sep 2021 — Apr 2024",
          description: "Published 4 research papers and a Master's thesis on video streaming at renowned conferences (MMSys, NOSSDAV). Worked with AT&T Labs on HTTP Adaptive Streaming over QUIC.",
          tags: ["Video Streaming", "QUIC", "Research", "AV1"]
        }, {
          role: "Software Engineer",
          company: "InterDigital",
          location: "Montreal, Canada",
          date: "Sep 2023 — Jan 2024",
          description: "Developed end-to-end VPCC point cloud video (XR) and haptics streaming library over WebRTC in C++. Built MP4 packager for MIHS immersive media.",
          tags: ["C++", "WebRTC", "XR"]
        }, {
          role: "Google Summer of Code, VideoLAN (VLC)",
          company: "VideoLAN",
          location: "Remote",
          date: "May 2023 — Aug 2023",
          description: "Implemented 20 different playlist format parsers and VLC core modules in Rust with C++ interoperability.",
          tags: ["Rust", "VLC", "C++", "Open Source"]
        }, {
          role: "Software Engineer",
          company: "Schlumberger",
          location: "Pune, India",
          date: "Jun 2019 — Aug 2021",
          description: "Led the development of ProSource, a kubernetes based Oil & Gas data processing system using C++, Java (Spring), Angular, PostgreSQL. Developed 99.8% available data ingestion services in Python (Flask) and Java on GCP and Azure.",
          tags: ["Python", "Java", "Kubernetes", "GCP", "Azure"]
        }];
        this.showHiddenExperience = false;
        this.skills = [{
          category: "Languages",
          tags: ["C++", "Java", "Python", "Rust"]
        }, {
          category: "Database Internals",
          tags: ["Distributed Storage", "Kafka", "Database Internals", "LSM Trees", "Columnar Storage", "CDC"]
        }, {
          category: "Systems & Networking",
          tags: ["Multithreading", "Linux Kernel", "TCP/IP", "QUIC / HTTP/3", "Memory Management"]
        }];
        this.education = [{
          degree: "Master of Science — Computer Science",
          school: "University of Calgary, Canada",
          date: "2021 — 2023"
        }, {
          degree: "Bachelor of Technology — Information Technology",
          school: "Vellore Institute of Technology, India",
          date: "2015 — 2019"
        }];
        this.publications = [{
          title: "Advancing Temporal and Quality Adaptation in Video Streaming with AV1",
          venue: "Master's Thesis, University of Calgary (2024) — Explores TASQ, SABR, and IFF techniques for smoothed playback.",
          url: "https://doi.org/10.11575/PRISM/43279"
        }, {
          title: "TASQ: Temporal Adaptive Streaming over QUIC",
          venue: "ACM MMSys/NOSSDAV (2023) — Research with AT&T Labs on leveraging AV1 GOP structure for adaptive streaming.",
          url: "https://dl.acm.org/doi/10.1145/3587819.3590991"
        }, {
          title: "IStream Player: A Versatile Video Player Framework",
          venue: "ACM NOSSDAV (2023) — A plugin-based player supporting 360° video, DASH, HLS, and QUIC TRANSPORT.",
          url: "https://dl.acm.org/doi/10.1145/3592473.3592569"
        }, {
          title: "iStream: A Flexible Container-Based Testbed for Multimedia Streaming",
          venue: "ACM MMSys (2023) — A Docker-based testbed for reproducible multimedia streaming experiments.",
          url: "https://ieeexplore.ieee.org/document/10254429"
        }, {
          title: "CRACS: Cross-Cloud Access Control Service for Multi-Cloud SaaS Applications",
          venue: "IEEE Cloud (2023) — Research on security and access control in multi-cloud environments.",
          url: "https://www.researchgate.net/publication/370690474_CRACS_Cross-Cloud_Access_Control_Service_for_Multi-Cloud_SaaS_Applications"
        }, {
          title: "Bheem OS: Reasonably Secure OS Using Rust MicroVMs",
          venue: "Presented at NullCon Berlin (2022) — Secure operating system design using Rust-based micro virtual machines and OpenVMM.",
          url: "https://archive.nullcon.net/website/berlin-2022/speakers/bheem-OS.php"
        }, {
          title: "A First Look at Open-GoP Streaming with Av1 S-Frames",
          venue: "ISM (2025) - International Symposium on Multimedia",
          url: "https://ieeexplore.ieee.org/abstract/document/11366700"
        }];
        if (window.location.pathname.toLowerCase().startsWith("/av1-parser-gui")) {
          window.location.pathname = "media-parser-gui";
        }
      }
      return _createClass(HomeComponent, [{
        key: "toggleExperience",
        value: function toggleExperience(job) {
          job.collapsed = !job.collapsed;
        }
      }, {
        key: "goto",
        value: function _goto(id) {
          var el = document.getElementById(id);
          if (el) {
            el.scrollIntoView({
              behavior: "smooth"
            });
          }
        }
      }]);
    }();
    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"]));
    };
    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 102,
      vars: 6,
      consts: [["id", "about", 1, "hero-section"], [1, "hero-content"], [1, "hero-badge"], [1, "hero-name"], [1, "gradient-text"], [1, "hero-description"], [1, "hero-highlight-list"], [1, "hero-highlight"], [1, "fas", "fa-server"], [1, "fas", "fa-tachometer-alt"], [1, "fas", "fa-cogs"], [1, "hero-stats"], [1, "stat", 3, "click"], [1, "stat-number"], [1, "stat-label"], [1, "social-icons"], ["href", "https://www.linkedin.com/in/mdakram28/", "target", "_blank", "rel", "noopener", "aria-label", "LinkedIn", 1, "social-icon"], [1, "fab", "fa-linkedin-in"], ["href", "https://github.com/mdakram28/", "target", "_blank", "rel", "noopener", "aria-label", "GitHub", 1, "social-icon"], [1, "fab", "fa-github"], ["href", "https://scholar.google.com/citations?user=aFf8olAAAAAJ&hl=en", "target", "_blank", "rel", "noopener", "aria-label", "Google Scholar", 1, "social-icon"], [1, "fas", "fa-graduation-cap"], ["href", "mailto:mdakram28@gmail.com", "aria-label", "Email", 1, "social-icon"], [1, "fas", "fa-envelope"], [1, "scroll-indicator", 3, "click"], [1, "scroll-text"], [1, "scroll-line"], ["id", "experience", 1, "resume-section"], [1, "resume-section-content"], [1, "section-title"], [1, "timeline"], [4, "ngFor", "ngForOf"], ["id", "skills", 1, "resume-section"], [1, "skills-grid"], ["class", "skill-category", 4, "ngFor", "ngForOf"], ["id", "publications", 1, "resume-section"], [1, "edu-grid"], ["class", "edu-card", 4, "ngFor", "ngForOf"], [1, "subsection-title"], [1, "timeline-desc", 2, "margin-top", "-0.5rem", "margin-bottom", "1.25rem"], ["href", "https://scholar.google.com/citations?user=aFf8olAAAAAJ&hl=en", "target", "_blank", "rel", "noopener", 1, "pub-link"], [1, "fas", "fa-external-link-alt", 2, "font-size", "0.8rem", "opacity", "0.6", "margin-left", "4px"], [1, "pub-list"], ["class", "pub-item", 4, "ngFor", "ngForOf"], [1, "site-footer"], [1, "footer-content"], [1, "footer-main"], [1, "footer-name"], [1, "footer-tagline"], [1, "footer-links"], ["href", "mailto:mdakram28@gmail.com", 1, "footer-link"], ["href", "https://www.linkedin.com/in/mdakram28/", "target", "_blank", "rel", "noopener", 1, "footer-link"], ["href", "https://github.com/mdakram28/", "target", "_blank", "rel", "noopener", 1, "footer-link"], ["href", "https://scholar.google.com/citations?user=aFf8olAAAAAJ&hl=en", "target", "_blank", "rel", "noopener", 1, "footer-link"], [1, "footer-bottom"], ["class", "timeline-item", 4, "ngIf"], ["class", "timeline-item hidden-expander", 3, "click", 4, "ngIf"], [1, "timeline-item"], [1, "timeline-marker"], [1, "timeline-content"], [1, "timeline-header"], [1, "timeline-role"], [1, "timeline-company"], ["class", "timeline-location", 4, "ngIf"], [1, "timeline-date"], [1, "timeline-desc"], ["class", "timeline-tags", 4, "ngIf"], [1, "timeline-location"], [1, "timeline-tags"], ["class", "badge badge-primary", 4, "ngFor", "ngForOf"], [1, "badge", "badge-primary"], [1, "timeline-item", "hidden-expander", 3, "click"], [1, "timeline-marker", "is-faded"], [1, "timeline-content", "faded-text"], [1, "skill-category"], [1, "skill-category-title"], [1, "skill-tags"], ["class", "skill-tag", 4, "ngFor", "ngForOf"], [1, "skill-tag"], [1, "edu-card"], [1, "edu-icon"], [1, "edu-degree"], [1, "edu-school"], [1, "edu-date"], [1, "pub-item"], [1, "pub-icon"], [1, "fas", "fa-file-alt"], [1, "pub-title"], ["target", "_blank", "rel", "noopener", 1, "pub-link", 3, "href"], [1, "pub-venue"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Senior Software Engineer @ Confluent \xB7 Distributed Storage Systems");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Akram");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Ansari");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " I build high-performance backends for large-scale distributed systems, with a focus on correctness, reliability, and efficient data processing. Currently building Kafka storage engine and tiered storage platform at Confluent. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Distributed systems and backend platform engineering");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Throughput/latency optimization in production workloads");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Strong systems fundamentals in C++, Java, Python, and Rust");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_22_listener() {
            return ctx["goto"]("experience");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "6+");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Years Exp");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_27_listener() {
            return ctx["goto"]("hacks");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Hackathons");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_32_listener() {
            return ctx["goto"]("publications");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Papers");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_46_listener() {
            return ctx["goto"]("experience");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Scroll");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "section", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h2", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Experience");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, HomeComponent_ng_container_55_Template, 4, 3, "ng-container", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "section", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h2", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Skills");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, HomeComponent_div_61_Template, 5, 2, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "section", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h2", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Education & Publications");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, HomeComponent_article_67_Template, 10, 3, "article", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h3", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Research Publications");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Google Scholar Profile ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "i", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, HomeComponent_article_75_Template, 10, 3, "article", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "app-blogs-section");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "app-projects-section");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "app-hacks-section");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "footer", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h3", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Akram Ansari");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Senior Software Engineer at Confluent");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "i", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " mdakram28@gmail.com ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " LinkedIn ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "a", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " GitHub ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "a", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " Google Scholar ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "\xA9 2026 Akram Ansari");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.counts.hacks);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.counts.publications);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.experience);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skills);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.education);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.publications);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _blogs_section_blogs_component__WEBPACK_IMPORTED_MODULE_3__["BlogsComponent"], _projects_section_projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"], _hacks_section_hacks_section_component__WEBPACK_IMPORTED_MODULE_5__["HacksSectionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: ["@charset \"UTF-8\";\n.hero-section[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  padding: 8rem 2rem 4rem;\n  background: var(--bg-primary);\n  overflow: hidden;\n}\n.hero-section[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 600px;\n  height: 600px;\n  background: radial-gradient(circle, rgba(0, 212, 255, 0.06) 0%, transparent 70%);\n  top: -100px;\n  right: -100px;\n  pointer-events: none;\n}\n.hero-section[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  width: 500px;\n  height: 500px;\n  background: radial-gradient(circle, rgba(123, 47, 255, 0.05) 0%, transparent 70%);\n  bottom: -50px;\n  left: -100px;\n  pointer-events: none;\n}\n.hero-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  max-width: 720px;\n}\n.hero-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.5rem 1.25rem;\n  background: rgba(0, 212, 255, 0.08);\n  border: 1px solid rgba(0, 212, 255, 0.15);\n  border-radius: 100px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--accent);\n  margin-bottom: 2rem;\n  letter-spacing: 0.01em;\n}\n.hero-name[_ngcontent-%COMP%] {\n  font-size: clamp(3rem, 8vw, 5.5rem);\n  font-weight: 800;\n  color: var(--text-primary);\n  line-height: 1.05;\n  letter-spacing: -0.03em;\n  margin-bottom: 1.5rem;\n}\n.gradient-text[_ngcontent-%COMP%] {\n  background: var(--accent-gradient);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.hero-description[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  line-height: 1.7;\n  color: var(--text-secondary);\n  max-width: 560px;\n  margin-bottom: 1.25rem;\n}\n.hero-highlight-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.75rem;\n  margin-bottom: 1.75rem;\n  max-width: 640px;\n}\n.hero-highlight[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  font-size: 0.95rem;\n  color: var(--text-secondary);\n}\n.hero-highlight[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--accent);\n  width: 1rem;\n  text-align: center;\n}\n.hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  margin-bottom: 2.25rem;\n}\n.btn-primary[_ngcontent-%COMP%], .btn-secondary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.4rem;\n  padding: 0.65rem 1.2rem;\n  border-radius: 10px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  transition: all 0.2s ease;\n  cursor: pointer;\n  text-decoration: none;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--accent-gradient);\n  color: var(--bg-primary);\n  border: 1px solid transparent;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  color: var(--bg-primary);\n  text-decoration: none;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: transparent;\n  color: var(--accent);\n  border: 1px solid rgba(0, 212, 255, 0.25);\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 212, 255, 0.08);\n  border-color: rgba(0, 212, 255, 0.45);\n}\n.hero-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2rem;\n  margin-bottom: 2.5rem;\n}\n.stat[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 1rem 1.5rem;\n  background: var(--bg-card);\n  border: 1px solid var(--border-subtle);\n  border-radius: 12px;\n  transition: all 0.3s ease;\n  min-width: 110px;\n  text-align: center;\n}\n.stat[_ngcontent-%COMP%]:hover {\n  background: var(--bg-card-hover);\n  border-color: rgba(0, 212, 255, 0.2);\n  transform: translateY(-2px);\n}\n.stat-number[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  line-height: 1.2;\n  font-variant-numeric: tabular-nums;\n}\n.stat-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.8rem;\n  color: var(--text-secondary);\n  margin-top: 0.25rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.scroll-indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 2.5rem;\n  right: 3rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.75rem;\n  cursor: pointer;\n  opacity: 0.4;\n  transition: opacity 0.3s ease;\n}\n.scroll-indicator[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.scroll-text[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  text-transform: uppercase;\n  letter-spacing: 0.15em;\n  color: var(--text-secondary);\n  writing-mode: vertical-rl;\n}\n.scroll-line[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 60px;\n  background: linear-gradient(to bottom, var(--text-secondary), transparent);\n  animation: scrollPulse 2s ease-in-out infinite;\n}\n@keyframes scrollPulse {\n  0%, 100% {\n    opacity: 0.3;\n    transform: scaleY(1);\n  }\n  50% {\n    opacity: 0.8;\n    transform: scaleY(1.2);\n  }\n}\n\n.section-title[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n  position: relative;\n  display: inline-block;\n}\n.section-title[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: -8px;\n  left: 0;\n  width: 40px;\n  height: 3px;\n  background: var(--accent-gradient);\n  border-radius: 2px;\n}\n.subsection-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 2.5rem 0 1.5rem;\n}\n\n.timeline[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 40px;\n}\n.timeline[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: calc(20px - 1px);\n  top: 0;\n  bottom: 0;\n  width: 2px;\n  background: linear-gradient(to bottom, var(--accent), rgba(123, 47, 255, 0.3), transparent);\n  opacity: 0.4;\n}\n.timeline-item[_ngcontent-%COMP%] {\n  position: relative;\n  padding-bottom: 2.5rem;\n}\n.timeline-item[_ngcontent-%COMP%]:last-child {\n  padding-bottom: 0;\n}\n.timeline-marker[_ngcontent-%COMP%] {\n  position: absolute;\n  left: calc(-20px - 7px);\n  top: 1.85rem;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background: var(--bg-primary);\n  border: 2px solid var(--accent);\n  z-index: 1;\n  transition: all 0.3s ease;\n}\n.timeline-item[_ngcontent-%COMP%]:hover   .timeline-marker[_ngcontent-%COMP%] {\n  box-shadow: 0 0 15px var(--accent);\n  transform: scale(1.2);\n  background: var(--accent);\n}\n.timeline-content[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border: 1px solid var(--border-subtle);\n  border-radius: 14px;\n  padding: 1.5rem;\n  transition: all 0.3s ease;\n}\n.timeline-content[_ngcontent-%COMP%]:hover {\n  background: var(--bg-card-hover);\n  border-color: rgba(0, 212, 255, 0.12);\n}\n.timeline-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 0.75rem;\n}\n.timeline-role[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 0.25rem;\n}\n.timeline-company[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: var(--accent);\n  font-weight: 500;\n}\n.timeline-location[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-weight: 400;\n}\n.timeline-date[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--text-secondary);\n  white-space: nowrap;\n  flex-shrink: 0;\n  font-variant-numeric: tabular-nums;\n}\n.timeline-desc[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 0.95rem;\n  line-height: 1.65;\n  margin-bottom: 0.75rem;\n}\n.timeline-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n}\n\n.skills-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 1.25rem;\n}\n.skill-category[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border: 1px solid var(--border-subtle);\n  border-radius: 14px;\n  padding: 1.5rem;\n  transition: all 0.3s ease;\n}\n.skill-category[_ngcontent-%COMP%]:hover {\n  background: var(--bg-card-hover);\n  border-color: rgba(0, 212, 255, 0.12);\n}\n.skill-category-title[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--accent);\n  margin-bottom: 1rem;\n}\n.skill-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.skill-tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.4rem 0.9rem;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 8px;\n  font-size: 0.875rem;\n  color: var(--text-primary);\n  font-weight: 400;\n  transition: all 0.2s ease;\n}\n.skill-tag[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 212, 255, 0.06);\n  border-color: rgba(0, 212, 255, 0.2);\n}\n\n.edu-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 1.25rem;\n}\n.edu-card[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.25rem;\n  align-items: flex-start;\n  background: var(--bg-card);\n  border: 1px solid var(--border-subtle);\n  border-radius: 14px;\n  padding: 1.5rem;\n  transition: all 0.3s ease;\n}\n.edu-card[_ngcontent-%COMP%]:hover {\n  background: var(--bg-card-hover);\n  border-color: rgba(0, 212, 255, 0.12);\n}\n.edu-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: var(--accent);\n  flex-shrink: 0;\n  margin-top: 0.15rem;\n}\n.edu-degree[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 0.25rem;\n}\n.edu-school[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--text-secondary);\n}\n.edu-date[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--text-secondary);\n  opacity: 0.7;\n  margin-top: 0.25rem;\n  font-variant-numeric: tabular-nums;\n}\n.pub-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.pub-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  align-items: flex-start;\n  padding: 1.25rem;\n  background: var(--bg-card);\n  border: 1px solid var(--border-subtle);\n  border-radius: 12px;\n  transition: all 0.3s ease;\n}\n.pub-item[_ngcontent-%COMP%]:hover {\n  background: var(--bg-card-hover);\n  border-color: rgba(0, 212, 255, 0.12);\n}\n.pub-icon[_ngcontent-%COMP%] {\n  color: var(--accent);\n  font-size: 1.15rem;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.pub-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 0.25rem;\n}\n.pub-link[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: none;\n  transition: all 0.3s ease;\n  display: inline-block;\n}\n.pub-link[_ngcontent-%COMP%]:hover {\n  color: var(--accent);\n  transform: translateX(4px);\n}\n.pub-link[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  opacity: 1 !important;\n  transform: scale(1.1);\n}\n.pub-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n}\n.pub-venue[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-secondary);\n  line-height: 1.5;\n}\n\n.site-footer[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--border-subtle);\n  padding: 3rem 2rem 1.5rem;\n  background: var(--bg-secondary);\n}\n.footer-content[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  gap: 2rem;\n  margin-bottom: 2rem;\n}\n.footer-name[_ngcontent-%COMP%] {\n  font-size: 1.35rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: 0.25rem;\n}\n.footer-tagline[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 0.9rem;\n}\n.footer-links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.6rem;\n}\n.footer-link[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  text-decoration: none;\n  font-size: 0.9rem;\n  transition: color 0.2s ease;\n}\n.footer-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  text-align: center;\n  margin-right: 0.4rem;\n  color: var(--accent);\n}\n.footer-link[_ngcontent-%COMP%]:hover {\n  color: var(--accent);\n  text-decoration: none;\n}\n.footer-bottom[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding-top: 1.5rem;\n  border-top: 1px solid var(--border-subtle);\n  text-align: center;\n  font-size: 0.8rem;\n  color: var(--text-secondary);\n  opacity: 0.5;\n}\n\n@media (max-width: 768px) {\n  .hero-section[_ngcontent-%COMP%] {\n    padding: 6rem 1.5rem 3rem;\n    min-height: auto;\n  }\n\n  .hero-stats[_ngcontent-%COMP%] {\n    gap: 1rem;\n  }\n\n  .hero-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n\n  .btn-primary[_ngcontent-%COMP%], .btn-secondary[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .stat[_ngcontent-%COMP%] {\n    padding: 0.75rem 1rem;\n    min-width: 90px;\n  }\n\n  .stat-number[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n\n  .scroll-indicator[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .timeline[_ngcontent-%COMP%] {\n    padding-left: 40px;\n  }\n\n  .timeline-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.25rem;\n  }\n\n  .skills-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .edu-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .footer-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n@media (max-width: 480px) {\n  .hero-stats[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n\n.timeline-item.hidden-expander[_ngcontent-%COMP%] {\n  padding-bottom: 2rem;\n}\n.timeline-item.hidden-expander[_ngcontent-%COMP%]   .timeline-marker.is-faded[_ngcontent-%COMP%] {\n  background: transparent;\n  border-color: rgba(255, 255, 255, 0.15);\n  cursor: pointer;\n  box-shadow: none;\n  transition: all 0.3s ease;\n  left: calc(-20px - 7px);\n  top: 6px;\n}\n.timeline-item.hidden-expander[_ngcontent-%COMP%]   .timeline-marker.is-faded[_ngcontent-%COMP%]:hover {\n  border-color: var(--accent);\n  background: rgba(0, 212, 255, 0.1);\n  box-shadow: 0 0 10px rgba(0, 212, 255, 0.3);\n  transform: scale(1.1);\n}\n.timeline-item.hidden-expander[_ngcontent-%COMP%]   .timeline-content.faded-text[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  padding: 0;\n  font-size: 0.95rem;\n  color: var(--text-secondary);\n  opacity: 0.6;\n  font-style: italic;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  height: 100%;\n  margin-top: -5px;\n  \n}\n.timeline-item.hidden-expander[_ngcontent-%COMP%]   .timeline-content.faded-text[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  color: var(--accent);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvYWtyYW0vd29ya3NwYWNlL21kYWtyYW0yOC5naXRodWIuaW8vc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FERUY7QUNBRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0ZBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FERUo7QUNDRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUZBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FEQ0o7QUNHQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FEQUY7QUNHQTtFQUNFLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FEQUY7QUNHQTtFQUNFLG1DQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBREFGO0FDR0E7RUFDRSxrQ0FBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQkFBQTtBREFGO0FDR0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FEQUY7QUNHQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBREFGO0FDR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtBREFGO0FDRUU7RUFDRSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBREFKO0FDSUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBRERGO0FDSUE7O0VBRUUsb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QURERjtBQ0lBO0VBQ0Usa0NBQUE7RUFDQSx3QkFBQTtFQUNBLDZCQUFBO0FEREY7QUNHRTtFQUNFLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtBRERKO0FDS0E7RUFDRSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EseUNBQUE7QURGRjtBQ0lFO0VBQ0UsbUNBQUE7RUFDQSxxQ0FBQTtBREZKO0FDTUE7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0FESEY7QUNNQTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBREhGO0FDS0U7RUFDRSxnQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsMkJBQUE7QURISjtBQ09BO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7QURKRjtBQ09BO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtBREpGO0FDT0E7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBREpGO0FDTUU7RUFDRSxZQUFBO0FESko7QUNRQTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7QURMRjtBQ1FBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSwwRUFBQTtFQUNBLDhDQUFBO0FETEY7QUNRQTtFQUVFO0lBRUUsWUFBQTtJQUNBLG9CQUFBO0VEUEY7RUNVQTtJQUNFLFlBQUE7SUFDQSxzQkFBQTtFRFJGO0FBQ0Y7QUNXQSx5QkFBQTtBQUNBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FEVEY7QUNXRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0FEVEo7QUNhQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0FEVkY7QUNhQSw4QkFBQTtBQUtBO0VBQ0Usa0JBQUE7RUFDQSxrQkFOYztBRFJoQjtBQ2dCRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxVQVpTO0VBYVQsMkZBQUE7RUFDQSxZQUFBO0FEZEo7QUNrQkE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0FEZkY7QUNpQkU7RUFDRSxpQkFBQTtBRGZKO0FDbUJBO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxXQWhDWTtFQWlDWixZQWpDWTtFQWtDWixrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QURoQkY7QUNrQkU7RUFDRSxrQ0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QURoQko7QUNvQkE7RUFDRSwwQkFBQTtFQUNBLHNDQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QURqQkY7QUNtQkU7RUFDRSxnQ0FBQTtFQUNBLHFDQUFBO0FEakJKO0FDcUJBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7QURsQkY7QUNxQkE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtBRGxCRjtBQ3FCQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBRGxCRjtBQ3FCQTtFQUNFLDRCQUFBO0VBQ0EsZ0JBQUE7QURsQkY7QUNxQkE7RUFDRSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7QURsQkY7QUNxQkE7RUFDRSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBRGxCRjtBQ3FCQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBRGxCRjtBQ3FCQSxzQkFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLDREQUFBO0VBQ0EsWUFBQTtBRGxCRjtBQ3FCQTtFQUNFLDBCQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBRGxCRjtBQ29CRTtFQUNFLGdDQUFBO0VBQ0EscUNBQUE7QURsQko7QUNzQkE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QURuQkY7QUNzQkE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QURuQkY7QUNzQkE7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUNBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QURuQkY7QUNxQkU7RUFDRSxtQ0FBQTtFQUNBLG9DQUFBO0FEbkJKO0FDdUJBLG1DQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0EsNERBQUE7RUFDQSxZQUFBO0FEcEJGO0FDdUJBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBRHBCRjtBQ3NCRTtFQUNFLGdDQUFBO0VBQ0EscUNBQUE7QURwQko7QUN3QkE7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FEckJGO0FDd0JBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7QURyQkY7QUN3QkE7RUFDRSxpQkFBQTtFQUNBLDRCQUFBO0FEckJGO0FDd0JBO0VBQ0Usa0JBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0FEckJGO0FDd0JBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBRHJCRjtBQ3dCQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FEckJGO0FDdUJFO0VBQ0UsZ0NBQUE7RUFDQSxxQ0FBQTtBRHJCSjtBQ3lCQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBRHRCRjtBQ3lCQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7QUR0QkY7QUN5QkE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FEdEJGO0FDd0JFO0VBQ0Usb0JBQUE7RUFDQSwwQkFBQTtBRHRCSjtBQ3dCSTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7QUR0Qk47QUMwQkU7RUFDRSx5QkFBQTtBRHhCSjtBQzRCQTtFQUNFLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBRHpCRjtBQzRCQSxpQkFBQTtBQUNBO0VBQ0UsMENBQUE7RUFDQSx5QkFBQTtFQUNBLCtCQUFBO0FEekJGO0FDNEJBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FEekJGO0FDNEJBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7QUR6QkY7QUM0QkE7RUFDRSw0QkFBQTtFQUNBLGlCQUFBO0FEekJGO0FDNEJBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBRHpCRjtBQzRCQTtFQUNFLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0FEekJGO0FDMkJFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtBRHpCSjtBQzRCRTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7QUQxQko7QUM4QkE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtBRDNCRjtBQzhCQSxxQkFBQTtBQUNBO0VBQ0U7SUFDRSx5QkFBQTtJQUNBLGdCQUFBO0VEM0JGOztFQzhCQTtJQUNFLFNBQUE7RUQzQkY7O0VDOEJBO0lBQ0Usc0JBQUE7SUFDQSxvQkFBQTtFRDNCRjs7RUM4QkE7O0lBRUUsV0FBQTtFRDNCRjs7RUM4QkE7SUFDRSxxQkFBQTtJQUNBLGVBQUE7RUQzQkY7O0VDOEJBO0lBQ0UsaUJBQUE7RUQzQkY7O0VDOEJBO0lBQ0UsYUFBQTtFRDNCRjs7RUM4QkE7SUFDRSxrQkF0WFk7RUQyVmQ7O0VDOEJBO0lBQ0Usc0JBQUE7SUFDQSxZQUFBO0VEM0JGOztFQzhCQTtJQUNFLDBCQUFBO0VEM0JGOztFQzhCQTtJQUNFLDBCQUFBO0VEM0JGOztFQzhCQTtJQUNFLHNCQUFBO0VEM0JGO0FBQ0Y7QUM4QkE7RUFDRTtJQUNFLGVBQUE7RUQ1QkY7QUFDRjtBQytCQSxnQ0FBQTtBQUNBO0VBQ0Usb0JBQUE7QUQ3QkY7QUMrQkU7RUFDRSx1QkFBQTtFQUNBLHVDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLFFBQUE7QUQ3Qko7QUMrQkk7RUFDRSwyQkFBQTtFQUNBLGtDQUFBO0VBQ0EsMkNBQUE7RUFDQSxxQkFBQTtBRDdCTjtBQ2lDRTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUQvQko7QUNpQ0k7RUFDRSxVQUFBO0VBQ0Esb0JBQUE7QUQvQk4iLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uaGVyby1zZWN0aW9uIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDhyZW0gMnJlbSA0cmVtO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5oZXJvLXNlY3Rpb246OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDYwMHB4O1xuICBoZWlnaHQ6IDYwMHB4O1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDAsIDIxMiwgMjU1LCAwLjA2KSAwJSwgdHJhbnNwYXJlbnQgNzAlKTtcbiAgdG9wOiAtMTAwcHg7XG4gIHJpZ2h0OiAtMTAwcHg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLmhlcm8tc2VjdGlvbjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgxMjMsIDQ3LCAyNTUsIDAuMDUpIDAlLCB0cmFuc3BhcmVudCA3MCUpO1xuICBib3R0b206IC01MHB4O1xuICBsZWZ0OiAtMTAwcHg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uaGVyby1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBtYXgtd2lkdGg6IDcyMHB4O1xufVxuXG4uaGVyby1iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMC41cmVtIDEuMjVyZW07XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMjEyLCAyNTUsIDAuMDgpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDIxMiwgMjU1LCAwLjE1KTtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xufVxuXG4uaGVyby1uYW1lIHtcbiAgZm9udC1zaXplOiBjbGFtcCgzcmVtLCA4dncsIDUuNXJlbSk7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICBsaW5lLWhlaWdodDogMS4wNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAzZW07XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cblxuLmdyYWRpZW50LXRleHQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtZ3JhZGllbnQpO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG59XG5cbi5oZXJvLWRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xuICBsaW5lLWhlaWdodDogMS43O1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICBtYXgtd2lkdGg6IDU2MHB4O1xuICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xufVxuXG4uaGVyby1oaWdobGlnaHQtbGlzdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMC43NXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMS43NXJlbTtcbiAgbWF4LXdpZHRoOiA2NDBweDtcbn1cblxuLmhlcm8taGlnaGxpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjZyZW07XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbn1cbi5oZXJvLWhpZ2hsaWdodCBpIHtcbiAgY29sb3I6IHZhcigtLWFjY2VudCk7XG4gIHdpZHRoOiAxcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oZXJvLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMC43NXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMi4yNXJlbTtcbn1cblxuLmJ0bi1wcmltYXJ5LFxuLmJ0bi1zZWNvbmRhcnkge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMC40cmVtO1xuICBwYWRkaW5nOiAwLjY1cmVtIDEuMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtZ3JhZGllbnQpO1xuICBjb2xvcjogdmFyKC0tYmctcHJpbWFyeSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICBjb2xvcjogdmFyKC0tYmctcHJpbWFyeSk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmJ0bi1zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLWFjY2VudCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMjEyLCAyNTUsIDAuMjUpO1xufVxuLmJ0bi1zZWNvbmRhcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDIxMiwgMjU1LCAwLjA4KTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDIxMiwgMjU1LCAwLjQ1KTtcbn1cblxuLmhlcm8tc3RhdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDJyZW07XG4gIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcbn1cblxuLnN0YXQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jYXJkKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXN1YnRsZSk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIG1pbi13aWR0aDogMTEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zdGF0OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctY2FyZC1ob3Zlcik7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAyMTIsIDI1NSwgMC4yKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xufVxuXG4uc3RhdC1udW1iZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgZm9udC12YXJpYW50LW51bWVyaWM6IHRhYnVsYXItbnVtcztcbn1cblxuLnN0YXQtbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gIG1hcmdpbi10b3A6IDAuMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG59XG5cbi5zY3JvbGwtaW5kaWNhdG9yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDIuNXJlbTtcbiAgcmlnaHQ6IDNyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC43NXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAwLjQ7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xufVxuLnNjcm9sbC1pbmRpY2F0b3I6aG92ZXIge1xuICBvcGFjaXR5OiAwLjg7XG59XG5cbi5zY3JvbGwtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4xNWVtO1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLXJsO1xufVxuXG4uc2Nyb2xsLWxpbmUge1xuICB3aWR0aDogMXB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHZhcigtLXRleHQtc2Vjb25kYXJ5KSwgdHJhbnNwYXJlbnQpO1xuICBhbmltYXRpb246IHNjcm9sbFB1bHNlIDJzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHNjcm9sbFB1bHNlIHtcbiAgMCUsIDEwMCUge1xuICAgIG9wYWNpdHk6IDAuMztcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDAuODtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxLjIpO1xuICB9XG59XG4vKiDilIDilIAgU2VjdGlvbiBzaGFyZWQg4pSA4pSAICovXG4uc2VjdGlvbi10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLnNlY3Rpb24tdGl0bGU6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC04cHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDNweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWdyYWRpZW50KTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4uc3Vic2VjdGlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gIG1hcmdpbjogMi41cmVtIDAgMS41cmVtO1xufVxuXG4vKiDilIDilIAgRXhwZXJpZW5jZSBUaW1lbGluZSDilIDilIAgKi9cbi50aW1lbGluZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xufVxuLnRpbWVsaW5lOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IGNhbGMoMjBweCAtIDFweCk7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMnB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB2YXIoLS1hY2NlbnQpLCByZ2JhKDEyMywgNDcsIDI1NSwgMC4zKSwgdHJhbnNwYXJlbnQpO1xuICBvcGFjaXR5OiAwLjQ7XG59XG5cbi50aW1lbGluZS1pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWJvdHRvbTogMi41cmVtO1xufVxuLnRpbWVsaW5lLWl0ZW06bGFzdC1jaGlsZCB7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4udGltZWxpbmUtbWFya2VyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiBjYWxjKC0yMHB4IC0gN3B4KTtcbiAgdG9wOiAxLjg1cmVtO1xuICB3aWR0aDogMTRweDtcbiAgaGVpZ2h0OiAxNHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnkpO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQpO1xuICB6LWluZGV4OiAxO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuLnRpbWVsaW5lLWl0ZW06aG92ZXIgLnRpbWVsaW5lLW1hcmtlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAxNXB4IHZhcigtLWFjY2VudCk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50KTtcbn1cblxuLnRpbWVsaW5lLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jYXJkKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXN1YnRsZSk7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIHBhZGRpbmc6IDEuNXJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbi50aW1lbGluZS1jb250ZW50OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctY2FyZC1ob3Zlcik7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAyMTIsIDI1NSwgMC4xMik7XG59XG5cbi50aW1lbGluZS1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBnYXA6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG59XG5cbi50aW1lbGluZS1yb2xlIHtcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbn1cblxuLnRpbWVsaW5lLWNvbXBhbnkge1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4udGltZWxpbmUtbG9jYXRpb24ge1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4udGltZWxpbmUtZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGZvbnQtdmFyaWFudC1udW1lcmljOiB0YWJ1bGFyLW51bXM7XG59XG5cbi50aW1lbGluZS1kZXNjIHtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xuICBsaW5lLWhlaWdodDogMS42NTtcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcbn1cblxuLnRpbWVsaW5lLXRhZ3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMC40cmVtO1xufVxuXG4vKiDilIDilIAgU2tpbGxzIEdyaWQg4pSA4pSAICovXG4uc2tpbGxzLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyODBweCwgMWZyKSk7XG4gIGdhcDogMS4yNXJlbTtcbn1cblxuLnNraWxsLWNhdGVnb3J5IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctY2FyZCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1zdWJ0bGUpO1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBwYWRkaW5nOiAxLjVyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG4uc2tpbGwtY2F0ZWdvcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jYXJkLWhvdmVyKTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDIxMiwgMjU1LCAwLjEyKTtcbn1cblxuLnNraWxsLWNhdGVnb3J5LXRpdGxlIHtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNmVtO1xuICBjb2xvcjogdmFyKC0tYWNjZW50KTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLnNraWxsLXRhZ3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMC41cmVtO1xufVxuXG4uc2tpbGwtdGFnIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwLjRyZW0gMC45cmVtO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDQpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xufVxuLnNraWxsLXRhZzpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMjEyLCAyNTUsIDAuMDYpO1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMjEyLCAyNTUsIDAuMik7XG59XG5cbi8qIOKUgOKUgCBFZHVjYXRpb24gJiBQdWJsaWNhdGlvbnMg4pSA4pSAICovXG4uZWR1LWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMjBweCwgMWZyKSk7XG4gIGdhcDogMS4yNXJlbTtcbn1cblxuLmVkdS1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxLjI1cmVtO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctY2FyZCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1zdWJ0bGUpO1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBwYWRkaW5nOiAxLjVyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG4uZWR1LWNhcmQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jYXJkLWhvdmVyKTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDIxMiwgMjU1LCAwLjEyKTtcbn1cblxuLmVkdS1pY29uIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xuICBmbGV4LXNocmluazogMDtcbiAgbWFyZ2luLXRvcDogMC4xNXJlbTtcbn1cblxuLmVkdS1kZWdyZWUge1xuICBmb250LXNpemU6IDEuMDVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xufVxuXG4uZWR1LXNjaG9vbCB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xufVxuXG4uZWR1LWRhdGUge1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gIG9wYWNpdHk6IDAuNztcbiAgbWFyZ2luLXRvcDogMC4yNXJlbTtcbiAgZm9udC12YXJpYW50LW51bWVyaWM6IHRhYnVsYXItbnVtcztcbn1cblxuLnB1Yi1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxcmVtO1xufVxuXG4ucHViLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDFyZW07XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiAxLjI1cmVtO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jYXJkKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXN1YnRsZSk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG4ucHViLWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jYXJkLWhvdmVyKTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDIxMiwgMjU1LCAwLjEyKTtcbn1cblxuLnB1Yi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWFjY2VudCk7XG4gIGZvbnQtc2l6ZTogMS4xNXJlbTtcbiAgZmxleC1zaHJpbms6IDA7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cblxuLnB1Yi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG59XG5cbi5wdWItbGluayB7XG4gIGNvbG9yOiBpbmhlcml0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5wdWItbGluazpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNHB4KTtcbn1cbi5wdWItbGluazpob3ZlciBpIHtcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG4ucHViLWxpbmsgaSB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5cbi5wdWItdmVudWUge1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuXG4vKiDilIDilIAgRm9vdGVyIOKUgOKUgCAqL1xuLnNpdGUtZm9vdGVyIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1zdWJ0bGUpO1xuICBwYWRkaW5nOiAzcmVtIDJyZW0gMS41cmVtO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zZWNvbmRhcnkpO1xufVxuXG4uZm9vdGVyLWNvbnRlbnQge1xuICBtYXgtd2lkdGg6IDExMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAycmVtO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4uZm9vdGVyLW5hbWUge1xuICBmb250LXNpemU6IDEuMzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xufVxuXG4uZm9vdGVyLXRhZ2xpbmUge1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cblxuLmZvb3Rlci1saW5rcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC42cmVtO1xufVxuXG4uZm9vdGVyLWxpbmsge1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2U7XG59XG4uZm9vdGVyLWxpbmsgaSB7XG4gIHdpZHRoOiAxLjI1cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMC40cmVtO1xuICBjb2xvcjogdmFyKC0tYWNjZW50KTtcbn1cbi5mb290ZXItbGluazpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5mb290ZXItYm90dG9tIHtcbiAgbWF4LXdpZHRoOiAxMTAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nLXRvcDogMS41cmVtO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXN1YnRsZSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLyog4pSA4pSAIFJlc3BvbnNpdmUg4pSA4pSAICovXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmhlcm8tc2VjdGlvbiB7XG4gICAgcGFkZGluZzogNnJlbSAxLjVyZW0gM3JlbTtcbiAgICBtaW4taGVpZ2h0OiBhdXRvO1xuICB9XG5cbiAgLmhlcm8tc3RhdHMge1xuICAgIGdhcDogMXJlbTtcbiAgfVxuXG4gIC5oZXJvLWFjdGlvbnMge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIH1cblxuICAuYnRuLXByaW1hcnksXG4uYnRuLXNlY29uZGFyeSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuc3RhdCB7XG4gICAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xuICAgIG1pbi13aWR0aDogOTBweDtcbiAgfVxuXG4gIC5zdGF0LW51bWJlciB7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gIH1cblxuICAuc2Nyb2xsLWluZGljYXRvciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC50aW1lbGluZSB7XG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICB9XG5cbiAgLnRpbWVsaW5lLWhlYWRlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDAuMjVyZW07XG4gIH1cblxuICAuc2tpbGxzLWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG5cbiAgLmVkdS1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuXG4gIC5mb290ZXItY29udGVudCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5oZXJvLXN0YXRzIHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cbn1cbi8qIOKUgOKUgCBIaWRkZW4gR3JvdXAgRXhwYW5kZXIg4pSA4pSAICovXG4udGltZWxpbmUtaXRlbS5oaWRkZW4tZXhwYW5kZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbn1cbi50aW1lbGluZS1pdGVtLmhpZGRlbi1leHBhbmRlciAudGltZWxpbmUtbWFya2VyLmlzLWZhZGVkIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiBub25lO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICBsZWZ0OiBjYWxjKC0yMHB4IC0gN3B4KTtcbiAgdG9wOiA2cHg7XG59XG4udGltZWxpbmUtaXRlbS5oaWRkZW4tZXhwYW5kZXIgLnRpbWVsaW5lLW1hcmtlci5pcy1mYWRlZDpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYWNjZW50KTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAyMTIsIDI1NSwgMC4xKTtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAyMTIsIDI1NSwgMC4zKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuLnRpbWVsaW5lLWl0ZW0uaGlkZGVuLWV4cGFuZGVyIC50aW1lbGluZS1jb250ZW50LmZhZGVkLXRleHQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gIG9wYWNpdHk6IDAuNjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLXRvcDogLTVweDtcbiAgLyogQWxpZ25tZW50IGZpeCAqL1xufVxuLnRpbWVsaW5lLWl0ZW0uaGlkZGVuLWV4cGFuZGVyIC50aW1lbGluZS1jb250ZW50LmZhZGVkLXRleHQ6aG92ZXIge1xuICBvcGFjaXR5OiAxO1xuICBjb2xvcjogdmFyKC0tYWNjZW50KTtcbn0iLCIuaGVyby1zZWN0aW9uIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDhyZW0gMnJlbSA0cmVtO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNjAwcHg7XG4gICAgaGVpZ2h0OiA2MDBweDtcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDAsIDIxMiwgMjU1LCAwLjA2KSAwJSwgdHJhbnNwYXJlbnQgNzAlKTtcbiAgICB0b3A6IC0xMDBweDtcbiAgICByaWdodDogLTEwMHB4O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5cbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDEyMywgNDcsIDI1NSwgMC4wNSkgMCUsIHRyYW5zcGFyZW50IDcwJSk7XG4gICAgYm90dG9tOiAtNTBweDtcbiAgICBsZWZ0OiAtMTAwcHg7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbn1cblxuLmhlcm8tY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgbWF4LXdpZHRoOiA3MjBweDtcbn1cblxuLmhlcm8tYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDAuNXJlbSAxLjI1cmVtO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDIxMiwgMjU1LCAwLjA4KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAyMTIsIDI1NSwgMC4xNSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogdmFyKC0tYWNjZW50KTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbn1cblxuLmhlcm8tbmFtZSB7XG4gIGZvbnQtc2l6ZTogY2xhbXAoM3JlbSwgOHZ3LCA1LjVyZW0pO1xuICBmb250LXdlaWdodDogODAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgbGluZS1oZWlnaHQ6IDEuMDU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wM2VtO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbi5ncmFkaWVudC10ZXh0IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWdyYWRpZW50KTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xufVxuXG4uaGVyby1kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMS4xNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNztcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgbWF4LXdpZHRoOiA1NjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbn1cblxuLmhlcm8taGlnaGxpZ2h0LWxpc3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDAuNzVyZW07XG4gIG1hcmdpbi1ib3R0b206IDEuNzVyZW07XG4gIG1heC13aWR0aDogNjQwcHg7XG59XG5cbi5oZXJvLWhpZ2hsaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC42cmVtO1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG5cbiAgaSB7XG4gICAgY29sb3I6IHZhcigtLWFjY2VudCk7XG4gICAgd2lkdGg6IDFyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG5cbi5oZXJvLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMC43NXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMi4yNXJlbTtcbn1cblxuLmJ0bi1wcmltYXJ5LFxuLmJ0bi1zZWNvbmRhcnkge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMC40cmVtO1xuICBwYWRkaW5nOiAwLjY1cmVtIDEuMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtZ3JhZGllbnQpO1xuICBjb2xvcjogdmFyKC0tYmctcHJpbWFyeSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICBjb2xvcjogdmFyKC0tYmctcHJpbWFyeSk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG59XG5cbi5idG4tc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDIxMiwgMjU1LCAwLjI1KTtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDIxMiwgMjU1LCAwLjA4KTtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMjEyLCAyNTUsIDAuNDUpO1xuICB9XG59XG5cbi5oZXJvLXN0YXRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAycmVtO1xuICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XG59XG5cbi5zdGF0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctY2FyZCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1zdWJ0bGUpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICBtaW4td2lkdGg6IDExMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctY2FyZC1ob3Zlcik7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDIxMiwgMjU1LCAwLjIpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgfVxufVxuXG4uc3RhdC1udW1iZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgZm9udC12YXJpYW50LW51bWVyaWM6IHRhYnVsYXItbnVtcztcbn1cblxuLnN0YXQtbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gIG1hcmdpbi10b3A6IDAuMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG59XG5cbi5zY3JvbGwtaW5kaWNhdG9yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDIuNXJlbTtcbiAgcmlnaHQ6IDNyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC43NXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAwLjQ7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xuXG4gICY6aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuODtcbiAgfVxufVxuXG4uc2Nyb2xsLXRleHQge1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTVlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1ybDtcbn1cblxuLnNjcm9sbC1saW5lIHtcbiAgd2lkdGg6IDFweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB2YXIoLS10ZXh0LXNlY29uZGFyeSksIHRyYW5zcGFyZW50KTtcbiAgYW5pbWF0aW9uOiBzY3JvbGxQdWxzZSAycyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBzY3JvbGxQdWxzZSB7XG5cbiAgMCUsXG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDAuMztcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcbiAgfVxuXG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMC44O1xuICAgIHRyYW5zZm9ybTogc2NhbGVZKDEuMik7XG4gIH1cbn1cblxuLyog4pSA4pSAIFNlY3Rpb24gc2hhcmVkIOKUgOKUgCAqL1xuLnNlY3Rpb24tdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAmOjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLThweDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogM3B4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1ncmFkaWVudCk7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB9XG59XG5cbi5zdWJzZWN0aW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgbWFyZ2luOiAyLjVyZW0gMCAxLjVyZW07XG59XG5cbi8qIOKUgOKUgCBFeHBlcmllbmNlIFRpbWVsaW5lIOKUgOKUgCAqL1xuJHRpbWVsaW5lLWxlZnQ6IDQwcHg7XG4kbWFya2VyLXNpemU6IDE0cHg7XG4kbGluZS13aWR0aDogMnB4O1xuXG4udGltZWxpbmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogJHRpbWVsaW5lLWxlZnQ7XG5cbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogY2FsYygjeyR0aW1lbGluZS1sZWZ0IC8gMn0gLSAjeyRsaW5lLXdpZHRoIC8gMn0pO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6ICRsaW5lLXdpZHRoO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHZhcigtLWFjY2VudCksIHJnYmEoMTIzLCA0NywgMjU1LCAwLjMpLCB0cmFuc3BhcmVudCk7XG4gICAgb3BhY2l0eTogMC40O1xuICB9XG59XG5cbi50aW1lbGluZS1pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWJvdHRvbTogMi41cmVtO1xuXG4gICY6bGFzdC1jaGlsZCB7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gIH1cbn1cblxuLnRpbWVsaW5lLW1hcmtlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogY2FsYygtI3skdGltZWxpbmUtbGVmdCAvIDJ9IC0gI3skbWFya2VyLXNpemUgLyAyfSk7XG4gIHRvcDogMS44NXJlbTsgLy8gQWxpZ25tZW50IHdpdGggZmlyc3QgbGluZSBvZiB0ZXh0XG4gIHdpZHRoOiAkbWFya2VyLXNpemU7XG4gIGhlaWdodDogJG1hcmtlci1zaXplO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnkpO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQpO1xuICB6LWluZGV4OiAxO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuXG4gIC50aW1lbGluZS1pdGVtOmhvdmVyICYge1xuICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4IHZhcigtLWFjY2VudCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudCk7XG4gIH1cbn1cblxuLnRpbWVsaW5lLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jYXJkKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXN1YnRsZSk7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIHBhZGRpbmc6IDEuNXJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jYXJkLWhvdmVyKTtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMjEyLCAyNTUsIDAuMTIpO1xuICB9XG59XG5cbi50aW1lbGluZS1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBnYXA6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG59XG5cbi50aW1lbGluZS1yb2xlIHtcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbn1cblxuLnRpbWVsaW5lLWNvbXBhbnkge1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4udGltZWxpbmUtbG9jYXRpb24ge1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4udGltZWxpbmUtZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGZvbnQtdmFyaWFudC1udW1lcmljOiB0YWJ1bGFyLW51bXM7XG59XG5cbi50aW1lbGluZS1kZXNjIHtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xuICBsaW5lLWhlaWdodDogMS42NTtcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcbn1cblxuLnRpbWVsaW5lLXRhZ3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMC40cmVtO1xufVxuXG4vKiDilIDilIAgU2tpbGxzIEdyaWQg4pSA4pSAICovXG4uc2tpbGxzLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyODBweCwgMWZyKSk7XG4gIGdhcDogMS4yNXJlbTtcbn1cblxuLnNraWxsLWNhdGVnb3J5IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctY2FyZCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1zdWJ0bGUpO1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBwYWRkaW5nOiAxLjVyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctY2FyZC1ob3Zlcik7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDIxMiwgMjU1LCAwLjEyKTtcbiAgfVxufVxuXG4uc2tpbGwtY2F0ZWdvcnktdGl0bGUge1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA2ZW07XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uc2tpbGwtdGFncyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAwLjVyZW07XG59XG5cbi5za2lsbC10YWcge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDAuNHJlbSAwLjlyZW07XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAyMTIsIDI1NSwgMC4wNik7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDIxMiwgMjU1LCAwLjIpO1xuICB9XG59XG5cbi8qIOKUgOKUgCBFZHVjYXRpb24gJiBQdWJsaWNhdGlvbnMg4pSA4pSAICovXG4uZWR1LWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMjBweCwgMWZyKSk7XG4gIGdhcDogMS4yNXJlbTtcbn1cblxuLmVkdS1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxLjI1cmVtO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctY2FyZCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1zdWJ0bGUpO1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBwYWRkaW5nOiAxLjVyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctY2FyZC1ob3Zlcik7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDIxMiwgMjU1LCAwLjEyKTtcbiAgfVxufVxuXG4uZWR1LWljb24ge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY29sb3I6IHZhcigtLWFjY2VudCk7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBtYXJnaW4tdG9wOiAwLjE1cmVtO1xufVxuXG4uZWR1LWRlZ3JlZSB7XG4gIGZvbnQtc2l6ZTogMS4wNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG59XG5cbi5lZHUtc2Nob29sIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG59XG5cbi5lZHUtZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgb3BhY2l0eTogMC43O1xuICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xuICBmb250LXZhcmlhbnQtbnVtZXJpYzogdGFidWxhci1udW1zO1xufVxuXG4ucHViLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDFyZW07XG59XG5cbi5wdWItaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMXJlbTtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmc6IDEuMjVyZW07XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLWNhcmQpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItc3VidGxlKTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jYXJkLWhvdmVyKTtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMjEyLCAyNTUsIDAuMTIpO1xuICB9XG59XG5cbi5wdWItaWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xuICBmb250LXNpemU6IDEuMTVyZW07XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG5cbi5wdWItdGl0bGUge1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xufVxuXG4ucHViLWxpbmsge1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6IHZhcigtLWFjY2VudCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDRweCk7XG5cbiAgICBpIHtcbiAgICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICB9XG4gIH1cblxuICBpIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICB9XG59XG5cbi5wdWItdmVudWUge1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuXG4vKiDilIDilIAgRm9vdGVyIOKUgOKUgCAqL1xuLnNpdGUtZm9vdGVyIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1zdWJ0bGUpO1xuICBwYWRkaW5nOiAzcmVtIDJyZW0gMS41cmVtO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zZWNvbmRhcnkpO1xufVxuXG4uZm9vdGVyLWNvbnRlbnQge1xuICBtYXgtd2lkdGg6IDExMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAycmVtO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4uZm9vdGVyLW5hbWUge1xuICBmb250LXNpemU6IDEuMzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xufVxuXG4uZm9vdGVyLXRhZ2xpbmUge1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cblxuLmZvb3Rlci1saW5rcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC42cmVtO1xufVxuXG4uZm9vdGVyLWxpbmsge1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2U7XG5cbiAgaSB7XG4gICAgd2lkdGg6IDEuMjVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1yaWdodDogMC40cmVtO1xuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6IHZhcigtLWFjY2VudCk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG59XG5cbi5mb290ZXItYm90dG9tIHtcbiAgbWF4LXdpZHRoOiAxMTAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nLXRvcDogMS41cmVtO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXN1YnRsZSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLyog4pSA4pSAIFJlc3BvbnNpdmUg4pSA4pSAICovXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmhlcm8tc2VjdGlvbiB7XG4gICAgcGFkZGluZzogNnJlbSAxLjVyZW0gM3JlbTtcbiAgICBtaW4taGVpZ2h0OiBhdXRvO1xuICB9XG5cbiAgLmhlcm8tc3RhdHMge1xuICAgIGdhcDogMXJlbTtcbiAgfVxuXG4gIC5oZXJvLWFjdGlvbnMge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIH1cblxuICAuYnRuLXByaW1hcnksXG4gIC5idG4tc2Vjb25kYXJ5IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5zdGF0IHtcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XG4gICAgbWluLXdpZHRoOiA5MHB4O1xuICB9XG5cbiAgLnN0YXQtbnVtYmVyIHtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgfVxuXG4gIC5zY3JvbGwtaW5kaWNhdG9yIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLnRpbWVsaW5lIHtcbiAgICBwYWRkaW5nLWxlZnQ6ICR0aW1lbGluZS1sZWZ0O1xuICB9XG5cbiAgLnRpbWVsaW5lLWhlYWRlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDAuMjVyZW07XG4gIH1cblxuICAuc2tpbGxzLWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG5cbiAgLmVkdS1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuXG4gIC5mb290ZXItY29udGVudCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmhlcm8tc3RhdHMge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxufVxuXG4vKiDilIDilIAgSGlkZGVuIEdyb3VwIEV4cGFuZGVyIOKUgOKUgCAqL1xuLnRpbWVsaW5lLWl0ZW0uaGlkZGVuLWV4cGFuZGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XG5cbiAgLnRpbWVsaW5lLW1hcmtlci5pcy1mYWRlZCB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgbGVmdDogY2FsYygtI3skdGltZWxpbmUtbGVmdCAvIDJ9IC0gI3skbWFya2VyLXNpemUgLyAyfSk7XG4gICAgdG9wOiA2cHg7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYWNjZW50KTtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMjEyLCAyNTUsIDAuMSk7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDIxMiwgMjU1LCAwLjMpO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgIH1cbiAgfVxuXG4gIC50aW1lbGluZS1jb250ZW50LmZhZGVkLXRleHQge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xuICAgIC8qIEFsaWdubWVudCBmaXggKi9cblxuICAgICY6aG92ZXIge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xuICAgIH1cbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/
    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-home",
          templateUrl: "./home.component.html",
          styleUrls: ["./home.component.scss"]
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"]
        }];
      }, null);
    })();

    /***/
  }),
  /***/"./src/app/home/projects-section/projects.component.ts": (
  /*!*************************************************************!*\
    !*** ./src/app/home/projects-section/projects.component.ts ***!
    \*************************************************************/
  /*! exports provided: ProjectsComponent */
  /***/
  function _src_app_home_projectsSection_projectsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () {
      return ProjectsComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */
    var _projects_resume_projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects/resume-projects */"./src/app/home/projects-section/projects/resume-projects.ts");
    /* harmony import */
    var ng_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-gallery */"./node_modules/ng-gallery/__ivy_ngcc__/fesm2015/ng-gallery.js");
    /* harmony import */
    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */"./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */"./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */
    var ngx_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-markdown */"./node_modules/ngx-markdown/__ivy_ngcc__/fesm2015/ngx-markdown.js");
    var _c0 = ["modelTemplate"];
    function ProjectsComponent_div_5_span_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        var tag_r5 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tag_r5);
      }
    }
    function ProjectsComponent_div_5_a_15_i_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 22);
      }
    }
    function ProjectsComponent_div_5_a_15_i_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 23);
      }
    }
    function ProjectsComponent_div_5_a_15_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }
    function ProjectsComponent_div_5_a_15_span_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Live Site");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }
    function ProjectsComponent_div_5_a_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectsComponent_div_5_a_15_i_1_Template, 1, 0, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProjectsComponent_div_5_a_15_i_2_Template, 1, 0, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProjectsComponent_div_5_a_15_span_3_Template, 2, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProjectsComponent_div_5_a_15_span_4_Template, 2, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        var link_r6 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", link_r6.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", link_r6.type == "github");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", link_r6.type == "website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", link_r6.type == "github");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", link_r6.type == "website");
      }
    }
    function ProjectsComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_div_5_Template_div_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
          var proj_r2 = ctx.$implicit;
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
          return ctx_r11.openProjectModal(proj_r2);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_div_5_Template_h3_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
          var proj_r2 = ctx.$implicit;
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
          return ctx_r13.openProjectModal(proj_r2);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProjectsComponent_div_5_span_9_Template, 2, 1, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_div_5_Template_span_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
          var proj_r2 = ctx.$implicit;
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
          return ctx_r14.openProjectModal(proj_r2);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Gallery \xB7 More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProjectsComponent_div_5_a_15_Template, 5, 5, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        var proj_r2 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", proj_r2.thumbnail_bg || "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url('" + proj_r2.thumbnail + "')", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"])("background-size", proj_r2.thumbnail_size || "cover");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "View " + proj_r2.title + " project gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", proj_r2.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](proj_r2.subtitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", proj_r2.tags);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](proj_r2.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", proj_r2.links);
      }
    }
    function ProjectsComponent_6_ng_template_0_span_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        var tag_r20 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tag_r20);
      }
    }
    function ProjectsComponent_6_ng_template_0_gallery_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "gallery", 34);
      }
      if (rf & 2) {
        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r18.images)("thumb", false)("dots", true)("counter", false);
      }
    }
    function ProjectsComponent_6_ng_template_0_markdown_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "markdown", 35);
      }
      if (rf & 2) {
        var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r19.project.readmeSrc);
      }
    }
    function ProjectsComponent_6_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_6_ng_template_0_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);
          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
          return ctx_r21.modalRef.hide();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\xD7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProjectsComponent_6_ng_template_0_span_10_Template, 2, 1, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ProjectsComponent_6_ng_template_0_gallery_13_Template, 1, 4, "gallery", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ProjectsComponent_6_ng_template_0_markdown_14_Template, 1, 1, "markdown", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r16.project.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r16.project.subtitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r16.project.tags);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r16.project.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.images == null ? null : ctx_r16.images.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.project.readmeSrc);
      }
    }
    function ProjectsComponent_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProjectsComponent_6_ng_template_0_Template, 15, 6, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      }
    }
    var ProjectsComponent = /*#__PURE__*/function () {
      function ProjectsComponent(modalService) {
        _classCallCheck(this, ProjectsComponent);
        this.modalService = modalService;
        this.projects = [_projects_resume_projects__WEBPACK_IMPORTED_MODULE_1__["ProjectOpenVMM"], _projects_resume_projects__WEBPACK_IMPORTED_MODULE_1__["ProjectRoverX"], _projects_resume_projects__WEBPACK_IMPORTED_MODULE_1__["ProjectSyncLib"], _projects_resume_projects__WEBPACK_IMPORTED_MODULE_1__["ProjectVideoLab"], _projects_resume_projects__WEBPACK_IMPORTED_MODULE_1__["ProjectMediaParsers"], _projects_resume_projects__WEBPACK_IMPORTED_MODULE_1__["ProjectThorstream"]];
        this.viewType = "grid";
      }
      return _createClass(ProjectsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openProjectModal",
        value: function openProjectModal(project) {
          var _this3 = this;
          this.project = project;
          this.images = (project.gallery || []).map(function (src) {
            return new ng_gallery__WEBPACK_IMPORTED_MODULE_2__["ImageItem"]({
              src: src,
              thumb: src
            });
          });
          setTimeout(function () {
            _this3.modalRef = _this3.modalService.show(_this3.modelTemplate, {
              "class": "modal-custom-lg"
            });
          }, 100);
        }
      }]);
    }();
    ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) {
      return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"]));
    };
    ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProjectsComponent,
      selectors: [["app-projects-section"]],
      viewQuery: function ProjectsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }
        if (rf & 2) {
          var _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.modelTemplate = _t.first);
        }
      },
      decls: 7,
      vars: 2,
      consts: [["id", "projects", 1, "resume-section"], [1, "resume-section-content"], [1, "section-title"], [1, "card-list"], ["class", "content-card d-flex flex-column flex-md-row", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "content-card", "d-flex", "flex-column", "flex-md-row"], [1, "card-thumbnail-wrapper"], [1, "card-thumbnail", 3, "click"], [1, "card-body-content"], [1, "card-title", 3, "click"], [1, "card-subtitle"], [1, "card-tags"], ["class", "badge badge-primary", 4, "ngFor", "ngForOf"], [1, "card-description"], [1, "card-actions"], [1, "btn-outline", 3, "click"], ["class", "btn-outline", "target", "_blank", "rel", "noopener", 3, "href", 4, "ngFor", "ngForOf"], [1, "badge", "badge-primary"], ["target", "_blank", "rel", "noopener", 1, "btn-outline", 3, "href"], ["class", "fab fa-github", 4, "ngIf"], ["class", "fas fa-external-link-alt", 4, "ngIf"], [1, "fab", "fa-github"], [1, "fas", "fa-external-link-alt"], ["modelTemplate", ""], ["id", "project-modal-body", 1, "modal-body"], [2, "float", "right"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true", 2, "font-size", "40px"], [1, "card-title", 2, "margin-top", "0.5rem"], [1, "card-tags", 2, "margin-top", "0.5rem"], [1, "card-description", 2, "margin-top", "1rem"], ["thumbPosition", "left", 3, "items", "thumb", "dots", "counter", 4, "ngIf"], ["class", "markdown", 3, "src", 4, "ngIf"], ["thumbPosition", "left", 3, "items", "thumb", "dots", "counter"], [1, "markdown", 3, "src"]],
      template: function ProjectsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Projects");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProjectsComponent_div_5_Template, 16, 12, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProjectsComponent_6_Template, 2, 0, undefined, 5);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.project);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ng_gallery__WEBPACK_IMPORTED_MODULE_2__["GalleryComponent"], ngx_markdown__WEBPACK_IMPORTED_MODULE_5__["MarkdownComponent"]],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.section-title[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n  position: relative;\n  display: inline-block;\n}\n\n.section-title[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: -8px;\n  left: 0;\n  width: 40px;\n  height: 3px;\n  background: var(--accent-gradient);\n  border-radius: 2px;\n}\n\n.card-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n\n.content-card[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border: 1px solid var(--border-subtle);\n  border-radius: 16px;\n  overflow: hidden;\n  transition: all 0.3s ease;\n}\n\n.content-card[_ngcontent-%COMP%]:hover {\n  background: var(--bg-card-hover);\n  border-color: rgba(0, 212, 255, 0.12);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);\n}\n\n.card-thumbnail-wrapper[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  overflow: hidden;\n}\n\n.card-thumbnail[_ngcontent-%COMP%] {\n  min-width: 280px;\n  height: 100%;\n  min-height: 220px;\n  background-position: center;\n  background-repeat: no-repeat;\n  cursor: pointer;\n  transition: transform 0.5s ease;\n}\n\n.content-card[_ngcontent-%COMP%]:hover   .card-thumbnail[_ngcontent-%COMP%] {\n  transform: scale(1.03);\n}\n\n.card-body-content[_ngcontent-%COMP%] {\n  padding: 1.75rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-size: 1.35rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 0.35rem;\n  cursor: pointer;\n  transition: color 0.2s ease;\n}\n\n.card-title[_ngcontent-%COMP%]:hover {\n  color: var(--accent);\n}\n\n.card-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--text-secondary);\n  margin-bottom: 0.75rem;\n}\n\n.card-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n}\n\n.card-description[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 0.95rem;\n  line-height: 1.6;\n  margin-bottom: 1.25rem;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n.card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n\n.btn-outline[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.5rem 1.25rem;\n  border: 1px solid rgba(0, 212, 255, 0.25);\n  border-radius: 8px;\n  color: var(--accent);\n  background: transparent;\n  font-size: 0.875rem;\n  font-weight: 500;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.btn-outline[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 212, 255, 0.08);\n  border-color: rgba(0, 212, 255, 0.4);\n  color: var(--accent);\n  text-decoration: none;\n}\n\n.btn-outline[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .btn-outline[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n\n@media (max-width: 768px) {\n  .card-thumbnail[_ngcontent-%COMP%] {\n    min-width: 100%;\n    min-height: 180px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FrcmFtL3dvcmtzcGFjZS9tZGFrcmFtMjguZ2l0aHViLmlvL3NyYy9hcHAvaG9tZS9wcm9qZWN0cy1zZWN0aW9uL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL3Byb2plY3RzLXNlY3Rpb24vcHJvamVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURDRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0FDQ0o7O0FER0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FDQUY7O0FER0E7RUFDRSwwQkFBQTtFQUNBLHNDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FDQUY7O0FERUU7RUFDRSxnQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsMkJBQUE7RUFDQSx5Q0FBQTtBQ0FKOztBRElBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDREY7O0FESUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7QUNERjs7QURHRTtFQUNFLHNCQUFBO0FDREo7O0FES0E7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FDRkY7O0FES0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtBQ0ZGOztBRElFO0VBQ0Usb0JBQUE7QUNGSjs7QURNQTtFQUNFLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQ0hGOztBRE1BO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNIRjs7QURNQTtFQUNFLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUNIRjs7QURNQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0hGOztBRE1BO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLHlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDSEY7O0FES0U7RUFDRSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQ0hKOztBRE1FOztFQUVFLGVBQUE7QUNKSjs7QURRQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0VDTEY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcHJvamVjdHMtc2VjdGlvbi9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zZWN0aW9uLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IC04cHg7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDNweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtZ3JhZGllbnQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgfVxufVxuXG4uY2FyZC1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxLjVyZW07XG59XG5cbi5jb250ZW50LWNhcmQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jYXJkKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXN1YnRsZSk7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctY2FyZC1ob3Zlcik7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDIxMiwgMjU1LCAwLjEyKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIH1cbn1cblxuLmNhcmQtdGh1bWJuYWlsLXdyYXBwZXIge1xuICBmbGV4LXNocmluazogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNhcmQtdGh1bWJuYWlsIHtcbiAgbWluLXdpZHRoOiAyODBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4taGVpZ2h0OiAyMjBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2U7XG5cbiAgLmNvbnRlbnQtY2FyZDpob3ZlciAmIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xuICB9XG59XG5cbi5jYXJkLWJvZHktY29udGVudCB7XG4gIHBhZGRpbmc6IDEuNzVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4zNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gIG1hcmdpbi1ib3R0b206IDAuMzVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlO1xuXG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xuICB9XG59XG5cbi5jYXJkLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG59XG5cbi5jYXJkLXRhZ3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMC41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uY2FyZC1kZXNjcmlwdGlvbiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMztcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNhcmQtYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMC43NXJlbTtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uYnRuLW91dGxpbmUge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjRyZW07XG4gIHBhZGRpbmc6IDAuNXJlbSAxLjI1cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDIxMiwgMjU1LCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBjb2xvcjogdmFyKC0tYWNjZW50KTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMjEyLCAyNTUsIDAuMDgpO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAyMTIsIDI1NSwgMC40KTtcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50KTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cblxuICBzdmcsXG4gIGkge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNhcmQtdGh1bWJuYWlsIHtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMTgwcHg7XG4gIH1cbn0iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc2VjdGlvbi10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLnNlY3Rpb24tdGl0bGU6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC04cHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDNweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWdyYWRpZW50KTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4uY2FyZC1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxLjVyZW07XG59XG5cbi5jb250ZW50LWNhcmQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jYXJkKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXN1YnRsZSk7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG4uY29udGVudC1jYXJkOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctY2FyZC1ob3Zlcik7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAyMTIsIDI1NSwgMC4xMik7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgYm94LXNoYWRvdzogMCA4cHggMzJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbi5jYXJkLXRodW1ibmFpbC13cmFwcGVyIHtcbiAgZmxleC1zaHJpbms6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jYXJkLXRodW1ibmFpbCB7XG4gIG1pbi13aWR0aDogMjgwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLWhlaWdodDogMjIwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlO1xufVxuLmNvbnRlbnQtY2FyZDpob3ZlciAuY2FyZC10aHVtYm5haWwge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xufVxuXG4uY2FyZC1ib2R5LWNvbnRlbnQge1xuICBwYWRkaW5nOiAxLjc1cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDEuMzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICBtYXJnaW4tYm90dG9tOiAwLjM1cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZTtcbn1cbi5jYXJkLXRpdGxlOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWFjY2VudCk7XG59XG5cbi5jYXJkLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG59XG5cbi5jYXJkLXRhZ3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMC41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uY2FyZC1kZXNjcmlwdGlvbiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMztcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNhcmQtYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMC43NXJlbTtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uYnRuLW91dGxpbmUge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjRyZW07XG4gIHBhZGRpbmc6IDAuNXJlbSAxLjI1cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDIxMiwgMjU1LCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBjb2xvcjogdmFyKC0tYWNjZW50KTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xufVxuLmJ0bi1vdXRsaW5lOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAyMTIsIDI1NSwgMC4wOCk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAyMTIsIDI1NSwgMC40KTtcbiAgY29sb3I6IHZhcigtLWFjY2VudCk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5idG4tb3V0bGluZSBzdmcsXG4uYnRuLW91dGxpbmUgaSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jYXJkLXRodW1ibmFpbCB7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDE4MHB4O1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/
    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-projects-section",
          templateUrl: "./projects.component.html",
          styleUrls: ["./projects.component.scss"]
        }]
      }], function () {
        return [{
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"]
        }];
      }, {
        modelTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ["modelTemplate"]
        }]
      });
    })();

    /***/
  }),
  /***/"./src/app/home/projects-section/projects/resume-projects.ts": (
  /*!*******************************************************************!*\
    !*** ./src/app/home/projects-section/projects/resume-projects.ts ***!
    \*******************************************************************/
  /*! exports provided: ProjectOpenVMM, ProjectRoverX, ProjectSyncLib, ProjectVideoLab, ProjectMediaParsers, ProjectThorstream */
  /***/
  function _src_app_home_projectsSection_projects_resumeProjectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ProjectOpenVMM", function () {
      return ProjectOpenVMM;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ProjectRoverX", function () {
      return ProjectRoverX;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ProjectSyncLib", function () {
      return ProjectSyncLib;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ProjectVideoLab", function () {
      return ProjectVideoLab;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ProjectMediaParsers", function () {
      return ProjectMediaParsers;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ProjectThorstream", function () {
      return ProjectThorstream;
    });
    var ProjectOpenVMM = {
      title: "Thorstream",
      subtitle: "Distributed Streaming Broker in Rust",
      thumbnail: "/assets/projects/resume/openvmm.png",
      thumbnail_size: "cover",
      thumbnail_bg: "#1f3558",
      description: "Built a Rust event streaming broker with append-only segmented logs, Kafka protocol endpoint, custom protocol server, quorum replication, deterministic leader election, and compatibility APIs (Kafka Connect/Schema Registry).",
      tags: ["Rust", "Distributed Systems", "Kafka", "Replication", "Observability"],
      gallery: [],
      readmeSrc: "https://raw.githubusercontent.com/mdakram28/thorstream/main/README.md",
      links: [{
        type: "github",
        url: "https://github.com/mdakram28/thorstream"
      }, {
        type: "website",
        url: "https://mdakram.com/thorstream/"
      }]
    };
    var ProjectRoverX = {
      title: "CodeBoard",
      subtitle: "Online Judge & Contest Platform",
      thumbnail: "/assets/img/proj_codeboard_1.png",
      thumbnail_size: "cover",
      thumbnail_bg: "#2a2f45",
      description: "Built a full-stack coding contest platform with challenge authoring, testcase administration, queued code execution for C++/Java/Python/Node, and realtime scoring feedback over Socket.IO.",
      tags: ["Node.js", "Express", "MongoDB", "Socket.IO", "Code Execution"],
      gallery: [],
      readmeSrc: "/assets/projects/readmes/codeboard.md",
      links: [{
        type: "github",
        url: "https://github.com/mdakram28/codeboard"
      }]
    };
    var ProjectSyncLib = {
      title: "DAgro",
      subtitle: "Blockchain-Powered Agriculture Marketplace",
      thumbnail: "/assets/img/proj_agroshare_1.jpg",
      thumbnail_size: "cover",
      thumbnail_bg: "#2d5034",
      description: "Implemented a smart-contract-powered agriculture marketplace DApp with on-chain membership, share ownership, deposits/withdrawals, and task lifecycle flows using Solidity + Web3 + Truffle.",
      tags: ["Solidity", "Ethereum", "Web3.js", "Truffle", "DApp"],
      gallery: [],
      readmeSrc: "https://raw.githubusercontent.com/mdakram28/dagro/main/README.md",
      links: [{
        type: "github",
        url: "https://github.com/mdakram28/dagro"
      }]
    };
    var ProjectVideoLab = {
      title: "J3D Engine",
      subtitle: "Software 3D Rendering Engine in Java",
      thumbnail: "/assets/img/proj_j3d_1.jpg",
      thumbnail_size: "cover",
      thumbnail_bg: "#ededed",
      description: "Built a Java software 3D renderer with reusable shape primitives, projection and clipping math, depth-aware plane ordering, and interactive camera controls driven by keyboard events.",
      tags: ["Java", "3D Rendering", "Linear Algebra", "Engine Design"],
      gallery: [],
      readmeSrc: "https://raw.githubusercontent.com/mdakram28/j3d/main/readme.md",
      links: [{
        type: "github",
        url: "https://github.com/mdakram28/j3d"
      }]
    };
    var ProjectMediaParsers = {
      title: "Media Parsers GUI",
      subtitle: "Web-based Media Analyzer",
      thumbnail: "/assets/projects/resume/mediaparsers.png",
      thumbnail_size: "cover",
      thumbnail_bg: "#4caf50",
      description: "Built a browser-only multimedia parser GUI for AV1/HEVC/MP4/IVF with container auto-detection, syntax tree inspection, integrated hex view, and track extraction/downloading.",
      tags: ["TypeScript", "React", "Bitstream Parsing", "AV1", "HEVC"],
      gallery: [],
      readmeSrc: "https://raw.githubusercontent.com/mdakram28/media-parser-gui/main/README.md",
      links: [{
        type: "github",
        url: "https://github.com/mdakram28/media-parser-gui"
      }, {
        type: "website",
        url: "https://mdakram.com/media-parser-gui/"
      }]
    };
    var ProjectThorstream = {
      title: "OpenArt",
      subtitle: "Content Provenance on Blockchain + IPFS",
      thumbnail: "/assets/projects/resume/videolab.png",
      thumbnail_size: "cover",
      thumbnail_bg: "#7b4397",
      description: "Built a decentralized media-sharing prototype where files are uploaded to IPFS and ownership/payment state is tracked through Ethereum smart contracts for provenance and anti-plagiarism workflows.",
      tags: ["IPFS", "Ethereum", "Web3.js", "Smart Contracts", "DApp"],
      gallery: [],
      readmeSrc: "https://raw.githubusercontent.com/mdakram28/openart/main/README.md",
      links: [{
        type: "github",
        url: "https://github.com/mdakram28/openart"
      }]
    };

    /***/
  }),
  /***/"./src/app/nav/nav.component.ts": (
  /*!**************************************!*\
    !*** ./src/app/nav/nav.component.ts ***!
    \**************************************/
  /*! exports provided: NavComponent */
  /***/
  function _src_app_nav_navComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "NavComponent", function () {
      return NavComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    var NavComponent = /*#__PURE__*/function () {
      function NavComponent() {
        _classCallCheck(this, NavComponent);
      }
      return _createClass(NavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goto",
        value: function _goto2(id) {
          var el = document.getElementById(id);
          if (el) {
            el.scrollIntoView({
              behavior: "smooth"
            });
          }
        }
      }]);
    }();
    NavComponent.ɵfac = function NavComponent_Factory(t) {
      return new (t || NavComponent)();
    };
    NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavComponent,
      selectors: [["app-nav"]],
      decls: 28,
      vars: 0,
      consts: [["id", "sideNav", 1, "navbar", "navbar-expand-lg", "navbar-dark", "fixed-top"], ["href", "#page-top", 1, "navbar-brand", "js-scroll-trigger"], [1, "d-none", "d-lg-block"], ["src", "assets/img/profile.jpg", "alt", "Akram Ansari", 1, "img-fluid", "img-profile", "rounded-circle"], [1, "brand-name"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item"], [1, "nav-link", 3, "click"]],
      template: function NavComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Akram Ansari");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_11_listener() {
            return ctx["goto"]("about");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "About");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_14_listener() {
            return ctx["goto"]("experience");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Experience");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_17_listener() {
            return ctx["goto"]("skills");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Skills");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_20_listener() {
            return ctx["goto"]("blog");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Blog");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_23_listener() {
            return ctx["goto"]("projects");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Projects");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_26_listener() {
            return ctx["goto"]("hacks");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Hackathons");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".nav-link[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: color 0.2s ease, background-color 0.2s ease;\n}\n\n.brand-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 1.1rem;\n  color: var(--text-primary);\n  margin-left: 0.75rem;\n  letter-spacing: -0.01em;\n}\n\n.img-profile[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2.5rem;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n@media (max-width: 991px) {\n  #sideNav[_ngcontent-%COMP%] {\n    backdrop-filter: blur(20px);\n    -webkit-backdrop-filter: blur(20px);\n    background: rgba(10, 10, 15, 0.95) !important;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n  }\n\n  .navbar-collapse[_ngcontent-%COMP%] {\n    padding: 1rem 0;\n  }\n\n  .nav-link[_ngcontent-%COMP%] {\n    padding: 0.75rem 1rem !important;\n    border-radius: 8px;\n    margin-bottom: 0.25rem;\n  }\n  .nav-link[_ngcontent-%COMP%]:hover {\n    background: rgba(0, 212, 255, 0.06);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FrcmFtL3dvcmtzcGFjZS9tZGFrcmFtMjguZ2l0aHViLmlvL3NyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSx1REFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSTtJQUNJLDJCQUFBO0lBQ0EsbUNBQUE7SUFDQSw2Q0FBQTtJQUNBLGtEQUFBO0VDQ047O0VERUU7SUFDSSxlQUFBO0VDQ047O0VERUU7SUFDSSxnQ0FBQTtJQUNBLGtCQUFBO0lBQ0Esc0JBQUE7RUNDTjtFRENNO0lBQ0ksbUNBQUE7RUNDVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtbGluayB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XG59XG5cbi5icmFuZC1uYW1lIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgIG1hcmdpbi1sZWZ0OiAwLjc1cmVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMWVtO1xufVxuXG4uaW1nLXByb2ZpbGUge1xuICAgIHdpZHRoOiAyLjVyZW07XG4gICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICNzaWRlTmF2IHtcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xuICAgICAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxMCwgMTAsIDE1LCAwLjk1KSAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA2KTtcbiAgICB9XG5cbiAgICAubmF2YmFyLWNvbGxhcHNlIHtcbiAgICAgICAgcGFkZGluZzogMXJlbSAwO1xuICAgIH1cblxuICAgIC5uYXYtbGluayB7XG4gICAgICAgIHBhZGRpbmc6IDAuNzVyZW0gMXJlbSAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDIxMiwgMjU1LCAwLjA2KTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIubmF2LWxpbmsge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XG59XG5cbi5icmFuZC1uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICBtYXJnaW4tbGVmdDogMC43NXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxZW07XG59XG5cbi5pbWctcHJvZmlsZSB7XG4gIHdpZHRoOiAyLjVyZW07XG4gIGhlaWdodDogMi41cmVtO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICNzaWRlTmF2IHtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XG4gICAgYmFja2dyb3VuZDogcmdiYSgxMCwgMTAsIDE1LCAwLjk1KSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDYpO1xuICB9XG5cbiAgLm5hdmJhci1jb2xsYXBzZSB7XG4gICAgcGFkZGluZzogMXJlbSAwO1xuICB9XG5cbiAgLm5hdi1saW5rIHtcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDFyZW0gIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbiAgfVxuICAubmF2LWxpbms6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMjEyLCAyNTUsIDAuMDYpO1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/
    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-nav",
          templateUrl: "./nav.component.html",
          styleUrls: ["./nav.component.scss"]
        }]
      }], function () {
        return [];
      }, null);
    })();

    /***/
  }),
  /***/"./src/blogs/blogs.json": (
  /*!******************************!*\
    !*** ./src/blogs/blogs.json ***!
    \******************************/
  /*! exports provided: 0, 1, default */
  /***/
  function _src_blogs_blogsJson(module) {
    module.exports = JSON.parse("[{\"title\":\"Python - Full Course for beginners\",\"slug\":\"python\",\"markdownSrc\":\"https://raw.githubusercontent.com/mdakram28/CPSC217-W22/master/full_course.md\",\"repo\":\"mdakram28/CPSC217-W22\",\"updatedAt\":\"December 28, 2022\",\"cover\":\"/blogs/img/cover-python.png\",\"description\":\"I teach Python to university students. This article is meant to teach the basics to programming using python to an absolute beginner with no programming experience. After following this article you will be able to understand and write your own intermediate level python code.\",\"links\":[{\"type\":\"github\",\"url\":\"https://github.com/mdakram28/CPSC217-W22\"}]},{\"title\":\"ARM Assembly - Zero to Hero in 22 Days\",\"slug\":\"arm-assembly\",\"markdownSrc\":\"https://raw.githubusercontent.com/mdakram28/cpsc355/main/all_material.md\",\"repo\":\"mdakram28/cpsc355\",\"updatedAt\":\"December 27, 2022\",\"cover\":\"/blogs/img/cover-rpi.jpg\",\"description\":\"I have been teaching ARM assembly to university students. This article is adapted from the tutorial material for a Computer Science Course - CPSC355 that I taught in 2022 and is meant to teach the basics of assembly, c and the inner working of a computer application. The article will focus on understanding how a computer program is written and how that program is understood and executed by the processor. We will write assemble for the 64-bit ARMv8 architecture CPU. We will also understand what the binary code of a program written in C looks like. We will run the program in a Linux OS.\",\"links\":[{\"type\":\"github\",\"url\":\"https://github.com/mdakram28/cpsc355\"}]}]");

    /***/
  }),
  /***/"./src/environments/environment.ts": (
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/
  /*! exports provided: environment */
  /***/
  function _src_environments_environmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
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

    /***/
  }),
  /***/"./src/main.ts": (
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/
  /*! no exports provided */
  /***/
  function _src_mainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */
    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */"./src/environments/environment.ts");
    /* harmony import */
    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */"./src/app/app.module.ts");
    /* harmony import */
    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */"./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });

    /***/
  }),
  /***/0: (
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/
  /*! no static exports found */
  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(/*! /home/akram/workspace/mdakram28.github.io/src/main.ts */"./src/main.ts");

    /***/
  })
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map