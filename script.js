// ==================== LOADER ====================
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 2000);
});

// ==================== MOBILE NAVIGATION ====================
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// ==================== REGISTRATION MODAL ====================
const registerBtn = document.getElementById('registerBtn');
const modal = document.getElementById('registrationModal');
const closeBtn = document.querySelector('.close');

if (registerBtn) {
    registerBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });
}

if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// ==================== FORM SUBMISSIONS ====================
const registrationForm = document.getElementById('registrationForm');
if (registrationForm) {
    registrationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for registering! We will contact you soon.');
        modal.style.display = 'none';
        registrationForm.reset();
    });
}

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Newsletter form
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for subscribing to our newsletter!');
        newsletterForm.reset();
    });
}

// ==================== SCROLL ANIMATIONS ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// ==================== SMOOTH SCROLL FOR NAVIGATION ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== NAVBAR BACKGROUND ON SCROLL ====================
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(0, 0, 0, 0.98)';
        navbar.style.boxShadow = '0 5px 20px rgba(158, 255, 0, 0.2)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(158, 255, 0, 0.1)';
    }
});

// ==================== PRODUCT BUTTONS ====================
const productButtons = document.querySelectorAll('.product-btn');
productButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Product added to cart!');
    });
});

// ==================== PACKAGE BUTTONS ====================
const packageButtons = document.querySelectorAll('.package-btn');
packageButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Thank you for your interest! Please contact us to complete your registration.');
    });
});

// ==================== MARQUEE DUPLICATION FOR SEAMLESS LOOP ====================
const marqueeContent = document.querySelector('.marquee-content');
if (marqueeContent) {
    const clone = marqueeContent.cloneNode(true);
    marqueeContent.parentElement.appendChild(clone);
}

// ==================== ACTIVE PAGE HIGHLIGHTING ====================
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});

// ==================== FEATURE CARD ANIMATIONS ====================
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transition = 'all 0.3s ease';
    });
});

// ==================== SCROLL TO TOP FUNCTIONALITY ====================
let scrollTimeout;
window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        // Add any scroll-based functionality here
    }, 100);
});

// ==================== PREVENT TRANSITIONS ON PAGE LOAD ====================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ==================== LAZY LOADING FOR IMAGES ====================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img').forEach(img => {
        imageObserver.observe(img);
    });
}

// ==================== ANIMATION ON SCROLL ====================
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.trainer-card, .product-card, .package-card, .benefit-item');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// ==================== CONSOLE MESSAGE ====================
console.log('%cCAMPFIT', 'color: #9EFF00; font-size: 40px; font-weight: bold;');
console.log('%cBuild Your Body Into A Healthy And Strong Body', 'color: #9EFF00; font-size: 16px;');
