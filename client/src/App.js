import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Signin from './pages/Signin/Signin'
import Signup from './pages/Signup/Signup'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addToken } from './redux/actions/token'





const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addToken())
  },[])

  return (
    <>
    <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/signin' component={Signin}/>
        <Route exact path='/signup' component={Signup}/>
      </Switch>
    </>
  )
}




export default App