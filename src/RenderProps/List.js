import React from 'react';
import DataFetcher from './DataFetcher';
import New from './../New';

const List = () => {
    return (
        <div className="container">
            <DataFetcher>
                {({news}) => (
                    <div className="columns is-multiline">
                        {news && news.hits && news.hits.map((hit, i) => <New info={hit} key={i}/>)}
                    </div>
                )}
            </DataFetcher>
        </div>
    )
}

export default List;
