
/* Smart HTML Elements v3.2.0 (2019-June) 
Copyright (c) 2011-2019 jQWidgets. 
License: https://htmlelements.com/license/ */

class DataAdapter{constructor(e){e||(e={});const a=Object.assign(this,e);if(a.key=function(){return function(){return(0|65536*(1+Math.random())).toString(16).substring(1)}()}(),a.$document=Smart.Utilities.Extend(document),a.boundSource=!1===a.observable?[]:new Smart.ObservableArray,a.dataItemById=[],void 0===a.allowAdd&&(a.allowAdd=!0),void 0===a.allowRemove&&(a.allowRemove=!0),void 0===a.allowUpdate&&(a.allowUpdate=!0),void 0===e.observable&&(a.observable=!0),e.dataSource||(a.dataSource=[]),e.dataFields||(a.dataFields=[]),e.dataSourceType||(a.dataSourceType="array"),e.id||(a.id=null),a.dataFields){let e=[];if("number"==typeof a.dataFields)for(let t=0;t<a.dataFields;t++)e.push({name:t,dataType:"string"});else for(let t=0;t<a.dataFields.length;t++){const d=a.dataFields[t];if("string"==typeof d){const a=d.split(":"),t=a[0].trim(),n=1<a.length?a[1].trim():"string";e.push({name:t,dataType:n})}else e.push(d)}a.dataFields=e}e&&!1!==e.autoBind&&a.dataBind(),a.isInitialized=!0}get dataSource(){const e=this;return e._dataSource||(e._dataSource=[]),e._dataSource}set dataSource(e){const a=this;a._dataSource=e,a.isInitialized&&(a.boundSource=!1===a.observable?[]:new Smart.ObservableArray,a.dataItemById=[],a.bindingCompleted=!1,a.dataBind())}get canNotify(){const e=this;return void 0===e._canNotify&&(e._canNotify=!0),e._canNotify}set canNotify(e){const a=this;a._canNotify=e}_notify(e){const a=this;!a.canNotify||a.notifyFn&&a.notifyFn(e)}notify(e){const a=this;e&&(a.notifyFn=e)}toArray(){const e=this;return e.boundSource.toArray()}dataBind(){const e=this;e.clear(),"array"===e.dataSourceType&&(e._bindToArray(),e.boundSource.notify(function(a){if("update"===a.action&&a.path&&0<=a.path.indexOf(".")&&-1===a.path.indexOf("children")&&-1===a.path.indexOf("loaded")&&-1===a.path.indexOf("level")&&-1===a.path.indexOf("leaf")&&-1===a.path.indexOf("expanded")){let t=!1;for(let d=0;d<e.dataFields.length;d++){const n=e.dataFields[d].name;0<=a.path.indexOf(n)&&(t=!0)}e._notify&&t&&e._notify({action:"update",data:a.target,index:a.index})}}),!e.groupBy&&(e.groupBy=[]),e.groupBy=new Smart.ObservableArray(e.groupBy),e.groupBy.notify(function(){e.boundHierarchy=null,e.refreshHierarchy(),e.onGroup&&e.onGroup()}),e._onBindingComplete())}_onBindingComplete(){const e=this;e._buildHierarchy(),e.onBindingComplete&&e.onBindingComplete({data:e.boundSource}),e._notify&&e._notify({action:"bindingComplete",data:e.boundSource}),e.bindingCompleted=!0}refreshHierarchy(){const e=this;e._buildHierarchy()}find(){const e=this;return e.boundSource.find(arguments)}toArray(){const e=this;return e.boundSource.toArray()}onVirtualDataSourceRequested(e,a){const t=this;let d=a?a.first:1/0,n=a?a.last:1/0,i=a?a.row:null;if(void 0===d&&(d=1/0),void 0===n&&(n=1/0),t.virtualFirstIndex=d,t.virtualLastIndex=n,t.virtualDataSource){const r=function(r){r.virtualDataSourceLength&&(t.virtualDataSourceLength=r.virtualDataSourceLength),new Smart.DataAdapter({dataSource:r.dataSource,dataFields:r.dataFields||t.dataFields,data:a,onBindingComplete(a){if(t.virtualDataSourceOnExpand&&i)return a.data&&0<a.data.length?t.add(a.data,i.$.id):i.leaf=!0,t.onFilter&&t.onFilter(),void e();if(d===1/0)t.add(a.data);else{let e=[],r=[];for(let t=0;t<a.data.length;t++){const i=a.data[t];d+t<=n&&(e.push(i),r.push(d+t))}t.update(r,e)}t.onFilter&&t.onFilter(),e()}})};let l=!1;const o=e=>0===Object.entries(e).length&&(e.constructor===Object||e.constructor===Array),u=o(a.sorting)&&o(a.filtering)&&o(a.grouping)&&!a.row&&"filter"!==a.action&&"sort"!==a.action&&"group"!==a.action;if(t.virtualDataSourceCache&&d!==1/0&&u){let e=0;for(let a=d;a<n;a++)t[a].isEmpty||e++;e==n-d&&(l=!0)}l?e():"expand"===a.action?t.virtualDataSourceOnExpand(r,{first:d,last:n,row:a.row,sorting:a.sorting,filtering:a.filtering,grouping:a.grouping,action:a.action}):t.virtualDataSource(r,{first:d,last:n,sorting:a.sorting,filtering:a.filtering,grouping:a.grouping,action:a.action})}else e()}add(e,a){const t=this;if(!e)return;let d=!0;const n=function(e){const n=t._getDataItem(e,t.boundSource.length);t[t.boundSource.length]=n,t.dataItemById[n.$.id]=n;const i=t.boundSource.push(n);return void 0!==a&&(n.$.parentId=a),i||(d=!1),n};if(e.length){let a=[];for(let t=0;t<e.length;t++){const d=n(e[t]);a.push(d)}t._notify({action:"add",data:a})}else{const a=n(e);t._notify({action:"add",data:a})}return t.refreshHierarchy(),d}removeLast(){const e=this,a=e.boundSource.pop();return e._notify({action:"removeLast",data:a}),e.refreshHierarchy(),a}remove(e){const a=this,t=a.boundSource[e];if(!t)throw new Error("Invalid Item Index");a.boundSource.splice(e,1),a._notify({action:"remove",index:e,data:t}),a.refreshHierarchy()}update(e,a){const t=this;if(!(Smart.Utilities.Types.isArray(e)&&Smart.Utilities.Types.isArray(a)&&0===e.length&&0===a.length)){if(a.length&&e.length){let d=[];for(let n=0;n<e.length;n++){const i=t._getDataItem(a[n],e[n]),r=e[n];d.push(i),t.boundSource[r]=i,t[r]=t.boundSource[r],t.dataItemById[i.$.id]=t[r]}return t._notify({action:"update",index:e,data:d}),void t.refreshHierarchy()}const d=t._getDataItem(a,e);return t.boundSource[e]=d,t[e]=t.boundSource[e],t.dataItemById[d.$.id]=t[e],t._notify({action:"update",index:e,data:d}),t.refreshHierarchy(),d}}insert(e,a){const t=this,d=t.boundSource.splice(e,0,a);return t._notify({action:"insert",index:e,data:a}),t.refreshHierarchy(),d}indexOf(e){const a=this,t=a.boundSource.indexOf(e);return t}get length(){const e=this;return e.virtualDataSourceLength?e.virtualDataSourceLength:"number"==typeof e.dataSource?e.dataSource:e.bindingCompleted?e.boundSource.length:e.dataSource&&e.dataSource.length?e.dataSource.length:e.boundSource.length}clear(){const e=this;if(!e.isInitialized)return e._cachedValues=[],void(e.dataItemById=[]);for(let a=0;a<e.boundSource.length;a++)delete e[a];e._cachedValues=[],e.boundSource=e.observable?new Smart.ObservableArray:[],e.dataItemById=[],e.refreshHierarchy()}_getId(e,a,t){if(null!==e&&e.name!==void 0&&e.name&&a.getAttribute){let d=a.getAttribute(e.name);if(null!==d&&0<d.toString().length)return d;if(e.map)try{let t=a.getAttribute(e.map);if(null!==t&&0<t.toString().length)return t}catch(e){return t}return}if(e&&0<e.toString().length&&a.getAttribute){let t=a.getAttribute(e);if(null!==t&&0<t.toString().length)return t.trim().split(" ").join("").replace(/([ #;?%&,.+*~\':'!^$[\]()=>|\/@])/g,"");else{let t=e.split(this.mapChar);if(1<t.length){let e=a;for(let a=0;a<t.length;a++)void 0!==e&&(e=e[t[a]]);if(void 0!==e)return e}else if(void 0!==a[e])return a[e]}}return t}_buildHierarchy(){const e=this;if(!e.reservedNames)e.reservedNames={leaf:"leaf",parent:"parent",expanded:"expanded",checked:"checked",selected:"selected",level:"level",icon:"icon",data:"data"};else{const a=e.reservedNames;a.leaf||(a.leaf="leaf"),a.parent||(a.parent="parent"),a.expanded||(a.expanded="expanded"),a.checked||(a.checked="checked"),a.selected||(a.selected="selected"),a.level||(a.level="level"),a.data||(a.data="data")}const a=e.reservedNames;if(e.childrenDataField){const t=[];for(let d=0;d<e.boundSource.length;d++){const n=Object.assign({},e.boundSource[d]);if(!n)continue;t.push(n);const r=function(t){const d=e.childrenDataField.split(e.mapChar);let n=null;if(1<d.length){let e=t;for(let a=0;a<d.length;a++)void 0!==e&&(e=e[d[a]]);n=e}else n=t.children;t.children=n,(null===t.children||void 0===t.children||t.children&&0===t.children.length)&&(t[a.leaf]=!0)};r(n),n[a.level]=0,n.$||(n.$={}),n[a.parent]=null,n[a.data]=n,void 0===n[a.expanded]&&(n[a.expanded]=!1);const l=function(t,d){if(!d)return void(t.children=[]);for(let n,o=0;o<d.length;o++)(n=e._getDataItem(d[o],o),!!n)&&(r(n),n[a.level]=t[a.level]+1,n[a.parent]=t,n[a.data]=n,t&&(t.children[o]=n),void 0===n[a.expanded]&&(n[a.expanded]=!1),l(n,n.children))};l(n,n.children)}if(e.boundHierarchy=t,!e._boundSourceUpdate){for(let a=0;a<e.boundHierarchy.length;a++){const t=e.boundHierarchy[a];if(t.children){const a=function(t){if(e.dataItemById[t.$.id]||(e.boundSource.canNotify=!1,e.dataItemById[t.$.id]=t,e[e.boundSource.length]=t,e.boundSource.push(t),e.boundSource.canNotify=!0),t.children)for(let e=0;e<t.children.length;e++){const d=t.children[e];d.children&&a(d)}};a(t)}}e._boundSourceUpdate=!0}}e.xmlRoot&&"xml"===e.dataSourceType&&(e.boundHierarchy=this._getHierarchy("uid","_parentuid","children",null,e.boundSource)),e.keyDataField&&e.parentDataField&&(e.boundHierarchy=this._getHierarchy(e.keyDataField,e.parentDataField,"children",null,e.boundSource)),e.groupBy&&0<e.groupBy.length&&(e.boundHierarchy=this._getGroupHierarchy(e.groupBy,"children","label",null,"data",null,"parent",e.boundSource)),e.virtualDataSourceOnExpand&&(e.boundHierarchy=this._getHierarchy("id","parentId","children",null,e.boundSource))}_getGroupHierarchy(e,a,t,d,n,i,r,l,o){let u=this;o||(o=0);let c=u.reservedNames;const p=function(){function e(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()};let h=[];for(let u=0;u<e.length;u++)h[u]=p();a||(a="children"),t||(t="group"),n||(n="item"),r||(r="parent"),void 0===i&&(i="value");const s=[],m=[];let g=0;const f=function(e){let a=e;if(d)for(let e in d){const t=d[e];t.name&&t.map&&(a[t.map]=a[t.name])}return a};for(let u,y=0;y<l.length;y++){u=Object.assign({},f(l[y])),u[c.leaf]=!1;let d=[],b=0;for(let a=0;a<e.length;a++){const t=e[a],n=u[t];null!==n&&(d[b++]={value:n,group:t,hash:h[a]})}if(d.length!==e.length)break;let F=null,S="";for(let e=0;e<d.length;e++){const l=d[e].value,p=d[e].group,h=d[e].hash;if(S=S+"_"+h+"_"+l,void 0!==m[S]&&null!==m[S]){F=m[S];continue}if(null===F){F={$:{}},F[c.level]=0,F[c.leaf]=!1,F[r]=null,F[t]=l,F[n]=u,F.groupDataField=p,F[c.expanded]=void 0!==u[c.expanded]&&u[c.expanded],i&&(F[i]=u[i]),F[a]=[];let e=s.length+o;(!this.id||"number"==typeof u.$.id||isFinite(u.$.id))&&(e="Item"+e),void 0===F.$.id&&(F.$.id=e),s[g++]=F}else{const e={$:{}};e[c.level]=F[c.level]+1,e[r]=F,e[t]=l,e[a]=[],e[n]=u,e.groupDataField=p,e[c.leaf]=!1,e[c.expanded]=void 0!==u[c.expanded]&&u[c.expanded],i&&(e[i]=u[i]),void 0===e.$.id&&(e.$.id=F.$.id+"_"+F[a].length),F[a][F[a].length]=e,F=e}m[S]=F}u&&(u[c.leaf]=!0),null===F?void 0===u.$.id&&(u.$.id=p()):(null===this.id?void 0===u.$.id&&(u.$.id=F.$.id+"_"+F[a].length):void 0===u.$.id&&-1===u.$.id.toString().indexOf(F.$.id)&&(u.$.id=F.$.id+"_"+u.$.id),u[r]=F,u[c.level]=F[c.level]+1,F[a][F[a].length]=u)}return s}_getHierarchy(e,a,t,d,n){const r=this,i=[];let l=this.boundSource;if(n&&(l=n),0===this.boundSource.length)return null;const o=null===t?"children":t;let u=[],c=l,p=c.length,h=r.reservedNames;const s=function(e){let a=e;if(d)for(let e in d){const t=d[e];t.name&&t.map&&(a[t.map]=a[t.name])}return a};for(let r=0;r<p;r++){let t=c[r],d=t[a],n=t[e];"parentId"===a&&(d=t.$.parentId),"id"===e&&(n=t.$.id),t[o]=[],u[n]={parentId:d,item:t}}for(let r=0;r<p;r++){const t=c[r];let d=t[a],n=t[e];if("parentId"===a&&(d=t.$.parentId),"id"===e&&(n=t.$.id),void 0!==u[d]){let e={parentId:d,item:u[n].item},a=u[d].item;a[o]||(a[o]=[]);let t=a[o].length;e=e.item,h?void 0===e[h.parent]&&(e[h.parent]=a):void 0===e.parent&&(e.parent=a);const i=s(e);a[o][t]=i,u[d].item=a,u[n].item=e}else{let e=u[n].item;h?void 0===e[h.parent]&&(e[h.parent]=null):void 0===e.parent&&(e.parent=null);const a=s(e);h?a[h.level]=0:a.level=0,i[i.length]=a}}if(0!==i.length){let e=function(a,t){for(let d=0;d<t.length;d++){const n=t[d];h?n[h.level]=a:n.level=a;const i=n[o];i?0<i.length?e(a+1,i):r.virtualDataSourceOnExpand?void 0===n.leaf&&(n.leaf=!1):h?n[h.leaf]=!0:n.leaf=!0:r.virtualDataSourceOnExpand?void 0===n.leaf&&(n.leaf=!1):h?n[h.leaf]=!0:n.leaf=!0}};e(0,i)}return i}summarize(e,a){const t=this;Array.isArray(e)||(e=[e]);let d=[];for(let t=0;t<e.length;t++){const a=e[t];for(let e in a){const t=a[e];d.push({dataField:e,functions:t})}}e=d;let n={},r=[];a||(a=t.boundSource);let l=a.length;if(0!==l&&void 0!==l){for(let t,d=0;d<l;d++){t=a[d];for(let a=0;a<e.length;a++){const i=e[a];let l=t[i.dataField];if(i.functions){n[i.dataField]=n[i.dataField]||{},r[i.dataField]=r[i.dataField]||0,r[i.dataField]++;const e=function(e){for(let a in e){let d=n[i.dataField][a];(null===d||void 0===d)&&(n[i.dataField][a]=0,d=0),"function"==typeof e[a]&&(d=e[a](d,l,i.dataField,t)),n[i.dataField][a]=d}};let a=parseFloat(l);a=!isNaN(a),a&&(l=parseFloat(l)),"number"==typeof l&&isFinite(l)?i.functions.forEach(function(a){let t=n[i.dataField][a];if((null===t||void 0===t)&&(t=0,"min"===this&&(t=9999999999999),"max"===this&&(t=-9999999999999)),"sum"===a||"avg"===a||"stdev"===a||"stdevp"===a||"var"===a||"varp"===a)t+=parseFloat(l);else if("product"===a)0==d?t=parseFloat(l):t*=parseFloat(l);else if("min"===a)t=Math.min(t,parseFloat(l));else if("max"===a)t=Math.max(t,parseFloat(l));else if("count"===a)t++;else if("object"==typeof a)return void e(a);n[i.dataField][a]=t}):i.functions.forEach(function(a){if("min"===a||"max"===a||"count"===a||"product"===a||"sum"===a||"avg"===a||"stdev"===a||"stdevp"===a||"var"===a||"varp"===a){if(null===l)return!0;let e=n[i.dataField][a];return(null===e||void 0===e)&&(e=0),n[i.dataField][a]=e,!0}"object"==typeof a&&e(a)})}}}for(let t=0;t<e.length;t++){const d=e[t];if(d.functions){if(n[d.dataField]||(n[d.dataField]={},d.functions.forEach(function(e){n[d.dataField][e]=0})),void 0!==n[d.dataField].avg){const e=n[d.dataField].avg,a=r[d.dataField];n[d.dataField].avg=0===a||void 0===a?0:e/a}else void 0!==n[d.dataField].count&&(n[d.dataField].count=l);(n[d.dataField].stdev||n[d.dataField].stdevp||n[d.dataField]["var"]||n[d.dataField].varp)&&d.functions.forEach(function(e){if("stdev"===e||"var"===e||"varp"===e||"stdevp"===e){const t=n[d.dataField][e],i=l,r=t/l;let o=0;for(let e=0;e<l;e++){let t=a[e],n=t[d.dataField];o+=(n-r)*(n-r)}let u="stdevp"===e||"varp"===e?i:i-1;0===u&&(u=1),"var"===e||"varp"===e?n[d.dataField][e]=o/u:("stdevp"===e||"stdev"===e)&&(n[d.dataField][e]=Math.sqrt(o/u))}})}}return n}}_getDataItem(e,a){const t=this,d={},n="number"==typeof t.dataSource;if(!e)return{$:{id:a},isEmpty:!0,index:a};if(n){for(let e=0;e<t.dataFields.length;e++){const a=t.dataFields?t.dataFields[e]:{};d[a.name]=""}return d.$={},d.$.id=a,d.$.index=a,d}const i=e;void 0!==i.expanded&&(d.expanded=i.expanded,d.expanded="true"===i.expanded||!0===i.expanded||1===i.expanded),t.childrenDataField?void 0!==i[t.childrenDataField]&&(d.children=i[t.childrenDataField]):void 0===i.children?void 0!==i.items&&(d.children=i.items):d.children=i.children,void 0!==i.leaf&&(d.leaf=i.leaf),void 0!==i.level&&(d.level=i.level),t.keyDataField&&void 0!==i[t.keyDataField]&&(d[t.keyDataField]=i[t.keyDataField]),t.parentDataField&&void 0!==i[t.parentDataField]&&(d[t.parentDataField]=i[t.parentDataField]);for(let n=0;n<t.dataFields.length;n++){const a=t.dataFields?t.dataFields[n]:{};let r="";if(void 0===a||null===a)continue;if(a.map){let e=a.map.split(t.mapChar);if(0<e.length){let a=i;for(let t=0;t<e.length;t++)i&&(a=a[e[t]]);r=a}else r=i[a.map]}void 0!==r&&null!==r?r=r.toString():void 0===r&&null!==r&&(r="");let l=!1;""===r&&(l=!0,r=e[a.name],void 0!==r&&null!==r?"array"!==a.dataType&&"date"!==a.dataType&&(r=r.toString()):r=""),"[object Object]"===r&&a.map&&l&&(r=""),t._cachedValues[""+r+"_"+a.dataType]?r=t._cachedValues[""+r+"_"+a.dataType]:("bool"===a.dataType||"boolean"===a.dataType?"true"===r||"1"===r?r=!0:("false"===r||"0"===r)&&(r=!1):r=t.$document.deserialize(""+r,a.dataType,!0),t._cachedValues[r+"_"+a.dataType]=r),"string"!==a.dataType&&"boolean"!==a.dataType&&"bool"!==a.dataType&&(isNaN(r)||r===-Infinity||r===1/0)&&(r=0),d[a.name]=r}let r=a;return t.id&&(r=i[t.id],"object"==typeof r&&(r=a)),d.$||(d.$={}),d.$.id=r,d.$.index=a,Object(d)}_bindToArray(){const e=this,a="number"==typeof e.dataSource,t=[];e.boundSource.canNotify=!1;for(let d=0;d<e.length;d++){const n=a?{}:e.dataSource[d],i=e._getDataItem(n,d);t.push(i)}e.boundSource=!1===e.observable?t:new Smart.ObservableArray(t);for(let a=0;a<e.length;a++)e[a]=e.boundSource[a],e.dataItemById[e[a].$.id]=e[a];e.boundSource.canNotify=!0}sortBy(e,a,t){const d=this;if(!a)for(let t=0;t<d.dataFields.length;t++){const n=d.dataFields[t];if(n.name===e){a=n.dataType;break}}if(d.boundHierarchy){const n=function(r){d._sort(r,e,t,a);for(let d=0;d<r.length;d++){const i=r[d];i.children&&n(i.children,e,t,a)}};n(d.boundHierarchy)}else d._sort(d.boundSource,e,t,a)}_createFilter(e,a){const t={"=":"EQUAL","<>":"NOT_EQUAL","<":"LESS_THAN",">":"GREATER_THAN","<=":"LESS_THAN_OR_EQUAL",">=":"GREATER_THAN_OR_EQUAL",equal:"EQUAL","not equal":"NOT_EQUAL","less than":"LESS_THAN","greater than":"GREATER_THAN","greater than or equal":"GREATER_THAN_OR_EQUAL","less than or equal":"LESS_THAN_OR_EQUAL","starts with":"STARTS_WITH","ends with":"ENDS_WITH",null:"null","":"EMPTY",isblank:"EMPTY",isnotblank:"NOT_EMPTY",contains:"CONTAINS",notcontains:"DOES_NOT_CONTAIN",startswith:"STARTS_WITH",endswith:"ENDS_WITH",NULL:"NULL",NOT_NULL:"NOT_NULL"};let d=[];for(let t=0;t<a.length;t++){const e=a[t],n=-1===e.indexOf("\"")?e.split(" "):e.split("\"");let i=[];for(let e=0;e<n.length;e++){const a=n[e];""!==a&&i.push(a.trim())}d.push(i)}const n=new Smart.FilterGroup,r=[],l=[];for(let n=0;n<d.length;n++){const a=d[n];if(1<a.length){const d=new Smart.FilterGroup;let n="and",i=0;for(let r=0;r<a.length;r++){const l=a[r];if("and"===l||"or"===l){n=l;continue}if(i++,2===i){const o=d.createFilter(e,l,t[a[r-1]]);i=0,n&&d.addFilter(n,o)}}l.push(d)}else{const e=a[0];if("and"!==e&&"or"!==e)throw new Error("Filter Exprresion expects \"AND\" or \"OR\", but the token is: "+e);r.push(e)}}let o=0;if(1===l.length)return l[0];for(let t,d=0;d<l.length;d++)t=r[o],0==(d+1)%2&&o++,t||(t="and"),n.addFilter(t,l[d]);return n}filterBy(e,...a){const t=this,d=(()=>{for(let a=0;a<t.dataFields.length;a++){const d=t.dataFields[a];if(d.name===e)return d.dataType}})(),n=t._createFilter(d,a);let i=t.boundSource.filter(a=>{const t=n.evaluate(a[e]);return t});return i}_filter(e){const a=this,t=[],d=[];if(0===e.length)return void a.clearFilter();const n=e=>{for(let t=0;t<a.dataFields.length;t++){const d=a.dataFields[t];if(d.name===e)return d.dataType}};for(let r=0;r<e.length;r++){const i=e[r],l=i[0];let o=null;o=i[1]instanceof Smart.FilterGroup?i[1]:a._createFilter(n(l),i.splice(1)),o&&(d.push(l),o.dataField=l,t.push(o))}if(a.boundHierarchy){const e=function(e){let a=!0;for(let d=0;d<t.length;d++){const n=t[d];a=a&&n.evaluate(e[n.dataField])}return e.$.filtered=a,a},d=function(t,n,i){let r=0;for(let a=0;a<t.length;a++){const i=t[a];e(i),i.$.filtered&&r++,i.children&&d(i.children,i,n)}0<r&&0<a.groupBy.length&&n?(n.$.filtered=!0,i&&!i.$.filtered&&(i.$.filtered=!0)):0<r&&r!==t.length&&n&&(n.$.filtered=null,i&&!i.$.filtered&&(i.$.filtered=null))};d(a.boundHierarchy,null,null)}else for(let e=0;e<a.boundSource.length;e++){const d=a.boundSource[e];let n=!0;for(let e=0;e<t.length;e++){const a=t[e];n=n&&a.evaluate(d[a.dataField])}d.$.filtered=n}a.onFilter&&a.onFilter()}clearGroup(){const e=this;e.groupBy=[],e.boundHierarchy=null,e.refreshHierarchy(),e.onGroup&&e.onGroup()}clearFilter(){const e=this;for(let a=0;a<e.boundSource.length;a++){const t=e.boundSource[a];t.$.filtered=!0}if(e.boundHierarchy){const a=function(e,t,d){let n=0;for(let r=0;r<e.length;r++){const d=e[r];d.$.filtered=!0,d.$.filtered&&n++,d.children&&a(d.children,d,t)}t&&(t.$.filtered=!0,d&&!d.$.filtered&&(d.$.filtered=!0))};a(e.boundHierarchy,null,null)}e.onFilter&&e.onFilter()}clearSort(){const e=this;e._sort(e.boundSource,[],[],[])}_sort(e,t,a,d,n){const r=this;let i=!1;if(0===e.length)return;if(e&&e.constructor&&"ObservableArray"===e.constructor.name&&(i=!0),(!e||!Array.isArray(e)||0===e.length||!t||Array.isArray(t)&&0===t.length)&&!i&&!r.boundHierarchy)throw new Error("sort: Missing or Invalid arguments!");"string"==typeof t&&(t=[t]);const l=[],o=[];void 0===a&&(a=[]);const u=function(e,a){let t;switch(a||typeof e){case"string":t=new Intl.Collator().compare;break;case"number":t=function(e,a){return e-a};break;case"boolean":t=function(e,a){return e===a?0:!1===e?-1:1};break;case"date":case"time":case"dateTime":e instanceof Date?t=function(e,a){return e.getTime()-a.getTime()}:(e instanceof Smart.Utilities.DateTime||e instanceof Smart.Utilities.BigNumber)&&(t=function(e,a){return e.compare(a)});break;case"object":if(e instanceof Date)t=function(e,a){return e.getTime()-a.getTime()};else if(e instanceof Smart.Utilities.DateTime||e instanceof Smart.Utilities.BigNumber)t=function(e,a){return e.compare(a)};else if(e instanceof Smart.Utilities.Complex||window.NIComplex&&e instanceof window.NIComplex){const e=new Smart.Utilities.ComplexNumericProcessor;t=function(t,a){return e.compareComplexNumbers(t,a)}}}return t};for(let r=0;r<t.length;r++){l[r]=void 0===a[r]||"asc"===a[r]||"ascending"===a[r]?1:-1;const n=e[0][t[r]];o[r]=u(n,d[r])}if(n)return void n(e,t,a,o);e.sort(function(e,a){for(let d=0;d<t.length;d++){const n=o[d](e[t[d]],a[t[d]]);if(0===n){if(t[d+1])continue;else if(void 0!==e._index)return(e._index-a._index)*l[d];return 0}return n*l[d]}if(0===t.length)return e.$.index<a.$.index?-1:e.$.index>a.$.index?1:0});for(let l=0;l<e.length;l++)r[l]=e[l]}static Filter(e,a,t,d){const n=e.filter(e=>{let n=!0;for(let r=0;r<t.length;r++){const i=t[r],l=a[r];n=d?n&&d(e,l,i):n&&i.evaluate(e[l])}return n});return n}filter(e,a,t){Smart.DataAdapter.Filter(this.boundSource,e,a,t)}sort(e,a,t){Smart.DataAdapter.Sort(this.boundSource,e,a,t)}static Sort(e,t,a,d){const n=function(e){let a;switch(typeof e){case"string":a=new Intl.Collator().compare;break;case"number":a=function(e,a){return e-a};break;case"boolean":a=function(e,a){return e===a?0:!1===e?-1:1};break;case"object":if(e instanceof Date)a=function(e,a){return e.getTime()-a.getTime()};else if(e instanceof Smart.Utilities.DateTime||e instanceof BigNumberNG)a=function(e,a){return e.compare(a)};else if(e instanceof Smart.Utilities.Complex||window.NIComplex&&e instanceof window.NIComplex){const e=new Smart.Utilities.ComplexNumericProcessor;a=function(t,a){return e.compareComplexNumbers(t,a)}}}return a};if(!e||!Array.isArray(e)||0===e.length||!t||Array.isArray(t)&&0===t.length)return;"string"==typeof t&&(t=[t]);const r=[],l=[];void 0===a&&(a=[]);for(let o=0;o<t.length;o++)r[o]=void 0===a[o]||"asc"===a[o]||"ascending"===a[o]?1:-1,l[o]=n(e[0][t[o]]);if(d)return void d(e,t,a,l);const i=e.slice(0);return i.sort(function(e,a){for(let d=0;d<t.length;d++){const n=l[d](e[t[d]],a[t[d]]);if(0===n){if(t[d+1])continue;else if(void 0!==e._index)return(e._index-a._index)*r[d];return 0}return n*r[d]}}),i}}Smart.DataAdapter=DataAdapter;