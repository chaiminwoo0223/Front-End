(function(){"use strict";var t={9243:function(t,n,e){var o=e(9242),r=e(3396);const i={id:"app"};function d(t,n,e,o,d,l){const u=(0,r.up)("MyTodo");return(0,r.wg)(),(0,r.iD)("div",i,[(0,r.Wm)(u)])}var l=e(7139);const u=t=>((0,r.dD)("data-v-1807b2a2"),t=t(),(0,r.Cn)(),t),a=u((()=>(0,r._)("h1",null,"할 일",-1))),c=u((()=>(0,r._)("tr",null,[(0,r._)("td",null,"ID"),(0,r._)("td",null,"기한"),(0,r._)("td",null,"할일")],-1))),s={class:"centered-column"},f=["onUpdate:modelValue"],p=["onClick"];function h(t,n,e,i,d,u){return(0,r.wg)(),(0,r.iD)("div",null,[a,(0,r._)("table",null,[c,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(d.todos,((t,n)=>((0,r.wg)(),(0,r.iD)("tr",{key:t.id,class:(0,l.C_)({done:t.done})},[(0,r._)("td",null,(0,l.zw)(t.id),1),(0,r._)("td",s,(0,l.zw)(t.date),1),(0,r._)("td",null,[(0,r.wy)((0,r._)("input",{type:"checkbox","onUpdate:modelValue":n=>t.done=n},null,8,f),[[o.e8,t.done]]),(0,r.Uk)(" "+(0,l.zw)(t.title)+" ",1),(0,r._)("span",{onClick:t=>u.deleteTodo(n)},"x",8,p)])],2)))),128))]),(0,r.wy)((0,r._)("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=t=>d.title=t),placeholder:"할일을 입력하세요"},null,512),[[o.nr,d.title]]),(0,r.wy)((0,r._)("input",{type:"date","onUpdate:modelValue":n[1]||(n[1]=t=>d.date=t)},null,512),[[o.nr,d.date]]),(0,r._)("button",{type:"button",onClick:n[2]||(n[2]=(...t)=>u.addTodo&&u.addTodo(...t))},"추가")])}e(560);var v={name:"MyTodo",data(){return{todos:[{id:1,date:"2023-05-20",title:"과제",done:!1},{id:2,date:"2023-06-01",title:"시험공부",done:!1},{id:3,date:"2023-06-15",title:"코딩훈련",done:!1}],title:"",date:"",lastId:3}},methods:{addTodo(){this.title&&this.date?(this.todos.push({id:++this.lastId,title:this.title,date:this.date,done:!1}),this.title="",this.date=""):alert("제목과 날짜를 입력하세요.")},deleteTodo(t){confirm("삭제하시겠습니까?")&&this.todos.splice(t,1)}}},b=e(89);const y=(0,b.Z)(v,[["render",h],["__scopeId","data-v-1807b2a2"]]);var _=y,w={name:"App",components:{MyTodo:_}};const m=(0,b.Z)(w,[["render",d]]);var g=m;(0,o.ri)(g).mount("#app")}},n={};function e(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return t[o].call(i.exports,i,i.exports,e),i.exports}e.m=t,function(){var t=[];e.O=function(n,o,r,i){if(!o){var d=1/0;for(c=0;c<t.length;c++){o=t[c][0],r=t[c][1],i=t[c][2];for(var l=!0,u=0;u<o.length;u++)(!1&i||d>=i)&&Object.keys(e.O).every((function(t){return e.O[t](o[u])}))?o.splice(u--,1):(l=!1,i<d&&(d=i));if(l){t.splice(c--,1);var a=r();void 0!==a&&(n=a)}}return n}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[o,r,i]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,o){var r,i,d=o[0],l=o[1],u=o[2],a=0;if(d.some((function(n){return 0!==t[n]}))){for(r in l)e.o(l,r)&&(e.m[r]=l[r]);if(u)var c=u(e)}for(n&&n(o);a<d.length;a++)i=d[a],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(c)},o=self["webpackChunktodo2"]=self["webpackChunktodo2"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(9243)}));o=e.O(o)})();
//# sourceMappingURL=app.e7eba3e3.js.map