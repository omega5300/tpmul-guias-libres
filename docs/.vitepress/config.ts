import { defineConfig } from 'vitepress'

// navbars
import graphic from './paths/graphic'
import audiovisual from './paths/audiovisual'
import web from './paths/web'
import main from './paths/main'
import sidebar from './paths/sidebar'
import docsRepo from './paths/docsRepo'

// sidebars


// https://vitepress.dev/reference/site-config
export default defineConfig({
  
  title: "Multimedia y web",
  description: "guias de formación creado y liderado por omega5300",
  lang: 'es-co',
  
  head: [
  	['link', { rel: 'canonical', href: 'href: https://tpmulguias.web.app' }],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'keyword', content: 'tpmul, tpmul guias, produccion multimedia, tpmul omega5300, produccion multimedia sena, tpmul sena' }],
  	['link', { rel: 'icon', href: '/icons/favicon.ico' }]
  ],
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      main, graphic, audiovisual, web, docsRepo,
    ],

    sidebar,
    cleanUrls: true,
    returnToTopLabel: 'Subir a superior',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/omega5300/tpmul-guias-libres' }
    ],

    footer: {
    	message: 'lanzado bajo la licencia CC-BY-NC-SA',
    	copyright: `Copyright © ${new Date().getFullYear()} omega5300 y comunidad`
    },

    lastUpdated: true,

    search: {
    	provider: 'local'
    }
  }
})
