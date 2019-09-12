Alerts are colored boxes set to draw the user's attention towards specific messages.

You can set a `$alert-strategy` of `split` or `contrast` (see [handling color](/docs/color/handling-color) to know the difference) and a `$alert-default-color` for the default case.

It will use the `$state` map on `$colors` to generate a set of helper classes. By default, they are the following:

- `.alert--success`     - Sets the color to indicate a positive action or message
- `.alert--warning`     - Sets the color to indicate a warning
- `.alert--error`       - Sets the color to indicate a negative action or message