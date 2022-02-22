import './_Signin.scss'
import { useReducer } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addToken } from '../../redux/actions/token'
import { useHistory, Redirect } from 'react-router-dom'


const initialState = {
    email: '',
    password: ''
}

const signinReducer = (state, action) => {
    switch(action.type){
        case 'onChangeAction': return {...state, [action.payload.target.name]: action.payload.target.value}
        case 'clearForm': return {email: '', password: ''}
        default: return state
    }
}



const Signin = () => {
    const tokenState = useSelector((state) => state.tokenReducer)
    const dispatch = useDispatch()
    const [signinState, signinDispatch] = useReducer(signinReducer, initialState)
    const history = useHistory()


    const onChangeFunc = (event) => {
        signinDispatch({type: 'onChangeAction', payload: event})
    }

    const onSubmitFunc = (event) => {
        event.preventDefault()

        axios.post('/signin', signinState)
        .then((data) => {
            dispatch(addToken())
            history.push('/')
            console.log(data.data)
        })
        .catch((error) => console.log(error))
    }

    if(tokenState) return <Redirect to='/'/>

    return(
        <div className='e-Signin__wrapper o-responsiveWrapper'>
            <div className='b-Signin o-responsiveBlock'>
                <div className='e-Signin__container'>
                    <h1>SIGNIN</h1>
                    <form onSubmit={onSubmitFunc}>
                        <section>
                            <label>Email</label>
                            <input type='email' name='email' value={signinState.email} autoComplete='off' onChange={onChangeFunc}/>
                        </section>

                        <section>
                            <label>Password</label>
                            <input type='password' name='password' value={signinState.password} autoComplete='off' onChange={onChangeFunc}/>
                        </section>

                        <button type='submit'>SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>
    )
}




export default Signin