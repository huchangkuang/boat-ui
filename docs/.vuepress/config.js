module.exports = {
  base: "/boat-ui-official-website/",
  title: 'boat-ui',
  description: '基于Vue开发好用的UI框架',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/install/' },
      { text: 'GitHub', link: 'https://github.com/huchangkuang/boat-ui' },
    ],
    sidebar: [
      {
        title: '入门',
        collapsable: false,
        children: ["/install/","/getStart/"]
      },
      {
        title: '组件',
        collapsable: false,
        children: ["/components/button","/components/input","/components/layout","/components/grid",
          "/components/popover","/components/tabs","/components/toast","/components/collapse" ]
      },
    ]
  }
}
