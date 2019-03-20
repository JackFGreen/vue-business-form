<script>
import merge from 'merge'
import { KIND_CHECKBOX } from '../constant'
import { isArray } from '../tools/utils.js'

export default {
  name: 'VueBusinessForm',
  props: {
    form: {
      type: Array,
      required: true
    }
  },
  data () {
    return {}
  },
  methods: {
    renderEl (h, item, index) {
      return (
        <div class='vbf-field' key={index}>
          {isArray(item.prepend) && (
            <div class='vbf__prepend'>{this.renderExtra(h, item, item.prepend)}</div>
          )}

          <div class='vbf__input-field'>{this.renderInput(h, item)}</div>

          {isArray(item.append) && (
            <div class='vbf__append'>{this.renderExtra(h, item, item.append)}</div>
          )}
        </div>
      )
    },
    renderInput (h, { name, value, component, children, config = {} }) {
      const el = component || 'input'
      return h(el, this.getBinds({ name, value, component, config }), children)
    },
    getBinds ({ name, value, component, config }) {
      const className = 'vbf__input'

      const binds = {
        attrs: {
          name
        },
        class: className,
        on: this.inputListeners(name)
      }

      const propValue = {
        value
      }

      if (component) {
        binds.props = propValue
      } else {
        binds.domProps = propValue
      }

      const result = merge.recursive(binds, config)
      return result
    },
    inputListeners (name) {
      return {
        input: event => {
          let val = ''

          const el = this.form.find(e => e.name === name)

          if (typeof event === 'object') {
            const target = event.target
            const type = target.type

            if (type === KIND_CHECKBOX) {
              val = target.checked
            } else {
              val = target.value
            }
          } else {
            val = event
          }

          if (el) {
            el.value = val
          }

          this.$emit('current', { name, value: val })
        }
      }
    },
    renderExtra (h, item, extras) {
      return extras.map(el => el(h, this, item))
    }
  },
  render (h) {
    return (
      <div class='vbf'>
        {this.form &&
          this.form.map((item, index) => {
            if (item.group) {
              return item.group.map((group, i) => {
                group.name = item.name

                if (group.component) {
                  group.value = item.value
                }

                const key = `${index}-${i}`
                return this.renderEl(h, group, key)
              })
            }
            return this.renderEl(h, item, index)
          })}
      </div>
    )
  }
}
</script>
