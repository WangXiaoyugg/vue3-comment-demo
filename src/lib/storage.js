function isObject(val) {
  return typeof val === 'object' && val !== null;
}

const defaultSerializer = {
  serialize(val) {
    if (isObject(val)) {
      return JSON.stringify(val)
    }
    return val;
  },
  deserialize(val) {
    console.log(val)
    try {
      return JSON.parse(val)
    } catch (e) {
      return val;
    }
  }
}

export function initStorage(type = "sessionStorage", serializer = {}) {
  if (type !== 'sessionStorage' && type !== 'localStorage') {
    throw Error(`storage type must be localStorage or sessionStorage`)
  }

  serializer = { ...defaultSerializer, serializer }

  const storage = window[type];

  const get = (key) => {
    return serializer.deserialize(storage.getItem(key))
  }
  const set = (key, value) => {
    storage.setItem(key, serializer.serialize(value))
  }
  const clear = () => {
    storage.clear()
  }

  return {
    get, set, clear,
  }
}