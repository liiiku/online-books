import React from 'react'
import Ionicon from 'react-ionicons'
import PropTypes from 'prop-types'
import { LIST_VIEW, CHART_VIEW } from '../utility'

const generateLinkClass = (current, view) => {
  return (current === view) ? 'nav-link active' : 'nav-link'
}

const ViewTab = ({ activeTab, onTabChange }) => (
  <ul className="nav nav-tabs nav-fill my-4">
    <li className="nav-item">
      <span
        href="#" 
        className={generateLinkClass(activeTab, LIST_VIEW)}
        onClick={(event) => {event.preventDefault(); onTabChange(LIST_VIEW)}}
      >
        <Ionicon 
          className="rounded-circle mr-2"
          fontSize="25px"
          color='#007bff'
          icon='ios-paper'
        />列表模式
      </span>
    </li>
    <li className="nav-item">
      <span
        href="#" 
        className={generateLinkClass(activeTab, CHART_VIEW)}
        onClick={(event) => {event.preventDefault(); onTabChange(CHART_VIEW)}}
      >
        <Ionicon 
          className="rounded-circle mr-2"
          fontSize="25px"
          color='#007bff'
          icon='ios-pie'
        />图表模式
      </span>
    </li>
  </ul>
)

ViewTab.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onTabChange: PropTypes.func.isRequired
}

export default ViewTab