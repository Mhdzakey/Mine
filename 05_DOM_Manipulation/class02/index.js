
// // function e(){
// //     console.log("I have clicked");
// // }

// // document.addEventListener('click', e)

// const content = document.querySelector('#wrapper');
// const eventListener = (e)=> console.log(e)
// content.addEventListener('click', eventListener)
// //  content.addEventListener('click', (e) => {
// //     console.log(e.preventDefault);
// // })


let myDiv = document.createElement('div')
function clickedOnPara(){
    console.log('para' + event.target.textContent);
}
myDiv.addEventListener('click', clickedOnPara);
for(let i=1; i<10; i++){
    var newElement = document.createElement('p');
    newElement.textContent = "This is paragraph no: " + i;
    myDiv.appendChild(newElement)    
}
document.body.appendChild(myDiv)
























