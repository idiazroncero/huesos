Images are responsive by default.

The variable `$figcaption-font-size` defines the sizing of image captions, while the `$figcaption-align` variable sets a global alignment.

Since `$figcaption-font-size` will likely be a small size, it is forced to have a `$base-line-multi` value for the ritmo lines. This way, we ensure the same line-height is kept.

### Keep the alignment

In order to align the whole block while keeping the text alignment of the figcaption defined on `$figcaption-align`, you need to wrap the entire `<figure>` on an html block element containing the `.right`, `.left` or `.center` class.



