// for loop in javascript

// for(let i=0;i<10;i++) console.log("Hello");

// nested for loop

// for(let i=0;i<5;i++){
//     console.log("outer loop = "+i);
//     for(let j=0;j<5;j++) console.log("inner loop = "+j);
// }

// for of loop 
// used for traversel in array, string ,maps

const map1= new Map;
map1.set(1,'a');
map1.set(2,'b');
map1.set(3,'c');
map1.set(4,'d');
map1.set(5,'e');

// for (const key of map1){
//     console.log(key);
// }

// for (const [key,value] of map1){
//     console.log(key+' :->'+value);
// }

// for of loop in strings
 const name="Chetan Rajput";
 for(const i of name){
    console.log(i);
 }

 //for in loops 
//  mainly used to traverse an object and arrays
const obj={
    1:'one',
    2:'two',
    3:'three',
    4:'four',
    5:'five'
};
// for( let i in obj){
//     console.log(i+' :-> '+obj[i]);

// }

// for in loop for arrays
const a =[1,2,3,4,5];
// for( let i in a)console.log("i = "+i);

// for each loop in javacript
// mainly used to traverse array and string 

a.forEach(function (i){ console.log(i)});
