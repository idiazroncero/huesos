# Huesos

__Shake your osamenta!__

This is a custom SCSS framework made by and for [idiaz.roncero](http://idiazroncero.com).

It sets sensible defaults, exposes a highly configurable `_config.scss` file and makes use of the following libraries and techniques:

- [Fractal](https://fractal.build) for building a live syleguide and documentation.
- [Breakpoint](http://breakpoint-sass.com/) for a leaner @media-query syntax.
- [Family](https://lukyvj.github.io/family.scss/) for syntactic sugar around nth-* selectors
- [Every Layout](https://every-layout.dev/) for clever and arithmetic layouts.
- [BEM](http://getbem.com/introduction/) for naming conventions
- [Ritmo](https://github.com/marzeelabs/ritmo) for vertical rhythm.
- [Palx](https://palx.jxnblk.com/) for creating a palette based on a single color and its shades.

It is "somehow opinionated", meaning that is neither a Bootstrap-like complete set of closed and almost zero-config components nor a bare-bones css-reset and starterkit.

Browse [the docs and living syle guide](https://idiazroncero.github.io/huesos/) for further information.

## NPM scripts

### The shorthands

`build` - Compiles the styleguide and css production assets.  
`huesos` - Alias for `yarn build`  
`serve` - Starts a live server for the styleguide. Note: SCSS won't get compiled.  

### CSS

#### For Huesos 
`css` - Compiles SASS to CSS and applies PostCSS. Same as applying `css:sass` and `css:post`.  
`css:watch` - Starts a node-sass watch daemon.  
`css:sass` - Compiles SASS to CSS without sourcemaps.  
`css:post` - Applies PostCSS to the CSS files.  

#### For the styleguide
`css:mandlebrot` - Compiles the styleguide's SASS (`theme/huesos-mandlebrot.scss`)to CSS.  
`css:mandlebrot:watch` - Watches the styleguide's SASS.

### Styleguide (Fractal)
`styleguide:build` - Builds the syleguide assets.  
`styleguide:serve` - Starts a live server for the styleguide.

### Linters
`lint:js`: Lints JS.  
`lint:css`: Stylelints CSS.

### JS
`js:build`: Runs webpack.

### Others
`test`: Compiles css to the `test` folder. This folder contains a simpler, static HTML file used for testing all HTML elements. It can be used as a quicker, simpler alternative to the Fractal styleguide.


## Add to an existing project

### As a submodule (avoid it!)

`git submodule https://github.com/idiazroncero/huesos`

It is advisable to create a local branch in order to separate your developments from the origin/master branch and yet be able to merge the changes to the master into your project.

### As a npm/yarn package (recommended)

Use `yarn add huesos` to install huesos as a dependency of your project.

Copy `src/scss/_config.scss` to your project and tweak it.

On your SCSS main file, add the following lines before your code (where `path/to/your/config` points to your local copy of `src/scss/_config.scss`):

````
@import "path/or/alias/to/node_modules/huesos/dependencies";
@import "path/to/your/config";
@import "path/or/alias/to/node_modules/huesos/huesos";

/* Start coding here */
````

__Important:__ you need to `@import` dependencies before config. This is because many mixins of the third-party libraries (like Ritmo) are used for calculations on `_config.scss`.

## In the near future...
- Basic svg icon library
- Journalistic "sumarios" using blockquotes (as a component)
- Convert selectr to our CSS style
- Animation / transition system with prefers-reduced-motion
- Substitute ritmo.css with rems or similar
- Apply intrinsic CSS sizing to grid system