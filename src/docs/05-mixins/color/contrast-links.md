---
title: contrast-links($color)
hidden: true
---

Overrides all `<a>` elements against the provided background `$color`, only if necessary as defined by `$lightness-threshold` config.

It uses `$inverse-link-` values from `_config.scss`. 

These values provide for a generic link color inversion. If you need a more specific override, you should use `set-link()` instead.

__Important!__ This mixin only works at a parent level.

### Parameters

- `$color` - Background-color to check

## Example

```scss
.contrast-links {
    background-color: $teal9;
    @include contrast-links($teal9);
}
```

```html
<div class="contrast-links">
    <a href="/" > I'm a link </a><br>
    <a href="/" > Me too! </a>
</div>
```

<div class="p contrast-links">
    <a href="/" > I'm a link </a><br>
    <a href="/" > Me too! </a>
</div>
