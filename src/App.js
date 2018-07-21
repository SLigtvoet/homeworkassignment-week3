import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux'
import store from './store'
import { Route, NavLink } from 'react-router-dom'
import {newGame} from './actions/game'
import { connect } from 'react-redux'
import GameContainer from './components/GameContainer';
import homePageContainer from './components/homePageContainer'
import { BrowserRouter } from 'react-router-dom'


class App extends Component {
  componentDidMount() {
    this.props.newGame()
  }
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
      
        <div className="App">
        <ul>
          <li>
        <NavLink to="/" exact activeStyle ={
          { color:'green'}
        }>Home</NavLink>
        </li>
        <li>
        <NavLink to="/hangman" exact activeStyle ={
          { color:'green' }
        }>Start Playing!</NavLink>
        </li>
        </ul>
        <Route exact path="/" component={homePageContainer} />
        <Route exact path="/hangman" component={GameContainer}/>
         </div>
         </BrowserRouter>
      </Provider>
      
    );
  }
}

export default connect(null, { newGame })(App)

