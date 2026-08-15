/* ==========================================================================
   SITE JAVASCRIPT
   Three small, independent features. Each one quietly does nothing if the
   elements it needs aren't on the current page, so this single file can be
   loaded everywhere.

   1. Mobile menu toggle
   2. "Courses" dropdown (click to open; CSS handles hover on desktop)
   3. Lab Bootcamp journey-map accordion
   4. Footer year
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* ------------------------------------------------------------------
     1. MOBILE MENU TOGGLE
     Shows/hides the nav below 900px wide (see the media query in style.css).
     ------------------------------------------------------------------ */

  var navToggle = document.querySelector('.nav-toggle');
  var siteNav = document.querySelector('.site-nav');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = siteNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }


  /* ------------------------------------------------------------------
     2. COURSES DROPDOWN
     On desktop the menu also opens on hover (pure CSS). This adds click
     support so it works on touch screens and for keyboard users.
     ------------------------------------------------------------------ */

  var dropdownToggle = document.querySelector('.dropdown-toggle');

  if (dropdownToggle) {
    dropdownToggle.addEventListener('click', function (event) {
      event.stopPropagation(); // don't immediately trigger the outside-click close
      var isOpen = dropdownToggle.getAttribute('aria-expanded') === 'true';
      dropdownToggle.setAttribute('aria-expanded', String(!isOpen));
    });

    // Click anywhere else on the page closes the menu.
    document.addEventListener('click', function () {
      dropdownToggle.setAttribute('aria-expanded', 'false');
    });

    // Escape closes the menu and returns focus to the button.
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        dropdownToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }


  /* ------------------------------------------------------------------
     3. LAB BOOTCAMP JOURNEY MAP
     Each stop button has aria-controls="<panel id>". Clicking a stop opens
     its panel and closes any other open stop *in the same lane*, so the two
     tracks can be read side by side.
     ------------------------------------------------------------------ */

  var stopButtons = document.querySelectorAll('.stop-btn');

  stopButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var panel = document.getElementById(button.getAttribute('aria-controls'));
      if (!panel) return;

      var isOpen = button.getAttribute('aria-expanded') === 'true';
      var lane = button.closest('.lane');

      // Close every stop in this lane first.
      lane.querySelectorAll('.stop-btn').forEach(function (other) {
        other.setAttribute('aria-expanded', 'false');
      });
      lane.querySelectorAll('.stop-panel').forEach(function (otherPanel) {
        otherPanel.hidden = true;
      });

      // Then open the clicked one — unless it was already open (toggle shut).
      if (!isOpen) {
        button.setAttribute('aria-expanded', 'true');
        panel.hidden = false;
      }
    });
  });


  /* ------------------------------------------------------------------
     4. FOOTER YEAR
     Keeps the copyright year current without editing every page.
     ------------------------------------------------------------------ */

  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

});
