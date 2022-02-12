import React from "react";
import "./Header.css"

export default function Header() {
    
    return (
        <header id="main-header">
            <h2>
                THE BREAKING BAD
            </h2>
            <nav>
                <ul id="navbar">
                    <li><a href="https://en.wikipedia.org/wiki/Breaking_Bad">Wikipedia</a></li>
                    <li><a href="https://www.imdb.com/title/tt0903747/">IMDB</a></li>
                </ul>
            </nav>
        </header>
    )
}