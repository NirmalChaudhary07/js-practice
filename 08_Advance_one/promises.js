// const promise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve();
//         console.log("I am inside promise");
//     }, 1000);
// });

// promise.then(function(){
//     setTimeout(()=>{
//         console.log("I am inside then");
//     },1000);
// });

// const promiseTwo = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username: "John", password: "12345"});
//     }, 1000);
// });

// promiseTwo.then(function(user){
//     console.log(user);
// })

// const promiseThree = new Promise(function(resolve,reject){
        // setTimeout(() => {
        //     let error = true;

        //     if(!error)
        //     {
        //         resolve({username : "nirmal" , password: 12345, 
        //             yo: function(){
        //                 console.log("what's up");
                        
        //             }
        //         })
        //     }
        //     else{
        //         reject('error some thing went wrong');
        //     }
        // }, 1000);
// })


// promiseThree.then((user)=>{
//     console.log(user);
//     return user.yo;
// }).then((userna)=>{
//     userna();
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=> console.log("the promise is either resolve or rejected"))



// const promiseFive = new Promise(function(resolve,reject){

//     let error = true;
//     setTimeout(() => {

//             if(!error)
//             {
//                 resolve({username : "nirmal" , password: 12345, 
//                     yo: function(){
//                         console.log("what's up");
                        
//                     }
//                 })
//             }
//             else{
//                 reject('error in promise five');
//             }
//         }, 1000);
  
// })


// async function consume () {
   
//    try{ const wa = await promiseFive;
//    console.log(wa.username);
//    }
//    catch(error1){
//     console.log(error1);
    
//    }
// }

// consume();



// * 

// async function getuser() {
    
//    const response = await fetch('https://api.github.com/users/nirmalchaudhary')
//    const data = await response.json();
//    console.log(data);
    
// }

// getuser();

// *

fetch('https://api.github.com/users/nirmalchaudhary')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
    
})
.catch(()=>{
    console.log("error");
})