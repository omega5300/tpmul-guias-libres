const { description } = require('../../package')

module.exports = {
  lang: 'es',
  title: 'TPMUL guias',
  description,
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'Buscar en la guia',
          },
        },
      },
    ],
    '@vuepress/plugin-back-to-top'
  ],
  themeConfig: {
    navbar: [
      {
        text: 'diseño grafico',
        children: [
          '/guias-fotografia/', 
          '/guias-ilustracion/'
        ]
      },
      {
        text: 'audiovisual',
        children: [
          '/guias-animacion/', 
          '/guias-audiovisual/'
        ]
      },
      {
        text: 'desarrollo web',
        children: [
          '/guias-html/', 
          '/guias-css/', 
          '/guias-javascript/', 
          '/guias-svg/', 
          '/guias-webcomponets/'
        ]
      },
      {
        text: 'documentacion y repo',
        children: [
          {
            text: 'VuePress',
            link: 'https://v2.vuepress.vuejs.org'
          },
          {
            text: 'MDN',
            link: 'https://developer.mozilla.org/en-US/'
          },
          {
            text: 'repo',
            link: 'https://github.com/omega5300/tpmul-guias-libres'
          }
        ]
      }
    ],
    sidebar: {
      '/guias-html/': [
        {
          title: 'HTML',
          collapsable: true,
          children: [
            'README.md',
            'example-html.md',
            'errores-comunes.md',
            'elmentos-principales.md',
            'elementos-esenciales.md',
            'elementos-de-info.md',
            'elementos-de-texto.md',
            'elementos-multimedia.md',
            'elementos-especiales.md',
            'elementos-de-listas.md',
            'elementos-de-tablas.md',
            'elementos-de-formularios.md',
            'elementos-scripting.md',
            'elementos-encabezado.md',
            'elementos-webcomponents.md'
          ]
        }
      ],
    }
  },
}
