# Huesos

__Shake your osamenta!__

This is a custom SCSS framework made by and for [idiaz.roncero](http://idiazroncero.com).

It sets sensible defaults, exposes a highly configurable `_config.scss` file and makes use of the following libraries and techniques:

- [Fractal](https://fractal.build) for building a live syleguide and documentation.
- [Breakpoint](http://breakpoint-sass.com/) for a leaner @media-query syntax.
- [Family](https://lukyvj.github.io/family.scss/) for syntactic sugar around nth-* selectors
- [BEM](http://getbem.com/introduction/) for naming conventions

It is "somehow opinionated", meaning that is neither a Bootstrap-like complete set of closed and almost zero-config components nor a bare-bones css-reset and starterkit.

Browse [the docs and living syle guide](https://huesos.idiazroncero.com) for further information.

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
`lint:css`: Stylelints CSS.


## How to install

Use `npm install huesos` or `yarn add huesos` to install huesos as a dependency of your project.

Copy `src/scss/_config.scss` to your project and tweak it.

On your SCSS main file, add the following lines before your code (where `path/to/your/config` points to your local copy of `src/scss/_config.scss`):

````scss
@import "huesos/dependencies";
@import "path/to/your/config";
@import "huesos/huesos";

/* Start coding here */
````

Please note that you will need to tweak your sass compiler to resolve `@import` rules also to `node_modules`. This can be achieved with `--load-path` on Dart Sass and `--include-path` on Node Sass.

__Important:__ you need to `@import` dependencies before config. This is because some mixins and functions are used for calculations on `config`.