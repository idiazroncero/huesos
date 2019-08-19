`$list-padding` is applied as left padding. 

By default is set to `0`. When so, a "negative" padding is set using `list-style-position: outside`.

This sets the bullets *outside* the main flow of text. __Even if not common on web design, this is considered the correct solution.__ For typographers, this is the way bulleted lists was *always* intended to be: read [this article](https://betterwebtype.com/articles/2018/10/15/rhythm-in-web-typography) for more info on hanging punctuation. 

<div class="mb alert alert--warning">

Be warned: this also means __you will need to be sure that overflow is possible and whitespace is present.__

</div>

For unordered lists, square list-style-type is preferred (opinionated);

 
### Definition lists

By default, all `<dd>` items are spaced with a `$spacer`

### Inline lists

Other than using `inline-list()` mixin, you can use the helper class `.list--inline` to quickly delete the bullets/numbers and set the `<li>` elements to `inline-block`

### References

[Rhythm in web typography](https://betterwebtype.com/articles/2018/10/15/rhythm-in-web-typography/)
