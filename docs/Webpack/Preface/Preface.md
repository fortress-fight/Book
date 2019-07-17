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

-   在 webpack 里，一切资源都会被引入到入口 JS 文件中，然后通过各种插件将这些文件重新进行打包后输出；并且在打包前后对资源进行处理。

-   webpack 的主要的功能是处理前端模块化，随着插件的越来越多，webpack 也越来越适合处理前端自动化流程的实现。但是在个人看来，在自动化管理的方面 Gulp 或许是更好的选择；

## Webpack 与 Gulp

**Gulp** 基于文件流的处理方式，更加容易理解，使用也十分简单，配合 NodeJS 以及充足的 NPM 包，能够解决工作上许多的问题；不过在 Gulp 中也存在一些问题：

-   Gulp 中所有文件都是独立的个体，足够高的自由度也会带来不便，我们需要梳理出每一个 task 的工作方式；而 webpack 严格的控制了输入输出，这样所有的有效文件都必然会被 webpack 处理，我们所做的就是做好配置工具，然后把所有工作的步骤交给插件处理（这里就是一个黑盒）

**webpack** 在处理文件打包方面更具优势。在使用的过程中，所有的资源都要引入 JS 文件，然后再进行输出，这样我们就要面临两个问题：

-   **如何将资源引入到 JS 中**
-   **如何将资源按照自己的想法进行输出**

::: tip 是选择 Webpack 还是 Gulp ？

webpack 的目的主要还在于解决前端模块化的，而 Gulp 则是为前端自动化提供解决方案。Gulp 对于文件的处理是强于 webpack，而 webpack 对于资源的打包则是强于 Gulp。

-   需要对文件进行处理当然选择 Gulp
-   希望对资源进行打包当然是 webpack 更加方便；**也就是说将 Webpack 看作是整个自动化流程的中一部分是更为合理的行为**；

:::

## 推荐文档

1. [webpack 中文 -- 印记中文](https://webpack.docschina.org/)

## 总结

现在 Webpack 越来越流行了，了解使用 Webpack 当然是十分必要的；但是有些人希望通过 Webpack 完成所有的自动化流程，而忽略 webpack 的根本运作方式，也会使得工作变得十分困难的。希望大家都能够找到一个合适的平衡点来解决问题；

### 多说两句

webpack 是前端自动化打包工具，但是不能只看到这个就觉得可以简单上手，里面包含了很多很多的知识：NodeJS, ES6, CommonJS ... 以及能更好的指导你搭建流程的思想；切不可以为会使用了一两个 loader 就觉得对 webpack 已经了解了。**在解决问题的基础上，去思考如何更好的解决问题是一个永远不可停歇的事情。**

前端这条路其实已经很开阔了。对于某一个方面产生疑问是好事。但是如果苦苦追寻而不得结果，就不要深究，有些事情没有落到真实的问题上、没有足够的知识打底或者没有一定的理论支撑是很难理解的，而这些基础又不是能够一蹴而就。深究了反而会有挫败感，这样就得不偿失了。但是对于新事物又不可无好奇之心。

生命不息，探索不止。愿自己能够一直走下去
