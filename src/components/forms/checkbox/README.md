By default, checkboxes will use the native HTML styling.

An alternative style can be applied globaly by setting `$pseudo-checkbox: true` or case by case using the `.pseudo-checkbox` class or `pseudo-checkbox()` mixin.

It is recommended to use `.form-item--checkbox` wrapper to ensure proper alignment.

It is recommended __not__ to use the label as a wrapper. If needed, an additional `span` tag will ensure proper vertical alignment.

Please note that __you can't use the label as a wrapper and pseudo-checkboxes at the same time__.