
// const form = document.getElementsByTagName("form");
// const buildingNo = document.getElementById("buildingNo");
// const floorNumber = document.getElementById("floorNo");
// const apartmentNo = document.getElementById("apartmentNo");
// const title = document.getElementById("title");
// const fullName = document.getElementById("fullNames");
// const phoneNo = document.getElementById("phoneNo");
// const emailAddress = document.getElementById("email");
// const driverLicence = document.getElementById("driversLicenceNo");

// form[0].onsubmit = function (event) {
//         event.preventDefault();
//         alert(`
//     Tenant Registration Date:
//     Building No:${buildingNo.value}
//     Floor No:${floorNumber.value}
//     Apartment No:${apartmentNo.value}
//     Tenant Information:
//     Title:${title.value}
//     Full Name : ${fullName.value}
//     Phone No:${phoneNo.value}
//     Email:${emailAddress.value}
//     Driver Licence No:${driverLicence.value}
//     `)
//         form.reset();
// }


window.onload = function () {
        const tenantRegForm = document.getElementById("tenantRegForm")
        tenantRegForm.addEventListener("submit", () => {
                const buildingNo = document.getElementById("buildingNo");
                const floorNumber = document.getElementById("floorNo");
                const apartmentNo = document.getElementById("apartmentNo");
                const title = document.getElementById("title");
                const fullName = document.getElementById("fullNames");
                const phoneNo = document.getElementById("phoneNo");
                const emailAddress = document.getElementById("email");
                const driverLicence = document.getElementById("driversLicenceNo");



                const strBuildingNo = buildingNo.value;
                const strfloorNumber = floorNumber.value;
                const strapartmentNo = apartmentNo.value;
                const strtitle = title.value;
                const strfullName = fullName.value;
                const strphoneNo = phoneNo.value;
                const stremailAddress = emailAddress.value;
                const strdriverLicence = driverLicence.value;


                const output = `
                Tenant Registration Date:
                Building No:${buildingNo.value}
                Floor No:${floorNumber.value}
                Apartment No:${apartmentNo.value}
                Tenant Information:
                Title:${title.value}
                Full Name : ${fullName.value}
                Phone No:${phoneNo.value}
                Email:${emailAddress.value}
                Driver Licence No:${driverLicence.value}
                `;

                alert(output);
                //clear the form field
                buildingNo = "";
                floorNumber = "";
                apartmentNo = "";
                title = "";
                fullName = "";
                phoneNo = "";
                emailAddress = "";
                driverLicence = "";

        });

};

