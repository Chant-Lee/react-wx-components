import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import classNames from 'classnames'

import './index.scss'

import { ImagePropsDT, ImageState, Mode } from '../../project/config'

class ImageCss extends Component<ImagePropsDT, ImageState> {
  static defaultProps = {
    src: '',
    mode: Mode.ScaleToFill,
    style: {},
    lazyLoad: false,
    offset: 0,
    onError: (...args: any[]): void => {}
  }

  handleScroll = () => {}

  constructor(props) {
    super(props)
    this.handleScroll = this.throttle(this._handleScroll, 100)
  }
  imgRef = null

  state: ImageState = {
    isLoaded: false
  }

  componentDidMount() {
    if (this.props.lazyLoad) {
      window.addEventListener('scroll', this.handleScroll)
      window.addEventListener('resize', this.handleScroll)
      this._handleScroll()
    }
  }

  componentWillUnMount() {
    if (this.props.lazyLoad) {
      window.removeEventListener('scroll', this.handleScroll)
      window.removeEventListener('resize', this.handleScroll)
    }
  }

  getClientHeight = () => {
    let clientHeight = 0
    if (document.body.clientHeight && document.documentElement.clientHeight) {
      clientHeight = Math.min(
        document.body.clientHeight,
        document.documentElement.clientHeight
      )
    } else {
      clientHeight = Math.max(
        document.body.clientHeight,
        document.documentElement.clientHeight
      )
    }
    return clientHeight
  }

  getScrollTop = () => {
    let scrollTop = 0
    if (document.documentElement && document.documentElement.scrollTop) {
      scrollTop = document.documentElement.scrollTop
    } else if (document.body) {
      scrollTop = document.body.scrollTop
    } else {
      scrollTop = window.scrollY || window.pageYOffset
    }

    return scrollTop
  }

  throttle(fn, delay) {
    let timer = null

    return function() {
      let context = this
      let args = arguments
      clearTimeout(timer)
      timer = setTimeout(function() {
        fn.apply(context, args)
      }, delay)
    }
  }

  _handleScroll = () => {
    const { offset = 0 } = this.props // 偏移量

    const { nodeTop, nodeBottom } = this.getNodeTop()

    const viewTop = this.getScrollTop()
    const viewBottom = viewTop + this.getClientHeight()

    // 当图片出现在视野范围内,设置真正的图片，同时移除监听
    if (nodeBottom + offset >= viewTop && nodeTop - offset <= viewBottom) {
      this.setState(
        {
          isLoaded: true
        },
        () => {
          const imgNode = findDOMNode(this).firstChild as HTMLImageElement
          imgNode.src = this.props.src
        }
      )
      window.removeEventListener('scroll', this.handleScroll)
      window.removeEventListener('resize', this.handleScroll)
    }
  }

  getNodeTop = () => {
    const viewTop = this.getScrollTop()

    // 当前节点
    const img = findDOMNode(this).firstChild as HTMLImageElement
    const nodeTop = img.getBoundingClientRect().top + viewTop
    const nodeBottom = nodeTop + img.offsetHeight
    return {
      nodeTop,
      nodeBottom
    }
  }

  imageOnLoad = e => {
    const { onLoad } = this.props
    Object.defineProperty(e, 'detail', {
      enumerable: true,
      writable: true,
      value: {
        width: this.imgRef.width,
        height: this.imgRef.height
      }
    })
    onLoad && onLoad(e)
  }

  imageError = () => {
    const { onError } = this.props
    onError({
      detail: { errMsg: 'something wrong' }
    })
  }

  render() {
    const { className, src, style, mode, lazyLoad } = this.props
    const cls = classNames(
      'react-img',
      {
        'react-img__widthfix': mode === 'widthFix'
      },
      className
    )
    const imgCls = classNames(
      'react-img__mode-' +
        (mode || 'scaleToFill').toLowerCase().replace(/\s/g, '')
    )

    let currenSrc = src

    if (lazyLoad) {
      const { isLoaded } = this.state
      currenSrc = isLoaded ? src : ''
    }

    return (
      <div className={cls} style={style}>
        {lazyLoad ? (
          <img
            ref={img => (this.imgRef = img)}
            className={imgCls}
            data-src={currenSrc}
            onLoad={this.imageOnLoad}
            onError={this.imageError}
          />
        ) : (
          <img
            ref={img => (this.imgRef = img)}
            className={imgCls}
            src={currenSrc}
            onLoad={this.imageOnLoad}
            onError={this.imageError}
          />
        )}
      </div>
    )
  }
}

export default ImageCss
