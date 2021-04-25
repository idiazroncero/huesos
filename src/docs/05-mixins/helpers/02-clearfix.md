---
title: clearfix
hidden: true
---

Aplies a clearfix hack to a wrapper element.

The helper class `.clearfix` is also provided.

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
    outline: 1px solid red;
}
.float-element {
    float:left;
}
```

<div class="float-parent">
    <div class="p float-element">
        Content
    </div>
</div>
