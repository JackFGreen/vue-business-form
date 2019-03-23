import { isArray, isFunction, mkField } from '../../src/tools/utils'

describe('utils', () => {
  test('isArray', () => {
    const arg = []
    expect(isArray(arg)).toBe(true)
  })
  test('isFunction', () => {
    const arg = () => {}
    expect(isFunction(arg)).toBe(true)
  })
  test('mkField', () => {
    const handler = (config, ...options) => {
      return config === options[0]
    }
    const config = 1
    const options = 1

    expect(mkField(handler, config)(options)).toBe(true)
  })
})
