(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9148db3c"],{"4c72":function(t,e,n){},"9f19":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fill-height"},[n("v-sheet",{staticClass:"d-flex",attrs:{tile:"",height:"54",color:"grey lighten-3"}}),n("v-sheet",{attrs:{height:"600"}},[n("v-calendar",{attrs:{events:t.allTasks},on:{change:t.getEvents}})],1)],1)},r=[],i=n("2f62"),s={methods:{getEvents:function(t){var e=t.start,n=t.end,a=[],r=new Date("".concat(e.date,"T00:00:00")),i=new Date("".concat(n.date,"T23:59:59"));i.getTime(),r.getTime();this.events=a}},computed:Object(i["b"])(["allTasks"]),mounted:function(){this.$store.dispatch("fetchTasks")}},o=s,c=n("2877"),u=n("6544"),d=n.n(u),l=(n("4160"),n("13d5"),n("b64b"),n("ac1f"),n("1276"),n("159b"),n("5530")),h=(n("99af"),n("4de4"),n("d81d"),n("d13b"),n("5607")),v=(n("fb6a"),n("58df")),f=n("a9ad"),y=n("dfda"),m=n("ade3"),g=n("a026"),p=g["default"].extend({name:"mouse",methods:{getDefaultMouseEventHandlers:function(t,e){var n;return this.getMouseEventHandlers((n={},Object(m["a"])(n,"click"+t,{event:"click"}),Object(m["a"])(n,"contextmenu"+t,{event:"contextmenu",prevent:!0,result:!1}),Object(m["a"])(n,"mousedown"+t,{event:"mousedown"}),Object(m["a"])(n,"mousemove"+t,{event:"mousemove"}),Object(m["a"])(n,"mouseup"+t,{event:"mouseup"}),Object(m["a"])(n,"mouseenter"+t,{event:"mouseenter"}),Object(m["a"])(n,"mouseleave"+t,{event:"mouseleave"}),Object(m["a"])(n,"touchstart"+t,{event:"touchstart"}),Object(m["a"])(n,"touchmove"+t,{event:"touchmove"}),Object(m["a"])(n,"touchend"+t,{event:"touchend"}),n),e)},getMouseEventHandlers:function(t,e){var n=this,a={},r=function(r){var i=t[r];if(!n.$listeners[r])return"continue";var s=i.passive?"&":(i.once?"~":"")+(i.capture?"!":""),o=s+i.event,c=function(t){var a=t;return(void 0===i.button||a.buttons>0&&a.button===i.button)&&(i.prevent&&t.preventDefault(),i.stop&&t.stopPropagation(),n.$emit(r,e(t))),i.result};o in a?Array.isArray(a[o])?a[o].push(c):a[o]=[a[o],c]:a[o]=c};for(var i in t)r(i);return a}}}),b=n("7560"),O=n("ea4a"),k=g["default"].extend({name:"times",props:{now:{type:String,validator:O["G"]}},data:function(){return{times:{now:Object(O["w"])("0000-00-00 00:00",!0),today:Object(O["w"])("0000-00-00",!0)}}},computed:{parsedNow:function(){return this.now?Object(O["w"])(this.now,!0):null}},watch:{parsedNow:"updateTimes"},created:function(){this.updateTimes(),this.setPresent()},methods:{setPresent:function(){this.times.now.present=this.times.today.present=!0,this.times.now.past=this.times.today.past=!1,this.times.now.future=this.times.today.future=!1},updateTimes:function(){var t=this.parsedNow||this.getNow();this.updateDay(t,this.times.now),this.updateTime(t,this.times.now),this.updateDay(t,this.times.today)},getNow:function(){return Object(O["u"])(new Date)},updateDay:function(t,e){t.date!==e.date&&(e.year=t.year,e.month=t.month,e.day=t.day,e.weekday=t.weekday,e.date=t.date)},updateTime:function(t,e){t.time!==e.time&&(e.hour=t.hour,e.minute=t.minute,e.time=t.time)}}}),j=n("dc22"),w=(n("a9e3"),n("3835")),E=n("b85c"),C=864e5;function T(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=t.map((function(t){return{event:t,columnCount:0,column:0,left:0,width:100}}));return n.sort((function(t,n){return Math.max(e,t.event.startTimestampIdentifier)-Math.max(e,n.event.startTimestampIdentifier)||n.event.endTimestampIdentifier-t.event.endTimestampIdentifier})),n}function D(t,e,n,a){var r=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];return r?!(t>=a||e<=n):!(t>a||e<n)}function S(t){t.forEach((function(e){e.visuals.forEach((function(e){e.columnCount=t.length}))}))}function x(t){return[t.startTimestampIdentifier,t.endTimestampIdentifier]}function F(t){return[t.startIdentifier,t.endIdentifier]}function I(t,e){return[Math.max(e,t.startTimestampIdentifier),Math.min(e+C,t.endTimestampIdentifier)]}function M(t,e,n,a){for(var r=0;r<t.length;r++){var i=t[r],s=!1;if(D(e,n,i.start,i.end,a))for(var o=0;o<i.visuals.length;o++){var c=i.visuals[o],u=a?x(c.event):F(c.event),d=Object(w["a"])(u,2),l=d[0],h=d[1];if(D(e,n,l,h,a)){s=!0;break}}if(!s)return r}return-1}function H(t){var e={groups:[],min:-1,max:-1,reset:function(){e.groups=[],e.min=e.max=-1},getVisuals:function(n,a,r){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];(n.weekday===t||i)&&e.reset();var s=Object(O["q"])(n),o=T(a,s);return o.forEach((function(t){var n=r?x(t.event):F(t.event),a=Object(w["a"])(n,2),i=a[0],s=a[1];e.groups.length>0&&!D(i,s,e.min,e.max,r)&&(S(e.groups),e.reset());var o=M(e.groups,i,s,r);-1===o&&(o=e.groups.length,e.groups.push({start:i,end:s,visuals:[]}));var c=e.groups[o];c.visuals.push(t),c.start=Math.min(c.start,i),c.end=Math.max(c.end,s),t.column=o,-1===e.min?(e.min=i,e.max=s):(e.min=Math.min(e.min,i),e.max=Math.max(e.max,s))})),S(e.groups),r&&e.reset(),o}};return e}var $=100,_=5,W=1.7,A=function(t,e,n){var a=H(e);return function(t,e,r,i){if(!r)return a.getVisuals(t,e,r,i);var s,o=Object(O["q"])(t),c=T(e,o),u=U(c,o),d=Object(E["a"])(u);try{for(d.s();!(s=d.n()).done;){var l,h=s.value,v=[],f=Object(E["a"])(h.visuals);try{for(f.s();!(l=f.n()).done;){var y=l.value,m=Z(y,o),g=L(m,v);if(!1===g){var p=Y(m,v);p&&(m.parent=p,m.sibling=D(m.start,m.end,p.start,q(p.start,n)),m.index=p.index+1,p.children.push(m))}else{var b=R(m,v,g-1,g-1),k=Object(w["a"])(b,1),j=k[0],C=R(m,v,g+1,g+v.length,!0);m.children=C,m.index=g,j&&(m.parent=j,m.sibling=D(m.start,m.end,j.start,q(j.start,n)),j.children.push(m));var S,x=Object(E["a"])(C);try{for(x.s();!(S=x.n()).done;){var F=S.value;F.parent===j&&(F.parent=m);var I=F.index-m.index<=1;I&&m.sibling&&D(m.start,q(m.start,n),F.start,F.end)&&(F.sibling=!0)}}catch(M){x.e(M)}finally{x.f()}}v.push(m)}}catch(M){f.e(M)}finally{f.f()}N(v,n)}}catch(M){d.e(M)}finally{d.f()}return c.sort((function(t,e){return t.left-e.left||t.event.startTimestampIdentifier-e.event.startTimestampIdentifier})),c}};function N(t,e){var n,a=Object(E["a"])(t);try{for(a.s();!(n=a.n()).done;){var r=n.value,i=r.visual,s=r.parent,o=z(r)+1,c=s?s.visual.left:0,u=$-c,d=Math.min(_,$/o),l=B(r,t),h=u/(o-r.index+1),v=u/(o-r.index+(r.sibling?1:0))*l;s&&(i.left=r.sibling?c+h:c+d),i.width=V(r,t,e)?$-i.left:Math.min($-i.left,v*W)}}catch(f){a.e(f)}finally{a.f()}}function B(t,e){if(!t.children.length)return 1;var n=t.index+e.length,a=t.children.reduce((function(t,e){return Math.min(t,e.index)}),n);return a-t.index}function P(t,e){var n,a=[],r=Object(E["a"])(e);try{for(r.s();!(n=r.n()).done;){var i=n.value;D(t.start,t.end,i.start,i.end)&&a.push(i.index)}}catch(s){r.e(s)}finally{r.f()}return a}function L(t,e){var n=P(t,e);n.sort();for(var a=0;a<n.length;a++)if(a<n[a])return a;return!1}function R(t,e,n,a){var r,i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],s=[],o=Object(E["a"])(e);try{for(o.s();!(r=o.n()).done;){var c=r.value;c.index>=n&&c.index<=a&&D(t.start,t.end,c.start,c.end)&&s.push(c)}}catch(d){o.e(d)}finally{o.f()}if(i&&s.length>0){var u=s.reduce((function(t,e){return Math.min(t,e.index)}),s[0].index);return s.filter((function(t){return t.index===u}))}return s}function Y(t,e){var n,a=null,r=Object(E["a"])(e);try{for(r.s();!(n=r.n()).done;){var i=n.value;D(t.start,t.end,i.start,i.end)&&(null===a||i.index>a.index)&&(a=i)}}catch(s){r.e(s)}finally{r.f()}return a}function V(t,e,n){var a,r=Object(E["a"])(e);try{for(r.s();!(a=r.n()).done;){var i=a.value;if(i!==t&&i.index>t.index&&D(t.start,q(t.start,n),i.start,i.end))return!1}}catch(s){r.e(s)}finally{r.f()}return!0}function U(t,e){var n,a=[],r=Object(E["a"])(t);try{for(r.s();!(n=r.n()).done;){var i,s=n.value,o=I(s.event,e),c=Object(w["a"])(o,2),u=c[0],d=c[1],l=!1,h=Object(E["a"])(a);try{for(h.s();!(i=h.n()).done;){var v=i.value;if(D(u,d,v.start,v.end)){v.visuals.push(s),v.end=Math.max(v.end,d),l=!0;break}}}catch(f){h.e(f)}finally{h.f()}l||a.push({start:u,end:d,visuals:[s]})}}catch(f){r.e(f)}finally{r.f()}return a}function Z(t,e){var n=I(t.event,e),a=Object(w["a"])(n,2),r=a[0],i=a[1];return{parent:null,sibling:!0,index:0,visual:t,start:r,end:i,children:[]}}function z(t){var e,n=t.index,a=Object(E["a"])(t.children);try{for(a.s();!(e=a.n()).done;){var r=e.value,i=z(r);i>n&&(n=i)}}catch(s){a.e(s)}finally{a.f()}return n}function q(t,e){var n=t%100,a=n+e,r=Math.floor(a/60),i=a%60;return t-n+100*r+i}var G=100,J=function(t,e,n){var a=H(e);return function(t,e,n,r){var i=a.getVisuals(t,e,n,r);return n&&i.forEach((function(t){t.left=t.column*G/t.columnCount,t.width=G/t.columnCount})),i}},X={stack:A,column:J},K={base:{start:{type:[String,Number,Date],validate:O["G"],default:function(){return Object(O["u"])(new Date).date}},end:{type:[String,Number,Date],validate:O["G"]},weekdays:{type:[Array,String],default:function(){return[0,1,2,3,4,5,6]},validate:tt},hideHeader:{type:Boolean},shortWeekdays:{type:Boolean,default:!0},weekdayFormat:{type:Function,default:null},dayFormat:{type:Function,default:null}},intervals:{maxDays:{type:Number,default:7},shortIntervals:{type:Boolean,default:!0},intervalHeight:{type:[Number,String],default:48,validate:Q},intervalWidth:{type:[Number,String],default:60,validate:Q},intervalMinutes:{type:[Number,String],default:60,validate:Q},firstInterval:{type:[Number,String],default:0,validate:Q},firstTime:{type:[Number,String,Object],validate:O["F"]},intervalCount:{type:[Number,String],default:24,validate:Q},intervalFormat:{type:Function,default:null},intervalStyle:{type:Function,default:null},showIntervalLabel:{type:Function,default:null}},weeks:{localeFirstDayOfYear:{type:[String,Number],default:0},minWeeks:{validate:Q,default:1},shortMonths:{type:Boolean,default:!0},showMonthOnFirst:{type:Boolean,default:!0},showWeek:Boolean,monthFormat:{type:Function,default:null}},calendar:{type:{type:String,default:"month"},value:{type:[String,Number,Date],validate:O["G"]}},category:{categories:{type:[Array,String],default:""},categoryHideDynamic:{type:Boolean},categoryShowAll:{type:Boolean},categoryForInvalid:{type:String,default:""},categoryDays:{type:[Number,String],default:1,validate:function(t){return isFinite(parseInt(t))&&parseInt(t)>0}}},events:{events:{type:Array,default:function(){return[]}},eventStart:{type:String,default:"start"},eventEnd:{type:String,default:"end"},eventTimed:{type:[String,Function],default:"timed"},eventCategory:{type:[String,Function],default:"category"},eventHeight:{type:Number,default:20},eventColor:{type:[String,Function],default:"primary"},eventTextColor:{type:[String,Function],default:"white"},eventName:{type:[String,Function],default:"name"},eventOverlapThreshold:{type:[String,Number],default:60},eventOverlapMode:{type:[String,Function],default:"stack",validate:function(t){return t in X||"function"===typeof t}},eventMore:{type:Boolean,default:!0},eventMoreText:{type:String,default:"$vuetify.calendar.moreEvents"},eventRipple:{type:[Boolean,Object],default:null},eventMarginBottom:{type:Number,default:1}}};function Q(t){return isFinite(parseInt(t))}function tt(t){if("string"===typeof t&&(t=t.split(",")),Array.isArray(t)){var e=t.map((function(t){return parseInt(t)}));if(e.length>O["b"]||0===e.length)return!1;for(var n={},a=!1,r=0;r<e.length;r++){var i=e[r];if(!isFinite(i)||i<0||i>=O["b"])return!1;if(r>0){var s=i-e[r-1];if(s<0){if(a)return!1;a=!0}else if(0===s)return!1}if(n[i])return!1;n[i]=!0}return!0}return!1}var et=Object(v["a"])(f["a"],y["a"],p,b["a"],k).extend({name:"calendar-base",directives:{Resize:j["a"]},props:K.base,computed:{parsedWeekdays:function(){return Array.isArray(this.weekdays)?this.weekdays:(this.weekdays||"").split(",").map((function(t){return parseInt(t,10)}))},weekdaySkips:function(){return Object(O["r"])(this.parsedWeekdays)},weekdaySkipsReverse:function(){var t=this.weekdaySkips.slice();return t.reverse(),t},parsedStart:function(){return Object(O["w"])(this.start,!0)},parsedEnd:function(){var t=this.parsedStart,e=this.end&&Object(O["w"])(this.end)||t;return Object(O["q"])(e)<Object(O["q"])(t)?t:e},days:function(){return Object(O["g"])(this.parsedStart,this.parsedEnd,this.times.today,this.weekdaySkips)},dayFormatter:function(){if(this.dayFormat)return this.dayFormat;var t={timeZone:"UTC",day:"numeric"};return Object(O["i"])(this.currentLocale,(function(e,n){return t}))},weekdayFormatter:function(){if(this.weekdayFormat)return this.weekdayFormat;var t={timeZone:"UTC",weekday:"long"},e={timeZone:"UTC",weekday:"short"};return Object(O["i"])(this.currentLocale,(function(n,a){return a?e:t}))}},methods:{getRelativeClasses:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{"v-present":t.present,"v-past":t.past,"v-future":t.future,"v-outside":e}},getStartOfWeek:function(t){return Object(O["p"])(t,this.parsedWeekdays,this.times.today)},getEndOfWeek:function(t){return Object(O["n"])(t,this.parsedWeekdays,this.times.today)},getFormatter:function(t){return Object(O["i"])(this.locale,(function(e,n){return t}))}}}),nt=n("80d2");function at(t,e,n,a){var r=arguments.length>4&&void 0!==arguments[4]&&arguments[4],i=arguments.length>5&&void 0!==arguments[5]&&arguments[5],s=t[n],o=t[a],c=Object(O["w"])(s,!0),u=o?Object(O["w"])(o,!0):c,d=Object(O["s"])(s)?Object(O["B"])(c,r):c,l=Object(O["s"])(o)?Object(O["B"])(u,r):u,h=Object(O["l"])(d),v=Object(O["q"])(d),f=Object(O["l"])(l),y=d.hasTime?0:2359,m=Object(O["q"])(l)+y,g=!d.hasTime;return{input:t,start:d,startIdentifier:h,startTimestampIdentifier:v,end:l,endIdentifier:f,endTimestampIdentifier:m,allDay:g,index:e,category:i}}function rt(t,e){return e>=t.startIdentifier&&e<=t.endIdentifier&&e*O["e"]!==t.endTimestampIdentifier}function it(t,e,n,a){return n===t.startIdentifier||a===e.weekday&&rt(t,n)}function st(t,e,n){return e<=t.endIdentifier&&n>=t.startIdentifier}var ot=100,ct=95,ut=1440,dt=et.extend({name:"calendar-with-events",directives:{ripple:h["a"]},props:K.events,computed:{noEvents:function(){return 0===this.events.length},parsedEvents:function(){return this.events.map(this.parseEvent)},parsedEventOverlapThreshold:function(){return parseInt(this.eventOverlapThreshold)},eventColorFunction:function(){var t=this;return"function"===typeof this.eventColor?this.eventColor:function(){return t.eventColor}},eventTimedFunction:function(){var t=this;return"function"===typeof this.eventTimed?this.eventTimed:function(e){return!!e[t.eventTimed]}},eventCategoryFunction:function(){var t=this;return"function"===typeof this.eventCategory?this.eventCategory:function(e){return e[t.eventCategory]}},eventTextColorFunction:function(){var t=this;return"function"===typeof this.eventTextColor?this.eventTextColor:function(){return t.eventTextColor}},eventNameFunction:function(){var t=this;return"function"===typeof this.eventName?this.eventName:function(e,n){return Object(nt["l"])(e.input[t.eventName])}},eventModeFunction:function(){return"function"===typeof this.eventOverlapMode?this.eventOverlapMode:X[this.eventOverlapMode]},eventWeekdays:function(){return this.parsedWeekdays},categoryMode:function(){return!1}},methods:{parseEvent:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return at(t,e,this.eventStart,this.eventEnd,this.eventTimedFunction(t),!!this.categoryMode&&this.eventCategoryFunction(t))},formatTime:function(t,e){var n=this.getFormatter({timeZone:"UTC",hour:"numeric",minute:t.minute>0?"numeric":void 0});return n(t,!0)},updateEventVisibility:function(){if(!this.noEvents&&this.eventMore){var t=this.eventHeight,e=this.getEventsMap();for(var n in e){var a=e[n],r=a.parent,i=a.events,s=a.more;if(!s)break;for(var o=r.getBoundingClientRect(),c=i.length-1,u=!1,d=0,l=0;l<=c;l++){if(!u){var h=i[l].getBoundingClientRect();u=l===c?h.bottom>o.bottom:h.bottom+t>o.bottom}u&&(i[l].style.display="none",d++)}u?(s.style.display="",s.innerHTML=this.$vuetify.lang.t(this.eventMoreText,d)):s.style.display="none"}}},getEventsMap:function(){var t={},e=this.$refs.events;return e&&e.forEach?(e.forEach((function(e){var n=e.getAttribute("data-date");e.parentElement&&n&&(n in t||(t[n]={parent:e.parentElement,more:null,events:[]}),e.getAttribute("data-more")?t[n].more=e:(t[n].events.push(e),e.style.display=""))})),t):t},genDayEvent:function(t,e){var n=t.event,a=this.eventHeight,r=this.eventMarginBottom,i=Object(O["l"])(e),s=e.week,o=i===n.startIdentifier,c=i===n.endIdentifier,u=ct;if(!this.categoryMode)for(var d=e.index+1;d<s.length;d++){var l=Object(O["l"])(s[d]);if(!(n.endIdentifier>=l)){c=!0;break}u+=ot,c=c||l===n.endIdentifier}var h={eventParsed:n,day:e,start:o,end:c,timed:!1};return this.genEvent(n,h,!1,{staticClass:"v-event",class:{"v-event-start":o,"v-event-end":c},style:{height:"".concat(a,"px"),width:"".concat(u,"%"),"margin-bottom":"".concat(r,"px")},attrs:{"data-date":e.date},key:n.index,ref:"events",refInFor:!0})},genTimedEvent:function(t,e){var n=t.event,a=t.left,r=t.width;if(e.timeDelta(n.end)<=0||e.timeDelta(n.start)>=1)return!1;var i=Object(O["l"])(e),s=n.startIdentifier>=i,o=n.endIdentifier>i,c=s?e.timeToY(n.start):0,u=o?e.timeToY(ut):e.timeToY(n.end),d=Math.max(this.eventHeight,u-c),l={eventParsed:n,day:e,start:s,end:o,timed:!0};return this.genEvent(n,l,!0,{staticClass:"v-event-timed",style:{top:"".concat(c,"px"),height:"".concat(d,"px"),left:"".concat(a,"%"),width:"".concat(r,"%")}})},genEvent:function(t,e,n,a){var r,i=this,s=this.$scopedSlots.event,o=this.eventTextColorFunction(t.input),c=this.eventColorFunction(t.input),u=t.start.hour<12&&t.end.hour>=12,d=Object(O["k"])(t.start,t.end)<=this.parsedEventOverlapThreshold,h=this.formatTime,v=function(){return h(t.start,u)+" - "+h(t.end,!0)},f=function(){var e=i.eventNameFunction(t,n);if(t.start.hasTime){if(n){var a=v(),r=d?", ":"<br>";return"<strong>".concat(e,"</strong>").concat(r).concat(a)}var s=h(t.start,!0);return"<strong>".concat(s,"</strong> ").concat(e)}return e},y=Object(l["a"])(Object(l["a"])({},e),{},{event:t.input,outside:e.day.outside,singline:d,overlapsNoon:u,formatTime:h,timeSummary:v,eventSummary:f});return this.$createElement("div",this.setTextColor(o,this.setBackgroundColor(c,Object(l["a"])({on:this.getDefaultMouseEventHandlers(":event",(function(t){return Object(l["a"])(Object(l["a"])({},y),{},{nativeEvent:t})})),directives:[{name:"ripple",value:null==(r=this.eventRipple)||r}]},a))),s?s(y):[this.genName(f)])},genName:function(t){return this.$createElement("div",{staticClass:"pl-1",domProps:{innerHTML:t()}})},genPlaceholder:function(t){var e=this.eventHeight+this.eventMarginBottom;return this.$createElement("div",{style:{height:"".concat(e,"px")},attrs:{"data-date":t.date},ref:"events",refInFor:!0})},genMore:function(t){var e,n=this,a=this.eventHeight,r=this.eventMarginBottom;return this.$createElement("div",{staticClass:"v-event-more pl-1",class:{"v-outside":t.outside},attrs:{"data-date":t.date,"data-more":1},directives:[{name:"ripple",value:null==(e=this.eventRipple)||e}],on:{click:function(){return n.$emit("click:more",t)}},style:{display:"none",height:"".concat(a,"px"),"margin-bottom":"".concat(r,"px")},ref:"events",refInFor:!0})},getVisibleEvents:function(){var t=Object(O["l"])(this.days[0]),e=Object(O["l"])(this.days[this.days.length-1]);return this.parsedEvents.filter((function(n){return st(n,t,e)}))},isEventForCategory:function(t,e){return!this.categoryMode||e===t.category||"string"!==typeof t.category&&null===e},getEventsForDay:function(t){var e=Object(O["l"])(t),n=this.eventWeekdays[0];return this.parsedEvents.filter((function(a){return it(a,t,e,n)}))},getEventsForDayAll:function(t){var e=this,n=Object(O["l"])(t),a=this.eventWeekdays[0];return this.parsedEvents.filter((function(r){return r.allDay&&(e.categoryMode?rt(r,n):it(r,t,n,a))&&e.isEventForCategory(r,t.category)}))},getEventsForDayTimed:function(t){var e=this,n=Object(O["l"])(t);return this.parsedEvents.filter((function(a){return!a.allDay&&rt(a,n)&&e.isEventForCategory(a,t.category)}))},getScopedSlots:function(){var t=this;if(this.noEvents)return Object(l["a"])({},this.$scopedSlots);var e=this.eventModeFunction(this.parsedEvents,this.eventWeekdays[0],this.parsedEventOverlapThreshold),n=function(t){return!!t},a=function(a,r,i,s){var o=r(a),c=e(a,o,s,t.categoryMode);if(s)return c.map((function(t){return i(t,a)})).filter(n);var u=[];return c.forEach((function(e,n){while(u.length<e.column)u.push(t.genPlaceholder(a));var r=i(e,a);r&&u.push(r)})),u},r=this.$scopedSlots,i=r.day,s=r["day-header"],o=r["day-body"];return Object(l["a"])(Object(l["a"])({},r),{},{day:function(e){var n=a(e,t.getEventsForDay,t.genDayEvent,!1);if(n&&n.length>0&&t.eventMore&&n.push(t.genMore(e)),i){var r=i(e);r&&(n=n?n.concat(r):r)}return n},"day-header":function(e){var n=a(e,t.getEventsForDayAll,t.genDayEvent,!1);if(s){var r=s(e);r&&(n=n?n.concat(r):r)}return n},"day-body":function(e){var n=a(e,t.getEventsForDayTimed,t.genTimedEvent,!0),r=[t.$createElement("div",{staticClass:"v-event-timed-container"},n)];if(o){var i=o(e);i&&(r=r.concat(i))}return r}})}}}),lt=(n("4c72"),n("aff5"),n("2909")),ht=n("afdd"),vt=n("4e81"),ft=et.extend({name:"v-calendar-weekly",props:K.weeks,computed:{staticClass:function(){return"v-calendar-weekly"},classes:function(){return this.themeClasses},parsedMinWeeks:function(){return parseInt(this.minWeeks)},days:function(){var t=this.parsedMinWeeks*this.parsedWeekdays.length,e=this.getStartOfWeek(this.parsedStart),n=this.getEndOfWeek(this.parsedEnd);return Object(O["g"])(e,n,this.times.today,this.weekdaySkips,Number.MAX_SAFE_INTEGER,t)},todayWeek:function(){var t=this.times.today,e=this.getStartOfWeek(t),n=this.getEndOfWeek(t);return Object(O["g"])(e,n,t,this.weekdaySkips,this.parsedWeekdays.length,this.parsedWeekdays.length)},monthFormatter:function(){if(this.monthFormat)return this.monthFormat;var t={timeZone:"UTC",month:"long"},e={timeZone:"UTC",month:"short"};return Object(O["i"])(this.currentLocale,(function(n,a){return a?e:t}))}},methods:{isOutside:function(t){var e=Object(O["l"])(t);return e<Object(O["l"])(this.parsedStart)||e>Object(O["l"])(this.parsedEnd)},genHead:function(){return this.$createElement("div",{staticClass:"v-calendar-weekly__head"},this.genHeadDays())},genHeadDays:function(){var t=this.todayWeek.map(this.genHeadDay);return this.showWeek&&t.unshift(this.$createElement("div",{staticClass:"v-calendar-weekly__head-weeknumber"})),t},genHeadDay:function(t,e){var n=this.isOutside(this.days[e]),a=t.present?this.color:void 0;return this.$createElement("div",this.setTextColor(a,{key:t.date,staticClass:"v-calendar-weekly__head-weekday",class:this.getRelativeClasses(t,n)}),this.weekdayFormatter(t,this.shortWeekdays))},genWeeks:function(){for(var t=this.days,e=this.parsedWeekdays.length,n=[],a=0;a<t.length;a+=e)n.push(this.genWeek(t.slice(a,a+e),this.getWeekNumber(t[a])));return n},genWeek:function(t,e){var n=this,a=t.map((function(e,a){return n.genDay(e,a,t)}));return this.showWeek&&a.unshift(this.genWeekNumber(e)),this.$createElement("div",{key:t[0].date,staticClass:"v-calendar-weekly__week"},a)},getWeekNumber:function(t){return Object(vt["b"])(t.year,t.month-1,t.day,this.parsedWeekdays[0],parseInt(this.localeFirstDayOfYear))},genWeekNumber:function(t){return this.$createElement("div",{staticClass:"v-calendar-weekly__weeknumber"},[this.$createElement("small",String(t))])},genDay:function(t,e,n){var a=this.isOutside(t);return this.$createElement("div",{key:t.date,staticClass:"v-calendar-weekly__day",class:this.getRelativeClasses(t,a),on:this.getDefaultMouseEventHandlers(":day",(function(e){return t}))},[this.genDayLabel(t)].concat(Object(lt["a"])(Object(nt["s"])(this,"day",(function(){return Object(l["a"])({outside:a,index:e,week:n},t)}))||[])))},genDayLabel:function(t){return this.$createElement("div",{staticClass:"v-calendar-weekly__day-label"},Object(nt["s"])(this,"day-label",t)||[this.genDayLabelButton(t)])},genDayLabelButton:function(t){var e=t.present?this.color:"transparent",n=1===t.day&&this.showMonthOnFirst;return this.$createElement(ht["a"],{props:{color:e,fab:!0,depressed:!0,small:!0},on:this.getMouseEventHandlers({"click:date":{event:"click",stop:!0},"contextmenu:date":{event:"contextmenu",stop:!0,prevent:!0,result:!1}},(function(e){return t}))},n?this.monthFormatter(t,this.shortMonths)+" "+this.dayFormatter(t,!1):this.dayFormatter(t,!1))},genDayMonth:function(t){var e=t.present?this.color:void 0;return this.$createElement("div",this.setTextColor(e,{staticClass:"v-calendar-weekly__day-month"}),Object(nt["s"])(this,"day-month",t)||this.monthFormatter(t,this.shortMonths))}},render:function(t){return t("div",{staticClass:this.staticClass,class:this.classes,on:{dragstart:function(t){t.preventDefault()}}},[this.hideHeader?"":this.genHead()].concat(Object(lt["a"])(this.genWeeks())))}}),yt=ft.extend({name:"v-calendar-monthly",computed:{staticClass:function(){return"v-calendar-monthly v-calendar-weekly"},parsedStart:function(){return Object(O["o"])(Object(O["w"])(this.start,!0))},parsedEnd:function(){return Object(O["m"])(Object(O["w"])(this.end,!0))}}}),mt=(n("fcf4"),et.extend({name:"calendar-with-intervals",props:K.intervals,computed:{parsedFirstInterval:function(){return parseInt(this.firstInterval)},parsedIntervalMinutes:function(){return parseInt(this.intervalMinutes)},parsedIntervalCount:function(){return parseInt(this.intervalCount)},parsedIntervalHeight:function(){return parseFloat(this.intervalHeight)},parsedFirstTime:function(){return Object(O["v"])(this.firstTime)},firstMinute:function(){var t=this.parsedFirstTime;return!1!==t&&t>=0&&t<=O["d"]?t:this.parsedFirstInterval*this.parsedIntervalMinutes},bodyHeight:function(){return this.parsedIntervalCount*this.parsedIntervalHeight},days:function(){return Object(O["g"])(this.parsedStart,this.parsedEnd,this.times.today,this.weekdaySkips,this.maxDays)},intervals:function(){var t=this.days,e=this.firstMinute,n=this.parsedIntervalMinutes,a=this.parsedIntervalCount,r=this.times.now;return t.map((function(t){return Object(O["h"])(t,e,n,a,r)}))},intervalFormatter:function(){if(this.intervalFormat)return this.intervalFormat;var t={timeZone:"UTC",hour:"2-digit",minute:"2-digit"},e={timeZone:"UTC",hour:"numeric",minute:"2-digit"},n={timeZone:"UTC",hour:"numeric"};return Object(O["i"])(this.currentLocale,(function(a,r){return r?0===a.minute?n:e:t}))}},methods:{showIntervalLabelDefault:function(t){var e=this.intervals[0][0],n=e.hour===t.hour&&e.minute===t.minute;return!n},intervalStyleDefault:function(t){},getTimestampAtEvent:function(t,e){var n=Object(O["f"])(e),a=t.currentTarget.getBoundingClientRect(),r=this.firstMinute,i=t,s=t,o=i.changedTouches||i.touches,c=o&&o[0]?o[0].clientY:s.clientY,u=(c-a.top)/this.parsedIntervalHeight,d=Math.floor(u*this.parsedIntervalMinutes),l=r+d;return Object(O["C"])(n,l,this.times.now)},getSlotScope:function(t){var e=Object(O["f"])(t);return e.timeToY=this.timeToY,e.timeDelta=this.timeDelta,e.minutesToPixels=this.minutesToPixels,e.week=this.days,e},scrollToTime:function(t){var e=this.timeToY(t),n=this.$refs.scrollArea;return!(!1===e||!n)&&(n.scrollTop=e,!0)},minutesToPixels:function(t){return t/this.parsedIntervalMinutes*this.parsedIntervalHeight},timeToY:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=this.timeDelta(t);return!1!==n&&(n*=this.bodyHeight,e&&(n<0&&(n=0),n>this.bodyHeight&&(n=this.bodyHeight))),n},timeDelta:function(t){var e=Object(O["v"])(t);if(!1===e)return!1;var n=this.firstMinute,a=this.parsedIntervalCount*this.parsedIntervalMinutes;return(e-n)/a}}})),gt=mt.extend({name:"v-calendar-daily",directives:{Resize:j["a"]},data:function(){return{scrollPush:0}},computed:{classes:function(){return Object(l["a"])({"v-calendar-daily":!0},this.themeClasses)}},mounted:function(){this.init()},methods:{init:function(){this.$nextTick(this.onResize)},onResize:function(){this.scrollPush=this.getScrollPush()},getScrollPush:function(){var t=this.$refs.scrollArea,e=this.$refs.pane;return t&&e?t.offsetWidth-e.offsetWidth:0},genHead:function(){return this.$createElement("div",{staticClass:"v-calendar-daily__head",style:{marginRight:this.scrollPush+"px"}},[this.genHeadIntervals()].concat(Object(lt["a"])(this.genHeadDays())))},genHeadIntervals:function(){var t=Object(nt["g"])(this.intervalWidth);return this.$createElement("div",{staticClass:"v-calendar-daily__intervals-head",style:{width:t}},Object(nt["s"])(this,"interval-header"))},genHeadDays:function(){return this.days.map(this.genHeadDay)},genHeadDay:function(t,e){var n=this;return this.$createElement("div",{key:t.date,staticClass:"v-calendar-daily_head-day",class:this.getRelativeClasses(t),on:this.getDefaultMouseEventHandlers(":day",(function(e){return n.getSlotScope(t)}))},[this.genHeadWeekday(t),this.genHeadDayLabel(t)].concat(Object(lt["a"])(this.genDayHeader(t,e))))},genDayHeader:function(t,e){var n=this;return Object(nt["s"])(this,"day-header",(function(){return Object(l["a"])(Object(l["a"])({week:n.days},t),{},{index:e})}))||[]},genHeadWeekday:function(t){var e=t.present?this.color:void 0;return this.$createElement("div",this.setTextColor(e,{staticClass:"v-calendar-daily_head-weekday"}),this.weekdayFormatter(t,this.shortWeekdays))},genHeadDayLabel:function(t){return this.$createElement("div",{staticClass:"v-calendar-daily_head-day-label"},Object(nt["s"])(this,"day-label-header",t)||[this.genHeadDayButton(t)])},genHeadDayButton:function(t){var e=t.present?this.color:"transparent";return this.$createElement(ht["a"],{props:{color:e,fab:!0,depressed:!0},on:this.getMouseEventHandlers({"click:date":{event:"click",stop:!0},"contextmenu:date":{event:"contextmenu",stop:!0,prevent:!0,result:!1}},(function(e){return t}))},this.dayFormatter(t,!1))},genBody:function(){return this.$createElement("div",{staticClass:"v-calendar-daily__body"},[this.genScrollArea()])},genScrollArea:function(){return this.$createElement("div",{ref:"scrollArea",staticClass:"v-calendar-daily__scroll-area"},[this.genPane()])},genPane:function(){return this.$createElement("div",{ref:"pane",staticClass:"v-calendar-daily__pane",style:{height:Object(nt["g"])(this.bodyHeight)}},[this.genDayContainer()])},genDayContainer:function(){return this.$createElement("div",{staticClass:"v-calendar-daily__day-container"},[this.genBodyIntervals()].concat(Object(lt["a"])(this.genDays())))},genDays:function(){return this.days.map(this.genDay)},genDay:function(t,e){var n=this;return this.$createElement("div",{key:t.date,staticClass:"v-calendar-daily__day",class:this.getRelativeClasses(t),on:this.getDefaultMouseEventHandlers(":time",(function(e){return n.getSlotScope(n.getTimestampAtEvent(e,t))}))},[].concat(Object(lt["a"])(this.genDayIntervals(e)),Object(lt["a"])(this.genDayBody(t))))},genDayBody:function(t){var e=this;return Object(nt["s"])(this,"day-body",(function(){return e.getSlotScope(t)}))||[]},genDayIntervals:function(t){return this.intervals[t].map(this.genDayInterval)},genDayInterval:function(t){var e=this,n=Object(nt["g"])(this.intervalHeight),a=this.intervalStyle||this.intervalStyleDefault,r={key:t.time,staticClass:"v-calendar-daily__day-interval",style:Object(l["a"])({height:n},a(t))},i=Object(nt["s"])(this,"interval",(function(){return e.getSlotScope(t)}));return this.$createElement("div",r,i)},genBodyIntervals:function(){var t=this,e=Object(nt["g"])(this.intervalWidth),n={staticClass:"v-calendar-daily__intervals-body",style:{width:e},on:this.getDefaultMouseEventHandlers(":interval",(function(e){return t.getTimestampAtEvent(e,t.parsedStart)}))};return this.$createElement("div",n,this.genIntervalLabels())},genIntervalLabels:function(){return this.intervals.length?this.intervals[0].map(this.genIntervalLabel):null},genIntervalLabel:function(t){var e=Object(nt["g"])(this.intervalHeight),n=this.shortIntervals,a=this.showIntervalLabel||this.showIntervalLabelDefault,r=a(t),i=r?this.intervalFormatter(t,n):void 0;return this.$createElement("div",{key:t.time,staticClass:"v-calendar-daily__interval",style:{height:e}},[this.$createElement("div",{staticClass:"v-calendar-daily__interval-text"},i)])}},render:function(t){return t("div",{class:this.classes,on:{dragstart:function(t){t.preventDefault()}},directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}]},[this.hideHeader?"":this.genHead(),this.genBody()])}}),pt=(n("b7cc"),gt.extend({name:"v-calendar-category",props:K.category,computed:{classes:function(){return Object(l["a"])({"v-calendar-daily":!0,"v-calendar-category":!0},this.themeClasses)},parsedCategories:function(){return"string"===typeof this.categories&&this.categories?this.categories.split(/\s*,\s*/):Array.isArray(this.categories)?this.categories:[]}},methods:{genDayHeader:function(t,e){var n=this,a={staticClass:"v-calendar-category__columns"},r=Object(l["a"])(Object(l["a"])({week:this.days},t),{},{index:e}),i=this.parsedCategories.map((function(e){return n.genDayHeaderCategory(t,n.getCategoryScope(r,e))}));return[this.$createElement("div",a,i)]},getCategoryScope:function(t,e){return Object(l["a"])(Object(l["a"])({},t),{},{category:e===this.categoryForInvalid?null:e})},genDayHeaderCategory:function(t,e){var n=this;return this.$createElement("div",{staticClass:"v-calendar-category__column-header",on:this.getDefaultMouseEventHandlers(":day-category",(function(a){return n.getCategoryScope(n.getSlotScope(t),e.category)}))},[Object(nt["s"])(this,"category",e)||this.genDayHeaderCategoryTitle(e.category),Object(nt["s"])(this,"day-header",e)])},genDayHeaderCategoryTitle:function(t){return this.$createElement("div",{staticClass:"v-calendar-category__category"},null===t?this.categoryForInvalid:t)},genDayBody:function(t){var e=this,n={staticClass:"v-calendar-category__columns"},a=this.parsedCategories.map((function(n){return e.genDayBodyCategory(t,n)}));return[this.$createElement("div",n,a)]},genDayBodyCategory:function(t,e){var n=this,a={staticClass:"v-calendar-category__column",on:this.getDefaultMouseEventHandlers(":time-category",(function(a){return n.getCategoryScope(n.getSlotScope(n.getTimestampAtEvent(a,t)),e)}))},r=Object(nt["s"])(this,"day-body",(function(){return n.getCategoryScope(n.getSlotScope(t),e)}));return this.$createElement("div",a,r)}}})),bt=dt.extend({name:"v-calendar",props:Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])({},K.calendar),K.weeks),K.intervals),K.category),data:function(){return{lastStart:null,lastEnd:null}},computed:{parsedValue:function(){return Object(O["G"])(this.value)?Object(O["w"])(this.value,!0):this.parsedStart||this.times.today},parsedCategoryDays:function(){return parseInt(this.categoryDays)||1},renderProps:function(){var t=this.parsedValue,e=null,n=this.maxDays,a=this.parsedWeekdays,r=this.parsedCategories,i=t,s=t;switch(this.type){case"month":e=yt,i=Object(O["o"])(t),s=Object(O["m"])(t);break;case"week":e=gt,i=this.getStartOfWeek(t),s=this.getEndOfWeek(t),n=7;break;case"day":e=gt,n=1,a=[i.weekday];break;case"4day":e=gt,s=Object(O["y"])(Object(O["f"])(s),O["t"],4),Object(O["A"])(s),n=4,a=[i.weekday,(i.weekday+1)%7,(i.weekday+2)%7,(i.weekday+3)%7];break;case"custom-weekly":e=ft,i=this.parsedStart||t,s=this.parsedEnd;break;case"custom-daily":e=gt,i=this.parsedStart||t,s=this.parsedEnd;break;case"category":var o=this.parsedCategoryDays;e=pt,s=Object(O["y"])(Object(O["f"])(s),O["t"],o),Object(O["A"])(s),n=o,a=[];for(var c=0;c<o;c++)a.push((i.weekday+c)%7);r=this.getCategoryList(r);break;default:throw new Error(this.type+" is not a valid Calendar type")}return{component:e,start:i,end:s,maxDays:n,weekdays:a,categories:r}},eventWeekdays:function(){return this.renderProps.weekdays},categoryMode:function(){return"category"===this.type},title:function(){var t=this.renderProps,e=t.start,n=t.end,a=e.year!==n.year,r=a||e.month!==n.month;return a?this.monthShortFormatter(e,!0)+" "+e.year+" - "+this.monthShortFormatter(n,!0)+" "+n.year:r?this.monthShortFormatter(e,!0)+" - "+this.monthShortFormatter(n,!0)+" "+n.year:this.monthLongFormatter(e,!1)+" "+e.year},monthLongFormatter:function(){return this.getFormatter({timeZone:"UTC",month:"long"})},monthShortFormatter:function(){return this.getFormatter({timeZone:"UTC",month:"short"})},parsedCategories:function(){return"string"===typeof this.categories&&this.categories?this.categories.split(/\s*,\s*/):Array.isArray(this.categories)?this.categories:[]}},watch:{renderProps:"checkChange"},mounted:function(){this.updateEventVisibility(),this.checkChange()},updated:function(){window.requestAnimationFrame(this.updateEventVisibility)},methods:{checkChange:function(){var t=this.lastStart,e=this.lastEnd,n=this.renderProps,a=n.start,r=n.end;t&&e&&a.date===t.date&&r.date===e.date||(this.lastStart=a,this.lastEnd=r,this.$emit("change",{start:a,end:r}))},move:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=Object(O["f"])(this.parsedValue),n=t>0,a=n?O["t"]:O["x"],r=n?O["a"]:O["c"],i=n?t:-t;while(--i>=0)switch(this.type){case"month":e.day=r,a(e);break;case"week":Object(O["y"])(e,a,O["b"]);break;case"day":Object(O["y"])(e,a,1);break;case"4day":Object(O["y"])(e,a,4);break;case"category":Object(O["y"])(e,a,this.parsedCategoryDays);break}Object(O["E"])(e),Object(O["A"])(e),Object(O["D"])(e,this.times.now),this.value instanceof Date?this.$emit("input",Object(O["z"])(e)):"number"===typeof this.value?this.$emit("input",Object(O["z"])(e).getTime()):this.$emit("input",e.date),this.$emit("moved",e)},next:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.move(t)},prev:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.move(-t)},timeToY:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=this.$children[0];return!(!n||!n.timeToY)&&n.timeToY(t,e)},timeDelta:function(t){var e=this.$children[0];return!(!e||!e.timeDelta)&&e.timeDelta(t)},minutesToPixels:function(t){var e=this.$children[0];return e&&e.minutesToPixels?e.minutesToPixels(t):-1},scrollToTime:function(t){var e=this.$children[0];return!(!e||!e.scrollToTime)&&e.scrollToTime(t)},parseTimestamp:function(t,e){return Object(O["w"])(t,e,this.times.now)},timestampToDate:function(t){return Object(O["z"])(t)},getCategoryList:function(t){var e=this;if(!this.noEvents){var n=t.reduce((function(t,e,n){return t[e]={index:n,count:0},t}),Object.create(null));if(!this.categoryHideDynamic||!this.categoryShowAll){var a=t.length;this.parsedEvents.forEach((function(t){var r=t.category;"string"!==typeof r&&(r=e.categoryForInvalid),r&&(r in n?n[r].count++:e.categoryHideDynamic||(n[r]={index:a++,count:1}))}))}if(!this.categoryShowAll)for(var r in n)0===n[r].count&&delete n[r];t=Object.keys(n)}return t}},render:function(t){var e=this,n=this.renderProps,a=n.start,r=n.end,i=n.maxDays,s=n.component,o=n.weekdays,c=n.categories;return t(s,{staticClass:"v-calendar",class:{"v-calendar-events":!this.noEvents},props:Object(l["a"])(Object(l["a"])({},this.$props),{},{start:a.date,end:r.date,maxDays:i,weekdays:o,categories:c}),directives:[{modifiers:{quiet:!0},name:"resize",value:this.updateEventVisibility}],on:Object(l["a"])(Object(l["a"])({},this.$listeners),{},{"click:date":function(t){e.$listeners["input"]&&e.$emit("input",t.date),e.$listeners["click:date"]&&e.$emit("click:date",t)}}),scopedSlots:this.getScopedSlots()})}}),Ot=n("8dd9"),kt=Object(c["a"])(o,a,r,!1,null,null,null);e["default"]=kt.exports;d()(kt,{VCalendar:bt,VSheet:Ot["a"]})},aff5:function(t,e,n){var a=n("23e7");a({target:"Number",stat:!0},{MAX_SAFE_INTEGER:9007199254740991})},b7cc:function(t,e,n){},d13b:function(t,e,n){},fcf4:function(t,e,n){}}]);
//# sourceMappingURL=chunk-9148db3c.92ae0e40.js.map