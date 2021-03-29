---
title: Handling color
status: draft
---

Huesos 3.0 has radically changed approach to color.

From SCSS based, partially auto-generated colors we have switched to a full CSS Variables palette where each color is individually chosen.

From past iterations we have come to the conclusion that programmatically generating colors (tints, shades, etc) is prone to bad, predicatable color schemes. The math can be right but the outcome is shortcoming.

Instead, we use a «manual» approach with a few helpers for some basic contrast operations.

## Contrasting color: two strategies

When reading trough the docs and configuring your buttons, linkss, etc... you will find two different strategies.

This strategies refer to how we contrast a color against a background:

### Contrast

A pure "contrast" solution will check your provided background color and decide wether to use your configured *dark* or *light* colors for the text.

It will use `contrast-color($color, $dark, $light)` function to return the correct color, expressed as a CSS Custom Property.

But... __¿when should we decide that a given color is "too dark" or "too light?__ The threshold of lightness that activate the contrast can also be set using `$lightness-threshold`. 

So, for example, if you provide a `yellow` color as `$contrast-light` and your background-color's lightness is greater than your `$lightness-threshold` value, the text will be set to yellow. Otherwise, the `$contrast-dark` color will be used.

```scss
$contrast-light: yellow;

.my-box {
    // We set a background color
    background-color: #666;
    // ...and then we ask the function to check lightness and change the text color if needed
    color: contrast-color(#666);
}
```

```html
<div class="p my-box">
    My box
</div>
```


### Split

Split color is a completely different strategy, commonly seen on Bootstrap and others. 

Instead of contrasting __against__ a color, it takes the given color and outputs two different mixes: one darker, and one lighter.

On Huesos 3.0, instead of calculating the mixes on the fly, those are hardcoded as CSS Custom Properties.
