# Audio v0.4 — Dog Zone: La Plaga

Fecha de verificación: 13 de noviembre de 2026, hora de Argentina (America/Buenos_Aires, UTC-3).
Presupuesto US$ 0. Solo CC0 verificado en la página o en el License.txt del pack. No se usó Pixabay. No se crearon cuentas. Freesound no se usó: el sitio suele pedir cuenta para bajar; no listé archivos de ahí para no inventar fichas.

Las monedas del juego se llaman **Dogs** y **PDogs** (no Chapitas).

## Lo que hay

- **20 SFX** en `sfx/` (OGG, en total 260 KB).
- **2 loops de música** en `musica/`: aldea y zona infectada.
- Licencia de cada fuente en `assets/licenses/` (License.txt oficial de Kenney, y notas con enlace a la página de OpenGameArt).

Kenney no publica loops de música en su categoría Audio (solo Music Jingles, que son stingers cortos). Los 2 loops salen de OpenGameArt, con CC0 leído en cada ficha.

Volumen bajo por defecto y el interruptor de sonido que ya existe: eso lo arma Programación. Durante un anuncio (si alguna vez se integra) el juego se silencia.

## Mapeo evento → archivo

| Evento | Archivo | Fuente | Licencia | Peso | Duración |
|---|---|---|---|---|---|
| UI click | `sfx/ui_click.ogg` | Kenney Interface Sounds, `click_001.ogg` | CC0 (License.txt del pack) | 4,9 KB | 0,10 s |
| Abrir menú | `sfx/ui_abrir.ogg` | Kenney Interface Sounds, `open_001.ogg` | CC0 | 9,8 KB | 0,15 s |
| Cerrar menú | `sfx/ui_cerrar.ogg` | Kenney Interface Sounds, `close_001.ogg` | CC0 | 9,9 KB | ~0,2 s |
| Error | `sfx/ui_error.ogg` | Kenney Interface Sounds, `error_001.ogg` | CC0 | 7,4 KB | corto |
| Éxito | `sfx/ui_exito.ogg` | Kenney Interface Sounds, `confirmation_002.ogg` | CC0 | 14,2 KB | 0,54 s |
| Compra / gastar Dogs o PDogs | `sfx/compra.ogg` | Kenney RPG Audio, `handleCoins.ogg` | CC0 | 25,4 KB | 0,85 s |
| Recibir Dogs | `sfx/dogs_recibir.ogg` | Kenney RPG Audio, `handleCoins2.ogg` | CC0 | 13,1 KB | corto |
| Ladrido | `sfx/ladrido.ogg` | OpenGameArt, rubberduck, `barking_01.ogg` (pack 80 CC0 creature SFX) | CC0 (página) | 17,3 KB | 0,40 s |
| Ladrido (variante) | `sfx/ladrido_02.ogg` | Idem, `barking_02.ogg` | CC0 | 16,7 KB | 0,46 s |
| Ataque (golpe de cuerpo, no cruje hueso) | `sfx/ataque.ogg` | Kenney Impact Sounds, `impactGeneric_light_000.ogg` | CC0 | 5,8 KB | 0,14 s |
| Golpe recibido (suave) | `sfx/golpe.ogg` | Kenney Impact Sounds, `impactSoft_medium_000.ogg` | CC0 | 5,4 KB | 0,12 s |
| Infectado que cae (un «poof», no un alarido) | `sfx/infectado_cae.ogg` | Kenney Interface Sounds, `drop_002.ogg` | CC0 | 6,4 KB | 0,19 s |
| Comer | `sfx/comer.ogg` | OpenGameArt, rubberduck, `eat_03.ogg` | CC0 | 12,5 KB | 0,27 s |
| Curar | `sfx/curar.ogg` | Kenney Interface Sounds, `confirmation_003.ogg` | CC0 | 9,5 KB | 0,32 s |
| Subir de nivel | `sfx/subir_nivel.ogg` | Kenney Music Jingles, `jingles_PIZZI07.ogg` (pizzicato) | CC0 | 19,1 KB | 1,32 s |
| Cachorro nace (arrullo corto) | `sfx/cachorro_nace.ogg` | Kenney Music Jingles, `jingles_PIZZI03.ogg` | CC0 | 17,0 KB | 1,15 s |
| Revelar rareza Legendaria | `sfx/rareza_legendario.ogg` | Kenney Music Jingles, `jingles_STEEL07.ogg` | CC0 | 22,5 KB | 1,56 s |
| Pasos (huerta / aldea) | `sfx/pasos.ogg` | Kenney Impact Sounds, `footstep_grass_000.ogg` | CC0 | 8,3 KB | corto |
| Sale de misión | `sfx/mision_sale.ogg` | Kenney RPG Audio, `doorOpen_1.ogg` | CC0 | 22,8 KB | corto |
| Vuelve de misión | `sfx/mision_vuelve.ogg` | Kenney RPG Audio, `doorClose_1.ogg` | CC0 | 18,6 KB | corto |
| Música de aldea (loop) | `musica/aldea_quaint_town.ogg` | OpenGameArt, neonarkade, «Quaint Town - LOOPABLE» | CC0 (página) | 1.241 KB | 102,8 s |
| Música de zona infectada (loop) | `musica/zona_whispers_in_the_fog.ogg` | OpenGameArt, Ruhinre, «Whispers in the Fog» | CC0 (página) | 204 KB | 15,36 s |

