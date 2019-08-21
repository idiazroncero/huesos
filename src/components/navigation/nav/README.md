`<nav>` elements __won't__ receive any styling by default until a `.nav` class is added. This class performs a minimal, common styling to make it look like a menu.

We don't assume a horizontal navigation as the default. This is done by adding the `.menu` class.

Instead, we only style the text and delete the bullets. The nav items' style can be controlled on `_config.scss` via a set of parameters on the Navigation section: `$nav-font-weight`, `$nav-uppercase`, `$nav-font-size` and `$nav-spacing`.

<div class="alert mb">

In previous versions, we forced `<nav>` elements to behave like the common horizontal menus. It was very opinionated, so we separated `.nav` from `.menu`.

</div>

### Links inside navigation

A nav component is supposed to hold links, but it can also have empty elements.

It is common the need to disable partially or totally the link appearance. You can either use `kill-link` or `kill-link-decoration` classes/mixins or set `$nav-kill-links: true` for a global override of decoration styles.