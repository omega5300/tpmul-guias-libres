const { description } = require('../../package')

module.exports = {
  lang: 'es',
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
      ],
      '/guias-css/': [
        {
          title: 'CSS',
          collapsable: true,
          children: [
            'README.md',
            'example-css.md',
            'valores-de-css.md',
            'reglas-css.md',
            'cascada-y-herencia.md',
            'prefijos-propietarios.md',
            'selectores.md',
            'pseudoelementos.md',
            'pseudoclases.md',
            'box-model.md',
            'background-guide.md',
            'texto.md',
            'multimedia.md',
            'listas.md',
            'tablas.md',
            'animaciones.md',
            'media-queries.md',
            'flujo-normal.md',
            'responsive-design.md',
            'maquetacion-basica.md',
            'flexbox.md',
            'grid.md',
            'columns.md',
            'compatibilidad.md',
            'resets.md',
            'metodologias.md',
            'errores-comunes.md'
          ]
        }
      ],
      '/guias-javascript/': [
        {
          title: 'javascript',
          collapsable: true,
          children: [
            'README.md',
            'example.md',
            'variables.md',
            'funciones-y-window.md',
            'ciclos-y-condicionales.md',
            'console.md',
            'math-y-date.md',
            'misc.md',
            'object.md',
            'symbol.md',
            'arrays-methods.md',
            'string-methods.md',
            'number-methods.md',
            'json.md',
            'poo-js.md',
            'dom.md',
            'eventos.md',
            'ajax.md',
            'webapis.md',
            'errores-comunes.md'
          ]
        }
      ],
      '/guias-svg/': [
        {
          title: 'svg',
          collapsable: true,
          children: [
            'README.md',
            'elments.md'
          ]
        }
      ],
      '/guias-webcomponets/': [
        {
          title: 'svg',
          collapsable: true,
          children: [
            'README.md',
            'custom-elements.md',
            'shadow-dom.md',
            'templates-and-slots.md',
            'webcomponents-css.md'
          ]
        }
      ]
    },
  },
}
