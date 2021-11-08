let namefield = document.getElementById("namefield");
let username = document.getElementById("username");
let mbno = document.getElementById("mbno");
let email = document.getElementById("email");
let password= document.getElementById("password");
let confirmpassword = document.getElementById("confirmpassword");
let error = document.getElementById("error");

// console.log(/^([0-9]{9})$/.test("0123456789"));
console.log("style.js")
function validate(){
    console.log("inside");

    // let mbno_regex = /^([0-9]{10})$/
    let mbno_regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (mbno_regex.test(mbno.value)){
        console.log(mbno_regex.test(mbno));
        error.innerHTML = "valid";
        error.style.color = "green";       
        return true;
    }
    else{
        console.log(mbno_regex.test(mbno.value));
        error.innerHTML = "invalid ph no";
        rror.style.color = "red";
        return false;
    }
    
}