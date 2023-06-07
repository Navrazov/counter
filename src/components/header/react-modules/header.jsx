import React from "react";
import Logo from "./logo";
import Menu from "./menu";
import '../css-modules/style-header.css'

const Header = () => {
    return <div className="header">
        <Logo />
        <Menu />
    </div>
}

export default Header;