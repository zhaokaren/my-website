import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage2 from './HomePageNew.js'
import Page from './Page.js'
import AboutMe from './AboutMe.js'
import PopUp2 from './PopUp2.js'

const Body = () => (
    <main>
      <Switch>
        <Route exact path='/' component={HomePage2}/>
        <Route path='/aboutme' component={AboutMe}/>
      </Switch>
        <Route path='/MakeUofT' component={PopUp2} />
    </main>
  )
  
  export default Body