module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/categories.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/categories.js":
/*!*****************************!*\
  !*** ./pages/categories.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/GlobalState */ "./store/GlobalState.js");
/* harmony import */ var _store_Actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/Actions */ "./store/Actions.js");
/* harmony import */ var _utils_fetchData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/fetchData */ "./utils/fetchData.js");

var _jsxFileName = "C:\\Users\\meobi\\OneDrive\\M\xE1y t\xEDnh\\banvetau_kltn\\pages\\categories.js";






const Categories = () => {
  const {
    0: name,
    1: setName
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('');
  const {
    state,
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_store_GlobalState__WEBPACK_IMPORTED_MODULE_3__["DataContext"]);
  const {
    categories,
    auth
  } = state;
  const {
    0: id,
    1: setId
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('');

  const createCategory = async () => {
    if (auth.user.role !== 'admin') return dispatch({
      type: 'NOTIFY',
      payload: {
        error: 'Authentication is not vaild.'
      }
    });
    if (!name) return dispatch({
      type: 'NOTIFY',
      payload: {
        error: 'Name can not be left blank.'
      }
    });
    dispatch({
      type: 'NOTIFY',
      payload: {
        loading: true
      }
    });
    let res;

    if (id) {
      res = await Object(_utils_fetchData__WEBPACK_IMPORTED_MODULE_5__["putData"])(`categories/${id}`, {
        name
      }, auth.token);
      if (res.err) return dispatch({
        type: 'NOTIFY',
        payload: {
          error: res.err
        }
      });
      dispatch(Object(_store_Actions__WEBPACK_IMPORTED_MODULE_4__["updateItem"])(categories, id, res.category, 'ADD_CATEGORIES'));
    } else {
      res = await Object(_utils_fetchData__WEBPACK_IMPORTED_MODULE_5__["postData"])('categories', {
        name
      }, auth.token);
      if (res.err) return dispatch({
        type: 'NOTIFY',
        payload: {
          error: res.err
        }
      });
      dispatch({
        type: "ADD_CATEGORIES",
        payload: [...categories, res.newCategory]
      });
    }

    setName('');
    setId('');
    return dispatch({
      type: 'NOTIFY',
      payload: {
        success: res.msg
      }
    });
  };

  const handleEditCategory = catogory => {
    setId(catogory._id);
    setName(catogory.name);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "col-md-6 mx-auto my-3",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Categories"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "input-group mb-3",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        className: "form-control",
        placeholder: "Add a new category",
        value: name,
        onChange: e => setName(e.target.value)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: "btn btn-secondary ml-1",
        onClick: createCategory,
        children: id ? "Update" : "Create"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, undefined), categories.map(catogory => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "card my-2 text-capitalize",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "card-body d-flex justify-content-between",
        children: [catogory.name, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            cursor: 'pointer'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "fas fa-edit mr-2 text-info",
            onClick: () => handleEditCategory(catogory)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 33
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "fas fa-trash-alt text-danger",
            "data-toggle": "modal",
            "data-target": "#exampleModal",
            onClick: () => dispatch({
              type: 'ADD_MODAL',
              payload: [{
                data: categories,
                id: catogory._id,
                title: catogory.name,
                type: 'ADD_CATEGORIES'
              }]
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 33
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 29
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 25
      }, undefined)
    }, catogory._id, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Categories);

/***/ }),

/***/ "./store/Actions.js":
/*!**************************!*\
  !*** ./store/Actions.js ***!
  \**************************/
/*! exports provided: ACTIONS, addToCart, decrease, increase, deleteItem, updateItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTIONS", function() { return ACTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToCart", function() { return addToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decrease", function() { return decrease; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "increase", function() { return increase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteItem", function() { return deleteItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateItem", function() { return updateItem; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const ACTIONS = {
  NOTIFY: 'NOTIFY',
  AUTH: 'AUTH',
  ADD_CART: 'ADD_CART',
  ADD_MODAL: 'ADD_MODAL',
  ADD_ORDERS: 'ADD_ORDERS',
  ADD_USERS: 'ADD_USERS',
  ADD_CATEGORIES: 'ADD_CATEGORIES'
};
const addToCart = (product, cart) => {
  if (product.inStock === 0) return {
    type: 'NOTIFY',
    payload: {
      error: 'This product is out of stock.'
    }
  };
  const check = cart.every(item => {
    return item._id !== product._id;
  });
  if (!check) return {
    type: 'NOTIFY',
    payload: {
      error: 'The product has been added to cart.'
    }
  };
  return {
    type: 'ADD_CART',
    payload: [...cart, _objectSpread(_objectSpread({}, product), {}, {
      quantity: 1
    })]
  };
};
const decrease = (data, id) => {
  const newData = [...data];
  newData.forEach(item => {
    if (item._id === id) item.quantity -= 1;
  });
  return {
    type: 'ADD_CART',
    payload: newData
  };
};
const increase = (data, id) => {
  const newData = [...data];
  newData.forEach(item => {
    if (item._id === id) item.quantity += 1;
  });
  return {
    type: 'ADD_CART',
    payload: newData
  };
};
const deleteItem = (data, id, type) => {
  const newData = data.filter(item => item._id !== id);
  return {
    type,
    payload: newData
  };
};
const updateItem = (data, id, post, type) => {
  const newData = data.map(item => item._id === id ? post : item);
  return {
    type,
    payload: newData
  };
};

/***/ }),

