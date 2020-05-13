import React, {Component} from 'react';
import DataFetcherProvider, {NewsContext} from './FetchDataProvider';
import New from './../New';

class List extends Component {
    state = {  }
    render() { 
        return (
            <DataFetcherProvider>
                <NewsContext.Consumer>
                    {(context) => (
                        context && context.hits && context.hits.map((hit, i) => <New info={hit} key={i}/>)
                    )}
                </NewsContext.Consumer>
            </DataFetcherProvider>
         );
    }
}
 
 
export default List;