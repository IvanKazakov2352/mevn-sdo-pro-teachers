(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d4e65cc4"],{"1f4f":function(t,e,s){"use strict";s("a9e3");var a=s("5530"),n=(s("8b37"),s("80d2")),i=s("7560"),o=s("58df");e["a"]=Object(o["a"])(i["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(a["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(n["g"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"3b47":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-col",{attrs:{cols:"12"}},[s("v-card",[t.questions.length?s("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[s("thead",[s("tr",[s("th",{staticClass:"text-left"},[t._v("Название вопроса")]),s("th",{staticClass:"text-left"},[t._v("Правильный ответ")]),s("th",{staticClass:"text-left"},[t._v("Неверный ответ")]),s("th",{staticClass:"text-left"},[t._v("Неверный ответ 1")]),s("th",{staticClass:"text-left"},[t._v("Неверный ответ 2")]),s("th",{staticClass:"text-left"},[t._v("Неверный ответ 3")]),s("th",{staticClass:"text-left"},[t._v("Комментарий к вопросу")]),s("th",{staticClass:"text-left"},[t._v("Действия")])])]),s("tbody",t._l(t.questions,(function(e){return s("tr",{key:e.id},[s("td",[t._v(t._s(e.question))]),s("td",[t._v(t._s(e.answer))]),s("td",[t._v(t._s(e.wronganswer))]),s("td",[t._v(t._s(e.wronganswer1))]),s("td",[t._v(t._s(e.wronganswer2))]),s("td",[t._v(t._s(e.wronganswer3))]),s("td",[t._v(t._s(e.comment))]),s("td",[s("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(a){var n=a.on,i=a.attrs;return[s("v-btn",t._g(t._b({attrs:{icon:""},on:{click:function(s){return t.updateQuestionDialog(e.id)}}},"v-btn",i,!1),n),[s("v-icon",[t._v(" mdi-pencil ")])],1)]}}],null,!0)},[s("span",[t._v("Редактирование вопроса")])]),s("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(a){var n=a.on,i=a.attrs;return[s("v-btn",t._g(t._b({attrs:{icon:""},on:{click:function(s){return t.deleteQuestion(e.id)}}},"v-btn",i,!1),n),[s("v-icon",[t._v(" mdi-delete ")])],1)]}}],null,!0)},[s("span",[t._v("Удалить вопрос")])])],1)])})),0)]},proxy:!0}],null,!1,2441587287)}):t._e()],1)],1)},n=[],i={props:{questions:{type:Array,required:!0}},methods:{deleteQuestion:function(t){this.$notify({title:"СДО PRO",message:"Вопрос успешно удален",type:"success"}),this.$emit("deleteQuestion",t)},updateQuestionDialog:function(t){this.$notify({title:"СДО PRO",message:"Вопрос успешно сохранен",type:"success"}),this.$emit("updateQuestionDialog",t)}}},o=i,l=s("2877"),r=s("6544"),c=s.n(r),d=s("8336"),u=s("b0af"),h=s("62ad"),v=s("132d"),f=s("1f4f"),p=s("3a2f"),_=Object(l["a"])(o,a,n,!1,null,null,null);e["default"]=_.exports;c()(_,{VBtn:d["a"],VCard:u["a"],VCol:h["a"],VIcon:v["a"],VSimpleTable:f["a"],VTooltip:p["a"]})},"8b37":function(t,e,s){}}]);
//# sourceMappingURL=chunk-d4e65cc4.eb1583cf.js.map