
/* Smart HTML Elements v3.2.0 (2019-June) 
Copyright (c) 2011-2019 jQWidgets. 
License: https://htmlelements.com/license/ */

(function(){"use strict";var a=Math.round,b=Math.max;Smart.Chart&&(Smart.Chart.prototype._moduleRangeSelector=!0,Smart.Chart.prototype._renderXAxisRangeSelector=function(a,b){const c=this,d=c.seriesGroups[a],e=c._getXAxis(a),f=e?e.rangeSelector:void 0;if(!c._isSelectorRefresh){const a=f&&f.renderTo?f.renderTo:c,b=a.getElementsByClassName("smart-chart-range-selector")[0];b&&b.parentElement.removeChild(b)}if(!e||!1===e.visible||"spider"===d.type)return!1;if(!c._isGroupVisible(a))return!1;if(!f)return!1;let g="horizontal"===d.orientation;f.renderTo&&(g=!1),c.rightToLeft&&(e.flip=!0);let h=g?c.offsetHeight:c.offsetWidth;h-=4;const i=this._getXAxisStats(a,e,h);let j=e.position;if(f.renderTo&&f.position&&(j=f.position),!this._isSelectorRefresh){const c=f.renderTo,d=document.createElement("div");if(d.className="smart-chart-range-selector smart-unselectable",d.style.position="absolute",d.style.backgroundColor="transparent",d.style.onselectstart=function(){return!1},!c){this.renderer.getContainer().appendChild(d);const a=this._selectorGetSize(e);g?(d.style.left=1+b.x+("right"===j?b.width:-a)+"px",d.style.top="0",d.style.height=h+"px",d.style.width=a+"px",b.height=a):(d.style.left="1px",d.style.top=b.y+("top"===j?-a:b.height)+"px",d.style.height=a+"px",d.style.width=h+"px")}else c.appendChild(d),d.style.width=c.offsetWidth+"px",d.style.height=c.offsetHeight+"px",b.width=c.offsetWidth,b.height=c.offsetHeight;this._refreshSelector(a,e,i,d,b,g)}return this._isSelectorRefresh=!1,!0},Smart.Chart.prototype._refreshSelector=function(a,c,d,e,f,g){const h=this,j={},k=c.rangeSelector;for(let b in k)j[b]=k[b];delete j.padding;let i=j.minValue,l=j.maxValue;void 0===i&&(i=Math.min(d.min.valueOf(),d.dsRange.min.valueOf())),void 0===l&&(l=b(d.max.valueOf(),d.dsRange.max.valueOf())),this._isDate(d.min)&&(i=new Date(i)),this._isDate(d.max)&&(l=new Date(l));let m=c.position;k.renderTo&&k.position&&(m=k.position),j.dataField=c.dataField,delete j.rangeSelector,j.type=c.type,j.baseUnit=null===k.baseUnit?c.baseUnit:k.baseUnit,j.minValue=i,j.maxValue=l,j.flip=c.flip,j.position=m;let n=2,o=2,p=2,q=2;k.renderTo||(n=g?0:f.x,o=g?0:this._rect.width-f.x-f.width,p=g?f.y:5,q=g?this._paddedRect.height-this._plotRect.height:5);let r=k.padding;r=void 0!==r&&null!==r||k.renderTo?{left:r&&r.left?r.left:n,top:r&&r.top?r.top:p,right:r&&r.right?r.right:o,bottom:r&&r.bottom?r.bottom:q}:{left:n,top:p,right:o,bottom:q};let s=k.dataField;for(let b=0;(void 0===s||null===s)&&b<this.seriesGroups.length;b++)for(let a=0;(void 0===s||null===s)&&a<this.seriesGroups[b].series.length;a++)s=this.seriesGroups[b].series[a].dataField;const t={parentChart:this,padding:r,_isRangeSelectorInstance:!0,theme:this.theme,caption:k.caption,description:k.description,titlePadding:k.titlePadding,colorScheme:k.colorScheme||this.colorScheme,backgroundColor:k.backgroundColor||this.backgroundColor||h._getThemeColor("background"),backgroundImage:k.backgroundImage,showBorderLine:null===k.showBorderLine?!!k.renderTo:k.showBorderLine,borderLineWidth:k.borderLineWidth||this.borderLineWidth,borderLineColor:k.borderLineColor||this.borderLineColor||h._getThemeColor("line"),rightToLeft:null===k.rightToLeft?this.rightToLeft:k.rightToLeft,greyScale:null===k.greyScale?this.greyScale:k.greyScale,renderEngine:this.renderEngine,showLegend:!1,animation:"none",enableEvents:!1,showToolTips:!1,dataSource:this.dataSource,xAxis:j,seriesGroups:[{orientation:g?"horizontal":"vertical",valueAxis:{visible:!1},type:k.serieType,skipOverlappingPoints:k.skipOverlappingPoints,columnSeriesOverlap:k.columnSeriesOverlap,columnsGapPercent:k.columnsGapPercent,seriesGapPercent:k.seriesGapPercent,series:[{dataField:s,opacity:.8,lineWidth:1}]}]};k.seriesGroups&&(t.seriesGroups=k.seriesGroups),k.valueAxis.visible&&(t.valueAxis=k.valueAxis),t.showBorderLine||(t.borderLineWidth=1,t.borderLineColor=h._get([this.backgroundColor,this.background,h._getThemeColor("background")]),t.showBorderLine=!0),h._supressBindingRefresh=!0,e.innerHTML="";const u=document.createElement("smart-chart");for(let b in t)u[b]=t[b];if(e.appendChild(u),h._rangeSelectorInstances[a]=u,h._supressBindingRefresh=!1,!!u._plotRect){const b=u._paddedRect;if(b.height=u._plotRect.height,!g&&"top"===m)b.y+=u._renderData[0].xAxis.rect.height;else if(g){const a=u._renderData[0].xAxis.rect.width;b.width-=a,"right"!==m&&(b.x+=a)}h._createSliderElements(a,e,b,k),h._rangeSelectorEventData={groupIndex:a,renderTo:e,swapXY:g}}},Smart.Chart.prototype._createSliderElements=function(b,c,d,e){function f(a,b){const c=document.createElement("div");return c.className="slider",c.style.position="absolute",c.style.background=a,c.style.opacity=b,c}function g(){const a=document.createElement("div");return a.className="slider",a.style.position="absolute",a.style.background="#FFFFFF",a.style.borderStyle="solid",a.style.borderWidth="1px",a.style.borderRadius="3px",a.style.borderColor=n,a}const h=this,i=c.getElementsByClassName("slider")[0];i&&i.parentElement.removeChild(i);const j=e.selectedRangeColor||"blue",k=h._get([e.selectedRangeOpacity,.1]),l=h._get([e.unselectedRangeOpacity,.5]),m=e.unselectedRangeColor||"white",n=e.rangeLineColor||"grey",o=document.createElement("div");for(o.className="slider",o.style.position="absolute",o.style.background=j,o.style.opacity=k,o.style.left=d.x+"px",o.style.top=d.y+"px",o.style.width=d.width+"px",o.style.height=d.height+"px",c.appendChild(o);this._sliders.length<b+1;)this._sliders.push({});const p=o.getBoundingClientRect(),q=c.getBoundingClientRect(),r=this;this._sliders[b]={element:o,host:c.firstElementChild,_sliderInitialAbsoluteRect:{x:p.left,y:p.top,width:d.width,height:d.height},_hostInitialAbsolutePos:{x:q.left,y:q.top},getRect:function(){const a=c.getBoundingClientRect();return{x:a.left-this._hostInitialAbsolutePos.x+this._sliderInitialAbsoluteRect.x,y:a.top-this._hostInitialAbsolutePos.y+this._sliderInitialAbsoluteRect.y,width:this._sliderInitialAbsoluteRect.width,height:this._sliderInitialAbsoluteRect.height}},rect:d,left:f(m,l),right:f(m,l),leftTop:f(n,l),rightTop:f(n,l),leftBorder:f(n,l),leftBar:g(),rightBorder:f(n,l),rightBar:g()};const s=this._sliders[b];c.appendChild(s.left),c.appendChild(s.right),c.appendChild(s.leftTop),c.appendChild(s.rightTop),c.appendChild(s.leftBorder),c.appendChild(s.rightBorder),c.appendChild(s.leftBar),c.appendChild(s.rightBar);const t=this._renderData[b].xAxis,u=t.data.axisStats,v=u.min.valueOf(),w=u.max.valueOf();let x=this._valueToOffset(b,v),y=this._valueToOffset(b,w);if(x>y){const a=y;y=x,x=a}"horizontal"===this.seriesGroups[b].orientation?(o.style.left=d.x+"px",o.style.top=a(d.y+x)+"px",o.style.width=d.width+"px",o.style.height=a(y-x)+"px"):(o.style.left=a(d.x+x)+"px",o.style.top=d.y+"px",o.style.width=a(y-x)+"px",o.style.height=d.height+"px"),this._setSliderPositions(b,x,y)},Smart.Chart.prototype._setSliderPositions=function(a,b,c){const d=this.seriesGroups[a],e=this._getXAxis(a),f=e.rangeSelector;let g="horizontal"===d.orientation;e.rangeSelector.renderTo&&(g=!1);let h=e.position;f.renderTo&&f.position&&(h=f.position);const i=this._sliders[a],j=g?"top":"left",k=g?"left":"top",l=g?"height":"width",m=g?"width":"height",n=g?"y":"x",o=g?"x":"y",p=i.rect;i.startOffset=b,i.endOffset=c,i.left.style[j]=p[n]+"px",i.left.style[k]=p[o]+"px",i.left.style[l]=b+"px",i.left.style[m]=p[m]+"px",i.right.style[j]=p[n]+c+"px",i.right.style[k]=p[o]+"px",i.right.style[l]=p[l]-c+1+"px",i.right.style[m]=p[m]+"px",i.leftTop.style[j]=p[n]+"px",i.leftTop.style[k]=p[o]+(g&&"right"===h||!g&&"top"!==h?0:p[m])+"px",i.leftTop.style[l]=b+"px",i.leftTop.style[m]="1px",i.rightTop.style[j]=p[n]+c+"px",i.rightTop.style[k]=p[o]+(g&&"right"===h||!g&&"top"!==h?0:p[m])+"px",i.rightTop.style[l]=p[l]-c+1+"px",i.rightTop.style[m]="1px",i.leftBorder.style[j]=p[n]+b+"px",i.leftBorder.style[k]=p[o]+"px",i.leftBorder.style[l]="1px",i.leftBorder.style[m]=p[m]+"px";let q=p[m]/4;20<q&&(q=20),3>q&&(q=3),i.leftBar.style[j]=p[n]+b-3+"px",i.leftBar.style[k]=p[o]+p[m]/2-q/2+"px",i.leftBar.style[l]="5px",i.leftBar.style[m]=q+"px",i.rightBorder.style[j]=p[n]+c+"px",i.rightBorder.style[k]=p[o]+"px",i.rightBorder.style[l]="1px",i.rightBorder.style[m]=p[m]+"px",i.rightBar.style[j]=p[n]+c-3+"px",i.rightBar.style[k]=p[o]+p[m]/2-q/2+"px",i.rightBar.style[l]="5px",i.rightBar.style[m]=q+"px"},Smart.Chart.prototype._resizeState={},Smart.Chart.prototype._onSliderMouseDown=function(a){a.stopImmediatePropagation(),a.stopPropagation();const b=this,c=b._sliders[b._rangeSelectorEventData.groupIndex];c&&((void 0===b._resizeState.state||null===b._resizeState.state)&&b._testAndSetReadyResize(a),"ready"!==b._resizeState.state||(b._draggingRangeSelector=!0,b._resizeState.state="resizing"))},Smart.Chart.prototype._valueToOffset=function(a,b){const c=this.seriesGroups[a],d=this._sliders[a],e=d.host,f=e._renderData[0].xAxis,g=f.data.axisStats,h=g.min.valueOf(),i=g.max.valueOf();let j=i-h;0==j&&(j=1);const k=this._getXAxis(a),l="horizontal"===c.orientation?"height":"width",m=(b.valueOf()-h)/j;return d.getRect()[l]*(k.flip?1-m:m)},Smart.Chart.prototype._offsetToValue=function(b,c){const d=this._sliders[b],e=this.seriesGroups[b],f=this._getXAxis(b),g="horizontal"===e.orientation?"height":"width";let h=d.getRect()[g];0===h&&(h=1);const i=d.host,j=i._renderData[0].xAxis,k=j.data.axisStats,l=k.min.valueOf(),m=k.max.valueOf();let n=c/h*(m-l)+l;return!0===f.flip&&(n=m-c/h*(m-l)),this._isDate(k.min)||this._isDate(k.max)?n=new Date(n):((void 0===f.dataField||null===f.dataField||k.useIndeces)&&(n=a(n)),n<k.min&&(n=k.min),n>k.max&&(n=k.max)),n},Smart.Chart.prototype._onSliderMouseUp=function(a){const b=this,c=b._rangeSelectorEventData.groupIndex,d=b._rangeSelectorEventData.swapXY,e=b._sliders[c];if(delete b._draggingRangeSelector,!e)return;if("resizing"!==b._resizeState.state)return;a.stopImmediatePropagation(),a.stopPropagation(),b._resizeState={},b.style.cursor="default";const f=d?"top":"left",g=d?"y":"x",h=e.element.getBoundingClientRect()[f],i=h+(d?e.element.offsetHeight:e.element.offsetWidth),j=e.getRect();let k=b._offsetToValue(c,h-j[g]),l=b._offsetToValue(c,i-j[g]);const m=e.host,n=m._renderData[0].xAxis,o=n.data.axisStats;!o.isTimeUnit&&864e5<l.valueOf()-k.valueOf()&&(k.setHours(0,0,0,0),l.setDate(l.getDate()+1),l.setHours(0,0,0,0));const p=b._getXAxis(c);if(p.flip){const a=k;k=l,l=a}for(let c=0;c<b.seriesGroups.length;c++){const a=b._getXAxis(c);a===p&&(b._selectorRange[c]={min:k,max:l})}b._isSelectorRefresh=!0;const q=b.animation;b.$.fireEvent("rangeSelectionChanging",{instance:b,minValue:k,maxValue:l}),b.animation="none",b.update(),b.animation=q,b.$.fireEvent("rangeSelectionChanged",{instance:b,minValue:k,maxValue:l})},Smart.Chart.prototype._onSliderMouseMove=function(c){const d=this,e=d._rangeSelectorEventData.groupIndex,f=d._sliders[e],g=d._rangeSelectorEventData.swapXY;if(!f)return;const h=f.getRect(),i=f.element,j={left:c.clientX,top:c.clientY},k=i.getBoundingClientRect(),l=g?"top":"left",m=parseFloat(getComputedStyle(i)[l]),n=g?"height":"width",o=g?"y":"x";if("resizing"===d._resizeState.state){if(c.stopImmediatePropagation(),c.stopPropagation(),"left"===d._resizeState.side){let c=a(j[l]-k[l]),d=h[o];if(k[l]+c>=d&&k[l]+c<=d+h[n]){let a=parseInt(m),d=b(2,(g?i.offsetHeight:i.offsetWidth)-c);i.style[n]=d+"px",i.style[l]=a+c+"px"}}else if("right"===d._resizeState.side){let c=g?i.offsetHeight:i.offsetWidth,d=a(j[l]-k[l]-c),e=h[o];if(k[l]+c+d>=e&&k[l]+d+c<=e+h[n]){let a=b(2,c+d);i.style[n]=a+"px"}}else if("move"===d._resizeState.side){let b=g?i.offsetHeight:i.offsetWidth,c=parseInt(m),e=a(j[l]-d._resizeState.startPos);k[l]+e>=h[o]&&k[l]+e+b<=h[o]+h[n]&&(d._resizeState.startPos=j[l],i.style[l]=c+e+"px")}const p=parseInt(m)-f.rect[o],q=p+(g?i.offsetHeight:i.offsetWidth);d._setSliderPositions(e,p,q)}else d._testAndSetReadyResize(c)},Smart.Chart.prototype._testAndSetReadyResize=function(a){var b=Math.abs;const c=this,d=c._rangeSelectorEventData,e=d.renderTo,f=d.groupIndex,g=c._sliders[f],h=d.swapXY,i=g.getRect(),j=g.element,k={left:a.clientX,top:a.clientY},l=j.getBoundingClientRect(),m=h?"left":"top",n=h?"top":"left",o=h?"width":"height",p=c._isTouchDevice?30:5;k[m]>=l[m]&&k[m]<=l[m]+i[o]?b(k[n]-l[n])<=p?(e.style.cursor=h?"row-resize":"col-resize",c._resizeState={state:"ready",side:"left"}):b(k[n]-l[n]-(h?j.offsetHeight:j.offsetWidth))<=p?(e.style.cursor=h?"row-resize":"col-resize",c._resizeState={state:"ready",side:"right"}):k[n]+p>l[n]&&k[n]-p<l[n]+(h?j.offsetHeight:j.offsetWidth)?(e.style.cursor="pointer",c._resizeState={state:"ready",side:"move",startPos:k[n]}):(e.style.cursor="default",c._resizeState={}):(e.style.cursor="default",c._resizeState={})},Smart.Chart.prototype._selectorGetSize=function(a){return a.rangeSelector.renderTo?0:a.rangeSelector.size||this._paddedRect.height/3})})();