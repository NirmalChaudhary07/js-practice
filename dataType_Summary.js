// primitive data type
//**  1. Number 2. String 3. Boolean 4. Undefined 5. Null 6. Symbol 7. BigInt

// Non primitive data type (reference)

//** 1. Object 2. Array 3. Function 4. Date 5. RegExp

const heros = ['superman', 'batman', 'spiderman', 'ironman', 'captain america', 'thor', 'hulk', 'black widow', 'black panther'];

let Object = {
    name:'nirmal',
    age: 25,
    profession: 'developer',
    heros: heros
}

const myfunction = () => {
    console.log('hello world');
}
// console.log(typeof Object);
// console.log(typeof myfunction);


let dataone={
    name:'nirmal',
    age: 25,
    profession: 'developer',
    heros: heros
}

let datatwo=dataone
datatwo.name='nitin'

console.log(dataone.name); 
console.log(datatwo.name);