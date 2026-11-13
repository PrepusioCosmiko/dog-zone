# Dog Zone: La Plaga — prototipo v0.2

Juego web mobile (PWA) en español (voseo). Criás perros inmunes en un asentamiento post-apocalíptico, los mandás de misión y combates infectados en la zona de la plaga.

Prototipo **Fase 0 / v0.2**. No está publicado. No hay compras ni anuncios. Los números de economía son valores de prueba, no el balance final.

## Cómo jugarlo

- Abrí `index.html` con un servidor local (no sirve `file://` por los módulos).
- Versión lista para copiar a un teléfono o host estático: `dist/web/`.
- Un solo archivo, para mandar o abrir más fácil: `dist/DogZone.html`.
- En el teléfono: se juega **de costado**. Si el giro automático está bloqueado, el juego se rota solo (landscape forzado) y te pide que acuestes el teléfono hacia la izquierda. En el menú está “Jugar en vertical”.
- Joystick abajo a la izquierda, Atacar abajo a la derecha, botón **Pantalla completa**. WASD en la compu. En el menú (etiqueta **v0.2**) está el interruptor **Invertir arriba/abajo**, que se guarda en el teléfono.
- En algunos navegadores (sobre todo iOS Safari) no se puede usar `orientation.lock`: el landscape forzado (CSS rotate 90°) cubre ese caso. El candado nativo se intenta igual en PWA o pantalla completa.
- Teclas: WASD o flechas para mover, Shift para correr, E para la acción del contexto, Espacio para atacar, rueda para zoom.

Guardado: solo en este aparato (`localStorage`, clave `dogzone_save_v1`). Una partida de v0.1 (Latas/Chapitas) se migra a Dogs/PDogs sin perder progreso.

## Qué hay en este prototipo

- Aldea isométrica caminable (criadero, comedero, tienda de Doña Rosa, Capitán Iriarte, veterinario Don Eliseo, alambrado, salida a la ruta).
- Modelos 3D de Pastor alemán, Husky, Pug, lobo, zombi e NPCs (Quaternius, CC0), con el perro/lobo original como respaldo.
- Zona infectada; el perro pelea y vos ayudás con ¡Atacar!.
- Misiones con temporizador que pagan **Dogs**. El Basural y “Limpiá la zona” tienen tope o enfriamiento diario.
- Tienda con precios ajustados. **PDogs**: solo cosmética (la tienda cosmética sigue como “Próximamente”). No se venden ni se piden datos de pago.
- Cría y cruces: el cachorro hereda el color de un padre y las manchas del otro, libro de linajes, no se puede cruzar padres, hijos ni hermanos, y no se puede pagar ni acelerar la espera con PDogs.
- Ciclo de vida: los perros envejecen y se retiran con una medalla de recuerdo (nada gráfico). El criadero tiene un tope de población.
- Tutorial con flechas (coordenadas del landscape forzado) que no queda tapado por “Girá el teléfono”.
- 31 razas reales documentadas en `data/breeds.json` y `data/breeds.csv`.

## Razas y fuentes

Los datos de **origen, uso, tamaño, peso y esperanza de vida** salen de las fichas de la **FCI** y, cuando hay, de las páginas de raza del **AKC**. No se inventó ningún número: si una ficha no trae un dato, en el JSON queda `null`.

Las stats de juego (`fuerza`, `velocidad`, `resistencia`, `olfato`, `lealtad`), el nivel (`fuerte` / `medio` / `débil`) y el precio en Dogs son **diseño de juego**, no datos reales. Cada ficha lo aclara.

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
| Pastor alemán, Pug, NPCs (Matt, Lis, Shaun) y Zombie_Basic | Quaternius, pack **Zombie Apocalypse Kit** (2024), archivos oficiales | **CC0 1.0** (`assets/licenses/zombie-apocalypse-kit-License.txt`) |
| Husky y lobo (Wolf) | Quaternius, pack **Ultimate Animated Animals** (2021), archivos oficiales | **CC0 1.0** (`assets/licenses/ultimate-animated-animals-License.txt`) |
| Perro y lobo de respaldo (“Animated Animales Low Poly”, Animal Pack Vol. 2) | Quaternius, vía [OpenGameArt](https://opengameart.org) | **CC0**. Convertidos de FBX a GLB con FBX2glTF v0.9.7. |
| Motor 3D | three.js r160 | MIT (`vendor/three/LICENSE`) |
| Fuentes Pixelify Sans y Fredoka | Google Fonts | SIL OFL 1.1 (`assets/fonts/OFL-*.txt`) |
| Íconos del HUD, aldea, consultorio y monstruos “decorados” | Hechos para este prototipo | — |

No hay un Chihuahua animado oficial en los packs usados: el modelo chico es el **Pug**.

Copia de las licencias: `assets/licenses/`.

## Monedas

- **Dogs**: moneda común (como la plata de Albion). Se ganan jugando (misiones, combates, historia). En el código interno la billetera se llama `dogCoins` porque `S.dogs` ya es la lista de perros. Las partidas viejas (`latas` / `chapitas`) se migran solas.
- **PDogs**: moneda valiosa (como el oro). Solo cosmética. No pagan comida, cría, vet, misiones ni mejoras. En v0.2 la tienda cosmética sigue como “Próximamente”. No se venden ni se piden datos de pago.

## Cómo se probó

`tests/play.mjs` abre el juego en un celular simulado con Playwright + Chromium (WebGL por SwiftShader), recorre tutorial, comida, diálogo, misión, tienda, bolso, zona y combate, y comprueba que al recargar se mantiene el guardado. `tests/touch.mjs` prueba que el joystick responde al tacto y que nada lo tapa. `tests/landscape.mjs` prueba el layout de costado (844×390 y 915×412) y el landscape forzado en vertical (390×844). `tests/joystick.mjs` comprueba que arriba/abajo/izquierda/derecha del joystick y WASD mueven al personaje en la dirección correcta de la pantalla, en landscape real, retrato, landscape forzado a 90° y a −90°, y con el interruptor Invertir arriba/abajo. `tests/joystick_math.mjs` cubre la matemática (coordenadas, ángulo del aparato, delta del knob). `tests/save_migration.mjs`, `tests/breeding.mjs` y `tests/economy.mjs` cubren la migración del save, los cruces y la economía. `tests/v02.mjs` cubre la etiqueta v0.2, la migración en el navegador y saca capturas landscape.

El FPS en SwiftShader (render por software) no representa un teléfono de verdad.

## Qué falta (conocido)

- La tienda de cosmética con PDogs sigue como placeholder: no hay un ítem comprable todavía.
- Los relojes de cría en este prototipo son de prueba (10 / 20 / 10 min). Los tiempos recomendados del diseño son 12 h / 48 h / 24 h.
- No hay un modelo oficial animado de Chihuahua; el pequeño es el Pug.
- Las misiones, al terminar el tiempo, reaparecen en la entrada de la ruta y caminan hasta vos (no simulan el trayecto fuera del mapa).
- Tiempos y precios: valores de prueba.
- No se testeó todavía en un teléfono físico.
- iOS Safari no permite `screen.orientation.lock`: se usa landscape forzado (el contenedor gira 90°) y se pide acostar el teléfono.
- No hay modo en línea ni ranking.

## No publicar

Este prototipo no se sube a GitHub ni a ningún host sin autorización expresa de Angel. Presupuesto: US$ 0.
