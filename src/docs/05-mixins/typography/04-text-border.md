---
title: text-border($border-color, $border-width, $text-color)
hidden: true
---

Another little trick to pull off from the hat when needed.

Sets a text-stroke with a fallback for less capable browsers. Ideal for those pesky headings that need to contrast against an image.

Uses the tecnique defined on [Adding stroke to web text](https://css-tricks.com/adding-stroke-to-web-text/).

### Parameters

- `$border-color` - Defines the border-color
- `$border-width` - Defines the border width, defaults to 1px
- `$text-color` - Defines the color of the text. A false value won't apply any change.

### Example
```scss
.text-border {
    @include text-border($indigo8, 3px, transparent);
}
```

```html
<h1 class="text-border">I have a text border</h1>
```

<h1 class="text-border">I have a text border</h1>

### Reference

[Adding stroke to web text](https://css-tricks.com/adding-stroke-to-web-text/).
