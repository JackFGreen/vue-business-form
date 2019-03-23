<template>
  <div>
    <vue-business-form></vue-business-form>
  </div>
</template>

<script>
// import VueBusinessForm from '../../../src/components/VueBusinessForm'

export default {
  name: 'form',
  // components: {
  //   VueBusinessForm
  // },
  data () {
    return {
      form: [
        {
          name: 'inp1',
          value: 'inp1'
        },
        {
          name: 'inp1',
          value: 'inp1'
        }
      ]
    }
  }
}
</script>
