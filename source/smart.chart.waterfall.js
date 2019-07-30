
/* Smart HTML Elements v4.0.0 (2019-Aug) 
Copyright (c) 2011-2019 jQWidgets. 
License: https://htmlelements.com/license/ */

(function(){"use strict";Smart.Chart&&(Smart.Chart.prototype._moduleWaterfall=!0,Smart.Chart.prototype._isSummary=function(a,b){const c=this.seriesGroups[a];for(let d=0;d<c.series.length;d++){if(void 0===c.series[d].summary)continue;const e=this._getDataValue(b,c.series[d].summary,a);if(void 0!==e)return!0}return!1},Smart.Chart.prototype._applyWaterfall=function(a,b,c,d,e,f,g,h,l){const i=this.seriesGroups[c];if(0===a.length)return a;let m=d;const n={},o=[];let p;const q=[];for(let k=0;k<i.series.length;k++)q.push(this._isSerieVisible(c,k));const r={};for(let s=0;s<b;s++){let b=d,i=0;const t=this._isSummary(c,s);for(let c=0;c<a.length;c++){if(!q[c])continue;let j=0;if(t){j=b===d?e:0,a[c][s].value=n[c],a[c][s].summary=!0,p=a[c][s].value<j,h&&(p=!p);let k=0;k=isNaN(f)?this._getDataPointOffsetDiff(a[c][s].value,j,j,NaN,g,d,h):this._getDataPointOffsetDiff(a[c][s].value+i,0===i?e:i,j||e,f,g,d,h),a[c][s].to=b+(p?k:-k),a[c][s].from=b,l&&(i+=a[c][s].value,b=a[c][s].to);continue}const u=l?-1:c;if(isNaN(a[c][s].value))continue;void 0===r[u]&&(j=e,r[u]=!0),p=a[c][s].value<j,h&&(p=!p);let k=NaN;k=l?m:0==s?d:a[c][o[c]].to;let v=0;v=isNaN(f)?this._getDataPointOffsetDiff(a[c][s].value,j,j,NaN,g,d,h):this._getDataPointOffsetDiff(a[c][s].value+(isNaN(n[u])?0:n[u]),isNaN(n[u])?e:n[u],j||e,f,g,k,h),a[c][s].to=m=k+(p?v:-v),a[c][s].from=k,isNaN(n[u])?n[u]=a[c][s].value:n[u]+=a[c][s].value,-1==u&&(isNaN(n[c])?n[c]=a[c][s].value:n[c]+=a[c][s].value),l||(o[c]=s)}}return a})})();