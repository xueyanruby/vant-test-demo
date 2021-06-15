
// import Vue from 'vue'
import App from './App.vue'

/**
 * @description: 引入第三方库
 * @param {String} libname
 * @param {String} libversion
 */
 const importThirdLibrary = (libname, libversion,callback)=>{
  let script = document.createElement('script');
  script.src = `//shared.youdao.com/dict/tetris/libs/${libname.trim('')}/${libversion.trim('')}.js`;
  document.body.append(script);
  if(callback)
    script.onload = callback;
}

importThirdLibrary('vue','v2.6.4',()=>{
  Vue.config.productionTip = false

  new Vue({
    render: h => h(App),
  }).$mount('#app')
})
