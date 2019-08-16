---
title: set-link($base, $visited, $hover, $active, $strategy-default, $strategy-hover)
---

Sets link sytling, including all possible states.

Defaults to values set on `_global.scss` and can be overriden. Refer to [link documentation](/components/detail/link--default) to learn more about the very specific way Huesos handle link states.

By default, `$hover` and `$focus` are treated the same way. That's why we only pass one parameter.

### Parameters 

- `$base` - Base color.
- `$visited`  - Color when visited.
- `$hover`   - Color when hovered and focused.
- `$active`   - Color when active.
- `$strategy-default`   - Decorative link-strategy to follow by default.
- `$strategy-hover`   - Decorative link-strategy to follow on hover and focus.

### Example

```scss
a.set-link {
    @include set-link(
        red,
        blue,
        purple,
        green,
        'border',
        'underline'
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