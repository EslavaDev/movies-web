/*import data from '../api.json';

const initialState = {
    data: {...data,
    },
    search: []
}*/

 const Data = (state, action) => {
  switch (action.type) {

  case 'SEARCH_VIDEO':{
      //action.payload.query
      

      const list = []
      if(action.payload.query){
          state.data.categories.map((category)=>{
              return category.playlist.filter((item)=>{
                  return item.author.toLowerCase().includes(action.payload.query.toLowerCase()) && list.push(item) 
              })
          })
      }
    return { ...state,
                search:list
            }
  }
  default:
    return state
  }
}
export default Data;