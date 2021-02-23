const { query } = require("express");
const mongoose = require("mongoose");
const { create } = require("../models/filmModel");

const Film = require("../models/filmModel");


class FilmController {

    constructor() {

    }
    //Métodos CRUD

    //CREATE (dar un alta)
    async createFilm(req, res){

        const body = req.body;
        // console.log(body);
        try{
            
            let film = new Film(body);
            let createdFilm = await film.save();

            res
            .status(200)
            .json(createdFilm);

        }catch{
            res
            .status(500)
            console.log("error: no se ha podido crear!");

        }
        
    };

    //READ (traer todas las pelis)
    async  bringFilms(req, res){

        try{
            let filmCollection = await Film.find();
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
        console.log(_id);
        try{
            const onefilm = await Film.findById(_id);
            res
                .status(200)
                .json(onefilm);
        }catch (err){
            res
                .status(400)
                .json({
                    message: err
                })
        }

    };
    //Traer una peli por titulo
    async searchOneFilm(req, res,){
        const title = req.params.title;
        
        try{
            const titlefilm = await Film.findOne({"title": title});
            res
                .status(200)
                .json(titlefilm);
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
        const _id = req.params.id;
        const body = req.body;

        try{
            const updateFilm = await Film.findByIdAndUpdate(_id, body,{new: true});
            if(!updateFilm){
                return res.status(404).json({
                    message: err
                })
            }
            res
            .status(200)
            .json(updateFilm)

        }catch(error){
            res
            .status(500)
            .json({
                message: err
            })
        }
    };

    //DELETE (borrar datos)

    async deleteFilm (req, res){
        const _id = req.params.id;
        try{
            const removedFilm = await Film.findByIdAndDelete(_id);
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
    };

};


let filmController = new FilmController;
module.exports = filmController;