/**
 * patient.js
 */
"use strict";

export class Patient{
    constructor(patientId,firstName,middleInitial,lastName,dateOfBirth,department,isOutPatient){
        this.patientId=patientId;
        this.firstName=firstName;
        this.middleInitial=middleInitial;
        this.lastName=lastName;
        this.dateOfBirth=dateOfBirth;
        this.department=department;
        this.isOutPatien=isOutPatient;
    }
    toString(){
        return`Patient Id Number:${this.patientId}
        First Name: ${this.firstName}
        Middle Initial: ${this.middleInitial}
        Last Name : ${this.lastName}
        Date Of Birth: ${this.dateOfBirth}
        Department : ${this.department}
        Out Patient: ${this.isOutPatien}
        `}
}