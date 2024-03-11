var jsonObj = '{"Nombre": "John", "Apellido": "Smith", "Edad": "22", "Dirección": {"Calle": "Gran vía 22","Ciudad": "Nueva York","Estado": {"CodigoPostal": 10021,"Nombre": "NY"}},"Telefono": [{"Tipo": "Casa", "Numero": "212 555-1234"},{"Tipo": "Fax","Numero": "646 555-4567"}]}';

var actual = {"Nombre": "John", "Apellido": "Smith", "Edad": "22", "Dirección": {"Calle": "Gran vía 22","Ciudad": "Nueva York","Estado": {"CodigoPostal": 10021,"Nombre": "NY"}},"Telefono": [{"Tipo": "Casa", "Numero": "212 555-1234"},{"Tipo": "Fax","Numero": "646 555-4567"}]};

let obj = JSON.parse(jsonObj);
let showText = document.getElementById("cringe");

showText.innerHTML += actual.Nombre + " " + actual.Apellido + " ";

showText.innerHTML += obj.Nombre + " " + obj.Apellido;

