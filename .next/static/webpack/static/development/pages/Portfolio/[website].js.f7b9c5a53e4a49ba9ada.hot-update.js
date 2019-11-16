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
    value: function check() {
      if (this.props.name == 'websites') {
        return {
          name: 'Website',
          desc: 'Webiste that i have created so far',
          data: this.state.Query
        };
      } else if (this.props.name == 'mobileApps') {
        return {
          name: 'Native Mobile Apps',
          desc: 'Android So far That i am allowed to list',
          data: this.state.Query
        };
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.name == 'websites') {} else if (this.props.name == 'mobileApps') {}

      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      });
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



/***/ }),

/***/ "./profile.json":
/*!**********************!*\
  !*** ./profile.json ***!
  \**********************/
/*! exports provided: resume, name, h1, headline, descrption, high1, high2, skill, work, medium, github, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"resume\":\"https://super-sami.com/Cv\",\"name\":[\"Raja\",\"Osama\"],\"h1\":\"Creative\",\"headline\":\"JAVASCRIPT SOFTWARE DEVELOPER\",\"descrption\":\"Self motivate, Self-taught, Problem Solver and Critical Thinking, are a few keywords that describe me. I am already a successful person because of my abilities to adapt things in software development are marvelous and because of those qualities, I can work with multiple technologies at the same time. I am greatly inspired by mark Zuckerberg and bill gates.\",\"high1\":{\"title\":[\"SUPER\",\"TAlly\"],\"desc\":\"Super Tally is a Great Front End That can help people to intract with tally as per their needs ! Try it Now.\",\"data\":[\"🟢 An Open Source Free to use Project and ACTIVE\",\"🔴 CREATED WITH NEXT.JS, React.js Framework!\",\"🔴 Server SIDED FLASK PYTHON END POINT\",\"🔴 BOOTSTRAP UI Framework\"],\"img\":\"static/img/Supertally.PNG\",\"button\":[\"Learn More\",\"https://google.com/\"]},\"high2\":{\"title\":[\"SUPER\",\"NETFLIX\"],\"desc\":\"Haiflix was designed for client who want to stream videos on their app subscription based\",\"data\":[\"🟢 An Open Source Free to use Project and ACTIVE\",\"🔴 CREATED WITH NEXT.JS, React.js Framework!\",\"🔴 Server SIDED FLASK PYTHON END POINT\",\"🔴 BOOTSTRAP UI Framework\"],\"img\":\"static/img/Supertally.PNG\",\"button\":[\"Learn More\",\"https://google.com/\"]},\"skill\":{\"h1\":\"Skills\",\"p\":\"All the stack that I have worked until now and have expertise.\",\"list\":[{\"desc\":\"My Php experience is based on Core PHP, I have plenty of PHP experience from making small apps to large cms, I have worked with Laravel as well but because I had no interest in larval i prefer not to continue with that framework.\",\"title\":\"PHP DEVELOPER\",\"url\":\"https://github.com/dksami/Accounting-System\"},{\"desc\":\"I have been working with React.js for almost one and a half year and I have been enjoying the library itself. I have worked with Next.js and as this website is also being created with the same framework. I have experience with Redux, React Navigation, Axios, GraphQL with React. \",\"title\":\"REACT JS\",\"url\":\"https://github.com/dksami/Tally-Interface\"},{\"url\":\"https://python-django-git-master.dksami.now.sh/\",\"desc\":\"I just started working with Django, For me, Django seems to be the best framework for quick development as python is also simple and so do Django.\",\"title\":\"Django\"},{\"desc\":\"with over 2 years of Android development experience in a company. And can develop any android application via java. Also, have won a trophy in a solo vs squad competition in my institute\",\"title\":\"JAVA DEVELOPER\",\"url\":\"https://github.com/dksami/Tracker-APP\"},{\"desc\":\"Proud Pro C# developer can develop any desktop application via C# with over 2 years of nonprofessional and 2 years of professional experience in C# development.\",\"title\":\"C# DEVELOPER\"},{\"desc\":\"NODE.js is love and is my choice for backend Development, I have plenty of experience in Node.js from making simple API to work with Data scrapping, data flow, and data management from node.js to server. I also have experience with GRAPHQL as well. \",\"title\":\"Node.js\",\"url\":\"https://github.com/dksami/Attendence\"},{\"desc\":\"My Choice for making cross-platform App in react native, I have been working with react native since 2017 and almost have 2 years of professional as well as Freelance and practice experience of React Native. React native make things so simple for a developer who wants to work Efficient, I have experience with Navigation, Redux, Context Api, Hooks and Axios as well as a camera module. \",\"title\":\"REACT NATIVE\",\"url\":\"https://github.com/dksami/WooShop\"},{\"desc\":\"Asp is kind of outdated in 2019 because people have switched to other languages like Javascript and PHP for Development purposes. I have started learning asp.net this December 2018. so I have not a lot but still worthy of mentioning experience in asp.net.\",\"title\":\"ASP .NET DEVELOPER\",\"url\":\"https://github.com/dksami/Eproject\"}]},\"work\":{\"list\":{\"mobileapp\":[{\"des\":\"Wordpress App that let you see your wordpress post over your cellphone.\",\"img\":null,\"url\":null,\"embedlink\":\"6CRxzaskGfA\",\"project\":\"0\",\"id\":\"4\",\"embed\":true,\"title\":\" Wordpress Blog (Private App on Development)\"},{\"project\":\"0\",\"id\":\"2\",\"embed\":true,\"title\":\"Tracker Display  (Private App)\",\"des\":\"A tracker display for the a company who have vendors of their own that deliver stuff to the xyz location , tracker display is to check where they are real time, with the tracker application installed on their cell phone itself\",\"img\":null,\"url\":null,\"embedlink\":\"YHZ3lOPnuSs\"},{\"id\":\"1\",\"embed\":true,\"title\":\"Dominion Store App  (on Play Store)\",\"des\":\"An App for a super Store for admin managment as well as for customers, Admin can do alot of things that i cant describe here but client can make an order or just see the price of the product just by scanning.\",\"img\":null,\"url\":null,\"embedlink\":\"ZN6hNe8aUeo\",\"project\":\"0\"},{\"des\":\"Haiflix is a video streaming App and music streaming app that let you listed or watch their service on monthly based subscription\",\"img\":null,\"url\":null,\"embedlink\":\"53qryUvoF0Y\",\"project\":\"0\",\"id\":\"3\",\"embed\":true,\"title\":\" Haiflix (on development)\"},{\"title\":\"Dominion Store (UPGRADE)\",\"des\":\"Upgraded app of Dominion Stores\",\"img\":null,\"url\":null,\"embedlink\":\"p1xR3RKXngk\",\"project\":\"0\",\"id\":\"6\",\"embed\":true}],\"website\":[{\"url\":\"https://Dashboards.tk\",\"embedlink\":null,\"project\":\"0\",\"id\":\"1\",\"embed\":false,\"title\":\"Dashboards \",\"des\":\"Dashboards.tk is a Php Web Application. It is a attendance system that used finger prints .The app has been complete and in use in our company. Take a Demo </br>\\r\\nusername = admin\\r\\n, password = admin\",\"img\":\"Dashboards.tk\"},{\"embedlink\":null,\"project\":\"0\",\"id\":\"11\",\"embed\":false,\"title\":\"THE CABLE BUNDLE\",\"des\":\"THE CABLE BUNDLE is another Website that has been created to for a Us audience\",\"img\":\"thecablebundle\",\"url\":\"https://thecablebundle.com/\"},{\"embedlink\":null,\"project\":\"0\",\"id\":\"7\",\"embed\":false,\"title\":\"Np Digitals\",\"des\":\"Np digitals is a Pakistan based call center that deals in telecommunication .\",\"img\":\"Npdigitals\",\"url\":\"http://npdigitals.com/\"},{\"embedlink\":null,\"project\":\"0\",\"id\":\"10\",\"embed\":false,\"title\":\"Cable Internet Bundlez\",\"des\":\"Cable Internet Bundlez is another Website that has been created to for a Us audience\",\"img\":\"cableinternetbundlez\\r\\n\",\"url\":\"https://cableinternetbundlez.com/\"},{\"project\":\"0\",\"id\":\"2\",\"embed\":false,\"title\":\"Digital Whales\",\"des\":\"A Landing page for US based company that deal in telecommunication.\",\"img\":\"digitalwhales\",\"url\":\"http://digital-whales.com\",\"embedlink\":null},{\"url\":\"https://internetbundlez.com/\",\"embedlink\":null,\"project\":\"0\",\"id\":\"4\",\"embed\":false,\"title\":\"internet bundlez\",\"des\":\"Spectrum Resellers that sales good in US markets \",\"img\":\"internetbundlez\"},{\"project\":\"0\",\"id\":\"12\",\"embed\":false,\"title\":\"Our Internet Tv\",\"des\":\"Our Internet Tv is another Website that has been created to for a Us audience\",\"img\":\"ourinternettv\",\"url\":\"https://ourinternettv.com/\",\"embedlink\":null},{\"url\":\"https://internetbusinessdeals.com/\",\"embedlink\":null,\"project\":\"0\",\"id\":\"5\",\"embed\":false,\"title\":\"internet business deals\",\"des\":\"Internet business deals is a website for the my us based client. Website is static.\",\"img\":\"internetbusinessdeals\"},{\"des\":\"My Home Security is a landing page for targeting people that are interested in buying Home security things\",\"img\":\"myhomesecurities\",\"url\":\"https://myhomesecurities.com/\",\"embedlink\":null,\"project\":\"0\",\"id\":\"6\",\"embed\":false,\"title\":\"My Home Securities\"},{\"embedlink\":null,\"project\":\"0\",\"id\":\"14\",\"embed\":false,\"title\":\"THE INTERNET BUNDLE\",\"des\":\"THE INTERNET BUNDLE is another Website that has been created to for a Us audience\",\"img\":\"THEINTERNETBUNDLE\",\"url\":\"http://theinternetbundle.com/\"},{\"id\":\"3\",\"embed\":false,\"title\":\"Home CTI\",\"des\":\"Home Cti is a company that provides internet and phone services in us.\",\"img\":\"Homecti\",\"url\":\"http://homecti.com\",\"embedlink\":null,\"project\":\"0\"},{\"embedlink\":null,\"project\":\"0\",\"id\":\"9\",\"embed\":false,\"title\":\"Cable Bundle Dealz\",\"des\":\"Cable bundle is another Website that has been created to for a Us audience\",\"img\":\"cablebundledealz\\r\\n\",\"url\":\"https://cablebundledealzz.com/\"},{\"des\":\"The tv internet is a campaign landing page for Us audience.\",\"img\":\"thetvinternet\",\"url\":\"https://thetvinternet.com/\",\"embedlink\":null,\"project\":\"0\",\"id\":\"8\",\"embed\":false,\"title\":\"The Tv Internet\"},{\"title\":\"The Tv Internet Phone\",\"des\":\"The Tv Internet Phone is another Website that has been created to for a Us audience\",\"img\":\"thetvinternetphone\",\"url\":\"https://thetvinternetphone.com/\",\"embedlink\":null,\"project\":\"0\",\"id\":\"13\",\"embed\":false}]},\"h1\":\"Work\",\"p\":\"Some of work that are worthy of displaying, that includes Cross platfrom Android , ios and windows app development to Server sided and website development, both front-end work as well as backend work.\"},\"medium\":\"SuperSami\",\"github\":\"dksami\"}");

/***/ })

})
//# sourceMappingURL=[website].js.f7b9c5a53e4a49ba9ada.hot-update.js.map