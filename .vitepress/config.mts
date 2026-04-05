// Version: 3.10.13 - 优化电脑端首页搜索框位置 | 锁定 170px 侧边栏 | 物理粉碎页脚导航
import { defineConfig } from 'vitepress'

export default defineConfig({
  // 1. 彻底禁用深色模式功能
  appearance: false,

  // 2. 标题优化
  title: "8972 资源站",
  titleTemplate: ":title | 影视音乐资源分享",
  description: "8972资源站：专业分享影视、音乐、电脑软件及每日壁纸。",
  lang: 'zh-CN',
  cleanUrls: true,

  // 页面标识钩子：区分首页与子页
  async transformPageData(pageData) {
    if (pageData.relativePath === 'index.md') {
      pageData.frontmatter.pageClass = 'is-home-page'
    } else {
      // 为非首页添加子页标识类，以便 CSS 精准控制返回提示
      pageData.frontmatter.pageClass = 'is-sub-page'
    }
  },

  head: [
    ['script', { defer: true, src: 'https://um.ayang.nyc.mn/script.js', 'data-website-id': '8a450346-99be-4090-bbf7-7dd74a7d428a' }],
    ['link', { rel: 'icon', href: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 dominant-baseline=%22central%22 text-anchor=%22middle%22 font-size=%2280%22>☁️</text></svg>' }],

    ['style', {}, `
      /* 🌟 [1] 全站净化与基础重置 */
      ::-webkit-scrollbar { display: none; }
      * { scrollbar-width: none; -ms-overflow-style: none; }
      .VPNavBarAppearance, .VPNavBarHamburger { display: none !important; }
      
      /* 彻底粉碎所有返回顶部残留（悬浮球与 LocalNav 链接） */
      .VPReturnToTop, .VPLocalNav .top-link, .VPLocalNav .outline-link { 
        display: none !important; 
        width: 0 !important; 
        height: 0 !important; 
        overflow: hidden !important; 
      }

      /* 🌟 [2] 强力抹除文档页脚（上一页/下一页导航条） */
      .VPDocFooter { 
        display: none !important; 
        visibility: hidden !important;
      }

      /* 🌟 [3] 手机端侧边栏宽度强行锁定 (170px 窄版) */
      @media (max-width: 959px) {
        .VPSidebar {
          width: 170px !important;
          max-width: 170px !important;
          transform: translateX(-170px);
        }
        .VPSidebar.open {
          transform: translateX(0) !important;
        }
      }

      /* 🌟 [4] 手机端子页标题设计：直接显示返回引导文字 */
      @media (max-width: 959px) {
        .is-sub-page .VPNavBarTitle .title::after {
          content: " 👈返回首页";
          display: inline-block;
          font-size: 11px;
          font-weight: normal;
          color: #e11d48; /* 主题红色，引导感强 */
          margin-left: 6px;
          vertical-align: middle;
        }
        
        /* 适配极窄屏幕，防止标题被挤乱 */
        @media (max-width: 380px) {
          .is-sub-page .VPNavBarTitle .title { font-size: 14px !important; }
          .is-sub-page .VPNavBarTitle .title::after { font-size: 10px; margin-left: 4px; }
        }
      }

      /* 🌟 [5] PC 端彻底隐藏子页返回提示 */
      @media (min-width: 960px) {
        .is-sub-page .VPNavBarTitle .title::after { display: none !important; }
      }

      /* 🌟 [6] 首页全屏布局逻辑（保持不变） */
      .is-home-page .VPHome {
        margin: 0 !important;
        padding: 0 !important;
        width: 100vw !important;
        min-height: calc(100vh - var(--vp-nav-height)) !important;
        display: flex !important;
        flex-direction: column !important;
        justify-content: center !important;
        align-items: center !important;
      }
      .is-home-page .VPHero { display: none !important; }

      .is-home-page .VPFeatures,
      .is-home-page .VPFeatures .container {
        width: auto !important;
        max-width: none !important;
        margin: 0 auto !important;
        padding: 0 !important;
      }

      .is-home-page .VPFeatures .items {
        display: inline-flex !important;
        flex-direction: column !important;
        align-items: stretch !important;
        grid-template-columns: none !important;
        width: auto !important;
        margin: 0 auto !important;
        gap: 14px !important;
      }

      .is-home-page .VPFeature {
        width: 100% !important;
        min-width: max-content !important;
        border: 1px solid var(--vp-c-divider) !important;
        background-color: var(--vp-c-bg-soft) !important;
        border-radius: 16px !important;
        display: flex !important;
        transition: all 0.25s ease !important;
      }

      .is-home-page .VPFeature .box {
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        width: 100% !important;
        white-space: nowrap !important;
      }
      .is-home-page .VPFeature .title { font-weight: 800 !important; }
      .is-home-page .VPFeature .icon, .is-home-page .VPFeature .details { display: none !important; }

      /* 💻 电脑端适配：比例锁定与搜索框右对齐 */
      @media (min-width: 960px) {
        .VPNavBarMenu { display: none !important; }
        
        /* 首页搜索框放置于右侧对应位置 */
        .is-home-page .VPNavBarSearch {
          flex-grow: 1 !important;
          display: flex !important;
          justify-content: flex-end !important;
        }
        
        .is-home-page .VPNavBarSearch button { width: auto !important; height: 32px !important; }

        .is-home-page .VPFeatures .items { gap: 24px !important; }
        .is-home-page .VPFeature { border-radius: 24px !important; }
        .is-home-page .VPFeature .box {
          height: 90px !important;
          padding: 0 100px !important;
        }
        .is-home-page .VPFeature .title { font-size: 32px !important; }
        
        .is-home-page .VPFeature:hover {
          transform: translateY(-4px) !important;
          border-color: var(--vp-c-brand) !important;
          box-shadow: 0 8px 24px rgba(0,0,0,0.08) !important;
        }
      }

      /* 📱 手机端适配：呼吸感布局 */
      @media (max-width: 959px) {
        .is-home-page .VPFeature .box {
          height: 64px !important;
          padding: 0 50px !important;
        }
        .is-home-page .VPFeature .title { font-size: 20px !important; }

        .is-home-page .VPNavBarSearch {
          flex-grow: 1 !important;
          display: flex !important;
          justify-content: flex-end !important;
          padding-right: 15px !important;
        }
        .is-home-page .VPNavBarSearch button {
          background-color: var(--vp-c-bg-soft) !important;
          border: 1px solid var(--vp-c-divider) !important;
          border-radius: 20px !important;
          width: 150px !important;
          height: 36px !important;
          padding: 0 12px !important;
        }
        .is-home-page .VPNavBarSearch .DocSearch-Button-Container {
          display: flex !important;
          flex-direction: row-reverse !important;
          justify-content: space-between !important;
          width: 100% !important;
          margin: 0 !important;
        }
        .is-home-page .DocSearch-Button-Placeholder {
          display: inline-block !important;
          font-size: 13px !important;
          flex: 1 !important;
          text-align: left !important;
        }
        .is-home-page .DocSearch-Button-Keys { display: none !important; }
      }

      .is-home-page .vp-doc, .is-home-page .VPFooter { display: none !important; }
    `]
  ],

  themeConfig: {
    logo: '☁️',
    siteTitle: '8972 资源站',
    outline: false,

    // 🌟 顶部导航项
    nav: [],

    // 🌟 侧边栏：全局统一列表模式
    sidebar: [
      {
        text: '🎬 影视分类',
        collapsed: false,
        items: [
          { text: '安卓影视 🔥', link: '/1-video/android-app' },
          { text: '苹果影视 💫', link: '/1-video/iPhone-app' },
          { text: '影视网站', link: '/1-video/web-sites' },
          { text: '电视APP', link: '/1-video/tv-app' },
          { text: '影视资源 🎁', link: '/1-video/movie' }
        ]
      },
      {
        text: '🎵 音乐分类',
        collapsed: false,
        items: [
          { text: '安卓 Music', link: '/2-music/music-android' },
          { text: '电脑 Music', link: '/2-music/music-pc' }
        ]
      },
      {
        text: '📱 手机APP',
        collapsed: false,
        items: [
          { text: '常用软件', link: '/3-mobile/changyong-app' },
          { text: 'Root 相关', link: '/3-mobile/root' }
        ]
      },
      {
        text: '💻 电脑分类',
        collapsed: false,
        items: [
          { text: '装机软件', link: '/4-pc/install' },
          { text: '系统盘镜像', link: '/4-pc/os-disk' }
        ]
      },
      {
        text: '🖼️ 手机壁纸',
        collapsed: false,
        items: [
          { text: '每日壁纸 🖼️', link: '/bizhi' },
          { text: '友情链接', link: '/5-other/others' }
        ]
      }
    ],

    // 🌟 汉化与搜索
    sidebarMenuLabel: '目录',
    returnToTopLabel: '返回顶部',
    docFooter: false, // 彻底禁用文档页脚（上一页/下一页）
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索资源...' },
          modal: {
            noResultsText: '无法找到相关资源',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' }
          }
        }
      }
    }
  }
})