// HANDLE THE LOAD EVENT OF THE WINDOW

window.addEventListener("load", int);
function int(){


// HANDLE THE CLICK EVENT FOR THE BTNADDEMPLOYEE BUTTON

let btnAddEmp = window.document.getElementById("btnAddEmployee");



// OPEN THE ADD-EMPLOYEE.HTML PAGE WITHIN A POPUP

btnAddEmp.addEventListener('click', function () {
    "use strict";
    window.open("add-employee.html","addEmpForm","resizable=yes" );
});
}
