import React from "react";


export default function Articles (props){
    return (
        
        <section className="articles"> 
            <div className="single-article">
                <div className="Article-image">
                    <img src={props.image} alt="currencies" />
                </div>

                <div className="article-author">
                    <p>{props.author}</p>
                </div>

                <div className="article-title">
                    <h4>{props.title}</h4>
                </div>

                <div className="article-passage">
                    <p>{props.passage}</p>
                </div>
            </div>

        </section>
    )
}