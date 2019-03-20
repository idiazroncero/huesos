---
title: darken-color($color, $color-modify-ratio)
---

Shortcut that applies a % of `shade()` equal to `$color-modify-ratio` (defined on `config.scss`)

If a different % is needed, use `shade()` directly.

## Parameters

- `$color` - Color to operate with.


## Example

```sass
.element {
    border-color: darken-color($gray7);
}
```