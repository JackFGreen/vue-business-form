# vue-business-form

## Usage
```
yarn install vue-business-form
```

```js

import VueBusinessForm from 'vue-business-form'
import validate from 'vue-business-form/plugins/validate'


Vue.use(VueBusinessForm, {
  plugins: [validate]
})
```

## Name
Components and class name use BEM

### Component
Form compoents name use `VbfF` start, e.g. `VbfFLogin.vue`

```html
<div class="vbf__f-login"></div>
```

### Plugin
Plugin compoents name use `VbfP` start, e.g. `VbfPValidate.vue`

```html
<div class="vbf__p-validate__error"></div>
```
