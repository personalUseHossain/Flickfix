"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/universal-cookie";
exports.ids = ["vendor-chunks/universal-cookie"];
exports.modules = {

/***/ "(ssr)/./node_modules/universal-cookie/cjs/Cookies.js":
/*!******************************************************!*\
  !*** ./node_modules/universal-cookie/cjs/Cookies.js ***!
  \******************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\nvar cookie = _interopRequireWildcard(__webpack_require__(/*! cookie */ \"(ssr)/./node_modules/cookie/index.js\"));\nvar _utils = __webpack_require__(/*! ./utils */ \"(ssr)/./node_modules/universal-cookie/cjs/utils.js\");\nfunction _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== \"function\") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }\nfunction _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== \"object\" && typeof obj !== \"function\") { return { \"default\": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== \"default\" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj[\"default\"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar Cookies = /*#__PURE__*/function () {\n  function Cookies(cookies) {\n    var _this = this;\n    var defaultSetOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n    _classCallCheck(this, Cookies);\n    this.changeListeners = [];\n    this.HAS_DOCUMENT_COOKIE = false;\n    this.update = function () {\n      if (!_this.HAS_DOCUMENT_COOKIE) {\n        return;\n      }\n      var previousCookies = _this.cookies;\n      _this.cookies = cookie.parse(document.cookie);\n      _this._checkChanges(previousCookies);\n    };\n    var domCookies = typeof document === 'undefined' ? '' : document.cookie;\n    this.cookies = (0, _utils.parseCookies)(cookies || domCookies);\n    this.defaultSetOptions = defaultSetOptions;\n    this.HAS_DOCUMENT_COOKIE = (0, _utils.hasDocumentCookie)();\n  }\n  _createClass(Cookies, [{\n    key: \"_emitChange\",\n    value: function _emitChange(params) {\n      for (var i = 0; i < this.changeListeners.length; ++i) {\n        this.changeListeners[i](params);\n      }\n    }\n  }, {\n    key: \"_checkChanges\",\n    value: function _checkChanges(newCookies) {\n      var _this2 = this;\n      var names = new Set(Object.keys(newCookies).concat(Object.keys(this.cookies)));\n      names.forEach(function (name) {\n        if (newCookies[name] !== _this2.cookies[name]) {\n          _this2._emitChange({\n            name: name,\n            value: (0, _utils.readCookie)(newCookies[name])\n          });\n        }\n      });\n    }\n  }, {\n    key: \"_startPolling\",\n    value: function _startPolling() {\n      this.pollingInterval = setInterval(this.update, 300);\n    }\n  }, {\n    key: \"_stopPolling\",\n    value: function _stopPolling() {\n      if (this.pollingInterval) {\n        clearInterval(this.pollingInterval);\n      }\n    }\n  }, {\n    key: \"get\",\n    value: function get(name) {\n      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n      if (!options.doNotUpdate) {\n        this.update();\n      }\n      return (0, _utils.readCookie)(this.cookies[name], options);\n    }\n  }, {\n    key: \"getAll\",\n    value: function getAll() {\n      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n      if (!options.doNotUpdate) {\n        this.update();\n      }\n      var result = {};\n      for (var name in this.cookies) {\n        result[name] = (0, _utils.readCookie)(this.cookies[name], options);\n      }\n      return result;\n    }\n  }, {\n    key: \"set\",\n    value: function set(name, value, options) {\n      if (options) {\n        options = Object.assign(Object.assign({}, this.defaultSetOptions), options);\n      } else {\n        options = this.defaultSetOptions;\n      }\n      var stringValue = typeof value === 'string' ? value : JSON.stringify(value);\n      this.cookies = Object.assign(Object.assign({}, this.cookies), _defineProperty({}, name, stringValue));\n      if (this.HAS_DOCUMENT_COOKIE) {\n        document.cookie = cookie.serialize(name, stringValue, options);\n      }\n      this._emitChange({\n        name: name,\n        value: value,\n        options: options\n      });\n    }\n  }, {\n    key: \"remove\",\n    value: function remove(name, options) {\n      var finalOptions = options = Object.assign(Object.assign({}, options), {\n        expires: new Date(1970, 1, 1, 0, 0, 1),\n        maxAge: 0\n      });\n      this.cookies = Object.assign({}, this.cookies);\n      delete this.cookies[name];\n      if (this.HAS_DOCUMENT_COOKIE) {\n        document.cookie = cookie.serialize(name, '', finalOptions);\n      }\n      this._emitChange({\n        name: name,\n        value: undefined,\n        options: options\n      });\n    }\n  }, {\n    key: \"addChangeListener\",\n    value: function addChangeListener(callback) {\n      this.changeListeners.push(callback);\n      if (this.changeListeners.length === 1) {\n        if ((typeof window === \"undefined\" ? \"undefined\" : _typeof(window)) === 'object' && 'cookieStore' in window) {\n          window.cookieStore.addEventListener('change', this.update);\n        } else {\n          this._startPolling();\n        }\n      }\n    }\n  }, {\n    key: \"removeChangeListener\",\n    value: function removeChangeListener(callback) {\n      var idx = this.changeListeners.indexOf(callback);\n      if (idx >= 0) {\n        this.changeListeners.splice(idx, 1);\n      }\n      if (this.changeListeners.length === 0) {\n        if ((typeof window === \"undefined\" ? \"undefined\" : _typeof(window)) === 'object' && 'cookieStore' in window) {\n          window.cookieStore.removeEventListener('change', this.update);\n        } else {\n          this._stopPolling();\n        }\n      }\n    }\n  }]);\n  return Cookies;\n}();\nexports[\"default\"] = Cookies;\nmodule.exports = exports.default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdW5pdmVyc2FsLWNvb2tpZS9janMvQ29va2llcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRixrQkFBa0I7QUFDbEIscUNBQXFDLG1CQUFPLENBQUMsb0RBQVE7QUFDckQsYUFBYSxtQkFBTyxDQUFDLG1FQUFTO0FBQzlCLGlEQUFpRCxnREFBZ0QsdUNBQXVDLHNDQUFzQyxvRkFBb0YsNERBQTREO0FBQzlULHFEQUFxRCw2Q0FBNkMsY0FBYyw4RUFBOEUsU0FBUyxvQkFBb0IsbURBQW1ELCtCQUErQix5QkFBeUIsaUJBQWlCLHNGQUFzRix1QkFBdUIsMkVBQTJFLHFGQUFxRixzQ0FBc0MsNENBQTRDLE9BQU8sOEJBQThCLHlCQUF5QixhQUFhLDBCQUEwQjtBQUMzeEIsc0JBQXNCLDJCQUEyQixvR0FBb0csbUJBQW1CLGlCQUFpQixzSEFBc0g7QUFDL1MsNENBQTRDLDJCQUEyQixrQkFBa0Isa0NBQWtDLG9FQUFvRSxLQUFLLE9BQU8sb0JBQW9CO0FBQy9OLGtEQUFrRCwwQ0FBMEM7QUFDNUYsNENBQTRDLGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQ7QUFDL1AsOERBQThELHNFQUFzRSw4REFBOEQsa0RBQWtELGlCQUFpQixHQUFHO0FBQ3hRLCtCQUErQix1Q0FBdUM7QUFDdEUscUNBQXFDLGlFQUFpRSxzQ0FBc0MsMEJBQTBCLCtDQUErQywyQ0FBMkMsdUVBQXVFO0FBQ3ZVO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUNBQWlDO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRCxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELG1DQUFtQztBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsaUVBQWlFO0FBQ2pFO0FBQ0E7QUFDQSxPQUFPO0FBQ1AscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7QUFDRCxrQkFBa0I7QUFDbEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3ZpZS8uL25vZGVfbW9kdWxlcy91bml2ZXJzYWwtY29va2llL2Nqcy9Db29raWVzLmpzP2M3OTEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBjb29raWUgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiY29va2llXCIpKTtcbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCkgeyBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7IHZhciBjYWNoZUJhYmVsSW50ZXJvcCA9IG5ldyBXZWFrTWFwKCk7IHZhciBjYWNoZU5vZGVJbnRlcm9wID0gbmV3IFdlYWtNYXAoKTsgcmV0dXJuIChfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApIHsgcmV0dXJuIG5vZGVJbnRlcm9wID8gY2FjaGVOb2RlSW50ZXJvcCA6IGNhY2hlQmFiZWxJbnRlcm9wOyB9KShub2RlSW50ZXJvcCk7IH1cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaiwgbm9kZUludGVyb3ApIHsgaWYgKCFub2RlSW50ZXJvcCAmJiBvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHsgcmV0dXJuIHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9IHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCk7IGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkgeyByZXR1cm4gY2FjaGUuZ2V0KG9iaik7IH0gdmFyIG5ld09iaiA9IHt9OyB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKGtleSAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDsgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyBpZiAoY2FjaGUpIHsgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTsgfSByZXR1cm4gbmV3T2JqOyB9XG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGtleSA9IF90b1Byb3BlcnR5S2V5KGtleSk7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7IHZhciBrZXkgPSBfdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTsgcmV0dXJuIF90eXBlb2Yoa2V5KSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHsgaWYgKF90eXBlb2YoaW5wdXQpICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7IHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkgeyB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTsgaWYgKF90eXBlb2YocmVzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlczsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpOyB9XG52YXIgQ29va2llcyA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIENvb2tpZXMoY29va2llcykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdmFyIGRlZmF1bHRTZXRPcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29va2llcyk7XG4gICAgdGhpcy5jaGFuZ2VMaXN0ZW5lcnMgPSBbXTtcbiAgICB0aGlzLkhBU19ET0NVTUVOVF9DT09LSUUgPSBmYWxzZTtcbiAgICB0aGlzLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghX3RoaXMuSEFTX0RPQ1VNRU5UX0NPT0tJRSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgcHJldmlvdXNDb29raWVzID0gX3RoaXMuY29va2llcztcbiAgICAgIF90aGlzLmNvb2tpZXMgPSBjb29raWUucGFyc2UoZG9jdW1lbnQuY29va2llKTtcbiAgICAgIF90aGlzLl9jaGVja0NoYW5nZXMocHJldmlvdXNDb29raWVzKTtcbiAgICB9O1xuICAgIHZhciBkb21Db29raWVzID0gdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJyA/ICcnIDogZG9jdW1lbnQuY29va2llO1xuICAgIHRoaXMuY29va2llcyA9ICgwLCBfdXRpbHMucGFyc2VDb29raWVzKShjb29raWVzIHx8IGRvbUNvb2tpZXMpO1xuICAgIHRoaXMuZGVmYXVsdFNldE9wdGlvbnMgPSBkZWZhdWx0U2V0T3B0aW9ucztcbiAgICB0aGlzLkhBU19ET0NVTUVOVF9DT09LSUUgPSAoMCwgX3V0aWxzLmhhc0RvY3VtZW50Q29va2llKSgpO1xuICB9XG4gIF9jcmVhdGVDbGFzcyhDb29raWVzLCBbe1xuICAgIGtleTogXCJfZW1pdENoYW5nZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZW1pdENoYW5nZShwYXJhbXMpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGFuZ2VMaXN0ZW5lcnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VMaXN0ZW5lcnNbaV0ocGFyYW1zKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2NoZWNrQ2hhbmdlc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfY2hlY2tDaGFuZ2VzKG5ld0Nvb2tpZXMpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuICAgICAgdmFyIG5hbWVzID0gbmV3IFNldChPYmplY3Qua2V5cyhuZXdDb29raWVzKS5jb25jYXQoT2JqZWN0LmtleXModGhpcy5jb29raWVzKSkpO1xuICAgICAgbmFtZXMuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICBpZiAobmV3Q29va2llc1tuYW1lXSAhPT0gX3RoaXMyLmNvb2tpZXNbbmFtZV0pIHtcbiAgICAgICAgICBfdGhpczIuX2VtaXRDaGFuZ2Uoe1xuICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgIHZhbHVlOiAoMCwgX3V0aWxzLnJlYWRDb29raWUpKG5ld0Nvb2tpZXNbbmFtZV0pXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfc3RhcnRQb2xsaW5nXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9zdGFydFBvbGxpbmcoKSB7XG4gICAgICB0aGlzLnBvbGxpbmdJbnRlcnZhbCA9IHNldEludGVydmFsKHRoaXMudXBkYXRlLCAzMDApO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfc3RvcFBvbGxpbmdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3N0b3BQb2xsaW5nKCkge1xuICAgICAgaWYgKHRoaXMucG9sbGluZ0ludGVydmFsKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5wb2xsaW5nSW50ZXJ2YWwpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0KG5hbWUpIHtcbiAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICAgIGlmICghb3B0aW9ucy5kb05vdFVwZGF0ZSkge1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuICgwLCBfdXRpbHMucmVhZENvb2tpZSkodGhpcy5jb29raWVzW25hbWVdLCBvcHRpb25zKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0QWxsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEFsbCgpIHtcbiAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAgIGlmICghb3B0aW9ucy5kb05vdFVwZGF0ZSkge1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgfVxuICAgICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzLmNvb2tpZXMpIHtcbiAgICAgICAgcmVzdWx0W25hbWVdID0gKDAsIF91dGlscy5yZWFkQ29va2llKSh0aGlzLmNvb2tpZXNbbmFtZV0sIG9wdGlvbnMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldChuYW1lLCB2YWx1ZSwgb3B0aW9ucykge1xuICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kZWZhdWx0U2V0T3B0aW9ucyksIG9wdGlvbnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3B0aW9ucyA9IHRoaXMuZGVmYXVsdFNldE9wdGlvbnM7XG4gICAgICB9XG4gICAgICB2YXIgc3RyaW5nVmFsdWUgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gdmFsdWUgOiBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgICB0aGlzLmNvb2tpZXMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuY29va2llcyksIF9kZWZpbmVQcm9wZXJ0eSh7fSwgbmFtZSwgc3RyaW5nVmFsdWUpKTtcbiAgICAgIGlmICh0aGlzLkhBU19ET0NVTUVOVF9DT09LSUUpIHtcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llLnNlcmlhbGl6ZShuYW1lLCBzdHJpbmdWYWx1ZSwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgICB0aGlzLl9lbWl0Q2hhbmdlKHtcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZShuYW1lLCBvcHRpb25zKSB7XG4gICAgICB2YXIgZmluYWxPcHRpb25zID0gb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucyksIHtcbiAgICAgICAgZXhwaXJlczogbmV3IERhdGUoMTk3MCwgMSwgMSwgMCwgMCwgMSksXG4gICAgICAgIG1heEFnZTogMFxuICAgICAgfSk7XG4gICAgICB0aGlzLmNvb2tpZXMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmNvb2tpZXMpO1xuICAgICAgZGVsZXRlIHRoaXMuY29va2llc1tuYW1lXTtcbiAgICAgIGlmICh0aGlzLkhBU19ET0NVTUVOVF9DT09LSUUpIHtcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llLnNlcmlhbGl6ZShuYW1lLCAnJywgZmluYWxPcHRpb25zKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2VtaXRDaGFuZ2Uoe1xuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICB2YWx1ZTogdW5kZWZpbmVkLFxuICAgICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkQ2hhbmdlTGlzdGVuZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkQ2hhbmdlTGlzdGVuZXIoY2FsbGJhY2spIHtcbiAgICAgIHRoaXMuY2hhbmdlTGlzdGVuZXJzLnB1c2goY2FsbGJhY2spO1xuICAgICAgaWYgKHRoaXMuY2hhbmdlTGlzdGVuZXJzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBpZiAoKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZih3aW5kb3cpKSA9PT0gJ29iamVjdCcgJiYgJ2Nvb2tpZVN0b3JlJyBpbiB3aW5kb3cpIHtcbiAgICAgICAgICB3aW5kb3cuY29va2llU3RvcmUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3N0YXJ0UG9sbGluZygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZUNoYW5nZUxpc3RlbmVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUNoYW5nZUxpc3RlbmVyKGNhbGxiYWNrKSB7XG4gICAgICB2YXIgaWR4ID0gdGhpcy5jaGFuZ2VMaXN0ZW5lcnMuaW5kZXhPZihjYWxsYmFjayk7XG4gICAgICBpZiAoaWR4ID49IDApIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VMaXN0ZW5lcnMuc3BsaWNlKGlkeCwgMSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jaGFuZ2VMaXN0ZW5lcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGlmICgodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKHdpbmRvdykpID09PSAnb2JqZWN0JyAmJiAnY29va2llU3RvcmUnIGluIHdpbmRvdykge1xuICAgICAgICAgIHdpbmRvdy5jb29raWVTdG9yZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnVwZGF0ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fc3RvcFBvbGxpbmcoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gQ29va2llcztcbn0oKTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gQ29va2llcztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/universal-cookie/cjs/Cookies.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/universal-cookie/cjs/index.js":
/*!****************************************************!*\
  !*** ./node_modules/universal-cookie/cjs/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nvar _exportNames = {};\nexports[\"default\"] = void 0;\nvar _Cookies = _interopRequireDefault(__webpack_require__(/*! ./Cookies */ \"(ssr)/./node_modules/universal-cookie/cjs/Cookies.js\"));\nvar _types = __webpack_require__(/*! ./types */ \"(ssr)/./node_modules/universal-cookie/cjs/types.js\");\nObject.keys(_types).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;\n  if (key in exports && exports[key] === _types[key]) return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _types[key];\n    }\n  });\n});\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\nvar _default = _Cookies[\"default\"];\nexports[\"default\"] = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdW5pdmVyc2FsLWNvb2tpZS9janMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Y7QUFDQSxrQkFBa0I7QUFDbEIsc0NBQXNDLG1CQUFPLENBQUMsdUVBQVc7QUFDekQsYUFBYSxtQkFBTyxDQUFDLG1FQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0QsdUNBQXVDLHVDQUF1QztBQUM5RTtBQUNBLGtCQUFrQiIsInNvdXJjZXMiOlsid2VicGFjazovL21vdmllLy4vbm9kZV9tb2R1bGVzL3VuaXZlcnNhbC1jb29raWUvY2pzL2luZGV4LmpzPzE3YmIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgX2V4cG9ydE5hbWVzID0ge307XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfQ29va2llcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQ29va2llc1wiKSk7XG52YXIgX3R5cGVzID0gcmVxdWlyZShcIi4vdHlwZXNcIik7XG5PYmplY3Qua2V5cyhfdHlwZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX2V4cG9ydE5hbWVzLCBrZXkpKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF90eXBlc1trZXldKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF90eXBlc1trZXldO1xuICAgIH1cbiAgfSk7XG59KTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxudmFyIF9kZWZhdWx0ID0gX0Nvb2tpZXNbXCJkZWZhdWx0XCJdO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/universal-cookie/cjs/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/universal-cookie/cjs/types.js":
/*!****************************************************!*\
  !*** ./node_modules/universal-cookie/cjs/types.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdW5pdmVyc2FsLWNvb2tpZS9janMvdHlwZXMuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW92aWUvLi9ub2RlX21vZHVsZXMvdW5pdmVyc2FsLWNvb2tpZS9janMvdHlwZXMuanM/NWI2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/universal-cookie/cjs/types.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/universal-cookie/cjs/utils.js":
/*!****************************************************!*\
  !*** ./node_modules/universal-cookie/cjs/utils.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.cleanCookies = cleanCookies;\nexports.hasDocumentCookie = hasDocumentCookie;\nexports.parseCookies = parseCookies;\nexports.readCookie = readCookie;\nvar cookie = _interopRequireWildcard(__webpack_require__(/*! cookie */ \"(ssr)/./node_modules/cookie/index.js\"));\nfunction _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== \"function\") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }\nfunction _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== \"object\" && typeof obj !== \"function\") { return { \"default\": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== \"default\" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj[\"default\"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction hasDocumentCookie() {\n  // Can we get/set cookies on document.cookie?\n  return (typeof document === \"undefined\" ? \"undefined\" : _typeof(document)) === 'object' && typeof document.cookie === 'string';\n}\nfunction cleanCookies() {\n  document.cookie.split(';').forEach(function (c) {\n    document.cookie = c.replace(/^ +/, '').replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/');\n  });\n}\nfunction parseCookies(cookies) {\n  if (typeof cookies === 'string') {\n    return cookie.parse(cookies);\n  } else if (_typeof(cookies) === 'object' && cookies !== null) {\n    return cookies;\n  } else {\n    return {};\n  }\n}\nfunction readCookie(value) {\n  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  var cleanValue = cleanupCookieValue(value);\n  if (!options.doNotParse) {\n    try {\n      return JSON.parse(cleanValue);\n    } catch (e) {\n      // At least we tried\n    }\n  }\n  // Ignore clean value if we failed the deserialization\n  // It is not relevant anymore to trim those values\n  return value;\n}\nfunction cleanupCookieValue(value) {\n  // express prepend j: before serializing a cookie\n  if (value && value[0] === 'j' && value[1] === ':') {\n    return value.substr(2);\n  }\n  return value;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdW5pdmVyc2FsLWNvb2tpZS9janMvdXRpbHMuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysb0JBQW9CO0FBQ3BCLHlCQUF5QjtBQUN6QixvQkFBb0I7QUFDcEIsa0JBQWtCO0FBQ2xCLHFDQUFxQyxtQkFBTyxDQUFDLG9EQUFRO0FBQ3JELGlEQUFpRCxnREFBZ0QsdUNBQXVDLHNDQUFzQyxvRkFBb0YsNERBQTREO0FBQzlULHFEQUFxRCw2Q0FBNkMsY0FBYyw4RUFBOEUsU0FBUyxvQkFBb0IsbURBQW1ELCtCQUErQix5QkFBeUIsaUJBQWlCLHNGQUFzRix1QkFBdUIsMkVBQTJFLHFGQUFxRixzQ0FBc0MsNENBQTRDLE9BQU8sOEJBQThCLHlCQUF5QixhQUFhLDBCQUEwQjtBQUMzeEIsc0JBQXNCLDJCQUEyQixvR0FBb0csbUJBQW1CLGlCQUFpQixzSEFBc0g7QUFDL1M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQiw2REFBNkQseUNBQXlDO0FBQ3RHLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL21vdmllLy4vbm9kZV9tb2R1bGVzL3VuaXZlcnNhbC1jb29raWUvY2pzL3V0aWxzLmpzPzZjOTkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNsZWFuQ29va2llcyA9IGNsZWFuQ29va2llcztcbmV4cG9ydHMuaGFzRG9jdW1lbnRDb29raWUgPSBoYXNEb2N1bWVudENvb2tpZTtcbmV4cG9ydHMucGFyc2VDb29raWVzID0gcGFyc2VDb29raWVzO1xuZXhwb3J0cy5yZWFkQ29va2llID0gcmVhZENvb2tpZTtcbnZhciBjb29raWUgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiY29va2llXCIpKTtcbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCkgeyBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7IHZhciBjYWNoZUJhYmVsSW50ZXJvcCA9IG5ldyBXZWFrTWFwKCk7IHZhciBjYWNoZU5vZGVJbnRlcm9wID0gbmV3IFdlYWtNYXAoKTsgcmV0dXJuIChfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApIHsgcmV0dXJuIG5vZGVJbnRlcm9wID8gY2FjaGVOb2RlSW50ZXJvcCA6IGNhY2hlQmFiZWxJbnRlcm9wOyB9KShub2RlSW50ZXJvcCk7IH1cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaiwgbm9kZUludGVyb3ApIHsgaWYgKCFub2RlSW50ZXJvcCAmJiBvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHsgcmV0dXJuIHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9IHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCk7IGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkgeyByZXR1cm4gY2FjaGUuZ2V0KG9iaik7IH0gdmFyIG5ld09iaiA9IHt9OyB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKGtleSAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDsgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyBpZiAoY2FjaGUpIHsgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTsgfSByZXR1cm4gbmV3T2JqOyB9XG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG5mdW5jdGlvbiBoYXNEb2N1bWVudENvb2tpZSgpIHtcbiAgLy8gQ2FuIHdlIGdldC9zZXQgY29va2llcyBvbiBkb2N1bWVudC5jb29raWU/XG4gIHJldHVybiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoZG9jdW1lbnQpKSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIGRvY3VtZW50LmNvb2tpZSA9PT0gJ3N0cmluZyc7XG59XG5mdW5jdGlvbiBjbGVhbkNvb2tpZXMoKSB7XG4gIGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcbiAgICBkb2N1bWVudC5jb29raWUgPSBjLnJlcGxhY2UoL14gKy8sICcnKS5yZXBsYWNlKC89LiovLCAnPTtleHBpcmVzPScgKyBuZXcgRGF0ZSgpLnRvVVRDU3RyaW5nKCkgKyAnO3BhdGg9LycpO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHBhcnNlQ29va2llcyhjb29raWVzKSB7XG4gIGlmICh0eXBlb2YgY29va2llcyA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gY29va2llLnBhcnNlKGNvb2tpZXMpO1xuICB9IGVsc2UgaWYgKF90eXBlb2YoY29va2llcykgPT09ICdvYmplY3QnICYmIGNvb2tpZXMgIT09IG51bGwpIHtcbiAgICByZXR1cm4gY29va2llcztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge307XG4gIH1cbn1cbmZ1bmN0aW9uIHJlYWRDb29raWUodmFsdWUpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICB2YXIgY2xlYW5WYWx1ZSA9IGNsZWFudXBDb29raWVWYWx1ZSh2YWx1ZSk7XG4gIGlmICghb3B0aW9ucy5kb05vdFBhcnNlKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKGNsZWFuVmFsdWUpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIEF0IGxlYXN0IHdlIHRyaWVkXG4gICAgfVxuICB9XG4gIC8vIElnbm9yZSBjbGVhbiB2YWx1ZSBpZiB3ZSBmYWlsZWQgdGhlIGRlc2VyaWFsaXphdGlvblxuICAvLyBJdCBpcyBub3QgcmVsZXZhbnQgYW55bW9yZSB0byB0cmltIHRob3NlIHZhbHVlc1xuICByZXR1cm4gdmFsdWU7XG59XG5mdW5jdGlvbiBjbGVhbnVwQ29va2llVmFsdWUodmFsdWUpIHtcbiAgLy8gZXhwcmVzcyBwcmVwZW5kIGo6IGJlZm9yZSBzZXJpYWxpemluZyBhIGNvb2tpZVxuICBpZiAodmFsdWUgJiYgdmFsdWVbMF0gPT09ICdqJyAmJiB2YWx1ZVsxXSA9PT0gJzonKSB7XG4gICAgcmV0dXJuIHZhbHVlLnN1YnN0cigyKTtcbiAgfVxuICByZXR1cm4gdmFsdWU7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/universal-cookie/cjs/utils.js\n");

/***/ })

};
;