---
name: typo-check
description: Revisa si la tipografía usada en un componente del proyecto
             cumple las reglas definidas en CLAUDE.md: peso de fuente correcto
             en H1/H2/H3, ausencia de font-bold en títulos, y uso exclusivo
             de Inter como fuente. Úsala cuando quieras verificar la
             consistencia tipográfica de cualquier componente de la landing.
argument-hint: [NombreComponente.tsx]
allowed-tools: Read
---

# Typo Check — Nexus Agency Landing

Vas a revisar el componente: **$ARGUMENTS**

## Paso 1 — Leer las reglas tipográficas oficiales

Lee el CLAUDE.md de la raíz del proyecto.
La sección "Tipografía" define las reglas que debes verificar:
- Fuente: Inter via next/font/google
- H1: text-5xl md:text-7xl font-extralight tracking-tight
- H2: text-3xl md:text-5xl font-light tracking-tight
- H3: text-lg font-medium
- Body: text-base font-normal leading-relaxed
- Labels: text-xs font-medium tracking-widest uppercase
- NUNCA font-bold en títulos principales

## Paso 2 — Leer el componente

Lee el archivo components/$ARGUMENTS

## Paso 3 — Analizar

Busca en el componente:

1. **Regla H1** — Cualquier etiqueta `<h1>` debe tener `font-extralight`.
   Anota si usa otro peso (font-light, font-normal, font-medium, font-semibold, font-bold) o si falta la clase de peso.

2. **Regla H2** — Cualquier etiqueta `<h2>` debe tener `font-light`.
   Anota si usa otro peso distinto de font-light.

3. **Regla font-bold** — CRÍTICO. Ningún elemento de título (`<h1>`, `<h2>`, `<h3>`, ni clases que emulen títulos) puede tener `font-bold` o `font-extrabold`.
   Anota cada ocurrencia con su línea exacta.

4. **Regla de fuente** — El componente no debe declarar ni referenciar ninguna fuente distinta de Inter (p.ej. font-serif, font-mono, otra variable CSS de fuente, o un import de Google Fonts diferente).
   Si el componente no gestiona fuentes (lo hace layout.tsx), indica que no aplica.

## Paso 4 — Entregar el informe

### Typo Check: $ARGUMENTS

**Estado general:** ✅ Correcto / ⚠️ Problemas encontrados

#### Reglas verificadas

| Regla | Elemento / Línea | ¿Cumple? | Detalle |
|-------|-----------------|----------|---------|
| H1 → font-extralight | `<h1>` línea N | ✅ / ⚠️ | Clase encontrada o problema |
| H2 → font-light | `<h2>` línea N | ✅ / ⚠️ | Clase encontrada o problema |
| NUNCA font-bold en títulos | — | ✅ / ⚠️ | Sin ocurrencias / Encontrado en línea N |
| Fuente exclusiva: Inter | — | ✅ / N/A / ⚠️ | No aplica o problema encontrado |

#### Resumen
- Reglas cumplidas: N
- Reglas con problemas: N
- Recomendación: [acción concreta por cada problema encontrado, o "Sin cambios necesarios"]
