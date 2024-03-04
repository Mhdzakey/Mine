




// // //Hoisting 
// // sum()
// // function sum(){
// //     console.log("Sum function");
// // }

// // //call or invoke function
// // sum()

// // //function assignment
// // let walking = function walk(){
// //     console.log("walk");
// // }

// // // hoisting cannot execute function assignment.

// // //Named function assignment
// // let walking1 = function walk(){
// //     console.log("walk");
// // }
// // //Anonymous function assignment
// // let walking3 = function   (){
// //     console.log("walk");
// // }

// // function add(a,b){
// //     return a+b;
// // } 

// // console.log(add(1,2)); //3
// // console.log(add(1));   // Nan
// // console.log(add());   // Nan
// // console.log(add(1,2,3,4));   // 3

// // // Special object -> Arguments


// // function add(a,b){
// //     console.log(arguments);
// //     return a+b;
// // } 
// function add(a,b){
//    let total = 0;
//    for (let value of arguments) 
//     total = total + value;
//     return total;
    
// }  
// // add(1,2)
// let ans = add(1,2,3,4,5)
// console.log(ans);


// Rest Parameter
// function sum(...args){
//     console.log(args);
// }
// sum(1,2,3,4,5) // return array 
// function sum(a, ...args){
//     console.log(args);
// }
// let a = sum(1,2,3,4,5) // return array 
// console.log(a);
// function sum(a,b, ...args){
//     console.log(args);
// }
// sum(1,2,3,4,5) // return array 


//Default Parameter
// console.log(persom);
// let fullName = ()=>{
//     return `${persom.fName} ${persom.lName}`
// }
// console.log(fullName());

// let persom={
//     fName: "Love",
//     lName: "VD",
//     get fullName(){
//     return `${persom.fName} ${persom.lName}`
//     },
//     set fullName(val){
//         if(typeof val !== String ){
//             throw new Error("Wrong name entered")
//         }
//         let parts = val.split(" ")
//         this.fName = parts[0];
//         this.lName = parts[0];
//     }
// };
// try {
//     persom.fullName = true
    
// } catch (error) {
//     alert(error)
// }

// console.log(persom.fullName );

// let stud = {
//     fName: "X",
//     lName: "Y",
//     get fullName(){
//         return `${stud.fName},${stud.lName}`
//     },
//     set fullName(value){
//         if (typeof value !== String) {
//             // throw new Error("Entered correct name")
//             alert("Enter aplhetically correct name")
//         }
//         let parts = value.split()
//         this.fName = parts[0];
//         this.lName = parts[1];

//     }
// }
// stud.fullName = true
// console.log(stud.fullName);


let price = [1,2,3,4,5];
let total = 0;
price.forEach(element => {
    total += element
});
let totalPrice = price.reduce((acc,cVal) => acc + cVal, 0);
console.log(totalPrice);




































