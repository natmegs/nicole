webpackJsonp([0xefeaa6d1881d],{"./node_modules/lodash.throttle/index.js":function(e,t){(function(t){function n(e,t,n){function o(t){var n=y,o=h;return y=h=void 0,O=t,v=e.apply(o,n)}function a(e){return O=e,g=setTimeout(c,t),E?o(e):v}function r(e){var n=e-j,o=e-O,i=t-n;return T?w(i,b-o):i}function u(e){var n=e-j,o=e-O;return void 0===j||n>=t||n<0||T&&o>=b}function c(){var e=x();return u(e)?d(e):void(g=setTimeout(c,r(e)))}function d(e){return g=void 0,k&&y?o(e):(y=h=void 0,v)}function p(){void 0!==g&&clearTimeout(g),O=0,y=j=h=g=void 0}function f(){return void 0===g?v:d(x())}function m(){var e=x(),n=u(e);if(y=arguments,h=this,j=e,n){if(void 0===g)return a(j);if(T)return g=setTimeout(c,t),o(j)}return void 0===g&&(g=setTimeout(c,t)),v}var y,h,b,v,g,j,O=0,E=!1,T=!1,k=!0;if("function"!=typeof e)throw new TypeError(l);return t=s(t)||0,i(n)&&(E=!!n.leading,T="maxWait"in n,b=T?_(s(n.maxWait)||0,t):b,k="trailing"in n?!!n.trailing:k),m.cancel=p,m.flush=f,m}function o(e,t,o){var a=!0,r=!0;if("function"!=typeof e)throw new TypeError(l);return i(o)&&(a="leading"in o?!!o.leading:a,r="trailing"in o?!!o.trailing:r),n(e,t,{leading:a,maxWait:t,trailing:r})}function i(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function a(e){return!!e&&"object"==typeof e}function r(e){return"symbol"==typeof e||a(e)&&j.call(e)==c}function s(e){if("number"==typeof e)return e;if(r(e))return u;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=f.test(e);return n||m.test(e)?y(e.slice(2),n?2:8):p.test(e)?u:+e}var l="Expected a function",u=NaN,c="[object Symbol]",d=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,m=/^0o[0-7]+$/i,y=parseInt,h="object"==typeof t&&t&&t.Object===Object&&t,b="object"==typeof self&&self&&self.Object===Object&&self,v=h||b||Function("return this")(),g=Object.prototype,j=g.toString,_=Math.max,w=Math.min,x=function(){return v.Date.now()};e.exports=o}).call(t,function(){return this}())},"./node_modules/prop-types/factoryWithThrowingShims.js":function(e,t,n){"use strict";var o=n("./node_modules/fbjs/lib/emptyFunction.js"),i=n("./node_modules/fbjs/lib/invariant.js"),a=n("./node_modules/prop-types/lib/ReactPropTypesSecret.js");e.exports=function(){function e(e,t,n,o,r,s){s!==a&&i(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=o,n.PropTypes=n,n}},"./node_modules/prop-types/index.js":function(e,t,n){e.exports=n("./node_modules/prop-types/factoryWithThrowingShims.js")()},"./node_modules/react-animate-on-scroll/dist/scrollAnimation.min.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=function(e,t,n){for(var o=!0;o;){var i=e,a=t,r=n;o=!1,null===i&&(i=Function.prototype);var s=Object.getOwnPropertyDescriptor(i,a);if(void 0!==s){if("value"in s)return s.value;var l=s.get;if(void 0===l)return;return l.call(r)}var u=Object.getPrototypeOf(i);if(null===u)return;e=u,t=a,n=r,o=!0,s=u=void 0}},l=n("./node_modules/react/react.js"),u=o(l),c=n("./node_modules/lodash.throttle/index.js"),d=o(c),p=n("./node_modules/prop-types/index.js"),f=o(p),m=function(e){function t(e){i(this,t),s(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e);var n=this.props.initiallyVisible?"":"hidden";this.listener=(0,d.default)(this.handleScroll.bind(this),200),this.state={classes:"animated",style:{animationDuration:this.props.duration+"s",visibility:n},lastVisibility:{partially:!1,completely:!1},timeouts:[]},window&&window.addEventListener&&window.addEventListener("scroll",this.listener),this.getClasses=this.getClasses.bind(this)}return a(t,e),r(t,null,[{key:"posTop",value:function(){return"undefined"!=typeof window.pageYOffset?window.pageYOffset:document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop?document.body.scrollTop:0}}]),r(t,[{key:"componentDidMount",value:function(){this.setState({elementBottom:this.node.getBoundingClientRect().bottom+t.posTop(),elementTop:this.node.getBoundingClientRect().top+t.posTop()},this.handleScroll),this.handleScroll()}},{key:"componentWillUnmount",value:function(){window&&window.addEventListener&&window.removeEventListener("scroll",this.listener)}},{key:"handleScroll",value:function(){var e=this,t=this.isVisible();if(t.partially||this.state.timeouts.forEach(function(e){clearTimeout(e)}),!(this.props.animateOnce&&this.state.lastVisibility.completely||t.completely===this.state.lastVisibility.completely&&t.partially===this.state.lastVisibility.partially)){var n,o,i;!function(){var a=e.getStyle(t),r=e.getClasses(t);n=e,t.partially?(o=setTimeout(function(){n.setState({classes:r,style:a,lastVisibility:t})},e.props.delay),i=e.state.timeouts.slice(),i.push(o),e.setState({timeouts:i})):e.setState({classes:r,style:a,lastVisibility:t})}()}}},{key:"isVisible",value:function(){var e=window.scrollY+window.innerHeight,t=window.scrollY,n=this.props.offset,o=this.state.elementBottom,i=this.state.elementTop,a=window.scrollY+window.innerHeight/2;if(o-i>window.innerHeight-2*n){var r=i<a+n&&o>a-n,s=r||i>a+n&&i<e||o<a-n&&o>t;return{completely:r,partially:s}}return{completely:o<e-n&&o>t+n&&i>t+n&&i<e-n,partially:o<e&&o>t||i>t&&i<e}}},{key:"getStyle",value:function(e){var t={animationDuration:this.props.duration+"s"};return e.partially||this.props.initiallyVisible?e.completely||!e.partially||this.state.lastVisibility.partially||this.props.initiallyVisible||(t.visibility="hidden"):t.visibility="hidden",t}},{key:"getClasses",value:function(e){var t="animated";return e.completely&&this.props.animateIn||e.partially&&this.state.classes.includes(this.props.animateIn)&&!this.props.animateOut?t+=" "+this.props.animateIn:e.partially&&this.state.lastVisibility.completely&&this.props.animateOut&&(t+=" "+this.props.animateOut),t}},{key:"render",value:function(){var e=this;return u.default.createElement("div",{ref:function(t){e.node=t},className:this.state.classes,style:this.state.style},this.props.children)}}]),t}(l.Component);t.default=m,m.defaultProps={offset:100,duration:1,initiallyVisible:!1,delay:0,animateOnce:!1},m.propTypes={animateIn:f.default.string,animateOut:f.default.string,offset:f.default.number,duration:f.default.number,delay:f.default.number,initiallyVisible:f.default.bool,animateOnce:f.default.bool},e.exports=t.default},"./node_modules/react-fontawesome/lib/index.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n("./node_modules/react/react.js"),d=o(c),p=n("./node_modules/prop-types/index.js"),f=o(p),m=n("./node_modules/react-fontawesome/lib/screen-reader-styles.js"),y=o(m),h=function(e){function t(){a(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.displayName="FontAwesome",e}return s(t,e),u(t,[{key:"render",value:function(){var e=this.props,t=e.border,n=e.cssModule,o=e.className,a=e.fixedWidth,r=e.flip,s=e.inverse,u=e.name,c=e.pulse,p=e.rotate,f=e.size,m=e.spin,h=e.stack,b=e.tag,v=void 0===b?"span":b,g=e.ariaLabel,j=i(e,["border","cssModule","className","fixedWidth","flip","inverse","name","pulse","rotate","size","spin","stack","tag","ariaLabel"]),_=[];return n?(_.push(n.fa),_.push(n["fa-"+u]),f&&_.push(n["fa-"+f]),m&&_.push(n["fa-spin"]),c&&_.push(n["fa-pulse"]),t&&_.push(n["fa-border"]),a&&_.push(n["fa-fw"]),s&&_.push(n["fa-inverse"]),r&&_.push(n["fa-flip-"+r]),p&&_.push(n["fa-rotate-"+p]),h&&_.push(n["fa-stack-"+h])):(_.push("fa"),_.push("fa-"+u),f&&_.push("fa-"+f),m&&_.push("fa-spin"),c&&_.push("fa-pulse"),t&&_.push("fa-border"),a&&_.push("fa-fw"),s&&_.push("fa-inverse"),r&&_.push("fa-flip-"+r),p&&_.push("fa-rotate-"+p),h&&_.push("fa-stack-"+h)),o&&_.push(o),d.default.createElement(v,l({},j,{"aria-hidden":!0,className:_.join(" ")}),g?d.default.createElement("span",{style:y.default},g):null)}}]),t}(d.default.Component);h.propTypes={ariaLabel:f.default.string,border:f.default.bool,className:f.default.string,cssModule:f.default.object,fixedWidth:f.default.bool,flip:f.default.oneOf(["horizontal","vertical"]),inverse:f.default.bool,name:f.default.string.isRequired,pulse:f.default.bool,rotate:f.default.oneOf([90,180,270]),size:f.default.oneOf(["lg","2x","3x","4x","5x"]),spin:f.default.bool,stack:f.default.oneOf(["1x","2x"]),tag:f.default.string},t.default=h,e.exports=t.default},"./node_modules/react-fontawesome/lib/screen-reader-styles.js":function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={position:"absolute",width:"1px",height:"1px",padding:"0px",margin:"-1px",overflow:"hidden",clip:"rect(0px, 0px, 0px, 0px)",border:"0px"},e.exports=t.default},"./src/components/contact-links.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var i=n("./node_modules/react-fontawesome/lib/index.js"),a=o(i),r=n("./node_modules/react/react.js"),s=o(r);t.default=function(){return s.default.createElement("div",{className:"contact-links"},s.default.createElement("a",{href:"#"},s.default.createElement(a.default,{name:"facebook"})),s.default.createElement("a",{target:"_blank",href:"https://twitter.com/notnotnicole"},s.default.createElement(a.default,{name:"twitter"})),s.default.createElement("a",{href:"#"},s.default.createElement(a.default,{name:"envelope-o"})),s.default.createElement("a",{target:"_blank",href:"https://www.instagram.com/nicole_laurreen/?hl=en"},s.default.createElement(a.default,{name:"instagram"})))},e.exports=t.default},"./src/components/image-container.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var i=n("./node_modules/react/react.js"),a=o(i);t.default=function(e){var t=e.children;return a.default.createElement("div",{className:"image-container"},t)},e.exports=t.default},"./src/components/profile-desc.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var i=n("./node_modules/react/react.js"),a=o(i);t.default=function(){return a.default.createElement("div",{className:"profile-desc"},a.default.createElement("h2",null,"About Me"),a.default.createElement("p",null,"Nicole, hurry up and finish your description, yo."),a.default.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."),a.default.createElement("p",null,"Tempor incididunt ut labore et dolore magna aliqua. Commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."),a.default.createElement("p",null,"Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."))},e.exports=t.default},"./src/components/profile-photo.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var i=n("./node_modules/react/react.js"),a=o(i),r=n("./node_modules/react-animate-on-scroll/dist/scrollAnimation.min.js"),s=(o(r),n("./src/images/nicole.jpg")),l=o(s);t.default=function(){return a.default.createElement("div",{className:"profile-photo"},a.default.createElement("img",{src:l.default}))},e.exports=t.default},"./src/images/nicole.jpg":function(e,t,n){e.exports=n.p+"static/nicole.d80658d4.jpg"},'./node_modules/babel-loader/lib/index.js?{"plugins":["C:/Users/Natalie/Documents/gatsby-proj/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","C:/Users/Natalie/Documents/gatsby-proj/node_modules/babel-plugin-add-module-exports/lib/index.js","C:/Users/Natalie/Documents/gatsby-proj/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["C:/Users/Natalie/Documents/gatsby-proj/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"C:/Users/Natalie/Documents/gatsby-proj/node_modules/babel-preset-stage-0/lib/index.js","C:/Users/Natalie/Documents/gatsby-proj/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/about.js':function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var i=n("./node_modules/react/react.js"),a=o(i),r=n("./src/components/image-container.js"),s=(o(r),n("./src/components/profile-photo.js")),l=o(s),u=n("./src/components/profile-desc.js"),c=o(u),d=n("./src/components/contact-links.js"),p=o(d);t.default=function(e){e.data;return a.default.createElement("div",{className:"profile-container"},a.default.createElement(l.default,null),a.default.createElement(c.default,null),a.default.createElement(p.default,null))},e.exports=t.default}});
//# sourceMappingURL=component---src-pages-about-js-f23356b36b0dc960edc2.js.map