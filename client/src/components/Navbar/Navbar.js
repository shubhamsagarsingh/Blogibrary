import './_Navbar.scss'
import { NavLink } from 'react-router-dom'




const Navbar = () => {
    return(
        <div className='e-Navbar__wrapper'>
            <div className='b-Navbar o-responsiveBlock'>
                <div className='e-Navbar__container'>
                    <h1>Logo</h1>
                    <input type='text'/>
                    <ul>
                        <li><NavLink exact activeClassName='activeClassName' to='/'>HOME</NavLink></li>
                        <li><NavLink exact activeClassName='activeClassName' to='/signin'>SIGNIN</NavLink></li>
                        <li><NavLink exact activeClassName='activeClassName' to='/signup'>SIGNUP</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}




export default Navbar