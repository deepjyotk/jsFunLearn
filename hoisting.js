getName() ;
console.log(x);


var x = 7 ;
function getName(){
    console.log("Namaste JavaScript");
}
/*

output of above code, will be:

Namaste JavaScript
undefined

*/




console.log(getName2);

function getName2(){
    console.log("Namaste JavaScript");
}
/*

output of above code, will be:

function getName2(){
    console.log("Namaste JavaScript");
}

But, how?
it's just how JS works in 2 phases: where the first phase is the memory allocation phase and the 
second phase is the execution phase.

*/




console.log(getName3);


var getName3 = () =>{
    console.log("GetName3");
};

/*

output of above code, will be:

undefined

But, how?
 - Js durin the memory allocation phase, will alllocated the getName3 as a normal variable, and make it undefined.

what is hoisting?
Hoisting: Mechanism in JS where the variable declarations are moved to the top 
of the scope before execution. Therefore it is possible to call a function before initializing it.



 */



