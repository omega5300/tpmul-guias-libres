<template><h1 id="web-components" tabindex="-1"><a class="header-anchor" href="#web-components" aria-hidden="true">#</a> web components</h1>
<p>los web components son una nueva forma de crear elementos reutilizables de forma nativa sin la necesidad de usar framework como react, angular, vue y svelte.</p>
<p>también es un conjunto de diferentes tecnologías que le permite crear elementos personalizados reutilizables, con su funcionalidad encapsulada del resto de su código, y utilizarlos en sus aplicaciones web.</p>
<p>las ventajas que podemos usar son:</p>
<ul>
<li>elementos personalizados</li>
<li>shadow DOM</li>
<li>plantillas HTML</li>
</ul>
<h2 id="requisitos" tabindex="-1"><a class="header-anchor" href="#requisitos" aria-hidden="true">#</a> requisitos</h2>
<p>para usar los web components se debe aprender ciertos aspectos del desarrollo web:</p>
<ul>
<li>profundidad en HTML semantico</li>
<li>CSS mordeno</li>
<li>manejo de DOM</li>
<li>conocer lo esencial de ES6:
<ul>
<li>let</li>
<li>const</li>
<li>class</li>
</ul>
</li>
<li>conocer el uso de this y programacción orientado a objetos</li>
</ul>
<h2 id="ciclo-de-vida" tabindex="-1"><a class="header-anchor" href="#ciclo-de-vida" aria-hidden="true">#</a> ciclo de vida</h2>
<p>Son funciones especiales de devolución de llamada definidas dentro de la definición de clase del elemento personalizado, que afectan su comportamiento:</p>
<ul>
<li>connectedCallback: Se invoca cuando el elemento personalizado se conecta por primera vez al DOM del documento.</li>
<li>disconnectedCallback: Se invoca cuando el elemento personalizado se desconecta del DOM del documento.</li>
<li>adoptedCallback: Se invoca cuando el elemento personalizado se mueve a un nuevo documento.</li>
<li>attributeChangedCallback: Se invoca cuando se agrega, elimina o cambia uno de los atributos del elemento personalizado.</li>
</ul>
</template>
