<div class="mb alert alert--warning">

__This menu is very opinionated__ and intented as a quick way to bootstrap a default-looking menu. If you need something more complex or different, consider developing your own solution.

</div>

We consider en horizontal menu as a component based on an extended `<nav>` or `.nav`.

Unlike the `nav`, which is a bare-bones item, the menu includes highlighting of links, a set of decoration items and handling of sub-menus.

It is expected that all items on a menu are linked. Empty links can be faked by adding a `<span>` item and combined with the `.disabled` class in order to indicate a deactivated link (see 'Exit')

Submenus are handled up to the 3rd level. If you need more levels, you're gooing too deep and you might want to rethink your menu.

### Menu configuration

You can config the `$menu-padding` of every menu item. Use `$menu-kill-links` to kill all links (defaults to true).

### Menu color

In past editions of Huesos we tried to devise a way to handle background-color for the menu. We set a `$menu-background-color` and a `$menu-color-ratio` to derive shades from.

__It was senseless.__ This menu can descend up to the third level and can have a lot of color strategies (involving contrasts, backgrounds, borders) on each level. Our default and very basic solution would surely need to be overriden 90% of the time, generating more bloat and unneeded CSS.

We decided instead to go for a __minimum viable menu__. We only put a white background-color (it is needed to avoid transparency on nested levels) and let you freely decide how to style your own menu. __We only provide functionality, not appearance__

### Menu + nav

You can quickly apply `.nav` values by just adding the class to your `.menu`. It will style the text and will be compatible with `.menu`.

`.nav` and `.menu` habe been designed to be able to work in pairs or separately. The first one takes care of styling the text, the second takes care of establishing a horizontal menu hierarchy.