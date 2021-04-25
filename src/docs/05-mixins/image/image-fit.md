---
title: image-fit($priority)
hidden: true
---

Applied to the parent of an image, sets an `object-fit:cover` for the inner image and provides a fallback using `position:absolute`.

It requires a `$priority` value (width or height, defaults to width) indicating which value will take 100% of the container's value. This is only needed for the fallback.

Assumes object-position to be `center center`. You can easily add your overrides.

### Parameters
- `$priority` - One of 'width' or 'height'

### Example

```html
<div class="image-fit">
    <img src="http://placehold.it/1200x600" />
</div>
```

```scss
.image-fit {
    width:400px;
    height:400px;
    @include image-fit('height');
}
```

<div class="image-fit">
    <img src="http://placehold.it/1200x600" />
</div>
