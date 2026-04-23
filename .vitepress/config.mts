// Version: 3.15.0 - 手机端全站搜索位绝对对齐 | 社交矩阵 Emoji 版 | 电脑端配置回归
import { defineConfig } from 'vitepress'

export default defineConfig({
  // 1. 彻底禁用深色模式功能
  appearance: false,

  // 🌟 [标题修正] 严格设置站点名称与标签页模板
  title: "8972 资源站",
  titleTemplate: "专注影视音乐绿色软件资源分享", 
  
  // 🌟 [SEO 优化] 极致描述
  description: "8972资源站(89729981.xyz)是一个提供全方位资源分享与绿色资源的免费平台。我们专注于安卓影视与苹果ios影视APP分享，提供极速秒播体验。同时涵盖高品质音乐软件、实用电脑软件下载及每日精选手机壁纸。所有免费资源经过人工实测，致力于打造最纯净的资源共享环境。",
  
  lang: 'zh-CN',
  cleanUrls: true,

  // 🌟 [SEO 优化] 开启自动 Sitemap 生成
  sitemap: {
    hostname: 'https://89729981.xyz',
    lastmodDateOnly: false
  },

  // 页面标识钩子：区分首页与子页
  async transformPageData(pageData) {
    if (pageData.relativePath === 'index.md') {
      pageData.frontmatter.pageClass = 'is-home-page'
    } else {
      pageData.frontmatter.pageClass = 'is-sub-page'
    }
  },

  head: [
    ['script', { defer: true, src: 'https://um.ayang.nyc.mn/script.js', 'data-website-id': '8a450346-99be-4090-bbf7-7dd74a7d428a' }],
    ['link', { rel: 'icon', href: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 dominant-baseline=%22central%22 text-anchor=%22middle%22 font-size=%2280%22>☁️</text></svg>' }],
    
    // 🌟 [SEO 优化] 核心 Meta 标签矩阵
    ['meta', { name: 'keywords', content: '8972资源站,资源分享,绿色资源,安卓影视,ios影视,苹果影视,音乐软件,电脑软件,手机壁纸,免费资源,89729981.xyz' }],
    ['meta', { name: 'author', content: '8972 资源站' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['link', { rel: 'canonical', href: 'https://89729981.xyz/' }],
    
    // 🌟 [SEO 优化] Open Graph (社交分享优化)
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: '8972 资源站 | 专注影视音乐绿色软件资源分享' }],
    ['meta', { property: 'og:description', content: '8972资源站提供安卓影视、ios影视、绿色资源及免费软件分享。' }],
    ['meta', { property: 'og:url', content: 'https://89729981.xyz/' }],
    ['meta', { property: 'og:site_name', content: '8972 资源站' }],

    ['style', {}, `
      /* 🌟 [1] 全站净化与基础重置 */
      ::-webkit-scrollbar { display: none; }
      * { scrollbar-width: none; -ms-overflow-style: none; }
      .VPNavBarAppearance, .VPNavBarHamburger { display: none !important; }
      
      /* 彻底粉碎返回顶部残留 */
      .VPReturnToTop, .VPLocalNav .top-link, .VPLocalNav .outline-link { 
        display: none !important; 
        width: 0 !important; 
        height: 0 !important; 
        overflow: hidden !important; 
      }

      /* 🌟 [2] 强力抹除页脚导航 */
      .VPDocFooter { display: none !important; visibility: hidden !important; }

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

      /* 🌟 [4] 手机端子页标题设计 */
      @media (max-width: 959px) {
        .is-sub-page .VPNavBarTitle .title::after {
          content: " 👈返回首页";
          display: inline-block;
          font-size: 11px;
          font-weight: normal;
          color: #e11d48;
          margin-left: 6px;
          vertical-align: middle;
        }
        @media (max-width: 380px) {
          .is-sub-page .VPNavBarTitle .title { font-size: 14px !important; }
        }
      }

      /* 🌟 [5] PC 端彻底隐藏子页返回提示 */
      @media (min-width: 960px) {
        .is-sub-page .VPNavBarTitle .title::after { display: none !important; }
      }

      /* 🌟 [6] 首页布局逻辑 (保持全屏居中) */
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

      /* 💻 电脑端布局（仅首页搜索框靠右，子页保持默认） */
      @media (min-width: 960px) {
        .VPNavBarMenu { display: none !important; }
        .is-home-page .VPNavBarSearch {
          flex-grow: 1 !important;
          display: flex !important;
          justify-content: flex-end !important;
        }
        .is-home-page .VPFeatures .items { gap: 24px !important; }
        .is-home-page .VPFeature .box {
          height: 90px !important;
          padding: 0 100px !important;
        }
        .is-home-page .VPFeature .title { font-size: 32px !important; }
      }

      /* 📱 手机端布局：首页与子页搜索位绝对一致 */
      @media (max-width: 959px) {
        /* 核心：确保手机端全站搜索图标都占据剩余空间并向右对齐，位置固定 */
        .VPNavBarSearch {
          flex-grow: 1 !important;
          display: flex !important;
          justify-content: flex-end !important;
          padding-right: 0px !important;
          order: 10 !important; /* 强制其排在最右侧 */
        }

        .is-home-page .VPFeature .box {
          height: 64px !important;
          padding: 0 50px !important;
        }
        .is-home-page .VPFeature .title { font-size: 20px !important; }

        /* 社交图标排在搜索左侧，不破坏搜索的最右定位 */
        .is-sub-page .VPNavBarSocialLinks {
          display: flex !important;
          order: 5 !important; /* 序号小于搜索框的 10，使其在左侧排列 */
          margin-right: 5px !important;
        }
        .is-sub-page .VPNavBarSocialLinks a {
          width: 32px !important;
        }
      }

      /* 🌟 [7] 社交链接显示控制 */
      .is-home-page .VPNavBarSocialLinks { display: none !important; }
      @media (min-width: 960px) {
        .is-sub-page .VPNavBarSocialLinks { 
          display: flex !important; 
          margin-right: 20px;
        }
      }

      .is-home-page .vp-doc, .is-home-page .VPFooter { display: none !important; }
    `]
  ],

  themeConfig: {
    logo: '☁️',
    siteTitle: '8972 资源站',
    outline: false,
    nav: [],
    sidebar: [
      {
        text: '🎬 影视分类',
        collapsed: false,
        items: [
          { text: '安卓影视 🔥', link: '/1-video/android-app' },
          { text: '苹果影视 💫', link: '/1-video/iPhone-app' },
          { text: '影视网站', link: '/1-video/web-sites' },
          { text: '电视APP', link: '/1-video/tv-app' },
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
        text: '🛸 其他资源',
        collapsed: false,
        items: [
          { text: '每日壁纸 🖼️', link: '/bizhi' },
          { text: '友情链接', link: '/5-other/others' }
        ]
      }
    ],

    // 🌟 [社交矩阵] 顺序：哔哩哔哩、小红书、抖音、YouTube
    socialLinks: [
      { 
        icon: { svg: '<svg viewBox="0 0 24 24"><text x="0" y="18" font-size="20">📺</text></svg>' }, 
        link: 'https://space.bilibili.com/161365760' 
      },
      { 
        icon: { svg: '<svg viewBox="0 0 24 24"><text x="0" y="18" font-size="20">📕</text></svg>' }, 
        link: 'https://www.xiaohongshu.com/user/profile/691d31df000000003202b636' 
      },
      { 
        icon: { svg: '<svg viewBox="0 0 24 24"><text x="0" y="18" font-size="20">🎵</text></svg>' }, 
        link: 'https://v.douyin.com/zbT67CNeNW0/' 
      },
      { 
        icon: { svg: '<svg viewBox="0 0 24 24"><text x="0" y="18" font-size="20">▶️</text></svg>' }, 
        link: 'https://www.youtube.com/@AooHu' 
      }
    ],

    sidebarMenuLabel: '目录',
    returnToTopLabel: '返回顶部',
    docFooter: false, 

    search: {
      provider: 'local',
      options: {
        miniSearch: {
          options: {
            tokenize: (str) => str.split(/[\s,.-]+|(?<=[\u4e00-\u9fa5])|(?=[\u4e00-\u9fa5])/).filter(Boolean)
          },
          searchOptions: {
            fuzzy: 0.2, 
            prefix: true,
            boost: { title: 4, text: 2, titles: 1 } 
          }
        },
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