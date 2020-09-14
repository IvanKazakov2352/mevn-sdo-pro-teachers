(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6474c05b"],{"0798":function(t,e,a){"use strict";a("caad");var o=a("5530"),s=a("ade3"),l=(a("0c18"),a("10d2")),n=a("afdd"),i=a("9d26"),r=a("f2e7"),c=a("7560"),u=a("a026"),d=u["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),p=a("58df"),m=a("d9bd");e["a"]=Object(p["a"])(l["a"],r["a"],d).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var t={staticClass:"v-alert__border",class:Object(s["a"])({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(n["a"],{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(i["a"],{props:{color:e}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(i["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=Object(o["a"])(Object(o["a"])({},l["a"].options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||c["a"].options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(m["a"])("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var t={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){var e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},"0c18":function(t,e,a){},f75f:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{attrs:{justify:"center"}},[a("v-dialog",{attrs:{persistent:"","max-width":"1100px"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,s=e.attrs;return[a("v-btn",t._g(t._b({attrs:{color:"primary",dark:""}},"v-btn",s,!1),o),[t._v(" Добавить сделку ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Создание сделки")])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"4"}},[a("v-autocomplete",{attrs:{items:t.allAdmins,"item-text":"fio",label:"Администратор сделки","return-object":""},model:{value:t.admin,callback:function(e){t.admin=e},expression:"admin"}})],1),a("v-col",{attrs:{cols:"12",sm:"4"}},[a("v-autocomplete",{attrs:{items:t.allModule,"item-text":"nameProfile",label:"Выберите курс обучения","return-object":""},model:{value:t.course,callback:function(e){t.course=e},expression:"course"}})],1),a("v-col",{attrs:{cols:"12",sm:"4"}},[a("v-autocomplete",{attrs:{items:t.allGroups,"item-text":"namegroup",label:"Выберите группу","return-object":""},model:{value:t.group,callback:function(e){t.group=e},expression:"group"}})],1),a("v-col",{attrs:{cols:"12",sm:"4"}},[a("v-text-field",{attrs:{label:"Наименование сделки"},model:{value:t.namedeal,callback:function(e){t.namedeal=e},expression:"namedeal"}})],1),a("v-col",{attrs:{cols:"12",sm:"4"}},[a("v-select",{attrs:{items:t.allCounterparties,"item-text":"name",label:"Выберите контрагента","return-object":""},model:{value:t.counterparty,callback:function(e){t.counterparty=e},expression:"counterparty"}})],1),a("v-col",{attrs:{cols:"12",sm:"4"}},[a("v-select",{attrs:{items:["Оплачено","В работе","Думает","Отказ"],label:"Статус"},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-expansion-panels",[a("v-expansion-panel",[a("v-expansion-panel-header",[t._v("Контакты")]),a("v-expansion-panel-content",[a("v-text-field",{attrs:{label:"ФИО полностью"},model:{value:t.fio,callback:function(e){t.fio=e},expression:"fio"}}),a("v-text-field",{attrs:{label:"Должность"},model:{value:t.position,callback:function(e){t.position=e},expression:"position"}}),a("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"8(###) ###-##-##",expression:"'8(###) ###-##-##'"}],attrs:{label:"Телефон 1"},model:{value:t.phone1,callback:function(e){t.phone1=e},expression:"phone1"}}),a("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"8(###) ###-##-##",expression:"'8(###) ###-##-##'"}],attrs:{label:"Телефон 2"},model:{value:t.phone2,callback:function(e){t.phone2=e},expression:"phone2"}}),a("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"8(###) ###-##-##",expression:"'8(###) ###-##-##'"}],attrs:{label:"Телефон 3"},model:{value:t.phone3,callback:function(e){t.phone3=e},expression:"phone3"}}),a("v-text-field",{attrs:{label:"Email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-text-field",{attrs:{label:"Скайп"},model:{value:t.skype,callback:function(e){t.skype=e},expression:"skype"}}),a("v-textarea",{attrs:{outlined:"",label:"Комментарий"},model:{value:t.commentaryzav,callback:function(e){t.commentaryzav=e},expression:"commentaryzav"}})],1)],1)],1)],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-expansion-panels",[a("v-expansion-panel",[a("v-expansion-panel-header",[t._v("Данные заявки")]),a("v-expansion-panel-content",[a("v-textarea",{attrs:{outlined:"",label:"Комментарий к заявке"},model:{value:t.commentary,callback:function(e){t.commentary=e},expression:"commentary"}}),a("v-text-field",{attrs:{label:"Сумма договора"},model:{value:t.sumdok,callback:function(e){t.sumdok=t._n(e)},expression:"sumdok"}}),a("v-text-field",{attrs:{label:"Сумма платежа"},model:{value:t.sumplat,callback:function(e){t.sumplat=t._n(e)},expression:"sumplat"}}),a("v-text-field",{attrs:{label:"Сумма маржи"},model:{value:t.summar,callback:function(e){t.summar=t._n(e)},expression:"summar"}})],1)],1)],1)],1),a("v-col",{attrs:{cols:"12"}},[a("v-expansion-panels",[a("v-expansion-panel",[a("v-expansion-panel-header",[t._v("Кастомизация карточки сделки")]),a("v-expansion-panel-content",[a("v-row",[a("v-col",{staticClass:"d-flex justify-left"},[a("v-color-picker",{model:{value:t.colorCard,callback:function(e){t.colorCard=e},expression:"colorCard"}})],1),a("v-col",{staticClass:"d-flex justify-right"},[a("v-color-picker",{model:{value:t.colorChip,callback:function(e){t.colorChip=e},expression:"colorChip"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-card",{staticClass:"mx-auto ma-2",attrs:{"max-width":"344",color:""+t.colorCard}},[a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",{staticClass:"headline"},[t._v("Наименование сделки")]),a("v-list-item-subtitle",[t._v("10000 руб")])],1)],1),a("v-card-text",[t._v(" Комментарий к сделке ")]),a("v-card-actions",[a("v-btn",{attrs:{text:"",color:"White"}},[t._v(" Редактировать ")]),a("v-spacer"),a("v-chip",{staticClass:"ma-2",attrs:{color:""+t.colorChip}},[t._v(" Оплачено ")])],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("Отмена")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.testDeal}},[t._v("Создать")])],1)],1)],1),a("v-col",{attrs:{cols:"12"}},[a("DealList")],1)],1)},s=[],l=a("5530"),n=(a("bc3a"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-data-iterator",{attrs:{items:t.allDeals,"items-per-page":t.itemsPerPage,"hide-default-footer":""},on:{"update:itemsPerPage":function(e){t.itemsPerPage=e},"update:items-per-page":function(e){t.itemsPerPage=e}},scopedSlots:t._u([{key:"header",fn:function(){return[a("v-toolbar",{staticClass:"mb-2",attrs:{color:"indigo darken-5",dark:"",flat:""}},[a("v-toolbar-title",[t._v("Сделки ("+t._s(t.dealsCount)+")")])],1)]},proxy:!0},{key:"no-data",fn:function(){return[a("v-alert",{attrs:{type:"info"}},[t._v(" Сделок пока нет ")])]},proxy:!0}])},[[a("v-row",t._l(t.allDeals,(function(e){return a("v-col",{key:e._id,attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[a("v-card",{staticClass:"mx-auto ma-2",attrs:{"max-width":"344",color:""+e.colorCard}},[a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",{staticClass:"headline"},[t._v(" "+t._s(e.namedeal)+" ")]),a("v-list-item-subtitle",[t._v(" "+t._s(e.sumdok)+" руб ")])],1)],1),a("v-card-text",[t._v(" "+t._s(e.commentary)+" ")]),a("v-card-actions",[a("router-link",{attrs:{tag:"button",to:{name:"deal",params:{id:e._id}}}},[a("v-btn",{attrs:{text:""}},[t._v(" Редактировать ")])],1),a("v-spacer"),a("v-chip",{staticClass:"ma-2",attrs:{color:""+e.colorChip}},[t._v(" "+t._s(e.status)+" ")])],1),a("v-btn",{staticClass:"mb-2 ml-2",attrs:{text:""},on:{click:function(a){return t.deleteDeal(e._id)}}},[t._v(" Удалить сделку ")])],1)],1)})),1)]],2)],1)}),i=[],r=a("2f62"),c={data:function(){return{itemsPerPage:4}},methods:{deleteDeal:function(t){this.$store.dispatch("deleteDeal",t)}},computed:Object(l["a"])({},Object(r["b"])(["allDeals","dealsCount"])),mounted:function(){this.$store.dispatch("fetchDeals")}},u=c,d=a("2877"),p=a("6544"),m=a.n(p),h=a("0798"),v=a("8336"),f=a("b0af"),b=a("99d9"),x=a("cc20"),C=a("62ad"),_=a("a523"),g=a("c377"),k=a("da13"),y=a("5d23"),V=a("0fd9"),$=a("2fa4"),w=a("71d9"),B=a("2a7f"),j=Object(d["a"])(u,n,i,!1,null,null,null),I=j.exports;m()(j,{VAlert:h["a"],VBtn:v["a"],VCard:f["a"],VCardActions:b["a"],VCardText:b["b"],VChip:x["a"],VCol:C["a"],VContainer:_["a"],VDataIterator:g["a"],VListItem:k["a"],VListItemContent:y["a"],VListItemSubtitle:y["b"],VListItemTitle:y["c"],VRow:V["a"],VSpacer:$["a"],VToolbar:w["a"],VToolbarTitle:B["b"]});var D={metaInfo:{title:"Сделки | СДО PRO"},data:function(){return{dialog:!1,admin:null,course:null,group:null,status:null,namedeal:null,counterparty:null,commentary:null,sumdok:null,sumplat:null,summar:null,commentaryzav:null,fio:null,position:null,phone1:null,phone2:null,phone3:null,email:null,skype:null,types:["hex","hexa","rgba","hsla","hsva"],type:"hex",type1:"hexa",hex:"#FF00FF",hexa:"#FF00FFFF",rgba:{r:255,g:0,b:255,a:1},hsla:{h:300,s:1,l:.5,a:1},hsva:{h:300,s:1,v:1,a:1},admins:[],courses:[],groups:[],counterparties:[],deals:[]}},methods:{testDeal:function(){var t={admin:this.admin,course:this.course,group:this.group,namedeal:this.namedeal,status:this.status,commentary:this.commentary,counterparty:this.counterparty,sumdok:this.sumdok,sumplat:this.sumplat,summar:this.summar,commentaryzav:this.commentaryzav,fio:this.fio,position:this.position,phone1:this.phone1,phone2:this.phone2,phone3:this.phone3,email:this.email,skype:this.skype,colorCard:this.colorCard,colorChip:this.colorChip};this.$store.dispatch("addedDeals",t),this.dialog=!1}},computed:Object(l["a"])(Object(l["a"])({},Object(r["b"])(["allCounterparties","allAdmins","allGroups","allModule"])),{},{colorCard:{get:function(){return this[this.type]},set:function(t){this[this.type]=t}},colorChip:{get:function(){return this[this.type1]},set:function(t){this[this.type1]=t}}}),mounted:function(){this.$store.dispatch("fetchAdmins"),this.$store.dispatch("fetchModules"),this.$store.dispatch("fetchGroups"),this.$store.dispatch("fetchCounterparties")},components:{DealList:I}},P=D,S=a("c6a6"),E=a("03a4"),O=a("169a"),T=a("cd55"),A=a("49e2"),L=a("c865"),F=a("0393"),z=a("b974"),G=a("8654"),M=a("a844"),N=Object(d["a"])(P,o,s,!1,null,null,null);e["default"]=N.exports;m()(N,{VAutocomplete:S["a"],VBtn:v["a"],VCard:f["a"],VCardActions:b["a"],VCardText:b["b"],VCardTitle:b["c"],VChip:x["a"],VCol:C["a"],VColorPicker:E["a"],VContainer:_["a"],VDialog:O["a"],VExpansionPanel:T["a"],VExpansionPanelContent:A["a"],VExpansionPanelHeader:L["a"],VExpansionPanels:F["a"],VListItem:k["a"],VListItemContent:y["a"],VListItemSubtitle:y["b"],VListItemTitle:y["c"],VRow:V["a"],VSelect:z["a"],VSpacer:$["a"],VTextField:G["a"],VTextarea:M["a"]})}}]);
//# sourceMappingURL=chunk-6474c05b.74f9d506.js.map