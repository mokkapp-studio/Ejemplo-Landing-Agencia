@AGENTS.md
# Nexus Agency — Landing Page

## Qué es este proyecto
Landing page estática para Nexus Agency, agencia de marketing digital.
Sin backend, sin base de datos, sin autenticación.
Todos los datos son estáticos y van hardcodeados en los componentes.

## Stack exacto
- Next.js 16.2.2 con App Router
- React 19.2.4
- TypeScript 5.x (sin uso de `any`)
- Tailwind CSS v4 (¡importante: es v4, no v3!)
- Sin librerías de componentes externas

## IMPORTANTE — Tailwind CSS v4
Este proyecto usa Tailwind v4. Las diferencias clave respecto a v3:
- La configuración va en globals.css con @import "tailwindcss", NO en tailwind.config.js
- Los colores personalizados se definen con @theme en globals.css
- No existe tailwind.config.ts para personalización de colores — todo va en CSS
- Las clases de utilidad funcionan igual, pero la configuración es diferente

## Estructura del proyecto
- /app — App Router de Next.js (layout.tsx, page.tsx, globals.css)
- /components — un archivo por sección (crear esta carpeta)
- /public — assets estáticos
- page.tsx solo ensambla secciones, sin lógica propia

## Diseño — estilo minimalista
- Mucho espacio en blanco: py-24 md:py-32 en secciones
- Tipografía como elemento principal
- Sin gradientes de color, sin sombras llamativas
- Máximo 2 colores de acento en toda la página
- Sin imágenes de fondo ni overlays

## Paleta de colores
- Fondo: #FFFFFF
- Fondo alterno: #F9F9F9
- Texto principal: #111111
- Texto secundario: #666666
- Acento: #000000 (negro — botones CTA)
- Borde y separadores: #E5E5E5

## Tipografía
- Fuente: Inter via next/font/google
- H1: text-5xl md:text-7xl font-extralight tracking-tight
- H2: text-3xl md:text-5xl font-light tracking-tight
- H3: text-lg font-medium
- Body: text-base font-normal leading-relaxed
- Labels: text-xs font-medium tracking-widest uppercase
- NUNCA font-bold en títulos principales

## Espaciado
- Secciones: py-24 md:py-32
- Contenedor: max-w-6xl mx-auto px-6
- Gap entre elementos: gap-12 md:gap-16

## Secciones en orden
1. Navbar
2. HeroSection
3. ServicesSection
4. ProcessSection
5. TestimonialsSection
6. CTASection
7. Footer

## Convenciones
- Componentes: PascalCase → HeroSection.tsx
- Props tipadas con TypeScript interface siempre
- export default al final de cada componente
- Datos hardcodeados como constante al inicio del archivo

## Reglas de diseño que no se rompen
- Sin border-radius mayor a rounded-xl
- Sin box-shadow mayor a shadow-sm
- Sin animaciones (solo transition-colors en hover)
- CTA principal: bg-black text-white
- Botón secundario: border border-black text-black bg-transparent

## Comandos
- npm run dev → localhost:3000
- npm run build → compilar
- npm run lint → verificar errores