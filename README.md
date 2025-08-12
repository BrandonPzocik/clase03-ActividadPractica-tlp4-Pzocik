5. Análisis final (teórico)
Responder lo siguiente:

### ¿Qué diferencias, ventajas y desventajas encontrás entre usar funciones constructoras con prototype y usar class?
Entre usar funciones constructoras con prototype y usar class, la diferencia principal está en la sintaxis y la facilidad de uso. Las funciones constructoras con prototype son el mecanismo original de JavaScript para crear objetos y compartir métodos entre instancias; es más manual y requiere entender bien cómo funciona el prototype para configurarlo y heredar correctamente. Por otro lado, class es una forma más moderna y legible de hacer exactamente lo mismo, pero con una sintaxis más parecida a otros lenguajes orientados a objetos. Internamente, las clases siguen usando prototype, pero lo ocultan para que el código sea más limpio. En cuanto a ventajas, las funciones constructoras tienen compatibilidad con navegadores antiguos y ofrecen control total sobre la estructura del prototype, pero su sintaxis es más engorrosa y propensa a errores. Las clases hacen el código más claro, simplifican la herencia y permiten características como métodos privados, aunque requieren entornos modernos para funcionar sin transpilar.

### ¿Cuáles son las ventajas de usar getters y setters?
Los getters y setters permiten controlar cómo se leen y modifican los datos de un objeto. Un getter se usa para obtener un valor, pero antes de devolverlo puede revisarlo o calcularlo, y un setter se usa para asignar un valor, pero antes de guardarlo puede validarlo o ajustarlo. Esto ayuda a evitar errores, mantener los datos en buen estado y poder cambiar la forma en que se guardan o procesan sin modificar el código que los utiliza.

