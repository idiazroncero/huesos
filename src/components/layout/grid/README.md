Establishes a grid using `display:grid`. Uses a float fallback for less capable browsers.

No row height is set: it depends on the content.


## Grid columns

By default, the `.grid` class doesn't apply any columns (this is needed for responsive design). Modifier classes can change this. You get as many modifier classes as `$max-grid-cols` (set it to false to avoid generating any markup).

The scheme is as follows: `$grid--#{N}col`, being N the number of columns needed.


## Responsive

Inestad of setting a grid, you can use a set of helper classes to define the specific number of columns on every breakpoint.

The pattern is as follows: `.grid--[breakpoint]--[number]col`. So, a 11-col grid from `$medium` breakpoint up would be `$grid--medium--11col` (provided you have as many columns!)

We follow the mobile-first approach to responsive web design, so you will need to stack your classes understanding that no `max-width` constraint is set and every breakpoint will be active until a larger breakpoint weighs in.


## Gutterless grid

Modifier class `$grid--gutterless` removes all gutter from the grid.
