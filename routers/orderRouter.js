const router = require("express").Router();

//Requerimos el controlador
const orderController = require("../controllers/orderController");

//ENDPOINTS CREATION

//Save Order Endpoint
router.post("/", orderController.createOrder);

//Get all endpoint
router.get("/allOrders", orderController.bringOrders);

//Get one order endpoint
router.get("/oneOrder/:id", orderController.bringOneOrder);

//Update order data endpoint
router.put("/updateOrder/:id", orderController.updateOrder);

//Delete order
router.delete("/deleteOrder/:id", orderController.deleteOrder);

module.exports = router;