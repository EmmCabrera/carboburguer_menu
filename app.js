/**
 * CARBOBURGUER - MENÚ DIGITAL INTERACTIVO
 * Identidad Fiel: Fondo Naranja #f29b00 + Glassmorphism Premium
 */

// =============================================================================
// 1. DATOS DEL MENÚ (CATÁLOGO OFICIAL CARBOBURGUER)
// =============================================================================
const MENU_DATA = [
  {
    category: "hamburguesas",
    categoryName: "Hamburguesas",
    icon: "fa-solid fa-burger",
    description: "Carne a la parrilla con el auténtico sabor al carbón desde 2012",
    items: [
      {
        id: "hb-carbo",
        name: "Carbo Burguer",
        price: 150,
        priceDoble: 180,
        desc: "Arrachera, pollo, tocino, piña asada y queso manchego fundido.",
        img: "assets/carbo_burguer.jpg",
        badge: "⭐ La Especialidad",
        popular: true,
        type: "burger"
      },
      {
        id: "hb-monster",
        name: "Carbo Monster",
        price: 130,
        priceDoble: 160,
        desc: "Arrachera, pastor, tocino, piña asada y queso manchego fundido.",
        img: "assets/carbo_monster.jpg",
        badge: "🔥 Más Pedida",
        popular: true,
        type: "burger"
      },
      {
        id: "hb-mixta",
        name: "Carbo Mixta",
        price: 130,
        priceDoble: 160,
        desc: "Pastor, pollo, tocino, piña asada y queso derretido.",
        img: "assets/carbo_mixta.jpg",
        type: "burger"
      },
      {
        id: "hb-angus",
        name: "Carbo Angus",
        price: 130,
        priceDoble: 160,
        desc: "Carne 100% Angus selecta, tocino crocante, piña y queso.",
        img: "assets/carbo_angus.jpg",
        type: "burger"
      },
      {
        id: "hb-suprema",
        name: "Carbo Suprema",
        price: 170,
        desc: "3 carnes de res a la parrilla, tocino, piña y abundante queso.",
        img: "assets/carbo_suprema.jpg",
        badge: "👑 Triple Carne",
        popular: true,
        type: "burger"
      },
      {
        id: "hb-extreme",
        name: "Carbo Extreme",
        price: 130,
        priceDoble: 160,
        desc: "Sirloin, salchicha asada, tocino, piña y queso derretido.",
        img: "assets/carbo_extreme.jpg",
        type: "burger"
      },
      {
        id: "hb-sirloin",
        name: "Carbo Sirloin",
        price: 100,
        priceDoble: 130,
        desc: "Corte de sirloin jugoso, tocino, piña y queso manchego.",
        img: "assets/carbo_sirloin.jpg",
        type: "burger"
      },
      {
        id: "hb-arrachera",
        name: "Carbo Arrachera",
        price: 130,
        priceDoble: 160,
        desc: "Arrachera marinada a la brasa, tocino, piña y queso.",
        img: "assets/carbo_arrachera.jpg",
        type: "burger"
      },
      {
        id: "hb-pastor",
        name: "Carbo Pastor",
        price: 100,
        priceDoble: 130,
        desc: "Tradicional carne al pastor sazonada, tocino, piña y queso.",
        img: "assets/carbo_pastor.jpg",
        type: "burger"
      },
      {
        id: "hb-res",
        name: "Carbo Res",
        price: 100,
        priceDoble: 130,
        desc: "Carne de res artesanal a las brasas, tocino, piña y queso.",
        img: "assets/carbo_res.jpg",
        type: "burger"
      },
      {
        id: "hb-crunch",
        name: "Carbo Crunch (Pollo)",
        price: 100,
        priceDoble: 130,
        desc: "Pechuga de pollo crujiente empanizada, tocino, piña y queso.",
        img: "assets/carbo_crunch.jpg",
        type: "burger"
      }
    ]
  },
  {
    category: "jumbodogs",
    categoryName: "Jumbodogs",
    icon: "fa-solid fa-hotdog",
    description: "Hot dogs estilo gourmet en pan artesanal con salchicha jumbo",
    items: [
      {
        id: "jd-jumbo",
        name: "Jumbodog Clásico",
        price: 100,
        desc: "Salchicha jumbo de primera, tocino, piña asada y queso fundido.",
        img: "assets/jumbodog_jumbo.jpg?v=2",
        badge: "Favorito",
        type: "dog"
      },
      {
        id: "jd-pastor",
        name: "Jumbodog Pastor",
        price: 100,
        desc: "Salchicha jumbo con deliciosa carne al pastor, piña y queso.",
        img: "assets/jumbodog_pastor.jpg?v=2",
        type: "dog"
      },
      {
        id: "jd-especial",
        name: "Jumbodog Especial",
        price: 75,
        desc: "Salchicha selecta, tocino crocante, piña y queso.",
        img: "assets/jumbodog_especial.jpg?v=2",
        type: "dog"
      },
      {
        id: "jd-mixto",
        name: "Jumbodog Mixto",
        price: 130,
        desc: "Salchicha, pastor, tocino crocante, piña asada y doble queso.",
        img: "assets/jumbodog_mixto.jpg?v=2",
        badge: "⭐ El Más Cargado",
        type: "dog"
      }
    ]
  },
  {
    category: "alitas",
    categoryName: "Alitas & Boneless",
    icon: "fa-solid fa-drumstick-bite",
    description: "Doraditas al punto y bañadas en tus salsas preferidas",
    items: [
      {
        id: "al-alitas",
        name: "Alitas Carbo (8 Pzas)",
        price: 100,
        desc: "8 piezas doradas bañadas en tu salsa favorita, acompañadas de aderezo ranch.",
        img: "assets/alitas_bbq.jpg",
        badge: "Crujientes",
        popular: true,
        type: "wings"
      },
      {
        id: "al-boneless",
        name: "Boneless Carbo (8 Pzas)",
        price: 100,
        desc: "Trozos jugosos de pechuga de pollo 100% crujiente sin hueso con salsa a elegir.",
        img: "assets/boneless_mango.jpg",
        badge: "100% Pechuga",
        popular: true,
        type: "wings"
      }
    ]
  },
  {
    category: "papas",
    categoryName: "Papas",
    icon: "fa-solid fa-fire-burner",
    description: "Crujientes, doradas y recién hechas al momento",
    items: [
      {
        id: "pa-francesa",
        name: "Papas a la Francesa",
        price: 70,
        desc: "Corte tradicional crujiente con sal y sazonador especial de la casa.",
        img: "assets/papas_francesa.jpg",
        type: "simple"
      },
      {
        id: "pa-gajo",
        name: "Papas Gajo",
        price: 70,
        desc: "Papas rústicas sazonadas con paprika y finas hierbas.",
        img: "assets/papas_gajo.jpg",
        type: "simple"
      },
      {
        id: "pa-waffle",
        name: "Papas Waffle",
        price: 70,
        desc: "Corte waffle ultra crujiente por fuera y suave por dentro.",
        img: "assets/papas_waffle.jpg",
        type: "simple"
      },
      {
        id: "pa-carne",
        name: "Papas con Carne",
        price: 130,
        desc: "Generosa porción de papas bañadas en salsa de queso cheddar y trozos de carne a la parrilla.",
        img: "assets/papas_carne.jpg",
        badge: "⭐ Imperdible",
        type: "simple"
      }
    ]
  },
  {
    category: "ensaladas",
    categoryName: "Ensaladas",
    icon: "fa-solid fa-leaf",
    description: "Base fresca de lechuga, jitomate, tocino, piña, crotones y aderezo",
    items: [
      {
        id: "en-arrachera",
        name: "Ensalada con Arrachera",
        price: 150,
        desc: "Base fresca con generosa porción de arrachera jugosa a la plancha.",
        img: "assets/ensalada_arrachera.jpg",
        type: "simple"
      },
      {
        id: "en-pollo",
        name: "Ensalada con Pollo",
        price: 150,
        desc: "Base fresca con pechuga de pollo marinada y asada al momento.",
        img: "assets/ensalada_pollo.jpg",
        type: "simple"
      },
      {
        id: "en-mixta",
        name: "Ensalada Mixta",
        price: 150,
        desc: "Combinación de carnes a la parrilla sobre cama verde con aderezo de la casa.",
        img: "assets/ensalada_arrachera.jpg",
        type: "simple"
      }
    ]
  },
  {
    category: "bebidas",
    categoryName: "Bebidas & Malteadas",
    icon: "fa-solid fa-mug-hot",
    description: "Malteadas cremosas, aguas frescas, sodas y frappés",
    items: [
      {
        id: "be-malteada",
        name: "Malteada Artesanal",
        price: 70,
        desc: "Cremosa y espesa con helado premium. Elige sabor: Fresa, Chocolate, Vainilla u Oreo.",
        img: "assets/malteada.jpg",
        badge: "Cremosa",
        popular: true,
        type: "drink-flavor"
      },
      {
        id: "be-agua",
        name: "Agua de Sabor Natural",
        price: 40,
        desc: "Agua fresca del día preparada con fruta e ingredientes naturales.",
        img: "assets/agua_sabor.jpg",
        type: "drink-flavor"
      },
      {
        id: "be-refresco",
        name: "Refresco 355ml",
        price: 30,
        desc: "Bien frío en lata o botella: Coca-Cola, Coca Sin Azúcar, Jarritos o Sidral Mundet.",
        img: "assets/refresco.jpg",
        type: "drink-flavor"
      },
      {
        id: "be-frappe",
        name: "Frappé Especial",
        price: 70,
        desc: "Bebida frappé con crema batida (Café, Moka o Caramelo).",
        img: "assets/frappe.jpg",
        type: "drink-flavor"
      },
      {
        id: "be-cafe",
        name: "Café Americano",
        price: 50,
        desc: "Café de grano recién molido con notas tostadas y aroma envolvente.",
        img: "assets/cafe.jpg",
        type: "simple"
      }
    ]
  },
  {
    category: "extras",
    categoryName: "Extras & Snacks",
    icon: "fa-solid fa-cookie-bite",
    description: "Acompañamientos perfectos para compartir",
    items: [
      {
        id: "ex-tenders",
        name: "Tenders de Pollo",
        price: 130,
        desc: "Tiras de pechuga 100% crujiente empanizadas acompañadas de dip.",
        img: "assets/tenders.jpg",
        type: "simple"
      },
      {
        id: "ex-aros",
        name: "Aros de Cebolla",
        price: 100,
        desc: "Dorados y crujientes aros de cebolla recién salidos de cocina.",
        img: "assets/aros_cebolla.jpg",
        type: "simple"
      },
      {
        id: "ex-dedos",
        name: "Dedos de Queso",
        price: 100,
        desc: "Barritas de queso mozzarella empanizadas con salsa pomodoro o ranch.",
        img: "assets/dedos_queso.jpg",
        badge: "Fundente",
        type: "simple"
      },
      {
        id: "ex-nachos",
        name: "Nachos Clásicos",
        price: 60,
        desc: "Totopos crujientes de maíz cubiertos con salsa de queso cheddar y jalapeños.",
        img: "assets/nachos.jpg",
        type: "simple"
      },
      {
        id: "ex-nachos-carne",
        name: "Nachos con Carne",
        price: 130,
        desc: "Totopos dorados con arrachera/res a la parrilla, frijoles y doble queso cheddar.",
        img: "assets/nachos_carne.jpg",
        badge: "⭐ Para Compartir",
        type: "simple"
      },
      {
        id: "ex-postres",
        name: "Postres Caseros",
        price: 50,
        desc: "El toque dulce del día: pastel o postre especial de la casa.",
        img: "assets/postres.jpg",
        type: "simple"
      }
    ]
  }
];

