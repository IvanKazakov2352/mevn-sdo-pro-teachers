(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a2c4b62"],{"100c":function(t,e,n){"use strict";var i=n("988e"),a=n.n(i);a.a},1681:function(t,e,n){},"4bd4":function(t,e,n){"use strict";n("4de4"),n("7db0"),n("4160"),n("caad"),n("07ac"),n("2532"),n("159b");var i=n("5530"),a=n("58df"),r=n("7e2b"),s=n("3206");e["a"]=Object(a["a"])(r["a"],Object(s["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,n=function(t){return t.$watch("hasError",(function(n){e.$set(e.errorBag,t._uid,n)}),{immediate:!0})},i={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",(function(a){a&&(e.errorBag.hasOwnProperty(t._uid)||(i.valid=n(t)))})):i.valid=n(t),i},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var n=this.watchers.find((function(t){return t._uid===e._uid}));n&&(n.valid(),n.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(i["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"6ca7":function(t,e,n){},"93a1":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-toolbar",{staticClass:"mb-2",attrs:{color:"indigo darken-5",dark:"",flat:""}},[n("v-toolbar-title",[t._v(" Редактирование группы: "+t._s(t.group.namegroup)+" ")])],1),n("v-card",[n("v-form",{model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-row",{staticClass:"mr-2 ml-2"},[n("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[n("v-text-field",{attrs:{rules:t.namegroupRules,label:"Название группы",required:""},model:{value:t.group.namegroup,callback:function(e){t.$set(t.group,"namegroup",e)},expression:"group.namegroup"}})],1),n("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[n("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":t.group.starttraining,transition:"scale-transition","offset-y":"","min-width":"290px"},on:{"update:returnValue":function(e){return t.$set(t.group,"starttraining",e)},"update:return-value":function(e){return t.$set(t.group,"starttraining",e)}},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,a=e.attrs;return[n("v-text-field",t._g(t._b({attrs:{rules:t.starttrainingRules,label:"Начало обучения",readonly:""},model:{value:t.group.starttraining,callback:function(e){t.$set(t.group,"starttraining",e)},expression:"group.starttraining"}},"v-text-field",a,!1),i))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[n("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:t.group.starttraining,callback:function(e){t.$set(t.group,"starttraining",e)},expression:"group.starttraining"}},[n("v-spacer"),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.menu=!1}}},[t._v("Cancel")]),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.menu.save(t.group.starttraining)}}},[t._v("OK")])],1)],1)],1),n("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[n("v-menu",{ref:"menu1",attrs:{"close-on-content-click":!1,"return-value":t.group.endtraining,transition:"scale-transition","offset-y":"","min-width":"290px"},on:{"update:returnValue":function(e){return t.$set(t.group,"endtraining",e)},"update:return-value":function(e){return t.$set(t.group,"endtraining",e)}},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,a=e.attrs;return[n("v-text-field",t._g(t._b({attrs:{rules:t.endtrainingRules,label:"Конец обучения",readonly:""},model:{value:t.group.endtraining,callback:function(e){t.$set(t.group,"endtraining",e)},expression:"group.endtraining"}},"v-text-field",a,!1),i))]}}]),model:{value:t.menu1,callback:function(e){t.menu1=e},expression:"menu1"}},[n("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:t.group.endtraining,callback:function(e){t.$set(t.group,"endtraining",e)},expression:"group.endtraining"}},[n("v-spacer"),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.menu1=!1}}},[t._v("Cancel")]),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.menu1.save(t.group.endtraining)}}},[t._v("OK")])],1)],1)],1),n("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[n("v-menu",{ref:"menu2",attrs:{"close-on-content-click":!1,"return-value":t.group.dateexamen,transition:"scale-transition","offset-y":"","min-width":"290px"},on:{"update:returnValue":function(e){return t.$set(t.group,"dateexamen",e)},"update:return-value":function(e){return t.$set(t.group,"dateexamen",e)}},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,a=e.attrs;return[n("v-text-field",t._g(t._b({attrs:{rules:t.dateexamenRules,label:"Дата экзамена",readonly:""},model:{value:t.group.dateexamen,callback:function(e){t.$set(t.group,"dateexamen",e)},expression:"group.dateexamen"}},"v-text-field",a,!1),i))]}}]),model:{value:t.menu2,callback:function(e){t.menu2=e},expression:"menu2"}},[n("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:t.group.dateexamen,callback:function(e){t.$set(t.group,"dateexamen",e)},expression:"group.dateexamen"}},[n("v-spacer"),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.menu2=!1}}},[t._v("Cancel")]),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.menu2.save(t.group.dateexamen)}}},[t._v("OK")])],1)],1)],1),n("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[n("v-select",{attrs:{rules:t.trainingplanRules,items:["Очная","Стажировка","Дистанционная","Индивидуальный учебный план"],label:"Форма обучения"},model:{value:t.group.trainingplan,callback:function(e){t.$set(t.group,"trainingplan",e)},expression:"group.trainingplan"}})],1),n("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[n("v-select",{attrs:{items:t.allUsers,"item-text":"fiolistener",label:"Выберите слушателей для группы","return-object":"",multiple:""},model:{value:t.group.user,callback:function(e){t.$set(t.group,"user",e)},expression:"group.user"}})],1),n("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[n("v-select",{attrs:{items:t.allModule,"item-text":"nameProfile",label:"Выберите профиль обучения для группы","return-object":"",multiple:""},model:{value:t.group.course,callback:function(e){t.$set(t.group,"course",e)},expression:"group.course"}})],1),n("v-col",{attrs:{cols:"12"}},[n("v-textarea",{attrs:{outlined:"",rules:t.messagelistenerRules,name:"input-7-4",counter:"",maxlength:"1000",label:"Сообщение слушателю(1000 символов максимум)"},model:{value:t.group.messagelistener,callback:function(e){t.$set(t.group,"messagelistener",e)},expression:"group.messagelistener"}})],1),n("v-col",{attrs:{cols:"12",sm:"6"}},[n("v-checkbox",{attrs:{label:"Доступ группы к сдаче экзамена"},model:{value:t.group.dostup,callback:function(e){t.$set(t.group,"dostup",e)},expression:"group.dostup"}})],1),n("v-col",{attrs:{cols:"12"}},[n("v-card-text",{staticClass:"headline"},[t._v(" Сообщить о сдаче экзамена ")])],1),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-checkbox",{attrs:{label:"В уведомлении"},model:{value:t.group.alert,callback:function(e){t.$set(t.group,"alert",e)},expression:"group.alert"}})],1),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-checkbox",{attrs:{disabled:!0===this.group.alert,label:"На почту"},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1),!0===this.message?n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{rules:t.emailRules,label:"Название почты",required:""},model:{value:t.group.email,callback:function(e){t.$set(t.group,"email",e)},expression:"group.email"}})],1):t._e(),n("v-col",{attrs:{cols:"12"}},[n("v-btn",{staticClass:"ma-2",attrs:{"x-large":"",tile:"",outlined:"",color:"success"},on:{click:t.updateGroup}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-pencil")]),t._v(" Редактировать ")],1)],1)],1)],1)],1)],1)},a=[],r=n("5530"),s=(n("bc3a"),n("2f62")),o={metaInfo:{title:"Редактирование группы | СДО PRO"},data:function(){return{menu:!1,menu1:!1,menu2:!1,dostup:!0,message:!1,alert:!0,alert1:!1,email:null,user:null,valid:!1,namegroupRules:[function(t){return!!t||"Введите название группы"}],starttrainingRules:[function(t){return!!t||"Укажите дату начала обучения"}],endtrainingRules:[function(t){return!!t||"Укажите дату конца обучения"}],dateexamenRules:[function(t){return!!t||"Укажите дату экзамена"}],trainingplanRules:[function(t){return!!t||"Выберите план обучения"}],userRules:[function(t){return!!t||"Выберите слушателей для группы"}],messagelistenerRules:[function(t){return!!t||"Введите сообщение для сушателей данной группы"}],emailRules:[function(t){return!!t||"Введите Email слушателя"},function(t){return/.+@.+\..+/.test(t)||"Введите корректный Email"}]}},methods:{updateGroup:function(){this.$store.dispatch("updateGroup",this.$route.params.id),this.$router.push({name:"groups",query:{message:"GroupUpdated"+"(".concat(Date.now(),")")}})}},computed:Object(r["a"])({},Object(s["b"])(["group","allUsers","allModule"])),mounted:function(){this.$store.dispatch("fetchGroup",this.$route.params.id),this.$store.dispatch("fetchUsers"),this.$store.dispatch("fetchModules")}},u=o,l=(n("100c"),n("2877")),c=n("6544"),d=n.n(c),p=n("8336"),h=n("b0af"),f=n("99d9"),m=n("ac7c"),v=n("62ad"),g=n("a523"),b=n("2e4b"),x=n("4bd4"),k=n("132d"),$=n("e449"),V=n("0fd9"),y=n("b974"),_=n("2fa4"),w=n("8654"),I=n("a844"),C=n("71d9"),O=n("2a7f"),R=Object(l["a"])(u,i,a,!1,null,"18fe9ddc",null);e["default"]=R.exports;d()(R,{VBtn:p["a"],VCard:h["a"],VCardText:f["b"],VCheckbox:m["a"],VCol:v["a"],VContainer:g["a"],VDatePicker:b["a"],VForm:x["a"],VIcon:k["a"],VMenu:$["a"],VRow:V["a"],VSelect:y["a"],VSpacer:_["a"],VTextField:w["a"],VTextarea:I["a"],VToolbar:C["a"],VToolbarTitle:O["b"]})},"988e":function(t,e,n){},"99d9":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return u}));var i=n("b0af"),a=n("80d2"),r=Object(a["i"])("v-card__actions"),s=Object(a["i"])("v-card__subtitle"),o=Object(a["i"])("v-card__text"),u=Object(a["i"])("v-card__title");i["a"]},a844:function(t,e,n){"use strict";n("a9e3");var i=n("5530"),a=(n("1681"),n("8654")),r=n("58df"),s=Object(r["a"])(a["a"]);e["a"]=s.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(i["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},a["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,n=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(n,e)+"px"}},genInput:function(){var t=a["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){a["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},ac7c:function(t,e,n){"use strict";n("d3b7"),n("25f0");var i=n("5530"),a=(n("6ca7"),n("ec29"),n("9d26")),r=n("c37a"),s=(n("4de4"),n("45fc"),n("5607")),o=n("a026"),u=o["a"].extend({name:"rippleable",directives:{ripple:s["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),l=n("8547"),c=n("58df");function d(t){t.preventDefault()}var p=Object(c["a"])(r["a"],u,l["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,n=this.internalValue;return this.isMultiple?!!Array.isArray(n)&&n.some((function(n){return t.valueComparator(n,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,n):Boolean(n):this.valueComparator(n,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=r["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:d},t):t},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:d},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,n=this.internalValue;if(this.isMultiple){Array.isArray(n)||(n=[]);var i=n.length;n=n.filter((function(n){return!t.valueComparator(n,e)})),n.length===i&&n.push(e)}else n=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(n,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(n,e)?null:e:!n;this.validate(!0,n),this.internalValue=n,this.hasColor=n}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}});e["a"]=p.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({},r["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(a["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",Object(i["a"])(Object(i["a"])({},this.attrs$),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})},ec29:function(t,e,n){}}]);
//# sourceMappingURL=chunk-3a2c4b62.8785b4dc.js.map