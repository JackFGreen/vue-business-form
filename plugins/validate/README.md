# @vue-business-form/plugin-validate
VeeValidate is required. This plugin will inject `$validator` in form.

## Usage
```js
import VueBusinessForm from 'vue-business-form'
import validate from '@vue-business-form/plugin-validate'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)

Vue.use(VueBusinessForm, {
  plugins: [validate]
})
```

```js
import { IValidateDirective, IValidateError } from '@vue-business-form/plugin-validate'

export default {
  data () {
    return {
      form: [{
        name: 'mobile',
        value: '',
        config: {
          attrs: {
            type: 'number'
          },
          directives: [
            IValidateDirective({
              value: 'required'
            })
          ]
        },
        append: [IValidateError()]
      }]
    }
  }
}
```

### IValidateDirective
Return VeeValidate directive.


### IValidateError
Return validate error element.
