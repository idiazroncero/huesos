---
title: clearfix()
---

Aplies a clearfix hack to a wrapper element.

For quick prototyping, the utility class `.clearfix` is also provided.

### Example

```html
<div class="float-parent">
    <div class="float-element">
        Content
    </div>
</div>
```

```scss
.float-parent {    
    @include clearfix();
}
.float-element {
    float:left;
}
```
