---
title: layer($top, $right, $bottom, $left, $z-index)
hidden: true
---

Sets an absolutely positioned layer above the closest parent ancestor which has position different to `static`.

By default, it uses `0` for the four positioning values and `1` for the z-index, in order to ensure it stays above the rest of the elements.

`z-index` might need to be changed. You can pass either a number or a string representig a valid key of the `$z-index` map (see [documentation for z-index function](/docs/functions/helpers/z_index))

### Parameters

- `$top` - Offset from top, defaults to 0
- `$right` - Offset from right, defaults to 0
- `$bottom` - Offset from bottom, defaults to 0
- `$left` - Offset from left, defaults to 0
- `$z-index` - Z-index value, defaults to 1. Can be either a number or a string representing a valid value for the `$z-index` map.

### Example


```scss
.parent {
    position:relative;
    width:500px;
    height:500px;
    background-color: $teal4;
}
.layer {
    @include layer(15px, 15px, 20px, 15px, 5);
    background-color: $red4;
}
```

```html
<div class="parent">
    <div class="layer">
        I'm a layered div
    </div>
</div>
```

<div class="parent">
    <div class="p layer">
        I'm a layered div
    </div>
</div>
