# Dog Zone: La Plaga — prototipo v0.1.2

Juego web mobile (PWA) en español (voseo). Criás perros inmunes en un asentamiento post-apocalíptico, los mandás de misión y combates infectados en la zona de la plaga.

Prototipo **Fase 0 / v0.1.2**. No está publicado. No hay compras ni anuncios. Los números de economía son valores de prueba, no el balance final.

## Cómo jugarlo

- Abrí `index.html` con un servidor local (no sirve `file://` por los módulos).
- Versión lista para copiar a un teléfono o host estático: `dist/web/`.
- Un solo archivo, para mandar o abrir más fácil: `dist/DogZone.html`.
- En el teléfono: se juega **de costado** (landscape). Si lo abrís en vertical, aparece “Girá el teléfono 📱↻” y la opción “Jugar igual en vertical”.
- Joystick abajo a la izquierda, Atacar abajo a la derecha, botón **Pantalla completa**. WASD en la compu.
- En algunos navegadores (sobre todo iOS Safari) no se puede forzar la rotación: hay que girar el teléfono a mano. El candado `orientation.lock` solo funciona en PWA o después de entrar a pantalla completa, y no en iOS.
- Teclas: WASD o flechas para mover, Shift para correr, E para la acción del contexto, Espacio para atacar, rueda para zoom.

Guardado: solo en este aparato (`localStorage`, clave `dogzone_save_v1`).

## Qué hay en este prototipo

- Aldea isométrica caminable (criadero, comedero, tienda de Doña Rosa, Capitán Iriarte, salida a la ruta).
- Un perro 3D con idle, caminar, correr (el clip de walk más rápido + rebote), comer, atacar, ladrar y saltar.
- Zona infectada con lobos que vagan y persiguen; el perro pelea y vos ayudás con ¡Atacar!.
- Misiones con temporizador que pagan Latas (fórmula del white paper, números de prueba).
- Tienda de razas baratas (≤ 80 Latas) y botiquines. Chapitas: cosmética, “Próximamente”.
- Tutorial con flechas, para chicos (6 y 15).
- 31 razas reales documentadas en `data/breeds.json` y `data/breeds.csv`.

## Razas y fuentes

Los datos de **origen, uso, tamaño, peso y esperanza de vida** salen de las fichas de la **FCI** y, cuando hay, de las páginas de raza del **AKC**. No se inventó ningún número: si una ficha no trae un dato, en el JSON queda `null`.

Las stats de juego (`fuerza`, `velocidad`, `resistencia`, `olfato`, `lealtad`), el nivel (`fuerte` / `medio` / `débil`) y el precio en Latas son **diseño de juego**, no datos reales. Cada ficha lo aclara.

El “pitbull” no está: ni FCI ni AKC lo reconocen como raza. En su lugar está el American Staffordshire Terrier (reconocido por ambos). El Mestizo es una raza solo del juego (el perro inicial, Toby).

Brechas (queda `null`, no se inventó):

- Sin esperanza de vida verificada: Jack Russell, Galgo español, Pastor del Cáucaso, Cimarrón uruguayo, Fila brasileiro.
- Galgo español: sin peso en la ficha usada.
- Teckel: la FCI mide el perímetro de pecho, no la alzada.
- Chihuahua: la FCI indica solo el peso.
- Akita: la página AKC es del tipo americano; su peso no se usó para el dato FCI.

El script que arma el dataset está en `tools/build_breeds.py`. Las fichas FCI (PDF) y el HTML de AKC que se consultaron quedaron en el entorno de investigación (`/tmp/breeds`, `/tmp/akc`), no van en el juego.

## Arte, motor y licencias (todo gratis)

| Qué | Quién | Licencia |
|---|---|---|
| Perro y lobo 3D (“Animated Animales Low Poly”, Animal Pack Vol. 2) | Quaternius, vía [OpenGameArt](https://opengameart.org) | **CC0** (dominio público). Convertidos de FBX a GLB con FBX2glTF v0.9.7. |
| Motor 3D | three.js r160 | MIT (`vendor/three/LICENSE`) |
| Fuentes Pixelify Sans y Fredoka | Google Fonts | SIL OFL 1.1 (`assets/fonts/OFL-*.txt`) |
| Íconos del HUD, aldea, humanos y monstruos “decorados” | Hechos para este prototipo | — |

El pack de Quaternius trae clips *Idle* y *Walking*. Correr es el walk más rápido, con un rebote. Comer, atacar, ladrar y saltar son animaciones de huesos hechas en el juego, encima del mixer.

Copia de la página de licencia: `assets/licenses/`.

## Monedas

- **Latas** (Dogs): moneda común, se ganan jugando (misiones, combates, misiones de historia).
- **Chapitas** (PDogs): premium, solo cosmética. En v0.1 la tienda de Chapitas está como “Próximamente”. No se venden ni se piden datos de pago.

## Cómo se probó

`tests/play.mjs` abre el juego en un celular simulado con Playwright + Chromium (WebGL por SwiftShader), recorre tutorial, comida, diálogo, misión, tienda, bolso, zona y combate, y comprueba que al recargar se mantiene el guardado. `tests/touch.mjs` prueba que el joystick responde al tacto y que nada lo tapa. `tests/landscape.mjs` prueba el layout de costado (844×390 y 915×412) y el overlay en vertical (390×844). Las capturas están en `screenshots/` (las de costado: `landscape-*.png`).

El FPS en SwiftShader (render por software) ronda 25–30; no representa un teléfono de verdad. En esta corrida: ~100 draw calls y ~36 mil triángulos.

## Qué falta (conocido)

- Cría y genética, todavía no.
- Muerte o retiro: solo se muestra la etapa (cachorro → joven → adulto → veterano → retirado); el retirado no sale de misión.
- Un solo modelo riggeado para todas las razas: cambia el color y un poco el tamaño.
- Correr / comer / atacar / ladrar / saltar son procedimentales, no clips del pack.
- Las misiones, al terminar el tiempo, reaparecen en la entrada de la ruta y caminan hasta vos (no simulan el trayecto fuera del mapa).
- Tienda de Chapitas: placeholder.
- Tiempos y precios: valores de prueba, más cortos que los del white paper, para poder probarlos.
- No se testeó todavía en un teléfono físico.
- iOS Safari no permite `screen.orientation.lock`: el juego pide girar el teléfono, pero no puede rotar la pantalla solo.
- No hay modo en línea ni ranking.

## No publicar

Este prototipo no se sube a GitHub ni a ningún host sin autorización expresa de Angel. Presupuesto: US$ 0.

White paper (v0.2): en el canvas del proyecto.
