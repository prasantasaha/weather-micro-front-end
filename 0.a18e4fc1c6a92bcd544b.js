webpackJsonp([0],{370:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){return v.bootstrap(e)}function a(e){return v.mount(e)}function u(e){return v.unmount(e)}function i(){var e=document.getElementById("weather-app-react");return e||(e=document.createElement("div"),e.id="weather-app-react",document.body.appendChild(e)),e}Object.defineProperty(t,"__esModule",{value:!0}),t.bootstrap=r,t.mount=a,t.unmount=u;var c=n(2),s=o(c),l=n(204),p=o(l),m=n(371),d=o(m),f=n(203),b=o(f),v=(0,d.default)({React:s.default,ReactDOM:p.default,rootComponent:b.default,domElementGetter:i})},371:function(e,t,n){"use strict";function o(e){if("object"!==(void 0===e?"undefined":l(e)))throw new Error("single-spa-react requires a configuration object");var t=s({},p,e);if(!t.React)throw new Error("single-spa-react must be passed opts.React");if(!t.ReactDOM)throw new Error("single-spa-react must be passed opts.ReactDOM");if(!t.rootComponent)throw new Error("single-spa-react must be passed opts.rootComponent");if(!t.domElementGetter)throw new Error("single-spa-react must be passed opts.domElementGetter function");return{bootstrap:r.bind(null,t),mount:a.bind(null,t),unmount:u.bind(null,t)}}function r(e){return Promise.resolve()}function a(e,t){return new Promise(function(n,o){var r=function(){n(this)};e.ReactDOM.render(e.React.createElement(e.rootComponent,t),i(e),r).componentDidCatch||e.suppressComponentDidCatchWarning||!c(e.React)||console.warn("single-spa-react: "+(t.name||t.appName||t.childAppName)+"'s rootComponent should implement componentDidCatch to avoid accidentally unmounting the entire single-spa application.")})}function u(e){return Promise.resolve().then(function(){e.ReactDOM.unmountComponentAtNode(i(e))})}function i(e){var t=e.domElementGetter();if(!t)throw new Error("single-spa-react: domElementGetter function did not return a valid dom element");return t}function c(e){if(!(e&&"string"==typeof e.version&&e.version.indexOf(".")>=0))return!1;var t=e.version.slice(0,e.version.indexOf("."));try{return Number(t)>=16}catch(e){return!1}}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=o;var p={React:null,ReactDOM:null,rootComponent:null,domElementGetter:null,suppressComponentDidCatchWarning:!1}}});
//# sourceMappingURL=0.a18e4fc1c6a92bcd544b.js.map