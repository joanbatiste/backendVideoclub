const mongoose = require("mongoose");

const film = require("../models/filmModel");


class FilmController {

    constructor() {

    }
    //Métodos CRUD

    //CREATE (dar un alta)
    async createFilm(req, res){

        const body = req.body;
        console.log(body);
        try{
            let createdFilm = await film.create(body);
            res
                .status(200)
                .json(createdFilm);

        }catch{
            console.log("error: no se ha podido crear!");

        }
        
    };

    //READ (traer todas las pelis)
    async  bringFilms(req, res){

        try{
            let filmCollection = await film.find();
            res
                .status(200)
                .json(filmCollection);

        }catch(error){
            console.log(error)
        }
    };

    //Traer Una peli por ID
    async bringOneFilm(req, res){
        const _id = req.params.id;
        try{
            const onefilm = await film.findOne({_id});
            res
                .status(500)
                .json(onefilm);
        }catch (err){
            res
                .status(400)
                .json({
                    message: err
                })
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
        const _id = req.params.id;
        try{
            const removedFilm = await film.findByIdAndDelete({_id});
            if(!removedFilm){
                return res.status(404).json({
                    message: err
                })
            }
            res.json(removedFilm)
        }catch(err){
            res
                .status(400)
                .json({
                    message: err
                })
        }
    }

}


let filmController = new FilmController;
module.exports = filmController;