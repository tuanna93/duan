const jwt = require('jsonwebtoken');


var token = jwt.sign({ username: 'tuanna84', password: '32132131', email: 'tuanna84@gmail.com', role: '1' }, 'shhhhh');
var decoded = jwt.verify(token, 'shhhhh');
console.log(token)
console.log(decoded)

