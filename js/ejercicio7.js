document.body.style.backgroundColor = "lightblue";
document.body.style.color = "darkred";
const GreatZoteLoremIpsum = "Do pe churo namen o manta dublem. Bis manama bobles. Bis bobles bera. Bera! Aklaba! Aklaba bubtis. Emen ba depra da bapne nada. Lok dis. Ba! Puroktis, eh? Manta wanta wanta chokta ba na zur, wunto arewa bis na challa. Oto vi chur onomen ob wanta manta doblem. Emen ba tempra papa nada oktis. Munta arewa bis na challa. "


const textTest = document.createElement("textTest")
textTest.innerHTML += "aawwagggAGA";
document.body.appendChild(textTest)

input01 = document.getElementById("input01")
input02 = document.getElementById("input02")
inputeee = document.getElementById("inputeee")
inputooo = document.getElementById("inputooo")

textTest.style.position = "fixed"

const textBoxForInput01 = document.createElement("textBoxInput01")
document.body.appendChild(textBoxForInput01);
textBoxForInput01.id = "box01"
textBoxForInput01.innerHTML = GreatZoteLoremIpsum.substring(0,60)

const textBoxForInput02 = document.createElement("textBoxInput02")
document.body.appendChild(textBoxForInput02);
textBoxForInput02.id = "box02"
textBoxForInput02.innerHTML = GreatZoteLoremIpsum.substring(60,130)

const textBoxForInputoooandeee = document.createElement("textBoxInputooo")
document.body.appendChild(textBoxForInputoooandeee);
textBoxForInputoooandeee.id = "boxoooandeee"
textBoxForInputoooandeee.innerHTML = GreatZoteLoremIpsum.substring(130,170)


input01.onmouseleave = function (e) {textBoxForInput01.style.visibility="hidden"}


//TODO: this 
input01.onmousemove = test(module, e);

function test (name, e) {

    name.innerHTML = 
    name.style.visibility="visible"
    var x = e.clientX,
        y = e.clientY;
    
    name.style.left = x+10+"px"
    name.style.top = y+10+"px";
}