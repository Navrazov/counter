import React from "react";
import "../css-modules/style.footerMenu.css"

const FooterMenu = () => {
    return  <ul className="footerList">
            <li>
        <a href="#" className="forPartner">Партнерам</a>
        </li>
        <li>
        <a href="#" className="forDevelopers">Разработчикам</a>
        </li>
        <li>
        <a href="#" className="vacansy">Вакансии</a>
        </li>
        </ul>
}

export default FooterMenu;