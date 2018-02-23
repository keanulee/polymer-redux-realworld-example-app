// HACK(keanulee): Copy stylesheet contents at runtime to save downloaded bytes.
export const sharedStyles = [
  ...document.head.querySelector('link[href="/static/css/ionicons.min.css"]').sheet.cssRules,
  ...document.head.querySelector('link[href="/static/css/main.css"]').sheet.cssRules,
].map(rule => rule.cssText).join(' ');
