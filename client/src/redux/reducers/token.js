



const initialState = null



export const tokenReducer = (state=initialState, action) => {
    switch(action.type){
        case 'addToken': return action.payload
        case 'removeToken': return action.payload
        default: return state
    }
}