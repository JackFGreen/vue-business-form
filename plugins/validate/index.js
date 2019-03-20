/**
 * render validate error
 */
export function IValidateError (error) {
  return function (h, ctx, cur) {
    const inputName = cur.name
    const cont = error || ctx.errors.first(inputName)
    return h('div', {
      class: 'vbf__p-validate__error'
    }, cont)
  }
}

/**
 * init validate directive
 * @param {String} [name=validate] vue directive name
 * @param {Object} args directive args
 */
export function IValidateDirective ({ name = 'validate', ...args } = {}) {
  return {
    name,
    ...args
  }
}

export default {
  extend: {
    inject: ['$validator']
  }
}
