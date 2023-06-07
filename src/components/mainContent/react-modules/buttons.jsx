import React from "react";
import "../css-modules/style.buttons.css"

const Buttons = () => {
    return <div className="buttons">
        <button className="increase">Увеличить</button>
        <button className="decrease">Уменьшить</button>
        <button className="reset">Сбросить</button>
    </div>
}


export default Buttons;