/*
import {getScreenWidth} from './getScreenWidth.js'
// import {ssFinder} from './ssFinder.js'
// import {ssModifier} from './ssModifier.js'
import {loadStylesheet} from "./loadStylesheet.js";

if (getScreenWidth() < 1900) {
    document.getElementById('lanyard').parentNode.removeChild(document.getElementById('lanyard'));
}

if (getScreenWidth() >= 1900) {
    loadStylesheet('css/style-computer.css')
}

function unloadStylesheet(name) {
    // Keep removing the first matching <link> until none remain
    while (document.querySelector('link[rel~="stylesheet"][href*="' + name + '"]')) {
        document.querySelector('link[rel~="stylesheet"][href*="' + name + '"]')
            .parentNode
            .removeChild(
                document.querySelector('link[rel~="stylesheet"][href*="' + name + '"]')
            );
    }
}

unloadStylesheet('default.css')
*/

particlesJS.load('particles-js', '/pjs-config.json');