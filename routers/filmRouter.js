const router = require("express").Router();

//Requerimos el controlador
const filmController = require("../controllers/filmController");

//CREACION DE ENDPOINTS

//Endpoint para guardar una pelicula
router.post("/saveFilm", filmController.createFilm);

//Endpoint para traer las peliculas
router.get("/allFilms", filmController.bringFilms);

module.exports = router;
