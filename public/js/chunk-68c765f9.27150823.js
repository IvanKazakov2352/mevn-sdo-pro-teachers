(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68c765f9"],{"169a":function(t,e,i){"use strict";i("7db0"),i("caad"),i("45fc"),i("a9e3"),i("2532"),i("498a");var n=i("5530"),o=i("2909"),a=i("ade3"),s=(i("368e"),i("480e")),c=i("4ad4"),r=i("b848"),l=i("75eb"),d=i("e707"),u=i("e4d3"),h=i("21be"),v=i("f2e7"),f=i("a293"),m=i("58df"),b=i("d9bd"),p=i("80d2"),g=Object(m["a"])(c["a"],r["a"],l["a"],d["a"],u["a"],h["a"],v["a"]);e["a"]=g.extend({name:"v-dialog",directives:{ClickOutside:f["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200}},computed:{classes:function(){var t;return t={},Object(a["a"])(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(a["a"])(t,"v-dialog--active",this.isActive),Object(a["a"])(t,"v-dialog--persistent",this.persistent),Object(a["a"])(t,"v-dialog--fullscreen",this.fullscreen),Object(a["a"])(t,"v-dialog--scrollable",this.scrollable),Object(a["a"])(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(b["e"])("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):d["a"].options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$refs.content.focus(),t.bind()}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===p["x"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var i=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),n=Object(o["a"])(i).find((function(t){return!t.hasAttribute("disabled")}));n&&n.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(s["a"],{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:Object(n["a"])({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=Object(n["a"])(Object(n["a"])({},t.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(p["g"])(this.maxWidth),width:"auto"===this.width?void 0:Object(p["g"])(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},"368e":function(t,e,i){},"615b":function(t,e,i){},"99d9":function(t,e,i){"use strict";i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return c})),i.d(e,"c",(function(){return r}));var n=i("b0af"),o=i("80d2"),a=Object(o["i"])("v-card__actions"),s=Object(o["i"])("v-card__subtitle"),c=Object(o["i"])("v-card__text"),r=Object(o["i"])("v-card__title");n["a"]},b0af:function(t,e,i){"use strict";i("0481"),i("4069"),i("a9e3");var n=i("5530"),o=(i("615b"),i("10d2")),a=i("297c"),s=i("1c87"),c=i("58df");e["a"]=Object(c["a"])(a["a"],s["a"],o["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({"v-card":!0},s["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o["a"].options.computed.classes.call(this))},styles:function(){var t=Object(n["a"])({},o["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=a["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),i=e.tag,n=e.data;return n.style=this.styles,this.isClickable&&(n.attrs=n.attrs||{},n.attrs.tabindex=0),t(i,this.setBackgroundColor(this.color,n),[this.genProgress(),this.$slots.default])}})},cba5:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-row",{attrs:{justify:"center"}},[i("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[i("v-btn",t._g(t._b({attrs:{color:"primary",dark:""}},"v-btn",o,!1),n),[t._v(" Создание лекции ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("v-toolbar",{attrs:{dark:"",color:"blue darken-3"}},[i("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[i("v-icon",[t._v("mdi-close")])],1),i("v-toolbar-title",[t._v("Создание лекции")]),i("v-spacer"),i("v-toolbar-items",[i("v-btn",{attrs:{dark:"",text:""},on:{click:t.createLection}},[t._v("Создать")])],1)],1),i("v-col",{attrs:{cols:"12",sm:"3"}},[i("v-text-field",{attrs:{label:"Название лекции"},model:{value:t.nameLection,callback:function(e){t.nameLection=e},expression:"nameLection"}})],1),i("v-col",{attrs:{cols:"12",sm:"3"}},[i("v-text-field",{attrs:{label:"Фотография лекции"},model:{value:t.photoLection,callback:function(e){t.photoLection=e},expression:"photoLection"}})],1),i("v-col",{attrs:{cols:"12"}},[i("quillEditor",{ref:"lection",staticStyle:{height:"600px"},attrs:{options:t.editorOption},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)],1)],1),i("v-col",{attrs:{cols:"12"}},[i("v-toolbar",{staticClass:"ma-2",attrs:{color:"indigo darken-5",dark:"",flat:""}},[i("v-toolbar-title",[t._v(" Создание лекций для модуля: "+t._s(t.subModule.nameModule)+" ")])],1)],1),i("v-row",t._l(t.subModule.lections,(function(e){return i("LectionList",{key:e.id,staticClass:"ml-9 mt-4 mb-4",attrs:{lect:e,subModule:t.subModule}})})),1)],1)},o=[],a=(i("a753"),i("8096"),i("14e1"),i("953d")),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{attrs:{"max-width":"340"}},[i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",{staticClass:"headline"},[t._v(" "+t._s(t.lect.nameLection)+" ")])],1)],1),i("v-img",{attrs:{src:t.lect.photoLection,height:"194"}}),i("v-card-actions",[i("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[i("v-btn",t._g(t._b({attrs:{icon:""},on:{click:function(e){return t.lectionPreview(t.lect)}}},"v-btn",o,!1),n),[i("v-icon",[t._v(" mdi-polaroid ")])],1)]}}])},[i("span",[t._v("Просмотреть превью лекции")])]),i("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[i("v-btn",t._g(t._b({attrs:{icon:""},on:{click:function(e){return t.createTest(t.lect)}}},"v-btn",o,!1),n),[i("v-icon",[t._v(" mdi-alpha-t-box-outline ")])],1)]}}])},[i("span",[t._v("Создание тестирования для данной лекции")])]),i("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[i("v-btn",t._g(t._b({attrs:{icon:""},on:{click:function(e){return t.deleteLection(t.lect.id)}}},"v-btn",o,!1),n),[i("v-icon",[t._v(" mdi-delete ")])],1)]}}])},[i("span",[t._v("Удалить лекцию")])])],1)],1)},c=[],r=(i("4de4"),{props:{lect:{type:Object,required:!0,default:{}},subModule:{type:Object,required:!0,default:{}}},data:function(){return{valid:!1,content:"",editorOption:{debug:"info",placeholder:"Создание лекции",readOnly:!0,theme:"snow"}}},methods:{deleteLection:function(t){this.subModule.lections=this.subModule.lections.filter((function(e){return e.id!==t})),this.$store.dispatch("updateProfile",this.$route.params.id)},lectionPreview:function(t){this.$router.push({name:"previewLection",params:{lectID:t.id}})},createTest:function(t){this.$router.push({name:"createTest",params:{lectTestID:t.id}})},redirectToEditlection:function(t){this.$router.push({name:"lectionEdit",params:{lectEditID:t.id}})}}}),l=r,d=i("2877"),u=i("6544"),h=i.n(u),v=i("8336"),f=i("b0af"),m=i("99d9"),b=i("132d"),p=i("adda"),g=i("da13"),k=i("5d23"),y=i("3a2f"),_=Object(d["a"])(l,s,c,!1,null,null,null),O=_.exports;h()(_,{VBtn:v["a"],VCard:f["a"],VCardActions:m["a"],VIcon:b["a"],VImg:p["a"],VListItem:g["a"],VListItemContent:k["a"],VListItemTitle:k["c"],VTooltip:y["a"]});var w={metaInfo:{title:"Создание лекции | СДО PRO"},data:function(){return{dialog:!1,valid:!1,content:"",nameLection:null,photoLection:null,tests:[],editorOption:{debug:"info",placeholder:"Создание лекции",readOnly:!0,theme:"snow"}}},methods:{createLection:function(){var t={id:this.$uuid.v4(),nameLection:this.nameLection,photoLection:this.photoLection,tests:this.tests,content:this.$refs.lection.quill.getContents()};this.subModule.lections.push(t),this.$store.dispatch("updateProfile",this.$route.params.id),this.dialog=!1}},computed:{subModule:function(){return this.$store.getters.subModule(this.$route.params.categoryID,this.$route.params.subcategoryID,this.$route.params.moduleID)}},components:{quillEditor:a["quillEditor"],LectionList:O}},x=w,C=i("62ad"),$=i("169a"),L=i("0fd9"),j=i("2fa4"),I=i("8654"),T=i("71d9"),A=i("2a7f"),S=Object(d["a"])(x,n,o,!1,null,null,null);e["default"]=S.exports;h()(S,{VBtn:v["a"],VCard:f["a"],VCol:C["a"],VDialog:$["a"],VIcon:b["a"],VRow:L["a"],VSpacer:j["a"],VTextField:I["a"],VToolbar:T["a"],VToolbarItems:A["a"],VToolbarTitle:A["b"]})}}]);
//# sourceMappingURL=chunk-68c765f9.27150823.js.map