import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","",["/index.html","/README.md"]],
  ["v-90c34c9a","/guias-animacion/","animacion",["/guias-animacion/index.html","/guias-animacion/README.md"]],
  ["v-3e5c4b9c","/guias-audiovisual/","video",["/guias-audiovisual/index.html","/guias-audiovisual/README.md"]],
  ["v-4a679965","/guias-css/","CSS",["/guias-css/index.html","/guias-css/README.md"]],
  ["v-7e81e97b","/guias-css/animaciones.html","animaciones",["/guias-css/animaciones","/guias-css/animaciones.md"]],
  ["v-16e4d917","/guias-css/background-guide.html","background",["/guias-css/background-guide","/guias-css/background-guide.md"]],
  ["v-44298d37","/guias-css/box-model.html","box model",["/guias-css/box-model","/guias-css/box-model.md"]],
  ["v-2669c306","/guias-css/cascada-y-herencia.html","cascada y herencia",["/guias-css/cascada-y-herencia","/guias-css/cascada-y-herencia.md"]],
  ["v-685eb501","/guias-css/columns.html","sistema de columnas",["/guias-css/columns","/guias-css/columns.md"]],
  ["v-0646ced8","/guias-css/compatibilidad.html","compatibilidad con navegadores antiguos",["/guias-css/compatibilidad","/guias-css/compatibilidad.md"]],
  ["v-5d13ef26","/guias-css/errores-comunes.html","errores comunes",["/guias-css/errores-comunes","/guias-css/errores-comunes.md"]],
  ["v-e9ffbdc4","/guias-css/example-css.html","ejemplos de CSS",["/guias-css/example-css","/guias-css/example-css.md"]],
  ["v-d35b6a68","/guias-css/flexbox.html","flexbox",["/guias-css/flexbox","/guias-css/flexbox.md"]],
  ["v-45423734","/guias-css/flujo-normal.html","flujo normal",["/guias-css/flujo-normal","/guias-css/flujo-normal.md"]],
  ["v-08a8f98e","/guias-css/grid.html","grid",["/guias-css/grid","/guias-css/grid.md"]],
  ["v-948de9f8","/guias-css/listas.html","listas",["/guias-css/listas","/guias-css/listas.md"]],
  ["v-62ecdada","/guias-css/maquetacion-basica.html","maquetacion basica",["/guias-css/maquetacion-basica","/guias-css/maquetacion-basica.md"]],
  ["v-3102aaa1","/guias-css/media-queries.html","introducción a media queries",["/guias-css/media-queries","/guias-css/media-queries.md"]],
  ["v-037bb182","/guias-css/metodologias.html","metodologías CSS",["/guias-css/metodologias","/guias-css/metodologias.md"]],
  ["v-02245169","/guias-css/multimedia.html","elementos multimedia y formulario",["/guias-css/multimedia","/guias-css/multimedia.md"]],
  ["v-7300271c","/guias-css/prefijos-propietarios.html","prefijos propietarios",["/guias-css/prefijos-propietarios","/guias-css/prefijos-propietarios.md"]],
  ["v-c5164a26","/guias-css/pseudoclases.html","pseudoclases",["/guias-css/pseudoclases","/guias-css/pseudoclases.md"]],
  ["v-93dcbdc8","/guias-css/pseudoelementos.html","pseudoelementos",["/guias-css/pseudoelementos","/guias-css/pseudoelementos.md"]],
  ["v-2ae3a694","/guias-css/reglas-css.html","reglas de @",["/guias-css/reglas-css","/guias-css/reglas-css.md"]],
  ["v-38d43bd0","/guias-css/resets.html","resets",["/guias-css/resets","/guias-css/resets.md"]],
  ["v-9e510232","/guias-css/responsive-design.html","responsive design",["/guias-css/responsive-design","/guias-css/responsive-design.md"]],
  ["v-fe76f7b2","/guias-css/selectores.html","selectores de CSS",["/guias-css/selectores","/guias-css/selectores.md"]],
  ["v-ba035bea","/guias-css/tablas.html","tablas",["/guias-css/tablas","/guias-css/tablas.md"]],
  ["v-85fe0748","/guias-css/texto.html","propiedades de texto",["/guias-css/texto","/guias-css/texto.md"]],
  ["v-3ff763bc","/guias-css/valores-de-css.html","unidades de CSS",["/guias-css/valores-de-css","/guias-css/valores-de-css.md"]],
  ["v-c3abc16c","/guias-fotografia/","fotografía",["/guias-fotografia/index.html","/guias-fotografia/README.md"]],
  ["v-459a35aa","/guias-fotografia/ajustes-fotograficos.html","ajustes fotográficos",["/guias-fotografia/ajustes-fotograficos","/guias-fotografia/ajustes-fotograficos.md"]],
  ["v-a32ac4b0","/guias-fotografia/composicion.html","composición",["/guias-fotografia/composicion","/guias-fotografia/composicion.md"]],
  ["v-74bbe49d","/guias-fotografia/iluminacion.html","iluminación",["/guias-fotografia/iluminacion","/guias-fotografia/iluminacion.md"]],
  ["v-3e9eb05c","/guias-fotografia/tecnicas-fotografia.html","técnicas de fotografía",["/guias-fotografia/tecnicas-fotografia","/guias-fotografia/tecnicas-fotografia.md"]],
  ["v-201ff791","/guias-fotografia/tipos-de-disparo.html","tipos de disparo",["/guias-fotografia/tipos-de-disparo","/guias-fotografia/tipos-de-disparo.md"]],
  ["v-79a7bfb9","/guias-fotografia/tipos-de-fotografia.html","tipos de fotográfia",["/guias-fotografia/tipos-de-fotografia","/guias-fotografia/tipos-de-fotografia.md"]],
  ["v-3c117610","/guias-fotografia/tipos-de-planos.html","tipos de planos y ángulos",["/guias-fotografia/tipos-de-planos","/guias-fotografia/tipos-de-planos.md"]],
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
