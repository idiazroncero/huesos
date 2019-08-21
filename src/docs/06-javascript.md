---
title: 'Javascript enhancements'
---

Huesos provide a small set of javascript enhancements over native HTML behavior.

These enhancements adhere to the following guidelines:

- __Zero overweight.__ When using third-parties we favor small, concise, single-purpose libraries.
- __Vanilla javascript.__ jQuery shouldn't be a dependency. All code is vanilla.
- __Quick (and optional) application.__ We use data-attributes to make instantiation as easy as writing some HTML. By default, we don't apply any enhancement.
- __HTML Fallbacks.__ You can always resort to native HTML behavior without losing functionality.
- __Only when needed.__ We only enhance HTML when the native UX is clearly broken (i.e: `<select`>), inconsistent (`<input type="file">`) or incomplete (`<details>`).


### Accordion

Use `[data-accordion]` on a wrapper element around some `details` to set an accordion-like behavior using JS.

[...continue reading the docs for Accordion](/components/detail/details)

### File uploader

With `[data-file-input]` you get a button-like input that will inform the user on the number of files that are uploaded or the name of the file when it's only one.

[...continue reading the docs for File Uploader](/components/detail/file-input)

### Selectr

Use `[data-selectr]` to tame those pesky `<select>` elements. Your users will be grateful.

[...continue reading the docs for Select](/components/detail/select)

