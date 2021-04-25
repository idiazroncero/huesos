---
title: background-split-color($color, $lighten-amount, $darken-amount, $include-links, $invert)
hidden: true
---

Split colors are a different strategy from `background-contrast`. Instead of contrasting a given dark/light color against a background, this mixin receives a `$color` and then applies a `tint()` function to the background and a `shade()` to the text and links.

It takes `$lighten-split-ratio` and `$darken-split-ratio` from `config.scss` as default values that can be overriden.

As a result, the contrast is now obtained by superimposing two different shades of a same `$color`.

See [handling color](/docs/color/handling-color) for more info.

__Beware!__ There is a limit on link overriding. By default, it will override link colors. Link decoration will remain the same, and may result on weird behavior on some cases (i.e. border and border-inset strategies). We simply can't automate every case. Use link-decoration mixins to handle these cases.

### Parameters

- `$color` - Color to operate with.
- `$lighten-amount` - % of lightness to apply to the background. Defaults to `$lighten-split-ratio`
- `$darken-amount` - % of darkness to apply to the text and links. Defaults to `$darken-split-ratio`.
- `$include-links`- Wether to override children links. Defaults to `false`.
- `$invert` - Inverts behavior (background gets darker, color lighter). Defaults to `false`.


### Example


```scss
// Using defaults
.background-split {
    @include background-split-color($red5);
};

// Add links
.background-split--links {
  @include background-split-color($red5, $include-links: true);
};

// Fully customized
.background-split--custom {
  @include background-split-color($orange5, 15%, 66%, true);
};

.background-split--custom--inverse {
  @include background-split-color($orange5, 15%, 66%, true, true);
};
```

```html
<div class="background-split">
    <a href="/" > I'm a link </a>
    <p>Background split by default</p>
</div>
<div class="background-split--links">
    <a href="/" > I'm a link </a>
    <p>Background split including link overrides</p>
</div>
<div class="background-split--custom">
    <a href="/" > I'm a link </a>
    <p>Split with custom values.</p>
</div>
<div class="background-split--custom--inverse">
    <a href="/" > I'm a link </a>
    <p>Split with custom values and inversion</p>
</div>
```

<div class="p mb background-split">
    <a href="/" > I'm a link </a>
    <p>Background split by default</p>
</div>
<div class="p mb background-split--links">
    <a href="/" > I'm a link </a>
    <p>Background split including link overrides</p>
</div>
<div class="p mb background-split--custom">
    <a href="/" > I'm a link </a>
    <p>Split with custom values.</p>
</div>
<div class="p background-split--custom--inverse">
    <a href="/" > I'm a link </a>
    <p>Split with custom values and inversion</p>
</div>
