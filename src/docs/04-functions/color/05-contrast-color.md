---
title: contrast-color($color, $dark, $light)
---

Returns a `$dark` or `$light` color value according to the background-color provided as `$color`.

### Parameters
- `$color` - Background-color to check
- `$dark`  - Dark color to return, defaults to `$contrast-dark`
- `$light`   - Light color to return, defaults to `$contrast-light`

### Example

```html
<div class="element">
    <div class="contrasted">
        I'm contrasted against my background
    </div>
</div>
```

```sass
.element {
    background-color: $red6;
}

.contrasted-element {
    // Using defaults set on config.scss
    color: contrast-color($red6);

    // Optionally, provide the dark and light contrasted colors
    color: contrast-color($red6, $yellow9, $yellow1);
}
```