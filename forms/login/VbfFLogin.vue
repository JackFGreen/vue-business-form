<template>
  <div class="vbf__f-login">
    <vue-business-form :form="loginForm" @current="$emit('current', $event)"></vue-business-form>
  </div>
</template>

<script>
import VueBusinessForm from '../../src/components/VueBusinessForm'
import { username, password } from '../../fields'

export default {
  name: 'VbfFLogin',
  components: {
    VueBusinessForm
  },
  props: {
    form: {
      type: Array
    }
  },
  data () {
    return {
      loginForm: this.form || [username(), password()]
    }
  }
}
</script>
