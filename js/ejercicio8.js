
let pForm = document.getElementById("form01");

console.log(pForm)

function backToWhite(elem) {
    elem.addEventListener("mouseover", function (e) { this.style.backgroundColor = "white" });
}


function validate() {

    var pFormName = pForm[0];
    var pFormApellido = pForm[1];
    var pFormEdad = pForm[2];
    var pFormEmail = pForm[3];
    var edad = Number.parseInt(pFormEdad.value);
    var email = validEmail(pFormEmail.value);
    var earlyExit = false;


    backToWhite(pFormEdad);
    backToWhite(pFormName);
    backToWhite(pFormEmail);

    if (!pFormName.value) {
        pFormName.style.backgroundColor = "pink"
        earlyExit = true
    }

    if (!email) {
        pFormEmail.style.backgroundColor = "pink"
        earlyExit = true
    }
    if (!edad || edad <= 0 || !Number.isInteger(edad)) {
        pFormEdad.style.backgroundColor = "pink"
        earlyExit = true
    } 

    if (earlyExit) {
        return false
    }

    console.log(email)
    return true;
}

function validEmail(m) {
    return m.match(/^\S+@\S+\.\S+$/);

}