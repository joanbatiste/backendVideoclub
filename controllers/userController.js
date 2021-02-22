const mongoose = require("mongoose");
const { create } = require("../models/userModel");

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
            console.log(body);
            let createdUser = await user.save();
            console.log(createdUser);

            res
            .status(200)
            .json(createdUser);

        }catch{
            res
            .status(500)
            console.log("error: no se ha podido crear el usuario");

        }
    };
};

let userController = new UserController;
module.exports = userController;