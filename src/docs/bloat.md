---
title: How to avoid bloat
status: draft
---

Many parts of huesos' include programatically generated classes, looping over maps that loop over maps that loop over maps, etc...

Misuse or lack of configuration of some of this parts can result on overtly bloated CSS files, filled with selectors that you will never use.

Follow these advices to avoid sending extra KBs to your users:


## Audit your button strategies

`$button-alternative-strategies` is a powerful weapon that will generate a ton of utility classes for your alternative buttons.

**Use it if you really need alternative buttons**, i.e, buttons whose styling difer from the default ones.

Consider setting `$button-alternative-strategies` to `false` if you only need one global button style... which might be **the most common case**.
