const Order = require('../models/orderModel')

exports.createOrder = async (req, res, next) => {
    try {
        const order = await Order.create({ ...req.body, userId: req.user.id })
        return res.status(201).json(order)
    } catch (error) {
        return res.status(500).json({ msg: error.message || 'Something went wrong' })
    }
}

exports.getUserOrders = async (req, res, next) => {
    try {
        const orders = await Order.find({ userId: req.user.id })
        return res.status(200).json(orders)
    } catch (error) {
        return res.status(500).json({ msg: error.message || 'Something went wrong' })
    }
}

exports.getAllOrders = async (req, res, next) => {
    try {
        const orders = await Order.find({})
        return res.status(200).json(orders)
    } catch (error) {
        return res.status(500).json({ msg: error.message || 'Something went wrong' })
    }
}

// TODO: Get monthly income
// TODO: Update orders