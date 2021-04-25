---
title: Color Reference
---

### Full Reference

If you want to implement a theme, it is advisable to override all variables. This is an example of a color theme on Huesos (it might vary because some variations, like split and contrast, might be dinamically generated):

```scss
:root {
  --color-primary: #641CE8;
  --color-primary-contrast: var(--color-text-body-contrast);
  --color-primary-split-light: #E7D1FD;
  --color-primary-split-dark: #1B056F;
  --color-secondary: #F3C852;
  --color-secondary-contrast: red;
  --color-secondary-split-light: #FEF9DC;
  --color-secondary-split-dark: #744E0F;
  --color-black: #393541;
  --color-white: #fff;
  --color-utility-separator: #c8c4cf;
  --color-utility-focus: #641CE8;
  --color-text-body: #393541;
  --color-text-body-contrast: #fff;
  --color-text-heading: #393541;
  --color-mark-text: #393541;
  --color-mark-background: #F7DA7C;
  --color-background-body: #fff;
  --color-background-dark: #4d4757;
  --color-background-light: #c8c4cf;
  --color-state-disabled: #898198;
  --color-state-success: #10A84D;
  --color-state-success-contrast: var(--color-text-body-contrast);
  --color-state-success-split-light: #CDFACD;
  --color-state-success-split-dark: #035041;
  --color-state-danger: #C4281D;
  --color-state-danger-contrast: var(--color-text-body-contrast);
  --color-state-danger-split-light: #F9BEA4;
  --color-state-danger-split-dark: #5E051D;
  --color-state-warning: #B5A301;
  --color-state-warning-contrast: var(--color-text-body-contrast);
  --color-state-warning-split-light: #F7F095;
  --color-state-warning-split-dark: #564A00;
  --color-link-default: #641CE8;
  --color-link-visited: #9052F1;
  --color-link-focus: #270886;
  --color-link-hover: #270886;
  --color-link-active: #270886;
  --color-link-decoration: #E7D1FD;
  --color-link-decoration-hover: #641CE8;
  --color-input-border: #c8c4cf;
  --color-input-pseudo-border: #746c84;
  --color-code-inline: #393541;
  --color-code-inline-background: #FDF1BA;
  --color-code-block: #fff;
  --color-code-block-background: #393541;
  --color-button-primary-default: #641CE8;
  --color-button-primary-contrast: var(--color-text-body-contrast);
  --color-button-secondary-default: #F3C852;
  --color-button-secondary-contrast: var(--color-text-body-contrast);
  --color-button-success-default: #10A84D;
  --color-button-success-contrast: var(--color-text-body-contrast);
  --color-button-warning-default: #B5A301;
  --color-button-warning-contrast: var(--color-text-body-contrast);
  --color-button-danger-default: #C4281D;
  --color-button-danger-contrast: var(--color-text-body-contrast);
}

```
