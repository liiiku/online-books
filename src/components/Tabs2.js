import React from 'react'

export class Tabs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: props.activeIndex
    }
  }
  tabChange = (event, index) => {
    event.preventDefault();
    this.setState({
      activeIndex: index
    })
    // 选择了哪个传出去
    this.props.onTabChange(index)
  }
  render() {
    // 取出children了，也就是Tab，这时候我们要循环拿到这个Tab
    const { children } = this.props
    const { activeIndex } = this.state
    return (
      <ul className="nav nav-tabs nav-fill my4">
        {
          React.Children.map(children, (child, index) => {
            console.log(26, child)
            const activeClassName = (activeIndex === index) ? 'nav-link active' : 'nav-link'
            return (
              <li className="nav-item">
                <span 
                  className={activeClassName}
                  onClick={(event) => { this.tabChange(event, index) }}
                >{child}</span>
              </li>
            )
          })
        }
      </ul>
    )
  }
}


export const Tab = ({ children }) => {
  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  )
}