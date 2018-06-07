import Vue from 'vue'

const getType = function (param) {
  return {}.toString.call(param).split(' ')[1].slice(0, -1)
}
const types = {
  typeIs (param) {
    return getType(param)
  },
  isArray (param) {
    return getType(param) === 'Array'
  },
  isString (param) {
    return getType(param) === 'String'
  },
  isObject (param) {
    return getType(param) === 'Object'
  },
  isNumber (param) {
    return getType(param) === 'Number'
  },
  isBoolean (param) {
    return getType(param) === 'Boolean'
  },
  isNull (param) {
    return getType(param) === 'Null'
  },
  isUndefined (param) {
    return getType(param) === 'Undefined'
  }
}
for (let a in types) { Vue.prototype[a] = types[a] }
export default types
