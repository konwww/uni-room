(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-steps"],{"4eb5":function(t,s,i){"use strict";i.r(s);var n=i("a338"),a=i("8c0f");for(var c in a)"default"!==c&&function(t){i.d(s,t,function(){return a[t]})}(c);var e=i("2877"),u=Object(e["a"])(a["default"],n["a"],n["b"],!1,null,"764972f3",null);s["default"]=u.exports},"67cd":function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var n={data:function(){return{basicsList:[{cuIcon:"usefullfill",name:"开始"},{cuIcon:"radioboxfill",name:"等待"},{cuIcon:"roundclosefill",name:"错误"},{cuIcon:"roundcheckfill",name:"完成"}],basics:0,numList:[{name:"开始"},{name:"等待"},{name:"错误"},{name:"完成"}],num:0,scroll:0}},methods:{BasicsSteps:function(){this.basics=this.basics==this.basicsList.length-1?0:this.basics+1},NumSteps:function(){this.num=this.num==this.numList.length-1?0:this.num+1},ScrollSteps:function(){this.scroll=9==this.scroll?0:this.scroll+1}}};s.default=n},"8c0f":function(t,s,i){"use strict";i.r(s);var n=i("67cd"),a=i.n(n);for(var c in n)"default"!==c&&function(t){i.d(s,t,function(){return n[t]})}(c);s["default"]=a.a},a338:function(t,s,i){"use strict";var n=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("v-uni-view",[i("cu-custom",{attrs:{bgColor:"bg-gradual-pink",isBack:!0}},[i("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),i("template",{attrs:{slot:"content"},slot:"content"},[t._v("步骤条")])],2),i("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom"},[i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"cuIcon-title text-orange"}),t._v("基本用法")],1),i("v-uni-view",{staticClass:"action"},[i("v-uni-button",{staticClass:"cu-btn bg-green shadow",on:{click:function(s){s=t.$handleEvent(s),t.BasicsSteps(s)}}},[t._v("下一步")])],1)],1),i("v-uni-view",{staticClass:"bg-white padding"},[i("v-uni-view",{staticClass:"cu-steps"},t._l(t.basicsList,function(s,n){return i("v-uni-view",{key:n,staticClass:"cu-item",class:n>t.basics?"":"text-red"},[i("v-uni-text",{class:"cuIcon-"+s.cuIcon}),t._v(t._s(s.name))],1)}),1)],1),i("v-uni-view",{staticClass:"bg-white padding margin-top-xs"},[i("v-uni-view",{staticClass:"cu-steps"},t._l(t.basicsList,function(s,n){return i("v-uni-view",{key:n,staticClass:"cu-item",class:n>t.basics?"":"text-orange"},[i("v-uni-text",{class:n>t.basics?"cuIcon-title":"cuIcon-"+s.cuIcon}),t._v(t._s(s.name))],1)}),1)],1),i("v-uni-view",{staticClass:"bg-white padding  margin-top-xs"},[i("v-uni-view",{staticClass:"cu-steps steps-arrow"},t._l(t.basicsList,function(s,n){return i("v-uni-view",{key:n,staticClass:"cu-item",class:n>t.basics?"":"text-blue"},[i("v-uni-text",{class:"cuIcon-"+s.cuIcon}),t._v(t._s(s.name))],1)}),1)],1),i("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"cuIcon-title text-orange"}),t._v("数字完成")],1),i("v-uni-view",{staticClass:"action"},[i("v-uni-button",{staticClass:"cu-btn bg-green shadow",on:{click:function(s){s=t.$handleEvent(s),t.NumSteps(s)}}},[t._v("下一步")])],1)],1),i("v-uni-view",{staticClass:"bg-white padding"},[i("v-uni-view",{staticClass:"cu-steps"},t._l(t.numList,function(s,n){return i("v-uni-view",{key:n,staticClass:"cu-item",class:n>t.num?"":"text-blue"},[i("v-uni-text",{staticClass:"num",class:2==n?"err":"",attrs:{"data-index":n+1}}),t._v(t._s(s.name))],1)}),1)],1),i("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"cuIcon-title text-orange"}),t._v("多级显示")],1),i("v-uni-view",{staticClass:"action"},[i("v-uni-button",{staticClass:"cu-btn bg-green shadow",on:{click:function(s){s=t.$handleEvent(s),t.ScrollSteps(s)}}},[t._v("下一步")])],1)],1),i("v-uni-scroll-view",{staticClass:"bg-white padding response cu-steps steps-bottom",attrs:{"scroll-x":"","scroll-into-view":"scroll-"+t.scroll,"scroll-with-animation":""}},t._l(10,function(s,n){return i("v-uni-view",{key:n,staticClass:"cu-item padding-lr-xl",class:n>t.scroll?"":"text-blue",attrs:{id:"scroll-"+n}},[t._v("Level "+t._s(n+1)),i("v-uni-text",{staticClass:"num",attrs:{"data-index":n+1}})],1)}),1)],1)},a=[];i.d(s,"a",function(){return n}),i.d(s,"b",function(){return a})}}]);