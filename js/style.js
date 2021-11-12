let namefield = document.getElementById("namefield");
let username = document.getElementById("username");
let mbno = document.getElementById("mbno");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmpassword = document.getElementById("confirmpassword");
let error = document.getElementById("error");
let password_text = document.getElementById("password_text");

console.log((/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[#$%@*!`~^&+=])(?=\S+$).{8,}$/).test('123s#RANYA@'));
console.log("style.js");
let numbercase = /^[0-9]+$/
let lowercase = /^([a-z]+)$/;
let uppercase = /^[A-Z]+$/;


function validate() {
    console.log("inside");
    let mbno_regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let password_regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[#$%@*!`~^&+=])(?=\S+$).{8,}$/;

    if (mbno_regex.test(mbno.value) && password.value == confirmpassword.value && password_regex.test(password.value)) {
        error.innerHTML = "valid";
        error.style.color = "green";
        return true;
    }

    else if (password_regex.test(password.value) == false) {
        password.style.background = "red";
        return false;
    }

    else if (mbno_regex.test(mbno.value) == false) {
        mbno.style.background = "red";
        return false;
    }

}


function trigger() {
    if(numbercase.test(password.value) || lowercase.test(password.value) || uppercase.test(password.value)){
        console.log(trigger)
        password.style.backgroundColor = "red";
    }
    else if(numbercase.test(password.value) && lowercase.test(password.value)){
        password_text.style.color = "green";
    }
   
   



}