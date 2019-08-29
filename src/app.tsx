import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import BasicRoute from './route'
import './app.scss'

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <Link to="/lazy/img">图片懒加载 css</Link>
          <Link to="/lazy/img">图片加载 css</Link>
          <Link to="/inter/img">图片</Link>
        </header>
        <BasicRoute />
      </div>
    )
  }
}

export default App
