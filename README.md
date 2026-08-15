# Portfolio site

Plain HTML, CSS and JavaScript. No frameworks, no build step — open any `.html`
file in a browser and it works.

## Files

```
index.html            Home — hero + "currently" blurb + section links
lab-bootcamp.html     Two-lane journey map of the wet-lab sessions
capstone.html         Parkinson's diagnosis capstone (overview, team, timeline…)
looking-ahead.html    Community rotation with PSSO
seminars.html         Friday seminar series entries
courses/
  sci-comm.html       Scientific Communication + instructor thank-you
  ethics.html         Ethics (placeholder for now)
  sci-policy.html     Science Policy
css/style.css         All styling, in numbered sections
js/main.js            Nav dropdown, mobile menu, journey-map accordion
```

## Things you'll want to change

**Your program and tagline.** The home page hero still has two placeholders:
`[Your Program / University]` and `[One-line tagline ...]`. Both are in
`index.html`, near the top of the `<section class="hero">` block. (Your name is
already filled in across all eight pages.)

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
without a web server, but it means a nav change has to be copied into all eight
files. Two details to keep right:

- Pages inside `courses/` prefix every link with `../` (e.g. `../index.html`).
- The current page's nav link carries `class="nav-link is-active"` and
  `aria-current="page"`. On the three course pages, the `Courses` button gets
  `is-active` instead.

**Adding a stop to the Lab Bootcamp map:** copy one `<li>` from the `.stops` list
and one `<article class="stop-panel">` block, then give them a new matching id —
the button's `aria-controls` must equal the panel's `id`. The connecting line and
spacing adjust on their own. Icons come from the sprite at the top of
`lab-bootcamp.html`; reuse one with `<use href="#icon-dna">`.
