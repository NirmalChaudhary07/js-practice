// for in

const obj ={
    js : "javascript",
    cpp :"c++",
    py: "python"
}

for (const key in obj) {
//    console.log(`${key} is ${obj[key]}`);
}


const arr =["cpp","rb","js","java"]

// for (const key in arr) {
//     console.log(arr[key]);   
// }


// arr.forEach(function(val){
//     console.log(val);
    
// })

// arr.forEach((key)=>{
//     console.log(key);
    
// })


function printme(item){
    // console.log(item);
}

// arr.forEach(printme)

arr.forEach((item,index,arra)=>{
    // console.log(item,index,arra);
    
})


const arr1 =[1,2,3,4,5,6,7,8,9,10]

let vale=arr1.filter((key)=> { return key>5})

console.log(vale);


// let newNums =[]

// arr1.forEach((val)=>{
//     if(val>4)
//     {
//         newNums.push(val);
//     }
// })
// console.log(newNums);
