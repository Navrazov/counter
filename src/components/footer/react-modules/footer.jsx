import React from "react";
import FooterLogo from "./footerLogo";
import FooterMenu from "./footerMenu";
import FooterCopyright from "./footerCopyright";
import "../css-modules/style.footer.css"

const Footer = () => {
    return <div className="footer">
        <FooterLogo />
        <FooterMenu />
        <FooterCopyright />
    </div>
}

export default Footer;