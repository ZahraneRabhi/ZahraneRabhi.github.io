"use strict";
(self["webpackChunkangular_tailwind"] = self["webpackChunkangular_tailwind"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _core_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/layout/layout.component */ 3318);
/* harmony import */ var _core_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/components/not-found/not-found.component */ 7351);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);





const routes = [{
  path: '',
  component: _core_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent
}, {
  path: 'project/:id',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_project-details_project-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/project-details/project-details.module */ 4701)).then(m => m.ProjectDetailsModule)
}, {
  path: '**',
  component: _core_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__.NotFoundComponent
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class AppComponent {
  constructor() {
    this.title = 'Zahrane Rabhi';
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 1,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDRKQUE0SiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _core_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/components/header/header.component */ 4072);
/* harmony import */ var _core_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/components/footer/footer.component */ 6093);
/* harmony import */ var _features_content_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./features/content/content.component */ 154);
/* harmony import */ var _core_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/layout/layout.component */ 3318);
/* harmony import */ var _features_projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./features/projects/projects.component */ 7086);
/* harmony import */ var _core_components_card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/components/card/card.component */ 2169);
/* harmony import */ var _features_github_stats_github_stats_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./features/github-stats/github-stats.component */ 4341);
/* harmony import */ var _features_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./features/contact/contact.component */ 3595);
/* harmony import */ var _core_components_matrix_rain_matrix_rain_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/components/matrix-rain/matrix-rain.component */ 6750);
/* harmony import */ var _core_components_modal_component_modal_component_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/components/modal-component/modal-component.component */ 8781);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _features_about_about_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./features/about/about.component */ 3185);
/* harmony import */ var _core_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/components/not-found/not-found.component */ 7351);
/* harmony import */ var _core_components_nav_nav_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/components/nav/nav.component */ 4007);
/* harmony import */ var _features_vintage_vintage_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./features/vintage/vintage.component */ 7585);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 1699);




















class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _core_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _core_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _features_content_content_component__WEBPACK_IMPORTED_MODULE_4__.ContentComponent, _core_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__.LayoutComponent, _features_projects_projects_component__WEBPACK_IMPORTED_MODULE_6__.ProjectsComponent, _core_components_card_card_component__WEBPACK_IMPORTED_MODULE_7__.CardComponent, _features_github_stats_github_stats_component__WEBPACK_IMPORTED_MODULE_8__.GithubStatsComponent, _features_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__.ContactComponent, _core_components_modal_component_modal_component_component__WEBPACK_IMPORTED_MODULE_11__.ModalComponentComponent, _features_about_about_component__WEBPACK_IMPORTED_MODULE_12__.AboutComponent, _core_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_13__.NotFoundComponent, _core_components_nav_nav_component__WEBPACK_IMPORTED_MODULE_14__.NavComponent, _features_vintage_vintage_component__WEBPACK_IMPORTED_MODULE_15__.VintageComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule, _core_components_matrix_rain_matrix_rain_component__WEBPACK_IMPORTED_MODULE_10__.MatrixRainComponent]
  });
})();

/***/ }),

/***/ 2169:
/*!********************************************************!*\
  !*** ./src/app/core/components/card/card.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardComponent: () => (/* binding */ CardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);




function CardComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const stack_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", stack_r1.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", stack_r1.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stack_r1.label);
  }
}
class CardComponent {
  constructor(router) {
    this.router = router;
    this.projectClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  viewProjectDetails() {
    if (this.project?.id) {
      this.router.navigate(['/project', this.project.id]);
    }
  }
  redirectToProject() {
    if (this.project?.link) {
      window.location.href = this.project.link;
    } else {
      console.error('Project link is not defined');
    }
  }
  static #_ = this.ɵfac = function CardComponent_Factory(t) {
    return new (t || CardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CardComponent,
    selectors: [["app-card"]],
    inputs: {
      project: "project"
    },
    outputs: {
      projectClick: "projectClick"
    },
    decls: 35,
    vars: 6,
    consts: [[1, "matrix-card", "h-full", "flex", "flex-col"], [1, "relative", "h-48", "overflow-hidden"], [1, "absolute", "inset-0", "z-10", "scan-line"], [1, "absolute", "inset-0", "bg-green-900/20", "z-0"], [1, "absolute", "inset-0", "z-0", "matrix-overlay", "opacity-20"], [1, "w-full", "h-full", "object-cover", "brightness-75", "contrast-125", 3, "src", "alt"], [1, "absolute", "bottom-0", "left-0", "right-0", "bg-black/70", "backdrop-blur-sm", "p-2", "border-t", "border-green-500/30"], [1, "flex", "items-center"], [1, "text-green-400", "font-mono", "text-xs", "mr-2"], [1, "text-green-400", "font-mono", "text-sm", "truncate"], [1, "p-4", "flex-grow", "flex", "flex-col"], [1, "flex", "items-start", "mb-3"], [1, "text-green-400", "font-mono", "text-sm", "mr-2"], [1, "text-xl", "font-bold", "text-green-400", "font-mono", "leading-tight"], [1, "mb-4", "flex-grow"], [1, "text-green-300/80", "font-mono", "text-sm", "leading-relaxed", "h-24", "overflow-hidden"], [1, "mb-4", "border-t", "border-green-500/20", "pt-3"], [1, "flex", "items-center", "mb-2"], [1, "text-green-500/70", "font-mono", "text-xs", "mr-2"], [1, "flex", "flex-wrap", "gap-2"], ["class", "flex items-center bg-black/50 px-2 py-1 rounded border border-green-500/20", 4, "ngFor", "ngForOf"], [1, "mt-auto", "space-y-2"], [1, "w-full", "flex", "items-center", "justify-center", "gap-2", "py-2", "bg-black/40", "border", "border-green-500/30", "text-green-400", "font-mono", "text-sm", "rounded", "hover:bg-green-500/10", "transition-all", "duration-300", 3, "click"], [1, "w-1", "h-4", "bg-green-400", "animate-pulse"], [1, "w-full", "flex", "items-center", "justify-center", "gap-2", "py-1", "bg-transparent", "border", "border-green-500/20", "text-green-400/70", "font-mono", "text-xs", "rounded", "hover:border-green-400/40", "hover:text-green-400", "transition-all", "duration-300", 3, "click"], [1, "flex", "items-center", "bg-black/50", "px-2", "py-1", "rounded", "border", "border-green-500/20"], [1, "w-4", "h-4", "mr-1", 3, "src", "alt"], [1, "text-green-300/80", "font-mono", "text-xs"]],
    template: function CardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10)(13, "div", 11)(14, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14)(19, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16)(22, "div", 17)(23, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "// stack");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, CardComponent_div_26_Template, 4, 3, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 21)(28, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_Template_button_click_28_listener() {
          return ctx.viewProjectDetails();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "> view details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_Template_button_click_32_listener() {
          return ctx.redirectToProject();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "> source code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.project == null ? null : ctx.project.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.project == null ? null : ctx.project.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project == null ? null : ctx.project.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project == null ? null : ctx.project.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.project == null ? null : ctx.project.description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.project == null ? null : ctx.project.stack);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJkLmNvbXBvbmVudC5jc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnS0FBZ0siLCJzb3VyY2VSb290IjoiIn0= */", ".matrix-overlay[_ngcontent-%COMP%] {\n  background-image: \n    repeating-linear-gradient(\n      180deg,\n      transparent,\n      rgba(0, 255, 0, 0.05) 1px,\n      transparent 2px\n    );\n  background-size: 100% 2px;\n}\n\n.scan-line[_ngcontent-%COMP%] {\n  background: linear-gradient(to bottom, transparent, rgba(0, 255, 0, 0.15), transparent);\n  height: 10px;\n  width: 100%;\n  animation: _ngcontent-%COMP%_scan 2s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_scan {\n  0% {\n    transform: translateY(-100%);\n  }\n  100% {\n    transform: translateY(1000%);\n  }\n}\n\n.matrix-card[_ngcontent-%COMP%]:hover   .scan-line[_ngcontent-%COMP%] {\n  opacity: 1;\n}"]
  });
}

/***/ }),

