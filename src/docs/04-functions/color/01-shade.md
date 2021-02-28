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
    background-color: shade( var(--color-primary), 7% );
}
```

<div class="bg-base-primary p">
   var(--color-primary)
</div>

<div class="shade p invert">
   shade(var(--color-primary), 7%)
</div>