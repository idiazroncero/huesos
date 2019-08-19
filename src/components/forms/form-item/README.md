General block-level wrapper for form elements. Guarantees correct spacing, label and input vertical alignment and provides several helper classes for quick customization.

It also provides several variations for different styling of items.

- `.form-item--required`		- Marks the label with a red asterisk
- `.form-item--col`				- Stacks elements instead of displaying them side by side
- `.form-item--label-inside`	- Visually puts the label inside of the input. Only makes sense if the border strategy is full

Most of these classes can be stacked:

- `.form-item--label-inside.form-item--required`	- `.form-item--required` can be combinated with the other modifiers
- `.form-item--label-inside.form-item--col`	- You can sum `col`and `required` to get this commonly seen pattern

### Labels

Labels are formatted according to values from `$label-as-minititle` and `$label-font-size`. The size will be respected, and minititle will be applied if the boolean value is set to true.

By default, we consider labels as a kind of minititle.

<div class="alert alert--warning mb">

    __There's life outside form items__  
    This wrapper is a handy way of scoping a set of form-like styles. You can freely use form elements outside a `.form-item` wrapper and they will default to normal behavior (i.e, labels will cease to be minititles). This way, you can easily decide wether to apply form-like styles or not to your HTML.


</div>