/***/ 6093:
/*!************************************************************!*\
  !*** ./src/app/core/components/footer/footer.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class FooterComponent {
  constructor() {}
  static #_ = this.ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    decls: 55,
    vars: 0,
    consts: [[1, "relative", "border-t", "border-green-500/30", "overflow-hidden"], [1, "absolute", "inset-0", "opacity-10"], [1, "absolute", "inset-0", 2, "background-image", "repeating-linear-gradient(90deg, transparent, rgba(0, 255, 0, 0.05) 1px, transparent 2px)"], [1, "relative", "z-10", "p-10"], [1, "liquid-glass", "rounded-2xl", "overflow-hidden", "max-w-4xl", "mx-auto"], [1, "liquid-glass-bar", "px-4", "py-2", "flex", "items-center", "gap-2"], [1, "w-2", "h-2", "rounded-full", "bg-red-500/70"], [1, "w-2", "h-2", "rounded-full", "bg-yellow-500/70"], [1, "w-2", "h-2", "rounded-full", "bg-green-500/70"], [1, "ml-3", "text-green-400", "font-mono", "text-xs"], [1, "p-6"], [1, "text-center", "space-y-4"], [1, "border-l-2", "border-green-500/50", "pl-4", "text-left"], [1, "text-green-500/70", "font-mono", "text-xs", "mb-1"], [1, "text-xl", "font-bold", "text-green-400", "font-mono", "tracking-wider"], [1, "text-green-300/80", "font-mono", "text-sm"], [1, "mt-6"], [1, "text-green-500/70", "font-mono", "text-xs", "mb-3"], [1, "flex", "justify-center", "space-x-6"], ["href", "https://linkedin.com/in/zahranerabhi", 1, "group", "flex", "items-center", "gap-2", "px-3", "py-2", "bg-black/50", "border", "border-green-500/30", "rounded", "text-green-400", "hover:bg-green-500/10", "hover:border-green-400/60", "transition-all", "duration-300", "font-mono", "text-sm"], ["fill", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["d", "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"], ["href", "https://github.com/ZahraneRabhi", 1, "group", "flex", "items-center", "gap-2", "px-3", "py-2", "bg-black/50", "border", "border-green-500/30", "rounded", "text-green-400", "hover:bg-green-500/10", "hover:border-green-400/60", "transition-all", "duration-300", "font-mono", "text-sm"], ["d", "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"], [1, "mt-6", "border-t", "border-green-500/20", "pt-4"], [1, "text-green-500/70", "font-mono", "text-xs", "mb-2"], [1, "flex", "items-center", "justify-center", "gap-2", "text-green-300", "font-mono", "text-sm"], ["href", "mailto:ZahraneRabhi@outlook.com", 1, "text-green-400", "hover:text-green-300", "transition-colors", "duration-300"], [1, "mt-6", "pt-4", "border-t", "border-green-500/20"], [1, "flex", "items-center", "justify-center", "gap-2", "text-green-400/70", "font-mono", "text-xs"], [1, "w-2", "h-3", "bg-green-400", "animate-pulse"], [1, "ml-2"], [1, "absolute", "top-1", "left-1", "w-4", "h-4", "border-l-2", "border-t-2", "border-green-400/50"], [1, "absolute", "top-1", "right-1", "w-4", "h-4", "border-r-2", "border-t-2", "border-green-400/50"], [1, "absolute", "bottom-1", "left-1", "w-4", "h-4", "border-l-2", "border-b-2", "border-green-400/50"], [1, "absolute", "bottom-1", "right-1", "w-4", "h-4", "border-r-2", "border-b-2", "border-green-400/50"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6)(7, "div", 7)(8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "footer.sys");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10)(12, "div", 11)(13, "div", 12)(14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "// System Administrator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h6", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "ZAHRANE.RABHI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " > Role: Full-Stack Developer | Data Scientist ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16)(21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "// Network connections");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18)(24, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "svg", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "linkedin.connect()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "svg", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "github.clone()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 24)(35, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "// Contact protocol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 26)(38, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "> mail.send(");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " \"ZahraneRabhi@outlook.com\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 28)(45, "div", 29)(46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "> system.status()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\u00A9 2025 Zahrane Portfolio v2.0 - All systems operational");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "div", 32)(52, "div", 33)(53, "div", 34)(54, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsZ0tBQWdLIiwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 4072:
/*!************************************************************!*\
  !*** ./src/app/core/components/header/header.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);



const _c0 = ["terminalOutput"];
const _c1 = ["commandInput"];
function HeaderComponent_div_56_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const line_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("> ", line_r3.text, "");
  }
}
function HeaderComponent_div_56_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 42);
  }
  if (rf & 2) {
    const line_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", line_r3.text, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function HeaderComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_div_56_span_1_Template, 2, 1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_div_56_div_2_Template, 1, 1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const line_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", line_r3.isCommand);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !line_r3.isCommand);
  }
}
class HeaderComponent {
  constructor(sanitizer, ngZone, cdr) {
    this.sanitizer = sanitizer;
    this.ngZone = ngZone;
    this.cdr = cdr;
    this.linkedinUrl = "https://www.linkedin.com/in/zahranerabhi/";
    this.commandHistory = [];
    this.inputHistory = [];
    this.historyIndex = -1;
    this.INPUT_HISTORY_KEY = 'zr_terminal_history';
    this.shouldScroll = true;
    this.isUserScrolling = false;
  }
  ngOnInit() {
    try {
      const saved = localStorage.getItem(this.INPUT_HISTORY_KEY);
      if (saved) this.inputHistory = JSON.parse(saved);
    } catch {
      this.inputHistory = [];
    }
  }
  redirectToLinkedin() {
    window.location.href = this.linkedinUrl;
  }
  ngAfterViewChecked() {
    if (this.shouldScroll && !this.isUserScrolling) {
      this.scrollToBottom();
      this.shouldScroll = false;
    }
  }
  scrollToBottom() {
    try {
      // Use ngZone.runOutsideAngular to prevent triggering change detection
      this.ngZone.runOutsideAngular(() => {
        setTimeout(() => {
          if (this.terminalOutput && this.terminalOutput.nativeElement) {
            this.terminalOutput.nativeElement.scrollTop = this.terminalOutput.nativeElement.scrollHeight;
          }
        }, 10);
      });
    } catch (err) {}
  }
  onTerminalScroll() {
    // Track when user is manually scrolling
    clearTimeout(this.scrollTimeout);
    this.isUserScrolling = true;
    this.scrollTimeout = setTimeout(() => {
      this.isUserScrolling = false;
    }, 1000);
  }
  onInputKeydown(event, input) {
    if (event.key === 'Enter') {
      this.processCommand(input.value);
      input.value = '';
      this.historyIndex = -1;
      return;
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (this.historyIndex < this.inputHistory.length - 1) {
        this.historyIndex++;
        input.value = this.inputHistory[this.historyIndex];
      }
    }
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (this.historyIndex > 0) {
        this.historyIndex--;
        input.value = this.inputHistory[this.historyIndex];
      } else if (this.historyIndex === 0) {
        this.historyIndex = -1;
        input.value = '';
      }
    }
  }
  processCommand(command) {
    if (!command.trim()) return;
    this.inputHistory.unshift(command);
    if (this.inputHistory.length > 50) this.inputHistory.pop();
    this.historyIndex = -1;
    try {
      localStorage.setItem(this.INPUT_HISTORY_KEY, JSON.stringify(this.inputHistory));
    } catch {}
    // Add the command to history
    this.commandHistory.push({
      text: command,
      isCommand: true
    });
    // Set flag to scroll after view update
    this.shouldScroll = true;
    // Process the command
    const cmd = command.toLowerCase().trim();
    switch (cmd) {
      case '/help':
        this.showHelp();
        break;
      case '/contact':
        this.showContact();
        break;
      case '/email':
        this.showEmail();
        break;
      case '/linkedin':
        this.showLinkedIn();
        break;
      case '/github':
        this.showGitHub();
        break;
      case '/skills':
        this.showSkills();
        break;
      case '/projects':
        this.showProjects();
        break;
      case '/joke':
        this.showJoke();
        break;
      case '/ascii':
        this.showAsciiArt();
        break;
      case '/clear':
        this.clearTerminal();
        break;
      default:
        this.commandHistory.push({
          text: 'Command not recognized. Type /help for available commands.',
          isCommand: false
        });
    }
  }
  showHelp() {
    const helpText = this.sanitizer.bypassSecurityTrustHtml(`
      <div class="mb-2">Available commands:</div>
      <div class="grid grid-cols-2 gap-2">
        <div class="text-green-400">/help</div><div>- Show available commands</div>
        <div class="text-green-400">/contact</div><div>- Display contact information</div>
        <div class="text-green-400">/email</div><div>- Show email address</div>
        <div class="text-green-400">/linkedin</div><div>- LinkedIn profile link</div>
        <div class="text-green-400">/github</div><div>- GitHub profile link</div>
        <div class="text-green-400">/skills</div><div>- List technical skills</div>
        <div class="text-green-400">/projects</div><div>- Show portfolio projects</div>
        <div class="text-green-400">/joke</div><div>- Tell a programming joke</div>
        <div class="text-green-400">/ascii</div><div>- Display ASCII art</div>
        <div class="text-green-400">/clear</div><div>- Clear terminal</div>
      </div>
    `);
    this.commandHistory.push({
      text: helpText,
      isCommand: false
    });
  }
  showContact() {
    const contactText = this.sanitizer.bypassSecurityTrustHtml(`
      <div class="mb-2">Contact Information:</div>
      <div>Email: <a href="mailto:ZahraneRabhi@outlook.com" class="text-green-400 hover:underline">ZahraneRabhi@outlook.com</a></div>
      <div>LinkedIn: <a href="https://linkedin.com/in/zahranerabhi" target="_blank" class="text-green-400 hover:underline">linkedin.com/in/zahranerabhi</a></div>
      <div>GitHub: <a href="https://github.com/ZahraneRabhi" target="_blank" class="text-green-400 hover:underline">github.com/ZahraneRabhi</a></div>
    `);
    this.commandHistory.push({
      text: contactText,
      isCommand: false
    });
  }
  showEmail() {
    this.commandHistory.push({
      text: 'Email: <a href="mailto:ZahraneRabhi@outlook.com" class="text-green-400 hover:underline">ZahraneRabhi@outlook.com</a>',
      isCommand: false
    });
  }
  showLinkedIn() {
    this.commandHistory.push({
      text: 'LinkedIn: <a href="https://linkedin.com/in/zahranerabhi" target="_blank" class="text-green-400 hover:underline">linkedin.com/in/zahranerabhi</a>',
      isCommand: false
    });
  }
  showGitHub() {
    this.commandHistory.push({
      text: 'GitHub: <a href="https://github.com/ZahraneRabhi" target="_blank" class="text-green-400 hover:underline">github.com/ZahraneRabhi</a>',
      isCommand: false
    });
  }
  showSkills() {
    const skillsText = this.sanitizer.bypassSecurityTrustHtml(`
      <div class="mb-2">Technical Skills:</div>
      <div class="grid grid-cols-2 gap-1">
        <div class="text-green-400">Frontend:</div><div>Angular, TailwindCSS, TypeScript, JavaScript</div>
        <div class="text-green-400">Backend:</div><div>Python, C# </div>
        <div class="text-green-400">AI & Data Science:</div><div>Python, PyTorch, SpaCy, Pandas, Scikit-learn</div>
        <div class="text-green-400">Databases:</div><div>SQL Server</div>
        <div class="text-green-400">DevOps:</div><div>Docker, CI/CD, Azure, Git</div>
      </div>
    `);
    this.commandHistory.push({
      text: skillsText,
      isCommand: false
    });
  }
  showProjects() {
    const projectsText = this.sanitizer.bypassSecurityTrustHtml(`
      <div class="mb-2">Portfolio Projects:</div>
      <div class="grid grid-cols-1 gap-2">
        <div><span class="text-green-400">Angular 18 Clean Architecture</span> - Modern web application using clean architecture principles</div>
        <div><span class="text-green-400">.NET Clean Architecture</span> - Enterprise application with domain-driven design</div>
        <div><span class="text-green-400">NG-Laravel JWT</span> - Authentication system with Angular and Laravel</div>
        <div><span class="text-green-400">ML Template</span> - Reusable machine learning project structure</div>
        <div><span class="text-green-400">Twitter API Integration</span> - Social media data analytics platform</div>
        <div><span class="text-green-400">NG-GH-Stats</span> - GitHub statistics visualization tool</div>
      </div>
    `);
    this.commandHistory.push({
      text: projectsText,
      isCommand: false
    });
  }
  showJoke() {
    const jokes = ["Why do programmers prefer dark mode? Because light attracts bugs!", "How many programmers does it take to change a light bulb? None, it's a hardware problem!", "A SQL query walks into a bar, walks up to two tables and asks, 'Can I join you?'", "Why was the JavaScript developer sad? Because he didn't Node how to Express himself!", "Why did the developer go broke? Because he used up all his cache!", "What's the object-oriented way to become wealthy? Inheritance!", "Why do Java developers wear glasses? Because they can't C#!", "What do you call a programmer from Finland? Nerdic!", "How many programmers does it take to screw in a lightbulb? None. It's a hardware problem!", "Why was the function sad after a party? It didn't get called!"];
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    this.commandHistory.push({
      text: randomJoke,
      isCommand: false
    });
  }
  showAsciiArt() {
    const asciiOptions = [
    // Matrix-themed ASCII
    `
<pre class="text-green-400">

███████╗ █████╗ ██╗  ██╗██████╗  █████╗ ███╗   ██╗███████╗
╚══███╔╝██╔══██╗██║  ██║██╔══██╗██╔══██╗████╗  ██║██╔════╝
  ███╔╝ ███████║███████║██████╔╝███████║██╔██╗ ██║█████╗  
 ███╔╝  ██╔══██║██╔══██║██╔══██╗██╔══██║██║╚██╗██║██╔══╝  
███████╗██║  ██║██║  ██║██║  ██║██║  ██║██║ ╚████║███████╗
╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝
</pre>`, `<pre class="text-green-400">
▄▄▄▄▄ ▗▞▀▜▌▐▌    ▄▄▄ ▗▞▀▜▌▄▄▄▄  ▗▞▀▚▖
 ▄▄▄▀ ▝▚▄▟▌▐▌   █    ▝▚▄▟▌█   █ ▐▛▀▀▘
█▄▄▄▄      ▐▛▀▚▖█         █   █ ▝▚▄▄▖
           ▐▌ ▐▌                                                                                                                        
</pre>`, `<pre class="text-green-400">
░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░ ░▒▓██████▓▒░░▒▓███████▓▒░░▒▓████████▓▒░
       ░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░
     ░▒▓██▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░
   ░▒▓██▓▒░  ░▒▓████████▓▒░▒▓████████▓▒░▒▓███████▓▒░░▒▓████████▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓██████▓▒░
 ░▒▓██▓▒░    ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░
░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░
░▒▓████████▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░
</pre>`];
    const randomAscii = asciiOptions[Math.floor(Math.random() * asciiOptions.length)];
    this.commandHistory.push({
      text: this.sanitizer.bypassSecurityTrustHtml(randomAscii),
      isCommand: false
    });
  }
  clearTerminal() {
    this.ngZone.run(() => {
      this.commandHistory = [];
      this.commandHistory.push({
        text: 'Terminal cleared. Type /help for available commands.',
        isCommand: false
      });
      this.shouldScroll = true;
      this.cdr.detectChanges();
    });
  }
  static #_ = this.ɵfac = function HeaderComponent_Factory(t) {
    return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HeaderComponent,
    selectors: [["app-header"]],
    viewQuery: function HeaderComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.terminalOutput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.commandInput = _t.first);
      }
    },
    decls: 66,
    vars: 1,
    consts: [[1, "hero", "min-h-screen", "relative"], [1, "relative", "z-10", "text-center", "px-4", "pt-20", "pb-6", "max-w-4xl", "w-full"], [1, "liquid-glass", "rounded-2xl", "shadow-2xl", "overflow-hidden"], [1, "liquid-glass-bar", "px-4", "py-2", "flex", "items-center", "gap-2"], [1, "w-3", "h-3", "rounded-full", "bg-red-500/70"], [1, "w-3", "h-3", "rounded-full", "bg-yellow-500/70"], [1, "w-3", "h-3", "rounded-full", "bg-green-500/70"], [1, "ml-4", "text-green-400", "font-mono", "text-sm"], [1, "p-5", "md:p-6", "text-left"], [1, "space-y-1", "mb-4"], [1, "text-green-400", "font-mono", "text-sm", "animate-pulse"], [1, "text-green-300/70", "font-mono", "text-xs"], [1, "space-y-3"], [1, "text-3xl", "md:text-4xl", "font-bold", "text-center"], [1, "text-white", "font-mono"], [1, "text-green-400", "font-mono", "tracking-wider"], [1, "border-l-2", "border-green-500/50", "pl-4", "my-4"], [1, "text-green-500/70", "font-mono", "text-sm", "mb-2"], [1, "text-green-300", "font-mono", "text-base", "leading-relaxed"], [1, "text-green-400", "font-bold"], [1, "hidden", "sm:block"], [1, "text-green-500/80"], [1, "text-center", "pt-2"], [1, "group", "inline-flex", "items-center", "gap-3", "px-6", "py-2.5", "bg-black/40", "border", "border-green-500/30", "text-green-400", "font-mono", "text-base", "rounded", "hover:bg-green-500/10", "hover:border-green-400/60", "transition-all", "duration-300", 3, "click"], [1, "w-3", "h-5", "bg-green-400", "animate-pulse"], [1, "mt-4", "pt-3", "border-t", "border-green-500/20"], [1, "liquid-glass-inner", "rounded-lg", "p-3", "mb-2", "h-28", "md:h-32", "overflow-auto", "text-left", 2, "scroll-behavior", "smooth", "overscroll-behavior", "none", "will-change", "transform", 3, "scroll"], ["terminalOutput", ""], [1, "text-green-400/90", "font-mono", "text-xs", "mb-2"], ["class", "font-mono text-xs mb-1 transition-opacity duration-200", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "gap-2", "liquid-glass-inner", "rounded-lg", "px-2"], [1, "text-green-400", "font-mono", "text-sm"], ["type", "text", "placeholder", "Type a command... (\u2191\u2193 for history)", 1, "bg-transparent", "border-none", "text-green-400", "font-mono", "text-sm", "focus:outline-none", "py-2", "w-full", 3, "keydown"], ["commandInput", ""], [1, "absolute", "top-2", "left-2", "w-6", "h-6", "border-l-2", "border-t-2", "border-green-400/50"], [1, "absolute", "top-2", "right-2", "w-6", "h-6", "border-r-2", "border-t-2", "border-green-400/50"], [1, "absolute", "bottom-2", "left-2", "w-6", "h-6", "border-l-2", "border-b-2", "border-green-400/50"], [1, "absolute", "bottom-2", "right-2", "w-6", "h-6", "border-r-2", "border-b-2", "border-green-400/50"], [1, "font-mono", "text-xs", "mb-1", "transition-opacity", "duration-200"], ["class", "text-green-400", 4, "ngIf"], ["class", "text-green-300/80", 3, "innerHTML", 4, "ngIf"], [1, "text-green-400"], [1, "text-green-300/80", 3, "innerHTML"]],
    template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4)(5, "div", 5)(6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "root@matrix:~$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "> system.boot()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Loading portfolio.exe... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Initializing user interface... [OK] ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12)(19, "h1", 13)(20, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Welcome to");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Zahrane Rabhi's");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16)(28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "// User profile initialized");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Greetings, I\u2019m ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Zahrane Rabhi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " \u2014 a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Full Stack Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " \u2022 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Generative AI \u2022 NLP Engineer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " driven by curiosity and creativity. I craft seamless digital experiences and build intelligent data-driven solutions that bridge innovation with real-world impact. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "// Let\u2019s create something great together.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 22)(45, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_45_listener() {
          return ctx.redirectToLinkedin();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "> ./connect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 25)(50, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "// Interactive terminal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 26, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HeaderComponent_Template_div_scroll_52_listener() {
          return ctx.onTerminalScroll();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Terminal - Type /help for available commands");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, HeaderComponent_div_56_Template, 3, 2, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 30)(58, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "input", 32, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function HeaderComponent_Template_input_keydown_60_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
          const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](61);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onInputKeydown($event, _r2));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "div", 34)(63, "div", 35)(64, "div", 36)(65, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.commandHistory);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
    styles: [".glow-effect[_ngcontent-%COMP%] {\n    text-shadow: 0 0 8px rgba(72, 255, 72, 0.7);\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMkNBQTJDO0VBQzdDIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdsb3ctZWZmZWN0IHtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDhweCByZ2JhKDcyLCAyNTUsIDcyLCAwLjcpO1xuICB9XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJDQUEyQztFQUM3Qzs7QUFFRix3VkFBd1YiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2xvdy1lZmZlY3Qge1xuICAgIHRleHQtc2hhZG93OiAwIDAgOHB4IHJnYmEoNzIsIDI1NSwgNzIsIDAuNyk7XG4gIH1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 6750:
/*!**********************************************************************!*\
  !*** ./src/app/core/components/matrix-rain/matrix-rain.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MatrixRainComponent: () => (/* binding */ MatrixRainComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