/***/ "./store/GlobalState.js":
/*!******************************!*\
  !*** ./store/GlobalState.js ***!
  \******************************/
/*! exports provided: DataContext, DataProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataContext", function() { return DataContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataProvider", function() { return DataProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Reducers */ "./store/Reducers.js");
/* harmony import */ var _utils_fetchData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/fetchData */ "./utils/fetchData.js");

var _jsxFileName = "C:\\Users\\meobi\\OneDrive\\M\xE1y t\xEDnh\\banvetau_kltn\\store\\GlobalState.js";



const DataContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])();
const DataProvider = ({
  children
}) => {
  const initialState = {
    notify: {},
    auth: {},
    cart: [],
    modal: [],
    orders: [],
    users: [],
    categories: []
  };
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(_Reducers__WEBPACK_IMPORTED_MODULE_2__["default"], initialState);
  const {
    cart,
    auth
  } = state;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const firstLogin = localStorage.getItem("firstLogin");

    if (firstLogin) {
      Object(_utils_fetchData__WEBPACK_IMPORTED_MODULE_3__["getData"])('auth/accessToken').then(res => {
        if (res.err) return localStorage.removeItem("firstLogin");
        dispatch({
          type: "AUTH",
          payload: {
            token: res.access_token,
            user: res.user
          }
        });
      });
    }

    Object(_utils_fetchData__WEBPACK_IMPORTED_MODULE_3__["getData"])('categories').then(res => {
      if (res.err) return dispatch({
        type: 'NOTIFY',
        payload: {
          error: res.err
        }
      });
      dispatch({
        type: "ADD_CATEGORIES",
        payload: res.categories
      });
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const __next__cart01__devat = JSON.parse(localStorage.getItem('__next__cart01__devat'));

    if (__next__cart01__devat) dispatch({
      type: 'ADD_CART',
      payload: __next__cart01__devat
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    localStorage.setItem('__next__cart01__devat', JSON.stringify(cart));
  }, [cart]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (auth.token) {
      Object(_utils_fetchData__WEBPACK_IMPORTED_MODULE_3__["getData"])('order', auth.token).then(res => {
        if (res.err) return dispatch({
          type: 'NOTIFY',
          payload: {
            error: res.err
          }
        });
        dispatch({
          type: 'ADD_ORDERS',
          payload: res.orders
        });
      });

      if (auth.user.role === 'admin') {
        Object(_utils_fetchData__WEBPACK_IMPORTED_MODULE_3__["getData"])('user', auth.token).then(res => {
          if (res.err) return dispatch({
            type: 'NOTIFY',
            payload: {
              error: res.err
            }
          });
          dispatch({
            type: 'ADD_USERS',
            payload: res.users
          });
        });
      }
    } else {
      dispatch({
        type: 'ADD_ORDERS',
        payload: []
      });
      dispatch({
        type: 'ADD_USERS',
        payload: []
      });
    }
  }, [auth.token]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DataContext.Provider, {
    value: {
      state,
      dispatch
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./store/Reducers.js":
/*!***************************!*\
  !*** ./store/Reducers.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Actions */ "./store/Actions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const reducers = (state, action) => {
  switch (action.type) {
    case _Actions__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].NOTIFY:
      return _objectSpread(_objectSpread({}, state), {}, {
        notify: action.payload
      });

    case _Actions__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].AUTH:
      return _objectSpread(_objectSpread({}, state), {}, {
        auth: action.payload
      });

    case _Actions__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].ADD_CART:
      return _objectSpread(_objectSpread({}, state), {}, {
        cart: action.payload
      });

    case _Actions__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].ADD_MODAL:
      return _objectSpread(_objectSpread({}, state), {}, {
        modal: action.payload
      });

    case _Actions__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].ADD_ORDERS:
      return _objectSpread(_objectSpread({}, state), {}, {
        orders: action.payload
      });

    case _Actions__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].ADD_USERS:
      return _objectSpread(_objectSpread({}, state), {}, {
        users: action.payload
      });

    case _Actions__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].ADD_CATEGORIES:
      return _objectSpread(_objectSpread({}, state), {}, {
        categories: action.payload
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducers);

/***/ }),

