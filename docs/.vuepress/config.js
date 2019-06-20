module.exports = {
    // 网站的标题，同时会出现在页面的左上角导航旁边
    title: "重构 改善既有代码的设计2",
    /**
     * 根路径，在文件中引用静态资源的时候使用 `$witchBase('/foo.png')`
     * <img :src="$withBase('/foo.png')" alt="foo">
     * 会自动拼接到 config.js 文件中所有静态资源 URL 中
     */
    base: "/",
    // 网站的描述
    description:
        "重构，一言以蔽之，就是在不改变外部行为的前提下，有条不紊地改善代码",

    /**
     * 被注入页面 HTML <head> 额外的标签。
     * 每个标签可以用 [tagName, { attrName: attrValue }, innerHTML?] 的形式指定。
     * 例如，要添加自定义图标：['link', { rel: 'icon', href: '/logo.png' }]
     */
    head: [],
    /**
     * 指定此选项来设置默认的自定义主题。使用 "foo" 的值，
     * VuePress 将尝试在 node_modules/vuepress-theme-foo/Layout.vue 加载主题组件。
     */
    theme: undefined,
    configureWebpack: {
        resolve: {
            alias: {
                "@alias": "path/to/some/dir"
            }
        }
    },
    markdown: {
        // 代码是否带有行数的标识
        lineNumbers: true,
        // 目录渲染层级
        toc: { includeLevel: [2, 3] },
        config: md => {
            // 使用更多 [markdown-it](https://github.com/markdown-it/markdown-it) 插件！
            // md.use(require("markdown-it-xxx"));
        }
    },
    themeConfig: {
        // 顶部导航，如果需要禁用导航，需要设置 navbar: false
        nav: [
            /**
             * 如果需要使用多级导航，示例：
             * {
                    text: "Languages",
                    items: [
                        { text: "Chinese", link: "/language/chinese" },
                        { text: "Japanese", items: [
                            { text: "Home", link: "/" }
                        ] }
                    ]
                }
             */
            { text: "Home", link: "/" },
            /**
             * 如果 link 是一个目录，将会默认指向该目录下的 README.md
             */
            { text: "Introduction", link: "/Introduction/" }
        ],
        /**
         *  侧边栏
         * 如果希望自动生成仅包含当前页面的标题链接的侧边栏，可以设置 sidebar: auto.
         * 如果希望在某个页面上设置，还可以如下所示：
         * '/': {
            sidebar: 'auto'
            }
         * 设置为 false 表示禁止
         */
        sidebar: [
            "/",
            /**
             * 你可以省略 .md 扩展名，以 / 结尾的路径被推断为 *\/README.md 。
             * 该链接的文本是自动推断的（从页面的第一个标题或 YAML front matter 中的显式标题）。
             * 如果你希望明确指定链接文本，请使用 \[link,text] 形式的数组。
             * "/Introduction/"
             */

            /**
             * 侧边栏可以分组，形式如下
             */
            {
                title: "简介",
                collapsable: false,
                children: [
                    "/Introduction/",
                    "/Introduction/Feature",
                    "/Introduction/Theme",
                    "/Introduction/Markdown"
                ]
            },
            {
                title: "官方文档",
                collapsable: false,
                children: [
                    ["https://www.vuepress.cn/", "VuePress"],
                    [
                        "https://www.vuepress.cn/default-theme-config/",
                        "默认主题配置"
                    ],
                    [
                        "https://www.vuepress.cn/config/#%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE-basic-config",
                        "配置参考"
                    ]
                ]
            }
        ],

        /**
         * 我们还可以为页面单独定制侧边栏，示例如下
            sidebar: {
                '/foo/': [
                    '',      /foo/ 
                    'one',   /foo/one.html 
                    'two'    /foo/two.html 
                ],

                '/bar/': [
                    '',       /bar/ 
                    'three',  /bar/three.html 
                    'four'    /bar/four.html 
                ],

                // 回退(fallback)侧边栏配置
                '/': [
                    '',         / 
                    'contact',  /contact.html 
                    'about'     /about.html 
                ]
            }
         */

        // 侧边栏自动显示当前激活页面中标题的链接，嵌套在页面本身的链接下
        sidebarDepth: 2,
        /**
         * 默认情况下，侧边栏只会显示由当前活动页面的标题（headers）组成的链接，
         * 你可以将 themeConfig.displayAllHeaders 设置为 true 来显示所有页面的标题链接：
         */
        displayAllHeaders: false,
        /**
         * 默认情况下，当用户滚动页面，查看不同部分时，
         * 嵌套的标题链接和 URL 中的哈希值会随之更新，
         * 此行为可以通过以下的主题配置来禁用：
         */
        activeHeaderLinks: true,

        /**
         * 表示是否禁用搜索框
         * 如果你需要全文搜索，内置搜索只能从标题 h2 和 h3 标题构建索引，
         * 你可以使用 [Algolia](https://www.vuepress.cn/default-theme-config/#algolia-search) 搜索。
         *  algolia: {
                apiKey: '<API_KEY>',
                indexName: '<INDEX_NAME>'
            }
         */

        search: true,
        searchMaxSuggestions: 10,

        /**
         *  lastUpdated: 选项允许你获取每个文件的最后一次 git 提交的 UNIX 时间戳（ms），
         * 并且它也会以合适的格式显示在每个页面的底部
         * 请注意，它默认是关闭的，如果给定一个 string 类型的值，它将会作为前缀显示（默认值是：Last Updated）。
         */
        lastUpdated: "更新时间："

        /**
         *  假定 GitHub。也可以是一个完整的 GitLab URL。
            repo: "vuejs/vuepress",
            // 自定义项目仓库链接文字
            // 默认根据 `themeConfig.repo` 中的 URL 来自动匹配是 "GitHub"/"GitLab"/"Bitbucket" 中的哪个，如果不设置时是 "Source"。
            repoLabel: "贡献代码！",

            // 以下为可选的 "Edit this page" 链接选项

            // 如果你的文档和项目位于不同仓库：
            docsRepo: "vuejs/vuepress",
            // 如果你的文档不在仓库的根目录下：
            docsDir: "docs",
            // 如果你的文档在某个特定的分支（默认是 'master' 分支）：
            docsBranch: "master",
            // 默认为 false，设置为 true 来启用
            editLinks: true,
            // 自定义编辑链接的文本。默认是 "Edit this page"
            editLinkText: "帮助我们改进页面内容！"
        */
    }
};
