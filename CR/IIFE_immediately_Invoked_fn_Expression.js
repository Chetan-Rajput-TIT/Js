// IIFE are the fns that are needed to reduce the pollute from the global scope 
// and to be involked immediately after its defination complete

// examples of IIFE

// pointed to be noted that there must need to ad a semicolon after an IIFE fn decalration 
// named IIFE fn 
( function db1(){
    console.log("db connected successfully ");
})();

// unnamed IIFE fn

(()=>{
    console.log("db connected successfully 2");
})();

// IIFE fn with aarguments 
((name)=>(console.log(`${name} Rajput`)))('chetan');

// Thanks to read if you get any query please notify me