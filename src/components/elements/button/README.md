# Button

Applies to `<input>`, `<button>` or `<a>`. Without the `.button` class, only a reset is applied.

You can define a separate appearance for every button state (default and hover). We decided to decouple both states in order to give more room for custom styling and combinations, instead of enforcing a default hover state for every different style.

These are the available strategies: 
- outline - Colored outline and text, background transparent.
- background - Background solid, text contrasted against the background.
- split - Background lightened, font darkened, based on same color.
- split-inverse - Inverse of split.

Use this values to define a `$button-strategy-default`and a `$button-strategy-hover`.

Some common examples are:

```sass
/* Button with outline that fills with color on hover (default) */
$button-strategy-default: 'outline';
$button-strategy-hover: 'background';
```

```sass
/* Button with solid background that darkens on hover */
$button-strategy-default: 'background';
$button-strategy-hover: 'split-inverse';
```

```sass
/* Button with split colors that are set to inverse on hover */
$button-strategy-default: 'split';
$button-strategy-hover: 'split-inverse';
```

## Disabled buttons

Instead of using a custom `.button--disabled` class, disable buttons by usign the global `.disabled` helper class. 

This class is configured to detect context and apply the correct disabling properties.

## Alternative buttons.

Alternative strategies can be created by populating the `$button-alternative-strategies` map with combinations of `default` and `hover` values.

We provide a commented example on `_config.scss`

```sass
$button-alternative-strategies: (
	split : (
		default : 'split', 
		hover : 'split-inverse'
	),
);
```

The generated classes will take the following format: `.button--#{variant}--#{strategy}`. For example, the `split` strategy consisting of `split` as default and `split-inverse` as hover becomes `.button--primary--split` for the primary variant, `.button--error--split` por the error variant and so on...

Setting `$button-alternative-strategies` to a falsy value avoids the programatic generation of classes and avoids bloating your css.

## Why is a .button class needed

Styling all posible combinations of `<input>`, `<a class="button">` and `<button>` elements, their variations and their adjacent / sibling selectors results on a unnecesarily bloated css.

Moreover, a Bootstrap-like approach where the `.button` class simply ensures a global reset and the modifier applies a style allows for better customization.
