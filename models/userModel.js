//Requerimos todo lo necesario de la librería mongoose para crear el modelo de usuario

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new Schema({

    id: {
        type: ObjectId
    },
    name: {
        type: String
    },
    surname: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    direction: {
        type: String
    },
    payment: {
        type: String
    },
});

const User = mongoose.model("User", userSchema);
module.exports = User;

