// // server/controllers/OrderController.js
// const Order = require('./../models/Order');
// const User = require('./../models/User');
//
// const getAllOrders = async (req, res) => {
//     try {
//         const orders = await Order.find().populate('user', 'email');
//         res.json(orders);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Internal server error.' });
//     }
// };
//
// const getOrderById = async (req, res) => {
//     try {
//         const order = await Order.findById(req.params.id).populate('user', 'email');
//         if (!order) {
//             return res.status(404).json({ message: 'Order not found.' });
//         }
//         res.json(order);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Internal server error.' });
//     }
// };
//
// const createOrder = async (req, res) => {
//     try {
//         const { userId, products } = req.body;
//
//         // Валидация userId и products
//
//         const newOrder = new Order({ user: userId, products });
//         await newOrder.save();
//
//         res.status(201).json({ message: 'Order created successfully.' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Internal server error.' });
//     }
//
//
//
//     const checkout = async (req, res) => {
//         try {
//             const { userId } = req.body;
//
//             const user = await User.findById(userId);
//             if (!user) {
//                 return res.status(404).json({ message: 'User not found.' });
//             }
//
//             const order = new Order({
//                 user: userId,
//                 products: user.cart,
//                 total: user.cart.reduce((total, item) => total + item.product.price * item.quantity, 0),
//             });
//
//             await order.save();
//
//             user.cart = [];
//             user.purchaseHistory.push(order._id);
//             await user.save();
//
//             res.json({ message: 'Checkout successful.' });
//         } catch (error) {
//             console.error(error);
//             res.status(500).json({ message: 'Internal server error.' });
//         }
//     };
// };
//
// module.exports = { getAllOrders, getOrderById, createOrder, checkout };




// server/controllers/OrderController.js
const Order = require('./../models/Order');
const User = require('./../models/User');

const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate('user', 'email');
        res.json(orders);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};

const getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id).populate('user', 'email');
        if (!order) {
            return res.status(404).json({ message: 'Order not found.' });
        }
        res.json(order);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};

const createOrder = async (req, res) => {
    try {
        const { userId, products } = req.body;

        // Валидация userId и products

        const newOrder = new Order({ user: userId, products });
        await newOrder.save();

        res.status(201).json({ message: 'Order created successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};

const checkout = async (req, res) => {
    try {
        const { userId } = req.body;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        const order = new Order({
            user: userId,
            products: user.cart,
            total: user.cart.reduce((total, item) => total + item.product.price * item.quantity, 0),
        });

        await order.save();

        user.cart = [];
        user.purchaseHistory.push(order._id);
        await user.save();

        res.json({ message: 'Checkout successful.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};


const updateOrderStatus = async (req, res) => {
    try {
        const { orderId, newStatus } = req.body;

        const order = await Order.findByIdAndUpdate(orderId, { status: newStatus }, { new: true });
        if (!order) {
            return res.status(404).json({ message: 'Order not found.' });
        }

        res.json({ message: 'Order status updated successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};


module.exports = { getAllOrders, getOrderById, createOrder, checkout, updateOrderStatus };
