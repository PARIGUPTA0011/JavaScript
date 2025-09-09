// console.log(2 > 1);
// console.log(2 < 1);
// console.log(2 >= 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);    

// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null >0);
// // console.log(null >=0); comaprison operator converts into number
// console.log(null ==0); //equality operator works diff

// console.log(undefined >0);
// console.log(undefined ==0);
// console.log(undefined >=0);


//DATA TYPES IN JS
//Primitive data types
//1. Number 2. String 3. Boolean 4. null 5. undefined 6. Symbol

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id == anotherId);
console.log(id);
console.log(anotherId);

//Non primitive data types are objects
const heroes = ["Spiderman", "Batman", "Superman", "Ironman"];

let myobj = {
    name: "Parig",
    age: 22,
    isActive: true,
    hobbies: ["coding", "sleeping", "music"]
}


const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction);