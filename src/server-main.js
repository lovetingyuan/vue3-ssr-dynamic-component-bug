import { createSSRApp } from 'vue'
import { renderToString } from '@vue/server-renderer'
import App from './App.vue'
import './index.css'

module.exports = () => {
  const app = createSSRApp(App)
  return renderToString(app).then(html => {
    console.log('vue server render: ', html)
  })
}

if (require.main === module) { // just for test
  module.exports()
}