/***/ "./utils/fetchData.js":
/*!****************************!*\
  !*** ./utils/fetchData.js ***!
  \****************************/
/*! exports provided: getData, postData, putData, patchData, deleteData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getData", function() { return getData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "putData", function() { return putData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patchData", function() { return patchData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteData", function() { return deleteData; });
const baseUrl = "http://localhost:3000";
const getData = async (url, token) => {
  const res = await fetch(`${baseUrl}/api/${url}`, {
    method: 'GET',
    headers: {
      'Authorization': token
    }
  });
  const data = await res.json();
  return data;
};
const postData = async (url, post, token) => {
  const res = await fetch(`${baseUrl}/api/${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
    body: JSON.stringify(post)
  });
  const data = await res.json();
  return data;
};
const putData = async (url, post, token) => {
  const res = await fetch(`${baseUrl}/api/${url}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
    body: JSON.stringify(post)
  });
  const data = await res.json();
  return data;
};
const patchData = async (url, post, token) => {
  const res = await fetch(`${baseUrl}/api/${url}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
    body: JSON.stringify(post)
  });
  const data = await res.json();
  return data;
};
const deleteData = async (url, token) => {
  const res = await fetch(`${baseUrl}/api/${url}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    }
  });
  const data = await res.json();
  return data;
};

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2F0ZWdvcmllcy5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9BY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3N0b3JlL0dsb2JhbFN0YXRlLmpzIiwid2VicGFjazovLy8uL3N0b3JlL1JlZHVjZXJzLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2ZldGNoRGF0YS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkNhdGVnb3JpZXMiLCJuYW1lIiwic2V0TmFtZSIsInVzZVN0YXRlIiwic3RhdGUiLCJkaXNwYXRjaCIsInVzZUNvbnRleHQiLCJEYXRhQ29udGV4dCIsImNhdGVnb3JpZXMiLCJhdXRoIiwiaWQiLCJzZXRJZCIsImNyZWF0ZUNhdGVnb3J5IiwidXNlciIsInJvbGUiLCJ0eXBlIiwicGF5bG9hZCIsImVycm9yIiwibG9hZGluZyIsInJlcyIsInB1dERhdGEiLCJ0b2tlbiIsImVyciIsInVwZGF0ZUl0ZW0iLCJjYXRlZ29yeSIsInBvc3REYXRhIiwibmV3Q2F0ZWdvcnkiLCJzdWNjZXNzIiwibXNnIiwiaGFuZGxlRWRpdENhdGVnb3J5IiwiY2F0b2dvcnkiLCJfaWQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJjdXJzb3IiLCJkYXRhIiwidGl0bGUiLCJBQ1RJT05TIiwiTk9USUZZIiwiQVVUSCIsIkFERF9DQVJUIiwiQUREX01PREFMIiwiQUREX09SREVSUyIsIkFERF9VU0VSUyIsIkFERF9DQVRFR09SSUVTIiwiYWRkVG9DYXJ0IiwicHJvZHVjdCIsImNhcnQiLCJpblN0b2NrIiwiY2hlY2siLCJldmVyeSIsIml0ZW0iLCJxdWFudGl0eSIsImRlY3JlYXNlIiwibmV3RGF0YSIsImZvckVhY2giLCJpbmNyZWFzZSIsImRlbGV0ZUl0ZW0iLCJmaWx0ZXIiLCJwb3N0IiwiY3JlYXRlQ29udGV4dCIsIkRhdGFQcm92aWRlciIsImNoaWxkcmVuIiwiaW5pdGlhbFN0YXRlIiwibm90aWZ5IiwibW9kYWwiLCJvcmRlcnMiLCJ1c2VycyIsInVzZVJlZHVjZXIiLCJyZWR1Y2VycyIsInVzZUVmZmVjdCIsImZpcnN0TG9naW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZ2V0RGF0YSIsInRoZW4iLCJyZW1vdmVJdGVtIiwiYWNjZXNzX3Rva2VuIiwiX19uZXh0X19jYXJ0MDFfX2RldmF0IiwiSlNPTiIsInBhcnNlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImFjdGlvbiIsImJhc2VVcmwiLCJwcm9jZXNzIiwidXJsIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwianNvbiIsImJvZHkiLCJwYXRjaERhdGEiLCJkZWxldGVEYXRhIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNB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QUFHLE1BQU1sQixHQUFHLENBQUN5RSxJQUFKLEVBQW5CO0FBQ0EsU0FBT3ZELElBQVA7QUFDSCxDQVhNLEM7Ozs7Ozs7Ozs7O0FDM0RQLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2NhdGVnb3JpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2NhdGVnb3JpZXMuanNcIik7XG4iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQge3VzZUNvbnRleHQsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7RGF0YUNvbnRleHR9IGZyb20gJy4uL3N0b3JlL0dsb2JhbFN0YXRlJ1xuaW1wb3J0IHt1cGRhdGVJdGVtfSBmcm9tICcuLi9zdG9yZS9BY3Rpb25zJ1xuaW1wb3J0IHsgcG9zdERhdGEsIHB1dERhdGEgfSBmcm9tIFwiLi4vdXRpbHMvZmV0Y2hEYXRhXCI7XG5cbmNvbnN0IENhdGVnb3JpZXMgPSAoKSA9PiB7XG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpXG5cbiAgICBjb25zdCB7c3RhdGUsIGRpc3BhdGNofSA9IHVzZUNvbnRleHQoRGF0YUNvbnRleHQpXG4gICAgY29uc3Qge2NhdGVnb3JpZXMsIGF1dGh9ID0gc3RhdGVcbiAgICBcbiAgICBjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKCcnKVxuXG4gICAgY29uc3QgY3JlYXRlQ2F0ZWdvcnkgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGlmKGF1dGgudXNlci5yb2xlICE9PSAnYWRtaW4nKVxuICAgICAgICByZXR1cm4gZGlzcGF0Y2goe3R5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7ZXJyb3I6ICdBdXRoZW50aWNhdGlvbiBpcyBub3QgdmFpbGQuJ319KVxuXG4gICAgICAgIGlmKCFuYW1lKSByZXR1cm4gZGlzcGF0Y2goe3R5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7ZXJyb3I6ICdOYW1lIGNhbiBub3QgYmUgbGVmdCBibGFuay4nfX0pXG5cbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7bG9hZGluZzogdHJ1ZX19KVxuXG4gICAgICAgIGxldCByZXM7XG4gICAgICAgIGlmKGlkKXtcbiAgICAgICAgICAgIHJlcyA9IGF3YWl0IHB1dERhdGEoYGNhdGVnb3JpZXMvJHtpZH1gLCB7bmFtZX0sIGF1dGgudG9rZW4pXG4gICAgICAgICAgICBpZihyZXMuZXJyKSByZXR1cm4gZGlzcGF0Y2goe3R5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7ZXJyb3I6IHJlcy5lcnJ9fSlcbiAgICAgICAgICAgIGRpc3BhdGNoKHVwZGF0ZUl0ZW0oY2F0ZWdvcmllcywgaWQsIHJlcy5jYXRlZ29yeSwgJ0FERF9DQVRFR09SSUVTJykpXG5cbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXMgPSBhd2FpdCBwb3N0RGF0YSgnY2F0ZWdvcmllcycsIHtuYW1lfSwgYXV0aC50b2tlbilcbiAgICAgICAgICAgIGlmKHJlcy5lcnIpIHJldHVybiBkaXNwYXRjaCh7dHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHtlcnJvcjogcmVzLmVycn19KVxuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwiQUREX0NBVEVHT1JJRVNcIiwgcGF5bG9hZDogWy4uLmNhdGVnb3JpZXMsIHJlcy5uZXdDYXRlZ29yeV19KVxuICAgICAgICB9XG4gICAgICAgIHNldE5hbWUoJycpXG4gICAgICAgIHNldElkKCcnKVxuICAgICAgICByZXR1cm4gZGlzcGF0Y2goe3R5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7c3VjY2VzczogcmVzLm1zZ319KVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUVkaXRDYXRlZ29yeSA9IChjYXRvZ29yeSkgPT4ge1xuICAgICAgICBzZXRJZChjYXRvZ29yeS5faWQpXG4gICAgICAgIHNldE5hbWUoY2F0b2dvcnkubmFtZSlcbiAgICB9XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgbXgtYXV0byBteS0zXCI+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+Q2F0ZWdvcmllczwvdGl0bGU+XG4gICAgICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbWItM1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgYSBuZXcgY2F0ZWdvcnlcIiB2YWx1ZT17bmFtZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX0gLz5cblxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgbWwtMVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17Y3JlYXRlQ2F0ZWdvcnl9PlxuICAgICAgICAgICAgICAgICAgICB7aWQgPyBcIlVwZGF0ZVwiOiBcIkNyZWF0ZVwifVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzLm1hcChjYXRvZ29yeSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtjYXRvZ29yeS5faWR9IGNsYXNzTmFtZT1cImNhcmQgbXktMiB0ZXh0LWNhcGl0YWxpemVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRvZ29yeS5uYW1lfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2N1cnNvcjogJ3BvaW50ZXInfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1lZGl0IG1yLTIgdGV4dC1pbmZvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRWRpdENhdGVnb3J5KGNhdG9nb3J5KX0+PC9pPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS10cmFzaC1hbHQgdGV4dC1kYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjZXhhbXBsZU1vZGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0FERF9NT0RBTCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiBbeyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBjYXRlZ29yaWVzLCBpZDogY2F0b2dvcnkuX2lkLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogY2F0b2dvcnkubmFtZSwgdHlwZTogJ0FERF9DQVRFR09SSUVTJyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfSA+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcmllcyIsImV4cG9ydCBjb25zdCBBQ1RJT05TID0ge1xuICAgIE5PVElGWTogJ05PVElGWScsXG4gICAgQVVUSDogJ0FVVEgnLFxuICAgIEFERF9DQVJUOiAnQUREX0NBUlQnLFxuICAgIEFERF9NT0RBTDogJ0FERF9NT0RBTCcsXG4gICAgQUREX09SREVSUzogJ0FERF9PUkRFUlMnLFxuICAgIEFERF9VU0VSUzogJ0FERF9VU0VSUycsXG4gICAgQUREX0NBVEVHT1JJRVM6ICdBRERfQ0FURUdPUklFUycsXG59XG5cbmV4cG9ydCBjb25zdCBhZGRUb0NhcnQgPSAocHJvZHVjdCwgY2FydCkgPT4ge1xuICAgIGlmKHByb2R1Y3QuaW5TdG9jayA9PT0gMClcbiAgICByZXR1cm4gKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHtlcnJvcjogJ1RoaXMgcHJvZHVjdCBpcyBvdXQgb2Ygc3RvY2suJ30gfSkgXG5cbiAgICBjb25zdCBjaGVjayA9IGNhcnQuZXZlcnkoaXRlbSA9PiB7XG4gICAgICAgIHJldHVybiBpdGVtLl9pZCAhPT0gcHJvZHVjdC5faWRcbiAgICB9KVxuXG4gICAgaWYoIWNoZWNrKSByZXR1cm4gKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHtlcnJvcjogJ1RoZSBwcm9kdWN0IGhhcyBiZWVuIGFkZGVkIHRvIGNhcnQuJ30gfSkgXG5cbiAgICByZXR1cm4gKHsgdHlwZTogJ0FERF9DQVJUJywgcGF5bG9hZDogWy4uLmNhcnQsIHsuLi5wcm9kdWN0LCBxdWFudGl0eTogMX1dIH0pIFxufVxuXG5leHBvcnQgY29uc3QgZGVjcmVhc2UgPSAoZGF0YSwgaWQpID0+IHtcbiAgICBjb25zdCBuZXdEYXRhID0gWy4uLmRhdGFdXG4gICAgbmV3RGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpZihpdGVtLl9pZCA9PT0gaWQpIGl0ZW0ucXVhbnRpdHkgLT0gMVxuICAgIH0pXG5cbiAgICByZXR1cm4gKHsgdHlwZTogJ0FERF9DQVJUJywgcGF5bG9hZDogbmV3RGF0YSB9KVxufVxuXG5leHBvcnQgY29uc3QgaW5jcmVhc2UgPSAoZGF0YSwgaWQpID0+IHtcbiAgICBjb25zdCBuZXdEYXRhID0gWy4uLmRhdGFdXG4gICAgbmV3RGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpZihpdGVtLl9pZCA9PT0gaWQpIGl0ZW0ucXVhbnRpdHkgKz0gMVxuICAgIH0pXG5cbiAgICByZXR1cm4gKHsgdHlwZTogJ0FERF9DQVJUJywgcGF5bG9hZDogbmV3RGF0YSB9KVxufVxuXG5cbmV4cG9ydCBjb25zdCBkZWxldGVJdGVtID0gKGRhdGEsIGlkLCB0eXBlKSA9PiB7XG4gICAgY29uc3QgbmV3RGF0YSA9IGRhdGEuZmlsdGVyKGl0ZW0gPT4gaXRlbS5faWQgIT09IGlkKVxuICAgIHJldHVybiAoeyB0eXBlLCBwYXlsb2FkOiBuZXdEYXRhfSlcbn1cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUl0ZW0gPSAoZGF0YSwgaWQsIHBvc3QsIHR5cGUpID0+IHtcbiAgICBjb25zdCBuZXdEYXRhID0gZGF0YS5tYXAoaXRlbSA9PiAoaXRlbS5faWQgPT09IGlkID8gcG9zdCA6IGl0ZW0pKVxuICAgIHJldHVybiAoeyB0eXBlLCBwYXlsb2FkOiBuZXdEYXRhfSlcbn0iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VSZWR1Y2VyLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCByZWR1Y2VycyBmcm9tICcuL1JlZHVjZXJzJ1xuaW1wb3J0IHsgZ2V0RGF0YSB9IGZyb20gJy4uL3V0aWxzL2ZldGNoRGF0YSdcblxuXG5leHBvcnQgY29uc3QgRGF0YUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcblxuXG5leHBvcnQgY29uc3QgRGF0YVByb3ZpZGVyID0gKHtjaGlsZHJlbn0pID0+IHtcbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB7IFxuICAgICAgICBub3RpZnk6IHt9LCBhdXRoOiB7fSwgY2FydDogW10sIG1vZGFsOiBbXSwgb3JkZXJzOiBbXSwgdXNlcnM6IFtdLCBjYXRlZ29yaWVzOiBbXVxuICAgIH1cblxuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VycywgaW5pdGlhbFN0YXRlKVxuICAgIGNvbnN0IHsgY2FydCwgYXV0aCB9ID0gc3RhdGVcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZpcnN0TG9naW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZpcnN0TG9naW5cIik7XG4gICAgICAgIGlmKGZpcnN0TG9naW4pe1xuICAgICAgICAgICAgZ2V0RGF0YSgnYXV0aC9hY2Nlc3NUb2tlbicpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZihyZXMuZXJyKSByZXR1cm4gbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJmaXJzdExvZ2luXCIpXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyBcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJBVVRIXCIsXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuOiByZXMuYWNjZXNzX3Rva2VuLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcjogcmVzLnVzZXJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgZ2V0RGF0YSgnY2F0ZWdvcmllcycpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmKHJlcy5lcnIpIHJldHVybiBkaXNwYXRjaCh7dHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHtlcnJvcjogcmVzLmVycn19KVxuXG4gICAgICAgICAgICBkaXNwYXRjaCh7IFxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQUREX0NBVEVHT1JJRVNcIixcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiByZXMuY2F0ZWdvcmllc1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgfSxbXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IF9fbmV4dF9fY2FydDAxX19kZXZhdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9fY2FydDAxX19kZXZhdCcpKVxuXG4gICAgICAgIGlmKF9fbmV4dF9fY2FydDAxX19kZXZhdCkgZGlzcGF0Y2goeyB0eXBlOiAnQUREX0NBUlQnLCBwYXlsb2FkOiBfX25leHRfX2NhcnQwMV9fZGV2YXQgfSlcbiAgICB9LCBbXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfX2NhcnQwMV9fZGV2YXQnLCBKU09OLnN0cmluZ2lmeShjYXJ0KSlcbiAgICB9LCBbY2FydF0pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZihhdXRoLnRva2VuKXtcbiAgICAgICAgICAgIGdldERhdGEoJ29yZGVyJywgYXV0aC50b2tlbilcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYocmVzLmVycikgcmV0dXJuIGRpc3BhdGNoKHt0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge2Vycm9yOiByZXMuZXJyfX0pXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdBRERfT1JERVJTJywgcGF5bG9hZDogcmVzLm9yZGVyc30pXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBpZihhdXRoLnVzZXIucm9sZSA9PT0gJ2FkbWluJyl7XG4gICAgICAgICAgICAgICAgZ2V0RGF0YSgndXNlcicsIGF1dGgudG9rZW4pXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzLmVycikgcmV0dXJuIGRpc3BhdGNoKHt0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge2Vycm9yOiByZXMuZXJyfX0pXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnQUREX1VTRVJTJywgcGF5bG9hZDogcmVzLnVzZXJzfSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnQUREX09SREVSUycsIHBheWxvYWQ6IFtdfSlcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnQUREX1VTRVJTJywgcGF5bG9hZDogW119KVxuICAgICAgICB9XG4gICAgfSxbYXV0aC50b2tlbl0pXG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxEYXRhQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e3N0YXRlLCBkaXNwYXRjaH19PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0RhdGFDb250ZXh0LlByb3ZpZGVyPlxuICAgIClcbn0iLCJpbXBvcnQgeyBBQ1RJT05TIH0gZnJvbSAnLi9BY3Rpb25zJ1xuXG5cbmNvbnN0IHJlZHVjZXJzID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xuICAgICAgICBjYXNlIEFDVElPTlMuTk9USUZZOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBub3RpZnk6IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIEFDVElPTlMuQVVUSDpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgYXV0aDogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgQUNUSU9OUy5BRERfQ0FSVDpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgY2FydDogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgQUNUSU9OUy5BRERfTU9EQUw6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIG1vZGFsOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBBQ1RJT05TLkFERF9PUkRFUlM6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIG9yZGVyczogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgQUNUSU9OUy5BRERfVVNFUlM6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIHVzZXJzOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBBQ1RJT05TLkFERF9DQVRFR09SSUVTOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJzIiwiY29uc3QgYmFzZVVybCA9IHByb2Nlc3MuZW52LkJBU0VfVVJMXG5cbmV4cG9ydCBjb25zdCBnZXREYXRhID0gYXN5bmMgKHVybCwgdG9rZW4pID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfS9hcGkvJHt1cmx9YCwge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRva2VuXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbiAgICByZXR1cm4gZGF0YVxufVxuXG5leHBvcnQgY29uc3QgcG9zdERhdGEgPSBhc3luYyAodXJsLCBwb3N0LCB0b2tlbikgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2Jhc2VVcmx9L2FwaS8ke3VybH1gLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiB0b2tlblxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwb3N0KVxuICAgIH0pXG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICAgIHJldHVybiBkYXRhXG59XG5cblxuXG5leHBvcnQgY29uc3QgcHV0RGF0YSA9IGFzeW5jICh1cmwsIHBvc3QsIHRva2VuKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVybH0vYXBpLyR7dXJsfWAsIHtcbiAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogdG9rZW5cbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocG9zdClcbiAgICB9KVxuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbiAgICByZXR1cm4gZGF0YVxufVxuXG5leHBvcnQgY29uc3QgcGF0Y2hEYXRhID0gYXN5bmMgKHVybCwgcG9zdCwgdG9rZW4pID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfS9hcGkvJHt1cmx9YCwge1xuICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRva2VuXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBvc3QpXG4gICAgfSlcblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gICAgcmV0dXJuIGRhdGFcbn1cblxuXG5leHBvcnQgY29uc3QgZGVsZXRlRGF0YSA9IGFzeW5jICh1cmwsIHRva2VuKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVybH0vYXBpLyR7dXJsfWAsIHtcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogdG9rZW5cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICAgIHJldHVybiBkYXRhXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9