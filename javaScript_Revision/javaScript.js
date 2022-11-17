// // S T R I N G S

// let str = 'Learning javaScript';

// // substring for printing the string upto the certain index
// console.log(str.substring(3));

// // replace the string or part of it
// console.log(str.replace('Learning', 'teaching'));

// // Splitting the string by space into array
// console.log(str.split(" "));


// // A R R A Y S
// let array = [1,2,3,4,5,'abc','xyz'];

// // pushing the elements into the array
// array.push('nmop');

// // printing each element by for loop
// for(let i=0;i<array.length;i++){
//     console.log(array[i]);
// }

// // printing each element by forEach loop

// array.forEach(element => {
//     console.log(element);
// });

// // O B J E C T S
// let object = {
//     name: "Basit",
//     rollNo: 12,
//     address: "Habba Kadal"
// }
// console.log(object);


// // E V E N T S

// // creating new function to be called on onclick Event

// function handleEvent(){
//     event.stopPropagation();
//     event.preventDefault(); 

//     console.log("Event Clicked");
// }

// // creating new function to be called on onmoverover and onmouseout Event

// function handleMouseOver(){
//     event.target.style.color = "purple";
// }

// function handleMouseOut(x){
//     x.style.color = "black";
// }

// // MOUSE AND KEYBOARD EVENTS

// // onchange     =>	An HTML element has been changed
// // onclick	    =>  The user clicks an HTML element
// // onmouseover	=>  The user moves the mouse over an HTML element
// // onmouseout	=>  The user moves the mouse away from an HTML element
// // onkeydown	=>  The user pushes a keyboard key


// // FORM EVENTS

// // onfocus      => 	When the user focuses on an element
// // onsubmit	    =>  When the user submits the form
// // onblur	    =>  When the focus is away from a form element
// // onchange	    =>  When the user modifies or changes the value of a form element

// // WINDOW/DOCUMENT EVENTS

// // onload	    =>  When the browser finishes the loading of the page
// // onunload	    =>  When the visitor leaves the current webpage, the browser unloads it
// // onresize	    =>  When the visitor resizes the window of the browser


// // DOM MANUPLATION AND EVENTS

// function handleStudent(){
//     event.stopPropagation();
//     event.preventDefault();
//     let studentList = [];

//     let student = {};

//     student.name = document.getElementById("name").value;
//     student.rollno = document.getElementById("rollno").value;
//     student.address = document.getElementById("address").value;
//     studentList.push(student);

//     studentList.forEach(element =>{
//         let div = document.createElement('div');
//         div.innerHTML = `<p>Your Name is ${element.name}</p><p>Your Roll No is ${element.rollno}</p><p>Your Address is ${element.address}</p><br>
//         `
//         target = document.getElementById('target').appendChild(div);
//     })
// }


// // ADD EVENT LISTENER

// document.getElementById('btn').addEventListener('click', handleStudent);


