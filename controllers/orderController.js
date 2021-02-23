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
    
    //READ (traer todas las ordenes)
    async  bringOrders(req, res){

        try{
            let orderCollection = await Order.find();
            res
            .status(200)
            .json(orderCollection);

        }catch(error){
            console.log(error)
        }
    };
    
    //Traer Una orden por ID
    async bringOneOrder(req, res){
        const _id = req.params.id;
        console.log(_id);
        try{
            const oneorder = await Order.findById(_id);
            res
                .status(200)
                .json(oneorder);
        }catch (err){
            res
                .status(400)
                .json({
                    message: err
                })
        }

    };

    //UPDATE (modificar datos orde)

    async updateOrder (req,res){
        const _id = req.params.id;
        const body = req.body;

        try{
            const updateOrder = await Order.findByIdAndUpdate(_id, body,{new: true});
            if(!updateOrder){
                return res.status(404).json({
                    message: err
                })
            }
            res
            .status(200)
            .json(updateOrder)

        }catch(error){
            res
            .status(500)
            .json({
                message: err
            })
        }
    };

    //Delete Order

    async deleteOrder (req, res){
        const _id = req.params.id;
        try{
            const removedOrder = await Order.findByIdAndDelete(_id);
            if(!removedOrder){
                return res.status(404).json({
                    message: err
                })
            }
            res.json(removedOrder)
        }catch(err){
            res
                .status(400)
                .json({
                    message: err
                })
        }
    };
    
};


let orderController = new OrderController;
module.exports = orderController;