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
    console.log(item);
}

// arr.forEach(printme)

arr.forEach((item,index,arra)=>{
    console.log(item,index,arra);
    
})

