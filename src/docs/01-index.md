---
title: "A basic osamenta for your web proyects"
---

### What is this?

This is a custom SCSS framework made by and for [idiaz.roncero](http://idiazroncero.com).

It sets sensible defaults, exposes a highly configurable `_config.scss` file and makes use of the following libraries and techniques:

- [Ritmo](https://github.com/marzeelabs/ritmo) for vertical rhythm.
- [Breakpoint](http://breakpoint-sass.com/) for a leaner @media-query syntax.
- [Family](https://lukyvj.github.io/family.scss/) for syntactic sugar around nth-* selectors
- [Palx](https://palx.jxnblk.com/) for creating a palette based on a single color and its shades.
            

[Animate.scss](https://github.com/geoffgraham/animate.scss) has been dropped but is still a recomendation for handling UX/UI animations. You can easily add it to your project using `yarn add animate.scss`
 

### Opinionated stuff

Huesos is not as opinionated as a closed UI kit like Bootstrap or Foundation, but there are some common rules that are imposed on the whole project (and thus not exposed on the `_config.scss` file:)

- __Separator margins are always applied as margin-bottom.__ This means that the main block-level elements that compose a page (`<p> <header> <article> <div>` and the like) *only* have a margin-bottom set. This ensures consistent vertical spacing and avoids margin overlap.

- __All separator borders are solid.__ Borders that indicate boundaries are always set to `solid` and not configurable. If you need decorator borders to be set to other value, write them on your own css. If you don't agree with this or don't need separator borders, you can set `$separator-width` to `0`.

- __Always use SVG__ No icon fonts, no images. For iconography, the use of SVG is always preferred.

- __Vertical rhythm is important, but not mandatory__ We use ritmo.scss and its own functions and mixins (mainly `ritmo($unit)`) to keep a constant vertical rhythm. Still, vertical rhythm is not mandatory, it can and should be avoided on specific ocasions like big headings. Vertical rhythm is to be used as a tool rather than a constraint.

- __Mobile-First__ We use the mobile-first approach to @media queries and responsive web design. This results, amongst other things, on all of our @media queries being open-ended (they don't have a `max-width`). Breakpoint helper classes always follow this principle and work by larger breakpoints overriding smaller ones.


### Javascript

Some nasty HTML stuff (lixe the infamous `<select>`) need to be tamed. We use JS for this.

Javascript libraries are bundled into Huesos following this criteria:

- Zero overweight. Small, concise, single-purpose libraries
- Vanilla javascript. jQuery shouldn't be a dependency.

These are the winners:

- [Selectr](https://github.com/Mobius1/Selectr) for vanilla-JS, Chosen-like `<select>` fields.


