Establishes a grid using `display:grid`. Uses a float fallback for less capable browsers.

No row height is set: it depends on the content.


## Grid columns

By default, the `.grid` class doesn't apply any columns (this is needed for responsive design). Modifier classes can change this. You get as many modifier classes as `$max-grid-cols` (set it to false to avoid generating any markup).

The scheme is as follows: `$grid--#{N}col`, being N the number of columns needed.


## Responsive

__Note that you will need to activate the fullscreen preview to see the breakpoints working properly__

Inestad of setting a grid, you can use a set of helper classes to define the specific number of columns on every breakpoint.

The pattern is as follows: `.grid--[breakpoint]--[number]col`. So, a 11-col grid from `$medium` breakpoint up would be `$grid--medium--11col` (provided you have as many columns!)

We follow the mobile-first approach to responsive web design, so you will need to stack your classes understanding that no `max-width` constraint is set and every breakpoint will be active until a larger breakpoint weighs in.


## Intrinsic grid

The mixin `intrinsic-grid()` uses [intrinsic CSS](https://medium.com/level-up-web/a-sneak-peek-at-intrinsic-web-design-cb179eea7c9e) design and the [RAM pattern](https://vycke.dev/blog/css-layout-patterns/) to style fully responsive grids **without using media queries**.

Intrinsic grids automatically place the fitting children of the grid element taking into account a min-width that works as a hard limit.

Intrinsic grid is great when you don't have any specific row requirements.

By default, Huesos provides three default intrinsic grids: `.intrinsic-grid--small`, `.intrinsic-grid--medium` and `.intrinsic-grid--large`


## Gutterless grid

Modifier class `$grid--gutterless` removes all gutter from any grid.