const _c0 = ["canvas"];
class MatrixRainComponent {
  constructor() {
    this.fontSize = 16;
    this.columns = 0;
    this.drops = [];
    this.characters = 'アカサタナハマヤラワイキシチニヒミリウクスツヌフムユルエケセテネヘメレオコソトノホモヨロンabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    this.isVisible = true;
  }
  ngOnInit() {
    this.ctx = this.canvasRef.nativeElement.getContext('2d');
    this.resizeCanvas();
    window.addEventListener('resize', () => this.resizeCanvas());
    this.columns = this.canvasRef.nativeElement.width / this.fontSize;
    this.drops = Array.from({
      length: this.columns
    }, () => Math.floor(Math.random() * -100));
    const observer = new IntersectionObserver(([entry]) => {
      const wasVisible = this.isVisible;
      this.isVisible = entry.isIntersecting;
      if (this.isVisible && !wasVisible) {
        this.draw();
      }
    }, {
      threshold: 0
    });
    observer.observe(this.canvasRef.nativeElement);
    this.draw();
  }
  resizeCanvas() {
    const canvas = this.canvasRef.nativeElement;
    canvas.width = 1920;
    canvas.height = 1080;
    this.columns = canvas.width / this.fontSize;
    this.drops = Array.from({
      length: this.columns
    }, () => Math.floor(Math.random() * -100));
  }
  draw() {
    if (!this.isVisible) return;
    const canvas = this.canvasRef.nativeElement;
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    this.ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.ctx.fillStyle = '#0F0';
    this.ctx.font = `${this.fontSize}px monospace`;
    for (let i = 0; i < this.drops.length; i++) {
      const text = this.characters[Math.floor(Math.random() * this.characters.length)];
      const x = i * this.fontSize;
      const y = this.drops[i] * this.fontSize;
      this.ctx.fillText(text, x, y);
      if (y > canvas.height && Math.random() > 0.975) {
        this.drops[i] = 0;
      }
      this.drops[i]++;
    }
    setTimeout(() => requestAnimationFrame(() => this.draw()), 24);
  }
  static #_ = this.ɵfac = function MatrixRainComponent_Factory(t) {
    return new (t || MatrixRainComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatrixRainComponent,
    selectors: [["app-matrix-rain"]],
    viewQuery: function MatrixRainComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvasRef = _t.first);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 0,
    consts: [["canvas", ""]],
    template: function MatrixRainComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "canvas", null, 0);
      }
    },
    styles: ["[_nghost-%COMP%] {\n        display: block;\n        position: relative;\n        width: 100%;\n        height: 100%;\n        background: black;\n        overflow: hidden;\n      }\n      canvas[_ngcontent-%COMP%] {\n        display: block;\n        width: 100%;\n        height: 100%;\n      }"]
  });
}

/***/ }),

/***/ 8781:
/*!******************************************************************************!*\
  !*** ./src/app/core/components/modal-component/modal-component.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModalComponentComponent: () => (/* binding */ ModalComponentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8849);


class ModalComponentComponent {
  constructor() {
    this.linkedinUrl = "https://www.linkedin.com/in/zahranerabhi/";
    this.cvPath = "";
  }
  static #_ = this.ɵfac = function ModalComponentComponent_Factory(t) {
    return new (t || ModalComponentComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ModalComponentComponent,
    selectors: [["app-modal-component"]],
    decls: 12,
    vars: 2,
    consts: [["onclick", "my_modal_2.showModal()", 1, "btn", "btn-success", "btn-wide", "text-lg"], ["id", "my_modal_2", 1, "modal"], [1, "modal-box", "flex", "flex-col", "items-center", "justify-center"], [1, "flex", "gap-4", "mt-4"], [1, "btn", "btn-outline", "btn-success", 3, "href"], ["method", "dialog", 1, "modal-backdrop"]],
    template: function ModalComponentComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Hire Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "dialog", 1)(3, "div", 2)(4, "div", 3)(5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "My Linkedin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "My CV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 5)(10, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.linkedinUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.cvPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC1jb21wb25lbnQuY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9jb21wb25lbnRzL21vZGFsLWNvbXBvbmVudC9tb2RhbC1jb21wb25lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsNEtBQTRLIiwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 4007:
/*!******************************************************!*\
  !*** ./src/app/core/components/nav/nav.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavComponent: () => (/* binding */ NavComponent)
/* harmony export */ });
/* harmony import */ var _home_zahry_Dev_Angular_ZahraneRabhi_github_io_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/theme.service */ 1922);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);





function NavComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavComponent_button_7_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const link_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.scrollTo(link_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const link_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ./", link_r2.label, " ");
  }
}
function NavComponent_div_14_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavComponent_div_14_button_2_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const link_r6 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.scrollTo(link_r6.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const link_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" > ./", link_r6.label, " ");
  }
}
function NavComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13)(1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NavComponent_div_14_button_2_Template, 2, 1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavComponent_div_14_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.switchToVintage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " > [ txt mode ] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.navLinks);
  }
}
class NavComponent {
  constructor(router, themeService) {
    this.router = router;
    this.themeService = themeService;
    this.isMenuOpen = false;
    this.isScrolled = false;
    this.navLinks = [{
      id: 'about',
      label: 'about'
    }, {
      id: 'projects',
      label: 'projects'
    }, {
      id: 'stats',
      label: 'stats'
    }, {
      id: 'contact',
      label: 'contact'
    }];
  }
  switchToVintage() {
    this.themeService.set('vintage');
    this.closeMenu();
    window.scrollTo(0, 0);
  }
  onScroll() {
    this.isScrolled = window.scrollY > 80;
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  closeMenu() {
    this.isMenuOpen = false;
  }
  scrollTo(sectionId) {
    var _this = this;
    return (0,_home_zahry_Dev_Angular_ZahraneRabhi_github_io_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.router.url !== '/') {
        yield _this.router.navigate(['/']);
      }
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({
          behavior: 'smooth'
        });
      }, 100);
      _this.closeMenu();
    })();
  }
  static #_ = this.ɵfac = function NavComponent_Factory(t) {
    return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_1__.ThemeService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: NavComponent,
    selectors: [["app-nav"]],
    hostBindings: function NavComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("scroll", function NavComponent_scroll_HostBindingHandler() {
          return ctx.onScroll();
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
      }
    },
    decls: 15,
    vars: 15,
    consts: [[1, "fixed", "top-0", "left-0", "right-0", "z-50", "transition-all", "duration-300", 3, "ngClass"], [1, "max-w-7xl", "mx-auto", "px-6", "py-3", "flex", "items-center", "justify-between"], [1, "text-green-400", "font-mono", "font-bold", "text-lg", "tracking-wider", "hover:text-green-300", "transition-colors", "duration-200", 3, "click"], [1, "animate-pulse"], [1, "hidden", "md:flex", "items-center", "gap-8"], ["class", "text-green-400/60 hover:text-green-400 font-mono text-sm transition-colors duration-200 relative group", 3, "click", 4, "ngFor", "ngForOf"], ["title", "Switch to text-only vintage mode", 1, "px-3", "py-1.5", "border", "border-green-500/30", "rounded", "text-green-400/60", "hover:text-green-400", "hover:border-green-400/60", "font-mono", "text-xs", "transition-all", "duration-200", 3, "click"], [1, "md:hidden", "flex", "flex-col", "justify-center", "items-center", "w-8", "h-8", "gap-1.5", "text-green-400", 3, "click"], [1, "block", "w-5", "h-0.5", "bg-green-400", "transition-all", "duration-300", "origin-center"], [1, "block", "w-5", "h-0.5", "bg-green-400", "transition-all", "duration-300"], ["class", "md:hidden bg-black/95 border-b border-green-500/20 backdrop-blur-sm", 4, "ngIf"], [1, "text-green-400/60", "hover:text-green-400", "font-mono", "text-sm", "transition-colors", "duration-200", "relative", "group", 3, "click"], [1, "absolute", "-bottom-0.5", "left-0", "w-0", "h-px", "bg-green-400", "group-hover:w-full", "transition-all", "duration-200"], [1, "md:hidden", "bg-black/95", "border-b", "border-green-500/20", "backdrop-blur-sm"], [1, "px-6", "py-4", "flex", "flex-col", "gap-1"], ["class", "text-left text-green-400/70 hover:text-green-400 font-mono text-sm py-2.5 border-b border-green-500/10 last:border-0 transition-colors duration-200", 3, "click", 4, "ngFor", "ngForOf"], [1, "text-left", "text-green-400/70", "hover:text-green-400", "font-mono", "text-sm", "py-2.5", "transition-colors", "duration-200", 3, "click"], [1, "text-left", "text-green-400/70", "hover:text-green-400", "font-mono", "text-sm", "py-2.5", "border-b", "border-green-500/10", "last:border-0", "transition-colors", "duration-200", 3, "click"]],
    template: function NavComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavComponent_Template_button_click_2_listener() {
          return ctx.scrollTo("hero");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " > ZR");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "_");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, NavComponent_button_7_Template, 3, 1, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavComponent_Template_button_click_8_listener() {
          return ctx.switchToVintage();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " [ txt mode ] ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavComponent_Template_button_click_10_listener() {
          return ctx.toggleMenu();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "span", 8)(12, "span", 9)(13, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, NavComponent_div_14_Template, 5, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.isScrolled ? "bg-black shadow-lg border-b border-green-500/20" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.navLinks);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("rotate-45", ctx.isMenuOpen)("translate-y-2", ctx.isMenuOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("opacity-0", ctx.isMenuOpen)("scale-x-0", ctx.isMenuOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("-rotate-45", ctx.isMenuOpen)("-translate-y-2", ctx.isMenuOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isMenuOpen);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
    encapsulation: 2
  });
}

/***/ }),

