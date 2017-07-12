# HUESOS
#### Shake your osamenta
v0.0.3 | By [idiaz.roncero](http://idiazroncero.com)

__Huesos__ is idiaz.roncero's front-end starterkit. It provides a basic SCSS-JS osamenta by combining some preferred and battle-tested tools.

## Toolkit

__Huesos__ shamelessly grabs pieces of code from these amazing projects:

#### UIKit / Concise.css / Foundation

Grabs normalization, basic components, mixins, helpers , UI... from here and there.

#### Ritmo

This is a proud Compass' vertical rhythm heir. We borrow their vertical rhythm mixins && functions. 

#### Susy

Presentations aren't needed here. No grid system will *ever* beat Susy. No one. No f*****g way.
(Well, CSS grid will, but that's something completely different, that's an official CSS spec. We talkin' about SCSS tools here)


## Build process

__Huesos__ is built upon yarn/npm, with webpack 2 as the bundling tool.

#### NPM Scripts

For further reference, see `package.json`

`npm run build` runs webpack. No prod/dev environments are used: we always output the final bundle.

`npm run js:lint` lints all javascript, including webpack files. ESLint also works during build, but it is only scoped to app files.

#### Javascript: Babel + ESLint

Javascript runs through Babel transpiling and ESLint with custom rules defined in `.eslintrc.js`

#### CSS: Sass + Autoprefixer

SCSS is compiled to CSS through Sass using node-sass and then post-processed using autoprefixer.

___

BTW, in spanish 'huesos' means *bones* and 'osamenta' is a fancy way to say *skeleton*.
