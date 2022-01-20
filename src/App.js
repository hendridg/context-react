import Reac from "react"
import Header from "./Header"
import Button from "./Button"
import {ThemeContextConsumer} from "./themeContext"


function App() {
  return (
    <div>
      {/* Aqui es cuando usamos las clases */}
      {/* <ThemeContextConsumer>
        {({theme}) => (
          <Header theme={theme}/>
        )}        
      </ThemeContextConsumer> */}
      <Header />
      <ThemeContextConsumer>
        {({theme, toggleTheme}) => (
          <Button onClick={toggleTheme} theme={theme}/>          
        )}
      </ThemeContextConsumer>      
    </div>      
  );
}

export default App;
