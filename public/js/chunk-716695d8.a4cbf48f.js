(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-716695d8"],{"169a":function(t,e,n){"use strict";n("7db0"),n("caad"),n("45fc"),n("a9e3"),n("2532"),n("498a");var i=n("5530"),s=n("2909"),a=n("ade3"),o=(n("368e"),n("480e")),c=n("4ad4"),r=n("b848"),l=n("75eb"),d=n("e707"),u=n("e4d3"),h=n("21be"),v=n("f2e7"),f=n("a293"),p=n("58df"),b=n("d9bd"),m=n("80d2"),x=Object(p["a"])(c["a"],r["a"],l["a"],d["a"],u["a"],h["a"],v["a"]);e["a"]=x.extend({name:"v-dialog",directives:{ClickOutside:f["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200}},computed:{classes:function(){var t;return t={},Object(a["a"])(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(a["a"])(t,"v-dialog--active",this.isActive),Object(a["a"])(t,"v-dialog--persistent",this.persistent),Object(a["a"])(t,"v-dialog--fullscreen",this.fullscreen),Object(a["a"])(t,"v-dialog--scrollable",this.scrollable),Object(a["a"])(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(b["e"])("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):d["a"].options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$refs.content.focus(),t.bind()}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===m["x"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var n=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),i=Object(s["a"])(n).find((function(t){return!t.hasAttribute("disabled")}));i&&i.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(o["a"],{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:Object(i["a"])({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=Object(i["a"])(Object(i["a"])({},t.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(m["g"])(this.maxWidth),width:"auto"===this.width?void 0:Object(m["g"])(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},"1f4f":function(t,e,n){"use strict";n("a9e3");var i=n("5530"),s=(n("8b37"),n("80d2")),a=n("7560"),o=n("58df");e["a"]=Object(o["a"])(a["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(i["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(s["g"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"368e":function(t,e,n){},"49e2":function(t,e,n){"use strict";var i=n("0789"),s=n("9d65"),a=n("a9ad"),o=n("3206"),c=n("80d2"),r=n("58df"),l=Object(r["a"])(s["a"],a["a"],Object(o["a"])("expansionPanel","v-expansion-panel-content","v-expansion-panel"));e["a"]=l.extend().extend({name:"v-expansion-panel-content",computed:{isActive:function(){return this.expansionPanel.isActive}},created:function(){this.expansionPanel.registerContent(this)},beforeDestroy:function(){this.expansionPanel.unregisterContent()},render:function(t){var e=this;return t(i["a"],this.showLazyContent((function(){return[t("div",e.setBackgroundColor(e.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:e.isActive}]}),[t("div",{class:"v-expansion-panel-content__wrap"},Object(c["s"])(e))])]})))}})},"8b37":function(t,e,n){},"99d9":function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return r}));var i=n("b0af"),s=n("80d2"),a=Object(s["i"])("v-card__actions"),o=Object(s["i"])("v-card__subtitle"),c=Object(s["i"])("v-card__text"),r=Object(s["i"])("v-card__title");i["a"]},c865:function(t,e,n){"use strict";var i=n("5530"),s=n("0789"),a=n("9d26"),o=n("a9ad"),c=n("3206"),r=n("5607"),l=n("80d2"),d=n("58df"),u=Object(d["a"])(o["a"],Object(c["a"])("expansionPanel","v-expansion-panel-header","v-expansion-panel"));e["a"]=u.extend().extend({name:"v-expansion-panel-header",directives:{ripple:r["a"]},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:function(){return{hasMousedown:!1}},computed:{classes:function(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive:function(){return this.expansionPanel.isActive},isDisabled:function(){return this.expansionPanel.isDisabled},isReadonly:function(){return this.expansionPanel.isReadonly}},created:function(){this.expansionPanel.registerHeader(this)},beforeDestroy:function(){this.expansionPanel.unregisterHeader()},methods:{onClick:function(t){this.$emit("click",t)},genIcon:function(){var t=Object(l["s"])(this,"actions")||[this.$createElement(a["a"],this.expandIcon)];return this.$createElement(s["c"],[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},t)])}},render:function(t){var e=this;return t("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button"},directives:[{name:"ripple",value:this.ripple}],on:Object(i["a"])(Object(i["a"])({},this.$listeners),{},{click:this.onClick,mousedown:function(){return e.hasMousedown=!0},mouseup:function(){return e.hasMousedown=!1}})}),[Object(l["s"])(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}})},cd55:function(t,e,n){"use strict";var i=n("5530"),s=n("4e82"),a=n("3206"),o=n("80d2"),c=n("58df");e["a"]=Object(c["a"])(Object(s["a"])("expansionPanels","v-expansion-panel","v-expansion-panels"),Object(a["b"])("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data:function(){return{content:null,header:null,nextIsActive:!1}},computed:{classes:function(){return Object(i["a"])({"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled},this.groupClasses)},isDisabled:function(){return this.expansionPanels.disabled||this.disabled},isReadonly:function(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent:function(t){this.content=t},unregisterContent:function(){this.content=null},registerHeader:function(t){this.header=t,t.$on("click",this.onClick)},unregisterHeader:function(){this.header=null},onClick:function(t){t.detail&&this.header.$el.blur(),this.$emit("click",t),this.isReadonly||this.isDisabled||this.toggle()},toggle:function(){var t=this;this.content&&(this.content.isBooted=!0),this.$nextTick((function(){return t.$emit("change")}))}},render:function(t){return t("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},Object(o["s"])(this))}})},e441:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-expansion-panel",[n("v-expansion-panel-header",[t._v("Банковские реквизиты контрагента")]),n("v-expansion-panel-content",[n("v-row",{staticClass:"mt-3",attrs:{justify:"center"}},[n("v-dialog",{attrs:{persistent:"","max-width":"1000px"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[n("v-btn",t._g({attrs:{color:"primary",dark:""}},i),[t._v("Добавить банковские реквизиты")])]}}]),model:{value:t.dialogBanks,callback:function(e){t.dialogBanks=e},expression:"dialogBanks"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[t._v("Банковские реквизиты")])]),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[n("v-text-field",{attrs:{label:"Наименование банка"},model:{value:t.namebank,callback:function(e){t.namebank=e},expression:"namebank"}})],1),n("v-col",{attrs:{cols:"11",sm:"5",md:"3"}},[n("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"#########",expression:"'#########'"}],attrs:{label:"БИК"},model:{value:t.bik,callback:function(e){t.bik=e},expression:"bik"}})],1),n("v-col",{attrs:{cols:"11",sm:"5",md:"3"}},[n("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"####################",expression:"'####################'"}],attrs:{label:"Кор счет"},model:{value:t.kscore,callback:function(e){t.kscore=e},expression:"kscore"}})],1),n("v-col",{attrs:{cols:"11",sm:"5",md:"3"}},[n("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"####################",expression:"'####################'"}],attrs:{label:"Расчетный счет"},model:{value:t.rscore,callback:function(e){t.rscore=e},expression:"rscore"}})],1),n("v-col",{attrs:{cols:"11",sm:"3",md:"3"}},[n("v-text-field",{attrs:{label:"Лицевой счет"},model:{value:t.lscore,callback:function(e){t.lscore=e},expression:"lscore"}})],1),n("v-col",{attrs:{cols:"11",sm:"3",md:"3"}},[n("v-text-field",{attrs:{label:"Бюджетный счет"},model:{value:t.bscore,callback:function(e){t.bscore=e},expression:"bscore"}})],1)],1)],1),n("small",[t._v("Все поля обязательны для заполнения")])],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialogBanks=!1}}},[t._v("Отмена")]),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.addBank}},[t._v("Сохранить")])],1)],1)],1)],1),n("v-container",{attrs:{fluid:""}},[n("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",{staticClass:"text-left"},[t._v(" Название банка ")]),n("th",{staticClass:"text-left"},[t._v("БИК")]),n("th",{staticClass:"text-left"},[t._v(" Кор счет ")]),n("th",{staticClass:"text-left"},[t._v(" Расчетный счет ")]),n("th",{staticClass:"text-left"},[t._v(" Лицевой счет ")]),n("th",{staticClass:"text-left"},[t._v("Бух счет")]),n("th",{staticClass:"text-left"},[t._v("Удаление")])])]),n("tbody",t._l(t.counterparty.banks,(function(e){return n("tr",{key:e.id},[n("td",[t._v(t._s(e.namebank))]),n("td",[t._v(t._s(e.bik))]),n("td",[t._v(t._s(e.kscore))]),n("td",[t._v(t._s(e.rscore))]),n("td",[t._v(t._s(e.lscore))]),n("td",[t._v(t._s(e.bscore))]),n("td",[n("v-btn",{attrs:{text:"",color:"red"},on:{click:function(n){return t.deleteBank(e.id)}}},[t._v("Удалить")])],1)])})),0)]},proxy:!0}])})],1)],1)],1)},s=[],a=(n("4de4"),{props:{counterparty:{type:Object,required:!0}},data:function(){return{dialogBanks:!1,namebank:null,bik:null,kscore:null,rscore:null,lscore:null,bscore:null}},methods:{deleteBank:function(t){this.$notify({title:"СДО PRO",message:"Банковские реквизиты успешно удалены",type:"success"}),this.counterparty.banks=this.counterparty.banks.filter((function(e){return e.id!==t}))},addBank:function(){var t={namebank:this.namebank,bik:this.bik,kscore:this.kscore,rscore:this.rscore,lscore:this.lscore,bscore:this.bscore};this.$notify({title:"СДО PRO",message:"Банковские реквизиты успешно созданы",type:"success"}),this.counterparty.banks.push(t),this.dialogBanks=!1}}}),o=a,c=n("2877"),r=n("6544"),l=n.n(r),d=n("8336"),u=n("b0af"),h=n("99d9"),v=n("62ad"),f=n("a523"),p=n("169a"),b=n("cd55"),m=n("49e2"),x=n("c865"),k=n("0fd9"),g=n("1f4f"),y=n("2fa4"),C=n("8654"),_=Object(c["a"])(o,i,s,!1,null,null,null);e["default"]=_.exports;l()(_,{VBtn:d["a"],VCard:u["a"],VCardActions:h["a"],VCardText:h["b"],VCardTitle:h["c"],VCol:v["a"],VContainer:f["a"],VDialog:p["a"],VExpansionPanel:b["a"],VExpansionPanelContent:m["a"],VExpansionPanelHeader:x["a"],VRow:k["a"],VSimpleTable:g["a"],VSpacer:y["a"],VTextField:C["a"]})}}]);
//# sourceMappingURL=chunk-716695d8.a4cbf48f.js.map