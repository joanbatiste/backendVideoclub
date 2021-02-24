const router = require("express").Router();

//Requerimos el controlador
const userController = require("../controllers/userController");

//ENDPOINTS CREATION

//Save User Endpoint
router.post("/", userController.createUser);

//Get all user endpoint
router.get("/allUsers", userController.bringUsers);

//Get one user endpoint
router.get("/oneUser/:id", userController.bringOneUser);



//Update user data endpoint
router.put("/updateUser/:id", userController.updateUser);

//Delete user
router.delete("/deleteUser/:id", userController.deleteUser);

module.exports = router;