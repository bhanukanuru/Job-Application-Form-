const initialState=[]

const formReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'GET_FORM':{
            return [...action.payload]
        }
        case 'POST_FORM':{
            return [...state, action.payload]
        }
        case 'UPDATE_FORM':{
            return state.map(person=>{
                if(person._id==action.payload._id){
                    return action.payload
                }
                else{
                    return person
                }
            })
        }
        default:{
            return [...state]
        }
    }
}
export default formReducer