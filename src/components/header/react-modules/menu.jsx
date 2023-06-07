import React from "react";
import "../css-modules/style.menu.css"

const Menu = () => {
    return <nav className="menu">
        <ul className="menuList">
        <li className="first">
        <a href="#">Главная</a>
        </li>
        <li className="second">
        <a href="#">О нас</a>
        </li>
        <li className="thirth">
        <a href="#">Контакты</a>
        </li>
        </ul>
    </nav>
}

export default Menu;