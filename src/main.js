import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'

//引入初始化样式文件
import '@/styles/common.scss'

//引入懒加载指令插件并且注册
import { lazyPlugin } from './directives'

// import { useIntersectionObserver } from '@vueuse/core'

//引入全局组件插件
import { componentPlugin } from '@/components'

const app = createApp(App)
const pinia = createPinia()
//注册持久化插件
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')

//定义全局指令

// app.directive('img-lazy',{
//   mounted(el,binding){
//     //el:指令绑定的那个元素 img
//     //binding:binding.value 指令等于号后面绑定的表达式的值
//     console.log(el,binding.value);
//     useIntersectionObserver(
//       el,
//       ([{ isIntersecting }]) => {
//         console.log(isIntersecting);
//         if(isIntersecting){
//           //图片进入视口区域
//           el.src=binding.value
//         }
//       },
//     )
//   }
// })