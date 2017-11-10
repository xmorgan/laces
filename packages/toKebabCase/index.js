/**
 * Convert to kebab case
 * @param {string} string - The string to convert to kebab case.
 * @returns {string} Returns a kebab cased string.
 * @example
 * // returns 'my-string'
 * endsWith('my string');
 * @example
 * // returns 'my-string'
 * endsWith('myString');
 * @example
 * // returns 'my-string'
 * endsWith('my_string');
 */
export default string => string.replace(
  /[A-Z|_|\s](\w{1})/g,
  (match, _, index, original) => `-${/^[A-Z]/.test(match)
    ? match[0].toLowerCase() + original.substring(index + 1, index + 2)
    : original.substring(index + 1, index + 2)}`,
);
