### Native HTML

There are many shortcomings on `<select>` styling and the UX is broken (to say the least) , so we recommend using the js-enhanced solution.

Still, if you want to use the native HTML solution, a basic syling is provided: vertical rhythm is preserved, borders are added, sizing is always 100% width.

In order to make the arrows appear, you will need to wrap the whole `<select>` element on a `.select-wrapper` parent (this is because HTML form elements won't accept pseudo-elements).

```html
<!-- Wrap it on a .select-wrapper to add the arrow -->
<div class="form-item select-wrapper">
	<select>
		<option value="volvo">Volvo</option>
		<option value="saab">Saab</option>
		<option value="mercedes">Mercedes</option>
		<option value="audi">Audi</option>
	</select>
</div>
```


### JS-enhanced

When `[data-selectr]` is applied directly on the element, it uses [Selectr](https://github.com/Mobius1/Selectr) for a leaner UI, search box, tag-like behavior on `[multiple]`, etc...

Selectr's css has been adapted to Huesos styling and respects vertical rhythm and `_config.scss` values.