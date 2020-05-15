import React from 'react';

const New = ({info}) => {
    const getRandomImageId = Math.floor(Math.random() * 30);
    return ( 
        <div className="column">
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                    <img src={`https://picsum.photos/id/${getRandomImageId}/1280/960?random=1`} alt="Placeholder 1" />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                    <div className="media-left">
                        <figure className="image is-48x48">
                        <img src={`https://picsum.photos/id/${getRandomImageId}/96/96?random=1`} at="Placeholder 2" />
                        </figure>
                    </div>
                    <div className="media-content">
                        <p className="title is-4">{info.title}</p>
                        <p className="subtitle is-6">{info.author}</p>
                    </div>
                </div>
                <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                    <a href={info.url}>{info.url}</a>
                    <br />
                    <time dateTime="2016-1-1">{info.created_at}</time>
                </div>
            </div>
        </div>
    </div>);
}
 
export default New;