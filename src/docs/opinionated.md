---
title: Opinionated stuff
status: draft
---

This framework aims to be at the same time fully configurable and extendable but with some basic, strong opinions on how to handle some things.

Here you can find some of the most opinionated configurations and properties:

## Contrasting color

Many times you will need to choose between two different strategies when contrasting a color against a background:

### Contrast.

A pure "contrast" solution will check your provided background color and decide wether to use your configured "dark" or "light" colors for the text.

It will use `contrast-color($color, $dark, $light)` function. Your Dark and Light colors can be defined using `$contrast-dark` and `$contrast-light`on config file.

The threshold of lightness that activate the contrast can be set using `$lightness-threshold`. 

So, for example, if you provide a `yellow` color as `$contrast-light` and your background-color's lightness is greater than your `$lightness-threshold` value, the text will be set to yellow. Otherwise, the dark version is set.

### Split.

Split color is another strategy, commonly seen on Bootstrap and others. Instead of contrasting against a color, it takes the given color and makes two different mixes: one darker, and one lighter.

You can control the amount of the mix using `$lighten-amount` and `$darken-amount`. 

This way, if you set `limegreen` as the color, you will get a lighter `limegreen` as the background-color and a darker `limegreen` as the text.
