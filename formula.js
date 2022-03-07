var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

var a = parseFloat(lines[0]);
var b = parseFloat(lines[1]);
var c = parseFloat(lines[2]);

var sq = Math.pow (b , 2);
var sqv = sq;
var delta = sqv - 4 * a * c;

if (a === 0 || delta < -1){
  console.log('Impossivel calcular');
}
else {

var sq = Math.pow (b , 2);
var sqv = sq;
var delta = sqv - 4 * a * c;

var b1 = (-b);
var b2 = Math.sqrt(delta);
var b3 = b2;
var b4 = b1 + b3;
var b5 = 2;
var b6 = a;
var b7 = b5 * b6;
var b8 = b7;
var b9 = b4 / b8;
var b10 = b9; 
console.log('R1 = ' + b10.toFixed(5));

var b1 = (-b);
var b2 = Math.sqrt(delta);
var b3 =  b2;
var b4 = b1 - b3;
var b5 = 2;
var b6 = a;
var b7 = b5 * b6;
var b8 = b7;
var b9 = b4 / b8;
var b10 = b9; 
console.log('R2 = ' + b10.toFixed(5));
}