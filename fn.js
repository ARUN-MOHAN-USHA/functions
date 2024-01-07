// function sum(a, b){ //Define  //parameters //rest parameter



//     let res = a * b;
//     console.log(res);
// }

// let x = 10;
// let y = 30;

// sum(x,y); //invoke  // call  // Arguments






// function sum(...arg){ //rest parameter

//     console.log(arg);
// }

// let x = 10;
// let y = 20;
// let z = 40;

// sum(x,y,z,"Arun");





// function sum(a, fn){ //higher order
    

//     console.log(a);

//     fn()
// }
// function display(){
//     console.log("I'm display fn");
// }

// let x = 10;
// let y = 20;
// let z = 40;

// sum(x,display);  //callback fn





// function sum(a ,b){

//     let sum = a / b;
//     return sum;
// }

// let res = sum(50,2);

// console.log(res);




// let fn = function(){   // function expression
//     console.log("Anon fn");
// }

// fn();




let x = (v)=>{
    console.log("Arrow",v);
}

x("function");
