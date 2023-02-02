const Product = require('../models/productModel')

exports.createProduct = async (req, res, next) => {
    try {
        const product = await Product.create(req.body)
        return res.status(200).json(product)
    } catch (error) {
        return res.status(500).json({ msg: error.message || 'Something went wrong' })
    }
}

exports.updateProduct = async (req, res, next) => {
    const { id } = req.params
    try {
        const product = await Product.findByIdAndUpdate(id, req.body, {
            new: true, runValidators: true
        })
        if (!product) return res.status(404).json({ msg: "Product not found" })
        return res.status(200).json(product)
    } catch (error) {
        return res.status(500).json({ msg: error.message || 'Something went wrong' })
    }
}
exports.deleteProduct = async (req, res, next) => {
    
}
exports.getProduct = async (req, res, next) => {
    
}

exports.getProducts = async (req, res, next) => {
    
}

