# images/

Photos and logos go here.

## Replace these two placeholders

`western-schulich.png` and `uoft-arts-science.png` are **temporary text
placeholders** in each school's brand colour — they are not the real logos.
Save the actual logo images over them, keeping the same two filenames, and the
Education page picks them up with no code change:

```
images/western-schulich.png    Schulich Medicine & Dentistry + Western
images/uoft-arts-science.png   University of Toronto, Faculty of Arts & Science
```

They display in a 2:1 banner across the top of each card on `education.html`,
using `object-fit: cover`. Anything roughly landscape works — a wider image
loses a little from the top and bottom, so keep the logo away from the edges.
If a logo ever looks clipped, change `.uni-banner` in `css/style.css` from
`object-fit: cover` to `contain`; the band around it then fills with the
school's brand colour.

## Still to add

**UofT graduation photo:** save it here (e.g. `uoft-graduation.jpg`), then in
`uoft.html` find the `.photo-placeholder` under the "Graduation" heading and
replace it with:

```html
<img src="images/uoft-graduation.jpg" alt="Parsa Bemani at UofT graduation, June 2025">
```

Keep filenames lowercase with hyphens, no spaces. Compress large photos before
adding them (under ~500KB each) so the site stays fast to load.
