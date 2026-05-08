/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../bpl-tools/utils/data.js":
/*!**********************************!*\
  !*** ../bpl-tools/utils/data.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contentColor: () => (/* binding */ contentColor),
/* harmony export */   deskBreakpoint: () => (/* binding */ deskBreakpoint),
/* harmony export */   gradient: () => (/* binding */ gradient),
/* harmony export */   mobileBreakpoint: () => (/* binding */ mobileBreakpoint),
/* harmony export */   primaryColor: () => (/* binding */ primaryColor),
/* harmony export */   primaryColor100: () => (/* binding */ primaryColor100),
/* harmony export */   primaryColor1000: () => (/* binding */ primaryColor1000),
/* harmony export */   primaryColor200: () => (/* binding */ primaryColor200),
/* harmony export */   primaryColor300: () => (/* binding */ primaryColor300),
/* harmony export */   primaryColor400: () => (/* binding */ primaryColor400),
/* harmony export */   primaryColor500: () => (/* binding */ primaryColor500),
/* harmony export */   primaryColor600: () => (/* binding */ primaryColor600),
/* harmony export */   primaryColor700: () => (/* binding */ primaryColor700),
/* harmony export */   primaryColor800: () => (/* binding */ primaryColor800),
/* harmony export */   primaryColor900: () => (/* binding */ primaryColor900),
/* harmony export */   secondaryColor: () => (/* binding */ secondaryColor),
/* harmony export */   tabBreakpoint: () => (/* binding */ tabBreakpoint),
/* harmony export */   titleColor: () => (/* binding */ titleColor)
/* harmony export */ });
const deskBreakpoint = '@media only screen and (min-width: 1025px)';
const tabBreakpoint = '@media only screen and (max-width: 1024px)';
const mobileBreakpoint = '@media only screen and (max-width: 640px)';
const primaryColor = '#146EF5';
const primaryColor100 = '#e7f0fe';
const primaryColor200 = '#b6d2fc';
const primaryColor300 = '#85b4fa';
const primaryColor400 = '#5495f8';
const primaryColor500 = '#2377f6';
const primaryColor600 = '#095edc';
const primaryColor700 = '#0749ab';
const primaryColor800 = '#05347a';
const primaryColor900 = '#031f49';
const primaryColor1000 = '#010a18';
const secondaryColor = '#FF7A00';
const titleColor = '#070127';
const contentColor = '#485781';
const gradient = 'linear-gradient(135deg, #0040E3, #18D4FD)';

/***/ }),

/***/ "./src/Components/Common/NCards/OneCard.js":
/*!*************************************************!*\
  !*** ./src/Components/Common/NCards/OneCard.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const OneCard = ({
  attributes,
  setAttributes
}) => {
  console.log(attributes?.cards);
  const {
    cards = {},
    options = {}
  } = attributes || {};
  const handleNavigateLink = url => {
    if (url) {
      window.open(url, options?.openInNewTab ? "_blank" : "_self");
    }
  };
  // Narcisse, Lycoris, এবং Tulipe
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "nbhs-container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "nbhs-row"
  }, cards.map((card, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    onClick: () => {
      if (!options.isIcon && options?.clickOnCard) {
        handleNavigateLink(card.link);
      }
    },
    className: "nbhs-col",
    key: index
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "nbhs-card nbhs-box-shadow"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: card.image,
    className: "nbhs-card-img",
    alt: card.title
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "nbhs-card-body"
  }, options?.isTitle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", {
    className: "nbhs-card-title"
  }, card.title), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), options?.isDescription && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "nbhs-card-text"
  }, card.description)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1440 320",
    preserveAspectRatio: "none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#ffffff",
    fillOpacity: "1",
    d: options?.[card.wavePath]
  })), options?.isIcon && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    target: options?.openInNewTab ? "_blank" : "_self",
    href: card.link,
    rel: "noopener noreferrer"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "nbhs-icon",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 576 512",
    width: "1em",
    height: "1em"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "currentColor",
    d: "M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.8 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
    cx: "288",
    cy: "220",
    r: "18",
    fill: "white"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
    cx: "255",
    cy: "275",
    r: "22",
    fill: "white"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
    cx: "321",
    cy: "275",
    r: "22",
    fill: "white"
  }))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OneCard);

/***/ }),

/***/ "./src/Components/Common/Style.js":
/*!****************************************!*\
  !*** ./src/Components/Common/Style.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bpl_tools_utils_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../bpl-tools/utils/data */ "../bpl-tools/utils/data.js");


const Style = ({
  attributes,
  id
}) => {
  const {
    options = {},
    styles = {}
  } = attributes;
  const mainSl = `#${id}`;
  const containerSl = `${mainSl} .nbhs-container`;
  const rowSl = `${containerSl} .nbhs-row`;
  const cardSl = `${rowSl} .nbhs-card`;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", {
    dangerouslySetInnerHTML: {
      __html: `
		${rowSl}{
		grid-template-columns: repeat(${styles?.columns?.desktop || 3}, 1fr);
		column-gap: ${styles?.columnGap}px;
		row-gap: ${styles?.rowGap}px;
		}

		${cardSl} {
		cursor: ${!options?.isIcon && options?.clickOnCard ? "pointer" : "default"};

		}

		${_bpl_tools_utils_data__WEBPACK_IMPORTED_MODULE_1__.tabBreakpoint}{
		${rowSl}{
		grid-template-columns: repeat(${styles?.columns?.tablet || 2}, 1fr);
		}
		}

		${_bpl_tools_utils_data__WEBPACK_IMPORTED_MODULE_1__.mobileBreakpoint}{
		${rowSl}{
		grid-template-columns: repeat(${styles?.columns?.mobile || 1}, 1fr);
		}
		}



	`
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var m = __webpack_require__(/*! react-dom */ "react-dom");
if (false) {} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = window["ReactDOM"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _Components_Common_Style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/Common/Style */ "./src/Components/Common/Style.js");
/* harmony import */ var _Components_Common_NCards_OneCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/Common/NCards/OneCard */ "./src/Components/Common/NCards/OneCard.js");





document.addEventListener("DOMContentLoaded", () => {
  const blockNameEls = document.querySelectorAll(".wp-block-icb-nice-box-pro");
  blockNameEls.forEach(blockNameEl => {
    const attributes = JSON.parse(blockNameEl.dataset.attributes);
    (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(blockNameEl).render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_Common_Style__WEBPACK_IMPORTED_MODULE_3__["default"], {
      attributes: attributes,
      id: blockNameEl.id
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_Common_NCards_OneCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      attributes: attributes
    })));
    blockNameEl?.removeAttribute("data-attributes");
  });
});
/******/ })()
;
//# sourceMappingURL=view.js.map