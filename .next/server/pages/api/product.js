module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/product/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./middleware/auth.js":
/*!****************************!*\
  !*** ./middleware/auth.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/userModel */ "./models/userModel.js");



const auth = async (req, res) => {
  const token = req.headers.authorization;
  if (!token) return res.status(400).json({
    err: 'Invalid Authentication.'
  });
  const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.verify(token, ".q~C<9G4jYzTZCBT!y,[V?3x,:.2'CD!J`S+?7kAm4SY%3{R>a");
  if (!decoded) return res.status(400).json({
    err: 'Invalid Authentication.'
  });
  const user = await _models_userModel__WEBPACK_IMPORTED_MODULE_1__["default"].findOne({
    _id: decoded.id
  });
  return {
    id: user._id,
    role: user.role,
    root: user.root
  };
};

/* harmony default export */ __webpack_exports__["default"] = (auth);

/***/ }),

/***/ "./models/productModel.js":
/*!********************************!*\
  !*** ./models/productModel.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const productSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  images: {
    type: Array,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  checked: {
    type: Boolean,
    default: false
  },
  inStock: {
    type: Number,
    default: 0
  },
  sold: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});
let Dataset = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.product || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('product', productSchema);
/* harmony default export */ __webpack_exports__["default"] = (Dataset);

/***/ }),

/***/ "./models/userModel.js":
/*!*****************************!*\
  !*** ./models/userModel.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'user'
  },
  root: {
    type: Boolean,
    default: false
  },
  avatar: {
    type: String,
    default: 'https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png'
  }
}, {
  timestamps: true
});
let Dataset = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.user || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('user', userSchema);
/* harmony default export */ __webpack_exports__["default"] = (Dataset);

/***/ }),

/***/ "./pages/api/product/index.js":
/*!************************************!*\
  !*** ./pages/api/product/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_connectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/connectDB */ "./utils/connectDB.js");
/* harmony import */ var _models_productModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/productModel */ "./models/productModel.js");
/* harmony import */ var _middleware_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../middleware/auth */ "./middleware/auth.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




Object(_utils_connectDB__WEBPACK_IMPORTED_MODULE_0__["default"])();
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  switch (req.method) {
    case "GET":
      await getProducts(req, res);
      break;

    case "POST":
      await createProduct(req, res);
      break;
  }
});

class APIfeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filtering() {
    const queryObj = _objectSpread({}, this.queryString);

    const excludeFields = ['page', 'sort', 'limit'];
    excludeFields.forEach(el => delete queryObj[el]);
    if (queryObj.category !== 'all') this.query.find({
      category: queryObj.category
    });
    if (queryObj.title !== 'all') this.query.find({
      title: {
        $regex: queryObj.title
      }
    });
    this.query.find();
    return this;
  }

  sorting() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(',').join('');
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort('-createdAt');
    }

    return this;
  }

  paginating() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 6;
    const skip = (page - 1) * limit;
    this.query = this.query.skip(skip).limit(limit);
    return this;
  }

}

const getProducts = async (req, res) => {
  try {
    const features = new APIfeatures(_models_productModel__WEBPACK_IMPORTED_MODULE_1__["default"].find(), req.query).filtering().sorting().paginating();
    const products = await features.query;
    res.json({
      status: 'success',
      result: products.length,
      products
    });
  } catch (err) {
    return res.status(500).json({
      err: err.message
    });
  }
};

const createProduct = async (req, res) => {
  try {
    const result = await Object(_middleware_auth__WEBPACK_IMPORTED_MODULE_2__["default"])(req, res);
    if (result.role !== 'admin') return res.status(400).json({
      err: 'Authentication is not valid.'
    });
    const {
      title,
      price,
      inStock,
      description,
      content,
      category,
      images
    } = req.body;
    if (!title || !price || !inStock || !description || !content || category === 'all' || images.length === 0) return res.status(400).json({
      err: 'Please add all the fields.'
    });
    const newProduct = new _models_productModel__WEBPACK_IMPORTED_MODULE_1__["default"]({
      title: title.toLowerCase(),
      price,
      inStock,
      description,
      content,
      category,
      images
    });
    await newProduct.save();
    res.json({
      msg: 'Success! Created a new product'
    });
  } catch (err) {
    return res.status(500).json({
      err: err.message
    });
  }
};

