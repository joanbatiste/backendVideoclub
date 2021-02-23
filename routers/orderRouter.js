const router = require("express").Router();

//Requerimos el controlador
const orderController = require("../controllers/orderController");

//ENDPOINTS CREATION

//Save Orer Endpoint
router.post("/", orderController.createOrder);




module.exports = router;