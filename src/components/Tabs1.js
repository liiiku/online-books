import React from 'react'

const Tab = (props) => {
  const { active, onClick } = props
  const tabStyle = {
    'maxWidth': '150px',
    'color': active ? 'red' : 'green',
    'border': active ? '1px solid red': '0px'
  }
  return (
    <li style={tabStyle} onClick={onClick}>
      {props.children}
    </li>
  )
}

class Tabs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectIndex: 0
    }
  }
  render() {
    const { selectIndex } = this.state
    return (
      <ul>
        {
          React.Children.map(this.props.children, (child, index) => {
            console.log(28, child)
            return React.cloneElement(child, {
              active: selectIndex === index,
              onClick: () => this.setState({selectIndex: index})
            })
          })
        }
      </ul>
    )
  }
}

export default () => {
  return (
    <Tabs>
      <Tab>标签一</Tab>
      <Tab>标签二</Tab>
      <Tab>标签三</Tab>
    </Tabs>
  )
}