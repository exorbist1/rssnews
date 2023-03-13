import React from "react";

const Card = (props) => {
    const { articles } = props;
    if (!articles || articles.length === 0) return <p>No articles, sorry</p>;
    return(
        articles.map((prop) => {
            return(
                <div className="card">
                    <span>
                        <a href={prop.url}><img src= {prop.urlToImage} alt = "img" className="card--image"/></a>
                    </span>
                    <span className="card--text">
                        
                        <p className="card--title">{prop.title}</p>
                        <p className="card--description">{prop.description}</p>
                        <p className="card--author">{prop.source.name}</p>
                    </span>
                </div>
            );
        })
    );
};

export default Card;