// color of the day: Coral

// Challenge 1

// let varCheckbox = document.getElementById("subscribe");

// varCheckbox.addEventListener("click", function () {
//   if (varCheckbox.checked) {
//     document.querySelector("#emailDiv").style.display = "block";
//   } else {
//     document.querySelector("#emailDiv").style.display = "none";
//   }
// });

// Challenge 2
// let varCheckbox2 = document.getElementById("sameAddress");

// varCheckbox2.addEventListener("click", function () {
//   if (varCheckbox2.checked) {
//     console.log("c2");
//     let billingAddress = document.getElementById("bill").value;
//     document.getElementById("home").value = billingAddress;
//     document.getElementById("home").disabled = true;
//   } else {
//     document.getElementById("home").disabled = false;
//     document.getElementById("home").value = "";
//   }
// });

// Challenge 3
let standingSelected = document.getElementsByName("standing");
let gradDateSelected = document.getElementsByName("gradDate");
console.log(standingSelected);
console.log(gradDateSelected);

let radioButton1 = document.getElementsByName("standing");
let radioButton2 = document.getElementsByName("gradDate");

let radioForm = document.getElementById("ch3form");

radioForm.addEventListener("submit", function () {
  let firstChecked = false;
  let secondChecked = false;
  for (let i = 0; i < radioButton1.length; i++) {
    if (radioButton1[i].checked) {
      firstChecked = true;
      break;
    }
  }
  for (let i = 0; i < radioButton2.length; i++) {
    if (radioButton2[i].checked) {
      secondChecked = true;
      break;
    }
  }
  if (firstChecked && secondChecked) {
    console.log("both checked");
  } else {
    alert(
      "Please select BOTH current class standing and anticipated graduation date"
    );
  }
});
