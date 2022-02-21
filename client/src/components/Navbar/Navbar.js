import './_Navbar.scss'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeToken } from '../../redux/actions/token'




const Navbar = () => {
    const tokenState = useSelector((state) => state.tokenReducer)
    const dispatch = useDispatch()

    return(
        <div className='e-Navbar__wrapper'>
            <div className='b-Navbar o-responsiveBlock'>
                <div className='e-Navbar__container'>
                    <h1>Logo</h1>
                    <input type='text'/>
                    <ul>
                        <li><NavLink exact activeClassName='activeClassName' to='/'>HOME</NavLink></li>
                        { tokenState ?
                            <>
                                <li><NavLink exact activeClassName='activeClassName' to='/userProfile'>USERPROFILE</NavLink></li>
                                <li><NavLink exact activeClassName='activeClassName' to='/userTodos'>USERTODOS</NavLink></li>
                                <li><button onClick={() => {dispatch(removeToken())}}>SIGNOUT</button></li>
                            </>:
                            <>
                                <li><NavLink exact activeClassName='activeClassName' to='/signin'>SIGNIN</NavLink></li>
                                <li><NavLink exact activeClassName='activeClassName' to='/signup'>SIGNUP</NavLink></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}




export default Navbar