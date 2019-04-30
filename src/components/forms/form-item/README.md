General block-level wrapper for form elements. Guarantees correct spacing, label and input vertical alignment and provides several helper classes for quick customization.

It also provides several variations for different styling of items.

- `.form-item--required`		- Marks the label with a red asterisk
- `.form-item--col`				- Stacks elements instead of displaying them side by side
- `.form-item--label-inside`	- Visually puts the label inside of the input. Only makes sense if the border strategy is full

Most of these classes can be stacked:

- `.form-item--label-inside.form-item--required`	- `.form-item--required` can be combinated with the other modifiers
- `.form-item--label-inside.form-item--col`	- You can sum `col`and `required` to get this commonly seen pattern
