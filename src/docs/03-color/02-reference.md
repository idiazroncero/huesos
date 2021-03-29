---
title: Color Reference
---

The color palette is generated from the `$colors` map on `_config.scss`. This map can be extended on the same file, and it is immediately parsed and converted into a set of CSS Custom Properties (variables) that are used globally.

The use of CSS Custom Properties allow for easier theme overriding.

Consider the following scenario: a theme based on a color pair is set globally on the `:root`, and link status inherit from this colors.

```scss
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
### Full Reference.

If you want to implement a theme, it is advisable to override all variables. This is an example of a color theme on Huesos (it might vary because some variations, like split and contrast, might be dinamically generated):

```scss
:root {
  // Primary colors and its contrast values.
  --color-primary
  --color-secondary
  --color-primary-contrast
  --color-secondary-contrast
  // Global black and white
  --color-black
  --color-white
  // Utilities
  --color-utility-separator
  --color-utility-focus
  // Text
  --color-text-body
  --color-text-body-contrast
  --color-text-heading
  // Mark and text selection
  --color-mark-text
  --color-mark-background
  // Backgrounds
  --color-background-body
  --color-background-dark
  --color-background-light
  // Semantic state
  --color-state-disabled
  --color-state-success
  --color-state-success-contrast
  --color-state-danger
  --color-state-danger-contrast
  --color-state-warning
  --color-state-warning-contrast
  // Links
  --color-link-default
  --color-link-visited
  --color-link-focus
  --color-link-hover
  --color-link-active
  --color-link-decoration
  --color-link-decoration-hover
  // Forms
  --color-input-border
  --color-input-pseudo-border
  // Code
  --color-code-inline-background
  --color-code-inline
  --color-code-block-background
  --color-code-block
  // Split combinations
  --color-split-primary-light
  --color-split-primary-dark
  --color-split-secondary-light
  --color-split-secondary-dark
  --color-split-state-success-light
  --color-split-state-success-dark
  --color-split-state-danger-light
  --color-split-state-danger-dark
  --color-split-state-warning-light
  --color-split-state-warning-dark
  // Buttons, generated dinamically from $buttons map
  --color-button-primary-default
  --color-button-primary-contrast
  --color-button-secondary-default
  --color-button-secondary-contrast
  --color-button-success-default
  --color-button-success-contrast
  --color-button-warning-default
  --color-button-warning-contrast
  --color-button-danger-default
  --color-button-danger-contrast
}
```

### Current values

<section>
  <p class="minititle">Base</p>
  <div class="grid grid--gutterless grid--small--2col grid--medium--3col">
    <div class="grid-item p bg-base-primary">Primary</div>
    <div class="grid-item p bg-base-secondary" >Secondary</div>
    <div class="grid-item p bg-base-separator" >Separator</div>
    <div class="grid-item p bg-base-black" >Black</div>
    <div class="grid-item p bg-base-white" >White</div>
  </div>
</section>
<section>
  <p class="minititle">Text</p>
  <div class="grid grid--gutterless grid--small--2col grid--large--3col">
    <div class="grid-item p bg-text-primary">Primary</div>
    <div class="grid-item p bg-text-heading" >Heading</div>
    <div class="grid-item p bg-text-mark" >Mark</div>
  </div>
</section>
<section>
  <p class="minititle">State</p>
  <div class="grid grid--gutterless grid--small--2col grid--large--3col">
    <div class="grid-item p bg-state-muted">Muted</div>
    <div class="grid-item p bg-state-success" >Success</div>
    <div class="grid-item p bg-state-warning" >Warning</div>
    <div class="grid-item p bg-state-error" >Error</div>
  </div>
</section>