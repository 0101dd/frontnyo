(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["productPage"],{2923:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticStyle:{background:"var(--accent)"}},[a("div",{attrs:{id:"router-ink"}}),a("div",{attrs:{id:"product-page"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},t._l(t.products,(function(e){return a("div",{key:e.name,staticClass:"col"},[a("kinesis-container",[a("kinesis-element",{staticStyle:{display:"flex","flex-wrap":"wrap"},attrs:{strength:15,type:"depth"}},[a("v-card",{staticClass:"elevation-5",attrs:{"max-width":"300"}},[a("router-link",{attrs:{to:"/product/"+e._id}},[a("v-img",{attrs:{src:e.image,width:"300px",height:"200px",fluid:""}})],1),a("v-card-text",[a("p",{staticStyle:{display:"inline","font-weight":"bold","font-size":"1.1rem",color:"var(--primary)"}},[t._v(" "+t._s(e.name))]),a("p",{staticStyle:{display:"inline"}},[t._v(" "+t._s("$"+e.price))]),a("p",{staticClass:"category"},[t._v(t._s(e.category))])])],1)],1)],1)],1)})),0)])])])},i=[],n=a("1da1"),s=(a("96cf"),{data:function(){return{products:[]}},created:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.api.get("/products");case 3:a=e.sent,r=a.data,t.products=r.result,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),t.$swal({icon:"error",title:"錯誤",text:"取得商品失敗"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}}),c=s,o=(a("6b3a"),a("2877")),d=a("6544"),p=a.n(d),l=a("7496"),u=a("b0af"),v=a("99d9"),f=a("adda"),w=Object(o["a"])(c,r,i,!1,null,"6a925054",null);e["default"]=w.exports;p()(w,{VApp:l["a"],VCard:u["a"],VCardText:v["b"],VImg:f["a"]})},5934:function(t,e,a){},"6b3a":function(t,e,a){"use strict";a("5934")}}]);
//# sourceMappingURL=productPage.e0a74473.js.map