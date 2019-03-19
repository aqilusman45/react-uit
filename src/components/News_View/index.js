import React from 'react';

import './styles.css'

export const NewsView = ({location}) =>{
    const newsItem = location.state;
    return(
        <div className="news-blog">
            <h1>{newsItem.title}</h1>
            <div>
                <p>{newsItem.author}</p>
                <p>{newsItem.source.name}</p>
                <p>{newsItem.publishedAt}</p>
            </div>
            <div className="blog-image">
            <img alt={newsItem.title} src={newsItem.urlToImage}/>
            </div>
            <div>
                <p>{newsItem.description}</p>
                <p>
                    {newsItem.content}
                    <a href={newsItem.url}>Continue to site...</a>
                </p>
            </div>
        </div>
    )
}
