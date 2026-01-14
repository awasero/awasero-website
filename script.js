// JavaScript for Awasero

document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuLinks = mobileMenu.querySelectorAll('a');
  
  mobileMenuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('translate-x-full');
  });
  
  // Close mobile menu when clicking a link
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('translate-x-full');
    });
  });
  
  // Intersection Observer for scroll animations
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
  
  // Observe all sections
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(section);
  });
  
  // Smooth scroll for navigation links
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        const offset = 80; // Account for fixed nav
        const targetPosition = target.offsetTop - offset;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Add scroll effect to navigation
  const nav = document.querySelector('nav');
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      nav.classList.add('shadow-lg');
    } else {
      nav.classList.remove('shadow-lg');
    }
    
    lastScroll = currentScroll;
  });
  
  // Animate numbers when in view
  const animateNumbers = () => {
    const numbers = document.querySelectorAll('[data-count]');
    
    numbers.forEach(number => {
      const target = parseInt(number.getAttribute('data-count'));
      const duration = 2000;
      const increment = target / (duration / 16);
      let current = 0;
      
      const updateNumber = () => {
        current += increment;
        if (current < target) {
          number.textContent = Math.floor(current);
          requestAnimationFrame(updateNumber);
        } else {
          number.textContent = target;
        }
      };
      
      updateNumber();
    });
  };
  
  // SEO-friendly console message
  console.log(
    '%cAwasero - Venture Software House',
    'color: #D4AF37; font-size: 24px; font-weight: bold;'
  );
  console.log(
    '%cPartnering with non-technical founders to build equity-based tech companies',
    'color: #888; font-size: 14px;'
  );
  console.log(
    '%cInterested in partnering? Email us at partners@awasero.com',
    'color: #D4AF37; font-size: 12px;'
  );
});