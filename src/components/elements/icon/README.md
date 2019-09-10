The preferred use for icons is `<svg>` inline markup wrapped on `<i class="icon">` tags.

Instead of SVG, typography can be used as well. Huesos will consistently style the sizing on both cases. It will enforce a `1em` height, a `1em` font-size and a line-height of unitless `1`. 

This means __the icons will always be as big/tall as their context__. Want something else? you'll need to set a new context (try wrapping on a `<span>`) or stop using `.icon`.

A set of icons is __not__ provided. You are supposed to provide your own choices.