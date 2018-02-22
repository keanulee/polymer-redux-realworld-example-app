// HACK(keanulee): Copy the stylesheet contents at runtime to save downloaded bytes.
// The index of styleSheets is the order in which it appears in index.html.
export const sharedStyles = [...document.styleSheets[2].cssRules].map(rule => rule.cssText).join(' ');
