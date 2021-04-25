---
title: set-link($base, $visited, $hover, $active, $link-decoration-data)
hidden: true
---

Sets link sytling, including all possible states.

Defaults to values set on `_global.scss` and can be overriden. Refer to [link
documentation](/components/detail/link--default) to learn more about the very specific way Huesos handle link states.

By default, `$hover` and `$focus` are treated the same way. That's why we only pass one parameter.

### Parameters

- `$base` - Base color.
- `$visited` - Color when visited.
- `$hover` - Color when hovered and focused.
- `$active` - Color when active.
- `$link-decoration-data` - Map detailing the hover and default text decoration.

The `$link-decoration-data` object takes the following data:

```scss
$data: (
  underline: (
    default: true, // boolean
    hover: true, // boolean
  ),
  color: (
    default: yellow, // color
    hover: black, // color
  ),
  width: (
    default: 0.5em, // valid height unit
    hover: 0.3em, // valid height unit
  )
)
```

### Example

```scss
a.set-link {
  @include set-link(
    red,
    blue,
    purple,
    green,
    (
      underline: (
        default: true,
        hover: true,
      ),
      color: (
        default: yellow,
        hover: black,
      ),
      width: (
        default: 0.5em,
        hover: 0.3em,
      )
    )
  )
}
```

```html
<a class="set-link" href="#">
  Custom link!
</a>
```

<a class="set-link" href="#">
  Custom link!
</a>
