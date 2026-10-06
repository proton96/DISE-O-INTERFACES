# Elección de la idea del proyecto

Este proyecto consiste en una aplicación personal de **gestor de recetas y lista de la compra**, con un enfoque adicional en la **comparación de precios** mediante scraping de los supermercados de la zona del usuario.

La aplicación está pensada como una herramienta de **utilidad diaria**. En cuanto al diseño, se buscará un estilo **glassmorfismo**, aplicando ese enfoque visual en toda la interfaz.

---

## Tarea 1.1 - Desk Research

### 1. Análisis de la competencia (apps web/móviles)

Se han analizado cuatro aplicaciones de referencia para inspirarse y detectar qué hacen bien y qué hacen mal.

#### Cookpad

**Puntos buenos:**
- Gran cantidad de recetas.
- Recetas de personas reales.
- Búsqueda por ingredientes.
- Comunidad activa.
- **Cooksnaps**: otros usuarios pueden subir imágenes de una receta que ya han preparado.

**Puntos malos:**
- Calidad de las recetas irregular, al depender de usuarios no profesionales.
- Recetas no verificadas por profesionales.
- Demasiadas opciones pueden complicar la elección.
- Requiere cuenta para aprovechar todas las funciones.
- Algunas funciones limitadas al plan Premium.

#### Whisk (Samsung Food)

**Puntos buenos:**
- Guarda recetas de otras webs.
- Incluye planificador semanal.
- Genera listas de la compra automáticas.
- Búsqueda por ingredientes y preferencias.
- Integra funciones de IA.
- Muestra información nutricional.

**Puntos malos:**
- Nombre confuso: muchos usuarios la buscan como “Whisk” y aparece como “Samsung Food”.
- Algunas funciones dependen del ecosistema Samsung.
- Funcionalidades avanzadas de pago.
- Suscripción percibida como cara.
- No todas las recetas están correctamente detalladas.

#### Bring!

**Puntos buenos:**
- Listas compartidas en tiempo real.
- Cada producto aparece con icono/imagen (mejor interfaz visual).
- Organización automática de productos.
- Cantidades y descripciones editables.
- Posibilidad de tener varias listas.
- Recetas integradas en la app.
- Añadir productos por comandos de voz (Alexa, Siri).
- Versión gratuita bastante completa.

**Puntos malos:**
- No es una app completa de gestión de presupuesto.
- Necesitas cuenta para compartir listas.
- Dependencia de internet para sincronización.
- Personalización de productos limitada.
- Los adjuntos de fotos pueden fallar.
- Presencia de publicidad y contenido comercial.

#### Paprika Recipe Manager

**Puntos buenos:**
- Importa recetas de internet en general.
- Extrae solo título, ingredientes y preparación de las páginas (sin publicidad).
- Recetario personal completo.
- Búsqueda avanzada.
- Escala cantidades según número de personas.
- Planificador diario, semanal y mensual.
- Funciona sin conexión.

**Puntos malos:**
- Es de pago para utilizarla.
- Pago por plataforma (Android, iOS, Windows, etc.).
- No es una red social de cocina.
- La planificación es manual.
- Funciones de IA limitadas.
- No está centrada en comparar precios.
- La información nutricional no siempre está disponible.

---

### 2. Patrones de UI/UX que esperan los usuarios en apps de recetas

Se consideran “patrones de diseño de producto” que la gente busca y valora:

- **Cards con contexto suficiente:** título, imagen, tiempo, tipo de comida, dieta, rating y estado “guardado”. Evitar sobrecargar la tarjeta; dejar los detalles para la pantalla de receta.
- **Filtros visibles y activos:** filtros por tiempo, dieta, categoría, ingredientes; y que los filtros activos se vean claramente.
- **Pantalla de receta estructurada:** ingredientes y método fácilmente accesibles, atribución de fuente visible, selector de raciones cerca de las cantidades.
- **Planificación semanal + handoff a compra:** poder añadir una receta a un día y comida, ajustar raciones, combinar ingredientes y revisar cantidades antes de generar la lista.
- **Lista de compra agregada y deduplicada:** cuando varias recetas comparten ingrediente, la lista lo combina en una única entrada con cantidad total, pero permite ver el desglose por receta si el usuario lo pide.

---

