// (1) Var -- global scope

var a = 10; //Global Scope
console.log("Outer value of a = ",a);

{
    console.log("Inner value of a = ",a);
}

var a = 20; //Redeclaration

a = 30; // Reassignment

console.log("Outer value of a = ",a);

{
    var a = 40; //Redeclaration
}

console.log("Outer value of a = ",a);



// (2) let -- block scope

let x = 10;
console.log("value of x = ",x);

//let x =200;

x = 200
console.log("x = ",x);

{
    let x =500
    console.log("Inside value of x = ",x)
    //let p = 600
}

console.log("After creation of block .... x = ",x);
console.log("After creation of block .... p = ",p);


// (3) const -- block scope

const pi = 3.14;
console.log("Value of pi = ",pi);

pi=3.14;
console.log("value of pi = ",pi);