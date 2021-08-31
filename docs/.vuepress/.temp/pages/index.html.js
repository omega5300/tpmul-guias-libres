export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "es",
  "frontmatter": {
    "home": true,
    "heroImage": "/tpmul-logo.svg",
    "tagline": null,
    "actions": [
      {
        "text": "Inicio de la guia →",
        "link": "/guias-fotografia/"
      }
    ],
    "features": [
      {
        "title": "guias de desarrollo web",
        "details": "las guias para desarrollo web son lideras por omega5300"
      },
      {
        "title": "guias de diseño grafico",
        "details": "las guias para desarrollo web son creadas por ?"
      },
      {
        "title": "guias audiovisual",
        "details": "las guias para desarrollo web son creadas por ?"
      }
    ],
    "footer": "guias formativas bajo licencia CC-BY-NC-SA"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "README.md",
  "git": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
