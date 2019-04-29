---
title: hidden()
---

Applies css styles to visually hide the given element without affecting accessibility.

For quick prototyping, the utility class `.visually-hidden` is also provided.

This technique is borrowed from [https://snook.ca/archives/html_and_css/hiding-content-for-accessibility](https://snook.ca/archives/html_and_css/hiding-content-for-accessibility)

### Example

```scss
.visually-hidden {
    @include hidden()
}
```