### 3. Resumen de quejas de usuarios

#### Cookpad

**Quejas principales:**
- **Búsqueda y relevancia:** resultados poco útiles o “fuera de tema”; sensación de que para ver recetas “más cocinadas/populares” hay que pagar Premium.
- **Idioma y localización:** falta de traducción automática y de filtros claros por país/idioma/medidas; el feed muestra recetas que muchos usuarios no pueden seguir.
- **Experiencia social limitada:** los usuarios esperan más interacción (reaccionar, comentar, seguir) y encuentran funciones sociales básicas o poco visibles.
- **Cambios de app / usabilidad:** quejas sobre lentitud, imágenes que no cargan, repetición de recetas y sensación de “empeoramiento” respecto a versiones previas.

#### Whisk / Samsung Food

**Quejas principales:**
- **Anuncios intrusivos y upsell:** anuncios molestos en la versión gratuita; premium percibido como caro si su principal ventaja es quitar anuncios.
- **Navegación confusa:** usuarios no entienden bien la diferencia entre pestañas (Home vs Explore) y encuentran la UX poco clara.
- **Limitaciones en lista y planificación:** solo una tienda disponible en la lista; falta de seguimiento de sobras / batch cooking / congelados; organización de recetas limitada a “colecciones”.
- **Funciones faltantes:** falta de modo de cocina manos libres en algunas reseñas; base de recetas/tiendas muy centrada en EE. UU. y Reino Unido.
- **Sugerencias poco personalizadas:** los planes de comidas sugeridos no reflejan bien las preferencias dietéticas del usuario.

#### Bring!

**Quejas principales:**
- **Problemas con listas y sincronización:** borrar listas puede bloquear la app (iPad/iPhone); la app de Watch pierde detalle respecto a la de iPhone; problemas para encontrar/instalar la versión de Watch.
- **Funciones faltantes en recetas:** no se pueden adjuntar imágenes/PDF a las recetas; la app está más orientada a lista que a biblioteca de recetas rica.
- **Gestión de categorías y reutilización:** piden mejor gestión de categorías, plantillas de compra estandarizadas y función “comprar de nuevo” más clara.
- **Impresión y sharing:** imposibilidad de imprimir listas y problemas al compartir (se pierden items, movimientos extraños en la lista).
- **Soporte lento:** falta de respuesta del soporte ante problemas.

#### Paprika Recipe Manager

**Quejas principales:**
- **Pérdida de datos y migración entre versiones:** pérdida de recetas tras actualizaciones o al pasar de Paprika 1/2 a Paprika 3; sensación de tirar años de trabajo y soporte que no responde bien.
- **Búsqueda dentro de la biblioteca:** dificultad para encontrar recetas por ingrediente o nombre; la búsqueda a veces no encuentra recetas que sí existen en categorías.
- **Limitaciones en edición y visualización:** no poder insertar imágenes fácilmente, dificultad para cambiar entre múltiples recetas mientras se cocina, pequeños roces de UX (tener que pulsar “edit” para valorar, falta de ordenamiento por “más reciente”).
- **Pagos repetidos por nuevas versiones:** molestia por tener que pagar de nuevo por Paprika 3 y temor a perder recetas si no se migran correctamente.
- **Anuncios en el navegador interno:** al importar recetas de webs, anuncios superpuestos (incluido vídeo) que tapan contenido.

---

## Tarea 1.2 - Análisis de personas

### Persona 1 — “Laura, la organizadora semanal”

#### Contexto básico
- **Nombre:** Laura Gómez  
- **Edad:** 34 años  
- **Ocupación:** Administrativa, madre de dos niños (6 y 9 años)  
- **Personalidad:** Práctica, organizada, con poco tiempo, valora la claridad y lo rápido.  
- **Acerca de:**  
  Laura trabaja a media jornada y lleva la organización de comidas en casa. Quiere cocinar más sano, pero entre el trabajo, los niños y las actividades, acaba improvisando o pidiendo comida. Usa el móvil para todo (WhatsApp, Instagram, banca online) y ya ha probado apps de recetas, pero siempre vuelve a usar el navegador y notas en el teléfono.

