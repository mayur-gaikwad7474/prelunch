import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import './App.css'
import Waitlist from './components/Waitlist'

const App = () => {
  return (
    <BrowserRouter>
       <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/waitlist" component={Waitlist} />
       </Switch>
    </BrowserRouter>
  )
}

export default App
