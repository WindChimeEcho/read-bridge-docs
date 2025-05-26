import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Read Bridge",
  description: "AI-enhanced reading tool for immersive language learning using the n+1 method. Learn languages by staying in the target language ecosystem, with a flow-state focused interface.",
  base: "",
  head: [
    ['link', { rel: 'icon', href: '/icon.ico' }]
  ],
  themeConfig: {
    logo: '/icon.ico',
    nav: [
      { text: '首页', link: '/' },
      { text: '简介', link: '/guide/introduction' },
      { text: '快速开始', link: '/guide/getting-started' }
    ],

    sidebar: [
      {
        text: '指南',
        items: [
          { text: '简介', link: '/guide/introduction' },
          { text: '快速开始', link: '/guide/getting-started' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/WindChimeEcho/read-bridge' }
    ],

    footer: {
      message: '基于 MIT 许可发布',
      copyright: 'Copyright © 2025 ReadBridge'
    }
  }
})
