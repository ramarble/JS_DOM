
let storedFormInfo = [];
let storedFormInfoTheSecond = [];
let form = document.getElementById("form")
let formChildren = form.children
function stuffs() {
    storedFormInfo.push({});
    for (let index = 0; index < formChildren.length; index++) {
        eval("storedFormInfo[" + (storedFormInfo.length-1) + "]." + formChildren[index].id + 
            " = formChildren.item("+ index + ").value") 
    }
    console.log(storedFormInfo[storedFormInfo.length-1])
}

let defaultObj = {nombre: null, apellido: null, apellido2: null, email: null, telefono: null, nomPerfil: null}

function stuffsthesecond() {
    var buffer = defaultObj;
    buffer.nombre = formChildren.item(0).value;
    buffer.apellido = formChildren.item(1).value;
    buffer.apellido2 = formChildren.item(2).value;
    buffer.email = formChildren.item(3).value;
    buffer.telefono = formChildren.item(4).value;
    buffer.nomPerfil = formChildren.item(5).value;
    storedFormInfoTheSecond.push(buffer);
    console.log(storedFormInfoTheSecond)
}

function save() {
    //stuffs()
    stuffsthesecond()

}

function reset() {
    form.reset();
}

function load() {
//mumeidead
    
}