// map
const nums =[1,2,3,4,5,6,7]

// console.log(nums.map((num)=> num+10))


// reduce

// const myNum=[1,2,3,4]

// const total = myNum.reduce(function(acc,cur){
//     console.log(`acc: ${acc} and current val: ${cur}`);
//     return acc+cur
// },0)

// console.log(total);


const course =[
    {item:"js course",
        price: 999
    },
    {item:"py course",
        price: 1500
    },
    {item:"java course",
        price: 599
    },
    {item:"cpp course",
        price: 2000
    }
]


const addPrice = course.reduce((acc,item)=> acc+item.price ,0)

console.log(addPrice);
