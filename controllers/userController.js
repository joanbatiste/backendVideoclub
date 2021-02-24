const mongoose = require("mongoose");

const Order = require("../models/orderModel");

const User = require("../models/userModel");

class UserController {

    constructor() {

    }

    // CRUD Methods for users

    //Create New User
    async createUser(req, res){

        const body = req.body;
        
        try{
            let user = new User(body);
            
            let createdUser = await user.save();
            

            res
            .status(200)
            .json(createdUser);

        }catch{
            res
            .status(500)
            console.log("error: no se ha podido crear el usuario");

        }
    };

    //Traere todos los usuarios
    async  bringUsers(req, res){

        try{
            let userCollection = await User.find();
            res
            .status(200)
            .json(userCollection);

        }catch(error){
            console.log(error)
        }
    };
    //Traer un sólo usuario
    async bringOneUser(req, res){
        const _id = req.params.id;
        console.log(_id);
        try{
            const oneUser = await User.findById(_id);
            res
                .status(200)
                .json(oneUser);
        }catch (err){
            res
                .status(400)
                .json({
                    message: err
                })
        }

    };

    //Modificar datos usuario
    async updateUser (req,res){
        const _id = req.params.id;
        const body = req.body;

        try{
            const updateUser = await User.findByIdAndUpdate(_id, body,{new: true});
            if(!updateUser){
                return res.status(404).json({
                    message: err
                })
            }
            res
            .status(200)
            .json(updateUser)

        }catch(error){
            res
            .status(500)
            .json({
                message: err
            })
        }
    };

    //Borrar usuario
    async deleteUser (req, res){
        const _id = req.params.id;
        try{
            const removedUser = await User.findByIdAndDelete(_id);
            if(!removedUser){
                return res.status(404).json({
                    message: err
                })
            }
            res.json(removedUser)
        }catch(err){
            res
                .status(400)
                .json({
                    message: err
                })
        }
    };

    

};



let userController = new UserController;
module.exports = userController;