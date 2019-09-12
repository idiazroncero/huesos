This is a __very opinionated__ set of rules to apply to ling texts (i.e, the full text of a blog post).

It expects the inner HTMl to be:
- Mainly headings, paragraphs and sectioning content (`<nav>`, `<article>`, `<section>`).
- Last element will be either a `<p>`, an `<article>`or `<section>`.

It will perform the following operations:
- Ensure the last item won't have a margin-bottom.
- Increase the whitespace between sections.
- Applies `$max-ch` to ensure a maximum width based on a character number.

<div class="alert alert--warning">

__Negras tormentas agitan los aires__  
The future of `.text-wrapper` is bleak. It can and will be overriden by a combination of max-ch, lobotomized owl and other tecniques. Deprecation is coming.

</div>