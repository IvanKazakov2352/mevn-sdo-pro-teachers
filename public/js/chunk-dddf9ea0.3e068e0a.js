(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dddf9ea0"],{"0106":function(e,a,t){"use strict";var r=t("b941"),n=t.n(r);n.a},"64d3":function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("input",{ref:"excel-upload-input",staticClass:"excel-upload-input",attrs:{type:"file",accept:".xlsx, .xls"},on:{change:e.handleClick}}),t("div",{staticClass:"drop",on:{drop:e.handleDrop,dragover:e.handleDragover,dragenter:e.handleDragover}},[e._v(" Перетащите файл с вопросами сюда ")])])},n=[],s=(t("b0c0"),t("d3b7"),t("1146")),l=t.n(s),o={props:{beforeUpload:Function,onSuccess:Function},data:function(){return{loading:!1,excelData:{header:null,results:null}}},methods:{generateData:function(e){var a=e.header,t=e.results;this.excelData.header=a,this.excelData.results=t,this.onSuccess&&this.onSuccess(this.excelData)},handleDrop:function(e){if(e.stopPropagation(),e.preventDefault(),!this.loading){var a=e.dataTransfer.files;if(1===a.length){var t=a[0];if(!this.isExcel(t))return this.$message.error("Only supports upload .xlsx, .xls, .csv suffix files"),!1;this.upload(t),e.stopPropagation(),e.preventDefault()}else this.$message.error("Only support uploading one file!")}},handleDragover:function(e){e.stopPropagation(),e.preventDefault(),e.dataTransfer.dropEffect="copy"},handleUpload:function(){this.$refs["excel-upload-input"].click()},handleClick:function(e){var a=e.target.files,t=a[0];t&&this.upload(t)},upload:function(e){if(this.$refs["excel-upload-input"].value=null,this.beforeUpload){var a=this.beforeUpload(e);a&&this.readerData(e)}else this.readerData(e)},readerData:function(e){var a=this;return this.loading=!0,new Promise((function(t,r){var n=new FileReader;n.onload=function(e){var r=e.target.result,n=l.a.read(r,{type:"array"}),s=n.SheetNames[0],o=n.Sheets[s],i=a.getHeaderRow(o),u=l.a.utils.sheet_to_json(o);a.generateData({header:i,results:u}),a.loading=!1,t()},n.readAsArrayBuffer(e)}))},getHeaderRow:function(e){var a,t=[],r=l.a.utils.decode_range(e["!ref"]),n=r.s.r;for(a=r.s.c;a<=r.e.c;++a){var s=e[l.a.utils.encode_cell({c:a,r:n})],o="UNKNOWN "+a;s&&s.t&&(o=l.a.utils.format_cell(s)),t.push(o)}return t},isExcel:function(e){return/\.(xlsx|xls|csv)$/.test(e.name)}}},i=o,u=(t("0106"),t("2877")),c=Object(u["a"])(i,r,n,!1,null,"c623fd22",null);a["default"]=c.exports},b941:function(e,a,t){}}]);
//# sourceMappingURL=chunk-dddf9ea0.3e068e0a.js.map