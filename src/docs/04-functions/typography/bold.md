---
title: bold($element)
hidden: true
---

Huesos will let you define different bold weights (`$font-main-bold` and `$font-secondary-bold`) for the two typefaces used in a proyect. This way, you can fine-tune your bold weights using specific values, like 300 or 900, instead of the generic and relative __bold__ or __bolder__.

If you don't make use of the two typefaces or you don't need to resort to specific `font-weight` values, you can omit this function.

If you do, `bold()` Returns the correct bold weight for the given html `$element` and defaults to the current element (`&`). `$element` needs to be a valid html element, not a class nor an ID.

Internally, uses `$font-secondary-items` to decide wich font-weight to use.

### Parameters

- `$element` - A valid html element. Defaults to the current one (`&`);


### Example

```scss
p {
    // Use the current html element, p in this case
    font-weight: bold();
}

.class {
    // Pass another element
    font-weight: bold(header);
}
```
