# Informe Técnico Completo: Plataforma Web EmpleosAqua

Este documento ha sido diseñado específicamente para servir como **archivo de contexto de alta calidad** para **Google NotebookLM** o **Gemini**. Contiene la especificación completa del diseño, arquitectura de software, stack tecnológico, detalles de componentes y flujos de usuario de la plataforma **EmpleosAqua**.

---

## 1. Resumen Ejecutivo de la Plataforma

**EmpleosAqua** (desarrollado bajo el repositorio de trabajo local) es un portal web de empleo nicho y especializado de nivel premium, enfocado en conectar talento humano con empresas del **sector acuícola, salmonicultura, pesca, logística, transporte marítimo y servicios industriales** en el sur de Chile (principalmente regiones de Los Lagos, Aysén y Magallanes).

La plataforma ofrece una experiencia visual moderna y sofisticada, utilizando **glassmorphism**, microinteracciones dinámicas, esquemas de colores HSL degradados de alta gama y un diseño totalmente responsivo adaptado para dispositivos móviles y de escritorio.

---

## 2. Arquitectura de Software y Stack Tecnológico

La aplicación está construida como una **Single Page Application (SPA)** moderna con los siguientes componentes tecnológicos principales:

### Frontend Core
*   **React 19.2.4**: Biblioteca principal para la construcción de interfaces declarativas basadas en componentes reutilizables.
*   **Vite 8.0.1**: Herramienta de compilación ultra rápida que proporciona recarga térmica en tiempo real (HMR) y empaquetamiento optimizado de producción.
*   **React Router DOM 7.13.1**: Gestiona la navegación interna y las rutas SPA sin recargar el navegador.

### Diseño y Estilos (UI/UX)
*   **Vanilla CSS con CSS Custom Properties**: Se utiliza un sistema de variables de CSS centralizado para definir la paleta de colores corporativos, espaciados, tipografías y sombras. Esto facilita cambios temáticos masivos de forma inmediata.
*   **Tailwind CSS (Utility-First)**: Integrado en el maquetado de componentes JSX para agilizar la alineación, layouts de cuadrícula y márgenes.
*   **Framer Motion 12.38.0**: Biblioteca de animación avanzada. Se utiliza para las transiciones de páginas, efectos de entrada física en listados, carruseles fluidos con efecto Ken-Burns, e interactividad avanzada basada en el movimiento físico del cursor.
*   **Lucide React 0.577.0**: Set de iconos premium vectoriales en formato SVG que garantizan consistencia visual en todas las pantallas.

### Infraestructura de Despliegue
*   **Vercel**: Configurado con `vercel.json` para enrutamiento SPA y despliegue continuo de producción en la nube.

---

## 3. Estructura y Organización del Código (Directory Tree)

La estructura del código fuente está modularizada de la siguiente manera:

```text
src/
├── assets/                  # Recursos gráficos locales (imágenes del carrusel, logos)
├── components/              # Componentes funcionales y de UI globales
│   ├── Header/              # Barra de navegación superior (transparente a opaca al hacer scroll)
│   ├── Footer/              # Pie de página corporativo con enlaces informativos y redes
│   ├── Hero/                # Sección de bienvenida principal con carrusel lento y barra de búsqueda
│   ├── QuickActions/        # Accesos directos a funcionalidades (ej. subir currículum)
│   ├── FeaturedJobs/        # Módulo de filtrado y visualización de ofertas destacadas
│   ├── Institutional/       # Sección con la propuesta de valor y visión de la empresa
│   ├── Stats/               # Contadores estadísticos animados del impacto de la plataforma
│   └── ValueBlock/          # Tarjetas de pilares de negocio
├── layouts/                 # Plantillas de estructura de página (Layouts)
│   └── DashboardLayout/     # Layout contenedor común para paneles de control (Sidebar + Topbar)
├── pages/                   # Vistas principales del sistema (Páginas)
│   ├── Home/                # Página de aterrizaje principal (Landing Page)
│   ├── Login/               # Módulos de autenticación separados (Postulante / Empresa)
│   ├── Dashboard/           # Paneles de administración interactivos
│   │   ├── PostulanteDashboard.jsx   # Interfaz integral para candidatos
│   │   └── EmpresaDashboard.jsx      # Interfaz de gestión de talento para reclutadores
│   ├── Nosotros/            # Página institucional de la empresa
│   ├── Tarifas/             # Planes de publicación y tarifas de publicidad
│   ├── FAQ/                 # Centro de preguntas frecuentes
│   ├── Contacto/            # Formulario de contacto con soporte técnico
│   └── GenericPage.jsx      # Plantilla genérica para páginas secundarias rápidas
├── App.jsx                  # Enrutador principal de la aplicación y declaración de rutas
├── main.jsx                 # Punto de entrada de React en el DOM
├── index.css                # Estilos globales y tokens del sistema de diseño
└── App.css                  # Estilos de utilidad complementarios
```

