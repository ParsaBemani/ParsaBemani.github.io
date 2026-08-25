/* ==========================================================================
   SITE JAVASCRIPT
   A few small, independent features. Each one quietly does nothing if the
   elements it needs aren't on the current page, so this single file can be
   loaded everywhere.

   1. Mobile menu toggle
   2. Header height -> --header-h (parks the sticky section nav)
   3. Masters section-nav Courses dropdown
   4. Courses wheel menu (home page and Masters hub)
   5. Footer year
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
     2. HEADER HEIGHT -> --header-h
     The Masters section nav is sticky and has to park exactly under the
     sticky header. Rather than hard-coding that height in the CSS and
     hoping it never changes, measure the real header and publish it as a
     custom property. style.css falls back to 67px if this never runs.
     ------------------------------------------------------------------ */

  var siteHeader = document.querySelector('.site-header');

  if (siteHeader) {
    var syncHeaderHeight = function () {
      var h = Math.round(siteHeader.getBoundingClientRect().height);
      document.documentElement.style.setProperty('--header-h', h + 'px');
    };

    syncHeaderHeight();
    window.addEventListener('resize', syncHeaderHeight);
  }


  /* ------------------------------------------------------------------
     3. MASTERS SECTION-NAV COURSES DROPDOWN
     The Courses item in the Masters sub-navigation bar. Three separate
     menus can be on screen at once (main mobile nav, this, and the
     Courses wheel), so each uses its own selectors and its own state —
     nothing here touches the other two.
     ------------------------------------------------------------------ */

  var subnavToggle = document.querySelector('.subnav-toggle');
  var subnavMenu = document.getElementById('subnav-courses');

  if (subnavToggle && subnavMenu) {

    var setSubnavMenu = function (open) {
      subnavToggle.setAttribute('aria-expanded', String(open));
      subnavMenu.hidden = !open;
    };

    subnavToggle.addEventListener('click', function (event) {
      event.stopPropagation();  // don't trip the outside-click handler below
      // Shut the Courses wheel if it's open, so only one menu shows at a
      // time. setCourseWheel is declared further down; by the time a click
      // can happen it has been assigned.
      if (typeof setCourseWheel === 'function') { setCourseWheel(false); }
      setSubnavMenu(subnavToggle.getAttribute('aria-expanded') !== 'true');
    });

    // Clicking a course link inside shouldn't close the menu before the
    // browser has started navigating.
    subnavMenu.addEventListener('click', function (event) {
      event.stopPropagation();
    });

    document.addEventListener('click', function () {
      setSubnavMenu(false);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        setSubnavMenu(false);
        subnavToggle.focus();
      }
    });
  }


  /* ------------------------------------------------------------------
     4. COURSES WHEEL (home page and Masters hub)
     Clicking the Courses tile fans three slots out from its centre, evenly
     spaced 120° apart. The hub doubles as the close button. Also closes
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
      // Shut the section-nav dropdown if it's open — same reason as above.
      if (typeof setSubnavMenu === 'function') { setSubnavMenu(false); }
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
     5. FOOTER YEAR
     Keeps the copyright year current without editing every page.
     ------------------------------------------------------------------ */

  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

});
