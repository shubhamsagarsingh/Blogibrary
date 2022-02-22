import './_Signup.scss'
import { useReducer } from 'react'
import { useHistory, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'



const initialState = {
    name: '',
    email: '',
    password: ''
}

const signupReducer = (state, action) => {
    switch(action.type){
        case 'onChangeAction': return {...state, [action.payload.target.name]: action.payload.target.value}
        default: return state
    }
}



const Signup = () => {
    const tokenState = useSelector((state) => state.tokenReducer)
    const [signupState, signupDispatch] = useReducer(signupReducer, initialState)
    const history = useHistory()

    const onChangeFunc = (event) => {
        signupDispatch({type: 'onChangeAction', payload: event})
    }

    const onSubmitFunc = (event) => {
        event.preventDefault()

        axios.post('/signup', signupState)
        .then((data) => {
            history.push('/')
            console.log(data.data)
        })
        .catch((error) => console.log(error))
    }

    if(tokenState) return <Redirect to='/'/>

    return(
        <div className='e-Signup__wrapper o-responsiveWrapper'>
            <div className='b-Signup o-responsiveBlock'>
                <div className='e-Signup__container'>
                    <h1>SIGNUP</h1>
                    <form onSubmit={onSubmitFunc}>
                        <section>
                            <label>Name</label>
                            <input type='text' name='name' autoComplete='off' onChange={onChangeFunc}/>
                        </section>

                        <section>
                            <label>Email</label>
                            <input type='email' name='email' autoComplete='off' onChange={onChangeFunc}/>
                        </section>

                        <section>
                            <label>Password</label>
                            <input type='password' name='password' autoComplete='off' onChange={onChangeFunc}/>
                        </section>

                        <button>SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>
    )
}





export default Signup