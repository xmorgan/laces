export default (string, pattern) => new RegExp(`^${pattern}`).test(string);
