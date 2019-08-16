---
title: set-link-decoration($link-strategy-default, $link-strategy-hover)
---

Sets the link decoration on a `<a>` element, defaults to `$link-strategy` as defined on `_config.scss`.

The available link decorations are: __false, underline, border, border-inset__ and __mark__.

It is mainly used by other mixins (`set-link()`) but can be used anytime to manually override a specific link. 

It needs to be applied directly at the element level and doesn't apply any styling to link state (`:hover`, `:focus`, etc), so you will need to add them case by case. 

Refer to [link documentation](/components/detail/link--default) to learn more about the very specific way Huesos handle link states.

### Parameters
- `$link-strategy-default` - One of 'false', 'underline', 'border', 'border-inset' or 'mark'
- `$link-strategy-hover` - One of 'false', 'underline', 'border', 'border-inset' or 'mark'

### Example

```scss
a.my-link {
    @include set-link-decoration('mark', 'underline');
}
```

```html
<a href="#" class="my-link">
    Custom decorated link
</a>
```

<a href="#" class="my-link">
    Custom decorated link
</a>
