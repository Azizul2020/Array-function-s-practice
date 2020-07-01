let arr = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];

// let arr = [5, 10, 15, 20, 25];

var newarr = arr.map(function(value, index, arr) {
    return value + 2;
})
console.log(newarr);

//Using arrow function

var newarr2 = arr.map(e => e * e)
console.log(newarr2);


// Creating map using callback function

function myMap(arr, callback) {
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
        newarr.push(callback(arr[i]))
    }
    return newarr;
}
var c = myMap(arr, function(arr) {
    return arr + 4
})
console.log(c)