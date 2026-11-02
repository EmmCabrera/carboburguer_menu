# Carboburguer - Menú Digital Interactivo 🍔

Demo digital moderna para **Carboburguer**, basada fielmente en la estructura y experiencia de usuario del menú de **Colin's**, con la identidad de marca oficial de Carboburguer:

- **Color Principal Oficial:** `#f29b00` (Ámbar dorado cálido).
- **Hero Slider Dinámico con Movimiento Continuo (Ken Burns):**
  1. 🍔 **Hamburguesa al Carbón** (`assets/hero_burger.jpg`)
  2. 🌭 **Jumbodog Gourmet** (`assets/hero_hotdog.jpg`)
  3. 🥤 **Malteadas Artesanales** (`assets/hero_malteada.jpg`)
  4. 🍗 **Alitas & Boneless** (`assets/hero_alitas.jpg`)
  *Ciclo automático fluido e infinito con movimiento cinematográfico (zoom & pan suave).*
- **Logotipo Oficial Fiel:**
  - Extraído directamente del rótulo original (`SINCE 2012`, flamas características y tipografía script).
  - Avatar circular con borde dorado institucional estilo Colin's (`assets/logo_circle.png`).
  - Cabecera del modal de negocio con el letrero auténtico (`assets/carboburguer_emblem.png`).
- **Catálogo Completo y Fiel de Productos:**
  - **Hamburguesas:** Carbo Burguer ($150), Monster ($130), Mixta ($130), Angus ($130), Suprema ($170 - Triple carne), Extreme ($130), Sirloin ($100), Arrachera ($130), Pastor ($100), Res ($100), Crunch Pollo ($100).
  - **Jumbodogs:** Jumbo ($100), Pastor ($100), Especial ($75), Mixto ($130).
  - **Alitas & Boneless:** 8 piezas por $100 con salsas a elegir (BBQ, Picosos, Ranch, Habaneros, Mixtos, Mango Habanero, Tamarindo Habanero).
  - **Papas:** Francesa ($70), Gajo ($70), Waffle ($70), Papas con Carne ($130).
  - **Ensaladas:** Arrachera ($150), Pollo ($150), Mixta ($150).
  - **Bebidas:** Malteadas artesanales ($70), Aguas de sabor ($40), Refrescos ($30), Frappés ($70), Café americano ($50).
  - **Extras:** Tenders ($130), Aros de cebolla ($100), Dedos de queso ($100), Nachos ($60), Nachos con carne ($130), Postres ($50).
- **Personalización Real de Productos:**
  - Hacer doble carne a la parrilla (+$30 MXN).
  - Añadir porción de papas a cualquier producto (+$30 MXN).
  - Cambiar tocino y piña por champiñones (Sin costo adicional).
  - Elección de salsa para alitas y boneless.
  - Elección de sabor para malteadas y bebidas.
- **Estructura Colin's:**
  - Tarjeta superior flotante con switcher interactivo: **Delivery** vs **Para retirar**.
  - Píldora de estado **Disponible** (con pulso verde) y selector de horarios (`15:00 a 22:00 hrs`).
  - Buscador en tiempo real de productos e ingredientes.
  - Barra sticky de navegación rápida por categorías con iconos.
  - Tarjetas de producto horizontales con foto redondeada a la derecha.
  - Barra flotante de carrito inferior con apertura de drawer y cálculo de envío ($25 en delivery, $0 en retiro).
  - **Envío directo de pedidos por WhatsApp** al número oficial `55 4421 1895` con mensaje estructurado.
- **Modal de Información de la Empresa ("Ver más"):**
  - Horarios (15:00 a 22:00), costo de envío ($25), WhatsApp directo y lema: *"carboburguer somos tu mejor opción. Ven y compruébalo"*.

---

## Estructura de Archivos

```
carboburguer/
├── index.html               # Estructura principal, componentes y modales
├── styles.css               # Animaciones Ken Burns, transiciones y estilos Colin's
├── app.js                   # Lógica del carrusel, carrito, búsqueda y WhatsApp
├── assets/                  # 40+ imágenes optimizadas (logo, hero y productos)
│   ├── logo_circle.png      # Avatar circular con borde dorado institucional
│   ├── logo_transparent.png # Logo con fondo transparente
│   ├── carboburguer_emblem.png # Rótulo original Carboburguer
│   ├── hero_burger.jpg      # Slide 1: Hamburguesa
│   ├── hero_hotdog.jpg      # Slide 2: Hotdog
│   ├── hero_malteada.jpg    # Slide 3: Malteadas
│   ├── hero_alitas.jpg      # Slide 4: Alitas
│   └── ...                  # Fotos de cada producto del menú
└── README.md                # Documentación del proyecto
```

## Cómo previsualizar localmente

Puedes abrir `index.html` directamente en tu navegador o iniciar un servidor web local rápido con Python:

```bash
python -m http.server 8000
```

Y abrir en tu navegador: `http://localhost:8000`
