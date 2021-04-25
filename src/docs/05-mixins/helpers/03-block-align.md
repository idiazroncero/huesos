---
title: block-align($align)
hidden: true
---

Helper mixin that aligns a block element using `margin:auto`.

It won't create floating elements. This is intended for alignment of block elements relative to their parents. It will generate empty space.

Defaults to `center`.

### Parameters

- `$align` - Either `center`, `left` or `right`

### Example

```scss
article.right-align {
    width:300px;
    @include block-align(right);
}
```

```html
<article class="right-align">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur cupiditate non eligendi natus unde iste omnis corrupti quaerat molestiae ipsam, laborum enim quisquam, aliquid obcaecati repellendus? Sit vel iure officiis?
</article>
```

<article class="right-align">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur cupiditate non eligendi natus unde iste omnis corrupti quaerat molestiae ipsam, laborum enim quisquam, aliquid obcaecati repellendus? Sit vel iure officiis?
</article>

