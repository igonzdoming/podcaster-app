# Podcaster-app(v1.0.3)

## Nota importante

Se han incluido los siguientes archivos al no tratarse de un proyecto real y por ser necesarios para el correcto
funcionamiento de la aplicación:

- .env.development
- .env.production

En un proyecto real, estos archivos, no deben de alojarse bajo ningún concepto.

## Primeros pasos

Antes de inicializar la aplicación, primero se deben descargar las dependencias de proyecto. Para ello ejecutar primero el siguiente comando:

```js
npm install
```

Una vez tengamos instaladas las dependencias, podemos inicializar la aplicación con el siguiente comando

```js
npm run dev
```

# Scripts y explicación

En el fichero package.json, disponemos de una serie de comandos que podemos ejecutar con "npm run", seguido del comando. Como se observa a continuación:

Comando para inicializar la aplicación

```js
npm run dev
```

Comando para construir la aplicación para el entorno de producción

```js
npm run build
```

Comando para una vez realizada una construcción de la aplicación (npm run build), poder visualizar en el cliente el contenido estático resultante

```js
npm run preview
```

Comando para inicializar los test

```js
npm run test
```

Comando para ver y ejecutar los tests en una interfaz gráfica desde el navegador.

```js
npm run test:ui
```

Comando para ejecutar todos los tests una vez y salir.

```js
npm run test:run
```

Comando para saber qué parte de tu código está realmente testeada.

```js
npm run test:coverage
```

Comando para que ESLint revise tu código y comente errores y malas prácticas.

```js
npm run lint
```

Comando para que ESLint arregle automáticamente lo que pueda.

```js
npm run lint:fix
```

## Funcionalidad

La funcionalidad de esta aplicación , radica en mostrar un listado con los 100 podcasts más populares de Itunes. Contará con un buscador reactivo. Además se podrá ver el detalle de cada podcast y los episodios asociados al mismo.

Como recurso se utilizará el api de Itunes, para consumir los servicios.

## Arquitectura

El proyecto ha sido realizado bajo una arquitectura por capas, con un enfoque modular por responsabilidades.

A continuación se exponen la explicación de cada unas de las capas:

- api/: Contiene todo lo relacionado con peticiones fetch (endpoints, configuración de axios.. )

- assets/: Recursos estáticos (como las hojas de estilos css)

- components/: Capa que contiene componentes reutilizables en la aplicación.

- context/: Contiene el estado compartido Context API

- hooks/: Contiene lógica reutilizable (Custom hooks)

- locale/: Contiene las traducciones de los textos de la aplicación en los idiomas español e inglés

- mocks/: Datos simulados para test o desarrollo en local.

- pages/: Pantallas con componentes de alto nivel asociados a rutas.

- router/: Capa de navegación rutas (React Router Dom).

- utils/: Todo tipo de utilidades reutilizables en cualquier parte del proyecto

- test/: Pruebas Unitarias

## Tecnologías - Librerías

Como principal stack tecnológico se ha utilizado:

- **React v19.2.0**
- **Vite v7.2.4**

Las versiones más recientes de React (entre la que se incluye en este proyecto) incorporan mejoras en rendimiento y en la gestión de la concurrencia. Combinado con Vite, que destaca por sus tiempos de arranque casi inmediatos y procesos de compilación optimizados, se consigue reducir notablemente el tiempo de desarrollo y despliegue de la aplicación.

Entre otras librerías usadas en este proyecto destacan:

- **Axios**, **ESLint** y **Prettier**

El uso de Axios,proporciona fiabilidad del proyecto al facilitar la comunicación con APIs. ESLint y Prettier optimizan y garantizan un código más limpio, consistente y fácil de mantener.
Para la comunicación de Api, se podría haber utilizado nativamente fetch, pero la sencillez y la correcta implementación que contiene axios, facilita
el desarrollo/integración.

- **Gestión del estado global**

Para la gestión del estado global se ha optado por React Context, al tratarse de una aplicación de alcance y complejidad reducidos. En escenarios de mayores necesidades de estado más extensas y escalables a largo plazo, podría considerarse el uso de Redux como alternativa más adecuada.

- **Testing**

En esta aplicación se han incorporado test unitarios, bajo la librería Vitest. El uso de la misma junto con Vite permite ejecutar pruebas de forma más rápida y eficiente, gracias a su integración nativa, tiempos de arranque mínimos y una experiencia de testing coherente con el entorno de desarrollo.

Para ejecutar las pruebas de un componente en específico, se puede tomar como referencia la siguiente sintaxis:

```js
npm run test -- src/components/<Componente>/<Componente>.test.tsx
```

Ejemplo:

```js
npm run test -- src/components/DetailPodcast/DetailPodcast.test.tsx
```

Si se desea realizar todas las pruebas a la vez, ejecutar el siguiente comando en consola;

```js
npm run test
```

## Responsive

Se ha seguido la estrategia de construir la aplicación en mobile-first. Originando que la aplicación desde el inicio pueda ser usada en dispotivos
móviles y tablets.

Para un visionado optimo responsive, se puede tomar como referencia la configuración en navegador de:

- Iphone 12 Pro 390 x 844 portrait y landscape
- IPad Pro 1366 x 1024 portrait y landscape

En cuanto CSS se ha optado por usar CSS nativo y no depender de dependencias de terceros. Aunque se podría haber utilizado librerías como SASS, que ofrece una mejora en cuanto al uso de medias query's/mixings en el proyecto
