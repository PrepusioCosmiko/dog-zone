# Formatitos 3D (renders de ficha) — v0.4

Fecha: 13 de noviembre de 2026, hora de Argentina (America/Buenos_Aires, UTC-3).
Estos PNG **reemplazan el SVG «Sin foto»** de la v0.3.2 en tienda, bolso, linaje y camada. Se ven el mismo formatito 3D que en la aldea, no una foto de raza.

Generados en este box con **three.js r160** (el mismo motor del juego) y Playwright + Chromium + SwiftShader, a partir de los glTF Quaternius CC0 ya bajados. No se usó Blender. No se tocó el código del juego.

Pipeline reproducible (herramienta interna, no es código del juego): `pipeline/render.html` + `pipeline/capture.mjs`.

## Archivos

Para cada silueta base (`pastor`, `husky`, `pug`, `shiba`, `wolf`) hay 3 variantes, cada una en 3 tamaños:

| Variante | Carpeta | Qué es |
|---|---|---|
| Adulto | `adulto/` | Escala 1. Pose Idle a 0,18 s. |
| Cachorro | `cachorro/` | Escala del root **0,62**. Hueso `Head` × **1,32**, `Neck1` × **1,08**. Cámara a distancia de adulto, para que el cachorro se vea más chico en la ficha, con la cabeza un poco más grande. |
| Legendaria | `legendario/` | Escala **1,12**. Luz puntual cálida. Motas naranjas suaves alrededor (sin gore, sin perro incendiado, apto para una nena de 6). Un «shell» de silueta se intentó en el pipeline; en estos PNG manda el brillo cálido + las motas. |

Tamaños:

- `{modelo}.png` — **256×256**, el de la ficha.
- `{modelo}_128.png` — miniatura.
- `{modelo}_512.png` — fuente, por si Programación quiere volver a bajar.

Fondo **transparente** (RGBA), para apoyar el formatito sobre cualquier color de carta. En runtime, el pelaje y las manchas reales del perro (color de un padre, manchas del otro) se aplican al mesh, no a este PNG fijo. Estos renders usan los **materiales originales** del pack, como se ven en la aldea.

## Parámetros para que Programación los replique en runtime

Valores tomados de `pipeline/render.html`:

```
renderer: WebGLRenderer, antialias on, alpha on, pixelRatio 1, outputColorSpace SRGB
clearColor: 0x000000, alpha 0   // transparente

cámara: PerspectiveCamera, fov 28, aspect 1, near 0,05, far 80
focus: centro de la caja, Y = min.y + size.y * 0,62
posición: (
  center.x + dist * 0,72 * distMul,
  focus.y  + size.y * 0,28 * distMul,
  center.z + dist * k * distMul
)
dist = max(size.x, size.y, size.z)
k = 2,25 si es Legendario, si no 2,05
distMul = 1/0,62 si es cachorro (para no reencuadrar y que se vea chico), si no 1
lookAt(focus)   // 3/4 de frente, un poco desde arriba

luces (aldea, cálidas):
  HemisphereLight  color 0xffe6c8,  ground 0x3a2a38,  intensity 1,15
  DirectionalLight «sol»   0xffd2a0  intensity 2,05  posición (2,8, 4,2, 3,2)
  DirectionalLight «fill»  0xb8d0ff  intensity 0,55  posición (-3,0, 1,6, -1,2)
  DirectionalLight «rim»   0xfff0d8  intensity 0,70  posición (-1,2, 3,5, 4,0)

pose: clip cuyo nombre es exactamente "Idle" (si no, el primer Idle, si no el primero del archivo), mixer.update(0,18)

cachorro: root.scale = 0,62; hueso Head × 1,32; hueso Neck1 × 1,08; skeleton.update()
legendario: root.scale = 1,12
            PointLight 0xff9a3a intensity 0,70, distancia size.y * 5, un poco arriba y adelante
            7 sprites de mota naranja (textura radial suave, NormalBlending, no Additive en el PNG:
            el blending aditivo sobre fondo transparente pintaba un sol opaco en la captura)
```

**En runtime** (sobre el fondo de la aldea o de la carta) sí conviene partículas **aditivas** más chiquitas y un glow de silueta: se ve más «aura suave tipo fuego» que las motas fijas del PNG. El PNG es un fallback de ficha, no el efecto final en el mundo.

## Detalles por modelo

- **pastor:** trae mochila y pañuelo naranja en el mismo mesh; se ven en el formatito. Limitación del pack, no de la cámara.
- **pug:** en estos PNG se ocultó `Pug002` (mochila). El pañuelo azul (`Pug001`) quedó, le da aire de pueblo. Si se quiere el cuerpo limpio, ocultar también `Pug001`.
- **husky, shiba, wolf:** sin accesorios. El shiba queda especialmente bien como formatito de raza.
- El **wolf** está por si sirve de infectado o de ficha de zona; no es una raza de la tienda.

## Licencia de los renders

Son adaptaciones (capturas recortadas/redimensionadas) de modelos **CC0 1.0** de Quaternius. El CC0 no exige atribución; se agradece la mención. Ver License.txt en `/workspace/estudio/arte/licencias/`.
