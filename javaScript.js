function loadData(){
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200){
            let posts = JSON.parse(this.responseText)
            
            posts.forEach((post) => {
                let element = document.createElement("div");
                element.innerHTML = `
                <h1>${post.title}</h1>
                <p>${post.email}</p>
                <p>${post.body}</p>
                
                `
                document.querySelector("#myDiv").appendChild(element);
            });
        }
        else if(this.readyState === 4 || this.status === 404){
            document.querySelector("#myDiv").innerHTML = "File Not found"
        
        
        }
    }


xhttp.open("GET", "https://picsum.photos/200", true);
xhttp.send();

}























// let studentsList = [];

// function handleAdmin(event) {
//   event.stopPropagation();
//   event.preventDefault();

//   let student = {};
//   student.name = document.getElementById("name").value;
//   student.rollNo = document.getElementById("rollNo").value;
//   student.address = document.getElementById("address").value;
//   student.phonenumber = document.getElementById("phonenumber").value;
//   //   student.subjects = result;

//   console.log(student);
//   studentsList.push(student);

//   let root = document.getElementById("root");
//   root.innerHTML = "";

//   // DOM Manupilation

//   let heading = document.getElementsByTagName("h1")[0];
//   heading.addEventListener("mouseover", function () {
//     heading.style.background = "red";
//   });

//   studentsList.forEach((stud) => {
//     let divElement = document.createElement("div");
//     divElement.classList.add("student");
//     divElement.innerHTML =
//       '<ul onmouseover = "handMouseOver(this)" onmouseout="handMouseOut(this)"><li>Name: ' +
//       stud.name +
//       "</li> <li>Roll No: " +
//       stud.rollNo +
//       "</li><li>Address: " +
//       stud.address +
//       "</li><li>Phone Number: " +
//       stud.phonenumber +
//       "</li></ul>";

//     root.appendChild(divElement);

//     //   retrieve Checkboxs information
//     //   var selectsubjects = document.getElementById("selectsubjects"); // getting the parent container of all the checkbox inputs
//     //   var checkBoxes = itemForm.querySelectorAll('input[type="checkbox"]'); // get all the check box
//     //   document.getElementById("submit").addEventListener("click", getData); //add a click event to the save button
//     //   let result = [];
//     //   function getData() {
//     //     // this function will get called when the save button is clicked
//     //     result = [];
//     //     checkBoxes.forEach((item) => {
//     //       // loop all the checkbox item
//     //       if (item.checked) {
//     //         //if the check box is checked
//     //         let data = {
//     //           // create an object
//     //           item: item.value,
//     //           selected: item.checked,
//     //         };
//     //         result.push(data); //stored the objects to result array
//     //       }
//     //     });
//     //   }

//     // End data retrieve
//   });
// }

// function handleInput(element, event) {
//   // console.log('value = ', event.target.value);
// }

// function handMouseOver(element) {
//   element.classList.add("play-hover");
// }

// function handMouseOut(element) {
//   element.classList.remove("play-hover");
// }

