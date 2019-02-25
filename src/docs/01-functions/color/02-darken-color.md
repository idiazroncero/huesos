---
title: darken-color($color, $color-modify-ratio)
---

Applies a % of `shade()` equal to `$color-modify-ratio` (defined on `config.scss`)

## Parameters

- `$color` - Color to operate with.
- `$color-modify-ratio` - % of shade to apply. 


## Example

```sass
.element {
    // Either using defaults
    border-color: darken-color($gray7);

    // Or a manual override
    border-color: darken-color($gray3, 25%);
}
```