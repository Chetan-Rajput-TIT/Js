// arrow fn in javascript

const print=()=>{
    console.log("hello, js user");
}
print();

const add1=(num1,num2)=>{
    return num1+num2;
}
console.log(add1(3,4));

// Important method to noted 

const add2=(num1,num2)=>(num1+num2);//no need to write return for only one line of fn
console.log(add2(4,5));