---
title: Handling color
status: draft
---

Huesos aims to be at the same time fully configurable and extendable but with some basic, strong opinions. __Color happens one of the most opinionated areas__.

Contrasting and manipulating colors can and should be done using Hueso's own set of functions and mixins:

## Manipulating colors

In order to keep a consistent look and feel, we strongly enforce you to use constant variables defined on `_config.scss` for your color manipulations.

The two most common operations are color darkening and enlightment. Read the color functions' documentation in order to learn how to use them.

## Contrasting color: two strategies

When reading trough the docs and configuring your buttons, linkss, etc... you will find two different strategies.

This strategies refer to how we contrast a color against a background:

### Contrast:

A pure "contrast" solution will check your provided background color and decide wether to use your configured *dark* or *light* colors for the text.

It will use `contrast-color($color, $dark, $light)` function. 

As usual, your __dark__ and __light__ colors can be either the pre-defined `$contrast-dark` and `$contrast-light` on `_config.scss` or passed manually.

But... __¿when should we decide that a given color is "too dark" or "too light?__ The threshold of lightness that activate the contrast can also be set using `$lightness-threshold`. 

So, for example, if you provide a `yellow` color as `$contrast-light` and your background-color's lightness is greater than your `$lightness-threshold` value, the text will be set to yellow. Otherwise, the `$contrast-dark` color will be used.

```scss
$contrast-light: yellow;

.my-box {
    // We set a background color
    background-color: #000;
    // ...and then we ask the function to check lightness and change the text color if needed
    color: contrast-color(#666);
    // We could pass the values directly to override the default behavior
    color: contrast-color(#666, limegreen, black)
}
```

```html
<div class="p my-box">
    My box
</div>
```

<div style="background-color: #666; color: limegreen" class="p my-box">
    My box
</div>


### Split:

Split color is a completely different strategy, commonly seen on Bootstrap and others. 

Instead of contrasting __against__ a color, it takes the given color and makes two different mixes: one darker, and one lighter.

You can control the amount of the mix using `$lighten-amount` and `$darken-amount` global values or pass them directly to the mixin. 

For example, if you set `#bcc300` (gold) as the color, you will get a lighter version as the background-color and a darker version as the text.

By default, the lighter color will be used on the background. To switch this behavior, you can simply set `$invert` to true. 

Read the [docs of this useful mixin](/docs/mixins/color/background-split-color) to get more info.

```scss
.my-box {
    @include background-split-color('#bcc300');
}

.my-box--inverted {
    // Pass the $invert parameter manually
    @include background-split-color('#bcc300', $invert: true);
}
```

```html
<div class="p my-box">
    My box
</div>

<div class="p my-box--inverted">
    My box ($invert = true)
</div>
```

<div class="p mb" style="background-color: #dee180; color:#5e6200">
    My box
</div>


<div class="p mb" style="color: #dee180; background-color:#5e6200">
    My box ($invert = true)
</div>