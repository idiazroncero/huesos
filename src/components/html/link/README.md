Applies to `<a>` elements.

As in `<button>`, you can define a separate appearance for each link state (default and hover). We decided to decouple both states in order to give more room for custom styling and combinations, instead of enforcing a default hover state for every different style.

These are the available strategies: 
- false - No styling
- underline - Normal, text-decoration:underline
- border - Border-bottom with custom width
- border-inset - Pseudo-element that fakes a border bottom that grows from bottom to top
- mark - Background-color (as in a `<mark>` element)

Use this values to define a `$link-strategy-default`and a `$link-strategy-hover`.

The most common case would be like this.

```sass
/* Underline that disappears on hover */
$button-strategy-default: 'underline';
$button-strategy-hover: 'false';
```

And border / mark work perfectly in pair:

```sass
/* Underline that disappears on hover */
$button-strategy-default: 'border-inset';
$button-strategy-hover: 'border-inset';
```

But some interesting styles could be as follows:

```sass
/* An underline that becomes a border */
$button-strategy-default: 'underline';
$button-strategy-hover: 'border';
```

Please note the padding applied to 'mark' makes it difficult to use with other styles (unless you set padding to 0).

## Disabled buttons

Disable buttons by usign the global `.disabled` helper class. 

This class is configured to detect context and apply the correct disabling properties.

## Alternative buttons.

Alternative strategies can be created by populating the `$link-alternative-strategies` map with combinations of `default` and `hover` values.

We provide a commented example on `_config.scss`

```sass
$link-alternative-strategies: (
	mark : (
		default : 'mark', 
		hover : 'mark'
	),
);
```

The generated classes will take the following format: `.link--#{strategy}`. For example, the `mark` strategy consisting of `mark` as default and hover becomes `.link--mark`.

Setting `$link-alternative-strategies` to a falsy value avoids the programatic generation of classes and avoids bloating your css.
