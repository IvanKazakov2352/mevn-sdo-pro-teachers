(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66345772","chunk-2d0de336"],{"0393":function(t,e,n){"use strict";n("0481"),n("4069");var i=n("5530"),a=(n("210b"),n("604c")),s=n("d9bd");e["a"]=a["a"].extend({name:"v-expansion-panels",provide:function(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({},a["a"].options.computed.classes.call(this)),{},{"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile})}},created:function(){this.$attrs.hasOwnProperty("expand")&&Object(s["a"])("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"===typeof this.value[0]&&Object(s["a"])(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem:function(t,e){var n=this.getValue(t,e),i=this.getValue(t,e+1);t.isActive=this.toggleMethod(n),t.nextIsActive=this.toggleMethod(i)}}})},"169a":function(t,e,n){"use strict";n("7db0"),n("caad"),n("45fc"),n("a9e3"),n("2532"),n("498a");var i=n("5530"),a=n("2909"),s=n("ade3"),o=(n("368e"),n("480e")),r=n("4ad4"),l=n("b848"),c=n("75eb"),u=n("e707"),d=n("e4d3"),h=n("21be"),p=n("f2e7"),v=n("a293"),f=n("58df"),m=n("d9bd"),g=n("80d2"),b=Object(f["a"])(r["a"],l["a"],c["a"],u["a"],d["a"],h["a"],p["a"]);e["a"]=b.extend({name:"v-dialog",directives:{ClickOutside:v["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200}},computed:{classes:function(){var t;return t={},Object(s["a"])(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(s["a"])(t,"v-dialog--active",this.isActive),Object(s["a"])(t,"v-dialog--persistent",this.persistent),Object(s["a"])(t,"v-dialog--fullscreen",this.fullscreen),Object(s["a"])(t,"v-dialog--scrollable",this.scrollable),Object(s["a"])(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(m["e"])("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):u["a"].options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$refs.content.focus(),t.bind()}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===g["x"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var n=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),i=Object(a["a"])(n).find((function(t){return!t.hasAttribute("disabled")}));i&&i.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(o["a"],{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:Object(i["a"])({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=Object(i["a"])(Object(i["a"])({},t.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(g["g"])(this.maxWidth),width:"auto"===this.width?void 0:Object(g["g"])(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},"210b":function(t,e,n){},"368e":function(t,e,n){},"49e2":function(t,e,n){"use strict";var i=n("0789"),a=n("9d65"),s=n("a9ad"),o=n("3206"),r=n("80d2"),l=n("58df"),c=Object(l["a"])(a["a"],s["a"],Object(o["a"])("expansionPanel","v-expansion-panel-content","v-expansion-panel"));e["a"]=c.extend().extend({name:"v-expansion-panel-content",computed:{isActive:function(){return this.expansionPanel.isActive}},created:function(){this.expansionPanel.registerContent(this)},beforeDestroy:function(){this.expansionPanel.unregisterContent()},render:function(t){var e=this;return t(i["a"],this.showLazyContent((function(){return[t("div",e.setBackgroundColor(e.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:e.isActive}]}),[t("div",{class:"v-expansion-panel-content__wrap"},Object(r["s"])(e))])]})))}})},"4bd4":function(t,e,n){"use strict";n("4de4"),n("7db0"),n("4160"),n("caad"),n("07ac"),n("2532"),n("159b");var i=n("5530"),a=n("58df"),s=n("7e2b"),o=n("3206");e["a"]=Object(a["a"])(s["a"],Object(o["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,n=function(t){return t.$watch("hasError",(function(n){e.$set(e.errorBag,t._uid,n)}),{immediate:!0})},i={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",(function(a){a&&(e.errorBag.hasOwnProperty(t._uid)||(i.valid=n(t)))})):i.valid=n(t),i},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var n=this.watchers.find((function(t){return t._uid===e._uid}));n&&(n.valid(),n.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(i["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"615b":function(t,e,n){},"6ca7":function(t,e,n){},8547:function(t,e,n){"use strict";var i=n("a026"),a=n("80d2");e["a"]=i["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:a["j"]}}})},"99d9":function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return l}));var i=n("b0af"),a=n("80d2"),s=Object(a["i"])("v-card__actions"),o=Object(a["i"])("v-card__subtitle"),r=Object(a["i"])("v-card__text"),l=Object(a["i"])("v-card__title");i["a"]},ac7c:function(t,e,n){"use strict";n("d3b7"),n("25f0");var i=n("5530"),a=(n("6ca7"),n("ec29"),n("9d26")),s=n("c37a"),o=(n("4de4"),n("45fc"),n("5607")),r=n("a026"),l=r["a"].extend({name:"rippleable",directives:{ripple:o["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),c=n("8547"),u=n("58df");function d(t){t.preventDefault()}var h=Object(u["a"])(s["a"],l,c["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,n=this.internalValue;return this.isMultiple?!!Array.isArray(n)&&n.some((function(n){return t.valueComparator(n,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,n):Boolean(n):this.valueComparator(n,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=s["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:d},t):t},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:d},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,n=this.internalValue;if(this.isMultiple){Array.isArray(n)||(n=[]);var i=n.length;n=n.filter((function(n){return!t.valueComparator(n,e)})),n.length===i&&n.push(e)}else n=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(n,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(n,e)?null:e:!n;this.validate(!0,n),this.internalValue=n,this.hasColor=n}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}});e["a"]=h.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(a["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",Object(i["a"])(Object(i["a"])({},this.attrs$),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})},b0af:function(t,e,n){"use strict";n("0481"),n("4069"),n("a9e3");var i=n("5530"),a=(n("615b"),n("10d2")),s=n("297c"),o=n("1c87"),r=n("58df");e["a"]=Object(r["a"])(s["a"],o["a"],a["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({"v-card":!0},o["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},a["a"].options.computed.classes.call(this))},styles:function(){var t=Object(i["a"])({},a["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=s["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),n=e.tag,i=e.data;return i.style=this.styles,this.isClickable&&(i.attrs=i.attrs||{},i.attrs.tabindex=0),t(n,this.setBackgroundColor(this.color,i),[this.genProgress(),this.$slots.default])}})},c865:function(t,e,n){"use strict";var i=n("5530"),a=n("0789"),s=n("9d26"),o=n("a9ad"),r=n("3206"),l=n("5607"),c=n("80d2"),u=n("58df"),d=Object(u["a"])(o["a"],Object(r["a"])("expansionPanel","v-expansion-panel-header","v-expansion-panel"));e["a"]=d.extend().extend({name:"v-expansion-panel-header",directives:{ripple:l["a"]},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:function(){return{hasMousedown:!1}},computed:{classes:function(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive:function(){return this.expansionPanel.isActive},isDisabled:function(){return this.expansionPanel.isDisabled},isReadonly:function(){return this.expansionPanel.isReadonly}},created:function(){this.expansionPanel.registerHeader(this)},beforeDestroy:function(){this.expansionPanel.unregisterHeader()},methods:{onClick:function(t){this.$emit("click",t)},genIcon:function(){var t=Object(c["s"])(this,"actions")||[this.$createElement(s["a"],this.expandIcon)];return this.$createElement(a["c"],[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},t)])}},render:function(t){var e=this;return t("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button"},directives:[{name:"ripple",value:this.ripple}],on:Object(i["a"])(Object(i["a"])({},this.$listeners),{},{click:this.onClick,mousedown:function(){return e.hasMousedown=!0},mouseup:function(){return e.hasMousedown=!1}})}),[Object(c["s"])(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}})},cd55:function(t,e,n){"use strict";var i=n("5530"),a=n("4e82"),s=n("3206"),o=n("80d2"),r=n("58df");e["a"]=Object(r["a"])(Object(a["a"])("expansionPanels","v-expansion-panel","v-expansion-panels"),Object(s["b"])("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data:function(){return{content:null,header:null,nextIsActive:!1}},computed:{classes:function(){return Object(i["a"])({"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled},this.groupClasses)},isDisabled:function(){return this.expansionPanels.disabled||this.disabled},isReadonly:function(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent:function(t){this.content=t},unregisterContent:function(){this.content=null},registerHeader:function(t){this.header=t,t.$on("click",this.onClick)},unregisterHeader:function(){this.header=null},onClick:function(t){t.detail&&this.header.$el.blur(),this.$emit("click",t),this.isReadonly||this.isDisabled||this.toggle()},toggle:function(){var t=this;this.content&&(this.content.isBooted=!0),this.$nextTick((function(){return t.$emit("change")}))}},render:function(t){return t("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},Object(o["s"])(this))}})},d4bc:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-toolbar",{staticClass:"mb-2",attrs:{color:"indigo darken-5",dark:"",flat:""}},[n("v-toolbar-title",[t._v("Модуль обучения: "+t._s(t.profile.nameProfile))])],1),n("v-card",[n("v-row",{staticClass:"mr-4 ml-4",attrs:{justify:"center"}},[n("v-expansion-panels",{staticClass:"mt-4",attrs:{focusable:""}},[n("v-expansion-panel",[n("v-expansion-panel-header",[t._v("Редактирование профиля")]),n("v-expansion-panel-content",[n("v-col",{attrs:{cols:"12",sm:"3"}},[n("v-text-field",{attrs:{rules:t.nameModuleRules,label:"Название профиля обучения"},model:{value:t.profile.nameProfile,callback:function(e){t.$set(t.profile,"nameProfile",e)},expression:"profile.nameProfile"}})],1),n("v-list",{attrs:{"three-line":"",subheader:""}},[n("v-subheader",[t._v("Дополнительное управление профилем обучения")]),n("v-list-item",[n("v-list-item-action",[n("v-checkbox",{model:{value:t.profile.dostupOnModule,callback:function(e){t.$set(t.profile,"dostupOnModule",e)},expression:"profile.dostupOnModule"}})],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Доступ слушателя до модуля")]),n("v-list-item-subtitle",[t._v(" Разрешить ли доступ слушателя до модуля обучения ")])],1)],1)],1)],1)],1),n("category",{attrs:{profile:t.profile}})],1),n("v-col",{attrs:{cols:"12"}},[n("v-btn",{staticClass:"ma-2",attrs:{"x-large":"",tile:"",outlined:"",color:"success"},on:{click:t.updateProfile}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-pencil")]),t._v(" Редактировать ")],1)],1)],1)],1)],1)},a=[],s=n("5530"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-expansion-panel",[n("v-expansion-panel-header",[t._v(" Создание категории обучения ")]),n("v-expansion-panel-content",[n("v-row",{attrs:{justify:"center"}},[n("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,a=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"mt-4 mb-4",attrs:{color:"primary",dark:""}},"v-btn",a,!1),i),[t._v(" Создание категории ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[t._v("Создание категории")])]),n("v-card-text",[n("v-container",[n("v-form",{model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{rules:t.nameCategoryRules,label:"Название категории"},model:{value:t.nameCategory,callback:function(e){t.nameCategory=e},expression:"nameCategory"}})],1),n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{rules:t.photoCategoryRules,label:"Ссылка на фотографию"},model:{value:t.linkPhotoCategory,callback:function(e){t.linkPhotoCategory=e},expression:"linkPhotoCategory"}})],1)],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("Отмена")]),n("v-btn",{attrs:{color:"blue darken-1",text:"",disabled:!t.valid},on:{click:t.createCategory}},[t._v("Создать")])],1)],1)],1)],1),n("v-row",t._l(t.categories,(function(t){return n("list",{key:t.payload,staticClass:"mt-4 mb-4 mr-4 ml-4",attrs:{category:t}})})),1)],1)],1)},r=[],l=(n("96cf"),n("1da1")),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{"max-width":"340"}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"headline"},[t._v(" "+t._s(t.category.nameCategory)+" ")])],1)],1),n("v-img",{attrs:{src:t.category.linkPhotoCategory,height:"194"}}),n("v-card-actions",[n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,a=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""},on:{click:function(e){return t.addMaterialRoutes(t.category)}}},"v-btn",a,!1),i),[n("v-icon",[t._v(" mdi-plus ")])],1)]}}])},[n("span",[t._v("Добавить подкатегорию")])]),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,a=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""},on:{click:function(e){t.dialog=!0}}},"v-btn",a,!1),i),[n("v-icon",[t._v(" mdi-pencil ")])],1)]}}])},[n("span",[t._v("Редактировать категорию")])]),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,a=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""},on:{click:function(e){return t.deleteCategory(t.category)}}},"v-btn",a,!1),i),[n("v-icon",[t._v(" mdi-delete ")])],1)]}}])},[n("span",[t._v("Удалить категорию")])])],1),n("v-dialog",{attrs:{"max-width":"1500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[t._v(t._s(t.category.nameCategory))])]),n("v-card-text",[n("v-container",[n("v-form",{model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-col",{attrs:{cols:"12",sm:"6"}},[n("v-text-field",{attrs:{rules:t.nameCategoryRules,label:"Название категории"},model:{value:t.category.nameCategory,callback:function(e){t.$set(t.category,"nameCategory",e)},expression:"category.nameCategory"}})],1),n("v-col",{attrs:{cols:"12",sm:"6"}},[n("v-text-field",{attrs:{rules:t.photoCategoryRules,label:"Ссылка на фотографию"},model:{value:t.category.linkPhotoCategory,callback:function(e){t.$set(t.category,"linkPhotoCategory",e)},expression:"category.linkPhotoCategory"}})],1)],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Отмена ")]),n("v-btn",{attrs:{color:"green darken-1",text:"",disabled:!t.valid},on:{click:function(e){return t.updateCategory(t.category)}}},[t._v(" Редактировать ")])],1)],1)],1)],1)},u=[],d=(n("bc3a"),{props:{category:{type:Object,required:!0,default:{}}},data:function(){return{dialog:!1,valid:!1,nameCategoryRules:[function(t){return!!t||"Введите пожалуйста название категории"}],photoCategoryRules:[function(t){return!!t||"Вставьте пожалуйста ссылку на фотографию"}]}},methods:{addMaterialRoutes:function(t){this.$router.push({name:"subcategory",params:{categoryID:t.id,category:t}})},deleteCategory:function(t){this.$store.dispatch("deleteCategory",t)},updateCategory:function(t){this.$store.dispatch("updateCategory",t),this.dialog=!1}}}),h=d,p=n("2877"),v=n("6544"),f=n.n(v),m=n("8336"),g=n("b0af"),b=n("99d9"),x=n("62ad"),y=n("a523"),C=n("169a"),k=n("4bd4"),V=n("132d"),_=n("adda"),O=n("da13"),w=n("5d23"),$=n("2fa4"),j=n("8654"),I=n("3a2f"),A=Object(p["a"])(h,c,u,!1,null,null,null),B=A.exports;f()(A,{VBtn:m["a"],VCard:g["a"],VCardActions:b["a"],VCardText:b["b"],VCardTitle:b["c"],VCol:x["a"],VContainer:y["a"],VDialog:C["a"],VForm:k["a"],VIcon:V["a"],VImg:_["a"],VListItem:O["a"],VListItemContent:w["a"],VListItemTitle:w["c"],VSpacer:$["a"],VTextField:j["a"],VTooltip:I["a"]});var P=n("2f62"),S={metaInfo:{title:"Создание категории обучения | СДО PRO"},data:function(){return{dialog:!1,nameCategory:null,trainingHours:null,linkPhotoCategory:null,valid:!1,subCategories:[],nameCategoryRules:[function(t){return!!t||"Введите пожалуйста название категории"}],photoCategoryRules:[function(t){return!!t||"Вставьте пожалуйста ссылку на фотографию"}]}},methods:{createCategory:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n={id:t.$uuid.v4(),routeID:t.$route.params.id,nameCategory:t.nameCategory,linkPhotoCategory:t.linkPhotoCategory,subCategories:t.subCategories},t.$store.dispatch("addCategory",n),t.dialog=!1;case 3:case"end":return e.stop()}}),e)})))()}},computed:Object(s["a"])({},Object(P["b"])(["categories"])),components:{list:B}},E=S,T=n("cd55"),D=n("49e2"),R=n("c865"),M=n("0fd9"),L=Object(p["a"])(E,o,r,!1,null,null,null),F=L.exports;f()(L,{VBtn:m["a"],VCard:g["a"],VCardActions:b["a"],VCardText:b["b"],VCardTitle:b["c"],VCol:x["a"],VContainer:y["a"],VDialog:C["a"],VExpansionPanel:T["a"],VExpansionPanelContent:D["a"],VExpansionPanelHeader:R["a"],VForm:k["a"],VRow:M["a"],VSpacer:$["a"],VTextField:j["a"]});var z={metaInfo:{title:"Редактирование профиля обучения | СДО PRO"},data:function(){return{nameModuleRules:[function(t){return!!t||"Укажите пожалуйста имя профиля обучения"}]}},methods:{updateProfile:function(){this.$store.dispatch("updateProfile",this.$route.params.id),this.$router.push({name:"courses",query:{message:"ProfileUpdated"+"(".concat(Date.now(),")")}})}},computed:Object(s["a"])({},Object(P["b"])(["profile"])),mounted:function(){this.$store.dispatch("fetchModule",this.$route.params.id)},components:{category:F}},H=z,Z=n("ac7c"),K=n("0393"),W=n("8860"),q=n("1800"),N=n("e0c7"),J=n("71d9"),U=n("2a7f"),G=Object(p["a"])(H,i,a,!1,null,null,null);e["default"]=G.exports;f()(G,{VBtn:m["a"],VCard:g["a"],VCheckbox:Z["a"],VCol:x["a"],VContainer:y["a"],VExpansionPanel:T["a"],VExpansionPanelContent:D["a"],VExpansionPanelHeader:R["a"],VExpansionPanels:K["a"],VIcon:V["a"],VList:W["a"],VListItem:O["a"],VListItemAction:q["a"],VListItemContent:w["a"],VListItemSubtitle:w["b"],VListItemTitle:w["c"],VRow:M["a"],VSubheader:N["a"],VTextField:j["a"],VToolbar:J["a"],VToolbarTitle:U["b"]})},ec29:function(t,e,n){}}]);
//# sourceMappingURL=chunk-66345772.33c977f3.js.map