import Cookie from 'js-cookie'





export const addToken = () => {
    return((dispatch) => {
        const token = Cookie.get('token')
        if(token){
            dispatch({
                type: 'addToken',
                payload: token
            })
        }
        else{
            dispatch({
                type: 'addToken',
                payload: null
            })
        }
    })
}




export const removeToken = () => {
    return((dispatch) => {
        Cookie.remove('token')
        dispatch({
            type: 'removeToken',
            payload: null
        })
    })
}