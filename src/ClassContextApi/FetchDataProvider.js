import React, { Component } from 'react';
import axios from 'axios';

export const NewsContext = React.createContext();

class DataFetcherProvider extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: []
         }
    }

    async componentDidMount() {
        const results = await axios('https://hn.algolia.com/api/v1/search?query=redux');
        this.setState({data: results.data});
    }

    render() {
        const { data } = this.state;
        return ( 
            <NewsContext.Provider value={data}>
                {this.props.children}
            </NewsContext.Provider>
        );
    }
}

export default DataFetcherProvider;