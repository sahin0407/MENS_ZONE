// ============================================
// MEN'S ZONE – Product Data & Functionality
// ============================================

// Product Data Array
const products = [
    {
        id: 1,
        name: "Slim Fit Yellow Casual Shirt",
        price: "₹899",
        old_price: "₹1,299",
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=520&fit=crop",
        tag: "EXCLUSIVE",
        category: "Shirts"
    },
    {
        id: 2,
        name: "Classic White Oxford Shirt",
        price: "₹999",
        old_price: "₹1,499",
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=520&fit=crop",
        tag: "NEW",
        category: "Shirts"
    },
    {
        id: 3,
        name: "Premium Black Crew Neck T-Shirt",
        price: "₹599",
        old_price: "₹999",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=520&fit=crop",
        tag: "EXCLUSIVE",
        category: "T-Shirts"
    },
    {
        id: 4,
        name: "Dark Wash Slim Fit Jeans",
        price: "₹1,499",
        old_price: "₹2,199",
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=520&fit=crop",
        tag: "NEW",
        category: "Jeans"
    },
    {
        id: 5,
        name: "Navy Blue Checkered Shirt",
        price: "₹849",
        old_price: "₹1,399",
        image: "https://images.unsplash.com/photo-1588359348347-9bc6cbbb689e?w=400&h=520&fit=crop",
        tag: "EXCLUSIVE",
        category: "Shirts"
    },
    {
        id: 6,
        name: "Olive Green Polo T-Shirt",
        price: "₹699",
        old_price: "₹1,099",
        image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=520&fit=crop",
        tag: "NEW",
        category: "T-Shirts"
    },
    {
        id: 7,
        name: "Light Blue Distressed Jeans",
        price: "₹1,299",
        old_price: "₹1,999",
        image: "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=400&h=520&fit=crop",
        tag: "EXCLUSIVE",
        category: "Jeans"
    },
    {
        id: 8,
        name: "Striped Casual Linen Shirt",
        price: "₹949",
        old_price: "₹1,599",
        image: "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=400&h=520&fit=crop",
        tag: "NEW",
        category: "Shirts"
    },
    {
        id: 9,
        name: "White Graphic Print T-Shirt",
        price: "₹549",
        old_price: "₹899",
        image: "https://images.unsplash.com/photo-1622445275576-721325763afe?w=400&h=520&fit=crop",
        tag: "EXCLUSIVE",
        category: "T-Shirts"
    },
    {
        id: 10,
        name: "Black Skinny Fit Jeans",
        price: "₹1,399",
        old_price: "₹2,099",
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=520&fit=crop",
        tag: "NEW",
        category: "Jeans"
    },
    {
        id: 11,
        name: "Maroon Mandarin Collar Shirt",
        price: "₹1,099",
        old_price: "₹1,699",
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=520&fit=crop",
        tag: "EXCLUSIVE",
        category: "Shirts"
    },
    {
        id: 12,
        name: "Grey Melange V-Neck T-Shirt",
        price: "₹499",
        old_price: "₹799",
        image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=400&h=520&fit=crop",
        tag: "NEW",
        category: "T-Shirts"
    },
    {
        id: 13,
        name: "Tapered Fit Cargo Jeans",
        price: "₹1,599",
        old_price: "₹2,499",
        image: "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?w=400&h=520&fit=crop",
        tag: "EXCLUSIVE",
        category: "Jeans"
    },
    {
        id: 14,
        name: "Pastel Pink Casual Shirt",
        price: "₹799",
        old_price: "₹1,299",
        image: "https://images.unsplash.com/photo-1598032895397-b9472444bf93?w=400&h=520&fit=crop",
        tag: "NEW",
        category: "Shirts"
    },
    {
        id: 15,
        name: "Oversized Black Drop T-Shirt",
        price: "₹749",
        old_price: "₹1,199",
        image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=520&fit=crop",
        tag: "EXCLUSIVE",
        category: "T-Shirts"
    },
    {
        id: 16,
        name: "Classic Indigo Straight Jeans",
        price: "₹1,199",
        old_price: "₹1,899",
        image: "https://images.unsplash.com/photo-1475178626620-a4d074967571?w=400&h=520&fit=crop",
        tag: "NEW",
        category: "Jeans"
    }
];

// WhatsApp Configuration
const WHATSAPP_NUMBER = "917319452940";
const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

