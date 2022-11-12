/* Patient js*/
"use strict"

const form = document.getElementById("form");
const patientId = document.getElementById("patientId");
const firstName = document.getElementById("firstName");
const middleIntial = document.getElementById("middleInitial");
const lastName = document.getElementById("lastName");
const dateOfBirth = document.getElementById("dateOfBirth");
const department = document.getElementById("department");
const radioBtn = form.elements["outPatient"];


form.onsubmit = function (event) {
    event.preventDefault();

    alert(`
    Patient Id Number: ${patientId.value}
    First Name:${firstName.value}
    Middle Initial(S):${middleIntial.value}
    Last Name :${lastName.value}
    Date of birth: ${dateOfBirth.value}
    Department : ${department.value}
    Is out Patient:${radioBtn.value}
    `
    );

  form.reset(); 
   

}