const SALSAS_DISPONIBLES = [
  "BBQ",
  "Picosos",
  "Ranch",
  "Habaneros",
  "Mixtos",
  "Mango Habanero",
  "Tamarindo Habanero"
];

const SABORES_MALTEADA = ["Oreo", "Chocolate", "Fresa", "Vainilla"];
const SABORES_REFRESCO = ["Coca-Cola Clásica", "Coca-Cola Sin Azúcar", "Sidral Mundet", "Jarrito Mandarina"];
const SABORES_AGUA = ["Horchata", "Jamaica", "Limón con Chía"];
const SABORES_FRAPPE = ["Café Clásico", "Moka", "Caramelo"];

// =============================================================================
// 2. ESTADO GLOBAL DE LA APLICACIÓN
// =============================================================================
const state = {
  currentModalItem: null,
  activeSlide: 0,
  sliderTimer: null,
  whatsappPhone: "525544211895"
};

// =============================================================================
// 3. INICIALIZACIÓN
// =============================================================================
document.addEventListener("DOMContentLoaded", () => {
  initHeroSlider();
  renderCategoryTabs();
  renderMenuSections();
  setupEventListeners();
  setupScrollSpy();
});

// =============================================================================
// 4. HERO SLIDESHOW (Hamburguesa -> Hotdog -> Malteadas -> Alitas -> Loop)
// =============================================================================
function initHeroSlider() {
  const slides = document.querySelectorAll(".hero-slide");
  const indicators = document.querySelectorAll(".slide-indicator-bar");
  if (!slides.length) return;

  function goToSlide(index) {
    state.activeSlide = (index + slides.length) % slides.length;

    slides.forEach((slide, i) => {
      if (i === state.activeSlide) {
        slide.classList.add("active");
        const img = slide.querySelector(".slide-image");
        if (img) {
          img.style.animation = "none";
          img.offsetHeight;
          img.style.animation = "";
        }
      } else {
        slide.classList.remove("active");
      }
    });

    indicators.forEach((ind, i) => {
      if (i === state.activeSlide) {
        ind.classList.add("active");
        const prog = ind.querySelector(".indicator-progress");
        if (prog) {
          prog.style.animation = "none";
          prog.offsetHeight;
          prog.style.animation = "progressFill 5s linear forwards";
        }
      } else {
        ind.classList.remove("active");
      }
    });
  }

  function nextSlide() {
    goToSlide(state.activeSlide + 1);
  }

  function startTimer() {
    if (state.sliderTimer) clearInterval(state.sliderTimer);
    state.sliderTimer = setInterval(nextSlide, 5000);
  }

  indicators.forEach((indicator) => {
    indicator.addEventListener("click", () => {
      const idx = parseInt(indicator.dataset.index, 10);
      goToSlide(idx);
      startTimer();
    });
  });

  // Swipe táctil en móvil
  let touchStartX = 0;
  let touchEndX = 0;
  const container = document.querySelector(".hero-slider-container");
  if (container) {
    container.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    container.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 50) {
        nextSlide();
        startTimer();
      } else if (touchEndX - touchStartX > 50) {
        goToSlide(state.activeSlide - 1);
        startTimer();
      }
    }, { passive: true });
  }

  goToSlide(0);
  startTimer();
}

