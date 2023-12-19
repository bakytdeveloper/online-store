// client/src/components/Header/Header.js
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import ins from "./instagram.png"
import tel from "./telegram.png"
import what from "./whatsapp.png"
import tik from "./tik-tok.png"

import './Header.css';

const Header = () => {
    const history = useHistory();


    const handleTitleClick = () => {
        // Очищаем поле поиска и перезагружаем страницу при клике на заголовок
        history.push('/');
        window.location.reload(); // Это перезагрузит страницу
    };


    return (
        <header className="header">
            <div className="left-section">
                <Link to="/" className="site-name" onClick={handleTitleClick}>
                    <h1 className="site-name"> Tech <span className="sp">Store</span></h1>
                </Link>
                <div className="social-icons">
                    <a className="icon"  href="https://www.instagram.com/оfficial_instagram_account" target="_blank" rel="noopener noreferrer">
                        <img src={ins} alt="Instagram" />
                    </a>
                    <a className="icon"  href="https://www.whatsapp.com/оfficial_whatsapp_account" target="_blank" rel="noopener noreferrer">
                        <img src={what} alt="WhatsApp" />
                    </a>
                </div>
                <a className="phone-number" href="tel:+996312517582">XXX-XX-XX-XX</a>
                <div className="social-icons">
                    <a className="icon"  href="https://www.tiktok.com/оfficial_tiktok_account" target="_blank" rel="noopener noreferrer">
                        <img src={tik} alt="TikTok" />
                    </a>
                    <a className="icon"  href="https://www.telegram.org/оfficial_telegram_account" target="_blank" rel="noopener noreferrer">
                        <img src={tel} alt="Telegram" />
                    </a>
                </div>
            </div>
            <div className="right">
                <input type="text" placeholder="Поиск" className="search-bar" />
                <Link to="/login" className="login-button">Логин</Link>
            </div>
        </header>
    );
};

export default Header;
