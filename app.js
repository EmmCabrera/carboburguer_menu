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
        desc: "Pastor, pollo, tocino, piña asada y queso derretido.",
        img: "assets/carbo_mixta.jpg",
        type: "burger"
      },
      {
        id: "hb-angus",
        name: "Carbo Angus",
        price: 130,
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
        desc: "Sirloin, salchicha asada, tocino, piña y queso derretido.",
        img: "assets/carbo_extreme.jpg",
        type: "burger"
      },
      {
        id: "hb-sirloin",
        name: "Carbo Sirloin",
        price: 100,
        desc: "Corte de sirloin jugoso, tocino, piña y queso manchego.",
        img: "assets/carbo_sirloin.jpg",
        type: "burger"
      },
      {
        id: "hb-arrachera",
        name: "Carbo Arrachera",
        price: 130,
        desc: "Arrachera marinada a la brasa, tocino, piña y queso.",
        img: "assets/carbo_arrachera.jpg",
        type: "burger"
      },
      {
        id: "hb-pastor",
        name: "Carbo Pastor",
        price: 100,
        desc: "Tradicional carne al pastor sazonada, tocino, piña y queso.",
        img: "assets/carbo_pastor.jpg",
        type: "burger"
      },
      {
        id: "hb-res",
        name: "Carbo Res",
        price: 100,
        desc: "Carne de res artesanal a las brasas, tocino, piña y queso.",
        img: "assets/carbo_res.jpg",
        type: "burger"
      },
      {
        id: "hb-crunch",
        name: "Carbo Crunch (Pollo)",
        price: 100,
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
        img: "assets/jumbodog_jumbo.jpg",
        badge: "Favorito",
        type: "dog"
      },
      {
        id: "jd-pastor",
        name: "Jumbodog Pastor",
        price: 100,
        desc: "Salchicha jumbo con deliciosa carne al pastor, piña y queso.",
        img: "assets/jumbodog_pastor.jpg",
        type: "dog"
      },
      {
        id: "jd-especial",
        name: "Jumbodog Especial",
        price: 75,
        desc: "Salchicha selecta, tocino crocante, piña y queso.",
        img: "assets/jumbodog_especial.jpg",
        type: "dog"
      },
      {
        id: "jd-mixto",
        name: "Jumbodog Mixto",
        price: 130,
        desc: "Salchicha, pastor, tocino crocante, piña asada y doble queso.",
        img: "assets/jumbodog_mixto.jpg",
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
  cart: [],
  currentModalItem: null,
  activeSlide: 0,
  sliderTimer: null,
  whatsappPhone: "525544211895"
};

function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem("carboburguer_cart");
    if (saved) {
      state.cart = JSON.parse(saved);
      updateCartUI();
    }
  } catch (e) {
    console.error("Error cargando carrito:", e);
  }
}

function saveCartToStorage() {
  try {
    localStorage.setItem("carboburguer_cart", JSON.stringify(state.cart));
  } catch (e) {
    console.error("Error guardando carrito:", e);
  }
}

