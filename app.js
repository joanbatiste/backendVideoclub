//Requerimos express a una constante

const express = require("express");
const app = express();
const port = 3000;

//Importamos conexion base de datos
const conectionDb = require("./dataBase/filmDb");

//Importación de las rutas.
let filmRouter = require("./routers/filmRouter");
let userRouter = require("./routers/userRouter");

//Enrutador de películas con el recurso /film
app.use("/film", filmRouter);

//Enrutador de usuarios con el recurso /user
app.use("/user", userRouter);

app.use(express.json());



//Importación de la conexion a bd

conectionDb.then(() =>{
    app.listen(port, () => console.log(`Listening at ${port}`));
});








