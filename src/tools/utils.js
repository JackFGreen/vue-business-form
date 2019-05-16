export function isArray (o) {
  return Array.isArray(o)
}

export function isFunction (o) {
  return typeof o === 'function'
}

export function mkField (handler, config) {
  return (...options) => {
    return handler(config, ...options)
  }
}

export function renderCont (h) {
  return cont => {
    return isFunction(cont) ? cont(h) : cont
  }
}
