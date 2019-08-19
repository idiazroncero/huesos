!function(e){var t={};function i(s){if(t[s])return t[s].exports;var n=t[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=t,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(s,n,function(t){return e[t]}.bind(null,n));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){const s=i(1),n=document.querySelectorAll("[data-accordion]"),a=document.querySelectorAll("[data-file-input]");var l=document.getElementsByClassName("js--selectr");l.length&&Array.prototype.forEach.call(l,function(e){new s(e)});for(let e of n){let t=e.querySelectorAll("details");t.forEach(function(e){e.addEventListener("toggle",function(){e.open&&t.forEach(function(t){t!==e&&(t.open=!1)})})})}for(let e of a){let t=e.querySelector("label");labelVal=t.innerHTML,labelVerb=t.getAttribute("data-upload-verb"),labelName=t.getAttribute("data-upload-name"),input=e.querySelector("input"),console.log(labelVal),input.addEventListener("change",function(e){var i=labelVal;this.files&&this.files.length>1?i=labelVerb+" "+this.files.length+" "+labelName:this.files&&1==this.files.length&&(i=labelVerb+" "+e.target.value.split("\\").pop()),t.innerHTML=i})}},function(e,t,i){var s,n,a;n=[],void 0===(a="function"==typeof(s=function(e){function t(e,t){return e.hasOwnProperty(t)&&(!0===e[t]||e[t].length)}function i(e,t,i){e.parentNode?e.parentNode.parentNode||t.appendChild(e.parentNode):t.appendChild(e),n.removeClass(e,"excluded"),i||(e.innerHTML=e.textContent)}var s=function(){};s.prototype={on:function(e,t){this._events=this._events||{},this._events[e]=this._events[e]||[],this._events[e].push(t)},off:function(e,t){this._events=this._events||{},0!=e in this._events&&this._events[e].splice(this._events[e].indexOf(t),1)},emit:function(e){if(this._events=this._events||{},0!=e in this._events)for(var t=0;t<this._events[e].length;t++)this._events[e][t].apply(this,Array.prototype.slice.call(arguments,1))}},s.mixin=function(e){for(var t=["on","off","emit"],i=0;i<t.length;i++)"function"==typeof e?e.prototype[t[i]]=s.prototype[t[i]]:e[t[i]]=s.prototype[t[i]];return e};var n={extend:function(e,t){for(var i in t)if(t.hasOwnProperty(i)){var s=t[i];s&&"[object Object]"===Object.prototype.toString.call(s)?(e[i]=e[i]||{},n.extend(e[i],s)):e[i]=s}return e},each:function(e,t,i){if("[object Object]"===Object.prototype.toString.call(e))for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.call(i,s,e[s],e);else{s=0;for(var n=e.length;s<n;s++)t.call(i,s,e[s],e)}},createElement:function(e,t){var i=document,s=i.createElement(e);if(t&&"[object Object]"===Object.prototype.toString.call(t))for(var n in t)if(n in s)s[n]=t[n];else if("html"===n)s.innerHTML=t[n];else if("text"===n){var a=i.createTextNode(t[n]);s.appendChild(a)}else s.setAttribute(n,t[n]);return s},hasClass:function(e,t){if(e)return e.classList?e.classList.contains(t):!!e.className&&!!e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))},addClass:function(e,t){n.hasClass(e,t)||(e.classList?e.classList.add(t):e.className=e.className.trim()+" "+t)},removeClass:function(e,t){n.hasClass(e,t)&&(e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\s)"+t.split(" ").join("|")+"(\\s|$)","gi")," "))},closest:function(e,t){return e&&e!==document.body&&(t(e)?e:n.closest(e.parentNode,t))},isInt:function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e},debounce:function(e,t,i){var s;return function(){var n=this,a=arguments,l=i&&!s;clearTimeout(s),s=setTimeout(function(){s=null,i||e.apply(n,a)},t),l&&e.apply(n,a)}},rect:function(e,t){var i=window,s=e.getBoundingClientRect(),n=t?i.pageXOffset:0;return i=t?i.pageYOffset:0,{bottom:s.bottom+i,height:s.height,left:s.left+n,right:s.right+n,top:s.top+i,width:s.width}},includes:function(e,t){return-1<e.indexOf(t)},startsWith:function(e,t){return e.substr(0,t.length)===t},truncate:function(e){for(;e.firstChild;)e.removeChild(e.firstChild)}},a=function(){if(this.items.length){var e=document.createDocumentFragment();if(this.config.pagination){var t=this.pages.slice(0,this.pageIndex);n.each(t,function(t,s){n.each(s,function(t,s){i(s,e,this.customOption)},this)},this)}else n.each(this.items,function(t,s){i(s,e,this.customOption)},this);e.childElementCount&&(n.removeClass(this.items[this.navIndex],"active"),this.navIndex=(e.querySelector(".selectr-option.selected")||e.querySelector(".selectr-option")).idx,n.addClass(this.items[this.navIndex],"active")),this.tree.appendChild(e)}},l=function(e,t){var i=this.customOption?this.config.renderOption(t||e):e.textContent;return(i=n.createElement("li",{class:"selectr-option",html:i,role:"treeitem","aria-selected":!1})).idx=e.idx,this.items.push(i),e.defaultSelected&&this.defaultSelected.push(e.idx),e.disabled&&(i.disabled=!0,n.addClass(i,"disabled")),i},o=function(){var e=this.tree;if(e.scrollTop>=e.scrollHeight-e.offsetHeight&&this.pageIndex<this.pages.length){var t=document.createDocumentFragment();n.each(this.pages[this.pageIndex],function(e,s){i(s,t,this.customOption)},this),e.appendChild(t),this.pageIndex++,this.emit("selectr.paginate",{items:this.items.length,total:this.data.length,page:this.pageIndex,pages:this.pages.length})}},h=function(){(this.config.searchable||this.config.taggable)&&(this.input.value=null,this.searching=!1,this.config.searchable&&n.removeClass(this.inputContainer,"active"),n.hasClass(this.container,"notice")&&(n.removeClass(this.container,"notice"),n.addClass(this.container,"open"),this.input.focus()),n.each(this.items,function(e,t){n.removeClass(t,"excluded"),this.customOption||(t.innerHTML=t.textContent)},this))};return(e=function(e,t){if(this.defaultConfig={defaultSelected:!0,width:"auto",disabled:!1,searchable:!0,clearable:!1,sortSelected:!1,allowDeselect:!1,closeOnScroll:!1,nativeDropdown:!1,nativeKeyboard:!1,placeholder:"Select an option...",taggable:!1,tagPlaceholder:"Enter a tag...",messages:{noResults:"No results.",noOptions:"No options available.",maxSelections:"A maximum of {max} items can be selected.",tagDuplicate:"That tag is already in use."}},!e)throw Error("You must supply either a HTMLSelectElement or a CSS3 selector string.");if(this.el=e,"string"==typeof e&&(this.el=document.querySelector(e)),null===this.el)throw Error("The element you passed to Selectr can not be found.");if("select"!==this.el.nodeName.toLowerCase())throw Error("The element you passed to Selectr is not a HTMLSelectElement.");this.render(t)}).prototype.render=function(e){if(!this.rendered){this.el.selectr=this,this.config=n.extend(this.defaultConfig,e),this.originalType=this.el.type,this.originalIndex=this.el.tabIndex,this.defaultSelected=[],this.originalOptionCount=this.el.options.length,(this.config.multiple||this.config.taggable)&&(this.el.multiple=!0),this.disabled=t(this.config,"disabled"),this.opened=!1,this.config.taggable&&(this.config.searchable=!1),this.mobileDevice=this.navigating=!1,/Android|webOS|iPhone|iPad|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent)&&(this.mobileDevice=!0),this.customOption=this.config.hasOwnProperty("renderOption")&&"function"==typeof this.config.renderOption,this.customSelected=this.config.hasOwnProperty("renderSelection")&&"function"==typeof this.config.renderSelection,this.supportsEventPassiveOption=this.detectEventPassiveOption(),s.mixin(this),function(){this.requiresPagination=this.config.pagination&&0<this.config.pagination,t(this.config,"width")&&(n.isInt(this.config.width)?this.width=this.config.width+"px":"auto"===this.config.width?this.width="100%":n.includes(this.config.width,"%")&&(this.width=this.config.width)),this.container=n.createElement("div",{class:"selectr-container"}),this.config.customClass&&n.addClass(this.container,this.config.customClass),this.mobileDevice?n.addClass(this.container,"selectr-mobile"):n.addClass(this.container,"selectr-desktop"),this.el.tabIndex=-1,this.config.nativeDropdown||this.mobileDevice?n.addClass(this.el,"selectr-visible"):n.addClass(this.el,"selectr-hidden"),this.selected=n.createElement("div",{class:"selectr-selected",disabled:this.disabled,tabIndex:0,"aria-expanded":!1}),this.label=n.createElement(this.el.multiple?"ul":"span",{class:"selectr-label"});var e=n.createElement("div",{class:"selectr-options-container"});if(this.tree=n.createElement("ul",{class:"selectr-options",role:"tree","aria-hidden":!0,"aria-expanded":!1}),this.notice=n.createElement("div",{class:"selectr-notice"}),this.el.setAttribute("aria-hidden",!0),this.disabled&&(this.el.disabled=!0),this.el.multiple&&(n.addClass(this.label,"selectr-tags"),n.addClass(this.container,"multiple"),this.tags=[],this.selectedValues=this.getSelectedProperties("value"),this.selectedIndexes=this.getSelectedProperties("idx")),this.selected.appendChild(this.label),this.config.clearable&&(this.selectClear=n.createElement("button",{class:"selectr-clear",type:"button"}),this.container.appendChild(this.selectClear),n.addClass(this.container,"clearable")),this.config.taggable){var i=n.createElement("li",{class:"input-tag"});this.input=n.createElement("input",{class:"selectr-tag-input",placeholder:this.config.tagPlaceholder,tagIndex:0,autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:"false",role:"textbox",type:"search"}),i.appendChild(this.input),this.label.appendChild(i),n.addClass(this.container,"taggable"),this.tagSeperators=[","],this.config.tagSeperators&&(this.tagSeperators=this.tagSeperators.concat(this.config.tagSeperators))}this.config.searchable&&(this.input=n.createElement("input",{class:"selectr-input",tagIndex:-1,autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:"false",role:"textbox",type:"search"}),this.inputClear=n.createElement("button",{class:"selectr-input-clear",type:"button"}),this.inputContainer=n.createElement("div",{class:"selectr-input-container"}),this.inputContainer.appendChild(this.input),this.inputContainer.appendChild(this.inputClear),e.appendChild(this.inputContainer)),e.appendChild(this.notice),e.appendChild(this.tree),this.items=[],this.options=[],this.el.options.length&&(this.options=[].slice.call(this.el.options));var s=!1,a=0;if(this.el.children.length&&n.each(this.el.children,function(e,t){"OPTGROUP"===t.nodeName?(s=n.createElement("ul",{class:"selectr-optgroup",role:"group",html:"<li class='selectr-optgroup--label'>"+t.label+"</li>"}),n.each(t.children,function(e,t){t.idx=a,s.appendChild(l.call(this,t,s)),a++},this)):(t.idx=a,l.call(this,t),a++)},this),this.config.data&&Array.isArray(this.config.data)){this.data=[];var o,h=!1;s=!1,a=0,n.each(this.config.data,function(e,i){t(i,"children")?(h=n.createElement("optgroup",{label:i.text}),s=n.createElement("ul",{class:"selectr-optgroup",role:"group",html:"<li class='selectr-optgroup--label'>"+i.text+"</li>"}),n.each(i.children,function(e,i){(o=new Option(i.text,i.value,!1,i.hasOwnProperty("selected")&&!0===i.selected)).disabled=t(i,"disabled"),this.options.push(o),h.appendChild(o),o.idx=a,s.appendChild(l.call(this,o,i)),this.data[a]=i,a++},this),this.el.appendChild(h)):((o=new Option(i.text,i.value,!1,i.hasOwnProperty("selected")&&!0===i.selected)).disabled=t(i,"disabled"),this.options.push(o),o.idx=a,l.call(this,o,i),this.data[a]=i,a++)},this)}this.setSelected(!0);for(var c=this.navIndex=0;c<this.items.length;c++)if(i=this.items[c],!n.hasClass(i,"disabled")){n.addClass(i,"active"),this.navIndex=c;break}this.requiresPagination&&(this.pageIndex=1,this.paginate()),this.container.appendChild(this.selected),this.container.appendChild(e),this.placeEl=n.createElement("div",{class:"selectr-placeholder"}),this.setPlaceholder(),this.selected.appendChild(this.placeEl),this.disabled&&this.disable(),this.el.parentNode.insertBefore(this.container,this.el),this.container.appendChild(this.el)}.call(this),this.bindEvents(),this.update(),this.optsRect=n.rect(this.tree),this.rendered=!0,this.el.multiple||(this.el.selectedIndex=this.selectedIndex);var i=this;setTimeout(function(){i.emit("selectr.init")},20)}},e.prototype.getSelected=function(){return this.el.querySelectorAll("option:checked")},e.prototype.getSelectedProperties=function(e){var t=this.getSelected();return[].slice.call(t).map(function(t){return t[e]}).filter(function(e){return null!=e})},e.prototype.detectEventPassiveOption=function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t)}catch(e){}return e},e.prototype.bindEvents=function(){var e=this;if(this.events={},this.events.dismiss=function(e){this.container.contains(e.target)||!this.opened&&!n.hasClass(this.container,"notice")||this.close()}.bind(this),this.events.navigate=function(e){if(e=e||window.event,this.items.length&&this.opened&&n.includes([13,38,40],e.which)){if(e.preventDefault(),13===e.which)return!(this.noResults||this.config.taggable&&0<this.input.value.length)&&this.change(this.navIndex);var t=this.items[this.navIndex],i=this.navIndex;switch(e.which){case 38:var s=0;0<this.navIndex&&this.navIndex--;break;case 40:s=1,this.navIndex<this.items.length-1&&this.navIndex++}for(this.navigating=!0;n.hasClass(this.items[this.navIndex],"disabled")||n.hasClass(this.items[this.navIndex],"excluded");){if(!(0<this.navIndex&&this.navIndex<this.items.length-1)){this.navIndex=i;break}if(s?this.navIndex++:this.navIndex--,this.searching){if(this.navIndex>this.tree.lastElementChild.idx){this.navIndex=this.tree.lastElementChild.idx;break}if(this.navIndex<this.tree.firstElementChild.idx){this.navIndex=this.tree.firstElementChild.idx;break}}}e=n.rect(this.items[this.navIndex]),s?(0===this.navIndex?this.tree.scrollTop=0:e.top+e.height>this.optsRect.top+this.optsRect.height&&(this.tree.scrollTop+=e.top+e.height-(this.optsRect.top+this.optsRect.height)),this.navIndex===this.tree.childElementCount-1&&this.requiresPagination&&o.call(this)):0===this.navIndex?this.tree.scrollTop=0:0>e.top-this.optsRect.top&&(this.tree.scrollTop+=e.top-this.optsRect.top),t&&n.removeClass(t,"active"),n.addClass(this.items[this.navIndex],"active")}else this.navigating=!1}.bind(this),this.events.reset=this.reset.bind(this),(this.config.nativeDropdown||this.mobileDevice)&&(this.container.addEventListener("touchstart",function(t){t.changedTouches[0].target===e.el&&e.toggle()},!!this.supportsEventPassiveOption&&{passive:!0}),this.container.addEventListener("click",function(t){t.target===e.el&&e.toggle()}),this.el.addEventListener("change",function(t){e.el.multiple?(t=e.getSelectedProperties("idx"),t=function(e,t){for(var i,s=[],n=e.slice(0),a=0;a<t.length;a++)-1<(i=n.indexOf(t[a]))?n.splice(i,1):s.push(t[a]);return[s,n]}(e.selectedIndexes,t),n.each(t[0],function(t,i){e.select(i)},e),n.each(t[1],function(t,i){e.deselect(i)},e)):-1<e.el.selectedIndex&&e.select(e.el.selectedIndex)})),this.container.addEventListener("keydown",function(t){"Escape"===t.key&&e.close(),"Enter"===t.key&&e.selected===document.activeElement&&void 0!==e.el.form.submit&&e.el.form.submit()," "!==t.key&&"ArrowUp"!==t.key&&"ArrowDown"!==t.key||e.selected!==document.activeElement||(setTimeout(function(){e.toggle()},200),e.config.nativeDropdown&&setTimeout(function(){e.el.focus()},200))}),this.selected.addEventListener("click",function(t){e.disabled||e.toggle(),t.preventDefault()}),this.config.nativeKeyboard){var t="";this.selected.addEventListener("keydown",function(i){if(!(e.disabled||e.selected!==document.activeElement||i.altKey||i.ctrlKey||i.metaKey))if(" "===i.key||!e.opened&&-1<["Enter","ArrowUp","ArrowDown"].indexOf(i.key))e.toggle(),i.preventDefault(),i.stopPropagation();else if(2>=i.key.length&&String[String.fromCodePoint?"fromCodePoint":"fromCharCode"](i.key[String.codePointAt?"codePointAt":"charCodeAt"](0))===i.key){if(e.config.multiple)e.open(),e.config.searchable&&(e.input.value=i.key,e.input.focus(),e.search(null,!0));else{t+=i.key;var s=e.search(t,!0);s&&s.length&&(e.clear(),e.setValue(s[0].value)),setTimeout(function(){t=""},1e3)}i.preventDefault(),i.stopPropagation()}}),this.container.addEventListener("keyup",function(t){e.opened&&"Escape"===t.key&&(e.close(),t.stopPropagation(),e.selected.focus())})}this.label.addEventListener("click",function(t){n.hasClass(t.target,"selectr-tag-remove")&&e.deselect(t.target.parentNode.idx)}),this.selectClear&&this.selectClear.addEventListener("click",this.clear.bind(this)),this.tree.addEventListener("mousedown",function(e){e.preventDefault()}),this.tree.addEventListener("click",function(t){var i=n.closest(t.target,function(e){return e&&n.hasClass(e,"selectr-option")});i&&!n.hasClass(i,"disabled")&&(n.hasClass(i,"selected")?(e.el.multiple||!e.el.multiple&&e.config.allowDeselect)&&e.deselect(i.idx):e.select(i.idx),e.opened&&!e.el.multiple&&e.close()),t.preventDefault(),t.stopPropagation()}),this.tree.addEventListener("mouseover",function(t){n.hasClass(t.target,"selectr-option")&&!n.hasClass(t.target,"disabled")&&(n.removeClass(e.items[e.navIndex],"active"),n.addClass(t.target,"active"),e.navIndex=[].slice.call(e.items).indexOf(t.target))}),this.config.searchable&&(this.input.addEventListener("focus",function(t){e.searching=!0}),this.input.addEventListener("blur",function(t){e.searching=!1}),this.input.addEventListener("keyup",function(t){e.search(),e.config.taggable||(this.value.length?n.addClass(this.parentNode,"active"):n.removeClass(this.parentNode,"active"))}),this.inputClear.addEventListener("click",function(t){e.input.value=null,h.call(e),e.tree.childElementCount||a.call(e)})),this.config.taggable&&this.input.addEventListener("keyup",function(t){if(e.search(),e.config.taggable&&this.value.length){var i=this.value.trim();(13===t.which||n.includes(e.tagSeperators,t.key))&&(n.each(e.tagSeperators,function(e,t){i=i.replace(t,"")}),e.add({value:i,text:i,selected:!0},!0)?(e.close(),h.call(e)):(this.value="",e.setMessage(e.config.messages.tagDuplicate)))}}),this.update=n.debounce(function(){e.opened&&e.config.closeOnScroll&&e.close(),e.width&&(e.container.style.width=e.width),e.invert()},50),this.requiresPagination&&(this.paginateItems=n.debounce(function(){o.call(this)},50),this.tree.addEventListener("scroll",this.paginateItems.bind(this))),document.addEventListener("click",this.events.dismiss),window.addEventListener("keydown",this.events.navigate),window.addEventListener("resize",this.update),window.addEventListener("scroll",this.update),this.on("selectr.destroy",function(){document.removeEventListener("click",this.events.dismiss),window.removeEventListener("keydown",this.events.navigate),window.removeEventListener("resize",this.update),window.removeEventListener("scroll",this.update)}),this.el.form&&(this.el.form.addEventListener("reset",this.events.reset),this.on("selectr.destroy",function(){this.el.form.removeEventListener("reset",this.events.reset)}))},e.prototype.setSelected=function(e){if(this.config.data||this.el.multiple||!this.el.options.length||(0!==this.el.selectedIndex||this.el.options[0].defaultSelected||this.config.defaultSelected||(this.el.selectedIndex=-1),this.selectedIndex=this.el.selectedIndex,-1<this.selectedIndex&&this.select(this.selectedIndex)),this.config.multiple&&"select-one"===this.originalType&&!this.config.data&&this.el.options[0].selected&&!this.el.options[0].defaultSelected&&(this.el.options[0].selected=!1),n.each(this.options,function(e,t){t.selected&&t.defaultSelected&&this.select(t.idx)},this),this.config.selectedValue&&this.setValue(this.config.selectedValue),this.config.data){!this.el.multiple&&this.config.defaultSelected&&0>this.el.selectedIndex&&this.select(0);var i=0;n.each(this.config.data,function(e,s){t(s,"children")?n.each(s.children,function(e,t){t.hasOwnProperty("selected")&&!0===t.selected&&this.select(i),i++},this):(s.hasOwnProperty("selected")&&!0===s.selected&&this.select(i),i++)},this)}},e.prototype.destroy=function(){this.rendered&&(this.emit("selectr.destroy"),"select-one"===this.originalType&&(this.el.multiple=!1),this.config.data&&(this.el.innerHTML=""),n.removeClass(this.el,"selectr-hidden"),this.container.parentNode.replaceChild(this.el,this.container),this.rendered=!1,delete this.el.selectr)},e.prototype.change=function(e){var t=this.items[e],i=this.options[e];i.disabled||(i.selected&&n.hasClass(t,"selected")?this.deselect(e):this.select(e),this.opened&&!this.el.multiple&&this.close())},e.prototype.select=function(e){var t=this.items[e],i=[].slice.call(this.el.options),s=this.options[e];if(this.el.multiple){if(n.includes(this.selectedIndexes,e))return!1;if(this.config.maxSelections&&this.tags.length===this.config.maxSelections)return this.setMessage(this.config.messages.maxSelections.replace("{max}",this.config.maxSelections),!0),!1;this.selectedValues.push(s.value),this.selectedIndexes.push(e),function(e){var t=this,i=document.createDocumentFragment(),s=this.options[e.idx],a=this.data?this.data[e.idx]:s;a=this.customSelected?this.config.renderSelection(a):s.textContent,a=n.createElement("li",{class:"selectr-tag",html:a});var l=n.createElement("button",{class:"selectr-tag-remove",type:"button"});if(a.appendChild(l),a.idx=e.idx,a.tag=s.value,this.tags.push(a),this.config.sortSelected){e=this.tags.slice();var o=function(e,t){e.replace(/(\d+)|(\D+)/g,function(e,i,s){t.push([i||1/0,s||""])})};e.sort(function(e,i){var s=[],n=[];if(!0===t.config.sortSelected)var a=e.tag,l=i.tag;else"text"===t.config.sortSelected&&(a=e.textContent,l=i.textContent);for(o(a,s),o(l,n);s.length&&n.length;)if(a=s.shift(),l=n.shift(),a=a[0]-l[0]||a[1].localeCompare(l[1]))return a;return s.length-n.length}),n.each(e,function(e,t){i.appendChild(t)}),this.label.innerHTML=""}else i.appendChild(a);this.config.taggable?this.label.insertBefore(i,this.input.parentNode):this.label.appendChild(i)}.call(this,t)}else{var a=this.data?this.data[e]:s;this.label.innerHTML=this.customSelected?this.config.renderSelection(a):s.textContent,this.selectedValue=s.value,this.selectedIndex=e,n.each(this.options,function(t,i){var s=this.items[t];t!==e&&(s&&n.removeClass(s,"selected"),i.selected=!1,i.removeAttribute("selected"))},this)}n.includes(i,s)||this.el.add(s),t.setAttribute("aria-selected",!0),n.addClass(t,"selected"),n.addClass(this.container,"has-selected"),s.selected=!0,s.setAttribute("selected",""),this.emit("selectr.change",s),this.emit("selectr.select",s),"createEvent"in document?((t=document.createEvent("HTMLEvents")).initEvent("change",!0,!0),this.el.dispatchEvent(t)):this.el.fireEvent("onchange")},e.prototype.deselect=function(e,t){var i=this.items[e],s=this.options[e];if(this.el.multiple){var a=this.selectedIndexes.indexOf(e);this.selectedIndexes.splice(a,1),a=this.selectedValues.indexOf(s.value),this.selectedValues.splice(a,1),function(e){var t=!1;n.each(this.tags,function(i,s){s.idx===e.idx&&(t=s)},this),t&&(this.label.removeChild(t),this.tags.splice(this.tags.indexOf(t),1))}.call(this,i),this.tags.length||n.removeClass(this.container,"has-selected")}else{if(!t&&!this.config.clearable&&!this.config.allowDeselect)return!1;this.label.innerHTML="",this.selectedValue=null,this.el.selectedIndex=this.selectedIndex=-1,n.removeClass(this.container,"has-selected")}this.items[e].setAttribute("aria-selected",!1),n.removeClass(this.items[e],"selected"),s.selected=!1,s.removeAttribute("selected"),this.emit("selectr.change",null),this.emit("selectr.deselect",s),"createEvent"in document?((i=document.createEvent("HTMLEvents")).initEvent("change",!0,!0),this.el.dispatchEvent(i)):this.el.fireEvent("onchange")},e.prototype.setValue=function(e){var t=Array.isArray(e);if(t||(e=e.toString().trim()),!this.el.multiple&&t)return!1;n.each(this.options,function(i,s){(t&&-1<e.indexOf(s.value)||s.value===e)&&this.change(s.idx)},this)},e.prototype.getValue=function(e,t){if(this.el.multiple)if(e){if(this.selectedIndexes.length){var i={values:[]};n.each(this.selectedIndexes,function(e,t){var s=this.options[t];i.values[e]={value:s.value,text:s.textContent}},this)}}else i=this.selectedValues.slice();else if(e){var s=this.options[this.selectedIndex];i={value:s.value,text:s.textContent}}else i=this.selectedValue;return e&&t&&(i=JSON.stringify(i)),i},e.prototype.add=function(e,t){if(e){if(this.data=this.data||[],this.items=this.items||[],this.options=this.options||[],Array.isArray(e))n.each(e,function(e,i){this.add(i,t)},this);else if("[object Object]"===Object.prototype.toString.call(e)){if(t){var i=!1;if(n.each(this.options,function(t,s){s.value.toLowerCase()===e.value.toLowerCase()&&(i=!0)}),i)return!1}var s=n.createElement("option",e);return this.data.push(e),this.options.push(s),s.idx=0<this.options.length?this.options.length-1:0,l.call(this,s),e.selected&&this.select(s.idx),this.setPlaceholder(),s}return this.config.pagination&&this.paginate(),!0}},e.prototype.remove=function(e){var t,i=[];Array.isArray(e)?n.each(e,function(e,t){n.isInt(t)?i.push(this.getOptionByIndex(t)):"string"==typeof t&&i.push(this.getOptionByValue(t))},this):n.isInt(e)?i.push(this.getOptionByIndex(e)):"string"==typeof e&&i.push(this.getOptionByValue(e)),i.length&&(n.each(i,function(e,i){t=i.idx,this.el.remove(i),this.options.splice(t,1);var s=this.items[t].parentNode;s&&s.removeChild(this.items[t]),this.items.splice(t,1),n.each(this.options,function(e,t){t.idx=e,this.items[e].idx=e},this)},this),this.setPlaceholder(),this.config.pagination&&this.paginate())},e.prototype.removeAll=function(){this.clear(!0),n.each(this.el.options,function(e,t){this.el.remove(t)},this),n.truncate(this.tree),this.items=[],this.options=[],this.data=[],this.navIndex=0,this.requiresPagination&&(this.requiresPagination=!1,this.pageIndex=1,this.pages=[]),this.setPlaceholder()},e.prototype.search=function(e,t){if(!this.navigating){var s=!1;e||(e=this.input.value,s=!0,this.removeMessage(),n.truncate(this.tree));var l=[],o=document.createDocumentFragment();if(0<(e=e.trim().toLowerCase()).length){var h=t?n.startsWith:n.includes;if(n.each(this.options,function(t,a){var c=this.items[a.idx];if(h(a.textContent.trim().toLowerCase(),e)&&!a.disabled){if(l.push({text:a.textContent,value:a.value}),s&&(i(c,o,this.customOption),n.removeClass(c,"excluded"),!this.customOption)){var r=!!(r=new RegExp(e,"i").exec(a.textContent))&&a.textContent.replace(r[0],"<span class='selectr-match'>"+r[0]+"</span>");c.innerHTML=r}}else s&&n.addClass(c,"excluded")},this),s){if(o.childElementCount){var c=this.items[this.navIndex],r=o.querySelector(".selectr-option:not(.excluded)");this.noResults=!1,n.removeClass(c,"active"),this.navIndex=r.idx,n.addClass(r,"active")}else this.config.taggable||(this.noResults=!0,this.setMessage(this.config.messages.noResults));this.tree.appendChild(o)}}else a.call(this);return l}},e.prototype.toggle=function(){this.disabled||(this.opened?this.close():this.open())},e.prototype.open=function(){var e=this;if(!this.options.length)return!1;this.opened||this.emit("selectr.open"),this.opened=!0,this.mobileDevice||this.config.nativeDropdown?(n.addClass(this.container,"native-open"),this.config.data&&n.each(this.options,function(e,t){this.el.add(t)},this)):(n.addClass(this.container,"open"),a.call(this),this.invert(),this.tree.scrollTop=0,n.removeClass(this.container,"notice"),this.selected.setAttribute("aria-expanded",!0),this.tree.setAttribute("aria-hidden",!1),this.tree.setAttribute("aria-expanded",!0),this.config.searchable&&!this.config.taggable&&setTimeout(function(){e.input.focus(),e.input.tabIndex=0},10))},e.prototype.close=function(){if(this.opened&&this.emit("selectr.close"),this.navigating=this.opened=!1,this.mobileDevice||this.config.nativeDropdown)n.removeClass(this.container,"native-open");else{var e=n.hasClass(this.container,"notice");this.config.searchable&&!e&&(this.input.blur(),this.input.tabIndex=-1,this.searching=!1),e&&(n.removeClass(this.container,"notice"),this.notice.textContent=""),n.removeClass(this.container,"open"),n.removeClass(this.container,"native-open"),this.selected.setAttribute("aria-expanded",!1),this.tree.setAttribute("aria-hidden",!0),this.tree.setAttribute("aria-expanded",!1),n.truncate(this.tree),h.call(this),this.selected.focus()}},e.prototype.enable=function(){this.disabled=!1,this.el.disabled=!1,this.selected.tabIndex=this.originalIndex,this.el.multiple&&n.each(this.tags,function(e,t){t.lastElementChild.tabIndex=0}),n.removeClass(this.container,"selectr-disabled")},e.prototype.disable=function(e){e||(this.el.disabled=!0),this.selected.tabIndex=-1,this.el.multiple&&n.each(this.tags,function(e,t){t.lastElementChild.tabIndex=-1}),this.disabled=!0,n.addClass(this.container,"selectr-disabled")},e.prototype.reset=function(){this.disabled||(this.clear(),this.setSelected(!0),n.each(this.defaultSelected,function(e,t){this.select(t)},this),this.emit("selectr.reset"))},e.prototype.clear=function(e){this.el.multiple?this.selectedIndexes.length&&(e=this.selectedIndexes.slice(),n.each(e,function(e,t){this.deselect(t)},this)):-1<this.selectedIndex&&this.deselect(this.selectedIndex,e),this.emit("selectr.clear")},e.prototype.serialise=function(e){var t=[];return n.each(this.options,function(e,i){var s={value:i.value,text:i.textContent};i.selected&&(s.selected=!0),i.disabled&&(s.disabled=!0),t[e]=s}),e?JSON.stringify(t):t},e.prototype.serialize=function(e){return this.serialise(e)},e.prototype.setPlaceholder=function(e){e=e||this.config.placeholder||this.el.getAttribute("placeholder"),this.options.length||(e=this.config.messages.noOptions),this.placeEl.innerHTML=e},e.prototype.paginate=function(){if(this.items.length){var e=this;return this.pages=this.items.map(function(t,i){return 0==i%e.config.pagination?e.items.slice(i,i+e.config.pagination):null}).filter(function(e){return e})}},e.prototype.setMessage=function(e,t){t&&this.close(),n.addClass(this.container,"notice"),this.notice.textContent=e},e.prototype.removeMessage=function(){n.removeClass(this.container,"notice"),this.notice.innerHTML=""},e.prototype.invert=function(){var e=n.rect(this.selected);e.top+e.height+this.tree.parentNode.offsetHeight>window.innerHeight?(n.addClass(this.container,"inverted"),this.isInverted=!0):(n.removeClass(this.container,"inverted"),this.isInverted=!1),this.optsRect=n.rect(this.tree)},e.prototype.getOptionByIndex=function(e){return this.options[e]},e.prototype.getOptionByValue=function(e){for(var t=!1,i=0,s=this.options.length;i<s;i++)if(this.options[i].value.trim()===e.toString().trim()){t=this.options[i];break}return t},e})?s.apply(t,n):s)||(e.exports=a)}]);