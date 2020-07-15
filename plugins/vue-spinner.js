import Vue from 'vue'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

Vue.use(Loading, {
  canCancel: false, // default false
  color: '#fb6340',
  loader: 'dots',
  width: 128,
  height: 128,
  backgroundColor: '#172b4d',
  opacity: 0.3,
  zIndex: 999
})
