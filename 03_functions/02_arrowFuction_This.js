const user ={
    username:"nirmal",
    age:20,

    welcomeMsg:function()
    {
        console.log(`${this.username}, welcome to the webpage`);
        console.log(this);
        
    }
}

// user.welcomeMsg();
// user.username="amit";
// user.welcomeMsg();



function user1(){
    console.log(this);
}

// user1();


const one= ()=>{
    console.log(this);
    
}

one();

const add =(num1,num2)=>{
    return num1+num2
}

console.log(add(4,5));

const addnum =(num1,num2)=>(num1+num2) // () with this you dont have to use the return key word

console.log(addnum(3,5));


