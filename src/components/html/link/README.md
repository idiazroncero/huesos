Applies to `<a>` elements.

As in `<button>`, you can define a separate appearance for each link state (default and hover).

Previous styles like `border`, `mark` or `border-inset` have been deprecated in favor of the newer `text-decoration` syntax

Use this values to define a `$link-strategy-default` and a `$link-strategy-hover`.

The old-style behavior we all know would be like this:

```scss
/* Underline that disappears on hover */
$button-strategy-default: 'underline';
$button-strategy-hover: false;
```

Setting both states to the same value and using the config to differentiate them is a safe strategy.

```scss
$button-strategy-default: 'border-inset';
$button-strategy-hover: 'border-inset';
```

Mixes can led to interesting results, but careful testing is adviced. It can break.

```scss
/* An underline that becomes a border */
$button-strategy-default: 'underline';
$button-strategy-hover: 'border';
```

<div class="alert alert--warning">

__Be careful when throwing *mark* on the mix!__  
The left and right padding usually applied to 'mark' makes it difficult to mix it with other styles (unless you set padding to 0, wich is not recommended).

</div>

### Disabled links

Disable buttons by usign the global `.disabled` helper class. 

This class is configured to detect context and apply the correct disabling properties.

### Inverted links

Helper class `.link--inverted` will apply a color inversion on the link, similar to using `invert-links()` mixin.

### Alternative links.

Alternative strategies can be created by populating the `$link-alternative-strategies` map with combinations of `default` and `hover` values.

We provide a commented example on `_config.scss`

```scss
$link-alternative-strategies: (
	mark : (
		default : 'mark', 
		hover : 'mark'
	),
);
```

The generated classes will take the following format: `.link--#{strategy}`. For example, the `mark` strategy consisting of `mark` as default and hover becomes `.link--mark`.

Setting `$link-alternative-strategies` to a falsy value avoids the programatic generation of classes and avoids bloating your css.
