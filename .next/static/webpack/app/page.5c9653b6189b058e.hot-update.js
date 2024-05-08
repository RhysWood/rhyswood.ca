"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/Welcome/IntroText.jsx":
/*!******************************************!*\
  !*** ./components/Welcome/IntroText.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_Split3_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Split3.min.js */ \"(app-pages-browser)/./components/utils/Split3.min.js\");\n/* harmony import */ var _utils_Split3_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utils_Split3_min_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gsap */ \"(app-pages-browser)/./node_modules/gsap/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _hooks_useOnScreen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useOnScreen */ \"(app-pages-browser)/./components/hooks/useOnScreen.js\");\n/* harmony import */ var _welcome_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./welcome.scss */ \"(app-pages-browser)/./components/Welcome/welcome.scss\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction IntroText() {\n    _s();\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [reveal, setReveal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const onScreen = (0,_hooks_useOnScreen__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(ref);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (onScreen) {\n            setReveal(onScreen);\n        }\n    }, [\n        onScreen\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (reveal) {\n            const split = new (_utils_Split3_min_js__WEBPACK_IMPORTED_MODULE_2___default())(\"#para\", {\n                type: \"lines\"\n            });\n            gsap__WEBPACK_IMPORTED_MODULE_6__[\"default\"].to(split.lines, {\n                duration: 1,\n                y: -20,\n                opacity: 1,\n                stagger: 0.1,\n                ease: \"power2\"\n            });\n        }\n    }, [\n        reveal\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(\"flex w-1/2 flex-end\", {\n            \"is-reveal\": reveal\n        }),\n        \"data-scroll-section\": true,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"intro-text\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                ref: ref,\n                id: \"para\",\n                className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({\n                    \"is-reveal\": reveal\n                }),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"Experienced Full-Stack Developer\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rhyswood/dev/rhyswood.ca/components/Welcome/IntroText.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, this),\n                    \" based in Vancouver, BC, specializing in creating dynamic and user-friendly websites and applications. With a strong background in front-end & back-end technologies, including automation scripting and REST API integration, I bring ideas to life from inception to implementation.\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rhyswood/dev/rhyswood.ca/components/Welcome/IntroText.jsx\",\n                lineNumber: 39,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/rhyswood/dev/rhyswood.ca/components/Welcome/IntroText.jsx\",\n            lineNumber: 38,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/rhyswood/dev/rhyswood.ca/components/Welcome/IntroText.jsx\",\n        lineNumber: 37,\n        columnNumber: 9\n    }, this);\n}\n_s(IntroText, \"A34ViuF9v54GN9pr7R/DaTZJmbU=\", false, function() {\n    return [\n        _hooks_useOnScreen__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = IntroText;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IntroText);\nvar _c;\n$RefreshReg$(_c, \"IntroText\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvV2VsY29tZS9JbnRyb1RleHQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDMkQ7QUFDWjtBQUN2QjtBQUNJO0FBQ21CO0FBQ3ZCO0FBRXhCLFNBQVNROztJQUNMLE1BQU1DLE1BQU1QLDZDQUFNQSxDQUFDO0lBQ25CLE1BQU0sQ0FBQ1EsUUFBUUMsVUFBVSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNUyxXQUFXTCw4REFBV0EsQ0FBQ0U7SUFFN0JSLGdEQUFTQSxDQUFDO1FBQ04sSUFBR1csVUFBVTtZQUNURCxVQUFVQztRQUNkO0lBQ0osR0FBRztRQUFDQTtLQUFTO0lBRWZYLGdEQUFTQSxDQUFDO1FBQ1IsSUFBR1MsUUFBUTtZQUNYLE1BQU1HLFFBQVEsSUFBSVQsNkRBQVNBLENBQUMsU0FBUztnQkFDbkNVLE1BQU07WUFDUjtZQUVBVCw0Q0FBSUEsQ0FBQ1UsRUFBRSxDQUFDRixNQUFNRyxLQUFLLEVBQUU7Z0JBQ25CQyxVQUFVO2dCQUNWQyxHQUFHLENBQUM7Z0JBQ0pDLFNBQVM7Z0JBQ1RDLFNBQVM7Z0JBQ1RDLE1BQU07WUFDUjtRQUNBO0lBQ0YsR0FBRztRQUFDWDtLQUFPO0lBRVQscUJBQ0ksOERBQUNZO1FBQUlDLFdBQVdqQixpREFBRUEsQ0FBQyx1QkFBdUI7WUFBQyxhQUFjSTtRQUFNO1FBQUljLHFCQUFtQjtrQkFDdEYsNEVBQUNGO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUNFO2dCQUFFaEIsS0FBS0E7Z0JBQUtpQixJQUFHO2dCQUFPSCxXQUFXakIsaURBQUVBLENBQUM7b0JBQUMsYUFBY0k7Z0JBQU07O2tDQUMxRCw4REFBQ2lCO2tDQUFLOzs7Ozs7b0JBQXVDOzs7Ozs7Ozs7Ozs7Ozs7OztBQUt2RDtHQXBDU25COztRQUdZRCwwREFBV0E7OztLQUh2QkM7QUFzQ1QsK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XZWxjb21lL0ludHJvVGV4dC5qc3g/MjYzNCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNwbGl0VGV4dCBmcm9tICcuLi91dGlscy9TcGxpdDMubWluLmpzJztcbmltcG9ydCBnc2FwIGZyb20gJ2dzYXAnO1xuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHVzZU9uU2NyZWVuIGZyb20gJy4uL2hvb2tzL3VzZU9uU2NyZWVuJztcbmltcG9ydCAnLi93ZWxjb21lLnNjc3MnO1xuXG5mdW5jdGlvbiBJbnRyb1RleHQoKSB7XG4gICAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IFtyZXZlYWwsIHNldFJldmVhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3Qgb25TY3JlZW4gPSB1c2VPblNjcmVlbihyZWYpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYob25TY3JlZW4pIHtcbiAgICAgICAgICAgIHNldFJldmVhbChvblNjcmVlbik7XG4gICAgICAgIH1cbiAgICB9LCBbb25TY3JlZW5dKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmKHJldmVhbCkge1xuICAgIGNvbnN0IHNwbGl0ID0gbmV3IFNwbGl0VGV4dChcIiNwYXJhXCIsIHtcbiAgICAgIHR5cGU6IFwibGluZXNcIlxuICAgIH0pO1xuICAgIFxuICAgIGdzYXAudG8oc3BsaXQubGluZXMsIHtcbiAgICAgIGR1cmF0aW9uOiAxLFxuICAgICAgeTogLTIwLFxuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIHN0YWdnZXI6IDAuMSxcbiAgICAgIGVhc2U6ICdwb3dlcjInLFxuICAgIH0pXG4gICAgfVxuICB9LCBbcmV2ZWFsXSk7XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbihcImZsZXggdy0xLzIgZmxleC1lbmRcIiwgeydpcy1yZXZlYWwnIDogcmV2ZWFsfSl9IGRhdGEtc2Nyb2xsLXNlY3Rpb24+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW50cm8tdGV4dFwiPlxuICAgICAgICAgIDxwIHJlZj17cmVmfSBpZD1cInBhcmFcIiBjbGFzc05hbWU9e2NuKHsnaXMtcmV2ZWFsJyA6IHJldmVhbH0pfT5cbiAgICAgICAgICA8c3Bhbj5FeHBlcmllbmNlZCBGdWxsLVN0YWNrIERldmVsb3Blcjwvc3Bhbj4gYmFzZWQgaW4gVmFuY291dmVyLCBCQywgc3BlY2lhbGl6aW5nIGluIGNyZWF0aW5nIGR5bmFtaWMgYW5kIHVzZXItZnJpZW5kbHkgd2Vic2l0ZXMgYW5kIGFwcGxpY2F0aW9ucy4gV2l0aCBhIHN0cm9uZyBiYWNrZ3JvdW5kIGluIGZyb250LWVuZCAmIGJhY2stZW5kIHRlY2hub2xvZ2llcywgaW5jbHVkaW5nIGF1dG9tYXRpb24gc2NyaXB0aW5nIGFuZCBSRVNUIEFQSSBpbnRlZ3JhdGlvbiwgSSBicmluZyBpZGVhcyB0byBsaWZlIGZyb20gaW5jZXB0aW9uIHRvIGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEludHJvVGV4dDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIlNwbGl0VGV4dCIsImdzYXAiLCJjbiIsInVzZU9uU2NyZWVuIiwiSW50cm9UZXh0IiwicmVmIiwicmV2ZWFsIiwic2V0UmV2ZWFsIiwib25TY3JlZW4iLCJzcGxpdCIsInR5cGUiLCJ0byIsImxpbmVzIiwiZHVyYXRpb24iLCJ5Iiwib3BhY2l0eSIsInN0YWdnZXIiLCJlYXNlIiwiZGl2IiwiY2xhc3NOYW1lIiwiZGF0YS1zY3JvbGwtc2VjdGlvbiIsInAiLCJpZCIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Welcome/IntroText.jsx\n"));

/***/ })

});