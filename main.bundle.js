/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/constant.js":
/*!*************************!*\
  !*** ./src/constant.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "INITIAL_CITY": () => (/* binding */ INITIAL_CITY),
/* harmony export */   "INITIAL_CITY_GEO": () => (/* binding */ INITIAL_CITY_GEO),
/* harmony export */   "APIID": () => (/* binding */ APIID)
/* harmony export */ });
var INITIAL_CITY = 'New York';
var INITIAL_CITY_GEO = {
  lat: 40.7143,
  lon: -74.006
};
var APIID = 'da7f90c750a558dbf53529e0dff62a7d';

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateMainTempUI": () => (/* binding */ updateMainTempUI),
/* harmony export */   "updateDaysContainer": () => (/* binding */ updateDaysContainer)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant */ "./src/constant.js");


var lastCity = _constant__WEBPACK_IMPORTED_MODULE_1__.INITIAL_CITY;
var locationTitle = document.querySelector('.location-title');
var locationDate = document.querySelector('.location-date');
var locationTime = document.querySelector('.location-time');
var locationTemperature = document.querySelector('.location-temperature');
var feelLikeElement = document.querySelector('.feel_like');
var windSpeed = document.querySelector('.wind_speed');
var moreHumidity = document.querySelector('.more_humidity');
var colWeekDayContainer = document.querySelector('.col-week-day-container');

function updateMainTempUI(name, country, timestamp, temp, feelLike, speed, humidity) {
  lastCity = "".concat(name);
  locationTitle.textContent = "".concat(name, " ").concat(country.length ? ',' : '', " ").concat(country);
  locationDate.textContent = "".concat((0,_utils__WEBPACK_IMPORTED_MODULE_0__.convertTime)(timestamp).date);
  locationTime.textContent = "".concat((0,_utils__WEBPACK_IMPORTED_MODULE_0__.convertTime)(timestamp).time);
  locationTemperature.textContent = "".concat(temp, " \u2103");
  feelLikeElement.textContent = "".concat(feelLike, " \u2103");
  windSpeed.textContent = "".concat(speed, " km/h");
  moreHumidity.textContent = "".concat(humidity, " %");
}

function updateDaysContainer() {
  var days = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  colWeekDayContainer.innerHTML = "";
  colWeekDayContainer.innerHTML = days.map(function (day, index) {
    // feels_like.day, temp.day
    // console.log(day)
    var dt = day.dt,
        feels_like = day.feels_like,
        humidity = day.humidity,
        temp = day.temp,
        wind_speed = day.wind_speed;
    return "\n      <div class=\"\n      col-day-card \n      flex \n      items-center \n      border-2 \n      border-white \n      bg-white \n      bg-opacity-10 \n      text-white\n      px-5\n      py-2\n      rounded-md\n      max-w-xs\n      mx-auto\n    \"\n  >\n    <p class=\"flex-1 font-medium uppercase\">".concat((0,_utils__WEBPACK_IMPORTED_MODULE_0__.convertTime)(dt).date, "</p>\n    <div class=\"mx-8 flex flex-col items-end\">\n      <p>").concat(temp.day, " \u2103</p>\n      <p class=\"font-thin\">Feels: ").concat(feels_like.day, " \u2103</p>\n    </div>\n    <span>\uD83C\uDF24</span>\n  </div>\n    ");
  });
}



/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertTime": () => (/* binding */ convertTime),
/* harmony export */   "convertCToF": () => (/* binding */ convertCToF),
/* harmony export */   "convertFToC": () => (/* binding */ convertFToC)
/* harmony export */ });
function convertTime(timestamp) {
  var d = new Date(timestamp * 1000);
  var date = d.toGMTString().slice(0, 11);
  var time = d.toLocaleString().split(', ')[1];
  return {
    date: date,
    time: time
  };
}

function convertCToF(deg) {
  return deg * 1.8 + 32.0;
}

function convertFToC(deg) {
  return (deg - 32) / 1.8;
}



/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.css */ "./src/styles/index.css");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant */ "./src/constant.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui */ "./src/ui.js");



