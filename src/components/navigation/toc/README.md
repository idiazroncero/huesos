A toc or table of contents is a vertical menu based off a `<nav>` item.

The first level can be configured on `_config.scss`.

This is a very opinionated component. It won't let `bold` weight to pass below the first depth level, it will apply a progressive reduction of font-size and it will set uppercase from the 3rd level on.

If you need to disable partially or totally the link appearance. Use `kill-link` or `kill-link-decoration` classes or mixins for this.