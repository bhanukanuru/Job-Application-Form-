import axios from '../config/axios'

export const GetForm=(data)=>{
    return{
        type:'GET_FORM', payload:data
    }
}
export const startGetForms=()=>{
    return(dispatch)=>{
        axios.get('users/application-forms')
        .then((response)=>{
           // console.log(response)
           const data=response.data
           dispatch(GetForm(data))
        })
    }  

}

export const PostPerson=(data)=>{
    return {
        type:'POST_FORM', payload:data
    }
}

export const startPostPerson=(formData)=>{
    return(dispatch)=>{
        axios.post('/users/application-form',formData)
        .then((response)=>{
            //console.log(response.data)
            const data=response.data
            dispatch(PostPerson(data))
           // redirect()
        })
    }
}

export const UpdatePerson=(data)=>{
    return{
        type:'UPDATE_FORM', payload:data
    }
}

export const startUpdateForms=(formData,id)=>{
    return(dispatch)=>{
        axios.put(`/users/application-form/update/${id}`,formData)
        .then((response)=>{
            //console.log(response.data)
            const data=response.data
            dispatch(UpdatePerson(data))
        })
    }
} 