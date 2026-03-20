// ssFinder: A function who gets the location of a stylesheet based on the name queried with the parameter "ssName".
export function ssFinder(ssName) {
    return Array.from(document.styleSheets).find(
        sheet => sheet.href && sheet.href.includes(ssName)
    ) || 'Failed to find stylesheet';
}