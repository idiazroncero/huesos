`<nav>` elements won't receive any styling by default until a `.nav` class is added. This class performs a minimal styling in order to differentiate it from a normal list.

Unlike other frameworks and boilerplates, __we don't assume a horizontal navigation as the default__. This is done by adding the `.nav--horizontal` class.

Instead, we only style the text and delete the bullets. The nav items' style can be controlled on `_config.scss` via a set of parameters on the Navigation section: `$nav-font-weight`, `$nav-uppercase`, etc...

<div class="alert mb">

In previous versions, we forced `<nav>` elements to behave like a dropdown menu. It was very opinionated, so we separated `.nav` from `.menu`.

</div>

### Links inside navigation

A nav component is supposed to hold links, but it can also have empty elements.

It is common the need to disable partially or totally the link appearance. You can either use `kill-link` or `kill-link-decoration` classes/mixins or set `$nav-kill-links: true` for a global override of decoration styles.