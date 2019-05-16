import { renderCont } from '../../src/tools/utils'

/**
 * render label
 * @param {String|Function} label String or Function return Array<VNodes>
 */
export function ILabel (label) {
  return function (h, ctx, cur) {
    const cont = renderCont(h)(label) || cur.name
    return h(
      'div',
      {
        class: 'vbf__p-label'
      },
      cont
    )
  }
}
