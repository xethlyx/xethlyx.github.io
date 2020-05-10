webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./style.css":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./style.css ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ":root {\r\n    --text-bright: #fff;\r\n    --text-sub: rgb(219, 219, 219);\r\n    --background: #1C1C1E;\r\n    --dark-background: #14141A;\r\n    --dark-background-neutral: #141414;\r\n    --sharp-transition: cubic-bezier(.08,.91,.6,.99);\r\n}\r\n\r\nbody {\r\n    font-family: 'Segoe UI', sans-serif;\r\n    background: var(--background);\r\n    color: var(--text-bright);\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n}\r\n\r\nh1, h2 {\r\n    font-family: 'Exo 2', sans-serif;\r\n}\r\n\r\nh1 {\r\n    font-weight: 400;\r\n    font-size: 75px;\r\n\r\n    margin: 10px;\r\n    margin-bottom: 0;\r\n}\r\n\r\nh2 {\r\n    font-weight: 300;\r\n    font-size: 28px;\r\n\r\n    margin: 10px;\r\n    margin-top: 0;\r\n    margin-bottom: 20px;\r\n\r\n    color: var(--text-sub);\r\n}\r\n\r\nh3 {\r\n    margin-bottom: 3px;\r\n}\r\n\r\nbutton, a.button {\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n\r\n    display: inline-flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n\r\n    font-family: 'Jost', sans-serif;\r\n    font-size: 18px;\r\n\r\n    padding: 10px;\r\n\r\n    border: 0;\r\n    border-radius: 3px;\r\n\r\n    text-align: left;\r\n    color: var(--text-bright);\r\n    background: linear-gradient(90deg, #36A8FF, #348cff);\r\n}\r\n\r\nbutton:focus, a.button:focus {\r\n    outline: 0;\r\n}\r\n\r\nbutton.muted, a.button.muted {\r\n    background: rgba(255, 255, 255, 0.1);\r\n}\r\n\r\nbutton.wide, a.button.wide {\r\n    width: 250px;\r\n}\r\n\r\n.button-arrow-container {\r\n    z-index: 10;\r\n    height: 1em;\r\n    width: 40px;\r\n    height: 18px;\r\n\r\n    overflow: hidden;\r\n}\r\n\r\n.button-arrow {\r\n    height: 100%;\r\n    margin-left: 20px;\r\n\r\n    transition: margin 0.1s var(--sharp-transition), opacity 0.1s var(--sharp-transition);\r\n}\r\n\r\nbutton:hover .button-arrow, a.button:hover .button-arrow {\r\n\r\n    margin-right: -5px;\r\n    margin-left: 25px;\r\n\r\n    opacity: 0.7;\r\n}\r\n\r\n/**************************************/\r\n/* NavBar                             */\r\n/**************************************/\r\n\r\nheader {\r\n    background-color: 0; /* no bg color */\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 66px;\r\n    max-height: 66px;\r\n\r\n    z-index: 20;\r\n\r\n    top: 0;\r\n    left: 0;\r\n}\r\n\r\nheader.undocked:not(.open) {\r\n    background-color: var(--dark-background);\r\n}\r\n\r\nheader ul {\r\n    padding: 0;\r\n    margin: 16px;\r\n}\r\n\r\nheader li {\r\n    list-style: none;\r\n\r\n    float: left;\r\n    display: block;\r\n\r\n    height: 35px;\r\n}\r\n\r\nheader li img {\r\n    width: 35px;\r\n    height: 35px;\r\n\r\n    margin-right: 20px;\r\n}\r\n\r\nheader li a {\r\n    color: var(--text-bright);\r\n    text-decoration: none;\r\n    font-size: 18px;\r\n    padding: 0 10px;\r\n\r\n    height: 35px;\r\n    line-height: 35px;\r\n\r\n    display: inline-block;\r\n}\r\n\r\nheader li.active a {\r\n    font-weight: 700;\r\n}\r\n\r\nheader .icon {\r\n    display: none;\r\n}\r\n\r\n/**************************************/\r\n/* Main Page                          */\r\n/**************************************/\r\n\r\n.main-cover {\r\n    background: var(--background);\r\n\r\n    width: 100%;\r\n    min-height: 70vh;\r\n    min-height: max(70vh, 300px);\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n}\r\n\r\n.main-cover .spacer {\r\n    height: 15vh;\r\n}\r\n\r\n.main-cover .cover-float {\r\n    margin-left: 40px;\r\n}\r\n\r\n.main-cover .cover-float button {\r\n    margin: 10px;\r\n}\r\n\r\n.main-footer {\r\n    width: 100%;\r\n}\r\n\r\n.main-footer .footer-float {\r\n    margin: 40px;\r\n    padding: 10px;\r\n}\r\n\r\n/**************************************/\r\n/* Contact                            */\r\n/**************************************/\r\n\r\n.contact {\r\n    text-align: center;\r\n    margin-top: 80px;\r\n}\r\n\r\n.contact a.button {\r\n    margin-top: 20px;\r\n}\r\n\r\n.contact-card-container {\r\n    margin: auto;\r\n    display: flex;\r\n\r\n    align-items: center;\r\n\r\n    margin: 10px 10% 0 10%;\r\n}\r\n\r\n.contact-card {\r\n    order: 3;\r\n\r\n    flex: 1 1;\r\n    background-color: var(--dark-background-neutral);\r\n\r\n    border-radius: 3px;\r\n    margin: 2vw;\r\n    \r\n    height: 60vh;\r\n\r\n    text-align: center;\r\n}\r\n\r\n.contact-card .content {\r\n    position: relative;\r\n\r\n    height: calc(100% - 80px);\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    text-align: left;\r\n    margin: 40px;\r\n\r\n    color: var(--text-sub);\r\n}\r\n\r\n.contact-card .content img.big {\r\n    max-height: 200px;\r\n    margin: auto;\r\n}\r\n\r\n.contact-card .content a.button {\r\n    position: absolute;\r\n\r\n    bottom: 0;\r\n\r\n    margin-top: 20px;\r\n    width: calc(100% - 20px);\r\n    justify-self: end;\r\n}\r\n\r\n.contact-card .content h3 {\r\n    font-size: 20px;\r\n    margin-bottom: 10px;\r\n    color: var(--text-bright);\r\n}\r\n\r\n.contact-card-header {\r\n    height: 4px;\r\n    border-radius: 3px 3px 0 0;\r\n}\r\n\r\n.contact-card.large {\r\n    height: 70vh;\r\n}", "",{"version":3,"sources":["style.css"],"names":[],"mappings":"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","file":"style.css","sourcesContent":[":root {\r\n    --text-bright: #fff;\r\n    --text-sub: rgb(219, 219, 219);\r\n    --background: #1C1C1E;\r\n    --dark-background: #14141A;\r\n    --dark-background-neutral: #141414;\r\n    --sharp-transition: cubic-bezier(.08,.91,.6,.99);\r\n}\r\n\r\nbody {\r\n    font-family: 'Segoe UI', sans-serif;\r\n    background: var(--background);\r\n    color: var(--text-bright);\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n}\r\n\r\nh1, h2 {\r\n    font-family: 'Exo 2', sans-serif;\r\n}\r\n\r\nh1 {\r\n    font-weight: 400;\r\n    font-size: 75px;\r\n\r\n    margin: 10px;\r\n    margin-bottom: 0;\r\n}\r\n\r\nh2 {\r\n    font-weight: 300;\r\n    font-size: 28px;\r\n\r\n    margin: 10px;\r\n    margin-top: 0;\r\n    margin-bottom: 20px;\r\n\r\n    color: var(--text-sub);\r\n}\r\n\r\nh3 {\r\n    margin-bottom: 3px;\r\n}\r\n\r\nbutton, a.button {\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n\r\n    display: inline-flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n\r\n    font-family: 'Jost', sans-serif;\r\n    font-size: 18px;\r\n\r\n    padding: 10px;\r\n\r\n    border: 0;\r\n    border-radius: 3px;\r\n\r\n    text-align: left;\r\n    color: var(--text-bright);\r\n    background: linear-gradient(90deg, #36A8FF, #348cff);\r\n}\r\n\r\nbutton:focus, a.button:focus {\r\n    outline: 0;\r\n}\r\n\r\nbutton.muted, a.button.muted {\r\n    background: rgba(255, 255, 255, 0.1);\r\n}\r\n\r\nbutton.wide, a.button.wide {\r\n    width: 250px;\r\n}\r\n\r\n.button-arrow-container {\r\n    z-index: 10;\r\n    height: 1em;\r\n    width: 40px;\r\n    height: 18px;\r\n\r\n    overflow: hidden;\r\n}\r\n\r\n.button-arrow {\r\n    height: 100%;\r\n    margin-left: 20px;\r\n\r\n    transition: margin 0.1s var(--sharp-transition), opacity 0.1s var(--sharp-transition);\r\n}\r\n\r\nbutton:hover .button-arrow, a.button:hover .button-arrow {\r\n\r\n    margin-right: -5px;\r\n    margin-left: 25px;\r\n\r\n    opacity: 0.7;\r\n}\r\n\r\n/**************************************/\r\n/* NavBar                             */\r\n/**************************************/\r\n\r\nheader {\r\n    background-color: 0; /* no bg color */\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 66px;\r\n    max-height: 66px;\r\n\r\n    z-index: 20;\r\n\r\n    top: 0;\r\n    left: 0;\r\n}\r\n\r\nheader.undocked:not(.open) {\r\n    background-color: var(--dark-background);\r\n}\r\n\r\nheader ul {\r\n    padding: 0;\r\n    margin: 16px;\r\n}\r\n\r\nheader li {\r\n    list-style: none;\r\n\r\n    float: left;\r\n    display: block;\r\n\r\n    height: 35px;\r\n}\r\n\r\nheader li img {\r\n    width: 35px;\r\n    height: 35px;\r\n\r\n    margin-right: 20px;\r\n}\r\n\r\nheader li a {\r\n    color: var(--text-bright);\r\n    text-decoration: none;\r\n    font-size: 18px;\r\n    padding: 0 10px;\r\n\r\n    height: 35px;\r\n    line-height: 35px;\r\n\r\n    display: inline-block;\r\n}\r\n\r\nheader li.active a {\r\n    font-weight: 700;\r\n}\r\n\r\nheader .icon {\r\n    display: none;\r\n}\r\n\r\n/**************************************/\r\n/* Main Page                          */\r\n/**************************************/\r\n\r\n.main-cover {\r\n    background: var(--background);\r\n\r\n    width: 100%;\r\n    min-height: 70vh;\r\n    min-height: max(70vh, 300px);\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n}\r\n\r\n.main-cover .spacer {\r\n    height: 15vh;\r\n}\r\n\r\n.main-cover .cover-float {\r\n    margin-left: 40px;\r\n}\r\n\r\n.main-cover .cover-float button {\r\n    margin: 10px;\r\n}\r\n\r\n.main-footer {\r\n    width: 100%;\r\n}\r\n\r\n.main-footer .footer-float {\r\n    margin: 40px;\r\n    padding: 10px;\r\n}\r\n\r\n/**************************************/\r\n/* Contact                            */\r\n/**************************************/\r\n\r\n.contact {\r\n    text-align: center;\r\n    margin-top: 80px;\r\n}\r\n\r\n.contact a.button {\r\n    margin-top: 20px;\r\n}\r\n\r\n.contact-card-container {\r\n    margin: auto;\r\n    display: flex;\r\n\r\n    align-items: center;\r\n\r\n    margin: 10px 10% 0 10%;\r\n}\r\n\r\n.contact-card {\r\n    order: 3;\r\n\r\n    flex: 1 1 0;\r\n    background-color: var(--dark-background-neutral);\r\n\r\n    border-radius: 3px;\r\n    margin: 2vw;\r\n    \r\n    height: 60vh;\r\n\r\n    text-align: center;\r\n}\r\n\r\n.contact-card .content {\r\n    position: relative;\r\n\r\n    height: calc(100% - 80px);\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    text-align: left;\r\n    margin: 40px;\r\n\r\n    color: var(--text-sub);\r\n}\r\n\r\n.contact-card .content img.big {\r\n    max-height: 200px;\r\n    margin: auto;\r\n}\r\n\r\n.contact-card .content a.button {\r\n    position: absolute;\r\n\r\n    bottom: 0;\r\n\r\n    margin-top: 20px;\r\n    width: calc(100% - 20px);\r\n    justify-self: end;\r\n}\r\n\r\n.contact-card .content h3 {\r\n    font-size: 20px;\r\n    margin-bottom: 10px;\r\n    color: var(--text-bright);\r\n}\r\n\r\n.contact-card-header {\r\n    height: 4px;\r\n    border-radius: 3px 3px 0 0;\r\n}\r\n\r\n.contact-card.large {\r\n    height: 70vh;\r\n}"]}]);
// Exports
module.exports = exports;


/***/ })

})
//# sourceMappingURL=_app.js.0f0ea7a4ee1f6ea2b338.hot-update.js.map