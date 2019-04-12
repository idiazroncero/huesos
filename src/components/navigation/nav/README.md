# Navigation menus

Any HTML that uses the css class `.nav`. This means `<nav>` elements __won't__ receive any styling by default until a `.nav` class is added. 

In previous versions, we enforced `<nav>` elements to have this custom sytling. Navigation might vary a lot, so it seems better to separate againmarkup and style.

We don't assume a menu-style, horizontal navigation as the default. This is done by using the `.menu` component.

Instead, we only style the text and delete the bullets. The nav items' style can be controlled on `_config.scss` via a set of parameters on the Navigation section: `$nav-font-weight`, `$nav-uppercase`, `$nav-font-size` and `$nav-spacing`.

It's supposed to hold links (try "section"), but it can also have empty elements.

It is common the need to disable partially or totally the link appearance. You can use `kill-link` or `kill-link-decoration` classes or mixins for this or set `$nav-kill-links` to true for a global override of decoration styles.