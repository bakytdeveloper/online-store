// server/models/ProductModel.js
const mongoose = require('mongoose');

const characteristicSchema = new mongoose.Schema({
    name: { type: String, required: true },
    value: { type: String, required: true },
});

const productSchema = new mongoose.Schema({
    direction: { type: String, required: true },
    type: { type: String, required: true },
    brand: { type: String, required: true },
    images: [{ type: String }],
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    characteristics: [characteristicSchema],
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;




// {
//     "direction": "Гаджет",
//     "type": "iPhone",
//     "brand": "Apple",
//     "images": ["https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61jLiCovxVL._AC_SX679_.jpg",
//     "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71zwao302EL._AC_SX679_.jpg",
//     "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81DzfVDR-lL._AC_SX679_.jpg",
//     "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/7161nwSVX9L._AC_SX679_.jpg",
//     "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81--JfmMOIL._AC_SX679_.jpg"],
//     "name": "iPhone 13 Pro",
//     "description": "iPhone 13 Pro, 256 ГБ, графитовый — разблокирован (обновленный премиум-версия).",
//     "price": 709.99,
//     "characteristics": [
//     { "name": "Беспроводной оператор", "value": "Разблокировано для всех операторов связи" },
//     { "name": "Операционная система", "value": "iOS 16" },
//     { "name": "Клеточные технологии", "value": "5G" },
//     { "name": "Емкость памяти", "value": "256 ГБ" }
// ]
// }
