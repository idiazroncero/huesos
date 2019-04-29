---
title: get-color($color, $value)
---

Returns the color value of a given map.

Use in conjunction with `$colors` map of maps.

###  Parameters
- `$color` - Name of the color key
- `$value`  - Name of the map

### Example

```sass
.primary-text {
    border-top-color: get-color(primary, base)
}
```
