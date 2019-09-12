Headings are heavily customizable using variables on `_config.scss`.

By default, headings appear on the `$font-secondary-items` map. This means they will receive a different font style, and (if configured), a different __bold__ weight.

### Heading configurations

Heading-specific overrides can be set using `$heading-font-weight`, 
`$heading-decorated-links` and `$heading-letter-spacing`.

It is advisable to set `$heading-decorated-links` to false. Link decoration can obstruct legibility or interfere with your design when applied to big typefaces.

By default, `$heading-letter-spacing` will take a negative value to improve legibility.

### Font sizing and vertical rhythm

Font sizing follows a type-scale based on [http://type-scale.com/](http://type-scale.com/). Choose your `$scale-ratio` and it will be automatically applied to h1-h6 font sizes.

You can also set `$h1-ritmo-lines` to `$h6-ritmo-lines`. These variables take a number of ritmo lines and will be applied to the `ritmo-font-size()` mixin that will set the font size and line height of headings.

<div class="alert alert--success">

__Why do I need to manually set the vertical rhythm?__  
Tweaking this values might seem overkill but the result is far more appealing and legible.
The automatic and arithmetic ritmo.scss calculations result on excessive line height, specially on bigger sizes.

</div>


### Helper classes

The `<h1>` to `<h6>` HTML elements can be mimicked using `.h1` to `.h6` classes.