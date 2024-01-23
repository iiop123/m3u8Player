import { createApp } from 'vue'
import App from './App.vue'
import nutui from '@nutui/nutui'
import "@nutui/nutui/dist/style.css";
import { IconFont } from '@nutui/icons-vue';
import '@nutui/icons-vue/dist/style_iconfont.css';
createApp(App).use(nutui).use(IconFont).mount('#app')
