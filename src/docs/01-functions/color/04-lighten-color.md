---
title: lighten-color($color, $color-modify-ratio)
---

Applies a % of `tint()` equal to `$color-modify-ratio` (defined on `config.scss`)

## Parameters

- `$color` - Color to operate with.
- `$color-modify-ratio` - % of tint to apply. 


## Example

```sass
.element {
    // Either using defaults
    border-color: lighten-color($gray7);

    // Or a manual override
    border-color: lighten-color($gray3, 25%);
}
```