# images/

Photos and logos go here.

## The two university logo banners

```
images/uwo-logo.png    Schulich Medicine & Dentistry — colours inverted
                        (purple background, white mark) from the original
                        logo file, which was purple-on-white
images/uoft-logo.png    University of Toronto crest + wordmark — navy
                        background removed entirely, leaving only the
                        white shapes on a transparent background
```

These display as a short banner strip across the top of each card on
`education.html` (`.uni-banner` in `css/style.css`), using `object-fit:
contain` at a fixed height — the whole logo always stays visible, nothing
gets cropped, however short the strip is.

The two files use different techniques, and the Toronto one is the more
robust of the two:

- **`uwo-logo.png`** is a fully opaque image — the purple is baked into
  every pixel, matched to `--uni`. This works, but relies on that baked-in
  colour and the CSS `--uni` colour staying in agreement.
- **`uoft-logo.png`** has no background of its own at all — it's a
  transparent PNG containing only the white crest and text. `.uni-banner`'s
  `background: var(--uni)` paints through the transparent areas, so the
  entire strip (not just the letterbox) is the exact same single CSS
  colour, with the logo floating on top. There's nothing for a CSS colour
  to seam against, because there's no second colour to begin with.

If you ever see a seam on a card, converting its logo to the transparent
approach (chroma-key out the background, keep only the white content)
removes any chance of a mismatch — matching two colours can be imperfect,
but there's no way to mismatch against nothing.

`western-schulich.png`, `uoft-arts-science.png`, `uoft-logo.jpeg` and
`uoft-logo-opaque.png` are earlier logo versions, no longer referenced by
any page. They're left in this folder rather than deleted, in case you want
to switch back.

## Still to add

**UofT graduation photo:** save it here (e.g. `uoft-graduation.jpg`), then in
`uoft.html` find the `.photo-placeholder` under the "Graduation" heading and
replace it with:

```html
<img src="images/uoft-graduation.jpg" alt="Parsa Bemani at UofT graduation, June 2025">
```

Keep filenames lowercase with hyphens, no spaces. Compress large photos before
adding them (under ~500KB each) so the site stays fast to load.
