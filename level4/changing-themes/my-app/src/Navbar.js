import React, {useContext} from 'react'
import {ThemeContext} from "./themeContext"

function Navbar(props) {
    const {color} = useContext(ThemeContext)
    return (
        <div className={`${color}-theme`}>
        <div className="topnav">
            <a class="active" href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
        </div>
        </div>
    )
}
export default Navbar