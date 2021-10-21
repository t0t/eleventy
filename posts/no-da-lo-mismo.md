---
title: No da lo mismo que todo sea lo mismo
description: Notas acerca de la jerarquía tecnológica como orden sagrado
date: 2021-10-20
tags:
  - number 2
layout: layouts/post.html
---

![Proceso tecnológico](/img/blog/tecnologia.svg)

---

## Notas acerca de la jerarquía tecnológica como orden sagrado

---

Hace tiempo que quería reflexionar a cerca de esto: **todo es lo mismo pero parece diferente**.

Un ejemplo rotundo es la analogía entre el mundo del desarrollo web y la vida real. Ambos mundos son muy extensos, así que acotaremos el desarrollo web a las esferas que conozco más: `HTML`, `CSS` y `Javascript` básico.

Un sitio web como éste en el que estás ahora es un sistema de códigos interrelacionados entre sí. Cada elemento vive anidado en un contexto mayor que lo contiene. Eso es el DOM (Document Object Model).

Todos los elementos del DOM vienen predefinidos por defecto, en el navegador, por una serie de propiedades o cualidades que son las que luego el programador usa/modifica para generar apariencias y comportamientos.

> Al igual que tú, cada elemento es una división de la existencia con unas cualidades.



CSS

``` scss
// Define qué se ve cuando algo me toca, qué tamaño tengo,
// a cuanta distancia estoy del resto de elementos, etc
:root {
  --mi-color-de-piel: pink;
}

div {
  background-color: var(--mi-color-de-piel);
}
```

Javascript

``` javascript
// Escoge un elemento del DOM
let quiensoy = document.getelementById("yo")

// Realiza una acción
function miAccion() {
	Alert("me han dado una identidad")
}

// Muestra por consola
console.log('quien soy');
```

Html

``` html
<!-- Este es el vacío inmanente -->
<head>
  Este es el origen de la existencia de esta página.
  es inaccesible desde un contexto de nivel más bajo.
</head>
<main>
  <div>
    Lo que hay aquí es lo que soy "yo"
  </div>

  <div>
    Este eres tú
  </div>
</main>
<footer>
  Esta es la realidad, el plano 1
</footer>
```
