/* ==========================================================================
   SITE JAVASCRIPT
   A few small, independent features. Each one quietly does nothing if the
   elements it needs aren't on the current page, so this single file can be
   loaded everywhere.

   1. Mobile menu toggle
   2. Courses wheel menu on the home page
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
     2. COURSES WHEEL (home page)
     Clicking the Courses tile fans a hexagon of six slots out from its
     centre. The hub in the middle doubles as the close button. Also closes
     on a click elsewhere, on Escape, or on a real course link (after the
     browser has started navigating, so the collapse animation doesn't
     visibly race the page unload).
     ------------------------------------------------------------------ */

  var courseTrigger = document.querySelector('.course-trigger');
  var courseWheel = document.getElementById('courses-wheel');
  var wheelHub = courseWheel && courseWheel.querySelector('.wheel-hub');

  if (courseTrigger && courseWheel) {

    var setCourseWheel = function (open) {
      courseTrigger.setAttribute('aria-expanded', String(open));
      courseWheel.classList.toggle('is-open', open);
    };

    courseTrigger.addEventListener('click', function (event) {
      event.stopPropagation();  // don't trip the outside-click handler below
      setCourseWheel(courseTrigger.getAttribute('aria-expanded') !== 'true');
    });

    // Clicking the hub closes the wheel without navigating anywhere.
    if (wheelHub) {
      wheelHub.addEventListener('click', function (event) {
        event.stopPropagation();
        setCourseWheel(false);
      });
    }

    // Clicking elsewhere inside the wheel (e.g. a course link) shouldn't
    // trip the outside-click handler before the browser can navigate.
    courseWheel.addEventListener('click', function (event) {
      event.stopPropagation();
    });

    document.addEventListener('click', function () {
      setCourseWheel(false);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        setCourseWheel(false);
        courseTrigger.focus();
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
