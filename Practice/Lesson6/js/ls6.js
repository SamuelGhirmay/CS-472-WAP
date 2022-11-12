
    const form=document.getElementById("form");
    const emailField=document.getElementById("email");
    const passwordField=document.getElementById("password");
   
    form.onsubmit=function () {
      alert(`
      email Address: ${emailField.value}
      password is: ${passwordField.value}
      `
      );    
    }

    form.onsubmit=function(){
        const output=document.getElementById("outputs");

        // Event.defaultPrevented()

        output.innerHTML=  `
        email Address: ${emailField.value}
        password is: ${passwordField.value}
        `

    }

  
    


