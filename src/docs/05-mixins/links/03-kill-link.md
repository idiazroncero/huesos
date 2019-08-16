---
title: kill-link($color)
---

Completely overrides link style to make it appear as plain text. You can define a `$color` to give on each state.

It also deletes the decoration (by invoking `kill-link-decoration()`).

`.link--inactive` helper class is basically an implementation of `kill-link()`;

`$color`defaults to `get-color(text, primary)`.

### Parameters

- `$color` - Valid color to apply to the link on every state.

### Example

```scss
a.kill-link {
    @include kill-link(purple)
}
```

```html
<a href="#" class="kill-link">
    Completely overriden link. Purple color.
</a>
```

<a href="#" class="kill-link">
    Completely overriden link. Purple color.
</a>


