// Properties on `process.env` are implicitly converted to a string,
// so we're using this utility function to convert values to boolean.
function isTrue(data) {
  return data.trim() === 'true' || data.startsWith('true');
}

module.exports = isTrue;
