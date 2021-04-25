---
title: kill-link-decoration($strategy-default, $strategy-hover);
hidden: true
---

Completely removes any link decoration.

It assumes `$link-strategy-default` and `$link-strategy-hover` as defaults. 

Helper `.kill-link-decoration` class basically implements this mixin.

If you are trying to kill the decoration of an already overriden link (using `set-link()` or `set-link-decoration()`) you will need to manually pass the correct values. 

Nevertheless, if you are trying to delete the decoration of a link that already overrides the default behavior of all links on your site... well, __you might consider a different approach__.


### Parameters 

- `$strategy-default` - Valid `$link-strategy` value.
- `$strategy-hover` - Valid `$link-strategy` value.

### Examples

```scss
// Normal link, no values passed
a.kill-my-decoration {
    @include kill-link-decoration();
}

// Oh, we made a custom decoration for a link...
a.my-very-special-link {
    @include set-link-decoration('mark', 'border-inset');
}

// ...but we need to delete the decoration on a more specific case! We'll need to manually pass the correct values because the mixin can't tell!
a.my-very-special-link--modified {
    @include kill-link-decoration('mark', 'border-inset');
}
```

```html
<a href="#" class="kill-my-decoration">
    Undecorated link. Keeps color. Deletes decorative elements.
</a>
<a href="#" class="my-very-special-link">
    I'm a custom decorated link.
</a>
<a href="#" class="my-very-special-link--modified"">
    I'm a custom decorated link that has gotten undecorated. Long life CSS bloat.
</a>
```

<a href="#" class="kill-my-decoration">
    Undecorated link. Keeps color. Deletes decorative elements.
</a><br>
<a href="#" class="my-very-special-link">
    I'm a custom decorated link.
</a><br>
<a href="#" class="my-very-special-link--modified">
    I'm a custom decorated link that has gotten undecorated. Long life CSS bloat.
</a>
