# app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

Proyecto Puertos 

Se solicitó realizar una aplicación web, para encontrar puertos alredor el mundo, obteniendo esa información,
 a traves de la conexión de una Api con un endpoint para ello. 

Para la realizar la pagina se utilizó el framework VueJs y la libreria Bootstrap.

Se crearon 4 componentes que consisten en 1) App: en donde se reunen todos los componentes y se hace el llamado y conexión 
de la base de datos para traer el listado de puertos, así como, las funciones correspondientes para obtener cada puerto 
de la lista segun la necesidad y requerimiento del cliente. 
2)Searh: en donde encuentran los filtros para encontrar puertos segun nombre, país o continente. 
Importante: el filtro que se realiza es solamente en la pagina en donde se esté haciendo la busqueda, es decir, 
por cada 100 elementos que trae cada pagina. 
Hay 3 filtros de búsqueda. Un Select para escoger el continente y dos 
inputs de busqueda segun el nombre o el páis en donde se quiera encontrar un puerto.
3) Ports es el componente en donde se exporta como props la lista de puertos y el componente 
4)PortItem que es el encargado de, llamar puertos uno por uno de la base de datos.

Siendo que una vez hecho el fetch, se trae la base de datos y cada componente tiene la función de traer 
la lista de todos los puertos para posteriormente llamar uno a uno segun sea necesatio a través de los filtros. 

Se hizo paginación del fetch, por pagina se traen 100 elementos.