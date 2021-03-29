This is a __very opinionated__ set of rules to apply to ling texts (i.e, the full text of a blog post).

It expects the inner HTMl to be:
- Mainly headings, paragraphs and sectioning content (`<nav>`, `<article>`, `<section>`).
- Last element will be either a `<p>`, an `<article>`or `<section>`.

It will perform the following operations:
- Ensure the last item won't have a margin-bottom.
- Increase the whitespace between sections.
- Applies `$max-ch` to ensure a maximum width based on a character number.