const Selectr = require('mobius1-selectr');
const accordionNodes = document.querySelectorAll('[data-accordion]');
const fileInputNodes = document.querySelectorAll('[data-file-input]');

// If selects, Initialize selectr on all fields
const selects = document.querySelectorAll('[data-selectr]');
console.log('executed');
if(selects.length) {
	for(let select of selects) {
		new Selectr(select);
	}
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


// Set file input behavior
for(let fileInput of fileInputNodes) {
	let label = fileInput.querySelector('label'),
		labelVal = label.innerHTML,
		labelVerb = label.getAttribute('data-upload-verb'),
		labelName = label.getAttribute('data-upload-name'),
		input = fileInput.querySelector('input');

	input.addEventListener('change', function(e){
		let fileName = labelVal;
		if( this.files && this.files.length > 1 ){
			fileName = labelVerb + ' ' + this.files.length + ' ' + labelName;
		} else if(this.files && this.files.length == 1) {
			fileName = labelVerb + ' ' + e.target.value.split('\\').pop();
		}
		label.innerHTML = fileName;
	});
}

