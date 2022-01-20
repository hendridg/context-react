import React, {Component} from "react"
// const ThemeContext = React.createContext()
// descomponemos el objeto ThemeContext
const {Provider, Consumer} = React.createContext()


class ThemeContextProvider extends Component {

    state = {theme: "dark"}

    toggleTheme = () => {
        this.setState((prev) => {
            return {
               theme: prev.theme === "light" ? "dark" : "light"
            }
        } )
        
    }
    render() {
        return(
            <Provider value={{theme:this.state.theme, toggleTheme:this.toggleTheme}}>
                {this.props.children} 
            </Provider>
        )        
    }

}



export {ThemeContextProvider, Consumer as ThemeContextConsumer}