// Function scopes

//------------------------------------
//   scopes / execution context
//------------------------------------

/**
 * memory/statck-frame which contains argumemtst and local variables 
 * to execute peace of instruuctions
 * 
 * 2 phases
 * ----------
 * phase-1 : creation / push
 *  => all the variables declaraed witth 'var' keyword will get lifted up to the 
 *     top of the scope with default value (undeined)
 * 
 * 
 * phase-2: execution: 
 *  => instruuctions executes in sequence
 * 
 * 
 * 
 */


// phase 1




// quiz-1

//console.log('- first-line');
//console.log(v);

// quiz-2

/*
var v = 12; // paremt scope / global scope
// first priority is always local
// when variable not avaiable in local scope, then js runtime looks into parent of local scope
function f1() { // f1 context
   
    console.log(this.v); // 12 first priority is always local scope <<< f1 scope
    console.log(v); // undefined
    // this keyword alwasy represent parent scope of current scope
    // this keyword nevel look into local scope
    var v = 13; // local scope is f1 -> child of global scope
    console.log(v); // 13
}

f1();

*/


/*
// quize -3

var v = 12;
function f1() { // child of global scope

    function f2() { // child of f1 scope
        console.log(this.v); // global scope value :: functions.js // 12
        console.log(v); // 13
    }

    //f2(); // undefined
    var v = 13; // with var keyword
    f2();  // 13
}

f1();

*/


// functions are 2 types

// type 1: named functions :>> create / push phase
// type 2: function expression or Anonmos functions :: 


/*

// type 1: named functions :>> create / push phase

//abc(); // calling abc function before its defination

function abc(){ // named functions / function defination
    console.log('helloo abc');
}


// type 2: function expression or Anonmos functions :: 



var f1=function(){
    console.log('hello i am  Anonmos function');
}


f1();

*/

// function parameters

/*
function f1(a,b){
   console.log(a);
   console.log(b);
}

f1(); // 
f1(10);
f1(10,20);
f1(1,2,3,4,5);

*/

function sum() {
    let len = arguments.length,
        result = 0,
        i = 0;
    while (i < len) {
        result += arguments[i];
        i++;
    }
    return result
}

/*

// can we do function overloading in js?

function getLunch() {
    return "No Lunch";
}

function getLunch(pay) {
    //....
    return "Biryani";
}

function getLunch(pay, extra) {
    //...
    return "Biryani" + " Soft Drink";
}

//getLunch();


function getLunch() {
    if (arguments.length === 0)
        return "No Lunch";

    if (arguments.length === 1)
        return "Biryani";

    if (arguments.length === 2)
        return "Biryani" + " Soft Drink";
}


console.log(getLunch()); // no lunch
console.log(getLunch(150)); //  Biryani
console.log(getLunch(1,34)); // Biryani Soft Drink


*/

// parent and child functions


/*
function teach() { // teach scope
    console.log('teaching javascript');
    //......

    let learn = function () {
        console.log("learning javascript");
    }
    return learn; 

}  // teach scope ends  .. when teach ends, then all child scopes of teach also ends


let learnFn=teach();
learnFn();
learnFn();
learnFn();
learnFn();
learnFn();

*/




function operations() {

    console.log(">>>>operations called ");

    function sum(a, b) {
        return a + b;
    }

    function mul(a, b) {
        return a * b;
    }
    function div(a, b) {
        return a / b;
    }
    function sub(a, b) {
        return a - b;
    }

    /*
    return {
        "sum": sum,
        "mul": mul,
        "div": div,
        "sub": sub
    }*/

    return {sum,sub,mul,div};
}

/*
let ops = operations();
console.log(ops.f1(100,20));
console.log(ops.f2(10,3));
console.log(ops.f3(100,10));
console.log(ops.f4(50,20));
*/

var {sum,sub,mul,div}=operations();
console.log(sum(100,200));
console.log(sub(10,2));
console.log(mul(20,4));
console.log(div(30,2));