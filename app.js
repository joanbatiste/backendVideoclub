//Requerimos express a una constante

const express = require("express");


const app = express();

app.use(express.json());

const port = 3000;

//Importación de la conexion a bd
const conectionDb = require("./dataBase/filmDb");
conectionDb.then(() =>{
    app.listen(port, () => console.log(`Listening at ${port}`));
});


//Importación de las rutas.
let filmRouter = require('./routers/filmRouter');

//Enrutador de películas con el recurso /film
app.use('/film', filmRouter);

//Levantar servidor