---

## 4. Análisis Detallado de Módulos y Flujos Clave

### A. Página de Inicio (Landing Page - `Home.jsx`)
Diseño de alto impacto visual organizado en un diseño premium de **tres columnas**:
1.  **Columna Izquierda (Skyscraper Ad)**: Espacio reservado para anuncios publicitarios del sector (ej. Aqua Forum), completamente responsivo.
2.  **Contenido Central (Ancho Máximo 1000px)**:
    *   **Hero Section (`Hero.jsx`)**: Carrusel de imágenes de fondo con un efecto Ken-Burns (animación de zoom lento) mediante Framer Motion, sobrepuesto con un filtro oscuro de alto contraste. Incluye una barra de búsqueda de ofertas inteligente filtrable por cargo/palabra clave y región.
    *   **Acciones Rápidas (`QuickActions.jsx`)**: Enlaces dinámicos para postular, subir CV o registrar empresa.
    *   **Ofertas Destacadas (`FeaturedJobs.jsx`)**: Grid interactivo con pestañas de filtrado dinámico en tiempo real sin recarga de página: *Más Recientes*, *Destacadas*, *Inclusivas* (Ley 21.015) y *Prácticas*. Cuenta con una funcionalidad interactiva para "Guardar Oferta" mediante favoritos locales.
    *   **Estadísticas (`Stats.jsx`)**: Datos numéricos llamativos de tracción de la plataforma.
3.  **Columna Derecha (Skyscraper Ad)**: Segundo espacio simétrico para publicidad vertical.

### B. Panel del Postulante (`PostulanteDashboard.jsx`)
Es el núcleo de la experiencia de usuario para los candidatos. Su diseño se estructura mediante un **Sidebar con degradado premium** y pestañas hash:
*   **Mi Perfil & CV (`#perfil`)**: 
    *   *Datos Personales*: Formulario completo con subida de fotografía de perfil, campos obligatorios identificados, email y RUT bloqueados para consistencia del sistema.
    *   *Inclusión Laboral*: Tarjeta dedicada con lógica condicional para la Ley de Discapacidad en Chile. Al marcar "Sí", se despliega suavemente un grid de opciones múltiples con tipos de discapacidad.
    *   *Experiencia y Educación*: Líneas de tiempo con listados interactivos que soportan estados "Actuales", niveles de experiencia y badges de colores corporativos.
    *   *Documentos*: Subida interactiva de currículum (PDF/Word) y hasta tres archivos complementarios con previsualización dinámica del estado del archivo y opción de borrado.
*   **Mis Postulaciones (`#postulaciones`)**:
    *   Tabla interactiva de seguimiento. Muestra el cargo, la empresa, la fecha y el estado de la postulación mediante insignias de colores (*Postulado*, *Vieron tu CV*, *En Proceso*, *Cerrada*).
    *   **UX Premium**: Al posicionar el cursor (hover en escritorio) o presionar con el dedo (touch en móvil) sobre el badge de estado, se despliega de forma limpia y ordenada un **Tooltip flotante animado** con un mensaje personalizado y detallado del proceso de selección (ej. "Tu postulación ha sido exitosa" o "Vas por buen camino"), evitando interfaces sobrecargadas.
