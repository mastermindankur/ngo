
const util = require('util');

var fs = require('fs');
var log_file = fs.createWriteStream('ankurkhera.log', {flags : 'w'});
var log_stdout = process.stdout;

console.log = function(d) { //
  log_file.write(util.format(d) + '\n');
  log_stdout.write("-"+util.format(d) + '\n');
};


console.log("ankur khera is a good boy");
console.log("escolombie");
~
