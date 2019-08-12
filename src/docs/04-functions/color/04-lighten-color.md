---
title: lighten-color($color, $color-modify-ratio)
---

Shortcut that applies a % of `tint()` equal to `$color-modify-ratio` (defined on `config.scss`)

If a different % is needed, use `tint()` directly.

### Parameters

- `$color` - Color to operate with.


### Example

```sass
.element {
    border-color: lighten-color($gray7);
}
```