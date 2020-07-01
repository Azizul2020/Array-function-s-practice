let arr = [10, 20, 30, 40, 50, 60., 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230];

console.log(arr);
let trim = arr.slice(2, 12)
let trim2 = arr.slice(1, 5)
console.log(trim);
console.log(trim2);



/*
     new Value's Length = last-first;

     first = start index;

     last = new value's length + start index number;
*/

let trim3 = arr.slice(10);
console.log(trim3);

let trim4 = arr.slice(-1);
// From -1 index to last so total is 1;
console.log(trim4);


let trim5 = arr.slice(-3);
// From -3 index to last so total is 3;
console.log(trim5);



let trim6 = arr.slice(-8, -4);
// From -8 index to -4 so total is 4;
console.log(trim6);


var str = "Hello world , I am Azizul Islam and i am 18 years old I read in class 11";

var x = str.substr(2, 6);
console.log(x);