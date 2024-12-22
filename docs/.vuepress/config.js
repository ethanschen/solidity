import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Hello Solidity!',
  description: '一起快乐学习solidity吧～ 👏',

  base: '/solidity/',
  head: [
    ['link', { rel: 'shortcut icon', href: '/images/hero.png' }],
    ],

  theme: defaultTheme({
    navbar: [{
      text: '首页',
      link: '/'
    },{
      text: '关于',
      link: '/about.md'
    },{
      text: 'GitHub',
      link: 'https://github.com/ethanschen/solidity'
    }],
    sidebar: [
      'random-number.md',
      'payable.md',
      'withdrawal.md',
      'glossary.md'
    ]
  }),

  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
})