Applies to `<a>` elements.

Previous styles like `border`, `mark` or `border-inset` have been deprecated in favor of the newer `text-decoration` syntax.

You can define separate text-decoration values for each link state (default and hover).

The decoration data taks the form of a SASS map with the following structure:

```scss
$link-decoration: (
	underline: (
		default: true,
		hover: true,
	),
  color: (
		default: $primary-100,
		hover: $primary-500,
	),
	width: (
		default: 0.2em,
		hover: 0.2em,
	)
);
```


### Modifiers

Remove all the link styling using `.link--inactive`. This will make your link behave as normal text.

Disable buttons by using the `.link--disabled` helper class. 

<!-- TODO: Define a dark theme strategy / Helper class `.link--inverted` will apply a color inversion on the link, similar to using `invert-links()` mixin. -->

