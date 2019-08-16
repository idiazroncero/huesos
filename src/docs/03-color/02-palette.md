---
title: Color Palette
---

Hueso's default color palettes are based on palx.jxnblk.com. This tool auto-generates up to 13 colors from a single hex value, and then divides each color on 10 different shades ([see example for #C7FFC4](https://palx.jxnblk.com/C7FFC4)).

Every single palette lives on a separate *.scss* file under `base/palettes` and is @imported on `_config.scss` for later use on the `$colors` map.

Of course, you can choose any file hierarchy, any palette generator, etc. You might need to adapt `_config.scss` values because we follow Palx nomenclature, which ranges every color from 0 to 10 (i.e, `$blue0` to `$blue10`). You can find some similar palette generators on References

The `$colors` map can store as many sub-maps as needed, but the following are __mandatory__ and __will trigger errors if not present__:

- __base__ for primary, secondary and separator colors
- __text__ for typography colors
- __state__ for indicating states like: muted, error, warning, success

### Current values

<section>
	<p class="minititle">Base</p>
	<div class="grid grid--gutterless grid--small--2col grid--medium--3col">
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
	<div class="grid grid--gutterless grid--small--2col grid--large--3col">
		<div class="grid-item p bg-state-muted">Muted</div>
		<div class="grid-item p bg-state-success" >Success</div>
		<div class="grid-item p bg-state-warning" >Warning</div>
		<div class="grid-item p bg-state-error" >Error</div>
	</div>
</section>

### References

[Eva Design System](https://colors.eva.design/)