webpackJsonp([0],{"0Ptp":function(t,e){},DiBc:function(t,e){},LTuK:function(t,e){},LYuC:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("/5sW"),s={data:function(){return{albums:[{imgURL:"./static/1.png",text:"album_1",link:"/album_1"},{imgURL:"./static/1.jpg",text:"album_2",link:"/album_2"},{imgURL:"./static/2.jpg",text:"album_3",link:"/album_3"},{imgURL:"./static/3.jpg",text:"album_4",link:"/album_4"},{imgURL:"./static/4.png",text:"album_5",link:"/album_5"},{imgURL:"./static/5.jpg",text:"album_6",link:"/album_6"}]}},methods:{moveTop:function(){setTimeout(function(){window.scrollTo(0,0)},200)}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-toolbar",{staticClass:"mainToolbar",attrs:{fixed:"",flat:""}},[a("v-container",{staticClass:"homeContainer"},[a("v-layout",{staticClass:"rowz"},[a("v-flex",{attrs:{xs6:""}},[a("router-link",{staticClass:"titleMain pl-3",attrs:{to:"/"}},[t._v("\r\n            Milan Petrovic\r\n          ")])],1),t._v(" "),a("v-flex",{staticClass:"text-xs-right",attrs:{xs6:""}},[a("router-link",{staticClass:"contact pr-3",attrs:{to:"/contact"}},[t._v("\r\n            Contact\r\n          ")])],1)],1)],1)],1),t._v(" "),a("v-container",{staticClass:"homeContainer margtop",attrs:{"grid-list-lg":""}},[a("v-layout",{staticClass:"text-xs-center",attrs:{row:"",wrap:""}},t._l(t.albums,function(e){return a("v-flex",{attrs:{xs12:"",md6:""}},[a("router-link",{attrs:{to:e.link}},[a("div",{attrs:{id:"album"}},[a("img",{attrs:{src:e.imgURL},on:{click:t.moveTop}})])]),t._v(" "),a("h5",{staticClass:"text-xs-center"},[t._v(t._s(e.text))])],1)}))],1)],1)},staticRenderFns:[]};var l={name:"app",components:{homeView:a("VU/8")(s,r,!1,function(t){a("VA0m")},null,null).exports}},n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",{attrs:{id:"app"}},[e("div",[e("transition",{attrs:{name:"fade"}},[e("router-view")],1)],1),this._v(" "),e("homeView")],1)},staticRenderFns:[]};var c=a("VU/8")(l,n,!1,function(t){a("kJdz")},null,null).exports,o=a("3EgV"),u=a.n(o),m=(a("QCv7"),a("/ocq")),p={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{})},staticRenderFns:[]};var g={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticClass:"page"},[a("v-container",{ref:"guda",staticClass:"mainContainer margtop"},t._l(t.albums,function(e){return a("v-layout",{staticClass:"pic mt-3",attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("clazy-load",{attrs:{src:e.imgURL}},[a("img",{attrs:{slot:"image",src:e.imgURL},slot:"image"}),t._v(" "),a("v-flex",{staticClass:"margtop  text-xs-center",attrs:{slot:"placeholder",id:"load"},slot:"placeholder"},[a("v-progress-circular",{attrs:{indeterminate:"",color:"primary",width:7,size:100}})],1)],1),t._v(" "),a("h5",{staticClass:"text-xs-center"},[t._v(t._s(e.text))])],1)],1)}))],1)},staticRenderFns:[]};var x={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticClass:"page"},[a("v-container",{staticClass:"mainContainer margtop"},t._l(t.albums,function(e){return a("v-layout",{staticClass:"text-xs-center pic mt-3",attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("clazy-load",{attrs:{src:e.imgURL}},[a("img",{attrs:{slot:"image",src:e.imgURL},slot:"image"}),t._v(" "),a("v-flex",{staticClass:"mt-5 text-xs-center",attrs:{slot:"placeholder",id:"load"},slot:"placeholder"},[a("v-progress-circular",{attrs:{indeterminate:"",color:"primary",width:7,size:100}})],1)],1),t._v(" "),a("h5",{staticClass:"text-xs-center"},[t._v(t._s(e.text))])],1)],1)}))],1)},staticRenderFns:[]};var v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticClass:"page"},[a("v-container",{staticClass:"mainContainer margtop"},t._l(t.albums,function(e){return a("v-layout",{staticClass:"text-xs-center pic mt-3",attrs:{row:""}},[a("v-flex",[a("clazy-load",{attrs:{src:e.imgURL}},[a("img",{attrs:{slot:"image",src:e.imgURL},slot:"image"}),t._v(" "),a("v-flex",{staticClass:"margtop text-xs-center",attrs:{slot:"placeholder",id:"load"},slot:"placeholder"},[a("v-progress-circular",{attrs:{indeterminate:"",color:"primary",width:7,size:100}})],1)],1),t._v(" "),a("h5",{staticClass:"text-xs-center"},[t._v(t._s(e.text))])],1)],1)}))],1)},staticRenderFns:[]};var _={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticClass:"page"},[a("v-container",{staticClass:"mainContainer margtop"},t._l(t.albums,function(e){return a("v-layout",{staticClass:"text-xs-center pic mt-3",attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("clazy-load",{attrs:{src:e.imgURL}},[a("img",{attrs:{slot:"image",src:e.imgURL},slot:"image"}),t._v(" "),a("v-flex",{staticClass:"margtop text-xs-center",attrs:{slot:"placeholder",id:"load"},slot:"placeholder"},[a("v-progress-circular",{attrs:{indeterminate:"",color:"primary",width:7,size:100}})],1)],1),t._v(" "),a("h5",{staticClass:"text-xs-center"},[t._v(t._s(e.text))])],1)],1)}))],1)},staticRenderFns:[]};var d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticClass:"page"},[a("v-container",{staticClass:"mainContainer margtop"},t._l(t.albums,function(e){return a("v-layout",{staticClass:"text-xs-center pic mt-3",attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("clazy-load",{attrs:{src:e.imgURL}},[a("img",{attrs:{slot:"image",src:e.imgURL},slot:"image"}),t._v(" "),a("v-flex",{staticClass:"margtop text-xs-center",attrs:{slot:"placeholder",id:"load"},slot:"placeholder"},[a("v-progress-circular",{attrs:{indeterminate:"",color:"primary",width:7,size:100}})],1)],1),t._v(" "),a("h5",{staticClass:"text-xs-center"},[t._v(t._s(e.text))])],1)],1)}))],1)},staticRenderFns:[]};var f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticClass:"page"},[a("v-container",{staticClass:"mainContainer margtop"},t._l(t.albums,function(e){return a("v-layout",{staticClass:"text-xs-center pic mt-3",attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("clazy-load",{attrs:{src:e.imgURL}},[a("img",{attrs:{slot:"image",src:e.imgURL},slot:"image"}),t._v(" "),a("v-flex",{staticClass:"margtop text-xs-center",attrs:{slot:"placeholder",id:"load"},slot:"placeholder"},[a("v-progress-circular",{attrs:{indeterminate:"",color:"primary",width:7,size:100}})],1)],1),t._v(" "),a("h5",{staticClass:"text-xs-center"},[t._v(t._s(e.text))])],1)],1)}))],1)},staticRenderFns:[]};var b={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var h=[{path:"/",name:"Home",component:a("VU/8")({},p,!1,function(t){a("LTuK")},null,null).exports},{path:"/album_1",name:"album_1",component:a("VU/8")({data:function(){return{albums:[{imgURL:"../static/album_1/pic_1.jpg",text:"Picture Title"},{imgURL:"../static/album_1/pic_2.jpg",text:"Picture Title"},{imgURL:"../static/album_1/pic_3.jpg",text:"Picture Title"},{imgURL:"../static/album_1/pic_4.jpg",text:"Picture Title"},{imgURL:"../static/album_1/pic_5.jpg",text:"Picture Title"},{imgURL:"../static/album_1/pic_6.jpg",text:"Picture Title"}]}}},g,!1,function(t){a("wySA")},"data-v-e2343adc",null).exports},{path:"/album_2",name:"album_2",component:a("VU/8")({data:function(){return{albums:[{imgURL:"../static/album_2/01.jpg",text:"Picture Title"},{imgURL:"../static/album_2/02.jpg",text:"Picture Title"},{imgURL:"../static/album_2/03.jpg",text:"Picture Title"},{imgURL:"../static/album_2/04.jpg",text:"Picture Title"},{imgURL:"../static/album_2/05.jpg",text:"Picture Title"},{imgURL:"../static/album_2/06.jpg",text:"Picture Title"},{imgURL:"../static/album_2/07.jpg",text:"Picture Title"},{imgURL:"../static/album_2/08.jpg",text:"Picture Title"},{imgURL:"../static/album_2/09.jpg",text:"Picture Title"},{imgURL:"../static/album_2/10.jpg",text:"Picture Title"},{imgURL:"../static/album_2/11.jpg",text:"Picture Title"},{imgURL:"../static/album_2/12.jpg",text:"Picture Title"}]}}},x,!1,function(t){a("LYuC")},"data-v-0d31089f",null).exports},{path:"/album_3",name:"album_3",component:a("VU/8")({data:function(){return{albums:[{imgURL:"../static/placeholder2-500x900.png",text:"Picture Title"},{imgURL:"../static/placeholder-1000x900.png",text:"Picture Title"}]}}},v,!1,function(t){a("vH3R")},"data-v-53629903",null).exports},{path:"/album_4",name:"album_4",component:a("VU/8")({data:function(){return{albums:[{imgURL:"../static/placeholder1000.png",text:"Picture Title"}]}}},_,!1,function(t){a("0Ptp")},"data-v-07d8ffd3",null).exports},{path:"/album_5",name:"album_5",component:a("VU/8")({data:function(){return{albums:[{imgURL:"../static/placeholder-1000x900.png",text:"Picture Title"},{imgURL:"../static/placeholder2-500x900.png",text:"Picture Title"},{imgURL:"../static/Placeholder800x1000.png",text:"Picture Title"},{imgURL:"../static/placeholder1000.png",text:"Picture Title"}]}}},d,!1,function(t){a("ak9b")},"data-v-a55791f4",null).exports},{path:"/album_6",name:"album_6",component:a("VU/8")({data:function(){return{albums:[{imgURL:"../static/placeholder1000.png",text:"Picture Title"},{imgURL:"../static/placeholder-1000x900.png",text:"Picture Title"}]}}},f,!1,function(t){a("uC0o")},"data-v-70669bb8",null).exports},{path:"/contact",name:"contact",component:a("VU/8")({},b,!1,function(t){a("DiBc")},null,null).exports}],R=a("iKms"),U=a("MYII"),C=a.n(U);i.a.use(u.a),i.a.use(m.a),i.a.use(C.a),i.a.use(R.a,{breakpoints:{mobile:450,tablet:900,laptop:1250,desktop:1/0}});var L=new m.a({routes:h,mode:"history"});new i.a({el:"#app",router:L,render:function(t){return t(c)}})},QCv7:function(t,e){},VA0m:function(t,e){},ak9b:function(t,e){},kJdz:function(t,e){},uC0o:function(t,e){},vH3R:function(t,e){},wySA:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.4fcc77ba8c12f3e91f6c.js.map