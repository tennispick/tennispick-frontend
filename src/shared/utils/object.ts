export const isEmptyObj = (obj: object) => {
  if (Object.prototype.toString.call(obj) !== '[object Object]') {
    return false;
  }

  for (const prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      return false;
    }
  }

  return true;
};
