

const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const userRoutes = require('./routes/userRoutes'); // создайте файл routes/userRoutes.js
const productRoutes = require('./routes/productRoutes'); // создайте файл routes/productRoutes.js
const orderRoutes = require('./routes/orderRoutes'); // создайте файл routes/orderRoutes.js
const adminRoutes = require('./routes/adminRoutes');


const app = express();
const PORT = process.env.PORT || 5500;

// Подключение к MongoDB
mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('БАЗА ДАННЫХ ПОДКЛЮЧЕННА И РАБОТАЕТ БЕЗ ПРОБЛЕМ !!!');
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Роуты (пока не созданы)
// Подключение маршрутов
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/admin', adminRoutes);



// Запуск сервера
app.listen(PORT, () => {
    console.log(`СЕРВЕР РАБОТАЕТ НА ${PORT} ПОРТУ !!!`);
});
