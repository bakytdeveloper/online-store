// server/models/UserModel.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['client', 'guest', 'admin'], default: 'guest' },
    cart: [{
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
        quantity: { type: Number, default: 1 },
    }],
    purchaseHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
