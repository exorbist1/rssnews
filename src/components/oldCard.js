import React from "react";

export default function Card(props) {
    return(
        <div className="card">
            <span>
                <a href={props.url}><img src= {props.img} alt = "img" className="card--image"/></a>
            </span>
            <span className="card--text">
                
                <p className="card--title">{props.title}</p>
                <p className="card--description">{props.description}</p>
                <p className="card--author">{props.author}</p>
            </span>
        </div>
    )
}