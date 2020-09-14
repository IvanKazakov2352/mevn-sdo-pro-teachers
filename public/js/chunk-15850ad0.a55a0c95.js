(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15850ad0"],{"0798":function(t,e,a){"use strict";a("caad");var s=a("5530"),n=a("ade3"),o=(a("0c18"),a("10d2")),l=a("afdd"),i=a("9d26"),r=a("f2e7"),c=a("7560"),u=a("a026"),d=u["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),v=a("58df"),p=a("d9bd");e["a"]=Object(v["a"])(o["a"],r["a"],d).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var t={staticClass:"v-alert__border",class:Object(n["a"])({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(l["a"],{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(i["a"],{props:{color:e}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(i["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=Object(s["a"])(Object(s["a"])({},o["a"].options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||c["a"].options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(p["a"])("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var t={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){var e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},"0c18":function(t,e,a){},"17b3":function(t,e,a){},"5e06":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{attrs:{justify:"center"}},[a("v-dialog",{attrs:{persistent:"","max-width":"1200"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("v-btn",t._g({attrs:{color:"primary",dark:""}},s),[t._v("Добавить контрагента")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Добавление контрагента")])]),a("v-container",[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm10:"","offset-sm1":""}},[a("v-tabs",{attrs:{color:"accent","fixed-tabs":"","slider-color":"success"},model:{value:t.tabMode,callback:function(e){t.tabMode=e},expression:"tabMode"}},[a("v-tab",{key:"zao",attrs:{ripple:""}},[t._v("ЗАО/ООО/ИП")]),a("v-tab",{key:"ch",attrs:{ripple:""}},[t._v("Частное лицо")]),a("v-tab-item",{key:"zao"},[a("v-row",{attrs:{justify:"center"}},[a("v-list",{attrs:{"three-line":"",subheader:""}},[a("v-list-item",[a("v-list-item-content",[a("v-form",{model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[a("v-text-field",{attrs:{rules:t.nameRules,label:"Наименование контрагента"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[a("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"############",expression:"'############'"}],attrs:{rules:t.innRules,label:"ИНН"},model:{value:t.inn,callback:function(e){t.inn=e},expression:"inn"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[a("v-select",{attrs:{rules:t.managerRules,items:t.allAdmins,"item-text":"fio",label:"Менеджеры"},model:{value:t.manager,callback:function(e){t.manager=e},expression:"manager"}})],1)],1)],1),a("v-expansion-panels",{attrs:{focusable:""}},[a("CounterpartiesDopDataZao",{on:{fetchDopDataZao:t.getDopDataZao}}),a("CounterpartiesBanks",{on:{addBanks:t.onAddBanks}})],1)],1)],1)],1)],1)],1),a("v-tab-item",{key:"ch"},[a("v-row",{attrs:{justify:"center"}},[a("v-list",{attrs:{"three-line":"",subheader:""}},[a("v-list-item",[a("v-list-item-content",[a("v-form",{model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[a("v-text-field",{attrs:{rules:t.nameRules,label:"Наименование контрагента"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[a("v-text-field",{attrs:{rules:t.innRules,label:"ИНН"},model:{value:t.inn,callback:function(e){t.inn=e},expression:"inn"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[a("v-select",{attrs:{rules:t.managerRules,items:t.allAdmins,"item-text":"fio",label:"Менеджеры"},model:{value:t.manager,callback:function(e){t.manager=e},expression:"manager"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[a("v-select",{attrs:{items:t.allGroups,"item-text":"namegroup",label:"Группа",multiple:"","return-object":""},model:{value:t.group,callback:function(e){t.group=e},expression:"group"}})],1)],1)],1),a("v-expansion-panels",{attrs:{focusable:""}},[a("CounterpartiesDopDataCh",{on:{fetchDopDataCh:t.getDopDataCh}}),a("CounterpartiesBanks",{on:{addBanks:t.onAddBanks}})],1)],1)],1)],1)],1)],1)],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("Закрыть")]),a("v-btn",{attrs:{color:"blue darken-1",disabled:!t.valid,text:""},on:{click:t.addCounterparty}},[t._v("Добавить контрагента")])],1)],1)],1),a("v-col",{attrs:{cols:"12"}},[a("CounterpartiyList")],1)],1)},n=[],o=(a("b0c0"),a("5530")),l=(a("bc3a"),a("2f62")),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-expansion-panel",[a("v-expansion-panel-header",[t._v("Реквизиты контрагента")]),a("v-expansion-panel-content",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"3"}},[a("v-text-field",{attrs:{label:"Краткое наименование"},model:{value:t.namekr,callback:function(e){t.namekr=e},expression:"namekr"}})],1),a("v-col",{attrs:{cols:"12",sm:"3"}},[a("v-text-field",{attrs:{label:"ФИО Директора"},model:{value:t.fio,callback:function(e){t.fio=e},expression:"fio"}})],1),a("v-col",{attrs:{cols:"12",sm:"3"}},[a("v-text-field",{attrs:{label:"Должность"},model:{value:t.position,callback:function(e){t.position=e},expression:"position"}})],1),a("v-col",{attrs:{cols:"12",sm:"3"}},[a("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"######",expression:"'######'"}],attrs:{label:"Почтовый индекс"},model:{value:t.postcode,callback:function(e){t.postcode=e},expression:"postcode"}})],1),a("v-col",{attrs:{cols:"12",sm:"3"}},[a("v-text-field",{attrs:{label:"Город"},model:{value:t.town,callback:function(e){t.town=e},expression:"town"}})],1),a("v-col",{attrs:{cols:"12",sm:"3"}},[a("v-text-field",{attrs:{label:"Юридический адрес"},model:{value:t.legal,callback:function(e){t.legal=e},expression:"legal"}})],1),a("v-col",{attrs:{cols:"12",sm:"3"}},[a("v-text-field",{attrs:{label:"Почтовый адрес"},model:{value:t.postaddress,callback:function(e){t.postaddress=e},expression:"postaddress"}})],1),a("v-col",{attrs:{cols:"12",sm:"3"}},[a("v-text-field",{attrs:{label:"Фактический адрес"},model:{value:t.factaddress,callback:function(e){t.factaddress=e},expression:"factaddress"}})],1),a("v-col",{attrs:{cols:"12",sm:"3"}},[a("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"###############",expression:"'###############'"}],attrs:{label:"ОГРН(ИП)"},model:{value:t.ogrn,callback:function(e){t.ogrn=e},expression:"ogrn"}})],1),a("v-col",{attrs:{cols:"12",sm:"3"}},[a("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"##########",expression:"'##########'"}],attrs:{label:"КПП"},model:{value:t.kpp,callback:function(e){t.kpp=e},expression:"kpp"}})],1),a("v-col",{attrs:{cols:"12",sm:"3"}},[a("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"#########",expression:"'#########'"}],attrs:{label:"ОКПО"},model:{value:t.okpo,callback:function(e){t.okpo=e},expression:"okpo"}})],1),a("v-col",{attrs:{cols:"12",sm:"3"}},[a("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"###########",expression:"'###########'"}],attrs:{label:"ОКАТО"},model:{value:t.okato,callback:function(e){t.okato=e},expression:"okato"}})],1),a("v-col",{attrs:{cols:"12",sm:"3"}},[a("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"###########",expression:"'###########'"}],attrs:{label:"ОКТМО"},model:{value:t.oktmo,callback:function(e){t.oktmo=e},expression:"oktmo"}})],1),a("v-col",{attrs:{cols:"12",sm:"3"}},[a("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"#######",expression:"'#######'"}],attrs:{label:"ОКОГУ"},model:{value:t.okogu,callback:function(e){t.okogu=e},expression:"okogu"}})],1),a("v-col",{attrs:{cols:"12",sm:"3"}},[a("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"#####",expression:"'#####'"}],attrs:{label:"ОКОПФ"},model:{value:t.okopf,callback:function(e){t.okopf=e},expression:"okopf"}})],1),a("v-col",{attrs:{cols:"12",sm:"3"}},[a("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"8(###)###-##-## доб ####",expression:"'8(###)###-##-## доб ####'"}],attrs:{label:"Телефон"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),a("v-col",{attrs:{cols:"12",sm:"3"}},[a("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"8(###)###-##-## доб ####",expression:"'8(###)###-##-## доб ####'"}],attrs:{label:"Факс"},model:{value:t.faks,callback:function(e){t.faks=e},expression:"faks"}})],1),a("v-col",{attrs:{cols:"12",sm:"3"}},[a("v-text-field",{attrs:{label:"Email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1),a("v-card-text",[t._v("Данные автоматически сохраняются каждые 7 секунд")]),a("v-btn",{staticClass:"ma-2",attrs:{outlined:"",color:"indigo"},on:{click:t.fetchDopData}},[t._v("Сохранить")])],1)],1)},r=[],c=a("ade3"),u={data:function(){var t;return t={namekr:null,position:null,fio:null,postcode:null,town:null,legal:null,postaddress:null,factaddress:null,ogrn:null,kpp:null,okpo:null,okato:null},Object(c["a"])(t,"okato",null),Object(c["a"])(t,"oktmo",null),Object(c["a"])(t,"okogu",null),Object(c["a"])(t,"okopf",null),Object(c["a"])(t,"phone",null),Object(c["a"])(t,"faks",null),Object(c["a"])(t,"email",null),t},methods:{fetchDopData:function(){this.$emit("fetchDopDataZao",{namekr:this.namekr,position:this.position,fio:this.fio,postcode:this.postcode,town:this.town,legal:this.legal,postaddress:this.postaddress,factaddress:this.factaddress,ogrn:this.ogrn,kpp:this.kpp,okpo:this.okpo,okato:this.okato,oktmo:this.oktmo,okogu:this.okogu,okopf:this.okopf,phone:this.phone,faks:this.faks,email:this.email})}},mounted:function(){var t=this;setInterval((function(){t.$emit("fetchDopDataZao",{namekr:t.namekr,position:t.position,fio:t.fio,postcode:t.postcode,town:t.town,legal:t.legal,postaddress:t.postaddress,factaddress:t.factaddress,ogrn:t.ogrn,kpp:t.kpp,okpo:t.okpo,okato:t.okato,oktmo:t.oktmo,okogu:t.okogu,okopf:t.okopf,phone:t.phone,faks:t.faks,email:t.email})}),7e3)}},d=u,v=a("2877"),p=a("6544"),m=a.n(p),h=a("8336"),f=a("99d9"),b=a("62ad"),k=a("cd55"),x=a("49e2"),g=a("c865"),_=a("0fd9"),C=a("8654"),y=Object(v["a"])(d,i,r,!1,null,null,null),w=y.exports;m()(y,{VBtn:h["a"],VCardText:f["b"],VCol:b["a"],VExpansionPanel:k["a"],VExpansionPanelContent:x["a"],VExpansionPanelHeader:g["a"],VRow:_["a"],VTextField:C["a"]});var V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-expansion-panel",[a("v-expansion-panel-header",[t._v("Реквизиты контрагента")]),a("v-expansion-panel-content",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"3"}},[a("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":t.date,transition:"scale-transition","offset-y":"","min-width":"290px"},on:{"update:returnValue":function(e){t.date=e},"update:return-value":function(e){t.date=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("v-text-field",t._g({attrs:{label:"Дата рождения",readonly:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},s))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[a("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.menu=!1}}},[t._v("Cancel")]),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.menu.save(t.date)}}},[t._v("OK")])],1)],1)],1),a("v-col",{attrs:{cols:"12",sm:"3"}},[a("v-text-field",{attrs:{label:"Место рождения"},model:{value:t.birthday,callback:function(e){t.birthday=e},expression:"birthday"}})],1),a("v-col",{attrs:{cols:"12",sm:"3"}},[a("v-select",{attrs:{items:t.educations,label:"Образование"},model:{value:t.education,callback:function(e){t.education=e},expression:"education"}})],1),a("v-col",{attrs:{cols:"12",sm:"3"}},[a("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"8(###) ###-##-##",expression:"'8(###) ###-##-##'"}],attrs:{label:"Tелефон"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),a("v-col",{attrs:{cols:"12",sm:"3"}},[a("v-text-field",{attrs:{label:"Email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),a("v-col",{attrs:{cols:"12",sm:"3"}},[a("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"######",expression:"'######'"}],attrs:{label:"Почтовый индекс"},model:{value:t.postcode,callback:function(e){t.postcode=e},expression:"postcode"}})],1),a("v-col",{attrs:{cols:"12",sm:"3"}},[a("v-text-field",{attrs:{label:"Город"},model:{value:t.town,callback:function(e){t.town=e},expression:"town"}})],1),a("v-col",{attrs:{cols:"12",sm:"3"}},[a("v-text-field",{attrs:{label:"Адрес регистрации"},model:{value:t.address,callback:function(e){t.address=e},expression:"address"}})],1),a("v-col",{attrs:{cols:"12",sm:"3"}},[a("v-text-field",{attrs:{label:"Фактический адрес"},model:{value:t.factaddress,callback:function(e){t.factaddress=e},expression:"factaddress"}})],1),a("v-col",{attrs:{cols:"12",sm:"3"}},[a("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"###-###-###-##",expression:"'###-###-###-##'"}],attrs:{label:"Снилс"},model:{value:t.snils,callback:function(e){t.snils=e},expression:"snils"}})],1),a("v-col",{attrs:{cols:"12",sm:"3"}},[a("v-text-field",{attrs:{label:"Паспорт"},model:{value:t.pasport,callback:function(e){t.pasport=e},expression:"pasport"}})],1),a("v-col",{attrs:{cols:"12",sm:"3"}},[a("v-menu",{ref:"menu1",attrs:{"close-on-content-click":!1,"return-value":t.date1,transition:"scale-transition","offset-y":"","min-width":"290px"},on:{"update:returnValue":function(e){t.date1=e},"update:return-value":function(e){t.date1=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("v-text-field",t._g({attrs:{label:"Дата получения",readonly:""},model:{value:t.date1,callback:function(e){t.date1=e},expression:"date1"}},s))]}}]),model:{value:t.menu1,callback:function(e){t.menu1=e},expression:"menu1"}},[a("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:t.date1,callback:function(e){t.date1=e},expression:"date1"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.menu1=!1}}},[t._v("Cancel")]),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.menu1.save(t.date1)}}},[t._v("OK")])],1)],1)],1),a("v-col",{attrs:{cols:"11",sm:"3"}},[a("v-text-field",{attrs:{label:"Выдан(Паспорт)"},model:{value:t.vpasport,callback:function(e){t.vpasport=e},expression:"vpasport"}})],1)],1),a("v-card-text",[t._v("Данные автоматически сохраняются каждые 7 секунд")]),a("v-btn",{staticClass:"ma-2",attrs:{outlined:"",color:"indigo"},on:{click:t.fetchDopDataCh}},[t._v("Сохранить")])],1)],1)},$=[],B={data:function(){return{birthday:null,education:null,phone:null,email:null,postcode:null,town:null,address:null,factaddress:null,snils:null,pasport:null,vpasport:null,menu:!1,menu1:!1,date:(new Date).toISOString().substr(0,10),date1:(new Date).toISOString().substr(0,10),educations:["Неопределенно","Основоное общее","Среднее-общее","Среднее-профессиональное","Высшее-бакалавриат","Высшее-специалитет","Высшее-магистратура"]}},methods:{fetchDopDataCh:function(){this.$emit("fetchDopDataCh",{birthday:this.birthday,education:this.education,phone:this.phone,email:this.email,postcode:this.postcode,town:this.town,address:this.address,factaddress:this.factaddress,snils:this.snils,pasport:this.pasport,vpasport:this.vpasport})}},mounted:function(){var t=this;setInterval((function(){t.$emit("fetchDopDataCh",{birthday:t.birthday,education:t.education,phone:t.phone,email:t.email,postcode:t.postcode,town:t.town,address:t.address,factaddress:t.factaddress,snils:t.snils,pasport:t.pasport,vpasport:t.vpasport})}),7e3)}},D=B,O=a("2e4b"),j=a("e449"),S=a("b974"),P=a("2fa4"),I=Object(v["a"])(D,V,$,!1,null,null,null),E=I.exports;m()(I,{VBtn:h["a"],VCardText:f["b"],VCol:b["a"],VDatePicker:O["a"],VExpansionPanel:k["a"],VExpansionPanelContent:x["a"],VExpansionPanelHeader:g["a"],VMenu:j["a"],VRow:_["a"],VSelect:S["a"],VSpacer:P["a"],VTextField:C["a"]});var A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-expansion-panel",[a("v-expansion-panel-header",[t._v("Банковские реквизиты контрагента")]),a("v-expansion-panel-content",[a("v-row",{staticClass:"mt-3",attrs:{justify:"center"}},[a("v-dialog",{attrs:{persistent:"","max-width":"1000px"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("v-btn",t._g({attrs:{color:"primary",dark:""}},s),[t._v("Добавить банковские реквизиты")])]}}]),model:{value:t.dialogBank,callback:function(e){t.dialogBank=e},expression:"dialogBank"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Банковские реквизиты")])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[a("v-text-field",{attrs:{label:"Наименование банка"},model:{value:t.namebank,callback:function(e){t.namebank=e},expression:"namebank"}})],1),a("v-col",{attrs:{cols:"11",sm:"5",md:"3"}},[a("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"#########",expression:"'#########'"}],attrs:{label:"БИК"},model:{value:t.bik,callback:function(e){t.bik=e},expression:"bik"}})],1),a("v-col",{attrs:{cols:"11",sm:"5",md:"3"}},[a("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"####################",expression:"'####################'"}],attrs:{label:"Кор счет"},model:{value:t.kscore,callback:function(e){t.kscore=e},expression:"kscore"}})],1),a("v-col",{attrs:{cols:"11",sm:"5",md:"3"}},[a("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"####################",expression:"'####################'"}],attrs:{label:"Расчетный счет"},model:{value:t.rscore,callback:function(e){t.rscore=e},expression:"rscore"}})],1),a("v-col",{attrs:{cols:"11",sm:"3",md:"3"}},[a("v-text-field",{attrs:{label:"Лицевой счет"},model:{value:t.lscore,callback:function(e){t.lscore=e},expression:"lscore"}})],1),a("v-col",{attrs:{cols:"11",sm:"3",md:"3"}},[a("v-text-field",{attrs:{label:"Бюджетный счет"},model:{value:t.bscore,callback:function(e){t.bscore=e},expression:"bscore"}})],1)],1)],1),a("small",[t._v("Все поля обязательны для заполнения")])],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialogBank=!1}}},[t._v("Отмена")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.addBanks}},[t._v("Сохранить")])],1)],1)],1)],1),a("v-container",{attrs:{fluid:""}},[t.banks.length?a("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[t._v(" Название банка ")]),a("th",{staticClass:"text-left"},[t._v("БИК")]),a("th",{staticClass:"text-left"},[t._v(" Кор счет ")]),a("th",{staticClass:"text-left"},[t._v(" Расчетный счет ")]),a("th",{staticClass:"text-left"},[t._v(" Лицевой счет ")]),a("th",{staticClass:"text-left"},[t._v("Бух счет")]),a("th",{staticClass:"text-left"},[t._v("Удалить")])])]),a("tbody",t._l(t.banks,(function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.namebank))]),a("td",[t._v(t._s(e.bik))]),a("td",[t._v(t._s(e.kscore))]),a("td",[t._v(t._s(e.rscore))]),a("td",[t._v(t._s(e.lscore))]),a("td",[t._v(t._s(e.bscore))]),a("td",[a("v-btn",{attrs:{text:"",color:"red"},on:{click:function(a){return t.deleteBank(e.id)}}},[t._v("Удалить")])],1)])})),0)]},proxy:!0}],null,!1,2630954634)}):t._e()],1)],1)],1)},L=[],T=(a("4de4"),{data:function(){return{dialogBank:!1,namebank:null,bik:null,kscore:null,rscore:null,lscore:null,bscore:null,banks:[]}},methods:{addBanks:function(){var t={id:this.$uuid.v4(),namebank:this.namebank,bik:this.bik,kscore:this.kscore,rscore:this.rscore,lscore:this.lscore,bscore:this.bscore};this.banks.push(t),this.$emit("addBanks",{banks:this.banks}),this.dialogBank=!1},deleteBank:function(t){this.banks=this.banks.filter((function(e){return e.id!==t}))}}}),N=T,R=a("b0af"),M=a("a523"),Z=a("169a"),z=a("1f4f"),F=Object(v["a"])(N,A,L,!1,null,null,null),W=F.exports;m()(F,{VBtn:h["a"],VCard:R["a"],VCardActions:f["a"],VCardText:f["b"],VCardTitle:f["c"],VCol:b["a"],VContainer:M["a"],VDialog:Z["a"],VExpansionPanel:k["a"],VExpansionPanelContent:x["a"],VExpansionPanelHeader:g["a"],VRow:_["a"],VSimpleTable:z["a"],VSpacer:P["a"],VTextField:C["a"]});var G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-toolbar",{staticClass:"mb-2",attrs:{color:"indigo darken-5",dark:"",flat:""}},[a("v-toolbar-title",[t._v("Контрагенты ("+t._s(t.countCounterparties)+")")])],1),t.countCounterparties?a("v-card",{attrs:{"max-height":"auto","max-width":"auto"}},[a("v-col",{attrs:{cols:"12"}},[a("v-simple-table",{staticClass:"mr-2 ml-2",attrs:{"fixed-header":"",id:"Table"},scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[t._v("Название контрагента")]),a("th",{staticClass:"text-left"},[t._v("ИНН")]),a("th",{staticClass:"text-left"},[t._v("Менеджер")]),a("th",{staticClass:"text-left"},[t._v("Дата внесения")]),a("th",{staticClass:"text-left"},[t._v("Действия")])])]),a("tbody",t._l(t.allCounterpartiesPaginate,(function(e){return a("tr",{key:e._id},[a("td",[t._v(t._s(e.name))]),a("td",[t._v(t._s(e.inn))]),a("td",[t._v(t._s(e.manager))]),a("td",[t._v(t._s(new Date(e.date).toLocaleString()))]),a("td",[a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(s){var n=s.on,o=s.attrs;return[a("router-link",{attrs:{tag:"button",to:{name:"CounterpartiesEdit",params:{id:e._id}}}},[a("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",o,!1),n),[a("v-icon",[t._v(" mdi-pencil ")])],1)],1)]}}],null,!0)},[a("span",[t._v("Редактирование контрагента")])]),a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(s){var n=s.on,o=s.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:""},on:{click:function(a){return t.deleteCounterparty(e._id)}}},"v-btn",o,!1),n),[a("v-icon",[t._v(" mdi-delete ")])],1)]}}],null,!0)},[a("span",[t._v("Удалить контрагента")])])],1)])})),0)]},proxy:!0}])}),t.countCounterparties?a("v-pagination",{attrs:{length:t.pages,"click-handler":t.pageClick,"total-visible":3,"prev-icon":"mdi-menu-left","next-icon":"mdi-menu-right",color:"blue"},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}}):t._e()],1)],1):a("v-alert",{attrs:{type:"info"}},[t._v(" Контрагентов пока что нет, нажмите на кнопку добавить контрагента ")])],1)},H=[],J=(a("fb6a"),{data:function(){return{itemsPerPage:10,page:1,counterpartyPerPage:10}},methods:{deleteCounterparty:function(t){this.$store.dispatch("deleteCounterparties",t)},pageClick:function(t){this.page=t}},computed:Object(o["a"])(Object(o["a"])({},Object(l["b"])(["allCounterparties","countCounterparties"])),{},{pages:function(){return Math.ceil(this.allCounterparties.length/10)},allCounterpartiesPaginate:function(){var t=(this.page-1)*this.counterpartyPerPage,e=t+this.counterpartyPerPage;return this.allCounterparties.slice(t,e)}}),mounted:function(){this.$store.dispatch("fetchCounterparties")}}),K=J,q=a("0798"),Q=a("132d"),U=a("891e"),X=a("71d9"),Y=a("2a7f"),tt=a("3a2f"),et=Object(v["a"])(K,G,H,!1,null,null,null),at=et.exports;m()(et,{VAlert:q["a"],VBtn:h["a"],VCard:R["a"],VCol:b["a"],VContainer:M["a"],VIcon:Q["a"],VPagination:U["a"],VSimpleTable:z["a"],VToolbar:X["a"],VToolbarTitle:Y["b"],VTooltip:tt["a"]});var st={metaInfo:{title:"Контрагенты | СДО PRO"},data:function(){return{valid:!1,dialog:!1,name:null,inn:null,manager:null,group:null,dopParamsZao:null,dopParamsCh:null,banks:[],tabMode:"data",nameRules:[function(t){return!!t||"Введите название контрагента"}],innRules:[function(t){return!!t||"Введите ИНН контрагента"}],managerRules:[function(t){return!!t||"Укажите менеджера для данного контрагента"}]}},methods:{getDopDataZao:function(t){this.dopParamsZao=t},getDopDataCh:function(t){this.dopParamsCh=t},onAddBanks:function(t){this.banks=t},addCounterparty:function(){var t=Object.assign({},this.dopParamsZao),e=Object.assign({},this.dopParamsCh),a=this.banks.banks,s=Object.assign({},Object(o["a"])(Object(o["a"])(Object(o["a"])({name:this.name,inn:this.inn,manager:this.manager,group:this.group},t),e),{},{banks:a}));this.$store.dispatch("addedCounterparty",s),this.dialog=!1}},computed:Object(l["b"])(["allAdmins","allGroups"]),mounted:function(){this.$store.dispatch("fetchAdmins"),this.$store.dispatch("fetchGroups")},components:{CounterpartiyList:at,CounterpartiesDopDataZao:w,CounterpartiesDopDataCh:E,CounterpartiesBanks:W}},nt=st,ot=a("0393"),lt=a("0e8f"),it=a("4bd4"),rt=a("a722"),ct=a("8860"),ut=a("da13"),dt=a("5d23"),vt=a("71a3"),pt=a("c671"),mt=a("fe57"),ht=Object(v["a"])(nt,s,n,!1,null,null,null);e["default"]=ht.exports;m()(ht,{VBtn:h["a"],VCard:R["a"],VCardActions:f["a"],VCardTitle:f["c"],VCol:b["a"],VContainer:M["a"],VDialog:Z["a"],VExpansionPanels:ot["a"],VFlex:lt["a"],VForm:it["a"],VLayout:rt["a"],VList:ct["a"],VListItem:ut["a"],VListItemContent:dt["a"],VRow:_["a"],VSelect:S["a"],VSpacer:P["a"],VTab:vt["a"],VTabItem:pt["a"],VTabs:mt["a"],VTextField:C["a"]})},"891e":function(t,e,a){"use strict";a("99af"),a("d81d"),a("a9e3"),a("d3b7"),a("25f0");var s=a("2909"),n=a("5530"),o=(a("17b3"),a("9d26")),l=a("dc22"),i=a("a9ad"),r=a("de2c"),c=a("7560"),u=a("58df");e["a"]=Object(u["a"])(i["a"],Object(r["a"])({onVisible:["init"]}),c["a"]).extend({name:"v-pagination",directives:{Resize:l["a"]},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(t){return t%1===0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return Object(n["a"])({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10),e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);var a=e%2===0?1:0,n=Math.floor(e/2),o=this.length-n+1+a;if(this.value>n&&this.value<o){var l=this.value-n+2,i=this.value+n-2-a;return[1,"..."].concat(Object(s["a"])(this.range(l,i)),["...",this.length])}if(this.value===n){var r=this.value+n-1-a;return[].concat(Object(s["a"])(this.range(1,r)),["...",this.length])}if(this.value===o){var c=this.value-n+1;return[1,"..."].concat(Object(s["a"])(this.range(c,this.length)))}return[].concat(Object(s["a"])(this.range(1,n)),["..."],Object(s["a"])(this.range(o,this.length)))}},watch:{value:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.$nextTick(this.onResize),setTimeout((function(){return t.selected=t.value}),100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,e){var a=[];t=t>0?t:1;for(var s=t;s<=e;s++)a.push(s);return a},genIcon:function(t,e,a,s,n){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":a},attrs:{type:"button","aria-label":n},on:a?{}:{click:s}},[t(o["a"],[e])])])},genItem:function(t,e){var a=this,s=e===this.value&&(this.color||"primary"),n=e===this.value,o=n?this.currentPageAriaLabel:this.pageAriaLabel;return t("button",this.setBackgroundColor(s,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":e===this.value},attrs:{type:"button","aria-current":n,"aria-label":this.$vuetify.lang.t(o,e)},on:{click:function(){return a.$emit("input",e)}}}),[e.toString()])},genItems:function(t){var e=this;return this.items.map((function(a,s){return t("li",{key:s},[isNaN(Number(a))?t("span",{class:"v-pagination__more"},[a.toString()]):e.genItem(t,a)])}))},genList:function(t,e){return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}},render:function(t){var e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return t("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(t,e)])}})}}]);
//# sourceMappingURL=chunk-15850ad0.a55a0c95.js.map