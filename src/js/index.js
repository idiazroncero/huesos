const Selectr = require('mobius1-selectr');

// If selects, Initialize selectr on all fields
var selects = document.getElementsByClassName('js--selectr');
if(selects.length) {
	Array.prototype.forEach.call(selects, function(el, i){
		new Selectr(el);
	})
}