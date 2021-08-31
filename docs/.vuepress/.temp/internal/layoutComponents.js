import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/home/julio-linux/Documentos/tpmul-guias/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("/home/julio-linux/Documentos/tpmul-guias/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
