/**
 * render label
 */
export function ILabel (label) {
  return function (h, ctx, cur) {
    const cont = label || cur.name
    return h('div', {
      class: 'vbf__p-label'
    }, cont)
  }
}
