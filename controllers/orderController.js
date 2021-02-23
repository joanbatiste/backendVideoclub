const mongoose = require("mongoose");

const Order = require("../models/orderModel");

class OrderController {

    constructor(){

    }
    //CRUD Methods for orders

    //Create New Order
    async createOrder(req, res){
        const body = req.body;
        console.log(body);
        try{
            let order = new Order(body);
            console.log("Quiero crear un pedido", order);
            let createdOrder = await order.save();
            
            res
            .status(200)
            .json(createdOrder);

        }catch{
            res
            .status(500)
            console.log("error: no se ha podido crear la orden");

        }
    };

};


let orderController = new OrderController;
module.exports = orderController;