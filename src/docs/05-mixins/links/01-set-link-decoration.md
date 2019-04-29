---
title: set-link-decoration($strategy)
---

Sets the link decoration on a `<a>` element, defaults to `$link-strategy` as defined on `_config.scss`.

The available link decorations are: underline, border, smart and mark.

It is mainly used by other mixins (`set-link()`) but can be used to manually override a specific link. It needs to be applied directly at the element level and doesn't apply any styling to link status (:hover, :focus, etc)

### Parameters
- `$link-strategy` - One of 'underline', 'border', 'smart' or 'mark'

### Example

```scss
a.link {
    @include set-link-decoration('mark');
    &:hover {
        @include set-link-decoration('border')
    }
}
```
