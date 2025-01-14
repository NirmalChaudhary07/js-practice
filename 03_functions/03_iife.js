// Immediately Invoked Function Expressions (IIFE)

//? it is use to avoid the pollution of the global(variables) 

(function chai(){
    // named iife
    console.log(`db connected`);
    
})();


((name)=> {
    console.log(`db connected two ${name}`);
    
})('nirmal');