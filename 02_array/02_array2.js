
let marvel_heros =["thor", "iron main", "spider man"]

let dc_heros = ["superman", "batman", "flash"]

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
let allHeros = marvel_heros.concat(dc_heros)

// console.log(allHeros)

const newHeros = [...marvel_heros,...dc_heros] // spread operator

// console.log(newHeros)

let anotherArr =[2,5,2,5,[6,45,4],[4,6,2,[5,3,6]]]

let realArr =anotherArr.flat(Infinity)
// console.log(realArr)

console.log(Array.isArray("nirmal"));
console.log(Array.from("nirmal"));
let score=100; let score2 =200; let score3 =300;
console.log(Array.of(score,score2,score3))