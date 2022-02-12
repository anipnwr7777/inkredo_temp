import React from "react";
import "./Character.css";


export default function Character(props) {

    const arrayAppearance = props.appearance.toString();

    return (
        <div className = "card--wrapper">
            <img src={props.img} className = "card--main-image" alt=""/>
            
            <p className="card--desc">Name: <span className="bold">{props.nickname}</span></p>
            <p>Status: {props.status}</p>
            <p>Appearances: {arrayAppearance}</p>
        </div>
    )
}