// getScreenWidth: A function who get the approximate screen width depending on "document.documentElement.clientWidth" and "window.devicePixelRatio".
export function getScreenWidth() {
    return Math.round(
        screen.width * window.devicePixelRatio
    );
}