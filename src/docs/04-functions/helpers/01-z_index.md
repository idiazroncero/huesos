---
title: z-index($item)
---

Returns the z-index value of the `$item` as defined on the `$z-index` map on `_config.scss`.

This technique allows for quick redefinition of z-index stack levels: instead of parsing the whole scss, you can simply re-order the map.

Be careful with [z-index stacking context](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context): this tool isn't powerful enough and treats all z-indexes as "global", no matter the contex.

There are two strategies to the stacking context problem:
- __Purely incremental:__ Put all z-indexes in order, no matter what the stacking context.
- __Local context:__ Re-start the z-index inside every time a new context is created, retake the order when the context is finished, use comments to let you know when do you change context. We prefer this strategy.

### Example

```scss
// Example of z-index map on config.scss using incremental strategy
$z-index: (
    background: 0,
    layer: 1,
    popup: 2, // New stacking context
    popup__child: 3
    popup__element: 4
    menu: 5,
    modal: 6, // New stacking context
    modal__item: 7,
    modal__element: 8
);

// Example of z-index map on config.scss using local context
$z-index: (
    background: 0,
    layer: 1,
    popup: 2, // New stacking context
      popup__child: 0
      popup__element: 1
    menu: 3,
    modal: 4, // New stacking context
      modal__item: 0,
      modal__element: 1
)
```

```scss
body {
    z-index: z-index(background);
}
.item {
    z-index: z-index(layer);
}
.modal {
    z-index: z-index(popup);
}
```


### Resources

[The stacking context](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context)
