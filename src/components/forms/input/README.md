General text input.

Please note a wrapper with a `.form-item` class is added in order to create separate blocks
and apply a vertical-rhythm based margin.

This wrapper also applies a flexbox in order to take the full width of the parent.

Without this wrapper and class, all the form elements would behave as inline-block elements.

A wrapper `.form-item--required` adds a marker to let users know the field is mandatory.

For items with an `input[disabled]`, the recommendation is to mark the whole `.form-item` as `.disabled`
