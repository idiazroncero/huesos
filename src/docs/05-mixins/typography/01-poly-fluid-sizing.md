---
title: poly-fluid-sizing($property, $map);
---

<div class="mb alert alert--warning">
  <p>__Important!__ Be aware that using this technique is completely against maintaining a vertical rhythm. Fluid elements __won't stick to the grid.</p>
  <p>To put the best techniques a good starting point is to use poly-fluid-sizing for headings and big text (h1 and h2, specially) and strict vertical-rhythm for the rest of the site</p>
</div>

Use this mixin to set a proportional, continuous sizing between some given breakpoints. It usually takes `$property: font-size`, but can be used with any css property that acepts `calc()`.

To make it work, set points (viewport width and desired font-size) on a `$map` variable, pass it to the mixin and it will generate media queries and `calc()` values that will enable a fluid sizing of the given property, as opposed to `@media` query "jumps".

For example: `$map: (576px: 22px, 768px: 24px, 992px: 34px)` will be read as: 

> _at viewport width = 576px, start at 22px; then move up to 24px on 768px and then to a maximum of 34px on 992px)_

This also means that below 576s px we will have a fixed 22px value and above 992px we will see a 34px fixed maximum value (think of it as a kind of `max-height` property).

Resize this codepen to see it live (open it on a new tab to see it clearly).

<iframe style="height:600px;" scrolling="no" title="Poly Fluid Sizing using linear equations, viewport units and calc()" src="//codepen.io/jakobud/embed/vmKLYb/?height=378&theme-id=light&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/jakobud/pen/vmKLYb/'>Poly Fluid Sizing using linear equations, viewport units and calc()</a> by Jake Wilson
  (<a href='https://codepen.io/jakobud'>@jakobud</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### Parameters

- `$property` - A valid css property that can take `calc()` as value.
- `$map` - A map containing the fluid breakpoints in the form of `viewport-width: property-value`

### Example

```scss
h1.poly-fluid-sizing {
    // Let's put some crazy values to see a clear progression...!
    // Start at 6px @ 400w, 
    // quick increase to 30px @ 700w
    // then reeeeally slow up to 35px @ 1100px 
    // and then a great jump to 80px @ 1200px
    $map: (400px: 6px, 700px: 30px, 1100px: 35px, 1200px: 60px);
    @include poly-fluid-sizing('font-size', $map);

    // Unitless or em relative line-heights will really help you here...
    line-height:1em;
}
```

```html
<h1 class="poly-fluid-sizing">
  I grow and shrink with the viewport
</h1>
```

<h1 class="poly-fluid-sizing">
  I grow and shrink with the viewport
</h1>


### Reference

[Fluid Responsive Typography With CSS Poly Fluid Sizing](https://www.smashingmagazine.com/2017/05/fluid-responsive-typography-css-poly-fluid-sizing/)