// =============================================================================
// 3. INICIALIZACIÓN
// =============================================================================
document.addEventListener("DOMContentLoaded", () => {
  initHeroSlider();
  renderCategoryTabs();
  renderMenuSections();
  setupEventListeners();
  loadCartFromStorage();
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
          ${item.badge ? `
            <span class="inline-block bg-[#ffda36] text-[#78350f] text-[10px] font-black px-2 py-0.5 rounded-md mb-1.5 uppercase tracking-wider shadow-sm border border-amber-300">
              ${item.badge}
            </span>
          ` : ""}
          <h3 class="font-extrabold text-[#111827] text-sm sm:text-base tracking-wide uppercase leading-snug">
            ${item.name}
          </h3>
          <p class="text-[12px] text-gray-700 font-medium leading-relaxed mt-1 line-clamp-2">
            ${item.desc}
          </p>
          <div class="mt-2.5">
            <span class="text-base sm:text-lg font-black text-[#b45309]">
              $${item.price.toFixed(2)}
            </span>
          </div>
        </div>
        <div class="product-img-wrapper">
          <img src="${item.img}" alt="${item.name}" loading="lazy" onerror="this.src='assets/carbo_burguer.jpg'">
        </div>
      </div>
    `).join("");

    return `
      <section id="section-${cat.category}" class="mb-8 scroll-mt-28">
        <div class="flex items-center justify-between mb-3.5 pb-2 border-b border-black/10">
          <div>
            <h2 class="text-base sm:text-lg font-black text-gray-950 uppercase tracking-wider flex items-center gap-2">
              <i class="${cat.icon} text-gray-950"></i>
              ${cat.categoryName}
            </h2>
            <p class="text-xs text-gray-800 font-medium mt-0.5">${cat.description}</p>
          </div>
          <span class="text-xs font-black text-gray-900 bg-white/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/50">
            ${cat.items.length}
          </span>
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

  state.currentModalItem = {
    ...item,
    quantity: 1,
    selectedExtras: [],
    selectedSalsa: SALSAS_DISPONIBLES[0],
    selectedFlavor: "",
    swapChampiñones: false,
    notes: ""
  };

  const modal = document.getElementById("product-modal");
  const modalImg = document.getElementById("modal-item-img");
  const modalTitle = document.getElementById("modal-item-title");
  const modalDesc = document.getElementById("modal-item-desc");
  const modalPrice = document.getElementById("modal-item-price");
  const modalQty = document.getElementById("modal-qty-display");
  const optionsContainer = document.getElementById("modal-options-container");

  modalImg.src = item.img;
  modalTitle.textContent = item.name;
  modalDesc.textContent = item.desc;
  modalPrice.textContent = `$${item.price.toFixed(2)}`;
  modalQty.textContent = "1";

  let optionsHtml = "";

  if (item.type === "burger") {
    optionsHtml += `
      <div class="mb-4">
        <label class="block text-xs font-black text-gray-800 uppercase tracking-wider mb-2">
          Personaliza tu Hamburguesa
        </label>
        <div class="space-y-2">
          <label class="custom-option-label">
            <div class="flex items-center gap-2.5">
              <input type="checkbox" id="opt-doble" class="custom-option-input accent-[#f29b00] w-4 h-4 rounded" onchange="updateModalPrice()">
              <span class="text-xs font-bold text-gray-900">Doble Carne a la Parrilla</span>
            </div>
            <span class="text-xs font-black text-[#b45309]">+$30.00</span>
          </label>

          <label class="custom-option-label">
            <div class="flex items-center gap-2.5">
              <input type="checkbox" id="opt-papas" class="custom-option-input accent-[#f29b00] w-4 h-4 rounded" onchange="updateModalPrice()">
              <span class="text-xs font-bold text-gray-900">Porción de Papas Fritas</span>
            </div>
            <span class="text-xs font-black text-[#b45309]">+$30.00</span>
          </label>

          <label class="custom-option-label">
            <div class="flex items-center gap-2.5">
              <input type="checkbox" id="opt-champis" class="custom-option-input accent-[#f29b00] w-4 h-4 rounded" onchange="updateModalPrice()">
              <div>
                <span class="text-xs font-bold text-gray-900 block">Cambiar tocino y piña por Champiñones</span>
                <span class="text-[10px] text-gray-600">Sin costo adicional</span>
              </div>
            </div>
            <span class="text-xs font-black text-emerald-700">Gratis</span>
          </label>
        </div>
      </div>
    `;
  } else if (item.type === "dog") {
    optionsHtml += `
      <div class="mb-4">
        <label class="block text-xs font-black text-gray-800 uppercase tracking-wider mb-2">
          Personaliza tu Jumbodog
        </label>
        <div class="space-y-2">
          <label class="custom-option-label">
            <div class="flex items-center gap-2.5">
              <input type="checkbox" id="opt-papas" class="custom-option-input accent-[#f29b00] w-4 h-4 rounded" onchange="updateModalPrice()">
              <span class="text-xs font-bold text-gray-900">Porción de Papas Fritas</span>
            </div>
            <span class="text-xs font-black text-[#b45309]">+$30.00</span>
          </label>
          <label class="custom-option-label">
            <div class="flex items-center gap-2.5">
              <input type="checkbox" id="opt-sin-pina" class="custom-option-input accent-[#f29b00] w-4 h-4 rounded">
              <span class="text-xs font-bold text-gray-900">Sin piña</span>
            </div>
          </label>
        </div>
      </div>
    `;
  } else if (item.type === "wings") {
    optionsHtml += `
      <div class="mb-4">
        <div class="flex justify-between items-center mb-2">
          <label class="text-xs font-black text-gray-800 uppercase tracking-wider">
            Elige tu salsa <span class="text-[#b45309]">*</span>
          </label>
          <span class="text-[10px] bg-amber-100 text-amber-900 px-2 py-0.5 rounded font-black">1 obligatoria</span>
        </div>
        <div class="grid grid-cols-2 gap-2">
          ${SALSAS_DISPONIBLES.map((salsa, i) => `
            <label class="custom-option-label py-2.5">
              <div class="flex items-center gap-2">
                <input type="radio" name="salsa-option" value="${salsa}" ${i === 0 ? 'checked' : ''} class="accent-[#f29b00]">
                <span class="text-xs font-bold text-gray-900">${salsa}</span>
              </div>
            </label>
          `).join("")}
        </div>
      </div>
    `;
  } else if (item.type === "drink-flavor") {
    let flavors = SABORES_MALTEADA;
    let labelText = "Elige el sabor de tu malteada";
    if (item.id === "be-refresco") {
      flavors = SABORES_REFRESCO;
      labelText = "Elige tu refresco";
    } else if (item.id === "be-agua") {
      flavors = SABORES_AGUA;
      labelText = "Elige el sabor del agua";
    } else if (item.id === "be-frappe") {
      flavors = SABORES_FRAPPE;
      labelText = "Elige el sabor de tu frappé";
    }

    optionsHtml += `
      <div class="mb-4">
        <label class="block text-xs font-black text-gray-800 uppercase tracking-wider mb-2">
          ${labelText}
        </label>
        <div class="grid grid-cols-2 gap-2">
          ${flavors.map((flavor, i) => `
            <label class="custom-option-label py-2.5">
              <div class="flex items-center gap-2">
                <input type="radio" name="flavor-option" value="${flavor}" ${i === 0 ? 'checked' : ''} class="accent-[#f29b00]">
                <span class="text-xs font-bold text-gray-900">${flavor}</span>
              </div>
            </label>
          `).join("")}
        </div>
      </div>
    `;
  }

  optionsHtml += `
    <div class="mt-4">
      <label class="block text-xs font-black text-gray-800 uppercase tracking-wider mb-1.5">
        Instrucciones para la cocina (opcional)
      </label>
      <input type="text" id="modal-item-notes" placeholder="Ej: sin cebolla, salsa aparte, bien dorada..." 
             class="w-full text-xs p-3 border border-gray-300 rounded-xl focus:border-[#f29b00] focus:ring-1 focus:ring-[#f29b00] outline-none bg-white">
    </div>
  `;

  optionsContainer.innerHTML = optionsHtml;
  updateModalPrice();

  modal.classList.add("active");
  document.getElementById("modal-backdrop").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeProductModal() {
  const modal = document.getElementById("product-modal");
  modal.classList.remove("active");
  document.getElementById("modal-backdrop").classList.remove("active");
  document.body.style.overflow = "";
  state.currentModalItem = null;
}

function changeModalQty(delta) {
  if (!state.currentModalItem) return;
  const newQty = state.currentModalItem.quantity + delta;
  if (newQty >= 1 && newQty <= 20) {
    state.currentModalItem.quantity = newQty;
    document.getElementById("modal-qty-display").textContent = newQty;
    updateModalPrice();
  }
}

function updateModalPrice() {
  if (!state.currentModalItem) return;

  let unitPrice = state.currentModalItem.price;

  const dobleCheck = document.getElementById("opt-doble");
  if (dobleCheck && dobleCheck.checked) unitPrice += 30;

  const papasCheck = document.getElementById("opt-papas");
  if (papasCheck && papasCheck.checked) unitPrice += 30;

  const total = unitPrice * state.currentModalItem.quantity;
  const btn = document.getElementById("modal-add-btn");
  if (btn) {
    btn.innerHTML = `
      <div class="flex items-center justify-between w-full px-2">
        <span>Agregar al pedido</span>
        <span class="font-black text-[#ffda36]">$${total.toFixed(2)}</span>
      </div>
    `;
  }
}

function addCurrentItemToCart() {
  if (!state.currentModalItem) return;

  const item = state.currentModalItem;
  let finalUnitPrice = item.price;
  const customizations = [];

  const dobleCheck = document.getElementById("opt-doble");
  if (dobleCheck && dobleCheck.checked) {
    finalUnitPrice += 30;
    customizations.push("Doble carne (+$30)");
  }

  const papasCheck = document.getElementById("opt-papas");
  if (papasCheck && papasCheck.checked) {
    finalUnitPrice += 30;
    customizations.push("Porción papas (+$30)");
  }

  const champisCheck = document.getElementById("opt-champis");
  if (champisCheck && champisCheck.checked) {
    customizations.push("Con champiñones (sin piña ni tocino)");
  }

  const sinPinaCheck = document.getElementById("opt-sin-pina");
  if (sinPinaCheck && sinPinaCheck.checked) {
    customizations.push("Sin piña");
  }

  const salsaRadio = document.querySelector('input[name="salsa-option"]:checked');
  if (salsaRadio) {
    customizations.push(`Salsa: ${salsaRadio.value}`);
  }

  const flavorRadio = document.querySelector('input[name="flavor-option"]:checked');
  if (flavorRadio) {
    customizations.push(`Sabor: ${flavorRadio.value}`);
  }

  const notesInput = document.getElementById("modal-item-notes");
  const notes = notesInput ? notesInput.value.trim() : "";
  if (notes) {
    customizations.push(`Nota: "${notes}"`);
  }

  const cartItemKey = `${item.id}-${customizations.sort().join("|")}`;

  const existingIndex = state.cart.findIndex(ci => ci.key === cartItemKey);
  if (existingIndex > -1) {
    state.cart[existingIndex].quantity += item.quantity;
  } else {
    state.cart.push({
      key: cartItemKey,
      id: item.id,
      name: item.name,
      price: finalUnitPrice,
      basePrice: item.price,
      quantity: item.quantity,
      img: item.img,
      customizations
    });
  }

  saveCartToStorage();
  updateCartUI();
  closeProductModal();
  showToast(`¡${item.name} agregado al pedido!`);
}

// =============================================================================
// 7. CARRITO DE COMPRAS Y PEDIDOS
// =============================================================================
function updateCartUI() {
  const totalItems = state.cart.reduce((sum, it) => sum + it.quantity, 0);
  const total = state.cart.reduce((sum, it) => sum + (it.price * it.quantity), 0);

  const floatingBar = document.getElementById("floating-order-bar");
  const floatingBadge = document.getElementById("floating-cart-count");
  const floatingTotal = document.getElementById("floating-cart-total");

  if (floatingBar && floatingBadge && floatingTotal) {
    if (totalItems > 0) {
      floatingBar.classList.add("visible");
      floatingBadge.textContent = `${totalItems} ${totalItems === 1 ? 'producto' : 'productos'}`;
      floatingTotal.textContent = `$${total.toFixed(2)}`;
    } else {
      floatingBar.classList.remove("visible");
    }
  }

  renderCartDrawer(total);
}

function renderCartDrawer(total) {
  const container = document.getElementById("cart-items-list");
  if (!container) return;

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div class="text-center py-12 px-4">
        <div class="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-3">
          <i class="fa-solid fa-basket-shopping text-2xl text-[#b45309]"></i>
        </div>
        <h4 class="font-black text-gray-800 text-sm">Tu canasta está vacía</h4>
        <p class="text-xs text-gray-600 mt-1 max-w-xs mx-auto">
          Explora nuestras hamburguesas al carbón, jumbodogs y malteadas y agrégalos aquí.
        </p>
      </div>
    `;
    const checkoutBtn = document.getElementById("cart-checkout-btn");
    if (checkoutBtn) checkoutBtn.disabled = true;
    return;
  }

  const checkoutBtn = document.getElementById("cart-checkout-btn");
  if (checkoutBtn) checkoutBtn.disabled = false;

  container.innerHTML = state.cart.map((it, idx) => `
    <div class="p-3.5 bg-gray-50/90 rounded-2xl border border-gray-200 flex items-start justify-between gap-3">
      <div class="flex-1">
        <div class="flex items-center justify-between">
          <h4 class="font-black text-xs text-gray-900 uppercase">${it.name}</h4>
          <span class="font-black text-xs text-[#b45309]">$${(it.price * it.quantity).toFixed(2)}</span>
        </div>
        ${it.customizations.length > 0 ? `
          <ul class="text-[11px] text-gray-600 mt-1 space-y-0.5">
            ${it.customizations.map(c => `<li>• ${c}</li>`).join("")}
          </ul>
        ` : ""}
        <div class="flex items-center gap-3 mt-2.5">
          <div class="flex items-center border border-gray-300 rounded-lg bg-white overflow-hidden">
            <button onclick="changeCartItemQty(${idx}, -1)" class="w-7 h-7 text-xs font-bold text-gray-700 hover:bg-gray-100 flex items-center justify-center">
              ${it.quantity === 1 ? '<i class="fa-solid fa-trash text-[10px] text-red-500"></i>' : '-'}
            </button>
            <span class="w-7 text-center font-black text-xs text-gray-900">${it.quantity}</span>
            <button onclick="changeCartItemQty(${idx}, 1)" class="w-7 h-7 text-xs font-bold text-gray-700 hover:bg-gray-100 flex items-center justify-center">+</button>
          </div>
          <span class="text-[10px] text-gray-500">c/u $${it.price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  `).join("");

  document.getElementById("cart-summary-total").textContent = `$${total.toFixed(2)}`;
}

function changeCartItemQty(index, delta) {
  if (state.cart[index]) {
    const newQty = state.cart[index].quantity + delta;
    if (newQty <= 0) {
      state.cart.splice(index, 1);
    } else {
      state.cart[index].quantity = newQty;
    }
    saveCartToStorage();
    updateCartUI();
  }
}

function clearCart() {
  if (confirm("¿Deseas vaciar todos los productos de tu pedido?")) {
    state.cart = [];
    saveCartToStorage();
    updateCartUI();
  }
}

function openCartDrawer() {
  const drawer = document.getElementById("cart-drawer");
  drawer.classList.add("active");
  document.getElementById("modal-backdrop").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCartDrawer() {
  const drawer = document.getElementById("cart-drawer");
  drawer.classList.remove("active");
  document.getElementById("modal-backdrop").classList.remove("active");
  document.body.style.overflow = "";
}

// =============================================================================
// 8. GENERACIÓN DE MENSAJE Y ENVÍO POR WHATSAPP
// =============================================================================
function sendOrderToWhatsApp() {
  if (state.cart.length === 0) return;

  const nameInput = document.getElementById("checkout-name");
  const phoneInput = document.getElementById("checkout-phone");
  const addressInput = document.getElementById("checkout-address");
  const paymentSelect = document.getElementById("checkout-payment");

  const name = nameInput ? nameInput.value.trim() : "";
  const phone = phoneInput ? phoneInput.value.trim() : "";
  const address = addressInput ? addressInput.value.trim() : "";
  const payment = paymentSelect ? paymentSelect.value : "Efectivo";

  if (!name) {
    alert("Por favor ingresa tu nombre para el pedido.");
    if (nameInput) nameInput.focus();
    return;
  }

  const total = state.cart.reduce((sum, it) => sum + (it.price * it.quantity), 0);

  let msg = `🍔 *NUEVO PEDIDO - CARBOBURGUER* 🍔\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `👤 *Cliente:* ${name}\n`;
  if (phone) msg += `📞 *Teléfono:* ${phone}\n`;
  if (address) msg += `📍 *Dirección / Entrega:* ${address}\n`;
  msg += `💵 *Forma de Pago:* ${payment}\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━━\n\n`;
  msg += `📋 *DETALLE DEL PEDIDO:*\n`;

  state.cart.forEach((it) => {
    msg += `\n▪️ *${it.quantity}x ${it.name}* ($${(it.price * it.quantity).toFixed(2)})\n`;
    if (it.customizations && it.customizations.length > 0) {
      it.customizations.forEach(c => {
        msg += `   └ ${c}\n`;
      });
    }
  });

  msg += `\n━━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `*TOTAL A PAGAR:* $${total.toFixed(2)} MXN\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `💬 _Enviado desde el Menú Digital Carboburguer_`;

  const encodedMsg = encodeURIComponent(msg);
  const whatsappUrl = `https://wa.me/${state.whatsappPhone}?text=${encodedMsg}`;

  window.open(whatsappUrl, "_blank");
}

// =============================================================================
// 9. MODAL DE INFORMACIÓN DE LA EMPRESA ("VER MÁS")
// =============================================================================
function openStoreInfoModal() {
  const modal = document.getElementById("store-info-modal");
  modal.classList.add("active");
  document.getElementById("modal-backdrop").classList.add("active");
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
      closeCartDrawer();
      closeStoreInfoModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeProductModal();
      closeCartDrawer();
      closeStoreInfoModal();
    }
  });
}
