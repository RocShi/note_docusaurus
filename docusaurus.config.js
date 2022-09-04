// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Note',
    tagline: '写笔记与灵感的地方',
    url: 'https://your_website.com',
    baseUrl: '/',
    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    trailingSlash: false,

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'zh-Hans',
        locales: ['zh-Hans'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    sidebarCollapsible: true,
                    routeBasePath: "/",
                    remarkPlugins: [math],
                    rehypePlugins: [katex]
                },
                blog: false,
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                }
            }),
        ],
    ],

    stylesheets: [
        {
            href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
            type: 'text/css',
            integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
            crossorigin: 'anonymous',
        },
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'Note',
                logo: {
                    alt: '写笔记与灵感的地方',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        href: "https://blog.shipengx.com",
                        position: "right",
                        label: "博客",
                    }
                ]
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme
            },
            docs: {
                sidebar: {
                    hideable: true,
                    autoCollapseCategories: true
                }
            },
            tableOfContents: {
                minHeadingLevel: 2,
                maxHeadingLevel: 2
            }
        }),

    themes: [
        // https://github.com/easyops-cn/docusaurus-search-local
        [
            require.resolve("@easyops-cn/docusaurus-search-local"),
            {
                hashed: true,
                indexBlog: false,
                language: ["en", "zh"],
                highlightSearchTermsOnTargetPage: true,
                docsRouteBasePath: "/" // Note: for docs-only mode, this needs to be the same as routeBasePath in your @docusaurus/preset-classic config e.g., "/".
            },
        ]
    ]
};

module.exports = config;