/***/ 7351:
/*!******************************************************************!*\
  !*** ./src/app/core/components/not-found/not-found.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotFoundComponent: () => (/* binding */ NotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class NotFoundComponent {
  static #_ = this.ɵfac = function NotFoundComponent_Factory(t) {
    return new (t || NotFoundComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NotFoundComponent,
    selectors: [["app-not-found"]],
    decls: 9,
    vars: 0,
    consts: [[1, "flex", "items-center", "justify-center", "h-screen"], [1, "max-w-md", "w-full", "p-8", "bg-white", "rounded-lg", "shadow-md"], [1, "text-3xl", "text-center", "font-bold", "text-green-900", "mb-6"], [1, "text-center", "text-gray-700", "mb-6"], [1, "flex", "justify-center"], ["routerLink", "/", 1, "text-green-500", "hover:underline"]],
    template: function NotFoundComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "404 - Not Found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "The page you are looking for is temporarily unavailable.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4)(7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Go back to the Matrix");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
    styles: ["[_nghost-%COMP%] {\n    display: block;\n    position: relative;\n    width: 100%;\n    height: 100%;\n    background: rgb(0, 53, 0);\n    overflow: hidden;\n  }\n  canvas[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    height: 100%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtFQUNkIiwiZmlsZSI6Im5vdC1mb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogcmdiKDAsIDUzLCAwKTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIGNhbnZhcyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9jb21wb25lbnRzL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7RUFDZDtBQUNGLDRxQkFBNHFCIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogcmdiKDAsIDUzLCAwKTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIGNhbnZhcyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3318:
/*!*************************************************!*\
  !*** ./src/app/core/layout/layout.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutComponent: () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/theme.service */ 1922);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _components_matrix_rain_matrix_rain_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/matrix-rain/matrix-rain.component */ 6750);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header/header.component */ 4072);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/footer/footer.component */ 6093);
/* harmony import */ var _features_content_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../features/content/content.component */ 154);
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/nav/nav.component */ 4007);
/* harmony import */ var _features_vintage_vintage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../features/vintage/vintage.component */ 7585);









function LayoutComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 2)(2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "app-matrix-rain", 4)(4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "app-nav");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "app-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "app-content")(10, "app-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
}
function LayoutComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-vintage");
  }
}
class LayoutComponent {
  constructor(themeService) {
    this.themeService = themeService;
  }
  static #_ = this.ɵfac = function LayoutComponent_Factory(t) {
    return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_0__.ThemeService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: LayoutComponent,
    selectors: [["app-layout"]],
    decls: 4,
    vars: 4,
    consts: [[4, "ngIf", "ngIfElse"], ["vintageMode", ""], [1, "relative", "min-h-screen", "bg-black"], [1, "fixed", "inset-0", "z-0"], [1, "absolute", "inset-0"], [1, "absolute", "inset-0", "bg-black/25", "pointer-events-none"], [1, "relative", "z-10"], ["id", "hero"]],
    template: function LayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, LayoutComponent_ng_container_0_Template, 11, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, LayoutComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 2, ctx.themeService.theme$) === "matrix")("ngIfElse", _r1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _components_matrix_rain_matrix_rain_component__WEBPACK_IMPORTED_MODULE_1__.MatrixRainComponent, _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _features_content_content_component__WEBPACK_IMPORTED_MODULE_4__.ContentComponent, _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__.NavComponent, _features_vintage_vintage_component__WEBPACK_IMPORTED_MODULE_6__.VintageComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXlvdXQuY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdLQUFnSyIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2989:
/*!*************************************************!*\
  !*** ./src/app/core/services/github.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GithubService: () => (/* binding */ GithubService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4300);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9736);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);





