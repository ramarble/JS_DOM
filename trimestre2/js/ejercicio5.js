const buttonn = document.getElementById("buttonn");
const inputbox = document.getElementById("inputbox")

var fug = document.createElement("div");
document.body.appendChild(fug);

buttonn.onclick = function () {
  fug.innerHTML += inputbox.value + " "
}
