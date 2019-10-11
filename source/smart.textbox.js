
/* Smart HTML Elements v4.6.0 (2019-Oct) 
Copyright (c) 2011-2019 jQWidgets. 
License: https://htmlelements.com/license/ */

Smart("smart-text-box",class extends Smart.ComboBox{static get properties(){return{autoFocus:{value:!1,type:"boolean"},autoComplete:{allowedValues:["none","manual","auto","inline"],type:"string",value:"manual"},displayMode:{value:"default",allowedValues:["default","escaped"],type:"string"},dropDownOpenMode:{allowedValues:["none","default","auto"],value:"default",type:"string"},enterKeyBehavior:{value:"submit",allowedValues:["submit","clearOnSubmit"],type:"string"},form:{value:"",type:"string"},hint:{value:null,reflectToAttribute:!1,type:"any"},maxLength:{value:null,type:"number?"},minLength:{value:2,type:"number"},messages:{extend:!0,value:{en:{missingReference:"{{elementType}}: Missing reference to {{files}}."}},type:"object"},required:{value:!1,type:"boolean"},requiredMessage:{value:"",type:"string"},selectAllOnFocus:{value:!1,type:"boolean"},selectionMode:{value:"zeroOrOne",allowedValues:["none","oneOrManyExtended","zeroOrMany","oneOrMany","zeroOrOne","one","checkBox","radioButton"],type:"string"},type:{value:"input",type:"string",defaultReflectToAttribute:!0,readonly:!0},value:{value:"",type:"string"}}}static get listeners(){return{"document.up":"_documentUpHandler",focus:"_focusHandler",keydown:"_keyDownHandler",mouseenter:"_mouseEventsHandler",mouseleave:"_mouseEventsHandler","input.blur":"_focusHandler","input.change":"_textBoxChangeHandler","input.focus":"_focusHandler","input.keyup":"_textBoxKeyUpHandler","input.paste":"_textBoxChangeHandler","input.select":"_textBoxSelectHandler","listBox.bindingComplete":"_bindingCompleteHandler"}}template(){return`<div id="container">
                    <span id="label" inner-h-t-m-l="[[label]]" class="smart-label"></span>
                    <div id="content" class="smart-content">
                        <input class="smart-input" type="text" id="input"
                            disabled="[[disabled]]"
                            maxlength="[[maxLength]]"
                            name="[[name]]"
                            placeholder="[[placeholder]]"
                            readonly="[[readonly]]">
                        <div id="autoCompleteString"></div>
                        <div id="dropDownContainer" class="smart-drop-down smart-drop-down-container smart-visibility-hidden">
                           <smart-list-box id="listBox"
                               data-source="[[dataSource]]"
                               unfocusable="true"
                               disabled="[[disabled]]"
                               display-loading-indicator="[[displayLoadingIndicator]]"
                               display-member="[[displayMember]]"
                               item-height="[[itemHeight]]"
                               item-template="[[itemTemplate]]"
                               filter-callback="[[filterCallback]]"
                               filter-mode="[[filterMode]]"
                               loading-indicator-placeholder="[[loadingIndicatorPlaceholder]]"
                               loading-indicator-position="[[loadingIndicatorPosition]]"
                               placeholder="[[dropDownPlaceholder]]"
                               readonly="[[readonly]]"
                               selection-mode="[[selectionMode]]"
                               value-member="[[valueMember]]">
                                <content></content>
                            </smart-list-box>
                         </div>
                    </div>
                    <span id="hint" class ="smart-hint"></span>
                </div>`}propertyChangedHandler(a,b,c){const d=this;switch(a){case"autoComplete":d.$.listBox._filteredItems&&d.$.listBox._filteredItems.length!==d.$.listBox._items.length&&super._autoComplete(!0),d.$.input.autocomplete="none"===c?"on":"off";break;case"dataSource":case"valueMember":d._clearSelection(),d._setDropDownSize(),d._positionDetection.checkBrowserBounds("vertically"),d._positionDetection.positionDropDown(),d._positionDetection.checkBrowserBounds("horizontally");break;case"displayMember":case"inputMember":{const a=d.$.listBox;if(a.selectedIndexes.length){const b=a._items[a.selectedIndexes[0]][d.inputMember];d.$.listBox.$.filterInput.value=b,d.$.input.value="escaped"===d.displayMode?d._toEscapedDisplayMode(b):d._toDefaultDisplayMode(b),d.set("value",d._toDefaultDisplayMode(d.$.input.value))}break}case"displayMode":d.$.input.value="escaped"===c?d._toEscapedDisplayMode(d.value):d.value=d._toDefaultDisplayMode(d.$.input.value);break;case"dropDownOpenMode":d._setFocusable(),d.$dropDownContainer.addClass("smart-visibility-hidden"),d.opened=!1;break;case"value":(d.$.input!==document.activeElement||d.$.input===document.activeElement&&d.$.input.value===d._oldValue)&&(d.$.input.value="escaped"===d.displayMode?d._toEscapedDisplayMode(d.value):d.value,d._oldValue=b),d.value||d.clearSelection(),0<c.length?d.$.addClass("has-value"):d.$.removeClass("has-value");break;case"hint":if(null===c)return d.$.hint.innerHTML="",void d.$.removeClass("invalid");d._handleHintContainer();break;default:super.propertyChangedHandler(a,b,c);}}static get requires(){return{"Smart.ComboBox":"smart.combobox.js"}}static get styleUrls(){return["smart.textbox.css"]}open(){const a=this;return 0===a.$.listBox.items.length||"none"===a.autoComplete?void 0:0===a.$.input.value.length&&a.$.listBox._filteredItems&&a.$.listBox._filteredItems.length!==a.$.listBox._items.length?void super._autoComplete(!0):void super.open()}close(){const a=this;super.close(),a.$.autoCompleteString.textContent="",a.$.listBox._focusedItem&&(a.$.listBox._focusedItem._focused=!1);"none"===a.autoComplete||a.$.input._filteredItems&&a.$.input._filteredItems[0]&&a.$.input._filteredItems[0]!==a.$.input.value&&super._autoComplete(!0)}focus(){this.$.input.focus()}_setFocusable(){const a=this;return a.disabled||a.unfocusable?void(a.$.input.tabIndex=-1):void a.$.input.removeAttribute("tabindex")}reset(){const a=this;"escaped"===a.displayMode?(a.value=a._initializationValue,a.$.input.value=a._toEscapedDisplayMode(a._initializationValue)):a.$.input.value=a.value=a._initializationValue,!a.value&&a.$.listBox&&a.clearSelection()}_bindingCompleteHandler(){const a=this;!a.$.listBox||a.isRendered&&(a._setDropDownSize(),a._positionDetection.checkBrowserBounds())}_createElement(){const a=this;a._browserIsIEorEdge=Smart.Utilities.Core.Browser.IE||Smart.Utilities.Core.Browser.Edge,a.autoFocus&&a.$.input.focus(),a.value&&(a.$.input.value="escaped"===a.displayMode?a._toEscapedDisplayMode(a.value):a.value),"none"!==a.autoComplete&&(a.$.input.autocomplete="off"),a._setDropDownSize(),a._handleSelectedText(),a._setFocusable(),a._initializationValue=a._oldValue=a.value,0<a.value.length?a.$.addClass("has-value"):a.$.removeClass("has-value"),a._handleHintContainer()}_focusHandler(a){const b=this;return"blur"===a.type?b._isDropDownClicked?void 0:(b.removeAttribute("focus"),b.$.autoCompleteString.textContent="",0<b.value.length?b.$.addClass("has-value"):b.$.removeClass("has-value"),("auto"===b.autoComplete||"inline"===b.autoComplete)&&0<b.$.input.value.length&&b.$.listBox._focusedItem&&b.$.listBox._focusedItem._focused&&(b.$.input.value=b.$.listBox._focusedItem[b.inputMember]),b._preventDropDownClose||b.close(),void(b._oldValue!==b.value&&b.$.fireEvent("change",{oldValue:b._oldValue,value:b.value}))):void(b.disabled||(b.setAttribute("focus",""),b._oldValue=b.value,b.selectAllOnFocus&&b.$.input.select()))}_handlePointerInEscapedSymbol(a){const b=this;if("escaped"===b.displayMode){let c=b.$.input.selectionStart,d=b.$.input.selectionEnd,e=b.$.input.value;if("\\"===e[c-1]&&e[c].match(/n|r|s|t|f/g)){if(c===d){let d="next"===a?1:-1;return b.$.input.selectionStart=c+d,void(b.$.input.selectionEnd=c+d)}b.$.input.selectionStart=c-1,"\\"===e[d-1]&&e[d].match(/n|r|s|t|f/g)&&(b.$.input.selectionEnd=d+1)}}}_handleSelectedText(){const a=this;null===a.selectionStart||null===a.selectionEnd||a.selectionStart===a.selectionEnd||a.selectAllOnFocus||(a.selectionStart=0>a.selectionStart?0:a.selectionStart,a.selectionEnd=a.selectionEnd>a.value.length?a.value.length:a.selectionEnd,a.$.input.setSelectionRange(a.selectionStart,a.selectionEnd))}_handleHintContainer(){const a=this;if(a.hint){const b=a.$.hint;if("function"==typeof a.hint){const c=a.value,d=a.hint(c,b);d?a.$.addClass("invalid"):a.$.removeClass("invalid")}else"string"==typeof a.hint&&(b.innerHTML=a.hint,a.$.removeClass("invalid"))}}_keyDownHandler(a){function b(b){let d=c.$.input.selectionStart,e=c.$.input.selectionEnd,f=c.$.input.value;a.preventDefault(),f=f.substring(0,d)+b+f.substring(e,f.length),c.value=c._toDefaultDisplayMode(f),c.$.input.value=f,c.$.input.selectionStart=c.$.input.selectionEnd=d+2}const c=this;switch(c._showAutoCompleteHighlighter=!1,a.key){case"ArrowUp":case"ArrowDown":if(a.altKey)return a.preventDefault(),void("ArrowDown"===a.key?c.open():c.close());if(c.opened){if(a.preventDefault(),c.$.listBox._handleKeyStrokes(a.key),"inline"!==c.autoComplete)break;c._showAutoCompleteHighlighter=!0,super._updateAutoCompleteHelper()}break;case"PageUp":case"PageDown":a.preventDefault(),c.$.input.selectionStart=c.$.input.selectionEnd="PageUp"===a.key?0:c.$.input.value.length;break;case"Enter":if(c.opened&&c.$.listBox._focusedItem&&c.$.listBox._focusedItem._focused&&(c.$.listBox.$.filterInput.value=c.$.listBox._focusedItem[c.inputMember],c.$.input.value="escaped"===c.displayMode?c._toEscapedDisplayMode(c.$.listBox._focusedItem[c.inputMember]):c._toDefaultDisplayMode(c.$.listBox._focusedItem[c.inputMember]),c.select(c.$.listBox._focusedItem),c.close()),"default"!==c.enterKeyBehavior){const b=c.$.input.value;c._oldValue!==b&&(a.preventDefault(),c.$.fireEvent("change",{oldValue:c._oldValue,value:b,type:"submit"}),"clearOnSubmit"===c.enterKeyBehavior&&(Smart.MaskedTextBox&&c instanceof Smart.MaskedTextBox?(c._cleanMask(),c._setMaskToInput(),c.$.input.selectionStart=c.$.input.selectionEnd=0):c.$.input.value=""),c._oldValue=c.value=c._toDefaultDisplayMode(c.$.input.value)),c._submitted=!0}break;case"Escape":if(c.$.dropDownContainer&&c.close(),c._closedFromKeyCombination=!0,"none"===c.escKeyMode)return;switch(c.escKeyMode){case"none":break;case"clearValue":c.value=c.$.input.value="";break;case"previousValue":c.$.input.value="escaped"===c.displayMode?c._toEscapedDisplayMode(c._oldValue):c._oldValue;}break;case" ":"escaped"===c.displayMode&&b("\\s");break;case"Backspace":if("escaped"===c.displayMode&&c.$.input.selectionStart===c.$.input.selectionEnd){let a=c.$.input.selectionStart;"\\"===c.$.input.value[a-2]&&("s"===c.$.input.value[a-1]||"n"===c.$.input.value[a-1])&&(c.$.input.value=c.$.input.value.substring(0,a-2)+c.$.input.value.substring(a-2,c.$.input.value.length),c.$.input.selectionStart=a-2)}}}_keyUpHandler(a){const b=this;b.disabled||"Escape"===a.key||a.target===b.$.listBox.$.filterInput||a.target===b.$.input&&"oneOrManyExtended"===b.selectionMode&&(b.$.listBox._keysPressed[a.key]=!1)}_listBoxItemClickHandler(a){const b=this,c=a.detail;if(super._listBoxItemClickHandler(a),c.selected){if("escaped"===b.displayMode){const a=b.$.input.value;b.value=b._toDefaultDisplayMode(a),b.$.input.value=a}else b.value=b.$.input.value;b._oldValue!==b.value&&(b.$.fireEvent("change",{oldValue:b._oldValue,value:b.value}),b.$.input.focus())}}_submitKeyUpHandler(){const a=this;a._submitted&&("clearOnSubmit"===a.enterKeyBehavior&&(a.$.input.selectionStart=a.$.input.selectionEnd=0),a._submitted=!1)}_textBoxKeyUpHandler(a){const b=this;if(b.disabled||a.altKey||a.ctrlKey)return;if("escaped"===b.displayMode){const a=b.$.input.value;b.value=b._toDefaultDisplayMode(b.$.input.value),b.$.input.value=a}else b.value=b.$.input.value;let c;if(1===b.$.listBox.selectedIndexes.length&&(c=b.$.listBox.getItem(b.$.listBox.selectedValues[0]),b.value!==c[b.inputMember]&&b.unselect(c)),b._showAutoCompleteHighlighter||(b.$.autoCompleteString.textContent=""),"Alt"===a.key||"Control"===a.key||!b.opened&&"Escape"===a.key||"Enter"===a.key)return void(b._closedFromKeyCombination=!1);if(a.key&&-1<a.key.indexOf("Arrow"))return void b._handlePointerInEscapedSymbol("ArrowRight"===a.key?"next":void 0);if("none"!==b.autoComplete&&(0<b.$.input.value.length||"auto"===b.dropDownOpenMode)){const a=super._autoComplete.bind(b);if(b._autoCompleteTimer&&clearTimeout(b._autoCompleteTimer),0===b.$.listBox._items.length&&"function"!=typeof b.dataSource)return void b.close();b._autoCompleteTimer=setTimeout(function(){a(!0)},b.autoCompleteDelay)}else b.close();"Enter"===a.key&&b.value!==b.value&&b._browserIsIEorEdge&&(b.value=b.$.input.value,b.$.fireEvent("change",{oldValue:b._oldValue,value:b.value}))}_listBoxChangeHandler(a){const b=this;if(a.stopPropagation(),a.detail.selected){const c=b.$.listBox._items[a.detail.index][b.inputMember];b.$.listBox.$.filterInput.value=c,b.$.input.value="escaped"===b.displayMode?b._toEscapedDisplayMode(c):b._toDefaultDisplayMode(c),b.set("value",b._toDefaultDisplayMode(b.$.input.value))}"none"!==b.autoComplete&&"function"!=typeof b.dataSource&&b._autoComplete(!0)}_mouseEventsHandler(a){const b=this;"mouseenter"===a.type?b.setAttribute("hover",""):b.removeAttribute("hover")}_textBoxChangeHandler(a){const b=this;if(a.stopPropagation(),"escaped"===b.displayMode){const c=b.$.input.value,d=b.$.input.selectionStart,e=b.$.input.selectionEnd,f=a.clipboardData||a.originalEvent&&a.originalEvent.clipboardData||window.clipboardData;if(f){let c=f.getData("text"),g=b.$.input.value;a.preventDefault(),c=b._toEscapedDisplayMode(c),b.$.input.value=g.substring(0,d)+c+g.substring(e,g.length)}b.value=b._toDefaultDisplayMode(b.$.input.value),b.$.input.value=c}else b.value=b.$.input.value;b._handleHintContainer()}_textBoxSelectHandler(){const a=this;a.disabled||(a.selectionStart=a.$.input.selectionStart,a.selectionEnd=a.$.input.selectionEnd)}_toEscapedDisplayMode(a){const b=[{key:/\r\n|\n\r|\n|\r/g,value:"\\n"},{key:/\s/g,value:"\\s"},{key:/\n/g,value:"\\n"},{key:/\t/g,value:"\\t"},{key:/\f/g,value:"\\f"},{key:/\r/g,value:"\\r"}];for(let c=0;c<b.length;c++)a=a.replace(b[c].key,b[c].value);return a}_toDefaultDisplayMode(a){a||(a="");const b=[{key:/\\s/g,value:" "},{key:/\\n/g,value:"\n"},{key:/\\t/g,value:"\t"},{key:/\\f/g,value:"\f"},{key:/\\r/g,value:"\r"}];for(let c=0;c<b.length;c++)a=a.replace(b[c].key,b[c].value);return a}_documentDownHandler(a){const b=this;if(b.disabled||b.readonly)return;let c=a.originalEvent.target;if(!b.enableShadowDOM)b._isDropDownClicked=c.closest(".smart-drop-down-container")===b.$.dropDownContainer;else if(c=a.originalEvent.composedPath()[0],null===b._dropDownParent)b._isDropDownClicked=c.closest(".smart-drop-down-container")===b.$.dropDownContainer;else{let a=c.getRootNode().host;a&&a.closest(".smart-drop-down-container")===b.$.dropDownContainer&&(b._isDropDownClicked=!0)}const d=a.originalEvent.target.closest("smart-list-item");(d||b._isDropDownClicked)&&(b._preventDropDownClose=!0)}_documentUpHandler(a){const b=this;if(b.disabled)return;let c=b.enableShadowDOM?a.originalEvent.composedPath()[0]:a.originalEvent.target;if(c){if("escaped"===b.displayMode&&c===b.$.input&&b._handlePointerInEscapedSymbol(),b._isDropDownClicked||b.readonly)return void delete b._isDropDownClicked;if(c===b.$.input&&"auto"===b.dropDownOpenMode)return void super._autoComplete(!0);for(;c;){if(c instanceof Smart.ListItem&&c.ownerListBox===b.$.listBox)return c.unselectable||c.disabled?void 0:("escaped"===b.displayMode?(b.value=c[b.inputMember],b.$.input.value=b._toEscapedDisplayMode(c[b.inputMember])):b.$.input.value=b.value=c[b.inputMember],b.$.fireEvent("change",{oldValue:b._oldValue,value:b.value,type:"submit"}),b._oldValue=b.value,"clearOnSubmit"===b.enterKeyBehavior&&(b.$.input.value=b.value=""),super._autoComplete(!0),b.close(),c="item",void b.$.input.focus());if(c===b.$.listBox)return void(c="listBox");c=c.parentElement}if("listBox"!==c&&"item"!==c)return void b.close()}}});