/*
  Animations JavaScript File
  RK Corporation - IT Hardware Business Website
*/

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
  // Initialize scroll animations
  initScrollAnimations();
  
  // Add hover effects to product cards
  addProductCardEffects();
});

// Initialize Scroll Animations
function initScrollAnimations() {
  // Elements to animate on scroll
  const animatedElements = document.querySelectorAll(
    '.section-header, .product-card, .about-content, .contact-card, .testimonial-card'
  );
  
  // Create Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        // Unobserve after animation is triggered once
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null, // viewport
    threshold: 0.1, // trigger when 10% of the element is visible
    rootMargin: '0px 0px -50px 0px' // slightly above the bottom of the viewport
  });
  
  // Observe each element
  animatedElements.forEach(element => {
    // Add initial state class
    element.classList.add('animate-on-scroll');
    // Start observing
    observer.observe(element);
  });
}

// Add hover effects to product cards
function addProductCardEffects() {
  const productCards = document.querySelectorAll('.product-card');
  
  productCards.forEach(card => {
    // Add mouse tracking hover effect
    card.addEventListener('mousemove', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left; // x position within the element
      const y = e.clientY - rect.top; // y position within the element
      
      // Calculate rotation values (max 5 degrees)
      const xRotation = ((y - rect.height / 2) / rect.height) * -5;
      const yRotation = ((x - rect.width / 2) / rect.width) * 5;
      
      // Apply transform
      this.style.transform = `perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale(1.02)`;
    });
    
    // Reset transform on mouse leave
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
  });
}

// Add styles for scroll animations
document.addEventListener('DOMContentLoaded', function() {
  // Create and append style element
  const styleElement = document.createElement('style');
  styleElement.textContent = `
    /* Scroll Animation Styles */
    .animate-on-scroll {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .animate-on-scroll.animated {
      opacity: 1;
      transform: translateY(0);
    }
    
    /* Staggered animations for grid items */
    .products-grid .product-card.animate-on-scroll:nth-child(1) { transition-delay: 0.1s; }
    .products-grid .product-card.animate-on-scroll:nth-child(2) { transition-delay: 0.2s; }
    .products-grid .product-card.animate-on-scroll:nth-child(3) { transition-delay: 0.3s; }
    .products-grid .product-card.animate-on-scroll:nth-child(4) { transition-delay: 0.4s; }
    .products-grid .product-card.animate-on-scroll:nth-child(5) { transition-delay: 0.5s; }
    .products-grid .product-card.animate-on-scroll:nth-child(6) { transition-delay: 0.6s; }
    .products-grid .product-card.animate-on-scroll:nth-child(7) { transition-delay: 0.7s; }
    .products-grid .product-card.animate-on-scroll:nth-child(8) { transition-delay: 0.8s; }
    
    /* Pulse animation for hot deal badge */
    .hot-deal-badge {
      animation: pulsate 2s infinite;
    }
    
    @keyframes pulsate {
      0% { transform: scale(1); }
      50% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }
    
    /* Shimmer effect for product cards */
    .product-card::after {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 50%;
      height: 100%;
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.3) 50%,
        rgba(255, 255, 255, 0) 100%
      );
      transform: skewX(-25deg);
      transition: all 0.75s;
      pointer-events: none;
      opacity: 0;
    }
    
    .product-card:hover::after {
      left: 150%;
      opacity: 1;
    }
  `;
  
  document.head.appendChild(styleElement);
});