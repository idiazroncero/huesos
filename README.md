# Huesos

__Shake your osamenta!__

This is a custom SCSS framework made by and for [idiaz.roncero](http://idiazroncero.com).

It sets sensible defaults, exposes a highly configurable `_config.scss` file and makes use of the following libraries and techniques:

- [Ritmo](https://github.com/marzeelabs/ritmo) for vertical rhythm.
- [Breakpoint](http://breakpoint-sass.com/) for a leaner @media-query syntax.
- [Family](https://lukyvj.github.io/family.scss/) for syntactic sugar around nth-* selectors

[Animate.scss](https://github.com/geoffgraham/animate.scss) has been dropped but is still a recomendation for handling UX animations.

It is "somehow opinionated", meaning that is neither a Bootstrap-like complete set of closed and almost zero-config components nor a bare-bones css-reset and starterkit.

## NPM scripts

`yarn build` - Compiles the styleguide and css production assets.
`yarn huesos` - Alias for `yarn build`


## Add to an existing project

### As a submodule

`git submodule https://github.com/idiazroncero/huesos`

It is advisable to create a local branch in order to separate your developments from the origin/master branch and yet be able to merge the changes to the master into your project.

### As a npm package (recommended)

`yarn add huesos` to install as a dependency of your project.

Then, the recommended way of work is to create your own scss folder and add the following lines:

````
@import "path/or/alias/to/node_modules/huesos/dependencies";
@import "config";
@import "path/or/alias/to/node_modules/huesos/huesos";
````

__Important:__ you need to `@import` dependencies before config. This is because many mixins of the third-party libraries (like Ritmo) are used for calculations on `_config.scss`.

## Still todo__

- Breadcrumb-like nav system
- Configurable menus
- Couple palettes with https://palx.jxnblk.com/e4bb97#yellow
- Menu right should right-align items
- Has any logic to have color palettes repeated on the sassmap?
- Add poĺyfluid-sizing https://www.smashingmagazine.com/2017/05/fluid-responsive-typography-css-poly-fluid-sizing/
- Allow to deactivate grid on responsive grid on smaller viewports
