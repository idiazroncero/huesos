// We use webpack tutorial to bootstrap things and check it's all up and running

import _ from 'lodash';
import '../scss/style.scss';

function component() {
	var element = document.createElement('div');

	// Lodash, currently included via a script, is required for this line to work
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');

	return element;
}

document.body.appendChild(component());