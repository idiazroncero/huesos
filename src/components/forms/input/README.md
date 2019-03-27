	/*
	Input
	
	General text input.

	Please note a wrapper with a `.form-item` class is added in order to create separate blocks
	and apply a vertical-rhythm based margin.

	This wrapper also applies a flexbox in order to take the full width of the parent.

	Without this wrapper and class, all the form elements would behave as inline-block elements.

	A wrapper `.form-item--required` adds a marker to let users know the field is mandatory.

	For items with an `input[disabled]`, the recommendation is to mark the whole `.form-item` as `.disabled`
	
	Markup:
	<div class="form-item">
	  <label for="text">Text</label>
	  <input type="text" id="text" name="text">
	</div>
	<div class="form-item form-item--required">
	  <label for="text">Text Required</label>
	  <input required type="text" id="text" name="text">
	</div>
	<div class="form-item disabled">
	  <label for="text">Form item disabled</label>
	  <input disabled type="text" id="text" name="text">
	</div>
	<div class="form-item">
	  <label for="password">Password</label>
	  <input type="password" id="password" name="password">
	</div>
	<div class="form-item">
	  <label for="email">Email</label>
	  <input type="email" id="email" name="email">
	</div>
	<div class="form-item">
	  <label for="url">Web Address</label>
	  <input id="url" type="url" placeholder="http://yoursite.com">
	</div>
	<div class="form-item">
	  <label for="input__phone">Phone Number</label>
	  <input id="input__phone" type="tel" placeholder="(999) 999-9999">
	</div>
	<div class="form-item">
	  <label for="input__search">Search</label>
	  <input id="input__search" type="search" placeholder="Enter Search Term">
	</div>
	
	Styleguide Forms.input
	*/