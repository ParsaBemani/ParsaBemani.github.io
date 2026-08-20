# images/

Photos and logos go here.

## The two university logo banners

```
images/uwo-logo.png    Schulich Medicine & Dentistry — colours inverted
                        (purple background, white mark) from the original
                        logo file, which was purple-on-white
images/uoft-logo.jpeg   University of Toronto crest + wordmark
```

These display as a short banner strip across the top of each card on
`education.html` (`.uni-banner` in `css/style.css`), using `object-fit:
contain` at a fixed height — the whole logo always stays visible, nothing
gets cropped, however short the strip is.

`western-schulich.png` and `uoft-arts-science.png` are the earlier pair of
logo images, no longer referenced by any page. They're left in this folder
rather than deleted, in case you want to switch back.

**If you replace either file:** update its `--uni` colour to match
(`.uni-card--western` / `.uni-card--toronto` in `css/style.css`). The banner
background is set to the image's own background colour, not the school's
printed brand hex — the two aren't always the same. If they don't match,
you'll see a visible seam where the logo's background meets the letterbox
around it. Sample a pixel from the image's own left/right edge specifically
(that's the boundary that actually touches the letterbox) rather than just
a corner — the U of T image has a faint gradient, so a corner-only sample
was visibly off on one side.

## Still to add

**UofT graduation photo:** save it here (e.g. `uoft-graduation.jpg`), then in
`uoft.html` find the `.photo-placeholder` under the "Graduation" heading and
replace it with:

```html
<img src="images/uoft-graduation.jpg" alt="Parsa Bemani at UofT graduation, June 2025">
```

Keep filenames lowercase with hyphens, no spaces. Compress large photos before
adding them (under ~500KB each) so the site stays fast to load.
