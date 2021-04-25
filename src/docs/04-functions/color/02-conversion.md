---
title: Color Conversion
hidden: true
---

Helper functions to convert hexadecimal values to HSL and RBG

###  Parameters
- `$hex` - The hexadecimal value.

### Example

```scss
.primary-text {
    --color: rgb(hexToRgb(#33ccff));
    border-top-color: var(--color);
}
```
