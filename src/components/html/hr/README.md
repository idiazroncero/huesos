Applies `$separator` styling defined at `_config.scss`. 

It won't be affected if `$separators` is set to `false`. `<hr>` is a semantical element and we understand it _requires_ to be visible no matter what.

It also eliminates ridge/bevel effects.

<div class="alert alert--warning">

The whole `separators` strategy will likely be refactored soon. They're not consistent enough.

</div>