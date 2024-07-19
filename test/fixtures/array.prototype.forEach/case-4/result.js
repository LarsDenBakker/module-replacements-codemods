var assert = require('assert');

assert.deepEqual(
  [1, 2, 3].forEach(function (x) {
    return x >= 2;
  }),
  [2, 3],
);
assert.deepEqual(
  [1, 2, 3].forEach(function (x) {
    return x <= 2;
  }),
  [1, 2],
);
