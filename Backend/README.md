### Servidor Express with JWT

Esta es una aplicacion web del lado del servidor que usa el entorno NODE JS con el framework Express.
La aplicación realiza consultas a una base de datos relacional PostgreSQL mediante un ORM llamado Sequelize.

Este proyecto se encuentra en fase de desarrollo, por lo que se incluyen los TDD a las rutas api que se van a consumir del lado del frontend.


### Instalación de entorno de desarrollo
npm start, ejecuta el proyecto bajo el comando nodemon
```sh
npm install
npm serve
npm start
```

### Manejo de sesiones
Se usa la librera JWT y bcrypt para encriptar y generar token, la llave se encuentra en el archivo .env como variable de entorno esta puede ser modificada por el usuario al igual que el numero salt que se usa para encriptar la clave.

Generacion de token:
```
  generateToken(payload){
      const token = jwt.sign(payload, process.env.SECRET_KEY)
      return token
  }
```
Encriptado con bcryp:
```
  contraseña = bcrypt.hashSync(data.contraseña, 10)
```
### Deployment

```sh
git clone https://github.com/Lovelace13/RegistroDeVisitas.git
cd Backend
npm i
npm run build
npm start
```

### Rutas a Consumir

[ipAddress:port]/auth/register
Ejemplo de registro obtenido mediante metedo get de la base de datos, la contraseña se encuentra encriptada
```JSON
  {
    "email": "kmarin@correo.com",
    "contraseña": "$2b$10$ZpRJygpm2We5sSmeed7dReUbjfXbN3SJOEz.dUF7iEB3IPwZaoWhq"
  }
```

[ipAddress:port]/authRouter/login
Ejemplo json enviado mediante metodo post para iniciar sesion
```JSON
  {
    "email": "kmarin@correo.com",
    "contraseña": "321step"
  }
```

[ipAddress:port]/authRouter/dashboard 
Ejemplo de token generado en el inicio de sesion correcto
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImttYXJpbkBjb3JyZW8uY29tIiwiaWF0IjoxNjk0Mzk2OTcyfQ.PaeZuGo93lDYTG-woYhky4Nv6RTwAFrpgGQTBRYvJPE
```



> Se requiere instalar PostgreSQL
