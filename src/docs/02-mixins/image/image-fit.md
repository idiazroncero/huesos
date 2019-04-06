---
title: image-fit($priority)
---

Sets a `object-fit:cover` image on a given element, parent of the image and its fallback using `position:absolute`.

It requires a `$priority` value (defaults to 'width') that indicates the value to scale to 100% of the container. Only needed for the fallback.

### Parameters
- `$priority` - One of 'width' or 'height'

### Example

```html
<div class="parent">
    <img src="poster.jpg" />
</div>
```

```scss
.parent {
    @include image-fit('height');
}
```
