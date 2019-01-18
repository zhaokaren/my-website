import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './HomePage.js'
import ContactPage from './ContactPage'
import Page from './Page.js'

const Body = () => (
    <main>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/portfolio' component={Page}/>
        <Route path='/contact' component={ContactPage}/>
      </Switch>
    </main>
  )
  
  export default Body