const voterNo = document.getElementById("voterNo");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const studyLevel = document.getElementById("levelOfStudy");
const form = document.getElementsByTagName("form");

form[0].onsubmit = function (event) {
    event.preventDefault()
    const message = document.getElementById("message2");
    alert(`
    Voter Number: ${voterNo.value}
    First Name: ${firstName.value}
    Last Name: ${lastName.value}
    Level of Study: ${studyLevel.value} 
    `);
        
    // message.innerHTML = `
    // Voter Number: ${voterNo.value}
    // First Name: ${firstName.value}
    // Last Name: ${lastName.value}
    // Level of Study: ${studyLevel.value} 
    
    // `;
}