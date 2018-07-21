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
          <div class="menu">
            <div class="menubutton">
              <NavLink to="/" exact activeStyle ={
                { 'text-decoration' :'underline' }
              }>Home</NavLink>
            </div>
            <div class="menubutton">
              <NavLink to="/hangman" exact activeStyle ={
                { 'text-decoration' :'underline' }
              }>Start Playing!</NavLink>
            </div>
          </div>
          <div class="page">
            <Route exact path="/" component={homePageContainer} />
            <Route exact path="/hangman" component={GameContainer}/>
          </div>
         </div>
         </BrowserRouter>
      </Provider>
      
    );
  }
}

export default connect(null, { newGame })(App)

