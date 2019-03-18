import { IFormField } from '../../src/interface'
import { mkField } from '../../src/tools/utils'

const field = {
  name: 'password',
  config: {
    attrs: {
      type: 'password'
    }
  }
}

export default mkField(IFormField, field)
