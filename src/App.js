import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './pages/login'
import Admin from './pages/admin'
import './assets/less/index.less'
/*
 应用根组件
 */
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/' component={Admin}/>
        </Switch>
      </Router>
    )
  }
}

export default App
