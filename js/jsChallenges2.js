// by altering html

// function challenge1() {
//   // let num = prompt("Enter a number");
//   if (document.getElementById("subscribe").checked == true) {
//     console.log("this works");
//     // document.querySelector("#emailDiv").style.display = "initial";
//     document.querySelector("#emailDiv").style.display = "block";
//   } else {
//     document.querySelector("#emailDiv").style.display = "none";
//   }
// }

// function challenge2(element) {
// if (element.checked) {
//   console.log("this works 2");
//   let billingAddress = document.getElementById("bill").value;
//   document.getElementById("home").value = billingAddress;
//   document.getElementById("home").disabled = true;
// } else {
//   document.getElementById("home").disabled = false;
//   document.getElementById("home").value = "";
// }
// }

// by adding event listeners

// let varCheckbox = document.getElementById("subscribe");

// varCheckbox.addEventListener("click", function () {
//   if (varCheckbox.checked) {
//     document.querySelector("#emailDiv").style.display = "block";
//   } else {
//     document.querySelector("#emailDiv").style.display = "none";
//   }
// }); // in-line function

// or

// document.getElementById("subscribe").addEventListener("click", challenge1); // separately defined function