class GithubService {
  constructor(http) {
    this.http = http;
    this.CACHE_KEY = 'github_stats_v3';
    this.CACHE_TTL = 7 * 24 * 60 * 60 * 1000; // 7 days
  }
  getStats(username) {
    const cached = this.readCache();
    if (cached) return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(cached);
    return this.fetchFromApi(username);
  }
  forceRefresh(username) {
    localStorage.removeItem(this.CACHE_KEY);
    return this.fetchFromApi(username);
  }
  fetchFromApi(username) {
    // The commits search API needs this preview header to return total_count
    const searchHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
      Accept: 'application/vnd.github.cloak-preview+json'
    });
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.forkJoin)({
      user: this.http.get(`https://api.github.com/users/${username}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(null))),
      repos: this.http.get(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)([]))),
      // per_page=1 → minimal payload; total_count gives the real commit count
      commits: this.http.get(`https://api.github.com/search/commits?q=author:${username}&per_page=1`, {
        headers: searchHeaders
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(null)))
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(({
      user,
      repos,
      commits
    }) => {
      const repoList = Array.isArray(repos) ? repos : [];
      if (!user && !repoList.length) return null;
      const stats = {
        repoCount: user?.public_repos ?? repoList.length,
        totalStars: repoList.reduce((sum, r) => sum + (r.stargazers_count || 0), 0),
        totalCommits: commits?.total_count ?? 0,
        followers: user?.followers ?? 0,
        avatarUrl: user?.avatar_url ?? '',
        login: user?.login ?? username,
        cachedAt: Date.now()
      };
      this.writeCache(stats);
      return stats;
    }));
  }
  writeCache(stats) {
    try {
      localStorage.setItem(this.CACHE_KEY, JSON.stringify(stats));
    } catch {}
  }
  readCache() {
    try {
      const raw = localStorage.getItem(this.CACHE_KEY);
      if (!raw) return null;
      const stats = JSON.parse(raw);
      if (Date.now() - stats.cachedAt > this.CACHE_TTL) return null;
      return stats;
    } catch {
      return null;
    }
  }
  static #_ = this.ɵfac = function GithubService_Factory(t) {
    return new (t || GithubService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: GithubService,
    factory: GithubService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 8966:
/*!**************************************************!*\
  !*** ./src/app/core/services/project.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectService: () => (/* binding */ ProjectService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


class ProjectService {
  constructor() {
    this.projects = [{
      id: 'hikma',
      name: 'Hikma',
      image: '/assets/projects/hikma/thumbnail.png',
      description: 'Arabic NLP & Generative AI platform — intelligent text analysis, semantic search, and document understanding for Arabic and multilingual content.',
      longDescription: 'Hikma (حكمة — Wisdom) is an NLP and Generative AI platform built to process, analyze, and extract meaning from Arabic and multilingual text. It combines fine-tuned transformer models with a retrieval-augmented generation (RAG) pipeline to deliver document summarization, semantic search, and named entity recognition at scale.',
      features: ['Arabic-first NLP processing pipeline', 'Retrieval-Augmented Generation (RAG) for document Q&A', 'Semantic search powered by vector embeddings', 'Named Entity Recognition (NER) with fine-tuned models', 'Document summarization with generative AI', 'FastAPI REST interface for seamless integration'],
      screenshots: [],
      githubLink: undefined,
      liveDemo: undefined,
      releaseDate: '2025-06-01',
      category: ['AI/ML', 'NLP', 'Generative AI'],
      stack: [{
        icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/python/python-original.svg',
        label: 'Python'
      }, {
        icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/pytorch/pytorch-original.svg',
        label: 'PyTorch'
      }, {
        icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/fastapi/fastapi-original.svg',
        label: 'FastAPI'
      }, {
        icon: 'https://img.icons8.com/?size=100&id=xSkewUSqtErH&format=png&color=000000',
        label: 'Pandas'
      }]
    }, {
      id: 'Wakalny',
      name: 'Wakalny',
      image: '/assets/projects/Wakalny/thumbnail.png',
      description: 'Clean architecture ASP.NET Core backend for restaurant management: Sentiment Analysis, Frequent Items Analysis, Auth, Menus, Orders, Reviews',
      longDescription: 'This is a modular, scalable backend system for a restaurant management application. It is built using ASP.NET Core and follows a clean architecture approach, separating concerns into Domain, Application, Infrastructure, Persistence, and API layers. The system supports user authentication, menu management, order processing, reviews, and more.',
      features: ['Clean Architecture implementation with distinct layers', 'CQRS pattern with MediatR', 'Domain-Driven Design principles', 'Entity Framework Core for data access', 'Dependency Injection', 'Unit and Integration testing'],
      screenshots: ['/assets/projects/Wakalny/screenshots/home.png', '/assets/projects/Wakalny/screenshots/auth.png', '/assets/projects/Wakalny/screenshots/catalog.png', '/assets/projects/Wakalny/screenshots/item-details.png', '/assets/projects/Wakalny/screenshots/order.png', '/assets/projects/Wakalny/screenshots/profile.png', '/assets/projects/Wakalny/screenshots/register.png'],
      githubLink: 'https://github.com/ZahraneRabhi/Restaurant.Backend',
      liveDemo: undefined,
      releaseDate: '2025-05-30',
      category: ['Backend', 'Frontend', 'Data Mining', 'Deep Learning'],
      stack: [{
        icon: 'https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/csharp/csharp-original.svg',
        label: 'C#'
      }, {
        icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/dotnetcore/dotnetcore-original.svg',
        label: '.Net'
      }, {
        icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/angular/angular-original.svg',
        label: 'Angular'
      }, {
        icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/tailwindcss/tailwindcss-original.svg',
        label: 'Tailwind'
      }, {
        icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/typescript/typescript-original.svg',
        label: 'TypeScript'
      }, {
        icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/python/python-original.svg',
        label: 'Python'
      }, {
        icon: 'https://img.icons8.com/?size=100&id=xSkewUSqtErH&format=png&color=000000',
        label: 'PANDAS'
      }, {
        icon: 'https://img.icons8.com/?size=100&id=laYYF3dV0Iew&format=png&color=000000',
        label: 'SQL Server'
      }, {
        icon: 'https://img.icons8.com/?size=100&id=n3QRpDA7KZ7P&format=png&color=000000',
        label: 'TENSORFLOW'
      }]
    }, {
      id: 'Wasalny',
      name: 'Wasalny',
      image: '/assets/projects/Wasalny/thumbnail.png',
      description: 'Clean architecture ASP.NET Core & Angular app for Carpooling management:  Auth, Driver maganement, Passenger Management, Creating Trips, Ordering Trips, Trip Preferences, etc.',
      longDescription: 'TThis is a modular, scalable web app for a carpooling management system, meticulously designed using Clean Architecture principles and built with ASP.NET Core and Angular. It provides a robust foundation for organizing and coordinating shared rides between drivers and passengers.',
      features: ['Clean Architecture implementation with distinct layers', 'Repository pattern &  Clean Architecture', 'Domain-Driven Design principles', 'Entity Framework Core for data access', 'Dependency Injection'],
      screenshots: ['/assets/projects/Wasalny/screenshots/home.png', '/assets/projects/Wasalny/screenshots/register.png', '/assets/projects/Wasalny/screenshots/catalog.png', '/assets/projects/Wasalny/screenshots/driver-dashboard.png', '/assets/projects/Wasalny/screenshots/create-trip.png', '/assets/projects/Wasalny/screenshots/create-vehicle.png', '/assets/projects/Wasalny/screenshots/admin.png'],
      githubLink: 'https://github.com/ZahraneRabhi/Restaurant.Backend',
      liveDemo: undefined,
      releaseDate: '2025-05-30',
      category: ['Backend', 'Frontend'],
      stack: [{
        icon: 'https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/csharp/csharp-original.svg',
        label: 'C#'
      }, {
        icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/dotnetcore/dotnetcore-original.svg',
        label: '.Net'
      }, {
        icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/angular/angular-original.svg',
        label: 'Angular'
      }, {
        icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/tailwindcss/tailwindcss-original.svg',
        label: 'Tailwind'
      }, {
        icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/typescript/typescript-original.svg',
        label: 'TypeScript'
      }, {
        icon: 'https://img.icons8.com/?size=100&id=laYYF3dV0Iew&format=png&color=000000',
        label: 'SQL Server'
      }]
    }, {
      id: 'angular-portfolio',
      name: 'Angular Portfolio',
      image: '/assets/projects/matrix-portfolio/thumbnail.png',
      description: 'Dynamic Matrix-themed portfolio website',
      longDescription: 'This project is a personal portfolio website built with Angular and styled with Tailwind CSS. It features a unique Matrix-inspired theme with interactive elements like terminal commands, animations, and particle effects. The portfolio showcases projects, skills, and contact information in an engaging, responsive design.',
      features: ['Matrix-inspired theme and animations', 'Interactive terminal commands', 'Responsive design for all devices', 'Project showcase with detailed views', 'GitHub integration for live statistics', 'Optimized performance and loading times', 'Dark mode support'],
      screenshots: ['/assets/projects/matrix-portfolio/screenshots/header.png', '/assets/projects/matrix-portfolio/screenshots/about.png'],
      githubLink: 'https://github.com/ZahraneRabhi/ZahraneRabhi.github.io',
      liveDemo: 'https://zahranerabhi.github.io/',
      releaseDate: '2024-06-01',
      category: ['Frontend'],
      stack: [{
        icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/angular/angular-original.svg',
        label: 'Angular'
      }, {
        icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/tailwindcss/tailwindcss-original.svg',
        label: 'Tailwind'
      }, {
        icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/typescript/typescript-original.svg',
        label: 'TypeScript'
      }]
    }, {
      id: 'ng-github-stats',
      name: 'Github Scoreboard Component',
      image: '/assets/projects/ng-github-stats/thumbnail.png',
      description: 'Reusable Angular component for GitHub statistics visualization',
      longDescription: "This project provides a customizable GitHub statistics component for Angular applications. It fetches and visualizes a developer's GitHub activities including repositories, commits, stars, and contributions with a Matrix-inspired design.",
      features: ['GitHub API integration', 'Customizable statistics display', 'Matrix-themed visualization', 'Responsive design', 'Easy integration into Angular applications', 'Configurable appearance and metrics'],
      screenshots: ['/assets/ProjectThumbnails/ng-gh-stats.png'],
      githubLink: 'https://github.com/ZahraneRabhi/ng-github-stats-component',
      liveDemo: undefined,
      releaseDate: '2024-04-10',
      category: ['Component'],
      stack: [{
        icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/angular/angular-original.svg',
        label: 'Angular'
      }, {
        icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/tailwindcss/tailwindcss-original.svg',
        label: 'Tailwind'
      }, {
        icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/typescript/typescript-original.svg',
        label: 'TypeScript'
      }]
    }, {
      id: 'dotnet-clean-architecture',
      name: '.Net Core Clean Architecture',
      image: '/assets/ProjectThumbnails/dotnet-clean-architecture.png',
      description: 'A comprehensive implementation of Clean Architecture principles in .NET Core',
      longDescription: 'This project demonstrates the implementation of Clean Architecture in a .NET Core application, featuring CQRS, MediatR, and Domain-Driven Design principles. The architecture is divided into distinct layers with clear responsibilities and dependencies.',
      features: ['Clean Architecture implementation with distinct layers', 'CQRS pattern with MediatR', 'Domain-Driven Design principles', 'Entity Framework Core for data access', 'Dependency Injection', 'Unit and Integration testing'],
      screenshots: undefined,
      githubLink: 'https://github.com/ZahraneRabhi/DOTNET-CORE-CLEAN-ARCHITECTURE',
      liveDemo: undefined,
      releaseDate: '2024-03-15',
      category: ['Backend'],
      stack: [{
        icon: 'https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/csharp/csharp-original.svg',
        label: 'C#'
      }, {
        icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/dotnetcore/dotnetcore-original.svg',
        label: '.Net'
      }]
    }, {
      id: 'angular-18-clean-architecture',
      name: 'Angular 18 Clean Architecture',
      image: '/assets/ProjectThumbnails/angular-18-clean-architecture.png',
      description: 'Modern Angular 18 application with clean architecture principles',
      longDescription: 'This project showcases the implementation of clean architecture principles in an Angular 18 application. It demonstrates how to structure a scalable, maintainable frontend application with proper separation of concerns, state management, and comprehensive testing.',
      features: ['Clean Architecture implementation in Angular 18', 'State management with NgRx', 'Lazy-loaded feature modules', 'Comprehensive component and service testing', 'Responsive design with Tailwind CSS', 'TypeScript best practices'],
      screenshots: ['/assets/ProjectThumbnails/angular-18-clean-architecture.png'],
      githubLink: 'https://github.com/ZahraneRabhi/ANGULAR-18-CLEAN-ARCHITECTURE',
      liveDemo: undefined,
      releaseDate: '2024-05-20',
      category: ['Frontend'],
      stack: [{
        icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/angular/angular-original.svg',
        label: 'Angular'
      }, {
        icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/tailwindcss/tailwindcss-original.svg',
        label: 'Tailwind'
      }, {
        icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/typescript/typescript-original.svg',
        label: 'TypeScript'
      }]
    }, {
      id: 'angular-laravel-jwt',
      name: 'Angular Laravel JWT Auth',
      image: '/assets/ProjectThumbnails/ng-laravel-jwt.png',
      description: 'Full-stack authentication system with Angular and Laravel',
      longDescription: 'This project implements a robust authentication system using Angular for the frontend and Laravel for the backend API. It utilizes JSON Web Tokens (JWT) for secure, stateless authentication with features like user registration, login, token refresh, and profile management.',
      features: ['JWT-based authentication', 'User registration and login', 'Password reset functionality', 'Token refresh mechanism', 'Role-based authorization', 'User profile management', 'Security best practices'],
      screenshots: ['/assets/ProjectThumbnails/ng-laravel-jwt.png'],
      githubLink: 'https://github.com/ZahraneRabhi/laravel-angular-auth',
      liveDemo: undefined,
      releaseDate: '2024-02-18',
      category: ['Full-stack'],
      stack: [{
        icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/php/php-original.svg',
        label: 'PHP'
      }, {
        icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/laravel/laravel-original.svg',
        label: 'LARAVEL'
      }, {
        icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/angular/angular-original.svg',
        label: 'Angular'
      }, {
        icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/typescript/typescript-original.svg',
        label: 'TypeScript'
      }]
    }, {
      id: 'twitter-api',
      name: 'Twitter API',
      image: '/assets/ProjectThumbnails/twitter-api.png',
      description: 'Python-based Twitter API integration and data analytics',
      longDescription: 'This project provides a comprehensive Twitter API integration using Python. It includes features for data collection, analysis, and visualization of Twitter data, with support for real-time streaming and batch processing of tweets.',
      features: ['Twitter API v2 integration', 'Real-time tweet streaming', 'Sentiment analysis', 'Data visualization', 'Batch processing capabilities', 'Rate limiting handling'],
      screenshots: ['/assets/ProjectThumbnails/twitter-api.png'],
      githubLink: 'https://github.com/ZahraneRabhi/Twitter-API',
      liveDemo: undefined,
      releaseDate: '2024-01-25',
      category: ['Data Analytics'],
      stack: [{
        icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/python/python-original.svg',
        label: 'python'
      }, {
        icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/twitter/twitter-original.svg',
        label: 'twitter'
      }]
    }, {
      id: 'ml-template',
      name: 'ML Project template Generator',
      image: '/assets/ProjectThumbnails/ml-template.png',
      description: 'Automated machine learning project structure generator',
      longDescription: 'This project provides an automated way to generate machine learning project structures with best practices. It includes templates for data science workflows, model training pipelines, and deployment configurations.',
      features: ['Automated project structure generation', 'ML pipeline templates', 'Data science best practices', 'Configurable project types'],
      screenshots: ['/assets/ProjectThumbnails/ml-template.png'],
      githubLink: 'https://github.com/ZahraneRabhi/Python-Template-Generator',
      liveDemo: undefined,
      releaseDate: '2024-03-08',
      category: ['Tools'],
      stack: [{
        icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/python/python-original.svg',
        label: 'python'
      }]
    }
    // {
    //   id: 'beautiful-terminal',
    //   name: 'Beautiful Terminal',
    //   image: '/assets/ProjectThumbnails/beautiful-terminal.png',
    //   description:
    //     'Enhanced terminal experience with beautiful themes and features',
    //   longDescription:
    //     'This project enhances the terminal experience with beautiful themes, custom prompts, and productivity features. It includes color schemes, status information, and customizable elements to make the command line more visually appealing and functional.',
    //   features: [
    //     'Custom terminal themes',
    //     'Enhanced prompt design',
    //     'Git integration',
    //     'Status indicators',
    //     'Performance optimizations',
    //     'Cross-platform compatibility',
    //   ],
    //   screenshots: ['/assets/ProjectThumbnails/beautiful-terminal.png'],
    //   githubLink: 'https://github.com/ZahraneRabhi/Beautiful-Terminal-',
    //   liveDemo: undefined,
    //   releaseDate: '2024-01-10',
    //   category: ['Tools'],
    //   stack: [
    //     {
    //       icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/python/python-original.svg',
    //       label: 'python',
    //     },
    //   ],
    // },
    ];
  }
  getProjects() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(this.projects);
  }
  getProjectById(id) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(this.projects.find(project => project.id === id));
  }
  static #_ = this.ɵfac = function ProjectService_Factory(t) {
    return new (t || ProjectService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: ProjectService,
    factory: ProjectService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 1922:
/*!************************************************!*\
  !*** ./src/app/core/services/theme.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeService: () => (/* binding */ ThemeService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


class ThemeService {
  constructor() {
    this.STORAGE_KEY = 'zr_site_theme';
    this.themeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.readSaved());
    this.theme$ = this.themeSubject.asObservable();
  }
  get current() {
    return this.themeSubject.value;
  }
  toggle() {
    this.set(this.current === 'matrix' ? 'vintage' : 'matrix');
  }
  set(theme) {
    this.themeSubject.next(theme);
    try {
      localStorage.setItem(this.STORAGE_KEY, theme);
    } catch {}
  }
  readSaved() {
    try {
      return localStorage.getItem(this.STORAGE_KEY) === 'vintage' ? 'vintage' : 'matrix';
    } catch {
      return 'matrix';
    }
  }
  static #_ = this.ɵfac = function ThemeService_Factory(t) {
    return new (t || ThemeService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: ThemeService,
    factory: ThemeService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 3185:
/*!***************************************************!*\
  !*** ./src/app/features/about/about.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutComponent: () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);


function AboutComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 27)(3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const stack_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("animation-delay", i_r2 * 100 + "ms");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", stack_r1.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", stack_r1.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stack_r1.label);
  }
}
class AboutComponent {
  constructor() {
    this.about_1 = `Full Stack & Deep Learning Developer, &Occasional 3D Modeler`;
    this.about_2 = `I’m a Full-Stack developer by day and a Deep Learning explorer by… also day😀. I love designing & maintaining web solutions while also digging into data to find stories and trends. And when I’m not doing that, you might catch me tinkering with 3D models in Blender just for fun!`;
    this.stacks = [{
      "icon": "https://img.icons8.com/?size=100&id=52539&format=png&color=000000",
      "label": "GIT"
    }, {
      "icon": "https://img.icons8.com/?size=100&id=VLKafOkk3sBX&format=png&color=000000",
      "label": "Azure"
    }, {
      "icon": "https://img.icons8.com/?size=100&id=13441&format=png&color=000000",
      "label": "PYTHON"
    }, {
      "icon": "https://img.icons8.com/?size=100&id=O6SWwpPIM0GB&format=png&color=000000",
      "label": "PYTORCH"
    }, {
      "icon": "https://img.icons8.com/?size=100&id=xSkewUSqtErH&format=png&color=000000",
      "label": "PANDAS"
    }, {
      "icon": "https://img.icons8.com/?size=100&id=aR9CXyMagKIS&format=png&color=000000",
      "label": "NUMPY"
    }, {
      "icon": "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
      "label": "SCIKIT-LEARN"
    }, {
      "icon": "https://img.icons8.com/?size=100&id=22813&format=png&color=000000",
      "label": "DOCKER"
    }, {
      "icon": "https://img.icons8.com/?size=100&id=1BC75jFEBED6&format=png&color=000000",
      "label": ".NET CORE"
    }, {
      "icon": "https://img.icons8.com/color/48/000000/angularjs.png",
      "label": "ANGULAR"
    }, {
      "icon": "https://img.icons8.com/color/48/000000/typescript.png",
      "label": "TYPESCRIPT"
    }, {
      "icon": "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000",
      "label": "TAILWIND CSS"
    }, {
      "icon": "https://img.icons8.com/?size=100&id=13679&format=png&color=000000",
      "label": "JAVA"
    }];
  }
  static #_ = this.ɵfac = function AboutComponent_Factory(t) {
    return new (t || AboutComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AboutComponent,
    selectors: [["app-about"]],
    decls: 35,
    vars: 3,
    consts: [["id", "about", 1, "relative", "liquid-glass", "rounded-2xl", "overflow-hidden", "shadow-2xl", "mx-4", "md:mx-8"], [1, "absolute", "top-0", "left-0", "w-full", "h-0.5", "bg-gradient-to-r", "from-transparent", "via-green-400", "to-transparent", "animate-pulse"], [1, "relative"], [1, "py-16"], [1, "container", "mx-auto", "px-4", "sm:px-6", "lg:px-8"], [1, "flex", "flex-col", "lg:flex-row", "justify-between", "items-center"], [1, "w-full", "lg:w-1/2", "mb-8", "lg:mb-0"], [1, "flex", "items-center", "gap-3", "mb-6"], [1, "text-green-400", "font-mono", "text-lg", "animate-pulse"], [1, "text-4xl", "font-bold", "text-green-400", "font-mono", "tracking-wider"], [1, "space-y-4"], [1, "border-l-2", "border-green-500/50", "pl-4"], [1, "text-green-500/70", "font-mono", "text-sm"], [1, "text-green-300", "text-justify", "text-xl", "font-mono", "leading-relaxed"], [1, "text-green-300", "text-justify", "font-mono", "leading-relaxed"], [1, "w-full", "lg:w-1/2", "flex", "justify-center", "lg:justify-end"], [1, "liquid-glass-inner", "rounded-xl", "p-6"], [1, "flex", "items-center", "gap-2", "mb-4"], [1, "text-green-400", "font-mono"], [1, "w-2", "h-4", "bg-green-400", "animate-pulse"], [1, "grid", "grid-cols-5", "gap-4"], ["class", "group flex flex-col items-center transition-all duration-300 hover:scale-110 hover:bg-green-500/10 p-2 rounded border border-transparent hover:border-green-500/30", "style", "animation: matrixSkillFadeIn 0.6s ease-out both", 3, "animation-delay", 4, "ngFor", "ngForOf"], [1, "absolute", "top-2", "left-2", "w-4", "h-4", "border-l-2", "border-t-2", "border-green-400/50"], [1, "absolute", "top-2", "right-2", "w-4", "h-4", "border-r-2", "border-t-2", "border-green-400/50"], [1, "absolute", "bottom-2", "left-2", "w-4", "h-4", "border-l-2", "border-b-2", "border-green-400/50"], [1, "absolute", "bottom-2", "right-2", "w-4", "h-4", "border-r-2", "border-b-2", "border-green-400/50"], [1, "group", "flex", "flex-col", "items-center", "transition-all", "duration-300", "hover:scale-110", "hover:bg-green-500/10", "p-2", "rounded", "border", "border-transparent", "hover:border-green-500/30", 2, "animation", "matrixSkillFadeIn 0.6s ease-out both"], [1, "h-12", "w-12", "filter", "group-hover:brightness-125", "transition-all", "duration-300", 3, "src", "alt"], [1, "absolute", "inset-0", "bg-green-400/20", "rounded", "opacity-0", "group-hover:opacity-100", "transition-opacity", "duration-300", "blur-sm"], [1, "text-xs", "text-green-300", "mt-2", "font-mono"]],
    template: function AboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "section", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "ABOUT.SYS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10)(13, "div", 11)(14, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "// Primary function");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11)(19, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "// Extended parameters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15)(24, "div", 16)(25, "div", 17)(26, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "> skills.list()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, AboutComponent_div_30_Template, 6, 5, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 22)(32, "div", 23)(33, "div", 24)(34, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.about_1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.about_2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.stacks);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsZ0tBQWdLIiwic291cmNlUm9vdCI6IiJ9 */", "@keyframes _ngcontent-%COMP%_matrixSkillFadeIn {\n  0% {\n    opacity: 0;\n    transform: translateY(10px) scale(0.9);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}"]
  });
}

