# Introduccion a JavaScript Orientado a Objetos

## Programacion Orientada a Objetos

La Programación Orientada a Objetos (OOP) es un paradigma de programación que utiliza la abstracción para crear modelos basados en el mundo real. 

OOP se refiere al uso de piezas autónomas de código para desarrollar aplicaciones. Llamamos a estas piezas autónomas de objetos de código, más conocidos como Clases en la mayoría de los lenguajes de programación OOP y Funciones en JavaScript. Usamos los objetos como bloques de construcción para nuestras aplicaciones. Construir aplicaciones con objetos nos permite adoptar algunas técnicas valiosas, a saber, Herencia (los objetos pueden heredar características de otros objetos), Polimorfismo (los objetos pueden compartir la misma interfaz, cómo se accede y se utiliza), mientras que su aplicación subyacente de la interfaz puede diferir) y encapsulación (cada objeto es responsable de tareas específicas).

JavaScript no es un lenguaje OOP a toda regla, como Java o PHP, pero es un lenguaje basado en objetos. Cuando hablamos de Objetos en JavaScript, nos estamos refiendo al tipo de dato (Object) y no al concepto de OOP.

## Tipos de datos y objetos globales
En JavaScript, existen los siguientes tipos de datos:

* null
* undefined
* boolean
* number
* string
* object
* symbol -- (ES6)

Todos, exepto `object`, se conocen como *primitivos*. Las variables no tienen tipos; los valores tienen tipos. Las variables pueden contener cualquier valor, en cualquier momento.

A diferencia de muchos otros lenguajes, JavaScript no soporta clases, pero tiene (built-in) constructores. Los constructores son como las funciones normales, pero las usamos con la palabra reservada "new". Hay dos tipos de constructores: constructores nativos (también incorporados) como `Array` y `Objet`, que están disponibles automáticamente en el entorno de ejecución en *runtime*; y constructores personalizados, que definen propiedades y métodos para su propio tipo de objeto.

Esta serie de built-in / objetos globales (objetos incorporados), tienen funciones y propiedades. El término "objetos globales" no debe confundirse con el objeto global (global object). Los objetos globales se refieren a objetos en el ámbito global. Algunos de los mas usados son:

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


## Object

En algunos lenguajes de programación, hay una distinción entre:

* Una matriz normal, también llamada indexada o enumerada (keys son números) y
* Una matriz asociativa, también llamada hash (keys son strings)

JavaScript usa `array` para representar matrices indexadas y `object` (objeto) para representar matrices asociativas. Si quiere un hash en JavaScript, usa un `object`.

Un objeto es muy similar a un array, pero con la diferencia de que uno puede definir los keys. No está limitado a usar solo índices numéricos, sino que, podemos usar más keys mas amigables como *first_name*, *age*, *curso*, etc.

Un objeto en JavaScript se ve asi:

```javascript
var heroe = {
 clase: 'Turtle',
 ocupacion: 'Ninja'
};
```

Del ejemplo anterior se puede ver que:

* El nombre de la variable que contiene al objeto es heroe.
* En lugar de usar [] para definir un array, usamos {} para objetos
* Separamos los elementos (llamados propiedads) contenidos en el objeto usando comas.
* Los pares de key/value se dividen usando dos puntos (:), key: value

### Como crear Objetos

Para crear un objeto podemos utilizar el constructor, built-in, o la forma literal:

```javascript
var myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;
```

```javascript
var myCar = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969
};
```

### Elementos, propiedades y metodos

Los elementos de un objeto se conocen como propiedades; una propiedad puede contener cualquier tipo de valor, incluso otro objeto; cuando la propiedad contiene una funcion, se le llama metodo.

```javascript
var leon = {
 nombre: 'Benji',
 hablar: function() {
    alert('aaarg!');
 }
};
```

### Accediendo a las propiedades de un Objeto

Para acceder a los atributos y/o métodos de un objecto lo podemos hacer de dos maneras, dot notation o Bracket notation:

Dot notation: 
`console.log(leon.nombre);`

Bracket notation:
`console.log(leon['nombre']);`

Si tratamos de acceder a una propiedad que no existe, va a retornar `undefined`

### Llamando al metodo de un Objeto

Llamar (invocar) un método es lo mismo que llamar a cualquier otra función: simplemente agregamo un paréntesis después del nombre del método, y como el metodo es una propiedad, podemos usar dot o bracket notation.

`leon.hablar();`

### Referencias
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects 
* https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch3.md 
* https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch3.md

    * Que es, JS Built-in Types, sintaxis basica, para que se usa.
    * Como se crea un Objeto? literal, new y create()
    * Propiedades y Metodos.
    * Como se accede a valores (dot notation y bracket notation), y diferencias.
    * Get y set de valores

2. OOP — repaso
    * En que consiste, porque se usa y principios.
    * https://github.com/mdn/learning-area/blob/master/javascript/oojs/introduction/oojs-class-further-exercises.html


