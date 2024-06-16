// // console.log("Chetan Rajput")

// // object in js
// const mysyn=Symbol('key1');
// const obj={
//     name:"Chetan",
//     id:6,
//     day:["monday","tuesday"],
//     [mysyn]:"hello"
// };
// // console.log(obj.name);
// // another method to access the value of objects in js
// // // it is very imortant that to use 2nd case accessing method because some where 1st method doesn't be used
// // console.log(obj["name"]);
// // console.log(obj.day[1]);
// // console.log(obj.day[0]);
// // console.log(obj[mysyn]);


// // Object.freeze(obj);
// obj["name"]="rahul";
// // console.log(obj.name);

// // fn in objects

// obj.gretting=function(){
//     console.log(`hello,js user ${this.name}`);
// }
// // obj.gretting();
// // console.log(obj.gretting);

// // nested objects
// const obj2={
//     name:{
//         first_name:"chetan",
//         second_name:"Rajput"
//     }
// };
// console.log(obj2.name);
// console.log(obj2.name.first_name);

// combining two object =s in js
// obc1={1:"a",2:"b"};
// obc2={3:"c",4:"d"};
// const b=Object.assign({},obc1,obc2);
// console.log(b);
// console.log({...obc1,...obc2});

// // keys and values
// console.log(Object.keys(obc1));
// console.log(Object.values(obc1));


// function in js
function login(user)
{
    return`${user } is loged in now`;
}
// console.log(login('chetan'))

