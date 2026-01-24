import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

export default {
  install(app) {
    app.use(Toast, {
      timeout: 3000,
      position: 'bottom-right',
      closeOnClick: true,
    })
  }
}
