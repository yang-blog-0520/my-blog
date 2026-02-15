// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ChiaYang Blog',
  tagline: '紀錄與分享', 
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://chiayang.blog',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'yang-blog-0520', // Usually your GitHub org/user name.
  projectName: 'my-blog', // Usually your repo name.

  onBrokenLinks: 'throw',


  // 設定語系為繁體中文
  i18n: {
    defaultLocale: 'zh-Hant',
    locales: ['zh-Hant'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // 1. 關閉 Docs 功能 (純部落格模式)
        docs: false, 
        
        // 2. 設定 Blog
        blog: {
          routeBasePath: 'blog', // 部落格在 /blog 路徑
          showReadingTime: true,
          // 設定側邊欄顯示的文章數量，'ALL' 顯示全部，或設為數字 (例如 5)
          blogSidebarCount: 'ALL', 
          blogSidebarTitle: '所有文章',
          
          // 歸檔頁面設定
          archiveBasePath: 'archive',
          blogTitle: '歷史文章',
          blogDescription: '',  // 移除副標題，避免重複顯示
          
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // 移除這行如果你不想顯示 "編輯此頁"
          // editUrl: 'https://github.com/yang-blog-0520/my-blog/tree/main/',
          
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'ChiaYang Blog',
        logo: {
          alt: 'Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          // 左側導覽
          {to: '/blog', label: '文章', position: 'left'},
          {to: '/tags', label: '標籤', position: 'left'},
          {to: '/archive', label: '歷史文章', position: 'left'},
          
          // 右側導覽
          {
            href: 'https://github.com/yang-blog-0520',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: '站內連結',
            items: [
              { label: '首頁', to: '/' },
              { label: '文章', to: '/blog' },
              { label: '歷史文章', to: '/archive' },
              { label: '標籤', to: '/tags' },
            ],
          },
          {
            title: '社群',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/yang-blog-0520',
              },
              // 可以在這裡加 Facebook, Twitter 等
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ChiaYang Blog. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;