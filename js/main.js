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

  // === Zoho Web-to-Lead Form Submit (full page POST to Zoho) ===
  function wireZohoForm(formId) {
    var form = document.getElementById(formId);
    if (!form) { return; }

    form.addEventListener('submit', function(e) {
      // Honeypot 1: our own field named "website"
      var honeypot1 = form.querySelector('input[name="website"]');
      if (honeypot1 && honeypot1.value) { e.preventDefault(); return; }
      // Honeypot 2: Zoho's field named "aG9uZXlwb3Q" (must stay empty)
      var honeypot2 = form.querySelector('input[name="aG9uZXlwb3Q"]');
      if (honeypot2 && honeypot2.value) { e.preventDefault(); return; }

      // No preventDefault on a clean submit: the form posts as a full page POST
      // to Zoho, and Zoho's own redirect to returnURL is the only success signal.
    });
  }

  wireZohoForm('quote-form');
  wireZohoForm('contact-form');

  // === This Week in the Field (reads from /field-log.json) ===
  var fieldLogGrid = document.getElementById('field-log-grid');
  if (fieldLogGrid) {
    fetch('/field-log.json', { cache: 'no-store' })
      .then(function(res) {
        if (!res.ok) { throw new Error('field-log.json request failed: ' + res.status); }
        return res.json();
      })
      .then(function(entries) {
        if (!Array.isArray(entries) || entries.length === 0) {
          fieldLogGrid.innerHTML = '<p class="text-muted text-center" style="grid-column:1/-1;">No field notes posted yet. Check back soon.</p>';
          return;
        }
        fieldLogGrid.innerHTML = entries.map(function(entry) {
          var title = entry.title || entry.neighborhood || 'TODO';
          var finding = entry.finding || 'TODO';
          var photo = entry.photo || '';
          var isTodo = /^TODO/i.test(title) || /^TODO/i.test(finding);
          var imgHtml = photo && !/^TODO/i.test(photo)
            ? '<img class="service-card-img" src="/images/field/' + photo + '" alt="Field photo: ' + title + '" loading="lazy">'
            : '<div class="service-card-img" style="display:flex;align-items:center;justify-content:center;color:var(--color-muted);font-family:var(--font-body);font-size:0.85rem;">' + (isTodo ? 'Photo pending' : '') + '</div>';
          return '<div class="service-card">' + imgHtml +
            '<div class="service-card-body"><h3>' + title + '</h3><p>' + finding + '</p></div></div>';
        }).join('');
      })
      .catch(function() {
        fieldLogGrid.innerHTML = '<p class="text-muted text-center" style="grid-column:1/-1;">Field notes are temporarily unavailable.</p>';
      });
  }
});
