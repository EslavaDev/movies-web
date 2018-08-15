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
            key={item.get('id')}
              {...item.toJS()}
            />)
        })
      }
      {
          props.categories.map(item => {
              return( 
                <Category 
                  handleOpenModal={props.handleOpenModal}
                  key={item.get('id')}
                  {...item.toJS()}
                />
              )
          })
      }
    </div>
  )
}

export default Categories;
