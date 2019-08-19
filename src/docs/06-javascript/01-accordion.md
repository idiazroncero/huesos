---
title: "Details-based accordion"
---

Use `[data-accordion]` on a wrapper element around some `details` to set an accordion-like behavior using JS. The opening of an element should close the rest.

```html
<div data-accordion>
	<details>
		<summary>Pure HTML5 accordion</summary>
		<p>This is HTML5's alternative to the old-fashioned accordion plugins made on JS.</p>
		<p>It's neat and simple. Love it.</p>
	</details>
	<details>
		<summary>Another details element</summary>
		<p>Just to check spacing, gutters, etc...</p>
	</details>
</div>
```

<div data-accordion>
	<details>
		<summary>Pure HTML5 accordion</summary>
		<p>This is HTML5's alternative to the old-fashioned accordion plugins made on JS.</p>
		<p>It's neat and simple. Love it.</p>
	</details>
	<details>
		<summary>Another details element</summary>
		<p>Just to check spacing, gutters, etc...</p>
	</details>
</div>