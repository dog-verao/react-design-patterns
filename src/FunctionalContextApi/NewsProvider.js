import React, { useState, useEffect }  from 'react';
import axios from 'axios';

export const NewsContext = React.createContext({});

const NewsProvider = (props) => {
    const [ news, setNews ] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            const results = await axios('https://hn.algolia.com/api/v1/search?query=redux');
            setNews(results.data);
        }
        fetchNews();
    }, []);
    return ( 
        <NewsContext.Provider value={news}>
            {props.children}
        </NewsContext.Provider>
     );
}

export default NewsProvider;