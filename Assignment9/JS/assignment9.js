/*
Assignment 9
*/
"use strict"

//1a and b

const person={
    name:"",
    dateOfBirth:"",
    getName:function(){
        return this.name;
    },
    setName:function(newName){
        this.name=newName;
    },

}

const john=Object.create(person,{
    name:{
        value:"John",
    },
    dateOfBirth:{
        value:"1998-12-10"
    }
})

console.log(
    `"The Person's name is ${john.name}"
"${john.name} was born on ${john.dateOfBirth}"`);

//2

const employee=Object.create(person,{
    salary:{
        value:0,
    },
    hireDate:{
        value:new Date(),

    },
});

employee.doJob=function(jobtitle){
    console.log(`${this.name} is a ${jobtitle} who ears $${this.salary}`);
}
const emp1=Object.create(employee,{
    name:{value:"Anna"},
    salary:{value:249995.50},
});
emp1.doJob("Programer");


//3
function Person(name,dateOfBirth){
this.name=name;
this.dateOfBirth=dateOfBirth;
this.setName=function(name){
    this.name=name;
    }
this.getName=function(){
    return this.name;
}
this.toString=function(){
    console.log(`{Name:${this.name}, DateOfBirth: ${this.dateOfBirth}}`);
}
};

const sam=new Person("John","1985-10-10");
sam.toString();







