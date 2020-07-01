/* forEach just for array  */

let arr = [10, 20, 30, 40, 50, 60, 70];
arr.forEach(function(e) {
    console.log(e);
})
arr.forEach(function(e, i) {
    console.log("Index is " + i)
})

arr.forEach(function(e, i, a) {
    console.log(`Array is ${a}`)
})

/*
   e = element = array's value;
   i = index = array's index
   a = array = total array

   Note: e is required but i and a is optional 
*/


let names = ['Azizul', 'Aminur', 'Rakib', 'Sobuj', 'Torikul', 'Sagor'];
names.forEach(e => {
    console.log(e)
});


names.forEach((e, i, a) => {
    console.log(`Index number ${i},Values ${e} & Array ${a}`);

});



//Creating for each using callback function


let arr2 = [20, 40, 50, 50, 60, 70, 80, 90];

function print(e, call) {
    for (let i = 0; i < e.length; i++) {
        call(e[i], i, e)
    }
}
print(arr2, function(e, i, a) {
    console.log(`Element ${e} Index ${i} array ${a}`)
})


/*
     e = arr2 = e[i] = arr2[i] = arr2's element
*/


let arr3 = [10, 20, 30, 40, 50];
arr3.forEach((e, i, a) => {
    a[i] = e * e;
})
console.log(arr3);


let obj = {
    name: 'Azizul Islam',
    age: 18,
    data: [10, 20, 30, 40],
    section: "Science"
};

obj.data.forEach(function(element) {
    console.log(this)
}, this)