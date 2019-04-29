---
title: How to avoid bloat
status: draft
---

Many parts of huesos' include programatically generated classes, looping over maps that loop over maps that loop over maps, etc...

Misuse or lack of configuration of some of this parts can result on overtly bloated CSS files, filled with selectors that you will never use.

Follow these advices to avoid sending extra KBs to your users:


### Audit your button strategies and link strategies

Both `$button-alternative-strategies` and `$link-alternative-strategies` are powerful weapons that will generate a ton of utility classes for your alternative buttons and links.

**Use it if you really need alternatives**, i.e, buttons and links whose styling needs to difer from the default ones.

Consider setting `$button-alternative-strategies` and/or `$link-alternative-strategies` to `false` if you only need one global button style... which might be **the most common case**.

### Control your grid

`$max-grid-cols` will generate lots of extra classes for handling every possible number of columns on every defined breakpoint.

Check how many columns will you need and update this variable accordingly.

### Check Huesitos

You might not need the utility classes at all. Set `$huesitos` to false to avoid it.

You can set `$generate-color-classes`to false to avoid generating all the palette's background-color classes.
