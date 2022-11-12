
const form = document.getElementById("form");
const personalAccount = document.getElementById("personalAccount");
const corporateAccount = document.getElementById("corporateAccount");
const fullName = document.getElementById("fullName");
const address = document.getElementById("address");
const accountNumber = document.getElementById("accountNumber");
const typeOfAccount = document.getElementById("typeOfAccount");


const ele = document.getElementsByTagName('input');

// const radioSelected = function () {

//     for (i = 0; i < ele.length; i++) {

//         if (ele[i].type === "radio") {

//             if (ele[i].checked)
//                 return ele[i];
//         }
//     }
// }();

form.onsubmit = function (event) {
    event.preventDefault();
    alert(`
    Personal Account:${personalAccount.value}
    Corporate Account : ${corporateAccount.value}
    Full Name : ${fullName.value}
    Address : ${address.value}
    Account Number : ${accountNumber.value}
    Type Of Account : ${typeOfAccount.value}
    `);

    form.reset();
}