#### Tecnología (skills)
- **Móvil (iOS/Android):** Nivel alto (usa muchas apps, configura notificaciones, widgets).  
- **Navegador web:** Nivel medio-alto (sabe usar pestañas, marcadores, pero se lía con webs muy cargadas).  
- **Apps de cocina/compra:** Nivel medio (ha usado Bring! y alguna app de recetas, pero no las mantiene).  
- **Redes sociales:** Nivel alto (Instagram, TikTok, grupos de WhatsApp del cole y familia).

#### Necesidades (Goals)
- **Objetivo principal:**  
  “Quiero planificar las comidas de la semana y generar automáticamente la lista de la compra en menos de 5 minutos, sin tener que copiar y pegar ingredientes.”

- **Necesidades concretas:**
  - Ver recetas rápidas (≤30 min) y aptas para niños, con ingredientes fáciles de encontrar en su supermercado habitual.
  - Poder añadir varias recetas a un “plan semanal” y que la app agrupe y sume ingredientes automáticamente.
  - Revisar la lista en el súper, tachar lo comprado y que se guarde para la próxima semana.
  - Compartir la lista con su pareja por WhatsApp sin que se desordene ni se pierdan items.

#### Frustraciones (Pain Points)
- **Lo que la hace abandonar:**
  - Que le pidan registrarse o dar el email antes de dejarle ver recetas o usar la lista.
  - Que la búsqueda de recetas no filtre bien por tiempo, tipo de dieta o “apto para niños”.
  - Listas de la compra que no se pueden editar fácil, no se pueden compartir bien o se “rompen” al compartir.
  - Recetas con medidas raras (tazas, onzas) y sin equivalencias claras a gramos o unidades de su país.
  - Apps que pierden sus recetas o listas tras una actualización o al cambiar de teléfono.

---

### Persona 2 — “Dani, el foodie ahorrador”

#### Contexto básico
- **Nombre:** Dani Ruiz  
- **Edad:** 27 años  
- **Ocupación:** Estudiante de máster y repartidor a ratos  
- **Personalidad:** Curioso, creativo, le gusta probar cosas nuevas, muy sensible al precio.  
- **Acerca de:**  
  Dani vive en un piso compartido, cocina bastante pero con presupuesto ajustado. Le gusta descubrir recetas nuevas en TikTok e Instagram, pero luego se lía al hacer la compra: compra de más, se le olvidan ingredientes o acaba tirando comida. Quiere una app que le ayude a cocinar rico, barato y sin desperdiciar.

#### Tecnología (skills)
- **Móvil (Android):** Nivel muy alto (instala muchas apps, beta testers, usa atajos y automatizaciones).  
- **Navegador web:** Nivel alto (abre muchas pestañas, compara precios, usa extensiones si puede).  
- **Apps de cocina/compra:** Nivel medio (ha probado Cookpad, Whisk/Samsung Food, Paprika, pero ninguna le encaja del todo).  
- **Redes sociales:** Nivel muy alto (TikTok, Instagram, YouTube; sigue cuentas de recetas y trucos de cocina).

#### Necesidades (Goals)
- **Objetivo principal:**  
  “Quiero encontrar recetas baratas y con pocos ingredientes, que pueda ajustar a lo que ya tengo en casa, y que la app me diga exactamente qué me falta comprar y cuánto me va a costar.”

- **Necesidades concretas:**
  - Buscar recetas por ingredientes que ya tiene (“tengo pollo, arroz y tomate, ¿qué puedo hacer?”).
  - Ajustar raciones fácilmente y ver cómo cambian las cantidades y el coste estimado.
  - Que la lista de la compra se pueda ordenar por supermercado o por pasillos, y marcar lo que ya tiene en casa.
  - Guardar recetas de webs y TikTok sin tener que copiar y pegar todo a mano.

#### Frustraciones (Pain Points)
- **Lo que la hace abandonar:**
  - Recetas con listas de ingredientes larguísimas, muchos “productos gourmet” o difíciles de encontrar.
  - Apps que no dejan ver el coste aproximado o que no permiten filtrar por “barato” / “pocos ingredientes”.
  - Tener que volver a escribir recetas que ya vio en TikTok o en blogs porque no hay forma fácil de guardarlas.
  - Anuncios invasivos que tapan ingredientes o pasos mientras está cocinando.
  - Que la app no funcione bien offline (en el súper o en la cocina con mala cobertura).