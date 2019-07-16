---
# YAML

# 禁用当前页面的顶部导航
# navbar: false

# 当前页面标签，默认为当前页面的 H1
title: "前言"

# 语言
lang: zh-CN

# meta
meta:
    - name: description
      content: "webpack"
    - name: keywords
      content: 笔记，自动化，webpack

# 最大值为2，用于覆盖 config.js 中的 sidebarDepth
# sidebarDepth: 2

# 首页没有侧边栏
# 生成仅包含当前页面的标题链接的侧边栏，设置为 false 表示禁止
# sidebar: auto

# 根据激活页面的侧边栏顺序自动推断上一个和下一个链接。你也可以使用 YAML front matter 来显式覆盖或禁用它们：
# prev: ./some-other-page
# next: false

# 隐藏指定页面上的编辑链接：
# editLink: false

# 自定义页面的 Class
pageClass: c-book_post-page

# 自定义页面布局
# 下面将会使用 .vuepress/components/SpecialLayout.vue。为当前页面渲染
# layout: Layout

# home: true
footer: Copyright © 2018-present
---

# 前言

---

::: tip Webpack

本质上，webpack 是一个现代 JavaScript 应用程序的**静态模块打包工具**。当 webpack 处理应用程序时，它会在内部构建一个 依赖图(dependency graph)，此依赖图会映射项目所需的每个模块，并生成一个或多个 bundle。

:::
