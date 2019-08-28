import React, { Component } from 'react'

import './index.css'

import Image from '../../components/image'

import { IMG_LIST } from '../../project/config'

class Home extends Component {
  render() {
    return (
      <div className="home">
        {IMG_LIST.map((item, index) => {
          return <img key={index} src={item.url} />
        })}
        <Image />
      </div>
    )
  }
}

export default Home
