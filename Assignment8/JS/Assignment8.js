"use strict"


//6 module pattern
const count=(function () {
let counter=0;
function add() {
    return counter+=1
    
}
function reset() {
    counter=0;
}
return{
    counter:counter,
    add:add,
    reset:reset,
}
    
})();

console.log(count.add());



//6 object literal

const count2={
    counter:0,
    add:function(){
        this.counter+=1;
    },
    reset:function(){
        this.counter=0;
    },
};
count2.add();
count2.add();
count2.reset();
count2.add();
count2.add();
console.log(count2.counter)




//7 
 // counter is the free variable
// Free variable is a variable used in a function that are neither local variables nor parameters of that function

//8

var make_adder=(function (inc) {
    var counter=0;

    return function () {
        return(counter+=inc);
        
    };
    
});
let addt=make_adder(3);
addt();
console.log(addt());
let adds=make_adder(4);
adds();
adds();
console.log(adds());

 //9

// before ES6 one way of clearing the global by using IIFE same like the function below
// (function () {
//     let counter=0;
//     function add() {
//         return counter+=1
        
//     }
//     function reset() {
//         counter=0;
//     }
//     return{
//         counter:counter,
//         add:add,
//         reset:reset,
//     }
        
//     })();

// //9 After ES6
//        {
//  by puting all our varaiables and functions inside  curly brackets or braces 
//        }




//10

const Employee=(function () {
    let name="";
    let age=0;
    let salary=0;


    function setAge(newAge) {
        age=newAge;
    }
    function setSalary(newSalary) {
            salary=newSalary; 
    }
    function setName(newName) {
            name=newName;
    }
    function getAge() {
        return age;
    }
    function getSalary() {
        return salary;
    }
    function getName() {
        return name;
        
    }
    function increaseSalary(percentage) {
        const addedSalary=(getSalary()*percentage)/100;
        salary+=addedSalary;
    }
    function incrementAge() {
        setAge(getAge()+1);
    }
    return {
    setAge:setAge,
    getAge:getAge,   //inorder to check
    setSalary:setSalary,
    setName:setName,
    increaseSalary:increaseSalary,
    incrementAge:incrementAge,
    }
})();
Employee.setAge(25);
// Employee.incrementAge();
console.log(Employee.getAge());




// //11



Employee.address={
    street:"",
    city:"",
    state:"",
    zip:"",
};

Employee.setAddress=function (street,city,state,zip) {
    this.address={
        street:street,
        city:city,
        state:state,
        zip:zip,

    }
}

Employee.getAddress=function () {
    return this.address;
    
}

Employee.setAddress('1000 4th st','FairField','IA',"52557");
console.log(Employee.getAddress());

 
// // borow
// const Employee2={
//     name:"test",
//     age:"23",
//     address:undefined,
// };

// Employee,setAddress.call(Employee2,"13Mai","FairFiel","Iowa","2423456");

// console.log(Employee2.address());