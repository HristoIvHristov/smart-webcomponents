
/* Smart HTML Elements v3.2.0 (2019-June) 
Copyright (c) 2011-2019 jQWidgets. 
License: https://htmlelements.com/license/ */

Smart.Utilities.Assign("Grid.Edit",class{_renderCommandBar(){const e=this,t=e.editing.commandBar.dataSource,d=d=>{for(let i in t){const l=t[i],n=document.createElement("div");n.classList.add("smart-grid-command-item"),n.label=e.localize(i),l.icon&&(n.innerHTML="<span class=\"smart-grid-icon "+l.icon+"\"></span><span class=\"smart-grid-label\">"+n.label+"</span>"),l.visible||n.classList.add("smart-hidden"),n.command=l.command,n.onclick=function(){const t=n.command;e._applyCommand(t,[])},d.appendChild(n)}};e.editing.enabled&&e.editing.commandBar.visible&&(e.$.headerCommandBar.innerHTML="",e.$.footerCommandBar.innerHTML="","far"!==e.editing.commandBar.position&&d(e.$.headerCommandBar),"near"!==e.editing.commandBar.position&&d(e.$.footerCommandBar))}commandKeyEditCommand(){const e=this;e.beginCellEdit()}commandKeyCancelCommand(){const e=this;e.cancelEdit()}commandKeyUpdateCommand(){const e=this;e.endEdit()}commandColumnMenuCommand(){const e=this;e._openColumnChooserMenu(e._commandColumn)}commandColumnEditCommand(e){const t=this;t.beginEdit(e.id)}commandColumnUpdateCommand(){const e=this;e.endEdit()}commandColumnRowMenuCommand(){this}commandColumnCancelCommand(e){const t=this;if(t.editing.batch){const d=t._rowsDeleted?t._rowsDeleted.indexOf(e):-1;0<=d&&t._rowsDeleted.splice(d,1);for(let d=0;d<t.columns.length;d++){const i=t.columns[d].dataField;t._cellsUpdatedValues&&t._cellsUpdatedValues[e.id+"_"+i]&&(delete t._cellsUpdatedValues[e.id+"_"+i],t._cellsUpdatedValues.length--)}t._recycle(!1)}t.cancelEdit()}commandColumnDeleteCommand(e){const t=this;t.deleteRow(e.id)}deleteRow(e,t){const d=this,i=d.rowById[e];if(!i)return!1;const l=function(e){if(d.editing.batch)d._batchDeleteRow(e);else{const t=d.rows.indexOf(e);d.rows.splice(t,1)}t&&t(e)};return d.editing.deleteDialog.enabled?d._openDeleteRowDialog(i,l):l(i),!0}_insertNewRowAfter(e){const t=this;return t._insertNewRowBefore(e,!0)}_insertNewRowBefore(e,t){const d=this,i=new Smart.Grid.Row({index:t?0:-1,id:Smart.Utilities.Core.createGUID(),grid:d}),l=function(t,i){d.editing.batch?d._batchAddRow(t,i?d.rows.length:0):(t.index=d.rows.length,d._add(t,i?d.rows.length:0)),d.scrollTop=i?d.scrollHeight:0,d.editing.addDialog.enabled||requestAnimationFrame(function(){d.editing.enabled&&d._beginEdit(t)}),e&&e(t)}.bind(this);return d.editing.addDialog.enabled?d._openAddRowDialog(i,l):l(i,t),!0}commandBarBatchSaveCommand(){const e=this;e._saveBatchEdit()}commandBarAddRowCommand(){const e=this;e._insertNewRowAfter()}commandBarAddTopRowCommand(){const e=this;e._insertNewRowBefore()}commandBarDeleteRowCommand(){const e=this;let t=1,d=e.rows[e.rows.length-t];for(e._rowsDeleted||(e._rowsDeleted=[]);0<=e._rowsDeleted.indexOf(e.rows[e.rows.length-t]);)t++;d=e.rows[e.rows.length-t],d&&e.commandColumnDeleteCommand(d)}commandBarBatchRevertCommand(){const e=this;e.revertBatchEdit()}beginEdit(e,t){const d=this,i=d.rowById[e];i&&d._beginEdit(i,t)}_beginEdit(e,t){const d=this;t||(t=d.columns[0].dataField);const i=d.columnByDataField[t];if(!e||!i||i&&i.autoGenerated)return!1;const l=e.getCell(t);return!!l&&void("cell"===d.editing.mode?d._beginCellEdit(l):"row"===d.editing.mode&&d._beginRowEdit(e,l))}endEdit(){const e=this;return(e.editing.dialog.enabled&&e.editing.dialog.visible&&e._dialogEdit&&e._dialogEdit.close(),e.editing.editRow)?e._endRowEdit():!!e.editing.editCell&&e._endCellEdit()}saveBatchEdit(){const e=this;e._saveBatchEdit()}revertBatchEdit(){const e=this;e._clearBatchEdit(!0)}_endCellEdit(e){const t=this,d=e||t.editing.editCell;if(!d||d&&!d.isEditing)return null;const i=t._getEditorValue(d);if("invalid value"===i)return d.setAttribute("error",""),!1;const l=t._getEditorId(d),n=t._cellEditors[l];n.detach(),d.element.removeAttribute("editor"),d.element.removeAttribute("error"),d.isEditing=!1,d.element.content.innerHTML="";const a=function(){t.editing.editRow||t._recycle(!1)},o=t._cellsUpdatedValues?t._cellsUpdatedValues[d.row.id+"_"+d.column.dataField]:void 0,r=void 0===o?d.value:o;return function(e,t){return"date"===d.column.dataType?e.valueOf()===t.valueOf():e===t}(i,r)?(t.editing.editCell=null,!t.editing.editRow&&(t.editing.isEditing=!1,a())):(t.editing.editCell=null,!t.editing.editRow&&(t.editing.isEditing=!1),t.editing.batch?(t._batchUpdateCell(d.row,d.column,i,d.value),a()):(d._updating=!0,d.value=i,d._updating=!1,a())),!0}cancelEdit(){const e=this;if(e.editing.editRow){const t=e.editing.editRow.cells;for(let e=0;e<t.length;e++){const d=t[e],i=d.element;i&&(i.removeAttribute("editor"),i.removeAttribute("error"),i.content.innerHTML=""),d.isEditing=!1}e.editing.editRow=null}else e.editing.editCell&&(e.editing.editCell.element.removeAttribute("editor"),e.editing.editCell.element.removeAttribute("error"),e.editing.editCell.element.content.innerHTML="",e.editing.editCell.isEditing=!1,e.editing.editCell=null);e.editing.dialog.visible&&e.editing.dialog.enabled&&e._dialogEdit.close(),e.editing.isEditing=!1,e._recycle(!1),e.editing.commandColumn.visible&&e.refresh()}_endRowEdit(){const e=this,t=e.editing.editRow;if(!t)return!1;let d=!0;const l=t.cells;for(let t=0;t<l.length;t++){const i=l[t],n=e._getEditorValue(i);"invalid value"===n&&(i.setAttribute("error",""),d=!1)}if(d){for(let t=0;t<l.length;t++){const d=l[t];e._endCellEdit(d)}return e.editing.isEditing=!1,e.editing.editRow=null,e.editing.commandColumn.visible&&!e.editing.commandColumn.width?e.refresh():e._recycle(!1),!0}return!1}_batchDeleteRow(e){const t=this;t._rowsDeleted||(t._rowsDeleted=[]),t._rowsDeleted.push(e),t._recycle(!1)}_batchAddRow(e,t){const d=this;d._rowsAdded||(d._rowsAdded=[]),d._rowsAdded.push(e.id),d.rowById[e.id]=e,e.index=d.rows.length+(d._rowsAdded?d._rowsAdded.length:0),0===t?d._nearRowsAdded.splice(0,0,e):d._farRowsAdded.push(e),d.refresh()}_batchUpdateCell(e,t,d,i){const l=this;l._cellsUpdatedValues||(l._cellsUpdatedValues=[]);(function(e,d){return"date"===t.dataType?e.valueOf()===d.valueOf():e===d})(d,i)?delete l._cellsUpdatedValues[e.id+"_"+t.dataField]:l._cellsUpdatedValues[e.id+"_"+t.dataField]=d,l._cellsUpdatedValues.length++}getBatchEditChanges(){const e=this,t=[],d=[],l=[];for(let d in e._cellsUpdatedValues){const i=e._cellsUpdatedValues[d],l=d.substring(0,d.indexOf("_")),n=d.substring(d.indexOf("_")+1),a=e.rowById[l],o=a.getCell(n);t.push({id:l,dataField:n,oldValue:o.value,newValue:i})}if(e._rowsDeleted&&0<e._rowsDeleted.length)for(let t=0;t<e._rowsDeleted.length;t++){const i=e._rowsDeleted[t];d.push({id:i.id,data:i})}if(e._rowsAdded&&0<e._rowsAdded.length)for(let t=0;t<e._rowsAdded.length;t++){const d=e._rowsAdded[t];l.push({id:d.id,data:d})}return{updated:t,deleted:d,added:l}}_saveBatchEdit(){const e=this;for(let t in e._cellsUpdatedValues){const d=e._cellsUpdatedValues[t],i=t.substring(0,t.indexOf("_")),l=t.substring(t.indexOf("_")+1),n=e.rowById[i],a=n.getCell(l);a._updating=!0,a.value=d,a._updating=!1}const t=e._rowsDeleted&&0<e._rowsDeleted.length||e._rowsAdded&&0<e._rowsAdded.length;if(t&&e.beginUpdate(),e._rowsAdded&&0<e._rowsAdded.length)for(let t in e._rowsAdded){const d=e._rowsAdded[t],i=e.rowById[d];i&&(0<=e._nearRowsAdded.indexOf(i)?e.rows.splice(0,0,i):0<=e._farRowsAdded.indexOf(i)&&e.rows.push(i))}if(e._rowsDeleted&&0<e._rowsDeleted.length)for(let t=0;t<e._rowsDeleted.length;t++){const d=e._rowsDeleted[t],i=e.rows.indexOf(d);0>i||e.rows.splice(i,1)}t&&e.endUpdate(),e._clearBatchEdit(!1)}_clearBatchEdit(){const e=this;let t=!1;e._rowsAdded&&0<e._rowsAdded.length&&(t=!0),e._cellsUpdatedValues=[],e._rowsAdded=[],e._rowsDeleted=[],e._nearRowsAdded=[],e._farRowsAdded=[],t?e.refresh():e._recycle(!1)}_getEditorId(e){return e.editor===e.column.editor?e.editor.template+"_"+e.column.dataField:e.editor.template+"_"+e.column.dataField+"_"+e.row.id}_applyCommand(e,t){const d=this;t||(t=[]);const i=function(){"function"==typeof e?e.apply(d,t):d[e]?d[e].apply(d,t):Smart[e]?Smart[e].apply(d,t):window[e]&&window[e].apply(d,t)};if(d.onCommand){t||(t=[]),t[1]||(t[1]=null);const l={name:e,command:i,details:t[0],event:t[1],handled:!1};setTimeout(()=>{d.onCommand.apply(d,[l]);l.handled||i()},100)}else i()}_getCommandColumnCommandsTemplate(){const e=this,t=e.editing.commandColumn.dataSource,d="icon"!==e.editing.commandColumn.displayMode,i="label"!==e.editing.commandColumn.displayMode;let l="";for(let n in t){const a=t[n];let o="<div",r=!1;if("commandColumnMenu"==n)continue;r||(o+=" item=\""+n+"\" command=\""+a.command+"\" class=\"smart-grid-command-item\">",r=!0);const s="{{messages}}"===a.label?e.localize(n):a.label;i&&d?(o+="<span class=\"smart-grid-icon "+a.icon+"\"></span>",o+="<span class=\"smart-grid-label\">"+s+"</span>"):i&&!d?o+="<span class=\"smart-grid-icon "+a.icon+"\"></span>":d&&!i&&(o+="<span class=\"smart-grid-label\">"+s+"</span>"),o+="</div>",l+=o}return l}_updateCommandColumnCommandsVisibility(e,t){const d=this,l=e.children,n=d.editing.commandColumn.dataSource;for(let a=0;a<l.length;a++){const e=l[a],i=e.getAttribute("item"),o=n[i].visible;!0===o?e.classList.remove("smart-hidden"):!1===o?e.classList.add("smart-hidden"):"auto"===o&&(!d.editing.dialog.enabled&&(d.editing.editRow===t||d.editing.editCell&&d.editing.editCell.row===t)?"commandColumnEdit"===i?e.classList.add("smart-hidden"):("commandColumnUpdate"===i||"commandColumnCancel"===i)&&l[a].classList.remove("smart-hidden"):"commandColumnEdit"===i?e.classList.remove("smart-hidden"):("commandColumnUpdate"===i||"commandColumnCancel"===i)&&l[a].classList.add("smart-hidden"))}}_handleEditKeyDown(e){const t=this,d=e.key,i=t.editing.commandKeys;if(!t.editing.dialog.enabled)for(let e in i){const l=i[e];if(d===l.key){t._applyCommand(l.command);break}}}_getCustomCellEditor(e){const t=this;e.editor.selector=e.editor.template,e.editor.template="custom";const d=t._getEditorId(e);if(!t._cellEditors[d]){const i=document.createElement("div");t._applyCellEditorUserSettings(i,e),i.classList.add("smart-grid-cell-editor");const l=function(e){if("keydown"===e.type)return void t._handleEditKeyDown(e)};let n=null;if((e.editor.selector.startsWith("#")||e.editor.selector.startsWith("."))&&(n=document.querySelector(e.editor.selector)),n)i.appendChild(n.content.cloneNode(!0).firstElementChild);else{const t=function(e){const t=document.createElement("template");return e=e.trim(),t.innerHTML=e,t.content.firstChild},d=t(e.editor.selector);d&&i.appendChild(d)}t._cellEditors[d]={element:i,focus:function(){const t=e.editor.instance.element.firstElementChild;e.editor.focus?setTimeout(function(){e.editor.focus.apply(e.editor.instance.element,[])},50):setTimeout(function(){t.focus()},50)},blur:function(t){const d=e.editor.instance.element.firstElementChild;e.editor.blur?e.editor.blur.apply(e.editor.instance.element,[t]):d.blur()},getValue:function(){const t=e.editor.instance.element.firstElementChild;if(e.editor.getValue)return e.editor.getValue.apply(e.editor.instance.element,[]);const d=t.value;return d||""},setValue:function(t){const d=e.editor.instance.element.firstElementChild;if(e.editor.setValue)e.editor.setValue.apply(e.editor.instance.element,[t]);else{if(0<=d.innerHTML.indexOf("{{")){const i=d.innerHTML.replace(/{{value}}/ig,t).replace(/{{id}}/ig,e.row.id);d.innerHTML=i}d.value=t,t instanceof Date&&(d.value=t.toISOString().split("T")[0]),e.editor.instance.element.value=d.value}},attach:function(){i.addEventListener("keydown",l),e.editor.attach&&e.editor.attach.apply(i,[])},detach:function(){i.removeEventListener("keydown",l),e.editor.detach&&e.editor.detach.apply(i,[])}}}return t._cellEditors[d]}_getTextAreaCellEditor(e){const t=this,d=t._getEditorId(e),i=document.createElement("div"),l=document.createElement("textarea"),n=document.createElement("div");t._applyCellEditorUserSettings(i,e),l.classList.add("smart-input"),i.classList.add("smart-grid-cell-editor"),i.classList.add("smart-grid-text-area-cell-editor"),n.classList.add("nav"),n.classList.add("smart-icon-resize-full","smart-grid-icon");const a=function(e){let d=e.key;if("keydown"===e.type)return t._handleEditKeyDown(e),void(e.shiftKey&&" "===d&&(n.click(),e.preventDefault()))};n.onclick=function(){const d=document.createElement("div"),i=document.createElement("span"),a=document.createElement("textarea"),o=e.editor.instance.element,r=document.createElement("div"),s=document.createElement("smart-scroll-bar");s.orientation="vertical",d.setAttribute("theme",t.theme),r.appendChild(a),r.classList.add("smart-grid-text-area-container"),r.appendChild(s),a.value=l.value,a.classList.add("smart-input"),n.textAreaEditorDialog=d,n.popupTextArea=a,i.classList.add("close-button"),i.classList.add("smart-grid-icon"),i.classList.add("smart-icon-cancel-circled");const c=function(){s.value=a.scrollTop,s.max=a.scrollHeight-a.offsetHeight,s.onChange=null,a.offsetHeight>=a.scrollHeight?s.classList.add("smart-hidden"):s.classList.remove("smart-hidden"),s.onChange=function(){a.scrollTop=s.value}};a.onscroll=function(){c()},a.onkeydown=function(e){"Escape"===e.key&&d.parentNode.removeChild(d),"Enter"===e.key&&e.shiftKey&&i.click()},i.onclick=function(){n.textAreaEditorDialog.parentNode.removeChild(n.textAreaEditorDialog),setTimeout(function(){l.value=a.value,l.select()},50)},d.classList.add("smart-grid-text-area-dialog"),d.appendChild(r),d.appendChild(i),document.body.appendChild(d),setTimeout(function(){a.select(),c()},50),c(),d.style.top=t._offsetTop(o)+"px",d.style.left=t._offsetLeft(o)+"px",d.style.width=o.offsetWidth+"px"},i.appendChild(l),i.appendChild(n);return t._cellEditors[d]={element:i,focus:function(){setTimeout(function(){l.select()},50)},blur:function(){},setValue:function(e){l.value=e},getValue:function(){const e=l.value;return n.textAreaEditorDialog&&n.textAreaEditorDialog.parentNode?(l.value=n.popupTextArea.value,l.value):e},attach:function(){l.addEventListener("keydown",a)},detach:function(){l.removeEventListener("keydown",a),n.textAreaEditorDialog&&n.textAreaEditorDialog.parentNode&&(l.value=n.popupTextArea.value,n.textAreaEditorDialog.parentNode.removeChild(n.textAreaEditorDialog))}},t._cellEditors[d]}_getInputCellEditor(e){const t=this,d=t._getEditorId(e);if(!t._cellEditors[d]){const i=document.createElement("input");t._applyCellEditorUserSettings(i,e),i.classList.add("smart-input"),i.classList.add("smart-grid-cell-editor"),i.classList.add("smart-grid-input-cell-editor");const l=function(e){if("keydown"===e.type)return void t._handleEditKeyDown(e)};t._cellEditors[d]={element:i,focus:function(){setTimeout(function(){i.select()},50)},blur:function(){},getValue:function(){return i.value},setValue:function(e){i.value=e},attach:function(){i.addEventListener("keydown",l)},detach:function(){i.removeEventListener("keydown",l)}}}return t._cellEditors[d]}_applyCellEditorUserSettings(e,t){for(let d in t.editor)if("template"!=d){if("list"==d){e.setAttribute(d,t.editor[d]);continue}e[d]=t.editor[d]}}_getAutoCompleteCellEditor(e){const t=this,d=t._getEditorId(e);if(!t._cellEditors[d]){const i=document.createElement("smart-input");t._applyCellEditorUserSettings(i,e);const l=function(e){return i.opened?void 0:"keydown"===e.type?void t._handleEditKeyDown(e):void 0};i.classList.add("smart-grid-cell-editor"),i.classList.add("smart-grid-auto-complete-cell-editor");t._cellEditors[d]={element:i,focus:function(){setTimeout(()=>{i.select()},50)},blur:function(){},setValue:function(e){i.value=e},getValue:function(){return i.value},attach:function(){i.addEventListener("keydown",l)},detach:function(){i.value="",i.close(),i.removeEventListener("keydown",l)}}}const l=t.getVisibleRows(),n=[];for(let d,a=0;a<l.length;a++)d=t.dataSource[l[a].index],d&&(d=d[e.column.dataField],-1===n.indexOf(d)&&n.push(d));return t._cellEditors[d].element.dataSource=n,t._cellEditors[d]}_getDateTimePickerCellEditor(e){const t=this,d=t._getEditorId(e);if(!t._cellEditors[d]){const i=document.createElement("smart-date-time-picker");i.calendarButton=!0,i.dropDownAppendTo="body",i.autoClose=!0,i.dropDownDisplayMode="calendar",t._applyCellEditorUserSettings(i,e);const l=function(e){return i.opened?void 0:"keydown"===e.type?void t._handleEditKeyDown(e):void 0};i.classList.add("smart-grid-cell-editor"),i.classList.add("smart-grid-date-time-picker-cell-editor");t._cellEditors[d]={element:i,focus:function(){setTimeout(()=>{i.select()},50)},blur:function(e){const d=i.getAttribute("aria-controls");if(d&&i.opened){const i=t.getBoundingRect(document.getElementById(d));e.pageX<i.left||e.pageX>i.right||e.pageY<i.top||e.pageY>i.bottom||e.preventDefault()}},setValue:function(e){i.value=e},getValue:function(){return i.value},attach:function(){i.addEventListener("keydown",l)},detach:function(){i.value="",i.close(),i.removeEventListener("keydown",l)}}}return t._cellEditors[d]}_getNumberInputCellEditor(e){const t=this,d=t._getEditorId(e);if(!t._cellEditors[d]){const i=document.createElement("div"),l=document.createElement("input"),n=document.createElement("div"),a=document.createElement("div"),o=document.createElement("div");t._applyCellEditorUserSettings(i,e),a.tabIndex=o.tabIndex=0,l.classList.add("smart-input"),i.classList.add("smart-grid-cell-editor"),i.classList.add("smart-grid-number-input-cell-editor"),n.classList.add("nav"),a.classList.add("up"),o.classList.add("down");const r=function(e){if("keydown"===e.type)return void t._handleEditKeyDown(e)};l.type="number",n.appendChild(a),n.appendChild(o),i.appendChild(l),i.appendChild(n);t._cellEditors[d]={element:i,focus:function(){setTimeout(function(){l.select()},50)},blur:function(){},setValue:function(e){l.value=e},getValue:function(){const e=parseFloat(l.value);return isNaN(e)||e===1/0||e===-Infinity?0:e},attach:function(){l.addEventListener("keydown",r),a.onkeydown=r,o.onkeydown=r,a.onclick=function(){const e=parseFloat(l.value);(e<l.max||""===l.max)&&(l.value=e+1)},o.onclick=function(){const e=parseFloat(l.value);(e>l.min||""===l.min)&&(l.value=e-1)}},detach:function(){l.removeEventListener("keydown",r),a.onclick=o.onclick=null,a.onkeydown=o.onkeydown=null}}}return t._cellEditors[d]}_getCheckBoxCellEditor(e){const t=this,d=t._getEditorId(e);if(!t._cellEditors[d]){const e=document.createElement("div");e.classList.add("smart-input"),e.classList.add("smart-grid-cell-editor"),e.classList.add("smart-grid-check-box-cell-editor"),e.tabIndex=0;const i=function(){!0!==e.value&&!1!==e.value&&null!==e.value&&(e.value=!1),e.value=null!==e.value&&!e.value,!1===e.value?e.removeAttribute("checked"):e.setAttribute("checked",e.value?"":"indeterminate")},l=function(e){t._handleEditKeyDown(e)};t._cellEditors[d]={getValue:function(){return e.value},setValue:function(t){e.value=t,!1===e.value?e.removeAttribute("checked"):e.setAttribute("checked",e.value?"":"indeterminate")},focus:function(){e.focus(),setTimeout(function(){e.focus()},25)},blur:function(){},element:e,detach:function(){e.value=!1,e.removeEventListener("click",i),e.removeEventListener("keydown",l)},attach:function(){e.addEventListener("keydown",l),e.addEventListener("click",i)}}}return t._cellEditors[d]}_getEditorValue(e){const t=this,d=t._getEditorId(e);if(!t._cellEditors)return;const i=t._cellEditors[d];if(!i)return;const l=function(t){switch(e.column.dataType){case"float":case"int":case"number":t="int"===e.column.dataType?parseInt(t):parseFloat(t);break;case"bool":case"boolean":("true"===t||"1"===t)&&(t=!0),("false"===t||"0"===t)&&(t=!1);break;case"date":t=new Smart.Utilities.DateTime(t),t=t.toDate();break;case"dateTime":t=new Smart.Utilities.DateTime(t);}return t};let n=null;switch(e.editor.template){case"input":case"autoComplete":case"numberInput":case"deteTimePicker":case"checkBox":{if(n=l(i.getValue()),e.editor.getValue){const t=e.editor.getValue(e,n);void 0!==t&&(n=t)}break}default:n=l(i.getValue());}let a=!0;return e.column.validator&&(a=e.column.validator.evaluate(n)),a?n:"invalid value"}_beginRowEdit(e,t){const d=this;if(e===d.editing.editRow)return!1;if(d.editing.editRow){const e=d.endEdit();if(!e)return!1}const l=e.cells;d.editing.editRow=e,d.editing.commandColumn.visible&&(d.editing.isEditing=!1,d.refresh(),d.editing.isEditing=!0),e.isEditing=!0;let n=!1;for(let a=0;a<l.length;a++){const e=l[a],i=d._beginCellEdit(e);t?e===t&&e.editor.instance.focus():i&&!n&&(n=!0,e.editor.instance.focus()),d.editing.commandColumn.visible&&e.column.commandColumn&&e.render()}return!0}_createDialog(){const e=this,t=document.createElement("div");t.setAttribute("animation","none"),t.classList.add("smart-window","smart-grid-dialog"),t.style.width=e.editing.dialog.width,t.style.height=e.editing.dialog.height,t.style.left="",t.style.top="",t.innerHTML=`<div class="smart-container">
                        <div id="headerSection" class="smart-header-section">
                            <div class="smart-header"></div>
                            <div class="smart-buttons-container">
                                <smart-button unfocusable class="smart-close-button"></smart-button>
                            </div>
                        </div>
                        <div class="smart-content"><div></div></div>
                        <div class ="smart-footer">
                            <div class ="smart-stack-layout right spacing">
                                <smart-button class ="smart-confirm-button item primary">Ok</smart-button>
                                <smart-button class ="smart-cancel-button item">Cancel</smart-button>
                            </div>
                        </div>
                    </div>`,t.content=t.querySelector(".smart-content").firstChild,t.footer=t.querySelector(".smart-footer"),t.header=t.querySelector(".smart-header"),t.btnConfirm=t.querySelector(".smart-confirm-button"),t.btnCancel=t.querySelector(".smart-cancel-button"),t.btnClose=t.querySelector(".smart-close-button");const d=document.createElement("div");return d.classList.add("smart-grid-dialog-overlay"),d.onclick=function(){},t.overlay=d,t.remove=function(){t.parentNode&&t.parentNode.removeChild(t)},t.close=function(){t.classList.remove("open"),t.addEventListener("transitionend",t.remove),t.addEventListener("transitioncancel",t.remove),t.modal&&t.overlay.parentNode&&t.overlay.parentNode.removeChild(t.overlay),t.onClose&&t.onClose()},t.open=function(d,i){t.removeEventListener("transitionend",t.remove),t.removeEventListener("transitioncancel",t.remove),document.body.appendChild(t),d||(d=e.editing.dialog.left),i||(i=e.editing.dialog.top),requestAnimationFrame(function(){t.classList.add("open");const l=function(d,i){const l=e.offset(e);switch("center"===d&&"horizontal"===i&&(d="middle"),d){case"top":return l.top;case"bottom":return l.top+e.offsetHeight-t.offsetHeight;case"center":return l.top+e.offsetHeight/2-t.offsetHeight/2;case"left":return l.left;case"middle":return l.left+e.offsetWidth/2-t.offsetWidth/2;case"right":return l.left+e.offsetWidth-t.offsetWidth;}return"horizontal"===i?parseInt(d)+l.left:"vertical"===i?parseInt(d)+l.top:"number"==typeof d?d:parseInt(d)};t.style.left=l(d,"horizontal")+"px",t.style.top=l(i,"vertical")+"px"}),t.modal&&e.appendChild(t.overlay),t.onOpen&&t.onOpen()},t}_openAddRowDialog(e,t){const d=this;if(!d.editing.addDialog.enabled)return!1;const l=d._dialogAddRow||d._createDialog(),i="{{message}}"===d.editing.dialog.header?d.localize("dialogAddHeader"):d.editing.dialog.header,n=l.content;l.header.innerHTML=i,e.grid=d,void 0===e.index&&(e.index=d.rows.length,d._rowsAdded&&(e.index+=d._rowsAdded.length));const a=e.cells;let o=null,r=0;if(d._cellEditors||(d._cellEditors=[]),!d._dialogAddRow){l.modal=!0,l.btnConfirm.innerHTML=d.localize("dialogAddButtonConfirm"),l.btnCancel.innerHTML=d.localize("dialogAddButtonCancel"),l.onOpen=function(){d.editing.dialog.visible=!0},l.onClose=function(){d.editing.dialog.visible=!1},l.btnCancel.onclick=function(){l.close()},l.btnClose.onclick=function(){l.close()},l.btnConfirm.onclick=function(){const e={};for(let t=0;t<a.length;t++){const i=a[t],l=d._getEditorValue(i),n=d._getEditorId(i),o=d._cellEditors[n];e[i.column.dataField]=l,o.detach()}const i=d._rowsAdded?d._rowsAdded.length:0,n=new Smart.Grid.Row({index:d.rows.length+i,grid:d,data:e});l.close(),t(n,0===l.index)},l.onkeydown=function(e){const t=e.key;"Enter"===t?l.btnConfirm.onclick():"Escape"===t&&l.close()},n.classList.add("smart-grid-layout");for(let e=0;e<d.columns.length;e++){const t=d.columns[e];if(!t.allowEdit)continue;0==r%2&&(o=document.createElement("div"),o.classList.add("row"),n.appendChild(o));const i=document.createElement("div");i.classList.add("col-sm-6");const l=document.createElement("div");l.classList.add("column");const a=document.createElement("label");a.innerHTML=d.columns[e].label;const s=document.createElement("div");s.classList.add("smart-grid-dialog-editor"),s.setAttribute("editor",t.dataField),s.setAttribute("template",t.editor.template),i.appendChild(l),o.appendChild(i),l.appendChild(a),l.appendChild(s),r++}}l.open(),l.index=e.index;for(let n=0;n<a.length;n++){const e=a[n],t=e.column,i=t.dataField,o=l.querySelector("[editor="+i+"]");o.innerHTML="";let r="";void 0===e.value?(("int64"===t.dataType||"number"===t.dataType||"int"===t.dataType||"float"===t.dataType)&&(r=0),"date"===t.dataType&&(r=new Date),("bool"===t.dataType||"boolean"===t.dataType)&&(r=!1)):r=e.value;let s=null;switch(e.editor.template){default:case"custom":{s=d._getCustomCellEditor(e);break}case"checkBox":{s=d._getCheckBoxCellEditor(e);break}case"autoComplete":{s=d._getAutoCompleteCellEditor(e);break}case"dateTimePicker":s=d._getDateTimePickerCellEditor(e);break;case"textArea":{s=d._getTextAreaCellEditor(e);break}case"numberInput":case"input":{s="numberInput"===e.editor.template?d._getNumberInputCellEditor(e):d._getInputCellEditor(e);break}}s.attach(),e.editor.instance=s,s.setValue(r),0==n&&s.focus(),e.editor.isInitialized||(e.editor.isInitialized=!0,e.editor.onInit&&e.editor.onInit(e.row.index,e.column.dataField,e.editor.instance.element)),e.editor.onRender&&e.editor.onRender(e.row.index,e.column.dataField,e.editor.instance.element),o.appendChild(s.element)}d._dialogAddRow=l}_openEditDialog(e,t){const d=this;if(!d.editing.dialog.enabled)return!1;const i=d._dialogEdit||d._createDialog(),l="{{message}}"===d.editing.dialog.header?d.localize("dialogEditHeader",{value:d.editing.editRow?e.row.visibleIndex+1:e.column.label}):d.editing.dialog.header,n=i.content;i.header.innerHTML=l;let a=null,o=0;if(!d._dialogEdit)if(i.modal=!0,i.btnConfirm.innerHTML=d.localize("dialogEditButtonConfirm"),i.btnCancel.innerHTML=d.localize("dialogEditButtonCancel"),i.onOpen=function(){d.editing.dialog.visible=!0},i.onClose=function(){d.editing.dialog.visible=!1},i.btnCancel.onclick=function(){d.cancelEdit()},i.btnClose.onclick=function(){d.cancelEdit()},i.btnConfirm.onclick=function(){d.endEdit()},i.onkeydown=function(e){const t=e.key,i=d.editing.commandKeys;for(let l in i){const e=i[l];if(t===e.key){d._applyCommand(e.command);break}}},d.editing.editRow){n.classList.add("smart-grid-layout");for(let e=0;e<d.columns.length;e++){const t=d.columns[e];if(!t.allowEdit)continue;0==o%2&&(a=document.createElement("div"),a.classList.add("row"),n.appendChild(a));const i=document.createElement("div");i.classList.add("col-sm-6");const l=document.createElement("div");l.classList.add("column");const r=document.createElement("label");r.innerHTML=d.columns[e].label;const s=document.createElement("div");s.classList.add("smart-grid-dialog-editor"),s.setAttribute("editor",t.dataField),s.setAttribute("template",t.editor.template),i.appendChild(l),a.appendChild(i),l.appendChild(r),l.appendChild(s),o++}}else{const t=e.column,d=document.createElement("div");d.classList.add("smart-grid-dialog-editor"),d.setAttribute("editor",""),d.setAttribute("template",t.editor.template),n.appendChild(d)}if(i.open(),d.editing.editRow){const d=i.querySelector("[editor="+e.column.dataField+"]");d.innerHTML="",d.appendChild(t.element)}else{const d=e.column,l=i.querySelector("[editor]");l.innerHTML="",l.setAttribute("template",d.editor.template),l.appendChild(t.element)}d._dialogEdit=i}_openDeleteRowDialog(e,t){const d=this;if(!d.editing.deleteDialog.enabled)return!1;const i=d._dialogDelete||d._createDialog(),l="{{message}}"===d.editing.dialog.header?d.localize("dialogDeleteHeader",{value:e.visibleIndex+1}):d.editing.dialog.header;i.header.innerHTML=l,i.content.innerHTML=d.localize("dialogDeleteContent"),i.row=e,d._dialogDelete||(i.modal=!0,i.btnConfirm.innerHTML=d.localize("dialogDeleteButtonConfirm"),i.btnCancel.innerHTML=d.localize("dialogDeleteButtonCancel"),i.onOpen=function(){d.editing.dialog.visible=!0},i.onClose=function(){d.editing.dialog.visible=!1},i.btnCancel.onclick=function(){i.close()},i.btnClose.onclick=function(){i.close()},i.btnConfirm.onclick=function(){t(i.row),i.close()},i.onkeydown=function(e){"Escape"===e.key&&i.close()},d._dialogDelete=i),i.open(),setTimeout(function(){i.btnConfirm.focus()},100)}_beginCellEdit(e,t){const d=this;if(e.isEditing)return!1;if(!e.column.allowEdit||e.column.autoGenerated||e.readonly)return!1;if(d.editing.editCell&&!d.editing.editRow){const e=d._endCellEdit();if(!1===e)return!1}d._cellEditors||(d._cellEditors=[]),d.editing.editRow||(d.editing.editCell=e),d.editing.isEditing=!0,d._selection.selectionRect&&d._selection.selectionRect.classList.add("smart-visibility-hidden");const i=t=>{const i=t.element;d.editing.dialog.enabled?d._openEditDialog(e,t):(e.element.setAttribute("editor","string"==typeof e.editor.template?e.editor.template:"template"),e.element.content.innerHTML="",e.element.content.appendChild(i),d.editing.editRow&&e.element.setAttribute("row-editor","")),t.attach(),e.editor.instance=t,e.isEditing=!0},l=d._cellsUpdatedValues?d._cellsUpdatedValues[e.row.id+"_"+e.column.dataField]:void 0;let n=void 0===l?e.value:l;if(void 0===n){n="";const t=e.column;"number"===t.dataType||"int"===t.dataType||"float"===t.dataType?n=0:"date"===t.dataType&&(n=new Date,n.setTime(0,0,0))}switch(e.editor.template){default:case"custom":{const t=d._getCustomCellEditor(e);i(t),t.setValue(n);break}case"checkBox":{const l=d._getCheckBoxCellEditor(e);i(l);const a=!0===n||1===n;if("checkBox"===e.template&&t){const e=document.elementsFromPoint(t.clientX,t.clientY);e[0].classList.contains("smart-input")?l.setValue(!a):l.setValue(a)}else l.setValue(a);break}case"autoComplete":{const t=d._getAutoCompleteCellEditor(e);i(t),t.setValue(n),e.editor.autoOpen&&t.element.open();break}case"dateTimePicker":{const t=d._getDateTimePickerCellEditor(e);i(t),t.setValue(n),e.editor.autoOpen&&t.element.open();break}case"textArea":{const t=d._getTextAreaCellEditor(e);i(t),t.setValue(n);break}case"numberInput":case"input":{const t="numberInput"===e.editor.template?d._getNumberInputCellEditor(e):d._getInputCellEditor(e);i(t),t.setValue(n);break}}return e.editor.isInitialized||(e.editor.isInitialized=!0,e.editor.onInit&&e.editor.onInit(e.row.index,e.column.dataField,e.editor.instance.element)),e.editor.onRender&&e.editor.onRender(e.row.index,e.column.dataField,e.editor.instance.element),d.editing.editCell&&e.editor.instance.focus(),!0}_onCellClick(e,t){const d=this;if(e.row.addNewRow)return void("far"===e.row.freeze?d._insertNewRowAfter():d._insertNewRowBefore());if(d.editing.enabled){if(d.editing.commandColumn.visible)if(e.column.commandColumn){const l=document.elementsFromPoint(t.pageX,t.pageY);let n=null;for(let e=0;e<l.length;e++)if(l[e].classList.contains("smart-grid-command-item")){n=l[e];break}if(n||(n=e.element.querySelector(".smart-grid-command-item")),n){const i=n.getAttribute("command");return void d._applyCommand(i,[e.row,t])}}else if(d.editing.commandColumn.inline){const e=document.elementsFromPoint(t.pageX,t.pageY);for(let t=0;t<e.length;t++)if(e[t].classList.contains("smart-grid-command-item"))return}if("click"===d.editing.action&&(!d.selection.enabled||e.selected))if("cell"===d.editing.mode){const i=e.parent();i?d._beginCellEdit(i,t):d._beginCellEdit(e,t)}else"row"===d.editing.mode&&d._beginRowEdit(e.row,e,t)}}_onCellDoubleClick(e,t){const d=this;!d.editing.enabled||"doubleClick"!==d.editing.action||d.editing.isEditing||("cell"===d.editing.mode?d._beginCellEdit(e,t):"row"===d.editing.mode&&d._beginRowEdit(e.row,e,t))}_onRowClick(){}_onRowDoubleClick(){}});