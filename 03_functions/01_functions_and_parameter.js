function sayMyname() {
    console.log("hello");
    console.log("world!");
    
}

// sayMyname()

// function addTwoNum(num1,num2){
//     console.log(num1+num2);
    
// }
// addTwoNum(5,3);

function addTwoNum(num1,num2){
    let result = num1+num2;
    return result;
}


// let result =addTwoNum(5,4);
// console.log(result);


function loginUserName(username){
    if(username === undefined)
    {
        console.log("please enter a name");
        return
    }
    else{
    return `${username} just log in`;
    }
}

// console.log(loginUserName("nirmal"));


// function calculate(...num1){
//     console.log(num1);
// }

// calculate(43,532,31,544);

const user={
    name:"nirmal",
    age:20
}

function userdetail(anyobject){
    console.log(`user name is ${anyobject.name} and age is ${anyobject.age}`);
    
}

// userdetail(user);
userdetail({
    name:"nirmal chaudhary",
    age:20
})


// +++++++++++++++ scope ++++++++++++++++++++

function one(){
    const value = "nirmal"
    // console.log(value)
    function two(){
        const result="dfasd"
        console.log(value);
    }

    // console.log(result)
    // two()
}

one()



function addone(numb){
    return numb+1;
}

addone(5);


const addtwo =function(numbs){
    return numbs+1;
}

addtwo(5);


