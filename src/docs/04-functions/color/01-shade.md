---
title: shade($color, $dilution)
---

Sass Function extracted from compass. Darkens the `$color` by mixing it with black as specified by `$dilution`.

### Parameters

- `$color` - Color to modify
- `$dilution` - % of black to mix

### Example

```scss
.shade {
    background-color: shade( get-color(base, primary), 7% );
}
```

<div class="bg-base-primary p">
   get-color(base, primary)
</div>

<div class="shade p invert">
   shade(get-color(base, primary), 7%)
</div>