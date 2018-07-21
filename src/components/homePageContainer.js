import * as React from 'react'
// import * as request from 'superagent'
import { connect } from 'react-redux'


class homePageContainer extends React.PureComponent {
    render(){
              return ( <h1>Welcome To The HangMan Game!</h1>)
            }
          }

          export default connect(null, {})(homePageContainer)

        
    
