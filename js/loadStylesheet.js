export function loadStylesheet(href) {
    let link = document.createElement('link');
    document.head.appendChild(link);
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = href;
}