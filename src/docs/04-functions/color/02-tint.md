---
title: tint($color, $dilution)
---

Sass Function extracted from compass.  Lightens the `$color` by mixing it with white as specified by `$dilution`.

### Parameters

- `$color` - Color to modify
- `$dilution` - % of white to mix

### Example

```scss
.tint {
   tint(get-color(base, secondary), 7%)
}
```

<div class="bg-base-secondary p">
   get-color(base, secondary)
</div>

<div class="tint p invert">
   tint(get-color(base, secondary), 7%)
</div>