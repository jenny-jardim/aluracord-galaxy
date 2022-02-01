"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chat",{

/***/ "./src/components/ButtonSendSticker.js":
/*!*********************************************!*\
  !*** ./src/components/ButtonSendSticker.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ButtonSendSticker\": function() { return /* binding */ ButtonSendSticker; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config.json */ \"./config.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction ButtonSendSticker(props) {\n    var _this = this;\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(''), 2), isOpen = ref[0], setOpenState = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        styleSheet: {\n            position: 'relative'\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                styleSheet: {\n                    borderRadius: '50%',\n                    padding: '0 3px 0 0',\n                    minWidth: '50px',\n                    minHeight: '50px',\n                    fontSize: '20px',\n                    marginBottom: '8px',\n                    lineHeight: '0',\n                    display: 'flex',\n                    alignItems: 'center',\n                    justifyContent: 'center',\n                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700],\n                    filter: isOpen ? 'grayscale(1)' : 'grayscale(0)',\n                    hover: {\n                        filter: 'grayscale(1)'\n                    }\n                },\n                label: \"😋\",\n                onClick: function() {\n                    return setOpenState(!isOpen);\n                }\n            }, void 0, false, {\n                fileName: \"/Users/jennykaylla/Desktop/aluracord/src/components/ButtonSendSticker.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                styleSheet: {\n                    display: 'flex',\n                    flexDirection: 'column',\n                    borderRadius: '5px',\n                    position: 'absolute',\n                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[900],\n                    width: {\n                        xs: '200px',\n                        sm: '290px'\n                    },\n                    height: '300px',\n                    right: '30px',\n                    bottom: '30px',\n                    padding: '16px',\n                    boxShadow: 'rgba(4, 4, 5, 0.15) 0px 0px 0px 1px, rgba(0, 0, 0, 0.24) 0px 8px 16px 0px'\n                },\n                onClick: function() {\n                    return setOpenState(false);\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                        styleSheet: {\n                            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"],\n                            fontWeight: 'bold'\n                        },\n                        children: \"Stickers\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jennykaylla/Desktop/aluracord/src/components/ButtonSendSticker.js\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        tag: \"ul\",\n                        styleSheet: {\n                            display: 'flex',\n                            flexWrap: 'wrap',\n                            justifyContent: 'space-between',\n                            flex: 1,\n                            paddingTop: '16px',\n                            overflow: 'scroll'\n                        },\n                        children: _config_json__WEBPACK_IMPORTED_MODULE_3__.stickers.map(function(sticker) {\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                onClick: function() {\n                                    // console.log('[DENTRO DO COMPONENTE] Clicou no sticker:', sticker);\n                                    if (Boolean(props.onStickerClick)) {\n                                        props.onStickerClick(sticker);\n                                    }\n                                },\n                                tag: \"li\",\n                                styleSheet: {\n                                    width: '50%',\n                                    borderRadius: '5px',\n                                    padding: '10px',\n                                    focus: {\n                                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[600]\n                                    },\n                                    hover: {\n                                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[600]\n                                    }\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                                    src: sticker\n                                }, void 0, false, {\n                                    fileName: \"/Users/jennykaylla/Desktop/aluracord/src/components/ButtonSendSticker.js\",\n                                    lineNumber: 95,\n                                    columnNumber: 17\n                                }, _this)\n                            }, sticker, false, {\n                                fileName: \"/Users/jennykaylla/Desktop/aluracord/src/components/ButtonSendSticker.js\",\n                                lineNumber: 75,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/jennykaylla/Desktop/aluracord/src/components/ButtonSendSticker.js\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jennykaylla/Desktop/aluracord/src/components/ButtonSendSticker.js\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jennykaylla/Desktop/aluracord/src/components/ButtonSendSticker.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this));\n}\n_s(ButtonSendSticker, \"M1dH4yD9ZrZglAXGglbASSKS3GM=\");\n_c = ButtonSendSticker;\nvar _c;\n$RefreshReg$(_c, \"ButtonSendSticker\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9CdXR0b25TZW5kU3RpY2tlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBeUI7QUFDc0M7QUFDdEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsQyxTQUFTTSxpQkFBaUIsQ0FBQ0MsS0FBSyxFQUFFLENBQUM7OztJQUN4QyxHQUFLLENBQTBCUCxHQUFrQixrQkFBbEJBLHFEQUFjLENBQUMsQ0FBRSxRQUF6Q1MsTUFBTSxHQUFrQlQsR0FBa0IsS0FBbENVLFlBQVksR0FBSVYsR0FBa0I7SUFFakQsTUFBTSw2RUFDSEMscURBQUc7UUFDRlUsVUFBVSxFQUFFLENBQUM7WUFDWEMsUUFBUSxFQUFFLENBQVU7UUFDdEIsQ0FBQzs7d0ZBRUFWLHdEQUFNO2dCQUNMUyxVQUFVLEVBQUUsQ0FBQztvQkFDWEUsWUFBWSxFQUFFLENBQUs7b0JBQ25CQyxPQUFPLEVBQUUsQ0FBVztvQkFDcEJDLFFBQVEsRUFBRSxDQUFNO29CQUNoQkMsU0FBUyxFQUFFLENBQU07b0JBQ2pCQyxRQUFRLEVBQUUsQ0FBTTtvQkFDaEJDLFlBQVksRUFBRSxDQUFLO29CQUNuQkMsVUFBVSxFQUFFLENBQUc7b0JBQ2ZDLE9BQU8sRUFBRSxDQUFNO29CQUNmQyxVQUFVLEVBQUUsQ0FBUTtvQkFDcEJDLGNBQWMsRUFBRSxDQUFRO29CQUN4QkMsZUFBZSxFQUFFbEIsb0VBQW9DO29CQUNyRHNCLE1BQU0sRUFBRWxCLE1BQU0sR0FBRyxDQUFjLGdCQUFHLENBQWM7b0JBQ2hEbUIsS0FBSyxFQUFFLENBQUM7d0JBQ05ELE1BQU0sRUFBRSxDQUFjO29CQUN4QixDQUFDO2dCQUNILENBQUM7Z0JBQ0RFLEtBQUssRUFBQyxDQUFHO2dCQUNUQyxPQUFPLEVBQUUsUUFBUTtvQkFBRnBCLE1BQU0sQ0FBTkEsWUFBWSxFQUFFRCxNQUFNOzs7Ozs7O1lBRXBDQSxNQUFNLGdGQUNKUixxREFBRztnQkFDRlUsVUFBVSxFQUFFLENBQUM7b0JBQ1hTLE9BQU8sRUFBRSxDQUFNO29CQUNmVyxhQUFhLEVBQUUsQ0FBUTtvQkFDdkJsQixZQUFZLEVBQUUsQ0FBSztvQkFDbkJELFFBQVEsRUFBRSxDQUFVO29CQUNwQlcsZUFBZSxFQUFFbEIsb0VBQW9DO29CQUNyRDJCLEtBQUssRUFBRSxDQUFDO3dCQUNOQyxFQUFFLEVBQUUsQ0FBTzt3QkFDWEMsRUFBRSxFQUFFLENBQU87b0JBQ2IsQ0FBQztvQkFDREMsTUFBTSxFQUFFLENBQU87b0JBQ2ZDLEtBQUssRUFBRSxDQUFNO29CQUNiQyxNQUFNLEVBQUUsQ0FBTTtvQkFDZHZCLE9BQU8sRUFBRSxDQUFNO29CQUNmd0IsU0FBUyxFQUFFLENBQTJFO2dCQUN4RixDQUFDO2dCQUNEUixPQUFPLEVBQUUsUUFBUTtvQkFBRnBCLE1BQU0sQ0FBTkEsWUFBWSxDQUFDLEtBQUs7OztnR0FFaENQLHNEQUFJO3dCQUNIUSxVQUFVLEVBQUUsQ0FBQzs0QkFDWDRCLEtBQUssRUFBRWxDLHNFQUFxQzs0QkFDNUNtQyxVQUFVLEVBQUUsQ0FBTTt3QkFDcEIsQ0FBQztrQ0FDRixDQUVEOzs7Ozs7Z0dBQ0N2QyxxREFBRzt3QkFDRndDLEdBQUcsRUFBQyxDQUFJO3dCQUNSOUIsVUFBVSxFQUFFLENBQUM7NEJBQ1hTLE9BQU8sRUFBRSxDQUFNOzRCQUNmc0IsUUFBUSxFQUFFLENBQU07NEJBQ2hCcEIsY0FBYyxFQUFFLENBQWU7NEJBQy9CcUIsSUFBSSxFQUFFLENBQUM7NEJBQ1BDLFVBQVUsRUFBRSxDQUFNOzRCQUNsQkMsUUFBUSxFQUFFLENBQVE7d0JBQ3BCLENBQUM7a0NBRUF4QyxzREFBc0IsQ0FBQyxRQUFRLENBQVAyQyxPQUFPOzBDQUM5QixNQUNkLENBQUMsOERBRGM3QyxzREFBSTtnQ0FDSDJCLE9BQU8sRUFBRSxRQUN6QixHQUQrQixDQUFDO29DQUNkLEVBQXFFO29DQUNyRSxFQUFFLEVBQUVtQixPQUFPLENBQUMxQyxLQUFLLENBQUMyQyxjQUFjLEdBQUcsQ0FBQzt3Q0FDbEMzQyxLQUFLLENBQUMyQyxjQUFjLENBQUNGLE9BQU87b0NBQzlCLENBQUM7Z0NBQ0gsQ0FBQztnQ0FDRFAsR0FBRyxFQUFDLENBQUk7Z0NBQ1I5QixVQUFVLEVBQUUsQ0FBQztvQ0FDWHFCLEtBQUssRUFBRSxDQUFLO29DQUNabkIsWUFBWSxFQUFFLENBQUs7b0NBQ25CQyxPQUFPLEVBQUUsQ0FBTTtvQ0FDZnFDLEtBQUssRUFBRSxDQUFDO3dDQUNONUIsZUFBZSxFQUFFbEIsb0VBQW9DO29DQUN2RCxDQUFDO29DQUNEdUIsS0FBSyxFQUFFLENBQUM7d0NBQ05MLGVBQWUsRUFBRWxCLG9FQUFvQztvQ0FDdkQsQ0FBQztnQ0FDSCxDQUFDO3NIQUVBRCx1REFBSztvQ0FBQ2dELEdBQUcsRUFBRUosT0FBTzs7Ozs7OytCQWJMQSxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCckMsQ0FBQztHQWxHZTFDLGlCQUFpQjtLQUFqQkEsaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0J1dHRvblNlbmRTdGlja2VyLmpzP2U4NGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBUZXh0LCBJbWFnZSB9IGZyb20gJ0Bza3luZXh1aS9jb21wb25lbnRzJztcbmltcG9ydCBhcHBDb25maWcgZnJvbSAnLi4vLi4vY29uZmlnLmpzb24nO1xuXG5leHBvcnQgZnVuY3Rpb24gQnV0dG9uU2VuZFN0aWNrZXIocHJvcHMpIHtcbiAgY29uc3QgW2lzT3Blbiwgc2V0T3BlblN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICAgICAgcGFkZGluZzogJzAgM3B4IDAgMCcsXG4gICAgICAgICAgbWluV2lkdGg6ICc1MHB4JyxcbiAgICAgICAgICBtaW5IZWlnaHQ6ICc1MHB4JyxcbiAgICAgICAgICBmb250U2l6ZTogJzIwcHgnLFxuICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzhweCcsXG4gICAgICAgICAgbGluZUhlaWdodDogJzAnLFxuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzcwMF0sXG4gICAgICAgICAgZmlsdGVyOiBpc09wZW4gPyAnZ3JheXNjYWxlKDEpJyA6ICdncmF5c2NhbGUoMCknLFxuICAgICAgICAgIGhvdmVyOiB7XG4gICAgICAgICAgICBmaWx0ZXI6ICdncmF5c2NhbGUoMSknXG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgICBsYWJlbD1cIvCfmItcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuU3RhdGUoIWlzT3Blbil9XG4gICAgICAvPlxuICAgICAge2lzT3BlbiAmJiAoXG4gICAgICAgIDxCb3hcbiAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s5MDBdLFxuICAgICAgICAgICAgd2lkdGg6IHtcbiAgICAgICAgICAgICAgeHM6ICcyMDBweCcsXG4gICAgICAgICAgICAgIHNtOiAnMjkwcHgnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhlaWdodDogJzMwMHB4JyxcbiAgICAgICAgICAgIHJpZ2h0OiAnMzBweCcsXG4gICAgICAgICAgICBib3R0b206ICczMHB4JyxcbiAgICAgICAgICAgIHBhZGRpbmc6ICcxNnB4JyxcbiAgICAgICAgICAgIGJveFNoYWRvdzogJ3JnYmEoNCwgNCwgNSwgMC4xNSkgMHB4IDBweCAwcHggMXB4LCByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCA4cHggMTZweCAwcHgnLFxuICAgICAgICAgIH19XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3BlblN0YXRlKGZhbHNlKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzW1wiMDAwXCJdLFxuICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFN0aWNrZXJzXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIHRhZz1cInVsXCJcbiAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICBmbGV4V3JhcDogJ3dyYXAnLFxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgICAgICAgICAgICBmbGV4OiAxLFxuICAgICAgICAgICAgICBwYWRkaW5nVG9wOiAnMTZweCcsXG4gICAgICAgICAgICAgIG92ZXJmbG93OiAnc2Nyb2xsJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2FwcENvbmZpZy5zdGlja2Vycy5tYXAoKHN0aWNrZXIpID0+IChcbiAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnW0RFTlRSTyBETyBDT01QT05FTlRFXSBDbGljb3Ugbm8gc3RpY2tlcjonLCBzdGlja2VyKTtcbiAgICAgICAgICAgICAgICAgIGlmIChCb29sZWFuKHByb3BzLm9uU3RpY2tlckNsaWNrKSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5vblN0aWNrZXJDbGljayhzdGlja2VyKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIHRhZz1cImxpXCIga2V5PXtzdGlja2VyfVxuICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAnNTAlJyxcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMTBweCcsXG4gICAgICAgICAgICAgICAgICBmb2N1czoge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbNjAwXSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBob3Zlcjoge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbNjAwXSxcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz17c3RpY2tlcn0gLz5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuICAgICAgKX1cbiAgICA8L0JveD5cbiAgKVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsIkJveCIsIkJ1dHRvbiIsIlRleHQiLCJJbWFnZSIsImFwcENvbmZpZyIsIkJ1dHRvblNlbmRTdGlja2VyIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImlzT3BlbiIsInNldE9wZW5TdGF0ZSIsInN0eWxlU2hlZXQiLCJwb3NpdGlvbiIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJtaW5XaWR0aCIsIm1pbkhlaWdodCIsImZvbnRTaXplIiwibWFyZ2luQm90dG9tIiwibGluZUhlaWdodCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0aGVtZSIsImNvbG9ycyIsIm5ldXRyYWxzIiwiZmlsdGVyIiwiaG92ZXIiLCJsYWJlbCIsIm9uQ2xpY2siLCJmbGV4RGlyZWN0aW9uIiwid2lkdGgiLCJ4cyIsInNtIiwiaGVpZ2h0IiwicmlnaHQiLCJib3R0b20iLCJib3hTaGFkb3ciLCJjb2xvciIsImZvbnRXZWlnaHQiLCJ0YWciLCJmbGV4V3JhcCIsImZsZXgiLCJwYWRkaW5nVG9wIiwib3ZlcmZsb3ciLCJzdGlja2VycyIsIm1hcCIsInN0aWNrZXIiLCJCb29sZWFuIiwib25TdGlja2VyQ2xpY2siLCJmb2N1cyIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ButtonSendSticker.js\n");

/***/ })

});