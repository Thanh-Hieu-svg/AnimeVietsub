import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import './styles/toast.css'
import './style.css'
import App from './App.vue'
import router from './router'
import FontAwesomeIcon from './plugins/fontawesome'

const app = createApp(App)
const pinia = createPinia()

// Toast options
const toastOptions = {
  timeout: 3000,
  position: 'bottom-right',
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: 'button',
  icon: true, 
  rtl: false,
  transition: 'Vue-Toastification__bounce',
  maxToasts: 3,
  newestOnTop: true
}

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(pinia)
app.use(router)
app.use(Toast, toastOptions)
app.mount('#app')