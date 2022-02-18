import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Signin from './pages/Signin/Signin'
import Signup from './pages/Signup/Signup'





const App = () => {
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