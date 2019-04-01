'use strict';

/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = module.exports = require('@frctl/fractal').create();

/* Set the title of the project */
fractal.set('project.title', 'Huesos @ Fractal');

// COMPONENT CONFIG
fractal.components.set('path', __dirname + '/src/components');

/* Tell Fractal where the documentation pages will live */
fractal.docs.set('path', __dirname + '/src/docs');

// WEB CONFIG

// Destination of static site build
fractal.web.set('builder.dest', __dirname + '/docs');
// Static (compiled) assets needed by components
fractal.web.set('static.path', __dirname + '/dist');


// THEME
const mandelbrot = require('@frctl/mandelbrot');
const huesosTheme = require('fractal-huesos');
const myCustomisedTheme = mandelbrot({
    skin: "fuchsia",
    styles: [
        "default",
        //"/huesos.css"
    ]
});

// Hasta que tengamos tema propio, cargamos el css directamente
fractal.web.theme(myCustomisedTheme); 
// fractal.web.theme(huesosTheme);
