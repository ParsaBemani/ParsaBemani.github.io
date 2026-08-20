# images/

Photos and logos go here.

## The two university logo banners

```
images/uwo-logo.png    Schulich Medicine & Dentistry — colours inverted
                        (purple background, white mark) from the original
                        logo file, which was purple-on-white
images/uoft-logo.png    University of Toronto crest + wordmark, converted
                        from the original .avif upload
```

These display as a short banner strip across the top of each card on
`education.html` (`.uni-banner` in `css/style.css`), using `object-fit:
contain` at a fixed height — the whole logo always stays visible, nothing
gets cropped, however short the strip is. Both files have a solid, flat
background colour (no gradient), so the letterbox is a perfect match with
no visible seam.

`western-schulich.png`, `uoft-arts-science.png` and `uoft-logo.jpeg` are
earlier logo images, no longer referenced by any page. They're left in this
folder rather than deleted, in case you want to switch back.

**If you replace either file:** update its `--uni` colour to match
(`.uni-card--western` / `.uni-card--toronto` in `css/style.css`). The banner
background is set to the image's own background colour, not the school's
printed brand hex — the two aren't always the same. If they don't match,
you'll see a visible seam where the logo's background meets the letterbox
around it. Sample a few points across the image (corners, edges, centre) to
check it's actually flat before picking one colour — some logo exports have
a faint gradient, which no single flat colour can match perfectly.

## Still to add

**UofT graduation photo:** save it here (e.g. `uoft-graduation.jpg`), then in
`uoft.html` find the `.photo-placeholder` under the "Graduation" heading and
replace it with:

```html
<img src="images/uoft-graduation.jpg" alt="Parsa Bemani at UofT graduation, June 2025">
```

Keep filenames lowercase with hyphens, no spaces. Compress large photos before
adding them (under ~500KB each) so the site stays fast to load.
