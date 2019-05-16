import { shallowMount } from '@vue/test-utils'
import VueBusinessForm from '../../src/components/VueBusinessForm'

const form = [
  {
    name: 'inp1',
    value: 'inp1'
  },
  {
    name: 'inp2',
    value: 'inp2'
  }
]

const wrapper = shallowMount(VueBusinessForm, {
  propsData: {
    form
  }
})

describe('VueBusinessForm', () => {
  test('name', () => {
    expect(wrapper.vm.$options.name).toBe('VueBusinessForm')
  })

  test('render', () => {
    form.forEach(({ name, value }) => {
      const inp = wrapper.find(`input[name=${name}]`)
      expect(inp.element.value).toBe(value)
    })
  })

  test('emit current', () => {
    const inps = wrapper.findAll('input')
    inps.wrappers.forEach((inp, index) => {
      const name = inp.element.name
      const oldVal = inp.element.value
      const newVal = 'new ' + oldVal
      inp.element.value = newVal
      inp.trigger('input')

      const current = wrapper.emitted().current
      expect(current).toBeTruthy()
      expect(current[index]).toEqual([
        {
          name,
          value: newVal
        }
      ])
    })
  })
})
