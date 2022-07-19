import React, {useContext} from 'react'
import {ThemeContext} from "./themeContext"

function Main(props) {
    const {color, toggleTheme} = useContext(ThemeContext)
    return (
        <div className={`${color}-theme`}>
        <div className="main">
            <h1>Press the button to toggle themes!</h1>
            <h3>You are currently using {color} mode</h3>
            <button onClick={toggleTheme} className={`${color}-button`}>Change Theme</button>
        </div>
        </div>
    )
}
export default Main