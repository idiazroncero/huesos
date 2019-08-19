const Selectr = require('mobius1-selectr');
const accordionNodes = document.querySelectorAll('[data-accordion]');

// If selects, Initialize selectr on all fields
var selects = document.getElementsByClassName('js--selectr');
if(selects.length) {
	Array.prototype.forEach.call(selects, function(el){
		new Selectr(el);
	});
}

// Set accordion behavior
for(let accordion of accordionNodes) {
	let details = accordion.querySelectorAll('details');
	details.forEach(function(item){
		item.addEventListener('toggle', function(){
			if(item.open) {
				details.forEach(function(details){
					if(details !== item) {
						details.open = false;
					}	
				});
			}
		});	
	});
}
