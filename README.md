# Aroma Showcase

SPACE PERFUMS — FASE 0: BASE DEL CATÁLOGO

Quiero crear el sitio web de Space Perfums, una perfumería en Colombia.

El sitio será principalmente un catálogo online de perfumes, no un ecommerce.

La prioridad absoluta es que sea:

Elegante.

Visual.

Rápido.

Fácil de navegar.

Excelente en móvil.

Preparado para más de 100 perfumes.

Enfocado en llevar al usuario a WhatsApp.

OBJETIVO

Crear la base visual y estructural del catálogo.

El usuario debe poder entrar, entender rápidamente qué ofrece Space Perfums y comenzar a explorar los perfumes.

El flujo principal será:

Entrar → Explorar → Buscar/filtrar → Ver perfume → Consultar por WhatsApp

No crear funcionalidades de ecommerce.

NO CREAR

No agregar:

Carrito.

Checkout.

Pagos.

Registro.

Login.

Wishlist.

Reseñas.

Blog.

Panel administrativo.

Sistema de pedidos.

Funciones innecesarias.

Mantener el proyecto simple.

ESTRUCTURA BÁSICA

Crear una única página con estas secciones:

1. Header

Incluir:

Space Perfums.

Catálogo.

Contacto.

Menú responsive para móvil.

2. Hero

Crear una presentación breve y elegante de Space Perfums.

Incluir:

Título atractivo.

Subtítulo corto.

Botón "Ver catálogo".

Imagen o composición visual relacionada con perfumes.

El Hero debe ser elegante, pero no debe ocupar demasiado espacio.

El catálogo debe aparecer rápidamente.

3. Catálogo

Esta será la sección principal y más importante.

Preparar un grid de productos que pueda manejar fácilmente más de 100 perfumes.

Cada perfume tendrá:

Imagen.

Nombre.

Marca.

Categoría.

Tamaño.

Precio.

Descripción breve.

Botón para consultar por WhatsApp.

Las tarjetas deben ser reutilizables.

No crear una estructura diferente para cada perfume.

4. Contacto

Crear una sección sencilla al final del catálogo:

Space Perfums.

Texto breve.

WhatsApp.

Botón para contactar.

5. Footer

Incluir únicamente:

Space Perfums.

WhatsApp.

Copyright.

DATOS DE LOS PERFUMES

Los perfumes deben estar almacenados en una lista de datos sencilla y centralizada.

Cada producto debe tener como mínimo:

id
name
brand
category
size
price
description
image


Las categorías iniciales son:

Hombre.

Mujer.

Unisex.

Utilizar algunos productos de demostración para visualizar correctamente el catálogo.

Los productos de demostración deben ser fácilmente reemplazables posteriormente por los productos reales.

IMPORTANTE:

No quiero tener que modificar el diseño de la página para agregar nuevos perfumes.

Agregar un nuevo perfume debe consistir simplemente en agregar otro producto a la lista de datos.

El catálogo debe funcionar igual con 20, 100 o más productos.

WHATSAPP

El número oficial de Space Perfums es:

+57 302 853 4471

Guardar este número en un único lugar de configuración.

No repetir el número manualmente por diferentes componentes.

Más adelante utilizaremos este número para generar enlaces de WhatsApp desde cada perfume.

DISEÑO VISUAL

Crear una estética de perfumería premium moderna.

Paleta:

Azul oscuro/elegante como color principal.

Dorado como acento.

Blanco y tonos neutros como colores secundarios.

El azul debe ser sofisticado y profundo.

El dorado debe utilizarse con moderación.

Utilizarlo para detalles, pequeños acentos y elementos destacados.

Evitar una apariencia excesivamente dorada.

Estilo

Quiero:

Mucho espacio visual.

Fotografías de perfumes protagonistas.

Tarjetas limpias.

Tipografía elegante.

Buena jerarquía visual.

Bordes y sombras sutiles.

Animaciones suaves.

Hover effects discretos.

Excelente legibilidad.

No quiero:

Diseño recargado.

Exceso de animaciones.

Efectos exagerados.

Gradientes llamativos.

Elementos que distraigan de los perfumes.

La sensación debe ser de una perfumería elegante y contemporánea.

RESPONSIVE

Diseñar desde el principio pensando especialmente en móvil.

En móvil debe ser muy fácil:

Buscar → explorar → seleccionar perfume → contactar.

El catálogo debe adaptarse correctamente a:

Teléfonos.

Tablets.

Computadores.

Los botones deben ser cómodos para tocar.

Las imágenes de los perfumes deben tener suficiente protagonismo.

IMPORTANTE

Esta es únicamente la FASE 0.

No desarrollar todavía:

Sistema avanzado de búsqueda.

Filtros completos.

Vista detallada avanzada.

WhatsApp por producto.

Botón flotante de WhatsApp.

Optimización avanzada.

Funciones adicionales.

Primero quiero tener una base sencilla, limpia y visualmente profesional.

No convertir este proyecto en una aplicación compleja.

No crear una arquitectura innecesariamente sofisticada.

RESULTADO ESPERADO

Al terminar esta fase quiero tener:

La estructura básica de la página.

Header.

Hero.

Sección de catálogo.

Algunas tarjetas de perfumes de demostración.

Sección de contacto.

Footer.

Modelo de datos sencillo para los perfumes.

Configuración centralizada del WhatsApp.

Diseño premium azul + dorado.

Responsive desde el inicio.

No avances automáticamente a la siguiente fase.

Primero quiero revisar visualmente esta base y posteriormente continuaremos con las funcionalidades del catálogo.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://space-scent-showcase.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/97b38330-e0c8-4f4a-8151-b417a006bd3f).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
