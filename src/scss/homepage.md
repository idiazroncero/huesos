## A basic osamenta <br/> for your web proyects

<hr/>

<section>

### What is this?

This is a custom SCSS framework made by and for [idiaz.roncero](http://idiazroncero.com).

It sets sensible defaults, exposes a highly configurable `_config.scss` file and makes use of the following libraries and techniques:

- [Ritmo](https://github.com/marzeelabs/ritmo) for vertical rhythm.
- [Breakpoint](http://breakpoint-sass.com/) for a leaner @media-query syntax.
- [Family](https://lukyvj.github.io/family.scss/) for syntactic sugar around nth-* selectors

[Animate.scss](https://github.com/geoffgraham/animate.scss) has been dropped but is still a recomendation for handling UX animations. You can easily add it to your project using `npm install animate.scss`

</section>

<section>

### Opinionated stuff

Huesos is not as opinionated as a closed UI kit like Bootstrap or Foundation, but there are some common rules that are heavily opinionated and thus not exposed on the `_config.scss` file.

The Huesos' "decalogue" is as follows:

- __Separator margins are always applied as margin-bottom.__ This means that the main block-level elements that compose a page (`<p> <header> <article> <section>` and the like) *only* have a margin-bottom set. This ensures consistent vertical spacing and avoids margin overlap.

- __All separator borders are solid.__ Borders that indicate boundaries are always set to `solid` and not configurable. If you need decorator borders to be set to other value, write them on your own css. If you don't agree with this or don't need separator borders, you can set `$separator-width` to `0`.

- __Always use SVG__ No icon fonts, no images. For iconography, the use of SVG is always preferred.

- __Vertical rhythm is important, but not mandatory__ We use ritmo.scss and its own functions and mixins (mainly ritmo()) to keep a constant vertical rhythm. Still, vertical rhythm is not mandatory, it can and should be avoided on specific ocasions like big headings or anytime the eye dictates. Vertical rhythm is to be used as a tool rather than a constraint.

</section>

<section>

### Third-parties are the best parties

Some nasty HTML stuff (lixe the infamous `<select>` inputs or responsive HTML tables) need to be "normalized" and tamed. We use JS for this.

Javascript libraries are bundled into Huesos following this criteria:

- Zero overweight. Small, concise, single-purpose libraries
- Vanilla javascript. jQuery shouldn't be a dependency right from the start.

These are the winners:

- [Selectr](https://github.com/Mobius1/Selectr) for vanilla-JS, Chosen-like `<select>` fields.

</section>

