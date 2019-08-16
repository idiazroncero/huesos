---
title: darken-color($color, $color-modify-ratio)
---

Shortcut that applies a % of `shade()` equal to the `$color-modify-ratio` defined on `config.scss`.

If a different % is needed, use `shade()` directly.

### Parameters

- `$color` - Color to operate with.


### Example

```scss
.element {
    background-color: darken-color($gray7);
}
```