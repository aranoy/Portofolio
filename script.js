// Smooth scroll behavior
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

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
    
    // Create message for WhatsApp
    const whatsappMessage = `Halo Adam, nama saya ${name}. Email: ${email}. Pesan: ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappLink = `https://wa.me/6285156965265?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappLink, '_blank');
    
    // Reset form
    this.reset();
    
    // Show success message
    alert('Pesan akan dikirim ke WhatsApp Anda. Terima kasih!');
});

// Navbar active link highlight
window.addEventListener('scroll', () => {
    let current = '';
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = '#00a8e8';
        } else {
            link.style.color = '';
        }
    });
});

// Add fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards and contact cards
document.querySelectorAll('.service-card, .contact-card, .experience-list li').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Mobile menu toggle (if needed in future)
const navLinks = document.querySelector('.nav-links');
const handleNavClick = (e) => {
    if (e.target.tagName === 'A') {
        // Close menu if needed
    }
};

navLinks.addEventListener('click', handleNavClick);

// Add animation to hero elements
window.addEventListener('load', () => {
    const heroElements = document.querySelectorAll('.hero-text h1, .hero-subtitle, .hero-desc, .btn, .profile-circle');
    heroElements.forEach((el, index) => {
        el.style.animation = `slideInLeft 0.8s ease ${index * 0.1}s both`;
    });
});

console.log('Portfolio website loaded successfully!');
