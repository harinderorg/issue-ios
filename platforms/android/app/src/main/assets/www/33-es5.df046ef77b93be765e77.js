function asyncGeneratorStep(t,e,n,o,r,i,a){try{var s=t[i](a),l=s.value}catch(c){return void n(c)}s.done?e(l):Promise.resolve(l).then(o,r)}function _asyncToGenerator(t){return function(){var e=this,n=arguments;return new Promise((function(o,r){var i=t.apply(e,n);function a(t){asyncGeneratorStep(i,o,r,a,s,"next",t)}function s(t){asyncGeneratorStep(i,o,r,a,s,"throw",t)}a(void 0)}))}}function _defineProperty(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{K9Nc:function(t,e,n){"use strict";n.r(e),n.d(e,"ion_app",(function(){return d})),n.d(e,"ion_buttons",(function(){return b})),n.d(e,"ion_content",(function(){return p})),n.d(e,"ion_footer",(function(){return m})),n.d(e,"ion_header",(function(){return x})),n.d(e,"ion_router_outlet",(function(){return A})),n.d(e,"ion_title",(function(){return j})),n.d(e,"ion_toolbar",(function(){return O}));var o=n("imtE"),r=n("AfW+"),i=n("aiEM"),a=n("0AIG"),s=(n("kBU6"),n("Dl6n")),l=n("m9yc"),c=n("7MJf"),d=function(){function t(e){_classCallCheck(this,t),Object(o.k)(this,e)}return _createClass(t,[{key:"componentDidLoad",value:function(){h((function(){var t=Object(r.f)(window,"hybrid");r.b.getBoolean("_testing")||n.e(7).then(n.bind(null,"a7BO")).then((function(t){return t.startTapClick(r.b)})),r.b.getBoolean("statusTap",t)&&n.e(5).then(n.bind(null,"bGI/")).then((function(t){return t.startStatusTap()})),r.b.getBoolean("inputShims",u())&&n.e(4).then(n.bind(null,"aoIK")).then((function(t){return t.startInputShims(r.b)})),r.b.getBoolean("hardwareBackButton",t)&&Promise.resolve().then(n.bind(null,"EV1M")).then((function(t){return t.startHardwareBackButton()})),n.e(3).then(n.bind(null,"3YLQ")).then((function(t){return t.startFocusVisible()}))}))}},{key:"render",value:function(){var t,e=Object(o.d)(this);return Object(o.i)(o.a,{class:(t={},_defineProperty(t,e,!0),_defineProperty(t,"ion-page",!0),_defineProperty(t,"force-statusbar-padding",r.b.getBoolean("_forceStatusbarPadding")),t)})}},{key:"el",get:function(){return Object(o.f)(this)}}],[{key:"style",get:function(){return"html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}"}}]),t}(),u=function(){return Object(r.f)(window,"ios")&&Object(r.f)(window,"mobile")},h=function(t){"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)},b=function(){function t(e){_classCallCheck(this,t),Object(o.k)(this,e),this.collapse=!1}return _createClass(t,[{key:"render",value:function(){var t,e=Object(o.d)(this);return Object(o.i)(o.a,{class:(t={},_defineProperty(t,e,!0),_defineProperty(t,"buttons-collapse",this.collapse),t)})}}],[{key:"style",get:function(){return".sc-ion-buttons-md-h{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99}.sc-ion-buttons-md-s  ion-button {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;--padding-top:0;--padding-bottom:0;--padding-start:8px;--padding-end:8px;--box-shadow:none;margin-left:2px;margin-right:2px;height:32px;font-size:14px;font-weight:500}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-md-s  ion-button {margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}.sc-ion-buttons-md-s  ion-button:not(.button-round) {--border-radius:2px}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s  .button , .ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s  .button {--color:initial;--color-focused:var(--ion-color-contrast);--color-hover:var(--ion-color-contrast);--background-activated:transparent;--background-focused:var(--ion-color-contrast);--background-hover:var(--ion-color-contrast)}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s  .button-solid , .ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s  .button-solid {--background:var(--ion-color-contrast);--background-activated:transparent;--background-focused:var(--ion-color-shade);--background-hover:var(--ion-color-base);--color:var(--ion-color-base);--color-focused:var(--ion-color-base);--color-hover:var(--ion-color-base)}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s  .button-outline , .ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s  .button-outline {--border-color:var(--ion-color-contrast)}.sc-ion-buttons-md-s  .button-has-icon-only.button-clear {--padding-top:12px;--padding-end:12px;--padding-bottom:12px;--padding-start:12px;--border-radius:50%;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;width:48px;height:48px}.sc-ion-buttons-md-s  .button {--background-hover:currentColor}.sc-ion-buttons-md-s  .button-solid {--color:var(--ion-toolbar-background,var(--ion-background-color,#fff));--background:var(--ion-toolbar-color,var(--ion-text-color,#424242));--background-activated:transparent;--background-focused:currentColor}.sc-ion-buttons-md-s  .button-outline {--border-color:currentColor}.sc-ion-buttons-md-s  .button-clear , .sc-ion-buttons-md-s  .button-outline {--color:initial;--background:transparent;--background-activated:transparent;--background-focused:currentColor;--background-hover:currentColor}.sc-ion-buttons-md-s  ion-icon[slot=start] {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-right:.3em;font-size:1.4em}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-md-s  ion-icon[slot=start] {margin-right:unset;-webkit-margin-end:.3em;margin-inline-end:.3em}}.sc-ion-buttons-md-s  ion-icon[slot=end] {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-left:.4em;font-size:1.4em}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-md-s  ion-icon[slot=end] {margin-left:unset;-webkit-margin-start:.4em;margin-inline-start:.4em}}.sc-ion-buttons-md-s  ion-icon[slot=icon-only] {padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;font-size:1.8em}"}}]),t}(),p=function(){function t(e){_classCallCheck(this,t),Object(o.k)(this,e),this.isScrolling=!1,this.lastScroll=0,this.queued=!1,this.cTop=-1,this.cBottom=-1,this.mode=Object(o.d)(this),this.detail={scrollTop:0,scrollLeft:0,type:"scroll",event:void 0,startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,data:void 0,isScrolling:!0},this.fullscreen=!1,this.scrollX=!1,this.scrollY=!0,this.scrollEvents=!1,this.ionScrollStart=Object(o.e)(this,"ionScrollStart",7),this.ionScroll=Object(o.e)(this,"ionScroll",7),this.ionScrollEnd=Object(o.e)(this,"ionScrollEnd",7)}var e;return _createClass(t,[{key:"disconnectedCallback",value:function(){this.onScrollEnd()}},{key:"componentDidLoad",value:function(){this.resize()}},{key:"onClick",value:function(t){this.isScrolling&&(t.preventDefault(),t.stopPropagation())}},{key:"shouldForceOverscroll",value:function(){var t=this.forceOverscroll,e=this.mode;return void 0===t?"ios"===e&&Object(r.f)("ios"):t}},{key:"resize",value:function(){this.fullscreen?Object(o.g)(this.readDimensions.bind(this)):0===this.cTop&&0===this.cBottom||(this.cTop=this.cBottom=0,this.el.forceUpdate())}},{key:"readDimensions",value:function(){var t=g(this.el),e=Math.max(this.el.offsetTop,0),n=Math.max(t.offsetHeight-e-this.el.offsetHeight,0);(e!==this.cTop||n!==this.cBottom)&&(this.cTop=e,this.cBottom=n,this.el.forceUpdate())}},{key:"onScroll",value:function(t){var e=this,n=Date.now(),r=!this.isScrolling;this.lastScroll=n,r&&this.onScrollStart(),!this.queued&&this.scrollEvents&&(this.queued=!0,Object(o.g)((function(n){e.queued=!1,e.detail.event=t,f(e.detail,e.scrollEl,n,r),e.ionScroll.emit(e.detail)})))}},{key:"getScrollElement",value:function(){return Promise.resolve(this.scrollEl)}},{key:"scrollToTop",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return this.scrollToPoint(void 0,0,t)}},{key:"scrollToBottom",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return this.scrollToPoint(void 0,this.scrollEl.scrollHeight-this.scrollEl.clientHeight,t)}},{key:"scrollByPoint",value:function(t,e,n){return this.scrollToPoint(t+this.scrollEl.scrollLeft,e+this.scrollEl.scrollTop,n)}},{key:"scrollToPoint",value:(e=_asyncToGenerator(regeneratorRuntime.mark((function t(e,n){var o,r,i,a,s,l,c,d,u,h,b=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=b.length>2&&void 0!==b[2]?b[2]:0,r=this.scrollEl,!(o<32)){t.next=4;break}return t.abrupt("return",(null!=n&&(r.scrollTop=n),void(null!=e&&(r.scrollLeft=e))));case 4:return a=0,s=new Promise((function(t){return i=t})),l=r.scrollTop,c=r.scrollLeft,d=null!=n?n-l:0,u=null!=e?e-c:0,h=function t(e){var n=Math.min(1,(e-a)/o)-1,s=Math.pow(n,3)+1;0!==d&&(r.scrollTop=Math.floor(s*d+l)),0!==u&&(r.scrollLeft=Math.floor(s*u+c)),s<1?requestAnimationFrame(t):i()},t.abrupt("return",(requestAnimationFrame((function(t){a=t,h(t)})),s));case 7:case"end":return t.stop()}}),t,this)}))),function(t,n){return e.apply(this,arguments)})},{key:"onScrollStart",value:function(){var t=this;this.isScrolling=!0,this.ionScrollStart.emit({isScrolling:!0}),this.watchDog&&clearInterval(this.watchDog),this.watchDog=setInterval((function(){t.lastScroll<Date.now()-120&&t.onScrollEnd()}),100)}},{key:"onScrollEnd",value:function(){clearInterval(this.watchDog),this.watchDog=null,this.isScrolling&&(this.isScrolling=!1,this.ionScrollEnd.emit({isScrolling:!1}))}},{key:"render",value:function(){var t,e=this,n=this.scrollX,i=this.scrollY,a=Object(o.d)(this),l=this.shouldForceOverscroll(),c="ios"===a&&r.b.getBoolean("experimentalTransitionShadow",!0);return this.resize(),Object(o.i)(o.a,{class:Object.assign(Object.assign({},Object(s.a)(this.color)),(t={},_defineProperty(t,a,!0),_defineProperty(t,"content-sizing",Object(s.c)("ion-popover",this.el)),_defineProperty(t,"overscroll",l),t)),style:{"--offset-top":"".concat(this.cTop,"px"),"--offset-bottom":"".concat(this.cBottom,"px")}},Object(o.i)("div",{id:"background-content"}),Object(o.i)("main",{class:{"inner-scroll":!0,"scroll-x":n,"scroll-y":i,overscroll:(n||i)&&l},ref:function(t){return e.scrollEl=t},onScroll:this.scrollEvents?function(t){return e.onScroll(t)}:void 0},Object(o.i)("slot",null)),c?Object(o.i)("div",{class:"transition-effect"},Object(o.i)("div",{class:"transition-cover"}),Object(o.i)("div",{class:"transition-shadow"})):null,Object(o.i)("slot",{name:"fixed"}))}},{key:"el",get:function(){return Object(o.f)(this)}}],[{key:"style",get:function(){return':host{--background:var(--ion-background-color,#fff);--color:var(--ion-text-color,#000);--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px;--keyboard-offset:0px;--offset-top:0px;--offset-bottom:0px;--overflow:auto;display:block;position:relative;-ms-flex:1;flex:1;width:100%;height:100%;margin:0!important;padding:0!important;font-family:var(--ion-font-family,inherit);contain:size style}:host(.ion-color) .inner-scroll{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.outer-content){--background:var(--ion-color-step-50,#f2f2f2)}#background-content{background:var(--background)}#background-content,.inner-scroll{left:0;right:0;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);position:absolute}.inner-scroll{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:calc(var(--padding-top) + var(--offset-top));padding-bottom:calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom));color:var(--color);-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.inner-scroll{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.scroll-x,.scroll-y{-webkit-overflow-scrolling:touch;will-change:scroll-position;-ms-scroll-chaining:none;overscroll-behavior:contain}.scroll-y{-ms-touch-action:pan-y;touch-action:pan-y;overflow-y:var(--overflow)}.scroll-x{-ms-touch-action:pan-x;touch-action:pan-x;overflow-x:var(--overflow)}.scroll-x.scroll-y{-ms-touch-action:auto;touch-action:auto}.overscroll:after,.overscroll:before{position:absolute;width:1px;height:1px;content:""}.overscroll:before{bottom:-1px}.overscroll:after{top:-1px}:host(.content-sizing){contain:none}:host(.content-sizing) .inner-scroll{position:relative}.transition-effect{display:none;left:-100%;opacity:0;pointer-events:none}.transition-cover,.transition-effect{position:absolute;width:100%;height:100%}.transition-cover{right:0;background:#000;opacity:.1}.transition-shadow{display:block;position:absolute;right:0;width:10px;height:100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAgCAYAAAAIXrg4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTE3MDgzRkQ5QTkyMTFFOUEwNzQ5MkJFREE1NUY2MjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTE3MDgzRkU5QTkyMTFFOUEwNzQ5MkJFREE1NUY2MjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxMTcwODNGQjlBOTIxMUU5QTA3NDkyQkVEQTU1RjYyNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxMTcwODNGQzlBOTIxMUU5QTA3NDkyQkVEQTU1RjYyNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmePEuQAAABNSURBVHjaYvz//z8DIxAwMDAwATGMhmFmPDQuOSZks0AMmoJBaQHjkPfB0Lfg/2gQjVow+HPy/yHvg9GiYjQfjMbBqAWjFgy/4hogwADYqwdzxy5BuwAAAABJRU5ErkJggg==);background-repeat:repeat-y;background-size:10px 16px}::slotted([slot=fixed]){position:absolute}'}}]),t}(),g=function(t){return t.closest("ion-tabs")||t.closest("ion-app,ion-page,.ion-page,page-inner")||function(t){return t.parentElement?t.parentElement:t.parentNode&&t.parentNode.host?t.parentNode.host:null}(t)},f=function(t,e,n,o){var r=t.currentX,i=t.currentY,a=e.scrollLeft,s=e.scrollTop,l=n-t.currentTime;if(o&&(t.startTime=n,t.startX=a,t.startY=s,t.velocityX=t.velocityY=0),t.currentTime=n,t.currentX=t.scrollLeft=a,t.currentY=t.scrollTop=s,t.deltaX=a-t.startX,t.deltaY=s-t.startY,l>0&&l<100){var c=(s-i)/l;t.velocityX=(a-r)/l*.7+.3*t.velocityX,t.velocityY=.7*c+.3*t.velocityY}},m=function(){function t(e){_classCallCheck(this,t),Object(o.k)(this,e),this.translucent=!1}return _createClass(t,[{key:"render",value:function(){var t,e=Object(o.d)(this),n=this.translucent;return Object(o.i)(o.a,{role:"contentinfo",class:(t={},_defineProperty(t,e,!0),_defineProperty(t,"footer-".concat(e),!0),_defineProperty(t,"footer-translucent",n),_defineProperty(t,"footer-translucent-".concat(e),n),t)},"ios"===e&&n&&Object(o.i)("div",{class:"footer-background"}),Object(o.i)("slot",null))}}],[{key:"style",get:function(){return'ion-footer{display:block;position:relative;-ms-flex-order:1;order:1;width:100%;z-index:10}ion-footer ion-toolbar:last-of-type{padding-bottom:var(--ion-safe-area-bottom,0)}.footer-md:before{left:0;top:-2px;bottom:auto;background-position:left 0 top 0;position:absolute;width:100%;height:2px;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==");background-repeat:repeat-x;content:""}:host-context([dir=rtl]) .footer-md:before,[dir=rtl] .footer-md:before{left:unset;right:unset;right:0;background-position:right 0 top 0}.footer-md.ion-no-border:before{display:none}'}}]),t}(),v=function(t){var e=document.querySelector("".concat(t,".ion-cloned-element"));if(null!==e)return e;var n=document.createElement(t);return n.classList.add("ion-cloned-element"),n.style.setProperty("display","none"),document.body.appendChild(n),n},k=function(t){if(t){var e=t.querySelectorAll("ion-toolbar");return{el:t,toolbars:Array.from(e).map((function(t){var e=t.querySelector("ion-title");return{el:t,background:t.shadowRoot.querySelector(".toolbar-background"),ionTitleEl:e,innerTitleEl:e?e.shadowRoot.querySelector(".toolbar-title"):null,ionButtonsEl:Array.from(t.querySelectorAll("ion-buttons"))||[]}}))||[]}}},y=function(t,e){void 0===e?t.background.style.removeProperty("--opacity"):t.background.style.setProperty("--opacity",e.toString())},w=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];e?t.el.classList.remove("header-collapse-condense-inactive"):t.el.classList.add("header-collapse-condense-inactive")},x=function(){function t(e){_classCallCheck(this,t),Object(o.k)(this,e),this.collapsibleHeaderInitialized=!1,this.translucent=!1}var e,n,r,a;return _createClass(t,[{key:"componentDidLoad",value:(a=_asyncToGenerator(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.checkCollapsibleHeader();case 2:case"end":return t.stop()}}),t,this)}))),function(){return a.apply(this,arguments)})},{key:"componentDidUpdate",value:(r=_asyncToGenerator(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.checkCollapsibleHeader();case 2:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})},{key:"componentDidUnload",value:function(){this.destroyCollapsibleHeader()}},{key:"checkCollapsibleHeader",value:(n=_asyncToGenerator(regeneratorRuntime.mark((function t(){var e,n,r,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e="condense"===this.collapse,(n=!(!e||"ios"!==Object(o.d)(this))&&e)||!this.collapsibleHeaderInitialized){t.next=5;break}this.destroyCollapsibleHeader(),t.next=9;break;case 5:if(!n||this.collapsibleHeaderInitialized){t.next=9;break}return r=this.el.closest("ion-app,ion-page,.ion-page,page-inner"),i=r?r.querySelector("ion-content"):null,t.next=9,this.setupCollapsibleHeader(i,r);case 9:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"destroyCollapsibleHeader",value:function(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),this.intersectionObserver=void 0),this.scrollEl&&this.contentScrollCallback&&(this.scrollEl.removeEventListener("scroll",this.contentScrollCallback),this.contentScrollCallback=void 0),this.collapsibleMainHeader&&(this.collapsibleMainHeader.classList.remove("header-collapse-main"),this.collapsibleMainHeader=void 0)}},{key:"setupCollapsibleHeader",value:(e=_asyncToGenerator(regeneratorRuntime.mark((function t(e,n){var r,a,s,l=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e&&n){t.next=2;break}return t.abrupt("return",void console.error("ion-header requires a content to collapse, make sure there is an ion-content."));case 2:return t.next=4,e.getScrollElement();case 4:if(this.scrollEl=t.sent,r=n.querySelectorAll("ion-header"),this.collapsibleMainHeader=Array.from(r).find((function(t){return"condense"!==t.collapse})),this.collapsibleMainHeader){t.next=8;break}return t.abrupt("return");case 8:a=k(this.collapsibleMainHeader),s=k(this.el),a&&s&&(w(a,!1),a.toolbars.forEach((function(t){y(t,0)})),this.intersectionObserver=new IntersectionObserver((function(t){!function(t,e,n){Object(o.l)((function(){!function(t,e){if(t[0].isIntersecting){var n=t[0].intersectionRatio>.9?0:100*(1-t[0].intersectionRatio)/75;e.toolbars.forEach((function(t){y(t,1===n?void 0:n)}))}}(t,e);var o=t[0],r=o.intersectionRect,i=r.width*r.height,a=0===i&&0==o.rootBounds.width*o.rootBounds.height,s=Math.abs(r.left-o.boundingClientRect.left),l=Math.abs(r.right-o.boundingClientRect.right);a||i>0&&(s>=5||l>=5)||(o.isIntersecting?(w(e,!1),w(n)):(0===r.x&&0===r.y||0!==r.width&&0!==r.height)&&(w(e),w(n,!1),y(e.toolbars[0])))}))}(t,a,s)}),{root:e,threshold:[.25,.3,.4,.5,.6,.7,.8,.9,1]}),this.intersectionObserver.observe(s.toolbars[s.toolbars.length-1].el),this.contentScrollCallback=function(){!function(t,e,n){Object(o.g)((function(){var r=t.scrollTop,a=Object(i.c)(1,1+-r/500,1.1);null===n.querySelector("ion-refresher.refresher-native")&&Object(o.l)((function(){!function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];t.forEach((function(t){var o=t.ionTitleEl,r=t.innerTitleEl;o&&"large"===o.size&&(r.style.transformOrigin="left center",r.style.transition=n?"all 0.2s ease-in-out":"",r.style.transform="scale3d(".concat(e,", ").concat(e,", 1)"))}))}(e.toolbars,a)}))}))}(l.scrollEl,s,e)},this.scrollEl.addEventListener("scroll",this.contentScrollCallback),Object(o.l)((function(){v("ion-title"),v("ion-back-button"),l.collapsibleMainHeader.classList.add("header-collapse-main")})),this.collapsibleHeaderInitialized=!0);case 10:case"end":return t.stop()}}),t,this)}))),function(t,n){return e.apply(this,arguments)})},{key:"render",value:function(){var t,e=this.translucent,n=Object(o.d)(this),r=this.collapse||"none";return Object(o.i)(o.a,{role:"banner",class:(t={},_defineProperty(t,n,!0),_defineProperty(t,"header-".concat(n),!0),_defineProperty(t,"header-translucent",this.translucent),_defineProperty(t,"header-collapse-".concat(r),!0),_defineProperty(t,"header-translucent-".concat(n),this.translucent),t)},"ios"===n&&e&&Object(o.i)("div",{class:"header-background"}),Object(o.i)("slot",null))}},{key:"el",get:function(){return Object(o.f)(this)}}],[{key:"style",get:function(){return'ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top,0)}.header-md:after{left:0;bottom:-5px;background-position:left 0 top -2px;position:absolute;width:100%;height:5px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==);background-repeat:repeat-x;content:""}:host-context([dir=rtl]) .header-md:after,[dir=rtl] .header-md:after{left:unset;right:unset;right:0;background-position:right 0 top -2px}.header-collapse-condense,.header-md.ion-no-border:after{display:none}'}}]),t}(),A=function(){function t(e){_classCallCheck(this,t),Object(o.k)(this,e),this.animationEnabled=!0,this.mode=Object(o.d)(this),this.animated=!0,this.ionNavWillLoad=Object(o.e)(this,"ionNavWillLoad",7),this.ionNavWillChange=Object(o.e)(this,"ionNavWillChange",3),this.ionNavDidChange=Object(o.e)(this,"ionNavDidChange",3)}var e,i,s,d,u,h,b;return _createClass(t,[{key:"swipeHandlerChanged",value:function(){this.gesture&&this.gesture.enable(void 0!==this.swipeHandler)}},{key:"connectedCallback",value:(b=_asyncToGenerator(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(2).then(n.bind(null,"vYiJ"));case 2:t.t0=this.el,t.t1=function(){return!!e.swipeHandler&&e.swipeHandler.canStart()&&e.animationEnabled},t.t2=function(){return e.swipeHandler&&e.swipeHandler.onStart()},t.t3=function(t){return e.ani&&e.ani.progressStep(t)},t.t4=function(t,n,o){if(e.ani){e.animationEnabled=!1,e.ani.onFinish((function(){e.animationEnabled=!0,e.swipeHandler&&e.swipeHandler.onEnd(t)}),{oneTimeCallback:!0});var r=t?-.001:.001;t?r+=Object(a.a)([0,0],[.32,.72],[0,1],[1,1],n)[0]:(e.ani.easing("cubic-bezier(1, 0, 0.68, 0.28)"),r+=Object(a.a)([0,0],[1,0],[.68,.28],[1,1],n)[0]),e.ani.progressEnd(t?1:0,r,o)}},this.gesture=t.sent.createSwipeBackGesture(t.t0,t.t1,t.t2,t.t3,t.t4),this.swipeHandlerChanged();case 9:case"end":return t.stop()}}),t,this)}))),function(){return b.apply(this,arguments)})},{key:"componentWillLoad",value:function(){this.ionNavWillLoad.emit()}},{key:"disconnectedCallback",value:function(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}},{key:"commit",value:(h=_asyncToGenerator(regeneratorRuntime.mark((function t(e,n,o){var r,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.lock();case 2:return r=t.sent,i=!1,t.prev=4,t.next=7,this.transition(e,n,o);case 7:i=t.sent,t.next=13;break;case 10:t.prev=10,t.t0=t.catch(4),console.error(t.t0);case 13:return t.abrupt("return",(r(),i));case 14:case"end":return t.stop()}}),t,this,[[4,10]])}))),function(t,e,n){return h.apply(this,arguments)})},{key:"setRouteId",value:(u=_asyncToGenerator(regeneratorRuntime.mark((function t(e,n,o){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setRoot(e,n,{duration:"root"===o?0:void 0,direction:"back"===o?"back":"forward"});case 2:return t.t0=t.sent,t.t1=this.activeEl,t.abrupt("return",{changed:t.t0,element:t.t1});case 5:case"end":return t.stop()}}),t,this)}))),function(t,e,n){return u.apply(this,arguments)})},{key:"getRouteId",value:(d=_asyncToGenerator(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.activeEl,t.abrupt("return",e?{id:e.tagName,element:e}:void 0);case 2:case"end":return t.stop()}}),t,this)}))),function(){return d.apply(this,arguments)})},{key:"setRoot",value:(s=_asyncToGenerator(regeneratorRuntime.mark((function t(e,n,o){var r,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.activeComponent!==e){t.next=2;break}return t.abrupt("return",!1);case 2:return r=this.activeEl,t.next=5,Object(l.a)(this.delegate,this.el,e,["ion-page","ion-page-invisible"],n);case 5:return i=t.sent,this.activeComponent=e,this.activeEl=i,t.next=10,this.commit(i,r,o);case 10:return t.next=12,Object(l.b)(this.delegate,r);case 12:return t.abrupt("return",!0);case 13:case"end":return t.stop()}}),t,this)}))),function(t,e,n){return s.apply(this,arguments)})},{key:"transition",value:(i=_asyncToGenerator(regeneratorRuntime.mark((function t(e,n){var o,i,a,s,l,d=this,u=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=u.length>2&&void 0!==u[2]?u[2]:{},n!==e){t.next=3;break}return t.abrupt("return",!1);case 3:return this.ionNavWillChange.emit(),i=this.el,a=this.mode,s=this.animated&&r.b.getBoolean("animated",!0),l=this.animation||o.animationBuilder||r.b.get("navAnimation"),t.next=7,Object(c.e)(Object.assign({mode:a,animated:s,animationBuilder:l,enteringEl:e,leavingEl:n,baseEl:i,progressCallback:o.progressAnimation?function(t){return d.ani=t}:void 0},o));case 7:return this.ionNavDidChange.emit(),t.abrupt("return",!0);case 9:case"end":return t.stop()}}),t,this)}))),function(t,e){return i.apply(this,arguments)})},{key:"lock",value:(e=_asyncToGenerator(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.waitPromise,this.waitPromise=new Promise((function(t){return n=t})),t.t0=void 0!==e,!t.t0){t.next=6;break}return t.next=6,e;case 6:return t.abrupt("return",n);case 7:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"render",value:function(){return Object(o.i)("slot",null)}},{key:"el",get:function(){return Object(o.f)(this)}}],[{key:"watchers",get:function(){return{swipeHandler:["swipeHandlerChanged"]}}},{key:"style",get:function(){return":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}"}}]),t}(),j=function(){function t(e){_classCallCheck(this,t),Object(o.k)(this,e),this.ionStyle=Object(o.e)(this,"ionStyle",7)}return _createClass(t,[{key:"sizeChanged",value:function(){this.emitStyle()}},{key:"connectedCallback",value:function(){this.emitStyle()}},{key:"emitStyle",value:function(){var t=this.getSize();this.ionStyle.emit(_defineProperty({},"title-".concat(t),!0))}},{key:"getSize",value:function(){return void 0!==this.size?this.size:"default"}},{key:"render",value:function(){var t,e=Object(o.d)(this),n=this.getSize();return Object(o.i)(o.a,{class:Object.assign((t={},_defineProperty(t,e,!0),_defineProperty(t,"title-".concat(n),!0),t),Object(s.a)(this.color))},Object(o.i)("div",{class:"toolbar-title"},Object(o.i)("slot",null)))}},{key:"el",get:function(){return Object(o.f)(this)}}],[{key:"watchers",get:function(){return{size:["sizeChanged"]}}},{key:"style",get:function(){return":host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host{padding-left:20px;padding-right:20px;padding-top:0;padding-bottom:0;font-size:20px;font-weight:500;letter-spacing:.0125em}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px}}:host(.title-small){width:100%;height:100%;font-size:15px;font-weight:400}"}}]),t}(),O=function(){function t(e){_classCallCheck(this,t),Object(o.k)(this,e),this.childrenStyles=new Map}return _createClass(t,[{key:"componentWillLoad",value:function(){var t=Array.from(this.el.querySelectorAll("ion-buttons")),e=t.find((function(t){return"start"===t.slot}));e&&e.classList.add("buttons-first-slot");var n=t.reverse(),o=n.find((function(t){return"end"===t.slot}))||n.find((function(t){return"primary"===t.slot}))||n.find((function(t){return"secondary"===t.slot}));o&&o.classList.add("buttons-last-slot")}},{key:"childrenStyle",value:function(t){t.stopPropagation();var e=t.target.tagName,n=t.detail,o={},r=this.childrenStyles.get(e)||{},i=!1;Object.keys(n).forEach((function(t){var e="toolbar-".concat(t),a=n[t];a!==r[e]&&(i=!0),a&&(o[e]=!0)})),i&&(this.childrenStyles.set(e,o),this.el.forceUpdate())}},{key:"render",value:function(){var t=Object(o.d)(this),e={};return this.childrenStyles.forEach((function(t){Object.assign(e,t)})),Object(o.i)(o.a,{class:Object.assign(Object.assign(_defineProperty({"in-toolbar":Object(s.c)("ion-toolbar",this.el)},t,!0),e),Object(s.a)(this.color))},Object(o.i)("div",{class:"toolbar-background"}),Object(o.i)("div",{class:"toolbar-container"},Object(o.i)("slot",{name:"start"}),Object(o.i)("slot",{name:"secondary"}),Object(o.i)("div",{class:"toolbar-content"},Object(o.i)("slot",null)),Object(o.i)("slot",{name:"primary"}),Object(o.i)("slot",{name:"end"})))}},{key:"el",get:function(){return Object(o.f)(this)}}],[{key:"style",get:function(){return":host{--border-width:0;--border-style:solid;--opacity:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--ion-safe-area-left);padding-right:var(--ion-safe-area-right);display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toolbar-container{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.toolbar-background{top:0;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:var(--opacity);z-index:-1;pointer-events:none}.toolbar-background,::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background,var(--ion-background-color,#fff));--color:var(--ion-toolbar-color,var(--ion-text-color,#424242));--border-color:var(--ion-toolbar-border-color,var(--ion-border-color,var(--ion-color-step-150,#c1c4cd)));--padding-top:0;--padding-bottom:0;--padding-start:0;--padding-end:0;--min-height:56px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:3;order:3;min-width:0;max-width:100%}::slotted(ion-segment){min-height:var(--min-height)}::slotted(.buttons-first-slot){margin-left:4px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(.buttons-first-slot){margin-left:unset;-webkit-margin-start:4px;margin-inline-start:4px}}::slotted(.buttons-last-slot){margin-right:4px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(.buttons-last-slot){margin-right:unset;-webkit-margin-end:4px;margin-inline-end:4px}}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:4;order:4}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}"}}]),t}()}}]);