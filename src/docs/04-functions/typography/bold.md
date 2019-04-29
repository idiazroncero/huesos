---
title: bold($element)
---

Returns the correct bold weight for the given html `element`.

Internally, uses `$font-secondary-items` to decide wich font-weight to use.

It only makes sense to use this when `$font-main-bold` and `$font-secondary-bold` are set to different weights.

`$element` defaults to the current element (`&`);