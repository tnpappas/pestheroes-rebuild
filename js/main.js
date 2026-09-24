// Pest Heroes - Interactive JS
// Mobile menu, FAQ accordion, form handling

document.addEventListener('DOMContentLoaded', function() {
  // === Mobile Menu Toggle ===
  var menuToggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function() {
      nav.classList.toggle('open');
    });
    // Close menu on link click
    nav.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        nav.classList.remove('open');
      });
    });
  }

  // === FAQ Accordion ===
  document.querySelectorAll('.faq-question').forEach(function(q) {
    q.addEventListener('click', function() {
      var item = q.parentElement;
      var wasOpen = item.classList.contains('open');
      // Close all
      document.querySelectorAll('.faq-item').forEach(function(i) {
        i.classList.remove('open');
      });
      // Toggle current
      if (!wasOpen) {
        item.classList.add('open');
      }
    });
  });

  // === Quote Form Submit ===
  var quoteForm = document.getElementById('quote-form');
  if (quoteForm) {
    quoteForm.addEventListener('submit', function(e) {
      e.preventDefault();
      var success = document.getElementById('form-success');
      if (success) {
        success.classList.add('show');
        quoteForm.style.display = 'none';
        success.scrollIntoView({ behavior: 'smooth' });
      }
      // In production: POST to API endpoint or email service
    });
  }

  // === Contact Form Submit ===
  var contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      var success = document.getElementById('form-success');
      if (success) {
        success.classList.add('show');
        contactForm.style.display = 'none';
      }
    });
  }
});
