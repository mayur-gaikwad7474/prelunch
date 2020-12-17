import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css'
import Waitlist from './components/Waitlist'
import Home from './components/Home'
import Notfound from './components/Notfound'
import Privacypolicy from './components/Privacypolicy'
import Termsandcondition from './components/Termsandcondition'

const App = () => {
  return (
    <BrowserRouter>
       <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/waitlist" component={Waitlist} />
         <Route exact path="/privacy-policy" component={Privacypolicy} />
         <Route exact path="/conditions" component={Termsandcondition} />
         <Route component={Notfound} />
       </Switch>
    </BrowserRouter>
  )
}

export default App
