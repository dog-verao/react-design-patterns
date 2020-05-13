import React, { useState, useEffect } from 'react';
import axios from 'axios';


const DataFetcher = ({children}) => {
    const [ news, setNews ] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('https://hn.algolia.com/api/v1/search?query=redux')
            setNews(result.data);
        }
        fetchData();
    }, []);
    
    return React.createElement(children, {news}) ;
}
 
export default DataFetcher;