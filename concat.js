var a = [10, 20, 30, 40];
var b = [1, 2, 3, 4, 5];


var c = a.concat(b);
console.log(c);

var d = [].concat(a, b, c);
console.log(d);


var e = d.sort((a, b) => a - b);
console.log(e);