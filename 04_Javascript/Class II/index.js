// console.log("Object");
// const rectangle = {
//     length : 2,
//     breadth : 3 ,
//     area: function(){return this.length * this.breadth}

// }
// // console.log(rectangle.area);


// Factory function


// function createRectangle(){
//     return rectanlge = {
//         length : 2,
//         breath : 2,
//         draw: function() 
//         {
//             console.log("Draw");
//         }
//     };
// }
// console.log(createRectangle);

// function createSqaure(length,breadth){
//     return square= {
//         length,
//         breadth,
//         area(){console.log("Area");}
//     }
// }
// let squareObj = console.log(createSqaure(4,4));
// let squareObj1 = console.log(createSqaure(4,4));
// let squareObj2 = console.log(createSqaure(4,4));


// Cosntructor Funciton

// function CreateRectangle(){
//     this.lenght = 1;
//     this.breath = 3;
//     this.draw = function(){ console.log("Draw");}
// }
// // object creation using constructor
// let rectangleObject = new reateRectangle();
// console.log(rectangleObject);



// Dynamic NAture of Objects
// Adding Prop to object
// Deleting Prop from object

// function CreateRectangle(lenght, breadth){
//     this.lenght = lenght;
//     this.breath = breadth;
//     this.draw = function(){ console.log("Draw");}
// }
// // object creation using constructor
// let rectangleObject = new CreateRectangle(4,3);
// console.log(rectangleObject);
// rectangleObject.color = "Green";
// console.log(rectangleObject);
// delete rectangleObject.color
// console.log(rectangleObject);
// console.log(rectangleObject.constructor);
// console.log(CreateRectangle.constructor);

// Difference bwteen Primitive and Reference


// let a =10;
// console.log(a);  //10
// let b=a; 
// console.log(b);  //10
// a++;
// console.log(a);  //11
// console.log(b);  //10

//Primitive: Copy create

// let x ={value:10}
// let y=x;
// x.value++;
// console.log(x);  //11
// console.log(y);  //11

//Reference: Pointes at the same address if y=x

// primitve are copied by their value. 
// reference are copied by their address or refernce.

//Pass by value 
// jab primitve pass hogha to function may cop banay ghe
// let a =10;
// function inc(a){
//     a++;
// }
// inc(a)
// console.log(a); //10


// let a =10;
// function inc(a){
//     a++;
//     console.log(a);
// }
// inc(a)
// result 11 then 10

// let a = {value:10}
// function inc(a){
//     a.value++;
// }
// inc(a);
// console.log(a);


let Rectangle = {
    length:2,
    breadth:4,
    area:8
}

// for(let key in Rectangle){
// //     console.log(key );
// //     console.log(Rectangle[key] );
//     // console.log(key,Rectangle[key] );
//     console.log(Rectangle[key]);
// // }
// for (const key in Rectangle) {
//     if (Object.hasOwnProperty.call(Rectangle, key)) {
//         const element = Rectangle[key];
//         console.log(element);
        
//     }
// }
// for(let key of Object.keys(Rectangle)){
//     console.log(key);
// }
// for(const key of Object.entries(Rectangle)){
//     console.log(key);
// }

// if('color' in Rectangle){console.log("Present");} else {console.log("Not present");}
// if('length' in Rectangle){console.log("Present");} else {console.log("Not present");}


// OBject Cloning

//iterating

let src = {value: 10, char : 32, cdj: 34};
let des = {};
for(let key in src){
    des[key] = src[key]
}
console.log(des);
src.value++;
console.log(des);


//Assign
let src2 ={vvv:324}
let dest = Object.assign({}, src, src2)
console.log(dest);


//Spread Operator

let Destination = {...Rectangle}
let Destination1 = {...src}
console.log(Destination);
console.log(Destination1);
















 




