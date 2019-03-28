/*
Button

Either `<input type="submit / ">`, `<button>` or `<a class="button">`.

There are three general strategies available. `border`, `background` and `mixed`

Markup:
<button class="{{modifier_class}}">Click me please!</button>
<a href="#" class="button {{modifier_class}}">I'm a link!</a>
<input type="submit" class="{{modifier_class}}" value="Submit input" />

.button--success           - Uses success color to indicate a positive action (OK, login, continue...)
.button--warning           - Uses warning color to indicate a potentially negative action
.button--error             - Uses error color to indicate a negative action (delete, cancel, no...)
.disabled          		   - The helper class `.disabled` knows how to erase user interaction on buttons
.button--error.disabled             - .disabled and the rest of the modifiers can be safely applied at the same time


Styleguide Components.buttons
*/
