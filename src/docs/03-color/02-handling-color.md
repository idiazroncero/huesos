---
title: Handling color
---

Huesos 3.0 has radically changed approach to color.

From SCSS based, partially auto-generated colors we have switched to a full CSS Variables palette where each color is individually chosen.

From past iterations we have come to the conclusion that programmatically generating colors (tints, shades, etc) is prone to bad color schemes. The math can be right but the outcome can easily feel wrong, design-wise.

Instead, we use a "manual" approach with a few helpers for some basic contrast operations. Each color can define its own
contrast color and two "split" values (see [palette](/docs/color/palette))

## Contrasting color: two strategies

When reading trough the docs and configuration you will find two different strategies on how we contrast a color against a background:

### Contrast

A pure "contrast" solution will check your provided background color and use its configured contrast color. This can be configured using the [contrast values](/docs/color/palette#contrast-values)

You can hardcode the contrast color or use the `contrast-color($color, $dark, $light)` function to return the correct color, expressed as a CSS Custom Property.

<section>
  <p class="minititle">Example:</p>
  <div class="grid grid--gutterless grid--small--2col">
    <div class="grid-item p bg-primary color-primary-contrast">Contrasted text against primary</div>
    <div class="grid-item p bg-secondary color-secondary-contrast">Contrasted text against secondary</div>
  </div>
</section>


### Split

Split color is a completely different strategy, commonly seen on Bootstrap and others. 

Instead of contrasting __against__ a color, it takes the given color and outputs two different mixes: one darker, and one lighter.

On Huesos 3.0, instead of calculating the mixes on the fly, those are hardcoded as CSS Custom Properties.

<section>
  <p class="minititle">Example:</p>
  <div class="grid grid--gutterless grid--small--2col">
    <div class="grid-item p bg-primary-split-light color-primary-split-dark">Split light over dark</div>
    <div class="grid-item p bg-secondary-split-light color-secondary-split-dark">Split light over dark</div>
  </div>
  <div class="grid grid--gutterless grid--small--2col">
    <div class="grid-item p bg-primary-split-dark color-primary-split-light">Split dark over light</div>
    <div class="grid-item p bg-secondary-split-dark color-secondary-split-light">Split dark over light</div>
  </div>
</section>

