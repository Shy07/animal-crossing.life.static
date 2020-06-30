webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/index.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_language__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/language */ "./src/components/language/index.jsx");
/* harmony import */ var _components_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/global */ "./src/components/global.jsx");
/* harmony import */ var _components_GA__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/GA */ "./src/components/GA.jsx");
/* harmony import */ var _components_Desktop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Desktop */ "./src/components/Desktop.jsx");
/* harmony import */ var _components_AIR__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/AIR */ "./src/components/AIR/index.jsx");
/* harmony import */ var _components_Album__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Album */ "./src/components/Album/index.jsx");
/* harmony import */ var _components_SetLanguage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/SetLanguage */ "./src/components/SetLanguage.jsx");
/* harmony import */ var _components_TPP__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/TPP */ "./src/components/TPP/index.jsx");
/* harmony import */ var _components_HID__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/HID */ "./src/components/HID/index.jsx");
/* harmony import */ var _components_Music__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Music */ "./src/components/Music/index.jsx");
/* harmony import */ var _components_WIS__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/WIS */ "./src/components/WIS/index.jsx");
/* harmony import */ var _components_GAM__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/GAM */ "./src/components/GAM/index.jsx");
/* harmony import */ var _components_Feedback__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Feedback */ "./src/components/Feedback/index.jsx");
/* harmony import */ var _components_Readme__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Readme */ "./src/components/Readme/index.jsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


















var Index = function Index(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    language: _components_language__WEBPACK_IMPORTED_MODULE_3__["defaultLanguage"]
  }),
      language = _useState[0].language,
      setLanguage = _useState[1];

  var changeLanguage = function changeLanguage(language) {
    return setLanguage({
      language: language
    });
  };

  var appId = props.appId,
      appParams = props.appParams,
      gaId = props.gaId;
  return __jsx(_components_language__WEBPACK_IMPORTED_MODULE_3__["LanguageProvider"], {
    value: {
      language: language,
      changeLanguage: changeLanguage
    }
  }, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_1__["NextSeo"], {
    title: language('My Animal Crossing Life'),
    description: "A group of WebApps for Animal Crossing."
  }), __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("link", {
    rel: "shortcut icon",
    href: "/favicon.png"
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  })), __jsx(_components_global__WEBPACK_IMPORTED_MODULE_4__["GlobalProvider"], {
    value: {
      appId: appId,
      appParams: appParams,
      gaId: gaId
    }
  }, __jsx(_components_GA__WEBPACK_IMPORTED_MODULE_5__["default"], {
    gid: gaId,
    aid: 'index'
  }), __jsx(_components_Desktop__WEBPACK_IMPORTED_MODULE_6__["default"], null, __jsx(_components_HID__WEBPACK_IMPORTED_MODULE_11__["default"], null), __jsx(_components_TPP__WEBPACK_IMPORTED_MODULE_10__["default"], null), __jsx(_components_GAM__WEBPACK_IMPORTED_MODULE_14__["default"], null), __jsx(_components_WIS__WEBPACK_IMPORTED_MODULE_13__["default"], null), __jsx(_components_SetLanguage__WEBPACK_IMPORTED_MODULE_9__["default"], null), __jsx("div", null), __jsx("div", null), __jsx("div", null))));
};

Index.getInitialProps = function (_ref) {
  var query = _ref.query;
  return query;
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.6128a57cd06f5bc231f3.hot-update.js.map