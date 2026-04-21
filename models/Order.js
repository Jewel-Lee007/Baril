const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderId: { type: String, required: true },
    products: { type: [String], required: true },
    totalPrice: { type: Number, required: true },
    customerInfo: {
        name: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true }
    },
    address: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        zip: { type: String, required: true }
    },
    paymentStatus: { type: String, enum: ['Pending', 'Completed', 'Failed'], required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;