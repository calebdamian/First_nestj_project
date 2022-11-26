# Sistema informático de gestión de historias clínicas

## Descripción

Este repositorio contiene una API REST desarrollada con las siguientes tecnologías:
  - Nest JS, el cual es un framework que trabaja sobre Node JS y Express. Posee una arquitectura muy similar a los proyectos de Angular, con su arquitectura muy bien definida en cuanto al uso de inyección de dependencias.
  - TypeORM, que permite realizar conexiones a bases de datos e identificar las tablas a través de clases llamadas Entidades, las cuales describen directamente el modelo de datos. En mi caso utilicé TypeORM para crear una base de datos en MySQL.

Esta API permite ejecutar la lógica del sistema, que se centra en gestionar historias clínicas con la evolución del estado de los pacientes.

## ¿Como instalar y ejecutar el proyecto?  

1. Clone el repositorio en su equipo
2. Ingrese al directorio sighc-backend
3. Ejecute el siguiente comando en el CMD de Visual Studio Code (IDE recomendado)
```bash
$ npm install
```
4. Instale MySQL Workbench en su versión 8.0.31 
5. Cree una base de datos y agregue la información requerida al archivo .env (vea la estructura del archivo abajo)

```env NODE_ENV=development
SERVER_TIMEOUT=1080000
SERVER_PORT=3000
DATABASE_HOST=
DATABASE_PORT=
DATABASE_USERNAME=
DATABASE_PASSWORD=
DATABASE_NAME=
DATABASE_TYPE=mysql
DATABASE_CONNECTION_TIME_OUT=150000
DATABASE_ACQUIRE_TIME_OUT=150000
DATABASE_CONNECTION_LIMIT=20
JWT_SECRET=123
```

6. Para correr la API puede usar los siguientes comandos dependiendo del ambiente


#### Desarollo
```bash
$ npm run start
```
#### Desarollo (visualizar los cambios al tiempo que se van haciendo)
```bash
$ npm run start:dev
```
#### Producción
```bash
$ npm run start:prod
```

### Tutoriales 

Para realizar el presente proyecto, me ayudaron con sus guías y tutoriales las siguientes personas:
  - [FaztCode](https://www.youtube.com/watch?v=W4_oH3anYHU&t=5755s)
  - [Anson the Developer](https://www.youtube.com/watch?v=xzu3QXwo1BU&list=PL_cUvD4qzbkw-phjGK2qq0nQiG6gw1cKK)
  - [Marius Espejo](https://www.youtube.com/watch?v=rKgZLVgdvAY&t=2541s)
  - [freeCodeCamp](https://www.youtube.com/watch?v=F_oOtaxb0L8&t=2788s)
  - [Domini Code](https://www.youtube.com/watch?v=W-7lv1_mmGk&t=464s)
  
### Licencia 

MIT License

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
