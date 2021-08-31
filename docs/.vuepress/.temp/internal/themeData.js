export const themeData = {
  "navbar": [
    {
      "text": "diseño grafico",
      "children": [
        "/guias-fotografia/",
        "/guias-ilustracion/"
      ]
    },
    {
      "text": "audiovisual",
      "children": [
        "/guias-animacion/",
        "/guias-audiovisual/"
      ]
    },
    {
      "text": "desarrollo web",
      "children": [
        "/guias-html/",
        "/guias-css/",
        "/guias-javascript/",
        "/guias-svg/",
        "/guias-webcomponets/"
      ]
    },
    {
      "text": "documentacion y repo",
      "children": [
        {
          "text": "VuePress",
          "link": "https://v2.vuepress.vuejs.org"
        },
        {
          "text": "MDN",
          "link": "https://developer.mozilla.org/en-US/"
        },
        {
          "text": "repo",
          "link": "https://github.com/omega5300/tpmul-guias-libres"
        }
      ]
    }
  ],
  "sidebar": {
    "/guias-html/": [
      {
        "title": "HTML",
        "collapsable": true,
        "children": [
          "README.md",
          "example-html.md",
          "errores-comunes.md",
          "elmentos-principales.md",
          "elementos-esenciales.md",
          "elementos-de-info.md",
          "elementos-de-texto.md",
          "elementos-multimedia.md",
          "elementos-especiales.md",
          "elementos-de-listas.md",
          "elementos-de-tablas.md",
          "elementos-de-formularios.md",
          "elementos-scripting.md",
          "elementos-encabezado.md",
          "elementos-webcomponents.md"
        ]
      }
    ]
  },
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "logo": null,
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
