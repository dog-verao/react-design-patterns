import React, { useContext } from 'react';
import New from './New';
import NewsProvider, { NewsContext } from './NewsContext';

//Not the best naming convention, but I want to keep App.js with only a List component
const StatefulList = () => {
    const news = useContext(NewsContext); 
    return <>{news && news.hits && news.hits.map((hit, i) => <StatefulList.New info={hit} key={i}/>)}</>
}

StatefulList.New = New;

const List = () => {
    return (
        <NewsProvider>
            <StatefulList/>
        </NewsProvider>
    )
}


export default List;