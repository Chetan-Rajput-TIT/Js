// filter in arrays in js

// filter is used to replace foreach loop some 
// where there we have to select only few part of array
// using arrow fn 

 const arr=[1,2,3,4,5,6,7,8,9,0];
 const ans =arr.filter((i)=>i>5);
// console.log(ans);

// using named fn
 const ans1=arr.filter( function (i){
    return i>4;
})
// console.log(ans);

// Maps for arrays in javascript
// it used to change every value of array using some mathmatical way

const ans2=arr.map((i)=>i*10);
// console.log(ans2);

// reduce method for array in javascript
// it used to reduce the array such add all element or product all elements

const ans3=arr.reduce((accumlator,currentval)=>{ return accumlator+currentval},0);
// console.log(ans3);

// nested maps or filters

const ans4 =arr.filter((i)=>i>4)
               .map((j)=>j*10-1)
console.log(ans4);