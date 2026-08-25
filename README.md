# Portfolio site

Plain HTML, CSS and JavaScript. No frameworks, no build step — open any `.html`
file in a browser and it works.

## Files

Top-level nav: **Home · About · Education · Research · Involvement ·
Upcoming Works · Contact**

```
index.html            Home — hero, "Who am I?", Education, Recent Activities
about.html            Long-form biography
education.html        Chooser page: one card per university
research.html         Every research project, linking out to full write-ups
involvement.html      Volunteering, extracurriculars, athletics
looking-ahead.html    Upcoming Works — community rotation with PSSO
contact.html          Email, university address, LinkedIn / CV

masters.html          Masters hub — reached from Education > "More information"
  lab-bootcamp.html     Basic science rotation — two timelines, one per wet-lab
                        technique track (RT-qPCR, Western Blot)
  capstone.html         Parkinson's diagnosis capstone
  seminars.html         Friday seminar series entries
  courses/
    sci-comm.html       Scientific Communication + instructor thank-you
    ethics.html         Academic Integrity (placeholder for now)
    sci-policy.html     Science Policy

uoft.html            UofT hub — reached from Education > "More information"
                       degree & distinctions, graduation photo, research write-up

files/                 Downloadable documents (e.g. the UofT research report)
images/                Photos (e.g. the UofT graduation photo)
css/style.css          All styling, in numbered sections
js/main.js             Mobile menu, Courses wheel, journey-map accordion
```

**How the Masters and UofT hubs work.** Everything belonging to a specific
degree sits behind its own hub page rather than in the top nav — `masters.html`
for the MSc, `uoft.html` for the undergrad. You reach each one from its
Education entry on the home page via the "More information" button. Pages
under a hub are indented above to show the hierarchy — they're still ordinary
files in the root folder, not subfolders. Each carries a breadcrumb
(`Education › Masters › This page`) and marks **Education** as the active nav
item. `looking-ahead.html` is the one exception: it's linked from the Masters
hub (the rotation runs with the capstone team) but is also its own top-level
nav item, so it has no breadcrumb and marks itself active rather than
Education.

**Adding the UofT research report and graduation photo.** Both have their own
placeholder with copy-paste-ready instructions: see `files/README.md` for the
PDF and `images/README.md` for the photo. Once either is in place, update the
matching `.todo` block in `uoft.html`.

**Adding another research entry.** `research.html` uses the same entry-list
pattern as Involvement — copy a whole `<li class="entry">` block. Point its
link at a detail page, or a section id on one (like `uoft.html#research`) if
the full write-up lives elsewhere.

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
without a web server, but it means a nav change has to be copied into all 16
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
them. This section is separate from `education.html` — update both if you add
a school.

**Turning a blank Courses-wheel slot into a real course:** the "Courses" tile on
the home page opens a radial wheel with six fixed hexagon slots — the three real
courses on top, three open "TODO" slots on the bottom. To fill one in, find its
`<span class="wheel-item wheel-item--empty wheel-pos-...">` in `index.html`,
change the `<span>` to an `<a href="courses/your-page.html">`, swap in a real
icon, and update the label. The layout is a fixed hexagon (not an auto-growing
list), so a 7th course needs a new position class — ask Claude Code for that one.

**The Education tab** goes to `education.html`, a chooser with one large card per
university that links through to `masters.html` and `uoft.html`. The Education
section on the home page is separate and still there — it covers the same two
degrees in a more compact form. Breadcrumbs on pages under a degree point back
to `education.html`.

**About the university emblems:** the coloured monogram badges on
`education.html` are custom placeholders, not official logos. Both universities
license their marks and restrict third-party use, so the real logos are not
bundled with this site. To use one, download it from the university's brand or
media-relations page and follow the instructions in the comment above the
university cards in `education.html`. The brand colours used are the official
ones: Western Purple `#4F2683` and U of T Blue `#1E3765`.

**The Courses wheel appears on two pages** — the home page and `masters.html` —
using identical markup, with three slots evenly spaced 120° apart. Its script
(`js/main.js`, section 4) looks up a single `.course-trigger` and
`#courses-wheel`, so exactly one instance per page works; adding a second to the
same page would need the script generalised first. If you add a course, update
the wheel in **both** files — and note that a fourth item breaks the even
120° spacing, so the positions need recalculating.

**The Masters section nav** (`.subnav`) is a second-level bar that appears only
on `masters.html` and the seven pages inside it. It is deliberately styled to
look subordinate to the main nav — tinted bar, smaller type, pill-shaped active
marker instead of an underline — and uses its own `.subnav-*` class names and
its own script (`js/main.js`, section 3) so it cannot collide with the main
mobile menu or the Courses wheel. Opening either menu closes the other. To add
a page to it, edit the `<nav class="subnav">` block in each of those eight
files; pages in `courses/` use the `../` variant.

**Lab Bootcamp is two separate timelines, not one merged diagram.** Labs
2–6 (RT-qPCR) and Labs 7–9 (Western Blot) each get their own `.lab-track`,
scoped to a colour via `--track-color`. Every point is a lab number, a
one-word objective `.lab-timeline-tag`, a title, and a line or two on what
was done and why — no long per-session write-up. The old
`journal-club.html` is a redirect stub — delete it once nothing points at it.

**Adding a lab to a timeline:** copy a whole `<li>` inside the relevant
`.lab-timeline` list in `lab-bootcamp.html`. Styles are in section 11 of
`css/style.css` — note the class is `.lab-timeline`, not `.timeline`, which
the capstone page already uses.

**Journal Club is its own section at the bottom of the Lab Bootcamp page**,
with a horizontally scroll-snapping carousel of citation cards — title,
authors, journal — each linking out to the article's official page (DOI/
publisher/PubMed). There are no hosted PDFs or page images: these are
copyrighted journal articles and this site is public, so `Lab Bootcamp/` in
the project root (the source PDFs) is gitignored and never committed. One
"View this article" link below the strip follows whichever card is
scrolled to — see `js/main.js` section 5. To add a paper: copy a whole
`<li class="journal-card">` in the carousel, keeping `data-href` and
`data-title` in sync with its content. The old `journal-club.html` is a
redirect stub — delete it once nothing points at it.

**The Masters section nav order is fixed:** Overview, Courses, Lab Bootcamp,
Seminars, Capstone. It is repeated in all seven pages under the
Masters hub (`masters.html`, `lab-bootcamp.html`, `seminars.html`,
`capstone.html`, and the three under `courses/`), so a change has to be copied
into every one. Pages in `courses/` prefix the out-of-folder links with `../`
and mark the Courses *toggle* active rather than a link.
