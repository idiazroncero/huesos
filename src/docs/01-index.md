---
title: "A basic osamenta for your web proyects"
---

### What is this?

This is a custom SCSS framework made by and for [idiaz.roncero](http://idiazroncero.com).

It sets sensible defaults, exposes a highly configurable `_config.scss` file and makes use of the following libraries and techniques:

- [Ritmo](https://github.com/marzeelabs/ritmo) for vertical rhythm.
- [Breakpoint](http://breakpoint-sass.com/) for a leaner @media-query syntax.
- [Family](https://lukyvj.github.io/family.scss/) for syntactic sugar around nth-* selectors

### Huesos is (somewhat) opinionated

Huesos is not as opinionated as tools like Bootstrap or Foundation, but there are some common rules that are imposed on the whole project (and thus not exposed on the `_config.scss` file)

- __Margins are always applied as margin-bottom.__  
  This means that the main block-level elements that compose a page (`<p>`, `<header>`, `<article>`, `<div>` and the like) *only* have its margin-bottom set, thus ensuring consistent vertical spacing and avoiding [margin overlap and gotchas](https://www.smashingmagazine.com/2019/07/margins-in-css/).


- __Always use SVG__  
  No icon fonts, no images. SVG rules.


- __Vertical rhythm is important, but not mandatory__  
  We use ritmo.scss and its own functions and mixins (mainly `ritmo($unit)`) to keep a constant vertical rhythm. You can use `$show-grid` to test it.  
  Still, vertical rhythm is not mandatory, it could and even should be avoided on specific ocasions (like smaller line-heights on bigger type sizes). __Vertical rhythm is to be used as a tool rather than a constraint.__


- __Mobile-First__  
  We use the mobile-first approach to @media queries and responsive web design. This results, amongst other things, on all of our @media queries being open-ended (they don't set a `max-width`).  
  Breakpoint helper classes always follow this principle and work by larger breakpoints overriding smaller ones.

- __(Almost) everyhting is born as a mixin__
  Huesos provides a set of class names but its core functionality should be able to work the same without enforcing any namint strategy. That's why classes usually implement mixins, and (almost) all the functionality is abstracted to the mixin. 


- __All separator borders are solid.__  
  Borders that indicate boundaries are always set to `solid` and are not configurable. This is because 1) we find solid borders to be the most "solid" choice and 2) exposing that level of detail on our config file would kill this projects's purpose.  
  If you need decorator borders to be set to other value, write them on your own css. If you don't agree with this or don't need separator borders, you can set `$separators` to `false`.


- __Utility classes have their uses__  
  Utility classes are the subject of a heated debate. [Some frameworks](https://tachyons.io/) are based exclusively on utility classes. Some people say they're unmaintanable, bloated and meaningless while others praise the quick prototyping and development you can achieve with them.

  Huesitos is our (optional and small) library of utility classes. We don't favor design by using utility classes, we do embrace BEM and semantical naming but __we have found that a small subset of utility classes on top of BEM is really useful on two cases:__

  1. For overrides so small they won't justify a modifier class (i.e: deleting/adding margins).
  2. For items so small they won't justify a new set of BEM classes.



### Javascript

Some nasty native HTML shortcomings (like the infamous `<select>`) need to be tamed. We use a little (and optional) JS for this.

Javascript libraries that are bundled follow this requirements:

- __Zero overweight.__ Small, concise, single-purpose libraries
- __Vanilla javascript.__ jQuery shouldn't be a dependency.

Apart from custom solutions, Huesos make use of the following JS third-pary libraries:

- [Selectr](https://github.com/Mobius1/Selectr) for vanilla-JS, Chosen-like `<select>` fields.