*   **Secciones Auxiliares (`#favoritos`, `#guardadas`, `#mensajes`, `#habilidades`)**: Tarjetas de diseño premium con ilustraciones minimalistas e invitaciones a la acción (*CTAs*) para motivar al usuario a completar evaluaciones psicolaborales o revisar mensajes.

### C. Panel de la Empresa (`EmpresaDashboard.jsx`)
Diseñado para la gestión eficiente de vacantes por parte de los reclutadores:
*   **Métricas de Rendimiento**: Cuadrícula de KPIs dinámicos que muestran Avisos Activos, Candidatos Nuevos, Vistas Totales y Descargas de CVs con gradientes sutiles.
*   **Mis Avisos**: Listado administrativo rápido para ver la cantidad de candidatos inscritos y el estado del aviso (*Activa*, *Por Vencer*, *Cerrada*).
*   **Candidatos Recientes**: Tarjetas dinámicas que calculan automáticamente un porcentaje de **Match de Perfil** (ej. 95%), ubicación geográfica del talento, y botones de acción rápida para inspeccionar el perfil del postulante o descargar su CV directamente en formato digital.

### D. Enrutador y Navegación (`App.jsx` y `Header.jsx`)
*   Protección visual del menú y cabecera adaptable: Al hacer scroll vertical hacia abajo, el encabezado se reduce de tamaño de forma elegante y se vuelve semi-translúcido para maximizar la superficie de lectura sin perder el acceso al menú.
*   Menú móvil optimizado con un menú lateral tipo "drawer" fluido que se despliega con transiciones amortiguadas mediante Framer Motion.

---

## 5. Decisiones de Diseño y Detalles Premium de la UI

Durante las iteraciones de desarrollo, se implementaron mejoras clave para lograr un aspecto visual **sumamente profesional e interactivo**:
1.  **Degradados Premium en el Panel de Control**:
    *   **Sidebar**: Transición vertical suave desde un azul marino profundo e institucional (`#003a5e` a 0% de opacidad) hasta el azul principal de EmpleosAqua (`#005B94` a 100%).
    *   **Topbar**: Degradado horizontal dinámico de alta gama que rompe la monotonía del panel tradicional y resalta la cabecera.
2.  **Contraste y Objetos en Blanco**: Todos los textos de navegación, iconos vectoriales y botones auxiliares dentro de las áreas de degradado se redefinieron a blanco puro (`#ffffff`) y tonos translúcidos claros (`rgba(255, 255, 255, 0.7)`), eliminando textos oscuros que dificultaban la lectura en el fondo azul.
3.  **Indicador Cyan de Sección Activa**: El elemento de navegación seleccionado en el sidebar cuenta con un borde lateral y un texto resaltado en un color cyan brillante (`#4DDEFF`), creando un sutil efecto "neón" que guía intuitivamente al usuario.
4.  **Efecto Paralaje Interactivo (Mouse Tracking)**: Módulos clave implementan hooks matemáticos de Framer Motion (`useMotionValue`, `useSpring`, `useTransform`) para registrar la posición espacial del ratón del usuario y generar un leve balanceo 3D interactivo en las tarjetas primarias al pasar el mouse por encima.

---

## 6. Sugerencias de Integración Técnica y Futuro Escalado

Para el análisis asistido de NotebookLM o el equipo de backend, se detallan las siguientes oportunidades de conexión:
*   **Base de Datos Recomendada**: PostgreSQL (a través de Supabase o Firebase) para mapear perfectamente la estructura relacional de los esquemas declarados en `PostulanteDashboard` e `EmpresaDashboard`.
*   **Estrategia de Carga de Archivos**: Los slots de CVs y documentos adicionales están listos para conectarse a un almacenamiento de objetos (ej. Amazon S3 o Supabase Storage buckets).
*   **Motor de Recomendaciones / Match**: Los porcentajes de coincidencia representados en la vista de la empresa pueden ser alimentados mediante un motor de búsqueda vectorial simple (vector embeddings) que compare las habilidades declaradas por el postulante en el frontend frente a las palabras clave del aviso de empleo.

---
*Este informe representa fielmente el estado actual del código fuente del proyecto y sus decisiones arquitectónicas clave a la fecha de mayo de 2026.*