/***/ }),

/***/ "./utils/connectDB.js":
/*!****************************!*\
  !*** ./utils/connectDB.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);


const connectDB = () => {
  if (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connections[0].readyState) {
    console.log('Already connected.');
    return;
  }

  mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect("mongodb+srv://root:sapassword@cluster0.hhj3s.mongodb.net/banvetau_kltn?retryWrites=true&w=majority", {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, err => {
    if (err) throw err;
    console.log('Connected to mongodb.');
  });
};

/* harmony default export */ __webpack_exports__["default"] = (connectDB);

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbWlkZGxld2FyZS9hdXRoLmpzIiwid2VicGFjazovLy8uL21vZGVscy9wcm9kdWN0TW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL3VzZXJNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvcHJvZHVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9jb25uZWN0REIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianNvbndlYnRva2VuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9uZ29vc2VcIiJdLCJuYW1lcyI6WyJhdXRoIiwicmVxIiwicmVzIiwidG9rZW4iLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsInN0YXR1cyIsImpzb24iLCJlcnIiLCJkZWNvZGVkIiwiand0IiwidmVyaWZ5IiwicHJvY2VzcyIsInVzZXIiLCJVc2VycyIsImZpbmRPbmUiLCJfaWQiLCJpZCIsInJvbGUiLCJyb290IiwicHJvZHVjdFNjaGVtYSIsIm1vbmdvb3NlIiwiU2NoZW1hIiwidGl0bGUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJ0cmltIiwicHJpY2UiLCJOdW1iZXIiLCJkZXNjcmlwdGlvbiIsImNvbnRlbnQiLCJpbWFnZXMiLCJBcnJheSIsImNhdGVnb3J5IiwiY2hlY2tlZCIsIkJvb2xlYW4iLCJkZWZhdWx0IiwiaW5TdG9jayIsInNvbGQiLCJ0aW1lc3RhbXBzIiwiRGF0YXNldCIsIm1vZGVscyIsInByb2R1Y3QiLCJtb2RlbCIsInVzZXJTY2hlbWEiLCJuYW1lIiwiZW1haWwiLCJ1bmlxdWUiLCJwYXNzd29yZCIsImF2YXRhciIsImNvbm5lY3REQiIsIm1ldGhvZCIsImdldFByb2R1Y3RzIiwiY3JlYXRlUHJvZHVjdCIsIkFQSWZlYXR1cmVzIiwiY29uc3RydWN0b3IiLCJxdWVyeSIsInF1ZXJ5U3RyaW5nIiwiZmlsdGVyaW5nIiwicXVlcnlPYmoiLCJleGNsdWRlRmllbGRzIiwiZm9yRWFjaCIsImVsIiwiZmluZCIsIiRyZWdleCIsInNvcnRpbmciLCJzb3J0Iiwic29ydEJ5Iiwic3BsaXQiLCJqb2luIiwicGFnaW5hdGluZyIsInBhZ2UiLCJsaW1pdCIsInNraXAiLCJmZWF0dXJlcyIsIlByb2R1Y3RzIiwicHJvZHVjdHMiLCJyZXN1bHQiLCJsZW5ndGgiLCJtZXNzYWdlIiwiYm9keSIsIm5ld1Byb2R1Y3QiLCJ0b0xvd2VyQ2FzZSIsInNhdmUiLCJtc2ciLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdCIsInVzZUNyZWF0ZUluZGV4IiwidXNlRmluZEFuZE1vZGlmeSIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7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QXNDO0FBQ2xDQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWjtBQUNBO0FBQ0g7O0FBQ0RwRSxpREFBUSxDQUFDcUUsT0FBVCxDQUFpQjlFLG9HQUFqQixFQUEwQztBQUN0QytFLGtCQUFjLEVBQUUsSUFEc0I7QUFFdENDLG9CQUFnQixFQUFFLEtBRm9CO0FBR3RDQyxtQkFBZSxFQUFFLElBSHFCO0FBSXRDQyxzQkFBa0IsRUFBRTtBQUprQixHQUExQyxFQUtHdEYsR0FBRyxJQUFJO0FBQ04sUUFBR0EsR0FBSCxFQUFRLE1BQU1BLEdBQU47QUFDUmdGLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFaO0FBQ0gsR0FSRDtBQVNILENBZEQ7O0FBaUJldEMsd0VBQWYsRTs7Ozs7Ozs7Ozs7QUNuQkEseUM7Ozs7Ozs7Ozs7O0FDQUEscUMiLCJmaWxlIjoicGFnZXMvYXBpL3Byb2R1Y3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FwaS9wcm9kdWN0L2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nXG5pbXBvcnQgVXNlcnMgZnJvbSAnLi4vbW9kZWxzL3VzZXJNb2RlbCdcblxuXG5jb25zdCBhdXRoID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgdG9rZW4gPSByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uO1xuICAgIGlmKCF0b2tlbikgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnI6ICdJbnZhbGlkIEF1dGhlbnRpY2F0aW9uLid9KVxuXG4gICAgY29uc3QgZGVjb2RlZCA9IGp3dC52ZXJpZnkodG9rZW4sIHByb2Nlc3MuZW52LkFDQ0VTU19UT0tFTl9TRUNSRVQpXG4gICAgaWYoIWRlY29kZWQpIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyOiAnSW52YWxpZCBBdXRoZW50aWNhdGlvbi4nfSlcblxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2Vycy5maW5kT25lKHtfaWQ6IGRlY29kZWQuaWR9KVxuXG4gICAgcmV0dXJuIHtpZDogdXNlci5faWQsIHJvbGU6IHVzZXIucm9sZSwgcm9vdDogdXNlci5yb290fTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBhdXRoIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xuXG5jb25zdCBwcm9kdWN0U2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gICAgdGl0bGU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgdHJpbTogdHJ1ZVxuICAgIH0sXG4gICAgcHJpY2U6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgdHJpbTogdHJ1ZVxuICAgIH0sXG4gICAgZGVzY3JpcHRpb246IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgY29udGVudDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBpbWFnZXM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBjYXRlZ29yeToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBjaGVja2VkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcbiAgICBpblN0b2NrOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgZGVmYXVsdDogMFxuICAgIH0sXG4gICAgc29sZDoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIGRlZmF1bHQ6IDBcbiAgICB9XG59LCB7XG4gICAgdGltZXN0YW1wczogdHJ1ZVxufSlcblxubGV0IERhdGFzZXQgPSBtb25nb29zZS5tb2RlbHMucHJvZHVjdCB8fCBtb25nb29zZS5tb2RlbCgncHJvZHVjdCcsIHByb2R1Y3RTY2hlbWEpXG5leHBvcnQgZGVmYXVsdCBEYXRhc2V0IiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xuXG5jb25zdCB1c2VyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gICAgbmFtZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBlbWFpbDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB1bmlxdWU6IHRydWVcbiAgICB9LFxuICAgIHBhc3N3b3JkOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIHJvbGU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiAndXNlcidcbiAgICB9LFxuICAgIHJvb3Q6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIGF2YXRhcjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGRlZmF1bHQ6ICdodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZXZhdGNoYW5uZWwvaW1hZ2UvdXBsb2FkL3YxNjAyNzUyNDAyL2F2YXRhci9hdmF0YXJfY3VncTQwLnBuZydcbiAgICB9XG59LCB7XG4gICAgdGltZXN0YW1wczogdHJ1ZVxufSlcblxubGV0IERhdGFzZXQgPSBtb25nb29zZS5tb2RlbHMudXNlciB8fCBtb25nb29zZS5tb2RlbCgndXNlcicsIHVzZXJTY2hlbWEpXG5leHBvcnQgZGVmYXVsdCBEYXRhc2V0IiwiaW1wb3J0IGNvbm5lY3REQiBmcm9tICcuLi8uLi8uLi91dGlscy9jb25uZWN0REInXG5pbXBvcnQgUHJvZHVjdHMgZnJvbSAnLi4vLi4vLi4vbW9kZWxzL3Byb2R1Y3RNb2RlbCdcbmltcG9ydCBhdXRoIGZyb20gJy4uLy4uLy4uL21pZGRsZXdhcmUvYXV0aCdcblxuY29ubmVjdERCKClcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgc3dpdGNoKHJlcS5tZXRob2Qpe1xuICAgICAgICBjYXNlIFwiR0VUXCI6XG4gICAgICAgICAgICBhd2FpdCBnZXRQcm9kdWN0cyhyZXEsIHJlcylcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiUE9TVFwiOlxuICAgICAgICAgICAgYXdhaXQgY3JlYXRlUHJvZHVjdChyZXEsIHJlcylcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cblxuY2xhc3MgQVBJZmVhdHVyZXMge1xuICAgIGNvbnN0cnVjdG9yKHF1ZXJ5LCBxdWVyeVN0cmluZyl7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgdGhpcy5xdWVyeVN0cmluZyA9IHF1ZXJ5U3RyaW5nO1xuICAgIH1cbiAgICBmaWx0ZXJpbmcoKXtcbiAgICAgICAgY29uc3QgcXVlcnlPYmogPSB7Li4udGhpcy5xdWVyeVN0cmluZ31cblxuICAgICAgICBjb25zdCBleGNsdWRlRmllbGRzID0gWydwYWdlJywgJ3NvcnQnLCAnbGltaXQnXVxuICAgICAgICBleGNsdWRlRmllbGRzLmZvckVhY2goZWwgPT4gZGVsZXRlKHF1ZXJ5T2JqW2VsXSkpXG5cbiAgICAgICAgaWYocXVlcnlPYmouY2F0ZWdvcnkgIT09ICdhbGwnKVxuICAgICAgICAgICAgdGhpcy5xdWVyeS5maW5kKHtjYXRlZ29yeTogcXVlcnlPYmouY2F0ZWdvcnl9KVxuICAgICAgICBpZihxdWVyeU9iai50aXRsZSAhPT0gJ2FsbCcpXG4gICAgICAgICAgICB0aGlzLnF1ZXJ5LmZpbmQoe3RpdGxlOiB7JHJlZ2V4OiBxdWVyeU9iai50aXRsZX19KVxuXG4gICAgICAgIHRoaXMucXVlcnkuZmluZCgpXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNvcnRpbmcoKXtcbiAgICAgICAgaWYodGhpcy5xdWVyeVN0cmluZy5zb3J0KXtcbiAgICAgICAgICAgIGNvbnN0IHNvcnRCeSA9IHRoaXMucXVlcnlTdHJpbmcuc29ydC5zcGxpdCgnLCcpLmpvaW4oJycpXG4gICAgICAgICAgICB0aGlzLnF1ZXJ5ID0gdGhpcy5xdWVyeS5zb3J0KHNvcnRCeSlcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLnF1ZXJ5ID0gdGhpcy5xdWVyeS5zb3J0KCctY3JlYXRlZEF0JylcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHBhZ2luYXRpbmcoKXtcbiAgICAgICAgY29uc3QgcGFnZSA9IHRoaXMucXVlcnlTdHJpbmcucGFnZSAqIDEgfHwgMVxuICAgICAgICBjb25zdCBsaW1pdCA9IHRoaXMucXVlcnlTdHJpbmcubGltaXQgKiAxIHx8IDZcbiAgICAgICAgY29uc3Qgc2tpcCA9IChwYWdlIC0gMSkgKiBsaW1pdDtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHRoaXMucXVlcnkuc2tpcChza2lwKS5saW1pdChsaW1pdClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuXG5jb25zdCBnZXRQcm9kdWN0cyA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGZlYXR1cmVzID0gbmV3IEFQSWZlYXR1cmVzKFByb2R1Y3RzLmZpbmQoKSwgcmVxLnF1ZXJ5KVxuICAgICAgICAuZmlsdGVyaW5nKCkuc29ydGluZygpLnBhZ2luYXRpbmcoKVxuXG4gICAgICAgIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgZmVhdHVyZXMucXVlcnlcbiAgICAgICAgXG4gICAgICAgIHJlcy5qc29uKHtcbiAgICAgICAgICAgIHN0YXR1czogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgcmVzdWx0OiBwcm9kdWN0cy5sZW5ndGgsXG4gICAgICAgICAgICBwcm9kdWN0c1xuICAgICAgICB9KVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oe2VycjogZXJyLm1lc3NhZ2V9KVxuICAgIH1cbn1cblxuY29uc3QgY3JlYXRlUHJvZHVjdCA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF1dGgocmVxLCByZXMpXG4gICAgICAgIGlmKHJlc3VsdC5yb2xlICE9PSAnYWRtaW4nKSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VycjogJ0F1dGhlbnRpY2F0aW9uIGlzIG5vdCB2YWxpZC4nfSlcblxuICAgICAgICBjb25zdCB7dGl0bGUsIHByaWNlLCBpblN0b2NrLCBkZXNjcmlwdGlvbiwgY29udGVudCwgY2F0ZWdvcnksIGltYWdlc30gPSByZXEuYm9keVxuXG4gICAgICAgIGlmKCF0aXRsZSB8fCAhcHJpY2UgfHwgIWluU3RvY2sgfHwgIWRlc2NyaXB0aW9uIHx8ICFjb250ZW50IHx8IGNhdGVnb3J5ID09PSAnYWxsJyB8fCBpbWFnZXMubGVuZ3RoID09PSAwKVxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VycjogJ1BsZWFzZSBhZGQgYWxsIHRoZSBmaWVsZHMuJ30pXG5cblxuICAgICAgICBjb25zdCBuZXdQcm9kdWN0ID0gbmV3IFByb2R1Y3RzKHtcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZS50b0xvd2VyQ2FzZSgpLCBwcmljZSwgaW5TdG9jaywgZGVzY3JpcHRpb24sIGNvbnRlbnQsIGNhdGVnb3J5LCBpbWFnZXNcbiAgICAgICAgfSlcblxuICAgICAgICBhd2FpdCBuZXdQcm9kdWN0LnNhdmUoKVxuXG4gICAgICAgIHJlcy5qc29uKHttc2c6ICdTdWNjZXNzISBDcmVhdGVkIGEgbmV3IHByb2R1Y3QnfSlcblxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oe2VycjogZXJyLm1lc3NhZ2V9KVxuICAgIH1cbn0iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnXG5cbmNvbnN0IGNvbm5lY3REQiA9ICgpID0+IHtcbiAgICBpZihtb25nb29zZS5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlKXtcbiAgICAgICAgY29uc29sZS5sb2coJ0FscmVhZHkgY29ubmVjdGVkLicpXG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT0RCX1VSTCwge1xuICAgICAgICB1c2VDcmVhdGVJbmRleDogdHJ1ZSxcbiAgICAgICAgdXNlRmluZEFuZE1vZGlmeTogZmFsc2UsXG4gICAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbiAgICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlXG4gICAgfSwgZXJyID0+IHtcbiAgICAgICAgaWYoZXJyKSB0aHJvdyBlcnI7XG4gICAgICAgIGNvbnNvbGUubG9nKCdDb25uZWN0ZWQgdG8gbW9uZ29kYi4nKVxuICAgIH0pXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdERCIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=