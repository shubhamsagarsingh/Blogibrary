import './_Signin.scss'
import { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addToken } from '../../redux/actions/token'





const Signin = () => {
    const [token, setToken] = useState({
        email: '',
        password: ''
    })
    const dispatch = useDispatch()


    const onChangeFunc = (event) => {
        setToken({...token, [event.target.name]: event.target.value})
    }

    const onSubmitFunc = (event) => {
        event.preventDefault()

        axios.post('/signin', token)
        .then((data) => {
            dispatch(addToken())
            console.log(data.data)
        })
        .catch((error) => console.log(error))
    }

    return(
        <div className='e-Signin__wrapper o-responsiveWrapper'>
            <div className='b-Signin o-responsiveBlock'>
                <div className='e-Signin__container'>
                    <h1>SIGNIN</h1>
                    <form onSubmit={onSubmitFunc}>
                        <section>
                            <label>Email</label>
                            <input type='email' name='email' autoComplete='off' onChange={onChangeFunc}/>
                        </section>

                        <section>
                            <label>Password</label>
                            <input type='password' name='password' autoComplete='off' onChange={onChangeFunc}/>
                        </section>

                        <button type='submit'>SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>
    )
}




export default Signin