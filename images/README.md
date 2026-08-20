# images/

Photos and logos go here.

## The two university logo banners

```
images/western-schulich.png    Schulich Medicine & Dentistry + Western
images/uoft-arts-science.png   University of Toronto, Faculty of Arts & Science
```

These are the real logos, displayed as a short banner strip across the top of
each card on `education.html` (`.uni-banner` in `css/style.css`). It uses
`object-fit: contain` at a fixed height, so the whole logo always stays
visible — nothing gets cropped, however short the strip is.

**If you replace either file:** update its `--uni` colour to match. Each
card's banner background is set to the image's own background colour
(`.uni-card--western` / `.uni-card--toronto` in `css/style.css`), not the
school's printed brand hex — the two aren't always the same, and the U of T
logo here is a good example (its actual background is `#0E285B`, a touch
darker than U of T's official `#1E3765`). If the colours don't match, you'll
see a visible seam where the logo's own background meets the letterbox around
it. Sample the image's corner pixel (any image editor's colour picker works)
and use that exact value.

## Still to add

**UofT graduation photo:** save it here (e.g. `uoft-graduation.jpg`), then in
`uoft.html` find the `.photo-placeholder` under the "Graduation" heading and
replace it with:

```html
<img src="images/uoft-graduation.jpg" alt="Parsa Bemani at UofT graduation, June 2025">
```

Keep filenames lowercase with hyphens, no spaces. Compress large photos before
adding them (under ~500KB each) so the site stays fast to load.
