---
title: Color Palette
---

The palettes are based on palx.jxnblk.com (for example, https://palx.jxnblk.com/C7FFC4). Every single palette lives on a separate `.scss` file under 
`base/palettes` and is `@import`ed on `_config.scss` for later use on the `$colors` map.

This `$colors` map can store as many maps as needed, but the following are **mandatory** and will trigger errors if not present:

- base / for primary, secondary and separator colors
- text / for typography colors
- state / for indicating states like: muted, error, warning, success

Following palx.jxnblk.com nomenclature, the colors are usually numbered from 0 to 9 (lightest to darkest).

### Example

<section>
	<p class="minititle">Base</p>
	<div class="grid grid--gutterless grid--small--2col grid--medium--6col grid--large--3col">
		<div class="grid-item p bg-base-primary">Primary</div>
		<div class="grid-item p bg-base-secondary" >Secondary</div>
		<div class="grid-item p bg-base-separator" >Separator</div>
		<div class="grid-item p bg-base-black" >Black</div>
		<div class="grid-item p bg-base-white" >White</div>
	</div>
</section>
<section>
	<p class="minititle">Text</p>
	<div class="grid grid--gutterless grid--small--2col grid--large--3col">
		<div class="grid-item p bg-text-primary">Primary</div>
		<div class="grid-item p bg-text-heading" >Heading</div>
		<div class="grid-item p bg-text-mark" >Mark</div>
	</div>
</section>
<section>
	<p class="minititle">State</p>
	<div class="grid grid--gutterless grid--small--2col grid--large--4col">
		<div class="grid-item p bg-state-muted">Muted</div>
		<div class="grid-item p bg-state-success" >Success</div>
		<div class="grid-item p bg-state-warning" >Warning</div>
		<div class="grid-item p bg-state-error" >Error</div>
	</div>
</section>