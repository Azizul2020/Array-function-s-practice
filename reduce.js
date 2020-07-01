/*
let array = [10, 20, 30, 40, 50];

var arr = array.reduce(function(a, b) {
    return a + b;

})
console.log(arr);

var arr = array.reduce(function(a, b) {
    return a + b;

}, 10)
console.log(arr);



var names = ["Azizul ", "Sobuj ", "Torikul "]
var arr = names.reduce(function(a, b) {
    return a + b;
})
console.log(arr);

*/


var arr=[10,20,30,40,50,60];
var a=arr.reduce(function(a,b,i,c,d){
	// console.log(a);
	// console.log(b);
	console.log(i);
	console.log(c);
	return a+b;
},20)
console.log(a);



