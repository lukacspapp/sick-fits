/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/update",{

/***/ "./lib/useForm.js":
/*!************************!*\
  !*** ./lib/useForm.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ useForm; }\n/* harmony export */ });\n/* harmony import */ var _Users_lukacspapp_Desktop_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_lukacspapp_Desktop_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_lukacspapp_Desktop_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nfunction useForm() {\n  _s();\n\n  var intitial = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(intitial),\n      inputs = _useState[0],\n      setInputs = _useState[1];\n\n  var initialValues = Object.values(intitial).join('');\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    setInputs(intitial);\n  }, [initialValues]);\n\n  function handleChange(e) {\n    var _e$target = e.target,\n        value = _e$target.value,\n        name = _e$target.name,\n        type = _e$target.type;\n\n    if (type === 'number') {\n      value = parseInt(value); // when we update the price in the form it will save it as a string so we need to convert it back to number because the backend expects a number\n    }\n\n    if (type === 'file') {\n      var _e$target$files = (0,_Users_lukacspapp_Desktop_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(e.target.files, 1);\n\n      value = _e$target$files[0];\n    }\n\n    setInputs(_objectSpread(_objectSpread({}, inputs), {}, (0,_Users_lukacspapp_Desktop_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, name, value)));\n  }\n\n  function resetForm() {\n    setInputs(intitial);\n  }\n\n  function clearForm() {\n    var blankState = Object.fromEntries(Object.entries(inputs).map(function (_ref) {\n      var _ref2 = (0,_Users_lukacspapp_Desktop_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, 2),\n          key = _ref2[0],\n          value = _ref2[1];\n\n      return [key, ''];\n    }));\n    setInputs(blankState);\n  }\n\n  return {\n    inputs: inputs,\n    handleChange: handleChange,\n    resetForm: resetForm,\n    clearForm: clearForm\n  }; // function setValue(key, value) {\n  //   setValues({\n  //     ...values,\n  //     [key]: value,\n  //   });\n  // }\n  // function handleChange(event) {\n  //   setValue(event.target.getAttribute('name'), event.target.value);\n  // }\n  // function handleSubmit(event) {\n  //   event.preventDefault();\n  //   console.log(values);\n  // }\n  // return {\n  //   handleChange,\n  //   handleSubmit,\n  //   values,\n  // };\n}\n\n_s(useForm, \"acSN4nI3C9hx6plYm3zlVxwWy58=\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3VzZUZvcm0uanM/ZjBlMiJdLCJuYW1lcyI6WyJ1c2VGb3JtIiwiaW50aXRpYWwiLCJ1c2VTdGF0ZSIsImlucHV0cyIsInNldElucHV0cyIsImluaXRpYWxWYWx1ZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJqb2luIiwidXNlRWZmZWN0IiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwibmFtZSIsInR5cGUiLCJwYXJzZUludCIsImZpbGVzIiwicmVzZXRGb3JtIiwiY2xlYXJGb3JtIiwiYmxhbmtTdGF0ZSIsImZyb21FbnRyaWVzIiwiZW50cmllcyIsIm1hcCIsImtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxPQUFULEdBQWdDO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSx1RUFBSixFQUFJOztBQUFBLGtCQUNqQkMsK0NBQVEsQ0FBQ0QsUUFBRCxDQURTO0FBQUEsTUFDdENFLE1BRHNDO0FBQUEsTUFDOUJDLFNBRDhCOztBQUU3QyxNQUFNQyxhQUFhLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjTixRQUFkLEVBQXdCTyxJQUF4QixDQUE2QixFQUE3QixDQUF0QjtBQUVBQyxrREFBUyxDQUFDLFlBQU07QUFDZEwsYUFBUyxDQUFDSCxRQUFELENBQVQ7QUFDRCxHQUZRLEVBRU4sQ0FBQ0ksYUFBRCxDQUZNLENBQVQ7O0FBSUEsV0FBU0ssWUFBVCxDQUFzQkMsQ0FBdEIsRUFBeUI7QUFBQSxvQkFDS0EsQ0FBQyxDQUFDQyxNQURQO0FBQUEsUUFDakJDLEtBRGlCLGFBQ2pCQSxLQURpQjtBQUFBLFFBQ1ZDLElBRFUsYUFDVkEsSUFEVTtBQUFBLFFBQ0pDLElBREksYUFDSkEsSUFESTs7QUFFdkIsUUFBSUEsSUFBSSxLQUFLLFFBQWIsRUFBdUI7QUFDckJGLFdBQUssR0FBR0csUUFBUSxDQUFDSCxLQUFELENBQWhCLENBRHFCLENBQ0k7QUFDMUI7O0FBQ0QsUUFBSUUsSUFBSSxLQUFLLE1BQWIsRUFBcUI7QUFBQSx5TEFDVEosQ0FBQyxDQUFDQyxNQUFGLENBQVNLLEtBREE7O0FBQ2xCSixXQURrQjtBQUVwQjs7QUFDRFQsYUFBUyxpQ0FDSkQsTUFESSx5S0FFTlcsSUFGTSxFQUVDRCxLQUZELEdBQVQ7QUFJRDs7QUFFRCxXQUFTSyxTQUFULEdBQXFCO0FBQ25CZCxhQUFTLENBQUNILFFBQUQsQ0FBVDtBQUNEOztBQUVELFdBQVNrQixTQUFULEdBQXFCO0FBQ25CLFFBQU1DLFVBQVUsR0FBR2QsTUFBTSxDQUFDZSxXQUFQLENBQ2pCZixNQUFNLENBQUNnQixPQUFQLENBQWVuQixNQUFmLEVBQXVCb0IsR0FBdkIsQ0FBMkI7QUFBQTtBQUFBLFVBQUVDLEdBQUY7QUFBQSxVQUFPWCxLQUFQOztBQUFBLGFBQWtCLENBQUNXLEdBQUQsRUFBTSxFQUFOLENBQWxCO0FBQUEsS0FBM0IsQ0FEaUIsQ0FBbkI7QUFHQXBCLGFBQVMsQ0FBQ2dCLFVBQUQsQ0FBVDtBQUNEOztBQUVELFNBQU87QUFDTGpCLFVBQU0sRUFBTkEsTUFESztBQUVMTyxnQkFBWSxFQUFaQSxZQUZLO0FBR0xRLGFBQVMsRUFBVEEsU0FISztBQUlMQyxhQUFTLEVBQVRBO0FBSkssR0FBUCxDQWpDNkMsQ0F3QzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEOztHQTdEdUJuQixPIiwiZmlsZSI6Ii4vbGliL3VzZUZvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VGb3JtKGludGl0aWFsID0ge30pIHtcbiAgY29uc3QgW2lucHV0cywgc2V0SW5wdXRzXSA9IHVzZVN0YXRlKGludGl0aWFsKTtcbiAgY29uc3QgaW5pdGlhbFZhbHVlcyA9IE9iamVjdC52YWx1ZXMoaW50aXRpYWwpLmpvaW4oJycpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SW5wdXRzKGludGl0aWFsKTtcbiAgfSwgW2luaXRpYWxWYWx1ZXNdKTtcblxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSkge1xuICAgIGxldCB7IHZhbHVlLCBuYW1lLCB0eXBlIH0gPSBlLnRhcmdldDtcbiAgICBpZiAodHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHZhbHVlID0gcGFyc2VJbnQodmFsdWUpOyAvLyB3aGVuIHdlIHVwZGF0ZSB0aGUgcHJpY2UgaW4gdGhlIGZvcm0gaXQgd2lsbCBzYXZlIGl0IGFzIGEgc3RyaW5nIHNvIHdlIG5lZWQgdG8gY29udmVydCBpdCBiYWNrIHRvIG51bWJlciBiZWNhdXNlIHRoZSBiYWNrZW5kIGV4cGVjdHMgYSBudW1iZXJcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdmaWxlJykge1xuICAgICAgW3ZhbHVlXSA9IGUudGFyZ2V0LmZpbGVzO1xuICAgIH1cbiAgICBzZXRJbnB1dHMoe1xuICAgICAgLi4uaW5wdXRzLFxuICAgICAgW25hbWVdOiB2YWx1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHtcbiAgICBzZXRJbnB1dHMoaW50aXRpYWwpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXJGb3JtKCkge1xuICAgIGNvbnN0IGJsYW5rU3RhdGUgPSBPYmplY3QuZnJvbUVudHJpZXMoXG4gICAgICBPYmplY3QuZW50cmllcyhpbnB1dHMpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiBba2V5LCAnJ10pXG4gICAgKTtcbiAgICBzZXRJbnB1dHMoYmxhbmtTdGF0ZSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGlucHV0cyxcbiAgICBoYW5kbGVDaGFuZ2UsXG4gICAgcmVzZXRGb3JtLFxuICAgIGNsZWFyRm9ybSxcbiAgfTtcblxuICAvLyBmdW5jdGlvbiBzZXRWYWx1ZShrZXksIHZhbHVlKSB7XG4gIC8vICAgc2V0VmFsdWVzKHtcbiAgLy8gICAgIC4uLnZhbHVlcyxcbiAgLy8gICAgIFtrZXldOiB2YWx1ZSxcbiAgLy8gICB9KTtcbiAgLy8gfVxuXG4gIC8vIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAvLyAgIHNldFZhbHVlKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ25hbWUnKSwgZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgLy8gfVxuXG4gIC8vIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAvLyAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIC8vICAgY29uc29sZS5sb2codmFsdWVzKTtcbiAgLy8gfVxuXG4gIC8vIHJldHVybiB7XG4gIC8vICAgaGFuZGxlQ2hhbmdlLFxuICAvLyAgIGhhbmRsZVN1Ym1pdCxcbiAgLy8gICB2YWx1ZXMsXG4gIC8vIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/useForm.js\n");

/***/ })

});