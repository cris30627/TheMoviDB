# ApiRest
Consumo de API´s Rest

### API KEY
Son una, no la única, de las formas en que el backend puede identificar quien está haciendo cada solicitud.

Debemos entender dos conceptos importantes, la Autenticación y la Autorización.

#### Autenticación
Consiste en identificar quien es cada quien. No sabe que permisos tiene fulano, No sabe que puede o no hacer fulano, Solamente sabe que él es fulano, que ella es pamela o que esa es una persona sin identificar.

#### Autorización
Es la que nos dice que permisos tiene cada quien, es decir, si fulano quiere ir a la nevera para comerse un pastel, es la que dice, espérate fulano, tienes permisos para abrir la nevera?, a listo ábrela, tienes permisos de comerte el pastel?, a bueno comételo.

Y además por poner un ejemplo más real, si fulano trata de ver las fotos privadas de pamela, la autorización va a decir, ok quien eres?, la autenticación ya te dijo que eras fulano, a listo perfecto, autenticación me pasas un token, listo ya sé que tu eres fulano, y luego empieza a revisar los permisos, como no los tiene se lo va a prohibir,

Obviamente estos trabajan en conjunto para prohibir o permitir a toda la información que tenemos en nuestra aplicación, y ahí es donde entran las API KEYs.

Estas API Keys son una de las formas en que el backend puede indentificar quien es cada quien.

El backend necesita saber quien esta haciendo cada solicitud, para proteger la información privada de las personas, pero también en muchos casos, para limitar la cantidad o las solicitudes que le hacemos a la aplicación.


+ Query parameter: ?apy_key=ABC123
+ Authorization Header: X-API-Key: ABC123
**Alternativas**
+ Authorization: Basic
+ Authorization: Barer Token
+ OAuth 2.0 (es de las mejores y más complicadas formas de autenticar en la modernidad)
+ Access Key + Secret Key
En este caso estamos haciendo una Application-based authentication es decir estamos autenticando nuestra aplicación, estamos autenticando a nuestro frontend para que pueda hacer solicitudes al backend, pero hay aplicaciones donde no solamente necesitamos una Application-based authentication, también hay apps que necesitamos usar esta con una User-based authentication.
