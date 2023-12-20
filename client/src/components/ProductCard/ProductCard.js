// // client/src/components/ProductCard/ProductCard.js
// import React from 'react';
// import './ProductCard.css';
//
// const ProductCard = ({ image, brand, description, price }) => {
//     console.log(brand, description)
//     return (
//         <div className="product-card">
//             <img src={image} alt={brand} className="product-image" />
//             <div className="product-info">
//                 <h3 className="product-brand">{brand}</h3>
//                 <p className="product-description">{description.slice(0, 70)}</p>
//                 <p className="product-price">{price}</p>
//             </div>
//         </div>
//     );
// };
//
// export default ProductCard;
//


// // client/src/components/ProductCard/ProductCard.js
// import React from 'react';
// import './ProductCard.css';
//
// const ProductCard = ({ images, brand, description, price }) => {
//     // Используем первую картинку из массива images
//     const imageSrc = images.length > 0 ? images[0] : 'здесь_ваша_заглушка.jpg';
//
//     return (
//         <div className="product-card">
//             <img src={imageSrc} alt={brand} className="product-image" />
//             <div className="product-info">
//                 <h3 className="product-brand">{brand}</h3>
//                 <p className="product-description">{description.slice(0, 70)}</p>
//                 <p className="product-price">{price}</p>
//             </div>
//         </div>
//     );
// };
//
// export default ProductCard;


// client/src/components/ProductCard/ProductCard.js
import React from 'react';
import './ProductCard.css';

const ProductCard = ({ images, brand, description, price }) => {
    return (
        <div className="product-card">
            {images.length > 0 && <img src={images[0]} alt={brand} className="product-image" />}
            <div className="product-info">
                <h3 className="product-title">{brand}</h3>
                <p className="product-description">{description.slice(0, 70)}</p>
                <p className="product-price">{price}</p>
            </div>
        </div>
    );
};

export default ProductCard;
