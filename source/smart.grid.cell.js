
/* Smart HTML Elements v5.1.0 (2019-Dec) 
Copyright (c) 2011-2019 jQWidgets. 
License: https://htmlelements.com/license/ */

Smart.Utilities.Assign("Grid.Cell",class{constructor(a,b){const c=this;c.row=a,c.column=b,c.grid=a.grid,c.rowSpan=1,c.colSpan=1,c.value=void 0,c.fontSize=null,c.fontWeight=null,c.fontFamily=null,c.fontStyle=null,c.color=null,c.background=null,c.borderColor=null,c.tooltip=null,c.align=null,c.verticalAlign=null,c.readonly=!1,c.oldValue=void 0,c._updating=!1,c.styleChanged=!0,c.editor=null,c.template=null,c.isEditing=!1,c.canNotify=!0,c.selected=!1,c.focused=!1;const d=new Proxy(c,{deleteProperty:function(a,b){return delete a[b],!0},get:function(a,b){if("value"===b){const a=c.column.displayField?c.row.data[c.column.displayField]:c.row.data[c.column.dataField];return a}if("editor"===b||"template"===b)return a[b]||c.column[b];if("focused"===b){if(c.grid.selection.allowCellSelection&&c.grid._selection.focusedCell&&c.grid._selection.focusedCell.row.id===c.row.id&&c.grid._selection.focusedCell.column.dataField===c.column.dataField)return!0;if(c.grid.selection.allowRowSelection&&c.grid._selection.focusedCell&&c.grid._selection.focusedCell.row.id===c.row.id&&c.grid._selection.focusedCell.column.dataField===c.column.dataField)return!0;const a=c.parent();return!!(a&&c.grid.selection.allowCellSelection&&c.grid._selection.focusedCell&&c.grid._selection.focusedCell.row.id===a.row.id&&c.grid._selection.focusedCell.column.dataField===a.column.dataField)}if("selected"===b)return!0===c.row.getProperty("selected")||!0===c.column.getProperty("selected")||!!c.grid._selection.cells["row"+c.row.id]&&c.grid._selection.cells["row"+c.row.id][c.column.dataField];if("modifiedValue"===b){const b=c.grid._cellsUpdatedValues[c.row.id+"_"+c.column.dataField];return void 0===b?a.value:b}return a[b]},set:function(a,b,d){const e=this.get(a,b);if(e===d)return!0;if(a[b]=d,"element"===b||"isEditing"===b||"oldValue"===b||"_updating"===b||"notifyFn"===b||b.startsWith("_")||"canNotify"===b)return!0;if("focused"===b&&(c.grid._selection.focusedCell=c),("colSpan"===b||"rowSpan"===b)&&0<=d&&-1===c.grid._cellsMerge.indexOf(c)&&c.grid._cellsMerge.push(c),"row"===b||"column"===b||"grid"===b||"styleChanged"===b)return!0;if(("background"===b||"fontSize"===b||"fontWeight"===b||"fontFamily"===b||"color"===b||"borderColor"===b||"fontStyle"===b)&&(c._styleChanged=!0),"value"===b){void 0===c.oldValue&&(c.oldValue=e);(()=>{c.grid.dataSource.boundSource.canNotify=!1,null!==d&&d.label&&d.value?(c.row.data[c.column.displayField]=d.label,c.row.data[c.column.dataField]=d.value):(c.column.valueField&&(c.row.data[c.column.valueField]=d),c.row.data[c.column.dataField]=d);const a=c.grid.dataSource.dataItemById[c.row.id];if(a){const b=a.$.index;d!==c.grid.dataSource[b][c.column.dataField]&&(c.grid.dataSource[b][c.column.dataField]=d)}c.grid.dataSource.boundSource.canNotify=!0})()}return("selected"===b&&(c.grid._selection.cells["row"+c.row.id]&&(delete c.grid._selection.cells["row"+c.row.id][c.column.dataField],1===Object.getOwnPropertyNames(c.grid._selection.cells["row"+c.row.id]).length&&delete c.grid._selection.cells["row"+c.row.id]),c.grid._selection.cells["column"+c.column.dataField]&&(delete c.grid._selection.cells["column"+c.column.dataField][c.row.id],1===Object.getOwnPropertyNames(c.grid._selection.cells["column"+c.column.dataField]).length&&delete c.grid._selection.cells["column"+c.column.dataField]),d&&(!c.grid._selection.cells["row"+c.row.id]&&(c.grid._selection.cells["row"+c.row.id]=[]),!c.grid._selection.cells["column"+c.column.dataField]&&(c.grid._selection.cells["column"+c.column.dataField]=[]),c.grid._selection.cells["row"+c.row.id][c.column.dataField]=!0,c.grid._selection.cells["column"+c.column.dataField][c.row.id]=!0)),c._updating||!c.canNotify)||!c.row.canNotify||(c.grid._recycle(),c.propertyChanged&&c.propertyChanged(name.substring(1),e),!0)}});return d}setStyle(a){const b=this;b._styleChanged&&(a.style.background=b.background,a.style.borderColor=b.borderColor,a.style.color=b.color,a.style.fontSize=b.fontSize,a.style.fontFamily=b.fontFamily,a.style.fontWeight=b.fontWeight,a.style.fontStyle=b.fontStyle,a.style.paddingBottom="",b._styleChanged=!1)}getFormattedValue(a,b){const c=this;return void 0===a||null===a||""===a?a:"date"===c.column.dataType||"datetime"===c.column.dataType||"time"===c.column.dataType?c.formatDate(a,b):"int"===c.column.dataType||"int64"===c.column.dataType||"float"===c.column.dataType||"number"===c.column.dataType?c.formatNumber(a,b):a}formatDate(a,b){if(!Smart.Utilities.DateTime)return a;const c=this,d=c.grid;if(c.column.formatSettings.Intl&&c.column.formatSettings.Intl.DateTimeFormat){const b=new Intl.DateTimeFormat(this.grid.locale,c.column.formatSettings.Intl.DateTimeFormat).format(a);return b}!b&&c.column.formatSettings.dateFormat&&(b=c.column.formatSettings.dateFormat);try{const c=new Smart.Utilities.DateTime(a);return c.calendar.locale=d.locale,d.messages[d.locale]&&d.messages[d.locale].calendar&&(d.messages[d.locale].calendar.months&&(c.calendar.months=d.messages[d.locale].calendar.months),d.messages[d.locale].calendar.days&&(c.calendar.days=d.messages[d.locale].calendar.days),void 0!==d.messages[d.locale].calendar.firstDay&&(c.calendar.firstDay=d.messages[d.locale].calendar.firstDay),void 0!==d.messages[d.locale].calendar.eras&&(c.calendar.eras=d.messages[d.locale].calendar.eras),void 0!==d.messages[d.locale].calendar.AM&&(c.calendar.AM=d.messages[d.locale].calendar.AM),void 0!==d.messages[d.locale].calendar.PM&&(c.calendar.PM=d.messages[d.locale].calendar.PM),void 0!==d.messages[d.locale].calendar["/"]&&(c.calendar["/"]=d.messages[d.locale].calendar["/"]),void 0!==d.messages[d.locale].calendar[":"]&&(c.calendar[":"]=d.messages[d.locale].calendar[":"])),c.toString(b)}catch(b){return a}}formatNumber(a,b){if(!Smart.Utilities.NumberRenderer)return a;const c=this,d=c.grid;if(c.column.formatSettings.Intl&&c.column.formatSettings.Intl.NumberFormat){const b=new Intl.NumberFormat(this.grid.locale,c.column.formatSettings.Intl.NumberFormat).format(a);return b}const e=new Smart.Utilities.NumberRenderer;if(e.localizationObject){const a=c.column.formatSettings,b=d.messages[d.locale]?d.messages[d.locale].calendar:{};a.decimalPlaces&&(e.localizationObject.decimalPlaces=a.decimalPlaces),(a.decimalSeparator||b.decimalSeparator)&&(e.localizationObject.decimalSeparator=a.decimalSeparator||b.decimalSeparator),(a.thousandsSeparator||b.thousandsSeparator)&&(e.localizationObject.thousandsSeparator=a.thousandsSeparator||b.thousandsSeparator),e.localizationObject.currencysymbol=b.currencySymbol,e.localizationObject.currencysymbolposition=b.currencySymbolPosition,a.prefix&&(e.localizationObject.currencysymbol=a.prefix),a.sufix&&(e.localizationObject.currencysymbol=a.sufix,e.localizationObject.currencysymbolposition="after")}const f=e.formatNumber(a,b);return void 0===f?a:0>a&&c.column.formatSettings.negativeWithBrackets?"("+f+")":f}refresh(){const a=this;if(a.element){const b=a.element.firstChild;a.setStyle(b)}}setProperties(a){const b=this;for(let c in b._updating=!0,a)b[c]=a[c];b._updating=!1,b.grid._recycle()}createElement(){const a=this,b=document.createElement("smart-grid-cell");return a.element=b,b._initialize(a),b}render(){const a=this;a.element&&a.element._render()}parent(a){const b=this,c=b.row,d=b.column.dataField,e=b.grid;if(!e._cellsMerge.length)return null;if(b.__parentCells&&void 0!==b.__parentCells["row"+c.id+"_column_"+d])return b.__parentCells["row"+c.id+"_column_"+d];let f=e.getVisibleRows();e.paging.enabled&&"page"===e.selection.selectAllMode&&(f=f.slice(e.paging.pageIndex*e.paging.pageSize,(e.paging.pageIndex+1)*e.paging.pageSize)),b.__parentCells||(b.__parentCells=[]);for(let g=0;g<e._cellsMerge.length;g++){const h=e._cellsMerge[g];let i=[],j=[];if(i.push(h.row),1<h.rowSpan){const a=f.indexOf(h.row);if(0<=a)for(let b=a;b<a+h.rowSpan;b++)f[b]&&-1===i.indexOf(f[b])&&i.push(f[b])}if(j.push(h.column.dataField),1<h.colSpan){const a=e.columns.indexOf(e.columnByDataField[h.column.dataField]);for(let b=a;b<a+h.colSpan;b++)e.columns[b]&&-1===j.indexOf(e.columns[b].dataField)&&j.push(e.columns[b].dataField)}if(0<=i.indexOf(c)&&0<=j.indexOf(d)){if(a){const a={cell:h.row.getCell(h.column.dataField),rows:i,columns:j,row:h.row,column:h.column,endRow:i[i.length-1],endColumn:e.columnByDataField[j[j.length-1]]};return b.__parentCells["row"+c.id+"_column_"+d]=a,a}const f=h.row.getCell(h.column.dataField);return b.__parentCells["row"+c.id+"_column_"+d]=f,f}}return b.__parentCells["row"+c.id+"_column_"+d]=null,null}}),Smart("smart-grid-cell",class extends Smart.BaseElement{static get properties(){return{}}get hasStyleObserver(){return!1}get enableShadowDOM(){return!1}addThemeClass(){}addDefaultClass(){}get isUtilityElement(){return!0}_initialize(a){const b=this,c=document.createElement("div"),d=a.column,e=a.row,f=a.grid;b.cell=a,b.appendChild(c);let g=!1;if(d&&d._treeColumn&&f.dataSource.boundHierarchy&&(g=!0,!f.grouping.enabled&&f.dataSource.groupBy&&0<f.dataSource.groupBy.length&&(g=!1)),g){const a=document.createElement("div"),d=document.createElement("button"),g=document.createElement("div"),h=document.createElement("div"),i=document.createElement("div"),j=document.createElement("span");return e.expanded?d.setAttribute("toggled",""):d.removeAttribute("toggled",""),b.toggleButton=d,b.checkbox=i,c.appendChild(a),c.appendChild(h),h.setAttribute("content",""),a.setAttribute("indent",""),g.setAttribute("label",""),d.setAttribute("toggle-button",""),i.setAttribute("checkbox",""),b.setAttribute("has-toggle-button",""),h.appendChild(d),h.appendChild(i),j.classList.add("smart-input"),i.appendChild(j),f.checkBoxes.visible?j.classList.remove("smart-hidden"):j.classList.add("smart-hidden"),h.appendChild(g),void(b.content=g)}else{const a=document.createElement("div");c.appendChild(a)}b.content=c}_renderCommands(){const a=this,b=a.cell.grid;if(b.__cellsCommandTemplate)return a.firstChild.innerHTML=b.__cellsCommandTemplate,void b._updateCommandColumnCommandsVisibility(a.firstChild,a.cell.row);const c=b._getCommandColumnCommandsTemplate();a.firstChild.innerHTML=c,b._updateCommandColumnCommandsVisibility(a.firstChild,a.cell.row),b.__cellsCommandTemplate=c}_renderGroupCell(){const a=this,b=a.cell.grid,c=a.cell.column,d=a.cell.row;[...a.attributes].forEach(b=>a.removeAttribute(b.name)),a.style.width!==c.computedWidth+"px"&&(a.style.width=c.computedWidth+"px"),a.style.left!==c.left+"px"&&(a.style.left=c.left+"px"),a.classList.contains("smart-hidden")&&a.classList.remove("smart-hidden");let e=d.label;if(void 0!==d.label){let f="";if(b.grouping.summaryRow.visible){const a=function(b,c,d){for(let e=0;e<c.length;e++){const f=c[e];(void 0!==f[b]&&d.push(f),!f.summaryRow)&&(f.children?a(b,f.children,d):f.data&&f.data.children&&a(b,f.children,d))}return d},e=a(c.dataField,d.summaryRow?d.parent.data.children:d.data.children,[]),g={},h=c._treeColumn?0<c.summary.length?c.summary:["count"]:c.summary;g[c.dataField]=h;const j=0<h.length?b.dataSource.summarize([g],e):null;if(j)for(let a=0;a<h.length;a++){const d=h[a];f+="<span summary>"+b.localize(d,{value:j[c.dataField][d]}),+"</span>"}}c._treeColumn?(e=d.summaryRow?"<div header><span group></span><span value></span></div>":"<div header><span group>"+b.columnByDataField[d.groupDataField].label+"</span><span value>"+d.label+"</span></div>",f&&(e+="<div summary>",e+=f,e+="</div>"),a.setAttribute("has-toggle-button","")):(e="<div content><div label><div header><span group></span><span value></span></div>",f&&(e+="<div summary>",e+=f,e+="</div>"),e+="</div></div>")}const f=a.firstChild;if(b.dataSource.boundHierarchy&&a.toggleButton){const g=f.children[0],h=f.children[1].children[0],i=f.children[1].children[1].firstChild,j=f.children[1].children[2];g.setAttribute("indent",""),d.checked?i.setAttribute("checked",""):!1===d.checked?i.removeAttribute("checked"):null===d.checked&&i.setAttribute("checked","indeterminate"),d.leaf?h.classList.add("smart-visibility-hidden"):(h.classList.remove("smart-visibility-hidden"),d.expanded?h.setAttribute("toggled",""):h.removeAttribute("toggled",""));let k="";if(c._treeColumn?a.toggleButton.classList.remove("smart-hidden"):a.toggleButton.classList.add("smart-hidden"),c._treeColumn)if(b.grouping.enabled&&0<b.dataSource.groupBy.length){let a=d.level;void 0===d.label&&a--,k+="<div style=\"width: "+(1+a)*b.grouping.groupIndent+"px;\"></div>"}else for(let a=0;a<d.level;a++)k+="<div class='smart-indent'></div>";void 0===d.label?h.classList.add("smart-hidden"):(h.classList.remove("smart-hidden"),h.style.marginLeft="",c._treeColumn&&b.grouping.enabled&&0<b.grouping.toggleButtonIndent&&(h.style.marginLeft=d.level*(b.grouping.toggleButtonIndent-b.grouping.groupIndent)+"px")),g.innerHTML=k,j.innerHTML=e,b.appearance.showTooltips?j.setAttribute("title",d.label?d.label:e):j.hasAttribute("title")&&j.removeAttribute("title")}else void 0!==d.label&&b.grouping.enabled&&!a.toggleButton&&(f.innerHTML=e);if(b.grouping.enabled&&b.dataSource.groupBy&&0<b.dataSource.groupBy.length){const e=b.grouping.groupIndent*(1+d.level);c.dataField===b.columns[b.columns.length-1].dataField&&(a.style.width=c.computedWidth-e+"px",b.appearance.showColumnLines&&f.firstChild.classList.add("smart-grid-column-border"))}if("smart-label"!==f.className&&(f.className="smart-label"),c.formatFunction){const b={row:d,column:c,cell:a.cell,value:null,template:null,group:{value:e,template:null}};c.formatFunction(b),b.group.value!==e&&(f.innerHTML=b.group.value),null!==b.group.template&&(f.innerHTML=b.group.template)}}_render(){const a=this,b=a.cell.grid,c=a.cell.column,d=a.cell.row,e=d.data,f=d._isMeasureRow?null:c.cellsFormat;if(b.grouping.enabled&&0<b.dataSource.groupBy.length&&void 0!==d.label)return void a._renderGroupCell();if(b.grouping.enabled&&0<b.dataSource.groupBy.length&&a.toggleButton&&(a.toggleButton.classList.remove("smart-hidden"),a.toggleButton.classList.remove("smart-visibility-hidden"),a.toggleButton.style.marginLeft="",c._treeColumn&&b.grouping.enabled&&0<b.grouping.toggleButtonIndent&&(a.toggleButton.style.marginLeft=d.level*(b.grouping.toggleButtonIndent-b.grouping.groupIndent)+"px")),!c.visible)return void(a.style.width="0px");b.appearance.showSortColumnBackground?c.sorted?a.setAttribute("sort",""):a.removeAttribute("sort"):c.sorted&&a.hasAttribute("sort")&&a.removeAttribute("sort"),b.appearance.showFilterColumnBackground?c.filtered?a.setAttribute("filter",""):a.removeAttribute("filter"):c.filtered&&a.hasAttribute("filter")&&a.removeAttribute("filter");let g=c.displayField?e[c.displayField]:e[c.dataField];if(b.editing.batch){if(b._cellsUpdatedValues){a.removeAttribute("update");const e=b._cellsUpdatedValues[d.id+"_"+c.dataField];void 0!==e&&(a.setAttribute("update",""),g=e)}b._rowsDeleted&&(0<=b._rowsDeleted.indexOf(d)?a.setAttribute("delete",""):a.removeAttribute("delete")),b._rowsAdded&&(0<=b._rowsAdded.indexOf(d.id)?a.setAttribute("add",""):a.removeAttribute("add"))}b.onCellValue&&!(c.rowHeaderColumn||c.selectionColumn)&&(a.cell._updating=!0,b.onCellValue(a.cell),a.cell._updating=!1,g=a.cell.value),void 0===g&&(g="");let h=g;f&&(h=a.cell.getFormattedValue(g,f));const i=a.firstChild;(b.onCellRender||c.onCellRender)&&requestAnimationFrame(function(){if(c._cellsCachedValues||(c._cellsCachedValues=[]),c._cellsCachedValues[d.index]){const a=c._cellsCachedValues[d.index];i.firstChild&&i.removeChild(i.firstChild),i.appendChild(a)}else if(b.onCellRender?b.onCellRender(a.cell):c.onCellRender(a.cell),a.cell.template!==c.template){const b=document.createElement("div");return i.firstChild&&i.removeChild(i.firstChild),a.cell.template instanceof HTMLTemplateElement?b.appendChild(a.cell.template.cloneNode(!0)):b.appendChild(a.cell.template),i.appendChild(b),void(c._cellsCachedValues[d.index]=b)}}),c.autoGenerated||a.setAttribute("data-field",c.dataField),a.cell.focused?(b.selection.allowCellSelection&&a.setAttribute("focus",""),d.element.setAttribute("focus","")):a.removeAttribute("focus"),a.cell.selected?a.setAttribute("selected",""):a.removeAttribute("selected"),b.rowDetail.enabled&&d.showDetail&&(a.style.height=d.cellHeight+"px",a.style.lineHeight=d.cellHeight+"px"),d.expanded&&0<d.expandHeight&&(a.style.height=d.cellHeight+"px",a.style.lineHeight=d.cellHeight+"px");const j=a._getCellAlignment(d,c),k=""!==a.cell.template&&b.isInitialized;let l="";if(j.align&&(l+=j.align+" "),j.verticalAlign&&(l+=j.verticalAlign+" "),c.cellsWrap&&(l+="wrap "),l+="smart-label",a.style.width!==c.computedWidth+"px"){const d=b._isLastVisibleColumn(c);a.style.width=c.autoGenerated||d?c.computedWidth+"px":c.computedWidth-b._columnGap+"px"}if(b.grouping.enabled&&b.dataSource.groupBy&&0<b.dataSource.groupBy.length){const e=b.grouping.groupIndent*(1+d.level);c.dataField===b.columns[b.columns.length-1].dataField&&(a.style.width=c.computedWidth-e+b.grouping.groupIndent+"px",b.appearance.showColumnLines&&a.classList.add("smart-grid-column-border"))}c===b._firstVisibleColumn?a.classList.add("smart-grid-column-border-collapse"):a.classList.remove("smart-grid-column-border-collapse"),0<b._columnGap&&b.appearance.showColumnLines&&a.classList.add("smart-grid-column-border"),0<b._rowGap&&a.classList.add("smart-grid-row-border"),b.appearance.showColumnLines?a.classList.remove("smart-grid-vertical-border-collapse"):a.classList.add("smart-grid-vertical-border-collapse"),b.appearance.showRowLines?a.classList.remove("smart-grid-horizontal-border-collapse"):a.classList.add("smart-grid-horizontal-border-collapse");let m=c.left;if(a.style.left!==m+"px"&&(a.style.left=m+"px"),a.classList.contains("smart-hidden")&&a.classList.remove("smart-hidden"),a.hasAttribute("template")&&a.removeAttribute("template"),a.hasAttribute("freeze")&&a.removeAttribute("freeze"),a.hasAttribute("detail")&&a.removeAttribute("detail"),d.filterRow?a.classList.add("smart-grid-filter-row-cell"):d.summaryRow?a.classList.add("smart-grid-summary-row-cell"):(c.freeze||d.freeze)&&(c.selectionColumn&&(a.setAttribute("checkbox",""),l+=" smart-input",c.grid.selection.checkBoxes.enabled&&c.grid.selection.checkBoxes.autoShow?a.setAttribute("auto-show",""):a.removeAttribute("auto-show")),(c.rowHeaderColumn||c.selectionColumn)&&a.setAttribute("header",""),c.rowDetailColumn&&(a.setAttribute("header",""),a.setAttribute("detail",""),a.setAttribute("has-toggle-button","")),c.commandColumn&&a.setAttribute("command",""),b.appearance.showFrozenColumnBackground&&c.freeze&&a.setAttribute("freeze",""),b.appearance.showFrozenRowBackground&&d.freeze&&a.setAttribute("freeze","")),c.cellsRotationAngle){const b=a._rotateCellContent(i,c,g);if(!b)return}else if(d.filterRow)c.toggleColumn||c.rowHeaderColumn?i.innerHTML="":!c.filterEditorInitialized&&(c.filterEditorInitialized=!0);else if(d.summaryRow){if(c.toggleColumn||c.rowHeaderColumn)i.innerHTML="";else if(0<c.summary.length&&b._summaryItems){const a=b._summaryItems[c.dataField];let e=0;for(let c in a)e===d.summaryRowIndex&&(i.innerHTML=b.localize(c,{value:a[c]})),e++}}else if(b.rowDetail.enabled&&c.rowDetailColumn)""!==i.innerHTML&&(i.innerHTML=d.showDetail?"<button class=\"smart-animate\" toggled toggle-button></button>":"<button class=\"smart-animate\" toggle-button></button>",d.element.toggleDetailButton=a.querySelector("button"));else if(c.commandColumn)a._renderCommands();else if(b.appearance.showRowHeaderNumber&&c.rowHeaderColumn){if(d.addNewRow)i.textContent="";else{const c=c=>{if(a.cell.value)return a.cell.value;if("number"===b.appearance.autoGenerateRowLabelMode)return c.visibleIndex+1;else{const a=c.visibleIndex%26,b=Math.floor(c.visibleIndex/26),d=String.fromCharCode(65+a);let e="";for(let a=0;a<b;a++)e+="A";const f=e+d;return f}};i.textContent=b._rowsAdded?0<=b._rowsAdded.indexOf(d.id)?"":c(d):c(d)}}else if(k)switch(a.removeAttribute("readonly"),a.cell.template){case"checkBox":case"switchButton":case"radioButton":""!==i.textContent&&(i.textContent=""),(!b.editing.enabled||!c.allowEdit||a.cell.readonly||b.editing.enabled&&b.editing.commandColumn.visible&&b.editing.editRow!==a.cell.row)&&a.setAttribute("readonly",""),"<span class=\"smart-input\"></span>"!==i.innerHTML&&(i.innerHTML="<span class=\"smart-input\"></span>"),g?i.firstChild.setAttribute("checked",""):null===g?i.firstChild.setAttribute("checked","indeterminate"):i.firstChild.removeAttribute("checked"),a.setAttribute("template",a.cell.template);break;default:{let b=null;if(a.setAttribute("template",""),"function"==typeof a.cell.template){const b={row:d,column:c,cell:a.cell,oldValue:a.cell.oldValue,value:g,template:null};let e=i.querySelector(".smart-grid-cell-template");if(e&&e.getAttribute("column")===c.dataField?b.template=e.firstElementChild:e=null,a.formattedValue!==h&&(e=null),e||a.cell.template(b),e||!b.template)e||null!==b.template||(i.innerHTML=g);else if(b.template instanceof HTMLElement){const a=document.createElement("div");a.classList.add("smart-grid-cell-template"),a.setAttribute("column",c.dataField),i.innerHTML="",i.appendChild(a),a.appendChild(b.template)}else i.innerHTML="<div column=\""+c.dataField+"\" class=\"smart-grid-cell-template\">"+b.template+"</div>";a.cell._styleChanged&&a.cell.setStyle(i),void 0===a.cell.oldValue&&(a.cell.oldValue=g),a.formattedValue=h}else if(""!==i.textContent&&(i.textContent=""),a.cell.template.startsWith("#")&&(b=document.querySelector(a.cell.template)),b){const a=b.content.cloneNode(!0).firstElementChild;g=g.toString(),g=g.replace(/'/ig,"\\'"),g=g.replace(/"/ig,"\\\"");let c=a.outerHTML.replace(/{{value}}/ig,g).replace(/{{id}}/ig,d.id);0<=c.indexOf("{{value=")&&(g?(c=c.substring(0,c.indexOf("{{value="))+g+c.substring(c.indexOf("}")),c=c.replace(/}/ig,""),c=c.replace(/{/ig,"")):(c=c.replace(/{{value=/ig,""),c=c.replace(/}}/ig,""))),i.innerHTML!==c&&(i.innerHTML=c)}else{const b=a.cell.template.replace(/{{value}}/ig,g).replace(/{{id}}/ig,d.id);i.innerHTML!==b&&(i.innerHTML=b)}}}else if(c.selectionColumn)"checkBox"===b.selectionMode&&(d.getProperty("selected")?a.setAttribute("selected",""):a.getAttribute("selected")&&a.removeAttribute("selected"));else{const e=i.firstChild;if(e&&e.classList&&a.toggleButton){const a=i.children[0],e=i.children[1].children[0],f=i.children[1].children[1].firstChild,g=i.children[1].children[2];let j="";if(c._treeColumn){if(b.grouping.enabled){let a=d.level-1;j+="<div style=\"width: "+(1+a)*b.grouping.groupIndent+"px;\"></div>"}else for(let a=0;a<d.level;a++)j+="<div class='smart-indent'></div>";d.checked?f.setAttribute("checked",""):!1===d.checked?f.removeAttribute("checked"):null===d.checked&&f.setAttribute("checked","indeterminate"),d.leaf?d.allowCheck?f.classList.remove("smart-visibility-hidden"):f.classList.add("smart-visibility-hidden"):d.allowCheck?f.classList.remove("smart-hidden"):f.classList.add("smart-hidden")}d.allowCheck?b.checkBoxes.visible?f.classList.remove("smart-hidden"):f.classList.add("smart-hidden"):!b.checkBoxes.visible&&f.classList.add("smart-hidden"),a.innerHTML=j,e.classList.add("smart-visibility-hidden"),d.leaf?e.classList.add("smart-visibility-hidden"):(e.classList.remove("smart-visibility-hidden"),d.expanded?e.setAttribute("toggled",""):e.removeAttribute("toggled","")),d.data.isEmpty&&e.classList.add("smart-visibility-hidden"),g.innerHTML=h,b.appearance.showTooltips?g.setAttribute("title",h):g.hasAttribute("title")&&g.removeAttribute("title")}else{const e=d["column_"+c.dataField];if(a.getAttribute("rowspan")&&(a.removeAttribute("rowspan"),a.style.height=""),a.getAttribute("colspan")&&a.removeAttribute("colspan"),e){if(1<e.colSpan){const d=b.columns.indexOf(c);let f=0;for(let a=d;a<d+e.colSpan;a++){const c=b.columns[a];c&&c.visible&&(f+=c.computedWidth)}a.style.width=f+"px",a.setAttribute("colspan",""),e._styleChanged=!0}if(1<e.rowSpan){const c=b.rows.indexOf(d);let f=0;d.element.setAttribute("rowspan","");for(let a=c;a<=c+e.rowSpan-1;a++){const c=b.rows[a];c&&c.visible&&c.filtered&&(f+=c.cellHeight)}a.style.height=f+"px",a.setAttribute("rowspan",""),e._styleChanged=!0}(1===e.colSpan&&a.hasAttribute("colspan")||a.hasAttribute("rowspan")&&1===e.rowSpan)&&(a.style.height="",a.style.width="",a.removeAttribute("colspan"),a.removeAttribute("rowspan"),e._styleChanged=!0),i.textContent===h||c.formatFunction||(i.textContent=h),e.setStyle(i),b.appearance.showTooltips?i.setAttribute("title",e.tooltip||h):i.hasAttribute("title")&&i.removeAttribute("title")}else i.textContent=h}}if(i.className!==l&&(i.className=l),c.formatFunction&&!d.data.isEmpty&&b.isInitialized){const b={row:d,column:c,cell:a.cell,oldValue:a.cell.oldValue,value:g,formattedValue:h,template:null};a.cell.canNotify=!1,d.canNotify=!1;const e=Object.assign({},{background:a.cell.background,borderColor:a.cell.borderColor,color:a.cell.color,fontSize:a.cell.fontSize,fontFamily:a.cell.fontFamily,fontWeight:a.cell.fontWeight,fontStyle:a.cell.fontStyle});c.formatFunction(b),(i.style.background!==e.background||i.style.borderColor!==e.borderColor||i.style.color!==e.color||i.style.fontSize!==e.fontSize||i.style.fontWeight!==e.fontWeight||i.style.fontStyle!==e.fontStyle)&&(a.cell._styleChanged=!0,a.cell.setStyle(i)),(a.cell.background!==e.background||a.cell.borderColor!==e.borderColor||a.cell.color!==e.color||a.cell.fontSize!==e.fontSize||a.cell.fontWeight!==e.fontWeight||a.cell.fontStyle!==e.fontStyle)&&(a.cell._styleChanged=!0,a.cell.setStyle(i));let f=!0;if(b.value!==g){if(a.toggleButton){const a=i.children[1].children[2];a.innerHTML=b.value}else i.innerHTML=b.value;f=!1}if(null!==b.template){if(a.toggleButton){const a=i.children[1].children[2];a.innerHTML!==b.template&&(a.innerHTML=b.template)}else if(i.innerHTML!==b.template){const a=document.createElement("div");a.innerHTML=b.template,a.innerHTML!==i.innerHTML&&(i.innerHTML=b.template)}f=!1}f&&(i.textContent=g),a.cell.canNotify=!0,d.canNotify=!0}}_rotateCellContent(a,b,c){const d=this,e=document.createElement("span");return a.innerHTML="",e.innerHTML=c,a.appendChild(e),e.className="rotate",e.style.transform="rotate("+b.cellsRotationAngle+"deg)",d.grid._recycleRotate(a,e,b.cellsAlign,b.cellsVerticalAlign,c)}_getCellAlignment(a,b){const c=a["column_"+b.dataField],d=c?c.align||b.cellsAlign:b.cellsAlign,e=c?c.verticalAlign||b.cellsVerticalAlign:b.cellsVerticalAlign,f={align:"",verticalAlign:""};return"left"===d?f.align="align-left":"center"===d||"middle"===d?f.align="align-center":"right"===d?f.align="align-right":void 0,"top"===e?f.verticalAlign="align-top":"center"===e||"middle"===e?f.verticalAlign="align-middle":"bottom"===e?f.verticalAlign="align-bottom":void 0,f}template(){return""}});