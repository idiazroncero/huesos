Used for tag-like elements. They can be keywords, but also small elements that need some visual highlighting.

They need to be set on inline or inline-block elements.

If the `.tags` is a link, it overrides the link decoration and switches to a background-color modification.

A small margin is applied in order to allow for lists of tags.

Modifiers will be generated following the `states` map on `$colors`. 

You can choose the color strategy by setting `$tag-strategy` to `split` or `contrast`. 

