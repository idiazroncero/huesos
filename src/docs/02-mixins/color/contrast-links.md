---
title: contrast-links($color)
---

Overrides all `<a>` elements against the provided background `$color`, only if necessary.

Uses `$inverse-link-` values from `_config.scss`.

__Important!__ This mixin only works at a parent level.

### Parameters

- `$color` - Background-color to check

## Example

```html
<div class="element">
    <a href="/" > I'm a link </a>
    <a href="/" > Me too! </a>
</div>
```

```sass
.element {
    background-color: $teal9;
    @include contrast-links($teal9);
}
```