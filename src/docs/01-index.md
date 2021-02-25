---
title: "A basic osamenta for digital projects"
---

### What is this?

This is the third iteration over Huesos.

Born as a SCSS framework made by and for [idiazroncero](http://idiazroncero.com), it has been reduced to a set of standards, resets, mixins and utilities to help fasten front-end development.

It exposes a highly configurable `_config.scss` file and makes use of the following principles, techniques and libraries:

- Vertical rhythm.
- Intrinsic (or algorithmic) design.
- Responsive typography.
- [Breakpoint](http://breakpoint-sass.com/) for a leaner @media-query syntax.
- [Family](https://lukyvj.github.io/family.scss/) for syntactic sugar around nth-* selectors

### Huesos is very opinionated and mixin-first

Even if it is a small framework, Huesos is very opinionated and a set of rules are imposed on the whole project 

- __Margins are always applied as margin-bottom.__  
  TODO: Review
  This means that the main block-level elements that compose a page (`<p>`, `<header>`, `<article>`, `<div>` and the like) *only* have its margin-bottom set, thus ensuring consistent vertical spacing and avoiding [margin overlap and gotchas](https://www.smashingmagazine.com/2019/07/margins-in-css/).


- __Always use SVG__  
  SVG is preferred over icon fonts or PNG images.

- __Vertical rhythm is important, but not mandatory__  
  This version ditches `ritmo.css` in favor of a rem-based approach to vertical rhythm, which is still pretty enforced. You can use `$show-grid` to test it.  
  Vertical rhythm is not mandatory, though. It could and even should be avoided on specific ocasions (like smaller line-heights on bigger type sizes). __Vertical rhythm is to be used as a tool rather than a constraint.__

- __Intrinsic design first, mobile second__  
  We favor the intrinsic (or algorithmic) design over media queries for a perfectly fluid desig. Where not possible, we follow mobile-first approach to @media queries and responsive web design. This results, amongst other things, on all of our @media queries being open-ended (they don't set a `max-width`).  
  Breakpoint helper classes always follow this principle and work by larger breakpoints overriding smaller ones.

- __Everything is born as a mixin__
  Huesos provides a set of default class names for quick prototyping and design, but its core functionality should be able to work the same without enforcing any naming strategy. That's why classes usually implement mixins and delegate all functionality to them.

- __All separator borders are solid.__
  TODO: delete?  
  Borders that indicate boundaries are always set to `solid` and are not configurable. This is because 1) we find solid borders to be the most "solid" choice and 2) exposing that level of detail on our config file would kill this projects's purpose.  
  If you need decorator borders to be set to other value, write them on your own css. If you don't agree with this or don't need separator borders, you can set `$separators` to `false`.

- __Utility classes have their uses__  
  Utility classes are the subject of a heated debate. [Some frameworks](https://tachyons.io/) are based exclusively on utility classes. Some people say they're unmaintanable, bloated and meaningless while others praise the quick prototyping and development you can achieve with them.

  Huesitos is our (optional and small) library of utility classes. We don't favor design by using utility classes, we do embrace BEM and semantical naming but __we have found that a small subset of utility classes on top of BEM is really useful on two cases:__

  1. For overrides so small they won't justify a modifier class (i.e: deleting/adding margins).
  2. For items so small they won't justify a new set of BEM classes.



### Javascript

Huesos 3.0 has prescinded of all third-party libraries. 

This framework is suposed to provide a minimalistic approach to front-end design. It is meant to be opinionated about design principles and strategies, but not about the specific tools to solve common problems. That's why the Javascript tooling for taming elements like `<select>` has been removed.
