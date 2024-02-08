document.body.style.backgroundColor = "lightblue";
document.body.style.color = "darkred";

const GreatZoteLoremIpsum = "Do pe churo namen o manta dublem. Bis manama bobles. Bis bobles bera. Bera! Aklaba! Aklaba bubtis. Emen ba depra da bapne nada. Lok dis. Ba! Puroktis, eh? Manta wanta wanta chokta ba na zur, wunto arewa bis na challa. Oto vi chur onomen ob wanta manta doblem. Emen ba tempra papa nada oktis. Munta arewa bis na challa. "
const inputBoxes = []
inputBoxes[0] = document.getElementById("input01");
inputBoxes[1] = document.getElementById("input02");
radialInput = document.getElementsByName("eee?ooo")

/*
Bloque de creación de texto dinámico
*/

let textBoxes = []
textBoxes[0] = document.createElement("textBoxInput01")
document.body.appendChild(textBoxes[0]);
textBoxes[0].id = "box01"
textBoxes[0].innerHTML = GreatZoteLoremIpsum.substring(0,60)

textBoxes[1] = document.createElement("textBoxInput02")
document.body.appendChild(textBoxes[1]);
textBoxes[1].id = "box02"
textBoxes[1].innerHTML = GreatZoteLoremIpsum.substring(60,130)

textBoxes[2] = document.createElement("textBoxInputooo")
document.body.appendChild(textBoxes[2]);
textBoxes[2].id = "boxoooandeee"
textBoxes[2].innerHTML = GreatZoteLoremIpsum.substring(130,270)


for (let i = 0; i < radialInput.length; i++) {
    radialInput[i].addEventListener("mousemove",(e) => mouseEntersInputBox(2, e))
    radialInput[i].addEventListener("mouseleave", (e) => mouseLeavesTheInput(2, e))
}

for (let i = 0; i < inputBoxes.length; i++) {
    inputBoxes[i].addEventListener("mousemove", (e) => mouseEntersInputBox(i, e))
    inputBoxes[i].addEventListener("mouseleave", (e) => mouseLeavesTheInput(i, e))
};

function mouseEntersInputBox(i, e) {
        console.log(i)
        textBoxes[i].style.visibility = "visible"
        var x = e.clientX,
            y = e.clientY;

        textBoxes[i].style.left = x + 10 + "px"
        textBoxes[i].style.top = y + 10 + "px";
}
    
function mouseLeavesTheInput(i, e) {

    textBoxes[i].style.visibility = "hidden"
}

/*
Fin bloque textbox dinámica
*/

/*
Bloque formulario
*/

const miFormulario = document.forms[0];

let textOutput = miFormulario.elements
console.log(textOutput)
console.log(textOutput[0].value)

//This is kinda bad code

function showInfoFromFormAsAlert() {

    let infoFromInputs = ""
    infoFromInputs += returnStringWithInfo(0) + "\n";
    infoFromInputs += returnStringWithInfo(1) + "\n";  
    infoFromInputs += whichRadioIsSelected(2) + "\n";
    infoFromInputs += whichRadioIsSelected(3) + "\n"; 

    if (radialInput[0].checked == false && radialInput[1].checked == false) {
        infoFromInputs += "No has seleccionado eee u ooo"
    }  

    window.alert(infoFromInputs)
}

function returnStringWithInfo(i) {
    return textOutput[i].value == "" ?
        "No has metido texto en " + miFormulario[i].placeholder :
        miFormulario[i].placeholder + ": " + miFormulario[i].value
}

function whichRadioIsSelected(i) {

    return textOutput[i].checked == true ? "Has seleccionado " + textOutput[i].value : "" 

}