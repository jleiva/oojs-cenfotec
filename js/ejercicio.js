// 1. Con base en la funcion C, cual es el resultado de 
// ejecutar el siguiente codigo console.log(typeof new C());
function C() {
 this.a = 1;
 return false;
}

// Resolucion #1: object

// 2. Crear una variable, asignar un objeto que contenga una propiedad tipo string,
// una tipo numero y una con un array. Decida usted el nombre de las propiedades

// Resolucion #2: var myObj = {
//  nombre: 'Jose',
//  edad: 36,
//  gustos: []
// }


// 3. A la clase Person, ejemplo que se uso en la presentacion, 
// agregarle el siguiente metodo farewell, el cual imprime en la consola el 
// nombre de la persona y concatene el mensaje "has left the building. Bye for now!"

class Person {
  constructor(firstName, gender) {
    this._name = firstName;
    this._gender = gender;
  }
}

// Resolucion #3
// Person.prototype.farewell = function() {
//   console.log(this._name + ' has left the building. Bye for now!');
// };
