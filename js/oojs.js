'use strict';

// Modulos

// Encapsulamiento

var helloSekai = (function() { 
  //Privado
  var hola = 'Hello';
  var mundo = 'World';
 
  var suma = function(param1, param2) {
    return param1 + param2;
  };
 
  //Publico
  return {
    miMensaje: function() {
      return hola + ' ' + mundo;
    }
  }
})();

console.log( helloSekai.miMensaje() );
console.log( helloSekai.suma( 10, 5 ) );

// Clase
function Person() { }

function Person(firstName, gender) {
  this.firstName = firstName;
  this.gender = gender;
}

var person1 = new Person('Bob', 'Male');

Person.prototype.sayHello = function() {
  console.log("Hello, I'm " + this.firstName);
};

// logs "Hello, I'm Bob"
person1.sayHello();

// logs "Hello, I'm Alice"
person2.sayHello();

class Person {
  constructor(firstName, gender) {
    this.firstName = firstName;
    this.gender = gender;
  }
}

Person.prototype.sayHello = function() {
  console.log("Hello, I'm " + this.firstName);
};


// Herencia
class Person {
  constructor(firstName, gender) {
    this._name = firstName;
    this._gender = gender;
  }
}

const ana = new Person("Ana", "Women");
const juan = new Person("Juan", "Male");

Person.prototype.showInfo = function() {
  return `I'm ${this._name}.`;
};

juan.showInfo();
ana.showInfo();

class Employee extends Person {
  constructor(firstName, gender, age) {
    super(firstName, gender);
    this._age = age;
  }

  talk() {
    return `Hey!`;
  }
}

const daniel = new Employee("Daniel", "Male", 25);

daniel.talk();
daniel.showInfo();

Employee.prototype.showInfo = function() {
    return `I'm a ${this._gender} named ${this._name}, aged ${this._age}.`;
};

daniel.showInfo();

// Polimorfismo
class Animal {
  talk() {
    console.log("?");
  }
}

class Bird extends Animal {
  talk() {
    console.log("tweet tweet");
  }
  fly() {
    console.log("flap flap");
  }
}

class Parrot extends Bird {
  talk() {
    console.log("polly want a cracker");
  }
}

var animal1 = new Animal();
var canario = new Bird();
var periquito = new Parrot();

animal1.talk(); /// ?
canario.talk();  /// tweet tweet
canario.fly();   /// flap flap
periquito.talk();  /// polly want a cracker
periquito.fly();   /// flap flap

