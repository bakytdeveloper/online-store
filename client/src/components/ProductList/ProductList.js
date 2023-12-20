// client/src/components/ProductList/ProductList.js
import React from 'react';
import ProductCard from './../ProductCard/ProductCard';
import './ProductList.css';

const ProductList = ({ products }) => {
    return (
        <div className="product-list">
            {products.map(product => (
                <ProductCard
                    key={product.id}
                    images={product.images || []}
                    brand={product.brand}
                    description={product.description}
                    price={product.price}
                />
            ))}
        </div>
    );
};

export default ProductList;
