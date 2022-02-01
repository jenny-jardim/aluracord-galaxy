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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ButtonSendSticker\": function() { return /* binding */ ButtonSendSticker; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config.json */ \"./config.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction ButtonSendSticker(props) {\n    var _this = this;\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(''), 2), isOpen = ref[0], setOpenState = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        styleSheet: {\n            position: 'relative',\n            paddingLeft: '10px'\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                styleSheet: {\n                    borderRadius: '60%',\n                    padding: '0 3px 0 0',\n                    minWidth: '50px',\n                    minHeight: '50px',\n                    fontSize: '30px',\n                    marginBottom: '8px',\n                    lineHeight: '0',\n                    display: 'flex',\n                    alignItems: 'center',\n                    justifyContent: 'center',\n                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700],\n                    filter: isOpen ? 'grayscale(1)' : 'grayscale(0)',\n                    hover: {\n                        filter: 'grayscale(1)'\n                    }\n                },\n                label: \"😋\",\n                onClick: function() {\n                    return setOpenState(!isOpen);\n                }\n            }, void 0, false, {\n                fileName: \"/Users/jennykaylla/Desktop/aluracord/src/components/ButtonSendSticker.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                styleSheet: {\n                    display: 'flex',\n                    flexDirection: 'column',\n                    borderRadius: '5px',\n                    position: 'absolute',\n                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[900],\n                    width: {\n                        xs: '200px',\n                        sm: '290px'\n                    },\n                    height: '300px',\n                    right: '30px',\n                    bottom: '30px',\n                    padding: '16px',\n                    boxShadow: 'rgba(4, 4, 5, 0.15) 0px 0px 0px 1px, rgba(0, 0, 0, 0.24) 0px 8px 16px 0px'\n                },\n                onClick: function() {\n                    return setOpenState(false);\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                        styleSheet: {\n                            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"],\n                            fontWeight: 'bold'\n                        },\n                        children: \"Stickers\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jennykaylla/Desktop/aluracord/src/components/ButtonSendSticker.js\",\n                        lineNumber: 56,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        tag: \"ul\",\n                        styleSheet: {\n                            display: 'flex',\n                            flexWrap: 'wrap',\n                            justifyContent: 'space-between',\n                            flex: 1,\n                            paddingTop: '16px',\n                            overflow: 'scroll'\n                        },\n                        children: _config_json__WEBPACK_IMPORTED_MODULE_3__.stickers.map(function(sticker) {\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                onClick: function() {\n                                    // console.log('[DENTRO DO COMPONENTE] Clicou no sticker:', sticker);\n                                    if (Boolean(props.onStickerClick)) {\n                                        props.onStickerClick(sticker);\n                                    }\n                                },\n                                tag: \"li\",\n                                styleSheet: {\n                                    width: '50%',\n                                    borderRadius: '5px',\n                                    padding: '10px',\n                                    focus: {\n                                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[600]\n                                    },\n                                    hover: {\n                                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[600]\n                                    }\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                                    src: sticker\n                                }, void 0, false, {\n                                    fileName: \"/Users/jennykaylla/Desktop/aluracord/src/components/ButtonSendSticker.js\",\n                                    lineNumber: 96,\n                                    columnNumber: 17\n                                }, _this)\n                            }, sticker, false, {\n                                fileName: \"/Users/jennykaylla/Desktop/aluracord/src/components/ButtonSendSticker.js\",\n                                lineNumber: 76,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/jennykaylla/Desktop/aluracord/src/components/ButtonSendSticker.js\",\n                        lineNumber: 64,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jennykaylla/Desktop/aluracord/src/components/ButtonSendSticker.js\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jennykaylla/Desktop/aluracord/src/components/ButtonSendSticker.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this));\n}\n_s(ButtonSendSticker, \"M1dH4yD9ZrZglAXGglbASSKS3GM=\");\n_c = ButtonSendSticker;\nvar _c;\n$RefreshReg$(_c, \"ButtonSendSticker\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9CdXR0b25TZW5kU3RpY2tlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBeUI7QUFDc0M7QUFDdEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsQyxTQUFTTSxpQkFBaUIsQ0FBQ0MsS0FBSyxFQUFFLENBQUM7OztJQUN4QyxHQUFLLENBQTBCUCxHQUFrQixrQkFBbEJBLHFEQUFjLENBQUMsQ0FBRSxRQUF6Q1MsTUFBTSxHQUFrQlQsR0FBa0IsS0FBbENVLFlBQVksR0FBSVYsR0FBa0I7SUFFakQsTUFBTSw2RUFDSEMscURBQUc7UUFDRlUsVUFBVSxFQUFFLENBQUM7WUFDWEMsUUFBUSxFQUFFLENBQVU7WUFDcEJDLFdBQVcsRUFBRSxDQUFNO1FBQ3JCLENBQUM7O3dGQUVBWCx3REFBTTtnQkFDTFMsVUFBVSxFQUFFLENBQUM7b0JBQ1hHLFlBQVksRUFBRSxDQUFLO29CQUNuQkMsT0FBTyxFQUFFLENBQVc7b0JBQ3BCQyxRQUFRLEVBQUUsQ0FBTTtvQkFDaEJDLFNBQVMsRUFBRSxDQUFNO29CQUNqQkMsUUFBUSxFQUFFLENBQU07b0JBQ2hCQyxZQUFZLEVBQUUsQ0FBSztvQkFDbkJDLFVBQVUsRUFBRSxDQUFHO29CQUNmQyxPQUFPLEVBQUUsQ0FBTTtvQkFDZkMsVUFBVSxFQUFFLENBQVE7b0JBQ3BCQyxjQUFjLEVBQUUsQ0FBUTtvQkFDeEJDLGVBQWUsRUFBRW5CLG9FQUFvQztvQkFDckR1QixNQUFNLEVBQUVuQixNQUFNLEdBQUcsQ0FBYyxnQkFBRyxDQUFjO29CQUNoRG9CLEtBQUssRUFBRSxDQUFDO3dCQUNORCxNQUFNLEVBQUUsQ0FBYztvQkFDeEIsQ0FBQztnQkFDSCxDQUFDO2dCQUNERSxLQUFLLEVBQUMsQ0FBRztnQkFDVEMsT0FBTyxFQUFFLFFBQVE7b0JBQUZyQixNQUFNLENBQU5BLFlBQVksRUFBRUQsTUFBTTs7Ozs7OztZQUVwQ0EsTUFBTSxnRkFDSlIscURBQUc7Z0JBQ0ZVLFVBQVUsRUFBRSxDQUFDO29CQUNYVSxPQUFPLEVBQUUsQ0FBTTtvQkFDZlcsYUFBYSxFQUFFLENBQVE7b0JBQ3ZCbEIsWUFBWSxFQUFFLENBQUs7b0JBQ25CRixRQUFRLEVBQUUsQ0FBVTtvQkFDcEJZLGVBQWUsRUFBRW5CLG9FQUFvQztvQkFDckQ0QixLQUFLLEVBQUUsQ0FBQzt3QkFDTkMsRUFBRSxFQUFFLENBQU87d0JBQ1hDLEVBQUUsRUFBRSxDQUFPO29CQUNiLENBQUM7b0JBQ0RDLE1BQU0sRUFBRSxDQUFPO29CQUNmQyxLQUFLLEVBQUUsQ0FBTTtvQkFDYkMsTUFBTSxFQUFFLENBQU07b0JBQ2R2QixPQUFPLEVBQUUsQ0FBTTtvQkFDZndCLFNBQVMsRUFBRSxDQUEyRTtnQkFDeEYsQ0FBQztnQkFDRFIsT0FBTyxFQUFFLFFBQVE7b0JBQUZyQixNQUFNLENBQU5BLFlBQVksQ0FBQyxLQUFLOzs7Z0dBRWhDUCxzREFBSTt3QkFDSFEsVUFBVSxFQUFFLENBQUM7NEJBQ1g2QixLQUFLLEVBQUVuQyxzRUFBcUM7NEJBQzVDb0MsVUFBVSxFQUFFLENBQU07d0JBQ3BCLENBQUM7a0NBQ0YsQ0FFRDs7Ozs7O2dHQUNDeEMscURBQUc7d0JBQ0Z5QyxHQUFHLEVBQUMsQ0FBSTt3QkFDUi9CLFVBQVUsRUFBRSxDQUFDOzRCQUNYVSxPQUFPLEVBQUUsQ0FBTTs0QkFDZnNCLFFBQVEsRUFBRSxDQUFNOzRCQUNoQnBCLGNBQWMsRUFBRSxDQUFlOzRCQUMvQnFCLElBQUksRUFBRSxDQUFDOzRCQUNQQyxVQUFVLEVBQUUsQ0FBTTs0QkFDbEJDLFFBQVEsRUFBRSxDQUFRO3dCQUNwQixDQUFDO2tDQUVBekMsc0RBQXNCLENBQUMsUUFBUSxDQUFQNEMsT0FBTzswQ0FDOUIsTUFDZCxDQUFDLDhEQURjOUMsc0RBQUk7Z0NBQ0g0QixPQUFPLEVBQUUsUUFDekIsR0FEK0IsQ0FBQztvQ0FDZCxFQUFxRTtvQ0FDckUsRUFBRSxFQUFFbUIsT0FBTyxDQUFDM0MsS0FBSyxDQUFDNEMsY0FBYyxHQUFHLENBQUM7d0NBQ2xDNUMsS0FBSyxDQUFDNEMsY0FBYyxDQUFDRixPQUFPO29DQUM5QixDQUFDO2dDQUNILENBQUM7Z0NBQ0RQLEdBQUcsRUFBQyxDQUFJO2dDQUNSL0IsVUFBVSxFQUFFLENBQUM7b0NBQ1hzQixLQUFLLEVBQUUsQ0FBSztvQ0FDWm5CLFlBQVksRUFBRSxDQUFLO29DQUNuQkMsT0FBTyxFQUFFLENBQU07b0NBQ2ZxQyxLQUFLLEVBQUUsQ0FBQzt3Q0FDTjVCLGVBQWUsRUFBRW5CLG9FQUFvQztvQ0FDdkQsQ0FBQztvQ0FDRHdCLEtBQUssRUFBRSxDQUFDO3dDQUNOTCxlQUFlLEVBQUVuQixvRUFBb0M7b0NBQ3ZELENBQUM7Z0NBQ0gsQ0FBQztzSEFFQUQsdURBQUs7b0NBQUNpRCxHQUFHLEVBQUVKLE9BQU87Ozs7OzsrQkFiTEEsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQnJDLENBQUM7R0FuR2UzQyxpQkFBaUI7S0FBakJBLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9CdXR0b25TZW5kU3RpY2tlci5qcz9lODRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgVGV4dCwgSW1hZ2UgfSBmcm9tICdAc2t5bmV4dWkvY29tcG9uZW50cyc7XG5pbXBvcnQgYXBwQ29uZmlnIGZyb20gJy4uLy4uL2NvbmZpZy5qc29uJztcblxuZXhwb3J0IGZ1bmN0aW9uIEJ1dHRvblNlbmRTdGlja2VyKHByb3BzKSB7XG4gIGNvbnN0IFtpc09wZW4sIHNldE9wZW5TdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICBwYWRkaW5nTGVmdDogJzEwcHgnLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICBib3JkZXJSYWRpdXM6ICc2MCUnLFxuICAgICAgICAgIHBhZGRpbmc6ICcwIDNweCAwIDAnLFxuICAgICAgICAgIG1pbldpZHRoOiAnNTBweCcsXG4gICAgICAgICAgbWluSGVpZ2h0OiAnNTBweCcsXG4gICAgICAgICAgZm9udFNpemU6ICczMHB4JyxcbiAgICAgICAgICBtYXJnaW5Cb3R0b206ICc4cHgnLFxuICAgICAgICAgIGxpbmVIZWlnaHQ6ICcwJyxcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s3MDBdLFxuICAgICAgICAgIGZpbHRlcjogaXNPcGVuID8gJ2dyYXlzY2FsZSgxKScgOiAnZ3JheXNjYWxlKDApJyxcbiAgICAgICAgICBob3Zlcjoge1xuICAgICAgICAgICAgZmlsdGVyOiAnZ3JheXNjYWxlKDEpJ1xuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgICAgbGFiZWw9XCLwn5iLXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3BlblN0YXRlKCFpc09wZW4pfVxuICAgICAgLz5cbiAgICAgIHtpc09wZW4gJiYgKFxuICAgICAgICA8Qm94XG4gICAgICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbOTAwXSxcbiAgICAgICAgICAgIHdpZHRoOiB7XG4gICAgICAgICAgICAgIHhzOiAnMjAwcHgnLFxuICAgICAgICAgICAgICBzbTogJzI5MHB4JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoZWlnaHQ6ICczMDBweCcsXG4gICAgICAgICAgICByaWdodDogJzMwcHgnLFxuICAgICAgICAgICAgYm90dG9tOiAnMzBweCcsXG4gICAgICAgICAgICBwYWRkaW5nOiAnMTZweCcsXG4gICAgICAgICAgICBib3hTaGFkb3c6ICdyZ2JhKDQsIDQsIDUsIDAuMTUpIDBweCAwcHggMHB4IDFweCwgcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggOHB4IDE2cHggMHB4JyxcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW5TdGF0ZShmYWxzZSl9XG4gICAgICAgID5cbiAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICAgICAgICBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1tcIjAwMFwiXSxcbiAgICAgICAgICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBTdGlja2Vyc1xuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICB0YWc9XCJ1bFwiXG4gICAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAgICAgICAgICAgZmxleDogMSxcbiAgICAgICAgICAgICAgcGFkZGluZ1RvcDogJzE2cHgnLFxuICAgICAgICAgICAgICBvdmVyZmxvdzogJ3Njcm9sbCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHthcHBDb25maWcuc3RpY2tlcnMubWFwKChzdGlja2VyKSA9PiAoXG4gICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ1tERU5UUk8gRE8gQ09NUE9ORU5URV0gQ2xpY291IG5vIHN0aWNrZXI6Jywgc3RpY2tlcik7XG4gICAgICAgICAgICAgICAgICBpZiAoQm9vbGVhbihwcm9wcy5vblN0aWNrZXJDbGljaykpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMub25TdGlja2VyQ2xpY2soc3RpY2tlcik7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICB0YWc9XCJsaVwiIGtleT17c3RpY2tlcn1cbiAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogJzUwJScsXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzEwcHgnLFxuICAgICAgICAgICAgICAgICAgZm9jdXM6IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzYwMF0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgaG92ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzYwMF0sXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3N0aWNrZXJ9IC8+XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICAgICl9XG4gICAgPC9Cb3g+XG4gIClcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJCb3giLCJCdXR0b24iLCJUZXh0IiwiSW1hZ2UiLCJhcHBDb25maWciLCJCdXR0b25TZW5kU3RpY2tlciIsInByb3BzIiwidXNlU3RhdGUiLCJpc09wZW4iLCJzZXRPcGVuU3RhdGUiLCJzdHlsZVNoZWV0IiwicG9zaXRpb24iLCJwYWRkaW5nTGVmdCIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJtaW5XaWR0aCIsIm1pbkhlaWdodCIsImZvbnRTaXplIiwibWFyZ2luQm90dG9tIiwibGluZUhlaWdodCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0aGVtZSIsImNvbG9ycyIsIm5ldXRyYWxzIiwiZmlsdGVyIiwiaG92ZXIiLCJsYWJlbCIsIm9uQ2xpY2siLCJmbGV4RGlyZWN0aW9uIiwid2lkdGgiLCJ4cyIsInNtIiwiaGVpZ2h0IiwicmlnaHQiLCJib3R0b20iLCJib3hTaGFkb3ciLCJjb2xvciIsImZvbnRXZWlnaHQiLCJ0YWciLCJmbGV4V3JhcCIsImZsZXgiLCJwYWRkaW5nVG9wIiwib3ZlcmZsb3ciLCJzdGlja2VycyIsIm1hcCIsInN0aWNrZXIiLCJCb29sZWFuIiwib25TdGlja2VyQ2xpY2siLCJmb2N1cyIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ButtonSendSticker.js\n");

/***/ })

});