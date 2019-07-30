
/* Smart HTML Elements v4.0.0 (2019-Aug) 
Copyright (c) 2011-2019 jQWidgets. 
License: https://htmlelements.com/license/ */

Smart("smart-numeric-text-box",class extends Smart.BaseElement{static get properties(){return{decimalSeparator:{value:".",type:"string"},enableMouseWheelAction:{value:!1,type:"boolean"},inputFormat:{value:"integer",allowedValues:["integer","floatingPoint","complex"],type:"string"},hint:{value:"",type:"string"},label:{value:"",type:"string"},leadingZeros:{value:!1,type:"boolean"},max:{value:null,type:"any"},messages:{value:{en:{binary:"BIN",octal:"OCT",decimal:"DEC",hexadecimal:"HEX",integerOnly:"smartNumericTextBox: The property {{property}} can only be set when inputFormat is integer.",noInteger:"smartNumericTextBox: the property {{property}} cannot be set when inputFormat is integer.",significantPrecisionDigits:"smartNumericTextBox: the properties significantDigits and precisionDigits cannot be set at the same time."}},type:"object",extend:!0},min:{value:null,type:"any"},name:{value:"",type:"string"},nullable:{value:!1,type:"boolean"},opened:{value:!1,type:"boolean"},outputFormatString:{value:null,type:"string?"},placeholder:{value:"",type:"string"},dropDownEnabled:{value:!1,type:"boolean"},precisionDigits:{value:null,type:"number?"},radix:{value:10,allowedValues:[2,8,10,16,"binary","octal","decimal","hexadecimal"],type:"any"},radixDisplay:{value:!1,type:"boolean"},radixDisplayPosition:{value:"left",allowedValues:["left","right"],type:"string"},scientificNotation:{value:!1,type:"boolean"},showUnit:{value:!1,type:"boolean"},significantDigits:{value:null,type:"number?"},spinButtons:{value:!1,type:"boolean"},spinButtonsDelay:{value:75,type:"number"},spinButtonsInitialDelay:{value:0,type:"number"},spinButtonsPosition:{value:"right",allowedValues:["left","right"],type:"string"},spinButtonsStep:{value:"1",type:"any"},type:{value:"numeric",type:"string",defaultReflectToAttribute:!0,readonly:!0},unit:{value:"kg",type:"string"},validation:{value:"strict",allowedValues:["strict","interaction"],type:"string"},value:{value:"0",type:"any?"},wordLength:{value:"int32",allowedValues:["int8","uint8","int16","uint16","int32","uint32","int64","uint64"],type:"string"}}}static get listeners(){return{mouseenter:"_mouseenterMouseleaveHandler",mouseleave:"_mouseenterMouseleaveHandler","downButton.click":"_downButtonClickHandler","downButton.mouseenter":"_mouseenterMouseleaveHandler","downButton.mouseleave":"_mouseenterMouseleaveHandler","dropDown.click":"_dropDownItemClickHandler","dropDown.mouseout":"_mouseenterMouseleaveHandler","dropDown.mouseover":"_mouseenterMouseleaveHandler","input.blur":"_inputBlurHandler","input.change":"_inputChangeHandler","input.focus":"_inputFocusHandler","input.keydown":"_inputKeydownHandler","input.keyup":"_inputKeyupHandler","input.paste":"_inputPasteHandler","input.wheel":"_inputWheelHandler","radixDisplayButton.click":"_radixDisplayButtonClickHandler","radixDisplayButton.mouseenter":"_mouseenterMouseleaveHandler","radixDisplayButton.mouseleave":"_mouseenterMouseleaveHandler","upButton.click":"_upButtonClickHandler","upButton.mouseenter":"_mouseenterMouseleaveHandler","upButton.mouseleave":"_mouseenterMouseleaveHandler","document.down":"_documentMousedownHandler","document.up":"_documentMouseupHandler"}}static get requires(){return window.NIComplex?{"Smart.Button":"smart.button.js","Smart.Utilities.BigNumber":"smart.math.js","Smart.Utilities.NumericProcessor":"smart.numeric.js"}:{"Smart.Button":"smart.button.js","Smart.Utilities.Complex":"smart.complex.js","Smart.Utilities.BigNumber":"smart.math.js","Smart.Utilities.NumericProcessor":"smart.numeric.js"}}static get styleUrls(){return["smart.button.css","smart.numerictextbox.css"]}template(){return"<div id=\"container\" class=\"smart-container\"><span id=\"label\" inner-h-t-m-l=\"[[label]]\" class=\"smart-label\"></span><div id=\"radixDisplayButton\" class=\"smart-unselectable smart-input-addon smart-numeric-text-box-component smart-numeric-text-box-radix-display\"></div><input id=\"input\" type=\"text\" spellcheck=\"false\" class=\"smart-input smart-numeric-text-box-component\" placeholder=\"[[placeholder]]\" readonly=\"[[readonly]]\" disabled=\"[[disabled]]\" name=\"[[name]]\" /><div id=\"unitDisplay\" class=\"smart-unselectable smart-input-addon smart-numeric-text-box-component smart-numeric-text-box-unit-display\"></div><div id=\"spinButtonsContainer\" class=\"smart-input-addon smart-numeric-text-box-component smart-spin-buttons-container\"><smart-repeat-button initial-delay=\"[[spinButtonsInitialDelay]]\" delay=\"[[spinButtonsDelay]]\" animation=\"[[animation]]\" unfocusable id=\"upButton\" class=\"smart-spin-button\"><div class=\"smart-arrow smart-arrow-up\"></div></smart-repeat-button><smart-repeat-button initial-delay=\"[[spinButtonsInitialDelay]]\" delay=\"[[spinButtonsDelay]]\" animation=\"[[animation]]\" unfocusable id=\"downButton\" class=\"smart-spin-button\"><div class=\"smart-arrow smart-arrow-down\"></div></smart-repeat-button></div><ul id=\"dropDown\" class=\"smart-visibility-hidden smart-drop-down\"><li id=\"dropDownItem2\" class=\"smart-list-item\" data-value=\"2\"></li><li id=\"dropDownItem8\" class=\"smart-list-item\" data-value=\"8\"></li><li id=\"dropDownItem10\" class=\"smart-list-item\" data-value=\"10\"></li><li id=\"dropDownItem16\" class=\"smart-list-item\" data-value=\"16\"></li></ul><span id=\"hint\" class =\"smart-hint\"  inner-h-t-m-l=\"[[hint]]\"></span></div>"}ready(){super.ready();const a=this;a._numericProcessor=new Smart.Utilities.NumericProcessor(a,"inputFormat"),a._numberRenderer=new Smart.Utilities.NumberRenderer,a._numberRenderer.localizationObject.decimalseparator=a.decimalSeparator,a._radixPrefixes={10:"d",2:"b",8:"o",16:"x"},a._regex={2:new RegExp(/^[0-1]+$/),8:new RegExp(/^[0-7]+$/),10:new RegExp(/^[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?$/),16:new RegExp(/^[0-9a-f]+$/i)},a._regexSpecial={nan:new RegExp(/^(nan)$/i),inf:new RegExp(/^((-?inf(inity)?)|([+\-]?∞))$/i),nonNumericValue:new RegExp(/^$|(^((nan)|((-?inf(inity)?)|([+\-]?∞))|(null))$)/i),exaValue:new RegExp(/^[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[E][+\-]\d*)?i$/)},a._initialDropDownOptionsSet=!1,"left"===a.spinButtonsPosition&&a.$.container.insertBefore(a.$.spinButtonsContainer,a.$.label.nextElementSibling),"right"===a.radixDisplayPosition&&a.$.container.insertBefore(a.$.radixDisplayButton,a.$.unitDisplay.nextElementSibling),a._setInitialComponentDisplay(),a._initialAdjustments(),a._refreshShape(),a._initialized=!0}_refreshShape(){const a=this,b=a.$.container.querySelectorAll(".smart-numeric-text-box-component:not(.smart-hidden)");0<b.length&&(b[0].classList.add("smart-numeric-text-box-component-border-left"),b[b.length-1].classList.add("smart-numeric-text-box-component-border-right"))}val(a,b){const c=this,d=null!==a&&"object"==typeof a&&0===Object.keys(a).length;if(void 0!==a&&!1==d){const d=c.value;if((""===a||null===a)&&null===d)return null;if(null===a)return c._triggerChangeEvent="strict"===c.validation,c._validate(!1,null),c._triggerChangeEvent=!1,void(c._programmaticValueIsSet=!0);if(a=a.toString(),a.toUpperCase()!==d.toString().toUpperCase())void 0===b?(c._triggerChangeEvent="strict"===c.validation,c._validate(!1,a),c._triggerChangeEvent=!1):c._setValue(a),c._programmaticValueIsSet=!0;else return a}else return c.value}focus(){this.$.input.focus()}_updateSpinButtonsStepObject(){const a=this;a._spinButtonsStepObject=a._numericProcessor.createDescriptor(a.spinButtonsStep,!0)}_setInitialComponentDisplay(){const a=this;!1===a.spinButtons&&a.$spinButtonsContainer.addClass("smart-hidden"),!1===a.radixDisplay&&a.$radixDisplayButton.addClass("smart-hidden"),!1===a.showUnit&&a.$unitDisplay.addClass("smart-hidden")}_initialAdjustments(){const a=this;a._radixNumber=a._getRadix(a.radix),a._wordLengthNumber=a._numericProcessor.getWordLength(a.wordLength),a._validatePropertyCompatibility(),a._numericProcessor.validateMinMax(!0,!0),a._updateSpinButtonsStepObject(),a._validate(!0),a._programmaticValueIsSet=!0,a._cachedInputValue=a.$.input.value,a._editableValue===void 0&&(a._editableValue=a._cachedInputValue),a.$.radixDisplayButton.innerHTML=a._radixPrefixes[a._radixNumber],a.$.unitDisplay.innerHTML=a.unit,a.disabled&&(a.$.upButton.disabled=!0,a.$.downButton.disabled=!0),a.opened&&(a.dropDownEnabled&&!a.disabled&&null!==a.value?a._openRadix():a.opened=!1),a._setFocusable()}_validatePropertyCompatibility(){const a=this;"integer"===a.inputFormat?null!==a.precisionDigits&&a.error(a.localize("noInteger",{property:"precisionDigits"})):(10!==a._radixNumber&&a.error(a.localize("integerOnly",{property:"radix"})),a.radixDisplay&&a.error(a.localize("integerOnly",{property:"radixDisplay"})),a.dropDownEnabled&&a.error(a.localize("integerOnly",{property:"dropDownEnabled"})),"int32"!==a.wordLength&&a.error(a.localize("integerOnly",{property:"wordLength"}))),null===a.significantDigits&&null===a.precisionDigits?a.significantDigits=8:null!==a.significantDigits&&null!==a.precisionDigits&&a.error(a.localize("significantPrecisionDigits"))}_validate(a,b){const c=this;let d;if(a)d=c.value,void 0===d&&(c.nullable?d=null:d="0");else if(void 0!==b&&(null!==b||c.nullable))d=b;else if(d=c.$.input.value,d===c.value&&!0!==c._programmaticValueIsSet)return void(c.$.input.value=c._cachedInputValue);if(c.nullable&&(null===d||""===d))return c.value=null,c._number=null,c.$.input.value="",c._cachedInputValue="",c._editableValue="",void c._disableComponents();const e=c._numericProcessor.prepareForValidation(a,b,d);if(void 0===e)return void c._disableComponents();const f=c._numericProcessor.createDescriptor(e.value,!0,!0,!a&&b===void 0||"strict"===c.validation,a||b!==void 0,e.enteredComplexNumber);if(a){c._number=f;let a=c._renderValue(f);c.value=f.toString(),c.$.input.value=a}else c._updateValue(f);c._programmaticValueIsSet=!1,c._disableComponents()}_handleNonNumericValue(a,b,c){const d=this;if("integer"!==d.inputFormat){if(d._regexSpecial.nan.test(c))return void d._handleNaN(a);if(d._regexSpecial.inf.test(c))return void d._handleInfinity(a,b,c)}if(a){let a=d._numericProcessor.createDescriptor(0);d._number=d._validateRange(a);const b=d._renderValue(d._number);d.value=d._number.toString(),d.$.input.value=b}else if(void 0===b)d.$.input.value=d._cachedInputValue;else{const a=d._number.toString();d.value!==a&&(d.value=a)}}_handleNaN(a){const b=this;if(b.$.input.value="NaN",a)b.value=NaN,b._number=NaN;else{const a=b.value;(null===a||"NaN"!==a.toString())&&(b.value=NaN,b._number=NaN,b._cachedInputValue="NaN",b._editableValue="NaN",b._triggerChangeEvent&&b.$.fireEvent("change",{value:NaN,oldValue:a,radix:b._radixNumber}))}}_handleInfinity(a,b,c){const d=this;let e,f;if("-"===c.charAt(0)?(e="\u221E"===c.charAt(1)?"-\u221E":"-Inf",f=-Infinity):(e=-1===c.indexOf("\u221E")?"Inf":"\u221E",f=1/0),(f!==-Infinity||d.min!==-Infinity)&&(f!==1/0||d.max!==1/0)&&void 0===b)f===-Infinity?d._validate(!1,d.min):d._validate(!1,d.max);else if(a)d.value=f,d._number=f,d.$.input.value=e;else{const a=d.value;c!==e&&(d.$.input.value=e),a!==f&&(d.value=f,d._number=f,d._cachedInputValue=e,d._editableValue=e,d._triggerChangeEvent&&d.$.fireEvent("change",{value:f,oldValue:a,radix:d._radixNumber}))}}_validateRange(a){const b=this;return a=b._numericProcessor.validate(a,b._minObject,b._maxObject),a}propertyChangedHandler(a,b,c){function d(){!0===e._initialDropDownOptionsSet&&e._setDropDownOptions(),(2===e._radixNumber||16===e._radixNumber)&&(e._cachedInputValue=e._number.toString(e._radixNumber,e._wordLengthNumber,e.leadingZeros),e._editableValue=e._cachedInputValue,e.$.input.value=e._cachedInputValue)}super.propertyChangedHandler(a,b,c);const e=this,f=e.$.input;if(c!=b)switch(a){case"disabled":e._setFocusable(),!0===c?(e.$.upButton.disabled=!0,e.$.downButton.disabled=!0):e._disableComponents();break;case"unfocusable":e._setFocusable();break;case"enableMouseWheelAction":case"placeholder":case"readonly":case"spinButtonsDelay":case"spinButtonsInitialDelay":break;case"value":{if(""===c&&null===b)return;if(null===c||""===c||null===b)return e.value=b,e._triggerChangeEvent="strict"===e.validation,e._validate(!1,c),e._triggerChangeEvent=!1,void(e._programmaticValueIsSet=!0);const a=c.toString(),d=b.toString();d!==a&&(d.toUpperCase()===a.toUpperCase()&&(e.value=b),e.value=b,e._triggerChangeEvent="strict"===e.validation,e._validate(!1,a),e._triggerChangeEvent=!1,e._programmaticValueIsSet=!0);break}case"radix":"integer"===e.inputFormat?e._changeRadix(c):e.error(e.localize("integerOnly",{property:"radix"}));break;case"leadingZeros":"integer"===e.inputFormat&&null!==e._number&&d();break;case"min":case"max":{if(null!==c&&(e[`_${a}IsNull`]=!1),e._numericProcessor.validateMinMax("min"===a,"max"===a),"strict"===e.validation)e._triggerChangeEvent=!0,e._validate(!1,e.value),e._triggerChangeEvent=!1;else if(!1===e._regexSpecial.nonNumericValue.test(e.value)){const a=e._numericProcessor.createDescriptor(e._number),b=e._validateRange(a);!0===e._numericProcessor.compare(e.value,b)&&(e._programmaticValueIsSet=!0)}break}case"opened":c?e.dropDownEnabled&&!e.disabled&&null!==e.value?e._openRadix():e.opened=!1:e._closeRadix();break;case"outputFormatString":c?(e._cachedInputValue=e._numberRenderer.formatNumber(e._number,c),e.$.input.value=e._cachedInputValue):(e._cachedInputValue=e._editableValue,e.$.input.value=e._editableValue);break;case"dropDownEnabled":c?("integer"!==e.inputFormat&&e.error(e.localize("integerOnly",{property:"dropDownEnabled"})),!0===e._initialDropDownOptionsSet&&e._setDropDownOptions()):e.opened&&e._closeRadix();break;case"spinButtons":c?e.$spinButtonsContainer.removeClass("smart-hidden"):e.$spinButtonsContainer.addClass("smart-hidden"),e._refreshShape();break;case"spinButtonsStep":e._updateSpinButtonsStepObject();break;case"significantDigits":case"precisionDigits":{if("precisionDigits"===a&&"integer"===e.inputFormat&&e.error(e.localize("noInteger",{property:a})),"significantDigits"===a&&null!==e.precisionDigits?e.precisionDigits=null:"precisionDigits"==a&&null!==e.significantDigits&&(e.significantDigits=null),!1===e._regexSpecial.nonNumericValue.test(e.value)){const a=e._renderValue(e._number);f.value=a}break}case"decimalSeparator":{e._numberRenderer.localizationObject.decimalseparator=e.decimalSeparator;const a=e._discardDecimalSeparator(f.value,b),c=e._applyDecimalSeparator(a),d=e._applyDecimalSeparator(e._discardDecimalSeparator(e._editableValue,b));f.value=c,e._editableValue=d;break}case"spinButtonsPosition":"left"===c?e.$.container.insertBefore(e.$.spinButtonsContainer,e.$.label.nextElementSibling):e.$.container.insertBefore(e.$.spinButtonsContainer,e.$.dropDown),e._refreshShape();break;case"wordLength":if(e._wordLengthNumber=e._numericProcessor.getWordLength(c),"integer"===e.inputFormat&&(e._numericProcessor.validateMinMax(!0,!0),null!==e._number)){let a=e._validateRange(new Smart.Utilities.BigNumber(e._number));e._updateValue(a),e.leadingZeros&&d()}break;case"radixDisplay":c?("integer"!==e.inputFormat&&e.error(e.localize("integerOnly",{property:"radixDisplay"})),e.$radixDisplayButton.removeClass("smart-hidden")):e.$radixDisplayButton.addClass("smart-hidden"),e._refreshShape();break;case"radixDisplayPosition":"left"===c?e.$.container.insertBefore(e.$.radixDisplayButton,e.$.input):e.$.container.insertBefore(e.$.radixDisplayButton,e.$.unitDisplay.nextElementSibling),e._refreshShape();break;case"inputFormat":e._changeInputFormat(b,c);break;case"showUnit":c?e.$unitDisplay.removeClass("smart-hidden"):e.$unitDisplay.addClass("smart-hidden"),e._refreshShape();break;case"unit":e.$.unitDisplay.innerHTML=c;break;case"scientificNotation":{if(!1===e._regexSpecial.nonNumericValue.test(e.value)){const a=e._renderValue(e._number);f.value=a}break}case"locale":case"messages":e._initialDropDownOptionsSet=!1;break;case"nullable":!0===b&&null===e.value&&e._validate(!1,"0");break;case"validation":"strict"===c&&(e._triggerChangeEvent=!0,e._validate(!1,e.value),e._triggerChangeEvent=!1);}else"string"!=typeof c&&"string"==typeof b&&(e[a]=b);e._cachedInputValue=f.value}_changeInputFormat(a,b){const c=this;return c._numericProcessor=new Smart.Utilities.NumericProcessor(c,"inputFormat"),"complex"===a?void c._changeFromComplexInputFormat(b):void("integer"===b&&"floatingPoint"==a&&c._changeFromFloatingPointToIntegerInputFormat(),"floatingPoint"===b&&"integer"==a&&c._changeFromIntegerToFloatingPointInputFormat(),"complex"===b&&c._changeToComplexInputFormat(a),c._updateSpinButtonsStepObject(),null!==c.value&&(c._inputFormatChangedFlag=!0,c._validate(void 0,c._number.toString()),c._inputFormatChangedFlag=!1))}_changeFromComplexInputFormat(a){const b=this;b.spinButtonsStep=b._spinButtonsStepObject.realPart,b._updateSpinButtonsStepObject(),"integer"===a?(b.min=b.min===-Infinity?null:b._minObject.realPart,b.max=b.max===1/0?null:b._maxObject.realPart):(b.min!==-Infinity&&(b.min=b._minObject.realPart),b.max!==1/0&&(b.max=b._maxObject.realPart)),b._numericProcessor.validateMinMax(!0,!0),null!==b.value&&(b._inputFormatChangedFlag=!0,b._validate(void 0,b._number.realPart.toString()),b._inputFormatChangedFlag=!1)}_changeFromFloatingPointToIntegerInputFormat(){const a=this;a.min===-Infinity&&(a.min=null),a.max===1/0&&(a.max=null),a._numericProcessor.validateMinMax(!0,!0)}_changeFromIntegerToFloatingPointInputFormat(){const a=this;a.radixDisplay&&(a.radixDisplay=!1,a.$radixDisplayButton.addClass("smart-hidden")),10!==a._radixNumber&&(a.radix=10,a._radixNumber=10),a._minIsNull?(a.min=-Infinity,a._minObject=-Infinity):a._minObject=parseFloat(a._minObject.toString()),a._maxIsNull?(a.max=1/0,a._maxObject=1/0):a._maxObject=parseFloat(a._maxObject.toString()),a.dropDownEnabled&&(a.dropDownEnabled=!1)}_changeToComplexInputFormat(a){const b=this;"integer"===a&&(b.radixDisplay&&(b.radixDisplay=!1,b.$radixDisplayButton.addClass("smart-hidden")),b._minIsNull&&(b.min=null),b._maxIsNull&&(b.max=null),b.dropDownEnabled&&(b.dropDownEnabled=!1)),b._numericProcessor.validateMinMax(b.min!==-Infinity,b.max!==1/0)}_updateValue(a){const b=this,c=b.$.input.value,d=a.toString(b._radixNumber,b._wordLengthNumber,b.leadingZeros);if(c!==d||c!==b._cachedInputValue){const c=b._renderValue(a),e=b.value,f=b._regexSpecial.nonNumericValue.test(d);if(b.$.input.value=c,b._cachedInputValue=c,b._inputFormatChangedFlag||f&&c!==e||!1===f&&b._numericProcessor.compare(a,b._number)){b._number=b._numericProcessor.createDescriptor(a);const c=b._number.toString();b.value=c,b._setDropDownOptions(),b._triggerChangeEvent&&b.$.fireEvent("change",{value:c,oldValue:e,radix:b._radixNumber})}}else b.value=b._number.toString()}_setValue(a){const b=this;b.value=a,b.$.input.value=a,b._number=b._numericProcessor.createDescriptor(a,!0),b._setDropDownOptions()}_changeRadix(a){const b=this,c=b._getRadix(a),d=b.radix;if(c===b._radixNumber)return;b.radix=a,b._radixNumber=c;const e=b.$.input,f=e.value;let g,h;null===b.value?h="":(g=b._number.toString(c,b._wordLengthNumber,b.leadingZeros),h=b._renderValue(g)),e.value=h,b._cachedInputValue=h,b.$.radixDisplayButton.innerHTML=b._radixPrefixes[c],b.$.fireEvent("radixChange",{radix:a,oldRadix:d,displayedValue:h,oldDisplayedValue:f})}_openRadix(){const a=this;!1===a._initialDropDownOptionsSet&&(a._setDropDownOptions(),a._initialDropDownOptionsSet=!0),a.$radixDisplayButton.addClass("smart-numeric-text-box-pressed-component"),a.$dropDown.removeClass("moved"),a.$dropDown.removeClass("smart-visibility-hidden"),a.$.dropDown.style.marginTop=null;const b=1===window.devicePixelRatio?document.documentElement.clientHeight:window.innerHeight,c=a.$.dropDown.getBoundingClientRect(),d=b-c.top-a.$.dropDown.offsetHeight;0>d&&(a.$.dropDown.style.marginTop=d-parseFloat(getComputedStyle(a).getPropertyValue("--smart-numeric-text-box-border-width"))+"px",a.$dropDown.addClass("moved")),a.opened=!0,a.$.fireEvent("open",{dropDown:a.$.dropDown})}_closeRadix(){const a=this;a.$radixDisplayButton.removeClass("smart-numeric-text-box-pressed-component"),a.$dropDown.addClass("smart-visibility-hidden"),a.opened=!1,a.$.fireEvent("close",{dropDown:a.$.dropDown})}_isLeftButtonPressed(a){const b=0===a.buttons||1===a.which;return 1===a.detail.buttons||b}_isIncrementOrDecrementAllowed(){const a=this;return!a.disabled&&!a.readonly&&!1===a._regexSpecial.nonNumericValue.test(a.$.input.value)}_upButtonClickHandler(a){const b=this,c=b._isLeftButtonPressed(a);c&&b._isIncrementOrDecrementAllowed()&&(!b._up&&b.$upButton.addClass("smart-numeric-text-box-pressed-component"),b._incrementOrDecrement("add"))}_downButtonClickHandler(a){const b=this,c=b._isLeftButtonPressed(a);c&&b._isIncrementOrDecrementAllowed()&&(!b._up&&b.$downButton.addClass("smart-numeric-text-box-pressed-component"),b._incrementOrDecrement("subtract"))}_documentMousedownHandler(a){const b=this;if(b._up=!1,!!b.opened)if(b.enableShadowDOM){const c=a.originalEvent.composedPath()[0],d=function(){for(let a=c.getRootNode().host;a;){if(a===b)return a;a=a.getRootNode().host}}();d||b._closeRadix()}else b.contains(a.originalEvent.target)||b._closeRadix()}_documentMouseupHandler(){const a=this;a._up=!0,a.$upButton.removeClass("smart-numeric-text-box-pressed-component"),a.$downButton.removeClass("smart-numeric-text-box-pressed-component")}_radixDisplayButtonClickHandler(){const a=this;a.dropDownEnabled&&!a.disabled&&null!==a.value&&(a.opened?a._closeRadix():a._openRadix())}_dropDownItemClickHandler(a){if(a.target.$.hasClass("smart-list-item")){const b=this;let c=a.target.getAttribute("data-value");b._changeRadix(parseInt(c,10)),b._closeRadix()}}_mouseenterMouseleaveHandler(a){const b=this;a.target===b.$.dropDown||b.disabled||b.readonly||("mouseenter"===a.type?a.target.setAttribute("hover",""):a.target.removeAttribute("hover"))}_inputKeydownHandler(a){const b=this,c=a.charCode?a.charCode:a.which;40===c&&b._isIncrementOrDecrementAllowed()?b._incrementOrDecrement("subtract"):38===c&&b._isIncrementOrDecrementAllowed()&&b._incrementOrDecrement("add"),b._keydownInfo={value:b.$.input.value,specialKey:a.altKey||a.ctrlKey||a.shiftKey}}_inputKeyupHandler(a){const b=this;if(13===a.keyCode)b._suppressBlurEvent=!0,b.$.input.value!==b._cachedInputValue&&(b._triggerChangeEvent=!0,b._validate(),b._triggerChangeEvent=!1,b.$.input.blur());else if(27===a.keyCode)b.$.input.value=b._editableValue;else{const c=b.$.input.value;""!==c&&b._regex[b._radixNumber].test(c)?(b.$.upButton.disabled=!1,b.$.downButton.disabled=!1):""===c&&(b.$.upButton.disabled=!0,b.$.downButton.disabled=!0),!b._keydownInfo||b._keydownInfo.value===c||b._keydownInfo.specialKey||a.altKey||a.ctrlKey||a.shiftKey||"Control"===a.key||b.$.fireEvent("changing",{currentValue:c,validValue:b.value,radix:b._radixNumber})}a.preventDefault()}_inputBlurHandler(){const a=this;!0===a._suppressBlurEvent?(a._suppressBlurEvent=!1,a._formattedValue&&(a._cachedInputValue=a._formattedValue,a.$.input.value=a._formattedValue,delete a._formattedValue)):a.$.input.value===a._editableValue?a.$.input.value=a._cachedInputValue:(a._triggerChangeEvent=!0,a._validate(),a._triggerChangeEvent=!1),a.radixDisplay&&a.$.radixDisplayButton.removeAttribute("focus"),a.opened&&a._closeRadix(),a.spinButtons&&a.$.spinButtonsContainer.removeAttribute("focus"),a.showUnit&&a.$.unitDisplay.removeAttribute("focus"),a.removeAttribute("focus")}_inputFocusHandler(){const a=this;a.spinButtons&&a.$.spinButtonsContainer.setAttribute("focus",""),a.radixDisplay&&a.$.radixDisplayButton.setAttribute("focus",""),a.showUnit&&a.$.unitDisplay.setAttribute("focus",""),a.opened&&a._closeRadix(),a.setAttribute("focus",""),a.outputFormatString&&(a.$.input.value=a._editableValue)}_inputChangeHandler(a){a.stopPropagation(),a.preventDefault()}_inputPasteHandler(){const a=this;requestAnimationFrame(()=>a.$.fireEvent("changing",{currentValue:a.$.input.value,validValue:a.value,radix:a._radixNumber}))}_inputWheelHandler(a){const b=this,c=b.enableShadowDOM?b.shadowRoot.activeElement||document.activeElement:document.activeElement;b.$.input===c&&b.enableMouseWheelAction&&b._isIncrementOrDecrementAllowed()&&(a.stopPropagation(),a.preventDefault(),0<a.wheelDelta?b._incrementOrDecrement("add"):b._incrementOrDecrement("subtract"))}_getRadix(a){switch(a.toString()){case"10":case"decimal":return 10;case"2":case"binary":return 2;case"8":case"octal":return 8;case"16":case"hexadecimal":return 16;}}_setDropDownOptions(){const a=this;if(!1!==a.dropDownEnabled&&null!==a._number){const b=a._wordLengthNumber,c=a.leadingZeros;a.$.dropDownItem2.innerHTML=`${a._number.toString(2,b,c)} (${a.localize("binary")})`,a.$.dropDownItem8.innerHTML=`${a._number.toString(8,b)} (${a.localize("octal")})`,a.$.dropDownItem10.innerHTML=`${a._renderValue(a._number.toString(10,b),!0)} (${a.localize("decimal")})`,a.$.dropDownItem16.innerHTML=`${a._number.toString(16,b,c)} (${a.localize("hexadecimal")})`}}_incrementOrDecrement(a){const b=this,c=b.enableShadowDOM?b.shadowRoot.activeElement||document.activeElement:document.activeElement;let d=b._cachedInputValue;if(b.$.input===c&&(d=b._editableValue,b._suppressBlurEvent=!0),!((b.$.input.value!==d||b._programmaticValueIsSet&&"interaction"===b.validation)&&(b._triggerChangeEvent=!0,b._validate(),b._triggerChangeEvent=!1,!1===b._isIncrementOrDecrementAllowed()))){const c=b._numericProcessor.incrementDecrement(b._number,a,b._spinButtonsStepObject),d=b._validateRange(c);b._triggerChangeEvent=!0,b._updateValue(d),b._triggerChangeEvent=!1}}_toBigNumberDecimal(a,b){const c=this;let d;return 10===b?d=new Smart.Utilities.BigNumber(a):c._unsigned||!1===c._isNegative(a,b)?64>c._wordLengthNumber?(d=parseInt(a,b),d=new Smart.Utilities.BigNumber(d)):d=c._getBigNumberFrom64BitBinOctHex(a,b):(d=c._getNegativeDecimal(a,b),d=new Smart.Utilities.BigNumber(d)),d}_isNegative(a,b){const c=this,d=a.length,e=a.charAt(0).toLowerCase();if(2===b)return d===c._wordLengthNumber&&"1"===e;if(8===b)switch(c._wordLengthNumber){case 8:return 3===d&&("2"===e||"3"===e);case 16:return 5===d&&"1"===e;case 32:return 11===d&&("2"===e||"3"===e);case 64:return 22===d&&"1"===e;}else return d===c._wordLengthNumber/4&&-1!==["8","9","a","b","c","d","e","f"].indexOf(e)}_getBigNumberFrom64BitBinOctHex(a,b){let c=new Smart.Utilities.BigNumber(0);for(let d,e=a.length-1;0<=e;e--)d=new Smart.Utilities.BigNumber(parseInt(a.charAt(e),b)),c=c.add(d.multiply(new Smart.Utilities.BigNumber(b).pow(a.length-1-e)));return c}_getNegativeDecimal(a,b){const c=this;let d=a;if(8===b){let b=[];for(let c,d=0;d<a.length;d++){for(c=parseInt(a.charAt(d),8).toString(2);3!==c.length;)c=`0${c}`;b.push(c)}for(d=b.join("");"0"===d.charAt(0);)d=d.slice(1)}else if(16===b){let b=[];for(let c,d=0;d<a.length;d++){for(c=parseInt(a.charAt(d),16).toString(2);4!==c.length;)c=`0${c}`;b.push(c)}d=b.join("")}let e=d.replace(/0/g,"a");return e=e.replace(/1/g,"b"),e=e.replace(/a/g,"1"),e=e.replace(/b/g,"0"),64>this._wordLengthNumber?e=-1*(parseInt(e,2)+1):(e=c._getBigNumberFrom64BitBinOctHex(e,b),e=e.add(1).negate()),e}_discardDecimalSeparator(a,b){const c=this;if(void 0===b&&(b=c.decimalSeparator),"."!==b&&a!==1/0&&a!==-Infinity){let c=new RegExp(b,"g");return a.replace(c,".")}return a}_applyDecimalSeparator(a){const b=this;return"string"!=typeof a&&(a=a.toString()),"."!==b.decimalSeparator&&(a=a.replace(/\./g,b.decimalSeparator)),a}_renderValue(a,b){const c=this,d=a,e=10===c._radixNumber||!0===b;if(a=c._numericProcessor.render(a,e),"."!==c.decimalSeparator&&e&&(a=c._applyDecimalSeparator(a)),!0!==b&&(c._editableValue=a,c.outputFormatString&&10===c._radixNumber)){const a=c.enableShadowDOM?c.shadowRoot.activeElement||document.activeElement:document.activeElement,b=c._numberRenderer.formatNumber(d,c.outputFormatString);if(a!==c.$.input)return b;c._formattedValue=b}return a}_setFocusable(){const a=this;return a.disabled||a.unfocusable?void(a.$.input.tabIndex=-1):void a.$.input.removeAttribute("tabindex")}_disableComponents(){const a=this;if(!a.disabled){const b=a.value;null===b||"NaN"===b.toString()||Math.abs(b)===1/0?(a.$.upButton.disabled=!0,a.$.downButton.disabled=!0):(a.$.upButton.disabled=!1,a.$.downButton.disabled=!1)}}});