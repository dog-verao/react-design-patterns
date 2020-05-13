import React from 'react';
import New from './../New';
import {WithFetchedData} from './WithFetchedData';

const ListWrapper = ({data}) => {
    return (
        <div className="container">
            <div className="columns is-multiline">
                {data && data.hits && data.hits.map((hit, i) => <New info={hit} key={i}/>)}
            </div>
        </div>
    )
}

export const List = WithFetchedData(ListWrapper);