import VueBusinessForm from './components/VueBusinessForm'
import { isArray, isFunction } from './tools/utils'

/**
 * @param {Array} plugins
 * @param {Function} [plugins.install] vue plugin install, run global
 * @param {Object} [plugins.extend] vue.extend, extend to VueBusinessForm
 */
const install = (Vue, { plugins }) => {
  // handle plugins
  if (isArray(plugins)) {
    const pluginExtends = []
    plugins.forEach(({ install, extend }) => {
      isFunction(install) && install(Vue)
      if (extend) {
        pluginExtends.push(extend)
      }
    })
    Object.assign(VueBusinessForm, { mixins: pluginExtends })
  }

  console.log(VueBusinessForm)

  // reigster Vue component
  Vue.component(VueBusinessForm.name, Vue.extend(VueBusinessForm))
}

export default {
  install
}
