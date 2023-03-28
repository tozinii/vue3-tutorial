import { createApp } from 'vue'
import App from './App.vue'

//Importar global style, con importarlo aqui ya se aplica a toda la app
import './assets/css/global.css'
//Parece que tambien funciona para js
import './assets/js/global.js'

createApp(App).mount('#app')
