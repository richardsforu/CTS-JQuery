
var a = 100;
a = 'abc';
a = false;
a = null;
a = undefined;
a = "Abc";
//----------------------------------

// objects can be created in 2 ways 
// way-1 - new operator 
obj = new Object();
obj.id = 100;
obj.name = 'Praveen';

// way - 2  literal style
emp = {
    id: '1024',
    name: 'James'
}

//------------------------------------------------
var i = 10; // es5
let n = 20; // let is es6 feature
var i = 30;
var i = 40;
//let n=50;

//-------------------------------------------------

// scopes support


let j = 10;
var k = 10;

{
    let j = 20;
    k = 20;
    console.log('blocked: ' + j); //20
    console.log('blocked: K ' + k); // 20
}

console.log(j); //10
console.log(k); // 20

// const

const ii = 988; // es6 featurre
console.log(ii);
//ii = 877;

//-------------------------------

//desture
person = { id: 10, name: 'Praveen', loc: 'HYD' };
//let id=person.id;
//let name=person.name;
//let loc=person.loc;
console.log(person);

let { id, name, loc } = person; // es6

//-------------------------------
// spread operator

let c = { company: 'Cognizant' }
let l1 = { location: 'Hyderabad' }
let l2 = { location: 'Pune' }
let l3 = { location: 'Chennai' }
let l4 = { location: 'Kolkata' }

//let p1={name:'Praveen',location:l2.location} // es5

let p1 = { name: 'Praveen', ...l4, ...c } // es6

// working with arrays

let nums = [10, 20, 76, 3];

//for(let m=0;m<nums.length;m++){
//  console.log(nums[m]);
//}  // es5

// for in or for of

// for-in

for (let num in nums) {
    // console.log(num); // indexes  - es6
}

console.log("---------------------");

for (let num of nums) {
    // console.log(num); // nums of array - es6
}

//---------------------------------------------------
// for each

nums.forEach(num => {
    console.log(num);
})

// applying array functions

// find a number 10






let res = (n) => nums.find(num => num === n);

let v1 = "100";
let v2 = 100;

if (v1 === v2) {
    console.log("equal");
} else {
    console.log("not equals");
}

//---------------------------------------------------------








