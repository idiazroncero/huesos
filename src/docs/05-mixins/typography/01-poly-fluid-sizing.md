---
title: poly-fluid-sizing(property, $map);
---

Use this mixin to set a proportional, continuous sizing between some given breakpoints. It usually takes "font-size" as the property, but can be used with any css property that takes valid `calc()` units.

To make it work, set points (viewport width and desired font-size) on a `$map` variable, pass it to the mixin and it will generate media queries and `calc()` values that will enable a fluid sizing of the given property (usually, 'font-size').

For example: `$map: (576px: 22px, 768px: 24px, 992px: 34px)` will be read as: "at viewport width = 576px, start at 22px; then move up to 24px on 768px and then to a maximum of 34px on 992px)". This also means that below 576s px we will have a fixed 22px value and above 992px we will see a 34px fixed maximum value.

Resize this codepen to see it live:

<iframe height="378" style="width: 100%;" scrolling="no" title="Poly Fluid Sizing using linear equations, viewport units and calc()" src="//codepen.io/jakobud/embed/vmKLYb/?height=378&theme-id=light&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/jakobud/pen/vmKLYb/'>Poly Fluid Sizing using linear equations, viewport units and calc()</a> by Jake Wilson
  (<a href='https://codepen.io/jakobud'>@jakobud</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

**More info:**  
https://www.smashingmagazine.com/2017/05/fluid-responsive-typography-css-poly-fluid-sizing/  



### Example

```sass
h1 {
    $map: (576px: 22px, 768px: 24px, 992px: 34px);
    @include poly-fluid-sizing('font-size', $map);
}
```