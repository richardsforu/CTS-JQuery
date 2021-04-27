

"use sttrict"


/**
 * function binding
 * -------------------
 * 
 *  => tio execute any function by an object , we must do binding
 * 
 * types
 * --------
 * 1. static
 * 2. dynamic
 * 
 * 
 * 
 */

// static binding

function isEven(inp){
  //  console.log(this); // current object who called this function
    let out=inp%2===0
    return out;
}

//let out=isEven(11); // called by parent object >>> window
//console.log(out);

/*

function sayName(){
    console.log('I am '+this.name);
}

//sayName();

let p1={
    name:'Praveen',
    sayName:sayName // static binding
}

let p2={name:'James',sayName:function(){
    console.log('name is '+this.name);
}}

p1.sayName();
p2.sayName();

*/

class Person{
    constructor(name){
        this.name=name;
    }

    sayName(){
        console.log(' I am '+this.name);
    }
}

let p3=new Person('Abc');
let p4=new Person('Xyz');

//p3.sayName();
//p4.sayName();


//------------------------
//     CTS-Academy
//------------------------

function doTraning(sub,duration,location){
   // console.log('trainer '+this.name+' is teachibg  '+sub+' at '+location+' for '+duration+' hours');
   console.log(`Trainer, ${this.name} is teaching ${sub} for ${duration} hours at ${location}`);
}

//doTraning('Java Scipt',60,'Chennai');

// way-1

//let trainer={name:'Praveen',doTraning:doTraning};
//trainer.doTraning('JS',60,'Chennai');

// way-2
//let trainer={name:'Ozvitha'};

//trainer.doTraning=doTraning;

//trainer.doTraning('Java',100,'Pune');

//---------------------------
// Vendore Module
//---------------------------

let trainer={name:'James'};
Object.preventExtensions(trainer);

//---------------------------
// cts-class Module
//---------------------------

//trainer.doTraning=doTraning;
//trainer.doTraning('Java',100,'Pune'); // error

//-----------------------------
// Dynamic Binding
//-----------------------------


// A. Eager invocation
// way-1 ::: call
//doTraning.call(trainer,'Spring',65,'Chennai')
//way-2 :::  apply
//doTraning.apply(trainer,['Java',80,'Hyderabad']);

// B:: Lazy invocation

// way::: bind
/*
let newF=doTraning.bind(trainer,'jQuery');

newF(10,'Kolkata')
newF(50,'Bangalore')
newF(20,'Mangalore')
*/

let p5={name:'A'};
let p6={name:'B'};
let p7={name:'C'};

let newF=doTraning.bind(p5);
newF('Java',30,'Chennai')

let newF1=doTraning.bind(p6);
newF1('PHP',87,'Chennai');







