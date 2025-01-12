// singleton
// object.create  //* constuctor method

// object literals
const sy = Symbol("key1")
const user ={
    name: "nirmal",
    "full name": "nirmal chaudhary",
    [sy]: "mykey",
    age:20,
    location: "uttrakhand",
    email: "abdfd@gmail.com",
    isLogin : false,
    lastLogin : ["mon","tuesday"]
}

// console.log(user.name)
// console.log(user["full name"])
// console.log(typeof user[sy])
user.name="vimal"
// Object.freeze(user) // it will don't allow to modify the object

user.name="nirmal chaudhary"
// console.log(user)

user.greeting = function(){
    console.log("hello world");
}

user.greetingTwo = function(){
    console.log(`hello, ${this["full name"]}`);
}

console.log(user.greeting());
console.log(user.greetingTwo());