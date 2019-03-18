import { IFormField } from '../../src/interface'
import { mkField } from '../../src/tools/utils'

const field = {
  name: 'googleCode',
  config: {
    attrs: {
      type: 'text',
      maxlength: 6
    }
  }
}

export default mkField(IFormField, field)
