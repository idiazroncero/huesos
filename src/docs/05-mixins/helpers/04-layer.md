---
title: layer($top, $right, $bottom, $left, $z-index)
---

Sets an absolutely positioned layer above the closest parent ancestor which has a non-static position.

By default, it uses `0` for the four positioning values and `1` for the z-index, in order to ensure it stays above the rest of the elements.

### Parameters

- $top - Offset from top, defaults to 0
- $right - Offset from right, defaults to 0
- $bottom - Offset from bottom, defaults to 0
- $left - Offset from left, defaults to 0
- $z-index - Z-index value, defaults to 1

### Example

```html
<div class="parent">
    <div class="layer">
    </div>
</div>
```

```scss
.parent {
    position:relative;
}
.layer {
    @include layer(15px, 15px, 20px, 15px, 5);
}
```
