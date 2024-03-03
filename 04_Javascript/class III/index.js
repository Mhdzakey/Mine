// // // let random = Math.random()
// // // let roundNumber = Math.round(12.8)
// // // let absolute = Math.abs(-2)
// // // console.log(random);
// // // console.log(roundNumber);
// // // console.log(absolute);

// // // String two type Primitve and object type
// // // let firstName = "String"
// // // let lastName = new String(`firstName`);
// // // console.log(firstName);
// // // console.log(lastName);  // String {'firstName'}
// // // console.log(typeof firstName);
// // // console.log(typeof lastName); //object
// // // console.log( firstName.split())

// // // template literal
// // // let no = "1 Frist"
// // // let message = `This is, 
// // // my ${no}
// // // message`;
// // // console.log(message);

// // let date = new Date("2/2/2")
// // console.log(date);


// // //Primitve 
// let array = [1,3,4,5,6,5]
// console.log(array.indexOf(0));
// console.log(array.includes(0));

// // //Reference
// let arrayOfObj = [
//     {
//         no:1, firstName:'Zakey'
//     },
//     {
//         no:2, lastName: 'Saud'
//     }
// ]
// // console.log(arrayOfObj);
// // console.log(arrayOfObj.indexOf(1)); 

// //Callback to access array of objects which is reference

// let firstName = arrayOfObj.find(function(a){
//      let b = a.firstName == "Zakey"
//      console.log(b);
// })
// console.log(firstName);

// console.log(array.length = 0);


// let address1 = [
//     {firstName: "a" },
//     {firstName: "b" },
//     {firstName: "c" },
// ]
// let address2 = [
//     {lastName: "x" },
//     {lasstName: "y" },
//     {lastName: "z" },
// ]
// // console.log(address);
// console.log(address1.firstName);

// let x = [1,2,3,4]
// let y = [3,4,5,6]
// let combine = [...x, ...y]
// let combine1 = [...x,'X', ...y,'Y']
// console.log(combine);
// console.log(combine1);

// //copy
// let z = [...combine]
// console.log(z);


// let a = x.forEach(function(n){
//     console.log(n);
// })


// x.forEach(element => {
//     console.log(element);
// });


// join & split
// let z = x.join(' ,')
// // console.log(z);
// let x = "this is me"
// let z = x.split(' ')
// console.log(z);


let x = [12,23,45,234,34,2 ]
// let y = x.sort()
// console.log(y);
// let z = y.reverse();
// console.log(z);


//Filtering
 
// let y = x.filter(function(value){
//     return value > 44 && value % 2 == 0
// // })
// let y = x.filter(value => value % 2 == 0 )
// console.log(y);


//Mapping 

// let y = x.map( function(val){
//     return val > 40
// } )
// let z = x.map( val=>"number is " + val)
// // console.log(y);
// console.log(z);


// Mapping with Objects

let filtered = x.filter( val => val >= 20)
console.log(filtered);
let mapped  = filtered.map(v => {val: v})
console.log(mapped);



















