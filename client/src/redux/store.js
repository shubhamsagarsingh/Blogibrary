import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { tokenReducer } from './reducers/token'





const store = createStore(combineReducers({
    tokenReducer : tokenReducer
}), composeWithDevTools(applyMiddleware(thunk)))





export default store