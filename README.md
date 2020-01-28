# ReactJS

Algunas locuras con ReactJS

### Mis notas sobre React

#### Componentes

- Es una buena práctica que los componentes vivan en su propio archivo y para ello se les crea una carpeta.
- Todos los componentes requieren por lo menos el método render que define cuál será el resultado que aparecerá en pantalla.
- El source de las imágenes en React puede contener direcciones en la web o se le puede hacer una referencia directa importándola. Si se importa deben usarse llaves para que sea evaluado.

#### Estilos

- Para usar los estilos es necesario importarlos con import
- React funciona ligeramente diferente y para los atributos de clases no se utiliza class sino className
- Es posible utilizar Bootstrap con React, sólo debe ser instalado con npm install bootstrap y debe ser importado en el index.js
- Existen estilos que son usados de manera global o en varios componentes, así que deben ser importados en el index.js

#### Props

Los props que es la forma corta de properties son argumentos de una función y en este caso serán los atributos de nuestro componente como class, src, etc.

Estos props salen de una variable de la clase que se llama this.props y los valores son asignados directamente en el ReactDOM.render().

#### Las páginas en React

Las páginas en React son componentes y conseguir distinguirlas nos servirá para saber que es un componente que adentro lleva otros componentes.

- Al escribir los props no importa el orden en el que lo hagas, únicamente importa el nombre.
