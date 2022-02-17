import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'





const App = () => {
  return (
    <>
    <Navbar/>
      <Switch>
        <Route path='/' component={Home}/>
      </Switch>
    </>
  )
}




export default App