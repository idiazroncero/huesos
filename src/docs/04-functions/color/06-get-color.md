---
title: get-color($color, $value)
---

Returns the color value of a given map.

It is designed to be used in conjunction with `$colors`. It won't look up on any different map.

###  Parameters
- `$color` - Name of the color key.
- `$value`  - Name of the map. Defaults are: base, text, state. You can add as many as you want.

### Example

```sass
.primary-text {
    border-top-color: get-color(primary, base)
}
```