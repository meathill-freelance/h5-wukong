!function(e){function i(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}var n={};i.m=e,i.c=n,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},i.p="",i(i.s=4)}([function(e,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.embedScript=function(e,i){var n=document.createElement("script");n.async=!0,n.type="text/javascript",n.src=e,n.onload=i,document.body.appendChild(n)}},,,,function(e,i,n){"use strict";function t(e){if("wukong"===e.item.id){var i=d.getElementsByTagName("footer")[0].appendChild(e.result);setTimeout(function(){var e=l.getResult("wukong",!0),n=URL.createObjectURL(e);p.style.backgroundSize=i.clientWidth+"px",i.className="in",i.addEventListener("transitionend",function(){p.style.backgroundImage="url("+n+")",u=!0},!1)},50)}}function s(e){console.log(e.progress),u&&(p.style.width=77.3333334*e.progress+"%")}function a(){(l=new createjs.LoadQueue(!0,"http://qiniu.meathill.com/wukong/")).installPlugin(createjs.Sound),l.on("fileload",t),l.on("progress",s),l.on("complete",r),l.loadFile({id:"wukong",src:"./img/wukong.png"}),l.loadManifest(["//cdn.staticfile.org/Director/1.2.8/director.min.js",{id:"homepage",src:"./img/homepage.jpg"},{id:"faxing",src:"./img/faxing.png"},{id:"bufu",src:"./img/bufu.png"},{id:"js",src:"./js/main.js"},{id:"css",src:"./css/screen.css"},{id:"nav",src:"./img/nav.jpg"},{id:"links",src:"./img/nav.png"},{id:"blade",src:"./audio/blade.mp3"},{id:"about",src:"./img/about.jpg"},{id:"chupin",src:"./img/chupin.jpg"},{id:"intro",src:"./img/intro.jpg"},{id:"zhuchuang",src:"./img/zhuchuang.jpg"},{id:"price",src:"./img/price.jpg"},{id:"video",src:"./img/video.jpg"},{id:"back-button",src:"./img/back-button.png"},{id:"cloud1",src:"./img/cloud1.png"},{id:"cloud2",src:"./img/cloud2.png"},{id:"cloud3",src:"./img/cloud3.png"},{id:"cloud4",src:"./img/cloud4.png"},{id:"cloud5",src:"./img/cloud5.png"},{id:"poster",src:"./img/poster.jpg"}])}function r(){console.log("homepage"),p.style.width="77.3333334%";var e=void 0,i=setInterval(function(){u&&(clearInterval(i),e=new App(l),isWeixin||autoPlayMusic())},1e3)}var o=function(e){return e&&e.__esModule?e:{default:e}}(n(5)),c=n(0),l=void 0,u=!1,d=document.getElementById("loading"),p=d.getElementsByClassName("bar")[0];new o.default;(0,c.embedScript)("//code.createjs.com/createjs-2015.11.26.min.js",function(){"Promise"in window&&window.Promise instanceof Function?a():(0,c.embedScript)("//cdn.staticfile.org/bluebird/3.5.0/bluebird.min.js",a)})},function(e,i,n){"use strict";function t(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(i,"__esModule",{value:!0});var s=function(){function e(e,i){for(var n=0;n<i.length;n++){var t=i[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(i,n,t){return n&&e(i.prototype,n),t&&e(i,t),i}}(),a=function(){function e(){t(this,e),this.createElement(),this.delegateEvent(),this.isPlaying=!0,this.player=document.getElementById("music"),this.player.addEventListener("play",this.onCanPlayHandler.bind(this),!1)}return s(e,[{key:"createElement",value:function(){var e=this.el=document.createElement("div");e.id="player",e.className="hide",e.innerHTML='<i class="fa fa-music fa-spin"></i>',this.icon=e.firstChild,document.body.appendChild(e)}},{key:"delegateEvent",value:function(){var e=this;this.el.addEventListener("click",function(){e.playPause()},!1),this.el.addEventListener("video",function(){e.playPause(!1)})}},{key:"playPause",value:function(e){this.isPlaying=void 0===e?!this.isPlaying:e,this.isPlaying?this.player.play():this.player.pause(),this.el.className=this.isPlaying?"":"disabled",this.isPlaying?this.icon.classList.add("fa-spin"):this.icon.classList.remove("fa-spin")}},{key:"onCanPlayHandler",value:function(){this.el.classList.remove("hide"),this.player.removeEventListener("canplay",this.onCanPlayHandler)}}]),e}();i.default=a}]);