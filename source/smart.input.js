
/* Smart HTML Elements v3.2.0 (2019-June) 
Copyright (c) 2011-2019 jQWidgets. 
License: https://htmlelements.com/license/ */

Smart("smart-input",class extends Smart.BaseElement{static get properties(){return{dataSource:{type:"any",value:[]},dropDownDataSource:{type:"any",value:[]},dropDownHeight:{type:"any",value:200},dropDownWidth:{type:"any",value:null},dropDownButtonPosition:{allowedValues:["none","left","right"],value:"none",type:"string"},items:{type:"number",value:8},minLength:{type:"number",value:1},name:{value:"",type:"string"},opened:{value:!1,type:"boolean"},query:{type:"string",value:""},queryMode:{allowedValues:["contains","containsIgnoreCase","doesNotContain","doesNotContainIgnoreCase","equals","equalsIgnoreCase","startsWith","startsWithIgnoreCase","endsWith","endsWithIgnoreCase"],type:"string",value:"containsIgnoreCase"},placeholder:{value:"",type:"string"},readonly:{type:"boolean",value:!1},sorted:{value:!1,type:"boolean"},sortDirection:{value:"asc",type:"string"},type:{type:"string"},value:{type:"string",value:""}}}static get styleUrls(){return["smart.textbox.css"]}template(){return"<div id=\"inputContainer\"><input class=\"smart-input\" id='input' readonly='[[readonly]]' placeholder='[[placeholder]]' type='[[type]]' name='[[name]]' value='{{value::keyup}}' disabled='[[disabled]]' role='input'/><div id=\"dropDownButton\" tabindex=-1 class=\"smart-drop-down-button\"><div id=\"arrow\" class=\"arrow\"></div></div></div>"}static get listeners(){return{"input.focus":"_focusHandler","input.blur":"_blurHandler","input.keydown":"_keyDownHandler","input.keyup":"_keyUpHandler","input.keypress":"_keyPressHandler","dropDownButton.down":"_dropDownButtonDownHandler","inputContainer.down":"_downHandler","document.up":"_documentUpHandler"}}focus(){const a=this;a.$.input.focus()}select(){const a=this;a.readonly?a.$.input.focus():a.$.input.select()}_documentUpHandler(a){const b=this;let c=a.originalEvent.target;if(c!==b&&c!==b.$.dropDownButton&&c!==b.$.input&&c!==b.$.arrow){if(b._isPointerDown)return b._isPointerDown=!1,void b.$.input.focus();if(!b.$.scrollView.contains(c)){const c=b.close();c&&(a.stopPropagation(),a.preventDefault(),a.originalEvent.stopPropagation(),a.originalEvent.preventDefault())}}}_focusHandler(){const a=this;a.setAttribute("focus","")}_blurHandler(){const a=this;a.opened||a.removeAttribute("focus")}_refreshMenu(){const a=this;a.$.menu.classList.remove("scroll"),a.$.scrollView.computedVerticalScrollBarVisibility&&a.$.menu.classList.add("scroll")}_performSelect(){const a=this,b=a.$.menu.querySelector(".active"),c=b.getAttribute("data-label"),d=b.getAttribute("value");a.value=c,a.$.input.dataValue=d,a.$.fireEvent("change"),a.close()}_offsetTop(a){const b=this;return a?a.offsetTop+b._offsetTop(a.offsetParent):0}_offsetLeft(a){const b=this;return a?a.offsetLeft+b._offsetLeft(a.offsetParent):0}_offset(a){return{left:this._offsetLeft(a),top:this._offsetTop(a)}}_open(){const a=this,b=a._offset(a);this.opened||(a.timer&&clearTimeout(a.timer),document.body.appendChild(a.$.scrollView),a.$.scrollView.style.left=-3+b.left+"px",a.$.scrollView.style.top=b.top+a.offsetHeight+1+"px",a.$.scrollView.classList.remove("open"),a.$.scrollView.onpointerdown=function(){a._isPointerDown=!0},requestAnimationFrame(function(){var b=Math.max;if(a.$.scrollView.refresh(),a._refreshMenu(),a.$.scrollView.setAttribute("open",""),a.setAttribute("open",""),a.$.dropDownButton.setAttribute("open",""),a.$.input.setAttribute("open",""),"auto"!==a.dropDownWidth&&a.dropDownWidth)a.$.scrollView.style.setProperty("--smart-input-drop-down-menu-width",a.dropDownWidth+"px");else if("auto"===a.dropDownWidth)a.$.scrollView.style.setProperty("--smart-input-drop-down-menu-width","");else{a.$.menu.style.width="auto";let c=a.$.menu.offsetWidth;const d=a.$.menu.querySelectorAll("li");for(let c=0;c<d.length;c++)a._maxDropDownWidth=b(d[c].firstElementChild.offsetWidth,a._maxDropDownWidth);a.$.scrollView.computedVerticalScrollBarVisibility&&(c+=30),a.$.scrollView.style.setProperty("--smart-input-drop-down-menu-width",b(c,a.offsetWidth-8)+"px")}}),a.$.scrollView.refresh(),a._refreshMenu(),this.opened=!0)}close(){const a=this;return!!a.opened&&(a.timer&&clearTimeout(a.timer),a.timer=setTimeout(function(){a.$.scrollView.parentNode&&!a.opened&&document.body.removeChild(a.$.scrollView)},1e3),a.$.scrollView.removeAttribute("open"),a.$.dropDownButton.removeAttribute("open"),a.$.input.removeAttribute("open"),a.removeAttribute("open"),a.opened=!1,a.$.input.focus(),!0)}_lookup(a){const b=this;let c=[];return(b.query=b.$.input.value,b.$.input.readonly&&(!b._incrementalSearchQuery&&(b._incrementalSearchQuery=""),b._incrementalSearchQuery+=a.key,b._incrementalSearchTimer&&clearTimeout(b._incrementalSearchTimer),b.query=b._incrementalSearchQuery,b._incrementalSearchTimer=setTimeout(function(){b._incrementalSearchQuery=""},700)),!b.query||b.query.length<b.minLength)?void b.close():(c="function"==typeof b.dataSource?b.dataSource(b.query):b.dataSource,b._process(c))}_downHandler(a){const b=this;b.readonly&&b._dropDownButtonDownHandler(a)}_dropDownButtonDownHandler(a){const b=this;return b._toggle(),a.preventDefault(),a.stopPropagation(),a.originalEvent.preventDefault(),a.originalEvent.stopPropagation(),!1}_toggle(){const a=this;a.opened?a.close():a.open()}open(){const a=this;let b;a.dropDownDataSource?(a.query="",b="function"==typeof a.dataSource?a.dataSource(a.query):a.dataSource):b="function"==typeof a.dropDownDataSource?a.dropDownDataSource(a.query):a.dropDownDataSource,a._process(b);const c=a.$.menu.querySelector(".active");if(c)for(let b=0;b<a.$.menu.children.length;b++){const d=a.$.menu.children[b],e=d.getAttribute("data-label");if(e===a.$.input.value){c.classList.remove("active"),d.classList.add("active");break}}a.ensureVisible(),a.$.input.focus(),setTimeout(function(){a.$.input.focus()},25)}_process(a){const b=this;"string"==typeof a&&(a=b.$.deserialize(a,"array")),a=a.filter(function(a){return b.matcher?b.matcher(a):b._matcher(a)}),a=b._sorter(a),b.sorted&&(a.sort((c,a)=>void 0===c.label?c.localeCompare(a):c.label.localeCompare(a.label)),"desc"===b.sortDirection&&a.reverse()),!a.length&&b.opened&&b.close();0===a.length||(0<b.query.length?b._render(a.slice(0,b.items)):b._render(a),b._open(),b.$.scrollView.refresh(),b._refreshMenu(),b.ensureVisible())}_matcher(a){const b=this,c=b.query;switch(a=a.label||a,b.queryMode){case"startsWith":return a.startsWith(c);case"startsWithIgnoreCase":return a.toLowerCase().startsWith(c.toLowerCase());case"doesNotContain":return 0>a.indexOf(c);case"doesNotContainIgnoreCase":return 0>a.toLowerCase().indexOf(c.toLowerCase());case"contains":return-1<a.indexOf(c);default:case"containsIgnoreCase":return~a.toLowerCase().indexOf(c.toLowerCase());case"equals":return 0===a.localeCompare(c);case"equalsIgnoreCase":return 0===a.toLowerCase().localeCompare(c.toLowerCase());case"endsWith":return a.endsWith(c);case"endsWithIgnoreCase":return a.toLowerCase().endsWith(c.toLowerCase());}}_sorter(a){const b=this;let c,d=[],e=[],f=[];for(;c=a.shift();){const a=c.label||c;a.toLowerCase().indexOf(b.query.toLowerCase())?~a.indexOf(b.query)?e.push(c):f.push(c):d.push(c)}return d.concat(e,f)}_highlighter(a){const b=this,c=b.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");return a.replace(new RegExp("("+c+")","ig"),function(a,b){return"<strong>"+b+"</strong>"})}_render(a){const b=this,c=a.map(function(a){let c=a,d=a;"object"==typeof a&&(c=a.label,d=a.value||c);const e=document.createElement("li"),f=document.createElement("a");return f.href="#",e.setAttribute("data-label",c),e.setAttribute("value",d),f.innerHTML=b.highlighter?b.highlighter(c):b._highlighter(c),a.icon&&(f.classList.add("icon"),f.classList.add(a.icon)),e.appendChild(f),e});0<c.length&&c[0].classList.add("active"),b.$.menu.innerHTML="";for(let d=0;d<c.length;d++){const a=c[d];b.$.menu.appendChild(a),a.onmouseenter=function(){this.classList.add("active")},a.onmouseleave=function(){this.classList.remove("active")}}}ensureVisible(){const a=this,b=a.$.menu.querySelector(".active");b&&(b.offsetTop+b.offsetHeight>=a.$.scrollView.scrollTop+a.$.scrollView.offsetHeight&&(a.$.scrollView.scrollTop=b.offsetTop+b.offsetHeight),(b.offsetTop<=a.$.scrollView.scrollTop||b.offsetTop>=a.$.scrollView.scrollTop+a.$.scrollView.offsetHeight)&&(a.$.scrollView.scrollTop=b.offsetTop),0===[...a.$.menu.children].indexOf(b)?a.$.scrollView.scrollTop=0:[...a.$.menu.children].indexOf(b)===a.$.menu.children.length-1&&(a.$.scrollView.scrollTop=a.$.scrollView.scrollHeight))}_next(){const a=this,b=a.$.menu.querySelector(".active");if(!b)return void a.$.menu.firstElementChild.classList.add("active");b.classList.remove("active");let c=b.nextElementSibling;c||(c=a.$.menu.firstElementChild),c.classList.add("active"),a.ensureVisible()}_prev(){const a=this,b=a.$.menu.querySelector(".active");if(!b)return void a.$.menu.firstElementChild.classList.add("active");b.classList.remove("active");let c=b.previousElementSibling;c||(c=a.$.menu.lastElementChild),c.classList.add("active"),a.ensureVisible()}_move(a){const b=this;if(b.opened){switch(a.keyCode){case 9:case 13:case 27:a.preventDefault();break;case 38:a.preventDefault(),b._prev();break;case 40:a.preventDefault(),b._next();}a.stopPropagation()}}_keyDownHandler(a){const b=this;b._suppressKeyPressRepeat=![40,38,9,13,27,16,17,18].includes(a.keyCode);a.shiftKey||a.altKey||a.ctrlKey||b._move(a)}_keyPressHandler(a){const b=this;b._suppressKeyPressRepeat||a.shiftKey||a.altKey||a.ctrlKey||b._move(a)}_keyUpHandler(a){const b=this;if(!(a.shiftKey||a.altKey||a.ctrlKey))switch(a.keyCode){case 40:case 38:case 16:case 17:case 18:40===a.keyCode&&a.altKey&&b.open(),38===a.keyCode&&a.altKey&&b.close();break;case 9:case 13:if(!b.opened)return;b._performSelect(),a.stopPropagation(),a.preventDefault();break;case 27:if(!b.opened)return;b.close(),a.stopPropagation(),a.preventDefault();break;default:b._lookup(a),!b.opened||a.ctrlKey||a.shiftKey||(a.stopPropagation(),a.preventDefault()),b.$.input.dataValue=b.$.input.value;}}propertyChangedHandler(a,b,c){super.propertyChangedHandler(a,b,c);const d=this;"dropDownHeight"===a&&d.$.scrollView.style.setProperty("--smart-input-drop-down-menu-height",d.dropDownHeight+"px"),"opened"===a&&(c?d.open():d.close())}ready(){const a=this;super.ready();const b=document.createElement("ul"),c=document.createElement("smart-scroll-viewer");c.horizontalScrollBarVisibility="hidden",c.appendChild(b),c.style.setProperty("--smart-input-drop-down-menu-height",a.dropDownHeight+"px"),c.classList.add("smart-input-drop-down-menu"),c.id=a.id+"_"+a.tagName.toLowerCase()+"_menu_"+Math.floor(65536*(1+Math.random())).toString(16).substring(1),a.setAttribute("aria-controls",c.id),a.$.scrollView=c,a.$.menu=b,a.opened&&a.open(),a.opened=!1,a.$.menu.onclick=function(b){b.stopPropagation(),b.preventDefault(),a._performSelect(),a.$.input.focus()}}});