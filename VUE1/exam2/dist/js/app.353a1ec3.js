(function(){"use strict";var t={9275:function(t,n,e){var o=e(9242),a=e(3396);function u(t,n){const e=(0,a.up)("router-link"),o=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("nav",null,[(0,a.Wm)(e,{to:"/exam1"},{default:(0,a.w5)((()=>[(0,a.Uk)("Exam1")])),_:1}),(0,a.Uk)(" | "),(0,a.Wm)(e,{to:"/exam2"},{default:(0,a.w5)((()=>[(0,a.Uk)("Exam2")])),_:1}),(0,a.Uk)(" | "),(0,a.Wm)(e,{to:"/exam3"},{default:(0,a.w5)((()=>[(0,a.Uk)("Exam3")])),_:1})]),(0,a.Wm)(o)],64)}var r=e(89);const l={},i=(0,r.Z)(l,[["render",u]]);var d=i,s=e(2483),c=e(7139);const v=t=>((0,a.dD)("data-v-cf16053e"),t=t(),(0,a.Cn)(),t),f={class:"box"},p=v((()=>(0,a._)("h1",null,"Exam1",-1))),m=v((()=>(0,a._)("br",null,null,-1)));function h(t,n,e,u,r,l){return(0,a.wg)(),(0,a.iD)("div",f,[p,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.todos,(t=>((0,a.wg)(),(0,a.iD)("div",{key:t.id,class:"todo-box-inline"},(0,c.zw)(t.title),1)))),128)),m,(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=t=>r.title=t)},null,512),[[o.nr,r.title]]),(0,a._)("button",{type:"button",onClick:n[1]||(n[1]=(...t)=>l.addTodo&&l.addTodo(...t))},"추가")])}e(560);var w={name:"MyTodo",data(){return{todos:[{title:"zero"},{title:"one"},{title:"two"}],title:"",lastId:3}},methods:{addTodo(){""!==this.title.trim()&&(this.todos.push({id:++this.lastId,title:this.title}),this.title="")}}};const _=(0,r.Z)(w,[["render",h],["__scopeId","data-v-cf16053e"]]);var b=_;const x=t=>((0,a.dD)("data-v-5462688c"),t=t(),(0,a.Cn)(),t),y=x((()=>(0,a._)("h1",null,"Exam2",-1))),g=["onClick"],k=x((()=>(0,a._)("br",null,null,-1)));function D(t,n,e,u,r,l){return(0,a.wg)(),(0,a.iD)("div",null,[y,(0,a._)("table",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.todos,((t,n)=>((0,a.wg)(),(0,a.iD)("tr",{key:t.id},[(0,a._)("td",null,(0,c.zw)(t.value),1),(0,a._)("td",null,[(0,a._)("button",{type:"button",onClick:t=>l.deleteTodo(n)},"삭제",8,g)])])))),128))]),k,(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=n=>t.value=n)},null,512),[[o.nr,t.value]]),(0,a._)("button",{type:"button",onClick:n[1]||(n[1]=(...t)=>l.addTodo&&l.addTodo(...t))},"추가")])}var O={name:"Exam2View",data(){return{todos:[{value:"zero"},{value:"one"},{value:"two"}]}},methods:{deleteTodo(t){confirm("삭제하시겠습니까?")&&this.todos.splice(t,1)},addTodo:function(){this.todos.push({id:++this.lastId,value:this.value}),this.value=""}}};const T=(0,r.Z)(O,[["render",D],["__scopeId","data-v-5462688c"]]);var C=T;const E=t=>((0,a.dD)("data-v-08f26d44"),t=t(),(0,a.Cn)(),t),V=E((()=>(0,a._)("h1",null,"Exam3",-1))),M=E((()=>(0,a._)("br",null,null,-1)));function U(t,n,e,u,r,l){const i=(0,a.up)("MyMessage");return(0,a.wg)(),(0,a.iD)("div",null,[V,(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=t=>r.value=t)},null,512),[[o.nr,r.value]]),M,(0,a.Wm)(i,{inputValue:r.value},null,8,["inputValue"])])}const I={class:"box"};function j(t,n,e,o,u,r){return(0,a.wg)(),(0,a.iD)("div",I,(0,c.zw)(e.inputValue),1)}var z={name:"MyMessage",props:{inputValue:{type:String}},data(){return{value:""}}};const W=(0,r.Z)(z,[["render",j],["__scopeId","data-v-6cb9fbe5"]]);var Z=W,H={name:"Exam3View",components:{MyMessage:Z},data(){return{value:""}}};const P=(0,r.Z)(H,[["render",U],["__scopeId","data-v-08f26d44"]]);var Y=P;const K=[{path:"/exam1",name:"exam1",component:b},{path:"/exam2",name:"exam2",component:C},{path:"/exam3",name:"exam3",component:Y}],F=(0,s.p7)({history:(0,s.PO)("/"),routes:K});var S=F;(0,o.ri)(d).use(S).mount("#app")}},n={};function e(o){var a=n[o];if(void 0!==a)return a.exports;var u=n[o]={exports:{}};return t[o].call(u.exports,u,u.exports,e),u.exports}e.m=t,function(){var t=[];e.O=function(n,o,a,u){if(!o){var r=1/0;for(s=0;s<t.length;s++){o=t[s][0],a=t[s][1],u=t[s][2];for(var l=!0,i=0;i<o.length;i++)(!1&u||r>=u)&&Object.keys(e.O).every((function(t){return e.O[t](o[i])}))?o.splice(i--,1):(l=!1,u<r&&(r=u));if(l){t.splice(s--,1);var d=a();void 0!==d&&(n=d)}}return n}u=u||0;for(var s=t.length;s>0&&t[s-1][2]>u;s--)t[s]=t[s-1];t[s]=[o,a,u]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,o){var a,u,r=o[0],l=o[1],i=o[2],d=0;if(r.some((function(n){return 0!==t[n]}))){for(a in l)e.o(l,a)&&(e.m[a]=l[a]);if(i)var s=i(e)}for(n&&n(o);d<r.length;d++)u=r[d],e.o(t,u)&&t[u]&&t[u][0](),t[u]=0;return e.O(s)},o=self["webpackChunkn202114058"]=self["webpackChunkn202114058"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(9275)}));o=e.O(o)})();
//# sourceMappingURL=app.353a1ec3.js.map