// =============================================================================
// 5. RENDERIZADO DE CATEGORÍAS Y MENÚ (SIN BOTÓN AGREGAR EN TARJETAS)
// =============================================================================
function renderCategoryTabs() {
  const container = document.getElementById("categories-container");
  if (!container) return;

  container.innerHTML = MENU_DATA.map((cat, idx) => `
    <button class="glass-tab ${idx === 0 ? 'active' : ''}" data-category="${cat.category}">
      <i class="${cat.icon}"></i>
      <span>${cat.categoryName}</span>
    </button>
  `).join("");

  container.querySelectorAll(".glass-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      const categoryId = tab.dataset.category;
      const targetSection = document.getElementById(`section-${categoryId}`);
      if (targetSection) {
        const offset = 110;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = targetSection.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }

      container.querySelectorAll(".glass-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
    });
  });
}

function renderMenuSections() {
  const container = document.getElementById("menu-sections-container");
  if (!container) return;

  const html = MENU_DATA.map((cat) => {
    const cardsHtml = cat.items.map((item) => `
      <div class="glass-product-card" onclick="openProductModal('${item.id}')">
        <div class="flex-1 pr-2">
          <h3 class="font-extrabold text-[#111827] text-sm sm:text-base tracking-wide uppercase leading-snug">
            ${item.name}
          </h3>
          <p class="text-[12px] text-gray-700 font-medium leading-relaxed mt-1 line-clamp-2">
            ${item.desc}
          </p>
          <div class="mt-2.5">
            ${item.priceDoble ? `
              <div class="flex items-center gap-2 flex-wrap">
                <div class="flex items-baseline gap-1">
                  <span class="text-base sm:text-lg font-black text-[#b45309]">
                    $${item.price.toFixed(2)}
                  </span>
                  <span class="text-[10px] font-extrabold uppercase tracking-wider text-amber-950/70">
                    Sencilla
                  </span>
                </div>
                <div class="inline-flex items-center gap-1 bg-amber-950/10 px-2 py-0.5 rounded-md border border-amber-950/10">
                  <span class="text-[10px] font-bold uppercase text-amber-950/70">Doble</span>
                  <span class="text-xs sm:text-sm font-black text-gray-950">$${item.priceDoble.toFixed(2)}</span>
                </div>
              </div>
            ` : `
              <span class="text-base sm:text-lg font-black text-[#b45309]">
                $${item.price.toFixed(2)}
              </span>
            `}
          </div>
        </div>
        <div class="product-img-wrapper">
          <img src="${item.img}" alt="${item.name}" loading="lazy" onerror="this.src='assets/carbo_burguer.jpg'">
        </div>
      </div>
    `).join("");

    return `
      <section id="section-${cat.category}" class="mb-8 scroll-mt-28">
        <div class="mb-3.5 pb-2 border-b border-black/10">
          <h2 class="text-base sm:text-lg font-black text-gray-950 uppercase tracking-wider flex items-center gap-2">
            <i class="${cat.icon} text-gray-950"></i>
            ${cat.categoryName}
          </h2>
          <p class="text-xs text-gray-800 font-medium mt-0.5">${cat.description}</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          ${cardsHtml}
        </div>
      </section>
    `;
  }).join("");

  container.innerHTML = html;
}

