(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./src/components/HID/app.jsx":
/*!************************************!*\
  !*** ./src/components/HID/app.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _GA__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../GA */ "./src/components/GA.jsx");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global */ "./src/components/global.jsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var App = function App(props) {
  var _useGlobal = Object(_global__WEBPACK_IMPORTED_MODULE_2__["useGlobal"])(),
      _g = _useGlobal._g;

  var gaId = _g.gaId;
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      loaded = _useState[0],
      setLoaded = _useState[1];

  var setLoading = props.setLoading,
      _appID = props._appID;

  var onLoad = function onLoad() {
    setLoading(false);
    setLoaded(true);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setLoading(true);
  }, []);
  return __jsx("div", {
    className: "tpp-app-container"
  }, __jsx(_GA__WEBPACK_IMPORTED_MODULE_1__["default"], {
    gid: gaId,
    aid: _appID
  }), __jsx("iframe", {
    ref: ref,
    style: {
      opacity: ~~loaded
    },
    src: "https://eugeneration.github.io/HappyIslandDesigner/",
    onLoad: onLoad
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

}]);
//# sourceMappingURL=8.js.map