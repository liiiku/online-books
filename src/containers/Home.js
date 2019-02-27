import React from 'react'
import  WithContext from '../WithContext'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: '我是Home组件'
    }
  }

  render() {
    const { msg } = this.state
    const { data } = this.props
    console.log(15, data)
    return (
      <div>{msg}</div>
    )
  }
}

export default WithContext(Home)