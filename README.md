# Portfolio site

Plain HTML, CSS and JavaScript. No frameworks, no build step — open any `.html`
file in a browser and it works.

## Files

Top-level nav: **Home · About · Education · Skills · Involvement · Contact**

```
index.html            Home — hero, "Who am I?", Education, Recent Activities
about.html            Long-form biography
skills.html           Lab techniques, grouped by what they're used for
involvement.html      Volunteering, extracurriculars, athletics
contact.html          Email / LinkedIn / CV

masters.html          Masters hub — reached from Education > "More information"
  lab-bootcamp.html     Two-lane journey map of the wet-lab sessions
  capstone.html         Parkinson's diagnosis capstone
  looking-ahead.html    Upcoming Works — community rotation with PSSO
  seminars.html         Friday seminar series entries
  courses/
    sci-comm.html       Scientific Communication + instructor thank-you
    ethics.html         Ethics (placeholder for now)
    sci-policy.html     Science Policy

css/style.css         All styling, in numbered sections
js/main.js            Mobile menu, Courses wheel, journey-map accordion
```

**How the Masters section works.** Everything belonging to the master's program
sits behind `masters.html` rather than in the top nav. You reach it from the
Education section on the home page via the "More information" button. Those
pages are indented above to show the hierarchy — they're still ordinary files in
the root folder, not a subfolder. Each one carries a breadcrumb
(`Education › Masters › This page`) and marks **Education** as the active nav
item. When you build the UofT page later, the same pattern applies: a new
`uoft.html` hub plus a "More information" button on that education entry.

## Things you'll want to change

**Colors and fonts.** Section 1 of `css/style.css` holds every color and size as
a variable. Changing `--accent` there restyles the whole site.

**Anything still to write** is wrapped in a `<div class="todo">` or a
`<span class="todo-inline">`, which renders as a dashed amber box so it's obvious
on the page. Delete the wrapper when you write the real content.

**Photos.** The dashed circles and boxes are `<div class="photo-placeholder">`.
Replace one with `<img src="images/your-photo.jpg" alt="...">` when you have a
picture (make an `images/` folder alongside `css/`).

## Two things to know when editing

**The header and footer are repeated in every page.** That keeps the site working
without a web server, but it means a nav change has to be copied into all 13
files. Three details to keep right:

- Pages inside `courses/` prefix every link with `../` (e.g. `../index.html`).
- The current page's nav link carries `class="nav-link is-active"` and
  `aria-current="page"`.
- On every page under the Masters section, **Education** is the active item
  (without `aria-current`, since that link points at a section on another page).

**Adding a stop to the Lab Bootcamp map:** copy one `<li>` from the `.stops` list
and one `<article class="stop-panel">` block, then give them a new matching id —
the button's `aria-controls` must equal the panel's `id`. The connecting line and
spacing adjust on their own. Icons come from the sprite at the top of
`lab-bootcamp.html`; reuse one with `<use href="#icon-dna">`.

**Adding a school to Education:** the section lives on `index.html` under
`<section id="education">`, newest first. Copy a whole `<li class="edu-item">`
block and edit the fields. The `.edu-detail` line (major/minor) and the
`.edu-honours` chips are both optional — delete either if an entry doesn't need
them. The nav's "Education" link points at `index.html#education`, so it works
from every page.

**Turning a blank Courses-wheel slot into a real course:** the "Courses" tile on
the home page opens a radial wheel with six fixed hexagon slots — the three real
courses on top, three open "TODO" slots on the bottom. To fill one in, find its
`<span class="wheel-item wheel-item--empty wheel-pos-...">` in `index.html`,
change the `<span>` to an `<a href="courses/your-page.html">`, swap in a real
icon, and update the label. The layout is a fixed hexagon (not an auto-growing
list), so a 7th course needs a new position class — ask Claude Code for that one.
