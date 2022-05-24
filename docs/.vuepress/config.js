module.exports = {
  base: "/CSS-Notes/",
  title: "CSS-Notes",
  description: "不用再为记不住css而苦恼",
  head: [
    [
      "meta",
      {
        name: "keywords",
        content: "前端, CSS",
      },
      { name: "author", content: "Rodrick" },
    ],
    ["link", { rel: "icon", href: "/portrait.png" }],
  ],
  plugins: [
    "@vuepress/medium-zoom",
    "@vuepress/back-to-top",
    "@vuepress/active-header-links",
  ],
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    repo: "rodrick278/CSS-Notes",
    logo: "/portrait.png",
    nav: [
      {
        text: "檐上有月",
        link: "https://rodrick.cn/",
      },
    ],
    sidebar: [
      {
        title: "介绍",
        collapsable: false,
        path: "/",
      },
      {
        title: "CSS基础",
        collapsable: true,
        children: [
          "/01-CSS基础/01-CSS选择器.md",
          "/01-CSS基础/02-CSS字体与文本.md",
          "/01-CSS基础/03-CSS背景属性.md",
          "/01-CSS基础/04-CSS伪类和伪元素.md",
          "/01-CSS基础/05-CSS样式的层叠与继承.md",
          "/01-CSS基础/06-CSS盒模型.md",
          "/01-CSS基础/07-CSS文档流.md",
          "/01-CSS基础/08-CSS动画.md",
          "/01-CSS基础/09-Flex弹性布局.md",
          "/01-CSS基础/10-Grid网格布局.md",
          "/01-CSS基础/11-媒体查询.md",
        ],
      },
      {
        title: "CSS进阶",
        collapsable: true,
        children: [
          {
            title: "技巧总结",
            collapsable: true,
            children: [
              "/02-CSS进阶/技巧总结-检测浏览器对CSS属性的支持.md",
              "/02-CSS进阶/技巧总结-幽灵空白节点.md",
            ],
          },
          {
            title: "专题总结",
            collapsable: true,
            children: [
              "/02-CSS进阶/专题总结-常用布局.md",
              "/02-CSS进阶/专题总结-回流重绘.md",
              "/02-CSS进阶/专题总结-兼容性问题.md",
              "/02-CSS进阶/专题总结-居中问题.md",
              "/02-CSS进阶/专题总结-移动端1px问题.md",
            ],
          },
        ],
      },
      {
        title: "CSS面试",
        collapsable: true,
        children: [
          "/03-CSS面试/布局.md",
          "/03-CSS面试/盒子.md",
          "/03-CSS面试/属性.md",
          "/03-CSS面试/性能.md",
          "/03-CSS面试/原理.md",       
        ],
      },
      {
        title: "CSSTrick",
        collapsable: true,
        children: [
          "/04-CSSTrick/滚动视差.md",
          "/04-CSSTrick/滚动条美化.md",
          "/04-CSSTrick/画个三角形.md",
          "/04-CSSTrick/CSS3美化form控件.md",
          "/04-CSSTrick/hover显示的搜索框.md",
             
        ],
      },
    ],

    // 搜索
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "最后更新",
  },

  // PWA 配置
  serviceWorker: true,
};
