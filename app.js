//Requerimos express a una constante

const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
//Importamos conexion base de datos
const conectionDb = require("./dataBase/filmDb");

//Importación de las rutas.
let filmRouter = require("./routers/filmRouter");
let userRouter = require("./routers/userRouter");
let orderRouter = require("./routers/orderRouter");

//Enrutador de películas con el recurso /film
app.use("/film", filmRouter);

//Enrutador de usuarios con el recurso /user
app.use("/user", userRouter);

//Enrutador de ordenes con el recurso /user
app.use("/order", orderRouter);



//Importación de la conexion a bd

conectionDb.then(() =>{
    app.listen(port, () => console.log(`Listening at ${port}`));
});








