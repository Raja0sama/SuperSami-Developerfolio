webpackHotUpdate("static\\development\\pages\\Portfolio\\[website].js",{

/***/ "./pages/Portfolio/[website].js":
/*!**************************************!*\
  !*** ./pages/Portfolio/[website].js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return About; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _static1_bootstrap_css_bootstrap_min_css_h_e1729d32bd788d29d221ff129051e58a__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../static1/bootstrap/css/bootstrap.min.css?h=e1729d32bd788d29d221ff129051e58a */ "./static1/bootstrap/css/bootstrap.min.css?h=e1729d32bd788d29d221ff129051e58a");
/* harmony import */ var _static1_bootstrap_css_bootstrap_min_css_h_e1729d32bd788d29d221ff129051e58a__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_static1_bootstrap_css_bootstrap_min_css_h_e1729d32bd788d29d221ff129051e58a__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _static1_css_styles_min_css_h_2352637b27a8730bfe180c97baf4cf5c__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../static1/css/styles.min.css?h=2352637b27a8730bfe180c97baf4cf5c */ "./static1/css/styles.min.css?h=2352637b27a8730bfe180c97baf4cf5c");
/* harmony import */ var _static1_css_styles_min_css_h_2352637b27a8730bfe180c97baf4cf5c__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_static1_css_styles_min_css_h_2352637b27a8730bfe180c97baf4cf5c__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _component_header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../component/header */ "./component/header.js");
/* harmony import */ var _component_footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../component/footer */ "./component/footer.js");
/* harmony import */ var _component_Portfolio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../component/Portfolio */ "./component/Portfolio.js");
/* harmony import */ var _profile_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../profile.json */ "./profile.json");
var _profile_json__WEBPACK_IMPORTED_MODULE_14___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../profile.json */ "./profile.json", 1);







var _jsxFileName = "E:\\Development Enviroment\\React Js\\Portfolio\\Portfolio\\pages\\Portfolio\\[website].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;









var About =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(About, _React$Component);

  function About(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, About);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(About).call(this, props));
    _this.state = {
      Query: [],
      data: {}
    };

    if (_this.props.name == 'websites') {
      _this.data('website');
    } else if (_this.props.name == 'mobileApps') {
      _this.data('mobileapp');
    }

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(About, [{
    key: "check",
    value: function check(web) {
      if (web == 'websites' || web == 'Websites') {
        return {
          name: 'Website',
          desc: 'Webiste that i have created so far',
          data: _profile_json__WEBPACK_IMPORTED_MODULE_14__.work.list.website
        };
      } else if (web == 'mobileApps' || web == 'Apps') {
        return {
          name: 'Native Mobile Apps',
          desc: 'Android So far That i am allowed to list',
          data: _profile_json__WEBPACK_IMPORTED_MODULE_14__.work.list.mobileapp
        };
      }
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, __jsx("section", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, __jsx("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "Portfolio"), __jsx("link", {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }), __jsx("link", {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Cabin:700",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }), __jsx("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }), __jsx("link", {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Montserrat",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }), __jsx("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }), __jsx("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.8.2/css/lightbox.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      })), __jsx(_component_header__WEBPACK_IMPORTED_MODULE_11__["default"], {
        data: _profile_json__WEBPACK_IMPORTED_MODULE_14__.name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }), __jsx(_component_Portfolio__WEBPACK_IMPORTED_MODULE_13__["default"], {
        data: this.check(this.props.website),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }), __jsx(_component_footer__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var query, website;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query;
                // pid = 'hello-nextjs'
                website = query.website; // const postContent = await fetch(
                //   `https://api.example.com/post/${encodeURIComponent(pid)}`
                // ).then(r => r.text())

                return _context.abrupt("return", {
                  website: website
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return About;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);



/***/ })

})
//# sourceMappingURL=[website].js.a248785c6fab337694ab.hot-update.js.map