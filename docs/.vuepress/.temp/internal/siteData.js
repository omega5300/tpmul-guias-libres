export const siteData = {
  "base": "/",
  "lang": "es-CO",
  "title": "TPMUL guias",
  "description": "guias abiertas para el programa producción multimedia",
  "head": [
    [
      "link",
      {
        "rel": "manifest",
        "href": "/manifest.webmanifest"
      }
    ],
    [
      "meta",
      {
        "name": "theme-color",
        "content": "#3eaf7c"
      }
    ],
    [
      "meta",
      {
        "name": "keyword",
        "content": "tpmul,tpmul guias,produccion multimedia,tpmul omega5300"
      }
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
