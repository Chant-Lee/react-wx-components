import React, { Component } from 'react'

import './index.scss'

import ImageCss from '../../components/image-css'

import { IMG_LIST } from '../../project/config'

class Home1 extends Component {
  render() {
    return (
      <div className="home">
        {IMG_LIST.map((item, index) => {
          return <ImageCss key={index} src={item.url} />
        })}
      </div>
    )
  }
}

export default Home1
