import NProgress from 'nprogress'
import type { NProgressOptions } from 'nprogress'
import 'nprogress/nprogress.css'

export const useNProgress = () => {
  NProgress.configure({
    showSpinner: false,//showSpinner是否显示环形进度动画，默认true
    parent: 'body',//parent 指定改变的父容器，默认body
    trickleSpeed: 200,//trickleSpeed设置每次进度条步进速度(ms)
    trickle: true, //trickle 是否显示进度条，默认：true
    easing: 'ease', //ease可传递CSS3缓冲动画字符串（如ease、linear、ease-in、ease-out、ease-in-out、cubic-bezier）。
    speed: 200,//speed为动画速度（默认200，单位ms）
    minimum: 0.08,//minimum 设置开始时最低百分比，默认是0.08
    // template: "<div class='....'>...</div>"  //template改变进度条的HTML结构。为了保证进度条正常工作，需要一个包含role='bar' 属性的元素
  } as NProgressOptions)

  const start = () => {
    NProgress.start()
  }

  const done = () => {
    NProgress.done()
  }

  return {
    start,
    done
  }
}
