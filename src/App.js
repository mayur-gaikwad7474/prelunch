import React, { Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import Waitlist from './components/Waitlist'
import Home from './components/Home'
import Notfound from './components/Notfound'
const Privacypolicy = React.lazy(() => import('./components/Privacypolicy'));
const Termsandcondition = React.lazy(() => import('./components/Termsandcondition'));

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/waitlist" component={Waitlist} />
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path="/privacy-policy" component={Privacypolicy} />
          <Route exact path="/terms&conditions" component={Termsandcondition} />
          <Route component={Notfound} />
        </Suspense>
      </Switch>
    </BrowserRouter>
  )
}

export default App
