# Button

Applies to `<input type="submit / ">`, `<button>` or `<a>`. Without the `.button` class, only a reset is applied.

There are three general strategies available on `_config.scss` :  `border`, `background` and `mixed`

## Disabled buttons

Instead of using a custom `.button--disabled` class, disable buttons by usign the global `.disabled` helper class. 

This class is configured to detect context and apply the correct disabling properties.

## Why is a .button class needed

Styling all posible combinations of `<input>`, `<a class="button">` and `<button>` elements, their variations and their adjacent / sibling selectors results on a unnecesarily bloated css.

Moreover, a Bootstrap-like approach where the `.button` class simply ensures a global reset and the modifier applies a style allows for better customization.
