/**
 * patientF.js
 */

"use patientF"

import { Patient } from "./model/patient";

(function () {

    const patients=initiateArray();

  const $form=$("form");
  const $patientId = $("#patientIdNumber");
  const $firstName = $("#firstName");
  const $middleInitials = $("#middleInitials");
  const $lastName = $("#lastName");
  const $dateOfBirth = $("#dateOfBirth");
  const $department = $("#ddlDepartment");
  const $tableBody = $("#tbodyPatientsList");
  const $outpatient = $("input[name='radioIsOutPatient']");
  const $showOutPatient = $("#chkShowOutPatients");
  const $showElderlyPatients = $("#chkElderlyPatients");


  window.addEventListener("DOMContentLoaded",);

  $form.on("submit",function (evet) {
    evet.preventDefault();

    patients.push(new Patient(
        $patientId.val(),
        $firstName.val(),
        $middleInitials.val(),
        $lastName.val(),
        new Date($dateOfBirth.val()),
        $department.val(),
        $outpatient.filter(":checked").val(),
        ));
    
  })

  function populatedTable() {
    const filteredPatients=patients
    .filter(p=>{
        if($showOutPatient.is(":checked")){
            return p.isOutPatient === "Yes";
        }else{
            return true;
        }     
    })
    .filter(p=>{
        const current=new Date().getFullYear();
        if($showElderlyPatients.is(":checked")){
            return current-p.$dateOfBirth.getFullYear()>=65;
        }else{
            return true;
        }
    });   
    
    
    filteredPatients.forEach(p=>{   
    const $trow=$("<tr>")
    .append("<td>",{text:p.patientId,})
    .append("<td>",{text:p.firstName,})
    .append("<td>",{text:p.middleInitial,})
    .append("<td>",{text:p.lastName,})
    .append("<td>",{text:p.dateOfBirth,})
    .append("<td>",{text:p.department,})
    .append("<td>",{text:p.isOutPatient,});

    $tableBody.append($trow);

})
  }




  function initiateArray() {
    const patient1 = new Patient(
      "EP-001-000001",
      "Ana",
      "J",
      "Smith",
      new Date(1945, 0, 5),
      "Ear, Nose and Throat",
      "No"
    );
    const patient2 = new Patient(
      "EP-001-000002",
      "Bob",
      "K",
      "Jones",
      new Date(1985, 4, 4),
      "Cardiology",
      "Yes"
    );
    const patient3 = new Patient(
      "EP-001-000003",
      "Carlos",
      "A",
      "Hernandez",
      new Date(1957, 2, 13),
      "Cardiology",
      "Yes"
    );
    return [patient1, patient2, patient3];
  }

  
  




})();

