# empaquetadores de modulos

los empaquetadores de modulos o conocidos como module bundler es una herramienta que soluciona el problema con un paso de compilación (que tiene acceso al sistema de archivos) para crear un resultado final que sea compatible con el navegador (que no necesita acceso al sistema de archivos).

## rollup

Rollup es un empaquetador de módulos para JavaScript que compila pequeños fragmentos de código en algo más grande y complejo, como una biblioteca o aplicación. Utiliza el nuevo formato estandarizado para módulos de código incluidos en la revisión ES6 de JavaScript, en lugar de soluciones idiosincrásicas anteriores como CommonJS y AMD. Los módulos ES le permiten combinar libremente y sin problemas las funciones individuales más útiles de sus bibliotecas favoritas. Esto eventualmente será posible de forma nativa en todas partes, pero Rollup te permite hacerlo hoy.

``` js
// rollup.config.js (building more than one bundle)

export default [
  {
    input: 'main-a.js',
    output: {
      file: 'dist/bundle-a.js',
      format: 'cjs'
    }
  },
  {
    input: 'main-b.js',
    output: [
      {
        file: 'dist/bundle-b1.js',
        format: 'cjs'
      },
      {
        file: 'dist/bundle-b2.js',
        format: 'es'
      }
    ]
  }
];
```

## vite

Vite (palabra francesa para "rápido", pronunciada /vit/, como "veet") es una herramienta de construcción que tiene como objetivo proporcionar una experiencia de desarrollo más rápida y ágil para proyectos web modernos. Consta de dos partes principales:

Un servidor de desarrollo que ofrece numerosas mejoras en las funciones de los módulos ES nativos , por ejemplo, Reemplazo de módulo en caliente (HMR) extremadamente rápido .

Un comando de compilación que agrupa su código con Rollup , preconfigurado para generar activos estáticos altamente optimizados para producción.

Vite es obstinado y viene con valores predeterminados razonables listos para usar, pero también es altamente extensible a través de su API de complemento y API de JavaScript con soporte completo de escritura.

``` js
// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})
```
