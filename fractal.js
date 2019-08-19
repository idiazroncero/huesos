'use strict';

/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = module.exports = require('@frctl/fractal').create();

/* Set the title of the project */
fractal.set('project.title', 'Huesos');

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
        "/styleguide/huesos-mandlebrot.css"
    ],
    scripts: [
        "https://cdnjs.cloudflare.com/ajax/libs/cash/4.1.3/cash.min.js",
        "/styleguide/huesos-mandlebrot.js",
        "/huesos.js"
    ],
    nav: ["docs", "components"],
    panels: ["notes", "html", "resources",]
});

// Hasta que tengamos tema propio, cargamos el css directamente
huesosTheme.addLoadPath(__dirname + '/theme/views'); 
fractal.web.theme(huesosTheme); 
// fractal.web.theme(huesosTheme);
