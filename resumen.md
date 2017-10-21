# Introducci&oacute;n a JavaScript Orientado a Objetos

## Contenidos

1. [Programaci&oacute;n Orientada a Objetos](#programacion-orientada-a-objetos) 
1. [Objetos en JavaScript](#objetos-en-javascript)
    1. [Tipos de datos y objetos globales](#tipos-de-datos-y-objetos-globales)
    1. [Global Object](#global-object)
    1. [Object](#object)
    1. [Como crear Objetos](#como-crear-objetos)
    1. [Propiedad constructor](#propiedad-constructor)
    1. [Funciones que retornan Objetos](#funciones-que-retornan-objetos)
    1. [Operador instanceof](#operador-instanceof)
    1. [Elementos, propiedades y m&eacute;todos](#elementos-propiedades-y-metodos)
    1. [Accediendo a las propiedades de un Objeto](#accediendo-a-las-propiedades-de-un-objeto)
    1. [Llamando m&eacute;todos de un Objeto](#llamando-metodos-de-un-objeto)
    1. [Definiendo getters y setters](#definiendo-getters-y-setters)
    1. [Modificando Propiedades/M&eacute;todos](#modificando-propiedadesmetodos)
    1. [Comparando Objetos](#comparando-objetos)
1. [JavaScript Orientado a Objetos](#javascript-orientado-a-objetos)
    1. [Objetos](#objetos)
    1. [Clases en JavaScript](#clases-en-javascript)
    1. [Clases en JavaScript](#clases-en-javascript)

## Programaci&oacute;n Orientada a Objetos

La Programación Orientada a Objetos (OOP) es un paradigma de programación que utiliza la abstracción para crear modelos basados en el mundo real. 

OOP se refiere al uso de piezas autónomas de código para desarrollar aplicaciones. Llamamos a estas piezas autónomas de objetos de código, más conocidos como Clases en la mayoría de los lenguajes de programación OOP y funciones en JavaScript. Usamos los objetos como bloques de construcción para nuestras aplicaciones. Construir aplicaciones con objetos nos permite adoptar algunas técnicas valiosas, a saber, Herencia (los objetos pueden heredar características de otros objetos), Polimorfismo (los objetos pueden compartir la misma interfaz, cómo se accede y se utiliza), mientras que su aplicación subyacente de la interfaz puede diferir) y encapsulación (cada objeto es responsable de tareas específicas).

JavaScript no es un lenguaje OOP a toda regla, como Java o PHP, pero es un lenguaje basado en objetos. Cuando hablamos de Objetos en JavaScript, normalmente nos estamos refiendo al tipo de dato (Object) y no al concepto de OOP.

## Objetos en JavaScript

### Tipos de datos y objetos globales
En JavaScript, existen los siguientes tipos de datos:

* `null`
* `undefined`
* `boolean`
* `number`
* `string`
* `object`
* `symbol` -- (ES6)

Todos, exepto `object`, se conocen como *primitivos*. Las variables no tienen tipos; los valores tienen tipos. Las variables pueden contener cualquier valor, en cualquier momento.

A diferencia de muchos otros lenguajes, JavaScript no soporta clases, pero tiene (built-in) constructores. Los constructores son como las funciones normales, pero las usamos con la palabra reservada "new". Hay dos tipos de constructores: constructores nativos (también incorporados) como `Array` y `Objet`, que están disponibles automáticamente en el entorno de ejecución en *runtime*; y constructores personalizados, que definen propiedades y métodos para su propio tipo de objeto.

Esta serie de built-in / objetos globales (objetos incorporados), tienen funciones y propiedades. El término "objetos globales" no debe confundirse con el objeto global (global object). Los objetos globales se refieren a objetos en el ámbito global. Algunos de los más usados son:

* `String()`
* `Number()`
* `Boolean()`
* `Array()`
* `Object()`
* `Function()`
* `RegExp()`
* `Date()`
* `Error()`
* `Symbol()`

Estas built-in functions, son muy parecidas a las que usamos en Java, y podemos hacer cosas como:

```javascript
var s = new String( "Hello World!" );

console.log( s.toString() ); // "Hello World!"
```

A pesar de lo anterior, es casi universalmente preferido utilizar la forma literal para crear los valores.

### Global Object

Los programas de JavaScript se ejecutan dentro de un host environment (el navegador, para ejemplo), el cual provee un objeto global, y toda variable global se convierte en una propiedad de este objeto global.

Cuando el host enviroment es el navegador, el objeto global se conoce como *window*. Por ejemplo, si declaramos una variable fuera de una función, podemos acceder a esta variable de varias maneras.

```javascript
var a = 1; // variable global

a // retorna 1

window['a'] &oacute; window.a // retorna 1
```

Cuando se define una función constructora y se llama sin el operador *new*, *this* hace referencia al objeto global y todas las propiedades definidas con *this* se convierten en propiedades de *window*.

```javascript
function Hero(value) { 
  this.name = value;
}

var h = Hero('Leonardo');

typeof h // undefined
typeof h.name // Uncaught TypeError: Cannot read property 'name' of undefined (Chrome)

name // "Leonardo"
window.name // "Leonardo"
```

Tener variables globales, como la anterior, se le conoce como contaminar el global namespace, y es un anti patrón en JavaScript. 

### Object

En algunos lenguajes de programación, hay una distinción entre:

* Una matriz normal, también llamada indexada o enumerada (keys son números) y
* Una matriz asociativa, también llamada hash (keys son strings)

JavaScript usa `array` para representar matrices indexadas y `object` (objeto) para representar matrices asociativas. Si necesitamos un hash en JavaScript, debemos usar un `object`.

Un objeto es muy similar a un array, pero con la diferencia de que uno puede definir los keys. No está limitado a usar sólo índices numéricos, sino que, podemos usar keys más amigables como *first_name*, *age*, *curso*, etc.

Un objeto en JavaScript se ve así:

```javascript
var heroe = {
  clase: 'Turtle',
  ocupacion: 'Ninja'
};
```

Del ejemplo anterior se puede ver que:

* El nombre de la variable que contiene al objeto es `heroe`.
* En lugar de usar [] para definir un array, usamos {} para objetos
* Separamos los elementos (llamados propiedades) contenidos en el objeto usando comas (,).
* Los pares de key/value se dividen usando dos puntos (:), `key: value`

`Object` es el padre de todos los objetos en JavaScript, lo que significa que, cada objeto que creamos hereda de &eacute;l.

### Como crear Objetos

Usando el constructor `Object()`

```javascript
var myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;
```

Usando el metodo Object.create()

```javascript
var myCar = Object.create(null);
```

Usando una funcion como constructor

```javascript
var Obj = function(value) {
  this.name = value
}

var c = new Obj("hello"); 
```

Usando la forma literal (recomendada)

```javascript
var myCar = {
  make: 'Ford',
  model: 'Mustang',
  year: 1969
};
```

De todos los ejemplos anteriores, la forma literal es la mas flexible, debido a que, podemos definir las propiedades y sus valores al momento de crear el objeto.

### Propiedad `constructor`

Cuando se crea un objeto, se le asigna una propiedad especial *detrás de escena*: la propiedad *constructor*. Esta propiedad contiene una referencia a la función constructora utilizada para crear este objeto.

Si el objeto se creó utilizando la notación literal de `object`, su constructor es el incorporado en la función constructora `Object()`.

```javascript
function C() {
  this.a = 1;
}

var c = new C();
c.a; // 1
typeof c; // "object"
typeof c.constructor; // "function"

var o = {};
typeof o; // "object"
typeof o.constructor; // "function"
```

### Funciones que retornan Objetos

Además de usar la propiedad constructor y el operador *new* para crear objetos, también podemos usar una función normal y crear objetos sin necesidad de *new*. Por ejemplo, podemos tener una función que realice algun tipo de tarea, y retorna un objeto.

```javascript
function factory(value) {
  return {
    name: value
  };
}

var miObj = factory('one');
miObj.name; // "one"
miObj; // { name: 'one' }
```

Podemos utilizar lo anterior para *ocultar* variables &oacute; m&eacute;todos; de esta manera sólo expondremos lo necesario, y lo que queremos que sea p&uacute;blico debe ser retornado en el objeto.

```javascript
function heroe() {
  var direccion = 'Esto debe ser privado';

  function saludo() {
    console.log('Ajoooy');
  }

  return {
    saludo: saludo
  };
};

var tortuga = heroe();

saludo(); // Uncaught ReferenceError: saludo is not defined
direccion; // Uncaught ReferenceError: direccion is not defined
tortuga.direccion; // undefined
tortuga.saludo(); // 'Ajoooy'
```

### Operador `instanceof`

Usando el operador `instanceof`, se puede probar si un objeto fue creado con una específica función constructora; nos indica si es una instancia de X objeto.

```javascript
function Hero() {} // ES5
class BadGuy {} // ES6
var h = new Hero();
var z = new BadGuy();
var o = {};

h instanceof Hero; // true
h instanceof Object // true

o instanceof Hero; // false
o instanceof Object; // true

z instanceof BadGuy; // true
z instanceof Object; // true

typeof Hero; // "function"
typeof BadGuy; // "function"
```

### Elementos, propiedades y m&eacute;todos

Los elementos de un objeto se conocen como propiedades; una propiedad puede contener cualquier tipo de valor, incluso otro objeto; cuando la propiedad contiene una función, se le llama m&eacute;todo.

```javascript
var leon = {
 nombre: 'Benji',
 rugir: function() {
    alert('aaarg!');
 },
 caminar: function(velocidad) {
    alert('camina a ' + velocidad + 'km/h' );
 }
};
```

### Accediendo a las propiedades de un Objeto

Para acceder a los atributos y/ó métodos de un objecto lo podemos hacer de dos maneras, mediante *dot notation* ó *bracket notation*:

Dot notation: 
`leon.nombre`

Bracket notation:
`leon['nombre']`

Si tratamos de acceder a una propiedad que no existe, va a retornar `undefined`

### Llamando m&eacute;todos de un Objeto

Llamar (invocar) un método es lo mismo que llamar a cualquier otra función: simplemente agregamos un paréntesis después del nombre del método, y como el método es una propiedad, podemos usar dot o bracket notation.

`leon.rugir();`

`leon.caminar(30);`

### Definiendo getters y setters

Se pueden definir *getters* y *setters* en cualquier objeto predefinido, u objeto definido por el usuario, que admita la adición de nuevas propiedades. Se utiliza la sintaxis literal del objeto para definirlos.

```javascript
var language = {
  log: ['ES','FR'],
  get latest() {
    if (this.log.length == 0) return undefined;
    return this.log[this.log.length - 1];
  },
  set current(name) {
    this.log.push(name);
  }
}

console.log(language.latest); // "FR".

language.current = 'EN';
console.log(language.log); // ['ES','FR', 'EN']
```

Para agregar un getter y/&ocute; setter a un Objeto ya existente, se debe hacer uso del método `Object.defineProperty()`.

```javascript
var o = { a: 0 };

Object.defineProperty(o, 'b', { get: function() { return this.a + 1; } });
Object.defineProperty(o, 'c', { set: function(x) { this.a = x / 2; } });

console.log(o.b) // Ejecuta el getter, a + 1 (retorna 1)

o.c = 10; // Ejecuta el setter
console.log(o.a) // 5
```

### Modificando Propiedades/Métodos

JavaScript es un lenguaje dinámico; permite alterar propiedades y métodos de objetos existentes en cualquier momento. Esto incluye agregar nuevas propiedades &oacute; eliminarlas. Se puede comenzar con un objeto en blanco y agregar propiedades más adelante.

```javascript
var persona = {};

persona.nombre = 'Juan';
persona.apellido = 'Salas';
persona.edad = 36;
persona.intereses = ['cocinar', 'patinar'];
persona.bio = function() {
    alert(this.nombre + ' tiene ' + this.edad + ' años. Le gusta ' + this.intereses[0] + ' y ' + this.intereses[1] + '.');
  };

delete persona.apellido; // retorna undefined
persona.edad = 35; // sobreescribe el valor de edad
```

### Comparando Objetos

En JavaScript, los objetos son un tipo de referencia. Dos objetos distintos nunca son iguales, incluso si tienen las mismas propiedades. S&oacute;lo comparando la misma referencia de objeto consigo mismo se obtiene true.

## JavaScript Orientado a Objetos

Como se indicó anteriormente, JavaScript no es un lenguaje orientado a objetos, al menos no de la manera tradicional. Sin embargo, muchos de los principios de OOP se han adoptado al lenguaje.

### Objetos

Como lo sugiere el nombre, OOP, los objetos son bastante importantes. A nivel conceptual, un objeto es una representación de una "cosa" (alguien o algo), y esta representación es expresada con la ayuda de un lenguaje de programación. La cosa puede ser cualquier cosa/objeto de la vida real o algún concepto más abstracto. Tomando un objeto común, por ejemplo, gato, se puede ver que tiene ciertas características (color, nombre, peso), y puede realizar algunas acciones (maullar, dormir, esconder, escapar). Las características del objeto se llaman propiedades en OOP y las acciones se llaman métodos.

También hay una analogía con el lenguaje hablado:

* Los objetos se nombran con mayor frecuencia usando sustantivos (libro, persona).
* Los métodos son verbos (lectura, ejecución).
* Los valores de las propiedades son adjetivos.

A pesar de que, normalmente cuando hablamos de Objetos en JavaScript nos referimos al tipo de dato, la definición anterior es aplicable, ya que, un objeto en JavaScript esta formado por pares de llave/valor, los cuales se llaman propiedades, y cuando el valor de una propiedad es una función, se le llama método.

También mencionamos previamenente que, cada objeto en JavaScript es una *instancia* del objeto `Object`, por lo que, hereda todas sus propiedades y métodos.

### Clases en JavaScript

En la vida real, los objetos similares se pueden agrupar en función de algunos criterios. En OOP, una clase es un plano, ó una receta para un objeto. Puede crear diferentes objetos utilizando la misma clase, porque una clase es solo una plantilla, mientras que los objetos son instancias concretas, basadas en la plantilla.

En JavaScript no hay clases; todo se basa en objetos. JavaScript utiliza funciones como clases a las cuales se les llama funciones constructoras (constructor functions). Las funciones constructoras son la versión de una Clase en JavaScript; estas funciones no devuelve nada ni crean explícitamente un objeto; básicamente, solo definen propiedades y métodos. Por convención, hasta la versión ES5 del lenguaje, normalmente el nombre de estas funciones inicia con may&uacute;scula, para que sea m&aacute;s f&aacute;cil reconocerlas.

Un ejemplo de una funci&oacute;n contructura es la siguiente:

```javascript
function Person() { }
```

Para crear una nueva instancia de un objeto `objX` utilizamos el enunciado `new objX`, asignando el resultado (que es de tipo obj) a una variable para acceder a él más tarde.

Cuando se crea una instancia de un objeto, la funcionalidad no se copia al objeto nuevo como en los lenguajes OOP "clásicos", sino que, la funcionalidad está vinculada a través de una cadena de referencia llamada prototipo de cadena (prototype chain).

JavaScript se describe como un lenguaje basado en prototipos: cada objeto tiene un objeto prototipo, que actúa como un objeto de plantilla que hereda métodos y propiedades. A pesar de que, no se cubrir&aacute; el tema de prototipos, es importante indicar que, los m&eacute;todos de un objeto se deben agregar mediante objeto prototipo, y no directamente en la funci&oacute;n constructura.

Para agregar un m&eacute;todo al objeto prototipo usamos dot notation, por ejemplo, en el siguiente pseudocódigo, definimos una clase de nombre `NombreObjeto`, le agregamos un m&eacute;todo (`nombreMetodo`), creamos una instancia y ejecutamos el `nombreMetodo`:

```javascript
function NombreObjeto() {}

NombreObjeto.prototype.nombreMetodo = function() {};

var miObj = new NombreObjeto();

miObj.nombreMetodo();
```

La propiedad prototipo es un objeto, básicamente es un depósito para almacenar propiedades y métodos que queremos que hereden los objetos que se encuentran más abajo en la cadena de prototipos.

#### Constructor

En la primera sección, cuando cubrimos la parte de Objetos, se mencionó que, todo objeto tiene una propiedad especial, llamada constructor. El constructor se llama en el momento de la creación de instancias (el momento en que se crea la instancia del objeto). El constructor es un método de la clase. En JavaScript, la función sirve como el constructor del objeto; por lo tanto, no es necesario definir explícitamente un método constructor. Cada acción declarada en la clase se ejecuta en el momento de la creación de instancias.

```javascript
function Person(firstName, gender) {
  this.firstName = firstName;
  this.gender = gender;
}

Person.prototype.sayHello = function() {
  console.log("Hello, I'm " + this.firstName);
};

var person1 = new Person('Bob', 'Male');
var person2 = new Person('Alice', 'Women');

// logs "Hello, I'm Bob"
person1.sayHello();

// logs "Hello, I'm Alice"
person2.sayHello();
```

Con ES6, &uacute;ltima versión del lenguange, se adiciona el keyword `class`. Este tipo de clases son principalmente *syntactical sugar* - sintaxis para que algo en el lenguaje sea m&aacute;s sencillo de aplicar/entender. Por debajo, se sigue usando el mismo modelo de herencia prototipica.

Podemos tomar el ejemplo anterior y usar la sintaxis de ES6 para crear una clase, y el resultado es el mismo.

```javascript
class Person {
  constructor(firstName, gender) {
    this.firstName = firstName;
    this.gender = gender;
  }
}

Person.prototype.sayHello = function() {
  console.log("Hello, I'm " + this.firstName);
};

var person1 = new Person('Bob', 'Male');
var person2 = new Person('Alice', 'Women');

// logs "Hello, I'm Bob"
person1.sayHello();

// logs "Hello, I'm Alice"
person2.sayHello();
```

Cuando usamos el keyword `class`, podemos usar una clase sin nombrar o nombrada:

```javascript
// sin nombre
var Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// con nombre
var Rectangle = class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
```

Algunas razones para usar la versi&oacute;n ES6:

* La sintaxis es más simple y menos propensa a errores.
* Podemos usar el keyword `static` para crear metodos estaticos.

### Abstracción

La abstracción es un mecanismo que nos permite modelar un problema, ya sea por herencia (especialización) ó por composición. JavaScript logra la especialización mediante la herencia y la composición al permitir que las instancias de clase sean los valores de los atributos de otros objetos.

```javascript
class Person {};
Person.prototype.data = function() { return {} };

var person1 = new Person();
person1 instanceof Person; // true
person1 instanceof Object; // true
person1.data instanceof Object; // true
```

La clase Person hereda de la clase Object, por esto `person1` tambien es una instancia de Object (demuestra especialización) y la propiedad `person1.data` es una instancia de Object (demuestra composición).

### Encapsulamiento:
En los lenguajes compilados, no se puede leer el código que hace que un objeto funcione. En JavaScript, porque es un lenguaje interpretado, se puede ver el código fuente, pero el concepto sigue siendo el mismo: se trabaja con la interfaz del objeto, sin preocuparse por su implementación.

Otro aspecto de la ocultación de información es la visibilidad de los métodos y las propiedades. En algunos lenguajes (Java), los objetos pueden tener propiedades y métodos públicos, privados y protegidos. Esta categorización define el nivel de acceso que tienen los usuarios del objeto. Por ejemplo, solo la implementación interna del objeto tiene acceso a los métodos privados, mientras que cualquier persona tiene acceso a los públicos. En JavaScript, todos los métodos y propiedades son públicos, pero hay formas de proteger los datos dentro de un objeto y lograr privacidad.

En la secci&oacute;n [Funciones que retornan Objetos](#funciones-que-retornan-objetos) se comento brevemente que, usando una función normal, podemos simular el *ocultar* información al retornar expresamente variables ó m&eacute;todos que deseamos que sean p&uacutel;blicos, cualquier otra implementación queda protegida dentro del ambito de la función. 


### Modularidad:
El concepto de modularidad ofrece mecanismos para agrupar abstracciones relacionadas lógicamente.
Los módulos sirven como contenedores físicos en los que se declaran las clases y objetos del diseño lógico realizado.
El objetivo de fondo de la descomposición en módulos es la reducción del coste del software asi como la complejidad, al permitir que los módulos se diseñen y revisen independientemente.

### Jerarquía:
Consiste en una clasificación u organización de las abstracciones. Frecuentemente, un conjunto de abstracciones forman una jerarquía. La identificación de esas jerarquías simplifica en gran medida la comprensión del problema.

Las dos jerarquías más importantes en un sistema complejo son:

* La estructura de objetos (por relaciones de composición, (jerarquía de partes)).
* La estructura de clases(por relaciones de generalización/especialización, (herencia))

### Herencia:
Es la relación de clases más importante y un elemento esencial de los sistemas orientados a objetos.
Establece una relación, en la que una clase comparte la estructura y comportamiento definido en otra(s).
Representa una jerarquía de abstracciones, en la que una subclase hereda de una o más superclases.
La característica de herencia, permite definir nuevas clases derivadas de otras ya existentes, que la especializan de alguna manera. Asi ́se logra definir una jerarquía de clases, que se puede mostrar mediante un árbol de herencia.
La subclase hereda los atributos y operaciones de la superclase, y puede sobreescribir (override) las operaciones (métodos) heredadas.

En OOP clásico, las clases heredan de otras clases, pero en JavaScript, porque allí no hay clases, los objetos heredan de otros objetos.

### Poliformismo:
Polimorfismo: la capacidad de un método de ser utilizado en distintas situaciones.
En el caso de JavaScript, se materializa en forma de jerarquías de tipos usando herencia prototípica (prototypal inheritance). 


Bob is a man (an object). objects
Bob's date of birth is June 1st, 1980, gender: male, hair: black. properties

Self-invoking Functions
So far we have discussed using anonymous functions as callbacks. Let's see another
application of an anonymous function—calling this function right after it was
defined. Here's an example:

```javascript
(function(){
 alert('boo');
 }
)()
```

The syntax may look a little scary at first, but it's actually easy—you simply place
an anonymous function definition inside parentheses followed by another set of
parentheses. The second set basically says "execute now" and is also the place to put
any parameters that your anonymous function might accept.

```javascript
(function(name){
 alert('Hello ' + name + '!');
 }
)('dude')
```

One good reason for using self-invoking anonymous functions is to have some
work done without creating global variables. A drawback, of course, is that you
cannot execute the same function twice (unless you put it inside a loop or another
function). This makes the anonymous self-invoking functions best suited for one-off
or initialization tasks.

## Referencias
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects 
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model
* https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch3.md 
* https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch3.md
* https://github.com/mdn/learning-area/blob/master/javascript/oojs/introduction/oojs-class-further-exercises.html
* https://webplatform.github.io/docs/concepts/programming/javascript/OOJ/

