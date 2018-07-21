import * as React from 'react'
// import * as request from 'superagent'
import { connect } from 'react-redux'


class homePageContainer extends React.PureComponent {
    render(){
      return ( <div>
          <h1>Welcome To The Hangman Game!</h1>
          <div class="image">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Hangman-5.svg/2000px-Hangman-5.svg.png"/>
          </div>
          </div> 
          )
    }
  }

export default connect(null, {})(homePageContainer)

        
    
