---
# YAML

# 禁用当前页面的顶部导航
# navbar: false

# 当前页面标签，默认为当前页面的 H1
# title: VuePress

# 语言
lang: zh-CN

# meta
meta:
    - name: description
      content: 记录学习中的点点滴滴
    - name: keywords
      content: 笔记，重构

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
pageClass: c-index_page

# 自定义页面布局
# 下面将会使用 .vuepress/components/SpecialLayout.vue。为当前页面渲染
# layout: Home

home: true
heroImage: /face.jpg
# actionText: 起步 →
# actionLink: /Introduction/
footer: Copyright © 2018-present
---

<sitebg bg="/face.jpg"/>