/***/ }),

/***/ 3595:
/*!*******************************************************!*\
  !*** ./src/app/features/contact/contact.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactComponent: () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _home_zahry_Dev_Angular_ZahraneRabhi_github_io_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emailjs/browser */ 8842);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);






function ContactComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "> name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ContactComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "> valid email required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ContactComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "> message required (min 10 chars)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ContactComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " > Message transmitted successfully \u2713 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ContactComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " > Transmission failed. Try: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "ZahraneRabhi@outlook.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
class ContactComponent {
  constructor(fb) {
    this.fb = fb;
    this.sending = false;
    this.sent = false;
    this.sendError = false;
    // Replace with your EmailJS credentials from https://www.emailjs.com
    this.SERVICE_ID = 'YOUR_SERVICE_ID';
    this.TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
    this.PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
  }
  ngOnInit() {
    this.form = this.fb.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
      message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(10)]]
    });
  }
  send() {
    var _this = this;
    return (0,_home_zahry_Dev_Angular_ZahraneRabhi_github_io_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.form.invalid) {
        _this.form.markAllAsTouched();
        return;
      }
      _this.sending = true;
      _this.sendError = false;
      _this.sent = false;
      try {
        yield _emailjs_browser__WEBPACK_IMPORTED_MODULE_1__["default"].send(_this.SERVICE_ID, _this.TEMPLATE_ID, {
          from_name: _this.form.value.name,
          from_email: _this.form.value.email,
          message: _this.form.value.message
        }, _this.PUBLIC_KEY);
        _this.sent = true;
        _this.form.reset();
      } catch {
        _this.sendError = true;
      } finally {
        _this.sending = false;
      }
    })();
  }
  static #_ = this.ɵfac = function ContactComponent_Factory(t) {
    return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ContactComponent,
    selectors: [["app-contact"]],
    decls: 46,
    vars: 10,
    consts: [["id", "contact", 1, "relative", "py-20", "px-6", "overflow-hidden"], [1, "relative", "max-w-3xl", "mx-auto"], [1, "text-center", "mb-16"], [1, "inline-flex", "items-center", "justify-center", "p-3", "bg-green-500/10", "border", "border-green-500/30", "rounded-lg", "mb-6"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-8", "h-8", "text-green-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"], [1, "text-5xl", "md:text-6xl", "font-bold", "text-green-400", "mb-4", "font-mono", "tracking-wider"], [1, "inline-block", "animate-pulse"], [1, "text-green-300/80", "text-lg", "font-mono"], [1, "w-32", "h-0.5", "bg-green-400", "mx-auto", "mt-6", "animate-pulse"], [1, "liquid-glass", "rounded-2xl", "overflow-hidden", "shadow-2xl", "relative", 3, "formGroup", "ngSubmit"], [1, "liquid-glass-bar", "px-4", "py-2", "flex", "items-center", "gap-2"], [1, "w-3", "h-3", "rounded-full", "bg-red-500/70"], [1, "w-3", "h-3", "rounded-full", "bg-yellow-500/70"], [1, "w-3", "h-3", "rounded-full", "bg-green-500/70"], [1, "ml-4", "text-green-400", "font-mono", "text-sm"], [1, "p-8"], [1, "mb-6"], [1, "block", "text-green-500/70", "font-mono", "text-sm", "mb-2"], ["formControlName", "name", "type", "text", "placeholder", "John Doe", 1, "w-full", "liquid-glass-inner", "rounded-lg", "px-4", "py-3", "text-green-400", "font-mono", "text-sm", "placeholder-green-900", "focus:outline-none", "focus:border-green-400/60", "transition-colors", "duration-200"], ["class", "text-red-400 font-mono text-xs mt-1", 4, "ngIf"], ["formControlName", "email", "type", "email", "placeholder", "you@domain.com", 1, "w-full", "liquid-glass-inner", "rounded-lg", "px-4", "py-3", "text-green-400", "font-mono", "text-sm", "placeholder-green-900", "focus:outline-none", "focus:border-green-400/60", "transition-colors", "duration-200"], [1, "mb-8"], ["formControlName", "message", "rows", "5", "placeholder", "Your message...", 1, "w-full", "liquid-glass-inner", "rounded-lg", "px-4", "py-3", "text-green-400", "font-mono", "text-sm", "placeholder-green-900", "focus:outline-none", "focus:border-green-400/60", "transition-colors", "duration-200", "resize-none"], ["class", "mb-4 px-4 py-3 bg-green-500/10 border border-green-500/30 rounded font-mono text-green-400 text-sm", 4, "ngIf"], ["class", "mb-4 px-4 py-3 bg-red-500/10 border border-red-500/30 rounded font-mono text-red-400 text-sm", 4, "ngIf"], ["type", "submit", 1, "w-full", "group", "inline-flex", "items-center", "justify-center", "gap-3", "px-8", "py-4", "bg-black", "border", "border-green-500/30", "text-green-400", "font-mono", "text-lg", "rounded", "hover:bg-green-500/10", "hover:border-green-400/60", "transition-all", "duration-300", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "disabled"], [1, "w-3", "h-5", "bg-green-400"], [1, "absolute", "top-2", "left-2", "w-4", "h-4", "border-l-2", "border-t-2", "border-green-400/30"], [1, "absolute", "top-2", "right-2", "w-4", "h-4", "border-r-2", "border-t-2", "border-green-400/30"], [1, "absolute", "bottom-2", "left-2", "w-4", "h-4", "border-l-2", "border-b-2", "border-green-400/30"], [1, "absolute", "bottom-2", "right-2", "w-4", "h-4", "border-r-2", "border-b-2", "border-green-400/30"], [1, "text-red-400", "font-mono", "text-xs", "mt-1"], [1, "mb-4", "px-4", "py-3", "bg-green-500/10", "border", "border-green-500/30", "rounded", "font-mono", "text-green-400", "text-sm"], [1, "mb-4", "px-4", "py-3", "bg-red-500/10", "border", "border-red-500/30", "rounded", "font-mono", "text-red-400", "text-sm"], ["href", "mailto:ZahraneRabhi@outlook.com", 1, "underline", "hover:text-red-300"]],
    template: function ContactComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h2", 6)(7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " CONTACT.EXE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " >> Initialize connection protocol ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ContactComponent_Template_form_ngSubmit_13_listener() {
          return ctx.send();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "div", 12)(16, "div", 13)(17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "contact.sys");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 16)(21, "div", 17)(22, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "// from_name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, ContactComponent_div_25_Template, 2, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 17)(27, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "// from_email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, ContactComponent_div_30_Template, 2, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 22)(32, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "// message");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "textarea", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, ContactComponent_div_35_Template, 2, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, ContactComponent_div_36_Template, 2, 0, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, ContactComponent_div_37_Template, 4, 0, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "button", 26)(39, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "div", 28)(43, "div", 29)(44, "div", 30)(45, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        let tmp_3_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx.form.get("name")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx.form.get("name")) == null ? null : tmp_1_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.form.get("email")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.form.get("email")) == null ? null : tmp_2_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.form.get("message")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.form.get("message")) == null ? null : tmp_3_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.sent);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.sendError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.sending);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.sending ? "> transmitting..." : "> ./send_message");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("animate-pulse", !ctx.sending);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5jc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLG9LQUFvSyIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 154:
/*!*******************************************************!*\
  !*** ./src/app/features/content/content.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentComponent: () => (/* binding */ ContentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../projects/projects.component */ 7086);
/* harmony import */ var _github_stats_github_stats_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../github-stats/github-stats.component */ 4341);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contact/contact.component */ 3595);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../about/about.component */ 3185);





class ContentComponent {
  static #_ = this.ɵfac = function ContentComponent_Factory(t) {
    return new (t || ContentComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ContentComponent,
    selectors: [["app-content"]],
    decls: 44,
    vars: 0,
    consts: [[1, "relative", "py-12"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center"], [1, "w-full", "max-w-4xl", "h-px", "bg-gradient-to-r", "from-transparent", "via-green-500/30", "to-transparent"], [1, "relative", "flex", "justify-center"], [1, "bg-black/50", "backdrop-blur-sm", "rounded", "px-4", "text-green-400/60", "font-mono", "text-sm"], [1, "animate-pulse"]],
    template: function ContentComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " loading_about.sys ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "_");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 0)(12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 3)(15, "div", 4)(16, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, " executing_projects.exe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "_");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "app-projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 0)(23, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 3)(26, "div", 4)(27, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, " fetching_github_stats.json ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "_");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "app-github-stats");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 0)(34, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 3)(37, "div", 4)(38, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, " connecting_contact.dll ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "_");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](43, "app-contact");
      }
    },
    dependencies: [_projects_projects_component__WEBPACK_IMPORTED_MODULE_0__.ProjectsComponent, _github_stats_github_stats_component__WEBPACK_IMPORTED_MODULE_1__.GithubStatsComponent, _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__.ContactComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_3__.AboutComponent],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250ZW50LmNvbXBvbmVudC5jc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLG9LQUFvSyIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4341:
/*!*****************************************************************!*\
  !*** ./src/app/features/github-stats/github-stats.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GithubStatsComponent: () => (/* binding */ GithubStatsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _core_services_github_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/github.service */ 2989);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);



function GithubStatsComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13)(1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "> fetching github.stats()...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function GithubStatsComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16)(1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "svg", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "path", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "> API unavailable \u2014 no cached data found");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
}
function GithubStatsComponent_div_15_img_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 47);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r3.stats.avatarUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function GithubStatsComponent_div_15_div_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "path", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("> serving from cache \u2014 ", ctx_r4.cacheAge, "");
  }
}
function GithubStatsComponent_div_15_div_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "> live data fetched");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function GithubStatsComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20)(1, "div", 21)(2, "div", 22)(3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 25)(6, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "svg", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "path", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "REPOSITORIES");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "public instances");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "div", 32)(16, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 25)(20, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "svg", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "polygon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "STARS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "achievement points");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "div", 32)(30, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 25)(34, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "svg", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "circle", 36)(37, "line", 37)(38, "line", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "COMMITS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](43, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "total pushes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "div", 32)(47, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 25)(51, "div", 26)(52, "div", 3)(53, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, GithubStatsComponent_div_15_img_54_Template, 1, 1, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "FOLLOWERS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "div", 32)(63, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](65, GithubStatsComponent_div_15_div_65_Template, 5, 1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, GithubStatsComponent_div_15_div_66_Template, 4, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GithubStatsComponent_div_15_Template_button_click_67_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.refresh());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "svg", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "path", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.stats.repoCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.stats.totalStars);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](43, 12, ctx_r2.stats.totalCommits));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.stats.avatarUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.stats.followers);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.stats.login);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.isFromCache);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r2.isFromCache);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r2.isRefreshing);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("animate-spin", ctx_r2.isRefreshing);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.isRefreshing ? "refreshing..." : "> force refresh");
  }
}
class GithubStatsComponent {
  constructor(githubService) {
    this.githubService = githubService;
    this.stats = null;
    this.isLoading = true;
    this.loadError = false;
    this.isRefreshing = false;
    this.username = 'ZahraneRabhi';
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.isLoading = true;
    this.loadError = false;
    this.githubService.getStats(this.username).subscribe({
      next: data => {
        this.stats = data;
        this.isLoading = false;
      },
      error: () => {
        this.loadError = true;
        this.isLoading = false;
      }
    });
  }
  refresh() {
    this.isRefreshing = true;
    this.githubService.forceRefresh(this.username).subscribe({
      next: data => {
        this.stats = data;
        this.isRefreshing = false;
      },
      error: () => {
        this.loadError = true;
        this.isRefreshing = false;
      }
    });
  }
  get isFromCache() {
    if (!this.stats) return false;
    // If cachedAt is more than 5 seconds old it was loaded from storage, not just written
    return Date.now() - this.stats.cachedAt > 5000;
  }
  get cacheAge() {
    if (!this.stats) return '';
    const ms = Date.now() - this.stats.cachedAt;
    const minutes = Math.floor(ms / 60000);
    const hours = Math.floor(ms / 3600000);
    const days = Math.floor(hours / 24);
    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    if (minutes > 0) return `${minutes}m ago`;
    return 'just now';
  }
  static #_ = this.ɵfac = function GithubStatsComponent_Factory(t) {
    return new (t || GithubStatsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_github_service__WEBPACK_IMPORTED_MODULE_0__.GithubService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: GithubStatsComponent,
    selectors: [["app-github-stats"]],
    decls: 16,
    vars: 3,
    consts: [["id", "stats", 1, "relative", "py-16", "overflow-hidden"], [1, "absolute", "inset-0", "opacity-20"], [1, "absolute", "inset-0", 2, "background-image", "radial-gradient(circle at 20% 20%, #00ff0010 0%, transparent 50%), radial-gradient(circle at 80% 80%, #00ff0008 0%, transparent 50%)"], [1, "relative"], [1, "text-center", "mb-16"], [1, "inline-flex", "items-center", "gap-3", "mb-4"], [1, "text-green-400", "font-mono", "text-xl", "animate-pulse"], [1, "text-4xl", "font-bold", "text-green-400", "font-mono", "tracking-wider"], [1, "w-3", "h-5", "bg-green-400", "animate-pulse"], [1, "text-green-300/70", "font-mono", "text-sm"], ["class", "flex flex-col items-center justify-center py-16 gap-4", 4, "ngIf"], ["class", "text-center py-8", 4, "ngIf"], ["class", "flex justify-center items-center", 4, "ngIf"], [1, "flex", "flex-col", "items-center", "justify-center", "py-16", "gap-4"], [1, "text-green-400", "font-mono", "text-sm", "animate-pulse"], [1, "w-8", "h-8", "border-2", "border-green-400", "border-t-transparent", "rounded-full", "animate-spin"], [1, "text-center", "py-8"], [1, "inline-flex", "items-center", "gap-2", "px-4", "py-3", "bg-red-500/10", "border", "border-red-500/30", "rounded", "font-mono", "text-red-400", "text-sm"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "flex-shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"], [1, "flex", "justify-center", "items-center"], [1, "w-full", "max-w-6xl", "px-6"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-4", "gap-6"], [1, "group", "relative", "liquid-glass", "rounded-2xl", "p-6", "hover:border-green-400/60", "transition-all", "duration-300"], [1, "absolute", "top-0", "left-0", "w-full", "h-0.5", "bg-gradient-to-r", "from-transparent", "via-green-400", "to-transparent", "opacity-0", "group-hover:opacity-100", "group-hover:animate-pulse", "transition-opacity", "duration-300"], [1, "text-center"], [1, "flex", "justify-center", "mb-3"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-10", "h-10", "text-green-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"], [1, "text-green-500/70", "font-mono", "text-sm", "mb-1"], [1, "text-3xl", "font-bold", "text-green-400", "font-mono"], [1, "text-green-300/60", "font-mono", "text-xs", "mt-1"], [1, "absolute", "top-1", "left-1", "w-3", "h-3", "border-l-2", "border-t-2", "border-green-400/50", "opacity-0", "group-hover:opacity-100", "transition-opacity", "duration-300"], [1, "absolute", "top-1", "right-1", "w-3", "h-3", "border-r-2", "border-t-2", "border-green-400/50", "opacity-0", "group-hover:opacity-100", "transition-opacity", "duration-300"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", "stroke-width", "2", 1, "w-10", "h-10", "text-green-400"], ["points", "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"], ["cx", "12", "cy", "12", "r", "3"], ["x1", "3", "y1", "12", "x2", "9", "y2", "12"], ["x1", "15", "y1", "12", "x2", "21", "y2", "12"], [1, "w-12", "h-12", "rounded-full", "border-2", "border-green-400", "overflow-hidden", "bg-green-500/10"], ["alt", "GitHub avatar", "class", "w-full h-full object-cover", 3, "src", 4, "ngIf"], [1, "absolute", "-top-1", "-right-1", "w-4", "h-4", "bg-green-400", "rounded-full", "animate-pulse", "border-2", "border-black"], [1, "mt-8", "flex", "flex-col", "sm:flex-row", "items-center", "justify-center", "gap-3"], ["class", "inline-flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/20 rounded font-mono text-xs text-green-400/70", 4, "ngIf"], [1, "inline-flex", "items-center", "gap-2", "px-4", "py-1.5", "bg-black/60", "border", "border-green-500/30", "rounded", "text-green-400/70", "hover:text-green-400", "hover:bg-green-500/10", "transition-all", "duration-300", "font-mono", "text-xs", "disabled:opacity-40", "disabled:cursor-not-allowed", 3, "disabled", "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", "stroke-width", "2", 1, "w-3", "h-3"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"], ["alt", "GitHub avatar", 1, "w-full", "h-full", "object-cover", 3, "src"], [1, "inline-flex", "items-center", "gap-2", "px-3", "py-1.5", "bg-green-500/10", "border", "border-green-500/20", "rounded", "font-mono", "text-xs", "text-green-400/70"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", "stroke-width", "2", 1, "w-3", "h-3", "flex-shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"], [1, "w-2", "h-2", "bg-green-400", "rounded-full", "animate-pulse"]],
    template: function GithubStatsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "GITHUB.MATRIX");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "// System performance metrics");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, GithubStatsComponent_div_13_Template, 4, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, GithubStatsComponent_div_14_Template, 6, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, GithubStatsComponent_div_15_Template, 72, 14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.loadError && !ctx.stats);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.stats);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DecimalPipe],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnaXRodWItc3RhdHMuY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvZ2l0aHViLXN0YXRzL2dpdGh1Yi1zdGF0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSx3S0FBd0siLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 7086:
/*!*********************************************************!*\
  !*** ./src/app/features/projects/projects.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectsComponent: () => (/* binding */ ProjectsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _core_services_project_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/project.service */ 8966);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _core_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/components/card/card.component */ 2169);





function ProjectsComponent_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectsComponent_button_14_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const filter_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.setFilter(filter_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const filter_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r0.activeFilter === filter_r2 ? "bg-green-500/20 border-green-400/60 text-green-400" : "bg-black/50 border-green-500/30 text-green-400/50 hover:text-green-400");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", filter_r2 === "All" ? "> ./all" : "> " + filter_r2.toLowerCase(), " ");
  }
}
function ProjectsComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19)(1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 21)(3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "app-card", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "div", 25)(7, "div", 26)(8, "div", 27)(9, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const project_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("animation-delay", i_r6 * 200 + "ms");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("project", project_r5);
  }
}
class ProjectsComponent {
  constructor(router, projectService) {
    this.router = router;
    this.projectService = projectService;
    this.projects = [];
    this.activeFilter = 'All';
    this.filters = ['All', 'Frontend', 'Backend', 'Full-stack', 'AI/ML', 'Tools'];
  }
  ngOnInit() {
    this.projectService.getProjects().subscribe(projects => {
      this.projects = projects;
    });
  }
  get filteredProjects() {
    if (this.activeFilter === 'All') return this.projects;
    if (this.activeFilter === 'AI/ML') {
      return this.projects.filter(p => p.category?.some(c => ['Deep Learning', 'Data Mining', 'Data Analytics', 'AI/ML', 'NLP', 'Generative AI'].includes(c)));
    }
    if (this.activeFilter === 'Tools') {
      return this.projects.filter(p => p.category?.some(c => ['Tools', 'Component'].includes(c)));
    }
    return this.projects.filter(p => p.category?.includes(this.activeFilter));
  }
  setFilter(filter) {
    this.activeFilter = filter;
  }
  navigateToProjectDetails(projectId) {
    this.router.navigate(['/project', projectId]);
  }
  static #_ = this.ɵfac = function ProjectsComponent_Factory(t) {
    return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_project_service__WEBPACK_IMPORTED_MODULE_0__.ProjectService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ProjectsComponent,
    selectors: [["app-projects"]],
    decls: 22,
    vars: 2,
    consts: [["id", "projects", 1, "relative", "py-20", "px-6", "overflow-hidden"], [1, "relative", "max-w-7xl", "mx-auto"], [1, "text-center", "mb-16"], [1, "inline-flex", "items-center", "justify-center", "p-3", "bg-green-500/10", "border", "border-green-500/30", "rounded-lg", "mb-6", "backdrop-blur-sm"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-8", "h-8", "text-green-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"], [1, "text-5xl", "md:text-6xl", "font-bold", "text-green-400", "mb-4", "font-mono", "tracking-wider"], [1, "inline-block", "animate-pulse"], [1, "text-green-300/80", "text-lg", "max-w-2xl", "mx-auto", "leading-relaxed", "font-mono"], [1, "w-32", "h-0.5", "bg-green-400", "mx-auto", "mt-6", "animate-pulse"], [1, "flex", "flex-wrap", "justify-center", "gap-3", "mb-12"], ["class", "px-4 py-2 font-mono text-sm rounded border transition-all duration-200", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "xl:grid-cols-3", "gap-8", "lg:gap-10"], ["class", "h-full group relative transform transition-all duration-300 hover:scale-105", "style", "animation: matrixFadeIn 1s ease-out both", 3, "animation-delay", 4, "ngFor", "ngForOf"], [1, "text-center", "mt-20"], [1, "inline-flex", "items-center", "gap-3", "px-6", "py-3", "bg-black/50", "border", "border-green-500/30", "rounded", "text-green-400", "hover:border-green-400/60", "hover:bg-green-500/10", "transition-all", "duration-300", "cursor-pointer", "group", "font-mono"], [1, "text-sm"], [1, "w-2", "h-4", "bg-green-400", "animate-pulse"], [1, "px-4", "py-2", "font-mono", "text-sm", "rounded", "border", "transition-all", "duration-200", 3, "ngClass", "click"], [1, "h-full", "group", "relative", "transform", "transition-all", "duration-300", "hover:scale-105", 2, "animation", "matrixFadeIn 1s ease-out both"], [1, "h-full", "relative", "liquid-glass", "rounded-2xl", "overflow-hidden", "shadow-2xl", "group-hover:border-green-400/60", "transition-all", "duration-300"], [1, "absolute", "inset-0", "bg-green-400/5", "opacity-0", "group-hover:opacity-100", "transition-opacity", "duration-300"], [1, "absolute", "top-0", "left-0", "w-full", "h-0.5", "bg-gradient-to-r", "from-transparent", "via-green-400", "to-transparent", "opacity-0", "group-hover:opacity-100", "group-hover:animate-pulse", "transition-opacity", "duration-300"], [1, "relative", "z-10", "h-full"], [3, "project"], [1, "absolute", "top-2", "left-2", "w-4", "h-4", "border-l-2", "border-t-2", "border-green-400/50", "opacity-0", "group-hover:opacity-100", "transition-opacity", "duration-300"], [1, "absolute", "top-2", "right-2", "w-4", "h-4", "border-r-2", "border-t-2", "border-green-400/50", "opacity-0", "group-hover:opacity-100", "transition-opacity", "duration-300"], [1, "absolute", "bottom-2", "left-2", "w-4", "h-4", "border-l-2", "border-b-2", "border-green-400/50", "opacity-0", "group-hover:opacity-100", "transition-opacity", "duration-300"], [1, "absolute", "bottom-2", "right-2", "w-4", "h-4", "border-r-2", "border-b-2", "border-green-400/50", "opacity-0", "group-hover:opacity-100", "transition-opacity", "duration-300"]],
    template: function ProjectsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h2", 6)(7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " PROJECTS.EXE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " >> Executing digital solutions... Building the matrix of innovation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, ProjectsComponent_button_14_Template, 2, 2, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ProjectsComponent_div_16_Template, 10, 3, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 14)(18, "div", 15)(19, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "> ./view_more_projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.filters);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.filteredProjects);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _core_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__.CardComponent],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy5jb21wb25lbnQuY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esb0tBQW9LIiwic291cmNlUm9vdCI6IiJ9 */", "@keyframes _ngcontent-%COMP%_matrixFadeIn {\n  0% {\n    opacity: 0;\n    transform: translateY(20px) scale(0.95);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n\n\n\n.group[_ngcontent-%COMP%]:hover::after {\n  content: '';\n  position: absolute;\n  top: -100%;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(180deg, transparent 0%, rgba(0, 255, 0, 0.03) 50%, transparent 100%);\n  animation: _ngcontent-%COMP%_matrixScan 3s ease-in-out;\n  pointer-events: none;\n}\n\n@keyframes _ngcontent-%COMP%_matrixScan {\n  0% {\n    top: -100%;\n  }\n  100% {\n    top: 100%;\n  }\n}"]
  });
}

/***/ }),

/***/ 7585:
/*!*******************************************************!*\
  !*** ./src/app/features/vintage/vintage.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VintageComponent: () => (/* binding */ VintageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _core_services_project_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/project.service */ 8966);
/* harmony import */ var _core_services_github_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/github.service */ 2989);
/* harmony import */ var _core_services_theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/theme.service */ 1922);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);






