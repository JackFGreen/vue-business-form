import { shallowMount, createLocalVue } from '@vue/test-utils'
import install from '../../src/index'
import VueBusinessForm from '../../src/components/VueBusinessForm'

const plugin = {
  extend: {
    data () {
      return {
        plugin: 'plugin'
      }
    }
  }
}

const localVue = createLocalVue()
localVue.use(install, {
  plugins: [plugin]
})
const wrapper = shallowMount(VueBusinessForm, {
  propsData: {
    form: []
  }
})

describe('VueBusinessForm plugin', () => {
  test('plugin data', () => {
    expect(wrapper.vm.$data.plugin).toBe('plugin')
  })
})