var mainLoadingSpinner = document.querySelector('.main-loading-spinner');
var mainContainer = document.querySelector('.main-container');
var searchForm = document.querySelector('.search-form');
var colWeekDayContainer = document.querySelector('.col-week-day-container'); // const searchFormInput = document.querySelector('.search-form-input')
// const searchFormSubmit = document.querySelector('.search-form-submit')
// const changeTemperature = document.querySelector('.change-temperature')
// const moreInfoContainer = document.querySelector('.more-info-container')
// const cardMoreInfo = document.querySelector('.card-more-info')
// const colDayCard = document.querySelector('.col-day-card')

function geoSuccess(position) {
  var _position$coords = position.coords,
      latitude = _position$coords.latitude,
      longitude = _position$coords.longitude;
  var lat = latitude;
  var lon = longitude;
  fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(lat, "&lon=").concat(lon, "&exclude=minute&units=metric&appid=").concat(_constant__WEBPACK_IMPORTED_MODULE_1__.APIID)).then(function (response) {
    return response.json();
  }).then(function (data) {
    // console.log(data)
    var timezone = data.timezone,
        _data$current = data.current,
        feels_like = _data$current.feels_like,
        humidity = _data$current.humidity,
        wind_speed = _data$current.wind_speed,
        temp = _data$current.temp,
        dt = _data$current.dt;
    (0,_ui__WEBPACK_IMPORTED_MODULE_2__.updateMainTempUI)(timezone, '', dt, temp, feels_like, wind_speed, humidity);
    (0,_ui__WEBPACK_IMPORTED_MODULE_2__.updateDaysContainer)(data.daily);
    mainLoadingSpinner.classList.add('hidden');
    mainContainer.classList.remove('hidden');
  })["catch"](function (err) {// console.log(err)
  });
}

function geoError() {
  mainLoadingSpinner.classList.add('hidden');
  mainContainer.classList.remove('hidden');
  colWeekDayContainer.innerHTML = "";
  alert('Sorry, no position available.');
}

function submitSearchForm(e) {
  e.preventDefault();
  var location = searchForm.querySelector('[name=location]').value;

  if (!location) {
    window.alert('Please enter a location');
    return;
  }

  fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(location, "&units=metric&appid=").concat(_constant__WEBPACK_IMPORTED_MODULE_1__.APIID)).then(function (response) {
    return response.json();
  }).then(function (data) {
    if (data.cod === '404') {
      alert(data.message);
      return;
    } // console.log(data)


    var _data$main = data.main,
        temp = _data$main.temp,
        feels_like = _data$main.feels_like,
        humidity = _data$main.humidity,
        dt = data.dt,
        speed = data.wind.speed,
        country = data.sys.country,
        name = data.name,
        _data$coord = data.coord,
        lat = _data$coord.lat,
        lon = _data$coord.lon;
    (0,_ui__WEBPACK_IMPORTED_MODULE_2__.updateMainTempUI)(name, country, dt, temp, feels_like, speed, humidity);
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(lat, "&lon=").concat(lon, "&exclude=minute&units=metric&appid=").concat(_constant__WEBPACK_IMPORTED_MODULE_1__.APIID)).then(function (response) {
      return response.json();
    }).then(function (data) {
      // console.log(data)
      (0,_ui__WEBPACK_IMPORTED_MODULE_2__.updateDaysContainer)(data.daily);
    })["catch"](function (err) {// console.log(err)
    });
  })["catch"](function (error) {// console.log(error)
  });
  searchForm.reset();
}

searchForm.addEventListener('submit', submitSearchForm); // changeTemperature.addEventListener('click', (e) => {
//   alert('Change F')
// })

navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVMsQ0FBQ0MsV0FBVixDQUFzQkMsa0JBQXRCLENBQXlDcEMsVUFBekMsRUFBcURpQixRQUFyRCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50LmpzIiwid2VicGFjazovLy8uL3NyYy91aS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5jc3M/MTcxZiIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IElOSVRJQUxfQ0lUWSA9ICdOZXcgWW9yaydcclxuZXhwb3J0IGNvbnN0IElOSVRJQUxfQ0lUWV9HRU8gPSB7XHJcbiAgbGF0OiA0MC43MTQzLFxyXG4gIGxvbjogLTc0LjAwNixcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFQSUlEID0gJ2RhN2Y5MGM3NTBhNTU4ZGJmNTM1MjllMGRmZjYyYTdkJ1xyXG4iLCJpbXBvcnQgeyBjb252ZXJ0VGltZSB9IGZyb20gJy4vdXRpbHMnXHJcbmltcG9ydCB7IElOSVRJQUxfQ0lUWSB9IGZyb20gJy4vY29uc3RhbnQnXHJcbmxldCBsYXN0Q2l0eSA9IElOSVRJQUxfQ0lUWVxyXG5cclxuY29uc3QgbG9jYXRpb25UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NhdGlvbi10aXRsZScpXHJcbmNvbnN0IGxvY2F0aW9uRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NhdGlvbi1kYXRlJylcclxuY29uc3QgbG9jYXRpb25UaW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvY2F0aW9uLXRpbWUnKVxyXG5cclxuY29uc3QgbG9jYXRpb25UZW1wZXJhdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NhdGlvbi10ZW1wZXJhdHVyZScpXHJcbmNvbnN0IGZlZWxMaWtlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVsX2xpa2UnKVxyXG5jb25zdCB3aW5kU3BlZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZF9zcGVlZCcpXHJcbmNvbnN0IG1vcmVIdW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3JlX2h1bWlkaXR5JylcclxuXHJcbmNvbnN0IGNvbFdlZWtEYXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sLXdlZWstZGF5LWNvbnRhaW5lcicpXHJcblxyXG5mdW5jdGlvbiB1cGRhdGVNYWluVGVtcFVJKFxyXG4gIG5hbWUsXHJcbiAgY291bnRyeSxcclxuICB0aW1lc3RhbXAsXHJcbiAgdGVtcCxcclxuICBmZWVsTGlrZSxcclxuICBzcGVlZCxcclxuICBodW1pZGl0eVxyXG4pIHtcclxuICBsYXN0Q2l0eSA9IGAke25hbWV9YFxyXG4gIGxvY2F0aW9uVGl0bGUudGV4dENvbnRlbnQgPSBgJHtuYW1lfSAke2NvdW50cnkubGVuZ3RoID8gJywnIDogJyd9ICR7Y291bnRyeX1gXHJcbiAgbG9jYXRpb25EYXRlLnRleHRDb250ZW50ID0gYCR7Y29udmVydFRpbWUodGltZXN0YW1wKS5kYXRlfWBcclxuICBsb2NhdGlvblRpbWUudGV4dENvbnRlbnQgPSBgJHtjb252ZXJ0VGltZSh0aW1lc3RhbXApLnRpbWV9YFxyXG4gIGxvY2F0aW9uVGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgJHt0ZW1wfSDihINgXHJcbiAgZmVlbExpa2VFbGVtZW50LnRleHRDb250ZW50ID0gYCR7ZmVlbExpa2V9IOKEg2BcclxuICB3aW5kU3BlZWQudGV4dENvbnRlbnQgPSBgJHtzcGVlZH0ga20vaGBcclxuICBtb3JlSHVtaWRpdHkudGV4dENvbnRlbnQgPSBgJHtodW1pZGl0eX0gJWBcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlRGF5c0NvbnRhaW5lcihkYXlzID0gW10pIHtcclxuICBjb2xXZWVrRGF5Q29udGFpbmVyLmlubmVySFRNTCA9IGBgXHJcbiAgY29sV2Vla0RheUNvbnRhaW5lci5pbm5lckhUTUwgPSBkYXlzLm1hcCgoZGF5LCBpbmRleCkgPT4ge1xyXG4gICAgLy8gZmVlbHNfbGlrZS5kYXksIHRlbXAuZGF5XHJcbiAgICAvLyBjb25zb2xlLmxvZyhkYXkpXHJcbiAgICBjb25zdCB7IGR0LCBmZWVsc19saWtlLCBodW1pZGl0eSwgdGVtcCwgd2luZF9zcGVlZCB9ID0gZGF5XHJcbiAgICByZXR1cm4gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiXHJcbiAgICAgIGNvbC1kYXktY2FyZCBcclxuICAgICAgZmxleCBcclxuICAgICAgaXRlbXMtY2VudGVyIFxyXG4gICAgICBib3JkZXItMiBcclxuICAgICAgYm9yZGVyLXdoaXRlIFxyXG4gICAgICBiZy13aGl0ZSBcclxuICAgICAgYmctb3BhY2l0eS0xMCBcclxuICAgICAgdGV4dC13aGl0ZVxyXG4gICAgICBweC01XHJcbiAgICAgIHB5LTJcclxuICAgICAgcm91bmRlZC1tZFxyXG4gICAgICBtYXgtdy14c1xyXG4gICAgICBteC1hdXRvXHJcbiAgICBcIlxyXG4gID5cclxuICAgIDxwIGNsYXNzPVwiZmxleC0xIGZvbnQtbWVkaXVtIHVwcGVyY2FzZVwiPiR7Y29udmVydFRpbWUoZHQpLmRhdGV9PC9wPlxyXG4gICAgPGRpdiBjbGFzcz1cIm14LTggZmxleCBmbGV4LWNvbCBpdGVtcy1lbmRcIj5cclxuICAgICAgPHA+JHt0ZW1wLmRheX0g4oSDPC9wPlxyXG4gICAgICA8cCBjbGFzcz1cImZvbnQtdGhpblwiPkZlZWxzOiAke2ZlZWxzX2xpa2UuZGF5fSDihIM8L3A+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxzcGFuPvCfjKQ8L3NwYW4+XHJcbiAgPC9kaXY+XHJcbiAgICBgXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IHsgdXBkYXRlTWFpblRlbXBVSSwgdXBkYXRlRGF5c0NvbnRhaW5lciB9XHJcbiIsImZ1bmN0aW9uIGNvbnZlcnRUaW1lKHRpbWVzdGFtcCkge1xyXG4gIGNvbnN0IGQgPSBuZXcgRGF0ZSh0aW1lc3RhbXAgKiAxMDAwKVxyXG4gIGNvbnN0IGRhdGUgPSBkLnRvR01UU3RyaW5nKCkuc2xpY2UoMCwgMTEpXHJcbiAgY29uc3QgdGltZSA9IGQudG9Mb2NhbGVTdHJpbmcoKS5zcGxpdCgnLCAnKVsxXVxyXG4gIHJldHVybiB7IGRhdGUsIHRpbWUgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjb252ZXJ0Q1RvRihkZWcpIHtcclxuICByZXR1cm4gZGVnICogMS44ICsgMzIuMFxyXG59XHJcblxyXG5mdW5jdGlvbiBjb252ZXJ0RlRvQyhkZWcpIHtcclxuICByZXR1cm4gKGRlZyAtIDMyKSAvIDEuOFxyXG59XHJcblxyXG5leHBvcnQgeyBjb252ZXJ0VGltZSwgY29udmVydENUb0YsIGNvbnZlcnRGVG9DIH1cclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGVzL2luZGV4LmNzcydcclxuaW1wb3J0IHsgQVBJSUQgfSBmcm9tICcuL2NvbnN0YW50J1xyXG5cclxuaW1wb3J0IHsgdXBkYXRlTWFpblRlbXBVSSwgdXBkYXRlRGF5c0NvbnRhaW5lciB9IGZyb20gJy4vdWknXHJcbmNvbnN0IG1haW5Mb2FkaW5nU3Bpbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWxvYWRpbmctc3Bpbm5lcicpXHJcbmNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250YWluZXInKVxyXG5jb25zdCBzZWFyY2hGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1mb3JtJylcclxuY29uc3QgY29sV2Vla0RheUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2wtd2Vlay1kYXktY29udGFpbmVyJylcclxuLy8gY29uc3Qgc2VhcmNoRm9ybUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1mb3JtLWlucHV0JylcclxuLy8gY29uc3Qgc2VhcmNoRm9ybVN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtZm9ybS1zdWJtaXQnKVxyXG5cclxuLy8gY29uc3QgY2hhbmdlVGVtcGVyYXR1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbmdlLXRlbXBlcmF0dXJlJylcclxuXHJcbi8vIGNvbnN0IG1vcmVJbmZvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vcmUtaW5mby1jb250YWluZXInKVxyXG4vLyBjb25zdCBjYXJkTW9yZUluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1tb3JlLWluZm8nKVxyXG4vLyBjb25zdCBjb2xEYXlDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbC1kYXktY2FyZCcpXHJcblxyXG5mdW5jdGlvbiBnZW9TdWNjZXNzKHBvc2l0aW9uKSB7XHJcbiAgY29uc3QgeyBsYXRpdHVkZSwgbG9uZ2l0dWRlIH0gPSBwb3NpdGlvbi5jb29yZHNcclxuICBsZXQgbGF0ID0gbGF0aXR1ZGVcclxuICBsZXQgbG9uID0gbG9uZ2l0dWRlXHJcblxyXG4gIGZldGNoKFxyXG4gICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9vbmVjYWxsP2xhdD0ke2xhdH0mbG9uPSR7bG9ufSZleGNsdWRlPW1pbnV0ZSZ1bml0cz1tZXRyaWMmYXBwaWQ9JHtBUElJRH1gXHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKVxyXG5cclxuICAgICAgY29uc3Qge1xyXG4gICAgICAgIHRpbWV6b25lLFxyXG4gICAgICAgIGN1cnJlbnQ6IHsgZmVlbHNfbGlrZSwgaHVtaWRpdHksIHdpbmRfc3BlZWQsIHRlbXAsIGR0IH0sXHJcbiAgICAgIH0gPSBkYXRhXHJcblxyXG4gICAgICB1cGRhdGVNYWluVGVtcFVJKHRpbWV6b25lLCAnJywgZHQsIHRlbXAsIGZlZWxzX2xpa2UsIHdpbmRfc3BlZWQsIGh1bWlkaXR5KVxyXG4gICAgICB1cGRhdGVEYXlzQ29udGFpbmVyKGRhdGEuZGFpbHkpXHJcblxyXG4gICAgICBtYWluTG9hZGluZ1NwaW5uZXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcclxuICAgICAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGVycilcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlb0Vycm9yKCkge1xyXG4gIG1haW5Mb2FkaW5nU3Bpbm5lci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxyXG4gIG1haW5Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcclxuICBjb2xXZWVrRGF5Q29udGFpbmVyLmlubmVySFRNTCA9IGBgXHJcbiAgYWxlcnQoJ1NvcnJ5LCBubyBwb3NpdGlvbiBhdmFpbGFibGUuJylcclxufVxyXG5cclxuZnVuY3Rpb24gc3VibWl0U2VhcmNoRm9ybShlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgY29uc3QgbG9jYXRpb24gPSBzZWFyY2hGb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPWxvY2F0aW9uXScpLnZhbHVlXHJcblxyXG4gIGlmICghbG9jYXRpb24pIHtcclxuICAgIHdpbmRvdy5hbGVydCgnUGxlYXNlIGVudGVyIGEgbG9jYXRpb24nKVxyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG5cclxuICBmZXRjaChcclxuICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bG9jYXRpb259JnVuaXRzPW1ldHJpYyZhcHBpZD0ke0FQSUlEfWBcclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGlmIChkYXRhLmNvZCA9PT0gJzQwNCcpIHtcclxuICAgICAgICBhbGVydChkYXRhLm1lc3NhZ2UpXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgLy8gY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgY29uc3Qge1xyXG4gICAgICAgIG1haW46IHsgdGVtcCwgZmVlbHNfbGlrZSwgaHVtaWRpdHkgfSxcclxuICAgICAgICBkdCxcclxuICAgICAgICB3aW5kOiB7IHNwZWVkIH0sXHJcbiAgICAgICAgc3lzOiB7IGNvdW50cnkgfSxcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIGNvb3JkOiB7IGxhdCwgbG9uIH0sXHJcbiAgICAgIH0gPSBkYXRhXHJcblxyXG4gICAgICB1cGRhdGVNYWluVGVtcFVJKG5hbWUsIGNvdW50cnksIGR0LCB0ZW1wLCBmZWVsc19saWtlLCBzcGVlZCwgaHVtaWRpdHkpXHJcblxyXG4gICAgICBmZXRjaChcclxuICAgICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PSR7bGF0fSZsb249JHtsb259JmV4Y2x1ZGU9bWludXRlJnVuaXRzPW1ldHJpYyZhcHBpZD0ke0FQSUlEfWBcclxuICAgICAgKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgICAgdXBkYXRlRGF5c0NvbnRhaW5lcihkYXRhLmRhaWx5KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICB9KVxyXG5cclxuICBzZWFyY2hGb3JtLnJlc2V0KClcclxufVxyXG5cclxuc2VhcmNoRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBzdWJtaXRTZWFyY2hGb3JtKVxyXG5cclxuLy8gY2hhbmdlVGVtcGVyYXR1cmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4vLyAgIGFsZXJ0KCdDaGFuZ2UgRicpXHJcbi8vIH0pXHJcblxyXG5uYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKGdlb1N1Y2Nlc3MsIGdlb0Vycm9yKVxyXG4iXSwibmFtZXMiOlsiSU5JVElBTF9DSVRZIiwiSU5JVElBTF9DSVRZX0dFTyIsImxhdCIsImxvbiIsIkFQSUlEIiwiY29udmVydFRpbWUiLCJsYXN0Q2l0eSIsImxvY2F0aW9uVGl0bGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2NhdGlvbkRhdGUiLCJsb2NhdGlvblRpbWUiLCJsb2NhdGlvblRlbXBlcmF0dXJlIiwiZmVlbExpa2VFbGVtZW50Iiwid2luZFNwZWVkIiwibW9yZUh1bWlkaXR5IiwiY29sV2Vla0RheUNvbnRhaW5lciIsInVwZGF0ZU1haW5UZW1wVUkiLCJuYW1lIiwiY291bnRyeSIsInRpbWVzdGFtcCIsInRlbXAiLCJmZWVsTGlrZSIsInNwZWVkIiwiaHVtaWRpdHkiLCJ0ZXh0Q29udGVudCIsImxlbmd0aCIsImRhdGUiLCJ0aW1lIiwidXBkYXRlRGF5c0NvbnRhaW5lciIsImRheXMiLCJpbm5lckhUTUwiLCJtYXAiLCJkYXkiLCJpbmRleCIsImR0IiwiZmVlbHNfbGlrZSIsIndpbmRfc3BlZWQiLCJkIiwiRGF0ZSIsInRvR01UU3RyaW5nIiwic2xpY2UiLCJ0b0xvY2FsZVN0cmluZyIsInNwbGl0IiwiY29udmVydENUb0YiLCJkZWciLCJjb252ZXJ0RlRvQyIsIm1haW5Mb2FkaW5nU3Bpbm5lciIsIm1haW5Db250YWluZXIiLCJzZWFyY2hGb3JtIiwiZ2VvU3VjY2VzcyIsInBvc2l0aW9uIiwiY29vcmRzIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwidGltZXpvbmUiLCJjdXJyZW50IiwiZGFpbHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJlcnIiLCJnZW9FcnJvciIsImFsZXJ0Iiwic3VibWl0U2VhcmNoRm9ybSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImxvY2F0aW9uIiwidmFsdWUiLCJ3aW5kb3ciLCJjb2QiLCJtZXNzYWdlIiwibWFpbiIsIndpbmQiLCJzeXMiLCJjb29yZCIsImVycm9yIiwicmVzZXQiLCJhZGRFdmVudExpc3RlbmVyIiwibmF2aWdhdG9yIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iXSwic291cmNlUm9vdCI6IiJ9