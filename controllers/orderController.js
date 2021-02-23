const mongoose = require("mongoose");

const User = require("../models/orderModel");

class OrderController {

    constructor(){

    }
    //CRUD Methods for orders

    //Create New Order
    async createOrder(req, res){
        const body = req.body;
        
        try{
            let user = new Order(body);
            let createdOrder = await user.save();
            
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