"use strict";
(self["webpackChunkangular_tailwind"] = self["webpackChunkangular_tailwind"] || []).push([["src_app_features_project-details_project-details_module_ts"],{

/***/ 3172:
/*!***********************************************************************!*\
  !*** ./src/app/features/project-details/project-details.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectDetailsComponent: () => (/* binding */ ProjectDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _core_services_project_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/project.service */ 8966);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);




function ProjectDetailsComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7)(1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Loading project data...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ProjectDetailsComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7)(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Error: Project not found");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectDetailsComponent_div_6_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "> return.to.main()");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
}
function ProjectDetailsComponent_div_7_span_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cat_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", cat_r11, " ");
  }
}
function ProjectDetailsComponent_div_7_button_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectDetailsComponent_div_7_button_43_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r12.openLink(ctx_r12.project.githubLink));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "path", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "> view.source");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function ProjectDetailsComponent_div_7_button_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectDetailsComponent_div_7_button_44_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r14.openLink(ctx_r14.project.liveDemo));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "path", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "> live.demo()");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function ProjectDetailsComponent_div_7_div_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const tech_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", tech_r16.icon, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", tech_r16.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tech_r16.label);
  }
}
function ProjectDetailsComponent_div_7_div_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 63)(1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const feature_r17 = ctx.$implicit;
    const i_r18 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", i_r18 + 1, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](feature_r17);
  }
}
function ProjectDetailsComponent_div_7_div_68_img_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 70);
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r19.currentScreenshot, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function ProjectDetailsComponent_div_7_div_68_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 71)(1, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectDetailsComponent_div_7_div_68_div_8_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r21.goToPreviousScreenshot());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "svg", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "path", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectDetailsComponent_div_7_div_68_div_8_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r23.goToNextScreenshot());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "svg", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "path", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
}
function ProjectDetailsComponent_div_7_div_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 65)(1, "h2", 45)(2, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "//");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Screenshots ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 66)(6, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ProjectDetailsComponent_div_7_div_68_img_7_Template, 1, 1, "img", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ProjectDetailsComponent_div_7_div_68_div_8_Template, 7, 0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.currentScreenshot);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.hasMultipleScreenshots);
  }
}
function ProjectDetailsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12)(1, "nav", 13)(2, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "home");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectDetailsComponent_div_7_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r24.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "projects");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "div", 19)(14, "div", 20)(15, "div", 21)(16, "div", 22)(17, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 24)(19, "div", 25)(20, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "div", 27)(22, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 29)(24, "h1", 30)(25, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, ">");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 32)(29, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 34)(32, "div", 35)(33, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "// Category:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, ProjectDetailsComponent_div_7_span_36_Template, 2, 1, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 39)(38, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "// Release date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, ProjectDetailsComponent_div_7_button_43_Template, 5, 0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, ProjectDetailsComponent_div_7_button_44_Template, 5, 0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 44)(46, "h2", 45)(47, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "//");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, " Tech Stack ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, ProjectDetailsComponent_div_7_div_51_Template, 4, 3, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 44)(53, "h2", 45)(54, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "//");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, " Features ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 49)(58, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, ProjectDetailsComponent_div_7_div_59_Template, 5, 2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 44)(61, "h2", 45)(62, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "//");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, " Project Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 52)(66, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](68, ProjectDetailsComponent_div_7_div_68_Template, 9, 2, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.project.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r2.project.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx_r2.project.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.project.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.project.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.project.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.project.releaseDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.project.githubLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.project.liveDemo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.project.stack);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.project.features);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.project.longDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.hasScreenshots);
  }
}
class ProjectDetailsComponent {
  constructor(route, router, projectService) {
    this.route = route;
    this.router = router;
    this.projectService = projectService;
    this.activeScreenshotIndex = 0;
    this.loading = true;
    this.error = false;
  }
  get hasScreenshots() {
    return !!this.project?.screenshots?.length;
  }
  get hasMultipleScreenshots() {
    return (this.project?.screenshots?.length ?? 0) > 1;
  }
  get currentScreenshot() {
    return this.project?.screenshots?.[this.activeScreenshotIndex];
  }
  ngOnInit() {
    const projectId = this.route.snapshot.paramMap.get('id');
    if (projectId) {
      this.projectService.getProjectById(projectId).subscribe(project => {
        if (project) {
          this.project = project;
          this.loading = false;
        } else {
          this.error = true;
          this.loading = false;
        }
      }, () => {
        this.error = true;
        this.loading = false;
      });
    } else {
      this.error = true;
      this.loading = false;
    }
  }
  onKeydown(event) {
    if (!this.hasMultipleScreenshots) return;
    if (event.key === 'ArrowLeft') this.goToPreviousScreenshot();
    if (event.key === 'ArrowRight') this.goToNextScreenshot();
  }
  goBack() {
    this.router.navigate(['/']);
  }
  openLink(url) {
    window.open(url, '_blank');
  }
  goToPreviousScreenshot() {
    if (this.project && this.activeScreenshotIndex > 0) {
      this.activeScreenshotIndex--;
    }
  }
  goToNextScreenshot() {
    if (this.project && this.project.screenshots && this.activeScreenshotIndex < this.project.screenshots.length - 1) {
      this.activeScreenshotIndex++;
    }
  }
  static #_ = this.ɵfac = function ProjectDetailsComponent_Factory(t) {
    return new (t || ProjectDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_project_service__WEBPACK_IMPORTED_MODULE_0__.ProjectService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ProjectDetailsComponent,
    selectors: [["app-project-details"]],
    hostBindings: function ProjectDetailsComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function ProjectDetailsComponent_keydown_HostBindingHandler($event) {
          return ctx.onKeydown($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"]);
      }
    },
    decls: 8,
    vars: 3,
    consts: [[1, "relative", "min-h-screen", "bg-black", "py-20", "px-6", "overflow-hidden"], [1, "absolute", "inset-0"], [1, "absolute", "inset-0", "bg-gradient-to-b", "from-green-900/5", "via-black", "to-green-900/5"], [1, "absolute", "inset-0", 2, "background-image", "radial-gradient(circle at 25% 25%, #00ff0010 0%, transparent 50%), radial-gradient(circle at 75% 75%, #00ff0008 0%, transparent 50%)"], [1, "relative", "max-w-7xl", "mx-auto"], ["class", "flex flex-col items-center justify-center h-96", 4, "ngIf"], ["class", "animate-fadeIn", 4, "ngIf"], [1, "flex", "flex-col", "items-center", "justify-center", "h-96"], [1, "text-green-400", "text-2xl", "font-mono", "animate-pulse", "mb-4"], [1, "w-16", "h-16", "border-4", "border-green-400", "border-t-transparent", "rounded-full", "animate-spin"], [1, "text-red-500", "text-2xl", "font-mono", "mb-4"], [1, "flex", "items-center", "gap-2", "px-6", "py-3", "bg-black", "border", "border-green-500/30", "text-green-400", "font-mono", "text-lg", "rounded", "hover:bg-green-500/10", "hover:border-green-400/60", "transition-all", "duration-300", 3, "click"], [1, "animate-fadeIn"], [1, "mb-8", "flex", "items-center", "gap-2", "font-mono", "text-sm"], ["routerLink", "/", 1, "text-green-500/50", "hover:text-green-400", "transition-colors", "duration-200"], [1, "text-green-500/30"], [1, "text-green-500/50", "hover:text-green-400", "transition-colors", "duration-200", 3, "click"], [1, "text-green-400"], [1, "bg-black/80", "border", "border-green-500/30", "rounded-lg", "p-8", "mb-8", "backdrop-blur-sm", "shadow-2xl", "relative", "overflow-hidden"], [1, "absolute", "top-2", "left-2", "w-6", "h-6", "border-l-2", "border-t-2", "border-green-400/50"], [1, "absolute", "top-2", "right-2", "w-6", "h-6", "border-r-2", "border-t-2", "border-green-400/50"], [1, "absolute", "bottom-2", "left-2", "w-6", "h-6", "border-l-2", "border-b-2", "border-green-400/50"], [1, "absolute", "bottom-2", "right-2", "w-6", "h-6", "border-r-2", "border-b-2", "border-green-400/50"], [1, "absolute", "top-0", "left-0", "w-full", "h-0.5", "bg-gradient-to-r", "from-transparent", "via-green-400", "to-transparent", "animate-pulse"], [1, "flex", "flex-col", "md:flex-row", "gap-8"], [1, "md:w-1/3"], [1, "relative", "rounded-lg", "overflow-hidden", "border", "border-green-500/30"], [1, "absolute", "inset-0", "z-10", "bg-gradient-to-b", "from-transparent", "to-black/60"], [1, "w-full", "h-full", "object-cover", 3, "src", "alt"], [1, "md:w-2/3"], [1, "text-4xl", "md:text-5xl", "font-bold", "text-green-400", "mb-4", "font-mono", "tracking-wider"], [1, "inline-block", "animate-pulse"], [1, "mb-6"], [1, "text-green-300/80", "text-lg", "leading-relaxed", "font-mono"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-4", "mb-6"], [1, "flex", "items-start", "gap-2"], [1, "text-green-500/70", "font-mono", "text-sm", "mt-1"], [1, "flex", "flex-wrap", "gap-2"], ["class", "inline-flex items-center px-2 py-1 bg-green-500/10 border border-green-500/30 rounded text-green-400 font-mono text-xs hover:bg-green-500/20 transition-colors duration-300", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "gap-2"], [1, "text-green-500/70", "font-mono", "text-sm"], [1, "text-green-400", "font-mono"], [1, "flex", "flex-wrap", "gap-4"], ["class", "flex items-center gap-2 px-4 py-2 bg-black border border-green-500/30 text-green-400 font-mono text-sm rounded hover:bg-green-500/10 hover:border-green-400/60 transition-all duration-300", 3, "click", 4, "ngIf"], [1, "bg-black/80", "border", "border-green-500/30", "rounded-lg", "p-8", "mb-8", "backdrop-blur-sm", "shadow-2xl", "relative"], [1, "text-2xl", "font-bold", "text-green-400", "mb-6", "font-mono"], [1, "text-green-500/70"], [1, "grid", "grid-cols-2", "sm:grid-cols-3", "md:grid-cols-4", "lg:grid-cols-6", "gap-6"], ["class", "group bg-black/60 border border-green-500/30 rounded-lg p-4 flex flex-col items-center justify-center hover:border-green-400/60 transition-all duration-300", 4, "ngFor", "ngForOf"], [1, "border-l-2", "border-green-500/50", "pl-6"], [1, "space-y-4"], ["class", "flex items-baseline gap-3", 4, "ngFor", "ngForOf"], [1, "text-green-300/80", "font-mono", "leading-relaxed", "space-y-4"], ["class", "bg-black/80 border border-green-500/30 rounded-lg p-8 backdrop-blur-sm shadow-2xl relative", 4, "ngIf"], [1, "inline-flex", "items-center", "px-2", "py-1", "bg-green-500/10", "border", "border-green-500/30", "rounded", "text-green-400", "font-mono", "text-xs", "hover:bg-green-500/20", "transition-colors", "duration-300"], [1, "flex", "items-center", "gap-2", "px-4", "py-2", "bg-black", "border", "border-green-500/30", "text-green-400", "font-mono", "text-sm", "rounded", "hover:bg-green-500/10", "hover:border-green-400/60", "transition-all", "duration-300", 3, "click"], ["fill", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["d", "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M14 5l7 7m0 0l-7 7m7-7H3"], [1, "group", "bg-black/60", "border", "border-green-500/30", "rounded-lg", "p-4", "flex", "flex-col", "items-center", "justify-center", "hover:border-green-400/60", "transition-all", "duration-300"], [1, "w-12", "h-12", "mb-3", "group-hover:scale-110", "transition-transform", "duration-300", 3, "src", "alt"], [1, "text-green-400", "font-mono", "text-sm"], [1, "flex", "items-baseline", "gap-3"], [1, "text-green-300/80", "font-mono"], [1, "bg-black/80", "border", "border-green-500/30", "rounded-lg", "p-8", "backdrop-blur-sm", "shadow-2xl", "relative"], [1, "relative"], [1, "w-full", "h-80", "md:h-96", "lg:h-[30rem]", "border", "border-green-500/30", "rounded-lg", "overflow-hidden"], ["alt", "Project screenshot", "class", "w-full h-full object-contain", 3, "src", 4, "ngIf"], ["class", "absolute top-0 bottom-0 left-0 right-0 flex items-center justify-between pointer-events-none", 4, "ngIf"], ["alt", "Project screenshot", 1, "w-full", "h-full", "object-contain", 3, "src"], [1, "absolute", "top-0", "bottom-0", "left-0", "right-0", "flex", "items-center", "justify-between", "pointer-events-none"], [1, "pointer-events-auto", "w-10", "h-10", "rounded-full", "bg-black/50", "border", "border-green-500/30", "text-green-400", "flex", "items-center", "justify-center", "hover:bg-green-500/10", "transition-all", "duration-300", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 19l-7-7 7-7"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5l7 7-7 7"]],
    template: function ProjectDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ProjectDetailsComponent_div_5_Template, 4, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ProjectDetailsComponent_div_6_Template, 6, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ProjectDetailsComponent_div_7_Template, 69, 13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.error && ctx.project);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
    styles: ["\n\n\n.animate-fadeIn[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.8s ease-out;\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  0% {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n\n\n.matrix-scan[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, transparent, rgba(0, 255, 0, 0.2), transparent);\n  animation: _ngcontent-%COMP%_scan 2s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_scan {\n  0% {\n    transform: translateX(-100%);\n  }\n  100% {\n    transform: translateX(100%);\n  }\n}\n\n\n\n.tech-icon[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n}\n\n.tech-icon[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1) rotate(5deg);\n  filter: brightness(1.2);\n}\n\n\n\n.custom-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n\n.custom-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: rgba(0, 0, 0, 0.3);\n}\n\n.custom-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(0, 255, 0, 0.3);\n  border-radius: 4px;\n}\n\n.custom-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: rgba(0, 255, 0, 0.5);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFxQzs7QUFFckM7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDViwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLFVBQVU7SUFDVix3QkFBd0I7RUFDMUI7QUFDRjs7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRSxrRkFBa0Y7RUFDbEYsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0U7SUFDRSw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLDJCQUEyQjtFQUM3QjtBQUNGOztBQUVBLHVDQUF1QztBQUN2QztFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyx1QkFBdUI7QUFDekI7O0FBRUEsdUNBQXVDO0FBQ3ZDO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQyIsImZpbGUiOiJwcm9qZWN0LWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFByb2plY3QgRGV0YWlscyBDb21wb25lbnQgU3R5bGVzICovXG5cbi5hbmltYXRlLWZhZGVJbiB7XG4gIGFuaW1hdGlvbjogZmFkZUluIDAuOHMgZWFzZS1vdXQ7XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5cbi8qIE1hdHJpeCBzY2FubmluZyBlZmZlY3QgKi9cbi5tYXRyaXgtc2NhbiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdHJhbnNwYXJlbnQsIHJnYmEoMCwgMjU1LCAwLCAwLjIpLCB0cmFuc3BhcmVudCk7XG4gIGFuaW1hdGlvbjogc2NhbiAycyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgc2NhbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgfVxufVxuXG4vKiBIb3ZlciBlZmZlY3RzIGZvciB0ZWNoIHN0YWNrIGljb25zICovXG4udGVjaC1pY29uIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuLnRlY2gtaWNvbjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoNWRlZyk7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xufVxuXG4vKiBDdXN0b20gc2Nyb2xsYmFyIGZvciBjb250ZW50IGFyZWFzICovXG4uY3VzdG9tLXNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogOHB4O1xufVxuXG4uY3VzdG9tLXNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbi5jdXN0b20tc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMjU1LCAwLCAwLjMpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5jdXN0b20tc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMjU1LCAwLCAwLjUpO1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcHJvamVjdC1kZXRhaWxzL3Byb2plY3QtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFxQzs7QUFFckM7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDViwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLFVBQVU7SUFDVix3QkFBd0I7RUFDMUI7QUFDRjs7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRSxrRkFBa0Y7RUFDbEYsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0U7SUFDRSw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLDJCQUEyQjtFQUM3QjtBQUNGOztBQUVBLHVDQUF1QztBQUN2QztFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyx1QkFBdUI7QUFDekI7O0FBRUEsdUNBQXVDO0FBQ3ZDO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQSx3dUVBQXd1RSIsInNvdXJjZXNDb250ZW50IjpbIi8qIFByb2plY3QgRGV0YWlscyBDb21wb25lbnQgU3R5bGVzICovXG5cbi5hbmltYXRlLWZhZGVJbiB7XG4gIGFuaW1hdGlvbjogZmFkZUluIDAuOHMgZWFzZS1vdXQ7XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5cbi8qIE1hdHJpeCBzY2FubmluZyBlZmZlY3QgKi9cbi5tYXRyaXgtc2NhbiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdHJhbnNwYXJlbnQsIHJnYmEoMCwgMjU1LCAwLCAwLjIpLCB0cmFuc3BhcmVudCk7XG4gIGFuaW1hdGlvbjogc2NhbiAycyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgc2NhbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgfVxufVxuXG4vKiBIb3ZlciBlZmZlY3RzIGZvciB0ZWNoIHN0YWNrIGljb25zICovXG4udGVjaC1pY29uIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuLnRlY2gtaWNvbjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoNWRlZyk7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xufVxuXG4vKiBDdXN0b20gc2Nyb2xsYmFyIGZvciBjb250ZW50IGFyZWFzICovXG4uY3VzdG9tLXNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogOHB4O1xufVxuXG4uY3VzdG9tLXNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbi5jdXN0b20tc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMjU1LCAwLCAwLjMpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5jdXN0b20tc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMjU1LCAwLCAwLjUpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4701:
/*!********************************************************************!*\
  !*** ./src/app/features/project-details/project-details.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectDetailsModule: () => (/* binding */ ProjectDetailsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _project_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-details.component */ 3172);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);





const routes = [{
  path: '',
  component: _project_details_component__WEBPACK_IMPORTED_MODULE_0__.ProjectDetailsComponent
}];
class ProjectDetailsModule {
  static #_ = this.ɵfac = function ProjectDetailsModule_Factory(t) {
    return new (t || ProjectDetailsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: ProjectDetailsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProjectDetailsModule, {
    declarations: [_project_details_component__WEBPACK_IMPORTED_MODULE_0__.ProjectDetailsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_features_project-details_project-details_module_ts.js.map