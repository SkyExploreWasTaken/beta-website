// ssModifier: A function who modifies a CSS property parameter based on the stylesheet, the element name, the property name and the value of the property, respectively "ss", "ssElement", "ssProp" and "ssValue".
export function ssModifier(ss, ssElement, ssProp, ssValue, log = false) {
    if (!ss) {
        if (log) console.warn('ssModifier - no stylesheet supplied');
        return;
    }

    for (const rule of ss.cssRules) {
        if (rule.selectorText === ssElement) {
            rule.style.setProperty(ssProp, ssValue);
            if (log) console.log(
                `ssModifier Log:\n` +
                `Stylesheet: "${ss.href}";\n` +
                `Element: "${ssElement}";\n` +
                `Property: "${ssProp}";\n` +
                `Value: "${ssValue}"\n` +
                `Operation succeeded`
            );
            return;
        }
    }

    if (log) console.warn(
        `ssModifier Log:\n` +
        `Stylesheet: "${ss.href}";\n` +
        `Element: "${ssElement}" --> Wrong element provided, "${ssElement}" doesn't exist;\n` +
        `Property: "${ssProp}";\n` +
        `Value: "${ssValue}"\n` +
        `Operation failed`
    );
}