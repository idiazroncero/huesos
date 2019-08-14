---
title: invert-links
---

Apply inverted colors for links using predefined values.

It behaves basically as a shortcut for `set-link()` using `$inverse-link-color`, `$inverse-link-visited`, `$inverse-link-hover`, `$inverse-link-active`, `$inverse-link-strategy-default`, `$inverse-link-strategy-hover`.

It is mainly used by another mixins.

__Important!__ It needs to be applied at a parent level.

### Example

```scss
.invert-links {
    @include invert-links();
}
```

```html
<div class="invert-links">
    <a href="/" > I'm a link </a><br>
    <a style="background-color: #000" href="/" > Me too! </a>
</div>
```

<div class="invert-links">
    <a href="/" > I'm a link </a><br>
    <a style="background-color: #000" href="/" > Me too! </a>
</div>