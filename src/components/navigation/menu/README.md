An horizontal menu is a component based on an extended `<nav>` or `.nav`.

Unlike the `nav`, which is a bare-bones item, the menu includes highlighting of links and a set of decoration items.

It is expected that all items on a menu are linked. Empty links can be faked by adding a `<span>` item and combined with the `.disabled` class in order to indicate a deactivated link

Submenus are handled up to the 3rd level. If you need more levels... you might want to rethink your menu.

## Menu configuration

This menu is very opinionated and intented as a quick way to bootstrap a default-looking menu. If you need something more complex or very different, you should better develop your own solution.

You can config the `$menu-padding`of every menu item. Use `$menu-kill-links` to kill all links (defaults to true) and set a `$menu-background-color`that will be used to make all color variations. Use `$menu-color-ratio` to set a % that will be applied to `lighten()` the color on every subsequent level.

## Quick tip

If you don't want to set the default `.nav` values, just delete the class! The `.menu` styling is not dependent on the `nav`. 

It is though recommended to use the `.nav` class to keep all navigation styles unified.