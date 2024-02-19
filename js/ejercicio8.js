document.body.style.backgroundColor = "lightblue";
document.body.style.color = "darkred";

let form = document.forms[0];

console.log(form[0].value)

function validate() {
    if (form[0].value === "") {
        console.log("idiot")
        return false;
    }
}