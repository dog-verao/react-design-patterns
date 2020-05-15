import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';


export const NewsContext = createContext([])

const NewsProvider = ({children}) => {
    const [ news, setNews ] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            const results = await axios('https://hn.algolia.com/api/v1/search?query=redux');
            setNews(results.data);
        }
        fetchNews();
    }, []);
    console.log(news)
    return (
        <NewsContext.Provider value={news}>
            {children}
        </NewsContext.Provider>
    )
}

export default NewsProvider;