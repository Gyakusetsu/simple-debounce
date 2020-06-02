/**
 * Returns a simple function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds.
 *
 * @param {Function} function to wrap and used to callback
 * @param {Number} timeout in ms (`250`)
 * @api public
 */

function debounce(callback, delay = 250) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      timeoutId = null;
      callback(...args);
    }, delay);
  };
}

// Adds compatibility for ES modules
debounce.debounce = debounce;

module.exports = debounce;
