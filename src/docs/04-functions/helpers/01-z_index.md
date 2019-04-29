---
title: z-index($item)
---

Returns the z-index value of the `$item` as defined on the `$z-index` map on `_config.scss`.

This technique allows for quick redefinition of z-index stack levels: instead of parsing the whole scss, you can simply re-order the map.

### Example

```scss
// Example of z-index map on config.scss
$z-index: (
    background: 0,
    layer: 1,
    popup: 2,
)
```

```scss
body {
    z-index: z-index(background);
}
.item {
    z-index: z-index(layer);
}
.modal {
    z-index: z-index(popup);
}
```