(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{181:function(t,e,o){var content=o(183);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(42).default)("dfdecd72",content,!0,{sourceMap:!1})},182:function(t,e,o){"use strict";var r=o(181);o.n(r).a},183:function(t,e,o){(e=o(41)(!1)).push([t.i,'[data-v-3ea4b14a]:root{--responsive-padding:2rem;--controller-height:50px;--space:0.5rem;--primary-font:"Roboto",sans-serif;--global-radius:4px;--quick:cubic-bezier(0.4,0,0.2,1) 0.2s;--ease:cubic-bezier(0.32,0.23,0.49,0.95) 300ms;--box-shadow:0 1px 3px 0 rgba(0,0,0,0.2);--box-shadow-hover:0 4px 5px 0 rgba(0,0,0,0.14);--box-shadow-dropdown:0 6px 10px 0 rgba(0,0,0,0.14);--box-shadow-focus:0 0 10px 0 var(--secondary-color);--max-width:76rem;--primary-color:#7322b1;--secondary-color:#f7cf56;--text-color:#fff;--border-light:hsla(0,0%,100%,0.1)}@media (min-width:50em){[data-v-3ea4b14a]:root{--responsive-padding:5rem;--controller-height:56px;--space:1rem;--top-fold-height:142px}}.form[data-v-3ea4b14a]{margin-top:3rem}.icon[data-v-3ea4b14a]{height:36px;margin:0 0 1rem;width:36px}.subscribe[data-v-3ea4b14a]{border-radius:50px;box-shadow:0 4px 5px 0 rgba(0,0,0,.14);box-shadow:var(--box-shadow-hover);display:-webkit-inline-box;display:inline-flex;font-size:16px;position:relative;-webkit-transition:box-shadow .3s cubic-bezier(.32,.23,.49,.95);transition:box-shadow .3s cubic-bezier(.32,.23,.49,.95);-webkit-transition:box-shadow var(--ease);transition:box-shadow var(--ease)}.subscribe .alert[data-v-3ea4b14a]{bottom:-1.6rem;font-size:14px;left:1.5rem;opacity:.8;position:absolute}.subscribe[focus-within][data-v-3ea4b14a]{box-shadow:0 0 10px 0 #f7cf56;box-shadow:var(--box-shadow-focus)}.subscribe[data-v-3ea4b14a]:focus-within{box-shadow:0 0 10px 0 #f7cf56;box-shadow:var(--box-shadow-focus)}.subscribe input[data-v-3ea4b14a]{border:0;border-bottom-left-radius:25px;border-top-left-radius:25px;font-size:inherit;line-height:50px;padding:0 1.5rem}@media (min-width:50em){.subscribe input[data-v-3ea4b14a]{min-width:350px}}.subscribe input[data-v-3ea4b14a]:focus{box-shadow:none;outline:none}.subscribe button[data-v-3ea4b14a]{background-color:#7322b1;background-color:var(--primary-color);border:0;border-bottom-right-radius:25px;border-top-right-radius:25px;color:#fff;color:var(--text-color);cursor:pointer;font-size:inherit;font-weight:700;padding:0 1.8rem 0 1.5rem;text-shadow:0 1px 1px rgba(0,0,0,.5);-webkit-transition:background-color .2s cubic-bezier(.4,0,.2,1);transition:background-color .2s cubic-bezier(.4,0,.2,1);-webkit-transition:background-color var(--quick);transition:background-color var(--quick)}.subscribe button[data-v-3ea4b14a]:focus{box-shadow:none;outline:none}.subscribe button[data-v-3ea4b14a]:hover{background-color:#f7cf56;background-color:var(--secondary-color);color:#333;text-shadow:none}',""]),t.exports=e},184:function(t,e,o){"use strict";o(29);var r=o(5),n=o(185),c=o(186),d=o(187);Object(n.c)("required",c.b),Object(n.c)("email",c.a),Object(n.d)({en:d});var l,h={components:{ValidationProvider:n.b,ValidationObserver:n.a},props:{category:{type:String,default:""}},data:function(){return{state:0,data:{email:"",category:""}}},mounted:function(){this.data.category=this.category},methods:{submitForm:(l=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.$ga.event(this.data.category,"Signup","BetaSignup",0),t.next=3,this.$refs.observer.validate();case 3:if(t.sent){t.next=6;break}return t.abrupt("return");case 6:return t.prev=6,this.state=1,t.next=10,this.$axios.$post("https://mzenxvwh7d.execute-api.eu-central-1.amazonaws.com/dev/subscriptions",this.data);case 10:this.state=2,t.next=16;break;case 13:t.prev=13,t.t0=t.catch(6),this.state=3;case 16:case"end":return t.stop()}}),t,this,[[6,13]])}))),function(){return l.apply(this,arguments)})}},v=(o(182),o(21)),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"form"},[o("transition",{attrs:{mode:"out-in",name:"fade"}},[0===t.state?o("div",{key:"form"},[o("validation-observer",{ref:"observer",scopedSlots:t._u([{key:"default",fn:function(e){var r=e.passes;return[o("form",{staticClass:"subscribe",on:{submit:function(e){return e.preventDefault(),r(t.submitForm)}}},[o("validation-provider",{attrs:{rules:"required|email",name:"E-mail"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[o("input",{directives:[{name:"model",rawName:"v-model",value:t.data.email,expression:"data.email"}],attrs:{type:"text",placeholder:"Be informed ..."},domProps:{value:t.data.email},on:{input:function(e){e.target.composing||t.$set(t.data,"email",e.target.value)}}}),t._v(" "),o("span",{directives:[{name:"show",rawName:"v-show",value:r[0],expression:"errors[0]"}],staticClass:"alert"},[t._v(t._s(r[0]))])]}}],null,!0)}),t._v(" "),o("button",{attrs:{type:"submit"}},[t._v("Sign up")])],1)]}}],null,!1,435313249)})],1):1===t.state?o("div",{key:"loading"},[o("img",{staticClass:"icon",attrs:{src:"/icons/loader.svg",alt:"Loading"}})]):2===t.state?o("div",{key:"success"},[o("img",{staticClass:"icon",attrs:{src:"/icons/success.svg",alt:"Success"}}),t._v(" "),o("p",[t._v("Thank you for your interest! We'll contact you shortly.")])]):3===t.state?o("div",{key:"error"},[o("img",{staticClass:"icon",attrs:{src:"/icons/error.svg",alt:"Error"}}),t._v(" "),o("p",[t._v("Something went wrong. Try again later.")])]):t._e()])],1)}),[],!1,null,"3ea4b14a",null);e.a=component.exports},190:function(t,e,o){"use strict";o.r(e);var r={components:{Subscribe:o(184).a},data:function(){return{title:"Cloud Application Platform",description:"We are developers building something awesome for developers.",logo:"cloud_platform.svg",category:"cloud_platform"}},head:function(){return{title:"Nibbstack",meta:[{hid:"type",property:"og:type",content:"website"},{hid:"title",property:"og:title",content:"Nibbstack - ".concat(this.title)},{hid:"socialDescription",property:"og:description",content:this.description},{hid:"description",property:"description",content:this.description},{hid:"twitterDescription",property:"twitter:description",content:this.description},{hid:"twitterTitle",property:"twitter:title",content:"Nibbstack - ".concat(this.title)}]}}},n=o(21),component=Object(n.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"intro"},[e("div",{staticClass:"image-bg"},[e("div",{staticClass:"content"},[e("img",{attrs:{src:"/images/nibbstack-logo.svg",alt:"NibbStack",width:"200"}}),this._v(" "),e("br"),this._v(" "),e("br"),this._v(" "),e("h3",{domProps:{textContent:this._s(this.description)}}),this._v(" "),e("subscribe",{attrs:{category:this.category}})],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);