function VintageComponent_ng_container_60_a_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "[source code]");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const project_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", project_r4.githubLink, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function VintageComponent_ng_container_60_a_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "[live demo]");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const project_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", project_r4.liveDemo, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
const _c0 = function (a1) {
  return ["/project", a1];
};
function VintageComponent_ng_container_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, VintageComponent_ng_container_60_a_11_Template, 2, 1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, VintageComponent_ng_container_60_a_12_Template, 2, 1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "[details]");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const project_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("> ", project_r4.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("(", project_r4.releaseDate, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", project_r4.description, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Built with: ", ctx_r0.stackLabels(project_r4), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", project_r4.githubLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", project_r4.liveDemo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](7, _c0, project_r4.id));
  }
}
function VintageComponent_table_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "table")(1, "tr")(2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Metric");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "tr")(7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Public repositories");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "tr")(12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Total commits");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "tr")(17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Stars received");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "tr")(22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Followers");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.stats.repoCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.stats.totalCommits);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.stats.totalStars);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.stats.followers);
  }
}
function VintageComponent_ng_template_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Statistics temporarily unavailable. Please try again later.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
class VintageComponent {
  constructor(projectService, githubService, themeService) {
    this.projectService = projectService;
    this.githubService = githubService;
    this.themeService = themeService;
    this.projects = [];
    this.stats = null;
    this.today = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
  ngOnInit() {
    this.projectService.getProjects().subscribe(p => this.projects = p);
    this.githubService.getStats('ZahraneRabhi').subscribe(s => this.stats = s);
  }
  stackLabels(project) {
    return project.stack.map(s => s.label).join(', ');
  }
  enterTheMatrix() {
    this.themeService.set('matrix');
    window.scrollTo(0, 0);
  }
  static #_ = this.ɵfac = function VintageComponent_Factory(t) {
    return new (t || VintageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_project_service__WEBPACK_IMPORTED_MODULE_0__.ProjectService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_github_service__WEBPACK_IMPORTED_MODULE_1__.GithubService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_theme_service__WEBPACK_IMPORTED_MODULE_2__.ThemeService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: VintageComponent,
    selectors: [["app-vintage"]],
    decls: 95,
    vars: 4,
    consts: [[1, "page"], [1, "meta", "center"], [1, "linklike", 3, "click"], [1, "subtitle"], [1, "topnav"], ["href", "#about"], ["href", "#projects"], ["href", "#stats"], ["href", "#contact"], [1, "ascii-divider"], ["id", "about"], ["id", "projects"], [1, "meta"], [4, "ngFor", "ngForOf"], ["id", "stats"], [4, "ngIf", "ngIfElse"], ["noStats", ""], ["id", "contact"], ["href", "mailto:ZahraneRabhi@outlook.com"], ["href", "https://linkedin.com/in/zahranerabhi", "target", "_blank"], ["href", "https://github.com/ZahraneRabhi", "target", "_blank"], [1, "footer"], [1, "blink"], ["target", "_blank", 3, "href", 4, "ngIf"], [3, "routerLink"], ["target", "_blank", 3, "href"]],
    template: function VintageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "You are viewing the text-only edition of this site. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function VintageComponent_Template_button_click_3_listener() {
          return ctx.enterTheMatrix();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "[ Enter the Matrix ]");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "ZAHRANE RABHI");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Full Stack Developer \u00B7 Generative AI & NLP Engineer");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "[ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "ABOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "PROJECTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "STATS");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "CONTACT");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " ]");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "==========================================================");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "1. ABOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, " Greetings, visitor. I am a Full Stack Developer and Generative AI / NLP Engineer driven by curiosity and creativity. I craft digital experiences and build intelligent, data-driven solutions that bridge innovation with real-world impact. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "ul")(33, "li")(34, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Frontend:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, " Angular, TailwindCSS, TypeScript, JavaScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "li")(38, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Backend:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, " Python, C#, .NET Core");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "li")(42, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "AI & Data Science:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, " Python, PyTorch, SpaCy, Pandas, Scikit-learn");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "li")(46, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Databases:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, " SQL Server");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "li")(50, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "DevOps:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, " Docker, CI/CD, Azure, Git");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "==========================================================");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "2. PROJECTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "A directory of selected works, most recent first.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "dl");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](60, VintageComponent_ng_container_60_Template, 15, 9, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "==========================================================");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "3. GITHUB STATISTICS");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](65, VintageComponent_table_65_Template, 26, 4, "table", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](66, VintageComponent_ng_template_66_Template, 2, 0, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "==========================================================");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "h2", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "4. CONTACT");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "ul")(73, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "E-mail: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, "ZahraneRabhi@outlook.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "LinkedIn: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, "linkedin.com/in/zahranerabhi");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, "GitHub: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84, "github.com/ZahraneRabhi");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](85, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](88, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](89, " Best viewed with Netscape Navigator 4.0 at 800x600 resolution.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](90, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91, " \u00A9 2026 Zahrane Rabhi. Hand-written HTML, no cookies, no trackers.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](92, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](94, "_");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.projects);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.stats)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Last updated: ", ctx.today, "");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink],
    styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100vh;\n  background: #ffffff;\n  color: #000000;\n  font-family: \"Times New Roman\", Times, serif;\n  font-size: 17px;\n  line-height: 1.45;\n}\n\n.page[_ngcontent-%COMP%] {\n  width: min(680px, 92%);\n  margin: 0 auto;\n  padding: 24px 0 48px;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 2em;\n  text-align: center;\n  margin: 0.4em 0 0.1em;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 1.4em;\n  margin: 1.6em 0 0.4em;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: 1.1em;\n  margin: 1.2em 0 0.2em;\n}\n\na[_ngcontent-%COMP%] {\n  color: #0000ee;\n  text-decoration: underline;\n}\n\na[_ngcontent-%COMP%]:visited {\n  color: #551a8b;\n}\n\na[_ngcontent-%COMP%]:active {\n  color: #ff0000;\n}\n\nhr[_ngcontent-%COMP%] {\n  border: none;\n  border-top: 1px solid #000000;\n  margin: 1.4em 0;\n}\n\n.center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.subtitle[_ngcontent-%COMP%] {\n  text-align: center;\n  font-style: italic;\n  margin: 0 0 0.6em;\n}\n\n.topnav[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Courier New\", Courier, monospace;\n  font-size: 0.85em;\n  margin: 0.8em 0;\n}\n\n.ascii-divider[_ngcontent-%COMP%] {\n  font-family: \"Courier New\", Courier, monospace;\n  text-align: center;\n  font-size: 0.8em;\n  margin: 1.4em 0;\n  white-space: pre;\n  overflow: hidden;\n}\n\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  margin: 0.6em 0;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  border: 1px solid #000000;\n  padding: 4px 12px;\n  text-align: left;\n  font-size: 0.95em;\n}\n\nth[_ngcontent-%COMP%] {\n  background: #c0c0c0;\n}\n\nul[_ngcontent-%COMP%] {\n  margin: 0.3em 0;\n}\n\ndt[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-top: 0.9em;\n}\n\ndd[_ngcontent-%COMP%] {\n  margin: 0.1em 0 0.4em 1.6em;\n}\n\n.meta[_ngcontent-%COMP%] {\n  font-size: 0.85em;\n  color: #333333;\n}\n\n.footer[_ngcontent-%COMP%] {\n  font-size: 0.85em;\n  text-align: center;\n  color: #333333;\n}\n\n.blink[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_blink 1s steps(1) infinite;\n}\n\n@keyframes _ngcontent-%COMP%_blink {\n  50% { opacity: 0; }\n}\n\nbutton.linklike[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0;\n  font: inherit;\n  color: #0000ee;\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpbnRhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtRUFBbUU7QUFDbkU7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsNENBQTRDO0VBQzVDLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiw4Q0FBOEM7RUFDOUMsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw4Q0FBOEM7RUFDOUMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLE1BQU0sVUFBVSxFQUFFO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixVQUFVO0VBQ1YsYUFBYTtFQUNiLGNBQWM7RUFDZCwwQkFBMEI7RUFDMUIsZUFBZTtBQUNqQiIsImZpbGUiOiJ2aW50YWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBXZWIgMS4wIOKAlCBubyBmcmFtZXdvcmtzIHdlcmUgaGFybWVkIGluIHRoZSBtYWtpbmcgb2YgdGhpcyBwYWdlICovXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDU7XG59XG5cbi5wYWdlIHtcbiAgd2lkdGg6IG1pbig2ODBweCwgOTIlKTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDI0cHggMCA0OHB4O1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMC40ZW0gMCAwLjFlbTtcbn1cblxuaDIge1xuICBmb250LXNpemU6IDEuNGVtO1xuICBtYXJnaW46IDEuNmVtIDAgMC40ZW07XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgbWFyZ2luOiAxLjJlbSAwIDAuMmVtO1xufVxuXG5hIHtcbiAgY29sb3I6ICMwMDAwZWU7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG5hOnZpc2l0ZWQge1xuICBjb2xvcjogIzU1MWE4Yjtcbn1cblxuYTphY3RpdmUge1xuICBjb2xvcjogI2ZmMDAwMDtcbn1cblxuaHIge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDAwMDAwO1xuICBtYXJnaW46IDEuNGVtIDA7XG59XG5cbi5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zdWJ0aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBtYXJnaW46IDAgMCAwLjZlbTtcbn1cblxuLnRvcG5hdiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDAuODVlbTtcbiAgbWFyZ2luOiAwLjhlbSAwO1xufVxuXG4uYXNjaWktZGl2aWRlciB7XG4gIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDAuOGVtO1xuICBtYXJnaW46IDEuNGVtIDA7XG4gIHdoaXRlLXNwYWNlOiBwcmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgbWFyZ2luOiAwLjZlbSAwO1xufVxuXG50aCwgdGQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xuICBwYWRkaW5nOiA0cHggMTJweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAwLjk1ZW07XG59XG5cbnRoIHtcbiAgYmFja2dyb3VuZDogI2MwYzBjMDtcbn1cblxudWwge1xuICBtYXJnaW46IDAuM2VtIDA7XG59XG5cbmR0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDAuOWVtO1xufVxuXG5kZCB7XG4gIG1hcmdpbjogMC4xZW0gMCAwLjRlbSAxLjZlbTtcbn1cblxuLm1ldGEge1xuICBmb250LXNpemU6IDAuODVlbTtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG5cbi5mb290ZXIge1xuICBmb250LXNpemU6IDAuODVlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzMzMzMzMztcbn1cblxuLmJsaW5rIHtcbiAgYW5pbWF0aW9uOiBibGluayAxcyBzdGVwcygxKSBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBibGluayB7XG4gIDUwJSB7IG9wYWNpdHk6IDA7IH1cbn1cblxuYnV0dG9uLmxpbmtsaWtlIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBmb250OiBpbmhlcml0O1xuICBjb2xvcjogIzAwMDBlZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvdmludGFnZS92aW50YWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUVBQW1FO0FBQ25FO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLDRDQUE0QztFQUM1QyxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztFQUNkLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsOENBQThDO0VBQzlDLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsOENBQThDO0VBQzlDLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxNQUFNLFVBQVUsRUFBRTtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osVUFBVTtFQUNWLGFBQWE7RUFDYixjQUFjO0VBQ2QsMEJBQTBCO0VBQzFCLGVBQWU7QUFDakI7O0FBRUEsZ25JQUFnbkkiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBXZWIgMS4wIMOiwoDClCBubyBmcmFtZXdvcmtzIHdlcmUgaGFybWVkIGluIHRoZSBtYWtpbmcgb2YgdGhpcyBwYWdlICovXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDU7XG59XG5cbi5wYWdlIHtcbiAgd2lkdGg6IG1pbig2ODBweCwgOTIlKTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDI0cHggMCA0OHB4O1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMC40ZW0gMCAwLjFlbTtcbn1cblxuaDIge1xuICBmb250LXNpemU6IDEuNGVtO1xuICBtYXJnaW46IDEuNmVtIDAgMC40ZW07XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgbWFyZ2luOiAxLjJlbSAwIDAuMmVtO1xufVxuXG5hIHtcbiAgY29sb3I6ICMwMDAwZWU7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG5hOnZpc2l0ZWQge1xuICBjb2xvcjogIzU1MWE4Yjtcbn1cblxuYTphY3RpdmUge1xuICBjb2xvcjogI2ZmMDAwMDtcbn1cblxuaHIge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDAwMDAwO1xuICBtYXJnaW46IDEuNGVtIDA7XG59XG5cbi5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zdWJ0aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBtYXJnaW46IDAgMCAwLjZlbTtcbn1cblxuLnRvcG5hdiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDAuODVlbTtcbiAgbWFyZ2luOiAwLjhlbSAwO1xufVxuXG4uYXNjaWktZGl2aWRlciB7XG4gIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDAuOGVtO1xuICBtYXJnaW46IDEuNGVtIDA7XG4gIHdoaXRlLXNwYWNlOiBwcmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgbWFyZ2luOiAwLjZlbSAwO1xufVxuXG50aCwgdGQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xuICBwYWRkaW5nOiA0cHggMTJweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAwLjk1ZW07XG59XG5cbnRoIHtcbiAgYmFja2dyb3VuZDogI2MwYzBjMDtcbn1cblxudWwge1xuICBtYXJnaW46IDAuM2VtIDA7XG59XG5cbmR0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDAuOWVtO1xufVxuXG5kZCB7XG4gIG1hcmdpbjogMC4xZW0gMCAwLjRlbSAxLjZlbTtcbn1cblxuLm1ldGEge1xuICBmb250LXNpemU6IDAuODVlbTtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG5cbi5mb290ZXIge1xuICBmb250LXNpemU6IDAuODVlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzMzMzMzMztcbn1cblxuLmJsaW5rIHtcbiAgYW5pbWF0aW9uOiBibGluayAxcyBzdGVwcygxKSBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBibGluayB7XG4gIDUwJSB7IG9wYWNpdHk6IDA7IH1cbn1cblxuYnV0dG9uLmxpbmtsaWtlIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBmb250OiBpbmhlcml0O1xuICBjb2xvcjogIzAwMDBlZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map