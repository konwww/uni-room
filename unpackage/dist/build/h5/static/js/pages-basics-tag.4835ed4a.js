(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-basics-tag"],{"3d1d":function(t,i,a){"use strict";a.r(i);var s=a("5b75"),e=a.n(s);for(var u in s)"default"!==u&&function(t){a.d(i,t,function(){return s[t]})}(u);i["default"]=e.a},"5b75":function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s={data:function(){return{ColorList:this.ColorList}}};i.default=s},"5ca2":function(t,i,a){"use strict";a.r(i);var s=a("ec99"),e=a("3d1d");for(var u in e)"default"!==u&&function(t){a.d(i,t,function(){return e[t]})}(u);var c=a("2877"),n=Object(c["a"])(e["default"],s["a"],s["b"],!1,null,"29b9730e",null);i["default"]=n.exports},ec99:function(t,i,a){"use strict";var s=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",[a("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0}},[a("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),a("template",{attrs:{slot:"content"},slot:"content"},[t._v("标签")])],2),a("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom"},[a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"cuIcon-title text-blue"}),t._v("标签形状")],1)],1),a("v-uni-view",{staticClass:"padding bg-white solid-bottom"},[a("v-uni-view",{staticClass:"cu-tag"},[t._v("默认")]),a("v-uni-view",{staticClass:"cu-tag round"},[t._v("椭圆")]),a("v-uni-view",{staticClass:"cu-tag radius"},[t._v("圆角")])],1),a("v-uni-view",{staticClass:"cu-bar bg-white margin-top"},[a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"cuIcon-title text-blue"}),t._v("标签尺寸")],1)],1),a("v-uni-view",{staticClass:"padding bg-white"},[a("v-uni-view",{staticClass:"cu-tag radius sm"},[t._v("小尺寸")]),a("v-uni-view",{staticClass:"cu-tag radius"},[t._v("普通尺寸")])],1),a("v-uni-view",{staticClass:"cu-bar bg-white margin-top"},[a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"cuIcon-title text-blue"}),t._v("标签颜色")],1)],1),a("v-uni-view",{staticClass:"padding-sm flex flex-wrap"},[t._l(t.ColorList,function(i,s){return"gray"!=i.name?a("v-uni-view",{key:s,staticClass:"padding-xs"},[a("v-uni-view",{staticClass:"cu-tag",class:"bg-"+i.name},[t._v(t._s(i.title))])],1):t._e()}),t._l(t.ColorList,function(i,s){return"gray"!=i.name&&"black"!=i.name&&"white"!=i.name?a("v-uni-view",{key:s,staticClass:"padding-xs"},[a("v-uni-view",{staticClass:"cu-tag light",class:"bg-"+i.name},[t._v(t._s(i.title))])],1):t._e()})],2),a("v-uni-view",{staticClass:"cu-bar bg-white margin-top"},[a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"cuIcon-title text-blue"}),t._v("镂空标签")],1)],1),a("v-uni-view",{staticClass:"padding-sm flex flex-wrap"},t._l(t.ColorList,function(i,s){return"white"!=i.name?a("v-uni-view",{key:s,staticClass:"padding-xs"},[a("v-uni-view",{staticClass:"cu-tag",class:"line-"+i.name},[t._v(t._s(i.title))])],1):t._e()}),1),a("v-uni-view",{staticClass:"cu-bar bg-white margin-top"},[a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"cuIcon-title text-blue"}),t._v("胶囊样式")],1)],1),a("v-uni-view",{staticClass:"padding"},[a("v-uni-view",{staticClass:"cu-capsule"},[a("v-uni-view",{staticClass:"cu-tag bg-red"},[a("v-uni-text",{staticClass:"cuIcon-likefill"})],1),a("v-uni-view",{staticClass:"cu-tag line-red"},[t._v("12")])],1),a("v-uni-view",{staticClass:"cu-capsule round"},[a("v-uni-view",{staticClass:"cu-tag bg-blue "},[a("v-uni-text",{staticClass:"cuIcon-likefill"})],1),a("v-uni-view",{staticClass:"cu-tag line-blue"},[t._v("23")])],1),a("v-uni-view",{staticClass:"cu-capsule round"},[a("v-uni-view",{staticClass:"cu-tag bg-blue "},[t._v("说明")]),a("v-uni-view",{staticClass:"cu-tag line-blue"},[t._v("123")])],1),a("v-uni-view",{staticClass:"cu-capsule radius"},[a("v-uni-view",{staticClass:"cu-tag bg-grey "},[a("v-uni-text",{staticClass:"cuIcon-likefill"})],1),a("v-uni-view",{staticClass:"cu-tag line-grey"},[t._v("23")])],1),a("v-uni-view",{staticClass:"cu-capsule radius"},[a("v-uni-view",{staticClass:"cu-tag bg-brown sm"},[a("v-uni-text",{staticClass:"cuIcon-likefill"})],1),a("v-uni-view",{staticClass:"cu-tag line-brown sm"},[t._v("23")])],1)],1),a("v-uni-view",{staticClass:"cu-bar bg-white margin-top"},[a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"cuIcon-title text-blue"}),t._v("数字标签")],1)],1),a("v-uni-view",{staticClass:"padding flex justify-between align-center"},[a("v-uni-view",{staticClass:"cu-avatar xl radius"},[t._v("港"),a("v-uni-view",{staticClass:"cu-tag badge"},[t._v("99+")])],1),a("v-uni-view",{staticClass:"cu-avatar xl radius",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)"}},[a("v-uni-view",{staticClass:"cu-tag badge"},[t._v("9")])],1),a("v-uni-view",{staticClass:"cu-avatar xl radius"},[a("v-uni-view",{staticClass:"cu-tag badge"},[t._v("99")]),a("v-uni-text",{staticClass:"cuIcon-people"})],1),a("v-uni-view",{staticClass:"cu-avatar xl radius"},[a("v-uni-view",{staticClass:"cu-tag badge"},[t._v("99+")])],1)],1)],1)},e=[];a.d(i,"a",function(){return s}),a.d(i,"b",function(){return e})}}]);