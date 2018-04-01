import AOS from 'aos'
import hljs from 'highlight.js'
import '../scss/main.scss'

(function () {
  AOS.init({
    disable: 'mobile',
    offset: 50,
    duration: 1000,
    easing: 'ease-out-quad'
  })

  hljs.initHighlightingOnLoad()
})()
