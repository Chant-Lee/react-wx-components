export enum Mode {
  ScaleToFill = 'scaleToFill',
  AspectFit = 'aspectFit',
  AspectFill = 'aspectFill',
  WidthFix = 'widthFix',
  Top = 'top',
  Bottom = 'bottom',
  Center = 'center',
  Left = 'left',
  Right = 'right',
  TopLeft = 'top left',
  TopRight = 'top right',
  BottomLeft = 'bottom left',
  BottomRight = 'bottom right'
}

export type EventError = {
  detail: {
    errMsg: string
  }
}

export interface ImageState {
  isLoaded: boolean
}

export type EventLoad = {
  detail: {
    width: number
    height: number
  }
}

export interface ImagePropsDT {
  key?: any
  style?: any
  src: string
  mode: Mode
  lazyLoad?: boolean
  className?: string
  offset?: number
  onError?: (event: EventError) => void
  onLoad?: (event: EventLoad) => void
}
export const IMG_LIST = [
  {
    url:
      'https://img30.360buyimg.com/jdcms/s300x300_jfs/t7582/66/3048380492/71753/acde79b5/59b85824N836bb714.jpg.webp'
  },
  {
    url:
      'https://img30.360buyimg.com/jdcms/s300x300_jfs/t7582/66/3048380492/71753/acde79b5/59b85824N836bb714.jpg.webp'
  },
  {
    url:
      'https://img30.360buyimg.com/jdcms/s300x300_jfs/t7582/66/3048380492/71753/acde79b5/59b85824N836bb714.jpg.webp'
  },
  {
    url:
      'https://img30.360buyimg.com/jdcms/s300x300_jfs/t7582/66/3048380492/71753/acde79b5/59b85824N836bb714.jpg.webp'
  },
  {
    url:
      'https://img30.360buyimg.com/jdcms/s300x300_jfs/t7582/66/3048380492/71753/acde79b5/59b85824N836bb714.jpg.webp'
  },
  {
    url:
      'https://img30.360buyimg.com/jdcms/s300x300_jfs/t7582/66/3048380492/71753/acde79b5/59b85824N836bb714.jpg.webp'
  },
  {
    url:
      'https://img30.360buyimg.com/jdcms/s300x300_jfs/t7582/66/3048380492/71753/acde79b5/59b85824N836bb714.jpg.webp'
  },
  {
    url:
      'https://img30.360buyimg.com/jdcms/s300x300_jfs/t7582/66/3048380492/71753/acde79b5/59b85824N836bb714.jpg.webp'
  },
  {
    url:
      'https://img30.360buyimg.com/jdcms/s300x300_jfs/t7582/66/3048380492/71753/acde79b5/59b85824N836bb714.jpg.webp'
  },
  {
    url:
      'https://img30.360buyimg.com/jdcms/s300x300_jfs/t7582/66/3048380492/71753/acde79b5/59b85824N836bb714.jpg.webp'
  },
  {
    url:
      'https://img30.360buyimg.com/jdcms/s300x300_jfs/t7582/66/3048380492/71753/acde79b5/59b85824N836bb714.jpg.webp'
  },
  {
    url:
      'https://img30.360buyimg.com/jdcms/s300x300_jfs/t7582/66/3048380492/71753/acde79b5/59b85824N836bb714.jpg.webp'
  },
  {
    url:
      'https://img30.360buyimg.com/jdcms/s300x300_jfs/t7582/66/3048380492/71753/acde79b5/59b85824N836bb714.jpg.webp'
  },
  {
    url:
      'https://img30.360buyimg.com/jdcms/s300x300_jfs/t7582/66/3048380492/71753/acde79b5/59b85824N836bb714.jpg.webp'
  },
  {
    url:
      'https://img30.360buyimg.com/jdcms/s300x300_jfs/t7582/66/3048380492/71753/acde79b5/59b85824N836bb714.jpg.webp'
  },
  {
    url:
      'https://img30.360buyimg.com/jdcms/s300x300_jfs/t7582/66/3048380492/71753/acde79b5/59b85824N836bb714.jpg.webp'
  },
  {
    url:
      'https://img30.360buyimg.com/jdcms/s300x300_jfs/t7582/66/3048380492/71753/acde79b5/59b85824N836bb714.jpg.webp'
  },
  {
    url:
      'https://img30.360buyimg.com/jdcms/s300x300_jfs/t7582/66/3048380492/71753/acde79b5/59b85824N836bb714.jpg.webp'
  },
  {
    url:
      'https://img30.360buyimg.com/jdcms/s300x300_jfs/t7582/66/3048380492/71753/acde79b5/59b85824N836bb714.jpg.webp'
  },
  {
    url:
      'https://img30.360buyimg.com/jdcms/s300x300_jfs/t7582/66/3048380492/71753/acde79b5/59b85824N836bb714.jpg.webp'
  },
  {
    url:
      'https://img30.360buyimg.com/jdcms/s300x300_jfs/t7582/66/3048380492/71753/acde79b5/59b85824N836bb714.jpg.webp'
  },
  {
    url:
      'https://img30.360buyimg.com/jdcms/s300x300_jfs/t7582/66/3048380492/71753/acde79b5/59b85824N836bb714.jpg.webp'
  },
  {
    url:
      'https://img30.360buyimg.com/jdcms/s300x300_jfs/t7582/66/3048380492/71753/acde79b5/59b85824N836bb714.jpg.webp'
  },
  {
    url:
      'https://img30.360buyimg.com/jdcms/s300x300_jfs/t7582/66/3048380492/71753/acde79b5/59b85824N836bb714.jpg.webp'
  },
  {
    url:
      'https://img30.360buyimg.com/jdcms/s300x300_jfs/t7582/66/3048380492/71753/acde79b5/59b85824N836bb714.jpg.webp'
  },
  {
    url:
      'https://img30.360buyimg.com/jdcms/s300x300_jfs/t7582/66/3048380492/71753/acde79b5/59b85824N836bb714.jpg.webp'
  },
  {
    url:
      'https://img30.360buyimg.com/jdcms/s300x300_jfs/t7582/66/3048380492/71753/acde79b5/59b85824N836bb714.jpg.webp'
  },
  {
    url:
      'https://img30.360buyimg.com/jdcms/s300x300_jfs/t7582/66/3048380492/71753/acde79b5/59b85824N836bb714.jpg.webp'
  },
  {
    url:
      'https://img30.360buyimg.com/jdcms/s300x300_jfs/t7582/66/3048380492/71753/acde79b5/59b85824N836bb714.jpg.webp'
  },
  {
    url:
      'https://img30.360buyimg.com/jdcms/s300x300_jfs/t7582/66/3048380492/71753/acde79b5/59b85824N836bb714.jpg.webp'
  },
  {
    url:
      'https://img30.360buyimg.com/jdcms/s300x300_jfs/t7582/66/3048380492/71753/acde79b5/59b85824N836bb714.jpg.webp'
  },
  {
    url:
      'https://img30.360buyimg.com/jdcms/s300x300_jfs/t7582/66/3048380492/71753/acde79b5/59b85824N836bb714.jpg.webp'
  },
  {
    url:
      'https://img30.360buyimg.com/jdcms/s300x300_jfs/t7582/66/3048380492/71753/acde79b5/59b85824N836bb714.jpg.webp'
  },
  {
    url:
      'https://img30.360buyimg.com/jdcms/s300x300_jfs/t7582/66/3048380492/71753/acde79b5/59b85824N836bb714.jpg.webp'
  },
  {
    url:
      'https://img30.360buyimg.com/jdcms/s300x300_jfs/t7582/66/3048380492/71753/acde79b5/59b85824N836bb714.jpg.webp'
  },
  {
    url:
      'https://img30.360buyimg.com/jdcms/s300x300_jfs/t7582/66/3048380492/71753/acde79b5/59b85824N836bb714.jpg.webp'
  },
  {
    url:
      'https://img30.360buyimg.com/jdcms/s300x300_jfs/t7582/66/3048380492/71753/acde79b5/59b85824N836bb714.jpg.webp'
  },
  {
    url:
      'https://img30.360buyimg.com/jdcms/s300x300_jfs/t7582/66/3048380492/71753/acde79b5/59b85824N836bb714.jpg.webp'
  }
]
