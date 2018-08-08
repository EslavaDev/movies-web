import React from 'react'
import Category from './Category'
import './Categories.css';
import Search from '../../widgets/containers/Search';
const Categories = (props) => {
  return (
    <div className="Categories">
      <Search />
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
