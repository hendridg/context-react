import React from "react"
// import ThemeContext from "./themeContext"
// import PropTypes from "prop-types"

function Button(props) {
    
    return (
        <button onClick={props.onClick} className={`${props.theme}-theme`}>Switch Theme</button>       
    )    
}

// Aqui colocamos el prototipo de propiedades aceptadas por el Button
// Button.prototype = {
//     theme: PropTypes.oneOf(["light", "dark"])
   
// }

// Button.defaultProps = {
//     theme: "light"
// }

export default Button