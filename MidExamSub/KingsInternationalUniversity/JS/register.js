/* Patient js*/
"use strict"

const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const middleName = document.getElementById("middleName");
const lastName = document.getElementById("lastName");
const address = document.getElementById("address");
const personalBio = document.getElementById("personalBio");
const applicantId = document.getElementById("applicant");
const course = document.getElementById("course");
 const radioBtn = form.elements["level"];


form.onsubmit = function (event) {
    event.preventDefault();

    alert(`
    Level Of Study: ${radioBtn.value}
    Applicants full Name:${firstName.value} ${middleName.value} ${lastName.value}
    Address:${address.value}
    Applicants Id Number :${applicantId.value}
    Course: ${course.value}

  
    `)

    radioBtn.value="";
    patientId.value="";
     firstName.value="";
     middleName.value="";
     lastName.value="";
     address.value="";
     applicantId.value="";
     course.value="";

   

}