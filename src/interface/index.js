import merge from 'merge'

export function IFormBase (name = '', value = '') {
  return {
    name,
    value
  }
}

/**
 * form config
 * @param {Obejct} options form input item config
 * @param {String} options.name input name
 * @param {String} options.value input value, bind v-model
 * @param {Object} [options.component] input component
 * @param {Array} [options.children] `createElement` children
 * @param {renderCallback[]} [options.prepend] render function, insert bebore input
 * @param {renderCallback[]} [options.append] render function, insert after input
 * @param {Object} [options.config={}] the second argument to the `createElement`
 * @param {Group[]} [options.group=[]] group elements like radios, `options.name` will set to `Group.name`, native radio element need `Group.value`
 */
export function IFormField (...options) {
  const base = IFormBase()
  const field = merge.recursive(base, ...options)
  return field
}
/**
 * renderCallback
 * @callback renderCallback
 * @param {Function} h `createElement` function
 * @param {Object} ctx form component instance
 * @param {Object} cur current form item
 */
