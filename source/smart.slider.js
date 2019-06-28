
/* Smart HTML Elements v3.2.0 (2019-June) 
Copyright (c) 2011-2019 jQWidgets. 
License: https://htmlelements.com/license/ */

Smart("smart-slider",class extends Smart.Tank{static get properties(){return{enableMouseWheelAction:{value:!1,type:"boolean"},orientation:{value:"horizontal",allowedValues:["horizontal","vertical"],type:"string",defaultReflectToAttribute:!0},rangeSlider:{value:!1,type:"boolean"},showButtons:{value:!1,type:"boolean"},values:{value:["0","100"],type:"array"}}}static get listeners(){return{"track.down":"_trackDownHandler","thumb.down":"_thumbDownHandler","secondThumb.down":"_thumbDownHandler","thumb.mouseleave":"_thumbMoveMouseleaveHandler","secondThumb.mouseleave":"_thumbMoveMouseleaveHandler","thumb.move":"_thumbMoveMouseleaveHandler","secondThumb.move":"_thumbMoveMouseleaveHandler","document.move":"_documentMoveHandler","document.up":"_documentUpHandler","leftButton.click":"_spinButtonClickHandler","rightButton.click":"_spinButtonClickHandler",keydown:"_keydownHandlerSlider",keyup:"_keyupHandlerSlider",resize:"_resizeAndStyleChangedHandler",styleChanged:"_resizeAndStyleChangedHandler","document.selectstart":"_selectStartHandler",wheel:"_wheelHandler"}}static get requires(){return{"Smart.RepeatButton":"smart.button.js"}}template(){return"<div id=\"container\" class=\"smart-container\">\n                <div id=\"scaleNear\" class=\"smart-scale smart-scale-near\"></div>\n                <div id=\"trackContainer\" class=\"smart-track-container\">\n                    <smart-repeat-button id=\"leftButton\" class=\"smart-spin-button\" animation=\"[[animation]]\" unfocusable>\n                        <div id=\"leftArrow\" class=\"smart-arrow\"></div>\n                    </smart-repeat-button>\n                    <div id=\"track\" class=\"smart-track\">\n                        <div id=\"fill\" class=\"smart-value\"></div>\n                        <div id=\"trackTicksContainer\" class=\"smart-track-ticks-container smart-hidden\"></div>\n                        <div id=\"thumb\" class=\"smart-thumb\">\n                            <span id=\"thumbLabel\" class=\"smart-thumb-label\"></span>\n                            <div id=\"tooltip\" class=\"smart-tooltip\">\n                                <div id=\"tooltipContent\" class=\"smart-tooltip-content smart-unselectable\"></div>\n                            </div>\n                        </div>\n                        <div id=\"secondThumb\" class=\"smart-thumb\">\n                            <span id=\"secondThumbLabel\" class=\"smart-thumb-label\"></span>\n                            <div id=\"secondTooltip\" class=\"smart-tooltip\">\n                                <div id=\"secondTooltipContent\" class=\"smart-tooltip-content smart-unselectable\"></div>\n                            </div>\n                        </div>\n                    </div>\n                    <smart-repeat-button id=\"rightButton\" class=\"smart-spin-button\" animation=\"[[animation]]\" unfocusable>\n                        <div id=\"rightArrow\" class=\"smart-arrow\"></div>\n                    </smart-repeat-button>\n                </div>\n                <div id=\"scaleFar\" class=\"smart-scale smart-scale-far\"></div>\n                <input id=\"hiddenInput\" type=\"hidden\" name=\"[[name]]\">\n            </div>"}_createElement(){const a=this,b="numeric"===a.mode;if(a._renderingSuspended||(b?a._redefineProperty("values"):!b&&a._handleDateScale()),a._setSettingsObject(),a._setDrawVariables(),a._getLayoutType(),a._numericProcessor=new Smart.Utilities.NumericProcessor(a,"scaleType"),a._numberRenderer=new Smart.Utilities.NumberRenderer,!a._isVisible())return void(a._renderingSuspended=!0);a._renderingSuspended=!1,a._setInitialComponentDisplay(),a._measurements={},a._getMeasurements(),a._wordLengthNumber=a._numericProcessor.getWordLength(a.wordLength);const c=a._valuesHandler=a.rangeSlider?new Smart.Utilities.SliderMultipleValueHandler(a):new Smart.Utilities.SliderSingleValueHandler(a);b&&(a._getEventValue=function(){return a._valuesHandler.getValue()}),a._validateInitialPropertyValues(),a._setTicksAndInterval(),c.validate(!0),c.updateTooltipValue(),window.requestAnimationFrame(function(){a.$thumb.addClass("enable-animation"),a.$secondThumb.addClass("enable-animation"),a.$fill.addClass("enable-animation")}),a._setFocusable(),a._makeThumbAccessible(),a.$.hiddenInput.value=a._getEventValue()}val(a){const b=this,c=b._valuesHandler;return void 0===a?b._getEventValue():void("date"===b.mode&&(b.rangeSlider?(a[0]=Smart.Utilities.DateTime.validateDate(a[0]),a[1]=Smart.Utilities.DateTime.validateDate(a[1]),a[0]=a[0].getTimeStamp(),a[1]=a[1].getTimeStamp()):(a=Smart.Utilities.DateTime.validateDate(a),a=a.getTimeStamp())),c.areDifferent(a)&&(b._programmaticValueIsSet=!0,c.validate(!1,a),b._programmaticValueIsSet=!1))}getOptimalSize(){var a=Math.max;const b=this;if(b._renderingSuspended)return{width:0,height:0};const c=window.getComputedStyle(b),d=window.getComputedStyle(b.$.trackContainer);let e,f,g,h,i,j,k,l,m=0;return e="all"===b.labelsVisibility?b._numericProcessor._longestLabelSize:"endPoints"===b.labelsVisibility?a(b._tickIntervalHandler.labelsSize.minLabelOtherSize,b._tickIntervalHandler.labelsSize.maxLabelOtherSize):0,"horizontal"===b.orientation?(m+=parseFloat(d.marginTop)+parseFloat(d.marginBottom)+b.$.track.offsetHeight,("near"===b.scalePosition||"both"===b.scalePosition)&&(m+=e,g=b.$.scaleNear.getElementsByClassName("smart-label"),h=g[0],i=g[g.length-1],m+=parseFloat(window.getComputedStyle(h).bottom)),("far"===b.scalePosition||"both"===b.scalePosition)&&(m+=e,g=b.$.scaleFar.getElementsByClassName("smart-label"),h=g[0],i=g[g.length-1],m+=parseFloat(window.getComputedStyle(h).top)),m+=parseFloat(c.paddingTop)+parseFloat(c.paddingBottom),f=b.offsetWidth,"none"!==b.scalePosition&&(j=h.getBoundingClientRect(),k=i.getBoundingClientRect(),l=j.left+h.offsetWidth-k.left,0<l&&(f=h.offsetWidth+i.offsetWidth+a(10,b.$.thumb.offsetWidth))),{width:f,height:m}):(m+=parseFloat(d.marginLeft)+parseFloat(d.marginRight)+b.$.track.offsetWidth,("near"===b.scalePosition||"both"===b.scalePosition)&&(m+=e,g=b.$.scaleNear.getElementsByClassName("smart-label"),h=g[0],i=g[g.length-1],m+=parseFloat(window.getComputedStyle(h).right)),("far"===b.scalePosition||"both"===b.scalePosition)&&(m+=e,g=b.$.scaleFar.getElementsByClassName("smart-label"),h=g[0],i=g[g.length-1],m+=parseFloat(window.getComputedStyle(h).left)),m+=parseFloat(c.paddingLeft)+parseFloat(c.paddingRight),f=b.offsetHeight,"none"!==b.scalePosition&&(j=h.getBoundingClientRect(),k=i.getBoundingClientRect(),l=j.top+h.offsetHeight-k.top,0<l&&(f=h.offsetHeight+i.offsetHeight+a(10,b.$.thumb.offsetHeight))),{width:m,height:f})}propertyChangedHandler(a,b,c){function d(){e._setTicksAndInterval(),f.validate(!1,f.getValue())}const e=this;if(!e._isVisible()||e._renderingSuspended)return void(e._renderingSuspended=!0);if(-1!==["disabled","mode","readonly","showThumbLabel","tooltipPosition","unfocusable","validation"].indexOf(a))return void super.propertyChangedHandler(a,b,c);let f=e._valuesHandler;if("values"!==a&&c!=b||"values"===a&&(c[0]!=b[0]||c[1]!==b[1]))switch(a){case"coerce":if(c){const a=f.getValue();f.validate(!1,a.slice(0)),e._valueBeforeCoercion=a}else void 0!==e._valueBeforeCoercion&&f.validate(!1,e._valueBeforeCoercion.slice(0));break;case"customInterval":case"customTicks":super.propertyChangedHandler(a,b,c),f.validate(!1,f.getValue());break;case"dateLabelFormatString":"date"===e.mode&&d();break;case"decimalSeparator":case"scientificNotation":if("date"===e.mode)return;d();break;case"interval":e._numericProcessor.validateInterval(c),f.validate(!1,f.getValue());break;case"inverted":e._getLayoutType(),e._normalLayout&&(e.$.fill.style[e._settings.margin]="0px"),d();break;case"labelFormatFunction":case"showUnit":case"unit":d();break;case"labelsVisibility":case"ticksVisibility":return;case"logarithmicScale":if("date"===e.mode)return void(e.logarithmicScale=!1);e._validateMinMax("both"),d();break;case"min":case"max":"date"===e.mode&&(delete e._dateInterval,e[a]=Smart.Utilities.DateTime.validateDate(c).getTimeStamp()),e._validateMinMax(a,!1,b),e._programmaticValueIsSet="interaction"===e.validation,d(),e._programmaticValueIsSet=!1;break;case"orientation":e.$.container.removeAttribute("style"),e.$.trackContainer.removeAttribute("style"),e.$.fill.removeAttribute("style"),e.$.thumb.removeAttribute("style"),e.$.secondThumb.removeAttribute("style"),e._setSettingsObject(),e._getLayoutType(),e._getMeasurements(),d(),"horizontal"===c?(e.$leftArrow.removeClass("smart-arrow-up"),e.$rightArrow.removeClass("smart-arrow-down"),e.$leftArrow.addClass("smart-arrow-left"),e.$rightArrow.addClass("smart-arrow-right")):(e.$leftArrow.removeClass("smart-arrow-left"),e.$rightArrow.removeClass("smart-arrow-right"),e.$leftArrow.addClass("smart-arrow-up"),e.$rightArrow.addClass("smart-arrow-down"));break;case"precisionDigits":case"significantDigits":if("date"===e.mode)return;"precisionDigits"===a&&"integer"===e.scaleType&&e.error(e.localize("noInteger",{elementType:e.nodeName.toLowerCase(),property:a})),"significantDigits"===a&&null!==e.precisionDigits?e.precisionDigits=null:"precisionDigits"==a&&null!==e.significantDigits&&(e.significantDigits=null),d();break;case"rangeSlider":c?(e.values=[e.min,e.value],e._drawValues=[e._drawMin,e._drawValue],"date"===e.mode&&(e._valueDate=[e._minDate.clone(),e._valueDate]),void 0!==e._valueBeforeCoercion&&(e._valueBeforeCoercion=[e.min,e._valueBeforeCoercion]),f=e._valuesHandler=new Smart.Utilities.SliderMultipleValueHandler(e)):(e.value=e.values[1],e._drawValue=e._drawValues[1],"date"===e.mode&&(e._valueDate=e._valueDate[1]),void 0!==e._valueBeforeCoercion&&(e._valueBeforeCoercion=e._valueBeforeCoercion[1]),f=e._valuesHandler=new Smart.Utilities.SliderSingleValueHandler(e),e.$.fill.style.marginTop=0,e.$.fill.style.marginLeft=0),f.validate(!1,f.getValue());break;case"scalePosition":e._setInitialComponentDisplay(),d();break;case"scaleType":if("date"===e.mode)return void(e.scaleType="integer");e._numericProcessor=new Smart.Utilities.NumericProcessor(e,"scaleType"),e._validateMinMax("both"),e._setTicksAndInterval(),f.validate(!0);break;case"showButtons":c?(e.$leftButton.removeClass("smart-hidden"),e.$rightButton.removeClass("smart-hidden")):(e.$leftButton.addClass("smart-hidden"),e.$rightButton.addClass("smart-hidden")),e._setTicksAndInterval(),f.moveThumbBasedOnValue(f.getDrawValue(),void 0,!0);break;case"showTooltip":super.propertyChangedHandler(a,b,c),c||(e.$tooltip.addClass("smart-hidden"),e.$secondTooltip.addClass("smart-hidden"));break;case"theme":super.propertyChangedHandler(a,b,c),d();break;case"ticksPosition":"scale"===c?(e.$trackTicksContainer.addClass("smart-hidden"),e.$.trackTicksContainer.innerHTML=""):e.$trackTicksContainer.removeClass("smart-hidden"),e._setTicksAndInterval();break;case"value":case"values":if("value"===a&&e.rangeSlider||"values"===a&&!e.rangeSlider)return;if("date"===e.mode)if("value"===a){if(c=Smart.Utilities.DateTime.validateDate(c),c=c.getTimeStamp(),e.value=c,0===c.compare(b))return;}else if(c[0]=Smart.Utilities.DateTime.validateDate(c[0]),c[1]=Smart.Utilities.DateTime.validateDate(c[1]),c[0]=c[0].getTimeStamp(),c[1]=c[1].getTimeStamp(),e.values=c,0===c[0].compare(b[0])&&0===c[1].compare(b[1]))return;e._programmaticValueIsSet=!0,f.validate(!1,c),e._programmaticValueIsSet=!1;break;case"wordLength":if("date"===e.mode)return void(e.wordLength="uint64");e._wordLengthNumber=e._numericProcessor.getWordLength(c),e._validateMinMax("both"),d();}else"string"!=typeof c&&"string"==typeof b&&(e[a]=b)}_addMovedThumbClass(){const a=this;a.rangeSlider&&(a._movedThumb.$.addClass("smart-moved-thumb"),a._movedThumb===a.$.thumb?a.$secondThumb.removeClass("smart-moved-thumb"):a.$thumb.removeClass("smart-moved-thumb"))}_setInitialComponentDisplay(){super._setInitialComponentDisplay();const a=this;a.$secondTooltip.addClass("smart-hidden"),a.showButtons||(a.$leftButton.addClass("smart-hidden"),a.$rightButton.addClass("smart-hidden"))}_getMeasurements(){const a=this,b=a._measurements,c=a.$.track,d=a.$.thumb;return!a._isVisible()||a._renderingSuspended?void(a._renderingSuspended=!0):void("horizontal"===a.orientation?(b.trackWidth=c.offsetHeight,b.thumbSize=d.offsetWidth,b.borderWidth=parseFloat(window.getComputedStyle(a.$.track).borderLeftWidth)):(b.trackWidth=c.offsetWidth,b.thumbSize=d.offsetHeight,b.borderWidth=parseFloat(window.getComputedStyle(a.$.track).borderTopWidth)),b.halfThumbSize=b.thumbSize/2)}_layout(){var a=Math.max;const b=this,c=b._measurements,d=b.$.container.style,e=c.halfThumbSize,f=b._tickIntervalHandler.labelsSize;let g,h,i,j;if("none"===b.scalePosition?(g=0,h=0):(g=f.minLabelSize/2,h=f.maxLabelSize/2),!b.showButtons)i=a(e,g)+"px",j=a(e,h)+"px";else{const c=b.$.leftButton[b._settings.size],d=c+e;i=a(g-d,0)+"px",j=a(h-d,0)+"px"}"horizontal"===b.orientation?(b.inverted?(d.paddingLeft=j,d.paddingRight=i):(d.paddingLeft=i,d.paddingRight=j),c.trackLength=b.$.track.clientWidth,b.$leftArrow.addClass("smart-arrow-left"),b.$rightArrow.addClass("smart-arrow-right")):(b.inverted?(d.paddingBottom=j,d.paddingTop=i):(d.paddingBottom=i,d.paddingTop=j),c.trackLength=b.$.track.clientHeight,b.$leftArrow.addClass("smart-arrow-up"),b.$rightArrow.addClass("smart-arrow-down"))}_trackDownHandler(a){const b=this,c=b.mechanicalAction;return b.disabled||b.readonly||!b.rangeSlider&&a.target===b.$.thumb?void 0:b._stopTrackDownHandler?void(b._stopTrackDownHandler=!1):void("switchWhileDragging"!==c&&(b._valueAtDragStart=b._valuesHandler.getValue()),b._getTrackStartAndEnd(),b._valuesHandler.setActiveThumbOnTrackClick(a),b._moveThumbBasedOnCoordinates(a,!0,"switchWhenReleased"!==c),b._thumbDragged=!0,b.setAttribute("dragged",""),b.showTooltip&&b._movedTooltip.removeClass("smart-hidden"))}_trackMoveHandler(){}_thumbDownHandler(a){const b=this;b.disabled||b.readonly||(b._getTrackStartAndEnd(),(a[b._settings.page]<b._trackStart||a[b._settings.page]>b._trackEnd)&&(b._stopTrackDownHandler=!0),"switchWhileDragging"!==b.mechanicalAction&&(b._valueAtDragStart=b._valuesHandler.getValue()),window.getSelection().removeAllRanges(),b._thumbDragged=!0,b.setAttribute("dragged",""),b.$track.addClass("smart-dragged"),b._movedThumb=a.target,b._addMovedThumbClass(),b._movedTooltip=b.$tooltip,b.rangeSlider&&(b._movedThumb===b.$.thumb?(b._staticThumb=b.$.secondThumb,b.$secondTooltip.addClass("smart-hidden")):(b._staticThumb=b.$.thumb,b._movedTooltip=b.$secondTooltip,b.$tooltip.addClass("smart-hidden"))),b.showTooltip&&b._movedTooltip.removeClass("smart-hidden"),a.stopPropagation())}_thumbMoveMouseleaveHandler(a){var b=Math.pow;const c=this;if(!(c.disabled||c.readonly)){const c=a.target;if("move"===a.type){const d=c.getBoundingClientRect(),e=window.scrollX||window.pageXOffset,f=window.scrollY||window.pageYOffset,g=(d.left+d.right)/2+e,h=(d.top+d.bottom)/2+f,i=b(d.width/2,2);if(b(a.pageX-g,2)+b(a.pageY-h,2)>i)return;c.setAttribute("hover","")}else c.removeAttribute("hover")}}_documentMoveHandler(a){const b=this;b._thumbDragged&&(b.$thumb.removeClass("enable-animation"),b.$secondThumb.removeClass("enable-animation"),b.$fill.removeClass("enable-animation"),b._moveThumbBasedOnCoordinates(a,!0,"switchWhenReleased"!==b.mechanicalAction))}_documentUpHandler(a,b){const c=this;c._thumbDragged&&(c.$thumb.addClass("enable-animation"),c.$secondThumb.addClass("enable-animation"),c.$fill.addClass("enable-animation"),!b&&("switchUntilReleased"===c.mechanicalAction?c._valuesHandler.validate(!1,c._valueAtDragStart):"switchWhenReleased"===c.mechanicalAction&&c._moveThumbBasedOnCoordinates(a,!0,!0)),c.showTooltip&&c._movedTooltip.addClass("smart-hidden"),c._thumbDragged=!1,c.removeAttribute("dragged"),c._makeThumbAccessible(),c._movedThumb=void 0,c.$track.removeClass("smart-dragged"))}_spinButtonClickHandler(a){const b=this;if(b.disabled||b.readonly)return;let c;c=b.$.leftButton.contains(a.target)===b._normalLayout?"subtract":"add",b._valuesHandler.incrementOrDecrement(c)}_keydownHandlerSlider(a){const b=this,c=a.key;return"Escape"===c&&b._thumbDragged&&"switchWhenReleased"===b.mechanicalAction?(b._documentUpHandler(void 0,!0),void b._valuesHandler.validate(!1,b._valueAtDragStart)):void(-1!==["ArrowDown","ArrowLeft","ArrowRight","ArrowUp"].indexOf(c)&&!b.coerce&&(b.$thumb.removeClass("enable-animation"),b.$secondThumb.removeClass("enable-animation"),b.$fill.removeClass("enable-animation"),b._restoreAnimationClass=!0),this._valuesHandler.keydownHandler(a))}_keyupHandlerSlider(){const a=this;a._restoreAnimationClass&&(a.$thumb.addClass("enable-animation"),a.$secondThumb.addClass("enable-animation"),a.$fill.addClass("enable-animation"))}_resizeAndStyleChangedHandler(a){const b=this,c=b._valuesHandler;if(!b._isVisible())return void(b._renderingSuspended=!0);if(b._renderingSuspended)return void b._createElement();if(!b._renderingSuspended&&(b._getMeasurements(),b._setTicksAndInterval(),c.validate(!1,c.getValue()),"styleChanged"===a.type)){const c=a.detail.styleProperties;if(c["font-size"]||c["font-family"]||c["font-style"]||c["font-weight"]){const a=b.getOptimalSize();b.style.width=a.width+"px",b.style.height=a.height+"px"}}}_moveThumbBasedOnCoordinates(a,b,c){const d=this,e=d._numericProcessor,f=d._trackStart,g=d._settings.margin;let h=a[d._settings.page];b&&(h=d._valuesHandler.restrictThumbCoordinates(h,f,d._trackEnd));let i=e.pxToValue(h);d.rangeSlider&&d._movedThumb===d.$.thumb&&1===e.compare(i,d.values[1],!0)&&(i=e.createDescriptor(d.values[1]));let j=i;d.logarithmicScale?(i=e.getCoercedValue(Math.log10(i)),j=parseFloat(Math.pow(10,i).toFixed(11))):(i=e.getCoercedValue(i),j=i),h=e.valueToPx(i)+f;const k=h-f;d._movedThumb.style[g]=k-d._measurements.halfThumbSize+"px",d._valuesHandler.updateFillSizeAndPosition(k,g,j,!0,c),Smart.Utilities.Core.isMobile&&a.originalEvent&&(a.originalEvent.stopPropagation(),a.originalEvent.preventDefault())}_moveThumbBasedOnValue(a,b,c,d){const e=this,f=e._numericProcessor.valueToPx(b),g=e._settings.margin;a.style[g]=f-e._measurements.halfThumbSize+"px";const h=e._getSingleActualValue(b);d?e.rangeSlider&&(e._firstPassSize=f):e._valuesHandler.updateFillSizeAndPosition(f,g,h,c,c)}_validate(a,b){this._valuesHandler.validate(a,b)}_updateValue(a){const b=this._valuesHandler;b.updateValue(b.getActualValue(a))}_makeThumbAccessible(){const a=this;a.rangeSlider&&(a.$.thumb[a._settings.offset]===a.$.secondThumb[a._settings.offset]&&!1===a._numericProcessor.compare(a.values[1],a.max)?a.$thumb.addClass("accessible"):a.$thumb.removeClass("accessible"))}_getSingleActualValue(a){return this.logarithmicScale?parseFloat(Math.pow(10,a).toFixed(11)):a.toString()}_coerceCustomInterval(){const a=this;if(a.coerce){const b=a._valueBeforeCoercion;a._valuesHandler.validate(!1,a._valuesHandler.getValue()),a._valueBeforeCoercion=b}}_wheelHandler(a){const b=this;document.activeElement===b&&b.enableMouseWheelAction&&(a.stopPropagation(),a.preventDefault(),0<a.wheelDelta?b._keydownHandlerSlider({key:"ArrowRight",which:39,preventDefault:function(){}}):b._keydownHandlerSlider({key:"ArrowLeft",which:37,preventDefault:function(){}}))}_handleDateScale(){const a=this,b=Smart.Utilities.DateTime;super._handleDateScale(),Object.defineProperty(a,"values",{get:function(){return a.context===a?a.properties.values.value:a._valueDate},set(b){function c(a,b){return b instanceof Smart.Utilities.BigNumber?b.toString():b}const d=a.properties.values.value,e=JSON.stringify(d,c),f=JSON.stringify(b,c);if(e!==f&&(a.properties.values.value=b,a.isReady&&(!a.ownerElement||a.ownerElement&&a.ownerElement.isReady)&&a.context!==a)){const c=a.context;a.context=a,a.propertyChangedHandler("values",d,b),a.context=c}}}),a.rangeSlider&&(a._valueDate=[b.validateDate(a.values[0]),b.validateDate(a.values[1])],a.values=[a._valueDate[0].getTimeStamp(),a._valueDate[1].getTimeStamp()]),a._properties.values.serialize="_serializeValue"}_setTicksAndInterval(){const a=this;a._skipTrackReset?delete a._skipTrackReset:a.$.track.style[a._settings.dimension]=null,super._setTicksAndInterval(),10>a.$.track[a._settings.size]&&(a._skipTrackReset=!0,a.$.track.style[a._settings.dimension]=a.getOptimalSize()[a._settings.dimension]+"px",a._getMeasurements(),a._setTicksAndInterval(),a._valuesHandler.validate(!1,a._valuesHandler.getValue()))}}),Smart.Utilities.Assign("SliderSingleValueHandler",class{constructor(a){this.context=a,"date"===a.mode&&(a._getEventValue=function(){return a._valueDate.clone()})}applyFunctionToValue(a,b){const c=this,d=c.context;b===void 0&&(b=d.value);const e=a.apply(d,[b]);return e}areDifferent(a){return this.context.value!==a}incrementOrDecrement(a){const b=this.context,c=b._keyIncrementDecrement(a);this.validate(!1,c)}setActiveThumbOnTrackClick(){const a=this.context;a._movedThumb=a.$.thumb,a._addMovedThumbClass(),a._movedTooltip=a.$tooltip}getActualValue(a){return this.context._getSingleActualValue(a)}getCoercedLogarithmicValue(a){const b=this.context;if(b.logarithmicScale){const c=b._numericProcessor.getCoercedValue(Math.log10(a));return this.getActualValue(c)}return a}getDrawValue(){return this.context._drawValue}getValue(){return this.context.value}keydownHandler(a){this.context._keydownHandler(a)}moveThumbBasedOnValue(a,b,c){const d=this.context;if(void 0===a&&(a=d.value),d._moveThumbBasedOnValue(d.$.thumb,a,b),!0!==c){d._drawValue=a;const b=this.getActualValue(a);let c;c=void 0===d._valueNoRangeValidation?b.toString():d._valueNoRangeValidation.toString(),"date"===d.mode&&(d._valueDate=Smart.Utilities.DateTime.fromFullTimeStamp(c)),d.value=c,delete d._valueBeforeCoercion,this.updateTooltipValue(b)}}restrictThumbCoordinates(a,b,c){return a=Math.max(a,b),a=Math.min(a,c),a}updateFillSizeAndPosition(a,b,c,d,e){const f=this.context,g=f.$.fill.style,h=f._settings.dimension;if(f._normalLayout?g[h]=a+"px":(g[h]=f._measurements.trackLength-a+"px",g[b]=a+"px"),d){const a=f.value,b=f._getEventValue(),d=f._numericProcessor;if(d.compare(d.createDescriptor(c),d.createDescriptor(a))&&(this.updateTooltipValue(c),e)){let a;if(f._drawValue=f.logarithmicScale?Math.log10(c):c,a=void 0===f._valueNoRangeValidation?c.toString():f._valueNoRangeValidation.toString(),"date"===f.mode&&(f._valueDate=Smart.Utilities.DateTime.fromFullTimeStamp(a)),f.value=a,delete f._valueBeforeCoercion,!0!==f._programmaticValueIsSet){const a=f._getEventValue();f.$.hiddenInput.value=a,f.$.fireEvent("change",{value:a,oldValue:b})}}}}updateTooltipValue(a){const b=this.context;a===void 0&&(a=b.value);const c=b._formatLabel(a);b.$.tooltipContent.innerHTML!==c&&(b.$.tooltipContent.innerHTML=c,b.$.thumbLabel.innerHTML=c)}updateValue(a){const b=this.context,c=b._numericProcessor.createDescriptor(a,!0,!1);b._drawValue=b.logarithmicScale?Math.log10(c):c,this.moveThumbBasedOnValue(b._drawValue,!0)}validate(a,b){const c=this.context,d=c._numericProcessor;let e=a?c.value:b;let f;c.coerce&&(e=c._numericProcessor.createDescriptor(e,!0,!0,!0)),e=c.logarithmicScale?this.getCoercedLogarithmicValue(e):d.getCoercedValue(e),c._valueNoRangeValidation=d.createDescriptor(e,!0,!0,!1),f=d.validate(c._valueNoRangeValidation,c._minObject,c._maxObject),a?(c._drawValue=c.logarithmicScale?Math.log10(f):f,e=c._valueNoRangeValidation.toString(),"date"===c.mode&&(c._valueDate=Smart.Utilities.DateTime.fromFullTimeStamp(e)),c.value=e,this.moveThumbBasedOnValue(c._drawValue,void 0,!0),c._programmaticValueIsSet=!1):this.updateValue(f),delete c._valueNoRangeValidation}}),Smart.Utilities.Assign("SliderMultipleValueHandler",class{constructor(a){this.context=a,"date"===a.mode&&(a._getEventValue=function(){return[a._valueDate[0].clone(),a._valueDate[1].clone()]})}applyFunctionToValue(a,b){const c=this,d=c.context,e=[];return void 0===b&&(b=d.values),e[0]=a.apply(d,[b[0]]),e[1]=a.apply(d,[b[1]]),e}areDifferent(a){const b=this.context.values;return b[0]!==a[0]||b[1]!==a[1]}incrementOrDecrement(a){const b=this.context,c=b.values.slice(0);let d;d="add"===a?1:0,c[d]=this.keyIncrementDecrement(a,d),this.validate(!1,c)}keydownHandler(a){const b=this.context;if(!(b.disabled||b.readonly)){const c=a.charCode?a.charCode:a.which;if(-1!==[35,36,37,38,39,40].indexOf(c)){a.preventDefault();const d=b.values.slice(0);let e;return 40===c||37===c?(e=this.keyIncrementDecrement("subtract",0),d[0]=e,b._movedThumb=b.$.thumb):38===c||39===c?(e=this.keyIncrementDecrement("add",1),d[1]=e,b._movedThumb=b.$.secondThumb):36===c?(b._drawValues[0]=b._drawMin,d[0]=b.min,b._movedThumb=b.$.thumb):35===c?(b._drawValues[1]=b._drawMax,d[1]=b.max,b._movedThumb=b.$.secondThumb):void 0,this.validate(!1,d),!1}}}keyIncrementDecrement(a,b){const c=this.context;let d,e;if(c.customInterval&&c.coerce)return d=this.getValue()[b],c._keyIncrementDecrement(a,d.toString());if("date"===c.mode)return d=c._valueDate[b],e=d[c._dateIncrementMethod](("add"===a?1:-1)*parseFloat(c.interval),!0),e=e.getTimeStamp(),-1===e.compare(c._drawMin)?new Smart.Utilities.BigNumber(c._drawMin):1===e.compare(c._drawMax)?new Smart.Utilities.BigNumber(c._drawMax):e;const f=c._drawValues[b];return d=c._numericProcessor.createDescriptor(f),e=c._numericProcessor.incrementDecrement(d,a,c._validInterval),c.logarithmicScale&&(c._drawValues[b]=e,e=parseFloat(Math.pow(10,Math.round(e)).toFixed(11))),e}setActiveThumbOnTrackClick(a){const b=this.context,c=b._trackStart+b._measurements.halfThumbSize,d=b._settings.offset,e=b.$.thumb,f=b.$.secondThumb,g=e[d],h=f[d],i=a[b._settings.page];let j=b._normalLayout?c+g+(h-g)/2:c+h+(g-h)/2;b._normalLayout&&i<=j||!b._normalLayout&&i>j?(b._movedThumb=e,b._staticThumb=f,b._movedTooltip=b.$tooltip,b.$secondTooltip.addClass("smart-hidden")):(b._movedThumb=f,b._staticThumb=e,b._movedTooltip=b.$secondTooltip,b.$tooltip.addClass("smart-hidden")),b._addMovedThumbClass()}getActualValue(a){var b=Math.pow;return this.context.logarithmicScale?[parseFloat(b(10,a[0].toString()).toFixed(11)),parseFloat(b(10,a[1].toString()).toFixed(11))]:[a[0].toString(),a[1].toString()]}getCoercedLogarithmicValue(a){var b=Math.log10;const c=this.context;if(c.logarithmicScale){const d=[];return d[0]=c._numericProcessor.getCoercedValue(b(a[0])),d[1]=c._numericProcessor.getCoercedValue(b(a[1])),this.getActualValue(d)}return a}getDrawValue(){return this.context._drawValues}getValue(){return this.context.values.slice(0)}moveThumbBasedOnValue(a,b,c){const d=this.context,e=void 0===b;if(void 0===a&&(a=d.values),d._numericProcessor.restrictValue(a),(e||1===b)&&(d._movedThumb=d.$.secondThumb,d._moveThumbBasedOnValue(d.$.secondThumb,a[1],!0,e)),(e||0===b)&&(d._movedThumb=d.$.thumb,d._moveThumbBasedOnValue(d.$.thumb,a[0],!0)),delete d._firstPassSize,!0!==c){d._drawValues=a;const b=this.getActualValue(a);let c;c=d._valuesNoRangeValidation?[d._valuesNoRangeValidation[0].toString(),d._valuesNoRangeValidation[1].toString()]:b,"date"===d.mode&&(d._valueDate=[Smart.Utilities.DateTime.fromFullTimeStamp(b[0]),Smart.Utilities.DateTime.fromFullTimeStamp(b[1])]),d.values=c,delete d._valueBeforeCoercion,this.updateTooltipValue()}}restrictThumbCoordinates(a,b,c){var d=Math.min,e=Math.max;const f=this.context,g=b+f._staticThumb[f._settings.offset]+f._measurements.halfThumbSize;return f._movedThumb===f.$.thumb&&f._normalLayout||f._movedThumb===f.$.secondThumb&&!f._normalLayout?(a=e(a,b),a=d(a,c,g)):(a=e(a,b,g),a=d(a,c)),a}updateFillSizeAndPosition(a,b,c,d,e){var f=Math.max;const g=this.context,h=g.$.fill.style,i=g._settings.dimension,j=g._settings.offset,k=g._measurements.halfThumbSize;let l,m;if(g._movedThumb===g.$.thumb?(l=a-k,m=void 0===g._firstPassSize?g.$.secondThumb[j]:g._firstPassSize-k):(l=void 0===g._firstPassSize?g.$.thumb[j]:g._firstPassSize-k,m=a-k),g._normalLayout?(h[i]=f(0,m-l)+"px",h[b]=l+k+"px"):(h[i]=f(0,l-m)+"px",h[b]=m+k+"px"),d){const a=g._numericProcessor,b=g._movedThumb===g.$.thumb?0:1,d=g.values[b],f=g._getEventValue();if(a.compare(a.createDescriptor(c),a.createDescriptor(d))){const a=g.values.slice(0);if(a[b]=c.toString(),this.updateTooltipValue(c,b),e){let b;if(this.updateDrawValues(a),b=g._valuesNoRangeValidation?[g._valuesNoRangeValidation[0].toString(),g._valuesNoRangeValidation[1].toString()]:a,"date"===g.mode&&(g._valueDate=[Smart.Utilities.DateTime.fromFullTimeStamp(a[0]),Smart.Utilities.DateTime.fromFullTimeStamp(a[1])]),g.values=b,delete g._valueBeforeCoercion,!0!==g._programmaticValueIsSet){const a=g._getEventValue();g.$.hiddenInput.value=a,g.$.fireEvent("change",{value:a,oldValue:f})}}}}}updateDrawValues(a){var b=Math.log10;const c=this.context;c.logarithmicScale?(c._drawValues[0]=b(a[0]),c._drawValues[1]=b(a[1])):c._drawValues=a.slice(0)}updateTooltipValue(a,b){const c=this.context;if(a===void 0){const a=c.values,b=c._formatLabel(a[0]),d=c._formatLabel(a[1]);c.$.tooltipContent.innerHTML!==b&&(c.$.tooltipContent.innerHTML=b,c.$.thumbLabel.innerHTML=b),c.$.secondTooltipContent.innerHTML!==d&&(c.$.secondTooltipContent.innerHTML=d)}else{const d=c._formatLabel(a);(0===b&&c.$.tooltipContent.innerHTML!==d||b===void 0)&&(c.$.tooltipContent.innerHTML=d,c.$.thumbLabel.innerHTML=d),(1===b&&c.$.secondTooltipContent.innerHTML!==d||b===void 0)&&(c.$.secondTooltipContent.innerHTML=d,c.$.secondThumbLabel.innerHTML=d)}}updateValue(a){const b=this.context,c=[];let d;c[0]=b._numericProcessor.createDescriptor(a[0],!0,!1),c[1]=b._numericProcessor.createDescriptor(a[1],!0,!1),this.updateDrawValues(c),b._movedThumb===b.$.secondThumb&&(d=1),this.moveThumbBasedOnValue(b._drawValues.slice(0),d)}validate(a,b){const c=this.context,d=c._numericProcessor;let e,f=[];e=a?c.values.slice(0):b,c.coerce&&(e[0]=d.createDescriptor(e[0],!0,!0,!0),e[1]=d.createDescriptor(e[1],!0,!0,!0)),c.logarithmicScale?e=this.getCoercedLogarithmicValue(e):(e[0]=d.getCoercedValue(e[0]),e[1]=d.getCoercedValue(e[1])),c._valuesNoRangeValidation=[],c._valuesNoRangeValidation[0]=d.createDescriptor(e[0],!0,!0,!1),c._valuesNoRangeValidation[1]=d.createDescriptor(e[1],!0,!0,!1),c._numericProcessor.restrictValue(c._valuesNoRangeValidation),f[0]=d.validate(c._valuesNoRangeValidation[0],c._minObject,c._maxObject),f[1]=d.validate(c._valuesNoRangeValidation[1],c._minObject,c._maxObject),a?(c._drawValues=[],this.updateDrawValues(f),e=[c._valuesNoRangeValidation[0].toString(),c._valuesNoRangeValidation[1].toString()],"date"===c.mode&&(c._valueDate=[Smart.Utilities.DateTime.fromFullTimeStamp(f[0]),Smart.Utilities.DateTime.fromFullTimeStamp(f[1])]),c.values=e,this.moveThumbBasedOnValue(c._drawValues,void 0,!0),c._programmaticValueIsSet=!1):this.updateValue(f),delete c._valuesNoRangeValidation}});