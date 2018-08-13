import React from 'react'
import Category from './Category'
import './Categories.css';
import Search from '../../widgets/containers/Search';
import Media from '../../playlist/components/media';
const Categories = (props) => {
  return (
    <div className="Categories">
      <Search />
      {
        props.search.map(item =>{
          return (
            <Media 
            key={item.id}
              {...item}
            />)
        })
      }
      {
          props.categories.map(item => {
              return( 
                <Category 
                  handleOpenModal={props.handleOpenModal}
                  key={item.id} 
                  {...item}
                />
              )
          })
      }
    </div>
  )
}

export default Categories