Objetos
Como lo sugiere el nombre, programacion orientada a objetos, los objetos son bastante importantes. Un objeto es una representación de una "cosa" (alguien o algo), y esta representación es expresada con la ayuda de un lenguaje de programación. La cosa puede ser cualquier cosa/objeto de la vida real o algún concepto más abstracto. Tomando un objeto común, por ejemplo, gato, puede ver que tiene ciertas características (color, nombre, peso).
y puede realizar algunas acciones (maullar, dormir, esconder, escapar). Las características del objeto se llaman propiedades en OOP y las acciones se llaman métodos.
También hay una analogía con el lenguaje hablado:
Los objetos se nombran con mayor frecuencia usando sustantivos (libro, persona)
Los métodos son verbos (lectura, ejecución)
Los valores de las propiedades son adjetivos

Clases
En la vida real, los objetos similares se pueden agrupar en función de algunos criterios. En OOP, una clase es un plano, o una receta para un objeto. Puede crear diferentes objetos utilizando la misma clase, porque una clase es solo una plantilla, mientras que los objetos son instancias concretas, basadas en la plantilla.

En JavaScript no hay clases; todo se basa en objetos.

Encapsulamiento:
En los lenguajes compilados, no se puede leer el código que hace que un objeto funcione. En JavaScript, porque es un lenguaje interpretado, se puede ver el código fuente, pero el concepto sigue siendo el mismo: se trabaja con la interfaz del objeto, sin preocuparse por su implementación.

Otro aspecto de la ocultación de información es la visibilidad de los métodos y las propiedades. En algunos lenguajes (Java), los objetos pueden tener propiedades y métodos públicos, privados y protegidos. Esta categorización define el nivel de acceso que tienen los usuarios del objeto. Por ejemplo, solo la implementación interna del objeto tiene acceso a los métodos privados, mientras que cualquier persona tiene acceso a los públicos. En JavaScript, todos los métodos y propiedades son públicos, pero hay formas de proteger los datos dentro de un objeto y lograr privacidad.


Modularidad:
El concepto de modularidad ofrece mecanismos para agrupar abstracciones relacionadas lógicamente.
Los módulos sirven como contenedores físicos en los que se declaran las clases y objetos del diseño lógico realizado.
El objetivo de fondo de la descomposición en módulos es la reducción del coste del software asi como la complejidad, al permitir que los módulos se diseñen y revisen independientemente.

Jerarquía:
Consiste en una clasificación u organización de las abstracciones.
Frecuentemente, un conjunto de abstracciones forman una jerarquía.
La identificación de esas jerarquías simplifica en gran medida la comprensión del problema.
Las dos jerarquías más importantes en un sistema complejo son:
• La estructura de objetos (por relaciones de composición, (jerarquía de partes)).
• Laestructuradeclases(porrelacionesde generalización/especialización, (herencia))

Herencia:
Es la relación de clases más importante y un elemento esencial de los sistemas orientados a objetos.
Establece una relación, en la que una clase comparte la estructura y comportamiento definido en otra(s).
Representa una jerarquía de abstracciones, en la que una subclase hereda de una o más superclases.
La característica de herencia, permite definir nuevas clases derivadas de otras ya existentes, que la especializan de alguna manera. Asi ́se logra definir una jerarquía de clases, que se puede mostrar mediante un árbol de herencia.
La subclase hereda los atributos y operaciones de la superclase, y puede sobreescribir (override) las operaciones (métodos) heredadas.

En OOP clásico, las clases heredan de otras clases, pero en JavaScript, porque allí no hay clases, los objetos heredan de otros objetos.

Poliformismo:
Polimorfismo: la capacidad de un método de ser utilizado en distintas situaciones.
En el caso de JavaScript, se materializa en forma de jerarquías de tipos usando herencia prototípica (prototypal inheritance). 


Bob is a man (an object). objects
Bob's date of birth is June 1st, 1980, gender: male, hair: black. properties



JavaScript, usa funciones especiales llamadas funciones constructoras (constructor functions) para definir objetos y sus características. Las funciones constructoras son la version de una Clase en JavaScript; estas funciones no devuelve nada ni crean explícitamente un objeto; básicamente, solo define propiedades y métodos. Por convencion, normalmente el nombre de estas funciones inicia con mayuscula, para que sea mas facil reconocerlas.

Cuando se crea una instancia de un objeto, la funcionalidad no se copia al objeto nuevo como en los lenguajes OOP "clásicos", sino que, la funcionalidad está vinculada a través de una cadena de referencia llamada prototipo de cadena (prototype chain). Entonces, esto no es una instancia verdadera, estrictamente hablando: JavaScript usa un mecanismo diferente para compartir la funcionalidad entre los objetos.


Object prototypes
A menudo, JavaScript se describe como un lenguaje basado en prototipos: cada objeto tiene un objeto prototipo, que actúa como un objeto de plantilla que hereda métodos y propiedades.


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

