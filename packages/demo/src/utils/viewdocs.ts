import Taro from '@tarojs/taro'
import {COMPONENTS_TYPE} from './../types/index'

/**
 * 查看文档 复制链接到本地
 */
export const handleViewDocs = (docType: COMPONENTS_TYPE) => {
  const docSuffix = docType === 'all' ? '/' : `/${docType}`
  const url = `https://tarox-ui.vercel.app/#${docSuffix}`
  if (process.env.TARO_ENV === 'h5') {
    window.open(url)
  } else {
    Taro.setClipboardData({
      data: url,
      success: () => {
        Taro.showToast({
          title: '链接复制成功，请到浏览器中打开链接查看',
          icon: 'none'
        })
      }
    })
  }
}