Headings can be configured using variables on `_config.scss`.

Usually, headings will appear on the `$font-secondary-items` map.

Heading-specific overrides can be set using `$heading-font-weight`, 
`$heading-vertical-rhythm` and `$heading-letter-spacing`. It is especially adviced to set these two last values to 1 and a negative value to improve legibility.

Font sizing follows a type-scale based on [http://type-scale.com/](http://type-scale.com/). Choose your `$scale-ratio` and it will be automatically applied to h1-h6 font sizes.

The `<h1>` to `<h6>` HTML elements can be mimicked using `.h1` to `.h6` classes.