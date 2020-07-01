var arr = [10, 20, 30, 35, 40, 45, 50, 60, 70, 80];
var a = arr.findIndex(function(value, index) {
    return index == 5
});
console.log(a);



var cities = ['Dhaka', 'Khulna', 'Rajshahi', 'Satkhira', "Borishal"];
var city = 'Satkhira';

var a = cities.findIndex(function(value) {
    return value === city;
});
console.log(a);