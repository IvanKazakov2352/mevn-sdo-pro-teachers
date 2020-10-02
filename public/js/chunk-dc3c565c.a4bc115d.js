(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dc3c565c"],{"0798":function(t,e,i){"use strict";i("caad");var a=i("5530"),n=i("ade3"),s=(i("0c18"),i("10d2")),r=i("afdd"),o=i("9d26"),l=i("f2e7"),c=i("7560"),u=i("a026"),h=u["default"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),d=i("58df"),p=i("d9bd");e["a"]=Object(d["a"])(s["a"],l["a"],h).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var t={staticClass:"v-alert__border",class:Object(n["a"])({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(r["a"],{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(o["a"],{props:{color:e}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(o["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=Object(a["a"])(Object(a["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||c["a"].options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(p["a"])("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var t={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){var e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},"0c18":function(t,e,i){},"17b3":function(t,e,i){},"1f4f":function(t,e,i){"use strict";i("a9e3");var a=i("5530"),n=(i("8b37"),i("80d2")),s=i("7560"),r=i("58df");e["a"]=Object(r["a"])(s["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(a["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(n["g"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"4af3":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{fluid:""}},[i("v-toolbar",{staticClass:"mb-2",attrs:{color:"indigo darken-5",dark:"",flat:""}},[i("v-toolbar-title",[t._v(" Профили обучения ("+t._s(t.countModule)+") ")])],1),i("v-card",{attrs:{"max-height":"auto","max-width":"auto"}},[t.countModule?i("v-col",{attrs:{cols:"12"}},[i("v-simple-table",{attrs:{"fixed-header":"",id:"Table"},scopedSlots:t._u([{key:"default",fn:function(){return[i("thead",[i("tr",[i("th",{staticClass:"text-left"},[t._v("Название профиля")]),i("th",{staticClass:"text-left"},[t._v("Дата создания профиля")]),i("th",{staticClass:"text-left"},[t._v("Действия")])])]),i("tbody",t._l(t.paginateProduct,(function(e){return i("tr",{key:e._id},[i("td",[t._v(t._s(e.nameProfile))]),i("td",[t._v(" "+t._s(new Date(e.createdAt).toLocaleString())+" ")]),i("td",[i("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(a){var n=a.on,s=a.attrs;return[i("router-link",{attrs:{tag:"button",to:{name:"course",params:{id:e._id}}}},[i("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",s,!1),n),[i("v-icon",[t._v(" mdi-pencil ")])],1)],1)]}}],null,!0)},[i("span",[t._v("Редактирование профиля обучения")])]),i("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(a){var n=a.on,s=a.attrs;return[i("v-btn",t._g(t._b({attrs:{icon:""},on:{click:function(i){return t.deleteModule(e._id)}}},"v-btn",s,!1),n),[i("v-icon",[t._v(" mdi-delete ")])],1)]}}],null,!0)},[i("span",[t._v("Удалить профиль")])])],1)])})),0)]},proxy:!0}])}),t.countModule?i("v-pagination",{attrs:{length:t.pages,"click-handler":t.pageClick,"total-visible":3,"prev-icon":"mdi-menu-left","next-icon":"mdi-menu-right",color:"blue"},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}}):t._e()],1):i("v-alert",{attrs:{type:"info"}},[t._v(" Профилей обучения пока что нет ")])],1)],1)},n=[],s=(i("fb6a"),i("5530")),r=i("2f62"),o={data:function(){return{page:1,modulePerPage:10}},methods:{deleteModule:function(t){this.$notify({title:"СДО PRO",message:"Профиль обучения успешно удален",type:"success"}),this.$store.dispatch("deleteModule",t)},pageClick:function(t){this.page=t}},computed:Object(s["a"])(Object(s["a"])({},Object(r["b"])(["allModule","countModule"])),{},{pages:function(){return Math.ceil(this.allModule.length/10)},paginateProduct:function(){var t=(this.page-1)*this.modulePerPage,e=t+this.modulePerPage;return this.allModule.slice(t,e)}}),mounted:function(){this.$store.dispatch("fetchModules")}},l=o,c=i("2877"),u=i("6544"),h=i.n(u),d=i("0798"),p=i("8336"),v=i("b0af"),f=i("62ad"),g=i("a523"),b=i("132d"),m=i("891e"),_=i("1f4f"),y=i("71d9"),$=i("2a7f"),x=i("3a2f"),C=Object(c["a"])(l,a,n,!1,null,null,null);e["default"]=C.exports;h()(C,{VAlert:d["a"],VBtn:p["a"],VCard:v["a"],VCol:f["a"],VContainer:g["a"],VIcon:b["a"],VPagination:m["a"],VSimpleTable:_["a"],VToolbar:y["a"],VToolbarTitle:$["b"],VTooltip:x["a"]})},"891e":function(t,e,i){"use strict";i("99af"),i("d81d"),i("a9e3"),i("d3b7"),i("25f0");var a=i("2909"),n=i("5530"),s=(i("17b3"),i("9d26")),r=i("dc22"),o=i("a9ad"),l=i("de2c"),c=i("7560"),u=i("58df");e["a"]=Object(u["a"])(o["a"],Object(l["a"])({onVisible:["init"]}),c["a"]).extend({name:"v-pagination",directives:{Resize:r["a"]},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(t){return t%1===0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return Object(n["a"])({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10),e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);var i=e%2===0?1:0,n=Math.floor(e/2),s=this.length-n+1+i;if(this.value>n&&this.value<s){var r=this.value-n+2,o=this.value+n-2-i;return[1,"..."].concat(Object(a["a"])(this.range(r,o)),["...",this.length])}if(this.value===n){var l=this.value+n-1-i;return[].concat(Object(a["a"])(this.range(1,l)),["...",this.length])}if(this.value===s){var c=this.value-n+1;return[1,"..."].concat(Object(a["a"])(this.range(c,this.length)))}return[].concat(Object(a["a"])(this.range(1,n)),["..."],Object(a["a"])(this.range(s,this.length)))}},watch:{value:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.$nextTick(this.onResize),setTimeout((function(){return t.selected=t.value}),100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,e){var i=[];t=t>0?t:1;for(var a=t;a<=e;a++)i.push(a);return i},genIcon:function(t,e,i,a,n){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":i},attrs:{type:"button","aria-label":n},on:i?{}:{click:a}},[t(s["a"],[e])])])},genItem:function(t,e){var i=this,a=e===this.value&&(this.color||"primary"),n=e===this.value,s=n?this.currentPageAriaLabel:this.pageAriaLabel;return t("button",this.setBackgroundColor(a,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":e===this.value},attrs:{type:"button","aria-current":n,"aria-label":this.$vuetify.lang.t(s,e)},on:{click:function(){return i.$emit("input",e)}}}),[e.toString()])},genItems:function(t){var e=this;return this.items.map((function(i,a){return t("li",{key:a},[isNaN(Number(i))?t("span",{class:"v-pagination__more"},[i.toString()]):e.genItem(t,i)])}))},genList:function(t,e){return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}},render:function(t){var e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return t("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(t,e)])}})},"8b37":function(t,e,i){},afdd:function(t,e,i){"use strict";var a=i("8336");e["a"]=a["a"]}}]);
//# sourceMappingURL=chunk-dc3c565c.a4bc115d.js.map