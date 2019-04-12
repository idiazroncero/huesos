# Lists

`$list-padding` is applied as left padding. 

If set to 0, a "negative" padding is also set using `list-style-position: outside`. 

This sets the bullets *outside* the main flow of text and is the preferred solution (for typographers, this is the way bulleted lists was *always* intended to be) even if it means __you will need to be sure that overflow is possible and whitespace is present__

For unorderd lists, square list-style-type is preferred (opinionated);

 
## Definition lists

By default, all `<dd>` items are spaced with a `$spacer`

## Inline lists

Other than using `inline-list()` mixin, you can use the helper class `.list--inline` to quickly delete the bullets/numbers and set the `<li>` elements to `inline-block`