function setupScrollSpy() {
  const sections = document.querySelectorAll("section[id^='section-']");
  const tabs = document.querySelectorAll(".glass-tab");
  const tabsContainer = document.getElementById("categories-container");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 150;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id").replace("section-", "");
      }
    });

    if (current) {
      tabs.forEach((tab) => {
        tab.classList.remove("active");
        if (tab.dataset.category === current) {
          tab.classList.add("active");
          if (tabsContainer) {
            const left = tab.offsetLeft - tabsContainer.offsetWidth / 2 + tab.offsetWidth / 2;
            tabsContainer.scrollTo({ left, behavior: "smooth" });
          }
        }
      });
    }
  }, { passive: true });
}

// =============================================================================
// 6. MODAL DE PERSONALIZACIÓN Y SELECCIÓN DE PRODUCTO
// =============================================================================
function findItemById(id) {
  for (const cat of MENU_DATA) {
    const it = cat.items.find(i => i.id === id);
    if (it) return it;
  }
  return null;
}

function openProductModal(itemId) {
  const item = findItemById(itemId);
  if (!item) return;

  const modal = document.getElementById("product-modal");
  const modalImg = document.getElementById("modal-item-img");
  const modalTitle = document.getElementById("modal-item-title");
  const modalDesc = document.getElementById("modal-item-desc");
  const modalPrice = document.getElementById("modal-item-price");
  const optionsContainer = document.getElementById("modal-options-container");

  if (modalImg) modalImg.src = item.img;
  if (modalTitle) modalTitle.textContent = item.name;
  if (modalDesc) modalDesc.textContent = item.desc;
  if (modalPrice) {
    if (item.priceDoble) {
      modalPrice.innerHTML = `
        <div class="flex items-baseline justify-end gap-1.5">
          <span class="text-xl sm:text-2xl font-black text-[#ffda36]">$${item.price.toFixed(2)}</span>
          <span class="text-[10px] font-bold uppercase tracking-wider text-white/90 bg-white/15 px-1.5 py-0.5 rounded">Sencilla</span>
        </div>
        <div class="text-xs sm:text-sm font-bold text-amber-200 mt-0.5 text-right">
          Doble: <span class="font-black text-white">$${item.priceDoble.toFixed(2)}</span>
        </div>
      `;
    } else {
      modalPrice.innerHTML = `<span class="text-xl sm:text-2xl font-black text-[#ffda36]">$${item.price.toFixed(2)}</span>`;
    }
  }

  let optionsHtml = "";

  if (item.type === "burger") {
    optionsHtml = `
      <div class="space-y-3">
        <div>
          <h4 class="text-xs font-black text-gray-800 uppercase tracking-wider mb-1">
            Ingredientes
          </h4>
          <p class="text-xs text-gray-600 font-medium leading-relaxed">
            ${item.desc}
          </p>
        </div>
        <div class="bg-amber-50/90 border border-amber-200/80 rounded-xl p-3">
          <h5 class="text-[11px] font-black text-amber-900 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
            <i class="fa-solid fa-plus-circle text-[#b45309]"></i> Opciones disponibles al ordenar:
          </h5>
          <ul class="text-xs text-gray-700 space-y-1 font-medium">
            ${item.priceDoble ? `
              <li class="flex items-center justify-between">
                <span>• Versión Doble (+1 carne extra a la brasa)</span>
                <span class="font-bold text-[#b45309]">$${item.priceDoble.toFixed(2)} (+$30.00)</span>
              </li>
            ` : ""}
            <li class="flex items-center justify-between">
              <span>• Porción de Papas Fritas</span>
              <span class="font-bold text-[#b45309]">+$30.00</span>
            </li>
            <li class="flex items-center justify-between">
              <span>• Cambiar tocino y piña por Champiñones</span>
              <span class="font-bold text-emerald-700">Sin costo extra</span>
            </li>
          </ul>
        </div>
      </div>
    `;
  } else if (item.type === "dog") {
    optionsHtml = `
      <div class="space-y-3">
        <div>
          <h4 class="text-xs font-black text-gray-800 uppercase tracking-wider mb-1">
            Ingredientes
          </h4>
          <p class="text-xs text-gray-600 font-medium leading-relaxed">
            ${item.desc}
          </p>
        </div>
        <div class="bg-amber-50/90 border border-amber-200/80 rounded-xl p-3">
          <h5 class="text-[11px] font-black text-amber-900 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
            <i class="fa-solid fa-plus-circle text-[#b45309]"></i> Opciones disponibles al ordenar:
          </h5>
          <ul class="text-xs text-gray-700 space-y-1 font-medium">
            <li class="flex items-center justify-between">
              <span>• Porción de Papas Fritas</span>
              <span class="font-bold text-[#b45309]">+$30.00</span>
            </li>
            <li class="flex items-center justify-between">
              <span>• Sin piña</span>
              <span class="font-bold text-gray-600">A petición</span>
            </li>
          </ul>
        </div>
      </div>
    `;
  } else if (item.type === "wings") {
    optionsHtml = `
      <div class="space-y-3">
        <div>
          <h4 class="text-xs font-black text-gray-800 uppercase tracking-wider mb-2">
            Salsas a elegir
          </h4>
          <div class="flex flex-wrap gap-1.5">
            ${SALSAS_DISPONIBLES.map(salsa => `
              <span class="text-xs bg-gray-100 text-gray-800 font-bold px-2.5 py-1 rounded-lg border border-gray-200">
                ${salsa}
              </span>
            `).join("")}
          </div>
        </div>
      </div>
    `;
  } else if (item.type === "drink-flavor") {
    let flavors = SABORES_MALTEADA;
    let labelText = "Sabores de malteada";
    if (item.id === "be-refresco") {
      flavors = SABORES_REFRESCO;
      labelText = "Variedades de refresco";
    } else if (item.id === "be-agua") {
      flavors = SABORES_AGUA;
      labelText = "Sabores de agua del día";
    } else if (item.id === "be-frappe") {
      flavors = SABORES_FRAPPE;
      labelText = "Sabores de frappé";
    }

    optionsHtml = `
      <div class="space-y-3">
        <div>
          <h4 class="text-xs font-black text-gray-800 uppercase tracking-wider mb-2">
            ${labelText}
          </h4>
          <div class="flex flex-wrap gap-1.5">
            ${flavors.map(flavor => `
              <span class="text-xs bg-gray-100 text-gray-800 font-bold px-2.5 py-1 rounded-lg border border-gray-200">
                ${flavor}
              </span>
            `).join("")}
          </div>
        </div>
      </div>
    `;
  } else {
    optionsHtml = `
      <div class="space-y-3">
        <div>
          <h4 class="text-xs font-black text-gray-800 uppercase tracking-wider mb-1">
            Descripción
          </h4>
          <p class="text-xs text-gray-600 font-medium leading-relaxed">
            ${item.desc}
          </p>
        </div>
      </div>
    `;
  }

  // Nota de servicio a domicilio en el modal
  optionsHtml += `
    <div class="mt-4 p-3 bg-amber-500/10 rounded-xl border border-amber-500/20 text-xs text-amber-950 flex items-center gap-2 font-semibold">
      <i class="fa-solid fa-motorcycle text-[#b45309] text-sm"></i>
      <span>El servicio a domicilio tiene un costo extra • Sujeto a disponibilidad</span>
    </div>
  `;

  if (optionsContainer) {
    optionsContainer.innerHTML = optionsHtml;
  }

  modal.classList.add("active");
  const backdrop = document.getElementById("modal-backdrop");
  if (backdrop) backdrop.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeProductModal() {
  const modal = document.getElementById("product-modal");
  if (modal) modal.classList.remove("active");
  const backdrop = document.getElementById("modal-backdrop");
  if (backdrop) backdrop.classList.remove("active");
  document.body.style.overflow = "";
}

// =============================================================================
// 7. MODAL DE INFORMACIÓN DE LA EMPRESA
// =============================================================================
function openStoreInfoModal() {
  const modal = document.getElementById("store-info-modal");
  if (modal) modal.classList.add("active");
  const backdrop = document.getElementById("modal-backdrop");
  if (backdrop) backdrop.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeStoreInfoModal() {
  const modal = document.getElementById("store-info-modal");
  modal.classList.remove("active");
  document.getElementById("modal-backdrop").classList.remove("active");
  document.body.style.overflow = "";
}

function openHoursModal() {
  openStoreInfoModal();
}

// =============================================================================
// 10. TOAST NOTIFICACIÓN
// =============================================================================
function showToast(message) {
  const toast = document.getElementById("toast-notice");
  const toastText = document.getElementById("toast-text");
  if (!toast || !toastText) return;

  toastText.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

// =============================================================================
// 11. LISTENERS GENERALES
// =============================================================================
function setupEventListeners() {
  const backdrop = document.getElementById("modal-backdrop");
  if (backdrop) {
    backdrop.addEventListener("click", () => {
      closeProductModal();
      closeStoreInfoModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeProductModal();
      closeStoreInfoModal();
    }
  });
}
