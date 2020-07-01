/*
     It just for array and it always returns the boolean value (true/false)
*/
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let newarr = arr.filter(function(value) {
    return value % 2 == 0; // it means even number
})
console.log(newarr);

let newarr2 = arr.filter(function(value) {
    return value % 2 == 1; // it means odd number
})
console.log(newarr2);

/*
     odd Number Algorithm = value % 2 ==1
     even Number Algorithm = value % 2 ==0
*/


let newarr3 = arr.filter(function(value, i, a) {
    return i % 2 == 0
})
console.log(newarr);


//Using Arrow function;
let newarr4 = arr.filter(e => e % 2 === 1);
console.log(newarr4);


// Creating filter using callback function

function myfilter(arr, callback) {
    var newarr = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i]) == true) {
            newarr.push(arr[i]);
        }
    }
    return newarr;
}
var myfun = myfilter(arr, function(e) {
    return e % 2 == 0;
});
console.log(myfun);


let abc = [];
for (a = 1; a <= 50; a++) {
    abc.push(a);
}

var x = abc.filter(e => e % 2 == 1)
console.log(x);