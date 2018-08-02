import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Media from './media';
import './playlist.css';
class Playlist extends Component {

    render(){
        console.log(this.props.data)
        const playlist = this.props.data.categories

        return(
            <div>
            {
                playlist.map((item)=>{
                    return (<div className="Playlist" key={item.id}>
                        {item.playlist.map((interno)=>{
                            return(
                                <Media {...interno} key={interno.id}/>
                            )
    
                        })}
                        </div>)
                })
            }
            </div>
        )   
    }
}

export default Playlist;