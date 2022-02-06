const { description } = require('../../package')

module.exports = {
  lang: 'es-co',
  title: 'TPMUL guias',
  description,
  head: [
    ['link', { rel: 'canonical', href: 'href: https://tpmulguias.web.app' }],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'keyword', content: 'tpmul, tpmul guias, produccion multimedia, tpmul omega5300, produccion multimedia sena, tpmul sena' }],
    ['link', { rel: 'icon', href: '/icons/favicon.ico' }]
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
          '/guias-ilustracion/',
          '/guias-herramientas/',
          '/guias-3d/'
        ]
      },
      {
        text: 'audiovisual',
        children: [
          '/guias-audio/',
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
          '/guias-webcomponets/',
          '/guias-interpretes/',
          '/guias-php/',
          '/guias-node/',
          '/guias-python/',
          '/guias-plantillas/',
          '/guias-preprocesadores/',
          '/guias-transpiladores/',
          '/guias-framework-y-libreria/',
          '/guias-administradores/',
          '/guias-extas/',
        ]
      },
      {
        text: 'tpmul principal',
        children: ['/guias-fundamentos/', '/guias-videojuegos/']
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
          },
          {
            text: 'fundamentos diseño',
            link: 'https://edu.gcfglobal.org/es/conceptos-basicos-de-diseno-grafico/fundamentos-del-diseno/1/'
          },
          {
            text: 'nodejs',
            link: 'https://nodejs.org/en/docs/'
          },
          {
            text: 'php',
            link: 'https://php.net'
          },
          {
            text: 'python',
            link: 'https://docs.python.org/3/'
          },
          {
            text: 'gulp',
            link: 'https://gulpjs.com/docs/en/api/concepts'
          },
          {
            text: 'grunt',
            link: 'https://gruntjs.com/getting-started'
          },
          {
            text: 'webpack',
            link: 'https://webpack.js.org/concepts/'
          },
          {
            text: 'rollup',
            link: 'https://rollupjs.org/guide/en/'
          },
          {
            text: 'vite',
            link: 'https://vitejs.dev/guide/'
          },
          {
            text: 'c#',
            link: 'https://docs.microsoft.com/en-us/dotnet/csharp/'
          },
          {
            text: 'figma',
            link: 'https://help.figma.com/hc/en-us/categories/360002042553-Figma-design'
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
          title: 'web components',
          collapsable: true,
          children: [
            'README.md',
            'custom-elements.md',
            'shadow-dom.md',
            'templates-and-slots.md',
            'webcomponents-css.md'
          ]
        }
      ],
      '/guias-fundamentos/': [
        {
          title: 'fundamentos',
          collapsable: true,
          children: [
            'README.md',
            'algoritmos.md',
            'diseño.md',
            'proyectos.md',
            'red.md',
            'ui-ux.md',
            'terminal.md',
            'uml.md',
            'tipologias.md',
            'terminal.md',
            'navegadores.md',
            'licencias.md',
            'vcs.md'
          ]
        }
      ],
      '/guias-interpretes/': [
        {
          title: 'interprete',
          collapsable: true,
          children: [
            'README.md',
            'package-manger.md'
          ]
        }
      ],
      '/guias-node/': [
        {
          title: 'node',
          collapsable: true,
          children: [
            'README.md',
            'core-modules.md'
          ]
        }
      ],
      '/guias-php/': [
        {
          title: 'php',
          collapsable: true,
          children: [
            'README.md',
            'variables.md',
            'condicionales.md',
            'ciclos.md',
            'funciones.md',
            'clases.md',
            'misc.md'
          ]
        }
      ],
      '/guias-python/': [
        {
          title: 'python',
          collapsable: true,
          children: [
            'README.md',
            'variables.md',
            'condicionales.md',
            'ciclos.md',
            'funciones.md',
            'clases.md',
            'misc.md'
          ]
        }
      ],
      '/guias-plantillas/': [
        {
          title: 'motores-de-plantillas',
          collapsable: true,
          children: [
            'README.md',
            'example.md',
            'variables.md',
            'ciclos-y-condicionales.md',
            'layouts.md'
          ]
        }
      ],
      '/guias-preprocesadores/': [
        {
          title: 'preprocesadores',
          collapsable: true,
          children: [
            'README.md',
            'example.md',
            'variables.md',
            'nesting.md',
            'mixins.md',
            'partials.md',
            'placeholders.md'
          ]
        }
      ],
      '/guias-transpiladores/': [
        {
          title: 'transpiladores',
          collapsable: true,
          children: [
            'README.md',
            'babel.md',
            'typescript.md',
          ]
        }
      ],
      '/guias-framework-y-libreria/': [
        {
          title: 'frameworks-y-librerias',
          collapsable: true,
          children: [
            'README.md',
            'libreria.md',
            'framework.md',
            'diferencias.md',
          ]
        }
      ],
      '/guias-administradores/': [
        {
          title: 'administadores',
          collapsable: true,
          children: [
            'README.md',
            'administador-tareas.md',
            'empaquetadores.md',
          ]
        }
      ],
      '/guias-videojuegos/': [
        {
          title: 'videojuegos',
          collapsable: true,
          children: [
            'README.md',
            'c-sharp.md',
          ]
        }
      ],
      '/guias-herramientas/': [
        {
          title: 'herramientas',
          collapsable: true,
          children: [
            'README.md',
            'photoshop.md',
            'ilustrator.md',
            'figma.md'
          ]
        }
      ],
      '/guias-extas/': [
        {
          title: 'extras',
          collapsable: true,
          children: [
            'README.md',
            'renders-web.md', 
            'cms.md',
            'directorio-tecnologias.md'
          ]
        }
      ],
    },
  },
}
