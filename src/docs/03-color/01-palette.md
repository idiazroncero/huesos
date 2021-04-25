---
title: Palette generation
---

The color palette is generated from the `$colors` map on `_config.scss`. This map can be extended on the same file, and it is immediately parsed and converted into a set of CSS Custom Properties (variables) that are used globally.

The use of CSS Custom Properties has some inconveniences compared to SCSS variables but they allow for easier theme overriding and will soon become the _de facto_ standard.

Consider the following scenario: a theme is set globally on the `:root`, and link status inherit from this colors.

```sass
:root {
  --primary: red;
  --secondary: green;
  --link: --primary;
  --link-hover: --secondary;
}
```

Overriding the theme on a single component is as easy as overriding the needed variables. The changes will be inherited without the need to rewrite everything.

```scss
.my-element {
  // Links are blue now, remain green on hover.
  --primary: blue;
}
```

### Compiling colors

Huesos will recursively iterate over the `$colors` variable and generate predictable and namespaced CSS custom properties using the following rules:

#### Nesting

__Nesting is allowed and can be used to generate namespaces__

Given the following code:
 
```scss
$colors : (
  plain: #000000;
  namespace : (
    key: #001122,
    subnamespace : (
      key: #112233,
      key2: #223344,
      // ...and so on
    )
  )
)
```

It will output the following variables:

```css
:root {
  --color-plain: #000000;
  --color-namespace-key: #001122;
  --color-namespace-subnamespace-key: #112233;
  --color-namespace-subnamespace-key2: #223344;
}
```

This means that __the allowed values for a color key are two__: either a valid
color value or a map.
  
#### Base keyword 

__The special keyword "base" is reserved for the base value of a nested map and will be ignored on the output__

There is a problem on the previous approach: you can't get a properly named 
"root" property on a map. To solve this, the special "base" key value
won't be outputed and can be used to generate a root name on a nested map.

This sounds a little convolute. Take this scenario, where we use a map to
output an error color and some variants... but we want to have a plain 
`--color-state-error` variable.

```scss
$colors : (
  state : (
    error: (
      base: red,
      light: yellow,
      darken: brown,
    )
  )
)
```

"Base" will be bypassed and it will output the following variables:

```css
:root {
  --color-state-error: red;
  --color-state-error-light: yellow;
  --color-state-error-dark: brown;
}
```
#### Contrast values

__There are special keywords reserved for contrast and split colors__

As you can read on "Handling color", Huesos v3 takes a bold stance against math-based
color calculations (lighten, darken, etc) for contrasting colors.

Usually, the math can be right but the design is bleak. This is why we propose instead
a manual selection of contrast colors that can be expressed as special keywords on any
color map. 

For example, this code:

```scss 
$colors : (
  primary: (
    base: $primary,
    contrast: $black,
    split: (
      light: $primary-100,
      dark: $primary-900,
    ),
  ),
  secondary: (
    base: $secondary,
    contrast: $gray-100,
    split: (
      light: $secondary-100,
      dark: $secondary-900,
    ),
  ),
);
```

Will output the following variables

```css 
:root {
  --color-primary: #641CE8;
  --color-primary-contrast: #000;
  --color-primary-split-light: #E7D1FD;
  --color-primary-split-dark: #1B056F;
  --color-secondary: #F3C852;
  --color-secondary-contrast: #EEE;
  --color-secondary-split-light: #FEF9DC;
  --color-secondary-split-dark: #744E0F;
}
```
Those are specially named variables that will be used for contrast strategies.
See "Handling color" for more info.


### Default values and example

The following is an example of some (not all) of the default values in use
and some combinations of contrast and split contrast strategies.

<section>
  <p class="minititle">Base colors</p>
  <div class="grid grid--gutterless grid--small--2col grid--medium--3col">
    <div class="grid-item p bg-primary color-primary-contrast">Primary</div>
    <div class="grid-item p bg-secondary color-secondary-contrast" >Secondary</div>
    <div class="grid-item p bg-black color-white" >Black</div>
    <div class="grid-item p bg-white color-black" >White</div>
  </div>
</section>
<section>
  <p class="minititle">State colors</p>
  <div class="grid grid--gutterless grid--small--2col grid--large--3col">
    <div class="grid-item p bg-state-success color-state-success-contrast">Success</div>
    <div class="grid-item p bg-state-warning color-state-warning-contrast">Warning</div>
    <div class="grid-item p bg-state-danger color-state-danger-contrast">Error</div>
  </div>
  <div class="grid grid--gutterless grid--small--2col grid--large--3col">
    <div class="grid-item p bg-state-success-split-light color-state-success-split-dark">Success (split)</div>
    <div class="grid-item p bg-state-warning-split-light color-state-warning-split-dark">Warning (split)</div>
    <div class="grid-item p bg-state-danger-split-light color-state-danger-split-dark">Error (split)</div>
  </div>
  <div class="grid grid--gutterless grid--small--2col grid--large--3col">
    <div class="grid-item p bg-state-success-split-dark color-state-success-split-light">Success (split inverse)</div>
    <div class="grid-item p bg-state-warning-split-dark color-state-warning-split-light">Warning (split inverse)</div>
    <div class="grid-item p bg-state-danger-split-dark color-state-danger-split-light">Error (split inverse)</div>
  </div>
</section>
