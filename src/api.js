export function api(path, token, options = {}) {
  if (token) {
    options.headers = options.headers || {};
    options.headers['authorization'] = `Token ${token}`;
  }
  return fetch(`https://conduit.productionready.io/api${path}`, options);
}