function getWhatsAppLink(productName) {
    const message = productName
        ? `Suroj Bhai, Is this product available? - ${productName}`
        : `Suroj Bhai, Is this product available?`;
    return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
}

// Calculate Discount Percentage
function calcDiscount(price, oldPrice) {
    const current = parseInt(price.replace(/[₹,]/g, ''));
    const old = parseInt(oldPrice.replace(/[₹,]/g, ''));
    if (old > current) {
        return Math.round(((old - current) / old) * 100);
    }
    return 0;
}

// Create Product Card HTML
function createProductCard(product, delay = 0) {
    const discount = calcDiscount(product.price, product.old_price);
    const tagClass = product.tag === "NEW" ? "new" : "exclusive";
    const whatsappLink = getWhatsAppLink(product.name);

    return `
        <div class="product-card" style="animation-delay: ${delay}ms">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <span class="product-tag ${tagClass}">${product.tag}</span>
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">
                    <span class="current-price">${product.price}</span>
                    ${product.old_price ? `<span class="old-price">${product.old_price}</span>` : ''}
                    ${discount > 0 ? `<span class="discount-badge">${discount}% OFF</span>` : ''}
                </div>
                <a href="${whatsappLink}" target="_blank" rel="noopener" class="btn-check">
                    Check Availability
                </a>
            </div>
        </div>
    `;
}

// Render Products to Grid
function renderProducts(container, productList) {
    const grid = document.getElementById(container);
    if (!grid) return;

    grid.innerHTML = '';
    productList.forEach((product, index) => {
        grid.innerHTML += createProductCard(product, index * 80);
    });
}

// Render New Arrivals (products tagged as NEW)
function renderNewArrivals() {
    const newProducts = products.filter(p => p.tag === "NEW").slice(0, 4);
    renderProducts('newArrivalsGrid', newProducts);
}

// Render All Products
function renderAllProducts(category = 'All') {
    let filtered = category === 'All'
        ? products
        : products.filter(p => p.category === category);
    renderProducts('productsGrid', filtered);
}

// Filter Button Logic
function initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const category = btn.dataset.category;
            renderAllProducts(category);
        });
    });
}

// Filter and Scroll (for category cards)
function filterAndScroll(category) {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(b => {
        b.classList.toggle('active', b.dataset.category === category);
    });
    renderAllProducts(category);
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// ============================================
// HEADER - Sticky & Scroll Effect
// ============================================
function initHeader() {
    const header = document.getElementById('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        lastScroll = currentScroll;
    });
}

// ============================================
// MOBILE MENU
// ============================================
function initMobileMenu() {
    const toggle = document.getElementById('menuToggle');
    const navbar = document.getElementById('navbar');
    const overlay = document.getElementById('mobileOverlay');
    const navLinks = document.querySelectorAll('.nav-link');

    function closeMenu() {
        toggle.classList.remove('active');
        navbar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    function openMenu() {
        toggle.classList.add('active');
        navbar.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    toggle.addEventListener('click', () => {
        if (navbar.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    overlay.addEventListener('click', closeMenu);

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
            // Update active state
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
}

// ============================================
// ACTIVE NAV ON SCROLL
// ============================================
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id], div[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ============================================
// SCROLL REVEAL ANIMATION
// ============================================
function initScrollReveal() {
    const revealElements = document.querySelectorAll(
        '.section-header, .category-card, .contact-card, .promo-inner, .visit-store-content'
    );

    revealElements.forEach(el => el.classList.add('reveal'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
}

// ============================================
// NAVIGATION LINKS - Category Sections
// ============================================
function initCategoryNavLinks() {
    const shirtsLink = document.querySelector('a[href="#shirts-section"]');
    const tshirtsLink = document.querySelector('a[href="#tshirts-section"]');
    const jeansLink = document.querySelector('a[href="#jeans-section"]');

    // Handle nav clicks for category filtering
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href === '#shirts-section') {
                e.preventDefault();
                filterAndScroll('Shirts');
            } else if (href === '#tshirts-section') {
                e.preventDefault();
                filterAndScroll('T-Shirts');
            } else if (href === '#jeans-section') {
                e.preventDefault();
                filterAndScroll('Jeans');
            }
        });
    });
}

// ============================================
// INITIALIZE EVERYTHING
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    renderNewArrivals();
    renderAllProducts();
    initFilters();
    initHeader();
    initMobileMenu();
    initScrollSpy();
    initScrollReveal();
    initCategoryNavLinks();
});