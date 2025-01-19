//for of loop

// let arr =[1,2,3,4,5]
// for (const val of arr) {
    // console.log(`value of array is ${val}`);
// }


// let greeting = "hello world"

// for (const greet of greeting) {
    
//     if(greet == " ")
//     {
//         continue;
//     }
//     console.log(`${greet}`);
    
// }

// map

let map = new Map()
map.set('IN','india')
map.set('CN','china')
map.set('RS','russia')

console.log(map);

for (const [key,val] of map) {
    console.log(key,val);
    
}