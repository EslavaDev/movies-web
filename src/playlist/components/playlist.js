import React from 'react'
import MediaContainer from '../containers/Media';
import './playlist.css';

/*
*componente funcional es elq ue no maneja ciclo de vida
*/
function Playlist(props) {
    console.log(props.data)
    return (
        <div className='Playlist'>
            {
                props.playlist.map((interno) => {
                    return (
                        <MediaContainer 
                            openModal={props.handleOpenModal}
                            id={interno} key={interno} />
                    )

                })

            }
        </div>
    )
}

export default Playlist;