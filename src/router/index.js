import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ChildReact from '../pages/child-react'
import Test from '../pages/test'

class RouterConfig extends Component {
  render() {
    return (
      <div>
        <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? '/' : '/'}>
          <Routes>
            <Route path='/childReact' element={<ChildReact />} />
            <Route path='/test' element={<Test />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default RouterConfig


