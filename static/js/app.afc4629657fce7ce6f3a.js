webpackJsonp([0],{"31tA":function(t,a){},"3Lmy":function(t,a){},LTuK:function(t,a){},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("/5sW"),i={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",[e("v-toolbar",{staticClass:"mainToolbar",attrs:{fixed:"",flat:""}},[e("v-container",{staticClass:"homeContainer"},[e("v-layout",{staticClass:"rowz"},[e("v-flex",{attrs:{xs6:""}},[e("router-link",{staticClass:"titleMain pl-3",attrs:{to:"/"}},[t._v("\n            Milan Petrovic\n          ")])],1),t._v(" "),e("v-flex",{staticClass:"text-xs-right",attrs:{xs6:""}},[e("router-link",{staticClass:"contact pr-3",attrs:{to:"/contact"}},[t._v("\n            Contact\n          ")])],1)],1)],1)],1),t._v(" "),e("v-container",{staticClass:"homeContainer margtop",attrs:{"grid-list-lg":""}},[e("v-layout",{staticClass:"text-xs-center",attrs:{row:"",wrap:""}},t._l(t.albums,function(a){return e("v-flex",{attrs:{xs12:"",md6:""}},[e("router-link",{attrs:{to:a.link}},[e("div",{attrs:{id:"album"}},[e("img",{attrs:{src:a.imgURL}})])]),t._v(" "),e("h5",{staticClass:"text-xs-center"},[t._v(t._s(a.text))])],1)}))],1)],1)},staticRenderFns:[]};var r={name:"app",components:{homeView:e("VU/8")({data:function(){return{albums:[{imgURL:"../static/1.png",text:"album_1",link:"/album_1"},{imgURL:"./static/1.jpg",text:"album_2",link:"/album_2"},{imgURL:"./static/2.jpg",text:"album_3",link:"/album_3"},{imgURL:"./static/3.jpg",text:"album_4",link:"/album_4"},{imgURL:"./static/4.png",text:"album_5",link:"/album_5"},{imgURL:"./static/5.jpg",text:"album_6",link:"/album_6"}]}}},i,!1,function(t){e("3Lmy")},null,null).exports}},s={render:function(){var t=this.$createElement,a=this._self._c||t;return a("v-app",{attrs:{id:"app"}},[a("div",[a("transition",{attrs:{name:"fade"}},[a("router-view")],1)],1),this._v(" "),a("homeView")],1)},staticRenderFns:[]},c=e("VU/8")(r,s,!1,null,null,null).exports,l=e("3EgV"),o=e.n(l),u=(e("QCv7"),e("/ocq")),m={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{})},staticRenderFns:[]};var p={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",[e("v-container",{staticClass:"mainContainer margtop"},t._l(t.albums,function(a){return e("v-layout",{staticClass:"pic mt-3",attrs:{row:""}},[e("v-flex",{attrs:{xs12:""}},[e("img",{attrs:{src:a.imgURL}}),t._v(" "),e("h5",{staticClass:"text-xs-center"},[t._v(t._s(a.text))])])],1)}))],1)},staticRenderFns:[]};var _={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",[e("v-container",{staticClass:"mainContainer margtop"},t._l(t.albums,function(a){return e("v-layout",{staticClass:"text-xs-center pic mt-3",attrs:{row:""}},[e("v-flex",{attrs:{xs12:""}},[e("img",{attrs:{src:a.imgURL}}),t._v(" "),e("h5",[t._v(t._s(a.text))])])],1)}))],1)},staticRenderFns:[]};var v={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",[e("v-container",{staticClass:"mainContainer margtop"},t._l(t.albums,function(a){return e("v-layout",{staticClass:"text-xs-center pic mt-3",attrs:{row:""}},[e("v-flex",[e("img",{attrs:{src:a.imgURL}}),t._v(" "),e("h5",[t._v(t._s(a.text))])])],1)}))],1)},staticRenderFns:[]};var x={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",[e("v-container",{staticClass:"mainContainer margtop"},t._l(t.albums,function(a){return e("v-layout",{staticClass:"text-xs-center pic mt-3",attrs:{row:""}},[e("v-flex",{attrs:{xs12:""}},[e("img",{attrs:{src:a.imgURL}}),t._v(" "),e("h5",[t._v(t._s(a.text))])])],1)}))],1)},staticRenderFns:[]};var g={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",[e("v-container",{staticClass:"mainContainer margtop"},t._l(t.albums,function(a){return e("v-layout",{staticClass:"text-xs-center pic mt-3",attrs:{row:""}},[e("v-flex",{attrs:{xs12:""}},[e("img",{attrs:{src:a.imgURL}}),t._v(" "),e("h5",[t._v(t._s(a.text))])])],1)}))],1)},staticRenderFns:[]};var f={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",[e("v-container",{staticClass:"mainContainer margtop"},t._l(t.albums,function(a){return e("v-layout",{staticClass:"text-xs-center pic mt-3",attrs:{row:""}},[e("v-flex",{attrs:{xs12:""}},[e("img",{attrs:{src:a.imgURL}}),t._v(" "),e("h5",[t._v(t._s(a.text))])])],1)}))],1)},staticRenderFns:[]};var d={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var b=[{path:"/",name:"Home",component:e("VU/8")({},m,!1,function(t){e("LTuK")},null,null).exports},{path:"/album_1",name:"album_1",component:e("VU/8")({data:function(){return{albums:[{imgURL:"../static/album_1/pic_1.jpg",text:"Pic_1 Title"},{imgURL:"../static/album_1/pic_2.jpg",text:"Pic_2 Title"},{imgURL:"../static/album_1/pic_3.jpg",text:"Pic_3 Title"},{imgURL:"../static/album_1/pic_4.jpg",text:"Pic_4 Title"},{imgURL:"../static/album_1/pic_5.jpg",text:"Pic_5 Title"},{imgURL:"../static/album_1/pic_6.jpg",text:"Pic_6 Title"}]}}},p,!1,function(t){e("TL9E")},"data-v-42846521",null).exports},{path:"/album_2",name:"album_2",component:e("VU/8")({data:function(){return{albums:[{imgURL:"../static/placeholder1000.png",text:"Pic_1 Title"},{imgURL:"../static/Placeholder800x1000.png",text:"Pic_2 Title"},{imgURL:"../static/placeholder-1000x500.png",text:"Pic_3 Title"},{imgURL:"../static/placeholder1000.png",text:"Pic_4 Title"}]}}},_,!1,function(t){e("gfxy")},"data-v-4291b103",null).exports},{path:"/album_3",name:"album_3",component:e("VU/8")({data:function(){return{albums:[{imgURL:"../static/placeholder2-500x900.png",text:"Pic_1 Title"},{imgURL:"../static/placeholder-1000x900.png",text:"Pic_2 Title"}]}}},v,!1,function(t){e("O46M")},"data-v-bca66bb0",null).exports},{path:"/album_4",name:"album_4",component:e("VU/8")({data:function(){return{albums:[{imgURL:"../static/placeholder1000.png",text:"Pic_1 Title"}]}}},x,!1,function(t){e("31tA")},"data-v-ca74305a",null).exports},{path:"/album_5",name:"album_5",component:e("VU/8")({data:function(){return{albums:[{imgURL:"../static/placeholder-1000x900.png",text:"Pic_1 Title"},{imgURL:"../static/placeholder2-500x900.png",text:"Pic_2 Title"},{imgURL:"../static/Placeholder800x1000.png",text:"Pic_3 Title"},{imgURL:"../static/placeholder1000.png",text:"Pic_4 Title"}]}}},g,!1,function(t){e("UaNQ")},"data-v-503e1ce8",null).exports},{path:"/album_6",name:"album_6",component:e("VU/8")({data:function(){return{albums:[{imgURL:"../static/placeholder1000.png",text:"Pic_1 Title"},{imgURL:"../static/placeholder-1000x900.png",text:"Pic_2 Title"}]}}},f,!1,function(t){e("P5Wu")},"data-v-5203f85d",null).exports},{path:"/contact",name:"contact",component:e("VU/8")({},d,!1,function(t){e("ez20")},null,null).exports}];n.a.use(o.a),n.a.use(u.a);var h=new u.a({routes:b});new n.a({el:"#app",render:function(t){return t(c)},router:h})},O46M:function(t,a){},P5Wu:function(t,a){},QCv7:function(t,a){},TL9E:function(t,a){},UaNQ:function(t,a){},ez20:function(t,a){},gfxy:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.afc4629657fce7ce6f3a.js.map