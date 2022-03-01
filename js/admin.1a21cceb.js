(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["admin"],{"01e0":function(t,e,r){"use strict";r("2a33")},"0391":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"adminQ"}},[r("h1",{staticClass:"text-center"},[t._v("常見問題管理")]),r("router-link",{attrs:{to:"/admin/adminPro"}},[t._v("會員管理")]),r("router-link",{attrs:{to:"/admin/adminOrder"}},[t._v("訂單管理")]),r("router-link",{attrs:{to:"/admin/adminProduct"}},[t._v("商品管理")]),r("router-link",{attrs:{to:"/admin/adminQ"}},[t._v("常見問題")]),r("div",{staticClass:"container"},[r("v-data-table",{ref:"table",staticClass:"elevation-3",attrs:{headers:t.headers,items:t.arrayQ,"items-per-page":5,loading:"","loading-text":"加載中......."},scopedSlots:t._u([{key:"item.operate",fn:function(e){var a=e.item;return[r("v-icon",{staticClass:"mr-5",attrs:{middle:"",color:"primary"},on:{click:function(e){return t.editQuestion(a)}}},[t._v(" mdi-pencil ")]),r("v-icon",{attrs:{middle:"",color:"error"},on:{click:function(e){return t.deleteItem(a)}}},[t._v(" mdi-delete ")])]}}])})],1),r("v-row",{attrs:{justify:"center"}},[r("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,i=e.attrs;return[r("v-btn",t._g(t._b({staticClass:"mx-2 plus",staticStyle:{background:"var(--primary)",bottom:"40px",right:"50px"},attrs:{fab:"",icon:"",large:"",absolute:"",ripple:!1,color:"accent"}},"v-btn",i,!1),a),[r("v-icon",[t._v(" mdi-plus ")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-card-text",[r("div",{staticClass:"container form-container",staticStyle:{display:"block",width:"500px",height:"500px"}},[r("v-card-title",[r("p",{staticClass:"text-h5 mt-6 mx-auto font-weight-black"},[t._v("常見問題新增")])]),r("v-form",{ref:"form",on:{submit:function(e){return e.preventDefault(),t.created.apply(null,arguments)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-textarea",{attrs:{label:"請輸入問題",counter:"",maxlength:"200","full-width":"","single-line":"",rule:t.state.question},model:{value:t.form.question,callback:function(e){t.$set(t.form,"question",e)},expression:"form.question"}}),r("v-textarea",{attrs:{label:"請輸入回答",counter:"",maxlength:"500","full-width":"","single-line":"",rule:t.state.answer},model:{value:t.form.answer,callback:function(e){t.$set(t.form,"answer",e)},expression:"form.answer"}})],1)],1)]),r("v-card-actions",[r("v-spacer"),r("v-btn",{staticClass:"mb-5",attrs:{color:"primary",ripple:!1},on:{click:t.close}},[t._v(" 關閉 ")]),r("v-btn",{staticClass:"mb-5 mr-5",attrs:{color:"secondary",ripple:!1,type:"submit"},on:{click:t.submitModal}},[t._v(" 確定 ")])],1)],1)],1)],1),r("v-dialog",{attrs:{"max-width":"400px"},model:{value:t.dialogDelete,callback:function(e){t.dialogDelete=e},expression:"dialogDelete"}},[r("v-card",{staticClass:"delete-card"},[r("v-card-text",{staticClass:"delete-title"},[t._v(" 確定要刪除問題嗎？ ")]),r("v-card-actions",[r("v-spacer"),r("v-btn",{staticStyle:{right:"210px"},attrs:{color:"primary",ripple:!1,absolute:"",bottom:""},on:{click:t.closeDelete}},[t._v(" 取消 ")]),r("v-btn",{staticStyle:{right:"120px"},attrs:{color:"error",ripple:!1,absolute:"",bottom:""},on:{click:t.deleteQuestion}},[t._v(" 刪除 ")]),r("v-spacer")],1)],1)],1)],1)},i=[],n=r("1da1"),s=(r("96cf"),r("a434"),{data:function(){return{dialog:!1,dialogDelete:!1,valid:!0,editedIndex:-1,form:{question:"",answer:"",_id:"",index:-1},arrayQ:[],headers:[{text:"問題敘述",align:"center",sortable:!1,class:"primary white--text subtitle-1",width:"350px",value:"question"},{text:"回答敘述",align:"center",class:"primary white--text subtitle-1",width:"450px",value:"answer"},{text:"操作",align:"center",class:"primary white--text subtitle-1",value:"operate",sortable:!1}]}},computed:{state:function(){return{question:0!==this.form.question.length||null,answer:0!==this.form.answer.length||null}}},methods:{submitModal:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var a,i,n,s,o,l,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(t.preventDefault(),e.state.question&&e.state.answer){r.next=4;break}return e.$swal({icon:"error",iconColor:"#7e2f28",title:"缺少必填欄位",buttonsStyling:!1,background:"#DED7B9",confirmButtonText:"關閉",width:"20rem"}),r.abrupt("return");case 4:for(i in a=new FormData,e.form)"_id"!==i&&a.append(i,e.form[i]);if(r.prev=6,0!==e.form._id.length){r.next=16;break}return r.next=10,e.api.post("/questions",a,{headers:{authorization:"Bearer "+e.user.token}});case 10:n=r.sent,s=n.data,e.arrayQ.push(s.result),e.dialog=!0,r.next=24;break;case 16:return r.next=18,e.api.patch("/questions/"+e.form._id,a,{headers:{authorization:"Bearer "+e.user.token}});case 18:o=r.sent,l=o.data,console.log(l),c=e.form,l.result.image&&(c.image=l.result.image),e.arrayQ.splice(e.form.index,1,c);case 24:e.dialog=!1,r.next=30;break;case 27:r.prev=27,r.t0=r["catch"](6),r.t0.response?e.$swal({icon:"error",title:"新增錯誤",text:r.t0.response.data.message}):e.$swal({icon:"error",title:"錯誤",text:r.t0});case 30:case"end":return r.stop()}}),r,null,[[6,27]])})))()},deleteQuestion:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var r,a,i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(a in r=new FormData,t.form)"_id"!==a&&r.append(a,t.form[a]);return e.prev=2,e.next=5,t.api.patch("/questions/deleteQuestion/"+t.form._id,r,{headers:{authorization:"Bearer "+t.user.token}});case 5:i=e.sent,n=i.data,console.log(n),t.arrayQ.splice(t.form.index,1),t.closeDelete(),e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](2),e.t0.response?t.$swal({icon:"error",title:"錯誤",text:e.t0.response.data.message}):t.$swal({icon:"error",title:"錯誤",text:"錯誤"});case 15:case"end":return e.stop()}}),e,null,[[2,12]])})))()},close:function(){this.dialog=!1,this.form={question:"",answer:"",_id:"",index:-1}},editQuestion:function(t){this.form=Object.assign({},t),this.form.index=this.arrayQ.indexOf(t),this.dialog=!0},deleteItem:function(t){this.form=Object.assign({},t),this.form.index=this.arrayQ.indexOf(t),this.dialogDelete=!0},closeDelete:function(){this.dialogDelete=!1,this.form={question:"",answer:"",_id:"",index:-1}}},created:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.api.get("/questions/all",{headers:{authorization:"Bearer "+t.user.token}});case 3:r=e.sent,a=r.data,t.arrayQ=a.result,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),t.$swal({icon:"error",title:"錯誤",text:"取得失敗"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}}),o=s,l=(r("f2fa"),r("2877")),c=r("6544"),u=r.n(c),d=r("8336"),m=r("b0af"),p=r("99d9"),v=r("8fea"),f=r("169a"),x=r("4bd4"),h=r("132d"),g=r("0fd9"),b=r("2fa4"),w=r("a844"),k=Object(l["a"])(o,a,i,!1,null,"0112e76a",null);e["default"]=k.exports;u()(k,{VBtn:d["a"],VCard:m["a"],VCardActions:p["a"],VCardText:p["b"],VCardTitle:p["c"],VDataTable:v["a"],VDialog:f["a"],VForm:x["a"],VIcon:h["a"],VRow:g["a"],VSpacer:b["a"],VTextarea:w["a"]})},1732:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"users"}},[r("h1",{staticClass:"text-center"},[t._v("會員管理")]),r("router-link",{attrs:{to:"/admin/adminPro"}},[t._v("會員管理")]),r("router-link",{attrs:{to:"/admin/adminOrder"}},[t._v("訂單管理")]),r("router-link",{attrs:{to:"/admin/adminProduct"}},[t._v("商品管理")]),r("router-link",{attrs:{to:"/admin/adminQ"}},[t._v("常見問題")]),r("div",{staticClass:"container"},[r("v-data-table",{ref:"table",staticClass:"elevation-3",attrs:{headers:t.headers,items:t.users,"items-per-page":10,loading:"","loading-text":"加載中......."}})],1)],1)},i=[],n=r("1da1"),s=(r("96cf"),{data:function(){return{users:[],form:{account:"",email:""},headers:[{text:"會員帳號",align:"start",sortable:!1,class:"primary white--text subtitle-1",width:"350px",value:"account"},{text:"會員信箱",class:"primary white--text subtitle-1",width:"450px",value:"email"}]}},created:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.api.get("/users/all",{headers:{authorization:"Bearer "+t.user.token}});case 3:r=e.sent,a=r.data,t.users=a.result,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),t.$swal({icon:"error",title:"錯誤",text:"取得商品失敗"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}}),o=s,l=(r("01e0"),r("2877")),c=r("6544"),u=r.n(c),d=r("8fea"),m=Object(l["a"])(o,a,i,!1,null,"bf26de94",null);e["default"]=m.exports;u()(m,{VDataTable:d["a"]})},"27b4":function(t,e,r){"use strict";r("912d")},"2a33":function(t,e,r){},3530:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{id:"inspire"}},[r("div",{attrs:{id:"router-link"}}),r("v-navigation-drawer",{attrs:{app:"",color:"secondary"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",{staticClass:"text-center mt-16",staticStyle:{color:"var(--error)"},attrs:{rounded:"",flat:""}},[r("v-list-item",{attrs:{"router-link":"",to:"/admin/adminPro",ripple:!1}},[r("v-list-item-title",{staticClass:"pro"},[t._v("會員管理")])],1),r("v-list-item",{attrs:{"router-link":"",to:"/admin/adminOrder",ripple:!1}},[r("v-list-item-title",[t._v("訂單管理")])],1),r("v-list-item",{attrs:{"router-link":"",to:"/admin/adminProduct",ripple:!1}},[r("v-list-item-title",[t._v("商品管理")])],1),r("v-list-item",{attrs:{"router-link":"",to:"/admin/adminQ",ripple:!1}},[r("v-list-item-title",[t._v("常見問題")])],1)],1)],1),r("v-main",[r("vue-page-transition",[r("router-view")],1)],1)],1)},i=[],n={data:function(){return{drawer:null}}},s=n,o=(r("92f4"),r("2877")),l=r("6544"),c=r.n(l),u=r("7496"),d=r("8860"),m=r("da13"),p=r("5d23"),v=r("f6c4"),f=r("f774"),x=Object(o["a"])(s,a,i,!1,null,"4c79a627",null);e["default"]=x.exports;c()(x,{VApp:u["a"],VList:d["a"],VListItem:m["a"],VListItemTitle:p["b"],VMain:v["a"],VNavigationDrawer:f["a"]})},7514:function(t,e,r){"use strict";r("836e")},"836e":function(t,e,r){},"8c39":function(t,e,r){},"912d":function(t,e,r){},"92f4":function(t,e,r){"use strict";r("d590")},"94ad":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"admin-product"}},[r("h1",{staticClass:"text-center"},[t._v("商品管理")]),r("router-link",{attrs:{to:"/admin/adminPro"}},[t._v("會員管理")]),r("router-link",{attrs:{to:"/admin/adminOrder"}},[t._v("訂單管理")]),r("router-link",{attrs:{to:"/admin/adminProduct"}},[t._v("商品管理")]),r("router-link",{attrs:{to:"/admin/adminQ"}},[t._v("常見問題")]),r("div",{staticClass:"container"},[r("v-data-table",{ref:"table",staticClass:"elevation-3",attrs:{headers:t.headers,items:t.products,"items-per-page":3,loading:"","loading-text":"加載中......."},scopedSlots:t._u([{key:"item.image",fn:function(t){var e=t.item;return[r("img",{staticStyle:{width:"100px","vertical-align":"middle",padding:"5px 0"},attrs:{src:e.image}})]}},{key:"item.sell",fn:function(e){var a=e.item;return[a.sell?r("v-icon",{attrs:{color:"primary"}},[t._v(" mdi-check ")]):t._e(),a.sell?t._e():r("v-icon",{attrs:{color:"error"}},[t._v(" mdi-close ")])]}},{key:"item.operate",fn:function(e){var a=e.item;return[r("v-icon",{staticClass:"mr-5",attrs:{middle:"",color:"primary"},on:{click:function(e){return t.editProduct(a)}}},[t._v(" mdi-pencil ")]),r("v-icon",{attrs:{middle:"",color:"error"},on:{click:function(e){return t.deleteItem(a)}}},[t._v(" mdi-delete ")])]}}])})],1),r("v-row",{attrs:{justify:"center"}},[r("v-dialog",{staticStyle:{background:"white"},attrs:{persistent:"","max-width":"650px",color:"white"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,i=e.attrs;return[r("v-btn",t._g(t._b({staticClass:"mx-2 plus",staticStyle:{background:"var(--primary)",bottom:"40px",right:"50px"},attrs:{fab:"",icon:"",large:"",absolute:"",ripple:!1,color:"accent"}},"v-btn",i,!1),a),[r("v-icon",[t._v(" mdi-plus ")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-card-text",[r("div",{staticClass:"container form-container",staticStyle:{display:"block",width:"500px",height:"650px"}},[r("v-card-title",[r("p",{staticClass:"text-h5 mt-6 mx-auto font-weight-black"})]),r("v-form",{ref:"form",on:{submit:function(e){return e.preventDefault(),t.created.apply(null,arguments)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("img-inputer",{attrs:{theme:"light",size:"large","bottom-text":"點選或拖拽圖片以修改","hover-text":"點選或拖拽圖片以修改",placeholder:"點選或拖拽選擇圖片","max-size":1024,"exceed-size-text":"檔案大小不能超過"},model:{value:t.form.image,callback:function(e){t.$set(t.form,"image",e)},expression:"form.image"}}),r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("v-text-field",{attrs:{rule:t.state.name,label:"商品名稱"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),r("div",{staticClass:"col"},[r("v-text-field",{attrs:{rule:t.state.price,label:"商品價格",type:"number"},model:{value:t.form.price,callback:function(e){t.$set(t.form,"price",e)},expression:"form.price"}})],1)]),r("v-radio-group",{attrs:{row:""},model:{value:t.form.category,callback:function(e){t.$set(t.form,"category",e)},expression:"form.category"}},t._l(t.category,(function(t){return r("v-radio",{key:t,attrs:{label:t,value:t,mandatory:""}})})),1),r("v-textarea",{attrs:{label:"敘述",counter:"",maxlength:"200","full-width":"","single-line":"",required:"",rows:"3","row-height":"25",rules:[function(t){return t.length>=5||"至少輸入 5 個字"}]},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}}),r("v-radio-group",{attrs:{row:""},model:{value:t.form.sell,callback:function(e){t.$set(t.form,"sell",e)},expression:"form.sell"}},[r("v-radio",{attrs:{label:"上架",value:!0}}),r("v-radio",{attrs:{label:"下架",value:!1}})],1)],1)],1)]),r("v-card-actions",[r("v-spacer"),r("v-btn",{staticClass:"mb-5",attrs:{color:"primary",ripple:!1,bottom:""},on:{click:t.close}},[t._v(" 關閉 ")]),r("v-btn",{staticClass:"mb-5 mr-5",attrs:{color:"secondary",ripple:!1,type:"submit"},on:{click:t.submitModal}},[t._v(" 確定 ")])],1)],1)],1),r("v-dialog",{attrs:{"max-width":"400px"},model:{value:t.dialogDelete,callback:function(e){t.dialogDelete=e},expression:"dialogDelete"}},[r("v-card",{staticClass:"delete-card"},[r("v-card-text",{staticClass:"delete-title"},[t._v(" 確定要刪除商品嗎？ ")]),r("v-card-actions",[r("v-spacer"),r("v-btn",{staticStyle:{right:"210px"},attrs:{color:"primary",ripple:!1,absolute:"",bottom:""},on:{click:t.closeDelete}},[t._v(" 取消 ")]),r("v-btn",{staticStyle:{right:"120px"},attrs:{color:"error",ripple:!1,absolute:"",bottom:""},on:{click:t.deleteProducts}},[t._v(" 刪除 ")]),r("v-spacer")],1)],1)],1)],1)],1)},i=[],n=r("1da1"),s=(r("96cf"),r("b0c0"),r("a434"),{data:function(){return{dialog:!1,dialogDelete:!1,editDialog:!1,valid:!0,category:["卡片","文字設計","書法作品"],editedIndex:-1,form:{name:"",price:null,description:"",image:null,sell:!1,category:"",_id:"",index:-1},products:[],headers:[{text:"商品圖片",align:"center",sortable:!1,value:"image",class:"primary white--text subtitle-1"},{text:"名稱",align:"center",class:"primary white--text subtitle-1",value:"name"},{text:"價格",align:"center",class:"primary white--text subtitle-1",value:"price"},{text:"類型",align:"center",class:"primary white--text subtitle-1",value:"category"},{text:"敘述",align:"center",class:"primary white--text subtitle-1",width:"280px",value:"description"},{text:"上架",align:"center",class:"primary white--text subtitle-1",value:"sell"},{text:"操作",align:"center",class:"primary white--text subtitle-1",value:"operate",sortable:!1}]}},computed:{state:function(){return{name:0!==this.form.name.length||null,price:null===this.form.price?null:this.form.price>=0,category:0!==this.form.category.length||null}}},methods:{close:function(){this.dialog=!1,this.form={name:"",price:0,description:"",image:null,sell:!1,category:"",_id:"",index:-1}},editProduct:function(t){this.form=Object.assign({},t),this.form.index=this.products.indexOf(t),this.dialog=!0},deleteItem:function(t){this.form=Object.assign({},t),this.form.index=this.products.indexOf(t),this.dialogDelete=!0},closeDelete:function(){this.dialogDelete=!1,this.form={name:"",price:0,description:"",image:null,sell:!1,category:"",_id:"",index:-1}},submitModal:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var a,i,n,s,o,l,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(t.preventDefault(),e.state.name&&e.state.price&&e.state.category){r.next=4;break}return e.$swal({icon:"error",iconColor:"#7e2f28",title:"缺少必填欄位",buttonsStyling:!1,background:"#DED7B9",confirmButtonText:"關閉",width:"20rem"}),r.abrupt("return");case 4:for(i in a=new FormData,e.form)"_id"!==i&&a.append(i,e.form[i]);if(r.prev=6,0!==e.form._id.length){r.next=16;break}return r.next=10,e.api.post("/products",a,{headers:{authorization:"Bearer "+e.user.token}});case 10:n=r.sent,s=n.data,e.products.push(s.result),e.dialog=!0,r.next=25;break;case 16:return r.next=18,e.api.patch("/products/"+e.form._id,a,{headers:{authorization:"Bearer "+e.user.token}});case 18:o=r.sent,l=o.data,console.log(l),c=e.form,l.result.image&&(c.image=l.result.image),console.log(e.form),e.products.splice(e.form.index,1,c);case 25:e.dialog=!1,r.next=31;break;case 28:r.prev=28,r.t0=r["catch"](6),r.t0.response?e.$swal({icon:"error",title:"錯誤",text:r.t0.response.data.message}):e.$swal({icon:"error",title:"錯誤",text:"gg"});case 31:case"end":return r.stop()}}),r,null,[[6,28]])})))()},deleteProducts:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var r,a,i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(a in r=new FormData,t.form)"_id"!==a&&r.append(a,t.form[a]);return e.prev=2,e.next=5,t.api.patch("/products/deleteProducts/"+t.form._id,r,{headers:{authorization:"Bearer "+t.user.token}});case 5:i=e.sent,n=i.data,console.log(n),t.products.splice(t.form.index,1),t.closeDelete(),e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](2),e.t0.response?t.$swal({icon:"error",title:"錯誤",text:e.t0.response.data.message}):t.$swal({icon:"error",title:"錯誤",text:"錯誤"});case 15:case"end":return e.stop()}}),e,null,[[2,12]])})))()}},created:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.api.get("/products/all",{headers:{authorization:"Bearer "+t.user.token}});case 3:r=e.sent,a=r.data,t.products=a.result,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),t.$swal({icon:"error",title:"錯誤",text:"取得商品失敗"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}}),o=s,l=(r("27b4"),r("2877")),c=r("6544"),u=r.n(c),d=r("8336"),m=r("b0af"),p=r("99d9"),v=r("8fea"),f=r("169a"),x=r("4bd4"),h=r("132d"),g=r("67b6"),b=r("43a6"),w=r("0fd9"),k=r("2fa4"),_=r("8654"),y=r("a844"),C=Object(l["a"])(o,a,i,!1,null,"469a72f8",null);e["default"]=C.exports;u()(C,{VBtn:d["a"],VCard:m["a"],VCardActions:p["a"],VCardText:p["b"],VCardTitle:p["c"],VDataTable:v["a"],VDialog:f["a"],VForm:x["a"],VIcon:h["a"],VRadio:g["a"],VRadioGroup:b["a"],VRow:w["a"],VSpacer:k["a"],VTextField:_["a"],VTextarea:y["a"]})},b9ab:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"admin-order"}},[r("h1",{staticClass:"text-center"},[t._v("訂單管理")]),r("router-link",{attrs:{to:"/admin/adminPro"}},[t._v("會員管理")]),r("router-link",{attrs:{to:"/admin/adminOrder"}},[t._v("訂單管理")]),r("router-link",{attrs:{to:"/admin/adminProduct"}},[t._v("商品管理")]),r("router-link",{attrs:{to:"/admin/adminQ"}},[t._v("常見問題")]),r("div",{staticClass:"container"},[r("v-data-table",{ref:"table",staticClass:"elevation-3",attrs:{headers:t.headers,items:t.orders,loading:"","loading-text":"加載中.......","items-per-page":5},scopedSlots:t._u([{key:"item.date",fn:function(e){var r=e.item;return[t._v(" "+t._s(new Date(r.date).toLocaleString("zh-tw"))+" ")]}},{key:"item.products.product",fn:function(e){var a=e.item;return[r("ul",t._l(a.products[0],(function(e){return r("li",{key:e},[t._v(" "+t._s(e.name)+" ")])})),0)]}},{key:"item.products.quantity",fn:function(e){var a=e.item;return[r("ul",t._l(a.products,(function(e){return r("li",{key:e},[t._v(" "+t._s(e.quantity)+" ")])})),0)]}}])})],1)],1)},i=[],n=r("1da1"),s=(r("96cf"),{data:function(){return{orders:[],headers:[{text:"日期",align:"center",value:"date",class:"primary white--text subtitle-1"},{text:"單號",align:"center",value:"products.0._id",class:"primary white--text subtitle-1"},{text:"使用者",align:"center",value:"user.account",class:"primary white--text subtitle-1"},{text:"名稱",align:"center",value:"products.product",class:"primary white--text subtitle-1"},{text:"數量",align:"center",value:"products.quantity",class:"primary white--text subtitle-1"}]}},created:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.api.get("/orders/all",{headers:{authorization:"Bearer "+t.user.token}});case 3:r=e.sent,a=r.data,t.orders=a.result,e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](0),e.t0.response&&t.$swal({icon:"error",title:"失敗",text:e.t0.response.data.message}),t.$swal({icon:"error",title:"失敗",text:e.t0});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()}}),o=s,l=(r("7514"),r("2877")),c=r("6544"),u=r.n(c),d=r("8fea"),m=Object(l["a"])(o,a,i,!1,null,"ad8c7418",null);e["default"]=m.exports;u()(m,{VDataTable:d["a"]})},d590:function(t,e,r){},f2fa:function(t,e,r){"use strict";r("8c39")}}]);
//# sourceMappingURL=admin.1a21cceb.js.map