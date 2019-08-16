---
title: contrast-color($color, $dark, $light)
---

Returns a `$dark` or `$light` color value according to the background-color provided as `$color`.

### Parameters
- `$color` - Background-color to check
- `$dark`  - Dark color to return, defaults to `$contrast-dark`
- `$light`   - Light color to return, defaults to `$contrast-light`

### Example


```scss
.contrast-color {
    background-color: $red6;
}

.contrasted-element {
    // Using defaults set on config.scss
    color: contrast-color($red6);
}

.contrasted-element--overriden {
    // Optionally, provide the dark and light contrasted colors
    color: contrast-color($red6, $blue9, $orange2);
}
```

```html
<div class="contrast-color">
    <div class="contrasted-element">
        I'm contrasted against my background
    </div>
    <div class="contrasted-element--overriden">
        I'm contrasted against my background overriding defaults
    </div>
</div>
```

<div class="p contrast-color">
    <p class="contrasted-element">
        I'm contrasted against my background
    </p>
    <p class="contrasted-element--overriden">
        I'm contrasted against my background overriding defaults
    </p>
</div>
