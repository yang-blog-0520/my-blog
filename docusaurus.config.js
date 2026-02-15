// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '我的部落格', // 這裡改成你的網站標題
  tagline: '紀錄與分享', 
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://你的網域.com', // 例如 https://wiwi.blog
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: '你的GitHub帳號', // Usually your GitHub org/user name.
  projectName: '你的Repo名稱', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          routeBasePath: '/', // 重要：將部落格設為首頁
          showReadingTime: true,
          // 設定側邊欄顯示的文章數量，'ALL' 顯示全部，或設為數字 (例如 5)
          blogSidebarCount: 'ALL', 
          blogSidebarTitle: '所有文章',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // 移除這行如果你不想顯示 "編輯此頁"
          // editUrl: 'https://github.com/你的帳號/你的Repo/tree/main/',
          
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
        title: '我的部落格',
        logo: {
          alt: 'Site Logo',
          src: 'img/logo.svg', // 記得確認 static/img/ 資料夾下是否有此圖片
        },
        items: [
          // 左側導覽
          // 因為 routeBasePath: '/'，所以點擊 Logo 就會回首頁看文章，這裡可以放分類或標籤
          {to: '/tags', label: '標籤', position: 'left'},
          {to: '/archive', label: '歸檔', position: 'left'},
          
          // 右側導覽
          {
            href: 'https://github.com/你的GitHub帳號',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light', // 改成 light 可能比較像一般部落格風格，也可改回 dark
        links: [
          {
            title: '站內連結',
            items: [
              { label: '首頁', to: '/' },
              { label: '歸檔', to: '/archive' },
              { label: '標籤', to: '/tags' },
            ],
          },
          {
            title: '社群',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/你的GitHub帳號',
              },
              // 可以在這裡加 Facebook, Twitter 等
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Blog. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;