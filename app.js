//Requerimos express a una constante

const express = require("express");

const app = express();

const port = 3000;




//Levantar servidor

app.listen(port, () => console.log(`Listening at ${port}`));