//Requerimos express a una constante

const express = require("express");

const app = express();

const port = 3000;


//Importación de las rutas.

let filmRouter = require('./routers/filmRouter');

//Enrutador de películas con el recurso /film
app.use('/film', filmRouter);

//Levantar servidor

app.listen(port, () => console.log(`Listening at ${port}`));
