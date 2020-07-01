/*
     for in loop works with array and object also strings
*/
let arr = [10, 20, 30, 50, 60, 70];
for (i in arr) {
    console.log(i)
}
for (i in arr) {
    console.log(arr[i])
}

/*
     i = arr's index
*/

let obj = {
    name: 'Azizul Islam',
    age: 18,
    class: 11,
    roll: 39,
    section: "Science"
}

for (a in obj) {
    console.log(a);
}
for (a in obj) {
    console.log(obj[a]);
    console.log(a + ' : ' + obj[a]);
}

/*
  a = obj's index =name,age,class,roll,section
  obj=object   
*/


var str = "Welcome to my code block site";
for (i in str) {
    console.log(str[i])
}