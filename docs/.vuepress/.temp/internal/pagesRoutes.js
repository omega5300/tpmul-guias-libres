import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","",["/index.html","/README.md"]],
  ["v-90c34c9a","/guias-animacion/","animacion",["/guias-animacion/index.html","/guias-animacion/README.md"]],
  ["v-3e5c4b9c","/guias-audiovisual/","video",["/guias-audiovisual/index.html","/guias-audiovisual/README.md"]],
  ["v-4a679965","/guias-css/","CSS",["/guias-css/index.html","/guias-css/README.md"]],
  ["v-c3abc16c","/guias-fotografia/","fotografia",["/guias-fotografia/index.html","/guias-fotografia/README.md"]],
  ["v-02d26e2b","/guias-html/","HTML",["/guias-html/index.html","/guias-html/README.md"]],
  ["v-aab83268","/guias-html/elementos-de-formularios.html","formularios",["/guias-html/elementos-de-formularios","/guias-html/elementos-de-formularios.md"]],
  ["v-14da9957","/guias-html/elementos-de-info.html","etiquetas de info",["/guias-html/elementos-de-info","/guias-html/elementos-de-info.md"]],
  ["v-697e9af5","/guias-html/elementos-de-listas.html","listas",["/guias-html/elementos-de-listas","/guias-html/elementos-de-listas.md"]],
  ["v-56c3e1fc","/guias-html/elementos-de-tablas.html","tablas",["/guias-html/elementos-de-tablas","/guias-html/elementos-de-tablas.md"]],
  ["v-dd7dab6a","/guias-html/elementos-de-texto.html","etiquetas de texto",["/guias-html/elementos-de-texto","/guias-html/elementos-de-texto.md"]],
  ["v-6989ea65","/guias-html/elementos-encabezado.html","encabezado y meta-datos",["/guias-html/elementos-encabezado","/guias-html/elementos-encabezado.md"]],
  ["v-9ca70e6a","/guias-html/elementos-esenciales.html","etiquetas esenciales",["/guias-html/elementos-esenciales","/guias-html/elementos-esenciales.md"]],
  ["v-a7e22002","/guias-html/elementos-especiales.html","etiquetas especiales en HTML",["/guias-html/elementos-especiales","/guias-html/elementos-especiales.md"]],
  ["v-0d6e67b6","/guias-html/elementos-multimedia.html","multimedia en HTML",["/guias-html/elementos-multimedia","/guias-html/elementos-multimedia.md"]],
  ["v-f909668c","/guias-html/elementos-scripting.html","elementos de scripting",["/guias-html/elementos-scripting","/guias-html/elementos-scripting.md"]],
  ["v-68d9f267","/guias-html/elementos-webcomponents.html","elementos de webcomponents",["/guias-html/elementos-webcomponents","/guias-html/elementos-webcomponents.md"]],
  ["v-a4920154","/guias-html/elmentos-principales.html","etiquetas principales",["/guias-html/elmentos-principales","/guias-html/elmentos-principales.md"]],
  ["v-cb06839a","/guias-html/errores-comunes.html","errores comunes del HTML",["/guias-html/errores-comunes","/guias-html/errores-comunes.md"]],
  ["v-0c5850a0","/guias-html/example-html.html","HTML ejemplos",["/guias-html/example-html","/guias-html/example-html.md"]],
  ["v-0b210c21","/guias-ilustracion/","guias ilustracion",["/guias-ilustracion/index.html","/guias-ilustracion/README.md"]],
  ["v-72144369","/guias-javascript/","javascript",["/guias-javascript/index.html","/guias-javascript/README.md"]],
  ["v-4a6ee924","/guias-svg/","SVG",["/guias-svg/index.html","/guias-svg/README.md"]],
  ["v-1e3c94d4","/guias-webcomponets/","web components",["/guias-webcomponets/index.html","/guias-webcomponets/README.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
