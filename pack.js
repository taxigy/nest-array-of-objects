const get = (object, path) => {
  if (path.length === 1) {
    return object[path[0]];
  }

  return get(object[path[0]], path.slice(1));
};

const set = (object, path, value) => {
  object[path[0]] = object[path[0]] || {};

  if (path.length === 1) {
    object[path[0]] = value;
    return object;
  }

  return set(object[path[0]], path.slice(1), value);
};

const pack = (k, v, xs) => {
  let result = {};

  for (let x of xs) {
    set(result, get(x, k).split("."), get(x, v));
  }

  return result;
};

module.exports = pack;
