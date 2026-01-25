# Podcaster-app

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

- hooks/: contiene lógica reutilizable (Custom hooks)

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
