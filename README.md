# vue-business-form

Render form

## Usage

```sh
yarn add vue-business-form
```

```js
import VueBusinessForm from 'vue-business-form'

Vue.use(VueBusinessForm)
```

```html
<template>
  <div class="page-login">
    <vue-business-form :form="form" @current="current"></vue-business-form>
  </div>
</template>

<script>
  import { username, password } from 'vue-business-form/fields'

  export default {
    name: 'page-login',
    data() {
      return {
        form: [username(), password()]
      }
    },
    methods: {
      current(res) {
        console.log(res)
      }
    }
  }
</script>
```

## API

### Global config

```js
Vue.use(VueBusinessForm[, config])
```

#### config.plugins
Support plugins to extend VueBusinessForm. Use `mixins` in back.
```
plugins params './src/index.js'
// e.g. './plugins/validate/index.js'
```

### VueBusinessForm config

#### :form{Array\<Option\>}
Render form config

##### Option{Object}
```
Option params './src/interface/index.js' IFormField
```
#### @current{Function}

Return current input data.
```js
{
  name: '',
  value: ''
}
```

## Contribution

### Namespace

Components and className use BEM

#### Component

Form compoents name use `VbfF` start, e.g. `VbfFLogin.vue`

```html
<div class="vbf__f-login"></div>
```

#### Plugin

Plugin compoents name use `VbfP` start, e.g. `VbfPValidate.vue`

```html
<div class="vbf__p-validate__error"></div>
```

## License
MIT
