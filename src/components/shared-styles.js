// HACK(keanulee): Copy the stylesheet contents at runtime to save downloaded bytes.
export const sharedStyles = [...document.head.querySelector('link[href="/main.css"]').sheet.cssRules].map(rule => rule.cssText).join(' ');
