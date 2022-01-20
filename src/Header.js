import React, {Component} from "react"
import {ThemeContextConsumer} from "./themeContext"
import ramdoncolor from "ramdoncolor"


// class Header extends Component {
//     // le metemos el contexto al tipo de contexto del header
//     static contextType = ThemeContextConsumer  
      
//     render() {
//         let {theme} = this.context
//         console.log(`${theme} en el Header ${toggleTheme}`)
//         return (
//             <header className={`${theme}-theme`}>
//                 <h2>{theme === "light" ? "Light" : "Dark"} Theme</h2>
//             </header>
//         )
//     }
// }

// // Otra forma de meter el contexto al Header
// Header.contextType = ThemeContextConsumer

// asi lo llamariamos con this.context


function Header(){
    return (
        <ThemeContextConsumer>
            {({theme}) => (
                <header className={`${theme}-theme`}>
                    <h2>{theme === "light" ? "Light" : "Dark"} Theme</h2>
                </header> 
            )}
        </ThemeContextConsumer>
               
    )
}

export default Header





