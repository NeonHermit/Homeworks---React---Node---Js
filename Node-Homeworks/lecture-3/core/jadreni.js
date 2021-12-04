// Crypto

// let crypto;
// try {
//   crypto = require('crypto');
// } catch (err) {
//   console.log('crypto support is disabled!');
// }

const crypto = require('crypto');

const secret = 'abcdefg';
const hash = crypto.createHmac('sha256', secret)
                   .update('I love cupcakes')
                   .digest('hex');
console.log(hash);


// Path
const path = require ('path');
let pateka = path.parse('/home/user/dir/file.txt');

console.log(pateka);

// http
const http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();
}).listen(8080);