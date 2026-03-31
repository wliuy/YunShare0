// Version: 1.8.4 - 其他页面搜索框右移60px + 首页偏移80px + 侧边栏180px & 外观汉化版
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "8972 | 资源站",
  titleTemplate: ":title | 8972 资源站",
  description: "8972资源站：专业分享 4K 高清影视网盘资源、在线影视 APP 及网站、手机 PC 常用软件、精品破解版软件、绿色装机工具、系统调教镜像及每日高清壁纸。",
  lang: 'zh-CN',
  cleanUrls: true,

  async transformPageData(pageData) {
    if (pageData.relativePath === 'index.md') {
      pageData.title = '8972 | 资源站'
      pageData.titleTemplate = false
      pageData.frontmatter.pageClass = 'is-home-page'
    }
  },

  head: [
    ['link', { rel: 'icon', href: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 dominant-baseline=%22central%22 text-anchor=%22middle%22 font-size=%2280%22>☁️</text></svg>' }],
    ['style', {}, `
      /* 🌟 核心：全站重置 */
      ::-webkit-scrollbar { display: none; }
      * { scrollbar-width: none; -ms-overflow-style: none; }

      /* 第一部分：导航栏 (搜索框平移逻辑优化) */
      @media (min-width: 960px) {
        /* 🌟 其他页面：往右移动 60px */
        .VPNavBarSearch {
          transform: translateX(75px) !important;
        }

        /* 🌟 首页：保持原有偏移 80px，并设置特定尺寸 */
        :root:has(.is-home-page) .VPNavBarSearch {
          position: relative !important;
          margin-left: 0 !important;
          transform: translateX(80px) !important; 
        }
        :root:has(.is-home-page) .VPNavBarSearch button {
          width: 320px !important; height: 44px !important; 
          border-radius: 22px !important; background-color: var(--vp-c-bg-soft) !important;
        }
      }

      :root:has(.is-home-page) .VPNavBarTitle { display: none !important; }
      :root:has(.is-home-page) .VPNavBar {
        border-bottom: 1px solid var(--vp-c-divider) !important;
        background-color: var(--vp-c-bg) !important; 
      }

      /* ============================================================
          第二部分：💻 桌面端排版 (严格还原 1.4.1)
         ============================================================ */
      @media (min-width: 960px) {
        :root:has(.is-home-page) .VPHero { padding-top: 12vh !important; padding-bottom: 4vh !important; }
        :root:has(.is-home-page) .VPHero .main .tagline {
          position: absolute !important; right: 40px !important; top: 50% !important;        
          transform: translateY(-50%) !important; text-align: right !important; 
          font-size: clamp(32px, 4vw, 46px) !important; font-weight: 900 !important; 
          line-height: 1.4 !important; display: block !important;
          background: linear-gradient(120deg, var(--vp-c-brand) 20%, #8e44ad 100%) !important;
          -webkit-background-clip: text !important; -webkit-text-fill-color: transparent !important;
        }
        :root:has(.is-home-page) .VPHero .tagline:not(.main .tagline) { display: none !important; }

        /* 桌面端空间清理与“站长说”对齐 */
        :root:has(.is-home-page) .VPHome, 
        :root:has(.is-home-page) .VPHomeContent { padding-bottom: 0 !important; min-height: auto !important; margin-bottom: 0 !important; }
        
        :root:has(.is-home-page) .custom-block.tip { 
          margin: 50px auto 60px auto !important; 
          max-width: 1152px !important; padding: 16px 20px !important;
        }
      }

      /* ============================================================
          第三部分：📱 手机端专项适配 (极致紧凑) 🌟
         ============================================================ */
      @media (max-width: 959px) {
        /* 1. 消除顶部间距 */
        :root:has(.is-home-page) .VPHome { padding-top: 0 !important; padding-bottom: 20px !important; min-height: auto !important; }
        :root:has(.is-home-page) .VPHero { padding: 0 16px !important; margin: 0 !important; }
        :root:has(.is-home-page) .VPHero .container { padding-top: 0 !important; }
        :root:has(.is-home-page) .VPHero .main { display: block !important; position: relative !important; text-align: left !important; padding-top: 8px !important; }

        /* 2. 左侧标题 & 右侧标语 */
        :root:has(.is-home-page) .VPHero .name { font-size: 26px !important; line-height: 1.1 !important; width: 65% !important; margin: 0 !important; }
        :root:has(.is-home-page) .VPHero .text { font-size: 18px !important; line-height: 1.1 !important; width: 65% !important; margin: 2px 0 0 0 !important; }
        :root:has(.is-home-page) .VPHero .tagline {
          position: absolute !important; top: 8px !important; right: 16px !important; width: 32% !important;
          font-size: 10px !important; line-height: 1.2 !important; text-align: right !important; margin: 0 !important;
          background: linear-gradient(120deg, var(--vp-c-brand) 20%, #8e44ad 100%) !important;
          -webkit-background-clip: text !important; -webkit-text-fill-color: transparent !important;
          display: block !important; opacity: 0.8;
        }

        /* 3. 横向按钮 & 2×2 卡片 */
        :root:has(.is-home-page) .VPHero .actions { display: flex !important; flex-direction: row !important; gap: 6px !important; padding-top: 10px !important; }
        :root:has(.is-home-page) .VPHero .actions .VPButton { font-size: 12px !important; padding: 0 12px !important; line-height: 28px !important; border-radius: 14px !important; }
        
        :root:has(.is-home-page) .VPFeatures { padding: 0 16px !important; }
        :root:has(.is-home-page) .VPFeatures .items { display: grid !important; grid-template-columns: repeat(2, 1fr) !important; gap: 8px !important; margin-top: 8px !important; }
        :root:has(.is-home-page) .VPFeature { padding: 10px !important; border-radius: 10px !important; }
        :root:has(.is-home-page) .VPFeature .box { align-items: center !important; }
        :root:has(.is-home-page) .VPFeature .icon { 
          background-color: transparent !important; width: 32px !important; height: 32px !important; 
          font-size: 24px !important; margin-bottom: 2px !important; display: flex !important; justify-content: center !important; 
        }
        :root:has(.is-home-page) .VPFeature .title { font-size: 14px !important; text-align: center !important; margin-bottom: 2px !important; }
        :root:has(.is-home-page) .VPFeature .details { font-size: 10px !important; line-height: 1.2 !important; text-align: center !important; padding: 0 !important; }

        /* 4. 内容区清理与“本站说明”移动 */
        :root:has(.is-home-page) .VPHomeContent, 
        :root:has(.is-home-page) .VPHomeContent .container,
        :root:has(.is-home-page) .vp-doc { padding: 0 !important; margin: 0 !important; max-width: 100% !important; padding-bottom: 0 !important; }
        
        :root:has(.is-home-page) .custom-block.tip { 
          margin: 25px 16px 30px 16px !important; 
          padding: 10px !important; width: auto !important; 
        }

        /* 5. 菜单栏宽度：180px */
        .VPSidebar { 
          width: 180px !important; 
          background-color: var(--vp-c-bg) !important;
          box-shadow: 10px 0 30px rgba(0,0,0,0.2) !important;
          z-index: 100 !important;
        }
        .VPBackdrop { z-index: 90 !important; }
      }

      /* 第四部分：通用规则 */
      .vp-doc .custom-block.tip p:last-child { margin-bottom: 0 !important; }
      @media (min-width: 960px) {
        .VPFeature .box { display: flex !important; flex-direction: column !important; align-items: center !important; }
        .VPFeature .details, .VPFeature .details p { text-align: center !important; width: 100% !important; }
      }
      .VPFeature { transition: all 0.3s ease !important; }
      .VPFeature:hover { transform: translateY(-2px); }
      .VPFooter { display: none !important; }
    `]
  ], 

  themeConfig: {
    logo: '☁️',
    siteTitle: '8972 资源站',
    outline: false, 
    docFooter: { prev: false, next: false }, 
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    darkModeSwitchLabel: '深色模式',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索资源...' }, 
          modal: {
            noResultsText: '无相关结果',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' }
          }
        }
      }
    },
    sidebar: [
      { text: '🎬 影视', items: [
        { text: '福利资源🔥', link: '/1-video/movie' },
        { text: '安卓APP💞', link: '/1-video/android-app' },
        { text: '电视APP', link: '/1-video/tv-app' },
        { text: '在线影院', link: '/1-video/web-sites' }
      ]},
      { text: '🎵 音乐', items: [
        { text: '安卓 Music', link: '/2-music/music-android' },
        { text: '电脑 Music', link: '/2-music/music-pc' }
      ]},
      { text: '📱 手机 APP', items: [
        { text: '常用软件💫', link: '/3-mobile/changyong-app' },
        { text: 'Root 相关', link: '/3-mobile/root' }
      ]},
      { text: '💻 电脑软件', items: [
        { text: '系统盘镜像', link: '/4-pc/os-disk' },
        { text: '装机软件', link: '/4-pc/install' }
      ]},

      { text: '📦 其他', items: [
        { text: '每日壁纸🖼️', link: '/bizhi' },
        { text: '友情链接🤝', link: '/5-other/others' }
      ]}
    ]
  }
})