let _ = require('lodash/fp');

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(_.head(arr));
console.log(_.some(arr, (x) => x == 1));
console.log(_.shuffle(arr));
console.log(_.size(arr));

var users = [
    { user: 'barney', active: true },
    { user: 'fred', active: false },
];

// The `_.matches` iteratee shorthand.
console.log(_.some(users, { user: 'barney', active: false }));
// => false

// The `_.matchesProperty` iteratee shorthand.
console.log(_.some(users, ['active', false]));
// => true

// The `_.property` iteratee shorthand.
console.log(_.some(users, 'active'));
// => true
console.log(_.some([null, 0, 'yes', false], Boolean));
// => true)
