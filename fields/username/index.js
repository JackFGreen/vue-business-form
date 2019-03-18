import { IFormField } from '../../src/interface'
import { mkField } from '../../src/tools/utils'

const field = {
  name: 'username',
  config: {
    attrs: {
      type: 'text'
    }
  }
}

export default mkField(IFormField, field)
