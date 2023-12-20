import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import ProductList from "./components/ProductList/ProductList";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// const Home = () => <div>Home</div>;

function App() {

    // Предположим, у вас есть стейт для хранения списка товаров
    const [products, setProducts] = useState([]);

    // Используйте useEffect для получения данных с сервера
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:5500/api/products');
                const data = await response.json();
                setProducts(data);
                console.log(data)
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []); // Пустой массив зависимостей гарантирует вызов useEffect только после монтирования компонента


    return (
        <Router>
            <div>
                <Header />
                <Sidebar />
                <Switch>


                        <ProductList products={products} />

                </Switch>
            </div>
        </Router>
    );
}

export default App;


