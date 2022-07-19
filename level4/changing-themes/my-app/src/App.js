
import Navbar from './Navbar';
import {ThemeContextProvider} from "./themeContext"
import "./App.css"
import Main from "./Main"
import Footer from "./Footer"

function App(props) {

    
    return (
        <div className='container'>
            <ThemeContextProvider>
                <Navbar/>
                <Main/>
                <Footer/>
            </ThemeContextProvider>
        </div>
    );
}

export default App;