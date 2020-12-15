import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css'
import Waitlist from './components/Waitlist'
import Home from './components/Home'
import Notfound from './components/Notfound'

const App = () => {
  return (
    <BrowserRouter>
       <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/waitlist" component={Waitlist} />
         <Route component={Notfound} />
       </Switch>
    </BrowserRouter>
  )
}

export default App
