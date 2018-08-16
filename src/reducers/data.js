import api from '../schemas/index.js';
import {SEARCH_ENTITIES} from '../types';
import {fromJS} from 'immutable';
const initialState = fromJS({
        //...data,
        entities: api.entities,
        categories: api.result.categories,
        search: []
    
})

 const data = (state=initialState, action) => {
  switch (action.type) {

  case SEARCH_ENTITIES:{
      //action.payload.query
      

/*      const list = []
      if(action.payload.query){
          state.data.categories.map((category)=>{
              return category.playlist.filter((item)=>{
                  return item.get('author').toLowerCase().includes(action.payload.query.toLowerCase()) || item.get('title').toLowerCase().includes(search.toLowerCase()) && list.push(item) 
              })
          })
      }
    return { ...state,
                search:list
            }*/

            return state.set( 'search', action.payload.query )
  }
  default:
    return state
  }
}
export default data;