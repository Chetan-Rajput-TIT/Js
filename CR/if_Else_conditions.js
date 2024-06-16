// // if  else conditions in js
const a=10;
const b=20;
// if (b>a){
//     console.log("b is greater than a");
// }
// else console.log("a is greater than b");

// Nested if  else condition 
const c=25;
if (a>b){
    if (a>c)console.log("a is greater than b and c");
    else console.log("c is greater than a and b");
}
else if (b>a){
    if (c>b)console.log("c is greater than a and b");
    else console.log("b is greater than a and c");

}
else console.log("c is greater than a and b");

