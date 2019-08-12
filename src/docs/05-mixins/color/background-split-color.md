---
title: background-split-color($color, $lighten-amount, $darken-amount, $include-links, $invert)
---

Split colors are a different strategy from `background-contrast`. Instead of contrasting a given dark/light color against a background, this mixin receives a `$color` and then applies a `tint()` function to the background and a `shade()` to the text and links.

As a result, the contrast is now obtained by superimposing two different shades of a same `$color`.

It takes `$lighten-split-ratio` and `$darken-split-ratio` from `config.scss` as default values that can be overriden.

### Parameters

- `$color` - Color to operate with.
- `$lighten-amount` - % of lightness to apply to the background. 
- `$darken-amount` - % of darkness to apply to the text and links.
- `$include-links`- Wether to override children links. Defaults to false,
- `$invert` - Inverts behavior (background gets darker, color lighter). Defaults to false


### Example

```html
<div class="element">
    <a href="/" > I'm a link </a>
    <p>I'm some text.</p>
</div>
```

```sass
.element {
    @include background-split-color($teal5);
}
```

```sass
/* Custom values */
.element {
    @include background-split-color($teal5, 25%, 30%, true, true);
}
```