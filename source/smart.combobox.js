
/* Smart HTML Elements v5.1.0 (2019-Dec) 
Copyright (c) 2011-2019 jQWidgets. 
License: https://htmlelements.com/license/ */

Smart("smart-combo-box",class extends Smart.DropDownList{static get properties(){return{autoComplete:{allowedValues:["none","manual","auto","inline","list"],type:"string",value:"none"},autoCompleteDelay:{value:100,type:"number"},autoOpenShortcutKey:{value:[],type:"array"},dropDownOpenMode:{allowedValues:["none","default","dropDownButton","auto"],value:"dropDownButton",defaultReflectToAttribute:!0,type:"string"},escKeyMode:{allowedValues:["clearValue","firstPossibleValue","none","previousValue"],type:"string",value:"none"},minLength:{type:"number",value:2},value:{value:"",type:"string"}}}static get listeners(){return{"input.focus":"_inputFocusHandler","input.blur":"_inputFocusHandler","dropDownButton.focus":"_dropDownButtonFocusHandler","dropDownButton.blur":"_dropDownButtonFocusHandler","input.change":"_inputChangeEventHandler","input.mouseenter":"_buttonsMouseEventsHandler","input.mouseleave":"_buttonsMouseEventsHandler","document.down":"_documentDownHandler","document.up":"_documentUpHandler","document.selectstart":"_selectStartHandler","dropDownButton.down":"_buttonsDownHandler","dropDownButton.mouseenter":"_buttonsMouseEventsHandler","dropDownButton.mouseleave":"_buttonsMouseEventsHandler",keydown:"_keyDownHandler",keyup:"_keyUpHandler","listBox.change":"_listBoxChangeHandler","listBox.itemClick":"_listBoxItemClickHandler","listBox.keydown":"_listBoxKeyDownHandler",wheel:"_mouseWheelHandler"}}static get styleUrls(){return["smart.combobox.css"]}template(){return`<div id="container">
                    <span class="smart-label" id="label">[[label]]</span>
                    <div id="content" class="smart-content">
                        <div class ="smart-buttons-container" id="buttonsContainer">
                            <span id="actionButton" class ="smart-action-button">
                               <input class="smart-input" id="input" placeholder="[[placeholder]]" autocomplete="off"/>
                               <div class ="smart-combo-box-auto-complete-string" id="autoCompleteString"></div>
                            </span>
                            <span id="dropDownButton" class ="smart-drop-down-button">
                                <span class ="smart-drop-down-button-icon" id="arrow"></span>
                            </span>
                        </div>
                         <div id="dropDownContainer" class="smart-drop-down smart-drop-down-container smart-visibility-hidden">
                            <smart-list-box id="listBox" unfocusable
                                    animation="[[animation]]"
                                    data-source="[[dataSource]]"
                                    disabled="[[disabled]]"
                                    display-loading-indicator="[[displayLoadingIndicator]]"
                                    display-member="[[displayMember]]"
                                    filterable="[[filterable]]"
                                    filter-callback="[[filterCallback]]"
                                    filter-mode="[[filterMode]]"
                                    filter-input-placeholder="[[filterInputPlaceholder]]"
                                    grouped="[[grouped]]"
                                    group-member="[[groupMember]]"
                                    item-height="[[itemHeight]]"
                                    item-template="[[itemTemplate]]"
                                    incremental-search-delay="[[incrementalSearchDelay]]"
                                    incremental-search-mode="[[incrementalSearchMode]]"
                                    loading-indicator-placeholder="[[loadingIndicatorPlaceholder]]"
                                    loading-indicator-position="[[loadingIndicatorPosition]]"
                                    name="[[name]]"
                                    placeholder="[[dropDownPlaceholder]]"
                                    readonly="[[readonly]]"
                                    right-to-left="[[rightToLeft]]"
                                    selected-indexes="{{selectedIndexes}}"
                                    selection-mode="[[selectionMode]]"
                                    selected-values="{{selectedValues}}"
                                    sorted="[[sorted]]"
                                    theme="[[theme]]"
                                    value-member="[[valueMember]]"
                                    horizontal-scroll-bar-visibility="[[horizontalScrollBarVisibility]]"
                                    vertical-scroll-bar-visibility="[[verticalScrollBarVisibility]]"
                                    virtualized="[[virtualized]]">
                                <content></content>
                            </smart-list-box>
                            <div id="resizeBar" class="smart-drop-down-resize-bar">
                                <div></div>
                            </div>
                         </div>
                    </div>
                    <span class="smart-hint" id="hint">[[hint]]</span>
                </div>`}propertyChangedHandler(a,b,c){const d=this;switch(a){case"autoComplete":if("list"===c){d.$.listBox.$.filterInput.value="";let a=d.$.listBox.context;d.$.listBox.context=d.$.listBox,d.$.listBox._filterItems(!0),d.$.listBox.context=a,d._setDropDownSize()}d._autoComplete(!0);break;case"dataSource":case"displayMember":d._clearSelection(!0),d._setDropDownSize(),d._positionDetection.checkBrowserBounds("vertically"),d._positionDetection.positionDropDown(),d._positionDetection.checkBrowserBounds("horizontally");break;case"disabled":d.$.input.disabled=c,d._setFocusable(),d.close(),d._positionDetection&&d._positionDetection.handleAutoPositioning();break;case"readonly":d.$.input.readOnly=c,d.close();break;case"selectedValues":case"selectedIndexes":d._clearSelection(!0),d._applySelection(d.selectionMode);break;case"selectionMode":case"selectionDisplayMode":d._clearSelection(),d._applySelectionDisplayMode(),"tokens"===d.selectionDisplayMode&&(d._currentSelection=void 0),d._applySelection(d.selectionMode);break;case"tokenTemplate":if(d.$.selectionField)for(;"SPAN"===d.$.selectionField.firstElementChild.nodeName;)d.$.selectionField.removeChild(d.$.selectionField.firstElementChild);d._tokenTemplate=d._validateTemplate(d.tokenTemplate),d._applySelection();break;case"value":d._queryItems(!0);break;default:super.propertyChangedHandler(a,b,c);}}clearItems(){const a=this;a.$.listBox.clearItems(),a._clearSelection(!0)}clearSelection(){const a=this;a.$.listBox.clearSelection(),a._clearSelection(!arguments[0])}blur(){this.$.input.blur()}focus(){this.$.input.focus()}_setFocusable(){const a=this;if(!a.disabled&&!a.unfocusable){let b=0<a.tabIndex?a.tabIndex:0;return a.$.input.tabIndex=b,void("dropDownButton"===a.dropDownOpenMode?a.$.dropDownButton.setAttribute("tabindex",b):a.$.dropDownButton.removeAttribute("tabindex"))}a.$.input.tabIndex=-1,a.$.dropDownButton.removeAttribute("tabindex")}_autoComplete(a){const b=this;if("list"===b.autoComplete)return;if(0===b.$.listBox._items.length&&"function"!=typeof b.dataSource)return void b.close();const c=b.$.input.value.length<b.minLength?"":"escaped"===b.displayMode?b._toDefaultDisplayMode(b.$.input.value):b.$.input.value,d=function(a){for(let b=0;b<a.length;b++)if(a[b]._focused&&a[b].hasAttribute("focus"))return!0};let e;1===b.$.listBox.selectedValues.length&&(e=b.$.listBox.getItem(b.$.listBox.selectedValues[0])),b.$.autoCompleteString.textContent="",b.$.listBox.$.filterInput.value="none"===b.autoComplete||b.$.input.value.length<b.minLength?"":c;const f=function(){if(b.$.listBox.isAttached&&b.$.input){const a=b.enableShadowDOM?b.shadowRoot.activeElement:document.activeElement;if(b._setDropDownSize(),b.opened&&(b._positionDetection.positionDropDown(),b._positionDetection.checkBrowserBounds()),b.$.listBox._filteredItems&&0<b.$.listBox._filteredItems.length){if(b.$.listBox._scrollView.scrollTop=b.$.listBox._filteredItems[0].offsetTop,"none"!==b.autoComplete&&b.$.input.value.length>=b.minLength&&!d(b.$.listBox._filteredItems)&&b._focus(b.$.listBox._filteredItems[0]),a===b.$.input&&"inline"===b.autoComplete&&b.$.input.value.length>=b.minLength&&b._updateAutoCompleteHelper(),e&&e[b.inputMember]===b.$.listBox._filteredItems[0][b.inputMember]&&e.value===b.$.listBox._filteredItems[0].value&&(b.$.listBox.context=b.$.listBox,b.$.listBox._select(b.$.listBox._filteredItems[0],!0),b.$.listBox.context=g),c!==b.$.listBox._filteredItems[0][b.inputMember]||Smart.TextBox&&b instanceof Smart.TextBox&&"auto"===b.dropDownOpenMode){if(b._closedFromKeyCombination)return void(b._closedFromKeyCombination=!1);if(c.length<b.minLength&&!(Smart.TextBox&&b instanceof Smart.TextBox&&"auto"===b.dropDownOpenMode))return void b.close();b.isCompleted&&"none"!==b.dropDownOpenMode&&a===b.$.input&&b.open()}return}b["function"==typeof b.dataSource?"open":"close"]()}};let g=b.$.listBox.context;b.$.listBox.context=b.$.listBox,b.$.listBox._filterItems(!!a,f,Smart.TextBox&&b instanceof Smart.TextBox&&"auto"===b.dropDownOpenMode),b.$.listBox.context=g}_updateAutoCompleteHelper(){const a=this,b=a.$.autoCompleteString;if(b.style.width=a.$.input.offsetWidth+"px",b.style.height=a.$.input.offsetHeight+"px",b.style.left=a.$.input.offsetLeft+"px",b.style.top=a.$.input.offsetTop+"px",b.style.paddingLeft=0<a.selectedIndexes.length?0:null,!a._focusedItem)return void(b.textContent="");const c=a.$.input.value,d=a._focusedItem[a.inputMember];d.length!==c.length&&0===d.toLowerCase().indexOf(c.toLowerCase())&&(b.textContent=a.$.input.value+d.slice(c.length))}_applySelection(a,b){function c(){for(;"SPAN"===d.$.selectionField.firstElementChild.nodeName;)d.$.selectionField.removeChild(d.$.selectionField.firstElementChild);let a,b,c=document.createDocumentFragment();b="tokens"===d.selectionDisplayMode?1===d.selectedIndexes.length&&("oneOrManyExtended"===d.selectionMode||"oneOrMany"===d.selectionMode)?"":"&#10006":",",d.selectedIndexes.map(e=>{a=d._applyTokenTemplate(d.$.listBox._items[e][d.inputMember],b),a._value=d.$.listBox._items[e].value,c.appendChild(a)}),d.$.selectionField.insertBefore(c,d.$.input),d._currentSelection=d.selectedIndexes.map(a=>d.$.listBox._items[a][d.inputMember]),d.$.container.setAttribute("has-value",""),d._oldValue=d.value=d._currentSelection.toString(),d._positionDetection.positionDropDown()}const d=this;if(d.$.selectionField||(d.$.selectionField=d.$.actionButton),d.$.autoCompleteString.textContent="",0===d.selectedIndexes.length)return void d._clearSelection(b&&-1<b.index&&d.$.input.value===d.$.listBox._items[b.index][d.inputMember]);if(d.$.listBox._items&&0!==d.$.listBox._items.length)if("one"===d.selectionMode||"zeroOrOne"===d.selectionMode||"radioButton"===d.selectionMode){if(d._currentSelection&&d._currentSelection.length>d.selectedIndexes.length)return d._currentSelection=d.selectedIndexes.map(a=>d.$.listBox._items[a][d.inputMember]),d.$.input.value=d._currentSelection.toString(),void(d._oldValue=d.value=d._currentSelection.toString());d._clearSelection(),d._currentSelection=d.selectedIndexes.map(a=>d.$.listBox._items[a][d.inputMember]),d.$.input.value=d._currentSelection.toString(),d._oldValue=d.value=d._currentSelection.toString(),d.$.container.setAttribute("has-value",""),"none"!==d.autoComplete&&"function"!=typeof d.dataSource&&(d._autoComplete(!0),!d._keyboardNavigation&&d.close())}else{if(d.$.input.value="",d.$.input.placeholder="",d.$.container.setAttribute("has-value",""),!d._currentSelection||"oneOrManyExtended"===d.selectionMode||"radioButton"===d.selectionMode&&!d.grouped)return void c();const a=d.$.selectionField.getElementsByClassName("smart-token");if(d._currentSelection.length<d.selectedIndexes.length){let a=d.selectedIndexes.map(a=>d.$.listBox._items[a][d.inputMember]);for(let b=0;b<a.length;b++)if(0>d._currentSelection.indexOf(a[b])){const a=d.$.listBox._items[d.selectedIndexes[b]];let c,e;e="tokens"===d.selectionDisplayMode?1===d.selectedIndexes.length&&("oneOrManyExtended"===d.selectionMode||"oneOrMany"===d.selectionMode)?"":"&#10006":",",1===d.selectedIndexes.length&&("oneOrManyExtended"===d.selectionMode||"oneOrMany"===d.selectionMode)&&(e=""),c=d._applyTokenTemplate(a[d.inputMember],e),c._value=a.value,d.$.selectionField.insertBefore(c,d.$.input)}"none"!==d.autoComplete&&d.$.listBox._filteredItems&&d.$.listBox._filteredItems.length!==d.$.listBox._items.length&&d._autoComplete(!0),d._positionDetection.positionDropDown()}else{if(0<d._currentSelection.length&&0===a.length||d._currentSelection.length===d.selectedIndexes.length&&d._currentSelection.toString()!==d.selectedValues.toString())return void c();if(!b)return;for(let c=0;c<a.length;c++)if(a[c]._value===b.value){d.$.selectionField.removeChild(a[c]);break}}d._currentSelection=d.selectedIndexes.map(a=>d.$.listBox._items[a][d.inputMember]),d._oldValue=d.value=d._currentSelection.toString()}}_applySelectionDisplayMode(){const a=this;"one"===a.selectionMode||"zeroOrOne"===a.selectionMode||"radioButton"===a.selectionMode?a.$.removeClass("auto-height"):a.$.addClass("auto-height")}_bindingCompleteHandler(){const a=this;a._queryItems(),a._setDropDownSize()}_buttonsMouseEventsHandler(a){const b=this;b.disabled||b.readonly||("mouseenter"===a.type?(a.target.setAttribute("hover",""),b.setAttribute("hover",""),"auto"===b.dropDownOpenMode&&!(Smart.TextBox&&b instanceof Smart.TextBox)&&(a.target===b.$.dropDownButton?(b.open(),b.$.input.focus()):b.close())):(a.target.removeAttribute("hover"),b.removeAttribute("hover")))}_createElement(){const a=this;a.classList.add("smart-drop-down-box"),a._tokenTemplate=a._validateTemplate(a.tokenTemplate),a._applySelectionDisplayMode(),a._applySelection(a.selectionMode),"none"!==a.autoComplete&&(a._autoComplete(!0),a.$.input.autocomplete="off"),a._setDropDownSize(),a.$.input.disabled=a.disabled,a.$.input.readOnly=a.readonly,a._setFocusable(),0<a.$.input.value.length&&0===a.selectedIndexes.length&&(a.$.container.setAttribute("has-value",""),a._oldValue=a.value=a.$.input.value),a.$.arrow.noRipple=!0,a.checkLicense(),a._setAriaRelations(!0)}_clearSelection(a){const b=this;if(a&&(b.$.input.value="",b.value=""),b.$.input.placeholder=b.placeholder,b.$.autoCompleteString.textContent="",b._currentSelection=[],b.$.selectionField)for(;"SPAN"===b.$.selectionField.firstElementChild.nodeName;)b.$.selectionField.removeChild(b.$.selectionField.firstElementChild);"none"!==b.autoComplete&&"list"!==b.autoComplete&&0<b.$.input.value.length&&(b._autoCompleteTimer&&clearTimeout(b._autoCompleteTimer),"function"!=typeof b.dataSource&&(b._autoCompleteTimer=setTimeout(function(){b._autoComplete(!0)},b.autoCompleteDelay))),b.$.input.value.length||b.$.container.removeAttribute("has-value")}_documentDownHandler(a){const b=this;super._documentDownHandler(a);let c=a.originalEvent.target;(b.shadowRoot||b.isInShadowDOM)&&(c=a.originalEvent.composedPath()[0]),c!==b.$.dropDownButton||"none"===b.dropDownOpenMode||Smart.Utilities.Core.isMobile||requestAnimationFrame(()=>b.$.input.focus())}_documentUpHandler(a){const b=this;let c=a.originalEvent.target,d=c.closest?c.closest("smart-combo-box"):void 0;(b.shadowRoot||b.isInShadowDOM)&&(c=a.originalEvent.composedPath()[0],d=c.getRootNode().host);const e=c;if(b._resizeDetails&&b._resizeDetails.started)return b._resizeDetails.started=b._resizeDetails.resizeEventFired=!1,b.removeAttribute("resizing"),b._dropDownResized=!0,void b.$.fireEvent("resizeEnd",{position:{left:a.pageX,top:a.pageY}});if(b.disabled||b._isDropDownClicked||b.readonly)return void delete b._isDropDownClicked;if(b._overlayDown)return b.close(),void delete b._overlayDown;if(c!==b.$.input&&"undefined"!=typeof c&&c!==b.$.resizeBar){if(c===b.$.selectionField)return void b.$.input.focus();if(c===b.$.dropDownButton&&"none"!==b.dropDownOpenMode)return b._preventDropDownClose=!0,b.$dropDownContainer.hasClass("smart-visibility-hidden")?b.open():b.close(),void(Smart.Utilities.Core.isMobile||requestAnimationFrame(()=>b.$.input.focus()));if(c.classList.contains("smart-drop-down-list-selection-label")&&d===b&&"none"!==b.dropDownOpenMode){b.open();let a=b.$.listBox._items.filter(a=>a[b.inputMember].toString()===c.textContent)[0];return b.$.input.focus(),b.$.listBox._scrollView.scrollTop=a.offsetTop,void b._focus(a)}return"tokens"===b.selectionDisplayMode&&c.classList.contains("smart-drop-down-list-unselect-button")&&d===b?1===b.selectedIndexes.length&&0>["zeroOrMany","zeroOrOne","checkBox"].indexOf(b.selectionMode)?void 0:(b.unselect(b.$.listBox._items.filter(a=>a[b.inputMember].toString()===c.previousElementSibling.textContent)[0]),void b.$.input.focus()):(c=b._getUpEventTarget(c),void 0===c?void b.$.input.focus():void((!b.$dropDownContainer.hasClass("smart-visibility-hidden")&&"dropDownContainer"!==c&&"item"!==c||"item"===c&&0>b.selectionMode.indexOf("Many")&&"checkBox"!==b.selectionMode)&&b.close(),("item"===c||"dropDownContainer"===c&&e!==b.$.listBox.$.filterInput)&&b.$.input.focus()))}}_dropDownButtonFocusHandler(a){const b=this;"focus"===a.type?("dropDownButton"!==b.dropDownOpenMode&&b.$.input.focus(),b.setAttribute("focus","")):b.removeAttribute("focus")}_inputFocusHandler(a){const b=this;if(!b.disabled)if("focus"===a.type)b.setAttribute("focus",""),b._buttonClicked||(b._oldValue=b.$.input.value);else{if(b.removeAttribute("focus"),""!==a.target.value||0!==b.selectedIndexes.length&&""===a.target.value?b.$.container.setAttribute("has-value",""):b.$.container.removeAttribute("has-value"),b._preventDropDownClose||(b.opened&&("auto"===b.autoComplete||"inline"===b.autoComplete)&&0<b.$.input.value.length&&b._focusedItem&&!b._focusedItem.selected&&b.select(b._focusedItem),b.close()),!b._handleAutoCompleteModeList())return;"previousValue"===b.escKeyMode&&(b.value=b.$.input.value)}}_handleAutoCompleteModeList(){const a=this;if("list"===a.autoComplete&&!a._buttonClicked){if(a.opened&&a._isDropDownClicked)return!1;if(a.$.autoCompleteString.textContent="",a._lastSelectedItem)a._lastSelectedItem.selected||a.select(a._lastSelectedItem);else if(a.$.input.value.length&&a._oldValue){const b=a.$.listBox._queryItems(a._oldValue,a.incrementalSearchMode);for(let c=0;c<b.length;c++)if(!b[c].hidden){b[c].selected||a.select(b[c]),a._focus(b[c]);break}a.value=a.$.input.value=a._oldValue}else a.value=a.$.input.value=""}}_inputChangeEventHandler(a){const b=this;return a.stopPropagation(),b._preventInputChangeEvent?void delete b._preventInputChangeEvent:void(b._isDropDownClicked||b._oldValue===b.$.input.value||b.$.fireEvent("change",{oldValue:b._oldValue,value:b.$.input.value,addedItems:[],removedItems:[],selected:[],disabled:[],index:[],label:[]}))}_keyDownHandler(a){const b=this,c=b.enableShadowDOM?a.composedPath()[0]:a.target;if(!(b.disabled||b.readonly||c===b.$.listBox.$.filterInput)){const d="function"==typeof b._focusedItem?b._focusedItem():b._focusedItem;switch(a.key){case"Enter":if(delete b._preventInputChangeEvent,c===b.$.input&&d&&b.opened){if(d.selected&&"list"===b.autoComplete)return b.close(),b._unfocus(),void b._handleAutoCompleteModeList();d.disabled||(b.select(d),b._preventInputChangeEvent=!0),!b.$dropDownContainer.hasClass("smart-visibility-hidden")&&-1<b.selectionMode.indexOf("one")&&(b.close(),b._unfocus())}else c===b.$.dropDownButton?(b.$.dropDownButton.setAttribute("active",""),b.$dropDownContainer.hasClass("smart-visibility-hidden")&&"none"!==b.dropDownOpenMode?b.open():b.close(),b.$.input.focus()):b.close();return void b._handleAutoCompleteModeList();case"Escape":switch(b.escKeyMode){case"none":b.$dropDownContainer.hasClass("smart-visibility-hidden")||(b.close(),b._unfocus());break;case"clearValue":b.value=b.$.input.value="",b.close();break;case"previousValue":b.$.input.value=b._oldValue;break;case"firstPossibleValue":{const a=b.$.listBox._items.find(a=>!a.disabled&&!a.hidden&&!a.readonly);if(a){const c=a[b.inputMember];b.$.input.value===c&&b.close(),b.$.input.value=c}b.close();break}}break;case"End":case"Home":case"PageUp":case"PageDown":case"ArrowUp":case"ArrowDown":if(!0===b._autoOpenOnKeyDown(a))return;if(a.altKey){if(b._closedFromKeyCombination=!0,b.$dropDownContainer.hasClass("smart-visibility-hidden")&&"none"!==b.dropDownOpenMode){if(b.open(),0===b.items.length)return;0===b.selectedIndexes.length?b._focus(b.items[0]):0<b.selectedIndexes.length&&!b.$.listBox._items[b.selectedIndexes[b.selectedIndexes.length-1]].hidden&&b._focus(b.items[b.selectedIndexes[b.selectedIndexes.length-1]])}else b.close();return}if(c===b.$.input&&b.$dropDownContainer.hasClass("smart-visibility-hidden"))return void(a.ctrlKey&&(a.preventDefault(),b._handleKeyStroke(a.key)));if(("PageUp"===a.key||"PageDown"===a.key)&&!d||c===b.$.listBox.$.filterInput)return;if(a.preventDefault(),!d||d&&!d._focused)return void b._focus(b.items[0]);b._handleKeyStroke(a.key),("inline"===b.autoComplete||"list"===b.autoComplete)&&b._updateAutoCompleteHelper();break;case"Backspace":if(b.$.input.previousElementSibling){if(0===b.$.input.value.length){if(1===b.selectedIndexes.length&&0>["zeroOrMany","zeroOrOne","checkBox"].indexOf(b.selectionMode))return;const a=b.$.listBox.getItem(b.$.input.previousElementSibling._value);a?b.unselect(a):b.$.selectionField.firstElementChild&&"SPAN"===b.$.selectionField.firstElementChild.nodeName&&b.$.selectionField.removeChild(b.$.selectionField.firstElementChild)}return}1<b.selectedIndexes.length&&b.clearSelection(!0);break;default:if(c===b.$.input&&"oneOrManyExtended"===b.selectionMode&&(b.$.listBox._keysPressed[a.key]=!0),!0===b._autoOpenOnKeyDown(a))return;}}}_handleKeyStroke(a){const b=this,c=b.$.listBox;if("none"===b.autoComplete)return void c._handleKeyStrokes(a);const d=b.items;switch(a){case"ArrowLeft":case"ArrowUp":b._handleArrowKeys(!0);break;case"ArrowRight":case"ArrowDown":b._handleArrowKeys(!1);break;case"Home":case"End":{if(0===d.length)return;const e="Home"===a;b._focus(e?d[0]:d[d.length-1]),c.scrollTop=e?0:c.scrollHeight;break}case"PageUp":{b._pageUpKeyHandler(d);break}case"PageDown":{b._pageDownKeyHandler(d);break}}c._recycle()}_handleArrowKeys(a){const b=this,c=b.$.listBox;let d;if(b._focusedItem)d=b.$.listBox._indexOf(b._focusedItem),b._focusedItem._focused=!1;else if(0!==b.selectedIndexes.length)d=b.selectedIndexes[b.selectedIndexes.length-1];else return;const e=a?c._getPreviousItem(d):c._getNextItem(d);b._focus(e),"list"===b.autoComplete&&c._items[d]!==e&&(b._keyboardNavigation=!0,c.clearSelection(),c.select(e),delete b._keyboardNavigation),b.ensureVisible(e)}_pageDownKeyHandler(a){const b=this,c=b.$.listBox;let d=c._items[b.selectedIndexes[b.selectedIndexes.length-1]];c._focusedItem&&(d=c._focusedItem);let e;const f=c._indexOf(d);let g=d.top+c.$.itemsContainer.offsetHeight-d.height;for(let b=f;b<a.length;b++)if(a[b].top>=g){e=a[b];break}e||(e=a[a.length-1]),b._focus(e),(e.height+e.top>c.$.itemsContainer.scrollTop+c.$.itemsContainer.offsetHeight||e.top<c.$.itemsContainer.scrollTop)&&(c.scrollTop=e.top-c.$.itemsContainer.offsetHeight+e.height)}_pageUpKeyHandler(a){const b=this,c=b.$.listBox;let d=c._items[b.selectedIndexes[b.selectedIndexes.length-1]];c._focusedItem&&(d=c._focusedItem);const e=d.top-c.$.itemsContainer.offsetHeight,f=c._indexOf(d);let g;for(let b=f;0<b;b--)if(a[b].top<=e){g=a[b];break}g||(g=a[0]),c._focus(g),c.scrollTop=g.top,0===c._indexOf(g)&&(c.scrollTop=0)}_autoOpenOnKeyDown(a){const b=this;if(!(b.opened||!b.opened&&0>b.autoOpenShortcutKey.indexOf(a.key))){b.selectedIndexes.length&&b._focus(b.items[b.selectedIndexes[b.selectedIndexes.length-1]]);const c="function"==typeof b._focusedItem?b._focusedItem():b._focusedItem;return b.open(),c&&(!c||c._focused)||("ArrowDown"===a.key?b._focus(b.items[0]):"ArrowUp"===a.key&&b._focus(b.items[b.items.length-1]),b.ensureVisible(b._focusedItem)),!0}}_keyUpHandler(a){const b=this,c=b.enableShadowDOM?a.composedPath()[0]:a.target;if(!(b.disabled||"none"===b.escKeyMode&&"Escape"===a.key||c===b.$.listBox.$.filterInput)){if(c===b.$.input&&"oneOrManyExtended"===b.selectionMode&&(b.$.listBox._keysPressed[a.key]=!1),-1<["one","radioButton","zeroOrOne"].indexOf(b.selectionMode)&&1===b.selectedIndexes.length&&b.$.input.value!==(b._currentSelection?b._currentSelection[0]:void 0)&&b.unselect(b.$.listBox._items[b.selectedIndexes[0]]),"Enter"===a.key)return void b.$.dropDownButton.removeAttribute("active");if(c===b.$.input&&0>a.key.indexOf("Arrow")&&0>["Control","Shift"].indexOf(a.key)){if(b.value===b.$.input.value)return;if(b.value=b._currentSelection?b._currentSelection.toString()+(0<b._currentSelection.length?",":"")+b.$.input.value:b.$.input.value,b.$.autoCompleteString.textContent="",b._closedFromKeyCombination)return void(b._closedFromKeyCombination=!1);if("none"!==b.autoComplete&&"list"!==b.autoComplete?(b.$.input.value!==(b._currentSelection?b._currentSelection.toString():void 0)||b.$.listBox._filteredItems&&b.$.listBox._filteredItems.length!==b.$.listBox._items.length)&&(b._autoCompleteTimer&&clearTimeout(b._autoCompleteTimer),b._autoCompleteTimer=setTimeout(function(){b._autoComplete(!0)},b.autoCompleteDelay)):(0<b.$.input.value.length&&b._queryItems(),b._focusedItem&&("Escape"!==a.key||"firstPossibleValue"!==b.escKeyMode)&&(b.open()," "!==a.key&&(b.$.listBox._scrollView.scrollTop=b._focusedItem.offsetTop))),"none"!==b.autoComplete&&"list"!==b.autoComplete&&b.$.listBox._filteredItems&&b.$.listBox._filteredItems.length===b.$.listBox._items.length)return void b.close()}}}_queryItems(a){const b=this;if(!b.value||!b.$.input)return void b.close();let c=b.$.listBox._queryItems(b.$.input.previousElementSibling?b.$.input.value:b.value,b.incrementalSearchMode);0===c.length&&b._unfocus();for(let d=0;d<c.length;d++)if(!c[d].hidden){a&&!c[d].selected&&b.select(c[d]),b._focus(c[d]);break}"list"===b.autoComplete&&(b.enableShadowDOM?b.shadowRoot.activeElement:document.activeElement)===b.$.input&&b.$.input.value.length>=b.minLength?(b._lastSelectedItem=b._focusedItem,b._updateAutoCompleteHelper()):b._lastSelectedItem=void 0}_selectStartHandler(a){const b=this;b._resizeDetails&&b._resizeDetails.started&&a.preventDefault()}_unfocus(){const a=this;a._focusedItem&&(a._focusedItem._focused=!1,a.$.listBox._focusedItem=void 0)}});