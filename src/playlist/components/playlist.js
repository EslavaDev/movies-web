import React from 'react'
import Media from './media';
import './playlist.css';

/*
*componente funcional es elq ue no maneja ciclo de vida
*/
function Playlist(props) {
    console.log(props.data)
    return (
        <div>
            {
                props.playlist.map((interno) => {
                    return (
                        <Media {...interno} key={interno.id} />
                    )

                })

            }
        </div>
    )
}

export default Playlist;