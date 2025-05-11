/*
  Main JavaScript File
  RK Corporation - IT Hardware Business Website
*/

// DOM Elements
const header = document.getElementById('main-header');
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');
const contactForm = document.getElementById('contact-form');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  // Apply scrolled class to header if page is refreshed while scrolled down
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  }
  
  // Initialize testimonial slider
  initTestimonialSlider();
});

// Handle scroll events for the header
window.addEventListener('scroll', function() {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Mobile menu toggle
if (menuToggle) {
  menuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
  });
}

// Close mobile menu when clicking a nav link
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    menuToggle.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.classList.remove('no-scroll');
  });
});

// Set active nav link based on scroll position
window.addEventListener('scroll', function() {
  let current = '';
  const sections = document.querySelectorAll('section');
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (window.scrollY >= (sectionTop - 200)) {
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

// Contact form submission
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = this.querySelector('#name').value;
    const email = this.querySelector('#email').value;
    const phone = this.querySelector('#phone').value;
    const product = this.querySelector('#product').value;
    const message = this.querySelector('#message').value;
    
    // Here you would normally send the form data to a server
    // For GitHub Pages, you might want to use a form service like Formspree
    
    console.log({name, email, phone, product, message});
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    this.reset();
  });
}

// Testimonial slider functionality
function initTestimonialSlider() {
  const testimonials = document.querySelectorAll('.testimonial-card');
  const dots = document.querySelectorAll('.dot');
  let currentSlide = 0;
  
  // Hide all testimonials except the first one
  testimonials.forEach((testimonial, index) => {
    if (index !== 0) {
      testimonial.style.transform = 'translateX(100%)';
    }
  });
  
  // Function to show a specific slide
  function showSlide(index) {
    testimonials.forEach((testimonial, i) => {
      if (i === index) {
        testimonial.style.transform = 'translateX(0)';
      } else if (i < index) {
        testimonial.style.transform = 'translateX(-100%)';
      } else {
        testimonial.style.transform = 'translateX(100%)';
      }
    });
    
    // Update active dot
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
    
    currentSlide = index;
  }
  
  // Add click event to dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
    });
  });
  
  // Auto-advance slides every 5 seconds
  setInterval(() => {
    let nextSlide = (currentSlide + 1) % testimonials.length;
    showSlide(nextSlide);
  }, 5000);
}