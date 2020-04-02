import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import formReducer from '../Reducer/formReducer'

const configureStore=()=>{
    const store=createStore(combineReducers({
        form:formReducer
    }),applyMiddleware(thunk))
    return store
}
export default configureStore