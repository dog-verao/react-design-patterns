import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const WithFetchedData = WrappedComponent => 
    function Comp(props) {
        const [ news, setNews ] = useState([]);
        useEffect(() => {
            const fetchData = async () => {
                const result = await axios('https://hn.algolia.com/api/v1/search?query=redux');
                setNews(result.data)
            }
            fetchData();
        }, [])
        return (
            <WrappedComponent {...props} data={news} />
        )
    }
