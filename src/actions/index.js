
import { OPEN_MODAL, IS_LOADING, CLOSE_MODAL, SEARCH_ENTITIES, SEARCH_ASYNC_ENTITIES } from '../types';

export const openModal = (mediaId) => ({
  type: OPEN_MODAL,
  payload: {
    mediaId
  }
})

export const closeModal = () => ({
  type: CLOSE_MODAL
})

export const searchEntities = (query) => ({
  type: SEARCH_ENTITIES,
  payload: {
    query
  }
})

export const searchAsyncEntities = (query) => {
  //redux thunk hace que retornemos una funcion
  //recibe como parametro el dispatch con el cual lanzaremos otra accion
  //es muy usado al momento de hacer consultas a api
  return (dispatch) => {
    //fetch().then(()=>{dispatch(searchEntities(query))})
    //XHR
    //trae
    //axios
    dispatch(isLoading(true))
    setTimeout(() => {
      dispatch(isLoading(false))
      return dispatch(searchEntities(query))
    }, 5000);
  }
}

export const isLoading = (value) =>{
  return{
    type: IS_LOADING,
    payload: {
      value
    }
  }
}
