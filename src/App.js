import React from 'react'
import { BrowserRouter, Switch, Route,Redirect } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Info from './components/Info'
import Tratamiento from './components/Tratamiento'
import Locales from './components/Locales'
import Products from './components/Products'
import Espe from './components/Espe'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/products' component={Products}/>
        <Route path='/tratamiento' component={Tratamiento}/>
        <Route path='/locales' component={Locales}/>
        <Route path='/info' component={Info}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/product/:idit' component={Espe}/>
        <Route path='*' component={Home}><Redirect to='/'/></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
