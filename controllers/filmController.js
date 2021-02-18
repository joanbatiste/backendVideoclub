const filmDataBase = require("../dataBase/filmDb");
const filmModel = require("../models/film");

let database = new filmDataBase();

class FilmController {

    constructor() {

    }
    //Métodos CRUD

    //CREATE (dar un alta)
    async createFilm(req, res){

        let body = req.body;
        console.log(body);
        try{
            let film = new filmModel(body.id, body.title, body.year, body.overview, body.image, body.genre, body.adult);
            let seteo = await database.set(film);
            if(seteo){
                res.send("Bien, el film se ha guardado");
            }

        }catch{
            console.log("error: no se ha podido setear!");

        }
        return;
    };

    //READ (traer datos)
    async  bringFilms(req, res){

        try{
            let getting = await database.get();
            if(getting){
                res.send(getting)
            }

        }catch(error){
            console.log(error)
        }

    };

    //UPDATE (modificar datos)


    //DELETE (borrar datos)


}


let filmController = new FilmController;
module.exports = filmController;