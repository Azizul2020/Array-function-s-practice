var arr = [16, 4, 6, 8, 55, 69, 45, 85, 28, 34, 46, 55, 6];
arr.sort(function(a, b) {
    return b - a;
});
console.log(arr);
var cities = ['Dhaka', 'Khulna', 'Rajshahi', 'Satkhira', "Borishal"];
cities.sort(function(a, b) {
    if (a > b) {
        return -1;
    } else if (a < b) {
        return 1;
    } else {
        return 0;
    }
});
console.log(cities);



/*
     -1 means little-big;

*/









var cities = ['Dhaka', 'Khulna', 'Rajshahi', 'Satkhira', "Borishal"];
cities.sort(function(a, b) {
    if (b > a) {
        return -1;
    }
});
console.log(cities);