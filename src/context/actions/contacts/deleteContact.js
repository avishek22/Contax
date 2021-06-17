import {
    DELETE_CONTACTS_LOADING,
    DELETE_CONTACTS_FAIL,
    DELETE_CONTACTS_SUCCESS,
  } from '../../../constants/actionTypes';
  
  import axiosInstance from '../../../helpers/axiosInterceptor';

export default(id)=>(dispatch)=>onSuccess=>{
    console.log(`id`, id)
    dispatch({
        type:DELETE_CONTACTS_LOADING
    });

    axiosInstance.delete(`/contacts/${id}`).then((res)=>{
        dispatch({
            type:DELETE_CONTACTS_SUCCESS,
            payload:id
        })
        onSuccess()
    }).catch(err=>{
        dispatch({
            type:DELETE_CONTACTS_FAIL,
            payload: err.response
          ? err.response.data
          : {error: 'Something went wrong, try agin'},
            
        })
    })
}