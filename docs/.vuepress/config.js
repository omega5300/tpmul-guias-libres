const { description } = require('../../package')

module.exports = {
  lang: 'es-CO',
  title: 'TPMUL guias',
  description,
  head: [
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'keyword', content: 'tpmul,tpmul guias,produccion multimedia,tpmul omega5300' }],
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
      '@vuepress/pwa',
      {
        skipWaiting: true,
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
      '/guias-fotografia/': [
        {
          title: 'fotografia',
          collapsable: true,
          children: [
            'README.md',
            'tipos-de-disparo.md',
            'tipos-de-planos.md',
            'composicion.md',
            'ajustes-fotograficos.md',
            'iluminacion.md',
            'tecnicas-fotografia.md',
            'tipos-de-fotografia.md'
          ]
        }
      ] 
    }
},
}
