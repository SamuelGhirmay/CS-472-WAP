/**
 * main.js
 */
"use strict"

import { Employee } from "./model/employee.js";
import { Person } from "./model/person.js";

const person=[new Person("Anna Smith",new Date(1998,11,15)),
new Person("Bob Jone",new Date(1945,10,16)),
new Person("Carlos Slim Helu", new Date(1976,8,24)),

];

for(const p of person){
console.log(p.toString());
}
    

const jim=new Employee(
    "Jim Hason",
    new Date(1998,10,12),
    245990.0
);

jim.doJob("Software")

 