import React from 'react'
import PropTypes from 'prop-types'
import { padLeft, range } from '../utility'

class MonthPicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      selectYear: this.props.year
    }
  }
  componentDidMount() {
    document.addEventListener('click', this.handleClick, false)
  }
  handleClick = (event) => {
    console.log(17, this.node)
    console.log(18, event.target)
    console.log(19, this.node.contains(event.target))
    if (this.node.contains(event.target)) return
    this.setState({
      isOpen: false
    })
  }
  toggleDropdown = (event) => {
    const { isOpen } = this.state
    event.preventDefault()
    this.setState({
      isOpen: !isOpen
    })
  }
  selectYear = (evnet, yearNumber) => {
    evnet.preventDefault()
    this.setState({
      selectYear: yearNumber
    })
  }
  selectMonth = (evnet, monthNumber) => {
    evnet.preventDefault()
    this.setState({
      isOpen: false
    })
    this.props.onChange(this.state.selectYear, monthNumber)
  }
  render() {
    const { year, month } = this.props
    const { isOpen, selectYear } = this.state
    const monthRange = range(12, 1)
    const yearRange = range(9, -4).map(number => number + year)
    return (
      <div className="dropdown month-picker-component" ref={(ref) => {this.node = ref; console.log(48, ref)}}>
        <h4>选择月份</h4>
        <button 
          className="btn btn-lg btn-secondary dropdown-toggle"
          onClick={this.toggleDropdown}
        >
          {`${year}年 ${padLeft(month)}月`}
        </button>
        { isOpen && 
          <div className="dropdown-menu" style={{display: 'block'}}>
            <div className="row">
              <div className="col border-right">
                {yearRange.map((yearNumber, index) => (
                  <span 
                    key={index} 
                    className={(yearNumber === selectYear) ? 'dropdown-item active' : 'dropdown-item'}
                    onClick={(event) => {this.selectYear(event, yearNumber)}}
                  >
                    {yearNumber}年
                  </span>
                ))}
              </div>
              <div className="col">
                {monthRange.map((monthNumber, index) => (
                  <span 
                    key={index} 
                    className={(monthNumber === month) ? 'dropdown-item active' : 'dropdown-item'}
                    onClick={(event) => {this.selectMonth(event, monthNumber)}}
                  >
                    {padLeft(monthNumber)}月
                  </span>
                ))}
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}

MonthPicker.propTypes = {
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
}

export default MonthPicker