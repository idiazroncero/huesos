---
title: minititle($size, $weight, $uppercase, $letter-spacing)
---

Formats a text to apply what we call a _minititle_ (in absence of a better name). You can see minititles all around the web: is that small but highly visible text, usually a heading, that acts as a mini-heading for blocks, sections, etc. 

Want an example? Here we go:

<article class="card" style="max-width: 400px">
    <h1 class="minititle">Quote of the day</h1>
    <p class="small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, adipisci eum enim dicta esse aliquam ab fugit obcaecati perspiciatis iure corporis laborum eligendi dignissimos, et ex earum sunt. Pariatur, iure.</p>
</article>

It usually takes advantage of uppercase, bold and letter-spacing to increase its visibility while keeping a low font-size.

`.minititle` helper class does its job by applying the defaults to any item.

<div class="alert alert--success">

<p>__Hold on!__ If you override the defaults, `minititle()` mixin can become a full-fledged tool capable of handling many of the usual modificacions of text.</p>

<p>This means you can also use this mixin to format a huge, lowercase text with small kerning. Why not?</p>

</div>

### Why minititle?

This is a common pattern i've seen for a while on web design. Still, I haven't found any specific naming convention.

In my head, it took two different names. First one was _ladillo_, which is journalistic jargon and is the spanish word for the kind of inner titles you see on the printed news. A good one, but too specific and jargon-ish. 

The second one was _minititle_. It makes sense: in the end, we are looking at some kind of title (semantically, it uses to be a heading), whose relevance in the visual hierarchy needs to be somewhat diminished without losing its relevance. It is mini, but it is still a title.

### Parameters

- `$size` - A valid font-size. Defaults to `$h5-font-size`
- `$weight` - Font weight. Defaults to `$font-main-bold`
- `$uppercase` - Boolean that sets wether to apply `text-transform: uppercase`. Defaults to `true`.
- `$letter-spacing` - A valid value for `letter-spacing`. Defaults to global `$letter-spacing`

### Example

```scss
// Let's roll our own minititle
.my-minititle {
    @include minititle($h6-font-size, lighter, true, 1em)
}
```

```html
<!-- Using the default class -->
<article>
    <h1 class="minititle">Default minititle</h1>
    <p class="small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, adipisci eum enim dicta esse aliquam ab fugit obcaecati perspiciatis iure corporis laborum eligendi dignissimos, et ex earum sunt. Pariatur, iure.</p>
</article>

<!-- Using our own minititle -->
<article>
    <h1 class="my-minititle">Custom minititle</h1>
    <p class="small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, adipisci eum enim dicta esse aliquam ab fugit obcaecati perspiciatis iure corporis laborum eligendi dignissimos, et ex earum sunt. Pariatur, iure.</p>
</article>
```

<article>
    <h1 class="minititle">Default minititle</h1>
    <p class="small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, adipisci eum enim dicta esse aliquam ab fugit obcaecati perspiciatis iure corporis laborum eligendi dignissimos, et ex earum sunt. Pariatur, iure.</p>
</article>
<article>
    <h1 class="my-minititle">Custom minititle</h1>
    <p class="small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, adipisci eum enim dicta esse aliquam ab fugit obcaecati perspiciatis iure corporis laborum eligendi dignissimos, et ex earum sunt. Pariatur, iure.</p>
</article>