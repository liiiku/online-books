import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import PriceList from './components/PriceList'
import ViewTab from './components/ViewTab'
import MonthPicker from './components/MonthPicker'
import { LIST_VIEW, CHART_VIEW } from './utility'
import { AppContext } from './app-context'
import Home from './containers/Home'

const items = [
  {
    "id": 1,
    "title": "去云南旅游",
    "date": "2019-02-25",
    "price": 400,
    "category": {
      "id": 1,
      "name": "旅游",
      "type": "outcome",
      "iconName": "ios-plane"
    }
  },
  {
    "id": 2,
    "title": "去杭州旅游",
    "date": "2019-03-25",
    "price": 900,
    "category": {
      "id": 1,
      "name": "旅游",
      "type": "outcome",
      "iconName": "ios-plane"
    }
  }
]

const tabsText = [LIST_VIEW, CHART_VIEW]

class App extends Component {
  constructor() {
    super()
    this.state = {
      tabView: tabsText[0],
      test1: '我是测试数据1',
      test2: '我是测试数据2'
    }
  }
  changeView = (index) => {
    this.setState({
      tabView: index
    })
  }
  selectNum = (num) => {
    console.log(num)
  }
  render() {
    const { tabView } = this.state
    const tabsIndex = tabsText.findIndex(tabText => tabText === tabView)
    return (
      <AppContext.Provider value={{
        state: this.state
      }}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Welcome to React</h1>
          </header>
          <PriceList 
            items={items}
            onModifyItem={(item) => alert(item.id)}
            onDeleteItem={(item) => alert(item.id)}
          />
          <ViewTab
            activeTab={tabsText[tabsIndex]}
            onTabChange={this.changeView}
          />
          <MonthPicker
            year={2018}
            month={5}
            onChange={(year, month) => console.log(year, month)}
          />
          <Home name="HOME" />
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
