The `.card` is a common pattern. It helps visually set apart a piece of content (i.e: a news teaser, a small section, a grid element).

Usually, the card width is limited either by setting a custom width or by stacking them on a flex / grid item;

You can set a `$card-border-width` (and color) to indicate card boundaries, or set it to false to avoid them. If `$card-shadow` is set to true, it will apply the site-wide `$shadow-definition`.

<div class="alert alert--warning mb">

__Beware!__   
If you set both border and shadow to false, and your background color, is not contrasted, you will end up with an element without visible boundaries - and this will kill the element's purpose.

</div>

You can also define your `.card-padding`. By default, any `.card` inside a `.card` will have its padding reduced to 1/2.

### Card with Featured Image

This common variation features a full-bleed image on top of the card.

<div class="alert alert--warning">

__Careful!__  
This version requires a slightly different markup than the original `.card` item

</div>