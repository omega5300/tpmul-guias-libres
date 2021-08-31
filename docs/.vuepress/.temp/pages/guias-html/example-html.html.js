export const data = {
  "key": "v-0c5850a0",
  "path": "/guias-html/example-html.html",
  "title": "HTML ejemplos",
  "lang": "es",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "ejemplo con html5",
      "slug": "ejemplo-con-html5",
      "children": []
    },
    {
      "level": 2,
      "title": "ejemplo con html clasico",
      "slug": "ejemplo-con-html-clasico",
      "children": []
    }
  ],
  "filePathRelative": "guias-html/example-html.md",
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
