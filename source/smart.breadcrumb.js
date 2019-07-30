
/* Smart HTML Elements v4.0.0 (2019-Aug) 
Copyright (c) 2011-2019 jQWidgets. 
License: https://htmlelements.com/license/ */

Smart("smart-breadcrumb",class extends Smart.BaseElement{static get properties(){return{addNewItem:{value:!1,type:"boolean"},allowDrag:{value:!1,type:"boolean"},allowDrop:{value:!1,type:"boolean"},closeButtons:{value:!1,type:"boolean"},dataSource:{value:[],type:"array",reflectToAttribute:!1},itemTemplate:{value:null,type:"any"},minimizeWidth:{value:150,type:"number?"}}}static get listeners(){return{move:"_moveHandler",resize:"_resizeHandler","container.click":"_containerClickHandler","container.down":"_containerDownHandler","container.transitionend":"_containerTransitionendHandler","hamburgerIcon.click":"_hamburgerIconClickHandler","document.move":"_documentMoveHandler","document.up":"_documentUpHandler"}}template(){return`<div id="container">
                    <div id="minimizedHeader" class="smart-header smart-minimized-header smart-hidden">
                        <div id="hamburgerIcon" class="smart-hamburger-icon">
                            <div id="hamburgerIconLineTop" class="smart-hamburger-icon-line smart-hamburger-icon-line-top"></div>
                            <div id="hamburgerIconLineCenter" class="smart-hamburger-icon-line smart-hamburger-icon-line-center"></div>
                            <div id="hamburgerIconLineBottom" class="smart-hamburger-icon-line smart-hamburger-icon-line-bottom"></div>
                        </div>
                    </div>
                    <template>
                        <div id="itemsContainer" class="smart-breadcrumb-items" *items={{dataSource}}>
                            <div class="smart-breadcrumb-item">
                                <div class="smart-breadcrumb-item-label" inner-H-T-M-L={{item.label}}></div>
                                <div class="smart-close-button">&#xe81f</div>
                            </div>
                        </div>
                    </template>
                </div>`}propertyChangedHandler(a,b,c){super.propertyChangedHandler(a,b,c);const d=this;switch(a){case"addNewItem":c?d._appendNewItemButton():(d.$.templateContainer.firstElementChild.removeChild(d._addNewItemButton),delete d._addNewItemButton),d._setIndentation();break;case"animation":case"disabled":case"unfocusable":d.addNewItem&&(d._addNewItemButton[a]=c),"disabled"===a&&d._minimizedDropDownOpened&&d._hamburgerIconClickHandler();break;case"itemTemplate":for(let a=0;a<d._items.length;a++)d._items[a].firstElementChild.innerHTML=d.dataSource[a].label;c&&d._applyTemplate();break;case"minimizeWidth":null!==c&&d.offsetWidth<=c?d.minimize():d.maximize();break;case"closeButtons":d._minimized||d._setIndentation();}}ready(){super.ready();const a=this;a._edgeMacFF=Smart.Utilities.Core.Browser.Edge||Smart.Utilities.Core.Browser.Firefox&&-1!==navigator.platform.toLowerCase().indexOf("mac"),a.templateContainer=a.$.container.children[1],null!==a.minimizeWidth&&a.offsetWidth<=a.minimizeWidth&&a.minimize()}templateAttached(){this._handleDataSourceRefresh()}addItem(a){const b=this,c=b.dataSource.slice(0);!a||"object"!=typeof a||isNaN(a.index)||0>a.index||(c.splice(a.index,0,{label:a.label,value:a.value}),b.dataSource=c)}maximize(){const a=this;a._minimized&&(a.$minimizedHeader.addClass("smart-hidden"),a.templateContainer.classList.remove("smart-visibility-hidden"),a._edgeMacFF&&a.templateContainer.classList.remove("not-in-view"),a.$hamburgerIcon.removeClass("smart-close-button"),a.removeAttribute("minimized"),a._minimizedDropDownOpened=!1,a._minimized=!1,a._setIndentation())}minimize(){const a=this;if(a._minimized)return;const b=a.animation,c=a.hasAnimation;c&&(a.animation="none"),a.$minimizedHeader.removeClass("smart-hidden"),a.templateContainer.classList.add("smart-visibility-hidden"),a._edgeMacFF&&a.templateContainer.classList.add("not-in-view"),c&&setTimeout(function(){a.animation=b},0),a.setAttribute("minimized",""),a._minimized=!0,a._setIndentation()}removeItem(a){const b=this,c=b._items.indexOf(a),d=b.dataSource.slice(0);-1===c||(d.splice(c,1),b.dataSource=d)}_moveHandler(a){"touchmove"===a.originalEvent.type&&a.originalEvent.preventDefault()}_resizeHandler(){const a=this;null!==a.minimizeWidth&&a.offsetWidth<=a.minimizeWidth?a.minimize():a._minimized?a.maximize():a._setIndentation()}_containerClickHandler(a){const b=this;if(!b.disabled&&b.templateContainer.contains(a.target)){const c=a.target.closest(".smart-close-button");if(c){const a=c.closest(".smart-breadcrumb-item"),d=b.$.fireEvent("closing",{item:a});if(!d.defaultPrevented){const c=b.dataSource.slice(0);c.splice(b._items.indexOf(a),1),b.dataSource=c,b.$.fireEvent("close",{item:a})}}}}_containerDownHandler(a){const b=this,c=a.originalEvent.target;if(!(!b.allowDrag||b.disabled||c.classList.contains("smart-close-button"))){const d=c.closest(".smart-breadcrumb-item");d&&(b._dragDetails={item:d,x:a.pageX,y:a.pageY})}}_containerTransitionendHandler(a){const b=this;b._edgeMacFF&&a.target===b.templateContainer&&!b._minimizedDropDownOpened&&b.hasAnimation&&b.templateContainer.classList.add("not-in-view")}_hamburgerIconClickHandler(){const a=this;a._minimizedDropDownOpened?(a.$hamburgerIcon.removeClass("smart-close-button"),a.templateContainer.classList.add("smart-visibility-hidden"),a._minimizedDropDownOpened=!1):(a.$hamburgerIcon.addClass("smart-close-button"),a._edgeMacFF&&a.templateContainer.classList.remove("not-in-view"),a.templateContainer.classList.remove("smart-visibility-hidden"),a._minimizedDropDownOpened=!0)}_documentMoveHandler(a){var b=Math.abs;const c=this,d=c._dragDetails;if(!d)return;let e=d.feedback;if(a.originalEvent.preventDefault(),!e)if(5<b(d.x-a.pageX)||5<b(d.y-a.pageY))e=document.createElement("div"),e.className="smart-breadcrumb-feedback",e.style.height=c._dragDetails.item.offsetHeight+"px",e.innerHTML=c._dragDetails.item.firstElementChild.innerHTML,document.body.appendChild(e),d.feedback=e,c._getItemCoordinates();else return;const f=Smart.Utilities.Core.isMobile?document.elementFromPoint(a.clientX,a.clientY):a.originalEvent.target;if(e.style.left=a.pageX+10+"px",e.style.top=a.pageY+10+"px",!c.allowDrop)return e.classList.add("error"),void c.$.fireEvent("dragging",{item:d.item,target:f,originalEvent:a.originalEvent});if(delete d.target,c._clearItemDragClass(),!c.contains(f))return e.classList.add("error"),void c.$.fireEvent("dragging",{item:d.item,target:f,originalEvent:a.originalEvent});let g=f.closest(".smart-breadcrumb-item");if(g)return void c._applyItemDragClass(g,g.getBoundingClientRect(),a);if(c._minimized)return e.classList.add("error"),void c.$.fireEvent("dragging",{item:d.item,target:f,originalEvent:a.originalEvent});if(c.contains(f)){const b=c._itemCoordinates.rows,e=c._itemCoordinates.coordinates,g=parseFloat(window.getComputedStyle(c).getPropertyValue("--smart-breadcrumb-padding"))/2;let h;for(let c=0;c<b.length;c++)if(a.clientY<b[c].bottom+g){h=c;break}if(void 0===h)return d.feedback.classList.add("error"),void c.$.fireEvent("dragging",{item:d.item,target:f,originalEvent:a.originalEvent});let j,k=c._items[e[h][e[h].length-1].index];for(let b=0;b<e[h].length;b++)if(j=e[h][b].rect,a.clientX<j.right+g){k=c._items[e[h][b].index];break}return void c._applyItemDragClass(k,j,a)}}_getItemCoordinates(){const a=this,b=a._items,c=[[]],d=[];let e=b[0].offsetTop,f=0;c[0].push({index:0,rect:b[0].getBoundingClientRect()}),d[0]={top:c[0][0].rect.top,bottom:c[0][0].rect.bottom};for(let a=1;a<b.length;a++){const g=b[a],h=g.getBoundingClientRect(),i=b[a].offsetTop;i>e&&(e=i,f++,c[f]=[],d[f]={top:h.top,bottom:h.bottom}),c[f].push({index:a,rect:h})}a._itemCoordinates={coordinates:c,rows:d}}_applyItemDragClass(a,b,c){const d=this,e=d._dragDetails;let f,g,h;e.target=a,e.feedback.classList.remove("error"),e.before=!1,d._minimized?(f=c.clientY,g="top",h="height"):(f=c.clientX,g="left",h="width"),f<=b[g]+b[h]/2?(a.classList.add("target"),e.before=!0):a.nextElementSibling?a.nextElementSibling.classList.add("target"):a.classList.add("afterTarget"),d.$.fireEvent("dragging",{item:e.item,target:a,originalEvent:c.originalEvent})}_clearItemDragClass(){const a=this.querySelector(".target, .afterTarget");a&&(a.classList.remove("target"),a.classList.remove("afterTarget"))}_documentUpHandler(a){const b=this,c=b._dragDetails;if(c&&(delete b._dragDetails,c.feedback)){if(document.body.removeChild(c.feedback),b._clearItemDragClass(),!b.allowDrop)return;if(!c.target||c.item===c.target)return void b.$.fireEvent("dragEnd",{item:c.item,target:c.target||!Smart.Utilities.Core.isMobile?a.originalEvent.target:document.elementFromPoint(a.clientX,a.clientY),originalEvent:a.originalEvent});const d=b._items.slice(0),e=d.indexOf(c.item),f=b.dataSource.slice(0),g=f.splice(e,1);d.splice(e,1);const h=d.indexOf(c.target)+(c.before?0:1);e!==h&&(f.splice(h,0,g[0]),b.dataSource=f),b.$.fireEvent("dragEnd",{item:c.item,target:c.target,droppedBeforeTarget:c.before,originalEvent:a.originalEvent})}}_handleDataSourceRefresh(){const a=this;a._items=Array.from(a.$.templateContainer.firstElementChild.children),a.addNewItem&&a._appendNewItemButton(),a._applyTemplate(),a._setIndentation()}_appendNewItemButton(){const a=this,b=document.createElement("smart-button");b.innerHTML="+",b.animation=a.animation,b.disabled=a.disabled,b.unfocusable=a.unfocusable,b.addEventListener("click",function(){a.$.fireEvent("addNewItem")}),a.$.templateContainer.firstElementChild.appendChild(b),a._addNewItemButton=b}_setIndentation(){const a=this,b=a._items.slice(0);if(a._addNewItemButton&&b.push(a._addNewItemButton),0===b.length)return;let c=b[0].offsetTop,d=0;if(b.forEach(function(a){a.style.marginLeft=null}),!a._minimized)for(let a=1;a<b.length;a++){const e=b[a],f=b[a].offsetTop;f>c&&(c=f,d++,e.style.marginLeft=10*d+"px")}}_applyTemplate(){const a=this,b=a.itemTemplate;if(null===b)return;let c;if(c=b instanceof HTMLTemplateElement?b:document.getElementById(b),null!==c&&c instanceof HTMLTemplateElement){const b=document.importNode(c.content,!0),d=document.createElement("div");d.appendChild(b);const e=d.innerHTML;for(let b=0;b<a._items.length;b++){const c=a.dataSource,d=c[b].label,f=c[b].value,g=a._items[b].firstElementChild;g.innerHTML=e.replace(/{{label}}/g,d).replace(/{{value}}/g,f)}}}});