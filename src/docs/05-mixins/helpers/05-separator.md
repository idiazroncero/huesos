---
title: separator($ritmo-lines:$spacer-lines, $border-width:$separator-width $border-color:var(--color-utility-separator))
---

Uses a positive margin bottom, border width and border color to apply an offset and, depending on the `$separators` value, a border.

By default, it uses `$spacer-lines`, `$separator-width` and `var(--color-utility-separator)` values.

It can't accept any arbitrary value (i.e, px or em). We stick to the vertical rhythm using ritmo.scss. That's why the margin-bottom value needs to be expressed on `$lines`. See [ritmo's documentation](https://ritmo.marzeelabs.org/) for more info.

### Parameters

- `$ritmo-lines,`- A number of vertical rhythm lines, using ritmo. This is enforced because we use `ritmo-bottom-border()` in the mixin. Defaults to the global `$spacer-lines`.
- `$border-width` - A width for the separator. Defaults to `$separator-width`. Only applies if `$separators` boolean is true.
- `$border-color` - A color for the separator. Defaults to `var(--color-utility-separator)`. Only applies if `$separators` boolean is true.

### Example

```scss
.item-with-default-separator {
    @include separator();
}
.item-with-custom-separator {
    @include separator(8, 6px, green );
}
```

```html
<div class="item-with-default-separator">
    I have a default separator
</div>
<div class="item-with-custom-separator">
    Me, instead, I've got the custom one
</div>
<div>
    I'm just a text
</div>
```

<div class="item-with-default-separator">
    I have a default separator
</div>
<div class="item-with-custom-separator">
    Me, instead, I've got the custom one
</div>
<div>
    I'm just a text
</div>

### Reference

[Ritmo.scss](https://ritmo.marzeelabs.org/)