## Fuentes y páginas (verificadas esta ronda)

- Kenney, packs bajados de la página oficial (botón «Continue without donating», sin cuenta): Interface Sounds, UI Audio (no se copió ningún archivo de este pack al set final), Impact Sounds, RPG Audio, Music Jingles, Digital Audio (tampoco entró en el set final). Licencia en cada `License.txt`: Creative Commons Zero, CC0, http://creativecommons.org/publicdomain/zero/1.0/. Soporte: https://kenney.nl/support. Categoría: https://kenney.nl/assets/category:Audio.
- Quaint Town: https://opengameart.org/content/quaint-town — autor **neonarkade**, CC0. Se reconvirtió el MP3 loopable a OGG Vorbis (q=3, 44,1 kHz) para aligerar. Una adaptación de un archivo CC0 sigue siendo de uso libre.
- Whispers in the Fog: https://opengameart.org/content/whispers-in-the-fog — autor **Ruhinre**, CC0. La página lo describe como un loop corto, seamless, de clima misterioso y etéreo (no hay gritos). El OGG se copió sin recodificar. Programación: conviene dejarlo más bajo que el de la aldea; es tenso, no de terror, pero no debe asustar a una nena de 6.
- 80 CC0 creature SFX: https://opengameart.org/content/80-cc0-creature-sfx — autor **rubberduck**, CC0. Solo se copiaron `barking_01`, `barking_02` y `eat_03`. No se usaron scream, roar ni monster. En comentarios de esa misma página, el autor dice que varios efectos (incluido el ladrido) están hechos con la boca y filtros, no con un perro real. Se eligieron por ser CC0, livianos y de tono «cute» según esos comentarios. Si más adelante se quiere un ladrido de perro grabado, hay que buscar otra fuente CC0 verificada (Freesound pide cuenta para bajar).

## Alternativas CC0 vistas y no empaquetadas

- Happy Town (Guy G. Gamerson, CC0, https://opengameart.org/content/happy-town): tema de pueblo, 53 s, 1,3 MB MP3. **No está marcado como loopable** en la ficha; por eso se eligió Quaint Town.
- Magician Village Loop (beardalaxy, CC0): loop de 19 s y 364 KB, pero el tono es más «mago» que pueblo.
- EmptyCity (yd, CC0): loop oscuro de ciudad devastada; se dejó de lado por ser más pesado de clima para todo público.
- Dungeon Ambience (yd): un comentario en la ficha habla de un ruido que asusta; no se usó.

## Pendiente

- Loops extra de menú y de noche/criadero (la propuesta los menciona; esta vuelta priorizó aldea + zona).
- Un ladrido de perro real CC0, si Angel prefiere eso al de rubberduck.
- Variaciones de huerta (cavar, regar, cosechar) y de pelota: se pueden sacar más archivos de los packs Kenney ya bajados (por ejemplo `chop.ogg`, `cloth*.ogg`) sin nueva licencia; no los copié al set mínimo para no inflar.
