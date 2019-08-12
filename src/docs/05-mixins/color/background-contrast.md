---
title: background-contrast($color, $include-typography)
---

__Bloat alert:__ this mixin is intended as a block-level override and, as such, is verbose and powerful. Please check the rest of the color functions and mixins before resorting to this.

Given a `$color`, ensures that text and links are correctly contrasted against that background.

If `$include-typography` is set to true, overrides all typographic elements. By default, this value is set to `false` to prevent CSS bloat.

Uses `contrast-color($color)` function to perform the lightness calculation.

### Parameters

- `$color` - Background-color to check
- `$include-typography` - Boolean that adds overrides to all typographic elements.

### Example

```html
<div class="background-contrast">
    <h1>I'm a heading</h1>
    <a href="/" > I'm a link </a>
    <h3>Sub heading, h3 level!</h3>
    <p>I'm some text.</p>
</div>

<div class="background-contrast--typography">
    <h1>I'm a heading</h1>
    <a href="/" > I'm a link </a>
    <h3>Sub heading, h3 level!</h3>
    <p>I'm some text.</p>
</div>
```

```sass
.background-contrast {
    background-color: $teal9;
    @include background-contrast($teal9);
}
.background-contrast--typography {
    background-color: $teal9;
    @include background-contrast($teal9, true);
}
```

<div class="p mb background-contrast">
    <h1>I'm a heading</h1>
    <a href="/" > I'm a link </a>
    <h3>Sub heading, h3 level!</h3>
    <p>I'm some text.</p>
</div>

<div class="p background-contrast--typography">
    <h1>I'm a heading</h1>
    <a href="/" > I'm a link </a>
    <h3>Sub heading, h3 level!</h3>
    <p>I'm some text.</p>
</div>