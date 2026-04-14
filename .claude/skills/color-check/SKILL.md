---
name: color-check
description: Revisa si los colores usados en un componente del proyecto
             pertenecen a la paleta oficial definida en CLAUDE.md.
             Úsala cuando quieras verificar la consistencia de color
             de cualquier componente de la landing.
argument-hint: [NombreComponente.tsx]
allowed-tools: Read
---

# Color Check — Ejemplo-Landing-Agencia

Vas a revisar el componente: **$ARGUMENTS**

## Paso 1 — Leer la paleta oficial

Lee el CLAUDE.md de la raíz del proyecto.
La sección "Paleta de colores" define los únicos colores permitidos:
- Fondo: #FFFFFF
- Fondo alterno: #F9F9F9
- Texto principal: #111111
- Texto secundario: #666666
- Acento: #000000
- Borde y separadores: #E5E5E5

## Paso 2 — Leer el componente

Lee el archivo components/$ARGUMENTS

## Paso 3 — Analizar

Busca en el componente:
1. Valores hex directos (#RRGGBB) que no estén en la paleta
2. Clases de Tailwind con color inline (text-[#xxx], bg-[#xxx]) no declaradas
3. Variables CSS custom no definidas en globals.css

## Paso 4 — Entregar el informe

### Color Check: $ARGUMENTS

**Estado general:** ✅ Correcto / ⚠️ Problemas encontrados

#### Colores verificados
| Color encontrado | ¿En paleta? | Línea | Acción |
|-----------------|-------------|-------|--------|
| #111111         | ✅ Sí       | 12    | —      |
| #FF0000         | ❌ No       | 34    | Cambiar a #000000 o eliminar |

#### Resumen
- Colores en paleta: N
- Colores fuera de paleta: N
- Recomendación: [acción concreta si hay problemas]