# HUESOS
#### Shake your osamenta
v0.0.7 | By [idiaz.roncero](http://idiazroncero.com)

__Huesos__ is idiaz.roncero's front-end starterkit. It provides a basic SCSS-JS osamenta by combining some preferred and battle-tested tools.

idiaz.roncero is a Madrid-based front-end dev. He does not enjoy talking about himself in the third person but, hey, this is a Readme.md.

## Install

Clone, open `src/scss/_config.scss` and tweak the values to adapt to your needs.

Run the build scripts (see [Build Process](#build-process)).

## Use as a submodule

Usually it will be needed to include Huesos inside another Git repo. In that case, in order to keep tracking changes the best solution is to add as a submodule and create a local branch of the code.

## Toolkit

__Huesos__ shamelessly grabs pieces of code from these amazing projects:

#### UIKit / Concise.css / Foundation

Grabs normalization, basic components, mixins, helpers , UI... from here and there.

#### Ritmo

This is a proud Compass' vertical rhythm heir. We borrow their vertical rhythm mixins && functions. 

#### Susy

No one will ever beat susy.


## Build process

__Huesos__ is built upon yarn/npm, with webpack 3 as the bundling tool.

#### NPM Scripts

For further reference, see `package.json`

`npm run build` runs webpack. No prod/dev environments are used: this is a static assets generator, so the output is always the final bundle. `npm run huesos` is an alias to this. 

This script also runs `npm run sass` on `./src/kss-src`. The KSS styleguide template is a separate NPM/Yarn project. If you want to only compile the docs, run `npm run sass; npm run postcss` inside of the `kss-src` folder.

`npm run js:lint` lints all javascript, including webpack files. ESLint also works during build, but it is only scoped to app files.

`npm run js:css` lints all css.

#### Javascript: Babel + ESLint

Javascript runs through Babel transpilers and ESLint with custom rules defined in `.eslintrc.js`

#### CSS: Sass + Autoprefixer

SCSS is compiled to CSS through Sass using node-sass and then post-processed using autoprefixer.

#### KSS-Node Styleguide

Webpack automagically compiles a living styleguide on `./docs`. It uses KSS-node under the hood.

___

BTW, in spanish 'huesos' means *bones* and 'osamenta' is a fancy way to say *skeleton*.
