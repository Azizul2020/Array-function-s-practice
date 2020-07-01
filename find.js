var arr = [10, 20, 30, 40, 50];
var match = 10;
var a = arr.find(function(value, index) {
    if (value === match)
        return true;
})
console.log(a);

var cities = ['Dhaka', 'Khulna', 'Rajshahi', 'Satkhira', "Borishal"];
var city = 'Satkhira';

var a = cities.find(function(value) {
    if (value === city)
        return true;
})
console.log(a);


var a = cities.find(function(a, i) {
    return (i == 2);
})
console.log(a);
index = 2;
var a = cities.find(function(a, i) {
    return (i == index);
});
console.log(a);


var obj = {
    name: 'Azizul',
    town: 'Satkhira'
};
var a = cities.find(function(v) {
    return v == this.town
}, obj);
console.log(a);

var obj = {
    name: 'Azizul',
    town: 'Satkhira'
};
var a = cities.find((v) => {
    return v == this.town
}, obj);
console.log(a);





















//