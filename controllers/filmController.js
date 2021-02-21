const mongoose = require("mongoose");

const film = require("../models/filmModel");


class FilmController {

    constructor() {

    }
    //Métodos CRUD

    //CREATE (dar un alta)
    async createFilm(req, res){

        let body = req.body;
        console.log(body);
        try{
            let createdFilm = await film.create(body);
            res
                .status(201)
                .json(createdFilm);

        }catch{
            console.log("error: no se ha podido crear!");

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

    async updateFilm (req,res){
        try{

        }catch(error){

        }
    }

    //DELETE (borrar datos)

    async deleteFilm (req, res){

    }

}


let filmController = new FilmController;
module.exports = filmController;