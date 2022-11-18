/**
 * employee.js
 */

"use strict"

import {Person} from "./person.js"

export class Employee extends Person{
    constructor(name,dateOfBirth,salary){
        super(name,dateOfBirth);
        this.salary=salary;
        this.hireDate=new Date();
    }

    doJob(jobTItle){
        console.log(`${this.name} is a ${jobTItle} who earns $${this.salary.toLocaleString(undefined,
            {minimumFractionDigits:2,
            maximumFractionDigits:2,})}`);
    }

}