const router = require("express").Router();

//Requerimos el controlador
const filmController = require("../controllers/filmController");

//CREACION DE ENDPOINTS

//Endpoint para guardar una pelicula
router.post("/", filmController.createFilm);

//Endpoint para traer las peliculas
router.get("/allFilms", filmController.bringFilms);

//Endpoint para traer una sola peli
router.get("/oneFilm/:id", filmController.bringOneFilm);

//Endpoint para borrar una peli
router.delete("/deleteFilm/:id", filmController.deleteFilm);

module.exports = router;
