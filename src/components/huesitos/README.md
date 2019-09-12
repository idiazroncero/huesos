Huesitos is a set of utility classes for borders. backgropunds, paddings, etc.

`$gutter` is always applied as margin, unless a gutter modifier class is present.

### Gutter modifiers

Adding a `$half-gutter` or `$quarter-gutter` modifier class will set all paddings to the desired ratio.

### Margin

- `.m`             - Applies all margins
- `.mt`             - Applies a margin-top
- `.mr`             - Applies a margin-right
- `.mb`             - Applies a margin-bottom
- `.ml`             - Applies a margin-left
- `.m0`             - Deletes all margins

### Padding 

- `.p`             - Applies all paddings
- `.pt`             - Applies a padding-top
- `.pr`             - Applies a padding-right
- `.pb`             - Applies a padding-bottom
- `.pl`             - Applies a padding-left
- `.p0`             - Deletes all paddings

### Borders

- `.b`             - Applies all borders
- `.bt`             - Applies a border-top
- `.br`             - Applies a border-right
- `.bb`             - Applies a border-bottom
- `.bl`             - Applies a border-left
- `.b0`             - Deletes all borders

### Text align

- `.tl` - Aligns text to left
- `.tc` - Aligns text to center
- `.tr` - Aligns text to right

### Typography and helpers

- `.up` - Sets uppercase
- `.st` - Sets font-weight to bold
- `.em` - Sets font-style to italic
- `.ls` - Sets letter spacing as `$letter-spacing`
- `.sh` - Applies `$box-shadow`

### Inversion

- `.invert` - Inverts colors.


### Background Color

A set of helper classes that map to common colors from the palette. The text color is contrasted.

Classes are auto-generated based on the sass `$colors` map and follow the schema `$bg-$palette-$name`.

We showcase some examples here, but the list of classes could be much bigger or smaller, depending on your color palette.

You can avoid bloating your css with these helper classes by setting `$generate-color-classes: false`.




