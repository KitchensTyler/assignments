import './App.css'
import React from "react"
import Header from "./components/Header"
import Meme from "./components/Meme"
import MemeList from "./components/MemeList"


/**
 * Challenge: Build the Header component
 */
export default function App() {
    return (
        <div>
            <Header />
            <Meme />
            {/* <Joey /> */}
        </div>
    )
}