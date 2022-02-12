import React from "react";
import "./TopPicks.css"
import Character from "./Character";

export default function TopPicks() {

    const [characters, setCharacters] = React.useState([])

    React.useEffect(() => {
        fetch("https://www.breakingbadapi.com/api/characters")
            .then(res => res.json())
            .then(data => setCharacters(data));
    }, [])

    const cards = characters.map(item => {
        return (
            <Character
                id={item.char_id}
                {...item}
            />
        )
    })

    return (
        <div>
            <h1 className="center-text">the GANG!!</h1>
            <div className="top-picks-wrapper">
                {cards[0]}
                {cards[1]}
                {cards[2]}
                {cards[3]}
                {cards[4]}
                {cards[5]}
            </div>
        </div>

    )
}