// HANDLE THE LOAD EVENT OF THE WINDOW
window.addEventListener("load", init);
function init(){
    "use strict";
// SET WIDTH AND HEIGHT VARIABLES TO 800 x 700

    let width = 800;
    let height = 700;


// RESIZE THE POPUP TO THE SET WIDTH AND HEIGHT

    window.resizeTo(width, height);


// MOVE THE POPUP TO THE MIDDLE OF THE SCREEN

    window.moveTo(((window.screen.width - width) / 2), ((window.screen.height - height) / 2));
    

// CREATE A HELPER FUNCTION TO RETRIEVE THE HTML ELEMENTS FROM THE DOM

    const $ = (id) => document.getElementById(id);


// HANDLE THE CANCEL BUTTON. WHEN THE USER CLICKS THIS BUTTON, CLOSE THE WINDOW

    let cancelBtn = $('cancel');
    cancelBtn.addEventListener('click', function () {
        window.close();
    });



// HANDLE THE SUBMISSION OF THE FORM AND THEN IMMEDIATELY PREVENT THE SUBMISSION

// CREATE 5 VARIABLES FOR ID, NAME, EXT, EMAIL, AND DEPT

// SET THOSE VARIABLES TO WHATEVER THE USER ENTERS INTO THE FORM ELEMENTS

    let idEmployee = $('id');
    let fullName = $('name');
    let digExt = $('extension');
    let email = $('email');
    let department = $('department');
    let subEmpForm  = $('submit'); 

    subEmpForm.addEventListener('click', (event) => {
        event.preventDefault();  
        idEmployee = idEmployee.value;
        fullName = fullName.value;
        digExt = digExt.value;
        email = email.value;
        department = department.value;
        
// GET THE LOGINDETAILS OUTPUT ELEMENT FROM THE PARENT PAGE

let parentoutput = window.opener.document.getElementById('loginDetails');


// SET THE TEXT OF THE LOGINDETAILS ELEMENT TO THE ABOVE SET VARIABLES

// CLOSE THE POPUP

// THE DATA SHOULD SHOW ON THE INDEX.HTML PAGE

parentoutput.innerText = `8-Digit Employee ID: ${idEmployee} \n Full Name: ${fullName} \n 4-Digit Extension: ${digExt} \n Email: ${email} \n Department: ${department} \n`
window.close();
});
}