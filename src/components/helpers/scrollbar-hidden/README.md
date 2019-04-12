/*
Hide scrollbar

Tries to hide the scrollbar of an overflown element (auto, scroll-x or scroll-y)

It uses -webkit- and -ms- prefixes and unofficial css properties. It won't work on Firefox below v64.

Markup:
<p style="height:100px; width: 50px; overflow: auto;">
	This uses -webkit- and -ms- prefixes and unofficial css properties. It won't work on Firefox below v64. It's not perfect, but it's far better than using negative padding and margin hacks that will provoke content hiding on macOS.
</p>


Styleguide Helpers.alignment
*/