---
title: separator($margin-bottom:$spacer, $border-width:$separator-width $border-color:$separator-color)
---

Uses a positive margin bottom, border width and border color to apply an offset and, depending on the `$separators` value, a border.

By default, it uses `$spacer`, `$separator-width` and `$separator-color` values.

### Parameters

- `$margin-bottom`- A valid margin-bottom value, better if expresed as a vertical rhythm. Defaults to the global `$spacer`.
- `$border-width` - A width for the separator. Defaults to `$separator-width`. Only applies if `$separators` boolean is true.
- `$border-color` - A color for the separator. Defaults to `$separator-color`. Only applies if `$separators` boolean is true.

### Example

```scss
.item-with-separator {
    @include separator(25px);
}
```

