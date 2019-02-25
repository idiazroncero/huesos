---
title: tint($color, $dilution)
---

Sass Function extracted from compass.  Lightens the `$color` by mixing it with white as specified by `$dilution`.

### Parameters

- `$color` - Color to modify
- `$dilution` - % of white to mix

### Example

```sass
.element {
    color: tint($grey1, 25%);
}
```