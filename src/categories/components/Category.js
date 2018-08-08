import React from 'react'
import './category.css'
import Playlist from '../../playlist/components/playlist';
const Category = (props) => {
    return (
        <div className="Category">

            <h2 className="Category-title">{props.title}</h2>
            <p className="Category-description">{props.description}</p>
            <Playlist
                handleOpenModal={props.handleOpenModal} 
                playlist={props.playlist}
            />
            <br/>
            <br/>
        </div>
    )
}


export default Category;
