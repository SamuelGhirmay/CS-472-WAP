/**
 * patients.js
 */
"use strict"
const form = document.forms[0];
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const middleInitial = document.getElementById("middleInitial");
const birthDate = document.getElementById("birthDate");
const department = document.getElementById("department");
const isOutPatient = form.elements["outPatient"];
const patientId = document.getElementById("patientId");

form.onsubmit = function (event) {
    event.preventDefault();
    alert(`
    Patient ID: ${patientId.value}
    First Name: ${firstName.value}
    Middle Initial: ${middleInitial.value}
    Last Name: ${lastName.value}
    Date of Birth: ${birthDate.value}
    Department: ${department.value}
    Out-patient: ${isOutPatient.value}
    
    
    `)
    firstName.value = "";
    lastName.value = "";
    middleInitial.value = "";
    birthDate.value = "";
    department.value = "";
    patientId.value = "";
    isOutPatient.value = "";

}