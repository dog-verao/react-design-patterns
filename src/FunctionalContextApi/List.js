import React, { useContext } from 'react';
import NewsProvider, { NewsContext } from './NewsProvider';
import New from './../New';


const InnerList = () => {
    const news = useContext(NewsContext); 
    return <>{news && news.hits && news.hits.map((hit, i) => <New info={hit} key={i}/>)}</>
}

//There's no need to create a new component only to encapsulate the provider, I just wanted to have only one List component on App.js.
const List = () => (
    <NewsProvider>
        <InnerList/>
    </NewsProvider>
)


export default List;