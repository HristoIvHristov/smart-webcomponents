
/* Smart HTML Elements v3.2.0 (2019-June) 
Copyright (c) 2011-2019 jQWidgets. 
License: https://htmlelements.com/license/ */

Smart("smart-masked-text-box",class extends Smart.TextBox{static get properties(){return{allowPromptAsInput:{value:!1,type:"boolean"},asciiOnly:{value:!1,type:"boolean"},autoShowMask:{value:!1,type:"boolean"},cutCopyMaskFormat:{value:"excludePromptAndLiterals",allowedValues:["excludePromptAndLiterals","includePrompt","includeLiterals","includePromptAndLiterals"],type:"string"},hidePromptOnLeave:{value:!1,type:"boolean"},hint:{value:"",reflectToAttribute:!0,type:"string"},isOverwriteMode:{value:!1,type:"boolean"},mask:{value:"#####",type:"string"},maskCompleted:{value:!1,type:"boolean"},maskFull:{value:!1,type:"boolean"},promptChar:{value:"_",type:"string"},rejectInputOnFirstFailure:{value:!1,type:"boolean"},resetOnPrompt:{value:!1,type:"boolean"},resetOnSpace:{value:!1,type:"boolean"},textMaskFormat:{value:"excludePromptAndLiterals",allowedValues:["excludePromptAndLiterals","includePrompt","includeLiterals","includePromptAndLiterals"],type:"string"},validation:{value:null,type:"function?",reflectToAttribute:!1},value:{value:null,reflectToAttribute:!0,type:"string?"}}}static get listeners(){return{mouseenter:"_mouseEventsHandler",mouseleave:"_mouseEventsHandler","input.copy":"_cutCopyHandler","input.change":"_textBoxChangeHandler","input.cut":"_cutCopyHandler","input.paste":"_textBoxPasteHandler","input.keydown":"_textBoxKeyDownHandler","input.keyup":"_textBoxKeyUpHandler","input.blur":"_blurHandler","input.focus":"_focusHandler"}}template(){return`<div id="container">
                    <span id="label" inner-h-t-m-l="[[label]]" class ="smart-label"></span>
                    <input type="text" id="input"
                        autocomplete="off"
                        autocorrect="off"
                        autocapitalize="off"
                        disabled="[[disabled]]"
                        maxlength="[[maxLength]]"
                        minlength="[[minLength]]"
                        name="[[name]]"
                        placeholder="[[placeholder]]"
                        readonly="[[readonly]]">
                    <span id="hint" inner-h-t-m-l="[[hint]]" class ="smart-hint"></span>
                </div>`}propertyChangedHandler(a,b,c){const d=this;let e;switch(a){case"hidePromptOnLeave":c&&!d._focused?d._hidePrompt():d._promptHidden&&d._showPrompt();break;case"maxLength":0<d.mask.length&&(d.maxLength=b);break;case"maskCompleted":case"maskFull":d[a]=b;break;case"promptChar":d._updatePromptChar();break;case"placeholder":d._isPlaceholderRequired()?(d.$.input.value="",d.$.removeClass("has-value")):d._updatePromptChar(),d._updatePromptChar();break;case"mask":e=d._getValueWithTextMaskFormat({start:0,end:d._mask.length},"excludePromptAndLiterals"),d._isPlaceholderRequired()?(d.$.input.value="",d.$.removeClass("has-value")):(d._initializeMask(),d._setValueToMask(e),d._setMaskToInput(),d.maxLength=d._mask.length,d._promptHidden&&d._hidePrompt());break;case"value":d._overwrite=!0,d._setValueToMask(c),d._overwrite=!1,d._setMaskToInput(),d._promptHidden&&d._hidePrompt();break;case"disabled":d._setFocusable();break;case"readonly":break;default:super.propertyChangedHandler(a,b,c);}d.value=d._getValueWithTextMaskFormat({start:0,end:d._mask.length},d.textMaskFormat)}_createElement(){const a=this;a.autoFocus&&a.$.input.focus(),a._setFocusable(),a._initializeMask(),a._updateMaxLength(),a._isPlaceholderRequired()?(a.$.input.value="",a.$.removeClass("has-value")):(a._setValueToMask(a.value),a._setMaskToInput(),a._updateMaskFullAndCompleted(),a.$.addClass("has-value")),a.$.input.selectionStart=a.$.input.selectionEnd=0,a._initializationValue=a._value=a.value,a._rejectInput=!1}_blurHandler(){const a=this,b=a._isPlaceholderRequired();a.disabled||(a._valueBeforeChange!==a.value&&(a.$.fireEvent("change",{newValue:a.value,oldValue:a._valueBeforeChange}),a._valueBeforeChange=""),a._hidePrompt(),a._focused=!1,a._validateMaskValue(),a.removeAttribute("focus"),0<a.$.input.value.length?a.$.addClass("has-value"):a.$.removeClass("has-value"),b&&(a.$.input.value="",a.$.removeClass("has-value")))}_updateMaskFullAndCompleted(){const a=this;let b=!0,c=!0,d=!1;for(let e=0;e<a._mask.length;e++){const f=a._mask[e];"mask"===f.type&&(f.required&&(d=!0),""===f.character&&(f.required&&(c=!1),b=!1))}b||!c||d||(c=!1),a.maskFull=b,a.maskCompleted=c}_isPlaceholderRequired(){const a=this,b=a.value&&0<a.value.length,c=0<a.placeholder.length,d=!b&&(c||a.autoShowMask);return d}_cleanMask(a,b){const c=this;a=a?a:0,b=b?b:c._mask.length;for(let d,e=a;e<b;e++)d=c._mask[e],"mask"===d.type&&(c._mask[e].character="")}_cutCopyHandler(a,b){const c=this,d=parseInt(c.$.input.selectionStart,10),e=parseInt(c.$.input.selectionEnd,10),f=c._getValueWithTextMaskFormat({start:d,end:e});return(window.clipboardData&&(window.clipboardData.setData("text/plain",f),window.clipboardData.setData("text/html",f)),a&&c._preventDefault(a),"Copy"===b)?f:(c._cleanMask(d,e),c.value=c._getValueWithTextMaskFormat({start:0,end:c._mask.length},c.textMaskFormat),c._setMaskToInput(),c.$.input.selectionStart=c.$.input.selectionEnd=d,c.maskFull=c.maskCompleted=!1,f)}_documentUpHandler(){}_deleteHandler(a){const b=this,c=b.$.input.selectionStart,d=b.$.input.selectionEnd,e=a.key;let f=c;if(b._preventDefault(a),c!==d)b._cleanMask(c,d),"Delete"===e&&(f=d);else if("Backspace"===e)for(let a=c;0<a;a--){const d=b._mask[a-1];if("mask"===d.type){f=a-1,d.character="";break}else{f=c-1;break}}else for(let a=c;a<b._mask.length;a++){const d=b._mask[a];if("mask"===d.type){f=a+1,d.character="";break}else{f=c+1;break}}b._setMaskToInput(),b._updateMaskFullAndCompleted(),b.value=b._getValueWithTextMaskFormat({start:0,end:b._mask.length},b.textMaskFormat),b.$.input.selectionStart=b.$.input.selectionEnd=f}_findNextOccupiedPosition(a){const b=this,c=b._mask.length;let d=a;for(let e,f=a;f<c&&(e=b._mask[f],"mask"===e.type&&""===e.character);f++)d++;return d}_focusHandler(a){const b=this;if("INPUT"!==a.context.nodeName.toUpperCase())return void b.$.input.focus();if(!b.disabled&&(b.setAttribute("focus",""),b.selectAllOnFocus&&b.$.input.select(),b._showPrompt(),b._focused=!0,b._isPlaceholderRequired())){b._initializeMask(),b._setValueToMask(b.value),b._setMaskToInput();const a=b._getEditableSelectionStart(0);b.$.input.selectionStart=b.$.input.selectionEnd=a}}_setMaskToInput(){const a=this;let b="";for(let c=0;c<a._mask.length;c++){const d=a._mask[c];let e;if("literal"===d.type||"separator"===d.type||"placeholder"===d.type||"currency"===d.type)e=d.character;else if("mask"===d.type&&""!==d.character)switch(d.escapeSymbol){case">":e=d.character.toUpperCase();break;case"<":e=d.character.toLowerCase();break;case"|":e=d.character;break;case"\\":e=d.character;break;default:e=d.character;}else e=d.defaultCharacter;b+=e}a.$.input.value=b}_getEditableSelectionStart(a,b){const c=this;for(let d=a;d<c._mask.length;d++){const a=c._mask[d];if("mask"===a.type&&(""===a.character||c.isOverwriteMode||" "===b&&c.resetOnSpace||b===c.promptChar&&c.resetOnPrompt))return d}return-1}_getNonEditableSelectionStart(a,b){const c=this;for(let d=a;d<c._mask.length;d++){const a=c._mask[d];if("mask"!==a.type&&a.character===b)return d}return-1}_getValueWithTextMaskFormat(a,b){const c=this,d=a?a.start:0,e=a?a.end:c._mask.length||c.$.input.value.length;let f="";if(b=b?b:c.cutCopyMaskFormat,"includePromptAndLiterals"===b)return c.$.input.value.substring(d,e);for(let g=d;g<e;g++){const a=c._mask[g];switch(b){case"excludePromptAndLiterals":if("mask"!==a.type)continue;f=""===a.character?f+" ":f+a.character;break;case"includePrompt":if("mask"!==a.type)continue;f=""===a.character?f+a.defaultCharacter:f+a.character;break;case"includeLiterals":if("mask"===a.type&&""===a.character)continue;f+=a.character;}}return f.trim()}_hidePrompt(){const a=this,b=new RegExp(a.promptChar,"g");a.disabled||!a.hidePromptOnLeave||0===a.mask.length||(a.$.input.value=a.$.input.value.replace(b," "),a._promptHidden=!0)}_initializeMask(){const a=this;let b,c=a.mask.length;if(a._mask=[],void 0!==a.mask&&null!==a.mask&&0!==a.mask.length)for(let d=0;d<c;d++){const c=a.mask.charAt(d);let e={defaultCharacter:a.promptChar};"0"===c?(e.editable=!0,e.required=!0,e.escapeSymbol=b,e.type="\\"===e.escapeSymbol?"literal":"mask",e.maskCharacter="0",e.regex="\\d",e.character="\\"===e.escapeSymbol?e.maskCharacter:"",e.defaultCharacter=a.promptChar,b=null):"9"===c?(e.editable=!0,e.required=!1,e.escapeSymbol=b,e.type="\\"===e.escapeSymbol?"literal":"mask",e.maskCharacter="9",e.regex="(\\d|\\s)",e.character="\\"===e.escapeSymbol?e.maskCharacter:"",e.defaultCharacter=a.promptChar,b=null):"#"===c?(e.editable=!0,e.required=!1,e.escapeSymbol=b,e.type="\\"===e.escapeSymbol?"literal":"mask",e.maskCharacter="#",e.regex="(\\d|\\s|[+]|[-])",e.character="\\"===e.escapeSymbol?e.maskCharacter:"",e.defaultCharacter=a.promptChar,b=null):"L"===c?(e.editable=!0,e.required=!0,e.escapeSymbol=b,e.type="\\"===e.escapeSymbol?"literal":"mask",e.maskCharacter="L",e.regex="([a-zA-Z\u0430-\u044F\u0410-\u042F])",e.character="\\"===e.escapeSymbol?e.maskCharacter:"",e.defaultCharacter=a.promptChar,b=null):"?"===c?(e.editable=!0,e.required=!1,e.escapeSymbol=b,e.type="\\"===e.escapeSymbol?"literal":"mask",e.maskCharacter="?",e.regex="[a-zA-Z\u0430-\u044F\u0410-\u042F]?",e.character="\\"===e.escapeSymbol?e.maskCharacter:"",e.defaultCharacter=a.promptChar,b=null):"&"===c?(e.editable=!0,e.required=!0,e.escapeSymbol=b,e.type="\\"===e.escapeSymbol?"literal":"mask",e.maskCharacter="&",e.regex="[^\\s]",e.character="\\"===e.escapeSymbol?e.maskCharacter:"",e.defaultCharacter=a.promptChar,b=null):"C"===c?(e.editable=!0,e.required=!1,e.escapeSymbol=b,e.type="\\"===e.escapeSymbol?"literal":"mask",e.maskCharacter="C",e.regex=".",e.character="\\"===e.escapeSymbol?e.maskCharacter:"",e.defaultCharacter=a.promptChar,b=null):"A"===c?(e.editable=!0,e.required=!0,e.escapeSymbol=b,e.type="\\"===e.escapeSymbol?"literal":"mask",e.maskCharacter="A",e.regex="[a-zA-Z\u0430-\u044F\u0410-\u042F]",e.character="\\"===e.escapeSymbol?e.maskCharacter:"",e.defaultCharacter=a.promptChar,b=null):"a"===c?(e.editable=!0,e.required=!1,e.escapeSymbol=b,e.type="\\"===e.escapeSymbol?"literal":"mask",e.maskCharacter="a",e.regex="[a-zA-Z\u0430-\u044F\u0410-\u042F]?",e.character="\\"===e.escapeSymbol?e.maskCharacter:"",e.defaultCharacter=a.promptChar,b=null):"."===c?(e.editable=!1,e.required=!0,e.escapeSymbol=b,e.type="placeholder",e.maskCharacter=".",e.regex=null,e.character=".",e.defaultCharacter=a.promptChar,b=null):","===c?(e.editable=!1,e.required=!0,e.escapeSymbol=b,e.type="placeholder",e.maskCharacter=",",e.regex=null,e.character=",",e.defaultCharacter=a.promptChar,b=null):":"===c?(e.editable=!1,e.required=!0,e.escapeSymbol=b,e.type="separator",e.maskCharacter=":",e.regex=null,e.character=":",e.defaultCharacter=a.promptChar,b=null):"/"===c?(e.editable=!1,e.required=!0,e.escapeSymbol=b,e.type="separator",e.maskCharacter="/",e.regex=null,e.character="/",e.defaultCharacter=a.promptChar,b=null):"$"===c?(e.editable=!1,e.required=!0,e.escapeSymbol=b,e.type="currency",e.maskCharacter="$",e.regex=null,e.character="$",e.defaultCharacter=a.promptChar,b=null):"<"===c?b?"|"===b?b=null:"\\"===b?(e.editable=!1,e.required=!0,e.escapeSymbol=b,e.type="literal",e.maskCharacter="<",e.regex="<",e.character="<",e.defaultCharacter=a.promptChar,b=null):b="<":b="<":">"===c?b?"|"===b?b=null:"\\"===b?(e.editable=!1,e.required=!0,e.escapeSymbol=b,e.type="literal",e.maskCharacter=">",e.regex=">",e.character=">",e.defaultCharacter=a.promptChar,b=null):b=">":b=">":"|"===c?b?"\\"===b?(e.editable=!1,e.required=!0,e.escapeSymbol=b,e.type="literal",e.maskCharacter="|",e.regex="|",e.character="|",e.defaultCharacter=a.promptChar,b=null):b="|":b="|":"\\"===c?b?"\\"===b?(e.editable=!1,e.required=!0,e.escapeSymbol=b,e.type="literal",e.maskCharacter="\\",e.regex="\\",e.character="\\",e.defaultCharacter=a.promptChar,b=null):b="\\":b="\\":(e.editable=!1,e.required=!0,e.escapeSymbol=b,e.type="literal",e.maskCharacter=c,e.regex=null,e.character=c,e.defaultCharacter=c,b=null),b||e.type&&a._mask.push(e)}}_keyDownHandler(){}_validateInput(a,b){const c=this,d=c._mask[b],e=new RegExp(d.regex);return e.test(a)}_setValueToMask(a,b){const c=this,d=a||"",e=d.length,f=b&&b.start?b.start:0,g=b&&b.end?b.end:c._mask.length;let h=f,i=0;for(;h<g&&i<e;)"mask"===c._mask[h].type&&i++,(c._setCharAtPosition(d.charAt(i-1),h)||"mask"!==c._mask[h].type)&&h++;if(h<g)for(let a=h;a<g;a++)"mask"===c._mask[a].type&&(c._mask[a].character="");b&&(b.start=h)}_preventDefault(a){a.preventDefault&&a.preventDefault(),a.stopPropagation&&a.stopPropagation()}_showPrompt(){const a=this;a.disabled||!a._promptHidden||a._setMaskToInput()}_textBoxChangeHandler(){const a=this;a.disabled||a.readonly||(a.value=a._getValueWithTextMaskFormat({start:0,end:a._mask.length},a.textMaskFormat),a._valueBeforeChange!==a.value&&(a.$.fireEvent("change",{newValue:a.value,oldValue:a._valueBeforeChange}),a._valueBeforeChange="",a._validateMaskValue()))}_textBoxKeyDownHandler(a){const b=this,c=a.key,d=a.ctrlKey,e=b.$.input.selectionEnd,f=/xxx[\0-]+xxx/,g=/^[a-zA-ZÀ-ÿа-яА-Я0-9.!@?#"$%&:';()*\+,\/;\-=[\\\]\^_{|}<>~` ]+$/;let h=b.$.input.selectionStart;if(d&&-1<["a","c","v","x"].indexOf(c)){const a=function(a,c){const d=document.createElement("textarea");d.style.position="absolute",d.style.left="-1000px",d.style.top="-1000px",document.body.appendChild(d),d.focus(),"Paste"===a?setTimeout(function(){let a=d.value;0===a.length&&window.clipboardData&&(d.value=window.clipboardData.getData("Text"),a=d.value),d.parentNode.removeChild(d),b.$.input.focus(),c(a)},25):(d.value=b._cutCopyHandler(null,a),d.focus(),d.setSelectionRange(0,d.value.length),setTimeout(function(){document.designMode="off",d.focus(),d.parentNode.removeChild(d),b.$.input.focus()},25),window.clipboardData&&window.clipboardData.setData("Text",d.value))};return void("a"===c?b.$.input.setSelectionRange(0,b.$.input.value.length):"c"===c?a("Copy"):"v"===c?a("Paste",function(a){const c=b.context;b.context=b,b._textBoxPasteHandler(null,a),b.context=c}):"x"===c?a("Cut"):void 0)}if("Backspace"===c)return b._deleteHandler(a),void b._updateMaskFullAndCompleted();if("Delete"===c)return b._deleteHandler(a),void b._updateMaskFullAndCompleted();if(!b.allowPromptAsInput&&c===b.promptChar)return void b._preventDefault(a);if(!(b.disabled||b.readonly||b.asciiOnly&&!f.test(c)||!g.test(c)||1<c.length)&&(b._preventDefault(a),h!==e||h!==b.$.input.value.length)&&(" "!==c||b.resetOnSpace)){h=b._getEditableSelectionStart(h,c);const a=function(){h=b._getNonEditableSelectionStart(b.$.input.selectionStart,c),-1!==h&&(b.$.input.selectionStart=b.$.input.selectionEnd=h+1)};if(-1===h)return void a();const d=b._setCharAtPosition(c,h);d?(b._setMaskToInput(),b._updateMaskFullAndCompleted(),b.$.input.selectionStart=b.$.input.selectionEnd=h+1):a()}}_textBoxKeyUpHandler(){const a=this;a.value=a._getValueWithTextMaskFormat({start:0,end:a._mask.length},a.textMaskFormat)}_textBoxPasteHandler(a,b){const c=this,d=c.$.input.value,e=c.$.input.selectionStart;let f,g=c.$.input.selectionEnd;if(a&&c._preventDefault(a),window.clipboardData&&window.clipboardData.getData?f=window.clipboardData.getData("Text"):a&&a.clipboardData&&a.clipboardData.getData?f=a.clipboardData.getData("text/plain"):b&&(f=b),g-e!==d.length){if(e===g&&(c.$.input.selectionEnd=g=c._mask.length),c.rejectInputOnFirstFailure){let a=0;for(let b=e;b<g;b++)if("mask"===c._mask[b].type){if(!c._validateInput(f.charAt(a),b))return void(c.$.input.selectionStart=c.$.input.selectionEnd=e);if(a++,a>f.length)break}}const a={start:e,end:g};c._overwrite=!0,c._setValueToMask(f,a),c._setMaskToInput(),c._updateMaskFullAndCompleted(),c.$.input.selectionStart=c.$.input.selectionEnd=a.start,c.value=c._getValueWithTextMaskFormat({start:0,end:c._mask.length},c.textMaskFormat)}}_setCharAtPosition(a,b){const c=this,d=c._mask[b];if(" "===a&&c.resetOnSpace&&(a=""),"mask"!==d.type||c.readonly||c.disabled||!d.editable)return!1;if(""===a&&!c.resetOnSpace)return!1;if(a===c.promptChar&&!c.resetOnPrompt&&c.allowPromptAsInput)return!1;if(!c.isOverwriteMode&&""!==a&&a!==c.promptChar&&""!==d.character&&!c._overwrite)return!1;const e=d.regex;if(e){let f=new RegExp(e,"i");if(f.test(a)){switch(d.escapeSymbol){case">":a=a.toUpperCase();break;case"<":a=a.toLowerCase();}return c._mask[b].character=a,!0}return c.resetOnSpace&&""===a?(c._mask[b].character=a,!0):!!(c.resetOnPrompt&&a===c.promptChar&&c.allowPromptAsInput)&&(c._mask[b].character="",!0)}return!1}_updateMaxLength(){const a=this;0<a._mask.length&&(a.maxLength=a._mask.length)}_updatePromptChar(){const a=this;for(let b,c=0;c<a._mask.length;c++)b=a._mask[c],b.defaultCharacter=a.promptChar;a._setMaskToInput()}_validateMaskValue(){const a=this;if(a.readonly||a.disabled||!a.validation||"function"!=typeof a.validation)return;const b=a.value,c=a.validation(b);c?a.removeAttribute("error"):a.setAttribute("error",""),a.$.fireEvent("validation",{success:c})}_keyUpHandler(){}_resizeHandler(){}_selectStartHandler(){}_mouseWheelHandler(){}_applySelection(){}_setDropDownSize(){}_styleChangedHandler(){}});