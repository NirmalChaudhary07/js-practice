const tinder = new Object()
tinder.id ="343faf"
tinder.name="sam"
tinder.islogin = false
// console.log(tinder)

const regularName ={
    email: "abfdf@gmail.com",
    fullName:{
        userName:{
            firstName: "nirmal",
            lastName: "chaudhary"
        }
    }
}

// console.log(regularName.fullName.userName.firstName)

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"a",4:"b"}

// const obj3= Object.assign({},obj1,obj2) // combine the object

const obj3 ={...obj1,...obj2}

// console.log(obj3);

// console.log(Object.keys(tinder));
// console.log(Object.values(tinder));
// console.log(Object.entries(tinder));

// console.log(tinder.hasOwnProperty('id'));


//? destructuring

const course={
    fullName: "nirmal chaudhary",
    course: "java",
    fees: 1000
}

const {fullName:na} =course
console.log(na);
