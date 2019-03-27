/*
Select

<span class="tag tag--warning">JS</span> Handles multiple selection using [Selectr](https://github.com/Mobius1/Selectr)

It is applied automatically to all `.js--selectr` inputs on the page. To prevent this, you will need to make your own JS bundle instead of using the common `huesos.js`

Markup:
<div class="form-item">
	<select class="js--selectr">
		<option value="volvo">Volvo</option>
		<option value="saab">Saab</option>
		<option value="mercedes">Mercedes</option>
		<option value="audi">Audi</option>
	</select>
</div>
<div class="form-item">
	<select multiple class="js--selectr">
		<option value="volvo">Volvo</option>
		<option value="saab">Saab</option>
		<option value="mercedes">Mercedes</option>
		<option value="audi">Audi</option>
	</select> 
</div>
<div class="form-item">
	<select class="js--selectr">
		<optgroup label= "Expensive cars">
			<option value="volvo">Volvo</option>
			<option value="saab">Saab</option>
		</optgroup>
		<optgroup label= "Unaffordable cars">
			<option value="mercedes">Mercedes</option>
			<option value="audi">Audi</option>
		</optgroup>
	</select> 
</div>

Styleguide Forms.select
*/