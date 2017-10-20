1. Object - introduccion
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects 
https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch3.md 
https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch3.md

    * Que es, JS Built-in Types, sintaxis basica, para que se usa.
    * Como se crea un Objeto? literal, new y create()
    * Propiedades y Metodos.
    * Como se accede a valores (dot notation y bracket notation), y diferencias.
    * Get y set de valores

2. OOP — repaso
    * En que consiste, porque se usa y principios.
    * https://github.com/mdn/learning-area/blob/master/javascript/oojs/introduction/oojs-class-further-exercises.html

En algunos lenguajes de programación, hay una distinción entre:
Una matriz normal, también llamada indexada o enumerada (keys son números) y
Una matriz asociativa, también llamada hash (keys son strings)

JavaScript usa arrays para representar matrices indexadas y objetos para representar matrices asociativas. Si quiere un hash en JavaScript, usa un objeto.

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

