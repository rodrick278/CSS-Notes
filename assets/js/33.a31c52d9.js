(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{416:function(t,s,_){"use strict";_.r(s);var v=_(10),o=Object(v.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"性能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#性能"}},[t._v("#")]),t._v(" 性能")]),t._v(" "),s("h2",{attrs:{id:"为什么说-position-absolute-跟-float-影响性能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么说-position-absolute-跟-float-影响性能"}},[t._v("#")]),t._v(" 为什么说 position absolute 跟 float 影响性能？")]),t._v(" "),s("ol",[s("li",[t._v("二者脱离文档流，会引起页面重绘")]),t._v(" "),s("li",[t._v("二者相比，position 的代价比较小，因为他的位置变化不用考虑对别的元素的影响，但是 float 会影响")]),t._v(" "),s("li",[t._v("另外，"),s("code",[t._v("position:absolute")]),t._v(" 和 float 会隐式地改变 diplay 的属性为 "),s("code",[t._v("inline-block")]),t._v(" ，就算我们显示地设置 "),s("code",[t._v("display:inline")]),t._v(" 或者"),s("code",[t._v("display:block")]),t._v(" ，也仍然无效")])]),t._v(" "),s("h2",{attrs:{id:"js-资源和-css-资源的放置位置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js-资源和-css-资源的放置位置"}},[t._v("#")]),t._v(" JS 资源和 CSS 资源的放置位置")]),t._v(" "),s("p",[t._v("CSS 放在 head 可以先加载样式，页面渲染时首先是根据DOM结构生成一个DOM树然后加上CSS样式生成一个渲染树，如果CSS放在后面可能页面会出现闪跳的感觉。")]),t._v(" "),s("p",[t._v("JS 放在后面，防止堵塞后续加载，JS 可以加上 "),s("code",[t._v("defer")]),t._v(" 或者"),s("code",[t._v("async")]),t._v(" 标签，前者会等待文档渲染完毕，在 "),s("code",[t._v("DomContentLoaded")]),t._v(" 之前加载；后者是异步下载，下载完成即刻加载。")]),t._v(" "),s("h2",{attrs:{id:"css-常用性能优化方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css-常用性能优化方案"}},[t._v("#")]),t._v(" CSS 常用性能优化方案")]),t._v(" "),s("p",[t._v("参考文章："),s("a",{attrs:{href:"https://juejin.cn/post/6844904006251184142",target:"_blank",rel:"noopener noreferrer"}},[t._v("掘金-CSS 性能优化还有哪些方法？-前端小智"),s("OutboundLink")],1)]),t._v(" "),s("ol",[s("li",[s("p",[t._v("使用简写，如 "),s("code",[t._v("margin:1px 2px")])])]),t._v(" "),s("li",[s("p",[t._v("不用的 css 删除，比如 "),s("code",[t._v("display:inline")]),t._v(" 后不应该再使用 width、height、margin、padding 以及 float")])]),t._v(" "),s("li",[s("p",[t._v("压缩 css")])]),t._v(" "),s("li",[s("p",[t._v("关键的样式内联在 "),s("code",[t._v("<style>")]),t._v(" 中，因为加载外部样式需要时间")])]),t._v(" "),s("li",[s("p",[t._v("能用 css 的不用图片")])]),t._v(" "),s("li",[s("p",[t._v("颜色使用缩写：#ffffff => #fff")])]),t._v(" "),s("li",[s("p",[t._v("不用的单位或者数字删除 0.2px => .2px ; 0px => 0")])]),t._v(" "),s("li",[s("p",[t._v("精灵图")])]),t._v(" "),s("li",[s("p",[t._v("分析表明，一些标签比其他标签更昂贵。以下这些解析会影响性能—如果在没有必要的情况，尽量不要使用它们。 border-radius box-shadow transform filter :nth-child position: fixed;")])]),t._v(" "),s("li",[s("p",[t._v("更少的选择器层级")])])])])}),[],!1,null,null,null);s.default=o.exports}}]);