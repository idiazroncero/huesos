A toc or table of contents is a special kind of vertical menu based off a `<nav>` item.

It usually differs from a normal menu in some or all of this aspects:
- It holds several nested menus.
- These nested menus are visible by default (no "accordions" or open/close triggers).
- They're dense and informative (as opposite to small, site-wide navigation menus).

__Our TOC is a very opinionated component__ because exposing all the configuration would be overkill. It won't let `bold` weight to pass below the first depth level, it will apply a progressive reduction of font-size.

You can still use `$toc-font-weight`, `$toc-uppercase` and `$toc-font-size` to determine the first-level font-size, the first-level font-weight and the uppercase status

If you need to disable partially or totally the link appearanceu ese `kill-link` or `kill-link-decoration` classes or mixins for this.