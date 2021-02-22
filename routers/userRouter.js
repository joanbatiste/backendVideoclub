const router = require("express").Router();

//Requerimos el controlador
const userController = require("../controllers/userController");

//ENDPOINTS CREATION

//Save User Endpoint
router.post("/", userController.createUser);

module.exports = router;