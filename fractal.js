'use strict';

/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = module.exports = require('@frctl/fractal').create();

/* Set the title of the project */
fractal.set('project.title', 'Huesos <br>Style <br>Guide');

// COMPONENT CONFIG
fractal.components.set('path', __dirname + '/src/components');
fractal.components.set('label', 'Components');

/* Tell Fractal where the documentation pages will live */
fractal.docs.set('path', __dirname + '/src/docs');
fractal.docs.set('label', 'Documentation');

// WEB CONFIG

// Destination of static site build
fractal.web.set('builder.dest', __dirname + '/docs');
// Static (compiled) assets needed by components
fractal.web.set('static.path', __dirname + '/dist');


// THEME
const mandelbrot = require('@frctl/mandelbrot');
// const huesosTheme = require('fractal-huesos');
const huesosTheme = mandelbrot({
    styles: [
        "/huesos-mandlebrot.css"
    ],
    nav: ["docs", "components"]
});

// Hasta que tengamos tema propio, cargamos el css directamente
huesosTheme.addLoadPath(__dirname + '/theme/views'); 
fractal.web.theme(huesosTheme); 
// fractal.web.theme(huesosTheme);
