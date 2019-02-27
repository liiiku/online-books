import React from 'react'
import { AppContext } from './app-context'

// const withContext = (Component) => {
//   return (props) => (
//     <AppContext.Consumer>
//       {({ state }) => {
//         console.log(8, props)
//         return <Component {...props} data={state}/>
//       }}
//     </AppContext.Consumer>
//   )
// }

const withContext = (Component) => {
  return class NewComponent extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        newState: 'new'
      }
    }
    render() {
      const { newState } = this.state
      return (
        <AppContext.Consumer>
          {({state}) => {
            console.log(this.props)
            return <Component {...this.props} data={{...state, newState}} />
          }}
        </AppContext.Consumer>
      )
    }
  }
}

export default withContext