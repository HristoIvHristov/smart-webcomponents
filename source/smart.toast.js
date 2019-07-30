
/* Smart HTML Elements v4.0.0 (2019-Aug) 
Copyright (c) 2011-2019 jQWidgets. 
License: https://htmlelements.com/license/ */

Smart("smart-toast",class extends Smart.ContentElement{static get properties(){return{appendTo:{value:null,type:"any"},autoClose:{value:!1,type:"boolean"},autoCloseDelay:{value:3e3,type:"number"},autoOpen:{value:!1,type:"boolean"},itemTemplate:{value:null,type:"string?"},modal:{value:!1,type:"boolean"},position:{allowedValues:["top-left","top-right","bottom-left","bottom-right"],value:"top-right",type:"string"},showCloseButton:{value:!1,type:"boolean"},type:{allowedValues:["info","warning","success","error","mail","time",null],value:"info",type:"string?"},value:{value:"",type:"any"}}}static get styleUrls(){return["smart.toast.css"]}template(){return""}propertyChangedHandler(a,b,c){const d=this;switch(a){case"value":{const a=d._instances[d._instances.length-1];a&&((d.enableShadowDOM?a.shadowRoot:a).querySelector(".smart-toast-item-content").innerHTML=c);break}case"appendTo":case"modal":case"position":d._handleContainers();break;default:super.propertyChangedHandler(a,b,c);}}attached(){super.attached();const a=this,b=["TopLeft","TopRight","BottomLeft","BottomRight","Custom","Modal"];for(let c=0;c<b.length;c++){const d=a.$["toastContainer"+b[c]];d&&d.children.length&&("Custom"===b[c]?a._appendTo.appendChild(a._container):document.body.appendChild(d))}}detached(){super.detached();const a=this,b=["TopLeft","TopRight","BottomLeft","BottomRight","Custom","Modal"];for(let c=0;c<b.length;c++){const d=a.$["toastContainer"+b[c]];d&&(a._removeContainerListeners(d),d.parentElement.removeChild(d)),a.closeAll()}}ready(){super.ready();const a=this;a.value=a.innerHTML=a.value?a.value:a.innerHTML,a._instances=[],a.autoOpen&&a.open()}closeAll(){const a=this;for(var b=a._instances.length-1;-1<b;b--)a._close(a._instances[b])}closeItem(a){const b=this;a&&0!==b._instances.length&&("string"==typeof a?a=document.getElementById(a):a instanceof HTMLElement&&(a=a.closest(".smart-toast-item")),a&&-1!==b._instances.indexOf(a)&&b._close(a))}closeLast(){const a=this;0<a._instances.length&&a._close(a._instances[a._instances.length-1])}open(){const a=this;if(a.disabled)return;a._handleContainers();let b=document.createElement("div");b.className="smart-toast-item",a.value instanceof HTMLElement?(b.innerHTML=a._defaultItemTemplate(""),b.getElementsByClassName("smart-toast-item-content")[0].appendChild(a.value)):b.innerHTML=a._handleItemTemplate()||a._defaultItemTemplate(a.value),a.showCloseButton&&b.setAttribute("show-close-button","");for(let c=0;c<a.classList.length;c++)0>a.classList[c].indexOf("smart-")&&b.classList.add(a.classList[c]);if(a.type&&b.classList.add(a.type),b.setAttribute("animation",a.animation),a.enableShadowDOM&&!b.shadowRoot){const c=document.createDocumentFragment();for(;b.childNodes.length;)c.appendChild(b.firstChild);b.attachShadow({mode:"open"});const d=[].slice.call(a.shadowRoot.children).filter(a=>"LINK"===a.tagName);for(let a=0;a<d.length;a++)b.shadowRoot.insertBefore(d[a].cloneNode(),b.shadowRoot.firstChild);b.shadowRoot.appendChild(c)}a._container.appendChild(b),b._parent=a._container,a._instances.push(b),a.$.fireEvent("open",{instance:b}),setTimeout(function(){b.setAttribute("opened","")},10),a.autoClose&&(b._autoCloseTimeout=setTimeout(function(){a._close(b)},a.autoCloseDelay))}_containerClickHandler(a){const b=this,c=b.enableShadowDOM?a.composedPath()[0]:a.target,d=c.closest(".smart-toast-item-close-button"),e=(c.getRootNode().host||c).closest(".smart-toast-item");d||e?(b.$.fireEvent("click",{instance:e}),d&&b._close(e)):b.modal&&b.closeAll()}_close(a){const b=this;if(-1<b._instances.indexOf(a)){const c=window.getComputedStyle(a,null).getPropertyValue("transition-duration"),d=-1<c.indexOf("ms")?parseInt(c):1e3*parseFloat(c);a.removeAttribute("opened"),b._instances.splice(b._instances.indexOf(a),1),setTimeout(function(){clearTimeout(a._autoCloseTimeout),b.$.fireEvent("close",{instance:a}),a.parentNode&&a.parentNode.removeChild(a);const c=a._parent;c&&!c.children.length&&c.parentElement&&(b._removeContainerListeners(c),c.parentElement.removeChild(c))},d)}}_defaultItemTemplate(a){return`<div class ="smart-toast-item-header">
                    <span class ="smart-toast-item-close-button"></span>
                </div>
                <div class ="smart-toast-item-container">
                    <span class ="smart-toast-item-icon"></span><span class ="smart-toast-item-content">${a}</span>
                </div>`}_handleContainers(){const a=this;let b;return"string"==typeof a.appendTo?b=document.getElementById(a.appendTo):a.appendTo instanceof HTMLElement&&(b=a.appendTo),a._container=a._getToastContainer(b),b?(a._appendTo=b,void(a._container.parentElement||(a._addContainerListeners(a._container),a._appendTo.appendChild(a._container)))):void(!b&&a.$.toastContainerCustom&&!a.$.toastContainerCustom.children.length&&(a._removeContainerListeners(a.$.toastContainerCustom),a.$.toastContainerCustom.parentElement&&a.$.toastContainerCustom.parentElement.removeChild(a.$.toastContainerCustom)),!a._container.parentElement&&(a._addContainerListeners(a._container),document.body.appendChild(a._container)))}_addContainerListeners(a){const b=this;if(a){const c=a.getAttribute("smart-id"),d=b["$"+c];d&&(d.listen("click",b._containerClickHandler.bind(b)),d.listen("swipeleft",b._swipeHandler.bind(b)),d.listen("swiperight",b._swipeHandler.bind(b)),d.listen("swipetop",b._swipeHandler.bind(b)),d.listen("swipebottom",b._swipeHandler.bind(b)))}}_removeContainerListeners(a){const b=this;if(a){const c=a.getAttribute("smart-id"),d=b["$"+c];d&&(d.unlisten("click"),d.unlisten("swipeleft"),d.unlisten("swiperight"),d.unlisten("swipetop"),d.unlisten("swipebottom"))}}_getToastContainer(a){const b=this;let c;a?c="Custom":b.modal?c="Modal":(c=Smart.Utilities.Core.toCamelCase(b.position),c=c.charAt(0).toUpperCase()+c.slice(1));const d="toastContainer"+c;if(!b.$[d]){let a=document.createElement("div");a.setAttribute("smart-id",d),a.classList.add("smart-toast-container"),a.classList.add("smart-toast-container-"+Smart.Utilities.Core.toDash(c)),b.$["toastContainer"+c]=a,b["$toastContainer"+c]=Smart.Utilities.Extend(a)}return b.$[d]}_handleItemTemplate(){const a=this;let b=a.itemTemplate;if(!("content"in document.createElement("template")))return void a.error(a.localize("htmlTemplateNotSuported",{elementType:a.nodeName.toLowerCase()}));if(!b)return a._defaultItemTemplate(a.value);if(b=document.getElementById(b),null===b||!("content"in b))return void a.error(a.localize("invalidTemplate",{elementType:a.nodeName.toLowerCase(),property:"template"}));const c=b.innerHTML,d=/{{\w+}}/g;return c.replace(d,a.value)}_swipeHandler(a){const b=this,c=a.originalEvent.target.closest(".smart-toast-item");a.stopPropagation();c&&b.$.fireEvent(a.type,{instance:c})}});