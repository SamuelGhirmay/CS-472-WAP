/**
 * ES6 Class
 * person.js   
 */
"use strict"

export class Person{
    constructor(name,dateOfBirth){
        this.name=name;
    this.dateOfBirth=dateOfBirth;
    }
    
    getName(){
        return this.name;
    }
    setName(newName){
        this.name=newName;
    }
    getDateOfBirth(){
        return this.dateOfBirth;
    }
    setDateOfBirth(birthDate){
        this.dateOfBirth=birthDate;
    }
    toString(){
     return `{Name: ${this.name}, DateOfBirth:${this.dateOfBirth.getFullYear()}-${this.dateOfBirth.getMonth()}-${this.dateOfBirth.getDate()}}`;
        };
}