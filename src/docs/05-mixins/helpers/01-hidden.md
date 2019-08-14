---
title: hidden
---

Applies css styles to visually hide the given element without affecting accessibility.

For quick access, the helper class `.visually-hidden` is also provided.

Its use is recommended for correct semantic HTML and section naming. It is a good practice, for example, to give a heading to every section element. It also common that you won't need or want all of this headings to be visible to the end user. Visually hiding those headings is the best practice (see example)

This technique is borrowed from [https://snook.ca/archives/html_and_css/hiding-content-for-accessibility](https://snook.ca/archives/html_and_css/hiding-content-for-accessibility)

### Example

```scss
.hide-me {
    @include hidden()
}
```

```html
<section id="news">
    <!-- We want to semantically name this section but don't show it to the user -->
    <h1 class="hide-me">News</h1>

    <article class="card">
        <!-- This heading is ok -->
        <h4>This is a headline that needs to be shown</h4>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat corrupti consequatur veniam beatae ad, neque accusantium consectetur unde dolorum vitae magnam inventore animi minima et molestias repellat reprehenderit. Excepturi, itaque!</p>
    </article>

</section>
```

<section>
    <h1 class="hide-me">News</h1>
    <article class="card">
        <h3>This is a headline that needs to be shown</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat corrupti consequatur veniam beatae ad, neque accusantium consectetur unde dolorum vitae magnam inventore animi minima et molestias repellat reprehenderit. Excepturi, itaque!</p>
    </article>
</section>



### Reference

[Hiding content for accessibility](https://snook.ca/archives/html_and_css/hiding-content-for-accessibility)  
[Using HTML sections and outlines](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines)