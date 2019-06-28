
/* Smart HTML Elements v3.2.0 (2019-June) 
Copyright (c) 2011-2019 jQWidgets. 
License: https://htmlelements.com/license/ */

Smart.Utilities.Assign("Grid.Cell",class{constructor(a,b){const c=this;c.row=a,c.column=b,c.grid=a.grid,c.rowSpan=1,c.colSpan=1,c.value=void 0,c.fontSize=null,c.fontWeight=null,c.fontFamily=null,c.color=null,c.background=null,c.borderColor=null,c.tooltip=null,c.align=null,c.verticalAlign=null,c.readonly=!1,c.oldValue=void 0,c._updating=!1,c.styleChanged=!0,c.editor=null,c.template=null,c.isEditing=!1,c.canNotify=!0,c.selected=!1,c.focused=!1;const d=new Proxy(c,{deleteProperty:function(a,b){return delete a[b],!0},get:function(a,b){if("value"===b){const a=c.column.displayField?c.row.data[c.column.displayField]:c.row.data[c.column.dataField];return a}if("editor"===b||"template"===b)return a[b]||c.column[b];if("focused"===b){if(c.grid.selection.allowCellSelection&&c.grid._selection.focusedCell&&c.grid._selection.focusedCell.row.id===c.row.id&&c.grid._selection.focusedCell.column.dataField===c.column.dataField)return!0;const a=c.parent();return!!(a&&c.grid.selection.allowCellSelection&&c.grid._selection.focusedCell&&c.grid._selection.focusedCell.row.id===a.row.id&&c.grid._selection.focusedCell.column.dataField===a.column.dataField)}if("selected"===b)return!0===c.row.getProperty("selected")||!0===c.column.getProperty("selected")||!!c.grid._selection.cells["row"+c.row.id]&&c.grid._selection.cells["row"+c.row.id][c.column.dataField];if("modifiedValue"===b){const b=c.grid._cellsUpdatedValues[c.row.id+"_"+c.column.dataField];return void 0===b?a.value:b}return a[b]},set:function(a,b,d){const e=this.get(a,b);if(e===d)return!0;if(a[b]=d,"element"===b||"isEditing"===b||"oldValue"===b||"_updating"===b||"notifyFn"===b||b.startsWith("_")||"canNotify"===b)return!0;if("focused"===b&&(c.grid._selection.focusedCell=c),("colSpan"===b||"rowSpan"===b)&&0<=d&&-1===c.grid._cellsMerge.indexOf(c)&&c.grid._cellsMerge.push(c),"row"===b||"column"===b||"grid"===b||"styleChanged"===b)return!0;if(("background"===b||"fontSize"===b||"fontWeight"===b||"fontFamily"===b||"color"===b||"borderColor"===b||"fontStyle"===b)&&(c._styleChanged=!0),"value"===b){void 0===c.oldValue&&(c.oldValue=e),c.grid.dataSource.boundSource.canNotify=!1,null!==d&&d.label&&d.value?(c.row.data[c.column.displayField]=d.label,c.row.data[c.column.dataField]=d.value):c.row.data[c.column.dataField]=d;const a=c.grid.dataSource.dataItemById[c.row.id];if(a){const b=a.$.index;d!==c.grid.dataSource[b][c.column.dataField]&&(c.grid.dataSource[b][c.column.dataField]=d)}c.grid.dataSource.boundSource.canNotify=!0}return("selected"===b&&(c.grid._selection.cells["row"+c.row.id]&&(delete c.grid._selection.cells["row"+c.row.id][c.column.dataField],1===Object.getOwnPropertyNames(c.grid._selection.cells["row"+c.row.id]).length&&delete c.grid._selection.cells["row"+c.row.id]),c.grid._selection.cells["column"+c.column.dataField]&&(delete c.grid._selection.cells["column"+c.column.dataField][c.row.id],1===Object.getOwnPropertyNames(c.grid._selection.cells["column"+c.column.dataField]).length&&delete c.grid._selection.cells["column"+c.column.dataField]),d&&(!c.grid._selection.cells["row"+c.row.id]&&(c.grid._selection.cells["row"+c.row.id]=[]),!c.grid._selection.cells["column"+c.column.dataField]&&(c.grid._selection.cells["column"+c.column.dataField]=[]),c.grid._selection.cells["row"+c.row.id][c.column.dataField]=!0,c.grid._selection.cells["column"+c.column.dataField][c.row.id]=!0)),c._updating||!c.canNotify)||(c.grid._recycle(),c.propertyChanged&&c.propertyChanged(name.substring(1),e),!0)}});return d}setStyle(a){const b=this;b._styleChanged&&(a.style.background=b.background,a.style.borderColor=b.borderColor,a.style.color=b.color,a.style.fontSize=b.fontSize,a.style.fontFamily=b.fontFamily,a.style.fontWeight=b.fontWeight,a.style.fontStyle=b.fontStyle,a.style.paddingBottom="",b._styleChanged=!1)}setProperties(a){const b=this;for(let c in b._updating=!0,a)b[c]=a[c];b._updating=!1,b.grid._recycle()}createElement(){const a=this,b=document.createElement("smart-grid-cell");return a.element=b,b._initialize(a),b}render(){const a=this;a.element&&a.element._render()}parent(a){const b=this,c=b.row,d=b.column.dataField,e=b.grid;if(!e._cellsMerge.length)return null;let f=e.getVisibleRows();e.paging.enabled&&"page"===e.selection.selectAllMode&&(f=f.slice(e.paging.pageIndex*e.paging.pageSize,(e.paging.pageIndex+1)*e.paging.pageSize));for(let b=0;b<e._cellsMerge.length;b++){const g=e._cellsMerge[b];let h=[],i=[];if(h.push(g.row),1<g.rowSpan){const a=f.indexOf(g.row);if(0<=a)for(let b=a;b<a+g.rowSpan;b++)f[b]&&-1===h.indexOf(f[b])&&h.push(f[b])}if(i.push(g.column.dataField),1<g.colSpan){const a=e.columns.indexOf(e.columnByDataField[g.column.dataField]);for(let b=a;b<a+g.colSpan;b++)e.columns[b]&&-1===i.indexOf(e.columns[b].dataField)&&i.push(e.columns[b].dataField)}if(0<=h.indexOf(c)&&0<=i.indexOf(d))return a?{cell:g.row.getCell(g.column.dataField),rows:h,columns:i,row:g.row,column:g.column,endRow:h[h.length-1],endColumn:e.columnByDataField[i[i.length-1]]}:g.row.getCell(g.column.dataField)}return null}}),Smart("smart-grid-cell",class extends Smart.BaseElement{static get properties(){return{}}get hasStyleObserver(){return!1}get enableShadowDOM(){return!1}addThemeClass(){}addDefaultClass(){}get isUtilityElement(){return!0}_initialize(a){const b=this,c=document.createElement("div"),d=a.column,e=a.row,f=a.grid;b.cell=a,b.appendChild(c);let g=!1;if(d&&d._treeColumn&&f.dataSource.boundHierarchy&&(g=!0,!f.grouping.enabled&&f.dataSource.groupBy&&0<f.dataSource.groupBy.length&&(g=!1)),g){const a=document.createElement("div"),d=document.createElement("button"),f=document.createElement("div"),g=document.createElement("div");e.expanded?d.setAttribute("toggled",""):d.removeAttribute("toggled",""),b.toggleButton=d,c.appendChild(a),c.appendChild(g),g.setAttribute("content",""),a.setAttribute("indent",""),f.setAttribute("label",""),d.setAttribute("toggle-button",""),b.setAttribute("has-toggle-button",""),g.appendChild(d),g.appendChild(f)}else{const a=document.createElement("div");c.appendChild(a)}b.content=c}_renderCommands(){const a=this,b=a.cell.grid;if(b.__cellsCommandTemplate)return a.firstChild.innerHTML=b.__cellsCommandTemplate,void b._updateCommandColumnCommandsVisibility(a.firstChild,a.cell.row);const c=b._getCommandColumnCommandsTemplate();a.firstChild.innerHTML=c,b._updateCommandColumnCommandsVisibility(a.firstChild,a.cell.row),b.__cellsCommandTemplate=c}_renderGroupCell(){const a=this,b=a.cell.grid,c=a.cell.column,d=a.cell.row;[...a.attributes].forEach(b=>a.removeAttribute(b.name)),a.style.width!==c.computedWidth+"px"&&(a.style.width=c.computedWidth+"px"),a.style.left!==c.left+"px"&&(a.style.left=c.left+"px"),a.classList.contains("smart-hidden")&&a.classList.remove("smart-hidden");let e=d.label;if(void 0!==d.label){let f="";if(b.grouping.summaryRow.visible){const a=function(b,c,d){for(let e=0;e<c.length;e++){const f=c[e];(void 0!==f[b]&&d.push(f),!f.summaryRow)&&(f.children?a(b,f.children,d):f.data&&f.data.children&&a(b,f.children,d))}return d},e=a(c.dataField,d.summaryRow?d.parent.data.children:d.data.children,[]),g={},h=c._treeColumn?0<c.summary.length?c.summary:["count"]:c.summary;g[c.dataField]=h;const j=0<h.length?b.dataSource.summarize([g],e):null;if(j)for(let a=0;a<h.length;a++){const d=h[a];f+="<span summary>"+b.localize(d,{value:j[c.dataField][d]}),+"</span>"}}c._treeColumn?(e=d.summaryRow?"<div header><span group></span><span value></span></div>":"<div header><span group>"+b.columnByDataField[d.groupDataField].label+"</span><span value>"+d.label+"</span></div>",f&&(e+="<div summary>",e+=f,e+="</div>"),a.setAttribute("has-toggle-button","")):(e="<div content><div label><div header><span group></span><span value></span></div>",f&&(e+="<div summary>",e+=f,e+="</div>"),e+="</div></div>")}const f=a.firstChild;if(b.dataSource.boundHierarchy&&a.toggleButton){const g=f.children[0],h=f.children[1].children[0],i=f.children[1].children[1];g.setAttribute("indent",""),d.leaf?h.classList.add("smart-visibility-hidden"):(h.classList.remove("smart-visibility-hidden"),d.expanded?h.setAttribute("toggled",""):h.removeAttribute("toggled",""));let j="";if(c._treeColumn?a.toggleButton.classList.remove("smart-hidden"):a.toggleButton.classList.add("smart-hidden"),c._treeColumn)if(b.grouping.enabled&&0<b.dataSource.groupBy.length){let a=d.level;void 0===d.label&&a--,j+="<div style=\"width: "+(1+a)*b.grouping.groupIndent+"px;\"></div>"}else for(let a=0;a<d.level;a++)j+="<div class='smart-indent'></div>";0<b._adaptiveLayout&&(h.classList.add("smart-hidden"),j=""),void 0===d.label?h.classList.add("smart-hidden"):(h.classList.remove("smart-hidden"),h.style.marginLeft="",c._treeColumn&&b.grouping.enabled&&0<b.grouping.toggleButtonIndent&&(h.style.marginLeft=d.level*(b.grouping.toggleButtonIndent-b.grouping.groupIndent)+"px")),g.innerHTML=j,i.innerHTML=e,b.appearance.showTooltips&&i.setAttribute("title",d.label?d.label:e)}else void 0!==d.label&&b.grouping.enabled&&!a.toggleButton&&(f.innerHTML=e);if(b.grouping.enabled&&b.dataSource.groupBy&&0<b.dataSource.groupBy.length){const e=b.grouping.groupIndent*(1+d.level);c.dataField===b.columns[b.columns.length-1].dataField&&(a.style.width=c.computedWidth-e+"px",b.appearance.showColumnLines&&f.firstChild.classList.add("smart-grid-column-border"))}if("smart-label"!==f.className&&(f.className="smart-label"),c.formatFunction){const b={row:d,column:c,cell:a.cell,value:null,template:null,group:{value:e,template:null}};c.formatFunction(b),b.group.value!==e&&(f.innerHTML=b.group.value),null!==b.group.template&&(f.innerHTML=b.group.template)}}_render(){const a=this,b=a.cell.grid,c=a.cell.column,d=a.cell.row,e=d.data;if(b.grouping.enabled&&0<b.dataSource.groupBy.length&&void 0!==d.label)return void a._renderGroupCell();if(b.grouping.enabled&&0<b.dataSource.groupBy.length&&a.toggleButton&&(a.toggleButton.classList.remove("smart-hidden"),a.toggleButton.classList.remove("smart-visibility-hidden"),a.toggleButton.style.marginLeft="",c._treeColumn&&b.grouping.enabled&&0<b.grouping.toggleButtonIndent&&(a.toggleButton.style.marginLeft=d.level*(b.grouping.toggleButtonIndent-b.grouping.groupIndent)+"px")),!c.visible)return void(a.style.width="0px");b.appearance.showSortColumnBackground&&(c.sorted?a.setAttribute("sort",""):a.removeAttribute("sort")),b.appearance.showFilterColumnBackground&&(c.filtered?a.setAttribute("filter",""):a.removeAttribute("filter"));let f=c.displayField?e[c.displayField]:e[c.dataField];if(b.editing.batch){if(b._cellsUpdatedValues){a.removeAttribute("update");const e=b._cellsUpdatedValues[d.id+"_"+c.dataField];void 0!==e&&(a.setAttribute("update",""),f=e)}b._rowsDeleted&&(0<=b._rowsDeleted.indexOf(d)?a.setAttribute("delete",""):a.removeAttribute("delete")),b._rowsAdded&&(0<=b._rowsAdded.indexOf(d.id)?a.setAttribute("add",""):a.removeAttribute("add"))}b.onCellValue&&!(c.rowNumbersColumn||c.selectionColumn)&&(a.cell._updating=!0,b.onCellValue(a.cell),a.cell._updating=!1,f=a.cell.value),void 0===f&&(f="");const g=a.firstChild;(b.onCellRender||c.onCellRender)&&requestAnimationFrame(function(){if(c._cellsCachedValues||(c._cellsCachedValues=[]),c._cellsCachedValues[d.index]){const a=c._cellsCachedValues[d.index];g.firstChild&&g.removeChild(g.firstChild),g.appendChild(a)}else if(b.onCellRender?b.onCellRender(a.cell):c.onCellRender(a.cell),a.cell.template!==c.template){const b=document.createElement("div");return g.firstChild&&g.removeChild(g.firstChild),a.cell.template instanceof HTMLTemplateElement?b.appendChild(a.cell.template.cloneNode(!0)):b.appendChild(a.cell.template),g.appendChild(b),void(c._cellsCachedValues[d.index]=b)}}),c.autoGenerated||a.setAttribute("data-field",c.dataField),a.cell.focused?a.setAttribute("focus",""):a.removeAttribute("focus"),a.cell.selected?a.setAttribute("selected",""):a.removeAttribute("selected"),b.rowDetail.enabled&&d.detailExpanded&&(a.style.height=d.cellHeight+"px",a.style.lineHeight=d.cellHeight+"px"),(d.adaptiveDetailExpanded||b.adaptivityMode.responsiveLayout.autoShowHiddenCells&&d.adaptiveHeight)&&(a.style.height=d.cellHeight+"px",a.style.lineHeight=d.cellHeight+"px"),d.expanded&&0<d.expandHeight&&(a.style.height=d.cellHeight+"px",a.style.lineHeight=d.cellHeight+"px");const h=a._getCellAlignment(d,c),i=""!==a.cell.template;let j="";if(h.align&&(j+=h.align+" "),h.verticalAlign&&(j+=h.verticalAlign+" "),j+="smart-label",a.style.width!==c.computedWidth+"px"){const d=b._isLastVisibleColumn(c);a.style.width=c.autoGenerated||d?c.computedWidth+"px":c.computedWidth-b._columnGap+"px"}if(b.grouping.enabled&&b.dataSource.groupBy&&0<b.dataSource.groupBy.length){const e=b.grouping.groupIndent*(1+d.level);c.dataField===b.columns[b.columns.length-1].dataField&&(a.style.width=c.computedWidth-e+b.grouping.groupIndent+"px",b.appearance.showColumnLines&&a.classList.add("smart-grid-column-border"))}c===b._firstVisibleColumn?a.classList.add("smart-grid-column-border-collapse"):a.classList.remove("smart-grid-column-border-collapse"),0<b._columnGap&&b.appearance.showColumnLines&&a.classList.add("smart-grid-column-border"),0<b._rowGap&&a.classList.add("smart-grid-row-border"),b.appearance.showColumnLines?a.classList.remove("smart-grid-vertical-border-collapse"):a.classList.add("smart-grid-vertical-border-collapse"),b.appearance.showRowLines?a.classList.remove("smart-grid-horizontal-border-collapse"):a.classList.add("smart-grid-horizontal-border-collapse");let k=c.left;if(a.style.left!==k+"px"&&(a.style.left=k+"px"),a.classList.contains("smart-hidden")&&a.classList.remove("smart-hidden"),a.hasAttribute("freeze")&&a.removeAttribute("freeze"),a.hasAttribute("adaptive")&&a.removeAttribute("adaptive"),d.filterRow?a.classList.add("smart-grid-filter-row-cell"):d.summaryRow?a.classList.add("smart-grid-summary-row-cell"):(c.freeze||d.freeze)&&(b.rowDetail.enabled&&b.rowDetail.visible&&c.toggleColumn&&(g.classList.remove("smart-animate"),d.detailExpanded,300>new Date-b._lastPointerDownTime&&(j+=" smart-animate")),c.selectionColumn&&(a.setAttribute("checkbox",""),j+=" smart-input"),(c.rowNumbersColumn||c.selectionColumn)&&a.setAttribute("header",""),c.toggleColumn&&a.classList.add("smart-grid-row-detail-cell"),c.commandColumn&&a.setAttribute("command",""),c.adaptiveColumn?a.setAttribute("adaptive",""):a.setAttribute("freeze","")),c.cellsRotationAngle){const b=a._rotateCellContent(g,c,f);if(!b)return}else if(d.filterRow)c.adaptiveColumn||c.toggleColumn||c.rowNumbersColumn?g.innerHTML="":!c.filterEditorInitialized&&(c.filterEditorInitialized=!0);else if(d.summaryRow){if(c.adaptiveColumn||c.toggleColumn||c.rowNumbersColumn)g.innerHTML="";else if(0<c.summary.length&&b._summaryItems){const a=b._summaryItems[c.dataField];let e=0;for(let c in a)e===d.summaryRowIndex&&(g.innerHTML=b.localize(c,{value:a[c]})),e++}}else if(b.rowDetail.enabled&&c.toggleColumn)""!==g.innerHTML&&(g.innerHTML="");else if(c.adaptiveColumn)a.removeAttribute("expanded"),d.adaptiveDetailExpanded&&a.setAttribute("expanded",""),300>new Date-b._lastPointerDownTime&&(j+=" smart-animate");else if(c.commandColumn)a._renderCommands();else if(b.appearance.showRowNumber&&c.rowNumbersColumn)g.textContent=d.addNewRow?"":b._rowsAdded?0<=b._rowsAdded.indexOf(d.id)?"":d.visibleIndex+1:d.visibleIndex+1;else if(i)switch(""!==g.textContent&&(g.textContent=""),a.removeAttribute("readonly"),(!b.editing.enabled||!c.allowEdit||a.cell.readonly||b.editing.enabled&&b.editing.commandColumn.visible&&b.editing.editRow!==a.cell.row)&&a.setAttribute("readonly",""),a.cell.template){case"checkBox":case"switchButton":case"radioButton":"<span class=\"smart-input\"></span>"!==g.innerHTML&&(g.innerHTML="<span class=\"smart-input\"></span>"),f?g.firstChild.setAttribute("checked",""):null===f?g.firstChild.setAttribute("checked","indeterminate"):g.firstChild.removeAttribute("checked"),a.setAttribute("template",a.cell.template);break;default:{let b=null;if(a.cell.template.startsWith("#")&&(b=document.querySelector(a.cell.template)),b){const a=b.content.cloneNode(!0).firstElementChild;f=f.toString(),f=f.replace(/'/ig,"\\'"),f=f.replace(/"/ig,"\\\"");let c=a.outerHTML.replace(/{{value}}/ig,f).replace(/{{id}}/ig,d.id);0<=c.indexOf("{{value=")&&(f?(c=c.substring(0,c.indexOf("{{value="))+f+c.substring(c.indexOf("}")),c=c.replace(/}/ig,""),c=c.replace(/{/ig,"")):(c=c.replace(/{{value=/ig,""),c=c.replace(/}}/ig,""))),g.innerHTML!==c&&(g.innerHTML=c)}else{const b=a.cell.template.replace(/{{value}}/ig,f).replace(/{{id}}/ig,d.id);g.innerHTML!==b&&(g.innerHTML=b)}}}else if(c.selectionColumn)"checkBox"===b.selectionMode&&(d.getProperty("selected")?a.setAttribute("selected",""):a.getAttribute("selected")&&a.removeAttribute("selected"));else{const e=g.firstChild;if(e&&e.classList&&a.toggleButton){const a=g.children[0],e=g.children[1].children[0],h=g.children[1].children[1];let j="";if(c._treeColumn)if(b.grouping.enabled){let a=d.level-1;j+="<div style=\"width: "+(1+a)*b.grouping.groupIndent+"px;\"></div>"}else for(let a=0;a<d.level;a++)j+="<div class='smart-indent'></div>";a.innerHTML=j,e.classList.add("smart-visibility-hidden"),d.leaf?e.classList.add("smart-visibility-hidden"):(e.classList.remove("smart-visibility-hidden"),d.expanded?e.setAttribute("toggled",""):e.removeAttribute("toggled","")),d.data.isEmpty&&e.classList.add("smart-visibility-hidden"),h.innerHTML=f,b.appearance.showTooltips&&h.setAttribute("title",f)}else{const e=d["column_"+c.dataField];if(a.getAttribute("rowspan")&&(a.removeAttribute("rowspan"),a.style.height=""),a.getAttribute("colspan")&&a.removeAttribute("colspan"),e){if(1<e.colSpan){const d=b.columns.indexOf(c);let f=0;for(let a=d;a<d+e.colSpan;a++){const c=b.columns[a];c&&c.visible&&(f+=c.computedWidth)}a.style.width=f+"px",a.setAttribute("colspan",""),e._styleChanged=!0}if(1<e.rowSpan){const c=b.rows.indexOf(d);let f=0;d.element.setAttribute("rowspan","");for(let a=c;a<=c+e.rowSpan-1;a++){const c=b.rows[a];c&&c.visible&&c.filtered&&(f+=c.cellHeight)}a.style.height=f+"px",a.setAttribute("rowspan",""),e._styleChanged=!0}(1===e.colSpan&&a.hasAttribute("colspan")||a.hasAttribute("rowspan")&&1===e.rowSpan)&&(a.style.height="",a.style.width="",a.removeAttribute("colspan"),a.removeAttribute("rowspan"),e._styleChanged=!0),g.textContent!==f&&(g.textContent=f),e.setStyle(g),b.appearance.showTooltips&&g.setAttribute("title",e.tooltip||f)}else g.textContent=f}}if(g.className!==j&&(g.className=j),c.formatFunction&&!d.data.isEmpty){const b={row:d,column:c,cell:a.cell,value:f,template:null};a.cell.canNotify=!1;const e=Object.assign({},{background:a.cell.background,borderColor:a.cell.borderColor,color:a.cell.color,fontSize:a.cell.fontSize,fontFamily:a.cell.fontFamily,fontWeight:a.cell.fontWeight,fontStyle:a.cell.fontStyle});if(c.formatFunction(b),(g.style.background!==e.background||g.style.borderColor!==e.borderColor||g.style.color!==e.color||g.style.fontSize!==e.fontSize||g.style.fontWeight!==e.fontWeight||g.style.fontStyle!==e.fontStyle)&&(a.cell._styleChanged=!0,a.cell.setStyle(g)),b.value!==f)if(a.toggleButton){const a=g.children[1].children[1];a.innerHTML=b.value}else g.innerHTML=b.value;if(null!==b.template)if(a.toggleButton){const a=g.children[1].children[1];a.innerHTML=b.template}else g.innerHTML=b.template;a.cell.canNotify=!0}}_rotateCellContent(a,b,c){const d=this,e=document.createElement("span");return a.innerHTML="",e.innerHTML=c,a.appendChild(e),e.className="rotate",e.style.transform="rotate("+b.cellsRotationAngle+"deg)",d.grid._recycleRotate(a,e,b.cellsAlign,b.cellsVerticalAlign,c)}_getCellAlignment(a,b){const c=a["column_"+b.dataField],d=c?c.align||b.cellsAlign:b.cellsAlign,e=c?c.verticalAlign||b.cellsVerticalAlign:b.cellsVerticalAlign,f={align:"",verticalAlign:""};return"left"===d?f.align="align-left":"center"===d||"middle"===d?f.align="align-center":"right"===d?f.align="align-right":void 0,"top"===e?f.verticalAlign="align-top":"center"===e||"middle"===e?f.verticalAlign="align-middle":"bottom"===e?f.verticalAlign="align-bottom":void 0,f}template(){return""}});